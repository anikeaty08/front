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
      
    lucide.createIcons();

    // Mobile navigation
    document.getElementById('mobileBtn').addEventListener('click', () => {
      document.getElementById('mobileMenu').classList.toggle('hidden');
    });

    // Footer year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Mock login
    document.getElementById('loginBtn').addEventListener('click', () => {
      const email = document.getElementById('email').value.trim();
      if (!email) return alert('Please enter email');
      document.getElementById('userEmail').textContent = email;
      document.getElementById('loginState').classList.add('hidden');
      document.getElementById('userInfo').classList.remove('hidden');
    });

    // Workout generator
    const workouts = {
      '15 minutes': { Beginner:['Quick Core','Desk Stretch'], Intermediate:['Tabata Blast'], Advanced:['Hill Sprints'] },
      '30 minutes': { Beginner:['Full-Body Flow'], Intermediate:['HIIT Circuit'], Advanced:['Heavy Lifts'] },
      '45 minutes': { Beginner:['Yoga Balance'], Intermediate:['Strength & Cardio'], Advanced:['Endurance Ride'] }
    };
    document.getElementById('generatePlan').addEventListener('click', () => {
      const time = document.getElementById('timeSelect').value;
      const level = document.getElementById('levelSelect').value;
      const list = document.getElementById('planCards');
      list.innerHTML = '';
      workouts[time][level].forEach((w, idx) => {
        list.insertAdjacentHTML('beforeend', `
          <div class="animate-seq rounded-xl border border-neutral-200 bg-white p-6 shadow-sm" style="animation-delay:${idx*0.15}s">
            <div class="flex items-center gap-3">
              <i data-lucide="activity" class="w-5 h-5 text-emerald-600"></i>
              <span class="text-base font-medium text-neutral-800">${w}</span>
            </div>
            <p class="flex-1 text-sm text-neutral-600">Calories Burn: ${(Math.random()*200+100).toFixed()} kcal</p>
            <button class="mt-auto flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-sm text-white transition hover:bg-emerald-700"><i data-lucide="play" class="w-4 h-4"></i>Start</button>
          </div>
        `);
      });
      lucide.createIcons();
    });

    // Chart.js
    new Chart(document.getElementById('progressChart'), {
      type:'line',
      data:{labels:['Week 1','Week 2','Week 3','Week 4'],datasets:[{
        label:'Workouts Completed',
        data:[3,4,5,4],
        borderColor:'#10B981',
        backgroundColor:'rgba(16,185,129,0.15)',
        tension:.4,
        fill:true,
        pointRadius:5
      }]},
      options:{plugins:{legend:{display:false}},scales:{y:{beginAtZero:true,grid:{display:false}},x:{grid:{display:false}}}}
    });

    // Sequential fade
    document.querySelectorAll('.animate-seq').forEach(el=>{
      const delay=parseFloat(el.style.animationDelay)||0;
      setTimeout(()=>el.classList.add('!opacity-100'),delay*1000);
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
      

<header className="fixed inset-x-0 top-0 z-20 border-b border-neutral-200 bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/40">
<div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
<a className="flex items-center gap-2 text-2xl font-semibold tracking-tight text-neutral-800" href="#">
        Superman<span className="w-3 h-3 rounded-full bg-indigo-500 inline-block"></span>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="transition-colors hover:text-indigo-600" href="#workouts">Workouts</a>
<a className="transition-colors hover:text-indigo-600" href="#nutrition">Nutrition</a>
<a className="transition-colors hover:text-indigo-600" href="#community">Community</a>
<a className="transition-colors hover:text-indigo-600" href="#dashboard">Dashboard</a>
</nav>
<div className="hidden md:flex gap-4">
<button className="border rounded-lg px-4 py-2 transition hover:bg-indigo-600 hover:text-white">Log in</button>
<button className="rounded-lg px-4 py-2 bg-indigo-600 text-white transition hover:bg-indigo-700">Get Started</button>
</div>
<button className="md:hidden text-neutral-700" id="mobileBtn">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>

<div className="hidden md:hidden border-t border-neutral-200 bg-white" id="mobileMenu">
<div className="flex flex-col gap-4 px-6 py-4 text-sm">
<a className="hover:text-indigo-600" href="#workouts">Workouts</a>
<a className="hover:text-indigo-600" href="#nutrition">Nutrition</a>
<a className="hover:text-indigo-600" href="#community">Community</a>
<a className="hover:text-indigo-600" href="#dashboard">Dashboard</a>
<div className="flex gap-4 pt-4 border-t border-neutral-200">
<button className="flex-1 border border-indigo-600 text-indigo-600 rounded-lg px-4 py-2 transition hover:bg-indigo-600 hover:text-white">Log in</button>
<button className="flex-1 bg-indigo-600 text-white rounded-lg px-4 py-2 transition hover:bg-indigo-700">Start</button>
</div>
</div>
</div>
</header>

<section className="relative flex items-center justify-center min-h-[90vh] pt-24">
<img alt="" className="absolute inset-0 h-full w-full object-cover brightness-75" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="relative z-10 max-w-2xl mx-auto text-center text-white px-6">
<h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight mb-6 animate-seq" style={{animationDelay: '.2s'}}>Feel Strong. Eat Well. Live Better.</h1>
<p className="text-lg sm:text-xl opacity-90 mb-8 animate-seq" style={{animationDelay: '.4s'}}>Personalized workouts, practical nutrition, and a community that keeps you motivated—right at your fingertips.</p>
<button className="rounded-full bg-indigo-500 px-8 py-3 text-base sm:text-lg font-medium shadow-lg transition hover:bg-indigo-600 animate-seq" style={{animationDelay: '.6s'}}>Start Your Journey</button>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-20" id="workouts">
<h2 className="text-3xl font-semibold tracking-tight mb-4 text-neutral-800">Workout Plans</h2>
<p className="max-w-2xl mb-10 text-neutral-600">Choose the perfect workout based on your schedule and fitness level. Select duration and intensity below to generate tailored plans.</p>
<div className="flex flex-col md:flex-row gap-6 md:gap-10">

<div className="md:w-1/4 flex flex-col gap-6 rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
<div>
<label className="block mb-2 text-sm font-medium text-neutral-700">Time Availability</label>
<select className="w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-indigo-500" id="timeSelect">
<option>15 minutes</option><option>30 minutes</option><option>45 minutes</option>
</select>
</div>
<div>
<label className="block mb-2 text-sm font-medium text-neutral-700">Fitness Level</label>
<select className="w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-indigo-500" id="levelSelect">
<option>Beginner</option><option>Intermediate</option><option>Advanced</option>
</select>
</div>
<button className="mt-auto flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-white transition hover:bg-indigo-700" id="generatePlan">
<i className="w-4 h-4" data-lucide="play-circle"></i>Generate Plan
        </button>
</div>

<div className="grid flex-1 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" id="planCards">

<div className="animate-seq rounded-xl border border-neutral-200 bg-white p-6 shadow-sm" style={{animationDelay: '0s'}}>
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-cyan-600" data-lucide="activity"></i>
<span className="text-base font-medium text-neutral-800">Quick Core</span>
</div>
<p className="flex-1 text-sm text-neutral-600">Calories Burn: 148 kcal</p>
<button className="mt-auto flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm text-white transition hover:bg-blue-700">
<i className="w-4 h-4" data-lucide="play"></i>Start
          </button>
</div>
<div className="animate-seq rounded-xl border border-neutral-200 bg-white p-6 shadow-sm" style={{animationDelay: '.15s'}}>
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-cyan-600" data-lucide="activity"></i>
<span className="text-base font-medium text-neutral-800">Desk Stretch</span>
</div>
<p className="flex-1 text-sm text-neutral-600">Calories Burn: 261 kcal</p>
<button className="mt-auto flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm text-white transition hover:bg-blue-700">
<i className="w-4 h-4" data-lucide="play"></i>Start
          </button>
</div>
</div>
</div>
</section>

<section className="bg-neutral-50 py-20" id="nutrition">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight mb-4 text-neutral-800">Nutrition Made Simple</h2>
<p className="mb-10 max-w-2xl text-neutral-600">Balanced meal plans with quick recipes and optional supplements to support your goals.</p>
<div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

<article className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm flex flex-col">
<img alt="" className="h-40 w-full object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?auto=format&amp;fit=crop&amp;w=1080&amp;q=80"/>
<div className="p-6 flex flex-col gap-4">
<span className="text-base font-medium text-neutral-800">Energy Bowl</span>
<p className="flex-1 text-sm text-neutral-600">Brown rice, grilled chicken, roasted veggies, and a light tahini sauce.</p>
<div className="flex items-center gap-2 text-sm text-indigo-600">
<i className="w-4 h-4" data-lucide="leaf"></i>430 cal
            </div>
</div>
</article>
<article className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm flex flex-col">
<img alt="" className="h-40 w-full object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?auto=format&amp;fit=crop&amp;w=1080&amp;q=80"/>
<div className="p-6 flex flex-col gap-4">
<span className="text-base font-medium text-neutral-800">Green Smoothie</span>
<p className="flex-1 text-sm text-neutral-600">Spinach, banana, almond milk, chia seeds, and vanilla protein.</p>
<div className="flex items-center gap-2 text-sm text-indigo-600">
<i className="w-4 h-4" data-lucide="cup-soda"></i>280 cal
            </div>
</div>
</article>
<article className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm flex flex-col">
<img alt="" className="h-40 w-full object-cover" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&amp;fit=crop&amp;w=1080&amp;q=80"/>
<div className="p-6 flex flex-col gap-4">
<span className="text-base font-medium text-neutral-800">Overnight Oats</span>
<p className="flex-1 text-sm text-neutral-600">Rolled oats, Greek yogurt, berries, honey, and flaxseed.</p>
<div className="flex items-center gap-2 text-sm text-indigo-600">
<i className="w-4 h-4" data-lucide="sun"></i>350 cal
            </div>
</div>
</article>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 pt-20 pb-20" id="community">
<h2 className="text-3xl font-semibold tracking-tight mb-4 text-neutral-800">Community &amp; Motivation</h2>
<p className="mb-12 max-w-2xl text-neutral-600">Join thousands of members working toward a healthier life together. Share successes, ask questions, and stay motivated.</p>
<div className="grid gap-8 grid-cols-1 md:grid-cols-2">
<div className="flex items-start gap-4 rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
<img alt="" className="h-14 w-14 rounded-full object-cover" src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&amp;fit=crop&amp;w=120&amp;q=80"/>
<div>
<p className="italic text-sm text-neutral-700 mb-2">“Estou cada vez mais confiante e na medida. Seguimos forte!”</p>
<span className="text-sm font-medium text-neutral-800">Rodrigo Silvério</span>
</div>
</div>
<div className="flex items-start gap-4 rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
<img alt="" className="h-14 w-14 rounded-full object-cover" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&amp;fit=crop&amp;w=120&amp;q=80"/>
<div>
<p className="italic text-sm text-neutral-700 mb-2">“As receitas do dia sempre dão aquela turbinada. Receba!”</p>
<span className="text-sm font-medium text-neutral-800">Jorge Andrade Costa</span>
</div>
</div>
</div>
<div className="mt-12 flex justify-center">
<button className="flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-white transition hover:bg-indigo-700">
<i className="w-5 h-5" data-lucide="users"></i>Join Now
      </button>
</div>
</section>

<section className="bg-neutral-50 py-20" id="dashboard">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight mb-4 text-neutral-800">Personal Status</h2>
<p className="mb-10 max-w-2xl text-neutral-600">Track your progress, set goals, and visualize your journey.</p>
<div className="grid gap-6 grid-cols-1 lg:grid-cols-3">

<div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
<div className="flex flex-col gap-4" id="loginState">
<input className="rounded-lg border px-3 py-2 focus:ring-2 focus:ring-indigo-500" id="email" placeholder="Email" type="email"/>
<input className="rounded-lg border px-3 py-2 focus:ring-2 focus:ring-indigo-500" id="password" placeholder="Password" type="password"/>
<button className="flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-white transition hover:bg-indigo-700" id="loginBtn">
<i className="w-4 h-4" data-lucide="log-in"></i>Log in
            </button>
</div>
<div className="hidden" id="userInfo">
<div className="mb-6 flex items-center gap-4">
<img alt="" className="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&amp;fit=crop&amp;w=80&amp;q=80"/>
<div>
<span className="font-medium text-neutral-800">Welcome back!</span>
<div className="text-sm text-neutral-600" id="userEmail"></div>
</div>
</div>
<div className="space-y-4">
<div>
<label className="text-sm text-neutral-700">Weekly Workouts</label>
<div className="h-3 w-full overflow-hidden rounded-full bg-neutral-200">
<div className="h-3 rounded-full bg-indigo-500" style={{width: '60%'}}></div>
</div>
</div>
<div>
<label className="text-sm text-neutral-700">Daily Calories</label>
<div className="h-3 w-full overflow-hidden rounded-full bg-neutral-200">
<div className="h-3 rounded-full bg-indigo-500" style={{width: '75%'}}></div>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-2 rounded-xl border border-neutral-200 bg-white p-6 shadow-sm flex flex-col">
<h3 className="mb-4 text-lg font-medium text-neutral-800">Monthly Activity</h3>
<div className="flex-1"><canvas id="progressChart"></canvas></div>
</div>
</div>
</div>
</section>

<footer className="border-t border-neutral-200 py-12">
<div className="max-w-7xl mx-auto flex flex-col items-center justify-between gap-6 text-sm text-neutral-500 md:flex-row px-6">
<span><span id="year"></span> © Superman. All rights reserved.</span>
<div className="flex gap-4">
<a className="transition hover:text-indigo-600" href="#">Privacy</a>
<a className="transition hover:text-indigo-600" href="#">Terms</a>
<a className="transition hover:text-indigo-600" href="#">Contact</a>
</div>
</div>
</footer>


    </>
  );
}
