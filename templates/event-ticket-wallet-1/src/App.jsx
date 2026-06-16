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
      

<div className="mx-auto min-h-screen max-w-md bg-gray-50/50 pb-28 relative shadow-2xl overflow-hidden border-x border-gray-100">

<header className="px-6 pt-8 pb-2 bg-gray-50/50 sticky top-0 z-20 backdrop-blur-xl">
<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<i className="text-gray-400 w-5 h-5" data-lucide="search"></i>
</div>
<input className="block w-full pl-11 pr-4 py-4 bg-white border border-gray-100 rounded-3xl text-base text-gray-900 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500/50 transition-all" placeholder="Search tickets..." type="text"/>
</div>
</header>

<div className="px-6 mt-4 mb-8">
<div className="bg-white p-1.5 rounded-2xl flex shadow-sm border border-gray-100/50">
<button className="flex-1 py-3.5 text-gray-400 font-medium text-base rounded-xl hover:text-gray-600 transition-colors">
                    Upcoming
                </button>
<button className="flex-1 py-3.5 bg-red-500 text-white shadow-md font-medium text-base rounded-xl">
                    My Tickets
                </button>
</div>
</div>

<main className="px-6 space-y-8">
<div className="flex items-center justify-between">
<h2 className="text-2xl font-semibold tracking-tight text-gray-900">Active Tickets</h2>
<span className="text-sm font-medium text-gray-400">2 Valid</span>
</div>

<div className="bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 group">

<div className="h-32 w-full relative overflow-hidden">
<img alt="Food Event" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-green-600 text-xs font-semibold px-3 py-1.5 rounded-full border border-green-100 shadow-sm">
                        Paid
                    </div>
</div>

<div className="p-6">
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-2">Street Food Carnival</h3>
<p className="text-gray-500 text-base leading-relaxed mb-6">Experience the finest street flavors.</p>

<div className="grid grid-cols-2 gap-y-4 gap-x-2 mb-6">
<div className="flex items-start gap-3">
<div className="p-2 bg-red-50 rounded-lg text-red-500 mt-0.5">
<i className="w-4 h-4" data-lucide="calendar"></i>
</div>
<div>
<p className="text-xs text-gray-400 font-medium uppercase tracking-wide">Date</p>
<p className="text-base font-medium text-gray-900">Feb 10, 2024</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="p-2 bg-red-50 rounded-lg text-red-500 mt-0.5">
<i className="w-4 h-4" data-lucide="clock"></i>
</div>
<div>
<p className="text-xs text-gray-400 font-medium uppercase tracking-wide">Time</p>
<p className="text-base font-medium text-gray-900">12:00 PM</p>
</div>
</div>
<div className="flex items-start gap-3 col-span-2">
<div className="p-2 bg-red-50 rounded-lg text-red-500 mt-0.5">
<i className="w-4 h-4" data-lucide="map-pin"></i>
</div>
<div>
<p className="text-xs text-gray-400 font-medium uppercase tracking-wide">Location</p>
<p className="text-base font-medium text-gray-900">Central Park, Avenue 5</p>
</div>
</div>
</div>

<div className="relative flex items-center justify-center my-6">
<div className="absolute -left-8 w-6 h-6 bg-gray-50 rounded-full"></div>
<div className="w-full border-t-2 border-dashed border-gray-100"></div>
<div className="absolute -right-8 w-6 h-6 bg-gray-50 rounded-full"></div>
</div>

<div className="flex flex-col items-center justify-center space-y-4">
<div className="p-3 bg-white border border-gray-200 rounded-2xl shadow-sm">

<svg className="w-32 h-32 text-gray-900" fill="currentColor" viewbox="0 0 100 100">
<path d="M0 0h40v40H0V0zm10 10v20h20V10H10zM60 0h40v40H60V0zm10 10v20h20V10H70zM0 60h40v40H0V60zm10 10v20h20V70H10zM50 50h10v10H50V50zm20 0h10v10H70V50zm-20 20h10v10H50V70zm20 20h10v10H70V90z" opacity="0.9"></path>
<rect height="10" width="10" x="50" y="0"></rect>
<rect height="10" width="10" x="90" y="50"></rect>
<rect height="10" width="10" x="50" y="90"></rect>
</svg>
</div>
<div className="text-center">
<p className="text-xs text-gray-400 font-medium tracking-widest uppercase">Ticket ID</p>
<p className="text-lg font-mono font-medium text-gray-900 mt-1">#HC-89204</p>
</div>
</div>
<button className="w-full mt-6 py-3.5 bg-gray-900 text-white rounded-xl font-medium text-base hover:bg-gray-800 transition-colors shadow-lg shadow-gray-200">
                        Download Ticket
                    </button>
</div>
</div>

<div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 flex gap-4 items-center opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
<div className="h-16 w-16 flex-shrink-0 rounded-2xl bg-gray-100 overflow-hidden">
<img alt="Event" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1493770348161-369560ae357d?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-1">
<h3 className="text-lg font-semibold text-gray-900">Morning Brunch</h3>
<p className="text-gray-500 text-sm">Feb 14 • 09:00 AM</p>
</div>
<div className="h-10 w-10 flex items-center justify-center rounded-full border border-gray-100 text-gray-400">
<i className="w-5 h-5" data-lucide="chevron-right"></i>
</div>
</div>

<div className="pt-4 pb-8">
<h2 className="text-xl font-semibold tracking-tight text-gray-400 mb-4">Past Tickets</h2>
<div className="bg-gray-100 rounded-3xl p-5 border border-transparent flex gap-4 items-center grayscale">
<div className="h-16 w-16 flex-shrink-0 rounded-2xl bg-gray-200 overflow-hidden">
<img alt="Event" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="flex-1">
<h3 className="text-lg font-medium text-gray-500">Night Market</h3>
<p className="text-gray-400 text-sm">Jan 22 • Used</p>
</div>
</div>
</div>
</main>

<nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-100 pb-safe">

<div className="max-w-md mx-auto px-8 py-4 flex justify-between items-center">
<a className="flex flex-col items-center gap-1.5 text-gray-400 hover:text-gray-600 transition-colors" href="#">
<i className="w-6 h-6" data-lucide="home"></i>
<span className="text-xs font-medium">Home</span>
</a>
<a className="flex flex-col items-center gap-1.5 text-gray-400 hover:text-gray-600 transition-colors" href="#">
<i className="w-6 h-6" data-lucide="search"></i>
<span className="text-xs font-medium">Near Me</span>
</a>
<a className="flex flex-col items-center gap-1.5 text-gray-400 hover:text-gray-600 transition-colors" href="#">
<i className="w-6 h-6" data-lucide="heart"></i>
<span className="text-xs font-medium">Liked</span>
</a>

<a className="flex flex-col items-center gap-1.5 text-red-500" href="#">
<div className="relative">
<i className="w-6 h-6 fill-current opacity-20 absolute top-0 left-0" data-lucide="calendar"></i>
<i className="w-6 h-6 relative z-10" data-lucide="calendar"></i>
</div>
<span className="text-xs font-medium">Events</span>

<span className="absolute -top-1 right-2 w-1.5 h-1.5 bg-red-500 rounded-full"></span>
</a>
<a className="flex flex-col items-center gap-1.5 text-gray-400 hover:text-gray-600 transition-colors" href="#">
<i className="w-6 h-6" data-lucide="user"></i>
<span className="text-xs font-medium">Profile</span>
</a>
</div>
</nav>
</div>


    </>
  );
}
