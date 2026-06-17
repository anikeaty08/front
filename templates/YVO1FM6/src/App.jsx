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

<section className="relative writing-vertical-rl text-center p-2.5 ticket-dotted-border bg-transparent-200 rounded-l-xl">
<h3 className="text-3xl p-2 bg-orange-300 text-orange-700 manrope font-bold uppercase tracking-wider relative rounded-tr-lg rounded-br-lg">Entry Pass</h3>
<p className="text-lg tracking-[8px] font-medium py-3.5 text-center relative">No 23409871</p>
</section>

<section className="p-2.5 grid grid-cols-[23%_77%] rounded-r-xl">

<section className="grid grid-areas-[suba_head,subb_head,subc_head] rounded-lg overflow-hidden border border-gray-200">
<h3 className="row-span-3 writing-vertical-sideways p-3 pb-20 bg-orange-300 text-orange-700 uppercase tracking-wider manrope font-bold relative rounded-tr-lg rounded-br-lg">
                    Premium Seat <span className="absolute bottom-0 right-1/2 w-full text-orange-700 p-2.5 text-[1.6em] z-10 translate-x-1/2">$45</span>
</h3>
<div className="writing-vertical-sideways text-center border-b border-gray-200 py-2">
<p className="font-semibold uppercase text-sm pr-1">Section</p>
<h4 className="manrope font-extrabold text-3xl leading-8 pt-1.5">12</h4>
</div>
<div className="writing-vertical-sideways text-center border-b border-gray-200 py-2">
<p className="font-semibold uppercase text-sm pr-1">Row</p>
<h4 className="manrope font-extrabold text-3xl leading-8 pt-1.5">A</h4>
</div>
<div className="writing-vertical-sideways text-center py-2">
<p className="font-semibold uppercase text-sm pr-1">Seat</p>
<h4 className="manrope font-extrabold text-3xl leading-8 pt-1.5">23</h4>
</div>
</section>

<section className="text-center grid grid-rows-[auto_auto_auto_auto_auto] ml-2 bg-white rounded-lg overflow-hidden border border-gray-200">
<div className="self-center px-2.5 pb-2 text-2xl border-b border-gray-200">
<h3 className="uppercase tracking-wider manrope font-bold">Championship Finals</h3>
</div>
<div className="flex w-full -mt-[11px] border-b border-gray-200 py-3">
<div className="w-[calc(50%-20px)] flex-none self-center">
<span className="block text-base manrope font-bold tracking-wider">Metro</span>
<span className="block text-3xl uppercase manrope font-bold tracking-wider -mt-2">Stars</span>
</div>
<div className="writing-vertical-lr font-extrabold w-10 px-[calc(20px-0.8em)] text-center manrope text-orange-700 border-l border-r border-gray-200">VS</div>
<div className="w-[calc(50%-20px)] flex-none self-center">
<span className="block text-base manrope font-bold tracking-wider">Royal</span>
<span className="block text-3xl uppercase manrope font-bold tracking-wider -mt-2">Knights</span>
</div>
</div>
<div className="self-center px-2 py-3 border-b border-gray-200">
<span className="text-base">Special Guest</span>
<span className="text-xl font-bold uppercase pl-2.5 manrope">James Wilson</span>
</div>
<div className="text-[22px] leading-3 py-6 px-2.5 manrope font-semibold uppercase tracking-[3px] bg-orange-300 text-orange-700 -mt-3">
<p>October 15, 8PM</p>
</div>
<div className="text-xs self-center font-normal tracking-[6px] py-3 text-gray-500">
<p>No refunds or exchanges</p>
</div>
</section>
</section>
</main>

    </>
  );
}
