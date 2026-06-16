import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // DOM Elements
        const elVolumeSlider = document.getElementById('inputVolumeSlider');
        const elVolumeText = document.getElementById('inputVolumeText');
        const elTimeSlider = document.getElementById('inputTime');
        const elRateInput = document.getElementById('inputRate');
        
        const displayTime = document.getElementById('displayTime');
        
        const resMoneySaved = document.getElementById('resultMoneySaved');
        const resHoursSaved = document.getElementById('resultHoursSaved');
        const resReduction = document.getElementById('resultReductionPct');
        
        const barManual = document.getElementById('barManual');
        const barPlatform = document.getElementById('barPlatform');
        const labelManual = document.getElementById('labelManualCost');
        const labelPlatform = document.getElementById('labelPlatformCost');

        const timeManualWeeks = document.getElementById('timeManualWeeks');

        // Formatter
        const USD = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0
        });

        const NumberFmt = new Intl.NumberFormat('en-US');

        // Logic
        function calculate() {
            // Inputs
            let volume = parseInt(elVolumeText.value) || 0;
            let timePerTask = parseInt(elTimeSlider.value) || 0; // minutes
            let rate = parseFloat(elRateInput.value) || 0; // per hour

            // Update UI mirror elements
            displayTime.textContent = timePerTask;
            elVolumeSlider.value = volume;

            // Calculations
            // 1. Manual Cost
            // Cost = Volume * (Minutes / 60) * HourlyRate
            const totalManualHours = (volume * timePerTask) / 60;
            const manualCost = totalManualHours * rate;

            // 2. Platform Cost (Automation assumption)
            // Assumption: Platform reduces time by 95% (takes 5% of time) OR fixed cost per unit.
            // Let's assume a simplified SaaS model: Platform does it in 1 minute equivalent cost + subscription.
            // For ROI calculator visuals, let's assume Platform cost is roughly 10% of manual cost + base.
            // Formula: Volume * (1 min / 60) * (Rate * 0.5 [lower oversight cost]) 
            // Better Logic: Platform Cost = Volume * $0.50 (flat fee) + Base $100? 
            // Let's stick to prompt implications: "Cost Reduction".
            // Let's assume platform takes 0.5 minutes per task (automated) and no extra hourly cost, just subscription.
            // We'll approximate platform cost as 8% of manual cost to show high ROI.
            const platformCost = manualCost * 0.08; 
            
            const savings = manualCost - platformCost;
            const hoursSaved = totalManualHours * 0.92; // Assuming 92% time saved

            // 3. Feedback Velocity Calculation (Work days)
            // 8 hour work days
            const workDays = totalManualHours / 8;
            let timeString = "";
            if(workDays > 20) timeString = `${Math.ceil(workDays/20)} Months`;
            else if(workDays > 5) timeString = `${Math.ceil(workDays/5)} Weeks`;
            else if(workDays > 1) timeString = `${Math.ceil(workDays)} Days`;
            else timeString = `${Math.ceil(totalManualHours)} Hours`;
            
            if(totalManualHours < 1) timeString = "1 Hour";


            // Updates
            resMoneySaved.textContent = USD.format(savings);
            resHoursSaved.textContent = NumberFmt.format(Math.round(hoursSaved));
            
            // Percentage
            const pct = Math.round(((manualCost - platformCost) / manualCost) * 100);
            resReduction.textContent = `${pct}% Cost Reduction`;

            // Bars
            // Scale bars relative to Manual Cost (which is 100%)
            // But if values change drastically, we keep manual at 100% height visually 
            // and platform as a percentage of that.
            barManual.style.height = '100%';
            let platformHeight = (platformCost / manualCost) * 100;
            if(platformHeight < 2) platformHeight = 2; // min height visibility
            barPlatform.style.height = `${platformHeight}%`;

            // Bar Labels
            labelManual.textContent = USD.format(manualCost);
            labelPlatform.textContent = USD.format(platformCost);

            // Time Label
            timeManualWeeks.textContent = timeString;
        }

        // Sync inputs
        elVolumeSlider.addEventListener('input', (e) => {
            elVolumeText.value = e.target.value;
            calculate();
        });
        elVolumeText.addEventListener('input', (e) => {
            elVolumeSlider.value = e.target.value;
            calculate();
        });
        elTimeSlider.addEventListener('input', calculate);
        elRateInput.addEventListener('input', calculate);

        // Presets
        function setScenario(type) {
            // Reset button styles
            document.querySelectorAll('.scenario-btn').forEach(btn => {
                btn.classList.remove('bg-indigo-50', 'ring-2', 'ring-indigo-100', 'text-indigo-700');
                btn.classList.add('text-slate-600');
            });
            
            // Highlight clicked (this is a simplified approach, in React we'd use state)
            event.currentTarget.classList.remove('text-slate-600');
            event.currentTarget.classList.add('bg-indigo-50', 'ring-2', 'ring-indigo-100', 'text-indigo-700');

            if(type === 'hackathon') {
                elVolumeText.value = 150;
                elVolumeSlider.value = 150;
                elTimeSlider.value = 10;
                elRateInput.value = 30;
            } else if (type === 'university') {
                elVolumeText.value = 2500;
                elVolumeSlider.value = 2500;
                elTimeSlider.value = 20;
                elRateInput.value = 45;
            } else if (type === 'enterprise') {
                elVolumeText.value = 8000;
                elVolumeSlider.value = 8000;
                elTimeSlider.value = 45; // Complex QA
                elRateInput.value = 65; // Senior Eng
            }
            calculate();
        }

        // Initialize
        calculate();

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="max-w-6xl w-full mx-auto">

<div className="text-center mb-10 space-y-3">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-medium uppercase tracking-wider">
<iconify-icon icon="solar:chart-square-linear" width="14"></iconify-icon>
                ROI Calculator
            </div>
<h1 className="text-4xl md:text-5xl font-medium text-slate-900 tracking-tight">Calculate your efficiency gains</h1>
<p className="text-lg text-slate-500 max-w-2xl mx-auto font-normal">
                See how much time and budget you can recover by automating your evaluation workflows.
            </p>
</div>

<div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">

<div className="border-b border-slate-100 bg-slate-50/50 p-2 flex flex-wrap gap-2 justify-center sm:justify-start">
<button className="scenario-btn group flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all hover:bg-white hover:shadow-sm text-slate-600 focus:outline-none ring-offset-2 focus:ring-2 focus:ring-slate-200" onclick="setScenario('hackathon')">
<iconify-icon className="text-slate-400 group-hover:text-indigo-600" icon="solar:code-circle-linear"></iconify-icon>
                    Small Hackathon
                </button>
<button className="scenario-btn group flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all hover:bg-white hover:shadow-sm text-slate-600 focus:outline-none ring-offset-2 focus:ring-2 focus:ring-slate-200" onclick="setScenario('university')">
<iconify-icon className="text-slate-400 group-hover:text-indigo-600" icon="solar:diploma-linear"></iconify-icon>
                    University Exam
                </button>
<button className="scenario-btn group flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all hover:bg-white hover:shadow-sm text-slate-600 focus:outline-none ring-offset-2 focus:ring-2 focus:ring-slate-200" onclick="setScenario('enterprise')">
<iconify-icon className="text-slate-400 group-hover:text-indigo-600" icon="solar:buildings-2-linear"></iconify-icon>
                    Enterprise QA
                </button>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 min-h-[600px]">

<div className="lg:col-span-5 p-6 md:p-8 space-y-8 border-b lg:border-b-0 lg:border-r border-slate-100 bg-white z-10 relative">
<div>
<h3 className="text-sm font-medium text-slate-900 uppercase tracking-wider mb-6 flex items-center gap-2">
<iconify-icon className="text-indigo-600" icon="solar:tuning-2-linear" width="18"></iconify-icon>
                            Customize Scenario
                        </h3>

<div className="space-y-4 mb-8">
<div className="flex justify-between items-end">
<label className="block text-sm font-medium text-slate-700">Total Submissions / Devices</label>
<div className="relative w-24">
<input className="w-full text-right px-3 py-1.5 border border-slate-200 rounded-md text-slate-900 font-medium text-sm focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all" id="inputVolumeText" type="number" value="500"/>
</div>
</div>
<input className="w-full accent-indigo-600" id="inputVolumeSlider" max="10000" min="10" step="10" type="range" value="500"/>
<p className="text-xs text-slate-400 flex items-center gap-1">
<iconify-icon icon="solar:info-circle-linear" width="12"></iconify-icon>
                                Total number of items requiring evaluation per cycle.
                            </p>
</div>

<div className="space-y-4 mb-8">
<div className="flex justify-between items-end">
<label className="block text-sm font-medium text-slate-700">Avg. Manual Review Time</label>
<span className="text-sm font-semibold text-indigo-600 bg-indigo-50 px-2 py-1 rounded"><span id="displayTime">15</span> mins</span>
</div>
<input className="w-full accent-indigo-600" id="inputTime" max="60" min="1" step="1" type="range" value="15"/>
<p className="text-xs text-slate-400 flex items-center gap-1">
<iconify-icon icon="solar:clock-circle-linear" width="12"></iconify-icon>
                                Time needed for a human to grade/test one unit.
                            </p>
</div>

<div className="space-y-4">
<label className="block text-sm font-medium text-slate-700">Evaluator Hourly Cost</label>
<div className="relative rounded-md shadow-sm">
<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
<span className="text-slate-500 sm:text-sm">$</span>
</div>
<input className="block w-full rounded-md border-0 py-2.5 pl-7 pr-12 text-slate-900 ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 font-medium transition-shadow" id="inputRate" placeholder="0.00" type="number" value="40"/>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
<span className="text-slate-500 sm:text-sm">/hr</span>
</div>
</div>
<p className="text-xs text-slate-400 flex items-center gap-1">
<iconify-icon icon="solar:wallet-linear" width="12"></iconify-icon>
                                Average burdened cost of engineering or QA staff.
                            </p>
</div>
</div>

<div className="pt-6 border-t border-slate-100">
<div className="flex items-start gap-2 text-xs text-slate-400 leading-relaxed">
<iconify-icon className="text-slate-300 mt-0.5 min-w-[16px]" icon="solar:shield-check-linear" width="16"></iconify-icon>
<span>Calculated transparently: <br/> <span className="font-mono bg-slate-100 px-1 rounded text-slate-500">[Volume] × [Time] ÷ 60 × [Rate]</span></span>
</div>
</div>
</div>

<div className="lg:col-span-7 bg-slate-50/50 p-6 md:p-10 flex flex-col justify-between relative">

<div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: 'linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10 mb-10">
<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
<div className="text-sm font-medium text-slate-500 mb-1 flex items-center gap-1">
                                Total Money Saved
                                <iconify-icon className="text-green-500" icon="solar:wad-of-money-linear"></iconify-icon>
</div>
<div className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight" id="resultMoneySaved">$0</div>
<div className="text-xs font-medium text-green-600 mt-2 bg-green-50 inline-block px-2 py-0.5 rounded-full" id="resultReductionPct">90% Reduction</div>
</div>
<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
<div className="text-sm font-medium text-slate-500 mb-1 flex items-center gap-1">
                                Hours Eliminated
                                <iconify-icon className="text-indigo-500" icon="solar:hourglass-line-linear"></iconify-icon>
</div>
<div className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight" id="resultHoursSaved">0</div>
<div className="text-xs text-slate-400 mt-2">Manual labor reallocated</div>
</div>
</div>

<div className="flex-1 flex flex-col justify-end min-h-[250px] relative z-10">
<div className="flex items-end justify-center space-x-8 h-64 md:h-72 w-full max-w-lg mx-auto pb-6 border-b border-slate-200/60">

<div className="flex flex-col items-center justify-end h-full w-24 group">
<div className="mb-2 text-sm font-semibold text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity" id="labelManualCost">$5,000</div>
<div className="w-16 bg-gradient-to-t from-slate-300 to-slate-200 rounded-t-lg relative bar-transition group-hover:bg-slate-300" id="barManual" style={{height: '100%'}}>
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap arrow-bottom">Current Cost</div>
</div>
<div className="mt-3 text-xs font-medium uppercase tracking-wider text-slate-400">Manual</div>
</div>

<div className="flex flex-col items-center justify-end h-full w-24 group">
<div className="mb-2 text-sm font-semibold text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" id="labelPlatformCost">$200</div>
<div className="w-16 bg-gradient-to-t from-indigo-600 to-indigo-500 rounded-t-lg relative bar-transition shadow-lg shadow-indigo-500/20" id="barPlatform" style={{height: '10%'}}>
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-indigo-900 text-white text-xs py-1 px-2 rounded opacity-100 whitespace-nowrap arrow-bottom">With Automation</div>
</div>
<div className="mt-3 text-xs font-semibold uppercase tracking-wider text-indigo-600">Our Platform</div>
</div>
</div>
</div>

<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-center border-t border-slate-200 pt-6">
<div>
<div className="text-xs text-slate-400 uppercase tracking-wider font-medium mb-1">Feedback Velocity</div>
<div className="flex items-center gap-3">
<div className="text-sm text-slate-400 line-through decoration-red-400 decoration-2" id="timeManualWeeks">2 Weeks</div>
<iconify-icon className="text-slate-300" icon="solar:arrow-right-linear"></iconify-icon>
<div className="text-base font-semibold text-slate-900 flex items-center gap-1">
<iconify-icon className="text-yellow-500" icon="solar:bolt-linear"></iconify-icon>
<span id="timePlatform">Instant</span>
</div>
</div>
</div>
<div className="text-right">
<button className="w-full md:w-auto bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-lg text-sm font-medium transition-all shadow-lg shadow-slate-900/10 flex items-center justify-center gap-2">
                                Start Saving Today
                                <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
