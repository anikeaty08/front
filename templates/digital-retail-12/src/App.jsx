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



        // Initialize Lucide icons
        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
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
      

<header className="sticky top-0 z-50 bg-[#0B0814]/80 backdrop-blur-xl border-b border-[#251C3F]/50">
<div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="text-xl tracking-tight font-medium text-white">JAMUNA</span>
<span className="text-sm font-normal px-2.5 py-1 rounded-md bg-[#1C1536] text-[#A195C5] border border-[#251C3F]">RETAIL</span>
</div>
<nav className="hidden md:flex items-center gap-8 text-base font-normal text-[#A195C5]">
<a className="text-white transition-colors" href="#">Products</a>
<a className="hover:text-white transition-colors" href="#calculator">EMI Calculator</a>
<a className="hover:text-white transition-colors" href="#apply">Apply Now</a>
</nav>
<div className="flex items-center gap-6">
<button className="text-base font-normal text-[#A195C5] hover:text-white transition-colors hidden sm:block">Track Status</button>
<a className="bg-[#1C1536] text-white rounded-[32px] pl-4 pr-1.5 py-1.5 flex items-center gap-3 hover:bg-[#231A45] transition-all group active:scale-95 border border-[#251C3F]" href="#apply">
<span className="font-medium text-sm tracking-wide">Sign In</span>
<div className="bg-[#0B0814] w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#120E21] transition-colors">
<i className="w-3.5 h-3.5 text-white" data-lucide="arrow-right"></i>
</div>
</a>
</div>
</div>
</header>
<main className="flex-grow">

<section className="max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-20 text-center relative">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#5842b0]/10 rounded-full blur-[100px] pointer-events-none"></div>
<h1 className="text-4xl md:text-5xl font-medium tracking-tight text-white max-w-3xl mx-auto mb-6 leading-tight relative z-10">
                Digital Retail Loans, <br className="hidden sm:block"/> simplified and fast.
            </h1>
<p className="text-base md:text-lg text-[#A195C5] max-w-2xl mx-auto mb-10 leading-relaxed font-normal relative z-10">
                Experience seamless borrowing with preliminary eligibility checks and approval routing within 3 working days. Paperless initiation, fully secure.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
<a className="w-full sm:w-auto bg-[#1C1536] text-white rounded-[32px] pl-6 pr-2 py-2 flex items-center justify-between gap-4 hover:bg-[#231A45] transition-all group active:scale-95 border border-[#251C3F]" href="#apply">
<span className="font-medium text-base tracking-wide whitespace-nowrap">Start Application</span>
<div className="bg-[#0B0814] w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#120E21] transition-colors">
<i className="w-5 h-5 text-white" data-lucide="arrow-right"></i>
</div>
</a>
<a className="w-full sm:w-auto bg-[#120E21] text-white rounded-[32px] pl-6 pr-2 py-2 flex items-center justify-between gap-4 hover:bg-[#1A1433] transition-all group active:scale-95 border border-[#251C3F]" href="#calculator">
<span className="font-medium text-base tracking-wide whitespace-nowrap">Calculate EMI</span>
<div className="bg-[#2E2252] w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#3B2D6B] transition-colors">
<i className="w-4 h-4 text-white" data-lucide="calculator"></i>
</div>
</a>
</div>
</section>

<section className="max-w-6xl mx-auto px-4 sm:px-6 pb-24">
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-[#120E21] rounded-[32px] p-8 border border-[#251C3F] flex flex-col group relative overflow-hidden">
<div className="h-12 w-12 rounded-2xl bg-[#1C1536] border border-[#251C3F] flex items-center justify-center text-white mb-6">
<i className="w-6 h-6 text-[#A195C5]" data-lucide="wallet"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-3 text-white">Personal Loan</h3>
<p className="text-base text-[#A195C5] mb-8 flex-grow leading-relaxed font-normal">Unsecured financing for your personal needs, medical emergencies, or travel plans.</p>
<div className="flex items-end justify-between mb-8 pb-6 border-b border-[#251C3F]">
<div>
<span className="text-sm text-[#7A6A9E] block mb-1 font-normal tracking-wide">FIXED RATE FROM</span>
<span className="text-3xl font-medium tracking-tight text-white">9.5%</span>
</div>
<div className="text-right">
<span className="text-sm text-[#7A6A9E] block mb-1 font-normal tracking-wide">MAX TENURE</span>
<span className="text-base font-normal text-white">60 Months</span>
</div>
</div>
<button className="w-full bg-[#1C1536] text-white rounded-[32px] pl-6 pr-1.5 py-1.5 flex items-center justify-between gap-4 hover:bg-[#231A45] transition-all group active:scale-95">
<span className="font-medium text-base tracking-wide">Apply Now</span>
<div className="bg-[#0B0814] w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0">
<i className="w-4 h-4 text-white" data-lucide="arrow-right"></i>
</div>
</button>
</div>

<div className="bg-[#120E21] rounded-[32px] p-8 border border-[#251C3F] flex flex-col group relative overflow-hidden">
<div className="h-12 w-12 rounded-2xl bg-[#1C1536] border border-[#251C3F] flex items-center justify-center text-white mb-6">
<i className="w-6 h-6 text-[#A195C5]" data-lucide="home"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-3 text-white">Home Loan</h3>
<p className="text-base text-[#A195C5] mb-8 flex-grow leading-relaxed font-normal">Build or buy your dream home with flexible repayment options and high LTV ratios.</p>
<div className="flex items-end justify-between mb-8 pb-6 border-b border-[#251C3F]">
<div>
<span className="text-sm text-[#7A6A9E] block mb-1 font-normal tracking-wide">FIXED RATE FROM</span>
<span className="text-3xl font-medium tracking-tight text-white">8.0%</span>
</div>
<div className="text-right">
<span className="text-sm text-[#7A6A9E] block mb-1 font-normal tracking-wide">MAX TENURE</span>
<span className="text-base font-normal text-white">25 Years</span>
</div>
</div>
<button className="w-full bg-[#1C1536] text-white rounded-[32px] pl-6 pr-1.5 py-1.5 flex items-center justify-between gap-4 hover:bg-[#231A45] transition-all group active:scale-95">
<span className="font-medium text-base tracking-wide">Apply Now</span>
<div className="bg-[#0B0814] w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0">
<i className="w-4 h-4 text-white" data-lucide="arrow-right"></i>
</div>
</button>
</div>

<div className="bg-[#120E21] rounded-[32px] p-8 border border-[#251C3F] flex flex-col group relative overflow-hidden">
<div className="h-12 w-12 rounded-2xl bg-[#1C1536] border border-[#251C3F] flex items-center justify-center text-white mb-6">
<i className="w-6 h-6 text-[#A195C5]" data-lucide="car"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-3 text-white">Car Loan</h3>
<p className="text-base text-[#A195C5] mb-8 flex-grow leading-relaxed font-normal">Drive home your preferred vehicle. Financing available for brand new and reconditioned cars.</p>
<div className="flex items-end justify-between mb-8 pb-6 border-b border-[#251C3F]">
<div>
<span className="text-sm text-[#7A6A9E] block mb-1 font-normal tracking-wide">FIXED RATE FROM</span>
<span className="text-3xl font-medium tracking-tight text-white">10.0%</span>
</div>
<div className="text-right">
<span className="text-sm text-[#7A6A9E] block mb-1 font-normal tracking-wide">MAX TENURE</span>
<span className="text-base font-normal text-white">72 Months</span>
</div>
</div>
<button className="w-full bg-[#1C1536] text-white rounded-[32px] pl-6 pr-1.5 py-1.5 flex items-center justify-between gap-4 hover:bg-[#231A45] transition-all group active:scale-95">
<span className="font-medium text-base tracking-wide">Apply Now</span>
<div className="bg-[#0B0814] w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0">
<i className="w-4 h-4 text-white" data-lucide="arrow-right"></i>
</div>
</button>
</div>
</div>
</section>

<section className="border-y border-[#251C3F]/50 pt-20 pb-24 bg-[#0D091A]" id="calculator">
<div className="max-w-6xl mx-auto px-4 sm:px-6">
<div className="mb-12 text-center max-w-2xl mx-auto">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">EMI Calculator</h2>
<p className="text-base text-[#A195C5] font-normal">Estimate your monthly installment and total interest based on a reducing balance method.</p>
</div>
<div className="grid lg:grid-cols-12 gap-10 items-start">

<div className="lg:col-span-7 space-y-12">

<div className="space-y-6">
<div className="flex justify-between items-center">
<label className="text-base font-normal text-[#A195C5]">Loan Amount</label>
<div className="flex items-center gap-2 bg-[#120E21] border border-[#251C3F] rounded-2xl px-5 py-3">
<span className="text-sm font-normal text-[#7A6A9E]">BDT</span>
<input className="bg-transparent text-lg font-medium text-white w-28 text-right focus:outline-none" readonly="" type="text" value="1,000,000"/>
</div>
</div>
<div className="relative pt-2">
<input className="w-full" max="20000000" min="50000" type="range" value="1000000"/>
<div className="flex justify-between text-sm font-normal text-[#7A6A9E] mt-3">
<span>50K</span>
<span>20M</span>
</div>
</div>
</div>

<div className="space-y-6">
<div className="flex justify-between items-center">
<label className="text-base font-normal text-[#A195C5]">Tenure</label>
<div className="flex items-center gap-2 bg-[#120E21] border border-[#251C3F] rounded-2xl px-5 py-3">
<input className="bg-transparent text-lg font-medium text-white w-12 text-right focus:outline-none" readonly="" type="text" value="36"/>
<span className="text-sm font-normal text-[#7A6A9E]">Months</span>
</div>
</div>
<div className="relative pt-2">
<input className="w-full" max="300" min="12" type="range" value="36"/>
<div className="flex justify-between text-sm font-normal text-[#7A6A9E] mt-3">
<span>12M</span>
<span>300M</span>
</div>
</div>
</div>

<div className="space-y-6">
<div className="flex justify-between items-center">
<label className="text-base font-normal text-[#A195C5]">Interest Rate</label>
<div className="flex items-center gap-2 bg-[#120E21] border border-[#251C3F] rounded-2xl px-5 py-3">
<input className="bg-transparent text-lg font-medium text-white w-12 text-right focus:outline-none" readonly="" type="text" value="9.5"/>
<span className="text-sm font-normal text-[#7A6A9E]">%</span>
</div>
</div>
<div className="relative pt-2">
<input className="w-full" max="15" min="5" step="0.1" type="range" value="9.5"/>
<div className="flex justify-between text-sm font-normal text-[#7A6A9E] mt-3">
<span>5.0%</span>
<span>15.0%</span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5 bg-[#120E21] rounded-[40px] p-10 border border-[#251C3F] relative overflow-hidden">
<div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-[#5842b0] opacity-[0.05] blur-3xl pointer-events-none"></div>
<h4 className="text-sm font-medium text-[#7A6A9E] mb-8 uppercase tracking-widest">Estimated Breakdown</h4>
<div className="mb-12">
<span className="text-base font-normal text-[#A195C5] block mb-3">Monthly Installment (EMI)</span>
<div className="flex items-baseline gap-2">
<span className="text-5xl md:text-6xl font-medium tracking-tight text-white">৳ 32,033</span>
</div>
</div>
<div className="space-y-6 pt-8 border-t border-[#251C3F]">
<div className="flex justify-between items-center">
<span className="text-base font-normal text-[#A195C5]">Principal Amount</span>
<span className="text-base font-medium text-white">৳ 1,000,000</span>
</div>
<div className="flex justify-between items-center">
<span className="text-base font-normal text-[#A195C5]">Total Interest</span>
<span className="text-base font-medium text-white">৳ 153,178</span>
</div>
<div className="flex justify-between items-center pt-4 mt-4 border-t border-[#251C3F]">
<span className="text-base text-white font-medium">Total Payable</span>
<span className="text-xl font-medium text-white">৳ 1,153,178</span>
</div>
</div>
<button className="w-full mt-12 bg-[#1C1536] text-white rounded-[32px] pl-6 pr-2 py-2 flex items-center justify-between gap-4 hover:bg-[#231A45] transition-all group active:scale-95">
<span className="font-medium text-base tracking-wide whitespace-nowrap">Apply with this amount</span>
<div className="bg-[#0B0814] w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5 text-white" data-lucide="arrow-right"></i>
</div>
</button>
</div>
</div>
</div>
</section>

<section className="pt-24 pb-32" id="apply">
<div className="max-w-2xl mx-auto px-4 sm:px-6">
<div className="mb-12 text-center">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">Start Your Application</h2>
<p className="text-base text-[#A195C5] font-normal">Submit your details for preliminary screening.</p>
</div>
<div className="bg-[#120E21] rounded-[40px] border border-[#251C3F] overflow-hidden shadow-2xl relative">

<div className="p-3 border-b border-[#251C3F]">
<div className="flex overflow-x-auto no-scrollbar gap-2 p-1.5 bg-[#0B0814] rounded-3xl w-full border border-[#251C3F]">
<button className="flex-1 flex-shrink-0 flex justify-center items-center gap-2 px-4 py-3 bg-[#231A45] rounded-2xl text-sm font-medium text-white transition-all shadow-sm">
<i className="w-4 h-4" data-lucide="wallet"></i>
                                Personal
                            </button>
<button className="flex-1 flex-shrink-0 flex justify-center items-center gap-2 px-4 py-3 rounded-2xl text-sm font-medium text-[#A195C5] hover:text-white hover:bg-[#1A1433] transition-all">
<i className="w-4 h-4" data-lucide="home"></i>
                                Home
                            </button>
<button className="flex-1 flex-shrink-0 flex justify-center items-center gap-2 px-4 py-3 rounded-2xl text-sm font-medium text-[#A195C5] hover:text-white hover:bg-[#1A1433] transition-all">
<i className="w-4 h-4" data-lucide="car"></i>
                                Car
                            </button>
</div>
</div>
<form className="p-6 sm:p-8">

<div className="flex justify-between items-center mb-10 pb-4 border-b border-[#251C3F]">
<h3 className="text-base font-normal text-white">Personal Information</h3>
<div className="bg-[#2E2252] rounded-full p-2">
<i className="w-4 h-4 text-[#A195C5]" data-lucide="chevrons-left"></i>
</div>
</div>

<div className="flex items-center gap-5 mb-10">
<div className="w-16 h-16 bg-[#251C3F] rounded-full overflow-hidden flex-shrink-0 p-1">
<div className="w-full h-full bg-[#E5E0F1] rounded-full overflow-hidden flex items-center justify-center">
<i className="w-8 h-8 text-[#5842b0]" data-lucide="user"></i>
</div>
</div>
<div>
<div className="text-sm text-[#A195C5] mb-1 font-normal">Name</div>
<div className="flex items-center gap-3">
<div className="text-2xl font-medium text-white tracking-tight">Henry Stevenson</div>
<div className="bg-[#5842b0] rounded-full p-1"><i className="w-3 h-3 text-white" data-lucide="check"></i></div>
</div>
<div className="text-sm text-[#A195C5] mt-1 font-normal">DOB: 11/12/2003</div>
</div>
</div>

<div className="space-y-0">

<div className="border-b border-[#251C3F] py-5 relative group cursor-pointer">
<label className="block text-sm font-normal text-[#A195C5] mb-2">Loan Purpose</label>
<select className="w-full bg-transparent text-lg font-medium text-white appearance-none focus:outline-none cursor-pointer pr-12">
<option className="bg-[#120E21]">Medical Emergency</option>
<option className="bg-[#120E21]">Education</option>
<option className="bg-[#120E21]">Travel</option>
</select>
<div className="absolute right-0 bottom-5 bg-[#2E2252] rounded-full p-1.5 pointer-events-none group-hover:bg-[#3B2D6B] transition-colors">
<i className="w-4 h-4 text-[#A195C5]" data-lucide="chevron-down"></i>
</div>
</div>

<div className="border-b border-[#251C3F] py-5 relative group">
<label className="block text-sm font-normal text-[#A195C5] mb-2 transition-colors group-focus-within:text-white">Required Amount (BDT)</label>
<input className="w-full bg-transparent text-lg font-medium text-white placeholder-[#4a3f6e] focus:outline-none pr-12" placeholder="Enter amount" type="number" />
</input></div>
<div className="border-b border-[#251C3F] py-5 relative group">
<label className="block text-sm font-normal text-[#A195C5] mb-2 transition-colors group-focus-within:text-white">Father Name</label>
<input className="w-full bg-transparent text-lg font-medium text-white placeholder-[#4a3f6e] focus:outline-none pr-12" type="text" value="Kamal Uddin Akbar" />
<div className="absolute right-0 bottom-5 bg-[#2E2252] rounded-full p-1.5 pointer-events-none">
<i className="w-4 h-4 text-[#A195C5]" data-lucide="chevron-down"></i>
</div>
</input></div>
<div className="border-b border-[#251C3F] py-5 relative group">
<label className="block text-sm font-normal text-[#A195C5] mb-2 transition-colors group-focus-within:text-white">Mother Name</label>
<input className="w-full bg-transparent text-lg font-medium text-white placeholder-[#4a3f6e] focus:outline-none pr-12" type="text" value="Jahanara Begum" />
<div className="absolute right-0 bottom-5 bg-[#2E2252] rounded-full p-1.5 pointer-events-none">
<i className="w-4 h-4 text-[#A195C5]" data-lucide="chevron-down"></i>
</div>
</input></div>
<div className="border-b border-[#251C3F] py-5 relative group">
<label className="block text-sm font-normal text-[#A195C5] mb-2 transition-colors group-focus-within:text-white">Email Address</label>
<input className="w-full bg-transparent text-lg font-medium text-white placeholder-[#4a3f6e] focus:outline-none pr-12" placeholder="Enter your email address" type="email" />
</input></div>
<div className="border-b border-[#251C3F] py-5 relative group cursor-pointer">
<label className="block text-sm font-normal text-[#A195C5] mb-2">Gender</label>
<select className="w-full bg-transparent text-lg font-medium text-white appearance-none focus:outline-none cursor-pointer pr-12">
<option className="text-[#4a3f6e] bg-[#120E21]" disabled="" selected="" value="">Enter your gender</option>
<option className="bg-[#120E21]">Male</option>
<option className="bg-[#120E21]">Female</option>
</select>
<div className="absolute right-0 bottom-5 bg-[#2E2252] rounded-full p-1.5 pointer-events-none group-hover:bg-[#3B2D6B] transition-colors">
<i className="w-4 h-4 text-[#A195C5]" data-lucide="chevron-down"></i>
</div>
</div>

<div className="border-b border-[#251C3F] py-6 flex justify-between items-center gap-4">
<div className="flex flex-col">
<span className="text-lg font-medium text-white mb-1">Present Address</span>
<span className="text-sm font-normal text-[#A195C5]">Use as communication address</span>
</div>
<label className="relative inline-flex items-center cursor-pointer flex-shrink-0">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-12 h-6 bg-[#251C3F] rounded-full peer peer-checked:bg-[#A188E6] transition-colors after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-6"></div>
</label>
</div>
<div className="border-b border-[#251C3F] py-6 flex justify-between items-center gap-4">
<div className="flex flex-col">
<span className="text-lg font-medium text-white mb-1">Permanent Address</span>
</div>
<label className="relative inline-flex items-center cursor-pointer flex-shrink-0">
<input className="sr-only peer" type="checkbox"/>
<div className="w-12 h-6 bg-[#251C3F] rounded-full peer peer-checked:bg-[#A188E6] transition-colors after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-6"></div>
</label>
</div>
</div>

<div className="flex flex-col sm:flex-row items-center gap-4 mt-12">
<button className="w-full sm:w-auto bg-[#F14A4A] text-white rounded-[32px] pl-5 pr-2 py-2 flex items-center justify-between gap-6 hover:bg-[#FF5A5A] transition-all group active:scale-95 shadow-lg" type="button">
<span className="font-medium text-base tracking-wide whitespace-nowrap">Cancel</span>
<div className="bg-[#C02C2C] w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0">
<span className="font-medium text-white text-lg leading-none">!</span>
</div>
</button>
<button className="w-full sm:flex-grow bg-[#1C1536] text-white rounded-[32px] pl-6 pr-2 py-2 flex items-center justify-between gap-4 hover:bg-[#231A45] transition-all group active:scale-95 border border-[#251C3F] shadow-lg" type="submit">
<span className="font-medium text-base tracking-wide whitespace-nowrap">Proceed</span>
<div className="bg-[#0B0814] w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0">
<i className="w-4 h-4 text-white" data-lucide="arrow-right"></i>
</div>
</button>
</div>
</form>
</div>
<p className="text-center text-sm font-normal text-[#7A6A9E] mt-8 flex items-center justify-center gap-2">
<i className="w-4 h-4" data-lucide="lock"></i>
                    End-to-end encrypted &amp; compliant.
                </p>
</div>
</section>
</main>

<footer className="bg-[#0D091A] border-t border-[#251C3F]/50 py-10 mt-auto">
<div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<span className="text-lg tracking-tight font-medium text-white">JAMUNA</span>
</div>
<p className="text-sm text-[#7A6A9E] font-normal">© 2026 Jamuna Bank PLC. All rights reserved.</p>
<div className="flex gap-8 text-sm font-normal text-[#A195C5]">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
</div>
</footer>


    </>
  );
}
