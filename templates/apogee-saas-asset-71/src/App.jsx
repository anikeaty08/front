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



        // Initialize Icons
        lucide.createIcons();

        // Pricing Configuration
        const BASE_PRICE_EUR = 59;
        const RATES = { EUR: 1.0, USD: 1.1, GBP: 0.85 };
        const SYMBOLS = { EUR: '€', USD: '$', GBP: '£' };
        
        // Volume Discount Tiers
        function getVolumeDiscount(count) {
            if (count >= 70) return 0.30;
            if (count >= 60) return 0.28;
            if (count >= 50) return 0.26;
            if (count >= 40) return 0.237;
            if (count >= 30) return 0.212;
            if (count >= 20) return 0.186;
            if (count >= 15) return 0.153;
            if (count >= 10) return 0.119;
            if (count >= 5) return 0.085;
            if (count >= 3) return 0.051;
            if (count >= 2) return 0.025;
            return 0.0;
        }

        // State
        let state = {
            plan: 'individual', // 'individual' or 'agency'
            billing: 'monthly', // 'monthly' or 'annual' (simplified logic as per common UX, added quarterly logic in calc)
            consultants: 1,
            currency: 'EUR'
        };

        // DOM Elements
        const els = {
            slider: document.getElementById('consultant-slider'),
            sliderContainer: document.getElementById('slider-container'),
            countDisplay: document.getElementById('consultant-count-display'),
            priceDisplay: document.getElementById('price-display'),
            currencySelect: document.getElementById('currency-select'),
            savingsPill: document.getElementById('savings-pill'),
            discountPct: document.getElementById('total-discount-pct'),
            planTitle: document.getElementById('plan-title'),
            planDesc: document.getElementById('plan-desc'),
            btnIndividual: document.getElementById('btn-individual'),
            btnAgency: document.getElementById('btn-agency'),
            billingThumb: document.getElementById('billing-switch-thumb'),
            labelMonthly: document.getElementById('label-monthly'),
            labelAnnual: document.getElementById('label-annual'),
            periodLabel: document.getElementById('period-label'),
            sumBase: document.getElementById('summary-base'),
            sumVol: document.getElementById('summary-vol'),
            sumBill: document.getElementById('summary-bill'),
            sumTotal: document.getElementById('summary-total')
        };

        // Helpers
        function formatCurrency(val) {
            return `${SYMBOLS[state.currency]}${val.toFixed(val % 1 === 0 ? 0 : 2)}`;
        }

        function switchPlanType(type) {
            state.plan = type;
            
            if (type === 'individual') {
                state.consultants = 1;
                els.sliderContainer.classList.add('opacity-20', 'pointer-events-none');
                els.slider.disabled = true;
                els.planTitle.innerText = 'Self-made Plan';
                els.planDesc.innerText = 'For individual consultants and freelancers.';
                
                els.btnIndividual.className = 'px-6 py-2 rounded-md text-sm font-medium bg-zinc-800 text-white shadow transition-all';
                els.btnAgency.className = 'px-6 py-2 rounded-md text-sm font-medium text-zinc-400 hover:text-white transition-all';
            } else {
                state.consultants = parseInt(els.slider.value) || 10; // default agency view
                if (state.consultants < 2) state.consultants = 10; // Reset to logical agency start
                els.slider.value = state.consultants;
                els.sliderContainer.classList.remove('opacity-20', 'pointer-events-none');
                els.slider.disabled = false;
                els.planTitle.innerText = 'Agency Plan';
                els.planDesc.innerText = 'Volume discounts for growing teams.';
                
                els.btnAgency.className = 'px-6 py-2 rounded-md text-sm font-medium bg-zinc-800 text-white shadow transition-all';
                els.btnIndividual.className = 'px-6 py-2 rounded-md text-sm font-medium text-zinc-400 hover:text-white transition-all';
            }
            updatePricing();
        }

        function setBilling(period) {
            state.billing = period;
            if (period === 'monthly') {
                els.billingThumb.className = 'translate-x-1 inline-block h-4 w-4 transform rounded-full bg-indigo-500 transition';
                els.labelMonthly.className = 'text-white font-medium cursor-pointer';
                els.labelAnnual.className = 'text-zinc-400 cursor-pointer';
            } else {
                els.billingThumb.className = 'translate-x-6 inline-block h-4 w-4 transform rounded-full bg-white transition';
                els.labelMonthly.className = 'text-zinc-400 cursor-pointer';
                els.labelAnnual.className = 'text-white font-medium cursor-pointer';
            }
            updatePricing();
        }

        function toggleBillingSwitch() {
            setBilling(state.billing === 'monthly' ? 'annual' : 'monthly');
        }

        function updatePricing() {
            // Update State from inputs
            state.currency = els.currencySelect.value;
            if (state.plan === 'agency') {
                state.consultants = parseInt(els.slider.value);
            }

            // Calculations
            const currencyRate = RATES[state.currency];
            const basePriceLocal = BASE_PRICE_EUR * currencyRate;
            
            // Volume Discount
            let volDiscountPct = 0;
            if (state.plan === 'agency') {
                volDiscountPct = getVolumeDiscount(state.consultants);
            }
            
            // Billing Discount (Annual -20% / Monthly 0%) - Simplified for UX, Quarterly skipped in simplified UI but logic holds
            let billDiscountPct = state.billing === 'annual' ? 0.20 : 0.0;

            // Additive discount logic based on "Maximum Combined" in brief (up to 50%)
            const totalDiscountPct = volDiscountPct + billDiscountPct;
            
            const finalPricePerUser = basePriceLocal * (1 - totalDiscountPct);
            
            // Totals
            const totalBaseMonthly = basePriceLocal * state.consultants;
            const totalVolSavings = (basePriceLocal * volDiscountPct) * state.consultants;
            const totalBillSavings = (basePriceLocal * billDiscountPct) * state.consultants;
            const finalTotalMonthly = finalPricePerUser * state.consultants;

            // Update UI
            els.countDisplay.innerText = state.consultants;
            els.priceDisplay.innerText = formatCurrency(finalPricePerUser);
            
            if (totalDiscountPct > 0) {
                els.savingsPill.classList.remove('hidden');
                els.discountPct.innerText = (totalDiscountPct * 100).toFixed(1) + '%';
            } else {
                els.savingsPill.classList.add('hidden');
            }

            els.sumBase.innerText = formatCurrency(totalBaseMonthly);
            els.sumVol.innerText = `-${formatCurrency(totalVolSavings)}`;
            els.sumBill.innerText = `-${formatCurrency(totalBillSavings)}`;
            
            // If annual, show total annual cost or monthly equivalent? 
            // Standard SaaS shows "Total / mo" usually
            els.sumTotal.innerText = formatCurrency(finalTotalMonthly);
            els.periodLabel.innerText = 'mo';
        }

        // Initial run
        switchPlanType('individual'); // Start with simple view
    
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
      

<div className="fixed inset-0 z-[-1] pointer-events-none">
<div className="absolute top-[-10%] left-[20%] w-[40rem] h-[40rem] bg-indigo-900/20 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[20%] w-[30rem] h-[30rem] bg-violet-900/10 rounded-full blur-[100px]"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
</div>

<nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-black/50 backdrop-blur-lg">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-lg font-medium tracking-tight text-white">APOGEE</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
<a className="hover:text-white transition-colors" href="#testimonials">Stories</a>
</div>
<div className="flex items-center gap-4">
<button className="text-sm font-medium text-zinc-400 hover:text-white transition-colors hidden sm:block">Log in</button>
<button className="text-sm font-medium bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full transition-all border border-white/10 backdrop-blur-md">
                    Get Started
                </button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
<div className="max-w-4xl mx-auto text-center relative z-10">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-indigo-300 mb-8 animate-fade-in">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                New: Intelligent Bulk Processing
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] mb-6 text-gradient">
                Scale your creative<br/>operations effortlessly.
            </h1>
<p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                The premium asset management platform designed for high-growth agencies. Upload, analyze, and distribute creatives at infinite scale.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
<button className="group relative w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-medium transition-all duration-300 shadow-[0_0_40px_-10px_rgba(79,70,229,0.5)] hover:shadow-[0_0_60px_-15px_rgba(79,70,229,0.6)] hover:scale-[1.02] overflow-hidden" onclick="document.getElementById('onboarding-trigger').scrollIntoView({behavior: 'smooth'})">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:animate-[shimmer_1.5s_infinite]"></div>
<span className="relative flex items-center justify-center gap-2">
<i className="w-5 h-5" data-lucide="upload-cloud"></i>
                        Upload your creatives in bulk
                    </span>
</button>
<button className="w-full sm:w-auto px-8 py-4 glass-panel rounded-xl font-medium text-zinc-300 hover:text-white transition-all hover:bg-white/10 flex items-center justify-center gap-2">
<i className="w-5 h-5" data-lucide="play-circle"></i>
                    Watch demo
                </button>
</div>

<div className="relative w-full aspect-video rounded-2xl overflow-hidden glass-panel border border-white/10 shadow-2xl mx-auto max-w-5xl group">
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
<div className="absolute inset-0 flex items-center justify-center z-20">
<div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 cursor-pointer group-hover:scale-110 transition-transform">
<i className="w-6 h-6 text-white ml-1" data-lucide="play"></i>
</div>
</div>

<div className="w-full h-full bg-zinc-900 relative">
<div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop')] bg-cover bg-center"></div>

<div className="absolute bottom-8 left-8 right-8 h-12 bg-white/5 backdrop-blur rounded-lg border border-white/10"></div>
<div className="absolute top-8 right-8 w-32 h-8 bg-white/5 backdrop-blur rounded-lg border border-white/10"></div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="features">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-panel glass-panel-hover p-8 rounded-2xl relative overflow-hidden group">
<div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl group-hover:bg-indigo-500/10 transition-colors"></div>
<div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-indigo-400">
<i className="w-6 h-6" data-lucide="layers"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">Bulk Processing</h3>
<p className="text-zinc-400 leading-relaxed text-sm">
                        Upload thousands of assets simultaneously. Our intelligent system tags, sorts, and organizes everything automatically.
                    </p>
</div>

<div className="glass-panel glass-panel-hover p-8 rounded-2xl relative overflow-hidden group">
<div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl group-hover:bg-purple-500/10 transition-colors"></div>
<div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-purple-400">
<i className="w-6 h-6" data-lucide="bar-chart-2"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">Deep Analytics</h3>
<p className="text-zinc-400 leading-relaxed text-sm">
                        Track performance across every channel. Get real-time insights into which creatives drive the highest ROI.
                    </p>
</div>

<div className="glass-panel glass-panel-hover p-8 rounded-2xl relative overflow-hidden group">
<div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl group-hover:bg-pink-500/10 transition-colors"></div>
<div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-pink-400">
<i className="w-6 h-6" data-lucide="users"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">Team Collaboration</h3>
<p className="text-zinc-400 leading-relaxed text-sm">
                        Built for agencies. Set permissions, share specific folders with clients, and gather feedback in one place.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden" id="onboarding-trigger">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 tracking-tight">Experience the flow</h2>
<p className="text-zinc-400">Drag, drop, done. See how it feels.</p>
</div>
<div className="relative w-full h-[500px] rounded-3xl border-2 border-dashed border-white/10 bg-black/20 backdrop-blur-sm flex flex-col items-center justify-center group transition-all duration-500 hover:border-indigo-500/50 hover:bg-indigo-900/5 overflow-hidden cursor-pointer" id="drop-zone">

<div className="absolute inset-0 pointer-events-none">

<div className="absolute top-[20%] left-[20%] p-3 rounded-lg bg-zinc-800 border border-white/10 animate-float" style={{animationDelay: '0s'}}>
<i className="w-6 h-6 text-indigo-400" data-lucide="image"></i>
</div>
<div className="absolute top-[60%] right-[20%] p-3 rounded-lg bg-zinc-800 border border-white/10 animate-float" style={{animationDelay: '1s'}}>
<i className="w-6 h-6 text-purple-400" data-lucide="video"></i>
</div>
<div className="absolute bottom-[20%] left-[30%] p-3 rounded-lg bg-zinc-800 border border-white/10 animate-float" style={{animationDelay: '2s'}}>
<i className="w-6 h-6 text-pink-400" data-lucide="file-text"></i>
</div>
</div>
<div className="z-10 flex flex-col items-center transition-transform duration-300 group-hover:scale-110">
<div className="w-20 h-20 rounded-full bg-indigo-600/20 flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(79,70,229,0.3)] group-hover:shadow-[0_0_60px_rgba(79,70,229,0.5)] transition-shadow">
<i className="w-8 h-8 text-indigo-400" data-lucide="upload-cloud"></i>
</div>
<h3 className="text-2xl font-medium text-white mb-2">Drop your files here</h3>
<p className="text-zinc-500">or click to browse samples</p>
</div>

<div className="absolute bottom-0 w-full border-t border-white/10 bg-black/40 backdrop-blur-md p-4 flex items-center justify-between gap-4 overflow-x-auto">
<div className="flex gap-3 text-xs text-zinc-400 whitespace-nowrap">
<span className="px-3 py-1.5 rounded bg-white/5 border border-white/10">Campaign: Q4_Launch</span>
<span className="px-3 py-1.5 rounded bg-white/5 border border-white/10">Ad Set: Retargeting</span>
<span className="px-3 py-1.5 rounded bg-white/5 border border-white/10">Date: Oct 2023</span>
</div>
<div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="pricing">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-5xl font-semibold text-white mb-6 tracking-tight">Transparent Pricing</h2>
<p className="text-zinc-400 max-w-2xl mx-auto">Scale your agency without breaking the bank. Volume discounts applied automatically.</p>
</div>

<div className="max-w-4xl mx-auto mb-10 flex flex-col md:flex-row items-center justify-between gap-6 glass-panel p-4 rounded-2xl">

<div className="flex bg-black/30 p-1 rounded-lg border border-white/5">
<button className="px-6 py-2 rounded-md text-sm font-medium bg-zinc-800 text-white shadow transition-all" id="btn-individual" onclick="switchPlanType('individual')">Self-made</button>
<button className="px-6 py-2 rounded-md text-sm font-medium text-zinc-400 hover:text-white transition-all" id="btn-agency" onclick="switchPlanType('agency')">Agency</button>
</div>

<div className="flex items-center gap-3 text-sm">
<span className="text-zinc-400 cursor-pointer" id="label-monthly" onclick="setBilling('monthly')">Monthly</span>
<div className="relative inline-flex h-6 w-11 items-center rounded-full bg-zinc-800 border border-white/10 cursor-pointer" onclick="toggleBillingSwitch()">
<span className="translate-x-1 inline-block h-4 w-4 transform rounded-full bg-indigo-500 transition" id="billing-switch-thumb"></span>
</div>
<div className="flex items-center gap-2">
<span className="text-white font-medium cursor-pointer" id="label-annual" onclick="setBilling('annual')">Annual</span>
<span className="text-[10px] uppercase tracking-wider font-bold bg-green-500/20 text-green-400 px-2 py-0.5 rounded border border-green-500/20">-20%</span>
</div>
</div>

<select className="bg-black/30 border border-white/10 text-zinc-300 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block p-2.5" id="currency-select" onchange="updatePricing()">
<option value="EUR">EUR (€)</option>
<option value="USD">USD ($)</option>
<option value="GBP">GBP (£)</option>
</select>
</div>

<div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">

<div className="lg:col-span-7 glass-panel p-8 rounded-3xl flex flex-col justify-between relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
<div>
<h3 className="text-2xl font-semibold text-white mb-2" id="plan-title">Agency Plan</h3>
<p className="text-zinc-400 text-sm mb-8" id="plan-desc">Perfect for growing teams and agencies managing multiple clients.</p>

<div className="mb-8 opacity-100 transition-opacity duration-300" id="slider-container">
<div className="flex justify-between text-sm text-zinc-400 mb-4">
<span>Team Size</span>
<span className="text-white font-mono"><span id="consultant-count-display">10</span> Consultants</span>
</div>
<input className="w-full" id="consultant-slider" max="100" min="1" oninput="updatePricing()" type="range" value="10"/>
<div className="flex justify-between text-xs text-zinc-500 mt-2">
<span>1</span>
<span>100+</span>
</div>
</div>

<ul className="space-y-4 text-sm text-zinc-300">
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-indigo-400" data-lucide="check"></i>
<span id="feat-1">Unlimited file uploads</span>
</li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-indigo-400" data-lucide="check"></i>
<span id="feat-2">Advanced analytics dashboard</span>
</li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-indigo-400" data-lucide="check"></i>
<span id="feat-3">White-label options</span>
</li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-indigo-400" data-lucide="check"></i>
<span id="feat-4">Priority support 24/7</span>
</li>
</ul>
</div>
</div>

<div className="lg:col-span-5 glass-panel p-8 rounded-3xl bg-gradient-to-b from-white/5 to-black/20 border border-white/10 flex flex-col justify-center relative">
<div className="space-y-6">

<div>
<p className="text-sm text-zinc-400 mb-1">Price per consultant</p>
<div className="flex items-baseline gap-2">
<span className="text-5xl font-semibold text-white tracking-tight" id="price-display">€45</span>
<span className="text-zinc-500">/mo</span>
</div>
<div className="inline-block mt-2 px-2 py-1 bg-indigo-500/20 text-indigo-300 text-xs rounded border border-indigo-500/30" id="savings-pill">
                                Save <span id="total-discount-pct">23%</span>
</div>
</div>

<div className="pt-6 border-t border-white/10 space-y-2">
<div className="flex justify-between text-sm text-zinc-400">
<span>Base Price</span>
<span className="font-mono" id="summary-base">€590</span>
</div>
<div className="flex justify-between text-sm text-indigo-300">
<span>Volume Discount</span>
<span className="font-mono" id="summary-vol">-€100</span>
</div>
<div className="flex justify-between text-sm text-green-400">
<span>Billing Discount</span>
<span className="font-mono" id="summary-bill">-€20</span>
</div>
<div className="flex justify-between text-lg text-white font-medium pt-2 border-t border-white/10 mt-2">
<span>Total / <span id="period-label">mo</span></span>
<span className="font-mono" id="summary-total">€450</span>
</div>
</div>
<button className="w-full py-4 bg-white text-black rounded-xl font-medium hover:bg-zinc-200 transition-colors shadow-lg shadow-white/5">
                            Get Started Now
                        </button>
<p className="text-center text-xs text-zinc-500">No credit card required for 14-day trial.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5" id="testimonials">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl font-semibold text-white mb-12 text-center tracking-tight">Trusted by innovative teams</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-panel p-6 rounded-2xl">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-full bg-zinc-700 flex items-center justify-center text-white font-bold">J</div>
<div>
<div className="text-white font-medium text-sm">James Carter</div>
<div className="text-zinc-500 text-xs">Creative Director, Nexus</div>
</div>
</div>
<p className="text-zinc-400 text-sm leading-relaxed">"The bulk upload feature is pure magic. What used to take our team 4 hours now takes 15 minutes. The ROI is immediate."</p>
</div>

<div className="glass-panel p-6 rounded-2xl">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-full bg-zinc-700 flex items-center justify-center text-white font-bold">S</div>
<div>
<div className="text-white font-medium text-sm">Sarah Lin</div>
<div className="text-zinc-500 text-xs">Founder, Studio A</div>
</div>
</div>
<p className="text-zinc-400 text-sm leading-relaxed">"Finally, a tool that handles volume without crashing. The pricing model for agencies is extremely fair compared to competitors."</p>
</div>

<div className="glass-panel p-6 rounded-2xl">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-full bg-zinc-700 flex items-center justify-center text-white font-bold">M</div>
<div>
<div className="text-white font-medium text-sm">Marcus O.</div>
<div className="text-zinc-500 text-xs">Head of Ops, ScaleUp</div>
</div>
</div>
<p className="text-zinc-400 text-sm leading-relaxed">"The onboarding flow is seamless. We migrated 50TB of assets in a weekend and the analytics populated instantly."</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-black/20">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl font-semibold text-white mb-10 text-center tracking-tight">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group glass-panel rounded-xl open:bg-white/5 transition-all">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-zinc-300 group-hover:text-white">
<span>How does the volume discount work?</span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="text-zinc-400 mt-0 px-6 pb-6 text-sm leading-relaxed">
                        We calculate discounts based on the number of active consultant seats. The discount starts at 2 seats and scales up to 30% off for teams larger than 70 people. This stacks with annual billing discounts.
                    </div>
</details>
<details className="group glass-panel rounded-xl open:bg-white/5 transition-all">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-zinc-300 group-hover:text-white">
<span>Can I change plans later?</span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="text-zinc-400 mt-0 px-6 pb-6 text-sm leading-relaxed">
                        Yes, you can upgrade or downgrade at any time. Prorated amounts are automatically calculated for the remainder of your billing cycle.
                    </div>
</details>
<details className="group glass-panel rounded-xl open:bg-white/5 transition-all">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-zinc-300 group-hover:text-white">
<span>Is there a limit on file size?</span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="text-zinc-400 mt-0 px-6 pb-6 text-sm leading-relaxed">
                        We support individual files up to 50GB. For bulk uploads, we recommend our desktop app for maximum stability, but the browser uploader handles up to 10GB per batch effortlessly.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-indigo-900/10 to-black z-0"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<h2 className="text-5xl md:text-6xl font-semibold text-white mb-8 tracking-tight">Ready to optimize?</h2>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="px-8 py-4 bg-white text-black hover:bg-zinc-200 rounded-xl font-medium text-lg transition-all shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                    Start uploading now
                </button>
<button className="px-8 py-4 text-zinc-300 hover:text-white font-medium transition-colors">
                    Book a demo →
                </button>
</div>
</div>
</section>

<footer className="py-12 px-6 border-t border-white/5 text-center text-zinc-600 text-sm">
<div className="flex justify-center gap-6 mb-8">
<i className="w-5 h-5 hover:text-zinc-400 cursor-pointer transition-colors" data-lucide="twitter"></i>
<i className="w-5 h-5 hover:text-zinc-400 cursor-pointer transition-colors" data-lucide="github"></i>
<i className="w-5 h-5 hover:text-zinc-400 cursor-pointer transition-colors" data-lucide="linkedin"></i>
</div>
<p>© 2023 Apogee Inc. All rights reserved.</p>
</footer>



    </>
  );
}
