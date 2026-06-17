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
      

<nav className="fixed sm:px-6 z-50 pt-4 pr-4 pb-4 pl-4 top-0 right-0 left-0">
<div className="max-w-7xl mx-auto backdrop-blur-xl bg-white/10 border border-white/20 rounded-full px-6 py-3 flex items-center justify-between shadow-lg transition-all hover:bg-white/20">
<div className="flex items-center gap-2.5">
<div className="w-9 h-9 bg-[#ACBC37] rounded-full flex items-center justify-center text-white shadow-sm border border-[#ACBC37]/50">
<iconify-icon height="20" icon="solar:dollar-minimalistic-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<span className="text-base font-semibold tracking-tight text-white drop-shadow-md">
            FREECASH
          </span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 px-3 py-1.5 rounded-full transition-all" href="#">
            Divisions
          </a>
<a className="text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 px-3 py-1.5 rounded-full transition-all" href="#">
            Rankings
          </a>
<a className="text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 px-3 py-1.5 rounded-full transition-all" href="#">
            Rules
          </a>
</div>
<div className="flex items-center gap-3">
<button className="hidden md:flex items-center gap-2 bg-white text-stone-900 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-stone-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
            Player Login
          </button>
<button className="md:hidden p-2 text-white bg-white/20 rounded-full backdrop-blur-md flex items-center justify-center">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Padel League" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1620714223084-87bd6c669485?q=80&amp;w=3840&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-8 shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ACBC37] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#ACBC37]"></span>
</span>
<span className="uppercase text-xs font-semibold tracking-wide">
            Start Earning Real Money Today
          </span>
</div>
<h1 className="text-5xl sm:text-6xl lg:text-8xl font-semibold text-white tracking-tight leading-[1.05] mb-8">
          Earn Cash
          <br/>
<span className="text-white/60">Online with Freecash.</span>
</h1>
<p className="text-lg sm:text-xl text-stone-200 font-light max-w-xl mx-auto leading-relaxed mb-10">
          The premier rewards platform. Earn money by playing games, taking
          surveys, and testing apps. Fast payouts to PayPal, Crypto, and more.
        </p>
<div className="flex flex-col sm:flex-row items-center gap-4 justify-center w-full">
<a className="w-full sm:w-auto bg-[#ACBC37] text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-[#9aa931] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group border border-[#ACBC37]" href="https://freecash.com/r/8K3VV" target="_blank">
            Join Now
            <iconify-icon className="group-hover:translate-x-1 transition-transform" height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
<button className="w-full sm:w-auto bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full text-base font-medium hover:bg-white/20 border border-white/20 transition-all flex items-center justify-center gap-2">
<iconify-icon className="text-white/80" height="20" icon="solar:info-circle-linear" width="20"></iconify-icon>
            How It Works
          </button>
</div>
</div>
</header>

<section className="sm:px-6 lg:px-8 -mt-20 bg-white z-20 pt-24 pr-4 pb-24 pl-4 relative">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative h-[28rem] rounded-[2rem] overflow-hidden shadow-xl cursor-pointer">
<img alt="Scheduling" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-8 transform transition-transform duration-500 group-hover:translate-y-[-8px]">
<div className="w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white mb-4 border border-white/30">
<iconify-icon height="24" icon="solar:user-plus-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
                Sign Up Free
              </h3>
<p className="text-stone-300 font-medium leading-snug">
                Create your Freecash account in under a minute. It's completely
                free to join and start earning.
              </p>
</div>
</div>

<div className="group relative h-[28rem] rounded-[2rem] overflow-hidden shadow-xl cursor-pointer">
<img alt="Competition" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-8 transform transition-transform duration-500 group-hover:translate-y-[-8px]">
<div className="w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white mb-4 border border-white/30">
<iconify-icon height="24" icon="solar:gamepad-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
                Choose Tasks
              </h3>
<p className="text-stone-300 font-medium leading-snug">
                Browse thousands of offers: play mobile games, complete surveys,
                and test new apps.
              </p>
</div>
</div>

<div className="group relative h-[28rem] rounded-[2rem] overflow-hidden shadow-xl cursor-pointer">
<img alt="Stats" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1580519542036-c47de6196ba5?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-8 transform transition-transform duration-500 group-hover:translate-y-[-8px]">
<div className="w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white mb-4 border border-white/30">
<iconify-icon height="24" icon="solar:wallet-money-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
                Get Paid
              </h3>
<p className="text-stone-300 font-medium leading-snug">
                Cash out your coins for real money via PayPal, Gift Cards,
                Bitcoin, and other crypto options.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 px-4 sm:px-6 lg:px-8 bg-stone-50">
<div className="max-w-7xl mr-auto ml-auto">
<div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
<div className="">
<span className="text-sm font-semibold text-[#0379B9] uppercase tracking-wider mb-2 block">
              Structure
            </span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-900">
              Why Join Freecash?
            </h2>
<p className="text-stone-500 mt-2">
              Maximize your income with these features.
            </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group bg-white rounded-3xl p-2 shadow-sm border border-stone-100 hover:shadow-md transition-all">
<div className="relative h-48 rounded-2xl overflow-hidden mb-4">
<img alt="Division 1" className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover" src="https://images.unsplash.com/photo-1556740758-90de2742e1e2?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-xs font-bold text-[#ACBC37] uppercase tracking-wide border border-stone-200">
                Advanced
              </div>
</div>
<div className="px-4 pb-4">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-bold text-[#0379B9] bg-blue-50 px-2 py-1 rounded-md">
                  Division 1
                </span>
<span className="text-xs font-medium text-stone-500">
                  PayPal / Crypto
                </span>
</div>
<h3 className="text-xl font-semibold text-stone-900 mb-2">
                Fast Withdrawals
              </h3>
<p className="text-stone-500 text-sm mb-4">
                Many offers pay instantly. Withdraw to your preferred method.
              </p>
<button className="w-full py-3 rounded-xl border border-stone-200 text-stone-900 font-medium text-sm hover:bg-stone-50 transition-colors">
                View Methods
              </button>
</div>
</div>

<div className="group bg-white rounded-3xl p-2 shadow-sm border border-stone-100 hover:shadow-md transition-all">
<div className="relative h-48 rounded-2xl overflow-hidden mb-4">
<img alt="Division 2" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1579621970563-ebec7560eb3e?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-xs font-bold text-[#ACBC37] uppercase tracking-wide border border-stone-200">
                Popular
              </div>
</div>
<div className="px-4 pb-4">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-bold text-[#0379B9] bg-blue-50 px-2 py-1 rounded-md">
                  Division 2
                </span>
<span className="text-xs font-medium text-stone-500">
                  Up to $100+
                </span>
</div>
<h3 className="text-xl font-semibold text-stone-900 mb-2">
                High Paying Tasks
              </h3>
<p className="text-stone-500 text-sm mb-4">
                Earn significant amounts by completing premium game offers.
              </p>
<button className="w-full py-3 rounded-xl border border-stone-200 text-stone-900 font-medium text-sm hover:bg-stone-50 transition-colors">
                Start Earning
              </button>
</div>
</div>

<div className="group bg-white rounded-3xl p-2 shadow-sm border border-stone-100 hover:shadow-md transition-all opacity-90">
<div className="relative h-48 rounded-2xl overflow-hidden mb-4">
<img alt="Division 3" className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1521791136064-7985c2d25e79?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 bg-stone-100/90 backdrop-blur px-3 py-1 rounded-lg text-xs font-bold text-stone-500 uppercase tracking-wide border border-stone-200">
                FRIENDS
              </div>
</div>
<div className="px-4 pb-4">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-bold text-[#0379B9] bg-blue-50 px-2 py-1 rounded-md">
                  Division 3
                </span>
<span className="text-xs font-medium text-stone-500">
                  Commissions
                </span>
</div>
<h3 className="text-xl font-semibold text-stone-900 mb-2">
                Invite &amp; Earn
              </h3>
<p className="text-stone-500 text-sm mb-4">
                One of the highest paying referral programs available.
              </p>
<button className="w-full py-3 rounded-xl border border-stone-200 text-stone-900 font-medium text-sm hover:bg-stone-50 transition-colors">
                Get Link
              </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 px-4 sm:px-6 lg:px-8">
<div className="max-w-7xl mx-auto">
<div className="relative bg-[#1a1a19] rounded-[3rem] overflow-hidden p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 border border-stone-800 shadow-2xl">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<div className="relative flex-1 text-center md:text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#ACBC37]/10 text-[#ACBC37] text-xs font-bold uppercase tracking-widest mb-6 border border-[#ACBC37]/20">
              New Feature
            </div>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-4">
              Pro Tips for Max Earnings
            </h2>
<p className="text-xl text-stone-400 max-w-lg mb-8 leading-relaxed">
              Complete daily tasks, invite friends, and stay active to unlock
              more offers and better rewards.
            </p>
<button className="bg-[#ACBC37] text-white px-8 py-4 rounded-full text-base font-bold hover:bg-[#9aa931] transition-colors inline-flex items-center gap-2">
              Sign Up &amp; Earn
              <iconify-icon height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
<div className="relative flex-1 w-full max-w-md">

<div className="bg-stone-800/50 backdrop-blur-xl border border-stone-700 rounded-3xl p-8 relative overflow-hidden">
<div className="flex items-center justify-between mb-8">
<span className="text-stone-300 font-medium">Recent Activity</span>
<div className="flex gap-1">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
</div>
</div>
<div className="space-y-4 mb-8">
<div className="flex items-center justify-between bg-stone-700/50 p-4 rounded-2xl border border-stone-600">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#ACBC37] flex items-center justify-center text-white font-bold">
<iconify-icon icon="solar:notes-linear" width="20"></iconify-icon>
</div>
<div className="text-white text-sm">
<div className="font-bold">Market Research</div>
<div className="text-stone-400 text-xs">
                        Survey • Just now
                      </div>
</div>
</div>
<span className="text-[#ACBC37] font-mono font-bold">+$2.50</span>
</div>
<div className="flex items-center justify-between bg-stone-700/50 p-4 rounded-2xl border border-stone-600">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
<iconify-icon icon="solar:gamepad-linear" width="20"></iconify-icon>
</div>
<div className="text-white text-sm">
<div className="font-bold">Mobile Game</div>
<div className="text-stone-400 text-xs">
                        Level 10 • 1h ago
                      </div>
</div>
</div>
<span className="text-[#ACBC37] font-mono font-bold">
                    +$15.00
                  </span>
</div>
</div>
<div className="flex justify-between items-end">
<div>
<p className="text-stone-400 text-xs uppercase mb-1">
                    Total Earned
                  </p>
<p className="text-3xl font-bold text-white">$1,240.50</p>
</div>
<div className="text-[#ACBC37] flex items-center gap-1 text-sm font-bold">
                  +24%
                  <iconify-icon height="16" icon="solar:graph-up-linear" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-stone-900 mb-4">
            Quick Summary
          </h2>
<p className="text-lg text-stone-500">
            Simple steps to your first payout.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">

<div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-stone-100 z-0"></div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-24 h-24 bg-stone-50 rounded-full border border-stone-200 flex items-center justify-center text-stone-900 mb-6 shadow-sm transition-transform hover:scale-110 duration-300">
<iconify-icon height="32" icon="solar:user-circle-linear" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-stone-900 mb-2">
              1. Free to Join
            </h3>
<p className="text-sm text-stone-500 max-w-[200px]">
              Zero cost to start earning.
            </p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-24 h-24 bg-stone-50 rounded-full border border-stone-200 flex items-center justify-center text-stone-900 mb-6 shadow-sm transition-transform hover:scale-110 duration-300">
<iconify-icon height="32" icon="solar:checklist-minimalistic-linear" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-stone-900 mb-2">
              2. Tasks for All
            </h3>
<p className="text-sm text-stone-500 max-w-[200px]">
              Games, surveys, and app trials.
            </p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-24 h-24 bg-stone-50 rounded-full border border-stone-200 flex items-center justify-center text-stone-900 mb-6 shadow-sm transition-transform hover:scale-110 duration-300">
<iconify-icon height="32" icon="solar:wallet-money-linear" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-stone-900 mb-2">
              3. Multiple Payouts
            </h3>
<p className="text-sm text-stone-500 max-w-[200px]">
              PayPal, crypto, gift cards.
            </p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-24 h-24 bg-[#ACBC37]/20 rounded-full border border-[#ACBC37] flex items-center justify-center text-[#0379B9] mb-6 shadow-sm transition-transform hover:scale-110 duration-300">
<iconify-icon height="32" icon="solar:users-group-two-rounded-linear" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-stone-900 mb-2">
              4. Referral Bonus
            </h3>
<p className="text-sm text-stone-500 max-w-[200px]">
              Earn when friends join &amp; earn.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 sm:px-6 lg:px-8 bg-stone-50 overflow-hidden">
<div className="max-w-7xl mx-auto">
<div className="bg-white rounded-[3rem] p-8 md:p-12 lg:p-16 border border-stone-100 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
<div className="flex-1 relative order-2 lg:order-1">
<div className="absolute -inset-4 bg-[#ACBC37] rounded-full opacity-20 blur-3xl"></div>
<img alt="Players" className="relative rounded-3xl shadow-xl w-full object-cover aspect-[4/3] rotate-2 border-4 border-white" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-1 order-1 lg:order-2">
<div className="w-12 h-12 bg-[#ACBC37] rounded-full flex items-center justify-center text-white mb-8">
<iconify-icon height="24" icon="solar:quote-up-linear" width="24"></iconify-icon>
</div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-stone-900 mb-8 leading-tight">
              "I've tried many rewards sites, but Freecash is the best. I earned
              $50 in my first week just playing games on my phone."
            </h2>
<div className="flex items-center gap-4">
<div className="flex flex-col">
<span className="text-lg font-bold text-stone-900">Michael T.</span>
<span className="text-stone-500">Active Earner</span>
</div>
</div>
<div className="mt-8 flex gap-3">
<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-stone-100 text-stone-600">
                Legit
              </span>
<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-stone-100 text-stone-600">
                Fast Payout
              </span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 sm:px-6 lg:px-8 bg-white text-center">
<div className="max-w-3xl mx-auto">
<h2 className="text-5xl md:text-6xl font-semibold text-stone-900 tracking-tight mb-6">
          Ready to start earning?
        </h2>
<p className="text-xl text-stone-500 mb-10 leading-relaxed">
          Sign up through our link for potential bonus rewards and start earning
          today.
        </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="bg-[#0379B9] text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#026296] hover:scale-105 transition-all shadow-lg" href="https://freecash.com/r/8K3VV" target="_blank">
            Join Freecash
          </a>
</div>
</div>
</section>

<footer className="bg-stone-50 border-t border-stone-200 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-[#ACBC37] rounded-full flex items-center justify-center text-white border border-[#ACBC37]">
<div className="w-2 h-2 bg-stone-900 rounded-full"></div>
</div>
<span className="text-sm font-semibold tracking-tight text-stone-900">
            FREECASH
          </span>
</div>
<div className="text-stone-400 text-sm">
          © 2024 The Padel League. All rights reserved.
        </div>
<div className="flex gap-6">
<a className="text-stone-400 hover:text-[#0379B9] transition-colors text-sm font-medium" href="#">
            © 2024 Freecash Review. All rights reserved.
          </a>
<a className="text-stone-400 hover:text-[#0379B9] transition-colors text-sm font-medium" href="#">
            Privacy
          </a>
</div>
</div>
</footer>

    </>
  );
}
