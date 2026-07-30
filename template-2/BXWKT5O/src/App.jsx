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
      
    // Icons
    lucide.createIcons();

    // Burger
    document.getElementById('mobileBtn').addEventListener('click', () => {
      const menu = document.getElementById('mobileMenu');
      menu.classList.toggle('hidden');
    });

    // Year in footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Simple login mock
    const loginBtn = document.getElementById('loginBtn');
    loginBtn.addEventListener('click', () => {
      const emailVal = document.getElementById('email').value;
      if (!emailVal) return alert('Enter email to continue');
      document.getElementById('userEmail').textContent = emailVal;
      document.getElementById('loginState').classList.add('hidden');
      document.getElementById('userInfo').classList.remove('hidden');
    });

    // Generate workout cards
    const workouts = {
      '15 minutes': { Beginner: ['Quick Core', 'Desk Stretch'], Intermediate: ['Tabata Blast'], Advanced: ['Hill Sprints'] },
      '30 minutes': { Beginner: ['Full-Body Flow'], Intermediate: ['HIIT Circuit'], Advanced: ['Heavy Lifts'] },
      '45 minutes': { Beginner: ['Yoga Balance'], Intermediate: ['Strength & Cardio'], Advanced: ['Endurance Ride'] },
    };
    document.getElementById('generatePlan').addEventListener('click', () => {
      const time = document.getElementById('timeSelect').value;
      const level = document.getElementById('levelSelect').value;
      const area = document.getElementById('planCards');
      area.innerHTML = '';
      workouts[time][level].forEach((w, idx) => {
        area.innerHTML += `
          <div class="bg-white rounded-xl border border-slate-200 p-6 shadow-sm flex flex-col gap-4 animate-fade" style="animation-delay:${idx * 0.15}s">
            <div class="flex items-center gap-3">
              <i data-lucide="activity" class="w-5 h-5 text-emerald-600"></i>
              <div class="text-base font-medium text-slate-800">${w}</div>
            </div>
            <p class="text-sm text-slate-600 flex-1">Calories Burn: ${(Math.random()*200+100).toFixed(0)} kcal</p>
            <button class="mt-auto px-4 py-2 rounded-lg bg-emerald-600 text-white text-sm hover:bg-emerald-700 transition flex items-center gap-2"><i data-lucide="play" class="w-4 h-4"></i>Start</button>
          </div>`;
      });
      lucide.createIcons();
    });

    // Chart
    const ctx = document.getElementById('progressChart');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Week 1','Week 2','Week 3','Week 4'],
        datasets: [{
          label: 'Workouts Completed',
          data: [3,4,5,4],
          borderColor: '#10B981',
          backgroundColor: 'rgba(16,185,129,0.15)',
          tension:.4,
          fill:true,
          pointRadius:5
        }]
      },
      options: {
        plugins:{legend:{display:false}},
        scales:{y:{beginAtZero:true,grid:{display:false}},x:{grid:{display:false}}}
      }
    });

    // Fade-in animation (simple)
    document.querySelectorAll('.animate-fade').forEach((el, i) => {
      el.style.opacity = 0;
      el.style.transform = 'translateY(16px)';
      setTimeout(() => {
        el.style.transition = 'opacity .7s ease, transform .7s ease';
        el.style.opacity = 1;
        el.style.transform = 'translateY(0)';
      }, (parseFloat(el.style.animationDelay) || 0) * 1000 + 200);
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
      

<header className="w-full z-20 supports-[backdrop-filter]:bg-white/40 fixed bg-cyan-200/70 border-b backdrop-blur border-neutral-200" style={{}}>
<div className="max-w-7xl flex mr-auto ml-auto pt-4 pr-6 pb-4 pl-6 items-center justify-between">
<a className="flex items-center gap-2 text-2xl font-semibold text-neutral-800 tracking-tight" href="#" style={{}}>Superman<span className="inline-block w-3 h-3 rounded-full bg-indigo-500" style={{}}></span></a>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="transition-colors hover:text-indigo-600" href="#workouts" style={{}}>Workouts</a>
<a className="transition-colors hover:text-indigo-600" href="#nutrition" style={{}}>Nutrition</a>
<a className="transition-colors hover:text-indigo-600" href="#community" style={{}}>Community</a>
<a className="transition-colors hover:text-indigo-600" href="#dashboard" style={{}}>Dashboard</a>
</nav>
<button className="md:hidden text-neutral-700" id="mobileBtn" style={{}}>
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
<div className="hidden md:flex gap-4">
<button className="transition hover:bg-indigo-600 hover:text-white border rounded-lg pt-2 pr-4 pb-2 pl-4" style={{}}>Log in</button>
<button className="px-4 py-2 rounded-lg transition bg-indigo-600 text-white hover:bg-indigo-700" style={{}}>Get Started</button>
</div>
</div>

<div className="md:hidden hidden border-t bg-white border-neutral-200" id="mobileMenu" style={{}}>
<div className="px-6 py-4 flex flex-col gap-4 text-sm">
<a className="hover:text-indigo-600" href="#workouts" style={{}}>Workouts</a>
<a className="hover:text-indigo-600" href="#nutrition" style={{}}>Nutrition</a>
<a className="hover:text-indigo-600" href="#community" style={{}}>Community</a>
<a className="hover:text-indigo-600" href="#dashboard" style={{}}>Dashboard</a>
<div className="flex gap-4 pt-4 border-t border-neutral-200" style={{}}>
<button className="flex-1 px-4 py-2 rounded-lg border transition border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white" style={{}}>Log in</button>
<button className="flex-1 px-4 py-2 rounded-lg transition bg-indigo-600 text-white hover:bg-indigo-700" style={{}}>Start</button>
</div>
</div>
</div>
</header>

<section className="relative flex items-center justify-center min-h-[90vh] pt-24">
<img alt="" className="absolute inset-0 w-full h-full object-center brightness-75 object-cover" src="https://imgcentauro-a.akamaihd.net/09_Landings/2022/Fitness/pagina-conteudo/10/lp/img-02.jpg?w=800&q=80" style={{}} />
<div className="relative z-10 max-w-2xl text-white text-center mr-auto ml-auto pr-6 pl-6">
<h1 className="sm:text-5xl md:text-6xl animate-fade text-4xl font-semibold tracking-tight mb-6" style={{animationDelay: `0.2s`, opacity: `1`, transform: `translateY(0px)`, transition: `opacity 0.7s, transform 0.7s`}}><br /><br />Feel Strong.Eat Well.Live Better.</h1>
<p className="text-lg sm:text-xl opacity-90 mb-8 animate-fade" style={{animationDelay: `0.4s`, opacity: `1`, transform: `translateY(0px)`, transition: `opacity 0.7s, transform 0.7s`}}>Personalized workouts, practical nutrition, and a community that keeps you motivated—right at your fingertips.</p>
<button className="px-8 py-3 rounded-full bg-indigo-500 text-base sm:text-lg font-medium shadow-lg transition animate-fade hover:bg-indigo-600 text-white" style={{animationDelay: `0.6s`, opacity: `1`, transform: `translateY(0px)`, transition: `opacity 0.7s, transform 0.7s`}}>Start Your Journey</button>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-20" id="workouts">
<h2 className="text-3xl font-semibold tracking-tight mb-4 text-neutral-800" style={{}}>Workout Plans</h2>
<p className="max-w-2xl text-neutral-600 mb-10" style={{}}>Choose the perfect workout based on your schedule and fitness level. Select duration and intensity below to generate tailored plans.</p>
<div className="flex flex-col md:flex-row gap-6 md:gap-10">
<div className="md:w-1/4 rounded-xl shadow-sm border p-6 flex flex-col gap-6 bg-white border-neutral-200" style={{}}>
<div>
<label className="block text-sm font-medium mb-2 text-neutral-700" style={{}}>Time Availability</label>
<select className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500" id="timeSelect" style={{}}>
<option>15 minutes</option>
<option>30 minutes</option>
<option>45 minutes</option>
</select>
</div>
<div className="">
<label className="block text-sm font-medium mb-2 text-neutral-700" style={{}}>Fitness Level</label>
<select className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500" id="levelSelect" style={{}}>
<option>Beginner</option>
<option>Intermediate</option>
<option>Advanced</option>
</select>
</div>
<button className="inline-flex gap-2 transition hover:bg-indigo-700 text-white bg-indigo-600 rounded-lg mt-auto pt-2 pr-4 pb-2 pl-4 items-center justify-center" id="generatePlan" style={{}}>
<svg className="lucide lucide-play-circle w-4 h-4" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>Generate Plan
        </button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-1" id="planCards">
<div className="bg-white rounded-xl border border-neutral-200 p-6 shadow-sm flex flex-col gap-4 animate-fade" style={{animationDelay: `0s`, opacity: `1`, transform: `translateY(0px)`, transition: `opacity 0.7s, transform 0.7s`}}>
<div className="flex items-center gap-3">
<svg className="lucide lucide-activity w-5 h-5 text-cyan-600" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
<div className="text-base font-medium text-neutral-800" style={{}}>Quick Core</div>
</div>
<p className="text-sm text-neutral-600 flex-1" style={{}}>Calories Burn: 148 kcal</p>
<button className="mt-auto px-4 py-2 rounded-lg bg-blue-600 text-white text-sm hover:bg-blue-700 transition flex items-center gap-2" style={{}}><svg className="lucide lucide-play w-4 h-4" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>Start</button>
</div>
<div className="bg-white rounded-xl border border-neutral-200 p-6 shadow-sm flex flex-col gap-4 animate-fade" style={{animationDelay: `0.15s`, opacity: `1`, transform: `translateY(0px)`, transition: `opacity 0.7s, transform 0.7s`}}>
<div className="flex items-center gap-3">
<svg className="lucide lucide-activity w-5 h-5 text-cyan-600" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
<div className="text-base font-medium text-neutral-800" style={{}}>Desk Stretch</div>
</div>
<p className="text-sm text-neutral-600 flex-1" style={{}}>Calories Burn: 261 kcal</p>
<button className="mt-auto px-4 py-2 rounded-lg bg-blue-600 text-white text-sm hover:bg-blue-700 transition flex items-center gap-2" style={{}}><svg className="lucide lucide-play w-4 h-4" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>Start</button>
</div></div>
</div>
</section>

<section className="bg-neutral-50 pt-20 pb-20" id="nutrition" style={{}}>
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight mb-4 text-neutral-800" style={{}}>Nutrition Made Simple</h2>
<p className="mb-10 max-w-2xl text-neutral-600" style={{}}>Balanced meal plans with quick recipes and optional supplements to support your goals.</p>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<article className="rounded-xl border shadow-sm overflow-hidden flex flex-col bg-white border-neutral-200" style={{}}>
<img alt="" className="w-full h-40 object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80" style={{}} />
<div className="p-6 flex flex-col gap-4">
<div className="text-base font-medium text-neutral-800" style={{}}>Energy Bowl</div>
<p className="text-sm flex-1 text-neutral-600" style={{}}>Brown rice, grilled chicken, roasted veggies, and a light tahini sauce.</p>
<div className="flex items-center gap-2 text-sm text-indigo-600" style={{}}>
<svg className="lucide lucide-leaf w-4 h-4" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>430 cal
            </div>
</div>
</article>
<article className="rounded-xl border shadow-sm overflow-hidden flex flex-col bg-white border-neutral-200" style={{}}>
<img alt="" className="w-full h-40 object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&q=80" style={{}} />
<div className="p-6 flex flex-col gap-4">
<div className="text-base font-medium text-neutral-800" style={{}}>Green Smoothie</div>
<p className="text-sm flex-1 text-neutral-600" style={{}}>Spinach, banana, almond milk, chia seeds, and vanilla protein.</p>
<div className="flex items-center gap-2 text-sm text-indigo-600" style={{}}>
<svg className="lucide lucide-cup-soda w-4 h-4" data-lucide="cup-soda" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8"></path><path d="M5 8h14"></path><path d="M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0"></path><path d="m12 8 1-6h2"></path></svg>280 cal
            </div>
</div>
</article>
<article className="rounded-xl border shadow-sm overflow-hidden flex flex-col bg-white border-neutral-200" style={{}}>
<img alt="" className="w-full h-40 object-cover" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80" style={{}} />
<div className="p-6 flex flex-col gap-4">
<div className="text-base font-medium text-neutral-800" style={{}}>Overnight Oats</div>
<p className="text-sm flex-1 text-neutral-600" style={{}}>Rolled oats, Greek yogurt, berries, honey, and flaxseed.</p>
<div className="flex items-center gap-2 text-sm text-indigo-600" style={{}}>
<svg className="lucide lucide-sun w-4 h-4" data-lucide="sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>350 cal
            </div>
</div>
</article>
</div>
</div>
</section>

<section className="max-w-7xl mr-auto ml-auto pt-20 pr-6 pb-20 pl-6" id="community">
<h2 className="text-3xl font-semibold text-neutral-800 tracking-tight mb-4" style={{}}>Comunidade & Motivação</h2>
<p className="mb-12 max-w-2xl text-neutral-600" style={{}}>Join thousands of members working toward a healthier life together. Share successes, ask questions, and stay motivated.</p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="border rounded-xl p-6 flex items-start gap-4 shadow-sm bg-white border-neutral-200" style={{}}>
<img alt="" className="w-14 h-14 object-cover rounded-full" src="https://images.genius.com/6ee6c7cb1addab12cf0bcd2db7c78ac0.424x424x1.png?w=800&q=80" style={{}} />
<div className="">
<p className="text-sm italic text-neutral-700 mb-2" style={{}}>“Estou cada vez mais confiante e na medida. Seguimos forte!”</p>
<div className="text-sm font-medium text-neutral-800" style={{}}>Rodrigo SIlvério</div>
</div>
</div>

<div className="border rounded-xl p-6 flex items-start gap-4 shadow-sm bg-white border-neutral-200" style={{}}>
<img alt="" className="w-14 h-14 rounded-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?w=800&q=tbn%3AANd9GcRFduFZoya4KpDfrwwKSg0-qenT9pioFjbgBg" style={{}} />
<div className="">
<p className="text-sm italic text-neutral-700 mb-2" style={{}}>“As receitas do dia sempre dão aquela turbinada. Receba!"</p>
<div className="text-sm font-medium text-neutral-800" style={{}}>Jorge Andrade Costa</div>
</div>
</div>
</div>
<div className="mt-12 flex justify-center">
<button className="transition flex gap-2 hover:bg-indigo-700 text-white bg-indigo-600 rounded-full pt-3 pr-6 pb-3 pl-6 items-center" style={{}}><svg className="lucide lucide-users w-5 h-5" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>Entre Agora</button>
</div>
</section>

<section className="bg-neutral-50 pt-20 pb-20" id="dashboard" style={{}}>
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-neutral-800 tracking-tight mb-4" style={{}}>Status Pessoal</h2>
<p className="mb-10 max-w-2xl text-neutral-600" style={{}}>Track your progress, set goals, and visualize your journey.</p>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="col-span-1 rounded-xl border shadow-sm p-6 bg-white border-neutral-200" style={{}}>
<div className="flex flex-col gap-4" id="loginState">
<input className="px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500" id="email" placeholder="Email" style={{}} type="email" />
<input className="focus:ring-2 focus:ring-indigo-500 border rounded-lg pt-2 pr-3 pb-2 pl-3" id="password" placeholder="Password" style={{}} type="password" />
<button className="w-full px-4 py-2 rounded-lg transition flex items-center justify-center gap-2 bg-indigo-600 text-white hover:bg-indigo-700" id="loginBtn" style={{}}>
<svg className="lucide lucide-log-in w-4 h-4" data-lucide="log-in" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10 17 5-5-5-5"></path><path d="M15 12H3"></path><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path></svg>Log in
            </button>
</div>
<div className="hidden" id="userInfo">
<div className="flex items-center gap-4 mb-6">
<img alt="" className="w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=80&q=80" style={{}} />
<div>
<div className="font-medium text-neutral-800" style={{}}>Welcome back!</div>
<div className="text-sm text-neutral-600" id="userEmail" style={{}}></div>
</div>
</div>

<div className="space-y-4">
<div>
<label className="text-sm text-neutral-700" style={{}}>Weekly Workouts</label>
<div className="w-full h-3 rounded-full overflow-hidden bg-neutral-200" style={{}}>
<div className="bg-indigo-500 h-3 rounded-full" style={{width: `60%`}}></div>
</div>
</div>
<div>
<label className="text-sm text-neutral-700" style={{}}>Daily Calories</label>
<div className="w-full h-3 rounded-full overflow-hidden bg-neutral-200" style={{}}>
<div className="bg-indigo-500 h-3 rounded-full" style={{width: `75%`}}></div>
</div>
</div>
</div>
</div>
</div>

<div className="col-span-1 lg:col-span-2 rounded-xl border shadow-sm p-6 flex flex-col bg-white border-neutral-200" style={{}}>
<h3 className="text-lg font-medium mb-4 text-neutral-800" style={{}}>Monthly Activity</h3>
<div className="flex-1">
<canvas className="!w-full !h-full" height="380" id="progressChart" style={{display: `block`, boxSizing: `border-box`, height: `380px`, width: `763px`}} width="763"></canvas>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t py-12 border-neutral-200" style={{}}>
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-6 md:gap-0 justify-between text-sm text-neutral-500" style={{}}>
<div>© <span id="year">2025</span> Wellness Hub. All rights reserved.</div>
<div className="flex gap-4">
<a className="transition hover:text-indigo-600" href="#" style={{}}>Privacy</a>
<a className="transition hover:text-indigo-600" href="#" style={{}}>Terms</a>
<a className="transition hover:text-indigo-600" href="#" style={{}}>Contact</a>
</div>
</div>
</footer>



    </>
  );
}
