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



        lucide.createIcons();
    
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
      

<header className="mb-12 text-center max-w-2xl mx-auto">
<h1 className="text-3xl font-medium tracking-tight text-[#1E1E1E] mb-2">Nearby UI System</h1>
<p className="text-[#7A7A7A]">A high-fidelity design system for activity discovery.</p>
</header>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 max-w-screen-2xl mx-auto">

<div className="relative w-full aspect-[9/19] bg-[#F3F1F3] rounded-[2.5rem] overflow-hidden shadow-2xl border-[6px] border-white ring-1 ring-black/5 flex flex-col">

<div className="absolute top-[-20%] left-[-20%] w-[80%] h-[40%] bg-[#D6D3D6] rounded-full blur-3xl opacity-40"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[40%] bg-[#AAA7AA] rounded-full blur-3xl opacity-20"></div>
<div className="flex-1 flex flex-col items-center justify-center p-6 relative z-10">
<div className="w-16 h-16 glass-panel rounded-2xl flex items-center justify-center mb-8 shadow-sm">
<span className="text-2xl font-medium tracking-tighter">Nb</span>
</div>
<h2 className="text-2xl font-medium tracking-tight text-center mb-2">Find your crowd</h2>
<p className="text-[#7A7A7A] text-center text-sm leading-relaxed px-4">
                    Discover people nearby doing exactly what you love, right now.
                </p>
<div className="flex gap-2 mt-8 mb-12">
<div className="w-2 h-2 rounded-full bg-[#1E1E1E]"></div>
<div className="w-2 h-2 rounded-full bg-[#1E1E1E]/20"></div>
<div className="w-2 h-2 rounded-full bg-[#1E1E1E]/20"></div>
</div>
</div>
<div className="p-6 pb-10 z-10">
<button className="w-full bg-[#1E1E1E] text-white py-4 rounded-2xl font-medium text-sm hover:bg-[#333] transition-colors shadow-lg shadow-black/5">
                    Get Started
                </button>
<div className="mt-4 text-center">
<span className="text-xs text-[#7A7A7A]">Already have an account? <a className="text-[#1E1E1E] underline decoration-stone-300" href="#">Sign in</a></span>
</div>
</div>
</div>

<div className="relative w-full aspect-[9/19] bg-[#F3F1F3] rounded-[2.5rem] overflow-hidden shadow-2xl border-[6px] border-white ring-1 ring-black/5 flex flex-col">
<div className="pt-12 px-6 pb-4">
<div className="flex items-center justify-between mb-6">
<button className="p-2 rounded-full glass-card text-[#7A7A7A] hover:text-[#1E1E1E]">
<i className="w-5 h-5" data-lucide="chevron-left"></i>
</button>
<div className="h-1 w-12 bg-[#D6D3D6] rounded-full"></div>
<div className="w-9"></div> 
</div>
<h2 className="text-xl font-medium tracking-tight mb-2">What are you into?</h2>
<p className="text-xs text-[#7A7A7A] mb-6">Select at least 3 activities to find others.</p>
<div className="grid grid-cols-2 gap-3">

<div className="p-4 rounded-2xl bg-[#1E1E1E] text-white flex flex-col items-start gap-3 shadow-md">
<i className="w-5 h-5 opacity-80" data-lucide="coffee"></i>
<span className="text-sm font-medium">Coffee</span>
</div>

<div className="p-4 rounded-2xl glass-card text-[#7A7A7A] hover:bg-white/60 transition flex flex-col items-start gap-3">
<i className="w-5 h-5 opacity-70" data-lucide="dumbbell"></i>
<span className="text-sm font-medium">Gym</span>
</div>

<div className="p-4 rounded-2xl bg-[#1E1E1E] text-white flex flex-col items-start gap-3 shadow-md">
<i className="w-5 h-5 opacity-80" data-lucide="book"></i>
<span className="text-sm font-medium">Reading</span>
</div>

<div className="p-4 rounded-2xl glass-card text-[#7A7A7A] hover:bg-white/60 transition flex flex-col items-start gap-3">
<i className="w-5 h-5 opacity-70" data-lucide="camera"></i>
<span className="text-sm font-medium">Photo</span>
</div>

<div className="p-4 rounded-2xl glass-card text-[#7A7A7A] hover:bg-white/60 transition flex flex-col items-start gap-3">
<i className="w-5 h-5 opacity-70" data-lucide="code"></i>
<span className="text-sm font-medium">Coding</span>
</div>

<div className="p-4 rounded-2xl bg-[#1E1E1E] text-white flex flex-col items-start gap-3 shadow-md">
<i className="w-5 h-5 opacity-80" data-lucide="music"></i>
<span className="text-sm font-medium">Music</span>
</div>
</div>
</div>
<div className="mt-auto p-6 pb-10 glass-panel border-t-0 border-b-0 rounded-t-3xl backdrop-blur-xl">
<button className="w-full bg-[#1E1E1E] text-white py-4 rounded-2xl font-medium text-sm shadow-lg shadow-black/5 flex items-center justify-center gap-2">
                    Continue <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>

<div className="relative w-full aspect-[9/19] bg-[#F3F1F3] rounded-[2.5rem] overflow-hidden shadow-2xl border-[6px] border-white ring-1 ring-black/5 flex flex-col">

<div className="pt-12 px-6 pb-2 flex justify-between items-center z-20">
<div className="flex items-center gap-2">
<span className="text-lg font-medium tracking-tight">Nearby</span>
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
</div>
<div className="flex items-center gap-2 bg-white/40 p-1 rounded-full border border-white/30 backdrop-blur-sm">
<button className="p-2 rounded-full bg-white shadow-sm text-[#1E1E1E]"><i className="w-4 h-4" data-lucide="list"></i></button>
<button className="p-2 rounded-full text-[#7A7A7A] hover:text-[#1E1E1E]"><i className="w-4 h-4" data-lucide="map"></i></button>
</div>
</div>

<div className="px-6 py-2 overflow-x-auto hide-scrollbar flex gap-4 z-20">
<button className="text-sm font-medium text-[#1E1E1E] border-b-2 border-[#1E1E1E] pb-1">People</button>
<button className="text-sm font-medium text-[#7A7A7A] pb-1 hover:text-[#1E1E1E]">Rooms</button>
<button className="text-sm font-medium text-[#7A7A7A] pb-1 hover:text-[#1E1E1E]">Trending</button>
</div>

<div className="flex-1 overflow-y-auto hide-scrollbar px-6 pt-4 pb-24 space-y-4">

<div className="glass-card p-4 rounded-2xl flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-[#D6D3D6] flex items-center justify-center text-lg relative overflow-hidden">
<img alt="avatar" className="w-full h-full object-cover opacity-90" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
<div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-white rounded-full"></div>
</div>
<div className="flex-1 min-w-0">
<h4 className="text-sm font-medium text-[#1E1E1E] truncate">Alex M.</h4>
<div className="flex items-center gap-1.5 mt-0.5">
<span className="text-xs text-[#7A7A7A]">Working on</span>
<span className="px-1.5 py-0.5 rounded-md bg-[#1E1E1E]/5 text-[10px] font-medium text-[#1E1E1E] border border-[#1E1E1E]/10">Code</span>
</div>
</div>
<div className="text-right">
<span className="text-xs font-medium text-[#1E1E1E]">0.2mi</span>
<div className="text-[10px] text-[#7A7A7A]">3m ago</div>
</div>
</div>

<div className="glass-card p-4 rounded-2xl flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-[#D6D3D6] flex items-center justify-center text-lg relative overflow-hidden">
<img alt="avatar" className="w-full h-full object-cover opacity-90" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"/>
</div>
<div className="flex-1 min-w-0">
<h4 className="text-sm font-medium text-[#1E1E1E] truncate">Sarah K.</h4>
<div className="flex items-center gap-1.5 mt-0.5">
<span className="text-xs text-[#7A7A7A]">Looking for</span>
<span className="px-1.5 py-0.5 rounded-md bg-[#1E1E1E]/5 text-[10px] font-medium text-[#1E1E1E] border border-[#1E1E1E]/10">Coffee</span>
</div>
</div>
<div className="text-right">
<span className="text-xs font-medium text-[#1E1E1E]">0.5mi</span>
<div className="text-[10px] text-[#7A7A7A]">12m ago</div>
</div>
</div>

<div className="p-4 rounded-2xl bg-[#1E1E1E] text-white shadow-lg relative overflow-hidden">
<div className="absolute right-[-20px] top-[-20px] w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
<div className="flex justify-between items-start mb-2">
<span className="px-2 py-0.5 rounded-full bg-white/20 text-[10px] font-medium backdrop-blur-md">Hot Room</span>
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-stone-300 border border-[#1E1E1E]"></div>
<div className="w-6 h-6 rounded-full bg-stone-400 border border-[#1E1E1E]"></div>
<div className="w-6 h-6 rounded-full bg-stone-500 border border-[#1E1E1E]"></div>
</div>
</div>
<h4 className="text-sm font-medium mb-1">Design Critique 🎨</h4>
<p className="text-xs text-stone-400 mb-3">5 people discussing minimal UI</p>
<button className="w-full py-2 rounded-xl bg-white text-[#1E1E1E] text-xs font-medium hover:bg-stone-100 transition">Join Room</button>
</div>
</div>

<div className="absolute bottom-6 left-6 right-6 glass-dark rounded-2xl flex justify-between items-center px-6 py-4 shadow-2xl z-30">
<button className="text-white"><i className="w-5 h-5" data-lucide="home"></i></button>
<button className="text-white/40 hover:text-white transition"><i className="w-5 h-5" data-lucide="search"></i></button>
<button className="text-white/40 hover:text-white transition"><i className="w-5 h-5" data-lucide="message-square"></i></button>
<button className="text-white/40 hover:text-white transition"><i className="w-5 h-5" data-lucide="user"></i></button>
</div>
</div>

<div className="relative w-full aspect-[9/19] bg-stone-800 rounded-[2.5rem] overflow-hidden shadow-2xl border-[6px] border-white ring-1 ring-black/5 flex flex-col">

<div className="absolute inset-0 bg-[#F3F1F3] opacity-20 pointer-events-none"></div>

<div className="mt-auto h-[85%] bg-[#F3F1F3]/95 backdrop-blur-2xl rounded-t-[2rem] w-full flex flex-col shadow-2xl relative overflow-hidden">
<div className="w-12 h-1.5 bg-[#D6D3D6] rounded-full mx-auto mt-4 mb-6"></div>
<div className="px-6 flex justify-between items-center mb-8">
<h2 className="text-xl font-medium tracking-tight">Filters</h2>
<button className="text-xs font-medium text-[#7A7A7A] hover:text-[#1E1E1E]">Reset</button>
</div>
<div className="px-6 space-y-8 overflow-y-auto hide-scrollbar pb-10">

<div>
<h3 className="text-xs font-medium text-[#7A7A7A] uppercase tracking-wider mb-4">Distance</h3>
<div className="flex justify-between text-xs font-medium mb-2">
<span>Nearby</span>
<span>5 mi</span>
</div>
<div className="h-1.5 w-full bg-[#D6D3D6] rounded-full relative">
<div className="absolute left-0 top-0 h-full w-1/3 bg-[#1E1E1E] rounded-full"></div>
<div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-5 h-5 bg-white border border-stone-200 shadow-md rounded-full"></div>
</div>
</div>

<div>
<h3 className="text-xs font-medium text-[#7A7A7A] uppercase tracking-wider mb-4">Activity</h3>
<div className="flex flex-wrap gap-2">
<button className="px-4 py-2 rounded-xl bg-[#1E1E1E] text-white text-xs font-medium shadow-sm">All</button>
<button className="px-4 py-2 rounded-xl glass-panel text-[#1E1E1E] text-xs font-medium border-stone-300">Same as me</button>
<button className="px-4 py-2 rounded-xl glass-panel text-[#7A7A7A] text-xs font-medium border-transparent">Popular</button>
</div>
</div>

<div>
<h3 className="text-xs font-medium text-[#7A7A7A] uppercase tracking-wider mb-4">Status</h3>
<div className="flex flex-col gap-3">
<label className="flex items-center justify-between p-4 rounded-xl glass-card">
<span className="text-sm font-medium">Online Now</span>
<div className="w-5 h-5 rounded-md border border-[#1E1E1E] flex items-center justify-center bg-[#1E1E1E]">
<i className="w-3 h-3 text-white" data-lucide="check"></i>
</div>
</label>
<label className="flex items-center justify-between p-4 rounded-xl glass-card">
<span className="text-sm font-medium text-[#7A7A7A]">Has Photo</span>
<div className="w-5 h-5 rounded-md border border-[#D6D3D6]"></div>
</label>
</div>
</div>
</div>
<div className="p-6 border-t border-white/50 bg-white/40 backdrop-blur-md">
<button className="w-full bg-[#1E1E1E] text-white py-4 rounded-2xl font-medium text-sm shadow-lg hover:scale-[1.02] transition">
                        Show 24 Results
                    </button>
</div>
</div>
</div>

<div className="relative w-full aspect-[9/19] bg-[#E8E6E8] rounded-[2.5rem] overflow-hidden shadow-2xl border-[6px] border-white ring-1 ring-black/5 flex flex-col">

<div className="pt-12 px-6 flex justify-between items-start z-10">
<button className="p-2 rounded-full glass-card text-[#1E1E1E]"><i className="w-5 h-5" data-lucide="chevron-down"></i></button>
<div className="text-center">
<h3 className="text-sm font-medium">Product Talk</h3>
<span className="text-xs text-[#7A7A7A]">4 Live · 12:40</span>
</div>
<button className="p-2 rounded-full glass-card text-[#1E1E1E]"><i className="w-5 h-5" data-lucide="more-horizontal"></i></button>
</div>

<div className="flex-1 p-6 grid grid-cols-2 gap-4 content-center">
<div className="aspect-square rounded-3xl bg-white/40 relative overflow-hidden flex items-center justify-center border border-white/40 shadow-sm">
<img alt="user" className="w-20 h-20 opacity-90" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jack"/>
<div className="absolute bottom-3 left-3 bg-[#1E1E1E]/10 backdrop-blur-md px-2 py-1 rounded-lg">
<span className="text-[10px] font-medium text-[#1E1E1E]">Jack</span>
</div>
</div>
<div className="aspect-square rounded-3xl bg-[#1E1E1E] relative overflow-hidden flex items-center justify-center shadow-lg ring-2 ring-emerald-400/50">
<img alt="user" className="w-20 h-20" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Annie"/>
<div className="absolute bottom-3 left-3 bg-white/20 backdrop-blur-md px-2 py-1 rounded-lg flex gap-1 items-center">
<div className="flex gap-0.5 h-2 items-end">
<div className="w-0.5 bg-white h-full animate-pulse"></div>
<div className="w-0.5 bg-white h-2/3 animate-pulse"></div>
<div className="w-0.5 bg-white h-1/2 animate-pulse"></div>
</div>
<span className="text-[10px] font-medium text-white">Annie</span>
</div>
</div>
<div className="aspect-square rounded-3xl bg-white/40 relative overflow-hidden flex items-center justify-center border border-white/40 shadow-sm">
<div className="w-16 h-16 rounded-full bg-stone-200 flex items-center justify-center text-[#7A7A7A]"><i className="w-6 h-6" data-lucide="user"></i></div>
</div>
<div className="aspect-square rounded-3xl bg-white/40 relative overflow-hidden flex items-center justify-center border border-white/40 shadow-sm">
<div className="w-16 h-16 rounded-full bg-stone-200 flex items-center justify-center text-[#7A7A7A]"><i className="w-6 h-6" data-lucide="user"></i></div>
</div>
</div>

<div className="p-6 pb-10 glass-panel rounded-t-3xl border-t border-white/40">
<div className="flex justify-between items-center px-4">
<button className="p-4 rounded-full bg-rose-100 text-rose-600 hover:bg-rose-200 transition"><i className="w-6 h-6" data-lucide="phone-off"></i></button>
<button className="p-6 rounded-[2rem] bg-[#1E1E1E] text-white shadow-xl hover:scale-105 transition"><i className="w-6 h-6" data-lucide="mic"></i></button>
<button className="p-4 rounded-full bg-white text-[#1E1E1E] hover:bg-stone-50 transition"><i className="w-6 h-6" data-lucide="message-circle"></i></button>
</div>
</div>
</div>

<div className="relative w-full aspect-[9/19] bg-[#F3F1F3] rounded-[2.5rem] overflow-hidden shadow-2xl border-[6px] border-white ring-1 ring-black/5 flex flex-col">

<div className="pt-12 px-6 pb-4 glass-panel border-b border-white/20 flex items-center gap-4 z-20">
<button className="text-[#1E1E1E]"><i className="w-5 h-5" data-lucide="arrow-left"></i></button>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-stone-300 relative">
<div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border border-white rounded-full"></div>
</div>
<div>
<h3 className="text-sm font-medium leading-none">Marcus G.</h3>
<span className="text-[10px] text-emerald-600 font-medium">Online</span>
</div>
</div>
</div>

<div className="flex-1 p-4 space-y-6 overflow-y-auto hide-scrollbar flex flex-col justify-end">
<div className="text-center text-[10px] text-[#D6D3D6] font-medium uppercase tracking-widest my-4">Today</div>

<div className="flex gap-3 items-end">
<div className="w-6 h-6 rounded-full bg-stone-300 shrink-0 mb-1"></div>
<div className="bg-white p-3 rounded-2xl rounded-bl-sm border border-stone-100 shadow-sm max-w-[75%]">
<p className="text-sm text-[#1E1E1E]">Hey! Are you still at the coffee shop downtown?</p>
</div>
</div>

<div className="flex gap-3 items-end justify-end">
<div className="bg-[#1E1E1E] p-3 rounded-2xl rounded-br-sm shadow-sm max-w-[75%]">
<p className="text-sm text-white">Yeah, just grabbed a table. It's pretty quiet here.</p>
</div>
</div>

<div className="flex gap-3 items-end">
<div className="w-6 h-6 rounded-full bg-stone-300 shrink-0 mb-1"></div>
<div className="bg-white p-3 rounded-2xl rounded-bl-sm border border-stone-100 shadow-sm max-w-[75%]">
<p className="text-sm text-[#1E1E1E]">Perfect, heading over now! 🏃‍♂️</p>
</div>
</div>
<div className="h-4"></div>
</div>

<div className="p-4 pb-8 glass-panel border-t border-white/20">
<div className="flex items-center gap-2 bg-white/60 p-1.5 pr-2 rounded-2xl border border-stone-200 focus-within:ring-2 focus-within:ring-[#1E1E1E]/10 transition-all">
<button className="p-2 rounded-xl text-[#7A7A7A] hover:bg-white/50"><i className="w-5 h-5" data-lucide="plus"></i></button>
<input className="flex-1 bg-transparent border-none outline-none text-sm text-[#1E1E1E] placeholder:text-[#AAA7AA] h-8" placeholder="Message..." type="text"/>
<button className="p-2 rounded-xl bg-[#1E1E1E] text-white shadow-md"><i className="w-4 h-4" data-lucide="arrow-up"></i></button>
</div>
</div>
</div>

<div className="relative w-full aspect-[9/19] bg-[#F3F1F3] rounded-[2.5rem] overflow-hidden shadow-2xl border-[6px] border-white ring-1 ring-black/5 flex flex-col">
<div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#D6D3D6] to-transparent opacity-50"></div>
<div className="relative px-6 pt-12 flex justify-between items-start mb-4">
<button className="p-2 rounded-full glass-card text-[#1E1E1E]"><i className="w-5 h-5" data-lucide="arrow-left"></i></button>
<button className="p-2 rounded-full glass-card text-[#1E1E1E]"><i className="w-5 h-5" data-lucide="settings"></i></button>
</div>
<div className="px-6 flex flex-col items-center mb-6 relative">
<div className="w-24 h-24 rounded-full bg-[#E8E6E8] p-1 shadow-lg mb-4">
<img alt="Profile" className="w-full h-full rounded-full bg-stone-100 object-cover" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
</div>
<h2 className="text-xl font-medium tracking-tight text-[#1E1E1E]">Felix Anderson</h2>
<p className="text-sm text-[#7A7A7A] mb-4">San Francisco, CA</p>
<div className="flex gap-4 w-full justify-center mb-6">
<div className="flex flex-col items-center p-3 w-20 rounded-2xl glass-card">
<span className="text-lg font-semibold text-[#1E1E1E]">12</span>
<span className="text-[10px] text-[#7A7A7A] uppercase tracking-wide">Friends</span>
</div>
<div className="flex flex-col items-center p-3 w-20 rounded-2xl glass-card">
<span className="text-lg font-semibold text-[#1E1E1E]">8</span>
<span className="text-[10px] text-[#7A7A7A] uppercase tracking-wide">Rooms</span>
</div>
</div>
<div className="flex gap-2 w-full">
<button className="flex-1 py-2.5 rounded-xl bg-[#1E1E1E] text-white text-xs font-medium shadow-md">Edit Profile</button>
<button className="flex-1 py-2.5 rounded-xl bg-white border border-stone-200 text-[#1E1E1E] text-xs font-medium shadow-sm">Share</button>
</div>
</div>
<div className="flex-1 bg-white/40 backdrop-blur-xl rounded-t-[2rem] border-t border-white/30 p-6 overflow-y-auto hide-scrollbar">
<h3 className="text-sm font-medium mb-4">My Interests</h3>
<div className="flex flex-wrap gap-2 mb-8">
<span className="px-3 py-1.5 rounded-lg bg-white border border-stone-100 text-xs text-[#7A7A7A]">Coding</span>
<span className="px-3 py-1.5 rounded-lg bg-white border border-stone-100 text-xs text-[#7A7A7A]">Design</span>
<span className="px-3 py-1.5 rounded-lg bg-white border border-stone-100 text-xs text-[#7A7A7A]">Photography</span>
<span className="px-3 py-1.5 rounded-lg bg-white border border-stone-100 text-xs text-[#7A7A7A]">Running</span>
</div>
<h3 className="text-sm font-medium mb-4">Recent Activity</h3>
<div className="space-y-3">
<div className="flex items-center gap-3 p-3 rounded-xl bg-white/60 border border-white/40 shadow-sm">
<div className="w-10 h-10 rounded-lg bg-stone-100 flex items-center justify-center text-[#1E1E1E]"><i className="w-5 h-5" data-lucide="coffee"></i></div>
<div>
<div className="text-xs font-medium">Coffee Break</div>
<div className="text-[10px] text-[#7A7A7A]">Yesterday</div>
</div>
</div>
</div>
</div>
</div>

<div className="relative w-full aspect-[9/19] bg-[#F3F1F3] rounded-[2.5rem] overflow-hidden shadow-2xl border-[6px] border-white ring-1 ring-black/5 flex flex-col items-center justify-center p-8">

<div className="w-full glass-card p-6 rounded-3xl flex flex-col items-center text-center mb-6">
<div className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center text-rose-500 mb-4">
<i className="w-6 h-6" data-lucide="map-pin-off"></i>
</div>
<h3 className="text-sm font-medium mb-1">Location Disabled</h3>
<p className="text-xs text-[#7A7A7A] mb-4">We need your location to find people nearby.</p>
<button className="px-4 py-2 rounded-xl bg-[#1E1E1E] text-white text-xs font-medium w-full">Enable Location</button>
</div>

<div className="w-full glass-card p-6 rounded-3xl flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center text-[#AAA7AA] mb-4">
<i className="w-6 h-6" data-lucide="ghost"></i>
</div>
<h3 className="text-sm font-medium mb-1">It's quiet here</h3>
<p className="text-xs text-[#7A7A7A] mb-4">No one is nearby right now. Try expanding your search radius.</p>
<button className="px-4 py-2 rounded-xl bg-white border border-stone-200 text-[#1E1E1E] text-xs font-medium w-full shadow-sm">Adjust Filters</button>
</div>
</div>
</div>


    </>
  );
}
