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



    const iconList = [
      '<svg width="22" viewBox="0 0 32 32"><circle cx="16" cy="16" r="14" fill="white" fill-opacity=".13"/><path d="M15.8 8L21 16h-3l2 5h-3l-2-5h3z" fill="white"/></svg>',
      '<svg width="22" viewBox="0 0 32 32"><rect x="8" y="8" width="16" height="16" rx="4" fill="white" fill-opacity=".13"/><path d="M16 11v10M11 16h10" stroke="white" stroke-width="2" stroke-linecap="round"/></svg>',
      '<svg width="22" viewBox="0 0 32 32"><polygon points="16,6 26,26 6,26" fill="white" fill-opacity=".13"/><path d="M16 12v6" stroke="white" stroke-width="2" stroke-linecap="round"/><circle cx="16" cy="22" r="1.3" fill="white"/></svg>',
      '<svg width="22" viewBox="0 0 32 32"><rect x="6" y="6" width="20" height="20" rx="6" fill="white" fill-opacity=".13"/><circle cx="16" cy="16" r="6" fill="white" fill-opacity=".3"/></svg>',
      '<svg width="22" viewBox="0 0 32 32"><rect x="10" y="10" width="12" height="12" rx="3" fill="white" fill-opacity=".13"/><rect x="14" y="14" width="4" height="4" rx="1" fill="white" fill-opacity=".3"/></svg>'
    ];
    const logos = document.querySelectorAll('.logo');
    for (let i = 0; i < logos.length; i++) {
      const hue = Math.floor(Math.random() * 360);
      const y = Math.floor(Math.random() * 100);
      const delay = Math.random() * 8;
      const duration = Math.random() * 8 + 4;
      logos[i].style.setProperty('--hue', hue);
      logos[i].style.setProperty('--y', y);
      logos[i].style.top = `calc(${y}% - 20px)`;
      logos[i].style.background = `hsl(${hue} 90% 60%)`;
      logos[i].style.animationDelay = `-${delay}s`;
      logos[i].style.animationDuration = `${duration}s`;
      logos[i].innerHTML = iconList[i % iconList.length];
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
      
<main>
<section>
<div className="logo"></div>
<div className="logo"></div>
<div className="logo"></div>
<div className="logo"></div>
<div className="logo"></div>
<div className="logo"></div>
<div className="logo"></div>
<div className="logo"></div>
<div className="logo"></div>
<div className="logo"></div>
<div className="logo"></div>
<div className="logo"></div>
<div className="logo"></div>
<div className="logo"></div>
<div className="logo"></div>
<div className="logo"></div>
<div className="logo"></div>
<div className="logo"></div>
<div className="logo"></div>
<div className="logo"></div>
</section>
</main>
<div className="glass">
<h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight text-center">
      Neon Overdrive
    </h2>
<p className="text-base sm:text-lg font-normal text-slate-100/90 text-center leading-normal max-w-xs">
      Race through a dazzling cybercity. Outmaneuver rivals and unlock new upgrades in this futuristic arcade racer.
    </p>
<div className="flex gap-4 mt-2 w-full justify-center">
<button className="glass-btn px-6 py-2 rounded-md font-medium text-base uppercase tracking-wide transition hover:scale-105 focus:scale-105">
        Play
      </button>
<button className="glass-btn-secondary px-6 py-2 rounded-md font-medium text-base uppercase tracking-wide transition hover:scale-105 focus:scale-105">
        More Info
      </button>
</div>
</div>


    </>
  );
}
