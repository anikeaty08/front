import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    document.getElementById('replay-btn').addEventListener('click', function() {
      const path = document.querySelector('.wave-path');
      path.style.animation = 'none';
      path.offsetHeight; // Trigger reflow
      path.style.animation = 'drawWave 6s linear forwards';
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="container mx-auto px-4 py-12">
<div className="max-w-4xl mx-auto">
<h1 className="text-3xl font-bold text-white mb-8 text-center">Sinusoidal Wave Animation</h1>
<div className="bg-slate-800 rounded-xl p-6 shadow-xl">
<svg className="w-full h-auto" preserveaspectratio="xMidYMid meet" viewbox="0 0 1000 300">

<g className="opacity-20">
<line stroke="white" strokeWidth="1" x1="0" x2="1000" y1="150" y2="150"></line>
<line stroke="white" strokeWidth="1" x1="100" x2="100" y1="0" y2="300"></line>
<line stroke="white" strokeWidth="1" x1="300" x2="300" y1="0" y2="300"></line>
<line stroke="white" strokeWidth="1" x1="500" x2="500" y1="0" y2="300"></line>
<line stroke="white" strokeWidth="1" x1="700" x2="700" y1="0" y2="300"></line>
<line stroke="white" strokeWidth="1" x1="900" x2="900" y1="0" y2="300"></line>
</g>

<path className="wave-path" d="M 50,150 
               C 125,50 175,250 250,150 
               S 375,50 450,150 
               S 575,250 650,150 
               S 775,50 850,150 
               S 975,250 950,150" fill="none" stroke="rgb(56, 189, 248)" strokeLinecap="round" strokeWidth="4"></path>

<circle cx="50" cy="150" fill="rgb(236, 72, 153)" r="4"></circle>
<circle cx="250" cy="150" fill="rgb(236, 72, 153)" r="4"></circle>
<circle cx="450" cy="150" fill="rgb(236, 72, 153)" r="4"></circle>
<circle cx="650" cy="150" fill="rgb(236, 72, 153)" r="4"></circle>
<circle cx="850" cy="150" fill="rgb(236, 72, 153)" r="4"></circle>
<circle cx="950" cy="150" fill="rgb(236, 72, 153)" r="4"></circle>
</svg>
<div className="flex justify-center mt-8">
<button className="px-4 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded-md transition-colors" id="replay-btn">
            Replay Animation
          </button>
</div>
</div>
<div className="mt-8 text-slate-300 text-center max-w-2xl mx-auto">
<p className="mb-4">
          This animation demonstrates a sinusoidal waveform created with continuous Bézier curves
          that draws from right to left using SVG path animation techniques.
        </p>
<p>
          The animation uses stroke-dasharray and stroke-dashoffset properties with a linear timing function
          to create a smooth, consistent drawing effect.
        </p>
</div>
</div>
</div>


    </>
  );
}
