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



      const btn = document.querySelector('button');
      const hoverText = btn.querySelector('.hover-text');
      btn.addEventListener('mouseenter', () => {
        hoverText.style.width = '100%';
        hoverText.style.filter = 'drop-shadow(0 0 23px #C43EFF)';
      });
      btn.addEventListener('mouseleave', () => {
        hoverText.style.width = '0%';
        hoverText.style.filter = 'none';
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
      
<button className="relative px-0 py-0 bg-transparent border-none outline-none cursor-pointer font-bricolage uppercase tracking-[0.15em]" data-text="Awesome" style={{fontSize: `60px`, letterSpacing: `3px`}}>
<span className="actual-text text-transparent text-stroke select-none">
       DesignCode 
    </span>
<span aria-hidden="true" className="hover-text pointer-events-none absolute inset-0 w-0 overflow-hidden border-r-[6px]" style={{color: `#C43EFF`, borderColor: `#C43EFF`, transition: `width 0.5s`}}>
<span className="text-stroke-anim text-transparent select-none"> DesignCode </span>
</span>

</button>

    </>
  );
}
