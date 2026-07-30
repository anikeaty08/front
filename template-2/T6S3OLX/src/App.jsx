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
      fontFamily: { sans: ['Inter', 'sans-serif'] }
    }
  }
}



(function(){
  const datesEl=document.getElementById('calendarDates'),t=new Date,y=t.getFullYear(),m=t.getMonth(),first=new Date(y,m,1).getDay(),days=new Date(y,m+1,0).getDate(),prev=new Date(y,m,0).getDate();let html='';
  for(let i=0;i<first;i++)html+=`<div class="text-gray-500 calendar-day">${prev-first+i+1}</div>`;
  for(let d=1;d<=days;d++){const today=d===t.getDate();html+=`<div class="calendar-day ${today?'bg-gray-800 text-white rounded-full':''}">${d}</div>`}
  datesEl.innerHTML=html
})();

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
      
<div className="glass-widget w-full max-w-5xl p-6 overflow-x-auto shadow-xl">
<div className="flex sm:justify-around gap-8">
<div className="flex flex-col items-center min-w-[120px]">
<div className="relative w-24 h-24">
<svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="48" stroke="rgba(0,0,0,0.3)" strokeWidth="4"></circle>
<line stroke="rgba(0,0,0,0.8)" strokeLinecap="round" strokeWidth="4" transform="rotate(30 50 50)" x1="50" x2="50" y1="50" y2="30"></line>
<line stroke="rgba(0,0,0,0.6)" strokeLinecap="round" strokeWidth="2" transform="rotate(180 50 50)" x1="50" x2="50" y1="50" y2="20"></line>
</svg>
</div>
<div className="font-semibold text-gray-800 mt-2">Montreal</div>
<div className="text-xs text-gray-600">Today</div>
<div className="text-xs text-gray-600">+0HRS</div>
</div>
<div className="flex flex-col items-center min-w-[120px]">
<div className="relative w-24 h-24">
<svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="48" stroke="rgba(0,0,0,0.3)" strokeWidth="4"></circle>
<line stroke="rgba(0,0,0,0.8)" strokeLinecap="round" strokeWidth="4" transform="rotate(150 50 50)" x1="50" x2="50" y1="50" y2="30"></line>
<line stroke="rgba(0,0,0,0.6)" strokeLinecap="round" strokeWidth="2" transform="rotate(300 50 50)" x1="50" x2="50" y1="50" y2="20"></line>
</svg>
</div>
<div className="font-semibold text-gray-800 mt-2">Seoul</div>
<div className="text-xs text-gray-600">Tomorrow</div>
<div className="text-xs text-gray-600">+14HRS</div>
</div>
<div className="flex flex-col items-center min-w-[120px]">
<div className="relative w-24 h-24">
<svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="48" stroke="rgba(0,0,0,0.3)" strokeWidth="4"></circle>
<line stroke="rgba(0,0,0,0.8)" strokeLinecap="round" strokeWidth="4" transform="rotate(210 50 50)" x1="50" x2="50" y1="50" y2="30"></line>
<line stroke="rgba(0,0,0,0.6)" strokeLinecap="round" strokeWidth="2" transform="rotate(60 50 50)" x1="50" x2="50" y1="50" y2="20"></line>
</svg>
</div>
<div className="font-semibold text-gray-800 mt-2">Mumbai</div>
<div className="text-xs text-gray-600">Tomorrow</div>
<div className="text-xs text-gray-600">+10HRS</div>
</div>
<div className="flex flex-col items-center min-w-[120px]">
<div className="relative w-24 h-24">
<svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
<circle className="" cx="50" cy="50" fill="none" r="48" stroke="rgba(0,0,0,0.3)" strokeWidth="4"></circle>
<line stroke="rgba(0,0,0,0.8)" strokeLinecap="round" strokeWidth="4" transform="rotate(300 50 50)" x1="50" x2="50" y1="50" y2="30"></line>
<line className="" stroke="rgba(0,0,0,0.6)" strokeLinecap="round" strokeWidth="2" transform="rotate(120 50 50)" x1="50" x2="50" y1="50" y2="20"></line>
</svg>
</div>
<div className="font-semibold text-gray-800 mt-2">Berlin</div>
<div className="text-xs text-gray-600">Today</div>
<div className="text-xs text-gray-600">+6HRS</div>
</div>
</div>
</div>
<div className="flex w-full max-w-5xl gap-6 flex-col md:flex-row">
<div className="glass-widget flex-1 p-6 shadow-xl">
<div className="uppercase text-sm font-semibold text-gray-800 tracking-widest">November</div>
<div className="grid grid-cols-7 gap-1 mt-4 text-center text-gray-600 text-xs">
<div>S</div><div>M</div><div className="">T</div><div className="">W</div><div>T</div><div>F</div><div className="">S</div>
</div>
<div className="grid grid-cols-7 gap-1 mt-3 text-center text-gray-800 text-sm" id="calendarDates"><div className="calendar-day">1</div><div className="calendar-day">2</div><div className="calendar-day">3</div><div className="calendar-day">4</div><div className="calendar-day">5</div><div className="calendar-day">6</div><div className="calendar-day">7</div><div className="calendar-day">8</div><div className="calendar-day">9</div><div className="calendar-day">10</div><div className="calendar-day bg-gray-800 text-white rounded-full">11</div><div className="calendar-day">12</div><div className="calendar-day">13</div><div className="calendar-day">14</div><div className="calendar-day">15</div><div className="calendar-day">16</div><div className="calendar-day">17</div><div className="calendar-day">18</div><div className="calendar-day">19</div><div className="calendar-day">20</div><div className="calendar-day">21</div><div className="calendar-day">22</div><div className="calendar-day">23</div><div className="calendar-day">24</div><div className="calendar-day">25</div><div className="calendar-day">26</div><div className="calendar-day">27</div><div className="calendar-day">28</div><div className="calendar-day">29</div><div className="calendar-day">30</div></div>
</div>
<div className="glass-widget w-full md:w-72 p-6 flex flex-col shadow-xl">
<div className="flex items-center justify-between">
<h2 className="text-xl font-semibold text-gray-800">Reminders</h2>
<span className="text-3xl font-bold text-gray-800">5</span>
</div>
<div className="flex flex-col gap-4 mt-6">
<label className="flex items-center gap-3 text-gray-800">
<input className="custom" type="checkbox" />
<span className="text-lg">Weekly grocery run</span>
</label>
<label className="flex items-center gap-3 text-gray-800">
<input className="custom" type="checkbox" />
<span className="text-lg">Book club meeting</span>
</label>
<label className="flex items-center gap-3 text-gray-800">
<input className="custom" type="checkbox" />
<span className="text-lg">Update portfolio</span>
</label>
</div>
</div>
</div>
<div className="glass-widget w-full max-w-5xl p-6 shadow-xl">
<div className="flex justify-between items-start">
<div className="">
<h2 className="text-xl font-semibold text-gray-800">Vancouver</h2>
<div className="text-gray-800 font-light text-6xl leading-none mt-1">42°</div>
</div>
<div className="flex flex-col items-end text-gray-800">
<div className="w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mb-2"></div>
<div className="text-right text-sm">Overcast H:45° L:38°</div>
</div>
</div>
<div className="grid grid-cols-6 gap-4 mt-6 text-center">
<div className="text-gray-800 flex flex-col items-center">
<span className="text-sm mb-2">2 PM</span>
<div className="w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mb-2"></div>
<span className="text-sm">42°</span>
</div>
<div className="text-gray-800 flex flex-col items-center">
<span className="text-sm mb-2">3 PM</span>
<div className="w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mb-2"></div>
<span className="text-sm">43°</span>
</div>
<div className="text-gray-800 flex flex-col items-center">
<span className="text-sm mb-2">4 PM</span>
<div className="w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mb-2"></div>
<span className="text-sm">44°</span>
</div>
<div className="text-gray-800 flex flex-col items-center">
<span className="text-sm mb-2">5 PM</span>
<div className="w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mb-2"></div>
<span className="text-sm">43°</span>
</div>
<div className="text-gray-800 flex flex-col items-center">
<span className="text-sm mb-2">6 PM</span>
<div className="w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mb-2"></div>
<span className="text-sm">41°</span>
</div>
<div className="text-gray-800 flex flex-col items-center">
<span className="text-sm mb-2">7 PM</span>
<div className="w-4 h-4 bg-gray-500 rounded-full mb-2"></div>
<span className="text-sm">40°</span>
</div>
</div>
</div>


    </>
  );
}
