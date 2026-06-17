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



    VANTA.BIRDS({
      el: "#vanta-bg",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      backgroundColor: 0x111d3c,
      color1: 0x86a8e7,
      color2: 0xcc4bf7,
      colorMode: "lerp",
      birdSize: 0.7,
      wingSpan: 22.00,
      speedLimit: 3.00,
      separation: 30.00,
      alignment: 18.00,
      cohesion: 22.00,
      quantity: 7,
      backgroundAlpha: 1.0
    })
  
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
      
<div className="fixed inset-0 -z-10" id="vanta-bg"></div>
<div className="w-full max-w-6xl mx-auto">
<h1 className="text-3xl font-bold text-center mb-8 text-white drop-shadow-lg">Masonry Image Gallery</h1>
<div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
<img alt="1" className="w-full mb-4 rounded-lg shadow-md break-inside-avoid" src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<img alt="2" className="w-full mb-4 rounded-lg shadow-md break-inside-avoid" src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<img alt="3" className="w-full mb-4 rounded-lg shadow-md break-inside-avoid" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<img alt="4" className="w-full mb-4 rounded-lg shadow-md break-inside-avoid" src="https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<img alt="5" className="w-full mb-4 rounded-lg shadow-md break-inside-avoid" src="https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<img alt="6" className="w-full mb-4 rounded-lg shadow-md break-inside-avoid" src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<img alt="7" className="w-full mb-4 rounded-lg shadow-md break-inside-avoid" src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<img alt="8" className="w-full mb-4 rounded-lg shadow-md break-inside-avoid" src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<img alt="9" className="w-full mb-4 rounded-lg shadow-md break-inside-avoid" src="https://images.unsplash.com/photo-1519121782432-2d3c20b8c530?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<img alt="10" className="w-full mb-4 rounded-lg shadow-md break-inside-avoid" src="https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<img alt="11" className="w-full mb-4 rounded-lg shadow-md break-inside-avoid" src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<img alt="12" className="w-full mb-4 rounded-lg shadow-md break-inside-avoid" src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
</div>


    </>
  );
}
