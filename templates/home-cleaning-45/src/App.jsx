import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // DOM Elements
        const slider = document.getElementById('size-slider');
        const bedroomDisplay = document.getElementById('bedrooms-display');
        const priceDisplay = document.getElementById('price-display');
        const finalPriceDisplay = document.getElementById('final-price');
        const summaryService = document.getElementById('summary-service');
        const summaryExtras = document.getElementById('summary-extras');
        const progressBar = document.getElementById('progress-bar');
        const stepIndicator = document.getElementById('step-indicator');
        
        // State
        let currentBedrooms = 1;
        let basePrice = 80;
        
        // Mappings
        const getBedrooms = (val) => {
            if (val < 15) return 0; // Studio
            if (val < 35) return 1;
            if (val < 55) return 2;
            if (val < 75) return 3;
            if (val < 90) return 4;
            return 5;
        };

        const getBedroomLabel = (count) => count === 0 ? "Studio" : count === 5 ? "Mansion" : `${count} Bedroom${count > 1 ? 's' : ''}`;
        
        // Calculator
        function updatePrice() {
            const val = parseInt(slider.value);
            const bedrooms = getBedrooms(val);
            currentBedrooms = bedrooms;
            
            // Base Calculation
            let price = basePrice + (bedrooms * 30);
            
            // Service Type
            const type = document.querySelector('input[name="service_type"]:checked').value;
            if (type === 'deep') price = price * 1.4;
            
            // Extras
            let extraTotal = 0;
            let extrasLabels = [];
            document.querySelectorAll('input[type="checkbox"]:checked').forEach(cb => {
                extraTotal += parseInt(cb.value);
                extrasLabels.push(cb.nextElementSibling.nextElementSibling.innerText.split('\n')[0]);
            });
            price += extraTotal;

            // Update UI with animation
            bedroomDisplay.innerText = getBedroomLabel(bedrooms);
            const formattedPrice = Math.round(price);
            
            // Simple counter animation
            let currentDisplay = parseInt(priceDisplay.innerText);
            if(currentDisplay !== formattedPrice) {
                priceDisplay.innerText = formattedPrice;
            }
            finalPriceDisplay.innerText = formattedPrice;
            
            // Update Summary Text
            const typeLabel = type === 'standard' ? 'Standard' : 'Deep Clean';
            summaryService.innerText = `${getBedroomLabel(bedrooms)}, ${typeLabel}`;
            summaryExtras.innerText = extrasLabels.length > 0 ? extrasLabels.join(', ') : 'None';
        }

        // Event Listeners
        slider.addEventListener('input', updatePrice);
        
        // Date Selection Visual Logic
        document.querySelectorAll('.date-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.date-btn').forEach(b => {
                    b.classList.remove('ring-2', 'ring-neutral-900', 'ring-offset-2', 'active-date', 'border-neutral-900');
                    b.classList.add('border-neutral-200');
                });
                this.classList.remove('border-neutral-200');
                this.classList.add('ring-2', 'ring-neutral-900', 'ring-offset-2', 'active-date', 'border-neutral-900');
            });
        });

        // Step Navigation
        function goToStep(step) {
            document.querySelectorAll('.step-content').forEach(el => el.classList.remove('active'));
            setTimeout(() => {
                document.getElementById(`step-${step}`).classList.add('active');
            }, 100);
            
            // Visual Updates
            if(step === 1) {
                progressBar.style.width = '33%';
                stepIndicator.innerHTML = 'Step <span class="text-neutral-900 font-bold">1</span> / 2';
            } else if(step === 2) {
                progressBar.style.width = '66%';
                stepIndicator.innerHTML = 'Step <span class="text-neutral-900 font-bold">2</span> / 2';
            }
        }

        function completeBooking() {
            progressBar.style.width = '100%';
            stepIndicator.innerHTML = '<span class="text-green-600 font-bold">Confirmed</span>';
            
            document.querySelectorAll('.step-content').forEach(el => el.classList.remove('active'));
            document.getElementById('step-success').classList.remove('hidden');
            setTimeout(() => {
                 document.getElementById('step-success').classList.add('active');
            }, 50);
        }

        function resetBooking() {
            slider.value = 20;
            document.querySelector('input[value="standard"]').checked = true;
            document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
            updatePrice();
            
            document.getElementById('step-success').classList.remove('active');
            document.getElementById('step-success').classList.add('hidden');
            goToStep(1);
        }

        // Intersection Observer for Scroll Animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        // Initialize
        updatePrice();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 backdrop-blur-xl border-b transition-all duration-300 bg-white/70 border-neutral-200/50">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="text-lg tracking-tighter font-bold flex items-center gap-2 group text-neutral-900" href="#">
<div className="p-1 rounded-md group-hover:rotate-12 transition-transform duration-300 bg-neutral-900 text-white">
<svg aria-hidden="true" data-icon="lucide:sparkles" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg>
</div>
                PURE.
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-500">
<a className="transition-colors hover:text-neutral-900" href="#features">Features</a>
<a className="transition-colors hover:text-neutral-900" href="#reviews">Reviews</a>
<a className="transition-colors hover:text-neutral-900" href="#faq">FAQ</a>
</div>
<div className="flex items-center gap-4">
<button className="text-xs font-semibold px-5 py-2.5 rounded-full transition-all flex items-center gap-2 group hover:shadow-lg active:scale-95 bg-neutral-900 text-white hover:bg-neutral-800" onclick="document.getElementById('booking-widget').scrollIntoView({behavior: 'smooth'})">
                    Book Now
                    <svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none z-0">
<div className="absolute top-0 right-[20%] w-[500px] h-[500px] rounded-full mix-blend-multiply filter blur-[80px] opacity-40 animate-blob bg-blue-100"></div>
<div className="absolute top-[10%] left-[10%] w-[400px] h-[400px] rounded-full mix-blend-multiply filter blur-[80px] opacity-40 animate-blob animation-delay-2000 bg-indigo-100"></div>
<div className="absolute bottom-[20%] left-[30%] w-[300px] h-[300px] rounded-full mix-blend-multiply filter blur-[80px] opacity-40 animate-blob animation-delay-4000 bg-blue-50"></div>
</div>
<div className="reveal active text-center max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border shadow-[0_2px_10px_-3px_rgba(0,0,0,0.1)] mb-8 backdrop-blur-sm transition-transform hover:scale-105 cursor-default bg-white/80 border-neutral-200">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-cyan-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
</span>
<span className="text-xs font-medium text-neutral-600">Available for same-day booking</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-8 max-w-4xl mx-auto leading-[1.1] text-neutral-900">
                A spotless home, 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 via-neutral-600 to-neutral-400">without the friction.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-500 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
                Instant pricing, bonded professionals, and a 100% satisfaction guarantee. Experience the future of home keeping.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<button className="h-12 px-8 rounded-full font-medium text-sm transition-all hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 bg-neutral-900 text-white hover:bg-neutral-800" onclick="document.getElementById('booking-widget').scrollIntoView({behavior: 'smooth'})">
                    Get Started
                    <svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<button className="h-12 px-8 rounded-full border font-medium text-sm transition-all flex items-center gap-2 bg-white border-neutral-200 text-neutral-600 hover:bg-neutral-50 hover:border-neutral-300">
<svg aria-hidden="true" data-icon="lucide:play-circle" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
                    How it works
                </button>
</div>

<div className="mt-20 pt-8 border-t opacity-60 border-neutral-100">
<p className="text-xs font-semibold uppercase tracking-widest mb-6 text-neutral-400">Trusted by teams at</p>
<div className="flex justify-center items-center gap-8 md:gap-16 grayscale opacity-50">
<div className="flex items-center gap-1 font-bold text-lg"><svg aria-hidden="true" data-icon="lucide:hexagon" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Acme</div>
<div className="flex items-center gap-1 font-bold text-lg"><svg aria-hidden="true" data-icon="lucide:triangle" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Vercel</div>
<div className="flex items-center gap-1 font-bold text-lg"><svg aria-hidden="true" data-icon="lucide:box" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7l8.7 5l8.7-5M12 22V12"></path></g></svg> Linear</div>
<div className="flex items-center gap-1 font-bold text-lg"><svg aria-hidden="true" data-icon="lucide:circle" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" fill="none" r="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle></svg> Stripe</div>
</div>
</div>
</div>
</section>

<section className="md:py-28 border-y pt-20 pb-20 bg-neutral-50/50 border-neutral-200" id="booking-widget">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-12 gap-16 items-start">

<div className="lg:col-span-5 space-y-10 pt-4 reveal">
<div>
<h2 className="text-3xl font-semibold tracking-tight mb-4 text-neutral-900">Configure your clean.</h2>
<p className="text-neutral-500 text-lg leading-relaxed">
                            Customize every detail of your service. Our smart pricing engine gives you an exact quote instantly—no hidden fees, no surprises.
                        </p>
</div>
<div className="space-y-4">
<div className="flex gap-4 p-4 rounded-2xl border shadow-sm hover:shadow-md transition-shadow bg-white border-neutral-100">
<div className="h-10 w-10 rounded-full flex items-center justify-center shrink-0 bg-indigo-50 text-indigo-600">
<svg aria-hidden="true" data-icon="lucide:shield-check" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
</div>
<div>
<h3 className="text-base font-semibold text-neutral-900">Identity Verified</h3>
<p className="text-sm text-neutral-500 mt-1">Every cleaner is background checked &amp; interviewed in person.</p>
</div>
</div>
<div className="flex gap-4 p-4 rounded-2xl border shadow-sm hover:shadow-md transition-shadow bg-white border-neutral-100">
<div className="h-10 w-10 rounded-full flex items-center justify-center shrink-0 bg-blue-50 text-blue-600">
<svg aria-hidden="true" data-icon="lucide:wallet" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></g></svg>
</div>
<div>
<h3 className="text-base font-semibold text-neutral-900">Cashless Payment</h3>
<p className="text-sm text-neutral-500 mt-1">Secure automatic payments only released after the job is done.</p>
</div>
</div>
<div className="flex gap-4 p-4 rounded-2xl border shadow-sm hover:shadow-md transition-shadow bg-white border-neutral-100">
<div className="h-10 w-10 rounded-full flex items-center justify-center shrink-0 bg-cyan-50 text-cyan-600">
<svg aria-hidden="true" data-icon="lucide:clock" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
</div>
<div>
<h3 className="text-base font-semibold text-neutral-900">Save Time</h3>
<p className="text-sm text-neutral-500 mt-1">Reclaim your weekends. Average customer saves 4 hours/week.</p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-7 relative reveal">

<div className="absolute -inset-4 bg-gradient-to-r rounded-[2rem] blur-xl opacity-70 from-indigo-200/40 via-blue-200/40 to-blue-200/40"></div>
<div className="relative border rounded-2xl shadow-2xl backdrop-blur-xl overflow-hidden ring-1 bg-white/90 border-white/50 ring-neutral-200">

<div className="h-1 w-full bg-neutral-100">
<div className="h-full bg-gradient-to-r transition-all duration-700 ease-in-out from-neutral-900 to-neutral-700" id="progress-bar" style={{width: '33%'}}></div>
</div>
<div className="p-6 md:p-10">

<div className="flex justify-between items-end mb-10 pb-6 border-b border-neutral-100">
<div className="">
<div className="text-[11px] font-bold uppercase tracking-widest mb-1 text-neutral-400">Total Estimate</div>
<div className="flex items-baseline gap-1">
<span className="text-2xl font-medium text-neutral-400">$</span>
<span className="text-5xl font-semibold tracking-tighter text-neutral-900" id="price-display">110</span>
<span className="text-xl font-medium ml-1 text-neutral-400">.00</span>
</div>
</div>
<div className="text-sm font-medium px-3 py-1 rounded-full border text-neutral-400 bg-neutral-50 border-neutral-100" id="step-indicator">
                                    Step <span className="font-bold text-neutral-900">1</span> / 2
                                </div>
</div>

<div className="step-content active space-y-10" id="step-1">

<div>
<div className="flex justify-between items-center mb-6">
<label className="text-sm font-semibold flex items-center gap-2 text-neutral-900">
<svg aria-hidden="true" data-icon="lucide:home" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></g></svg>
                                            Home Size
                                        </label>
<span className="text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-full ring-1 text-indigo-600 bg-indigo-50 ring-indigo-100" id="bedrooms-display">1 Bedroom</span>
</div>
<div className="px-2">
<input className="w-full h-1 appearance-none cursor-pointer rounded-lg bg-neutral-100" id="size-slider" max="100" min="0" type="range" value="20"/>
</div>
<div className="flex justify-between text-[10px] uppercase tracking-wider mt-4 font-semibold px-1 text-neutral-400">
<span>Studio</span>
<span>2 Bed</span>
<span>4 Bed</span>
<span>Mansion</span>
</div>
</div>

<div>
<label className="text-sm font-semibold mb-4 block flex items-center gap-2 text-neutral-900">
<svg aria-hidden="true" data-icon="lucide:sparkles" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg>
                                        Service Level
                                    </label>
<div className="grid grid-cols-2 gap-4">
<label className="cursor-pointer group relative">
<input checked="" className="peer sr-only" name="service_type" onchange="updatePrice()" type="radio" value="standard"/>
<div className="h-full border rounded-2xl p-5 peer-checked:border-neutral-900 peer-checked:ring-1 peer-checked:ring-neutral-900 peer-checked:bg-neutral-50 transition-all duration-200 hover:shadow-md border-neutral-200 hover:border-neutral-300 bg-white">
<div className="flex justify-between items-start mb-3">
<span className="font-semibold text-neutral-900">Standard</span>
</div>
<p className="text-xs text-neutral-500 leading-relaxed">Dusting, floors, surfaces &amp; bathroom sanitation.</p>
</div>
<div className="absolute top-4 right-4 opacity-0 peer-checked:opacity-100 transition-opacity transform scale-50 peer-checked:scale-100 text-neutral-900">
<svg aria-hidden="true" data-icon="lucide:check-circle-2" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
</div>
</label>
<label className="cursor-pointer group relative">
<input className="peer sr-only" name="service_type" onchange="updatePrice()" type="radio" value="deep"/>
<div className="h-full border rounded-2xl p-5 peer-checked:border-neutral-900 peer-checked:ring-1 peer-checked:ring-neutral-900 peer-checked:bg-neutral-50 transition-all duration-200 hover:shadow-md border-neutral-200 hover:border-neutral-300 bg-white">
<div className="flex justify-between items-start mb-3">
<span className="font-semibold text-neutral-900">Deep Clean</span>
</div>
<p className="text-xs text-neutral-500 leading-relaxed">Includes baseboards, grime, and appliances.</p>
</div>
<div className="absolute top-4 right-4 opacity-0 peer-checked:opacity-100 transition-opacity transform scale-50 peer-checked:scale-100 text-neutral-900">
<svg aria-hidden="true" data-icon="lucide:check-circle-2" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
</div>
</label>
</div>
</div>

<div>
<label className="text-sm font-semibold mb-4 block flex items-center gap-2 text-neutral-900">
<svg aria-hidden="true" data-icon="lucide:plus-circle" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8m-4-4v8"></path></g></svg>
                                        Extras
                                    </label>
<div className="grid sm:grid-cols-2 gap-3">
<label className="flex items-center justify-between p-4 border rounded-xl cursor-pointer transition-all checkbox-wrapper group hover:bg-neutral-50 border-neutral-200 bg-white hover:border-neutral-300">
<div className="flex items-center gap-3">
<div className="relative flex items-center justify-center w-5 h-5">
<input className="peer appearance-none w-5 h-5 border rounded checked:bg-neutral-900 checked:border-neutral-900 transition-colors border-neutral-300" id="extra-fridge" onchange="updatePrice()" type="checkbox" value="25"/>
<svg aria-hidden="true" data-icon="lucide:check" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-sm font-medium text-neutral-700">Inside Fridge</span>
</div>
<span className="text-xs font-bold group-hover:text-neutral-600 text-neutral-400">+$25</span>
</label>
<label className="flex items-center justify-between p-4 border rounded-xl cursor-pointer transition-all checkbox-wrapper group hover:bg-neutral-50 border-neutral-200 bg-white hover:border-neutral-300">
<div className="flex items-center gap-3">
<div className="relative flex items-center justify-center w-5 h-5">
<input className="peer appearance-none w-5 h-5 border rounded checked:bg-neutral-900 checked:border-neutral-900 transition-colors border-neutral-300" id="extra-windows" onchange="updatePrice()" type="checkbox" value="40"/>
<svg aria-hidden="true" data-icon="lucide:check" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-sm font-medium text-neutral-700">Interior Windows</span>
</div>
<span className="text-xs font-bold group-hover:text-neutral-600 text-neutral-400">+$40</span>
</label>
</div>
</div>
<button className="w-full py-4 rounded-xl font-semibold text-sm transition-all shadow-lg flex items-center justify-center gap-2 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 mt-6 group shadow-neutral-900/10 bg-neutral-900 text-white hover:bg-neutral-800 hover:shadow-neutral-900/20" onclick="goToStep(2)">
                                    Continue to Scheduling
                                    <svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>

<div className="step-content space-y-8" id="step-2">
<button className="text-xs font-bold uppercase tracking-wide flex items-center gap-1 mb-6 transition-colors group text-neutral-400 hover:text-neutral-900" onclick="goToStep(1)">
<svg aria-hidden="true" data-icon="lucide:arrow-left" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="m12 19l-7-7l7-7m7 7H5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Back to config
                                </button>
<div>
<label className="text-sm font-semibold mb-4 block text-neutral-900">Select Date</label>

<div className="grid grid-cols-4 gap-3">
<button className="date-btn p-4 border rounded-xl text-center transition-all focus:outline-none ring-2 ring-offset-2 active-date shadow-sm hover:border-neutral-900 hover:bg-neutral-50 border-neutral-200 bg-white ring-neutral-900">
<div className="text-[10px] font-bold uppercase mb-1 text-neutral-400">Mon</div>
<div className="text-lg font-bold text-neutral-900">12</div>
</button>
<button className="date-btn p-4 border rounded-xl text-center transition-all focus:outline-none hover:shadow-md hover:border-neutral-900 hover:bg-neutral-50 border-neutral-200 bg-white">
<div className="text-[10px] font-bold uppercase mb-1 text-neutral-400">Tue</div>
<div className="text-lg font-bold text-neutral-900">13</div>
</button>
<button className="date-btn p-4 border rounded-xl text-center transition-all focus:outline-none hover:shadow-md hover:border-neutral-900 hover:bg-neutral-50 border-neutral-200 bg-white">
<div className="text-[10px] font-bold uppercase mb-1 text-neutral-400">Wed</div>
<div className="text-lg font-bold text-neutral-900">14</div>
</button>
<button className="date-btn p-4 border rounded-xl text-center transition-all focus:outline-none hover:shadow-md hover:border-neutral-900 hover:bg-neutral-50 border-neutral-200 bg-white">
<div className="text-[10px] font-bold uppercase mb-1 text-neutral-400">Thu</div>
<div className="text-lg font-bold text-neutral-900">15</div>
</button>
</div>
</div>
<div>
<label className="text-sm font-semibold mb-4 block text-neutral-900">Select Time</label>
<div className="relative">
<select className="w-full p-4 pl-10 border rounded-xl text-sm font-medium focus:ring-2 focus:ring-neutral-900 focus:border-neutral-900 outline-none appearance-none transition-colors cursor-pointer bg-white border-neutral-200 hover:border-neutral-300">
<option>09:00 AM - Morning Arrival</option>
<option>11:00 AM - Late Morning</option>
<option>02:00 PM - Afternoon</option>
</select>
<svg aria-hidden="true" data-icon="lucide:clock" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
<svg aria-hidden="true" data-icon="lucide:chevron-down" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
<div className="p-5 rounded-2xl border space-y-3 bg-neutral-50/80 border-neutral-100">
<div className="flex justify-between text-sm">
<span className="text-neutral-500">Service</span>
<span className="font-semibold text-neutral-900" id="summary-service">1 Bedroom, Standard</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-neutral-500">Extras</span>
<span className="font-semibold text-neutral-900" id="summary-extras">None</span>
</div>
<div className="border-t my-2 pt-3 flex justify-between items-center border-neutral-200">
<span className="font-bold text-neutral-900">Total Due</span>
<span className="font-bold text-xl text-neutral-900">$<span id="final-price">110</span></span>
</div>
</div>
<button className="w-full py-4 rounded-xl font-semibold text-sm transition-all shadow-lg flex items-center justify-center gap-2 hover:shadow-xl active:scale-[0.98] group shadow-neutral-900/10 bg-neutral-900 text-white hover:bg-neutral-800 hover:shadow-neutral-900/20" onclick="completeBooking()">
                                    Confirm Booking
                                    <svg aria-hidden="true" data-icon="lucide:check-circle" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg>
</button>
<p className="text-center text-[11px] font-medium flex items-center justify-center gap-1.5 text-neutral-400">
<svg aria-hidden="true" data-icon="lucide:lock" data-width="10" height="10" role="img" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></g></svg>
                                    Payment secured by Stripe. Card is not charged until service completes.
                                </p>
</div>

<div className="step-content text-center py-16 hidden" id="step-success">
<div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce ring-4 bg-green-50 ring-green-50/50">
<svg aria-hidden="true" data-icon="lucide:check" data-width="40" height="40" role="img" viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-2xl font-bold tracking-tight mb-3 text-neutral-900">You're all set!</h3>
<p className="text-neutral-500 mb-10 max-w-xs mx-auto text-sm leading-relaxed">
                                    We've sent a confirmation email to <span className="font-medium text-neutral-900">you@example.com</span>. Our pro will arrive on <span className="font-bold text-neutral-900">Thursday the 15th</span>.
                                </p>
<button className="px-8 py-3 border rounded-full text-sm font-semibold transition-all border-neutral-200 hover:bg-neutral-50 hover:border-neutral-300 text-neutral-700" onclick="resetBooking()">
                                    Book another clean
                                </button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-white" id="reviews">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-neutral-900">Loved by locals.</h2>
<p className="text-neutral-500">Don't just take our word for it. Rated 4.9/5 by 2,000+ happy homes.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="p-8 rounded-2xl border hover-card shadow-sm reveal delay-100 border-neutral-100 bg-white">
<div className="flex mb-4 gap-0.5 text-amber-400">
<svg aria-hidden="true" data-icon="lucide:star" data-inline="false" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="mb-6 leading-relaxed text-neutral-600">"Absolutely transformed my apartment. The deep clean was worth every penny. I didn't realize how dusty my baseboards were until they were sparkling."</p>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full flex items-center justify-center text-sm font-bold bg-neutral-100 text-neutral-600">SJ</div>
<div>
<div className="text-sm font-semibold text-neutral-900">Sarah Jenkins</div>
<div className="text-xs text-neutral-400">Standard Clean • 2 Bedroom</div>
</div>
</div>
</div>

<div className="p-8 rounded-2xl border hover-card shadow-sm reveal delay-200 border-neutral-100 bg-white">
<div className="flex mb-4 gap-0.5 text-amber-400">
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="mb-6 leading-relaxed text-neutral-600">"The online booking is incredibly smooth. No phone calls, no haggling. Just booked, paid, and came home to a perfect house. Highly recommend."</p>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full flex items-center justify-center text-sm font-bold bg-neutral-900 text-white">MR</div>
<div>
<div className="text-sm font-semibold text-neutral-900">Mike Ross</div>
<div className="text-xs text-neutral-400">Deep Clean • Studio</div>
</div>
</div>
</div>

<div className="p-8 rounded-2xl border hover-card shadow-sm reveal delay-300 border-neutral-100 bg-white">
<div className="flex mb-4 gap-0.5 text-amber-400">
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="mb-6 leading-relaxed text-neutral-600">"My cleaner was punctual, professional, and thorough. I've used several services in the city and Pure is by far the most consistent quality."</p>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full flex items-center justify-center text-sm font-bold bg-indigo-50 text-indigo-600">EL</div>
<div>
<div className="text-sm font-semibold text-neutral-900">Emily Liu</div>
<div className="text-xs text-neutral-400">Recurring • 3 Bedroom</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t bg-neutral-50 border-neutral-200" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-8">
<div className="p-8 rounded-2xl border transition-colors reveal bg-white border-neutral-200 hover:border-neutral-300">
<div className="h-12 w-12 rounded-xl flex items-center justify-center mb-6 border bg-neutral-50 text-neutral-900 border-neutral-100">
<svg aria-hidden="true" data-icon="lucide:award" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m15.477 12.89l1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></g></svg>
</div>
<h3 className="text-xl font-semibold mb-3 text-neutral-900">5-Star Quality</h3>
<p className="text-neutral-500 leading-relaxed">Our professionals are rated after every clean to ensure consistent high standards.</p>
</div>
<div className="p-8 rounded-2xl border transition-colors reveal delay-100 bg-white border-neutral-200 hover:border-neutral-300">
<div className="h-12 w-12 rounded-xl flex items-center justify-center mb-6 border bg-neutral-50 text-neutral-900 border-neutral-100">
<svg aria-hidden="true" data-icon="lucide:calendar-clock" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 14v2.2l1.6 1M16 2v4m5 1.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5M3 10h5m0-8v4"></path><circle cx="16" cy="16" r="6"></circle></g></svg>
</div>
<h3 className="text-xl font-semibold mb-3 text-neutral-900">Flexible Scheduling</h3>
<p className="text-neutral-500 leading-relaxed">Reschedule up to 2 hours before your appointment via our app with no penalties.</p>
</div>
<div className="p-8 rounded-2xl border transition-colors reveal delay-200 bg-white border-neutral-200 hover:border-neutral-300">
<div className="h-12 w-12 rounded-xl flex items-center justify-center mb-6 border bg-neutral-50 text-neutral-900 border-neutral-100">
<svg aria-hidden="true" data-icon="lucide:shield-check" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
</div>
<h3 className="text-xl font-semibold mb-3 text-neutral-900">Insured &amp; Bonded</h3>
<p className="text-neutral-500 leading-relaxed">Complete peace of mind. Your property is insured up to $2M during every service.</p>
</div>
</div>
</div>
</section>

<footer className="border-t pt-20 pb-10 bg-white border-neutral-200">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<a className="text-xl tracking-tighter font-bold flex items-center gap-2 mb-6 text-neutral-900" href="#">
<svg aria-hidden="true" data-icon="lucide:sparkles" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg>
                        PURE.
                    </a>
<p className="text-sm text-neutral-500 leading-relaxed mb-6">
                        Reinventing home services with technology, transparency, and trust.
                    </p>
<div className="flex gap-4">
<a className="transition-colors text-neutral-400 hover:text-neutral-900" href="#"><svg aria-hidden="true" data-icon="lucide:twitter" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></a>
<a className="transition-colors text-neutral-400 hover:text-neutral-900" href="#"><svg aria-hidden="true" data-icon="lucide:instagram" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg></a>
<a className="transition-colors text-neutral-400 hover:text-neutral-900" href="#"><svg aria-hidden="true" data-icon="lucide:facebook" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></a>
</div>
</div>
<div>
<h4 className="font-semibold mb-4 text-neutral-900">Company</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="transition-colors hover:text-neutral-900" href="#">About Us</a></li>
<li><a className="transition-colors hover:text-neutral-900" href="#">Careers</a></li>
<li><a className="transition-colors hover:text-neutral-900" href="#">Become a Cleaner</a></li>
<li><a className="transition-colors hover:text-neutral-900" href="#">Press</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold mb-4 text-neutral-900">Support</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="transition-colors hover:text-neutral-900" href="#">Help Center</a></li>
<li><a className="transition-colors hover:text-neutral-900" href="#">Terms of Service</a></li>
<li><a className="transition-colors hover:text-neutral-900" href="#">Privacy Policy</a></li>
<li><a className="transition-colors hover:text-neutral-900" href="#">Contact Us</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold mb-4 text-neutral-900">Stay Updated</h4>
<p className="text-sm text-neutral-500 mb-4">Get cleaning tips and exclusive offers.</p>
<div className="flex gap-2">
<input className="border rounded-lg px-4 py-2 text-sm w-full outline-none focus:border-neutral-900 transition-colors bg-neutral-50 border-neutral-200" placeholder="Enter email" type="email"/>
<button className="rounded-lg px-4 py-2 text-sm font-medium transition-colors bg-neutral-900 text-white hover:bg-neutral-800">
<svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</div>
<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium border-neutral-100 text-neutral-400">
<div>© 2024 Pure Cleaning Inc. All rights reserved.</div>
<div className="flex gap-6">
<a className="hover:text-neutral-600" href="#">Privacy</a>
<a className="hover:text-neutral-600" href="#">Terms</a>
<a className="hover:text-neutral-600" href="#">Sitemap</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
