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
          fontFamily: {
            sans: ["Inter", "ui-sans-serif", "system-ui"],
          },
        },
      };
    


      document.addEventListener("DOMContentLoaded", () => {
        lucide.createIcons();

        const dlBtn = document.getElementById("downloadBtn");
        dlBtn.addEventListener("click", () => {
          const link = document.createElement("a");
          link.download = "flight-pass.html";
          link.href = window.location.href;
          link.click();
        });
      });
    
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
      

<div className="max-w-sm w-[360px] rounded-[36px] bg-neutral-100 shadow-lg p-4 ring-1 ring-black/5">

<div className="flex justify-between items-center text-xs text-neutral-500 px-4 pt-1">
<span>2:15</span>
<div className="flex gap-1">
<div className="w-3 h-3 rounded-full border border-neutral-400"></div>
<div className="w-3 h-3 rounded-full border border-neutral-400"></div>
</div>
</div>

<header className="flex items-center justify-between mt-2 mb-4 px-1 text-neutral-900">
<button aria-label="Go back" className="p-2 rounded-lg hover:bg-neutral-200">
<i className="w-5 h-5" data-lucide="arrow-left"></i>
</button>
<h1 className="text-base font-semibold">Flight Pass</h1>
<button aria-label="More options" className="p-2 rounded-lg hover:bg-neutral-200">
<i className="w-5 h-5" data-lucide="more-horizontal"></i>
</button>
</header>

<section className="bg-white rounded-2xl p-4 space-y-5">

<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-sm font-bold">
            S
          </div>
<div>
<p className="text-sm font-semibold">SkyWings Airways</p>
<p className="text-xs text-neutral-500">SW 462 / SKY‑117</p>
</div>
</div>

<div className="flex items-center justify-between">
<div className="text-center">
<p className="text-[10px] text-neutral-500">06:30 AM</p>
<p className="text-3xl font-bold tracking-wider">LAX</p>
<p className="text-[10px] text-neutral-500">Los Angeles</p>
</div>
<div className="flex flex-col items-center">
<i className="w-6 h-6 rotate-90" data-lucide="airplane"></i>
<p className="text-[10px] text-neutral-500 mt-1">5 h 45 m</p>
</div>
<div className="text-center">
<p className="text-[10px] text-neutral-500">02:15 PM</p>
<p className="text-3xl font-bold tracking-wider">JFK</p>
<p className="text-[10px] text-neutral-500">New York</p>
</div>
</div>

<div className="grid grid-cols-2 gap-x-4 gap-y-3 text-xs leading-snug">
<div>
<p className="text-neutral-500">Passenger Name</p>
<p className="font-medium">Maria Rodriguez</p>
</div>
<div>
<p className="text-neutral-500">Flight Code</p>
<p className="font-medium">SW 462 / SKY‑117</p>
</div>
<div>
<p className="text-neutral-500">Seat Number</p>
<p className="font-medium">12C</p>
</div>
<div>
<p className="text-neutral-500">Class</p>
<p className="font-medium">Business</p>
</div>
<div>
<p className="text-neutral-500">Terminal</p>
<p className="font-medium">B7</p>
</div>
<div>
<p className="text-neutral-500">Gate</p>
<p className="font-medium">A22</p>
</div>
</div>

<div className="h-14 w-full overflow-hidden rounded-sm bg-[repeating-linear-gradient(to_right,theme(colors.neutral.900)_0,theme(colors.neutral.900)_2px,transparent_2px,transparent_5px)]"></div>
<p className="text-center text-[10px] text-neutral-400">
          Present this code at boarding · SkyWings Digital
        </p>
</section>

<section className="mt-4 bg-white rounded-2xl p-4">
<h2 className="text-sm font-semibold mb-1">Cabin Layout</h2>
<p className="text-xs text-neutral-500 mb-4">
          Business Class · 12C
        </p>

<div className="flex items-center gap-3 mb-3 text-[10px]">
<div className="flex items-center gap-1">
<div className="w-3 h-3 bg-neutral-200 rounded-sm"></div>
<span>Open</span>
</div>
<div className="flex items-center gap-1">
<div className="w-3 h-3 bg-neutral-400 rounded-sm"></div>
<span>Occupied</span>
</div>
<div className="flex items-center gap-1">
<div className="w-3 h-3 bg-black rounded-sm"></div>
<span className="text-neutral-900">Your Seat</span>
</div>
</div>

<div className="grid grid-cols-9 gap-1 text-[10px]">

<div className="col-span-9 flex gap-1">
<div className="flex gap-1 mb-1">
<div className="w-4 h-4 bg-neutral-200 rounded-sm"></div>
<div className="w-4 h-4 bg-neutral-400 rounded-sm"></div>
<div className="w-4 h-4 bg-neutral-200 rounded-sm"></div>
<div className="w-4 h-4 bg-neutral-200 rounded-sm"></div>
<div className="w-4 h-4 bg-neutral-400 rounded-sm"></div>
<div className="w-4 h-4 bg-neutral-200 rounded-sm"></div>
<div className="w-4 h-4 bg-neutral-200 rounded-sm"></div>
<div className="w-4 h-4 bg-neutral-400 rounded-sm"></div>
<div className="w-4 h-4 bg-neutral-200 rounded-sm"></div>
</div>
</div>

<div className="col-span-9 flex gap-1">
<div className="flex gap-1">
<div className="w-4 h-4 bg-neutral-400 rounded-sm"></div>
<div className="w-4 h-4 bg-neutral-200 rounded-sm"></div>
<div className="w-4 h-4 bg-black rounded-sm"></div>
<div className="w-4 h-4 bg-neutral-200 rounded-sm"></div>
<div className="w-4 h-4 bg-neutral-200 rounded-sm"></div>
<div className="w-4 h-4 bg-neutral-400 rounded-sm"></div>
<div className="w-4 h-4 bg-neutral-200 rounded-sm"></div>
<div className="w-4 h-4 bg-neutral-200 rounded-sm"></div>
<div className="w-4 h-4 bg-neutral-400 rounded-sm"></div>
</div>
</div>
</div>
</section>

<button className="mt-6 w-full py-3 bg-black text-white rounded-full font-medium hover:opacity-90 active:scale-95 transition" id="downloadBtn">
        Save Flight Pass
      </button>
</div>


    </>
  );
}
