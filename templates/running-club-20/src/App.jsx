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
sans: ['Plus Jakarta Sans', 'sans-serif'],
},
colors: {
emerald: {
950: '#022c22', // Dark background
900: '#064e3b',
800: '#065f46',
100: '#d1fae5',
50: '#f0fdf4', // Light background
},
amber: {
400: '#fbbf24', // Accent
500: '#f59e0b',
}
}
}
}
}



        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5,
            }
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
      

<nav className="fixed w-full z-50 top-0 left-0 transition-all duration-300">
<div className="absolute inset-0 bg-slate-50/80 backdrop-blur-md border-b border-slate-100" style={{}}></div>
<div className="relative max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="lucide lucide-zap w-6 h-6 text-slate-950 fill-cyan-400" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="text-2xl font-bold tracking-tight text-slate-950 italic" style={{}}>7JOGGERS</span>
</div>
<div className="hidden md:flex items-center gap-8 bg-white/50 px-8 py-3 rounded-full border border-slate-100/50 shadow-sm" style={{}}>
<a className="text-sm font-medium text-slate-950 hover:text-slate-700" href="#" style={{}}>Home</a>
<a className="text-sm font-medium text-green-500 hover:text-slate-950" href="#" style={{}}>About Us</a>
<a className="text-sm font-medium text-green-500 hover:text-slate-950" href="#" style={{}}>Events</a>
<a className="text-sm font-medium text-green-500 hover:text-slate-950" href="#" style={{}}>Pages</a>
<a className="text-sm font-medium text-green-500 hover:text-slate-950" href="#" style={{}}>Blog</a>
</div>
<div className="flex items-center gap-4">
<button className="bg-slate-950 hover:bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors shadow-lg shadow-slate-900/20" style={{}}>
                    Contact Us
                </button>
</div>
</div>
</nav>

<header className="lg:pt-48 lg:pb-32 overflow-hidden pt-32 pb-20 relative">

<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-slate-100/50 to-transparent -z-10" style={{}}></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
<div className="space-y-8 relative z-10">
<div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-100 shadow-sm" style={{}}>
<span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" style={{}}></span>
<span className="text-sm font-medium text-slate-800" style={{}}>New season registration open</span>
</div>
<h1 className="text-6xl lg:text-7xl font-bold tracking-tight text-slate-950 italic leading-[1.1]" style={{}}>
                    THE ULTIMATE <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-600" style={{}}>RUNNING HEROES</span>
</h1>
<p className="text-xl text-green-500 max-w-lg leading-relaxed">
                    Welcome to the vibrant world of the Joggers. A community that embraces the thrill of the open road and cultivates tight-knit passion.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<button className="group bg-cyan-400 hover:bg-cyan-500 text-slate-950 px-8 py-4 rounded-full text-base font-semibold transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-400/20" style={{}}>
                        Join Our Club
                        <svg aria-hidden="true" className="lucide lucide-arrow-right w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="group bg-white hover:bg-slate-50 text-slate-950 border border-slate-200 px-8 py-4 rounded-full text-base font-semibold transition-all flex items-center justify-center gap-2" style={{}}>
<svg aria-hidden="true" className="lucide lucide-play-circle w-5 h-5 text-slate-600" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
                        Watch Video
                    </button>
</div>
</div>
<div className="relative">
<div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-900/10 rotate-1 hover:rotate-0 transition-transform duration-500" style={{}}>
<img alt="Runners" className="w-full h-[600px] object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/50 flex items-center gap-4">
<div className="bg-slate-100 p-3 rounded-xl text-slate-800" style={{}}>
<svg aria-hidden="true" className="lucide lucide-activity w-6 h-6" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<div className="">
<p className="text-sm text-green-500 font-medium">Daily Distance</p>
<p className="text-2xl font-bold text-slate-950" style={{}}>12.5 km</p>
</div>
<div className="ml-auto">
<div className="flex -space-x-3">
<img alt="" className="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<img alt="" className="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<div className="w-10 h-10 rounded-full border-2 border-white bg-slate-950 text-white flex items-center justify-center text-xs font-medium" style={{}}>+2k</div>
</div>
</div>
</div>
</div>

<div className="absolute -top-12 -right-12 text-slate-200" style={{}}>
<svg aria-hidden="true" className="lucide lucide-grid w-32 h-32 opacity-50" data-lucide="grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M3 15h18"></path><path d="M9 3v18"></path><path d="M15 3v18"></path></svg>
</div>
</div>
</div>
</header>

<section className="bg-slate-950 py-12 border-y border-slate-900" style={{}}>
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-60 grayscale">
<div className="flex items-center gap-2 text-white text-xl font-semibold"><svg aria-hidden="true" className="lucide lucide-triangle fill-current" data-lucide="triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path></svg> Sitemark</div>
<div className="flex items-center gap-2 text-white text-xl font-semibold"><svg aria-hidden="true" className="lucide lucide-aperture fill-current" data-lucide="aperture" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle className="" cx="12" cy="12" r="10"></circle><path d="m14.31 8 5.74 9.94"></path><path d="M9.69 8h11.48"></path><path d="m7.38 12 5.74-9.94"></path><path d="M9.69 16 3.95 6.06"></path><path d="M14.31 16H2.83"></path><path d="m16.62 12-5.74 9.94"></path></svg> Inspirex</div>
<div className="flex text-xl font-semibold text-white gap-x-2 gap-y-2 items-center"><svg aria-hidden="true" className="lucide lucide-circle-dot fill-current" data-lucide="circle-dot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle className="" cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="1"></circle></svg> PinPoint</div>
<div className="flex items-center gap-2 text-white text-xl font-semibold"><svg aria-hidden="true" className="lucide lucide-activity fill-current" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg> Nextmove</div>
<div className="flex items-center gap-2 text-white text-xl font-semibold"><svg aria-hidden="true" className="lucide lucide-wind fill-current" data-lucide="wind" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.8 19.6A2 2 0 1 0 14 16H2"></path><path d="M17.5 8a2.5 2.5 0 1 1 2 4H2"></path><path d="M9.8 4.4A2 2 0 1 1 11 8H2"></path></svg> Fitteams</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="bg-slate-100/50 rounded-[3rem] p-8 lg:p-12 border border-slate-100" style={{}}>
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="relative group">
<div className="absolute inset-0 bg-slate-950 rounded-3xl translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" style={{}}></div>
<img alt="Community" className="relative rounded-3xl shadow-xl w-full object-cover h-96 grayscale group-hover:grayscale-0 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="space-y-8">
<div>
<h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-slate-950 italic mb-4" style={{}}>
                                ELEVATE YOUR RUNS WITH THE ULTIMATE COMMUNITY
                            </h2>
<p className="text-lg text-green-600 leading-relaxed">
                                Join a global network of runners committed to pushing limits. Whether you're a beginner or a marathon veteran, we have a place for you.
                            </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="flex items-start gap-3">
<div className="bg-slate-200 p-1 rounded-full text-slate-800 mt-1" style={{}}>
<svg aria-hidden="true" className="lucide lucide-check w-4 h-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-lg font-medium text-slate-900" style={{}}>Affordable Price</span>
</div>
<div className="flex items-start gap-3">
<div className="bg-slate-200 p-1 rounded-full text-slate-800 mt-1" style={{}}>
<svg aria-hidden="true" className="lucide lucide-check w-4 h-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-lg font-medium text-slate-900" style={{}}>Professional Team</span>
</div>
<div className="flex items-start gap-3">
<div className="bg-slate-200 p-1 rounded-full text-slate-800 mt-1" style={{}}>
<svg aria-hidden="true" className="lucide lucide-check w-4 h-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-lg font-medium text-slate-900" style={{}}>Do it online</span>
</div>
<div className="flex items-start gap-3">
<div className="bg-slate-200 p-1 rounded-full text-slate-800 mt-1" style={{}}>
<svg aria-hidden="true" className="lucide lucide-check w-4 h-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-lg font-medium text-slate-900" style={{}}>Flexible Time</span>
</div>
</div>
<button className="bg-cyan-400 hover:bg-cyan-500 text-slate-950 px-8 py-3 rounded-full text-base font-semibold transition-colors flex items-center gap-2" style={{}}>
                            About Us
                            <svg aria-hidden="true" className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="max-w-xl">
<h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-slate-950 italic mb-4" style={{}}>OUR PROGRAM &amp; SERVICES</h2>
<p className="text-lg text-green-500">Comprehensive training plans designed for every level of runner.</p>
</div>
<button className="bg-cyan-400 text-slate-950 px-8 py-3 rounded-full font-semibold hover:bg-cyan-500 transition" style={{}}>All Services</button>
</div>
<div className="space-y-8">

<div className="group relative rounded-[2.5rem] overflow-hidden h-[400px] shadow-sm hover:shadow-xl transition-shadow">
<img alt="Group Running" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/30 transition-colors" style={{}}></div>
<div className="absolute top-12 left-8 md:left-12 bg-white/95 backdrop-blur-sm p-8 rounded-3xl max-w-md shadow-lg">
<h3 className="text-2xl font-bold text-slate-950 mb-3 uppercase tracking-tight" style={{}}>Group Running</h3>
<p className="text-green-600 mb-6 text-base">Train with peers in a supportive environment tailored to improve your stamina and speed.</p>
<a className="inline-flex items-center text-sm font-bold text-slate-700 hover:text-slate-900 tracking-wide uppercase" href="#" style={{}}>
                            Learn More <svg aria-hidden="true" className="lucide lucide-arrow-up-right w-4 h-4 ml-1" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="group relative rounded-[2.5rem] overflow-hidden h-[400px] shadow-sm hover:shadow-xl transition-shadow">
<img alt="Workshops" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-slate-950/20" style={{}}></div>
<div className="absolute bottom-8 right-8 left-8 md:left-auto bg-white/95 backdrop-blur-sm p-8 rounded-3xl max-w-sm shadow-lg ml-auto">
<h3 className="text-2xl font-bold text-slate-950 mb-3 uppercase tracking-tight" style={{}}>Training Workshops</h3>
<p className="text-green-600 mb-6 text-base">Expert-led sessions focused on nutrition, recovery, and technique.</p>
<a className="inline-flex items-center text-sm font-bold text-slate-700 hover:text-slate-900 tracking-wide uppercase" href="#" style={{}}>
                                Learn More <svg aria-hidden="true" className="lucide lucide-arrow-up-right w-4 h-4 ml-1" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</div>

<div className="group relative rounded-[2.5rem] overflow-hidden h-[400px] shadow-sm hover:shadow-xl transition-shadow">
<img alt="Retreats" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1483721310020-03333e577078?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-slate-950/20" style={{}}></div>
<div className="absolute top-8 left-8 bg-white/95 backdrop-blur-sm p-8 rounded-3xl max-w-sm shadow-lg">
<h3 className="text-2xl font-bold text-slate-950 mb-3 uppercase tracking-tight" style={{}}>Running Retreats</h3>
<p className="text-green-600 mb-6 text-base">Weekend getaways in nature to recharge and reconnect with your passion.</p>
<a className="inline-flex items-center text-sm font-bold text-slate-700 hover:text-slate-900 tracking-wide uppercase" href="#" style={{}}>
                                Learn More <svg aria-hidden="true" className="lucide lucide-arrow-up-right w-4 h-4 ml-1" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-950 text-white relative overflow-hidden" style={{}}>

<svg aria-hidden="true" className="lucide lucide-zap absolute top-20 right-0 w-96 h-96 text-slate-900/20 -rotate-12" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<h2 className="text-4xl lg:text-5xl font-bold tracking-tight italic mb-4">RUNNING EVENTS COMING UP</h2>
<p className="text-slate-200/80 text-lg" style={{}}>Challenge yourself and meet the community at our upcoming races.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-slate-50 rounded-3xl overflow-hidden text-slate-950 hover:-translate-y-2 transition-transform duration-300 shadow-2xl shadow-black/20 group" style={{}}>
<div className="h-64 overflow-hidden relative">
<div className="absolute top-4 right-4 bg-cyan-400 text-slate-950 text-xs font-bold px-3 py-1 rounded-full z-10" style={{}}>OPEN</div>
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-6" style={{}}>
<div className="text-white">
<h3 className="text-2xl font-bold italic">AARLEY MARATHON</h3>
<p className="text-sm opacity-90">Oct 8, 2023</p>
</div>
</div>
</div>
<div className="p-8 space-y-4">
<div className="flex items-center gap-3 text-green-500">
<svg aria-hidden="true" className="lucide lucide-map-pin w-5 h-5 text-slate-600" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="text-base font-medium">Boston, USA</span>
</div>
<div className="flex items-center gap-3 text-green-500">
<svg aria-hidden="true" className="lucide lucide-clock w-5 h-5 text-slate-600" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-base font-medium">06:00 AM - Finish</span>
</div>
<div className="pt-4 border-t border-slate-100 flex items-center justify-between" style={{}}>
<div className="text-3xl font-bold text-slate-950" style={{}}>$10<span className="text-sm text-green-400 font-normal">/Ticket</span></div>
<button className="w-12 h-12 rounded-full bg-cyan-400 flex items-center justify-center hover:bg-cyan-500 transition-colors" style={{}}>
<svg aria-hidden="true" className="lucide lucide-arrow-right w-6 h-6 text-slate-950" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>

<div className="bg-slate-50 rounded-3xl overflow-hidden text-slate-950 hover:-translate-y-2 transition-transform duration-300 shadow-2xl shadow-black/20 group" style={{}}>
<div className="h-64 overflow-hidden relative">
<div className="absolute top-4 right-4 bg-slate-950 text-white text-xs font-bold px-3 py-1 rounded-full z-10" style={{}}>FILLING FAST</div>
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-6" style={{}}>
<div className="text-white">
<h3 className="text-2xl font-bold italic">FUN RUN 10K</h3>
<p className="text-sm opacity-90">Sep 19, 2023</p>
</div>
</div>
</div>
<div className="p-8 space-y-4">
<div className="flex items-center gap-3 text-green-500">
<svg aria-hidden="true" className="lucide lucide-map-pin w-5 h-5 text-slate-600" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="text-base font-medium">New York, USA</span>
</div>
<div className="flex items-center gap-3 text-green-500">
<svg aria-hidden="true" className="lucide lucide-clock w-5 h-5 text-slate-600" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-base font-medium">07:30 AM - Finish</span>
</div>
<div className="pt-4 border-t border-slate-100 flex items-center justify-between" style={{}}>
<div className="text-3xl font-bold text-slate-950" style={{}}>$30<span className="text-sm text-green-400 font-normal">/Ticket</span></div>
<button className="w-12 h-12 rounded-full bg-cyan-400 flex items-center justify-center hover:bg-cyan-500 transition-colors" style={{}}>
<svg aria-hidden="true" className="lucide lucide-arrow-right w-6 h-6 text-slate-950" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>

<div className="bg-slate-50 rounded-3xl overflow-hidden text-slate-950 hover:-translate-y-2 transition-transform duration-300 shadow-2xl shadow-black/20 group" style={{}}>
<div className="h-64 overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-6 z-10" style={{}}>
<div className="text-white">
<h3 className="text-2xl font-bold italic">NYC MARATHON</h3>
<p className="text-sm opacity-90">Nov 12, 2023</p>
</div>
</div>
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="p-8 space-y-4">
<div className="flex items-center gap-3 text-green-500">
<svg aria-hidden="true" className="lucide lucide-map-pin w-5 h-5 text-slate-600" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="text-base font-medium">New York, USA</span>
</div>
<div className="flex items-center gap-3 text-green-500">
<svg aria-hidden="true" className="lucide lucide-clock w-5 h-5 text-slate-600" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-base font-medium">05:00 AM - Finish</span>
</div>
<div className="pt-4 border-t border-slate-100 flex items-center justify-between" style={{}}>
<div className="text-3xl font-bold text-slate-950" style={{}}>$40<span className="text-sm text-green-400 font-normal">/Ticket</span></div>
<button className="w-12 h-12 rounded-full bg-cyan-400 flex items-center justify-center hover:bg-cyan-500 transition-colors" style={{}}>
<svg aria-hidden="true" className="lucide lucide-arrow-right w-6 h-6 text-slate-950" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" style={{}}>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
<div className="">
<h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-slate-950 italic mb-6" style={{}}>TRUSTED BY THOUSANDS</h2>
<p className="text-lg text-green-500 mb-8">See what our community members have to say about their journey with us.</p>
<div className="flex -space-x-4">
<img alt="" className="w-14 h-14 rounded-full border-4 border-slate-50 object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=100&amp;q=80" style={{}}/>
<img alt="" className="w-14 h-14 rounded-full border-4 border-slate-50 object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=100&amp;q=80" style={{}}/>
<img alt="" className="w-14 h-14 rounded-full border-4 border-slate-50 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp" style={{}}/>
<div className="w-14 h-14 rounded-full border-4 border-slate-50 bg-slate-950 text-white flex items-center justify-center font-bold" style={{}}>+2k</div>
</div>
</div>
<div className="grid gap-6">

<div className="bg-slate-900 p-8 rounded-3xl text-white relative shadow-lg" style={{}}>
<svg aria-hidden="true" className="lucide lucide-quote w-10 h-10 text-slate-800 absolute top-8 right-8" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<p className="text-lg font-medium leading-relaxed mb-6">"Joining the running club was a game-changer for me. I used to struggle with consistency, but the group runs gave me the motivation I needed."</p>
<div className="flex items-center gap-4">
<img className="w-12 h-12 rounded-full border-2 border-slate-700" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&amp;fit=crop&amp;w=100&amp;q=80" style={{}}/>
<div>
<div className="font-bold text-lg">John Doe</div>
<div className="text-slate-400 text-sm" style={{}}>Marathon Runner</div>
</div>
<div className="ml-auto flex text-cyan-400" style={{}}>
<svg aria-hidden="true" className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-3xl text-green-700 relative shadow-lg ml-8 border border-slate-100" style={{}}>
<svg aria-hidden="true" className="lucide lucide-quote w-10 h-10 text-slate-100 absolute top-8 right-8" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<p className="text-lg font-medium leading-relaxed mb-6">"As an experienced runner, I found the advanced workshops incredibly technical and helpful. My pace has improved significantly."</p>
<div className="flex items-center gap-4">
<img className="w-12 h-12 rounded-full border-2 border-green-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div>
<div className="font-bold text-lg text-slate-950" style={{}}>Mike Shearer</div>
<div className="text-green-400 text-sm">Professional Athlete</div>
</div>
<div className="ml-auto flex text-cyan-400" style={{}}>
<svg aria-hidden="true" className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-0 relative">
<div className="bg-slate-950 h-[600px] flex items-center relative overflow-hidden clip-slant" style={{}}>
<div className="absolute inset-0 z-0 opacity-40">
<img className="w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent z-10" style={{}}></div>
<div className="max-w-7xl mx-auto px-6 relative z-20 w-full">
<div className="max-w-2xl">
<h2 className="text-5xl lg:text-7xl font-bold tracking-tight text-white italic mb-6">
                        DISCOVER THE JOY OF 
                        RUNNING — JOIN TODAY!
                    </h2>
<p className="text-xl text-slate-100 mb-10 leading-relaxed" style={{}}>
                        Start your journey towards a healthier, faster, and more confident version of yourself. First session is on us.
                    </p>
<button className="bg-cyan-400 hover:bg-cyan-500 text-slate-950 px-10 py-4 rounded-full text-lg font-bold transition-all shadow-xl shadow-cyan-400/20 flex items-center gap-2" style={{}}>
                        Join Now
                        <svg aria-hidden="true" className="lucide lucide-arrow-right-circle w-6 h-6" data-lucide="arrow-right-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m12 16 4-4-4-4"></path><path d="M8 12h8"></path></svg>
</button>
</div>
</div>
</div>

<div className="absolute bottom-0 right-0 lg:right-20 z-30 hidden lg:block">
<img className="h-[650px] object-cover drop-shadow-2xl" src="https://images.unsplash.com/photo-1599552683573-9dc48255fe85?auto=format&amp;fit=crop&amp;q=80&amp;w=600" style={{maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'}}/>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-slate-950 italic" style={{}}>LATEST BLOG &amp; ARTICLES</h2>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group cursor-pointer">
<div className="rounded-3xl overflow-hidden mb-6 relative h-64">
<span className="absolute top-4 left-4 bg-cyan-400 text-slate-950 text-xs font-bold px-3 py-1.5 rounded-full z-10 uppercase" style={{}}>Insight</span>
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<h3 className="text-2xl font-bold text-slate-950 mb-3 group-hover:text-slate-700 transition-colors uppercase tracking-tight" style={{}}>ELEVATE YOUR RUNNING THE EXPERTISE TRAINING</h3>
<p className="text-green-500 text-lg">Detailed guide on how to structure your weekly mileage for maximum gain.</p>
</div>

<div className="group cursor-pointer">
<div className="rounded-3xl overflow-hidden mb-6 relative h-64">
<span className="absolute top-4 left-4 bg-cyan-400 text-slate-950 text-xs font-bold px-3 py-1.5 rounded-full z-10 uppercase" style={{}}>Tips &amp; Trick</span>
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1571388208497-71bedc66e932?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<h3 className="text-2xl font-bold text-slate-950 mb-3 group-hover:text-slate-700 transition-colors uppercase tracking-tight" style={{}}>MEMORIES AND CAMARADERIE EXPLORING JOURNEYS</h3>
<p className="text-green-500 text-lg">Why group running builds mental resilience and creates lasting friendships.</p>
</div>

<div className="group cursor-pointer">
<div className="rounded-3xl overflow-hidden mb-6 relative h-64">
<span className="absolute top-4 left-4 bg-cyan-400 text-slate-950 text-xs font-bold px-3 py-1.5 rounded-full z-10 uppercase" style={{}}>Tips &amp; Trick</span>
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<h3 className="text-2xl font-bold text-slate-950 mb-3 group-hover:text-slate-700 transition-colors uppercase tracking-tight" style={{}}>FROM SOLE TO SOUL THE THRIVING COMMUNITY</h3>
<p className="text-green-500 text-lg">The psychological benefits of outdoor cardio and connection.</p>
</div>
</div>
</div>
</section>

<footer className="bg-slate-950 text-white pt-20 pb-10 border-t border-slate-900" style={{}}>
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-16">
<div className="space-y-6">
<div className="flex items-center gap-2 mb-6">
<svg aria-hidden="true" className="lucide lucide-zap w-6 h-6 fill-cyan-400 text-slate-950" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="text-2xl font-bold italic">7JOGGERS</span>
</div>
<p className="text-slate-200/60 leading-relaxed text-base" style={{}}>We're more than just a group of runners, we're a vibrant community united by our passion for movement.</p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-cyan-400 hover:text-slate-950 transition-all" href="#" style={{}}><svg aria-hidden="true" className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
<a className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-cyan-400 hover:text-slate-950 transition-all" href="#" style={{}}><svg aria-hidden="true" className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-cyan-400 hover:text-slate-950 transition-all" href="#" style={{}}><svg aria-hidden="true" className="lucide lucide-youtube w-5 h-5" data-lucide="youtube" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg></a>
<a className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-cyan-400 hover:text-slate-950 transition-all" href="#" style={{}}><svg aria-hidden="true" className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect className="" height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path className="" d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
</div>
</div>
<div className="">
<h4 className="text-lg font-bold mb-6">LINKS</h4>
<ul className="space-y-4 text-slate-200/60 text-base" style={{}}>
<li className=""><a className="hover:text-cyan-400 transition-colors" href="#" style={{}}>Home</a></li>
<li className=""><a className="hover:text-cyan-400 transition-colors" href="#" style={{}}>About</a></li>
<li className=""><a className="hover:text-cyan-400 transition-colors" href="#" style={{}}>Pricing</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#" style={{}}>Events</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#" style={{}}>Blog</a></li>
</ul>
</div>
<div className="">
<h4 className="text-lg font-bold mb-6">LEGAL</h4>
<ul className="space-y-4 text-slate-200/60 text-base" style={{}}>
<li><a className="hover:text-cyan-400 transition-colors" href="#" style={{}}>Help Center</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#" style={{}}>Contact</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#" style={{}}>FAQ</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#" style={{}}>Privacy Policy</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#" style={{}}>Terms &amp; Conditions</a></li>
</ul>
</div>
<div>
<h4 className="text-lg font-bold mb-6">OUR NEWSLETTER</h4>
<div className="relative mb-6">
<input className="w-full bg-slate-900/50 border border-slate-800 rounded-full py-3 px-6 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400" placeholder="Your Email" style={{}} type="email"/>
<button className="absolute right-1 top-1 bg-cyan-400 text-slate-950 px-6 py-2 rounded-full text-sm font-bold hover:bg-cyan-500 transition-colors" style={{}}>Subscribe</button>
</div>
<div className="space-y-2 text-slate-200/60 text-sm" style={{}}>
<div className="flex items-center gap-3">
<svg aria-hidden="true" className="lucide lucide-phone w-4 h-4 text-cyan-400" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
                            +123-456-7890
                        </div>
<div className="flex items-center gap-3">
<svg aria-hidden="true" className="lucide lucide-mail w-4 h-4 text-cyan-400" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
                            joggers@support.com
                        </div>
</div>
</div>
</div>
<div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-200/40 text-sm" style={{}}>
<p>Running Club &amp; Marathon Template Kit</p>
<p>Copyright © 2023. All rights reserved.</p>
<button className="bg-slate-800 p-2 rounded-full hover:bg-slate-700 transition" style={{}}><svg aria-hidden="true" className="lucide lucide-arrow-up w-4 h-4" data-lucide="arrow-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg></button>
</div>
</div>
</footer>


    </>
  );
}
