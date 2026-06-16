import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



          window.updateEnterpriseTab = function(index) {
            const tabs = document.querySelectorAll('.ent-tab');
            const panels = document.querySelectorAll('.ent-panel');

            tabs.forEach((tab, i) => {
              if (i === index) {
                tab.setAttribute('data-active', 'true');
              } else {
                tab.setAttribute('data-active', 'false');
              }
            });

            panels.forEach((panel) => {
              const panelIndex = parseInt(panel.dataset.index);
              if (panelIndex === index) {
                panel.classList.remove('opacity-0', 'translate-x-4', 'pointer-events-none');
                panel.classList.add('opacity-100', 'translate-x-0', 'z-10');
              } else {
                panel.classList.remove('opacity-100', 'translate-x-0', 'z-10');
                panel.classList.add('opacity-0', 'translate-x-4', 'pointer-events-none');
              }
            });
          };
        
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-semibold tracking-tighter text-slate-900 flex items-center gap-2" href="#">
<div className="w-6 h-6 bg-slate-900 rounded-full flex items-center justify-center text-white">
<iconify-icon icon="solar:graph-new-linear" width="14"></iconify-icon>
</div>
          PATH AGI
        </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-slate-900 transition-colors" href="#how-it-works">
            Platform
          </a>
<a className="hover:text-slate-900 transition-colors" href="#solutions">
            Solutions
          </a>
<a className="hover:text-slate-900 transition-colors" href="#impact">
            Impact
          </a>
<a className="hover:text-slate-900 transition-colors" href="#enterprise">
            Enterprise
          </a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-slate-900 bg-slate-100 rounded-full hover:bg-slate-200 transition-all" href="#demo">
          Request Demo
        </a>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">

<div className="absolute inset-0 pointer-events-none z-0">
<div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage: 'linear-gradient(#64748b 1px, transparent 1px), linear-gradient(90deg, #64748b 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
<div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-l from-indigo-50/50 to-transparent"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,transparent_0%,white_70%)]"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="text-left">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50/80 border border-indigo-100 text-xs font-medium text-indigo-700 mb-8 backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-[ping-slow_2s_ease-in-out_infinite] absolute inline-flex h-full w-full rounded-full bg-indigo-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
</span>
              Live Intelligence Engine
            </div>

<h1 className="text-5xl lg:text-7xl font-semibold tracking-tighter text-slate-900 mb-6 leading-[1.1]">
              Decision Intelligence for
              <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-slate-800">
                Sales Execution
              </span>
<span className="cursor-blink"></span>
</h1>
<p className="text-lg text-slate-500 max-w-xl mb-12 font-normal leading-relaxed">
              Path AGI connects your enterprise systems, learns from past
              decisions, and acts as an autonomous layer that protects revenue.
            </p>

<div className="space-y-8 mb-14">

<div className="flex gap-5 group items-start">
<div className="w-14 h-14 rounded-2xl bg-[#eff6ff] text-indigo-600 flex items-center justify-center flex-shrink-0 shadow-sm transition-colors">

<svg className="lucide lucide-server" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect>
<rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect>
<line x1="6" x2="6.01" y1="6" y2="6"></line>
<line x1="6" x2="6.01" y1="18" y2="18"></line>
</svg>
</div>
<div className="pt-1">
<h3 className="text-lg font-semibold text-slate-900 mb-1">
                    Connected Systems
                  </h3>
<p className="text-base text-slate-500 mb-2 leading-relaxed">
                    Unifies signal data across CRM &amp; communication layers.
                  </p>
<div className="flex items-center gap-2 text-sm font-medium text-emerald-600">
<svg className="lucide lucide-check-circle" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
<path d="m9 11 3 3L22 4"></path>
</svg>
<span>Signal Stream Active</span>
</div>
</div>
</div>

<div className="flex gap-5 group items-start">
<div className="w-14 h-14 rounded-2xl bg-[#eff6ff] text-indigo-600 flex items-center justify-center flex-shrink-0 shadow-sm transition-colors">


<svg className="lucide lucide-brain-circuit" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
<path d="M9 13a4.5 4.5 0 0 0 3-4"></path>
<path d="M6.003 5.125A3 3 0 0 1 19.528 2.63"></path>
<path d="M20.163 2.902a2.988 2.988 0 0 1-.182 5.947M17.585 8.849a4 4 0 1 1 2.989 5.342"></path>
<path d="M19.453 14.191a4 4 0 1 1-3.645 5.528"></path>
<path d="M12 18v-4"></path>
<path d="M6.3 17.7a4.4 4.4 0 0 0 7.4-4"></path>
</svg>
</div>
<div className="pt-1">
<h3 className="text-lg font-semibold text-slate-900 mb-1">
                    Decision Memory
                  </h3>
<p className="text-base text-slate-500 mb-2 leading-relaxed">
                    Learns from outcomes to build institutional judgment.
                  </p>
<div className="flex items-center gap-2 text-sm font-medium text-emerald-600">
<svg className="lucide lucide-check-circle" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
<path d="m9 11 3 3L22 4"></path>
</svg>
<span>Context Retained</span>
</div>
</div>
</div>

<div className="flex gap-5 group items-start">
<div className="w-14 h-14 rounded-2xl bg-[#eff6ff] text-indigo-600 flex items-center justify-center flex-shrink-0 shadow-sm transition-colors">

<svg className="lucide lucide-wand-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z"></path>
<path d="m14 7 3 3"></path>
<path d="M5 6v4"></path>
<path d="M19 14v4"></path>
<path d="M10 2v2"></path>
<path d="M7 8H3"></path>
<path d="M21 16h-4"></path>
<path d="M11 3H9"></path>
</svg>
</div>
<div className="pt-1">
<h3 className="text-lg font-semibold text-slate-900 mb-1">
                    Agentic Nudges
                  </h3>
<p className="text-base text-slate-500 mb-2 leading-relaxed">
                    Proactively guides reps to the next best action live.
                  </p>
<div className="flex items-center gap-2 text-sm font-medium text-emerald-600">
<svg className="lucide lucide-check-circle" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
<path d="m9 11 3 3L22 4"></path>
</svg>
<span>Agents Deployed</span>
</div>
</div>
</div>
</div>

<div className="flex flex-col sm:flex-row items-start gap-6">
<button className="btn-glow-border group w-full sm:w-auto shadow-xl shadow-indigo-500/20 active:scale-95 transition-transform duration-200">
<div className="btn-content px-8 py-3.5 flex items-center justify-center gap-3 text-white">
<span className="font-medium tracking-wide">
                    Request Private Demo
                  </span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</div>
</button>
</div>
</div>

<div className="relative lg:h-[600px] flex items-center justify-center">

<div className="absolute inset-0 bg-gradient-to-tr from-indigo-100/40 to-slate-100/40 rounded-full blur-3xl opacity-50 transform translate-x-10 translate-y-10"></div>

<div className="relative w-full max-w-md aspect-[4/5] md:aspect-square lg:w-full lg:max-w-lg glass-panel rounded-2xl p-2 animate-[float-ui_8s_ease-in-out_infinite] transform transition-all hover:scale-[1.01] duration-500">

<div className="h-10 bg-white/50 border-b border-slate-100 flex items-center px-4 gap-2 rounded-t-xl">
<div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
<div className="ml-auto flex items-center gap-2 text-[10px] text-slate-400 font-mono">
<span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                  LIVE
                </div>
</div>

<div className="flex h-[calc(100%-2.5rem)] bg-white/40">

<div className="w-14 border-r border-slate-100 flex flex-col items-center py-4 gap-4 bg-white/30">
<div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center">
<iconify-icon icon="solar:graph-new-linear" width="16"></iconify-icon>
</div>
<div className="w-6 h-6 rounded bg-indigo-50 text-indigo-600 flex items-center justify-center mt-4">
<iconify-icon icon="solar:home-2-linear" width="14"></iconify-icon>
</div>
<div className="w-6 h-6 rounded text-slate-400 flex items-center justify-center">
<iconify-icon icon="solar:users-group-rounded-linear" width="14"></iconify-icon>
</div>
<div className="w-6 h-6 rounded text-slate-400 flex items-center justify-center">
<iconify-icon icon="solar:folder-linear" width="14"></iconify-icon>
</div>
</div>

<div className="flex-1 p-6 relative overflow-hidden">

<div className="flex justify-between items-end mb-6">
<div>
<div className="h-2 w-24 bg-slate-200 rounded mb-2"></div>
<div className="h-6 w-48 bg-slate-900/10 rounded"></div>
</div>
<div className="h-8 w-24 bg-indigo-600 rounded-md text-white text-xs flex items-center justify-center font-medium shadow-lg shadow-indigo-500/20">
                      Analyze
                    </div>
</div>

<div className="grid grid-cols-2 gap-3 mb-6">
<div className="p-3 bg-white rounded-lg border border-slate-100 shadow-sm">
<div className="flex items-center gap-2 mb-2">
<div className="w-6 h-6 rounded bg-orange-50 text-orange-500 flex items-center justify-center">
<iconify-icon icon="solar:bolt-linear" width="12"></iconify-icon>
</div>
<div className="h-2 w-16 bg-slate-100 rounded"></div>
</div>
<div className="h-1.5 w-full bg-slate-50 rounded mb-1"></div>
<div className="h-1.5 w-2/3 bg-slate-50 rounded"></div>
</div>
<div className="p-3 bg-white rounded-lg border border-slate-100 shadow-sm">
<div className="flex items-center gap-2 mb-2">
<div className="w-6 h-6 rounded bg-blue-50 text-blue-500 flex items-center justify-center">
<iconify-icon icon="solar:chart-2-linear" width="12"></iconify-icon>
</div>
<div className="h-2 w-16 bg-slate-100 rounded"></div>
</div>
<div className="h-1.5 w-full bg-slate-50 rounded mb-1"></div>
<div className="h-1.5 w-2/3 bg-slate-50 rounded"></div>
</div>
</div>

<div className="absolute bottom-6 right-6 left-6 bg-white rounded-xl shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] border border-indigo-100 p-4 transform translate-y-0 transition-all z-20">
<div className="flex items-start gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white shrink-0 shadow-md">
<iconify-icon icon="solar:magic-stick-3-linear" width="16"></iconify-icon>
</div>
<div className="flex-1">
<div className="flex justify-between items-center mb-1">
<span className="text-xs font-semibold text-slate-900">
                            Revenue Agent
                          </span>
<span className="text-[10px] text-slate-400">
                            Just now
                          </span>
</div>
<p className="text-xs text-slate-600 leading-relaxed mb-3">
                          Expansion opportunity detected in
                          <strong>Acme Corp</strong>
                          . Usage is up
                          <span className="text-emerald-600 font-medium">+40%</span>
                          .
                        </p>
<div className="flex gap-2">
<button className="px-3 py-1.5 bg-slate-900 text-white text-[10px] font-medium rounded-md hover:bg-slate-800 transition-colors">
                            View Context
                          </button>
<button className="px-3 py-1.5 bg-slate-100 text-slate-600 text-[10px] font-medium rounded-md hover:bg-slate-200 transition-colors">
                            Draft Email
                          </button>
</div>
</div>
</div>
</div>

<svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
<path className="opacity-30" d="M50 80 Q 80 150 150 220" fill="none" stroke="#6366f1" stroke-dasharray="4 4" strokeWidth="1"></path>
<circle className="opacity-50" cx="150" cy="220" fill="#6366f1" r="3"></circle>
</svg>
</div>
</div>
</div>

<div className="absolute top-20 -right-4 w-32 p-3 bg-white rounded-lg shadow-lg border border-slate-100 transform rotate-6 animate-[float-ui_6s_ease-in-out_2s_infinite]">
<div className="flex items-center gap-2">
<iconify-icon className="text-emerald-500" icon="solar:cloud-check-linear"></iconify-icon>
<div className="h-1.5 w-16 bg-slate-100 rounded"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 relative overflow-hidden border-t border-slate-800">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e51a_1px,transparent_1px),linear-gradient(to_bottom,#4f46e51a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-indigo-500/20 blur-[100px] rounded-full pointer-events-none"></div>
</div>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 relative z-10">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">
            Why enterprise sales
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              underperforms
            </span>
</h2>
<p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Even with great tools, the connection between signal and action is
            broken—leaving revenue on the table.
          </p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group relative p-8 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-pink-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-pink-500/10">
<div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10">
<div className="w-14 h-14 rounded-xl bg-slate-900 border border-slate-700 text-pink-400 flex items-center justify-center mb-6 shadow-lg shadow-pink-500/10 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:layers-minimalistic-bold-duotone" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3">
                Fragmented Signals
              </h3>
<p className="text-slate-400 leading-relaxed">
                Revenue signals are fragmented across systems and teams. No one
                sees the full picture in time to act.
              </p>
</div>
</div>

<div className="group relative p-8 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange-500/10">
<div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-amber-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10">
<div className="w-14 h-14 rounded-xl bg-slate-900 border border-slate-700 text-orange-400 flex items-center justify-center mb-6 shadow-lg shadow-orange-500/10 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:cloud-broken-bold-duotone" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Memory Loss</h3>
<p className="text-slate-400 leading-relaxed">
                Decisions lose their context. Past approvals and judgment calls
                disappear—forcing teams to repeat the same debates.
              </p>
</div>
</div>

<div className="group relative p-8 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/10">
<div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10">
<div className="w-14 h-14 rounded-xl bg-slate-900 border border-slate-700 text-cyan-400 flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/10 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:clipboard-remove-bold-duotone" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3">
                Execution Breakdown
              </h3>
<p className="text-slate-400 leading-relaxed">
                Follow-ups happen late, ownership is unclear, and deals quietly
                stall. Passive dashboards don't fix this.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="how-it-works">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
              How Path AGI works
            </h2>
<p className="text-slate-500 max-w-md">
              No dashboards to watch. No rules to maintain. Only actionable
              guidance.
            </p>
</div>

<div className="hidden md:flex items-center gap-2 text-xs font-medium text-slate-400">
<span className="text-indigo-600">Connect</span>
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
<span>Learn</span>
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
<span>Understand</span>
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
<span>Nudge</span>
</div>
</div>
<div className="grid md:grid-cols-4 gap-6">

<div className="p-6 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-slate-200 hover:shadow-sm transition-all">
<div className="text-xs font-semibold text-indigo-600 mb-3 tracking-wide uppercase">
              01 Connect
            </div>
<div className="h-12 w-12 rounded-full bg-white border border-slate-100 flex items-center justify-center mb-4 text-slate-700">
<iconify-icon icon="solar:link-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">
              Read-only Intelligence
            </h3>
<p className="text-sm text-slate-500">
              Path AGI sits above your existing tools connecting systems without
              disrupting workflows.
            </p>
</div>

<div className="p-6 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-slate-200 hover:shadow-sm transition-all">
<div className="text-xs font-semibold text-indigo-600 mb-3 tracking-wide uppercase">
              02 Learn
            </div>
<div className="h-12 w-12 rounded-full bg-white border border-slate-100 flex items-center justify-center mb-4 text-slate-700">
<iconify-icon icon="solar:brain-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">
              Contextual Learning
            </h3>
<p className="text-sm text-slate-500">
              It learns from outcomes and decision context—what signals
              mattered, and why.
            </p>
</div>

<div className="p-6 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-slate-200 hover:shadow-sm transition-all">
<div className="text-xs font-semibold text-indigo-600 mb-3 tracking-wide uppercase">
              03 Understand
            </div>
<div className="h-12 w-12 rounded-full bg-white border border-slate-100 flex items-center justify-center mb-4 text-slate-700">
<iconify-icon icon="solar:graph-up-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">
              Living Context
            </h3>
<p className="text-sm text-slate-500">
              A living decision context forms, linking deals, actions, and
              outcomes across time.
            </p>
</div>

<div className="p-6 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-slate-200 hover:shadow-sm transition-all">
<div className="text-xs font-semibold text-indigo-600 mb-3 tracking-wide uppercase">
              04 Nudge
            </div>
<div className="h-12 w-12 rounded-full bg-white border border-slate-100 flex items-center justify-center mb-4 text-slate-700">
<iconify-icon icon="solar:bell-bing-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">
              Role-Aware Nudges
            </h3>
<p className="text-sm text-slate-500">
              Delivers level-sensitive nudges—who should act, what to do, why it
              matters, and when.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white relative overflow-hidden">
<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
              An autonomous decision workforce
            </h2>
<p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Path AGI deploys specialized agents that continuously monitor
              signals, learn from precedent, and guide action across the sales
              organization.
            </p>
<p className="text-slate-400 text-sm mb-8">
              Each agent focuses on a specific responsibility — expectation,
              reality, variance, context, and action — working together to
              protect and grow revenue.
            </p>
<div className="flex items-center gap-3 text-sm font-medium text-indigo-400">
<iconify-icon icon="solar:verified-check-linear" width="20"></iconify-icon>
<span>Not automation. Institutional intelligence.</span>
</div>
</div>
<div className="relative h-[400px] bg-slate-800/50 rounded-2xl border border-slate-700/50 p-8 flex items-center justify-center backdrop-blur-sm">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-indigo-600/20 rounded-full flex items-center justify-center border border-indigo-500/30 shadow-[0_0_30px_rgba(79,70,229,0.3)] z-10">
<iconify-icon className="text-indigo-400 text-4xl" icon="solar:cpu-bolt-linear"></iconify-icon>
</div>
<div className="absolute top-[15%] left-[5%] sm:left-[10%] p-3 bg-slate-800 rounded-xl border border-slate-600 shadow-xl flex items-center gap-2 animate-[float_6s_ease-in-out_infinite] z-20">
<iconify-icon className="text-teal-400" icon="solar:graph-new-up-linear"></iconify-icon>
<span className="text-xs font-mono text-slate-300">
                Analyze Agent
              </span>
</div>
<div className="absolute bottom-[15%] left-[5%] sm:left-[10%] p-3 bg-slate-800 rounded-xl border border-slate-600 shadow-xl flex items-center gap-2 animate-[float_6s_ease-in-out_2s_infinite] z-20">
<iconify-icon className="text-amber-400" icon="solar:layers-minimalistic-linear"></iconify-icon>
<span className="text-xs font-mono text-slate-300">
                Aggregator Agent
              </span>
</div>
<div className="absolute top-[15%] right-[5%] sm:right-[10%] p-3 bg-slate-800 rounded-xl border border-slate-600 shadow-xl flex items-center gap-2 animate-[float_5s_ease-in-out_1s_infinite] z-20">
<iconify-icon className="text-pink-400" icon="solar:chart-2-linear"></iconify-icon>
<span className="text-xs font-mono text-slate-300">
                Outcome Predictor
              </span>
</div>
<div className="absolute bottom-[15%] right-[5%] sm:right-[10%] p-3 bg-slate-800 rounded-xl border border-slate-600 shadow-xl flex items-center gap-2 animate-[float_5s_ease-in-out_3s_infinite] z-20">
<iconify-icon className="text-indigo-400" icon="solar:user-check-linear"></iconify-icon>
<span className="text-xs font-mono text-slate-300">
                Human-in-the-loop
              </span>
</div>
<svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
<line stroke="white" stroke-dasharray="4 4" strokeWidth="1" x1="50%" x2="20%" y1="50%" y2="20%"></line>
<line stroke="white" stroke-dasharray="4 4" strokeWidth="1" x1="50%" x2="20%" y1="50%" y2="80%"></line>
<line stroke="white" stroke-dasharray="4 4" strokeWidth="1" x1="50%" x2="80%" y1="50%" y2="20%"></line>
<line stroke="white" stroke-dasharray="4 4" strokeWidth="1" x1="50%" x2="80%" y1="50%" y2="80%"></line>
</svg>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
            Why Path AGI is different
          </h2>
<p className="text-slate-500 mt-4">
            Traditional sales technology stores data. We create intelligence.
          </p>
</div>
<div className="grid md:grid-cols-2 gap-12 items-center">

<div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 opacity-70">
<h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-6">
              Traditional Tools
            </h3>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-slate-500">
<iconify-icon className="text-slate-400" icon="solar:close-circle-linear"></iconify-icon>
<span>Store current state only</span>
</li>
<li className="flex items-center gap-3 text-slate-500">
<iconify-icon className="text-slate-400" icon="solar:close-circle-linear"></iconify-icon>
<span>Single-system visibility</span>
</li>
<li className="flex items-center gap-3 text-slate-500">
<iconify-icon className="text-slate-400" icon="solar:close-circle-linear"></iconify-icon>
<span>Passive reports and alerts</span>
</li>
<li className="flex items-center gap-3 text-slate-500">
<iconify-icon className="text-slate-400" icon="solar:close-circle-linear"></iconify-icon>
<span>Tribal knowledge silos</span>
</li>
</ul>
</div>

<div className="p-8 rounded-2xl bg-white border border-indigo-100 shadow-xl shadow-indigo-100/50 relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-indigo-500"></div>
<h3 className="text-sm font-semibold text-indigo-600 uppercase tracking-wide mb-6 flex items-center gap-2">
              Path AGI
              <iconify-icon icon="solar:stars-minimalistic-linear"></iconify-icon>
</h3>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-slate-900 font-medium">
<iconify-icon className="text-indigo-600" icon="solar:check-circle-linear"></iconify-icon>
<span>Captures decision history</span>
</li>
<li className="flex items-center gap-3 text-slate-900 font-medium">
<iconify-icon className="text-indigo-600" icon="solar:check-circle-linear"></iconify-icon>
<span>Cross-system context</span>
</li>
<li className="flex items-center gap-3 text-slate-900 font-medium">
<iconify-icon className="text-indigo-600" icon="solar:check-circle-linear"></iconify-icon>
<span>Actionable nudges in moment</span>
</li>
<li className="flex items-center gap-3 text-slate-900 font-medium">
<iconify-icon className="text-indigo-600" icon="solar:check-circle-linear"></iconify-icon>
<span>Institutional memory</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200" id="impact">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-12 text-center">
          Impact on Sales Leadership
        </h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">

<div className="group p-5 bg-white rounded-xl border border-slate-200 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-lg hover:border-emerald-200 transition-all duration-300 flex flex-col h-44">
<div className="flex items-start justify-between mb-4">
<div>
<h3 className="text-sm font-medium text-slate-500">Win Rates</h3>
<div className="text-2xl font-semibold text-slate-900 mt-1">
                  28%
                  <span className="text-xs font-medium text-emerald-500 bg-emerald-50 px-1.5 py-0.5 rounded-full ml-1">
                    +4.2%
                  </span>
</div>
</div>
<div className="p-2 bg-emerald-50 rounded-lg text-emerald-600">
<iconify-icon icon="solar:graph-new-up-linear" width="20"></iconify-icon>
</div>
</div>
<div className="flex-1 relative w-full overflow-hidden rounded-md">
<svg className="absolute inset-0 w-full h-full" preserveaspectratio="none" viewbox="0 0 100 40">
<defs>
<lineargradient id="gradWin" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#10b981" stop-opacity="0.1"></stop>
<stop offset="100%" stop-color="#10b981" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path d="M0 35 C 30 35, 40 25, 60 20 S 80 10, 100 2 V 40 H 0 Z" fill="url(#gradWin)"></path>
<path d="M0 35 C 30 35, 40 25, 60 20 S 80 10, 100 2" fill="none" stroke="#10b981" strokeWidth="2" vector-effect="non-scaling-stroke"></path>
</svg>
</div>
</div>

<div className="group p-5 bg-white rounded-xl border border-slate-200 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-lg hover:border-indigo-200 transition-all duration-300 flex flex-col h-44">
<div className="flex items-start justify-between mb-4">
<div>
<h3 className="text-sm font-medium text-slate-500">
                  Forecast Accuracy
                </h3>
<div className="text-2xl font-semibold text-slate-900 mt-1">
                  94%
                </div>
</div>
<div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
<iconify-icon icon="solar:target-linear" width="20"></iconify-icon>
</div>
</div>
<div className="flex-1 flex flex-col justify-end pb-2">
<div className="flex justify-between text-[10px] text-slate-400 font-medium mb-1.5">
<span>Actual</span>
<span>Target</span>
</div>
<div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden relative">
<div className="absolute right-[6%] top-0 bottom-0 w-0.5 bg-slate-400 z-10"></div>
<div className="h-full bg-indigo-500 w-[94%] rounded-full relative group-hover:bg-indigo-600 transition-colors"></div>
</div>
</div>
</div>

<div className="group p-5 bg-white rounded-xl border border-slate-200 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-lg hover:border-blue-200 transition-all duration-300 flex flex-col h-44">
<div className="flex items-start justify-between mb-4">
<div>
<h3 className="text-sm font-medium text-slate-500">
                  Expansion Rev
                </h3>
<div className="text-2xl font-semibold text-slate-900 mt-1">
                  +18%
                </div>
</div>
<div className="p-2 bg-blue-50 rounded-lg text-blue-600">
<iconify-icon icon="solar:chart-square-linear" width="20"></iconify-icon>
</div>
</div>
<div className="flex-1 flex items-end justify-between gap-1.5 pb-1">
<div className="w-full bg-blue-100 rounded-t-sm h-[30%] group-hover:h-[35%] transition-all duration-500"></div>
<div className="w-full bg-blue-100 rounded-t-sm h-[45%] group-hover:h-[50%] transition-all duration-500 delay-75"></div>
<div className="w-full bg-blue-200 rounded-t-sm h-[40%] group-hover:h-[45%] transition-all duration-500 delay-100"></div>
<div className="w-full bg-blue-300 rounded-t-sm h-[60%] group-hover:h-[65%] transition-all duration-500 delay-150"></div>
<div className="w-full bg-blue-400 rounded-t-sm h-[55%] group-hover:h-[60%] transition-all duration-500 delay-200"></div>
<div className="w-full bg-blue-500 rounded-t-sm h-[85%] group-hover:h-[90%] transition-all duration-500 delay-300"></div>
</div>
</div>

<div className="group p-5 bg-white rounded-xl border border-slate-200 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-lg hover:border-amber-200 transition-all duration-300 flex flex-col h-44">
<div className="flex items-start justify-between mb-4">
<div>
<h3 className="text-sm font-medium text-slate-500">
                  Churn Detection
                </h3>
<div className="text-2xl font-semibold text-slate-900 mt-1">
                  Active
                </div>
</div>
<div className="p-2 bg-amber-50 rounded-lg text-amber-600">
<iconify-icon icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
</div>
<div className="flex-1 relative w-full pt-2">
<svg className="w-full h-full overflow-visible" viewbox="0 0 100 30">
<path d="M0 15 L 20 15 L 30 5 L 40 15 L 60 15 L 70 5 L 80 15 L 100 15" fill="none" stroke="#cbd5e1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<circle className="fill-amber-500 animate-pulse" cx="30" cy="5" r="2.5"></circle>
<circle className="fill-amber-500 animate-pulse" cx="70" cy="5" r="2.5" style={{animationDelay: '1s'}}></circle>
<text className="font-sans font-medium" fill="#64748b" fontSize="8" text-anchor="middle" x="30" y="28">
                  Saved
                </text>
<text className="font-sans font-medium" fill="#64748b" fontSize="8" text-anchor="middle" x="70" y="28">
                  Saved
                </text>
</svg>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-200">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-12 text-center">
          What this looks like in practice
        </h2>
<div className="space-y-12 relative before:absolute before:inset-0 before:ml-6 before:md:ml-[50%] before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">

<div className="relative flex flex-col md:flex-row gap-8 items-center">
<div className="md:w-1/2 md:text-right order-2 md:order-1 pl-12 md:pl-0 md:pr-12">
<h3 className="text-lg font-semibold text-slate-900 mb-2">
                Deal Optimization
              </h3>
<p className="text-sm text-slate-500">
                A deal looks healthy, but cross-system signals suggest risk.
                Path AGI nudges escalation before momentum is lost.
              </p>
</div>
<div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-2 border-indigo-500 z-10 order-1"></div>
<div className="md:w-1/2 order-3 pl-12 md:pl-12">
<div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 rounded-md shadow-sm text-xs font-medium text-amber-600">
<iconify-icon icon="solar:bell-bing-linear"></iconify-icon>
                Risk Detected: Activity Gap
              </div>
</div>
</div>

<div className="relative flex flex-col md:flex-row gap-8 items-center">
<div className="md:w-1/2 md:text-right order-2 md:order-1 pl-12 md:pl-0 md:pr-12">
<div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 rounded-md shadow-sm text-xs font-medium text-green-600 md:ml-auto">
<iconify-icon icon="solar:stars-minimalistic-linear"></iconify-icon>
                Opportunity: Expansion
              </div>
</div>
<div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-2 border-indigo-500 z-10 order-1"></div>
<div className="md:w-1/2 order-3 pl-12 md:pl-12">
<h3 className="text-lg font-semibold text-slate-900 mb-2">
                Renewal &amp; Expansion
              </h3>
<p className="text-sm text-slate-500">
                A routine renewal hides an expansion opportunity. Path AGI
                nudges early outreach based on historical success.
              </p>
</div>
</div>

<div className="relative flex flex-col md:flex-row gap-8 items-center">
<div className="md:w-1/2 md:text-right order-2 md:order-1 pl-12 md:pl-0 md:pr-12">
<h3 className="text-lg font-semibold text-slate-900 mb-2">
                Channel Performance
              </h3>
<p className="text-sm text-slate-500">
                A partner consistently delays deals. Path AGI detects the
                pattern and nudges intervention early.
              </p>
</div>
<div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-2 border-indigo-500 z-10 order-1"></div>
<div className="md:w-1/2 order-3 pl-12 md:pl-12">
<div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 rounded-md shadow-sm text-xs font-medium text-indigo-600">
<iconify-icon icon="solar:user-hand-up-linear"></iconify-icon>
                Action: Partner Review
              </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200" id="enterprise">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">
            Built for enterprise scale
          </h2>
<p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Security, compliance, and control are foundational. We integrate
            seamlessly while ensuring you maintain complete oversight of the
            autonomous workforce.
          </p>
</div>
<div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

<div className="lg:w-1/3 flex flex-col gap-3">

<button className="ent-tab group text-left p-5 rounded-xl border border-transparent hover:bg-white hover:border-slate-200 hover:shadow-sm transition-all duration-200 outline-none data-[active=true]:bg-white data-[active=true]:border-slate-200 data-[active=true]:shadow-md ring-offset-2 focus-visible:ring-2 focus-visible:ring-indigo-500" data-active="true" onclick="window.updateEnterpriseTab(0)">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center group-data-[active=true]:bg-indigo-600 group-data-[active=true]:text-white transition-colors">
<iconify-icon icon="solar:shield-keyhole-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-base font-semibold text-slate-900 group-data-[active=true]:text-indigo-900">
                    Read-only Integration
                  </h3>
<p className="text-sm text-slate-500 mt-0.5">
                    Zero-write deployment
                  </p>
</div>
</div>
</button>

<button className="ent-tab group text-left p-5 rounded-xl border border-transparent hover:bg-white hover:border-slate-200 hover:shadow-sm transition-all duration-200 outline-none data-[active=true]:bg-white data-[active=true]:border-slate-200 data-[active=true]:shadow-md ring-offset-2 focus-visible:ring-2 focus-visible:ring-indigo-500" data-active="false" onclick="window.updateEnterpriseTab(1)">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center group-data-[active=true]:bg-indigo-600 group-data-[active=true]:text-white transition-colors">
<iconify-icon icon="solar:user-check-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-base font-semibold text-slate-900 group-data-[active=true]:text-indigo-900">
                    Human-in-the-loop
                  </h3>
<p className="text-sm text-slate-500 mt-0.5">
                    Oversight &amp; approvals
                  </p>
</div>
</div>
</button>

<button className="ent-tab group text-left p-5 rounded-xl border border-transparent hover:bg-white hover:border-slate-200 hover:shadow-sm transition-all duration-200 outline-none data-[active=true]:bg-white data-[active=true]:border-slate-200 data-[active=true]:shadow-md ring-offset-2 focus-visible:ring-2 focus-visible:ring-indigo-500" data-active="false" onclick="window.updateEnterpriseTab(2)">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center group-data-[active=true]:bg-indigo-600 group-data-[active=true]:text-white transition-colors">
<iconify-icon icon="solar:document-text-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-base font-semibold text-slate-900 group-data-[active=true]:text-indigo-900">
                    Full Audit Trail
                  </h3>
<p className="text-sm text-slate-500 mt-0.5">
                    Compliance logging
                  </p>
</div>
</div>
</button>

<button className="ent-tab group text-left p-5 rounded-xl border border-transparent hover:bg-white hover:border-slate-200 hover:shadow-sm transition-all duration-200 outline-none data-[active=true]:bg-white data-[active=true]:border-slate-200 data-[active=true]:shadow-md ring-offset-2 focus-visible:ring-2 focus-visible:ring-indigo-500" data-active="false" onclick="window.updateEnterpriseTab(3)">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center group-data-[active=true]:bg-indigo-600 group-data-[active=true]:text-white transition-colors">
<iconify-icon icon="solar:settings-minimalistic-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-base font-semibold text-slate-900 group-data-[active=true]:text-indigo-900">
                    Configurable Governance
                  </h3>
<p className="text-sm text-slate-500 mt-0.5">RBAC &amp; Policy</p>
</div>
</div>
</button>
</div>

<div className="lg:w-2/3 bg-white rounded-2xl border border-slate-200 shadow-[0_0_40px_-10px_rgba(0,0,0,0.05)] relative min-h-[500px] overflow-hidden">

<div className="ent-panel absolute inset-0 p-8 md:p-10 transition-all duration-500 ease-in-out opacity-100 translate-x-0 z-10" data-index="0">
<div className="flex flex-col h-full">
<div className="flex items-start justify-between mb-6">
<div className="p-3 bg-indigo-50 rounded-xl text-indigo-600">
<iconify-icon icon="solar:shield-keyhole-bold-duotone" width="32"></iconify-icon>
</div>
<div className="flex items-center gap-2 text-xs font-medium text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">
<iconify-icon className="text-emerald-500" icon="solar:verified-check-bold"></iconify-icon>
                    SOC2 Type II Compliant
                  </div>
</div>
<h3 className="text-2xl font-semibold text-slate-900 mb-4">
                  Secure, Read-only Integration
                </h3>
<p className="text-slate-500 mb-8 leading-relaxed text-lg">
                  Path AGI connects to your CRM and communication layers via
                  read-only APIs initially. We do not modify data until specific
                  "write" permissions are explicitly granted for autonomous
                  agents. All data is encrypted at rest and in transit.
                </p>
<div className="grid sm:grid-cols-2 gap-4 mt-auto">
<div className="flex items-center gap-3 p-4 rounded-lg bg-slate-50 border border-slate-100">
<div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-indigo-600 shrink-0 shadow-sm">
<iconify-icon icon="solar:lock-password-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-slate-900">
                        AES-256 Encryption
                      </div>
<div className="text-xs text-slate-500">
                        Enterprise grade security
                      </div>
</div>
</div>
<div className="flex items-center gap-3 p-4 rounded-lg bg-slate-50 border border-slate-100">
<div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-indigo-600 shrink-0 shadow-sm">
<iconify-icon icon="solar:server-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-slate-900">
                        Private VPC
                      </div>
<div className="text-xs text-slate-500">
                        Isolated deployment
                      </div>
</div>
</div>
<div className="flex items-center gap-3 p-4 rounded-lg bg-slate-50 border border-slate-100">
<div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-indigo-600 shrink-0 shadow-sm">
<iconify-icon icon="solar:trash-bin-trash-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-slate-900">
                        Zero-Retention
                      </div>
<div className="text-xs text-slate-500">
                        Optional data wipe
                      </div>
</div>
</div>
<div className="flex items-center gap-3 p-4 rounded-lg bg-slate-50 border border-slate-100">
<div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-indigo-600 shrink-0 shadow-sm">
<iconify-icon icon="solar:key-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-slate-900">
                        SSO &amp; SAML
                      </div>
<div className="text-xs text-slate-500">
                        Okta, Azure AD, Google
                      </div>
</div>
</div>
</div>
</div>
</div>

<div className="ent-panel absolute inset-0 p-8 md:p-10 transition-all duration-500 ease-in-out opacity-0 translate-x-4 pointer-events-none" data-index="1">
<div className="flex flex-col h-full">
<div className="flex items-start justify-between mb-6">
<div className="p-3 bg-indigo-50 rounded-xl text-indigo-600">
<iconify-icon icon="solar:user-hand-up-bold-duotone" width="32"></iconify-icon>
</div>
</div>
<h3 className="text-2xl font-semibold text-slate-900 mb-4">
                  Human-in-the-loop Workflows
                </h3>
<p className="text-slate-500 mb-8 leading-relaxed text-lg">
                  Agents propose actions; humans approve them. You configure
                  confidence thresholds where high-impact decisions always
                  require manual sign-off, while routine tasks can be fully
                  automated.
                </p>
<div className="space-y-4 mt-auto">
<div className="p-4 bg-slate-50 rounded-lg border border-slate-100 flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-emerald-500 shadow-sm border border-slate-100">
<iconify-icon icon="solar:check-circle-bold" width="20"></iconify-icon>
</div>
<div className="flex-1">
<div className="text-sm font-semibold text-slate-900">
                        Approval Queues
                      </div>
<div className="text-xs text-slate-500">
                        Review agent suggestions in Slack or Teams before they
                        go live.
                      </div>
</div>
</div>
<div className="p-4 bg-slate-50 rounded-lg border border-slate-100 flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-amber-500 shadow-sm border border-slate-100">
<iconify-icon icon="solar:tuning-2-bold" width="20"></iconify-icon>
</div>
<div className="flex-1">
<div className="text-sm font-semibold text-slate-900">
                        Confidence Thresholds
                      </div>
<div className="text-xs text-slate-500">
                        Set automation rules: "If confidence &lt; 90%, ask for
                        approval."
                      </div>
</div>
</div>
<div className="p-4 bg-slate-50 rounded-lg border border-slate-100 flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-blue-500 shadow-sm border border-slate-100">
<iconify-icon icon="solar:history-bold" width="20"></iconify-icon>
</div>
<div className="flex-1">
<div className="text-sm font-semibold text-slate-900">
                        Override Mechanism
                      </div>
<div className="text-xs text-slate-500">
                        Users can modify or reject agent drafts instantly.
                      </div>
</div>
</div>
</div>
</div>
</div>

<div className="ent-panel absolute inset-0 p-8 md:p-10 transition-all duration-500 ease-in-out opacity-0 translate-x-4 pointer-events-none" data-index="2">
<div className="flex flex-col h-full">
<div className="flex items-start justify-between mb-6">
<div className="p-3 bg-indigo-50 rounded-xl text-indigo-600">
<iconify-icon icon="solar:document-text-bold-duotone" width="32"></iconify-icon>
</div>
</div>
<h3 className="text-2xl font-semibold text-slate-900 mb-4">
                  Full Audit Trail &amp; Explainability
                </h3>
<p className="text-slate-500 mb-8 leading-relaxed text-lg">
                  Every suggestion comes with a "Why". We log the specific
                  signals, historical context, and reasoning logic behind every
                  nudge. This creates a permanent record for compliance and
                  sales coaching.
                </p>
<div className="bg-slate-900 rounded-lg p-5 font-mono text-xs text-slate-300 overflow-hidden shadow-inner mt-auto border border-slate-800">
<div className="flex gap-2 mb-3 border-b border-slate-700 pb-2">
<span className="text-emerald-400">GET</span>
                    /api/v1/decisions/log
                  </div>
<div className="space-y-1.5 opacity-80">
<div>
<span className="text-indigo-400">"timestamp"</span>
                      :
                      <span className="text-amber-300">"2024-03-15T10:42:00Z"</span>
                      ,
                    </div>
<div>
<span className="text-indigo-400">"agent_id"</span>
                      :
                      <span className="text-amber-300">"pricing_optimizer_v2"</span>
                      ,
                    </div>
<div>
<span className="text-indigo-400">"action"</span>
                      :
                      <span className="text-amber-300">"suggest_discount"</span>
                      ,
                    </div>
<div>
<span className="text-indigo-400">"reasoning"</span>
                      : {
                    </div>
<div className="pl-4">
<span className="text-indigo-400">"competitor_signal"</span>
                      :
                      <span className="text-blue-300">true</span>
                      ,
                    </div>
<div className="pl-4">
<span className="text-indigo-400">"budget_authority"</span>
                      :
                      <span className="text-blue-300">"verified"</span>
</div>
<div>},</div>
<div>
<span className="text-indigo-400">"human_approver"</span>
                      :
                      <span className="text-amber-300">"sarah.j@company.com"</span>
</div>
</div>
</div>
</div>
</div>

<div className="ent-panel absolute inset-0 p-8 md:p-10 transition-all duration-500 ease-in-out opacity-0 translate-x-4 pointer-events-none" data-index="3">
<div className="flex flex-col h-full">
<div className="flex items-start justify-between mb-6">
<div className="p-3 bg-indigo-50 rounded-xl text-indigo-600">
<iconify-icon icon="solar:settings-minimalistic-bold-duotone" width="32"></iconify-icon>
</div>
</div>
<h3 className="text-2xl font-semibold text-slate-900 mb-4">
                  Granular Governance &amp; RBAC
                </h3>
<p className="text-slate-500 mb-8 leading-relaxed text-lg">
                  Define strict boundaries for AI agents. Set role-based access
                  controls to limit which data agents can access and what
                  actions they can propose based on user seniority or territory.
                </p>
<div className="grid gap-4 mt-auto">
<div className="flex items-start gap-4 p-4 border border-slate-200 rounded-lg hover:border-indigo-200 transition-colors bg-slate-50/50">
<div className="mt-1 text-indigo-600">
<iconify-icon icon="solar:users-group-rounded-bold"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-slate-900">
                        Role-Based Access
                      </div>
<div className="text-xs text-slate-500 mt-1">
                        Map agents to existing IdP roles (Admin, Manager, Rep).
                      </div>
</div>
</div>
<div className="flex items-start gap-4 p-4 border border-slate-200 rounded-lg hover:border-indigo-200 transition-colors bg-slate-50/50">
<div className="mt-1 text-indigo-600">
<iconify-icon icon="solar:map-point-bold"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-slate-900">
                        Territory Fencing
                      </div>
<div className="text-xs text-slate-500 mt-1">
                        Restrict data visibility by region or business unit.
                      </div>
</div>
</div>
<div className="flex items-start gap-4 p-4 border border-slate-200 rounded-lg hover:border-indigo-200 transition-colors bg-slate-50/50">
<div className="mt-1 text-indigo-600">
<iconify-icon icon="solar:eye-closed-bold"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-slate-900">
                        PII Redaction
                      </div>
<div className="text-xs text-slate-500 mt-1">
                        Auto-mask sensitive fields before processing.
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

<section className="py-32 bg-white relative overflow-hidden" id="demo">
<div className="absolute inset-0 bg-slate-50 opacity-50 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-50/50 via-slate-50 to-slate-50"></div>
<div className="max-w-3xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-slate-900 mb-8">
          See how Path AGI would guide decisions in your organization
        </h2>
<p className="text-lg text-slate-500 mb-10">
          We’ll walk through real scenarios—not slides.
        </p>
<form className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto mb-12">
<input className="px-4 py-3 bg-white border border-slate-300 rounded-full text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 w-full transition-all shadow-sm" placeholder="work@email.com" type="email"/>
<button className="btn-glow-border group w-full sm:w-auto shadow-lg shadow-indigo-500/20" type="submit">
<div className="btn-content px-6 py-3 flex items-center justify-center text-white">
<span className="font-medium whitespace-nowrap">Request Demo</span>
</div>
</button>
</form>
<div className="pt-8 border-t border-slate-100 flex items-center justify-center gap-6 text-slate-400">
<div className="flex items-center gap-2">
<iconify-icon icon="solar:lock-password-linear" width="16"></iconify-icon>
<span className="text-xs">SOC2 Type II Compliant</span>
</div>
<div className="w-1 h-1 bg-slate-300 rounded-full"></div>
<div className="flex items-center gap-2">
<iconify-icon icon="solar:shield-check-linear" width="16"></iconify-icon>
<span className="text-xs">Enterprise Ready</span>
</div>
</div>
</div>
</section>
<footer className="bg-white py-12 border-t border-slate-100">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-sm font-semibold tracking-tight text-slate-900 flex items-center gap-2">
<div className="w-5 h-5 bg-slate-900 rounded-full flex items-center justify-center text-white text-[10px]">
<iconify-icon icon="solar:graph-new-linear"></iconify-icon>
</div>
          PATH AGI
        </div>
<div className="text-xs text-slate-400">
          © 2024 Path AGI. All rights reserved.
        </div>
</div>
</footer>

    </>
  );
}
