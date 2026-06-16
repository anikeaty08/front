import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


      window.addEventListener('DOMContentLoaded', function () {
        if (window.lucide) {
          window.lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }
        const yearEl = document.getElementById('year');
        if (yearEl) {
          yearEl.textContent = new Date().getFullYear();
        }

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.remove('opacity-0', 'translate-y-4');
                observer.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.15 }
        );

        document.querySelectorAll('[data-fade]').forEach((el) => observer.observe(el));
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="X0ErZR3QhPzMHfKgBbJJ"></div>

<div className="pointer-events-none absolute inset-0">

<div className="absolute -top-10 -left-16 h-52 w-52 sm:h-64 sm:w-64 rounded-3xl border border-slate-700/40 bg-slate-900/60 shadow-2xl shadow-emerald-500/10 blur-[0.25rem] rotate-[-8deg]"></div>

<div className="absolute -top-8 right-6 h-40 w-40 sm:h-48 sm:w-48 rounded-full bg-gradient-to-br from-slate-800/40 via-slate-900/40 to-emerald-500/15 blur-[0.35rem] border border-slate-700/30"></div>

<div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-40 sm:h-48 w-[70%] sm:w-[60%] bg-gradient-to-r from-emerald-500/5 via-slate-100/5 to-sky-500/5 blur-[1.75rem] rounded-[9999px]"></div>

<div className="absolute bottom-10 -left-10 h-40 w-60 sm:h-44 sm:w-72 rounded-3xl border border-slate-800/60 bg-slate-900/70 blur-[0.1rem] rotate-3"></div>

<div className="absolute bottom-0 right-0 h-48 w-64 sm:h-56 sm:w-80 opacity-25">
<div className="w-full h-full bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.35)_0,_transparent_55%)]"></div>
</div>
</div>

</div>

<div className="flex-1 flex flex-col">

<header className="border-b border-slate-800/60 backdrop-blur-sm bg-slate-950/80">
<div className="max-w-5xl mx-auto flex items-center justify-between gap-4 py-4 px-4 sm:px-6 lg:px-8">

<a className="flex items-center gap-2 group" href="#hero">
<div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-semibold tracking-tight text-slate-950 transition-transform duration-300 group-hover:scale-105">
              F
            </div>
<span className="text-sm sm:text-base font-semibold tracking-tight text-slate-100 group-hover:text-slate-50 transition-colors">
              fahad.dev
            </span>
</a>

<nav className="hidden sm:flex items-center gap-5 text-xs sm:text-sm text-slate-300">
<a className="hover:text-slate-50 transition-colors" href="#projects">Projects</a>
<a className="hover:text-slate-50 transition-colors" href="#experience">Experience</a>
<a className="hover:text-slate-50 transition-colors" href="#skills">Skills</a>
<a className="hover:text-slate-50 transition-colors" href="#contact">Contact</a>
</nav>

<a className="inline-flex items-center gap-2 rounded-full border border-slate-700 text-xs sm:text-sm font-medium tracking-tight px-4 py-1.5 text-slate-100 hover:bg-slate-100 hover:text-slate-950 transition-colors duration-300" href="#contact">
<span>Available</span>
<span className="inline-flex h-5 w-5 rounded-full bg-slate-900 items-center justify-center">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
</span>
</a>
</div>
</header>

<main className="flex-1">

<section className="border-b border-slate-800/60 bg-slate-950" id="hero">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20 grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2.2fr)] items-center">

<div className="space-y-6 transform opacity-0 translate-y-4 transition-all duration-700 ease-out will-change-transform" data-fade="">
<div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
<span className="text-xs sm:text-sm text-slate-300">
                  Flutter Developer · 2 years experience
                </span>
</div>
<div className="space-y-3">
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-50">
                  Flutter engineer focused on reliable mobile products.
                </h1>
<p className="text-base sm:text-lg text-slate-300 max-w-xl">
                  I design and build Flutter applications with clean architecture, measured performance, and a calm, predictable user experience.
                </p>
</div>
<div className="flex flex-wrap items-center gap-3">
<a className="inline-flex items-center justify-center rounded-full bg-slate-100 text-slate-950 text-sm sm:text-base font-medium tracking-tight px-4 sm:px-5 py-2 sm:py-2.5 hover:bg-slate-200 transition-colors duration-300" href="#projects">
                  View work
                </a>
<a className="inline-flex items-center gap-2 rounded-full border border-slate-700 text-slate-100 text-sm sm:text-base font-medium tracking-tight px-4 sm:px-5 py-2 sm:py-2.5 hover:border-slate-400 transition-colors duration-300" href="#contact">
<span>Schedule a call</span>
</a>
</div>

<div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
<div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 transition-transform duration-300 hover:-translate-y-0.5">
<p className="text-xs sm:text-sm text-slate-400">Experience</p>
<p className="mt-1 text-lg sm:text-xl font-semibold tracking-tight text-slate-50">
                    2 yrs
                  </p>
<p className="text-xs sm:text-sm text-slate-400 mt-1">
                    End-to-end Flutter app delivery
                  </p>
</div>
<div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 transition-transform duration-300 hover:-translate-y-0.5">
<p className="text-xs sm:text-sm text-slate-400">Projects</p>
<p className="mt-1 text-lg sm:text-xl font-semibold tracking-tight text-slate-50">
                    6+
                  </p>
<p className="text-xs sm:text-sm text-slate-400 mt-1">
                    Client &amp; personal products
                  </p>
</div>
<div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 sm:col-span-1 col-span-2 transition-transform duration-300 hover:-translate-y-0.5">
<p className="text-xs sm:text-sm text-slate-400">Focus</p>
<p className="mt-1 text-lg sm:text-xl font-semibold tracking-tight text-slate-50">
                    Mobile · Architecture
                  </p>
<p className="text-xs sm:text-sm text-slate-400 mt-1">
                    Flutter, Dart, Firebase, REST
                  </p>
</div>
</div>
</div>

<div className="space-y-4 lg:space-y-6 transform opacity-0 translate-y-4 transition-all duration-700 delay-150 ease-out will-change-transform" data-fade="">
<div className="relative">
<div className="absolute -inset-0.5 bg-slate-100/5 opacity-60 blur-2xl"></div>
<div className="relative rounded-2xl border border-slate-800 bg-slate-900/80 p-5 sm:p-6">
<div className="flex items-center gap-4">
<div className="h-16 w-16 sm:h-20 sm:w-20 rounded-2xl bg-slate-100 flex items-center justify-center text-xl sm:text-2xl font-semibold tracking-tight text-slate-950">
                      F
                    </div>
<div className="space-y-1">
<p className="text-base sm:text-lg font-semibold tracking-tight text-slate-50">
                        Fahad
                      </p>
<p className="text-sm sm:text-base text-slate-300">
                        Flutter Developer
                      </p>
<p className="text-xs sm:text-sm text-slate-400">
                        Remote · Open to freelance and full-time roles
                      </p>
</div>
</div>

<div className="mt-5 flex flex-wrap gap-2">
<span className="inline-flex items-center gap-1 rounded-full bg-slate-800/80 text-xs sm:text-sm text-slate-100 px-3 py-1">
<i className="h-3.5 w-3.5" data-lucide="smartphone"></i>
<span>Flutter</span>
</span>
<span className="inline-flex items-center gap-1 rounded-full bg-slate-800/80 text-xs sm:text-sm text-slate-100 px-3 py-1">
<i className="h-3.5 w-3.5" data-lucide="code-2"></i>
<span>Dart</span>
</span>
<span className="inline-flex items-center gap-1 rounded-full bg-slate-800/80 text-xs sm:text-sm text-slate-100 px-3 py-1">
<i className="h-3.5 w-3.5" data-lucide="cloud"></i>
<span>Firebase</span>
</span>
<span className="inline-flex items-center gap-1 rounded-full bg-slate-800/80 text-xs sm:text-sm text-slate-100 px-3 py-1">
<i className="h-3.5 w-3.5" data-lucide="git-branch"></i>
<span>Clean architecture</span>
</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 transition-transform duration-300 hover:-translate-y-0.5">
<div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
<i className="h-4 w-4" data-lucide="sparkles"></i>
<span>Capabilities</span>
</div>
<p className="mt-2 text-sm sm:text-base text-slate-300">
                    Cross-platform apps with measured animations, consistent design systems, and robust state management.
                  </p>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 transition-transform duration-300 hover:-translate-y-0.5">
<div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
<i className="h-4 w-4" data-lucide="gauge"></i>
<span>Approach</span>
</div>
<p className="mt-2 text-sm sm:text-base text-slate-300">
                    Formal, communication-first process with clear milestones, code reviews, and long-term maintainability in mind.
                  </p>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-800/60 bg-slate-950" id="projects">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
<div className="transform opacity-0 translate-y-4 transition-all duration-700 ease-out will-change-transform" data-fade="">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">
                  Projects
                </h2>
<p className="mt-2 text-base sm:text-lg text-slate-300 max-w-xl">
                  A concise selection of work. Each project has its own page with more details about scope, decisions, and results.
                </p>
</div>
<div className="flex gap-3 text-xs sm:text-sm text-slate-400 transform opacity-0 translate-y-4 transition-all duration-700 delay-100 ease-out will-change-transform" data-fade="">
<a className="inline-flex items-center gap-1 hover:text-slate-100 transition-colors" href="#projects-details">
<span>View project details</span>
<i className="h-3.5 w-3.5" data-lucide="arrow-up-right"></i>
</a>
</div>
</div>
<div className="grid gap-5 lg:grid-cols-3">

<article className="group rounded-2xl border border-slate-800 bg-slate-900/70 transition-all duration-300 hover:-translate-y-1 hover:border-slate-400/80 flex flex-col">
<div className="p-5 sm:p-6 flex-1 flex flex-col">
<div className="flex items-center justify-between gap-3">
<span className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 text-[0.7rem] sm:text-xs text-slate-200 px-2.5 py-1">
<span className="h-1.5 w-1.5 rounded-full bg-slate-100"></span>
<span>Production</span>
</span>
<span className="text-[0.7rem] sm:text-xs text-slate-400">
                      Flutter · Firebase
                    </span>
</div>
<h3 className="mt-3 text-lg sm:text-xl font-semibold tracking-tight text-slate-50 group-hover:text-slate-100">
                    HabitFlow
                  </h3>
<p className="mt-2 text-sm sm:text-base text-slate-300 flex-1">
                    A focused productivity and habit-tracking app with offline support and clear, distraction-free UI.
                  </p>
</div>
<div className="border-t border-slate-800/80 px-5 sm:px-6 py-3 flex items-center justify-between">
<div className="flex flex-wrap gap-2">
<span className="text-[0.7rem] sm:text-xs text-slate-300">Flutter</span>
<span className="text-[0.7rem] sm:text-xs text-slate-300">Riverpod</span>
<span className="text-[0.7rem] sm:text-xs text-slate-300">Firebase</span>
</div>
<a className="inline-flex items-center gap-1 text-[0.7rem] sm:text-xs text-slate-200 hover:text-slate-50 transition-colors" href="#projects-habitflow">
<span>Open page</span>
<i className="h-3.5 w-3.5" data-lucide="arrow-right"></i>
</a>
</div>
</article>

<article className="group rounded-2xl border border-slate-800 bg-slate-900/70 transition-all duration-300 hover:-translate-y-1 hover:border-slate-400/80 flex flex-col">
<div className="p-5 sm:p-6 flex-1 flex flex-col">
<div className="flex items-center justify-between gap-3">
<span className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 text-[0.7rem] sm:text-xs text-slate-200 px-2.5 py-1">
<span className="h-1.5 w-1.5 rounded-full bg-slate-100"></span>
<span>Production</span>
</span>
<span className="text-[0.7rem] sm:text-xs text-slate-400">
                      Flutter · REST
                    </span>
</div>
<h3 className="mt-3 text-lg sm:text-xl font-semibold tracking-tight text-slate-50 group-hover:text-slate-100">
                    FoodieNow
                  </h3>
<p className="mt-2 text-sm sm:text-base text-slate-300 flex-1">
                    Restaurant ordering experience with a clear browsing flow, stable checkout, and structured error handling.
                  </p>
</div>
<div className="border-t border-slate-800/80 px-5 sm:px-6 py-3 flex items-center justify-between">
<div className="flex flex-wrap gap-2">
<span className="text-[0.7rem] sm:text-xs text-slate-300">Flutter</span>
<span className="text-[0.7rem] sm:text-xs text-slate-300">Bloc</span>
<span className="text-[0.7rem] sm:text-xs text-slate-300">REST</span>
</div>
<a className="inline-flex items-center gap-1 text-[0.7rem] sm:text-xs text-slate-200 hover:text-slate-50 transition-colors" href="#projects-foodienow">
<span>Open page</span>
<i className="h-3.5 w-3.5" data-lucide="arrow-right"></i>
</a>
</div>
</article>

<article className="group rounded-2xl border border-slate-800 bg-slate-900/70 transition-all duration-300 hover:-translate-y-1 hover:border-slate-400/80 flex flex-col">
<div className="p-5 sm:p-6 flex-1 flex flex-col">
<div className="flex items-center justify-between gap-3">
<span className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 text-[0.7rem] sm:text-xs text-slate-200 px-2.5 py-1">
<span className="h-1.5 w-1.5 rounded-full bg-slate-500"></span>
<span>Concept</span>
</span>
<span className="text-[0.7rem] sm:text-xs text-slate-400">
                      Flutter · UI
                    </span>
</div>
<h3 className="mt-3 text-lg sm:text-xl font-semibold tracking-tight text-slate-50 group-hover:text-slate-100">
                    FinTrack
                  </h3>
<p className="mt-2 text-sm sm:text-base text-slate-300 flex-1">
                    Finance dashboard concept exploring structured layouts, typography, and controlled motion.
                  </p>
</div>
<div className="border-t border-slate-800/80 px-5 sm:px-6 py-3 flex items-center justify-between">
<div className="flex flex-wrap gap-2">
<span className="text-[0.7rem] sm:text-xs text-slate-300">Flutter</span>
<span className="text-[0.7rem] sm:text-xs text-slate-300">Animations</span>
<span className="text-[0.7rem] sm:text-xs text-slate-300">UI</span>
</div>
<a className="inline-flex items-center gap-1 text-[0.7rem] sm:text-xs text-slate-200 hover:text-slate-50 transition-colors" href="#projects-fintrack">
<span>Open page</span>
<i className="h-3.5 w-3.5" data-lucide="arrow-right"></i>
</a>
</div>
</article>
</div>
</div>
</section>

<section className="border-b border-slate-800/60 bg-slate-950" id="projects-details">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16 space-y-10">

<article className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 sm:p-8 space-y-4" id="projects-habitflow">
<div className="flex items-center justify-between gap-4">
<div>
<p className="text-xs sm:text-sm text-slate-400">Project</p>
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-50">
                    HabitFlow — Productivity &amp; Habit Tracker
                  </h3>
</div>
<span className="text-xs sm:text-sm text-slate-400">Production</span>
</div>
<p className="text-sm sm:text-base text-slate-300 max-w-3xl">
                HabitFlow is a focused habit-tracking application designed to reduce friction: quick entry, clear feedback, and stable offline behavior. The objective was to maintain a calm interface while still providing meaningful metrics.
              </p>
<div className="grid gap-4 sm:grid-cols-3 text-xs sm:text-sm text-slate-300">
<div>
<p className="text-slate-400 mb-1">Role</p>
<p>Flutter development, architecture, performance optimization.</p>
</div>
<div>
<p className="text-slate-400 mb-1">Highlights</p>
<ul className="space-y-1">
<li>• Offline-first with Firestore sync.</li>
<li>• Riverpod-based state management.</li>
<li>• Lightweight charts and streaks overview.</li>
</ul>
</div>
<div>
<p className="text-slate-400 mb-1">Stack</p>
<p>Flutter, Dart, Riverpod, Firebase Auth, Firestore.</p>
</div>
</div>
</article>

<article className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 sm:p-8 space-y-4" id="projects-foodienow">
<div className="flex items-center justify-between gap-4">
<div>
<p className="text-xs sm:text-sm text-slate-400">Project</p>
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-50">
                    FoodieNow — Restaurant Ordering App
                  </h3>
</div>
<span className="text-xs sm:text-sm text-slate-400">Production</span>
</div>
<p className="text-sm sm:text-base text-slate-300 max-w-3xl">
                FoodieNow supports the complete ordering flow for a restaurant chain. The emphasis was on clarity: predictable navigation, consistent empty states, and informative error feedback.
              </p>
<div className="grid gap-4 sm:grid-cols-3 text-xs sm:text-sm text-slate-300">
<div>
<p className="text-slate-400 mb-1">Role</p>
<p>Feature implementation, API integration, state management.</p>
</div>
<div>
<p className="text-slate-400 mb-1">Highlights</p>
<ul className="space-y-1">
<li>• Structured cart and checkout flows.</li>
<li>• Consistent loading and error states.</li>
<li>• Configurable architecture for multiple brands.</li>
</ul>
</div>
<div>
<p className="text-slate-400 mb-1">Stack</p>
<p>Flutter, Dart, Bloc, REST APIs.</p>
</div>
</div>
</article>

<article className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 sm:p-8 space-y-4" id="projects-fintrack">
<div className="flex items-center justify-between gap-4">
<div>
<p className="text-xs sm:text-sm text-slate-400">Project</p>
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-50">
                    FinTrack — Personal Finance Dashboard (Concept)
                  </h3>
</div>
<span className="text-xs sm:text-sm text-slate-400">Concept</span>
</div>
<p className="text-sm sm:text-base text-slate-300 max-w-3xl">
                FinTrack is a concept exploring typography, layout density, and gentle motion. The goal was to design a finance interface that feels calm, not overwhelming.
              </p>
<div className="grid gap-4 sm:grid-cols-3 text-xs sm:text-sm text-slate-300">
<div>
<p className="text-slate-400 mb-1">Role</p>
<p>UI exploration, animation prototypes, layout design.</p>
</div>
<div>
<p className="text-slate-400 mb-1">Highlights</p>
<ul className="space-y-1">
<li>• Adaptive layouts for phone and tablet.</li>
<li>• Tactful, slow animations and transitions.</li>
<li>• Modular chart components.</li>
</ul>
</div>
<div>
<p className="text-slate-400 mb-1">Stack</p>
<p>Flutter, CustomPainter, AnimationController.</p>
</div>
</div>
</article>
</div>
</section>

<section className="border-b border-slate-800/60 bg-slate-950" id="experience">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16 grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,2fr)]">

<div className="space-y-6 transform opacity-0 translate-y-4 transition-all duration-700 ease-out will-change-transform" data-fade="">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">
                  Experience
                </h2>
<p className="mt-2 text-base sm:text-lg text-slate-300">
                  Professional and self-directed work focused on Flutter application development.
                </p>
</div>
<div className="space-y-4">

<div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 sm:p-6 transition-transform duration-300 hover:-translate-y-0.5">
<div className="flex items-start justify-between gap-3">
<div>
<p className="text-base sm:text-lg font-semibold tracking-tight text-slate-50">
                        Flutter Developer
                      </p>
<p className="text-sm sm:text-base text-slate-300">
                        Freelance &amp; Agency Collaborations
                      </p>
</div>
<div className="text-right">
<p className="text-xs sm:text-sm text-slate-400">2022 — Present</p>
<p className="text-xs sm:text-sm text-slate-400">Remote</p>
</div>
</div>
<ul className="mt-3 space-y-1.5 text-sm sm:text-base text-slate-300">
<li>• Delivered Flutter applications for productivity and commerce.</li>
<li>• Implemented layered architecture and state management solutions.</li>
<li>• Collaborated with designers and backend teams in structured sprints.</li>
</ul>
</div>

<div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 sm:p-6 transition-transform duration-300 hover:-translate-y-0.5">
<div className="flex items-start justify-between gap-3">
<div>
<p className="text-base sm:text-lg font-semibold tracking-tight text-slate-50">
                        Flutter Intern / Trainee
                      </p>
<p className="text-sm sm:text-base text-slate-300">
                        Training &amp; Personal Projects
                      </p>
</div>
<div className="text-right">
<p className="text-xs sm:text-sm text-slate-400">2021 — 2022</p>
<p className="text-xs sm:text-sm text-slate-400">Remote</p>
</div>
</div>
<ul className="mt-3 space-y-1.5 text-sm sm:text-base text-slate-300">
<li>• Built foundations in Dart, Flutter widgets, and layout systems.</li>
<li>• Prototyped small apps covering auth, networking, and persistence.</li>
<li>• Engaged with documentation, examples, and open-source packages.</li>
</ul>
</div>
</div>
<a className="inline-flex items-center gap-1 text-xs sm:text-sm text-slate300 hover:text-slate-100 transition-colors" href="#experience-details">
<span>View experience details</span>
<i className="h-3.5 w-3.5" data-lucide="arrow-up-right"></i>
</a>
</div>

<div className="space-y-6 transform opacity-0 translate-y-4 transition-all duration-700 delay-100 ease-out will-change-transform" data-fade="" id="skills">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">
                  Skills
                </h2>
<p className="mt-2 text-base sm:text-lg text-slate-300">
                  A focused toolkit for building, shipping, and maintaining Flutter applications.
                </p>
</div>
<div className="space-y-4">

<div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 sm:p-6">
<div className="flex items-center justify-between gap-2">
<div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
<i className="h-4 w-4" data-lucide="layers"></i>
<span>Core</span>
</div>
<span className="text-xs sm:text-sm text-slate-400">Primary tools</span>
</div>
<div className="mt-3 flex flex-wrap gap-2">
<span className="inline-flex items-center rounded-full bg-slate-800/80 text-xs sm:text-sm text-slate-100 px-3 py-1">
                      Flutter
                    </span>
<span className="inline-flex items-center rounded-full bg-slate-800/80 text-xs sm:text-sm text-slate-100 px-3 py-1">
                      Dart
                    </span>
<span className="inline-flex items-center rounded-full bg-slate-800/80 text-xs sm:text-sm text-slate-100 px-3 py-1">
                      Provider, Riverpod, Bloc
                    </span>
<span className="inline-flex items-center rounded-full bg-slate-800/80 text-xs sm:text-sm text-slate-100 px-3 py-1">
                      REST APIs · JSON
                    </span>
<span className="inline-flex items-center rounded-full bg-slate-800/80 text-xs sm:text-sm text-slate-100 px-3 py-1">
                      Firebase (Auth, Firestore, Storage)
                    </span>
</div>
</div>

<div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 sm:p-6">
<div className="flex items-center justify-between gap-2">
<div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
<i className="h-4 w-4" data-lucide="wrench"></i>
<span>Engineering</span>
</div>
<span className="text-xs sm:text-sm text-slate-400">Practices</span>
</div>
<div className="mt-3 flex flex-wrap gap-2">
<span className="inline-flex items-center rounded-full bg-slate-800/80 text-xs sm:text-sm text-slate-100 px-3 py-1">
                      Clean architecture
                    </span>
<span className="inline-flex items-center rounded-full bg-slate-800/80 text-xs sm:text-sm text-slate-100 px-3 py-1">
                      MVVM / layered structure
                    </span>
<span className="inline-flex items-center rounded-full bg-slate-800/80 text-xs sm:text-sm text-slate-100 px-3 py-1">
                      Git, branching, code review
                    </span>
<span className="inline-flex items-center rounded-full bg-slate-800/80 text-xs sm:text-sm text-slate-100 px-3 py-1">
                      Unit &amp; widget tests
                    </span>
<span className="inline-flex items-center rounded-full bg-slate-800/80 text-xs sm:text-sm text-slate-100 px-3 py-1">
                      Performance profiling
                    </span>
</div>
</div>

<div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 sm:p-6">
<div className="flex items-center justify-between gap-2">
<div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
<i className="h-4 w-4" data-lucide="palette"></i>
<span>UI &amp; UX</span>
</div>
<span className="text-xs sm:text-sm text-slate-400">Product thinking</span>
</div>
<div className="mt-3 flex flex-wrap gap-2">
<span className="inline-flex items-center rounded-full bg-slate-800/80 text-xs sm:text-sm text-slate-100 px-3 py-1">
                      Responsive layouts
                    </span>
<span className="inline-flex items-center rounded-full bg-slate-800/80 text-xs sm:text-sm text-slate-100 px-3 py-1">
                      Subtle animations
                    </span>
<span className="inline-flex items-center rounded-full bg-slate-800/80 text-xs sm:text-sm text-slate-100 px-3 py-1">
                      Design handoff from Figma
                    </span>
<span className="inline-flex items-center rounded-full bg-slate-800/80 text-xs sm:text-sm text-slate-100 px-3 py-1">
                      Accessibility basics
                    </span>
</div>
</div>
</div>
<a className="inline-flex items-center gap-1 text-xs sm:text-sm text-slate-300 hover:text-slate-100 transition-colors" href="#skills-details">
<span>View skills details</span>
<i className="h-3.5 w-3.5" data-lucide="arrow-up-right"></i>
</a>
</div>
</div>
</section>

<section className="border-b border-slate-800/60 bg-slate-950" id="experience-details">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16 space-y-8">
<header className="space-y-2">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">
                Experience — details
              </h2>
<p className="text-base sm:text-lg text-slate-300 max-w-3xl">
                Additional structure around how I work, collaborate, and deliver features in real projects.
              </p>
</header>
<div className="grid gap-6 sm:grid-cols-3 text-xs sm:text-sm text-slate-300">
<div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
<p className="text-slate-400 mb-1">Process</p>
<ul className="space-y-1">
<li>• Requirements clarification and scope definition.</li>
<li>• Wireframes or low-fidelity flows when needed.</li>
<li>• Iterative delivery with short feedback loops.</li>
</ul>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
<p className="text-slate-400 mb-1">Collaboration</p>
<ul className="space-y-1">
<li>• Async communication with structured updates.</li>
<li>• Version control with feature branches.</li>
<li>• Code reviews and documented decisions.</li>
</ul>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
<p className="text-slate-400 mb-1">Quality</p>
<ul className="space-y-1">
<li>• Automated checks where practical.</li>
<li>• Focus on error handling and empty states.</li>
<li>• Regular refactors for clarity and maintainability.</li>
</ul>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-800/60 bg-slate-950" id="skills-details">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16 space-y-8">
<header className="space-y-2">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">
                Skills — details
              </h2>
<p className="text-base sm:text-lg text-slate-300 max-w-3xl">
                A clearer view of how the tools and practices fit together when building real products.
              </p>
</header>
<div className="grid gap-6 sm:grid-cols-2 text-xs sm:text-sm text-slate-300">
<div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
<p className="text-slate-400 mb-1">Architecture</p>
<ul className="space-y-1">
<li>• Feature-first or domain-driven folder structure.</li>
<li>• Clear separation between presentation, domain, and data layers.</li>
<li>• Reusable widgets and components with limited responsibilities.</li>
</ul>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
<p className="text-slate-400 mb-1">UX &amp; Interaction</p>
<ul className="space-y-1">
<li>• Motion used sparingly to support understanding, not distract.</li>
<li>• Thoughtful empty states and loading skeletons.</li>
<li>• Consistent spacing, hierarchy, and color usage.</li>
</ul>
</div>
</div>
</div>
</section>

<section className="bg-slate-950" id="contact">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
<div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-6 sm:p-8 lg:p-10 grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1.6fr)] items-center">

<div className="space-y-4">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">
                  Contact
                </h2>
<p className="text-base sm:text-lg text-slate-300">
                  For project discussions, availability, or further details on the work above, please reach out.
                </p>
<div className="space-y-1 text-sm sm:text-base text-slate-300">
<p className="flex items-center gap-2">
<i className="h-4 w-4 text-slate-200" data-lucide="mail"></i>
<span>
                      Email:
                      <span className="text-slate-100">your-email@example.com</span>
</span>
</p>
<p className="flex items-center gap-2">
<i className="h-4 w-4 text-slate-200" data-lucide="github"></i>
<span>GitHub: <span className="text-slate-100">github.com/your-github</span></span>
</p>
<p className="flex items-center gap-2">
<i className="h-4 w-4 text-slate-200" data-lucide="linkedin"></i>
<span>LinkedIn: <span className="text-slate-100">linkedin.com/in/your-profile</span></span>
</p>
</div>
</div>

<form className="space-y-4 rounded-2xl border border-slate-800 bg-slate-950/80 p-5 sm:p-6">
<div className="grid gap-4 sm:grid-cols-2">
<div className="space-y-1.5">
<label className="block text-xs sm:text-sm font-medium tracking-tight text-slate-200" htmlFor="name">Name</label>
<input className="w-full rounded-lg border border-slate-800 bg-slate-900/80 text-sm sm:text-base text-slate-100 placeholder:text-slate-500 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400/80 focus:border-transparent transition-shadow duration-200" id="name" placeholder="Your name" type="text"/>
</div>
<div className="space-y-1.5">
<label className="block text-xs sm:text-sm font-medium tracking-tight text-slate-200" htmlFor="email">Email</label>
<input className="w-full rounded-lg border border-slate-800 bg-slate-900/80 text-sm sm:text-base text-slate-100 placeholder:text-slate-500 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400/80 focus:border-transparent transition-shadow duration-200" id="email" placeholder="you@example.com" type="email"/>
</div>
</div>
<div className="space-y-1.5">
<label className="block text-xs sm:text-sm font-medium tracking-tight text-slate-200" htmlFor="project-type">Project type</label>
<select className="w-full rounded-lg border border-slate-800 bg-slate-900/80 text-sm sm:text-base text-slate-100 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400/80 focus:border-transparent transition-shadow duration-200" id="project-type">
<option className="bg-slate-900">Mobile app (new)</option>
<option className="bg-slate-900">Improve existing Flutter app</option>
<option className="bg-slate-900">Consultation</option>
<option className="bg-slate-900">Other</option>
</select>
</div>
<div className="space-y-1.5">
<label className="block text-xs sm:text-sm font-medium tracking-tight text-slate-200" htmlFor="message">Project details</label>
<textarea className="w-full rounded-lg border border-slate-800 bg-slate-900/80 text-sm sm:text-base text-slate-100 placeholder:text-slate-500 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400/80 focus:border-transparent transition-shadow duration-200" id="message" placeholder="Briefly outline your idea, scope, and timeline." rows="4"></textarea>
</div>
<button className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-slate-100 text-slate-950 text-sm sm:text-base font-medium tracking-tight px-4 py-2.5 hover:bg-slate-200 transition-colors duration-300" type="submit">
<i className="h-4 w-4" data-lucide="send"></i>
<span>Send</span>
</button>
<p className="text-xs sm:text-sm text-slate-500">
                  This is a static form. Connect it to a backend or form service to receive messages.
                </p>
</form>
</div>
</div>
</section>
</main>

<footer className="border-t border-slate-800/60 bg-slate-950">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
<p className="text-xs sm:text-sm text-slate-500">
            © <span id="year"></span> Fahad. All rights reserved.
          </p>
<div className="flex items-center gap-4 text-xs sm:text-sm text-slate-400">
<a className="hover:text-slate-100 transition-colors" href="#hero">Back to top</a>
</div>
</div>
</footer>
</div>


    </>
  );
}
