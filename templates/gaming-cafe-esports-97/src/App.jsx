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



        document.addEventListener('DOMContentLoaded', () => {
            const pricingData = {
                pc: {
                    title: "High End 240Hz PC",
                    packs: [
                        { id: 'pc-1', label: '1 Hour', price: 70 },
                        { id: 'pc-5', label: '5 Hours', price: 300 },
                        { id: 'pc-day', label: 'Full Day', price: 500 }
                    ]
                },
                ps5: {
                    title: "PS5 Lounge",
                    packs: [
                        { id: 'ps5-1', label: '1 Hour', price: 200 },
                        { id: 'ps5-5', label: '5 Hours', price: 850 },
                        { id: 'ps5-day', label: 'Full Day', price: 1400 }
                    ]
                },
                ps4: {
                    title: "PS4 Lounge",
                    packs: [
                        { id: 'ps4-1', label: '1 Hour', price: 150 },
                        { id: 'ps4-3', label: '3 Hours', price: 400 },
                        { id: 'ps4-day', label: 'Full Day', price: 900 }
                    ]
                }
            };

            const setupSelect = document.getElementById('setup-select');
            const packagesContainer = document.getElementById('packages-container');
            const priceDisplay = document.getElementById('price-display');
            const bookBtn = document.getElementById('book-btn');

            function renderPackages() {
                const setup = setupSelect.value;
                const packs = pricingData[setup].packs;
                
                packagesContainer.innerHTML = packs.map((pack, index) => `
                    <label class="relative flex flex-col items-center justify-center p-3 sm:p-4 border border-zinc-800 bg-zinc-900/50 rounded-xl cursor-pointer hover:border-violet-500/50 transition-colors group has-[:checked]:border-violet-500 has-[:checked]:bg-violet-500/10 text-center">
                        <input type="radio" name="package" value="${pack.price}" data-label="${pack.label}" class="sr-only" ${index === 0 ? 'checked' : ''}>
                        <span class="text-[10px] sm:text-xs font-medium text-zinc-400 group-hover:text-zinc-300 group-has-[:checked]:text-violet-300 mb-1">${pack.label}</span>
                        <span class="text-sm sm:text-lg font-semibold tracking-tight text-zinc-100 group-has-[:checked]:text-violet-100">₹${pack.price}</span>
                    </label>
                `).join('');

                // Re-bind change events to new radio buttons
                const radios = document.querySelectorAll('input[name="package"]');
                radios.forEach(radio => radio.addEventListener('change', updatePrice));
                
                updatePrice();
            }

            function updatePrice() {
                const selectedPack = document.querySelector('input[name="package"]:checked');
                if (selectedPack) {
                    priceDisplay.innerText = '₹' + selectedPack.value;
                }
            }

            setupSelect.addEventListener('change', renderPackages);
            
            // Initial Render
            renderPackages();

            // WhatsApp Booking Action
            bookBtn.addEventListener('click', () => {
                const setupKey = setupSelect.value;
                const setupName = pricingData[setupKey].title;
                const selectedPack = document.querySelector('input[name="package"]:checked');
                
                if(selectedPack) {
                    const packLabel = selectedPack.getAttribute('data-label');
                    const price = selectedPack.value;
                    const message = `Hi GGwellplayed! I'd like to book a slot.\n\nSetup: ${setupName}\nPackage: ${packLabel}\nPrice: ₹${price}\n\nPlease confirm availability.`;
                    const whatsappUrl = `https://wa.me/918087793773?text=${encodeURIComponent(message)}`;
                    
                    window.open(whatsappUrl, '_blank');
                }
            });
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
      

<header className="fixed top-0 w-full z-50 border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-xl font-semibold tracking-tighter text-zinc-100 flex items-center gap-2" href="#">
<div className="w-6 h-6 rounded bg-gradient-to-br from-violet-500 to-fuchsia-600 flex items-center justify-center"></div>
                GGWP
            </a>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-zinc-100 transition-colors" href="#features">Setups</a>
<a className="hover:text-zinc-100 transition-colors" href="#pricing">Pricing</a>
<a className="hover:text-zinc-100 transition-colors" href="#location">Location</a>
</nav>
<div className="flex items-center gap-4">
<a className="text-zinc-400 hover:text-violet-400 transition-colors hidden sm:flex items-center" href="https://www.instagram.com/ggwellplayedcafe?igsh=MWh2OTZjM2szdG01Yg==" target="_blank">
<iconify-icon className="text-xl" icon="solar:camera-minimalistic-linear"></iconify-icon>
</a>
<a className="text-zinc-400 hover:text-violet-400 transition-colors hidden sm:flex items-center" href="tel:08087793773">
<iconify-icon className="text-xl" icon="solar:phone-linear"></iconify-icon>
</a>
<a className="bg-zinc-100 text-zinc-950 px-4 py-2 rounded-full text-sm font-medium hover:bg-zinc-200 transition-colors ml-2" href="#book">
                    Book Slot
                </a>
</div>
</div>
</header>
<main className="flex-grow pt-16">

<section className="relative min-h-[85vh] flex flex-col justify-center items-center text-center px-6 py-20 overflow-hidden bg-grid-pattern">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-violet-600/20 blur-[120px] rounded-full pointer-events-none"></div>
<div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/20 bg-violet-500/10 text-violet-300 text-xs font-medium mb-8">
<span className="flex h-2 w-2 rounded-full bg-violet-500 animate-pulse"></span>
                    Pune's Premium Gaming Experience
                </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-zinc-100 leading-tight">
                    Play Like a <br className="hidden sm:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">Pro</span>
</h1>
<p className="mt-6 text-lg md:text-xl text-zinc-400 max-w-2xl tracking-normal">
                    240Hz PC setups, PS5 &amp; PS4 lounges. Zero lag. The ultimate competitive and casual gaming experience in Pune.
                </p>
<div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="inline-flex justify-center items-center gap-2 bg-violet-600 text-white px-8 py-4 rounded-xl text-base font-medium hover:bg-violet-700 transition-all shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] transform hover:-translate-y-0.5" href="#book">
                        Book Now
                        <iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="inline-flex justify-center items-center gap-2 border border-zinc-800 bg-zinc-900/50 text-zinc-100 px-8 py-4 rounded-xl text-base font-medium hover:bg-zinc-800 hover:border-zinc-700 transition-all" href="#pricing">
                        View Pricing
                    </a>
</div>
</div>
</section>

<section className="py-10 border-y border-zinc-800/50 bg-zinc-950/50" id="reviews">
<div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
<div className="flex items-center gap-1 text-yellow-500 text-xl mb-3">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<h2 className="text-xl font-medium tracking-tight text-zinc-100">Top Rated in Parvati Paytha, Pune</h2>
<div className="mt-4 flex flex-wrap justify-center items-center gap-4 text-sm text-zinc-500">
<span className="flex items-center gap-2">
<iconify-icon className="text-violet-500" icon="solar:check-circle-linear"></iconify-icon>
                        “Insane 240Hz monitors”
                    </span>
<span className="hidden sm:block">•</span>
<span className="flex items-center gap-2">
<iconify-icon className="text-violet-500" icon="solar:check-circle-linear"></iconify-icon>
                        “Best PS5 lounges”
                    </span>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6" id="pricing">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-100">Simple, Unbeatable Pricing</h2>
<p className="mt-4 text-base text-zinc-400">Choose your setup. Pay for the time you need. Dominate.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-zinc-900/40 border border-zinc-800/80 p-8 rounded-3xl relative overflow-hidden group hover:border-zinc-700 transition-colors">
<div className="absolute top-0 right-0 p-6 text-zinc-800 group-hover:text-zinc-700 transition-colors">
<iconify-icon className="text-6xl" icon="solar:monitor-linear"></iconify-icon>
</div>
<div className="relative z-10">
<h3 className="text-xl font-semibold tracking-tight text-zinc-100 mb-6">High End 240Hz</h3>
<div className="space-y-4">
<div className="flex justify-between items-center border-b border-zinc-800/50 pb-4">
<span className="text-sm font-medium text-zinc-400">1 Hour</span>
<span className="text-lg font-semibold text-zinc-100">₹70</span>
</div>
<div className="flex justify-between items-center border-b border-zinc-800/50 pb-4">
<span className="text-sm font-medium text-zinc-400">5 Hours</span>
<span className="text-lg font-semibold text-zinc-100">₹300</span>
</div>
<div className="flex justify-between items-center pb-2">
<span className="text-sm font-medium text-violet-400">Full Day</span>
<span className="text-lg font-semibold text-violet-400">₹500</span>
</div>
</div>
</div>
</div>

<div className="bg-gradient-to-b from-violet-900/20 to-zinc-900/40 border border-violet-500/30 p-8 rounded-3xl relative overflow-hidden group shadow-[0_0_30px_rgba(124,58,237,0.1)]">
<div className="absolute top-0 right-0 p-6 text-violet-500/10 group-hover:text-violet-500/20 transition-colors">
<iconify-icon className="text-6xl" icon="solar:gamepad-linear"></iconify-icon>
</div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
<div className="relative z-10">
<div className="inline-flex items-center gap-1.5 bg-violet-500/20 text-violet-300 text-xs font-medium px-2.5 py-1 rounded-md mb-4 border border-violet-500/20">
                            Most Popular
                        </div>
<h3 className="text-xl font-semibold tracking-tight text-zinc-100 mb-6">PS5 Lounge</h3>
<div className="space-y-4">
<div className="flex justify-between items-center border-b border-zinc-800/50 pb-4">
<span className="text-sm font-medium text-zinc-400">1 Hour</span>
<span className="text-lg font-semibold text-zinc-100">₹200</span>
</div>
<div className="flex justify-between items-center border-b border-zinc-800/50 pb-4">
<span className="text-sm font-medium text-zinc-400">5 Hours</span>
<span className="text-lg font-semibold text-zinc-100">₹850</span>
</div>
<div className="flex justify-between items-center pb-2">
<span className="text-sm font-medium text-violet-400">Full Day</span>
<span className="text-lg font-semibold text-violet-400">₹1400</span>
</div>
</div>
</div>
</div>

<div className="bg-zinc-900/40 border border-zinc-800/80 p-8 rounded-3xl relative overflow-hidden group hover:border-zinc-700 transition-colors">
<div className="absolute top-0 right-0 p-6 text-zinc-800 group-hover:text-zinc-700 transition-colors">
<iconify-icon className="text-6xl" icon="solar:gamepad-broken"></iconify-icon>
</div>
<div className="relative z-10">
<h3 className="text-xl font-semibold tracking-tight text-zinc-100 mb-6">PS4 Lounge</h3>
<div className="space-y-4">
<div className="flex justify-between items-center border-b border-zinc-800/50 pb-4">
<span className="text-sm font-medium text-zinc-400">1 Hour</span>
<span className="text-lg font-semibold text-zinc-100">₹150</span>
</div>
<div className="flex justify-between items-center border-b border-zinc-800/50 pb-4">
<span className="text-sm font-medium text-zinc-400">3 Hours</span>
<span className="text-lg font-semibold text-zinc-100">₹400</span>
</div>
<div className="flex justify-between items-center pb-2">
<span className="text-sm font-medium text-violet-400">Full Day</span>
<span className="text-lg font-semibold text-violet-400">₹900</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden bg-zinc-950" id="book">
<div className="max-w-2xl mx-auto rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8 md:p-12 relative overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-b from-violet-500/5 to-transparent pointer-events-none"></div>
<h2 className="relative z-10 text-3xl font-semibold tracking-tight text-zinc-100 text-center">
                    Reserve Your Setup
                </h2>
<p className="relative z-10 mt-3 text-sm text-zinc-400 text-center mb-8">
                    Select your rig and duration below to book directly via WhatsApp.
                </p>

<form className="relative z-10 flex flex-col gap-6">

<div className="flex flex-col gap-2">
<label className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Choose Setup</label>
<div className="relative">
<select className="w-full bg-zinc-950/80 border border-zinc-800 rounded-xl px-4 py-3.5 text-sm font-medium text-zinc-100 appearance-none focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-all cursor-pointer" id="setup-select">
<option value="pc">High End 240Hz PC</option>
<option value="ps5">PS5 Lounge</option>
<option value="ps4">PS4 Lounge</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none text-lg" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>

<div className="flex flex-col gap-2">
<label className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Select Package</label>
<div className="grid grid-cols-3 gap-3" id="packages-container">

</div>
</div>

<div className="mt-4 p-5 bg-zinc-950/50 border border-zinc-800/80 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex flex-col items-center sm:items-start">
<span className="text-xs font-medium text-zinc-500">Total Amount</span>
<span className="text-2xl font-semibold tracking-tight text-zinc-100" id="price-display">₹0</span>
</div>
<button className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-[#25D366] text-zinc-950 px-8 py-3.5 rounded-xl text-sm font-semibold hover:bg-[#22c35e] hover:scale-[1.02] transition-all duration-200 shadow-[0_0_20px_rgba(37,211,102,0.15)]" id="book-btn" type="button">
<iconify-icon className="text-lg" icon="solar:phone-calling-linear"></iconify-icon>
                            Book via WhatsApp
                        </button>
</div>
</form>
</div>
</section>

<section className="py-24 border-t border-zinc-800/50 bg-zinc-950/30" id="location">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row gap-12 items-center">
<div className="w-full lg:w-1/2 flex flex-col gap-6">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-zinc-100 mb-2">Find Us</h2>
<p className="text-base text-zinc-400">Located in the heart of Parvati Paytha. Drop by and plug in.</p>
</div>
<div className="bg-zinc-900/40 border border-zinc-800/80 p-6 rounded-2xl flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-violet-500/10 flex items-center justify-center text-violet-400 shrink-0">
<iconify-icon className="text-xl" icon="solar:map-point-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-100 mb-1">GGwellplayed Gaming Cafe</h4>
<p className="text-sm text-zinc-400 leading-relaxed">
                                    1st Floor, Ganga Sankalp, opposite to TVS Shelar,<br/> 
                                    Taware Colony, Parvati Paytha,<br/> 
                                    Pune, Maharashtra 411009
                                </p>
</div>
</div>
<div className="flex gap-4">
<a className="flex-1 bg-zinc-900/40 border border-zinc-800/80 p-4 rounded-2xl flex flex-col items-center justify-center gap-2 hover:bg-zinc-800/40 hover:border-zinc-700 transition-all group" href="tel:08087793773">
<iconify-icon className="text-2xl text-zinc-400 group-hover:text-violet-400 transition-colors" icon="solar:phone-linear"></iconify-icon>
<span className="text-sm font-medium text-zinc-300">08087793773</span>
</a>
<a className="flex-1 bg-zinc-900/40 border border-zinc-800/80 p-4 rounded-2xl flex flex-col items-center justify-center gap-2 hover:bg-zinc-800/40 hover:border-zinc-700 transition-all group" href="https://www.instagram.com/ggwellplayedcafe?igsh=MWh2OTZjM2szdG01Yg==" target="_blank">
<iconify-icon className="text-2xl text-zinc-400 group-hover:text-violet-400 transition-colors" icon="solar:camera-minimalistic-linear"></iconify-icon>
<span className="text-sm font-medium text-zinc-300">Instagram</span>
</a>
</div>
</div>
<div className="w-full lg:w-1/2 h-[400px] rounded-3xl overflow-hidden border border-zinc-800 relative">

<iframe allowfullscreen="" className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://maps.google.com/maps?q=GGwellplayed%20Gaming%20Cafe,%20Pune&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed" style={{border: '0'}} width="100%">
</iframe>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-zinc-800/50 py-12 bg-zinc-950">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 text-xl font-semibold tracking-tighter text-zinc-100">
<div className="w-5 h-5 rounded bg-gradient-to-br from-violet-500 to-fuchsia-600 flex items-center justify-center"></div>
                GGWP
            </div>
<p className="text-sm text-zinc-500">© 2024 GGwellplayed Gaming Cafe Pune. All rights reserved.</p>
<div className="flex gap-5 text-zinc-500">
<a className="hover:text-zinc-300 transition-colors" href="#location" title="Location"><iconify-icon className="text-xl" icon="solar:map-point-linear"></iconify-icon></a>
<a className="hover:text-zinc-300 transition-colors" href="tel:08087793773" title="Call Us"><iconify-icon className="text-xl" icon="solar:phone-linear"></iconify-icon></a>
<a className="hover:text-zinc-300 transition-colors" href="https://www.instagram.com/ggwellplayedcafe?igsh=MWh2OTZjM2szdG01Yg==" target="_blank" title="Instagram"><iconify-icon className="text-xl" icon="solar:camera-minimalistic-linear"></iconify-icon></a>
</div>
</div>
</footer>



    </>
  );
}
