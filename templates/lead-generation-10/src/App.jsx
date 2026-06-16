import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
brand: {
50: '#f0f9ff',
100: '#e0f2fe',
200: '#bae6fd',
300: '#7dd3fc',
400: '#38bdf8', // Requested Base
500: '#0ea5e9',
600: '#0284c7',
900: '#0c4a6e',
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
}
}
}
}



        // Tab Logic
        function switchTab(index) {
            // Reset styles
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('bg-white', 'ring-2', 'ring-brand-400', 'shadow-lg', 'text-slate-900');
                btn.classList.add('bg-transparent', 'text-slate-600', 'hover:bg-white');
                const chevron = btn.querySelector('iconify-icon[icon="solar:alt-arrow-right-linear"]');
                if(chevron) chevron.remove();
            });

            // Activate button
            const activeBtn = document.querySelector(`.tab-btn[data-index="${index}"]`);
            activeBtn.classList.remove('bg-transparent', 'text-slate-600', 'hover:bg-white');
            activeBtn.classList.add('bg-white', 'ring-2', 'ring-brand-400', 'shadow-lg', 'text-slate-900');
            
            // Add chevron
            const chevronIcon = document.createElement('iconify-icon');
            chevronIcon.setAttribute('icon', 'solar:alt-arrow-right-linear');
            chevronIcon.className = "text-brand-500 text-xl";
            activeBtn.appendChild(chevronIcon);

            // Switch Content
            document.querySelectorAll('.mockup').forEach(m => {
                m.classList.remove('opacity-100', 'z-10');
                m.classList.add('opacity-0', 'z-0', 'pointer-events-none');
            });
            const activeMockup = document.getElementById(`mockup-${index}`);
            activeMockup.classList.remove('opacity-0', 'z-0', 'pointer-events-none');
            activeMockup.classList.add('opacity-100', 'z-10');
        }

        // Calculator Logic
        function updateCalculator() {
            const leads = parseInt(document.getElementById('input-leads').value);
            const deals = parseInt(document.getElementById('input-deals').value); 
            const profitPerDeal = parseInt(document.getElementById('input-profit').value);

            // Update Input Displays
            document.getElementById('val-leads').innerText = leads;
            document.getElementById('val-deals').innerText = deals;
            document.getElementById('val-profit').innerText = '$' + profitPerDeal.toLocaleString();

            // Standard Calculations
            const stdLeads = leads;
            const stdShowUp = Math.round(stdLeads * 0.70);
            const stdDeals = deals; 
            const stdTotal = stdDeals * profitPerDeal;

            // Interactive Calculations (Boost Factors)
            const newLeads = Math.round(leads * 2.5);
            const newShowUp = Math.round(newLeads * 0.85);
            const showUpImprovement = 0.85 / 0.70;
            const newDeals = Math.round(stdDeals * 2.5 * showUpImprovement);
            const newTotal = newDeals * profitPerDeal;

            // Update Standard UI
            document.getElementById('std-leads').innerText = stdLeads;
            document.getElementById('std-showup').innerText = stdShowUp;
            document.getElementById('std-deals').innerText = stdDeals;
            document.getElementById('std-total').innerText = '$' + stdTotal.toLocaleString();

            // Update New UI
            document.getElementById('new-leads').innerText = newLeads;
            document.getElementById('new-showup').innerText = newShowUp;
            document.getElementById('new-deals').innerText = newDeals;
            document.getElementById('new-total').innerText = '$' + newTotal.toLocaleString();

            // Diff
            const diffMonthly = newTotal - stdTotal;
            document.getElementById('diff-monthly').innerText = '+$' + (diffMonthly/1000).toFixed(0) + 'k Additional Revenue';
        }

        // Initial Run
        updateCalculator();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
<div className="flex items-center justify-between p-1.5 pl-6 pr-2 bg-[#0f172a] text-white rounded-full shadow-2xl shadow-slate-900/10 border border-slate-800 w-full max-w-5xl backdrop-blur-md bg-opacity-95">

<div className="flex items-center gap-2 font-semibold text-lg tracking-tight mr-4 md:mr-8">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-brand-400 to-blue-500 flex items-center justify-center">
<iconify-icon className="text-white text-lg" icon="solar:bolt-linear"></iconify-icon>
</div>
<span className="hidden md:inline">LeadMagnet</span>
</div>

<div className="hidden md:flex items-center gap-1">
<a className="px-4 py-2 text-sm font-medium text-white hover:text-brand-300 transition-colors" href="#">Home</a>
<a className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors" href="#showcase">Features</a>
<a className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors" href="#results">Results</a>
<a className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors" href="#calculator">Calculator</a>
<a className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors" href="#faq">FAQ</a>
</div>

<a className="bg-white hover:bg-gray-50 text-slate-900 text-sm font-semibold py-2.5 px-6 rounded-full transition-all ml-auto md:ml-4" href="#book">
                Book Strategy
            </a>
</div>
</nav>

<section className="md:pt-48 md:pb-32 overflow-hidden bg-white pt-40 pb-20 relative">

<div className="absolute inset-0 overflow-hidden pointer-events-none select-none">

<div className="absolute -bottom-[20%] left-1/2 -translate-x-1/2 w-[180%] h-[800px] bg-gradient-to-t from-indigo-50/80 via-brand-50/50 to-transparent rounded-[100%] blur-3xl opacity-100"></div>

<div className="absolute -bottom-[35%] left-1/2 -translate-x-1/2 w-[130%] h-[700px] bg-gradient-to-t from-brand-100 via-blue-50/80 to-transparent rounded-[100%] blur-2xl opacity-90 mix-blend-multiply"></div>

<div className="absolute -bottom-[100px] left-1/2 -translate-x-1/2 w-[80%] h-[400px] bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-brand-200/40 via-brand-100/20 to-transparent blur-[60px]"></div>

<div className="absolute inset-0 bg-white/10 mix-blend-overlay"></div>
</div>
<div className="relative z-10 max-w-5xl mx-auto px-4 text-center flex flex-col items-center">

<div className="inline-flex items-center gap-3 px-2 py-1.5 pl-2 pr-4 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200/60 shadow-sm mb-8 animate-fade-in-up ring-1 ring-white/50">
<div className="flex -space-x-2">
<img alt="User" className="w-7 h-7 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=11"/>
<img alt="User" className="w-7 h-7 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=33"/>
<img alt="User" className="w-7 h-7 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=53"/>
</div>
<div className="flex items-center gap-1.5">
<div className="flex text-yellow-400 gap-0.5">
<iconify-icon className="text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xs" icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-xs font-semibold text-slate-600">Trusted by 200+ Agencies</span>
</div>
</div>

<h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-6 max-w-4xl mx-auto drop-shadow-sm">
                Fill Your Calendar With <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 via-blue-600 to-indigo-600">Qualified Leads</span> 
                In 90 Days.
            </h1>

<p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                We build interactive lead magnets that turn curious visitors into booked appointments. Stop chasing tire-kickers and start speaking to serious buyers.
            </p>

<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-b from-brand-400 to-brand-500 hover:from-brand-300 hover:to-brand-400 text-white text-lg font-semibold py-4 px-10 rounded-full shadow-lg shadow-brand-400/30 transition-all transform hover:-translate-y-1" href="#book">
                    Book Strategy Call <iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<div className="flex items-center gap-2 text-sm text-slate-500 font-medium px-4">
<iconify-icon className="text-green-500 text-xl" icon="solar:check-circle-linear"></iconify-icon>
<span className="">90-Day ROI Guarantee</span>
</div>
</div>

<div className="mt-20 relative w-full max-w-5xl mx-auto">
<div className="relative bg-white rounded-2xl md:rounded-3xl shadow-2xl border border-slate-200 overflow-hidden aspect-[16/9] md:aspect-[2/1] group cursor-pointer">

<div className="absolute inset-0 z-10 flex items-center justify-center">
<div className="group-hover:bg-slate-900/10 transition-colors duration-300 bg-slate-900/0 absolute top-0 right-0 bottom-0 left-0"></div><img alt="Video thumbnail of man speaking into microphone" className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="Screenshot%202026-01-19%20at%2012.49.37.png"/>
<div className="relative w-20 h-20 bg-white/90 backdrop-blur rounded-full shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-brand-600 text-4xl ml-1" icon="solar:play-circle-linear"></iconify-icon>
</div>
</div>

<div className="absolute inset-0 bg-slate-50 p-6 md:p-10 flex flex-col">
<div className="w-full h-8 flex gap-2 mb-6">
<div className="w-3 h-3 rounded-full bg-red-400"></div>
<div className="w-3 h-3 rounded-full bg-yellow-400"></div>
<div className="w-3 h-3 rounded-full bg-green-400"></div>
</div>
<div className="flex-1 grid grid-cols-3 gap-6">
<div className="col-span-2 space-y-4">
<div className="h-8 w-2/3 bg-slate-200 rounded-lg"></div>
<div className="h-40 w-full bg-slate-200 rounded-xl"></div>
<div className="grid grid-cols-2 gap-4">
<div className="h-24 w-full bg-slate-200 rounded-xl"></div>
<div className="h-24 w-full bg-slate-200 rounded-xl"></div>
</div>
</div>
<div className="space-y-4">
<div className="h-full w-full bg-slate-100 rounded-xl border border-slate-200 p-4">
<div className="w-full h-8 bg-brand-100 rounded mb-4"></div>
<div className="w-full h-2 bg-slate-200 rounded mb-2"></div>
<div className="w-2/3 h-2 bg-slate-200 rounded mb-2"></div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-6 left-6 bg-white p-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-4 animate-bounce z-20 hidden md:flex" style={{animationDuration: '3s'}}>
<div className="bg-green-100 p-2 rounded-full flex items-center justify-center text-green-600">
<iconify-icon className="text-xl" icon="solar:graph-up-linear"></iconify-icon>
</div>
<div className="">
<div className="text-xs text-slate-500 font-medium">Conversion Rate</div>
<div className="text-lg font-bold text-slate-900">5.8% <span className="text-green-500 text-sm font-normal">(+150%)</span></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="showcase">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16 max-w-3xl mx-auto">
<span className="text-brand-600 font-semibold tracking-wide text-sm uppercase">Interactive Examples</span>
<h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mt-3 mb-6">From Curious to Qualified</h2>
<p className="text-lg text-slate-500">See how custom interactive tools work across different industries. Select an industry to verify the experience.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

<div className="lg:col-span-4 flex flex-col gap-3">
<button className="tab-btn w-full text-left p-5 rounded-2xl transition-all duration-200 flex items-center justify-between group bg-white ring-2 ring-brand-400 shadow-lg relative z-10" data-index="0" onclick="switchTab(0)">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
<iconify-icon className="text-2xl" icon="solar:buildings-2-linear"></iconify-icon>
</div>
<div>
<h3 className="font-bold text-slate-900">Luxury Real Estate</h3>
<p className="text-sm text-slate-500">Equity &amp; ROI calculators</p>
</div>
</div>
<iconify-icon className="text-brand-500 text-xl" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
<button className="tab-btn w-full text-left p-5 rounded-2xl transition-all duration-200 flex items-center justify-between group bg-transparent hover:bg-white hover:shadow-md text-slate-600" data-index="1" onclick="switchTab(1)">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
<iconify-icon className="text-2xl" icon="solar:screws-hammer-linear"></iconify-icon>
</div>
<div>
<h3 className="font-semibold group-hover:text-slate-900">Renovation Services</h3>
<p className="text-sm text-slate-500">Cost estimators</p>
</div>
</div>
</button>
<button className="tab-btn w-full text-left p-5 rounded-2xl transition-all duration-200 flex items-center justify-between group bg-transparent hover:bg-white hover:shadow-md text-slate-600" data-index="2" onclick="switchTab(2)">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
<iconify-icon className="text-2xl" icon="solar:wad-of-money-linear"></iconify-icon>
</div>
<div>
<h3 className="font-semibold group-hover:text-slate-900">Wealth Management</h3>
<p className="text-sm text-slate-500">Retirement planners</p>
</div>
</div>
</button>
<button className="tab-btn w-full text-left p-5 rounded-2xl transition-all duration-200 flex items-center justify-between group bg-transparent hover:bg-white hover:shadow-md text-slate-600" data-index="3" onclick="switchTab(3)">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
<iconify-icon className="text-2xl" icon="solar:globe-linear"></iconify-icon>
</div>
<div>
<h3 className="font-semibold group-hover:text-slate-900">Tax / Accounting</h3>
<p className="text-sm text-slate-500">Risk assessments</p>
</div>
</div>
</button>
</div>

<div className="lg:col-span-8 relative min-h-[500px]">

<div className="mockup absolute inset-0 w-full transition-opacity duration-300 opacity-100 z-10" id="mockup-0">
<div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200 h-full flex flex-col justify-between">
<div className="">
<div className="flex justify-between items-center mb-8 border-b border-slate-100 pb-4">
<span className="tracking-widest text-xs font-bold text-slate-900 uppercase">Luxe Estates</span>
<span className="text-xs bg-brand-50 text-brand-600 px-3 py-1 rounded-full font-semibold">Private Folio</span>
</div>
<h3 className="text-2xl font-bold text-slate-900 mb-8">Investment Projection</h3>
<div className="space-y-8">
<div>
<div className="flex justify-between mb-2 text-sm font-medium text-slate-600">
<span>Property Value</span>
<span className="text-slate-900">$2.5M</span>
</div>
<input max="100" min="1" type="range" value="70"/>
</div>
<div className="">
<div className="flex justify-between mb-2 text-sm font-medium text-slate-600">
<span>Hold Period</span>
<span className="text-slate-900">5 Years</span>
</div>
<input max="10" min="1" type="range" value="5"/>
</div>
<div className="bg-slate-50 rounded-xl p-6 border border-slate-100 mt-8 flex items-center justify-between">
<div className="">
<p className="text-sm text-slate-500 mb-1">Projected Equity Gain</p>
<p className="text-3xl font-bold text-brand-600">$690,704</p>
</div>
<div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
<iconify-icon className="text-xl" icon="solar:graph-up-linear"></iconify-icon>
</div>
</div>
</div>
</div>
<div className="mt-8 space-y-3">
<button className="w-full bg-slate-900 text-white font-semibold py-4 rounded-xl mt-4 hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20">View Private Folio</button>
</div>
</div>
</div>

<div className="mockup absolute inset-0 w-full transition-opacity duration-300 opacity-0 z-0 pointer-events-none" id="mockup-1">
<div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200 h-full flex flex-col justify-between">
<div>
<div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-100">
<span className="font-bold text-slate-900 flex items-center gap-2"><iconify-icon icon="solar:screws-hammer-linear"></iconify-icon> RenovateRight</span>
<span className="text-xs bg-orange-100 text-orange-600 px-3 py-1 rounded-full font-medium">ROI Calculator</span>
</div>
<h3 className="text-2xl font-bold text-slate-900 mb-2">Renovation ROI Estimator</h3>
<p className="text-slate-500 text-sm mb-8">See your projected return based on project type and budget</p>
<div className="space-y-6">
<div className="grid grid-cols-2 gap-4">
<div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
<div className="text-xs text-slate-500 mb-1">Project Type</div>
<div className="font-semibold text-slate-900">Kitchen</div>
</div>
<div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
<div className="text-xs text-slate-500 mb-1">Budget</div>
<div className="font-semibold text-slate-900">£30k</div>
</div>
</div>
<div>
<div className="flex justify-between mb-2 text-sm text-slate-600">
<span>Renovation Budget</span>
<span className="font-bold text-slate-900">£30,000</span>
</div>
<input className="accent-orange-500" max="100" min="5" type="range" value="30"/>
</div>
<div className="bg-orange-50 rounded-xl p-6 border border-orange-100 mt-4">
<p className="text-xs font-bold text-orange-800 tracking-wide uppercase mb-1">Projected Value Add</p>
<div className="flex items-baseline gap-2">
<p className="text-3xl font-bold text-slate-900">£27,000</p>
<p className="text-sm text-green-600 font-medium bg-green-100 px-2 py-0.5 rounded">High ROI</p>
</div>
</div>
</div>
</div>
<button className="w-full bg-orange-600 text-white font-semibold py-4 rounded-xl mt-4 hover:bg-orange-700 transition-colors shadow-lg shadow-orange-500/20">Get Full Report</button>
</div>
</div>

<div className="mockup absolute inset-0 w-full transition-opacity duration-300 opacity-0 z-0 pointer-events-none" id="mockup-2">
<div className="bg-slate-900 rounded-3xl p-8 shadow-xl border border-slate-800 h-full flex flex-col justify-between text-white">
<div>
<div className="flex items-center gap-2 mb-8">
<div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
<iconify-icon className="text-lg" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<span className="font-semibold tracking-wide">Retirement Planner</span>
</div>
<div className="space-y-8">
<div>
<div className="flex justify-between mb-2 text-sm text-slate-400">
<span>Current Savings</span>
<span className="text-white font-bold">$50,000</span>
</div>
<input className="accent-emerald-500" type="range" value="20"/>
</div>
<div>
<div className="flex justify-between mb-2 text-sm text-slate-400">
<span>Monthly Contribution</span>
<span className="text-white font-bold">$1,000</span>
</div>
<input className="accent-emerald-500" type="range" value="40"/>
</div>
<div className="grid grid-cols-2 gap-4 mt-8">
<div className="bg-white/5 p-4 rounded-xl border border-white/10">
<p className="text-xs text-slate-400">In 10 Years</p>
<p className="text-xl font-bold text-emerald-400 mt-1">$230k</p>
</div>
<div className="bg-white/5 p-4 rounded-xl border border-white/10">
<p className="text-xs text-slate-400">In 20 Years</p>
<p className="text-xl font-bold text-emerald-400 mt-1">$578k</p>
</div>
</div>
</div>
</div>
<button className="w-full bg-emerald-500 text-white font-semibold py-4 rounded-xl mt-4 hover:bg-emerald-600 transition-colors flex justify-center items-center gap-2 shadow-lg shadow-emerald-500/20">View Roadmap <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></button>
</div>
</div>

<div className="mockup absolute inset-0 w-full transition-opacity duration-300 opacity-0 z-0 pointer-events-none" id="mockup-3">
<div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200 h-full flex flex-col justify-between">
<div>
<div className="flex justify-between items-center mb-6">
<span className="font-bold text-blue-900 flex items-center gap-2"><iconify-icon icon="solar:globe-linear"></iconify-icon> EXPAT TAX</span>
<span className="text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-full font-medium border border-blue-100">Exit Assessment</span>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-6">UK Exit Risk Score</h3>
<div className="space-y-5 mb-6">
<div>
<div className="flex justify-between mb-1 text-xs font-medium text-slate-500">
<span>Total UK Assets</span>
<span className="text-slate-900">£750,000</span>
</div>
<div className="h-2 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-blue-500 w-[60%] rounded-full"></div>
</div>
</div>
<div className="p-4 bg-red-50 rounded-xl border border-red-100 flex items-start gap-3">
<iconify-icon className="text-red-500 text-xl shrink-0 mt-0.5" icon="solar:danger-triangle-linear"></iconify-icon>
<div>
<p className="text-sm font-bold text-red-900">High Exposure Risk</p>
<p className="text-xs text-red-700 mt-1">Based on your asset retention, you may be liable for UK taxes.</p>
</div>
</div>
</div>
<div className="space-y-3">
<div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-sm flex justify-between">
<span className="text-slate-500">Destination</span>
<span className="font-semibold text-slate-900">Dubai, UAE</span>
</div>
</div>
</div>
<button className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl mt-4 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20">Get Mitigation Plan</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-slate-100">
<div className="max-w-6xl mx-auto px-4">
<h2 className="text-3xl md:text-5xl font-bold text-center text-slate-900 mb-16 tracking-tight">Two Types of Buyers.<span className="text-slate-400">Your Form Only Catches One.</span></h2>
<div className="grid md:grid-cols-2 gap-8 mb-16">

<div className="rounded-3xl bg-white border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
<div className="absolute top-0 left-0 w-1 h-full bg-slate-200 group-hover:bg-slate-300 transition-colors"></div>
<div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center mb-6 text-slate-500">
<iconify-icon className="text-3xl" icon="solar:user-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-bold text-slate-900 mb-4">The Tire-Kicker</h3>
<ul className="space-y-3 text-slate-600 mb-8">
<li className="flex items-start gap-3">
<iconify-icon className="text-red-400 text-xl mt-0.5" icon="solar:close-circle-linear"></iconify-icon>
<span>Has 15 tabs open at 11pm</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-red-400 text-xl mt-0.5" icon="solar:close-circle-linear"></iconify-icon>
<span>Fills every generic 'Enquire' form</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-red-400 text-xl mt-0.5" icon="solar:close-circle-linear"></iconify-icon>
<span>Ghosts you when you call back</span>
</li>
</ul>
<div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-sm font-medium text-slate-600 flex items-center gap-2">
<iconify-icon className="text-slate-400 text-lg" icon="solar:danger-circle-linear"></iconify-icon>
                        Your "Contact Us" button catches them.
                    </div>
</div>

<div className="rounded-3xl bg-white ring-1 ring-brand-400 p-8 shadow-xl shadow-brand-400/10 relative overflow-hidden">
<div className="absolute top-0 right-0 bg-brand-400 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">DESIRED</div>
<div className="w-14 h-14 bg-brand-100 rounded-2xl flex items-center justify-center mb-6 text-brand-600">
<iconify-icon className="text-3xl" icon="solar:user-check-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-bold text-slate-900 mb-4">The Serious Buyer</h3>
<ul className="space-y-3 text-slate-600 mb-8">
<li className="flex items-start gap-3">
<iconify-icon className="text-brand-500 text-xl mt-0.5" icon="solar:check-read-linear"></iconify-icon>
<span>Needs specific answers for their case</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-brand-500 text-xl mt-0.5" icon="solar:check-read-linear"></iconify-icon>
<span className="">Willing to share data for value</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-brand-500 text-xl mt-0.5" icon="solar:check-read-linear"></iconify-icon>
<span>Converts 3x higher on calls</span>
</li>
</ul>
<div className="bg-brand-50 p-4 rounded-xl border border-brand-100 text-sm font-medium text-brand-700 flex items-center gap-2">
<iconify-icon className="text-brand-500 text-lg" icon="solar:bolt-linear"></iconify-icon>
                        Interactive tools capture them exclusively.
                    </div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="calculator">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">Calculate Your Revenue Uplift</h2>
<p className="text-lg text-slate-500 max-w-2xl mx-auto">See how fixing your conversion rate impacts your bottom line.</p>
</div>
<div className="bg-white rounded-3xl p-6 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100">
<div className="grid lg:grid-cols-3 gap-12">

<div className="space-y-8">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold text-sm">1</div>
<h3 className="font-bold text-slate-900">Your Metrics</h3>
</div>
<div>
<div className="flex justify-between text-sm mb-3 font-medium">
<span className="text-slate-500">Monthly Leads</span>
<span className="text-slate-900 bg-slate-100 px-2 py-0.5 rounded" id="val-leads">100</span>
</div>
<input id="input-leads" max="1000" min="50" oninput="updateCalculator()" step="10" type="range" value="100"/>
</div>
<div>
<div className="flex justify-between text-sm mb-3 font-medium">
<span className="text-slate-500">Deals Closed</span>
<span className="text-slate-900 bg-slate-100 px-2 py-0.5 rounded" id="val-deals">10</span>
</div>
<input id="input-deals" max="50" min="1" oninput="updateCalculator()" step="1" type="range" value="10"/>
</div>
<div>
<div className="flex justify-between text-sm mb-3 font-medium">
<span className="text-slate-500">Profit Per Deal</span>
<span className="text-slate-900 bg-slate-100 px-2 py-0.5 rounded" id="val-profit">$10,000</span>
</div>
<input id="input-profit" max="100000" min="1000" oninput="updateCalculator()" step="1000" type="range" value="10000"/>
</div>
</div>

<div className="lg:col-span-2 grid md:grid-cols-2 gap-6">

<div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col justify-between">
<div className="">
<p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Standard Form</p>
<p className="text-xl font-bold text-slate-700 mb-6">Current Results</p>
<div className="space-y-3 text-sm">
<div className="flex justify-between p-3 bg-white rounded-lg border border-slate-100">
<span className="text-slate-500">Captured</span>
<span className="font-bold text-slate-900" id="std-leads">100</span>
</div>
<div className="flex justify-between p-3 bg-white rounded-lg border border-slate-100">
<span className="text-slate-500">Show-Up</span>
<span className="font-bold text-slate-900" id="std-showup">70</span>
</div>
<div className="flex justify-between p-3 bg-white rounded-lg border border-slate-100">
<span className="text-slate-500">Deals</span>
<span className="font-bold text-slate-900" id="std-deals">10</span>
</div>
</div>
</div>
<div className="mt-6 pt-6 border-t border-slate-200">
<p className="text-xs text-slate-400 font-bold uppercase">Monthly Profit</p>
<p className="text-2xl font-bold text-slate-900" id="std-total">$100,000</p>
</div>
</div>

<div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 flex flex-col justify-between relative overflow-hidden">
<div className="absolute top-0 right-0 bg-brand-400 text-[10px] font-bold px-2 py-1 rounded-bl-lg">PREDICTED</div>
<div className="absolute bottom-0 right-0 w-32 h-32 bg-brand-400 blur-[80px] opacity-40 pointer-events-none"></div>
<div>
<p className="text-xs font-bold text-brand-400 uppercase tracking-wider mb-2">Interactive System</p>
<p className="text-xl font-bold text-white mb-6">With Lead Magnet</p>
<div className="space-y-3 text-sm">
<div className="flex justify-between p-3 bg-white/5 rounded-lg border border-white/10 items-center">
<span className="text-slate-400">Captured</span>
<div className="text-right">
<span className="font-bold text-white block" id="new-leads">250</span>
<span className="text-[10px] text-green-400 font-bold">+150% Lift</span>
</div>
</div>
<div className="flex justify-between p-3 bg-white/5 rounded-lg border border-white/10 items-center">
<span className="text-slate-400">Show-Up</span>
<div className="text-right">
<span className="font-bold text-white block" id="new-showup">213</span>
<span className="text-[10px] text-green-400 font-bold">+21% Lift</span>
</div>
</div>
<div className="flex justify-between p-3 bg-white/5 rounded-lg border border-white/10">
<span className="text-slate-400">Deals</span>
<span className="font-bold text-white" id="new-deals">30</span>
</div>
</div>
</div>
<div className="mt-6 pt-6 border-t border-white/10 relative z-10">
<p className="text-xs text-brand-400 font-bold uppercase">New Monthly Profit</p>
<p className="text-3xl font-bold text-white" id="new-total">$300,000</p>
<p className="text-xs text-green-400 mt-1 font-medium" id="diff-monthly">+$200k Additional Revenue</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100">
<div className="max-w-7xl mx-auto px-4">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">The Growth System</h2>
<p className="text-lg text-slate-500">Everything you need to turn traffic into appointments.</p>
</div>
<div className="grid md:grid-cols-4 gap-8">
<div className="group p-6 rounded-2xl bg-white border border-slate-200 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-100 transition-all">
<div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:calculator-linear"></iconify-icon>
</div>
<h3 className="font-bold text-slate-900 mb-2">2x Lead Magnets</h3>
<p className="text-sm text-slate-500 leading-relaxed">Custom-built interactive tools tailored to your specific market and buyer persona.</p>
</div>
<div className="group p-6 rounded-2xl bg-white border border-slate-200 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-100 transition-all">
<div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:smartphone-linear"></iconify-icon>
</div>
<h3 className="font-bold text-slate-900 mb-2">Landing Pages</h3>
<p className="text-sm text-slate-500 leading-relaxed">High-conversion pages optimized for mobile, designed to turn traffic into qualified conversations.</p>
</div>
<div className="group p-6 rounded-2xl bg-white border border-slate-200 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-100 transition-all">
<div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:link-circle-linear"></iconify-icon>
</div>
<h3 className="font-bold text-slate-900 mb-2">CRM Sync</h3>
<p className="text-sm text-slate-500 leading-relaxed">Leads synced instantly to your database with full data enrichment and source tracking.</p>
</div>
<div className="group p-6 rounded-2xl bg-white border border-slate-200 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-100 transition-all">
<div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:magnifer-linear"></iconify-icon>
</div>
<h3 className="font-bold text-slate-900 mb-2">Deep Research</h3>
<p className="text-sm text-slate-500 leading-relaxed">We become experts in your business, ensuring tools actually resonate with your market.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="faq">
<div className="max-w-3xl mx-auto px-4">
<h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Common Questions</h2>
<div className="space-y-4">
<details className="group bg-white rounded-2xl p-6 border border-slate-200 cursor-pointer shadow-sm hover:shadow-md transition-all">
<summary className="flex justify-between items-center font-bold text-lg text-slate-900 list-none">
                        Can I afford this?
                        <iconify-icon className="text-slate-400 group-open:rotate-180 transition-transform text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="text-slate-600 mt-4 leading-relaxed">
                        We design our pricing to yield a positive ROI within the first 90 days. If you're currently spending money on ads or have organic traffic that isn't converting, the cost of *not* acting is typically much higher.
                    </p>
</details>
<details className="group bg-white rounded-2xl p-6 border border-slate-200 cursor-pointer shadow-sm hover:shadow-md transition-all">
<summary className="flex justify-between items-center font-bold text-lg text-slate-900 list-none">
                        Does this replace my website?
                        <iconify-icon className="text-slate-400 group-open:rotate-180 transition-transform text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="text-slate-600 mt-4 leading-relaxed">
                        No, it complements it. These are dedicated landing page funnels designed specifically for traffic conversion. We link them from your main site or ads.
                    </p>
</details>
<details className="group bg-white rounded-2xl p-6 border border-slate-200 cursor-pointer shadow-sm hover:shadow-md transition-all">
<summary className="flex justify-between items-center font-bold text-lg text-slate-900 list-none">
                        How long does it take to build?
                        <iconify-icon className="text-slate-400 group-open:rotate-180 transition-transform text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="text-slate-600 mt-4 leading-relaxed">
                        From our initial kickoff call to launch typically takes 15 days. This includes research, design, development, and integration testing.
                    </p>
</details>
</div>
</div>
</section>

<section className="py-32 bg-slate-900 text-white relative overflow-hidden text-center" id="book">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-900/40 via-slate-900 to-slate-900 pointer-events-none"></div>
<div className="relative z-10 max-w-4xl mx-auto px-4">
<h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Ready to capture your market?</h2>
<p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">In the next 15 days, we'll have your entire lead capture system built, tested, and live.</p>
<a className="inline-flex items-center gap-2 bg-white text-slate-900 text-lg font-bold py-5 px-12 rounded-full hover:bg-brand-50 transition-colors shadow-2xl shadow-brand-500/20" href="#">
                Start Your Strategy Session <iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</section>

<footer className="bg-slate-950 text-slate-500 py-12 border-t border-slate-900">
<div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 font-semibold text-white">
<div className="w-6 h-6 rounded-full bg-brand-400 flex items-center justify-center">
<iconify-icon className="text-white text-xs" icon="solar:bolt-linear"></iconify-icon>
</div>
                LeadMagnet
            </div>
<div className="flex gap-8 text-sm">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
</div>
<p className="text-xs">© 2024 Interactive Systems. All rights reserved.</p>
</div>
</footer>



    </>
  );
}
