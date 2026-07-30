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



    // Card order, [0,1,2] means card 0 is front, 1 is middle, 2 is back
    const transforms = [
      {
        z: 30,
        transform: "rotateY(0deg) rotateX(0deg) translateY(0px) translateX(0px) scale(1)"
      },
      {
        z: 20,
        transform: "rotateY(8deg) rotateX(1deg) translateY(8px) translateX(9px) scale(0.97)"
      },
      {
        z: 10,
        transform: "rotateY(-13deg) rotateX(-2deg) translateY(26px) translateX(-18px) scale(0.94)"
      }
    ];

    let order = [0, 1, 2]; // front, middle, back

    function updateCards() {
      const cards = document.querySelectorAll('.swap-card');
      cards.forEach((card, i) => {
        const cardOrder = order.indexOf(parseInt(card.dataset.index));
        card.style.zIndex = transforms[cardOrder].z;
        card.style.transform = transforms[cardOrder].transform;
        if (cardOrder === 0) {
          card.classList.add('cursor-pointer');
        } else {
          card.classList.remove('cursor-pointer');
        }
      });
    }

    // Click to swap
    document.getElementById('card-stack').addEventListener('click', function(e) {
      // Only swap if the front card was clicked (z-30)
      const cards = Array.from(document.querySelectorAll('.swap-card'));
      const frontCard = cards.find(card => order.indexOf(parseInt(card.dataset.index)) === 0);
      if (frontCard && (frontCard === e.target || frontCard.contains(e.target))) {
        // Cycle the order
        order.push(order.shift());
        updateCards();
      }
    });

    updateCards();
  
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
      

<div className="fixed inset-0 w-full h-full -z-20">
<iframe allowfullscreen="" aria-hidden="true" className="w-full h-full" frameborder="0" height="100%" src="https://my.spline.design/herolightcopy-HWuYMA6IdNGk0VGuyvrItNGB/" style={{pointerEvents: `none`}} tabindex="-1" width="100%"></iframe>
</div>

<div className="flex items-center justify-center min-h-screen">
<div className="relative w-[44vmin] h-[62vmin] flex items-center justify-center" id="card-stack" style={{perspective: `1200px`}}>

<div className="swap-card absolute top-0 left-0 w-full h-full preserve-3d cursor-pointer transition-all duration-300 ease-in-out z-30" data-index="0" style={{transform: `rotateY(0deg) rotateX(0deg) translateY(0px) translateX(0px) scale(1)`}}>
<div className="relative w-full h-full flex flex-col justify-between rounded-2xl bg-white shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_16px_44px_0_rgba(0,0,0,0.13)] hover:shadow-[0_20px_60px_0_rgba(0,0,0,0.20),0px_0px_0px_2px_rgba(37,99,235,0.21)]">
<svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" fill="none" height="26vmin" viewBox="0 0 200 200" width="26vmin">
<circle cx="100" cy="100" r="94" stroke="#2563eb" strokeWidth="2"></circle>
<ellipse cx="100" cy="100" fill="none" rx="94" ry="30" stroke="#2563eb" strokeWidth="1"></ellipse>
<ellipse cx="100" cy="100" fill="none" opacity="0.7" rx="94" ry="55" stroke="#2563eb" strokeWidth="1"></ellipse>
<ellipse cx="100" cy="100" fill="none" opacity="0.35" rx="94" ry="80" stroke="#2563eb" strokeWidth="1"></ellipse>
<ellipse cx="100" cy="100" fill="none" rx="30" ry="94" stroke="#2563eb" strokeWidth="1"></ellipse>
<ellipse cx="100" cy="100" fill="none" opacity="0.7" rx="55" ry="94" stroke="#2563eb" strokeWidth="1"></ellipse>
<ellipse cx="100" cy="100" fill="none" opacity="0.35" rx="80" ry="94" stroke="#2563eb" strokeWidth="1"></ellipse>
<line opacity="0.5" stroke="#2563eb" strokeDasharray="7 3" strokeWidth="1" x1="100" x2="100" y1="6" y2="194"></line>
<line opacity="0.5" stroke="#2563eb" strokeDasharray="7 3" strokeWidth="1" x1="6" x2="194" y1="100" y2="100"></line>
</svg>
<div className="absolute inset-0 flex flex-col justify-between pointer-events-none select-none">
<div className="flex justify-between items-start px-5 pt-4 text-[1.05rem] text-neutral-800">
<div>
<div className="font-bold">Stack #3</div>
<div className="text-xs opacity-75">Front Card</div>
</div>
<div className="font-bold text-base">A03</div>
</div>
<div className="flex justify-between items-end px-5 pb-4 text-xs text-neutral-700">
<div>@sphere</div>
<div></div>
</div>
</div>
</div>
</div>

<div className="swap-card absolute top-0 left-0 w-full h-full preserve-3d transition-all duration-300 ease-in-out z-20" data-index="1" style={{transform: `rotateY(8deg) rotateX(1deg) translateY(8px) translateX(9px) scale(0.97)`}}>
<div className="relative w-full h-full flex flex-col justify-between rounded-2xl bg-white shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04),0px_8px_28px_-4px_rgba(0,0,0,0.07)]">
<svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" fill="none" height="26vmin" viewBox="0 0 200 200" width="26vmin">
<circle cx="100" cy="100" r="94" stroke="#34d399" strokeWidth="2"></circle>
<ellipse cx="100" cy="100" fill="none" rx="94" ry="30" stroke="#34d399" strokeWidth="1"></ellipse>
<ellipse cx="100" cy="100" fill="none" opacity="0.7" rx="94" ry="55" stroke="#34d399" strokeWidth="1"></ellipse>
<ellipse cx="100" cy="100" fill="none" opacity="0.35" rx="94" ry="80" stroke="#34d399" strokeWidth="1"></ellipse>
<ellipse cx="100" cy="100" fill="none" rx="30" ry="94" stroke="#34d399" strokeWidth="1"></ellipse>
<ellipse cx="100" cy="100" fill="none" opacity="0.7" rx="55" ry="94" stroke="#34d399" strokeWidth="1"></ellipse>
<ellipse cx="100" cy="100" fill="none" opacity="0.35" rx="80" ry="94" stroke="#34d399" strokeWidth="1"></ellipse>
<line opacity="0.5" stroke="#34d399" strokeDasharray="7 3" strokeWidth="1" x1="100" x2="100" y1="6" y2="194"></line>
<line opacity="0.5" stroke="#34d399" strokeDasharray="7 3" strokeWidth="1" x1="6" x2="194" y1="100" y2="100"></line>
</svg>
<div className="absolute inset-0 flex flex-col justify-between pointer-events-none select-none">
<div className="flex justify-between items-start px-5 pt-4 text-[1.05rem] text-neutral-800">
<div>
<div className="font-bold">Stack #2</div>
<div className="text-xs opacity-75">Middle Card</div>
</div>
<div className="font-bold text-base">A02</div>
</div>
<div className="flex justify-between items-end px-5 pb-4 text-xs text-neutral-700">
<div>@sphere</div>
<div></div>
</div>
</div>
</div>
</div>

<div className="swap-card absolute top-0 left-0 w-full h-full preserve-3d transition-all duration-300 ease-in-out z-10" data-index="2" style={{transform: `rotateY(-13deg) rotateX(-2deg) translateY(26px) translateX(-18px) scale(0.94)`}}>
<div className="relative w-full h-full flex flex-col justify-between rounded-2xl bg-white shadow-[0px_0px_0px_1px_rgba(0,0,0,0.03),0px_4px_16px_-2px_rgba(0,0,0,0.04)]">
<svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" fill="none" height="26vmin" viewBox="0 0 200 200" width="26vmin">
<circle cx="100" cy="100" r="94" stroke="#d946ef" strokeWidth="2"></circle>
<ellipse cx="100" cy="100" fill="none" rx="94" ry="30" stroke="#d946ef" strokeWidth="1"></ellipse>
<ellipse cx="100" cy="100" fill="none" opacity="0.7" rx="94" ry="55" stroke="#d946ef" strokeWidth="1"></ellipse>
<ellipse cx="100" cy="100" fill="none" opacity="0.35" rx="94" ry="80" stroke="#d946ef" strokeWidth="1"></ellipse>
<ellipse cx="100" cy="100" fill="none" rx="30" ry="94" stroke="#d946ef" strokeWidth="1"></ellipse>
<ellipse cx="100" cy="100" fill="none" opacity="0.7" rx="55" ry="94" stroke="#d946ef" strokeWidth="1"></ellipse>
<ellipse cx="100" cy="100" fill="none" opacity="0.35" rx="80" ry="94" stroke="#d946ef" strokeWidth="1"></ellipse>
<line opacity="0.5" stroke="#d946ef" strokeDasharray="7 3" strokeWidth="1" x1="100" x2="100" y1="6" y2="194"></line>
<line opacity="0.5" stroke="#d946ef" strokeDasharray="7 3" strokeWidth="1" x1="6" x2="194" y1="100" y2="100"></line>
</svg>
<div className="absolute inset-0 flex flex-col justify-between pointer-events-none select-none">
<div className="flex justify-between items-start px-5 pt-4 text-[1.05rem] text-neutral-800">
<div>
<div className="font-bold">Stack #1</div>
<div className="text-xs opacity-75">Back Card</div>
</div>
<div className="font-bold text-base">A01</div>
</div>
<div className="flex justify-between items-end px-5 pb-4 text-xs text-neutral-700">
<div>@sphere</div>
<div></div>
</div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
