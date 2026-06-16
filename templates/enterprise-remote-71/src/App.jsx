import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        document.addEventListener('DOMContentLoaded', () => {
            // Calculator Logic
            const agentSlider = document.getElementById('agent-slider');
            const agentDisplay = document.getElementById('agent-display');
            const daysSlider = document.getElementById('days-slider');
            const daysDisplay = document.getElementById('days-display');

            const totalMonthlyEl = document.getElementById('total-monthly-cost');
            const dailyOpEl = document.getElementById('daily-op-cost');
            const costPerAgentEl = document.getElementById('cost-per-agent');
            const dailyLeadSpendEl = document.getElementById('daily-lead-spend');
            const leadsNeededEl = document.getElementById('leads-needed');

            // Constants
            const LEADS_PER_SALE = 4.5;
            const COST_PER_LEAD = 14.00; // Updated from 18 to 14
            const MONTHLY_FIXED_COST = 9047.62; 

            function formatCurrency(num) {
                return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(num);
            }

            function calculate() {
                const agents = parseInt(agentSlider.value);
                const days = parseInt(daysSlider.value);

                agentDisplay.innerText = agents;
                daysDisplay.innerText = days;

                const dailySalesTarget = agents * 1;
                const dailyLeadsNeeded = dailySalesTarget * LEADS_PER_SALE;
                const dailyLeadSpend = dailyLeadsNeeded * COST_PER_LEAD;
                const monthlyLeadSpend = dailyLeadSpend * days;
                
                const totalMonthlyCost = monthlyLeadSpend + MONTHLY_FIXED_COST;
                const dailyTotalCost = totalMonthlyCost / days;
                const costPerAgent = totalMonthlyCost / agents;

                totalMonthlyEl.innerText = formatCurrency(totalMonthlyCost);
                dailyOpEl.innerText = formatCurrency(dailyTotalCost);
                costPerAgentEl.innerText = formatCurrency(costPerAgent);
                dailyLeadSpendEl.innerText = formatCurrency(dailyLeadSpend);
                leadsNeededEl.innerText = `${Math.ceil(dailyLeadsNeeded)} / day`;
            }

            agentSlider.addEventListener('input', calculate);
            daysSlider.addEventListener('input', calculate);
            calculate();

            // Scroll Animation Logic
            const observerOptions = {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px"
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal-on-scroll').forEach(el => {
                observer.observe(el);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass-panel border-b border-white/5 bg-[#0B0E14]/80">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded bg-indigo-500 flex items-center justify-center text-white shadow-[0_0_15px_rgba(99,102,241,0.5)]">
<iconify-icon icon="lucide:zap" width="14"></iconify-icon>
</div>
<span className="text-sm font-medium text-white tracking-tight">VANTAGE SYSTEMS</span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#workflow">Operational Flow</a>
<a className="hover:text-white transition-colors" href="#investment">Investment</a>
<a className="hover:text-white transition-colors" href="#modeler">Calculator</a>
</div>
<a className="px-4 py-1.5 bg-white/5 hover:bg-white/10 text-white text-xs font-medium rounded-md border border-white/10 transition-all flex items-center gap-2 group" href="#contact">
<span>Deployment Proposal</span>
<iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="lucide:arrow-right" width="12"></iconify-icon>
</a>
</div>
</nav>

<div className="fixed inset-0 z-[-1] pointer-events-none">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] opacity-50"></div>
<div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-violet-900/5 rounded-full blur-[100px] opacity-30"></div>
</div>

<header className="pt-40 pb-32 px-6 relative">
<div className="max-w-4xl mx-auto text-center reveal-on-scroll">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-indigo-300 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                Infrastructure v2.0 Ready
            </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-8 leading-[1.1]">
                Scale operations with <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-500">programmable efficiency.</span>
</h1>
<p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                Unlock predictable revenue with a fully integrated remote infrastructure. We provide a turnkey ecosystem combining automated lead ingestion, intelligent compliance, and a dedicated data hub—transforming cold data into scalable growth.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 bg-white text-slate-950 text-sm font-medium rounded-lg hover:bg-slate-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]" href="#modeler">
                    Model Your Costs
                </a>
<a className="w-full sm:w-auto px-8 py-3.5 glass-panel text-white text-sm font-medium rounded-lg hover:bg-white/5 transition-colors" href="#workflow">
                    View Workflow
                </a>
</div>
</div>
</header>

<section className="py-32 px-6 border-t border-white/5 bg-slate-900/20" id="workflow">
<div className="max-w-7xl mx-auto">
<div className="mb-20 text-center reveal-on-scroll">
<h2 className="text-3xl font-medium text-white tracking-tight">The Operational Loop</h2>
<p className="text-slate-400 mt-3 max-w-lg mx-auto">A seamless 6-step lifecycle designed for high-velocity sales environments.</p>
</div>

<div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">

<div className="group hover-card glass-panel p-8 rounded-xl reveal-on-scroll delay-[0ms]">
<div className="flex justify-between items-start mb-6">
<div className="w-10 h-10 rounded-lg bg-slate-800/50 border border-slate-700 flex items-center justify-center text-slate-300 group-hover:bg-indigo-500 group-hover:text-white group-hover:border-indigo-400 transition-all duration-300">
<iconify-icon icon="lucide:download-cloud" width="20"></iconify-icon>
</div>
<span className="text-[10px] font-bold text-slate-600 bg-slate-800/50 px-2 py-1 rounded border border-slate-700">01</span>
</div>
<h3 className="text-base text-white font-medium mb-3">Purchase &amp; Import</h3>
<p className="text-xs text-slate-400 leading-relaxed">Leads are acquired from vendor and immediately imported into the Text Management Platform (TMP) for initial processing.</p>
</div>

<div className="group hover-card glass-panel p-8 rounded-xl reveal-on-scroll delay-[100ms]">
<div className="flex justify-between items-start mb-6">
<div className="w-10 h-10 rounded-lg bg-slate-800/50 border border-slate-700 flex items-center justify-center text-slate-300 group-hover:bg-indigo-500 group-hover:text-white group-hover:border-indigo-400 transition-all duration-300">
<iconify-icon icon="lucide:message-square" width="20"></iconify-icon>
</div>
<span className="text-[10px] font-bold text-slate-600 bg-slate-800/50 px-2 py-1 rounded border border-slate-700">02</span>
</div>
<h3 className="text-base text-white font-medium mb-3">SMS Activation</h3>
<p className="text-xs text-slate-400 leading-relaxed">Automated SMS warmup sequences are triggered via TMP. Responses dictate the routing path (Call vs. Text preference).</p>
</div>

<div className="group hover-card glass-panel p-8 rounded-xl reveal-on-scroll delay-[200ms]">
<div className="flex justify-between items-start mb-6">
<div className="w-10 h-10 rounded-lg bg-slate-800/50 border border-slate-700 flex items-center justify-center text-slate-300 group-hover:bg-indigo-500 group-hover:text-white group-hover:border-indigo-400 transition-all duration-300">
<iconify-icon icon="lucide:git-pull-request" width="20"></iconify-icon>
</div>
<span className="text-[10px] font-bold text-slate-600 bg-slate-800/50 px-2 py-1 rounded border border-slate-700">03</span>
</div>
<h3 className="text-base text-white font-medium mb-3">PMS Assignment</h3>
<p className="text-xs text-slate-400 leading-relaxed">Leads enter Project Management System. 'Text preferred' go to Text Admin; 'Call preferred' are assigned to agents with notifications.</p>
</div>

<div className="group hover-card glass-panel p-8 rounded-xl reveal-on-scroll delay-[300ms]">
<div className="flex justify-between items-start mb-6">
<div className="w-10 h-10 rounded-lg bg-slate-800/50 border border-slate-700 flex items-center justify-center text-slate-300 group-hover:bg-indigo-500 group-hover:text-white group-hover:border-indigo-400 transition-all duration-300">
<iconify-icon icon="lucide:calendar-check" width="20"></iconify-icon>
</div>
<span className="text-[10px] font-bold text-slate-600 bg-slate-800/50 px-2 py-1 rounded border border-slate-700">04</span>
</div>
<h3 className="text-base text-white font-medium mb-3">Nurture &amp; Booking</h3>
<p className="text-xs text-slate-400 leading-relaxed">Automated emails drive engagement. Prospects self-book appointments onto the schedule via shared calendar links.</p>
</div>

<div className="group hover-card glass-panel p-8 rounded-xl reveal-on-scroll delay-[400ms]">
<div className="flex justify-between items-start mb-6">
<div className="w-10 h-10 rounded-lg bg-slate-800/50 border border-slate-700 flex items-center justify-center text-slate-300 group-hover:bg-indigo-500 group-hover:text-white group-hover:border-indigo-400 transition-all duration-300">
<iconify-icon icon="lucide:phone-call" width="20"></iconify-icon>
</div>
<span className="text-[10px] font-bold text-slate-600 bg-slate-800/50 px-2 py-1 rounded border border-slate-700">05</span>
</div>
<h3 className="text-base text-white font-medium mb-3">Execution &amp; Logs</h3>
<p className="text-xs text-slate-400 leading-relaxed">Agents dial at scheduled times via RingCentral. Call notes updated in CMS, lead status synced in PMS in real-time.</p>
</div>

<div className="group hover-card glass-panel p-8 rounded-xl reveal-on-scroll delay-[500ms]">
<div className="flex justify-between items-start mb-6">
<div className="w-10 h-10 rounded-lg bg-slate-800/50 border border-slate-700 flex items-center justify-center text-slate-300 group-hover:bg-indigo-500 group-hover:text-white group-hover:border-indigo-400 transition-all duration-300">
<iconify-icon icon="lucide:shield-check" width="20"></iconify-icon>
</div>
<span className="text-[10px] font-bold text-slate-600 bg-slate-800/50 px-2 py-1 rounded border border-slate-700">06</span>
</div>
<h3 className="text-base text-white font-medium mb-3">Retention Protocol</h3>
<p className="text-xs text-slate-400 leading-relaxed">Post-enrollment audit completed 3 days post-sale to verify satisfaction and significantly reduce chargeback risk.</p>
</div>
</div>

<div className="border-t border-white/5 pt-10 reveal-on-scroll">
<div className="flex items-center gap-3 mb-6">
<span className="w-1 h-1 bg-indigo-500 rounded-full"></span>
<h4 className="text-xs font-semibold uppercase tracking-widest text-slate-400">Integrated Tool Stack</h4>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
<div className="glass-panel px-4 py-3 rounded-lg flex items-center gap-3">
<iconify-icon className="text-indigo-400" icon="lucide:database" width="16"></iconify-icon>
<div>
<span className="block text-xs font-medium text-white">4 Legal Leads</span>
<span className="block text-[10px] text-slate-500">Lead Source</span>
</div>
</div>
<div className="glass-panel px-4 py-3 rounded-lg flex items-center gap-3">
<iconify-icon className="text-indigo-400" icon="lucide:layers" width="16"></iconify-icon>
<div>
<span className="block text-xs font-medium text-white">ClickUp</span>
<span className="block text-[10px] text-slate-500">PMS</span>
</div>
</div>
<div className="glass-panel px-4 py-3 rounded-lg flex items-center gap-3">
<iconify-icon className="text-indigo-400" icon="lucide:phone" width="16"></iconify-icon>
<div>
<span className="block text-xs font-medium text-white">RingCentral</span>
<span className="block text-[10px] text-slate-500">CMS</span>
</div>
</div>
<div className="glass-panel px-4 py-3 rounded-lg flex items-center gap-3">
<iconify-icon className="text-indigo-400" icon="lucide:message-circle" width="16"></iconify-icon>
<div>
<span className="block text-xs font-medium text-white">Txt180</span>
<span className="block text-[10px] text-slate-500">SMS Platform</span>
</div>
</div>
<div className="glass-panel px-4 py-3 rounded-lg flex items-center gap-3">
<iconify-icon className="text-indigo-400" icon="lucide:messages-square" width="16"></iconify-icon>
<div>
<span className="block text-xs font-medium text-white">Google Chat</span>
<span className="block text-[10px] text-slate-500">Comms</span>
</div>
</div>
<div className="glass-panel px-4 py-3 rounded-lg flex items-center gap-3">
<iconify-icon className="text-indigo-400" icon="lucide:calendar" width="16"></iconify-icon>
<div>
<span className="block text-xs font-medium text-white">Google Cal</span>
<span className="block text-[10px] text-slate-500">Scheduling</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6" id="investment">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 reveal-on-scroll">
<div>
<h2 className="text-3xl font-medium text-white tracking-tight">Investment Structure</h2>
<p className="text-slate-400 mt-2">Transparent pricing. No hidden OpEx.</p>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

<div className="glass-panel rounded-2xl p-10 relative overflow-hidden group hover:border-indigo-500/20 transition-colors reveal-on-scroll delay-[0ms]">
<div className="absolute top-0 right-0 p-24 bg-indigo-500/5 rounded-full blur-3xl -mr-12 -mt-12 pointer-events-none group-hover:bg-indigo-500/10 transition-colors"></div>
<div className="flex items-center gap-3 mb-6">
<span className="px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">Phase 1</span>
<span className="text-slate-500 text-xs uppercase tracking-wide">One-Time Build</span>
</div>
<div className="flex items-baseline gap-1 mb-2">
<span className="text-4xl font-semibold text-white tracking-tight">$48,623</span>
<span className="text-lg text-slate-500">.00</span>
</div>
<p className="text-sm text-slate-400 mb-8 border-b border-white/5 pb-8">Complete infrastructure deployment &amp; compliance audit.</p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-indigo-400 mt-0.5 shrink-0" icon="lucide:check-circle"></iconify-icon>
<div>
<span className="text-sm text-slate-200 block">Core CRM &amp; Dialer Setup</span>
<span className="text-xs text-slate-500">Licensing, hardware provisioning, initial training.</span>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-white mt-0.5 shrink-0" icon="lucide:database"></iconify-icon>
<div>
<span className="text-sm text-white block">Enterprise Database Setup</span>
<span className="text-xs text-indigo-400 font-medium">Included ($4,700 value)</span>
<span className="text-xs text-slate-500 block">Secure architecture for high-volume record handling.</span>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-indigo-400 mt-0.5 shrink-0" icon="lucide:check-circle"></iconify-icon>
<div>
<span className="text-sm text-slate-200 block">Compliance Audit</span>
<span className="text-xs text-slate-500">Legal review of scripts and DNC filtering logic.</span>
</div>
</li>
</ul>
</div>

<div className="glass-panel rounded-2xl p-10 relative overflow-hidden group hover:border-emerald-500/20 transition-colors reveal-on-scroll delay-[100ms]">
<div className="absolute top-0 right-0 p-24 bg-emerald-500/5 rounded-full blur-3xl -mr-12 -mt-12 pointer-events-none group-hover:bg-emerald-500/10 transition-colors"></div>
<div className="flex items-center gap-3 mb-6">
<span className="px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">Phase 2</span>
<span className="text-slate-500 text-xs uppercase tracking-wide">Monthly Fixed</span>
</div>
<div className="flex items-baseline gap-1 mb-2">
<span className="text-4xl font-semibold text-white tracking-tight">$9,047</span>
<span className="text-lg text-slate-500">.62</span>
</div>
<p className="text-sm text-slate-400 mb-8 border-b border-white/5 pb-8">Recurring operational &amp; management costs.</p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-500 mt-0.5 shrink-0" icon="lucide:check-circle"></iconify-icon>
<div>
<span className="text-sm text-slate-200 block">Management &amp; QA Team</span>
<span className="text-xs text-slate-500">Dedicated oversight and quality assurance.</span>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-white mt-0.5 shrink-0" icon="lucide:bar-chart-3"></iconify-icon>
<div>
<span className="text-sm text-white block">Data Hub Management</span>
<span className="text-xs text-emerald-400 font-medium">Included ($1,200/mo value)</span>
<span className="text-xs text-slate-500 block">Ongoing reporting, data hygiene, and server costs.</span>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-500 mt-0.5 shrink-0" icon="lucide:check-circle"></iconify-icon>
<div>
<span className="text-sm text-slate-200 block">Software Subscription Suite</span>
<span className="text-xs text-slate-500">VoIP, CRM licenses, and integration tools.</span>
</div>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 border-t border-white/5 bg-[#080a0f]" id="modeler">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-16 reveal-on-scroll">
<h2 className="text-3xl font-medium text-white tracking-tight">Financial Forecast Modeler</h2>
<p className="text-slate-400 mt-4 max-w-2xl mx-auto leading-relaxed">
                    This interactive tool helps you visualize your estimated total monthly expenditure by balancing fixed operational costs with variable lead acquisition. Use the sliders below to adjust your team size and campaign duration, and the model will automatically calculate your projected budget requirements based on standard performance metrics.
                </p>
<div className="mt-8">
<a className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/10 hover:bg-white/5 text-slate-300 text-xs font-medium transition-all group" href="#">
<iconify-icon icon="lucide:file-text" width="14"></iconify-icon>
                        Download PDF Instructions
                        <iconify-icon className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" icon="lucide:arrow-up-right" width="12"></iconify-icon>
</a>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 reveal-on-scroll">

<div className="lg:col-span-5 glass-panel p-8 rounded-2xl flex flex-col justify-center space-y-12">

<div>
<div className="flex justify-between items-end mb-6">
<label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Capacity</label>
<div className="text-right">
<span className="text-2xl font-medium text-white" id="agent-display">10</span>
<span className="text-sm text-slate-500">Agents</span>
</div>
</div>
<input className="w-full" id="agent-slider" max="50" min="1" step="1" type="range" value="10"/>
</div>

<div>
<div className="flex justify-between items-end mb-6">
<label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Duration</label>
<div className="text-right">
<span className="text-2xl font-medium text-white" id="days-display">22</span>
<span className="text-sm text-slate-500">Days/Mo</span>
</div>
</div>
<input className="w-full" id="days-slider" max="31" min="1" step="1" type="range" value="22"/>
</div>

<div className="p-6 bg-slate-900/50 rounded-xl border border-white/5">
<div className="flex items-center gap-2 mb-4 text-slate-300">
<iconify-icon icon="lucide:sliders-horizontal" width="14"></iconify-icon>
<span className="text-xs font-semibold uppercase tracking-wider">Model Assumptions</span>
</div>
<div className="space-y-3">
<div className="flex justify-between text-sm">
<span className="text-slate-500">Sales Velocity</span>
<span className="text-slate-300">1 Sale / Agent / Day</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-slate-500">Conv. Rate (Lead:Sale)</span>
<span className="text-slate-300">4.5 : 1</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-slate-500">Cost Per Lead</span>
<span className="text-slate-300 text-indigo-400 font-medium">$14.00</span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-7 flex flex-col justify-between space-y-4">

<div className="glass-panel p-10 rounded-2xl bg-gradient-to-br from-indigo-900/10 to-transparent border-t border-indigo-500/30">
<p className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-2">Estimated Monthly Budget</p>
<h3 className="text-6xl font-medium text-white tracking-tight mb-2" id="total-monthly-cost">$0.00</h3>
<p className="text-sm text-slate-400">Fixed Operations ($9k) + Variable Ad Spend</p>
</div>

<div className="grid grid-cols-2 gap-4 h-full">
<div className="glass-panel p-6 rounded-xl hover:bg-white/5 transition-colors">
<div className="text-slate-500 text-[10px] uppercase tracking-widest font-semibold mb-2">Daily Burn</div>
<div className="text-xl font-medium text-white" id="daily-op-cost">$0.00</div>
</div>
<div className="glass-panel p-6 rounded-xl hover:bg-white/5 transition-colors">
<div className="text-slate-500 text-[10px] uppercase tracking-widest font-semibold mb-2">Cost / Agent</div>
<div className="text-xl font-medium text-white" id="cost-per-agent">$0.00</div>
</div>
<div className="glass-panel p-6 rounded-xl hover:bg-white/5 transition-colors">
<div className="text-slate-500 text-[10px] uppercase tracking-widest font-semibold mb-2">Lead Spend</div>
<div className="text-xl font-medium text-white" id="daily-lead-spend">$0.00</div>
</div>
<div className="glass-panel p-6 rounded-xl hover:bg-white/5 transition-colors">
<div className="text-slate-500 text-[10px] uppercase tracking-widest font-semibold mb-2">Lead Volume</div>
<div className="text-xl font-medium text-white" id="leads-needed">0 / day</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5" id="contact">
<div className="max-w-4xl mx-auto text-center reveal-on-scroll">
<h2 className="text-3xl md:text-4xl font-medium text-white mb-8 tracking-tight">Ready to deploy infrastructure?</h2>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<button className="px-8 py-4 bg-white text-slate-900 text-sm font-semibold rounded-lg hover:bg-slate-200 transition-colors w-full sm:w-auto">
                    Initialize Deployment
                </button>
<button className="px-8 py-4 bg-transparent border border-white/10 text-white text-sm font-medium rounded-lg hover:bg-white/5 transition-colors w-full sm:w-auto">
                    Download Full PDF
                </button>
</div>
<p className="mt-12 text-xs text-slate-600 font-medium uppercase tracking-widest">
                Vantage Systems © 2023. Secure Proposal.
            </p>
</div>
</section>


    </>
  );
}
