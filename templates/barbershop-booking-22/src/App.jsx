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



        // --- 1. Pricing Logic ---
        function updatePrices(type) {
            const cuttingPrice = document.getElementById('price-cutting');
            if(type === 'young') {
                cuttingPrice.textContent = '₹80';
            } else {
                cuttingPrice.textContent = '₹100';
            }
        }

        // --- 2. Admin Authentication Logic ---
        // Hardcoded Admins (Only these numbers allow login)
        const ADMIN_NUMBERS = ['9876543210', '9999999999']; 
        const MOCK_OTP = "1234";

        function requestOTP() {
            const phoneInput = document.getElementById('admin-phone').value;
            const errorMsg = document.getElementById('login-error');
            const phoneStep = document.getElementById('phone-step');
            const otpStep = document.getElementById('otp-step');

            // Simple validation: Check if number is in allowed list
            if (ADMIN_NUMBERS.includes(phoneInput)) {
                errorMsg.classList.add('hidden');
                // Simulate sending OTP
                alert(`OTP sent to ${phoneInput}: ${MOCK_OTP}`);
                
                // Switch UI to OTP input
                phoneStep.classList.add('hidden');
                otpStep.classList.remove('hidden');
            } else {
                errorMsg.classList.remove('hidden');
                errorMsg.textContent = "Access Denied: Number not authorized.";
            }
        }

        function verifyOTP() {
            const otpInput = document.getElementById('admin-otp').value;
            if (otpInput === MOCK_OTP) {
                switchView('admin-dashboard');
                resetLogin(); // Reset form for next time
            } else {
                alert("Invalid OTP");
            }
        }

        function resetLogin() {
            document.getElementById('phone-step').classList.remove('hidden');
            document.getElementById('otp-step').classList.add('hidden');
            document.getElementById('admin-phone').value = '';
            document.getElementById('admin-otp').value = '';
            document.getElementById('login-error').classList.add('hidden');
        }

        // --- 3. View Management ---
        function switchView(viewId) {
            // Hide all views
            ['booking-view', 'admin-login', 'admin-dashboard'].forEach(id => {
                document.getElementById(id).classList.add('hidden-view');
            });
            // Show selected view
            document.getElementById(viewId).classList.remove('hidden-view');
            // Scroll to top
            window.scrollTo(0, 0);
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
      

<nav className="fixed top-0 w-full z-50 border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-3 cursor-pointer" onclick="switchView('booking-view')">
<div className="flex text-sm font-bold text-zinc-950 tracking-tighter bg-zinc-100 w-8 h-8 rounded-full items-center justify-center" style={{}}>YS</div>
<div className="flex flex-col leading-none">
<span className="text-zinc-100 font-semibold tracking-tight text-sm uppercase">Young Star Saloon</span>
<span className="text-[10px] text-zinc-500 tracking-wide" style={{}}></span>
</div>
</div>
<div className="flex items-center gap-6 text-xs font-medium">
<span className="hidden sm:flex items-center gap-1.5 text-emerald-400">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                    Open Now
                </span>

<button className="flex items-center gap-1 hover:text-zinc-100 transition-colors" onclick="switchView('admin-login')">
<iconify-icon className="" icon="lucide:lock" width="12"></iconify-icon>
<span className="">Staff</span>
</button>
</div>
</div>
</nav>

<main className="flex-grow pt-28 pr-6 pb-20 pl-6 relative">

<div className="max-w-2xl mx-auto space-y-12 fade-in" id="booking-view">

<div className="space-y-4 text-center">
<h1 className="text-4xl sm:text-5xl font-medium tracking-tighter text-zinc-100">
                    Reserve your chair.
                </h1>
<p className="text-base text-zinc-500 max-w-md mx-auto leading-relaxed">
                    Experience precision grooming at Young Star Saloon. Select your seat, services, and secure your spot.
                </p>
</div>
<form className="space-y-10" onsubmit="event.preventDefault();">

<div className="space-y-6">
<div className="flex items-center justify-between border-b border-zinc-800 pb-2">
<h2 className="text-sm font-medium text-zinc-200 uppercase tracking-wider">01. Details &amp; Category</h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs text-zinc-500 ml-1">Full Name</label>
<input className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-zinc-200 focus:outline-none focus:ring-1 focus:ring-zinc-600 focus:border-zinc-600 transition-all placeholder:text-zinc-700" placeholder="Aditya Sharma" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs text-zinc-500 ml-1">Phone Number</label>
<input className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-zinc-200 focus:outline-none focus:ring-1 focus:ring-zinc-600 focus:border-zinc-600 transition-all placeholder:text-zinc-700" placeholder="+91 98765 43210" type="tel"/>
</div>
</div>

<div className="space-y-1.5">
<label className="text-xs text-zinc-500 ml-1">Customer Category (Affects Pricing)</label>
<div className="grid grid-cols-2 bg-zinc-900 p-1 rounded-lg border border-zinc-800 h-[46px]">
<label className="cursor-pointer relative flex-1 text-center">
<input checked="" className="age-radio hidden" name="age_group" onchange="updatePrices('young')" type="radio" value="young"/>
<span className="flex items-center justify-center w-full h-full rounded text-xs font-medium text-zinc-500 transition-all hover:text-zinc-300">Child / Young</span>
</label>
<label className="cursor-pointer relative flex-1 text-center">
<input className="age-radio hidden" name="age_group" onchange="updatePrices('adult')" type="radio" value="adult"/>
<span className="flex items-center justify-center w-full h-full rounded text-xs font-medium text-zinc-500 transition-all hover:text-zinc-300">Adult</span>
</label>
</div>
</div>
</div>

<div className="space-y-6">
<div className="flex items-center justify-between border-b border-zinc-800 pb-2">
<h2 className="text-sm font-medium text-zinc-200 uppercase tracking-wider">02. Select Services</h2>
</div>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-3">

<label className="cursor-pointer group">
<input className="service-checkbox hidden" type="checkbox"/>
<div className="h-full border border-zinc-800 rounded-xl p-4 flex flex-col items-center justify-center gap-3 transition-all duration-200 hover:border-zinc-600 hover:bg-zinc-900">
<iconify-icon className="text-zinc-400 group-hover:text-zinc-100" height="24" icon="lucide:scissors" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-xs font-medium text-zinc-300">Cutting</span>
<span className="text-[10px] text-zinc-500" id="price-cutting">₹80</span>
</div>
</label>

<label className="cursor-pointer group">
<input className="service-checkbox hidden" type="checkbox"/>
<div className="h-full border border-zinc-800 rounded-xl p-4 flex flex-col items-center justify-center gap-3 transition-all duration-200 hover:border-zinc-600 hover:bg-zinc-900">
<iconify-icon className="text-zinc-400 group-hover:text-zinc-100" height="24" icon="lucide:eraser" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-xs font-medium text-zinc-300">Shaving</span>
<span className="text-[10px] text-zinc-500">₹50</span>
</div>
</label>

<label className="cursor-pointer group">
<input className="service-checkbox hidden" type="checkbox"/>
<div className="h-full border border-zinc-800 rounded-xl p-4 flex flex-col items-center justify-center gap-3 transition-all duration-200 hover:border-zinc-600 hover:bg-zinc-900">
<iconify-icon className="text-zinc-400 group-hover:text-zinc-100" height="24" icon="lucide:palette" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-xs font-medium text-zinc-300">Hair Color</span>
<span className="text-[10px] text-zinc-500">₹150</span>
</div>
</label>

<label className="cursor-pointer group">
<input className="service-checkbox hidden" type="checkbox"/>
<div className="h-full border border-zinc-800 rounded-xl p-4 flex flex-col items-center justify-center gap-3 transition-all duration-200 hover:border-zinc-600 hover:bg-zinc-900">
<iconify-icon className="text-zinc-400 group-hover:text-zinc-100" height="24" icon="lucide:sparkles" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-xs font-medium text-zinc-300">Massage</span>
<span className="text-[10px] text-zinc-500">₹200</span>
</div>
</label>
</div>
</div>

<div className="space-y-6">
<div className="flex items-center justify-between border-b border-zinc-800 pb-2">
<h2 className="text-sm font-medium text-zinc-200 uppercase tracking-wider">03. Choose Seat</h2>
</div>
<div className="bg-zinc-900/30 border border-zinc-800 rounded-xl p-6">
<div className="flex justify-between items-center mb-6 px-2">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-sm bg-zinc-800 border border-zinc-700"></div>
<span className="text-[10px] uppercase tracking-wide">Occupied</span>
</div>
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-sm bg-zinc-50 border border-zinc-50"></div>
<span className="text-[10px] uppercase tracking-wide text-zinc-200">Selected</span>
</div>
</div>
<div className="flex sm:gap-8 gap-x-4 gap-y-4 justify-center">
<label className="relative group cursor-pointer">
<input className="seat-radio hidden" name="seat" type="radio"/>
<div className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg border border-zinc-700 bg-zinc-900 flex flex-col items-center justify-center transition-all hover:border-zinc-500">
<span className="text-xs font-medium">01</span>
<iconify-icon className="opacity-50 mt-1" icon="lucide:armchair" width="16"></iconify-icon>
</div>
</label>
<label className="relative group">
<input className="seat-radio hidden" disabled="" name="seat" type="radio"/>
<div className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg border border-zinc-800 bg-zinc-800/50 flex flex-col items-center justify-center transition-all">
<span className="text-xs font-medium text-zinc-600">02</span>
<iconify-icon className="text-zinc-700 mt-1" icon="lucide:armchair" width="16"></iconify-icon>
</div>
</label>
<label className="relative group cursor-pointer">
<input className="seat-radio hidden" name="seat" type="radio"/>
<div className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg border border-zinc-700 bg-zinc-900 flex flex-col items-center justify-center transition-all hover:border-zinc-500">
<span className="text-xs font-medium">03</span>
<iconify-icon className="opacity-50 mt-1" icon="lucide:armchair" width="16"></iconify-icon>
</div>
</label>
</div>
</div>
</div>

<div className="space-y-6">
<div className="flex items-center justify-between border-b border-zinc-800 pb-2">
<h2 className="text-sm font-medium text-zinc-200 uppercase tracking-wider">04. Payment</h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<label className="cursor-pointer relative group">
<input checked="" className="payment-radio hidden" name="payment" type="radio"/>
<div className="h-20 border border-zinc-800 bg-zinc-900 rounded-xl p-4 flex items-center gap-4 transition-all duration-200 hover:border-zinc-700">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-200">
<iconify-icon icon="lucide:qr-code" width="20"></iconify-icon>
</div>
<div className="flex-1">
<span className="block text-xs font-medium text-zinc-200">UPI / QR Code</span>
<span className="block text-[10px] text-zinc-500">GPay, PhonePe</span>
</div>
<iconify-icon className="check-icon opacity-0 transition-opacity text-emerald-400" icon="lucide:check-circle-2" width="18"></iconify-icon>
</div>
</label>
<label className="cursor-pointer relative group">
<input className="payment-radio hidden" name="payment" type="radio"/>
<div className="h-20 border border-zinc-800 bg-zinc-900 rounded-xl p-4 flex items-center gap-4 transition-all duration-200 hover:border-zinc-700">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-200">
<iconify-icon icon="lucide:banknote" width="20"></iconify-icon>
</div>
<div className="flex-1">
<span className="block text-xs font-medium text-zinc-200">Cash</span>
<span className="block text-[10px] text-zinc-500">Pay at counter</span>
</div>
<iconify-icon className="check-icon opacity-0 transition-opacity text-emerald-400" icon="lucide:check-circle-2" width="18"></iconify-icon>
</div>
</label>
</div>
</div>

<button className="w-full bg-zinc-100 text-zinc-950 font-medium text-sm py-4 rounded-lg shadow-lg hover:bg-white transition-all">
                    Confirm Booking
                </button>
</form>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-zinc-900 pt-10 text-xs text-zinc-500">
<div className="space-y-2">
<h3 className="text-zinc-300 font-medium uppercase tracking-wide">Location</h3>
<p className="">Young Star Saloon Near Five Star Hotel, Soraba,Karnataka</p>
</div>
<div className="space-y-2">
<h3 className="uppercase font-medium text-zinc-300 tracking-wide">Hours</h3>
<div className="flex max-w-[150px] justify-between">
<span className="text-zinc-400" style={{}}>8am 9pm</span><span className="">Mon-Sun Sat holiday</span>
</div>
</div>
<div className="space-y-2">
<h3 className="text-zinc-300 font-medium uppercase tracking-wide">Contact</h3>
<p className="" style={{}}>+91 7019497766</p>
</div>
</div>
</div>

<div className="hidden-view max-w-sm mx-auto min-h-[60vh] flex flex-col justify-center fade-in" id="admin-login">
<div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl shadow-2xl backdrop-blur-sm">
<div className="mb-8 text-center">
<div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-4 text-zinc-200">
<iconify-icon className="" icon="lucide:shield-check" width="24"></iconify-icon>
</div>
<h2 className="text-xl font-medium text-zinc-100">Admin Access</h2>
<p className="text-xs text-zinc-500 mt-2">Restricted to Shop Owners Only</p>
</div>
<div className="space-y-4" id="phone-step">
<div className="space-y-1.5">
<label className="text-xs text-zinc-500 ml-1">Registered Phone Number</label>
<input className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-zinc-200 focus:outline-none focus:border-zinc-600 transition-all text-center tracking-widest" id="admin-phone" placeholder="Enter number" type="tel"/>
<p className="text-[10px] text-red-500 hidden" id="login-error">Unauthorized number</p>
</div>
<button className="w-full bg-zinc-100 text-zinc-950 font-medium text-sm py-3 rounded-lg hover:bg-white transition-all" onclick="requestOTP()">
                        Send OTP
                    </button>
</div>
<div className="space-y-4 hidden" id="otp-step">
<div className="space-y-1.5">
<label className="text-xs text-zinc-500 ml-1">Enter Verification Code</label>
<input className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-zinc-200 focus:outline-none focus:border-zinc-600 transition-all text-center tracking-[1em]" id="admin-otp" maxlength="4" placeholder="••••" type="text"/>
</div>
<button className="w-full bg-emerald-500 text-emerald-950 font-medium text-sm py-3 rounded-lg hover:bg-emerald-400 transition-all" onclick="verifyOTP()">
                        Verify &amp; Login
                    </button>
<button className="w-full text-xs text-zinc-500 hover:text-zinc-300 mt-2" onclick="resetLogin()">
                        Change Number
                    </button>
</div>
</div>
<button className="mt-8 text-xs text-zinc-500 hover:text-zinc-300 flex items-center justify-center gap-2" onclick="switchView('booking-view')">
<iconify-icon icon="lucide:arrow-left" width="12"></iconify-icon>
                Back to Booking
            </button>
</div>

<div className="hidden-view max-w-4xl mx-auto space-y-8 fade-in" id="admin-dashboard">
<div className="flex items-center justify-between">
<div>
<h1 className="text-2xl font-medium text-zinc-100">Shop Dashboard</h1>
<p className="text-xs text-zinc-500 mt-1">Young Star Saloon Admin Panel</p>
</div>
<div className="flex items-center gap-3">
<div className="bg-emerald-500/10 text-emerald-500 px-3 py-1 rounded-full text-xs font-medium border border-emerald-500/20">
                        Admin Active
                    </div>
<button className="text-zinc-500 hover:text-zinc-300 text-xs" onclick="switchView('booking-view')">
                        Logout
                    </button>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-xl">
<span className="text-[10px] text-zinc-500 uppercase tracking-wider">Today's Revenue</span>
<div className="text-2xl font-medium text-zinc-100 mt-1">₹3,450</div>
</div>
<div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-xl">
<span className="text-[10px] text-zinc-500 uppercase tracking-wider">Bookings</span>
<div className="text-2xl font-medium text-zinc-100 mt-1">12</div>
</div>
<div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-xl">
<span className="text-[10px] text-zinc-500 uppercase tracking-wider">Pending</span>
<div className="text-2xl font-medium text-emerald-400 mt-1">4</div>
</div>
<div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-xl">
<span className="text-[10px] text-zinc-500 uppercase tracking-wider">Staff Online</span>
<div className="text-2xl font-medium text-zinc-100 mt-1">2</div>
</div>
</div>

<div className="border border-zinc-800 rounded-xl overflow-hidden bg-zinc-900/30">
<div className="px-6 py-4 border-b border-zinc-800 flex justify-between items-center">
<h3 className="text-sm font-medium text-zinc-200">Recent Bookings</h3>
<button className="text-[10px] bg-zinc-800 hover:bg-zinc-700 text-zinc-300 px-2 py-1 rounded transition-colors">Refresh</button>
</div>
<div className="divide-y divide-zinc-800/50">

<div className="px-6 py-4 flex items-center justify-between hover:bg-zinc-900/50 transition-colors">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-medium text-zinc-400">01</div>
<div>
<h4 className="text-sm font-medium text-zinc-200">Rahul Verma</h4>
<p className="text-[10px] text-zinc-500">Cutting + Shaving • UPI</p>
</div>
</div>
<div className="text-right">
<span className="block text-sm font-medium text-zinc-200">₹150</span>
<span className="inline-block text-[10px] text-emerald-400 bg-emerald-950/30 px-1.5 rounded border border-emerald-900/50">Completed</span>
</div>
</div>

<div className="px-6 py-4 flex items-center justify-between hover:bg-zinc-900/50 transition-colors">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-medium text-zinc-400">03</div>
<div>
<h4 className="text-sm font-medium text-zinc-200">Amit Kumar</h4>
<p className="text-[10px] text-zinc-500">Hair Color • Cash</p>
</div>
</div>
<div className="text-right">
<span className="block text-sm font-medium text-zinc-200">₹150</span>
<span className="inline-block text-[10px] text-amber-400 bg-amber-950/30 px-1.5 rounded border border-amber-900/50">Pending</span>
</div>
</div>

<div className="px-6 py-4 flex items-center justify-between hover:bg-zinc-900/50 transition-colors">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-medium text-zinc-400">--</div>
<div>
<h4 className="text-sm font-medium text-zinc-200">Vikram Singh</h4>
<p className="text-[10px] text-zinc-500">Cutting (Child) • UPI</p>
</div>
</div>
<div className="text-right">
<span className="block text-sm font-medium text-zinc-200">₹80</span>
<span className="inline-block text-[10px] text-zinc-500 bg-zinc-900 px-1.5 rounded border border-zinc-800">Waiting</span>
</div>
</div>
</div>
</div>
</div>
</main>
<footer className="border-t border-zinc-900 py-8 text-center text-[10px] text-zinc-700 tracking-tight">
        © 2023 Young Star Saloon. All rights reserved.
    </footer>


    </>
  );
}
