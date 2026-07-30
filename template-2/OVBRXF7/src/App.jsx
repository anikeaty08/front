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



    particlesJS("particles-js", {
      "particles": {
        "number": {
          "value": 90,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#fff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000"
          }
        },
        "opacity": {
          "value": 0.7,
          "random": true
        },
        "size": {
          "value": 4,
          "random": true
        },
        "move": {
          "enable": true,
          "speed": 2,
          "direction": "bottom",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": false
          },
          "onclick": {
            "enable": false
          },
          "resize": true
        }
      },
      "retina_detect": true
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
      
<div id="particles-js"></div>
<div className="relative z-10 w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-xl p-8 space-y-8 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.12),_0_6.7px_5.3px_rgba(0,_0,_0,_0.18),_0_12.5px_10px_rgba(0,_0,_0,_0.24),_0_22.3px_17.9px_rgba(0,_0,_0,_0.30),_0_41.8px_33.4px_rgba(0,_0,_0,_0.36),_0_100px_80px_rgba(0,_0,_0,_0.50)]">

<div className="bg-zinc-800 border border-zinc-700 rounded-lg px-6 py-5 mb-6">
<div className="flex justify-between items-center">
<span className="text-xs uppercase text-zinc-400 font-medium tracking-widest">
          Debit Card
        </span>
<div className="flex gap-2">
<span className="block w-8 h-8 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-500"></span>
<span className="block w-8 h-8 rounded-full bg-gradient-to-br from-zinc-400 to-zinc-600 -ml-3"></span>
</div>
</div>
<div className="mt-8 text-zinc-100 font-mono text-lg font-semibold tracking-widest select-none">
        **** **** **** 3421
      </div>
<div className="mt-6 flex justify-between text-xs text-zinc-400">
<div>
<div className="uppercase tracking-wide">Card Holder</div>
<div className="text-zinc-100 font-medium">Alex Johnson</div>
</div>
<div>
<div className="uppercase tracking-wide">Expires</div>
<div className="text-zinc-100 font-medium">12/26</div>
</div>
<div>
<div className="uppercase tracking-wide">CVV</div>
<div className="text-zinc-100 font-medium">***</div>
</div>
</div>
</div>

<form className="space-y-5">
<div>
<label className="block text-sm font-semibold text-zinc-300 mb-1" htmlFor="card-number">Card Number</label>
<input className="w-full bg-zinc-800 border border-zinc-700 rounded-md px-3 py-2 text-base text-zinc-100 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:border-indigo-700 transition shadow-none placeholder:text-zinc-500 font-medium" id="card-number" maxlength="19" placeholder="1234 5678 9012 3456" type="text" />
</div>
<div className="flex gap-4">
<div className="flex-1">
<label className="block text-sm font-semibold text-zinc-300 mb-1" htmlFor="expiry">Expiry</label>
<input className="w-full bg-zinc-800 border border-zinc-700 rounded-md px-3 py-2 text-base text-zinc-100 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:border-indigo-700 transition shadow-none placeholder:text-zinc-500 font-medium" id="expiry" maxlength="5" placeholder="MM/YY" type="text" />
</div>
<div className="flex-1">
<label className="block text-sm font-semibold text-zinc-300 mb-1" htmlFor="cvv">CVV</label>
<input className="w-full bg-zinc-800 border border-zinc-700 rounded-md px-3 py-2 text-base text-zinc-100 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:border-indigo-700 transition shadow-none placeholder:text-zinc-500 font-medium" id="cvv" maxlength="4" placeholder="•••" type="password" />
</div>
</div>
<div>
<label className="block text-sm font-semibold text-zinc-300 mb-1" htmlFor="card-holder">Card Holder</label>
<input className="w-full bg-zinc-800 border border-zinc-700 rounded-md px-3 py-2 text-base text-zinc-100 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:border-indigo-700 transition shadow-none placeholder:text-zinc-500 font-medium" id="card-holder" placeholder="Full Name" type="text" />
</div>
<button className="w-full mt-2 inline-flex items-center justify-center rounded-md bg-indigo-600 text-white px-4 py-2 font-semibold shadow-none hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-800" type="submit">
        Pay Now
      </button>
</form>
</div>


    </>
  );
}
