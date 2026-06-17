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



        function navigate(viewId) {
            // Hide all views
            document.querySelectorAll('.page-section').forEach(el => {
                el.classList.remove('active');
            });
            
            // Show target view
            const target = document.getElementById('view-' + viewId);
            if (target) {
                target.classList.add('active');
                window.scrollTo(0, 0);
            }
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
      

<div className="page-section active" id="view-landing">

<nav className="glass-nav fixed top-0 w-full z-50 border-b border-slate-200/60">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">
<div className="flex items-center gap-2 cursor-pointer" onclick="navigate('landing')">
<div className="w-8 h-8 rounded-lg flex items-center justify-center bg-cyan-600 text-white">
<iconify-icon icon="solar:heart-pulse-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-900">HealthSync</span>
</div>
<div className="flex items-center gap-4">
<button className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" onclick="navigate('login')">Log in</button>
<button className="text-sm font-medium px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors" onclick="navigate('signup')">Sign up</button>
</div>
</div>
</div>
</nav>

<main className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
<section className="text-center space-y-8">
<div className="space-y-4 max-w-3xl mx-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium bg-cyan-50 border-cyan-100 text-cyan-700">
<iconify-icon icon="solar:shield-check-linear" width="14"></iconify-icon>
                        HIPAA Compliant
                    </div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900">
                        Healthcare synchronized <br/> <span className="text-slate-400">around your life.</span>
</h1>
<p className="text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
                        Book appointments, manage medical records, and connect with specialists. Secure, simple, and fast.
                    </p>
<div className="flex justify-center gap-4 pt-4">
<button className="px-8 py-3 rounded-xl font-medium text-sm bg-cyan-600 hover:bg-cyan-700 text-white shadow-lg shadow-cyan-600/20 transition-all" onclick="navigate('signup')">Get Started</button>
<button className="px-8 py-3 rounded-xl font-medium text-sm bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 transition-all" onclick="navigate('dashboard')">View Demo Dashboard</button>
</div>
</div>

<div className="cursor-pointer max-w-2xl mx-auto p-2 rounded-xl border bg-white shadow-sm border-slate-200 flex items-center gap-2 hover:border-cyan-300 transition-colors group" onclick="navigate('search')">
<iconify-icon className="ml-3 text-slate-400 group-hover:text-cyan-600" icon="solar:magnifer-linear" width="20"></iconify-icon>
<div className="flex-1 text-left text-sm text-slate-400 select-none">Find a doctor, specialist, or condition...</div>
<div className="hidden sm:flex items-center gap-2 px-3 border-l border-slate-100">
<iconify-icon className="text-slate-400" icon="solar:map-point-linear" width="18"></iconify-icon>
<span className="text-sm text-slate-500">New York, NY</span>
</div>
<div className="p-2 bg-slate-900 rounded-lg text-white">
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</div>
</div>
</section>
</main>
</div>

<div className="page-section min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-slate-50" id="view-login">
<div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
<div className="text-center">
<div className="mx-auto w-10 h-10 rounded-xl flex items-center justify-center bg-cyan-600 text-white mb-4">
<iconify-icon icon="solar:heart-pulse-linear" width="24"></iconify-icon>
</div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">Welcome back</h2>
<p className="mt-2 text-sm text-slate-500">Please enter your details to sign in.</p>
</div>
<div className="space-y-5">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Email address</label>
<input className="custom-input w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none" placeholder="name@company.com" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Password</label>
<input className="custom-input w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none" placeholder="••••••••" type="password"/>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center">
<input className="h-4 w-4 text-cyan-600 border-slate-300 rounded focus:ring-cyan-500" id="remember-me" type="checkbox"/>
<label className="ml-2 block text-xs text-slate-500" htmlFor="remember-me">Remember for 30 days</label>
</div>
<div className="text-xs">
<a className="font-medium text-cyan-600 hover:text-cyan-500" href="#">Forgot password?</a>
</div>
</div>
<button className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900" onclick="navigate('dashboard')">
                    Sign in
                </button>
</div>
</div>
</div>

<div className="page-section min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-slate-50" id="view-signup">
<div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
<div className="text-center">
<div className="mx-auto w-10 h-10 rounded-xl flex items-center justify-center bg-cyan-600 text-white mb-4">
<iconify-icon icon="solar:user-plus-linear" width="24"></iconify-icon>
</div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">Create an account</h2>
<p className="mt-2 text-sm text-slate-500">Join HealthSync to manage your healthcare journey.</p>
</div>
<div className="space-y-5">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">First name</label>
<input className="custom-input w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none" placeholder="Jane" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Last name</label>
<input className="custom-input w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none" placeholder="Doe" type="text"/>
</div>
</div>
<button className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 transition-all" onclick="navigate('dashboard')">
                    Create account
                </button>
</div>
</div>
</div>

<div className="page-section min-h-screen bg-white" id="view-dashboard">

<aside className="fixed inset-y-0 left-0 w-64 bg-slate-50 border-r border-slate-200 hidden md:flex flex-col z-10">
<div className="h-16 flex items-center px-6 border-b border-slate-200/50">
<div className="flex items-center gap-2 cursor-pointer" onclick="navigate('landing')">
<div className="w-6 h-6 rounded-md flex items-center justify-center bg-cyan-600 text-white">
<iconify-icon icon="solar:heart-pulse-linear" width="14"></iconify-icon>
</div>
<span className="text-base font-semibold text-slate-900">HealthSync</span>
</div>
</div>
<div className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg bg-white border border-slate-200 text-slate-900 shadow-sm">
<iconify-icon className="text-cyan-600" icon="solar:home-smile-linear" width="18"></iconify-icon>
                    Overview
                </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-colors" onclick="navigate('search')">
<iconify-icon icon="solar:magnifer-linear" width="18"></iconify-icon>
                    Find Doctor
                </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-colors" onclick="navigate('appointments')">
<iconify-icon icon="solar:calendar-linear" width="18"></iconify-icon>
                    Appointments
                </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-colors" onclick="navigate('patient-profile')">
<iconify-icon icon="solar:user-circle-linear" width="18"></iconify-icon>
                    My Profile
                </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-colors">
<iconify-icon icon="solar:card-reciept-linear" width="18"></iconify-icon>
                    Billing
                </button>
</div>
<div className="p-4 border-t border-slate-200">
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-slate-500 hover:text-red-600 hover:bg-red-50 transition-colors" onclick="navigate('landing')">
<iconify-icon icon="solar:logout-linear" width="18"></iconify-icon>
                    Sign out
                </button>
</div>
</aside>

<div className="md:ml-64 min-h-screen bg-slate-50/50">

<header className="h-16 sticky top-0 bg-white/80 backdrop-blur-md border-b border-slate-200 z-10 px-4 sm:px-6 flex items-center justify-between">
<h2 className="text-sm font-semibold text-slate-900">Patient Dashboard</h2>
<div className="flex items-center gap-4">
<button className="p-2 text-slate-400 hover:text-slate-600 relative">
<iconify-icon icon="solar:bell-linear" width="20"></iconify-icon>
<span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
</button>
<div className="flex items-center gap-3 border-l pl-4 border-slate-200 cursor-pointer" onclick="navigate('patient-profile')">
<div className="text-right hidden sm:block">
<p className="text-xs font-medium text-slate-900">Jane Doe</p>
<p className="text-[10px] text-slate-500">Premium Plan</p>
</div>
<img alt="Profile" className="w-8 h-8 rounded-full border border-slate-200" src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>
</div>
</div>
</header>
<main className="p-4 sm:p-6 lg:p-8 space-y-6">

<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
<div>
<h1 className="text-2xl font-semibold tracking-tight text-slate-900">Good Morning, Jane</h1>
<p className="text-sm text-slate-500 mt-1">You have 1 upcoming appointment today.</p>
</div>
<button className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors shadow-sm" onclick="navigate('search')">
<iconify-icon icon="solar:add-circle-linear" width="18"></iconify-icon>
                        Book Appointment
                    </button>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 space-y-6">

<div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm cursor-pointer hover:border-cyan-300 transition-all" onclick="navigate('appointments')">
<div className="flex justify-between items-start mb-6">
<div className="flex gap-4">
<img className="w-12 h-12 rounded-full border border-slate-100 object-cover" src="https://i.pravatar.cc/150?u=a042581f4e29026024d"/>
<div>
<h3 className="text-sm font-semibold text-slate-900">Dr. Sarah Jenning</h3>
<p className="text-xs text-slate-500">Cardiologist • St. Mary's Hospital</p>
</div>
</div>
<span className="px-2.5 py-1 text-xs font-medium rounded-md bg-cyan-50 text-cyan-700 border border-cyan-100">Starts in 15m</span>
</div>
<div className="flex gap-3 mt-4">
<button className="flex-1 py-2 text-xs font-medium rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors">Join Video Call</button>
<button className="px-4 py-2 text-xs font-medium rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50">Reschedule</button>
</div>
</div>

<div className="grid grid-cols-3 gap-4">
<div className="bg-white p-4 rounded-xl border border-slate-200">
<div className="flex items-center gap-2 mb-2 text-slate-400">
<iconify-icon icon="solar:heart-pulse-linear"></iconify-icon>
<span className="text-xs font-medium">Heart Rate</span>
</div>
<p className="text-xl font-semibold text-slate-900">72 <span className="text-xs text-slate-400 font-normal">bpm</span></p>
</div>
<div className="bg-white p-4 rounded-xl border border-slate-200">
<div className="flex items-center gap-2 mb-2 text-slate-400">
<iconify-icon icon="solar:drop-linear"></iconify-icon>
<span className="text-xs font-medium">Blood Pressure</span>
</div>
<p className="text-xl font-semibold text-slate-900">120/80</p>
</div>
<div className="bg-white p-4 rounded-xl border border-slate-200">
<div className="flex items-center gap-2 mb-2 text-slate-400">
<iconify-icon icon="solar:scale-linear"></iconify-icon>
<span className="text-xs font-medium">Weight</span>
</div>
<p className="text-xl font-semibold text-slate-900">64 <span className="text-xs text-slate-400 font-normal">kg</span></p>
</div>
</div>
</div>

<div className="space-y-6">

<div className="rounded-2xl p-6 relative overflow-hidden bg-gradient-to-br from-cyan-600 to-cyan-700 text-white shadow-lg shadow-cyan-900/10">
<iconify-icon className="absolute -right-4 -bottom-4 text-white/10 rotate-[-15deg]" icon="solar:medical-kit-linear" width="100"></iconify-icon>
<h3 className="text-lg font-semibold relative z-10">Premium Health Check</h3>
<p className="text-sm mt-2 mb-4 relative z-10 text-cyan-100">Schedule your annual full body checkup today.</p>
<button className="w-full py-2 rounded-lg text-xs font-semibold bg-white text-cyan-700 hover:bg-cyan-50 transition-colors relative z-10">
                                Schedule Now
                            </button>
</div>
</div>
</div>
</main>
</div>
</div>

<div className="page-section min-h-screen bg-slate-50/50" id="view-search">

<header className="bg-white border-b border-slate-200 sticky top-0 z-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
<div className="flex items-center justify-between gap-6">
<div className="flex items-center gap-3">
<button className="p-2 rounded-full hover:bg-slate-100 text-slate-500" onclick="navigate('dashboard')">
<iconify-icon icon="solar:arrow-left-linear" width="20"></iconify-icon>
</button>
<div className="w-8 h-8 rounded-lg flex items-center justify-center bg-cyan-600 text-white cursor-pointer" onclick="navigate('landing')">
<iconify-icon icon="solar:heart-pulse-linear" width="20"></iconify-icon>
</div>
</div>

<div className="flex-1 max-w-3xl">
<div className="flex items-center bg-slate-50 border border-slate-200 rounded-xl shadow-sm focus-within:ring-2 focus-within:ring-cyan-500/20 focus-within:border-cyan-500 transition-all overflow-hidden">
<div className="flex-1 flex items-center px-4 py-2.5 gap-3 border-r border-slate-200">
<iconify-icon className="text-slate-400" icon="solar:magnifer-linear" width="20"></iconify-icon>
<input className="w-full bg-transparent text-sm focus:outline-none placeholder:text-slate-400 text-slate-900" placeholder="Specialty, Doctor, or Condition" type="text" value="Cardiologist"/>
</div>
<button className="bg-slate-900 text-white px-6 py-2.5 text-sm font-medium hover:bg-slate-800 transition-colors">Search</button>
</div>
</div>
</div>
</div>
</header>
<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
<div className="flex flex-col lg:flex-row gap-8">

<aside className="w-full lg:w-64 flex-shrink-0 space-y-8 hidden lg:block">
<div>
<h3 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-4">Distance</h3>
<div className="space-y-3">
<label className="flex items-center cursor-pointer group">
<input className="custom-checkbox h-4 w-4 text-cyan-600 border-slate-300 rounded focus:ring-cyan-500" name="distance" type="radio"/>
<span className="ml-3 text-sm text-slate-600 group-hover:text-slate-900">Within 5 miles</span>
</label>
<label className="flex items-center cursor-pointer group">
<input checked="" className="custom-checkbox h-4 w-4 text-cyan-600 border-slate-300 rounded focus:ring-cyan-500" name="distance" type="radio"/>
<span className="ml-3 text-sm text-slate-600 group-hover:text-slate-900">Within 10 miles</span>
</label>
</div>
</div>
</aside>

<div className="flex-1 space-y-4">
<div className="flex items-center justify-between mb-2">
<h2 className="text-sm font-semibold text-slate-900">24 Cardiologists found nearby</h2>
</div>

<div className="bg-white rounded-xl border border-slate-200 p-5 hover:shadow-md transition-shadow group">
<div className="flex flex-col sm:flex-row gap-5">
<div className="relative">
<img className="w-20 h-20 rounded-lg object-cover bg-slate-100" src="https://i.pravatar.cc/150?u=a042581f4e29026024d"/>
<div className="absolute -bottom-2 -right-2 bg-white p-1 rounded-full border border-slate-100 shadow-sm">
<iconify-icon className="text-cyan-600 block" icon="solar:videocamera-record-linear" width="16"></iconify-icon>
</div>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-semibold text-slate-900 group-hover:text-cyan-700 transition-colors">Dr. Sarah Jenning</h3>
<p className="text-sm text-slate-500">Cardiologist • 12 Years Exp.</p>
</div>
<div className="flex items-center gap-1 bg-slate-50 px-2 py-1 rounded text-xs font-medium">
<iconify-icon className="text-orange-400" icon="solar:star-bold"></iconify-icon>
                                        4.9 (124)
                                    </div>
</div>
<div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
<span className="text-xs font-medium text-emerald-700">Available Today, 2:30 PM</span>
</div>
<div className="flex gap-2">
<button className="px-4 py-2 rounded-lg text-xs font-medium text-slate-700 border border-slate-200 hover:bg-slate-50 transition-colors" onclick="navigate('doctor-profile')">View Profile</button>
<button className="px-4 py-2 rounded-lg text-xs font-medium text-white bg-slate-900 hover:bg-slate-800 transition-colors" onclick="navigate('doctor-profile')">Book Visit</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
</div>

<div className="page-section min-h-screen bg-slate-50" id="view-doctor-profile">

<header className="bg-white border-b border-slate-200 sticky top-0 z-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
<div className="flex items-center gap-3">
<button className="p-2 rounded-full hover:bg-slate-100 text-slate-500 transition-colors" onclick="navigate('search')">
<iconify-icon icon="solar:arrow-left-linear" width="20"></iconify-icon>
</button>
<span className="text-sm font-semibold text-slate-900">Doctor Profile</span>
</div>
</div>
</header>
<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 space-y-6">

<div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
<div className="flex flex-col sm:flex-row gap-6 items-start">
<div className="relative">
<img className="w-24 h-24 rounded-2xl object-cover shadow-sm" src="https://i.pravatar.cc/150?u=a042581f4e29026024d"/>
<div className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-1.5 rounded-full border-2 border-white shadow-sm" title="Verified">
<iconify-icon icon="solar:verified-check-linear" width="16"></iconify-icon>
</div>
</div>
<div className="flex-1">
<div className="flex justify-between items-start">
<div>
<h1 className="text-2xl font-semibold tracking-tight text-slate-900">Dr. Sarah Jenning</h1>
<p className="text-sm text-slate-500 mt-1">Cardiologist • MD, PhD • 12 Years Experience</p>
</div>
<div className="flex items-center gap-1.5 bg-orange-50 px-3 py-1.5 rounded-lg border border-orange-100">
<iconify-icon className="text-orange-500" icon="solar:star-bold" width="16"></iconify-icon>
<span className="text-sm font-bold text-orange-700">4.9</span>
<span className="text-xs text-orange-600/80">(124 reviews)</span>
</div>
</div>
<div className="flex flex-wrap gap-3 mt-4">
<div className="flex items-center gap-1.5 text-xs text-slate-600 bg-slate-50 px-2.5 py-1.5 rounded-md border border-slate-200">
<iconify-icon className="text-slate-400" icon="solar:map-point-linear"></iconify-icon>
                                        New York, NY
                                    </div>
<div className="flex items-center gap-1.5 text-xs text-slate-600 bg-slate-50 px-2.5 py-1.5 rounded-md border border-slate-200">
<iconify-icon className="text-slate-400" icon="solar:chat-round-money-linear"></iconify-icon>
                                        $150 / Visit
                                    </div>
<div className="flex items-center gap-1.5 text-xs text-slate-600 bg-slate-50 px-2.5 py-1.5 rounded-md border border-slate-200">
<iconify-icon className="text-slate-400" icon="solar:global-linear"></iconify-icon>
                                        Eng, Esp
                                    </div>
</div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-slate-100">
<h3 className="text-sm font-semibold text-slate-900 mb-2">About</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                                Dr. Jenning is a board-certified Cardiologist with over a decade of experience in treating complex cardiovascular conditions. She specializes in preventive cardiology and heart failure management. She received her medical degree from Harvard Medical School and completed her residency at Johns Hopkins.
                            </p>
</div>
</div>

<div className="grid grid-cols-3 gap-4">
<div className="bg-white p-5 rounded-xl border border-slate-200 text-center">
<div className="w-10 h-10 mx-auto bg-cyan-50 text-cyan-600 rounded-full flex items-center justify-center mb-3">
<iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
</div>
<p className="text-lg font-bold text-slate-900">5000+</p>
<p className="text-xs text-slate-500">Patients</p>
</div>
<div className="bg-white p-5 rounded-xl border border-slate-200 text-center">
<div className="w-10 h-10 mx-auto bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mb-3">
<iconify-icon icon="solar:medal-ribbon-linear" width="20"></iconify-icon>
</div>
<p className="text-lg font-bold text-slate-900">12+</p>
<p className="text-xs text-slate-500">Years Exp.</p>
</div>
<div className="bg-white p-5 rounded-xl border border-slate-200 text-center">
<div className="w-10 h-10 mx-auto bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-3">
<iconify-icon icon="solar:smile-circle-linear" width="20"></iconify-icon>
</div>
<p className="text-lg font-bold text-slate-900">99%</p>
<p className="text-xs text-slate-500">Satisfaction</p>
</div>
</div>

<div className="bg-white rounded-2xl border border-slate-200 p-6">
<div className="flex justify-between items-center mb-6">
<h3 className="text-base font-semibold text-slate-900">Patient Reviews</h3>
<button className="text-sm text-cyan-600 font-medium hover:text-cyan-700">View all</button>
</div>
<div className="space-y-6">
<div className="pb-6 border-b border-slate-100 last:border-0 last:pb-0">
<div className="flex justify-between items-start mb-2">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center text-xs font-bold">MK</div>
<span className="text-sm font-medium text-slate-900">Michael K.</span>
</div>
<span className="text-xs text-slate-400">2 days ago</span>
</div>
<div className="flex text-orange-400 mb-2">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
</div>
<p className="text-sm text-slate-500">Dr. Jenning was incredibly thorough and kind. She took the time to explain everything to me clearly.</p>
</div>
</div>
</div>
</div>

<div className="space-y-6">
<div className="bg-white rounded-2xl border border-slate-200 p-6 sticky top-24">
<h3 className="text-base font-semibold text-slate-900 mb-4">Book Appointment</h3>

<div className="flex justify-between mb-4 border-b border-slate-100 pb-4">
<div className="text-center p-2 rounded-lg bg-cyan-50 border border-cyan-100 cursor-pointer">
<p className="text-xs font-medium text-cyan-800">Mon</p>
<p className="text-lg font-bold text-cyan-600">12</p>
</div>
<div className="text-center p-2 rounded-lg hover:bg-slate-50 cursor-pointer text-slate-400">
<p className="text-xs font-medium">Tue</p>
<p className="text-lg font-bold text-slate-600">13</p>
</div>
<div className="text-center p-2 rounded-lg hover:bg-slate-50 cursor-pointer text-slate-400">
<p className="text-xs font-medium">Wed</p>
<p className="text-lg font-bold text-slate-600">14</p>
</div>
<div className="text-center p-2 rounded-lg hover:bg-slate-50 cursor-pointer text-slate-400">
<p className="text-xs font-medium">Thu</p>
<p className="text-lg font-bold text-slate-600">15</p>
</div>
</div>

<div className="mb-6">
<p className="text-xs font-semibold text-slate-900 mb-3 uppercase tracking-wider">Morning</p>
<div className="grid grid-cols-3 gap-2 mb-4">
<button className="py-2 text-xs font-medium rounded border border-slate-200 text-slate-600 hover:border-cyan-500 hover:text-cyan-600 transition-colors">09:00 AM</button>
<button className="py-2 text-xs font-medium rounded border border-slate-200 text-slate-600 hover:border-cyan-500 hover:text-cyan-600 transition-colors">09:30 AM</button>
<button className="py-2 text-xs font-medium rounded border border-slate-200 text-slate-300 cursor-not-allowed">10:00 AM</button>
</div>
<p className="text-xs font-semibold text-slate-900 mb-3 uppercase tracking-wider">Afternoon</p>
<div className="grid grid-cols-3 gap-2">
<button className="py-2 text-xs font-medium rounded border-cyan-600 bg-cyan-600 text-white shadow-sm">02:30 PM</button>
<button className="py-2 text-xs font-medium rounded border border-slate-200 text-slate-600 hover:border-cyan-500 hover:text-cyan-600 transition-colors">03:00 PM</button>
<button className="py-2 text-xs font-medium rounded border border-slate-200 text-slate-600 hover:border-cyan-500 hover:text-cyan-600 transition-colors">03:30 PM</button>
</div>
</div>
<button className="w-full py-3 bg-slate-900 text-white rounded-xl text-sm font-medium hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10" onclick="navigate('appointments')">
                            Confirm Booking
                        </button>
<p className="text-center text-xs text-slate-400 mt-3">No payment required until visit</p>
</div>
</div>
</div>
</main>
</div>

<div className="page-section min-h-screen bg-slate-50" id="view-patient-profile">

<header className="bg-white border-b border-slate-200 sticky top-0 z-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<button className="p-2 rounded-full hover:bg-slate-100 text-slate-500 transition-colors" onclick="navigate('dashboard')">
<iconify-icon icon="solar:arrow-left-linear" width="20"></iconify-icon>
</button>
<span className="text-sm font-semibold text-slate-900">My Profile</span>
</div>
<button className="text-sm font-medium text-cyan-600 hover:text-cyan-700">Save Changes</button>
</div>
</div>
</header>
<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
<div className="flex flex-col lg:flex-row gap-8">

<aside className="w-full lg:w-64 flex-shrink-0">
<nav className="space-y-1">
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg bg-white border border-slate-200 text-slate-900 shadow-sm">
<iconify-icon className="text-cyan-600" icon="solar:user-circle-linear" width="18"></iconify-icon>
                            Personal Info
                        </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-slate-500 hover:bg-white hover:text-slate-900 transition-colors">
<iconify-icon icon="solar:shield-check-linear" width="18"></iconify-icon>
                            Insurance
                        </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-slate-500 hover:bg-white hover:text-slate-900 transition-colors">
<iconify-icon icon="solar:card-linear" width="18"></iconify-icon>
                            Payment Methods
                        </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-slate-500 hover:bg-white hover:text-slate-900 transition-colors">
<iconify-icon icon="solar:settings-linear" width="18"></iconify-icon>
                            Settings
                        </button>
</nav>
</aside>

<div className="flex-1 space-y-6">
<div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
<h2 className="text-lg font-semibold text-slate-900 mb-6">Personal Information</h2>

<div className="flex items-center gap-6 mb-8">
<img className="w-20 h-20 rounded-full object-cover border border-slate-200" src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>
<div>
<button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors shadow-sm">Change Photo</button>
<p className="text-xs text-slate-400 mt-2">JPG, GIF or PNG. Max size 800K</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">First Name</label>
<input className="custom-input w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none" type="text" value="Jane"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Last Name</label>
<input className="custom-input w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none" type="text" value="Doe"/>
</div>
<div className="md:col-span-2">
<label className="block text-xs font-medium text-slate-700 mb-1.5">Email Address</label>
<input className="custom-input w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none" type="email" value="jane.doe@example.com"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Phone Number</label>
<input className="custom-input w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none" type="tel" value="+1 (555) 123-4567"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Date of Birth</label>
<input className="custom-input w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none" type="date" value="1990-05-15"/>
</div>
</div>
</div>
<div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
<h2 className="text-lg font-semibold text-slate-900 mb-6">Medical Profile</h2>
<div className="space-y-4">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Blood Type</label>
<select className="custom-input w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none bg-white">
<option>A+</option>
<option>O+</option>
<option>B+</option>
<option>AB+</option>
</select>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Allergies</label>
<textarea className="custom-input w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none h-24" placeholder="List any allergies...">Peanuts, Penicillin</textarea>
</div>
</div>
</div>
</div>
</div>
</main>
</div>

<div className="page-section min-h-screen bg-slate-50" id="view-appointments">

<header className="bg-white border-b border-slate-200 sticky top-0 z-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
<div className="flex items-center gap-3">
<button className="p-2 rounded-full hover:bg-slate-100 text-slate-500 transition-colors" onclick="navigate('dashboard')">
<iconify-icon icon="solar:arrow-left-linear" width="20"></iconify-icon>
</button>
<span className="text-sm font-semibold text-slate-900">My Appointments</span>
</div>
</div>
</header>
<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

<div className="border-b border-slate-200 mb-6">
<div className="flex gap-6">
<button className="pb-3 text-sm font-medium text-cyan-600 border-b-2 border-cyan-600">Upcoming</button>
<button className="pb-3 text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors">Past</button>
<button className="pb-3 text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors">Canceled</button>
</div>
</div>
<div className="space-y-4">

<div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
<div className="flex flex-col sm:flex-row gap-5 justify-between">
<div className="flex gap-4">
<div className="flex flex-col items-center justify-center w-16 h-16 bg-cyan-50 rounded-lg text-cyan-800 border border-cyan-100 flex-shrink-0">
<span className="text-xs font-semibold uppercase">Feb</span>
<span className="text-xl font-bold">12</span>
</div>
<div>
<h3 className="text-lg font-semibold text-slate-900">Dr. Sarah Jenning</h3>
<p className="text-sm text-slate-500 mb-1">Cardiologist • Video Consultation</p>
<div className="flex items-center gap-2 mt-2">
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                                        Confirmed
                                    </span>
<span className="text-xs text-slate-400">02:30 PM - 03:00 PM</span>
</div>
</div>
</div>
<div className="flex flex-col sm:items-end justify-center gap-2">
<button className="px-5 py-2.5 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors shadow-sm">
                                Join Call
                            </button>
<div className="flex gap-3">
<button className="text-xs font-medium text-slate-500 hover:text-slate-900">Reschedule</button>
<button className="text-xs font-medium text-red-500 hover:text-red-700">Cancel</button>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
<div className="flex flex-col sm:flex-row gap-5 justify-between">
<div className="flex gap-4">
<div className="flex flex-col items-center justify-center w-16 h-16 bg-slate-50 rounded-lg text-slate-600 border border-slate-200 flex-shrink-0">
<span className="text-xs font-semibold uppercase">Feb</span>
<span className="text-xl font-bold">28</span>
</div>
<div>
<h3 className="text-lg font-semibold text-slate-900">Dr. Michael Chen</h3>
<p className="text-sm text-slate-500 mb-1">Pediatrician • In-person Visit</p>
<div className="flex items-center gap-2 mt-2">
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-100">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                                        Pending
                                    </span>
<span className="text-xs text-slate-400">10:00 AM - 10:30 AM</span>
</div>
</div>
</div>
<div className="flex flex-col sm:items-end justify-center gap-2">
<button className="px-5 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors">
                                View Details
                            </button>
<div className="flex gap-3">
<button className="text-xs font-medium text-slate-500 hover:text-slate-900">Reschedule</button>
<button className="text-xs font-medium text-red-500 hover:text-red-700">Cancel</button>
</div>
</div>
</div>
</div>
</div>
</main>
</div>



    </>
  );
}
