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
      
<div className="max-w-fit rounded-2xl flex flex-col items-center justify-center gap-4 backdrop-blur-lg shadow-[inset_0_0_20px_rgba(255,255,255,0.19),inset_0_0_5px_rgba(255,255,255,0.27),0_5px_5px_rgba(0,0,0,0.16)] transition duration-500 hover:bg-gray-300/10">
<ul className="p-4 flex flex-row gap-6 items-end justify-center list-none">

<li className="iso-pro relative cursor-pointer flex flex-col items-center">
<span></span>
<span></span>
<span></span>
<a className="relative z-10 flex flex-col items-center" href="#">
<div className="icon-wrapper flex items-center justify-center bg-black rounded-xl w-[60px] h-[60px] transition-all duration-300">
<svg className="fill-white" height="44" viewBox="0 0 320 512" width="44" xmlns="http://www.w3.org/2000/svg">
<path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
</svg>
</div>
<div className="text absolute mt-2 text-sm font-medium text-black bg-white/50 rounded px-2 py-0.5 shadow-[-5px_0_1px_rgba(153,153,153,0.2),-10px_0_1px_rgba(153,153,153,0.2),inset_0_0_20px_rgba(0,0,0,0.12),inset_0_0_5px_rgba(0,0,0,0.18),0_5px_5px_rgba(0,0,0,0.08)] whitespace-nowrap">
            Facebook
          </div>
</a>
</li>

<li className="iso-pro relative cursor-pointer flex flex-col items-center">
<span></span>
<span></span>
<span></span>
<a className="relative z-10 flex flex-col items-center" href="#">
<div className="icon-wrapper flex items-center justify-center bg-black rounded-xl w-[60px] h-[60px] transition-all duration-300">
<svg className="fill-white" height="44" viewBox="0 0 448 512" width="44" xmlns="http://www.w3.org/2000/svg">
<path d="M442.6 32H312.7L224 150.2 135.3 32H5.4l171 227.7L5.4 480h129.9l88.7-118.2L312.7 480h129.9L271.5 259.7 442.6 32zm-66.4 400l-88.2-117.6L123.8 432H76.9l130.8-173.5L76.9 80h46.9l88.2 117.6L324.2 80h46.9L240.3 253.5 371.1 432h-46.9z"></path>
</svg>
</div>
<div className="text absolute mt-2 text-sm font-medium text-black bg-white/50 rounded px-2 py-0.5 shadow-[-5px_0_1px_rgba(153,153,153,0.2),-10px_0_1px_rgba(153,153,153,0.2),inset_0_0_20px_rgba(0,0,0,0.12),inset_0_0_5px_rgba(0,0,0,0.18),0_5px_5px_rgba(0,0,0,0.08)] whitespace-nowrap">
            X
          </div>
</a>
</li>

<li className="iso-pro relative cursor-pointer flex flex-col items-center">
<span></span>
<span></span>
<span></span>
<a className="relative z-10 flex flex-col items-center" href="#">
<div className="icon-wrapper flex items-center justify-center bg-black rounded-xl w-[60px] h-[60px] transition-all duration-300">
<svg className="fill-white" height="44" viewBox="0 0 448 512" width="44" xmlns="http://www.w3.org/2000/svg">
<path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
</svg>
</div>
<div className="text absolute mt-2 text-sm font-medium text-black bg-white/50 rounded px-2 py-0.5 shadow-[-5px_0_1px_rgba(153,153,153,0.2),-10px_0_1px_rgba(153,153,153,0.2),inset_0_0_20px_rgba(0,0,0,0.12),inset_0_0_5px_rgba(0,0,0,0.18),0_5px_5px_rgba(0,0,0,0.08)] whitespace-nowrap">
            Instagram
          </div>
</a>
</li>

<li className="iso-pro relative cursor-pointer flex flex-col items-center">
<span></span>
<span></span>
<span></span>
<a className="relative z-10 flex flex-col items-center" href="#">
<div className="icon-wrapper flex items-center justify-center bg-black rounded-xl w-[60px] h-[60px] transition-all duration-300">
<svg className="fill-white" height="44" viewBox="0 0 448 512" width="44" xmlns="http://www.w3.org/2000/svg">
<path d="M100.28 448H7.4V148.9h92.88zm-46.44-340.7a53.79 53.79 0 1 1 0-107.58 53.79 53.79 0 0 1 0 107.58zM447.8 448h-92.4V302.4c0-34.7-12.4-58.4-43.3-58.4-23.6 0-37.6 15.9-43.7 31.3-2.3 5.6-2.8 13.3-2.8 21.1V448h-92.5s1.2-266.9 0-294.1h92.5v41.7c12.3-19 34.3-46 83.5-46 60.9 0 106.6 39.8 106.6 125.3V448z"></path>
</svg>
</div>
<div className="text absolute mt-2 text-sm font-medium text-black bg-white/50 rounded px-2 py-0.5 shadow-[-5px_0_1px_rgba(153,153,153,0.2),-10px_0_1px_rgba(153,153,153,0.2),inset_0_0_20px_rgba(0,0,0,0.12),inset_0_0_5px_rgba(0,0,0,0.18),0_5px_5px_rgba(0,0,0,0.08)] whitespace-nowrap">
            LinkedIn
          </div>
</a>
</li>
</ul>
</div>

    </>
  );
}
