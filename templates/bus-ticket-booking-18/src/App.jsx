import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        function toggleSeats(id) {
            const el = document.getElementById('seats-' + id);
            if (el.classList.contains('hidden')) {
                el.classList.remove('hidden');
            } else {
                el.classList.add('hidden');
            }
        }

        function updateTotal() {
            const checkboxes = document.querySelectorAll('.seat-checkbox:checked');
            const count = checkboxes.length;
            const pricePerSeat = 350;
            const total = count * pricePerSeat;
            
            document.getElementById('seat-count').innerText = count;
            document.getElementById('total-price').innerText = 'K' + total;
        }

        function searchRoutes() {
            const btn = document.querySelector('button[onclick="searchRoutes()"]');
            const originalContent = btn.innerHTML;
            btn.innerHTML = '<iconify-icon icon="line-md:loading-loop" width="20"></iconify-icon> Searching...';
            btn.classList.add('opacity-75', 'cursor-not-allowed');
            
            setTimeout(() => {
                btn.innerHTML = originalContent;
                btn.classList.remove('opacity-75', 'cursor-not-allowed');
                // Simulate scroll to results
                document.getElementById('results-container').scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 800);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<nav className="sticky top-0 z-50 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="solar:bus-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tighter text-slate-900">ZAMTRANSIT</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="text-slate-900" href="#">Book</a>
<a className="text-slate-500 hover:text-slate-900 transition-colors" href="#">Schedules</a>
<a className="text-slate-500 hover:text-slate-900 transition-colors" href="#">Operators</a>
<a className="text-slate-500 hover:text-slate-900 transition-colors" href="#">Support</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900">
<iconify-icon icon="solar:user-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Sign In
                </button>
<button className="bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium px-4 py-2 rounded-lg transition-all shadow-sm shadow-slate-200">
                    My Tickets
                </button>
</div>
</div>
</nav>

<main className="flex-grow pt-12 pb-20 px-6">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-12 space-y-4">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-medium">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                    New routes added: Lusaka to Chipata
                </div>
<h1 className="text-4xl md:text-6xl font-semibold text-slate-900 tracking-tight">
                    Explore Zambia,<br/> <span className="text-slate-400">one journey at a time.</span>
</h1>
<p className="text-lg text-slate-500 max-w-xl mx-auto font-light">
                    Premium bus booking across the country. Reliable operators, transparent pricing, and instant mobile tickets.
                </p>
</div>

<div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200 overflow-hidden relative">

<div className="flex border-b border-slate-100">
<button className="flex-1 py-4 text-sm font-medium text-slate-900 border-b-2 border-slate-900 bg-slate-50/50 flex items-center justify-center gap-2">
<iconify-icon icon="solar:map-arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
                        One Way
                    </button>
<button className="flex-1 py-4 text-sm font-medium text-slate-400 hover:text-slate-600 flex items-center justify-center gap-2">
<iconify-icon icon="solar:round-transfer-horizontal-linear" strokeWidth="1.5" width="18"></iconify-icon>
                        Round Trip
                    </button>
</div>

<div className="p-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-end">

<div className="md:col-span-3 space-y-1.5 group">
<label className="text-xs font-medium text-slate-500 uppercase tracking-wider">Origin</label>
<div className="relative flex items-center">
<iconify-icon className="absolute left-3 text-slate-400 group-focus-within:text-emerald-600 transition-colors" icon="solar:map-point-linear" strokeWidth="1.5" width="20"></iconify-icon>
<select className="w-full bg-slate-50 hover:bg-slate-100 focus:bg-white border-0 ring-1 ring-slate-200 focus:ring-2 focus:ring-emerald-500/20 rounded-lg py-3 pl-10 pr-8 text-sm font-medium text-slate-900 appearance-none outline-none transition-all cursor-pointer">
<option>Lusaka (Intercity)</option>
<option>Ndola</option>
<option>Kitwe</option>
</select>
<iconify-icon className="absolute right-3 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>

<div className="md:col-span-1 flex justify-center pb-3">
<button className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center transition-colors">
<iconify-icon icon="solar:transfer-horizontal-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>

<div className="md:col-span-3 space-y-1.5 group">
<label className="text-xs font-medium text-slate-500 uppercase tracking-wider">Destination</label>
<div className="relative flex items-center">
<iconify-icon className="absolute left-3 text-slate-400 group-focus-within:text-emerald-600 transition-colors" icon="solar:flag-linear" strokeWidth="1.5" width="20"></iconify-icon>
<select className="w-full bg-slate-50 hover:bg-slate-100 focus:bg-white border-0 ring-1 ring-slate-200 focus:ring-2 focus:ring-emerald-500/20 rounded-lg py-3 pl-10 pr-8 text-sm font-medium text-slate-900 appearance-none outline-none transition-all cursor-pointer">
<option>Livingstone</option>
<option>Solwezi</option>
<option>Chipata</option>
</select>
<iconify-icon className="absolute right-3 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>

<div className="md:col-span-3 space-y-1.5 group">
<label className="text-xs font-medium text-slate-500 uppercase tracking-wider">Departure</label>
<div className="relative flex items-center">
<iconify-icon className="absolute left-3 text-slate-400 group-focus-within:text-emerald-600 transition-colors" icon="solar:calendar-linear" strokeWidth="1.5" width="20"></iconify-icon>
<input className="w-full bg-slate-50 hover:bg-slate-100 focus:bg-white border-0 ring-1 ring-slate-200 focus:ring-2 focus:ring-emerald-500/20 rounded-lg py-3 pl-10 pr-4 text-sm font-medium text-slate-900 outline-none transition-all" type="date" value="2023-11-15"/>
</div>
</div>

<div className="md:col-span-2">
<button className="w-full bg-slate-900 hover:bg-emerald-600 text-white font-medium py-3 px-4 rounded-lg shadow-lg shadow-slate-900/10 hover:shadow-emerald-600/20 transition-all flex items-center justify-center gap-2" onclick="searchRoutes()">
                            Search
                        </button>
</div>
</div>
</div>

<div className="mt-16 grid grid-cols-1 lg:grid-cols-4 gap-8">

<div className="lg:col-span-1 space-y-8">
<div>
<h3 className="text-sm font-semibold text-slate-900 mb-4 tracking-tight">Operators</h3>
<div className="space-y-3">
<label className="flex items-center gap-3 cursor-pointer custom-checkbox group">
<input checked="" className="hidden" type="checkbox"/>
<div className="w-5 h-5 rounded border border-slate-300 bg-white flex items-center justify-center transition-all group-hover:border-slate-400">
<iconify-icon className="text-white hidden" icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<span className="text-sm text-slate-600">Mazhandu Family</span>
</label>
<label className="flex items-center gap-3 cursor-pointer custom-checkbox group">
<input checked="" className="hidden" type="checkbox"/>
<div className="w-5 h-5 rounded border border-slate-300 bg-white flex items-center justify-center transition-all group-hover:border-slate-400">
<iconify-icon className="text-white hidden" icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<span className="text-sm text-slate-600">Power Tools</span>
</label>
<label className="flex items-center gap-3 cursor-pointer custom-checkbox group">
<input className="hidden" type="checkbox"/>
<div className="w-5 h-5 rounded border border-slate-300 bg-white flex items-center justify-center transition-all group-hover:border-slate-400">
<iconify-icon className="text-white hidden" icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<span className="text-sm text-slate-600">Shalom Bus</span>
</label>
</div>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900 mb-4 tracking-tight">Departure Time</h3>
<div className="space-y-3">
<label className="flex items-center gap-3 cursor-pointer custom-checkbox group">
<input className="hidden" type="checkbox"/>
<div className="w-5 h-5 rounded border border-slate-300 bg-white flex items-center justify-center transition-all group-hover:border-slate-400">
<iconify-icon className="text-white hidden" icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<span className="text-sm text-slate-600">Morning (06:00 - 12:00)</span>
</label>
<label className="flex items-center gap-3 cursor-pointer custom-checkbox group">
<input className="hidden" type="checkbox"/>
<div className="w-5 h-5 rounded border border-slate-300 bg-white flex items-center justify-center transition-all group-hover:border-slate-400">
<iconify-icon className="text-white hidden" icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<span className="text-sm text-slate-600">Afternoon (12:00 - 18:00)</span>
</label>
</div>
</div>

<div>
<div className="flex justify-between items-center mb-4">
<h3 className="text-sm font-semibold text-slate-900 tracking-tight">Max Price</h3>
<span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded">K450</span>
</div>
<div className="relative h-1.5 bg-slate-200 rounded-full w-full">
<div className="absolute top-0 left-0 h-full bg-slate-900 rounded-full w-2/3"></div>
<div className="absolute top-1/2 left-2/3 w-4 h-4 bg-white border-2 border-slate-900 rounded-full transform -translate-y-1/2 shadow cursor-pointer hover:scale-110 transition-transform"></div>
</div>
<div className="flex justify-between mt-2 text-xs text-slate-400">
<span>K100</span>
<span>K1000</span>
</div>
</div>
</div>

<div className="lg:col-span-3 space-y-4" id="results-container">

<div className="group bg-white rounded-xl border border-slate-200 p-5 hover:shadow-lg hover:shadow-slate-200/40 hover:border-emerald-500/30 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-emerald-500 group-hover:bg-emerald-400 transition-colors"></div>
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">

<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-700">
<iconify-icon icon="solar:bus-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-base font-semibold text-slate-900 tracking-tight">Mazhandu Family Bus</h4>
<div className="flex items-center gap-2 mt-1">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 text-slate-600 uppercase tracking-wide">Luxury</span>
<span className="text-xs text-slate-400 flex items-center gap-1">
<iconify-icon icon="solar:wi-fi-router-linear" width="12"></iconify-icon> WiFi
                                        </span>
<span className="text-xs text-slate-400 flex items-center gap-1">
<iconify-icon icon="solar:snowflake-linear" width="12"></iconify-icon> AC
                                        </span>
</div>
</div>
</div>

<div className="flex items-center gap-6 text-center">
<div>
<div className="text-lg font-semibold text-slate-900">06:00</div>
<div className="text-xs text-slate-400 font-medium">Lusaka</div>
</div>
<div className="flex flex-col items-center gap-1">
<span className="text-[10px] text-slate-400">7h 30m</span>
<div className="w-16 h-px bg-slate-200 relative">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-slate-300"></div>
<div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-slate-300"></div>
</div>
<span className="text-[10px] text-emerald-600 font-medium">Direct</span>
</div>
<div>
<div className="text-lg font-semibold text-slate-900">13:30</div>
<div className="text-xs text-slate-400 font-medium">Livingstone</div>
</div>
</div>

<div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end border-t md:border-t-0 border-slate-100 pt-4 md:pt-0 mt-2 md:mt-0">
<div className="text-right">
<div className="text-2xl font-bold text-slate-900 tracking-tight">K350</div>
<div className="text-xs text-slate-500">per person</div>
</div>
<button className="bg-slate-900 hover:bg-emerald-600 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors shadow-sm" onclick="toggleSeats('card-1')">
                                    Select Seats
                                </button>
</div>
</div>

<div className="hidden mt-6 pt-6 border-t border-slate-100 animate-fade-in" id="seats-card-1">
<div className="flex flex-col lg:flex-row gap-8">

<div className="flex-1">
<div className="flex justify-between items-center mb-4">
<h5 className="text-sm font-semibold text-slate-900">Select your seats</h5>
<div className="flex gap-4 text-xs text-slate-500">
<div className="flex items-center gap-1"><div className="w-3 h-3 rounded bg-white border border-slate-300"></div> Available</div>
<div className="flex items-center gap-1"><div className="w-3 h-3 rounded bg-emerald-500"></div> Selected</div>
<div className="flex items-center gap-1"><div className="w-3 h-3 rounded bg-slate-100 text-slate-300"></div> Booked</div>
</div>
</div>
<div className="bg-slate-50 p-6 rounded-xl border border-slate-200 w-full overflow-x-auto">
<div className="min-w-[300px] flex flex-col gap-3 items-start">

<div className="w-full flex justify-end mb-4 px-2">
<iconify-icon className="text-slate-300" icon="solar:steering-wheel-linear" width="24"></iconify-icon>
</div>

<div className="flex gap-8">
<div className="flex gap-2">
<label className="cursor-pointer relative seat-checkbox-wrapper">
<input className="hidden seat-checkbox" onchange="updateTotal()" type="checkbox"/>
<div className="w-8 h-8 rounded border border-slate-300 bg-white hover:border-emerald-400 flex items-center justify-center text-xs font-medium transition-all">1A</div>
</label>
<label className="cursor-pointer relative seat-checkbox-wrapper">
<input className="hidden seat-checkbox" onchange="updateTotal()" type="checkbox"/>
<div className="w-8 h-8 rounded border border-slate-300 bg-white hover:border-emerald-400 flex items-center justify-center text-xs font-medium transition-all">1B</div>
</label>
</div>
<div className="flex gap-2">
<label className="cursor-pointer relative seat-checkbox-wrapper">
<input className="hidden seat-checkbox" disabled="" type="checkbox"/>
<div className="w-8 h-8 rounded border border-slate-100 bg-slate-100 flex items-center justify-center text-xs font-medium transition-all">1C</div>
</label>
<label className="cursor-pointer relative seat-checkbox-wrapper">
<input className="hidden seat-checkbox" onchange="updateTotal()" type="checkbox"/>
<div className="w-8 h-8 rounded border border-slate-300 bg-white hover:border-emerald-400 flex items-center justify-center text-xs font-medium transition-all">1D</div>
</label>
</div>
</div>

<div className="flex gap-8">
<div className="flex gap-2">
<label className="cursor-pointer relative seat-checkbox-wrapper">
<input className="hidden seat-checkbox" onchange="updateTotal()" type="checkbox"/>
<div className="w-8 h-8 rounded border border-slate-300 bg-white hover:border-emerald-400 flex items-center justify-center text-xs font-medium transition-all">2A</div>
</label>
<label className="cursor-pointer relative seat-checkbox-wrapper">
<input className="hidden seat-checkbox" onchange="updateTotal()" type="checkbox"/>
<div className="w-8 h-8 rounded border border-slate-300 bg-white hover:border-emerald-400 flex items-center justify-center text-xs font-medium transition-all">2B</div>
</label>
</div>
<div className="flex gap-2">
<label className="cursor-pointer relative seat-checkbox-wrapper">
<input className="hidden seat-checkbox" onchange="updateTotal()" type="checkbox"/>
<div className="w-8 h-8 rounded border border-slate-300 bg-white hover:border-emerald-400 flex items-center justify-center text-xs font-medium transition-all">2C</div>
</label>
<label className="cursor-pointer relative seat-checkbox-wrapper">
<input className="hidden seat-checkbox" onchange="updateTotal()" type="checkbox"/>
<div className="w-8 h-8 rounded border border-slate-300 bg-white hover:border-emerald-400 flex items-center justify-center text-xs font-medium transition-all">2D</div>
</label>
</div>
</div>
</div>
</div>
</div>

<div className="w-full lg:w-64">
<div className="bg-slate-50 p-5 rounded-xl border border-slate-200 h-full flex flex-col justify-between">
<div>
<h6 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">Booking Summary</h6>
<div className="flex justify-between items-center mb-2">
<span className="text-sm text-slate-600">Seats</span>
<span className="text-sm font-medium text-slate-900" id="seat-count">0</span>
</div>
<div className="flex justify-between items-center mb-2">
<span className="text-sm text-slate-600">Price</span>
<span className="text-sm font-medium text-slate-900">K350</span>
</div>
<div className="h-px bg-slate-200 my-3"></div>
<div className="flex justify-between items-center">
<span className="text-base font-semibold text-slate-900">Total</span>
<span className="text-xl font-bold text-emerald-600 tracking-tight" id="total-price">K0</span>
</div>
</div>
<button className="w-full mt-6 bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2.5 rounded-lg shadow-lg shadow-emerald-600/20 transition-all text-sm">
                                            Confirm Booking
                                        </button>
</div>
</div>
</div>
</div>
</div>

<div className="group bg-white rounded-xl border border-slate-200 p-5 hover:shadow-lg hover:shadow-slate-200/40 hover:border-emerald-500/30 transition-all duration-300 relative overflow-hidden">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-700">
<iconify-icon icon="solar:bus-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-base font-semibold text-slate-900 tracking-tight">Power Tools</h4>
<div className="flex items-center gap-2 mt-1">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 text-slate-600 uppercase tracking-wide">Standard</span>
</div>
</div>
</div>
<div className="flex items-center gap-6 text-center">
<div>
<div className="text-lg font-semibold text-slate-900">08:30</div>
<div className="text-xs text-slate-400 font-medium">Lusaka</div>
</div>
<div className="flex flex-col items-center gap-1">
<span className="text-[10px] text-slate-400">8h 00m</span>
<div className="w-16 h-px bg-slate-200 relative">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-slate-300"></div>
<div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-slate-300"></div>
</div>
<span className="text-[10px] text-slate-400 font-medium">1 Stop</span>
</div>
<div>
<div className="text-lg font-semibold text-slate-900">16:30</div>
<div className="text-xs text-slate-400 font-medium">Livingstone</div>
</div>
</div>
<div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end border-t md:border-t-0 border-slate-100 pt-4 md:pt-0 mt-2 md:mt-0">
<div className="text-right">
<div className="text-2xl font-bold text-slate-900 tracking-tight">K280</div>
<div className="text-xs text-slate-500">per person</div>
</div>
<button className="bg-slate-50 hover:bg-slate-100 text-slate-900 border border-slate-200 text-sm font-medium px-5 py-2.5 rounded-lg transition-colors">
                                    Select Seats
                                </button>
</div>
</div>
</div>

<div className="bg-slate-900 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4 text-white overflow-hidden relative">

<div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
<div className="absolute -bottom-10 -left-10 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl"></div>
<div className="relative z-10 flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
<iconify-icon icon="solar:ticket-sale-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-sm">Save 10% with MTN Money</h4>
<p className="text-xs text-slate-400">Use code ZAM10 at checkout.</p>
</div>
</div>
<button className="relative z-10 text-xs font-semibold bg-white text-slate-900 px-3 py-1.5 rounded hover:bg-emerald-50 transition-colors">
                            Copy Code
                        </button>
</div>
</div>
</div>
</div>
</main>

<footer className="bg-white border-t border-slate-200 py-12">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 bg-slate-900 rounded-md flex items-center justify-center text-white">
<iconify-icon icon="solar:bus-linear" width="14"></iconify-icon>
</div>
<span className="text-sm font-semibold tracking-tighter text-slate-900">ZAMTRANSIT</span>
</div>
<p className="text-xs text-slate-400 leading-relaxed max-w-xs">
                    Simplified travel across Zambia. Book bus tickets from the comfort of your home. Secure, fast, and reliable.
                </p>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-4">Company</h4>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="hover:text-emerald-600" href="#">About Us</a></li>
<li><a className="hover:text-emerald-600" href="#">Careers</a></li>
<li><a className="hover:text-emerald-600" href="#">Press</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-4">Support</h4>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="hover:text-emerald-600" href="#">Help Center</a></li>
<li><a className="hover:text-emerald-600" href="#">Terms of Service</a></li>
<li><a className="hover:text-emerald-600" href="#">Privacy Policy</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-4">Payment Partners</h4>
<div className="flex gap-3 text-slate-400">
<iconify-icon icon="solar:card-linear" width="24"></iconify-icon>
<iconify-icon icon="solar:wallet-money-linear" width="24"></iconify-icon>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-slate-100 flex justify-between items-center text-xs text-slate-400">
<p>© 2023 ZamTransit Ltd.</p>
<div className="flex gap-4">
<a href="#"><iconify-icon icon="solar:brand-instagram-linear" width="16"></iconify-icon></a>
<a href="#"><iconify-icon icon="solar:brand-twitter-linear" width="16"></iconify-icon></a>
</div>
</div>
</footer>


    </>
  );
}
