import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();

        // Intersection Observer for scroll animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    observer.unobserve(entry.target); // Only animate once
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-element').forEach(el => {
            observer.observe(el);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass-panel border-b-0 border-b-white/5 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-gradient-to-br from-lime-400 to-emerald-600 rounded-lg flex items-center justify-center text-slate-950 font-bold tracking-tighter shadow-[0_0_15px_rgba(132,204,22,0.5)]">
                    AG
                </div>
<span className="text-xl font-medium tracking-tight text-white">AG Auto Detailing</span>
</div>
<div className="hidden md:flex gap-8 text-base font-medium">
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
<a className="hover:text-white transition-colors" href="#locations">Locations</a>
</div>
<a className="hidden md:flex items-center gap-2 bg-white text-slate-950 px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-200 transition-colors" href="tel:4752927088">
<svg className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
                (475) 292-7088
            </a>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-lime-500/10 rounded-full blur-3xl -z-10 animate-pulse duration-[5000ms]"></div>
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="reveal-element inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-lime-400 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500"></span>
</span>
                Serving NYC, Stamford, &amp; East Coast
            </div>
<h1 className="reveal-element text-5xl md:text-7xl font-medium text-white tracking-tight mb-8 leading-[1.1] delay-100">
                Showroom finish,<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-500">delivered to your driveway.</span>
</h1>
<p className="reveal-element text-xl md:text-2xl text-slate-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed delay-200">
                Premium mobile detailing services. We bring water, power, and professional care directly to you.
            </p>
<div className="reveal-element flex flex-col sm:flex-row gap-4 justify-center delay-300">
<a className="bg-lime-500 text-slate-950 px-8 py-4 rounded-full text-lg font-medium hover:bg-lime-400 transition-all flex items-center justify-center gap-2 hover:scale-105 active:scale-95 duration-200" href="tel:4752927088">
                    Book Appointment
                    <svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="glass-panel text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/10 transition-all hover:scale-105 active:scale-95 duration-200" href="#pricing">
                    View Packages
                </a>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="pricing">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="reveal-element md:text-4xl text-3xl font-medium text-white tracking-tight mb-4">Transparent Pricing</h2>
<p className="reveal-element text-slate-400 text-xl delay-100">Choose the level of care your vehicle deserves.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">

<div className="reveal-element glass-panel p-8 md:p-10 rounded-3xl flex flex-col relative group hover:border-lime-500/30 transition-colors duration-300 delay-200">
<div className="mb-8">
<h3 className="text-2xl font-medium text-white mb-2">Basic Detail</h3>
<p className="text-slate-400 text-base">Perfect for regular maintenance and refreshing your interior.</p>
</div>
<div className="space-y-4 mb-10 flex-grow">

<div className="flex items-start gap-3">
<svg className="lucide lucide-check w-5 h-5 text-lime-400 mt-1 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-slate-200">Interior Vacuuming &amp; Blow Out</span>
</div>
<div className="flex items-start gap-3">
<svg className="lucide lucide-check w-5 h-5 text-lime-400 mt-1 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-slate-200">Cleaning &amp; Conditioning</span>
</div>
<div className="flex items-start gap-3">
<svg className="lucide lucide-check w-5 h-5 text-lime-400 mt-1 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-slate-200">Full Interior Wipe Down</span>
</div>
<div className="flex items-start gap-3">
<svg className="lucide lucide-check w-5 h-5 text-lime-400 mt-1 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-slate-200">Streak-Free Window Cleaning</span>
</div>
<div className="flex items-start gap-3">
<svg className="lucide lucide-check w-5 h-5 text-lime-400 mt-1 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-slate-200">All Weather Floor Mats Cleaned</span>
</div>
<div className="flex items-start gap-3">
<svg className="lucide lucide-check w-5 h-5 text-lime-400 mt-1 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-slate-200">Basic Exterior Wash</span>
</div>
</div>
<div className="pt-8 border-t border-white/10">
<div className="grid grid-cols-3 gap-4 text-center">
<div className="bg-white/5 rounded-xl p-3">
<div className="text-sm text-slate-400 mb-1">2-Door</div>
<div className="text-xl font-medium text-white">$80</div>
</div>
<div className="bg-white/5 rounded-xl p-3">
<div className="text-sm text-slate-400 mb-1">Sedan</div>
<div className="text-xl font-medium text-white">$90</div>
</div>
<div className="bg-white/5 rounded-xl p-3">
<div className="text-sm text-slate-400 mb-1">SUV/Truck</div>
<div className="text-xl font-medium text-white">$100</div>
</div>
</div>
</div>
</div>

<div className="reveal-element glass-panel p-8 md:p-10 rounded-3xl flex flex-col relative border-lime-500/50 shadow-[0_0_50px_-12px_rgba(132,204,22,0.15)] delay-300">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-lime-400 to-emerald-500 text-slate-950 px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase">
                        Most Popular
                    </div>
<div className="mb-8">
<h3 className="text-2xl font-medium text-white mb-2">Full Detail</h3>
<p className="text-slate-400 text-base">Complete restoration for that showroom shine inside and out.</p>
</div>
<div className="space-y-4 mb-10 flex-grow">
<div className="flex items-start gap-3">
<svg className="lucide lucide-check-circle-2 w-5 h-5 text-emerald-400 mt-1 shrink-0" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-white font-medium">Everything in Basic Detail</span>
</div>
<div className="flex items-start gap-3">
<svg className="lucide lucide-check w-5 h-5 text-slate-400 mt-1 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-slate-200">Interior Dressing &amp; Deep Clean</span>
</div>
<div className="flex items-start gap-3">
<svg className="lucide lucide-check w-5 h-5 text-slate-400 mt-1 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-slate-200">Vacuum Extraction &amp; Shampoo Mats</span>
</div>
<div className="flex items-start gap-3">
<svg className="lucide lucide-check w-5 h-5 text-slate-400 mt-1 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-slate-200">Glossy Tire Shine</span>
</div>
<div className="flex items-start gap-3">
<svg className="lucide lucide-check w-5 h-5 text-slate-400 mt-1 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-slate-200">Drying Aid, Spray Wax &amp; Sealant</span>
</div>
<div className="flex items-start gap-3">
<svg className="lucide lucide-check w-5 h-5 text-slate-400 mt-1 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-slate-200">Ultimate Exterior Wash</span>
</div>
</div>
<div className="pt-8 border-t border-white/10">
<div className="grid grid-cols-3 gap-4 text-center">
<div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-3">
<div className="text-sm text-emerald-400 mb-1">2-Door</div>
<div className="text-xl font-medium text-white">$180</div>
</div>
<div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-3">
<div className="text-sm text-emerald-400 mb-1">Sedan</div>
<div className="text-xl font-medium text-white">$200</div>
</div>
<div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-3">
<div className="text-sm text-emerald-400 mb-1">SUV/Truck</div>
<div className="text-xl font-medium text-white">$230</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-slate-900/50" id="services">
<div className="max-w-6xl mx-auto">
<h2 className="reveal-element text-2xl md:text-3xl font-medium text-white tracking-tight mb-10 text-center">Additional Services</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="reveal-element bg-slate-950 border border-white/5 p-6 rounded-xl hover:border-lime-500/30 transition-colors flex items-center gap-4 delay-100">
<div className="bg-slate-900 p-3 rounded-lg text-lime-400">
<svg className="lucide lucide-settings w-6 h-6" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
<span className="text-white font-medium">Engine Bay Cleaning</span>
</div>
<div className="reveal-element bg-slate-950 border border-white/5 p-6 rounded-xl hover:border-lime-500/30 transition-colors flex items-center gap-4 delay-150">
<div className="bg-slate-900 p-3 rounded-lg text-lime-400">
<svg className="lucide lucide-lightbulb w-6 h-6" data-lucide="lightbulb" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>
</div>
<span className="text-white font-medium">Headlight Restoration</span>
</div>
<div className="reveal-element bg-slate-950 border border-white/5 p-6 rounded-xl hover:border-lime-500/30 transition-colors flex items-center gap-4 delay-200">
<div className="bg-slate-900 p-3 rounded-lg text-lime-400">
<svg className="lucide lucide-eraser w-6 h-6" data-lucide="eraser" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21"></path><path d="m5.082 11.09 8.828 8.828"></path></svg>
</div>
<span className="text-white font-medium">Claybar Treatment</span>
</div>
<div className="reveal-element bg-slate-950 border border-white/5 p-6 rounded-xl hover:border-lime-500/30 transition-colors flex items-center gap-4 delay-100">
<div className="bg-slate-900 p-3 rounded-lg text-lime-400">
<svg className="lucide lucide-cat w-6 h-6" data-lucide="cat" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z"></path><path d="M8 14v.5"></path><path d="M16 14v.5"></path><path d="M11.25 16.25h1.5L12 17l-.75-.75Z"></path></svg>
</div>
<span className="text-white font-medium">Pet Hair Removal</span>
</div>
<div className="reveal-element bg-slate-950 border border-white/5 p-6 rounded-xl hover:border-lime-500/30 transition-colors flex items-center gap-4 delay-150">
<div className="bg-slate-900 p-3 rounded-lg text-lime-400">
<svg className="lucide lucide-droplets w-6 h-6" data-lucide="droplets" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></svg>
</div>
<span className="text-white font-medium">Steam Clean</span>
</div>
<div className="reveal-element bg-slate-950 border border-white/5 p-6 rounded-xl hover:border-lime-500/30 transition-colors flex items-center gap-4 delay-200">
<div className="bg-slate-900 p-3 rounded-lg text-lime-400">
<svg className="lucide lucide-sparkles w-6 h-6" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<span className="text-white font-medium">Plastic Restoration</span>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10 pt-20 pb-10 px-6" id="locations">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
<div className="text-center md:text-left reveal-element">
<div className="text-2xl font-semibold text-white tracking-tight mb-4">AG Auto Detailing</div>
<p className="text-slate-400 max-w-sm mb-6">
                    Professional auto detailing delivering exceptional results. 
                    Serving Stamford CT, NYC, and surrounding East Coast areas.
                </p>
<div className="flex items-center justify-center md:justify-start gap-2 text-lime-400 font-medium">
<svg className="lucide lucide-map-pin w-5 h-5" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    Stamford CT - NYC
                </div>
</div>
<div className="text-center md:text-right reveal-element delay-100">
<div className="text-sm font-medium text-slate-500 mb-2 uppercase tracking-wider">Book Now</div>
<a className="text-3xl md:text-5xl font-medium text-white tracking-tight hover:text-lime-400 transition-colors" href="tel:4752927088">
                    (475) 292-7088
                </a>
<div className="mt-8 flex justify-center md:justify-end gap-6">
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<svg className="lucide lucide-instagram w-6 h-6" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<svg className="lucide lucide-facebook w-6 h-6" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<svg className="lucide lucide-mail w-6 h-6" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 text-center md:text-left text-base text-slate-600">
            © 2024 AG Auto Detailing. All rights reserved.
        </div>
</footer>


    </>
  );
}
