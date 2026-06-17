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



                (function() {
                    // Set the launch date: 30 days from now
                    const launchDate = new Date();
                    launchDate.setDate(launchDate.getDate() + 30);
                    launchDate.setHours(0, 0, 0, 0); // optional: set to midnight

                    function updateCountdown() {
                        const now = new Date().getTime();
                        const distance = launchDate - now;

                        if (distance < 0) {
                            document.getElementById('days').innerText = '00';
                            document.getElementById('hours').innerText = '00';
                            document.getElementById('minutes').innerText = '00';
                            document.getElementById('seconds').innerText = '00';
                            return;
                        }

                        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                        document.getElementById('days').innerText = days.toString().padStart(2, '0');
                        document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
                        document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
                        document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');
                    }

                    // Update immediately and then every second
                    updateCountdown();
                    setInterval(updateCountdown, 1000);
                })();
            


                async function handleWaitlistSubmit() {
                const nameInput  = document.getElementById('waitlist-name');
                const emailInput = document.getElementById('waitlist-email');
                const errorEl    = document.getElementById('waitlist-error');
                const submitBtn  = document.getElementById('waitlist-submit-btn');
                const btnText    = document.getElementById('waitlist-btn-text');
                const spinner    = document.getElementById('waitlist-spinner');

                const name  = nameInput.value.trim();
                const email = emailInput.value.trim();

                // Validation
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!name || !emailRegex.test(email)) {
                    errorEl.classList.remove('hidden');
                    return;
                }
                errorEl.classList.add('hidden');

                // Loading state
                submitBtn.disabled = true;
                btnText.textContent = 'Joining...';
                spinner.classList.remove('hidden');

                try {
                    const response = await fetch(
                        'https://api.sheetbest.com/sheets/a9db864c-7230-420c-9eb6-78a3e73efbb4',
                        {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                Name: name,
                                Email: email,
                                Timestamp: new Date().toLocaleString()
                            })
                        }
                    );

                    if (!response.ok) throw new Error('API error: ' + response.status);

                    // Show success
                    document.getElementById('waitlist-form-container').classList.add('hidden');
                    const successEl = document.getElementById('waitlist-success');
                    successEl.classList.remove('hidden');
                    successEl.classList.add('flex');

                } catch (err) {
                    console.error('Waitlist submission failed:', err);
                    btnText.textContent = 'Something went wrong. Try again.';
                    spinner.classList.add('hidden');
                    submitBtn.disabled = false;
                    submitBtn.classList.add('bg-red-600');
                    submitBtn.classList.remove('bg-green-600');
                    setTimeout(() => {
                        btnText.textContent = 'Join the Waitlist';
                        submitBtn.classList.remove('bg-red-600');
                        submitBtn.classList.add('bg-green-600');
                    }, 3000);
                }
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
      

<nav className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white">
<iconify-icon className="text-xl" icon="solar:leaf-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
<span className="text-xl font-medium tracking-tight">ProGulp</span>
</div>
<a className="px-5 py-2 text-sm font-medium text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-colors shadow-sm" href="#waitlist">
                Join Waitlist
            </a>
</div>
</nav>

<section className="md:pt-40 md:pb-24 flex flex-col text-center max-w-7xl mr-auto ml-auto pt-32 pr-6 pb-16 pl-6 items-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-100 text-green-700 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
            Launching in 30 Days
        </div>
<h1 className="md:text-7xl leading-tight text-5xl font-medium text-gray-900 tracking-tight max-w-4xl mb-6">30g Plant
            Protein. <br className="hidden md:block"/> Zero Added Sugar. <br className="hidden md:block"/> Ready to Drink.</h1>
<p className="text-lg md:text-xl text-gray-500 max-w-2xl mb-10 font-normal">
            Meet ProGulp, a clean plant-based protein drink made from soy, almond, and pea protein, designed for people
            who want
            convenient, healthy post-workout nutrition.
        </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
<a className="w-full sm:w-auto px-8 py-3.5 text-base font-medium text-white bg-green-600 rounded-full hover:bg-green-700 transition-colors shadow-sm flex items-center justify-center gap-2" href="#waitlist">
                Join Early Access
                <iconify-icon className="text-lg" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 text-base font-medium text-gray-700 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-colors shadow-sm" href="#waitlist">
                Get 20% Launch Discount
            </a>
</div>

<div className="w-full max-w-5xl aspect-video rounded-3xl overflow-hidden relative shadow-2xl shadow-gray-200/50 bg-gray-900 group">

<img alt="Fitness workout" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000 ease-in-out" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>

<div className="flex text-center pt-6 pr-6 pb-6 pl-6 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white absolute video-text-1">30g Plant
                    Protein
                </h2>
<h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white absolute video-text-2 opacity-0">
                    Zero Added
                    Sugar</h2>
<h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white absolute video-text-3 opacity-0">
                    Ready to
                    Drink
                </h2>
<h2 className="md:text-6xl video-text-4 text-4xl font-medium text-white tracking-tight opacity-0 absolute">
                    Plant-Based
                    Nutrition</h2>
</div>

<div className="absolute bottom-6 left-6 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white">
<iconify-icon className="text-xl translate-x-[1px]" height="20" icon="solar:play-linear" style={{strokeWidth: '1.5px', color: 'rgb(255, 255, 255)'}} width="20"></iconify-icon>
</div>
<span className="text-sm font-medium text-white tracking-wide uppercase">Watch Teaser</span>
</div>
</div>
</section>

<div className="absolute bottom-6 left-6 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white">
<iconify-icon className="text-xl translate-x-[1px]" height="20" icon="solar:play-linear" style={{strokeWidth: '1.5px', color: 'rgb(255, 255, 255)'}} width="20"></iconify-icon>
</div>
<span className="text-sm font-medium text-white tracking-wide uppercase">Watch Teaser</span>
</div>

<section className="py-24 bg-white border-y border-gray-100">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">

<div className="space-y-8">
<div className="">
<span className="text-sm font-medium text-gray-400 tracking-wider uppercase mb-2 block">The Problem</span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-900 mb-4">Why Most Protein
                        Drinks Aren't Ideal</h2>
</div>
<ul className="space-y-5">
<li className="flex items-start gap-3">
<iconify-icon className="text-2xl text-red-400 shrink-0" icon="solar:close-circle-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<p className="text-gray-600 text-base">Many protein drinks contain hidden sugar and artificial
                            sweeteners.</p>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-2xl text-red-400 shrink-0" icon="solar:close-circle-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<p className="text-gray-600 text-base">Dairy protein (whey) causes bloating and discomfort for
                            lactose-intolerant people.</p>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-2xl text-red-400 shrink-0" icon="solar:close-circle-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<p className="text-gray-600 text-base">Traditional protein powders require mixing, shaking, and
                            messy preparation.</p>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-2xl text-red-400 shrink-0" icon="solar:close-circle-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<p className="text-gray-600 text-base">Many products are loaded with artificial fillers and
                            preservatives.</p>
</li>
</ul>
</div>

<div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm relative overflow-hidden">
<div className="absolute -right-12 -top-12 w-48 h-48 bg-green-100 rounded-full blur-3xl opacity-50 pointer-events-none">
</div>
<span className="text-sm font-medium text-green-600 tracking-wider uppercase mb-2 block relative z-10">The Solution</span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-900 mb-6 relative z-10">Introducing
                    ProGulp</h2>
<p className="text-lg text-gray-600 leading-relaxed relative z-10">
                    ProGulp is a ready-to-drink vegan protein shake delivering
                    <span className="font-medium text-gray-900">30g of plant protein</span> per bottle. Designed for people
                    who want clean, convenient nutrition without sugar, dairy, or complicated preparation.
                </p>
<div className="mt-8 pt-8 border-t border-gray-200/60 relative z-10">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm text-green-600">
<iconify-icon className="text-2xl" icon="solar:shield-check-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-gray-900">100% Clean Formula</p>
<p className="text-sm text-gray-500">Zero compromises.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#fafafa]">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-xl bg-green-50 text-green-600 flex items-center justify-center mb-5">
<iconify-icon className="text-xl" icon="solar:bolt-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-gray-900 mb-2">High Protein</h3>
<p className="text-sm text-gray-500">30g of high-quality plant protein packed into every single bottle.
                    </p>
</div>
<div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-xl bg-green-50 text-green-600 flex items-center justify-center mb-5">
<iconify-icon className="text-xl" icon="solar:leaf-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-gray-900 mb-2">Lactose Free</h3>
<p className="text-sm text-gray-500">100% dairy-free formula means zero digestion issues or bloating.
                    </p>
</div>
<div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-xl bg-green-50 text-green-600 flex items-center justify-center mb-5">
<iconify-icon className="text-xl" icon="solar:bottle-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-gray-900 mb-2">Ready to Drink</h3>
<p className="text-sm text-gray-500">No shaker, no powder, no mixing required. Just open and drink.</p>
</div>
<div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-xl bg-green-50 text-green-600 flex items-center justify-center mb-5">
<iconify-icon className="text-xl" icon="solar:shield-check-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-gray-900 mb-2">Clean Ingredients</h3>
<p className="text-sm text-gray-500">No artificial fillers, no hidden sugars, just pure nutrition.</p>
</div>
</div>
</div>
</section>

<section className="border-y overflow-hidden bg-white border-gray-100 pt-24 pb-24">
<div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col items-center text-center">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-900 mb-4">Choose Your Flavor</h2>
<p className="text-gray-500 max-w-xl">Every 250ml tetra pack delivers 30g of clean plant protein from soy,
                almond, and pea.</p>
</div>

<div className="w-full pl-6 md:pl-0 md:max-w-7xl md:mx-auto">
<div className="flex overflow-x-auto snap-x snap-mandatory gap-8 pb-12 pr-6 md:justify-center no-scrollbar">

<div className="snap-center shrink-0 w-[280px] group relative">

<div className="w-full h-[400px] bg-gradient-to-b from-[#4E342E] to-[#261A17] rounded-xl relative shadow-lg shadow-[#4E342E]/20 flex flex-col items-center p-6 text-white border border-[#5D4037] overflow-hidden transition-transform duration-300 group-hover:-translate-y-2">

<div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-4 bg-green-600 rounded-t-lg shadow-inner z-10 border-b border-green-800">
</div>

<div className="absolute top-0 inset-x-0 h-12 border-b border-white/10 bg-white/5"></div>

<div className="absolute -right-8 -top-8 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
<div className="flex flex-col w-full h-full z-10 mt-4 relative items-center">
<span className="text-xs tracking-widest uppercase font-medium text-white/60 mb-8">Chocolate</span>
<h3 className="text-3xl font-medium tracking-tight mb-1">ProGulp</h3>
<p className="text-xs text-green-400 font-medium tracking-wide mb-auto">Plant Based</p>
<div className="w-full bg-white/10 rounded-lg p-4 backdrop-blur-sm border border-white/10 mb-4">
<div className="text-2xl font-medium text-white tracking-tight text-center mb-1">30g Protein
                                </div>
<div className="text-[10px] text-center text-white/70 uppercase tracking-wider">Zero Added
                                    Sugar</div>
</div>
<div className="text-[10px] text-white/50 text-center uppercase tracking-widest space-y-1">
<p className="">SoyA • Almond • Pea</p>
<p className="">250ml Ready to Drink</p>
</div>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-[280px] group relative">
<div className="w-full h-[400px] bg-gradient-to-b from-[#FDFBF7] to-[#EFEBE1] rounded-xl relative shadow-lg shadow-gray-200 flex flex-col items-center p-6 text-gray-900 border border-white overflow-hidden transition-transform duration-300 group-hover:-translate-y-2">

<div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-4 bg-green-600 rounded-t-lg shadow-inner z-10 border-b border-green-800">
</div>
<div className="absolute top-0 inset-x-0 h-12 border-b border-gray-900/5 bg-gray-900/5"></div>
<div className="flex flex-col w-full h-full z-10 mt-4 relative items-center">
<span className="text-xs tracking-widest uppercase font-medium text-gray-400 mb-8">Vanilla</span>
<h3 className="text-3xl font-medium tracking-tight mb-1">ProGulp</h3>
<p className="text-xs text-green-600 font-medium tracking-wide mb-auto">Plant Based</p>
<div className="w-full bg-gray-900/5 rounded-lg p-4 backdrop-blur-sm border border-gray-900/10 mb-4">
<div className="text-2xl font-medium text-gray-900 tracking-tight text-center mb-1">30g
                                    Protein</div>
<div className="text-[10px] text-center text-gray-500 uppercase tracking-wider">Zero Added
                                    Sugar</div>
</div>
<div className="text-[10px] text-gray-400 text-center uppercase tracking-widest space-y-1">
<p className="">SoyA • Almond • Pea</p>
<p className="">250ml Ready to Drink</p>
</div>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-[280px] group relative">
<div className="w-full h-[400px] bg-gradient-to-b from-[#3E2723] to-[#1B120F] rounded-xl relative shadow-lg shadow-[#3E2723]/20 flex flex-col items-center p-6 text-white border border-[#4E342E] overflow-hidden transition-transform duration-300 group-hover:-translate-y-2">

<div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-4 bg-green-600 rounded-t-lg shadow-inner z-10 border-b border-green-800">
</div>
<div className="absolute top-0 inset-x-0 h-12 border-b border-white/10 bg-white/5"></div>
<div className="relative z-10 flex flex-col items-center h-full w-full mt-4">
<span className="text-xs tracking-widest uppercase font-medium text-white/60 mb-8">Coffee</span>
<h3 className="text-3xl font-medium tracking-tight mb-1">ProGulp</h3>
<p className="text-xs text-green-400 font-medium tracking-wide mb-auto">Plant Based</p>
<div className="w-full bg-white/10 rounded-lg p-4 backdrop-blur-sm border border-white/10 mb-4">
<div className="text-2xl font-medium text-white tracking-tight text-center mb-1">30g Protein
                                </div>
<div className="text-[10px] text-center text-white/70 uppercase tracking-wider">Zero Added
                                    Sugar</div>
</div>
<div className="text-[10px] text-white/50 text-center uppercase tracking-widest space-y-1">
<p className="">SoyA • Almond • Pea</p>
<p className="">250ml Ready to Drink</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="text-center max-w-7xl mr-auto ml-auto pr-6 pl-6">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-900 mb-4">Simple, Transparent Pricing
            </h2>
<p className="text-gray-500 max-w-xl mx-auto mb-12">Choose the pack that fits your lifestyle. All flavors
                available.</p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">

<div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition flex flex-col h-full">
<h3 className="text-lg font-medium text-gray-900 mb-2">Single Bottle</h3>
<p className="text-4xl font-medium text-gray-900 mb-4">₹69</p>
<p className="text-sm text-gray-500 mb-6">Perfect for trying one flavor.</p>
<ul className="text-sm text-gray-600 space-y-2 mb-8 flex-1 text-left">
<li>✓ 250ml ready-to-drink</li>
<li>✓ 30g plant protein</li>
<li>✓ Zero added sugar</li>
</ul>
<a className="block w-full py-2.5 px-4 bg-green-600 text-white rounded-full hover:bg-green-700 transition text-center" href="#waitlist">Join
                        Waitlist</a>
</div>

<div className="bg-white rounded-2xl border-2 border-green-500 p-8 shadow-lg relative flex flex-col h-full">
<span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">Most Popular</span>
<h3 className="text-lg font-medium text-gray-900 mb-2">12-Pack</h3>
<p className="text-4xl font-medium text-gray-900 mb-4">779</p>
<p className="text-sm text-gray-500 mb-6">Just ₹64.91 per bottle.</p>
<ul className="text-sm text-gray-600 space-y-2 mb-8 flex-1 text-left">
<li className="">✓ 12 bottles, your choice of flavors</li>
<li className="">✓ Free shipping</li>
<li className="">✓ Best value</li>
</ul>
<a className="block w-full py-2.5 px-4 bg-green-600 text-white rounded-full hover:bg-green-700 transition text-center" href="#waitlist">Join
                        Waitlist</a>
</div>

<div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition flex flex-col h-full">
<h3 className="text-lg font-medium text-gray-900 mb-2">24-Pack</h3>
<p className="text-4xl font-medium text-gray-900 mb-4">₹1429</p>
<p className="text-sm text-gray-500 mb-6">Just ₹59.94 per bottle.</p>
<ul className="text-sm text-gray-600 space-y-2 mb-8 flex-1 text-left">
<li className="">✓ 24 bottles, mix &amp; match</li>
<li className="">✓ Free shipping</li>
<li className="">✓ Bulk savings</li>
</ul>
<a className="block w-full py-2.5 px-4 bg-green-600 text-white rounded-full hover:bg-green-700 transition text-center" href="#waitlist">Join
                        Waitlist</a>
</div>
</div>
<p className="text-sm text-gray-400 mt-8">*Launch pricing subject to change. Join the waitlist for early access
                discounts.</p>
</div>
</section>


<section className="overflow-hidden text-white bg-gray-900 pt-24 pb-24 relative" id="waitlist">

<div className="absolute inset-0 overflow-hidden pointer-events-none">
<div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] bg-green-900/30 rounded-full blur-[120px]">
</div>
<div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] bg-green-800/20 rounded-full blur-[100px]">
</div>
</div>
<div className="z-10 text-center max-w-4xl mr-auto ml-auto pr-6 pl-6 relative">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-4">Get Early Access to ProGulp</h2>
<p className="text-lg text-gray-400 mb-12">Join the waitlist to receive a 20% launch discount, early access to
                our first batch, and entry into our free sample draw.</p>

<div className="flex items-center justify-center gap-2 md:gap-4 mb-16" id="countdown-timer">
<div className="flex flex-col items-center">
<div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-2xl md:text-3xl font-medium tracking-tight border border-white/10 mb-2" id="days">29</div>
<span className="text-xs text-gray-400 uppercase tracking-widest">Days</span>
</div>
<div className="text-2xl text-gray-500 pb-6">:</div>
<div className="flex flex-col items-center">
<div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-2xl md:text-3xl font-medium tracking-tight border border-white/10 mb-2" id="hours">13</div>
<span className="text-xs text-gray-400 uppercase tracking-widest">Hours</span>
</div>
<div className="text-2xl text-gray-500 pb-6">:</div>
<div className="flex flex-col items-center">
<div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-2xl md:text-3xl font-medium tracking-tight border border-white/10 mb-2" id="minutes">17</div>
<span className="text-xs text-gray-400 uppercase tracking-widest">Mins</span>
</div>
<div className="text-2xl text-gray-500 pb-6">:</div>
<div className="flex flex-col items-center">
<div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-2xl md:text-3xl font-medium tracking-tight border border-white/10 mb-2" id="seconds">40</div>
<span className="text-xs text-gray-400 uppercase tracking-widest">Secs</span>
</div>
</div>


<div className="md:p-8 text-left bg-white/5 max-w-md border-white/10 border rounded-3xl mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 backdrop-blur-xl">

<div className="hidden flex-col items-center justify-center text-center py-8 gap-4" id="waitlist-success">
<div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mb-2">
<iconify-icon className="text-4xl text-green-400" icon="solar:check-circle-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white">You're on the list!</h3>
<p className="text-sm text-gray-400">We'll send your 20% launch discount and early access details to
                        your email.</p>
</div>

<div className="space-y-4" id="waitlist-form-container">
<div>
<label className="block text-sm font-medium text-gray-300 mb-1.5">Full Name</label>
<input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors" id="waitlist-name" placeholder="John Doe" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-300 mb-1.5">Email Address</label>
<input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors" id="waitlist-email" placeholder="john@example.com" type="email"/>
</div>

<p className="hidden text-xs text-red-400 pt-1" id="waitlist-error">Please fill in both your name and a
                        valid email address.</p>
<button className="hover:bg-green-500 transition-all shadow-green-900/20 font-medium text-white bg-green-600 w-full rounded-xl pt-3.5 pr-4 pb-3.5 pl-4 shadow-lg flex items-center justify-center gap-2 mt-2 disabled:opacity-60 disabled:cursor-not-allowed" id="waitlist-submit-btn" onclick="handleWaitlistSubmit()" type="button">
<span id="waitlist-btn-text">Join the Waitlist</span>
<svg className="hidden animate-spin h-4 w-4 text-white" fill="none" id="waitlist-spinner" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
<path className="opacity-75" d="M4 12a8 8 0 018-8v8H4z" fill="currentColor"></path>
</svg>
</button>
</div>
</div>

</div>
</section>



<section className="bg-[#fafafa] pt-24 pb-24">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

<div className="">
<h2 className="text-3xl font-medium tracking-tight text-gray-900 mb-8">Why This Matters</h2>
<div className="space-y-6">
<div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex gap-4">
<div className="mt-1 w-8 h-8 rounded-full bg-red-50 text-red-600 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:danger-circle-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
<div className="">
<h4 className="text-base font-medium text-gray-900 mb-1">70% Lactose Intolerance</h4>
<p className="text-sm text-gray-500">A vast majority of the population struggles to digest
                                dairy-based whey proteins, causing discomfort.</p>
</div>
</div>
<div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex gap-4">
<div className="mt-1 w-8 h-8 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:chart-square-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
<div className="">
<h4 className="text-base font-medium text-gray-900 mb-1">Common Protein Deficiency</h4>
<p className="text-sm text-gray-500">Dietary habits often lack sufficient protein intake, making
                                convenient supplementation crucial.</p>
</div>
</div>
<div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex gap-4">
<div className="mt-1 w-8 h-8 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:graph-up-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
<div className="">
<h4 className="text-base font-medium text-gray-900 mb-1">Rising Demand</h4>
<p className="text-sm text-gray-500">The ready-to-drink nutrition market is growing rapidly as
                                people seek healthier, on-the-go options.</p>
</div>
</div>
</div>
</div>

<div className="flex flex-col justify-center">
<span className="text-sm font-medium text-green-600 tracking-wider uppercase mb-2 block">Our Origin</span>
<h2 className="text-3xl font-medium tracking-tight text-gray-900 mb-6">Why We Built ProGulp</h2>
<div className="relative">
<iconify-icon className="absolute -top-6 -left-4 text-4xl text-gray-200" icon="solar:quote-left-bold" style={{strokeWidth: '1.5px'}}></iconify-icon>
<p className="text-lg text-gray-600 leading-relaxed mb-6 relative z-10">
                        "I constantly struggled to find convenient protein drinks that were clean and dairy-free.
                        Everything on the market either tasted artificial, was loaded with sugar, or caused severe
                        digestive issues due to lactose. Mixing powders at the gym or in the car was a mess."
                    </p>
<p className="leading-relaxed z-10 text-lg text-gray-600 relative">
                        "ProGulp was created to solve this. We wanted to deliver clean, plant-based protein in a
                        ready-to-drink format that actually tastes good and respects your body."
                    </p>
</div>
<div className="mt-8 flex items-center gap-4">
<div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
<img alt="Mrs. Prishita Girdhar" className="w-full h-full object-cover" src="https://i.ibb.co/N6rK0y6m/Screenshot-2026-03-13-193150.png"/>
</div>
<div className="">
<p className="text-sm font-medium text-gray-900">MS. PRISHITA GIRDHAR</p>
<p className="text-xs text-gray-500">Founder, ProGulp</p>
</div>
</div>
</div>
</div>
</section>

<section className="border-y bg-white border-gray-100 pt-24 pb-24">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl font-medium tracking-tight text-gray-900 mb-3">Help Us Perfect ProGulp</h2>
<p className="text-gray-500">Answer three quick questions to help us tailor our launch to your needs.</p>
</div>
<form className="space-y-10">

<div className="">
<label className="block text-base font-medium text-gray-900 mb-4">1. What is your biggest fitness goal?</label>
<div className="grid grid-cols-2 gap-4">
<label className="relative cursor-pointer">
<input className="sr-only peer" name="goal" type="radio"/>
<div className="w-full p-4 rounded-xl border border-gray-200 bg-white peer-checked:border-green-500 peer-checked:bg-green-50 peer-checked:ring-1 peer-checked:ring-green-500 transition-all text-center hover:bg-gray-50">
<span className="text-sm font-medium text-gray-900">Build Muscle</span>
</div>
</label>
<label className="relative cursor-pointer">
<input className="sr-only peer" name="goal" type="radio"/>
<div className="w-full p-4 rounded-xl border border-gray-200 bg-white peer-checked:border-green-500 peer-checked:bg-green-50 peer-checked:ring-1 peer-checked:ring-green-500 transition-all text-center hover:bg-gray-50">
<span className="text-sm font-medium text-gray-900">Lose Weight</span>
</div>
</label>
</div>
</div>

<div className="">
<label className="block text-base font-medium text-gray-900 mb-4">2. How often do you consume protein drinks?</label>
<div className="relative">
<select className="appearance-none w-full bg-white border border-gray-200 rounded-xl px-4 py-4 text-gray-900 text-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors shadow-sm cursor-pointer hover:bg-gray-50">
<option>Daily</option>
<option>3-4 times a week</option>
<option>1-2 times a week</option>
<option>Rarely</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
<iconify-icon className="text-lg" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
</div>
</div>

<button className="w-full py-3.5 px-4 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-xl transition-colors shadow-sm mt-4" type="button">
                    Submit Feedback
                </button>
</form>
</div>
</section>

<section className="bg-[#fafafa] pt-24 pb-24">
<div className="max-w-3xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center mb-12">
<h2 className="text-3xl font-medium text-gray-900 tracking-tight mb-3">Frequently Asked Questions</h2>
</div>
<div className="space-y-4">
<details className="group bg-white border border-gray-200 rounded-2xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-gray-900">
                        Is ProGulp lactose free?
                        <span className="transition group-open:rotate-180 text-gray-400">
<iconify-icon className="text-lg" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-gray-500 text-sm leading-relaxed">
                        Yes. It is 100% plant-based and entirely dairy-free, making it completely safe for those who are
                        lactose
                        intolerant.
                    </div>
</details>
<details className="group bg-white border border-gray-200 rounded-2xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-gray-900">
                        How much protein does it contain?
                        <span className="transition group-open:rotate-180 text-gray-400">
<iconify-icon className="text-lg" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-gray-500 text-sm leading-relaxed">
                        Every 250ml bottle of ProGulp delivers a full 30g of high-quality plant protein sourced from
                        soy,
                        almond, and pea.
                    </div>
</details>
<details className="group bg-white border border-gray-200 rounded-2xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer font-medium text-gray-900 pt-6 pr-6 pb-6 pl-6 items-center justify-between">
                        Does it contain added sugar?
                        <span className="transition group-open:rotate-180 text-gray-400">
<iconify-icon className="text-lg" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-gray-500 text-sm leading-relaxed">
                        No. ProGulp contains zero added sugar. We use natural stevia and monk fruit extracts for a
                        clean, great
                        taste.
                    </div>
</details>
<details className="group bg-white border border-gray-200 rounded-2xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-gray-900">
                        When will shipping start?
                        <span className="transition group-open:rotate-180 text-gray-400">
<iconify-icon className="text-lg" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-gray-500 text-sm leading-relaxed">
                        Shipping will commence immediately after our official product launch in 30 days. Waitlist
                        members will
                        get their orders fulfilled first.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-gray-100 text-center">
<div className="max-w-2xl mx-auto px-6">
<h2 className="text-4xl font-medium tracking-tight text-gray-900 mb-8">Be the First to Experience ProGulp</h2>
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-green-600 rounded-full hover:bg-green-700 transition-colors shadow-lg shadow-green-600/20" href="#waitlist">
                Join Early Access
            </a>
</div>
</section>

<footer className="bg-[#fafafa] border-t border-gray-200 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-white">
<iconify-icon className="text-xs" icon="solar:leaf-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
<span className="text-base font-medium tracking-tight text-gray-900">ProGulp</span>
</div>
<p className="text-sm text-gray-500">© 2024 ProGulp Nutrition. All rights reserved.</p>
<div className="flex items-center gap-5">
<a className="text-gray-400 hover:text-gray-900 transition-colors" href="#">
<span className="sr-only">Instagram</span>
<iconify-icon className="text-xl" icon="solar:camera-minimalistic-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</a>
<a className="text-gray-400 hover:text-gray-900 transition-colors" href="#">
<span className="sr-only">LinkedIn</span>
<iconify-icon className="text-xl" icon="solar:buildings-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</a>
<a className="text-gray-400 hover:text-gray-900 transition-colors" href="#">
<span className="sr-only">YouTube</span>
<iconify-icon className="text-xl" icon="solar:play-circle-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</a>
</div>
</div>
</footer>
    </>
  );
}
