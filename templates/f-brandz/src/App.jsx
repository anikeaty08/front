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
},
colors: {
page: '#050505',
card: '#0A0A0A',
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
},
animation: {
'scroll': 'scroll 120s linear infinite',
},
keyframes: {
scroll: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-100%)' },
}
}
}
}
}



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


        function toggleFields() {
            // Logic to show/hide fields if needed
        }

        async function handleFormSubmit(e) {
            e.preventDefault();
            
            const form = document.getElementById('contactForm');
            const successMsg = document.getElementById('successMessage');
            const errorMsg = document.getElementById('errorMessage');
            const btn = document.getElementById('submitBtn');
            const btnText = btn.querySelector('span');
            const btnIcon = btn.querySelector('iconify-icon');

            // Button Loading State
            btnText.innerText = 'Sending...';
            btnIcon.setAttribute('icon', 'solar:spinner-linear');
            btnIcon.classList.add('animate-spin');
            btn.classList.add('opacity-80', 'cursor-not-allowed');
            btn.disabled = true;

            try {
                const response = await fetch(form.action, {
                    method: form.method,
                    body: new FormData(form),
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    // Success Animation
                    form.classList.add('opacity-0', 'pointer-events-none');
                    setTimeout(() => {
                        form.classList.add('hidden');
                        successMsg.classList.remove('hidden');
                        resetButton(btn, btnText, btnIcon);
                    }, 300);
                } else {
                    // Error Handling
                    throw new Error('Submission failed');
                }
            } catch (error) {
                // Show Error
                form.classList.add('opacity-0', 'pointer-events-none');
                setTimeout(() => {
                    form.classList.add('hidden');
                    errorMsg.classList.remove('hidden');
                    resetButton(btn, btnText, btnIcon);
                }, 300);
            }
        }

        function resetButton(btn, btnText, btnIcon) {
            btnText.innerText = 'Submit Inquiry';
            btnIcon.setAttribute('icon', 'solar:arrow-right-linear');
            btnIcon.classList.remove('animate-spin');
            btn.classList.remove('opacity-80', 'cursor-not-allowed');
            btn.disabled = false;
        }

        function resetForm() {
            const form = document.getElementById('contactForm');
            const successMsg = document.getElementById('successMessage');
            const errorMsg = document.getElementById('errorMessage');
            
            form.reset();
            successMsg.classList.add('hidden');
            errorMsg.classList.add('hidden');
            form.classList.remove('hidden', 'opacity-0', 'pointer-events-none');
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="tPmIIl0vKqHO9yqmtge2"></div>

</div></div>

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-900/20 rounded-[100%] blur-[120px] -z-10 pointer-events-none mix-blend-screen"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white font-semibold tracking-tight text-lg flex items-center gap-2" href="#">
                F BRANDZ
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#facility">About Us</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
<a className="hover:text-white transition-colors" href="#contact">Contact</a>
</div>
<a className="text-xs font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-neutral-200 transition-colors" href="#contact">
                Get a Quote
            </a>
</div>
</nav>

<section className="relative pt-32 pb-16 md:pt-48 md:pb-32 px-6 overflow-hidden">
<div className="max-w-4xl mx-auto text-center relative z-10">

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-neutral-300 mb-8 backdrop-blur-md">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
<span className="font-medium">Huntington Beach, CA • 20,000 sq ft Facility</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight leading-[1.1] mb-6 text-glow">
                Premium 3PL &amp; Prep <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">for Amazon Sellers.</span>
</h1>
<p className="text-lg text-neutral-400 max-w-xl mx-auto mb-10 leading-relaxed font-light">
                F. Brandz is a logistics partner helping Amazon sellers scale. From re-barcoding and palletizing to full Amazon Account management, we handle the operations so you can focus on growth.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3 bg-white text-black rounded-full font-medium text-sm hover:bg-neutral-200 transition-all flex items-center justify-center gap-2" href="#contact">
                    Send Inventory
                </a>
<a className="w-full sm:w-auto px-8 py-3 bg-white/5 text-white border border-white/10 rounded-full font-medium text-sm hover:bg-white/10 transition-all flex items-center justify-center" href="#services">
                    Our Services
                </a>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-white/[0.01] overflow-hidden">
<div className="max-w-7xl mx-auto px-6 mb-8 text-center">
<p className="text-xs font-medium text-neutral-500 uppercase tracking-widest">Supporting top tier Brands</p>
</div>
<div className="relative flex overflow-x-hidden group">
<div className="animate-scroll whitespace-nowrap flex gap-12 md:gap-24 items-center opacity-50 hover:opacity-100 transition-opacity duration-500">

<span className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><iconify-icon icon="solar:box-minimalistic-linear"></iconify-icon> MerchSource</span>
<span className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><iconify-icon icon="solar:star-linear"></iconify-icon> FAO Schwarz</span>
<span className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><iconify-icon icon="solar:atom-linear"></iconify-icon> BackBone Labs</span>
<span className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><iconify-icon icon="solar:leaf-linear"></iconify-icon> That's it Nutrition</span>
<span className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><iconify-icon icon="solar:chef-hat-linear"></iconify-icon> Traina Home Foods</span>
<span className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><iconify-icon icon="solar:tea-cup-linear"></iconify-icon> Natural Food Ingredients</span>
<span className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><iconify-icon icon="solar:verified-check-linear"></iconify-icon> Proudly Pure</span>
<span className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon> Jordan &amp; Bo</span>
<span className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><iconify-icon icon="solar:heart-pulse-linear"></iconify-icon> Clever Life RX</span>
<span className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><iconify-icon icon="solar:rocket-linear"></iconify-icon> Discovery Kids</span>
<span className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><iconify-icon icon="solar:paw-linear"></iconify-icon> Animal Planets</span>
<span className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><iconify-icon icon="solar:monitor-camera-linear"></iconify-icon> Sharper Image</span>
<span className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><iconify-icon icon="solar:confetti-minimalistic-linear"></iconify-icon> CandyRific</span>
<span className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><iconify-icon icon="solar:gift-linear"></iconify-icon> Ten Acre Gifts</span>
<span className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><iconify-icon icon="solar:cpu-bolt-linear"></iconify-icon> Iconn Technology</span>
<span className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><iconify-icon icon="solar:headphones-round-linear"></iconify-icon> Pioneer Rayz</span>
<span className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><iconify-icon icon="solar:donut-linear"></iconify-icon> Franfort Candy</span>
<span className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><iconify-icon icon="solar:glasses-linear"></iconify-icon> PIMAX</span>
<span className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><iconify-icon icon="solar:gamepad-linear"></iconify-icon> Simucube</span>
<span className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><iconify-icon icon="solar:steering-wheel-linear"></iconify-icon> Apevie Simulator</span>
<span className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><iconify-icon icon="solar:case-round-linear"></iconify-icon> CaseYard</span>
<span className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><iconify-icon icon="solar:medal-star-linear"></iconify-icon> Superior Item Company</span>
<span className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><iconify-icon icon="solar:magic-stick-3-linear"></iconify-icon> Superior Effect</span>
<span className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><iconify-icon icon="solar:shield-check-linear"></iconify-icon> AO2 LLC</span>
<span className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><iconify-icon icon="solar:bolt-linear"></iconify-icon> Hypercel</span>
<span className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><iconify-icon icon="solar:settings-minimalistic-linear"></iconify-icon> HyperGear</span>
<span className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><iconify-icon icon="solar:devices-linear"></iconify-icon> Naztech</span>
<span className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><iconify-icon icon="solar:import-linear"></iconify-icon> A&amp;Z Import</span>
<span className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><iconify-icon icon="solar:box-linear"></iconify-icon> BDI</span>
<span className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><iconify-icon icon="solar:refresh-circle-linear"></iconify-icon> Three Sixty Group</span>
<span className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><iconify-icon icon="solar:mountains-linear"></iconify-icon> LaTerra</span>
<span className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><iconify-icon icon="solar:basketball-linear"></iconify-icon> Nima Sport</span>
<span className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><iconify-icon icon="solar:soundwave-linear"></iconify-icon> WireWave LLC</span>
<span className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><iconify-icon icon="solar:knife-linear"></iconify-icon> BladeTap</span>
<span className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><iconify-icon icon="solar:shop-linear"></iconify-icon> Bubo Trading</span>
<span className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><iconify-icon icon="solar:cosmetic-linear"></iconify-icon> Bingo Hair Cosmetics</span>

<span className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><iconify-icon icon="solar:box-minimalistic-linear"></iconify-icon> MerchSource</span>
<span className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><iconify-icon icon="solar:star-linear"></iconify-icon> FAO Schwarz</span>
<span className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><iconify-icon icon="solar:atom-linear"></iconify-icon> BackBone Labs</span>
<span className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><iconify-icon icon="solar:leaf-linear"></iconify-icon> That's it Nutrition</span>
<span className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><iconify-icon icon="solar:chef-hat-linear"></iconify-icon> Traina Home Foods</span>
<span className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><iconify-icon icon="solar:tea-cup-linear"></iconify-icon> Natural Food Ingredients</span>
<span className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><iconify-icon icon="solar:verified-check-linear"></iconify-icon> Proudly Pure</span>
<span className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon> Jordan &amp; Bo</span>
<span className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><iconify-icon icon="solar:heart-pulse-linear"></iconify-icon> Clever Life RX</span>
<span className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><iconify-icon icon="solar:rocket-linear"></iconify-icon> Discovery Kids</span>
<span className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><iconify-icon icon="solar:paw-linear"></iconify-icon> Animal Planets</span>
<span className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><iconify-icon icon="solar:monitor-camera-linear"></iconify-icon> Sharper Image</span>
<span className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><iconify-icon icon="solar:confetti-minimalistic-linear"></iconify-icon> CandyRific</span>
<span className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><iconify-icon icon="solar:gift-linear"></iconify-icon> Ten Acre Gifts</span>
<span className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><iconify-icon icon="solar:cpu-bolt-linear"></iconify-icon> Iconn Technology</span>
<span className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><iconify-icon icon="solar:headphones-round-linear"></iconify-icon> Pioneer Rayz</span>
<span className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><iconify-icon icon="solar:donut-linear"></iconify-icon> Franfort Candy</span>
<span className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><iconify-icon icon="solar:glasses-linear"></iconify-icon> PIMAX</span>
<span className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><iconify-icon icon="solar:gamepad-linear"></iconify-icon> Simucube</span>
<span className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><iconify-icon icon="solar:steering-wheel-linear"></iconify-icon> Apevie Simulator</span>
<span className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><iconify-icon icon="solar:case-round-linear"></iconify-icon> CaseYard</span>
<span className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><iconify-icon icon="solar:medal-star-linear"></iconify-icon> Superior Item Company</span>
<span className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><iconify-icon icon="solar:magic-stick-3-linear"></iconify-icon> Superior Effect</span>
<span className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><iconify-icon icon="solar:shield-check-linear"></iconify-icon> AO2 LLC</span>
<span className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><iconify-icon icon="solar:bolt-linear"></iconify-icon> Hypercel</span>
<span className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><iconify-icon icon="solar:settings-minimalistic-linear"></iconify-icon> HyperGear</span>
<span className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><iconify-icon icon="solar:devices-linear"></iconify-icon> Naztech</span>
<span className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><iconify-icon icon="solar:import-linear"></iconify-icon> A&amp;Z Import</span>
<span className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><iconify-icon icon="solar:box-linear"></iconify-icon> BDI</span>
<span className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><iconify-icon icon="solar:refresh-circle-linear"></iconify-icon> Three Sixty Group</span>
<span className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><iconify-icon icon="solar:mountains-linear"></iconify-icon> LaTerra</span>
<span className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><iconify-icon icon="solar:basketball-linear"></iconify-icon> Nima Sport</span>
<span className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><iconify-icon icon="solar:soundwave-linear"></iconify-icon> WireWave LLC</span>
<span className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><iconify-icon icon="solar:knife-linear"></iconify-icon> BladeTap</span>
<span className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><iconify-icon icon="solar:shop-linear"></iconify-icon> Bubo Trading</span>
<span className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><iconify-icon icon="solar:cosmetic-linear"></iconify-icon> Bingo Hair Cosmetics</span>
</div>

<div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#050505] to-transparent z-10"></div>
<div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#050505] to-transparent z-10"></div>
</div>
</section>

<section className="py-24 px-6 relative" id="services">
<div className="max-w-7xl mx-auto">

<div className="text-center mb-20">
<span className="text-blue-400 text-xs font-semibold tracking-wider uppercase mb-6 block">Wholesale · eCommerce · Retail Fulfillment</span>
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-8">Precision Fulfillment, <br/> Built for Scale.</h2>
<p className="text-neutral-400 max-w-2xl mx-auto leading-relaxed text-lg font-light">
                    In today’s market, fulfillment isn’t about moving boxes—it’s about speed, accuracy, and control. 
                    <span className="text-white font-normal">F. Brandz</span> delivers end-to-end eCommerce, Amazon, and retail fulfillment from our 20,000 sq. ft. warehouse in Huntington Beach, California.
                    <br/><br/>
                    We’re not a plug-and-play 3PL. We’re a hands-on fulfillment and Amazon operations partner, built for brands that care about margins, compliance, and customer experience.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 border-y border-white/5 py-10 bg-white/[0.01]">
<div className="text-center">
<p className="text-4xl font-medium text-white tracking-tight mb-1">20,000+</p>
<p className="text-xs font-medium text-neutral-500 uppercase tracking-widest">Square Feet (Huntington Beach, CA)</p>
</div>
<div className="text-center md:border-l md:border-r border-white/5">
<p className="text-4xl font-medium text-white tracking-tight mb-1">1,000+</p>
<p className="text-xs font-medium text-neutral-500 uppercase tracking-widest">Orders Processed Per Day</p>
</div>
<div className="text-center">
<p className="text-4xl font-medium text-white tracking-tight mb-1">Same-Day</p>
<p className="text-xs font-medium text-neutral-500 uppercase tracking-widest">Pick · Pack · Ship Accuracy</p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">

<div className="glass-panel rounded-3xl p-8 lg:col-span-8 relative overflow-hidden group min-h-[320px]">
<div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
<iconify-icon icon="solar:stopwatch-linear" width="200"></iconify-icon>
</div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6">
<iconify-icon icon="solar:box-minimalistic-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-3">eCommerce &amp; Amazon Fulfillment</h3>
<div className="flex items-center gap-2 mb-4">
<span className="bg-blue-500/10 text-blue-300 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">Same-Day Pick · Pack · Ship</span>
</div>
<p className="text-neutral-400 text-sm leading-relaxed max-w-lg">Orders received by cutoff ship the same day. We support standard, custom, and eco-friendly packaging, plus Amazon-ready prep for FBA and FBM orders—no outsourcing, no delays.</p>
</div>
</div>
</div>

<div className="glass-panel rounded-3xl p-8 lg:col-span-4 flex flex-col justify-between group hover:bg-white/[0.03] transition-colors min-h-[320px]">
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
<iconify-icon icon="solar:clipboard-check-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-2">Amazon FBA &amp; FBM Prep</h3>
<p className="text-neutral-400 text-sm leading-relaxed mb-4">End-to-end Amazon compliance: labeling, poly-bagging, case packing &amp; palletization. Built by an Amazon consulting team that understands Seller Central.</p>
<ul className="text-xs text-neutral-500 space-y-1">
<li className="flex items-center gap-2"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> FBA Shipment Creation</li>
<li className="flex items-center gap-2"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> FBM Direct-to-Consumer</li>
</ul>
</div>
</div>

<div className="glass-panel rounded-3xl p-8 lg:col-span-4 flex flex-col justify-between group hover:bg-white/[0.03] transition-colors min-h-[280px]">
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
<iconify-icon icon="solar:shop-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-2">Retail &amp; B2B Fulfillment</h3>
<p className="text-neutral-400 text-sm leading-relaxed">From bulk pallet shipments to store-ready orders. We manage inventory receiving, QC, case-pack distribution, and LTL/FTL freight coordination.</p>
</div>
</div>

<div className="glass-panel rounded-3xl p-8 lg:col-span-4 flex flex-col justify-between group hover:bg-white/[0.03] transition-colors min-h-[280px]">
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
<iconify-icon icon="solar:restart-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-2">Returns Management</h3>
<p className="text-neutral-400 text-sm leading-relaxed">Returns aren’t an afterthought. We provide structured processing, inspection, re-stocking, and quality audits to protect brand reputation.</p>
</div>
</div>

<div className="glass-panel rounded-3xl p-8 lg:col-span-4 flex flex-col justify-between group hover:bg-white/[0.03] transition-colors min-h-[280px]">
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
<iconify-icon icon="solar:link-circle-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-2">Tech-Integrated</h3>
<p className="text-neutral-400 text-sm leading-relaxed">Direct integration with Shopify, Amazon, EDI, and XML. Real-time inventory sync and order status updates so your fulfillment talks to your store.</p>
</div>
</div>

<div className="glass-panel rounded-3xl p-8 lg:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-12 group">
<div className="flex flex-col justify-between h-full">
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6">
<iconify-icon icon="solar:graph-up-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-2">Real-Time Reporting</h3>
<p className="text-neutral-400 text-sm leading-relaxed">Live inventory reports, shipment visibility, and performance insights. Plus dedicated support 7 days a week—no ticket black holes.</p>
</div>
</div>
<div className="flex flex-col justify-between h-full border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-12">
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6">
<iconify-icon icon="solar:pallete-2-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-2">Warehouse Operations</h3>
<p className="text-neutral-400 text-sm leading-relaxed">Container unloading, pallet breakdown, trailer loading, and racked/floor storage. Built for high-volume throughput without chaos.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 relative overflow-hidden" id="facility">
<div className="absolute inset-0 bg-gradient-to-b from-blue-900/5 to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-neutral-300 mb-6 backdrop-blur-md">
<span className="font-medium">Why F. Brandz</span>
</div>
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6">Most 3PLs move boxes. <br/> <span className="text-neutral-500">We optimize operations.</span></h2>
<p className="text-neutral-400 text-lg leading-relaxed mb-8 font-light">
                        Because we also run Amazon consulting and account management, we understand how fulfillment impacts your Buy Box, account health, and cash flow.
                    </p>
<p className="text-white text-lg font-medium">That perspective is baked into how we run your fulfillment—daily.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

<div className="glass-panel p-6 rounded-2xl border-l-4 border-l-blue-500">
<iconify-icon className="text-white text-3xl mb-4" icon="solar:graph-new-linear"></iconify-icon>
<h3 className="text-lg font-medium text-white mb-2">Buy Box Impact</h3>
<p className="text-neutral-500 text-sm">We prioritize speed to ensure your delivery promises win the sale.</p>
</div>

<div className="glass-panel p-6 rounded-2xl border-l-4 border-l-blue-500">
<iconify-icon className="text-white text-3xl mb-4" icon="solar:shield-check-linear"></iconify-icon>
<h3 className="text-lg font-medium text-white mb-2">Account Health</h3>
<p className="text-neutral-500 text-sm">Strict compliance checks prevent warnings and listing suppressions.</p>
</div>

<div className="glass-panel p-6 rounded-2xl border-l-4 border-l-blue-500">
<iconify-icon className="text-white text-3xl mb-4" icon="solar:wad-of-money-linear"></iconify-icon>
<h3 className="text-lg font-medium text-white mb-2">Inventory Velocity</h3>
<p className="text-neutral-500 text-sm">Efficient processing means your stock goes live faster, improving cash flow.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="pricing">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-blue-900/5 blur-[100px] -z-10 rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Transparent Service Models.</h2>
<p className="text-neutral-400">Whether you need prep only or full brand management.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="glass-panel p-8 rounded-2xl flex flex-col">
<div className="mb-4">
<h3 className="text-lg font-medium text-white">Prep &amp; Pack</h3>
<p className="text-neutral-500 text-sm mt-1">Per unit pricing.</p>
</div>
<div className="mb-6">
<span className="text-3xl font-medium text-white">Pay as you go</span>
</div>
<div className="space-y-4 mb-8 flex-1">
<div className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> FNSKU Labeling
                        </div>
<div className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> Polybagging
                        </div>
<div className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> Packaging Replacement
                        </div>
<div className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> 24-48h Turnaround
                        </div>
</div>
<a className="flex justify-center w-full py-3 rounded-lg border border-white/10 text-white text-sm font-medium hover:bg-white/5 transition-colors" href="#contact">Request Rate Card</a>
</div>

<div className="glass-panel p-8 rounded-2xl flex flex-col relative border-blue-500/30 shadow-[0_0_30px_-10px_rgba(59,130,246,0.2)]">
<div className="absolute top-0 right-0 px-3 py-1 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider rounded-bl-lg rounded-tr-lg">Recommended</div>
<div className="mb-4">
<h3 className="text-lg font-medium text-white">Full Management</h3>
<p className="text-neutral-500 text-sm mt-1">Account Growth Partnership.</p>
</div>
<div className="mb-6">
<span className="text-3xl font-medium text-white">Monthly</span><span className="text-neutral-500 text-sm"> Retainer</span>
</div>
<div className="space-y-4 mb-8 flex-1">
<div className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-blue-400" icon="solar:check-circle-linear"></iconify-icon> Seller Central Management
                        </div>
<div className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-blue-400" icon="solar:check-circle-linear"></iconify-icon> PPC Optimization
                        </div>
<div className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-blue-400" icon="solar:check-circle-linear"></iconify-icon> Inventory Planning
                        </div>
<div className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-blue-400" icon="solar:check-circle-linear"></iconify-icon> Listing Optimization
                        </div>
</div>
<a className="flex justify-center w-full py-3 rounded-lg bg-white text-black text-sm font-medium hover:bg-neutral-200 transition-colors" href="#contact">Apply for Partnership</a>
</div>

<div className="glass-panel p-8 rounded-2xl flex flex-col">
<div className="mb-4">
<h3 className="text-lg font-medium text-white">3PL Storage</h3>
<p className="text-neutral-500 text-sm mt-1">For long-term inventory.</p>
</div>
<div className="mb-6">
<span className="text-3xl font-medium text-white">Custom</span>
</div>
<div className="space-y-4 mb-8 flex-1">
<div className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> Pallet Storage (HB, CA)
                        </div>
<div className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> Container Unloading
                        </div>
<div className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> LTL/FTL Shipping
                        </div>
</div>
<a className="flex justify-center w-full py-3 rounded-lg border border-white/10 text-white text-sm font-medium hover:bg-white/5 transition-colors" href="#contact">Contact Sales</a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative border-t border-white/5" id="contact">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-6">Let's streamline your <br/> <span className="text-neutral-500">operations.</span></h2>
<p className="text-neutral-400 text-lg mb-12 font-light">
                        Whether you need a reliable 3PL for prep work or a dedicated team to manage your entire Seller Central account, fill out the form to get started.
                    </p>
<div className="space-y-8">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white shrink-0">
<iconify-icon icon="solar:box-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1">New Fulfillment Requests</h4>
<p className="text-sm text-neutral-500 leading-relaxed">Please provide estimated monthly unit volume so we can provide accurate prep rates.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white shrink-0">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1">Existing Amazon Sellers</h4>
<p className="text-sm text-neutral-500 leading-relaxed">Looking for account management? Include a link to your storefront or ASINs for a preliminary audit.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white shrink-0">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1">Direct Contact</h4>
<p className="text-sm text-neutral-500">info@fbrandz.com</p>
</div>
</div>
</div>
</div>

<div className="relative">

<div className="hidden absolute inset-0 z-20 glass-panel rounded-2xl flex flex-col items-center justify-center text-center p-8" id="successMessage">
<div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-6 text-green-400 border border-green-500/20">
<iconify-icon icon="solar:check-read-linear" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-white mb-2">Inquiry Received!</h3>
<p className="text-neutral-400 max-w-sm">Thank you for contacting F Brandz. Our team has received your details and will review your Amazon requirements. We typically respond within 24 hours.</p>
<button className="mt-8 text-sm text-white border-b border-white/20 pb-0.5 hover:text-blue-400 hover:border-blue-400 transition-colors" onclick="resetForm()">Send another message</button>
</div>

<div className="hidden absolute inset-0 z-20 glass-panel rounded-2xl flex flex-col items-center justify-center text-center p-8" id="errorMessage">
<div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mb-6 text-red-400 border border-red-500/20">
<iconify-icon icon="solar:danger-triangle-linear" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-white mb-2">Something went wrong.</h3>
<p className="text-neutral-400 max-w-sm">Please try again later or email us directly at info@fbrandz.com</p>
<button className="mt-8 text-sm text-white border-b border-white/20 pb-0.5 hover:text-red-400 hover:border-red-400 transition-colors" onclick="resetForm()">Try again</button>
</div>
<form action="https://formspree.io/f/mvzakyvy" className="glass-panel p-8 md:p-10 rounded-2xl space-y-6" id="contactForm" method="POST" onsubmit="handleFormSubmit(event)">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium text-neutral-400 uppercase tracking-wider ml-1">First Name</label>
<input className="w-full bg-[#050505] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-neutral-600 focus:border-blue-500 transition-colors" name="firstName" placeholder="Jane" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-neutral-400 uppercase tracking-wider ml-1">Last Name</label>
<input className="w-full bg-[#050505] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-neutral-600 focus:border-blue-500 transition-colors" name="lastName" placeholder="Doe" required="" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-neutral-400 uppercase tracking-wider ml-1">Business Email</label>
<input className="w-full bg-[#050505] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-neutral-600 focus:border-blue-500 transition-colors" name="email" placeholder="jane@company.com" required="" type="email"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-neutral-400 uppercase tracking-wider ml-1">Primary Interest</label>
<div className="relative">
<select className="w-full appearance-none bg-[#050505] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-blue-500 transition-colors cursor-pointer" id="interestSelect" name="interest" onchange="toggleFields()">
<option value="3pl">3PL Fulfillment &amp; Prep Services</option>
<option value="management">Amazon Account Management</option>
<option value="both">Both (Full Partnership)</option>
</select>
<div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-500">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>

<div className="space-y-2" id="volumeField">
<label className="text-xs font-medium text-neutral-400 uppercase tracking-wider ml-1">Est. Monthly Volume (Units)</label>
<select className="w-full appearance-none bg-[#050505] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-blue-500 transition-colors cursor-pointer text-sm" name="volume">
<option>Less than 500 units</option>
<option>500 - 2,000 units</option>
<option>2,000 - 10,000 units</option>
<option>10,000+ units</option>
</select>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-neutral-400 uppercase tracking-wider ml-1">Amazon Store Link / Website (Optional)</label>
<input className="w-full bg-[#050505] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-neutral-600 focus:border-blue-500 transition-colors" name="website" placeholder="amazon.com/shops/yourbrand" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-neutral-400 uppercase tracking-wider ml-1">Additional Details</label>
<textarea className="w-full bg-[#050505] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-neutral-600 focus:border-blue-500 transition-colors resize-none" name="message" placeholder="Tell us about your specific needs..." rows="4"></textarea>
</div>
<button className="w-full bg-white text-black font-medium py-3 rounded-lg hover:bg-neutral-200 transition-all flex items-center justify-center gap-2" id="submitBtn" type="submit">
<span>Submit Inquiry</span>
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5" id="faq">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl font-medium text-white tracking-tight mb-12 text-center">Frequently asked questions</h2>
<div className="space-y-4">
<details className="group glass-panel rounded-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer text-white font-medium hover:bg-white/5 transition-colors">
                        Where is your warehouse located?
                        <iconify-icon className="text-neutral-400 group-open:rotate-45 transition-transform duration-300" icon="solar:add-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-neutral-400 text-sm leading-relaxed">
                        Our 20,000 square foot facility is located in Huntington Beach, California. This strategic location is close to the Port of Los Angeles and Long Beach for quick container retrieval.
                    </div>
</details>
<details className="group glass-panel rounded-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer text-white font-medium hover:bg-white/5 transition-colors">
                        Can you fix damaged packaging?
                        <iconify-icon className="text-neutral-400 group-open:rotate-45 transition-transform duration-300" icon="solar:add-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-neutral-400 text-sm leading-relaxed">
                        Yes, we offer full packaging replacement services. If your goods arrive with damaged boxes, we can swap them out to ensure they meet Amazon's "New" condition standards before shipping.
                    </div>
</details>
<details className="group glass-panel rounded-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer text-white font-medium hover:bg-white/5 transition-colors">
                        Do you handle FBA Labeling (FNSKU)?
                        <iconify-icon className="text-neutral-400 group-open:rotate-45 transition-transform duration-300" icon="solar:add-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-neutral-400 text-sm leading-relaxed">
                        Absolutely. We can cover manufacturer barcodes with FNSKU labels, add "Sold as Set" stickers, and ensure all prep compliance is met to avoid Amazon rejection.
                    </div>
</details>
<details className="group glass-panel rounded-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer text-white font-medium hover:bg-white/5 transition-colors">
                        How does the Account Management work?
                        <iconify-icon className="text-neutral-400 group-open:rotate-45 transition-transform duration-300" icon="solar:add-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-neutral-400 text-sm leading-relaxed">
                        With over 12 years of experience, our team (both in-house and overseas) acts as your operations department. We handle everything from listing creation to inventory health and ad management.
                    </div>
</details>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-[#020202] pt-24 pb-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 mb-24">
<div className="max-w-xl">
<a className="text-white font-semibold tracking-tight text-xl flex items-center gap-2 mb-6" href="#">
                    F BRANDZ
                </a>
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-8">Ready to scale your <br/> <span className="text-neutral-500">Amazon business?</span></h2>
<div className="flex flex-col gap-2">
<a className="w-fit px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-neutral-200 transition-colors" href="#contact">
                        Get Started
                    </a>
<p className="text-neutral-500 text-sm mt-4">Huntington Beach, CA</p>
</div>
</div>
<div className="flex gap-16">
<div>
<h4 className="text-white font-medium mb-6">Services</h4>
<ul className="space-y-4 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">FBA Prep</a></li>
<li><a className="hover:text-white transition-colors" href="#">3PL Storage</a></li>
<li><a className="hover:text-white transition-colors" href="#">Account Management</a></li>
<li><a className="hover:text-white transition-colors" href="#">Kitting</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6">Company</h4>
<ul className="space-y-4 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#contact">Contact</a></li>
<li><a className="hover:text-white transition-colors" href="#">Carriers</a></li>
</ul>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-600">
<p>© 2024 F Brandz Logistics. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-neutral-400 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-neutral-400 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</footer>



    </>
  );
}
