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



        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');
        const links = document.querySelectorAll('.mobile-link');

        function toggleMenu() {
            if (menu.classList.contains('-translate-y-[150%]')) {
                menu.classList.remove('-translate-y-[150%]', 'opacity-0');
                menu.classList.add('translate-y-0', 'opacity-100');
            } else {
                menu.classList.add('-translate-y-[150%]', 'opacity-0');
                menu.classList.remove('translate-y-0', 'opacity-100');
            }
        }

        btn.addEventListener('click', toggleMenu);
        links.forEach(link => link.addEventListener('click', toggleMenu));
    
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
      

<header className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-white/5 transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
<a className="text-xl font-semibold tracking-tighter text-white flex items-center gap-2" href="/">
<div className="w-6 h-6 rounded-full bg-lime-400 flex items-center justify-center text-zinc-950">
<iconify-icon className="text-sm" icon="solar:tennis-linear"></iconify-icon>
</div>
                TNNS
            </a>

<nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
<a className="text-white transition-colors" href="#">Dashboard</a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#">My Matches</a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#">Tournament Rules</a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#">Support</a>
</nav>
<div className="hidden lg:flex items-center gap-4">
<div className="flex items-center gap-3 border-l border-white/10 pl-4">
<div className="text-right hidden md:block">
<p className="text-xs font-medium text-white">Rahul Sharma</p>
<p className="text-[10px] text-zinc-500">Player ID: #TNNS-842</p>
</div>
<div className="w-9 h-9 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 overflow-hidden cursor-pointer hover:border-lime-400 transition-colors">
<iconify-icon className="text-lg" icon="solar:user-linear"></iconify-icon>
</div>
</div>
</div>

<button className="lg:hidden text-zinc-400 hover:text-white transition-colors p-1" id="mobile-menu-btn">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>

<div className="fixed inset-x-0 top-16 bg-zinc-950 border-b border-white/5 transform -translate-y-[150%] opacity-0 transition-all duration-500 ease-in-out lg:hidden shadow-2xl" id="mobile-menu">
<nav className="flex flex-col p-6 gap-4 text-base font-medium">
<a className="text-white mobile-link" href="#">Dashboard</a>
<a className="text-zinc-400 mobile-link" href="#">My Matches</a>
<a className="text-zinc-400 mobile-link" href="#">Tournament Rules</a>
<a className="text-zinc-400 mobile-link" href="#">Support</a>
<div className="pt-4 mt-2 border-t border-white/5 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400">
<iconify-icon className="text-xl" icon="solar:user-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-white">Rahul Sharma</p>
<p className="text-xs text-zinc-500">Sign Out</p>
</div>
</div>
</nav>
</div>
</header>

<main className="flex-grow pt-28 pb-20">
<div className="max-w-7xl mx-auto px-4 md:px-6">

<div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
<div>
<h1 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white mb-2">Welcome back, Rahul</h1>
<p className="text-zinc-400 text-sm">Manage your tournament registration, view your digital ticket, and track upcoming matches.</p>
</div>
<div className="flex items-center gap-3">
<button className="bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2.5 rounded-xl text-sm font-medium text-white transition-colors flex items-center gap-2">
<iconify-icon className="text-lg" icon="solar:printer-linear"></iconify-icon>
                        Print Details
                    </button>
<button className="bg-lime-400 hover:bg-lime-500 px-4 py-2.5 rounded-xl text-sm font-semibold text-zinc-950 transition-colors flex items-center gap-2 tracking-tight">
<iconify-icon className="text-lg" icon="solar:ticket-linear"></iconify-icon>
                        Download Pass
                    </button>
</div>
</div>
<div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

<div className="xl:col-span-2 space-y-6">

<div className="bg-zinc-900 border border-white/10 rounded-3xl flex flex-col md:flex-row overflow-hidden relative group">

<div className="p-6 md:p-8 flex-grow relative z-10">
<div className="flex justify-between items-start mb-8">
<div>
<div className="inline-flex items-center gap-1.5 bg-lime-400/10 border border-lime-400/20 text-lime-400 text-xs font-medium px-2.5 py-1 rounded-full mb-4">
<span className="w-1.5 h-1.5 bg-lime-400 rounded-full animate-pulse"></span>
                                        Registration Confirmed
                                    </div>
<h2 className="text-2xl font-semibold text-white tracking-tight mb-1">Men's Singles</h2>
<p className="text-sm text-zinc-400">TNNS Premium Tournament 2024</p>
</div>
<div className="w-12 h-12 rounded-full bg-zinc-950 border border-white/10 flex items-center justify-center text-lime-400">
<iconify-icon className="text-2xl" icon="solar:cup-star-linear"></iconify-icon>
</div>
</div>
<div className="grid grid-cols-2 gap-6 mb-6">
<div>
<p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Player</p>
<p className="text-base font-medium text-white">Rahul Sharma</p>
</div>
<div>
<p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Dates</p>
<p className="text-base font-medium text-white">Oct 12 - 14, 2024</p>
</div>
<div>
<p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Venue</p>
<p className="text-sm font-medium text-white leading-tight">Grand Slam Club,<br/>Bengaluru</p>
</div>
<div>
<p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Entry Fee</p>
<p className="text-base font-medium text-white">₹2,500 <span className="text-xs text-zinc-500 font-normal ml-1">(Paid)</span></p>
</div>
</div>
</div>

<div className="hidden md:flex flex-col items-center justify-center ticket-divider w-8 relative z-10">
<div className="h-full border-l-2 border-dashed border-white/10 my-4"></div>
</div>
<div className="md:hidden flex items-center justify-center relative w-full h-8 z-10 overflow-hidden">
<div className="w-full border-t-2 border-dashed border-white/10 mx-4"></div>

<div className="absolute left-[-12px] top-1/2 -translate-y-1/2 w-6 h-6 bg-zinc-950 rounded-full border border-white/10"></div>
<div className="absolute right-[-12px] top-1/2 -translate-y-1/2 w-6 h-6 bg-zinc-950 rounded-full border border-white/10"></div>
</div>

<div className="p-6 md:p-8 bg-zinc-900/50 flex flex-col items-center justify-center min-w-[200px] relative z-10">
<div className="bg-white p-3 rounded-xl mb-4">

<iconify-icon className="text-6xl text-zinc-950" icon="solar:qr-code-linear"></iconify-icon>
</div>
<p className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">Booking ID</p>
<p className="text-sm font-mono font-medium text-white tracking-widest">TNNS-842</p>
</div>

<div className="absolute top-0 right-1/4 w-64 h-64 bg-lime-400/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-lime-400/10 transition-colors duration-500"></div>
</div>

<div className="bg-zinc-950 border border-white/10 rounded-3xl p-6 md:p-8">
<div className="flex items-center justify-between mb-6">
<h3 className="text-xl font-semibold text-white tracking-tight">Match Schedule</h3>
<a className="text-sm text-lime-400 hover:text-lime-300 transition-colors flex items-center gap-1" href="#">
                                View Full Draw
                                <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="space-y-4">

<div className="bg-zinc-900/50 border border-white/5 hover:border-white/10 transition-colors rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-xl bg-lime-400/10 border border-lime-400/20 flex flex-col items-center justify-center flex-shrink-0">
<span className="text-xs text-lime-400 font-medium">OCT</span>
<span className="text-lg text-lime-400 font-semibold leading-none">12</span>
</div>
<div>
<div className="flex items-center gap-2 mb-1">
<span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Round 1 • Qualifier</span>
</div>
<p className="text-base font-medium text-white">vs. <span className="text-zinc-400 italic">To Be Decided</span></p>
</div>
</div>
<div className="flex sm:flex-col items-center sm:items-end gap-4 sm:gap-1 text-sm text-zinc-400">
<div className="flex items-center gap-1.5">
<iconify-icon className="text-zinc-500" icon="solar:clock-circle-linear"></iconify-icon>
                                        09:00 AM
                                    </div>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-zinc-500" icon="solar:map-point-linear"></iconify-icon>
                                        Court 4
                                    </div>
</div>
</div>

<div className="bg-zinc-900/20 border border-white/5 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 opacity-60">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center flex-shrink-0 text-zinc-600">
<iconify-icon className="text-xl" icon="solar:lock-linear"></iconify-icon>
</div>
<div>
<div className="flex items-center gap-2 mb-1">
<span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Quarter Finals</span>
</div>
<p className="text-base font-medium text-zinc-400">Requires qualification</p>
</div>
</div>
<div className="text-sm text-zinc-500 sm:text-right">
<p>Oct 13, 2024</p>
<p>TBD</p>
</div>
</div>
</div>
</div>
</div>

<div className="space-y-6">

<div className="bg-zinc-950 border border-white/10 rounded-3xl p-6">
<h3 className="text-sm font-medium text-zinc-400 uppercase tracking-wider mb-6">Status Checklist</h3>
<div className="space-y-5">
<div className="flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-lime-400/20 text-lime-400 flex items-center justify-center flex-shrink-0 mt-0.5">
<iconify-icon className="text-sm" icon="solar:check-read-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-white">Application Submitted</p>
<p className="text-xs text-zinc-500 mt-0.5">Oct 01, 2024</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-lime-400/20 text-lime-400 flex items-center justify-center flex-shrink-0 mt-0.5">
<iconify-icon className="text-sm" icon="solar:check-read-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-white">Payment Completed</p>
<p className="text-xs text-zinc-500 mt-0.5">Transaction ID: TXN-998231</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-lime-400/20 text-lime-400 flex items-center justify-center flex-shrink-0 mt-0.5">
<iconify-icon className="text-sm" icon="solar:check-read-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-white">ID Verification</p>
<p className="text-xs text-zinc-500 mt-0.5">Aadhaar verified successfully</p>
</div>
</div>
</div>
</div>

<div className="bg-zinc-950 border border-white/10 rounded-3xl p-6">
<div className="flex items-center justify-between mb-6">
<h3 className="text-sm font-medium text-zinc-400 uppercase tracking-wider">Player Profile</h3>
<button className="text-zinc-400 hover:text-white transition-colors">
<iconify-icon className="text-lg" icon="solar:pen-new-square-linear"></iconify-icon>
</button>
</div>
<div className="space-y-4">
<div>
<p className="text-xs text-zinc-500 mb-1">Email Address</p>
<p className="text-sm font-medium text-white">rahul.sharma@example.in</p>
</div>
<div>
<p className="text-xs text-zinc-500 mb-1">Phone Number</p>
<p className="text-sm font-medium text-white">+91 98765 43210</p>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<p className="text-xs text-zinc-500 mb-1">Age</p>
<p className="text-sm font-medium text-white">25 Years</p>
</div>
<div>
<p className="text-xs text-zinc-500 mb-1">City</p>
<p className="text-sm font-medium text-white">Bengaluru</p>
</div>
</div>
<div className="pt-2">
<p className="text-xs text-zinc-500 mb-2">Self-Rated Skill Level</p>
<div className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">
<iconify-icon className="text-lime-400" icon="solar:chart-square-linear"></iconify-icon>
<span className="text-sm font-medium text-white">Advanced (AITA Level)</span>
</div>
</div>
</div>
</div>

<div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-white/10 rounded-3xl p-6 relative overflow-hidden">
<div className="absolute -right-4 -bottom-4 text-white/5 pointer-events-none">
<iconify-icon className="text-9xl" icon="solar:question-circle-linear"></iconify-icon>
</div>
<div className="relative z-10">
<h3 className="text-lg font-semibold text-white tracking-tight mb-2">Need Assistance?</h3>
<p className="text-sm text-zinc-400 mb-4 leading-relaxed">Having trouble with your schedule or need to change your details?</p>
<button className="w-full bg-white/5 hover:bg-white/10 border border-white/10 py-2.5 rounded-xl text-sm font-medium text-white transition-colors flex items-center justify-center gap-2">
                                Contact Support
                                <iconify-icon icon="solar:letter-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</main>

<footer className="bg-zinc-950 pt-12 pb-8 border-t border-white/10 mt-auto">
<div className="max-w-7xl mx-auto px-4 md:px-6">
<div className="flex flex-col md:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2 text-white font-semibold tracking-tighter">
<div className="w-5 h-5 rounded-full bg-lime-400 flex items-center justify-center text-zinc-950">
<iconify-icon className="text-[10px]" icon="solar:tennis-linear"></iconify-icon>
</div>
                    TNNS Dashboard
                </div>
<div className="flex gap-6 text-sm text-zinc-500">
<a className="hover:text-white transition-colors" href="#">Tournament Rules</a>
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
