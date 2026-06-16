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
      

<div className="bg-emerald-500 pb-32 pt-8 px-6 rounded-b-[2.5rem] relative z-0">
<div className="flex justify-between items-center mb-6">
<div className="flex items-center gap-3">
<img alt="Profile" className="w-12 h-12 rounded-full border-2 border-white/30 object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<div>
<p className="text-emerald-100 text-sm font-medium">Welcome back,</p>
<h1 className="text-white text-xl font-semibold tracking-tight">Sarah Johnson</h1>
</div>
</div>
<button className="bg-white/20 p-2.5 rounded-full backdrop-blur-sm text-white hover:bg-white/30 transition">
<i className="w-6 h-6" data-lucide="bell" strokeWidth="1.5"></i>
</button>
</div>
</div>

<div className="px-5 -mt-24 relative z-10 space-y-8">

<div className="bg-white rounded-[2rem] p-6 shadow-sm shadow-emerald-900/5 ring-1 ring-gray-100/50">
<div className="flex justify-between items-start mb-6">
<div>
<h2 className="text-gray-500 text-sm font-medium uppercase tracking-wide mb-1">Daily Goal</h2>
<div className="flex items-baseline gap-1.5">
<span className="text-4xl font-semibold tracking-tight text-gray-900">1,847</span>
<span className="text-gray-400 text-lg font-normal">/ 2,200</span>
</div>
<p className="text-gray-500 text-base mt-1">353 calories remaining</p>
</div>

<div className="relative w-24 h-24 flex items-center justify-center">
<svg className="w-full h-full transform -rotate-90" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="transparent" r="40" stroke="#f3f4f6" strokeWidth="8"></circle>
<circle cx="50" cy="50" fill="transparent" r="40" stroke="#10b981" stroke-dasharray="251.2" stroke-dashoffset="40" strokeLinecap="round" strokeWidth="8"></circle>
</svg>
<span className="absolute text-emerald-500 font-semibold text-xl">84%</span>
</div>
</div>

<div className="grid grid-cols-3 gap-3">
<div className="bg-orange-50 rounded-2xl p-4 flex flex-col items-center justify-center gap-1">
<div className="text-orange-500 mb-1"><i className="w-5 h-5" data-lucide="flame" strokeWidth="1.5"></i></div>
<span className="text-gray-500 text-sm">Carbs</span>
<span className="text-gray-900 font-semibold text-lg">184g</span>
</div>
<div className="bg-blue-50 rounded-2xl p-4 flex flex-col items-center justify-center gap-1">
<div className="text-blue-500 mb-1"><i className="w-5 h-5" data-lucide="zap" strokeWidth="1.5"></i></div>
<span className="text-gray-500 text-sm">Protein</span>
<span className="text-gray-900 font-semibold text-lg">92g</span>
</div>
<div className="bg-yellow-50 rounded-2xl p-4 flex flex-col items-center justify-center gap-1">
<div className="text-yellow-500 mb-1"><i className="w-5 h-5" data-lucide="droplet" strokeWidth="1.5"></i></div>
<span className="text-gray-500 text-sm">Fat</span>
<span className="text-gray-900 font-semibold text-lg">58g</span>
</div>
</div>
</div>

<div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-4">Quick Actions</h3>
<div className="grid grid-cols-2 gap-4">
<button className="bg-emerald-500 hover:bg-emerald-600 transition rounded-[1.5rem] p-5 text-left flex flex-col justify-between h-36 relative overflow-hidden group">
<div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-8 -mt-8 blur-2xl group-hover:bg-white/20 transition"></div>
<div className="bg-white/20 w-10 h-10 rounded-full flex items-center justify-center text-white backdrop-blur-md">
<i className="w-5 h-5" data-lucide="camera" strokeWidth="1.5"></i>
</div>
<div>
<span className="text-white font-semibold text-lg block">Scan Food</span>
<span className="text-emerald-100 text-sm">Take a photo</span>
</div>
</button>
<button className="bg-purple-600 hover:bg-purple-700 transition rounded-[1.5rem] p-5 text-left flex flex-col justify-between h-36 relative overflow-hidden group">
<div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-8 -mt-8 blur-2xl group-hover:bg-white/20 transition"></div>
<div className="bg-white/20 w-10 h-10 rounded-full flex items-center justify-center text-white backdrop-blur-md">
<i className="w-5 h-5" data-lucide="utensils" strokeWidth="1.5"></i>
</div>
<div>
<span className="text-white font-semibold text-lg block">Add Meal</span>
<span className="text-purple-100 text-sm">Manual entry</span>
</div>
</button>
</div>
</div>

<div>
<div className="flex justify-between items-end mb-4">
<h3 className="text-xl font-semibold tracking-tight text-gray-900">Today's Meals</h3>
<button className="text-emerald-600 font-medium text-base hover:text-emerald-700">View All</button>
</div>
<div className="space-y-4">

<div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex gap-4">
<img alt="Breakfast" className="w-20 h-20 rounded-xl object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="flex-1">
<div className="flex justify-between items-start">
<div>
<h4 className="font-semibold text-gray-900 text-lg">Breakfast Bowl</h4>
<p className="text-gray-400 text-sm mt-0.5">8:30 AM</p>
</div>
<span className="bg-emerald-50 text-emerald-600 text-xs font-semibold px-2 py-1 rounded-md">425 cal</span>
</div>
<div className="flex gap-4 mt-3">
<div className="flex items-center gap-1.5 text-sm text-gray-500">
<i className="w-3.5 h-3.5 text-orange-500" data-lucide="flame" strokeWidth="1.5"></i> 52g
                            </div>
<div className="flex items-center gap-1.5 text-sm text-gray-500">
<i className="w-3.5 h-3.5 text-blue-500" data-lucide="zap" strokeWidth="1.5"></i> 18g
                            </div>
<div className="flex items-center gap-1.5 text-sm text-gray-500">
<i className="w-3.5 h-3.5 text-yellow-500" data-lucide="droplet" strokeWidth="1.5"></i> 12g
                            </div>
</div>
</div>
</div>

<div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex gap-4">
<img alt="Salad" className="w-20 h-20 rounded-xl object-cover" src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
<div className="flex-1">
<div className="flex justify-between items-start">
<div>
<h4 className="font-semibold text-gray-900 text-lg">Grilled Chicken Salad</h4>
<p className="text-gray-400 text-sm mt-0.5">1:15 PM</p>
</div>
<span className="bg-emerald-50 text-emerald-600 text-xs font-semibold px-2 py-1 rounded-md">580 cal</span>
</div>
<div className="flex gap-4 mt-3">
<div className="flex items-center gap-1.5 text-sm text-gray-500">
<i className="w-3.5 h-3.5 text-orange-500" data-lucide="flame" strokeWidth="1.5"></i> 38g
                            </div>
<div className="flex items-center gap-1.5 text-sm text-gray-500">
<i className="w-3.5 h-3.5 text-blue-500" data-lucide="zap" strokeWidth="1.5"></i> 45g
                            </div>
<div className="flex items-center gap-1.5 text-sm text-gray-500">
<i className="w-3.5 h-3.5 text-yellow-500" data-lucide="droplet" strokeWidth="1.5"></i> 28g
                            </div>
</div>
</div>
</div>

<div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex gap-4">
<img alt="Smoothie" className="w-20 h-20 rounded-xl object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="flex-1">
<div className="flex justify-between items-start">
<div>
<h4 className="font-semibold text-gray-900 text-lg">Protein Smoothie</h4>
<p className="text-gray-400 text-sm mt-0.5">4:30 PM</p>
</div>
<span className="bg-emerald-50 text-emerald-600 text-xs font-semibold px-2 py-1 rounded-md">285 cal</span>
</div>
<div className="flex gap-4 mt-3">
<div className="flex items-center gap-1.5 text-sm text-gray-500">
<i className="w-3.5 h-3.5 text-orange-500" data-lucide="flame" strokeWidth="1.5"></i> 42g
                            </div>
<div className="flex items-center gap-1.5 text-sm text-gray-500">
<i className="w-3.5 h-3.5 text-blue-500" data-lucide="zap" strokeWidth="1.5"></i> 24g
                            </div>
<div className="flex items-center gap-1.5 text-sm text-gray-500">
<i className="w-3.5 h-3.5 text-yellow-500" data-lucide="droplet" strokeWidth="1.5"></i> 6g
                            </div>
</div>
</div>
</div>
</div>
</div>

<div>
<div className="flex justify-between items-center mb-4">
<h3 className="text-xl font-semibold tracking-tight text-gray-900">Weekly Progress</h3>
<button className="text-emerald-600 font-medium text-base flex items-center gap-1">
                    This Week <i className="w-4 h-4" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
</div>
<div className="bg-white p-6 rounded-[1.5rem] shadow-sm border border-gray-100">
<div className="relative h-48 w-full">

<div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-xs text-gray-400 font-medium">
<span>2400</span>
<span>2200</span>
<span>2000</span>
<span>1800</span>
<span>1600</span>
</div>

<div className="ml-10 h-full relative">

<div className="absolute w-full top-[0%] border-t border-gray-100 border-dashed"></div>
<div className="absolute w-full top-[25%] border-t border-gray-100 border-dashed"></div>
<div className="absolute w-full top-[50%] border-t border-gray-100 border-dashed"></div>
<div className="absolute w-full top-[75%] border-t border-gray-100 border-dashed"></div>
<div className="absolute w-full top-[100%] border-t border-gray-100 border-dashed"></div>

<svg className="absolute inset-0 h-[calc(100%-24px)] w-full overflow-visible" preserveaspectratio="none">
<defs>
<lineargradient id="gradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#10b981" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="#10b981" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path d="M0,80 C20,30 40,35 60,60 S100,20 120,40 S160,80 180,60 S220,10 240,20 S280,60 300,50 V150 H0 Z" fill="url(#gradient)"></path>
<path d="M0,80 C20,30 40,35 60,60 S100,20 120,40 S160,80 180,60 S220,10 240,20 S280,60 300,50" fill="none" stroke="#10b981" strokeWidth="2.5" vector-effect="non-scaling-stroke"></path>

<circle cx="16.6%" cy="30%" fill="white" r="4" stroke="#10b981" strokeWidth="2"></circle>
<circle cx="33.2%" cy="58%" fill="white" r="4" stroke="#10b981" strokeWidth="2"></circle>
<circle cx="49.8%" cy="40%" fill="white" r="4" stroke="#10b981" strokeWidth="2"></circle>
<circle cx="66.4%" cy="75%" fill="white" r="4" stroke="#10b981" strokeWidth="2"></circle>
<circle cx="83%" cy="20%" fill="white" r="4" stroke="#10b981" strokeWidth="2"></circle>
<circle cx="99.6%" cy="45%" fill="white" r="4" stroke="#10b981" strokeWidth="2"></circle>
</svg>

<div className="absolute bottom-0 w-full flex justify-between text-xs text-gray-400 font-medium translate-y-6">
<span>Mon</span>
<span>Tue</span>
<span>Wed</span>
<span>Thu</span>
<span>Fri</span>
<span>Sat</span>
<span>Sun</span>
</div>
</div>
</div>
</div>
</div>

<div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-4">AI Insights</h3>
<div className="space-y-4">

<div className="bg-blue-50 p-5 rounded-2xl flex gap-4 items-start">
<div className="bg-blue-500 rounded-full p-2 text-white shrink-0 mt-0.5">
<i className="w-5 h-5" data-lucide="lightbulb" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="font-semibold text-gray-900 text-lg">Great protein intake!</h4>
<p className="text-gray-600 text-base mt-1 leading-relaxed">You've consistently hit your protein goals this week. This helps with muscle recovery and keeps you satisfied longer.</p>
</div>
</div>

<div className="bg-orange-50 p-5 rounded-2xl flex gap-4 items-start">
<div className="bg-orange-500 rounded-full p-2 text-white shrink-0 mt-0.5">
<i className="w-5 h-5" data-lucide="trending-up" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="font-semibold text-gray-900 text-lg">Trending up on fiber</h4>
<p className="text-gray-600 text-base mt-1 leading-relaxed">Your fiber intake increased by 15% this week. Consider adding more whole grains for optimal digestion.</p>
</div>
</div>

<div className="bg-purple-50 p-5 rounded-2xl flex gap-4 items-start">
<div className="bg-purple-500 rounded-full p-2 text-white shrink-0 mt-0.5">
<i className="w-5 h-5" data-lucide="trophy" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="font-semibold text-gray-900 text-lg">5-day streak!</h4>
<p className="text-gray-600 text-base mt-1 leading-relaxed">You've logged meals for 5 consecutive days. Keep up the momentum to build lasting healthy habits!</p>
</div>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100">
<div className="flex justify-between items-center mb-6">
<h3 className="text-xl font-semibold tracking-tight text-gray-900">Hydration</h3>
<span className="text-gray-500 text-base font-medium">6 / 8 glasses</span>
</div>
<div className="flex justify-between gap-1.5 mb-6 h-12">

<div className="h-full w-full bg-blue-500 rounded-lg opacity-100"></div>
<div className="h-full w-full bg-blue-500 rounded-lg opacity-100"></div>
<div className="h-full w-full bg-blue-500 rounded-lg opacity-100"></div>
<div className="h-full w-full bg-blue-500 rounded-lg opacity-100"></div>
<div className="h-full w-full bg-blue-500 rounded-lg opacity-100"></div>
<div className="h-full w-full bg-blue-500 rounded-lg opacity-100"></div>
<div className="h-full w-full bg-gray-200 rounded-lg opacity-100"></div>
<div className="h-full w-full bg-gray-200 rounded-lg opacity-100"></div>
</div>
<button className="w-full bg-blue-500 hover:bg-blue-600 transition text-white font-medium text-lg py-3.5 rounded-xl flex items-center justify-center gap-2">
<i className="w-5 h-5" data-lucide="plus" strokeWidth="1.5"></i> Add Glass
            </button>
</div>

<div>
<div className="flex justify-between items-end mb-4">
<h3 className="text-xl font-semibold tracking-tight text-gray-900">Suggested for Dinner</h3>
<button className="text-emerald-600 font-medium text-base hover:text-emerald-700">More</button>
</div>
<div className="grid grid-cols-2 gap-4">

<div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100">
<div className="aspect-square w-full rounded-xl overflow-hidden mb-3">
<img alt="Salmon" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<h4 className="font-semibold text-gray-900 text-base leading-tight">Grilled Salmon</h4>
<p className="text-gray-400 text-xs mt-0.5 mb-2">with Quinoa</p>
<div className="flex justify-between items-center">
<span className="text-emerald-600 text-sm font-semibold">520 cal</span>
<button className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center hover:bg-emerald-600 transition">
<i className="w-5 h-5" data-lucide="plus" strokeWidth="1.5"></i>
</button>
</div>
</div>

<div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100">
<div className="aspect-square w-full rounded-xl overflow-hidden mb-3">
<img alt="Tofu" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
</div>
<h4 className="font-semibold text-gray-900 text-base leading-tight">Tofu Stir Fry</h4>
<p className="text-gray-400 text-xs mt-0.5 mb-2">with Vegetables</p>
<div className="flex justify-between items-center">
<span className="text-emerald-600 text-sm font-semibold">380 cal</span>
<button className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center hover:bg-emerald-600 transition">
<i className="w-5 h-5" data-lucide="plus" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>
</div>

<div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-4">Recent Achievements</h3>
<div className="grid grid-cols-3 gap-3">
<div className="bg-yellow-100 p-4 rounded-2xl flex flex-col items-center text-center gap-2 border border-yellow-200">
<div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-white">
<i className="w-6 h-6" data-lucide="flame" fill="currentColor" strokeWidth="1.5"></i>
</div>
<span className="text-gray-900 font-semibold text-sm leading-tight">5 Day<br/>Streak</span>
</div>
<div className="bg-emerald-100 p-4 rounded-2xl flex flex-col items-center text-center gap-2 border border-emerald-200">
<div className="w-12 h-12 bg-emerald-400 rounded-full flex items-center justify-center text-white">
<i className="w-7 h-7" data-lucide="check" strokeWidth="2"></i>
</div>
<span className="text-gray-900 font-semibold text-sm leading-tight">Goal<br/>Reached</span>
</div>
<div className="bg-blue-100 p-4 rounded-2xl flex flex-col items-center text-center gap-2 border border-blue-200">
<div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center text-white">
<i className="w-6 h-6" data-lucide="star" fill="currentColor" strokeWidth="1.5"></i>
</div>
<span className="text-gray-900 font-semibold text-sm leading-tight">First<br/>Week</span>
</div>
</div>
</div>
</div>

<div className="fixed bottom-0 w-full bg-white border-t border-gray-200 pb-safe pt-2 px-6 pb-6 z-50">
<div className="flex justify-between items-end relative">
<button className="flex flex-col items-center gap-1 p-2 text-emerald-500">
<i className="w-6 h-6" data-lucide="home" fill="currentColor" strokeWidth="1.5"></i>
<span className="text-xs font-medium">Home</span>
</button>
<button className="flex flex-col items-center gap-1 p-2 text-gray-400 hover:text-gray-600">
<i className="w-6 h-6" data-lucide="bar-chart-2" strokeWidth="1.5"></i>
<span className="text-xs font-medium">Stats</span>
</button>

<div className="relative -top-6">
<button className="w-16 h-16 bg-emerald-500 rounded-full text-white shadow-lg shadow-emerald-500/30 flex items-center justify-center transform transition active:scale-95 border-4 border-white">
<i className="w-7 h-7" data-lucide="camera" strokeWidth="1.5"></i>
</button>
</div>
<button className="flex flex-col items-center gap-1 p-2 text-gray-400 hover:text-gray-600">
<i className="w-6 h-6" data-lucide="book-open" strokeWidth="1.5"></i>
<span className="text-xs font-medium">Recipes</span>
</button>
<button className="flex flex-col items-center gap-1 p-2 text-gray-400 hover:text-gray-600">
<i className="w-6 h-6" data-lucide="user" strokeWidth="1.5"></i>
<span className="text-xs font-medium">Profile</span>
</button>
</div>
</div>


    </>
  );
}
