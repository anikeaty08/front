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



        let meteorCount = 0;
        let impactCount = 0;
        let isPaused = false;
        
        const earth = document.getElementById('earth');
        const earthSphere = document.querySelector('.earth-sphere');
        const meteorCountEl = document.getElementById('meteor-count');
        const impactCountEl = document.getElementById('impact-count');
        const resetBtn = document.getElementById('reset-btn');
        const pauseBtn = document.getElementById('pause-btn');
        
        function createMeteor(x, y) {
            meteorCount++;
            meteorCountEl.textContent = meteorCount;
            
            const meteor = document.createElement('div');
            meteor.className = 'meteor-trail';
            
            // Position meteor above the click point
            meteor.style.left = x + 'px';
            meteor.style.top = (y - 200) + 'px';
            
            document.body.appendChild(meteor);
            
            // Create impact after delay
            setTimeout(() => {
                createImpact(x, y);
                shakeEarth();
                impactCount++;
                impactCountEl.textContent = impactCount;
            }, 1200);
            
            // Remove meteor after animation
            setTimeout(() => {
                meteor.remove();
            }, 1500);
        }
        
        function createImpact(x, y) {
            const impact = document.createElement('div');
            impact.className = 'impact-effect';
            impact.style.left = (x - 10) + 'px';
            impact.style.top = (y - 10) + 'px';
            
            document.body.appendChild(impact);
            
            setTimeout(() => {
                impact.remove();
            }, 800);
        }
        
        function shakeEarth() {
            earthSphere.classList.add('earth-shake');
            setTimeout(() => {
                earthSphere.classList.remove('earth-shake');
            }, 500);
        }
        
        function toggleSpin() {
            isPaused = !isPaused;
            if (isPaused) {
                earthSphere.style.animationPlayState = 'paused';
                document.querySelector('.earth-continents').style.animationPlayState = 'paused';
                document.querySelector('.earth-clouds').style.animationPlayState = 'paused';
                pauseBtn.textContent = 'Resume Spin';
                pauseBtn.classList.remove('bg-blue-600', 'hover:bg-blue-700', 'border-blue-500');
                pauseBtn.classList.add('bg-green-600', 'hover:bg-green-700', 'border-green-500');
            } else {
                earthSphere.style.animationPlayState = 'running';
                document.querySelector('.earth-continents').style.animationPlayState = 'running';
                document.querySelector('.earth-clouds').style.animationPlayState = 'running';
                pauseBtn.textContent = 'Pause Spin';
                pauseBtn.classList.remove('bg-green-600', 'hover:bg-green-700', 'border-green-500');
                pauseBtn.classList.add('bg-blue-600', 'hover:bg-blue-700', 'border-blue-500');
            }
        }
        
        earth.addEventListener('click', (e) => {
            const rect = earth.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            // Calculate distance from center
            const clickX = e.clientX - rect.left;
            const clickY = e.clientY - rect.top;
            const distanceFromCenter = Math.sqrt(
                Math.pow(clickX - rect.width / 2, 2) + 
                Math.pow(clickY - rect.height / 2, 2)
            );
            
            // Only create meteor if click is within Earth's radius
            if (distanceFromCenter <= rect.width / 2) {
                createMeteor(e.clientX, e.clientY);
            }
        });
        
        pauseBtn.addEventListener('click', toggleSpin);
        
        resetBtn.addEventListener('click', () => {
            meteorCount = 0;
            impactCount = 0;
            meteorCountEl.textContent = '0';
            impactCountEl.textContent = '0';
            
            // Remove any existing meteors and impacts
            document.querySelectorAll('.meteor-trail, .impact-effect').forEach(el => {
                el.remove();
            });
        });
        
        // Add some random background meteor activity
        setInterval(() => {
            if (Math.random() < 0.1) { // 10% chance every 2 seconds
                const randomX = Math.random() * window.innerWidth;
                const randomY = Math.random() * window.innerHeight;
                
                // Only if not clicking on Earth
                const earthRect = earth.getBoundingClientRect();
                const distanceFromEarth = Math.sqrt(
                    Math.pow(randomX - (earthRect.left + earthRect.width / 2), 2) + 
                    Math.pow(randomY - (earthRect.top + earthRect.height / 2), 2)
                );
                
                if (distanceFromEarth > earthRect.width / 2 + 50) {
                    const backgroundMeteor = document.createElement('div');
                    backgroundMeteor.className = 'meteor-trail';
                    backgroundMeteor.style.left = randomX + 'px';
                    backgroundMeteor.style.top = (randomY - 200) + 'px';
                    backgroundMeteor.style.opacity = '0.3';
                    
                    document.body.appendChild(backgroundMeteor);
                    
                    setTimeout(() => {
                        backgroundMeteor.remove();
                    }, 1500);
                }
            }
        }, 2000);
    
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
      

<div className="absolute inset-0 z-0">
<div className="absolute top-10 left-10 w-1 h-1 bg-white rounded-full opacity-80"></div>
<div className="absolute top-20 right-20 w-1 h-1 bg-white rounded-full opacity-60"></div>
<div className="absolute top-32 left-32 w-0.5 h-0.5 bg-white rounded-full opacity-70"></div>
<div className="absolute bottom-32 right-32 w-1 h-1 bg-white rounded-full opacity-50"></div>
<div className="absolute bottom-20 left-16 w-0.5 h-0.5 bg-white rounded-full opacity-80"></div>
<div className="absolute top-40 right-40 w-0.5 h-0.5 bg-white rounded-full opacity-60"></div>
</div>

<div className="text-center mb-8 z-10">
<h1 className="text-4xl font-semibold text-white mb-2 tracking-tight">Meteor Strike Simulator</h1>
<p className="text-gray-400 text-lg">Click anywhere on Earth to launch meteors</p>
</div>

<div className="relative z-10 earth-container">
<div className="earth-sphere">
<div className="w-80 h-80 rounded-full earth-gradient cursor-crosshair relative shadow-2xl shadow-blue-500/20" id="earth">
<div className="earth-continents"></div>
<div className="earth-clouds"></div>

<div className="absolute top-8 left-8 w-16 h-16 rounded-full bg-gradient-to-br from-white/30 to-transparent"></div>
</div>
</div>
</div>

<div className="mt-8 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 z-10">
<div className="flex items-center justify-between space-x-8">
<div className="text-center">
<div className="text-2xl font-semibold text-white" id="meteor-count">0</div>
<div className="text-sm text-gray-400">Meteors Launched</div>
</div>
<div className="w-px h-12 bg-gray-700"></div>
<div className="text-center">
<div className="text-2xl font-semibold text-red-400" id="impact-count">0</div>
<div className="text-sm text-gray-400">Impacts</div>
</div>
<div className="w-px h-12 bg-gray-700"></div>
<div className="text-center">
<button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-200 border border-blue-500 mr-2" id="pause-btn">
                    Pause Spin
                </button>
<button className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-md transition-colors duration-200 border border-gray-700" id="reset-btn">
                    Reset
                </button>
</div>
</div>
</div>

<div className="mt-6 text-center text-gray-500 text-sm z-10">
<p>Click on different parts of Earth to see meteors strike from space</p>
<p className="mt-1">Watch as Earth rotates in space</p>
</div>


    </>
  );
}
