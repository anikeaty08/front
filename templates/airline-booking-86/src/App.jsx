import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide Icons
        lucide.createIcons();

        // Router Functionality
        function navigate(pageId) {
            document.querySelectorAll('.page-view').forEach(page => {
                page.classList.remove('block');
                page.classList.add('hidden');
            });
            
            const targetPage = document.getElementById(pageId);
            if (targetPage) {
                targetPage.classList.remove('hidden');
                targetPage.classList.add('block');
                window.scrollTo({top: 0, behavior: 'smooth'});
            }

            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('text-blue-600', 'bg-blue-50');
                link.classList.add('text-slate-600');
                if (link.dataset.target === pageId) {
                    link.classList.remove('text-slate-600');
                    link.classList.add('text-blue-600', 'bg-blue-50');
                }
            });

            document.querySelectorAll('.mobile-nav-link').forEach(link => {
                link.classList.remove('text-blue-600', 'bg-blue-50');
                link.classList.add('text-slate-600');
                if (link.dataset.target === pageId) {
                    link.classList.remove('text-slate-600');
                    link.classList.add('text-blue-600', 'bg-blue-50');
                }
            });
        }

        // Mobile Menu Toggle
        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            if (menu.classList.contains('hidden')) {
                menu.classList.remove('hidden');
            } else {
                menu.classList.add('hidden');
            }
        }

        // Search Widget Functions
        function swapLocations() {
            const fromInput = document.getElementById('input-from');
            const toInput = document.getElementById('input-to');
            const temp = fromInput.value;
            fromInput.value = toInput.value;
            toInput.value = temp;
        }

        function switchTab(clickedElement) {
            document.querySelectorAll('.search-tab').forEach(tab => {
                tab.classList.remove('text-blue-600', 'border-blue-600');
                tab.classList.add('text-slate-500', 'border-transparent');
            });
            clickedElement.classList.remove('text-slate-500', 'border-transparent');
            clickedElement.classList.add('text-blue-600', 'border-blue-600');
        }

        // Search Itinerary Functionality
        function findTrip() {
            const btn = document.getElementById('find-trip-btn');
            const resultCard = document.getElementById('itinerary-result');
            
            // Loading State
            btn.innerHTML = '<i data-lucide="loader" class="w-5 h-5 animate-spin"></i> <span class="text-lg">Locating...</span>';
            lucide.createIcons();
            
            setTimeout(() => {
                // Reveal Result
                resultCard.classList.remove('hidden');
                
                // Trigger reflow for animation
                void resultCard.offsetWidth; 
                
                resultCard.classList.remove('opacity-0', 'translate-y-8');
                resultCard.classList.add('opacity-100', 'translate-y-0');
                
                // Update Button
                btn.innerHTML = '<i data-lucide="check" class="w-5 h-5"></i> <span class="text-lg">Itinerary Found</span>';
                btn.classList.replace('bg-blue-600', 'bg-emerald-600');
                btn.classList.replace('hover:bg-blue-700', 'hover:bg-emerald-700');
                btn.classList.replace('shadow-blue-600/20', 'shadow-emerald-600/20');
                lucide.createIcons();
                
                // Scroll to view
                resultCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 800);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50 transition-all">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex items-center gap-8">
<a className="flex items-center gap-1" href="#" onclick="navigate('page-book'); return false;">
<span className="text-2xl font-medium tracking-tight text-blue-900 lowercase">jetBlue</span>
</a>
<nav className="hidden md:flex space-x-1" id="desktop-nav">
<button className="nav-link px-3 py-2 text-base font-normal text-blue-600 rounded-md bg-blue-50 transition-colors" data-target="page-book" onclick="navigate('page-book')">Book</button>
<button className="nav-link px-3 py-2 text-base font-normal text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors" data-target="page-manage" onclick="navigate('page-manage')">Manage</button>
<button className="nav-link px-3 py-2 text-base font-normal text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors" data-target="page-experience" onclick="navigate('page-experience')">Experience</button>
<button className="nav-link px-3 py-2 text-base font-normal text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors" data-target="page-trueblue" onclick="navigate('page-trueblue')">TrueBlue</button>
</nav>
</div>

<div className="flex items-center gap-4">
<div className="hidden lg:flex items-center gap-4 text-base font-normal">
<button className="text-slate-600 hover:text-slate-900 flex items-center gap-1.5 transition-colors">
<i className="w-4 h-4" data-lucide="globe" strokeWidth="1.5"></i>
                            EN
                        </button>
<span className="text-slate-300">|</span>
<button className="text-slate-600 hover:text-slate-900 transition-colors" onclick="navigate('page-trueblue')">Sign in</button>
</div>
<button className="hidden sm:block px-5 py-2.5 text-base font-medium text-white bg-blue-900 hover:bg-blue-800 rounded-full transition-colors shadow-sm" onclick="navigate('page-trueblue')">
                        Join TrueBlue
                    </button>
<button className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-md transition-colors" onclick="toggleMobileMenu()">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>

<div className="hidden md:hidden absolute top-16 left-0 w-full bg-white border-b border-slate-200 shadow-lg z-40" id="mobile-menu">
<div className="px-4 py-4 space-y-2 flex flex-col">
<button className="mobile-nav-link text-left px-4 py-3 text-base font-normal text-blue-600 bg-blue-50 rounded-lg" data-target="page-book" onclick="navigate('page-book'); toggleMobileMenu()">Book</button>
<button className="mobile-nav-link text-left px-4 py-3 text-base font-normal text-slate-600 hover:bg-slate-50 rounded-lg" data-target="page-manage" onclick="navigate('page-manage'); toggleMobileMenu()">Manage trips</button>
<button className="mobile-nav-link text-left px-4 py-3 text-base font-normal text-slate-600 hover:bg-slate-50 rounded-lg" data-target="page-experience" onclick="navigate('page-experience'); toggleMobileMenu()">Experience</button>
<button className="mobile-nav-link text-left px-4 py-3 text-base font-normal text-slate-600 hover:bg-slate-50 rounded-lg" data-target="page-trueblue" onclick="navigate('page-trueblue'); toggleMobileMenu()">TrueBlue Rewards</button>
</div>
</div>
</header>
<main className="flex-grow">



<div className="page-view block page-enter" id="page-book">

<div className="relative bg-blue-950 pt-24 pb-52 px-4 sm:px-6 lg:px-8 overflow-hidden">
<div className="absolute inset-0 opacity-40 pointer-events-none">
<div className="absolute top-0 left-1/4 w-full h-full bg-gradient-to-br from-blue-400 to-transparent rounded-full blur-3xl transform -translate-y-1/2"></div>
</div>
<div className="relative max-w-7xl mx-auto flex flex-col items-center text-center z-10">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-6">
                        For the love of flights.
                    </h1>
<p className="text-xl text-blue-100 font-normal max-w-2xl">
                        Award-winning service, the most legroom in coach, and free high-speed Wi-Fi on every seat. Let's get you there.
                    </p>
</div>
</div>

<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-36 relative z-20 mb-20">
<div className="bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">

<div className="flex overflow-x-auto no-scrollbar border-b border-slate-100 bg-slate-50/50 px-2 sm:px-6 pt-2" id="search-tabs">
<button className="search-tab flex items-center gap-2 px-5 py-4 text-base font-medium text-blue-600 border-b-2 border-blue-600 whitespace-nowrap transition-colors" onclick="switchTab(this)">
<i className="w-5 h-5" data-lucide="plane" strokeWidth="1.5"></i> Flights
                        </button>
<button className="search-tab flex items-center gap-2 px-5 py-4 text-base font-normal text-slate-500 hover:text-slate-800 border-b-2 border-transparent whitespace-nowrap transition-colors" onclick="switchTab(this)">
<i className="w-5 h-5" data-lucide="building" strokeWidth="1.5"></i> Stays
                        </button>
<button className="search-tab flex items-center gap-2 px-5 py-4 text-base font-normal text-slate-500 hover:text-slate-800 border-b-2 border-transparent whitespace-nowrap transition-colors" onclick="switchTab(this)">
<i className="w-5 h-5" data-lucide="car" strokeWidth="1.5"></i> Cars
                        </button>
<button className="search-tab flex items-center gap-2 px-5 py-4 text-base font-normal text-slate-500 hover:text-slate-800 border-b-2 border-transparent whitespace-nowrap transition-colors" onclick="switchTab(this)">
<i className="w-5 h-5" data-lucide="shopping-bag" strokeWidth="1.5"></i> Packages
                        </button>
</div>
<div className="p-6 sm:p-8 lg:p-10">
<div className="flex flex-wrap items-center gap-6 mb-8">
<button className="flex items-center gap-1.5 text-base font-normal text-slate-700 hover:text-blue-600 transition-colors group">
                                Roundtrip <i className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
<button className="flex items-center gap-1.5 text-base font-normal text-slate-700 hover:text-blue-600 transition-colors group">
                                1 Traveler <i className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5 items-center">

<div className="lg:col-span-5 flex flex-col sm:flex-row bg-white border border-slate-300 rounded-2xl relative shadow-sm focus-within:ring-2 focus-within:ring-blue-500/20 focus-within:border-blue-500 transition-all z-10">
<div className="flex-1 relative p-4 border-b sm:border-b-0 sm:border-r border-slate-200 hover:bg-slate-50 transition-colors rounded-t-2xl sm:rounded-l-2xl sm:rounded-tr-none cursor-text group">
<label className="block text-xs font-normal text-slate-500 mb-1 group-focus-within:text-blue-600 transition-colors uppercase tracking-wider">From</label>
<div className="flex items-center gap-2.5">
<i className="w-5 h-5 text-slate-400 group-focus-within:text-blue-600 transition-colors" data-lucide="map-pin" strokeWidth="1.5"></i>
<input className="w-full bg-transparent text-xl font-medium tracking-tight text-slate-900 placeholder:text-slate-400 focus:outline-none truncate" id="input-from" placeholder="Where from?" type="text" value="New York (JFK)"/>
</div>
</div>
<button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-white border border-slate-200 rounded-full p-2 shadow-sm hover:bg-slate-50 hover:shadow transition-all text-slate-600 hover:text-blue-600" onclick="swapLocations()">
<i className="w-4 h-4" data-lucide="arrow-right-left" strokeWidth="1.5"></i>
</button>
<div className="flex-1 relative p-4 hover:bg-slate-50 transition-colors rounded-b-2xl sm:rounded-r-2xl sm:rounded-bl-none cursor-text group">
<label className="block text-xs font-normal text-slate-500 mb-1 group-focus-within:text-blue-600 transition-colors uppercase tracking-wider">To</label>
<div className="flex items-center gap-2.5">
<i className="w-5 h-5 text-slate-400 group-focus-within:text-blue-600 transition-colors" data-lucide="navigation" strokeWidth="1.5"></i>
<input className="w-full bg-transparent text-xl font-medium tracking-tight text-slate-900 placeholder:text-slate-400 focus:outline-none truncate" id="input-to" placeholder="Where to?" type="text"/>
</div>
</div>
</div>

<div className="lg:col-span-4 flex flex-col sm:flex-row bg-white border border-slate-300 rounded-2xl relative shadow-sm focus-within:ring-2 focus-within:ring-blue-500/20 focus-within:border-blue-500 transition-all">
<div className="flex-1 relative p-4 border-b sm:border-b-0 sm:border-r border-slate-200 hover:bg-slate-50 transition-colors rounded-t-2xl sm:rounded-l-2xl sm:rounded-tr-none cursor-text group">
<label className="block text-xs font-normal text-slate-500 mb-1 group-focus-within:text-blue-600 transition-colors uppercase tracking-wider">Depart</label>
<div className="flex items-center gap-2.5">
<i className="w-5 h-5 text-slate-400 group-focus-within:text-blue-600 transition-colors" data-lucide="calendar" strokeWidth="1.5"></i>
<input className="w-full bg-transparent text-xl font-medium tracking-tight text-slate-900 placeholder:text-slate-400 focus:outline-none" placeholder="Select date" type="text" value="Oct 15"/>
</div>
</div>
<div className="flex-1 relative p-4 hover:bg-slate-50 transition-colors rounded-b-2xl sm:rounded-r-2xl sm:rounded-bl-none cursor-text group">
<label className="block text-xs font-normal text-slate-500 mb-1 group-focus-within:text-blue-600 transition-colors uppercase tracking-wider">Return</label>
<div className="flex items-center gap-2.5">
<i className="w-5 h-5 text-slate-400 group-focus-within:text-blue-600 transition-colors" data-lucide="calendar" strokeWidth="1.5"></i>
<input className="w-full bg-transparent text-xl font-medium tracking-tight text-slate-900 placeholder:text-slate-400 focus:outline-none" placeholder="Add return" type="text"/>
</div>
</div>
</div>

<div className="lg:col-span-3 mt-2 lg:mt-0 h-full">
<button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-2xl py-4 sm:py-0 sm:h-full transition-all flex items-center justify-center gap-2 shadow-sm shadow-blue-600/20 active:scale-[0.98]" onclick="navigate('page-manage')">
<i className="w-5 h-5" data-lucide="search" strokeWidth="1.5"></i>
<span className="text-xl tracking-tight">Search flights</span>
</button>
</div>
</div>
<div className="mt-8 flex flex-wrap items-center justify-between gap-4 pt-2">
<label className="custom-checkbox flex items-center gap-3 cursor-pointer group">
<div className="relative">
<input className="sr-only" type="checkbox"/>
<div className="w-5 h-5 rounded border border-slate-300 flex items-center justify-center group-hover:border-blue-500 transition-colors bg-white">
<svg className="w-3.5 h-3.5 text-white hidden pointer-events-none" fill="none" viewbox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
<path d="M11.6666 3.5L5.24992 9.91667L2.33325 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
<span className="text-base font-normal text-slate-600 group-hover:text-slate-900 transition-colors">Use TrueBlue points</span>
</label>
</div>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
<div className="flex items-center justify-between mb-10">
<h2 className="text-3xl font-medium tracking-tight text-slate-900">Explore destinations</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<button className="group block rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all text-left" onclick="document.getElementById('input-to').value = 'San Juan (SJU)'; window.scrollTo({top: 0, behavior: 'smooth'});">
<div className="aspect-[4/3] bg-gradient-to-tr from-cyan-100 to-blue-50 relative p-8 flex flex-col justify-end">
<div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
<div className="relative z-10">
<span className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-slate-800 backdrop-blur-sm shadow-sm mb-3">Trending</span>
<h3 className="text-3xl font-medium text-slate-900 tracking-tight">San Juan</h3>
</div>
</div>
<div className="p-6 flex items-end justify-between">
<div>
<p className="text-base text-slate-500 font-normal mb-1">Roundtrip from JFK</p>
<div className="text-sm text-slate-400">Oct 15 - Oct 22</div>
</div>
<div className="text-right">
<span className="text-xs font-normal text-slate-500 uppercase tracking-wider">From</span>
<div className="text-2xl font-medium text-slate-900 tracking-tight">$189</div>
</div>
</div>
</button>
<button className="group block rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all text-left" onclick="document.getElementById('input-to').value = 'Cancun (CUN)'; window.scrollTo({top: 0, behavior: 'smooth'});">
<div className="aspect-[4/3] bg-gradient-to-br from-emerald-100 to-teal-50 relative p-8 flex flex-col justify-end">
<div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
<div className="relative z-10">
<h3 className="text-3xl font-medium text-slate-900 tracking-tight">Cancun</h3>
</div>
</div>
<div className="p-6 flex items-end justify-between">
<div>
<p className="text-base text-slate-500 font-normal mb-1">Roundtrip from JFK</p>
<div className="text-sm text-slate-400">Nov 02 - Nov 09</div>
</div>
<div className="text-right">
<span className="text-xs font-normal text-slate-500 uppercase tracking-wider">From</span>
<div className="text-2xl font-medium text-slate-900 tracking-tight">$245</div>
</div>
</div>
</button>
<button className="group block rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all text-left" onclick="document.getElementById('input-to').value = 'Los Angeles (LAX)'; window.scrollTo({top: 0, behavior: 'smooth'});">
<div className="aspect-[4/3] bg-gradient-to-bl from-orange-100 to-amber-50 relative p-8 flex flex-col justify-end">
<div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
<div className="relative z-10">
<h3 className="text-3xl font-medium text-slate-900 tracking-tight">Los Angeles</h3>
</div>
</div>
<div className="p-6 flex items-end justify-between">
<div>
<p className="text-base text-slate-500 font-normal mb-1">Roundtrip from JFK</p>
<div className="text-sm text-slate-400">Dec 10 - Dec 17</div>
</div>
<div className="text-right">
<span className="text-xs font-normal text-slate-500 uppercase tracking-wider">From</span>
<div className="text-2xl font-medium text-slate-900 tracking-tight">$198</div>
</div>
</div>
</button>
</div>
</div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mb-16">
<div className="bg-blue-900 rounded-[2rem] overflow-hidden relative border border-blue-800 shadow-lg flex flex-col md:flex-row items-center">
<div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-blue-800 to-transparent opacity-50 blur-2xl"></div>
<div className="p-10 md:p-14 relative z-10 flex-1">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-800/50 border border-blue-700/50 text-blue-200 text-xs font-medium uppercase tracking-wider mb-8">
<i className="w-3.5 h-3.5" data-lucide="star" strokeWidth="1.5"></i>
                            TrueBlue Rewards
                        </div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-5">Earn points. Get perks.</h2>
<p className="text-lg text-blue-200 font-normal mb-10 max-w-lg">
                            Join our loyalty program to start earning points on flights, stays, cars, and everyday purchases.
                        </p>
<button className="bg-white text-blue-900 hover:bg-slate-50 px-8 py-4 rounded-full text-base font-medium transition-colors shadow-sm inline-flex items-center gap-2" onclick="navigate('page-trueblue')">
                            Join for free <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>
</div>



<div className="page-view hidden page-enter" id="page-manage">
<div className="bg-blue-950 pt-20 pb-40 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
<div className="absolute inset-0 opacity-20 pointer-events-none">
<div className="absolute top-0 right-1/4 w-full h-full bg-gradient-to-bl from-blue-400 to-transparent rounded-full blur-3xl transform -translate-y-1/2"></div>
</div>
<div className="relative max-w-3xl mx-auto text-center z-10">
<h1 className="text-5xl md:text-6xl font-medium tracking-tight text-white mb-6">Manage your trip</h1>
<p className="text-xl text-blue-100 font-normal">Select seats, add bags, change flights, and check in.</p>
</div>
</div>
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-20 mb-32">

<div className="bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100 p-8 md:p-12 mb-8 transition-all duration-300" id="search-form-container">
<div className="flex items-center gap-4 mb-10 border-b border-slate-100 pb-8">
<div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
<i className="w-6 h-6" data-lucide="ticket" strokeWidth="1.5"></i>
</div>
<h2 className="text-2xl font-medium tracking-tight text-slate-900">Find your flight</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
<div>
<label className="block text-sm font-medium text-slate-700 mb-3">Confirmation code</label>
<input className="w-full px-5 py-4 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all uppercase placeholder:normal-case font-medium text-lg" id="conf-input" placeholder="6 letters" type="text" value="LG-DP-7762-JB"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-3">Last name</label>
<input className="w-full px-5 py-4 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all font-medium text-lg" id="name-input" placeholder="Passenger last name" type="text" value="Luiser"/>
</div>
</div>
<button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium text-lg rounded-xl py-4 transition-all shadow-sm shadow-blue-600/20 active:scale-[0.98] flex items-center justify-center gap-2" id="find-trip-btn" onclick="findTrip()">
                        Search Itinerary
                    </button>
<div className="mt-8 text-center" id="signed-in-hint">
<p className="text-base font-normal text-slate-500">
                            Signed in? <button className="text-blue-600 hover:underline" onclick="navigate('page-trueblue')">View upcoming trips</button>
</p>
</div>
</div>

<div className="hidden opacity-0 translate-y-8 transition-all duration-700 ease-out max-w-[420px] mx-auto rounded-[24px] shadow-2xl overflow-hidden border border-slate-200 bg-white" id="itinerary-result">

<div className="bg-blue-800 pt-10 pb-12 px-8 relative">
<div className="absolute inset-0 bg-blue-900/60 mix-blend-multiply"></div>
<div className="relative z-10">
<h2 className="text-3xl font-medium tracking-tight text-white mb-8">JetBlue Private Charter</h2>
<div className="flex justify-between items-start">
<div>
<p className="text-xs font-medium text-blue-200 mb-1 tracking-wide">Confirmation:</p>
<p className="text-2xl font-medium tracking-tight text-white">Joan Luiser</p>
</div>
<div className="text-right">
<p className="text-lg font-medium tracking-tight text-white mb-1">LG-DP-7762-JB</p>
<p className="text-xs font-medium text-white tracking-wide">VIP | Diamond Platinum</p>
</div>
</div>
</div>

<div className="absolute bottom-0 right-0 bg-gradient-to-r from-yellow-600 via-yellow-500 to-amber-300 text-amber-950 text-xs font-semibold px-5 py-2 rounded-tl-xl uppercase tracking-widest shadow-lg z-20">
                            DIAMOND PLHM
                        </div>
</div>

<div className="bg-gradient-to-b from-white to-blue-50/40 px-8 pt-10 pb-8 relative">

<div className="mb-8">
<p className="text-xs font-medium text-slate-500 mb-2 uppercase tracking-widest">Outbound</p>
<div className="flex items-center gap-6 mb-6">
<h3 className="text-6xl font-semibold tracking-tighter text-slate-900">MCO</h3>
<i className="w-8 h-8 text-slate-800 shrink-0" data-lucide="arrow-right" strokeWidth="1.5"></i>
<h3 className="text-6xl font-semibold tracking-tighter text-slate-900">VNY</h3>
</div>
<div className="grid grid-cols-3 gap-4 mb-6">
<div>
<p className="text-xs font-medium text-slate-500 mb-1.5 uppercase tracking-widest">Date</p>
<p className="text-base font-medium text-slate-900 leading-none">APR 5, 2026</p>
</div>
<div className="text-center">
<p className="text-xs font-medium text-slate-500 mb-1.5 uppercase tracking-widest">Boarding</p>
<p className="text-xl font-medium tracking-tight text-slate-900 leading-none">7:15 AM</p>
</div>
<div className="text-right">
<p className="text-xs font-medium text-slate-500 mb-1.5 uppercase tracking-widest">Departure</p>
<p className="text-xl font-medium tracking-tight text-slate-900 leading-none">8:00 AM</p>
</div>
</div>
<div className="flex justify-between items-end border-b border-slate-200 pb-8">
<div>
<p className="text-xs font-medium text-slate-500 mb-1.5 uppercase tracking-widest">Gate</p>
<p className="text-lg font-medium text-slate-900 leading-none">Private Suite 1</p>
</div>
<div className="text-center">
<p className="text-xs font-medium text-slate-500 mb-1.5 uppercase tracking-widest">Seat</p>
<p className="text-3xl font-semibold tracking-tight text-slate-900 leading-none">1A</p>
</div>
<div className="text-right pb-1">
<p className="text-lg font-medium text-slate-900 leading-none">Private Cabin</p>
</div>
</div>
</div>

<div className="flex flex-col items-center justify-center py-6 mb-8 relative">
<div className="absolute inset-0 bg-wave-pattern opacity-40"></div>
<div className="relative z-10 bg-white p-3 border border-slate-200 rounded-xl mb-6 shadow-sm">
<i className="w-36 h-36 text-slate-900" data-lucide="qr-code" strokeWidth="1.2"></i>
</div>
<div className="relative z-10 bg-blue-950 text-white text-xs font-medium tracking-widest uppercase px-8 py-3.5 rounded-full shadow-md w-full text-center hover:bg-blue-900 transition-colors cursor-pointer">
                                Scan for VIP Terminal Entry
                            </div>
</div>

<div className="mb-8 border-t border-slate-200 pt-8">
<p className="text-xs font-medium text-slate-500 mb-2 uppercase tracking-widest">Return</p>
<div className="flex items-center gap-5 mb-4">
<h3 className="text-4xl font-semibold tracking-tighter text-slate-900">VNY</h3>
<i className="w-6 h-6 text-slate-800 shrink-0" data-lucide="arrow-right" strokeWidth="1.5"></i>
<h3 className="text-4xl font-semibold tracking-tighter text-slate-900">MCO</h3>
</div>
<div className="flex justify-between items-center text-lg font-medium text-slate-900">
<span>APR 16, 2026</span>
<span>2:00 PM</span>
<span>Private Suite 1A</span>
</div>
</div>

<div className="grid grid-cols-4 gap-3 pt-8 border-t border-slate-200 text-center mb-8">
<div className="flex flex-col items-center gap-2">
<i className="text-slate-800 w-7 h-7" data-lucide="wifi" strokeWidth="1.5"></i>
<span className="text-[11px] font-medium text-slate-800 leading-tight">Fly-Fi®<br/>Wi-Fi</span>
</div>
<div className="flex flex-col items-center gap-2">
<i className="text-slate-800 w-7 h-7" data-lucide="coffee" strokeWidth="1.5"></i>
<span className="text-[11px] font-medium text-slate-800 leading-tight">Premium<br/>Catering</span>
</div>
<div className="flex flex-col items-center gap-2">
<i className="text-slate-800 w-7 h-7" data-lucide="car" strokeWidth="1.5"></i>
<span className="text-[11px] font-medium text-slate-800 leading-tight">Private SUV<br/>Transfer</span>
</div>
<div className="flex flex-col items-center gap-2">
<i className="text-slate-800 w-7 h-7" data-lucide="building" strokeWidth="1.5"></i>
<span className="text-[11px] font-medium text-slate-800 leading-tight">VIP Terminal<br/>Access</span>
</div>
</div>

<div className="text-center pt-2">
<p className="text-xs font-normal text-slate-600 mb-1.5">Present this digital boarding pass at private terminal entrance</p>
<p className="text-base font-medium text-blue-900 tracking-tight">org.lionsgate@gmail.com</p>
</div>
</div>
</div>
</div>
</div>



<div className="page-view hidden page-enter" id="page-experience">
<div className="bg-blue-900 py-32 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-blue-950 to-transparent opacity-80"></div>
<div className="relative z-10 max-w-4xl mx-auto">
<span className="text-blue-300 font-medium tracking-widest text-xs uppercase mb-6 block">The JetBlue Experience</span>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white mb-8">Welcome to a better flight.</h1>
<p className="text-xl text-blue-100 font-normal max-w-2xl mx-auto">We're bringing humanity back to air travel, one perk at a time.</p>
</div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
<div className="grid grid-cols-1 md:grid-cols-3 gap-16">
<div className="text-center">
<div className="w-16 h-16 mx-auto bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
<i className="w-8 h-8" data-lucide="armchair" strokeWidth="1.5"></i>
</div>
<h3 className="text-3xl font-medium tracking-tight text-slate-900 mb-4">The most legroom in coach</h3>
<p className="text-base text-slate-600 font-normal leading-relaxed">Stretch out and relax. We offer the most legroom in economy class of any U.S. airline, based on average fleet-wide seat pitch.</p>
</div>
<div className="text-center">
<div className="w-16 h-16 mx-auto bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
<i className="w-8 h-8" data-lucide="wifi" strokeWidth="1.5"></i>
</div>
<h3 className="text-3xl font-medium tracking-tight text-slate-900 mb-4">Free, fast Fly-Fi®</h3>
<p className="text-base text-slate-600 font-normal leading-relaxed">Stay connected from gate to gate. Stream, surf, and message with complimentary high-speed Wi-Fi at every seat.</p>
</div>
<div className="text-center">
<div className="w-16 h-16 mx-auto bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
<i className="w-8 h-8" data-lucide="coffee" strokeWidth="1.5"></i>
</div>
<h3 className="text-3xl font-medium tracking-tight text-slate-900 mb-4">Complimentary snacks</h3>
<p className="text-base text-slate-600 font-normal leading-relaxed">Enjoy unlimited brand-name snacks and drinks. Because a good flight shouldn't mean an empty stomach.</p>
</div>
</div>
</div>
</div>



<div className="page-view hidden page-enter" id="page-trueblue">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
<div className="flex flex-col lg:flex-row gap-12 items-start">

<div className="w-full lg:w-1/3 space-y-8">
<div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm p-10">
<div className="flex items-center gap-5 mb-8">
<div className="w-16 h-16 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400">
<i className="w-8 h-8" data-lucide="user" strokeWidth="1.5"></i>
</div>
<div>
<h2 className="text-2xl font-medium tracking-tight text-slate-900">Welcome back</h2>
<p className="text-base font-normal text-slate-500">TrueBlue Member</p>
</div>
</div>
<div className="bg-blue-50/80 rounded-2xl p-8 mb-8">
<span className="text-sm font-medium text-blue-800 block mb-2">Available Points</span>
<div className="text-4xl font-semibold tracking-tight text-blue-900 mb-5">42,500</div>
<div className="w-full bg-blue-200/50 rounded-full h-2 mb-3">
<div className="bg-blue-600 h-2 rounded-full" style={{width: '45%'}}></div>
</div>
<p className="text-xs font-medium text-blue-700">7,500 points to next tier</p>
</div>
<button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-base font-medium rounded-xl py-4 transition-all" onclick="navigate('page-book')">
                                Book with points
                            </button>
</div>
</div>

<div className="w-full lg:w-2/3">
<h2 className="text-4xl font-medium tracking-tight text-slate-900 mb-10">Recent Activity</h2>
<div className="space-y-4">

<div className="bg-white rounded-2xl border border-slate-200 p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center gap-6">
<div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center shrink-0">
<i className="w-6 h-6" data-lucide="plane" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-lg font-medium text-slate-900 tracking-tight">JFK to SJU</h4>
<p className="text-base font-normal text-slate-500 mt-1">Oct 15, 2023 • Flight 1045</p>
</div>
</div>
<div className="text-right">
<span className="block text-lg font-medium text-emerald-600">+1,250 pts</span>
<span className="text-xs font-medium text-slate-400 uppercase tracking-widest mt-1 block">Earned</span>
</div>
</div>

<div className="bg-white rounded-2xl border border-slate-200 p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center gap-6">
<div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
<i className="w-6 h-6" data-lucide="credit-card" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-lg font-medium text-slate-900 tracking-tight">JetBlue Card Purchase</h4>
<p className="text-base font-normal text-slate-500 mt-1">Oct 12, 2023</p>
</div>
</div>
<div className="text-right">
<span className="block text-lg font-medium text-emerald-600">+500 pts</span>
<span className="text-xs font-medium text-slate-400 uppercase tracking-widest mt-1 block">Earned</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<footer className="bg-slate-950 text-slate-400 py-16 lg:py-24 mt-auto border-t border-slate-900">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
<div className="col-span-2 lg:col-span-2 pr-12">
<span className="text-3xl font-medium tracking-tight text-white lowercase block mb-6">jetBlue</span>
<p className="text-base font-normal text-slate-500 max-w-sm mb-8 leading-relaxed">
                        Bringing humanity back to air travel with free Wi-Fi, the most legroom in coach, and complimentary snacks.
                    </p>
<div className="flex gap-4">
<button className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center hover:bg-slate-800 hover:text-white transition-colors border border-slate-800">
<i className="w-5 h-5" data-lucide="camera" strokeWidth="1.5"></i>
</button>
<button className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center hover:bg-slate-800 hover:text-white transition-colors border border-slate-800">
<i className="w-5 h-5" data-lucide="mail" strokeWidth="1.5"></i>
</button>
</div>
</div>
<div>
<h4 className="text-white font-medium text-base mb-6">Book</h4>
<ul className="space-y-4 text-base font-normal">
<li><a className="hover:text-white transition-colors" href="#" onclick="navigate('page-book'); return false;">Flights</a></li>
<li><a className="hover:text-white transition-colors" href="#">Packages</a></li>
<li><a className="hover:text-white transition-colors" href="#">Cars &amp; Hotels</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-base mb-6">Manage</h4>
<ul className="space-y-4 text-base font-normal">
<li><a className="hover:text-white transition-colors" href="#" onclick="navigate('page-manage'); return false;">My trips</a></li>
<li><a className="hover:text-white transition-colors" href="#" onclick="navigate('page-manage'); return false;">Check in</a></li>
<li><a className="hover:text-white transition-colors" href="#" onclick="navigate('page-trueblue'); return false;">TrueBlue Account</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-base mb-6">Discover</h4>
<ul className="space-y-4 text-base font-normal">
<li><a className="hover:text-white transition-colors" href="#" onclick="navigate('page-experience'); return false;">The Experience</a></li>
<li><a className="hover:text-white transition-colors" href="#">Bag info</a></li>
<li><a className="hover:text-white transition-colors" href="#">Help center</a></li>
</ul>
</div>
</div>
<div className="pt-10 border-t border-slate-800/80 flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-normal text-slate-500">
<p>© 2024 JetBlue Airways Corporation</p>
<div className="flex flex-wrap gap-6 md:gap-8 justify-center">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Use</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
