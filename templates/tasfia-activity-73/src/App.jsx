import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Lucide Icons
        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="relative w-full max-w-md mx-auto bg-white min-h-screen shadow-sm flex flex-col">

<div className="flex-1 pb-32 pt-6">

<div className="px-6 pb-6">
<div className="flex items-start justify-between">
<div>
<p className="text-sm text-gray-500 font-medium mb-0.5">Monday, Oct 24</p>
<h1 className="text-2xl font-semibold tracking-tight text-gray-900">Hi, Alex</h1>
</div>
<button className="relative p-2 rounded-full hover:bg-gray-50 transition-colors border border-gray-100">
<svg className="lucide lucide-bell w-5 h-5 text-gray-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
<span className="absolute top-2 right-2.5 w-1.5 h-1.5 bg-red-500 rounded-full border border-white"></span>
</button>
</div>
</div>

<div className="px-6 mb-6">
<h2 className="text-sm font-semibold text-gray-900 tracking-tight mb-3">Up Next</h2>
<div className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-sm transition-all">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"></div>
<div className="p-5">
<div className="flex mb-4 items-start justify-between">
<div className="flex items-center space-x-3">
<div className="w-10 h-10 rounded-full bg-gray-100 overflow-hidden border border-gray-100">
<img alt="Coach" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1517677129300-07b130802f46?w=320&amp;q=80"/>
</div>
<div className="">
<h3 className="text-sm font-semibold text-gray-900">Recovery Check-in</h3>
<p className="text-xs text-gray-500 font-medium">with Dr. Sarah Mitchell</p>
</div>
</div>
<div className="flex text-blue-700 bg-blue-50 border-blue-100 border rounded-md pt-1 pr-2 pb-1 pl-2 space-x-1.5 items-center">
<svg className="lucide lucide-video w-[12px] h-[12px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(29, 78, 216)', width: '12px', height: '12px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect className="" height="12" rx="2" width="14" x="2" y="6"></rect></svg>
<span className="text-[10px] font-semibold">10:00 AM</span>
</div>
</div>
<div className="flex border-gray-100 border-t mt-4 pt-4 items-center justify-between">
<span className="text-xs text-gray-400 font-medium">Starts in 15 mins</span>

<button className="flex cursor-not-allowed text-xs font-semibold text-gray-50 bg-gray-900 border-transparent border rounded-lg px-4 py-2 space-x-2 items-center" disabled="">
<span className="">Join Zoom</span>
</button>
</div>
</div>
</div>
</div>

<div className="px-6 mb-4">
<div className="rounded-2xl bg-gray-50 border border-gray-200 p-5 flex flex-col">
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-900 shadow-sm">
<svg className="lucide lucide-dumbbell w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6.5 6.5 11 11"></path><path d="m21 21-1-1"></path><path d="m3 3 1 1"></path><path d="m18 22 4-4"></path><path d="m2 6 4-4"></path><path d="m3 10 7-7"></path><path d="m14 21 7-7"></path></svg>
</div>
<div className="">
<h3 className="text-sm font-semibold text-gray-900">Lower Body Mobility</h3>
<p className="text-xs text-gray-500">25 min routine</p>
</div>
</div>
<span className="inline-flex items-center px-2 py-1 rounded-md text-[10px] font-medium bg-gray-200 text-gray-600">
                            Not Started
                        </span>
</div>
<button className="hover:bg-gray-800 transition-colors flex gap-2 text-xs font-semibold text-white bg-gray-900 w-full rounded-lg pt-2.5 pb-2.5 gap-x-2 gap-y-2 items-center justify-center">Start Exercise<svg className="lucide lucide-play w-3.5 h-3.5 fill-current" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon className="" points="6 3 20 12 6 21 6 3"></polygon></svg></button>
</div>
</div>

<div className="px-6 mb-8">
<div className="rounded-2xl bg-orange-50/50 border border-orange-100 p-5 flex flex-col">
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-orange-100/50 border border-orange-100 flex items-center justify-center text-orange-600">
<svg className="lucide lucide-clipboard-list w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" ry="1" width="8" x="8" y="2"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="M12 11h4"></path><path d="M12 16h4"></path><path d="M8 11h.01"></path><path d="M8 16h.01"></path></svg>
</div>
<div className="">
<h3 className="text-sm font-semibold text-gray-900">Daily Symptom Check</h3>
<p className="text-xs text-gray-500">Log pain &amp; mood</p>
</div>
</div>
<span className="inline-flex items-center px-2 py-1 rounded-md text-[10px] font-medium bg-orange-100 text-orange-700">
                            Not Submitted
                        </span>
</div>
<button className="w-full py-2.5 bg-white border border-orange-200 text-orange-700 hover:bg-orange-50 text-xs font-semibold rounded-lg transition-colors shadow-sm">
                        Write Survey
                    </button>
</div>
</div>

<div className="px-6">
<h2 className="text-sm font-semibold text-gray-900 tracking-tight mb-3">Schedule</h2>
<div className="bg-white border-gray-200 border rounded-3xl pt-5 pr-5 pb-5 pl-5 shadow-sm" onclick="window.location.href='/calendar-details'" role="button">

<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-semibold text-gray-900" style={{}}>October 2025</h3>
<div className="flex space-x-1">
<button className="p-1 hover:bg-gray-50 rounded-md text-gray-500"><svg className="lucide lucide-chevron-left w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg></button>
<button className="p-1 hover:bg-gray-50 rounded-md text-gray-500"><svg className="lucide lucide-chevron-right w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg></button>
</div>
</div>

<div className="grid grid-cols-7 gap-y-4 mb-4">

<div className="text-center text-[10px] font-medium text-gray-400">M</div>
<div className="text-center text-[10px] font-medium text-gray-400">T</div>
<div className="text-center text-[10px] font-medium text-gray-400">W</div>
<div className="text-center text-[10px] font-medium text-gray-400">T</div>
<div className="text-center text-[10px] font-medium text-gray-400">F</div>
<div className="text-center text-[10px] font-medium text-gray-400">S</div>
<div className="text-center text-[10px] font-medium text-gray-400">S</div>


<div className="h-8 flex items-center justify-center text-xs text-gray-300">26</div>
<div className="h-8 flex items-center justify-center text-xs text-gray-300">27</div>
<div className="h-8 flex items-center justify-center text-xs text-gray-300">28</div>
<div className="h-8 flex items-center justify-center text-xs text-gray-300">29</div>
<div className="h-8 flex items-center justify-center text-xs text-gray-300">30</div>

<div className="h-8 relative flex flex-col items-center justify-start pt-1">
<span className="text-xs text-gray-700 font-medium z-10">1</span>
</div>
<div className="h-8 relative flex flex-col items-center justify-start pt-1">
<span className="text-xs text-gray-700 font-medium z-10">2</span>
</div>


<div className="h-8 relative flex flex-col items-center justify-start pt-1">
<span className="text-xs text-gray-700 font-medium z-10">3</span>
<div className="mt-1 flex gap-0.5">
<div className="w-1 h-1 rounded-full bg-green-500"></div>
<div className="w-1 h-1 rounded-full bg-blue-500"></div>
</div>
</div>
<div className="h-8 relative flex flex-col items-center justify-start pt-1">
<span className="text-xs text-gray-700 font-medium z-10">4</span>
<div className="mt-1 flex gap-0.5">
<div className="w-1 h-1 rounded-full bg-green-500"></div>
</div>
</div>
<div className="h-8 relative flex flex-col items-center justify-start pt-1">
<span className="text-xs text-gray-700 font-medium z-10">5</span>
<div className="mt-1 flex gap-0.5">
<div className="w-1 h-1 rounded-full bg-blue-500"></div>
</div>
</div>
<div className="h-8 relative flex flex-col items-center justify-start pt-1">
<span className="text-xs text-gray-700 font-medium z-10">6</span>

<div className="absolute bottom-0 w-1 h-1 bg-purple-500 rounded-full"></div>
</div>
<div className="h-8 relative flex flex-col items-center justify-start pt-1">
<span className="text-xs text-gray-700 font-medium z-10">7</span>
</div>
<div className="h-8 relative flex flex-col items-center justify-start pt-1">
<span className="text-xs text-gray-700 font-medium z-10">8</span>
</div>
<div className="h-8 relative flex flex-col items-center justify-start pt-1">
<span className="text-xs text-gray-700 font-medium z-10">9</span>
</div>


<div className="h-8 relative flex flex-col items-center justify-start pt-1 col-start-1">
<span className="text-xs text-gray-700 font-medium z-10">24</span>

<div className="absolute top-0 w-7 h-7 bg-gray-900 rounded-full -z-0"></div>
<span className="absolute top-1 text-xs text-white font-medium z-10">24</span>
<div className="absolute -bottom-1 flex gap-0.5">
<div className="w-1 h-1 rounded-full bg-purple-400"></div>
</div>
</div>
<div className="h-8 relative flex flex-col items-center justify-start pt-1">
<span className="text-xs text-gray-700 font-medium z-10">25</span>
</div>
<div className="h-8 relative flex flex-col items-center justify-start pt-1">
<span className="text-xs text-gray-700 font-medium z-10">26</span>
</div>
<div className="h-8 relative flex flex-col items-center justify-start pt-1">
<span className="text-xs text-gray-700 font-medium z-10">27</span>
</div>
<div className="h-8 relative flex flex-col items-center justify-start pt-1">
<span className="text-xs text-gray-700 font-medium z-10">28</span>
</div>
<div className="h-8 relative flex flex-col items-center justify-start pt-1">
<span className="text-xs text-gray-700 font-medium z-10">29</span>
</div>
<div className="h-8 relative flex flex-col items-center justify-start pt-1">
<span className="text-xs text-gray-700 font-medium z-10">30</span>
</div>
</div>

<div className="pt-4 border-t border-gray-100">
<div className="flex items-center justify-between mb-3">
<span className="text-xs font-semibold text-gray-900">Oct 24 Details</span>
</div>
<div className="space-y-2">

<div className="flex items-center justify-between text-xs">
<span className="text-gray-500 flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-gray-200"></div>
                                    Exercise
                                </span>
<span className="font-medium text-gray-400">Not done</span>
</div>

<div className="flex items-center justify-between text-xs">
<span className="text-gray-500 flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-gray-200"></div>
                                    Daily Survey
                                </span>
<span className="font-medium text-gray-400">Not done</span>
</div>

<div className="flex items-center justify-between text-xs">
<span className="text-gray-500 flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                                    Sessions
                                </span>
<span className="font-medium text-gray-900">1 Scheduled</span>
</div>
</div>
</div>

<div className="mt-4 flex items-center gap-3 justify-center">
<div className="flex items-center gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
<span className="text-[10px] text-gray-400">Exercise</span>
</div>
<div className="flex items-center gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
<span className="text-[10px] text-gray-400">Survey</span>
</div>
<div className="flex items-center gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
<span className="text-[10px] text-gray-400">Session</span>
</div>
</div>
</div>
</div>
</div>

<div className="fixed bottom-0 left-0 right-0 w-full max-w-md mx-auto px-6 pb-6 pt-2 glass-nav border-t border-gray-100 z-50">
<nav className="flex justify-between items-center">

<button className="flex flex-col items-center justify-center w-12 gap-1 group">
<div className="p-1.5 rounded-xl bg-gray-900 text-white transition-all">
<svg className="lucide lucide-home w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
</div>
<span className="text-[10px] font-medium text-gray-900">Home</span>
</button>

<button className="flex flex-col group cursor-pointer w-12 gap-x-1 gap-y-1 items-center justify-center" onclick="window.location.href='/exercise';window.location.href='/exercise'" role="button">
<div className="p-1.5 rounded-xl text-gray-400 group-hover:bg-gray-50 transition-all">
<svg className="lucide lucide-dumbbell w-[20px] h-[20px]" data-icon-replaced="true" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(156, 163, 175)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path className="" d="M14.4 14.4 9.6 9.6"></path><path className="" d="M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z"></path><path d="m21.5 21.5-1.4-1.4"></path><path d="M3.9 3.9 2.5 2.5"></path><path d="M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z"></path></svg>
</div>
<span className="text-[10px] group-hover:text-gray-600 font-medium text-gray-400">Exercise</span>
</button>

<button className="flex flex-col group cursor-pointer w-12 gap-x-1 gap-y-1 items-center justify-center" onclick="window.location.href='/survey'" role="button">
<div className="group-hover:bg-gray-50 transition-all text-gray-400 rounded-xl pt-1.5 pr-1.5 pb-1.5 pl-1.5">
<svg className="lucide lucide-clipboard-check w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" ry="1" width="8" x="8" y="2"></rect><path className="" d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="m9 14 2 2 4-4"></path></svg>
</div>
<span className="text-[10px] font-medium text-gray-400 group-hover:text-gray-600">Survey</span>
</button>

<button className="flex flex-col group cursor-pointer w-12 relative gap-x-1 gap-y-1 items-center justify-center" onclick="window.location.href='';window.location.href='';window.location.href='/chat-list'" role="button">
<div className="p-1.5 rounded-xl text-gray-400 group-hover:bg-gray-50 transition-all">
<svg className="lucide lucide-message-circle w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
</div>
<span className="text-[10px] font-medium text-gray-400 group-hover:text-gray-600">Chat</span>

<span className="absolute top-0 right-1 w-2.5 h-2.5 bg-blue-500 rounded-full border-2 border-white"></span>
</button>
</nav>
</div>
</div>


    </>
  );
}
