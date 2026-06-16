import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-white/75 backdrop-blur-xl border-b border-zinc-100">
<div className="max-w-[1400px] mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="flex items-center gap-2 group" href="#">
<div className="w-5 h-5 bg-zinc-900 rounded-sm flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:zap" data-width="12"></span>
</div>
<span className="text-sm font-semibold tracking-tight text-zinc-900">Velocity</span>
</a>
<div className="hidden md:flex items-center gap-1 bg-zinc-100/50 p-1 rounded-lg border border-zinc-100">
<a className="px-3 py-1 rounded-md text-xs font-medium bg-white text-zinc-900 shadow-sm border border-zinc-200/50 transition-all" href="#">Buy</a>
<a className="px-3 py-1 rounded-md text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Sell</a>
<a className="px-3 py-1 rounded-md text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Exchange</a>
</div>
</div>
<div className="flex items-center gap-3">
<div className="relative hidden sm:block">
<span className="iconify absolute left-2.5 top-2 text-zinc-400" data-icon="lucide:search" data-width="14"></span>
<input className="pl-8 pr-3 py-1.5 w-64 bg-zinc-50 border border-zinc-200 rounded-md text-xs text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-100 transition-all" placeholder="Search inventory (Cmd+K)" type="text"/>
</div>
<div className="h-4 w-px bg-zinc-200 mx-1"></div>
<button className="text-xs font-medium text-zinc-600 hover:text-zinc-900 transition-colors">Log in</button>
<button className="bg-zinc-900 text-white px-3 py-1.5 rounded-md text-xs font-medium hover:bg-zinc-800 transition-colors shadow-sm">Get Started</button>
</div>
</div>
</nav>

<main className="pt-14 min-h-screen flex flex-col">

<header className="border-b border-zinc-100 bg-white">
<div className="max-w-[1400px] mx-auto px-6 py-12">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
<div className="max-w-xl animate-enter">
<div className="flex items-center gap-2 mb-4">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border border-blue-100 bg-blue-50/50 text-[10px] font-medium text-blue-600">
<span className="w-1 h-1 rounded-full bg-blue-600"></span>
                                Phase 1 Beta
                            </span>
<span className="text-xs text-zinc-400">Updated today</span>
</div>
<h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-3">Marketplace Overview</h1>
<p className="text-sm text-zinc-500 leading-relaxed max-w-lg">
                            Access a curated network of verified premium vehicles. Track real-time valuation data and manage your fleet acquisitions with precision.
                        </p>
</div>
<div className="flex gap-6 animate-enter" style={{animationDelay: '100ms'}}>
<div className="space-y-1">
<span className="text-[10px] uppercase tracking-wider text-zinc-400 font-medium">Active Listings</span>
<div className="text-2xl font-semibold tracking-tight text-zinc-900">1,204</div>
</div>
<div className="w-px h-10 bg-zinc-100"></div>
<div className="space-y-1">
<span className="text-[10px] uppercase tracking-wider text-zinc-400 font-medium">Avg. Sale Time</span>
<div className="text-2xl font-semibold tracking-tight text-zinc-900">14<span className="text-sm text-zinc-400 font-normal ml-1">days</span></div>
</div>
<div className="w-px h-10 bg-zinc-100"></div>
<div className="space-y-1">
<span className="text-[10px] uppercase tracking-wider text-zinc-400 font-medium">Volume</span>
<div className="text-2xl font-semibold tracking-tight text-zinc-900">$42M</div>
</div>
</div>
</div>
</div>
</header>

<div className="flex-1 bg-zinc-50/50">
<div className="max-w-[1400px] mx-auto px-6 py-8">

<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 sticky top-16 z-30 bg-white/50 backdrop-blur-md p-2 -mx-2 rounded-xl border border-transparent sm:border-zinc-200/50 transition-all">

<div className="flex items-center gap-2 overflow-x-auto scrollbar-hide max-w-full">
<button className="flex items-center gap-2 px-3 py-1.5 bg-white border border-zinc-200 rounded-md text-xs font-medium text-zinc-700 shadow-sm hover:border-zinc-300 transition-all whitespace-nowrap">
<span className="iconify text-zinc-400" data-icon="lucide:filter" data-width="12"></span>
                            All Makes
                        </button>
<button className="flex items-center gap-2 px-3 py-1.5 bg-transparent border border-transparent hover:bg-zinc-100 rounded-md text-xs font-medium text-zinc-600 transition-all whitespace-nowrap">
                            Porsche
                            <span className="bg-zinc-100 text-zinc-500 px-1.5 py-0.5 rounded text-[10px]">12</span>
</button>
<button className="flex items-center gap-2 px-3 py-1.5 bg-transparent border border-transparent hover:bg-zinc-100 rounded-md text-xs font-medium text-zinc-600 transition-all whitespace-nowrap">
                            Ferrari
                            <span className="bg-zinc-100 text-zinc-500 px-1.5 py-0.5 rounded text-[10px]">8</span>
</button>
<button className="flex items-center gap-2 px-3 py-1.5 bg-transparent border border-transparent hover:bg-zinc-100 rounded-md text-xs font-medium text-zinc-600 transition-all whitespace-nowrap">
                            Mercedes-Benz
                            <span className="bg-zinc-100 text-zinc-500 px-1.5 py-0.5 rounded text-[10px]">24</span>
</button>
</div>

<div className="flex items-center gap-2 ml-auto">
<div className="h-4 w-px bg-zinc-200 hidden sm:block"></div>
<button className="p-1.5 text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 rounded-md transition-all">
<span className="iconify" data-icon="lucide:layout-grid" data-width="14"></span>
</button>
<button className="p-1.5 text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 rounded-md transition-all">
<span className="iconify" data-icon="lucide:list" data-width="14"></span>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

<div className="group bg-white rounded-xl border border-zinc-200 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all duration-300 ease-out-expo overflow-hidden flex flex-col animate-enter" style={{animationDelay: '200ms'}}>
<div className="relative aspect-[16/10] overflow-hidden bg-zinc-100">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out-expo" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-3 right-3 flex gap-2">
<span className="px-2 py-1 bg-white/90 backdrop-blur-sm border border-black/5 rounded text-[10px] font-medium text-zinc-900 shadow-sm">
                                    New Arrival
                                </span>
</div>
</div>
<div className="p-4 flex flex-col flex-1">
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-semibold text-zinc-900 tracking-tight">Porsche 911 GT3</h3>
<p className="text-xs text-zinc-500 mt-1">2022 • 3,400 mi</p>
</div>
<button className="text-zinc-400 hover:text-red-500 transition-colors">
<span className="iconify" data-icon="lucide:heart" data-width="14"></span>
</button>
</div>
<div className="mt-4 pt-4 border-t border-zinc-50 flex items-center justify-between">
<span className="text-sm font-medium text-zinc-900">$245,000</span>
<a className="text-[10px] font-medium text-zinc-500 group-hover:text-zinc-900 flex items-center gap-1 transition-colors" href="#">
                                    Details <span className="iconify" data-icon="lucide:arrow-right" data-width="10"></span>
</a>
</div>
</div>
</div>

<div className="group bg-white rounded-xl border border-zinc-200 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all duration-300 ease-out-expo overflow-hidden flex flex-col animate-enter" style={{animationDelay: '250ms'}}>
<div className="relative aspect-[16/10] overflow-hidden bg-zinc-100">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out-expo" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="p-4 flex flex-col flex-1">
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-semibold text-zinc-900 tracking-tight">Audi RS6 Avant</h3>
<p className="text-xs text-zinc-500 mt-1">2024 • 120 mi</p>
</div>
<button className="text-zinc-400 hover:text-red-500 transition-colors">
<span className="iconify" data-icon="lucide:heart" data-width="14"></span>
</button>
</div>
<div className="mt-4 pt-4 border-t border-zinc-50 flex items-center justify-between">
<span className="text-sm font-medium text-zinc-900">$148,500</span>
<a className="text-[10px] font-medium text-zinc-500 group-hover:text-zinc-900 flex items-center gap-1 transition-colors" href="#">
                                    Details <span className="iconify" data-icon="lucide:arrow-right" data-width="10"></span>
</a>
</div>
</div>
</div>

<div className="group bg-white rounded-xl border border-zinc-200 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all duration-300 ease-out-expo overflow-hidden flex flex-col animate-enter" style={{animationDelay: '300ms'}}>
<div className="relative aspect-[16/10] overflow-hidden bg-zinc-100">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out-expo" src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 flex gap-2">
<span className="px-2 py-1 bg-zinc-900/90 backdrop-blur-sm border border-white/10 rounded text-[10px] font-medium text-white shadow-sm">
                                    Pending
                                </span>
</div>
</div>
<div className="p-4 flex flex-col flex-1">
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-semibold text-zinc-900 tracking-tight">McLaren 720S</h3>
<p className="text-xs text-zinc-500 mt-1">2020 • 5,600 mi</p>
</div>
<button className="text-zinc-400 hover:text-red-500 transition-colors">
<span className="iconify" data-icon="lucide:heart" data-width="14"></span>
</button>
</div>
<div className="mt-4 pt-4 border-t border-zinc-50 flex items-center justify-between">
<span className="text-sm font-medium text-zinc-900">$265,000</span>
<a className="text-[10px] font-medium text-zinc-500 group-hover:text-zinc-900 flex items-center gap-1 transition-colors" href="#">
                                    Details <span className="iconify" data-icon="lucide:arrow-right" data-width="10"></span>
</a>
</div>
</div>
</div>

<div className="group bg-white rounded-xl border border-zinc-200 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all duration-300 ease-out-expo overflow-hidden flex flex-col animate-enter" style={{animationDelay: '350ms'}}>
<div className="relative aspect-[16/10] overflow-hidden bg-zinc-100">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out-expo" src="https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-4 flex flex-col flex-1">
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-semibold text-zinc-900 tracking-tight">Mercedes-AMG G63</h3>
<p className="text-xs text-zinc-500 mt-1">2023 • 1,200 mi</p>
</div>
<button className="text-zinc-400 hover:text-red-500 transition-colors">
<span className="iconify" data-icon="lucide:heart" data-width="14"></span>
</button>
</div>
<div className="mt-4 pt-4 border-t border-zinc-50 flex items-center justify-between">
<span className="text-sm font-medium text-zinc-900">$189,000</span>
<a className="text-[10px] font-medium text-zinc-500 group-hover:text-zinc-900 flex items-center gap-1 transition-colors" href="#">
                                    Details <span className="iconify" data-icon="lucide:arrow-right" data-width="10"></span>
</a>
</div>
</div>
</div>

<div className="group bg-zinc-50 rounded-xl border border-dashed border-zinc-300 hover:border-zinc-400 hover:bg-zinc-100 transition-all duration-300 ease-out-expo flex flex-col items-center justify-center p-8 cursor-pointer animate-enter" style={{animationDelay: '400ms'}}>
<div className="w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center mb-3 shadow-sm group-hover:scale-110 transition-transform">
<span className="iconify text-zinc-600" data-icon="lucide:plus" data-width="18"></span>
</div>
<h3 className="text-sm font-medium text-zinc-900">List Your Vehicle</h3>
<p className="text-xs text-zinc-500 text-center mt-1 max-w-[200px]">Get an instant valuation and access our network of buyers.</p>
</div>
</div>
</div>
</div>

<div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40">
<div className="bg-zinc-900/90 backdrop-blur-md text-white pl-4 pr-2 py-2 rounded-full shadow-lg border border-white/10 flex items-center gap-4 hover:scale-105 transition-transform duration-300">
<span className="text-xs font-medium">Looking for something specific?</span>
<button className="bg-white text-zinc-900 px-3 py-1.5 rounded-full text-xs font-semibold hover:bg-zinc-200 transition-colors">
                    Concierge Request
                </button>
</div>
</div>
</main>

<footer className="bg-white border-t border-zinc-100 py-8 mt-auto">
<div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-2">
<div className="w-4 h-4 bg-zinc-200 rounded-sm"></div>
<span className="text-xs font-medium text-zinc-500">© 2024 Velocity Inc.</span>
</div>
<div className="flex items-center gap-6">
<a className="text-[10px] font-medium text-zinc-400 hover:text-zinc-900 uppercase tracking-wider transition-colors" href="#">Privacy</a>
<a className="text-[10px] font-medium text-zinc-400 hover:text-zinc-900 uppercase tracking-wider transition-colors" href="#">Terms</a>
<a className="text-[10px] font-medium text-zinc-400 hover:text-zinc-900 uppercase tracking-wider transition-colors" href="#">Status</a>
</div>
</div>
</footer>

    </>
  );
}
