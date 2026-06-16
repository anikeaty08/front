import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    document.addEventListener('DOMContentLoaded', function() {
      const ctx = document.getElementById('performanceChart').getContext('2d');
      
      const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
      const userActivityData = [1250, 1480, 1320, 1900, 2270, 2610, 3200];
      const conversionData = [180, 204, 215, 250, 320, 350, 410];
      
      const gradient = ctx.createLinearGradient(0, 0, 0, 225);
      gradient.addColorStop(0, 'rgba(34, 211, 238, 0.5)');
      gradient.addColorStop(1, 'rgba(34, 211, 238, 0)');
      
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: labels,
          datasets: [
            {
              label: 'User Activity',
              data: userActivityData,
              borderColor: 'rgba(34, 211, 238, 1)',
              backgroundColor: gradient,
              tension: 0.4,
              fill: true,
              pointBackgroundColor: 'rgba(34, 211, 238, 1)',
              pointBorderColor: '#111827',
              pointBorderWidth: 2,
              pointRadius: 4,
              pointHoverRadius: 6
            },
            {
              label: 'Conversions',
              data: conversionData,
              borderColor: 'rgba(103, 232, 249, 0.7)',
              backgroundColor: 'transparent',
              tension: 0.4,
              borderDash: [5, 5],
              pointBackgroundColor: 'rgba(103, 232, 249, 0.7)',
              pointBorderColor: '#111827',
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
              backgroundColor: 'rgba(17, 24, 39, 0.9)',
              titleColor: '#9CA3AF',
              bodyColor: '#F9FAFB',
              borderColor: '#374151',
              borderWidth: 1,
              padding: 10
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
                color: '#374151'
              },
              ticks: {
                color: '#9CA3AF',
                font: {
                  size: 10
                }
              }
            }
          }
        }
      });
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed w-full bg-gray-900/90 backdrop-blur-sm z-50 border-b border-gray-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between h-16">
<div className="flex items-center">
<a className="flex-shrink-0 flex items-center" href="#">
<svg className="h-8 w-auto text-cyan-400" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M2 17L12 22L22 17" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M2 12L12 17L22 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="ml-2 text-lg font-bold">DataMetrics</span>
</a>
<nav className="hidden md:ml-8 md:flex md:space-x-8">
<a className="text-cyan-400 px-3 py-2 text-sm font-medium" href="#">Dashboard</a>
<a className="text-gray-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium" href="#">Analytics</a>
<a className="text-gray-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium" href="#">Reports</a>
<a className="text-gray-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium" href="#">Settings</a>
</nav>
</div>
<div className="flex items-center">
<a className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-gray-900 bg-cyan-400 hover:bg-cyan-500" href="#">
            Start free trial
          </a>
</div>
</div>
</div>
</header>

<section className="relative pt-28 pb-20 overflow-hidden">
<div className="absolute inset-0 z-0 opacity-10">
<svg className="absolute right-0 top-0 h-full w-full" fill="none" viewbox="0 0 400 400">
<defs>
<pattern height="20" id="grid-pattern" patternunits="userSpaceOnUse" width="20">
<path d="M0.5 20V0.5H20" fill="none" stroke="currentColor" stroke-opacity="0.4"></path>
</pattern>
</defs>
<rect fill="url(#grid-pattern)" height="100%" width="100%"></rect>
</svg>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">

<div className="sm:text-center lg:text-left lg:mr-8">
<h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
<span className="block mb-2">Transform your data</span>
<span className="block text-cyan-400">into business insights</span>
</h1>
<p className="mt-6 text-base text-gray-400 sm:text-lg sm:max-w-xl sm:mx-auto lg:mx-0">
            Our platform helps teams analyze, visualize, and act on data in real-time. Make better decisions faster with advanced analytics and intuitive dashboards.
          </p>
<div className="mt-10 sm:flex sm:justify-center lg:justify-start gap-4">
<div className="rounded-md shadow">
<a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-cyan-400 hover:bg-cyan-500 md:py-4 md:text-lg md:px-10" href="#">
                Get started
              </a>
</div>
<div className="mt-3 sm:mt-0">
<a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-cyan-400 bg-gray-800 hover:bg-gray-700 md:py-4 md:text-lg md:px-10" href="#">
                Watch demo
              </a>
</div>
</div>
</div>

<div className="mt-16 lg:mt-0 relative">
<div className="bg-gray-900 rounded-lg shadow-2xl overflow-hidden border border-gray-800">

<div className="px-6 py-5 border-b border-gray-800 bg-gray-900 flex items-center justify-between">
<div>
<h3 className="text-lg font-medium text-white">Performance Dashboard</h3>
<p className="text-sm text-gray-400 mt-1">Real-time metrics overview</p>
</div>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-cyan-900 text-cyan-300">
<span className="mr-1 h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
                Live
              </span>
</div>

<div className="px-6 py-6">
<div className="h-52 w-full">
<canvas className="w-full h-full" id="performanceChart"></canvas>
</div>
</div>

<div className="px-6 pb-6">
<dl className="grid grid-cols-3 gap-6">
<div className="overflow-hidden p-5 bg-white/20 rounded-lg border border-white/10 shadow-inner">
<dt className="text-sm font-medium text-gray-300 truncate">Active Users</dt>
<dd className="mt-3 text-3xl font-semibold text-cyan-400">9.4K</dd>
<dd className="mt-2 text-xs text-emerald-400 flex items-center">
<svg className="h-3 w-3 mr-1" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M12 7a1 1 0 10-2 0v4a1 1 0 102 0V7z" fill-rule="evenodd"></path>
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.5a1 1 0 102 0V5z" fill-rule="evenodd"></path>
</svg>
                    +32.7% increase
                  </dd>
</div>
<div className="overflow-hidden p-5 bg-white/20 rounded-lg border border-white/10 shadow-inner">
<dt className="text-sm font-medium text-gray-300 truncate">Conversion Rate</dt>
<dd className="mt-3 text-3xl font-semibold text-cyan-400">4.7%</dd>
<dd className="mt-2 text-xs text-emerald-400 flex items-center">
<svg className="h-3 w-3 mr-1" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M12 7a1 1 0 10-2 0v4a1 1 0 102 0V7z" fill-rule="evenodd"></path>
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.5a1 1 0 102 0V5z" fill-rule="evenodd"></path>
</svg>
                    +0.8% increase
                  </dd>
</div>
<div className="overflow-hidden p-5 bg-white/20 rounded-lg border border-white/10 shadow-inner">
<dt className="text-sm font-medium text-gray-300 truncate">Revenue</dt>
<dd className="mt-3 text-3xl font-semibold text-cyan-400">$58.3K</dd>
<dd className="mt-2 text-xs text-emerald-400 flex items-center">
<svg className="h-3 w-3 mr-1" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M12 7a1 1 0 10-2 0v4a1 1 0 102 0V7z" fill-rule="evenodd"></path>
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.5a1 1 0 102 0V5z" fill-rule="evenodd"></path>
</svg>
                    +21.2% increase
                  </dd>
</div>
</dl>

<div className="mt-8 pt-6 border-t border-gray-800">
<div className="flex items-start p-5 bg-white/10 rounded-lg">
<div className="flex-shrink-0 mt-1">
<svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" fill-rule="evenodd"></path>
</svg>
</div>
<div className="ml-3">
<h3 className="text-sm font-medium text-gray-200">Key Insight</h3>
<p className="text-sm text-gray-400 mt-1">Mobile traffic has increased by 43% this month. Consider optimizing your mobile experience.</p>
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
