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



    // Initialize the chart
    document.addEventListener('DOMContentLoaded', function() {
      const ctx = document.getElementById('insightsChart').getContext('2d');
      
      // Generate some sample data
      const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
      const userActivityData = [65, 78, 86, 74, 92, 108, 136];
      const conversionData = [28, 32, 36, 42, 48, 56, 64];
      
      const gradient = ctx.createLinearGradient(0, 0, 0, 225);
      gradient.addColorStop(0, 'rgba(79, 70, 229, 0.6)');
      gradient.addColorStop(1, 'rgba(79, 70, 229, 0)');
      
      const chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: labels,
          datasets: [
            {
              label: 'User Activity',
              data: userActivityData,
              borderColor: 'rgba(79, 70, 229, 1)',
              backgroundColor: gradient,
              tension: 0.4,
              fill: true,
              pointBackgroundColor: 'rgba(79, 70, 229, 1)',
              pointBorderColor: '#fff',
              pointBorderWidth: 2,
              pointRadius: 4,
              pointHoverRadius: 6
            },
            {
              label: 'Conversions',
              data: conversionData,
              borderColor: 'rgba(99, 102, 241, 0.7)',
              backgroundColor: 'transparent',
              tension: 0.4,
              borderDash: [5, 5],
              pointBackgroundColor: 'rgba(99, 102, 241, 0.7)',
              pointBorderColor: '#fff',
              pointBorderWidth: 2,
              pointRadius: 3,
              pointHoverRadius: 5
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              mode: 'index',
              intersect: false,
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              titleColor: '#6B7280',
              bodyColor: '#111827',
              borderColor: '#E5E7EB',
              borderWidth: 1,
              padding: 10,
              boxPadding: 4
            }
          },
          scales: {
            x: {
              grid: {
                display: false
              },
              ticks: {
                color: '#9CA3AF',
                font: {
                  size: 10
                }
              }
            },
            y: {
              grid: {
                borderDash: [2, 4],
                color: '#E5E7EB'
              },
              ticks: {
                color: '#9CA3AF',
                font: {
                  size: 10
                },
                padding: 8
              }
            }
          }
        }
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
      

<header className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between h-16">
<div className="flex items-center">
<a className="flex-shrink-0 flex items-center" href="#">
<svg className="h-8 w-auto text-indigo-600" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M2 17L12 22L22 17" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M2 12L12 17L22 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="ml-2 text-lg font-bold">DataFlow</span>
</a>
<nav className="hidden md:ml-8 md:flex md:space-x-8">
<a className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium" href="#">Features</a>
<a className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium" href="#">Pricing</a>
<a className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium" href="#">Docs</a>
<a className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium" href="#">About</a>
</nav>
</div>
<div className="hidden md:flex items-center">
<a className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium" href="#">Sign in</a>
<a className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700" href="#">
            Get started
          </a>
</div>
<div className="flex items-center md:hidden">
<button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100" type="button">
<svg className="h-6 w-6" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>
</div>
</header>

<section className="relative pt-24 pb-16 overflow-hidden">

<div className="absolute inset-0 z-0">
<svg className="absolute right-0 top-0 h-full w-1/2 translate-x-1/3 opacity-20" fill="none" viewbox="0 0 400 400">
<defs>
<pattern height="20" id="grid-pattern" patternunits="userSpaceOnUse" width="20">
<path d="M0.5 20V0.5H20" fill="none" stroke="currentColor" stroke-opacity="0.2"></path>
</pattern>
</defs>
<rect fill="url(#grid-pattern)" height="100%" width="100%"></rect>
<g className="opacity-30">
<rect height="21" width="21" x="100" y="50"></rect>
<rect height="21" width="21" x="140" y="90"></rect>
<rect height="21" width="21" x="200" y="70"></rect>
<rect height="21" width="21" x="160" y="130"></rect>
<rect height="21" width="21" x="220" y="150"></rect>
<rect height="21" width="21" x="180" y="190"></rect>
<rect height="21" width="21" x="240" y="210"></rect>
<rect height="21" width="21" x="200" y="250"></rect>
<rect height="21" width="21" x="260" y="270"></rect>
<rect height="21" width="21" x="220" y="310"></rect>
</g>
</svg>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">

<div className="sm:text-center lg:text-left lg:mr-8">
<h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
<span className="block">Data insights for</span>
<span className="block text-indigo-600">modern teams</span>
</h1>
<p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto lg:mx-0">
            Transform your data into actionable insights. Our platform helps teams analyze, visualize, and collaborate on data in real-time.
          </p>
<div className="mt-8 sm:mt-10 sm:flex sm:justify-center lg:justify-start">
<div className="rounded-md shadow">
<a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10" href="#">
                Get started
              </a>
</div>
<div className="mt-3 sm:mt-0 sm:ml-3">
<a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10" href="#">
                Live demo
              </a>
</div>
</div>
</div>

<div className="mt-12 lg:mt-0 relative">
<div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200">

<div className="pointer-events-none absolute top-0 left-0 h-full w-full">
<div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-indigo-500/1 opacity-100">
<svg className="absolute inset-0 h-full w-full" style={{maskImage: 'radial-gradient(farthest-side at top, white, transparent)'}}>
<defs>
<pattern height="20" id="stats-pattern" patternunits="userSpaceOnUse" width="20" x="-12" y="4">
<path d="M0.5 20V0.5H20" fill="none"></path>
</pattern>
</defs>
<rect fill="url(#stats-pattern)" height="100%" width="100%"></rect>
<g className="fill-indigo-500/5 stroke-indigo-500/20">
<rect height="21" width="21" x="140" y="10"></rect>
<rect height="21" width="21" x="160" y="30"></rect>
<rect height="21" width="21" x="180" y="50"></rect>
<rect height="21" width="21" x="200" y="70"></rect>
<rect height="21" width="21" x="160" y="90"></rect>
</g>
</svg>
</div>
</div>

<div className="px-6 py-8 relative z-10">
<div className="flex items-center justify-between">
<div>
<h3 className="text-lg font-medium text-gray-900">Real-time Dashboard</h3>
<p className="mt-1 text-sm text-gray-500">Live metrics from your data streams</p>
</div>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
<span className="mr-1 h-2 w-2 rounded-full bg-green-500"></span>
                  Live
                </span>
</div>

<div className="mt-4 h-40 w-full">
<canvas className="w-full h-full" id="insightsChart"></canvas>
</div>

<dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
<div className="overflow-hidden">
<dt className="text-sm font-medium text-gray-500 truncate">Data Points</dt>
<dd className="mt-1 text-3xl font-semibold text-indigo-600">8.2M</dd>
<dd className="mt-1 text-xs text-green-600 flex items-center">
<svg className="h-3 w-3 mr-1" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M12 7a1 1 0 10-2 0v4a1 1 0 102 0V7z" fill-rule="evenodd"></path>
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.5a1 1 0 102 0V5z" fill-rule="evenodd"></path>
</svg>
                    +24.3% from last period
                  </dd>
</div>
<div className="overflow-hidden">
<dt className="text-sm font-medium text-gray-500 truncate">Avg. Response</dt>
<dd className="mt-1 text-3xl font-semibold text-indigo-600">42ms</dd>
<dd className="mt-1 text-xs text-green-600 flex items-center">
<svg className="h-3 w-3 mr-1" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M12 7a1 1 0 10-2 0v4a1 1 0 102 0V7z" fill-rule="evenodd"></path>
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.5a1 1 0 102 0V5z" fill-rule="evenodd"></path>
</svg>
                    -12.5% faster
                  </dd>
</div>
<div className="overflow-hidden">
<dt className="text-sm font-medium text-gray-500 truncate">Insights Generated</dt>
<dd className="mt-1 text-3xl font-semibold text-indigo-600">1,247</dd>
<dd className="mt-1 text-xs text-green-600 flex items-center">
<svg className="h-3 w-3 mr-1" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M12 7a1 1 0 10-2 0v4a1 1 0 102 0V7z" fill-rule="evenodd"></path>
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.5a1 1 0 102 0V5z" fill-rule="evenodd"></path>
</svg>
                    +18.7% from last period
                  </dd>
</div>
</dl>

<div className="mt-5 border-t border-gray-200 pt-5">
<div className="flex items-start">
<div className="flex-shrink-0 mt-1">
<svg className="h-5 w-5 text-yellow-500" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" fill-rule="evenodd"></path>
</svg>
</div>
<div className="ml-3">
<h3 className="text-sm font-medium text-gray-900">Key Insight</h3>
<p className="text-sm text-gray-500">User engagement increased by 37% after implementing the recommendation engine.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>


    </>
  );
}
