import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Modal Functions
        const modal = document.getElementById('contactModal');
        const submitBtn = document.getElementById('submitBtn');
        const successMessage = document.getElementById('successMessage');

        function openModal() {
            modal.classList.remove('hidden');
            // Small timeout to allow display:block to apply before opacity transition
            setTimeout(() => {
                modal.classList.add('active');
            }, 10);
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            modal.classList.remove('active');
            setTimeout(() => {
                modal.classList.add('hidden');
                // Reset form state
                successMessage.classList.add('hidden');
            }, 300);
            document.body.style.overflow = 'auto';
        }

        // Close on outside click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });

        // Form Simulation
        function handleFormSubmit(e) {
            e.preventDefault();
            const originalText = submitBtn.innerHTML;
            
            // Loading State
            submitBtn.innerHTML = '<iconify-icon icon="solar:spinner-linear" class="animate-spin" width="24"></iconify-icon>';
            
            setTimeout(() => {
                successMessage.classList.remove('hidden');
                successMessage.classList.add('flex');
                submitBtn.innerHTML = originalText;
            }, 1500);
        }

        // Scroll Animations (Intersection Observer)
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in-up').forEach(el => {
            observer.observe(el);
        });

        // Navbar Scroll Effect
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 20) {
                nav.classList.add('shadow-sm', 'bg-white/90');
                nav.classList.remove('bg-white/80');
            } else {
                nav.classList.remove('shadow-sm', 'bg-white/90');
                nav.classList.add('bg-white/80');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-40 bg-white/80 backdrop-blur-md border-b border-slate-200 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-slate-900 font-semibold text-lg tracking-tight flex items-center gap-2" href="#">
<div className="w-8 h-8 bg-slate-900 text-white rounded-lg flex items-center justify-center">
<span className="font-bold text-sm">R</span>
</div>
                ROYAL STAR
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#services">Services</a>
<a className="hover:text-slate-900 transition-colors" href="#process">Process</a>
<a className="hover:text-slate-900 transition-colors" href="#reviews">Reviews</a>
<a className="hover:text-slate-900 transition-colors" href="#gallery">Work</a>
</div>
<button className="hidden md:flex bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10 items-center gap-2" onclick="openModal()">
<iconify-icon icon="solar:calendar-add-linear" width="18"></iconify-icon>
                Book Now
            </button>

<button className="md:hidden text-slate-900" onclick="openModal()">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Modern Kitchen" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&amp;w=2768&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/20"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
<div className="fade-in-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-medium mb-6 backdrop-blur-sm">
<span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                    Available for Same-Day Service
                </div>
<h1 className="text-4xl md:text-6xl font-semibold text-white tracking-tight leading-[1.1] mb-6">
                    Professional Appliance Repair in <span className="text-orange-400">Orange County</span>
</h1>
<p className="text-lg text-slate-300 font-light mb-8 max-w-lg leading-relaxed">
                    Local, family-owned experts restoring your home's rhythm. Certified technicians, transparent pricing, and warranty on all parts and labor.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-sm font-medium transition-all shadow-xl shadow-orange-500/20 flex items-center justify-center gap-2 group" onclick="openModal()">
                        Request Service
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full text-sm font-medium transition-all flex items-center justify-center gap-2" onclick="openModal()">
<iconify-icon icon="solar:phone-calling-linear" width="18"></iconify-icon>
                        Free Consultation
                    </button>
</div>
<div className="mt-10 flex items-center gap-6 text-slate-400 text-xs font-medium tracking-wide uppercase">
<div className="flex items-center gap-2">
<iconify-icon className="text-orange-400" icon="solar:shield-check-linear" width="18"></iconify-icon>
                        Licensed &amp; Insured
                    </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-orange-400" icon="solar:star-circle-linear" width="18"></iconify-icon>
                        5-Star Rated
                    </div>
</div>
</div>
</div>
</section>

<section className="py-10 bg-white border-b border-slate-100 overflow-hidden">
<p className="text-center text-xs font-medium text-slate-400 uppercase tracking-widest mb-8">We service all major brands</p>
<div className="marquee-container">
<div className="marquee-content flex gap-16 items-center px-4">

<span className="text-xl font-bold text-slate-300 tracking-tighter">SAMSUNG</span>
<span className="text-xl font-bold text-slate-300 tracking-tighter">LG</span>
<span className="text-xl font-bold text-slate-300 tracking-tighter">WHIRLPOOL</span>
<span className="text-xl font-bold text-slate-300 tracking-tighter">GE APPLIANCES</span>
<span className="text-xl font-bold text-slate-300 tracking-tighter">BOSCH</span>
<span className="text-xl font-bold text-slate-300 tracking-tighter">MAYTAG</span>
<span className="text-xl font-bold text-slate-300 tracking-tighter">KITCHENAID</span>
<span className="text-xl font-bold text-slate-300 tracking-tighter">FRIGIDAIRE</span>
<span className="text-xl font-bold text-slate-300 tracking-tighter">SUB-ZERO</span>
<span className="text-xl font-bold text-slate-300 tracking-tighter">SAMSUNG</span>
<span className="text-xl font-bold text-slate-300 tracking-tighter">LG</span>
<span className="text-xl font-bold text-slate-300 tracking-tighter">WHIRLPOOL</span>
<span className="text-xl font-bold text-slate-300 tracking-tighter">GE APPLIANCES</span>
<span className="text-xl font-bold text-slate-300 tracking-tighter">BOSCH</span>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6" id="services">
<div className="text-center max-w-2xl mx-auto mb-16 fade-in-up">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Expert Repair for Every Appliance</h2>
<p className="text-slate-500 font-light text-lg">We diagnose and fix issues quickly using factory-certified parts.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-white p-8 rounded-3xl border border-slate-100 hover:border-slate-200 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 fade-in-up delay-100 cursor-default">
<div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900 mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<iconify-icon icon="solar:fridge-outline" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Refrigerator Repair</h3>
<p className="text-sm text-slate-500 leading-relaxed">Fixing cooling issues, leaks, ice makers, and noise problems for all models.</p>
</div>

<div className="group bg-white p-8 rounded-3xl border border-slate-100 hover:border-slate-200 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 fade-in-up delay-200 cursor-default">
<div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900 mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<iconify-icon icon="solar:washing-machine-outline" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Washer &amp; Dryer</h3>
<p className="text-sm text-slate-500 leading-relaxed">Resolving spin failures, draining issues, and heating problems efficiently.</p>
</div>

<div className="group bg-white p-8 rounded-3xl border border-slate-100 hover:border-slate-200 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 fade-in-up delay-300 cursor-default">
<div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900 mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<iconify-icon icon="solar:chef-hat-heart-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Oven &amp; Stove</h3>
<p className="text-sm text-slate-500 leading-relaxed">Gas or electric, we fix temperature inconsistencies and ignition failures.</p>
</div>

<div className="group bg-white p-8 rounded-3xl border border-slate-100 hover:border-slate-200 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 fade-in-up delay-100 cursor-default">
<div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900 mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<iconify-icon icon="solar:waterdrops-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Dishwasher</h3>
<p className="text-sm text-slate-500 leading-relaxed">Cleaning problems, leaks, and drainage issues resolved fast.</p>
</div>

<div className="group bg-white p-8 rounded-3xl border border-slate-100 hover:border-slate-200 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 fade-in-up delay-200 cursor-default">
<div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900 mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<iconify-icon icon="solar:bolt-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Microwave</h3>
<p className="text-sm text-slate-500 leading-relaxed">Safety diagnostics, heating repairs, and turntable fixes.</p>
</div>

<div className="group bg-white p-8 rounded-3xl border border-slate-100 hover:border-slate-200 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 fade-in-up delay-300 cursor-default">
<div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900 mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<iconify-icon icon="solar:wind-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Dryer Vent Cleaning</h3>
<p className="text-sm text-slate-500 leading-relaxed">Prevent fire hazards and improve efficiency with deep cleaning.</p>
</div>
</div>
</section>

<section className="bg-slate-900 py-24 text-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="fade-in-up">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Why Orange County Trusts Royal Star</h2>
<p className="text-slate-400 text-lg font-light mb-8">We aren't just fixing machines; we're restoring convenience to your life with honesty and precision.</p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
<iconify-icon className="text-orange-400" icon="solar:clock-circle-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-lg">Same-Day Availability</h4>
<p className="text-slate-400 text-sm mt-1">We understand the urgency. Most calls are serviced within 24 hours.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
<iconify-icon className="text-orange-400" icon="solar:verified-check-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-lg">Parts &amp; Labor Warranty</h4>
<p className="text-slate-400 text-sm mt-1">Peace of mind included. 90-day warranty on labor and up to 1 year on parts.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
<iconify-icon className="text-orange-400" icon="solar:users-group-two-rounded-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-lg">Family Owned &amp; Operated</h4>
<p className="text-slate-400 text-sm mt-1">Local experts who treat your home with the respect it deserves.</p>
</div>
</div>
</div>
</div>
<div className="relative h-full min-h-[400px] rounded-3xl overflow-hidden fade-in-up delay-200">
<img alt="Technician working" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
<div className="absolute bottom-8 left-8 right-8">
<div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
<p className="text-sm font-medium italic text-slate-200">"The technician was professional, arrived on time, and had the part needed to fix my fridge in his truck. Highly recommended!"</p>
<div className="mt-4 flex items-center gap-2">
<span className="text-orange-400 text-xs">★★★★★</span>
<span className="text-xs text-white">Sarah Jenkins, Irvine</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6 bg-slate-50" id="process">
<div className="text-center mb-16 fade-in-up">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight">How We Work</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-[2px] bg-slate-200 z-0"></div>

<div className="relative z-10 text-center fade-in-up delay-100">
<div className="w-24 h-24 mx-auto bg-white rounded-full border-4 border-slate-50 shadow-lg flex items-center justify-center mb-6 relative">
<div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center text-slate-900">
<iconify-icon icon="solar:laptop-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
</div>
<h3 className="text-lg font-semibold text-slate-900">Book Online</h3>
<p className="text-sm text-slate-500 mt-2 px-4">Submit a request via our simple form or give us a call.</p>
</div>

<div className="relative z-10 text-center fade-in-up delay-200">
<div className="w-24 h-24 mx-auto bg-white rounded-full border-4 border-slate-50 shadow-lg flex items-center justify-center mb-6 relative">
<div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center text-slate-900">
<iconify-icon icon="solar:phone-calling-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
</div>
<h3 className="text-lg font-semibold text-slate-900">Confirmation</h3>
<p className="text-sm text-slate-500 mt-2 px-4">Our dispatcher confirms your appointment window.</p>
</div>

<div className="relative z-10 text-center fade-in-up delay-300">
<div className="w-24 h-24 mx-auto bg-white rounded-full border-4 border-slate-50 shadow-lg flex items-center justify-center mb-6 relative">
<div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center text-slate-900">
<iconify-icon icon="solar:screwdrivers-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
</div>
<h3 className="text-lg font-semibold text-slate-900">Diagnosis &amp; Repair</h3>
<p className="text-sm text-slate-500 mt-2 px-4">Expert diagnosis followed by an immediate repair plan.</p>
</div>

<div className="relative z-10 text-center fade-in-up delay-300">
<div className="w-24 h-24 mx-auto bg-white rounded-full border-4 border-slate-50 shadow-lg flex items-center justify-center mb-6 relative">
<div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center text-slate-900">
<iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
</div>
<h3 className="text-lg font-semibold text-slate-900">Back to Normal</h3>
<p className="text-sm text-slate-500 mt-2 px-4">Enjoy your working appliance with our warranty backing.</p>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6" id="gallery">
<div className="grid lg:grid-cols-2 gap-16">

<div>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-8">Recent Work</h2>
<div className="columns-2 gap-4 space-y-4">

<img alt="Technician Repairing" className="w-full rounded-2xl object-cover shadow-sm hover:shadow-lg transition-shadow" src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<img alt="Washing Machine" className="w-full rounded-2xl object-cover shadow-sm hover:shadow-lg transition-shadow" src="https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?q=80&amp;w=2669&amp;auto=format&amp;fit=crop"/>
<img alt="Kitchen Interior" className="w-full rounded-2xl object-cover shadow-sm hover:shadow-lg transition-shadow" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<img alt="Repair Tools" className="w-full rounded-2xl object-cover shadow-sm hover:shadow-lg transition-shadow" src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&amp;w=2669&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-2">Service Area</h2>
<p className="text-slate-500 mb-8">Serving all of Orange County with reliable technicians stationed locally.</p>
<div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-8">
<div className="flex items-center gap-3 text-slate-600">
<iconify-icon className="text-slate-400" icon="solar:map-point-linear"></iconify-icon>
                        Lake Forest
                    </div>
<div className="flex items-center gap-3 text-slate-600">
<iconify-icon className="text-slate-400" icon="solar:map-point-linear"></iconify-icon>
                        Irvine
                    </div>
<div className="flex items-center gap-3 text-slate-600">
<iconify-icon className="text-slate-400" icon="solar:map-point-linear"></iconify-icon>
                        Anaheim
                    </div>
<div className="flex items-center gap-3 text-slate-600">
<iconify-icon className="text-slate-400" icon="solar:map-point-linear"></iconify-icon>
                        Newport Beach
                    </div>
<div className="flex items-center gap-3 text-slate-600">
<iconify-icon className="text-slate-400" icon="solar:map-point-linear"></iconify-icon>
                        Santa Ana
                    </div>
<div className="flex items-center gap-3 text-slate-600">
<iconify-icon className="text-slate-400" icon="solar:map-point-linear"></iconify-icon>
                        Mission Viejo
                    </div>
<div className="flex items-center gap-3 text-slate-600">
<iconify-icon className="text-slate-400" icon="solar:map-point-linear"></iconify-icon>
                        Costa Mesa
                    </div>
<div className="flex items-center gap-3 text-slate-600">
<iconify-icon className="text-slate-400" icon="solar:map-point-linear"></iconify-icon>
                        Laguna Hills
                    </div>
</div>
<div className="w-full h-48 bg-slate-50 rounded-xl overflow-hidden relative">

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#64748b 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
<div className="w-4 h-4 bg-orange-500 rounded-full animate-ping absolute"></div>
<div className="w-4 h-4 bg-orange-500 rounded-full relative border-2 border-white"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="reviews">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-12 text-center">Locals Love Royal Star</h2>
<div className="grid md:grid-cols-3 gap-6">
<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm fade-in-up">
<div className="flex gap-1 text-orange-400 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-600 mb-6 leading-relaxed">"My dryer stopped heating on a Saturday. Royal Star sent someone out the same afternoon. Incredible service."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 font-bold text-xs">MR</div>
<span className="text-sm font-medium text-slate-900">Mark R.</span>
</div>
</div>
<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm fade-in-up delay-100">
<div className="flex gap-1 text-orange-400 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-600 mb-6 leading-relaxed">"Honest pricing. They told me it was cheaper to repair my dishwasher than replace it. Runs like new now."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 font-bold text-xs">JL</div>
<span className="text-sm font-medium text-slate-900">Jennifer L.</span>
</div>
</div>
<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm fade-in-up delay-200">
<div className="flex gap-1 text-orange-400 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<div className="flex items-center gap-2 mb-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
<iconify-icon className="text-green-500" icon="solar:verified-check-bold"></iconify-icon> Verified Customer
                    </div>
<p className="text-slate-600 mb-6 leading-relaxed">"Clean, courteous, and very knowledgeable. The technician explained exactly what went wrong."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 font-bold text-xs">DT</div>
<span className="text-sm font-medium text-slate-900">David T.</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-5xl mx-auto px-6 text-center">
<div className="bg-slate-900 rounded-[2.5rem] p-12 md:p-16 relative overflow-hidden shadow-2xl">

<div className="absolute top-0 left-0 w-64 h-64 bg-orange-500 rounded-full blur-[100px] opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
<div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-[100px] opacity-20 translate-x-1/2 translate-y-1/2"></div>
<div className="relative z-10">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">Need Appliance Repair Today?</h2>
<p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto font-light">Don't let a broken appliance disrupt your life. Request service now and our technician will contact you shortly.</p>
<button className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-full text-lg font-medium transition-all shadow-xl shadow-orange-500/25 inline-flex items-center gap-2 transform hover:scale-105 duration-200" onclick="openModal()">
                    Get Started
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-100 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<a className="text-slate-900 font-semibold text-lg tracking-tight flex items-center gap-2 mb-6" href="#">
<div className="w-8 h-8 bg-slate-900 text-white rounded-lg flex items-center justify-center">
<span className="font-bold text-sm">R</span>
</div>
                        ROYAL STAR
                    </a>
<p className="text-slate-500 text-sm leading-relaxed mb-6">Family-owned appliance repair serving Orange County with pride and precision since 2010.</p>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-6">Company</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-slate-900 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#services">Services</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#reviews">Testimonials</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Careers</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-6">Services</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-slate-900 transition-colors" href="#">Refrigerator Repair</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Washer &amp; Dryer</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Oven &amp; Stove</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Dishwasher</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-6">Contact</h4>
<ul className="space-y-4 text-sm text-slate-500">
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-slate-400" icon="solar:map-point-linear"></iconify-icon>
                            Lake Forest, CA 92630
                        </li>
<li>
<a className="flex items-center gap-3 hover:text-slate-900 transition-colors" href="tel:5551234567">
<iconify-icon className="text-slate-400" icon="solar:phone-calling-linear"></iconify-icon>
                                (555) 123-4567
                            </a>
</li>
<li>
<a className="flex items-center gap-3 hover:text-slate-900 transition-colors" href="mailto:info@royalstar.com">
<iconify-icon className="text-slate-400" icon="solar:letter-linear"></iconify-icon>
                                info@royalstar.com
                            </a>
</li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">

<div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
<p className="text-slate-400">© 2026 Royal Star Appliance Services. All rights reserved.</p>
</div>

<div className="flex items-center gap-6 text-slate-400">
<a className="hover:text-slate-900" href="#">Privacy Policy</a>
<a className="hover:text-slate-900" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

<div className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop bg-slate-900/40 backdrop-blur-sm hidden" id="contactModal">
<div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden modal-content" id="modalContent">
<div className="p-8 relative">

<button className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 transition-colors" onclick="closeModal()">
<iconify-icon icon="solar:close-circle-linear" width="28"></iconify-icon>
</button>
<h3 className="text-2xl font-semibold text-slate-900 mb-2">Request Service</h3>
<p className="text-slate-500 text-sm mb-6">Tell us about the issue and we'll get back to you shortly.</p>
<form className="space-y-5" onsubmit="handleFormSubmit(event)">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5 uppercase tracking-wide">Full Name</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white transition-all" placeholder="John Doe" required="" type="text"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5 uppercase tracking-wide">Phone</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white transition-all" placeholder="(555) 000-0000" required="" type="tel"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5 uppercase tracking-wide">Appliance</label>
<div className="relative">
<select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white transition-all appearance-none cursor-pointer">
<option>Refrigerator</option>
<option>Washer</option>
<option>Dryer</option>
<option>Dishwasher</option>
<option>Oven/Stove</option>
<option>Microwave</option>
<option>Other</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5 uppercase tracking-wide">Problem Description</label>
<textarea className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white transition-all resize-none" placeholder="e.g. Not cooling, making noise..." rows="3"></textarea>
</div>
<button className="w-full bg-slate-900 hover:bg-slate-800 text-white py-4 rounded-xl font-medium transition-all flex items-center justify-center gap-2 mt-2" id="submitBtn" type="submit">
<span>Send Request</span>
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
<p className="text-xs text-slate-400 text-center mt-4">No payment required until service is complete.</p>
</form>

<div className="hidden absolute inset-0 bg-white z-10 flex-col items-center justify-center text-center p-8" id="successMessage">
<div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
<iconify-icon icon="solar:check-circle-bold" width="32"></iconify-icon>
</div>
<h4 className="text-xl font-semibold text-slate-900 mb-2">Request Received!</h4>
<p className="text-slate-500 text-sm mb-8">Our technician will call you within 30 minutes to confirm your appointment window.</p>
<button className="bg-slate-100 hover:bg-slate-200 text-slate-900 px-8 py-3 rounded-full text-sm font-medium transition-colors" onclick="closeModal()">
                        Close
                    </button>
</div>
</div>
</div>
</div>



    </>
  );
}
