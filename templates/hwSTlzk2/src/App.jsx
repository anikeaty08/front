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


<![CDATA[
        const svgNS = "http://www.w3.org/2000/svg";
        const N = 420, SIZE = 500, DOT_R = 1.2, MARGIN = 10;
        const CX = SIZE/2, CY = SIZE/2, MAX_R = CX - MARGIN - DOT_R;
        const GOLDEN = Math.PI * (3 - Math.sqrt(5)), DUR = 2.2;
        for(let i=0; i<N; i++) {
          const frac = (i+0.5)/N;
          const r = Math.sqrt(frac) * MAX_R;
          const theta = (i+0.5) * GOLDEN;
          const x = CX + r*Math.cos(theta), y = CY + r*Math.sin(theta);
          const circle = document.createElementNS(svgNS,"circle");
          circle.setAttribute("cx",x);
          circle.setAttribute("cy",y);
          circle.setAttribute("r",DOT_R);
          circle.setAttribute("fill","#fff");
          circle.setAttribute("opacity","0.5");
          const animR = document.createElementNS(svgNS,"animate");
          animR.setAttribute("attributeName","r");
          animR.setAttribute("values",`${DOT_R*0.7};${DOT_R*1.4};${DOT_R*0.7}`);
          animR.setAttribute("dur",`${DUR}s`);
          animR.setAttribute("begin",`${frac*DUR}s`);
          animR.setAttribute("repeatCount","indefinite");
          animR.setAttribute("calcMode","spline");
          animR.setAttribute("keySplines","0.4 0 0.6 1;0.4 0 0.6 1");
          const animO = document.createElementNS(svgNS,"animate");
          animO.setAttribute("attributeName","opacity");
          animO.setAttribute("values","0.33;1;0.33");
          animO.setAttribute("dur",`${DUR}s`);
          animO.setAttribute("begin",`${frac*DUR}s`);
          animO.setAttribute("repeatCount","indefinite");
          animO.setAttribute("calcMode","spline");
          animO.setAttribute("keySplines","0.4 0 0.6 1;0.4 0 0.6 1");
          circle.appendChild(animR); circle.appendChild(animO);
          document.currentScript.parentNode.appendChild(circle);
        }
      ]]>
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
      
<svg className="block" height="500" viewbox="0 0 500 500" width="500">
<g>

</g>
</svg>

    </>
  );
}
