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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // DOM Elements
        const menuBtn = document.getElementById('menu-btn');
        const dropdown = document.getElementById('dropdown');
        const viewAuto = document.getElementById('view-auto');
        const viewAlly = document.getElementById('view-ally');
        const checkAuto = document.getElementById('check-auto');
        const checkAlly = document.getElementById('check-ally');

        // Initial State
        let currentView = 'auto';
        checkAuto.classList.remove('hidden');

        // Toggle Dropdown
        menuBtn.addEventListener('click', () => {
            dropdown.classList.toggle('hidden');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!menuBtn.contains(e.target) && !dropdown.contains(e.target)) {
                dropdown.classList.add('hidden');
            }
        });

        // Switch Views Function
        function switchView(view) {
            currentView = view;
            dropdown.classList.add('hidden');
            
            if (view === 'auto') {
                viewAuto.classList.remove('hidden');
                viewAuto.classList.add('flex');
                
                viewAlly.classList.add('hidden');
                viewAlly.classList.remove('flex');
                
                checkAuto.classList.remove('hidden');
                checkAlly.classList.add('hidden');
            } else {
                viewAuto.classList.add('hidden');
                viewAuto.classList.remove('flex');
                
                viewAlly.classList.remove('hidden');
                viewAlly.classList.add('flex');
                
                checkAuto.classList.add('hidden');
                checkAlly.classList.remove('hidden');
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
      
<div className="w-full max-w-md bg-[#16171c] sm:my-8 sm:rounded-[40px] shadow-2xl flex flex-col p-6 sm:p-8 relative">

<header className="flex justify-between items-center pt-2 mb-8 relative z-50">
<div className="relative">

<button className="text-gray-300 hover:text-white transition-colors flex items-center justify-center" id="menu-btn">
<iconify-icon icon="solar:widget-linear" style={{fontSize: '1.5rem', strokeWidth: '1.5'}}></iconify-icon>
</button>

<div className="hidden absolute top-full left-0 mt-3 w-48 bg-[#212228] border border-[#2A2B32] rounded-2xl shadow-xl overflow-hidden py-1 origin-top-left transition-all" id="dropdown">
<button className="w-full text-left px-4 py-2.5 text-sm font-medium text-white hover:bg-white/5 transition-colors flex items-center justify-between" onclick="switchView('auto')">
<span>Auto (Tasks)</span>
<iconify-icon className="text-blue-400 text-lg" icon="solar:check-circle-linear" id="check-auto" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="w-full text-left px-4 py-2.5 text-sm font-medium text-white hover:bg-white/5 transition-colors flex items-center justify-between" onclick="switchView('ally')">
<span>Ally (Pet)</span>
<iconify-icon className="text-blue-400 text-lg hidden" icon="solar:check-circle-linear" id="check-ally" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
<button className="text-gray-300 hover:text-white transition-colors flex items-center justify-center">
<iconify-icon icon="solar:bell-linear" style={{fontSize: '1.5rem', strokeWidth: '1.5'}}></iconify-icon>
</button>
</header>

<div className="flex flex-col space-y-8 animate-fade-in" id="view-auto">

<div className="space-y-1">
<p className="text-lg text-gray-400 font-medium">Hi, Jason</p>
<h1 className="text-3xl font-semibold text-white tracking-tight">Stay connected today</h1>
</div>

<div className="relative flex items-center w-full h-14 rounded-2xl bg-[#212228]">
<iconify-icon className="absolute right-5 text-gray-500 pointer-events-none" icon="solar:magnifer-linear" style={{fontSize: '1.5rem', strokeWidth: '1.5'}}></iconify-icon><input className="placeholder-gray-500 outline-none text-base text-gray-200 bg-transparent w-full h-full rounded-2xl pr-5 pl-5" placeholder="Search task" type="text"/>
</div>

<div className="bg-[#212228] rounded-[28px] p-6 flex justify-between items-center shadow-lg shadow-black/10">
<div className="flex flex-col">
<h2 className="text-xl font-semibold tracking-tight text-white mb-1">Task Progress</h2>
<p className="text-base text-gray-400 font-medium">30/40 task done</p>
<span className="bg-blue-600/20 text-blue-400 px-4 py-1.5 rounded-full text-sm font-medium w-fit mt-4">
                        March 22
                    </span>
</div>
<div className="relative w-20 h-20 flex items-center justify-center">
<svg className="w-full h-full transform -rotate-90">
<circle className="text-gray-700/50" cx="40" cy="40" fill="transparent" r="34" stroke="currentColor" strokeWidth="7"></circle>
<circle className="text-[#2F9CFC]" cx="40" cy="40" fill="transparent" r="34" stroke="currentColor" stroke-dasharray="213" stroke-dashoffset="43" strokeLinecap="round" strokeWidth="7"></circle>
</svg>
<div className="absolute inset-0 flex items-center justify-center">
<span className="text-xl font-semibold text-white">80%</span>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4">

<div className="col-span-1 row-span-2 bg-[#7C5FFA] rounded-[28px] p-5 pb-6 flex flex-col shadow-lg shadow-purple-900/20">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-5 backdrop-blur-sm">
<iconify-icon className="text-white" icon="solar:pen-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-white tracking-tight mb-1">Parking</h3>
<p className="text-base font-medium text-white/70 leading-snug mb-8">Task management mobile app</p>
<div className="mt-auto flex flex-col">
<div className="flex -space-x-2 mb-5">
<img alt="Avatar" className="w-8 h-8 rounded-full border-2 border-[#7C5FFA] object-cover relative z-30" src="https://i.pravatar.cc/100?img=11"/>
<img alt="Avatar" className="w-8 h-8 rounded-full border-2 border-[#7C5FFA] object-cover relative z-20" src="https://i.pravatar.cc/100?img=12"/>
<img alt="Avatar" className="w-8 h-8 rounded-full border-2 border-[#7C5FFA] object-cover relative z-10" src="https://i.pravatar.cc/100?img=13"/>
<div className="w-8 h-8 rounded-full border-2 border-[#7C5FFA] bg-white flex items-center justify-center relative z-0">
<span className="text-sm font-semibold text-[#7C5FFA]">5+</span>
</div>
</div>
<div className="w-full h-1 bg-white/20 rounded-full mb-2 overflow-hidden">
<div className="h-full bg-[#00D4FF] w-[70%] rounded-full"></div>
</div>
<div className="flex justify-between items-center text-sm font-medium text-white/90">
<span>Progress</span>
<span>70%</span>
</div>
<p className="text-sm font-medium text-white/60 mt-6">Due: 24 Mar 2022</p>
</div>
</div>

<div className="col-span-1 bg-[#2F9CFC] rounded-[28px] p-5 flex flex-col shadow-lg shadow-blue-900/20">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-4 backdrop-blur-sm">
<iconify-icon className="text-white" icon="solar:server-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-4">My Car</h3>
<div className="mt-auto flex flex-col">
<div className="flex -space-x-2 mb-4">
<img alt="Avatar" className="w-8 h-8 rounded-full border-2 border-[#2F9CFC] object-cover relative z-20" src="https://i.pravatar.cc/100?img=14"/>
<img alt="Avatar" className="w-8 h-8 rounded-full border-2 border-[#2F9CFC] object-cover relative z-10" src="https://i.pravatar.cc/100?img=15"/>
</div>
<div className="w-full h-1 bg-white/20 rounded-full mb-2 overflow-hidden">
<div className="h-full bg-[#00E08F] w-[40%] rounded-full"></div>
</div>
<div className="flex justify-between items-center text-sm font-medium text-white/90">
<span className="">Progress</span>
<span className="">40%</span>
</div>
</div>
</div>

<div className="col-span-1 bg-[#1DD182] rounded-[28px] p-5 flex flex-col shadow-lg shadow-green-900/20">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-6 backdrop-blur-sm">
<iconify-icon className="text-white" icon="solar:refresh-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="mt-auto">
<h3 className="text-xl font-semibold text-white tracking-tight mb-1">Utilities</h3>
<p className="text-base font-medium text-white/80 leading-snug">Revision home page</p>
</div>
</div>
</div>

<div className="space-y-4">
<h2 className="text-2xl font-semibold text-white tracking-tight">AeroTags</h2>
<div className="bg-[#212228] rounded-[28px] p-5 flex items-center gap-4 shadow-lg shadow-black/10">
<div className="relative w-14 h-14 flex items-center justify-center flex-shrink-0">
<svg className="w-full h-full transform -rotate-90">
<circle className="text-gray-700/50" cx="28" cy="28" fill="transparent" r="24" stroke="currentColor" strokeWidth="5"></circle>
<circle className="text-[#2F9CFC]" cx="28" cy="28" fill="transparent" r="24" stroke="currentColor" stroke-dasharray="150" stroke-dashoffset="120" strokeLinecap="round" strokeWidth="5"></circle>
</svg>
<div className="absolute inset-0 flex items-center justify-center">
<span className="text-sm font-semibold text-white">20%</span>
</div>
</div>
<div className="flex-grow min-w-0">
<h3 className="text-lg font-semibold text-white truncate mb-0.5">Chat application</h3>
<p className="text-base text-gray-400 font-medium truncate">Make visual and User flow</p>
</div>
<div className="text-base text-gray-500 font-medium whitespace-nowrap pl-2">
                        1 day left
                    </div>
</div>
</div>
</div>

<div className="hidden flex-col space-y-8 animate-fade-in" id="view-ally">

<div className="space-y-1">
<p className="text-lg text-gray-400 font-medium">Hi, Jason</p>
<h1 className="text-3xl font-semibold tracking-tight text-white">Ally's Routine</h1>
</div>

<div className="relative flex items-center w-full h-14 rounded-2xl bg-[#212228]">
<input className="w-full h-full bg-transparent px-5 text-base text-gray-200 placeholder-gray-500 outline-none rounded-2xl" placeholder="Search activity" type="text"/>
<iconify-icon className="absolute right-5 text-gray-500 pointer-events-none" icon="solar:magnifer-linear" style={{fontSize: '1.5rem', strokeWidth: '1.5'}}></iconify-icon>
</div>

<div className="bg-[#212228] rounded-[28px] p-6 flex justify-between items-center shadow-lg shadow-black/10">
<div className="flex flex-col">
<h2 className="text-xl font-semibold tracking-tight text-white mb-1">Daily Activity</h2>
<p className="text-base text-gray-400 font-medium">3/5 activities done</p>
<span className="bg-blue-600/20 text-blue-400 px-4 py-1.5 rounded-full text-sm font-medium w-fit mt-4">
                        Today
                    </span>
</div>
<div className="relative w-20 h-20 flex items-center justify-center">
<svg className="w-full h-full transform -rotate-90">
<circle className="text-gray-700/50" cx="40" cy="40" fill="transparent" r="34" stroke="currentColor" strokeWidth="7"></circle>

<circle className="text-[#2F9CFC]" cx="40" cy="40" fill="transparent" r="34" stroke="currentColor" stroke-dasharray="213" stroke-dashoffset="85" strokeLinecap="round" strokeWidth="7"></circle>
</svg>
<div className="absolute inset-0 flex items-center justify-center">
<span className="text-xl font-semibold text-white">60%</span>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4">

<div className="col-span-1 row-span-2 bg-[#7C5FFA] rounded-[28px] p-5 pb-6 flex flex-col shadow-lg shadow-purple-900/20">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-5 backdrop-blur-sm">
<iconify-icon className="text-white" icon="solar:routing-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-1">Morning Walk</h3>
<p className="text-base font-medium text-white/70 leading-snug mb-8">Local park trail &amp; fetch</p>
<div className="mt-auto flex flex-col">
<div className="flex -space-x-2 mb-5">
<img alt="Pet Avatar" className="w-8 h-8 rounded-full border-2 border-[#7C5FFA] object-cover relative z-30" src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=100&amp;h=100&amp;fit=crop&amp;q=80"/>
<img alt="Pet Avatar" className="w-8 h-8 rounded-full border-2 border-[#7C5FFA] object-cover relative z-20" src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=100&amp;h=100&amp;fit=crop&amp;q=80"/>
<div className="w-8 h-8 rounded-full border-2 border-[#7C5FFA] bg-white flex items-center justify-center relative z-0">
<span className="text-sm font-semibold text-[#7C5FFA]">1h</span>
</div>
</div>
<div className="w-full h-1 bg-white/20 rounded-full mb-2 overflow-hidden">
<div className="h-full bg-[#00D4FF] w-[50%] rounded-full"></div>
</div>
<div className="flex justify-between items-center text-sm font-medium text-white/90">
<span>Distance</span>
<span>1.5mi</span>
</div>
<p className="text-sm font-medium text-white/60 mt-6">Goal: 3.0mi</p>
</div>
</div>

<div className="col-span-1 bg-[#2F9CFC] rounded-[28px] p-5 flex flex-col shadow-lg shadow-blue-900/20">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-4 backdrop-blur-sm">
<iconify-icon className="text-white" icon="solar:bone-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-4">Feeding Time</h3>
<div className="mt-auto flex flex-col">
<div className="flex -space-x-2 mb-4">
<div className="w-8 h-8 rounded-full border-2 border-[#2F9CFC] bg-white/20 flex items-center justify-center relative z-20 backdrop-blur-sm">
<span className="text-xs font-semibold text-white">AM</span>
</div>
<div className="w-8 h-8 rounded-full border-2 border-[#2F9CFC] bg-[#00E08F] flex items-center justify-center relative z-10">
<iconify-icon className="text-white text-sm" icon="solar:check-linear"></iconify-icon>
</div>
</div>
<div className="w-full h-1 bg-white/20 rounded-full mb-2 overflow-hidden">
<div className="h-full bg-[#00E08F] w-[100%] rounded-full"></div>
</div>
<div className="flex justify-between items-center text-sm font-medium text-white/90">
<span>Status</span>
<span>Done</span>
</div>
</div>
</div>

<div className="col-span-1 bg-[#1DD182] rounded-[28px] p-5 flex flex-col shadow-lg shadow-green-900/20">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-6 backdrop-blur-sm">
<iconify-icon className="text-white" icon="solar:bath-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="mt-auto">
<h3 className="text-xl font-semibold tracking-tight text-white mb-1">Grooming</h3>
<p className="text-base font-medium text-white/80 leading-snug">Brush coat &amp; teeth</p>
</div>
</div>
</div>

<div className="space-y-4">
<h2 className="text-2xl font-semibold tracking-tight text-white">Upcoming</h2>
<div className="bg-[#212228] rounded-[28px] p-5 flex items-center gap-4 shadow-lg shadow-black/10">
<div className="relative w-14 h-14 flex items-center justify-center flex-shrink-0">
<svg className="w-full h-full transform -rotate-90">
<circle className="text-gray-700/50" cx="28" cy="28" fill="transparent" r="24" stroke="currentColor" strokeWidth="5"></circle>

<circle className="text-[#2F9CFC]" cx="28" cy="28" fill="transparent" r="24" stroke="currentColor" stroke-dasharray="150" stroke-dashoffset="135" strokeLinecap="round" strokeWidth="5"></circle>
</svg>
<div className="absolute inset-0 flex items-center justify-center">
<span className="text-sm font-semibold text-white">10%</span>
</div>
</div>
<div className="flex-grow min-w-0">
<h3 className="text-lg font-semibold text-white truncate mb-0.5">Vet Checkup</h3>
<p className="text-base text-gray-400 font-medium truncate">Annual vaccinations</p>
</div>
<div className="text-base text-gray-500 font-medium whitespace-nowrap pl-2">
                        2 days
                    </div>
</div>
</div>
</div>
</div>


    </>
  );
}
