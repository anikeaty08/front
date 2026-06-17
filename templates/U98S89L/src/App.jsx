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
      
    // Staggered reveal
    document.addEventListener('DOMContentLoaded', () => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.remove('opacity-0', 'translate-y-4', 'blur-sm');
            }, i * 120);
          }
        });
      }, { threshold: 0.1 });
      
      document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
      
      // Populate hourly cards
      const hours = ['1 PM','2 PM','3 PM','4 PM','5 PM','6 PM','7 PM','8 PM'];
      const temps = [68,67,66,65,64,62,60,59];
      const icons = ['cloud-sun','cloud-sun','cloud','cloud-rain','cloud-rain','cloud-lightning','cloud-snow','moon'];
      const hourContainer = document.querySelector('[data-animate] div.flex');
      const hourTemplate = document.getElementById('hour-card').content;
      
      hours.forEach((h, idx) => {
        const clone = hourTemplate.cloneNode(true);
        clone.querySelector('span').textContent = h;
        const icon = clone.querySelector('i');
        icon.setAttribute('data-lucide', icons[idx]);
        clone.querySelectorAll('span')[1].textContent = temps[idx] + '°';
        hourContainer.appendChild(clone);
      });
      
      // Populate daily rows
      const days = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun','Mon','Tue','Wed'];
      const highs = [70,69,68,72,74,75,71,68,67,66];
      const lows = [60,59,58,57,56,58,59,60,61,60];
      const dayIcons = ['cloud-rain','cloud-rain','cloud-sun','cloud','sun','sun','cloud','cloud-sun','cloud-rain','sun'];
      const dayContainer = document.querySelectorAll('[data-animate] .space-y-2')[0];
      const dayTemplate = document.getElementById('day-row').content;
      
      days.forEach((d, idx) => {
        const clone = dayTemplate.cloneNode(true);
        clone.querySelector('span').textContent = d;
        clone.querySelector('i').setAttribute('data-lucide', dayIcons[idx]);
        clone.querySelectorAll('span')[1].textContent = highs[idx] + '°';
        clone.querySelectorAll('span')[2].textContent = lows[idx] + '°';
        dayContainer.appendChild(clone);
      });
      
      // Render Chart
      const ctx = document.getElementById('precipChart').getContext('2d');
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Now','1h','2h','3h','4h','5h','6h','7h'],
          datasets: [{
            data: [10,20,50,35,15,5,0,0],
            backgroundColor: '#60a5fa',
            borderRadius: 4,
            barPercentage: .8,
          }]
        },
        options: {
          plugins: { legend: { display: false } },
          scales: {
            x: { ticks: { color: '#9ca3af' }, grid: { display: false } },
            y: { display: false }
          }
        }
      });
      
      // Lucide Icons
      lucide.createIcons();
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
      

<div className="relative w-[22rem] aspect-[390/844] rounded-[2.5rem] bg-[#0f1117] overflow-hidden border border-gray-800 shadow-2xl">

<div className="absolute top-4 left-1/2 -translate-x-1/2 h-[1.75rem] w-[7.5rem] bg-black/90 rounded-[1.25rem] flex items-center justify-center space-x-1 ring-1 ring-black/40 backdrop-blur-sm">
<i className="w-4 h-4 text-yellow-400" data-lucide="sun"></i>
<span className="text-xs font-medium">68°</span>
</div>

<div className="h-full flex flex-col pt-24 px-6 pb-10 overflow-y-auto space-y-8">

<section className="space-y-1 opacity-0 translate-y-4 blur-sm transition-all duration-700" data-animate="">
<h1 className="text-[5rem] leading-none font-semibold tracking-tight">68°</h1>
<p className="text-xl font-medium tracking-tight">San Francisco</p>
<p className="text-base text-blue-300">Partly Cloudy</p>
</section>
<div className="border-t border-white/10"></div>

<section className="opacity-0 translate-y-4 blur-sm transition-all duration-700 delay-100" data-animate="">
<h2 className="text-base font-semibold tracking-tight mb-3">HOURLY FORECAST</h2>
<div className="flex gap-3 overflow-x-auto pb-1">

<template id="hour-card">
<div className="shrink-0 w-16 h-28 flex flex-col justify-around items-center bg-white/5 rounded-lg ring-1 ring-white/10">
<span className="text-xs font-medium">1 PM</span>
<i className="w-5 h-5 text-blue-200" data-lucide="cloud-sun"></i>
<span className="text-sm font-semibold">68°</span>
</div>
</template>
</div>
</section>
<div className="border-t border-white/10"></div>

<section className="opacity-0 translate-y-4 blur-sm transition-all duration-700 delay-200" data-animate="">
<h2 className="text-base font-semibold tracking-tight mb-4">10-DAY FORECAST</h2>
<div className="space-y-2">

<template id="day-row">
<div className="flex items-center justify-between px-3 py-2 bg-white/5 rounded-lg ring-1 ring-white/10">
<span className="w-16 text-sm font-medium">Mon</span>
<i className="w-5 h-5 text-blue-200" data-lucide="cloud-rain"></i>
<div className="flex gap-2 font-semibold">
<span className="text-sm text-gray-200">70°</span>
<span className="text-sm text-gray-400">60°</span>
</div>
</div>
</template>
</div>
</section>
<div className="border-t border-white/10"></div>

<section className="opacity-0 translate-y-4 blur-sm transition-all duration-700 delay-300" data-animate="">
<h2 className="text-base font-semibold tracking-tight mb-4">PRECIPITATION</h2>
<div className="bg-white/5 rounded-lg ring-1 ring-white/10 p-4">
<div className="relative h-32">
<canvas className="h-full" id="precipChart"></canvas>
</div>
</div>
</section>
</div>
</div>


    </>
  );
}
