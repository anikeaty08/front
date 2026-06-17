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



    // Vanta Network BG
    document.addEventListener('DOMContentLoaded', function() {
      VANTA.NET({
        el: "#vanta-canvas",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        scale: 1,
        scaleMobile: 1,
        color: 0x60a5fa,
        backgroundColor: 0x030712,
        points: 14,
        maxDistance: 20,
        spacing: 18,
        showDots: true
      });

      // Animated Letters for title
      function animateLetters(elementId, text) {
        const container = document.getElementById(elementId);
        container.innerHTML = "";
        [...text].forEach((char, i) => {
          const span = document.createElement('span');
          span.textContent = char;
          span.className = "letter-animate";
          span.style.animationDelay = (i * 60) + "ms";
          container.appendChild(span);
        });
      }

      animateLetters('animated-title', 'Network Insights');
      animateLetters('animated-welcome', 'Welcome Back');
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
      
<div className="max-w-3xl w-full relative bg-black/60 rounded-2xl shadow-2xl border border-gray-800 flex flex-col md:flex-row overflow-hidden">

<div className="md:w-1/2 w-full p-8 flex flex-col justify-center z-10 bg-gray-900/80">
<div className="max-w-sm mx-auto w-full">
<div className="mb-8 text-center">
<span className="uppercase text-xs bg-gray-800 px-3 py-1 rounded-full text-gray-400 tracking-wide">Sign in</span>
<h2 className="text-2xl font-bold text-white mt-4" id="animated-welcome"></h2>
<p className="text-gray-400 mt-2 text-sm">Log in to your network dashboard</p>
</div>
<form className="space-y-5">
<div>
<label className="block text-xs text-gray-300 font-semibold mb-2" htmlFor="email">Email</label>
<input autocomplete="username" className="appearance-none w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition" id="email" placeholder="you@example.com" type="email"/>
</div>
<div>
<label className="block text-xs text-gray-300 font-semibold mb-2" htmlFor="password">Password</label>
<input autocomplete="current-password" className="appearance-none w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition" id="password" placeholder="••••••••" type="password"/>
</div>
<div className="flex items-center justify-between">
<label className="flex items-center text-xs text-gray-400">
<input className="accent-blue-500 mr-2" type="checkbox"/>
              Remember me
            </label>
<a className="text-xs text-blue-400 hover:underline" href="#">Forgot password?</a>
</div>
<button className="w-full py-2 mt-2 rounded-lg bg-blue-600 hover:bg-blue-700 font-semibold text-white flex items-center justify-center gap-2 transition shadow-md" type="submit">
            Log In
          </button>
</form>
<div className="mt-5 text-center text-xs text-gray-500">
          Don’t have an account?
          <a className="ml-1 text-blue-400 hover:underline" href="#">Sign up</a>
</div>
</div>
</div>

<div className="md:w-1/2 w-full relative min-h-[420px] flex items-center justify-center">
<div className="absolute inset-0" id="vanta-canvas"></div>
<div className="relative z-10 flex flex-col items-center justify-center h-full w-full text-white">
<span className="px-3 py-1 text-xs bg-black/60 rounded-full text-gray-300 tracking-wide">NETWORK VISUAL</span>
<h2 className="mt-4 text-2xl font-bold" id="animated-title"></h2>
<p className="mt-2 text-gray-300 text-sm max-w-xs text-center">Visualize your secure, real-time infrastructure from here.</p>
</div>
</div>
</div>


    </>
  );
}
