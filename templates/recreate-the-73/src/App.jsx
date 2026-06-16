import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
<div className="flex items-center gap-12 w-full md:w-auto justify-between md:justify-start">

<div className="flex items-center gap-2">
<div className="text-orange-500">
<i className="w-6 h-6" data-lucide="activity" strokeWidth="2.5"></i>
</div>
<span className="text-xl font-semibold tracking-tight uppercase text-white">Vexora</span>
</div>

<div className="hidden md:flex items-center bg-[#1C1E24] p-1.5 rounded-full border border-white/5">
<a className="px-5 py-2 bg-white text-black rounded-full text-sm font-medium transition-all shadow-sm" href="#">Dashboard</a>
<a className="px-5 py-2 text-zinc-400 hover:text-white text-sm font-medium transition-colors" href="#">Statistics</a>
<a className="px-5 py-2 text-zinc-400 hover:text-white text-sm font-medium transition-colors" href="#">Exercises</a>
<a className="px-5 py-2 text-zinc-400 hover:text-white text-sm font-medium transition-colors" href="#">Schedule</a>
</div>
</div>

<div className="flex items-center gap-4 w-full md:w-auto justify-end">
<button className="p-3 bg-[#1C1E24] rounded-full text-zinc-400 hover:text-white border border-white/5 transition-colors">
<i className="w-5 h-5" data-lucide="search"></i>
</button>
<button className="hidden sm:flex items-center gap-2 bg-[#D4F976] text-black px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#c3e860] transition-colors">
<i className="w-4 h-4 fill-current" data-lucide="crown"></i>
<span>Upgrade</span>
</button>
<div className="flex items-center gap-3 pl-2">
<button className="relative">
<i className="w-6 h-6 text-zinc-400 hover:text-white transition-colors" data-lucide="bell"></i>
<span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-[#0D0E12]"></span>
</button>
<img alt="Profile" className="w-10 h-10 rounded-full border-2 border-[#1C1E24] object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100"/>
</div>
</div>
</nav>

<main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">


<div className="lg:col-span-8 grid grid-cols-1 lg:grid-cols-5 gap-6">

<div className="lg:col-span-3 relative bg-[#1C1E24] rounded-[2rem] p-8 overflow-hidden flex flex-col justify-between min-h-[420px] group border border-white/5">

<div className="absolute inset-0 z-0">
<img alt="Yoga" className="w-full h-full object-cover opacity-80 mix-blend-overlay" src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-r from-[#1C1E24] via-[#1C1E24]/80 to-transparent"></div>
</div>

<div className="relative z-10 max-w-sm">
<h1 className="text-4xl font-medium tracking-tight text-white mb-3 leading-[1.1]">Your Daily Health Snapshot</h1>
<p className="text-lg text-zinc-400 mb-8 font-light">Boost focus, sleep &amp; balance with our premium tracking tools.</p>
<div className="flex items-center gap-3">
<button className="bg-white text-black px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-200 transition-colors">
                            Start Free Trial
                            <i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</button>
<button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors backdrop-blur-md">
<i className="w-5 h-5 fill-white" data-lucide="play"></i>
</button>
</div>
</div>

<div className="relative z-10 mt-auto pt-8">
<p className="text-sm text-zinc-400 mb-3">Join program with</p>
<div className="flex items-center gap-3">
<div className="flex -space-x-3">
<img alt="User" className="w-10 h-10 rounded-full border-2 border-[#1C1E24]" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-[#1C1E24]" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-[#1C1E24]" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
</div>
<span className="text-white font-medium text-lg">5.8k+ <span className="text-sm text-zinc-400 font-normal">Members</span></span>
</div>
</div>
</div>

<div className="lg:col-span-2 flex flex-col gap-6">

<div className="bg-white rounded-[2rem] p-6 flex-1 flex flex-col justify-between min-h-[180px] text-black">
<div className="flex justify-between items-start">
<span className="font-medium text-lg">Calories</span>
<div className="p-1 bg-gray-100 rounded-full">
<i className="w-4 h-4 text-orange-500" data-lucide="flame"></i>
</div>
</div>
<div className="flex items-center justify-center py-2">

<div className="relative w-32 h-16 overflow-hidden">
<div className="w-32 h-32 rounded-full border-[12px] border-gray-100 absolute top-0 left-0"></div>
<div className="w-32 h-32 rounded-full border-[12px] border-orange-400 absolute top-0 left-0 border-t-transparent border-l-transparent border-r-transparent rotate-45 transform origin-center"></div>
<i className="w-6 h-6 text-orange-400 absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-2 fill-current" data-lucide="zap"></i>
</div>
</div>
<div>
<div className="text-3xl font-semibold tracking-tight">580 <span className="text-base text-gray-500 font-normal">kcal</span></div>
<p className="text-sm text-gray-400">Remaining: 480 kcal</p>
</div>
</div>
<div className="flex gap-6 h-full">

<div className="bg-[#1C1E24] rounded-[2rem] p-5 flex-1 flex flex-col justify-between border border-white/5">
<div className="flex justify-between items-start mb-2">
<span className="text-zinc-400 text-sm">Heart Rate</span>
</div>

<svg className="w-full h-12 stroke-orange-400 fill-none" preserveaspectratio="none" viewbox="0 0 100 40">
<path d="M0,35 L10,35 L15,10 L20,35 L30,35 L35,5 L40,35 L50,35 L55,15 L60,35 L100,35" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<div className="mt-2">
<div className="text-2xl font-semibold text-white">112 <span className="text-xs text-zinc-500 font-normal">bpm</span></div>
<p className="text-xs text-zinc-500">Yesterday: 108 bpm</p>
</div>
</div>

<div className="bg-[#1C1E24] rounded-[2rem] p-5 flex-1 flex flex-col justify-between border border-white/5">
<div className="flex justify-between items-start mb-2">
<span className="text-zinc-400 text-sm">Steps</span>
</div>

<svg className="w-full h-12 stroke-[#D4F976] fill-none" preserveaspectratio="none" viewbox="0 0 100 40">
<path d="M0,25 Q15,35 25,20 T50,20 T75,10 T100,15" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<circle className="fill-[#0D0E12] stroke-[#D4F976] stroke-2" cx="75" cy="10" r="3"></circle>
</svg>
<div className="mt-2">
<div className="text-2xl font-semibold text-white">1.060 <span className="text-xs text-zinc-500 font-normal">Steps</span></div>
<p className="text-xs text-zinc-500">Yesterday: 978 steps</p>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-4 bg-[#1C1E24] rounded-[2rem] p-8 flex flex-col relative border border-white/5">
<div className="flex justify-between items-center mb-6">
<h3 className="text-xl font-medium text-white">Stress Level</h3>
<button className="text-zinc-500 hover:text-white"><i className="w-6 h-6" data-lucide="more-horizontal"></i></button>
</div>

<div className="flex-1 flex flex-col items-center justify-center relative mt-4">
<div className="relative w-64 h-32 overflow-hidden">

<div className="absolute w-64 h-64 rounded-full border-[20px] border-[#2A2D35] border-dashed border-b-transparent top-0 left-0 box-border"></div>

<div className="absolute w-64 h-64 rounded-full border-[20px] border-transparent border-t-orange-500 border-l-orange-500 border-dashed top-0 left-0 box-border rotate-[-45deg] opacity-80" style={{clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)'}}></div>
</div>

<div className="absolute bottom-8 text-center">
<div className="text-3xl font-medium text-white tracking-tight">Low Stress</div>
<div className="text-zinc-500 text-sm mt-1">Current Level</div>
</div>

<div className="absolute top-[35%] left-[30%]">
<i className="w-4 h-4 fill-orange-500 text-orange-500 rotate-180" data-lucide="play"></i>
</div>
</div>
<div className="flex justify-center mt-6">
<span className="bg-white text-black text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide">High Level</span>
</div>

<div className="mt-8">
<svg className="w-full h-12 stroke-orange-500/50 fill-none" preserveaspectratio="none" viewbox="0 0 200 40">
<path d="M0,35 Q30,35 50,30 T100,20 T150,30 T200,35" strokeWidth="2"></path>
<path d="M0,35 Q30,35 50,30 T100,20 T150,30 T200,35" fill="url(#gradient-stress)" strokeWidth="0"></path>
</svg>
<div className="flex justify-between text-xs text-zinc-500 mt-2 font-medium">
<span>Daily Dynamic</span>
<span>01:00 PM</span>
</div>
</div>
</div>


<div className="lg:col-span-5 bg-[#1C1E24] rounded-[2rem] p-8 flex flex-col justify-between border border-white/5">
<div className="flex justify-between items-center mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400">
<i className="w-5 h-5" data-lucide="moon"></i>
</div>
<h3 className="text-xl font-medium text-zinc-200">Sleep</h3>
</div>
<button className="text-zinc-500 hover:text-white"><i className="w-6 h-6" data-lucide="more-horizontal"></i></button>
</div>

<div className="flex gap-12 mb-8">
<div>
<div className="text-3xl font-medium text-white tracking-tight">5:44</div>
<div className="text-base text-zinc-500 mt-1">Time Sleep</div>
</div>
<div>
<div className="text-3xl font-medium text-white tracking-tight">72%</div>
<div className="text-base text-zinc-500 mt-1">Quality</div>
</div>
<div>
<div className="text-3xl font-medium text-[#D4F976] tracking-tight flex items-center gap-1">
<i className="w-5 h-5" data-lucide="arrow-up"></i> 16%
                    </div>
<div className="text-base text-zinc-500 mt-1">Than Yesterday</div>
</div>
</div>

<div className="bg-[#252830] rounded-2xl p-6 relative">
<div className="flex items-end justify-between gap-1 h-16 relative z-10">

<div className="w-full h-2 bg-orange-400 rounded-full"></div>
<div className="w-full h-6 bg-[#D4F976] rounded-full mx-1"></div>
<div className="w-full h-3 bg-teal-500 rounded-full"></div>
<div className="w-full h-3 bg-teal-500 rounded-full"></div>
<div className="w-full h-8 bg-[#D4F976] rounded-full mx-1"></div>
<div className="w-full h-3 bg-teal-500 rounded-full"></div>
<div className="w-full h-3 bg-teal-500 rounded-full"></div>
<div className="w-full h-10 bg-amber-400 rounded-full mx-1"></div>
<div className="w-full h-3 bg-teal-500 rounded-full"></div>
<div className="w-full h-3 bg-teal-500 rounded-full"></div>
<div className="w-full h-6 bg-[#D4F976] rounded-full"></div>
<div className="w-full h-4 bg-teal-500 rounded-full"></div>
</div>
<div className="flex justify-between text-xs text-zinc-500 mt-4 font-medium">
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="moon"></i> 01:38</span>
<span className="flex items-center gap-1">07:12 <i className="w-3 h-3" data-lucide="sun"></i></span>
</div>
</div>

<div className="grid grid-cols-4 gap-2 mt-6">
<div className="text-center">
<div className="flex items-center justify-center gap-2 text-zinc-400 text-sm mb-1"><span className="w-2 h-2 rounded-full bg-orange-400"></span> Awake</div>
<div className="text-white font-medium">20min</div>
</div>
<div className="text-center">
<div className="flex items-center justify-center gap-2 text-zinc-400 text-sm mb-1"><span className="w-2 h-2 rounded-full bg-amber-400"></span> REM</div>
<div className="text-white font-medium">1h 9min</div>
</div>
<div className="text-center">
<div className="flex items-center justify-center gap-2 text-zinc-400 text-sm mb-1"><span className="w-2 h-2 rounded-full bg-[#D4F976]"></span> Core</div>
<div className="text-white font-medium">4h 17min</div>
</div>
<div className="text-center">
<div className="flex items-center justify-center gap-2 text-zinc-400 text-sm mb-1"><span className="w-2 h-2 rounded-full bg-teal-500"></span> Deep</div>
<div className="text-white font-medium">18min</div>
</div>
</div>
</div>

<div className="lg:col-span-4 bg-[#1C1E24] rounded-[2rem] p-8 flex flex-col border border-white/5">
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="text-xl font-medium text-zinc-200">Walking for the last 7 weeks</h3>
<p className="text-zinc-500 text-sm mt-1">Avg this week</p>
<div className="text-4xl font-medium text-white mt-2 tracking-tight">10,276 <span className="text-lg text-zinc-500 font-normal">steps</span></div>
</div>
<button className="text-zinc-500 hover:text-white"><i className="w-6 h-6" data-lucide="more-horizontal"></i></button>
</div>
<div className="flex-1 flex items-end justify-between gap-2 mt-4 relative">

<div className="absolute w-full top-1/2 border-t border-dashed border-zinc-600 z-0"></div>
<div className="absolute left-0 top-[45%] bg-[#1C1E24] pr-2 text-xs font-bold text-white z-10">9,459 AVG</div>

<div className="w-full bg-zinc-700/50 rounded-t-sm h-[40%] hover:bg-zinc-600 transition-colors"></div>
<div className="w-full bg-zinc-700/50 rounded-t-sm h-[60%] hover:bg-zinc-600 transition-colors"></div>
<div className="w-full bg-zinc-700/50 rounded-t-sm h-[35%] hover:bg-zinc-600 transition-colors"></div>
<div className="w-full bg-zinc-700/50 rounded-t-sm h-[50%] hover:bg-zinc-600 transition-colors"></div>
<div className="w-full bg-zinc-700/50 rounded-t-sm h-[75%] hover:bg-zinc-600 transition-colors"></div>
<div className="w-full bg-zinc-700/50 rounded-t-sm h-[20%] hover:bg-zinc-600 transition-colors"></div>
<div className="w-full bg-zinc-700/50 rounded-t-sm h-[45%] hover:bg-zinc-600 transition-colors"></div>
<div className="w-full bg-zinc-700/50 rounded-t-sm h-[60%] hover:bg-zinc-600 transition-colors"></div>
<div className="w-full bg-zinc-700/50 rounded-t-sm h-[30%] hover:bg-zinc-600 transition-colors"></div>
<div className="w-full bg-zinc-700/50 rounded-t-sm h-[55%] hover:bg-zinc-600 transition-colors"></div>
<div className="w-full bg-[#D4F976] rounded-t-sm h-[90%] shadow-[0_0_15px_rgba(212,249,118,0.3)]"></div>
<div className="w-full bg-[#D4F976] rounded-t-sm h-[80%] shadow-[0_0_15px_rgba(212,249,118,0.3)]"></div>
</div>
<div className="flex justify-between text-xs text-zinc-500 mt-4 font-medium px-1">
<span>1w</span>
<span>2w</span>
<span>3w</span>
<span>4w</span>
<span>5w</span>
<span>6w</span>
<span className="bg-white text-black px-2 py-0.5 rounded-full">7w</span>
</div>
</div>

<div className="lg:col-span-3 flex flex-col gap-6">

<div className="bg-[#D4F976] rounded-[2rem] p-6 relative overflow-hidden flex-1 min-h-[160px]">
<div className="relative z-10 w-2/3">
<div className="text-xs font-bold uppercase tracking-wider text-black/60 mb-1">Today's Special Meals</div>
<h4 className="text-lg font-semibold text-black leading-tight mb-4">Salmon wrap sandwich roll with cheese</h4>
<div className="text-xs font-bold text-black/70 mb-1">Health Score: 88/100</div>
<div className="flex gap-1">
<div className="h-2 w-1.5 bg-black rounded-full opacity-100"></div>
<div className="h-2 w-1.5 bg-black rounded-full opacity-100"></div>
<div className="h-2 w-1.5 bg-black rounded-full opacity-100"></div>
<div className="h-2 w-1.5 bg-black rounded-full opacity-100"></div>
<div className="h-2 w-1.5 bg-black rounded-full opacity-100"></div>
<div className="h-2 w-1.5 bg-black rounded-full opacity-100"></div>
<div className="h-2 w-1.5 bg-black rounded-full opacity-40"></div>
<div className="h-2 w-1.5 bg-black rounded-full opacity-40"></div>
<div className="h-2 w-1.5 bg-black rounded-full opacity-40"></div>
<div className="h-2 w-1.5 bg-black rounded-full opacity-40"></div>
</div>
</div>
<img alt="Food" className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full object-cover border-4 border-[#D4F976] shadow-lg" src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&amp;fit=crop&amp;q=80&amp;w=200"/>
</div>

<div className="bg-[#1C1E24] rounded-[2rem] p-6 flex-1 min-h-[180px] flex flex-col justify-between border border-white/5">
<div className="flex justify-between items-center">
<h3 className="text-lg font-medium text-white">Water Intake</h3>
<span className="text-lg font-semibold text-white">14,2 Liters</span>
</div>
<div className="relative mt-6 flex-1">

<div className="h-24 flex items-end relative">

<div className="absolute left-0 bottom-0 w-[1px] h-[30%] bg-zinc-700 border-r border-dashed border-zinc-600">
<span className="absolute -top-4 -left-2 text-[10px] text-zinc-400">2,8L</span>
</div>
<div className="absolute left-1/2 bottom-0 w-[1px] h-[50%] bg-zinc-700 border-r border-dashed border-zinc-600">
<span className="absolute -top-4 -left-2 text-[10px] text-zinc-400">2,1L</span>
</div>
<div className="absolute right-0 bottom-0 w-[1px] h-[40%] bg-zinc-700 border-r border-dashed border-zinc-600">
<span className="absolute -top-4 -left-2 text-[10px] text-zinc-400">1,7L</span>
</div>

<div className="w-full h-1.5 bg-zinc-700 rounded-full mb-0 flex overflow-hidden">
<div className="w-[40%] bg-orange-400 h-full"></div>
<div className="w-[35%] bg-amber-400 h-full"></div>
<div className="w-[25%] bg-[#D4F976] h-full"></div>
</div>
</div>
<div className="flex justify-between text-xs text-zinc-400 mt-2 font-medium">
<span>40%</span>
<span>35%</span>
<span>25%</span>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
