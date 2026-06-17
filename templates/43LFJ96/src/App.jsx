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



    // Card click
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
      option.addEventListener('click', function() {
        if (this.classList.contains('active')) return;
        const currentActive = document.querySelector('.option.active');
        if(currentActive) currentActive.classList.remove('active');
        this.classList.add('active');
      });
    });

    // Entrance animation: staggered slide-fade in from left
    window.addEventListener('DOMContentLoaded', () => {
      const optionElements = document.querySelectorAll('.option');
      optionElements.forEach((el, i) => {
        setTimeout(() => {
          el.classList.add('animated');
        }, 180 * i); // 180ms between each
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
      
<div className="w-full max-w-2xl px-6 mt-8 mb-2 text-center">
<h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3 tracking-tight drop-shadow-lg fade-in-top delay-1">Escape in Style</h1>
<p className="text-lg md:text-xl text-gray-300 font-medium max-w-xl mx-auto fade-in-top delay-2">Discover luxurious camping experiences in nature’s most breathtaking spots.</p>
</div>
<div className="h-12"></div>
<div className="options flex w-full max-w-[900px] min-w-[600px] h-[400px] mx-0 items-stretch overflow-hidden relative">

<div className="option active" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&amp'}}>
<div className="shadow"></div>
<div className="label">
<div className="icon border-white">
<i className="fas fa-campground"></i>
</div>
<div className="info text-white whitespace-pre relative">
<div className="main font-bold text-lg">Luxury Tent</div>
<div className="sub text-base text-gray-300">Cozy glamping under the stars</div>
</div>
</div>
</div>

<div className="option" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&amp'}}>
<div className="shadow"></div>
<div className="label">
<div className="icon border-white">
<i className="fas fa-fire"></i>
</div>
<div className="info text-white whitespace-pre relative">
<div className="main font-bold text-lg">Campfire Feast</div>
<div className="sub text-base text-gray-300">Gourmet s'mores &amp; stories</div>
</div>
</div>
</div>

<div className="option" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&amp'}}>
<div className="shadow"></div>
<div className="label">
<div className="icon border-white">
<i className="fas fa-water"></i>
</div>
<div className="info text-white whitespace-pre relative">
<div className="main font-bold text-lg">Lakeside Retreat</div>
<div className="sub text-base text-gray-300">Private dock &amp; canoe rides</div>
</div>
</div>
</div>

<div className="option" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&amp'}}>
<div className="shadow"></div>
<div className="label">
<div className="icon border-white">
<i className="fas fa-hot-tub"></i>
</div>
<div className="info text-white whitespace-pre relative">
<div className="main font-bold text-lg">Mountain Spa</div>
<div className="sub text-base text-gray-300">Outdoor sauna &amp; hot tub</div>
</div>
</div>
</div>

<div className="option" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&amp'}}>
<div className="shadow"></div>
<div className="label">
<div className="icon border-white">
<i className="fas fa-hiking"></i>
</div>
<div className="info text-white whitespace-pre relative">
<div className="main font-bold text-lg">Guided Adventure</div>
<div className="sub text-base text-gray-300">Expert-led nature tours</div>
</div>
</div>
</div>
</div>


    </>
  );
}
