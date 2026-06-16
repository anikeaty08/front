import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Poppins', 'sans-serif'],
},
colors: {
slate: {
850: '#1e293b',
900: '#0f172a',
950: '#020617',
}
}
}
}
}



        (function() {
            // Elements
            const simTeam = document.getElementById('sim-team');
            const simLeads = document.getElementById('sim-leads');
            const simFollowup = document.getElementById('sim-followup');
            const simTeamVal = document.getElementById('sim-team-val');
            const simLeadsVal = document.getElementById('sim-leads-val');
            const simFollowupVal = document.getElementById('sim-followup-val');
            
            const kpiResponse = document.getElementById('kpi-response');
            const kpiHours = document.getElementById('kpi-hours');
            const kpiQuotes = document.getElementById('kpi-quotes');
            const kpiRenewals = document.getElementById('kpi-renewals');
            
            const chartBefore = document.getElementById('chart-before');
            const chartAfter = document.getElementById('chart-after');
            const chartLabel = document.getElementById('chart-label');
            
            const simToggle = document.getElementById('sim-toggle');
            const tabs = document.querySelectorAll('.sim-tab');
            const tooltip = document.getElementById('sim-tooltip');
            const tooltipBtns = document.querySelectorAll('.sim-tooltip-btn');
            
            let isAfter = true;
            let currentTab = 'sales';
            
            // Utility: clamp
            function clamp(min, max, val) {
                return Math.max(min, Math.min(max, val));
            }
            
            // Animate number
            function animateValue(el, end, suffix = '', prefix = '') {
                const start = parseFloat(el.textContent.replace(/[^0-9.-]/g, '')) || 0;
                const duration = 300;
                const startTime = performance.now();
                
                function update(currentTime) {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    const eased = 1 - Math.pow(1 - progress, 3);
                    const current = start + (end - start) * eased;
                    el.textContent = prefix + Math.round(current) + suffix;
                    if (progress < 1) requestAnimationFrame(update);
                }
                requestAnimationFrame(update);
            }
            
            // Calculate outcomes
            function calculate() {
                const team = parseInt(simTeam.value);
                const leads = parseInt(simLeads.value);
                const followup = parseInt(simFollowup.value);
                const workdays = 5;
                
                // Update labels
                simTeamVal.textContent = team + ' agents';
                simLeadsVal.textContent = leads + ' leads';
                simFollowupVal.textContent = followup + ' min/lead';
                
                // Before calculations
                const responseBefore = clamp(15, 240, 60 + (leads * 0.6));
                const manualMinutesWeek = leads * followup * workdays;
                
                // After calculations
                const responseAfter = clamp(1, 30, Math.round(responseBefore * 0.15));
                const automationReduction = 0.65;
                const hoursSavedWeek = Math.round((manualMinutesWeek * automationReduction) / 60 * 10) / 10;
                const extraQuotesMonth = Math.round((hoursSavedWeek * 4) / 1.5);
                const renewalsSavedMonth = Math.round((team * 2) + (leads * 0.1));
                
                // Display based on toggle
                if (isAfter) {
                    animateValue(kpiResponse, responseAfter, ' min');
                    animateValue(kpiHours, Math.round(hoursSavedWeek), ' hrs');
                    animateValue(kpiQuotes, extraQuotesMonth, '', '+');
                    animateValue(kpiRenewals, renewalsSavedMonth, '', '+');
                } else {
                    animateValue(kpiResponse, Math.round(responseBefore), ' min');
                    animateValue(kpiHours, 0, ' hrs');
                    animateValue(kpiQuotes, 0, '', '+');
                    animateValue(kpiRenewals, 0, '', '+');
                }
                
                // Update chart
                updateChart(team, leads, followup);
            }
            
            // Update chart
            function updateChart(team, leads, followup) {
                const base = 50 + leads * 0.1;
                const growth = isAfter ? 0.4 : 0.05;
                
                const beforePts = [
                    { x: 10, y: 55 - team * 0.2 },
                    { x: 80, y: 50 - team * 0.15 },
                    { x: 150, y: 52 - team * 0.18 },
                    { x: 220, y: 48 - team * 0.12 },
                    { x: 270, y: 50 - team * 0.15 }
                ];
                
                const afterPts = [
                    { x: 10, y: 50 - leads * 0.05 },
                    { x: 80, y: 35 - leads * 0.08 - team * 0.3 },
                    { x: 150, y: 25 - leads * 0.06 - team * 0.4 },
                    { x: 220, y: 18 - leads * 0.04 - team * 0.5 },
                    { x: 270, y: 12 - leads * 0.03 - team * 0.6 }
                ];
                
                // Clamp values
                const clampY = (pts) => pts.map(p => ({ x: p.x, y: clamp(5, 70, p.y) }));
                
                const bPts = clampY(beforePts);
                const aPts = clampY(afterPts);
                
                chartBefore.setAttribute('points', bPts.map(p => `${p.x},${p.y}`).join(' '));
                chartAfter.setAttribute('points', aPts.map(p => `${p.x},${p.y}`).join(' '));
                
                // Opacity based on toggle
                chartBefore.style.opacity = isAfter ? '0.5' : '1';
                chartAfter.style.opacity = isAfter ? '1' : '0.3';
            }
            
            // Tab switching
            function switchTab(tabId) {
                currentTab = tabId;
                tabs.forEach(t => {
                    const isActive = t.id === 'tab-' + tabId;
                    t.setAttribute('aria-selected', isActive);
                    if (isActive) {
                        t.classList.add('bg-white', 'text-slate-900', 'shadow-sm');
                        t.classList.remove('text-slate-600');
                    } else {
                        t.classList.remove('bg-white', 'text-slate-900', 'shadow-sm');
                        t.classList.add('text-slate-600');
                    }
                });
                
                // Update chart label
                const labels = {
                    sales: 'Quotes created',
                    service: 'Response time',
                    retention: 'Renewal saves'
                };
                chartLabel.textContent = labels[tabId];
                calculate();
            }
            
            // Toggle handler
            function handleToggle() {
                isAfter = !isAfter;
                simToggle.setAttribute('aria-checked', isAfter);
                const thumb = simToggle.querySelector('span:last-child');
                if (isAfter) {
                    thumb.classList.add('translate-x-6');
                    thumb.classList.remove('translate-x-1');
                    simToggle.classList.add('bg-slate-900');
                    simToggle.classList.remove('bg-slate-300');
                } else {
                    thumb.classList.remove('translate-x-6');
                    thumb.classList.add('translate-x-1');
                    simToggle.classList.remove('bg-slate-900');
                    simToggle.classList.add('bg-slate-300');
                }
                calculate();
            }
            
            // Tooltip handlers
            tooltipBtns.forEach(btn => {
                btn.addEventListener('mouseenter', (e) => {
                    const text = btn.getAttribute('data-tooltip');
                    tooltip.textContent = text;
                    tooltip.classList.remove('hidden');
                    const rect = btn.getBoundingClientRect();
                    tooltip.style.left = rect.left + 'px';
                    tooltip.style.top = (rect.top - tooltip.offsetHeight - 8) + 'px';
                });
                btn.addEventListener('mouseleave', () => {
                    tooltip.classList.add('hidden');
                });
                btn.addEventListener('focus', (e) => {
                    const text = btn.getAttribute('data-tooltip');
                    tooltip.textContent = text;
                    tooltip.classList.remove('hidden');
                    const rect = btn.getBoundingClientRect();
                    tooltip.style.left = rect.left + 'px';
                    tooltip.style.top = (rect.top - tooltip.offsetHeight - 8) + 'px';
                });
                btn.addEventListener('blur', () => {
                    tooltip.classList.add('hidden');
                });
            });
            
            // Event listeners
            simTeam.addEventListener('input', calculate);
            simLeads.addEventListener('input', calculate);
            simFollowup.addEventListener('input', calculate);
            simToggle.addEventListener('click', handleToggle);
            
            tabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    const tabId = tab.id.replace('tab-', '');
                    switchTab(tabId);
                });
            });
            
            // Initialize
            calculate();
        })();
        


        // ROI Calculator Logic
        const inputTeam = document.getElementById('input-team');
        const inputHours = document.getElementById('input-hours');
        const inputCost = document.getElementById('input-cost');

        const displayTeam = document.getElementById('display-team');
        const displayHours = document.getElementById('display-hours');
        const displayCost = document.getElementById('display-cost');

        const resHours = document.getElementById('result-hours');
        const resSavings = document.getElementById('result-savings');
        const resPolicies = document.getElementById('result-policies');

        function calculateROI() {
            const team = parseInt(inputTeam.value);
            const hours = parseInt(inputHours.value);
            const cost = parseInt(inputCost.value);

            // Update UI Labels
            displayTeam.innerText = `${team} people`;
            displayHours.innerText = `${hours} hours`;
            displayCost.innerText = `$${cost}/hr`;

            // Calculations
            const hoursPerYear = team * hours * 52;
            const annualSavings = hoursPerYear * cost;
            const policies = Math.floor(hoursPerYear / 10);

            // Animate Numbers (Simple Update)
            resHours.innerText = hoursPerYear.toLocaleString();
            resSavings.innerText = `$${annualSavings.toLocaleString()}`;
            resPolicies.innerText = `+${policies.toLocaleString()}`;
        }

        [inputTeam, inputHours, inputCost].forEach(input => {
            input.addEventListener('input', calculateROI);
        });

        // Initialize
        calculateROI();


        // Quiz Logic
        function nextStep(step) {
            // Hide all steps
            document.querySelectorAll('.quiz-step').forEach(el => el.classList.add('hidden'));
            
            // Show target step
            const target = document.querySelector(`.quiz-step[data-step="${step}"]`);
            if(target) {
                target.classList.remove('hidden');
                target.classList.add('fade-in-up'); // Re-trigger animation
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="font-display font-semibold text-lg tracking-tight text-slate-900 flex items-center gap-2" href="#">
<span className="bg-slate-900 text-white w-8 h-8 flex items-center justify-center rounded-lg text-sm">S</span>
                STANCEX
            </a>
<a className="hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors focus:ring-4 focus:ring-slate-100" href="#contact">
                Book Strategy Call
            </a>
</div>
</nav>

<section className="min-h-screen flex flex-col overflow-hidden bg-white pt-20 pr-6 pl-6 relative items-center justify-center">

<div className="absolute inset-0 z-0 opacity-40" style={{backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '24px 24px', maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'}}></div>
<div className="z-10 text-center max-w-4xl mr-auto ml-auto relative space-y-8">

<div className="fade-in-up inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-medium text-slate-600 mb-4">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Accepting limited new clients for Q1 2026
            </div>

<h1 className="fade-in-up delay-100 md:text-6xl lg:text-7xl leading-[1.1] text-4xl font-semibold text-slate-900 tracking-tight font-display">
                Your agency won't scale if it's built on <span className="text-slate-400">scattered tools.</span>
</h1>

<p className="fade-in-up delay-200 md:text-xl leading-relaxed text-lg text-slate-500 max-w-2xl mr-auto ml-auto">
                StanceX Systems designs and builds a custom AI-driven operating system for insurance agencies, so everything runs seamlessly and you can focus on growth.
            </p><div className="fade-in-up delay-300 pt-4">
<a className="group inline-flex items-center justify-center overflow-hidden transition-all hover:bg-slate-800 hover:scale-[1.02] active:scale-[0.98] shadow-slate-900/10 text-base font-medium text-white bg-slate-900 rounded-xl pt-4 pr-8 pb-4 pl-8 relative shadow-xl" href="#contact">
<span className="">Book Strategy Call</span>
<iconify-icon className="ml-2 transition-transform group-hover:translate-x-1" icon="lucide:arrow-right" strokeWidth="1.5"></iconify-icon>
</a>
</div>

<div className="fade-in-up delay-300 mt-7 mb-6">
<div className="w-full max-w-4xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden" style={{background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)'}}>

<div className="px-6 py-4 border-b border-slate-100 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
<div>
<h3 className="font-display font-semibold text-lg text-slate-900 tracking-tight">Agency Outcomes Simulator</h3>
<p className="text-xs text-slate-500 mt-0.5">Adjust inputs → see estimated impact (demo numbers)</p>
</div>
<div className="flex flex-wrap items-center gap-3">

<div aria-label="Outcome category" className="inline-flex bg-slate-100 rounded-lg p-1" role="tablist">
<button aria-controls="panel-sales" aria-selected="true" className="sim-tab px-3 py-1.5 text-xs font-medium rounded-md bg-white text-slate-900 shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-1" id="tab-sales" role="tab">Sales</button>
<button aria-controls="panel-service" aria-selected="false" className="sim-tab px-3 py-1.5 text-xs font-medium rounded-md text-slate-600 hover:text-slate-900 transition-all focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-1" id="tab-service" role="tab">Service</button>
<button aria-controls="panel-retention" aria-selected="false" className="sim-tab px-3 py-1.5 text-xs font-medium rounded-md text-slate-600 hover:text-slate-900 transition-all focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-1" id="tab-retention" role="tab">Retention</button>
</div>

<div className="flex items-center gap-2">
<span className="text-xs text-slate-500" id="toggle-label-before">Before</span>
<button aria-checked="true" aria-labelledby="toggle-label" className="relative inline-flex h-6 w-11 items-center rounded-full bg-slate-900 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2" id="sim-toggle" role="switch">
<span className="sr-only">Toggle Before/After view</span>
<span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6"></span>
</button>
<span className="text-xs font-medium text-slate-900" id="toggle-label-after">After</span>
</div>
</div>
</div>

<div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">

<div className="space-y-5">

<div className="">
<div className="flex items-center justify-between mb-2">
<label className="text-sm font-medium text-slate-700" htmlFor="sim-team">Team Size</label>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-800" id="sim-team-val">5 agents</span>
</div>
<input aria-describedby="sim-team-help" className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-900" id="sim-team" max="30" min="1" type="range" value="5"/>
<p className="text-xs text-slate-400 mt-1" id="sim-team-help">Staff handling leads &amp; service</p>
</div>

<div className="">
<div className="flex items-center justify-between mb-2">
<label className="text-sm font-medium text-slate-700" htmlFor="sim-leads">New Leads / Day</label>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-800" id="sim-leads-val">25 leads</span>
</div>
<input aria-describedby="sim-leads-help" className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-900" id="sim-leads" max="200" min="5" type="range" value="25"/>
<p className="text-xs text-slate-400 mt-1" id="sim-leads-help">Average inbound leads per day</p>
</div>

<div className="">
<div className="flex items-center justify-between mb-2">
<label className="text-sm font-medium text-slate-700" htmlFor="sim-followup">Avg Follow-up Time</label>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-800" id="sim-followup-val">8 min/lead</span>
</div>
<input aria-describedby="sim-followup-help" className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-900" id="sim-followup" max="20" min="1" type="range" value="8"/>
<p className="text-xs text-slate-400 mt-1" id="sim-followup-help">Minutes spent per lead follow-up</p>
</div>
</div>

<div className="space-y-4">

<div className="grid grid-cols-2 gap-3">

<div className="bg-slate-50 rounded-xl p-4 border border-slate-100 relative group">
<div className="flex items-center justify-between mb-1">
<div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center">
<iconify-icon className="text-slate-600" icon="lucide:zap" width="16"></iconify-icon>
</div>
<button aria-label="Info about first response time" className="sim-tooltip-btn text-slate-400 hover:text-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-400 rounded" data-tooltip="Speed to first SMS, email, or voice touch to a new lead.">
<iconify-icon icon="lucide:info" width="14"></iconify-icon>
</button>
</div>
<p className="text-2xl font-semibold text-slate-900 tracking-tight transition-all" id="kpi-response">11 min</p>
<p className="text-xs text-slate-500 mt-0.5">First response</p>
</div>

<div className="bg-slate-50 rounded-xl p-4 border border-slate-100 relative">
<div className="flex items-center justify-between mb-1">
<div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center">
<iconify-icon className="text-slate-600" icon="lucide:clock" width="16"></iconify-icon>
</div>
<button aria-label="Info about hours saved" className="sim-tooltip-btn text-slate-400 hover:text-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-400 rounded" data-tooltip="Admin + follow-up time reduced through automation.">
<iconify-icon icon="lucide:info" width="14"></iconify-icon>
</button>
</div>
<p className="text-2xl font-semibold text-slate-900 tracking-tight transition-all" id="kpi-hours">11 hrs</p>
<p className="text-xs text-slate-500 mt-0.5">Hours saved / week</p>
</div>

<div className="bg-slate-50 rounded-xl p-4 border border-slate-100 relative">
<div className="flex items-center justify-between mb-1">
<div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center">
<iconify-icon className="text-slate-600" icon="lucide:file-plus" width="16"></iconify-icon>
</div>
<button aria-label="Info about extra quotes" className="sim-tooltip-btn text-slate-400 hover:text-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-400 rounded" data-tooltip="Additional quotes generated from time savings.">
<iconify-icon icon="lucide:info" width="14"></iconify-icon>
</button>
</div>
<p className="text-2xl font-semibold text-slate-900 tracking-tight transition-all" id="kpi-quotes">+29</p>
<p className="text-xs text-slate-500 mt-0.5">Extra quotes / month</p>
</div>

<div className="bg-slate-50 rounded-xl p-4 border border-slate-100 relative">
<div className="flex items-center justify-between mb-1">
<div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items &lt;iconify-icon icon=" lucide:shield-check"="" width="16">
</div>
<button aria-label="Info about renewals saved" className="sim-tooltip-btn text-slate-400 hover:text-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-400 rounded" data-tooltip="Renewals preserved through proreach automation.">
<iconify-icon icon="lucide:info" width="14"></iconify-icon>
</button>
</div>
<p className="text-2xl font-semibold text-slate-900 tracking-tight transition-all" id="kpi-renewals">+13</p>
<p className="text-xs text-slate-500 mt-0.5">Renewals saved / month</p>
</div>
</div>

<div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
<div className="flex items-center justify-between mb-3">
<p className="text-xs font-medium text-slate-600" id="chart-label">Quotes created</p>
<div className="flex items-center gap-3 text-xs">
<span className="flex items-center gap-1"><span className="w-3 h-0.5 bg-slate-300 rounded"></span> Before</span>
<span className="flex items-center gap-1"><span className="w-3 h-0.5 bg-slate-900 rounded"></span> After</span>
</div>
</div>
<svg aria-label="Performance comparison chart" className="w-full h-20" id="sim-chart" viewbox="0 0 280 80">

<line stroke="#e2e8f0" strokeWidth="1" x1="0" x2="280" y1="20" y2="20"></line>
<line stroke="#e2e8f0" strokeWidth="1" x1="0" x2="280" y1="40" y2="40"></line>
<line stroke="#e2e8f0" strokeWidth="1" x1="0" x2="280" y1="60" y2="60"></line>

<polyline fill="none" id="chart-before" points="10,54 80,49.25 150,51.1 220,47.4 270,49.25" stroke="#cbd5e1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{opacity: '0.5'}}></polyline>

<polyline fill="none" id="chart-after" points="10,48.75 80,31.5 150,21.5 220,14.5 270,8.25" stroke="#0f172a" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" style={{opacity: '1'}}></polyline>
</svg>
<div className="flex justify-between text-xs text-slate-400 mt-1 px-1">
<span>Week 1</span>
<span>Week 2</span>
<span>Week 3</span>4
                                </div>
</div>
</div>
</div>

<div className="px-6 py-3 bg-slate-50 border-t border-slate-100">
<p className="text-xs text-slate-400 text-center">Estimates for demo purposes — your numbers depend on your workflows.</p>
</div>
</div>
</div>

<div className="fixed z-50 hidden px-3 py-2 text-xs text-white bg-slate-900 rounded-lg shadow-lg max-w-xs pointer-events-none" id="sim-tooltip" role="tooltip"></div>

</div>

</section>

<section className="py-24 px-6 bg-slate-50">
<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

<div className="order-2 md:order-1 space-y-8">
<h2 className="font-display font-semibold text-3xl md:text-4xl tracking-tight text-slate-900">
                    The Old Way = Chaos and Waste.
                </h2>
<p className="text-slate-600 leading-relaxed">
                    Most agencies today juggle a patchwork of software, spreadsheets, and manual processes. You’re stuck re-entering the same data in multiple places, chasing down information, and putting out fires instead of growing.
                </p>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-lg bg-red-100 text-red-600 flex items-center justify-center">
<iconify-icon icon="lucide:clock" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-slate-900">Wasted Time &amp; Errors</h4>
<p className="text-sm text-slate-500 mt-1">Duplicate work across disconnected systems eats up hours and leads to mistakes.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center">
<iconify-icon icon="lucide:settings-2" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-slate-900">Slow, Manual Work</h4>
<p className="text-sm text-slate-500 mt-1">Every form and follow-up takes longer than it should, keeping your team buried.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center">
<iconify-icon icon="lucide:alert-circle" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-slate-900">Missed Opportunities</h4>
<p className="text-sm text-slate-500 mt-1">Leads slip through the cracks when your CRM, quoting tools, and email aren't in sync.</p>
</div>
</li>
</ul>
</div>

<div className="order-1 md:order-2 relative h-[400px] w-full flex items-center justify-center select-none">
<div className="absolute inset-0 bg-gradient-to-tr from-slate-200/50 to-transparent rounded-3xl"></div>

<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-40 bg-white rounded-xl shadow-lg border border-slate-100 flex items-center justify-center flex-col gap-2 rotate-[-6deg] z-10">
<iconify-icon className="text-slate-400" icon="lucide:table" strokeWidth="1.5" width="32"></iconify-icon>
<span className="text-xs font-medium text-slate-400">Spreadsheet_vFinal.xlsx</span>
</div>
<div className="absolute top-1/2 left-1/2 transform -translate-x-[40%] -translate-y-[70%] w-56 h-36 bg-slate-100 rounded-xl shadow-md border border-slate-200 flex items-center justify-center rotate-[12deg]">
<iconify-icon className="text-slate-400" icon="lucide:mail" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div className="absolute top-1/2 left-1/2 transform -translate-x-[80%] -translate-y-[30%] w-48 h-48 bg-white rounded-xl shadow-lg border border-slate-100 flex items-center justify-center rotate-[-15deg]">
<iconify-icon className="text-red-300" icon="lucide:file-x" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div className="absolute top-1/2 left-1/2 transform -translate-x-[20%] -translate-y-[20%] w-12 h-12 bg-red-500 rounded-full flex items-center justify-center z-20 shadow-xl animate-pulse">
<iconify-icon className="text-white" icon="lucide:alert-triangle" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white overflow-hidden">
<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

<div className="relative h-[400px] w-full bg-slate-50 rounded-3xl border border-slate-100 flex items-center justify-center overflow-hidden">

<div className="relative z-20 w-32 h-32 bg-slate-900 rounded-2xl shadow-2xl flex flex-col items-center justify-center text-white">
<iconify-icon className="mb-2" icon="lucide:cpu" strokeWidth="1.5" width="40"></iconify-icon>
<span className="text-xs font-medium tracking-wide">AI CORE</span>
</div>

<div className="absolute inset-0 z-0">
<svg className="w-full h-full text-slate-200" stroke="currentColor" strokeWidth="2">
<line x1="50%" x2="20%" y1="50%" y2="20%"></line>
<line x1="50%" x2="80%" y1="50%" y2="20%"></line>
<line x1="50%" x2="20%" y1="50%" y2="80%"></line>
<line x1="50%" x2="80%" y1="50%" y2="80%"></line>
</svg>
</div>

<div className="absolute top-[20%] left-[20%] w-16 h-16 bg-white rounded-xl shadow-lg border border-slate-100 flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2">
<iconify-icon className="text-slate-600" icon="lucide:users" width="24"></iconify-icon>
</div>
<div className="absolute top-[20%] right-[20%] w-16 h-16 bg-white rounded-xl shadow-lg border border-slate-100 flex items-center justify-center transform translate-x-1/2 -translate-y-1/2">
<iconify-icon className="text-slate-600" icon="lucide:bar-chart-3" width="24"></iconify-icon>
</div>
<div className="absolute bottom-[20%] left-[20%] w-16 h-16 bg-white rounded-xl shadow-lg border border-slate-100 flex items-center justify-center transform -translate-x-1/2 translate-y-1/2">
<iconify-icon className="text-slate-600" icon="lucide:mail" width="24"></iconify-icon>
</div>
<div className="absolute bottom-[20%] right-[20%] w-16 h-16 bg-white rounded-xl shadow-lg border border-slate-100 flex items-center justify-center transform translate-x-1/2 translate-y-1/2">
<iconify-icon className="text-slate-600" icon="lucide:shield-check" width="24"></iconify-icon>
</div>
</div>

<div className="space-y-6">
<h2 className="font-display font-semibold text-3xl md:text-4xl tracking-tight text-slate-900">
                    Meet Your Agency’s  <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-500">AI Operating System.</span>
</h2>
<p className="text-slate-600 leading-relaxed">
                    This isn’t another app or off-the-shelf software – it’s a <span className="font-medium text-slate-900">done-for-you, intelligent platform custom-built for your agency</span>. StanceX Systems replaces the chaos with a cohesive, AI-driven hub that runs all your critical processes in one place.
                </p>
<p className="text-slate-600 leading-relaxed">
                    We handle everything end-to-end. We take on the risk. <span className="italic">If any component fails, we fix or replace it immediately at no cost.</span>
</p>
<div className="mt-6 pt-6 border-t border-slate-100">
<blockquote className="text-sm text-slate-500 italic">
                        "AI will soon be something like the business’s operating system for insurers."
                    </blockquote>
<p className="text-xs text-slate-400 font-medium mt-2 uppercase tracking-wider">— SAS 2025 Industry Report</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-50">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="font-display font-semibold text-3xl md:text-4xl tracking-tight text-slate-900 mb-4">We Build It With You</h2>
<p className="text-slate-500">We don’t just drop off software. We partner with you through a proven step-by-step implementation process.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-200 z-0"></div>

<div className="relative z-10">
<div className="w-24 h-24 mx-auto bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center justify-center mb-6 relative">
<div className="absolute -top-3 -right-3 w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center text-white text-sm font-semibold border-4 border-slate-50">1</div>
<iconify-icon className="text-slate-700" icon="lucide:clipboard-list" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div className="text-center px-4">
<h3 className="font-display font-semibold text-xl text-slate-900 mb-2">Strategy &amp; Audit</h3>
<p className="text-sm text-slate-600 leading-relaxed">We audit your operations and design a Blueprint for your AI Operating System tailored to your specific pain points.</p>
</div>
</div>

<div className="relative z-10">
<div className="w-24 h-24 mx-auto bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center justify-center mb-6 relative">
<div className="absolute -top-3 -right-3 w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center text-white text-sm font-semibold border-4 border-slate-50">2</div>
<iconify-icon className="text-slate-700" icon="lucide:blocks" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div className="text-center px-4">
<h3 className="font-display font-semibold text-xl text-slate-900 mb-2">Build &amp; Integrate</h3>
<p className="text-sm text-slate-600 leading-relaxed">We configure AI tools, set up integrations, and assemble your agency’s new engine. A complete turn-key build.</p>
</div>
</div>

<div className="relative z-10">
<div className="w-24 h-24 mx-auto bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center justify-center mb-6 relative">
<div className="absolute -top-3 -right-3 w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center text-white text-sm font-semibold border-4 border-slate-50">3</div>
<iconify-icon className="text-slate-700" icon="lucide:rocket" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div className="text-center px-4">
<h3 className="font-display font-semibold text-xl text-slate-900 mb-2">Launch, Train &amp; Support</h3>
<p className="text-sm text-slate-600 leading-relaxed">We deploy the platform, train your staff, and provide ongoing maintenance to ensure reliability.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-y border-slate-100">
<div className="max-w-4xl mx-auto text-center">
<iconify-icon className="text-slate-200 mb-6 mx-auto" icon="lucide:quote" width="48"></iconify-icon>
<h3 className="font-display font-medium text-2xl md:text-3xl text-slate-900 leading-relaxed mb-8">
                “In just a few months, StanceX completely changed how we operate. We’re writing <span className="text-slate-900 font-bold underline decoration-slate-300 decoration-2 underline-offset-4">30% more new policies</span> per month without adding staff. My team got back at least <span className="text-slate-900 font-bold underline decoration-slate-300 decoration-2 underline-offset-4">20 hours a week</span> from manual work. It’s like we have an ‘unseen team member’ handling the busywork.”
            </h3>
<div className="flex items-center justify-center gap-4">
<div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center overflow-hidden border border-slate-200">
<iconify-icon className="text-slate-400" icon="lucide:user" width="24"></iconify-icon>
</div>
<div className="text-left">
<p className="font-display font-semibold text-slate-900 text-sm">Michael Ross</p>
<p className="text-xs text-slate-500 uppercase tracking-wide">Agency Owner, Ross Insurance Group</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-50/50">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="font-display font-semibold text-3xl md:text-4xl tracking-tight text-slate-900 mb-4">What’s Inside</h2>
<p className="text-slate-500">Engineered with a powerful combination of tools, delivered as a unified service.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-slate-900 transition-colors">
<iconify-icon className="text-slate-900 group-hover:text-white transition-colors" icon="lucide:database" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="font-display font-semibold text-lg text-slate-900 mb-2">Unified Data Hub</h3>
<p className="text-sm text-slate-500 leading-relaxed">Single source of truth. Update data once, and it’s instantly available everywhere.</p>
</div>

<div className="group bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-slate-900 transition-colors">
<iconify-icon className="text-slate-900 group-hover:text-white transition-colors" icon="lucide:workflow" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="font-display font-semibold text-lg text-slate-900 mb-2">Workflow Automation</h3>
<p className="text-sm text-slate-500 leading-relaxed">Bots handle mundane tasks like renewals and reports automatically behind the scenes.</p>
</div>

<div className="group bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-slate-900 transition-colors">
<iconify-icon className="text-slate-900 group-hover:text-white transition-colors" icon="lucide:bot" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="font-display font-semibold text-lg text-slate-900 mb-2">AI Assistant</h3>
<p className="text-sm text-slate-500 leading-relaxed">A 24/7 digital team member that answers client questions and suggests cross-sells.</p>
</div>

<div className="group bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-slate-900 transition-colors">
<iconify-icon className="text-slate-900 group-hover:text-white transition-colors" icon="lucide:layout-dashboard" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="font-display font-semibold text-lg text-slate-900 mb-2">Real-Time Analytics</h3>
<p className="text-sm text-slate-500 leading-relaxed">Live dashboards showing policy sales, renewal rates, and key metrics instantly.</p>
</div>

<div className="group bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-slate-900 transition-colors">
<iconify-icon className="text-slate-900 group-hover:text-white transition-colors" icon="lucide:lock" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="font-display font-semibold text-lg text-slate-900 mb-2">Security &amp; Compliance</h3>
<p className="text-sm text-slate-500 leading-relaxed">Enterprise-grade encryption and role-based access controls designed for insurance.</p>
</div>

<div className="group bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-slate-900 transition-colors">
<iconify-icon className="text-slate-900 group-hover:text-white transition-colors" icon="lucide:refresh-cw" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="font-display font-semibold text-lg text-slate-900 mb-2">Continuous Updates</h3>
<p className="text-sm text-slate-500 leading-relaxed">We monitor performance and update models so your system is always evolving.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16">

<div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
<h2 className="font-display font-semibold text-2xl text-slate-900 mb-8">Calculate Your ROI</h2>
<div className="space-y-8">

<div>
<div className="flex justify-between mb-2">
<label className="font-medium text-slate-700 text-sm">Team Size</label>
<span className="font-display font-semibold text-slate-900" id="display-team">5 people</span>
</div>
<input className="accent-slate-900" id="input-team" max="50" min="1" type="range" value="5"/>
<p className="text-xs text-slate-500 mt-2">Staff handling admin tasks</p>
</div>

<div>
<div className="flex justify-between mb-2">
<label className="font-medium text-slate-700 text-sm">Hours Wasted / Week</label>
<span className="font-display font-semibold text-slate-900" id="display-hours">10 hours</span>
</div>
<input className="accent-slate-900" id="input-hours" max="40" min="0" type="range" value="10"/>
<p className="text-xs text-slate-500 mt-2">Per person on manual tasks</p>
</div>

<div>
<div className="flex justify-between mb-2">
<label className="font-medium text-slate-700 text-sm">Avg. Hourly Cost</label>
<span className="font-display font-semibold text-slate-900" id="display-cost">$30/hr</span>
</div>
<input className="accent-slate-900" id="input-cost" max="100" min="15" type="range" value="30"/>
</div>
</div>
</div>

<div className="flex flex-col justify-center space-y-8">
<div className="space-y-2">
<div className="flex items-center gap-2 text-slate-500 mb-1">
<iconify-icon icon="lucide:clock" width="18"></iconify-icon>
<span className="text-sm font-medium uppercase tracking-wide">Hours Freed Per Year</span>
</div>
<h3 className="font-display font-semibold text-5xl md:text-6xl text-slate-900 tracking-tight" id="result-hours">2,600</h3>
<p className="text-sm text-slate-500">Hours reclaimed for high-value work.</p>
</div>
<div className="w-full h-px bg-slate-100"></div>
<div className="space-y-2">
<div className="flex items-center gap-2 text-slate-500 mb-1">
<iconify-icon icon="lucide:dollar-sign" width="18"></iconify-icon>
<span className="text-sm font-medium uppercase tracking-wide">Estimated Annual Savings</span>
</div>
<h3 className="font-display font-semibold text-5xl md:text-6xl text-slate-900 tracking-tight" id="result-savings">$78,000</h3>
<p className="text-sm text-slate-500">Direct savings on operational inefficiency.</p>
</div>
<div className="w-full h-px bg-slate-100"></div>
<div className="space-y-2">
<div className="flex items-center gap-2 text-slate-500 mb-1">
<iconify-icon icon="lucide:trending-up" width="18"></iconify-icon>
<span className="text-sm font-medium uppercase tracking-wide">Sales Potential</span>
</div>
<h3 className="font-display font-semibold text-5xl md:text-6xl text-slate-900 tracking-tight" id="result-policies">+260</h3>
<p className="text-sm text-slate-500">Est. new policies/year (assuming 10 hrs per sale).</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-900 text-white relative overflow-hidden" id="contact">

<div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="max-w-3xl mx-auto text-center relative z-10">
<h2 className="font-display font-semibold text-4xl md:text-5xl tracking-tight mb-6">Let’s Build It Together.</h2>
<p className="text-slate-400 text-lg mb-10 leading-relaxed">
                If you’re an independent agency owner ready for a smarter, leaner way to grow, let’s talk. We take on only a handful of new clients each quarter.
            </p>
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-900 bg-white rounded-xl hover:bg-slate-100 transition-all hover:scale-[1.02] shadow-xl" href="#">
                Schedule My Strategy Call
                <iconify-icon className="ml-2 text-slate-600" icon="lucide:calendar" width="20"></iconify-icon>
</a>
<div className="my-16 flex items-center gap-4 text-slate-700">
<div className="h-px w-full bg-slate-800"></div>
<span className="text-xs uppercase tracking-wider whitespace-nowrap text-slate-500">Or check your readiness</span>
<div className="h-px w-full bg-slate-800"></div>
</div>

<div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 text-left transition-all duration-300" id="quiz-container">
<p className="text-sm text-slate-400 italic text-center mb-6">Take our 2-minute Agency Readiness Quiz</p>

<div className="quiz-step block" data-step="1">
<div className="flex justify-between items-center mb-4 text-xs font-medium uppercase tracking-wider text-slate-500">
<span>Question 1 of 4</span>
<span>0% Complete</span>
</div>
<h3 className="text-xl font-medium text-white mb-6">How many separate software tools do you use daily?</h3>
<div className="space-y-3">
<button className="w-full text-left p-4 rounded-xl border border-slate-600 hover:border-slate-400 hover:bg-slate-700 transition-all flex items-center justify-between group" onclick="nextStep(2)">
<span>1-2 Tools</span>
<iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity" icon="lucide:chevron-right"></iconify-icon>
</button>
<button className="w-full text-left p-4 rounded-xl border border-slate-600 hover:border-slate-400 hover:bg-slate-700 transition-all flex items-center justify-between group" onclick="nextStep(2)">
<span>3-5 Tools</span>
<iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity" icon="lucide:chevron-right"></iconify-icon>
</button>
<button className="w-full text-left p-4 rounded-xl border border-slate-600 hover:border-slate-400 hover:bg-slate-700 transition-all flex items-center justify-between group" onclick="nextStep(2)">
<span>6+ Tools</span>
<iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity" icon="lucide:chevron-right"></iconify-icon>
</button>
</div>
</div>

<div className="quiz-step hidden" data-step="2">
<div className="flex justify-between items-center mb-4 text-xs font-medium uppercase tracking-wider text-slate-500">
<span>Question 2 of 4</span>
<span>25% Complete</span>
</div>
<h3 className="text-xl font-medium text-white mb-6">How often do important tasks slip through the cracks?</h3>
<div className="space-y-3">
<button className="w-full text-left p-4 rounded-xl border border-slate-600 hover:border-slate-400 hover:bg-slate-700 transition-all flex items-center justify-between group" onclick="nextStep(3)">
<span>Rarely / Never</span>
</button>
<button className="w-full text-left p-4 rounded-xl border border-slate-600 hover:border-slate-400 hover:bg-slate-700 transition-all flex items-center justify-between group" onclick="nextStep(3)">
<span>Sometimes</span>
</button>
<button className="w-full text-left p-4 rounded-xl border border-slate-600 hover:border-slate-400 hover:bg-slate-700 transition-all flex items-center justify-between group" onclick="nextStep(3)">
<span>Frequently</span>
</button>
</div>
</div>

<div className="quiz-step hidden" data-step="3">
<div className="flex justify-between items-center mb-4 text-xs font-medium uppercase tracking-wider text-slate-500">
<span>Question 3 of 4</span>
<span>50% Complete</span>
</div>
<h3 className="text-xl font-medium text-white mb-6">Do you have a dedicated IT automation specialist?</h3>
<div className="space-y-3">
<button className="w-full text-left p-4 rounded-xl border border-slate-600 hover:border-slate-400 hover:bg-slate-700 transition-all flex items-center justify-between group" onclick="nextStep(4)">
<span>Yes, Full Time</span>
</button>
<button className="w-full text-left p-4 rounded-xl border border-slate-600 hover:border-slate-400 hover:bg-slate-700 transition-all flex items-center justify-between group" onclick="nextStep(4)">
<span>Part Time / Contractor</span>
</button>
<button className="w-full text-left p-4 rounded-xl border border-slate-600 hover:border-slate-400 hover:bg-slate-700 transition-all flex items-center justify-between group" onclick="nextStep(4)">
<span>No dedicated person</span>
</button>
</div>
</div>

<div className="quiz-step hidden" data-step="4">
<div className="flex justify-between items-center mb-4 text-xs font-medium uppercase tracking-wider text-slate-500">
<span>Question 4 of 4</span>
<span>75% Complete</span>
</div>
<h3 className="text-xl font-medium text-white mb-6">What is your top priority right now?</h3>
<div className="space-y-3">
<button className="w-full text-left p-4 rounded-xl border border-slate-600 hover:border-slate-400 hover:bg-slate-700 transition-all flex items-center justify-between group" onclick="nextStep('result')">
<span>Reducing Manual Work</span>
</button>
<button className="w-full text-left p-4 rounded-xl border border-slate-600 hover:border-slate-400 hover:bg-slate-700 transition-all flex items-center justify-between group" onclick="nextStep('result')">
<span>Increasing Sales</span>
</button>
<button className="w-full text-left p-4 rounded-xl border border-slate-600 hover:border-slate-400 hover:bg-slate-700 transition-all flex items-center justify-between group" onclick="nextStep('result')">
<span>Improving Client Experience</span>
</button>
</div>
</div>

<div className="quiz-step hidden text-center py-4" data-step="result">
<div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/10 text-green-500 rounded-full mb-4">
<iconify-icon icon="lucide:check" strokeWidth="2" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-white mb-4">Your Agency is a Perfect Candidate.</h3>
<p className="text-slate-300 mb-8 max-w-lg mx-auto">
                        You're dealing with complexity and inefficiency that an AI Operating System could eliminate immediately. We can help you reclaim time and grow faster.
                    </p>
<a className="inline-block px-6 py-3 text-sm font-medium text-slate-900 bg-white rounded-lg hover:bg-slate-200 transition-colors" href="#">
                        Discuss Your Results
                    </a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
<p>© 2025 StanceX Systems. All rights reserved.</p>
<p>Ready when you are.</p>
</div>
</section>



    </>
  );
}
