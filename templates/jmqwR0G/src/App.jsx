import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}


<![CDATA[
            const svgNS = "http://www.w3.org/2000/svg";
            const N = 120, SIZE = 360, DOT_R = 0.8, MARGIN = 10;
            const CX = SIZE/2, CY = 220/2, MAX_R = Math.min(CX, CY) - MARGIN - DOT_R;
            const GOLDEN = Math.PI * (3 - Math.sqrt(5)), DUR = 3.5;
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
              circle.setAttribute("opacity","0.4");
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
              animO.setAttribute("values","0.2;0.6;0.2");
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
  }, []);

  return (
    <>
      
<div className="relative w-[360px] h-[220px] rounded-xl overflow-hidden shadow-2xl perspective-card">

<div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900">
<svg className="absolute inset-0" height="220" viewbox="0 0 360 220" width="360">
<g>

</g>
</svg>
</div>

<div className="absolute inset-0 p-6 flex flex-col justify-between text-white">

<div className="flex justify-between items-start">
<div className="chip"></div>
<div className="text-right font-bold text-xl tracking-wider">COSMOS</div>
</div>

<div className="text-center tracking-widest text-xl mt-2">
<span className="inline-block mx-1 opacity-90">4921</span>
<span className="inline-block mx-1 opacity-90">8213</span>
<span className="inline-block mx-1 opacity-90">5678</span>
<span className="inline-block mx-1 opacity-90">9012</span>
</div>

<div className="flex justify-between items-end text-sm">
<div>
<div className="text-xs opacity-70">CARDHOLDER NAME</div>
<div className="tracking-wider">JANE SMITH</div>
</div>
<div className="text-right">
<div className="text-xs opacity-70">VALID THRU</div>
<div>05/28</div>
</div>
</div>
</div>

<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-30 pointer-events-none"></div>
</div>

    </>
  );
}
