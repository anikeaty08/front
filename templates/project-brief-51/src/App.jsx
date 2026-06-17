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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
sky: {
50: '#f0f9ff',
100: '#e0f2fe',
200: '#bae6fd',
300: '#7dd3fc',
400: '#38bdf8',
500: '#0ea5e9',
600: '#0284c7',
700: '#0369a1',
800: '#075985',
900: '#0c4a6e',
}
},
animation: {
'fly': 'fly 2s infinite linear',
'fade-in': 'fadeIn 0.5s ease-out forwards',
},
keyframes: {
fly: {
'0%': { transform: 'translateY(0px)' },
'50%': { transform: 'translateY(-10px)' },
'100%': { transform: 'translateY(0px)' },
},
fadeIn: {
'0%': { opacity: '0', transform: 'translateY(10px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



        // Init logic
        window.addEventListener('DOMContentLoaded', () => {
            const loader = document.getElementById('loading-screen');
            const app = document.getElementById('app-content');

            // Simulate initial loading
            setTimeout(() => {
                loader.classList.add('opacity-0', 'pointer-events-none');
                app.classList.remove('opacity-0');
            }, 1200);
        });

        // Toggle Views
        function toggleDashboard() {
            const landing = document.getElementById('landing-page');
            const dashboard = document.getElementById('dashboard');
            const loader = document.getElementById('loading-screen');
            
            // Show loader briefly for transition effect
            loader.classList.remove('opacity-0', 'pointer-events-none');
            
            setTimeout(() => {
                if (dashboard.classList.contains('hidden')) {
                    // Switch to dashboard
                    landing.classList.add('hidden');
                    dashboard.classList.remove('hidden');
                    window.scrollTo(0,0);
                } else {
                    // Switch to landing
                    dashboard.classList.add('hidden');
                    landing.classList.remove('hidden');
                    window.scrollTo(0,0);
                }
                
                // Hide loader
                setTimeout(() => {
                    loader.classList.add('opacity-0', 'pointer-events-none');
                }, 500);
            }, 800);
        }

        // Simulate search inside dashboard
        function simulateSearch() {
            const btn = event.currentTarget;
            const originalText = btn.innerHTML;
            
            btn.innerHTML = `<iconify-icon icon="lucide:loader-2" class="animate-spin" width="18"></iconify-icon> Searching...`;
            btn.classList.add('opacity-80', 'cursor-wait');
            
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.classList.remove('opacity-80', 'cursor-wait');
                // Scroll to results
                document.getElementById('results-area').scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 1000);
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
      

<div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-sky-50 via-white to-sky-100 transition-opacity duration-500" id="loading-screen">
<div className="relative mb-6">
<div className="absolute inset-0 bg-sky-400 blur-xl opacity-20 rounded-full animate-pulse"></div>
<iconify-icon className="text-sky-500 text-6xl animate-fly relative z-10" icon="lucide:plane" strokeWidth="1.5"></iconify-icon>
</div>
<h2 className="text-lg font-medium text-slate-800 tracking-tight">Finding the best flights for you...</h2>
<div className="mt-4 w-48 h-1 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-sky-500 animate-[width_1.5s_ease-in-out_infinite]" style={{width: '30%'}}></div>
</div>
</div>

<div className="opacity-0 transition-opacity duration-700" id="app-content">

<div className="flex flex-col min-h-screen" id="landing-page">

<header className="fixed top-0 w-full z-40 glass-panel border-b border-slate-200/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 cursor-pointer" onclick="window.scrollTo(0,0)">
<div className="w-8 h-8 bg-gradient-to-br from-sky-500 to-sky-600 rounded-lg flex items-center justify-center text-white font-semibold tracking-tighter shadow-sm shadow-sky-200">
                            A
                        </div>
<span className="font-semibold text-slate-900 tracking-tight">AeroSky</span>
</div>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-500 hover:text-sky-600 transition-colors" href="#home">Home</a>
<a className="text-sm font-medium text-slate-500 hover:text-sky-600 transition-colors" href="#about">About Us</a>
<a className="text-sm font-medium text-slate-500 hover:text-sky-600 transition-colors" href="#assets">Assets</a>
<a className="text-sm font-medium text-slate-500 hover:text-sky-600 transition-colors" href="#">Flights</a>
</nav>
<div className="flex items-center gap-4">
<button className="hidden md:block text-sm font-medium text-slate-600 hover:text-slate-900">Log in</button>
<button className="bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium px-4 py-2 rounded-full transition-all shadow-md shadow-slate-200 hover:shadow-lg hover:shadow-slate-300" onclick="toggleDashboard()">
                            Get Started
                        </button>
</div>
</div>
</header>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden" id="home">

<div className="absolute top-0 left-0 w-full h-full -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-sky-100/40 via-white to-white"></div>
<div className="absolute top-20 right-0 w-[500px] h-[500px] bg-sky-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-100 text-sky-700 text-xs font-medium mb-8 animate-fade-in" style={{animationDelay: '0.1s'}}>
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
</span>
                        New: Smart Analytics 2.0
                    </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-slate-900 mb-6 max-w-4xl mx-auto leading-[1.1] animate-fade-in" style={{animationDelay: '0.2s'}}>
                        Flight booking for the <br/>
<span className="text-gradient">modern era.</span>
</h1>
<p className="text-lg text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in" style={{animationDelay: '0.3s'}}>
                        The fastest, most reliable SaaS platform for flight aggregation and booking management. Designed for speed, built for scale.
                    </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
<button className="w-full sm:w-auto bg-gradient-to-b from-sky-500 to-sky-600 hover:to-sky-500 text-white px-8 py-3 rounded-full text-sm font-medium shadow-lg shadow-sky-200 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2" onclick="toggleDashboard()">
<iconify-icon icon="lucide:search" width="18"></iconify-icon>
                            Search Flights
                        </button>
<button className="w-full sm:w-auto bg-white border border-slate-200 text-slate-700 px-8 py-3 rounded-full text-sm font-medium hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center gap-2" onclick="toggleDashboard()">
                            View Dashboard
                            <iconify-icon icon="lucide:arrow-right" width="18"></iconify-icon>
</button>
</div>

<div className="mt-20 relative mx-auto max-w-5xl animate-fade-in" style={{animationDelay: '0.6s'}}>
<div className="rounded-2xl border border-slate-200 bg-white/50 backdrop-blur-sm p-2 shadow-2xl shadow-sky-900/5">
<div className="rounded-xl overflow-hidden bg-slate-50 border border-slate-100 aspect-[16/9] relative group">

<div className="absolute top-0 left-0 w-64 h-full border-r border-slate-200 bg-white p-4 space-y-3">
<div className="w-8 h-8 rounded-lg bg-sky-100 mb-6"></div>
<div className="h-2 w-24 bg-slate-100 rounded"></div>
<div className="h-2 w-32 bg-slate-100 rounded"></div>
<div className="h-2 w-20 bg-slate-100 rounded"></div>
</div>
<div className="absolute top-0 left-64 right-0 h-16 border-b border-slate-200 bg-white"></div>
<div className="absolute top-24 left-72 right-8 h-32 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center">
<div className="text-slate-300 font-medium tracking-tight text-lg">Detailed Analytics View</div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-50"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white/30 backdrop-blur-[2px]">
<button className="bg-slate-900 text-white px-6 py-2 rounded-full text-sm font-medium shadow-xl transform scale-95 group-hover:scale-100 transition-transform" onclick="toggleDashboard()">Interactive Demo</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="relative order-2 lg:order-1">
<div className="absolute -top-10 -left-10 w-72 h-72 bg-sky-100 rounded-full blur-3xl opacity-50"></div>
<div className="relative grid grid-cols-2 gap-4">
<div className="space-y-4 translate-y-8">
<div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
<iconify-icon className="text-sky-500 text-2xl mb-3" icon="lucide:zap"></iconify-icon>
<h3 className="font-medium text-slate-900 mb-1">Lightning Fast</h3>
<p className="text-xs text-slate-500 leading-relaxed">Sub-second search results powered by our global edge network.</p>
</div>
<div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
<iconify-icon className="text-sky-500 text-2xl mb-3" icon="lucide:globe"></iconify-icon>
<h3 className="font-medium text-slate-900 mb-1">Global Reach</h3>
<p className="text-xs text-slate-500 leading-relaxed">Direct connections to over 400 airlines worldwide.</p>
</div>
</div>
<div className="space-y-4">
<div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
<iconify-icon className="text-sky-500 text-2xl mb-3" icon="lucide:shield-check"></iconify-icon>
<h3 className="font-medium text-slate-900 mb-1">Secure Core</h3>
<p className="text-xs text-slate-500 leading-relaxed">Enterprise-grade security for every transaction.</p>
</div>
<div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
<iconify-icon className="text-sky-500 text-2xl mb-3" icon="lucide:bar-chart-3"></iconify-icon>
<h3 className="font-medium text-slate-900 mb-1">Smart Data</h3>
<p className="text-xs text-slate-500 leading-relaxed">Real-time analytics to optimize your travel spend.</p>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-4">Reinventing how the world books travel.</h2>
<p className="text-slate-500 mb-8 leading-relaxed">
                                AeroSky isn't just a booking engine; it's a comprehensive SaaS infrastructure designed for the modern traveler. We strip away the complexity of legacy systems and replace it with a fluid, intuitive interface that puts power back in your hands.
                            </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-sky-500" icon="lucide:check"></iconify-icon>
                                    Real-time API integrations
                                </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-sky-500" icon="lucide:check"></iconify-icon>
                                    Automated itinerary management
                                </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-sky-500" icon="lucide:check"></iconify-icon>
                                    24/7 AI-powered support
                                </li>
</ul>
<button className="text-sky-600 font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all">
                                Learn more about our mission <iconify-icon icon="lucide:arrow-right"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="assets">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-4">Powerful Assets</h2>
<p className="text-slate-500">Everything you need to build, manage, and scale your travel operations.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-slate-200 hover:-translate-y-1 transition-all duration-300">
<div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-sky-500 transition-colors duration-300">
<iconify-icon className="text-sky-500 text-xl group-hover:text-white transition-colors" icon="lucide:database"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Flight Data API</h3>
<p className="text-sm text-slate-500 leading-relaxed">Access real-time schedules, pricing, and availability with our robust API endpoints.</p>
</div>

<div className="group bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-slate-200 hover:-translate-y-1 transition-all duration-300">
<div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-sky-500 transition-colors duration-300">
<iconify-icon className="text-sky-500 text-xl group-hover:text-white transition-colors" icon="lucide:layout-template"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">UI Component Kit</h3>
<p className="text-sm text-slate-500 leading-relaxed">Pre-built, customizable UI elements to speed up your integration process.</p>
</div>

<div className="group bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-slate-200 hover:-translate-y-1 transition-all duration-300">
<div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-sky-500 transition-colors duration-300">
<iconify-icon className="text-sky-500 text-xl group-hover:text-white transition-colors" icon="lucide:bell"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Notification System</h3>
<p className="text-sm text-slate-500 leading-relaxed">Smart alerts for flight changes, gate updates, and price drops.</p>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
<div className="flex items-center gap-2 mb-4 md:mb-0">
<div className="w-6 h-6 bg-slate-900 rounded-md flex items-center justify-center text-white text-xs font-bold">A</div>
<span className="font-medium text-slate-900 text-sm">AeroSky © 2023</span>
</div>
<div className="flex gap-6">
<a className="text-slate-400 hover:text-slate-600" href="#"><iconify-icon icon="lucide:twitter" width="18"></iconify-icon></a>
<a className="text-slate-400 hover:text-slate-600" href="#"><iconify-icon icon="lucide:github" width="18"></iconify-icon></a>
<a className="text-slate-400 hover:text-slate-600" href="#"><iconify-icon icon="lucide:linkedin" width="18"></iconify-icon></a>
</div>
</div>
</footer>
</div>

<div className="hidden h-screen overflow-hidden bg-slate-50 flex" id="dashboard">

<aside className="w-64 flex-shrink-0 bg-gradient-to-b from-sky-500 to-sky-600 text-white flex flex-col justify-between p-4 shadow-xl z-20">
<div>
<div className="flex items-center gap-2 px-2 py-4 mb-8 cursor-pointer" onclick="toggleDashboard()">
<div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-sky-600 font-bold tracking-tighter shadow-sm">
                            A
                        </div>
<span className="font-semibold text-white tracking-tight text-lg">AeroSky</span>
</div>
<nav className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-white/10 text-white text-sm font-medium border border-white/10" href="#">
<iconify-icon icon="lucide:layout-dashboard" width="18"></iconify-icon>
                            Dashboard
                        </a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/80 hover:bg-white/10 hover:text-white transition-colors text-sm font-medium" href="#">
<iconify-icon icon="lucide:plane-takeoff" width="18"></iconify-icon>
                            Book Flight
                        </a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/80 hover:bg-white/10 hover:text-white transition-colors text-sm font-medium" href="#">
<iconify-icon icon="lucide:ticket" width="18"></iconify-icon>
                            My Bookings
                        </a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/80 hover:bg-white/10 hover:text-white transition-colors text-sm font-medium" href="#">
<iconify-icon icon="lucide:bell-ring" width="18"></iconify-icon>
                            Price Alerts
                        </a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/80 hover:bg-white/10 hover:text-white transition-colors text-sm font-medium" href="#">
<iconify-icon icon="lucide:pie-chart" width="18"></iconify-icon>
                            Analytics
                        </a>
</nav>
</div>
<div className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/80 hover:bg-white/10 hover:text-white transition-colors text-sm font-medium" href="#">
<iconify-icon icon="lucide:settings" width="18"></iconify-icon>
                        Settings
                    </a>
<div className="pt-4 border-t border-white/10 mt-2 flex items-center gap-3 px-2">
<div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-xs font-semibold">JD</div>
<div className="flex-1">
<p className="text-xs font-medium text-white">John Doe</p>
<p className="text-[10px] text-white/60">Pro Plan</p>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden relative">

<header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 flex-shrink-0 z-10">
<div className="flex items-center gap-4 w-96">
<div className="relative w-full group">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-sky-500 transition-colors" icon="lucide:search" width="16"></iconify-icon>
<input className="w-full bg-slate-50 border border-slate-200 text-sm rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all placeholder:text-slate-400 text-slate-700" placeholder="Search routes, bookings, or data..." type="text"/>
</div>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 cursor-pointer hover:border-slate-300 transition-colors">
<iconify-icon className="text-slate-500" icon="lucide:calendar" width="14"></iconify-icon>
<span className="text-xs font-medium text-slate-600">Oct 24, 2023</span>
</div>
<button className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-sky-600 hover:border-sky-200 transition-all shadow-sm">
<iconify-icon icon="lucide:bell" width="16"></iconify-icon>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto custom-scroll p-8 bg-slate-50/50">
<div className="max-w-5xl mx-auto space-y-8">

<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
<div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-4">
<div className="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center text-sky-500">
<iconify-icon icon="lucide:plane" width="16"></iconify-icon>
</div>
<span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full">+12%</span>
</div>
<h4 className="text-2xl font-semibold text-slate-900 tracking-tight">24</h4>
<p className="text-xs text-slate-500 font-medium mt-1">Total Bookings</p>
</div>
<div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-4">
<div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-orange-500">
<iconify-icon icon="lucide:clock" width="16"></iconify-icon>
</div>
<span className="text-xs font-medium text-slate-400">Next 7 days</span>
</div>
<h4 className="text-2xl font-semibold text-slate-900 tracking-tight">03</h4>
<p className="text-xs text-slate-500 font-medium mt-1">Upcoming Flights</p>
</div>
<div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-4">
<div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center text-purple-500">
<iconify-icon icon="lucide:map" width="16"></iconify-icon>
</div>
</div>
<h4 className="text-2xl font-semibold text-slate-900 tracking-tight">18</h4>
<p className="text-xs text-slate-500 font-medium mt-1">Saved Routes</p>
</div>
<div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-4">
<div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500">
<iconify-icon icon="lucide:trending-down" width="16"></iconify-icon>
</div>
<span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full">-5%</span>
</div>
<h4 className="text-2xl font-semibold text-slate-900 tracking-tight">$420</h4>
<p className="text-xs text-slate-500 font-medium mt-1">Avg. Ticket Price</p>
</div>
</div>

<div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
<div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-white">
<h3 className="text-base font-medium text-slate-900 tracking-tight flex items-center gap-2">
<iconify-icon className="text-sky-500" icon="lucide:search"></iconify-icon>
                                    Find Flights
                                </h3>
<div className="flex bg-slate-100 p-1 rounded-lg">
<button className="px-3 py-1 text-xs font-medium bg-white text-slate-900 rounded-md shadow-sm">One Way</button>
<button className="px-3 py-1 text-xs font-medium text-slate-500 hover:text-slate-900">Round Trip</button>
</div>
</div>
<div className="p-6">
<div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">

<div className="md:col-span-3">
<label className="block text-xs font-medium text-slate-500 mb-1.5 uppercase tracking-wide">From</label>
<div className="relative">
<iconify-icon className="absolute left-3 top-3 text-slate-400" icon="lucide:plane-takeoff" width="16"></iconify-icon>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2.5 pl-10 pr-3 text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all" type="text" value="New York (JFK)"/>
</div>
</div>

<div className="hidden md:flex md:col-span-1 justify-center pb-2">
<button className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 hover:text-sky-500 hover:border-sky-200 transition-colors">
<iconify-icon icon="lucide:arrow-right-left" width="14"></iconify-icon>
</button>
</div>

<div className="md:col-span-3">
<label className="block text-xs font-medium text-slate-500 mb-1.5 uppercase tracking-wide">To</label>
<div className="relative">
<iconify-icon className="absolute left-3 top-3 text-slate-400" icon="lucide:plane-landing" width="16"></iconify-icon>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2.5 pl-10 pr-3 text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all" placeholder="City or Airport" type="text"/>
</div>
</div>

<div className="md:col-span-3">
<label className="block text-xs font-medium text-slate-500 mb-1.5 uppercase tracking-wide">Departure</label>
<div className="relative">
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2.5 px-3 text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all" type="date"/>
</div>
</div>

<div className="md:col-span-2">
<button className="w-full bg-sky-500 hover:bg-sky-600 text-white font-medium py-2.5 rounded-lg shadow-md shadow-sky-200 transition-all flex items-center justify-center gap-2" onclick="simulateSearch()">
                                            Search
                                        </button>
</div>
</div>
<div className="mt-4 flex gap-4">
<div className="flex items-center gap-2">
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-slate-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-sky-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-sky-500"></div>
<span className="ml-2 text-sm font-medium text-slate-600">Direct Flights Only</span>
</label>
</div>
<div className="flex items-center gap-2">
<span className="text-sm font-medium text-slate-600">Passengers:</span>
<div className="flex items-center border border-slate-200 rounded-md bg-white">
<button className="px-2 py-1 text-slate-400 hover:text-sky-600 hover:bg-slate-50 transition-colors">-</button>
<span className="text-sm font-medium px-2 text-slate-900">1</span>
<button className="px-2 py-1 text-slate-400 hover:text-sky-600 hover:bg-slate-50 transition-colors">+</button>
</div>
</div>
<div className="flex items-center gap-2 ml-auto">
<select className="bg-transparent text-sm font-medium text-slate-600 border-none focus:ring-0 cursor-pointer hover:text-sky-600">
<option>Economy</option>
<option>Business</option>
<option>First Class</option>
</select>
</div>
</div>
</div>
</div>

<div className="space-y-4" id="results-area">
<h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">Recommended Flights</h3>

<div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-all hover:border-sky-200 group">
<div className="flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-4 w-full md:w-auto">
<div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white font-bold text-xs tracking-tight">
                                            DL
                                        </div>
<div>
<h4 className="font-semibold text-slate-900">Delta Airlines</h4>
<p className="text-xs text-slate-500">DL-402 • Boeing 737</p>
</div>
</div>
<div className="flex-1 w-full md:w-auto flex items-center justify-center gap-8">
<div className="text-right">
<p className="text-lg font-semibold text-slate-900">08:00</p>
<p className="text-xs text-slate-500 font-medium">JFK</p>
</div>
<div className="flex-1 max-w-[120px] flex flex-col items-center">
<p className="text-[10px] text-slate-400 mb-1">2h 45m</p>
<div className="w-full h-[1px] bg-slate-300 relative">
<div className="absolute -top-1 right-0 w-2 h-2 rounded-full border border-slate-300 bg-white"></div>
<div className="absolute -top-1 left-0 w-2 h-2 rounded-full border border-slate-300 bg-white"></div>
<iconify-icon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-slate-300 bg-white px-1" icon="lucide:plane" width="12"></iconify-icon>
</div>
<p className="text-[10px] text-green-600 mt-1 font-medium">Non-stop</p>
</div>
<div className="text-left">
<p className="text-lg font-semibold text-slate-900">10:45</p>
<p className="text-xs text-slate-500 font-medium">MIA</p>
</div>
</div>
<div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end border-t md:border-t-0 border-slate-100 pt-4 md:pt-0">
<div className="text-right">
<p className="text-xl font-bold text-slate-900">$245</p>
<p className="text-xs text-slate-400">per person</p>
</div>
<button className="bg-slate-900 hover:bg-sky-500 text-white text-sm font-medium px-5 py-2 rounded-lg transition-colors shadow-sm">
                                            Book
                                        </button>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-all hover:border-sky-200 group">
<div className="flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-4 w-full md:w-auto">
<div className="w-10 h-10 rounded-full bg-sky-700 flex items-center justify-center text-white font-bold text-xs tracking-tight">
                                            UA
                                        </div>
<div>
<h4 className="font-semibold text-slate-900">United</h4>
<p className="text-xs text-slate-500">UA-210 • Airbus A320</p>
</div>
</div>
<div className="flex-1 w-full md:w-auto flex items-center justify-center gap-8">
<div className="text-right">
<p className="text-lg font-semibold text-slate-900">09:15</p>
<p className="text-xs text-slate-500 font-medium">JFK</p>
</div>
<div className="flex-1 max-w-[120px] flex flex-col items-center">
<p className="text-[10px] text-slate-400 mb-1">3h 10m</p>
<div className="w-full h-[1px] bg-slate-300 relative">
<div className="absolute -top-1 right-0 w-2 h-2 rounded-full border border-slate-300 bg-white"></div>
<div className="absolute -top-1 left-0 w-2 h-2 rounded-full border border-slate-300 bg-white"></div>
<iconify-icon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-slate-300 bg-white px-1" icon="lucide:plane" width="12"></iconify-icon>
</div>
<p className="text-[10px] text-slate-400 mt-1">1 Stop</p>
</div>
<div className="text-left">
<p className="text-lg font-semibold text-slate-900">12:25</p>
<p className="text-xs text-slate-500 font-medium">MIA</p>
</div>
</div>
<div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end border-t md:border-t-0 border-slate-100 pt-4 md:pt-0">
<div className="text-right">
<p className="text-xl font-bold text-slate-900">$198</p>
<p className="text-xs text-slate-400">per person</p>
</div>
<button className="bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-sm font-medium px-5 py-2 rounded-lg transition-colors shadow-sm">
                                            Book
                                        </button>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
</div>
</div>


    </>
  );
}
