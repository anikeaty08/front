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


var script = document.createElement("script");script.type = "module";script.src = "https://widgets.revue.us/2.0/rw-widget-mediawall.js";document.getElementsByTagName("head")[0].appendChild(script);
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
      

<section className="bg-[#f8f8f8] py-10 md:py-[60px]">
<div className="max-w-[1140px] mx-auto px-5 w-full">

<div className="flex flex-col items-center justify-center mb-8">
<h2 className="text-[#84c346] text-[30px] md:text-[40px] font-black leading-tight uppercase text-center tracking-tight mb-3">
                    Google Reviews
                </h2>

<div className="w-[200px] h-[2px] bg-[#84c346]"></div>
</div>

<div className="w-full flex flex-col gap-10">

<div className="w-full bg-white rounded-xl overflow-hidden shadow-sm p-4">

<div data-rw-mediawall="49503"></div>


</div>

<div className="w-full rounded-xl overflow-hidden shadow-sm">
<iframe allow="camera;microphone" allowfullscreen="" frameborder="1" marginheight="0px" marginwidth="0px" name="reviews" scrolling="yes" src="https://httpsvipcleaninguaecom.revue.us" style={{border: '1px #000000 solid', height: '500px', width: '100%'}}></iframe>
</div>
</div>
</div>
</section>

    </>
  );
}
