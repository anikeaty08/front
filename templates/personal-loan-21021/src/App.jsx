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
sans: ['Inter', 'sans-serif'],
display: ['Poppins', 'sans-serif'],
},
colors: {
brand: {
blue: '#0F172A', // Slate 900
light: '#F8FAFC', // Slate 50
accent: '#2563EB', // Blue 600
},
cta: {
DEFAULT: '#16A34A', // Green 600
hover: '#15803D', // Green 700
}
}
}
}
}



        // --- Calculator Logic ---
        const amountSlider = document.getElementById('amount-slider');
        const tenureSlider = document.getElementById('tenure-slider');
        const amountVal = document.getElementById('amount-val');
        const tenureVal = document.getElementById('tenure-val');
        const emiVal = document.getElementById('emi-val');
        const interestVal = document.getElementById('interest-val');

        function calculateEMI() {
            const P = parseInt(amountSlider.value); // Principal
            const n = parseInt(tenureSlider.value); // Months
            const r = 11.99 / 12 / 100; // Monthly Interest (11.99% annual)

            const emi = P * r * (Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1));
            const totalPay = emi * n;
            const totalInt = totalPay - P;

            // Update UI
            amountVal.innerText = '₹' + P.toLocaleString('en-IN');
            tenureVal.innerText = n;
            emiVal.innerText = '₹' + Math.round(emi).toLocaleString('en-IN');
            interestVal.innerText = '₹' + Math.round(totalInt).toLocaleString('en-IN');
        }

        amountSlider.addEventListener('input', calculateEMI);
        tenureSlider.addEventListener('input', calculateEMI);
        
        // Init Calculator
        calculateEMI();


        // --- Wizard Logic ---
        function nextStep(step) {
            // Hide all steps
            document.querySelectorAll('.step-content').forEach(el => el.classList.remove('active'));
            // Show target step
            document.getElementById(`step-${step}`).classList.add('active');
            
            // Update Tabs
            const tabs = ['tab-1', 'tab-2', 'tab-3'];
            tabs.forEach((id, index) => {
                const el = document.getElementById(id);
                if (index + 1 === step) {
                    el.classList.add('border-blue-600', 'text-blue-600');
                    el.classList.remove('border-transparent', 'text-slate-400');
                } else if (index + 1 < step) {
                    el.classList.add('text-green-600', 'border-transparent');
                    el.classList.remove('text-blue-600', 'border-blue-600', 'text-slate-400');
                    el.innerHTML = `<span class="iconify inline" data-icon="lucide:check-circle"></span>`;
                } else {
                    el.classList.remove('border-blue-600', 'text-blue-600', 'text-green-600');
                    el.classList.add('border-transparent', 'text-slate-400');
                }
            });
        }

        function calculateOffer() {
            const btnText = document.getElementById('btn-text');
            const loader = document.getElementById('loader');
            const nameInput = document.getElementById('name').value;
            const incomeInput = document.getElementById('income').value;

            // Loading state
            btnText.innerText = 'Analyzing Profile...';
            loader.classList.remove('hidden');
            
            setTimeout(() => {
                // Mock Logic
                const name = nameInput.split(' ')[0] || 'User';
                const income = parseInt(incomeInput) || 30000;
                let offer = income * 5;
                if(offer > 500000) offer = 500000; // Cap at 5L

                document.getElementById('user-name').innerText = name;
                document.getElementById('offer-amt').innerText = '₹' + offer.toLocaleString('en-IN');

                nextStep(3);
            }, 2000);
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
      

<div className="text-xs py-2 px-4 bg-slate-900 text-white">
<div className="max-w-7xl mx-auto flex justify-between items-center">
<div className="flex items-center gap-2">
<span className="inline-block w-2 h-2 rounded-full bg-cta animate-pulse"></span>
<span>Paperless approval in 5 minutes!</span>
</div>
<div className="flex gap-4">
<button className="transition hover:text-blue-300">Hindi</button>
<button className="transition hover:text-blue-300">Marathi</button>
<span className="font-semibold text-white">English</span>
</div>
</div>
</div>

<nav className="sticky top-0 z-50 backdrop-blur-md border-b bg-white/90 border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between h-20 items-center">
<div className="flex items-center gap-2 cursor-pointer">
<div className="p-1.5 rounded-lg bg-blue-600 text-white">
<svg aria-hidden="true" data-icon="lucide:banknote" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="12" rx="2" width="20" x="2" y="6"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path></g></svg>
</div>
<span className="font-display font-bold text-2xl tracking-tight text-slate-900">moneyloan<span className="text-blue-600">.com</span></span>
</div>
<div className="hidden md:flex space-x-8">
<a className="text-sm font-medium transition-colors text-slate-900 hover:text-blue-600" href="#home">Home</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-blue-600" href="#calculator">EMI Calculator</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-blue-600" href="#services">Loan Types</a>
<a className="transition-colors hover:text-blue-600 text-sm font-medium text-slate-600" href="#about">About</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-blue-600" href="#contact">Contact</a>
</div>
<div className="flex items-center space-x-4">
<a className="hidden md:block text-sm font-medium text-slate-600 hover:text-slate-900" href="#login">Login</a>
<a className="inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-full bg-cta hover:bg-cta-hover shadow-lg transition-all transform hover:-translate-y-0.5 text-white shadow-green-600/20" href="#apply">
                        Apply Now
                    </a>
</div>
</div>
</div>
</nav>

<section className="relative pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden bg-slate-50" id="home">

<div className="absolute top-0 right-0 -translate-y-12 translate-x-12 opacity-30">
<svg className="" height="400" viewbox="0 0 200 200" width="400" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-5.3C93.5,8.6,82.2,21.5,70.6,31.7C59,41.9,47.1,49.5,35.2,55.5C23.3,61.5,11.4,65.9,-1.4,68.3C-14.2,70.7,-29.9,71.1,-43.3,64.2C-56.7,57.3,-67.8,43.1,-75.4,27.5C-82.9,11.9,-86.9,-5.1,-82.3,-20.1C-77.7,-35.1,-64.5,-48.1,-50.2,-55.3C-35.9,-62.5,-20.5,-63.9,-5.9,-53.7L0,0Z" fill="#2563EB" transform="translate(100 100)"></path>
</svg>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-6 bg-blue-100 text-blue-700 border-blue-200">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
</span>
<span className="text-xs font-semibold uppercase tracking-wide">RBI Registered Partners</span>
</div>
<h1 className="text-4xl lg:text-6xl font-display font-bold tracking-tight leading-[1.1] mb-6 text-slate-900">
                        Instant Personal Loans for <span className="text-blue-600">Salaried Pros</span>
</h1>
<p className="text-lg mb-8 leading-relaxed text-slate-600">
                        Get up to ₹5 Lakhs credited to your bank account in 10 minutes. Minimal documentation, zero collateral, and transparent interest rates starting at 10.99% p.a.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 mb-10">
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-xl bg-cta hover:bg-cta-hover transition-all shadow-lg text-white shadow-green-600/30" href="#calculator">
                            Check Eligibility
                            <svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<div className="flex items-center gap-4 px-4 py-2">
<div className="flex -space-x-3">
<img alt="User" className="h-10 w-10 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=12"/>
<img alt="User" className="h-10 w-10 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=32"/>
<img alt="User" className="h-10 w-10 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=59"/>
</div>
<div className="text-sm">
<p className="font-bold text-slate-900">15k+ Users</p>
<p className="text-slate-500">Trusted in India 🇮🇳</p>
</div>
</div>
</div>
<div className="flex gap-6 text-slate-500 text-sm font-medium">
<div className="flex items-center gap-2">
<svg aria-hidden="true" data-icon="lucide:shield-check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg> 100% Secure
                        </div>
<div className="flex items-center gap-2">
<svg aria-hidden="true" data-icon="lucide:zap" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Instant Disbursal
                        </div>
</div>
</div>

<div className="rounded-2xl shadow-xl border p-8 transform transition hover:scale-[1.01] bg-white border-slate-100" id="calculator">
<div className="flex justify-between items-center mb-6">
<h3 className="text-xl font-bold font-display text-slate-900">EMI Calculator</h3>
<span className="p-2 rounded-full bg-blue-50 text-blue-600">
<svg aria-hidden="true" data-icon="lucide:calculator" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="2" width="16" x="4" y="2"></rect><path d="M8 6h8m0 8v4m0-8h.01M12 10h.01M8 10h.01M12 14h.01M8 14h.01M12 18h.01M8 18h.01"></path></g></svg>
</span>
</div>

<div className="mb-8">
<div className="flex justify-between mb-2">
<label className="text-sm font-medium text-slate-500">Loan Amount</label>
<span className="text-xl font-bold text-slate-900" id="amount-val">₹2,00,000</span>
</div>
<input className="w-full" id="amount-slider" max="500000" min="10000" step="5000" type="range" value="200000"/>
<div className="flex justify-between mt-2 text-xs font-medium text-slate-400">
<span>₹10k</span>
<span>₹5L</span>
</div>
</div>

<div className="mb-8">
<div className="flex justify-between mb-2">
<label className="text-sm font-medium text-slate-500">Tenure</label>
<span className="text-xl font-bold text-slate-900"><span id="tenure-val">12</span> Months</span>
</div>
<input className="w-full" id="tenure-slider" max="60" min="3" step="1" type="range" value="12"/>
<div className="flex justify-between mt-2 text-xs font-medium text-slate-400">
<span>3 Mon</span>
<span>60 Mon</span>
</div>
</div>

<div className="grid grid-cols-2 gap-4 mb-6">
<div className="p-4 rounded-xl border bg-slate-50 border-slate-100">
<p className="text-xs text-slate-500 mb-1">Monthly EMI</p>
<p className="text-xl font-bold text-blue-600" id="emi-val">₹17,769</p>
</div>
<div className="p-4 rounded-xl border bg-slate-50 border-slate-100">
<p className="text-xs text-slate-500 mb-1">Total Interest</p>
<p className="text-xl font-bold text-slate-900" id="interest-val">₹13,226</p>
</div>
</div>
<a className="block w-full text-center py-4 rounded-xl font-semibold transition shadow-lg shadow-blue-500/25 text-white bg-blue-600 hover:bg-blue-700" href="#apply">
                        Apply for this Loan
                    </a>
</div>
</div>
</div>
</section>

<section className="py-8 border-y border-slate-100 bg-white">
<div className="max-w-7xl mx-auto px-4 text-center">
<p className="text-xs font-bold uppercase tracking-widest mb-6 text-slate-400">Our RBI Regulated Lending Partners</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2 font-bold text-xl text-slate-800"><svg aria-hidden="true" data-icon="lucide:landmark" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10 18v-7m1.12-8.802a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949zM14 18v-7m4 7v-7M3 22h18M6 18v-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> HDFC Bank</div>
<div className="flex items-center gap-2 font-bold text-xl text-slate-800"><svg aria-hidden="true" data-icon="lucide:building-2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M10 12h4m-4-4h4m0 13v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></g></svg> Axis Finance</div>
<div className="flex items-center gap-2 font-bold text-xl text-slate-800"><svg aria-hidden="true" data-icon="lucide:briefcase" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></g></svg> Bajaj Finserv</div>
<div className="flex items-center gap-2 font-bold text-xl text-slate-800"><svg aria-hidden="true" data-icon="lucide:credit-card" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="14" rx="2" width="20" x="2" y="5"></rect><path d="M2 10h20"></path></g></svg> IDFC First</div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl font-display font-bold mb-4 text-slate-900">Tailored Financial Solutions</h2>
<p className="text-slate-600">Choose the loan that fits your needs. Simple eligibility: Age 22-45, Salaried, Minimum Income ₹20k.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group p-8 rounded-2xl border shadow-sm hover:shadow-xl transition-all duration-300 bg-white border-slate-100 hover:border-blue-100">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors bg-blue-50 text-blue-600">
<svg aria-hidden="true" data-icon="lucide:zap" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-xl font-bold font-display mb-3 text-slate-900">Instant Cash Loan</h3>
<p className="text-slate-500 mb-4 text-sm leading-relaxed">For urgent needs like medical emergencies or travel. Approvals in under 5 minutes.</p>
<ul className="text-sm space-y-2 mb-6 text-slate-600">
<li className="flex items-center gap-2"><svg aria-hidden="true" data-icon="lucide:check-circle-2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg> ₹10k - ₹2 Lakhs</li>
<li className="flex items-center gap-2"><svg aria-hidden="true" data-icon="lucide:check-circle-2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg> Tenure: 3-12 Months</li>
</ul>
<a className="font-semibold text-sm flex items-center group-hover:translate-x-1 transition-transform text-blue-600" href="#apply">Apply Now <svg aria-hidden="true" data-icon="lucide:arrow-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></a>
</div>

<div className="group p-8 rounded-2xl border shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden bg-white border-slate-100 hover:border-blue-100">
<div className="absolute top-0 right-0 bg-cta text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase text-white">Most Popular</div>
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors bg-blue-50 text-blue-600">
<svg aria-hidden="true" data-icon="lucide:briefcase" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></g></svg>
</div>
<h3 className="text-xl font-bold font-display mb-3 text-slate-900">Personal Loan</h3>
<p className="text-slate-500 mb-4 text-sm leading-relaxed">Higher limits for big purchases, weddings, or home renovation. Flexible repayment.</p>
<ul className="text-sm space-y-2 mb-6 text-slate-600">
<li className="flex items-center gap-2"><svg aria-hidden="true" data-icon="lucide:check-circle-2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg> Up to ₹5 Lakhs</li>
<li className="flex items-center gap-2"><svg aria-hidden="true" data-icon="lucide:check-circle-2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg> Tenure: 12-60 Months</li>
</ul>
<a className="font-semibold text-sm flex items-center group-hover:translate-x-1 transition-transform text-blue-600" href="#apply">Apply Now <svg aria-hidden="true" data-icon="lucide:arrow-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></a>
</div>

<div className="group p-8 rounded-2xl border shadow-sm hover:shadow-xl transition-all duration-300 bg-white border-slate-100 hover:border-blue-100">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors bg-blue-50 text-blue-600">
<svg aria-hidden="true" data-icon="lucide:smartphone" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></g></svg>
</div>
<h3 className="text-xl font-bold font-display mb-3 text-slate-900">Debt Consolidation</h3>
<p className="text-slate-500 mb-4 text-sm leading-relaxed">Pay off credit cards and other small loans. One EMI, one interest rate.</p>
<ul className="text-sm space-y-2 mb-6 text-slate-600">
<li className="flex items-center gap-2"><svg aria-hidden="true" data-icon="lucide:check-circle-2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg> Reduce monthly burden</li>
<li className="flex items-center gap-2"><svg aria-hidden="true" data-icon="lucide:check-circle-2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg> Improve Credit Score</li>
</ul>
<a className="font-semibold text-sm flex items-center group-hover:translate-x-1 transition-transform text-blue-600" href="#apply">Apply Now <svg aria-hidden="true" data-icon="lucide:arrow-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></a>
</div>
</div>
</div>
</section>

<section className="py-24 relative bg-slate-900 text-white" id="apply">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
<div className="max-w-4xl mx-auto px-4 relative z-10">
<div className="text-center mb-12">
<h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">Check Your Offer in Seconds</h2>
<p className="text-slate-400">No impact on credit score. 100% Digital Process.</p>
</div>
<div className="rounded-3xl shadow-2xl overflow-hidden bg-white text-slate-800">
<div className="flex border-b border-slate-100">
<div className="flex-1 py-4 text-center border-b-2 font-semibold text-sm border-blue-600 text-blue-600" id="tab-1">1. Basic Info</div>
<div className="flex-1 py-4 text-center border-b-2 border-transparent font-semibold text-sm text-slate-400" id="tab-2">2. Employment</div>
<div className="flex-1 py-4 text-center border-b-2 border-transparent font-semibold text-sm text-slate-400" id="tab-3">3. Offer</div>
</div>
<div className="p-8 md:p-12">
<form id="wizard-form">

<div className="step-content active space-y-6" id="step-1">
<div className="grid md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium mb-2 text-slate-700">Full Name (As per PAN)</label>
<input className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition border-slate-300" id="name" placeholder="e.g. Rahul Sharma" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium mb-2 text-slate-700">Date of Birth</label>
<input className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition border-slate-300" required="" type="date"/>
</div>
<div>
<label className="block text-sm font-medium mb-2 text-slate-700">Mobile Number</label>
<input className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition border-slate-300" pattern="[0-9]{10}" placeholder="98765 43210" required="" type="tel"/>
</div>
<div>
<label className="block text-sm font-medium mb-2 text-slate-700">Email Address</label>
<input className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition border-slate-300" placeholder="rahul@gmail.com" required="" type="email"/>
</div>
</div>
<button className="w-full font-bold py-4 rounded-xl transition shadow-lg shadow-blue-500/30 bg-blue-600 hover:bg-blue-700 text-white" onclick="nextStep(2)" type="button">Next Step</button>
</div>

<div className="step-content space-y-6" id="step-2">
<div className="grid md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium mb-2 text-slate-700">Employment Type</label>
<select className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none border-slate-300 bg-white">
<option>Salaried</option>
<option>Self-Employed</option>
</select>
</div>
<div>
<label className="block text-sm font-medium mb-2 text-slate-700">Monthly Income</label>
<input className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none transition border-slate-300" id="income" placeholder="₹ 45,000" required="" type="number"/>
</div>
<div className="md:col-span-2">
<label className="block text-sm font-medium mb-2 text-slate-700">Company Name</label>
<input className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none transition border-slate-300" placeholder="Company Pvt Ltd" type="text"/>
</div>
</div>
<div className="flex items-center gap-3 p-4 rounded-lg bg-blue-50">
<input className="w-5 h-5 rounded focus:ring-blue-500 text-blue-600" id="consent" required="" type="checkbox"/>
<label className="text-xs text-slate-600" htmlFor="consent">I agree to the <a className="underline" href="#">Privacy Policy</a> and authorize moneyloan to check my credit report.</label>
</div>
<div className="flex gap-4">
<button className="w-1/3 border font-bold py-4 rounded-xl transition border-slate-300 text-slate-600 hover:bg-slate-50" onclick="nextStep(1)" type="button">Back</button>
<button className="w-2/3 bg-cta hover:bg-cta-hover font-bold py-4 rounded-xl transition shadow-lg flex justify-center items-center gap-2 text-white shadow-green-600/30" onclick="calculateOffer()" type="button">
<span id="btn-text">Check My Offer</span>
<span className="hidden w-5 h-5 border-2 border-t-transparent rounded-full animate-spin border-white" id="loader"></span>
</button>
</div>
</div>

<div className="step-content text-center py-4" id="step-3">
<div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 bg-green-100">
<svg aria-hidden="true" data-icon="lucide:check" data-width="40" height="40" role="img" viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-2xl font-bold mb-2 text-slate-900">Congratulations, <span id="user-name">User</span>!</h3>
<p className="mb-8 text-slate-600">You are eligible for a pre-approved loan.</p>
<div className="border border-dashed rounded-xl p-6 mb-8 max-w-sm mx-auto bg-slate-50 border-slate-300">
<p className="text-xs uppercase tracking-widest text-slate-500 mb-1">Approved Limit</p>
<p className="text-4xl font-display font-bold mb-4 text-blue-600" id="offer-amt">₹3,50,000</p>
<div className="flex justify-between text-sm border-t pt-3 border-slate-200">
<span className="text-slate-500">Interest: <span className="font-semibold text-slate-900">11.99%</span></span>
<span className="text-slate-500">Tenure: <span className="font-semibold text-slate-900">60 Mo</span></span>
</div>
</div>
<button className="w-full md:w-auto px-8 py-4 font-bold rounded-xl transition bg-blue-600 hover:bg-blue-700 text-white">Complete KYC &amp; Get Money</button>
<p className="text-xs mt-4 text-slate-400">Offer valid for 48 hours.</p>
</div>
</form>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50">
<div className="max-w-3xl mx-auto px-4">
<h2 className="text-3xl font-display font-bold text-center mb-12 text-slate-900">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group rounded-xl shadow-sm border [&amp;_summary::-webkit-details-marker]:hidden bg-white border-slate-100">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 font-semibold text-slate-900">
<span>Is my data safe with moneyloan?</span>
<span className="shrink-0 sm:p-3 group-open:bg-blue-50 group-open:text-blue-600 rounded-full pt-1.5 pr-1.5 pb-1.5 pl-1.5 text-slate-900 bg-white">
<svg aria-hidden="true" data-icon="lucide:chevron-down" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</summary>
<div className="p-6 pt-0 leading-relaxed text-sm text-slate-600">
                        Yes, we use 256-bit SSL encryption to protect your data. We are ISO 27001 certified and only work with RBI-registered NBFCs. Your privacy is our top priority.
                    </div>
</details>
<details className="group rounded-xl shadow-sm border [&amp;_summary::-webkit-details-marker]:hidden bg-white border-slate-100">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 font-semibold text-slate-900">
<span>What documents are required?</span>
<span className="shrink-0 rounded-full p-1.5 sm:p-3 group-open:bg-blue-50 group-open:text-blue-600 bg-white text-slate-900">
<svg aria-hidden="true" data-icon="lucide:chevron-down" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</summary>
<div className="p-6 pt-0 leading-relaxed text-sm text-slate-600">
                        Since our process is 100% digital, we only need your PAN Card, Aadhaar Card (linked to mobile), and Bank Statement (last 3 months) or Net Banking access for income verification.
                    </div>
</details>
<details className="group rounded-xl shadow-sm border [&amp;_summary::-webkit-details-marker]:hidden bg-white border-slate-100">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 font-semibold text-slate-900">
<span>How long does disbursement take?</span>
<span className="shrink-0 rounded-full p-1.5 sm:p-3 group-open:bg-blue-50 group-open:text-blue-600 bg-white text-slate-900">
<svg aria-hidden="true" data-icon="lucide:chevron-down" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</summary>
<div className="p-6 pt-0 leading-relaxed text-sm text-slate-600">
                        Once your KYC is approved and the agreement is e-signed, the loan amount is typically credited to your bank account within 10 to 30 minutes.
                    </div>
</details>
</div>
</div>
</section>

<footer className="border-t pt-16 pb-8 bg-white border-slate-200" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<span className="font-display font-bold text-xl tracking-tight text-slate-900">moneyloan<span className="text-blue-600">.com</span></span>
<p className="text-sm text-slate-500 mt-4 leading-relaxed">
                        Making credit accessible to millions of Indians. Responsible lending through technology.
                    </p>
<div className="flex gap-4 mt-6">
<a className="text-slate-400 hover:text-blue-600" href="#"><svg aria-hidden="true" data-icon="lucide:facebook" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></a>
<a className="text-slate-400 hover:text-blue-600" href="#"><svg aria-hidden="true" data-icon="lucide:twitter" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></a>
<a className="text-slate-400 hover:text-blue-600" href="#"><svg aria-hidden="true" data-icon="lucide:instagram" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg></a>
<a className="text-slate-400 hover:text-blue-600" href="#"><svg aria-hidden="true" data-icon="lucide:linkedin" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></g></svg></a>
</div>
</div>
<div>
<h4 className="font-bold mb-4 text-slate-900">Company</h4>
<ul className="space-y-2 text-sm text-slate-600">
<li><a className="hover:text-blue-600" href="#about">About Us</a></li>
<li><a className="hover:text-blue-600" href="#">Careers</a></li>
</ul>
</div>
<div>
<h4 className="font-bold mb-4 text-slate-900">Support</h4>
<ul className="space-y-2 text-sm text-slate-600">
<li><a className="hover:text-blue-600" href="#">Help Center</a></li>
<li><a className="hover:text-blue-600" href="#">Loan Agreement</a></li>
</ul>
</div>
<div>
<h4 className="font-bold mb-4 text-slate-900">Contact</h4>
<ul className="space-y-3 text-sm text-slate-600">
<li className="flex items-center gap-2"><svg aria-hidden="true" data-icon="lucide:phone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> 1800-123-9999</li>
<li className="flex items-center gap-2"><svg aria-hidden="true" data-icon="lucide:mail" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg> help@moneyloan.com</li>
</ul>
</div>
</div>
<div className="border-t pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-xs border-slate-100 text-slate-400">
<p>© 2023 MoneyLoan Fintech Pvt Ltd. All rights reserved.</p>
<p className="mt-2 md:mt-0">APR: 10.99% - 36%. Loans available in select cities.</p>
</div>
</div>
</footer>

<button className="fixed bottom-6 right-6 p-4 rounded-full shadow-2xl transition z-50 flex items-center gap-2 group bg-blue-600 text-white hover:bg-blue-700">
<svg aria-hidden="true" data-icon="lucide:message-circle" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092a10 10 0 1 0-4.777-4.719" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap">Chat with us</span>
</button>



    </>
  );
}
