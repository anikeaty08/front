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
      

<nav className="fixed top-0 w-full z-50 border-b border-stone-200 bg-white/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-rose-950 rounded flex items-center justify-center text-white shadow-md shadow-stone-200">
<span className="iconify" data-icon="lucide:church" data-width="18"></span>
</div>
<span className="text-sm font-medium text-rose-950 tracking-tight">Citywide Fellowship</span>
</div>
<div className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-500">
<a className="hover:text-rose-950 transition-colors" href="#find-group">Find a Group</a>
<a className="hover:text-rose-950 transition-colors" href="#lead-group">Lead a Group</a>
<div className="h-4 w-px bg-stone-200"></div>
<a className="text-stone-500 hover:text-rose-950 transition-colors" href="#">Sign In</a>
</div>
<div className="md:hidden text-rose-950">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</div>
</div>
</nav>

<main className="pt-32 pb-16 relative overflow-hidden">
<div className="absolute inset-0 bg-glow pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-rose-950 mb-6 leading-[1.1]">
                Life is better <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-br from-stone-500 to-rose-950">in community.</span>
</h1>
<p className="text-lg md:text-xl text-stone-500 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                Connect with neighbors, grow in faith, and share life together. Whether you are looking to join a table or set one, there is a place for you here.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 bg-rose-950 text-white text-sm font-medium rounded-md hover:bg-rose-900 transition-colors shadow-xl shadow-stone-200 flex items-center justify-center gap-2" href="#find-group">
<span className="iconify" data-icon="lucide:search" data-width="16"></span>
                    Find a Group Nearby
                </a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-white border border-stone-200 text-stone-600 text-sm font-medium rounded-md hover:bg-stone-50 hover:text-rose-950 transition-all flex items-center justify-center gap-2 shadow-sm" href="#lead-group">
<span className="iconify" data-icon="lucide:plus" data-width="16"></span>
                    Start a Group
                </a>
</div>
</div>
</main>

<section className="py-20 border-t border-stone-200 bg-stone-50/50 relative" id="find-group">
<div className="absolute inset-0 bg-dots opacity-50 pointer-events-none"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 border border-rose-200 text-rose-900 mb-4">
<span className="iconify" data-icon="lucide:map-pin" data-width="12"></span>
<span className="text-xs font-semibold uppercase tracking-wider">Participant View</span>
</div>
<h2 className="text-3xl font-medium text-rose-950 tracking-tight">Find a group near you</h2>
<p className="text-stone-500 mt-2">Enter your location to see open homes in your area.</p>
</div>
</div>

<div className="bg-white rounded-xl shadow-xl shadow-stone-200/60 border border-stone-200 overflow-hidden mb-12">

<div className="flex flex-col md:flex-row border-b border-stone-100">
<div className="flex-1 p-2">
<div className="relative group">
<span className="absolute left-4 top-3.5 text-stone-400 group-focus-within:text-rose-900 transition-colors">
<span className="iconify" data-icon="lucide:search" data-width="20"></span>
</span>
<input className="w-full h-12 pl-12 pr-4 bg-stone-50 rounded-lg text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-rose-100 focus:bg-white transition-all" placeholder="City, Zip Code, or Neighborhood..." type="text"/>
</div>
</div>
<div className="hidden md:block w-px bg-stone-100 my-2"></div>

<div className="flex items-center gap-2 p-2 overflow-x-auto">
<button className="px-4 py-2.5 rounded-lg border border-stone-200 bg-white text-stone-600 text-sm hover:border-rose-200 hover:text-rose-950 transition-colors whitespace-nowrap flex items-center gap-2">
<span className="iconify" data-icon="lucide:calendar" data-width="14"></span>
                            Any Day
                        </button>
<button className="px-4 py-2.5 rounded-lg border border-stone-200 bg-white text-stone-600 text-sm hover:border-rose-200 hover:text-rose-950 transition-colors whitespace-nowrap flex items-center gap-2">
<span className="iconify" data-icon="lucide:users" data-width="14"></span>
                            Demographic
                        </button>
<button className="px-4 py-2.5 rounded-lg border border-stone-200 bg-white text-stone-600 text-sm hover:border-rose-200 hover:text-rose-950 transition-colors whitespace-nowrap flex items-center gap-2">
<span className="iconify" data-icon="lucide:filter" data-width="14"></span>
                            More
                        </button>
</div>
<div className="p-2">
<button className="w-full md:w-auto px-6 py-2.5 bg-rose-950 text-white rounded-lg text-sm font-medium hover:bg-rose-900 transition-colors shadow-sm">
                            Search
                        </button>
</div>
</div>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white rounded-xl border border-stone-200 p-5 hover-lift group cursor-pointer">
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-rose-100 text-rose-800 flex items-center justify-center font-semibold text-sm">
                                JM
                            </div>
<div>
<h3 className="text-stone-900 font-medium text-sm">The Miller Home</h3>
<p className="text-xs text-stone-500">North Hills</p>
</div>
</div>
<span className="bg-stone-100 text-stone-600 text-[10px] font-semibold px-2 py-1 rounded uppercase tracking-wide">0.8 mi</span>
</div>
<div className="space-y-2 mb-4">
<div className="flex items-center gap-2 text-sm text-stone-600">
<span className="iconify text-stone-400" data-icon="lucide:calendar-clock" data-width="16"></span>
<span>Tuesdays @ 7:00 PM</span>
</div>
<div className="flex items-center gap-2 text-sm text-stone-600">
<span className="iconify text-stone-400" data-icon="lucide:users-2" data-width="16"></span>
<span>Mixed Adults</span>
</div>
</div>
<div className="flex gap-2 mb-4">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-green-50 text-green-700 border border-green-100">
                            Open
                        </span>
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-stone-50 text-stone-600 border border-stone-100">
                            Kids Welcome
                        </span>
</div>
<button className="w-full py-2 rounded-lg border border-stone-200 text-sm font-medium text-stone-600 hover:border-rose-200 hover:text-rose-900 hover:bg-rose-50/50 transition-colors">
                        Request to Join
                    </button>
</div>

<div className="bg-white rounded-xl border border-stone-200 p-5 hover-lift group cursor-pointer">
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-orange-100 text-orange-800 flex items-center justify-center font-semibold text-sm">
                                CW
                            </div>
<div>
<h3 className="text-stone-900 font-medium text-sm">Chen &amp; Wright</h3>
<p className="text-xs text-stone-500">Downtown</p>
</div>
</div>
<span className="bg-stone-100 text-stone-600 text-[10px] font-semibold px-2 py-1 rounded uppercase tracking-wide">2.1 mi</span>
</div>
<div className="space-y-2 mb-4">
<div className="flex items-center gap-2 text-sm text-stone-600">
<span className="iconify text-stone-400" data-icon="lucide:calendar-clock" data-width="16"></span>
<span>Wednesdays @ 6:30 PM</span>
</div>
<div className="flex items-center gap-2 text-sm text-stone-600">
<span className="iconify text-stone-400" data-icon="lucide:users-2" data-width="16"></span>
<span>Young Professionals</span>
</div>
</div>
<div className="flex gap-2 mb-4">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-amber-50 text-amber-700 border border-amber-100">
                            Few Spots Left
                        </span>
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-stone-50 text-stone-600 border border-stone-100">
                            Dinner Provided
                        </span>
</div>
<button className="w-full py-2 rounded-lg border border-stone-200 text-sm font-medium text-stone-600 hover:border-rose-200 hover:text-rose-900 hover:bg-rose-50/50 transition-colors">
                        Request to Join
                    </button>
</div>

<div className="bg-white rounded-xl border border-stone-200 p-5 hover-lift group cursor-pointer">
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center font-semibold text-sm">
                                D
                            </div>
<div>
<h3 className="text-stone-900 font-medium text-sm">Davidson Study</h3>
<p className="text-xs text-stone-500">West End</p>
</div>
</div>
<span className="bg-stone-100 text-stone-600 text-[10px] font-semibold px-2 py-1 rounded uppercase tracking-wide">4.5 mi</span>
</div>
<div className="space-y-2 mb-4">
<div className="flex items-center gap-2 text-sm text-stone-600">
<span className="iconify text-stone-400" data-icon="lucide:calendar-clock" data-width="16"></span>
<span>Thursdays @ 6:30 AM</span>
</div>
<div className="flex items-center gap-2 text-sm text-stone-600">
<span className="iconify text-stone-400" data-icon="lucide:users-2" data-width="16"></span>
<span>Men's Group</span>
</div>
</div>
<div className="flex gap-2 mb-4">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-green-50 text-green-700 border border-green-100">
                            Open
                        </span>
</div>
<button className="w-full py-2 rounded-lg border border-stone-200 text-sm font-medium text-stone-600 hover:border-rose-200 hover:text-rose-900 hover:bg-rose-50/50 transition-colors">
                        Request to Join
                    </button>
</div>
</div>
</div>
</section>

<div className="h-24 bg-gradient-to-b from-stone-50 to-white border-b border-stone-200"></div>

<section className="py-24 bg-white" id="lead-group">
<div className="max-w-6xl mx-auto px-6">

<div className="flex flex-col md:flex-row gap-12 mb-20">
<div className="md:w-1/3">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-900 mb-6">
<span className="iconify" data-icon="lucide:crown" data-width="12"></span>
<span className="text-xs font-semibold uppercase tracking-wider">Leadership View</span>
</div>
<h2 className="text-4xl font-medium text-rose-950 tracking-tight leading-tight mb-4">
                        Step into <br/> leadership.
                    </h2>
<p className="text-stone-500 leading-relaxed">
                        Starting a group is a higher commitment. We are looking for leaders willing to facilitate discipleship, open their homes, and partner with the church vision.
                    </p>
</div>

<div className="md:w-2/3 grid sm:grid-cols-2 gap-6">
<div className="p-6 rounded-xl bg-stone-50 border border-stone-100 hover:border-rose-100 transition-colors">
<div className="w-8 h-8 rounded bg-white border border-stone-200 flex items-center justify-center text-rose-900 mb-3 shadow-sm">
<span className="iconify" data-icon="lucide:book-open" data-width="16"></span>
</div>
<h4 className="font-medium text-rose-950 mb-1">Curriculum Provided</h4>
<p className="text-xs text-stone-500">Weekly discussion guides synced with sermons.</p>
</div>
<div className="p-6 rounded-xl bg-stone-50 border border-stone-100 hover:border-rose-100 transition-colors">
<div className="w-8 h-8 rounded bg-white border border-stone-200 flex items-center justify-center text-rose-900 mb-3 shadow-sm">
<span className="iconify" data-icon="lucide:graduation-cap" data-width="16"></span>
</div>
<h4 className="font-medium text-rose-950 mb-1">Training</h4>
<p className="text-xs text-stone-500">Quarterly workshops on group dynamics.</p>
</div>
<div className="p-6 rounded-xl bg-stone-50 border border-stone-100 hover:border-rose-100 transition-colors">
<div className="w-8 h-8 rounded bg-white border border-stone-200 flex items-center justify-center text-rose-900 mb-3 shadow-sm">
<span className="iconify" data-icon="lucide:wallet" data-width="16"></span>
</div>
<h4 className="font-medium text-rose-950 mb-1">Reimbursements</h4>
<p className="text-xs text-stone-500">Stipends for snacks and childcare costs.</p>
</div>
<div className="p-6 rounded-xl bg-stone-50 border border-stone-100 hover:border-rose-100 transition-colors">
<div className="w-8 h-8 rounded bg-white border border-stone-200 flex items-center justify-center text-rose-900 mb-3 shadow-sm">
<span className="iconify" data-icon="lucide:heart-handshake" data-width="16"></span>
</div>
<h4 className="font-medium text-rose-950 mb-1">Coaching</h4>
<p className="text-xs text-stone-500">1-on-1 support from a pastor.</p>
</div>
</div>
</div>

<div className="max-w-3xl mx-auto bg-stone-50/50 border border-stone-200 rounded-2xl p-8 shadow-2xl shadow-stone-200/50 relative">
<div className="absolute -top-4 left-8 bg-rose-950 text-white text-xs font-semibold px-3 py-1 rounded shadow-sm">
                    Leader Application
                </div>
<form className="space-y-6">
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-1.5">
<label className="text-xs font-medium text-stone-500">Full Name</label>
<input className="w-full bg-white border border-stone-200 rounded-md px-3 py-2.5 text-sm text-stone-900 focus:outline-none focus:border-rose-400 focus:ring-1 focus:ring-rose-400 transition-all placeholder:text-stone-400" placeholder="e.g. Jane Doe" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-stone-500">Email Address</label>
<input className="w-full bg-white border border-stone-200 rounded-md px-3 py-2.5 text-sm text-stone-900 focus:outline-none focus:border-rose-400 focus:ring-1 focus:ring-rose-400 transition-all placeholder:text-stone-400" placeholder="jane@example.com" type="email"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-stone-500">Hosting Address</label>
<div className="relative">
<span className="absolute left-3 top-2.5 text-stone-400">
<span className="iconify" data-icon="lucide:home" data-width="16"></span>
</span>
<input className="w-full bg-white border border-stone-200 rounded-md pl-9 pr-3 py-2.5 text-sm text-stone-900 focus:outline-none focus:border-rose-400 focus:ring-1 focus:ring-rose-400 transition-all placeholder:text-stone-400" placeholder="Street Address" type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-stone-500">Profession of Christian Faith</label>
<textarea className="w-full bg-white border border-stone-200 rounded-md px-3 py-2.5 text-sm text-stone-900 focus:outline-none focus:border-rose-400 focus:ring-1 focus:ring-rose-400 transition-all placeholder:text-stone-400" placeholder="Please briefly describe your testimony and profession of faith in Jesus Christ..." rows="4"></textarea>
</div>
<div className="space-y-3 pt-2">
<label className="text-xs font-medium text-stone-500">Theological Requirement</label>
<div className="p-4 bg-white border border-stone-200 rounded-lg space-y-4">
<label className="flex items-start gap-3 cursor-pointer group">
<input className="mt-1" name="theology" type="radio"/>
<div className="w-full">
<span className="block text-sm font-medium text-stone-900">I have a Seminary or Theological Training background.</span>
<input className="mt-2 w-full bg-stone-50 border border-stone-200 rounded px-3 py-2 text-xs text-stone-900 focus:outline-none focus:border-rose-300 transition-all placeholder:text-stone-400" placeholder="Institution and Degree..." type="text"/>
</div>
</label>
<div className="w-full h-px bg-stone-100"></div>
<label className="flex items-start gap-3 cursor-pointer group">
<input className="mt-1" name="theology" type="radio"/>
<div>
<span className="block text-sm font-medium text-stone-900">I will attend the Seminary Extension.</span>
<p className="text-[10px] text-stone-500 leading-normal mt-1">I commit to enrolling in the upcoming term to fulfill the leadership theological training requirement.</p>
</div>
</label>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-stone-500">Target Audience</label>
<div className="grid grid-cols-2 md:grid-cols-4 gap-3">
<label className="cursor-pointer custom-checkbox group">
<input checked="" className="hidden" name="group-type" type="radio"/>
<div className="border border-stone-200 bg-white rounded-md p-3 text-center hover:bg-stone-50 transition-all">
<span className="block text-sm font-medium text-stone-500 group-hover:text-rose-950 transition-colors">Mixed</span>
</div>
</label>
<label className="cursor-pointer custom-checkbox group">
<input className="hidden" name="group-type" type="radio"/>
<div className="border border-stone-200 bg-white rounded-md p-3 text-center hover:bg-stone-50 transition-all">
<span className="block text-sm font-medium text-stone-500 group-hover:text-rose-950 transition-colors">Men</span>
</div>
</label>
<label className="cursor-pointer custom-checkbox group">
<input className="hidden" name="group-type" type="radio"/>
<div className="border border-stone-200 bg-white rounded-md p-3 text-center hover:bg-stone-50 transition-all">
<span className="block text-sm font-medium text-stone-500 group-hover:text-rose-950 transition-colors">Women</span>
</div>
</label>
<label className="cursor-pointer custom-checkbox group">
<input className="hidden" name="group-type" type="radio"/>
<div className="border border-stone-200 bg-white rounded-md p-3 text-center hover:bg-stone-50 transition-all">
<span className="block text-sm font-medium text-stone-500 group-hover:text-rose-950 transition-colors">Young Adults</span>
</div>
</label>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-stone-500">Leadership Vision</label>
<textarea className="w-full bg-white border border-stone-200 rounded-md px-3 py-2.5 text-sm text-stone-900 focus:outline-none focus:border-rose-400 focus:ring-1 focus:ring-rose-400 transition-all placeholder:text-stone-400" placeholder="Why do you feel called to lead a group this season?" rows="3"></textarea>
</div>
<div className="pt-4 border-t border-stone-200 space-y-4">
<div className="flex items-start gap-3">
<input className="mt-1" id="meetings" type="checkbox"/>
<label className="text-xs text-stone-600 leading-normal" htmlFor="meetings">
                                I commit to the <strong className="text-stone-900">weekly</strong> group meetings and the <strong className="text-stone-900">monthly</strong> leadership gathering.
                            </label>
</div>
<div className="flex items-start gap-3">
<input className="mt-1" id="covenant" type="checkbox"/>
<label className="text-xs text-stone-600 leading-normal" htmlFor="covenant">
                                I have read the <a className="text-rose-900 underline" href="#">Leadership Covenant</a> and agree to the expectations regarding doctrine and character.
                            </label>
</div>
<button className="w-full bg-rose-950 text-white font-medium py-3 rounded-md hover:bg-rose-900 transition-colors shadow-lg shadow-stone-200 flex items-center justify-center gap-2 mt-2" type="button">
                            Submit Application
                        </button>
</div>
</form>
</div>
</div>
</section>

<footer className="border-t border-stone-200 py-12 bg-white">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="iconify text-stone-400" data-icon="lucide:church" data-width="16"></span>
<span className="text-sm text-stone-500">Citywide Fellowship © 2024</span>
</div>
<div className="flex gap-6 text-sm text-stone-500">
<a className="hover:text-stone-800 transition-colors" href="#">Privacy</a>
<a className="hover:text-stone-800 transition-colors" href="#">Terms</a>
<a className="hover:text-stone-800 transition-colors" href="#">Contact</a>
</div>
</div>
</footer>

    </>
  );
}
