import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // GSAP Animations
        gsap.registerPlugin(ScrollTrigger);

        // Preloader Sequence
        const tl = gsap.timeline();

        tl.to(".loader-text", {
            y: 0,
            duration: 1.2,
            ease: "power4.out",
            stagger: 0.2
        })
        .to("#loader-bar", {
            width: "100%",
            duration: 1.2,
            ease: "expo.inOut"
        }, "-=0.8")
        .to("#preloader", {
            yPercent: -100,
            duration: 1,
            ease: "expo.inOut"
        })
        .from(".hero-reveal", {
            y: 60,
            opacity: 0,
            duration: 1.2,
            stagger: 0.15,
            ease: "power3.out"
        }, "-=0.4");

        // Scroll Animations
        gsap.utils.toArray('.gsap-fade-up').forEach(element => {
            gsap.from(element, {
                scrollTrigger: {
                    trigger: element,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            });
        });

        // Service Cards Stagger
        gsap.from(".service-card", {
            scrollTrigger: {
                trigger: "#services",
                start: "top 75%"
            },
            y: 80,
            opacity: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out"
        });

        // Popup Logic
        const popup = document.getElementById('booking-popup');
        const backdrop = document.getElementById('popup-backdrop');
        const content = document.getElementById('popup-content');

        function togglePopup() {
            if (popup.classList.contains('hidden')) {
                // Open
                popup.classList.remove('hidden');
                document.body.style.overflow = 'hidden'; // Lock scroll
                setTimeout(() => {
                    backdrop.classList.remove('opacity-0');
                    content.classList.remove('scale-95', 'opacity-0');
                    content.classList.add('scale-100', 'opacity-100');
                }, 10);
            } else {
                // Close
                backdrop.classList.add('opacity-0');
                content.classList.remove('scale-100', 'opacity-100');
                content.classList.add('scale-95', 'opacity-0');
                
                setTimeout(() => {
                    popup.classList.add('hidden');
                    document.body.style.overflow = 'auto'; // Unlock scroll
                }, 300);
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-white" id="preloader">
<div className="overflow-hidden">
<h1 className="loader-text text-4xl md:text-6xl font-semibold tracking-tighter text-slate-950 transform translate-y-full">
                Dr. Sohana Laraib
            </h1>
</div>
<div className="overflow-hidden mt-3">
<p className="loader-text text-sm md:text-lg font-medium tracking-widest uppercase text-teal-700 transform translate-y-full">
                Dental Surgeon
            </p>
</div>
<div className="absolute bottom-0 left-0 w-full h-1.5 bg-slate-100">
<div className="h-full bg-teal-700 w-0" id="loader-bar"></div>
</div>
</div>

<nav className="fixed top-0 w-full z-40 px-4 md:px-8 py-6">
<div className="max-w-7xl mx-auto glass-panel rounded-full px-8 py-4 flex justify-between items-center shadow-lg shadow-slate-200/40">
<a className="text-xl font-bold tracking-tighter text-slate-950 z-50 relative group" href="#">
                SL<span className="text-teal-600">.</span>
</a>
<div className="hidden md:flex space-x-10 text-base font-medium text-slate-700">
<a className="hover:text-teal-700 transition-colors" href="#services">Treatments</a>
<a className="hover:text-teal-700 transition-colors" href="#about">About</a>
<a className="hover:text-teal-700 transition-colors" href="#location">Location</a>
</div>
<button className="hidden md:flex items-center gap-2 bg-slate-950 text-white px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide hover:bg-teal-700 transition-colors shadow-xl shadow-slate-300" onclick="togglePopup()">
                Book Visit
                <iconify-icon icon="solar:arrow-right-linear" strokeWidth="2" width="18"></iconify-icon>
</button>

<button className="md:hidden text-slate-950">
<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
</nav>

<header className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20">

<div className="absolute inset-0 z-0">
<video autoplay="" className="w-full h-full object-cover opacity-60 grayscale-[20%]" loop="" muted="" playsinline="">
<source src="https://videos.pexels.com/video-files/3191572/3191572-uhd_2560_1440_25fps.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 video-overlay"></div>
</div>
<div className="relative z-10 max-w-6xl mx-auto px-6 text-center mt-10">
<div className="hero-reveal overflow-hidden mb-8 flex justify-center">
<div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-teal-200 bg-teal-50/80 backdrop-blur-sm shadow-sm">
<span className="relative flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-600"></span>
</span>
<span className="text-xs md:text-sm font-bold text-teal-800 tracking-wide uppercase">Accepting New Patients</span>
</div>
</div>
<h1 className="hero-reveal text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tighter text-slate-950 mb-8 leading-[0.95]">
                Smile with <br className="hidden md:block"/>
<span className="text-teal-700 italic font-medium">Precision</span> &amp; Care.
            </h1>
<p className="hero-reveal text-xl md:text-2xl font-medium text-slate-700 max-w-2xl mx-auto mb-12 leading-relaxed">
                Advanced dental surgery and aesthetic restoration by <span className="font-bold text-slate-950 underline decoration-teal-400 decoration-2 underline-offset-4">Dr. Sohana Laraib</span> in Dera Ghazi Khan.
            </p>
<div className="hero-reveal flex flex-col md:flex-row gap-5 justify-center items-center">
<button className="w-full md:w-auto px-10 py-4 bg-slate-950 text-white rounded-full text-base font-semibold hover:bg-teal-700 transition-all flex justify-center items-center gap-2 shadow-xl shadow-slate-300 group" onclick="togglePopup()">
                    Schedule Appointment
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:calendar-add-linear" strokeWidth="2" width="20"></iconify-icon>
</button>
<a className="w-full md:w-auto px-10 py-4 bg-white border-2 border-slate-200 text-slate-800 rounded-full text-base font-semibold hover:border-slate-400 hover:bg-slate-50 transition-all flex justify-center items-center gap-2" href="#location">
                    Clinic Location
                    <iconify-icon icon="solar:map-point-linear" strokeWidth="2" width="20"></iconify-icon>
</a>
</div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-100 animate-bounce">
<span className="text-xs font-bold text-slate-950 uppercase tracking-widest">Scroll Down</span>
<iconify-icon className="text-slate-950" icon="solar:arrow-down-linear" width="24"></iconify-icon>
</div>
</header>

<section className="py-24 md:py-36 bg-white relative border-b border-slate-100" id="about">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
<div className="gsap-fade-up">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-slate-950 mb-8 leading-[1.1]">
                    Redefining dental care with a <span className="text-teal-600">patient-first</span> approach.
                </h2>
<p className="text-xl text-slate-700 font-medium leading-relaxed mb-10">
                    Located at Doctors Hospital, we utilize state-of-the-art technology to ensure your treatments are effective, minimally invasive, and comfortable. Dr. Sohana Laraib specializes in surgical and cosmetic procedures designed to last a lifetime.
                </p>
<div className="grid grid-cols-2 gap-10 border-t-2 border-slate-100 pt-10">
<div>
<div className="text-4xl md:text-5xl font-bold text-slate-950 mb-2">100%</div>
<div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Sterilization Protocols</div>
</div>
<div>
<div className="text-4xl md:text-5xl font-bold text-slate-950 mb-2">24/7</div>
<div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Emergency Support</div>
</div>
</div>
</div>
<div className="relative h-[500px] rounded-3xl overflow-hidden bg-slate-100 shadow-2xl gsap-fade-up group">

<img alt="Dental Tools" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&amp;w=2068&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
<div className="absolute bottom-8 left-8 right-8 text-white">
<div className="flex items-center gap-4 mb-3">
<div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-white">
<iconify-icon icon="solar:scanner-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-lg font-bold">Advanced Diagnostics</p>
<p className="text-sm text-slate-200 font-medium">Digital X-Rays &amp; 3D Imaging</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-28 bg-slate-50 border-t border-slate-200" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 gsap-fade-up">
<div className="max-w-2xl">
<h3 className="text-sm font-bold text-teal-700 tracking-widest uppercase mb-3">Our Expertise</h3>
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-slate-950 leading-tight">Comprehensive treatments for a healthy smile.</h2>
</div>
<button className="shrink-0 px-6 py-3 bg-white border border-slate-300 rounded-full text-slate-900 font-semibold hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all flex items-center gap-2" onclick="togglePopup()">
                    View Price List <iconify-icon icon="solar:arrow-right-linear" strokeWidth="2"></iconify-icon>
</button>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="service-card group p-10 bg-white rounded-3xl shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-300 border border-slate-200 cursor-pointer relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon icon="solar:tooth-linear" width="120"></iconify-icon>
</div>
<div className="w-16 h-16 bg-teal-50 border border-teal-100 rounded-2xl flex items-center justify-center text-teal-700 mb-8 group-hover:scale-110 transition-transform shadow-sm">
<iconify-icon icon="solar:tooth-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h4 className="text-2xl font-bold text-slate-950 mb-4">General Dentistry</h4>
<p className="text-base font-medium text-slate-600 leading-relaxed mb-6">Routine checkups, deep cleaning, scaling, and composite fillings to maintain optimal oral hygiene.</p>
<span className="text-teal-700 font-bold text-sm flex items-center gap-2 group-hover:gap-4 transition-all">Learn More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>

<div className="service-card group p-10 bg-slate-900 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-800 cursor-pointer relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-10 text-white">
<iconify-icon icon="solar:heart-pulse-linear" width="120"></iconify-icon>
</div>
<div className="w-16 h-16 bg-white/10 border border-white/20 rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform shadow-sm">
<iconify-icon icon="solar:heart-pulse-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h4 className="text-2xl font-bold text-white mb-4">Oral Surgery</h4>
<p className="text-base font-medium text-slate-400 leading-relaxed mb-6">Complex extractions, root canals (RCT), and corrective surgical procedures by a specialist.</p>
<span className="text-white font-bold text-sm flex items-center gap-2 group-hover:gap-4 transition-all">Learn More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>

<div className="service-card group p-10 bg-white rounded-3xl shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-300 border border-slate-200 cursor-pointer relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon icon="solar:magic-stick-3-linear" width="120"></iconify-icon>
</div>
<div className="w-16 h-16 bg-purple-50 border border-purple-100 rounded-2xl flex items-center justify-center text-purple-700 mb-8 group-hover:scale-110 transition-transform shadow-sm">
<iconify-icon icon="solar:magic-stick-3-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h4 className="text-2xl font-bold text-slate-950 mb-4">Aesthetic Design</h4>
<p className="text-base font-medium text-slate-600 leading-relaxed mb-6">Teeth whitening, veneers, and complete smile makeovers to give you the perfect look.</p>
<span className="text-purple-700 font-bold text-sm flex items-center gap-2 group-hover:gap-4 transition-all">Learn More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>
</div>
</div>
</section>

<section className="py-0 relative bg-slate-950" id="location">
<div className="grid lg:grid-cols-2 min-h-[700px]">

<div className="relative w-full h-full min-h-[400px] bg-slate-800 overflow-hidden group">
<iframe allowfullscreen="" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3480.959929553644!2d70.637!3d30.045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDAyJzQyLjAiTiA3MMKwMzgnMTMuMiJF!5e0!3m2!1sen!2s!4v1600000000000!5m2!1sen!2s" style={{border: '0', filter: 'grayscale(100%) invert(90%) contrast(1.2)'}} width="100%"></iframe>
<div className="absolute bottom-10 left-10 bg-slate-900 p-6 rounded-2xl shadow-2xl border border-slate-800 max-w-sm z-10">
<div className="flex items-start gap-4">
<div className="text-teal-400 mt-1"><iconify-icon icon="solar:map-point-bold" width="28"></iconify-icon></div>
<div>
<p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Primary Location</p>
<p className="text-xl font-bold text-white mb-1">Doctors Hospital</p>
<p className="text-sm text-slate-400 font-medium">Dera Ghazi Khan, Punjab</p>
</div>
</div>
</div>
</div>

<div className="bg-slate-950 text-white p-12 lg:p-24 flex flex-col justify-center relative overflow-hidden">

<div className="absolute -top-40 -right-40 w-96 h-96 bg-teal-600 rounded-full blur-[150px] opacity-30"></div>
<div className="relative z-10 gsap-fade-up">
<h2 className="text-5xl lg:text-7xl font-semibold tracking-tighter mb-12">Visit the Clinic</h2>
<div className="space-y-12">
<div className="flex gap-6 items-start">
<div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center shrink-0 text-teal-400">
<iconify-icon icon="solar:buildings-2-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">Address</h4>
<address className="not-italic text-2xl font-medium text-slate-100 leading-snug">
                                    Doctors Hospital, Medical College,<br/>
                                    Jampur Rd, Opposite Ghazi,<br/>
                                    Fareed Abad BLOCK 18,<br/>
                                    Dera Ghazi Khan
                                </address>
</div>
</div>
<div className="flex gap-6 items-start">
<div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center shrink-0 text-teal-400">
<iconify-icon icon="solar:clock-circle-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">Operating Hours</h4>
<p className="text-2xl font-medium text-slate-100 mb-1">
                                    Mon - Sat: <span className="text-teal-400">5:00 PM - 10:00 PM</span>
</p>
<p className="text-base font-medium text-slate-500">Sunday: Emergency Appointments Only</p>
</div>
</div>
<div className="pt-10">
<button className="w-full lg:w-auto px-10 py-5 bg-white text-slate-950 rounded-lg text-base font-bold tracking-wide hover:bg-teal-500 hover:text-white transition-colors flex justify-center items-center gap-3" onclick="togglePopup()">
                                Book an Appointment Now
                                <iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="2" width="20"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 py-16">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
<div className="text-center md:text-left">
<a className="text-3xl font-bold tracking-tighter text-slate-950" href="#">
                    Dr. Sohana Laraib<span className="text-teal-600">.</span>
</a>
<p className="text-sm text-slate-500 mt-3 font-medium">
                    © 2023 All rights reserved. Designed for excellence.
                </p>
</div>
<div className="flex gap-8">
<a className="text-slate-400 hover:text-slate-950 transition-colors transform hover:scale-110" href="#">
<iconify-icon icon="brandico:facebook-rect" width="24"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-slate-950 transition-colors transform hover:scale-110" href="#">
<iconify-icon icon="brandico:instagram" width="24"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-teal-600 transition-colors transform hover:scale-110" href="#">
<iconify-icon icon="solar:phone-calling-linear" width="24"></iconify-icon>
</a>
</div>
</div>
</footer>

<div className="fixed inset-0 z-[100] hidden" id="booking-popup">

<div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity opacity-0" id="popup-backdrop" onclick="togglePopup()"></div>

<div className="absolute inset-0 flex items-center justify-center p-4">
<div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden transform scale-95 opacity-0 transition-all duration-300" id="popup-content">
<div className="relative bg-slate-950 p-8 flex justify-between items-start">
<div>
<h3 className="text-2xl font-bold text-white tracking-tight">Book Appointment</h3>
<p className="text-slate-400 text-sm font-medium mt-1">Dr. Sohana Laraib • Dental Surgeon</p>
</div>
<button className="text-slate-400 hover:text-white transition-colors" onclick="togglePopup()">
<iconify-icon icon="solar:close-circle-linear" width="28"></iconify-icon>
</button>
</div>
<div className="p-8">
<form className="space-y-6" onsubmit="event.preventDefault(); alert('Request Sent!'); togglePopup();">
<div>
<label className="block text-xs font-bold text-slate-900 uppercase tracking-widest mb-2">Full Name</label>
<input className="w-full px-5 py-3 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-all text-base font-medium placeholder:text-slate-400" placeholder="John Doe" type="text"/>
</div>
<div>
<label className="block text-xs font-bold text-slate-900 uppercase tracking-widest mb-2">Phone Number</label>
<input className="w-full px-5 py-3 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-all text-base font-medium placeholder:text-slate-400" placeholder="03XX-XXXXXXX" type="tel"/>
</div>
<div>
<label className="block text-xs font-bold text-slate-900 uppercase tracking-widest mb-2">Reason for Visit</label>
<select className="w-full px-5 py-3 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-all text-base font-medium">
<option>General Checkup</option>
<option>Tooth Pain / Emergency</option>
<option>Cleaning / Whitening</option>
<option>Surgery Consultation</option>
</select>
</div>
<button className="w-full py-4 bg-slate-950 hover:bg-teal-700 text-white rounded-lg text-base font-bold tracking-wide transition-all shadow-xl mt-4" type="submit">
                            Confirm Booking Request
                        </button>
</form>
<p className="text-center text-xs text-slate-500 font-medium mt-6">
                        We will contact you via phone to confirm your slot.
                    </p>
</div>
</div>
</div>
</div>


    </>
  );
}
