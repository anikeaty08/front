import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
50: '#f0fdf4',
100: '#dcfce7',
500: '#22c55e',
600: '#16a34a',
900: '#14532d',
}
},
animation: {
'fade-in': 'fadeIn 0.2s ease-out forwards',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0', transform: 'translateY(4px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



        function switchTab(tabId) {
            // 1. Hide all tab views
            const views = document.querySelectorAll('.page-view');
            views.forEach(view => {
                view.classList.add('hidden');
                view.classList.remove('block');
            });

            // 2. Show the selected tab
            const selectedView = document.getElementById('tab-' + tabId);
            if(selectedView) {
                selectedView.classList.remove('hidden');
                selectedView.classList.add('block');
            }

            // 3. Update Header Text based on tab (Optional refinement)
            const headerTitle = document.querySelector('header h1');
            const headerSub = document.querySelector('header p');
            
            if(tabId === 'home') {
                headerTitle.innerText = "Good Morning";
                headerSub.innerText = "Alex & Luna";
            } else if (tabId === 'guide') {
                headerTitle.innerText = "Training Guide";
                headerSub.innerText = "Lessons & Tips";
            } else if (tabId === 'health') {
                headerTitle.innerText = "Health Record";
                headerSub.innerText = "Vitals & Vet";
            } else if (tabId === 'profile') {
                headerTitle.innerText = "Profile";
                headerSub.innerText = "Settings";
            }

            // 4. Reset Scroll
            document.getElementById('main-scroll').scrollTop = 0;

            // 5. Update Navigation Icons styling
            const navButtons = ['home', 'guide', 'health', 'profile'];
            
            navButtons.forEach(nav => {
                const btn = document.getElementById('nav-' + nav);
                const isActive = (nav === tabId);
                
                if (isActive) {
                    btn.classList.remove('text-zinc-400');
                    btn.classList.add('text-zinc-900');
                } else {
                    btn.classList.remove('text-zinc-900');
                    btn.classList.add('text-zinc-400');
                }
            });
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="w-full max-w-[400px] h-[850px] bg-white rounded-[2.5rem] shadow-2xl overflow-hidden relative border-[6px] border-zinc-900 flex flex-col ring-1 ring-zinc-900/5">

<div className="absolute top-0 w-full h-8 bg-white/90 backdrop-blur-md z-50 flex items-center justify-between px-6 pt-2">
<span className="text-xs font-semibold tracking-wide text-zinc-900">9:41</span>
<div className="flex gap-1.5 items-center">
<div className="w-4 h-4 rounded-full bg-zinc-900/10 flex items-center justify-center">
<svg className="text-zinc-900" data-lucide="signal" height="10" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><path d="M2 20h.01M7 20v-4m5 4v-8m5 8V8m5-4v16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
<svg className="text-zinc-900" data-lucide="battery-full" height="16" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M10 10v4m4-4v4m8 0v-4M6 10v4"></path><rect height="12" rx="2" width="16" x="2" y="6"></rect></g></svg>
</div>
</div>

<header className="pt-12 pb-4 px-6 bg-white flex justify-between items-center z-40 sticky top-0 transition-all duration-300" id="app-header">

<div className="flex items-center gap-3">
<div className="relative">
<div className="w-10 h-10 rounded-full bg-zinc-100 overflow-hidden ring-1 ring-zinc-200">
<img alt="Dog" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
</div>
<div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></div>
</div>
<div>
<h1 className="text-sm font-semibold text-zinc-800 leading-tight">Good Morning</h1>
<p className="text-xs text-zinc-500">Alex &amp; Luna</p>
</div>
</div>
<button className="w-9 h-9 flex items-center justify-center rounded-full bg-zinc-50 border border-zinc-200 text-zinc-600 hover:bg-zinc-100 transition-colors">
<svg data-lucide="bell" height="18" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0m-10.47-5.674A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</button>
</header>

<main className="flex-1 overflow-y-auto no-scrollbar pb-24 bg-zinc-50/50 relative" id="main-scroll">

<div className="page-view animate-fade-in block" id="tab-home">

<div className="px-6 mb-6 mt-2">
<div className="bg-zinc-900 text-white p-5 rounded-3xl shadow-lg shadow-zinc-200 relative overflow-hidden group">
<div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 blur-3xl opacity-20 -mr-10 -mt-10"></div>
<div className="relative z-10">
<div className="flex items-center gap-2 mb-3">
<span className="bg-zinc-800/80 px-2 py-0.5 rounded text-[10px] font-medium tracking-wide text-zinc-300 border border-zinc-700">AI COACH</span>
</div>
<h2 className="text-lg font-medium tracking-tight mb-1">Luna is barking at the door?</h2>
<p className="text-sm text-zinc-400 mb-4 font-light">Get instant behavioral advice tailored to her breed.</p>
<div className="flex gap-2">
<button className="flex-1 bg-white text-zinc-900 py-2.5 px-4 rounded-xl text-xs font-medium flex items-center justify-center gap-2 hover:bg-zinc-100 transition-colors">
<svg height="14" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg>
                                    Ask PupAI
                                </button>
<button className="w-10 h-10 flex items-center justify-center rounded-xl bg-zinc-800 text-white hover:bg-zinc-700 transition-colors">
<svg height="16" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19v3m7-12v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></g></svg>
</button>
</div>
</div>
</div>
</div>

<div className="px-6 mb-8">
<h3 className="text-xs font-medium text-zinc-400 uppercase tracking-wider mb-3 pl-1">Daily Tracker</h3>
<div className="grid grid-cols-2 gap-3">
<button className="bg-white p-4 rounded-2xl border border-zinc-200 shadow-sm flex flex-col items-start gap-3 hover:border-zinc-300 transition-all active:scale-95 group">
<div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
<svg height="16" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2m10 0h2a2 2 0 0 1 2 2v2m0 10v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2m4-5h10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
<div className="text-left">
<span className="block text-sm font-medium text-zinc-800">Health Scan</span>
<span className="block text-[10px] text-zinc-400">Check stool &amp; skin</span>
</div>
</button>
<button className="flex flex-col hover:border-zinc-300 transition-all active:scale-95 group bg-white border-zinc-200 border rounded-2xl pt-4 pr-4 pb-4 pl-4 shadow-sm gap-x-3 gap-y-3 items-start">
<div className="w-8 h-8 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center group-hover:bg-orange-100 transition-colors">
<svg height="16" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2s4-2 4-2M9 9h.01M15 9h.01"></path></g></svg>
</div>
<div className="text-left">
<span className="block text-sm font-medium text-zinc-800">Log Mood</span>
<span className="block text-[10px] text-zinc-400">Currently: Playful</span>
</div>
</button>
</div>
</div>

<div className="px-6 mb-8">
<div className="bg-white p-5 rounded-3xl border border-zinc-200 shadow-sm">
<div className="flex justify-between items-end mb-4">
<div>
<h3 className="text-sm font-medium text-zinc-900">Energy Level</h3>
<p className="text-xs text-zinc-500 mt-1">Suggested: 15 min walk</p>
</div>
<span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">High</span>
</div>
<div className="relative h-10 flex items-center">
<div className="absolute w-full h-1.5 bg-zinc-100 rounded-full overflow-hidden">
<div className="w-3/4 h-full bg-gradient-to-r from-emerald-400 to-emerald-500"></div>
</div>
<div className="absolute left-3/4 -ml-3 w-6 h-6 bg-white border border-zinc-200 shadow-md rounded-full flex items-center justify-center z-10 cursor-pointer hover:scale-110 transition-transform">
<div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
</div>
<div className="absolute w-full flex justify-between px-1 mt-6">
<span className="text-[10px] text-zinc-300 font-medium">Sleepy</span>
<span className="text-[10px] text-zinc-300 font-medium">Hyper</span>
</div>
</div>
</div>
</div>

<div className="mb-4">
<div className="px-6 flex justify-between items-center mb-3">
<h3 className="text-sm font-medium text-zinc-900 tracking-tight">Expert Mentorship</h3>
<a className="text-[10px] font-medium text-zinc-500 hover:text-zinc-800" href="#">View All</a>
</div>
<div className="flex overflow-x-auto gap-4 px-6 no-scrollbar pb-4">
<div className="min-w-[200px] flex-shrink-0 group cursor-pointer">
<div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-2 shadow-sm">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
<div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-md px-1.5 py-0.5 rounded text-[10px] text-white font-medium flex items-center gap-1">
<svg data-lucide="play" height="8" strokeWidth="2" viewbox="0 0 24 24" width="8" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path></svg> 5:20
                                </div>
</div>
<h4 className="text-xs font-medium text-zinc-800 leading-snug">Leash Training 101</h4>
<p className="text-[10px] text-zinc-500 mt-0.5">Dr. Sarah Miller</p>
</div>
<div className="min-w-[200px] flex-shrink-0 group cursor-pointer">
<div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-2 shadow-sm">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
<div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-md px-1.5 py-0.5 rounded text-[10px] text-white font-medium flex items-center gap-1">
<svg data-lucide="play" height="8" strokeWidth="2" viewbox="0 0 24 24" width="8" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path></svg> 3:45
                                </div>
</div>
<h4 className="text-xs font-medium text-zinc-800 leading-snug">Separation Anxiety</h4>
<p className="text-[10px] text-zinc-500 mt-0.5">Puppy School</p>
</div>
</div>
</div>

<div className="px-6 mb-6">
<h3 className="text-xs font-medium text-zinc-400 uppercase tracking-wider mb-3 pl-1">Today</h3>
<div className="bg-white rounded-2xl border border-zinc-200 divide-y divide-zinc-100 overflow-hidden">
<div className="p-3 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-400 border border-zinc-100">
<svg height="14" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
<div className="flex-1">
<p className="text-xs font-medium text-zinc-800">Morning Walk</p>
<p className="text-[10px] text-zinc-400">8:30 AM • 20 mins</p>
</div>
</div>
<div className="p-3 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-400 border border-zinc-100">
<svg height="14" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2M7 2v20m14-7V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2zm0 0v7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
<div className="flex-1">
<p className="text-xs font-medium text-zinc-800">Breakfast</p>
<p className="text-[10px] text-zinc-400">9:00 AM • 1.5 cups</p>
</div>
</div>
</div>
</div>
</div>

<div className="page-view animate-fade-in hidden" id="tab-guide">

<div className="px-6 mb-6 mt-2">
<div className="relative">
<input className="w-full bg-white border border-zinc-200 text-xs py-3 pl-10 pr-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-900/5 focus:border-zinc-300 placeholder-zinc-400" placeholder="Search commands, tricks..." type="text"/>
<svg className="absolute left-3.5 top-3 text-zinc-400" height="14" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" fill="none" r="8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></circle><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" x1="21" x2="16.65" y1="21" y2="16.65"></line></svg>
</div>
</div>

<div className="px-6 mb-6">
<div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
<button className="px-4 py-2 bg-zinc-900 text-white rounded-lg text-xs font-medium whitespace-nowrap">All Topics</button>
<button className="px-4 py-2 bg-white border border-zinc-200 text-zinc-600 rounded-lg text-xs font-medium whitespace-nowrap">Obedience</button>
<button className="px-4 py-2 bg-white border border-zinc-200 text-zinc-600 rounded-lg text-xs font-medium whitespace-nowrap">Nutrition</button>
<button className="px-4 py-2 bg-white border border-zinc-200 text-zinc-600 rounded-lg text-xs font-medium whitespace-nowrap">Grooming</button>
</div>
</div>

<div className="px-6 mb-8">
<h3 className="text-xs font-medium text-zinc-400 uppercase tracking-wider mb-3 pl-1">Continue Learning</h3>
<div className="bg-white p-4 rounded-2xl border border-zinc-200 shadow-sm flex items-center gap-4">
<div className="w-16 h-16 rounded-lg bg-zinc-100 overflow-hidden flex-shrink-0 relative">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544568100-847a948585b9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
<div className="absolute inset-0 bg-black/10 flex items-center justify-center">
<div className="w-6 h-6 bg-white/90 rounded-full flex items-center justify-center pl-0.5 shadow-sm">
<svg className="text-zinc-900" fill="currentColor" height="10" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><path d="M8 5v14l11-7z"></path></svg>
</div>
</div>
</div>
<div className="flex-1">
<h4 className="text-sm font-semibold text-zinc-900">Recall Mastery</h4>
<p className="text-[10px] text-zinc-500 mb-2">Lesson 3 of 5 • Intermediate</p>
<div className="w-full h-1 bg-zinc-100 rounded-full overflow-hidden">
<div className="w-3/5 h-full bg-zinc-900 rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="px-6 mb-6">
<h3 className="text-xs font-medium text-zinc-400 uppercase tracking-wider mb-3 pl-1">Skills Checklist</h3>
<div className="space-y-3">
<div className="bg-white p-3.5 rounded-xl border border-zinc-200 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full border-2 border-green-500 flex items-center justify-center bg-green-50 text-green-600">
<svg height="10" strokeWidth="3" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
<span className="text-sm font-medium text-zinc-700 decoration-zinc-400">Sit Command</span>
</div>
<span className="text-[10px] font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded">Mastered</span>
</div>
<div className="bg-white p-3.5 rounded-xl border border-zinc-200 flex items-center justify-between opacity-70">
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full border-2 border-zinc-200"></div>
<span className="text-sm font-medium text-zinc-700">Stay Command</span>
</div>
<span className="text-[10px] font-medium text-zinc-400 bg-zinc-100 px-2 py-0.5 rounded">In Progress</span>
</div>
<div className="bg-white p-3.5 rounded-xl border border-zinc-200 flex items-center justify-between opacity-70">
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full border-2 border-zinc-200"></div>
<span className="text-sm font-medium text-zinc-700">Leash Walking</span>
</div>
<span className="text-[10px] font-medium text-zinc-400 bg-zinc-100 px-2 py-0.5 rounded">Locked</span>
</div>
</div>
</div>
</div>

<div className="page-view animate-fade-in hidden" id="tab-health">

<div className="px-6 mb-6 mt-2">
<div className="bg-white p-6 rounded-3xl border border-zinc-200 shadow-sm text-center relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-500"></div>
<p className="text-xs font-medium text-zinc-400 uppercase tracking-widest mb-1">Current Weight</p>
<h2 className="text-3xl font-bold text-zinc-900 tracking-tight">24.5 <span className="text-lg text-zinc-400 font-medium">lbs</span></h2>
<div className="mt-4 h-24 flex items-end justify-center gap-2">
<div className="w-2 bg-zinc-100 rounded-t h-[40%]"></div>
<div className="w-2 bg-zinc-100 rounded-t h-[50%]"></div>
<div className="w-2 bg-zinc-100 rounded-t h-[45%]"></div>
<div className="w-2 bg-zinc-100 rounded-t h-[60%]"></div>
<div className="w-2 bg-zinc-100 rounded-t h-[70%]"></div>
<div className="w-2 bg-indigo-500 rounded-t h-[85%] relative shadow-lg shadow-indigo-200"></div>
<div className="w-2 bg-zinc-100 rounded-t h-[80%]"></div>
</div>
<button className="mt-4 text-[10px] font-semibold text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-full hover:bg-indigo-100 transition-colors">
                            + Log Weight
                        </button>
</div>
</div>

<div className="px-6 mb-6">
<h3 className="text-xs font-medium text-zinc-400 uppercase tracking-wider mb-3 pl-1">Upcoming</h3>
<div className="bg-zinc-900 text-white p-5 rounded-2xl shadow-lg relative overflow-hidden">
<div className="flex justify-between items-start mb-4">
<div>
<p className="text-[10px] text-zinc-400 font-medium tracking-wide">VET VISIT</p>
<h4 className="text-lg font-medium mt-1">Annual Checkup</h4>
<p className="text-xs text-zinc-400 mt-0.5">Dr. Sarah Miller • City Vet</p>
</div>
<div className="bg-zinc-800 rounded-lg p-2 text-center min-w-[50px]">
<span className="block text-[10px] text-zinc-400 uppercase">Oct</span>
<span className="block text-xl font-bold leading-none mt-0.5">24</span>
</div>
</div>
<div className="flex items-center gap-2 text-xs text-zinc-300 bg-zinc-800/50 p-2 rounded-lg backdrop-blur-sm">
<svg height="14" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0a9 9 0 0 1 18 0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                            10:30 AM
                        </div>
</div>
</div>

<div className="px-6 mb-8">
<h3 className="text-xs font-medium text-zinc-400 uppercase tracking-wider mb-3 pl-1">Vaccinations</h3>
<div className="bg-white rounded-2xl border border-zinc-200 divide-y divide-zinc-100">
<div className="p-4 flex justify-between items-center">
<div>
<p className="text-sm font-medium text-zinc-800">Rabies</p>
<p className="text-[10px] text-zinc-400">Expires 12/2024</p>
</div>
<span className="px-2 py-1 rounded text-[10px] font-medium bg-green-50 text-green-600 border border-green-100">Active</span>
</div>
<div className="p-4 flex justify-between items-center">
<div>
<p className="text-sm font-medium text-zinc-800">DHPP</p>
<p className="text-[10px] text-zinc-400">Expires 01/2025</p>
</div>
<span className="px-2 py-1 rounded text-[10px] font-medium bg-green-50 text-green-600 border border-green-100">Active</span>
</div>
<div className="p-4 flex justify-between items-center opacity-60">
<div>
<p className="text-sm font-medium text-zinc-800">Bordetella</p>
<p className="text-[10px] text-zinc-400">Expired 08/2023</p>
</div>
<span className="px-2 py-1 rounded text-[10px] font-medium bg-red-50 text-red-600 border border-red-100">Expired</span>
</div>
</div>
</div>
</div>

<div className="page-view animate-fade-in hidden" id="tab-profile">

<div className="px-6 mb-6 mt-4 flex flex-col items-center">
<div className="relative mb-4">
<div className="w-24 h-24 rounded-full p-1 border-2 border-zinc-100 bg-white">
<img className="w-full h-full rounded-full object-cover" src="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
<button className="absolute bottom-0 right-0 w-8 h-8 bg-zinc-900 text-white rounded-full flex items-center justify-center border-2 border-white shadow-sm">
<svg height="14" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1l1-4l9.5-9.5z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</button>
</div>
<h2 className="text-xl font-bold text-zinc-900">Luna</h2>
<p className="text-sm text-zinc-500">Golden Retriever • 2 Years</p>
</div>

<div className="px-6 mb-8">
<div className="grid grid-cols-3 gap-3">
<div className="bg-white p-3 rounded-xl border border-zinc-200 text-center">
<p className="text-[10px] text-zinc-400 uppercase font-medium">Age</p>
<p className="text-sm font-bold text-zinc-900 mt-1">2 yrs</p>
</div>
<div className="bg-white p-3 rounded-xl border border-zinc-200 text-center">
<p className="text-[10px] text-zinc-400 uppercase font-medium">Weight</p>
<p className="text-sm font-bold text-zinc-900 mt-1">24.5 lb</p>
</div>
<div className="bg-white p-3 rounded-xl border border-zinc-200 text-center">
<p className="text-[10px] text-zinc-400 uppercase font-medium">Sex</p>
<p className="text-sm font-bold text-zinc-900 mt-1">Female</p>
</div>
</div>
</div>

<div className="px-6 mb-8">
<h3 className="text-xs font-medium text-zinc-400 uppercase tracking-wider mb-3 pl-1">Settings</h3>
<div className="bg-white rounded-2xl border border-zinc-200 divide-y divide-zinc-100">
<button className="w-full p-4 flex items-center justify-between hover:bg-zinc-50 transition-colors text-left group">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-50 text-zinc-500 flex items-center justify-center group-hover:bg-zinc-200 transition-colors">
<svg height="16" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><circle cx="12" cy="7" fill="none" r="4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></circle></svg>
</div>
<span className="text-sm font-medium text-zinc-800">Owner Profile</span>
</div>
<svg className="text-zinc-300" height="16" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 18l6-6l-6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</button>
<button className="w-full p-4 flex items-center justify-between hover:bg-zinc-50 transition-colors text-left group">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-50 text-zinc-500 flex items-center justify-center group-hover:bg-zinc-200 transition-colors">
<svg height="16" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M13.73 21a2 2 0 0 1-3.46 0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
<span className="text-sm font-medium text-zinc-800">Notifications</span>
</div>
<svg className="text-zinc-300" height="16" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 18l6-6l-6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</button>
<button className="w-full p-4 flex items-center justify-between hover:bg-zinc-50 transition-colors text-left group">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-50 text-zinc-500 flex items-center justify-center group-hover:bg-zinc-200 transition-colors">
<svg height="16" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" fill="none" r="3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83a2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33a1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2a2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0a2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2a2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83a2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2a2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0a2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2a2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
<span className="text-sm font-medium text-zinc-800">App Settings</span>
</div>
<svg className="text-zinc-300" height="16" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 18l6-6l-6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</button>
</div>
</div>
</div>
</main>

<nav className="absolute bottom-0 w-full bg-white/95 backdrop-blur-xl border-t border-zinc-200 pb-6 pt-2 px-6 z-50">
<ul className="flex justify-between items-center">
<li>
<button className="flex flex-col items-center gap-1 text-zinc-900 p-2 group transition-colors" id="nav-home" onclick="switchTab('home')">
<svg height="22" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path></svg>
<span className="text-[10px] font-medium group-hover:text-zinc-900">Home</span>
</button>
</li>
<li>
<button className="flex flex-col items-center gap-1 text-zinc-400 hover:text-zinc-600 transition-colors p-2 group" id="nav-guide" onclick="switchTab('guide')">
<svg height="22" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14m-9-3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4a4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3a3 3 0 0 0-3-3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path></svg>
<span className="text-[10px] font-medium group-hover:text-zinc-600">Guide</span>
</button>
</li>
<li className="-mt-8">
<button className="w-14 h-14 bg-zinc-900 rounded-full flex items-center justify-center shadow-xl shadow-zinc-300 hover:scale-105 active:scale-95 transition-all border-4 border-white cursor-pointer">
<svg className="text-white" height="24" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2m10 0h2a2 2 0 0 1 2 2v2m0 10v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</button>
</li>
<li>
<button className="flex flex-col items-center gap-1 text-zinc-400 hover:text-zinc-600 transition-colors p-2 group" id="nav-health" onclick="switchTab('health')">
<svg height="22" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path></svg>
<span className="text-[10px] font-medium group-hover:text-zinc-600">Health</span>
</button>
</li>
<li>
<button className="flex flex-col items-center gap-1 text-zinc-400 hover:text-zinc-600 transition-colors p-2 group" id="nav-profile" onclick="switchTab('profile')">
<svg height="22" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><circle cx="12" cy="7" fill="none" r="4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></circle></svg>
<span className="text-[10px] font-medium group-hover:text-zinc-600">Profile</span>
</button>
</li>
</ul>
</nav>

<div className="absolute bottom-1.5 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-zinc-200 rounded-full z-50"></div>
</div>



    </>
  );
}
