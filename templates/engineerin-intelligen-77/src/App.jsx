import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        if(window.lucide) lucide.createIcons();
      


      lucide.createIcons();
    


      document.addEventListener('DOMContentLoaded', () => {
          const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      entry.target.classList.add('active');
                      observer.unobserve(entry.target);
                  }
              });
          }, { threshold: 0.1 });
          document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
          if (window.lucide) lucide.createIcons();
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
<div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-900/10 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-900/10 rounded-full blur-[120px]"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050507]/80 backdrop-blur-md transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-3 group cursor-pointer">
<div className="relative w-6 h-6 flex items-center justify-center">
<div className="absolute inset-0 bg-blue-500/20 rounded-full blur-sm group-hover:bg-blue-500/40 transition-all"></div>
<div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center relative z-10">
<svg className="text-white" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="14">
<polyline points="16 18 22 12 16 6"></polyline>
<polyline points="8 6 2 12 8 18"></polyline>
</svg>
</div>
</div>
<span className="text-white font-medium tracking-tight text-lg">
            Rebase
          </span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#product">
            Product
          </a>
<a className="hover:text-white transition-colors" href="#how-it-works">
            How it works
          </a>
<a className="hover:text-white transition-colors" href="#pricing">
            Pricing
          </a>
<a className="hover:text-white transition-colors" href="#faq">FAQ</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#">
            Sign in
          </a>
<a className="text-sm font-medium bg-white/5 hover:bg-white/10 text-white px-4 py-2 rounded-full border border-white/10 transition-all hover:border-white/20 shadow-[0_0_0_1px_rgba(255,255,255,0.05)] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.1)]" href="#">
            Book a demo
          </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-24 overflow-hidden">

<div className="absolute inset-0 bg-grid pointer-events-none"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-900/20 rounded-[100%] blur-[120px] pointer-events-none opacity-40"></div>
<div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/30 border border-blue-500/20 text-blue-300 text-xs font-medium mb-8 animate-enter">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
          Rebase 1.0 is now live
        </div>

<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight mb-6 leading-[1.1] animate-enter" style={{animationDelay: '0.1s'}}>
          The engineering autopilot
          <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-white">
            for planning &amp; execution.
          </span>
</h1>

<p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-enter" style={{animationDelay: '0.2s'}}>
          Know what you'll ship and when—with 85% confidence. The only platform
          that plans AND executes for you.
        </p>
<div className="flex flex-wrap justify-center items-center gap-6 mt-8 mb-10 opacity-70 hover:opacity-100 transition-opacity">
<span className="text-xs font-semibold tracking-widest text-slate-500 uppercase mr-2">
            Trusted by teams at
          </span>
<div className="flex items-center gap-6 grayscale invert brightness-200">
<div className="text-white font-bold text-lg flex items-center gap-1">
<div className="w-4 h-4 bg-white rounded-full"></div>
              ACME
            </div>
<div className="text-white font-bold text-lg flex items-center gap-1">
<div className="w-4 h-4 bg-white rotate-45"></div>
              Globex
            </div>
<div className="text-white font-bold text-lg flex items-center gap-1">
<div className="w-4 h-4 bg-white rounded-sm"></div>
              Soylent
            </div>
<div className="text-white font-bold text-lg flex items-center gap-1">
<div className="w-4 h-4 bg-white rounded-full border-2 border-black"></div>
              Umbrella
            </div>
</div>
</div>

<div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-20 animate-enter" style={{animationDelay: '0.3s'}}>
<button className="w-full md:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-full transition-all shadow-[0_0_30px_-10px_rgba(37,99,235,0.5)] border border-blue-400/20">
            Start forecasting
          </button>
<button className="w-full md:w-auto px-8 py-3.5 bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 text-white font-medium rounded-full flex items-center justify-center gap-2 transition-all">
<i className="w-4 h-4" data-lucide="play-circle"></i>
            Watch 3 min overview
          </button>
<div className="hidden lg:flex absolute left-[105%] top-1/2 -translate-y-1/2 items-center gap-2 px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300 text-xs font-medium whitespace-nowrap animate-enter" style={{animationDelay: '0.5s'}}>
<i className="w-3.5 h-3.5" data-lucide="clock"></i>
            Teams save 8+ hrs/week
          </div>
</div>

<div className="relative w-full mx-auto rounded-xl border border-white/10 shadow-2xl overflow-hidden animate-enter bg-[#0B0F19] max-w-7xl" style={{animationDelay: '0.4s', boxShadow: '0 0 100px -20px rgba(30, 58, 138, 0.2)'}}>

<div className="h-10 bg-[#0F1320] border-b border-white/5 flex items-center justify-between px-4">
<div className="flex gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
</div>
<div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded border border-white/5 text-[10px] text-slate-500">
<i className="w-3 h-3" data-lucide="lock"></i>
              rebase.ai/dashboard
            </div>
</div>

<div className="p-6 grid grid-cols-1 md:grid-cols-12 gap-6 h-[520px]">

<div className="md:col-span-8 flex flex-col h-full">
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="text-sm font-medium text-white mb-1">
                    Q3 Roadmap Forecast
                  </h3>
<p className="text-xs text-slate-500">
                    Probabilistic completion dates based on last 90 days
                    velocity
                  </p>
</div>
<div className="flex gap-3">
<div className="px-2 py-1 bg-green-500/10 border border-green-500/20 rounded text-green-400 text-xs font-medium flex items-center gap-1.5 animate-pulse shadow-[0_0_15px_rgba(34,197,94,0.4)]">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    On Track
                  </div>
</div>
</div>

<div className="flex-1 relative border border-white/5 bg-white/[0.01] rounded-lg p-4">

<div className="absolute inset-0 grid grid-rows-4 w-full h-full pointer-events-none p-4">
<div className="border-b border-white/5 border-dashed w-full h-full"></div>
<div className="border-b border-white/5 border-dashed w-full h-full"></div>
<div className="border-b border-white/5 border-dashed w-full h-full"></div>
</div>

<div className="relative w-full h-full flex items-end pb-6 pl-2">

<div className="absolute left-0 top-0 bottom-6 w-8 flex flex-col justify-between text-[10px] text-slate-600 py-2">
<span>100%</span>
<span>75%</span>
<span>50%</span>
<span>25%</span>
</div>
<div className="absolute left-8 bottom-0 right-0 h-6 flex justify-between text-[10px] text-slate-600 px-2">
<span>Week 1</span>
<span>Week 4</span>
<span>Week 8</span>
<span>Week 12</span>
</div>

<svg className="w-full h-full ml-8" preserveaspectratio="none" viewbox="0 0 400 200">
<defs>
<lineargradient id="fanGradient" x1="0" x2="1" y1="0" y2="0">
<stop offset="0%" stop-color="rgba(59, 130, 246, 0.1)"></stop>
<stop offset="100%" stop-color="rgba(59, 130, 246, 0.4)"></stop>
</lineargradient>
</defs>

<path d="M0,180 C50,170 150,160 200,120 C250,80 350,60 400,40 L400,180 L0,180" fill="url(#fanGradient)" opacity="0.3"></path>

<path className="path-draw" d="M0,180 C50,175 150,150 200,100 C250,60 350,30 400,20" fill="none" stroke="#60A5FA" strokeWidth="2"></path>

<circle className="animate-ping" cx="200" cy="100" fill="#60A5FA" r="4" style={{animationDuration: '3s'}}></circle>
<circle cx="200" cy="100" fill="#3B82F6" r="4" stroke="#0B0F19" strokeWidth="2"></circle>
</svg>

<div className="absolute top-[40%] left-[50%] bg-[#1e293b] border border-white/10 px-3 py-2 rounded shadow-xl transform translate-x-2 -translate-y-2">
<div className="text-[10px] text-slate-400">Projected:</div>
<div className="text-xs font-medium text-white">
                      Oct 14 - Oct 18
                    </div>
<div className="text-[10px] text-blue-400">89% Confidence</div>
</div>
</div>
</div>
</div>

<div className="md:col-span-4 flex flex-col gap-4">

<div className="bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 rounded-lg p-4 relative overflow-hidden">
<div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/20 blur-xl rounded-full"></div>
<div className="flex items-center gap-2 mb-3">
<i className="w-3.5 h-3.5 text-blue-400" data-lucide="sparkles"></i>
<span className="text-xs font-semibold text-blue-100">
                    AI Analysis
                  </span>
</div>
<p className="text-xs text-slate-300 leading-relaxed mb-3">
<span className="text-white font-medium">Checkout V2</span>
                  is trending 4 days late due to increased cycle time on the
                  payment gateway integration.
                </p>
<div className="p-2 bg-black/20 rounded border border-white/5">
<div className="flex items-center justify-between text-[10px] text-slate-400 mb-1">
<span>Recommendation</span>
<i className="w-3 h-3" data-lucide="arrow-right"></i>
</div>
<div className="text-xs text-white">
                    Reallocate 2 engineers from
                    <span className="line-through text-slate-600">Dark Mode</span>
</div>
</div>
</div>

<div className="flex-1 bg-[#0F1320] border border-white/5 rounded-lg p-4 overflow-hidden">
<div className="text-[10px] font-medium text-slate-500 uppercase tracking-widest mb-3">
                  Live Signals
                </div>
<div className="space-y-3 relative">

<div className="flex gap-3 items-start opacity-100">
<div className="mt-0.5 w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]"></div>
<div>
<div className="text-xs text-slate-300">
                        Sentry Error Spike
                      </div>
<div className="text-[10px] text-slate-500">
                        Checkout API (502) +15%
                      </div>
</div>
</div>

<div className="flex gap-3 items-start opacity-70">
<div className="mt-0.5 w-1.5 h-1.5 rounded-full bg-purple-500"></div>
<div>
<div className="text-xs text-slate-300">
                        Linear Scope Creep
                      </div>
<div className="text-[10px] text-slate-500">
                        3 tickets added to current sprint
                      </div>
</div>
</div>

<div className="flex gap-3 items-start opacity-50">
<div className="mt-0.5 w-1.5 h-1.5 rounded-full bg-green-500"></div>
<div>
<div className="text-xs text-slate-300">PR Merged</div>
<div className="text-[10px] text-slate-500">
                        feat/user-auth #402
                      </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#080b12] border-y border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">
            Why planning with vibes
            <br/>
            keeps burning your team.
          </h2>
<p className="text-slate-400 text-lg">
            Dashboards without decisions are just noise. JIRA charts look
            backward. Roadmaps are wishful thinking.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="glass-card p-6 rounded-xl reveal">
<div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center mb-4 border border-red-500/10 text-red-500">
<i className="w-5 h-5" data-lucide="calendar-x"></i>
</div>
<h3 className="text-white font-medium mb-2">Missed Commitments</h3>
<div className="text-red-400 text-xs font-bold mt-1 mb-2">
              60% of deadlines missed
            </div>
<p className="text-slate-400 leading-relaxed text-base font-medium">
              Surprise delays discovered 2 days before launch because "90% done"
              stayed there for two weeks.
            </p>
</div>

<div className="glass-card p-6 rounded-xl">
<div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center mb-4 border border-red-500/10 text-red-500">
<i className="w-5 h-5" data-lucide="megaphone"></i>
</div>
<h3 className="text-white font-medium mb-2">Loudest Voice Wins</h3>
<div className="text-red-400 text-xs font-bold mt-1 mb-2">
              3x more bugs from rushed features
            </div>
<p className="text-sm text-slate-400 leading-relaxed">
              Roadmap priorities shift based on who shouted last in Slack, not
              what drives revenue.
            </p>
</div>

<div className="glass-card p-6 rounded-xl">
<div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center mb-4 border border-red-500/10 text-red-500">
<i className="w-5 h-5" data-lucide="activity-square"></i>
</div>
<h3 className="text-white font-medium mb-2">Noisy Metrics</h3>
<div className="text-red-400 text-xs font-bold mt-1 mb-2">
              5+ tools, zero clarity
            </div>
<p className="text-sm text-slate-400 leading-relaxed">
              DORA metrics look fine, but you're still not shipping value. Data
              is siloed in 5 different tools.
            </p>
</div>

<div className="glass-card p-6 rounded-xl">
<div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center mb-4 border border-red-500/10 text-red-500">
<i className="w-5 h-5" data-lucide="mic-off"></i>
</div>
<h3 className="text-white font-medium mb-2">Status Meeting Hell</h3>
<div className="text-red-400 text-xs font-bold mt-1 mb-2">
              8 hrs/week wasted
            </div>
<p className="text-sm text-slate-400 leading-relaxed">
              Engineers spend hours explaining "why it's late" instead of
              actually writing code to fix it.
            </p>
</div>
</div>
</div>
</section>
<section className="py-24 bg-[#050507] reveal">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 text-center">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-4">
            The Monday morning update,
            <br/>
<span className="text-slate-500">written by AI.</span>
</h2>
</div>
<div className="flex flex-col lg:flex-row items-center gap-12">
<div className="lg:w-3/5 w-full relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
<div className="relative bg-[#0B0F19] border border-white/10 rounded-xl shadow-2xl overflow-hidden transform transition-transform duration-500 animate-float">
<div className="bg-[#1e293b]/50 border-b border-white/5 p-4 flex items-center gap-4">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="flex-1 text-center text-xs text-slate-500 font-medium">
                  Week 42 Summary
                </div>
</div>
<div className="p-8 space-y-6">
<div className="flex items-center justify-between border-b border-white/5 pb-6">
<div>
<div className="text-xl text-white font-medium mb-1">
                      Weekly Engineering Pack
                    </div>
<div className="text-sm text-slate-500">
                      Oct 14 - Oct 20 • Generated 9:00 AM
                    </div>
</div>
<div className="px-3 py-1 bg-green-500/10 text-green-400 text-xs rounded border border-green-500/20">
                    94% Goal Completion
                  </div>
</div>
<div className="space-y-3">
<div className="p-4 bg-white/5 rounded border border-white/5">
<div className="flex items-center gap-2 mb-2">
<span className="px-1.5 py-0.5 bg-blue-500/20 text-blue-300 text-[10px] rounded border border-blue-500/20">
                        Feature
                      </span>
<span className="text-sm text-white font-medium">
                        New Checkout Flow
                      </span>
</div>
<p className="text-xs text-slate-400">
                      Completed full rollout. Conversion lifted by 2.4%.
                    </p>
</div>
<div className="p-4 bg-white/5 rounded border border-white/5">
<div className="flex items-center gap-2 mb-2">
<span className="px-1.5 py-0.5 bg-red-500/20 text-red-300 text-[10px] rounded border border-red-500/20">
                        Risk
                      </span>
<span className="text-sm text-white font-medium">
                        Payment API Latency
                      </span>
</div>
<p className="text-xs text-slate-400">
                      P99 latency spiked to 400ms. Investigation started.
                    </p>
</div>
</div>
</div>
</div>
</div>
<div className="lg:w-2/5 space-y-8">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20 text-blue-400">
<i className="w-5 h-5" data-lucide="check-circle-2"></i>
</div>
<div>
<h3 className="text-white font-medium text-lg mb-1">
                  What actually shipped
                </h3>
<p className="text-slate-400 text-sm">
                  Diff-aware summaries of user-facing changes and business
                  impact.
                </p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20 text-blue-400">
<i className="w-5 h-5" data-lucide="alert-triangle"></i>
</div>
<div>
<h3 className="text-white font-medium text-lg mb-1">
                  Risks and blockers
                </h3>
<p className="text-slate-400 text-sm">
                  Identify stalled PRs and scope creep before they derail the
                  sprint.
                </p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20 text-blue-400">
<i className="w-5 h-5" data-lucide="arrow-right-circle"></i>
</div>
<div>
<h3 className="text-white font-medium text-lg mb-1">
                  Recommended plan
                </h3>
<p className="text-slate-400 text-sm">
                  AI-generated adjustments ready to approve or adjust.
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050507]" id="how-it-works">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl font-semibold text-white tracking-tight">
            From scattered signals to one operating system.
          </h2>
</div>
<div className="relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">

<div className="relative flex flex-col items-center text-center group">
<div className="w-24 h-24 rounded-2xl bg-[#0B0F19] border border-white/10 flex items-center justify-center mb-6 z-10 group-hover:border-blue-500/50 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all">
<i className="w-8 h-8 text-slate-500 group-hover:text-blue-400 transition-colors" data-lucide="layers"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">1. Ingest</h3>
<p className="text-sm text-slate-400 px-2">
                Securely connect GitHub, Linear, Slack, Sentry, and Analytics.
              </p>
</div>

<div className="relative flex flex-col items-center text-center group">
<div className="w-24 h-24 rounded-2xl bg-[#0B0F19] border border-white/10 flex items-center justify-center mb-6 z-10 group-hover:border-blue-500/50 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all">
<i className="w-8 h-8 text-slate-500 group-hover:text-blue-400 transition-colors" data-lucide="brain-circuit"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">2. Analyze</h3>
<p className="text-sm text-slate-400 px-2">
                AI builds a context map of code velocity and team capacity.
              </p>
</div>

<div className="relative flex flex-col items-center text-center group">
<div className="w-24 h-24 rounded-2xl bg-[#0B0F19] border border-white/10 flex items-center justify-center mb-6 z-10 group-hover:border-blue-500/50 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all">
<i className="w-8 h-8 text-slate-500 group-hover:text-blue-400 transition-colors" data-lucide="line-chart"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">3. Forecast</h3>
<p className="text-sm text-slate-400 px-2">
                Monte Carlo predictions with confidence bands and scenarios.
              </p>
</div>

<div className="relative flex flex-col items-center text-center group">
<div className="w-24 h-24 rounded-2xl bg-[#0B0F19] border border-white/10 flex items-center justify-center mb-6 z-10 group-hover:border-blue-500/50 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all">
<i className="w-8 h-8 text-slate-500 group-hover:text-blue-400 transition-colors" data-lucide="play"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">4. Execute</h3>
<p className="text-sm text-slate-400 px-2">
                Approve AI roadmaps and push tasks directly to Linear.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24" id="product">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">
              Complete engineering intelligence.
            </h2>
<p className="text-slate-400 text-lg">
              Everything you need to ship faster, in one place.
            </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-card rounded-xl p-6 group overflow-hidden relative min-h-[280px] hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(37,99,235,0.2)] transition-all duration-300">
<div className="flex items-center gap-3 mb-6">
<div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
<i className="w-5 h-5" data-lucide="layout-dashboard"></i>
</div>
<h3 className="text-white font-medium">Command Center</h3>
</div>
<div className="text-sm text-slate-400 mb-6 min-h-[40px]">
              Real-time team health, LLM narratives on what shipped, and current
              focus.
            </div>

<div className="bg-[#0B0F19] rounded border border-white/5 p-3 relative h-32 flex flex-col justify-center gap-3">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
<i className="w-4 h-4 text-slate-500" data-lucide="user"></i>
</div>
<div className="flex-1">
<div className="h-1.5 w-1/3 bg-white/20 rounded mb-1"></div>
<div className="h-1.5 w-full bg-blue-600/30 rounded overflow-hidden">
<div className="h-full w-[70%] bg-blue-500"></div>
</div>
</div>
</div>
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
<i className="w-4 h-4 text-slate-500" data-lucide="user"></i>
</div>
<div className="flex-1">
<div className="h-1.5 w-1/4 bg-white/20 rounded mb-1"></div>
<div className="h-1.5 w-full bg-yellow-600/30 rounded overflow-hidden">
<div className="h-full w-[90%] bg-yellow-500"></div>
</div>
</div>
</div>
</div>
</div>

<div className="glass-card rounded-xl p-6 group overflow-hidden relative min-h-[280px]">
<div className="flex items-center gap-3 mb-6">
<div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
<i className="w-5 h-5" data-lucide="trending-up"></i>
</div>
<h3 className="text-white font-medium">Forecasting Engine</h3>
</div>
<div className="text-sm text-slate-400 mb-6 min-h-[40px]">
              Fan charts, P50/P90 dates, and "what-if" capacity scenarios.
            </div>

<div className="bg-[#0B0F19] rounded border border-white/5 p-3 relative h-32 flex items-end justify-between px-4 pb-4 reveal">
<div className="absolute top-2 right-2 text-[9px] text-green-400 border border-green-500/20 px-1 rounded bg-green-500/5">
                P90: Oct 12
              </div>
<div className="w-2 h-6 bg-blue-900/40 rounded-t"></div>
<div className="w-2 h-10 bg-blue-800/60 rounded-t"></div>
<div className="w-2 h-16 bg-blue-700/80 rounded-t"></div>
<div className="w-2 h-24 bg-blue-600 rounded-t shadow-[0_0_10px_rgba(37,99,235,0.5)]"></div>
<div className="w-2 h-12 bg-blue-800/60 rounded-t"></div>
<div className="w-2 h-4 bg-blue-900/40 rounded-t"></div>
</div>
<div className="absolute top-0 right-0 px-3 py-1 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-bl-lg z-20 shadow-lg">
              Most Popular
            </div>
</div>

<div className="glass-card rounded-xl p-6 group overflow-hidden relative min-h-[280px]">
<div className="flex items-center gap-3 mb-6">
<div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
<i className="w-5 h-5" data-lucide="map"></i>
</div>
<h3 className="text-white font-medium">Roadmap Optimizer</h3>
</div>
<div className="text-sm text-slate-400 mb-6 min-h-[40px]">
              Score features based on customer demand, effort, and strategy.
            </div>

<div className="bg-[#0B0F19] rounded border border-white/5 p-3 relative h-32 flex flex-col justify-center gap-2">
<div className="flex justify-between items-center text-[10px] text-slate-500 px-1">
<span>Feature</span>
<span>ROI</span>
</div>
<div className="flex items-center justify-between p-1.5 bg-white/5 rounded border border-white/5">
<span className="text-xs text-white">OAuth 2.0</span>
<span className="text-xs font-mono text-blue-400">9.8</span>
</div>
<div className="flex items-center justify-between p-1.5 bg-transparent rounded border border-transparent opacity-50">
<span className="text-xs text-white">Dark Mode</span>
<span className="text-xs font-mono text-slate-400">4.1</span>
</div>
</div>
</div>

<div className="glass-card rounded-xl p-6 group overflow-hidden relative min-h-[280px]">
<div className="flex items-center gap-3 mb-6">
<div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
<i className="w-5 h-5" data-lucide="file-code"></i>
</div>
<h3 className="text-white font-medium">Execution Generator</h3>
</div>
<div className="text-sm text-slate-400 mb-6 min-h-[40px]">
              Auto-generate PRDs and break them into Linear tickets.
            </div>

<div className="bg-[#0B0F19] rounded border border-white/5 p-3 relative h-32 font-mono text-[10px] text-slate-500 overflow-hidden">
<div className="text-blue-400">Generating breakdown...</div>
<div className="mt-1 opacity-50">&gt; Create API endpoint</div>
<div className="mt-1 opacity-50">&gt; Update schema.prisma</div>
<div className="mt-1 opacity-50">&gt; Write Jest tests</div>
<div className="absolute bottom-3 right-3 px-2 py-1 bg-white text-black rounded text-[10px] font-sans font-medium flex items-center gap-1">
                Linear
                <i className="w-2 h-2" data-lucide="arrow-right"></i>
</div>
</div>
</div>

<div className="glass-card rounded-xl p-6 group overflow-hidden relative min-h-[280px]">
<div className="flex items-center gap-3 mb-6">
<div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
<i className="w-5 h-5" data-lucide="alert-triangle"></i>
</div>
<h3 className="text-white font-medium">Alerts &amp; Anomalies</h3>
</div>
<div className="text-sm text-slate-400 mb-6 min-h-[40px]">
              Cross-signal detection. Catch stalls and spikes instantly.
            </div>

<div className="bg-[#0B0F19] rounded border border-white/5 p-3 relative h-32 flex items-center justify-center">
<div className="w-full flex items-end justify-between px-2 gap-1 h-16">
<div className="w-1/6 h-4 bg-slate-700 rounded-t"></div>
<div className="w-1/6 h-6 bg-slate-700 rounded-t"></div>
<div className="w-1/6 h-5 bg-slate-700 rounded-t"></div>
<div className="w-1/6 h-full bg-red-500 animate-pulse rounded-t"></div>
<div className="w-1/6 h-8 bg-slate-700 rounded-t"></div>
</div>
<div className="absolute top-2 left-3 flex items-center gap-1 text-[10px] text-red-400">
<i className="w-3 h-3" data-lucide="alert-circle"></i>
                Unusual Spike
              </div>
</div>
</div>

<div className="glass-card rounded-xl p-6 group overflow-hidden relative min-h-[280px]">
<div className="flex items-center gap-3 mb-6">
<div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
<i className="w-5 h-5" data-lucide="bar-chart-2"></i>
</div>
<h3 className="text-white font-medium">Performance Analytics</h3>
</div>
<div className="text-sm text-slate-400 mb-6 min-h-[40px]">
              Cycle time, throughput, WIP, and DORA with drill-downs.
            </div>

<div className="bg-[#0B0F19] rounded border border-white/5 p-3 relative h-32 flex items-center justify-center">
<div className="relative w-20 h-20">
<svg className="w-full h-full transform -rotate-90" viewbox="0 0 36 36">
<path className="text-slate-800" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="2"></path>
<path className="text-blue-500" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="75, 100" strokeWidth="2"></path>
</svg>
<div className="absolute inset-0 flex items-center justify-center text-[10px] text-white font-mono">
                  4.2d
                </div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 bg-[#0a0a0f] border-t border-white/5" id="interactive-demos" style={{fontFamily: '\'Inter\', sans-serif'}}>
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">
            Intelligence in action.
          </h2>
<p className="text-slate-400 text-lg">
            See how Rebase transforms your engineering workflow.
          </p>
</div>
<div className="space-y-24">

<div className="relative">
<h3 className="text-xl font-medium text-white mb-6 flex items-center gap-2">
<span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-bold">
                1
              </span>
              Weekly Planning Pack
            </h3>
<div className="rounded-xl border border-white/10 bg-[#0B0F19] overflow-hidden shadow-2xl relative group">
<div className="border-b border-white/5 p-6 flex justify-between items-center bg-white/[0.02]">
<div className="flex items-center gap-3">
<div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
<i className="w-5 h-5" data-lucide="sparkles"></i>
</div>
<div>
<h3 className="text-lg font-semibold text-white">
                      Weekly Engineering Pack
                    </h3>
<div className="text-xs text-slate-500">
                      Oct 14 - Oct 20, 2024 • Generated Monday 9:00 AM
                    </div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="text-right hidden sm:block">
<div className="text-xs text-slate-400">Goal Completion</div>
<div className="text-green-400 font-mono font-medium">94%</div>
</div>
<div className="relative w-10 h-10">
<svg className="w-full h-full transform -rotate-90">
<circle cx="20" cy="20" fill="none" r="16" stroke="#1e293b" strokeWidth="4"></circle>
<circle cx="20" cy="20" fill="none" r="16" stroke="#22c55e" stroke-dasharray="100" stroke-dashoffset="6" strokeWidth="4"></circle>
</svg>
</div>
</div>
</div>
<div className="p-6 space-y-8 max-h-[600px] overflow-y-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="space-y-3">
<div className="p-4 rounded-lg bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
<div className="flex justify-between items-start mb-2">
<span className="px-2 py-0.5 rounded text-[10px] bg-green-500/10 text-green-400 border border-green-500/20">
                          Feature
                        </span>
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-[10px] text-white border border-[#0B0F19]">
                            SJ
                          </div>
<div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-[10px] text-white border border-[#0B0F19]">
                            MC
                          </div>
</div>
</div>
<div className="text-sm font-medium text-white">
                        New Checkout Flow
                      </div>
<div className="text-xs text-slate-400 mt-1">
                        Conversion lifted 2.4%
                      </div>
</div>
<div className="p-4 rounded-lg bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
<div className="flex justify-between items-start mb-2">
<span className="px-2 py-0.5 rounded text-[10px] bg-blue-500/10 text-blue-400 border border-blue-500/20">
                          Infra
                        </span>
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center text-[10px] text-white border border-[#0B0F19]">
                            AL
                          </div>
</div>
</div>
<div className="text-sm font-medium text-white">
                        Redis Cluster Migration
                      </div>
<div className="text-xs text-slate-400 mt-1">
                        Latency reduced by 40ms
                      </div>
</div>
</div>
<div className="space-y-3">
<div className="p-4 rounded-lg bg-red-500/5 border-l-2 border-l-red-500 border-y border-r border-white/5">
<div className="text-xs font-medium text-red-400 mb-1 flex items-center gap-2">
<i className="w-3 h-3" data-lucide="alert-circle"></i>
                        Slipped
                      </div>
<ul className="space-y-1">
<li className="text-xs text-slate-300">
                          • API Migration
                          <span className="text-slate-500 ml-1">
                            → Dependency on Auth
                          </span>
</li>
<li className="text-xs text-slate-300">
                          • Dashboard polish
                          <span className="text-slate-500 ml-1">
                            → Deprioritized
                          </span>
</li>
</ul>
</div>
<div className="p-4 rounded-lg bg-amber-500/5 border-l-2 border-l-amber-500 border-y border-r border-white/5">
<div className="text-xs font-medium text-amber-400 mb-1 flex items-center gap-2">
<i className="w-3 h-3" data-lucide="alert-triangle"></i>
                        Anomalies
                      </div>
<div className="text-xs text-slate-300">
                        Support tickets about search +150%
                      </div>
</div>
</div>
</div>
<div>
<div className="flex items-center gap-4 mb-4">
<h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                      This Week
                    </h4>
<div className="h-px bg-white/5 flex-1"></div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left text-sm border-collapse">
<thead>
<tr className="text-slate-500 text-xs border-b border-white/5">
<th className="py-2 px-2 font-medium">#</th>
<th className="py-2 px-2 font-medium">Item</th>
<th className="py-2 px-2 font-medium">Pts</th>
<th className="py-2 px-2 font-medium">Owner</th>
<th className="py-2 px-2 font-medium">Risk</th>
<th className="py-2 px-2 font-medium">CoD/Wk</th>
</tr>
</thead>
<tbody className="text-slate-300">
<tr className="border-b border-white/5 hover:bg-white/5 transition-colors group cursor-grab">
<td className="py-3 px-2 text-slate-500 group-hover:text-white">
                            1
                          </td>
<td className="py-3 px-2 font-medium text-white">
                            Search performance fix
                          </td>
<td className="py-3 px-2 font-mono text-xs">5</td>
<td className="py-3 px-2">
<div className="w-5 h-5 rounded-full bg-blue-500 text-[9px] flex items-center justify-center text-white">
                              AL
                            </div>
</td>
<td className="py-3 px-2">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
</td>
<td className="py-3 px-2 text-slate-400">$18K</td>
</tr>
<tr className="border-b border-white/5 hover:bg-white/5 transition-colors group cursor-grab">
<td className="py-3 px-2 text-slate-500 group-hover:text-white">
                            2
                          </td>
<td className="py-3 px-2 font-medium text-white">
                            Payment retry logic
                          </td>
<td className="py-3 px-2 font-mono text-xs">8</td>
<td className="py-3 px-2">
<div className="w-5 h-5 rounded-full bg-purple-500 text-[9px] flex items-center justify-center text-white">
                              SJ
                            </div>
</td>
<td className="py-3 px-2">
<div className="w-2 h-2 rounded-full bg-amber-500"></div>
</td>
<td className="py-3 px-2 text-slate-400">$12K</td>
</tr>
</tbody>
</table>
</div>
<div className="mt-4 flex items-center gap-4">
<div className="flex-1">
<div className="flex justify-between text-xs mb-1">
<span className="text-slate-400">Capacity: 16/36 pts</span>
<span className="text-green-400">44% Utilized</span>
</div>
<div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-green-500 w-[44%]"></div>
</div>
</div>
<div className="text-right">
<div className="text-xs text-slate-500">Potential Value</div>
<div className="text-sm font-medium text-white">$85,000</div>
</div>
</div>
</div>
<div>
<div className="flex items-center gap-4 mb-4">
<h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                      Decisions Needed
                    </h4>
<div className="h-px bg-white/5 flex-1"></div>
</div>
<div className="p-4 rounded-lg bg-[#131b2c] border-l-4 border-l-blue-500 border-y border-r border-white/5 shadow-lg">
<div className="flex justify-between items-start mb-3">
<h5 className="text-sm font-medium text-white">
                        Pull an engineer from Team B for API migration?
                      </h5>
<span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-[10px] rounded uppercase font-bold tracking-wider">
                        Blocking $50K
                      </span>
</div>
<div className="bg-blue-900/20 p-3 rounded text-xs text-blue-200 mb-4 border border-blue-500/20">
<span className="font-bold">AI Recommendation:</span>
                      Yes — reduces forecast by 4 days, unlocks $50K revenue.
                    </div>
<div className="flex gap-2">
<button className="px-3 py-1.5 bg-green-600 hover:bg-green-500 text-white text-xs font-medium rounded transition-colors flex items-center gap-1">
<i className="w-3 h-3" data-lucide="check"></i>
                        Approve
                      </button>
<button className="px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-medium rounded transition-colors">
                        Decline
                      </button>
<button className="px-3 py-1.5 bg-transparent border border-blue-500/30 text-blue-400 hover:text-blue-300 text-xs font-medium rounded transition-colors">
                        Discuss
                      </button>
</div>
</div>
</div>
</div>
<div className="p-4 border-t border-white/5 bg-white/[0.02] flex justify-between items-center text-xs">
<div className="text-slate-500">Last updated 2 mins ago</div>
<div className="flex gap-2">
<button className="p-2 hover:bg-white/5 rounded text-slate-400 hover:text-white transition-colors">
<i className="w-4 h-4" data-lucide="share"></i>
</button>
<button className="p-2 hover:bg-white/5 rounded text-slate-400 hover:text-white transition-colors">
<i className="w-4 h-4" data-lucide="mail"></i>
</button>
</div>
</div>
</div>
</div>

<div className="relative">
<h3 className="text-xl font-medium text-white mb-6 flex items-center gap-2">
<span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-bold">
                2
              </span>
              Context-Aware PRD Generator
            </h3>
<div className="rounded-xl border border-white/10 bg-[#0B0F19] h-[600px] flex overflow-hidden shadow-2xl">
<div className="w-2/5 border-r border-white/5 bg-[#0a0a0f] flex flex-col">
<div className="p-4 border-b border-white/5 flex justify-between items-center">
<span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                    Context Loaded
                  </span>
<i className="w-4 h-4 text-green-500" data-lucide="check-circle"></i>
</div>
<div className="overflow-y-auto flex-1 p-4 space-y-4">
<details className="group" open="">
<summary className="list-none flex items-center justify-between text-xs font-medium text-white cursor-pointer mb-2">
<div className="flex items-center gap-2">
<i className="w-3.5 h-3.5" data-lucide="github"></i>
                        GitHub Context
                      </div>
<i className="w-3 h-3 text-slate-500 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<div className="pl-5 space-y-2">
<div className="text-[10px] text-slate-400">
                        12 files analyzed
                      </div>
<div className="bg-[#1e1e2e] p-2 rounded border border-white/5 font-mono text-[10px] text-blue-300 overflow-hidden">
                        src/payments/checkout.ts
                        <br/>
                        src/api/stripe.ts
                      </div>
</div>
</details>
<details className="group">
<summary className="list-none flex items-center justify-between text-xs font-medium text-white cursor-pointer mb-2">
<div className="flex items-center gap-2">
<i className="w-3.5 h-3.5" data-lucide="layout"></i>
                        Linear Context
                      </div>
<i className="w-3 h-3 text-slate-500 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<div className="pl-5 space-y-2 text-[10px] text-slate-400">
<div>Epic: Payments V2</div>
<div className="flex gap-1 flex-wrap">
<span className="px-1.5 py-0.5 bg-white/5 rounded border border-white/10">
                          PAY-123
                        </span>
<span className="px-1.5 py-0.5 bg-white/5 rounded border border-white/10">
                          PAY-124
                        </span>
</div>
</div>
</details>
<details className="group" open="">
<summary className="list-none flex items-center justify-between text-xs font-medium text-white cursor-pointer mb-2">
<div className="flex items-center gap-2">
<i className="w-3.5 h-3.5" data-lucide="life-buoy"></i>
                        Support Signals
                      </div>
<i className="w-3 h-3 text-slate-500 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<div className="pl-5 space-y-2">
<div className="text-[10px] text-slate-400">
                        47 tickets about checkout failures
                      </div>
<div className="flex items-center gap-2 text-[10px] text-red-300">
<i className="w-3 h-3" data-lucide="frown"></i>
                        Top complaint: Timeout
                      </div>
</div>
</details>
</div>
<div className="p-4 border-t border-white/5">
<button className="w-full py-2 bg-white/5 border border-white/10 hover:bg-white/10 rounded text-xs text-white transition-colors">
                    + Add Context
                  </button>
</div>
</div>
<div className="w-3/5 bg-[#0B0F19] flex flex-col relative">
<div className="p-4 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
<div className="flex items-center gap-2 text-sm font-medium text-white">
<i className="w-4 h-4 text-blue-400" data-lucide="bot"></i>
                    Generated PRD
                  </div>
<span className="px-2 py-0.5 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[10px] rounded uppercase font-bold">
                    Draft
                  </span>
</div>
<div className="overflow-y-auto flex-1 p-8 space-y-6">
<h1 className="text-2xl font-semibold text-white">
                    Payment Retry Logic for Failed Transactions
                  </h1>
<div className="space-y-2">
<label className="text-xs font-bold text-slate-500 uppercase">
                      Problem Statement
                    </label>
<p className="text-sm text-slate-300 leading-relaxed p-3 rounded hover:bg-white/5 border border-transparent hover:border-white/10 transition-colors cursor-text">
                      Users experiencing checkout failures on slow connections
                      have no automatic retry, causing 12% cart abandonment.
                      Support tickets increased 47% this month.
                    </p>
</div>
<div className="space-y-2">
<label className="text-xs font-bold text-slate-500 uppercase">
                      Proposed Solution
                    </label>
<p className="text-sm text-slate-300 leading-relaxed p-3 rounded hover:bg-white/5 border border-transparent hover:border-white/10 transition-colors cursor-text">
                      Implement exponential backoff retry with max 3 attempts.
                      Show user-friendly loading state during retry. Fall back
                      to alternative payment method on final failure.
                    </p>
</div>
<div className="space-y-2">
<label className="text-xs font-bold text-slate-500 uppercase">
                      Tasks
                    </label>
<div className="space-y-2">
<div className="flex items-center gap-2 text-sm text-slate-300">
<input checked="" className="rounded border-white/20 bg-white/5 text-blue-500" type="checkbox"/>
<span>Research retry patterns</span>
<span className="text-[10px] text-slate-500 border border-white/10 px-1 rounded">
                          2 pts
                        </span>
</div>
<div className="flex items-center gap-2 text-sm text-slate-300">
<input checked="" className="rounded border-white/20 bg-white/5 text-blue-500" type="checkbox"/>
<span>Implement RetryPolicy class</span>
<span className="text-[10px] text-slate-500 border border-white/10 px-1 rounded">
                          5 pts
                        </span>
</div>
<div className="flex items-center gap-2 text-sm text-slate-300">
<input checked="" className="rounded border-white/20 bg-white/5 text-blue-500" type="checkbox"/>
<span>Update Stripe integration</span>
<span className="text-[10px] text-slate-500 border border-white/10 px-1 rounded">
                          3 pts
                        </span>
</div>
</div>
</div>
</div>
<div className="p-4 border-t border-white/5 bg-[#0a0a0f] flex justify-between items-center">
<div className="text-xs text-blue-400 flex items-center gap-1">
<i className="w-3 h-3" data-lucide="sparkles"></i>
                    AI Confidence: 87%
                  </div>
<div className="flex gap-3">
<button className="text-xs text-slate-400 hover:text-white transition-colors">
                      Save Draft
                    </button>
<button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium rounded transition-colors shadow-lg shadow-blue-500/20">
                      Create in Linear →
                    </button>
</div>
</div>
</div>
</div>
</div>

<div className="relative">
<h3 className="text-xl font-medium text-white mb-6 flex items-center gap-2">
<span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-bold">
                3
              </span>
              Roadmap Optimizer
            </h3>
<div className="rounded-xl border border-white/10 bg-[#0B0F19] h-[600px] flex overflow-hidden shadow-2xl">
<div className="w-1/4 border-r border-white/5 bg-[#0a0a0f] p-4 flex flex-col">
<h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">
                  Priority Scoring
                </h4>
<div className="mb-4">
<div className="text-sm font-medium text-white mb-1">
                    Payments V2
                  </div>
<div className="text-2xl font-bold text-blue-400">
                    9.2
                    <span className="text-sm text-slate-500 font-normal">/10</span>
</div>
</div>
<div className="space-y-3 flex-1 overflow-y-auto pr-2">
<div>
<div className="flex justify-between text-[10px] text-slate-400 mb-1">
<span>Strategic Alignment</span>
<span>15%</span>
</div>
<div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-blue-500 w-[85%]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-[10px] text-slate-400 mb-1">
<span>Customer Demand</span>
<span>12%</span>
</div>
<div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-blue-500 w-[70%]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-[10px] text-slate-400 mb-1">
<span>Revenue Impact</span>
<span>15%</span>
</div>
<div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-blue-500 w-[90%]"></div>
</div>
</div>
</div>
<div className="mt-4 pt-4 border-t border-white/5 text-center">
<button className="text-[10px] text-slate-500 hover:text-white transition-colors">
                    Adjust Weights
                  </button>
</div>
</div>
<div className="w-1/2 border-r border-white/5 bg-[#0B0F19] flex flex-col">
<div className="p-4 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
<h4 className="text-sm font-medium text-white">Roadmap</h4>
<div className="flex bg-white/5 rounded p-0.5 border border-white/5">
<button className="px-2 py-1 rounded bg-white/10 text-white text-[10px] font-medium shadow-sm">
                      List
                    </button>
<button className="px-2 py-1 rounded text-slate-500 hover:text-white text-[10px] font-medium transition-colors">
                      Matrix
                    </button>
</div>
</div>
<div className="flex-1 overflow-y-auto">
<table className="w-full text-left text-xs border-collapse">
<thead className="bg-white/[0.02] sticky top-0 z-10">
<tr className="text-slate-500 border-b border-white/5">
<th className="py-2 px-3">Item</th>
<th className="py-2 px-3">Score</th>
<th className="py-2 px-3">CoD</th>
<th className="py-2 px-3">Target</th>
</tr>
</thead>
<tbody className="text-slate-300 divide-y divide-white/5">
<tr className="hover:bg-blue-500/5 transition-colors cursor-move bg-blue-500/5">
<td className="py-3 px-3 font-medium text-white flex items-center gap-2">
<span className="text-slate-600">1</span>
                          Payments V2
                        </td>
<td className="py-3 px-3 text-blue-400 font-bold">9.2</td>
<td className="py-3 px-3">$45K</td>
<td className="py-3 px-3 text-amber-400">Oct 18</td>
</tr>
<tr className="hover:bg-white/5 transition-colors cursor-move">
<td className="py-3 px-3 font-medium text-white flex items-center gap-2">
<span className="text-slate-600">2</span>
                          Search Perf
                        </td>
<td className="py-3 px-3">8.7</td>
<td className="py-3 px-3">$18K</td>
<td className="py-3 px-3 text-green-400">Oct 25</td>
</tr>
<tr className="hover:bg-white/5 transition-colors cursor-move">
<td className="py-3 px-3 font-medium text-white flex items-center gap-2">
<span className="text-slate-600">3</span>
                          Dashboard
                        </td>
<td className="py-3 px-3">7.1</td>
<td className="py-3 px-3">$10K</td>
<td className="py-3 px-3 text-green-400">Nov 8</td>
</tr>
<tr className="bg-white/[0.02]">
<td className="py-2 px-3 text-[10px] text-slate-500 font-bold uppercase tracking-widest text-center" colspan="4">
                          Below The Line
                        </td>
</tr>
<tr className="hover:bg-white/5 transition-colors cursor-move opacity-50 hover:opacity-100">
<td className="py-3 px-3 font-medium text-slate-400 flex items-center gap-2">
<span className="text-slate-600">4</span>
                          Dark Mode
                        </td>
<td className="py-3 px-3">4.1</td>
<td className="py-3 px-3">$1K</td>
<td className="py-3 px-3 text-slate-500">Cut</td>
</tr>
</tbody>
</table>
</div>
<div className="p-4 border-t border-white/5 flex justify-center gap-3">
<button className="px-3 py-1.5 bg-blue-600/10 border border-blue-500/20 text-blue-400 hover:bg-blue-600/20 text-xs font-medium rounded transition-colors flex items-center gap-2">
<i className="w-3 h-3" data-lucide="zap"></i>
                    AI Re-optimize
                  </button>
</div>
</div>
<div className="w-1/4 bg-[#0a0a0f] p-4 flex flex-col">
<h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">
                  Forecast Impact
                </h4>
<div className="mb-6 relative h-32 w-full">
<div className="absolute inset-0 border-l border-b border-white/10"></div>
<svg className="absolute inset-0 w-full h-full overflow-visible">
<path d="M0,120 C40,100 80,80 120,40" fill="none" stroke="#3b82f6" strokeWidth="2"></path>
<path d="M0,120 C40,110 80,100 120,80 L120,40 Z" fill="url(#blueGradient)" opacity="0.2"></path>
<defs>
<lineargradient id="blueGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#3b82f6"></stop>
<stop offset="100%" stop-color="transparent"></stop>
</lineargradient>
</defs>
<circle cx="120" cy="40" fill="#3b82f6" r="3"></circle>
</svg>
<div className="absolute top-0 right-0 text-[10px] text-green-400 font-mono">
                    Q4 Target: Dec 15
                  </div>
</div>
<div className="space-y-4">
<div className="bg-blue-500/5 border-l-2 border-l-blue-500 p-3 rounded-r text-xs">
<div className="font-bold text-white mb-1 flex items-center gap-1">
<i className="w-3 h-3 text-blue-400" data-lucide="lightbulb"></i>
                      AI Insight
                    </div>
<p className="text-slate-400 leading-snug">
                      Move
                      <span className="text-white">Search</span>
                      before Payments to unblock 40% of support tickets.
                    </p>
<div className="mt-2 flex gap-2">
<button className="text-[10px] text-blue-400 hover:text-white font-medium">
                        Apply
                      </button>
<button className="text-[10px] text-slate-500 hover:text-slate-300">
                        Dismiss
                      </button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

</section>
<section className="py-24 bg-[#080b12] border-y border-white/5 reveal">
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="mb-12">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">
            Control how much Rebase does for you.
          </h2>
<p className="text-slate-400">
            Like cruise control for your engineering org—you set the level.
          </p>
</div>
<div className="max-w-4xl mx-auto bg-[#0B0F19] border border-white/10 rounded-2xl p-8 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500/20 via-blue-500 to-blue-500/20"></div>
<div className="grid grid-cols-4 gap-4 relative z-10">
<div className="text-left opacity-60 hover:opacity-100 transition-opacity">
<div className="text-blue-500 font-mono text-xs mb-2">LEVEL 1</div>
<h4 className="text-white font-medium mb-1">Analyst</h4>
<p className="text-xs text-slate-500">Insights &amp; Alerts only.</p>
</div>
<div className="text-left opacity-60 hover:opacity-100 transition-opacity">
<div className="text-blue-500 font-mono text-xs mb-2">LEVEL 2</div>
<h4 className="text-white font-medium mb-1">Planner</h4>
<p className="text-xs text-slate-500">Proposes roadmaps.</p>
</div>
<div className="text-left border-l border-white/10 pl-4 bg-white/5 rounded-r-lg py-2 -my-2 ring-1 ring-blue-500/30">
<div className="text-blue-400 font-mono text-xs mb-2 flex items-center gap-1">
<span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                LEVEL 3
              </div>
<h4 className="text-white font-medium mb-1">Operator</h4>
<p className="text-xs text-slate-400">Executes with approval.</p>
</div>
<div className="text-left opacity-40">
<div className="text-slate-600 font-mono text-xs mb-2">LEVEL 4</div>
<h4 className="text-slate-400 font-medium mb-1">Autopilot</h4>
<p className="text-xs text-slate-600">Fully autonomous.</p>
</div>
</div>
<div className="mt-8 pt-6 border-t border-white/5 text-xs text-slate-500 flex items-center justify-center gap-2">
<i className="w-3 h-3" data-lucide="info"></i>
            Start at Level 1, increase as you build trust.
          </div>
</div>
</div>
</section>
<section className="py-24 bg-[#080b12] border-y border-white/5 reveal" id="allocation">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row-reverse items-center gap-16">
<div className="lg:w-1/2">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-medium mb-6">
<i className="w-3 h-3" data-lucide="pie-chart"></i>
              Investment Allocation
            </div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">
              Are you shipping value,
              <br/>
<span className="text-slate-500">or just fixing bugs?</span>
</h2>
<p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Rebase analyzes code commits and ticket types to categorize effort
              into New Value, KTLO, and Bugs. Ensure your resources align with
              your strategy.
            </p>
<div className="grid grid-cols-2 gap-6">
<div>
<div className="text-3xl font-bold text-white mb-1">65%</div>
<div className="text-sm text-slate-500">
                  Target for New Features
                </div>
</div>
<div>
<div className="text-3xl font-bold text-white mb-1">&lt;15%</div>
<div className="text-sm text-slate-500">Target for Bugs</div>
</div>
</div>
</div>
<div className="lg:w-1/2 w-full">
<div className="relative bg-[#0B0F19] border border-white/10 rounded-xl p-6 shadow-2xl overflow-hidden group hover:border-purple-500/30 transition-colors">
<div className="flex justify-between items-center mb-8">
<h3 className="text-sm font-medium text-white">
                  Investment Profile (Last 30 Days)
                </h3>
<div className="flex gap-3">
<div className="flex items-center gap-1.5 text-[10px] text-slate-400">
<span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    New
                  </div>
<div className="flex items-center gap-1.5 text-[10px] text-slate-400">
<span className="w-2 h-2 rounded-full bg-purple-500"></span>
                    KTLO
                  </div>
<div className="flex items-center gap-1.5 text-[10px] text-slate-400">
<span className="w-2 h-2 rounded-full bg-red-500"></span>
                    Bugs
                  </div>
</div>
</div>
<div className="space-y-6">
<div>
<div className="flex justify-between text-xs text-white mb-2">
<span>Core Product</span>
<span className="text-slate-500">8 Engineers</span>
</div>
<div className="h-3 w-full bg-white/5 rounded-full overflow-hidden flex">
<div className="h-full bg-blue-500 w-[70%]"></div>
<div className="h-full bg-purple-500 w-[20%]"></div>
<div className="h-full bg-red-500 w-[10%]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs text-white mb-2">
<span>Platform Infra</span>
<span className="text-slate-500">4 Engineers</span>
</div>
<div className="h-3 w-full bg-white/5 rounded-full overflow-hidden flex">
<div className="h-full bg-blue-500 w-[30%]"></div>
<div className="h-full bg-purple-500 w-[50%]"></div>
<div className="h-full bg-red-500 w-[20%]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs text-white mb-2">
<span>Growth</span>
<span className="text-slate-500">3 Engineers</span>
</div>
<div className="h-3 w-full bg-white/5 rounded-full overflow-hidden flex">
<div className="h-full bg-blue-500 w-[85%]"></div>
<div className="h-full bg-purple-500 w-[10%]"></div>
<div className="h-full bg-red-500 w-[5%]"></div>
</div>
</div>
</div>
<div className="mt-8 p-4 bg-red-500/5 border border-red-500/10 rounded-lg flex gap-3 items-start">
<i className="w-4 h-4 text-red-400 mt-0.5" data-lucide="alert-triangle"></i>
<div>
<div className="text-xs font-medium text-red-200">
                    Allocation Alert
                  </div>
<p className="text-[11px] text-red-200/70 mt-1">
                    Platform Infra is spending 50% of time on KTLO (Target:
                    30%). Consider tech debt sprint.
                  </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#080b12] border-y border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">

<div className="opacity-80 reveal">
<h3 className="text-xl font-medium text-slate-400 mb-6 flex items-center gap-2">
<i className="w-5 h-5 text-red-500 animate-enter" data-lucide="x"></i>
              Before Rebase
            </h3>
<div className="space-y-4">
<div className="flex gap-4 p-4 rounded-lg bg-white/[0.02] border border-white/5">
<i className="w-5 h-5 text-red-500 shrink-0 mt-0.5" data-lucide="x"></i>
<div>
<h4 className="text-white text-sm font-medium">
                    Spreadsheet Roadmaps
                  </h4>
<p className="text-xs text-slate-500 mt-1">
                    Static lists that are outdated the moment they're saved.
                  </p>
</div>
</div>
<div className="flex gap-4 p-4 rounded-lg bg-white/[0.02] border border-white/5">
<i className="w-5 h-5 text-red-500 shrink-0 mt-0.5" data-lucide="x"></i>
<div>
<h4 className="text-white text-sm font-medium">
                    Weekly Status Meetings
                  </h4>
<p className="text-xs text-slate-500 mt-1">
                    Expensive hours spent asking "is this done yet?"
                  </p>
</div>
</div>
<div className="flex gap-4 p-4 rounded-lg bg-white/[0.02] border border-white/5">
<i className="w-5 h-5 text-red-500 shrink-0 mt-0.5" data-lucide="x"></i>
<div>
<h4 className="text-white text-sm font-medium">
                    Chasing Metrics
                  </h4>
<p className="text-xs text-slate-500 mt-1">
                    Manually correlating Jira tickets with GitHub PRs.
                  </p>
</div>
</div>
</div>
</div>

<div className="relative">
<div className="absolute -inset-4 bg-blue-500/10 blur-3xl rounded-full opacity-50 pointer-events-none"></div>
<h3 className="text-xl font-medium text-white mb-6 flex items-center gap-2 relative z-10 reveal delay-200">
<span className="w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,1)]"></span>
              With Rebase
            </h3>
<div className="space-y-4 relative z-10">
<div className="flex gap-4 p-4 rounded-lg bg-blue-500/10 border border-blue-500/20 shadow-[0_0_20px_-5px_rgba(59,130,246,0.1)]">
<div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center shrink-0 mt-0.5">
<i className="w-3 h-3 text-white" data-lucide="check"></i>
</div>
<div>
<h4 className="text-white text-sm font-medium">
                    Probabilistic Forecasts
                  </h4>
<p className="text-xs text-blue-200/60 mt-1">
                    "85% confidence we ship between Oct 12-15"
                  </p>
</div>
</div>
<div className="flex gap-4 p-4 rounded-lg bg-blue-500/10 border border-blue-500/20 shadow-[0_0_20px_-5px_rgba(59,130,246,0.1)]">
<div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center shrink-0 mt-0.5">
<i className="w-3 h-3 text-white" data-lucide="check"></i>
</div>
<div>
<h4 className="text-white text-sm font-medium">
                    Single Pane of Glass
                  </h4>
<p className="text-xs text-blue-200/60 mt-1">
                    Pull the Weekly Pack instead of slide decks.
                  </p>
</div>
</div>
<div className="flex gap-4 p-4 rounded-lg bg-blue-500/10 border border-blue-500/20 shadow-[0_0_20px_-5px_rgba(59,130,246,0.1)]">
<div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center shrink-0 mt-0.5">
<i className="w-3 h-3 text-white" data-lucide="check"></i>
</div>
<div>
<h4 className="text-white text-sm font-medium">
                    Auto-generated Plans
                  </h4>
<p className="text-xs text-blue-200/60 mt-1">
                    Turn strategy into sequenced Linear tasks instantly.
                  </p>
</div>
</div>
</div>
</div>
</div>
<div className="mt-12 text-center reveal">
<div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 font-medium text-sm">
<i className="w-4 h-4" data-lucide="trending-up"></i>
            Result: 40% fewer missed deadlines, 5+ hrs saved weekly
          </div>
</div>
</div>
</section>

<section className="py-24 bg-[#050507]">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-white tracking-tight">
            Drop Rebase into your existing rituals.
          </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="p-8 border border-white/5 rounded-2xl bg-[#080b12] hover:bg-[#0B0F19] transition-colors">
<div className="text-blue-400 font-mono text-[10px] tracking-widest mb-4 uppercase">
              Weekly Ritual
            </div>
<h3 className="text-xl text-white font-medium mb-3">
              Replace the Monday Status Meeting
            </h3>
<p className="text-sm text-slate-400 leading-relaxed">
              Don't ask "what's the status?". Pull up the Rebase Weekly Pack.
              See health, blockers, and ETA changes instantly.
            </p>
<div className="mt-6 rounded bg-[#050507] border border-white/5 h-20 overflow-hidden relative opacity-50">
<div className="absolute inset-0 bg-slate-800/20 animate-pulse"></div>
</div>
</div>
<div className="p-8 border border-white/5 rounded-2xl bg-[#080b12] hover:bg-[#0B0F19] transition-colors">
<div className="text-blue-400 font-mono text-[10px] tracking-widest mb-4 uppercase">
              Quarterly Planning
            </div>
<h3 className="text-xl text-white font-medium mb-3">
              Plan Qx with Real Probabilities
            </h3>
<p className="text-sm text-slate-400 leading-relaxed">
              Run scenario planning. Know exactly what fits into the quarter
              based on historical velocity, not wishful thinking.
            </p>
</div>
<div className="p-8 border border-white/5 rounded-2xl bg-[#080b12] hover:bg-[#0B0F19] transition-colors">
<div className="text-blue-400 font-mono text-[10px] tracking-widest mb-4 uppercase">
              Daily Triage
            </div>
<h3 className="text-xl text-white font-medium mb-3">
              Triage Risk in 10 Minutes
            </h3>
<p className="text-sm text-slate-400 leading-relaxed">
              Identify delivery stalls, error spikes, or scope creep before they
              derail the sprint. Rebase alerts you when red flags wave.
            </p>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-white/5 bg-[#050507]">
<div className="max-w-7xl mx-auto px-6 text-center">
<h3 className="text-sm font-medium text-slate-500 mb-10 uppercase tracking-widest">
          Integrates with your stack
        </h3>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 hover:opacity-100 transition-opacity duration-500">
<div className="flex items-center gap-2 text-white font-semibold text-lg hover:text-blue-400 transition-colors">
<i className="w-6 h-6" data-lucide="github"></i>
            GitHub
          </div>
<div className="flex items-center gap-2 text-white font-semibold text-lg hover:text-blue-400 transition-colors">
<div className="w-6 h-6 rounded-full border border-current flex items-center justify-center text-[10px]">
              L
            </div>
            Linear
          </div>
<div className="flex items-center gap-2 text-white font-semibold text-lg hover:text-blue-400 transition-colors">
<i className="w-6 h-6" data-lucide="slack"></i>
            Slack
          </div>
<div className="flex items-center gap-2 text-white font-semibold text-lg hover:text-blue-400 transition-colors">
<div className="w-6 h-6 bg-current text-black rounded-sm flex items-center justify-center font-bold text-[10px]">
              S
            </div>
            Sentry
          </div>
<div className="flex items-center gap-2 text-white font-semibold text-lg hover:text-blue-400 transition-colors">
<i className="w-6 h-6" data-lucide="message-circle"></i>
            Intercom
          </div>
</div>
<div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-500">
<i className="w-3 h-3 text-green-500" data-lucide="shield-check"></i>
          Read-only, secure, SOC2-ready architecture.
        </div>
</div>
</section>

<section className="py-24 bg-[#050507] reveal">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="p-8 bg-[#0B0F19] rounded-xl border border-white/10 border-l-4 border-l-blue-500 flex flex-col justify-between hover:translate-x-2 transition-transform">
<p className="text-lg text-slate-300 italic mb-6">
              "We replaced our Monday status meeting entirely. The Weekly Pack
              gives us more visibility than we ever had with manual updates."
            </p>
<div>
<div className="text-white font-medium">Sarah Jenkins</div>
<div className="text-sm text-slate-500">VP Engineering, TechFlow</div>
</div>
</div>
<div className="p-8 bg-[#0B0F19] rounded-xl border border-white/10 border-l-4 border-l-blue-500 flex flex-col justify-between hover:translate-x-2 transition-transform">
<p className="text-lg text-slate-300 italic mb-6">
              "Finally, forecasts I can actually trust. Rebase predicted our
              shipping date within 2 days variance."
            </p>
<div>
<div className="text-white font-medium">Michael Chang</div>
<div className="text-sm text-slate-500">CTO, DataSphere</div>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 relative overflow-hidden" id="pricing">
<div className="absolute inset-0 bg-blue-900/5 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">
            Predictable pricing.
          </h2>
<p className="text-slate-400">Start for free, scale with your team.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-start">

<div className="p-8 border border-white/10 rounded-xl bg-[#0B0F19]">
<h3 className="text-lg text-white font-medium mb-2">
              Starter - Free Trial
            </h3>
<div className="text-3xl font-bold text-white mb-2">$0</div>
<p className="text-sm text-slate-500 mb-6">
              For small squads moving fast.
            </p>
<ul className="space-y-3 mb-8 text-sm text-slate-300">
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-blue-500" data-lucide="check"></i>
                Up to 10 engineers
              </li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-blue-500" data-lucide="check"></i>
                GitHub &amp; Linear integration
              </li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-blue-500" data-lucide="check"></i>
                Basic forecasting
              </li>
</ul>
<button className="w-full py-2 border border-white/10 rounded-lg text-white text-sm hover:bg-white/5 transition-colors">
              Start Free
            </button>
</div>

<div className="p-8 border border-blue-500/50 rounded-xl bg-[#0B0F19] relative shadow-[0_0_40px_-10px_rgba(37,99,235,0.2)] scale-105 z-10">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 bg-blue-600 text-white text-[10px] font-bold tracking-widest uppercase rounded-full border-4 border-[#050507]">
              Most Popular
            </div>
<h3 className="text-lg text-white font-medium mb-2">Growth</h3>
<div className="text-3xl font-bold text-white mb-2">
              $29
              <span className="text-lg font-normal text-slate-500">/mo/eng</span>
</div>
<p className="text-[10px] text-green-400 mt-1 mb-2 font-medium">
              Pays for itself in 2 saved meetings/month
            </p>
<p className="text-sm text-slate-500 mb-6">
              For scaling engineering orgs.
            </p>
<ul className="space-y-3 mb-8 text-sm text-slate-300">
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-blue-500" data-lucide="check"></i>
                Up to 50 engineers
              </li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-blue-500" data-lucide="check"></i>
                All Integrations
              </li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-blue-500" data-lucide="check"></i>
                Advanced Monte Carlo
              </li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-blue-500" data-lucide="check"></i>
                AI PRD Generation
              </li>
</ul>
<button className="w-full py-2 bg-blue-600 rounded-lg text-white text-sm hover:bg-blue-500 transition-colors shadow-lg shadow-blue-900/20 font-medium">
              Get Started
            </button>
</div>

<div className="p-8 border border-white/10 rounded-xl bg-[#0B0F19]">
<h3 className="text-lg text-white font-medium mb-2">Enterprise</h3>
<div className="text-3xl font-bold text-white mb-2">Custom</div>
<p className="text-sm text-slate-500 mb-6">For VP Eng &amp; CTOs.</p>
<ul className="space-y-3 mb-8 text-sm text-slate-300">
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-blue-500" data-lucide="check"></i>
                Unlimited engineers
              </li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-blue-500" data-lucide="check"></i>
                Custom API Access
              </li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-blue-500" data-lucide="check"></i>
                SSO &amp; SOC2 Report
              </li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-blue-500" data-lucide="check"></i>
                Dedicated Success Manager
              </li>
</ul>
<button className="w-full py-2 border border-white/10 rounded-lg text-white text-sm hover:bg-white/5 transition-colors">
              Contact Sales
            </button>
</div>
</div>
<div className="text-center mt-12">
<a className="text-slate-400 hover:text-white text-sm border-b border-slate-700 pb-0.5 hover:border-white transition-colors" href="#">
            See full feature comparison
          </a>
</div>
</div>
</section>

<section className="py-24 bg-[#080b12]" id="faq">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-2xl font-semibold text-white mb-8 text-center">
          Frequently Asked Questions
        </h2>
<div className="space-y-4">
<details className="group bg-white/[0.02] border border-white/5 rounded-lg overflow-hidden">
<summary className="flex justify-between items-center cursor-pointer p-4 text-slate-300 font-medium hover:text-white transition-colors">
              How does Rebase connect to our tools?
              <span className="transition-transform group-open:rotate-180">
<i className="w-4 h-4" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="px-4 pb-4 text-sm text-slate-400 leading-relaxed">
              We use official APIs (GitHub App, Linear OAuth) to ingest
              metadata. We only read metadata (timestamps, status changes, PR
              sizes), never your actual source code content.
            </div>
</details>
<details className="group bg-white/[0.02] border border-white/5 rounded-lg overflow-hidden">
<summary className="flex justify-between items-center cursor-pointer p-4 text-slate-300 font-medium hover:text-white transition-colors">
              Will this replace our PM tool (Jira/Linear)?
              <span className="transition-transform group-open:rotate-180">
<i className="w-4 h-4" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="px-4 pb-4 text-sm text-slate-400 leading-relaxed">
              No. You keep using Linear or Jira for day-to-day task management.
              Rebase sits on top as the intelligence layer for planning,
              forecasting, and strategic alignment.
            </div>
</details>
<details className="group bg-white/[0.02] border border-white/5 rounded-lg overflow-hidden">
<summary className="flex justify-between items-center cursor-pointer p-4 text-slate-300 font-medium hover:text-white transition-colors">
              How accurate are the forecasts?
              <span className="transition-transform group-open:rotate-180">
<i className="w-4 h-4" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="px-4 pb-4 text-sm text-slate-400 leading-relaxed">
              We use Monte Carlo simulations based on your team's historical
              throughput and cycle time. After a 2-week calibration period, our
              P85 dates typically have &lt;5% variance from actual delivery.
            </div>
</details>
<details className="group bg-white/[0.02] border border-white/5 rounded-lg overflow-hidden">
<summary className="flex justify-between items-center cursor-pointer p-4 text-slate-300 font-medium hover:text-white transition-colors">
              Is data stored securely?
              <span className="transition-transform group-open:rotate-180">
<i className="w-4 h-4" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="px-4 pb-4 text-sm text-slate-400 leading-relaxed">
              Yes. We are SOC2 Type II compliant. All data is encrypted at rest
              and in transit. We have strict access controls and regular
              security audits.
            </div>
</details>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-[#0a0a0f] to-[#050507] pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tighter mb-6">
          Make engineering planning
          <br/>
          a science, not a guessing game.
        </h2>
<div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-10">
<button className="w-full md:w-auto px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-slate-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.3)]">
            Book a live demo
          </button>
<button className="w-full md:w-auto px-8 py-3 bg-transparent border border-white/10 text-white font-medium rounded-full hover:bg-white/5 transition-all flex items-center justify-center gap-2">
<i className="w-4 h-4" data-lucide="file-text"></i>
            See a sample Weekly Pack
          </button>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-[#050507] pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-5 h-5 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
<svg className="text-white" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12">
<polyline points="16 18 22 12 16 6"></polyline>
<polyline points="8 6 2 12 8 18"></polyline>
</svg>
</div>
<span className="text-white font-semibold tracking-tight">
                Rebase
              </span>
</div>
<p className="text-xs text-slate-500 pr-4">
              The engineering intelligence platform for high-performing teams.
            </p>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Product</h4>
<ul className="space-y-2 text-xs text-slate-400">
<li>
<a className="hover:text-white transition-colors" href="#">
                  Features
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Integrations
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Pricing
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Changelog
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Resources</h4>
<ul className="space-y-2 text-xs text-slate-400">
<li>
<a className="hover:text-white transition-colors" href="#">Blog</a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Manifesto
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Engineering Metrics Guide
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Company</h4>
<ul className="space-y-2 text-xs text-slate-400">
<li>
<a className="hover:text-white transition-colors" href="#">About</a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Careers
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Twitter
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  LinkedIn
                </a>
</li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] text-slate-600">
            © 2024 Rebase Inc. All rights reserved.
          </p>
<div className="flex gap-6 text-[10px] text-slate-600">
<a className="hover:text-slate-400" href="#">Privacy Policy</a>
<a className="hover:text-slate-400" href="#">Terms of Service</a>
</div>
<div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/5 text-[10px] text-slate-400 hover:bg-white/10 transition-colors cursor-help">
<i className="w-3 h-3" data-lucide="lock"></i>
            SOC2 Compliant
          </div>
</div>
</div>
</footer>



    </>
  );
}
