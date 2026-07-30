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



    const slides = [
      "https://cdn.midjourney.com/e5b4d02f-8d2d-461a-bda1-9da06745c53d/0_0.png",
      "https://cdn.midjourney.com/b0ad527e-4204-493e-9d20-334d36e18515/0_3.png",
      "https://cdn.midjourney.com/a18ef716-0da5-490a-9435-e1d0e822900e/0_2.png",
      "https://cdn.midjourney.com/e7f73911-7831-48ae-a9d2-b55c782dd157/0_3.png"
    ];

    let current = 0;
    const imgEl = document.getElementById('slideImg');
    const dots = document.querySelectorAll('.dot');

    function updateSlide(index) {
      current = index;
      imgEl.src = slides[current];
      dots.forEach((d, i) => d.classList.toggle('bg-gray-800', i === current));
      dots.forEach((d, i) => d.classList.toggle('bg-gray-300', i !== current));
    }

    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => updateSlide(i));
    });

    setInterval(() => {
      updateSlide((current + 1) % slides.length);
    }, 5000);

    lucide.createIcons();
  
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
      <div className="spline-container fixed top-0 w-full h-screen -z-10"><iframe frameborder="0" height="100%" src="https://my.spline.design/flowingribbon-TlkEaNrvCCNZuJBNJN3LXpRF" width="100%"></iframe></div>

<div className="relative w-full max-w-xs sm:max-w-md opacity-0 translate-y-6" style={{animation: `fadeInSlide 0.8s ease-out forwards`}}>
<div className="absolute inset-0 rounded-[2.25rem] bg-gradient-to-br from-emerald-400 via-cyan-500 to-indigo-500 blur-3xl opacity-30 pointer-events-none" id="glow"></div>
<div className="relative rounded-3xl overflow-hidden shadow-xl bg-white p-1">
<img alt="Gallery" className="w-full h-72 sm:h-96 select-none object-cover rounded-3xl" id="slideImg" src="https://cdn.midjourney.com/e7f73911-7831-48ae-a9d2-b55c782dd157/0_3.png" style={{}} />
<button className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/70 backdrop-blur flex items-center justify-center hover:bg-white/90 transition-all duration-200 hover:scale-105" id="moreBtn">
<svg className="lucide lucide-more-horizontal w-5 h-5 stroke-2 text-gray-700" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>

<div className="flex items-center justify-center gap-2 mt-4">
<button className="dot w-2.5 h-2.5 rounded-full transition-all duration-200 hover:scale-110 bg-gray-300"></button>
<button className="dot w-2.5 h-2.5 rounded-full transition-all duration-200 hover:scale-110 bg-gray-300"></button>
<button className="dot w-2.5 h-2.5 rounded-full transition-all duration-200 hover:scale-110 bg-gray-300"></button>
<button className="dot w-2.5 h-2.5 rounded-full transition-all duration-200 hover:scale-110 bg-gray-800"></button>
</div>
</div>

<div className="w-full max-w-4xl mt-14 opacity-0 translate-y-6" style={{animation: `fadeInSlide 0.8s ease-out 0.2s forwards`}}>
<div className="flex items-center justify-between mb-6 px-2">
<h2 className="text-sm font-semibold tracking-wide text-gray-700 font-geist">EXPLORE CATEGORIES</h2>
<button className="text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors duration-200 font-geist">VIEW ALL</button>
</div>
<div className="flex overflow-x-auto hide-scrollbar gap-8 pt-2 pr-2 pl-2">

<div className="flex-shrink-0 flex flex-col items-center w-24 opacity-0 translate-y-4" style={{animation: `fadeInSlide 0.6s ease-out 0.4s forwards`}}>
<img alt="Landscapes" className="w-16 h-16 ring-2 ring-white hover:shadow-lg transition-all duration-200 hover:scale-105 object-cover rounded-full shadow-md" src="https://cdn.midjourney.com/aa0bfedd-e749-4510-a536-6b7f289b4b1d/0_3.png?w=800&q=80" style={{}} />
<span className="mt-3 text-sm font-geist">Landscapes</span>
</div>

<div className="flex-shrink-0 flex flex-col items-center w-24 opacity-0 translate-y-4" style={{animation: `fadeInSlide 0.6s ease-out 0.5s forwards`}}>
<img alt="Ocean" className="w-16 h-16 rounded-full object-cover ring-2 ring-white shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105" src="https://cdn.midjourney.com/ff469743-a422-4f94-9180-dd7715886658/0_0.png?w=800&q=80" style={{}} />
<span className="mt-3 text-sm font-geist">Ocean</span>
</div>

<div className="flex-shrink-0 flex flex-col items-center w-24 opacity-0 translate-y-4" style={{animation: `fadeInSlide 0.6s ease-out 0.6s forwards`}}>
<img alt="Frost" className="w-16 h-16 rounded-full object-cover ring-2 ring-white shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105" src="https://cdn.midjourney.com/e7f73911-7831-48ae-a9d2-b55c782dd157/0_0.png?w=800&q=80" style={{}} />
<span className="mt-3 text-sm font-geist">Frost</span>
</div>

<div className="flex-shrink-0 flex flex-col items-center w-24 opacity-0 translate-y-4" style={{animation: `fadeInSlide 0.6s ease-out 0.7s forwards`}}>
<img alt="Fashion" className="w-16 h-16 rounded-full object-cover ring-2 ring-white shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105" src="https://cdn.midjourney.com/090366e9-d607-41ae-8738-66a6ebc15eb4/0_1.png?w=800&q=80" />
<span className="mt-3 text-sm text-center font-geist">Fashion</span>
</div>

<div className="flex-shrink-0 flex flex-col items-center w-24 opacity-0 translate-y-4" style={{animation: `fadeInSlide 0.6s ease-out 0.8s forwards`}}>
<img alt="Romance" className="w-16 h-16 rounded-full object-cover ring-2 ring-white shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105" src="https://cdn.midjourney.com/1a829c4a-d55f-401e-8986-e65db242cd73/0_3.png?w=800&q=80" />
<span className="mt-3 text-sm font-geist">Romance</span>
</div>

<div className="flex-shrink-0 flex flex-col items-center w-24 opacity-0 translate-y-4" style={{animation: `fadeInSlide 0.6s ease-out 0.9s forwards`}}>
<img alt="Royalty" className="w-16 h-16 rounded-full object-cover ring-2 ring-white shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105" src="https://cdn.midjourney.com/43fa584b-0435-40c0-982f-be0752cc9ea0/0_3.png?w=800&q=80" />
<span className="mt-3 text-sm font-geist">Royalty</span>
</div>
</div>
</div>



    </>
  );
}
