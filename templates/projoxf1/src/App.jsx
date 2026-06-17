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



        // Initialize Lucide icons
        lucide.createIcons();
        
        // Traffic chart
        const ctx = document.getElementById('trafficChart').getContext('2d');
        const trafficChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['8AM', '10AM', '12PM', '2PM', '4PM', '6PM', '8PM'],
                datasets: [{
                    label: 'Pedestrian Traffic',
                    data: [20, 40, 65, 55, 40, 65, 45],
                    borderColor: '#3b82f6',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        displayColors: false,
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        titleFont: {
                            size: 10
                        },
                        bodyFont: {
                            size: 10
                        },
                        padding: 6
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(255, 255, 255, 0.03)'
                        },
                        border: {
                            display: false
                        },
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.5)',
                            font: {
                                size: 8
                            },
                            maxTicksLimit: 5
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        },
                        border: {
                            display: false
                        },
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.5)',
                            font: {
                                size: 8
                            }
                        }
                    }
                },
                elements: {
                    point: {
                        radius: 1,
                        hoverRadius: 3
                    },
                    line: {
                        borderWidth: 2
                    }
                }
            }
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
      
<div className="flex h-screen overflow-hidden">

<div className="hidden md:flex md:flex-col md:w-60 border-r border-gray-800/60 shrink-0">
<div className="p-4 flex items-center h-14">
<span className="text-xl font-semibold tracking-tight text-white">oxford<span className="text-blue-400">AI</span></span>
</div>
<nav className="flex-1 p-2 overflow-y-auto">
<ul className="space-y-1">
<li>
<a className="flex items-center p-2.5 text-sm rounded-lg hover:bg-gray-900/60 transition-colors duration-200" href="#">
<i className="w-5 h-5 mr-3 stroke-current" data-lucide="home"></i>
<span>Home</span>
</a>
</li>
<li>
<a className="flex items-center p-2.5 text-sm rounded-lg hover:bg-gray-900/60 transition-colors duration-200" href="#">
<i className="w-5 h-5 mr-3 stroke-current" data-lucide="search"></i>
<span>Explore</span>
</a>
</li>
<li>
<a className="flex items-center p-2.5 text-sm font-semibold rounded-lg bg-gray-900/80 transition-colors duration-200" href="#">
<i className="w-5 h-5 mr-3 stroke-current" data-lucide="message-square"></i>
<span>Oxford Chat</span>
</a>
</li>
<li>
<a className="flex items-center p-2.5 text-sm rounded-lg hover:bg-gray-900/60 transition-colors duration-200" href="#">
<i className="w-5 h-5 mr-3 stroke-current" data-lucide="building"></i>
<span>Businesses</span>
</a>
</li>
<li>
<a className="flex items-center p-2.5 text-sm rounded-lg hover:bg-gray-900/60 transition-colors duration-200" href="#">
<i className="w-5 h-5 mr-3 stroke-current" data-lucide="bar-chart"></i>
<span>Insights</span>
</a>
</li>
<li>
<a className="flex items-center p-2.5 text-sm rounded-lg hover:bg-gray-900/60 transition-colors duration-200" href="#">
<i className="w-5 h-5 mr-3 stroke-current" data-lucide="user"></i>
<span>Profile</span>
</a>
</li>
</ul>
</nav>
<div className="p-3 border-t border-gray-800/60">
<div className="flex items-center">
<img alt="Profile" className="w-8 h-8 rounded-full mr-2" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div>
<p className="text-xs font-semibold">Jordan Wilson</p>
<p className="text-xs text-gray-400">@jordanw</p>
</div>
</div>
</div>
</div>

<div className="flex-1 flex flex-col overflow-hidden">

<header className="md:hidden border-b border-gray-800/60 p-3 flex items-center justify-between">
<div className="flex items-center">
<button className="mr-2">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
<span className="text-lg font-semibold">oxford<span className="text-blue-400">AI</span></span>
</div>
<img alt="Profile" className="w-7 h-7 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</header>

<div className="flex-1 overflow-hidden flex flex-col">

<div className="border-b border-gray-800/60">
<div className="flex">
<button className="flex-1 py-3 text-sm font-semibold border-b-2 border-blue-400">For You</button>
<button className="flex-1 py-3 text-sm font-normal text-gray-400 hover:bg-gray-900/50 transition-colors duration-200">Business</button>
<button className="flex-1 py-3 text-sm font-normal text-gray-400 hover:bg-gray-900/50 transition-colors duration-200">University</button>
</div>
</div>

<div className="flex-1 p-3 overflow-y-auto pb-16 space-y-5">

<div className="flex items-start">
<div className="flex-shrink-0 mr-3">
<div className="w-9 h-9 rounded-full bg-blue-500 flex items-center justify-center">
<i className="w-5 h-5 text-white" data-lucide="brain-circuit"></i>
</div>
</div>
<div className="flex-1 bg-gray-900/60 rounded-lg p-3">
<p className="text-xs font-medium mb-2">oxfordAI</p>
<p className="text-sm">Good morning, Jordan! Current temperature in Oxford is 68°F with partly cloudy skies. Here's what you should know today:</p>
<div className="mt-2 bg-gray-800/60 rounded-lg p-2">
<div className="flex items-center mb-1">
<i className="w-4 h-4 text-yellow-400 mr-1.5" data-lucide="alert-triangle"></i>
<span className="text-xs font-medium">Traffic Alert</span>
</div>
<p className="text-xs text-gray-300">Congestion reported on Jackson Avenue near the Square. Expected to clear by 11 AM.</p>
</div>
<div className="mt-2 bg-gray-800/60 rounded-lg p-2">
<div className="flex items-center mb-1">
<i className="w-4 h-4 text-blue-400 mr-1.5" data-lucide="calendar"></i>
<span className="text-xs font-medium">Today's Events</span>
</div>
<p className="text-xs text-gray-300">Farmers Market on the Square (8 AM - 12 PM)<br/>Ole Miss Baseball vs. LSU (6 PM)</p>
</div>
</div>
</div>

<div className="flex items-start">
<div className="flex-shrink-0 mr-3">
<img alt="Profile" className="w-9 h-9 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="flex-1 bg-gray-900/60 rounded-lg p-3">
<p className="text-xs font-medium mb-2">You</p>
<p className="text-sm">Which restaurants on the Square have the shortest wait times right now?</p>
</div>
</div>

<div className="flex items-start">
<div className="flex-shrink-0 mr-3">
<div className="w-9 h-9 rounded-full bg-blue-500 flex items-center justify-center">
<i className="w-5 h-5 text-white" data-lucide="brain-circuit"></i>
</div>
</div>
<div className="flex-1 bg-gray-900/60 rounded-lg p-3">
<p className="text-xs font-medium mb-2">oxfordAI</p>
<p className="text-sm mb-2">Based on current data, here are restaurants on the Square with shortest wait times:</p>
<div className="space-y-2">
<div className="flex items-center justify-between p-2 bg-gray-800/60 rounded-lg">
<div className="flex items-center">
<div className="w-7 h-7 bg-green-500 rounded-full flex items-center justify-center mr-2">
<span className="text-xs font-semibold">5</span>
</div>
<div>
<p className="text-xs font-medium">City Grocery</p>
<p className="text-xs text-gray-400">5 min wait • 0.2 miles</p>
</div>
</div>
<button className="text-xs bg-blue-500 hover:bg-blue-600 px-2 py-0.5 rounded-md transition-colors">Reserve</button>
</div>
<div className="flex items-center justify-between p-2 bg-gray-800/60 rounded-lg">
<div className="flex items-center">
<div className="w-7 h-7 bg-green-500 rounded-full flex items-center justify-center mr-2">
<span className="text-xs font-semibold">10</span>
</div>
<div>
<p className="text-xs font-medium">Ajax Diner</p>
<p className="text-xs text-gray-400">10 min wait • 0.1 miles</p>
</div>
</div>
<button className="text-xs bg-blue-500 hover:bg-blue-600 px-2 py-0.5 rounded-md transition-colors">Reserve</button>
</div>
<div className="flex items-center justify-between p-2 bg-gray-800/60 rounded-lg">
<div className="flex items-center">
<div className="w-7 h-7 bg-yellow-500 rounded-full flex items-center justify-center mr-2">
<span className="text-xs font-semibold">15</span>
</div>
<div>
<p className="text-xs font-medium">Boure</p>
<p className="text-xs text-gray-400">15 min wait • 0.3 miles</p>
</div>
</div>
<button className="text-xs bg-blue-500 hover:bg-blue-600 px-2 py-0.5 rounded-md transition-colors">Reserve</button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-black border-t border-gray-800/60 p-2.5 sticky bottom-0 flex items-center">
<div className="flex-1 bg-gray-900/60 rounded-full flex items-center p-1.5">
<input className="bg-transparent flex-1 outline-none text-sm px-2" placeholder="Ask oxfordAI anything..." type="text"/>
<button className="ml-1 text-blue-400 hover:text-blue-300 transition-colors p-1">
<i className="w-4 h-4" data-lucide="send"></i>
</button>
</div>
</div>
</div>

<div className="hidden lg:block lg:w-72 border-l border-gray-800/60 overflow-y-auto shrink-0">
<div className="p-3 space-y-4">
<h2 className="text-sm font-semibold">Oxford Business Insights</h2>

<div className="bg-yellow-900/20 border border-yellow-800/30 rounded-lg p-2.5">
<div className="flex items-center mb-1.5">
<i className="w-4 h-4 text-yellow-400 mr-1.5" data-lucide="alert-triangle"></i>
<p className="text-xs font-medium text-yellow-200">Business Alert</p>
</div>
<p className="text-xs text-gray-300">Expect a 15% dip in sales tonight. Heavy traffic and thunderstorms forecasted after 7 PM.</p>
</div>

<div>
<h3 className="text-xs font-medium mb-1.5">Square Traffic Today</h3>
<div className="bg-gray-900/60 rounded-lg p-2.5">
<canvas height="120" id="trafficChart"></canvas>
</div>
</div>

<div className="bg-gray-900/60 rounded-lg p-2.5">
<h3 className="text-xs font-medium mb-1.5">Weather Forecast</h3>
<div className="flex items-center justify-between">
<div className="flex items-center">
<i className="w-7 h-7 text-blue-400 mr-2" data-lucide="cloud-rain"></i>
<div>
<p className="text-base font-medium">68°F</p>
<p className="text-xs text-gray-400">Thunderstorms later</p>
</div>
</div>
<div className="text-right">
<p className="text-xs">Wind: 8mph</p>
<p className="text-xs">Humidity: 75%</p>
</div>
</div>
</div>

<div>
<div className="flex items-center justify-between mb-1.5">
<h3 className="text-xs font-medium">Local Business Directory</h3>
<button className="text-xs text-blue-400 hover:text-blue-300">View All</button>
</div>
<div className="space-y-2">
<div className="bg-gray-900/60 rounded-lg p-2.5">
<div className="flex items-center">
<div className="w-7 h-7 rounded-full bg-blue-500/80 mr-2 flex items-center justify-center">
<span className="text-xs font-semibold">SG</span>
</div>
<div>
<p className="text-xs font-medium">Square Grill</p>
<p className="text-xs text-gray-400">Restaurant • Open until 10PM</p>
</div>
</div>
</div>
<div className="bg-gray-900/60 rounded-lg p-2.5">
<div className="flex items-center">
<div className="w-7 h-7 rounded-full bg-purple-500/80 mr-2 flex items-center justify-center">
<span className="text-xs font-semibold">NS</span>
</div>
<div>
<p className="text-xs font-medium">Neilson's</p>
<p className="text-xs text-gray-400">Dept Store • Open until 7PM</p>
</div>
</div>
</div>
<div className="bg-gray-900/60 rounded-lg p-2.5">
<div className="flex items-center">
<div className="w-7 h-7 rounded-full bg-green-500/80 mr-2 flex items-center justify-center">
<span className="text-xs font-semibold">SB</span>
</div>
<div>
<p className="text-xs font-medium">Square Books</p>
<p className="text-xs text-gray-400">Bookstore • Open until 9PM</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
