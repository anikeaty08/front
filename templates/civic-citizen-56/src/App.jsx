import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        function switchTab(tabId, el) {
            // 1. Reset all nav links styles to default (inactive)
            document.querySelectorAll('.nav-item').forEach(item => {
                item.classList.remove('bg-neutral-100', 'text-neutral-900');
                item.classList.add('text-neutral-500', 'hover:bg-neutral-50', 'hover:text-neutral-900');
            });
            
            // 2. Apply active styles to the clicked nav link
            if (el) {
                el.classList.remove('text-neutral-500', 'hover:bg-neutral-50', 'hover:text-neutral-900');
                el.classList.add('bg-neutral-100', 'text-neutral-900');
            }

            // 3. Hide all view containers
            document.querySelectorAll('.view-container').forEach(view => {
                view.classList.add('hidden');
                view.classList.remove('flex');
            });
            
            // 4. Show the targeted view container
            const activeView = document.getElementById('view-' + tabId);
            if (activeView) {
                activeView.classList.remove('hidden');
                activeView.classList.add('flex');
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="md:w-64 flex-shrink-0 flex md:flex-col md:justify-start fixed md:relative md:h-screen md:px-0 md:py-6 md:shadow-none bg-white w-full z-50 border-neutral-200 border-r pt-3 pr-4 pb-3 pl-4 bottom-0 shadow-[0_-1px_2px_rgba(0,0,0,0.05)] justify-between">

<div className="hidden md:flex items-center px-6 mb-8">
<div className="font-semibold tracking-tighter text-xl text-neutral-950 flex items-center gap-2">
<div className="w-6 h-6 rounded-md bg-neutral-900 flex items-center justify-center text-white">
<iconify-icon icon="solar:buildings-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
                PIRA.
            </div>
</div>

<div className="flex md:flex-col w-full md:w-auto justify-around md:justify-start gap-1 md:px-3">
<a className="nav-item flex flex-col md:flex-row items-center gap-1 md:gap-3 px-3 py-2 md:py-2.5 rounded-lg bg-neutral-100 text-neutral-900 font-medium text-xs md:text-sm transition-colors" href="#" id="nav-dashboard" onclick="switchTab('dashboard', this)">
<iconify-icon className="text-lg md:text-xl" icon="solar:widget-5-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="">Dashboard</span>
</a>
<a className="nav-item flex flex-col md:flex-row items-center gap-1 md:gap-3 px-3 py-2 md:py-2.5 rounded-lg text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900 font-medium text-xs md:text-sm transition-colors" href="#" id="nav-live-map" onclick="switchTab('live-map', this)">
<iconify-icon className="text-lg md:text-xl" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="">Live Map</span>
</a>
<a className="nav-item flex flex-col md:flex-row items-center gap-1 md:gap-3 px-3 py-2 md:py-2.5 rounded-lg text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900 font-medium text-xs md:text-sm transition-colors" href="#" id="nav-my-reports" onclick="switchTab('my-reports', this)">
<iconify-icon className="text-lg md:text-xl" icon="solar:clipboard-list-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="">My Reports</span>
</a>
<a className="nav-item flex flex-col md:flex-row items-center gap-1 md:gap-3 px-3 py-2 md:py-2.5 rounded-lg text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900 font-medium text-xs md:text-sm transition-colors" href="#" id="nav-updates" onclick="switchTab('updates', this)">
<iconify-icon className="text-lg md:text-xl" icon="solar:bell-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Updates</span>
</a>
</div>

<div className="hidden md:flex mt-auto px-6 items-center gap-3 pt-6 border-t border-neutral-200">
<div className="w-8 h-8 rounded-full bg-neutral-200 flex items-center justify-center overflow-hidden">
<iconify-icon className="text-neutral-500" icon="solar:user-linear"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-neutral-900">Ali Khan</span>
<span className="text-xs text-neutral-500">Citizen Account</span>
</div>
</div>
</nav>

<main className="flex-1 relative h-[calc(100vh-60px)] md:h-screen w-full overflow-hidden pb-20 md:pb-0 bg-neutral-50">

<div className="view-container flex flex-col w-full h-full overflow-y-auto p-4 md:p-8" id="view-dashboard">
<header className="mb-8 flex justify-between items-center">
<div>
<h1 className="text-lg md:text-2xl font-semibold tracking-tight text-neutral-950">Dashboard</h1>
<p className="text-xs md:text-sm text-neutral-500 mt-0.5">Welcome back, Ali. Here is an overview of your city.</p>
</div>
<div className="w-8 h-8 rounded-full bg-neutral-200 flex md:hidden items-center justify-center">
<iconify-icon className="text-neutral-500" icon="solar:user-linear"></iconify-icon>
</div>
</header>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
<div className="bg-white p-5 rounded-xl border border-neutral-200 shadow-sm flex flex-col gap-1">
<span className="text-xs font-medium text-neutral-500">Total Reports</span>
<span className="text-2xl font-semibold text-neutral-900 tracking-tight">1,248</span>
</div>
<div className="bg-white p-5 rounded-xl border border-neutral-200 shadow-sm flex flex-col gap-1">
<span className="text-xs font-medium text-neutral-500">Issues Resolved</span>
<span className="text-2xl font-semibold text-emerald-600 tracking-tight">892</span>
</div>
<div className="bg-white p-5 rounded-xl border border-neutral-200 shadow-sm flex flex-col gap-1">
<span className="text-xs font-medium text-neutral-500">In Progress</span>
<span className="text-2xl font-semibold text-amber-500 tracking-tight">356</span>
</div>
</div>
<div className="bg-white border border-neutral-200 rounded-xl p-10 text-center flex flex-col items-center justify-center border-dashed">
<div className="w-12 h-12 bg-neutral-50 rounded-full flex items-center justify-center mb-4 border border-neutral-100">
<iconify-icon className="text-2xl text-neutral-400" icon="solar:map-point-bold-duotone"></iconify-icon>
</div>
<h3 className="text-sm font-semibold tracking-tight text-neutral-900">Explore the Live Map</h3>
<p className="text-xs text-neutral-500 mt-1.5 mb-5 max-w-sm">View and track real-time civic issues reported in your area directly on the interactive map.</p>
<button className="bg-neutral-900 text-white px-4 py-2 rounded-lg text-xs font-medium hover:bg-neutral-800 transition-colors shadow-sm flex items-center gap-2" onclick="document.getElementById('nav-live-map').click()" type="button">
<iconify-icon className="text-sm" icon="solar:routing-linear"></iconify-icon>
                    Open Live Map
                </button>
</div>
</div>

<div className="view-container hidden flex-col w-full h-full bg-white" id="view-live-map">

<header className="z-40 bg-white border-b border-neutral-200 px-4 md:px-8 py-4 flex justify-between items-center flex-shrink-0">
<div>
<h1 className="text-lg md:text-2xl font-semibold tracking-tight text-neutral-950">Live Map</h1>
<p className="text-xs md:text-sm text-neutral-500 mt-0.5">Har masla, aik nazar mein. View real-time reports in your area.</p>
</div>

<div className="w-8 h-8 rounded-full bg-neutral-200 flex md:hidden items-center justify-center">
<iconify-icon className="text-neutral-500" icon="solar:user-linear"></iconify-icon>
</div>
</header>

<div className="flex-1 relative w-full h-full bg-map-pattern overflow-hidden">

<div className="absolute top-4 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:w-[480px] md:right-auto bg-white/95 backdrop-blur-md rounded-xl border border-neutral-200/80 shadow-sm p-1.5 flex items-center gap-1 z-30">
<div className="relative flex-1">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 text-lg" icon="solar:magnifer-linear"></iconify-icon>
<input className="w-full bg-transparent border-none text-sm focus:ring-0 pl-9 pr-3 py-2 text-neutral-900 placeholder-neutral-400 outline-none" placeholder="Search areas or specific issues..." type="text"/>
</div>
<div className="w-px h-6 bg-neutral-200 mx-1"></div>
<button className="px-3 py-2 text-xs font-medium text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50 rounded-lg transition-colors flex items-center gap-1.5 flex-shrink-0">
<iconify-icon className="text-base" icon="solar:filter-linear"></iconify-icon> Filters
                    </button>
</div>

<button className="absolute top-[20%] left-[30%] -translate-x-1/2 -translate-y-1/2 group z-10 transition-transform hover:scale-110">
<iconify-icon className="text-3xl text-emerald-500 drop-shadow-sm opacity-90" icon="solar:map-point-bold"></iconify-icon>
</button>
<button className="absolute top-[65%] left-[20%] -translate-x-1/2 -translate-y-1/2 group z-10 transition-transform hover:scale-110">
<iconify-icon className="text-3xl text-emerald-500 drop-shadow-sm opacity-90" icon="solar:map-point-bold"></iconify-icon>
</button>
<button className="absolute top-[35%] left-[70%] -translate-x-1/2 -translate-y-1/2 group z-10 transition-transform hover:scale-110">
<span className="absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-40 animate-ping"></span>
<iconify-icon className="text-3xl text-red-500 drop-shadow-sm relative z-10" icon="solar:map-point-bold"></iconify-icon>
</button>

<div className="absolute top-[48%] left-[52%] -translate-x-1/2 -translate-y-1/2 z-20">
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-72 bg-white rounded-xl shadow-[0_12px_40px_-12px_rgba(0,0,0,0.15)] border border-neutral-200 overflow-hidden transform transition-all origin-bottom animate-in fade-in zoom-in-95 duration-200">
<div className="h-32 w-full bg-neutral-100 relative group overflow-hidden border-b border-neutral-100">
<img alt="Sewerage Water" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&amp;fit=crop&amp;q=80&amp;w=600&amp;h=300"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent"></div>
<span className="absolute bottom-3 left-3 inline-flex items-center gap-1 rounded-md bg-amber-500/90 backdrop-blur-sm px-2 py-0.5 text-[0.65rem] font-medium text-white shadow-sm">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> In-Progress
                            </span>
</div>
<div className="p-4">
<div className="flex items-start justify-between gap-2 mb-1">
<h3 className="text-sm font-semibold tracking-tight text-neutral-900 line-clamp-1">Sewerage Overflow</h3>
<button className="text-neutral-400 hover:text-neutral-900 transition-colors flex-shrink-0 -mt-0.5 -mr-1 p-1">
<iconify-icon className="text-base" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>
<div className="flex flex-col gap-1.5 mt-2">
<div className="flex items-center gap-2 text-xs text-neutral-500">
<iconify-icon className="text-neutral-400" icon="solar:waterdrops-linear"></iconify-icon>
<span>Water &amp; Sanitation</span>
</div>
<div className="flex items-center gap-2 text-xs text-neutral-500">
<iconify-icon className="text-neutral-400" icon="solar:map-point-linear"></iconify-icon>
<span className="truncate">Street 14, Sector F</span>
</div>
<div className="flex items-center gap-2 text-[0.65rem] text-neutral-400 mt-0.5">
<span>Reported: 14 hours ago</span>
</div>
</div>
<button className="w-full bg-neutral-900 text-white rounded-lg px-3 py-2 text-xs font-medium hover:bg-neutral-800 transition-colors shadow-sm flex items-center justify-center gap-1.5 mt-4" type="button">
<iconify-icon className="text-sm" icon="solar:routing-linear"></iconify-icon>
                                Track Issue
                            </button>
</div>
<div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-b border-r border-neutral-200 rotate-45"></div>
</div>
<button className="relative group mt-1">
<span className="absolute -inset-2 rounded-full bg-amber-400 opacity-20 animate-pulse z-0"></span>
<iconify-icon className="text-4xl text-amber-500 drop-shadow-md relative z-10" icon="solar:map-point-bold"></iconify-icon>
</button>
</div>

<div className="absolute bottom-6 left-4 md:left-6 bg-white/95 backdrop-blur-md border border-neutral-200/80 p-3.5 rounded-xl shadow-sm flex flex-col gap-2.5 z-30 pointer-events-none">
<div className="text-[0.65rem] font-semibold tracking-tight text-neutral-500 uppercase mb-0.5">Status Legend</div>
<div className="flex items-center gap-2.5 text-xs font-medium text-neutral-700">
<span className="relative flex h-2.5 w-2.5"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.4)]"></span></span> Pending
                    </div>
<div className="flex items-center gap-2.5 text-xs font-medium text-neutral-700">
<span className="relative flex h-2.5 w-2.5"><span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.4)]"></span></span> In-Progress
                    </div>
<div className="flex items-center gap-2.5 text-xs font-medium text-neutral-700">
<span className="relative flex h-2.5 w-2.5"><span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span></span> Resolved
                    </div>
</div>
<div className="absolute bottom-6 right-4 md:right-6 flex flex-col gap-2 z-30">
<button className="w-10 h-10 bg-white/95 backdrop-blur-md border border-neutral-200/80 rounded-xl shadow-sm flex items-center justify-center text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 transition-colors" title="Current Location">
<iconify-icon className="text-xl" icon="solar:target-linear"></iconify-icon>
</button>
<div className="flex flex-col bg-white/95 backdrop-blur-md border border-neutral-200/80 rounded-xl shadow-sm overflow-hidden">
<button className="w-10 h-10 flex items-center justify-center text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 transition-colors border-b border-neutral-200/60" title="Zoom In">
<iconify-icon className="text-lg" icon="solar:add-linear"></iconify-icon>
</button>
<button className="w-10 h-10 flex items-center justify-center text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 transition-colors" title="Zoom Out">
<iconify-icon className="text-lg" icon="solar:minus-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="view-container hidden flex-col w-full h-full overflow-y-auto p-4 md:p-8" id="view-my-reports">
<header className="mb-8">
<h1 className="text-lg md:text-2xl font-semibold tracking-tight text-neutral-950">My Reports</h1>
<p className="text-xs md:text-sm text-neutral-500 mt-0.5">Track the status of issues you have submitted.</p>
</header>
<div className="flex-1 flex flex-col items-center justify-center text-center pb-20">
<iconify-icon className="text-5xl text-neutral-200 mb-4" icon="solar:clipboard-list-bold-duotone"></iconify-icon>
<h3 className="text-sm font-semibold text-neutral-900">No reports yet</h3>
<p className="text-xs text-neutral-500 mt-1 max-w-xs">When you submit civic issues, they will appear here so you can track their progress.</p>
</div>
</div>

<div className="view-container hidden flex-col w-full h-full overflow-y-auto p-4 md:p-8" id="view-updates">
<header className="mb-8">
<h1 className="text-lg md:text-2xl font-semibold tracking-tight text-neutral-950">Updates</h1>
<p className="text-xs md:text-sm text-neutral-500 mt-0.5">Notifications and announcements from the municipality.</p>
</header>
<div className="flex-1 flex flex-col items-center justify-center text-center pb-20">
<iconify-icon className="text-5xl text-neutral-200 mb-4" icon="solar:bell-bold-duotone"></iconify-icon>
<h3 className="text-sm font-semibold text-neutral-900">You're all caught up!</h3>
<p className="text-xs text-neutral-500 mt-1 max-w-xs">We will notify you here when there are updates to your reported issues.</p>
</div>
</div>
</main>



    </>
  );
}
