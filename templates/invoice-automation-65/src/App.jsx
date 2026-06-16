import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // ROI Calculator Logic
        document.addEventListener('DOMContentLoaded', () => {
            const invoicesInput = document.getElementById('invoices-range');
            const timeInput = document.getElementById('time-range');
            
            const invoicesValDisplay = document.getElementById('invoices-val');
            const timeValDisplay = document.getElementById('time-val');
            
            const manualCostDisplay = document.getElementById('manual-cost');
            const manualHoursDisplay = document.getElementById('manual-hours');
            const savingsDisplay = document.getElementById('savings-result');
            const hoursSavedDisplay = document.getElementById('hours-saved');

            // Constants
            const HOURLY_RATE = 35; // Fully burdened AP cost assumption
            const AUTO_TIME_PER_INVOICE = 0.75; // Minutes

            function formatCurrency(num) {
                return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }

            function updateCalculator() {
                const invoices = parseInt(invoicesInput.value);
                const manualTimePerInvoice = parseFloat(timeInput.value);

                // Update UI Labels
                invoicesValDisplay.textContent = formatCurrency(invoices);
                timeValDisplay.textContent = manualTimePerInvoice;

                // Calculations
                // 1. Current Manual State
                const totalManualMinutes = invoices * manualTimePerInvoice;
                const totalManualHours = totalManualMinutes / 60;
                const totalManualCost = totalManualHours * HOURLY_RATE;

                // 2. Automated State
                const totalAutoMinutes = invoices * AUTO_TIME_PER_INVOICE;
                const totalAutoHours = totalAutoMinutes / 60;
                const totalAutoCost = totalAutoHours * HOURLY_RATE;

                // 3. Savings
                const hoursSaved = totalManualHours - totalAutoHours;
                const moneySaved = totalManualCost - totalAutoCost;

                // Update Result UI
                manualCostDisplay.textContent = formatCurrency(Math.floor(totalManualCost));
                manualHoursDisplay.textContent = Math.floor(totalManualHours);
                savingsDisplay.textContent = formatCurrency(Math.floor(moneySaved));
                hoursSavedDisplay.textContent = Math.floor(hoursSaved);
            }

            invoicesInput.addEventListener('input', updateCalculator);
            timeInput.addEventListener('input', updateCalculator);
            
            // Initial calculation
            updateCalculator();
        });

        // Form Logic
        function submitForm(e) {
            e.preventDefault();
            const btn = e.target.querySelector('button');
            const originalText = btn.innerHTML;
            
            btn.textContent = 'Scheduling...';
            btn.disabled = true;

            setTimeout(() => {
                btn.innerHTML = '✓ Request Sent';
                btn.style.backgroundColor = '#059669'; // Emerald 600
                btn.style.color = '#fff';
                
                setTimeout(() => {
                    e.target.reset();
                    btn.innerHTML = originalText;
                    btn.disabled = false;
                    btn.style.backgroundColor = '';
                    btn.style.color = '';
                }, 2500);
            }, 1000);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 w-full h-full -z-10 pointer-events-none bg-[radial-gradient(circle_at_top_center,_var(--tw-gradient-stops))] from-neutral-100/50 via-white to-white"></div>
<div aria-hidden="true" className="fixed inset-0 z-0 bg-grid-pattern opacity-40 pointer-events-none"></div>

<nav className="fixed top-0 w-full z-50 border-b border-neutral-200 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
<div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="bg-neutral-900 w-3 h-3"></div>
<span className="text-sm font-medium text-neutral-900 tracking-tight">ACTIFY AUTOMATIONS</span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-wide text-neutral-500">
<a className="hover:text-neutral-900 transition-colors" href="#problem">THE PROBLEM</a>
<a className="hover:text-neutral-900 transition-colors" href="#roi-calculator">ROI CALCULATOR</a>
<a className="hover:text-neutral-900 transition-colors" href="#how-it-works">PROCESS</a>
<a className="hover:text-neutral-900 transition-colors" href="#proof">RESULTS</a>
</div>
<a className="group relative rounded-sm p-[1px] bg-gradient-to-b from-neutral-200 to-neutral-300 hover:from-emerald-400 hover:to-emerald-500 transition-all duration-300" href="#book-call">
<div className="relative h-full w-full bg-white/50 rounded-[1px] px-3 sm:px-4 py-2 flex items-center gap-2 backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
<span className="hidden sm:inline text-xs font-medium text-neutral-600 group-hover:text-black transition-colors">Book Discovery Call</span>
<span className="sm:hidden text-xs font-medium text-neutral-600 group-hover:text-black transition-colors">Book Call</span>
</div>
</a>
</div>
</nav>

<main className="sm:pt-32 sm:pb-24 sm:px-6 max-w-6xl mx-auto pt-24 px-4 pb-12 relative z-10">
<div className="flex flex-col md:pl-12 sm:pl-8 sm:gap-8 border-neutral-200 border-l pb-20 pl-6 relative gap-y-6 items-start">

<div aria-hidden="true" className="absolute -left-[5px] top-0 w-[9px] h-[9px] bg-white border border-neutral-200"></div>
<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-neutral-50/80 backdrop-blur-sm border border-neutral-200 rounded-full animate-in animate-in-delay-1 shadow-sm">
<span className="relative flex h-2 w-2">
<span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="inline-flex bg-emerald-500 w-2 h-2 rounded-full relative"></span>
</span>
<span className="text-[10px] uppercase font-medium text-emerald-600 tracking-wide">For Homebuilders &amp; Developers</span>
</div>
<h1 className="sm:text-5xl md:text-7xl leading-[1.1] animate-in animate-in-delay-2 text-3xl font-medium text-neutral-900 tracking-tighter">
                Every New Division Means <br className="hidden sm:block"/>
                More AP Headcount. <br/>
<span className="text-neutral-400">It Doesn't Have To.</span>
</h1>
<p className="md:text-base leading-relaxed animate-in animate-in-delay-2 text-sm font-light text-neutral-500 max-w-xl">
                Invoice coding automation that lets you scale 3x without adding expensive AP staff. Cut coding time by 87.5% and stop paying $65-80k per hire just to keep up with volume.
            </p>
<div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 sm:mt-6 w-full sm:w-auto animate-in animate-in-delay-3">

<div className="p-[1px] rounded-sm bg-gradient-to-b from-neutral-700 to-neutral-900 w-full sm:w-auto shadow-sm">
<a className="block hover:bg-neutral-800 transition-colors text-xs font-semibold text-white tracking-wide text-center bg-neutral-900 w-full h-full rounded-[1px] pt-3.5 pr-6 pb-3.5 pl-6" href="#book-call">
                        BOOK A DISCOVERY CALL
                    </a>
</div>

<div className="p-[1px] rounded-sm bg-gradient-to-b from-neutral-200 to-neutral-300 w-full sm:w-auto shadow-sm hover:from-neutral-300 hover:to-neutral-400 transition-all">
<a className="hover:text-black transition-colors flex items-center justify-center gap-2 text-xs font-medium text-neutral-600 text-center bg-white/90 w-full h-full rounded-[1px] pt-3.5 pr-6 pb-3.5 pl-6 backdrop-blur-sm" href="#proof">
<iconify-icon icon="lucide:bar-chart-2" strokeWidth="1.5" width="14"></iconify-icon>
                        VIEW CHESMAR CASE STUDY
                    </a>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/80 to-transparent z-20 pointer-events-none"></div>

<div className="relative z-30 mt-8 sm:mt-16 grid grid-cols-2 md:grid-cols-4 border-y border-neutral-200 animate-in animate-in-delay-3 bg-white/60 backdrop-blur-sm">
<div className="p-4 sm:p-8 border-r border-neutral-200 text-center">
<div className="sm:text-2xl md:text-3xl text-xl font-medium text-neutral-900 tracking-tighter mb-1">87.5%</div>
<div className="text-[9px] sm:text-[10px] uppercase text-neutral-500 tracking-widest font-mono">Reduction in labor</div>
</div>
<div className="p-4 sm:p-8 md:border-r border-neutral-200 text-center">
<div className="sm:text-2xl md:text-3xl text-xl font-medium text-neutral-900 tracking-tighter mb-1">70%</div>
<div className="text-[9px] sm:text-[10px] uppercase text-neutral-500 tracking-widest font-mono">Touchless Process</div>
</div>
<div className="p-4 sm:p-8 border-r border-t md:border-t-0 border-neutral-200 text-center">
<div className="sm:text-2xl md:text-3xl text-xl font-medium text-neutral-900 tracking-tighter mb-1">Zero</div>
<div className="text-[9px] sm:text-[10px] uppercase text-neutral-500 tracking-widest font-mono">New Hires Needed</div>
</div>
<div className="p-4 sm:p-8 text-center border-t md:border-t-0 border-neutral-200">
<div className="sm:text-2xl md:text-3xl text-xl font-medium text-neutral-900 tracking-tighter mb-1">97%</div>
<div className="text-[9px] sm:text-[10px] uppercase text-neutral-500 tracking-widest font-mono">Uptime Guarantee</div>
</div>
</div>
</main>

<section className="py-12 border-b border-neutral-200 bg-white relative overflow-hidden pause-on-hover">
<div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
<div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
<div className="flex animate-scroll hover:pause">

<div className="flex items-center gap-16 px-8 min-w-max">
<div className="flex items-center gap-2 text-neutral-400 grayscale hover:grayscale-0 transition-all duration-300">
<iconify-icon icon="lucide:building-2" strokeWidth="1.5" width="20"></iconify-icon>
<span className="font-semibold tracking-tight text-lg">Chesmar Homes</span>
</div>
<div className="flex items-center gap-2 text-neutral-400 grayscale hover:grayscale-0 transition-all duration-300">
<iconify-icon icon="lucide:home" strokeWidth="1.5" width="20"></iconify-icon>
<span className="font-semibold tracking-tight text-lg">WestPoint</span>
</div>
<div className="flex items-center gap-2 text-neutral-400 grayscale hover:grayscale-0 transition-all duration-300">
<iconify-icon icon="lucide:layers" strokeWidth="1.5" width="20"></iconify-icon>
<span className="font-semibold tracking-tight text-lg">Sage ERP</span>
</div>
<div className="flex items-center gap-2 text-neutral-400 grayscale hover:grayscale-0 transition-all duration-300">
<iconify-icon icon="lucide:database" strokeWidth="1.5" width="20"></iconify-icon>
<span className="font-semibold tracking-tight text-lg">JD Edwards</span>
</div>
<div className="flex items-center gap-2 text-neutral-400 grayscale hover:grayscale-0 transition-all duration-300">
<iconify-icon icon="lucide:file-spreadsheet" strokeWidth="1.5" width="20"></iconify-icon>
<span className="font-semibold tracking-tight text-lg">QuickBooks</span>
</div>
<div className="flex items-center gap-2 text-neutral-400 grayscale hover:grayscale-0 transition-all duration-300">
<iconify-icon icon="lucide:hard-hat" strokeWidth="1.5" width="20"></iconify-icon>
<span className="font-semibold tracking-tight text-lg">Viewpoint</span>
</div>
</div>

<div className="flex items-center gap-16 px-8 min-w-max">
<div className="flex items-center gap-2 text-neutral-400 grayscale hover:grayscale-0 transition-all duration-300">
<iconify-icon icon="lucide:building-2" strokeWidth="1.5" width="20"></iconify-icon>
<span className="font-semibold tracking-tight text-lg">Chesmar Homes</span>
</div>
<div className="flex items-center gap-2 text-neutral-400 grayscale hover:grayscale-0 transition-all duration-300">
<iconify-icon icon="lucide:home" strokeWidth="1.5" width="20"></iconify-icon>
<span className="font-semibold tracking-tight text-lg">WestPoint</span>
</div>
<div className="flex items-center gap-2 text-neutral-400 grayscale hover:grayscale-0 transition-all duration-300">
<iconify-icon icon="lucide:layers" strokeWidth="1.5" width="20"></iconify-icon>
<span className="font-semibold tracking-tight text-lg">Sage ERP</span>
</div>
<div className="flex items-center gap-2 text-neutral-400 grayscale hover:grayscale-0 transition-all duration-300">
<iconify-icon icon="lucide:database" strokeWidth="1.5" width="20"></iconify-icon>
<span className="font-semibold tracking-tight text-lg">JD Edwards</span>
</div>
<div className="flex items-center gap-2 text-neutral-400 grayscale hover:grayscale-0 transition-all duration-300">
<iconify-icon icon="lucide:file-spreadsheet" strokeWidth="1.5" width="20"></iconify-icon>
<span className="font-semibold tracking-tight text-lg">QuickBooks</span>
</div>
<div className="flex items-center gap-2 text-neutral-400 grayscale hover:grayscale-0 transition-all duration-300">
<iconify-icon icon="lucide:hard-hat" strokeWidth="1.5" width="20"></iconify-icon>
<span className="font-semibold tracking-tight text-lg">Viewpoint</span>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-24 border-b border-neutral-200 bg-white relative z-10" id="problem">
<div className="max-w-4xl mx-auto px-4 sm:px-6">
<h2 className="text-[10px] font-mono text-emerald-600 uppercase tracking-widest mb-4 flex items-center gap-2">
<span className="w-1 h-1 bg-emerald-500 rounded-full"></span>
                The Growth Trap
            </h2>
<h3 className="sm:text-3xl md:text-4xl sm:mb-12 text-2xl font-medium text-neutral-900 tracking-tighter mb-8">
                Your AP labor costs grow every time your business does.
            </h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">

<div className="group relative rounded-sm p-[1px] bg-gradient-to-b from-neutral-200 via-neutral-200 to-neutral-300 hover:from-neutral-300 hover:via-neutral-400 hover:to-neutral-500 transition-all duration-500 h-full">
<div className="p-6 sm:p-8 bg-neutral-50 rounded-[1px] h-full relative z-10">
<div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-neutral-200 mb-4 sm:mb-6 text-orange-500 shadow-sm">
<iconify-icon icon="lucide:users" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<h4 className="text-base font-medium text-neutral-900 tracking-tight mb-2">The Hiring Loop</h4>
<p className="leading-relaxed text-xs font-light text-neutral-500">
                            Each new division or community adds invoice volume. Each volume increase forces another AP hire. Each hire costs $65-80k per year plus six months to ramp.
                        </p>
</div>
</div>

<div className="group relative rounded-sm p-[1px] bg-gradient-to-b from-neutral-200 via-neutral-200 to-neutral-300 hover:from-neutral-300 hover:via-neutral-400 hover:to-neutral-500 transition-all duration-500 h-full">
<div className="p-6 sm:p-8 bg-neutral-50 rounded-[1px] h-full relative z-10">
<div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-neutral-200 mb-4 sm:mb-6 text-red-500 shadow-sm">
<iconify-icon icon="lucide:alert-triangle" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<h4 className="text-base font-medium text-neutral-900 tracking-tight mb-2">Financial Exposure</h4>
<p className="leading-relaxed text-xs font-light text-neutral-500">
                            Manual coding creates GL errors. Costs on closed jobs trigger audit findings. Remediation piles up, and lender covenants come into question.
                        </p>
</div>
</div>
</div>
<p className="mt-8 text-center text-sm font-light text-neutral-500 max-w-2xl mx-auto">
                The longer this continues, the more your cost to scale becomes a ceiling on your growth.
            </p>
</div>
</section>

<section className="py-16 sm:py-24 border-b border-neutral-200 bg-neutral-50 relative z-10" id="roi-calculator">
<div className="max-w-4xl mx-auto px-4 sm:px-6">
<div className="text-center mb-10">
<h2 className="text-[10px] font-mono text-emerald-600 uppercase tracking-widest mb-4 flex items-center justify-center gap-2">
<span className="w-1 h-1 bg-emerald-500 rounded-full"></span>
                    ROI Calculator
                </h2>
<h3 className="text-2xl sm:text-3xl font-medium text-neutral-900 tracking-tighter">Calculate your scaling capacity.</h3>
</div>
<div className="relative p-[1px] rounded-sm bg-gradient-to-b from-neutral-200 to-neutral-300 shadow-sm">
<div className="bg-white rounded-[1px] flex flex-col md:flex-row">

<div className="w-full md:w-1/2 p-6 sm:p-8 border-b md:border-b-0 md:border-r border-neutral-100">
<div className="space-y-8">

<div>
<div className="flex justify-between items-baseline mb-3">
<label className="text-[10px] font-mono uppercase text-neutral-500 tracking-wider">Monthly Invoice Volume</label>
<div className="font-medium text-neutral-900 text-sm"><span id="invoices-val">1,000</span></div>
</div>
<input className="w-full" id="invoices-range" max="5000" min="100" step="50" type="range" value="1000"/>
<div className="flex justify-between text-[10px] text-neutral-400 mt-2 font-mono">
<span>100</span>
<span>5,000</span>
</div>
</div>

<div>
<div className="flex justify-between items-baseline mb-3">
<label className="text-[10px] font-mono uppercase text-neutral-500 tracking-wider">Current Mins per Invoice</label>
<div className="font-medium text-neutral-900 text-sm"><span id="time-val">6</span> min</div>
</div>
<input className="w-full" id="time-range" max="15" min="2" step="0.5" type="range" value="6"/>
<div className="flex justify-between text-[10px] text-neutral-400 mt-2 font-mono">
<span>2m</span>
<span>15m</span>
</div>
</div>
</div>
</div>

<div className="w-full md:w-1/2 p-6 sm:p-8 bg-neutral-50/50 flex flex-col justify-center">
<div className="mb-6 pb-6 border-b border-neutral-200">
<span className="block text-[10px] font-mono uppercase text-neutral-500 mb-1">Manual Labor Cost (Monthly)</span>
<div className="text-2xl font-medium text-neutral-400 tracking-tight">$<span id="manual-cost">3,500</span></div>
<div className="text-[10px] text-neutral-400 mt-1 font-mono"><span id="manual-hours">100</span> Hours Spent</div>
</div>
<div>
<span className="block text-[10px] font-mono uppercase text-emerald-600 mb-1 flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                Savings With Automation
                            </span>
<div className="text-4xl font-semibold text-neutral-900 tracking-tighter mb-2">$<span id="savings-result">3,063</span></div>
<p className="text-xs text-neutral-500 font-light leading-relaxed">
                                You recover <span className="text-emerald-600 font-medium"><span id="hours-saved">88</span> hours</span> per month. That's labor capacity reallocated to growth, not data entry.
                            </p>
</div>
</div>
</div>
</div>
<p className="text-[10px] text-neutral-400 text-center mt-4">Calculations based on $35/hr fully burdened AP cost.</p>
</div>
</section>

<section className="sm:py-24 bg-white z-10 pt-16 pb-16 relative" id="how-it-works">
<div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
<div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 sm:mb-16 gap-4 sm:gap-6 border-b border-neutral-200 pb-6 sm:pb-8">
<div className="">
<h2 className="text-[10px] font-mono text-emerald-600 uppercase tracking-widest mb-4 flex items-center gap-2">
<span className="w-1 h-1 bg-emerald-500 rounded-full"></span>
                        Implementation
                    </h2>
<h3 className="text-2xl font-medium text-neutral-900 tracking-tighter sm:text-2xl">Done-WITH-You Automation.</h3>
</div>
<p className="text-xs font-light text-neutral-500 max-w-md sm:text-xs">
                    We do not hand you software and wish you luck. We work alongside your team to build a custom automation engine trained on your invoices and ERP.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-200 border border-neutral-200">
<div className="bg-white p-6 sm:p-10 hover:bg-neutral-50 transition-colors duration-300">
<div className="sm:mb-6 inline-block text-xs text-neutral-500 font-mono bg-neutral-50 border-neutral-200 border rounded-sm mb-4 pt-1 pr-2 pb-1 pl-2">01 / FIT</div>
<h4 className="sm:text-lg text-base font-medium text-neutral-900 tracking-tight mb-3">Discovery &amp; Blueprint</h4>
<p className="leading-relaxed text-xs font-light text-neutral-500">
                        We map your current workflow, analyze your invoice types, and calculate your custom ROI. You see the exact savings before any commitment.
                    </p>
</div>
<div className="bg-white p-6 sm:p-10 hover:bg-neutral-50 transition-colors duration-300">
<div className="sm:mb-6 inline-block text-xs text-neutral-500 font-mono bg-neutral-50 border-neutral-200 border rounded-sm mb-4 pt-1 pr-2 pb-1 pl-2">02 / PROVE</div>
<h4 className="sm:text-lg text-base font-medium text-neutral-900 tracking-tight mb-3">Pilot Validation</h4>
<p className="leading-relaxed text-xs font-light text-neutral-500">
                        We prove 70% straight-through processing on your actual invoices. No commitment until you see it work with your own data.
                    </p>
</div>
<div className="bg-white p-6 sm:p-10 hover:bg-neutral-50 transition-colors duration-300">
<div className="sm:mb-6 inline-block text-xs text-neutral-500 font-mono bg-neutral-50 border-neutral-200 border rounded-sm mb-4 pt-1 pr-2 pb-1 pl-2">03 / SCALE</div>
<h4 className="sm:text-lg text-base font-medium text-neutral-900 tracking-tight mb-3">Go Live &amp; Optimize</h4>
<p className="leading-relaxed text-xs font-light text-neutral-500">
                        Full deployment. 70% of invoices process touchless. The remaining 30% are pre-filled with 90% accuracy. Your team verifies instead of codes.
                    </p>
</div>
</div>
</div>
</section>

<section className="sm:py-24 z-10 bg-white border-neutral-200 border-b pt-16 pb-16 relative" id="proof">
<div className="max-w-6xl mx-auto px-4 sm:px-6 z-10 relative">
<div className="flex flex-col lg:flex-row justify-between items-start mb-12 sm:mb-16 gap-6 sm:gap-10 border-b border-neutral-200 pb-6 sm:pb-8">
<h2 className="sm:text-3xl md:text-4xl leading-[1.1] text-2xl font-medium text-neutral-900 tracking-tight max-w-2xl">
                    Chesmar Homes: From <span className="text-neutral-400">100 Hours</span> to <span className="text-emerald-600">1 Hour</span> of manual coding.
                </h2>
<a className="flex items-center gap-2 text-sm font-medium text-neutral-900 border-b border-neutral-200 pb-1 hover:border-emerald-500 hover:text-emerald-600 transition-colors" href="#book-call">
                    See Full Case Study
                    <iconify-icon icon="lucide:arrow-up-right" strokeWidth="2" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="group relative rounded-sm p-[1px] bg-gradient-to-b from-neutral-200 via-neutral-200 to-neutral-300 transition-all duration-300 h-full">
<div className="sm:p-8 flex flex-col min-h-[320px] z-10 bg-neutral-50 h-full rounded-[1px] pt-6 pr-6 pb-6 pl-6 relative justify-between">
<div>
<h3 className="sm:text-lg leading-tight text-base font-medium text-neutral-900 tracking-tight mb-4">"The math is brutal."</h3>
<p className="leading-relaxed sm:text-sm text-xs font-light text-neutral-500">
                                "Before automation, AP staff was buried in manual data entry at 1.5 minutes per invoice. Now, manual work is reduced to 1.04 hours total per month."
                            </p>
</div>
<div className="mt-6 border-t border-neutral-200 pt-4">
<div className="flex items-center gap-3">
<div className="flex text-sm font-medium text-neutral-900 bg-white w-10 h-10 border-neutral-200 border rounded-full items-center justify-center">CH</div>
<div>
<div className="leading-none text-sm font-medium text-neutral-900 mb-1">Chesmar Homes</div>
<div className="text-[10px] uppercase text-neutral-500 tracking-wider font-mono">4 Divisions</div>
</div>
</div>
</div>
</div>
</div>

<div className="group relative rounded-sm p-[1px] bg-gradient-to-b from-neutral-200 via-neutral-200 to-neutral-300 transition-all duration-300 h-full">
<div className="bg-neutral-50 p-6 sm:p-8 rounded-[1px] flex flex-col items-center justify-between min-h-[320px] h-full relative z-10">
<div className="text-center">
<span className="uppercase block text-xs text-neutral-500 tracking-widest font-mono mb-2">MONTHLY SAVINGS</span>
<span className="text-sm font-medium text-neutral-900 tracking-tight">Labor Value Reallocated</span>
</div>
<div className="relative w-32 h-32 flex items-center justify-center">
<div className="border-neutral-200 border rounded-full absolute top-0 right-0 bottom-0 left-0"></div>
<div className="text-3xl font-medium text-neutral-900 tracking-tighter text-emerald-600">$10.5k</div>
</div>
<div className="text-center w-full">
<p className="text-[10px] text-neutral-400 mb-2 font-mono uppercase">Unnecessary Charges Prevented</p>
<div className="w-full bg-white border border-neutral-200 text-neutral-900 text-xs font-semibold tracking-wide py-3 rounded-sm">
                                $21,000+
                            </div>
</div>
</div>
</div>

<div className="group relative rounded-sm p-[1px] bg-gradient-to-b from-neutral-800 to-neutral-700 sm:col-span-2 lg:col-span-1 h-full">
<div className="flex flex-col bg-neutral-900 min-h-[320px] h-full rounded-[1px] p-6 sm:p-8 justify-between relative z-10">
<div className="flex justify-between items-start text-white">
<span className="sm:text-lg text-base font-medium tracking-tight">Pilot Validation</span>
<iconify-icon className="text-neutral-500" icon="lucide:arrow-up-right" width="18"></iconify-icon>
</div>
<p className="leading-relaxed text-base font-light text-neutral-300">
                            We prove 70% straight-through processing on your actual invoices before any ongoing commitment. If it does not hit the target, you walk away.
                        </p>
<div className="text-sm text-neutral-400 space-y-3">
<div className="flex gap-3 items-center text-sm text-neutral-300">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                No Risk Commitment
                            </div>
<div className="flex gap-3 items-center text-sm text-neutral-300">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                90-Day Guarantee
                            </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-24 bg-neutral-50 border-b border-neutral-200 relative z-10" id="book-call">
<div className="max-w-4xl mx-auto px-4 sm:px-6">
<div className="relative p-[1px] rounded-sm bg-gradient-to-b from-neutral-200 to-neutral-300 shadow-sm">
<div className="bg-white p-6 sm:p-8 md:p-12 rounded-[1px]">
<div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
<div className="flex-1">
<div className="inline-flex items-center gap-2 px-2 py-1 bg-emerald-50 border border-emerald-100 rounded-sm mb-4 sm:mb-6">
<iconify-icon className="text-emerald-600" icon="lucide:shield-check" width="12"></iconify-icon>
<span className="text-[10px] font-mono text-emerald-600 uppercase tracking-wider">Risk Reversal</span>
</div>
<h2 className="text-2xl sm:text-3xl font-medium text-neutral-900 tracking-tight mb-4">Stop paying for growth with AP headcount.</h2>
<p className="text-neutral-500 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                                Book a 15-minute discovery call to see how Invoice Coding can cut your coding time by 87.5% and let you scale without adding staff.
                            </p>
<ul className="space-y-2 mb-6 sm:mb-8">
<li className="flex items-center gap-3 text-xs text-neutral-600">
<iconify-icon className="text-emerald-500" icon="lucide:check" width="14"></iconify-icon>
                                    15 minutes to see if there is a fit
                                </li>
<li className="flex items-center gap-3 text-xs text-neutral-600">
<iconify-icon className="text-emerald-500" icon="lucide:check" width="14"></iconify-icon>
                                    Free Blueprint Audit of your workflow
                                </li>
<li className="flex items-center gap-3 text-xs text-neutral-600">
<iconify-icon className="text-emerald-500" icon="lucide:check" width="14"></iconify-icon>
                                    See exact ROI before commitment
                                </li>
</ul>
</div>
<div className="w-full md:w-80">
<form className="space-y-4" onsubmit="submitForm(event)">
<div>
<label className="block text-[10px] font-mono uppercase text-neutral-500 mb-1.5" htmlFor="email">Work Email</label>
<input className="w-full input-base px-3 py-3 rounded-sm text-sm placeholder:text-neutral-400" id="email" placeholder="name@company.com" required="" type="email"/>
</div>
<div>
<label className="block text-[10px] font-mono uppercase text-neutral-500 mb-1.5" htmlFor="company">Company Name</label>
<input className="w-full input-base px-3 py-3 rounded-sm text-sm placeholder:text-neutral-400" id="company" placeholder="Company" required="" type="text"/>
</div>
<div className="p-[1px] rounded-sm bg-gradient-to-b from-neutral-700 to-neutral-900 shadow-sm">
<button className="w-full bg-neutral-900 text-white px-4 py-3 text-xs font-semibold tracking-wide hover:bg-neutral-800 transition-colors rounded-[1px] flex items-center justify-center gap-2" type="submit">
                                        BOOK DISCOVERY CALL
                                        <iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>
</button>
</div>
<p className="text-[10px] text-neutral-400 text-center">Zero commitment. 100% Value.</p>
</form>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white py-8 sm:py-12 border-t border-neutral-200">
<div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-neutral-500 font-mono uppercase tracking-widest">
<div className="flex items-center gap-2">
<div className="w-3 h-3 bg-neutral-900"></div>
<span>Actify Automations © 2025</span>
</div>
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                Systems Operational
            </div>
</div>
</footer>



    </>
  );
}
