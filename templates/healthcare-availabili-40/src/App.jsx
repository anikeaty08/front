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



        function switchView(viewId) {
            // Hide all views
            document.querySelectorAll('.view-section').forEach(el => {
                el.classList.remove('active');
            });
            
            // Show selected view
            const selected = document.getElementById(viewId);
            selected.classList.add('active');
            
            // Reset animation
            selected.classList.remove('animate-enter');
            void selected.offsetWidth; // trigger reflow
            selected.classList.add('animate-enter');

            // Update Nav Styles
            const btnIds = ['btn-patient', 'btn-doctor', 'btn-admin'];
            btnIds.forEach(id => {
                const btn = document.getElementById(id);
                if (id === 'btn-' + viewId) {
                    btn.className = "text-xs font-medium px-4 py-2 rounded-full bg-zinc-900 text-white transition-all shadow-sm";
                } else {
                    btn.className = "text-xs font-medium px-4 py-2 rounded-full text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 transition-all";
                }
            });
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
      

<div className="fixed inset-0 bg-grid z-[-1] pointer-events-none"></div>
<div className="fixed top-0 left-0 w-full h-64 bg-gradient-to-b from-white to-transparent z-[-1]"></div>

<nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 glass-panel px-1.5 py-1.5 rounded-full shadow-sm flex items-center gap-1 scale-95 md:scale-100 transition-all">
<button className="text-xs font-medium px-4 py-2 rounded-full bg-zinc-900 text-white transition-all shadow-sm" id="btn-patient" onclick="switchView('patient')">Patient View</button>
<button className="text-xs font-medium px-4 py-2 rounded-full text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 transition-all" id="btn-doctor" onclick="switchView('doctor')">Doctor Panel</button>
<button className="text-xs font-medium px-4 py-2 rounded-full text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 transition-all" id="btn-admin" onclick="switchView('admin')">Reception Admin</button>
</nav>

<main className="w-full max-w-3xl mx-auto pt-28 pb-20 px-4 md:px-0">

<section className="view-section active animate-enter" id="patient">

<div className="mb-10 text-center">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-zinc-100 text-zinc-900 mb-4 border border-zinc-200">
<iconify-icon icon="solar:hospital-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h1 className="text-3xl font-semibold text-zinc-900 mb-2">City General Hospital</h1>
<p className="text-sm text-zinc-500 max-w-md mx-auto leading-relaxed">
                    Park Street, 4th Block, Bangalore • +91 80 4545 1212<br/>
<span className="text-xs text-zinc-400 mt-1 block">Live Status Updates</span>
</p>
</div>

<div className="space-y-4">

<div className="glass-panel p-5 rounded-2xl card-hover flex flex-col sm:flex-row sm:items-center justify-between gap-4 group cursor-default">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-400 border border-zinc-100 shrink-0">
<iconify-icon icon="solar:user-circle-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-base font-medium text-zinc-900 group-hover:text-zinc-700 transition-colors">Dr. Rajesh Verma</h3>
<p className="text-xs text-zinc-500 mb-1">Cardiologist • OPD Wing A</p>
<span className="text-[10px] text-zinc-400 flex items-center gap-1">
<iconify-icon icon="solar:clock-circle-linear" width="10"></iconify-icon>
                                Updated 5 mins ago
                            </span>
</div>
</div>
<div className="flex items-center gap-3 bg-emerald-50/50 border border-emerald-100/50 px-4 py-2 rounded-full self-start sm:self-center">
<span className="relative flex h-2.5 w-2.5">
<span className="status-dot-live absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
</span>
<span className="text-xs font-medium text-emerald-700 tracking-wide">Available Now</span>
</div>
</div>

<div className="glass-panel p-5 rounded-2xl card-hover flex flex-col sm:flex-row sm:items-center justify-between gap-4 group cursor-default">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-400 border border-zinc-100 shrink-0">
<iconify-icon icon="solar:user-circle-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-base font-medium text-zinc-900">Dr. Sneha Kapoor</h3>
<p className="text-xs text-zinc-500 mb-1">Pediatrician • OPD Wing B</p>
<span className="text-[10px] text-zinc-400 flex items-center gap-1">
<iconify-icon icon="solar:clock-circle-linear" width="10"></iconify-icon>
                                Updated 12 mins ago
                            </span>
</div>
</div>
<div className="flex items-center gap-3 bg-amber-50/50 border border-amber-100/50 px-4 py-2 rounded-full self-start sm:self-center">
<span className="relative flex h-2.5 w-2.5">
<span className="status-dot-busy absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
</span>
<span className="text-xs font-medium text-amber-700 tracking-wide">Busy / Emergency</span>
</div>
</div>

<div className="glass-panel p-5 rounded-2xl card-hover flex flex-col sm:flex-row sm:items-center justify-between gap-4 group cursor-default opacity-90">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-400 border border-zinc-100 shrink-0">
<iconify-icon icon="solar:user-circle-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-base font-medium text-zinc-900">Dr. Amit Singh</h3>
<p className="text-xs text-zinc-500 mb-1">Orthopedic • OPD Wing C</p>
<span className="text-[10px] text-zinc-400 flex items-center gap-1">
<iconify-icon icon="solar:clock-circle-linear" width="10"></iconify-icon>
                                Updated 1 hour ago
                            </span>
</div>
</div>
<div className="flex flex-col items-end gap-1">
<div className="flex items-center gap-2 bg-zinc-100 border border-zinc-200 px-4 py-2 rounded-full self-start sm:self-center">
<iconify-icon className="text-zinc-500" icon="solar:calendar-time-linear" width="14"></iconify-icon>
<span className="text-xs font-medium text-zinc-600 tracking-wide">Expected 4:30 PM</span>
</div>
<span className="text-[10px] text-zinc-400 pr-2">Running late from surgery</span>
</div>
</div>

<div className="glass-panel p-5 rounded-2xl card-hover flex flex-col sm:flex-row sm:items-center justify-between gap-4 group cursor-default opacity-60 grayscale hover:grayscale-0 transition-all">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-400 border border-zinc-100 shrink-0">
<iconify-icon icon="solar:user-circle-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-base font-medium text-zinc-900">Dr. Priya Das</h3>
<p className="text-xs text-zinc-500 mb-1">Dermatologist • Clinic 4</p>
<span className="text-[10px] text-zinc-400 flex items-center gap-1">
<iconify-icon icon="solar:clock-circle-linear" width="10"></iconify-icon>
                                Updated today
                            </span>
</div>
</div>
<div className="flex items-center gap-2 border border-rose-200 px-4 py-2 rounded-full self-start sm:self-center text-rose-600 bg-rose-50/50">
<iconify-icon icon="solar:close-circle-linear" width="14"></iconify-icon>
<span className="text-xs font-medium tracking-wide">Not Available Today</span>
</div>
</div>
</div>
<div className="mt-8 text-center">
<p className="text-[10px] text-zinc-400 uppercase tracking-widest">Powered by DocStatus</p>
</div>
</section>

<section className="view-section animate-enter" id="doctor">

<div className="flex items-center justify-between mb-8">
<div>
<h1 className="text-xl font-semibold text-zinc-900">Welcome, Dr. Rajesh</h1>
<p className="text-xs text-zinc-500">Manage your visibility in seconds.</p>
</div>
<button className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center hover:bg-zinc-200 transition-colors">
<iconify-icon className="text-zinc-600" icon="solar:logout-2-linear"></iconify-icon>
</button>
</div>

<div className="bg-zinc-900 text-white p-6 rounded-2xl shadow-xl shadow-zinc-200 mb-8 relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-10 transform translate-x-4 -translate-y-4">
<iconify-icon icon="solar:satellite-linear" width="120"></iconify-icon>
</div>
<p className="text-xs text-zinc-400 mb-1 font-medium tracking-wide uppercase">Current Public Status</p>
<div className="flex items-center gap-3">
<div className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.5)]"></div>
<h2 className="text-2xl font-semibold tracking-tight">Available</h2>
</div>
<p className="text-xs text-zinc-500 mt-4 border-t border-zinc-800 pt-3 flex items-center gap-2">
<iconify-icon icon="solar:refresh-circle-linear" width="14"></iconify-icon>
                    Last updated: 10:30 AM (Just now)
                </p>
</div>

<h3 className="text-sm font-medium text-zinc-900 mb-4">Update Status</h3>
<div className="grid grid-cols-2 gap-3 mb-6">

<button className="relative group p-4 rounded-xl border border-emerald-200 bg-emerald-50/30 hover:bg-emerald-50 hover:border-emerald-300 transition-all text-left">
<div className="absolute top-4 right-4 text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon icon="solar:check-circle-bold" width="20"></iconify-icon>
</div>
<div className="w-10 h-10 rounded-full bg-white border border-emerald-100 flex items-center justify-center text-emerald-600 mb-3 shadow-sm">
<iconify-icon icon="solar:user-check-linear" width="20"></iconify-icon>
</div>
<span className="block text-sm font-medium text-zinc-900">Available</span>
<span className="text-[10px] text-zinc-500">I am at the clinic</span>
</button>

<button className="relative group p-4 rounded-xl border border-zinc-200 bg-white hover:border-amber-300 hover:bg-amber-50/30 transition-all text-left">
<div className="w-10 h-10 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center text-amber-600 mb-3 group-hover:bg-white">
<iconify-icon icon="solar:danger-circle-linear" width="20"></iconify-icon>
</div>
<span className="block text-sm font-medium text-zinc-900">Busy / Emergency</span>
<span className="text-[10px] text-zinc-500">Engaged with patient</span>
</button>

<button className="relative group p-4 rounded-xl border border-zinc-200 bg-white hover:border-rose-300 hover:bg-rose-50/30 transition-all text-left">
<div className="w-10 h-10 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center text-rose-600 mb-3 group-hover:bg-white">
<iconify-icon icon="solar:close-circle-linear" width="20"></iconify-icon>
</div>
<span className="block text-sm font-medium text-zinc-900">Not Available</span>
<span className="text-[10px] text-zinc-500">Gone for the day</span>
</button>

<button className="relative group p-4 rounded-xl border border-zinc-200 bg-white hover:border-blue-300 hover:bg-blue-50/30 transition-all text-left flex flex-col justify-between">
<div>
<div className="w-10 h-10 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center text-blue-600 mb-3 group-hover:bg-white">
<iconify-icon icon="solar:clock-circle-linear" width="20"></iconify-icon>
</div>
<span className="block text-sm font-medium text-zinc-900">Running Late</span>
</div>
</button>
</div>

<div className="glass-panel p-4 rounded-xl border-l-4 border-blue-500 flex items-center gap-4 animate-enter delay-100">
<div className="flex-1">
<label className="text-xs font-medium text-zinc-700 block mb-1">Set Expected Arrival Time</label>
<div className="flex gap-2">
<input className="bg-white border border-zinc-200 rounded-lg px-3 py-1.5 text-sm outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 w-full font-mono text-zinc-600" type="time"/>
<button className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium px-4 py-1.5 rounded-lg transition-colors">Set</button>
</div>
</div>
</div>
</section>

<section className="view-section animate-enter" id="admin">
<div className="flex items-end justify-between mb-6">
<div>
<h1 className="text-xl font-semibold text-zinc-900">Reception Dashboard</h1>
<p className="text-xs text-zinc-500">Manage all doctor statuses.</p>
</div>
<button className="flex items-center gap-2 text-xs font-medium text-white bg-zinc-900 px-4 py-2 rounded-lg hover:bg-zinc-800 transition-colors shadow-sm">
<iconify-icon icon="solar:user-plus-linear" width="16"></iconify-icon>
                    Add Doctor
                </button>
</div>
<div className="bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-sm">

<div className="p-3 border-b border-zinc-100 bg-zinc-50/50">
<div className="relative">
<iconify-icon className="absolute left-3 top-2.5 text-zinc-400" icon="solar:magnifer-linear" width="16"></iconify-icon>
<input className="w-full bg-white border border-zinc-200 rounded-lg pl-9 pr-3 py-2 text-xs outline-none focus:border-zinc-400 transition-colors" placeholder="Search doctor..." type="text"/>
</div>
</div>

<div className="grid grid-cols-12 gap-4 p-3 bg-zinc-50 border-b border-zinc-200 text-[10px] font-semibold text-zinc-500 uppercase tracking-wider">
<div className="col-span-5">Doctor</div>
<div className="col-span-4">Status</div>
<div className="col-span-3 text-right">Action</div>
</div>

<div className="grid grid-cols-12 gap-4 p-4 border-b border-zinc-100 items-center hover:bg-zinc-50/50 transition-colors">
<div className="col-span-5">
<p className="text-sm font-medium text-zinc-900">Dr. Rajesh Verma</p>
<p className="text-[10px] text-zinc-500">Cardiology</p>
</div>
<div className="col-span-4">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-emerald-50 text-emerald-700 text-[10px] font-medium border border-emerald-100">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Available
                        </span>
</div>
<div className="col-span-3 flex justify-end gap-2">
<button className="w-7 h-7 flex items-center justify-center rounded-md border border-zinc-200 text-zinc-500 hover:bg-white hover:border-zinc-300 transition-all" title="Edit">
<iconify-icon icon="solar:pen-new-linear" width="14"></iconify-icon>
</button>
<button className="w-7 h-7 flex items-center justify-center rounded-md bg-zinc-900 text-white hover:bg-zinc-700 transition-all" title="Update Status">
<iconify-icon icon="solar:menu-dots-bold" width="14"></iconify-icon>
</button>
</div>
</div>

<div className="grid grid-cols-12 gap-4 p-4 border-b border-zinc-100 items-center hover:bg-zinc-50/50 transition-colors">
<div className="col-span-5">
<p className="text-sm font-medium text-zinc-900">Dr. Sneha Kapoor</p>
<p className="text-[10px] text-zinc-500">Pediatrics</p>
</div>
<div className="col-span-4">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-amber-50 text-amber-700 text-[10px] font-medium border border-amber-100">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> Busy
                        </span>
</div>
<div className="col-span-3 flex justify-end gap-2">
<button className="w-7 h-7 flex items-center justify-center rounded-md border border-zinc-200 text-zinc-500 hover:bg-white hover:border-zinc-300 transition-all">
<iconify-icon icon="solar:pen-new-linear" width="14"></iconify-icon>
</button>
<button className="w-7 h-7 flex items-center justify-center rounded-md bg-zinc-900 text-white hover:bg-zinc-700 transition-all">
<iconify-icon icon="solar:menu-dots-bold" width="14"></iconify-icon>
</button>
</div>
</div>

<div className="grid grid-cols-12 gap-4 p-4 items-center bg-blue-50/20 border-l-2 border-blue-500">
<div className="col-span-5">
<p className="text-sm font-medium text-zinc-900">Dr. Amit Singh</p>
<p className="text-[10px] text-zinc-500">Orthopedics</p>
</div>
<div className="col-span-7">
<p className="text-[10px] text-zinc-400 mb-1">Update Status Override</p>
<div className="flex gap-2">
<button className="flex-1 bg-white border border-zinc-200 text-[10px] py-1.5 rounded hover:border-emerald-400 hover:text-emerald-600 transition-colors">Available</button>
<button className="flex-1 bg-white border border-blue-400 text-blue-600 text-[10px] py-1.5 rounded shadow-sm font-medium">4:30 PM</button>
<button className="flex-1 bg-white border border-zinc-200 text-[10px] py-1.5 rounded hover:border-rose-400 hover:text-rose-600 transition-colors">Absent</button>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-3 gap-4 mt-6">
<div className="p-4 rounded-xl bg-white border border-zinc-100 shadow-sm text-center">
<p className="text-2xl font-semibold text-zinc-900">12</p>
<p className="text-[10px] text-zinc-400 uppercase tracking-wide">Total Doctors</p>
</div>
<div className="p-4 rounded-xl bg-white border border-zinc-100 shadow-sm text-center">
<p className="text-2xl font-semibold text-emerald-600">8</p>
<p className="text-[10px] text-zinc-400 uppercase tracking-wide">Available</p>
</div>
<div className="p-4 rounded-xl bg-white border border-zinc-100 shadow-sm text-center">
<p className="text-2xl font-semibold text-rose-600">1</p>
<p className="text-[10px] text-zinc-400 uppercase tracking-wide">Absent</p>
</div>
</div>
</section>
</main>



    </>
  );
}
