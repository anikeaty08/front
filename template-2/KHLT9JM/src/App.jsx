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

<div className="relative md:w-1/3 flex-shrink-0 bg-gradient-to-br from-orange-100 to-yellow-100 flex items-center justify-center p-6 animate__animated animate__fadeInLeft" style={{animationDelay: `.2s`}}>
<img alt="Book Cover" className="rounded-xl object-cover w-44 h-64 shadow-lg border-4 border-white" src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=cover&w=300&q=80" />
<span className="absolute left-6 bottom-6 bg-white/80 rounded-xl px-3 py-1 text-xs font-medium text-gray-700 flex items-center gap-1 shadow">
<i className="fas fa-book text-orange-400"></i> Fiction
      </span>
</div>

<div className="flex-1 flex flex-col p-7 gap-5 animate__animated animate__fadeInRight" style={{animationDelay: `.3s`}}>
<div>
<div className="flex items-center gap-3">
<span className="text-2xl font-bold text-orange-700">The Midnight Library</span>
<span className="bg-orange-100 text-orange-600 text-xs font-semibold px-2 rounded">Bestseller</span>
</div>
<div className="text-gray-500 mt-1 flex items-center gap-2 text-sm">
<i className="fas fa-user"></i> Matt Haig
        </div>
<div className="flex mt-3 gap-2">
<span className="bg-orange-50 text-orange-600 text-xs font-semibold rounded px-2 py-1">Fantasy</span>
<span className="bg-orange-50 text-orange-600 text-xs font-semibold rounded px-2 py-1">Philosophical</span>
<span className="bg-orange-50 text-orange-600 text-xs font-semibold rounded px-2 py-1">2020</span>
</div>
<div className="flex items-center mt-3 gap-1">
<i className="fas fa-star text-yellow-400"></i>
<i className="fas fa-star text-yellow-400"></i>
<i className="fas fa-star text-yellow-400"></i>
<i className="fas fa-star text-yellow-400"></i>
<i className="fas fa-star-half-alt text-yellow-400"></i>
<span className="ml-2 text-sm text-gray-600 font-medium">4.5 <span className="text-gray-400">(15,230 ratings)</span></span>
</div>
<p className="mt-4 text-gray-700 leading-relaxed text-sm">
          Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived. Would you make different choices if you could undo your regrets?
        </p>
</div>
<div className="flex justify-between gap-4">
<button className="flex-1 flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 rounded-lg shadow-lg transition animate__animated animate__fadeInUp" style={{animationDelay: `.5s`}}>
<i className="fas fa-plus"></i> Add to Library
        </button>
<button className="flex-1 flex items-center justify-center gap-2 bg-white border border-orange-200 hover:bg-orange-50 text-orange-600 font-bold py-2 rounded-lg shadow transition animate__animated animate__fadeInUp" style={{animationDelay: `.6s`}}>
<i className="fas fa-book-open"></i> Read Sample
        </button>
</div>
</div>
</div>


    </>
  );
}
