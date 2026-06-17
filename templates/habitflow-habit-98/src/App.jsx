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



      lucide.createIcons();
    
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
      

<nav className="fixed w-full z-50 top-0 border-b-2 border-black bg-[#fffdf7]/95 backdrop-blur-sm">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-10 h-10 bg-[#86efac] rounded-lg border-2 border-black flex items-center justify-center brutal-shadow-sm group-hover:rotate-6 transition-transform">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="activity"></i>
</div>
<span className="text-xl font-bold tracking-tight">HabitFlow</span>
</a>

<div className="hidden md:flex items-center gap-8 font-semibold text-sm">
<a className="hover:underline decoration-2 underline-offset-4" href="#features">
            Features
          </a>
<a className="hover:underline decoration-2 underline-offset-4" href="#ai">
            AI Coach
          </a>
<a className="hover:underline decoration-2 underline-offset-4" href="#analytics">
            Analytics
          </a>
<a className="hover:underline decoration-2 underline-offset-4" href="#">
            Login
          </a>
</div>

<button className="bg-black text-white px-6 py-2.5 text-sm font-bold rounded-lg border-2 border-black brutal-shadow brutal-hover transition-all">
          Start Building Free
        </button>
</div>
</nav>

<section className="pt-32 pb-20 px-6 relative overflow-hidden">
<div className="absolute inset-0 bg-grid-pattern -z-20"></div>
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

<div className="relative z-10 max-w-xl">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border-2 border-black bg-[#fde047] brutal-shadow-sm mb-8 transform -rotate-1">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="trophy"></i>
<span className="text-xs font-bold tracking-wide uppercase">
              New: Social Challenges
            </span>
</div>
<h1 className="text-5xl md:text-7xl tracking-tight leading-[1] mb-8 font-medium">
            Master your routine.
            <span className="relative inline-block px-2">
<span className="absolute inset-0 bg-[#ff9ebb] -rotate-2 border-2 border-black rounded-lg brutal-shadow-sm -z-10"></span>
              Without the burnout.
            </span>
</h1>
<p className="text-xl text-zinc-600 mb-10 leading-relaxed font-medium">
            Track habits, streaks, and goals in one beautiful place. Chat with
            your AI Coach to log progress via voice or text. Build consistency,
            zero friction.
          </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="px-8 py-4 bg-black text-white rounded-xl font-bold border-2 border-black brutal-shadow brutal-hover transition-all flex items-center justify-center gap-3">
              Get Started
              <i className="w-5 h-5 stroke-[1.5]" data-lucide="arrow-right"></i>
</button>
<button className="px-8 py-4 bg-white text-black rounded-xl font-bold border-2 border-black brutal-shadow brutal-hover transition-all flex items-center justify-center gap-3">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="play-circle"></i>
              Watch Demo
            </button>
</div>
</div>

<div className="relative h-[500px] hidden lg:flex items-center justify-center">
<div className="relative w-[400px]">

<div className="absolute -top-8 -right-4 w-72 bg-white p-5 rounded-xl border-2 border-black rotate-3 brutal-shadow-lg z-10">
<div className="flex justify-between items-center mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-purple-100 rounded-full border-2 border-black flex items-center justify-center">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="footprints"></i>
</div>
<div>
<div className="font-bold text-sm">Morning Run</div>
<div className="text-xs text-zinc-500">
                      Just now • Central Park
                    </div>
</div>
</div>
<div className="font-bold text-green-600">+ 45m</div>
</div>
<div className="w-full bg-zinc-100 h-2 rounded-full overflow-hidden border border-black">
<div className="bg-purple-400 h-full w-3/4"></div>
</div>
<div className="flex justify-between mt-2 text-xs font-bold text-zinc-500">
<span>Daily Goal</span>
<span>75% Done</span>
</div>
</div>
<div className="absolute top-24 -left-8 w-72 bg-[#bfdbfe] p-5 rounded-xl border-2 border-black -rotate-3 brutal-shadow-lg z-20">
<div className="flex justify-between items-start mb-2">
<div className="font-bold text-lg">Consistency Score</div>
<div className="bg-green-400 text-black text-xs font-bold px-2 py-1 border border-black rounded">
                  Top 10%
                </div>
</div>
<div className="h-24 flex items-end justify-between gap-1 mb-2">
<div className="w-full bg-blue-400 border border-black h-[40%]"></div>
<div className="w-full bg-blue-400 border border-black h-[60%]"></div>
<div className="w-full bg-blue-400 border border-black h-[80%]"></div>
<div className="w-full bg-blue-400 border border-black h-[90%]"></div>
<div className="w-full bg-blue-400 border border-black h-[100%]"></div>
</div>
<div className="text-xs font-bold text-center">
                Current Streak: 12 Days
              </div>
</div>

<div className="absolute top-[280px] left-1/2 -translate-x-1/2 w-80 bg-[#18181b] text-white p-4 rounded-xl border-2 border-black z-30 flex items-center gap-3 brutal-shadow-sm">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex-shrink-0 border border-white/20"></div>
<div>
<div className="text-xs text-zinc-400 mb-1">Coach (AI)</div>
<div className="text-sm font-medium">
                  "Great job hitting your reading goal!"
                </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-y-2 border-black" id="features">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<span className="text-sm font-bold tracking-widest uppercase text-zinc-500 mb-3 block">
            Complete Financial Control
          </span>
<h2 className="text-4xl md:text-5xl tracking-tight font-medium">
            Everything you need to build consistency
          </h2>
</div>
<div className="grid md:grid-cols-3 gap-8 items-stretch">

<div className="bg-[#fde047] p-8 rounded-2xl border-2 border-black brutal-shadow flex flex-col hover:-translate-y-1 transition-transform">
<div className="w-12 h-12 bg-white rounded-lg border-2 border-black flex items-center justify-center mb-6">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="bot"></i>
</div>
<h3 className="text-xl font-bold mb-4">AI Habit Coach</h3>
<p className="font-medium text-zinc-800 mb-6 flex-1">
              Chat with your AI Coach to log habits naturally. "Read for 30
              mins" is all you need to say.
            </p>
<ul className="space-y-3 text-sm font-semibold">
<li className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="check"></i>
                Voice Logging
              </li>
<li className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="check"></i>
                Smart Reminders
              </li>
<li className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="check"></i>
                Motivation Boosts
              </li>
</ul>
</div>

<div className="bg-[#86efac] p-8 rounded-2xl border-2 border-black brutal-shadow flex flex-col hover:-translate-y-1 transition-transform relative z-10 md:-translate-y-6">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-1.5 rounded-md border-2 border-black text-xs font-bold uppercase tracking-wider brutal-shadow-sm">
              Top Feature
            </div>
<div className="w-12 h-12 bg-white rounded-lg border-2 border-black flex items-center justify-center mb-6">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="bar-chart-2"></i>
</div>
<h3 className="text-xl font-bold mb-4">Streak Analytics</h3>
<p className="font-medium text-zinc-800 mb-6 flex-1">
              Visualize your progress with heatmaps and charts. Track completion
              rates and longest streaks.
            </p>
<ul className="space-y-3 text-sm font-semibold">
<li className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="check"></i>
                GitHub-style Heatmap
              </li>
<li className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="check"></i>
                Weekly Reports
              </li>
<li className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="check"></i>
                Trend Analysis
              </li>
</ul>
</div>

<div className="bg-[#ff9ebb] p-8 rounded-2xl border-2 border-black brutal-shadow flex flex-col hover:-translate-y-1 transition-transform">
<div className="w-12 h-12 bg-white rounded-lg border-2 border-black flex items-center justify-center mb-6">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="award"></i>
</div>
<h3 className="text-xl font-bold mb-4">Gamified Goals</h3>
<p className="font-medium text-zinc-800 mb-6 flex-1">
              Set weekly targets for habits like Gym or Reading. Unlock badges
              and compete on leaderboards.
            </p>
<ul className="space-y-3 text-sm font-semibold">
<li className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="check"></i>
                Achievement Badges
              </li>
<li className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="check"></i>
                Friend Challenges
              </li>
<li className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="check"></i>
                Level Up System
              </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#fffdf7]" id="ai">
<div className="max-w-7xl mx-auto">
<div className="inline-block bg-black text-white border-2 border-black px-4 py-1.5 rounded-md brutal-shadow-sm mb-6">
<span className="text-xs font-bold uppercase tracking-widest">
            Meet Coach
          </span>
</div>
<h2 className="text-4xl md:text-5xl tracking-tight mb-16 font-medium">
          Your Personal Accountability Partner
        </h2>
<div className="grid lg:grid-cols-3 gap-8 items-center relative">

<div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-black -z-10 -translate-y-1/2 border-y-2 border-dashed border-zinc-300"></div>

<div className="bg-white p-8 rounded-2xl border-2 border-black brutal-shadow h-full">
<div className="w-16 h-16 bg-blue-100 rounded-full border-2 border-black mb-6 mx-auto flex items-center justify-center">
<i className="w-8 h-8 stroke-[1.5]" data-lucide="message-square"></i>
</div>
<h3 className="text-2xl text-center mb-6 font-medium">Coach Plans</h3>
<div className="bg-zinc-100 p-4 rounded-xl border border-zinc-300 text-sm font-medium italic text-zinc-600 text-center">
              "How much did I spend on Swiggy last month?"
            </div>
</div>

<div className="bg-indigo-600 p-8 rounded-2xl border-2 border-black brutal-shadow-lg scale-110 z-10 h-full flex flex-col justify-center text-white">
<div className="text-center mb-6">
<div className="inline-flex bg-white text-black p-2 rounded-lg border-2 border-black mb-2 animate-pulse">
<i className="w-8 h-8 stroke-[1.5]" data-lucide="cpu"></i>
</div>
<h3 className="text-2xl font-medium">Coach Suggests</h3>
</div>
<ul className="space-y-3">
<li className="flex items-center gap-2 font-bold text-indigo-100">
<i className="w-4 h-4" data-lucide="search"></i>
                Scans transactions
              </li>
<li className="flex items-center gap-2 font-bold text-indigo-100">
<i className="w-4 h-4" data-lucide="filter"></i>
                Filters category
              </li>
<li className="flex items-center gap-2 font-bold text-indigo-100">
<i className="w-4 h-4" data-lucide="calculator"></i>
                Calculates totals
              </li>
<li className="flex items-center gap-2 font-bold text-indigo-100">
<i className="w-4 h-4" data-lucide="shield-check"></i>
                100% Private
              </li>
</ul>
</div>

<div className="bg-white p-8 rounded-2xl border-2 border-black brutal-shadow h-full">
<div className="w-16 h-16 bg-green-100 rounded-full border-2 border-black mb-6 mx-auto flex items-center justify-center">
<i className="w-8 h-8 stroke-[1.5]" data-lucide="lightbulb"></i>
</div>
<h3 className="text-2xl text-center mb-6 font-medium">Sai Answers</h3>
<div className="bg-green-50 p-4 rounded-xl border border-green-200 text-sm font-bold text-green-900 text-center">
              "You spent ₹4,500 on Swiggy. That's 15% less than October! 🎉"
            </div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#bfdbfe] border-t-2 border-black" id="analytics">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
<div>
<span className="text-sm font-bold tracking-widest uppercase text-black/70 mb-3 block">
            Progress Tracking
          </span>
<h2 className="text-4xl mb-6 font-medium">
            All your habits. One Dashboard.
          </h2>
<p className="text-lg font-medium mb-8">
            Stop using messy notes. Track your Fitness (HealthKit) and Learning
            (Kindle) alongside your daily routines. Visualize your improved
            consistency.
          </p>
<div className="space-y-4">
<div className="flex items-center gap-4 bg-white/50 p-3 rounded-lg border-2 border-black/10">
<div className="bg-white p-2 rounded border border-black">
<i className="w-5 h-5" data-lucide="bar-chart-3"></i>
</div>
<span className="font-bold">Completion Heatmaps</span>
</div>
<div className="flex items-center gap-4 bg-white/50 p-3 rounded-lg border-2 border-black/10">
<div className="bg-white p-2 rounded border border-black">
<i className="w-5 h-5" data-lucide="bell"></i>
</div>
<span className="font-bold">Missed Habit Alerts</span>
</div>
</div>
<div className="mt-8">
<button className="bg-white text-black px-8 py-3 rounded-lg border-2 border-black font-bold brutal-shadow brutal-hover transition-all">
              Explore Analytics
            </button>
</div>
</div>

<div className="relative">
<div className="bg-white rounded-xl border-2 border-black p-6 brutal-shadow-lg rotate-2">
<div className="flex justify-between items-center border-b-2 border-zinc-100 pb-4 mb-4">
<h3 className="font-bold text-xl">My Habits</h3>
<span className="bg-green-100 text-green-800 border border-green-300 px-2 py-1 rounded text-xs font-bold">
                Live
              </span>
</div>

<div className="space-y-3">
<div className="flex items-center justify-between p-3 bg-zinc-50 border border-zinc-200 rounded-lg">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-blue-600 text-white rounded flex items-center justify-center font-bold">
<i className="w-5 h-5" data-lucide="book"></i>
</div>
<div>
<div className="font-bold text-sm">Reading</div>
<div className="text-xs text-zinc-500">Daily • 30m</div>
</div>
</div>
<div className="text-right">
<div className="font-bold">12 Day</div>
<div className="text-xs text-green-600 font-bold">Streak 🔥</div>
</div>
</div>
<div className="flex items-center justify-between p-3 bg-zinc-50 border border-zinc-200 rounded-lg">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-red-600 text-white rounded flex items-center justify-center font-bold">
<i className="w-5 h-5" data-lucide="dumbbell"></i>
</div>
<div>
<div className="font-bold text-sm">Gym</div>
<div className="text-xs text-zinc-500">4x / Week</div>
</div>
</div>
<div className="text-right">
<div className="font-bold">3 Day</div>
<div className="text-xs text-zinc-500 font-bold">Streak</div>
</div>
</div>
</div>
<div className="mt-4 pt-4 border-t-2 border-dashed border-zinc-200 flex justify-between items-center">
<span className="font-bold text-zinc-500">Completion Rate</span>
<span className="font-bold text-xl">92%</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-b-2 border-black">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-4xl md:text-5xl mb-12 font-medium">
          Integrate with your life
        </h2>
<div className="flex flex-wrap justify-center gap-6 mb-12">
<div className="bg-white border-2 border-black rounded-xl px-8 py-4 flex items-center gap-3 brutal-shadow hover:-translate-y-1 transition-all cursor-default min-w-[160px]">
<i className="text-purple-600" data-lucide="watch"></i>
<span className="font-bold text-lg">Health</span>
</div>
<div className="bg-white border-2 border-black rounded-xl px-8 py-4 flex items-center gap-3 brutal-shadow hover:-translate-y-1 transition-all cursor-default min-w-[160px]">
<i className="text-orange-500" data-lucide="calendar"></i>
<span className="font-bold text-lg">Calendar</span>
</div>
<div className="bg-white border-2 border-black rounded-xl px-8 py-4 flex items-center gap-3 brutal-shadow hover:-translate-y-1 transition-all cursor-default min-w-[160px]">
<i className="text-blue-500" data-lucide="check-circle"></i>
<span className="font-bold text-lg">Tasks</span>
</div>
<div className="bg-white border-2 border-black rounded-xl px-8 py-4 flex items-center gap-3 brutal-shadow hover:-translate-y-1 transition-all cursor-default min-w-[160px]">
<i className="text-green-600" data-lucide="book-open"></i>
<span className="font-bold text-lg">Journal</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-grid-pattern bg-zinc-50 border-b-2 border-black">
<div className="max-w-7xl mx-auto">
<h2 className="text-4xl md:text-5xl leading-none tracking-tight mb-16 text-center font-medium">
          From procrastination to progress
        </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white border-2 border-black rounded-xl p-8 min-h-[320px] flex flex-col justify-between brutal-shadow hover:-translate-y-1 transition-transform">
<div>
<span className="text-6xl text-black/10 block mb-6 font-bold">
                01
              </span>
<h3 className="text-2xl leading-tight mb-4 font-bold">
                Sign Up Free
              </h3>
<p className="font-medium border-l-2 border-[#fde047] pl-3">
                Create your secure account. We use Supabase with Row Level
                Security (RLS) to ensure your data is yours alone.
              </p>
</div>
</div>

<div className="bg-white border-2 border-black rounded-xl p-8 min-h-[320px] flex flex-col justify-between brutal-shadow hover:-translate-y-1 transition-transform">
<div>
<span className="text-6xl text-black/10 block mb-6 font-bold">
                02
              </span>
<h3 className="text-2xl leading-tight mb-4 font-bold">
                Define Habits
              </h3>
<p className="font-medium border-l-2 border-[#86efac] pl-3">
                Use the dashboard or just tell Coach: "I want to drink water
                every hour". Set up recurrences instantly.
              </p>
</div>
</div>

<div className="bg-white border-2 border-black rounded-xl p-8 min-h-[320px] flex flex-col justify-between brutal-shadow hover:-translate-y-1 transition-transform">
<div>
<span className="text-6xl text-black/10 block mb-6 font-bold">
                03
              </span>
<h3 className="text-2xl leading-tight mb-4 font-bold">
                Build Streaks
              </h3>
<p className="font-medium border-l-2 border-[#ff9ebb] pl-3">
                Watch your dashboard update in real-time. Export reports to
                share with accountability partners.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#fffdf7]">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-12">
<h2 className="text-4xl font-medium">Why switch to SpendsIn?</h2>
</div>
<div className="overflow-x-auto">
<table className="w-full border-2 border-black brutal-shadow-lg text-left border-collapse">
<thead>
<tr className="bg-black text-white">
<th className="p-4 md:p-6 border-b-2 border-black w-1/3">
                  Feature
                </th>
<th className="p-4 md:p-6 border-b-2 border-white/20 w-1/3 text-zinc-400">
                  Excel / Others
                </th>
<th className="p-4 md:p-6 border-b-2 border-black bg-[#fde047] text-black w-1/3">
                  HabitFlow
                </th>
</tr>
</thead>
<tbody className="font-medium">
<tr className="border-b-2 border-black">
<td className="p-4 md:p-6 font-bold bg-zinc-50">Tracking</td>
<td className="p-4 md:p-6">Manual &amp; Forgettable</td>
<td className="p-4 md:p-6 bg-yellow-50 font-bold">
                  AI Chat &amp; Automated
                </td>
</tr>
<tr className="border-b-2 border-black">
<td className="p-4 md:p-6 font-bold bg-zinc-50">Analytics</td>
<td className="p-4 md:p-6">Basic Checkboxes</td>
<td className="p-4 md:p-6 bg-yellow-50 font-bold">
                  Deep Insights &amp; Trends
                </td>
</tr>
<tr className="border-b-2 border-black">
<td className="p-4 md:p-6 font-bold bg-zinc-50">Cost</td>
<td className="p-4 md:p-6">Expensive Subs</td>
<td className="p-4 md:p-6 bg-yellow-50 font-bold">
                  Free &amp; Open Source
                </td>
</tr>
<tr className="border-b-2 border-black">
<td className="p-4 md:p-6 font-bold bg-zinc-50">Motivation</td>
<td className="p-4 md:p-6">None</td>
<td className="p-4 md:p-6 bg-yellow-50 font-bold">
                  Gamified &amp; Social
                </td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#ff9ebb] border-y-2 border-black">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
<div className="flex-1">
<div className="inline-block bg-white border-2 border-black px-4 py-1.5 rounded-md brutal-shadow-sm mb-6">
<span className="text-xs font-bold uppercase tracking-widest">
              Mobile First
            </span>
</div>
<h2 className="text-4xl md:text-5xl mb-6 font-medium">
            Discipline in your pocket.
          </h2>
<p className="text-xl text-black/80 mb-8 font-medium">
            Fully responsive design means you can tick off habits the moment you
            do them. Toggle Dark Mode for late-night journaling.
          </p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 font-bold">
<i className="w-5 h-5" data-lucide="check"></i>
              Dark Mode Support
            </li>
<li className="flex items-center gap-3 font-bold">
<i className="w-5 h-5" data-lucide="check"></i>
              CSV Export on Mobile
            </li>
<li className="flex items-center gap-3 font-bold">
<i className="w-5 h-5" data-lucide="check"></i>
              Secure Biometric (Device) Login
            </li>
</ul>
</div>
<div className="flex-1 relative flex justify-center">

<div className="w-[300px] h-[550px] bg-white border-4 border-black rounded-[2.5rem] brutal-shadow-lg p-3 relative z-10">
<div className="w-full h-full bg-[#18181b] rounded-[2rem] overflow-hidden border-2 border-black flex flex-col text-white">

<div className="h-16 border-b border-zinc-800 flex items-center justify-between px-4">
<i className="w-6 h-6" data-lucide="menu"></i>
<span className="font-bold">Dashboard</span>
<div className="w-8 h-8 bg-zinc-700 rounded-full border border-zinc-500">
<i className="text-green-400" data-lucide="check"></i>
</div>
</div>

<div className="p-4 space-y-4">
<div className="text-center py-4">
<div className="text-zinc-400 text-xs uppercase">
                    Daily Completion
                  </div>
<div className="text-3xl font-bold mt-1">85%</div>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="bg-zinc-800 p-3 rounded-xl border border-zinc-700">
<div className="text-green-400 text-xs mb-1">Done</div>
<div className="font-bold">5</div>
</div>
<div className="bg-zinc-800 p-3 rounded-xl border border-zinc-700">
<div className="text-red-400 text-xs mb-1">To Do</div>
<div className="font-bold">2</div>
</div>
</div>
<div className="bg-zinc-800 p-3 rounded-xl border border-zinc-700 flex items-center gap-3 mt-4">
<div className="w-10 h-10 bg-yellow-500/20 text-yellow-500 rounded-lg flex items-center justify-center">
<i className="w-5 h-5" data-lucide="book"></i>
</div>
<div>
<div className="font-bold text-sm">Read Book</div>
<div className="text-xs text-zinc-500">Education</div>
</div>
<div className="ml-auto font-bold text-red-400">-₹350</div>
</div>
</div>

<div className="absolute bottom-6 right-6 w-12 h-12 bg-[#86efac] rounded-full border-2 border-black flex items-center justify-center text-black">
<i className="w-6 h-6" data-lucide="plus"></i>
</div>
</div>
</div>
<div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white rounded-full border-2 border-black z-0"></div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-yellow-400 relative overflow-hidden">
<div className="absolute inset-0 bg-grid-pattern -z-10 opacity-10"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<h2 className="text-5xl md:text-7xl tracking-tight mb-6 leading-[1.1] font-medium">
          Stop dreaming. Start doing.
        </h2>
<p className="text-xl font-bold text-black/80 mb-12 max-w-2xl mx-auto">
          Join thousands of achievers building their dream lives with HabitFlow.
          Built with React 19 &amp; Supabase.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6">
<button className="bg-black text-white text-xl px-12 py-5 rounded-xl border-2 border-white font-bold brutal-shadow brutal-hover-lift transition-all">
            Create Free Account
          </button>
</div>
<p className="mt-8 text-black font-bold text-sm tracking-wide">
          Open Source • No credit card required • Secure RLS
        </p>
</div>
</section>

<footer className="bg-white text-black py-12 px-6 border-t-2 border-black">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-[#86efac] rounded-lg border-2 border-black flex items-center justify-center">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="activity"></i>
</div>
<span className="font-bold text-xl">HabitFlow</span>
</div>
<div className="flex flex-wrap justify-center gap-8 font-semibold text-sm">
<a className="hover:text-zinc-600" href="#">Privacy Policy</a>
<a className="hover:text-zinc-600" href="#">Terms of Service</a>
<a className="hover:text-zinc-600" href="#">GitHub Repo</a>
<a className="hover:text-zinc-600" href="#">Contact</a>
</div>
<div className="text-zinc-500 text-sm font-medium">
          © 2025 HabitFlow. Built with ❤️ in India.
        </div>
</div>
</footer>


    </>
  );
}
