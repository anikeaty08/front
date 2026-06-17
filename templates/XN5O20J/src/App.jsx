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



        document.addEventListener('DOMContentLoaded', function() {
            // Initialize Lucide icons
            lucide.createIcons();

            // Chart data
            const chartData = {
                labels: [
                    'Diarrhea',
                    'Brain Fog', 
                    'Constipation',
                    'Pain',
                    'Discomfort',
                    'Bloating',
                    'Urgency',
                    'Distension',
                    'Flatulence',
                    'Fatigue',
                    'Belching',
                    'Duration'
                ],
                values: [82, 68, 50, 41, 39, 40, 38, 37, 34, 34, 18, 11],
                colors: [
                    '#ef4444', // Red for Diarrhea
                    '#8b5cf6', // Purple for Brain Fog
                    '#0ea5e9', // Blue for Constipation
                    '#f59e0b', // Amber for Pain
                    '#ec4899', // Pink for Discomfort
                    '#10b981', // Emerald for Bloating
                    '#f97316', // Orange for Urgency
                    '#6366f1', // Indigo for Distension
                    '#84cc16', // Lime for Flatulence
                    '#06b6d4', // Cyan for Fatigue
                    '#8b5cf6', // Violet for Belching
                    '#64748b'  // Slate for Duration
                ]
            };

            // Create chart
            const ctx = document.getElementById('symptomChart').getContext('2d');
            new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: chartData.labels,
                    datasets: [{
                        data: chartData.values,
                        backgroundColor: chartData.colors,
                        borderWidth: 2,
                        borderColor: '#ffffff',
                        hoverBorderWidth: 3
                    }]
                },
                options: {
                    responsive: false,
                    maintainAspectRatio: false,
                    cutout: '65%',
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            backgroundColor: 'rgba(0, 0, 0, 0.8)',
                            titleColor: '#ffffff',
                            bodyColor: '#ffffff',
                            borderColor: '#374151',
                            borderWidth: 1,
                            callbacks: {
                                label: function(context) {
                                    return `${context.label}: -${context.raw}%`;
                                }
                            }
                        }
                    },
                    hover: {
                        animationDuration: 200
                    }
                }
            });

            // Create legend
            const legendGrid = document.getElementById('legendGrid');
            chartData.labels.forEach((label, index) => {
                const legendItem = document.createElement('div');
                legendItem.className = 'slide-up flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200';
                legendItem.style.animationDelay = `${0.4 + (index * 0.05)}s`;
                
                legendItem.innerHTML = `
                    <div class="w-4 h-4 rounded-full flex-shrink-0" style="background-color: ${chartData.colors[index]}"></div>
                    <div class="min-w-0 flex-1">
                        <div class="text-sm font-medium text-gray-900">${label}</div>
                        <div class="text-xs text-gray-500">-${chartData.values[index]}%</div>
                    </div>
                `;
                
                legendGrid.appendChild(legendItem);
            });
        });
    
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
      
<div className="max-w-6xl mx-auto p-6">

<div className="fade-in mb-8">
<h1 className="text-3xl font-semibold text-gray-900 tracking-tight mb-2">Clinical Research Data</h1>
<p className="text-gray-600 text-lg">Patient-reported symptom improvement analysis</p>
</div>

<div className="slide-up stagger-1 bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
<div className="p-8">

<div className="text-center mb-8">
<h2 className="text-2xl font-semibold text-gray-900 tracking-tight mb-2">
                        GI Symptom Reduction
                    </h2>
<p className="text-gray-600">After mBIOTA Elemental™ Treatment</p>
</div>

<div className="relative flex justify-center items-center mb-8">
<div className="relative">
<canvas height="400" id="symptomChart" width="400"></canvas>
<div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none">
<div className="text-center">
<div className="text-4xl font-bold text-gray-900 mb-1">12</div>
<div className="text-sm text-gray-600 font-medium">Symptoms</div>
<div className="text-sm text-gray-600">Measured</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" id="legendGrid">

</div>
</div>

<div className="slide-up stagger-2 bg-gray-50 border-t border-gray-200 px-8 py-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="text-center">
<div className="text-2xl font-bold text-emerald-600">-42%</div>
<div className="text-sm text-gray-600">Average Reduction</div>
</div>
<div className="text-center">
<div className="text-2xl font-bold text-blue-600">82%</div>
<div className="text-sm text-gray-600">Highest Improvement</div>
</div>
<div className="text-center">
<div className="text-2xl font-bold text-purple-600">100%</div>
<div className="text-sm text-gray-600">Symptoms Improved</div>
</div>
</div>
</div>
</div>

<div className="slide-up stagger-3 mt-6 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
<div className="flex items-start gap-4">
<div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
<i className="w-4 h-4 text-blue-600" data-lucide="info"></i>
</div>
<div>
<h3 className="font-semibold text-gray-900 mb-2">Study Methodology</h3>
<p className="text-gray-600 text-sm leading-relaxed">
                        Data represents median percentage reduction in symptom severity scores measured using validated clinical assessment tools. 
                        Results based on patient-reported outcomes before and after mBIOTA Elemental™ treatment protocol.
                    </p>
</div>
</div>
</div>
</div>


    </>
  );
}
