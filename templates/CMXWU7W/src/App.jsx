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
      
<main className="bg-white text-gray-800 w-full max-w-[600px] grid grid-cols-[106px_1fr] rounded-xl overflow-hidden custom-shadow">

<section className="relative writing-vertical-rl text-center p-2.5 ticket-dotted-border circle-cutout bg-gradient-to-b from-[#003366] to-[#005288]">
<div className="relative h-full flex flex-col justify-between items-center">
<h3 className="text-xl text-white manrope font-bold uppercase tracking-wider mb-4 mt-10">Singapore Airlines</h3>
<div className="text-xs text-gray-200 tracking-widest mb-3">SQ e-Ticket</div>
<p className="text-[13px] tracking-[7px] font-medium py-3.5 text-center relative text-white/80">No 61820999</p>
</div>
</section>

<section className="p-2.5 flex flex-col justify-between">

<section className="flex flex-row justify-between items-center border-b border-gray-200 pb-2">
<div>
<h2 className="text-lg manrope font-bold uppercase tracking-wider text-[#003366]">Singapore → Tokyo</h2>
<div className="flex items-center mt-1 space-x-1">
<span className="text-[13px] font-semibold uppercase text-gray-400">SIN</span>
<span className="text-[13px] font-bold text-gray-300">|</span>
<span className="text-[13px] font-semibold uppercase text-gray-400">NRT</span>
</div>
</div>
<div className="text-right">
<span className="block text-xs text-gray-500 uppercase">Passenger</span>
<span className="block text-base font-bold manrope tracking-wide text-gray-900">LEE, JASON</span>
</div>
</section>

<section className="grid grid-cols-2 gap-3 py-3 border-b border-gray-200">
<div>
<span className="block uppercase text-xs text-gray-400 font-semibold">Flight</span>
<span className="block text-lg font-bold manrope text-[#003366]">SQ 632</span>
</div>
<div>
<span className="block uppercase text-xs text-gray-400 font-semibold">Date</span>
<span className="block text-lg font-bold manrope text-gray-900">12 Aug 2024</span>
</div>
<div>
<span className="block uppercase text-xs text-gray-400 font-semibold">Boarding Time</span>
<span className="block text-lg font-bold manrope text-[#005288]">21:25</span>
</div>
<div>
<span className="block uppercase text-xs text-gray-400 font-semibold">Gate</span>
<span className="block text-lg font-bold manrope text-gray-900">F52</span>
</div>
<div>
<span className="block uppercase text-xs text-gray-400 font-semibold">Seat</span>
<span className="block text-lg font-bold manrope text-[#003366]">33K</span>
</div>
<div>
<span className="block uppercase text-xs text-gray-400 font-semibold">Class</span>
<span className="block text-lg font-bold manrope text-gray-900">Economy</span>
</div>
</section>

<section className="flex flex-row items-end pt-4 pb-2">
<div className="w-5/6">
<div className="barcode"></div>
<div className="text-[11px] text-gray-400 mt-2 tracking-wide">
            Boarding closes 20 mins before departure.<br/>
            Please have your passport and boarding pass ready.
          </div>
</div>
<div className="w-1/6 flex flex-col items-end justify-end">
<span className="block text-[10px] text-gray-400 font-semibold uppercase mb-1">Ref</span>
<span className="manrope font-bold text-xs text-[#005288] tracking-wider">SQX9LP</span>
</div>
</section>
</section>
</main>

    </>
  );
}
