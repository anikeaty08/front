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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-emerald-900/10 rounded-full blur-[120px] mix-blend-screen"></div>
<div className="absolute bottom-[20%] right-[-10%] w-[40%] h-[40%] bg-teal-900/10 rounded-full blur-[100px] mix-blend-screen"></div>

<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
</div>

<nav className="fixed top-0 w-full z-50 glass border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-colors duration-300">
<iconify-icon className="" icon="lucide:waves" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="font-medium tracking-tighter text-white text-lg">DEPTH</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-emerald-400 transition-colors" href="#philosophy">Philosophy</a>

<a className="hover:text-emerald-400 transition-colors" href="#training-page">Training</a>

<a className="hover:text-emerald-400 transition-colors" href="#programs-page">Programs</a>
<a className="hover:text-emerald-400 transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-xs font-medium text-slate-400 hover:text-white transition-colors" href="#">Log in</a>
<a className="bg-white/5 hover:bg-emerald-500 hover:text-black text-white text-xs font-medium py-2 px-4 rounded border border-white/10 hover:border-transparent transition-all duration-300 tracking-tight" href="#pricing">
                    Start Training
                </a>
</div>
</div>
</nav>

<header className="relative z-10 pt-32 pb-20 md:pt-48 md:pb-32 deep-water-gradient">
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-xs font-medium mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Enrollment Open for Winter Block
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tighter mb-8 text-glow leading-[0.9]">
                Data driven. <br className="md:hidden"/>
<span className="text-transparent bg-clip-text bg-gradient-to-b from-emerald-200 to-emerald-600">Water proven.</span>
</h1>
<p className="max-w-xl mx-auto text-slate-400 text-sm md:text-base font-light leading-relaxed mb-10 tracking-wide">
                We build elite swimming capacity for triathletes and distance swimmers through periodized, metric-based programming.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">

<a className="w-full md:w-auto bg-emerald-500 hover:bg-emerald-400 text-black font-medium py-3 px-8 rounded text-sm transition-all hover:scale-105 active:scale-95" href="#training-page">
                    View Training
                </a>

<a className="w-full md:w-auto glass hover:bg-white/5 text-white font-medium py-3 px-8 rounded text-sm border border-white/10 transition-all flex items-center justify-center gap-2" href="#programs-page">
                    View Programs
                </a>
</div>
</div>
</header>

<section className="py-24 relative z-10 border-t border-white/5 bg-slate-950" id="training-page">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="text-xs font-bold text-emerald-500 uppercase tracking-widest mb-2">Training Library</h2>
<h3 className="text-3xl font-medium text-white tracking-tight">Specialized Workouts</h3>
<p className="text-slate-400 text-sm font-light mt-4 max-w-lg">
                        Select a focus based on your current season phase. All plans include video analysis guides and pace calculators.
                    </p>
</div>

<div className="hidden md:flex bg-white/5 p-1 rounded-lg border border-white/5">
<button className="px-4 py-1.5 rounded text-xs font-medium bg-slate-800 text-white shadow-sm">All</button>
<button className="px-4 py-1.5 rounded text-xs font-medium text-slate-400 hover:text-white transition-colors">Triathlon</button>
<button className="px-4 py-1.5 rounded text-xs font-medium text-slate-400 hover:text-white transition-colors">Pure Swim</button>
<button className="px-4 py-1.5 rounded text-xs font-medium text-slate-400 hover:text-white transition-colors">Technical</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group glass-card rounded-xl p-6 hover:border-emerald-500/30 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity duration-300">
<iconify-icon className="text-emerald-400" icon="lucide:arrow-up-right" width="20"></iconify-icon>
</div>
<div className="w-12 h-12 rounded bg-emerald-900/20 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6">
<iconify-icon icon="lucide:timer" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-white mb-2">Sprint Speed <span className="text-xs text-slate-500 font-normal ml-2">8 Weeks</span></h4>
<p className="text-sm text-slate-400 font-light mb-6 leading-relaxed">
                        High intensity anaerobic threshold work. Designed to drop your 100m/400m times rapidly.
                    </p>
<div className="flex items-center gap-4 border-t border-white/5 pt-4">
<div className="flex flex-col">
<span className="text-[10px] text-slate-500 uppercase tracking-wider">Volume</span>
<span className="text-xs text-slate-300 font-medium">8-12km /wk</span>
</div>
<div className="flex flex-col">
<span className="text-[10px] text-slate-500 uppercase tracking-wider">Focus</span>
<span className="text-xs text-slate-300 font-medium">Power</span>
</div>
</div>
</div>

<div className="group glass-card rounded-xl p-6 hover:border-emerald-500/30 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity duration-300">
<iconify-icon className="text-emerald-400" icon="lucide:arrow-up-right" width="20"></iconify-icon>
</div>
<div className="w-12 h-12 rounded bg-blue-900/20 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6">
<iconify-icon icon="lucide:waves" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-white mb-2">70.3 Foundation <span className="text-xs text-slate-500 font-normal ml-2">12 Weeks</span></h4>
<p className="text-sm text-slate-400 font-light mb-6 leading-relaxed">
                        Aerobic capacity building for the middle distance. Focus on efficiency and open water sighting.
                    </p>
<div className="flex items-center gap-4 border-t border-white/5 pt-4">
<div className="flex flex-col">
<span className="text-[10px] text-slate-500 uppercase tracking-wider">Volume</span>
<span className="text-xs text-slate-300 font-medium">10-15km /wk</span>
</div>
<div className="flex flex-col">
<span className="text-[10px] text-slate-500 uppercase tracking-wider">Focus</span>
<span className="text-xs text-slate-300 font-medium">Endurance</span>
</div>
</div>
</div>

<div className="group glass-card rounded-xl p-6 hover:border-emerald-500/30 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity duration-300">
<iconify-icon className="text-emerald-400" icon="lucide:arrow-up-right" width="20"></iconify-icon>
</div>
<div className="w-12 h-12 rounded bg-purple-900/20 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-6">
<iconify-icon icon="lucide:activity" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-white mb-2">Ironman Build <span className="text-xs text-slate-500 font-normal ml-2">16 Weeks</span></h4>
<p className="text-sm text-slate-400 font-light mb-6 leading-relaxed">
                        The ultimate volume block. Progressive overload to prepare your shoulders and mind for 3.8km.
                    </p>
<div className="flex items-center gap-4 border-t border-white/5 pt-4">
<div className="flex flex-col">
<span className="text-[10px] text-slate-500 uppercase tracking-wider">Volume</span>
<span className="text-xs text-slate-300 font-medium">15-22km /wk</span>
</div>
<div className="flex flex-col">
<span className="text-[10px] text-slate-500 uppercase tracking-wider">Focus</span>
<span className="text-xs text-slate-300 font-medium">Fatigue Mgmt</span>
</div>
</div>
</div>

<div className="group glass-card rounded-xl p-6 hover:border-emerald-500/30 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity duration-300">
<iconify-icon className="text-emerald-400" icon="lucide:arrow-up-right" width="20"></iconify-icon>
</div>
<div className="w-12 h-12 rounded bg-slate-800 border border-white/10 flex items-center justify-center text-slate-300 mb-6">
<iconify-icon icon="lucide:align-left" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-white mb-2">Technique Tune-up <span className="text-xs text-slate-500 font-normal ml-2">4 Weeks</span></h4>
<p className="text-sm text-slate-400 font-light mb-6 leading-relaxed">
                        Drill-heavy programming to correct body position, catch mechanics, and kick timing.
                    </p>
<div className="flex items-center gap-4 border-t border-white/5 pt-4">
<div className="flex flex-col">
<span className="text-[10px] text-slate-500 uppercase tracking-wider">Volume</span>
<span className="text-xs text-slate-300 font-medium">Low Intensity</span>
</div>
<div className="flex flex-col">
<span className="text-[10px] text-slate-500 uppercase tracking-wider">Focus</span>
<span className="text-xs text-slate-300 font-medium">Form</span>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-2 glass border border-dashed border-white/10 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:bg-white/5 transition-colors cursor-pointer">
<div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
<iconify-icon icon="lucide:plus" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-white">Custom Periodization</h4>
<p className="text-sm text-slate-400 font-light mt-2 max-w-sm">Need a plan that fits a specific race date? Our coaches build custom backward-planning schedules.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10 bg-slate-950 border-t border-white/5" id="programs-page">
<div className="absolute left-0 top-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-900/50 to-transparent"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="text-xs font-bold text-emerald-500 uppercase tracking-widest mb-2">The Program</h2>
<h3 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6">Results speak loudest.</h3>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto border-t border-b border-white/5 py-8 mt-8">
<div className="">
<div className="text-3xl font-semibold text-white tracking-tight">56<span className="text-emerald-500 text-lg">min</span></div>
<div className="text-[10px] text-slate-500 uppercase tracking-wider mt-1">Avg IM Swim Time</div>
</div>
<div className="">
<div className="text-3xl font-semibold text-white tracking-tight" style={{}}>1<span className="text-emerald-500 text-lg">qualifiers</span></div>
<div className="text-[10px] uppercase text-slate-500 tracking-wider mt-1" style={{}}>World Masters medllists</div>
</div>
<div className="">
<div className="text-3xl font-semibold text-white tracking-tight">100<span className="text-emerald-500 text-lg">%</span></div>
<div className="text-[10px] text-slate-500 uppercase tracking-wider mt-1">Completion Rate</div>
</div>
<div className="">
<div className="text-3xl font-semibold text-white tracking-tight" style={{}}>450<span className="text-emerald-500 text-lg">+</span></div>
<div className="text-[10px] text-slate-500 uppercase tracking-wider mt-1">PRs Set</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">

<div className="p-8 rounded-xl bg-gradient-to-b from-white/5 to-transparent border border-white/5 relative">
<div className="flex items-center gap-4 mb-6">
<div className="w-10 h-10 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-slate-400 text-xs font-bold">JD</div>
<div>
<div className="text-sm font-medium text-white">James Dalton</div>
<div className="text-xs text-emerald-400">Ironman WA</div>
</div>
</div>
<p className="text-sm text-slate-300 font-light leading-relaxed mb-6">
                        "The structured focus on CSS (Critical Swim Speed) completely changed my pacing. I went from blowing up at 2km to negative splitting my Ironman swim."
                    </p>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs">
<iconify-icon icon="lucide:trending-down" width="14"></iconify-icon>
<span>1:08 → 0:59</span>
</div>
</div>

<div className="p-8 rounded-xl bg-gradient-to-b from-white/5 to-transparent border border-white/5 relative md:translate-y-4">
<div className="flex items-center gap-4 mb-6">
<div className="w-10 h-10 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-slate-400 text-xs font-bold">SL</div>
<div>
<div className="text-sm font-medium text-white">Sarah Lin</div>
<div className="text-xs text-emerald-400">70.3 Worlds</div>
</div>
</div>
<p className="text-sm text-slate-300 font-light leading-relaxed mb-6">
                        "I used to panic in open water. The specific sighting drills and collision simulation sets in the program gave me the confidence to hold the race line."
                    </p>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs">
<iconify-icon icon="lucide:award" width="14"></iconify-icon>
<span>Top 10 AG Swim</span>
</div>
</div>

<div className="p-8 rounded-xl bg-gradient-to-b from-white/5 to-transparent border border-white/5 relative">
<div className="flex items-center gap-4 mb-6">
<div className="w-10 h-10 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-slate-400 text-xs font-bold">MK</div>
<div>
<div className="text-sm font-medium text-white">Marcus Klein</div>
<div className="text-xs text-emerald-400">Marathon Swim</div>
</div>
</div>
<p className="text-sm text-slate-300 font-light leading-relaxed mb-6">
                        "Volume management is key for 10km swims. Depth's platform adjusted my load when I was feeling fatigued, preventing injury while keeping me on track."
                    </p>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs">
<iconify-icon icon="lucide:check-circle" width="14"></iconify-icon>
<span>Injury Free Season</span>
</div>
</div>
</div>

<div className="border-t border-white/5 pt-12">
<p className="text-center text-[10px] text-slate-600 uppercase tracking-widest mb-8">Athletes representing clubs from</p>
<div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale">

<span className="text-lg font-bold font-serif tracking-tighter text-white">TRI<span className="italic">CLUB</span></span>
<span className="text-lg font-bold tracking-widest text-white">IRON<span className="font-light">MIND</span></span>
<span className="text-lg font-black tracking-tight text-white">PACIFIC<span className="text-emerald-500">.</span></span>
<span className="text-lg font-semibold tracking-tight text-white italic">Velocity</span>
<span className="text-lg font-bold tracking-tighter text-white">AQUA<span className="font-light">SPHERE</span></span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative z-10 bg-slate-950" id="pricing">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Membership Options.</h2>
<div className="flex items-center justify-center gap-4 mt-8">
<span className="text-sm text-slate-400">Monthly</span>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox" value=""/>
<div className="w-11 h-6 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-emerald-400 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-900 border border-slate-700"></div>
</label>
<span className="text-sm text-white font-medium">Season Pass <span className="text-emerald-400 text-xs ml-1">-15%</span></span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

<div className="p-8 rounded-xl border border-white/5 bg-slate-900/30 flex flex-col hover:bg-slate-900/50 transition-colors relative">
<div className="mb-4">
<h3 className="text-xl font-medium text-white">Self-Coached</h3>
<p className="text-slate-500 text-sm mt-1">Access to all Programs &amp; Library.</p>
</div>
<div className="mb-8">
<span className="text-4xl font-medium text-white tracking-tight">$30</span>
<span className="text-slate-500 text-sm">/month</span>
</div>
<div className="h-px w-full bg-white/5 mb-8"></div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-emerald-500 flex-shrink-0" icon="lucide:check" strokeWidth="2"></iconify-icon> Full Program Access
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-emerald-500 flex-shrink-0" icon="lucide:check" strokeWidth="2"></iconify-icon> Drill Video Database
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-emerald-500 flex-shrink-0" icon="lucide:check" strokeWidth="2"></iconify-icon> Community Access
                        </li>
</ul>
<button className="w-full py-3 rounded border border-white/10 hover:bg-white/5 text-white text-sm font-medium transition-colors">Select Plan</button>
</div>

<div className="relative p-8 rounded-xl border border-emerald-500/30 bg-gradient-to-b from-emerald-950/20 to-slate-900/30 flex flex-col shadow-2xl shadow-emerald-900/10">
<div className="absolute top-0 right-0 p-4">
<div className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">Popular</div>
</div>
<div className="mb-4">
<h3 className="text-xl font-medium text-white">1:1 Coaching</h3>
<p className="text-slate-400 text-sm mt-1">Personalized guidance &amp; analysis.</p>
</div>
<div className="mb-8">
<span className="text-4xl font-medium text-white tracking-tight">$100</span>
<span className="text-slate-500 text-sm">/month</span>
</div>
<div className="h-px w-full bg-emerald-500/20 mb-8"></div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-emerald-400 flex-shrink-0" icon="lucide:check" strokeWidth="2"></iconify-icon>
</li>
<li className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-emerald-400 flex-shrink-0" icon="lucide:check" strokeWidth="2"></iconify-icon> Custom Schedule Adjustments
                        </li>
<li className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-emerald-400 flex-shrink-0" icon="lucide:check" strokeWidth="2"></iconify-icon> Monthly Video Call
                        </li>
</ul>
<button className="w-full py-3 rounded bg-emerald-500 hover:bg-emerald-400 text-black text-sm font-medium transition-colors shadow-[0_0_20px_rgba(16,185,129,0.3)]">Apply Now</button>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 pt-16 pb-8 bg-slate-950">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<a className="flex items-center gap-2 mb-4 text-white" href="#">
<iconify-icon className="text-emerald-500" icon="lucide:waves" width="20"></iconify-icon>
<span className="font-medium tracking-tighter">DEPTH</span>
</a>
<p className="text-slate-500 text-xs font-light leading-relaxed max-w-xs">
                        Redefining performance in water through structured programming, data analysis, and expert guidance.
                    </p>
</div>
<div>
<h4 className="text-white text-xs font-medium mb-4">Training</h4>
<ul className="space-y-2 text-xs text-slate-500 font-light">
<li><a className="hover:text-emerald-400 transition-colors" href="#">Triathlon Plans</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Open Water</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Masters Swim</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-xs font-medium mb-4">Programs</h4>
<ul className="space-y-2 text-xs text-slate-500 font-light">
<li><a className="hover:text-emerald-400 transition-colors" href="#">Success Stories</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Team Results</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Hall of Fame</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-xs font-medium mb-4">Legal</h4>
<ul className="space-y-2 text-xs text-slate-500 font-light">
<li><a className="hover:text-emerald-400 transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Terms</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
<div className="text-[10px] text-slate-600">
                    © 2023 Depth Coaching. All rights reserved.
                </div>
<div className="flex gap-4">
<a className="text-slate-500 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="16"></iconify-icon></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:instagram" width="16"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
