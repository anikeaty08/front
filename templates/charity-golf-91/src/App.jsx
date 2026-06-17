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
      <div className="fixed top-0 w-full h-screen -z-10 bg-cover bg-center" data-alpha-mask="80" id="aura-image" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b363c834-7d3a-41e2-a46e-7f893e27602e_3840w.png?w=800&amp', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>

<div className="fixed bg-center w-full h-screen bg-cover top-0" data-alpha-mask="80" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b363c834-7d3a-41e2-a46e-7f893e27602e_3840w.png?w=800&amp', maskImage: 'linear-gradient(180deg, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 80%, transparent)'}}></div>

<div className="fixed z-0 pointer-events-none top-0 right-0 bottom-0 left-0">
<img alt="Golf Course" className="w-full h-full object-cover object-bottom opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>

<nav className="relative z-10 w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">

<div className="flex items-center gap-2.5 cursor-pointer group">
<div className="shadow-[#254c79]/20 group-hover:bg-[#1e3d61] transition-colors bg-[#254c79] rounded-lg pt-2 pr-2 pb-2 pl-2 shadow-lg">
<img alt="Cherokee Hope Golf Classic" className="h-8 w-auto object-contain brightness-0 invert" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0f3e2471-41f0-453e-9244-37efa84f7966_3840w.png"/>
</div>
</div>

<div className="hidden md:flex items-center gap-8">

<a className="flex items-center gap-2 text-sm hover:text-white/80 transition-colors font-medium text-slate-50" href="#">
<iconify-icon className="" icon="solar:file-download-linear" width="16"></iconify-icon>
                Download Brochure
            </a>
<a className="text-sm hover:text-white/80 transition-colors font-medium text-slate-50" href="#">Contact</a>
<a className="text-sm hover:text-white/80 transition-colors font-medium text-slate-50" href="#">Sponsor</a>

<button className="text-sm hover:bg-[#1b3a5e] hover:text-white transition-all shadow-[#254c79]/20 font-medium text-slate-950 bg-slate-50 rounded-full ring-[#254c79] ring-1 px-5 py-2.5 shadow-xl">
                Register
            </button>

<div className="h-5 w-px bg-slate-50/20"></div>

<div className="flex items-center gap-5">
<button className="text-slate-50 hover:text-[#f1bd50] transition-colors relative group">
<iconify-icon icon="solar:cart-large-linear" width="22"></iconify-icon>
<span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f1bd50] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#f1bd50]"></span>
</span>
</button>
<button className="text-slate-50 hover:text-[#f1bd50] transition-colors">
<iconify-icon icon="solar:user-circle-linear" width="22"></iconify-icon>
</button>
</div>
</div>

<div className="flex items-center gap-5 md:hidden">
<button className="text-slate-900 bg-slate-50/90 p-2 rounded-full flex items-center justify-center backdrop-blur-sm">
<iconify-icon icon="solar:cart-large-linear" width="20"></iconify-icon>
</button>
<button className="text-[#254c79]">
<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
</nav>

<main className="flex flex-col sm:px-6 lg:px-8 min-h-[70vh] z-10 text-center max-w-5xl mr-auto ml-auto pt-12 pr-4 pb-16 pl-4 relative items-center justify-center">

<div className="group inline-flex items-center gap-2.5 bg-white/60 backdrop-blur-md border border-slate-200/60 rounded-full py-1.5 pl-1.5 pr-4 mb-10 shadow-sm cursor-pointer hover:border-[#f1bd50]/50 hover:shadow-md hover:shadow-[#f1bd50]/10 transition-all duration-300">
<span className="uppercase text-xs font-bold text-[#254c79] tracking-wide bg-[#f1bd50] rounded-full pt-1 pr-2.5 pb-1 pl-2.5">4/16/26</span>
<span className="group-hover:text-[#254c79] transition-colors text-sm font-medium text-slate-700">19th Annual</span>
</div>

<h1 className="sm:text-7xl leading-[1.1] text-5xl font-semibold text-slate-50 tracking-tight mb-5 drop-shadow-sm">
            Cherokee Hope <br className="hidden sm:block"/> Golf Classic
        </h1>

<div className="flex items-center gap-3 mb-8">
<div className="h-px w-8 bg-[#f1bd50]"></div>
<p className="uppercase sm:text-sm text-xs font-bold text-yellow-400 tracking-[0.2em] opacity-90">
                Presented by The Men of Hillside
            </p>
<div className="h-px w-8 bg-[#f1bd50]"></div>
</div>

<p className="leading-relaxed sm:text-2xl text-xl font-medium text-slate-50 max-w-2xl mb-10">
            Inspired by Christ’s love, we partner with local charities to offer <span className="font-semibold text-[#f1bd50]">hope</span> to those in need.
        </p>

<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
<button className="group w-full sm:w-auto flex items-center justify-center gap-2 bg-[#254c79] text-white px-8 py-3.5 rounded-full text-lg font-medium hover:bg-[#1e3d61] transition-all shadow-xl shadow-[#254c79]/30 ring-1 ring-[#254c79]">
                Register Now
                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
<button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/80 backdrop-blur-sm text-[#254c79] border border-slate-200 px-8 py-3.5 rounded-full text-lg font-medium hover:bg-white hover:border-[#254c79]/30 transition-all shadow-sm">
                Become a Sponsor
            </button>
</div>

</main>

<section className="flex flex-col bg-white w-full h-auto z-20 border-slate-100 border-t pt-16 pr-6 pb-16 pl-6 relative gap-x-8 gap-y-8 items-center justify-center">
<p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Our Community Partners</p>
<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 w-full max-w-6xl opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2 group cursor-pointer">
<span className="text-xl font-bold tracking-tighter text-slate-900 group-hover:text-[#254c79] transition-colors">ALPHASTREAM</span>
</div>

<div className="flex items-center gap-2 group cursor-pointer">
<span className="text-xl font-serif font-semibold italic tracking-tight text-slate-900 group-hover:text-[#254c79] transition-colors">Oak &amp; Iron</span>
</div>

<div className="flex items-center gap-2 group cursor-pointer">
<span className="text-2xl font-extrabold tracking-tight text-slate-900 group-hover:text-[#254c79] transition-colors">VANTAGE</span>
</div>

<div className="flex items-center gap-2 group cursor-pointer">
<span className="text-2xl font-medium tracking-tight text-slate-900 group-hover:text-[#254c79] transition-colors">meridian.</span>
</div>

<div className="flex items-center gap-2 group cursor-pointer">
<span className="text-lg font-bold tracking-widest border-2 border-slate-900 px-2 py-0.5 text-slate-900 group-hover:border-[#254c79] group-hover:text-[#254c79] transition-colors">STRUCTURE</span>
</div>
</div>
</section>

<section className="relative z-20 bg-slate-50 py-24 px-6 border-t border-slate-200/60">
<div className="max-w-7xl mx-auto">

<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-5xl font-semibold text-slate-900 tracking-tight mb-4">Tournament Details</h2>
<p className="text-lg text-slate-600 font-normal leading-relaxed">
                    Thank you for your interest in playing in and/or sponsoring our 19th Annual Cherokee Hope Golf Classic.
                </p>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-full bg-[#f1bd50]/20 flex items-center justify-center text-[#997323] mb-6">
<iconify-icon icon="solar:calendar-date-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Date</h3>
<p className="text-slate-900 font-medium">April 16, 2026</p>
<p className="text-slate-500 mt-1">Thursday</p>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-full bg-[#254c79]/10 flex items-center justify-center text-[#254c79] mb-6">
<iconify-icon icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Location</h3>
<p className="text-slate-900 font-medium">Eagle Watch Golf Club</p>
<p className="text-slate-500 mt-1 text-sm leading-relaxed">
                        3055 Eagle Watch Dr<br/>Woodstock, GA 30189
                    </p>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-full bg-[#f1bd50]/20 flex items-center justify-center text-[#997323] mb-6">
<iconify-icon icon="solar:wallet-money-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Cost</h3>
<div className="flex flex-col gap-1">
<div className="flex justify-between items-center pb-2 border-b border-slate-100">
<span className="text-slate-600 text-sm">Individual</span>
<span className="font-semibold text-[#254c79]">$200</span>
</div>
<div className="flex justify-between items-center pt-1">
<span className="text-slate-600 text-sm">Foursome</span>
<span className="font-semibold text-[#254c79]">$700</span>
</div>
</div>
<p className="text-xs text-slate-400 font-medium mt-3 italic">
                        (Included with some sponsorships)
                    </p>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 mb-6">
<iconify-icon icon="solar:bag-heart-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Included</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-3 line-clamp-2">
                        Green fees, cart, range balls, breakfast, lunch, gifts.
                    </p>
<div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-[#254c79]">
<iconify-icon icon="solar:star-linear" width="14"></iconify-icon>
<span>Plus Awards</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/60 lg:col-span-1 h-full">
<div className="flex items-center gap-3 mb-8">
<iconify-icon className="text-[#254c79]" icon="solar:calendar-date-linear" width="24"></iconify-icon>
<h3 className="text-xl font-semibold text-slate-900">Schedule</h3>
</div>
<div className="relative pl-4 border-l border-slate-200 space-y-8">

<div className="relative">
<div className="absolute -left-[21px] top-1.5 w-3 h-3 rounded-full bg-[#254c79] ring-4 ring-white"></div>
<span className="text-xs font-bold text-[#254c79] uppercase tracking-wider block mb-1">8:00 AM</span>
<p className="text-slate-900 font-medium">Chick-Fil-A Breakfast &amp; Registration</p>
</div>

<div className="relative">
<div className="absolute -left-[21px] top-1.5 w-3 h-3 rounded-full bg-slate-200 ring-4 ring-white"></div>
<span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">8:00 AM - 9:00 AM</span>
<p className="text-slate-900 font-medium">Putting Contest &amp; Driving Range Warm Up</p>
</div>

<div className="relative">
<div className="absolute -left-[21px] top-1.5 w-3 h-3 rounded-full bg-[#f1bd50] ring-4 ring-white"></div>
<span className="text-xs font-bold text-[#b58c33] uppercase tracking-wider block mb-1">9:30 AM</span>
<p className="text-slate-900 font-medium">Shotgun Start</p>
</div>

<div className="relative">
<div className="absolute -left-[21px] top-1.5 w-3 h-3 rounded-full bg-slate-200 ring-4 ring-white"></div>
<span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Post-Tournament</span>
<div className="flex flex-col gap-1.5">
<p className="text-slate-900 font-medium">Lunch at the 19th Hole</p>
<p className="text-slate-900 font-medium">Silent Auction</p>
<p className="text-slate-900 font-medium">Presentation of Awards</p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/60">
<h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:clipboard-list-linear"></iconify-icon>
                            Format &amp; Rules
                        </h3>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-slate-600 text-sm">
<iconify-icon className="text-[#254c79] mt-0.5 min-w-[16px]" icon="solar:check-circle-linear"></iconify-icon>
                                Scramble Format
                            </li>
<li className="flex items-start gap-3 text-slate-600 text-sm">
<iconify-icon className="text-[#254c79] mt-0.5 min-w-[16px]" icon="solar:check-circle-linear"></iconify-icon>
                                Mulligan Packages Available ($50)
                            </li>
<li className="flex items-start gap-3 text-slate-600 text-sm">
<iconify-icon className="text-[#254c79] mt-0.5 min-w-[16px]" icon="solar:check-circle-linear"></iconify-icon>
                                Entry into Putting Contest is $5
                            </li>
<li className="flex items-start gap-3 text-slate-600 text-sm pt-2 border-t border-slate-100">
<iconify-icon className="text-slate-400 mt-0.5 min-w-[16px]" icon="solar:t-shirt-linear"></iconify-icon>
                                Dress Code: Shirt with Collar, No Denim, No Metal Spikes
                            </li>
</ul>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/60">
<h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:cup-first-linear"></iconify-icon>
                            Awards &amp; Prizes
                        </h3>
<div className="space-y-4 text-sm text-slate-600 leading-relaxed">
<p>
                                 First and second place teams will receive individual awards. Prizes for closest to the pin, longest drive, and putting contest winners.
                            </p>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/60 md:col-span-2">
<div className="flex flex-col md:flex-row gap-6 md:items-start">
<div className="flex-1">
<h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:hand-money-linear"></iconify-icon>
                                    Silent Auction
                                </h3>
<p className="text-slate-600 text-sm leading-relaxed mb-4">
                                    Auction items (gifts, sports memorabilia, vacation packages, golf outings) viewable at tournament and online beginning 04/1/26.
                                </p>
<p className="text-slate-600 text-sm leading-relaxed mb-6">
                                    Winners announced at conclusion of tournament. Non-golfers/spouses invited to attend and bid (guest lunch $20).
                                </p>
<a className="inline-flex items-center justify-center gap-2 bg-[#254c79] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#1e3d61] transition-all shadow-lg shadow-[#254c79]/20" href="#">
                                    Silent Auction
                                    <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="shrink-0 md:border-l md:border-slate-100 md:pl-6 flex flex-col justify-center">
<div className="bg-slate-50 rounded-xl p-4 text-center border border-slate-100">
<span className="block text-xs font-bold uppercase text-slate-400 tracking-wider mb-1">Online Bidding Starts</span>
<span className="block text-xl font-bold text-[#254c79]">April 1, 2026</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-16 text-center">
<button className="group inline-flex items-center justify-center gap-2 bg-[#254c79] text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-[#1e3d61] transition-all shadow-xl shadow-[#254c79]/20 hover:shadow-[#254c79]/30 ring-1 ring-[#254c79] transform hover:-translate-y-0.5">
                    Register as a Player
                    <iconify-icon icon="solar:user-plus-linear" width="20"></iconify-icon>
</button>
<p className="mt-4 text-sm text-slate-400 font-medium">Secure your spot today. Limited availability.</p>
</div>
</div>
</section>

<section className="relative z-20 bg-white py-24 px-6 border-t border-slate-200">
<div className="max-w-6xl mr-auto ml-auto">

<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-5xl font-semibold text-slate-900 tracking-tight mb-4">Sponsorship Opportunities</h2>
<p className="text-lg text-slate-600 font-normal leading-relaxed">
                    Partner with us to make a difference. Choose a sponsorship level that best fits your organization's goals.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">

<div className="md:col-span-2 relative overflow-hidden bg-slate-900 p-8 md:p-10 rounded-3xl shadow-lg border border-slate-800 group">
<div className="absolute top-0 right-0 w-64 h-64 bg-[#f1bd50] rounded-full blur-[100px] opacity-10 -translate-y-1/2 translate-x-1/2"></div>
<div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
<div className="flex-1">
<div className="flex items-center gap-3 mb-3">
<span className="bg-[#f1bd50] text-[#254c79] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Exclusive</span>
<h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">Tournament Title Sponsor</h3>
</div>
<p className="text-slate-300 text-lg leading-relaxed mb-6 md:mb-0">
                                The ultimate level of support. Receives all the exclusive perks from a <span className="text-[#f1bd50] font-medium">Premier Sponsorship</span> plus maximum visibility.
                            </p>
</div>
<div className="flex flex-col items-start md:items-end gap-2 shrink-0">
<span className="text-4xl md:text-5xl font-bold text-white tracking-tight">$5,000</span>
<span className="text-slate-400 text-sm font-medium flex items-center gap-1">
                                Tax Deductible
                                <iconify-icon icon="solar:info-circle-linear" width="14"></iconify-icon>
</span>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200/80 hover:border-[#254c79]/30 transition-colors flex flex-col relative overflow-hidden">
<div className="absolute top-0 left-0 w-1.5 h-full bg-[#254c79]"></div>
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="text-xl font-bold text-slate-900">Premier Sponsor</h3>
<p className="text-slate-500 text-sm mt-1">High Visibility Package</p>
</div>
<span className="text-2xl font-bold text-[#254c79]">$3,000</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#254c79] mt-0.5 shrink-0" icon="solar:users-group-two-rounded-linear" width="18"></iconify-icon>
<span className="text-slate-700 text-sm">One team of four players + large mulligan package per player</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#254c79] mt-0.5 shrink-0" icon="solar:record-circle-linear" width="18"></iconify-icon>
<span className="text-slate-700 text-sm">Custom banner displayed at registration entrance</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#254c79] mt-0.5 shrink-0" icon="solar:record-circle-linear" width="18"></iconify-icon>
<span className="text-slate-700 text-sm">Recognition in all ads, social media, program/rules &amp; auction site</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#254c79] mt-0.5 shrink-0" icon="solar:record-circle-linear" width="18"></iconify-icon>
<span className="text-slate-700 text-sm">Recognition at program start &amp; during awards banquet</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#254c79] mt-0.5 shrink-0" icon="solar:signpost-linear" width="18"></iconify-icon>
<span className="text-slate-700 text-sm">Custom signage on a tee box</span>
</li>
</ul>
</div>

<div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200/80 hover:border-[#f1bd50] transition-colors flex flex-col relative overflow-hidden">
<div className="absolute top-0 left-0 w-1.5 h-full bg-[#f1bd50]"></div>
<div className="flex justify-between items-start mb-6">
<div className="">
<h3 className="text-xl font-bold text-slate-900">Gold Sponsor</h3>
<p className="text-slate-500 text-sm mt-1">Course Presence Package</p>
</div>
<span className="text-2xl font-bold text-[#b58c33]">$2,000</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#b58c33] mt-0.5 shrink-0" icon="solar:users-group-two-rounded-linear" width="18"></iconify-icon>
<span className="text-slate-700 text-sm">One team of four players + eight raffle tickets</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#b58c33] mt-0.5 shrink-0" icon="solar:flag-linear" width="18"></iconify-icon>
<span className="text-slate-700 text-sm">Custom signage on Beverage Cart, Putting Green, Driving Range, Long Drive or Auction Area</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#b58c33] mt-0.5 shrink-0" icon="solar:record-circle-linear" width="18"></iconify-icon>
<span className="text-slate-700 text-sm">Recognition in all advertising, program/rules &amp; silent auction site</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#b58c33] mt-0.5 shrink-0" icon="solar:signpost-linear" width="18"></iconify-icon>
<span className="text-slate-700 text-sm">Custom signage on a tee box</span>
</li>
</ul>
</div>

<div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200/80 hover:border-slate-300 transition-colors flex flex-col relative overflow-hidden">
<div className="absolute top-0 left-0 w-1.5 h-full bg-slate-300"></div>
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="text-xl font-bold text-slate-900">Silver Sponsor</h3>
<p className="text-slate-500 text-sm mt-1">Team &amp; Recognition</p>
</div>
<span className="text-2xl font-bold text-slate-600">$1,000</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3">
<iconify-icon className="text-slate-400 mt-0.5 shrink-0" icon="solar:users-group-two-rounded-linear" width="18"></iconify-icon>
<span className="text-slate-700 text-sm">One team of four players + eight raffle tickets</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-slate-400 mt-0.5 shrink-0" icon="solar:book-linear" width="18"></iconify-icon>
<span className="text-slate-700 text-sm">Recognition in program/rules &amp; silent auction site</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-slate-400 mt-0.5 shrink-0" icon="solar:signpost-linear" width="18"></iconify-icon>
<span className="text-slate-700 text-sm">Custom signage on a tee box</span>
</li>
</ul>
</div>

<div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200/80 hover:border-amber-700/40 transition-colors flex flex-col relative overflow-hidden">
<div className="absolute top-0 left-0 w-1.5 h-full bg-amber-700/60"></div>
<div className="flex justify-between items-start mb-6">
<div className="">
<h3 className="text-xl font-bold text-slate-900">Bronze Sponsor</h3>
<p className="text-slate-500 text-sm mt-1">Supporter Package</p>
</div>
<span className="text-2xl font-bold text-amber-800">$250</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3">
<iconify-icon className="text-amber-800/70 mt-0.5 shrink-0" icon="solar:book-linear" width="18"></iconify-icon>
<span className="text-slate-700 text-sm">Recognition in program/rules</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-amber-800/70 mt-0.5 shrink-0" icon="solar:signpost-linear" width="18"></iconify-icon>
<span className="text-slate-700 text-sm">Custom signage on a tee box</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="relative z-20 bg-slate-50 py-24 px-6 border-t border-slate-200">
<div className="max-w-6xl mx-auto">

<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-5xl font-semibold text-slate-900 tracking-tight mb-4">Our Sponsors</h2>
<p className="text-lg text-slate-600 font-normal leading-relaxed">
                    We are incredibly grateful for the generous support of our sponsors who make this event possible.
                </p>
</div>
<div className="space-y-16">

<div className="space-y-6">
<p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-[#254c79]">Premier Sponsors</p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="bg-white border border-slate-200 p-8 rounded-xl flex items-center justify-center h-32 hover:border-[#254c79]/30 hover:shadow-md transition-all group">
<span className="text-2xl font-bold tracking-tight text-slate-800 group-hover:text-[#254c79] transition-colors">APEX FINANCIAL</span>
</div>
<div className="bg-white border border-slate-200 p-8 rounded-xl flex items-center justify-center h-32 hover:border-[#254c79]/30 hover:shadow-md transition-all group">
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-400 group-hover:text-[#254c79] transition-colors" icon="solar:hospital-linear" width="32"></iconify-icon>
<span className="text-2xl font-serif italic font-semibold tracking-tight text-slate-800 group-hover:text-[#254c79] transition-colors">Northside Hospital</span>
</div>
</div>
</div>
</div>

<div className="space-y-6">
<p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-[#b58c33]">Gold Sponsors</p>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
<div className="bg-white border border-slate-200 p-6 rounded-xl flex items-center justify-center h-24 hover:border-[#b58c33]/30 hover:shadow-sm transition-all group">
<span className="text-xl font-bold tracking-tighter text-slate-700 group-hover:text-[#b58c33] transition-colors">Chick-fil-A</span>
</div>
<div className="bg-white border border-slate-200 p-6 rounded-xl flex items-center justify-center h-24 hover:border-[#b58c33]/30 hover:shadow-sm transition-all group">
<span className="text-xl font-semibold tracking-widest uppercase text-slate-700 group-hover:text-[#b58c33] transition-colors">Delta</span>
</div>
<div className="bg-white border border-slate-200 p-6 rounded-xl flex items-center justify-center h-24 hover:border-[#b58c33]/30 hover:shadow-sm transition-all group">
<span className="text-xl font-extrabold text-slate-700 group-hover:text-[#b58c33] transition-colors">THE HOME DEPOT</span>
</div>
</div>
</div>

<div className="space-y-6">
<p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Silver Sponsors</p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="bg-white border border-slate-200 p-4 rounded-lg flex items-center justify-center h-20 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
<span className="text-lg font-bold text-slate-900">Publix.</span>
</div>
<div className="bg-white border border-slate-200 p-4 rounded-lg flex items-center justify-center h-20 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
<span className="text-lg font-serif italic text-slate-900">Coca-Cola</span>
</div>
<div className="bg-white border border-slate-200 p-4 rounded-lg flex items-center justify-center h-20 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
<span className="text-lg font-bold text-slate-900 tracking-tight">Kroger</span>
</div>
<div className="bg-white border border-slate-200 p-4 rounded-lg flex items-center justify-center h-20 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
<span className="text-lg font-bold text-slate-900">UPS</span>
</div>
</div>
</div>

<div className="space-y-6">
<p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-amber-800/60">Bronze Sponsors</p>
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
<div className="flex items-center justify-center text-sm font-semibold text-slate-500 hover:text-[#254c79] transition-colors cursor-pointer">Local Joe's BBQ</div>
<div className="flex items-center justify-center text-sm font-semibold text-slate-500 hover:text-[#254c79] transition-colors cursor-pointer">Main St. Hardware</div>
<div className="flex items-center justify-center text-sm font-semibold text-slate-500 hover:text-[#254c79] transition-colors cursor-pointer">Smith &amp; Assoc.</div>
<div className="flex items-center justify-center text-sm font-semibold text-slate-500 hover:text-[#254c79] transition-colors cursor-pointer">Valley Bank</div>
<div className="flex items-center justify-center text-sm font-semibold text-slate-500 hover:text-[#254c79] transition-colors cursor-pointer">Green Thumb</div>
<div className="flex items-center justify-center text-sm font-semibold text-slate-500 hover:text-[#254c79] transition-colors cursor-pointer">City Motors</div>
<div className="flex items-center justify-center text-sm font-semibold text-slate-500 hover:text-[#254c79] transition-colors cursor-pointer">Eagle Eye Security</div>
<div className="flex items-center justify-center text-sm font-semibold text-slate-500 hover:text-[#254c79] transition-colors cursor-pointer">Tech Solutions</div>
<div className="flex items-center justify-center text-sm font-semibold text-slate-500 hover:text-[#254c79] transition-colors cursor-pointer">Pure Water Co</div>
<div className="flex items-center justify-center text-sm font-semibold text-slate-500 hover:text-[#254c79] transition-colors cursor-pointer">Sunrise Cafe</div>
</div>
</div>
</div>

<div className="mt-20 text-center border-t border-slate-200 pt-16">
<h3 className="text-xl font-semibold text-slate-900 mb-6">Interested in becoming a sponsor?</h3>
<button className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#254c79] text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-[#1e3d61] transition-all shadow-xl shadow-[#254c79]/20 hover:shadow-[#254c79]/30 ring-1 ring-[#254c79] transform hover:-translate-y-0.5">
                    Sponsor Registration
                    <iconify-icon icon="solar:hand-shake-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="relative z-20 bg-white py-24 px-6 border-t border-slate-200">
<div className="max-w-6xl mx-auto">

<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-5xl font-semibold text-slate-900 tracking-tight mb-4">Meet Our Charities</h2>
<p className="text-lg text-slate-600 font-normal leading-relaxed">
                    We count on your support as a sponsor and/or player to make this event successful each year. <span className="font-bold text-slate-900">100% of the proceeds</span> from this charity tournament goes to support these local charities and other benevolent grants.
                </p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-16">

<div className="flex flex-col sm:flex-row gap-8 items-start">
<div className="w-full sm:w-48 shrink-0 flex items-center justify-center sm:justify-start pt-1">
<div className="flex flex-col items-start">
<span className="text-xl font-serif text-slate-800 tracking-wide font-medium">ENC<span className="text-[#254c79] font-bold">⌖</span>MPASS</span>
<span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold ml-auto mt-1">Ministries</span>
</div>
</div>
<p className="text-slate-600 text-[15px] font-medium leading-relaxed italic">
                        Encompass Ministries helps individuals and families re-establish stability and self-reliance by offering a variety of programs including immediate food assistance, employment strategies, and life skills.
                    </p>
</div>

<div className="flex flex-col sm:flex-row gap-8 items-start">
<div className="w-full sm:w-48 shrink-0 flex items-center justify-center sm:justify-start pt-1">
<div className="flex flex-col leading-none">
<span className="text-2xl font-bold text-red-500 tracking-tighter">FOREVER</span>
<div className="flex items-center gap-1">
<span className="text-2xl font-bold text-green-600 tracking-tighter">FED</span>
<span className="text-[8px] leading-tight text-slate-400 w-16 font-medium">a mobile ministry</span>
</div>
</div>
</div>
<p className="text-slate-600 text-[15px] font-medium leading-relaxed italic">
                        Forever Fed provides meals, gently used clothing, books, grocery support, and brings Jesus to communities through the breaking of bread.
                    </p>
</div>

<div className="flex flex-col sm:flex-row gap-8 items-start">
<div className="w-full sm:w-48 shrink-0 flex items-center justify-center sm:justify-start pt-1">
<div className="text-[#254c79]">
<span className="text-xl font-serif font-semibold italic block">GoshenValley</span>
<span className="text-[9px] uppercase tracking-widest text-slate-400 block text-right font-medium mt-1">Peace and Purpose</span>
</div>
</div>
<p className="text-slate-600 text-[15px] font-medium leading-relaxed italic">
                        Goshen Valley provides hope and healing to foster youth and vulnerable families to cultivate personal healing and generational change.
                    </p>
</div>

<div className="flex flex-col sm:flex-row gap-8 items-start">
<div className="w-full sm:w-48 shrink-0 flex items-center justify-center sm:justify-start pt-1">
<div className="flex flex-col items-center border-2 border-[#254c79] px-2 py-1 rounded-sm">
<span className="text-lg font-bold text-[#254c79] tracking-[0.2em]">KAIROS</span>
<span className="text-[8px] text-center text-slate-600 leading-tight font-semibold mt-0.5">Prison Ministry<br/>International</span>
</div>
</div>
<p className="text-slate-600 text-[15px] font-medium leading-relaxed italic">
                        Kairos is a lay-led, interdenominational Christian ministry in which men and women volunteers bring Christ’s love and forgiveness to prisoners and their families.
                    </p>
</div>

<div className="flex flex-col sm:flex-row gap-8 items-start">
<div className="w-full sm:w-48 shrink-0 flex items-center justify-center sm:justify-start pt-1">
<div className="flex flex-col items-center">
<div className="grid grid-cols-2 gap-0.5 mb-1.5 text-[#254c79]">
<div className="w-3.5 h-3.5 bg-current opacity-80"></div><div className="w-3.5 h-3.5 bg-current opacity-60"></div>
<div className="w-3.5 h-3.5 bg-current opacity-60"></div><div className="w-3.5 h-3.5 bg-current opacity-80"></div>
</div>
<span className="text-sm font-bold text-slate-800 tracking-wide uppercase">MUST</span>
<span className="text-[9px] font-semibold text-slate-500 uppercase tracking-wider">Ministries</span>
</div>
</div>
<p className="text-slate-600 text-[15px] font-medium leading-relaxed italic">
                        Must Ministries addresses the basic needs of individuals, families and children with facilities in the Cobb and Cherokee counties and programs in numerous other counties.
                    </p>
</div>

<div className="flex flex-col sm:flex-row gap-8 items-start">
<div className="w-full sm:w-48 shrink-0 flex items-center justify-center sm:justify-start pt-1">
<div className="flex items-center gap-1 group">
<div className="bg-[#254c79] text-white p-1 rounded-sm shadow-sm">
<iconify-icon icon="mdi:cross" width="22"></iconify-icon>
</div>
<span className="text-3xl font-bold text-[#254c79] italic tracking-tighter">FCA</span>
</div>
</div>
<p className="text-slate-600 text-[15px] font-medium leading-relaxed italic">
                        FCA seeks to make disciples through our strategy of engaging, equipping and empowering coaches and athletes to know and grow in Christ and lead others to do the same.
                    </p>
</div>

<div className="flex flex-col sm:flex-row gap-8 items-start">
<div className="w-full sm:w-48 shrink-0 flex items-center justify-center sm:justify-start pt-1">
<div className="flex flex-col items-center">
<span className="text-4xl font-bold text-green-600 tracking-tighter leading-none mb-0.5">YL</span>
<span className="text-lg font-bold text-slate-800 leading-none lowercase tracking-tight">younglife</span>
</div>
</div>
<p className="text-slate-600 text-[15px] font-medium leading-relaxed italic">
                        Young Life is a Christian ministry that reaches out to middle school, high school, and college students in all 50 of the United States and in more than 100 countries around the world.
                    </p>
</div>

<div className="flex flex-col sm:flex-row gap-8 items-start">
<div className="w-full sm:w-48 shrink-0 flex items-center justify-center sm:justify-start pt-1">
<div className="flex flex-col items-center">
<div className="flex -space-x-1 mb-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-400 ring-2 ring-white"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-400 ring-2 ring-white"></div>
<div className="w-2.5 h-2.5 rounded-full bg-blue-400 ring-2 ring-white"></div>
</div>
<span className="text-sm font-bold text-slate-800 leading-none" style={{fontFamily: '\'Comic Sans MS\', cursive, sans-serif'}}>TurnAround</span>
<span className="text-[9px] font-bold text-pink-500 uppercase tracking-wider mt-0.5">Ministries Inc.</span>
</div>
</div>
<p className="text-slate-600 text-[15px] font-medium leading-relaxed italic">
                        Turn Around Kids is committed to supporting vulnerable children around the greater Atlanta area and ease the suffering of those homeless, abandoned, and abused.
                    </p>
</div>
</div>
</div>
</section>

<section className="relative z-20 bg-slate-50 py-24 px-6 border-t border-slate-200">
<div className="max-w-6xl mx-auto">

<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-5xl font-semibold text-slate-900 tracking-tight mb-4">More Ways to Help</h2>
<p className="text-lg text-slate-600 font-normal leading-relaxed">
                    Beyond playing and sponsoring, there are other meaningful ways to contribute to the success of the Cherokee Hope Golf Classic.
                </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

<div className="flex flex-col">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-full bg-[#254c79]/10 flex items-center justify-center text-[#254c79]">
<iconify-icon icon="solar:hand-heart-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900">Sign up to volunteer</h3>
</div>
<p className="text-slate-600 text-sm leading-relaxed mb-8">
                        We are always looking for dedicated volunteers to help ensure the tournament runs smoothly. From registration to the awards banquet, your time and service make a huge impact.
                    </p>
<button className="w-full sm:w-auto self-start inline-flex items-center justify-center gap-2 bg-white text-[#254c79] border border-slate-200 px-8 py-3.5 rounded-full text-sm font-medium hover:bg-slate-50 hover:border-[#254c79]/30 transition-all shadow-sm">
                        Volunteer Information
                        <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>

<div className="flex flex-col">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-full bg-[#f1bd50]/20 flex items-center justify-center text-[#997323]">
<iconify-icon icon="solar:gift-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900">Donate items for silent auction</h3>
</div>
<p className="text-slate-600 text-sm leading-relaxed mb-6">
                        We welcome donations for our silent auction and goodie bags. Your contributions help raise additional funds for our partner charities.
                    </p>

<div className="flex flex-wrap gap-2">
<span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-white border border-slate-200 text-slate-600">Sporting Event Tickets</span>
<span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-white border border-slate-200 text-slate-600">Concert Tickets</span>
<span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-white border border-slate-200 text-slate-600">Theater Tickets</span>
<span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-white border border-slate-200 text-slate-600">Theme Park Tickets</span>
<span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-white border border-slate-200 text-slate-600">Time Shares</span>
<span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-white border border-slate-200 text-slate-600">Vacation Homes</span>
<span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-white border border-slate-200 text-slate-600">Resorts</span>
<span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-white border border-slate-200 text-slate-600">Technical Gadgets</span>
<span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-white border border-slate-200 text-slate-600">Bluetooth Speakers</span>
<span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-white border border-slate-200 text-slate-600">Fitness Watches</span>
<span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-white border border-slate-200 text-slate-600">Wireless Headphones</span>
<span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-white border border-slate-200 text-slate-600">4K TVs</span>
<span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-white border border-slate-200 text-slate-600">Computers</span>
<span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-white border border-slate-200 text-slate-600">Sports Memorabilia</span>
<span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-white border border-slate-200 text-slate-600">Training Sessions</span>
<span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-white border border-slate-200 text-slate-600">Golf Outings</span>
<span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-white border border-slate-200 text-slate-600">Tennis Lessons</span>
<span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-white border border-slate-200 text-slate-600">Restaurant Gift Cards</span>
<span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-white border border-slate-200 text-slate-600">Automotive Detailing</span>
<span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-white border border-slate-200 text-slate-600">Golf Clubs/Balls</span>
<span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-white border border-slate-200 text-slate-600">Helicopter Ride</span>
<span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-white border border-slate-200 text-slate-600">Pet Boarding</span>
<span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-white border border-slate-200 text-slate-600">Professional Services</span>
</div>
</div>
</div>
</div>
</section>

<footer className="relative z-20 bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">

<div className="flex flex-col md:flex-row items-center gap-8">

<div className="flex items-center gap-2.5">
<div className="p-1.5 bg-slate-900 rounded-lg ring-1 ring-slate-800">
<iconify-icon height="16" icon="solar:flag-bold-duotone" style={{color: '#f1bd50'}} width="16"></iconify-icon>
</div>
<span className="text-base font-semibold text-slate-50 tracking-tight">Cherokee Hope</span>
</div>

<a className="flex items-center gap-2 text-sm font-medium hover:text-white transition-colors" href="mailto:info@cherokeehopegolf.com">
<iconify-icon icon="solar:letter-linear" width="16"></iconify-icon>
                    info@cherokeehopegolf.com
                </a>
</div>

<div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-xs font-medium opacity-60">
<span>© 2024 Cherokee Hope Golf Classic.</span>
<a className="hover:text-white transition-colors flex items-center gap-1.5" href="#">
                    Site by <span className="font-bold tracking-tight text-slate-200">Bope Design</span>
</a>
</div>
</div>
</footer>

    </>
  );
}
