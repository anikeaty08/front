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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['DM Sans', 'sans-serif'],
},
colors: {
lime: {
350: '#d9f99d', // Softer
400: '#bef264', // The electric green
500: '#a3e635',
}
},
boxShadow: {
'neon': '0 0 20px -5px rgba(190, 242, 100, 0.4)',
'glow': '0 0 40px -10px rgba(190, 242, 100, 0.2)',
}
}
}
}



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
      

<header className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-lime-400 rounded-lg flex items-center justify-center text-black">
<i className="w-5 h-5 fill-current" data-lucide="zap"></i>
</div>
<span className="text-xl font-semibold tracking-tight text-white">FitPulse</span>
</div>

<nav className="hidden md:flex items-center gap-8">
<a className="text-base font-medium text-white hover:text-lime-400 transition-colors" href="#">Home</a>
<a className="text-base font-medium text-neutral-400 hover:text-white transition-colors" href="#">Programs</a>
<a className="text-base font-medium text-neutral-400 hover:text-white transition-colors" href="#">Trainers</a>
<a className="text-base font-medium text-neutral-400 hover:text-white transition-colors" href="#">Pricing</a>
<a className="text-base font-medium text-neutral-400 hover:text-white transition-colors" href="#">Community</a>
</nav>

<div className="flex items-center gap-4">
<button className="hidden sm:block text-base font-medium text-white hover:text-lime-400 transition-colors">Sign In</button>
<button className="bg-lime-400 text-black px-6 py-2.5 rounded-full text-base font-semibold hover:bg-lime-300 hover:scale-105 transition-all shadow-neon flex items-center gap-2">
                    Get Started <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</header>

<section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-0 w-full h-full z-0">
<img alt="Gym Background" className="w-full h-full object-cover opacity-20" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">

<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-lime-400/20 bg-lime-400/10 text-lime-400 text-sm font-medium">
<i className="w-4 h-4" data-lucide="flame"></i> New Programs Available
                </div>
<h1 className="text-6xl md:text-7xl lg:text-8xl font-semibold text-white tracking-tighter leading-[0.95]">
                    Push Your <br/>
<span className="text-lime-400">Limits.</span>
</h1>
<p className="text-xl text-neutral-400 max-w-lg leading-relaxed">
                    Join the community of elite athletes and transform your body with personalized plans tailored to your goals.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="bg-lime-400 text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-lime-300 transition-all shadow-neon flex items-center justify-center gap-2">
                        Get Started Now
                    </button>
<button className="px-8 py-4 rounded-full text-lg font-semibold text-white border border-white/20 hover:bg-white/10 transition-all flex items-center justify-center gap-2">
<i className="w-5 h-5" data-lucide="play-circle"></i> View Programs
                    </button>
</div>

<div className="pt-8 flex items-center gap-4">
<div className="flex -space-x-3">
<img alt="User" className="w-10 h-10 rounded-full border-2 border-[#0a0a0a]" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-[#0a0a0a]" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-[#0a0a0a]" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
</div>
<p className="text-base text-neutral-400"><span className="text-white font-semibold">10k+</span> athletes joined</p>
</div>
</div>

<div className="relative hidden lg:block perspective-1000">

<div className="w-[380px] h-[780px] bg-black rounded-[3rem] border-8 border-neutral-800 shadow-2xl relative mx-auto transform rotate-y-[-12deg] rotate-x-[5deg] hover:rotate-0 transition-transform duration-700 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl z-20"></div>

<div className="h-full w-full bg-neutral-900 overflow-hidden flex flex-col pt-12 px-6 pb-6 relative">

<div className="absolute top-[-10%] left-[-20%] w-[300px] h-[300px] bg-lime-400/20 blur-[80px] rounded-full pointer-events-none"></div>

<div className="flex justify-between items-center mb-8">
<div className="flex gap-3 items-center">
<img className="w-10 h-10 rounded-full border border-neutral-700" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
<div>
<p className="text-xs text-neutral-400">Welcome back</p>
<p className="text-sm font-semibold text-white">Amrit Raj</p>
</div>
</div>
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center">
<i className="w-4 h-4 text-white" data-lucide="bell"></i>
</div>
</div>

<div className="bg-neutral-800 p-5 rounded-3xl mb-6 relative overflow-hidden">
<div className="flex justify-between items-start mb-4">
<div>
<p className="text-sm font-semibold text-white">Weekly Goal</p>
<p className="text-xs text-neutral-400 mt-1">Keep pushing!</p>
</div>
<span className="text-lime-400 text-xs bg-lime-400/10 px-2 py-1 rounded-full">On Track</span>
</div>
<div className="flex justify-between items-end gap-2">
<div className="w-8 h-12 bg-neutral-700 rounded-t-lg"></div>
<div className="w-8 h-16 bg-neutral-700 rounded-t-lg"></div>
<div className="w-8 h-24 bg-lime-400 rounded-t-lg shadow-[0_0_15px_rgba(190,242,100,0.5)]"></div>
<div className="w-8 h-14 bg-neutral-700 rounded-t-lg"></div>
<div className="w-8 h-10 bg-neutral-700 rounded-t-lg"></div>
</div>
</div>

<div className="mb-6">
<div className="flex justify-between mb-3">
<h3 className="text-sm font-semibold text-white">Categories</h3>
<span className="text-xs text-lime-400">See all</span>
</div>
<div className="flex gap-3 overflow-hidden">
<span className="bg-lime-400 text-black text-xs font-semibold px-4 py-2 rounded-full">All</span>
<span className="bg-neutral-800 text-neutral-300 text-xs font-medium px-4 py-2 rounded-full">Arms</span>
<span className="bg-neutral-800 text-neutral-300 text-xs font-medium px-4 py-2 rounded-full">Legs</span>
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="bg-neutral-800 p-2 rounded-2xl relative group">
<img className="w-full h-24 object-cover rounded-xl mb-2 opacity-80" src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&amp;fit=crop&amp;w=300"/>
<p className="text-xs font-semibold text-white ml-1">Chest Builder</p>
<p className="text-[10px] text-neutral-400 ml-1">45 min</p>
<div className="absolute bottom-3 right-3 w-6 h-6 bg-lime-400 rounded-full flex items-center justify-center">
<i className="w-3 h-3 fill-black text-black ml-0.5" data-lucide="play"></i>
</div>
</div>
<div className="bg-neutral-800 p-2 rounded-2xl relative">
<img className="w-full h-24 object-cover rounded-xl mb-2 opacity-80" src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&amp;fit=crop&amp;w=300"/>
<p className="text-xs font-semibold text-white ml-1">Back Power</p>
<p className="text-[10px] text-neutral-400 ml-1">30 min</p>
</div>
</div>

<div className="absolute bottom-6 left-6 right-6 h-14 bg-neutral-800/90 backdrop-blur rounded-full flex justify-between items-center px-6">
<i className="w-5 h-5 text-lime-400" data-lucide="home"></i>
<i className="w-5 h-5 text-neutral-500" data-lucide="dumbbell"></i>
<i className="w-5 h-5 text-neutral-500" data-lucide="users"></i>
<i className="w-5 h-5 text-neutral-500" data-lucide="user"></i>
</div>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-lime-400/10 blur-[100px] rounded-full -z-10"></div>
</div>
</div>
</section>

<section className="py-24 bg-[#0a0a0a]">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-4">Choose Your <span className="text-lime-400">Fitness Goal</span></h2>
<p className="text-lg text-neutral-400">We will calculate your daily calorie goal based on your selection.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative bg-neutral-900 border border-lime-400 rounded-3xl p-6 cursor-pointer hover:-translate-y-2 transition-transform duration-300 shadow-neon">
<div className="absolute top-6 right-6 w-6 h-6 bg-lime-400 rounded-full flex items-center justify-center">
<i className="w-4 h-4 text-black stroke-[3]" data-lucide="check"></i>
</div>
<div className="w-12 h-12 bg-lime-400/10 rounded-xl flex items-center justify-center mb-6">
<i className="w-6 h-6 text-lime-400" data-lucide="dumbbell"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-2">Build Muscle</h3>
<p className="text-neutral-400">Gain mass &amp; strength with heavy lifting.</p>
</div>

<div className="group relative bg-neutral-900 border border-neutral-800 hover:border-lime-400/50 rounded-3xl p-6 cursor-pointer hover:-translate-y-2 transition-all duration-300">
<div className="absolute top-6 right-6 w-6 h-6 border-2 border-neutral-700 rounded-full group-hover:border-lime-400 transition-colors"></div>
<div className="w-12 h-12 bg-neutral-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-lime-400/10 transition-colors">
<i className="w-6 h-6 text-neutral-400 group-hover:text-lime-400 transition-colors" data-lucide="flame"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-2">Lose Weight</h3>
<p className="text-neutral-400">Burn fat &amp; get lean with high intensity.</p>
</div>
<div className="group relative bg-neutral-900 border border-neutral-800 hover:border-lime-400/50 rounded-3xl p-6 cursor-pointer hover:-translate-y-2 transition-all duration-300">
<div className="absolute top-6 right-6 w-6 h-6 border-2 border-neutral-700 rounded-full group-hover:border-lime-400 transition-colors"></div>
<div className="w-12 h-12 bg-neutral-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-lime-400/10 transition-colors">
<i className="w-6 h-6 text-neutral-400 group-hover:text-lime-400 transition-colors" data-lucide="activity"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-2">Keep Fit</h3>
<p className="text-neutral-400">Maintain weight &amp; tone your body.</p>
</div>
<div className="group relative bg-neutral-900 border border-neutral-800 hover:border-lime-400/50 rounded-3xl p-6 cursor-pointer hover:-translate-y-2 transition-all duration-300">
<div className="absolute top-6 right-6 w-6 h-6 border-2 border-neutral-700 rounded-full group-hover:border-lime-400 transition-colors"></div>
<div className="w-12 h-12 bg-neutral-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-lime-400/10 transition-colors">
<i className="w-6 h-6 text-neutral-400 group-hover:text-lime-400 transition-colors" data-lucide="trophy"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-2">Competition</h3>
<p className="text-neutral-400">Prepare for an upcoming event.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950 border-y border-neutral-900">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">Track Your <span className="text-lime-400">Progress</span></h2>
<p className="text-lg text-neutral-400 mb-8 leading-relaxed">
                    Our advanced analytics dashboard helps you visualize your improvement over time. Monitor calories, workout duration, and personal bests.
                </p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-lime-400" data-lucide="check-circle-2"></i>
<span className="text-white text-lg">Real-time calorie tracking</span>
</li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-lime-400" data-lucide="check-circle-2"></i>
<span className="text-white text-lg">Detailed workout history</span>
</li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-lime-400" data-lucide="check-circle-2"></i>
<span className="text-white text-lg">Weekly performance reports</span>
</li>
</ul>
<button className="text-lime-400 font-semibold text-lg flex items-center gap-2 hover:gap-3 transition-all">
                    View Dashboard Demo <i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="bg-neutral-900 p-6 rounded-3xl border border-neutral-800">
<div className="flex items-center justify-between mb-4">
<i className="w-8 h-8 text-lime-400" data-lucide="flame"></i>
<span className="text-green-500 text-sm font-medium">+12%</span>
</div>
<p className="text-3xl font-semibold text-white mb-1">2,450</p>
<p className="text-sm text-neutral-500">Calories Burned</p>
<div className="w-full bg-neutral-800 h-1.5 mt-4 rounded-full">
<div className="bg-lime-400 h-1.5 rounded-full" style={{width: '75%'}}></div>
</div>
</div>
<div className="bg-neutral-900 p-6 rounded-3xl border border-neutral-800">
<div className="flex items-center justify-between mb-4">
<i className="w-8 h-8 text-blue-400" data-lucide="timer"></i>
<span className="text-green-500 text-sm font-medium">+5%</span>
</div>
<p className="text-3xl font-semibold text-white mb-1">45h</p>
<p className="text-sm text-neutral-500">Time Trained</p>
<div className="w-full bg-neutral-800 h-1.5 mt-4 rounded-full">
<div className="bg-blue-400 h-1.5 rounded-full" style={{width: '60%'}}></div>
</div>
</div>
<div className="bg-neutral-900 p-6 rounded-3xl border border-neutral-800 col-span-2">
<div className="flex items-center justify-between mb-6">
<h4 className="text-lg font-semibold text-white">Workouts Completed</h4>
<select className="bg-black text-neutral-400 text-sm border border-neutral-800 rounded-lg px-3 py-1 outline-none">
<option>This Week</option>
</select>
</div>
<div className="flex justify-between items-end h-32 gap-2">

<div className="w-full bg-neutral-800 rounded-t-lg h-[40%] hover:bg-lime-400/50 transition-colors"></div>
<div className="w-full bg-neutral-800 rounded-t-lg h-[60%] hover:bg-lime-400/50 transition-colors"></div>
<div className="w-full bg-lime-400 rounded-t-lg h-[85%] shadow-glow relative group">
<div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-black text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">12</div>
</div>
<div className="w-full bg-neutral-800 rounded-t-lg h-[50%] hover:bg-lime-400/50 transition-colors"></div>
<div className="w-full bg-neutral-800 rounded-t-lg h-[75%] hover:bg-lime-400/50 transition-colors"></div>
<div className="w-full bg-neutral-800 rounded-t-lg h-[45%] hover:bg-lime-400/50 transition-colors"></div>
<div className="w-full bg-neutral-800 rounded-t-lg h-[90%] hover:bg-lime-400/50 transition-colors"></div>
</div>
<div className="flex justify-between text-xs text-neutral-500 mt-2">
<span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0a0a0a]">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">Browse <span className="text-lime-400">Categories</span></h2>
</div>
<div className="flex flex-wrap gap-3">
<button className="bg-lime-400 text-black px-5 py-2 rounded-full text-sm font-semibold hover:scale-105 transition-transform">All</button>
<button className="bg-neutral-800 text-neutral-300 border border-neutral-700 px-5 py-2 rounded-full text-sm font-medium hover:border-lime-400 hover:text-white transition-colors">Chest</button>
<button className="bg-neutral-800 text-neutral-300 border border-neutral-700 px-5 py-2 rounded-full text-sm font-medium hover:border-lime-400 hover:text-white transition-colors">Arms</button>
<button className="bg-neutral-800 text-neutral-300 border border-neutral-700 px-5 py-2 rounded-full text-sm font-medium hover:border-lime-400 hover:text-white transition-colors">Legs</button>
<button className="bg-neutral-800 text-neutral-300 border border-neutral-700 px-5 py-2 rounded-full text-sm font-medium hover:border-lime-400 hover:text-white transition-colors">Cardio</button>
</div>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group bg-neutral-900 rounded-[2rem] overflow-hidden border border-neutral-800 hover:border-lime-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-lime-900/10 hover:-translate-y-1">
<div className="h-64 overflow-hidden relative">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&amp;fit=crop&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent"></div>
<div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10 text-xs font-semibold text-white uppercase tracking-wider">
                            Intermediate
                        </div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="text-2xl font-semibold text-white">Chest Builder</h3>
<div className="flex items-center gap-1 text-amber-400 text-sm font-medium">
<i className="w-4 h-4 fill-current" data-lucide="star"></i> 4.9
                            </div>
</div>
<p className="text-neutral-400 text-base mb-6">A complete program to build mass and definition in your upper body.</p>
<div className="flex items-center justify-between border-t border-neutral-800 pt-4">
<div className="flex gap-4 text-sm text-neutral-400">
<span className="flex items-center gap-1"><i className="w-4 h-4" data-lucide="clock"></i> 45m</span>
<span className="flex items-center gap-1"><i className="w-4 h-4" data-lucide="flame"></i> 480kcal</span>
</div>
<button className="w-10 h-10 rounded-full bg-lime-400 flex items-center justify-center text-black hover:scale-110 transition-transform shadow-neon">
<i className="w-5 h-5 fill-current ml-1" data-lucide="play"></i>
</button>
</div>
</div>
</div>

<div className="group bg-neutral-900 rounded-[2rem] overflow-hidden border border-neutral-800 hover:border-lime-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-lime-900/10 hover:-translate-y-1">
<div className="h-64 overflow-hidden relative">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&amp;fit=crop&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent"></div>
<div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10 text-xs font-semibold text-white uppercase tracking-wider">
                            Advanced
                        </div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="text-2xl font-semibold text-white">Back Poses</h3>
<div className="flex items-center gap-1 text-amber-400 text-sm font-medium">
<i className="w-4 h-4 fill-current" data-lucide="star"></i> 4.8
                            </div>
</div>
<p className="text-neutral-400 text-base mb-6">Strengthen your posterior chain with compound movements.</p>
<div className="flex items-center justify-between border-t border-neutral-800 pt-4">
<div className="flex gap-4 text-sm text-neutral-400">
<span className="flex items-center gap-1"><i className="w-4 h-4" data-lucide="clock"></i> 55m</span>
<span className="flex items-center gap-1"><i className="w-4 h-4" data-lucide="flame"></i> 520kcal</span>
</div>
<button className="w-10 h-10 rounded-full bg-lime-400 flex items-center justify-center text-black hover:scale-110 transition-transform shadow-neon">
<i className="w-5 h-5 fill-current ml-1" data-lucide="play"></i>
</button>
</div>
</div>
</div>

<div className="group bg-neutral-900 rounded-[2rem] overflow-hidden border border-neutral-800 hover:border-lime-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-lime-900/10 hover:-translate-y-1">
<div className="h-64 overflow-hidden relative">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&amp;fit=crop&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent"></div>
<div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10 text-xs font-semibold text-white uppercase tracking-wider">
                            Beginner
                        </div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="text-2xl font-semibold text-white">HIIT Cardio</h3>
<div className="flex items-center gap-1 text-amber-400 text-sm font-medium">
<i className="w-4 h-4 fill-current" data-lucide="star"></i> 4.7
                            </div>
</div>
<p className="text-neutral-400 text-base mb-6">High intensity intervals to burn fat and improve stamina.</p>
<div className="flex items-center justify-between border-t border-neutral-800 pt-4">
<div className="flex gap-4 text-sm text-neutral-400">
<span className="flex items-center gap-1"><i className="w-4 h-4" data-lucide="clock"></i> 25m</span>
<span className="flex items-center gap-1"><i className="w-4 h-4" data-lucide="flame"></i> 300kcal</span>
</div>
<button className="w-10 h-10 rounded-full bg-lime-400 flex items-center justify-center text-black hover:scale-110 transition-transform shadow-neon">
<i className="w-5 h-5 fill-current ml-1" data-lucide="play"></i>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950 border-y border-neutral-900">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-16 text-center">Train with <span className="text-lime-400">The Best</span></h2>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="group relative overflow-hidden rounded-3xl aspect-[3/4]">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&amp;fit=crop&amp;w=600"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-6 left-6">
<p className="text-lime-400 font-semibold text-sm mb-1">Strength Coach</p>
<h3 className="text-2xl font-bold text-white">Alex Drago</h3>
</div>
</div>
<div className="group relative overflow-hidden rounded-3xl aspect-[3/4]">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&amp;fit=crop&amp;w=600"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-6 left-6">
<p className="text-lime-400 font-semibold text-sm mb-1">Yoga &amp; Mobility</p>
<h3 className="text-2xl font-bold text-white">Sarah Jenks</h3>
</div>
</div>
<div className="group relative overflow-hidden rounded-3xl aspect-[3/4]">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&amp;fit=crop&amp;w=600"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-6 left-6">
<p className="text-lime-400 font-semibold text-sm mb-1">CrossFit Pro</p>
<h3 className="text-2xl font-bold text-white">Mike Ross</h3>
</div>
</div>
<div className="group relative overflow-hidden rounded-3xl aspect-[3/4]">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?auto=format&amp;fit=crop&amp;w=600"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-6 left-6">
<p className="text-lime-400 font-semibold text-sm mb-1">HIIT Specialist</p>
<h3 className="text-2xl font-bold text-white">Emily Cole</h3>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0a0a0a] relative overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-lime-400/5 blur-[120px] rounded-full"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<i className="w-12 h-12 text-lime-400 mx-auto mb-8 fill-current opacity-50" data-lucide="quote"></i>
<h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tight leading-tight mb-8">
                "The only bad workout is the one that <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-white">didn't happen.</span>"
            </h2>
<div className="flex items-center justify-center gap-4">
<div className="h-px w-12 bg-neutral-800"></div>
<p className="text-xl text-neutral-400">Join 50,000+ Active Members</p>
<div className="h-px w-12 bg-neutral-800"></div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight text-center mb-16">Simple <span className="text-lime-400">Pricing</span></h2>
<div className="grid lg:grid-cols-3 gap-8 items-start">

<div className="bg-neutral-900 rounded-[2rem] p-8 border border-neutral-800">
<h3 className="text-xl font-semibold text-white">Starter</h3>
<p className="text-neutral-400 mt-2">Essential access to get moving.</p>
<div className="my-6">
<span className="text-4xl font-bold text-white">$0</span>
<span className="text-neutral-500">/mo</span>
</div>
<button className="w-full py-3 rounded-xl border border-neutral-700 text-white font-medium hover:bg-white/5 transition-colors">Start Free</button>
<ul className="mt-8 space-y-4 text-neutral-400 text-base">
<li className="flex items-center gap-3"><i className="w-5 h-5 text-white" data-lucide="check"></i> 3 Workouts / Week</li>
<li className="flex items-center gap-3"><i className="w-5 h-5 text-white" data-lucide="check"></i> Basic Analytics</li>
<li className="flex items-center gap-3"><i className="w-5 h-5 text-white" data-lucide="check"></i> Community Access</li>
</ul>
</div>

<div className="bg-neutral-900 rounded-[2rem] p-8 border-2 border-lime-400 relative shadow-neon transform lg:-translate-y-4">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-lime-400 text-black text-xs font-bold px-3 py-1 rounded-full">RECOMMENDED</div>
<h3 className="text-xl font-semibold text-white">Pro Athlete</h3>
<p className="text-neutral-400 mt-2">Unlock your full potential.</p>
<div className="my-6">
<span className="text-4xl font-bold text-white">$19</span>
<span className="text-neutral-500">/mo</span>
</div>
<button className="w-full py-3 rounded-xl bg-lime-400 text-black font-bold hover:bg-lime-300 transition-colors shadow-lg shadow-lime-400/20">Get Started</button>
<ul className="mt-8 space-y-4 text-white text-base">
<li className="flex items-center gap-3"><i className="w-5 h-5 text-lime-400" data-lucide="check"></i> Unlimited Workouts</li>
<li className="flex items-center gap-3"><i className="w-5 h-5 text-lime-400" data-lucide="check"></i> Advanced Analytics</li>
<li className="flex items-center gap-3"><i className="w-5 h-5 text-lime-400" data-lucide="check"></i> Personal Trainer Chat</li>
<li className="flex items-center gap-3"><i className="w-5 h-5 text-lime-400" data-lucide="check"></i> Nutrition Plans</li>
</ul>
</div>

<div className="bg-neutral-900 rounded-[2rem] p-8 border border-neutral-800">
<h3 className="text-xl font-semibold text-white">Elite</h3>
<p className="text-neutral-400 mt-2">For competitive athletes.</p>
<div className="my-6">
<span className="text-4xl font-bold text-white">$49</span>
<span className="text-neutral-500">/mo</span>
</div>
<button className="w-full py-3 rounded-xl border border-neutral-700 text-white font-medium hover:bg-white/5 transition-colors">Contact Us</button>
<ul className="mt-8 space-y-4 text-neutral-400 text-base">
<li className="flex items-center gap-3"><i className="w-5 h-5 text-white" data-lucide="check"></i> 1-on-1 Coaching</li>
<li className="flex items-center gap-3"><i className="w-5 h-5 text-white" data-lucide="check"></i> Custom Meal Prep</li>
<li className="flex items-center gap-3"><i className="w-5 h-5 text-white" data-lucide="check"></i> All Pro Features</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="absolute inset-0 bg-lime-400/5"></div>
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-lime-400/50 to-transparent"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-5xl md:text-7xl font-semibold text-white tracking-tighter mb-8">
                Start Your <br/> Fitness Journey Today
            </h2>
<p className="text-xl text-neutral-400 mb-10 max-w-2xl mx-auto">
                No credit card required. Join thousands of users achieving their dream physique with FitPulse.
            </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="bg-lime-400 text-black px-10 py-4 rounded-full text-lg font-bold hover:bg-lime-300 hover:scale-105 transition-all shadow-neon">
                    Get Started Free
                </button>
<button className="px-10 py-4 rounded-full text-lg font-semibold text-white border border-neutral-700 hover:border-white transition-all bg-black/50 backdrop-blur">
                    Join Community
                </button>
</div>
</div>
</section>

<footer className="bg-[#050505] border-t border-neutral-900 py-16">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 bg-lime-400 rounded-lg flex items-center justify-center text-black">
<i className="w-5 h-5 fill-current" data-lucide="zap"></i>
</div>
<span className="text-xl font-semibold tracking-tight text-white">FitPulse</span>
</div>
<p className="text-neutral-500 text-base max-w-sm">
                        The ultimate fitness companion designed to help you crush your goals, track progress, and stay motivated.
                    </p>
</div>
<div>
<h4 className="text-white font-semibold mb-6">Platform</h4>
<ul className="space-y-4 text-neutral-500">
<li><a className="hover:text-lime-400 transition-colors" href="#">Programs</a></li>
<li><a className="hover:text-lime-400 transition-colors" href="#">Trainers</a></li>
<li><a className="hover:text-lime-400 transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-lime-400 transition-colors" href="#">Success Stories</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-6">Company</h4>
<ul className="space-y-4 text-neutral-500">
<li><a className="hover:text-lime-400 transition-colors" href="#">About</a></li>
<li><a className="hover:text-lime-400 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-lime-400 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-lime-400 transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="border-t border-neutral-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
<p className="text-neutral-600 text-sm">© 2024 FitPulse Inc. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="youtube"></i></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
