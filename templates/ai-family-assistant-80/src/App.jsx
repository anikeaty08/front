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



      function toggleMainViews() {
        const dadView = document.getElementById('view-dad');
        const wendyView = document.getElementById('view-wendy-container');

        if (dadView.classList.contains('hidden')) {
          dadView.classList.remove('hidden');
          wendyView.classList.add('hidden');
        } else {
          dadView.classList.add('hidden');
          wendyView.classList.remove('hidden');
        }
      }

      function confirmPickup() {
        const btn = document.getElementById('dad-confirm-btn');
        const btnText = document.getElementById('btn-text');
        const iconContainer = document.getElementById('btn-icon-container');
        const arrow = document.getElementById('btn-arrow');
        const gradient = btn.querySelector('.absolute.inset-0');

        if(btn.dataset.confirmed) return;
        btn.dataset.confirmed = "true";

        // Loading state
        btnText.innerText = "Verifying...";
        
        setTimeout(() => {
          // New "White & Blue" Style State
          btn.className = "w-full h-16 bg-white rounded-2xl flex items-center px-2 pl-2 relative overflow-hidden transition-all duration-300 shadow-lg shadow-blue-500/10 border-2 border-blue-600 cursor-default";
          
          // Hide hover gradient
          if(gradient) gradient.style.display = 'none';

          // Icon styling (Black circle check)
          iconContainer.className = "h-12 w-12 bg-transparent rounded-xl flex items-center justify-center text-black animate-scale-check";
          
          // Text styling
          btnText.innerText = "Picked Up!";
          btnText.className = "text-gray-900 font-bold text-lg tracking-tight absolute left-1/2 -translate-x-1/2";

          // Remove arrow
          arrow.style.display = 'none';
        }, 800);
      }

      // Auto trigger hover + click sequence after 5 seconds
      setTimeout(() => {
        const btn = document.getElementById('dad-confirm-btn');
        if (btn && !btn.dataset.confirmed) {
           // Step 1: Trigger Hover Effect
           btn.classList.add('simulate-hover');
           
           // Step 2: Trigger Click after short delay
           setTimeout(() => {
             confirmPickup();
           }, 1000);
        }
      }, 5000);
    
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
      

<div className="absolute top-0 w-full max-w-md flex justify-between px-6 pt-3 text-white text-sm font-medium z-30 pointer-events-none">
<span className="pointer-events-auto cursor-pointer" onclick="toggleMainViews()">
        17:00
      </span>
<div className="flex gap-1.5 items-center">
<iconify-icon height="16" icon="solar:signal-stream-linear" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:wi-fi-router-linear" width="16"></iconify-icon>
<div className="w-6 h-3 border border-white rounded-[4px] relative">
<div className="absolute inset-0.5 bg-white rounded-[2px]"></div>
</div>
</div>
</div>

<div className="w-full max-w-md bg-white mt-12 h-full rounded-t-[2.5rem] flex flex-col relative overflow-hidden shadow-2xl">

<div className="absolute top-0 left-0 w-full flex justify-center pt-3 pb-4 z-20 pointer-events-none">
<div className="w-10 h-1.5 bg-gray-200/80 backdrop-blur rounded-full shadow-sm"></div>
</div>

<div className="flex flex-col h-full relative w-full animate-fade-in-up" id="view-dad">

<div className="relative w-full h-[60%] bg-gray-50 overflow-hidden shrink-0 z-0">
<div className="absolute inset-0 bg-[#eef2f6] opacity-100" style={{backgroundImage: 'radial-gradient(#cbd5e1 1.5px, transparent 1.5px)', backgroundSize: '24px 24px'}}></div>

<svg className="absolute inset-0 w-full h-full pointer-events-none" preserveaspectratio="none" viewbox="0 0 400 600">

<path d="M -50 400 L 450 300" fill="none" stroke="white" strokeWidth="20"></path>
<path d="M 200 600 L 200 -50" fill="none" stroke="white" strokeWidth="18"></path>
<path d="M 100 600 Q 150 400 350 200" fill="none" stroke="#e2e8f0" strokeWidth="8"></path>

<path className="opacity-40" d="M 200 600 L 200 350 Q 200 320 230 315 L 280 305" stroke="#3b82f6" stroke-dasharray="10 10" strokeLinecap="round" strokeWidth="6"></path>
<circle cx="200" cy="550" fill="#3b82f6" fillOpacity="0.2" r="8"></circle>
</svg>

<div className="absolute top-[45%] left-[65%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10">
<div className="bg-white px-3 py-1.5 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.1)] border border-gray-100 mb-2 flex items-center gap-2 animate-bounce" style={{animationDuration: '3s'}}>
<div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
<span className="text-xs font-bold text-gray-800 whitespace-nowrap">
                Tommy's School
              </span>
</div>
<div className="relative">
<div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center shadow-xl border-[3px] border-white text-white z-20 relative">
<iconify-icon icon="solar:backpack-linear" width="24"></iconify-icon>
</div>
<div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-1.5 bg-black/20 blur-sm rounded-full"></div>
</div>
</div>
</div>

<div className="absolute bottom-0 w-full bg-white rounded-t-[2.5rem] p-8 pb-10 shadow-[0_-10px_60px_rgba(0,0,0,0.1)] z-10 border-t border-gray-50 flex flex-col h-[45%]">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="relative">
<img alt="Wendy" className="w-10 h-10 rounded-full object-cover ring-2 ring-white shadow-sm" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=100&amp;h=100&amp;q=80"/>
<div className="absolute -bottom-0.5 -right-0.5 bg-blue-500 rounded-full p-0.5 border-2 border-white flex items-center justify-center">
<iconify-icon className="text-white" height="10" icon="solar:chat-round-line-linear" width="10"></iconify-icon>
</div>
</div>
<div>
<p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">
                  Request from Wendy
                </p>
<p className="text-sm font-medium text-gray-900">Today, 5:00 PM</p>
</div>
</div>
<div className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold">
              High Priority
            </div>
</div>
<h2 className="text-[2rem] leading-tight font-semibold text-gray-900 tracking-tight font-serif-custom mb-2">
            Pick up Tommy
          </h2>
<p className="text-gray-500 text-[1.05rem] leading-relaxed mb-8">
            Allen is stuck in a meeting. Please verify when you have picked up
            Tommy from soccer.
          </p>
<div className="mt-auto relative">
<button className="w-full h-16 bg-gray-900 rounded-2xl flex items-center justify-between px-2 pl-2 relative overflow-hidden group hover:bg-black transition-all duration-300 shadow-lg shadow-gray-900/20 active:scale-[0.99] [&amp;.simulate-hover]:bg-black" id="dad-confirm-btn" onclick="confirmPickup()">
<div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/10 to-green-500/0 translate-x-[-100%] group-hover:translate-x-[100%] group-[.simulate-hover]:translate-x-[100%] transition-transform duration-1000"></div>
<div className="h-12 w-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm group-hover:bg-white text-white group-hover:text-black group-[.simulate-hover]:bg-white group-[.simulate-hover]:text-black transition-colors duration-300" id="btn-icon-container">
<iconify-icon height="24" icon="solar:check-circle-bold" width="24"></iconify-icon>
</div>
<span className="text-white font-medium text-lg tracking-tight absolute left-1/2 -translate-x-1/2 transition-all duration-300" id="btn-text">
                Confirm Pickup
              </span>
<div className="w-12 h-12 flex items-center justify-center opacity-40 group-hover:opacity-100 group-hover:translate-x-1 group-[.simulate-hover]:opacity-100 group-[.simulate-hover]:translate-x-1 transition-all" id="btn-arrow">
<iconify-icon className="text-white" icon="solar:alt-arrow-right-linear" width="24"></iconify-icon>
</div>
</button>
<p className="text-center text-xs text-gray-400 mt-4 font-medium">
              This will notify Wendy instantly
            </p>
</div>
</div>
</div>

<div className="hidden flex-1 flex flex-col h-full overflow-hidden" id="view-wendy-container">

<div className="flex-1 overflow-y-auto no-scrollbar px-6 pb-32 scroll-smooth" id="chat-scroll-view">
<div className="flex justify-between items-center mb-6 pt-12 animate-fade-in-up cursor-pointer select-none group">
<h1 className="text-[2.5rem] leading-none font-medium text-gray-900 tracking-tight font-serif-custom group-hover:opacity-60 transition-opacity">
              2026/02/06
            </h1>
</div>
<div className="animate-fade-in-up" id="view-wendy">
<div className="mb-8">
<p className="text-[1.05rem] leading-[1.6] text-gray-600">
<span className="font-semibold text-gray-900">Hey, Wendy!</span>
                It looks like a busy day. The temperature dropped, so remember
                your scarf. Today is family dinner night.
              </p>
</div>
<div className="bg-[#FDF2ED] p-6 rounded-[1.25rem] mb-6">
<p className="text-[1.05rem] leading-[1.5] text-gray-900">
                Please make me a recipe with steak, mushrooms, and potatoes.
              </p>
</div>
<div className="flex hover:border-gray-300 transition-colors cursor-pointer border-gray-200 border rounded-[1.25rem] mb-6 p-4 items-center justify-between">
<div className="flex-1 pr-4">
<h3 className="font-medium text-[1.05rem] text-gray-900 leading-tight mb-2 tracking-tight">
                  Steak with Garlic Mushrooms
                </h3>
<p className="text-gray-500 text-sm">
                  50m Cook Time, 10 ingredients
                </p>
</div>
<div className="flex items-center gap-4">
<div className="w-[4.5rem] h-[4.5rem] rounded-2xl bg-gray-100 overflow-hidden relative shadow-sm shrink-0">
<img alt="Steak dish" className="object-cover w-full h-full opacity-90" src="https://images.unsplash.com/photo-1546964124-0cce460f38ef?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
</div>
<iconify-icon className="text-gray-400" height="24" icon="solar:alt-arrow-right-linear" width="24"></iconify-icon>
</div>
</div>
<div className="flex items-center gap-4 my-8">
<div className="h-px bg-gray-100 flex-1"></div>
<span className="text-xs text-gray-400 font-medium uppercase tracking-widest">
                Just Now
              </span>
<div className="h-px bg-gray-100 flex-1"></div>
</div>
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-blue-600">
<iconify-icon height="20" icon="solar:letter-linear" width="20"></iconify-icon>
</div>
<div className="text-[0.95rem] font-medium text-gray-900 tracking-tight">
                New Meeting with Sabrina: 5PM – 6PM
              </div>
</div>
<div className="flex flex-col items-start mb-5">
<div className="bg-[#FFF5F5] text-[#D92D20] px-5 py-4 rounded-[1.25rem] rounded-tl-sm text-[0.95rem] leading-normal inline-block max-w-[90%]">
<span className="font-semibold">Conflict Detected</span>
<span className="opacity-60 mx-1">|</span>
                Pick up Tommy @ 5:00 PM
              </div>
</div>
<div className="w-full bg-white rounded-[1.5rem] p-5 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 mb-6">
<div className="flex justify-between items-start mb-5">
<div className="pr-3">
<h3 className="text-[1.1rem] font-semibold text-gray-900 mb-1.5 tracking-tight">
                    Dad is available
                  </h3>
<p className="text-gray-500 text-[0.95rem] leading-[1.5]">
                    I checked his calendar. He is free between 4:30 - 6:00 PM.
                    Want him to pick up Tommy?
                  </p>
</div>
<div className="shrink-0 relative">
<img alt="Dad" className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=100&amp;h=100&amp;q=80"/>
<div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></div>
</div>
</div>
<div className="flex gap-3">
<button className="flex-1 py-3 px-4 rounded-xl border border-gray-200 font-medium text-[0.9rem] text-gray-700 hover:bg-gray-50 transition-colors active:bg-gray-100">
                  Check Calendar
                </button>
<button className="flex-1 py-3 px-4 rounded-xl bg-gray-900 text-white font-medium text-[0.9rem] hover:bg-black transition-all shadow-lg shadow-gray-900/10 active:scale-[0.98] transform duration-150 flex items-center justify-center gap-2" id="notify-btn">
                  Notify Him
                </button>
</div>
</div>
</div>

<div className="hidden" id="view-other"></div>
</div>

<div className="absolute bottom-0 left-0 w-full bg-white border-t border-gray-100/50 pb-8 pt-4 px-6 z-20">
<div className="flex gap-4 items-center">
<input className="flex-1 bg-transparent text-lg placeholder-gray-300 outline-none h-12 text-gray-900 font-normal" placeholder="Message" type="text"/>
<button className="bg-[#F3F4F6] text-gray-400 px-6 py-3 rounded-2xl font-medium text-[1rem] hover:bg-gray-200 hover:text-gray-600 transition-colors">
              Send
            </button>
</div>
</div>
</div>

<div className="absolute bottom-0 w-full flex justify-center pb-2 z-30 pointer-events-none">
<div className="w-32 h-1.5 bg-black rounded-full opacity-20"></div>
</div>
</div>



    </>
  );
}
