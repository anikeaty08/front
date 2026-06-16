import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize icons
        lucide.createIcons();

        function setStage(stage) {
            // Hide all main views
            document.getElementById('view-registration').classList.add('hidden');
            document.getElementById('view-mandatory').classList.add('hidden');
            
            // Dashboard Elements
            const dashHeader = document.getElementById('dashboard-header');
            const dashContent = document.getElementById('dashboard-content');
            const dashBlur = document.getElementById('dashboard-blur');
            const dashGrid = document.getElementById('dashboard-grid');
            const sidebar = document.getElementById('sidebar');
            const navUnlocked = document.getElementById('nav-unlocked');
            
            // Reset Dashboard classes
            dashHeader.classList.add('hidden');
            dashContent.classList.add('hidden');
            dashBlur.classList.remove('hidden');
            dashGrid.classList.add('content-blur');
            navUnlocked.classList.add('hidden');

            // Sidebar visibility (Hidden on Reg)
            if(stage === 1) {
                sidebar.classList.remove('md:flex');
                sidebar.classList.add('hidden');
            } else {
                sidebar.classList.add('md:flex');
                sidebar.classList.remove('hidden');
            }

            switch(stage) {
                case 1:
                    document.getElementById('view-registration').classList.remove('hidden');
                    break;
                case 2:
                    document.getElementById('view-mandatory').classList.remove('hidden');
                    break;
                case 3:
                    dashHeader.classList.remove('hidden');
                    dashContent.classList.remove('hidden');
                    // Blur is active by default in reset
                    break;
                case 4:
                    dashHeader.classList.remove('hidden');
                    dashContent.classList.remove('hidden');
                    
                    // Unlock Logic
                    dashBlur.classList.add('hidden'); // Remove blur overlay
                    dashGrid.classList.remove('content-blur'); // Remove filter
                    navUnlocked.classList.remove('hidden'); // Show full nav
                    
                    // Update Step 6 to completed, 7 to active visually (Simulation)
                    const stepProcess = document.getElementById('step-processing');
                    const stepReport = document.getElementById('step-report');
                    
                    stepProcess.innerHTML = `
                        <div class="w-6 h-6 rounded-full horizon-bg flex items-center justify-center mb-3 ring-4 ring-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </div>
                        <p class="text-xs font-medium text-slate-900 text-center">Sequencing</p>
                        <p class="text-[10px] text-gray-400 text-center mt-1">Done</p>
                    `;
                    
                    stepReport.classList.remove('opacity-40');
                    stepReport.innerHTML = `
                        <div class="w-6 h-6 rounded-full horizon-bg flex items-center justify-center mb-3 ring-4 ring-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </div>
                        <p class="text-xs font-medium text-slate-900 text-center">Report Ready</p>
                        <p class="text-[10px] text-gray-400 text-center mt-1">Today</p>
                    `;
                    break;
            }
            
            // Re-init icons for any DOM changes
            lucide.createIcons();
        }

        // Start at Stage 4 for demo purposes
        setStage(4);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-64 bg-white border-r border-gray-200 flex flex-col justify-between transition-all duration-300 hidden md:flex z-20" id="sidebar">
<div>
<div className="h-16 flex items-center px-6 border-b border-gray-100">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full horizon-bg"></div>
<span className="text-sm font-semibold tracking-tight horizon-text uppercase">Beyond Horizon</span>
</div>
</div>
<nav className="p-4 space-y-1">

<p className="px-2 text-xs font-medium text-gray-400 uppercase tracking-wider mt-4 mb-2">Menu</p>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-900 bg-gray-50 rounded-lg border border-gray-100 group" href="#">
<i className="w-4 h-4 text-gray-500 group-hover:text-slate-900" data-lucide="layout-dashboard"></i>
                    Dashboard
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-slate-900 rounded-lg transition-colors" href="#">
<i className="w-4 h-4" data-lucide="dna"></i>
                    Book DNA Test
                </a>

<div className="hidden space-y-1" id="nav-unlocked">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-slate-900 rounded-lg transition-colors" href="#">
<i className="w-4 h-4" data-lucide="file-text"></i>
                        My DNA Report
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-slate-900 rounded-lg transition-colors" href="#">
<i className="w-4 h-4" data-lucide="activity"></i>
                        Genomic Plan
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-slate-900 rounded-lg transition-colors" href="#">
<i className="w-4 h-4" data-lucide="calendar"></i>
                        Consultations
                    </a>
</div>
<p className="px-2 text-xs font-medium text-gray-400 uppercase tracking-wider mt-8 mb-2">Account</p>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-slate-900 rounded-lg transition-colors" href="#">
<i className="w-4 h-4" data-lucide="shopping-bag"></i>
                    My Orders
                </a>
</nav>
</div>
<div className="p-4 border-t border-gray-100">
<div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-slate-50 border border-slate-100">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-semibold text-slate-600">JD</div>
<div className="flex-1 overflow-hidden">
<p className="text-sm font-medium text-slate-900 truncate">John Doe</p>
<p className="text-xs text-gray-500 truncate">john@example.com</p>
</div>
<i className="w-4 h-4 text-gray-400 hover:text-slate-900 cursor-pointer" data-lucide="log-out"></i>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full relative overflow-y-auto">

<header className="h-16 bg-white border-b border-gray-200 flex md:hidden items-center justify-between px-4 sticky top-0 z-30">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded-full horizon-bg"></div>
<span className="text-sm font-semibold tracking-tight horizon-text">Beyond Horizon</span>
</div>
<i className="w-5 h-5 text-gray-600" data-lucide="menu"></i>
</header>

<div className="flex-1 flex flex-col items-center justify-center p-6 bg-white absolute inset-0 z-50 fade-in" id="view-registration">
<div className="w-full max-w-sm">
<div className="flex justify-center mb-8">
<div className="w-10 h-10 rounded-full horizon-bg flex items-center justify-center">
<i className="text-white w-5 h-5" data-lucide="dna"></i>
</div>
</div>
<div className="text-center mb-8">
<h1 className="text-xl font-semibold text-slate-900 tracking-tight">Create your account</h1>
<p className="text-sm text-gray-500 mt-2">Start your genomic journey today.</p>
</div>
<form className="space-y-4">
<input className="w-full px-3 py-2 rounded-md border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 transition-shadow" placeholder="Full Name" type="text"/>
<input className="w-full px-3 py-2 rounded-md border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 transition-shadow" placeholder="Email Address" type="email"/>
<input className="w-full px-3 py-2 rounded-md border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 transition-shadow" placeholder="Password" type="password"/>
<button className="w-full horizon-bg text-white py-2.5 rounded-md text-sm font-medium hover:opacity-90 transition-opacity shadow-sm" type="button">Sign Up</button>
</form>
</div>
</div>

<div className="hidden flex-1 flex flex-col items-center justify-center p-6 bg-gray-50 absolute inset-0 z-40 fade-in" id="view-mandatory">
<div className="max-w-2xl w-full">
<div className="mb-8 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-100 text-rose-700 text-xs font-medium mb-4">
<i className="w-3 h-3" data-lucide="lock"></i> Action Required
                    </div>
<h2 className="text-xl font-semibold text-slate-900 tracking-tight">Complete Setup to Unlock Dashboard</h2>
<p className="text-sm text-gray-500 mt-2">We need a few mandatory details before we can process your DNA Kit.</p>
</div>
<div className="space-y-4">

<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between">
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-medium text-sm">1</div>
<div>
<h3 className="text-sm font-medium text-slate-900">Sign Consent Form</h3>
<p className="text-xs text-gray-500 mt-1">Legal authorization for genomic sequencing.</p>
</div>
</div>
<button className="px-4 py-2 text-xs font-medium text-slate-700 bg-white border border-gray-200 rounded-md hover:bg-gray-50">Sign Now</button>
</div>

<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between">
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-medium text-sm">2</div>
<div>
<h3 className="text-sm font-medium text-slate-900">Health Questionnaire</h3>
<p className="text-xs text-gray-500 mt-1">Lifestyle and family history details.</p>
</div>
</div>
<button className="px-4 py-2 text-xs font-medium text-slate-700 bg-white border border-gray-200 rounded-md hover:bg-gray-50">Start</button>
</div>

<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-medium text-sm">3</div>
<div>
<h3 className="text-sm font-medium text-slate-900 flex items-center gap-2">
                                    Upload Blood Biomarker Report
                                    <span className="text-[10px] uppercase tracking-wide text-rose-600 bg-rose-50 px-1.5 py-0.5 rounded">Mandatory</span>
</h3>
<p className="text-xs text-gray-500 mt-1">Must be dated within the last 1 year.</p>
</div>
</div>
<div className="flex items-center gap-3 w-full md:w-auto">
<label className="cursor-pointer px-4 py-2 text-xs font-medium text-white horizon-bg rounded-md hover:opacity-90 shadow-sm">
                                Upload PDF
                                <input accept=".pdf" className="hidden" type="file"/>
</label>
</div>
</div>
</div>
</div>
</div>

<div className="hidden p-6 md:p-8 max-w-7xl mx-auto w-full fade-in z-10 pb-0" id="dashboard-header">

<div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
<div>
<h1 className="text-xl font-medium text-slate-900">Welcome back, John</h1>
<p className="text-sm text-gray-500 mt-1">Here is the status of your genomic logistics.</p>
</div>
<div className="mt-4 md:mt-0 flex items-center gap-3">
<button className="text-sm font-medium text-gray-500 hover:text-slate-900 transition-colors">Help</button>
<button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-slate-900 shadow-sm hover:bg-gray-50 transition-all">
                        Manage Profile
                    </button>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-8 relative overflow-hidden">

<div className="absolute top-[44%] left-8 right-8 h-0.5 bg-gray-100 -z-0"></div>

<div className="relative z-10 flex justify-between items-start overflow-x-auto pb-2 scrollbar-hide">

<div className="flex flex-col items-center min-w-[80px] group">
<div className="w-6 h-6 rounded-full horizon-bg flex items-center justify-center mb-3 ring-4 ring-white">
<i className="w-3 h-3 text-white" data-lucide="check"></i>
</div>
<p className="text-xs font-medium text-slate-900 text-center">Purchased</p>
<p className="text-[10px] text-gray-400 text-center mt-1">Oct 10</p>
</div>

<div className="flex flex-col items-center min-w-[80px]">
<div className="w-6 h-6 rounded-full horizon-bg flex items-center justify-center mb-3 ring-4 ring-white">
<i className="w-3 h-3 text-white" data-lucide="check"></i>
</div>
<p className="text-xs font-medium text-slate-900 text-center">Dispatched</p>
<p className="text-[10px] text-gray-400 text-center mt-1">Oct 12</p>
</div>

<div className="flex flex-col items-center min-w-[80px]">
<div className="w-6 h-6 rounded-full horizon-bg flex items-center justify-center mb-3 ring-4 ring-white">
<i className="w-3 h-3 text-white" data-lucide="check"></i>
</div>
<p className="text-xs font-medium text-slate-900 text-center">Delivered</p>
<p className="text-[10px] text-gray-400 text-center mt-1">Oct 15</p>
</div>

<div className="flex flex-col items-center min-w-[80px]">
<div className="w-6 h-6 rounded-full horizon-bg flex items-center justify-center mb-3 ring-4 ring-white">
<i className="w-3 h-3 text-white" data-lucide="check"></i>
</div>
<p className="text-xs font-medium text-slate-900 text-center">Collected</p>
<p className="text-[10px] text-gray-400 text-center mt-1">Oct 16</p>
</div>

<div className="flex flex-col items-center min-w-[80px]">
<div className="w-6 h-6 rounded-full horizon-bg flex items-center justify-center mb-3 ring-4 ring-white">
<i className="w-3 h-3 text-white" data-lucide="check"></i>
</div>
<p className="text-xs font-medium text-slate-900 text-center">At Lab</p>
<p className="text-[10px] text-gray-400 text-center mt-1">Oct 18</p>
</div>

<div className="flex flex-col items-center min-w-[100px]" id="step-processing">
<div className="w-6 h-6 rounded-full bg-white border-2 border-blue-800 flex items-center justify-center mb-3 ring-4 ring-white relative">
<div className="w-2 h-2 rounded-full bg-blue-800 animate-pulse"></div>
</div>
<p className="text-xs font-medium text-blue-800 text-center">Sequencing</p>
<p className="text-[10px] text-gray-400 text-center mt-1">Est. 4 weeks</p>
</div>

<div className="flex flex-col items-center min-w-[80px] opacity-40" id="step-report">
<div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center mb-3 ring-4 ring-white">
<span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
</div>
<p className="text-xs font-medium text-gray-500 text-center">Report Ready</p>
<p className="text-[10px] text-gray-400 text-center mt-1">Pending</p>
</div>
</div>
</div>
</div>

<div className="hidden px-6 md:px-8 pb-10 max-w-7xl mx-auto w-full h-full relative" id="dashboard-content">

<div className="absolute inset-0 z-20 glass-panel flex flex-col items-center justify-center text-center rounded-t-xl" id="dashboard-blur">
<div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center mb-4 shadow-sm">
<i className="w-5 h-5 text-gray-400" data-lucide="lock"></i>
</div>
<h3 className="text-lg font-medium text-slate-900">Dashboard Locked</h3>
<p className="text-sm text-gray-500 mt-1 max-w-xs">Your full dashboard will be revealed once your DNA sequencing report is generated.</p>
</div>

<div className="content-blur space-y-8" id="dashboard-grid">

<div className="space-y-4">
<div className="flex items-center justify-between">
<h2 className="text-base font-medium text-slate-900 flex items-center gap-2">
<i className="w-4 h-4 text-gray-500" data-lucide="map"></i>
                            Your Clinical Journey
                        </h2>
<span className="text-xs text-gray-500">Updated today</span>
</div>

<div className="w-full overflow-x-auto pb-6 -mx-1 px-1 snap-x hide-scrollbar">
<div className="flex gap-4 min-w-full">

<div className="min-w-[280px] snap-start bg-white rounded-xl border border-gray-200 shadow-sm p-5 flex flex-col justify-between h-44 relative group hover:border-blue-200 transition-colors">
<div className="absolute top-4 right-4 text-green-600">
<i className="w-5 h-5 fill-green-50" data-lucide="check-circle-2"></i>
</div>
<div>
<div className="text-[10px] font-semibold tracking-wider text-green-600 uppercase mb-2">Completed</div>
<h3 className="text-sm font-semibold text-slate-900 leading-tight mb-1">DNA Report Generated</h3>
<p className="text-xs text-gray-500">Generated on Oct 25, 2023</p>
</div>
<button className="w-full py-2 text-xs font-medium text-slate-700 bg-gray-50 border border-gray-200 rounded-lg hover:bg-white hover:border-gray-300 transition-all flex items-center justify-center gap-2">
<i className="w-3 h-3" data-lucide="download"></i> Download Report
                                </button>
</div>

<div className="min-w-[280px] snap-start bg-white rounded-xl border border-blue-200 ring-1 ring-blue-50 shadow-sm p-5 flex flex-col justify-between h-44 relative">
<div className="absolute top-4 right-4 text-blue-600 animate-pulse">
<i className="w-5 h-5" data-lucide="video"></i>
</div>
<div>
<div className="text-[10px] font-semibold tracking-wider text-blue-600 uppercase mb-2">Upcoming</div>
<h3 className="text-sm font-semibold text-slate-900 leading-tight mb-1">Geneticist Consultation</h3>
<p className="text-xs text-gray-500">Nov 02, 2023 • 10:00 AM</p>
</div>
<button className="w-full py-2 text-xs font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-sm shadow-blue-100">
                                    Join Meeting
                                </button>
</div>

<div className="min-w-[280px] snap-start bg-white rounded-xl border border-gray-200 shadow-sm p-5 flex flex-col justify-between h-44 relative opacity-75 hover:opacity-100 transition-opacity">
<div className="absolute top-4 right-4 text-gray-400">
<i className="w-5 h-5" data-lucide="activity"></i>
</div>
<div>
<div className="text-[10px] font-semibold tracking-wider text-gray-500 uppercase mb-2">Pending</div>
<h3 className="text-sm font-semibold text-slate-900 leading-tight mb-1">Genomic Wellness Plan</h3>
<p className="text-xs text-gray-500">Last updated: -</p>
</div>
<button className="w-full py-2 text-xs font-medium text-gray-400 bg-gray-50 border border-gray-200 rounded-lg cursor-not-allowed flex items-center justify-center gap-2">
                                    Wait for Consult
                                </button>
</div>

<div className="min-w-[280px] snap-start bg-white rounded-xl border border-gray-200 shadow-sm p-5 flex flex-col justify-between h-44 relative opacity-75">
<div className="absolute top-4 right-4 text-gray-400">
<i className="w-5 h-5" data-lucide="user"></i>
</div>
<div>
<div className="text-[10px] font-semibold tracking-wider text-gray-500 uppercase mb-2">Next Step</div>
<h3 className="text-sm font-semibold text-slate-900 leading-tight mb-1">Nutrigenomist Consult</h3>
<p className="text-xs text-gray-500">Unlocks after Wellness Plan</p>
</div>
<button className="w-full py-2 text-xs font-medium text-gray-400 bg-gray-50 border border-gray-200 rounded-lg cursor-not-allowed flex items-center justify-center gap-2">
                                    Book Later
                                </button>
</div>

<div className="min-w-[280px] snap-start bg-white rounded-xl border border-gray-200 shadow-sm p-5 flex flex-col justify-between h-44 relative opacity-60">
<div className="absolute top-4 right-4 text-gray-400">
<i className="w-5 h-5" data-lucide="utensils"></i>
</div>
<div>
<div className="text-[10px] font-semibold tracking-wider text-gray-400 uppercase mb-2">Locked</div>
<h3 className="text-sm font-semibold text-slate-900 leading-tight mb-1">Nutrigenetics Diet Chart</h3>
<p className="text-xs text-gray-500">Available after Consult 2</p>
</div>
<button className="w-full py-2 text-xs font-medium text-gray-400 bg-gray-50 border border-gray-200 rounded-lg cursor-not-allowed flex items-center justify-center gap-2">
<i className="w-3 h-3" data-lucide="lock"></i> Download
                                </button>
</div>

<div className="min-w-[280px] snap-start bg-white rounded-xl border border-gray-200 shadow-sm p-5 flex flex-col justify-between h-44 relative border-dashed">
<div className="absolute top-4 right-4 text-gray-400">
<i className="w-5 h-5" data-lucide="bell"></i>
</div>
<div>
<div className="text-[10px] font-semibold tracking-wider text-gray-400 uppercase mb-2">Future</div>
<h3 className="text-sm font-semibold text-slate-900 leading-tight mb-1">Follow-up Reminders</h3>
<p className="text-xs text-gray-500">Personalized health nudges</p>
</div>
<button className="w-full py-2 text-xs font-medium text-gray-400 bg-gray-50 border border-gray-200 rounded-lg cursor-not-allowed flex items-center justify-center gap-2">
                                    View Reminders
                                </button>
</div>

<div className="min-w-[280px] snap-start bg-slate-50 rounded-xl border border-slate-200 shadow-sm p-5 flex flex-col justify-between h-44 relative">
<div className="absolute top-4 right-4 text-slate-400">
<i className="w-5 h-5" data-lucide="calendar-clock"></i>
</div>
<div>
<div className="text-[10px] font-semibold tracking-wider text-slate-500 uppercase mb-2">Jan 2024</div>
<h3 className="text-sm font-semibold text-slate-900 leading-tight mb-1">3 Months Check-in</h3>
<p className="text-[10px] text-orange-600 bg-orange-50 px-1.5 py-0.5 rounded inline-block mt-1">
                                        Update Blood Biomarkers first
                                    </p>
</div>
<button className="w-full py-2 text-xs font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
<i className="w-3 h-3" data-lucide="upload-cloud"></i> Update Biomarkers
                                </button>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4 border-t border-gray-100">
<div className="p-5 rounded-xl border border-gray-100 bg-white hover:border-gray-200 transition-colors group cursor-pointer">
<div className="flex items-center gap-3 mb-3">
<div className="p-2 rounded-lg bg-indigo-50 text-indigo-600">
<i className="w-5 h-5" data-lucide="shopping-bag"></i>
</div>
<h3 className="text-sm font-medium text-slate-900">Recent Order</h3>
</div>
<p className="text-xs text-gray-500">Order #GH-8829 • <span className="text-green-600">Completed</span></p>
<p className="text-xs text-gray-400 mt-1">Premium DNA Kit</p>
</div>
<div className="p-5 rounded-xl border border-gray-100 bg-white hover:border-gray-200 transition-colors group cursor-pointer">
<div className="flex items-center gap-3 mb-3">
<div className="p-2 rounded-lg bg-teal-50 text-teal-600">
<i className="w-5 h-5" data-lucide="credit-card"></i>
</div>
<h3 className="text-sm font-medium text-slate-900">Payment Method</h3>
</div>
<p className="text-xs text-gray-500">Visa ending in 4242</p>
<p className="text-xs text-gray-400 mt-1">Expires 12/25</p>
</div>
<div className="p-5 rounded-xl border border-gray-100 bg-white hover:border-gray-200 transition-colors group cursor-pointer">
<div className="flex items-center gap-3 mb-3">
<div className="p-2 rounded-lg bg-slate-100 text-slate-600">
<i className="w-5 h-5" data-lucide="life-buoy"></i>
</div>
<h3 className="text-sm font-medium text-slate-900">Support</h3>
</div>
<p className="text-xs text-gray-500">Need help with your report?</p>
<p className="text-xs text-blue-600 mt-1 hover:underline">Chat with us</p>
</div>
</div>
</div>
</div>
</main>

<div className="fixed bottom-6 right-6 z-50 bg-slate-900 p-2 rounded-lg shadow-lg flex flex-col gap-2">
<div className="text-[10px] text-gray-400 uppercase font-bold text-center pb-1 border-b border-gray-700 mb-1">Simulate Flow</div>
<button className="px-3 py-1.5 text-xs font-medium bg-slate-800 text-white rounded hover:bg-slate-700 text-left" onclick="setStage(1)">1. Registration</button>
<button className="px-3 py-1.5 text-xs font-medium bg-slate-800 text-white rounded hover:bg-slate-700 text-left" onclick="setStage(2)">2. Mandatory Steps</button>
<button className="px-3 py-1.5 text-xs font-medium bg-slate-800 text-white rounded hover:bg-slate-700 text-left" onclick="setStage(3)">3. Tracking (Locked)</button>
<button className="px-3 py-1.5 text-xs font-medium bg-blue-600 text-white rounded hover:bg-blue-500 text-left" onclick="setStage(4)">4. Dashboard (Open)</button>
</div>



    </>
  );
}
