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
      

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mx-auto max-w-[1400px]">

<div className="relative w-full max-w-[400px] h-[860px] bg-[#0c0c0e] rounded-[3rem] border border-white/5 shadow-2xl overflow-hidden mx-auto flex flex-col">

<div className="h-6 w-full"></div>

<div className="flex items-center justify-between px-6 py-4">
<button className="text-base text-zinc-400 hover:text-white transition">Cancel</button>
<h1 className="text-lg font-medium tracking-tight text-white">Edit Profile</h1>
<div className="w-10"></div> 
</div>

<div className="flex-1 overflow-y-auto no-scrollbar px-6 pb-6">

<div className="flex flex-col items-center mt-4 mb-8">
<div className="relative group cursor-pointer">
<div className="w-28 h-28 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-green-500/50 transition duration-300">
<img alt="Profile" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
</div>
<div className="absolute bottom-1 right-1 bg-green-500 text-black p-1.5 rounded-full shadow-lg border border-[#0c0c0e]">
<i className="w-3.5 h-3.5" data-lucide="pencil"></i>
</div>
</div>
<p className="text-green-500 text-sm font-medium mt-3 cursor-pointer hover:text-green-400">Change Profile Photo</p>
</div>

<div className="space-y-6">
<div className="space-y-2">
<label className="text-sm font-medium text-zinc-400 ml-1">Name</label>
<input className="w-full bg-[#161618] border border-white/5 rounded-2xl px-5 py-4 text-base text-white focus:outline-none focus:ring-1 focus:ring-green-500/50 focus:border-green-500/50 transition shadow-inner" type="text" value="Sarah Jenkins"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-zinc-400 ml-1">Username</label>
<input className="w-full bg-[#161618] border border-white/5 rounded-2xl px-5 py-4 text-base text-white focus:outline-none focus:ring-1 focus:ring-green-500/50 focus:border-green-500/50 transition shadow-inner" type="text" value="@sarah_lifts"/>
</div>
<div className="space-y-2">
<div className="flex justify-between ml-1">
<label className="text-sm font-medium text-zinc-400">Bio</label>
<span className="text-xs text-zinc-600">45/150</span>
</div>
<textarea className="w-full bg-[#161618] border border-white/5 rounded-2xl px-5 py-4 text-base text-white focus:outline-none focus:ring-1 focus:ring-green-500/50 focus:border-green-500/50 transition shadow-inner resize-none" rows="4">Powerlifting enthusiast. Chasing a 300lb deadlift. 🏋️‍♀️</textarea>
</div>

<button className="w-full bg-[#161618] border border-white/5 rounded-2xl px-5 py-4 flex items-center justify-between group hover:bg-[#1c1c1f] transition">
<div className="flex items-center gap-3">
<div className="bg-blue-500/10 p-2 rounded-lg">
<i className="w-5 h-5 text-blue-400" data-lucide="link"></i>
</div>
<span className="text-base font-medium text-white">Add Links</span>
</div>
<i className="w-5 h-5 text-zinc-600 group-hover:text-white transition" data-lucide="chevron-right"></i>
</button>
</div>
</div>

<div className="p-6 bg-gradient-to-t from-[#0c0c0e] to-transparent">
<button className="w-full bg-green-500 hover:bg-green-400 text-black font-semibold text-lg py-4 rounded-2xl transition shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                    Save Changes
                </button>
</div>
</div>

<div className="relative w-full max-w-[400px] h-[860px] bg-[#0c0c0e] rounded-[3rem] border border-white/5 shadow-2xl overflow-hidden mx-auto flex flex-col">
<div className="h-6 w-full"></div>

<div className="flex items-center justify-between px-6 py-4">
<button className="p-2 -ml-2 text-zinc-400 hover:text-white"><i className="w-6 h-6" data-lucide="chevron-left"></i></button>
<h1 className="text-lg font-medium tracking-tight text-white">Save Activity</h1>
<div className="w-6"></div>
</div>
<div className="flex-1 overflow-y-auto no-scrollbar px-6 pb-6">

<div className="w-full h-48 rounded-2xl border border-dashed border-white/10 bg-[#161618] flex flex-col items-center justify-center gap-3 mb-6 hover:border-green-500/30 transition cursor-pointer group">
<div className="p-3 bg-zinc-900 rounded-full group-hover:bg-zinc-800 transition">
<i className="w-6 h-6 text-zinc-400 group-hover:text-white" data-lucide="camera"></i>
</div>
<span className="text-sm font-medium text-zinc-400 group-hover:text-white">Add Photo</span>
</div>

<div className="mb-6 space-y-2">
<label className="text-sm font-medium text-zinc-400 ml-1">Caption</label>
<textarea className="w-full bg-[#161618] border border-white/5 rounded-2xl px-5 py-4 text-base text-white placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-green-500/50 transition resize-none" placeholder="How was your workout?" rows="3"></textarea>
</div>

<div className="grid grid-cols-2 gap-4 mb-4">
<div className="bg-[#161618] border border-white/5 rounded-2xl p-5">
<p className="text-xs text-zinc-500 mb-1">Total Volume</p>
<p className="text-2xl font-semibold text-white tracking-tight">12,450 <span className="text-base font-normal text-zinc-600">kg</span></p>
</div>
<div className="bg-[#161618] border border-white/5 rounded-2xl p-5">
<p className="text-xs text-zinc-500 mb-1">Duration</p>
<p className="text-2xl font-semibold text-white tracking-tight">1h 15m</p>
</div>
</div>
<div className="grid grid-cols-2 gap-4 mb-6">
<div className="bg-[#161618] border border-white/5 rounded-2xl p-5 flex items-center justify-between">
<div>
<p className="text-xs text-zinc-500 mb-1">PRs Hit</p>
<p className="text-2xl font-semibold text-green-500 tracking-tight">3 <span className="text-lg">🏆</span></p>
</div>
</div>
<div className="bg-[#161618] border border-white/5 rounded-2xl p-5">
<p className="text-xs text-zinc-500 mb-1">Total Sets</p>
<p className="text-2xl font-semibold text-white tracking-tight">24</p>
</div>
</div>

<div className="bg-[#161618] border border-white/5 rounded-2xl p-5 mb-6 flex justify-between items-center">
<div>
<p className="text-xs text-zinc-500 mb-1">Total Exercises</p>
<p className="text-2xl font-semibold text-white tracking-tight">6</p>
</div>
<div className="flex gap-2">
<span className="w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-xs">💪</span>
<span className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center text-xs">🦵</span>
<span className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-[10px] text-zinc-400">+4</span>
</div>
</div>

<div className="bg-[#161618] border border-white/5 rounded-2xl p-5 flex items-center justify-between mb-8">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-green-500" data-lucide="eye-off"></i>
<div>
<p className="text-base font-medium text-white">Mute Activity</p>
<p className="text-xs text-zinc-500">Do not show in Home feed</p>
</div>
</div>

<div className="w-12 h-7 bg-zinc-700 rounded-full relative cursor-pointer">
<div className="absolute left-1 top-1 bg-white w-5 h-5 rounded-full shadow-sm"></div>
</div>
</div>
</div>

<div className="p-6 pt-0">
<button className="w-full bg-green-500 hover:bg-green-400 text-black font-semibold text-lg py-4 rounded-2xl flex items-center justify-center gap-2 transition shadow-[0_0_20px_rgba(34,197,94,0.3)]">
<i className="w-5 h-5 stroke-[2.5]" data-lucide="check"></i>
                    Save Activity
                </button>
<p className="text-center text-sm text-zinc-600 mt-4 cursor-pointer hover:text-zinc-400 transition">Discard Activity</p>
</div>
</div>

<div className="relative w-full max-w-[400px] h-[860px] bg-[#0c0c0e] rounded-[3rem] border border-white/5 shadow-2xl overflow-hidden mx-auto flex flex-col">
<div className="h-6 w-full"></div>
<div className="flex items-center justify-between px-6 py-4">
<button className="p-2 -ml-2 text-zinc-400 hover:text-white"><i className="w-6 h-6" data-lucide="chevron-left"></i></button>
<button className="p-2 -mr-2 text-zinc-400 hover:text-white"><i className="w-6 h-6" data-lucide="more-horizontal"></i></button>
</div>
<div className="flex-1 overflow-y-auto no-scrollbar px-6 pb-6">

<h1 className="text-3xl font-semibold text-white tracking-tight mb-2">Push Pull Legs</h1>
<div className="flex items-center gap-3 mb-4">
<div className="flex items-center gap-1.5 text-xs font-medium text-zinc-400 bg-zinc-900 px-2 py-1 rounded-md border border-white/5">
<i className="w-3 h-3 text-yellow-500" data-lucide="zap"></i>
                        Intermediate
                    </div>
<div className="flex items-center gap-1.5 text-xs font-medium text-zinc-400 bg-zinc-900 px-2 py-1 rounded-md border border-white/5">
<i className="w-3 h-3 text-blue-500" data-lucide="clock"></i>
                        60 mins/avg
                    </div>
</div>
<p className="text-sm text-zinc-500 leading-relaxed mb-6">
                    A classic 3-day split designed to build muscle mass and strength. Focuses on compound movements.
                </p>
<button className="w-full bg-green-500 hover:bg-green-400 text-black font-semibold text-sm py-3 rounded-xl flex items-center justify-center gap-2 transition mb-8 shadow-lg shadow-green-900/20">
                    Set as Active Split
                    <i className="w-4 h-4 fill-black" data-lucide="zap"></i>
</button>

<p className="text-xs font-semibold text-zinc-500 tracking-widest uppercase mb-4">Schedule</p>
<div className="space-y-4">

<div className="bg-[#161618] border border-white/5 rounded-2xl p-5 hover:border-white/10 transition group">
<div className="flex justify-between items-start mb-2">
<div>
<span className="text-[10px] font-bold text-green-500 uppercase tracking-wider">Day 1</span>
<h3 className="text-lg font-medium text-white">Push A</h3>
<p className="text-xs text-zinc-500 mt-1">Chest, Shoulders, Triceps</p>
</div>
</div>
<div className="flex items-end justify-between mt-4">
<div className="flex items-center gap-2 text-xs text-zinc-400">
<i className="w-3.5 h-3.5" data-lucide="list"></i>
                                5 Exercises
                            </div>
<button className="bg-green-500 hover:bg-green-400 text-black text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1 transition">
                                Start <i className="w-3 h-3 fill-current" data-lucide="play"></i>
</button>
</div>
</div>

<div className="bg-[#161618] border border-white/5 rounded-2xl p-5 hover:border-white/10 transition group">
<div className="flex justify-between items-start mb-2">
<div>
<span className="text-[10px] font-bold text-green-500 uppercase tracking-wider">Day 2</span>
<h3 className="text-lg font-medium text-white">Pull A</h3>
<p className="text-xs text-zinc-500 mt-1">Back, Biceps, Rear Delts</p>
</div>
</div>
<div className="flex items-end justify-between mt-4">
<div className="flex items-center gap-2 text-xs text-zinc-400">
<i className="w-3.5 h-3.5" data-lucide="list"></i>
                                6 Exercises
                            </div>
<button className="bg-green-500 hover:bg-green-400 text-black text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1 transition">
                                Start <i className="w-3 h-3 fill-current" data-lucide="play"></i>
</button>
</div>
</div>

<div className="bg-[#161618] border border-white/5 rounded-2xl p-5 hover:border-white/10 transition group">
<div className="flex justify-between items-start mb-2">
<div>
<span className="text-[10px] font-bold text-blue-500 uppercase tracking-wider">Day 3</span>
<h3 className="text-lg font-medium text-white">Legs A</h3>
<p className="text-xs text-zinc-500 mt-1">Quads, Hamstrings, Calves</p>
</div>
</div>
<div className="flex items-end justify-between mt-4">
<div className="flex items-center gap-2 text-xs text-zinc-400">
<i className="w-3.5 h-3.5" data-lucide="list"></i>
                                6 Exercises
                            </div>
<button className="bg-green-500 hover:bg-green-400 text-black text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1 transition">
                                Start <i className="w-3 h-3 fill-current" data-lucide="play"></i>
</button>
</div>
</div>

<div className="bg-[#161618]/50 border border-white/5 rounded-2xl p-4 flex items-center justify-between">
<div>
<span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Day 4</span>
<h3 className="text-base font-medium text-zinc-300">Rest Day</h3>
<p className="text-[10px] text-zinc-600 mt-0.5">Recovery &amp; Mobility</p>
</div>
<i className="w-5 h-5 text-zinc-600" data-lucide="coffee"></i>
</div>

<div className="bg-[#161618] border border-white/5 rounded-2xl p-5 hover:border-white/10 transition group">
<div className="flex justify-between items-start mb-2">
<div>
<span className="text-[10px] font-bold text-green-500 uppercase tracking-wider">Day 5</span>
<h3 className="text-lg font-medium text-white">Push B</h3>
<p className="text-xs text-zinc-500 mt-1">Chest focus, Triceps</p>
</div>
</div>
<div className="flex items-end justify-between mt-4">
<div className="flex items-center gap-2 text-xs text-zinc-400">
<i className="w-3.5 h-3.5" data-lucide="list"></i>
                                5 Exercises
                            </div>
<button className="bg-green-500 hover:bg-green-400 text-black text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1 transition">
                                Start <i className="w-3 h-3 fill-current" data-lucide="play"></i>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="relative w-full max-w-[400px] h-[860px] bg-[#0c0c0e] rounded-[3rem] border border-white/5 shadow-2xl overflow-hidden mx-auto flex flex-col">
<div className="h-6 w-full"></div>
<div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-[#0c0c0e]/80 backdrop-blur-md sticky top-0 z-10">
<button className="p-2 -ml-2 text-zinc-400 hover:text-white"><i className="w-6 h-6" data-lucide="chevron-left"></i></button>
<h1 className="text-lg font-medium tracking-tight text-white">Legs Pump Massacre</h1>
<button className="p-2 -mr-2 text-zinc-400 hover:text-red-400"><i className="w-5 h-5" data-lucide="trash-2"></i></button>
</div>
<div className="flex-1 overflow-y-auto no-scrollbar pb-24">

<div className="flex justify-around py-6 border-b border-white/5 bg-[#121214]">
<div className="text-center">
<div className="flex items-center justify-center gap-1 text-green-500 mb-1">
<i className="w-4 h-4" data-lucide="clock"></i>
</div>
<p className="text-sm font-medium text-white">60 <span className="text-xs text-zinc-500 font-normal">min</span></p>
</div>
<div className="text-center">
<div className="flex items-center justify-center gap-1 text-green-500 mb-1">
<i className="w-4 h-4" data-lucide="bar-chart-2"></i>
</div>
<p className="text-sm font-medium text-white">High <span className="text-xs text-zinc-500 font-normal">Volume</span></p>
</div>
<div className="text-center">
<div className="flex items-center justify-center gap-1 text-green-500 mb-1">
<i className="w-4 h-4" data-lucide="dumbbell"></i>
</div>
<p className="text-sm font-medium text-white">4 <span className="text-xs text-zinc-500 font-normal">Exercises</span></p>
</div>
</div>
<div className="p-4 space-y-4">

<div className="bg-[#161618] border border-white/5 rounded-2xl p-4 flex gap-4 relative overflow-hidden group">
<div className="absolute top-0 left-0 bottom-0 w-1 bg-green-500"></div>
<div className="w-16 h-16 rounded-xl bg-zinc-800 flex-shrink-0 relative overflow-hidden">
<img alt="Squat" className="w-full h-full object-cover opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-1 left-1 w-5 h-5 bg-black/80 text-white text-[10px] font-bold flex items-center justify-center rounded-md border border-white/10">1</div>
</div>
<div className="flex-1">
<div className="flex justify-between items-start">
<h3 className="text-lg font-medium text-white">Barbell Squat</h3>
<i className="w-4 h-4 text-zinc-600 hover:text-white cursor-pointer" data-lucide="pencil"></i>
</div>
<div className="flex gap-2 mt-2">
<span className="text-xs font-semibold bg-green-500/10 text-green-500 px-2 py-1 rounded">3 Sets</span>
<span className="text-xs font-medium bg-zinc-800 text-zinc-400 px-2 py-1 rounded">5 Reps</span>
<span className="text-xs font-medium bg-zinc-800 text-zinc-400 px-2 py-1 rounded">Legs</span>
</div>
</div>
</div>

<div className="bg-[#161618] border border-white/5 rounded-2xl p-4 flex gap-4 relative overflow-hidden">
<div className="absolute top-0 left-0 bottom-0 w-1 bg-zinc-700"></div>
<div className="w-16 h-16 rounded-xl bg-zinc-800 flex-shrink-0 relative overflow-hidden">
<img alt="RDL" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
<div className="absolute top-1 left-1 w-5 h-5 bg-black/80 text-white text-[10px] font-bold flex items-center justify-center rounded-md border border-white/10">2</div>
</div>
<div className="flex-1">
<div className="flex justify-between items-start">
<h3 className="text-lg font-medium text-white">Romanian Deadlift</h3>
<i className="w-4 h-4 text-zinc-600 hover:text-white cursor-pointer" data-lucide="pencil"></i>
</div>
<div className="flex gap-2 mt-2">
<span className="text-xs font-semibold bg-green-500/10 text-green-500 px-2 py-1 rounded">3 Sets</span>
<span className="text-xs font-medium bg-zinc-800 text-zinc-400 px-2 py-1 rounded">8-10 Reps</span>
<span className="text-xs font-medium bg-zinc-800 text-zinc-400 px-2 py-1 rounded">Hamstrings</span>
</div>
</div>
</div>

<div className="bg-[#161618] border border-white/5 rounded-2xl p-4 flex gap-4 relative overflow-hidden">
<div className="absolute top-0 left-0 bottom-0 w-1 bg-zinc-700"></div>
<div className="w-16 h-16 rounded-xl bg-zinc-800 flex-shrink-0 relative overflow-hidden">
<img alt="Leg Press" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
<div className="absolute top-1 left-1 w-5 h-5 bg-black/80 text-white text-[10px] font-bold flex items-center justify-center rounded-md border border-white/10">3</div>
</div>
<div className="flex-1">
<div className="flex justify-between items-start">
<h3 className="text-lg font-medium text-white">Leg Press</h3>
<i className="w-4 h-4 text-zinc-600 hover:text-white cursor-pointer" data-lucide="pencil"></i>
</div>
<div className="flex gap-2 mt-2">
<span className="text-xs font-semibold bg-green-500/10 text-green-500 px-2 py-1 rounded">4 Sets</span>
<span className="text-xs font-medium bg-zinc-800 text-zinc-400 px-2 py-1 rounded">12 Reps</span>
<span className="text-xs font-medium bg-zinc-800 text-zinc-400 px-2 py-1 rounded">Quads</span>
</div>
</div>
</div>

<div className="border border-dashed border-white/10 rounded-2xl p-4 flex items-center justify-center gap-2 text-zinc-500 hover:text-white hover:border-white/30 cursor-pointer transition h-16">
<i className="w-5 h-5" data-lucide="plus-circle"></i>
<span className="text-sm font-medium">Add Exercise</span>
</div>
</div>
</div>

<div className="absolute bottom-6 left-6 right-6">
<button className="w-full bg-green-500 hover:bg-green-400 text-black font-semibold text-lg py-4 rounded-2xl flex items-center justify-center gap-2 transition shadow-[0_0_20px_rgba(34,197,94,0.3)]">
<i className="w-5 h-5 fill-current" data-lucide="play"></i>
                    START WORKOUT
                </button>
</div>
</div>

<div className="relative w-full max-w-[400px] h-[860px] bg-[#0c0c0e] rounded-[3rem] border border-white/5 shadow-2xl overflow-hidden mx-auto flex flex-col">
<div className="h-6 w-full"></div>
<div className="flex items-center justify-between px-6 py-4">
<h1 className="text-xl font-medium tracking-tight text-white">Your Library</h1>
<button className="p-2 bg-zinc-800/50 rounded-full hover:bg-zinc-700 transition text-green-500"><i className="w-5 h-5" data-lucide="plus"></i></button>
</div>
<div className="px-6 mb-4">
<div className="relative">
<i className="absolute left-3 top-3 w-4 h-4 text-zinc-500" data-lucide="search"></i>
<input className="w-full bg-[#161618] border border-white/5 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-green-500/50" placeholder="Search workouts..." type="text"/>
</div>
</div>
<div className="px-6 mb-4 flex gap-2 overflow-x-auto no-scrollbar">
<button className="px-4 py-1.5 bg-green-500 text-black text-xs font-bold rounded-full">All</button>
<button className="px-4 py-1.5 bg-zinc-800 border border-white/5 text-zinc-300 text-xs font-medium rounded-full flex items-center gap-1"><i className="w-3 h-3" data-lucide="sparkles"></i> AI Generated</button>
<button className="px-4 py-1.5 bg-zinc-800 border border-white/5 text-zinc-300 text-xs font-medium rounded-full">Imported</button>
<button className="px-4 py-1.5 bg-zinc-800 border border-white/5 text-zinc-300 text-xs font-medium rounded-full">Manual</button>
</div>
<div className="flex-1 overflow-y-auto no-scrollbar px-6 pb-24 space-y-4">

<div className="bg-[#161618] border border-white/5 rounded-2xl p-3">
<div className="flex gap-4 mb-3">
<div className="w-20 h-20 rounded-lg bg-zinc-800 overflow-hidden">
<img alt="Upper Body" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
</div>
<div className="flex-1 py-1">
<div className="flex justify-between items-start">
<h3 className="text-base font-semibold text-white leading-tight">Upper Body Power</h3>
<i className="w-5 h-5 text-zinc-500" data-lucide="more-horizontal"></i>
</div>
<span className="inline-block px-1.5 py-0.5 bg-purple-500/20 text-purple-400 text-[9px] font-bold uppercase rounded mt-1.5">Manual</span>
<p className="text-[11px] text-zinc-500 mt-1">6 Exercises • 45 Mins</p>
</div>
</div>
<div className="grid grid-cols-2 gap-2">
<button className="bg-green-500 hover:bg-green-400 text-black text-xs font-bold py-2 rounded-lg flex items-center justify-center gap-1 transition"><i className="w-3 h-3 fill-current" data-lucide="play"></i> Start</button>
<button className="bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-medium py-2 rounded-lg transition">View</button>
</div>
</div>

<div className="bg-[#161618] border border-white/5 rounded-2xl p-3">
<div className="flex gap-4 mb-3">
<div className="w-20 h-20 rounded-lg bg-zinc-800 overflow-hidden">
<img alt="Leg Day" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1579758629938-03607ccdbaba?auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
</div>
<div className="flex-1 py-1">
<div className="flex justify-between items-start">
<h3 className="text-base font-semibold text-white leading-tight">Leg Day - Quads Focus</h3>
<i className="w-5 h-5 text-zinc-500" data-lucide="more-horizontal"></i>
</div>
<span className="inline-block px-1.5 py-0.5 bg-blue-500/20 text-blue-400 text-[9px] font-bold uppercase rounded mt-1.5">Imported</span>
<p className="text-[11px] text-zinc-500 mt-1">5 Exercises • 50 Mins</p>
</div>
</div>
<div className="grid grid-cols-2 gap-2">
<button className="bg-green-500 hover:bg-green-400 text-black text-xs font-bold py-2 rounded-lg flex items-center justify-center gap-1 transition"><i className="w-3 h-3 fill-current" data-lucide="play"></i> Start</button>
<button className="bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-medium py-2 rounded-lg transition">View</button>
</div>
</div>

<div className="bg-[#161618] border border-white/5 rounded-2xl p-3">
<div className="flex gap-4 mb-3">
<div className="w-20 h-20 rounded-lg bg-zinc-800 overflow-hidden">
<img alt="HIIT" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
</div>
<div className="flex-1 py-1">
<div className="flex justify-between items-start">
<h3 className="text-base font-semibold text-white leading-tight">Full Body HIIT</h3>
<i className="w-5 h-5 text-zinc-500" data-lucide="more-horizontal"></i>
</div>
<span className="inline-block px-1.5 py-0.5 bg-green-500/10 text-green-500 text-[9px] font-bold uppercase rounded mt-1.5 flex w-fit items-center gap-1"><i className="w-2 h-2" data-lucide="sparkles"></i> AI Built</span>
<p className="text-[11px] text-zinc-500 mt-1">8 Exercises • 30 Mins</p>
</div>
</div>
<div className="grid grid-cols-2 gap-2">
<button className="bg-green-500 hover:bg-green-400 text-black text-xs font-bold py-2 rounded-lg flex items-center justify-center gap-1 transition"><i className="w-3 h-3 fill-current" data-lucide="play"></i> Start</button>
<button className="bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-medium py-2 rounded-lg transition">View</button>
</div>
</div>
</div>

<div className="absolute bottom-0 w-full bg-[#0c0c0e]/95 backdrop-blur-lg border-t border-white/5 py-3 px-6 flex justify-between items-center z-20">
<div className="flex flex-col items-center gap-1 text-zinc-500 cursor-pointer hover:text-white transition">
<i className="w-5 h-5" data-lucide="home"></i>
<span className="text-[9px] font-medium">Home</span>
</div>
<div className="flex flex-col items-center gap-1 text-green-500 cursor-pointer">
<i className="w-5 h-5" data-lucide="library"></i>
<span className="text-[9px] font-medium">Library</span>
</div>
<div className="flex flex-col items-center gap-1 text-zinc-500 cursor-pointer hover:text-white transition">
<i className="w-5 h-5" data-lucide="history"></i>
<span className="text-[9px] font-medium">History</span>
</div>
<div className="flex flex-col items-center gap-1 text-zinc-500 cursor-pointer hover:text-white transition">
<i className="w-5 h-5" data-lucide="settings"></i>
<span className="text-[9px] font-medium">Settings</span>
</div>
</div>
</div>

<div className="relative w-full max-w-[400px] h-[860px] bg-[#0c0c0e] rounded-[3rem] border border-white/5 shadow-2xl overflow-hidden mx-auto flex flex-col">
<div className="h-6 w-full"></div>
<div className="flex items-center justify-between px-6 py-4">
<button className="p-2 -ml-2 text-zinc-400 hover:text-white"><i className="w-6 h-6" data-lucide="chevron-left"></i></button>
<h1 className="text-lg font-medium tracking-tight text-white">All Photos</h1>
<button className="p-2 -mr-2 text-zinc-400 hover:text-white"><i className="w-5 h-5" data-lucide="filter"></i></button>
</div>
<div className="flex items-center justify-between px-6 mb-4">
<span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">This Week</span>
<span className="text-[10px] font-medium bg-zinc-800 text-green-500 px-2 py-0.5 rounded-full">12 New</span>
</div>
<div className="flex-1 overflow-y-auto no-scrollbar px-2 pb-24">
<div className="grid grid-cols-2 gap-2">

<div className="aspect-square bg-zinc-800 rounded-xl overflow-hidden relative group">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute top-2 right-2 w-3 h-3 bg-green-500 rounded-full border border-black shadow"></div>
</div>

<div className="aspect-square bg-zinc-800 rounded-xl overflow-hidden">
<img className="w-full h-full object-cover opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>

<div className="aspect-square bg-zinc-800 rounded-xl overflow-hidden">
<img className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
</div>

<div className="aspect-square bg-zinc-800 rounded-xl overflow-hidden">
<img className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
</div>

<div className="aspect-square bg-zinc-800 rounded-xl overflow-hidden">
<img className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
</div>

<div className="aspect-square bg-zinc-800 rounded-xl overflow-hidden">
<img className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
</div>
</div>
<div className="flex items-center justify-between px-4 mt-6 mb-4">
<span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">September</span>
</div>
<div className="grid grid-cols-2 gap-2">
<div className="aspect-square bg-zinc-800 rounded-xl overflow-hidden">
<img className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
</div>
<div className="aspect-square bg-zinc-800 rounded-xl overflow-hidden">
<img className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
</div>
<div className="aspect-square bg-zinc-800 rounded-xl overflow-hidden">
<img className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1546483875-ad9014c88eba?auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
</div>
</div>
<div className="h-12 flex items-center justify-center mt-8 text-zinc-600">
<div className="w-8 h-8 rounded-full border-2 border-zinc-700 border-t-green-500 animate-spin"></div>
</div>
</div>

<div className="absolute bottom-8 right-6 z-20">
<button className="w-14 h-14 bg-green-500 hover:bg-green-400 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.4)] transition transform hover:scale-105">
<i className="w-6 h-6 text-black" data-lucide="camera"></i>
</button>
</div>
</div>
</div>


    </>
  );
}
