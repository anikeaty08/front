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



        // Simple Vanilla Router
        function router(pageId) {
            // Hide all pages
            document.querySelectorAll('.page').forEach(page => {
                page.classList.add('hidden');
            });

            // Show target page
            const target = document.getElementById(pageId);
            if(target) {
                target.classList.remove('hidden');
            }

            // Logic for Bottom Nav Visibility
            const nav = document.getElementById('bottom-nav');
            const noNavPages = ['landing', 'login', 'emergency'];
            
            if (noNavPages.includes(pageId)) {
                nav.classList.add('hidden');
            } else {
                nav.classList.remove('hidden');
                updateNavState(pageId);
            }
        }

        // Update Bottom Nav Active Styling
        function updateNavState(activeId) {
            document.querySelectorAll('.nav-btn').forEach(btn => {
                const target = btn.getAttribute('data-target');
                if(target === activeId) {
                    btn.classList.add('text-teal-600');
                    btn.classList.remove('text-slate-400');
                    // Ensure icon is filled or styled for active state if preferred
                    btn.querySelector('iconify-icon').setAttribute('icon', btn.querySelector('iconify-icon').getAttribute('icon').replace('linear', 'bold'));
                } else {
                    btn.classList.remove('text-teal-600');
                    btn.classList.add('text-slate-400');
                    // Revert to linear
                    btn.querySelector('iconify-icon').setAttribute('icon', btn.querySelector('iconify-icon').getAttribute('icon').replace('bold', 'linear'));
                }
                
                // Keep emergency red
                if(target === 'emergency') {
                    btn.classList.remove('text-teal-600');
                    btn.classList.add('text-red-500');
                }
            });
        }

        // Initial Route
        router('landing');
    
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
      

<div className="w-full max-w-md h-full bg-white relative shadow-2xl sm:rounded-3xl sm:h-[95vh] sm:my-auto overflow-hidden flex flex-col">

<div className="page flex flex-col h-full p-6 bg-white z-50 absolute inset-0" id="landing">
<header className="flex justify-between items-center py-4">
<div className="text-lg font-semibold tracking-tight text-slate-900">HealthNest</div>
<button className="text-red-500 font-medium text-sm flex items-center gap-1 bg-red-50 px-3 py-1.5 rounded-full" onclick="router('emergency')">
<iconify-icon icon="solar:danger-circle-linear"></iconify-icon> Emergency
                </button>
</header>
<main className="flex-1 flex flex-col justify-center space-y-8">
<div className="space-y-3">
<h1 className="text-3xl font-semibold tracking-tight text-slate-900 leading-tight">All your health records. <br/><span className="text-teal-600">One safe place.</span></h1>
<p className="text-slate-500 text-lg leading-relaxed">Reports, medicines, and emergency info — always with you.</p>
</div>
<div className="grid gap-4">
<div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
<div className="bg-white p-2 rounded-xl shadow-sm text-teal-600 flex"><iconify-icon icon="solar:document-medicine-linear" width="24"></iconify-icon></div>
<span className="font-medium text-slate-700">Store medical reports</span>
</div>
<div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
<div className="bg-white p-2 rounded-xl shadow-sm text-teal-600 flex"><iconify-icon icon="solar:pill-linear" width="24"></iconify-icon></div>
<span className="font-medium text-slate-700">Track medicines</span>
</div>
<div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
<div className="bg-white p-2 rounded-xl shadow-sm text-teal-600 flex"><iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon></div>
<span className="font-medium text-slate-700">Secure &amp; Private</span>
</div>
</div>
</main>
<footer className="mt-auto space-y-4">
<button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-4 rounded-2xl text-lg tracking-tight shadow-lg shadow-slate-200 transition-all" onclick="router('login')">Get Started</button>
<p className="text-center text-xs text-slate-400">Your data is encrypted and stored locally.</p>
</footer>
</div>

<div className="page hidden flex flex-col h-full p-6 bg-white z-40 absolute inset-0" id="login">
<header className="py-4">
<button className="text-slate-400 hover:text-slate-600" onclick="router('landing')"><iconify-icon icon="solar:arrow-left-linear" width="24"></iconify-icon></button>
</header>
<main className="flex-1 flex flex-col justify-center">
<h2 className="text-2xl font-semibold text-slate-900 mb-2 tracking-tight">Welcome back</h2>
<p className="text-slate-500 mb-8">Enter your mobile number to access your records.</p>
<div className="space-y-4">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5 uppercase tracking-wide">Phone Number</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all" placeholder="+1 (555) 000-0000" type="tel"/>
</div>
<button className="w-full bg-teal-600 active:bg-teal-700 text-white font-medium py-3.5 rounded-xl shadow-lg shadow-teal-100 transition-all" onclick="router('home')">Send Code</button>
</div>
<div className="mt-8 flex items-center justify-center gap-4">
<div className="h-px bg-slate-100 flex-1"></div>
<span className="text-xs text-slate-400">OR CONTINUE WITH</span>
<div className="h-px bg-slate-100 flex-1"></div>
</div>
<button className="mt-6 w-full bg-white border border-slate-200 text-slate-700 font-medium py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-slate-50" onclick="router('home')">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon> Email Address
                </button>
</main>
</div>

<div className="page hidden flex flex-col h-full bg-slate-50 relative" id="home">

<header className="bg-white px-6 pt-12 pb-4 shadow-sm z-10">
<div className="flex justify-between items-center mb-1">
<div>
<p className="text-slate-500 text-sm">Good morning,</p>
<h1 className="text-xl font-semibold text-slate-900 tracking-tight">Sarah Jenkins</h1>
</div>
<button className="bg-slate-100 p-2 rounded-full text-slate-600" onclick="router('profile')">
<iconify-icon icon="solar:user-circle-linear" width="28"></iconify-icon>
</button>
</div>
</header>

<main className="flex-1 overflow-y-auto p-6 space-y-6 pb-28">

<div className="bg-red-50 rounded-2xl p-5 border border-red-100 flex items-center justify-between cursor-pointer active:scale-95 transition-transform" onclick="router('emergency')">
<div>
<h3 className="text-red-600 font-semibold text-lg tracking-tight">Emergency Mode</h3>
<p className="text-red-400 text-sm mt-0.5">Tap for quick access info</p>
</div>
<div className="bg-white/50 p-2 rounded-full text-red-500">
<iconify-icon icon="solar:medical-kit-linear" width="28"></iconify-icon>
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex flex-col gap-3 active:scale-95 transition-transform" onclick="router('reports')">
<div className="bg-blue-50 text-blue-600 w-10 h-10 rounded-full flex items-center justify-center">
<iconify-icon icon="solar:file-text-linear" width="20"></iconify-icon>
</div>
<span className="font-medium text-slate-700">Reports</span>
</div>
<div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex flex-col gap-3 active:scale-95 transition-transform" onclick="router('medicines')">
<div className="bg-teal-50 text-teal-600 w-10 h-10 rounded-full flex items-center justify-center">
<iconify-icon icon="solar:pill-linear" width="20"></iconify-icon>
</div>
<span className="font-medium text-slate-700">Medicines</span>
</div>
<div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex flex-col gap-3 active:scale-95 transition-transform" onclick="router('doctors')">
<div className="bg-purple-50 text-purple-600 w-10 h-10 rounded-full flex items-center justify-center">
<iconify-icon icon="solar:stethoscope-linear" width="20"></iconify-icon>
</div>
<span className="font-medium text-slate-700">Visits</span>
</div>
<div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex flex-col gap-3 active:scale-95 transition-transform" onclick="router('profile')">
<div className="bg-orange-50 text-orange-600 w-10 h-10 rounded-full flex items-center justify-center">
<iconify-icon icon="solar:heart-pulse-linear" width="20"></iconify-icon>
</div>
<span className="font-medium text-slate-700">Vitals</span>
</div>
</div>

<div>
<h3 className="text-sm font-semibold text-slate-900 mb-3 tracking-tight uppercase opacity-60">Recent Activity</h3>
<div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
<div className="p-4 border-b border-slate-50 flex gap-4 items-center">
<div className="bg-slate-50 p-2 rounded-lg text-slate-500"><iconify-icon icon="solar:document-add-linear"></iconify-icon></div>
<div className="flex-1">
<p className="text-sm font-medium text-slate-900">Blood Test Result</p>
<p className="text-xs text-slate-500">Today, 10:00 AM</p>
</div>
</div>
<div className="p-4 flex gap-4 items-center">
<div className="bg-slate-50 p-2 rounded-lg text-slate-500"><iconify-icon icon="solar:calendar-check-linear"></iconify-icon></div>
<div className="flex-1">
<p className="text-sm font-medium text-slate-900">Dr. Smith Visit</p>
<p className="text-xs text-slate-500">Yesterday</p>
</div>
</div>
</div>
</div>
</main>
</div>

<div className="page hidden flex flex-col h-full bg-white relative z-20" id="profile">
<header className="flex items-center gap-4 px-6 py-4 border-b border-slate-100">
<button className="text-slate-500" onclick="router('home')"><iconify-icon icon="solar:arrow-left-linear" width="24"></iconify-icon></button>
<h2 className="text-lg font-semibold text-slate-900 tracking-tight">Profile</h2>
</header>
<main className="flex-1 overflow-y-auto p-6 pb-28 space-y-6">
<div className="flex justify-center mb-4">
<div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center text-slate-300 border-4 border-white shadow-lg">
<iconify-icon icon="solar:user-linear" width="48"></iconify-icon>
</div>
</div>
<form className="space-y-4">
<div>
<label className="block text-xs font-medium text-slate-500 mb-1">Full Name</label>
<input className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-slate-900 font-medium outline-none focus:border-teal-500" type="text" value="Sarah Jenkins"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-slate-500 mb-1">Age</label>
<input className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-slate-900 font-medium outline-none focus:border-teal-500" type="number" value="68"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-500 mb-1">Blood Group</label>
<input className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-slate-900 font-medium outline-none focus:border-teal-500" type="text" value="O+"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-500 mb-1">Allergies</label>
<textarea className="w-full bg-red-50 border border-red-100 rounded-xl px-4 py-3 text-red-900 font-medium outline-none h-20 resize-none">Penicillin, Peanuts</textarea>
</div>
<div>
<label className="block text-xs font-medium text-slate-500 mb-1">Chronic Conditions</label>
<textarea className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-slate-900 font-medium outline-none h-20 resize-none">Hypertension</textarea>
</div>
</form>
</main>
</div>

<div className="page hidden flex flex-col h-full bg-slate-50 relative z-20" id="medicines">
<header className="flex items-center gap-4 px-6 py-4 bg-white border-b border-slate-100">
<button className="text-slate-500" onclick="router('home')"><iconify-icon icon="solar:arrow-left-linear" width="24"></iconify-icon></button>
<h2 className="text-lg font-semibold text-slate-900 tracking-tight">Daily Medicines</h2>
</header>
<main className="flex-1 overflow-y-auto p-6 pb-28 space-y-6">

<div>
<div className="flex items-center gap-2 mb-3">
<iconify-icon className="text-orange-400" icon="solar:sun-linear"></iconify-icon>
<h3 className="text-sm font-semibold text-slate-700 tracking-tight">Morning</h3>
</div>
<div className="space-y-3">
<label className="cursor-pointer block relative">
<input className="peer sr-only" type="checkbox"/>
<div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center justify-between transition-all">
<div>
<p className="font-medium text-slate-900">Amlodipine 5mg</p>
<p className="text-xs text-slate-400 mt-1">Before Breakfast</p>
</div>
<div className="w-6 h-6 rounded-full border-2 border-slate-200 flex items-center justify-center peer-checked:bg-teal-500 peer-checked:border-teal-500">
<iconify-icon className="text-transparent text-lg" icon="solar:check-circle-linear"></iconify-icon>
</div>
</div>
</label>
</div>
</div>

<div>
<div className="flex items-center gap-2 mb-3">
<iconify-icon className="text-indigo-400" icon="solar:moon-stars-linear"></iconify-icon>
<h3 className="text-sm font-semibold text-slate-700 tracking-tight">Night</h3>
</div>
<div className="space-y-3">
<label className="cursor-pointer block relative">
<input className="peer sr-only" type="checkbox"/>
<div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center justify-between transition-all">
<div>
<p className="font-medium text-slate-900">Atorvastatin 10mg</p>
<p className="text-xs text-slate-400 mt-1">After Dinner</p>
</div>
<div className="w-6 h-6 rounded-full border-2 border-slate-200 flex items-center justify-center peer-checked:bg-teal-500 peer-checked:border-teal-500">
<iconify-icon className="text-transparent text-lg" icon="solar:check-circle-linear"></iconify-icon>
</div>
</div>
</label>
</div>
</div>
</main>

<button className="absolute bottom-24 right-6 bg-slate-900 text-white w-14 h-14 rounded-full shadow-xl flex items-center justify-center z-30">
<iconify-icon icon="solar:add-linear" width="28"></iconify-icon>
</button>
</div>

<div className="page hidden flex flex-col h-full bg-slate-50 relative z-20" id="reports">
<header className="flex items-center gap-4 px-6 py-4 bg-white border-b border-slate-100">
<button className="text-slate-500" onclick="router('home')"><iconify-icon icon="solar:arrow-left-linear" width="24"></iconify-icon></button>
<h2 className="text-lg font-semibold text-slate-900 tracking-tight">Medical Reports</h2>
</header>
<main className="flex-1 overflow-y-auto p-6 pb-28">
<div className="border-2 border-dashed border-slate-200 rounded-xl p-6 flex flex-col items-center justify-center mb-8 bg-slate-50/50">
<iconify-icon className="text-slate-400 text-3xl mb-2" icon="solar:cloud-upload-linear"></iconify-icon>
<p className="text-sm font-medium text-slate-600">Upload PDF or Image</p>
</div>
<div className="space-y-6 relative before:absolute before:left-4 before:top-0 before:h-full before:w-px before:bg-slate-200">

<div className="relative pl-10">
<div className="absolute left-2.5 top-2 w-3 h-3 bg-teal-500 rounded-full border-2 border-slate-50 -translate-x-1/2"></div>
<p className="text-xs text-slate-400 font-medium mb-1">Today</p>
<div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
<div className="flex justify-between items-start mb-2">
<h4 className="text-sm font-medium text-slate-900">Complete Blood Count</h4>
<span className="bg-blue-50 text-blue-600 text-[10px] px-2 py-0.5 rounded font-medium">LAB</span>
</div>
<button className="text-teal-600 text-xs font-medium flex items-center gap-1 mt-2">
<iconify-icon icon="solar:eye-linear"></iconify-icon> View Report
                            </button>
</div>
</div>

<div className="relative pl-10">
<div className="absolute left-2.5 top-2 w-3 h-3 bg-slate-300 rounded-full border-2 border-slate-50 -translate-x-1/2"></div>
<p className="text-xs text-slate-400 font-medium mb-1">Oct 24, 2023</p>
<div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
<div className="flex justify-between items-start mb-2">
<h4 className="text-sm font-medium text-slate-900">MRI Scan Report</h4>
<span className="bg-purple-50 text-purple-600 text-[10px] px-2 py-0.5 rounded font-medium">SCAN</span>
</div>
<button className="text-teal-600 text-xs font-medium flex items-center gap-1 mt-2">
<iconify-icon icon="solar:eye-linear"></iconify-icon> View Report
                            </button>
</div>
</div>
</div>
</main>
</div>

<div className="page hidden flex flex-col h-full bg-slate-50 relative z-20" id="doctors">
<header className="flex items-center gap-4 px-6 py-4 bg-white border-b border-slate-100">
<button className="text-slate-500" onclick="router('home')"><iconify-icon icon="solar:arrow-left-linear" width="24"></iconify-icon></button>
<h2 className="text-lg font-semibold text-slate-900 tracking-tight">Visit History</h2>
</header>
<main className="flex-1 overflow-y-auto p-6 pb-28 space-y-4">
<div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100">
<div className="flex items-center gap-3 mb-3 border-b border-slate-50 pb-3">
<div className="bg-slate-100 p-2 rounded-full text-slate-600">
<iconify-icon icon="solar:user-id-linear"></iconify-icon>
</div>
<div>
<h3 className="font-medium text-slate-900">Dr. Emily Stone</h3>
<p className="text-xs text-slate-500">Cardiologist • City Hospital</p>
</div>
</div>
<div className="space-y-2">
<p className="text-xs text-slate-400 uppercase tracking-wide">Diagnosis</p>
<p className="text-sm text-slate-700 leading-relaxed">Mild hypertension observed. Recommended low sodium diet and daily walking.</p>
<p className="text-xs text-slate-400 text-right mt-2">Oct 12, 2023</p>
</div>
</div>
</main>
</div>

<div className="page hidden flex flex-col h-full bg-white z-50 absolute inset-0" id="emergency">
<header className="flex items-center justify-between px-6 py-4 bg-red-600 text-white shadow-md">
<h2 className="text-xl font-bold tracking-tight flex items-center gap-2">
<iconify-icon icon="solar:danger-triangle-linear"></iconify-icon> EMERGENCY INFO
                </h2>
<button className="text-white/80 text-sm font-medium" onclick="window.history.length &gt; 1 ? window.history.back() : router('landing')">Close</button>
</header>
<main className="flex-1 overflow-y-auto p-6 space-y-6">
<div className="bg-red-50 border border-red-100 p-6 rounded-2xl text-center">
<div className="w-24 h-24 bg-red-100 rounded-full mx-auto mb-4 flex items-center justify-center text-red-600">
<iconify-icon icon="solar:user-bold" width="48"></iconify-icon>
</div>
<h1 className="text-2xl font-bold text-slate-900">Sarah Jenkins</h1>
<p className="text-slate-500 mt-1">Age 68 • Female</p>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="bg-white border-2 border-red-100 p-4 rounded-xl shadow-sm">
<p className="text-xs text-slate-400 uppercase font-bold tracking-wide mb-1">Blood Type</p>
<p className="text-3xl font-bold text-slate-900">O+</p>
</div>
<div className="bg-white border-2 border-red-100 p-4 rounded-xl shadow-sm">
<p className="text-xs text-slate-400 uppercase font-bold tracking-wide mb-1">Allergies</p>
<p className="text-lg font-bold text-red-600 leading-tight">Penicillin, Peanuts</p>
</div>
</div>
<div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm">
<p className="text-xs text-slate-400 uppercase font-bold tracking-wide mb-3">Current Conditions</p>
<div className="flex flex-wrap gap-2">
<span className="bg-slate-100 text-slate-800 px-3 py-1 rounded-full text-sm font-medium">Hypertension</span>
</div>
</div>
<div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm">
<p className="text-xs text-slate-400 uppercase font-bold tracking-wide mb-3">Emergency Contact</p>
<div className="flex items-center justify-between">
<div>
<p className="text-base font-bold text-slate-900">John Jenkins (Son)</p>
<p className="text-slate-500 text-sm">+1 (555) 123-4567</p>
</div>
<a className="bg-green-600 text-white p-3 rounded-full flex items-center shadow-lg shadow-green-200" href="tel:+15551234567">
<iconify-icon icon="solar:phone-calling-linear" width="24"></iconify-icon>
</a>
</div>
</div>
</main>
</div>

<nav className="hidden absolute bottom-0 left-0 w-full bg-white/95 backdrop-blur-md border-t border-slate-200 py-3 px-6 pb-6 z-30" id="bottom-nav">
<div className="flex justify-between items-center">
<button className="nav-btn flex flex-col items-center gap-1 text-slate-400 w-12" data-target="home" onclick="router('home')">
<iconify-icon icon="solar:home-smile-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Home</span>
</button>
<button className="nav-btn flex flex-col items-center gap-1 text-slate-400 w-12" data-target="reports" onclick="router('reports')">
<iconify-icon icon="solar:file-text-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Reports</span>
</button>
<button className="nav-btn flex flex-col items-center gap-1 text-slate-400 w-12" data-target="medicines" onclick="router('medicines')">
<iconify-icon icon="solar:pill-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Meds</span>
</button>
<button className="nav-btn flex flex-col items-center gap-1 text-red-400 w-12" data-target="emergency" onclick="router('emergency')">
<iconify-icon icon="solar:danger-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Help</span>
</button>
</div>
</nav>
</div>


    </>
  );
}
