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



        // Simple Router Logic
        function navigateTo(pageId) {
            // Hide all pages
            const pages = document.querySelectorAll('.page-section');
            pages.forEach(page => {
                page.classList.add('hidden');
            });

            // Show selected page
            const selectedPage = document.getElementById(pageId);
            if (selectedPage) {
                selectedPage.classList.remove('hidden');
                // Re-trigger animation
                selectedPage.classList.remove('fade-in');
                void selectedPage.offsetWidth; // trigger reflow
                selectedPage.classList.add('fade-in');
            }

            // Update Active State in Nav
            const buttons = document.querySelectorAll('.nav-btn');
            buttons.forEach(btn => {
                if(btn.dataset.target === pageId) {
                    btn.classList.remove('text-slate-500', 'hover:text-slate-900');
                    btn.classList.add('bg-white', 'shadow-sm', 'text-slate-900');
                } else {
                    btn.classList.add('text-slate-500', 'hover:text-slate-900');
                    btn.classList.remove('bg-white', 'shadow-sm', 'text-slate-900');
                }
            });

            // Close mobile menu if open
            document.getElementById('mobile-menu').classList.add('hidden');
            
            // Scroll to top
            window.scrollTo(0, 0);
        }

        // Initialize Home
        document.addEventListener('DOMContentLoaded', () => {
            navigateTo('home');
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
      

<nav className="sticky top-0 z-50 w-full backdrop-blur-md border-b bg-black/80 border-slate-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex items-center gap-3 cursor-pointer" onclick="navigateTo('home')">
<div className="p-2 rounded-lg flex items-center justify-center shadow-lg bg-blue-400 text-black shadow-blue-400/20">
<iconify-icon icon="solar:mortarboard-linear" style={{fontSize: '24px'}}></iconify-icon>
</div>
<div className="">
<h1 className="text-lg font-semibold leading-none tracking-tight text-slate-100">Alumni Connect</h1>
<p className="text-xs text-slate-500 mt-0.5 font-medium">University Network</p>
</div>
</div>

<div className="hidden lg:flex items-center gap-1 p-1.5 rounded-xl border bg-slate-900/50 border-slate-800/50">
<button className="nav-btn shadow-sm px-4 py-1.5 rounded-lg text-sm font-medium transition-all bg-black text-slate-100 bg-white text-slate-900" data-target="home" onclick="navigateTo('home')" style={{}}>Home</button>
<button className="nav-btn transition-all hover:text-slate-100 hover:text-slate-900 text-sm font-medium text-slate-500 rounded-lg pt-1.5 pr-4 pb-1.5 pl-4" data-target="directory" onclick="navigateTo('directory')">Directory</button>
<button className="nav-btn text-slate-500 px-4 py-1.5 rounded-lg text-sm font-medium transition-all hover:text-slate-100 hover:text-slate-900" data-target="careers" onclick="navigateTo('careers')">Careers</button>
<button className="nav-btn text-slate-500 px-4 py-1.5 rounded-lg text-sm font-medium transition-all hover:text-slate-100 hover:text-slate-900" data-target="events" onclick="navigateTo('events')">Events</button>
<button className="nav-btn text-slate-500 px-4 py-1.5 rounded-lg text-sm font-medium transition-all hover:text-slate-100 hover:text-slate-900" data-target="mentorship" onclick="navigateTo('mentorship')">Mentorship</button>
<button className="nav-btn text-slate-500 px-4 py-1.5 rounded-lg text-sm font-medium transition-all hover:text-slate-100 hover:text-slate-900" data-target="giving" onclick="navigateTo('giving')">Giving</button>
</div>

<button className="lg:hidden p-2 text-slate-500 rounded-lg hover:bg-slate-900" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<iconify-icon icon="solar:hamburger-menu-linear" style={{fontSize: '24px'}}></iconify-icon>
</button>

<div className="hidden sm:flex items-center gap-3">
<button className="text-sm font-medium px-3 py-2 text-slate-400 hover:text-slate-100">Log in</button>
<button className="px-4 py-2 rounded-lg text-sm font-medium transition-all shadow-lg flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-black shadow-slate-100/10" style={{}}>
<span>Register</span>
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="hidden lg:hidden border-t border-slate-800 bg-black" id="mobile-menu" style={{}}>
<div className="px-4 py-4 space-y-2">
<button className="block w-full text-left px-4 py-2 rounded-lg text-slate-400 hover:bg-slate-950" onclick="navigateTo('home')">Home</button>
<button className="block w-full text-left px-4 py-2 rounded-lg text-slate-400 hover:bg-slate-950" onclick="navigateTo('directory')">Directory</button>
<button className="block w-full text-left px-4 py-2 rounded-lg text-slate-400 hover:bg-slate-950" onclick="navigateTo('careers')">Careers</button>
<button className="block w-full text-left px-4 py-2 rounded-lg text-slate-400 hover:bg-slate-950" onclick="navigateTo('events')">Events</button>
<button className="block w-full text-left px-4 py-2 rounded-lg text-slate-400 hover:bg-slate-950" onclick="navigateTo('mentorship')">Mentorship</button>
<button className="block w-full text-left px-4 py-2 rounded-lg text-slate-400 hover:bg-slate-950" onclick="navigateTo('giving')">Giving</button>
</div>
</div>
</nav>

<main className="flex-grow relative">

<div className="page-section fade-in" id="home">

<section className="lg:pt-24 lg:pb-48 overflow-hidden bg-blue-400 pt-16 pb-32 relative">
<div className="absolute inset-0 opacity-10 pointer-events-none">
<svg className="h-full w-full" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M0 100 C 20 0 50 0 100 100 Z" fill="white"></path>
</svg>
</div>
<div className="sm:px-6 lg:px-8 text-center max-w-5xl mr-auto ml-auto pr-4 pl-4 relative">
<div className="inline-flex items-center gap-2 bg-blue-500/30 px-3 py-1 rounded-full text-xs font-medium border mb-6 backdrop-blur-sm text-blue-950 border-blue-600/30">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-blue-800"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-black" style={{}}></span>
</span>
                        Alumni Reunion 2024 Registration Open
                    </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 leading-tight text-black">
                        Connect. Inspire. <br className="hidden sm:block"/>Give Back.
                    </h1>
<p className="text-lg sm:text-xl mb-10 max-w-2xl mx-auto font-light leading-relaxed text-blue-900">
                        Join 12,000+ alumni staying connected, supporting students, and making a tangible difference in our university community.
                    </p>
<div className="flex flex-wrap justify-center gap-3">
<button className="px-6 py-3 rounded-lg text-base font-medium transition-all shadow-xl flex items-center gap-2 bg-black text-blue-400 hover:bg-blue-950 shadow-blue-100/10" onclick="navigateTo('directory')" style={{}}>
<iconify-icon icon="solar:magnifer-linear" style={{fontSize: '20px'}}></iconify-icon>
                            Find Alumni
                        </button>
<button className="border border-blue-500 px-6 py-3 rounded-lg text-base font-medium transition-all flex items-center gap-2 bg-blue-300 text-black hover:bg-blue-200" onclick="navigateTo('events')">
<iconify-icon icon="solar:calendar-linear" style={{fontSize: '20px'}}></iconify-icon>
                            Upcoming Events
                        </button>
</div>
</div>
</section>

<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 z-10 mb-20">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="p-6 rounded-xl shadow-xl border flex items-center gap-4 bg-black shadow-slate-800/50 border-slate-900" style={{}}>
<div className="p-3 rounded-lg bg-blue-950 text-blue-400">
<iconify-icon icon="solar:users-group-rounded-linear" style={{fontSize: '24px'}}></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Network</p>
<p className="text-2xl font-semibold tracking-tight text-slate-100">12,547</p>
</div>
</div>
<div className="p-6 rounded-xl shadow-xl border flex items-center gap-4 bg-black shadow-slate-800/50 border-slate-900" style={{}}>
<div className="p-3 rounded-lg bg-purple-950 text-purple-400">
<iconify-icon icon="solar:briefcase-linear" style={{fontSize: '24px'}}></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Jobs Posted</p>
<p className="text-2xl font-semibold tracking-tight text-slate-100">843</p>
</div>
</div>
<div className="p-6 rounded-xl shadow-xl border flex items-center gap-4 bg-black shadow-slate-800/50 border-slate-900" style={{}}>
<div className="p-3 rounded-lg bg-emerald-950 text-emerald-400">
<iconify-icon icon="solar:hand-shake-linear" style={{fontSize: '24px'}}></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Mentors</p>
<p className="text-2xl font-semibold tracking-tight text-slate-100">342</p>
</div>
</div>
<div className="p-6 rounded-xl shadow-xl border flex items-center gap-4 bg-black shadow-slate-800/50 border-slate-900" style={{}}>
<div className="p-3 rounded-lg bg-rose-950 text-rose-400">
<iconify-icon icon="solar:heart-linear" style={{fontSize: '24px'}}></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Raised</p>
<p className="text-2xl font-semibold tracking-tight text-slate-100">$2.4M</p>
</div>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="group cursor-pointer p-8 rounded-2xl border hover:shadow-lg hover:shadow-blue-500/5 transition-all bg-slate-950 hover:bg-black border-slate-800" onclick="navigateTo('events')">
<div className="w-12 h-12 rounded-xl border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm bg-black border-slate-800 text-blue-400" style={{}}>
<iconify-icon icon="solar:videocamera-record-linear" style={{fontSize: '24px'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-2 text-slate-100">Virtual Events</h3>
<p className="text-sm text-slate-500 leading-relaxed">Attend webinars, reunions, and networking sessions seamlessly through our integrated platform.</p>
</div>
<div className="group cursor-pointer p-8 rounded-2xl border hover:shadow-lg hover:shadow-blue-500/5 transition-all bg-slate-950 hover:bg-black border-slate-800" onclick="navigateTo('careers')">
<div className="w-12 h-12 rounded-xl border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm bg-black border-slate-800 text-purple-400" style={{}}>
<iconify-icon icon="solar:bell-bing-linear" style={{fontSize: '24px'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-2 text-slate-100">Career Opportunities</h3>
<p className="text-sm text-slate-500 leading-relaxed">Get personalized notifications for job openings, research grants, and industry partnerships.</p>
</div>
<div className="group cursor-pointer p-8 rounded-2xl border hover:shadow-lg hover:shadow-blue-500/5 transition-all bg-slate-950 hover:bg-black border-slate-800" onclick="navigateTo('giving')">
<div className="w-12 h-12 rounded-xl border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm bg-black border-slate-800 text-emerald-400" style={{}}>
<iconify-icon icon="solar:hand-heart-linear" style={{fontSize: '24px'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-2 text-slate-100">Give Back</h3>
<p className="text-sm text-slate-500 leading-relaxed">Support the next generation through scholarships, infrastructure funds, or mentorship.</p>
</div>
</div>
</div>
</div>

<div className="page-section hidden fade-in py-12" id="directory">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-100">Alumni Directory</h2>
<p className="text-sm text-slate-500 mt-1">Search and connect with former classmates.</p>
</div>
<div className="flex items-center gap-3 w-full md:w-auto">
<div className="relative w-full md:w-64">
<iconify-icon className="absolute left-3 top-2.5 text-slate-600" icon="solar:magnifer-linear" style={{fontSize: '20px'}}></iconify-icon>
<input className="w-full pl-10 pr-4 py-2 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all border-slate-800" placeholder="Search by name, company..." type="text"/>
</div>
<button className="px-4 py-2 border rounded-lg text-sm font-medium flex items-center gap-2 border-slate-800 text-slate-400 hover:bg-slate-950">
<iconify-icon icon="solar:filter-linear"></iconify-icon>
                            Filters
                        </button>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="p-5 rounded-xl border hover:shadow-lg transition-all group bg-black border-slate-800" style={{}}>
<div className="flex flex-col items-center text-center">
<div className="w-20 h-20 rounded-full mb-4 overflow-hidden border-2 shadow-sm bg-slate-900 border-black" style={{}}>
<img alt="Profile" className="w-full h-full object-cover" src="https://i.pravatar.cc/150?u=a042581f4e29026024d"/>
</div>
<h3 className="text-base font-semibold text-slate-100">Sarah Jenkins</h3>
<p className="text-xs font-medium mb-1 text-blue-400">Class of 2018</p>
<p className="text-sm text-slate-500 mb-4">Product Designer at Stripe</p>
<button className="w-full py-2 rounded-lg border text-xs font-medium transition-colors border-slate-800 text-slate-400 hover:border-blue-400 hover:text-blue-400">Connect</button>
</div>
</div>

<div className="p-5 rounded-xl border hover:shadow-lg transition-all group bg-black border-slate-800" style={{}}>
<div className="flex flex-col items-center text-center">
<div className="w-20 h-20 rounded-full mb-4 overflow-hidden border-2 shadow-sm bg-slate-900 border-black" style={{}}>
<img alt="Profile" className="w-full h-full object-cover" src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>
</div>
<h3 className="text-base font-semibold text-slate-100">David Chen</h3>
<p className="text-xs font-medium mb-1 text-blue-400">Class of 2015</p>
<p className="text-sm text-slate-500 mb-4">Senior Engineer at Vercel</p>
<button className="w-full py-2 rounded-lg border text-xs font-medium transition-colors border-slate-800 text-slate-400 hover:border-blue-400 hover:text-blue-400">Connect</button>
</div>
</div>

<div className="p-5 rounded-xl border hover:shadow-lg transition-all group bg-black border-slate-800" style={{}}>
<div className="flex flex-col items-center text-center">
<div className="w-20 h-20 rounded-full mb-4 overflow-hidden border-2 shadow-sm bg-slate-900 border-black" style={{}}>
<img alt="Profile" className="w-full h-full object-cover" src="https://i.pravatar.cc/150?u=a04258114e29026302d"/>
</div>
<h3 className="text-base font-semibold text-slate-100">Elena Rodriguez</h3>
<p className="text-xs font-medium mb-1 text-blue-400">Class of 2020</p>
<p className="text-sm text-slate-500 mb-4">Marketing Lead at Linear</p>
<button className="w-full py-2 rounded-lg border text-xs font-medium transition-colors border-slate-800 text-slate-400 hover:border-blue-400 hover:text-blue-400">Connect</button>
</div>
</div>

<div className="p-5 rounded-xl border hover:shadow-lg transition-all group bg-black border-slate-800" style={{}}>
<div className="flex flex-col items-center text-center">
<div className="w-20 h-20 rounded-full mb-4 overflow-hidden border-2 shadow-sm bg-slate-900 border-black" style={{}}>
<div className="w-full h-full flex items-center justify-center bg-slate-900 text-slate-600" style={{}}>
<iconify-icon icon="solar:user-linear" style={{fontSize: '32px'}}></iconify-icon>
</div>
</div>
<h3 className="text-base font-semibold text-slate-100">James Wilson</h3>
<p className="text-xs font-medium mb-1 text-blue-400">Class of 2012</p>
<p className="text-sm text-slate-500 mb-4">Founder at TechFlow</p>
<button className="w-full py-2 rounded-lg border text-xs font-medium transition-colors border-slate-800 text-slate-400 hover:border-blue-400 hover:text-blue-400">Connect</button>
</div>
</div>
</div>
</div>
</div>

<div className="page-section hidden fade-in py-12" id="careers">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-10">
<h2 className="text-2xl font-semibold tracking-tight text-slate-100">Career Opportunities</h2>
<p className="text-sm text-slate-500 mt-2">Curated roles from alumni-led companies and partners.</p>
</div>
<div className="space-y-4">

<div className="p-6 rounded-xl border transition-colors flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-black border-slate-800 hover:border-blue-700" style={{}}>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-lg flex items-center justify-center font-bold text-lg bg-slate-100 text-black" style={{}}>V</div>
<div>
<h3 className="text-base font-semibold text-slate-100">Frontend Engineer</h3>
<div className="flex items-center gap-3 mt-1 text-sm text-slate-500">
<span>Vercel</span>
<span className="w-1 h-1 rounded-full bg-slate-700" style={{}}></span>
<span>Remote</span>
<span className="w-1 h-1 rounded-full bg-slate-700" style={{}}></span>
<span>Full-time</span>
</div>
</div>
</div>
<div className="flex items-center gap-4 w-full sm:w-auto mt-2 sm:mt-0">
<span className="text-xs font-medium text-slate-500 px-2 py-1 rounded hidden sm:inline-block bg-slate-900" style={{}}>Posted 2d ago</span>
<button className="px-4 py-2 rounded-lg text-sm font-medium transition-colors w-full sm:w-auto bg-slate-100 hover:bg-slate-200 text-black" style={{}}>Apply Now</button>
</div>
</div>

<div className="p-6 rounded-xl border transition-colors flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-black border-slate-800 hover:border-blue-700" style={{}}>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-lg flex items-center justify-center font-bold text-lg bg-blue-400 text-black">S</div>
<div>
<h3 className="text-base font-semibold text-slate-100">Product Manager</h3>
<div className="flex items-center gap-3 mt-1 text-sm text-slate-500">
<span>Stripe</span>
<span className="w-1 h-1 rounded-full bg-slate-700" style={{}}></span>
<span>San Francisco</span>
<span className="w-1 h-1 rounded-full bg-slate-700" style={{}}></span>
<span>Hybrid</span>
</div>
</div>
</div>
<div className="flex items-center gap-4 w-full sm:w-auto mt-2 sm:mt-0">
<span className="text-xs font-medium text-slate-500 px-2 py-1 rounded hidden sm:inline-block bg-slate-900" style={{}}>Posted 5d ago</span>
<button className="px-4 py-2 rounded-lg text-sm font-medium transition-colors w-full sm:w-auto bg-slate-100 hover:bg-slate-200 text-black" style={{}}>Apply Now</button>
</div>
</div>

<div className="p-6 rounded-xl border transition-colors flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-black border-slate-800 hover:border-blue-700" style={{}}>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-lg flex items-center justify-center font-bold text-lg bg-indigo-400 text-black" style={{}}>L</div>
<div>
<h3 className="text-base font-semibold text-slate-100">Marketing Specialist</h3>
<div className="flex items-center gap-3 mt-1 text-sm text-slate-500">
<span>Linear</span>
<span className="w-1 h-1 rounded-full bg-slate-700" style={{}}></span>
<span>New York</span>
<span className="w-1 h-1 rounded-full bg-slate-700" style={{}}></span>
<span>On-site</span>
</div>
</div>
</div>
<div className="flex items-center gap-4 w-full sm:w-auto mt-2 sm:mt-0">
<span className="text-xs font-medium text-slate-500 px-2 py-1 rounded hidden sm:inline-block bg-slate-900" style={{}}>Posted 1w ago</span>
<button className="px-4 py-2 rounded-lg text-sm font-medium transition-colors w-full sm:w-auto bg-slate-100 hover:bg-slate-200 text-black" style={{}}>Apply Now</button>
</div>
</div>
</div>
</div>
</div>

<div className="page-section hidden fade-in py-12" id="events">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-end mb-8">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-100">Upcoming Events</h2>
<p className="text-sm text-slate-500 mt-1">Join us physically or virtually.</p>
</div>
<div className="flex gap-2 p-1 rounded-lg bg-slate-900" style={{}}>
<button className="px-3 py-1 shadow-sm rounded-md text-xs font-medium bg-black text-slate-100" style={{}}>List View</button>
<button className="px-3 py-1 text-xs font-medium text-slate-500">Calendar</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="rounded-2xl border overflow-hidden hover:shadow-lg transition-all group bg-black border-slate-800" style={{}}>
<div className="h-40 relative overflow-hidden bg-purple-900">

<div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20" style={{}}></div>
<div className="absolute top-4 left-4 backdrop-blur px-3 py-1 rounded-lg text-xs font-semibold bg-black/90 text-purple-300">
                                Virtual
                             </div>
</div>
<div className="p-6">
<div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
<iconify-icon icon="solar:calendar-linear"></iconify-icon>
<span>Oct 24, 2024 • 6:00 PM EST</span>
</div>
<h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors text-slate-100">Tech Leadership Summit</h3>
<p className="text-sm text-slate-500 mb-6">A panel discussion with alumni CTOs from major tech firms discussing AI trends.</p>
<button className="w-full py-2.5 rounded-lg text-sm font-medium transition-colors bg-slate-100 text-black hover:bg-slate-200" style={{}}>Register</button>
</div>
</div>

<div className="rounded-2xl border overflow-hidden hover:shadow-lg transition-all group bg-black border-slate-800" style={{}}>
<div className="h-40 relative overflow-hidden bg-blue-900">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-emerald-500/20"></div>
<div className="absolute top-4 left-4 backdrop-blur px-3 py-1 rounded-lg text-xs font-semibold bg-black/90 text-blue-300">
                                In-Person • Campus
                             </div>
</div>
<div className="p-6">
<div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
<iconify-icon icon="solar:calendar-linear"></iconify-icon>
<span>Nov 12, 2024 • 2:00 PM EST</span>
</div>
<h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors text-slate-100">Homecoming Weekend</h3>
<p className="text-sm text-slate-500 mb-6">Reconnect with your batch mates, tour the new engineering block, and enjoy the gala.</p>
<button className="w-full py-2.5 rounded-lg text-sm font-medium transition-colors bg-slate-100 text-black hover:bg-slate-200" style={{}}>Get Tickets</button>
</div>
</div>

<div className="rounded-2xl border overflow-hidden hover:shadow-lg transition-all group bg-black border-slate-800" style={{}}>
<div className="h-40 relative overflow-hidden bg-emerald-900">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-lime-500/20" style={{}}></div>
<div className="absolute top-4 left-4 backdrop-blur px-3 py-1 rounded-lg text-xs font-semibold bg-black/90 text-emerald-300">
                                Hybrid
                             </div>
</div>
<div className="p-6">
<div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
<iconify-icon icon="solar:calendar-linear"></iconify-icon>
<span>Dec 05, 2024 • 9:00 AM EST</span>
</div>
<h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors text-slate-100">Startup Pitch Day</h3>
<p className="text-sm text-slate-500 mb-6">Alumni founders present their startups to a panel of VC alumni. Open for viewing.</p>
<button className="w-full py-2.5 rounded-lg text-sm font-medium transition-colors bg-slate-100 text-black hover:bg-slate-200" style={{}}>Register</button>
</div>
</div>
</div>
</div>
</div>

<div className="page-section hidden fade-in py-12" id="mentorship">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="bg-gradient-to-r rounded-2xl p-8 mb-12 border from-emerald-950 border-emerald-900 to-emerald-950">
<div className="flex flex-col md:flex-row items-center justify-between gap-6">
<div>
<h2 className="text-2xl font-semibold mb-2 text-slate-100">Become a Mentor</h2>
<p className="max-w-xl text-slate-400">Share your experience with recent graduates. 85% of mentored students secure better job offers.</p>
</div>
<button className="whitespace-nowrap px-6 py-3 rounded-lg font-medium transition-colors shadow-lg bg-emerald-400 hover:bg-emerald-300 text-black shadow-emerald-400/20">
                            Apply to Mentor
                        </button>
</div>
</div>
<h3 className="text-lg font-semibold mb-6 text-slate-100">Featured Mentors</h3>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-6 rounded-xl border bg-black border-slate-800" style={{}}>
<div className="flex items-center gap-4 mb-4">
<img alt="Mentor" className="w-14 h-14 rounded-full object-cover bg-slate-900" src="https://i.pravatar.cc/150?u=mentor1" style={{}}/>
<div>
<h4 className="font-semibold text-slate-100">Dr. Alan Grant</h4>
<p className="text-xs text-slate-500">Biotech Research Lead</p>
</div>
</div>
<div className="flex gap-2 mb-4 flex-wrap">
<span className="text-xs px-2 py-1 rounded bg-slate-900 text-slate-400" style={{}}>Research</span>
<span className="text-xs px-2 py-1 rounded bg-slate-900 text-slate-400" style={{}}>PhD Advice</span>
</div>
<p className="text-sm text-slate-500 mb-6 line-clamp-2">Happy to guide students interested in biotechnology research and grant writing processes.</p>
<button className="w-full border hover:border-emerald-500 py-2 rounded-lg text-sm font-medium transition-colors border-slate-800 hover:text-emerald-400 text-slate-400">Request Session</button>
</div>

<div className="p-6 rounded-xl border bg-black border-slate-800" style={{}}>
<div className="flex items-center gap-4 mb-4">
<img alt="Mentor" className="w-14 h-14 rounded-full object-cover bg-slate-900" src="https://i.pravatar.cc/150?u=mentor2" style={{}}/>
<div>
<h4 className="font-semibold text-slate-100">Monica Hall</h4>
<p className="text-xs text-slate-500">VC Partner</p>
</div>
</div>
<div className="flex gap-2 mb-4 flex-wrap">
<span className="text-xs px-2 py-1 rounded bg-slate-900 text-slate-400" style={{}}>Fundraising</span>
<span className="text-xs px-2 py-1 rounded bg-slate-900 text-slate-400" style={{}}>Startups</span>
</div>
<p className="text-sm text-slate-500 mb-6 line-clamp-2">Available for mock pitch sessions and career advice for aspiring entrepreneurs.</p>
<button className="w-full border hover:border-emerald-500 py-2 rounded-lg text-sm font-medium transition-colors border-slate-800 hover:text-emerald-400 text-slate-400">Request Session</button>
</div>

<div className="p-6 rounded-xl border bg-black border-slate-800" style={{}}>
<div className="flex items-center gap-4 mb-4">
<img alt="Mentor" className="w-14 h-14 rounded-full object-cover bg-slate-900" src="https://i.pravatar.cc/150?u=mentor3" style={{}}/>
<div>
<h4 className="font-semibold text-slate-100">Richard Hendricks</h4>
<p className="text-xs text-slate-500">Software Architect</p>
</div>
</div>
<div className="flex gap-2 mb-4 flex-wrap">
<span className="text-xs px-2 py-1 rounded bg-slate-900 text-slate-400" style={{}}>System Design</span>
<span className="text-xs px-2 py-1 rounded bg-slate-900 text-slate-400" style={{}}>Coding</span>
</div>
<p className="text-sm text-slate-500 mb-6 line-clamp-2">Can help with cracking technical interviews at FAANG companies.</p>
<button className="w-full border hover:border-emerald-500 py-2 rounded-lg text-sm font-medium transition-colors border-slate-800 hover:text-emerald-400 text-slate-400">Request Session</button>
</div>
</div>
</div>
</div>

<div className="page-section hidden fade-in py-12" id="giving">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-10">
<h2 className="text-2xl font-semibold tracking-tight text-slate-100">Make a Difference</h2>
<p className="text-sm text-slate-500 mt-2">Your contribution directly supports scholarships and campus development.</p>
</div>
<div className="border rounded-2xl p-8 shadow-sm bg-black border-slate-800" style={{}}>
<div className="mb-8">
<label className="block text-sm font-medium mb-3 text-slate-300">Select Amount</label>
<div className="grid grid-cols-4 gap-3">
<button className="py-3 border rounded-lg text-sm font-medium hover:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all border-slate-800 hover:bg-slate-950 hover:text-blue-400">$50</button>
<button className="py-3 border border-blue-500 rounded-lg text-sm font-medium transition-all bg-blue-950 text-blue-300">$100</button>
<button className="py-3 border rounded-lg text-sm font-medium hover:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all border-slate-800 hover:bg-slate-950 hover:text-blue-400">$500</button>
<button className="py-3 border rounded-lg text-sm font-medium hover:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all border-slate-800 hover:bg-slate-950 hover:text-blue-400">Other</button>
</div>
</div>
<div className="mb-8">
<label className="block text-sm font-medium mb-3 text-slate-300">Campaign</label>
<div className="space-y-3">

<label className="flex items-center p-4 border rounded-xl cursor-pointer transition-colors border-slate-800 hover:border-blue-600">
<input checked="" className="w-4 h-4 focus:ring-blue-500 text-blue-400 border-slate-700" name="campaign" type="radio"/>
<div className="ml-3">
<span className="block text-sm font-medium text-slate-100">General Scholarship Fund</span>
<span className="block text-xs text-slate-500">Supports tuition for underprivileged students.</span>
</div>
</label>
<label className="flex items-center p-4 border rounded-xl cursor-pointer transition-colors border-slate-800 hover:border-blue-600">
<input className="w-4 h-4 focus:ring-blue-500 text-blue-400 border-slate-700" name="campaign" type="radio"/>
<div className="ml-3">
<span className="block text-sm font-medium text-slate-100">New Science Wing</span>
<span className="block text-xs text-slate-500">Infrastructure development for the chemistry dept.</span>
</div>
</label>
</div>
</div>
<button className="w-full py-4 rounded-xl text-base font-medium shadow-lg transition-all flex items-center justify-center gap-2 bg-slate-100 text-black shadow-slate-100/10 hover:bg-slate-200" style={{}}>
<iconify-icon icon="solar:card-linear" style={{fontSize: '20px'}}></iconify-icon>
                        Proceed to Payment
                    </button>
<p className="text-center text-xs mt-4 flex items-center justify-center gap-1 text-slate-600">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon>
                        Secure payment powered by Stripe
                    </p>
</div>
</div>
</div>
</main>

<footer className="border-t mt-auto bg-black border-slate-800" style={{}}>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="flex flex-col md:flex-row justify-between items-center">
<div className="flex items-center gap-2 mb-4 md:mb-0">
<div className="p-1.5 rounded-lg bg-slate-900 text-slate-400" style={{}}>
<iconify-icon icon="solar:mortarboard-linear" style={{fontSize: '20px'}}></iconify-icon>
</div>
<span className="text-sm font-semibold text-slate-100">Alumni Connect</span>
</div>
<div className="flex gap-6 text-sm text-slate-500">
<a className="hover:text-slate-100" href="#">Privacy</a>
<a className="hover:text-slate-100" href="#">Terms</a>
<a className="hover:text-slate-100" href="#">Contact</a>
</div>
</div>
<div className="mt-8 pt-8 border-t text-center text-xs border-slate-900 text-slate-600">
                © 2024 University Alumni Network. All rights reserved.
            </div>
</div>
</footer>


    </>
  );
}
