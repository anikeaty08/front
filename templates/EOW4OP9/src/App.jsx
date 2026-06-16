import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        function randomizeEffect() {
            const plasmaLayers = document.querySelectorAll('.plasma-layer > div');
            const waveLines = document.querySelectorAll('.wave-line');
            
            plasmaLayers.forEach(layer => {
                const randomDuration = (Math.random() * 20 + 10) + 's';
                const randomDelay = (Math.random() * -10) + 's';
                layer.style.animationDuration = randomDuration;
                layer.style.animationDelay = randomDelay;
            });
            
            waveLines.forEach(line => {
                const randomDuration = (Math.random() * 10 + 8) + 's';
                const randomDelay = (Math.random() * -8) + 's';
                line.style.animationDuration = randomDuration;
                line.style.animationDelay = randomDelay;
            });
        }
        
        document.getElementById('speedControl').addEventListener('input', function(e) {
            const speed = e.target.value;
            document.querySelectorAll('[style*="animation"]').forEach(el => {
                el.style.animationDuration = (15 / speed) + 's';
            });
        });
        
        document.getElementById('intensityControl').addEventListener('input', function(e) {
            const intensity = e.target.value;
            document.querySelectorAll('.plasma-layer').forEach(el => {
                el.style.opacity = intensity * 0.8;
            });
        });
        
        setInterval(randomizeEffect, 15000);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="relative w-full h-screen">

<div className="absolute top-4 left-4 z-50 bg-gray-900/80 backdrop-blur-sm p-4 rounded-lg border border-gray-700">
<h3 className="text-white text-sm font-bold mb-3">Plasma Controls</h3>
<div className="space-y-2">
<label className="flex items-center space-x-2">
<span className="text-xs text-gray-300 w-16">Speed:</span>
<input className="w-20 h-1 bg-gray-600 rounded-lg" id="speedControl" max="3" min="0.5" step="0.1" type="range" value="1"/>
</label>
<label className="flex items-center space-x-2">
<span className="text-xs text-gray-300 w-16">Intensity:</span>
<input className="w-20 h-1 bg-gray-600 rounded-lg" id="intensityControl" max="2" min="0.3" step="0.1" type="range" value="1"/>
</label>
<label className="flex items-center space-x-2">
<span className="text-xs text-gray-300 w-16">Waves:</span>
<input className="w-20 h-1 bg-gray-600 rounded-lg" id="waveControl" max="12" min="3" step="1" type="range" value="6"/>
</label>
<button className="text-xs bg-purple-600 hover:bg-purple-700 px-3 py-1 rounded text-white" onclick="randomizeEffect()">Randomize</button>
</div>
</div>

<div className="plasma-layer absolute inset-0 opacity-80">
<div className="absolute inset-0 bg-gradient-radial from-purple-500/60 via-blue-600/40 to-transparent" style={{animation: 'plasma1 20s ease-in-out infinite'}}></div>
</div>
<div className="plasma-layer absolute inset-0 opacity-70">
<div className="absolute inset-0 bg-gradient-radial from-pink-500/50 via-cyan-500/30 to-transparent" style={{animation: 'plasma2 18s ease-in-out infinite reverse'}}></div>
</div>
<div className="plasma-layer absolute inset-0 opacity-60">
<div className="absolute inset-0 bg-gradient-radial from-orange-500/40 via-green-500/25 to-transparent" style={{animation: 'plasma1 25s ease-in-out infinite', animationDelay: '-5s'}}></div>
</div>

<div className="absolute inset-0" id="wavyLinesContainer">

<svg className="wave-line absolute inset-0 w-full h-full opacity-60" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M0,20 Q25,5 50,20 T100,20" fill="none" opacity="0.8" stroke="url(#grad1)" strokeWidth="0.3"></path>
<path d="M0,40 Q25,25 50,40 T100,40" fill="none" opacity="0.7" stroke="url(#grad2)" strokeWidth="0.4"></path>
<path d="M0,60 Q25,45 50,60 T100,60" fill="none" opacity="0.6" stroke="url(#grad3)" strokeWidth="0.3"></path>
<path d="M0,80 Q25,65 50,80 T100,80" fill="none" opacity="0.5" stroke="url(#grad4)" strokeWidth="0.5"></path>
<defs>
<lineargradient id="grad1" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" style={{stopColor: '#ff00ff', stopOpacity: '0'}}></stop>
<stop offset="50%" style={{stopColor: '#00ffff', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#ffff00', stopOpacity: '0'}}></stop>
</lineargradient>
<lineargradient id="grad2" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" style={{stopColor: '#ff4500', stopOpacity: '0'}}></stop>
<stop offset="50%" style={{stopColor: '#9400d3', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#00ff7f', stopOpacity: '0'}}></stop>
</lineargradient>
<lineargradient id="grad3" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" style={{stopColor: '#1e90ff', stopOpacity: '0'}}></stop>
<stop offset="50%" style={{stopColor: '#ff1493', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#ffd700', stopOpacity: '0'}}></stop>
</lineargradient>
<lineargradient id="grad4" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" style={{stopColor: '#32cd32', stopOpacity: '0'}}></stop>
<stop offset="50%" style={{stopColor: '#ff6347', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#4169e1', stopOpacity: '0'}}></stop>
</lineargradient>
</defs>
</svg>

<svg className="wave-line absolute inset-0 w-full h-full opacity-50" preserveaspectratio="none" style={{animationDelay: '-3s'}} viewbox="0 0 100 100">
<path d="M20,0 Q5,25 20,50 T20,100" fill="none" opacity="0.8" stroke="url(#vgrad1)" strokeWidth="0.3"></path>
<path d="M40,0 Q25,25 40,50 T40,100" fill="none" opacity="0.7" stroke="url(#vgrad2)" strokeWidth="0.4"></path>
<path d="M60,0 Q45,25 60,50 T60,100" fill="none" opacity="0.6" stroke="url(#vgrad3)" strokeWidth="0.3"></path>
<path d="M80,0 Q65,25 80,50 T80,100" fill="none" opacity="0.5" stroke="url(#vgrad4)" strokeWidth="0.5"></path>
<defs>
<lineargradient id="vgrad1" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#ff69b4', stopOpacity: '0'}}></stop>
<stop offset="50%" style={{stopColor: '#00ced1', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#98fb98', stopOpacity: '0'}}></stop>
</lineargradient>
<lineargradient id="vgrad2" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#ff8c00', stopOpacity: '0'}}></stop>
<stop offset="50%" style={{stopColor: '#8a2be2', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#00fa9a', stopOpacity: '0'}}></stop>
</lineargradient>
<lineargradient id="vgrad3" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#dc143c', stopOpacity: '0'}}></stop>
<stop offset="50%" style={{stopColor: '#00bfff', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#ffff00', stopOpacity: '0'}}></stop>
</lineargradient>
<lineargradient id="vgrad4" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#7fff00', stopOpacity: '0'}}></stop>
<stop offset="50%" style={{stopColor: '#ff4500', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#9370db', stopOpacity: '0'}}></stop>
</lineargradient>
</defs>
</svg>

<svg className="wave-line absolute inset-0 w-full h-full opacity-40" preserveaspectratio="none" style={{animationDelay: '-6s'}} viewbox="0 0 100 100">
<path d="M0,0 Q25,25 50,0 T100,0" fill="none" opacity="0.9" stroke="url(#dgrad1)" strokeWidth="0.2" transform="rotate(45 50 50)"></path>
<path d="M0,25 Q25,50 50,25 T100,25" fill="none" opacity="0.8" stroke="url(#dgrad2)" strokeWidth="0.3" transform="rotate(45 50 50)"></path>
<path d="M0,50 Q25,75 50,50 T100,50" fill="none" opacity="0.7" stroke="url(#dgrad3)" strokeWidth="0.2" transform="rotate(45 50 50)"></path>
<path d="M0,75 Q25,100 50,75 T100,75" fill="none" opacity="0.6" stroke="url(#dgrad4)" strokeWidth="0.4" transform="rotate(45 50 50)"></path>
<defs>
<lineargradient id="dgrad1" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#ff1493', stopOpacity: '0'}}></stop>
<stop offset="50%" style={{stopColor: '#00ffff', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#ffd700', stopOpacity: '0'}}></stop>
</lineargradient>
<lineargradient id="dgrad2" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#32cd32', stopOpacity: '0'}}></stop>
<stop offset="50%" style={{stopColor: '#ff6347', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#9370db', stopOpacity: '0'}}></stop>
</lineargradient>
<lineargradient id="dgrad3" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#ff8c00', stopOpacity: '0'}}></stop>
<stop offset="50%" style={{stopColor: '#1e90ff', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#ff69b4', stopOpacity: '0'}}></stop>
</lineargradient>
<lineargradient id="dgrad4" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#7fff00', stopOpacity: '0'}}></stop>
<stop offset="50%" style={{stopColor: '#dc143c', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#00ced1', stopOpacity: '0'}}></stop>
</lineargradient>
</defs>
</svg>
</div>

<div className="absolute inset-0 opacity-30 mix-blend-overlay" style="background-image: 
                radial-gradient(circle at 20% 30%, rgba(255,0,255,0.3) 0%, transparent 50%),
                radial-gradient(circle at 80% 70%, rgba(0,255,255,0.3) 0%, transparent 50%),
                radial-gradient(circle at 40% 80%, rgba(255,255,0,0.3) 0%, transparent 50%),
                radial-gradient(circle at 90% 20%, rgba(255,100,0,0.3) 0%, transparent 50%);
             animation: plasma2 30s ease-in-out infinite;">
</div>

<div className="absolute inset-0">
<div className="absolute w-2 h-2 bg-white rounded-full opacity-80" style={{left: '10%', top: '20%', animation: 'plasma1 8s ease-in-out infinite'}}></div>
<div className="absolute w-3 h-3 bg-cyan-400 rounded-full opacity-60" style={{left: '30%', top: '60%', animation: 'plasma2 12s ease-in-out infinite'}}></div>
<div className="absolute w-1 h-1 bg-pink-400 rounded-full opacity-90" style={{left: '70%', top: '30%', animation: 'plasma1 6s ease-in-out infinite reverse'}}></div>
<div className="absolute w-2 h-2 bg-yellow-400 rounded-full opacity-70" style={{left: '80%', top: '80%', animation: 'plasma2 10s ease-in-out infinite'}}></div>
<div className="absolute w-1 h-1 bg-green-400 rounded-full opacity-85" style={{left: '50%', top: '10%', animation: 'plasma1 14s ease-in-out infinite'}}></div>
</div>
</div>


    </>
  );
}
