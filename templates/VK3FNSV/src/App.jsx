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



    particlesJS('particles-js', {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#10b981" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: false },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: "#10b981", opacity: 0.4, width: 1 },
        move: { enable: true, speed: 6, direction: "none", random: false, straight: false, out_mode: "out", bounce: false }
      },
      interactivity: {
        detect_on: "canvas",
        events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
        modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } }
      },
      retina_detect: true
    });

    // Card number formatting
    document.getElementById('cardNumber').addEventListener('input', function(e) {
      let value = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
      let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
      e.target.value = formattedValue;
    });

    // Expiry date formatting
    document.getElementById('expiry').addEventListener('input', function(e) {
      let value = e.target.value.replace(/\D/g, '');
      if (value.length >= 2) {
        value = value.substring(0,2) + '/' + value.substring(2,4);
      }
      e.target.value = value;
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
<div className="max-w-md w-full card-container">
<div className="card-content shadow-2xl backdrop-blur-sm">
<div className="relative font-manrope bg-gradient-to-br from-emerald-600 to-emerald-800 pt-6 pr-6 pb-6 pl-6">
<div className="flex justify-between items-start">
<span className="px-3 py-1 bg-emerald-700/80 rounded-full text-xs text-emerald-100 font-medium">SECURE PAYMENT</span>
<div className="text-emerald-100 text-lg font-bold">VISA</div>
</div>
<div className="mt-4 flex items-center space-x-3">
<div className="card-chip"></div>
<svg className="w-6 h-6 text-emerald-200" fill="currentColor" viewbox="0 0 24 24">
</svg>
</div>
<div className="mt-6">
<div className="text-emerald-100 text-xl font-mono tracking-wider">•••• •••• •••• 1234</div>
<div className="flex justify-between mt-3">
<div>
<div className="text-emerald-200 text-xs">VALID THRU</div>
<div className="text-emerald-100 text-sm font-mono">12/28</div>
</div>
<div className="text-right">
<div className="text-emerald-200 text-xs">CARD HOLDER</div>
<div className="text-emerald-100 text-sm">JOHN DOE</div>
</div>
</div>
</div>
</div>
<div className="font-manrope bg-gray-800 pt-6 pr-6 pb-6 pl-6">
<div className="">
<span className="px-3 py-1 bg-gray-700 rounded-full text-xs text-gray-300 mb-3 inline-block">PAYMENT DETAILS</span>
<h3 className="text-xl font-semibold text-gray-100 mb-4">Card Information</h3>
<form className="space-y-4 mb-6">
<div className="">
<label className="text-gray-300 text-xs font-medium block mb-1" htmlFor="cardNumber">CARD NUMBER</label>
<input className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm" id="cardNumber" maxlength="19" placeholder="1234 5678 9012 3456" required="" type="text"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="">
<label className="text-gray-300 text-xs font-medium block mb-1" htmlFor="expiry">EXPIRY DATE</label>
<input className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm" id="expiry" maxlength="5" placeholder="MM/YY" required="" type="text"/>
</div>
<div className="">
<label className="text-gray-300 text-xs font-medium block mb-1" htmlFor="cvv">CVV</label>
<input className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm" id="cvv" maxlength="4" placeholder="123" required="" type="text"/>
</div>
</div>
<div className="">
<label className="text-gray-300 text-xs font-medium block mb-1" htmlFor="cardName">CARDHOLDER NAME</label>
<input className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm" id="cardName" placeholder="John Doe" required="" type="text"/>
</div>
<div className="flex items-center">
<input className="w-4 h-4 bg-gray-700 border-gray-600 rounded mr-2" id="save" type="checkbox"/>
<label className="text-gray-400 text-xs" htmlFor="save">Save card for future payments</label>
</div>
</form>
<div className="flex justify-between text-sm space-x-3">
<button className="flex-1 px-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition flex items-center justify-center font-medium" type="submit">
              Pay Now
            </button>
<button className="flex-1 px-4 py-3 bg-gray-700 hover:bg-gray-600 text-gray-200 rounded-lg transition flex items-center justify-center font-medium">
              Cancel
            </button>
</div>
</div>
<div className="mt-6 pt-4 text-center">
<div className="divider-gradient mb-4"></div>
<p className="text-gray-400 text-xs">Protected by 256-bit SSL encryption</p>
<div className="flex items-center justify-center mt-4 space-x-2">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
<span className="text-gray-400 text-xs">Payment Gateway: Secure</span>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
