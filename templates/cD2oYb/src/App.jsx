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
      
        function animateScore(start, end, duration) {
            const scoreElement = document.getElementById('score');
            const startTime = performance.now();
            
            function updateScore(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                
                const current = Math.floor(start + (end - start) * progress);
                scoreElement.textContent = `${current}/1000`;
                
                if (progress < 1) {
                    requestAnimationFrame(updateScore);
                }
            }
            
            requestAnimationFrame(updateScore);
        }
        
        function animateUpdate() {
            const bullet1 = document.getElementById('bullet-1');
            const bulletContainer = document.getElementById('bullet-container');
            const performance = document.getElementById('performance');
            const progressBar = document.getElementById('progress-bar');
            const summary = document.getElementById('summary');
            
            bullet1.classList.add('fade-out');
            
            setTimeout(() => {
                bullet1.remove();
                
                animateScore(700, 760, 1000);
                performance.textContent = 'Performance: Great';
                progressBar.style.width = '76%';
                progressBar.classList.remove('bg-yellow-500');
                progressBar.classList.add('bg-green-500');
                summary.textContent = '$175 of your commission is at risk. Get unpaid clients to pay ASAP. Enable autopay and encourage account creation to improve retention and protect future income.';
                
                const skeletonBullet = document.createElement('div');
                skeletonBullet.className = 'text-sm opacity-0 fade-in';
                skeletonBullet.innerHTML = `
                    <div class="skeleton h-4 w-3/4 rounded mb-1"></div>
                    <div class="skeleton h-4 w-1/2 rounded"></div>
                `;
                bulletContainer.appendChild(skeletonBullet);
                
                setTimeout(() => {
                    skeletonBullet.innerHTML = `
                        <span class="text-gray-500 italic">Elizabeth Longstrong (OSC12345678-01)</span> has not paid. Loss of $75 commission if not received. 
                        <a href="#" class="text-blue-600 hover:underline">Make a payment</a>
                    `;
                }, 1500);
                
            }, 500);
        }
        
        setTimeout(animateUpdate, 2000);
        setInterval(animateUpdate, 8000);
    
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
      
<div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<h2 className="text-lg font-bold text-gray-900">Book Score</h2>
<svg className="w-4 h-4 text-gray-400" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" fill-rule="evenodd"></path>
</svg>
</div>
<span className="text-2xl font-bold text-gray-900" id="score">700/1000</span>
</div>
<div className="mb-4">
<div className="w-full bg-gray-200 rounded-full h-2 mb-2">
<div className="bg-yellow-500 h-2 rounded-full transition-all duration-1000" id="progress-bar" style={{width: '70%'}}></div>
</div>
<div className="flex justify-between text-sm text-gray-600">
<span id="performance">Performance: Fair</span>
<span>Platform Average: 700</span>
</div>
</div>
<div className="mb-4">
<h3 className="font-semibold text-gray-900 mb-2">Summary:</h3>
<p className="text-sm text-gray-700 mb-4" id="summary">
                $250 of your commission is at risk. Get unpaid clients to pay ASAP. Enable autopay and encourage account creation to improve retention and protect future income.
            </p>
<div className="space-y-2" id="bullet-container">
<div className="text-sm" id="bullet-1">
<span className="text-gray-500 italic">Emily Jones (OSCPRIM004)</span> has not paid. Loss of $75 commission if not received. 
                    <a className="text-blue-600 hover:underline" href="#">Make a payment</a>
</div>
<div className="text-sm" id="bullet-2">
<span className="text-gray-500 italic">Members (Linda &amp; Daniel)</span> have not enabled autopay. 
                    <a className="text-blue-600 hover:underline" href="#">Enable autopay</a>
</div>
</div>
</div>
<div className="flex items-center justify-between text-sm">
<div className="flex items-center gap-2">
<span className="font-semibold text-gray-900">TREND</span>
<svg className="w-4 h-4 text-green-500" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" fill-rule="evenodd"></path>
</svg>
</div>
<span className="text-gray-600">+12% from last quarter</span>
</div>
</div>


    </>
  );
}
