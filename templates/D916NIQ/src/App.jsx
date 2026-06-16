import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Icons
      lucide.createIcons({
        attrs: { stroke: "currentColor", "stroke-width": 1.5, class: "w-4 h-4" }
      });

      // Year
      document.getElementById('year').textContent = new Date().getFullYear();

      // Chart
      const ctx = document.getElementById('weeklyChart').getContext('2d');
      const gradient = ctx.createLinearGradient(0, 0, 0, 200);
      gradient.addColorStop(0, 'rgba(16, 185, 129, 0.35)');
      gradient.addColorStop(1, 'rgba(16, 185, 129, 0.02)');

      const data = {
        labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
        datasets: [{
          label: 'Minutes',
          data: [38, 52, 46, 0, 61, 64, 41],
          fill: true,
          backgroundColor: gradient,
          borderColor: 'rgb(16, 185, 129)',
          tension: 0.35,
          pointBackgroundColor: 'rgb(16, 185, 129)',
          pointBorderColor: 'rgb(16, 185, 129)',
          pointRadius: 3
        }]
      };

      new Chart(ctx, {
        type: 'line',
        data,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              grid: { color: 'rgba(255,255,255,0.05)' },
              ticks: { color: 'rgba(229,229,229,0.8)', font: { size: 11 } }
            },
            y: {
              grid: { color: 'rgba(255,255,255,0.05)' },
              ticks: { color: 'rgba(229,229,229,0.8)', font: { size: 11 } },
              suggestedMax: 80
            }
          },
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: 'rgba(15, 23, 42, 0.95)',
              borderColor: 'rgba(255,255,255,0.08)',
              borderWidth: 1,
              titleColor: '#E5E7EB',
              bodyColor: '#E5E7EB',
              padding: 10,
              displayColors: false,
              callbacks: {
                label: (ctx) => ` ${ctx.parsed.y} min`
              }
            }
          },
          elements: {
            line: { borderWidth: 2 }
          }
        }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 -z-10">
<div className="absolute inset-0 opacity-50 [mask-image:radial-gradient(60%_50%_at_50%_20%,black,transparent)]">
<img alt="" className="w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-b from-neutral-950/40 via-neutral-950/70 to-neutral-950"></div>
<div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[120rem] h-[40rem] bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-blue-500/10 blur-3xl opacity-70"></div>
<div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</div>

<header className="sticky top-0 z-50 backdrop-blur-sm bg-neutral-950/70 border-b border-white/10">
<div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="flex items-center justify-center w-9 h-9 rounded-md bg-neutral-900 ring-1 ring-white/10">
<span className="text-emerald-400 font-semibold tracking-tight text-lg leading-none">FX</span>
</div>
<span className="hidden sm:inline text-sm text-neutral-300">High-Performance Fitness</span>
</div>
<nav className="hidden md:flex items-center gap-7 text-sm text-neutral-300">
<a className="hover:text-white transition-colors" href="#programs">Programs</a>
<a className="hover:text-white transition-colors" href="#coaching">Coaching</a>
<a className="hover:text-white transition-colors" href="#community">Community</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
<a className="hover:text-white transition-colors" href="#faq">FAQ</a>
</nav>
<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm text-neutral-200 ring-1 ring-white/10 hover:ring-white/20 hover:bg-white/5 transition" href="#">
<i data-lucide="play-circle"></i>
            Demo
          </a>
<a className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium bg-emerald-500 text-neutral-950 hover:bg-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 transition" href="#">
<i data-lucide="zap"></i>
            Start Free
          </a>
</div>
</div>
</header>

<section className="relative">
<div className="mx-auto max-w-7xl px-6 pt-20 pb-16 md:pt-28 md:pb-24">
<div className="grid lg:grid-cols-12 gap-10 items-center">
<div className="lg:col-span-7">
<div className="inline-flex items-center gap-2 rounded-full px-3 py-1 ring-1 ring-white/10 bg-white/5 text-xs text-neutral-300 mb-5">
<i className="text-emerald-400" data-lucide="flame"></i>
              New: Athlete Mode with live HR zones
            </div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05]">
              Train harder. Move faster. Become unstoppable.
            </h1>
<p className="mt-5 text-neutral-300 text-base md:text-lg">
              Personalized programs, real-time coaching, and a community built for progress.
              This is where discipline meets momentum.
            </p>
<div className="mt-8 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-medium bg-emerald-500 text-neutral-950 hover:bg-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 transition" href="#">
<i data-lucide="rocket"></i>
                Start your 7‑day free trial
              </a>
<a className="inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm text-neutral-200 ring-1 ring-white/10 hover:ring-white/20 hover:bg-white/5 transition" href="#programs">
<i data-lucide="compass"></i>
                Explore programs
              </a>
</div>
<div className="mt-10 grid grid-cols-3 gap-4 max-w-xl">
<div className="rounded-lg bg-neutral-900/60 ring-1 ring-white/10 p-4">
<div className="text-xs text-neutral-400">Workouts logged</div>
<div className="mt-1 text-2xl font-semibold tracking-tight">1.2M+</div>
</div>
<div className="rounded-lg bg-neutral-900/60 ring-1 ring-white/10 p-4">
<div className="text-xs text-neutral-400">Avg. time / session</div>
<div className="mt-1 text-2xl font-semibold tracking-tight">43 min</div>
</div>
<div className="rounded-lg bg-neutral-900/60 ring-1 ring-white/10 p-4">
<div className="text-xs text-neutral-400">Community strong</div>
<div className="mt-1 text-2xl font-semibold tracking-tight">95k+</div>
</div>
</div>
<div className="mt-8 flex items-center gap-4">
<div className="flex -space-x-3">
<img alt="member" className="w-9 h-9 rounded-full ring-2 ring-neutral-950 object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
<img alt="member" className="w-9 h-9 rounded-full ring-2 ring-neutral-950 object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
<img alt="member" className="w-9 h-9 rounded-full ring-2 ring-neutral-950 object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
</div>
<p className="text-sm text-neutral-300">Trusted by athletes, creators, and weekend warriors worldwide.</p>
</div>
</div>
<div className="lg:col-span-5">
<div className="relative rounded-2xl overflow-hidden ring-1 ring-white/10 bg-neutral-900/50">
<img alt="hero workout" className="w-full h-80 md:h-[28rem] object-cover" src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-neutral-950/90 via-neutral-950/60 to-transparent">
<div className="flex items-center gap-2 text-xs text-neutral-300">
<i className="text-emerald-400" data-lucide="bolt"></i>
                  HIIT Burn • 28 min • Level 2
                </div>
<div className="mt-2 flex items-center gap-4">
<div className="flex items-center gap-1 text-sm text-emerald-300">
<i data-lucide="activity"></i>
                    HR Zone 3-4
                  </div>
<div className="flex items-center gap-1 text-sm text-neutral-300">
<i data-lucide="flame"></i>
                    340 kcal
                  </div>
</div>
</div>
<div className="absolute top-4 right-4 flex items-center gap-2">
<span className="inline-flex items-center gap-1 rounded-md bg-emerald-500/10 text-emerald-300 px-2 py-1 text-[11px] ring-1 ring-emerald-500/30">
<i data-lucide="sparkles"></i>
                  Featured
                </span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative" id="coaching">
<div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
<div className="grid md:grid-cols-3 gap-6">
<div className="rounded-xl p-6 bg-neutral-900/60 ring-1 ring-white/10 hover:ring-white/20 transition">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-md bg-emerald-500/15 ring-1 ring-emerald-500/30 flex items-center justify-center text-emerald-300">
<i className="w-5 h-5" data-lucide="goal"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight">Personalized Plans</h3>
</div>
<p className="mt-3 text-sm text-neutral-300">Adaptive training based on your goals, experience, and recovery. Hit PRs without burning out.</p>
<ul className="mt-4 text-sm text-neutral-300 space-y-2">
<li className="flex items-center gap-2"><i className="text-emerald-400" data-lucide="check"></i>Strength, HIIT, endurance, mobility</li>
<li className="flex items-center gap-2"><i className="text-emerald-400" data-lucide="check"></i>Auto deloads + recovery weeks</li>
</ul>
</div>
<div className="rounded-xl p-6 bg-neutral-900/60 ring-1 ring-white/10 hover:ring-white/20 transition">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-md bg-emerald-500/15 ring-1 ring-emerald-500/30 flex items-center justify-center text-emerald-300">
<i className="w-5 h-5" data-lucide="mic"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight">Real‑Time Coaching</h3>
</div>
<p className="mt-3 text-sm text-neutral-300">Pace cues, HR zone guidance, and form tips that keep you in the sweet spot every session.</p>
<ul className="mt-4 text-sm text-neutral-300 space-y-2">
<li className="flex items-center gap-2"><i className="text-emerald-400" data-lucide="check"></i>Live cues for tempo &amp; rest</li>
<li className="flex items-center gap-2"><i className="text-emerald-400" data-lucide="check"></i>Sync Apple/Google Health</li>
</ul>
</div>
<div className="rounded-xl p-6 bg-neutral-900/60 ring-1 ring-white/10 hover:ring-white/20 transition">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-md bg-emerald-500/15 ring-1 ring-emerald-500/30 flex items-center justify-center text-emerald-300">
<i className="w-5 h-5" data-lucide="users"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight">Community &amp; Challenges</h3>
</div>
<p className="mt-3 text-sm text-neutral-300">Train with friends, climb leaderboards, and commit to 4‑week sprints with accountability.</p>
<ul className="mt-4 text-sm text-neutral-300 space-y-2">
<li className="flex items-center gap-2"><i className="text-emerald-400" data-lucide="check"></i>Weekly challenges &amp; badges</li>
<li className="flex items-center gap-2"><i className="text-emerald-400" data-lucide="check"></i>Coach Q&amp;A and form checks</li>
</ul>
</div>
</div>
</div>
<div className="mx-auto max-w-7xl px-6">
<div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</div>
</section>

<section className="relative" id="programs">
<div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
<div className="flex items-end justify-between gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Programs built for consistent progress</h2>
<p className="mt-2 text-neutral-300 text-sm md:text-base">Choose your track and level up with smart progression.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 rounded-md px-3.5 py-2 text-sm text-neutral-200 ring-1 ring-white/10 hover:ring-white/20 hover:bg-white/5 transition" href="#">
<i data-lucide="list-checks"></i>
            View all
          </a>
</div>
<div className="mt-8 grid md:grid-cols-3 gap-6">
<div className="group rounded-xl overflow-hidden bg-neutral-900/60 ring-1 ring-white/10 hover:ring-white/20 transition">
<div className="relative">
<img alt="HIIT" className="h-48 w-full object-cover group-hover:opacity-95 transition" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-md bg-emerald-500/10 text-emerald-300 px-2 py-1 text-[11px] ring-1 ring-emerald-500/30">
<i data-lucide="bolt"></i> HIIT
              </div>
</div>
<div className="p-5">
<h3 className="text-lg font-semibold tracking-tight">HIIT Burn 2.0</h3>
<p className="mt-1.5 text-sm text-neutral-300">Fast intervals to spike VO₂ and torch calories. Minimal gear.</p>
<div className="mt-4 flex items-center justify-between text-xs text-neutral-300">
<span className="inline-flex items-center gap-1"><i data-lucide="clock-5"></i> 24–30 min</span>
<span className="inline-flex items-center gap-1"><i data-lucide="signal"></i> Level 2</span>
<span className="inline-flex items-center gap-1"><i data-lucide="flame"></i> 280–420 kcal</span>
</div>
<div className="mt-4 flex items-center justify-between">
<a className="text-sm text-emerald-300 hover:text-emerald-200" href="#">Start plan</a>
<button className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-xs font-medium bg-emerald-500 text-neutral-950 hover:bg-emerald-400 transition">
<i data-lucide="plus"></i>
                  Add to stack
                </button>
</div>
</div>
</div>
<div className="group rounded-xl overflow-hidden bg-neutral-900/60 ring-1 ring-white/10 hover:ring-white/20 transition">
<div className="relative">
<img alt="Strength" className="h-48 w-full object-cover group-hover:opacity-95 transition" src="https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-md bg-emerald-500/10 text-emerald-300 px-2 py-1 text-[11px] ring-1 ring-emerald-500/30">
<i data-lucide="dumbbell"></i> Strength
              </div>
</div>
<div className="p-5">
<h3 className="text-lg font-semibold tracking-tight">Strength Foundation</h3>
<p className="mt-1.5 text-sm text-neutral-300">Compound lifts, progressive overload, and rock-solid technique.</p>
<div className="mt-4 flex items-center justify-between text-xs text-neutral-300">
<span className="inline-flex items-center gap-1"><i data-lucide="clock-5"></i> 45–60 min</span>
<span className="inline-flex items-center gap-1"><i data-lucide="signal"></i> Level 1–3</span>
<span className="inline-flex items-center gap-1"><i data-lucide="target"></i> 5x5 / 3x8</span>
</div>
<div className="mt-4 flex items-center justify-between">
<a className="text-sm text-emerald-300 hover:text-emerald-200" href="#">Start plan</a>
<button className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-xs font-medium bg-emerald-500 text-neutral-950 hover:bg-emerald-400 transition">
<i data-lucide="plus"></i>
                  Add to stack
                </button>
</div>
</div>
</div>
<div className="group rounded-xl overflow-hidden bg-neutral-900/60 ring-1 ring-white/10 hover:ring-white/20 transition">
<div className="relative">
<img alt="Mobility" className="h-48 w-full object-cover group-hover:opacity-95 transition" src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-md bg-emerald-500/10 text-emerald-300 px-2 py-1 text-[11px] ring-1 ring-emerald-500/30">
<i data-lucide="stretch-vertical"></i> Mobility
              </div>
</div>
<div className="p-5">
<h3 className="text-lg font-semibold tracking-tight">Mobility Flow</h3>
<p className="mt-1.5 text-sm text-neutral-300">Unlock range of motion and bulletproof your joints with intent.</p>
<div className="mt-4 flex items-center justify-between text-xs text-neutral-300">
<span className="inline-flex items-center gap-1"><i data-lucide="clock-5"></i> 15–25 min</span>
<span className="inline-flex items-center gap-1"><i data-lucide="signal"></i> Level 1</span>
<span className="inline-flex items-center gap-1"><i data-lucide="puzzle"></i> Active recovery</span>
</div>
<div className="mt-4 flex items-center justify-between">
<a className="text-sm text-emerald-300 hover:text-emerald-200" href="#">Start plan</a>
<button className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-xs font-medium bg-emerald-500 text-neutral-950 hover:bg-emerald-400 transition">
<i data-lucide="plus"></i>
                  Add to stack
                </button>
</div>
</div>
</div>
</div>

<div className="mt-8 rounded-xl bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-blue-500/10 ring-1 ring-white/10 p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-md bg-emerald-500/15 ring-1 ring-emerald-500/30 flex items-center justify-center text-emerald-300">
<i data-lucide="trophy"></i>
</div>
<div>
<h4 className="text-base font-semibold tracking-tight">30‑day challenge: Build the habit</h4>
<p className="text-sm text-neutral-300">Daily 20‑minute sessions to lock in consistency. Join now and earn a limited badge.</p>
</div>
</div>
<a className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium bg-emerald-500 text-neutral-950 hover:bg-emerald-400 transition" href="#">
<i data-lucide="sparkles"></i>
            Join challenge
          </a>
</div>
</div>
<div className="mx-auto max-w-7xl px-6">
<div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</div>
</section>

<section className="relative">
<div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
<div className="grid lg:grid-cols-2 gap-8">
<div className="rounded-xl bg-neutral-900/60 ring-1 ring-white/10 p-6">
<div className="flex items-start justify-between">
<div>
<h3 className="text-xl font-semibold tracking-tight">Weekly Progress</h3>
<p className="mt-1 text-sm text-neutral-300">Consistency drives results. Track volume, time, and intensity.</p>
</div>
<div className="inline-flex items-center gap-2 rounded-md px-2.5 py-1 text-[11px] text-neutral-300 ring-1 ring-white/10">
<i data-lucide="calendar"></i> Last 7 days
              </div>
</div>
<div className="mt-4 rounded-lg bg-neutral-950/60 ring-1 ring-white/10 p-3">
<div className="relative w-full">
<div className="w-full">
<canvas className="w-full h-56" id="weeklyChart"></canvas>
</div>
</div>
</div>
<div className="mt-4 grid grid-cols-3 gap-3">
<div className="rounded-lg bg-neutral-950/60 ring-1 ring-white/10 p-3">
<div className="text-xs text-neutral-400">Total minutes</div>
<div className="mt-1 text-lg font-semibold tracking-tight" id="stat-mins">302</div>
</div>
<div className="rounded-lg bg-neutral-950/60 ring-1 ring-white/10 p-3">
<div className="text-xs text-neutral-400">Calories</div>
<div className="mt-1 text-lg font-semibold tracking-tight" id="stat-cals">2,430</div>
</div>
<div className="rounded-lg bg-neutral-950/60 ring-1 ring-white/10 p-3">
<div className="text-xs text-neutral-400">Sessions</div>
<div className="mt-1 text-lg font-semibold tracking-tight" id="stat-sessions">6</div>
</div>
</div>
</div>
<div className="rounded-xl bg-neutral-900/60 ring-1 ring-white/10 p-6">
<h3 className="text-xl font-semibold tracking-tight">What athletes are saying</h3>
<p className="mt-1 text-sm text-neutral-300">Real stories. Real progress. Join a team that shows up.</p>
<div className="mt-5 space-y-4">
<div className="flex gap-4 p-4 rounded-lg bg-neutral-950/60 ring-1 ring-white/10">
<img alt="member" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
<div>
<div className="flex items-center gap-2">
<span className="text-sm font-semibold tracking-tight">Amina K.</span>
<span className="text-[11px] text-emerald-300 inline-flex items-center gap-1"><i data-lucide="badge-check"></i> Verified</span>
</div>
<p className="text-sm text-neutral-300 mt-1">“Week 3 and already stronger. The cues keep my form tight and the workouts fly.”</p>
</div>
</div>
<div className="flex gap-4 p-4 rounded-lg bg-neutral-950/60 ring-1 ring-white/10">
<img alt="member" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div>
<div className="flex items-center gap-2">
<span className="text-sm font-semibold tracking-tight">Leo M.</span>
<span className="text-[11px] text-emerald-300 inline-flex items-center gap-1"><i data-lucide="badge-check"></i> Verified</span>
</div>
<p className="text-sm text-neutral-300 mt-1">“I finally stuck to a plan. The progression feels smart, not random.”</p>
</div>
</div>
<div className="flex gap-4 p-4 rounded-lg bg-neutral-950/60 ring-1 ring-white/10">
<img alt="member" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
<div>
<div className="flex items-center gap-2">
<span className="text-sm font-semibold tracking-tight">Jess P.</span>
<span className="text-[11px] text-emerald-300 inline-flex items-center gap-1"><i data-lucide="badge-check"></i> Verified</span>
</div>
<p className="text-sm text-neutral-300 mt-1">“Community challenges are the boost I needed. Showing up is non‑negotiable now.”</p>
</div>
</div>
</div>
<div className="mt-5 flex items-center justify-between" id="community">
<div className="flex -space-x-2">
<img alt="" className="w-8 h-8 rounded-full ring-2 ring-neutral-900 object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
<img alt="" className="w-8 h-8 rounded-full ring-2 ring-neutral-900 object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
<img alt="" className="w-8 h-8 rounded-full ring-2 ring-neutral-900 object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
<div className="w-8 h-8 rounded-full ring-2 ring-neutral-900 bg-neutral-800 text-[11px] flex items-center justify-center text-neutral-300">+8</div>
</div>
<a className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-xs text-neutral-200 ring-1 ring-white/10 hover:ring-white/20 hover:bg-white/5 transition" href="#">
<i data-lucide="users-2"></i>
                Meet the community
              </a>
</div>
</div>
</div>
</div>
<div className="mx-auto max-w-7xl px-6">
<div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</div>
</section>

<section className="relative" id="pricing">
<div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
<div className="text-center max-w-2xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Pick your momentum</h2>
<p className="mt-2 text-neutral-300 text-sm md:text-base">Start free. Upgrade when you’re ready to go all‑in.</p>
</div>
<div className="mt-8 grid md:grid-cols-3 gap-6">

<div className="rounded-2xl p-6 bg-neutral-900/60 ring-1 ring-white/10 hover:ring-white/20 transition flex flex-col">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight">Starter</h3>
</div>
<div className="mt-2 text-3xl font-semibold tracking-tight">$0<span className="text-sm text-neutral-400">/mo</span></div>
<ul className="mt-4 space-y-2 text-sm text-neutral-300">
<li className="flex items-center gap-2"><i className="text-emerald-400" data-lucide="check"></i>3 programs</li>
<li className="flex items-center gap-2"><i className="text-emerald-400" data-lucide="check"></i>Basic tracking</li>
<li className="flex items-center gap-2"><i className="text-neutral-500" data-lucide="x"></i>Community challenges</li>
</ul>
<a className="mt-6 inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm text-neutral-200 ring-1 ring-white/10 hover:ring-white/20 hover:bg-white/5 transition" href="#">Get started</a>
</div>

<div className="relative rounded-2xl p-6 bg-neutral-800/60 ring-2 ring-emerald-500/40 hover:ring-emerald-400/60 transition flex flex-col">
<div className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded-md bg-emerald-500 text-neutral-950 px-2.5 py-1 text-[11px] font-medium">
<i data-lucide="sparkles"></i> Most popular
            </div>
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight">Pro</h3>
</div>
<div className="mt-2 text-3xl font-semibold tracking-tight">$19<span className="text-sm text-neutral-300">/mo</span></div>
<ul className="mt-4 space-y-2 text-sm text-neutral-200">
<li className="flex items-center gap-2"><i className="text-emerald-400" data-lucide="check"></i>Unlimited programs</li>
<li className="flex items-center gap-2"><i className="text-emerald-400" data-lucide="check"></i>Real‑time coaching</li>
<li className="flex items-center gap-2"><i className="text-emerald-400" data-lucide="check"></i>Community challenges</li>
<li className="flex items-center gap-2"><i className="text-emerald-400" data-lucide="check"></i>Health sync + analytics</li>
</ul>
<a className="mt-6 inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium bg-emerald-500 text-neutral-950 hover:bg-emerald-400 transition" href="#">Upgrade to Pro</a>
</div>

<div className="rounded-2xl p-6 bg-neutral-900/60 ring-1 ring-white/10 hover:ring-white/20 transition flex flex-col">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight">Elite</h3>
</div>
<div className="mt-2 text-3xl font-semibold tracking-tight">$49<span className="text-sm text-neutral-400">/mo</span></div>
<ul className="mt-4 space-y-2 text-sm text-neutral-300">
<li className="flex items-center gap-2"><i className="text-emerald-400" data-lucide="check"></i>1:1 coach access</li>
<li className="flex items-center gap-2"><i className="text-emerald-400" data-lucide="check"></i>Form checks + custom tweaks</li>
<li className="flex items-center gap-2"><i className="text-emerald-400" data-lucide="check"></i>Priority support</li>
</ul>
<a className="mt-6 inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm text-neutral-200 ring-1 ring-white/10 hover:ring-white/20 hover:bg-white/5 transition" href="#">Go Elite</a>
</div>
</div>
</div>
<div className="mx-auto max-w-7xl px-6">
<div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</div>
</section>

<section className="relative" id="faq">
<div className="mx-auto max-w-4xl px-6 py-12 md:py-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center">Questions, answered</h2>
<div className="mt-8 space-y-3">
<details className="group rounded-lg ring-1 ring-white/10 open:ring-white/20 bg-neutral-900/60 open:bg-neutral-900/70 transition">
<summary className="flex cursor-pointer items-center justify-between gap-3 px-5 py-4 text-sm">
<span>How does the free trial work?</span>
<i className="transition duration-200 group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<div className="px-5 pb-4 pt-0 text-sm text-neutral-300">
              Enjoy full access for 7 days. Cancel anytime from settings—no questions asked.
            </div>
</details>
<details className="group rounded-lg ring-1 ring-white/10 open:ring-white/20 bg-neutral-900/60 open:bg-neutral-900/70 transition">
<summary className="flex cursor-pointer items-center justify-between gap-3 px-5 py-4 text-sm">
<span>What equipment do I need?</span>
<i className="transition duration-200 group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<div className="px-5 pb-4 pt-0 text-sm text-neutral-300">
              Bodyweight options are available. For strength tracks, a pair of dumbbells or a barbell is ideal.
            </div>
</details>
<details className="group rounded-lg ring-1 ring-white/10 open:ring-white/20 bg-neutral-900/60 open:bg-neutral-900/70 transition">
<summary className="flex cursor-pointer items-center justify-between gap-3 px-5 py-4 text-sm">
<span>Can I train around injuries?</span>
<i className="transition duration-200 group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<div className="px-5 pb-4 pt-0 text-sm text-neutral-300">
              Yes—swap movements, lower impact options, and mobility‑first sessions are built in. Consult a pro for medical advice.
            </div>
</details>
</div>
</div>
</section>

<footer className="relative">
<div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
<div className="rounded-2xl bg-neutral-900/60 ring-1 ring-white/10 p-6 md:p-8">
<div className="grid md:grid-cols-2 gap-8">
<div>
<div className="flex items-center gap-3">
<div className="flex items-center justify-center w-9 h-9 rounded-md bg-neutral-900 ring-1 ring-white/10">
<span className="text-emerald-400 font-semibold tracking-tight text-lg leading-none">FX</span>
</div>
<h3 className="text-xl font-semibold tracking-tight">Level up your inbox</h3>
</div>
<p className="mt-2 text-sm text-neutral-300">Weekly training tips, programs, and challenges—no fluff.</p>
</div>
<form className="flex flex-col sm:flex-row gap-3">
<input className="w-full rounded-md bg-neutral-950/60 ring-1 ring-white/10 px-3 py-2 text-sm placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50" placeholder="you@domain.com" type="email"/>
<button className="inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium bg-emerald-500 text-neutral-950 hover:bg-emerald-400 transition" type="submit">
<i data-lucide="mail"></i>
                Subscribe
              </button>
</form>
</div>
<div className="mt-6 h-px bg-white/10"></div>
<div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-neutral-400">© <span id="year"></span> FITX. Train with intent.</p>
<div className="flex items-center gap-4 text-neutral-300">
<a className="inline-flex items-center gap-1 text-xs hover:text-white transition" href="#"><i data-lucide="circle-user"></i> Account</a>
<a className="inline-flex items-center gap-1 text-xs hover:text-white transition" href="#"><i data-lucide="shield"></i> Privacy</a>
<a className="inline-flex items-center gap-1 text-xs hover:text-white transition" href="#"><i data-lucide="file-text"></i> Terms</a>
<a className="inline-flex items-center gap-1 text-xs hover:text-white transition" href="#"><i data-lucide="instagram"></i> Social</a>
</div>
</div>
</div>
</div>
</footer>





    </>
  );
}
