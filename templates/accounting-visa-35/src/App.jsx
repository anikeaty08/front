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
      

<nav className="sticky top-0 z-50 w-full glass border-b border-black/[0.04]">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-3 hover:opacity-80 transition-opacity" href="#">
<div className="w-9 h-9 rounded-lg bg-[#FFD026] flex items-center justify-center text-black shadow-sm shadow-orange-200/50">
<iconify-icon icon="solar:documents-minimalistic-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-lg font-bold tracking-tight">MUTA 02</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-500">
<a className="hover:text-black transition-colors" href="#services">Services</a>
<a className="hover:text-black transition-colors" href="#visas">Visas</a>
<a className="hover:text-black transition-colors" href="#accounting">Accounting</a>
<a className="hover:text-black transition-colors" href="#leadership">Team</a>
</div>
<div className="flex items-center gap-4">
<a className="flex items-center gap-2 text-sm font-medium text-white bg-black rounded-full px-5 py-2.5 hover:bg-neutral-800 transition-all hover:scale-[1.02] active:scale-[0.98]" href="#contact">
<span>LINE ID SANTA2554</span>
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</nav>
<main className="w-full overflow-hidden">

<div className="max-w-7xl mx-auto px-4 sm:px-6 mt-6">
<div className="relative bg-[#FFD026] rounded-[2.5rem] p-8 md:p-16 lg:p-20 overflow-hidden min-h-[640px] flex flex-col justify-center">

<div className="relative z-10 max-w-xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 border border-black/5 text-xs font-semibold uppercase tracking-wider mb-8 text-black/80 backdrop-blur-sm">
<span>Based in Pattaya</span>
<iconify-icon icon="solar:map-point-linear" width="14"></iconify-icon>
</div>
<h1 className="text-5xl md:text-7xl font-semibold text-black tracking-tight leading-[1.05] mb-8">
                        Accounting, Tax &amp; more
                    </h1>
<p className="text-xl md:text-2xl font-normal text-black/80 tracking-tight leading-relaxed max-w-md mb-10">
                        5+ Years in Business. Top Agency in Pattaya. We make your life in Thailand easier with a range of services including accounting, business registration, visas and more.
                    </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
<a className="flex items-center gap-2 text-base font-medium text-white bg-black rounded-full px-8 py-3.5 shadow-lg shadow-black/10 hover:bg-neutral-800 transition-all hover:-translate-y-0.5" href="#contact">
                            Contact Wasa (CEO)
                        </a>
<a className="flex items-center gap-2 text-base font-medium text-black bg-white/40 border border-white/20 rounded-full px-8 py-3.5 backdrop-blur-md hover:bg-white/60 transition-colors" href="tel:0818195589">
<iconify-icon icon="solar:phone-calling-linear" width="18"></iconify-icon>
                            081 8195589
                        </a>
</div>
</div>

<div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[600px] h-[600px] hidden lg:block pointer-events-none">

<div className="absolute top-0 right-32 w-[320px] bg-white rounded-[2rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)] -rotate-6 opacity-90 border border-white/50 z-0">
<div className="p-6">
<div className="flex justify-between items-center mb-6">
<span className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Accounting</span>
<div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-green-600">
<iconify-icon icon="solar:check-circle-linear" width="18"></iconify-icon>
</div>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between p-3 bg-neutral-50 rounded-xl">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
<iconify-icon icon="solar:bill-list-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold">VAT (P.P.30)</p>
<p className="text-xs text-neutral-400">Due 15th</p>
</div>
</div>
<span className="text-[10px] font-bold bg-green-100 text-green-700 px-2 py-0.5 rounded">DONE</span>
</div>
<div className="flex items-center justify-between p-3 bg-neutral-50 rounded-xl">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-600">
<iconify-icon icon="solar:user-circle-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold">SSO Form</p>
<p className="text-xs text-neutral-400">Monthly</p>
</div>
</div>
<span className="text-[10px] font-bold bg-green-100 text-green-700 px-2 py-0.5 rounded">DONE</span>
</div>
</div>
</div>
</div>

<div className="absolute top-20 right-10 w-[340px] bg-[#111] text-white rounded-[2rem] shadow-2xl z-10 rotate-3 border border-white/10">
<div className="p-6">
<div className="flex items-center justify-between mb-8">
<div>
<p className="text-[10px] text-neutral-400 uppercase tracking-widest font-bold mb-1">Status</p>
<h3 className="text-lg font-medium">Work Permit</h3>
</div>
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
<iconify-icon icon="solar:passport-linear" width="20"></iconify-icon>
</div>
</div>
<div className="bg-neutral-800/50 rounded-2xl p-4 mb-6 backdrop-blur-sm border border-white/5">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full border-2 border-[#FFD026] bg-neutral-700 overflow-hidden">
<img alt="User" className="w-full h-full object-cover" src="https://ui-avatars.com/api/?name=Expat+User&amp;background=random&amp;color=fff"/>
</div>
<div>
<p className="text-sm font-medium text-white">Active License</p>
<p className="text-xs text-neutral-400">Exp: 25 Oct 2025</p>
<div className="mt-2 flex items-center gap-1.5 text-[#FFD026]">
<iconify-icon icon="solar:verified-check-linear" width="14"></iconify-icon>
<span className="text-[10px] font-bold tracking-wide">VALID</span>
</div>
</div>
</div>
</div>
<div className="space-y-5 relative">
<div className="absolute left-[5px] top-2 bottom-2 w-[2px] bg-neutral-800"></div>
<div className="flex gap-4 relative">
<div className="w-3 h-3 rounded-full bg-[#FFD026] relative z-10 outline outline-4 outline-[#111]"></div>
<div>
<p className="text-sm font-medium">Docs Review</p>
<p className="text-xs text-neutral-500">Completed</p>
</div>
</div>
<div className="flex gap-4 relative">
<div className="w-3 h-3 rounded-full bg-neutral-600 relative z-10 outline outline-4 outline-[#111]"></div>
<div>
<p className="text-sm font-medium text-neutral-400">Immigration Filing</p>
<p className="text-xs text-neutral-600">Pending</p>
</div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-white/10">
<div className="flex items-center justify-between text-[#FFD026] cursor-pointer hover:opacity-80 transition-opacity">
<span className="text-sm font-semibold">View Details</span>
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<section className="max-w-7xl mx-auto px-6 py-16 border-b border-neutral-100">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
<div className="text-center md:text-left">
<p className="text-4xl font-semibold text-neutral-900 tracking-tight mb-1">5+</p>
<p className="text-sm font-medium text-neutral-500">Years in Business</p>
</div>
<div className="text-center md:text-left">
<p className="text-4xl font-semibold text-[#dcb00a] tracking-tight mb-1">400+</p>
<p className="text-sm font-medium text-neutral-500">Customers</p>
</div>
<div className="text-center md:text-left">
<p className="text-4xl font-semibold text-neutral-900 tracking-tight mb-1">30+</p>
<p className="text-sm font-medium text-neutral-500">Years of Management Experience</p>
</div>
<div className="flex flex-col items-center md:items-start justify-center">
<div className="flex text-[#FFD026] mb-2 gap-0.5">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
</div>
<p className="text-sm font-semibold">5/5 Rating Google Reviews</p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24" id="services">
<div className="mb-16 md:flex justify-between items-end">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Bouquet of Services</h2>
<p className="leading-relaxed text-lg text-neutral-500">Whether you are a retiree or looking to open a business, we handle it all</p>
</div>
<a className="hidden md:flex items-center gap-2 hover:opacity-70 transition-opacity text-sm font-semibold border-black border-b pb-0.5" href="#contact">
                    View full pricing
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-8 rounded-[2rem] bg-neutral-50 border border-neutral-200/60 hover:border-[#FFD026] transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden flex flex-col">
<div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-6 shadow-sm text-[#dcb00a] border border-neutral-100 group-hover:bg-[#FFD026] group-hover:text-black transition-colors">
<iconify-icon icon="solar:passport-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold mb-3 tracking-tight">Visa Services</h3>
<p className="text-neutral-500 text-sm mb-6 leading-relaxed flex-grow">Expert assistance with Retirement, Business (Non-B), Education, and Marriage visas handling all immigration paperwork.</p>
<ul className="space-y-3 mt-auto">
<li className="flex items-center gap-2.5 text-sm font-medium text-neutral-700">
<iconify-icon className="text-[#dcb00a]" icon="solar:check-circle-bold"></iconify-icon> 90 Day Reporting
                        </li>
<li className="flex items-center gap-2.5 text-sm font-medium text-neutral-700">
<iconify-icon className="text-[#dcb00a]" icon="solar:check-circle-bold"></iconify-icon> Visa Extensions
                        </li>
</ul>
</div>

<div className="group p-8 rounded-[2rem] bg-[#0f0f0f] text-white border border-neutral-800 relative overflow-hidden flex flex-col shadow-2xl transform md:scale-105 z-10">
<div className="absolute top-0 right-0 w-64 h-64 bg-[#FFD026] rounded-full filter blur-[80px] opacity-10 translate-x-1/2 -translate-y-1/2"></div>
<div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6 text-[#FFD026] border border-white/5">
<iconify-icon icon="solar:case-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold mb-3 tracking-tight">Work Permits</h3>
<p className="text-neutral-400 text-sm mb-6 leading-relaxed flex-grow">End-to-end support for obtaining and renewing Thai work permits. We liaise directly with the Labor Department.</p>
<ul className="space-y-3 mt-auto">
<li className="flex items-center gap-2.5 text-sm font-medium text-neutral-200">
<iconify-icon className="text-[#FFD026]" icon="solar:check-circle-bold"></iconify-icon> New Applications
                        </li>
<li className="flex items-center gap-2.5 text-sm font-medium text-neutral-200">
<iconify-icon className="text-[#FFD026]" icon="solar:check-circle-bold"></iconify-icon> Annual Renewals
                        </li>
</ul>
</div>

<div className="group p-8 rounded-[2rem] bg-neutral-50 border border-neutral-200/60 hover:border-[#FFD026] transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden flex flex-col">
<div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-6 shadow-sm text-[#dcb00a] border border-neutral-100 group-hover:bg-[#FFD026] group-hover:text-black transition-colors">
<iconify-icon icon="solar:calculator-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold mb-3 tracking-tight">Accounting &amp; Tax</h3>
<p className="text-neutral-500 text-sm mb-6 leading-relaxed flex-grow">Professional accounting for Thai Co., Ltd companies. Accurate monthly filings and yearly audits.</p>
<ul className="space-y-3 mt-auto">
<li className="flex items-center gap-2.5 text-sm font-medium text-neutral-700">
<iconify-icon className="text-[#dcb00a]" icon="solar:check-circle-bold"></iconify-icon> Monthly VAT (PP30)
                        </li>
<li className="flex items-center gap-2.5 text-sm font-medium text-neutral-700">
<iconify-icon className="text-[#dcb00a]" icon="solar:check-circle-bold"></iconify-icon> Social Security
                        </li>
</ul>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-24">
<div className="bg-[#FFFAEB] rounded-[2.5rem] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 relative overflow-hidden border border-[#FFD026]/20">
<div className="w-full lg:w-1/2 relative z-10">
<div className="w-12 h-12 rounded-xl bg-white border border-[#FFD026]/20 flex items-center justify-center text-[#dcb00a] mb-6">
<iconify-icon icon="solar:buildings-2-linear" width="24"></iconify-icon>
</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Company Registration</h2>
<p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                        Setting up a business as a foreigner can be complex. MUTA 02 simplifies registering a Thai Company Limited, ensuring full compliance from day one.
                    </p>
<div className="space-y-3">
<div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-neutral-100 hover:border-[#FFD026]/50 transition-colors">
<div className="w-8 h-8 rounded-full bg-[#FFD026] flex items-center justify-center text-black text-sm font-bold shrink-0">1</div>
<p className="font-medium text-neutral-800">Name Reservation &amp; MoA</p>
</div>
<div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-neutral-100 hover:border-[#FFD026]/50 transition-colors">
<div className="w-8 h-8 rounded-full bg-[#FFD026] flex items-center justify-center text-black text-sm font-bold shrink-0">2</div>
<p className="font-medium text-neutral-800">Registration &amp; Tax ID</p>
</div>
<div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-neutral-100 hover:border-[#FFD026]/50 transition-colors">
<div className="w-8 h-8 rounded-full bg-[#FFD026] flex items-center justify-center text-black text-sm font-bold shrink-0">3</div>
<p className="font-medium text-neutral-800">VAT &amp; Social Security Setup</p>
</div>
</div>
</div>
<div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
<div className="bg-white rounded-[2rem] p-8 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] border border-neutral-100 w-full max-w-md rotate-3 hover:rotate-0 transition-transform duration-500 ease-out">
<div className="flex items-center justify-between mb-8 pb-6 border-b border-neutral-50">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-neutral-50 rounded-xl flex items-center justify-center text-neutral-500">
<iconify-icon icon="solar:file-check-linear" width="24"></iconify-icon>
</div>
<div>
<p className="font-bold text-neutral-900">Certificate</p>
<p className="text-xs text-neutral-400 font-medium">DBD Registration</p>
</div>
</div>
<div className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-[10px] font-bold tracking-wide border border-green-100">APPROVED</div>
</div>
<div className="space-y-4 mb-8">
<div className="h-2.5 w-3/4 bg-neutral-100 rounded-full"></div>
<div className="h-2.5 w-full bg-neutral-100 rounded-full"></div>
<div className="h-2.5 w-5/6 bg-neutral-100 rounded-full"></div>
<div className="h-2.5 w-full bg-neutral-100 rounded-full"></div>
</div>
<div className="flex gap-4">
<div className="flex-1 bg-neutral-50 p-4 rounded-xl text-center border border-neutral-100">
<p className="text-xs text-neutral-400 font-medium mb-1">Shareholders</p>
<p className="font-bold text-lg">3</p>
</div>
<div className="flex-1 bg-neutral-50 p-4 rounded-xl text-center border border-neutral-100">
<p className="text-xs text-neutral-400 font-medium mb-1">Capital</p>
<p className="font-bold text-lg">2M THB</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-24" id="leadership">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12 text-center">
                Leadership Team
            </h2>
<div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="bg-white rounded-[2.5rem] p-10 w-full flex flex-col items-center text-center border border-neutral-200 hover:border-[#FFD026] hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.05)] transition-all duration-300 group h-full relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-2 bg-[#FFD026] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
<div className="relative mb-6">
<div className="absolute inset-0 bg-[#FFD026] rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
<img alt="CEO" className="z-10 w-32 h-32 object-cover border-white border-4 rounded-full relative shadow-md" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<h3 className="text-xl font-bold mb-1 tracking-tight">Wassana (Wasa)</h3>
<p className="uppercase text-xs font-bold text-[#dcb00a] tracking-widest mb-6">
                        Founder &amp; Principal Consultant
                    </p>
<p className="leading-relaxed flex-grow text-sm text-neutral-500">
                        Wassana (Wasa) has two decades of Accounting experience in leading companies in Thailand and also worked in Japan handling the Accounting department. Started Muta 02 in 2020, the company is now the Top 3 Agencies in Pattaya and growing. She is a big Muay Thai fan.
                    </p>
<div className="mt-8 flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
<a className="text-neutral-400 hover:text-[#FFD026] transition-colors" href="#"><iconify-icon icon="solar:letter-linear" width="20"></iconify-icon></a>
<a className="text-neutral-400 hover:text-[#0077b5] transition-colors" href="#"><iconify-icon icon="brandico:linkedin-rect" width="20"></iconify-icon></a>
</div>
</div>

<div className="bg-white rounded-[2.5rem] p-10 w-full flex flex-col items-center text-center border border-neutral-200 hover:border-[#FFD026] hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.05)] transition-all duration-300 group h-full relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-2 bg-[#FFD026] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
<div className="relative mb-6">
<div className="absolute inset-0 bg-[#FFD026] rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
<img alt="Rohan (Ronnie)" className="z-10 w-32 h-32 object-cover border-white border-4 rounded-full relative shadow-md" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-xl font-bold mb-1 tracking-tight">Rohan (Ronnie)</h3>
<p className="text-xs font-bold text-[#dcb00a] uppercase tracking-widest mb-6">
                        Chief Marketing Officer
                    </p>
<p className="leading-relaxed flex-grow text-sm text-neutral-500">
                        Rohan(Ronnie) heads the Marketing side of the business and leads Muta Designs, a new venture under Muta 02 focus specically on Website Design &amp; Marketing. He has lived and worked in Dubai, Montreal, Bahrain and many other markets and worked for organizations like Burger King and Applebee's.
                    </p>
<div className="mt-8 flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
<a className="text-neutral-400 hover:text-[#FFD026] transition-colors" href="#"><iconify-icon icon="solar:letter-linear" width="20"></iconify-icon></a>
<a className="text-neutral-400 hover:text-[#0077b5] transition-colors" href="#"><iconify-icon icon="brandico:linkedin-rect" width="20"></iconify-icon></a>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-24" id="contact">
<div className="bg-[#111] text-white rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#FFD026]/15 via-transparent to-transparent pointer-events-none"></div>
<div className="relative z-10 max-w-2xl mx-auto">
<div className="w-14 h-14 bg-[#FFD026] rounded-2xl mx-auto mb-8 flex items-center justify-center text-black shadow-[0_0_20px_rgba(255,208,38,0.3)]">
<iconify-icon icon="solar:chat-line-linear" width="28"></iconify-icon>
</div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">Visit us in Pattaya</h2>
<p className="leading-relaxed text-lg text-neutral-400 mb-10">
                        Stop by our office for a coffee and a consultation. We are located at the heart of Pattaya on Treppesit street with plenty of parking. <br/>
                        123/45 Moo 9, Pattaya Klang Rd, Nongprue, Banglamung, Chonburi 20150
                    </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="bg-[#FFD026] text-black font-semibold px-8 py-4 rounded-full hover:bg-white transition-all hover:scale-105 flex items-center justify-center gap-2" href="tel:0818195589">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
                            Call Us Now
                        </a>
<a className="bg-white/10 text-white font-medium px-8 py-4 rounded-full hover:bg-white/20 transition-all flex items-center justify-center gap-2 backdrop-blur-sm border border-white/5" href="https://maps.google.com" target="_blank">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
                            Get Directions
                        </a>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-neutral-100 pt-16 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
<div>
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded bg-[#FFD026] flex items-center justify-center text-black text-xs">
<iconify-icon icon="solar:documents-minimalistic-linear"></iconify-icon>
</div>
<span className="text-base font-bold tracking-tight">MUTA 02</span>
</div>
<p className="text-sm text-neutral-500 max-w-xs">
                        Professional Accounting &amp; Tax Agency based in Pattaya, Thailand. Simplifying business for everyone.
                    </p>
</div>
<div className="flex gap-12">
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-black transition-colors" href="#">Services</a></li>
<li><a className="hover:text-black transition-colors" href="#">Visas</a></li>
<li><a className="hover:text-black transition-colors" href="#">Accounting</a></li>
</ul>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-black transition-colors" href="#">About</a></li>
<li><a className="hover:text-black transition-colors" href="#">Contact</a></li>
<li><a className="hover:text-black transition-colors" href="#">Privacy</a></li>
</ul>
</div>
</div>
<div className="border-t border-neutral-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-400 font-medium">
<p>© 2024 MUTA 02 CO.,LTD. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-black transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-black transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
