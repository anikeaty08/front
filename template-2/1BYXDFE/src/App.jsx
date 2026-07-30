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
      
<main className="bg-gradient-to-br from-[#181624] to-[#23203a] text-gray-100 w-full max-w-[600px] grid grid-cols-[106px_1fr] rounded-xl overflow-hidden custom-shadow border border-[#22213a]">

<section className="relative writing-vertical-rl text-center p-2.5 ticket-dotted-border circle-cutout bg-gradient-to-b from-[#23203a] to-[#181624]">
<div className="relative h-full flex flex-col justify-between items-center">
<h3 className="text-xl neon text-yellow-400 manrope font-extrabold uppercase tracking-wider mb-4 mt-10">Starlite Cinema</h3>
<div className="text-xs text-yellow-200 tracking-widest mb-3 uppercase font-semibold">Admit One</div>
<p className="text-[13px] tracking-[7px] font-medium py-3.5 text-center relative text-yellow-300/70">#2024-0051</p>
</div>
</section>

<section className="p-2.5 flex flex-col justify-between">

<section className="flex flex-row justify-between items-center border-b border-[#22213a] pb-2">
<div>
<h2 className="text-lg manrope font-bold uppercase tracking-wider neon text-yellow-300">OPPENHEIMER</h2>
<div className="flex items-center mt-1 space-x-2">
<span className="text-[13px] text-yellow-200 font-semibold uppercase bg-yellow-900/30 px-2 py-0.5 rounded">IMAX</span>
<span className="text-xs text-gray-300">2h 59m</span>
</div>
</div>
<div className="text-right">
<span className="block text-xs text-gray-400 uppercase">Patron</span>
<span className="block text-base font-bold manrope tracking-wide text-gray-100">Alex Morgan</span>
</div>
</section>

<section className="grid grid-cols-2 gap-3 py-3 border-b border-[#22213a]">
<div>
<span className="block uppercase text-xs text-gray-400 font-semibold">Date</span>
<span className="block text-lg font-bold manrope text-yellow-300">14 Jun 2024</span>
</div>
<div>
<span className="block uppercase text-xs text-gray-400 font-semibold">Showtime</span>
<span className="block text-lg font-bold manrope text-yellow-200">7:20 PM</span>
</div>
<div>
<span className="block uppercase text-xs text-gray-400 font-semibold">Auditorium</span>
<span className="block text-lg font-bold manrope text-gray-100">3</span>
</div>
<div>
<span className="block uppercase text-xs text-gray-400 font-semibold">Row</span>
<span className="block text-lg font-bold manrope text-gray-100">F</span>
</div>
<div>
<span className="block uppercase text-xs text-gray-400 font-semibold">Seat</span>
<span className="block text-lg font-bold manrope text-yellow-400">17</span>
</div>
<div>
<span className="block uppercase text-xs text-gray-400 font-semibold">Type</span>
<span className="block text-lg font-bold manrope text-gray-100">Adult</span>
</div>
</section>

<section className="flex flex-row items-end pt-4 pb-2">
<div className="w-5/6">
<div className="barcode"></div>
<div className="text-[11px] text-gray-400 mt-2 tracking-wide">
            Please arrive 10 min before showtime.<br />
            Enjoy the show!
          </div>
</div>
<div className="w-1/6 flex flex-col items-end justify-end">
<span className="block text-[10px] text-gray-400 font-semibold uppercase mb-1">Ref</span>
<span className="manrope font-bold text-xs text-yellow-300 tracking-wider">MVTK-8NX</span>
</div>
</section>
</section>
</main>

    </>
  );
}
