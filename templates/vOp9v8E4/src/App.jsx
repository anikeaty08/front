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



        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        'geist': ['Geist', 'sans-serif'],
                    }
                }
            }
        }
    
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
      
<div className="w-full relative max-w-md">

<div className="absolute inset-0 h-full w-full bg-gradient-to-r from-white to-white transform scale-[0.80] rounded-full blur-3xl opacity-60"></div>

<div className="relative shadow-xl bg-gray-900 border border-gray-800 px-6 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">

<div className="mb-6 text-white opacity-80">
<svg fill="none" height="36" stroke="currentColor" strokeWidth="1" viewbox="0 0 45 36" width="45" xmlns="http://www.w3.org/2000/svg">
<path d="M13.296 35.736C9.52 35.736 6.424 34.472 4.008 31.944C1.592 29.416 0.384 26.024 0.384 21.768C0.384 18.376 1.208 15.112 2.856 11.976C4.504 8.84 6.664 6.024 9.336 3.528C12.008 1.032 14.92 -0.152 18.072 0.024L19.992 5.736C17.32 6.168 14.92 7.368 12.792 9.336C10.664 11.304 9.4 13.528 9 16.008C10.072 15.32 11.4 14.976 12.984 14.976C15.656 14.976 17.944 15.864 19.848 17.64C21.752 19.416 22.704 21.896 22.704 25.08C22.704 28.152 21.688 30.616 19.656 32.472C17.624 34.648 15.704 35.736 13.296 35.736ZM35.304 35.736C31.528 35.736 28.432 34.472 26.016 31.944C23.6 29.416 22.392 26.024 22.392 21.768C22.392 18.376 23.216 15.112 24.864 11.976C26.512 8.84 28.672 6.024 31.344 3.528C34.016 1.032 36.928 -0.152 40.08 0.024L42 5.736C39.328 6.168 36.928 7.368 34.8 9.336C32.672 11.304 31.408 13.528 31.008 16.008C32.08 15.32 33.408 14.976 34.992 14.976C37.664 14.976 39.952 15.864 41.856 17.64C43.76 19.416 44.712 21.896 44.712 25.08C44.712 28.152 43.696 30.616 41.664 32.472C39.632 34.648 37.712 35.736 35.304 35.736Z"></path>
</svg>
</div>

<p className="font-light text-xl text-white mb-8 relative z-50 leading-relaxed">
                The dashboard completely transformed how our team works. The intuitive interface and powerful analytics have helped us make better decisions faster than ever before.
            </p>

<div className="w-full h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-20 mb-6"></div>

<div className="flex items-center mt-2 relative z-50">
<img alt="Sarah Johnson" className="h-12 w-12 rounded-full mr-4 border border-white border-opacity-30" src="https://randomuser.me/api/portraits/women/42.jpg"/>
<div>
<h3 className="font-normal text-white">Sarah Johnson</h3>
<p className="text-gray-400 text-sm font-light">Product Manager, Aura</p>
</div>
</div>
</div>
</div>

    </>
  );
}
