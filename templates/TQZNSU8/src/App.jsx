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



        function updateClock() {
            const now = new Date();
            
            const seconds = now.getSeconds();
            const minutes = now.getMinutes();
            const hours = now.getHours() % 12;
            
            // Calculate rotation angles
            const secondDegrees = (seconds / 60) * 360;
            const minuteDegrees = ((minutes + seconds/60) / 60) * 360;
            const hourDegrees = ((hours + minutes/60) / 12) * 360;
            
            // Apply rotation to clock hands
            document.getElementById('secondHand').style.transform = `translateX(-50%) rotate(${secondDegrees}deg)`;
            document.getElementById('minuteHand').style.transform = `translateX(-50%) rotate(${minuteDegrees}deg)`;
            document.getElementById('hourHand').style.transform = `translateX(-50%) rotate(${hourDegrees}deg)`;
            
            // Update digital time with seconds
            let displayHours = hours === 0 ? 12 : hours;
            const ampm = now.getHours() >= 12 ? 'PM' : 'AM';
            const displayMinutes = minutes.toString().padStart(2, '0');
            const displaySeconds = seconds.toString().padStart(2, '0');
            document.getElementById('digitalTime').textContent = `${displayHours}:${displayMinutes}:${displaySeconds} ${ampm}`;
        }
        
        // Update the clock immediately and then every second
        updateClock();
        setInterval(updateClock, 1000);
    
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
      
<div className="clock-container flex flex-col items-center justify-center gap-6">

<div className="text-white text-4xl font-mono font-bold tracking-widest bg-gray-800 px-6 py-3 rounded-lg shadow-lg" id="digitalTime">
            12:00:00 AM
        </div>

<div className="relative w-80 h-80 rounded-full bg-gray-800 border-4 border-gray-700 shadow-2xl">

<div className="absolute w-full h-full text-white text-xl font-bold">
<div className="absolute top-2 left-1/2 -translate-x-1/2">12</div>
<div className="absolute top-[10%] right-[25%]">1</div>
<div className="absolute top-[25%] right-[10%]">2</div>
<div className="absolute top-1/2 right-2 -translate-y-1/2">3</div>
<div className="absolute bottom-[25%] right-[10%]">4</div>
<div className="absolute bottom-[10%] right-[25%]">5</div>
<div className="absolute bottom-2 left-1/2 -translate-x-1/2">6</div>
<div className="absolute bottom-[10%] left-[25%]">7</div>
<div className="absolute bottom-[25%] left-[10%]">8</div>
<div className="absolute top-1/2 left-2 -translate-y-1/2">9</div>
<div className="absolute top-[25%] left-[10%]">10</div>
<div className="absolute top-[10%] left-[25%]">11</div>
</div>

<div className="absolute top-1/2 left-1/2 w-4 h-4 rounded-full bg-white -translate-x-1/2 -translate-y-1/2 z-10"></div>

<div className="absolute w-1.5 bg-white rounded-full origin-bottom" id="hourHand" style={{height: '24%', left: '50%', bottom: '50%', transform: 'translateX(-50%) rotate(0deg)'}}></div>
<div className="absolute w-1 bg-blue-400 rounded-full origin-bottom" id="minuteHand" style={{height: '35%', left: '50%', bottom: '50%', transform: 'translateX(-50%) rotate(0deg)'}}></div>
<div className="absolute w-0.5 bg-red-500 rounded-full origin-bottom" id="secondHand" style={{height: '40%', left: '50%', bottom: '50%', transform: 'translateX(-50%) rotate(0deg)'}}></div>
</div>
</div>


    </>
  );
}
