import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Generate additional dynamic waves
        document.addEventListener('DOMContentLoaded', function() {
            const sineWaves = document.getElementById('sineWaves');
            
            // Create multiple sine waves with different parameters
            for (let i = 0; i < 5; i++) {
                const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
                const amplitude = 50 + i * 10;
                const frequency = 3 + i * 0.5;
                const phase = i * 30;
                
                let d = `M0,${300 + i * 20} `;
                for (let x = 0; x <= 1200; x += 20) {
                    const y = 300 + i * 20 + amplitude * Math.sin((x / 200 * frequency) + phase);
                    d += `L${x},${y} `;
                }
                
                path.setAttribute('d', d);
                path.setAttribute('fill', 'none');
                path.setAttribute('stroke', `rgba(${59 + i * 40}, ${130 - i * 20}, ${246 - i * 30}, ${0.2 - i * 0.02})`);
                path.setAttribute('stroke-width', 1);
                path.classList.add(i % 2 === 0 ? 'wave-1' : 'wave-2');
                
                sineWaves.appendChild(path);
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="relative w-full max-w-6xl h-[80vh] mx-auto">

<div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-purple-950/20 to-pink-950/20 rounded-3xl"></div>

<div className="absolute inset-0 flex items-center justify-center overflow-hidden">
<svg className="w-full h-full" preserveaspectratio="none" viewbox="0 0 1200 800">

<defs>
<lineargradient id="gradient1" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="rgba(59, 130, 246, 0.6)"></stop>
<stop offset="50%" stop-color="rgba(139, 92, 246, 0.6)"></stop>
<stop offset="100%" stop-color="rgba(236, 72, 153, 0.6)"></stop>
</lineargradient>
<lineargradient id="gradient2" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="rgba(236, 72, 153, 0.4)"></stop>
<stop offset="50%" stop-color="rgba(59, 130, 246, 0.4)"></stop>
<stop offset="100%" stop-color="rgba(139, 92, 246, 0.4)"></stop>
</lineargradient>
<lineargradient id="gradient3" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="rgba(139, 92, 246, 0.3)"></stop>
<stop offset="50%" stop-color="rgba(236, 72, 153, 0.3)"></stop>
<stop offset="100%" stop-color="rgba(59, 130, 246, 0.3)"></stop>
</lineargradient>
</defs>

<path className="wave-1" d="M 0 300 Q 150 250, 300 300 T 600 300 T 900 300 T 1200 300" fill="none" stroke="url(#gradient1)" strokeLinecap="round" strokeWidth="2"></path>
<path className="wave-2" d="M 0 350 Q 150 400, 300 350 T 600 350 T 900 350 T 1200 350" fill="none" stroke="url(#gradient2)" strokeLinecap="round" strokeWidth="1.5"></path>
<path className="wave-3" d="M 0 400 Q 150 350, 300 400 T 600 400 T 900 400 T 1200 400" fill="none" stroke="url(#gradient3)" strokeLinecap="round" strokeWidth="1"></path>

<path className="wave-1" d="M 0 500 Q 200 450, 400 500 T 800 500 T 1200 500" fill="none" stroke="url(#gradient1)" strokeLinecap="round" strokeWidth="2"></path>
<path className="wave-2" d="M 0 550 Q 200 600, 400 550 T 800 550 T 1200 550" fill="none" stroke="url(#gradient2)" strokeLinecap="round" strokeWidth="1.5"></path>
<path className="wave-3" d="M 0 600 Q 200 550, 400 600 T 800 600 T 1200 600" fill="none" stroke="url(#gradient3)" strokeLinecap="round" strokeWidth="1"></path>

<path className="wave-4 dash-animate" d="M 0 250 Q 300 150, 600 250 T 1200 250" fill="none" stroke="rgba(139, 92, 246, 0.4)" stroke-dasharray="10,15" strokeLinecap="round" strokeWidth="1"></path>
<path className="wave-3 dash-animate" d="M 0 450 Q 300 550, 600 450 T 1200 450" fill="none" stroke="rgba(59, 130, 246, 0.3)" stroke-dasharray="8,12" strokeLinecap="round" strokeWidth="0.75"></path>

<g id="sineWaves">
<path className="wave-1" d="M0,200 C100,100 200,300 300,200 C400,100 500,300 600,200 C700,100 800,300 900,200 C1000,100 1100,300 1200,200" fill="none" stroke="rgba(236, 72, 153, 0.2)" strokeWidth="1.5"></path>
<path className="wave-2" d="M0,150 C100,250 200,50 300,150 C400,250 500,50 600,150 C700,250 800,50 900,150 C1000,250 1100,50 1200,150" fill="none" stroke="rgba(139, 92, 246, 0.2)" strokeWidth="1.5"></path>
</g>

<g id="particles">
<circle className="opacity-80" cx="100" cy="300" fill="white" r="2">
<animate attributename="cy" dur="4s" repeatcount="indefinite" values="300;280;300"></animate>
</circle>
<circle className="opacity-60" cx="200" cy="350" fill="white" r="1.5">
<animate attributename="cy" dur="5s" repeatcount="indefinite" values="350;370;350"></animate>
</circle>
<circle className="opacity-80" cx="400" cy="400" fill="white" r="2">
<animate attributename="cy" dur="6s" repeatcount="indefinite" values="400;380;400"></animate>
</circle>
<circle className="opacity-60" cx="600" cy="300" fill="white" r="1.5">
<animate attributename="cy" dur="7s" repeatcount="indefinite" values="300;320;300"></animate>
</circle>
<circle className="opacity-80" cx="800" cy="350" fill="white" r="2">
<animate attributename="cy" dur="5s" repeatcount="indefinite" values="350;330;350"></animate>
</circle>
<circle className="opacity-60" cx="1000" cy="400" fill="white" r="1.5">
<animate attributename="cy" dur="6s" repeatcount="indefinite" values="400;420;400"></animate>
</circle>
</g>
</svg>
</div>

<div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-6 text-center">
<h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
                Harmonic Wave Patterns
            </h1>
<p className="text-lg md:text-xl text-blue-100/80 max-w-2xl">
                A complex visualization of interacting sinusoidal waveforms with varying amplitudes, 
                frequencies and phase shifts creating an ever-evolving flow of energy.
            </p>
</div>
</div>


    </>
  );
}
