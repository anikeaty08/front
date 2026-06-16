import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 transition-all duration-300">
<div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between relative z-10">
<div className="flex items-center gap-3 group cursor-pointer">
<div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-emerald-400 backdrop-blur-md shadow-[0_0_15px_rgba(52,211,153,0.1)] group-hover:shadow-[0_0_25px_rgba(52,211,153,0.2)] transition-all">
<i className="w-5 h-5" data-lucide="truck" strokeWidth="1.5"></i>
</div>
<span className="text-lg font-medium tracking-tight text-white/90">Apex</span>
</div>
<div className="hidden md:flex items-center gap-8 bg-white/5 px-6 py-2.5 rounded-full border border-white/5 backdrop-blur-sm">
<a className="text-sm font-normal text-slate-300 hover:text-white transition-colors" href="#services">Services</a>
<a className="text-sm font-normal text-slate-300 hover:text-white transition-colors" href="#coverage">Coverage</a>
<a className="text-sm font-normal text-slate-300 hover:text-white transition-colors" href="#about">Company</a>
</div>
<div className="flex items-center gap-6">
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors" href="tel:555-0123">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
<span>24/7 Dispatch</span>
</a>
<button className="bg-white text-black hover:bg-slate-200 text-sm font-medium px-5 py-2.5 rounded-full transition-all shadow-lg shadow-white/5">
                    Request Service
                </button>
</div>
</div>
</nav>

<section className="relative min-h-[100dvh] w-full bg-[#030303] overflow-hidden flex flex-col justify-center items-center pt-20">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.08),transparent_50%)]"></div>
<div className="absolute top-0 right-0 w-[800px] h-[600px] bg-emerald-900/10 blur-[120px] rounded-full pointer-events-none opacity-50"></div>
<div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none opacity-30"></div>

<svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" preserveaspectratio="xMidYMid slice" viewbox="0 0 1440 900">
<defs>
<lineargradient id="lineGrad" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" style={{stopColor: 'rgba(255,255,255,0)'}}></stop>
<stop offset="50%" style={{stopColor: 'rgba(255,255,255,0.15)'}}></stop>
<stop offset="100%" style={{stopColor: 'rgba(255,255,255,0)'}}></stop>
</lineargradient>
</defs>

<path d="M200,300 C300,300 400,450 720,450" fill="none" stroke="url(#lineGrad)" strokeWidth="1"></path>
<path d="M1240,300 C1140,300 1040,450 720,450" fill="none" stroke="url(#lineGrad)" strokeWidth="1"></path>
<path d="M300,700 C400,700 500,550 720,450" fill="none" stroke="url(#lineGrad)" strokeWidth="1"></path>
<path d="M1140,700 C1040,700 940,550 720,450" fill="none" stroke="url(#lineGrad)" strokeWidth="1"></path>
</svg>


<div className="absolute top-[25%] left-[10%] lg:left-[15%] hidden lg:block group">
<div className="flex items-center gap-3">
<div className="relative">
<div className="w-10 h-10 rounded-full border border-white/10 bg-black/50 backdrop-blur-md flex items-center justify-center relative z-10 group-hover:border-emerald-500/50 transition-colors">
<i className="w-4 h-4 text-emerald-400" data-lucide="activity" strokeWidth="1.5"></i>
</div>
<div className="absolute top-1/2 left-full w-12 h-[1px] bg-gradient-to-r from-emerald-500/50 to-transparent"></div>
</div>
<div>
<div className="flex items-center gap-2">
<span className="w-1 h-1 rounded-full bg-emerald-400"></span>
<h4 className="text-sm font-medium text-white/80">Dispatch</h4>
</div>
<p className="text-xs text-slate-500">24/7 Active</p>
</div>
</div>
</div>

<div className="absolute top-[28%] right-[10%] lg:right-[15%] hidden lg:block group text-right">
<div className="flex items-center gap-3 flex-row-reverse">
<div className="relative">
<div className="w-10 h-10 rounded-full border border-white/10 bg-black/50 backdrop-blur-md flex items-center justify-center relative z-10 group-hover:border-blue-500/50 transition-colors">
<i className="w-4 h-4 text-blue-400" data-lucide="package-search" strokeWidth="1.5"></i>
</div>
<div className="absolute top-1/2 right-full w-12 h-[1px] bg-gradient-to-l from-blue-500/50 to-transparent"></div>
</div>
<div>
<div className="flex items-center gap-2 justify-end">
<h4 className="text-sm font-medium text-white/80">Inventory</h4>
<span className="w-1 h-1 rounded-full bg-blue-400"></span>
</div>
<p className="text-xs text-slate-500">98% In-Stock</p>
</div>
</div>
</div>

<div className="absolute bottom-[30%] left-[12%] lg:left-[18%] hidden lg:block group">
<div className="flex items-center gap-3">
<div className="relative">
<div className="w-12 h-12 rounded-full border border-white/10 bg-black/50 backdrop-blur-md flex items-center justify-center relative z-10 group-hover:border-purple-500/50 transition-colors">
<i className="w-5 h-5 text-purple-400" data-lucide="wrench" strokeWidth="1.5"></i>
</div>
</div>
<div>
<h4 className="text-sm font-medium text-white/80">Mechanics</h4>
<p className="text-xs text-slate-500">Certified</p>
</div>
</div>
</div>

<div className="absolute bottom-[25%] right-[12%] lg:right-[18%] hidden lg:block group text-right">
<div className="flex items-center gap-3 flex-row-reverse">
<div className="relative">
<div className="w-8 h-8 rounded-full border border-white/10 bg-black/50 backdrop-blur-md flex items-center justify-center relative z-10 group-hover:border-orange-500/50 transition-colors">
<i className="w-3 h-3 text-orange-400" data-lucide="map-pin" strokeWidth="1.5"></i>
</div>
</div>
<div>
<h4 className="text-sm font-medium text-white/80">Coverage</h4>
<p className="text-xs text-slate-500">Tri-state</p>
</div>
</div>
</div>

<div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">

<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-xs font-medium mb-12 hover:bg-white/10 transition-colors cursor-default backdrop-blur-md">
<i className="w-3 h-3 fill-emerald-400/20" data-lucide="zap"></i>
<span>Mobile units available now</span>
<i className="w-3 h-3 opacity-50 ml-1" data-lucide="arrow-right"></i>
</div>

<h1 className="text-6xl md:text-8xl font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40 mb-8 leading-[1]">
                Keep your fleet<br/>moving forward.
            </h1>

<p className="text-lg md:text-xl text-slate-400 font-normal leading-relaxed mb-12 max-w-xl mx-auto tracking-wide">
                Dive into the premier trailer repair infrastructure where innovative diagnostics meet mechanical expertise.
            </p>

<div className="flex flex-col sm:flex-row gap-5 items-center">
<button className="group bg-white text-black text-sm font-medium px-8 py-3.5 rounded-full transition-all hover:bg-slate-200 flex items-center gap-2">
                    Get Emergency Help
                    <i className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" data-lucide="arrow-up-right"></i>
</button>
<button className="group bg-transparent text-white border border-white/20 hover:bg-white/5 text-sm font-medium px-8 py-3.5 rounded-full transition-all flex items-center gap-2 backdrop-blur-sm">
                    Schedule Maintenance
                </button>
</div>
</div>

<div className="absolute bottom-8 left-8 flex items-center gap-4 text-white/40">
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center animate-bounce">
<i className="w-4 h-4" data-lucide="arrow-down"></i>
</div>
<span className="text-xs font-medium tracking-widest uppercase">01/05 . Scroll Down</span>
</div>
<div className="absolute bottom-8 right-8 flex items-center gap-4">
<span className="text-xs font-medium tracking-tight text-white/60">System Status</span>
<div className="flex gap-1.5">
<div className="w-8 h-1 bg-white rounded-full"></div>
<div className="w-2 h-1 bg-white/20 rounded-full"></div>
<div className="w-2 h-1 bg-white/20 rounded-full"></div>
</div>
</div>

<div className="absolute top-1/2 left-1/4 w-1 h-1 bg-white/30 rounded-full"></div>
<div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white/20 rounded-full"></div>
<div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-emerald-500/20 rounded-full blur-[1px]"></div>
</section>

<section className="py-24 bg-slate-50" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Comprehensive Repair Suite</h2>
<p className="text-lg text-slate-500 max-w-2xl">From routine DOT inspections to complex structural welding, our certified technicians handle every aspect of trailer health.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300">
<div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-900 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="disc" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">Brakes &amp; Suspension</h3>
<p className="text-base text-slate-500 leading-relaxed">Full ABS diagnostics, shoe replacement, and air system troubleshooting to keep you compliant.</p>
</div>

<div className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300">
<div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-900 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="thermometer-snowflake" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">Reefer Units</h3>
<p className="text-base text-slate-500 leading-relaxed">Specialized repair for Thermo King and Carrier units. Temperature calibration and engine service.</p>
</div>

<div className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300">
<div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-900 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="hammer" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">Body &amp; Welding</h3>
<p className="text-base text-slate-500 leading-relaxed">Aluminum and steel welding for doors, panels, and structural frame damage.</p>
</div>

<div className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300">
<div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-900 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="zap" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">Electrical Systems</h3>
<p className="text-base text-slate-500 leading-relaxed">Lighting repair, harness rewiring, and liftgate electrical diagnostics.</p>
</div>

<div className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300">
<div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-900 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="clipboard-check" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">DOT Inspections</h3>
<p className="text-base text-slate-500 leading-relaxed">Certified annual inspections (FHWA) to ensure your fleet meets all federal regulations.</p>
</div>

<div className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300">
<div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-900 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="repeat" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">Preventative Plans</h3>
<p className="text-base text-slate-500 leading-relaxed">Scheduled maintenance programs tailored to your fleet's mileage and load types.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0a0a0a] text-white border-y border-white/5">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
<div className="group">
<div className="text-5xl font-medium tracking-tight mb-2 text-white group-hover:text-emerald-400 transition-colors">24/7</div>
<div className="text-lg text-slate-500">Emergency Availability</div>
</div>
<div className="group">
<div className="text-5xl font-medium tracking-tight mb-2 text-white group-hover:text-emerald-400 transition-colors">45<span className="text-2xl text-slate-500">min</span></div>
<div className="text-lg text-slate-500">Avg. Response Time</div>
</div>
<div className="group">
<div className="text-5xl font-medium tracking-tight mb-2 text-white group-hover:text-emerald-400 transition-colors">12k+</div>
<div className="text-lg text-slate-500">Repairs Completed</div>
</div>
<div className="group">
<div className="text-5xl font-medium tracking-tight mb-2 text-white group-hover:text-emerald-400 transition-colors">100%</div>
<div className="text-lg text-slate-500">Satisfaction Guarantee</div>
</div>
</div>
</section>

<section className="py-24 overflow-hidden bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row items-center gap-16">
<div className="flex-1">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6">Transparent billing. <br/>Real-time updates.</h2>
<p className="text-lg text-slate-500 mb-8 leading-relaxed">We believe in modernizing the repair experience. No hidden fees, no guessing games. Track your repair status through our digital portal.</p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<i className="w-6 h-6 text-emerald-600 mt-0.5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-lg text-slate-700">Digital estimates approved via SMS or Email</span>
</li>
<li className="flex items-start gap-3">
<i className="w-6 h-6 text-emerald-600 mt-0.5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-lg text-slate-700">Photo documentation of all damages</span>
</li>
<li className="flex items-start gap-3">
<i className="w-6 h-6 text-emerald-600 mt-0.5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-lg text-slate-700">Parts warranty included on all repairs</span>
</li>
</ul>
</div>
<div className="flex-1 w-full">
<div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 relative shadow-2xl shadow-slate-200">

<div className="space-y-4">
<div className="flex items-center justify-between pb-4 border-b border-slate-200">
<span className="text-sm font-medium text-slate-500">Invoice #4921</span>
<span className="px-2 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold">Paid</span>
</div>
<div className="space-y-3">
<div className="flex justify-between items-center">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded bg-white border border-slate-200 flex items-center justify-center">
<i className="w-4 h-4 text-slate-500" data-lucide="wrench"></i>
</div>
<span className="text-slate-700">Labor: Axle Repair</span>
</div>
<span className="font-medium text-slate-900">$320.00</span>
</div>
<div className="flex justify-between items-center">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded bg-white border border-slate-200 flex items-center justify-center">
<i className="w-4 h-4 text-slate-500" data-lucide="package"></i>
</div>
<span className="text-slate-700">Parts: Brake Kit</span>
</div>
<span className="font-medium text-slate-900">$185.50</span>
</div>
</div>
<div className="pt-4 border-t border-slate-200 flex justify-between items-end">
<span className="text-slate-500 text-sm">Total</span>
<span className="text-2xl font-semibold text-slate-900 tracking-tight">$505.50</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white py-16 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white">
<i className="w-4 h-4" data-lucide="truck" strokeWidth="2"></i>
</div>
<span className="text-lg font-semibold text-slate-900">Apex</span>
</div>
<p className="text-slate-500 text-sm leading-relaxed">
                        Setting the standard for heavy-duty trailer repair and maintenance across the tri-state area.
                    </p>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4">Services</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-emerald-600 transition-colors" href="#">Mobile Repair</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Shop Service</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Inspections</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Part Sales</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4">Company</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-emerald-600 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Locations</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4">Support</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-emerald-600 transition-colors" href="#">24/7 Dispatch</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Portal Login</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Privacy Policy</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-slate-400 text-sm">© 2024 Apex Trailer Services. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-black transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="text-slate-400 hover:text-black transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
<a className="text-slate-400 hover:text-black transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
