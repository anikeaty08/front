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
      
      // Staggered Animation Reveal
      document.addEventListener("DOMContentLoaded", () => {
        const sections = document.querySelectorAll("[data-anime]");
        sections.forEach((el, i) => {
          setTimeout(() => {
            el.classList.remove("opacity-0", "translate-y-4", "blur-sm");
          }, 300 + i * 200);
        });

        // Populate Hourly Forecast
        const hours = [
          { time: "12 AM", icon: "cloud-rain", temp: 55 },
          { time: "1 AM", icon: "cloud", temp: 54 },
          { time: "2 AM", icon: "cloud", temp: 54 },
          { time: "3 AM", icon: "cloud", temp: 53 },
          { time: "4 AM", icon: "cloud-snow", temp: 53 },
          { time: "5 AM", icon: "cloud-rain", temp: 52 },
          { time: "6 AM", icon: "cloud-rain", temp: 52 },
          { time: "7 AM", icon: "cloud-sun", temp: 55 },
          { time: "8 AM", icon: "sun", temp: 58 },
          { time: "9 AM", icon: "sun", temp: 61 },
        ];

        const hourHolder = document.querySelector(
          "[data-anime] div.flex.space-x-4"
        );
        const hourTemplate = document.getElementById("hour-card").content;
        hours.forEach((h) => {
          const node = hourTemplate.cloneNode(true);
          node.querySelector("span").textContent = h.time;
          node.querySelector("i").setAttribute("data-lucide", h.icon);
          node.querySelector(
            "span.text-lg"
          ).textContent = `${h.temp}°`;
          hourHolder.appendChild(node);
        });

        // Populate Weekly Forecast
        const days = [
          { day: "Monday", icon: "cloud", hi: 63, lo: 49 },
          { day: "Tuesday", icon: "cloud-drizzle", hi: 61, lo: 48 },
          { day: "Wednesday", icon: "cloud-snow", hi: 59, lo: 47 },
          { day: "Thursday", icon: "cloud-rain", hi: 60, lo: 46 },
          { day: "Friday", icon: "cloud", hi: 62, lo: 47 },
          { day: "Saturday", icon: "sun", hi: 66, lo: 50 },
          { day: "Sunday", icon: "sun", hi: 68, lo: 52 },
        ];
        const weekHolder = document
          .querySelectorAll("[data-anime]")[2]
          .querySelector("div.divide-y");
        const dayTemplate = document.getElementById("day-row").content;
        days.forEach((d) => {
          const node = dayTemplate.cloneNode(true);
          node.querySelector("span").textContent = d.day;
          node.querySelector("i").setAttribute("data-lucide", d.icon);
          node.querySelectorAll("span")[1].textContent = `${d.hi}°`;
          node.querySelectorAll("span")[3].textContent = `${d.lo}°`;
          weekHolder.appendChild(node);
        });

        // Lucide Icons
        lucide.createIcons();

        // Chart.js Temperature Line
        const ctx = document.getElementById("tempChart");
        new Chart(ctx, {
          type: "line",
          data: {
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            datasets: [
              {
                label: "High",
                data: days.map((d) => d.hi),
                borderColor: "#facc15",
                backgroundColor: "transparent",
                tension: 0.4,
                borderWidth: 2,
                pointRadius: 0,
              },
              {
                label: "Low",
                data: days.map((d) => d.lo),
                borderColor: "#38bdf8",
                backgroundColor: "transparent",
                tension: 0.4,
                borderDash: [4, 4],
                borderWidth: 2,
                pointRadius: 0,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
              y: { display: false },
              x: {
                grid: { display: false },
                ticks: { color: "#aaa", font: { size: 10 } },
              },
            },
          },
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
      

<div className="relative w-[300px] sm:w-[360px] h-[600px] sm:h-[720px] bg-black rounded-[42px] border border-gray-700 shadow-2xl overflow-hidden">

<div className="absolute top-3 left-1/2 -translate-x-1/2 w-36 h-7 bg-black border border-gray-700 rounded-full"></div>

<img alt="Cloudy night" className="absolute inset-0 w-full h-full object-cover opacity-30" src="https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>

<div className="relative z-10 flex flex-col h-full pt-12 pb-6 px-5 space-y-6 overflow-y-auto backdrop-blur-md bg-black/40">

<section className="transition-all duration-700" data-anime="">
<h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            San Francisco
          </h1>
<div className="flex items-end space-x-2 mt-2">
<span className="text-7xl sm:text-8xl font-semibold tracking-tight">57°</span>
<span className="mb-2 text-xl font-medium text-gray-300">Cloudy</span>
</div>
</section>

<section className="transition-all duration-700" data-anime="">
<h2 className="text-lg font-medium tracking-tight mb-2">
            Hourly Forecast
          </h2>
<div className="flex space-x-4 overflow-x-auto pb-2 pr-2 scrollbar-thin scrollbar-thumb-gray-600">


<div className="flex flex-col items-center min-w-[60px] bg-white/5 rounded-xl px-2 py-3">
<span className="text-sm font-medium">12 AM</span>
<svg className="lucide lucide-cloud-rain w-5 h-5 my-1" data-lucide="cloud-rain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path d="M16 14v6"></path><path d="M8 14v6"></path><path d="M12 16v6"></path></svg>
<span className="text-lg font-semibold tracking-tight">55°</span>
</div>
<div className="flex flex-col items-center min-w-[60px] bg-white/5 rounded-xl px-2 py-3">
<span className="text-sm font-medium">1 AM</span>
<svg className="lucide lucide-cloud w-5 h-5 my-1" data-lucide="cloud" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>
<span className="text-lg font-semibold tracking-tight">54°</span>
</div>
<div className="flex flex-col items-center min-w-[60px] bg-white/5 rounded-xl px-2 py-3">
<span className="text-sm font-medium">2 AM</span>
<svg className="lucide lucide-cloud w-5 h-5 my-1" data-lucide="cloud" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>
<span className="text-lg font-semibold tracking-tight">54°</span>
</div>
<div className="flex flex-col items-center min-w-[60px] bg-white/5 rounded-xl px-2 py-3">
<span className="text-sm font-medium">3 AM</span>
<svg className="lucide lucide-cloud w-5 h-5 my-1" data-lucide="cloud" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>
<span className="text-lg font-semibold tracking-tight">53°</span>
</div>
<div className="flex flex-col items-center min-w-[60px] bg-white/5 rounded-xl px-2 py-3">
<span className="text-sm font-medium">4 AM</span>
<svg className="lucide lucide-cloud-snow w-5 h-5 my-1" data-lucide="cloud-snow" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path d="M8 15h.01"></path><path d="M8 19h.01"></path><path d="M12 17h.01"></path><path d="M12 21h.01"></path><path d="M16 15h.01"></path><path d="M16 19h.01"></path></svg>
<span className="text-lg font-semibold tracking-tight">53°</span>
</div>
<div className="flex flex-col items-center min-w-[60px] bg-white/5 rounded-xl px-2 py-3">
<span className="text-sm font-medium">5 AM</span>
<svg className="lucide lucide-cloud-rain w-5 h-5 my-1" data-lucide="cloud-rain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path d="M16 14v6"></path><path d="M8 14v6"></path><path d="M12 16v6"></path></svg>
<span className="text-lg font-semibold tracking-tight">52°</span>
</div>
<div className="flex flex-col items-center min-w-[60px] bg-white/5 rounded-xl px-2 py-3">
<span className="text-sm font-medium">6 AM</span>
<svg className="lucide lucide-cloud-rain w-5 h-5 my-1" data-lucide="cloud-rain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path d="M16 14v6"></path><path d="M8 14v6"></path><path d="M12 16v6"></path></svg>
<span className="text-lg font-semibold tracking-tight">52°</span>
</div>
<div className="flex flex-col items-center min-w-[60px] bg-white/5 rounded-xl px-2 py-3">
<span className="text-sm font-medium">7 AM</span>
<svg className="lucide lucide-cloud-sun w-5 h-5 my-1" data-lucide="cloud-sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="M20 12h2"></path><path d="m19.07 4.93-1.41 1.41"></path><path d="M15.947 12.65a4 4 0 0 0-5.925-4.128"></path><path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z"></path></svg>
<span className="text-lg font-semibold tracking-tight">55°</span>
</div>
<div className="flex flex-col items-center min-w-[60px] bg-white/5 rounded-xl px-2 py-3">
<span className="text-sm font-medium">8 AM</span>
<svg className="lucide lucide-sun w-5 h-5 my-1" data-lucide="sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
<span className="text-lg font-semibold tracking-tight">58°</span>
</div>
<div className="flex flex-col items-center min-w-[60px] bg-white/5 rounded-xl px-2 py-3">
<span className="text-sm font-medium">9 AM</span>
<svg className="lucide lucide-sun w-5 h-5 my-1" data-lucide="sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
<span className="text-lg font-semibold tracking-tight">61°</span>
</div>
</div>
</section>

<section className="transition-all duration-700" data-anime="">
<h2 className="text-lg font-medium tracking-tight mb-2">
            7-Day Outlook
          </h2>
<div className="divide-y divide-gray-700/60">


<div className="flex items-center justify-between py-2 hover:bg-white/5 rounded-lg px-2 transition-colors">
<span className="w-1/3 text-sm font-medium">Monday</span>
<svg className="lucide lucide-cloud w-5 h-5" data-lucide="cloud" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>
<div className="w-1/3 flex justify-end space-x-1 text-sm">
<span>63°</span><span className="text-gray-400">/</span><span className="text-gray-400">49°</span>
</div>
</div>
<div className="flex items-center justify-between py-2 hover:bg-white/5 rounded-lg px-2 transition-colors">
<span className="w-1/3 text-sm font-medium">Tuesday</span>
<svg className="lucide lucide-cloud-drizzle w-5 h-5" data-lucide="cloud-drizzle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path d="M8 19v1"></path><path d="M8 14v1"></path><path d="M16 19v1"></path><path d="M16 14v1"></path><path d="M12 21v1"></path><path d="M12 16v1"></path></svg>
<div className="w-1/3 flex justify-end space-x-1 text-sm">
<span>61°</span><span className="text-gray-400">/</span><span className="text-gray-400">48°</span>
</div>
</div>
<div className="flex items-center justify-between py-2 hover:bg-white/5 rounded-lg px-2 transition-colors">
<span className="w-1/3 text-sm font-medium">Wednesday</span>
<svg className="lucide lucide-cloud-snow w-5 h-5" data-lucide="cloud-snow" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path d="M8 15h.01"></path><path d="M8 19h.01"></path><path d="M12 17h.01"></path><path d="M12 21h.01"></path><path d="M16 15h.01"></path><path d="M16 19h.01"></path></svg>
<div className="w-1/3 flex justify-end space-x-1 text-sm">
<span>59°</span><span className="text-gray-400">/</span><span className="text-gray-400">47°</span>
</div>
</div>
<div className="flex items-center justify-between py-2 hover:bg-white/5 rounded-lg px-2 transition-colors">
<span className="w-1/3 text-sm font-medium">Thursday</span>
<svg className="lucide lucide-cloud-rain w-5 h-5" data-lucide="cloud-rain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path d="M16 14v6"></path><path d="M8 14v6"></path><path d="M12 16v6"></path></svg>
<div className="w-1/3 flex justify-end space-x-1 text-sm">
<span>60°</span><span className="text-gray-400">/</span><span className="text-gray-400">46°</span>
</div>
</div>
<div className="flex items-center justify-between py-2 hover:bg-white/5 rounded-lg px-2 transition-colors">
<span className="w-1/3 text-sm font-medium">Friday</span>
<svg className="lucide lucide-cloud w-5 h-5" data-lucide="cloud" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>
<div className="w-1/3 flex justify-end space-x-1 text-sm">
<span>62°</span><span className="text-gray-400">/</span><span className="text-gray-400">47°</span>
</div>
</div>
<div className="flex items-center justify-between py-2 hover:bg-white/5 rounded-lg px-2 transition-colors">
<span className="w-1/3 text-sm font-medium">Saturday</span>
<svg className="lucide lucide-sun w-5 h-5" data-lucide="sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
<div className="w-1/3 flex justify-end space-x-1 text-sm">
<span>66°</span><span className="text-gray-400">/</span><span className="text-gray-400">50°</span>
</div>
</div>
<div className="flex items-center justify-between py-2 hover:bg-white/5 rounded-lg px-2 transition-colors">
<span className="w-1/3 text-sm font-medium">Sunday</span>
<svg className="lucide lucide-sun w-5 h-5" data-lucide="sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
<div className="w-1/3 flex justify-end space-x-1 text-sm">
<span>68°</span><span className="text-gray-400">/</span><span className="text-gray-400">52°</span>
</div>
</div>
</div>
</section>

<section className="transition-all duration-700" data-anime="">
<h2 className="text-lg font-medium tracking-tight mb-2">
            Temperature Trend
          </h2>
<div className="rounded-xl bg-white/5 p-3">
<div className="relative">
<canvas height="120" id="tempChart" style={{display: 'block', boxSizing: 'border-box', height: '120px', width: '279px'}} width="279"></canvas>
</div>
</div>
</section>
</div>
</div>


    </>
  );
}
