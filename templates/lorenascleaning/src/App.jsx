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



      // Simple Single Page Application Router
      function switchView(viewName) {
          // Hide all views
          const views = ['home', 'client', 'admin', 'book-clean'];
          views.forEach(v => {
              const el = document.getElementById('view-' + v);
              if (el) el.classList.add('hidden');
          });

          // Show selected view
          const selected = document.getElementById('view-' + viewName);
          if (selected) {
              selected.classList.remove('hidden');
              // Re-trigger fade animation
              selected.classList.remove('fade-in');
              void selected.offsetWidth; // trigger reflow
              selected.classList.add('fade-in');
          }

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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-semibold tracking-tight text-gray-900 uppercase" href="#" onclick="switchView('home')">
          Lorena's
        </a>
<div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-500">
<a className="hover:text-gray-900 transition-colors" href="#services">
            Services
          </a>
<a className="hover:text-gray-900 transition-colors" href="#process">
            Process
          </a>
<a className="hover:text-gray-900 transition-colors" href="#contact">
            Quote
          </a>
</div>
<div className="flex items-center gap-3">
<button className="hidden md:flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 px-3 py-2 rounded-lg transition-colors" onclick="switchView('client')">
<span className="iconify" data-icon="lucide:user" data-width="16"></span>
            Client Portal
          </button>
<button className="bg-gray-900 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors shadow-sm flex items-center gap-2" onclick="switchView('admin')">
<span className="iconify" data-icon="lucide:layout-dashboard" data-width="16"></span>
<span>Admin</span>
</button>
</div>
</div>
</nav>

<main className="pt-24 pb-20 fade-in" id="view-home">

<section className="max-w-7xl mx-auto px-6 mb-24">
<div className="max-w-3xl pt-12 pb-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 border border-gray-200 mb-6">
<span className="iconify text-emerald-600" data-icon="lucide:shield-check" data-width="14"></span>
<span className="text-xs font-medium text-gray-600 uppercase tracking-wide">
              Fully Licensed &amp; Insured
            </span>
</div>
<h1 className="text-5xl md:text-6xl font-medium tracking-tight text-gray-900 mb-6 leading-[1.1]">
            Immaculate spaces,
            <br/>
            effortless living.
          </h1>
<p className="text-xl text-gray-500 font-light leading-relaxed mb-8 max-w-xl">
            Premium residential and commercial cleaning services tailored to
            your schedule. We handle the details so you can focus on what
            matters.
          </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center bg-gray-900 text-white px-6 py-3.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition-all shadow-sm" href="#contact">
              Request a Quote
            </a>
<a className="inline-flex justify-center items-center bg-white text-gray-700 border border-gray-200 px-6 py-3.5 rounded-lg text-sm font-medium hover:bg-gray-50 transition-all" href="#services">
              Explore Services
            </a>
</div>
</div>

<div className="w-full h-64 md:h-96 bg-gray-100 rounded-2xl border border-gray-200 overflow-hidden relative">
<div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
<div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-gray-50 to-transparent"></div>
<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
<span className="iconify text-gray-300" data-icon="lucide:sparkles" data-width="64"></span>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-16 border-t border-gray-100" id="services">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
<div>
<h2 className="text-2xl font-medium tracking-tight text-gray-900 mb-2">
              Our Expertise
            </h2>
<p className="text-gray-500">
              Comprehensive cleaning solutions for every need.
            </p>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group p-6 rounded-xl border border-gray-200 bg-white hover:border-gray-300 transition-all hover:shadow-sm">
<div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center mb-4 text-gray-900">
<span className="iconify" data-icon="lucide:home" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-gray-900 mb-2">Residential</h3>
<p className="text-sm text-gray-500 leading-relaxed mb-4">
              Deep cleaning for homes, condos, and apartments. Weekly,
              bi-weekly, or monthly schedules available.
            </p>
<ul className="space-y-2 mb-4">
<li className="flex items-center gap-2 text-xs text-gray-500">
<span className="iconify text-emerald-500" data-icon="lucide:check" data-width="12"></span>
                Kitchen &amp; Bath Sanitization
              </li>
<li className="flex items-center gap-2 text-xs text-gray-500">
<span className="iconify text-emerald-500" data-icon="lucide:check" data-width="12"></span>
                Dusting &amp; Vacuuming
              </li>
</ul>
</div>

<div className="group p-6 rounded-xl border border-gray-200 bg-white hover:border-gray-300 transition-all hover:shadow-sm">
<div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center mb-4 text-gray-900">
<span className="iconify" data-icon="lucide:building-2" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-gray-900 mb-2">Commercial</h3>
<p className="text-sm text-gray-500 leading-relaxed mb-4">
              Professional office maintenance to ensure a productive
              environment. After-hours service available.
            </p>
<ul className="space-y-2 mb-4">
<li className="flex items-center gap-2 text-xs text-gray-500">
<span className="iconify text-emerald-500" data-icon="lucide:check" data-width="12"></span>
                Common Area Maintenance
              </li>
<li className="flex items-center gap-2 text-xs text-gray-500">
<span className="iconify text-emerald-500" data-icon="lucide:check" data-width="12"></span>
                Waste Management
              </li>
</ul>
</div>

<div className="group p-6 rounded-xl border border-gray-200 bg-white hover:border-gray-300 transition-all hover:shadow-sm">
<div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center mb-4 text-gray-900">
<span className="iconify" data-icon="lucide:hammer" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-gray-900 mb-2">
              Post-Construction
            </h3>
<p className="text-sm text-gray-500 leading-relaxed mb-4">
              Detailed debris removal and fine dust cleaning for newly renovated
              or built spaces.
            </p>
<ul className="space-y-2 mb-4">
<li className="flex items-center gap-2 text-xs text-gray-500">
<span className="iconify text-emerald-500" data-icon="lucide:check" data-width="12"></span>
                Paint Spot Removal
              </li>
<li className="flex items-center gap-2 text-xs text-gray-500">
<span className="iconify text-emerald-500" data-icon="lucide:check" data-width="12"></span>
                Window Detailing
              </li>
</ul>
</div>
</div>
</section>

<section className="max-w-3xl mx-auto px-6 py-20" id="contact">
<div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
<div className="text-center mb-8">
<h2 className="text-2xl font-medium tracking-tight text-gray-900">
              Get an Estimate
            </h2>
<p className="text-sm text-gray-500 mt-2">
              Tell us about your space and we'll be in touch.
            </p>
</div>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-medium text-gray-700">
                  First Name
                </label>
<input className="w-full h-10 px-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/5 focus:border-gray-400 transition-all" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-gray-700">
                  Last Name
                </label>
<input className="w-full h-10 px-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/5 focus:border-gray-400 transition-all" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-gray-700">
                Email Address
              </label>
<input className="w-full h-10 px-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/5 focus:border-gray-400 transition-all" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-gray-700">
                Service Type
              </label>
<div className="relative">
<select className="w-full h-10 px-3 bg-gray-50 border border-gray-200 rounded-lg text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-gray-900/5 focus:border-gray-400 transition-all">
<option>Residential Cleaning</option>
<option>Commercial Cleaning</option>
<option>Post-Construction</option>
</select>
<span className="iconify absolute right-3 top-3 text-gray-400 pointer-events-none" data-icon="lucide:chevron-down" data-width="16"></span>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-gray-700">Frequency</label>
<div className="flex gap-3 mt-1">
<label className="flex items-center gap-2 cursor-pointer group">
<input className="peer sr-only" name="freq" type="radio"/>
<div className="w-4 h-4 rounded-full border border-gray-300 peer-checked:border-gray-900 peer-checked:bg-gray-900 relative"></div>
<span className="text-sm text-gray-500 group-hover:text-gray-900">
                    Weekly
                  </span>
</label>
<label className="flex items-center gap-2 cursor-pointer group">
<input className="peer sr-only" name="freq" type="radio"/>
<div className="w-4 h-4 rounded-full border border-gray-300 peer-checked:border-gray-900 peer-checked:bg-gray-900 relative"></div>
<span className="text-sm text-gray-500 group-hover:text-gray-900">
                    Bi-Weekly
                  </span>
</label>
</div>
</div>
<button className="w-full bg-gray-900 text-white font-medium text-sm h-10 rounded-lg hover:bg-gray-800 transition-all mt-4" type="submit">
              Submit Request
            </button>
</form>
</div>
</section>
<footer className="border-t border-gray-200 py-12 text-center bg-white">
<p className="text-xs text-gray-400 uppercase tracking-widest mb-2">
          Lorena's Cleaning Service
        </p>
<p className="text-sm text-gray-500">
          © 2023. Licensed &amp; Insured. All rights reserved.
        </p>
</footer>
</main>

<main className="hidden pt-24 pb-20 fade-in min-h-screen" id="view-client">
<div className="max-w-5xl mx-auto px-6">
<div className="flex items-center justify-between mb-8">
<div>
<h1 className="text-2xl font-medium tracking-tight text-gray-900">
              Good Morning, Sarah
            </h1>
<p className="text-sm text-gray-500">
              Here is your upcoming cleaning schedule.
            </p>
</div>
<div className="flex items-center gap-3">
<button className="hidden sm:flex items-center gap-2 bg-gray-900 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors shadow-sm" onclick="switchView('book-clean')">
<span className="iconify" data-icon="lucide:plus" data-width="16"></span>
<span>Book New Clean</span>
</button>
<div className="h-10 w-10 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-medium text-sm border border-emerald-200">
              SJ
            </div>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="md:col-span-2 bg-white rounded-xl border border-gray-200 p-6 shadow-sm relative overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-10">
<span className="iconify" data-icon="lucide:calendar-clock" data-width="120"></span>
</div>
<div className="relative z-10">
<div className="flex items-center justify-between mb-6">
<div>
<h2 className="text-lg font-semibold text-gray-900 tracking-tight">
                    Your Cleaning Schedule
                  </h2>
<p className="text-sm text-gray-500">
                    Upcoming sessions and pricing.
                  </p>
</div>
<span className="bg-emerald-50 text-emerald-700 text-xs font-medium px-2.5 py-1 rounded-full border border-emerald-100">
                  Active
                </span>
</div>

<div className="bg-gray-50 rounded-xl p-5 border border-gray-100 mb-6">
<div className="flex justify-between items-start mb-4">
<div>
<p className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">
                      Next Service
                    </p>
<h3 className="text-2xl font-semibold text-gray-900 tracking-tight">
                      Tue, Oct 24
                    </h3>
<p className="text-sm text-gray-500 font-medium mt-1">
                      10:00 AM - 1:00 PM
                    </p>
</div>
<div className="text-right">
<p className="text-xl font-semibold text-gray-900 tracking-tight">
                      $180.00
                    </p>
<p className="text-xs text-gray-500">Standard Clean</p>
</div>
</div>
<div className="flex items-center gap-3 pt-4 border-t border-gray-200/50">
<div className="flex items-center gap-2 text-sm text-gray-600">
<span className="iconify" data-icon="lucide:user" data-width="14"></span>
<span>Team A (Lorena)</span>
</div>
<div className="flex-1"></div>
<button className="text-xs font-medium bg-white border border-gray-200 text-gray-700 px-3 py-1.5 rounded hover:bg-gray-50 transition-colors">
                    Reschedule
                  </button>
</div>
</div>

<div className="space-y-1">
<p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-2 pl-1">
                  Future Bookings
                </p>
<div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors border border-transparent hover:border-gray-100 group">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 group-hover:bg-white group-hover:shadow-sm transition-all">
<span className="iconify" data-icon="lucide:calendar" data-width="14"></span>
</div>
<div>
<p className="text-sm font-medium text-gray-900">
                        Tue, Nov 07
                      </p>
<p className="text-xs text-gray-500">Standard Clean</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-medium text-gray-900">$180.00</p>
</div>
</div>
<div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors border border-transparent hover:border-gray-100 group">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 group-hover:bg-white group-hover:shadow-sm transition-all">
<span className="iconify" data-icon="lucide:calendar" data-width="14"></span>
</div>
<div>
<p className="text-sm font-medium text-gray-900">
                        Tue, Nov 21
                      </p>
<p className="text-xs text-gray-500">Standard Clean</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-medium text-gray-900">$180.00</p>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm flex flex-col">
<h3 className="text-sm font-medium text-gray-900 mb-4">
              Recent History
            </h3>
<div className="space-y-4 flex-1">

<div className="flex justify-between items-center pb-3 border-b border-gray-50 last:border-0">
<div>
<p className="text-sm font-medium text-gray-800">Oct 10, 2023</p>
<p className="text-xs text-gray-400">Standard Clean</p>
</div>
<div className="text-right">
<p className="text-sm font-medium text-gray-600">$180.00</p>
<span className="text-[10px] text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100">
                    Paid
                  </span>
</div>
</div>

<div className="flex justify-between items-center pb-3 border-b border-gray-50 last:border-0">
<div>
<p className="text-sm font-medium text-gray-800">Sep 26, 2023</p>
<p className="text-xs text-gray-400">Standard Clean</p>
</div>
<div className="text-right">
<p className="text-sm font-medium text-gray-600">$180.00</p>
<span className="text-[10px] text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100">
                    Paid
                  </span>
</div>
</div>
</div>
<button className="w-full mt-4 text-xs text-gray-500 hover:text-gray-900 flex justify-center items-center gap-1 transition-colors">
              View All Invoices
              <span className="iconify" data-icon="lucide:arrow-right" data-width="12"></span>
</button>
</div>
</div>
</div>
</main>
<main className="hidden pt-24 pb-20 fade-in min-h-screen" id="view-book-clean">
<div className="max-w-3xl mx-auto px-6">
<button className="group flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 mb-8 transition-colors" onclick="switchView('client')">
<span className="iconify group-hover:-translate-x-1 transition-transform" data-icon="lucide:arrow-left" data-width="16"></span>
          Back to Portal
        </button>
<div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
<div className="mb-8">
<h1 className="text-2xl font-medium tracking-tight text-gray-900">
              Customize Your Clean
            </h1>
<p className="text-sm text-gray-500 mt-2">
              Select your preferences and schedule a time.
            </p>
</div>
<form className="space-y-6">

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-1.5">
<label className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                  Date
                </label>
<div className="relative">
<input className="w-full h-11 px-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/5 focus:border-gray-400 transition-all text-gray-600" type="date"/>
<span className="iconify absolute right-3 top-3 text-gray-400 pointer-events-none" data-icon="lucide:calendar" data-width="18"></span>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                  Preferred Time
                </label>
<div className="relative">
<select className="w-full h-11 px-3 bg-gray-50 border border-gray-200 rounded-lg text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-gray-900/5 focus:border-gray-400 transition-all text-gray-600">
<option>Morning (8AM - 11AM)</option>
<option>Mid-Day (11AM - 2PM)</option>
<option>Afternoon (2PM - 5PM)</option>
</select>
<span className="iconify absolute right-3 top-3 text-gray-400 pointer-events-none" data-icon="lucide:chevron-down" data-width="18"></span>
</div>
</div>
</div>

<div className="space-y-1.5">
<label className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                Service Type
              </label>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
<label className="cursor-pointer">
<input checked="" className="peer sr-only" name="service_type" type="radio"/>
<div className="px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 peer-checked:bg-gray-900 peer-checked:text-white peer-checked:border-gray-900 transition-all text-center">
<span className="text-sm font-medium">Standard</span>
</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="service_type" type="radio"/>
<div className="px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 peer-checked:bg-gray-900 peer-checked:text-white peer-checked:border-gray-900 transition-all text-center">
<span className="text-sm font-medium">Deep Clean</span>
</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="service_type" type="radio"/>
<div className="px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 peer-checked:bg-gray-900 peer-checked:text-white peer-checked:border-gray-900 transition-all text-center">
<span className="text-sm font-medium">Move-In/Out</span>
</div>
</label>
</div>
</div>

<div className="space-y-1.5">
<label className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                Notes &amp; Reminders
              </label>
<p className="text-xs text-gray-400 mb-2">
                Text the owner about specific focus areas, gate codes, or pets.
              </p>
<textarea className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/5 focus:border-gray-400 transition-all placeholder:text-gray-400" placeholder="e.g., Please focus on the guest bathroom showers. The dog will be in the backyard." rows="4"></textarea>
</div>
<div className="pt-4 flex items-center justify-end gap-4">
<button className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" onclick="switchView('client')" type="button">
                Cancel
              </button>
<button className="bg-gray-900 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition-all shadow-sm flex items-center gap-2" onclick="switchView('client')" type="button">
<span>Request Booking</span>
<span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
</div>
</form>
</div>
</div>
</main>

<main className="hidden pt-20 h-screen flex flex-col fade-in bg-gray-50" id="view-admin">
<div className="flex-1 flex overflow-hidden">

<aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col">
<div className="p-6">
<p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-4">
              Management
            </p>
<nav className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-900 bg-gray-100 rounded-lg" href="#">
<span className="iconify" data-icon="lucide:calendar" data-width="16"></span>
                Client Schedules
              </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors" href="#">
<span className="iconify" data-icon="lucide:users" data-width="16"></span>
                Clients
              </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors" href="#">
<span className="iconify" data-icon="lucide:settings" data-width="16"></span>
                Settings
              </a>
</nav>
</div>
<div className="mt-auto p-6 border-t border-gray-100">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-gray-900 text-white flex items-center justify-center text-xs font-bold">
                L
              </div>
<div>
<p className="text-sm font-medium text-gray-900">Lorena</p>
<p className="text-xs text-gray-500">Admin</p>
</div>
</div>
</div>
</aside>

<div className="flex-1 overflow-auto">
<header className="bg-white border-b border-gray-200 px-8 py-4 flex justify-between items-center sticky top-0 z-10">
<h1 className="text-lg font-medium tracking-tight text-gray-900">
              Client Schedules
            </h1>
<div className="flex gap-2">
<button className="h-8 px-3 text-xs font-medium bg-white border border-gray-200 rounded-md text-gray-600 hover:border-gray-300 transition-colors">
                Today
              </button>
<button className="h-8 px-3 text-xs font-medium bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors shadow-sm">
                + New Job
              </button>
</div>
</header>
<div className="p-8 max-w-6xl mx-auto">

<div className="grid grid-cols-3 gap-6 mb-8">
<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
<p className="text-xs text-gray-500 uppercase font-medium">
                  Daily Revenue
                </p>
<p className="text-2xl font-medium text-gray-900 mt-1 tracking-tight">
                  $840.00
                </p>
</div>
<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
<p className="text-xs text-gray-500 uppercase font-medium">
                  Jobs Today
                </p>
<p className="text-2xl font-medium text-gray-900 mt-1 tracking-tight">
                  4
                </p>
</div>
<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
<p className="text-xs text-gray-500 uppercase font-medium">
                  Pending Requests
                </p>
<div className="flex items-center gap-2 mt-1">
<p className="text-2xl font-medium text-gray-900 tracking-tight">
                    2
                  </p>
<span className="h-2 w-2 rounded-full bg-orange-500"></span>
</div>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
<div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
<h2 className="text-sm font-medium text-gray-900">Upcoming Jobs</h2>
<span className="text-xs text-gray-400">Oct 24, 2023</span>
</div>
<table className="w-full text-left text-sm">
<thead className="bg-gray-50/50 text-gray-500 border-b border-gray-100">
<tr>
<th className="px-6 py-3 font-medium text-xs uppercase tracking-wider">
                      Time
                    </th>
<th className="px-6 py-3 font-medium text-xs uppercase tracking-wider">
                      Client
                    </th>
<th className="px-6 py-3 font-medium text-xs uppercase tracking-wider">
                      Service
                    </th>
<th className="px-6 py-3 font-medium text-xs uppercase tracking-wider">
                      Status
                    </th>
<th className="px-6 py-3 font-medium text-xs uppercase tracking-wider text-right">
                      Agreed Price
                    </th>
<th className="px-6 py-3 font-medium text-xs uppercase tracking-wider text-right">
                      Action
                    </th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100">

<tr className="group hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-4 text-gray-500 font-mono text-xs">
                      08:00 AM
                    </td>
<td className="px-6 py-4">
<p className="font-medium text-gray-900">TechCorp Office</p>
<p className="text-xs text-gray-400">Commercial</p>
</td>
<td className="px-6 py-4 text-gray-600">
                      Deep Clean + Windows
                    </td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-1 rounded-md text-[10px] font-medium bg-blue-50 text-blue-700 border border-blue-100">
                        Scheduled
                      </span>
</td>
<td className="px-6 py-4 text-right font-medium text-gray-900">
                      $450.00
                    </td>
<td className="px-6 py-4 text-right">
<button className="text-gray-400 hover:text-gray-900 transition-colors">
<span className="iconify" data-icon="lucide:more-horizontal" data-width="16"></span>
</button>
</td>
</tr>

<tr className="group hover:bg-gray-50/50 transition-colors bg-emerald-50/30">
<td className="px-6 py-4 text-gray-500 font-mono text-xs">
                      10:00 AM
                    </td>
<td className="px-6 py-4">
<p className="font-medium text-gray-900">Sarah Jenkins</p>
<p className="text-xs text-gray-400">Residential</p>
</td>
<td className="px-6 py-4 text-gray-600">Standard Weekly</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-1 rounded-md text-[10px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
                        Confirmed
                      </span>
</td>
<td className="px-6 py-4 text-right font-medium text-gray-900">
                      $180.00
                    </td>
<td className="px-6 py-4 text-right">
<button className="text-gray-400 hover:text-gray-900 transition-colors">
<span className="iconify" data-icon="lucide:more-horizontal" data-width="16"></span>
</button>
</td>
</tr>

<tr className="group hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-4 text-gray-500 font-mono text-xs">
                      02:00 PM
                    </td>
<td className="px-6 py-4">
<p className="font-medium text-gray-900">James Miller</p>
<p className="text-xs text-gray-400">Residential</p>
</td>
<td className="px-6 py-4 text-gray-600">Express Clean</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-1 rounded-md text-[10px] font-medium bg-gray-100 text-gray-600 border border-gray-200">
                        Pending
                      </span>
</td>
<td className="px-6 py-4 text-right font-medium text-gray-900">
                      $120.00
                    </td>
<td className="px-6 py-4 text-right">
<button className="text-gray-400 hover:text-gray-900 transition-colors">
<span className="iconify" data-icon="lucide:more-horizontal" data-width="16"></span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
