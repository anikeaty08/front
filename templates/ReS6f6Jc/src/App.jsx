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



    document.addEventListener('DOMContentLoaded', function() {
      VANTA.FOG({
        el: "#vanta-bg",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        highlightColor: 0xffc4bc,
        midtoneColor: 0xfffdf9,
        lowlightColor: 0xa6d8ff,
        baseColor: 0xfffdf9,
        blurFactor: 0.40,
        speed: 0.50,
        zoom: 0.60
      });
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
      
<div className="relative min-h-screen overflow-hidden">
<div className="absolute inset-0 z-0 opacity-80" id="vanta-bg"></div>
<nav className="relative z-10 px-6 py-8">
<div className="max-w-6xl mx-auto flex justify-between items-center">
<div className="text-2xl font-medium tracking-tight">prism</div>
<div className="hidden md:flex space-x-8 text-sm font-medium">
<a className="hover:text-gray-600 transition-colors" href="#">Product</a>
<a className="hover:text-gray-600 transition-colors" href="#">Features</a>
<a className="hover:text-gray-600 transition-colors" href="#">Support</a>
<a className="hover:text-gray-600 transition-colors" href="#">Blog</a>
</div>
<div>
<a className="px-5 py-2 text-sm font-medium bg-black text-white rounded-full hover:bg-opacity-90 transition-colors" href="#">
            Buy Now
          </a>
</div>
</div>
</nav>
<main className="relative z-10 px-6 pt-12 pb-24 md:pt-24">
<div className="max-w-6xl mx-auto">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div>
<h1 className="text-5xl md:text-6xl font-medium tracking-tight leading-[1.1] mb-6">
              The webcam that makes you look incredible
            </h1>
<p className="text-lg text-gray-600 mb-8 max-w-lg">
              Professional quality video for everyone. Look your best in every meeting with our AI-powered camera.
            </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="px-6 py-3 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-900 transition-colors" href="#">
                Order Now — $299
              </a>
<a className="px-6 py-3 bg-[#F5F1EA] text-black text-sm font-medium rounded-full hover:bg-gray-200 transition-colors" href="#">
                Watch Demo
              </a>
</div>
<div className="mt-12 flex items-center gap-4">
<div className="flex -space-x-2">
<img alt="User" className="w-8 h-8 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/32.jpg"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/men/44.jpg"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/56.jpg"/>
</div>
<div className="text-sm text-gray-600">
<span className="font-medium">4.9/5</span> from over 2,000 reviews
              </div>
</div>
</div>
<div className="relative">
<div className="absolute -inset-4 bg-gradient-to-r from-[#FFC4BC] to-[#A6D8FF] opacity-30 blur-3xl rounded-full"></div>
<div className="relative bg-[#F5F1EA] rounded-2xl overflow-hidden shadow-xl">
<div className="aspect-[4/3] bg-gray-100 relative">
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-28 h-28 rounded-full bg-black flex items-center justify-center">
<div className="w-20 h-20 rounded-full bg-[#FFFDF9] flex items-center justify-center">
<div className="w-12 h-12 rounded-full bg-black"></div>
</div>
</div>
</div>
</div>
<div className="p-6">
<div className="flex justify-between items-center mb-4">
<div className="text-lg font-medium">Prism C1</div>
<div className="px-3 py-1 bg-black text-white text-xs rounded-full">New</div>
</div>
<div className="text-sm text-gray-600">
                  4K sensor • DSLR quality • AI processing
                </div>
</div>
</div>
</div>
</div>
</div>
</main>
</div>


    </>
  );
}
