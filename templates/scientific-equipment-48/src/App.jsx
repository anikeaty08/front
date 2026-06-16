import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Lucide Icons
        lucide.createIcons();

        // 3D Tilt Logic for Cards
        document.addEventListener('mousemove', (e) => {
            document.querySelectorAll('.card-3d').forEach(card => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const rotateX = ((y - centerY) / centerY) * -5; // Max 5deg
                    const rotateY = ((x - centerX) / centerX) * 5;

                    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
                } else {
                    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
                }
            });
        });

        // View Switching Logic with Spring-like feel (via CSS classes)
        function switchView(viewId) {
            // Hide all views
            document.querySelectorAll('.view-section').forEach(el => {
                el.classList.add('hidden');
                el.classList.remove('animate-in'); // Reset animation
            });
            
            // Show selected view
            const selected = document.getElementById('view-' + viewId);
            selected.classList.remove('hidden');
            
            // Re-trigger animations for list items
            const items = selected.querySelectorAll('.stagger-item');
            items.forEach((item) => {
                item.style.animation = 'none';
                item.offsetHeight; /* trigger reflow */
                item.style.animation = null; 
            });
            
            // Update Title
            const titles = {
                'marketplace': 'Marketplace',
                'dashboard': 'Revenue Command',
                'list-equipment': 'Add Machine',
                'experiments': 'My Experiments',
                'profile': 'Profile Settings'
            };
            document.getElementById('page-title').textContent = titles[viewId] || 'LabSlot';
        }

        // List Equipment Wizard Logic
        function nextStep(step) {
            // Hide all steps
            document.getElementById('step-1').classList.add('hidden');
            document.getElementById('step-2').classList.add('hidden');
            document.getElementById('step-3').classList.add('hidden');
            
            // Show current step
            document.getElementById('step-' + step).classList.remove('hidden');
            
            // Update Progress Bar
            const bar = document.getElementById('progress-bar-fill');
            if(step === 1) bar.style.width = '33%';
            if(step === 2) bar.style.width = '66%';
            if(step === 3) bar.style.width = '100%';
        }

        // Real-time Pricing Calculator
        function calculateProfit() {
            const input = document.getElementById('price-input').value;
            const gross = parseFloat(input) || 0;
            const fee = gross * 0.20;
            const net = gross - fee;

            document.getElementById('display-gross').textContent = '$' + gross.toFixed(2);
            document.getElementById('display-fee').textContent = '-$' + fee.toFixed(2);
            document.getElementById('display-net').textContent = '$' + net.toFixed(2);
        }

        // Init
        document.addEventListener('DOMContentLoaded', () => {
            switchView('marketplace');
        });

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-20 h-full glass-sidebar flex flex-col justify-between flex-shrink-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group absolute lg:relative" id="main-sidebar">
<div>

<div className="h-20 flex items-center px-6 border-b border-white/5 overflow-hidden">
<div className="flex items-center gap-4 min-w-max">
<div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/50 flex items-center justify-center text-blue-400 shrink-0 neon-glow">
<i className="w-6 h-6 stroke-[3]" data-lucide="plus"></i>
</div>
<span className="text-white font-bold tracking-tight text-xl sidebar-text font-['JetBrains_Mono']">LabSlot<span className="text-blue-500">_</span></span>
</div>
</div>

<nav className="mt-8 flex flex-col gap-2 px-3">
<button className="nav-item flex items-center gap-4 px-3 py-3 rounded-lg hover:bg-white/5 text-slate-400 hover:text-white transition-all text-left min-w-max group/btn relative" onclick="switchView('marketplace')">
<i className="w-5 h-5 group-hover/btn:text-blue-400 transition-colors" data-lucide="search"></i>
<span className="sidebar-text text-sm font-medium">Marketplace</span>
</button>
<button className="nav-item flex items-center gap-4 px-3 py-3 rounded-lg hover:bg-white/5 text-slate-400 hover:text-white transition-all text-left min-w-max group/btn relative" onclick="switchView('experiments')">
<i className="w-5 h-5 group-hover/btn:text-blue-400 transition-colors" data-lucide="activity"></i>
<span className="sidebar-text text-sm font-medium">My Experiments</span>
</button>
<div className="h-px bg-white/5 my-2 mx-2"></div>
<button className="nav-item flex items-center gap-4 px-3 py-3 rounded-lg hover:bg-white/5 text-slate-400 hover:text-white transition-all text-left min-w-max group/btn relative" onclick="switchView('dashboard')">
<i className="w-5 h-5 group-hover/btn:text-purple-400 transition-colors" data-lucide="layout-dashboard"></i>
<span className="sidebar-text text-sm font-medium">Revenue Hub</span>
</button>
<button className="nav-item flex items-center gap-4 px-3 py-3 rounded-lg hover:bg-white/5 text-slate-400 hover:text-white transition-all text-left min-w-max group/btn relative" onclick="switchView('list-equipment')">
<i className="w-5 h-5 group-hover/btn:text-purple-400 transition-colors" data-lucide="plus-square"></i>
<span className="sidebar-text text-sm font-medium">Add Machine</span>
</button>
<button className="nav-item flex items-center gap-4 px-3 py-3 rounded-lg hover:bg-white/5 text-slate-400 hover:text-white transition-all text-left min-w-max group/btn relative" onclick="switchView('profile')">
<i className="w-5 h-5 group-hover/btn:text-emerald-400 transition-colors" data-lucide="user-circle"></i>
<span className="sidebar-text text-sm font-medium">Profile &amp; Roles</span>
</button>
</nav>
</div>

<div className="p-4 border-t border-white/5 overflow-hidden">
<button className="flex items-center gap-3 w-full min-w-max">
<div className="w-9 h-9 rounded-full bg-gradient-to-tr from-blue-900 to-slate-900 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold text-xs ring-2 ring-blue-500/10">SC</div>
<div className="sidebar-text text-left">
<p className="text-sm text-slate-200 font-medium truncate">Dr. S. Chen</p>
<p className="text-[10px] text-slate-500 truncate">Stanford Genome</p>
</div>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-[#020617] relative tech-bg">

<header className="h-16 border-b border-white/5 flex items-center justify-between px-8 relative z-40 backdrop-blur-sm bg-[#020617]/80">
<div className="flex items-center gap-4">
<h1 className="font-bold text-white tracking-tight text-lg" id="page-title">Marketplace</h1>
<span className="px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] uppercase tracking-wider font-medium hidden sm:inline-block">Beta v2.0</span>
</div>
<div className="flex items-center gap-6">

<div className="hidden md:flex items-center gap-6 text-sm text-slate-400 font-medium">
<a className="nav-link hover:text-white transition-colors" href="#">Docs</a>
<a className="nav-link hover:text-white transition-colors" href="#">Support</a>
</div>

<button className="shimmer-btn pulse-border flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-xs font-bold rounded-lg hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)]" onclick="switchView('list-equipment')">
<i className="w-3.5 h-3.5" data-lucide="plus"></i> List Your Lab
                </button>
</div>
</header>

<div className="flex-1 overflow-hidden relative">

<div className="view-section h-full flex flex-col p-6 overflow-y-auto" id="view-marketplace">

<div className="max-w-2xl mx-auto w-full mb-10 relative z-10">
<div className="relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
<div className="relative flex items-center bg-[#0f172a] border border-white/10 rounded-lg p-1 shadow-2xl">
<i className="w-5 h-5 text-slate-500 ml-3" data-lucide="search"></i>
<input className="w-full bg-transparent border-none text-white placeholder-slate-500 focus:ring-0 px-4 py-2" placeholder="Search equipment, methods, or labs..." type="text"/>
<div className="flex gap-2 text-[10px] text-slate-500 font-mono border-l border-white/10 pl-3">
<span>CMD</span><span>K</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-20 max-w-7xl mx-auto w-full">

<div className="card-3d group relative bg-[#0f172a] rounded-xl border border-white/5 hover:border-blue-500/30 overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/10 stagger-item" style={{animationDelay: '0.1s'}}>
<div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
<div className="h-48 relative overflow-hidden">
<img alt="Machine" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out opacity-80" src="https://images.unsplash.com/photo-1579165466741-7f35a4755657?auto=format&amp;fit=crop&amp;q=80"/>
<div className="absolute top-3 right-3">
<span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-bold px-2 py-1 rounded backdrop-blur-md">AVAILABLE NOW</span>
</div>
</div>
<div className="p-5 relative z-10">
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="font-bold text-slate-100 group-hover:text-blue-400 transition-colors">Illumina NovaSeq 6000</h3>
<p className="text-xs text-slate-500 flex items-center gap-1 mt-1">
<i className="w-3 h-3" data-lucide="map-pin"></i> UCSF Mission Bay
                                    </p>
</div>
<div className="text-right">
<span className="block text-lg font-bold text-white">$350</span>
<span className="text-[10px] text-slate-500 font-medium">PER HOUR</span>
</div>
</div>
<div className="mt-4 flex items-center justify-between pt-4 border-t border-white/5">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 text-[10px] font-bold flex items-center justify-center border border-indigo-500/20">JD</div>
<span className="text-xs text-slate-400">Operator Available</span>
</div>
<button className="p-2 rounded-full bg-white/5 hover:bg-blue-600 hover:text-white text-slate-400 transition-all">
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>

<div className="card-3d group relative bg-[#0f172a] rounded-xl border border-white/5 hover:border-blue-500/30 overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/10 stagger-item" style={{animationDelay: '0.2s'}}>
<div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
<div className="h-48 relative overflow-hidden">
<img alt="Machine" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out opacity-80" src="https://images.unsplash.com/photo-1582719471384-15233e025389?auto=format&amp;fit=crop&amp;q=80"/>
</div>
<div className="p-5 relative z-10">
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="font-bold text-slate-100 group-hover:text-blue-400 transition-colors">Zeiss LSM 980</h3>
<p className="text-xs text-slate-500 flex items-center gap-1 mt-1">
<i className="w-3 h-3" data-lucide="map-pin"></i> Berkeley BioLabs
                                    </p>
</div>
<div className="text-right">
<span className="block text-lg font-bold text-white">$120</span>
<span className="text-[10px] text-slate-500 font-medium">PER HOUR</span>
</div>
</div>
<div className="mt-4 pt-4 border-t border-white/5 flex gap-2">
<span className="text-[10px] px-2 py-1 bg-white/5 border border-white/10 rounded text-slate-400">Confocal</span>
<span className="text-[10px] px-2 py-1 bg-white/5 border border-white/10 rounded text-slate-400">Live Cell</span>
</div>
</div>
</div>
</div>
</div>

<div className="view-section h-full hidden overflow-y-auto bg-[#020617] p-6" id="view-list-equipment">
<div className="max-w-3xl mx-auto">

<div className="mb-8">
<div className="flex justify-between text-xs text-slate-400 mb-2 font-medium">
<span className="text-blue-400">Specs</span>
<span>Pricing</span>
<span>Images</span>
</div>
<div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-blue-500 w-1/3 transition-all duration-500 ease-out" id="progress-bar-fill"></div>
</div>
</div>
<div className="bg-[#0f172a] border border-white/5 rounded-2xl p-8 shadow-xl relative overflow-hidden stagger-item">
<div className="absolute top-0 right-0 p-32 bg-blue-600/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

<div className="space-y-6" id="step-1">
<h2 className="text-2xl font-bold text-white">Machine Details</h2>
<div className="grid grid-cols-1 gap-6">
<div>
<label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Equipment Name</label>
<input className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all" placeholder="e.g. Thermo Fisher Q Exactive" type="text"/>
</div>
<div>
<label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Category</label>
<select className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
<option>Mass Spectrometry</option>
<option>Genomics</option>
<option>Microscopy</option>
</select>
</div>
</div>
<div className="flex justify-end pt-6">
<button className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-lg transition-all shadow-lg shadow-blue-900/20" onclick="nextStep(2)">Next: Pricing</button>
</div>
</div>

<div className="space-y-8 hidden" id="step-2">
<h2 className="text-2xl font-bold text-white">Pricing &amp; Profit</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div>
<label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Hourly Rate ($)</label>
<div className="relative">
<span className="absolute left-4 top-3 text-slate-500">$</span>
<input className="w-full bg-slate-900 border border-slate-700 rounded-lg pl-8 pr-4 py-3 text-white font-mono" id="price-input" oninput="calculateProfit()" placeholder="0.00" type="number"/>
</div>
<p className="text-[10px] text-blue-400 mt-2 flex items-center gap-1">
<i className="w-3 h-3" data-lucide="info"></i> AI Suggestion: $250 - $320 for this model
                                    </p>
</div>
<div className="bg-slate-900/50 rounded-xl p-5 border border-dashed border-slate-700">
<h3 className="text-xs font-semibold text-slate-400 mb-4">Payout Breakdown</h3>
<div className="space-y-3 text-sm">
<div className="flex justify-between text-slate-300">
<span>Gross Rate</span>
<span className="font-mono" id="display-gross">$0.00</span>
</div>
<div className="flex justify-between text-red-400/80">
<span>Platform &amp; Insurance (20%)</span>
<span className="font-mono" id="display-fee">-$0.00</span>
</div>
<div className="h-px bg-slate-700 my-2"></div>
<div className="flex justify-between text-emerald-400 font-bold text-lg">
<span>Your Net Profit</span>
<span className="font-mono" id="display-net">$0.00</span>
</div>
</div>
</div>
</div>
<div className="flex justify-between pt-6">
<button className="text-slate-400 hover:text-white text-sm font-medium" onclick="nextStep(1)">Back</button>
<button className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-lg transition-all shadow-lg shadow-blue-900/20" onclick="nextStep(3)">Next: Media</button>
</div>
</div>

<div className="space-y-6 hidden" id="step-3">
<h2 className="text-2xl font-bold text-white">Photos</h2>
<div className="border-2 border-dashed border-slate-700 rounded-xl p-10 text-center hover:border-blue-500/50 hover:bg-blue-500/5 transition-all cursor-pointer group">
<div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
<i className="w-6 h-6 text-slate-400 group-hover:text-blue-400" data-lucide="upload-cloud"></i>
</div>
<h3 className="text-slate-200 font-medium">Drag &amp; Drop Lab Photos</h3>
<p className="text-sm text-slate-500 mt-1">or click to browse files</p>
</div>
<div className="flex justify-between pt-6">
<button className="text-slate-400 hover:text-white text-sm font-medium" onclick="nextStep(2)">Back</button>
<button className="px-8 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-bold rounded-lg transition-all shadow-lg shadow-emerald-900/20 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="check"></i> Publish Listing
                                </button>
</div>
</div>
</div>
</div>
</div>

<div className="view-section h-full hidden overflow-y-auto bg-[#020617] p-6" id="view-dashboard">
<div className="max-w-6xl mx-auto space-y-6">

<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
<div className="p-5 bg-[#0f172a] rounded-xl border border-white/5 shadow-sm stagger-item" style={{animationDelay: '0s'}}>
<div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Total Earnings</div>
<div className="text-2xl font-bold text-white font-mono">$24,500</div>
<div className="text-[10px] text-emerald-400 mt-1">+12% vs last month</div>
</div>
<div className="p-5 bg-[#0f172a] rounded-xl border border-white/5 shadow-sm stagger-item" style={{animationDelay: '0.1s'}}>
<div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Machine ROI</div>
<div className="text-2xl font-bold text-blue-400 font-mono">14.2 mos</div>
<div className="text-[10px] text-slate-400 mt-1">Time to break-even</div>
</div>
<div className="p-5 bg-[#0f172a] rounded-xl border border-white/5 shadow-sm stagger-item" style={{animationDelay: '0.2s'}}>
<div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Top Renter</div>
<div className="text-2xl font-bold text-white">Biotech</div>
<div className="text-[10px] text-slate-400 mt-1">Startups (Series A)</div>
</div>
<div className="p-5 bg-gradient-to-br from-blue-900/40 to-[#0f172a] rounded-xl border border-blue-500/20 shadow-lg stagger-item" style={{animationDelay: '0.3s'}}>
<div className="text-xs font-semibold text-blue-300 uppercase tracking-wider mb-2">Projected Found Money</div>
<div className="text-2xl font-bold text-white font-mono">$3,200</div>
<div className="text-[10px] text-blue-200 mt-1">Next 30 days</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="lg:col-span-2 bg-[#0f172a] rounded-xl border border-white/5 p-6 stagger-item" style={{animationDelay: '0.4s'}}>
<h3 className="font-bold text-slate-200 mb-6">Revenue Trajectory</h3>

<div className="h-64 flex items-end justify-between gap-2 border-b border-slate-800 pb-2 px-2">

<div className="w-full bg-blue-900/30 hover:bg-blue-600 transition-all rounded-t h-[30%] group relative">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs p-1 rounded opacity-0 group-hover:opacity-100">$3k</div>
</div>
<div className="w-full bg-blue-900/30 hover:bg-blue-600 transition-all rounded-t h-[45%]"></div>
<div className="w-full bg-blue-900/30 hover:bg-blue-600 transition-all rounded-t h-[40%]"></div>
<div className="w-full bg-blue-900/30 hover:bg-blue-600 transition-all rounded-t h-[60%]"></div>
<div className="w-full bg-blue-900/30 hover:bg-blue-600 transition-all rounded-t h-[55%]"></div>
<div className="w-full bg-blue-900/30 hover:bg-blue-600 transition-all rounded-t h-[75%]"></div>
<div className="w-full bg-blue-900/30 hover:bg-blue-600 transition-all rounded-t h-[65%]"></div>
<div className="w-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)] rounded-t h-[85%] relative">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs p-1 rounded">$8.5k</div>
</div>
</div>
<div className="flex justify-between text-xs text-slate-500 mt-2 px-2">
<span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span>
</div>
</div>
<div className="bg-[#0f172a] rounded-xl border border-white/5 p-6 stagger-item" style={{animationDelay: '0.5s'}}>
<h3 className="font-bold text-slate-200 mb-6">Revenue Sources</h3>
<div className="flex items-center justify-center h-48 relative">

<div className="w-40 h-40 rounded-full" style={{background: 'conic-gradient(#3b82f6 0% 60%, #10b981 60% 85%, #6366f1 85% 100%)'}}></div>
<div className="w-32 h-32 bg-[#0f172a] rounded-full absolute"></div>
</div>
<div className="space-y-3 mt-4">
<div className="flex items-center justify-between text-sm">
<div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-500"></div><span className="text-slate-400">Machine Rental</span></div>
<span className="text-white font-mono">60%</span>
</div>
<div className="flex items-center justify-between text-sm">
<div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-500"></div><span className="text-slate-400">Operator Fees</span></div>
<span className="text-white font-mono">25%</span>
</div>
<div className="flex items-center justify-between text-sm">
<div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-indigo-500"></div><span className="text-slate-400">Consulting</span></div>
<span className="text-white font-mono">15%</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="view-section h-full hidden overflow-y-auto bg-[#020617] p-6" id="view-experiments">
<div className="max-w-4xl mx-auto">
<h2 className="text-2xl font-bold text-white mb-8">Experiment Timeline</h2>
<div className="relative pl-8 space-y-12 before:absolute before:left-3 before:top-2 before:bottom-0 before:w-0.5 before:bg-slate-800">

<div className="relative stagger-item">
<div className="absolute -left-[29px] w-6 h-6 rounded-full bg-[#0f172a] border-2 border-emerald-500 flex items-center justify-center">
<div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
</div>
<div className="bg-[#0f172a] border border-white/5 rounded-xl p-5 hover:border-emerald-500/30 transition-all group">
<div className="flex justify-between items-start mb-2">
<div>
<div className="flex items-center gap-3">
<h3 className="font-bold text-white">CRISPR Editing Series A</h3>
<span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 text-[10px] font-bold uppercase rounded border border-emerald-500/20">In Progress</span>
</div>
<p className="text-xs text-slate-500 mt-1">Stanford Genome • NovaSeq 6000</p>
</div>
<span className="text-xs text-slate-400 font-mono">Today, 09:00 - 14:00</span>
</div>
<div className="w-full bg-slate-800 h-1.5 rounded-full mt-4 overflow-hidden">
<div className="bg-emerald-500 h-full w-[65%] shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
</div>
<div className="flex justify-between text-[10px] text-slate-500 mt-1">
<span>Sequencing...</span>
<span>65% Complete</span>
</div>
</div>
</div>

<div className="relative stagger-item" style={{animationDelay: '0.1s'}}>
<div className="absolute -left-[29px] w-6 h-6 rounded-full bg-[#0f172a] border-2 border-blue-500 flex items-center justify-center"></div>
<div className="bg-[#0f172a] border border-white/5 rounded-xl p-5 hover:border-blue-500/30 transition-all opacity-70 hover:opacity-100">
<div className="flex justify-between items-start mb-2">
<div>
<div className="flex items-center gap-3">
<h3 className="font-bold text-white">Protein Folding Analysis</h3>
<span className="px-2 py-0.5 bg-blue-500/10 text-blue-400 text-[10px] font-bold uppercase rounded border border-blue-500/20">Upcoming</span>
</div>
<p className="text-xs text-slate-500 mt-1">Berkeley BioLabs • Zeiss LSM 980</p>
</div>
<span className="text-xs text-slate-400 font-mono">Oct 28, 10:00 - 12:00</span>
</div>
<div className="mt-3 flex items-center gap-2 text-xs text-slate-400">
<i className="w-3 h-3" data-lucide="clock"></i> Starts in 2 days
                                </div>
</div>
</div>
</div>
</div>
</div>

<div className="view-section h-full hidden overflow-y-auto bg-[#020617] p-6" id="view-profile">
<div className="max-w-2xl mx-auto space-y-6">

<div className="bg-[#0f172a] border border-white/5 rounded-xl p-6 flex items-center justify-between stagger-item">
<div className="flex items-center gap-4">
<div className="w-16 h-16 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 p-0.5">
<div className="w-full h-full bg-[#0f172a] rounded-full flex items-center justify-center text-white font-bold text-xl">SC</div>
</div>
<div>
<h2 className="text-xl font-bold text-white">Dr. Sarah Chen</h2>
<p className="text-sm text-slate-400">Principal Investigator @ Stanford</p>
</div>
</div>
<div className="flex flex-col items-end gap-2">
<label className="flex items-center cursor-pointer relative">
<input className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
<span className="ml-3 text-sm font-medium text-slate-300">Supplier Mode</span>
</label>
</div>
</div>

<div className="bg-[#0f172a] border border-white/5 rounded-xl p-6 stagger-item" style={{animationDelay: '0.1s'}}>
<h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
<i className="w-5 h-5 text-blue-400" data-lucide="badge-check"></i> Verified Credentials
                        </h3>
<div className="space-y-3">
<div className="flex items-center justify-between p-3 bg-slate-900/50 rounded-lg border border-slate-800">
<div className="flex items-center gap-3">
<div className="p-2 bg-emerald-500/10 rounded text-emerald-400"><i className="w-4 h-4" data-lucide="file-check"></i></div>
<div>
<div className="text-sm font-medium text-white">PhD, Molecular Biology</div>
<div className="text-[10px] text-slate-500">Verified via Stanford University</div>
</div>
</div>
<span className="text-emerald-500 text-xs font-bold">VERIFIED</span>
</div>
<div className="flex items-center justify-between p-3 bg-slate-900/50 rounded-lg border border-slate-800">
<div className="flex items-center gap-3">
<div className="p-2 bg-emerald-500/10 rounded text-emerald-400"><i className="w-4 h-4" data-lucide="shield"></i></div>
<div>
<div className="text-sm font-medium text-white">Biosafety Level 2 Certified</div>
<div className="text-[10px] text-slate-500">Exp. Dec 2024</div>
</div>
</div>
<span className="text-emerald-500 text-xs font-bold">VERIFIED</span>
</div>
<button className="w-full py-2 border border-dashed border-slate-700 text-slate-500 text-sm rounded hover:text-white hover:border-slate-500 transition-colors">
                                + Upload New Credential
                            </button>
</div>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
