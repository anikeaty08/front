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



    document.addEventListener('DOMContentLoaded', () => {
      const items = document.querySelectorAll('[data-animate]');
      items.forEach((el, idx) => {
        setTimeout(() => {
          el.classList.remove('opacity-0', 'translate-y-6');
        }, idx * 120);
      });

      const ctx = document.getElementById('hrChart').getContext('2d');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          datasets: [{
            label: 'Heart Rate',
            data: [72, 70, 75, 73, 71, 74, 72],
            borderColor: '#6366f1',
            backgroundColor: 'rgba(99, 102, 241, 0.1)',
            tension: 0.4,
            pointRadius: 3,
            pointHoverRadius: 4,
            fill: true
          }]
        },
        options: {
          responsive: true,
          plugins: { legend: { display: false } },
          scales: {
            y: { grid: { display: false }, beginAtZero: false },
            x: { grid: { display: false } }
          }
        }
      });

      document.querySelectorAll('[data-pill]').forEach(btn => {
        btn.addEventListener('click', () => {
          const li = btn.closest('li');
          li.classList.add('opacity-50');
          btn.textContent = 'Taken';
          btn.disabled = true;
          btn.classList.add('bg-teal-600', 'text-white', 'ring-0', 'hover:bg-teal-600');
        });
      });

      lucide.createIcons({ attr: { 'stroke-width': 1.5 } });
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
      

<div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto px-4 md:px-6 lg:px-8 pt-6 pb-28 space-y-6">

<header className="flex items-center justify-between opacity-0 translate-y-6 transition-all duration-700" data-animate="">
<h1 className="text-2xl tracking-tight font-semibold">PulseMate</h1>
<button className="p-2 rounded-full hover:bg-gray-100 transition">
<i className="w-5 h-5" data-lucide="bell"></i>
</button>
</header>

<section className="bg-white shadow-sm ring-1 ring-gray-200/60 rounded-xl overflow-hidden opacity-0 translate-y-6 transition-all duration-700" data-animate="">
<div className="p-4 flex items-center justify-between">
<div className="flex items-center space-x-3">
<div className="p-2 bg-indigo-600/10 rounded-full">
<i className="w-5 h-5 text-indigo-600" data-lucide="heart-pulse"></i>
</div>
<div>
<p className="text-sm text-gray-500">Current Heart Rate</p>
<p className="text-xl font-semibold tracking-tight">72 bpm</p>
</div>
</div>
<span className="inline-flex items-center text-xs px-2.5 py-0.5 rounded-full bg-green-50 text-green-700">
          Stable
        </span>
</div>
<div className="border-t border-dashed border-gray-200"></div>
<div className="p-4">
<p className="text-sm mb-2 text-gray-500">Past Week</p>
<div>
<div className="relative">
<canvas height="140" id="hrChart"></canvas>
</div>
</div>
</div>
</section>

<section className="bg-white shadow-sm ring-1 ring-gray-200/60 rounded-xl p-4 space-y-4 opacity-0 translate-y-6 transition-all duration-700" data-animate="">
<h2 className="text-lg font-semibold tracking-tight">Next Appointment</h2>
<div className="flex items-center justify-between">
<div className="flex items-center space-x-3">
<div className="p-2 bg-rose-600/10 rounded-full">
<i className="w-5 h-5 text-rose-600" data-lucide="stethoscope"></i>
</div>
<div>
<p className="text-sm font-medium">Dr. Emily Carter</p>
<p className="text-xs text-gray-500">Cardiologist • Sep 28, 10:30 AM</p>
</div>
</div>
<button className="text-sm px-3 py-1.5 rounded-md bg-rose-600 text-white hover:bg-rose-700 transition">Reschedule</button>
</div>
</section>

<section className="bg-white shadow-sm ring-1 ring-gray-200/60 rounded-xl p-4 opacity-0 translate-y-6 transition-all duration-700" data-animate="">
<h2 className="text-lg font-semibold tracking-tight mb-4">Today’s Medications</h2>
<ul className="space-y-3">
<li className="flex items-center justify-between">
<div className="flex items-center space-x-3">
<div className="p-2 bg-teal-600/10 rounded-full">
<i className="w-5 h-5 text-teal-600" data-lucide="pill"></i>
</div>
<div>
<p className="text-sm font-medium">Metformin</p>
<p className="text-xs text-gray-500">08:00 AM</p>
</div>
</div>
<button className="text-xs font-medium px-3 py-1.5 rounded-md ring-1 ring-gray-300 hover:bg-gray-100 transition" data-pill="">Mark taken</button>
</li>
<li className="flex items-center justify-between">
<div className="flex items-center space-x-3">
<div className="p-2 bg-teal-600/10 rounded-full">
<i className="w-5 h-5 text-teal-600" data-lucide="pill"></i>
</div>
<div>
<p className="text-sm font-medium">Lisinopril</p>
<p className="text-xs text-gray-500">12:00 PM</p>
</div>
</div>
<button className="text-xs font-medium px-3 py-1.5 rounded-md ring-1 ring-gray-300 hover:bg-gray-100 transition" data-pill="">Mark taken</button>
</li>
<li className="flex items-center justify-between">
<div className="flex items-center space-x-3">
<div className="p-2 bg-teal-600/10 rounded-full">
<i className="w-5 h-5 text-teal-600" data-lucide="pill"></i>
</div>
<div>
<p className="text-sm font-medium">Atorvastatin</p>
<p className="text-xs text-gray-500">09:00 PM</p>
</div>
</div>
<button className="text-xs font-medium px-3 py-1.5 rounded-md ring-1 ring-gray-300 hover:bg-gray-100 transition" data-pill="">Mark taken</button>
</li>
</ul>
</section>
</div>

<nav className="fixed bottom-0 inset-x-0 bg-white/95 backdrop-blur border-t border-gray-200">
<div className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto grid grid-cols-5 text-xs">
<button className="flex flex-col items-center gap-0.5 py-2 text-indigo-600">
<i className="w-5 h-5" data-lucide="home"></i>
        Home
      </button>
<button className="flex flex-col items-center gap-0.5 py-2 text-gray-500 hover:text-indigo-600 transition">
<i className="w-5 h-5" data-lucide="activity"></i>
        Vitals
      </button>
<button className="flex flex-col items-center gap-0.5 py-2 text-gray-500 hover:text-indigo-600 transition">
<i className="w-5 h-5" data-lucide="calendar"></i>
        Visits
      </button>
<button className="flex flex-col items-center gap-0.5 py-2 text-gray-500 hover:text-indigo-600 transition">
<i className="w-5 h-5" data-lucide="pill"></i>
        Meds
      </button>
<button className="flex flex-col items-center gap-0.5 py-2 text-gray-500 hover:text-indigo-600 transition">
<i className="w-5 h-5" data-lucide="settings"></i>
        Settings
      </button>
</div>
</nav>



    </>
  );
}
