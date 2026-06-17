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



        // SPA Logic
        function switchPage(pageId) {
            // Hide all sections
            const sections = document.querySelectorAll('.page-section');
            sections.forEach(section => {
                section.classList.remove('active');
            });
            
            // Show target section
            document.getElementById(pageId).classList.add('active');
            
            // Scroll to top
            window.scrollTo(0, 0);
        }

        function toggleMobile() {
            document.getElementById('mobile-menu').classList.add('hidden');
        }

        // Tax Calculator Logic (Pakistan Salaried 2024-25 Approximation)
        function calculateTax() {
            const monthlyIncome = parseFloat(document.getElementById('monthlyIncome').value) || 0;
            const yearlyIncome = monthlyIncome * 12;
            let yearlyTax = 0;

            if (yearlyIncome <= 600000) {
                yearlyTax = 0;
            } else if (yearlyIncome <= 1200000) {
                yearlyTax = (yearlyIncome - 600000) * 0.05; // 5% of excess over 600k
            } else if (yearlyIncome <= 2200000) {
                yearlyTax = 30000 + (yearlyIncome - 1200000) * 0.15; // Fixed + 15%
            } else if (yearlyIncome <= 3200000) {
                yearlyTax = 180000 + (yearlyIncome - 2200000) * 0.25; // Fixed + 25%
            } else if (yearlyIncome <= 4100000) {
                yearlyTax = 430000 + (yearlyIncome - 3200000) * 0.30; // Fixed + 30%
            } else {
                yearlyTax = 700000 + (yearlyIncome - 4100000) * 0.35; // Fixed + 35%
            }

            const monthlyTax = yearlyTax / 12;
            const netIncome = monthlyIncome - monthlyTax;

            // Format Currency
            const formatter = new Intl.NumberFormat('en-PK', {
                style: 'currency',
                currency: 'PKR',
                maximumFractionDigits: 0
            });

            document.getElementById('displayIncome').innerText = formatter.format(monthlyIncome);
            document.getElementById('displayYearly').innerText = formatter.format(yearlyIncome);
            document.getElementById('displayTax').innerText = formatter.format(monthlyTax);
            document.getElementById('displayNet').innerText = formatter.format(netIncome);
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
      

<nav className="fixed top-0 w-full z-50 glass-nav">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#" onclick="switchPage('home')">
<div className="w-8 h-8 bg-slate-900 text-white flex items-center justify-center rounded-lg group-hover:bg-teal-700 transition-colors duration-300">
<span className="font-medium text-sm tracking-tight">AR</span>
</div>
<div className="flex flex-col">
<span className="text-slate-900 font-medium tracking-tight leading-none text-base">A.R ARFAN &amp; CO</span>
<span className="text-slate-400 text-xs tracking-wide">Chartered Accountants</span>
</div>
</a>

<div className="hidden md:flex items-center gap-8">
<button className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" onclick="switchPage('home')">Home</button>
<button className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" onclick="switchPage('about')">Who We Are</button>
<button className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" onclick="switchPage('services')">Services</button>
<button className="text-sm font-medium text-teal-700 hover:text-teal-900 bg-teal-50 px-3 py-1.5 rounded-full transition-colors flex items-center gap-1" onclick="switchPage('calculator')">
<iconify-icon icon="solar:calculator-linear" width="16"></iconify-icon> Tax Calculator
                </button>
<button className="text-sm font-medium bg-slate-900 text-white px-5 py-2.5 rounded-full hover:bg-slate-800 transition-all shadow-lg shadow-slate-200" onclick="switchPage('contact')">Contact Us</button>
</div>

<button className="md:hidden text-slate-900" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>

<div className="hidden md:hidden bg-white border-t border-slate-100 absolute w-full px-6 py-4 shadow-xl" id="mobile-menu">
<div className="flex flex-col gap-4">
<button className="text-left text-sm font-medium text-slate-900" onclick="switchPage('home'); toggleMobile()">Home</button>
<button className="text-left text-sm font-medium text-slate-900" onclick="switchPage('about'); toggleMobile()">Who We Are</button>
<button className="text-left text-sm font-medium text-slate-900" onclick="switchPage('services'); toggleMobile()">Services</button>
<button className="text-left text-sm font-medium text-teal-700" onclick="switchPage('calculator'); toggleMobile()">Tax Calculator</button>
<button className="text-left text-sm font-medium text-slate-900" onclick="switchPage('contact'); toggleMobile()">Contact</button>
</div>
</div>
</nav>

<main className="pt-20 min-h-screen">

<div className="page-section active" id="home">

<section className="relative pt-24 pb-32 px-6 overflow-hidden">
<div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-50 via-slate-50 to-white opacity-70"></div>
<div className="max-w-4xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-8">
<span className="w-2 h-2 rounded-full bg-teal-500"></span>
<span className="text-xs font-medium text-slate-500 uppercase tracking-wide">Global Reach • Pakistan Presence</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium text-slate-900 tracking-tight mb-6 leading-[1.1]">
                        Clarity. Compliance.<br/><span className="text-slate-400">Confidence.</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                        End-to-end financial, tax, audit, and business advisory solutions for individuals, startups, and corporations. We don't just file — we advise, protect, and guide.
                    </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-3.5 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-800 transition-all flex items-center justify-center gap-2" onclick="switchPage('contact')">
                            Schedule Consultation
                            <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
<button className="w-full sm:w-auto px-8 py-3.5 bg-white text-slate-700 border border-slate-200 rounded-xl font-medium hover:bg-slate-50 transition-all" onclick="switchPage('services')">
                            Explore Services
                        </button>
</div>
</div>
</section>

<section className="py-20 bg-white border-t border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
<div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-slate-200 mb-4 text-slate-900">
<iconify-icon icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900 mb-2 tracking-tight">Regulatory Compliance</h3>
<p className="text-sm text-slate-500 leading-relaxed">Navigating complex legal frameworks to ensure your business remains safe and lawful.</p>
</div>

<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
<div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-slate-200 mb-4 text-slate-900">
<iconify-icon icon="solar:chart-square-linear" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900 mb-2 tracking-tight">Financial Accuracy</h3>
<p className="text-sm text-slate-500 leading-relaxed">Precision in bookkeeping and reporting to drive informed decision-making.</p>
</div>

<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
<div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-slate-200 mb-4 text-slate-900">
<iconify-icon icon="solar:danger-circle-linear" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900 mb-2 tracking-tight">Risk Reduction</h3>
<p className="text-sm text-slate-500 leading-relaxed">Proactive audit and assurance services to identify and mitigate financial risks.</p>
</div>

<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
<div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-slate-200 mb-4 text-slate-900">
<iconify-icon icon="solar:lightbulb-bolt-linear" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900 mb-2 tracking-tight">Strategic Insight</h3>
<p className="text-sm text-slate-500 leading-relaxed">Business advisory that goes beyond numbers to unlock sustainable growth.</p>
</div>
</div>
</div>
</section>
</div>

<div className="page-section" id="about">
<section className="py-24 px-6 max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
<div>
<h2 className="text-3xl md:text-4xl font-medium text-slate-900 mb-6 tracking-tight">Who We Are</h2>
<div className="space-y-6 text-lg text-slate-500 font-light leading-relaxed">
<p>
<strong className="text-slate-900 font-medium">A.R Arfan &amp; Co – Chartered Accountants</strong> is a professional services firm providing end-to-end financial, tax, audit, and business advisory solutions to individuals, startups, SMEs, and corporate entities in Pakistan.
                            </p>
<p>
                                We help businesses stay compliant, optimize finances, and make informed decisions through structured, ethical, and practical advisory. We believe in building long-term relationships based on trust and results.
                            </p>
</div>
<div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="flex items-start gap-3">
<iconify-icon className="text-teal-600 mt-1" icon="solar:verified-check-linear" width="20"></iconify-icon>
<div>
<h4 className="text-sm font-medium text-slate-900">Chartered Accountants Firm</h4>
<p className="text-xs text-slate-500 mt-1">Certified expertise you can trust.</p>
</div>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-teal-600 mt-1" icon="solar:lock-password-linear" width="20"></iconify-icon>
<div>
<h4 className="text-sm font-medium text-slate-900">Confidentiality &amp; Ethics</h4>
<p className="text-xs text-slate-500 mt-1">Your data is secure with us.</p>
</div>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-teal-600 mt-1" icon="solar:clock-circle-linear" width="20"></iconify-icon>
<div>
<h4 className="text-sm font-medium text-slate-900">Timely Execution</h4>
<p className="text-xs text-slate-500 mt-1">Deadlines matter to us.</p>
</div>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-teal-600 mt-1" icon="solar:handshake-linear" width="20"></iconify-icon>
<div>
<h4 className="text-sm font-medium text-slate-900">Practical Advice</h4>
<p className="text-xs text-slate-500 mt-1">Solutions that work in the real world.</p>
</div>
</div>
</div>
</div>
<div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-full blur-3xl -z-10"></div>
<h3 className="text-xl font-medium text-slate-900 mb-6 tracking-tight">Our Approach</h3>
<ul className="space-y-0">
<li className="flex gap-4 pb-6 border-l border-slate-200 pl-6 relative">
<span className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-slate-900 border-2 border-white"></span>
<div>
<span className="text-xs font-semibold text-teal-600 uppercase tracking-wider mb-1 block">Step 01</span>
<h4 className="text-base font-medium text-slate-900">Understand Your Business</h4>
<p className="text-sm text-slate-500 mt-1">Deep dive into your operations and goals.</p>
</div>
</li>
<li className="flex gap-4 pb-6 border-l border-slate-200 pl-6 relative">
<span className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-slate-300 border-2 border-white"></span>
<div>
<span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1 block">Step 02</span>
<h4 className="text-base font-medium text-slate-900">Identify Risks &amp; Opportunities</h4>
<p className="text-sm text-slate-500 mt-1">Pinpoint areas for improvement and savings.</p>
</div>
</li>
<li className="flex gap-4 pb-6 border-l border-slate-200 pl-6 relative">
<span className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-slate-300 border-2 border-white"></span>
<div>
<span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1 block">Step 03</span>
<h4 className="text-base font-medium text-slate-900">Design Practical Solutions</h4>
<p className="text-sm text-slate-500 mt-1">Tailored strategies for your specific needs.</p>
</div>
</li>
<li className="flex gap-4 border-l border-transparent pl-6 relative">
<span className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-slate-300 border-2 border-white"></span>
<div>
<span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1 block">Step 04</span>
<h4 className="text-base font-medium text-slate-900">Support Long-Term Growth</h4>
<p className="text-sm text-slate-500 mt-1">Continuous compliance and advisory.</p>
</div>
</li>
</ul>
</div>
</div>
</section>
</div>

<div className="page-section" id="services">
<section className="py-24 px-6 max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight mb-4">Our Services</h2>
<p className="text-lg text-slate-500 font-light max-w-2xl mx-auto">We offer practical solutions, not just reports. Comprehensive financial services tailored for global standards and local compliance.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 bg-white border border-slate-200 rounded-3xl hover:shadow-lg hover:border-teal-100 transition-all duration-300">
<div className="w-12 h-12 bg-teal-50 text-teal-700 rounded-xl flex items-center justify-center mb-6">
<iconify-icon icon="solar:file-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">Taxation Services</h3>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">We manage your tax matters with accuracy, compliance, and foresight. From income tax returns to appeals before authorities.</p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-teal-500" icon="solar:check-circle-linear"></iconify-icon> Income &amp; Sales Tax
                            </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-teal-500" icon="solar:check-circle-linear"></iconify-icon> FBR Registration &amp; NTN
                            </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-teal-500" icon="solar:check-circle-linear"></iconify-icon> Tax Advisory
                            </li>
</ul>
</div>

<div className="group p-8 bg-white border border-slate-200 rounded-3xl hover:shadow-lg hover:border-teal-100 transition-all duration-300">
<div className="w-12 h-12 bg-indigo-50 text-indigo-700 rounded-xl flex items-center justify-center mb-6">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">Audit &amp; Assurance</h3>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">Independent, objective audits conducted in accordance with International Standards on Auditing (ISA).</p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-indigo-500" icon="solar:check-circle-linear"></iconify-icon> Statutory &amp; Internal Audits
                            </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-indigo-500" icon="solar:check-circle-linear"></iconify-icon> Compliance Reviews
                            </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-indigo-500" icon="solar:check-circle-linear"></iconify-icon> Special Purpose Audits
                            </li>
</ul>
</div>

<div className="group p-8 bg-white border border-slate-200 rounded-3xl hover:shadow-lg hover:border-teal-100 transition-all duration-300">
<div className="w-12 h-12 bg-amber-50 text-amber-700 rounded-xl flex items-center justify-center mb-6">
<iconify-icon icon="solar:notebook-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">Accounting &amp; Bookkeeping</h3>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">Accurate books are the backbone of success. We convert numbers into decision-making tools with IFRS compliance.</p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-amber-500" icon="solar:check-circle-linear"></iconify-icon> Financial Statements
                            </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-amber-500" icon="solar:check-circle-linear"></iconify-icon> Monthly Management Accounts
                            </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-amber-500" icon="solar:check-circle-linear"></iconify-icon> System Setup
                            </li>
</ul>
</div>

<div className="group p-8 bg-white border border-slate-200 rounded-3xl hover:shadow-lg hover:border-teal-100 transition-all duration-300">
<div className="w-12 h-12 bg-emerald-50 text-emerald-700 rounded-xl flex items-center justify-center mb-6">
<iconify-icon icon="solar:graph-up-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">Budgeting &amp; Forecasting</h3>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">Plan ahead with clarity and control. Ideal for growing businesses, startups, and investors looking for financial modeling.</p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> Cash Flow Forecasting
                            </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> Profitability Review
                            </li>
</ul>
</div>

<div className="group p-8 bg-white border border-slate-200 rounded-3xl hover:shadow-lg hover:border-teal-100 transition-all duration-300">
<div className="w-12 h-12 bg-blue-50 text-blue-700 rounded-xl flex items-center justify-center mb-6">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">Business Advisory</h3>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">Strategic guidance for sustainable growth. We act as trusted advisors for corporate structuring and process improvement.</p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Business Setup
                            </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Financial Health Reviews
                            </li>
</ul>
</div>

<div className="group p-8 bg-white border border-slate-200 rounded-3xl hover:shadow-lg hover:border-teal-100 transition-all duration-300">
<div className="w-12 h-12 bg-purple-50 text-purple-700 rounded-xl flex items-center justify-center mb-6">
<iconify-icon icon="solar:diploma-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">Regulatory Platforms</h3>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">One-window compliance support for LCCI, PEC, IPO Pakistan (Trademark), SECP, and NGO registrations.</p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-purple-500" icon="solar:check-circle-linear"></iconify-icon> SECP Company Reg
                            </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-purple-500" icon="solar:check-circle-linear"></iconify-icon> Trademark &amp; Copyright
                            </li>
</ul>
</div>
</div>

<div className="mt-20 pt-10 border-t border-slate-200">
<p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest mb-8">Industries We Serve</p>
<div className="flex flex-wrap justify-center gap-4">
<span className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm text-slate-600">Trading &amp; Manufacturing</span>
<span className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm text-slate-600">Services &amp; Consultancy</span>
<span className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm text-slate-600">Startups &amp; SMEs</span>
<span className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm text-slate-600">NGOs &amp; NPOs</span>
<span className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm text-slate-600">Contractors &amp; Engineers</span>
</div>
</div>
</section>
</div>

<div className="page-section" id="calculator">
<section className="py-24 px-6 max-w-4xl mx-auto">
<div className="text-center mb-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-xs font-medium mb-4">
                        Pakistan Fiscal Year 2024-25
                    </div>
<h2 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight mb-4">Salary Tax Calculator</h2>
<p className="text-slate-500">Estimate your monthly income tax liability for salaried individuals in Pakistan.</p>
</div>
<div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-200 overflow-hidden p-8 md:p-12">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">

<div className="space-y-8">
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">Monthly Income (PKR)</label>
<div className="relative">
<span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">Rs.</span>
<input className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white transition-all text-slate-900 font-medium" id="monthlyIncome" placeholder="e.g. 150000" type="number"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">Tax Year</label>
<select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900 text-slate-900">
<option>2024 - 2025</option>
<option>2023 - 2024</option>
</select>
</div>
<button className="w-full bg-slate-900 text-white py-4 rounded-xl font-medium hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-slate-900/10" onclick="calculateTax()">
                                Calculate Tax
                                <iconify-icon icon="solar:calculator-minimalistic-linear" width="20"></iconify-icon>
</button>
</div>

<div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 flex flex-col justify-center">
<div className="space-y-6">
<div className="flex justify-between items-center pb-4 border-b border-slate-200">
<span className="text-sm text-slate-500">Monthly Income</span>
<span className="text-lg font-medium text-slate-900" id="displayIncome">0</span>
</div>
<div className="flex justify-between items-center pb-4 border-b border-slate-200">
<span className="text-sm text-slate-500">Yearly Income</span>
<span className="text-lg font-medium text-slate-900" id="displayYearly">0</span>
</div>
<div className="flex justify-between items-center">
<span className="text-sm text-slate-500">Monthly Tax</span>
<span className="text-2xl font-semibold text-teal-600" id="displayTax">0</span>
</div>
<div className="bg-teal-50 rounded-xl p-4 text-center mt-4">
<span className="text-xs text-teal-700 uppercase tracking-wide font-semibold block mb-1">Net Monthly Income</span>
<span className="text-3xl font-bold text-teal-900" id="displayNet">0</span>
</div>
</div>
</div>
</div>
<p className="text-xs text-slate-400 mt-8 text-center">Disclaimer: This calculator is for estimation purposes based on standard salaried slabs. For exact liabilities and adjustments, please schedule a consultation.</p>
</div>
</section>
</div>

<div className="page-section" id="contact">
<section className="py-24 px-6 max-w-5xl mx-auto">
<div className="bg-slate-900 rounded-3xl overflow-hidden text-white flex flex-col md:flex-row shadow-2xl shadow-slate-900/20">
<div className="p-10 md:w-1/2 flex flex-col justify-between bg-gradient-to-br from-slate-900 to-slate-800">
<div>
<h2 className="text-3xl font-medium mb-4 tracking-tight">Let's bring clarity to your business.</h2>
<p className="text-slate-400 font-light mb-8">Schedule a consultation with our experts today.</p>
<div className="space-y-6">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div>
<span className="text-xs text-slate-400 uppercase tracking-wide">Location</span>
<p className="font-medium">Lahore, Pakistan</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</div>
<div>
<span className="text-xs text-slate-400 uppercase tracking-wide">Email</span>
<p className="font-medium">contact@ararfan.com</p>
</div>
</div>
</div>
</div>
<div className="mt-12 pt-8 border-t border-white/10">
<p className="text-sm text-slate-400">“Professional advice. Ethical standards. Business clarity.”</p>
</div>
</div>
<div className="p-10 md:w-1/2 bg-white text-slate-900">
<form onsubmit="event.preventDefault(); alert('Thank you. We will contact you shortly.');">
<div className="space-y-4">
<div>
<label className="block text-xs font-semibold uppercase text-slate-500 mb-1">Name</label>
<input className="w-full border-b border-slate-200 py-2 focus:outline-none focus:border-slate-900 transition-colors bg-transparent placeholder-slate-300" placeholder="John Doe" type="text"/>
</div>
<div>
<label className="block text-xs font-semibold uppercase text-slate-500 mb-1">Email</label>
<input className="w-full border-b border-slate-200 py-2 focus:outline-none focus:border-slate-900 transition-colors bg-transparent placeholder-slate-300" placeholder="john@company.com" type="email"/>
</div>
<div>
<label className="block text-xs font-semibold uppercase text-slate-500 mb-1">Service Interest</label>
<select className="w-full border-b border-slate-200 py-2 focus:outline-none focus:border-slate-900 transition-colors bg-transparent text-slate-900">
<option>Taxation</option>
<option>Audit</option>
<option>Advisory</option>
<option>Bookkeeping</option>
</select>
</div>
<div>
<label className="block text-xs font-semibold uppercase text-slate-500 mb-1">Message</label>
<textarea className="w-full border-b border-slate-200 py-2 focus:outline-none focus:border-slate-900 transition-colors bg-transparent placeholder-slate-300 resize-none" placeholder="How can we help?" rows="3"></textarea>
</div>
<button className="w-full bg-slate-900 text-white py-3 rounded-lg font-medium hover:bg-slate-800 transition-all mt-4">Send Message</button>
</div>
</form>
</div>
</div>
</section>
</div>
</main>

<footer className="bg-white border-t border-slate-200 py-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-slate-900 text-white flex items-center justify-center rounded-md text-xs">AR</div>
<span className="text-sm font-medium text-slate-900 tracking-tight">A.R Arfan &amp; Co</span>
</div>
<p className="text-sm text-slate-400">© 2024 A.R Arfan &amp; Co. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-900" href="#"><iconify-icon icon="solar:plain-linear" width="20"></iconify-icon></a> 
<a className="text-slate-400 hover:text-slate-900" href="#"><iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon></a>
</div>
</div>
</footer>


    </>
  );
}
