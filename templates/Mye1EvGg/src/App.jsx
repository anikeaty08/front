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
      const container = document.getElementById('meteor-container');
      const meteorCount = 15;
      
      for (let i = 0; i < meteorCount; i++) {
        const meteor = document.createElement('div');
        meteor.classList.add('meteor');
        
        const delay = Math.random() * 5;
        const duration = Math.random() * 6 + 3;
        const topPosition = Math.random() * 100;
        const leftPosition = Math.floor(Math.random() * 300) - 300;
        
        meteor.style.top = `${topPosition}%`;
        meteor.style.left = `${leftPosition}px`;
        meteor.style.animationDelay = `${delay}s`;
        meteor.style.animationDuration = `${duration}s`;
        
        if (i % 3 === 0) {
          meteor.style.background = 'rgba(99, 102, 241, 0.8)';
          meteor.style.boxShadow = '0 0 1px rgba(99, 102, 241, 0.3)';
        } else if (i % 4 === 0) {
          meteor.style.background = 'rgba(129, 140, 248, 0.8)';
          meteor.style.boxShadow = '0 0 1px rgba(129, 140, 248, 0.3)';
        }
        
        container.appendChild(meteor);
      }
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
      
<div className="max-w-sm w-full bg-gray-900/60 backdrop-blur-sm rounded-xl overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.3)] border border-gray-800/30">
<div className="relative h-full">
<div className="absolute inset-0 overflow-hidden" id="meteor-container">
<div className="meteor" style={{top: '10%', left: '-50px', animationDelay: '0s'}}></div>
<div className="meteor" style={{top: '30%', left: '-150px', animationDelay: '1s'}}></div>
<div className="meteor" style={{top: '50%', left: '-250px', animationDelay: '2s'}}></div>
</div>
<div className="relative z-10 p-6">
<div className="mb-6 text-center">
<span className="px-3 py-1 bg-gray-800/80 rounded-full text-xs text-gray-400 inline-block shadow-inner border border-gray-700/30">COSMIC NETWORK</span>
</div>
<h2 className="text-2xl font-bold text-white mb-2 text-center">Login Portal</h2>
<div className="h-px w-16 bg-indigo-500/70 mx-auto mb-6"></div>
<form className="space-y-5 mb-5">
<div>
<label className="block text-gray-300 text-xs font-medium mb-2" htmlFor="email">EMAIL</label>
<input className="w-full px-4 py-3 rounded-lg bg-gray-800/50 text-gray-200 text-sm border border-gray-700/50 focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 focus:outline-none transition-all shadow-inner" id="email" placeholder="your@email.com" required="" type="email"/>
</div>
<div>
<div className="flex justify-between items-center mb-2">
<label className="text-gray-300 text-xs font-medium" htmlFor="password">PASSWORD</label>
<a className="text-indigo-400 text-xs hover:text-indigo-300" href="#">Forgot?</a>
</div>
<input className="w-full px-4 py-3 rounded-lg bg-gray-800/50 text-gray-200 text-sm border border-gray-700/50 focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 focus:outline-none transition-all shadow-inner" id="password" placeholder="••••••••" required="" type="password"/>
</div>
<div className="flex items-center">
<input className="h-4 w-4 rounded border-gray-600 bg-gray-800 text-indigo-500 focus:ring-indigo-500" id="remember" type="checkbox"/>
<label className="ml-2 text-sm text-gray-400" htmlFor="remember">Remember me</label>
</div>
<button className="w-full py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm shadow-md border border-indigo-700/30 transition-all hover:shadow-lg hover:-translate-y-0.5" type="submit">
            Sign In
          </button>
</form>
<div className="pt-4 border-t border-gray-800/30 flex justify-center">
<p className="text-gray-400 text-sm">
            Don't have an account? 
            <a className="text-indigo-400 hover:text-indigo-300" href="#">Sign up</a>
</p>
</div>
<div className="flex justify-center mt-5 space-x-4">
<button className="p-2 bg-gray-800/80 hover:bg-gray-700/80 text-gray-300 rounded-full transition shadow-sm border border-gray-700/30">
<svg className="h-5 w-5" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
</svg>
</button>
<button className="p-2 bg-gray-800/80 hover:bg-gray-700/80 text-gray-300 rounded-full transition shadow-sm border border-gray-700/30">
<svg className="h-5 w-5" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
</svg>
</button>
<button className="p-2 bg-gray-800/80 hover:bg-gray-700/80 text-gray-300 rounded-full transition shadow-sm border border-gray-700/30">
<svg className="h-5 w-5" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.917 16.083c-2.258 0-4.083-1.825-4.083-4.083s1.825-4.083 4.083-4.083c1.103 0 2.024.402 2.735 1.067l-1.107 1.068c-.304-.292-.834-.63-1.628-.63-1.394 0-2.531 1.155-2.531 2.579 0 1.424 1.138 2.579 2.531 2.579 1.616 0 2.224-1.162 2.316-1.762h-2.316v-1.4h3.855c.036.204.064.408.064.677.001 2.332-1.563 3.988-3.919 3.988zm9.917-3.5h-1.75v1.75h-1.167v-1.75h-1.75v-1.166h1.75v-1.75h1.167v1.75h1.75v1.166z"></path>
</svg>
</button>
</div>
</div>
</div>
</div>


    </>
  );
}
