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
      
<div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col md:flex-row animate__animated animate__fadeIn">

<div className="relative md:w-1/2 flex-shrink-0 bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center p-6 animate__animated animate__fadeInLeft" style={{animationDelay: '.2s'}}>
<img alt="Profile" className="rounded-xl object-cover w-72 h-80 shadow-lg border-4 border-white" src="https://randomuser.me/api/portraits/women/82.jpg"/>
<span className="absolute left-6 bottom-6 bg-white/80 rounded-xl px-3 py-1 text-xs font-medium text-gray-700 flex items-center gap-1 shadow">
<i className="fas fa-map-marker-alt text-pink-400"></i> 2 miles away
      </span>
<span className="absolute top-6 right-6 bg-white/90 rounded-full p-2 shadow text-fuchsia-500">
<i className="fas fa-bolt"></i>
</span>
</div>

<div className="flex-1 flex flex-col p-7 gap-6 animate__animated animate__fadeInRight" style={{animationDelay: '.3s'}}>
<div>
<div className="flex items-center gap-3">
<span className="text-2xl font-bold text-fuchsia-700">Samantha, 28</span>
<span className="bg-fuchsia-100 text-fuchsia-600 text-xs font-semibold px-2 rounded">Verified <i className="fas fa-check-circle ml-1"></i></span>
</div>
<div className="text-gray-500 mt-1 flex items-center gap-2 text-sm">
<i className="fas fa-briefcase"></i> UX Designer • <i className="fas fa-graduation-cap"></i> NYU
        </div>
<p className="mt-4 text-gray-700 leading-relaxed">
          Lover of coffee shops, indie music, and spontaneous city adventures.
          Looking for someone to explore the best brunch spots with and laugh until it hurts.
        </p>
</div>
<div className="flex gap-3">
<div className="flex flex-col items-center bg-fuchsia-50 p-3 rounded-lg flex-1 shadow-sm">
<i className="fas fa-music text-fuchsia-400 text-xl mb-1"></i>
<span className="text-xs text-gray-500 uppercase">Favorite Song</span>
<span className="font-semibold text-fuchsia-700 text-sm mt-1">"Sunflower"</span>
</div>
<div className="flex flex-col items-center bg-fuchsia-50 p-3 rounded-lg flex-1 shadow-sm">
<i className="fas fa-heart text-rose-400 text-xl mb-1"></i>
<span className="text-xs text-gray-500 uppercase">Looking For</span>
<span className="font-semibold text-fuchsia-700 text-sm mt-1">Serious</span>
</div>
<div className="flex flex-col items-center bg-fuchsia-50 p-3 rounded-lg flex-1 shadow-sm">
<i className="fas fa-paw text-pink-400 text-xl mb-1"></i>
<span className="text-xs text-gray-500 uppercase">Pet</span>
<span className="font-semibold text-fuchsia-700 text-sm mt-1">Dog</span>
</div>
</div>
<div className="flex justify-between gap-3">
<button className="flex-1 flex items-center justify-center gap-2 bg-rose-100 hover:bg-rose-200 text-rose-500 font-bold py-2 rounded-lg shadow transition animate__animated animate__fadeInUp" style={{animationDelay: '.5s'}}>
<i className="fas fa-times text-lg"></i> Pass
        </button>
<button className="flex-1 flex items-center justify-center gap-2 bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-bold py-2 rounded-lg shadow-lg transition animate__animated animate__fadeInUp" style={{animationDelay: '.6s'}}>
<i className="fas fa-heart text-lg"></i> Like
        </button>
<button className="flex-1 flex items-center justify-center gap-2 bg-white border border-gray-200 hover:bg-gray-50 text-fuchsia-500 font-bold py-2 rounded-lg shadow transition animate__animated animate__fadeInUp" style={{animationDelay: '.7s'}}>
<i className="fas fa-star text-lg"></i> Super Like
        </button>
</div>
</div>
</div>


    </>
  );
}
