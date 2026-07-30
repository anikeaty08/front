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



        // Wait for page load
        document.addEventListener('DOMContentLoaded', () => {
            setTimeout(() => {
                // Set the main health score
                animateProgress(78);
                
                // Set the metrics with slight delays for nice animation sequence
                setTimeout(() => {
                    animateMetric('retention', 92);
                }, 300);
                
                setTimeout(() => {
                    animateMetric('revenue', 76);
                }, 600);
                
                setTimeout(() => {
                    animateMetric('satisfaction', 88);
                }, 900);
            }, 500);
        });
        
        // Animate the circular progress
        function animateProgress(targetPercent) {
            const circle = document.getElementById('progressRing');
            const percentText = document.getElementById('percentageText');
            const radius = circle.r.baseVal.value;
            const circumference = radius * 2 * Math.PI;
            
            circle.style.strokeDasharray = `${circumference} ${circumference}`;
            
            let percent = 0;
            const interval = setInterval(() => {
                if (percent >= targetPercent) {
                    clearInterval(interval);
                    return;
                }
                
                percent += 1;
                const offset = circumference - (percent / 100 * circumference);
                circle.style.strokeDashoffset = offset;
                percentText.textContent = `${percent}%`;
                
                // Update color based on percentage
                if (percent < 50) {
                    circle.classList.replace('text-green-500', 'text-red-500');
                } else if (percent < 75) {
                    circle.classList.replace('text-red-500', 'text-yellow-500');
                    circle.classList.replace('text-green-500', 'text-yellow-500');
                } else {
                    circle.classList.replace('text-red-500', 'text-green-500');
                    circle.classList.replace('text-yellow-500', 'text-green-500');
                }
            }, 20);
        }
        
        // Animate the metric bars
        function animateMetric(metric, targetPercent) {
            const bar = document.getElementById(`${metric}Bar`);
            const text = document.getElementById(`${metric}Text`);
            
            let percent = 0;
            const interval = setInterval(() => {
                if (percent >= targetPercent) {
                    clearInterval(interval);
                    return;
                }
                
                percent += 1;
                bar.style.width = `${percent}%`;
                text.textContent = `${percent}%`;
            }, 15);
        }
    
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
      
<div className="flex items-center justify-center min-h-screen p-4">
<div className="w-full max-w-md bg-white rounded-2xl shadow-lg overflow-hidden fade-in">

<div className="px-6 pt-6 pb-4">
<h2 className="text-2xl font-semibold text-gray-900">Book Health Score</h2>
<p className="text-sm text-gray-500 mt-1">Portfolio performance overview</p>
</div>

<div className="px-6 py-2 flex flex-col md:flex-row items-center justify-between">

<div className="relative w-40 h-40 flex items-center justify-center">
<svg className="w-full h-full" viewBox="0 0 120 120">

<circle className="text-gray-100" cx="60" cy="60" fill="transparent" r="50" stroke="currentColor" strokeWidth="10"></circle>

<circle className="progress-ring-circle text-green-500" cx="60" cy="60" fill="transparent" id="progressRing" r="50" stroke="currentColor" strokeDasharray="314.16" strokeDashoffset="314.16" strokeLinecap="round" strokeWidth="10"></circle>
</svg>

<div className="absolute flex flex-col items-center justify-center pulse">
<span className="text-4xl font-bold text-gray-900" id="percentageText">0%</span>
<span className="text-xs text-gray-500 mt-1">Health Score</span>
</div>
</div>

<div className="space-y-5 w-full md:w-1/2 mt-6 md:mt-0">
<div className="space-y-2">
<div className="flex items-center justify-between">
<span className="text-sm font-medium text-gray-600">Client Retention</span>
<span className="text-sm font-semibold text-gray-900" id="retentionText">0%</span>
</div>
<div className="w-full h-2 bg-gray-100 rounded-full">
<div className="h-2 bg-blue-500 rounded-full metric-bar" id="retentionBar" style={{width: `0%`}}></div>
</div>
</div>
<div className="space-y-2">
<div className="flex items-center justify-between">
<span className="text-sm font-medium text-gray-600">Revenue Growth</span>
<span className="text-sm font-semibold text-gray-900" id="revenueText">0%</span>
</div>
<div className="w-full h-2 bg-gray-100 rounded-full">
<div className="h-2 bg-purple-500 rounded-full metric-bar" id="revenueBar" style={{width: `0%`}}></div>
</div>
</div>
<div className="space-y-2">
<div className="flex items-center justify-between">
<span className="text-sm font-medium text-gray-600">Client Satisfaction</span>
<span className="text-sm font-semibold text-gray-900" id="satisfactionText">0%</span>
</div>
<div className="w-full h-2 bg-gray-100 rounded-full">
<div className="h-2 bg-green-500 rounded-full metric-bar" id="satisfactionBar" style={{width: `0%`}}></div>
</div>
</div>
</div>
</div>

<div className="px-6 py-4">
<div className="flex items-center justify-between">
<div>
<span className="text-xs font-medium text-gray-500">TREND</span>
<div className="flex items-center mt-1">
<svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="ml-1 text-sm font-medium text-green-500">+12% from last quarter</span>
</div>
</div>
<div className="flex space-x-1">
<span className="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-md">Q1</span>
<span className="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-md">Q2</span>
<span className="px-2 py-1 text-xs bg-gray-900 text-white rounded-md">Q3</span>
</div>
</div>
</div>

<div className="px-6 py-4 bg-gray-50 flex justify-between items-center border-t border-gray-100">
<p className="text-xs text-gray-500">Updated October 12, 2023</p>
<button className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors">
                    View Details
                </button>
</div>
</div>
</div>


    </>
  );
}
