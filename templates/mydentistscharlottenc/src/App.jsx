import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal').forEach(el => {
                observer.observe(el);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 top-0 left-0 border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group select-none" href="#">
<div className="text-4xl font-light tracking-tighter text-white group-hover:text-lime-400 transition-colors leading-none">
                    MD
                </div>
<div className="flex flex-col justify-center pt-1">
<span className="text-lg font-light tracking-[0.15em] text-white leading-none">MY DENTISTS</span>
<div className="h-px w-full bg-zinc-700 group-hover:bg-lime-400 transition-colors my-1.5"></div>
<span className="text-[0.6rem] font-medium tracking-[0.25em] text-zinc-500 uppercase leading-none group-hover:text-zinc-300 transition-colors">Implants and Aesthetics</span>
</div>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#hero">Home</a>
<a className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#features">Services</a>
<a className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#pricing">Pricing</a>
<a className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#testimonials">Stories</a>
</div>
<a className="hidden md:flex items-center gap-2 bg-lime-400 text-black px-5 py-2.5 rounded-full text-sm font-medium hover:bg-lime-300 transition-all transform hover:scale-[1.02]" href="#contact">
                Book Appointment
                <span className="iconify" data-icon="solar:arrow-right-linear" data-width="16"></span>
</a>

<button className="md:hidden text-white">
<span className="iconify" data-icon="solar:hamburger-menu-linear" data-width="28"></span>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden" id="hero">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="order-2 lg:order-1 flex flex-col items-start space-y-8 reveal">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-xs font-medium text-lime-400">
<span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse"></span>
                        Accepting New Patients
                    </div>
<h1 className="text-5xl lg:text-7xl font-medium text-white tracking-tight leading-[1.1]">
                        Your Perfect Smile <br/>
<span className="text-zinc-500">Starts From Here.</span>
</h1>
<p className="text-lg lg:text-xl text-zinc-400 leading-relaxed max-w-lg">
                        Experience world-class dental care with cutting-edge technology. We craft confident smiles with a gentle, personalized touch.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<button className="flex items-center justify-center gap-2 bg-lime-400 text-black px-8 py-4 rounded-full text-base font-medium hover:bg-lime-300 transition-all w-full sm:w-auto">
<span className="iconify" data-icon="solar:phone-calling-linear" data-width="20"></span>
                            (704) 375-8577
                        </button>
<button className="flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-medium text-white border border-zinc-700 hover:bg-zinc-900 transition-all w-full sm:w-auto">
<span className="iconify" data-icon="solar:calendar-linear" data-width="20"></span>
                            Book Online
                        </button>
</div>
<div className="pt-8 flex items-center gap-4 text-sm text-zinc-500 reveal">
<div className="flex -space-x-3">
<img alt="User" className="w-10 h-10 rounded-full border-2 border-zinc-950 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-zinc-950 object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-zinc-950 object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
</div>
<div className="flex flex-col">
<div className="flex text-lime-400">
<span className="iconify" data-icon="solar:star-bold" data-width="16"></span>
<span className="iconify" data-icon="solar:star-bold" data-width="16"></span>
<span className="iconify" data-icon="solar:star-bold" data-width="16"></span>
<span className="iconify" data-icon="solar:star-bold" data-width="16"></span>
<span className="iconify" data-icon="solar:star-bold" data-width="16"></span>
</div>
<span>Trusted by 4k+ patients</span>
</div>
</div>
</div>

<div className="order-1 lg:order-2 reveal relative">
<div className="absolute -inset-4 bg-gradient-to-r from-lime-400/20 to-transparent blur-3xl opacity-30 rounded-full"></div>
<div className="relative w-full h-[500px] lg:h-[600px] overflow-hidden rounded-t-[12rem] rounded-b-3xl border border-zinc-800">
<img alt="Dentist and patient" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>

<div className="absolute bottom-8 right-8 bg-zinc-900/90 backdrop-blur-md border border-zinc-800 p-4 rounded-2xl max-w-[200px] shadow-2xl reveal delay-200">
<div className="flex items-center gap-3 mb-2">
<div className="w-10 h-10 rounded-full bg-lime-400/10 flex items-center justify-center text-lime-400">
<span className="iconify" data-icon="solar:smile-circle-linear" data-width="24"></span>
</div>
<div>
<p className="text-xs text-zinc-400">Satisfaction</p>
<p className="text-lg font-medium text-white">99.8%</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-24 pt-8 border-t border-zinc-900 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-50 reveal">
<div className="flex items-center justify-center gap-2">
<span className="iconify text-2xl" data-icon="solar:shield-check-linear"></span>
<span className="text-lg font-medium tracking-tight">Cigna</span>
</div>
<div className="flex items-center justify-center gap-2">
<span className="iconify text-2xl" data-icon="solar:heart-pulse-linear"></span>
<span className="text-lg font-medium tracking-tight">Aetna</span>
</div>
<div className="flex items-center justify-center gap-2">
<span className="iconify text-2xl" data-icon="solar:medical-circle-linear"></span>
<span className="text-lg font-medium tracking-tight">MetLife</span>
</div>
<div className="flex items-center justify-center gap-2">
<span className="iconify text-2xl" data-icon="solar:health-linear"></span>
<span className="text-lg font-medium tracking-tight">Delta Dental</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950 relative" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 reveal">
<div className="max-w-2xl">
<p className="text-lime-400 font-medium mb-2 uppercase tracking-wider text-sm">Our Expertise</p>
<h2 className="text-4xl lg:text-5xl font-medium text-white tracking-tight">Comprehensive dental care <br/> under one roof.</h2>
</div>
<a className="text-zinc-400 hover:text-white flex items-center gap-2 group transition-colors" href="#">
                    View all treatments 
                    <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="solar:arrow-right-linear"></span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative h-[500px] rounded-3xl overflow-hidden cursor-pointer reveal">
<img alt="Preventive" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white mb-4 border border-white/20">
<span className="iconify" data-icon="solar:shield-check-linear" data-width="24"></span>
</div>
<h3 className="text-2xl font-medium text-white mb-2 tracking-tight">Preventive Dentistry</h3>
<p className="text-lg text-zinc-400 line-clamp-2">Regular cleanings, exams, and gum treatments to maintain optimal oral health.</p>
<div className="mt-6 flex items-center gap-2 text-lime-400 text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                            Learn more <span className="iconify" data-icon="solar:arrow-right-linear"></span>
</div>
</div>
</div>

<div className="group relative h-[500px] rounded-3xl overflow-hidden cursor-pointer reveal delay-100">
<img alt="Cosmetic" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white mb-4 border border-white/20">
<span className="iconify" data-icon="solar:stars-minimalistic-linear" data-width="24"></span>
</div>
<h3 className="text-2xl font-medium text-white mb-2 tracking-tight">Cosmetic Dentistry</h3>
<p className="text-lg text-zinc-400 line-clamp-2">Whitening, veneers, and bonding to give you the radiant smile you deserve.</p>
<div className="mt-6 flex items-center gap-2 text-lime-400 text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                            Learn more <span className="iconify" data-icon="solar:arrow-right-linear"></span>
</div>
</div>
</div>

<div className="group relative h-[500px] rounded-3xl overflow-hidden cursor-pointer reveal delay-200">
<img alt="Restorative" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white mb-4 border border-white/20">
<span className="iconify" data-icon="solar:bone-linear" data-width="24"></span>
</div>
<h3 className="text-2xl font-medium text-white mb-2 tracking-tight">Orthodontics</h3>
<p className="text-lg text-zinc-400 line-clamp-2">Invisalign and braces to align teeth and correct bites for all ages.</p>
<div className="mt-6 flex items-center gap-2 text-lime-400 text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                            Learn more <span className="iconify" data-icon="solar:arrow-right-linear"></span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 border-y border-zinc-800">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="relative reveal">
<div className="grid grid-cols-2 gap-4">
<img alt="Clinic" className="rounded-3xl w-full h-64 object-cover translate-y-8" src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&amp;fit=crop&amp;w=400&amp;h=500"/>
<img alt="Patient" className="rounded-3xl w-full h-64 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>

<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-lime-400 text-black px-6 py-4 rounded-2xl shadow-xl text-center">
<span className="block text-3xl font-semibold tracking-tight">15+</span>
<span className="text-sm font-medium">Years Experience</span>
</div>
</div>
<div className="reveal">
<h2 className="text-3xl lg:text-4xl font-medium text-white mb-6 tracking-tight">We care about your dental health journey</h2>
<p className="text-lg text-zinc-400 mb-8 leading-relaxed">
                        Our experienced team offers comprehensive dental services using state-of-the-art technology. We ensure a comfortable and personalized experience for every patient, transforming anxiety into confidence.
                    </p>
<div className="space-y-4">
<div className="flex items-start gap-3">
<span className="iconify text-lime-400 mt-1" data-icon="solar:check-circle-bold" data-width="20"></span>
<div>
<h4 className="text-white font-medium text-lg">Advanced Technology</h4>
<p className="text-zinc-500 text-base">3D Scanning and Digital X-rays for precision.</p>
</div>
</div>
<div className="flex items-start gap-3">
<span className="iconify text-lime-400 mt-1" data-icon="solar:check-circle-bold" data-width="20"></span>
<div>
<h4 className="text-white font-medium text-lg">Comfort First Approach</h4>
<p className="text-zinc-500 text-base">Sedation options and a relaxing environment.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="testimonials">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<span className="text-lime-400 font-medium uppercase tracking-wider text-sm">Testimonials</span>
<h2 className="text-4xl lg:text-5xl font-medium text-white mt-2 tracking-tight">What our patients say</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl hover:border-zinc-700 transition-colors reveal">
<div className="text-lime-400 mb-6">
<span className="iconify" data-icon="solar:quote-up-bold" data-width="40"></span>
</div>
<p className="text-lg text-zinc-300 mb-8 leading-relaxed">"From the warm welcome at the reception to the painless procedure, My Dentists truly knows how to take care of their patients. Five stars without a doubt!"</p>
<div className="flex items-center gap-4">
<img alt="User" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=60&amp;h=60"/>
<div>
<p className="text-white font-medium">Alan Smith</p>
<p className="text-zinc-500 text-sm">Patient since 2021</p>
</div>
</div>
</div>

<div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl hover:border-zinc-700 transition-colors reveal delay-100">
<div className="text-lime-400 mb-6">
<span className="iconify" data-icon="solar:quote-up-bold" data-width="40"></span>
</div>
<p className="text-lg text-zinc-300 mb-8 leading-relaxed">"MySmile's team made my dental anxiety disappear. They explained everything clearly and made sure I was comfortable throughout the visit."</p>
<div className="flex items-center gap-4">
<img alt="User" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=60&amp;h=60"/>
<div>
<p className="text-white font-medium">Maria Hall</p>
<p className="text-zinc-500 text-sm">Patient since 2023</p>
</div>
</div>
</div>

<div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl hover:border-zinc-700 transition-colors reveal delay-200">
<div className="text-lime-400 mb-6">
<span className="iconify" data-icon="solar:quote-up-bold" data-width="40"></span>
</div>
<p className="text-lg text-zinc-300 mb-8 leading-relaxed">"The aesthetic results of my veneers are beyond what I imagined. The attention to detail is unmatched. Highly recommend!"</p>
<div className="flex items-center gap-4">
<img alt="User" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&amp;fit=crop&amp;w=60&amp;h=60"/>
<div>
<p className="text-white font-medium">John Doe</p>
<p className="text-zinc-500 text-sm">Patient since 2022</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900/30 border-t border-zinc-800" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-12 reveal">
<h2 className="text-4xl lg:text-5xl font-medium text-white mb-4 tracking-tight">Transparent Pricing</h2>
<p className="text-lg text-zinc-400">No hidden fees. Just quality care.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

<div className="p-8 rounded-3xl border border-zinc-800 bg-zinc-950 flex flex-col reveal">
<h3 className="text-xl font-medium text-white mb-2">Check-up</h3>
<div className="text-3xl font-semibold text-white mb-6">$99<span className="text-lg text-zinc-500 font-normal">/visit</span></div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-zinc-400 text-lg">
<span className="iconify text-lime-400" data-icon="solar:check-circle-linear"></span> Consultation
                        </li>
<li className="flex items-center gap-3 text-zinc-400 text-lg">
<span className="iconify text-lime-400" data-icon="solar:check-circle-linear"></span> X-Rays
                        </li>
<li className="flex items-center gap-3 text-zinc-400 text-lg">
<span className="iconify text-lime-400" data-icon="solar:check-circle-linear"></span> Basic Cleaning
                        </li>
</ul>
<button className="w-full py-3 rounded-xl border border-zinc-700 text-white font-medium hover:bg-zinc-800 transition-colors">Book Now</button>
</div>

<div className="p-8 rounded-3xl border border-lime-400/50 bg-zinc-900 relative flex flex-col transform md:-translate-y-4 reveal delay-100">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-lime-400 text-black px-3 py-1 rounded-full text-xs font-semibold">POPULAR</div>
<h3 className="text-xl font-medium text-white mb-2">Whitening</h3>
<div className="text-3xl font-semibold text-white mb-6">$299<span className="text-lg text-zinc-500 font-normal">/session</span></div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-zinc-300 text-lg">
<span className="iconify text-lime-400" data-icon="solar:check-circle-linear"></span> Laser Whitening
                        </li>
<li className="flex items-center gap-3 text-zinc-300 text-lg">
<span className="iconify text-lime-400" data-icon="solar:check-circle-linear"></span> Flouride Treatment
                        </li>
<li className="flex items-center gap-3 text-zinc-300 text-lg">
<span className="iconify text-lime-400" data-icon="solar:check-circle-linear"></span> Take-home Kit
                        </li>
<li className="flex items-center gap-3 text-zinc-300 text-lg">
<span className="iconify text-lime-400" data-icon="solar:check-circle-linear"></span> Sensitivity Relief
                        </li>
</ul>
<button className="w-full py-3 rounded-xl bg-lime-400 text-black font-medium hover:bg-lime-300 transition-colors">Book Now</button>
</div>

<div className="p-8 rounded-3xl border border-zinc-800 bg-zinc-950 flex flex-col reveal delay-200">
<h3 className="text-xl font-medium text-white mb-2">Implants</h3>
<div className="text-3xl font-semibold text-white mb-6">$1,500<span className="text-lg text-zinc-500 font-normal">/tooth</span></div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-zinc-400 text-lg">
<span className="iconify text-lime-400" data-icon="solar:check-circle-linear"></span> 3D Scan
                        </li>
<li className="flex items-center gap-3 text-zinc-400 text-lg">
<span className="iconify text-lime-400" data-icon="solar:check-circle-linear"></span> Titanium Implant
                        </li>
<li className="flex items-center gap-3 text-zinc-400 text-lg">
<span className="iconify text-lime-400" data-icon="solar:check-circle-linear"></span> Custom Crown
                        </li>
</ul>
<button className="w-full py-3 rounded-xl border border-zinc-700 text-white font-medium hover:bg-zinc-800 transition-colors">Contact Us</button>
</div>
</div>
</div>
</section>

<footer className="pt-24 pb-12 border-t border-zinc-800 bg-zinc-950" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 mb-20">
<div className="reveal">
<h2 className="text-4xl font-medium text-white mb-6 tracking-tight">Ready for your best smile?</h2>
<div className="flex flex-col gap-6">
<img className="rounded-2xl border border-zinc-800 opacity-80" reception"="" src="https://images.unsplash.com/photo-1575566445216-3dfffe69d640?q=80&amp;w=4096&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D alt="/>
<div className="space-y-2">
<p className="text-lg text-zinc-300">411 Billingsley Rd, Suite 102<br/> Charlotte, NC 28211</p>
<p className="text-lg text-zinc-300">hello@mydentists.com</p>
</div>
</div>
</div>
<div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800 reveal delay-100 h-fit">
<h3 className="text-2xl font-medium text-white mb-6">Contact Details</h3>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<input className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-lime-400 transition-colors placeholder-zinc-600" placeholder="Your Name" type="text"/>
<input className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-lime-400 transition-colors placeholder-zinc-600" placeholder="email@gmail.com" type="email"/>
</div>
<input className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-lime-400 transition-colors placeholder-zinc-600" placeholder="Your Contact Number" type="tel"/>
<textarea className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-lime-400 transition-colors placeholder-zinc-600 resize-none" placeholder="Your Message Here" rows="4"></textarea>
<button className="bg-lime-400 text-black px-8 py-3 rounded-xl font-medium hover:bg-lime-300 transition-all w-full sm:w-auto">Send Message</button>
</form>
</div>
</div>
<div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-500 text-sm">
<p>© 2024 My Dentists. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
<div className="flex gap-4">
<a className="p-2 rounded-full bg-zinc-900 hover:bg-zinc-800 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="solar:instagram-linear" data-width="20"></span>
</a>
<a className="p-2 rounded-full bg-zinc-900 hover:bg-zinc-800 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="solar:facebook-linear" data-width="20"></span>
</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
