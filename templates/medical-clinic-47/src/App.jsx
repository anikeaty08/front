import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener("DOMContentLoaded", (event) => {
            gsap.registerPlugin(ScrollTrigger);

            const splitTextElements = document.querySelectorAll(".reveal-text");
            splitTextElements.forEach(element => {
                const text = element.innerText;
                const words = text.split(" ");
                let newHtml = "";
                words.forEach(word => {
                    newHtml += `<span class="word-wrapper"><span class="word">${word}</span></span> `;
                });
                element.innerHTML = newHtml;
            });

            const revealElements = document.querySelectorAll(".reveal-text");
            revealElements.forEach(element => {
                const words = element.querySelectorAll(".word");
                gsap.to(words, {
                    scrollTrigger: {
                        trigger: element,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    },
                    y: 0,
                    duration: 1.2,
                    ease: "power4.out",
                    stagger: 0.04
                });
            });

            const parallaxWrappers = document.querySelectorAll(".parallax-wrapper");
            parallaxWrappers.forEach(wrapper => {
                const img = wrapper.querySelector(".parallax-img");
                if (img) {
                    gsap.fromTo(img, 
                        { y: "-10%" },
                        { 
                            y: "10%", 
                            ease: "none",
                            scrollTrigger: {
                                trigger: wrapper,
                                start: "top bottom",
                                end: "bottom top",
                                scrub: true
                            }
                        }
                    );
                }
            });

            gsap.utils.toArray(".fade-up-element").forEach(element => {
                gsap.to(element, {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: element,
                        start: "top 85%"
                    }
                });
            });

            gsap.to("#hero-cta", {
                opacity: 1,
                y: 0,
                duration: 1,
                delay: 1,
                ease: "power3.out"
            });
            
            gsap.fromTo(".parallax-footer-text", 
                { y: "-20%" },
                { 
                    y: "10%", 
                    ease: "none",
                    scrollTrigger: {
                        trigger: "footer",
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                }
            );
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="hidden md:flex space-x-8 text-sm font-medium text-gray-500">
<a className="hover:text-gray-900 transition-colors" href="#">Specialties</a>
<a className="hover:text-gray-900 transition-colors" href="#">Physicians</a>
<a className="hover:text-gray-900 transition-colors" href="#">Patient Portal</a>
</div>

<div className="flex items-center gap-2 absolute left-1/2 transform -translate-x-1/2">
<iconify-icon className="text-gray-900" icon="solar:heart-pulse-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<span className="text-xl font-medium tracking-tight uppercase">Meridian</span>
</div>

<div className="flex items-center space-x-6">
<a className="text-sm font-medium hidden md:block text-gray-600 hover:text-gray-900" href="#">Sign In</a>
<button className="bg-gray-900 text-white px-5 py-2 rounded-full text-xs font-medium tracking-wide hover:bg-gray-800 transition-all flex items-center gap-2 group">
                        Book Appointment
                        <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

<div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8 opacity-0 animate-fade-in" style={{animationFillMode: 'forwards'}}>
<div className="flex -space-x-2">
<img alt="Patient" className="w-6 h-6 rounded-full border border-white object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<img alt="Doctor" className="w-6 h-6 rounded-full border border-white object-cover" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&amp;auto=format&amp;fit=crop&amp;q=60"/>
<img alt="Patient" className="w-6 h-6 rounded-full border border-white object-cover" src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=100&amp;auto=format&amp;fit=crop&amp;q=60"/>
</div>
<span className="text-xs font-medium tracking-wide text-gray-500">Trusted by over 10,000 families</span>
</div>

<div className="text-center max-w-4xl mx-auto mb-16">
<h1 className="reveal-text text-5xl md:text-7xl leading-[1.1] font-light tracking-tight mb-6">
                Compassionate Care. <br/> Modern Medicine.
            </h1>
<p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed reveal-para delay-300 font-normal">
                Personalized treatment plans built around your life, your health, your future.
                <span className="md:block">Experience healthcare designed entirely around you.</span>
</p>
<div className="mt-8 opacity-0" id="hero-cta">
<button className="bg-gray-900 text-white px-8 py-3 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-300 shadow-xl shadow-gray-900/10">
                    Book Your First Visit
                </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-auto md:h-[500px]">

<div className="md:col-span-4 rounded-2xl overflow-hidden relative group h-[300px] md:h-full parallax-wrapper border border-gray-100">
<img alt="Doctor smiling in warm natural light" className="w-full h-[120%] object-cover parallax-img" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 text-gray-900 z-10">
<p className="text-xs font-medium bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-gray-200 inline-flex items-center gap-1 shadow-sm">
<iconify-icon icon="solar:user-heart-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        Patient-First Approach
                    </p>
</div>
</div>

<div className="md:col-span-4 flex flex-col gap-4">
<div className="bg-gray-50 rounded-2xl p-6 flex-1 flex flex-col justify-between border border-gray-100 hover:bg-gray-100/50 transition-colors cursor-pointer">
<div>
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-gray-200 shadow-sm">
<iconify-icon className="text-gray-900 text-xl" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<h3 className="text-2xl font-normal tracking-tight mb-1">Preventative Care</h3>
<p className="text-xs text-gray-500 font-normal leading-relaxed">Comprehensive screenings, annual physicals, and personalized wellness plans.</p>
</div>
</div>
<div className="bg-gray-50 rounded-2xl p-6 flex-1 flex flex-col justify-between border border-gray-100 hover:bg-gray-100/50 transition-colors cursor-pointer">
<div>
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-gray-200 shadow-sm">
<iconify-icon className="text-gray-900 text-xl" icon="solar:heart-pulse-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<h3 className="text-2xl font-normal tracking-tight mb-1">Chronic Care</h3>
<p className="text-xs text-gray-500 font-normal leading-relaxed">Ongoing management for diabetes, hypertension, and long-term health goals.</p>
</div>
</div>
</div>

<div className="md:col-span-4 flex flex-col gap-4">
<div className="bg-gray-50 rounded-2xl p-6 flex-none border border-gray-100 hover:bg-gray-100/50 transition-colors cursor-pointer">
<div className="flex justify-between items-center">
<div>
<h3 className="text-lg font-normal tracking-tight mb-1">Women’s Health</h3>
<p className="text-xs text-gray-500 font-normal">Specialized, compassionate care.</p>
</div>
<iconify-icon className="text-gray-400 text-2xl" icon="solar:users-group-two-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div className="bg-gray-50 rounded-2xl p-6 flex-none border border-gray-100 hover:bg-gray-100/50 transition-colors cursor-pointer">
<div className="flex justify-between items-center">
<div>
<h3 className="text-lg font-normal tracking-tight mb-1">Telehealth Services</h3>
<p className="text-xs text-gray-500 font-normal">Connect from anywhere.</p>
</div>
<iconify-icon className="text-gray-400 text-2xl" icon="solar:laptop-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>

<div className="rounded-2xl overflow-hidden relative group flex-1 parallax-wrapper border border-gray-100">
<img alt="Modern clinic interior" className="w-full h-[120%] object-cover parallax-img" src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</main>

<section className="py-24 px-4 bg-white border-y border-gray-100">
<div className="max-w-4xl mx-auto text-center">
<h2 className="reveal-text text-3xl md:text-5xl leading-tight font-light text-gray-900 tracking-tight">
                Experience healthcare designed around you, featuring seamless digital records, zero wait times, and same-day appointments.
            </h2>
</div>
</section>

<section className="py-20 max-w-7xl mx-auto px-4">
<div className="flex items-end justify-between mb-10">
<div>
<h3 className="text-3xl font-light tracking-tight mb-2 reveal-text">Meet the Physicians</h3>
<p className="text-sm text-gray-500 font-normal">World-class expertise. Neighborhood convenience.</p>
</div>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors text-gray-900">
<iconify-icon icon="solar:arrow-left-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors text-gray-900">
<iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
<div className="flex gap-6 overflow-x-auto hide-scrollbar pb-10">

<div className="min-w-[240px] group cursor-pointer">
<div className="w-full aspect-[4/5] bg-gray-50 rounded-2xl mb-4 flex items-center justify-center p-0 group-hover:shadow-lg transition-all border border-gray-100 relative overflow-hidden">
<img alt="Dr. Sarah Jenkins" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gray-900/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<span className="text-gray-900 text-xs font-medium bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-sm">View Profile</span>
</div>
</div>
<h4 className="font-medium text-base tracking-tight">Dr. Sarah Jenkins</h4>
<p className="text-xs text-gray-500 font-normal">Primary Care</p>
</div>

<div className="min-w-[280px] cursor-pointer">
<div className="w-full aspect-[4/5] bg-gray-900 rounded-2xl mb-4 flex items-center justify-center p-0 shadow-xl relative overflow-hidden">
<img alt="Dr. Michael Chen" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20">
<p className="text-white text-xs leading-relaxed font-normal">
<span className="font-medium block mb-1 text-sm tracking-tight">Dr. Michael Chen</span>
                            Board-certified in Cardiology with over 15 years of clinical experience.
                        </p>
</div>
</div>
<h4 className="font-medium text-base tracking-tight">Dr. Michael Chen</h4>
<p className="text-xs text-gray-500 font-normal">Cardiology</p>
</div>

<div className="min-w-[240px] group cursor-pointer">
<div className="w-full aspect-[4/5] bg-gray-50 rounded-2xl mb-4 flex items-center justify-center p-0 group-hover:shadow-lg transition-all border border-gray-100 relative overflow-hidden">
<img alt="Dr. Emily Ross" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<h4 className="font-medium text-base tracking-tight">Dr. Emily Ross</h4>
<p className="text-xs text-gray-500 font-normal">Women's Health</p>
</div>

<div className="min-w-[240px] group cursor-pointer">
<div className="w-full aspect-[4/5] bg-gray-50 rounded-2xl mb-4 flex items-center justify-center p-0 group-hover:shadow-lg transition-all border border-gray-100 relative overflow-hidden">
<img alt="Dr. James Wilson" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<h4 className="font-medium text-base tracking-tight">Dr. James Wilson</h4>
<p className="text-xs text-gray-500 font-normal">Internal Medicine</p>
</div>
</div>
</section>

<section className="relative h-[600px] md:h-[800px] w-full overflow-hidden parallax-wrapper">
<img alt="Modern Medical Laboratory" className="absolute inset-0 w-full h-[120%] object-cover parallax-img" src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gray-900/60 z-0"></div>
<div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
<h2 className="reveal-text text-white text-4xl md:text-6xl mb-12 text-center font-light tracking-tight">
                Advanced Diagnostics. <br/> Electronic Records.
            </h2>

<div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 md:p-8 shadow-2xl transform translate-y-12 opacity-0 fade-up-element">
<div className="flex justify-between items-center mb-6">
<div className="text-white/80 text-xs font-medium uppercase tracking-wider">Patient Portal Live</div>
<iconify-icon className="text-white text-lg" icon="solar:shield-check-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="space-y-6">
<div>
<div className="flex justify-between text-white text-sm mb-2 font-medium">
<span>Digital Check-in</span>
<span className="text-white">Seamless</span>
</div>
<div className="h-1 w-full bg-white/20 rounded-full overflow-hidden">
<div className="h-full bg-white w-[100%]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-white text-sm mb-2 font-medium">
<span>Same-Day Lab Results</span>
<span>Secure</span>
</div>
<div className="h-1 w-full bg-white/20 rounded-full overflow-hidden">
<div className="h-full bg-white w-[100%]"></div>
</div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-white/20 flex items-center justify-between">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-white border-2 border-transparent flex items-center justify-center">
<iconify-icon className="text-gray-900 text-sm" icon="solar:smartphone-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-transparent flex items-center justify-center">
<iconify-icon className="text-gray-900 text-sm" icon="solar:document-text-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div className="text-right">
<div className="text-white text-xl font-medium tracking-tight">24/7 Access</div>
<div className="text-white/70 text-xs font-normal">Encrypted records</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-4">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-gray-100 pb-6">
<h2 className="reveal-text text-4xl md:text-5xl font-light tracking-tight">Simple, Transparent Billing.</h2>
<div className="flex space-x-6 text-sm font-medium mt-6 md:mt-0 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 hide-scrollbar">
<button className="text-gray-900 border-b-2 border-gray-900 pb-1 whitespace-nowrap">In-Network</button>
<button className="text-gray-400 hover:text-gray-900 transition-colors pb-1 whitespace-nowrap">Medicare &amp; Medicaid</button>
<button className="text-gray-400 hover:text-gray-900 transition-colors pb-1 whitespace-nowrap">Self-Pay</button>
<button className="text-gray-400 hover:text-gray-900 transition-colors pb-1 whitespace-nowrap">Financing</button>
</div>
</div>
<div className="grid md:grid-cols-2 gap-16">

<div className="space-y-0">

<div className="group py-8 border-b border-gray-100 cursor-pointer">
<div className="flex justify-between items-start mb-2">
<span className="inline-block px-2 py-0.5 rounded border border-gray-200 text-[10px] font-medium uppercase tracking-wider mb-2 text-gray-500">Major Providers</span>
</div>
<h3 className="text-2xl font-normal tracking-tight group-hover:text-gray-500 transition-colors">In-Network Coverage</h3>
<p className="text-sm text-gray-500 font-normal mt-2 leading-relaxed">We work seamlessly with BlueCross, Aetna, Cigna, and UnitedHealthcare to ensure your visits are covered with minimal out-of-pocket costs.</p>
<div className="mt-4 flex gap-4 text-xs font-medium text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
<span>Check Verification</span>
<span className="text-gray-300">•</span>
<span>View Provider List</span>
</div>
</div>

<div className="group py-8 border-b border-gray-100 cursor-pointer opacity-60 hover:opacity-100 transition-opacity">
<h3 className="text-2xl font-normal tracking-tight">Direct Billing</h3>
<p className="text-sm text-gray-500 font-normal mt-2 leading-relaxed">Our finance team handles all claims directly with your insurance provider, saving you time and paperwork.</p>
</div>

<div className="group py-8 border-b border-gray-100 cursor-pointer opacity-60 hover:opacity-100 transition-opacity">
<h3 className="text-2xl font-normal tracking-tight">Financial Assistance</h3>
<p className="text-sm text-gray-500 font-normal mt-2 leading-relaxed">Flexible payment plans and sliding-scale options for uninsured or underinsured patients.</p>
</div>
</div>

<div className="hidden md:grid grid-cols-2 gap-4">
<div className="parallax-wrapper rounded-2xl overflow-hidden h-64 border border-gray-100">
<img alt="Paperwork" className="w-full h-[120%] object-cover parallax-img" src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="parallax-wrapper rounded-2xl overflow-hidden h-64 mt-12 border border-gray-100">
<img alt="Consultation" className="w-full h-[120%] object-cover parallax-img" src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="bg-gray-50 border-t border-gray-100 pt-24 pb-24">
<div className="text-center mb-16 px-4">
<span className="border border-gray-200 bg-white px-3 py-1 rounded-full text-xs font-medium tracking-wide text-gray-500">Patient Stories</span>
<h2 className="reveal-text text-3xl md:text-4xl mt-6 mb-4 font-light tracking-tight">Care that makes a difference.</h2>
<p className="text-gray-500 font-normal text-sm">Hear from the individuals and families we support every day.</p>
</div>
<div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-6">

<div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
<div className="flex gap-1 text-gray-900 mb-4 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<h4 className="font-medium text-lg tracking-tight mb-2">They actually listen</h4>
<p className="text-sm text-gray-600 font-normal leading-relaxed mb-6">
                    "Dr. Jenkins took the time to understand my full medical history. I never felt rushed, and for the first time, I felt truly heard by a healthcare provider."
                </p>
<div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-50">
<div className="flex items-center gap-2">
<span className="font-medium text-xl tracking-tight">5.0</span>
<span className="text-xs text-gray-400 font-normal">Google Reviews</span>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col">
<div className="flex gap-1 text-gray-900 mb-4 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<h4 className="font-medium text-lg tracking-tight mb-2">Seamless Experience</h4>
<p className="text-sm text-gray-600 font-normal leading-relaxed mb-6">
                    "Booking a same-day appointment was incredibly easy through the portal. The clinic is modern, clean, and the staff is exceptionally professional."
                </p>
<div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-50">
<div className="flex items-center gap-2">
<span className="font-medium text-xl tracking-tight">5.0</span>
<span className="text-xs text-gray-400 font-normal">Healthgrades</span>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col">
<div className="flex gap-1 text-gray-900 mb-4 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<h4 className="font-medium text-lg tracking-tight mb-2">Life-changing Telehealth</h4>
<p className="text-sm text-gray-600 font-normal leading-relaxed mb-6">
                    "Managing my chronic condition is so much easier now that I can schedule virtual check-ins with Dr. Chen. The technology just works."
                </p>
<div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-50">
<div className="flex items-center gap-3">
<img alt="User" className="w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<div className="text-xs">
<div className="font-medium">Marcus T.</div>
<div className="text-gray-400 font-normal">Patient since 2021</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-gray-900 text-white pt-24 pb-24">
<div className="max-w-7xl mx-auto px-4 md:grid md:grid-cols-2 gap-16 items-center">
<div className="mb-12 md:mb-0">
<h2 className="reveal-text text-4xl md:text-5xl mb-6 font-light tracking-tight">Your Health <br/> Starts Today.</h2>
<p className="text-gray-400 text-lg mb-8 max-w-md font-normal leading-relaxed">Join Meridian Medical Group and experience healthcare that respects your time, understands your body, and prioritizes your well-being.</p>
<div className="grid grid-cols-3 gap-4 mt-12">
<img alt="Clinic Detail" className="h-24 w-full object-cover rounded-xl opacity-60 hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
<img alt="Medical Tools" className="h-24 w-full object-cover rounded-xl opacity-60 hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
<img alt="Waiting Area" className="h-24 w-full object-cover rounded-xl opacity-60 hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="relative">
<div className="absolute -top-10 -right-10 text-[10rem] font-light text-white/5 select-none pointer-events-none tracking-tighter leading-none">+</div>

<div className="bg-white text-gray-900 rounded-2xl p-8 max-w-sm mx-auto shadow-2xl relative z-10 transform hover:-translate-y-1 transition-transform duration-300">
<div className="flex justify-between items-start mb-6">
<div className="w-10 h-10 rounded-full bg-gray-50 text-gray-900 flex items-center justify-center border border-gray-200">
<iconify-icon icon="solar:user-plus-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="px-3 py-1 bg-gray-100 rounded-full text-[10px] font-medium uppercase tracking-wide text-gray-600">New Patients</div>
</div>
<h3 className="text-xl font-medium tracking-tight mb-2">Registration</h3>
<p className="text-xs text-gray-500 font-normal mb-6">Complete your profile online and book your first appointment instantly.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3 text-sm font-normal text-gray-600">
<iconify-icon className="mt-0.5 text-gray-900" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Insurance Pre-verification</span>
</li>
<li className="flex items-start gap-3 text-sm font-normal text-gray-600">
<iconify-icon className="mt-0.5 text-gray-900" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Digital Intake Forms</span>
</li>
<li className="flex items-start gap-3 text-sm font-normal text-gray-600">
<iconify-icon className="mt-0.5 text-gray-900" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Immediate Booking</span>
</li>
</ul>
<button className="w-full bg-gray-900 text-white py-3 rounded-xl text-sm font-medium hover:bg-gray-800 transition-all">Start Registration</button>
<div className="mt-6 flex justify-center">
<p className="text-[10px] text-gray-400 font-normal">Takes less than 5 minutes</p>
</div>
</div>

<div className="mt-8 flex justify-between gap-4 text-xs text-gray-400 max-w-sm mx-auto font-medium">
<a className="hover:text-white transition-colors" href="#">Call Clinic</a>
<a className="hover:text-white transition-colors" href="#">Find Locations</a>
</div>
</div>
</div>
</section>

<footer className="overflow-hidden bg-gray-50 text-gray-900 pt-32 pb-0 relative border-t border-gray-200">
<div className="max-w-7xl mx-auto px-4 relative z-10">
<div className="grid md:grid-cols-4 gap-12 mb-24">
<div className="md:col-span-1">
<p className="text-xs font-medium uppercase tracking-widest mb-6 text-gray-400">Meridian</p>
<p className="text-2xl font-light mb-6 leading-tight tracking-tight">Compassionate care. Modern medicine.</p>
<div className="flex gap-4">
<button className="text-xs font-medium bg-gray-900 text-white px-5 py-2.5 rounded-full hover:bg-gray-800 transition-colors">Contact Us</button>
</div>
</div>
<div className="md:col-span-1">
<p className="text-xs font-medium uppercase tracking-widest mb-6 text-gray-400">Inquiries</p>
<a className="block text-lg font-normal mb-2 hover:text-gray-500 transition-colors tracking-tight" href="mailto:hello@meridianmedical.com">hello@meridian.com</a>
<p className="text-sm text-gray-500 mb-6 font-normal">+1 (800) 555-0199</p>
<p className="text-xs text-gray-400 font-normal leading-relaxed">
                        1200 Innovation Drive<br/>
                        Health District, NY 10001<br/>
                        United States
                    </p>
</div>
<div className="md:col-span-2 flex flex-col md:flex-row justify-end gap-12 md:gap-24 text-sm font-normal">
<div className="flex flex-col gap-4">
<span className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-2">Patients</span>
<a className="text-gray-600 hover:text-gray-900 transition-colors" href="#">Patient Portal</a>
<a className="text-gray-600 hover:text-gray-900 transition-colors" href="#">Specialties</a>
<a className="text-gray-600 hover:text-gray-900 transition-colors" href="#">Insurance &amp; Billing</a>
<a className="text-gray-600 hover:text-gray-900 transition-colors" href="#">Telehealth</a>
</div>
<div className="flex flex-col gap-4">
<span className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-2">Company</span>
<a className="text-gray-600 hover:text-gray-900 transition-colors" href="#">About Us</a>
<a className="text-gray-600 hover:text-gray-900 transition-colors" href="#">Careers</a>
<a className="text-gray-600 hover:text-gray-900 transition-colors" href="#">Privacy Policy</a>
</div>
</div>
</div>
</div>

<div className="w-full text-center leading-none overflow-hidden border-t border-gray-100">
<h1 className="text-[20vw] leading-[0.75] font-normal text-gray-100 tracking-tighter select-none pointer-events-none -mb-[0.05em] pt-4 parallax-footer-text">
                MERIDIAN
            </h1>
</div>
</footer>



    </>
  );
}
