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



        function switchRole(role) {
            const patientView = document.getElementById('patient-view');
            const coachView = document.getElementById('coach-view');
            const patientNav = document.getElementById('patient-nav');
            const coachNav = document.getElementById('coach-nav');
            const btnPatient = document.getElementById('btn-patient');
            const btnCoach = document.getElementById('btn-coach');

            if (role === 'patient') {
                patientView.classList.remove('hidden');
                coachView.classList.add('hidden');
                patientNav.style.display = 'flex';
                coachNav.style.display = 'none'; // Using style directly for flex/none toggle simplicity
                
                // Button Styles
                btnPatient.classList.remove('text-gray-500', 'hover:text-gray-900');
                btnPatient.classList.add('bg-white', 'text-gray-900', 'shadow-sm');
                
                btnCoach.classList.add('text-gray-500', 'hover:text-gray-900');
                btnCoach.classList.remove('bg-white', 'text-gray-900', 'shadow-sm');
            } else {
                patientView.classList.add('hidden');
                coachView.classList.remove('hidden');
                patientNav.style.display = 'none';
                coachNav.style.display = 'flex';
                
                // Button Styles
                btnCoach.classList.remove('text-gray-500', 'hover:text-gray-900');
                btnCoach.classList.add('bg-white', 'text-gray-900', 'shadow-sm');
                
                btnPatient.classList.add('text-gray-500', 'hover:text-gray-900');
                btnPatient.classList.remove('bg-white', 'text-gray-900', 'shadow-sm');
            }
        }
    
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
      

<div className="w-full max-w-md bg-white min-h-screen shadow-[0_0_40px_rgba(0,0,0,0.05)] relative flex flex-col overflow-hidden border-x border-gray-100">

<div className="absolute top-0 left-0 right-0 z-50 p-2 flex justify-center bg-white/90 backdrop-blur-md border-b border-gray-100">
<div className="bg-gray-100 p-1 rounded-lg flex space-x-1">
<button className="px-4 py-1.5 text-xs font-medium rounded-md shadow-sm bg-white text-gray-900 transition-all" id="btn-patient" onclick="switchRole('patient')">Patient View</button>
<button className="px-4 py-1.5 text-xs font-medium rounded-md text-gray-500 hover:text-gray-900 transition-all" id="btn-coach" onclick="switchRole('coach')">Coach View</button>
</div>
</div>

<main className="flex-1 flex flex-col pt-16 pb-24 px-6 space-y-8 fade-in h-full overflow-y-auto no-scrollbar" id="patient-view">

<header className="flex justify-between items-center">
<div>
<p className="text-xs text-gray-500 font-medium mb-1">Thursday, Oct 24</p>
<h1 className="text-xl font-semibold tracking-tight text-gray-900">Hello, Alex</h1>
</div>
<div className="h-10 w-10 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-600 relative cursor-pointer hover:bg-gray-50 transition-colors">
<iconify-icon icon="lucide:bell" strokeWidth="1.5" width="18"></iconify-icon>
<span className="absolute top-2 right-2.5 w-1.5 h-1.5 bg-red-500 rounded-full border border-white"></span>
</div>
</header>

<section className="space-y-3">
<div className="flex items-center justify-between">
<h2 className="text-sm font-semibold tracking-tight text-gray-900">Up Next</h2>
</div>
<div className="p-5 rounded-2xl bg-gray-900 text-white shadow-lg relative overflow-hidden group">

<div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-gray-800 rounded-full blur-2xl opacity-50"></div>
<div className="relative z-10 flex flex-col h-full justify-between space-y-6">
<div className="flex justify-between items-start">
<div>
<div className="inline-flex items-center space-x-1.5 px-2 py-1 rounded-md bg-gray-800 border border-gray-700 mb-3">
<iconify-icon className="text-blue-400" icon="lucide:video" width="12"></iconify-icon>
<span className="text-[10px] font-medium text-gray-300 uppercase tracking-wide">Zoom Session</span>
</div>
<h3 className="text-lg font-medium tracking-tight">Coaching with Dr. Smith</h3>
<p className="text-sm text-gray-400 mt-0.5">Today, 10:00 AM - 10:30 AM</p>
</div>
</div>

<div className="pt-2">

<button className="w-full flex items-center justify-center space-x-2 bg-white text-gray-950 py-2.5 rounded-xl text-sm font-medium hover:bg-gray-100 transition-colors cursor-pointer">
<span>Join Meeting</span>
<iconify-icon icon="lucide:arrow-up-right" width="16"></iconify-icon>
</button>
<p className="text-[10px] text-gray-500 text-center mt-2">Link becomes active 10 mins before start</p>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-2 gap-4">

<div className="p-4 rounded-2xl border border-gray-200 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:border-gray-300 transition-all flex flex-col justify-between h-40 group cursor-pointer">
<div className="flex justify-between items-start">
<div className="w-8 h-8 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600">
<iconify-icon icon="lucide:clipboard-list" width="16"></iconify-icon>
</div>
<span className="flex h-2 w-2 rounded-full bg-orange-500"></span>
</div>
<div>
<p className="text-xs text-gray-500 font-medium mb-1">Daily Survey</p>
<h3 className="text-sm font-semibold tracking-tight text-gray-900">Not Submitted</h3>
<div className="mt-3 flex items-center text-xs font-medium text-gray-900 group-hover:underline">
                            Write Survey <iconify-icon className="ml-1" icon="lucide:chevron-right" width="12"></iconify-icon>
</div>
</div>
</div>

<div className="p-4 rounded-2xl border border-gray-200 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:border-gray-300 transition-all flex flex-col justify-between h-40 group cursor-pointer">
<div className="flex justify-between items-start">
<div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
<iconify-icon icon="lucide:activity" width="16"></iconify-icon>
</div>

<span className="flex h-2 w-2 rounded-full bg-gray-300"></span>
</div>
<div>
<p className="text-xs text-gray-500 font-medium mb-1">Plan: Lower Back</p>
<h3 className="text-sm font-semibold tracking-tight text-gray-900">Start Exercise</h3>
<div className="mt-3 flex items-center text-xs font-medium text-gray-900 group-hover:underline">
                            0/3 Completed <iconify-icon className="ml-1" icon="lucide:chevron-right" width="12"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="space-y-3">
<div className="flex items-center justify-between">
<h2 className="text-sm font-semibold tracking-tight text-gray-900">October 2023</h2>
<button className="text-xs text-gray-500 hover:text-gray-900">View All</button>
</div>
<div className="bg-white rounded-2xl border border-gray-200 p-4 shadow-sm">
<div className="grid grid-cols-7 gap-1 text-center mb-2">
<span className="text-[10px] text-gray-400 font-medium">M</span>
<span className="text-[10px] text-gray-400 font-medium">T</span>
<span className="text-[10px] text-gray-400 font-medium">W</span>
<span className="text-[10px] text-gray-400 font-medium">T</span>
<span className="text-[10px] text-gray-400 font-medium">F</span>
<span className="text-[10px] text-gray-400 font-medium">S</span>
<span className="text-[10px] text-gray-400 font-medium">S</span>
</div>

<div className="grid grid-cols-7 gap-1 text-center">

<div className="flex flex-col items-center gap-1 py-1">
<span className="text-xs text-gray-400">21</span>
<div className="w-1 h-1 rounded-full bg-green-500"></div>
</div>

<div className="flex flex-col items-center gap-1 py-1">
<span className="text-xs text-gray-400">22</span>
<div className="flex gap-0.5">
<div className="w-1 h-1 rounded-full bg-green-500"></div>
<div className="w-1 h-1 rounded-full bg-blue-500"></div>
</div>
</div>

<div className="flex flex-col items-center gap-1 py-1">
<span className="text-xs text-gray-400">23</span>
<div className="w-1 h-1 rounded-full bg-green-500"></div>
</div>

<div className="flex flex-col items-center gap-1 py-1 relative">
<span className="text-xs font-semibold text-white bg-gray-900 w-6 h-6 flex items-center justify-center rounded-full shadow-md">24</span>
<div className="flex gap-0.5 mt-0.5">

<div className="w-1 h-1 rounded-full bg-gray-200"></div> 
<div className="w-1 h-1 rounded-full bg-orange-400"></div> 
</div>
</div>

<div className="flex flex-col items-center gap-1 py-1">
<span className="text-xs text-gray-900">25</span>
</div>
<div className="flex flex-col items-center gap-1 py-1">
<span className="text-xs text-gray-900">26</span>
</div>
<div className="flex flex-col items-center gap-1 py-1">
<span className="text-xs text-gray-900">27</span>
</div>
</div>
</div>
</section>
</main>

<main className="hidden flex-1 flex flex-col pt-16 pb-24 px-6 space-y-8 fade-in h-full overflow-y-auto no-scrollbar" id="coach-view">

<header className="flex justify-between items-center">
<div>
<p className="text-xs text-gray-500 font-medium mb-1">Coach Dashboard</p>
<h1 className="text-xl font-semibold tracking-tight text-gray-900">Dr. Sarah Smith</h1>
</div>
<button className="h-9 px-3 rounded-lg bg-gray-900 text-white text-xs font-medium flex items-center space-x-1 hover:bg-gray-800 transition-colors shadow-sm">
<iconify-icon icon="lucide:plus" width="14"></iconify-icon>
<span>Session</span>
</button>
</header>

<section className="grid grid-cols-2 gap-4">
<div className="p-4 bg-white border border-gray-200 rounded-xl shadow-sm">
<p className="text-xs text-gray-500 font-medium">Today's Sessions</p>
<div className="mt-2 flex items-baseline space-x-1">
<span className="text-2xl font-semibold tracking-tight text-gray-900">4</span>
<span className="text-xs text-gray-400">scheduled</span>
</div>
</div>
<div className="p-4 bg-white border border-gray-200 rounded-xl shadow-sm">
<p className="text-xs text-gray-500 font-medium">Pending Review</p>
<div className="mt-2 flex items-baseline space-x-1">
<span className="text-2xl font-semibold tracking-tight text-gray-900">2</span>
<span className="text-xs text-red-500 font-medium">alerts</span>
</div>
</div>
</section>

<section className="space-y-4">
<div className="flex items-center justify-between">
<h2 className="text-sm font-semibold tracking-tight text-gray-900">Today's Schedule</h2>
<button className="text-xs text-gray-500 hover:text-gray-900 flex items-center">
                        Calendar <iconify-icon className="ml-1" icon="lucide:arrow-right" width="12"></iconify-icon>
</button>
</div>
<div className="space-y-3">

<div className="group flex flex-col p-4 bg-white border border-gray-200 rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.02)] hover:border-gray-300 transition-all cursor-pointer">
<div className="flex justify-between items-start mb-3">
<div className="flex items-center space-x-3">
<div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-xs font-semibold text-gray-600">JD</div>
<div>
<h3 className="text-sm font-medium text-gray-900">John Doe</h3>
<p className="text-xs text-gray-500">09:00 AM - 09:30 AM</p>
</div>
</div>
<span className="inline-flex items-center px-2 py-1 rounded-md bg-green-50 text-green-700 text-[10px] font-medium border border-green-100">
                                Completed
                            </span>
</div>
</div>

<div className="group flex flex-col p-4 bg-white border-l-4 border-l-blue-500 border-y border-r border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer relative overflow-hidden">
<div className="flex justify-between items-start mb-3">
<div className="flex items-center space-x-3">
<div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center text-xs font-semibold text-blue-600">AL</div>
<div>
<h3 className="text-sm font-medium text-gray-900">Alex Lee</h3>
<p className="text-xs text-blue-600 font-medium">10:00 AM - 10:30 AM</p>
</div>
</div>
<span className="inline-flex items-center px-2 py-1 rounded-md bg-blue-50 text-blue-700 text-[10px] font-medium border border-blue-100">
                                Upcoming
                            </span>
</div>
<div className="mt-1 pt-3 border-t border-dashed border-gray-200 flex justify-between items-center">
<span className="text-[10px] text-gray-400 font-mono truncate max-w-[150px]">zoom.us/j/9283...</span>
<button className="text-xs font-medium text-gray-900 hover:underline">Join</button>
</div>
</div>

<div className="group flex flex-col p-4 bg-white border border-gray-200 rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.02)] hover:border-gray-300 transition-all cursor-pointer opacity-80 hover:opacity-100">
<div className="flex justify-between items-start mb-2">
<div className="flex items-center space-x-3">
<div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-xs font-semibold text-gray-600">MK</div>
<div>
<h3 className="text-sm font-medium text-gray-900">Maria K.</h3>
<p className="text-xs text-gray-500">02:00 PM - 02:30 PM</p>
</div>
</div>
<span className="inline-flex items-center px-2 py-1 rounded-md bg-gray-50 text-gray-500 text-[10px] font-medium border border-gray-100">
                                Scheduled
                            </span>
</div>
</div>
</div>
</section>

<section className="space-y-3">
<h2 className="text-sm font-semibold tracking-tight text-gray-900">Needs Attention</h2>
<div className="p-3 rounded-lg border border-red-100 bg-red-50/50 flex items-start space-x-3">
<iconify-icon className="text-red-500 mt-0.5 shrink-0" icon="lucide:alert-circle" width="16"></iconify-icon>
<div>
<p className="text-xs font-medium text-gray-900">John Doe missed exercise 3 days in a row.</p>
<button className="text-[10px] font-semibold text-red-600 mt-1 hover:underline">Send Reminder</button>
</div>
</div>
</section>
</main>

<nav className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-xl border-t border-gray-200 px-6 py-3 pb-6 flex justify-between items-center z-40">

<div className="flex justify-between w-full" id="patient-nav">
<button className="flex flex-col items-center gap-1 text-gray-900">
<iconify-icon icon="lucide:home" strokeWidth="2" width="20"></iconify-icon>
<span className="text-[10px] font-medium">Home</span>
</button>
<button className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600 transition-colors">
<iconify-icon icon="lucide:dumbbell" width="20"></iconify-icon>
<span className="text-[10px] font-medium">Exercise</span>
</button>
<button className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600 transition-colors">
<iconify-icon icon="lucide:clipboard-check" width="20"></iconify-icon>
<span className="text-[10px] font-medium">Survey</span>
</button>
<button className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600 transition-colors relative">
<iconify-icon icon="lucide:message-square" width="20"></iconify-icon>
<span className="text-[10px] font-medium">Chat</span>
<span className="absolute top-0 right-1 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
</button>
</div>

<div className="hidden justify-between w-full" id="coach-nav">
<button className="flex flex-col items-center gap-1 text-gray-900">
<iconify-icon icon="lucide:layout-dashboard" strokeWidth="2" width="20"></iconify-icon>
<span className="text-[10px] font-medium">Home</span>
</button>
<button className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600 transition-colors">
<iconify-icon icon="lucide:calendar" width="20"></iconify-icon>
<span className="text-[10px] font-medium">Calendar</span>
</button>
<button className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600 transition-colors">
<iconify-icon icon="lucide:users" width="20"></iconify-icon>
<span className="text-[10px] font-medium">Users</span>
</button>
<button className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600 transition-colors">
<iconify-icon icon="lucide:message-square" width="20"></iconify-icon>
<span className="text-[10px] font-medium">Chat</span>
</button>
</div>
</nav>
</div>


    </>
  );
}
