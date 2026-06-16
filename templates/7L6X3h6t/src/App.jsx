import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}


<![CDATA[
            const svgNS = "http://www.w3.org/2000/svg";
            const N = 150, WIDTH = 380, HEIGHT = 240, DOT_R = 1.5, MARGIN = 10;
            const CX = WIDTH/2, CY = HEIGHT/2, MAX_R = Math.min(CX, CY) - MARGIN;
            const GOLDEN = Math.PI * (3 - Math.sqrt(5)), DUR = 3;
            const COLORS = [
              "#9333ea", "#6366f1", "#3b82f6", "#06b6d4", "#10b981", "#84cc16", "#eab308", "#f97316", "#ef4444", "#ec4899"
            ];
            for(let i=0; i<N; i++) {
              const frac = (i+0.5)/N;
              const r = Math.sqrt(frac) * MAX_R;
              const theta = (i+0.5) * GOLDEN;
              const x = CX + r*Math.cos(theta), y = CY + r*Math.sin(theta);
              const colorIdx = Math.floor((frac)*(COLORS.length - 1));
              const c1 = COLORS[colorIdx], c2 = COLORS[(colorIdx+1) % COLORS.length];
              function lerpColor(a, b, t) {
                a = a.replace('#',''); b = b.replace('#','');
                const r = Math.round(parseInt(a.substr(0,2),16)*(1-t)+parseInt(b.substr(0,2),16)*t);
                const g = Math.round(parseInt(a.substr(2,2),16)*(1-t)+parseInt(b.substr(2,2),16)*t);
                const b_ = Math.round(parseInt(a.substr(4,2),16)*(1-t)+parseInt(b.substr(4,2),16)*t);
                return 'rgb('+r+','+g+','+b_+')';
              }
              const localFrac = (frac*COLORS.length)%1;
              const fill = lerpColor(c1,c2,localFrac);
              const circle = document.createElementNS(svgNS,"circle");
              circle.setAttribute("cx",x);
              circle.setAttribute("cy",y);
              circle.setAttribute("r",DOT_R);
              circle.setAttribute("fill",fill);
              circle.setAttribute("opacity","0.7");
              const animR = document.createElementNS(svgNS,"animate");
              animR.setAttribute("attributeName","r");
              animR.setAttribute("values",`${DOT_R*0.7};${DOT_R*1.8};${DOT_R*0.7}`);
              animR.setAttribute("dur",`${DUR}s`);
              animR.setAttribute("begin",`${frac*DUR}s`);
              animR.setAttribute("repeatCount","indefinite");
              animR.setAttribute("calcMode","spline");
              animR.setAttribute("keySplines","0.4 0 0.6 1;0.4 0 0.6 1");
              const animO = document.createElementNS(svgNS,"animate");
              animO.setAttribute("attributeName","opacity");
              animO.setAttribute("values","0.4;0.9;0.4");
              animO.setAttribute("dur",`${DUR}s`);
              animO.setAttribute("begin",`${frac*DUR}s`);
              animO.setAttribute("repeatCount","indefinite");
              animO.setAttribute("calcMode","spline");
              animO.setAttribute("keySplines","0.4 0 0.6 1;0.4 0 0.6 1");
              circle.appendChild(animR); 
              circle.appendChild(animO);
              document.currentScript.parentNode.appendChild(circle);
            }
          ]]>
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="relative w-[380px] h-[240px] rounded-2xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden border border-zinc-700 bg-gray-800">

<div className="absolute inset-0 z-0">
<svg className="block" height="240" viewbox="0 0 380 240" width="380">
<rect fill="#1f2937" height="240" rx="16" ry="16" width="380"></rect>
<g>

</g>
</svg>
</div>

<div className="absolute inset-0 p-6 text-white flex flex-col justify-between z-10">

<div className="flex justify-between items-start">

<div className="h-8 w-10 bg-gradient-to-br from-yellow-600 to-yellow-400 rounded-md flex flex-col justify-center">
<div className="h-1.5 mx-1 my-0.5 bg-yellow-900/30 rounded"></div>
<div className="h-1.5 mx-1 my-0.5 bg-yellow-900/30 rounded"></div>
</div>

<div className="font-bold text-xl tracking-widest">
<span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-300">SPIRAL</span>
</div>
</div>

<div className="text-center font-mono text-xl tracking-wider font-semibold mt-2 mb-4">
<span className="opacity-90">4929</span>
<span className="mx-2 opacity-90">•••</span>
<span className="mx-2 opacity-90">•••</span>
<span className="opacity-90">3021</span>
</div>

<div className="flex justify-between items-end">

<div className="flex flex-col">
<span className="text-xs opacity-70">CARDHOLDER NAME</span>
<span className="font-mono text-sm tracking-wider">JOHN DOE</span>
</div>

<div className="flex flex-col text-right">
<span className="text-xs opacity-70">EXPIRES</span>
<span className="font-mono text-sm tracking-wider">05/27</span>
</div>
</div>
</div>
</div>

    </>
  );
}
