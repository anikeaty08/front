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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            const step1 = document.getElementById('step-1-selection');
            const step2 = document.getElementById('step-2-details');
            const btnContinue = document.getElementById('btn-continue');
            const btnBack = document.getElementById('btn-back');
            const bookingSection = document.getElementById('booking-section');
            const bookingForm = document.getElementById('booking-form');
            const btnComplete = document.getElementById('btn-complete');
            const btnText = document.getElementById('btn-text');
            const btnIcon = document.getElementById('btn-icon');

            btnContinue.addEventListener('click', () => {
                step1.classList.add('hidden');
                step2.classList.remove('hidden');
                bookingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });

            btnBack.addEventListener('click', () => {
                step2.classList.add('hidden');
                step1.classList.remove('hidden');
            });

            bookingForm.addEventListener('submit', (e) => {
                e.preventDefault();

                // 1. Prepare visual loading state
                btnComplete.disabled = true;
                btnComplete.classList.add('opacity-75', 'cursor-not-allowed');
                btnText.textContent = 'Processing...';
                btnIcon.setAttribute('icon', 'solar:refresh-linear');
                btnIcon.classList.add('animate-spin');

                // 2. Gather form data
                const formData = new FormData(bookingForm);
                const dataPayload = Object.fromEntries(formData.entries());

                // 3. IMPORTANT: Place your actual Zapier Webhook URL here
                const zapierWebhookUrl = 'https://hooks.zapier.com/hooks/catch/26997118/unm20lf/';

                // 4. Send the payload
                fetch(zapierWebhookUrl, {
                    method: 'POST',
                    body: JSON.stringify(dataPayload),
                })
                .then(response => {
                    // Render Success Message
                    step2.innerHTML = `
                        <div class="text-center py-16 animate-fade-in">
                            <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-zinc-900 border border-zinc-800 text-white mb-6">
                                <iconify-icon icon="solar:check-circle-bold" width="32"></iconify-icon>
                            </div>
                            <h3 class="text-2xl font-medium tracking-tight text-white mb-3">Booking Confirmed</h3>
                            <p class="text-sm text-zinc-400 max-w-sm mx-auto">
                                Thank you, ${dataPayload.firstName}. Your appointment details have been successfully received. We look forward to seeing you.
                            </p>
                        </div>
                    `;
                })
                .catch(error => {
                    console.error('Submission error:', error);
                    btnComplete.disabled = false;
                    btnComplete.classList.remove('opacity-75', 'cursor-not-allowed');
                    btnText.textContent = 'Error! Try Again';
                    btnIcon.setAttribute('icon', 'solar:close-circle-linear');
                    btnIcon.classList.remove('animate-spin');
                });
            });
        });
    
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
      
<div className="absolute inset-0 z-0 pointer-events-none" style={{background: 'radial-gradient(circle at 50% 0%, rgba(39, 39, 42, 0.4) 0%, transparent 50%)'}}></div>
<header className="relative z-10 w-full border-b border-zinc-900/50 bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-xl font-semibold tracking-tighter text-white flex items-center gap-2" href="#">
<iconify-icon className="text-zinc-400" icon="solar:scissors-linear"></iconify-icon>
                BLADE
            </a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#team">Barbers</a>
<a className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#location">Location</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden sm:inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-300 disabled:pointer-events-none disabled:opacity-50 bg-white text-zinc-950 hover:bg-zinc-200 h-9 px-4 rounded-md shadow-sm" href="#booking-section">
                    Book Appointment
                </a>
<button className="md:hidden text-zinc-400 hover:text-white">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</header>
<main className="flex-1 relative z-10 w-full max-w-6xl mx-auto px-6 py-12 md:py-24">
<div className="max-w-2xl mx-auto text-center mb-16 md:mb-24">
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-6">
                Precision cuts.<br/>Modern aesthetic.
            </h1>
<p className="text-base md:text-lg text-zinc-400 font-normal leading-relaxed mb-8">
                Experience expert grooming in a minimalist space designed for clarity and comfort. Schedule your next visit seamlessly.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-300 bg-white text-zinc-950 hover:bg-zinc-200 h-10 px-6 rounded-md shadow-sm gap-2" href="#booking-section">
                    Start Booking
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-300 bg-transparent text-zinc-300 hover:bg-zinc-900 border border-zinc-800 h-10 px-6 rounded-md gap-2" href="#services">
                    View Menu
                </a>
</div>
</div>
<section className="max-w-3xl mx-auto" id="booking-section">
<div className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 md:p-8 backdrop-blur-sm shadow-2xl overflow-hidden relative">
<form id="booking-form">
<div className="space-y-10 transition-opacity duration-300 ease-in-out" id="step-1-selection">
<div className="mb-8">
<h2 className="text-2xl font-medium tracking-tight text-white mb-1">Schedule Appointment</h2>
<p className="text-sm text-zinc-500">Select your preferences below to secure your time.</p>
</div>
<div>
<div className="flex items-center justify-between mb-4">
<h3 className="text-lg font-medium tracking-tight text-zinc-200 flex items-center gap-2">
<span className="flex items-center justify-center w-6 h-6 rounded-full bg-zinc-800 text-xs text-zinc-400 font-medium">1</span>
                                    Select Service
                                </h3>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<label className="relative cursor-pointer group">
<input checked="" className="peer sr-only" name="service" type="radio" value="Signature Haircut"/>
<div className="p-4 rounded-xl border border-zinc-800 bg-zinc-950/50 peer-checked:border-white peer-checked:bg-zinc-900 transition-all hover:border-zinc-700">
<div className="flex justify-between items-start mb-2">
<span className="font-medium text-sm text-zinc-100">Signature Haircut</span>
<span className="text-sm font-medium text-white">$45</span>
</div>
<p className="text-xs text-zinc-500 font-normal leading-relaxed">Precision cut, styling, and a hot towel finish. Approx 45 mins.</p>
<div className="absolute top-4 right-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity">
<iconify-icon icon="solar:check-circle-bold" width="20"></iconify-icon>
</div>
</div>
</label>
<label className="relative cursor-pointer group">
<input className="peer sr-only" name="service" type="radio" value="Hair &amp; Beard"/>
<div className="p-4 rounded-xl border border-zinc-800 bg-zinc-950/50 peer-checked:border-white peer-checked:bg-zinc-900 transition-all hover:border-zinc-700">
<div className="flex justify-between items-start mb-2">
<span className="font-medium text-sm text-zinc-100">Hair &amp; Beard</span>
<span className="text-sm font-medium text-white">$65</span>
</div>
<p className="text-xs text-zinc-500 font-normal leading-relaxed">Full haircut and detailed beard sculpting with straight razor.</p>
<div className="absolute top-4 right-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity">
<iconify-icon icon="solar:check-circle-bold" width="20"></iconify-icon>
</div>
</div>
</label>
<label className="relative cursor-pointer group">
<input className="peer sr-only" name="service" type="radio" value="Buzz Cut"/>
<div className="p-4 rounded-xl border border-zinc-800 bg-zinc-950/50 peer-checked:border-white peer-checked:bg-zinc-900 transition-all hover:border-zinc-700">
<div className="flex justify-between items-start mb-2">
<span className="font-medium text-sm text-zinc-100">Buzz Cut</span>
<span className="text-sm font-medium text-white">$25</span>
</div>
<p className="text-xs text-zinc-500 font-normal leading-relaxed">One length all over, clean line up. Quick and sharp.</p>
<div className="absolute top-4 right-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity">
<iconify-icon icon="solar:check-circle-bold" width="20"></iconify-icon>
</div>
</div>
</label>
<label className="relative cursor-pointer group">
<input className="peer sr-only" name="service" type="radio" value="Beard Trim"/>
<div className="p-4 rounded-xl border border-zinc-800 bg-zinc-950/50 peer-checked:border-white peer-checked:bg-zinc-900 transition-all hover:border-zinc-700">
<div className="flex justify-between items-start mb-2">
<span className="font-medium text-sm text-zinc-100">Beard Trim</span>
<span className="text-sm font-medium text-white">$30</span>
</div>
<p className="text-xs text-zinc-500 font-normal leading-relaxed">Shaping, trimming, and conditioning with premium oils.</p>
<div className="absolute top-4 right-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity">
<iconify-icon icon="solar:check-circle-bold" width="20"></iconify-icon>
</div>
</div>
</label>
</div>
</div>
<div>
<h3 className="text-lg font-medium tracking-tight text-zinc-200 flex items-center gap-2 mb-4">
<span className="flex items-center justify-center w-6 h-6 rounded-full bg-zinc-800 text-xs text-zinc-400 font-medium">2</span>
                                Choose Barber
                            </h3>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
<label className="relative cursor-pointer">
<input checked="" className="peer sr-only" name="barber" type="radio" value="Anyone"/>
<div className="flex flex-col items-center p-3 rounded-lg border border-zinc-800 bg-zinc-950/50 peer-checked:border-white peer-checked:bg-zinc-900 transition-all hover:border-zinc-700 text-center">
<div className="w-12 h-12 rounded-full bg-zinc-800 mb-2 flex items-center justify-center text-zinc-500 overflow-hidden">
<iconify-icon icon="solar:user-linear" width="24"></iconify-icon>
</div>
<span className="text-sm font-medium text-zinc-200">Anyone</span>
<span className="text-xs text-zinc-500 mt-1">First available</span>
</div>
</label>
<label className="relative cursor-pointer">
<input className="peer sr-only" name="barber" type="radio" value="Marcus"/>
<div className="flex flex-col items-center p-3 rounded-lg border border-zinc-800 bg-zinc-950/50 peer-checked:border-white peer-checked:bg-zinc-900 transition-all hover:border-zinc-700 text-center">
<div className="w-12 h-12 rounded-full bg-zinc-800 mb-2 overflow-hidden border border-zinc-700">
<img alt="Marcus" className="w-full h-full object-cover grayscale opacity-80" src="https://i.pravatar.cc/100?img=11"/>
</div>
<span className="text-sm font-medium text-zinc-200">Marcus</span>
<span className="text-xs text-zinc-500 mt-1">Master Barber</span>
</div>
</label>
<label className="relative cursor-pointer">
<input className="peer sr-only" name="barber" type="radio" value="Julian"/>
<div className="flex flex-col items-center p-3 rounded-lg border border-zinc-800 bg-zinc-950/50 peer-checked:border-white peer-checked:bg-zinc-900 transition-all hover:border-zinc-700 text-center">
<div className="w-12 h-12 rounded-full bg-zinc-800 mb-2 overflow-hidden border border-zinc-700">
<img alt="Julian" className="w-full h-full object-cover grayscale opacity-80" src="https://i.pravatar.cc/100?img=33"/>
</div>
<span className="text-sm font-medium text-zinc-200">Julian</span>
<span className="text-xs text-zinc-500 mt-1">Stylist</span>
</div>
</label>
<label className="relative cursor-pointer">
<input className="peer sr-only" name="barber" type="radio" value="David"/>
<div className="flex flex-col items-center p-3 rounded-lg border border-zinc-800 bg-zinc-950/50 peer-checked:border-white peer-checked:bg-zinc-900 transition-all hover:border-zinc-700 text-center">
<div className="w-12 h-12 rounded-full bg-zinc-800 mb-2 overflow-hidden border border-zinc-700">
<img alt="David" className="w-full h-full object-cover grayscale opacity-80" src="https://i.pravatar.cc/100?img=59"/>
</div>
<span className="text-sm font-medium text-zinc-200">David</span>
<span className="text-xs text-zinc-500 mt-1">Specialist</span>
</div>
</label>
</div>
</div>
<div>
<h3 className="text-lg font-medium tracking-tight text-zinc-200 flex items-center gap-2 mb-4">
<span className="flex items-center justify-center w-6 h-6 rounded-full bg-zinc-800 text-xs text-zinc-400 font-medium">3</span>
                                Date &amp; Time
                            </h3>
<div className="mb-4">
<div className="flex items-center gap-2 mb-2">
<span className="text-xs font-medium text-zinc-400 uppercase tracking-widest">October 2024</span>
</div>
<div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
<label className="cursor-pointer shrink-0">
<input checked="" className="peer sr-only" name="date" type="radio" value="2024-10-24"/>
<div className="w-14 h-16 rounded-xl border border-zinc-800 bg-zinc-950/50 flex flex-col items-center justify-center peer-checked:border-white peer-checked:bg-zinc-900 peer-checked:text-white text-zinc-400 transition-all hover:border-zinc-700">
<span className="text-xs font-medium mb-0.5">Thu</span>
<span className="text-base font-semibold tracking-tight text-zinc-200 peer-checked:text-white">24</span>
</div>
</label>
<label className="cursor-pointer shrink-0">
<input className="peer sr-only" name="date" type="radio" value="2024-10-25"/>
<div className="w-14 h-16 rounded-xl border border-zinc-800 bg-zinc-950/50 flex flex-col items-center justify-center peer-checked:border-white peer-checked:bg-zinc-900 peer-checked:text-white text-zinc-400 transition-all hover:border-zinc-700">
<span className="text-xs font-medium mb-0.5">Fri</span>
<span className="text-base font-semibold tracking-tight text-zinc-200 peer-checked:text-white">25</span>
</div>
</label>
<label className="cursor-pointer shrink-0 opacity-50 cursor-not-allowed">
<input className="peer sr-only" disabled="" name="date" type="radio" value="2024-10-26"/>
<div className="w-14 h-16 rounded-xl border border-zinc-800/50 bg-zinc-950/20 flex flex-col items-center justify-center text-zinc-600">
<span className="text-xs font-medium mb-0.5">Sat</span>
<span className="text-base font-semibold tracking-tight">26</span>
</div>
</label>
<label className="cursor-pointer shrink-0">
<input className="peer sr-only" name="date" type="radio" value="2024-10-27"/>
<div className="w-14 h-16 rounded-xl border border-zinc-800 bg-zinc-950/50 flex flex-col items-center justify-center peer-checked:border-white peer-checked:bg-zinc-900 peer-checked:text-white text-zinc-400 transition-all hover:border-zinc-700">
<span className="text-xs font-medium mb-0.5">Sun</span>
<span className="text-base font-semibold tracking-tight text-zinc-200 peer-checked:text-white">27</span>
</div>
</label>
<label className="cursor-pointer shrink-0">
<input className="peer sr-only" name="date" type="radio" value="2024-10-28"/>
<div className="w-14 h-16 rounded-xl border border-zinc-800 bg-zinc-950/50 flex flex-col items-center justify-center peer-checked:border-white peer-checked:bg-zinc-900 peer-checked:text-white text-zinc-400 transition-all hover:border-zinc-700">
<span className="text-xs font-medium mb-0.5">Mon</span>
<span className="text-base font-semibold tracking-tight text-zinc-200 peer-checked:text-white">28</span>
</div>
</label>
</div>
</div>
<div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
<label className="cursor-pointer">
<input className="peer sr-only" name="time" type="radio" value="09:00 AM"/>
<div className="text-center py-2.5 text-xs font-medium rounded-md border border-zinc-800 bg-zinc-950/50 text-zinc-400 peer-checked:border-white peer-checked:text-zinc-900 peer-checked:bg-white transition-all hover:border-zinc-600">
                                        09:00 AM
                                    </div>
</label>
<label className="cursor-pointer">
<input checked="" className="peer sr-only" name="time" type="radio" value="10:30 AM"/>
<div className="text-center py-2.5 text-xs font-medium rounded-md border border-zinc-800 bg-zinc-950/50 text-zinc-400 peer-checked:border-white peer-checked:text-zinc-900 peer-checked:bg-white transition-all hover:border-zinc-600">
                                        10:30 AM
                                    </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="time" type="radio" value="11:15 AM"/>
<div className="text-center py-2.5 text-xs font-medium rounded-md border border-zinc-800 bg-zinc-950/50 text-zinc-400 peer-checked:border-white peer-checked:text-zinc-900 peer-checked:bg-white transition-all hover:border-zinc-600">
                                        11:15 AM
                                    </div>
</label>
<label className="cursor-not-allowed opacity-40">
<input className="peer sr-only" disabled="" name="time" type="radio" value="01:00 PM"/>
<div className="text-center py-2.5 text-xs font-medium rounded-md border border-zinc-800/50 bg-zinc-950/20 text-zinc-500">
                                        01:00 PM
                                    </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="time" type="radio" value="02:30 PM"/>
<div className="text-center py-2.5 text-xs font-medium rounded-md border border-zinc-800 bg-zinc-950/50 text-zinc-400 peer-checked:border-white peer-checked:text-zinc-900 peer-checked:bg-white transition-all hover:border-zinc-600">
                                        02:30 PM
                                    </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="time" type="radio" value="04:00 PM"/>
<div className="text-center py-2.5 text-xs font-medium rounded-md border border-zinc-800 bg-zinc-950/50 text-zinc-400 peer-checked:border-white peer-checked:text-zinc-900 peer-checked:bg-white transition-all hover:border-zinc-600">
                                        04:00 PM
                                    </div>
</label>
</div>
</div>
<div className="pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="text-sm text-zinc-400 flex flex-col sm:block text-center sm:text-left">
<span className="text-white font-medium block sm:inline">Signature Haircut</span> with <span className="text-white font-medium block sm:inline">Anyone</span><br className="sm:hidden"/>
                                on <span className="text-white font-medium block sm:inline">Thu, Oct 24</span> at <span className="text-white font-medium block sm:inline">10:30 AM</span>
</div>
<button className="w-full sm:w-auto inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-300 bg-white text-zinc-950 hover:bg-zinc-200 h-10 px-8 rounded-md shadow-sm" id="btn-continue" type="button">
                                Confirm Booking
                            </button>
</div>
</div>
<div className="hidden space-y-8 transition-opacity duration-300 ease-in-out" id="step-2-details">
<div className="mb-8">
<button className="text-sm text-zinc-400 hover:text-white transition-colors flex items-center gap-1.5 mb-6" id="btn-back" type="button">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
                                Back
                            </button>
<h2 className="text-2xl font-medium tracking-tight text-white mb-1">Your Details</h2>
<p className="text-sm text-zinc-500">Almost there. Provide your information to secure the appointment.</p>
</div>
<div className="p-4 rounded-xl border border-zinc-800 bg-zinc-950/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
<div>
<h4 className="text-sm font-medium text-white mb-1">Signature Haircut</h4>
<p className="text-xs text-zinc-400">Thu, Oct 24 at 10:30 AM with Anyone</p>
</div>
<span className="text-sm font-medium text-white px-3 py-1 bg-zinc-800 rounded-md">$45</span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="block text-xs font-medium text-zinc-400" htmlFor="firstName">First Name</label>
<input className="w-full bg-zinc-950/50 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all" id="firstName" name="firstName" placeholder="John" required="" type="text"/>
</div>
<div className="space-y-1.5">
<label className="block text-xs font-medium text-zinc-400" htmlFor="lastName">Last Name</label>
<input className="w-full bg-zinc-950/50 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all" id="lastName" name="lastName" placeholder="Doe" required="" type="text"/>
</div>
<div className="space-y-1.5 sm:col-span-2">
<label className="block text-xs font-medium text-zinc-400" htmlFor="email">Email Address</label>
<input className="w-full bg-zinc-950/50 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all" id="email" name="email" placeholder="john@example.com" required="" type="email"/>
</div>
<div className="space-y-1.5 sm:col-span-2">
<label className="block text-xs font-medium text-zinc-400" htmlFor="phone">Phone Number</label>
<input className="w-full bg-zinc-950/50 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all" id="phone" name="phone" placeholder="(555) 000-0000" required="" type="tel"/>
</div>
<div className="space-y-1.5 sm:col-span-2 pt-2">
<label className="flex items-start gap-3 cursor-pointer group">
<div className="relative flex items-center justify-center mt-0.5">
<input className="peer sr-only" name="agreed_to_policy" required="" type="checkbox" value="Yes"/>
<div className="w-4 h-4 rounded border border-zinc-700 bg-zinc-950 peer-checked:bg-white peer-checked:border-white transition-colors"></div>
<iconify-icon className="absolute text-zinc-950 opacity-0 peer-checked:opacity-100 transition-opacity" icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<span className="text-xs text-zinc-400 font-normal leading-relaxed group-hover:text-zinc-300 transition-colors">
                                        I agree to the cancellation policy. Cancellations must be made 24 hours in advance to avoid a fee.
                                    </span>
</label>
</div>
</div>
<div className="pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-end gap-3">
<button className="w-full sm:w-auto inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-300 bg-white text-zinc-950 hover:bg-zinc-200 h-10 px-8 rounded-md shadow-sm gap-2" id="btn-complete" type="submit">
<span id="btn-text">Complete Appointment</span>
<iconify-icon icon="solar:check-circle-linear" id="btn-icon" width="18"></iconify-icon>
</button>
</div>
</div>
</form>
</div>
</section>
</main>
<footer className="border-t border-zinc-900 bg-zinc-950 mt-12 relative z-10">
<div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-start gap-8">
<div>
<a className="text-lg font-semibold tracking-tighter text-zinc-300 flex items-center gap-2 mb-4" href="#">
<iconify-icon icon="solar:scissors-linear"></iconify-icon>
                    BLADE
                </a>
<p className="text-sm text-zinc-500 max-w-xs">
                    Redefining the modern barbershop experience. Precision, consistency, and a moment of pause.
                </p>
</div>
<div className="grid grid-cols-2 gap-12 sm:gap-24">
<div className="flex flex-col gap-3">
<span className="text-xs font-semibold text-zinc-100 uppercase tracking-widest mb-1">Hours</span>
<span className="text-sm text-zinc-500">Mon - Fri: 9am - 7pm</span>
<span className="text-sm text-zinc-500">Saturday: 10am - 5pm</span>
<span className="text-sm text-zinc-600">Sunday: Closed</span>
</div>
<div className="flex flex-col gap-3">
<span className="text-xs font-semibold text-zinc-100 uppercase tracking-widest mb-1">Contact</span>
<a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">123 Minimal Ave, NY</a>
<a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">hello@blade.studio</a>
<a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">+1 (555) 000-0000</a>
</div>
</div>
</div>
<div className="max-w-6xl mx-auto px-6 py-6 border-t border-zinc-900 flex flex-col sm:flex-row justify-between items-center gap-4">
<p className="text-xs text-zinc-600">© 2024 BLADE Studio. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-zinc-600 hover:text-zinc-300 transition-colors" href="#">
<iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon>
</a>
<a className="text-zinc-600 hover:text-zinc-300 transition-colors" href="#">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</footer>


    </>
  );
}
