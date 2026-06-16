import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
background: '#0a0a0a',
surface: '#121212',
surfaceHover: '#1a1a1a',
border: '#262626',
},
animation: {
'spin-slow': 'spin 3s linear infinite',
'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Smooth Scrolling setup
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // GSAP Animations
        gsap.registerPlugin(ScrollTrigger);

        const fadeElements = document.querySelectorAll('.gsap-fade-up');
        fadeElements.forEach((el) => {
            gsap.to(el, {
                opacity: 1, 
                y: 0, 
                duration: 0.8, 
                ease: "power3.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            });
        });

        // Network Map Route Animation
        const networkSection = document.getElementById('network');
        if (networkSection) {
            const nodes = gsap.utils.toArray('.route-node');
            
            gsap.to('#network-progress', {
                scaleY: 1,
                ease: "none",
                scrollTrigger: {
                    trigger: networkSection,
                    start: "top center",
                    end: "bottom center",
                    scrub: 0.5,
                }
            });

            nodes.forEach((node) => {
                const dot = node.querySelector('.node-dot');
                ScrollTrigger.create({
                    trigger: node,
                    start: "top center",
                    onEnter: () => {
                        dot.style.backgroundColor = "white";
                        dot.style.borderColor = "white";
                        dot.style.boxShadow = "0 0 15px rgba(255,255,255,0.4)";
                        dot.style.transform = "translate(-50%, -50%) scale(1.2)";
                    },
                    onLeaveBack: () => {
                        dot.style.backgroundColor = "#0a0a0a";
                        dot.style.borderColor = "#262626";
                        dot.style.boxShadow = "none";
                        dot.style.transform = "translate(-50%, -50%) scale(1)";
                    }
                });
            });
        }

        // Booking Logic
        const bookingState = {
            tripType: 'oneway',
            pickup: '',
            drop: '',
            date: '',
            time: '',
            car: 'sedan'
        };

        const tripBtns = document.querySelectorAll('.trip-type-btn');
        const pickupSelect = document.getElementById('pickup');
        const dropSelect = document.getElementById('drop');
        const dateInput = document.getElementById('date');
        const timeInput = document.getElementById('time');
        const carCards = document.querySelectorAll('.car-card');
        const priceDisplay = document.getElementById('price-display');
        const priceNote = document.getElementById('price-note');
        const errorMsg = document.getElementById('error-msg');
        const bookingForm = document.getElementById('booking-form');
        const submitBtn = document.getElementById('submit-btn');
        const btnText = document.getElementById('btn-text');
        const btnLoader = document.getElementById('btn-loader');

        // Simple pricing logic
        const pricing = {
            'Ludhiana-Chandigarh': 2500,
            'Chandigarh-Ludhiana': 2500,
            'Ludhiana-Delhi': 6500,
            'Delhi-Ludhiana': 6500,
            'Ludhiana-Amritsar': 3000,
            'Amritsar-Ludhiana': 3000,
            'Chandigarh-Delhi': 5500,
            'Delhi-Chandigarh': 5500,
            'Delhi-Amritsar': 9500,
            'Amritsar-Delhi': 9500,
            'Chandigarh-Amritsar': 4500,
            'Amritsar-Chandigarh': 4500
        };

        const carMultipliers = {
            'sedan': 1,
            'suv': 1.5,
            'premium': 2.2
        };

        const checkValidity = () => {
            const isValid = bookingState.pickup && 
                            bookingState.drop && 
                            bookingState.date && 
                            bookingState.time && 
                            bookingState.pickup !== bookingState.drop;
            
            submitBtn.disabled = !isValid;
            return isValid;
        };

        tripBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                tripBtns.forEach(b => {
                    b.classList.remove('active', 'bg-surface', 'border', 'border-border', 'text-white', 'shadow-sm');
                    b.classList.add('text-neutral-400');
                });
                const target = e.target;
                target.classList.add('active', 'bg-surface', 'border', 'border-border', 'text-white', 'shadow-sm');
                target.classList.remove('text-neutral-400');
                
                bookingState.tripType = target.dataset.type;
                
                // If local, disable drop location
                if(bookingState.tripType === 'local') {
                    dropSelect.value = bookingState.pickup;
                    bookingState.drop = bookingState.pickup;
                    dropSelect.parentElement.classList.add('opacity-50', 'pointer-events-none');
                } else {
                    dropSelect.parentElement.classList.remove('opacity-50', 'pointer-events-none');
                    if(bookingState.pickup === bookingState.drop) dropSelect.value = '';
                }
                
                calculatePrice();
            });
        });

        carCards.forEach(card => {
            card.addEventListener('click', () => {
                carCards.forEach(c => c.classList.remove('active'));
                card.classList.add('active');
                bookingState.car = card.dataset.car;
                calculatePrice();
            });
        });

        const updateState = (e) => {
            bookingState[e.target.id] = e.target.value;
            
            if(bookingState.tripType === 'local' && e.target.id === 'pickup') {
                dropSelect.value = bookingState.pickup;
                bookingState.drop = bookingState.pickup;
            }

            calculatePrice();
        };

        [pickupSelect, dropSelect, dateInput, timeInput].forEach(el => {
            el.addEventListener('change', updateState);
        });

        function calculatePrice() {
            errorMsg.classList.add('hidden');
            
            if (!bookingState.pickup) {
                priceDisplay.textContent = '₹ --';
                priceNote.classList.add('hidden');
                checkValidity();
                return;
            }

            if (bookingState.tripType !== 'local' && bookingState.pickup === bookingState.drop) {
                priceDisplay.textContent = '₹ --';
                priceNote.classList.add('hidden');
                errorMsg.textContent = "Pickup and drop locations cannot be the same.";
                errorMsg.classList.remove('hidden');
                checkValidity();
                return;
            }

            let basePrice = 2000; // Local fallback
            if(bookingState.tripType !== 'local') {
                const routeKey = `${bookingState.pickup}-${bookingState.drop}`;
                basePrice = pricing[routeKey] || 4000;
            }
            
            if (bookingState.tripType === 'round') basePrice *= 1.8;
            if (bookingState.tripType === 'airport') basePrice *= 0.9;
            if (bookingState.tripType === 'local') basePrice = 2500; // 8hr/80km

            const finalPrice = Math.round(basePrice * carMultipliers[bookingState.car]);
            
            priceDisplay.style.opacity = '0.5';
            setTimeout(() => {
                priceDisplay.textContent = `₹ ${finalPrice.toLocaleString('en-IN')}`;
                priceDisplay.style.opacity = '1';
                priceNote.classList.remove('hidden');
            }, 150);

            checkValidity();
        }

        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            if (!checkValidity()) return;

            submitBtn.disabled = true;
            btnText.classList.add('hidden');
            btnLoader.classList.remove('hidden');

            setTimeout(() => {
                btnLoader.classList.add('hidden');
                btnText.innerHTML = `Confirmed <iconify-icon icon="solar:check-circle-linear" class="text-lg"></iconify-icon>`;
                btnText.classList.remove('hidden');
                submitBtn.classList.replace('bg-white', 'bg-emerald-500');
                submitBtn.classList.replace('text-black', 'text-white');

                // Generate WhatsApp String
                const message = `*New Booking Request*%0A%0A*Type:* ${bookingState.tripType.toUpperCase()}%0A*From:* ${bookingState.pickup}%0A*To:* ${bookingState.tripType === 'local' ? 'Local Rental' : bookingState.drop}%0A*Date:* ${bookingState.date}%0A*Time:* ${bookingState.time}%0A*Vehicle:* ${bookingState.car.toUpperCase()}%0A%0APlease confirm availability.`;
                const waUrl = `https://wa.me/919999999999?text=${message}`;
                
                setTimeout(() => {
                    window.open(waUrl, '_blank');
                    // Reset
                    submitBtn.classList.replace('bg-emerald-500', 'bg-white');
                    submitBtn.classList.replace('text-white', 'text-black');
                    btnText.innerHTML = `Confirm Booking <iconify-icon icon="solar:arrow-right-linear" class="text-lg"></iconify-icon>`;
                    submitBtn.disabled = false;
                }, 800);
            }, 1000);
        });

        // Date restriction
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border transition-all duration-300">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="font-medium tracking-tighter text-xl flex items-center gap-2">
<iconify-icon className="text-neutral-400" icon="solar:routing-2-linear" strokeWidth="1.5"></iconify-icon>
                V3
            </div>
<div className="hidden md:flex items-center gap-8 text-sm font-normal text-neutral-400">
<a className="hover:text-white transition-colors" href="#booking">Book</a>
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#fleet">Fleet</a>
<a className="hover:text-white transition-colors" href="#network">Network</a>
<a className="hover:text-white transition-colors" href="#faq">FAQ</a>
</div>
<a className="text-xs font-medium bg-white text-black px-5 py-2.5 rounded-full btn-lift hidden sm:block" href="#booking">
                Book Ride
            </a>
<a className="text-xs font-medium bg-white text-black px-4 py-2 rounded-full btn-lift sm:hidden" href="#booking">
                Book
            </a>
</div>
</nav>

<section className="relative pt-40 pb-20 md:pt-48 md:pb-32 px-6 flex flex-col items-center text-center overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[400px] bg-white/[0.02] blur-[100px] rounded-full pointer-events-none"></div>
<div className="gsap-fade-up inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface/50 backdrop-blur-sm text-xs mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-40"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-neutral-300 font-normal">Active in Ludhiana, India</span>
</div>
<h1 className="gsap-fade-up text-5xl md:text-7xl font-medium tracking-tight text-white mb-6 max-w-4xl leading-[1.1]">
            Premium Travel.<br/>
<span className="text-neutral-500">Seamlessly Connected.</span>
</h1>
<p className="gsap-fade-up text-base md:text-lg text-neutral-400 max-w-xl mb-10 font-normal leading-relaxed">
            Fast, safe, and reliable chauffeur services across Ludhiana, Chandigarh, Delhi NCR, and Amritsar. Always on time, every time.
        </p>
<div className="gsap-fade-up flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-black font-medium text-sm btn-lift flex items-center justify-center gap-2" href="#booking">
                Book Now
                <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<button className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-border bg-surface/50 text-white font-medium text-sm hover:bg-surfaceHover hover:border-neutral-700 btn-lift flex items-center justify-center gap-2 transition-colors" onclick="window.open('https://wa.me/919999999999?text=Hi,%20I%20need%20a%20cab.', '_blank')">
<iconify-icon icon="solar:chat-round-line-linear" strokeWidth="1.5"></iconify-icon>
                WhatsApp Booking
            </button>
</div>
</section>

<section className="py-20 px-6 relative z-10 scroll-mt-16" id="booking">
<div className="max-w-4xl mx-auto">
<div className="mb-10 text-center md:text-left gsap-fade-up">
<h2 className="text-3xl font-medium tracking-tight mb-2 text-white">Book Your Journey</h2>
<p className="text-sm text-neutral-400 font-normal">Instant estimates. Guaranteed availability. No hidden fees.</p>
</div>
<div className="bg-surface border border-border rounded-2xl p-6 md:p-8 shadow-2xl gsap-fade-up delay-100">
<form className="space-y-6" id="booking-form">

<div className="flex p-1 bg-background rounded-lg border border-border w-fit mb-6 overflow-x-auto max-w-full">
<button className="trip-type-btn active px-4 py-2 text-xs font-medium rounded-md bg-surface border border-border text-white shadow-sm whitespace-nowrap" data-type="oneway" type="button">One Way</button>
<button className="trip-type-btn px-4 py-2 text-xs font-medium rounded-md text-neutral-400 hover:text-white transition-colors whitespace-nowrap" data-type="round" type="button">Round Trip</button>
<button className="trip-type-btn px-4 py-2 text-xs font-medium rounded-md text-neutral-400 hover:text-white transition-colors whitespace-nowrap" data-type="airport" type="button">Airport</button>
<button className="trip-type-btn px-4 py-2 text-xs font-medium rounded-md text-neutral-400 hover:text-white transition-colors whitespace-nowrap" data-type="local" type="button">Local Rental</button>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs font-normal text-neutral-400 pl-1">Pickup Location</label>
<div className="relative input-focus-ring border border-border rounded-xl bg-background overflow-hidden transition-colors">
<iconify-icon className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500" icon="solar:map-point-linear"></iconify-icon>
<select className="w-full bg-transparent text-sm text-white pl-10 pr-4 py-3.5 outline-none appearance-none cursor-pointer" id="pickup" required="">
<option disabled="" hidden="" selected="" value="">Select City</option>
<option value="Ludhiana">Ludhiana</option>
<option value="Chandigarh">Chandigarh</option>
<option value="Delhi">Delhi NCR</option>
<option value="Amritsar">Amritsar Airport</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-normal text-neutral-400 pl-1">Drop Location</label>
<div className="relative input-focus-ring border border-border rounded-xl bg-background overflow-hidden transition-colors">
<iconify-icon className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500" icon="solar:routing-linear"></iconify-icon>
<select className="w-full bg-transparent text-sm text-white pl-10 pr-4 py-3.5 outline-none appearance-none cursor-pointer" id="drop" required="">
<option disabled="" hidden="" selected="" value="">Select City</option>
<option value="Ludhiana">Ludhiana</option>
<option value="Chandigarh">Chandigarh</option>
<option value="Delhi">Delhi NCR</option>
<option value="Amritsar">Amritsar Airport</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs font-normal text-neutral-400 pl-1">Date</label>
<div className="relative input-focus-ring border border-border rounded-xl bg-background overflow-hidden transition-colors">
<iconify-icon className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none" icon="solar:calendar-linear"></iconify-icon>
<input className="w-full bg-transparent text-sm text-white pl-10 pr-4 py-3.5 outline-none cursor-pointer" id="date" required="" type="date"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-normal text-neutral-400 pl-1">Time</label>
<div className="relative input-focus-ring border border-border rounded-xl bg-background overflow-hidden transition-colors">
<iconify-icon className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none" icon="solar:clock-circle-linear"></iconify-icon>
<input className="w-full bg-transparent text-sm text-white pl-10 pr-4 py-3.5 outline-none cursor-pointer" id="time" required="" type="time"/>
</div>
</div>
</div>

<div className="space-y-2 pt-2">
<label className="text-xs font-normal text-neutral-400 pl-1">Vehicle Type</label>
<div className="grid grid-cols-1 md:grid-cols-3 gap-3">
<div className="car-card active border border-border rounded-xl p-4 cursor-pointer flex flex-col items-start gap-3 bg-background" data-car="sedan">
<iconify-icon className="text-2xl text-neutral-300" icon="solar:smart-vacuum-cleaner-linear"></iconify-icon>
<div>
<div className="text-sm font-medium text-white">Sedan</div>
<div className="text-xs text-neutral-500 mt-0.5 font-normal">Dzire, Etios</div>
</div>
</div>
<div className="car-card border border-border rounded-xl p-4 cursor-pointer flex flex-col items-start gap-3 bg-background" data-car="suv">
<iconify-icon className="text-2xl text-neutral-300" icon="solar:bus-linear"></iconify-icon>
<div>
<div className="text-sm font-medium text-white">SUV</div>
<div className="text-xs text-neutral-500 mt-0.5 font-normal">Innova, Ertiga</div>
</div>
</div>
<div className="car-card border border-border rounded-xl p-4 cursor-pointer flex flex-col items-start gap-3 bg-background" data-car="premium">
<iconify-icon className="text-2xl text-neutral-300" icon="solar:crown-star-linear"></iconify-icon>
<div>
<div className="text-sm font-medium text-white">Premium</div>
<div className="text-xs text-neutral-500 mt-0.5 font-normal">Crysta, Fortuner</div>
</div>
</div>
</div>
</div>

<div className="pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex-1 w-full">
<div className="text-xs text-neutral-400 font-normal mb-1">Estimated Fare</div>
<div className="min-h-[2rem] flex items-baseline gap-2 text-white">
<span className="text-2xl font-medium tracking-tight transition-opacity duration-200" id="price-display">₹ --</span>
<span className="text-xs text-neutral-500 hidden font-normal" id="price-note">All inclusive</span>
</div>
<p className="text-xs text-red-400 mt-1 hidden font-normal" id="error-msg">Please fill all fields correctly.</p>
</div>
<button className="w-full md:w-auto px-8 py-3.5 rounded-xl bg-white text-black font-medium text-sm flex items-center justify-center gap-2 btn-lift disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none disabled:hover:shadow-none transition-all" disabled="" id="submit-btn" type="submit">
<span className="flex items-center gap-2" id="btn-text">
                                Confirm Booking
                                <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</span>
<div className="hidden spinner border-black" id="btn-loader"></div>
</button>
</div>
</form>
</div>
</div>
</section>

<section className="py-24 px-6 relative border-t border-border bg-background" id="services">
<div className="max-w-6xl mx-auto">
<div className="mb-16 md:text-center gsap-fade-up">
<h2 className="text-3xl font-medium tracking-tight mb-4 text-white">Comprehensive Services</h2>
<p className="text-sm text-neutral-400 font-normal max-w-lg mx-auto">Tailored mobility solutions for every requirement.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
<div className="gsap-fade-up p-6 rounded-2xl border border-border bg-surface/30 backdrop-blur-sm card-lift">
<div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center mb-5">
<iconify-icon className="text-white text-lg" icon="solar:routing-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white mb-2 tracking-tight">One-Way Drops</h3>
<p className="text-sm text-neutral-400 leading-relaxed font-normal">City to city transfers. Pay only for the distance you travel, no return fare.</p>
</div>
<div className="gsap-fade-up p-6 rounded-2xl border border-border bg-surface/30 backdrop-blur-sm card-lift delay-[50ms]">
<div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center mb-5">
<iconify-icon className="text-white text-lg" icon="solar:refresh-circle-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white mb-2 tracking-tight">Round Trips</h3>
<p className="text-sm text-neutral-400 leading-relaxed font-normal">Multi-day outstation travel with an assigned driver remaining at your disposal.</p>
</div>
<div className="gsap-fade-up p-6 rounded-2xl border border-border bg-surface/30 backdrop-blur-sm card-lift delay-[100ms]">
<div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center mb-5">
<iconify-icon className="text-white text-lg" icon="solar:plain-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white mb-2 tracking-tight">Airport Transfers</h3>
<p className="text-sm text-neutral-400 leading-relaxed font-normal">Timely pickups and drops for Amritsar, Chandigarh, and Delhi airports.</p>
</div>
<div className="gsap-fade-up p-6 rounded-2xl border border-border bg-surface/30 backdrop-blur-sm card-lift delay-[150ms]">
<div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center mb-5">
<iconify-icon className="text-white text-lg" icon="solar:city-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white mb-2 tracking-tight">Local Rentals</h3>
<p className="text-sm text-neutral-400 leading-relaxed font-normal">8 hours / 80 km packages for inner-city meetings, shopping, or sightseeing.</p>
</div>
<div className="gsap-fade-up p-6 rounded-2xl border border-border bg-surface/30 backdrop-blur-sm card-lift delay-[200ms]">
<div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center mb-5">
<iconify-icon className="text-white text-lg" icon="solar:map-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white mb-2 tracking-tight">Outstation Travel</h3>
<p className="text-sm text-neutral-400 leading-relaxed font-normal">Explore North India comfortably. Custom itineraries and route planning.</p>
</div>
<div className="gsap-fade-up p-6 rounded-2xl border border-border bg-surface/30 backdrop-blur-sm card-lift delay-[250ms]">
<div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center mb-5">
<iconify-icon className="text-white text-lg" icon="solar:buildings-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white mb-2 tracking-tight">Corporate Tie-ups</h3>
<p className="text-sm text-neutral-400 leading-relaxed font-normal">Dedicated fleet management and monthly billing for corporate clients.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative border-t border-border bg-surface/20">
<div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
<div className="w-full lg:w-1/3 gsap-fade-up">
<h2 className="text-3xl font-medium tracking-tight mb-4 text-white">The V3 Standard</h2>
<p className="text-sm text-neutral-400 font-normal leading-relaxed mb-8">We don't just provide cars; we provide a guaranteed premium experience. Every ride is monitored to ensure perfection.</p>
</div>
<div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
<div className="gsap-fade-up flex gap-4">
<iconify-icon className="text-white text-2xl shrink-0 mt-0.5" icon="solar:shield-check-linear"></iconify-icon>
<div>
<h4 className="text-sm font-medium text-white mb-1">Verified Chauffeurs</h4>
<p className="text-xs text-neutral-400 font-normal leading-relaxed">Background-checked, experienced drivers trained in route navigation and etiquette.</p>
</div>
</div>
<div className="gsap-fade-up flex gap-4 delay-[50ms]">
<iconify-icon className="text-white text-2xl shrink-0 mt-0.5" icon="solar:stars-linear"></iconify-icon>
<div>
<h4 className="text-sm font-medium text-white mb-1">Sanitized Fleet</h4>
<p className="text-xs text-neutral-400 font-normal leading-relaxed">Vehicles undergo rigorous cleaning and sanitization protocols before every dispatch.</p>
</div>
</div>
<div className="gsap-fade-up flex gap-4 delay-[100ms]">
<iconify-icon className="text-white text-2xl shrink-0 mt-0.5" icon="solar:clock-circle-linear"></iconify-icon>
<div>
<h4 className="text-sm font-medium text-white mb-1">On-Time, Every Time</h4>
<p className="text-xs text-neutral-400 font-normal leading-relaxed">Our drivers arrive 15 minutes prior to scheduled pickup time.</p>
</div>
</div>
<div className="gsap-fade-up flex gap-4 delay-[150ms]">
<iconify-icon className="text-white text-2xl shrink-0 mt-0.5" icon="solar:headphones-round-sound-linear"></iconify-icon>
<div>
<h4 className="text-sm font-medium text-white mb-1">24/7 Support</h4>
<p className="text-xs text-neutral-400 font-normal leading-relaxed">Dedicated dispatch team available round the clock for modifications or assistance.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative border-t border-border bg-background" id="fleet">
<div className="max-w-6xl mx-auto">
<div className="mb-16 md:text-center gsap-fade-up">
<h2 className="text-3xl font-medium tracking-tight mb-4 text-white">Our Fleet</h2>
<p className="text-sm text-neutral-400 font-normal max-w-lg mx-auto">Modern, well-maintained vehicles suited for any travel requirement.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="gsap-fade-up group rounded-2xl border border-border bg-surface overflow-hidden card-lift">
<div className="h-48 bg-neutral-900 relative overflow-hidden flex items-center justify-center p-8">
<div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent z-10"></div>
<iconify-icon className="text-[80px] text-neutral-700 group-hover:text-white group-hover:scale-110 transition-all duration-500 z-0" icon="solar:smart-vacuum-cleaner-linear"></iconify-icon>
</div>
<div className="p-6 relative z-20 -mt-8">
<div className="flex justify-between items-end mb-2">
<h3 className="text-lg font-medium tracking-tight text-white">Sedan</h3>
<span className="text-xs font-normal text-neutral-400">From ₹12/km</span>
</div>
<p className="text-xs text-neutral-500 font-normal mb-4">Swift Dzire, Etios or similar.</p>
<ul className="space-y-2 text-xs text-neutral-400 font-normal">
<li className="flex items-center gap-2"><iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon> 4 Passengers</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:suitcase-linear"></iconify-icon> 2 Luggage Bags</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:air-conditioner-linear"></iconify-icon> Fully AC</li>
</ul>
</div>
</div>

<div className="gsap-fade-up group rounded-2xl border border-border bg-surface overflow-hidden card-lift delay-[50ms]">
<div className="h-48 bg-neutral-900 relative overflow-hidden flex items-center justify-center p-8">
<div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent z-10"></div>
<iconify-icon className="text-[80px] text-neutral-700 group-hover:text-white group-hover:scale-110 transition-all duration-500 z-0" icon="solar:bus-linear"></iconify-icon>
</div>
<div className="p-6 relative z-20 -mt-8">
<div className="flex justify-between items-end mb-2">
<h3 className="text-lg font-medium tracking-tight text-white">SUV</h3>
<span className="text-xs font-normal text-neutral-400">From ₹18/km</span>
</div>
<p className="text-xs text-neutral-500 font-normal mb-4">Innova, Ertiga or similar.</p>
<ul className="space-y-2 text-xs text-neutral-400 font-normal">
<li className="flex items-center gap-2"><iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon> 6-7 Passengers</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:suitcase-linear"></iconify-icon> 4 Luggage Bags</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:air-conditioner-linear"></iconify-icon> Dual AC</li>
</ul>
</div>
</div>

<div className="gsap-fade-up group rounded-2xl border border-border bg-surface overflow-hidden card-lift delay-[100ms]">
<div className="h-48 bg-neutral-900 relative overflow-hidden flex items-center justify-center p-8">
<div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent z-10"></div>
<iconify-icon className="text-[80px] text-neutral-700 group-hover:text-white group-hover:scale-110 transition-all duration-500 z-0" icon="solar:crown-star-linear"></iconify-icon>
</div>
<div className="p-6 relative z-20 -mt-8">
<div className="flex justify-between items-end mb-2">
<h3 className="text-lg font-medium tracking-tight text-white">Premium</h3>
<span className="text-xs font-normal text-neutral-400">From ₹25/km</span>
</div>
<p className="text-xs text-neutral-500 font-normal mb-4">Innova Crysta, Fortuner.</p>
<ul className="space-y-2 text-xs text-neutral-400 font-normal">
<li className="flex items-center gap-2"><iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon> 6 Passengers</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:suitcase-linear"></iconify-icon> Extra Space</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:star-linear"></iconify-icon> Premium Comfort</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative bg-surface/20 border-t border-border" id="network">
<div className="max-w-3xl mx-auto">
<div className="mb-20 md:text-center gsap-fade-up">
<h2 className="text-3xl font-medium tracking-tight mb-4 text-white">Travel Network</h2>
<p className="text-sm text-neutral-400 font-normal max-w-lg mx-auto">Connecting major hubs across North India with precision and reliability.</p>
</div>

<div className="relative pl-6 md:pl-0">
<div className="absolute left-[23px] md:left-1/2 top-0 bottom-0 w-[1px] bg-border md:-translate-x-1/2"></div>
<div className="absolute left-[23px] md:left-1/2 top-0 w-[2px] bg-white md:-translate-x-1/2 origin-top scale-y-0 route-line-glow z-10" id="network-progress"></div>
<div className="space-y-20">

<div className="route-node relative w-full md:w-1/2 md:ml-auto md:pl-16 pl-12 flex flex-col justify-center">
<div className="node-dot absolute left-[-6px] md:left-0 top-1/2 -translate-y-1/2 md:-translate-x-1/2 w-3.5 h-3.5 rounded-full bg-background border-2 border-border z-20 transition-all duration-500"></div>
<div className="p-6 border border-border rounded-xl bg-surface/50 backdrop-blur-sm card-lift">
<div className="flex items-center justify-between mb-3">
<h3 className="text-base font-medium tracking-tight text-white">Ludhiana Hub</h3>
<span className="text-[10px] px-2.5 py-1 rounded-full bg-white/10 text-white font-medium border border-white/10">Base</span>
</div>
<p className="text-sm text-neutral-400 font-normal leading-relaxed">Headquarters. 24/7 dispatch available for local and outstation travel.</p>
</div>
</div>

<div className="route-node relative w-full md:w-1/2 md:pr-16 pl-12 md:pl-0 flex flex-col justify-center md:items-end md:text-right">
<div className="node-dot absolute left-[-6px] md:left-full top-1/2 -translate-y-1/2 md:-translate-x-1/2 w-3.5 h-3.5 rounded-full bg-background border-2 border-border z-20 transition-all duration-500"></div>
<div className="p-6 border border-border rounded-xl bg-surface/50 backdrop-blur-sm card-lift text-left md:text-right w-full">
<div className="flex items-center justify-between md:flex-row-reverse mb-3">
<h3 className="text-base font-medium tracking-tight text-white">Chandigarh</h3>
<span className="text-[10px] px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 font-medium border border-emerald-500/20">Active</span>
</div>
<p className="text-sm text-neutral-400 font-normal leading-relaxed">Frequent business transfers. Approximately 2 hours drive time from base.</p>
</div>
</div>

<div className="route-node relative w-full md:w-1/2 md:ml-auto md:pl-16 pl-12 flex flex-col justify-center">
<div className="node-dot absolute left-[-6px] md:left-0 top-1/2 -translate-y-1/2 md:-translate-x-1/2 w-3.5 h-3.5 rounded-full bg-background border-2 border-border z-20 transition-all duration-500"></div>
<div className="p-6 border border-border rounded-xl bg-surface/50 backdrop-blur-sm card-lift">
<div className="flex items-center justify-between mb-3">
<h3 className="text-base font-medium tracking-tight text-white">Delhi NCR</h3>
<span className="text-[10px] px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 font-medium border border-emerald-500/20">Active</span>
</div>
<p className="text-sm text-neutral-400 font-normal leading-relaxed">Premium long-distance service. Highway optimized vehicles and trained drivers.</p>
</div>
</div>

<div className="route-node relative w-full md:w-1/2 md:pr-16 pl-12 md:pl-0 flex flex-col justify-center md:items-end md:text-right">
<div className="node-dot absolute left-[-6px] md:left-full top-1/2 -translate-y-1/2 md:-translate-x-1/2 w-3.5 h-3.5 rounded-full bg-background border-2 border-border z-20 transition-all duration-500"></div>
<div className="p-6 border border-border rounded-xl bg-surface/50 backdrop-blur-sm card-lift text-left md:text-right w-full">
<div className="flex items-center justify-between md:flex-row-reverse mb-3">
<h3 className="text-base font-medium tracking-tight text-white">Amritsar Airport</h3>
<span className="text-[10px] px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 font-medium border border-blue-500/20">Priority</span>
</div>
<p className="text-sm text-neutral-400 font-normal leading-relaxed">Timely pickups and drops aligned perfectly with your flight schedules.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative border-t border-border bg-background">
<div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="gsap-fade-up">
<h2 className="text-3xl font-medium tracking-tight mb-4 text-white">Transparent Pricing</h2>
<p className="text-sm text-neutral-400 font-normal leading-relaxed mb-6">We believe in complete honesty. What you see is what you pay. Our rates are calculated upfront without any hidden surprises.</p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm font-normal text-neutral-300">
<iconify-icon className="text-emerald-500 text-lg" icon="solar:check-circle-linear"></iconify-icon> No Surge Pricing
                    </li>
<li className="flex items-center gap-3 text-sm font-normal text-neutral-300">
<iconify-icon className="text-emerald-500 text-lg" icon="solar:check-circle-linear"></iconify-icon> Tolls &amp; Taxes Included in Estimates
                    </li>
<li className="flex items-center gap-3 text-sm font-normal text-neutral-300">
<iconify-icon className="text-emerald-500 text-lg" icon="solar:check-circle-linear"></iconify-icon> Free Cancellation (up to 2 hrs prior)
                    </li>
</ul>
</div>
<div className="gsap-fade-up p-8 rounded-2xl border border-border bg-surface shadow-2xl">
<div className="text-xs font-medium text-neutral-500 mb-6 uppercase tracking-widest">Example Breakdown</div>
<div className="space-y-4 text-sm font-normal text-neutral-300 border-b border-border pb-6 mb-6">
<div className="flex justify-between items-center">
<span>Base Fare (Distance x Rate)</span>
<span className="text-white">₹ 2,000</span>
</div>
<div className="flex justify-between items-center">
<span>Toll Charges</span>
<span className="text-white">₹ 350</span>
</div>
<div className="flex justify-between items-center">
<span>State Taxes</span>
<span className="text-white">₹ 150</span>
</div>
</div>
<div className="flex justify-between items-end">
<span className="text-sm font-medium text-white">Total Estimate</span>
<span className="text-2xl font-medium tracking-tight text-white">₹ 2,500</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative border-t border-border bg-surface/20">
<div className="max-w-6xl mx-auto">
<div className="mb-16 md:text-center gsap-fade-up">
<h2 className="text-3xl font-medium tracking-tight mb-4 text-white">Client Feedback</h2>
<p className="text-sm text-neutral-400 font-normal max-w-lg mx-auto">Don't just take our word for it.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="gsap-fade-up p-8 rounded-2xl border border-border bg-surface card-lift">
<div className="flex gap-1 mb-4 text-white">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-neutral-300 font-normal leading-relaxed mb-6">"Booked a premium SUV for a Delhi trip. The car was spotless, and the driver was extremely professional and punctual."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-xs text-white font-medium">S</div>
<div className="text-xs font-medium text-white">Sandeep Singh</div>
</div>
</div>
<div className="gsap-fade-up p-8 rounded-2xl border border-border bg-surface card-lift delay-[50ms]">
<div className="flex gap-1 mb-4 text-white">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-neutral-300 font-normal leading-relaxed mb-6">"Always use V3 for my Amritsar airport drops. Zero anxiety about missing flights because they are always 15 mins early."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-xs text-white font-medium">R</div>
<div className="text-xs font-medium text-white">Rahul Mehta</div>
</div>
</div>
<div className="gsap-fade-up p-8 rounded-2xl border border-border bg-surface card-lift delay-[100ms]">
<div className="flex gap-1 mb-4 text-white">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-neutral-300 font-normal leading-relaxed mb-6">"No hidden tolls or surprise charges at the end of the trip. The price they quoted was exactly what I paid. Highly recommended."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-xs text-white font-medium">A</div>
<div className="text-xs font-medium text-white">Amit Sharma</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative border-t border-border bg-background" id="faq">
<div className="max-w-3xl mx-auto">
<div className="mb-12 md:text-center gsap-fade-up">
<h2 className="text-3xl font-medium tracking-tight mb-4 text-white">Common Questions</h2>
</div>
<div className="space-y-4">
<details className="gsap-fade-up group bg-surface border border-border rounded-xl overflow-hidden cursor-pointer transition-colors hover:border-neutral-700">
<summary className="p-6 text-sm font-medium text-white flex justify-between items-center outline-none">
                        How do I confirm my booking?
                        <iconify-icon className="text-neutral-500 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-neutral-400 font-normal border-t border-border/50 pt-4 mt-2">
                        Once you submit the form, you'll be redirected to WhatsApp to confirm your details. Our dispatch team will immediately acknowledge and assign a driver.
                    </div>
</details>
<details className="gsap-fade-up group bg-surface border border-border rounded-xl overflow-hidden cursor-pointer transition-colors hover:border-neutral-700">
<summary className="p-6 text-sm font-medium text-white flex justify-between items-center outline-none">
                        What forms of payment do you accept?
                        <iconify-icon className="text-neutral-500 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-neutral-400 font-normal border-t border-border/50 pt-4 mt-2">
                        We accept UPI, Bank Transfers, Credit/Debit cards (via payment link), and Cash at the end of your trip.
                    </div>
</details>
<details className="gsap-fade-up group bg-surface border border-border rounded-xl overflow-hidden cursor-pointer transition-colors hover:border-neutral-700">
<summary className="p-6 text-sm font-medium text-white flex justify-between items-center outline-none">
                        Can I cancel my booking?
                        <iconify-icon className="text-neutral-500 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-neutral-400 font-normal border-t border-border/50 pt-4 mt-2">
                        Yes, cancellations are free up to 2 hours before the scheduled pickup time. Last-minute cancellations may incur a nominal fee.
                    </div>
</details>
<details className="gsap-fade-up group bg-surface border border-border rounded-xl overflow-hidden cursor-pointer transition-colors hover:border-neutral-700">
<summary className="p-6 text-sm font-medium text-white flex justify-between items-center outline-none">
                        When do I get the driver details?
                        <iconify-icon className="text-neutral-500 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-neutral-400 font-normal border-t border-border/50 pt-4 mt-2">
                        Driver and vehicle details (including contact number and vehicle registration) are shared via WhatsApp/SMS 2 hours prior to your journey.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-32 px-6 relative text-center border-t border-border overflow-hidden bg-background">
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-[300px] bg-white/[0.02] blur-[80px] rounded-t-full pointer-events-none"></div>
<div className="max-w-2xl mx-auto relative z-10 gsap-fade-up">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">Ready to travel?</h2>
<p className="text-sm md:text-base text-neutral-400 font-normal mb-10">Book your premium ride in seconds. Safe, fast, and completely reliable.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-black font-medium text-sm flex items-center justify-center gap-2 btn-lift shadow-[0_0_30px_-5px_rgba(255,255,255,0.2)]" href="#booking">
                    Book Your Ride Now
                    <iconify-icon icon="solar:routing-2-linear" strokeWidth="1.5"></iconify-icon>
</a>
<button className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-border bg-surface text-white font-medium text-sm hover:bg-surfaceHover btn-lift flex items-center justify-center gap-2 transition-colors" onclick="window.open('https://wa.me/919999999999', '_blank')">
<iconify-icon icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
                    +91 99999-99999
                </button>
</div>
</div>
</section>

<footer className="py-8 px-6 border-t border-border bg-background flex flex-col md:flex-row justify-between items-center gap-4">
<div className="font-medium tracking-tighter text-lg text-white">V3</div>
<p className="text-xs text-neutral-500 font-normal">© 2024 V3 Tour &amp; Travels. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:phone-linear"></iconify-icon></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:map-point-linear"></iconify-icon></a>
</div>
</footer>



    </>
  );
}
