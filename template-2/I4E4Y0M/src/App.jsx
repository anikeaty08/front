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
      
    // Activate icons
    lucide.createIcons();

    // Intersection reveal animations
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0','translate-y-6');
          entry.target.classList.add('opacity-100','translate-y-0');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Chart.js sample data
    const ctx = document.getElementById('progressChart');
    if (ctx) {
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Week 1','Week 2','Week 3','Week 4','Week 5','Week 6'],
          datasets: [{
            label: 'Tasks Completed',
            data: [4, 7, 9, 13, 15, 18],
            borderColor: '#6366f1',
            borderWidth: 2,
            tension: 0.35,
            fill: false,
            pointRadius: 3
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: { display: false }
          },
          scales: {
            y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color:'#6b7280' } },
            x: { grid: { display:false }, ticks: { color:'#6b7280' } }
          }
        }
      });
    }

    // Year in footer
    document.getElementById('year').textContent = new Date().getFullYear();
  
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
      

<section className="relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 flex flex-col lg:flex-row items-center gap-16 reveal opacity-0 translate-y-6 transition duration-700 ease-out">
<div className="flex-1">
<h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">Take Control of Your Life with <span className="text-indigo-500">LifeOS</span></h1>
<p className="text-lg md:text-xl text-gray-400 mb-10">The productivity system that actually works for you—manage your time, overcome procrastination, and achieve what truly matters without burning out.</p>
<button className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 transition text-white font-medium px-6 py-3 rounded-lg shadow-lg">
<i className="w-5 h-5" data-lucide="rocket" strokeWidth="1.5"></i>
          Join LifeOS Now
        </button>
</div>
<div className="flex-1">
<img alt="Dashboard mockup" className="w-full rounded-2xl shadow-2xl ring-1 ring-gray-800/50" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
</div>
</div>
<div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-600/20 blur-3xl rounded-full pointer-events-none"></div>
</section>

<section className="border-t border-gray-800">
<div className="max-w-3xl mx-auto px-6 lg:px-8 py-20 text-center space-y-8">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight reveal opacity-0 translate-y-6 transition duration-700 ease-out">Feeling Overwhelmed?</h2>
<ul className="space-y-4 text-gray-400 text-lg reveal opacity-0 translate-y-6 transition duration-700 ease-out">
<li className="flex items-start justify-center gap-2"><i className="w-5 h-5 text-indigo-500" data-lucide="check-circle" strokeWidth="1.5"></i>Too many tasks, not enough time.</li>
<li className="flex items-start justify-center gap-2"><i className="w-5 h-5 text-indigo-500" data-lucide="check-circle" strokeWidth="1.5"></i>Procrastination stealing your potential.</li>
<li className="flex items-start justify-center gap-2"><i className="w-5 h-5 text-indigo-500" data-lucide="check-circle" strokeWidth="1.5"></i>Constant distractions, no focus.</li>
<li className="flex items-start justify-center gap-2"><i className="w-5 h-5 text-indigo-500" data-lucide="check-circle" strokeWidth="1.5"></i>Productivity hacks that never stick.</li>
</ul>
<p className="text-gray-400 text-lg reveal opacity-0 translate-y-6 transition duration-700 ease-out">It’s not about discipline or motivation—you just need a system designed for real people.</p>
<button className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 transition text-white font-medium px-6 py-3 rounded-lg shadow reveal opacity-0 translate-y-6 duration-700 ease-out">
<i className="w-5 h-5" data-lucide="compass" strokeWidth="1.5"></i>
        Start Your Journey Today
      </button>
</div>
</section>

<section className="border-t border-gray-800">
<div className="max-w-6xl mx-auto px-6 lg:px-8 py-24 grid md:grid-cols-2 gap-16">
<div className="reveal opacity-0 translate-y-6 transition duration-700 ease-out">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Why LifeOS Works</h2>
<p className="text-gray-400 text-lg mb-10">LifeOS is built around two core principles for meaningful progress:</p>
<div className="space-y-8">
<div className="flex items-start gap-4">
<div className="p-3 bg-gray-800 rounded-lg">
<i className="w-6 h-6 text-indigo-500" data-lucide="eye" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-xl font-medium mb-1">Vision</h3>
<p className="text-gray-400">Define a clear direction aligned with your goals so every task feels purposeful.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-3 bg-gray-800 rounded-lg">
<i className="w-6 h-6 text-indigo-500" data-lucide="zap" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-xl font-medium mb-1">Action</h3>
<p className="text-gray-400">Use proven strategies to take consistent, sustainable steps toward your dreams.</p>
</div>
</div>
</div>
</div>
<div className="reveal opacity-0 translate-y-6 transition duration-700 ease-out">
<img alt="Workspace" className="w-full rounded-2xl shadow-2xl ring-1 ring-gray-800/50" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80" />
</div>
</div>
</section>

<section className="border-t border-gray-800">
<div className="max-w-5xl mx-auto px-6 lg:px-8 py-20 text-center space-y-12">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight reveal opacity-0 translate-y-6 transition duration-700 ease-out">What Makes LifeOS Different?</h2>
<div className="grid md:grid-cols-3 gap-10 reveal opacity-0 translate-y-6 transition duration-700 ease-out">
<div className="p-8 bg-gray-900 rounded-2xl shadow hover:shadow-lg transition">
<i className="w-8 h-8 text-indigo-500 mb-4" data-lucide="sliders" strokeWidth="1.5"></i>
<h3 className="text-xl font-medium mb-2">Simple & Flexible</h3>
<p className="text-gray-400">No complicated tools or rigid rules.</p>
</div>
<div className="p-8 bg-gray-900 rounded-2xl shadow hover:shadow-lg transition">
<i className="w-8 h-8 text-indigo-500 mb-4" data-lucide="layers" strokeWidth="1.5"></i>
<h3 className="text-xl font-medium mb-2">Customizable</h3>
<p className="text-gray-400">Adapt it to your unique lifestyle and priorities.</p>
</div>
<div className="p-8 bg-gray-900 rounded-2xl shadow hover:shadow-lg transition">
<i className="w-8 h-8 text-indigo-500 mb-4" data-lucide="life-buoy" strokeWidth="1.5"></i>
<h3 className="text-xl font-medium mb-2">Sustainable</h3>
<p className="text-gray-400">Stay productive without burnout.</p>
</div>
</div>
<button className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 transition text-white font-medium px-6 py-3 rounded-lg shadow reveal opacity-0 translate-y-6 duration-700 ease-out">
<i className="w-5 h-5" data-lucide="info" strokeWidth="1.5"></i>
        Learn More
      </button>
</div>
</section>

<section className="border-t border-gray-800">
<div className="max-w-6xl mx-auto px-6 lg:px-8 py-24 grid md:grid-cols-2 gap-16 items-center">
<div className="reveal opacity-0 translate-y-6 transition duration-700 ease-out">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">What You'll Achieve</h2>
<ul className="space-y-4 text-gray-400 text-lg">
<li className="flex items-start gap-2"><i className="w-5 h-5 text-indigo-500" data-lucide="target" strokeWidth="1.5"></i>Clarity: Know exactly where to focus your energy.</li>
<li className="flex items-start gap-2"><i className="w-5 h-5 text-indigo-500" data-lucide="repeat" strokeWidth="1.5"></i>Consistency: Make progress every day without overthinking.</li>
<li className="flex items-start gap-2"><i className="w-5 h-5 text-indigo-500" data-lucide="calendar-check" strokeWidth="1.5"></i>Procrastination-Free Days.</li>
<li className="flex items-start gap-2"><i className="w-5 h-5 text-indigo-500" data-lucide="balance" strokeWidth="1.5"></i>Balance: Time for what matters most.</li>
</ul>
<button className="mt-10 inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 transition text-white font-medium px-6 py-3 rounded-lg shadow">
<i className="w-5 h-5" data-lucide="upgrade" strokeWidth="1.5"></i>
          Upgrade Your Productivity
        </button>
</div>
<div className="reveal opacity-0 translate-y-6 transition duration-700 ease-out">
<div className="bg-gray-900 rounded-2xl p-8 shadow-lg">
<h3 className="text-xl font-medium mb-4">Progress Snapshot</h3>
<div>
<canvas id="progressChart"></canvas>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-gray-800">
<div className="max-w-5xl mx-auto px-6 lg:px-8 py-20 text-center space-y-12">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight reveal opacity-0 translate-y-6 transition duration-700 ease-out">How LifeOS Works</h2>
<div className="grid md:grid-cols-3 gap-10 reveal opacity-0 translate-y-6 transition duration-700 ease-out">
<div className="p-8 bg-gray-900 rounded-2xl shadow hover:shadow-lg transition">
<i className="w-8 h-8 text-indigo-500 mb-4" data-lucide="lightbulb" strokeWidth="1.5"></i>
<h3 className="text-xl font-medium mb-2">Gain Clarity</h3>
<p className="text-gray-400">Identify your values, goals, and priorities.</p>
</div>
<div className="p-8 bg-gray-900 rounded-2xl shadow hover:shadow-lg transition">
<i className="w-8 h-8 text-indigo-500 mb-4" data-lucide="map" strokeWidth="1.5"></i>
<h3 className="text-xl font-medium mb-2">Create a Plan</h3>
<p className="text-gray-400">Break big goals into manageable actions.</p>
</div>
<div className="p-8 bg-gray-900 rounded-2xl shadow hover:shadow-lg transition">
<i className="w-8 h-8 text-indigo-500 mb-4" data-lucide="clock" strokeWidth="1.5"></i>
<h3 className="text-xl font-medium mb-2">Build Habits</h3>
<p className="text-gray-400">Develop workflows that make progress effortless.</p>
</div>
</div>
<button className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 transition text-white font-medium px-6 py-3 rounded-lg shadow reveal opacity-0 translate-y-6 duration-700 ease-out">
<i className="w-5 h-5" data-lucide="play" strokeWidth="1.5"></i>
        Start Now
      </button>
</div>
</section>

<section className="border-t border-gray-800">
<div className="max-w-6xl mx-auto px-6 lg:px-8 py-24 grid md:grid-cols-2 gap-16 items-center">
<div className="reveal opacity-0 translate-y-6 transition duration-700 ease-out">
<img alt="Audience" className="w-full rounded-2xl shadow-2xl ring-1 ring-gray-800/50" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=800&q=80" />
</div>
<div className="reveal opacity-0 translate-y-6 transition duration-700 ease-out">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Who Is LifeOS For?</h2>
<ul className="space-y-4 text-gray-400 text-lg">
<li className="flex items-start gap-2"><i className="w-5 h-5 text-indigo-500" data-lucide="briefcase" strokeWidth="1.5"></i>Professionals</li>
<li className="flex items-start gap-2"><i className="w-5 h-5 text-indigo-500" data-lucide="rocket" strokeWidth="1.5"></i>Entrepreneurs</li>
<li className="flex items-start gap-2"><i className="w-5 h-5 text-indigo-500" data-lucide="graduation-cap" strokeWidth="1.5"></i>Students</li>
<li className="flex items-start gap-2"><i className="w-5 h-5 text-indigo-500" data-lucide="help-circle" strokeWidth="1.5"></i>Anyone Feeling Stuck</li>
</ul>
<p className="text-gray-400 mt-6">You don’t need more willpower—just the right system.</p>
<button className="mt-10 inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 transition text-white font-medium px-6 py-3 rounded-lg shadow">
<i className="w-5 h-5" data-lucide="search" strokeWidth="1.5"></i>
          Discover LifeOS
        </button>
</div>
</div>
</section>

<section className="border-t border-gray-800">
<div className="max-w-5xl mx-auto px-6 lg:px-8 py-20 text-center space-y-8">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight reveal opacity-0 translate-y-6 transition duration-700 ease-out">Break Free from Procrastination</h2>
<p className="text-gray-400 text-lg reveal opacity-0 translate-y-6 transition duration-700 ease-out">LifeOS equips you with actionable techniques to tackle procrastination head-on—from small wins to major breakthroughs.</p>
<button className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 transition text-white font-medium px-6 py-3 rounded-lg shadow reveal opacity-0 translate-y-6 duration-700 ease-out">
<i className="w-5 h-5" data-lucide="check" strokeWidth="1.5"></i>
        Start Getting Things Done
      </button>
</div>
</section>

<section className="border-t border-gray-800">
<div className="max-w-6xl mx-auto px-6 lg:px-8 py-24 grid md:grid-cols-2 gap-16 items-center">
<div className="reveal opacity-0 translate-y-6 transition duration-700 ease-out">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Create a System That Lasts</h2>
<p className="text-gray-400 text-lg mb-10">LifeOS isn’t a quick fix—it’s a sustainable approach. By focusing on what truly matters, you’ll build lasting success without burnout.</p>
<button className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 transition text-white font-medium px-6 py-3 rounded-lg shadow">
<i className="w-5 h-5" data-lucide="toggle-right" strokeWidth="1.5"></i>
          See How It Works
        </button>
</div>
<div className="reveal opacity-0 translate-y-6 transition duration-700 ease-out">
<img alt="Journey" className="w-full rounded-2xl shadow-2xl ring-1 ring-gray-800/50" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&q=80" />
</div>
</div>
</section>

<section className="border-t border-gray-800">
<div className="max-w-4xl mx-auto px-6 lg:px-8 py-20 text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-14 reveal opacity-0 translate-y-6 transition duration-700 ease-out">Real Results, Real People</h2>
<div className="space-y-12">

<div className="reveal opacity-0 translate-y-6 transition duration-700 ease-out">
<figure className="mx-auto max-w-2xl">
<img alt="" className="w-16 h-16 rounded-full mx-auto mb-4" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=160&q=80" />
<blockquote className="text-xl text-gray-300 font-medium">“LifeOS helped me cut my workday by two hours and still achieve more.”</blockquote>
<figcaption className="mt-4 text-gray-500">— Jamie, Product Manager</figcaption>
</figure>
</div>

<div className="reveal opacity-0 translate-y-6 transition duration-700 ease-out">
<figure className="mx-auto max-w-2xl">
<img alt="" className="w-16 h-16 rounded-full mx-auto mb-4" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80" />
<blockquote className="text-xl text-gray-300 font-medium">“As a student, I no longer pull all-nighters. LifeOS keeps me on track.”</blockquote>
<figcaption className="mt-4 text-gray-500">— Alex, Engineering Student</figcaption>
</figure>
</div>
</div>
<button className="mt-14 inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 transition text-white font-medium px-6 py-3 rounded-lg shadow reveal opacity-0 translate-y-6 duration-700 ease-out">
<i className="w-5 h-5" data-lucide="book-open" strokeWidth="1.5"></i>
        Read Their Stories
      </button>
</div>
</section>

<section className="border-t border-gray-800 bg-gray-900/50">
<div className="max-w-4xl mx-auto px-6 lg:px-8 py-24 text-center space-y-8">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight reveal opacity-0 translate-y-6 transition duration-700 ease-out">Risk-Free Guarantee</h2>
<p className="text-gray-400 text-lg reveal opacity-0 translate-y-6 transition duration-700 ease-out">Try LifeOS for 30 days. If it doesn’t transform how you work, we’ll refund you—no questions asked.</p>
<button className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 transition text-white font-medium px-6 py-3 rounded-lg shadow reveal opacity-0 translate-y-6 duration-700 ease-out">
<i className="w-5 h-5" data-lucide="shield-check" strokeWidth="1.5"></i>
        Try Risk-Free
      </button>
</div>
</section>

<section className="border-t border-gray-800">
<div className="max-w-6xl mx-auto px-6 lg:px-8 py-24 flex flex-col items-center text-center">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8 reveal opacity-0 translate-y-6 transition duration-700 ease-out">Ready to Take Control of Your Life?</h2>
<p className="text-gray-400 text-lg mb-12 reveal opacity-0 translate-y-6 transition duration-700 ease-out">Stop spinning your wheels and start making real progress with LifeOS.</p>
<button className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 transition text-white font-medium px-8 py-4 rounded-lg shadow-lg reveal opacity-0 translate-y-6 duration-700 ease-out">
<i className="w-6 h-6" data-lucide="rocket" strokeWidth="1.5"></i>
        Join LifeOS Now
      </button>
</div>
</section>

<footer className="border-t border-gray-800 py-10 text-center text-gray-600 text-sm">
    © <span id="year"></span> LifeOS — All rights reserved.
  </footer>




    </>
  );
}
