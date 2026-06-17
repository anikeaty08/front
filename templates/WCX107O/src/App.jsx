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
      
<div className="open-book relative w-80 h-[350px]">

<div className="cover-gradient cover absolute inset-0 rounded-xl linear-glow flex flex-col justify-center items-center border border-[#222a3a]">
<span className="font-light text-[36px] leading-tight text-white text-center px-4 tracking-tight" style={{fontFamily: '\'Inter\', sans-serif', letterSpacing: '-0.04em'}}>
        Dieter Rams<br/>
<span className="text-[#A8C6FF]">The Complete Works</span>
</span>
<span className="font-light text-[18px] mt-3 text-[#bfc9db] text-center tracking-tight uppercase" style={{fontFamily: '\'Inter\', sans-serif', letterSpacing: '-0.02em'}}>
        by Klaus Klemp
      </span>
<div className="mt-8 flex items-center gap-2">
<span className="inline-block w-1 h-1 rounded-full bg-[#7c8ba9] opacity-60"></span>
<span className="inline-block w-1 h-1 rounded-full bg-[#506fff] opacity-40"></span>
<span className="inline-block w-1 h-1 rounded-full bg-[#bfc9db] opacity-40"></span>
<span className="inline-block w-1 h-1 rounded-full bg-[#506fff] opacity-40"></span>
<span className="inline-block w-1 h-1 rounded-full bg-[#7c8ba9] opacity-60"></span>
</div>
</div>

<div className="page absolute inset-0 rounded-xl linear-glow flex flex-col justify-start items-center bg-[#181C25] border border-[#222a3a] px-8 py-7">
<span className="font-light tracking-tight text-[36px] leading-tight text-white mb-1 text-center" style={{fontFamily: '\'Inter\', sans-serif', letterSpacing: '-0.04em'}}>
        Dieter Rams: <span className="text-[#A8C6FF]">The Complete Works</span>
</span>
<span className="font-light tracking-tight text-[18px] leading-tight text-[#bfc9db] mb-4 text-center uppercase" style={{fontFamily: '\'Inter\', sans-serif', letterSpacing: '-0.02em'}}>
        by Klaus Klemp
      </span>
<div className="ellipsis-text w-full text-[13px] leading-snug text-[#bfc9db] font-normal" style={{fontFamily: '\'Inter\', sans-serif'}}>
        "Dieter Rams: The Complete Works" is an extensive monograph chronicling the prolific career of Dieter Rams, a luminary in industrial design. Authored by Klaus Klemp, the book features hundreds of products, sketches, and archival images, providing a comprehensive overview of Rams’s philosophy and profound influence on modern design. This essential volume is a testament to his legacy of simplicity, clarity, and enduring functionality.
      </div>
</div>

<div className="spine-gradient absolute left-0 top-3 bottom-3 w-4 rounded-l-xl shadow-inner border-r border-[#506fff]"></div>
</div>

    </>
  );
}
