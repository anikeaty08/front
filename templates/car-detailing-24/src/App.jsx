import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Pricing Data Source
        const basePrices = {
            small: { interior: 150, combined: 200, restoration: 250 },
            mid: { interior: 175, combined: 250, restoration: 300 },
            large: { interior: 200, combined: 300, restoration: 350 }
        };

        const vehicleTypes = {
            small: "Coupe / Sedan",
            mid: "Mid-Size / Crossover",
            large: "Large SUV / Truck"
        };

        // State State
        let currentSize = null;
        let currentBase = null;
        let totalPrice = 0;

        function updateConfig() {
            // Get Selected Size
            const sizeInput = document.querySelector('input[name="vehicleSize"]:checked');
            if (sizeInput) {
                currentSize = sizeInput.value;
                document.getElementById('preview-title').innerText = vehicleTypes[currentSize];
                document.getElementById('preview-desc').innerText = "Pricing updated for " + currentSize + " vehicle";
                activateSection('step-2');
                updateBasePricesDisplay();
            }

            // Get Selected Base Package
            const baseInput = document.querySelector('input[name="basePackage"]:checked');
            if (baseInput) {
                currentBase = baseInput.value;
                if(currentSize) activateSection('step-3');
                if(currentSize) activateSection('step-4');
                if(currentSize) activateSection('step-5');
            }

            // Calculate Total
            calculateTotal();
            
            // Visual Updates (Active States)
            document.querySelectorAll('input').forEach(input => {
                const card = input.closest('div') || input.parentElement.querySelector('div'); // Handle structure diffs
                if(input.checked) {
                    card.classList.add('border-amber-500', 'bg-neutral-800');
                    card.classList.remove('border-white/5');
                } else {
                    card.classList.remove('border-amber-500', 'bg-neutral-800');
                    card.classList.add('border-white/5');
                }
            });
        }

        function updateBasePricesDisplay() {
            if(!currentSize) return;
            document.querySelectorAll('.dynamic-price').forEach(el => {
                const type = el.dataset.type;
                el.innerText = '$' + basePrices[currentSize][type];
            });
        }

        function calculateTotal() {
            totalPrice = 0;
            const receiptContainer = document.getElementById('receipt-items');
            receiptContainer.innerHTML = '';

            // Base Price
            if (currentSize && currentBase) {
                const price = basePrices[currentSize][currentBase];
                totalPrice += price;
                addItemToReceipt('Base Detail', `$${price}`);
            }

            // Upgrades (Checkboxes)
            document.querySelectorAll('input[name="upgrade"]:checked').forEach(input => {
                const price = parseInt(input.dataset.price);
                totalPrice += price;
                // Get label text
                const label = input.closest('label').querySelector('h4').innerText;
                addItemToReceipt(label, `+$${price}`);
            });

            // Addons (Checkboxes)
            document.querySelectorAll('input[name="addon"]:checked').forEach(input => {
                const price = parseInt(input.dataset.price);
                totalPrice += price;
                const label = input.closest('label').querySelector('.text-sm').innerText;
                addItemToReceipt(label, `+$${price}`);
            });

            // Update Total Text
            document.getElementById('total-price').innerText = '$' + totalPrice;
        }

        function addItemToReceipt(name, price) {
            const div = document.createElement('div');
            div.className = 'flex justify-between text-neutral-300';
            div.innerHTML = `<span>${name}</span><span class="font-medium text-white">${price}</span>`;
            document.getElementById('receipt-items').appendChild(div);
        }

        function activateSection(id) {
            const el = document.getElementById(id);
            el.classList.remove('opacity-50', 'pointer-events-none');
            el.classList.add('opacity-100');
        }

        function scrollToBook() {
            document.getElementById('step-5').scrollIntoView({ behavior: 'smooth' });
        }
        
        // Prevent form submission for demo
        document.getElementById('booking-form').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Build Submitted! Total Investment: $' + totalPrice + '. We will contact you shortly.');
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass-panel border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex flex-col">
<span className="text-white font-semibold tracking-tighter text-lg uppercase">Professional Car Detailing</span>
<span className="text-xs text-neutral-500 tracking-widest uppercase">Colorado Springs</span>
</div>
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-white hover:text-amber-400 transition-colors" href="#configurator">
<span>Start Build</span>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</nav>

<header className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800/20 via-[#050505] to-[#050505] z-0"></div>
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay z-0"></div>
<div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-in">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
<span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
<span className="text-xs font-medium text-white tracking-widest uppercase">Colorado's Premier Studio</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-white tracking-tighter mb-6 leading-[0.9]">
                Precision <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-600">Defined.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                Experience the art of automotive restoration. Configure your detailing package like you would configure an exotic vehicle.
            </p>
<a className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-black font-semibold tracking-tight overflow-hidden transition-all hover:bg-neutral-200 rounded-sm" href="#configurator">
<span className="relative z-10 flex items-center gap-2">
                    Begin Configuration
                    <svg aria-hidden="true" className="iconify group-hover:translate-x-1 transition-transform iconify--lucide" data-icon="lucide:chevron-right" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m9 18l6-6l-6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</a>
</div>
</header>

<section className="border-y border-white/5 bg-neutral-900/20 backdrop-blur-sm py-8">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center">
<div className="text-2xl font-semibold text-white tracking-tight">1,000+</div>
<div className="text-xs text-neutral-500 uppercase tracking-wider mt-1">Vehicles perfected</div>
</div>
<div className="text-center">
<div className="text-2xl font-semibold text-white tracking-tight">5+ Years</div>
<div className="text-xs text-neutral-500 uppercase tracking-wider mt-1">Experience</div>
</div>
<div className="text-center">
<div className="text-2xl font-semibold text-white tracking-tight">100+</div>
<div className="text-xs text-neutral-500 uppercase tracking-wider mt-1">5-Star Reviews</div>
</div>
<div className="text-center">
<div className="text-2xl font-semibold text-white tracking-tight">100%</div>
<div className="text-xs text-neutral-500 uppercase tracking-wider mt-1">Satisfaction</div>
</div>
</div>
</section>

<main className="min-h-screen bg-[#050505] py-20 relative" id="configurator">
<div className="max-w-7xl mx-auto px-4 md:px-6">

<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

<div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6 order-2 lg:order-1">

<div className="glass-panel rounded-2xl p-8 aspect-[4/3] flex flex-col items-center justify-center relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-neutral-800/30 to-black pointer-events-none"></div>

<div className="relative z-10 w-48 h-20 border-b-2 border-white/20 rounded-t-full transition-all duration-500 flex items-center justify-center" id="car-silhouette">
<svg aria-hidden="true" className="iconify text-white/10 group-hover:text-white/20 transition-colors iconify--lucide" data-icon="lucide:car" data-width="120" height="120" role="img" viewbox="0 0 24 24" width="120" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path className="" d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><path d="M9 17h6"></path><circle cx="17" cy="17" r="2"></circle></g></svg>
</div>
<div className="relative z-10 mt-8 text-center">
<h3 className="text-white font-medium text-lg tracking-tight" id="preview-title">Select Vehicle</h3>
<p className="text-neutral-500 text-sm mt-1" id="preview-desc">Ready to build</p>
</div>

<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]"></div>
</div>

<div className="glass-panel rounded-2xl p-6 border border-amber-500/10">
<div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
<span className="text-sm font-medium text-neutral-400 uppercase tracking-wider">Build Summary</span>
<svg aria-hidden="true" className="iconify text-amber-500 iconify--lucide" data-icon="lucide:shield-check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
</div>
<div className="space-y-3 text-sm" id="receipt-items">

<div className="text-neutral-500 italic">Select a vehicle size to begin...</div>
</div>
<div className="mt-6 pt-4 border-t border-white/10 flex items-end justify-between">
<div className="flex flex-col">
<span className="text-xs text-neutral-500 uppercase">Estimated Total</span>
<span className="text-3xl font-semibold text-white tracking-tight" id="total-price">$0</span>
</div>
<button className="lg:hidden bg-amber-500 text-black px-4 py-2 rounded font-medium text-xs uppercase tracking-wide" id="mobile-book-btn" onclick="scrollToBook()">
                                Book Now
                            </button>
</div>
</div>
</div>

<div className="lg:col-span-8 order-1 lg:order-2 space-y-16">

<section className="animate-fade-in" id="step-1">
<div className="flex items-center gap-4 mb-6">
<span className="flex items-center justify-center w-8 h-8 rounded-full border border-amber-500/30 text-amber-500 text-xs font-bold">01</span>
<h2 className="text-2xl text-white font-light tracking-tight">Vehicle Profile</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<label className="cursor-pointer group">
<input name="vehicleSize" onchange="updateConfig()" type="radio" value="small"/>
<div className="glass-panel p-6 rounded-xl border border-white/5 group-hover:border-amber-500/50 transition-all h-full flex flex-col items-center justify-center text-center relative overflow-hidden">
<div className="absolute inset-0 bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<svg aria-hidden="true" className="iconify text-neutral-400 mb-4 group-hover:text-white transition-colors iconify--lucide" data-icon="lucide:car-front" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m21 8l-2 2l-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10L3 8m4 6h.01M17 14h.01"></path><rect height="8" rx="2" width="18" x="3" y="10"></rect><path d="M5 18v2m14-2v2"></path></g></svg>
<h3 className="text-white font-medium">Coupe / Sedan</h3>
<p className="text-xs text-neutral-500 mt-2">2-4 Door Compact</p>
</div>
</label>

<label className="cursor-pointer group">
<input name="vehicleSize" onchange="updateConfig()" type="radio" value="mid"/>
<div className="glass-panel p-6 rounded-xl border border-white/5 group-hover:border-amber-500/50 transition-all h-full flex flex-col items-center justify-center text-center relative overflow-hidden">
<div className="absolute inset-0 bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<svg aria-hidden="true" className="iconify text-neutral-400 mb-4 group-hover:text-white transition-colors iconify--lucide" data-icon="lucide:car" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><path d="M9 17h6"></path><circle cx="17" cy="17" r="2"></circle></g></svg>
<h3 className="text-white font-medium">Mid-Size / Crossover</h3>
<p className="text-xs text-neutral-500 mt-2">Standard SUV</p>
</div>
</label>

<label className="cursor-pointer group">
<input name="vehicleSize" onchange="updateConfig()" type="radio" value="large"/>
<div className="glass-panel p-6 rounded-xl border border-white/5 group-hover:border-amber-500/50 transition-all h-full flex flex-col items-center justify-center text-center relative overflow-hidden">
<div className="absolute inset-0 bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<svg aria-hidden="true" className="iconify text-neutral-400 mb-4 group-hover:text-white transition-colors iconify--lucide" data-icon="lucide:truck" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2m10 0H9m10 0h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></g></svg>
<h3 className="text-white font-medium">Large SUV / Truck</h3>
<p className="text-xs text-neutral-500 mt-2">3-Row or Truck</p>
</div>
</label>
</div>
</section>

<section className="opacity-50 pointer-events-none transition-opacity duration-500" id="step-2">
<div className="flex items-center gap-4 mb-6">
<span className="flex items-center justify-center w-8 h-8 rounded-full border border-white/10 text-neutral-500 text-xs font-bold">02</span>
<h2 className="text-2xl text-white font-light tracking-tight">Detail Foundation</h2>
</div>
<div className="space-y-4">

<label className="cursor-pointer group block">
<input name="basePackage" onchange="updateConfig()" type="radio" value="interior"/>
<div className="glass-panel p-6 rounded-xl border border-white/5 hover:border-amber-500/30 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4">
<div>
<h3 className="text-lg text-white font-medium">Interior Precision Detail</h3>
<p className="text-sm text-neutral-400 mt-1 max-w-lg">Deep clean of all surfaces, steam cleaning, leather conditioning, and vacuuming. A reset button for your cabin.</p>
</div>
<div className="text-right">
<div className="text-xl font-medium text-amber-400 dynamic-price" data-type="interior">$150+</div>
</div>
</div>
</label>

<label className="cursor-pointer group block">
<input name="basePackage" onchange="updateConfig()" type="radio" value="combined"/>
<div className="glass-panel p-6 rounded-xl border border-white/5 hover:border-amber-500/30 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4">
<div>
<h3 className="text-lg text-white font-medium">Interior + Exterior Detail</h3>
<p className="text-sm text-neutral-400 mt-1 max-w-lg">The complete package. Includes deep interior cleaning plus exterior hand wash, clay decontamination, and spray sealant.</p>
</div>
<div className="text-right">
<div className="text-xl font-medium text-amber-400 dynamic-price" data-type="combined">$200+</div>
</div>
</div>
</label>

<label className="cursor-pointer group block">
<input name="basePackage" onchange="updateConfig()" type="radio" value="restoration"/>
<div className="glass-panel p-6 rounded-xl border border-amber-500/20 hover:border-amber-500/60 transition-all relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-4">
<div className="absolute top-0 right-0 bg-amber-500/20 text-amber-400 text-[10px] font-bold uppercase px-2 py-1 tracking-widest">Recommended</div>
<div>
<h3 className="text-lg text-white font-medium">Full Restoration Detail</h3>
<p className="text-sm text-neutral-400 mt-1 max-w-lg">Showroom reset. Includes everything in Combined + iron decontamination, 1-step gloss enhancement, and premium sealant.</p>
</div>
<div className="text-right">
<div className="text-xl font-medium text-amber-400 dynamic-price" data-type="restoration">$250+</div>
</div>
</div>
</label>
</div>
</section>

<section className="opacity-50 pointer-events-none transition-opacity duration-500" id="step-3">
<div className="flex items-center gap-4 mb-6">
<span className="flex items-center justify-center w-8 h-8 rounded-full border border-white/10 text-neutral-500 text-xs font-bold">03</span>
<h2 className="text-2xl text-white font-light tracking-tight">Performance &amp; Protection</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<label className="cursor-pointer group">
<input data-price="300" name="upgrade" onchange="updateConfig()" type="checkbox" value="correction1"/>
<div className="glass-panel p-5 rounded-xl border border-white/5 hover:border-amber-500/30 transition-all h-full">
<div className="flex justify-between items-start mb-2">
<svg aria-hidden="true" className="iconify text-neutral-400 iconify--lucide" data-icon="lucide:sparkles" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg>
<span className="text-amber-400 font-medium">+$300</span>
</div>
<h4 className="text-white font-medium">1-Step Paint Correction</h4>
<p className="text-xs text-neutral-400 mt-2 leading-relaxed">Removes 50-70% of swirls/defects. Increases gloss significantly.</p>
</div>
</label>

<label className="cursor-pointer group">
<input data-price="500" name="upgrade" onchange="updateConfig()" type="checkbox" value="correction2"/>
<div className="glass-panel p-5 rounded-xl border border-white/5 hover:border-amber-500/30 transition-all h-full">
<div className="flex justify-between items-start mb-2">
<svg aria-hidden="true" className="iconify text-neutral-400 iconify--lucide" data-icon="lucide:layers" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></g></svg>
<span className="text-amber-400 font-medium">+$500</span>
</div>
<h4 className="text-white font-medium">2-Step Paint Correction</h4>
<p className="text-xs text-neutral-400 mt-2 leading-relaxed">Multi-stage compounding &amp; polishing. Removes deep scratches for mirror finish.</p>
</div>
</label>

<label className="cursor-pointer group">
<input data-price="300" name="upgrade" onchange="updateConfig()" type="checkbox" value="ceramic3"/>
<div className="glass-panel p-5 rounded-xl border border-white/5 hover:border-amber-500/30 transition-all h-full relative overflow-hidden">
<div className="absolute -right-4 -top-4 w-16 h-16 bg-blue-500/10 rounded-full blur-xl"></div>
<div className="flex justify-between items-start mb-2">
<svg aria-hidden="true" className="iconify text-neutral-400 iconify--lucide" data-icon="lucide:shield" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-amber-400 font-medium">+$300</span>
</div>
<h4 className="text-white font-medium">3-Year Ceramic Coating</h4>
<p className="text-xs text-neutral-400 mt-2 leading-relaxed">Semi-permanent bond. Extreme hydrophobicity and chemical resistance.</p>
</div>
</label>

<label className="cursor-pointer group">
<input data-price="500" name="upgrade" onchange="updateConfig()" type="checkbox" value="ceramic5"/>
<div className="glass-panel p-5 rounded-xl border border-white/5 hover:border-amber-500/30 transition-all h-full relative overflow-hidden">
<div className="absolute -right-4 -top-4 w-16 h-16 bg-amber-500/10 rounded-full blur-xl"></div>
<div className="flex justify-between items-start mb-2">
<svg aria-hidden="true" className="iconify text-neutral-400 iconify--lucide" data-icon="lucide:shield-check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
<span className="text-amber-400 font-medium">+$500</span>
</div>
<h4 className="text-white font-medium">5-Year Ceramic Coating</h4>
<p className="text-xs text-neutral-400 mt-2 leading-relaxed">Professional grade protection. Maximum depth, hardness, and durability.</p>
</div>
</label>
</div>
</section>

<section className="opacity-50 pointer-events-none transition-opacity duration-500" id="step-4">
<div className="flex items-center gap-4 mb-6">
<span className="flex items-center justify-center w-8 h-8 rounded-full border border-white/10 text-neutral-500 text-xs font-bold">04</span>
<h2 className="text-2xl text-white font-light tracking-tight">Precision Add-Ons</h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-3">
<label className="cursor-pointer group">
<input data-price="75" name="addon" onchange="updateConfig()" type="checkbox" value="pet"/>
<div className="p-4 rounded-lg border border-white/5 bg-neutral-900/40 hover:bg-neutral-800 transition-colors text-center">
<div className="text-xs text-amber-400 mb-1">+$75</div>
<div className="text-sm text-white">Pet Hair Removal</div>
</div>
</label>
<label className="cursor-pointer group">
<input data-price="50" name="addon" onchange="updateConfig()" type="checkbox" value="engine"/>
<div className="p-4 rounded-lg border border-white/5 bg-neutral-900/40 hover:bg-neutral-800 transition-colors text-center">
<div className="text-xs text-amber-400 mb-1">+$50</div>
<div className="text-sm text-white">Engine Bay</div>
</div>
</label>
<label className="cursor-pointer group">
<input data-price="75" name="addon" onchange="updateConfig()" type="checkbox" value="headlight"/>
<div className="p-4 rounded-lg border border-white/5 bg-neutral-900/40 hover:bg-neutral-800 transition-colors text-center">
<div className="text-xs text-amber-400 mb-1">+$75</div>
<div className="text-sm text-white">Headlights</div>
</div>
</label>
<label className="cursor-pointer group">
<input data-price="100" name="addon" onchange="updateConfig()" type="checkbox" value="odor"/>
<div className="p-4 rounded-lg border border-white/5 bg-neutral-900/40 hover:bg-neutral-800 transition-colors text-center">
<div className="text-xs text-amber-400 mb-1">+$100</div>
<div className="text-sm text-white">Ozone/Odor</div>
</div>
</label>
</div>
</section>

<section className="opacity-50 pointer-events-none transition-opacity duration-500 pb-20" id="step-5">
<div className="flex items-center gap-4 mb-6">
<span className="flex items-center justify-center w-8 h-8 rounded-full border border-amber-500 text-amber-500 text-xs font-bold">05</span>
<h2 className="text-2xl text-white font-light tracking-tight">Secure Your Slot</h2>
</div>
<div className="glass-panel p-8 rounded-xl border border-amber-500/10">
<form className="space-y-6" id="booking-form">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs text-neutral-500 uppercase tracking-widest">Full Name</label>
<input className="w-full bg-neutral-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors" placeholder="John Doe" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs text-neutral-500 uppercase tracking-widest">Phone Number</label>
<input className="w-full bg-neutral-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors" placeholder="(719) 394-9456" required="" type="tel"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs text-neutral-500 uppercase tracking-widest">Email Address</label>
<input className="w-full bg-neutral-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors" placeholder="peak.precision.detailing@gmail.com" required="" type="email"/>
</div>
<div className="space-y-2">
<label className="text-xs text-neutral-500 uppercase tracking-widest">Preferred Date</label>
<div className="grid grid-cols-3 gap-2">

<button className="border border-white/10 bg-neutral-800/50 hover:bg-neutral-800 rounded-lg p-3 text-center transition-colors focus:border-amber-500 focus:bg-amber-500/10" type="button">
<div className="text-xs text-neutral-400">Tomorrow</div>
<div className="font-medium text-white">9:00 AM</div>
</button>
<button className="border border-white/10 bg-neutral-800/50 hover:bg-neutral-800 rounded-lg p-3 text-center transition-colors focus:border-amber-500 focus:bg-amber-500/10" type="button">
<div className="text-xs text-neutral-400">Tomorrow</div>
<div className="font-medium text-white">1:00 PM</div>
</button>
<button className="border border-white/10 bg-neutral-800/50 hover:bg-neutral-800 rounded-lg p-3 text-center transition-colors focus:border-amber-500 focus:bg-amber-500/10" type="button">
<div className="text-xs text-neutral-400">Next Available</div>
<div className="font-medium text-white">Select</div>
</button>
</div>
</div>
<button className="w-full bg-white text-black font-bold uppercase tracking-wide py-4 rounded hover:bg-neutral-200 transition-colors mt-4" type="submit">
                                    Confirm Build Request
                                </button>
<p className="text-center text-xs text-neutral-500">You will not be charged yet. We will call to confirm details.</p>
</form>
</div>
</section>
</div>
</div>
</div>
</main>

<footer className="bg-black border-white/10 border-t pt-12 pb-12">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-white font-semibold tracking-tighter text-xl uppercase mb-2">Professional Car Detailing</h2>
<p className="text-neutral-500 text-sm mb-6">Colorado Springs, CO</p>
<div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
<a className="text-neutral-400 hover:text-white transition-colors text-sm" href="tel:+17193949456">+1 (719) 394-9456</a>
<a className="text-neutral-400 hover:text-white transition-colors text-sm" href="mailto:peak.precision.detailing@gmail.com">peak.precision.detailing@gmail.com</a>
</div>
<div className="text-xs text-neutral-700 uppercase tracking-widest">
                © 2024 Professional Car Detailing. All Rights Reserved.
            </div>
</div>
</footer>



    </>
  );
}
