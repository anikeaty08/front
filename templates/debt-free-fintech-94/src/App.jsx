import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize icons with correct stroke width
        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });

        // View management
        const views = ['welcome', 'home', 'score', 'points', 'rewards', 'progress'];
        
        function switchView(targetId) {
            // Hide all views
            views.forEach(view => {
                const el = document.getElementById(`view-${view}`);
                if(el) {
                    el.classList.add('hidden');
                    // Reset animation class if we wanted to add fade ins
                }
            });

            // Show target view
            const targetEl = document.getElementById(`view-${targetId}`);
            if(targetEl) {
                targetEl.classList.remove('hidden');
            }

            // Manage Bottom Nav visibility and active state
            const nav = document.getElementById('bottom-nav');
            if (targetId === 'welcome') {
                nav.classList.add('hidden');
            } else {
                nav.classList.remove('hidden');
                
                // Update active state colors
                document.querySelectorAll('.nav-btn').forEach(btn => {
                    if (btn.dataset.target === targetId) {
                        btn.classList.remove('text-zinc-400');
                        btn.classList.add('text-zinc-900');
                    } else {
                        btn.classList.add('text-zinc-400');
                        btn.classList.remove('text-zinc-900');
                    }
                });
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="app-container">

<div className="view-content flex flex-col justify-between px-6 py-12 bg-white z-50 absolute inset-0" id="view-welcome">
<div className="mt-12 flex flex-col items-center text-center">
<div className="w-16 h-16 bg-zinc-100 rounded-3xl flex items-center justify-center mb-6 shadow-sm border border-zinc-200">
<i className="w-8 h-8 text-emerald-600" data-lucide="leaf"></i>
</div>
<h2 className="text-xl font-medium text-zinc-500 tracking-tight mb-2">Debt Free</h2>
<h1 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-6 leading-tight">
                    See when your debt starts outrunning your income
                </h1>
<p className="text-base text-zinc-600 mb-8 leading-relaxed">
                    A real-time debt score powered by your bank data, designed to show when your debt is rising faster than your income can support.
                </p>
</div>
<div className="w-full flex flex-col gap-4">
<div className="flex items-center justify-center gap-2 text-sm text-zinc-500 mb-2">
<i className="w-4 h-4" data-lucide="lock"></i>
<span>Secure connection. No judgment. No jargon.</span>
</div>
<button className="w-full bg-zinc-900 text-white rounded-2xl py-4 text-base font-semibold transition active:scale-[0.98]" onclick="switchView('home')">
                    See my score
                </button>
<button className="w-full bg-white border border-zinc-200 text-zinc-700 rounded-2xl py-4 text-base font-semibold transition active:bg-zinc-50">
                    Maybe later
                </button>
</div>
</div>

<div className="view-content px-5 pt-12 hidden" id="view-home">
<header className="flex justify-between items-center mb-8">
<h1 className="text-2xl font-semibold tracking-tight">Overview</h1>
<div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center border border-zinc-200">
<i className="w-5 h-5 text-zinc-600" data-lucide="user"></i>
</div>
</header>

<div className="flex flex-col items-center mb-10 relative">
<div className="relative w-64 h-64 flex items-center justify-center">

<div className="absolute inset-0 score-circle transform rotate-45"></div>

<div className="absolute inset-4 bg-zinc-50 rounded-full flex flex-col items-center justify-center shadow-[inset_0_4px_12px_rgba(0,0,0,0.05)] border border-zinc-100">
<span className="text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-1">Stable</span>
<span className="text-6xl font-semibold tracking-tight text-zinc-900 mb-1">67</span>
<span className="text-sm text-zinc-500">out of 100</span>
</div>
</div>
<div className="mt-6 flex flex-col items-center text-center max-w-[260px]">
<div className="flex items-center gap-1.5 text-emerald-600 font-medium mb-1">
<i className="w-4 h-4" data-lucide="trending-up"></i>
<span>Up 4 points this week</span>
</div>
<p className="text-base text-zinc-600">No new borrowing. Lower credit card pressure.</p>
</div>
</div>

<div className="bg-indigo-50/50 border border-indigo-100 rounded-3xl p-5 mb-8 flex items-start gap-4">
<div className="bg-indigo-100 rounded-full p-2 mt-1 shrink-0">
<i className="w-5 h-5 text-indigo-600" data-lucide="arrow-right-circle"></i>
</div>
<div>
<h3 className="text-base font-semibold tracking-tight text-indigo-900 mb-1">Recommended action</h3>
<p className="text-base text-indigo-800/80 leading-snug">Pay €150 toward your credit card to reach 70 points next week.</p>
</div>
</div>

<h2 className="text-lg font-semibold tracking-tight mb-4">Core Signals</h2>
<div className="flex flex-col gap-3">
<div className="bg-white border border-zinc-200 rounded-2xl p-4 flex items-center justify-between shadow-sm">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center border border-emerald-100">
<i className="w-5 h-5 text-emerald-600" data-lucide="shield-check"></i>
</div>
<span className="text-base font-medium">New borrowing</span>
</div>
<span className="text-sm font-medium text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">Improving</span>
</div>
<div className="bg-white border border-zinc-200 rounded-2xl p-4 flex items-center justify-between shadow-sm">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center border border-zinc-200">
<i className="w-5 h-5 text-zinc-600" data-lucide="credit-card"></i>
</div>
<span className="text-base font-medium">Credit card pressure</span>
</div>
<span className="text-sm font-medium text-zinc-600 bg-zinc-100 px-2.5 py-1 rounded-full">Stable</span>
</div>
<div className="bg-white border border-amber-200 rounded-2xl p-4 flex items-center justify-between shadow-sm">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center border border-amber-200">
<i className="w-5 h-5 text-amber-600" data-lucide="scale"></i>
</div>
<span className="text-base font-medium">Debt vs Income</span>
</div>
<span className="text-sm font-medium text-amber-700 bg-amber-100 px-2.5 py-1 rounded-full">Needs action</span>
</div>
</div>
</div>

<div className="view-content px-5 pt-12 hidden" id="view-score">
<h1 className="text-2xl font-semibold tracking-tight mb-2">Score Details</h1>
<p className="text-base text-zinc-500 mb-8">Understand what changed and why it matters.</p>
<div className="bg-white border border-zinc-200 rounded-3xl p-6 shadow-sm mb-6">
<h2 className="text-lg font-semibold tracking-tight mb-4 flex items-center gap-2">
<i className="w-5 h-5 text-zinc-400" data-lucide="activity"></i>
                    What changed
                </h2>
<ul className="flex flex-col gap-4 text-base text-zinc-600">
<li className="flex items-start gap-3">
<div className="mt-0.5 bg-red-50 text-red-600 rounded-full p-1 border border-red-100 shrink-0">
<i className="w-3 h-3" data-lucide="arrow-up"></i>
</div>
<span>Your credit card balance increased by €280.</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-0.5 bg-amber-50 text-amber-600 rounded-full p-1 border border-amber-100 shrink-0">
<i className="w-3 h-3" data-lucide="alert-circle"></i>
</div>
<span>Monthly repayments now take a slightly bigger share of your income.</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-0.5 bg-emerald-50 text-emerald-600 rounded-full p-1 border border-emerald-100 shrink-0">
<i className="w-3 h-3" data-lucide="check"></i>
</div>
<span>No new short-term credit products opened.</span>
</li>
</ul>
</div>
<div className="bg-indigo-50 border border-indigo-100 rounded-3xl p-6 shadow-sm">
<h2 className="text-lg font-semibold tracking-tight text-indigo-900 mb-3 flex items-center gap-2">
<i className="w-5 h-5 text-indigo-500" data-lucide="map"></i>
                    What to do next
                </h2>
<p className="text-base text-indigo-800/90 mb-4">
                    To improve your health, focus on pausing new borrowing and reducing your highest-interest balance first.
                </p>
<button className="bg-indigo-600 text-white rounded-xl px-5 py-3 text-sm font-semibold w-full transition active:bg-indigo-700">
                    Set a payment goal
                </button>
</div>
</div>

<div className="view-content px-5 pt-12 hidden" id="view-points">
<h1 className="text-2xl font-semibold tracking-tight mb-2">Earn points</h1>
<p className="text-base text-zinc-500 mb-8">Build yourself up with healthy financial actions.</p>
<div className="flex flex-col gap-4">

<div className="bg-white border border-zinc-200 rounded-3xl p-5 shadow-sm relative overflow-hidden">
<div className="absolute top-5 right-5 bg-emerald-100 text-emerald-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-emerald-200">
                        +8 pts
                    </div>
<div className="w-12 h-12 rounded-2xl bg-zinc-50 flex items-center justify-center border border-zinc-100 mb-4">
<i className="w-6 h-6 text-zinc-700" data-lucide="wallet"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-2">Pay down credit card</h3>
<p className="text-base text-zinc-600 mb-4">Pay down €1,500 over the next 3 months to save interest and increase your score.</p>
<div className="w-full bg-zinc-100 rounded-full h-2 mb-2">
<div className="bg-emerald-500 h-2 rounded-full" style={{width: '30%'}}></div>
</div>
<span className="text-xs text-zinc-500 font-medium">€450 / €1,500</span>
</div>

<div className="bg-white border border-zinc-200 rounded-3xl p-5 shadow-sm relative overflow-hidden">
<div className="absolute top-5 right-5 bg-emerald-100 text-emerald-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-emerald-200">
                        +5 pts
                    </div>
<div className="w-12 h-12 rounded-2xl bg-zinc-50 flex items-center justify-center border border-zinc-100 mb-4">
<i className="w-6 h-6 text-zinc-700" data-lucide="piggy-bank"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-2">Build a mini buffer</h3>
<p className="text-base text-zinc-600">Save €50 per month until you reach €500. Less vulnerability to the unexpected.</p>
</div>

<div className="bg-white border border-zinc-200 rounded-3xl p-5 shadow-sm relative overflow-hidden">
<div className="absolute top-5 right-5 bg-emerald-100 text-emerald-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-emerald-200">
                        +20 pts
                    </div>
<div className="w-12 h-12 rounded-2xl bg-zinc-50 flex items-center justify-center border border-zinc-100 mb-4">
<i className="w-6 h-6 text-zinc-700" data-lucide="book-open"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-2">Learn and earn</h3>
<p className="text-base text-zinc-600 mb-5">Short lessons on debt pressure and how to stay on track.</p>
<div className="flex gap-2">
<button className="flex-1 bg-zinc-100 text-zinc-700 rounded-xl py-2.5 text-sm font-semibold border border-zinc-200">
                            Short videos
                        </button>
<button className="flex-1 bg-zinc-100 text-zinc-700 rounded-xl py-2.5 text-sm font-semibold border border-zinc-200">
                            Quiz
                        </button>
</div>
</div>
</div>
</div>

<div className="view-content px-5 pt-12 hidden" id="view-rewards">
<div className="flex justify-between items-end mb-2">
<h1 className="text-2xl font-semibold tracking-tight">Rewards</h1>
<span className="text-lg font-semibold text-emerald-600">24 pts</span>
</div>
<p className="text-base text-zinc-500 mb-8">Rewards that support your progress—not tempt you to spend more.</p>
<div className="grid gap-4">

<div className="bg-white border border-zinc-200 rounded-3xl p-1 shadow-sm flex items-center gap-4">
<div className="w-20 h-20 bg-zinc-50 rounded-2xl flex items-center justify-center shrink-0 border border-zinc-100 m-2">
<i className="w-8 h-8 text-zinc-400" data-lucide="shopping-basket"></i>
</div>
<div className="pr-4 py-3 flex-1">
<div className="flex justify-between items-start mb-1">
<h3 className="text-base font-semibold tracking-tight">5% off Groceries</h3>
<i className="w-4 h-4 text-zinc-300" data-lucide="lock"></i>
</div>
<p className="text-sm text-zinc-500 mb-2">Valid at major supermarkets this week.</p>
<div className="flex items-center gap-2">
<div className="flex-1 h-1.5 bg-zinc-100 rounded-full">
<div className="w-4/5 h-full bg-zinc-300 rounded-full"></div>
</div>
<span className="text-xs font-medium text-zinc-400">30 pts</span>
</div>
</div>
</div>

<div className="bg-white border border-emerald-200 rounded-3xl p-1 shadow-[0_2px_10px_rgba(16,185,129,0.1)] flex items-center gap-4 relative overflow-hidden">
<div className="absolute -right-6 -top-6 w-20 h-20 bg-emerald-50 rounded-full blur-2xl"></div>
<div className="w-20 h-20 bg-emerald-50 rounded-2xl flex items-center justify-center shrink-0 border border-emerald-100 m-2 relative z-10">
<i className="w-8 h-8 text-emerald-600" data-lucide="ticket"></i>
</div>
<div className="pr-4 py-3 flex-1 relative z-10">
<h3 className="text-base font-semibold tracking-tight text-emerald-900 mb-1">€10 Grocery Voucher</h3>
<p className="text-sm text-emerald-700/80 mb-2">Unlocked! Use on household essentials.</p>
<button className="text-sm font-semibold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-lg w-fit border border-emerald-100">
                            Reveal Code
                        </button>
</div>
</div>

<div className="bg-white border border-zinc-200 rounded-3xl p-1 shadow-sm flex items-center gap-4">
<div className="w-20 h-20 bg-zinc-50 rounded-2xl flex items-center justify-center shrink-0 border border-zinc-100 m-2">
<i className="w-8 h-8 text-zinc-400" data-lucide="percent"></i>
</div>
<div className="pr-4 py-3 flex-1">
<div className="flex justify-between items-start mb-1">
<h3 className="text-base font-semibold tracking-tight">Essentials Cashback</h3>
<i className="w-4 h-4 text-zinc-300" data-lucide="lock"></i>
</div>
<p className="text-sm text-zinc-500 mb-2">After 3 weeks of score improvement.</p>
<span className="text-xs font-medium bg-zinc-100 text-zinc-500 px-2 py-1 rounded-md">Week 2 of 3</span>
</div>
</div>
</div>
</div>

<div className="view-content px-5 pt-12 hidden" id="view-progress">
<h1 className="text-2xl font-semibold tracking-tight mb-2">Your Journey</h1>
<p className="text-base text-zinc-500 mb-8">Small steps, big freedom. Every payment is progress.</p>
<div className="bg-white border border-zinc-200 rounded-3xl p-6 shadow-sm mb-8 text-center relative overflow-hidden">
<div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-50 rounded-full blur-3xl"></div>
<h2 className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-2 relative z-10">Debt-Free Goal Date</h2>
<div className="text-3xl font-semibold tracking-tight text-zinc-900 relative z-10">October 2026</div>
<div className="mt-4 inline-flex items-center gap-1.5 bg-zinc-50 border border-zinc-200 px-3 py-1.5 rounded-full text-sm font-medium relative z-10">
<i className="w-4 h-4 text-orange-500" data-lucide="flame"></i>
                    4 month streak
                </div>
</div>
<div className="relative pl-4 border-l-2 border-zinc-100 ml-4 flex flex-col gap-8">

<div className="relative">
<div className="absolute -left-[25px] top-1 w-5 h-5 bg-emerald-500 rounded-full border-4 border-white shadow-sm flex items-center justify-center">
<i className="w-2.5 h-2.5 text-white" data-lucide="check"></i>
</div>
<h3 className="text-base font-semibold tracking-tight text-zinc-900">First €500 buffer reached</h3>
<p className="text-sm text-zinc-500 mt-1">Completed last month</p>
</div>

<div className="relative">
<div className="absolute -left-[25px] top-1 w-5 h-5 bg-white rounded-full border-[6px] border-indigo-500 shadow-sm"></div>
<h3 className="text-base font-semibold tracking-tight text-indigo-900">Credit card below target</h3>
<p className="text-sm text-zinc-500 mt-1">€150 remaining to hit this milestone</p>
</div>

<div className="relative">
<div className="absolute -left-[25px] top-1 w-5 h-5 bg-white rounded-full border-2 border-zinc-200"></div>
<h3 className="text-base font-medium tracking-tight text-zinc-400">First month no new borrowing</h3>
<p className="text-sm text-zinc-400 mt-1">On track for this month</p>
</div>
</div>
</div>

<nav className="hidden absolute bottom-0 w-full bg-white/80 backdrop-blur-md border-t border-zinc-100 pb-safe pt-2 px-4 z-40" id="bottom-nav">
<div className="flex justify-between items-center max-w-sm mx-auto pb-6 pt-2">
<button className="nav-btn flex flex-col items-center gap-1 w-16 text-zinc-400 transition-colors" data-target="home" onclick="switchView('home')">
<i className="w-6 h-6" data-lucide="layout-dashboard"></i>
<span className="text-[10px] font-medium">Home</span>
</button>
<button className="nav-btn flex flex-col items-center gap-1 w-16 text-zinc-400 transition-colors" data-target="score" onclick="switchView('score')">
<i className="w-6 h-6" data-lucide="activity"></i>
<span className="text-[10px] font-medium">Score</span>
</button>
<button className="nav-btn flex flex-col items-center gap-1 w-16 text-zinc-400 transition-colors" data-target="points" onclick="switchView('points')">
<i className="w-6 h-6" data-lucide="star"></i>
<span className="text-[10px] font-medium">Points</span>
</button>
<button className="nav-btn flex flex-col items-center gap-1 w-16 text-zinc-400 transition-colors" data-target="rewards" onclick="switchView('rewards')">
<i className="w-6 h-6" data-lucide="shopping-bag"></i>
<span className="text-[10px] font-medium">Rewards</span>
</button>
<button className="nav-btn flex flex-col items-center gap-1 w-16 text-zinc-400 transition-colors" data-target="progress" onclick="switchView('progress')">
<i className="w-6 h-6" data-lucide="route"></i>
<span className="text-[10px] font-medium">Progress</span>
</button>
</div>
</nav>
</div>


    </>
  );
}
