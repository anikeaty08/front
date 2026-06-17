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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons();
    
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
      

<nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
<div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
<a className="flex items-center" href="#">
<img alt="Rapid Management Logo" className="h-12 w-auto object-contain" src="logo.png"/>
</a>
<div className="hidden gap-8 md:flex">
<a className="text-lg font-normal text-slate-500 transition-colors hover:text-slate-900" href="#about">About</a>
<a className="text-lg font-normal text-slate-500 transition-colors hover:text-slate-900" href="#services">Services</a>
<a className="text-lg font-normal text-slate-500 transition-colors hover:text-slate-900" href="#showcase">Showcase</a>
<a className="text-lg font-normal text-slate-500 transition-colors hover:text-slate-900" href="#clients">Clients</a>
</div>
<a className="hidden items-center justify-center rounded-full bg-slate-900 px-6 py-2.5 text-base font-normal text-white transition-colors hover:bg-slate-800 md:inline-flex" href="#contact">
                Contact Us
            </a>

<button className="md:hidden p-2 text-slate-500 flex items-center justify-center">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="menu"></i>
</button>
</div>
</nav>

<section className="relative overflow-hidden pt-24 pb-32">
<div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-100 via-white to-white"></div>
<div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
<div className="mx-auto max-w-4xl">
<h1 className="text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
                    Proper guidance is the key to a <span className="text-slate-400">successful housing organization.</span>
</h1>
<p className="mx-auto mt-6 max-w-2xl text-xl text-slate-500">
                    Providing comprehensive Accounting, Auditing, Statutory Compliance &amp; Management Services to Co-op. Housing Societies across Maharashtra.
                </p>
<div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
<a className="inline-flex h-14 items-center justify-center rounded-full bg-slate-900 px-8 text-lg font-normal text-white transition-colors hover:bg-slate-800" href="#services">Explore Services</a>
<a className="inline-flex h-14 items-center justify-center rounded-full border border-slate-200 bg-white px-8 text-lg font-normal text-slate-900 transition-colors hover:bg-slate-50" href="#contact">Get in Touch</a>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-slate-100 bg-slate-50/50" id="about">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid gap-16 lg:grid-cols-12">
<div className="lg:col-span-5">
<h2 className="text-3xl font-normal tracking-tight text-slate-900">About Rapid Management</h2>
<div className="mt-6 space-y-6 text-lg text-slate-500">
<p>Since 2016, we are the pioneers having rich experience of providing a comprehensive range of services to Co-operative Housing &amp; credit Societies / industrial Units. With the changing scenario of increasing complexities in Management of Housing Societies, our organization has become synonymous with expertise, experience and professionalism.</p>
<p>Our services and support facilities help you run your society smoothly and systematically, in conformity with all legal norms. The vast experience in managing complex situations has been converted into standards for the best advantage for our clients.</p>
<p>Founded by <span className="font-normal text-slate-900">Shri Rakesh Shirke-Padwal</span> (Govt. Panel Auditor) and <span className="font-normal text-slate-900">Shri Rupesh Devkar</span> (Inter-CA), starting single-handedly and growing significantly due to satisfactory services and realizing tremendous scope in this field.</p>
</div>
</div>
<div className="grid gap-6 sm:grid-cols-2 lg:col-span-7">

<div className="flex flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
<div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-900 mb-6">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="shield-check"></i>
</div>
<h3 className="text-xl font-normal tracking-tight text-slate-900">Core Values</h3>
<ul className="mt-4 space-y-4 text-lg text-slate-500">
<li className="flex items-start gap-3">
<i className="w-6 h-6 text-slate-300 stroke-[1.5] shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
                                Trust, Integrity, Reliability, Care
                            </li>
<li className="flex items-start gap-3">
<i className="w-6 h-6 text-slate-300 stroke-[1.5] shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
                                Trustworthy, Dependable &amp; Reliable
                            </li>
<li className="flex items-start gap-3">
<i className="w-6 h-6 text-slate-300 stroke-[1.5] shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
                                Can be counted upon for any task
                            </li>
</ul>
</div>

<div className="flex flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
<div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-900 mb-6">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="flag"></i>
</div>
<h3 className="text-xl font-normal tracking-tight text-slate-900">Our Mission</h3>
<ul className="mt-4 space-y-4 text-lg text-slate-500">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-slate-300 stroke-[1.5] shrink-0 mt-1" data-lucide="arrow-right"></i>
                                Lead as a Service Provider of Co-op Consultancy.
                            </li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-slate-300 stroke-[1.5] shrink-0 mt-1" data-lucide="arrow-right"></i>
                                Partner in solving customer problems.
                            </li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-slate-300 stroke-[1.5] shrink-0 mt-1" data-lucide="arrow-right"></i>
                                Continuous, measurable improvement.
                            </li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-slate-300 stroke-[1.5] shrink-0 mt-1" data-lucide="arrow-right"></i>
                                Empower staff to reach full potential.
                            </li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-24" id="services">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
<div className="max-w-2xl">
<h2 className="text-3xl font-normal tracking-tight text-slate-900">Professional Accounting Services</h2>
<p className="mt-4 text-xl text-slate-500">Comprehensive management and compliance solutions tailored for housing societies.</p>
</div>
</div>
<div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

<div className="group relative flex flex-col rounded-2xl border border-slate-200 p-8 transition-all hover:border-slate-300 hover:shadow-sm">
<i className="w-7 h-7 text-slate-700 stroke-[1.5] mb-6" data-lucide="calculator"></i>
<h3 className="text-xl font-normal tracking-tight text-slate-900">Computation</h3>
<ul className="mt-4 space-y-3 text-lg text-slate-500 flex-1">
<li>Rule-based Society Charges</li>
<li>Penalty calculations &amp; arrears</li>
<li>Metered billing for utilities</li>
<li>Special-Purpose collections</li>
</ul>
</div>

<div className="group relative flex flex-col rounded-2xl border border-slate-200 p-8 transition-all hover:border-slate-300 hover:shadow-sm">
<i className="w-7 h-7 text-slate-700 stroke-[1.5] mb-6" data-lucide="file-text"></i>
<h3 className="text-xl font-normal tracking-tight text-slate-900">Bill Distribution</h3>
<ul className="mt-4 space-y-3 text-lg text-slate-500 flex-1">
<li>Periodic Invoice Generation</li>
<li>e-Invoice processing</li>
<li>Aggregate distribution</li>
<li>Additional Invoice Generation</li>
</ul>
</div>

<div className="group relative flex flex-col rounded-2xl border border-slate-200 p-8 transition-all hover:border-slate-300 hover:shadow-sm">
<i className="w-7 h-7 text-slate-700 stroke-[1.5] mb-6" data-lucide="wallet"></i>
<h3 className="text-xl font-normal tracking-tight text-slate-900">Revenue Collection</h3>
<ul className="mt-4 space-y-3 text-lg text-slate-500 flex-1">
<li>E-receipts &amp; tracking</li>
<li>SMS/Email reminders</li>
<li>Custom reminder frequency</li>
<li>Cheque deposition</li>
</ul>
</div>

<div className="group relative flex flex-col rounded-2xl border border-slate-200 p-8 transition-all hover:border-slate-300 hover:shadow-sm">
<i className="w-7 h-7 text-slate-700 stroke-[1.5] mb-6" data-lucide="refresh-cw"></i>
<h3 className="text-xl font-normal tracking-tight text-slate-900">Reconciliation</h3>
<ul className="mt-4 space-y-3 text-lg text-slate-500 flex-1">
<li>Bill Vs. Payments Realization</li>
<li>Comparative revenue analysis</li>
<li>Bank reconciliations</li>
</ul>
</div>

<div className="group relative flex flex-col rounded-2xl border border-slate-200 p-8 transition-all hover:border-slate-300 hover:shadow-sm">
<i className="w-7 h-7 text-slate-700 stroke-[1.5] mb-6" data-lucide="pie-chart"></i>
<h3 className="text-xl font-normal tracking-tight text-slate-900">Reports</h3>
<ul className="mt-4 space-y-3 text-lg text-slate-500 flex-1">
<li>Payment Collections</li>
<li>Revenue &amp; Realization</li>
<li>Ledgers &amp; Others</li>
<li>Balance Sheet</li>
<li>Income &amp; Expenditure</li>
</ul>
</div>

<div className="group relative flex flex-col rounded-2xl border border-slate-200 p-8 transition-all hover:border-slate-300 hover:shadow-sm">
<i className="w-7 h-7 text-slate-700 stroke-[1.5] mb-6" data-lucide="building-2"></i>
<h3 className="text-xl font-normal tracking-tight text-slate-900">Taxation</h3>
<ul className="mt-4 space-y-3 text-lg text-slate-500 flex-1">
<li>TDS Compliances</li>
<li>GST Filings</li>
<li>Income Tax</li>
<li>Mandatory Returns</li>
<li>Submissions</li>
</ul>
</div>

<div className="group relative flex flex-col rounded-2xl border border-slate-200 p-8 transition-all hover:border-slate-300 hover:shadow-sm">
<i className="w-7 h-7 text-slate-700 stroke-[1.5] mb-6" data-lucide="users"></i>
<h3 className="text-xl font-normal tracking-tight text-slate-900">Resident Support</h3>
<ul className="mt-4 space-y-3 text-lg text-slate-500 flex-1">
<li>Email Support</li>
<li>Telephone Assistance</li>
<li>Online Portal</li>
<li>WhatsApp Integration</li>
<li>Back office handling</li>
</ul>
</div>

<div className="group relative flex flex-col rounded-2xl bg-slate-50 p-8 sm:col-span-2 lg:col-span-2 xl:col-span-1 border border-transparent">
<i className="w-7 h-7 text-slate-700 stroke-[1.5] mb-6" data-lucide="layers"></i>
<h3 className="text-xl font-normal tracking-tight text-slate-900 mb-4">Other Services</h3>
<p className="text-lg text-slate-600 leading-relaxed">
                        Conveyance, Recovery, Drafting, Statutory Records, Statutory &amp; Internal Audit, Transfer-Transmission, Stationery, Consultations, Security, Housekeeping, Pest Control, Tank Cleaning &amp; Total Management with Manpower.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-slate-100" id="showcase">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex flex-col items-start justify-between gap-4 mb-16 max-w-2xl">
<h2 className="text-3xl font-normal tracking-tight text-slate-900">Well-Maintained Societies</h2>
<p className="text-xl text-slate-500">A glimpse of the premium co-operative housing societies across Maharashtra that we help manage.</p>
</div>
<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
<img alt="Modern Housing Society" className="h-[22rem] w-full rounded-2xl object-cover shadow-sm border border-slate-200" src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<img alt="Residential Building Mumbai" className="h-[22rem] w-full rounded-2xl object-cover shadow-sm border border-slate-200" src="https://images.unsplash.com/photo-1605146769289-440113cc3d00?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<img alt="Maharashtra Co-op Society" className="h-[22rem] w-full rounded-2xl object-cover shadow-sm border border-slate-200 sm:col-span-2 lg:col-span-1" src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>
</section>

<section className="py-24 border-t border-slate-100 bg-slate-50/50" id="clients">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-normal tracking-tight text-slate-900 text-center mb-20">Our Valuable Clients</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-8">

<div className="flex items-start gap-4 text-lg text-slate-600">
<i className="w-6 h-6 text-slate-300 stroke-[1.5] shrink-0 mt-0.5" data-lucide="building"></i>
<span>Phoenix CHS Ltd. (Prabhadevi)</span>
</div>
<div className="flex items-start gap-4 text-lg text-slate-600">
<i className="w-6 h-6 text-slate-300 stroke-[1.5] shrink-0 mt-0.5" data-lucide="building"></i>
<span>Neha Galaxy (Prabhadevi)</span>
</div>
<div className="flex items-start gap-4 text-lg text-slate-600">
<i className="w-6 h-6 text-slate-300 stroke-[1.5] shrink-0 mt-0.5" data-lucide="building"></i>
<span>Shree Krishna CHS Ltd. (Dadar – Hindu Colony)</span>
</div>
<div className="flex items-start gap-4 text-lg text-slate-600">
<i className="w-6 h-6 text-slate-300 stroke-[1.5] shrink-0 mt-0.5" data-lucide="building"></i>
<span>Matoshree Nanda Deep CHS (Dadar –West)</span>
</div>
<div className="flex items-start gap-4 text-lg text-slate-600">
<i className="w-6 h-6 text-slate-300 stroke-[1.5] shrink-0 mt-0.5" data-lucide="building"></i>
<span>Om Sumit CHS Ltd. (Lalbag)</span>
</div>
<div className="flex items-start gap-4 text-lg text-slate-600">
<i className="w-6 h-6 text-slate-300 stroke-[1.5] shrink-0 mt-0.5" data-lucide="building"></i>
<span>Odyssey CHS Ltd. (Wadala –East)</span>
</div>
<div className="flex items-start gap-4 text-lg text-slate-600">
<i className="w-6 h-6 text-slate-300 stroke-[1.5] shrink-0 mt-0.5" data-lucide="building"></i>
<span>Navkar Darshan CHS Ltd. (Byculla –East)</span>
</div>
<div className="flex items-start gap-4 text-lg text-slate-600">
<i className="w-6 h-6 text-slate-300 stroke-[1.5] shrink-0 mt-0.5" data-lucide="building"></i>
<span>Anand Vihar CHS Ltd. (Santacruz – West)</span>
</div>
<div className="flex items-start gap-4 text-lg text-slate-600">
<i className="w-6 h-6 text-slate-300 stroke-[1.5] shrink-0 mt-0.5" data-lucide="building"></i>
<span>Shiv Swapna CHS Ltd. (Kurla)</span>
</div>
<div className="flex items-start gap-4 text-lg text-slate-600">
<i className="w-6 h-6 text-slate-300 stroke-[1.5] shrink-0 mt-0.5" data-lucide="building"></i>
<span>Pooja Enclave (Kalina)</span>
</div>
<div className="flex items-start gap-4 text-lg text-slate-600">
<i className="w-6 h-6 text-slate-300 stroke-[1.5] shrink-0 mt-0.5" data-lucide="building"></i>
<span>Vikram CHS (Andheri)</span>
</div>
<div className="flex items-start gap-4 text-lg text-slate-600">
<i className="w-6 h-6 text-slate-300 stroke-[1.5] shrink-0 mt-0.5" data-lucide="building"></i>
<span>BTT Swapna CHS (Andheri)</span>
</div>
<div className="flex items-start gap-4 text-lg text-slate-600">
<i className="w-6 h-6 text-slate-300 stroke-[1.5] shrink-0 mt-0.5" data-lucide="building"></i>
<span>Datta Prasad CHS (Sanpada)</span>
</div>
<div className="flex items-start gap-4 text-lg text-slate-600">
<i className="w-6 h-6 text-slate-300 stroke-[1.5] shrink-0 mt-0.5" data-lucide="building"></i>
<span>Dream Land CHS Ltd. (Bandra)</span>
</div>
<div className="flex items-start gap-4 text-lg text-slate-600">
<i className="w-6 h-6 text-slate-300 stroke-[1.5] shrink-0 mt-0.5" data-lucide="building"></i>
<span>Krishna Bhagwan CHS (Andheri)</span>
</div>
<div className="flex items-start gap-4 text-lg text-slate-600">
<i className="w-6 h-6 text-slate-300 stroke-[1.5] shrink-0 mt-0.5" data-lucide="building"></i>
<span>Purshottam Tower (Prabhadevi)</span>
</div>
<div className="flex items-start gap-4 text-lg text-slate-600">
<i className="w-6 h-6 text-slate-300 stroke-[1.5] shrink-0 mt-0.5" data-lucide="building"></i>
<span>Diamond Queen CHS (Andheri)</span>
</div>
<div className="flex items-start gap-4 text-lg text-slate-600">
<i className="w-6 h-6 text-slate-300 stroke-[1.5] shrink-0 mt-0.5" data-lucide="building"></i>
<span>Sulakshana CHS (Mulund)</span>
</div>
<div className="flex items-start gap-4 text-lg text-slate-600">
<i className="w-6 h-6 text-slate-300 stroke-[1.5] shrink-0 mt-0.5" data-lucide="building"></i>
<span>Nilkantha CHS Ltd. (Thane)</span>
</div>
<div className="flex items-start gap-4 text-lg text-slate-600">
<i className="w-6 h-6 text-slate-300 stroke-[1.5] shrink-0 mt-0.5" data-lucide="building"></i>
<span>Tata Mill Compound CHS (Parel)</span>
</div>
<div className="flex items-start gap-4 text-lg text-slate-600">
<i className="w-6 h-6 text-slate-300 stroke-[1.5] shrink-0 mt-0.5" data-lucide="building"></i>
<span>Azad Nagar CHS (Andheri)</span>
</div>
<div className="flex items-start gap-4 text-lg text-slate-600">
<i className="w-6 h-6 text-slate-300 stroke-[1.5] shrink-0 mt-0.5" data-lucide="building"></i>
<span>Sairajan Garden CHS (Kandiwali)</span>
</div>
</div>

<div className="mt-24 border-t border-slate-200 pt-20">
<p className="text-center text-base font-normal tracking-widest text-slate-400 uppercase mb-10">Corporate &amp; Institutional Partners</p>
<div className="flex flex-wrap justify-center gap-x-16 gap-y-8 text-lg text-slate-500 font-normal">
<span>Passion Training &amp; Consultancy</span>
<span>Awards Prints Services</span>
<span>Minimax India</span>
<span>U-Tech Pvt. Ltd.</span>
<span>Cordial Peoples Co-op Hospital</span>
</div>
</div>
</div>
</section>

<footer className="bg-slate-900 py-20 text-slate-400" id="contact">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid gap-16 md:grid-cols-2 lg:grid-cols-4">
<div className="lg:col-span-2">
<div className="flex items-center gap-2 mb-8">
<img alt="Rapid Management Logo" className="h-12 w-auto object-contain brightness-0 invert" src="logo.png"/>
</div>
<p className="text-lg max-w-md leading-relaxed">Proper guidance is the key to a successful housing organization. We provide the expertise you need to ensure compliance and smooth operations.</p>
</div>
<div>
<h4 className="text-base font-normal text-white uppercase tracking-wider mb-8">Head Office</h4>
<address className="not-italic text-lg space-y-3">
<p>307, Shiv Sidhhi CHSL</p>
<p>Near Motilal Oswal, Sayani Road</p>
<p>Prabhadevi West, Mumbai 400025</p>
</address>
</div>
<div>
<h4 className="text-base font-normal text-white uppercase tracking-wider mb-8">Contact Us</h4>
<ul className="text-lg space-y-4">
<li>
<a className="flex items-center gap-3 hover:text-white transition-colors" href="mailto:rapidcm2018@gmail.com">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="mail"></i>
                                rapidcm2018@gmail.com
                            </a>
</li>
<li>
<a className="flex items-center gap-3 hover:text-white transition-colors" href="tel:+919867336774">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="phone"></i>
                                +91 9867336774
                            </a>
</li>
<li>
<a className="flex items-center gap-3 hover:text-white transition-colors" href="tel:+919967571355">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="phone"></i>
                                +91 9967571355
                            </a>
</li>
<li>
<a className="flex items-center gap-3 hover:text-white transition-colors" href="tel:+919930891263">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="phone"></i>
                                +91 9930891263
                            </a>
</li>
</ul>
</div>
</div>
<div className="mt-20 flex flex-col items-center justify-between border-t border-slate-800 pt-10 sm:flex-row text-base">
<p>© 2024 Rapid Management. All rights reserved.</p>
<div className="mt-6 flex gap-6 sm:mt-0">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
