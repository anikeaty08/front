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



    particlesJS('particles-js', {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#d4d4d8" },
        shape: { type: "circle" },
        opacity: { value: 0.4, random: false },
        size: { value: 3, random: true },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#a1a1aa",
          opacity: 0.3,
          width: 1
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "repulse" },
          onclick: { enable: true, mode: "push" },
          resize: true
        },
        modes: {
          repulse: { distance: 100, duration: 0.4 },
          push: { particles_nb: 4 }
        }
      },
      retina_detect: true
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
      
<div className="max-w-4xl w-full bg-white backdrop-blur-lg rounded-2xl overflow-hidden beautiful-shadow border border-neutral-200 flex flex-col md:flex-row">

<div className="md:w-1/2 h-72 md:h-auto relative bg-gradient-to-br from-neutral-900 to-neutral-800" id="particles-container">
<div id="particles-js"></div>
<div className="absolute top-6 left-6 z-10">
<span className="px-3 py-1 bg-neutral-700/80 rounded-full text-xs text-neutral-300 mb-3 inline-block">NETWORK</span>
<h2 className="heading-font text-3xl text-white">Join Our</h2>
<h2 className="heading-font text-3xl text-white">Community</h2>
<div className="h-1 w-16 bg-neutral-400 mt-3 rounded-full"></div>
</div>
<div className="absolute bottom-6 left-6 bg-neutral-800/80 backdrop-blur-sm rounded-lg px-4 py-3 z-10 border border-neutral-700">
<div className="text-xs text-neutral-400 mb-1">Active Members</div>
<div className="heading-font text-lg text-neutral-200">12,847</div>
</div>
</div>

<div className="md:w-1/2 p-8 bg-white">
<div>
<span className="px-3 py-1 bg-neutral-100 rounded-full text-xs text-neutral-500 mb-4 inline-block">GET STARTED</span>
<h3 className="heading-font text-2xl text-neutral-800 mb-2">Create Account</h3>
<p className="text-neutral-500 text-sm mb-8">Join thousands of professionals in our growing network</p>
<form className="space-y-5">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-neutral-600 mb-2 tracking-wide">FIRST NAME</label>
<input className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-neutral-400 transition text-sm" placeholder="John" type="text" />
</div>
<div>
<label className="block text-xs font-medium text-neutral-600 mb-2 tracking-wide">LAST NAME</label>
<input className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-neutral-400 transition text-sm" placeholder="Doe" type="text" />
</div>
</div>
<div>
<label className="block text-xs font-medium text-neutral-600 mb-2 tracking-wide">EMAIL ADDRESS</label>
<input className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-neutral-400 transition text-sm" placeholder="john@company.com" type="email" />
</div>
<div>
<label className="block text-xs font-medium text-neutral-600 mb-2 tracking-wide">PASSWORD</label>
<input className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-neutral-400 transition text-sm" placeholder="••••••••" type="password" />
</div>
<div className="flex items-start">
<input className="w-4 h-4 bg-neutral-50 border border-neutral-300 rounded mt-0.5" id="terms" type="checkbox" />
<label className="ml-3 text-xs text-neutral-500 leading-relaxed" htmlFor="terms">
              I agree to the <span className="text-neutral-700 underline">Terms of Service</span> and <span className="text-neutral-700 underline">Privacy Policy</span>
</label>
</div>
<button className="w-full px-6 py-3 bg-neutral-700 hover:bg-neutral-600 text-white rounded-lg transition heading-font text-sm flex items-center justify-center" type="submit">
            Create Account
            <svg className="h-4 w-4 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" fillRule="evenodd"></path>
</svg>
</button>
</form>
<div className="mt-6 pt-6 border-t border-neutral-200 text-center">
<p className="text-xs text-neutral-500">
            Already have an account? 
            <a className="text-neutral-700 hover:text-neutral-800 underline transition" href="#">Sign in</a>
</p>
</div>
</div>
</div>
</div>


    </>
  );
}
