import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        const btn = document.getElementById('mobile-menu-btn');
        const overlay = document.getElementById('mobile-menu-overlay');
        const closeBtn = document.getElementById('mobile-menu-close');
        const links = document.querySelectorAll('.mobile-link');

        function toggleMenu() {
            // Toggle opacity and pointer events to show/hide
            if (overlay.classList.contains('opacity-0')) {
                overlay.classList.remove('opacity-0', 'pointer-events-none');
                overlay.classList.add('opacity-100', 'pointer-events-auto');
            } else {
                overlay.classList.add('opacity-0', 'pointer-events-none');
                overlay.classList.remove('opacity-100', 'pointer-events-auto');
            }
        }

        btn.addEventListener('click', toggleMenu);
        closeBtn.addEventListener('click', toggleMenu);
        
        // Close when clicking any link
        links.forEach(link => {
            link.addEventListener('click', toggleMenu);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bg-slate-900 text-white py-2 px-4 text-xs md:text-sm font-medium relative z-[60]">
<div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-center sm:text-left">
<div className="flex gap-4">
<a className="hover:text-brand-gold transition-colors flex items-center gap-1.5" href="tel:+12018458411">
<iconify-icon icon="solar:phone-calling-linear" width="16"></iconify-icon>
                    Paramus: (201) 845-8411
                </a>
<span className="hidden sm:inline text-slate-600">|</span>
<a className="hover:text-brand-gold transition-colors flex items-center gap-1.5" href="tel:+19733251777">
<iconify-icon icon="solar:phone-calling-linear" width="16"></iconify-icon>
                    West Orange: (973) 325-1777
                </a>
</div>
<div className="hidden md:flex gap-4 text-slate-400">
<a className="hover:text-white transition-colors" href="#new-patient">New Patients</a>
<a className="hover:text-white transition-colors flex items-center gap-1" href="https://doxy.me/milestoneorthodontics1" target="_blank">
<iconify-icon icon="solar:videocamera-record-linear"></iconify-icon> Virtual Visit
                </a>
</div>
</div>
</div>

<header className="sticky top-0 left-0 right-0 z-50 w-full p-2 md:p-4 transition-all duration-300">
<nav className="mx-auto max-w-7xl rounded-xl md:rounded-full backdrop-blur-xl border shadow-lg px-4 md:px-6 py-3 flex items-center justify-between bg-white/95 border-white/20 shadow-slate-200/50">

<a className="flex items-center gap-3 group" href="#">

<img alt="Milestone Orthodontics" className="h-8 md:h-10 w-auto object-contain" src="https://www.milestoneorthodontics.com/wp-content/uploads/cropped-Milestone-Orthodonticss-Logo-min-1.png"/>
</a>

<div className="hidden lg:flex items-center gap-6">
<a className="text-sm font-semibold transition-colors text-slate-700 hover:text-brand-blue" href="#">Home</a>
<a className="text-sm font-semibold transition-colors text-slate-700 hover:text-brand-blue" href="#services">Treatment</a>
<a className="text-sm font-semibold transition-colors text-slate-700 hover:text-brand-blue" href="#meet-doctor">Meet Dr. Milestone</a>
<a className="text-sm font-semibold transition-colors text-slate-700 hover:text-brand-blue" href="#locations">Locations</a>
<a className="text-sm font-semibold transition-colors text-slate-700 hover:text-brand-blue" href="#reviews">Reviews</a>
</div>

<div className="flex items-center gap-3">
<a className="hidden md:inline-flex items-center gap-2 bg-brand-blue text-sm font-semibold px-5 py-2.5 rounded-full transition-all shadow-lg shadow-blue-900/20 hover:shadow-blue-900/30 hover:bg-blue-800 text-white" href="#book">
                    Book Appointment
                    <iconify-icon icon="solar:calendar-add-linear" width="18"></iconify-icon>
</a>

<button className="lg:hidden p-2 text-slate-800 hover:bg-slate-100 rounded-full transition-colors z-50 relative" id="mobile-menu-btn">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>
</header>

<div className="fixed inset-0 z-40 bg-white/98 backdrop-blur-xl opacity-0 pointer-events-none transition-all duration-300 flex flex-col pt-24 px-6 pb-6" id="mobile-menu-overlay">
<button className="absolute top-6 right-6 p-2 text-slate-500 hover:bg-slate-100 rounded-full" id="mobile-menu-close">
<iconify-icon height="32" icon="solar:close-circle-linear" width="32"></iconify-icon>
</button>
<div className="flex flex-col gap-6 text-lg font-semibold text-slate-800 overflow-y-auto">
<a className="mobile-link py-2 border-b border-slate-100" href="#">Home</a>
<a className="mobile-link py-2 border-b border-slate-100" href="#services">Treatment Services</a>
<a className="mobile-link py-2 border-b border-slate-100" href="#meet-doctor">Meet Dr. Milestone</a>
<a className="mobile-link py-2 border-b border-slate-100" href="#locations">Locations</a>
<a className="mobile-link py-2 border-b border-slate-100" href="#reviews">Patient Reviews</a>
<a className="mobile-link py-2 text-brand-blue" href="#book">Request Appointment</a>
</div>
<div className="mt-auto pt-8">
<p className="text-xs font-bold uppercase text-slate-400 mb-3">Contact Us</p>
<div className="grid grid-cols-1 gap-3">
<a className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl" href="tel:+12018458411">
<div className="bg-brand-blue text-white p-2 rounded-lg flex"><iconify-icon icon="solar:phone-calling-linear"></iconify-icon></div>
<div>
<p className="text-xs text-slate-500">Paramus</p>
<p className="font-bold text-slate-900">(201) 845-8411</p>
</div>
</a>
<a className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl" href="tel:+19733251777">
<div className="bg-brand-blue text-white p-2 rounded-lg flex"><iconify-icon icon="solar:phone-calling-linear"></iconify-icon></div>
<div>
<p className="text-xs text-slate-500">West Orange</p>
<p className="font-bold text-slate-900">(973) 325-1777</p>
</div>
</a>
</div>
</div>
</div>

<section className="relative pt-10 pb-20 lg:pt-20 lg:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="space-y-6 md:space-y-8 relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-brand-gold/30 text-brand-gold text-xs font-bold uppercase tracking-wider">
<iconify-icon icon="solar:cup-star-linear"></iconify-icon> Since 2002
                    </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-slate-900">
                        Your Journey to a <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">Perfect Smile</span> Starts Here.
                    </h1>
<p className="text-lg text-slate-600 font-medium max-w-lg leading-relaxed">
                        Top 1% Invisalign Orthodontist in Paramus &amp; West Orange, NJ. Excellence Award Winner for America’s Top Dentist.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center gap-2 bg-brand-blue text-base font-semibold px-8 py-3.5 rounded-full transition-all shadow-xl shadow-blue-800/20 hover:shadow-blue-800/30 hover:-translate-y-1 hover:bg-blue-800 text-white" href="#book">
                            Book Complimentary Exam
                            <iconify-icon icon="solar:calendar-mark-linear" width="20"></iconify-icon>
</a>
<a className="inline-flex justify-center items-center gap-2 border-2 border-slate-200 text-base font-semibold px-8 py-3.5 rounded-full transition-all bg-white hover:bg-slate-50 text-slate-700 hover:border-brand-blue hover:text-brand-blue" href="#locations">
                            Our Locations
                            <iconify-icon icon="solar:map-arrow-down-linear" width="20"></iconify-icon>
</a>
</div>

<div className="flex items-center gap-4 pt-4 border-t border-slate-100 mt-4">
<div className="flex -space-x-3">

<div className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-xs font-bold text-slate-500">JP</div>
<div className="w-10 h-10 rounded-full bg-slate-300 border-2 border-white flex items-center justify-center text-xs font-bold text-slate-500">AS</div>
<div className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-xs font-bold text-slate-500">MR</div>
</div>
<div>
<div className="flex gap-0.5 text-brand-gold">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-xs font-semibold text-slate-600 mt-0.5">Top 1% Invisalign Provider</p>
</div>
</div>
</div>

<div className="relative mt-8 lg:mt-0">
<div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl group shadow-blue-900/10">

<img alt="Teens smiling - Milestone Orthodontics" className="w-full h-[400px] md:h-[550px] object-cover transition-transform duration-700 group-hover:scale-105" src="https://www.milestoneorthodontics.com/wp-content/uploads/best-orthodontist-bergen-county-nj.jpg"/>

<div className="bg-gradient-to-t via-transparent to-transparent from-brand-blue/80 absolute top-0 right-0 bottom-0 left-0"></div>

<div className="absolute bottom-8 left-8 right-8 backdrop-blur-xl p-5 rounded-2xl shadow-xl flex items-center justify-between bg-white/95">
<div>
<p className="text-xs font-bold uppercase tracking-wider mb-1 text-brand-blue">Expert Care</p>
<p className="font-bold text-slate-900">Dr. Matthew Milestone</p>
</div>
<div className="p-2.5 rounded-full bg-amber-50 text-brand-gold">
<iconify-icon height="24" icon="solar:medal-ribbons-star-linear" width="24"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 bg-brand-blue rounded-t-[2.5rem] relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
<div className="p-4">
<h3 className="text-4xl font-bold tracking-tight mb-1 text-brand-gold">Top 1%</h3>
<p className="text-sm font-medium text-blue-100">Invisalign Provider<br/>in North America</p>
</div>
<div className="p-4">
<h3 className="text-4xl font-bold tracking-tight mb-1 text-white">2002</h3>
<p className="text-sm font-medium text-blue-100">Creating Smiles<br/>Since 2002</p>
</div>
<div className="p-4">
<h3 className="text-4xl font-bold tracking-tight mb-1 text-white">2</h3>
<p className="text-sm font-medium text-blue-100">Convenient<br/>NJ Locations</p>
</div>
<div className="p-4">
<h3 className="text-4xl font-bold tracking-tight mb-1 text-brand-gold">#1</h3>
<p className="text-sm font-medium text-blue-100">Excellence Award<br/>Top Dentist</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-brand-blue font-bold tracking-wider text-sm uppercase">Our Expertise</span>
<h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-2 mb-6 text-slate-900">
                    Comprehensive <span className="text-brand-blue">Orthodontics</span>
</h2>
<p className="text-slate-500 font-medium">
                    State-of-the-art technology and treatments tailored to your lifestyle.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-brand-blue/20">
<div className="w-14 h-14 rounded-2xl bg-blue-50 text-brand-blue flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon height="32" icon="solar:smile-circle-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-bold mb-3 text-slate-900">Invisalign®</h3>
<p className="text-slate-500 leading-relaxed mb-4">
                        Clear aligners for teens and adults. We are a Top 1% Provider in North America.
                    </p>
<a className="inline-flex items-center text-sm font-bold text-brand-blue hover:text-brand-gold" href="#">Learn More <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon></a>
</div>

<div className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-brand-blue/20">
<div className="w-14 h-14 rounded-2xl bg-blue-50 text-brand-blue flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon height="32" icon="solar:health-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-bold mb-3 text-slate-900">Modern Braces</h3>
<p className="text-slate-500 leading-relaxed mb-4">
                        Traditional metal and ceramic options for effective tooth movement.
                    </p>
<a className="inline-flex items-center text-sm font-bold text-brand-blue hover:text-brand-gold" href="#">Learn More <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon></a>
</div>

<div className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-brand-blue/20">
<div className="w-14 h-14 rounded-2xl bg-blue-50 text-brand-blue flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon height="32" icon="solar:bolt-circle-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-bold mb-3 text-slate-900">LightForce</h3>
<p className="text-slate-500 leading-relaxed mb-4">
                        The world’s first fully personalized 3D printed bracket system.
                    </p>
<a className="inline-flex items-center text-sm font-bold text-brand-blue hover:text-brand-gold" href="#">Learn More <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon></a>
</div>

<div className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-brand-blue/20">
<div className="w-14 h-14 rounded-2xl bg-blue-50 text-brand-blue flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon height="32" icon="solar:user-hand-up-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-bold mb-3 text-slate-900">Early Treatment</h3>
<p className="text-slate-500 leading-relaxed mb-4">
                        Pediatric orthodontics to guide jaw growth and correct bite problems early.
                    </p>
<a className="inline-flex items-center text-sm font-bold text-brand-blue hover:text-brand-gold" href="#">Learn More <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon></a>
</div>

<div className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-brand-blue/20">
<div className="w-14 h-14 rounded-2xl bg-blue-50 text-brand-blue flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon height="32" icon="solar:heart-pulse-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-bold mb-3 text-slate-900">TruDenta® Relief</h3>
<p className="text-slate-500 leading-relaxed mb-4">
                        Needle-free, drug-free system for headache, migraine, and TMJ pain relief.
                    </p>
<a className="inline-flex items-center text-sm font-bold text-brand-blue hover:text-brand-gold" href="#">Learn More <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon></a>
</div>

<div className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-brand-blue/20">
<div className="w-14 h-14 rounded-2xl bg-blue-50 text-brand-blue flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon height="32" icon="solar:monitor-camera-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-bold mb-3 text-slate-900">iTero® &amp; VPro+</h3>
<p className="text-slate-500 leading-relaxed mb-4">
                        Digital scanning (no goop!) and high-frequency vibration for faster treatment.
                    </p>
<a className="inline-flex items-center text-sm font-bold text-brand-blue hover:text-brand-gold" href="#">Learn More <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden" id="meet-doctor">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

<div className="w-full lg:w-1/2 relative">
<div className="absolute inset-0 bg-brand-gold/10 rounded-full blur-3xl transform -translate-x-10 translate-y-10"></div>
<img alt="Dr. Matthew Milestone" className="relative z-10 w-full max-w-md mx-auto rounded-3xl shadow-2xl shadow-slate-200" src="https://www.milestoneorthodontics.com/wp-content/uploads/img4.png"/>
<div className="absolute -bottom-6 -right-6 md:right-10 bg-white p-4 rounded-xl shadow-lg z-20 border border-slate-100">
<div className="flex items-center gap-2">
<iconify-icon className="text-brand-gold" icon="solar:check-circle-bold" width="24"></iconify-icon>
<span className="font-bold text-slate-900">Certified Expert</span>
</div>
</div>
</div>

<div className="w-full lg:w-1/2">
<h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900">
                        Meet <span className="text-brand-blue">Dr. Milestone</span>
</h2>
<p className="text-lg text-slate-500 mb-6 leading-relaxed">
                        To ensure the best possible results, only an orthodontist who has been trained and certified by Align Technology can diagnose and treat using Invisalign. 
                    </p>
<p className="text-lg text-slate-500 mb-8 leading-relaxed">
                        Dr. Matthew Milestone is your West Orange/Paramus Invisalign Orthodontist. He has been creating radiant smiles since 2002 and also specializes in headache and migraine relief.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center gap-2 bg-slate-900 text-white font-semibold px-6 py-3 rounded-full hover:bg-slate-800 transition-colors" href="https://www.milestoneorthodontics.com/office-info/meet-dr-milestone/">
                            Read Full Bio
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="locations">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-slate-900">Convenient Locations</h2>
<p className="text-slate-500">Serving Bergen and Essex Counties</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

<div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 flex flex-col md:flex-row">
<div className="w-full md:w-1/2 h-64 md:h-auto bg-slate-200 relative">
<img alt="Paramus Map" className="absolute inset-0 w-full h-full object-cover" src="https://www.milestoneorthodontics.com/wp-content/uploads/map-image1.jpg"/>
</div>
<div className="p-8 w-full md:w-1/2 flex flex-col justify-center">
<h3 className="text-2xl font-bold text-slate-900 mb-2">Paramus, NJ</h3>
<a className="text-lg font-semibold text-brand-blue hover:text-brand-gold mb-4 block" href="tel:+12018458411">(201) 845-8411</a>
<div className="space-y-3 mb-6">
<div className="flex items-start gap-3">
<iconify-icon className="text-slate-400 mt-1" icon="solar:clock-circle-linear"></iconify-icon>
<p className="text-sm text-slate-500">
                                    Mon - Fri: 9am - 5pm<br/>
                                    (Check for specific hours)
                                </p>
</div>
</div>
<a className="w-full text-center border-2 border-slate-200 text-slate-700 font-bold py-2.5 rounded-xl hover:border-brand-blue hover:text-brand-blue transition-colors" href="https://goo.gl/maps/ofYdCjxdAv8FRVob6" target="_blank">
                            Get Directions
                        </a>
</div>
</div>

<div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 flex flex-col md:flex-row">
<div className="w-full md:w-1/2 h-64 md:h-auto bg-slate-200 relative">
<img alt="West Orange Map" className="absolute inset-0 w-full h-full object-cover" src="https://www.milestoneorthodontics.com/wp-content/uploads/map-image2.jpg"/>
</div>
<div className="p-8 w-full md:w-1/2 flex flex-col justify-center">
<h3 className="text-2xl font-bold text-slate-900 mb-2">West Orange, NJ</h3>
<a className="text-lg font-semibold text-brand-blue hover:text-brand-gold mb-4 block" href="tel:+19733251777">(973) 325-1777</a>
<div className="space-y-3 mb-6">
<div className="flex items-start gap-3">
<iconify-icon className="text-slate-400 mt-1" icon="solar:clock-circle-linear"></iconify-icon>
<p className="text-sm text-slate-500">
                                    Mon - Fri: 9am - 5pm<br/>
                                    (Check for specific hours)
                                </p>
</div>
</div>
<a className="w-full text-center border-2 border-slate-200 text-slate-700 font-bold py-2.5 rounded-xl hover:border-brand-blue hover:text-brand-blue transition-colors" href="https://goo.gl/maps/vbm1piqQ3xDXDMRP7" target="_blank">
                            Get Directions
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-blue text-white text-center" id="reviews">
<div className="max-w-4xl mx-auto px-4">
<h2 className="text-3xl font-bold mb-12">What Our Patients Say</h2>
<div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 relative">
<iconify-icon className="text-brand-gold/30 text-6xl absolute top-4 left-4" icon="solar:quote-up-bold"></iconify-icon>
<div className="space-y-6">
<p className="text-lg md:text-xl italic leading-relaxed font-medium">
                        "I went to see Dr. Milestone because for years I have worn a night guard for teeth grinding... Dr. Milestone recommended Invisalign. Within weeks I saw a change and can thankfully say even on a stressful night I don’t wake up with headaches anymore. Thank you Dr. Milestone."
                    </p>
<div className="flex justify-center gap-1 text-brand-gold">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="font-bold text-brand-gold">John D.</p>
</div>
</div>
<p className="mt-8 text-sm opacity-70">Based on verified reviews</p>
</div>
</section>

<section className="py-24 bg-white relative" id="book">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<span className="text-brand-blue font-bold tracking-wider text-sm uppercase">Start Today</span>
<h2 className="text-3xl md:text-4xl font-bold mt-2 text-slate-900">Request an Appointment</h2>
<p className="text-slate-500 mt-4">Fill out the form below and our team will contact you to confirm.</p>
</div>
<form className="bg-slate-50 p-6 md:p-10 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
<div>
<label className="block text-sm font-semibold text-slate-700 mb-2">First Name</label>
<input className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue bg-white" placeholder="Jane" type="text"/>
</div>
<div>
<label className="block text-sm font-semibold text-slate-700 mb-2">Last Name</label>
<input className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue bg-white" placeholder="Doe" type="text"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
<div>
<label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
<input className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue bg-white" placeholder="(555) 555-5555" type="tel"/>
</div>
<div>
<label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
<input className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue bg-white" placeholder="jane@example.com" type="email"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
<div>
<label className="block text-sm font-semibold text-slate-700 mb-2">Preferred Location</label>
<div className="relative">
<select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue bg-white appearance-none">
<option>Paramus</option>
<option>West Orange</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div>
<label className="block text-sm font-semibold text-slate-700 mb-2">Reason for Visit</label>
<div className="relative">
<select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue bg-white appearance-none">
<option>Invisalign Consultation</option>
<option>Braces Consultation</option>
<option>General Checkup</option>
<option>Other</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div className="mb-8">
<label className="block text-sm font-semibold text-slate-700 mb-2">Message (Optional)</label>
<textarea className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue bg-white" placeholder="Any specific concerns or preferred times?" rows="3"></textarea>
</div>
<button className="w-full bg-brand-blue text-white font-bold text-lg py-4 rounded-xl shadow-lg shadow-blue-900/10 hover:bg-blue-800 transition-colors flex items-center justify-center gap-2" type="button">
                    Submit Request
                </button>
<p className="text-xs text-center text-slate-400 mt-4">
                    Your information is secure. Our team will contact you shortly to confirm your appointment.
                </p>
</form>
</div>
</section>

<footer className="bg-slate-900 text-slate-400 pt-16 pb-8 border-t border-slate-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

<div>
<h3 className="text-white text-lg font-bold mb-6">Milestone Orthodontics</h3>
<p className="text-sm leading-relaxed mb-6">
                        Your journey to a perfect smile starts with Dr. Matthew Milestone. Top 1% Invisalign Provider serving Paramus and West Orange.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-brand-blue transition-colors" href="https://www.facebook.com/MilestoneOrtho" target="_blank">
<iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-brand-blue transition-colors" href="https://www.instagram.com/milestoneortho/" target="_blank">
<iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-brand-blue transition-colors" href="https://twitter.com/milestoneortho" target="_blank">
<iconify-icon icon="solar:close-circle-linear" width="20"></iconify-icon>
</a>
</div>
</div>

<div>
<h4 className="text-white font-bold mb-6">Contact Us</h4>
<ul className="space-y-4 text-sm">
<li className="flex items-start gap-3">
<iconify-icon className="text-brand-gold mt-0.5 shrink-0" icon="solar:phone-calling-linear"></iconify-icon>
<span>
<a className="hover:text-white" href="tel:+12018458411">(201) 845-8411</a>
</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-brand-gold mt-0.5 shrink-0" icon="solar:phone-calling-linear"></iconify-icon>
<span>
<a className="hover:text-white" href="tel:+19733251777">(973) 325-1777</a>
</span>
</li>
</ul>
</div>

<div>
<h4 className="text-white font-bold mb-6">Office Hours</h4>
<ul className="space-y-3 text-sm">
<li className="flex justify-between">
<span>Mon - Fri</span>
<span className="text-white">9:00 AM - 5:00 PM</span>
</li>
<li className="text-xs italic mt-2 text-slate-500">
                            *Hours vary by location. Please call to confirm.
                        </li>
</ul>
</div>

<div>
<h4 className="text-white font-bold mb-6">Quick Links</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-brand-gold transition-colors" href="#services">Invisalign</a></li>
<li><a className="hover:text-brand-gold transition-colors" href="#services">Braces</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium">
<p>© 2026 Milestone Orthodontics. All Rights Reserved.</p>
<p>Website Design by Ortho Marketing.</p>
</div>
</div>
</footer>



    </>
  );
}
