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
      

<div className="bubble bubble1"></div>
<div className="bubble bubble2"></div>
<div className="bubble bubble3"></div>

<header className="relative z-10 max-w-3xl mx-auto text-center pt-16">
<h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white drop-shadow-lg">
      Discover Fun Activities for Kids Near You
    </h1>
<p className="text-lg md:text-xl text-white/90 mb-8">
      Find local, age-appropriate, accessible events—tailored for your family.
    </p>
</header>

<section className="relative z-10 max-w-3xl mx-auto flex flex-wrap gap-3 justify-center mb-7">
<button className="px-4 py-2 rounded-full bg-white/80 hover:bg-white transition text-gray-700 font-semibold shadow active:scale-95 focus:outline-none">
      Today
    </button>
<button className="px-4 py-2 rounded-full bg-white/80 hover:bg-white transition text-gray-700 font-semibold shadow active:scale-95 focus:outline-none">
      Tomorrow
    </button>
<button className="px-4 py-2 rounded-full bg-white/80 hover:bg-white transition text-gray-700 font-semibold shadow active:scale-95 focus:outline-none">
      This Weekend
    </button>
<button className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-400 via-green-300 to-yellow-200 text-gray-800 font-bold shadow active:scale-95 focus:outline-none">
      Custom Date
    </button>
</section>

<section className="relative z-10 max-w-4xl mx-auto bg-white/80 rounded-xl shadow-lg px-4 py-6 mb-10 flex flex-wrap gap-4 justify-center items-center">
<div>
<label className="block text-sm font-medium text-gray-700" htmlFor="age">Age</label>
<select className="mt-1 block w-24 rounded-md border-gray-300 focus:ring-blue-400 focus:border-blue-400" id="age">
<option>Any</option>
<option>0–2</option>
<option>3–5</option>
<option>6–8</option>
<option>9–12</option>
<option>13+</option>
</select>
</div>
<div>
<label className="block text-sm font-medium text-gray-700" htmlFor="interest">Interest</label>
<select className="mt-1 block w-28 rounded-md border-gray-300 focus:ring-blue-400 focus:border-blue-400" id="interest">
<option>All</option>
<option>Sports</option>
<option>Arts &amp; Crafts</option>
<option>STEM</option>
<option>Outdoors</option>
<option>Music</option>
</select>
</div>
<div>
<label className="block text-sm font-medium text-gray-700" htmlFor="cost">Cost</label>
<select className="mt-1 block w-20 rounded-md border-gray-300 focus:ring-blue-400 focus:border-blue-400" id="cost">
<option>Any</option>
<option>Free</option>
<option>£</option>
<option>££</option>
<option>£££</option>
</select>
</div>
<div>
<label className="block text-sm font-medium text-gray-700" htmlFor="distance">Distance</label>
<select className="mt-1 block w-28 rounded-md border-gray-300 focus:ring-blue-400 focus:border-blue-400" id="distance">
<option>Nearby</option>
<option>5 miles</option>
<option>10 miles</option>
<option>20 miles</option>
</select>
</div>
<div className="flex items-center gap-2 mt-6 md:mt-0">
<input className="rounded border-gray-300 text-blue-500 focus:ring-blue-400" id="send" type="checkbox"/>
<label className="text-sm font-medium text-gray-700" htmlFor="send">Suitable for SEND</label>
</div>
<button className="ml-auto px-5 py-2 rounded-full bg-gradient-to-r from-pink-400 via-yellow-300 to-green-300 text-white font-bold shadow hover:scale-105 transition duration-150">
      Refine
    </button>
</section>

<main className="relative z-10 max-w-3xl mx-auto space-y-7 pb-32">

<div className="flex items-center bg-white/95 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition p-4">
<div className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-green-200 via-blue-200 to-yellow-100 rounded-lg flex items-center justify-center text-3xl font-bold text-blue-500">
        🏃‍♂️
      </div>
<div className="flex-1 ml-5">
<h3 className="text-xl font-semibold text-gray-800">Junior Park Run</h3>
<div className="text-sm text-gray-600 flex gap-2 mt-1">
<span>Age 4–12</span>
<span>• Outdoors</span>
<span>• Free</span>
<span>• 1.2 miles</span>
</div>
<div className="text-xs text-blue-700 mt-2">Sunday, 10:00 AM • Central Park</div>
<div className="flex gap-2 mt-2">
<span className="inline-flex items-center px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">SEND Friendly</span>
</div>
<a className="inline-block mt-3 px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-medium hover:bg-blue-200 transition" href="https://juniorparkrun.com" target="_blank">
          Organiser's Website
        </a>
</div>
</div>

<div className="flex items-center bg-white/95 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition p-4">
<div className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-pink-200 via-yellow-200 to-blue-100 rounded-lg flex items-center justify-center text-3xl font-bold text-pink-500">
        🎨
      </div>
<div className="flex-1 ml-5">
<h3 className="text-xl font-semibold text-gray-800">Messy Art Morning</h3>
<div className="text-sm text-gray-600 flex gap-2 mt-1">
<span>Age 3–7</span>
<span>• Arts &amp; Crafts</span>
<span>• £2</span>
<span>• 0.7 miles</span>
</div>
<div className="text-xs text-pink-700 mt-2">Saturday, 9:30 AM • Little Makers Studio</div>
<div className="flex gap-2 mt-2">
<span className="inline-flex items-center px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs">Crafty</span>
</div>
<a className="inline-block mt-3 px-3 py-1 rounded-full bg-pink-100 text-pink-700 font-medium hover:bg-pink-200 transition" href="https://littlemakers.com" target="_blank">
          Organiser's Website
        </a>
</div>
</div>

<div className="flex items-center bg-white/95 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition p-4">
<div className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-blue-200 via-green-200 to-yellow-100 rounded-lg flex items-center justify-center text-3xl font-bold text-green-500">
        🧬
      </div>
<div className="flex-1 ml-5">
<h3 className="text-xl font-semibold text-gray-800">Mini Science Explorers</h3>
<div className="text-sm text-gray-600 flex gap-2 mt-1">
<span>Age 6–10</span>
<span>• STEM</span>
<span>• Free</span>
<span>• 2 miles</span>
</div>
<div className="text-xs text-green-700 mt-2">Saturday, 2:00 PM • City Library</div>
<div className="flex gap-2 mt-2">
<span className="inline-flex items-center px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">Accessible</span>
</div>
<a className="inline-block mt-3 px-3 py-1 rounded-full bg-green-100 text-green-700 font-medium hover:bg-green-200 transition" href="https://citylibrary.com/science" target="_blank">
          Organiser's Website
        </a>
</div>
</div>


</main>

<footer className="fixed bottom-0 left-0 w-full z-20 bg-white/90 py-4 px-6 flex justify-between items-center shadow-inner">
<span className="text-sm text-gray-600">© 2024 Kids Activities App</span>
<a className="text-sm text-blue-500 hover:underline" href="#">Become an Editor</a>
</footer>

    </>
  );
}
