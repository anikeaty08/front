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
      
<div className="relative w-[600px] h-[600px]">

<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/50 z-10 border-4 border-blue-300">
<span className="text-white font-bold">Hub</span>
</div>


<div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-purple-500 flex items-center justify-center shadow-lg shadow-purple-500/50 z-10 border-2 border-purple-300">
<span className="text-white font-bold">1</span>
</div>

<div className="absolute top-[75px] right-[75px] w-16 h-16 rounded-full bg-pink-500 flex items-center justify-center shadow-lg shadow-pink-500/50 z-10 border-2 border-pink-300">
<span className="text-white font-bold">2</span>
</div>

<div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-16 h-16 rounded-full bg-red-500 flex items-center justify-center shadow-lg shadow-red-500/50 z-10 border-2 border-red-300">
<span className="text-white font-bold">3</span>
</div>

<div className="absolute bottom-[75px] right-[75px] w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center shadow-lg shadow-orange-500/50 z-10 border-2 border-orange-300">
<span className="text-white font-bold">4</span>
</div>

<div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-yellow-500 flex items-center justify-center shadow-lg shadow-yellow-500/50 z-10 border-2 border-yellow-300">
<span className="text-white font-bold">5</span>
</div>

<div className="absolute bottom-[75px] left-[75px] w-16 h-16 rounded-full bg-green-500 flex items-center justify-center shadow-lg shadow-green-500/50 z-10 border-2 border-green-300">
<span className="text-white font-bold">6</span>
</div>

<div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-16 h-16 rounded-full bg-teal-500 flex items-center justify-center shadow-lg shadow-teal-500/50 z-10 border-2 border-teal-300">
<span className="text-white font-bold">7</span>
</div>

<div className="absolute top-[75px] left-[75px] w-16 h-16 rounded-full bg-cyan-500 flex items-center justify-center shadow-lg shadow-cyan-500/50 z-10 border-2 border-cyan-300">
<span className="text-white font-bold">8</span>
</div>

<svg className="absolute inset-0 w-full h-full" viewbox="0 0 600 600">

<line className="stroke-purple-400 stroke-2" x1="300" x2="300" y1="300" y2="0"></line>
<line className="stroke-pink-400 stroke-2" x1="300" x2="525" y1="300" y2="75"></line>
<line className="stroke-red-400 stroke-2" x1="300" x2="600" y1="300" y2="300"></line>
<line className="stroke-orange-400 stroke-2" x1="300" x2="525" y1="300" y2="525"></line>
<line className="stroke-yellow-400 stroke-2" x1="300" x2="300" y1="300" y2="600"></line>
<line className="stroke-green-400 stroke-2" x1="300" x2="75" y1="300" y2="525"></line>
<line className="stroke-teal-400 stroke-2" x1="300" x2="0" y1="300" y2="300"></line>
<line className="stroke-cyan-400 stroke-2" x1="300" x2="75" y1="300" y2="75"></line>

<path className="fill-none stroke-blue-300 stroke-2 opacity-30" d="M300,0 L525,75 L600,300 L525,525 L300,600 L75,525 L0,300 L75,75 Z"></path>

<circle className="fill-none stroke-blue-400 stroke-1 opacity-50" cx="300" cy="300" r="250">
<animate attributename="r" dur="3s" from="150" repeatcount="indefinite" to="280"></animate>
<animate attributename="opacity" dur="3s" from="0.7" repeatcount="indefinite" to="0"></animate>
</circle>
</svg>

<svg className="absolute inset-0 w-full h-full" viewbox="0 0 600 600">

<circle className="fill-purple-500">
<animate attributename="cx" dur="6s" repeatcount="indefinite" values="300;300"></animate>
<animate attributename="cy" dur="6s" repeatcount="indefinite" values="300;0"></animate>
<animate attributename="r" dur="6s" repeatcount="indefinite" values="3;3"></animate>
</circle>

<circle className="fill-pink-500">
<animate attributename="cx" dur="6s" repeatcount="indefinite" values="300;525"></animate>
<animate attributename="cy" dur="6s" repeatcount="indefinite" values="300;75"></animate>
<animate attributename="r" dur="6s" repeatcount="indefinite" values="3;3"></animate>
</circle>

<circle className="fill-red-500">
<animate attributename="cx" dur="6s" repeatcount="indefinite" values="300;600"></animate>
<animate attributename="cy" dur="6s" repeatcount="indefinite" values="300;300"></animate>
<animate attributename="r" dur="6s" repeatcount="indefinite" values="3;3"></animate>
</circle>
<circle className="fill-orange-500">
<animate attributename="cx" dur="6s" repeatcount="indefinite" values="300;525"></animate>
<animate attributename="cy" dur="6s" repeatcount="indefinite" values="300;525"></animate>
<animate attributename="r" dur="6s" repeatcount="indefinite" values="3;3"></animate>
</circle>
<circle className="fill-yellow-500">
<animate attributename="cx" dur="6s" repeatcount="indefinite" values="300;300"></animate>
<animate attributename="cy" dur="6s" repeatcount="indefinite" values="300;600"></animate>
<animate attributename="r" dur="6s" repeatcount="indefinite" values="3;3"></animate>
</circle>
<circle className="fill-green-500">
<animate attributename="cx" dur="6s" repeatcount="indefinite" values="300;75"></animate>
<animate attributename="cy" dur="6s" repeatcount="indefinite" values="300;525"></animate>
<animate attributename="r" dur="6s" repeatcount="indefinite" values="3;3"></animate>
</circle>
<circle className="fill-teal-500">
<animate attributename="cx" dur="6s" repeatcount="indefinite" values="300;0"></animate>
<animate attributename="cy" dur="6s" repeatcount="indefinite" values="300;300"></animate>
<animate attributename="r" dur="6s" repeatcount="indefinite" values="3;3"></animate>
</circle>
<circle className="fill-cyan-500">
<animate attributename="cx" dur="6s" repeatcount="indefinite" values="300;75"></animate>
<animate attributename="cy" dur="6s" repeatcount="indefinite" values="300;75"></animate>
<animate attributename="r" dur="6s" repeatcount="indefinite" values="3;3"></animate>
</circle>
</svg>
</div>

    </>
  );
}
