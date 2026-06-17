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
      
        let happiness = 50;
        let isBouncing = false;
        
        const sprunki = document.getElementById('sprunki');
        const leftEye = document.getElementById('left-eye');
        const rightEye = document.getElementById('right-eye');
        const leftPupil = document.getElementById('left-pupil');
        const rightPupil = document.getElementById('right-pupil');
        const happinessDisplay = document.getElementById('happiness');
        const happinessBar = document.getElementById('happiness-bar');
        const messageDisplay = document.getElementById('message');
        const foodOptions = document.getElementById('food-options');
        
        // Eye tracking for mouse movement
        document.addEventListener('mousemove', (e) => {
            moveEyes(e);
        });
        
        function moveEyes(e) {
            const sprunkiRect = sprunki.getBoundingClientRect();
            const sprunkiCenterX = sprunkiRect.left + sprunkiRect.width / 2;
            const sprunkiCenterY = sprunkiRect.top + sprunkiRect.height / 2;
            
            // Calculate angle between mouse and Sprunki
            const angle = Math.atan2(e.clientY - sprunkiCenterY, e.clientX - sprunkiCenterX);
            
            // Calculate distance for pupil movement (limited to keep pupils inside eyes)
            const maxDistance = 3; // max pixels to move (slightly more for bigger eyes)
            const distanceX = Math.cos(angle) * maxDistance;
            const distanceY = Math.sin(angle) * maxDistance;
            
            // Apply movement to pupils
            leftPupil.style.transform = `translate(calc(-50% + ${distanceX}px), calc(-50% + ${distanceY}px))`;
            rightPupil.style.transform = `translate(calc(-50% + ${distanceX}px), calc(-50% + ${distanceY}px))`;
        }
        
        document.getElementById('bounce-btn').addEventListener('click', () => {
            if (!isBouncing) {
                bounce();
                updateHappiness(5);
                showMessage("Wheee! Sprunki loves bouncing!");
            }
        });
        
        document.getElementById('feed-btn').addEventListener('click', () => {
            foodOptions.classList.toggle('hidden');
        });
        
        document.getElementById('pet-btn').addEventListener('click', () => {
            updateHappiness(3);
            showMessage("Sprunki feels loved!");
            wiggle();
        });
        
        document.querySelectorAll('.food-item').forEach(item => {
            item.addEventListener('click', () => {
                const foodName = item.textContent.trim();
                updateHappiness(10);
                showMessage(`Yum! Sprunki loves ${foodName}!`);
                foodOptions.classList.add('hidden');
                grow();
            });
        });
        
        function updateHappiness(change) {
            happiness = Math.min(Math.max(happiness + change, 0), 100);
            happinessDisplay.textContent = `Happiness: ${happiness}%`;
            happinessBar.style.width = `${happiness}%`;
            
            // Change color based on happiness
            if (happiness > 70) {
                sprunki.classList.remove('bg-red-400', 'bg-yellow-400');
                sprunki.classList.add('bg-green-400');
            } else if (happiness > 30) {
                sprunki.classList.remove('bg-red-400', 'bg-green-400');
                sprunki.classList.add('bg-yellow-400');
            } else {
                sprunki.classList.remove('bg-yellow-400', 'bg-green-400');
                sprunki.classList.add('bg-red-400');
            }
        }
        
        function bounce() {
            isBouncing = true;
            let bounceCount = 0;
            const maxBounces = 5;
            
            function singleBounce() {
                sprunki.style.bottom = '40px';
                setTimeout(() => {
                    sprunki.style.bottom = '0px';
                    bounceCount++;
                    
                    if (bounceCount < maxBounces) {
                        setTimeout(singleBounce, 300);
                    } else {
                        isBouncing = false;
                    }
                }, 300);
            }
            
            singleBounce();
        }
        
        function wiggle() {
            sprunki.style.transform = 'rotate(15deg)';
            setTimeout(() => {
                sprunki.style.transform = 'rotate(-15deg)';
                setTimeout(() => {
                    sprunki.style.transform = 'rotate(0)';
                }, 150);
            }, 150);
        }
        
        function grow() {
            sprunki.classList.add('scale-110');
            setTimeout(() => {
                sprunki.classList.remove('scale-110');
            }, 500);
        }
        
        function showMessage(text) {
            messageDisplay.textContent = text;
            setTimeout(() => {
                messageDisplay.textContent = '';
            }, 3000);
        }
        
        // Auto decrease happiness over time
        setInterval(() => {
            updateHappiness(-1);
            if (happiness < 20) {
                showMessage("Sprunki looks sad. Try feeding or playing with him!");
            }
        }, 10000);
    
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
      
<div className="max-w-md w-full bg-white rounded-xl shadow-lg p-6 mt-10">
<h1 className="text-3xl font-bold text-center text-purple-600 mb-4">Meet Sprunki!</h1>
<p className="text-center text-gray-600 mb-6">Your bouncy friend from Bouncetopia</p>
<div className="flex justify-center mb-8">
<div className="relative w-40 h-40" id="sprunki-container">
<div className="absolute w-32 h-32 bg-green-400 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out" id="sprunki" style={{bottom: '0px'}}>
<div className="w-20 h-20 bg-green-200 rounded-full flex items-center justify-center">
<div className="flex flex-col items-center">
<div className="flex space-x-2">
<div className="eye-container blinking" id="left-eye">
<div className="pupil" id="left-pupil"></div>

</div>
<div className="eye-container blinking" id="right-eye" style={{animationDelay: '0.1s'}}>
<div className="pupil" id="right-pupil"></div>

</div>
</div>
<div className="w-7 h-3 bg-red-400 rounded-full mt-2"></div>
</div>
</div>
</div>
</div>
</div>
<div className="text-center mb-6">
<p className="text-lg font-medium text-purple-500" id="happiness">Happiness: 50%</p>
<div className="w-full bg-gray-200 rounded-full h-4 mt-2">
<div className="bg-purple-500 h-4 rounded-full" id="happiness-bar" style={{width: '50%'}}></div>
</div>
</div>
<div className="flex justify-center space-x-4 mb-8">
<button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition" id="bounce-btn">Bounce!</button>
<button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition" id="feed-btn">Feed</button>
<button className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition" id="pet-btn">Pet</button>
</div>
<div className="hidden grid grid-cols-2 gap-2 mb-6" id="food-options">
<button className="food-item p-2 bg-yellow-100 rounded-lg hover:bg-yellow-200 transition flex items-center justify-center">
<span>Bouncy Ball 🏀</span>
</button>
<button className="food-item p-2 bg-pink-100 rounded-lg hover:bg-pink-200 transition flex items-center justify-center">
<span>Spring Roll 🌀</span>
</button>
<button className="food-item p-2 bg-blue-100 rounded-lg hover:bg-blue-200 transition flex items-center justify-center">
<span>Trampoline Cake 🍰</span>
</button>
<button className="food-item p-2 bg-green-100 rounded-lg hover:bg-green-200 transition flex items-center justify-center">
<span>Boing Berry 🫐</span>
</button>
</div>
<div className="text-center text-gray-700 italic" id="message"></div>
</div>


    </>
  );
}
