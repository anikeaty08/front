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
      
    document.addEventListener("DOMContentLoaded", () => {
      lucide.createIcons({ strokeWidth: 1.5 });

      const ctx = document.getElementById('creditsChart');
      new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['Earned', 'Spent'],
          datasets: [{
            data: [1200, 860],
            backgroundColor: ['#6366f1', '#ec4899'],
            hoverOffset: 4,
            borderWidth: 2,
            borderColor: '#18181b'
          }]
        },
        options: {
          plugins: {
            legend: { position: 'bottom', labels: { color: '#d4d4d8', boxWidth: 12, padding: 12, font: { family: 'Inter', size: 12 } } }
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
      

<div className="min-h-screen flex flex-col">

<header className="sticky top-0 z-30 backdrop-blur bg-zinc-900/70 border-b border-zinc-800/70">
<div className="mx-auto max-w-7xl px-6">
<div className="h-14 flex items-center justify-between">
<h1 className="text-lg font-semibold tracking-tight">VOLUNTEER<span className="font-light">hub</span></h1>
<button className="group inline-flex items-center gap-1 text-sm font-medium hover:text-indigo-400 transition">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="check-circle"></i>
            Log out
          </button>
</div>
</div>
</header>

<main className="flex-1 mx-auto w-full max-w-7xl px-6 py-10 space-y-12">

<section className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
<div className="flex items-center gap-6">
<div className="relative group">
<img alt="Profile picture" className="h-32 w-32 rounded-full object-cover border border-zinc-700 shadow-lg" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<label className="absolute bottom-1 right-1 bg-zinc-800/80 backdrop-blur rounded-full p-2 cursor-pointer hover:bg-indigo-600 transition-colors">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="camera"></i>
<input className="sr-only" type="file"/>
</label>
</div>
<div>
<h2 className="text-3xl font-semibold tracking-tight">Alex Johnson</h2>
<p className="text-sm text-zinc-400 mt-1">alex.johnson@email.com</p>
<div className="flex items-center gap-1 mt-2">
<i className="w-4 h-4 text-yellow-400 fill-yellow-400 stroke-[1.5]" data-lucide="star"></i>
<i className="w-4 h-4 text-yellow-400 fill-yellow-400 stroke-[1.5]" data-lucide="star"></i>
<i className="w-4 h-4 text-yellow-400 fill-yellow-400 stroke-[1.5]" data-lucide="star"></i>
<i className="w-4 h-4 text-yellow-400 fill-yellow-400 stroke-[1.5]" data-lucide="star"></i>
<i className="w-4 h-4 stroke-[1.5] text-zinc-600" data-lucide="star"></i>
<span className="ml-2 text-sm text-zinc-400">(4.2)</span>
</div>
</div>
</div>
<div className="flex gap-3">
<button className="inline-flex items-center gap-1 rounded-md px-4 py-2 bg-indigo-600 hover:bg-indigo-500 transition text-sm font-medium shadow ring-1 ring-indigo-600/20">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="edit-3"></i>
            Edit Profile
          </button>
<button className="inline-flex items-center gap-1 rounded-md px-4 py-2 border border-zinc-700 hover:border-zinc-600 transition text-sm font-medium">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="refresh-ccw"></i>
            Sync Data
          </button>
</div>
</section>
<div className="border-t border-zinc-800/70"></div>

<section className="grid lg:grid-cols-3 gap-10">

<div className="space-y-10 lg:col-span-1">

<div className="space-y-4">
<h3 className="text-xl font-semibold tracking-tight flex items-center gap-2">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="user"></i>
              About
            </h3>
<p className="text-sm leading-relaxed text-zinc-300">
              Community-driven software engineer passionate about open-source and education. Loves teaching kids to code,
              organizing hackathons, and building helpful tools for non-profits.
            </p>
</div>

<div className="space-y-4">
<h3 className="text-xl font-semibold tracking-tight flex items-center gap-2">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="phone"></i>
              Contact
            </h3>
<div className="space-y-2 text-sm">
<div className="flex items-center gap-2">
<i className="w-4 h-4 stroke-[1.5] text-zinc-400" data-lucide="mail"></i>
<span>alex.johnson@email.com</span>
</div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 stroke-[1.5] text-zinc-400" data-lucide="smartphone"></i>
<span>+1 (555) 015-1120</span>
</div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 stroke-[1.5] text-zinc-400" data-lucide="map-pin"></i>
<span>Seattle, WA</span>
</div>
</div>
</div>

<div className="space-y-4">
<h3 className="text-xl font-semibold tracking-tight flex items-center gap-2">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="zap"></i>
              Skills Offered
            </h3>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 text-xs rounded-full bg-indigo-700/30 border border-indigo-600 text-indigo-300">JavaScript</span>
<span className="px-3 py-1 text-xs rounded-full bg-indigo-700/30 border border-indigo-600 text-indigo-300">UI/UX Design</span>
<span className="px-3 py-1 text-xs rounded-full bg-indigo-700/30 border border-indigo-600 text-indigo-300">Mentoring</span>
</div>
<h3 className="text-xl font-semibold tracking-tight flex items-center gap-2 pt-6">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="heart-handshake"></i>
              Skills Needed
            </h3>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 text-xs rounded-full bg-pink-700/30 border border-pink-600 text-pink-300">Video Editing</span>
<span className="px-3 py-1 text-xs rounded-full bg-pink-700/30 border border-pink-600 text-pink-300">Grant Writing</span>
<span className="px-3 py-1 text-xs rounded-full bg-pink-700/30 border border-pink-600 text-pink-300">Marketing Strategy</span>
</div>
</div>
</div>

<div className="lg:col-span-2 space-y-10">

<div className="grid md:grid-cols-2 gap-8">

<div className="bg-zinc-800 rounded-lg p-6 border border-zinc-700/60 shadow-inner">
<h4 className="text-lg font-semibold mb-4 tracking-tight flex items-center gap-2">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="coins"></i>
                Credits Summary
              </h4>
<div>
<div>
<canvas height="240" id="creditsChart" width="320"></canvas>
</div>
</div>
<div className="flex items-center justify-between text-sm text-zinc-400 mt-4">
<span>Earned: <span className="text-indigo-300 font-medium">1,200</span></span>
<span>Spent: <span className="text-pink-300 font-medium">860</span></span>
</div>
</div>

<div className="bg-zinc-800 rounded-lg p-6 border border-zinc-700/60">
<h4 className="text-lg font-semibold mb-4 tracking-tight flex items-center gap-2">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="badge-check"></i>
                Rating Details
              </h4>
<div className="space-y-3">
<div className="flex items-center justify-between text-sm">
<span>Overall</span>
<span className="font-medium">4.2 / 5</span>
</div>
<div className="flex items-center justify-between text-sm">
<span>Punctuality</span>
<span className="font-medium">4.5</span>
</div>
<div className="flex items-center justify-between text-sm">
<span>Quality of Work</span>
<span className="font-medium">4.1</span>
</div>
<div className="flex items-center justify-between text-sm">
<span>Communication</span>
<span className="font-medium">4.3</span>
</div>
<div className="flex items-center justify-between text-sm">
<span>Teamwork</span>
<span className="font-medium">4.0</span>
</div>
</div>
</div>
</div>

<div className="bg-zinc-800 rounded-lg border border-zinc-700/60 overflow-hidden">
<div className="p-6 flex items-center justify-between">
<h4 className="text-lg font-semibold tracking-tight flex items-center gap-2">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="history"></i>
                Volunteer History
              </h4>
<select className="bg-zinc-900 border border-zinc-700 text-sm rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-600">
<option>2024</option>
<option>2023</option>
<option>2022</option>
</select>
</div>

<div className="overflow-x-auto">
<table className="min-w-full text-sm border-t border-zinc-700/60">
<thead className="bg-zinc-900">
<tr className="text-left">
<th className="px-6 py-3 font-medium">Date</th>
<th className="px-6 py-3 font-medium">Event</th>
<th className="px-6 py-3 font-medium">Role</th>
<th className="px-6 py-3 font-medium text-right">Credits</th>
</tr>
</thead>
<tbody>
<tr className="border-t border-zinc-700/60 hover:bg-zinc-800/60">
<td className="px-6 py-3 whitespace-nowrap">Apr 12</td>
<td className="px-6 py-3">Code-for-Good Hackathon</td>
<td className="px-6 py-3">Mentor</td>
<td className="px-6 py-3 text-right text-indigo-300 font-medium">+120</td>
</tr>
<tr className="border-t border-zinc-700/60 hover:bg-zinc-800/60">
<td className="px-6 py-3">Mar 22</td>
<td className="px-6 py-3">Food Bank Automation</td>
<td className="px-6 py-3">Developer</td>
<td className="px-6 py-3 text-right text-indigo-300 font-medium">+350</td>
</tr>
<tr className="border-t border-zinc-700/60 hover:bg-zinc-800/60">
<td className="px-6 py-3">Feb 10</td>
<td className="px-6 py-3">Community Website Revamp</td>
<td className="px-6 py-3">Designer</td>
<td className="px-6 py-3 text-right text-indigo-300 font-medium">+230</td>
</tr>
<tr className="border-t border-zinc-700/60 hover:bg-zinc-800/60">
<td className="px-6 py-3">Jan 05</td>
<td className="px-6 py-3">Equipment Donation Drive</td>
<td className="px-6 py-3">Volunteer</td>
<td className="px-6 py-3 text-right text-pink-300 font-medium">-200</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-zinc-800/70 py-6 text-sm text-center text-zinc-500">
      © 2024 VolunteerHub. Built with passion for community.
    </footer>
</div>



    </>
  );
}
