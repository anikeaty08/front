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



      // Icons
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

      // Chart.js: Outcome metrics
      const ctx = document.getElementById('impactChart');
      if (ctx) {
        const data = {
          labels: ['Engagement', 'Satisfaction', 'Stress Reduction', 'Adoption', 'Retention', 'Conversion'],
          datasets: [
            {
              label: 'Improvement',
              data: [64, 91, 67, 34, 68, 35],
              backgroundColor: [
                'rgba(99,102,241,0.45)',
                'rgba(168,85,247,0.45)',
                'rgba(16,185,129,0.45)',
                'rgba(56,189,248,0.45)',
                'rgba(244,114,182,0.45)',
                'rgba(250,204,21,0.45)'
              ],
              borderColor: [
                'rgba(99,102,241,0.9)',
                'rgba(168,85,247,0.9)',
                'rgba(16,185,129,0.9)',
                'rgba(56,189,248,0.9)',
                'rgba(244,114,182,0.9)',
                'rgba(250,204,21,0.9)'
              ],
              borderWidth: 1.25,
              borderRadius: 6
            }
          ]
        };
        new Chart(ctx, {
          type: 'bar',
          data,
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              x: {
                grid: { color: 'rgba(255,255,255,0.06)' },
                ticks: { color: 'rgba(229,229,229,0.8)', font: { family: 'Inter', size: 11 } }
              },
              y: {
                beginAtZero: true,
                grid: { color: 'rgba(255,255,255,0.06)' },
                ticks: { color: 'rgba(229,229,229,0.8)', font: { family: 'Inter', size: 11 }, stepSize: 20 }
              }
            },
            plugins: {
              legend: { display: false },
              tooltip: {
                backgroundColor: 'rgba(10,10,10,0.9)',
                titleColor: '#fff',
                bodyColor: '#e5e5e5',
                borderColor: 'rgba(255,255,255,0.1)',
                borderWidth: 1,
                padding: 10,
                displayColors: false
              }
            }
          }
        });
      }
    
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
      

<div className="fixed inset-0 -z-10">
<div className="absolute inset-0 opacity-[0.12]" style={{backgroundImage: `radial-gradient(1200px 600px at 10% -10%, rgba(168,85,247,0.25), transparent 40%), radial-gradient(900px 450px at 90% 10%, rgba(59,130,246,0.25), transparent 40%), radial-gradient(700px 400px at 50% 100%, rgba(16,185,129,0.18), transparent 45%)`}}></div>
<div className="absolute inset-0" style={{backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)`, backgroundSize: `36px 36px`, maskImage: `radial-gradient(ellipse at center, black 60%, transparent 100%)`, opacity: `0.25`}}></div>
<div className="absolute inset-0 backdrop-blur-[2px]"></div>
</div>

<header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/50 border-b border-white/10">
<div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
<a className="inline-flex items-center gap-3 group" href="#">
<div className="h-8 w-8 rounded-md bg-white/5 ring-1 ring-white/10 grid place-items-center">
<span className="text-[11px] font-semibold tracking-tight text-white/90">RG</span>
</div>
<span className="text-sm text-neutral-300 group-hover:text-neutral-100 transition-colors">Back to Projects</span>
</a>
<nav className="hidden md:flex items-center gap-6 text-sm">
<a className="text-neutral-300 hover:text-white transition-colors" href="#overview">Overview</a>
<a className="text-neutral-300 hover:text-white transition-colors" href="#problem">Problem</a>
<a className="text-neutral-300 hover:text-white transition-colors" href="#solution">Solution</a>
<a className="text-neutral-300 hover:text-white transition-colors" href="#outcome">Outcome</a>
<a className="text-neutral-300 hover:text-white transition-colors" href="#resources">Resources</a>
</nav>
<a className="inline-flex items-center gap-2 text-sm text-neutral-200 hover:text-white transition-colors" href="#live-links">
<i className="w-4 h-4" data-lucide="external-link"></i>
          Live
        </a>
</div>
</header>

<section className="relative">
<div className="max-w-7xl mx-auto px-6 pt-12 md:pt-16 pb-10 md:pb-14">
<div className="flex flex-col lg:flex-row gap-8">
<div className="flex-1">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[12px] text-neutral-300">
<i className="w-3.5 h-3.5" data-lucide="brain-circuit"></i>
              Neurotechnology • Case Study
            </div>
<h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight text-white">
              Roga Case Study
            </h1>
<p className="mt-4 text-base md:text-lg text-neutral-300 max-w-2xl">
              AI-powered neurotechnology platform redesign across wearable, mobile, web, and store to reduce friction, improve usability, and drive adoption.
            </p>
<div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-md bg-white text-neutral-900 px-4 py-2.5 text-sm font-medium hover:bg-neutral-100 transition-colors" href="#live-links">
                View Live Links
                <i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-neutral-200 hover:bg-white/10 transition-colors" href="#solution">
                Explore Solution
                <i className="w-4 h-4" data-lucide="sparkles"></i>
</a>
</div>
</div>
<div className="w-full lg:w-[42%]">
<div className="relative rounded-xl overflow-hidden border border-white/10 bg-neutral-900/40 shadow-2xl">
<img alt="Roga preview" className="w-full h-64 md:h-80 object-cover opacity-95" src="https://images.unsplash.com/photo-1551292831-023188e78222?q=80&w=1600&auto=format&fit=crop" />
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 to-transparent"></div>
<div className="absolute bottom-0 p-4 md:p-5">
<div className="flex items-center gap-2 text-[12px] text-neutral-300">
<i className="w-3.5 h-3.5" data-lucide="activity"></i>
                  Wearable • AI • Mobile • Web
                </div>
<div className="mt-2 text-sm text-neutral-200">
                  End-to-end redesign improving engagement, retention, and conversion
                </div>
</div>
</div>
</div>
</div>

<div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="rounded-lg border border-white/10 bg-white/5 p-4 hover:bg-white/[0.07] transition-colors">
<div className="text-xs text-neutral-400">Engagement</div>
<div className="mt-1 text-2xl font-semibold tracking-tight text-white">+64%</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-4 hover:bg-white/[0.07] transition-colors">
<div className="text-xs text-neutral-400">Satisfaction</div>
<div className="mt-1 text-2xl font-semibold tracking-tight text-white">91%</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-4 hover:bg-white/[0.07] transition-colors">
<div className="text-xs text-neutral-400">Stress Reduction</div>
<div className="mt-1 text-2xl font-semibold tracking-tight text-white">-67%</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-4 hover:bg-white/[0.07] transition-colors">
<div className="text-xs text-neutral-400">Retention</div>
<div className="mt-1 text-2xl font-semibold tracking-tight text-white">68%</div>
</div>
</div>
</div>
</section>
<main className="relative">
<div className="max-w-7xl mx-auto px-6 pb-24">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

<aside className="hidden lg:block lg:col-span-3">
<div className="sticky top-24 rounded-xl border border-white/10 bg-white/5 p-4">
<div className="text-xs uppercase tracking-wide text-neutral-400 mb-3">On this page</div>
<nav className="space-y-2 text-sm">
<a className="flex items-center gap-2 text-neutral-300 hover:text-white transition-colors" href="#overview">
<i className="w-4 h-4" data-lucide="book-open-text"></i> Overview
                </a>
<a className="flex items-center gap-2 text-neutral-300 hover:text-white transition-colors" href="#problem">
<i className="w-4 h-4" data-lucide="triangle-alert"></i> Problem / Challenge
                </a>
<a className="flex items-center gap-2 text-neutral-300 hover:text-white transition-colors" href="#solution">
<i className="w-4 h-4" data-lucide="wand-2"></i> Solution
                </a>
<a className="flex items-center gap-2 text-neutral-300 hover:text-white transition-colors" href="#research">
<i className="w-4 h-4" data-lucide="clipboard-list"></i> Research & Insights
                </a>
<a className="flex items-center gap-2 text-neutral-300 hover:text-white transition-colors" href="#features">
<i className="w-4 h-4" data-lucide="layers-3"></i> Key Features
                </a>
<a className="flex items-center gap-2 text-neutral-300 hover:text-white transition-colors" href="#challenges">
<i className="w-4 h-4" data-lucide="scissors-line-dashed"></i> Challenges
                </a>
<a className="flex items-center gap-2 text-neutral-300 hover:text-white transition-colors" href="#outcome">
<i className="w-4 h-4" data-lucide="trophy"></i> Outcome / Impact
                </a>
<a className="flex items-center gap-2 text-neutral-300 hover:text-white transition-colors" href="#resources">
<i className="w-4 h-4" data-lucide="library"></i> Additional Resources
                </a>
<a className="flex items-center gap-2 text-neutral-300 hover:text-white transition-colors" href="#design-links">
<i className="w-4 h-4" data-lucide="link-2"></i> Design Links
                </a>
<a className="flex items-center gap-2 text-neutral-300 hover:text-white transition-colors" href="#live-links">
<i className="w-4 h-4" data-lucide="rocket"></i> Live Links
                </a>
</nav>
</div>
</aside>

<section className="lg:col-span-9 space-y-14">

<section className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 md:p-8" id="overview">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-lg bg-white/5 border border-white/10 grid place-items-center">
<i className="w-4.5 h-4.5" data-lucide="book-open"></i>
</div>
<div className="flex-1">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">Overview</h2>
<p className="mt-3 text-neutral-300">
                    Roga is an AI-powered neurotechnology platform combining wearable devices, mobile and web apps, and an online store designed to help users manage stress and anxiety. As engagement dropped significantly, I led a full redesign of the experience to reduce user friction, improve usability, and increase adoption across all touchpoints.
                  </p>
</div>
</div>
<div className="mt-6 rounded-xl overflow-hidden border border-white/10">
<img alt="Devices and app" className="w-full h-56 md:h-72 object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
</div>
</section>

<section className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 md:p-8" id="problem">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-lg bg-white/5 border border-white/10 grid place-items-center">
<i className="w-4.5 h-4.5" data-lucide="triangle-alert"></i>
</div>
<div className="flex-1">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">Problem / Challenge</h2>
<ul className="mt-4 space-y-3 text-neutral-300 list-disc pl-5">
<li>Users found onboarding overwhelming and confusing, with fragmented flows that lacked personalization.</li>
<li>Previous research insights weren’t implemented, leaving critical UX gaps in the experience.</li>
<li>Engagement dropped as users struggled to connect devices and discover relevant content.</li>
<li>The business needed stronger engagement growth to drive adoption, retention, and revenue.</li>
</ul>
</div>
</div>
</section>

<section className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 md:p-8" id="solution">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-lg bg-white/5 border border-white/10 grid place-items-center">
<i className="w-4.5 h-4.5" data-lucide="wand-2"></i>
</div>
<div className="flex-1">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">Solution (Process + Features)</h2>
<p className="mt-3 text-neutral-300">
                    Using a user-centered design approach, we streamlined the experience while ensuring each feature directly solved a pain point.
                  </p>
</div>
</div>

<section className="mt-6" id="research">
<h3 className="text-xl md:text-2xl font-semibold tracking-tight text-white">1. Research & Insights</h3>
<div className="mt-4 grid md:grid-cols-2 gap-4">
<div className="rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition-colors">
<div className="flex items-center gap-2 text-sm text-neutral-300">
<i className="w-4 h-4" data-lucide="users"></i> Conducted stakeholder interviews, heuristic evaluations, and rapid UX research.
                    </div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition-colors">
<div className="flex items-center gap-2 text-sm text-neutral-300">
<i className="w-4 h-4" data-lucide="file-search"></i> Analyzed previous usability studies and user interviews to validate findings.
                    </div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition-colors">
<div className="flex items-center gap-2 text-sm text-neutral-300">
<i className="w-4 h-4" data-lucide="map"></i> Mapped user frustrations across onboarding, personalization, and device setup.
                    </div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition-colors">
<div className="flex items-center gap-2 text-sm text-neutral-300">
<i className="w-4 h-4" data-lucide="gap"></i> Identified gaps between existing research and actual product implementation.
                    </div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition-colors md:col-span-2">
<div className="flex items-center gap-2 text-sm text-neutral-300">
<i className="w-4 h-4" data-lucide="line-chart"></i> Performed market research to understand competitors and positioning.
                    </div>
</div>
</div>
<div className="mt-5 rounded-xl overflow-hidden border border-white/10">
<img alt="Research artifacts" className="w-full h-48 md:h-64 object-cover" src="https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=1600&auto=format&fit=crop" />
</div>
</section>

<section className="mt-10" id="features">
<h3 className="text-xl md:text-2xl font-semibold tracking-tight text-white">2. Key Design Features :</h3>
<div className="mt-5 grid md:grid-cols-2 gap-5">

<div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] p-5 hover:to-white/[0.06] transition-all">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-sm text-neutral-300">
<i className="w-4 h-4" data-lucide="log-in"></i>
                        Simplified Onboarding Flow
                      </div>
</div>
<div className="mt-3 text-sm">
<p className="text-neutral-400">Problem: Users dropped off early due to overwhelming onboarding.</p>
<p className="mt-2 text-neutral-200">Solution: Enabled guest mode, optional login, and stress-free personalization steps.</p>
</div>
<div className="mt-4 rounded-lg overflow-hidden border border-white/10">
<img alt="Onboarding flow" className="w-full h-40 object-cover" src="https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=1600&auto=format&fit=crop" />
</div>
</div>

<div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] p-5 hover:to-white/[0.06] transition-all">
<div className="flex items-center gap-2 text-sm text-neutral-300">
<i className="w-4 h-4" data-lucide="bot"></i>
                      AI-Powered Stress Assessment (GAD-7)
                    </div>
<div className="mt-3 text-sm">
<p className="text-neutral-400">Problem: Users struggled to interpret clinical results.</p>
<p className="mt-2 text-neutral-200">Solution: Introduced AI-generated interpretations, personalized recommendations, and session guidance → reduced stress and confusion.</p>
</div>
<div className="mt-4 rounded-lg overflow-hidden border border-white/10">
<img alt="Assessment UI" className="w-full h-40 object-cover" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop" />
</div>
</div>

<div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] p-5 hover:to-white/[0.06] transition-all">
<div className="flex items-center gap-2 text-sm text-neutral-300">
<i className="w-4 h-4" data-lucide="home"></i>
                      Home & Contents
                    </div>
<div className="mt-3 text-sm">
<p className="text-neutral-400">Problem: Engagement plateaued due to irrelevant content.</p>
<p className="mt-2 text-neutral-200">Solution: Personalized stress reports and AI-curated content; introduced smooth session player with journaling → increased retention.</p>
</div>
<div className="mt-4 rounded-lg overflow-hidden border border-white/10">
<img alt="Home and content UI" className="w-full h-40 object-cover" src="https://images.unsplash.com/photo-1505250469679-203ad9ced0cb?q=80&w=1600&auto=format&fit=crop" />
</div>
</div>

<div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] p-5 hover:to-white/[0.06] transition-all">
<div className="flex items-center gap-2 text-sm text-neutral-300">
<i className="w-4 h-4" data-lucide="bluetooth"></i>
                      Device Setup & Quick AI Sessions
                    </div>
<div className="mt-3 text-sm">
<p className="text-neutral-400">Problem: Complex setup frustrated first-time users.</p>
<p className="mt-2 text-neutral-200">Solution: Step-by-step device setup and instant AI sessions with feedback → improved adoption.</p>
</div>
<div className="mt-4 rounded-lg overflow-hidden border border-white/10">
<img alt="Device setup" className="w-full h-40 object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80" />
</div>
</div>

<div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] p-5 hover:to-white/[0.06] transition-all">
<div className="flex items-center gap-2 text-sm text-neutral-300">
<i className="w-4 h-4" data-lucide="gauge"></i>
                      Profile & Dashboard
                    </div>
<div className="mt-3 text-sm">
<p className="text-neutral-400">Problem: Users lacked visibility into progress, reducing motivation.</p>
<p className="mt-2 text-neutral-200">Solution: Dashboard with performance analytics, mood tracking, badges, and history → boosted engagement and achievement-driven use.</p>
</div>
<div className="mt-4 rounded-lg overflow-hidden border border-white/10">
<img alt="Dashboard UI" className="w-full h-40 object-cover" src="https://images.unsplash.com/photo-1543286386-2e659306cd6c?q=80&w=1600&auto=format&fit=crop" />
</div>
</div>

<div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] p-5 hover:to-white/[0.06] transition-all">
<div className="flex items-center gap-2 text-sm text-neutral-300">
<i className="w-4 h-4" data-lucide="component"></i>
                      Design System & Cross-Platform Consistency
                    </div>
<div className="mt-3 text-sm">
<p className="text-neutral-400">Problem: Inconsistent visual language across apps and the store weakened the brand and disrupted the user journey.</p>
<p className="mt-2 text-neutral-200">Solution: Built a scalable design library to unify typography, colors, components, and interactions across mobile, desktop, and web. This ensured a consistent brand presence and smoother cross-platform experiences.</p>
</div>
<div className="mt-4 rounded-lg overflow-hidden border border-white/10">
<img alt="Design system" className="w-full h-40 object-cover" src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=1600&auto=format&fit=crop" />
</div>
</div>

<div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] p-5 hover:to-white/[0.06] transition-all md:col-span-2">
<div className="flex items-center gap-2 text-sm text-neutral-300">
<i className="w-4 h-4" data-lucide="store"></i>
                      Website & Store Redesign
                    </div>
<div className="mt-3 text-sm">
<p className="text-neutral-400">Problem: As traffic came from multiple touchpoints, the website/store flow felt disconnected from the product experience.</p>
<p className="mt-2 text-neutral-200">Solution: Redesigned the website and online store to align with the new design system, ensuring continuity in brand, usability, and conversion paths.</p>
</div>
<div className="mt-4 rounded-lg overflow-hidden border border-white/10">
<img alt="Website redesign" className="w-full h-44 md:h-56 object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&q=80" />
</div>
</div>
</div>
</section>
</section>

<section className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 md:p-8" id="challenges">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-lg bg-white/5 border border-white/10 grid place-items-center">
<i className="w-4.5 h-4.5" data-lucide="flag-triangle-right"></i>
</div>
<div className="flex-1">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">Challenges During Design</h2>
<ul className="mt-4 space-y-3 text-neutral-300 list-disc pl-5">
<li>Time & Budget Constraints: Adopted rapid research methods using existing data.</li>
<li>Conflicting Research: Needed to merge old unimplemented findings with new insights.</li>
<li>Balancing Business vs. User Needs: Ensuring revenue growth features (subscriptions) didn’t conflict with stress-free experience.</li>
</ul>
</div>
</div>
</section>

<section className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 md:p-8" id="outcome">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-lg bg-white/5 border border-white/10 grid place-items-center">
<i className="w-4.5 h-4.5" data-lucide="trophy"></i>
</div>
<div className="flex-1">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">Outcome / Impact</h2>
<ul className="mt-4 space-y-3 text-neutral-300 list-disc pl-5">
<li>64% increase in engagement.</li>
<li>91% user satisfaction in usability testing.</li>
<li>67% reduction in reported stress during sessions.</li>
<li>34% increase in adoption, 68% retention, and 35% increase in conversion.</li>
<li>Positive user testimonials validated improvements in usability and overall experience.</li>
</ul>

<p className="sr-only">Chart visualization of outcome metrics</p>
<div className="mt-6">
<div className="rounded-xl border border-white/10 bg-white/5 p-4">
<div className="h-64">
<div className="h-full">
<canvas id="impactChart"></canvas>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 md:p-8" id="resources">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-lg bg-white/5 border border-white/10 grid place-items-center">
<i className="w-4.5 h-4.5" data-lucide="library"></i>
</div>
<div className="flex-1">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">Additional Resources</h2>
<div className="mt-5 grid md:grid-cols-2 gap-5">

<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="text-sm text-neutral-200 font-medium">Research & Design Process Artifacts</div>
<div className="mt-3 grid grid-cols-2 gap-2">
<a className="group inline-flex items-center justify-between rounded-lg border border-white/10 bg-neutral-900/50 px-3 py-2 text-sm text-neutral-300 hover:text-white hover:bg-white/[0.08]" href="#">
                          UX Impact Progress Board (Research Analysis, Ideation, Sketching, Flows)
                          <i className="w-4 h-4 opacity-60 group-hover:opacity-100" data-lucide="arrow-up-right"></i>
</a>
<a className="group inline-flex items-center justify-between rounded-lg border border-white/10 bg-neutral-900/50 px-3 py-2 text-sm text-neutral-300 hover:text-white hover:bg-white/[0.08]" href="#">
                          User Interview Data (Ally)
                          <i className="w-4 h-4 opacity-60 group-hover:opacity-100" data-lucide="arrow-up-right"></i>
</a>
<a className="group inline-flex items-center justify-between rounded-lg border border-white/10 bg-neutral-900/50 px-3 py-2 text-sm text-neutral-300 hover:text-white hover:bg-white/[0.08]" href="#">
                          Roga Brainstorming & Ideation Session (Teamwork)
                          <i className="w-4 h-4 opacity-60 group-hover:opacity-100" data-lucide="arrow-up-right"></i>
</a>
<a className="group inline-flex items-center justify-between rounded-lg border border-white/10 bg-neutral-900/50 px-3 py-2 text-sm text-neutral-300 hover:text-white hover:bg-white/[0.08]" href="#">
                          Competitors Analysis Report
                          <i className="w-4 h-4 opacity-60 group-hover:opacity-100" data-lucide="arrow-up-right"></i>
</a>
<a className="group inline-flex items-center justify-between rounded-lg border border-white/10 bg-neutral-900/50 px-3 py-2 text-sm text-neutral-300 hover:text-white hover:bg-white/[0.08]" href="#">
                          User Persona
                          <i className="w-4 h-4 opacity-60 group-hover:opacity-100" data-lucide="arrow-up-right"></i>
</a>
<a className="group inline-flex items-center justify-between rounded-lg border border-white/10 bg-neutral-900/50 px-3 py-2 text-sm text-neutral-300 hover:text-white hover:bg-white/[0.08]" href="#">
                          User Journey Mapping
                          <i className="w-4 h-4 opacity-60 group-hover:opacity-100" data-lucide="arrow-up-right"></i>
</a>
</div>
</div>

<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="text-sm text-neutral-200 font-medium">Roga Ideas</div>
<div className="mt-3 grid grid-cols-2 gap-2">
<a className="group inline-flex items-center justify-between rounded-lg border border-white/10 bg-neutral-900/50 px-3 py-2 text-sm text-neutral-300 hover:text-white hover:bg-white/[0.08]" href="#">
                          Roga Ideas
                          <i className="w-4 h-4 opacity-60 group-hover:opacity-100" data-lucide="arrow-up-right"></i>
</a>
<a className="group inline-flex items-center justify-between rounded-lg border border-white/10 bg-neutral-900/50 px-3 py-2 text-sm text-neutral-300 hover:text-white hover:bg-white/[0.08]" href="#">
                          Idea 1
                          <i className="w-4 h-4 opacity-60 group-hover:opacity-100" data-lucide="arrow-up-right"></i>
</a>
<a className="group inline-flex items-center justify-between rounded-lg border border-white/10 bg-neutral-900/50 px-3 py-2 text-sm text-neutral-300 hover:text-white hover:bg-white/[0.08]" href="#">
                          Idea 2
                          <i className="w-4 h-4 opacity-60 group-hover:opacity-100" data-lucide="arrow-up-right"></i>
</a>
<a className="group inline-flex items-center justify-between rounded-lg border border-white/10 bg-neutral-900/50 px-3 py-2 text-sm text-neutral-300 hover:text-white hover:bg-white/[0.08]" href="#">
                          Idea 3
                          <i className="w-4 h-4 opacity-60 group-hover:opacity-100" data-lucide="arrow-up-right"></i>
</a>
<a className="group inline-flex items-center justify-between rounded-lg border border-white/10 bg-neutral-900/50 px-3 py-2 text-sm text-neutral-300 hover:text-white hover:bg-white/[0.08]" href="#">
                          Idea 4
                          <i className="w-4 h-4 opacity-60 group-hover:opacity-100" data-lucide="arrow-up-right"></i>
</a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 md:p-8" id="design-links">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-lg bg-white/5 border border-white/10 grid place-items-center">
<i className="w-4.5 h-4.5" data-lucide="pen-tool"></i>
</div>
<div className="flex-1">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">Design Links</h2>
<div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
<a className="group rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-neutral-300 hover:bg-white/10 hover:text-white inline-flex items-center justify-between" href="#">
                      Style Library
                      <i className="w-4 h-4 opacity-60 group-hover:opacity-100" data-lucide="arrow-up-right"></i>
</a>
<a className="group rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-neutral-300 hover:bg-white/10 hover:text-white inline-flex items-center justify-between" href="#">
                      Mobile App
                      <i className="w-4 h-4 opacity-60 group-hover:opacity-100" data-lucide="arrow-up-right"></i>
</a>
<a className="group rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-neutral-300 hover:bg-white/10 hover:text-white inline-flex items-center justify-between" href="#">
                      AI Design
                      <i className="w-4 h-4 opacity-60 group-hover:opacity-100" data-lucide="arrow-up-right"></i>
</a>
<a className="group rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-neutral-300 hover:bg-white/10 hover:text-white inline-flex items-center justify-between" href="#">
                      Desktop App
                      <i className="w-4 h-4 opacity-60 group-hover:opacity-100" data-lucide="arrow-up-right"></i>
</a>
<a className="group rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-neutral-300 hover:bg-white/10 hover:text-white inline-flex items-center justify-between" href="#">
                      Website
                      <i className="w-4 h-4 opacity-60 group-hover:opacity-100" data-lucide="arrow-up-right"></i>
</a>
</div>
</div>
</div>
</section>

<section className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 md:p-8" id="live-links">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-lg bg-white/5 border border-white/10 grid place-items-center">
<i className="w-4.5 h-4.5" data-lucide="rocket"></i>
</div>
<div className="flex-1">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">Live Links</h2>
<div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
<a className="group rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-neutral-300 hover:bg-white/10 hover:text-white inline-flex items-center justify-between" href="#">
                      Website
                      <i className="w-4 h-4 opacity-60 group-hover:opacity-100" data-lucide="arrow-up-right"></i>
</a>
<a className="group rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-neutral-300 hover:bg-white/10 hover:text-white inline-flex items-center justify-between" href="#">
                      Mobile App
                      <i className="w-4 h-4 opacity-60 group-hover:opacity-100" data-lucide="arrow-up-right"></i>
</a>
<a className="group rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-neutral-300 hover:bg-white/10 hover:text-white inline-flex items-center justify-between" href="#">
                      App Store
                      <i className="w-4 h-4 opacity-60 group-hover:opacity-100" data-lucide="arrow-up-right"></i>
</a>
<a className="group rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-neutral-300 hover:bg-white/10 hover:text-white inline-flex items-center justify-between" href="#">
                      Playstore
                      <i className="w-4 h-4 opacity-60 group-hover:opacity-100" data-lucide="arrow-up-right"></i>
</a>
</div>
</div>
</div>
</section>
</section>
</div>
</div>
</main>

<footer className="border-t border-white/10">
<div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-white/5 ring-1 ring-white/10 grid place-items-center">
<span className="text-[11px] font-semibold tracking-tight text-white/90">RG</span>
</div>
<span className="text-sm text-neutral-400">© 2025 — Case Study</span>
</div>
<div className="flex items-center gap-3">
<a className="text-sm text-neutral-300 hover:text-white transition-colors" href="#">Contact</a>
<span className="text-neutral-700">•</span>
<a className="text-sm text-neutral-300 hover:text-white transition-colors" href="#">LinkedIn</a>
<span className="text-neutral-700">•</span>
<a className="text-sm text-neutral-300 hover:text-white transition-colors" href="#">Dribbble</a>
</div>
</div>
</footer>





    </>
  );
}
