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



        // Data for tabs
        const workflows = {
            handoffs: {
                title: "Automated Design-to-Dev Handoffs",
                desc: "Stop manually updating tickets. SyncPilot listens to Figma status changes and automatically provisions Jira epics with assets, specs, and requirements attached.",
                icon: "solar:transfer-horizontal-linear",
                subtitle: "Seamless Transition",
                checks: ["Auto-sync assets from Figma", "Contextual comment preservation"]
            },
            sla: {
                title: "Real-time SLA Tracking",
                desc: "Monitor pull request velocity and review times. Get alerts before you breach internal agreements, ensuring code review never becomes the bottleneck.",
                icon: "solar:clock-circle-linear",
                subtitle: "Performance Metrics",
                checks: ["Breach alerts via Slack", "Review time analytics"]
            },
            intake: {
                title: "Centralized Request Intake",
                desc: "Standardize how product requirements enter the funnel. Route requests from Notion, Slack, or email into a structured backlog with auto-prioritization.",
                icon: "solar:inbox-in-linear",
                subtitle: "Unified Backlog",
                checks: ["Auto-tagging & routing", "Duplicate detection"]
            },
            reporting: {
                title: "Executive Reporting",
                desc: "Generate beautiful, data-driven reports for leadership. Visualize shipping velocity, bug rates, and resource allocation without touching a spreadsheet.",
                icon: "solar:chart-square-linear",
                subtitle: "Data Insights",
                checks: ["One-click PDF export", "Custom dashboard widgets"]
            }
        };

        function switchTab(key) {
            // Reset Buttons
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('text-white', 'bg-white/10', 'border-white/5', 'shadow-sm');
                btn.classList.add('text-slate-400', 'border-transparent');
            });

            // Activate Button
            const activeBtn = document.getElementById(`tab-${key}`);
            activeBtn.classList.remove('text-slate-400', 'border-transparent');
            activeBtn.classList.add('text-white', 'bg-white/10', 'border-white/5', 'shadow-sm');

            // Update Content with simple animation
            const content = document.getElementById('content-area');
            const data = workflows[key];

            // In a real app, I'd use a smoother transition library, but for vanilla JS:
            content.classList.remove('animate-fade-in');
            void content.offsetWidth; // trigger reflow
            content.innerHTML = `
                <div class="flex-1 space-y-6 animate-fade-in">
                    <div class="inline-flex items-center gap-2 text-indigo-400 text-xs font-semibold tracking-wide uppercase">
                        <iconify-icon icon="${data.icon}" width="16"></iconify-icon> ${data.subtitle}
                    </div>
                    <h3 class="text-3xl font-medium text-white tracking-tight">${data.title}</h3>
                    <p class="text-lg text-slate-400">${data.desc}</p>
                    <ul class="space-y-3 pt-4">
                        ${data.checks.map(c => `
                        <li class="flex items-center gap-3 text-sm text-slate-300">
                            <iconify-icon icon="solar:check-circle-linear" class="text-indigo-400"></iconify-icon>
                            ${c}
                        </li>`).join('')}
                    </ul>
                </div>
                <div class="flex-1 w-full">
                     <div class="aspect-square md:aspect-[4/3] bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg border border-white/5 relative overflow-hidden shadow-2xl animate-fade-in">
                        <div class="absolute inset-0 flex items-center justify-center">
                            <div class="text-center p-8 border border-white/5 bg-white/[0.02] rounded-xl backdrop-blur-sm">
                                <iconify-icon icon="${data.icon}" width="48" class="text-indigo-400 mb-4 mx-auto"></iconify-icon>
                                <div class="text-xs text-slate-500 font-mono">MODULE: ${key.toUpperCase()}</div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            content.classList.add('animate-fade-in');
        }

        function toggleFaq(btn) {
            const content = btn.nextElementSibling;
            const icon = btn.querySelector('iconify-icon');
            
            if (content.classList.contains('hidden')) {
                content.classList.remove('hidden');
                icon.style.transform = 'rotate(180deg)';
            } else {
                content.classList.add('hidden');
                icon.style.transform = 'rotate(0deg)';
            }
        }
        
        // Add simple fade animation
        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
            .animate-fade-in { animation: fadeIn 0.4s ease-out forwards; }
        `;
        document.head.appendChild(style);
    
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-gradient-to-tr from-indigo-500 to-violet-500 rounded-md flex items-center justify-center text-white text-xs font-semibold">S</div>
<span className="text-white font-medium tracking-tight">SyncPilot</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#workflow">Workflow</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
<a className="hover:text-white transition-colors" href="#customers">Customers</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium hover:text-white transition-colors" href="#">Log in</a>
<a className="text-sm font-medium bg-white text-slate-950 px-4 py-2 rounded-full hover:bg-slate-200 transition-colors" href="#">Book a demo</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 overflow-hidden">
<div className="absolute inset-0 glow-bg pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-indigo-300 mb-8">
<span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
                v2.0 is now live: Enhanced Analytics
            </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-white tracking-tight leading-[1.1] mb-6">
                Orchestrate your product <br/>
<span className="gradient-text">operations with precision.</span>
</h1>
<p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-slate-400 font-light">
                SyncPilot unifies engineering handoffs, SLA tracking, and request intake into a single, intelligent control plane for high-velocity teams.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
<button className="w-full sm:w-auto px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-medium transition-all shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2">
                    Book a demo
                    <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
<button className="w-full sm:w-auto px-6 py-3 border border-white/10 hover:bg-white/5 text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2">
                    View documentation
                    <iconify-icon icon="solar:file-text-linear" width="18"></iconify-icon>
</button>
</div>

<div className="relative max-w-5xl mx-auto">
<div className="glass-card rounded-xl border border-white/10 p-2 md:p-4 overflow-hidden shadow-2xl shadow-indigo-500/10">
<div className="bg-slate-900 rounded-lg border border-white/5 overflow-hidden aspect-[16/9] md:aspect-[2/1] relative flex">

<div className="w-16 md:w-48 border-r border-white/5 bg-slate-900/50 flex flex-col p-4 hidden md:flex">
<div className="space-y-4 mt-2">
<div className="h-2 w-20 bg-white/10 rounded"></div>
<div className="h-2 w-16 bg-white/10 rounded opacity-60"></div>
<div className="h-2 w-24 bg-white/10 rounded opacity-60"></div>
<div className="h-2 w-12 bg-white/10 rounded opacity-60"></div>
</div>
<div className="mt-auto space-y-3">
<div className="h-8 w-full bg-indigo-500/10 border border-indigo-500/20 rounded-md flex items-center px-2">
<div className="h-2 w-2 bg-indigo-400 rounded-full mr-2"></div>
<div className="h-1.5 w-12 bg-indigo-400/50 rounded"></div>
</div>
</div>
</div>

<div className="flex-1 p-6 md:p-8 flex flex-col">
<div className="flex justify-between items-center mb-8">
<div>
<div className="h-3 w-32 bg-white/20 rounded mb-2"></div>
<div className="h-2 w-48 bg-white/10 rounded"></div>
</div>
<div className="flex gap-2">
<div className="h-8 w-8 rounded-full bg-white/5 border border-white/10"></div>
<div className="h-8 w-24 rounded-md bg-indigo-600/20 border border-indigo-500/30"></div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
<div className="bg-white/5 rounded-lg p-4 border border-white/5">
<div className="h-2 w-16 bg-white/20 rounded mb-4"></div>
<div className="h-6 w-12 bg-indigo-400 rounded mb-2"></div>
<div className="h-1.5 w-full bg-white/5 rounded overflow-hidden">
<div className="h-full w-3/4 bg-indigo-500"></div>
</div>
</div>
<div className="bg-white/5 rounded-lg p-4 border border-white/5">
<div className="h-2 w-16 bg-white/20 rounded mb-4"></div>
<div className="h-6 w-12 bg-emerald-400 rounded mb-2"></div>
<div className="h-1.5 w-full bg-white/5 rounded overflow-hidden">
<div className="h-full w-1/2 bg-emerald-500"></div>
</div>
</div>
<div className="bg-white/5 rounded-lg p-4 border border-white/5">
<div className="h-2 w-16 bg-white/20 rounded mb-4"></div>
<div className="h-6 w-12 bg-orange-400 rounded mb-2"></div>
<div className="h-1.5 w-full bg-white/5 rounded overflow-hidden">
<div className="h-full w-2/3 bg-orange-500"></div>
</div>
</div>
</div>

<div className="bg-white/5 rounded-lg border border-white/5 flex-1 p-4">
<div className="flex justify-between items-center mb-4">
<div className="h-2 w-20 bg-white/20 rounded"></div>
<div className="h-2 w-4 bg-white/10 rounded"></div>
</div>
<div className="space-y-3">
<div className="flex justify-between items-center py-2 border-b border-white/5">
<div className="h-2 w-32 bg-white/10 rounded"></div>
<div className="h-2 w-12 bg-green-500/50 rounded"></div>
</div>
<div className="flex justify-between items-center py-2 border-b border-white/5">
<div className="h-2 w-24 bg-white/10 rounded"></div>
<div className="h-2 w-12 bg-yellow-500/50 rounded"></div>
</div>
<div className="flex justify-between items-center py-2 border-b border-white/5">
<div className="h-2 w-40 bg-white/10 rounded"></div>
<div className="h-2 w-12 bg-green-500/50 rounded"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-sm font-medium text-slate-500 mb-6">TRUSTED BY ENGINEERING &amp; PRODUCT TEAMS AT</p>
<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 grayscale">

<div className="flex items-center gap-2"><iconify-icon icon="solar:atom-bold-duotone" width="24"></iconify-icon><span className="font-bold text-lg tracking-tight">ACME</span></div>
<div className="flex items-center gap-2"><iconify-icon icon="solar:box-bold-duotone" width="24"></iconify-icon><span className="font-bold text-lg tracking-tight">Vortex</span></div>
<div className="flex items-center gap-2"><iconify-icon icon="solar:infinity-bold-duotone" width="24"></iconify-icon><span className="font-bold text-lg tracking-tight">Infinite</span></div>
<div className="flex items-center gap-2"><iconify-icon icon="solar:layers-bold-duotone" width="24"></iconify-icon><span className="font-bold text-lg tracking-tight">Layer</span></div>
<div className="flex items-center gap-2"><iconify-icon icon="solar:command-bold-duotone" width="24"></iconify-icon><span className="font-bold text-lg tracking-tight">Cmd+</span></div>
</div>
</div>
</section>

<section className="py-24 bg-slate-950" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-6 rounded-2xl border border-white/5 hover:border-white/10 bg-slate-900/20 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:bolt-linear" width="20"></iconify-icon>
</div>
<h3 className="text-white text-lg font-medium mb-2 tracking-tight">Lightning Fast Sync</h3>
<p className="text-sm leading-relaxed">
                        Real-time bi-directional sync between engineering execution and product planning tools. No stale data, ever.
                    </p>
</div>

<div className="p-6 rounded-2xl border border-white/5 hover:border-white/10 bg-slate-900/20 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<h3 className="text-white text-lg font-medium mb-2 tracking-tight">Enterprise Compliance</h3>
<p className="text-sm leading-relaxed">
                        SOC2 Type II ready logs, automated audit trails, and granular RBAC to keep your operations secure and compliant.
                    </p>
</div>

<div className="p-6 rounded-2xl border border-white/5 hover:border-white/10 bg-slate-900/20 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:chart-2-linear" width="20"></iconify-icon>
</div>
<h3 className="text-white text-lg font-medium mb-2 tracking-tight">Predictive Velocity</h3>
<p className="text-sm leading-relaxed">
                        Advanced forecasting algorithms that analyze past sprint performance to predict shipping dates with 95% accuracy.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="workflow">
<div className="absolute inset-0 bg-slate-950"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Built for every stage of delivery</h2>
<p className="text-slate-400">Switch contexts without switching tools.</p>
</div>

<div className="flex justify-center mb-12">
<div className="inline-flex bg-white/5 p-1 rounded-full border border-white/10 overflow-x-auto no-scrollbar max-w-full">
<button className="tab-btn px-6 py-2 rounded-full text-sm font-medium text-white bg-white/10 border border-white/5 shadow-sm transition-all whitespace-nowrap" id="tab-handoffs" onclick="switchTab('handoffs')">Handoffs</button>
<button className="tab-btn px-6 py-2 rounded-full text-sm font-medium text-slate-400 hover:text-white transition-all whitespace-nowrap" id="tab-sla" onclick="switchTab('sla')">SLA Tracking</button>
<button className="tab-btn px-6 py-2 rounded-full text-sm font-medium text-slate-400 hover:text-white transition-all whitespace-nowrap" id="tab-intake" onclick="switchTab('intake')">Request Intake</button>
<button className="tab-btn px-6 py-2 rounded-full text-sm font-medium text-slate-400 hover:text-white transition-all whitespace-nowrap" id="tab-reporting" onclick="switchTab('reporting')">Reporting</button>
</div>
</div>

<div className="glass-card rounded-2xl border border-white/10 p-1 md:p-2">
<div className="bg-slate-900/80 rounded-xl p-8 md:p-12 min-h-[400px] flex flex-col md:flex-row items-center gap-12" id="content-area">

<div className="flex-1 space-y-6 animate-fade-in">
<div className="inline-flex items-center gap-2 text-indigo-400 text-xs font-semibold tracking-wide uppercase">
<iconify-icon icon="solar:transfer-horizontal-linear" width="16"></iconify-icon> Seamless Transition
                        </div>
<h3 className="text-3xl font-medium text-white tracking-tight">Automated Design-to-Dev Handoffs</h3>
<p className="text-lg text-slate-400">Stop manually updating tickets. SyncPilot listens to Figma status changes and automatically provisions Jira epics with assets, specs, and requirements attached.</p>
<ul className="space-y-3 pt-4">
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon>
                                Auto-sync assets from Figma
                            </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon>
                                Contextual comment preservation
                            </li>
</ul>
</div>
<div className="flex-1 w-full relative group">

<div className="aspect-square md:aspect-[4/3] bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg border border-white/5 relative overflow-hidden shadow-2xl">

<div className="absolute top-6 left-6 right-6 bottom-6 border border-dashed border-white/10 rounded-lg flex items-center justify-center">
<div className="text-center">
<div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-4 text-indigo-400">
<iconify-icon icon="solar:figma-linear" width="32"></iconify-icon>
</div>
<div className="h-1 w-20 bg-gradient-to-r from-transparent via-indigo-500 to-transparent mx-auto mb-4 animate-pulse"></div>
<div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto text-blue-400">
<iconify-icon icon="solar:code-circle-linear" width="32"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="md:col-span-2 glass-card rounded-2xl p-8 border border-white/10 flex flex-col justify-between hover:bg-white/[0.02] transition-colors">
<div className="mb-8">
<div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 mb-4">
<iconify-icon icon="solar:layers-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Full Stack Visibility</h3>
<p className="text-slate-400 max-w-md">Connect your entire toolchain from design to deployment. We support 50+ integrations out of the box.</p>
</div>
<div className="flex gap-3 overflow-hidden opacity-50">
<div className="bg-white/5 px-3 py-1 rounded text-xs">Jira</div>
<div className="bg-white/5 px-3 py-1 rounded text-xs">GitHub</div>
<div className="bg-white/5 px-3 py-1 rounded text-xs">Linear</div>
<div className="bg-white/5 px-3 py-1 rounded text-xs">Notion</div>
<div className="bg-white/5 px-3 py-1 rounded text-xs">Slack</div>
</div>
</div>

<div className="glass-card rounded-2xl p-8 border border-white/10 hover:bg-white/[0.02] transition-colors">
<div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 mb-4">
<iconify-icon icon="solar:bell-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Smart Alerts</h3>
<p className="text-slate-400 text-sm">Get notified only when SLAs are at risk. Reduce noise by 80%.</p>
</div>

<div className="glass-card rounded-2xl p-8 border border-white/10 hover:bg-white/[0.02] transition-colors">
<div className="w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center text-pink-400 mb-4">
<iconify-icon icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Team Capacity</h3>
<p className="text-slate-400 text-sm">Visualize load balancing across squads in real-time.</p>
</div>

<div className="md:col-span-2 glass-card rounded-2xl p-8 border border-white/10 hover:bg-white/[0.02] transition-colors flex flex-col md:flex-row items-center gap-8">
<div className="flex-1">
<div className="inline-block px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-xs font-medium mb-4">New Module</div>
<h3 className="text-xl font-medium text-white mb-2">Cost Analytics</h3>
<p className="text-slate-400 text-sm">Understand the engineering cost per feature. Allocate budget based on actual velocity and complexity metrics.</p>
</div>
<div className="w-full md:w-1/3 h-24 bg-gradient-to-r from-slate-800 to-slate-900 rounded-lg border border-white/5 flex items-end p-2 gap-1">
<div className="w-1/4 h-[40%] bg-indigo-500/50 rounded-sm"></div>
<div className="w-1/4 h-[70%] bg-indigo-500/70 rounded-sm"></div>
<div className="w-1/4 h-[50%] bg-indigo-500/50 rounded-sm"></div>
<div className="w-1/4 h-[90%] bg-indigo-500 rounded-sm"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="pricing">
<div className="absolute inset-0 bg-slate-950"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<h2 className="text-3xl font-medium text-white text-center mb-16 tracking-tight">Simple pricing for scaling teams</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 flex flex-col">
<h3 className="text-lg font-medium text-white">Team Bundle</h3>
<p className="text-slate-400 text-sm mb-6">For startups and growing squads.</p>
<div className="text-3xl font-medium text-white mb-6">$49<span className="text-lg text-slate-500 font-normal">/mo per seat</span></div>
<button className="w-full py-2 rounded-lg border border-white/20 text-white font-medium hover:bg-white/5 transition-colors mb-8">Start free trial</button>
<ul className="space-y-4 text-sm text-slate-300 flex-1">
<li className="flex gap-3"><iconify-icon className="text-indigo-400 text-lg" icon="solar:check-read-linear"></iconify-icon> Unlimited Workflows</li>
<li className="flex gap-3"><iconify-icon className="text-indigo-400 text-lg" icon="solar:check-read-linear"></iconify-icon> 30-day History</li>
<li className="flex gap-3"><iconify-icon className="text-indigo-400 text-lg" icon="solar:check-read-linear"></iconify-icon> Slack Integration</li>
<li className="flex gap-3"><iconify-icon className="text-indigo-400 text-lg" icon="solar:check-read-linear"></iconify-icon> Standard Support</li>
</ul>
</div>

<div className="rounded-2xl border border-indigo-500/30 bg-gradient-to-b from-indigo-900/10 to-transparent p-8 flex flex-col relative overflow-hidden">
<div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500"></div>
<div className="flex justify-between items-start mb-1">
<h3 className="text-lg font-medium text-white">Org Bundle</h3>
<span className="px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-500 text-white uppercase tracking-wider">Popular</span>
</div>
<p className="text-slate-400 text-sm mb-6">For large engineering organizations.</p>
<div className="text-3xl font-medium text-white mb-6">$99<span className="text-lg text-slate-500 font-normal">/mo per seat</span></div>
<button className="w-full py-2 rounded-lg bg-white text-slate-950 font-medium hover:bg-slate-200 transition-colors mb-8">Get started</button>
<ul className="space-y-4 text-sm text-slate-300 flex-1">
<li className="flex gap-3"><iconify-icon className="text-indigo-400 text-lg" icon="solar:check-read-linear"></iconify-icon> Everything in Team</li>
<li className="flex gap-3"><iconify-icon className="text-indigo-400 text-lg" icon="solar:check-read-linear"></iconify-icon> Unlimited History</li>
<li className="flex gap-3"><iconify-icon className="text-indigo-400 text-lg" icon="solar:check-read-linear"></iconify-icon> Advanced Cost Analytics</li>
<li className="flex gap-3"><iconify-icon className="text-indigo-400 text-lg" icon="solar:check-read-linear"></iconify-icon> SSO &amp; SAML</li>
<li className="flex gap-3"><iconify-icon className="text-indigo-400 text-lg" icon="solar:check-read-linear"></iconify-icon> Dedicated Success Manager</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-2xl font-medium text-white mb-12 text-center tracking-tight">Frequently asked questions</h2>
<div className="space-y-4">

<div className="border border-white/10 rounded-lg bg-white/[0.02] overflow-hidden">
<button className="w-full px-6 py-4 text-left flex justify-between items-center text-white focus:outline-none" onclick="toggleFaq(this)">
<span className="font-medium">How does SyncPilot handle data security?</span>
<iconify-icon className="transform transition-transform duration-200" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="px-6 pb-4 hidden text-slate-400 text-sm leading-relaxed">
                        We are SOC2 Type II compliant and encrypt all data at rest and in transit. We support SSO for enterprise plans and offer on-premise deployment options for qualified organizations.
                    </div>
</div>

<div className="border border-white/10 rounded-lg bg-white/[0.02] overflow-hidden">
<button className="w-full px-6 py-4 text-left flex justify-between items-center text-white focus:outline-none" onclick="toggleFaq(this)">
<span className="font-medium">Can I integrate with custom internal tools?</span>
<iconify-icon className="transform transition-transform duration-200" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="px-6 pb-4 hidden text-slate-400 text-sm leading-relaxed">
                        Yes, our Org Bundle includes access to our REST API and Webhooks, allowing you to build custom adapters for proprietary internal tools.
                    </div>
</div>

<div className="border border-white/10 rounded-lg bg-white/[0.02] overflow-hidden">
<button className="w-full px-6 py-4 text-left flex justify-between items-center text-white focus:outline-none" onclick="toggleFaq(this)">
<span className="font-medium">Is there a free trial available?</span>
<iconify-icon className="transform transition-transform duration-200" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="px-6 pb-4 hidden text-slate-400 text-sm leading-relaxed">
                        Absolutely. You can try the Team Bundle for 14 days with no credit card required. Contact sales for Org Bundle pilots.
                    </div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-b from-slate-950 to-indigo-950/20" id="customers">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="glass-card p-8 rounded-2xl border border-white/10">
<div className="flex gap-1 mb-4 text-indigo-400">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-lg text-white font-medium mb-6 leading-relaxed">"SyncPilot dramatically reduced our weekly status meeting times. The automated handoff workflow alone saved us 15 hours per sprint."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-white font-bold text-sm">ES</div>
<div>
<div className="text-white text-sm font-medium">Elena Santos</div>
<div className="text-slate-500 text-xs">VP of Product, FinStack</div>
</div>
</div>
</div>
<div className="glass-card p-8 rounded-2xl border border-white/10">
<div className="flex gap-1 mb-4 text-indigo-400">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-lg text-white font-medium mb-6 leading-relaxed">"The visibility we gained into our engineering velocity helped us predict shipping dates with confidence. Essential for enterprise B2B."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-white font-bold text-sm">MJ</div>
<div>
<div className="text-white text-sm font-medium">Marcus Jordan</div>
<div className="text-slate-500 text-xs">CTO, CloudScale</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 pt-16 pb-8 bg-slate-950">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 mb-4">
<div className="w-5 h-5 bg-gradient-to-tr from-indigo-500 to-violet-500 rounded flex items-center justify-center text-white text-[10px] font-semibold">S</div>
<span className="text-white font-medium tracking-tight">SyncPilot</span>
</div>
<p className="text-slate-500 text-sm max-w-xs mb-6">
                        The operating system for modern product teams. Sync, track, and ship faster.
                    </p>
<div className="flex gap-4 text-slate-400">
<a className="hover:text-white" href="#"><iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon></a>
<a className="hover:text-white" href="#"><iconify-icon icon="solar:brand-github-linear" width="20"></iconify-icon></a>
<a className="hover:text-white" href="#"><iconify-icon icon="solar:brand-linkedin-linear" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Product</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-indigo-400 transition-colors" href="#">Features</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Changelog</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Company</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-indigo-400 transition-colors" href="#">About</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Legal</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-indigo-400 transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Terms</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Security</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-600">© 2023 SyncPilot Inc. All rights reserved.</p>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
<span className="text-xs text-slate-500">All systems operational</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
