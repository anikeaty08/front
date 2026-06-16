import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        const screens = {
            'screen-overview': { title: 'My Assets', showBack: false, showTabs: true },
            'screen-detail-usd': { title: 'USD Wallet', showBack: true, showTabs: false },
            'screen-convert': { title: 'Convert', showBack: true, showTabs: false },
            'screen-destinations': { title: 'Invest', showBack: true, showTabs: false },
            'screen-services': { title: 'Services', showBack: true, showTabs: false },
            'screen-transfers': { title: 'History', showBack: true, showTabs: false }
        };

        const backBtn = document.getElementById('back-btn');
        const headerTitle = document.getElementById('header-title');
        const assetTabs = document.getElementById('asset-tabs');
        
        let historyStack = ['screen-overview'];

        function navigateTo(screenId) {
            // Hide current
            document.querySelectorAll('.screen').forEach(el => el.classList.remove('active'));
            // Show new
            document.getElementById(screenId).classList.add('active');
            // Update UI
            updateHeader(screenId);
            historyStack.push(screenId);
        }

        function goBack() {
            if (historyStack.length > 1) {
                historyStack.pop();
                const prevScreen = historyStack[historyStack.length - 1];
                document.querySelectorAll('.screen').forEach(el => el.classList.remove('active'));
                document.getElementById(prevScreen).classList.add('active');
                updateHeader(prevScreen);
            }
        }

        function updateHeader(screenId) {
            const config = screens[screenId];
            if (!config) return;

            headerTitle.textContent = config.title;
            
            // Only show Back button on Mobile/Small screens
            // On desktop, we might rely on sidebar or breadcrumbs, but let's keep it simple
            if (config.showBack) {
                backBtn.classList.remove('opacity-0', 'pointer-events-none');
            } else {
                backBtn.classList.add('opacity-0', 'pointer-events-none');
            }

            if (config.showTabs) {
                assetTabs.style.display = 'flex';
            } else {
                assetTabs.style.display = 'none';
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="hidden md:flex flex-col w-64 bg-white border-r border-slate-200 h-full shrink-0 z-50">
<div className="p-6 flex items-center gap-3">
<div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
<svg className="iconify w-5 h-5" height="1em" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7l10 5l10-5zm0 9l2.968-1.484l-2.968 9l-2.968-9z" fill="currentColor"></path></svg>
</div>
<span className="font-bold text-lg tracking-tight">Wallet UI</span>
</div>
<nav className="flex-1 px-3 space-y-1">
<button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors group">
<svg className="iconify w-5 h-5 group-hover:text-slate-900" height="1em" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3 9l9-7l9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
<span className="text-sm font-medium">Home</span>
</button>
<button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors group">
<svg className="iconify w-5 h-5 group-hover:text-slate-900" height="1em" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" fill="none" r="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></circle><path d="m16.24 7.76l-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
<span className="text-sm font-medium">Explore</span>
</button>
<div className="pt-4 pb-2 px-3">
<div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Finance</div>
</div>
<button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg bg-blue-50 text-blue-700 font-medium transition-colors">
<svg className="iconify w-5 h-5" height="1em" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M3 5v14a2 2 0 0 0 2 2h16v-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M18 12a2 2 0 0 0 0 4h4v-4z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
<span className="text-sm">Wallet &amp; Assets</span>
</button>
<button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors group">
<svg className="iconify w-5 h-5 group-hover:text-slate-900" height="1em" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="m22 7l-8.5 8.5l-5-5L2 17" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
<span className="text-sm font-medium">Invest</span>
</button>
</nav>
<div className="p-4 border-t border-slate-200">
<button className="w-full flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-slate-50 transition-colors text-left">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-500">
<svg className="iconify w-4 h-4" height="1em" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><circle cx="12" cy="7" fill="none" r="4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></circle></svg>
</div>
<div className="flex-1 min-w-0">
<div className="text-sm font-medium text-slate-900 truncate">John Doe</div>
<div className="text-xs text-slate-500 truncate">Pro Member</div>
</div>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden relative w-full">

<header className="bg-white/80 backdrop-blur-md px-4 md:px-8 py-3 border-b border-slate-200 flex items-center justify-between z-40 sticky top-0 shrink-0 h-16">
<div className="flex items-center gap-4">

<button className="w-8 h-8 rounded-full hover:bg-slate-100 text-slate-500 flex items-center justify-center transition-all opacity-0 pointer-events-none md:hidden" id="back-btn" onclick="goBack()">
<svg className="iconify w-5 h-5" height="1em" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m15 18l-6-6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<h1 className="font-bold text-lg text-slate-900 tracking-tight" id="header-title">My Assets</h1>
</div>

<div className="flex items-center gap-2 md:gap-4">
<div className="hidden md:flex items-center gap-1 bg-slate-100 rounded-full p-1 border border-slate-200">
<button className="px-4 py-1.5 bg-white text-slate-900 text-xs font-semibold rounded-full shadow-sm">Personal</button>
<button className="px-4 py-1.5 text-slate-500 text-xs font-medium rounded-full hover:text-slate-700">Business</button>
</div>
<div className="h-6 w-px bg-slate-200 hidden md:block"></div>
<button className="w-9 h-9 rounded-full hover:bg-slate-100 text-slate-500 flex items-center justify-center transition-colors">
<svg className="iconify w-5 h-5" height="1em" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" fill="none" r="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3m.08 4h.01" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</button>
<button className="w-9 h-9 rounded-full hover:bg-slate-100 text-slate-500 flex items-center justify-center relative transition-colors">
<svg className="iconify w-5 h-5" height="1em" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0m-10.47-5.674A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
<span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white"></span>
</button>
</div>
</header>

<div className="px-4 md:px-8 border-b border-slate-200 bg-white z-30 flex gap-6 md:gap-8 overflow-x-auto no-scrollbar shrink-0" id="asset-tabs">
<button className="py-3 text-sm font-medium text-slate-500 whitespace-nowrap hover:text-slate-800 transition-colors">Overview</button>
<button className="py-3 text-sm font-medium text-slate-500 whitespace-nowrap hover:text-slate-800 transition-colors">Portfolio</button>
<button className="py-3 text-sm font-semibold text-blue-600 border-b-2 border-blue-600 whitespace-nowrap">Wallet</button>
<button className="py-3 text-sm font-medium text-slate-500 whitespace-nowrap hover:text-slate-800 transition-colors">Activity</button>
<button className="py-3 text-sm font-medium text-slate-500 whitespace-nowrap hover:text-slate-800 transition-colors hidden md:block">Statements</button>
</div>

<div className="flex-1 overflow-y-auto no-scrollbar p-4 pb-24 md:p-8 md:pb-8">
<div className="max-w-6xl mx-auto h-full">

<div className="screen active flex-col gap-6" id="screen-overview">

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col justify-between relative overflow-hidden group">

<div className="absolute right-0 top-0 w-32 h-32 bg-blue-50/50 rounded-bl-full -mr-8 -mt-8 pointer-events-none"></div>
<div className="flex justify-between items-start z-10">
<div>
<div className="flex items-center gap-2 mb-1">
<span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Available Balance</span>
<svg className="iconify text-slate-400 w-3.5 h-3.5" height="1em" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" fill="none" r="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle><path d="M12 16v-4m0-4h.01" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="flex items-baseline gap-2">
<span className="text-sm font-semibold text-slate-400">THB</span>
<span className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">24,500.00</span>
</div>
<div className="mt-2 text-sm text-slate-500 font-medium">
                                        ≈ Total Estimate 174,500.00 THB
                                    </div>
</div>
<button className="text-slate-400 hover:text-blue-600 transition-colors">
<svg className="iconify w-5 h-5" height="1em" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696a10.75 10.75 0 0 1 19.876 0a1 1 0 0 1 0 .696a10.75 10.75 0 0 1-19.876 0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><circle cx="12" cy="12" fill="none" r="3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle></svg>
</button>
</div>

<div className="mt-6 md:mt-8 flex flex-col md:flex-row md:items-center gap-3">
<button className="flex-1 bg-amber-50 border border-amber-100/60 rounded-xl p-3 flex items-center gap-3 hover:bg-amber-100/50 transition-colors cursor-pointer group/pending" onclick="navigateTo('screen-transfers')">
<div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
<svg className="iconify w-4 h-4" height="1em" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><circle cx="12" cy="12" fill="none" r="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle></svg>
</div>
<div className="flex-1 text-left">
<div className="text-xs font-bold text-amber-800 uppercase tracking-wide">Incoming</div>
<div className="text-sm font-semibold text-amber-700">+ 150,000.00 <span className="text-[10px] font-normal opacity-80 ml-1">Est. 2 days</span></div>
</div>
<svg className="iconify text-amber-400 group-hover/pending:text-amber-600 transition-colors" d="m9 18l6-6l-6-6" height="1em" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m9 18l6-6l-6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>

<div className="grid grid-cols-4 md:grid-cols-2 gap-3 h-full">
<button className="bg-white hover:bg-slate-50 border border-slate-200 rounded-xl p-3 md:p-4 flex flex-col md:flex-row items-center md:items-start md:justify-between gap-2 shadow-sm transition-all group h-full" onclick="navigateTo('screen-convert')">
<div className="flex flex-col md:flex-row items-center gap-3">
<div className="w-10 h-10 md:w-10 md:h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform duration-200">
<svg className="iconify w-5 h-5" height="1em" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 0 1 9-9a9.75 9.75 0 0 1 6.74 2.74L21 8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M21 3v5h-5m5 4a9 9 0 0 1-9 9a9.75 9.75 0 0 1-6.74-2.74L3 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M8 16H3v5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-xs md:text-sm font-semibold text-slate-700">Convert</span>
</div>
</button>
<button className="bg-white hover:bg-slate-50 border border-slate-200 rounded-xl p-3 md:p-4 flex flex-col md:flex-row items-center md:items-start md:justify-between gap-2 shadow-sm transition-all group h-full" onclick="navigateTo('screen-destinations')">
<div className="flex flex-col md:flex-row items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-white border border-slate-200 text-slate-600 flex items-center justify-center shadow-sm group-hover:border-blue-400 group-hover:text-blue-600 transition-colors">
<svg className="iconify w-5 h-5" height="1em" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m16 3l4 4l-4 4m4-4H4m4 14l-4-4l4-4m-4 4h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-xs md:text-sm font-semibold text-slate-700">Invest</span>
</div>
</button>
<button className="bg-white hover:bg-slate-50 border border-slate-200 rounded-xl p-3 md:p-4 flex flex-col md:flex-row items-center md:items-start md:justify-between gap-2 shadow-sm transition-all group h-full">
<div className="flex flex-col md:flex-row items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-white border border-slate-200 text-slate-600 flex items-center justify-center shadow-sm group-hover:border-blue-400 group-hover:text-blue-600 transition-colors">
<svg className="iconify w-5 h-5" height="1em" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="m7 10l5 5l5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-xs md:text-sm font-semibold text-slate-700">Deposit</span>
</div>
</button>
<button className="bg-white hover:bg-slate-50 border border-slate-200 rounded-xl p-3 md:p-4 flex flex-col md:flex-row items-center md:items-start md:justify-between gap-2 shadow-sm transition-all group h-full" onclick="document.getElementById('services-section').scrollIntoView({behavior: 'smooth'})">
<div className="flex flex-col md:flex-row items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-white border border-slate-200 text-slate-600 flex items-center justify-center shadow-sm group-hover:border-blue-400 group-hover:text-blue-600 transition-colors">
<svg className="iconify w-5 h-5" height="1em" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><rect fill="none" height="7" rx="1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="7" x="3" y="3"></rect><rect fill="none" height="7" rx="1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="7" x="14" y="3"></rect><rect fill="none" height="7" rx="1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="7" x="14" y="14"></rect><rect fill="none" height="7" rx="1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="7" x="3" y="14"></rect></svg>
</div>
<span className="text-xs md:text-sm font-semibold text-slate-700">More</span>
</div>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="md:col-span-2">
<div className="flex justify-between items-end mb-4">
<h2 className="text-base font-bold text-slate-900">Assets Breakdown</h2>
<span className="text-xs text-slate-500">Last updated: Today, 10:05</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between hover:border-blue-400 transition cursor-pointer h-36">
<div className="flex justify-between items-start">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-lg shadow-sm border border-slate-100">🇹🇭</div>
<div>
<div className="font-bold text-slate-900">THB</div>
<div className="text-xs text-slate-500">Thai Baht</div>
</div>
</div>
<div className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-1 rounded">READY</div>
</div>
<div className="text-right mt-2">
<div className="text-2xl font-bold text-slate-900 tracking-tight">24,500.00</div>
</div>
</div>

<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between hover:border-blue-400 transition cursor-pointer relative overflow-hidden group h-36" onclick="navigateTo('screen-detail-usd')">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-400"></div>
<div className="flex justify-between items-start">
<div className="flex items-center gap-3 pl-1">
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-lg shadow-sm border border-blue-100">🇺🇸</div>
<div>
<div className="font-bold text-slate-900">USD</div>
<div className="text-xs text-slate-500">US Dollar</div>
</div>
</div>
<div className="text-[10px] text-amber-700 font-bold bg-amber-50 px-2 py-1 rounded flex items-center gap-1">
<svg className="iconify w-3 h-3" height="1em" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><circle cx="12" cy="12" fill="none" r="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle></svg>
                                            PENDING
                                        </div>
</div>
<div className="text-right mt-2">
<div className="text-2xl font-bold text-slate-900 tracking-tight">4,411.00</div>
<div className="text-xs text-amber-600 font-medium">Coming 200.00</div>
</div>
</div>

<div className="bg-slate-50 p-5 rounded-xl border border-dashed border-slate-300 flex flex-col items-center justify-center text-slate-400 hover:text-slate-600 hover:border-slate-400 transition cursor-pointer h-36 gap-2">
<svg className="iconify w-8 h-8" height="1em" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-xs font-semibold">Open New Account</span>
</div>
</div>
</div>
</div>

<div className="pt-2" id="services-section">
<div className="flex justify-between items-center mb-4">
<h2 className="text-base font-bold text-slate-900">Services &amp; Tools</h2>
<button className="text-sm text-blue-600 font-medium hover:text-blue-700 hover:underline" onclick="navigateTo('screen-services')">View All</button>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition cursor-pointer flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
<svg className="iconify w-5 h-5" height="1em" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M14 2v5a1 1 0 0 0 1 1h5M10 9H8m8 4H8m8 4H8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="overflow-hidden">
<div className="text-sm font-semibold text-slate-900 truncate">Tax Report</div>
</div>
</div>
<div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition cursor-pointer flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
<svg className="iconify w-5 h-5" height="1em" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 1 0 9-9a9.75 9.75 0 0 0-6.74 2.74L3 8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M3 3v5h5m4-1v5l4 2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="overflow-hidden">
<div className="text-sm font-semibold text-slate-900 truncate">Statement</div>
</div>
</div>
<div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition cursor-pointer flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
<svg className="iconify w-5 h-5" height="1em" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0a2.34 2.34 0 0 0 3.319 1.915a2.34 2.34 0 0 1 2.33 4.033a2.34 2.34 0 0 0 0 3.831a2.34 2.34 0 0 1-2.33 4.033a2.34 2.34 0 0 0-3.319 1.915a2.34 2.34 0 0 1-4.659 0a2.34 2.34 0 0 0-3.32-1.915a2.34 2.34 0 0 1-2.33-4.033a2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><circle cx="12" cy="12" fill="none" r="3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle></svg>
</div>
<div className="overflow-hidden">
<div className="text-sm font-semibold text-slate-900 truncate">Limits</div>
</div>
</div>
</div>
</div>
</div>

<div className="screen flex-col h-full" id="screen-detail-usd">

<div className="flex flex-col lg:flex-row gap-6 h-full">

<div className="lg:w-1/3 flex flex-col gap-6">
<div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 text-center">
<div className="w-16 h-16 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-3xl mx-auto mb-4 shadow-sm">🇺🇸</div>
<h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-1">USD 4,411.00</h2>
<p className="text-sm text-slate-500 font-medium mb-6">Total Estimate Value</p>
<div className="grid grid-cols-2 gap-3">
<button className="flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-xl font-semibold text-sm shadow-md shadow-blue-200 hover:bg-blue-700 transition" onclick="navigateTo('screen-convert')">
<svg className="iconify w-4 h-4" height="1em" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 0 1 9-9a9.75 9.75 0 0 1 6.74 2.74L21 8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M21 3v5h-5m5 4a9 9 0 0 1-9 9a9.75 9.75 0 0 1-6.74-2.74L3 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M8 16H3v5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                        Convert
                                    </button>
<button className="flex items-center justify-center gap-2 bg-slate-100 text-slate-700 py-3 rounded-xl font-semibold text-sm hover:bg-slate-200 transition" onclick="navigateTo('screen-destinations')">
<svg className="iconify w-4 h-4" height="1em" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m16 3l4 4l-4 4m4-4H4m4 14l-4-4l4-4m-4 4h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                        Invest
                                    </button>
</div>
</div>
</div>

<div className="lg:w-2/3 flex flex-col gap-6">

<div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
<div className="bg-slate-50 px-6 py-3 border-b border-slate-200 flex justify-between items-center">
<h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Local Assets (Thailand)</h3>
</div>
<div className="p-6 flex flex-col sm:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
<svg className="iconify w-5 h-5" height="1em" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10 18v-7m1.12-8.802a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949zM14 18v-7m4 7v-7M3 22h18M6 18v-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<div className="text-base font-bold text-slate-900">FCD (เงินฝาก)</div>
<div className="text-sm text-slate-500">SCB Account</div>
</div>
</div>
<div className="flex flex-col sm:items-end gap-1 w-full sm:w-auto">
<div className="text-xl font-bold text-slate-900">200.00</div>
<button className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded hover:bg-blue-100 transition inline-flex items-center gap-1 self-start sm:self-end" onclick="navigateTo('screen-convert')">
                                            Convert to THB <svg className="iconify w-3 h-3" height="1em" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</div>

<div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex-1">
<div className="bg-slate-50 px-6 py-3 border-b border-slate-200 flex justify-between items-center">
<h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Global Assets</h3>
<span className="text-sm font-bold text-slate-900">Total: 4,211.00</span>
</div>
<div className="divide-y divide-slate-100">
<div className="p-6 flex justify-between items-center hover:bg-slate-50 transition">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
<svg className="iconify w-5 h-5" height="1em" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" fill="none" r="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20M2 12h20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<div className="text-sm font-bold text-slate-900">Global Investing</div>
<div className="text-xs text-slate-500">Offshore Stocks</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-bold text-slate-900">3,000.00</div>
</div>
</div>
<div className="p-6 flex justify-between items-center bg-amber-50/40">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
<svg className="iconify w-5 h-5" height="1em" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<div className="text-sm font-bold text-slate-900">Structured Products</div>
<div className="text-xs text-slate-500">Derivatives</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-bold text-slate-900">1,211.00</div>
<div className="text-xs text-amber-600 font-medium flex items-center justify-end gap-1 mt-0.5">
<svg className="iconify w-3 h-3" height="1em" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><circle cx="12" cy="12" fill="none" r="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle></svg> Pending 200
                                            </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="screen flex-col items-center justify-center h-full" id="screen-convert">
<div className="w-full max-w-lg mx-auto">
<h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Convert Currency</h2>
<div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 relative">

<div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 mb-2">
<div className="flex justify-between mb-2">
<span className="text-xs font-semibold text-slate-500">From</span>
<span className="text-xs font-medium text-slate-500">Avail: <span className="text-slate-900 font-bold">200.00</span></span>
</div>
<div className="flex justify-between items-center">
<div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-sm">
<span className="text-lg">🇺🇸</span>
<span className="font-bold text-slate-900">USD</span>
</div>
<input className="bg-transparent text-right text-3xl font-bold text-slate-900 w-32 outline-none p-0 border-none focus:ring-0" placeholder="0.00" type="number" value="100"/>
</div>
</div>

<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
<div className="w-10 h-10 bg-white rounded-full border border-slate-200 shadow-md flex items-center justify-center text-blue-600">
<svg className="iconify w-5 h-5" height="1em" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14m7-7l-7 7l-7-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>

<div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 mt-2">
<div className="flex justify-between mb-2">
<span className="text-xs font-semibold text-slate-500">To (Estimated)</span>
</div>
<div className="flex justify-between items-center">
<div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-sm">
<span className="text-lg">🇹🇭</span>
<span className="font-bold text-slate-900">THB</span>
</div>
<div className="text-right text-3xl font-bold text-slate-900">3,450<span className="text-lg text-slate-400">.00</span></div>
</div>
</div>

<div className="mt-4 space-y-3">
<div className="flex justify-between text-sm">
<span className="text-slate-500">Rate</span>
<span className="font-medium text-slate-900">1 USD = 34.50 THB</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-1 overflow-hidden">
<div className="bg-blue-500 h-1 w-full animate-timer" style={{transformOrigin: 'left'}}></div>
</div>
</div>
<button className="w-full mt-6 bg-blue-600 text-white py-4 rounded-xl font-bold text-base shadow-lg shadow-blue-200 hover:bg-blue-700 hover:scale-[1.01] active:scale-[0.98] transition transform" onclick="goBack(); alert('Success')">
                                Confirm Conversion
                            </button>
</div>
</div>
</div>

<div className="screen flex-col" id="screen-destinations">
<h2 className="text-xl font-bold text-slate-900 mb-6 px-1">Select Investment Destination</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

<button className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col items-start gap-4 hover:border-blue-500 hover:ring-1 hover:ring-blue-500 transition group text-left h-full">
<div className="w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center">
<svg className="iconify w-6 h-6" height="1em" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" fill="none" r="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20M2 12h20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<div className="font-bold text-lg text-slate-900 group-hover:text-blue-700">Global Investing</div>
<p className="text-sm text-slate-500 mt-1">Invest in US Stocks, ETFs and Global Funds directly.</p>
</div>
</button>

<button className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col items-start gap-4 hover:border-blue-500 hover:ring-1 hover:ring-blue-500 transition group text-left h-full">
<div className="w-12 h-12 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center">
<svg className="iconify w-6 h-6" height="1em" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<div className="font-bold text-lg text-slate-900 group-hover:text-blue-700">Structured Products</div>
<p className="text-sm text-slate-500 mt-1">Customized derivatives for specific risk-return profiles.</p>
</div>
</button>

<button className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col items-start gap-4 hover:border-blue-500 hover:ring-1 hover:ring-blue-500 transition group text-left h-full">
<div className="w-12 h-12 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center">
<svg className="iconify w-6 h-6" height="1em" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><rect fill="none" height="14" rx="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="20" x="2" y="6"></rect></svg>
</div>
<div>
<div className="font-bold text-lg text-slate-900 group-hover:text-blue-700">Global Bonds</div>
<p className="text-sm text-slate-500 mt-1">Stable income from high-grade international government bonds.</p>
</div>
</button>
</div>
</div>

<div className="screen flex-col" id="screen-services">
<h2 className="text-xl font-bold text-slate-900 mb-6 px-1">All Services</h2>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col gap-3 hover:shadow-md transition cursor-pointer">
<div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center"><svg className="iconify w-6 h-6" height="1em" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></div>
<span className="font-semibold">Tax Report</span>
</div>
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col gap-3 hover:shadow-md transition cursor-pointer">
<div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center"><svg className="iconify w-6 h-6" height="1em" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 1 0 9-9a9.75 9.75 0 0 0-6.74 2.74L3 8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></div>
<span className="font-semibold">Statement</span>
</div>
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col gap-3 hover:shadow-md transition cursor-pointer">
<div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center"><svg className="iconify w-6 h-6" height="1em" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><rect fill="none" height="7" rx="1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="7" x="3" y="3"></rect><rect fill="none" height="7" rx="1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="7" x="14" y="3"></rect><rect fill="none" height="7" rx="1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="7" x="14" y="14"></rect><rect fill="none" height="7" rx="1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="7" x="3" y="14"></rect></svg></div>
<span className="font-semibold">More Services</span>
</div>
</div>
</div>

<div className="screen flex-col" id="screen-transfers">
<h2 className="text-xl font-bold text-slate-900 mb-6 px-1">Transaction History</h2>
<div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
<div className="p-4 border-b border-slate-100 flex gap-2 overflow-x-auto no-scrollbar">
<button className="px-4 py-1.5 bg-slate-900 text-white text-xs font-medium rounded-full shrink-0">All</button>
<button className="px-4 py-1.5 bg-slate-100 text-slate-600 text-xs font-medium rounded-full shrink-0 hover:bg-slate-200">Pending</button>
<button className="px-4 py-1.5 bg-slate-100 text-slate-600 text-xs font-medium rounded-full shrink-0 hover:bg-slate-200">Completed</button>
</div>
<div className="divide-y divide-slate-100">
<div className="p-4 md:p-6 flex items-center justify-between hover:bg-slate-50 transition">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center">
<svg className="iconify w-5 h-5" height="1em" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<div className="text-sm font-bold text-slate-900">Transfer to Structured Products</div>
<div className="text-xs text-amber-600 font-medium">Pending (Est. 3 days) • Today</div>
</div>
</div>
<span className="text-sm font-bold text-slate-900">- 10,000 USD</span>
</div>
<div className="p-4 md:p-6 flex items-center justify-between hover:bg-slate-50 transition">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
<svg className="iconify w-5 h-5" height="1em" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 0 1 9-9a9.75 9.75 0 0 1 6.74 2.74L21 8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M21 3v5h-5m5 4a9 9 0 0 1-9 9a9.75 9.75 0 0 1-6.74-2.74L3 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M8 16H3v5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<div className="text-sm font-bold text-slate-900">Convert USD to THB</div>
<div className="text-xs text-slate-500">Completed • Yesterday</div>
</div>
</div>
<span className="text-sm font-bold text-emerald-600">+ 3,450.00 THB</span>
</div>
</div>
</div>
</div>
</div>
</div>

<nav className="md:hidden bg-white/90 backdrop-blur-lg border-t border-slate-200 flex justify-around items-center py-2 shrink-0 z-50 fixed bottom-0 w-full pb-safe">
<button className="flex flex-col items-center gap-1 p-2 text-slate-400 w-16 group">
<svg className="iconify w-6 h-6 group-hover:text-slate-600" height="1em" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-[10px] font-medium">Home</span>
</button>
<button className="flex flex-col items-center gap-1 p-2 text-slate-400 w-16 group">
<svg className="iconify w-6 h-6 group-hover:text-slate-600" height="1em" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" fill="none" r="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle><path d="m16.24 7.76l-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-[10px] font-medium">Explore</span>
</button>
<button className="flex flex-col items-center gap-1 p-2 text-slate-400 w-16 group">
<svg className="iconify w-6 h-6 group-hover:text-slate-600" height="1em" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="m22 7l-8.5 8.5l-5-5L2 17" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-[10px] font-medium">Invest</span>
</button>

<button className="flex flex-col items-center gap-1 p-2 text-blue-600 w-16 relative">
<svg className="iconify w-6 h-6" height="1em" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-[10px] font-semibold">Asset</span>
<span className="absolute top-0 w-8 h-0.5 bg-blue-600 rounded-b-lg"></span>
</button>
<button className="flex flex-col items-center gap-1 p-2 text-slate-400 w-16 group">
<svg className="iconify w-6 h-6 group-hover:text-slate-600" height="1em" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><circle cx="12" cy="7" fill="none" r="4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle></svg>
<span className="text-[10px] font-medium">Profile</span>
</button>
</nav>
</main>



    </>
  );
}
