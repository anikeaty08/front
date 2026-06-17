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
          fontFamily: { geist: ['Geist', 'sans-serif'] },
          animation: {
            'float': 'float 8s ease-in-out infinite',
            'float-delay-1': 'float 8s ease-in-out 1s infinite',
            'float-delay-2': 'float 8s ease-in-out 2s infinite',
            'float-delay-3': 'float 8s ease-in-out 3s infinite',
            'float-delay-4': 'float 8s ease-in-out 4s infinite',
            'glow': 'glow 8s ease-in-out infinite',
          },
          keyframes: {
            float: {
              '0%': { transform: 'translate(0px, 0px)' },
              '25%': { transform: 'translate(5px, 10px)' },
              '50%': { transform: 'translate(-5px, 5px)' },
              '75%': { transform: 'translate(-8px, -5px)' },
              '100%': { transform: 'translate(0px, 0px)' }
            },
            glow: { 
              '0%, 100%': { opacity: 0.5 }, 
              '50%': { opacity: 0.8 } 
            }
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
<div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 scale-[0.80] rounded-full blur-3xl opacity-40 animate-glow"></div>
<div className="relative shadow-xl bg-gray-900 border border-gray-800 overflow-hidden rounded-2xl flex flex-col">
<div className="p-6 flex justify-center bg-gradient-to-b from-gray-800 to-gray-900 relative">
<div className="w-full h-60 rounded-lg bg-gray-900 border border-gray-800 overflow-hidden relative p-4 flex flex-col justify-center">

<div className="relative mb-12">
<div className="comment-bubble-left bg-gray-800 text-gray-300 text-sm w-fit max-w-[200px]">
              Should we update the schema soon?
            </div>
<div className="absolute -bottom-8 left-3 animate-float-delay-1">
<div className="relative">
<svg className="text-lime-500" fill="none" height="18" viewbox="0 0 17 18" width="17">
<path d="M1.4964 3.11002L4.46428 15.4055C4.73338 16.5204 6.23625 16.7146 6.77997 15.7049L9.5237 10.6094L14.9962 8.65488C16.0841 8.26638 16.108 6.73663 15.0329 6.31426L3.16856 1.65328C2.22708 1.28341 1.25905 2.12672 1.4964 3.11002Z" fill="currentColor" stroke="#1f2937" strokeWidth="1.5"></path>
</svg>
<div className="absolute top-full left-0 mt-1 text-[10px] text-white bg-lime-500 px-1.5 py-0.5 rounded whitespace-nowrap">
                  Morgan
                </div>
</div>
</div>
</div>

<div className="relative ml-auto">
<div className="comment-bubble-right bg-gray-800 text-gray-300 text-sm w-fit max-w-[200px]">
              The migration script needs review first.
            </div>
<div className="absolute -bottom-8 right-3 animate-float">
<div className="relative">
<svg className="text-fuchsia-500" fill="none" height="18" viewbox="0 0 17 18" width="17">
<path d="M15.5036 3.11002L12.5357 15.4055C12.2666 16.5204 10.7637 16.7146 10.22 15.7049L7.4763 10.6094L2.00376 8.65488C0.915938 8.26638 0.891983 6.73663 1.96711 6.31426L13.8314 1.65328C14.7729 1.28341 15.741 2.12672 15.5036 3.11002Z" fill="currentColor" stroke="#1f2937" strokeWidth="1.5"></path>
</svg>
<div className="absolute top-full right-0 mt-1 text-[10px] text-white bg-fuchsia-500 px-1.5 py-0.5 rounded whitespace-nowrap">
                  Lee
                </div>
</div>
</div>
</div>

<div className="absolute top-1/2 left-1/4 animate-float-delay-2">
<div className="relative">
<svg className="text-sky-500" fill="none" height="18" viewbox="0 0 17 18" width="17">
<path d="M15.5036 3.11002L12.5357 15.4055C12.2666 16.5204 10.7637 16.7146 10.22 15.7049L7.4763 10.6094L2.00376 8.65488C0.915938 8.26638 0.891983 6.73663 1.96711 6.31426L13.8314 1.65328C14.7729 1.28341 15.741 2.12672 15.5036 3.11002Z" fill="currentColor" stroke="#1f2937" strokeWidth="1.5"></path>
</svg>
<div className="absolute top-full right-0 mt-1 text-[10px] text-white bg-sky-500 px-1.5 py-0.5 rounded whitespace-nowrap">
                Riley
              </div>
</div>
</div>
<div className="absolute bottom-1/3 right-1/3 animate-float-delay-3">
<div className="relative">
<svg className="text-emerald-500" fill="none" height="18" viewbox="0 0 17 18" width="17">
<path d="M1.4964 3.11002L4.46428 15.4055C4.73338 16.5204 6.23625 16.7146 6.77997 15.7049L9.5237 10.6094L14.9962 8.65488C16.0841 8.26638 16.108 6.73663 15.0329 6.31426L3.16856 1.65328C2.22708 1.28341 1.25905 2.12672 1.4964 3.11002Z" fill="currentColor" stroke="#1f2937" strokeWidth="1.5"></path>
</svg>
<div className="absolute top-full left-0 mt-1 text-[10px] text-white bg-emerald-500 px-1.5 py-0.5 rounded whitespace-nowrap">
                Casey
              </div>
</div>
</div>
<div className="absolute top-1/4 right-1/4 animate-float-delay-4">
<div className="relative">
<svg className="text-orange-500" fill="none" height="18" viewbox="0 0 17 18" width="17">
<path d="M1.4964 3.11002L4.46428 15.4055C4.73338 16.5204 6.23625 16.7146 6.77997 15.7049L9.5237 10.6094L14.9962 8.65488C16.0841 8.26638 16.108 6.73663 15.0329 6.31426L3.16856 1.65328C2.22708 1.28341 1.25905 2.12672 1.4964 3.11002Z" fill="currentColor" stroke="#1f2937" strokeWidth="1.5"></path>
</svg>
<div className="absolute top-full left-0 mt-1 text-[10px] text-white bg-orange-500 px-1.5 py-0.5 rounded whitespace-nowrap">
                Robin
              </div>
</div>
</div>
</div>
</div>
<div className="w-full h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-20"></div>
<div className="p-6">
<span className="inline-block px-3 py-1 bg-lime-900/50 text-lime-300 rounded-full text-xs font-medium mb-3">Feedback</span>
<h3 className="text-xl font-medium text-white mb-2">Live Team Feedback</h3>
<p className="text-gray-400 mb-4 leading-relaxed text-sm">
          Get instant feedback from your team with real-time comments and live cursors. Resolve questions and track input directly as you work together.
        </p>
<div className="flex justify-between items-center">
<a className="text-lime-400 hover:text-lime-300 transition flex items-center text-sm font-medium" href="#">
            Give Feedback
            <svg className="w-4 h-4 ml-1" fill="none" viewbox="0 0 24 24"><path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<span className="text-gray-500 text-xs">Live demo</span>
</div>
</div>
</div>
</div>

    </>
  );
}
