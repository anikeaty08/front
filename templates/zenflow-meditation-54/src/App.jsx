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



      // Initialize Lucide icons
      lucide.createIcons();

      // Initialize charts
      function initCharts() {
        // Usage patterns chart
        const usageCtx = document.getElementById('usageChart');
        if (usageCtx) {
          new Chart(usageCtx.getContext('2d'), {
            type: 'bar',
            data: {
              labels: ['6 AM', '9 AM', '12 PM', '3 PM', '6 PM', '9 PM'],
              datasets: [{
                label: 'Preferred meditation times',
                data: [12, 8, 15, 20, 35, 28],
                backgroundColor: 'rgba(59, 130, 246, 0.6)',
                borderColor: 'rgba(59, 130, 246, 1)',
                borderWidth: 1,
                borderRadius: 6
              }]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false
                }
              },
              scales: {
                x: {
                  grid: {
                    display: false
                  }
                },
                y: {
                  beginAtZero: true,
                  ticks: {
                    callback: function(value) {
                      return value + '%';
                    }
                  }
                }
              }
            }
          });
        }

        // Retention comparison chart
        const retentionCtx = document.getElementById('retentionChart');
        if (retentionCtx) {
          new Chart(retentionCtx.getContext('2d'), {
            type: 'line',
            data: {
              labels: ['Day 1', 'Day 7', 'Day 14', 'Day 21', 'Day 30'],
              datasets: [{
                label: 'Zenflow',
                data: [100, 78, 65, 58, 52],
                borderColor: 'rgba(59, 130, 246, 1)',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                borderWidth: 3,
                tension: 0.3,
                fill: true
              }, {
                label: 'Industry Average',
                data: [100, 45, 32, 28, 22],
                borderColor: 'rgba(148, 163, 184, 1)',
                backgroundColor: 'rgba(148, 163, 184, 0.1)',
                borderWidth: 2,
                tension: 0.3,
                fill: true,
                borderDash: [5, 5]
              }]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              interaction: {
                intersect: false,
                mode: 'index'
              },
              scales: {
                y: {
                  beginAtZero: true,
                  max: 100,
                  ticks: {
                    callback: function(value) {
                      return value + '%';
                    }
                  }
                }
              },
              plugins: {
                tooltip: {
                  callbacks: {
                    label: function(context) {
                      return context.dataset.label + ': ' + context.parsed.y + '%';
                    }
                  }
                }
              }
            }
          });
        }
      }

      // Smooth scrolling for navigation
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        });
      });

      // Initialize when page loads
      document.addEventListener('DOMContentLoaded', function() {
        initCharts();
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
      

<header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-slate-200">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
<span className="text-white text-sm font-semibold">Z</span>
</div>
<span className="font-semibold text-slate-900">Zenflow</span>
</div>
<nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
<a className="hover:text-slate-900 transition-colors" href="#overview">Overview</a>
<a className="hover:text-slate-900 transition-colors" href="#research">Research</a>
<a className="hover:text-slate-900 transition-colors" href="#design">Design</a>
<a className="hover:text-slate-900 transition-colors" href="#prototype">Prototype</a>
<a className="hover:text-slate-900 transition-colors" href="#results">Results</a>
</nav>
</div>
<div className="flex items-center gap-3">
<button className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 px-3 py-2 rounded-lg hover:bg-slate-100 transition">
<i className="w-4 h-4" data-lucide="share-2"></i>
            Share
          </button>
<button className="inline-flex items-center gap-2 text-sm text-white px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition shadow-sm">
<i className="w-4 h-4" data-lucide="play"></i>
            Try Prototype
          </button>
</div>
</div>
</header>

<section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
<div %3e%3c="" %3e%3ccircle="" %3e%3cg="" 60"="" className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=" cx="30" cy="30" fill="%23e2e8f0" fillOpacity="0.4" fill-rule="evenodd" g%3e%3c="" height="60" opacity-50"="" r="1" svg%3e')]="" viewbox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"></div>
<div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
<div className="text-center max-w-4xl mx-auto">
<div className="inline-flex items-center gap-2 text-sm text-blue-700 bg-blue-100 rounded-full px-4 py-2 mb-6">
<i className="w-4 h-4" data-lucide="smartphone"></i>
            Mobile App Case Study
          </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
            Zenflow: Personalized
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">meditation</span>
            companion
          </h1>
<p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-8 max-w-3xl mx-auto">
            Designing a mobile meditation app that adapts to users' emotional states, schedules, and preferences to build sustainable mindfulness habits.
          </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
<button className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition shadow-lg">
<i className="w-5 h-5" data-lucide="play-circle"></i>
              View Prototype
            </button>
<button className="inline-flex items-center gap-2 text-slate-700 px-6 py-3 rounded-xl border border-slate-300 hover:bg-slate-50 transition">
<i className="w-5 h-5" data-lucide="arrow-down"></i>
              Read Case Study
            </button>
</div>

<div className="relative mx-auto w-80 h-96 sm:w-96 sm:h-[28rem]">
<div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-[3rem] blur-2xl"></div>
<div className="relative bg-slate-900 rounded-[2.5rem] p-2 shadow-2xl">
<div className="bg-white rounded-[2rem] p-6 h-full flex flex-col">
<div className="flex items-center justify-between mb-6">
<span className="text-lg font-semibold text-slate-900">Good morning</span>
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600"></div>
</div>
<div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 mb-6">
<h3 className="font-semibold text-slate-900 mb-2">Your daily session</h3>
<p className="text-sm text-slate-600 mb-4">5-minute breathing exercise</p>
<div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mx-auto">
<i className="w-6 h-6 text-white" data-lucide="play"></i>
</div>
</div>
<div className="space-y-3 flex-1">
<div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50">
<div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
<i className="w-5 h-5 text-blue-600" data-lucide="heart"></i>
</div>
<div>
<p className="font-medium text-slate-900 text-sm">Anxiety Relief</p>
<p className="text-xs text-slate-500">12 min</p>
</div>
</div>
<div className="flex items-center gap-3 p-3 rounded-xl">
<div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
<i className="w-5 h-5 text-purple-600" data-lucide="moon"></i>
</div>
<div>
<p className="font-medium text-slate-900 text-sm">Sleep Stories</p>
<p className="text-xs text-slate-500">15 min</p>
</div>
</div>
<div className="flex items-center gap-3 p-3 rounded-xl">
<div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
<i className="w-5 h-5 text-green-600" data-lucide="zap"></i>
</div>
<div>
<p className="font-medium text-slate-900 text-sm">Focus Boost</p>
<p className="text-xs text-slate-500">8 min</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 space-y-20">

<section id="overview">
<div className="grid lg:grid-cols-3 gap-12 items-start">
<div className="lg:col-span-2">
<h2 className="text-3xl font-bold text-slate-900 mb-6">Project Overview</h2>
<p className="text-lg text-slate-700 leading-relaxed mb-6">
              Zenflow is a mobile meditation app designed to make mindfulness accessible and personalized. Through intelligent recommendations and adaptive content, it helps users build consistent meditation habits that fit their unique lifestyles and emotional needs.
            </p>
<p className="text-slate-600 leading-relaxed">
              The challenge was creating an experience that feels personal without being overwhelming, and scientific without losing the human touch that makes meditation meaningful.
            </p>
</div>
<div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
<h3 className="font-semibold text-slate-900 mb-4">Project Details</h3>
<div className="space-y-4 text-sm">
<div className="flex justify-between">
<span className="text-slate-500">Role</span>
<span className="text-slate-900">Lead Product Designer</span>
</div>
<div className="flex justify-between">
<span className="text-slate-500">Duration</span>
<span className="text-slate-900">12 weeks</span>
</div>
<div className="flex justify-between">
<span className="text-slate-500">Team</span>
<span className="text-slate-900">4 people</span>
</div>
<div className="flex justify-between">
<span className="text-slate-500">Platform</span>
<span className="text-slate-900">iOS &amp; Android</span>
</div>
<div className="flex justify-between">
<span className="text-slate-500">Tools</span>
<span className="text-slate-900">Figma, Principle</span>
</div>
</div>
</div>
</div>
</section>

<section>
<div className="grid md:grid-cols-2 gap-12">
<div>
<h3 className="text-2xl font-bold text-slate-900 mb-4">The Problem</h3>
<p className="text-slate-700 mb-4">
              Most meditation apps follow a one-size-fits-all approach, leading to high abandonment rates. Users struggle to find content that matches their current emotional state, available time, and experience level.
            </p>
<ul className="space-y-2 text-slate-600">
<li className="flex items-start gap-2">
<i className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" data-lucide="x-circle"></i>
                68% of users abandon meditation apps within the first week
              </li>
<li className="flex items-start gap-2">
<i className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" data-lucide="x-circle"></i>
                Generic recommendations don't match user context
              </li>
<li className="flex items-start gap-2">
<i className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" data-lucide="x-circle"></i>
                Overwhelming content libraries create decision paralysis
              </li>
</ul>
</div>
<div>
<h3 className="text-2xl font-bold text-slate-900 mb-4">Project Goals</h3>
<p className="text-slate-700 mb-4">
              Create a meditation app that adapts to each user's unique needs and helps build sustainable mindfulness habits through personalized experiences.
            </p>
<ul className="space-y-2 text-slate-600">
<li className="flex items-start gap-2">
<i className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" data-lucide="check-circle"></i>
                Increase user retention by 40% in the first month
              </li>
<li className="flex items-start gap-2">
<i className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" data-lucide="check-circle"></i>
                Provide contextually relevant meditation recommendations
              </li>
<li className="flex items-start gap-2">
<i className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" data-lucide="check-circle"></i>
                Simplify content discovery and reduce choice overload
              </li>
</ul>
</div>
</div>
</section>

<section id="research">
<h2 className="text-3xl font-bold text-slate-900 mb-8">Research &amp; Insights</h2>
<div className="grid lg:grid-cols-3 gap-8 mb-12">
<div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
<div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
<i className="w-6 h-6 text-blue-600" data-lucide="users"></i>
</div>
<h3 className="font-semibold text-slate-900 mb-2">User Interviews</h3>
<p className="text-slate-600 text-sm mb-3">Conducted 24 interviews with meditation practitioners</p>
<p className="text-2xl font-bold text-blue-600">24</p>
</div>
<div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
<div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
<i className="w-6 h-6 text-purple-600" data-lucide="bar-chart"></i>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Survey Responses</h3>
<p className="text-slate-600 text-sm mb-3">Quantitative data from potential users</p>
<p className="text-2xl font-bold text-purple-600">347</p>
</div>
<div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
<div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-4">
<i className="w-6 h-6 text-green-600" data-lucide="smartphone"></i>
</div>
<h3 className="font-semibold text-slate-900 mb-2">App Analysis</h3>
<p className="text-slate-600 text-sm mb-3">Competitive analysis of existing solutions</p>
<p className="text-2xl font-bold text-green-600">12</p>
</div>
</div>
<div className="grid md:grid-cols-2 gap-8 mb-8">
<div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6">
<h3 className="font-semibold text-slate-900 mb-4">Key Insights</h3>
<ul className="space-y-3">
<li className="flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mt-0.5">
<span className="text-white text-xs font-bold">1</span>
</div>
<p className="text-slate-700 text-sm">Users want recommendations based on their current mood and available time, not just preferences</p>
</li>
<li className="flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center flex-shrink-0 mt-0.5">
<span className="text-white text-xs font-bold">2</span>
</div>
<p className="text-slate-700 text-sm">85% of users prefer guided sessions over self-directed meditation</p>
</li>
<li className="flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
<span className="text-white text-xs font-bold">3</span>
</div>
<p className="text-slate-700 text-sm">Progress tracking motivates continued use, but shouldn't feel like pressure</p>
</li>
</ul>
</div>
<div className="bg-white rounded-2xl border border-slate-200 p-6">
<h3 className="font-semibold text-slate-900 mb-4">User Persona: Sarah</h3>
<div className="flex items-center gap-4 mb-4">
<div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-purple-500"></div>
<div>
<h4 className="font-medium text-slate-900">Sarah Martinez</h4>
<p className="text-sm text-slate-600">Marketing Manager, 29</p>
</div>
</div>
<div className="space-y-3 text-sm">
<div>
<span className="text-slate-500 font-medium">Goals:</span>
<p className="text-slate-700">Reduce work stress, improve sleep quality, build consistent habits</p>
</div>
<div>
<span className="text-slate-500 font-medium">Frustrations:</span>
<p className="text-slate-700">Inconsistent schedule, too many app options, difficulty staying motivated</p>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl border border-slate-200 p-6">
<h3 className="font-semibold text-slate-900 mb-4">When Users Meditate</h3>
<div className="h-64 relative">
<canvas id="usageChart"></canvas>
</div>
<p className="text-sm text-slate-500 mt-4">Survey data showing preferred meditation times (n=347)</p>
</div>
</section>

<section id="design">
<h2 className="text-3xl font-bold text-slate-900 mb-8">Design Process</h2>

<div className="mb-12">
<h3 className="text-xl font-semibold text-slate-900 mb-6">Information Architecture</h3>
<div className="bg-white rounded-2xl border border-slate-200 p-8">
<div className="grid md:grid-cols-4 gap-6 text-center">
<div className="space-y-3">
<div className="w-16 h-16 rounded-xl bg-blue-100 flex items-center justify-center mx-auto">
<i className="w-8 h-8 text-blue-600" data-lucide="home"></i>
</div>
<h4 className="font-medium text-slate-900">Home</h4>
<p className="text-sm text-slate-600">Personalized dashboard with daily recommendations</p>
</div>
<div className="space-y-3">
<div className="w-16 h-16 rounded-xl bg-purple-100 flex items-center justify-center mx-auto">
<i className="w-8 h-8 text-purple-600" data-lucide="compass"></i>
</div>
<h4 className="font-medium text-slate-900">Discover</h4>
<p className="text-sm text-slate-600">Browse content by mood, topic, or duration</p>
</div>
<div className="space-y-3">
<div className="w-16 h-16 rounded-xl bg-green-100 flex items-center justify-center mx-auto">
<i className="w-8 h-8 text-green-600" data-lucide="play-circle"></i>
</div>
<h4 className="font-medium text-slate-900">Session</h4>
<p className="text-sm text-slate-600">Immersive meditation player with progress tracking</p>
</div>
<div className="space-y-3">
<div className="w-16 h-16 rounded-xl bg-orange-100 flex items-center justify-center mx-auto">
<i className="w-8 h-8 text-orange-600" data-lucide="user"></i>
</div>
<h4 className="font-medium text-slate-900">Profile</h4>
<p className="text-sm text-slate-600">Progress insights and personalization settings</p>
</div>
</div>
</div>
</div>

<div className="mb-12">
<h3 className="text-xl font-semibold text-slate-900 mb-6">Key Features</h3>
<div className="grid lg:grid-cols-3 gap-8">
<div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6">
<div className="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center mb-4">
<i className="w-6 h-6 text-white" data-lucide="brain"></i>
</div>
<h4 className="font-semibold text-slate-900 mb-2">Smart Recommendations</h4>
<p className="text-slate-700 text-sm">AI-powered suggestions based on time of day, mood check-ins, and usage patterns</p>
</div>
<div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6">
<div className="w-12 h-12 rounded-lg bg-purple-500 flex items-center justify-center mb-4">
<i className="w-6 h-6 text-white" data-lucide="clock"></i>
</div>
<h4 className="font-semibold text-slate-900 mb-2">Flexible Sessions</h4>
<p className="text-slate-700 text-sm">Sessions adapt to available time, from 3-minute breathing exercises to 30-minute deep meditations</p>
</div>
<div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6">
<div className="w-12 h-12 rounded-lg bg-green-500 flex items-center justify-center mb-4">
<i className="w-6 h-6 text-white" data-lucide="trending-up"></i>
</div>
<h4 className="font-semibold text-slate-900 mb-2">Progress Insights</h4>
<p className="text-slate-700 text-sm">Meaningful metrics that celebrate consistency without creating pressure</p>
</div>
</div>
</div>

<div>
<h3 className="text-xl font-semibold text-slate-900 mb-6">Design System</h3>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="bg-white rounded-xl border border-slate-200 p-4">
<h4 className="font-medium text-slate-900 mb-3">Colors</h4>
<div className="space-y-2">
<div className="flex items-center gap-2">
<div className="w-4 h-4 rounded-full bg-blue-500"></div>
<span className="text-sm text-slate-600">Primary Blue</span>
</div>
<div className="flex items-center gap-2">
<div className="w-4 h-4 rounded-full bg-purple-500"></div>
<span className="text-sm text-slate-600">Secondary Purple</span>
</div>
<div className="flex items-center gap-2">
<div className="w-4 h-4 rounded-full bg-slate-900"></div>
<span className="text-sm text-slate-600">Text Dark</span>
</div>
</div>
</div>
<div className="bg-white rounded-xl border border-slate-200 p-4">
<h4 className="font-medium text-slate-900 mb-3">Typography</h4>
<div className="space-y-1">
<p className="text-lg font-bold text-slate-900">Heading Bold</p>
<p className="text-base font-medium text-slate-900">Body Medium</p>
<p className="text-sm text-slate-600">Caption Regular</p>
</div>
</div>
<div className="bg-white rounded-xl border border-slate-200 p-4">
<h4 className="font-medium text-slate-900 mb-3">Icons</h4>
<div className="grid grid-cols-3 gap-2">
<div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center">
<i className="w-4 h-4 text-slate-600" data-lucide="play"></i>
</div>
<div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center">
<i className="w-4 h-4 text-slate-600" data-lucide="heart"></i>
</div>
<div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center">
<i className="w-4 h-4 text-slate-600" data-lucide="moon"></i>
</div>
</div>
</div>
<div className="bg-white rounded-xl border border-slate-200 p-4">
<h4 className="font-medium text-slate-900 mb-3">Components</h4>
<div className="space-y-2">
<button className="w-full py-2 px-3 bg-blue-500 text-white rounded-lg text-sm">Primary Button</button>
<div className="w-full py-2 px-3 border border-slate-300 rounded-lg text-sm text-center">Card Component</div>
</div>
</div>
</div>
</div>
</section>

<section id="prototype">
<h2 className="text-3xl font-bold text-slate-900 mb-8">Mobile Prototype</h2>
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div>
<h3 className="text-xl font-semibold text-slate-900 mb-4">Interactive Experience</h3>
<p className="text-slate-700 mb-6">
              The prototype demonstrates the core user journey from onboarding through completing a meditation session, showcasing the personalized recommendations and adaptive interface.
            </p>
<div className="space-y-4 mb-6">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
<span className="text-blue-600 font-bold text-sm">1</span>
</div>
<p className="text-slate-700">Personalized onboarding to understand user goals and preferences</p>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
<span className="text-purple-600 font-bold text-sm">2</span>
</div>
<p className="text-slate-700">Smart home screen with contextual meditation recommendations</p>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
<span className="text-green-600 font-bold text-sm">3</span>
</div>
<p className="text-slate-700">Immersive session player with progress tracking and insights</p>
</div>
</div>
<button className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition shadow-lg">
<i className="w-5 h-5" data-lucide="external-link"></i>
              Open Figma Prototype
            </button>
</div>

<div className="relative">
<div className="flex gap-4 justify-center">

<div className="bg-slate-900 rounded-[2rem] p-2 shadow-2xl transform -rotate-3">
<div className="bg-white rounded-[1.5rem] w-64 h-[28rem] p-4 flex flex-col">
<div className="text-center mb-6">
<h4 className="font-bold text-slate-900 text-lg mb-2">Welcome to Zenflow</h4>
<p className="text-sm text-slate-600">Let's personalize your experience</p>
</div>
<div className="space-y-3 mb-6">
<div className="p-3 rounded-xl border-2 border-blue-500 bg-blue-50">
<p className="font-medium text-slate-900 text-sm">🧘‍♀️ New to meditation</p>
</div>
<div className="p-3 rounded-xl border border-slate-200">
<p className="font-medium text-slate-900 text-sm">🧠 Some experience</p>
</div>
<div className="p-3 rounded-xl border border-slate-200">
<p className="font-medium text-slate-900 text-sm">🧘‍♂️ Regular practice</p>
</div>
</div>
<div className="mt-auto">
<button className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-medium">
                      Continue
                    </button>
</div>
</div>
</div>

<div className="bg-slate-900 rounded-[2rem] p-2 shadow-2xl transform rotate-2 z-10">
<div className="bg-white rounded-[1.5rem] w-64 h-[28rem] p-4 flex flex-col">
<div className="flex items-center justify-between mb-6">
<span className="font-semibold text-slate-900">Good evening, Sarah</span>
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600"></div>
</div>
<div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-4 mb-6">
<h3 className="font-semibold text-slate-900 mb-2">Wind down session</h3>
<p className="text-sm text-slate-600 mb-4">Perfect for bedtime • 12 min</p>
<div className="flex items-center justify-center">
<div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
<i className="w-6 h-6 text-white" data-lucide="play"></i>
</div>
</div>
</div>
<div className="space-y-3">
<h4 className="font-medium text-slate-900">Continue listening</h4>
<div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50">
<div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
<i className="w-5 h-5 text-green-600" data-lucide="headphones"></i>
</div>
<div classname="flex-1">
<p className="font-medium text-slate-900 text-sm">Deep Focus</p>
<p className="text-xs text-slate-500">8 min left</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section id="results">
<h2 className="text-3xl font-bold text-slate-900 mb-8">Results &amp; Impact</h2>
<div className="grid lg:grid-cols-4 gap-6 mb-12">
<div className="bg-white rounded-2xl border border-slate-200 p-6 text-center">
<div className="text-3xl font-bold text-blue-600 mb-2">47%</div>
<p className="text-slate-600 text-sm">Increase in 30-day retention</p>
</div>
<div className="bg-white rounded-2xl border border-slate-200 p-6 text-center">
<div className="text-3xl font-bold text-purple-600 mb-2">3.2x</div>
<p className="text-slate-600 text-sm">More sessions per user</p>
</div>
<div className="bg-white rounded-2xl border border-slate-200 p-6 text-center">
<div className="text-3xl font-bold text-green-600 mb-2">4.7</div>
<p className="text-slate-600 text-sm">App Store rating</p>
</div>
<div className="bg-white rounded-2xl border border-slate-200 p-6 text-center">
<div className="text-3xl font-bold text-orange-600 mb-2">89%</div>
<p className="text-slate-600 text-sm">Complete onboarding</p>
</div>
</div>
<div className="grid md:grid-cols-2 gap-8 mb-8">
<div className="bg-white rounded-2xl border border-slate-200 p-6">
<h3 className="font-semibold text-slate-900 mb-4">User Feedback</h3>
<div className="space-y-4">
<div className="p-4 bg-blue-50 rounded-xl">
<p className="text-slate-700 text-sm italic mb-2">"Finally, an app that actually understands what I need when I need it."</p>
<p className="text-xs text-slate-500">— Sarah, Beta User</p>
</div>
<div className="p-4 bg-purple-50 rounded-xl">
<p className="text-slate-700 text-sm italic mb-2">"The recommendations are so accurate, it's like having a personal meditation coach."</p>
<p className="text-xs text-slate-500">— Mike, Daily User</p>
</div>
</div>
</div>
<div className="bg-white rounded-2xl border border-slate-200 p-6">
<h3 className="font-semibold text-slate-900 mb-4">Key Learnings</h3>
<ul className="space-y-3 text-sm">
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" data-lucide="lightbulb"></i>
<span className="text-slate-700">Personalization needs to feel magical, not algorithmic</span>
</li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" data-lucide="lightbulb"></i>
<span className="text-slate-700">Progress tracking should motivate, not pressure</span>
</li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" data-lucide="lightbulb"></i>
<span className="text-slate-700">Context matters more than content quantity</span>
</li>
</ul>
</div>
</div>

<div className="bg-white rounded-2xl border border-slate-200 p-6">
<h3 className="font-semibold text-slate-900 mb-4">30-Day Retention Comparison</h3>
<div className="h-64 relative mb-4">
<canvas id="retentionChart"></canvas>
</div>
<p className="text-sm text-slate-500">Comparing Zenflow beta with industry averages for meditation apps</p>
</div>
</section>

<section>
<div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
<h2 className="text-2xl font-bold text-slate-900 mb-4">What's Next?</h2>
<div className="grid md:grid-cols-3 gap-6">
<div className="bg-white rounded-xl p-4">
<div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mb-3">
<i className="w-5 h-5 text-blue-600" data-lucide="users"></i>
</div>
<h3 className="font-medium text-slate-900 mb-2">Social Features</h3>
<p className="text-slate-600 text-sm">Group meditations and progress sharing with friends</p>
</div>
<div className="bg-white rounded-xl p-4">
<div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center mb-3">
<i className="w-5 h-5 text-purple-600" data-lucide="watch"></i>
</div>
<h3 className="font-medium text-slate-900 mb-2">Wearable Integration</h3>
<p className="text-slate-600 text-sm">Apple Watch app for quick sessions and biometric feedback</p>
</div>
<div className="bg-white rounded-xl p-4">
<div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center mb-3">
<i className="w-5 h-5 text-green-600" data-lucide="globe"></i>
</div>
<h3 className="font-medium text-slate-900 mb-2">Global Expansion</h3>
<p className="text-slate-600 text-sm">Localized content and culturally adapted meditation practices</p>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-slate-200 bg-white">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
<div className="text-center">
<div className="flex items-center justify-center gap-3 mb-4">
<div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
<span className="text-white text-sm font-semibold">Z</span>
</div>
<span className="font-semibold text-slate-900">Zenflow Case Study</span>
</div>
<p className="text-slate-600 mb-6">Thank you for reading! I'd love to discuss this project in more detail.</p>
<div className="flex items-center justify-center gap-4">
<button className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 px-4 py-2 rounded-lg hover:bg-slate-100 transition">
<i className="w-4 h-4" data-lucide="mail"></i>
              Email Me
            </button>
<button className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 px-4 py-2 rounded-lg hover:bg-slate-100 transition">
<i className="w-4 h-4" data-lucide="linkedin"></i>
              LinkedIn
            </button>
<button className="inline-flex items-center gap-2 text-white px-6 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition shadow-sm">
<i className="w-4 h-4" data-lucide="download"></i>
              Download PDF
            </button>
</div>
</div>
</div>
</footer>


    </>
  );
}
