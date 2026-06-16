import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        const mobileToggle = document.getElementById('mobile-toggle');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        // Toggle Function
        function toggleMenu() {
            const isHidden = mobileMenu.classList.contains('menu-hidden');
            if (isHidden) {
                mobileMenu.classList.remove('menu-hidden');
                mobileMenu.classList.add('menu-visible');
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            } else {
                mobileMenu.classList.remove('menu-visible');
                mobileMenu.classList.add('menu-hidden');
                document.body.style.overflow = ''; // Allow scrolling
            }
        }

        mobileToggle.addEventListener('click', toggleMenu);

        // Close when clicking a link
        mobileLinks.forEach(link => {
            link.addEventListener('click', toggleMenu);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 left-0 right-0 z-50 w-full p-3 md:p-6 transition-all duration-300">
<nav className="mx-auto max-w-7xl rounded-full backdrop-blur-xl border shadow-lg px-5 py-3 flex items-center justify-between bg-white/90 border-white/20 shadow-slate-200/50">

<a className="flex items-center gap-3 group z-50" href="#">
<img alt="My Dentist For Life" className="h-8 md:h-10 w-auto object-contain" src="https://www.mydentistforlife.com/wp-content/uploads/2024/11/mydentistforlife_logo.png"/>
</a>

<div className="hidden lg:flex items-center gap-6 xl:gap-8">
<a className="text-sm font-semibold transition-colors text-slate-600 hover:text-[#08CCBE]" href="#services">Services</a>
<a className="text-sm font-semibold transition-colors text-slate-600 hover:text-[#08CCBE]" href="#doctors">Meet Dr. Rizvi</a>
<a className="text-sm font-semibold transition-colors text-slate-600 hover:text-[#08CCBE]" href="#locations">Locations</a>
<a className="text-sm font-semibold transition-colors text-slate-600 hover:text-[#08CCBE]" href="#new-patients">New Patients</a>
<a className="text-sm font-semibold transition-colors text-slate-600 hover:text-[#08CCBE]" href="#reviews">Reviews</a>
</div>

<div className="hidden lg:flex items-center gap-3">

<div className="hidden xl:flex flex-col items-end mr-2">
<span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Plantation, FL</span>
<a className="text-sm font-bold text-slate-900 hover:text-[#08CCBE] transition-colors" href="tel:9547871695">(954) 787-1695</a>
</div>
<a className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-colors" href="tel:9547871695" title="Call Now">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
</a>
<a className="inline-flex items-center gap-2 bg-[#08CCBE] text-sm font-bold px-5 py-2.5 rounded-full transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:bg-[#06b3a7] text-white" href="#book">
                    Book Appointment
                </a>
</div>

<button className="lg:hidden text-slate-900 p-1 z-50 focus:outline-none" id="mobile-toggle">
<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</nav>
</header>

<div className="menu-hidden fixed inset-0 z-40 bg-white pt-24 px-6 pb-6 flex flex-col overflow-y-auto" id="mobile-menu">
<div className="flex flex-col gap-6 text-center">
<a className="mobile-link text-xl font-semibold text-slate-900 py-2 border-b border-slate-100" href="#services">Services</a>
<a className="mobile-link text-xl font-semibold text-slate-900 py-2 border-b border-slate-100" href="#doctors">Meet Dr. Rizvi</a>
<a className="mobile-link text-xl font-semibold text-slate-900 py-2 border-b border-slate-100" href="#locations">Location &amp; Hours</a>
<a className="mobile-link text-xl font-semibold text-slate-900 py-2 border-b border-slate-100" href="#new-patients">New Patients</a>
<div className="mt-4 flex flex-col gap-4">
<a className="flex items-center justify-center gap-2 w-full py-4 rounded-xl border border-slate-200 text-slate-900 font-bold" href="tel:9547871695">
<iconify-icon className="text-[#08CCBE]" icon="solar:phone-calling-bold"></iconify-icon>
                    (954) 787-1695
                </a>
<a className="mobile-link flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-[#08CCBE] text-white font-bold shadow-xl shadow-[#08CCBE]/20" href="#book">
                    Book Appointment Online
                </a>
</div>
</div>
</div>

<section className="relative pt-28 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="My Dentist For Life Team" className="w-full h-full object-cover object-center" src="https://www.mydentistforlife.com/wp-content/uploads/2025/01/Dental-Team-Plantation.jpg"/>
<div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/40"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

<div className="space-y-8">

<div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5">
<div className="flex text-yellow-400">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
</div>
<span className="text-xs font-medium text-white tracking-wide">Top Rated in Plantation, FL</span>
</div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-white">
                        Crafting Healthy, <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#08CCBE] to-teal-200">Beautiful Smiles</span>
</h1>
<p className="text-lg md:text-xl text-slate-200 font-medium max-w-lg leading-relaxed">
                        Experience comfort, compassion, and quality dentistry. We are on a mission to create a dental experience like no other for you and your family.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 pt-2">
<a className="inline-flex justify-center items-center gap-2 bg-[#08CCBE] text-base font-bold px-8 py-4 rounded-full transition-all shadow-xl shadow-[#08CCBE]/30 hover:shadow-[#08CCBE]/50 hover:-translate-y-1 hover:bg-[#06b3a7] text-white min-w-[200px]" href="#book">
                            Book Appointment
                        </a>
<a className="inline-flex justify-center items-center gap-2 border-2 border-white/30 backdrop-blur-sm text-base font-bold px-8 py-4 rounded-full transition-all bg-white/5 hover:bg-white text-white hover:text-slate-900 min-w-[200px]" href="tel:9547871695">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
                            (954) 787-1695
                        </a>
</div>
<div className="flex items-center gap-6 pt-4 text-slate-300 text-sm font-medium">
<div className="flex items-center gap-2">
<iconify-icon className="text-[#08CCBE]" icon="solar:check-circle-bold"></iconify-icon>
<span>Insurance Accepted</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-[#08CCBE]" icon="solar:check-circle-bold"></iconify-icon>
<span>Modern Tech</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900">
                    Comprehensive <span className="text-[#08CCBE]">Dental Care</span>
</h2>
<p className="text-lg text-slate-500 font-medium">
                    From holistic wellness to complete smile makeovers, we provide advanced care tailored to your whole-body health.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-[#08CCBE]/10 transition-all duration-300">
<div className="w-14 h-14 rounded-2xl bg-emerald-50 text-[#08CCBE] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:leaf-bold-duotone" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Holistic Wellness</h3>
<p className="text-slate-500 mb-6 leading-relaxed">
                        Biological dentistry focused on whole-body health. Services include Ozone Therapy, Safe Mercury Removal (SMART), and Saliva Testing.
                    </p>
<a className="inline-flex items-center text-sm font-bold text-[#08CCBE] hover:text-[#06b3a7]" href="#">
                        Learn More <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group p-8 rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-[#08CCBE]/10 transition-all duration-300">
<div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:magic-stick-3-bold-duotone" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Cosmetic Dentistry</h3>
<p className="text-slate-500 mb-6 leading-relaxed">
                        Design your dream smile with Porcelain Veneers, Gum Lifts, Botox, and our advanced Digital Smile Design technology.
                    </p>
<a className="inline-flex items-center text-sm font-bold text-blue-500 hover:text-blue-600" href="#">
                        Learn More <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group p-8 rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-[#08CCBE]/10 transition-all duration-300">
<div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:screw-bold-duotone" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Dental Implants</h3>
<p className="text-slate-500 mb-6 leading-relaxed">
                        Permanent tooth replacement solutions including All-on-4® Implants, Single Implants, and Implant Dentures.
                    </p>
<a className="inline-flex items-center text-sm font-bold text-indigo-500 hover:text-indigo-600" href="#">
                        Learn More <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group p-8 rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-[#08CCBE]/10 transition-all duration-300">
<div className="w-14 h-14 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:smile-circle-bold-duotone" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Invisalign®</h3>
<p className="text-slate-500 mb-6 leading-relaxed">
                        Clear aligner therapy to straighten your teeth discreetly. We offer free ortho screenings and retainers.
                    </p>
<a className="inline-flex items-center text-sm font-bold text-teal-600 hover:text-teal-700" href="#">
                        Learn More <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group p-8 rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-[#08CCBE]/10 transition-all duration-300">
<div className="w-14 h-14 rounded-2xl bg-purple-50 text-purple-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:sleeping-bold-duotone" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Sedation Dentistry</h3>
<p className="text-slate-500 mb-6 leading-relaxed">
                        Experience pain-free dentistry. We offer oral sedation options to ensure your visit is calm and comfortable.
                    </p>
<a className="inline-flex items-center text-sm font-bold text-purple-500 hover:text-purple-600" href="#">
                        Learn More <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group p-8 rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-[#08CCBE]/10 transition-all duration-300">
<div className="w-14 h-14 rounded-2xl bg-orange-50 text-orange-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:medical-kit-bold-duotone" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">General Care</h3>
<p className="text-slate-500 mb-6 leading-relaxed">
                        From Guided Biofilm Therapy cleanings to Root Canals and Emergency Dentistry, we keep your smile healthy.
                    </p>
<a className="inline-flex items-center text-sm font-bold text-orange-500 hover:text-orange-600" href="#">
                        Learn More <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="doctors">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="relative order-2 lg:order-1">
<div className="absolute inset-0 bg-[#08CCBE]/10 rounded-[3rem] transform rotate-3 scale-105"></div>
<img alt="Dr. Saba Rizvi" className="relative rounded-[2.5rem] w-full shadow-2xl shadow-slate-200" src="https://www.mydentistforlife.com/wp-content/uploads/2024/03/dentist-plantation-dr-saba-rizvi.jpg.webp"/>
<div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl max-w-[200px] border border-slate-100">
<p className="text-4xl font-bold text-[#08CCBE] mb-1">25+</p>
<p className="text-sm font-semibold text-slate-600">Years of Clinical Experience</p>
</div>
</div>

<div className="order-1 lg:order-2">
<span className="inline-block px-4 py-1.5 rounded-full bg-[#08CCBE]/10 text-[#08CCBE] font-bold text-sm mb-6">Meet The Founder</span>
<h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900">
                        Dr. Saba Rizvi
                    </h2>
<p className="text-lg text-slate-500 font-medium mb-6 leading-relaxed">
                        "My mission is to be so exceptional that you choose us for life."
                    </p>
<p className="text-slate-500 mb-8 leading-relaxed">
                        With over 25 years of practical experience, Dr. Rizvi brings a wealth of knowledge to our practice. A devoted mother to a large family, she gives her work family the same commitment. She believes that gentle and effective dentistry is the combination of remarkable experiences, advanced techniques, and cutting-edge technology.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center gap-2 bg-slate-900 text-base font-bold px-8 py-3.5 rounded-full transition-all hover:bg-slate-800 text-white shadow-lg" href="#book">
                            Request Appointment
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white rounded-t-[3rem]" id="locations">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

<div>
<h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
                        Visit Our <span className="text-[#08CCBE]">Plantation</span> Office
                    </h2>
<p className="text-slate-400 text-lg mb-10">
                        Conveniently located to serve Plantation, Sunrise, Weston, Davie, and surrounding South Florida communities.
                    </p>
<div className="space-y-8">

<div className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#08CCBE]/50 transition-colors">
<div className="p-3 rounded-full bg-[#08CCBE] text-white shrink-0">
<iconify-icon icon="solar:map-point-bold" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-bold mb-2">Location</h3>
<p className="text-slate-300 leading-relaxed mb-4">
                                    11941 West Sunrise Blvd.<br/>
                                    Plantation, FL 33323
                                </p>
<a className="inline-flex items-center text-sm font-bold text-[#08CCBE] hover:text-white transition-colors" href="https://goo.gl/maps/k1B8wALQWfQZ86FBA" target="_blank">
                                    Get Directions <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#08CCBE]/50 transition-colors">
<div className="p-3 rounded-full bg-[#08CCBE] text-white shrink-0">
<iconify-icon icon="solar:clock-circle-bold" width="24"></iconify-icon>
</div>
<div className="w-full">
<h3 className="text-xl font-bold mb-4">Office Hours</h3>
<div className="grid grid-cols-2 gap-y-2 text-sm text-slate-300">
<span>Monday</span> <span className="text-right">9:00 AM - 5:00 PM</span>
<span>Tuesday</span> <span className="text-right">8:00 AM - 5:00 PM</span>
<span>Wednesday</span> <span className="text-right">8:00 AM - 5:00 PM</span>
<span>Thursday</span> <span className="text-right">7:30 AM - 5:00 PM</span>
<span>Friday</span> <span className="text-right">8:00 AM - 2:00 PM</span>
<span>Sat / Sun</span> <span className="text-right text-slate-500">Closed</span>
</div>
</div>
</div>
</div>
</div>

<div className="h-full min-h-[400px] rounded-3xl overflow-hidden relative group">
<iframe allowfullscreen="" className="w-full h-full" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d434.9461721220012!2d-80.3083097189626!3d26.14691164375946!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d90638d7fe10a5%3A0x1266aef629279d07!2sMy%20Dentist%20For%20Life%20Of%20Plantation!5e0!3m2!1sen!2sin!4v1692623284145!5m2!1sen!2sin" style={{border: '0', filter: 'grayscale(100%) invert(92%) contrast(83%)'}} width="100%"></iframe>
<div className="absolute bottom-6 left-6 right-6 bg-[#08CCBE] p-6 rounded-2xl shadow-xl flex items-center justify-between">
<div className="text-white">
<p className="font-bold text-lg">Ready to visit?</p>
<p className="text-sm opacity-90">Book your slot online instantly.</p>
</div>
<a className="bg-white text-[#08CCBE] rounded-full p-3 hover:bg-slate-100 transition-colors" href="#book">
<iconify-icon icon="solar:arrow-right-linear" width="24"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="book">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<span className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 font-bold text-sm mb-4">New Patients Welcome</span>
<h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-slate-900">
                    Request an <span className="text-[#08CCBE]">Appointment</span>
</h2>
<p className="text-lg text-slate-500">
                    Fill out the form below and our team will contact you shortly to confirm your visit.
                </p>
</div>
<form className="bg-slate-50 p-8 md:p-10 rounded-[2rem] shadow-lg border border-slate-100 space-y-6" onsubmit="event.preventDefault(); alert('Thank you! Your request has been sent. Our team will contact you shortly to confirm.');">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
<input className="w-full rounded-xl border-slate-200 px-4 py-3 focus:border-[#08CCBE] focus:ring-[#08CCBE] outline-none transition-all" placeholder="John Doe" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
<input className="w-full rounded-xl border-slate-200 px-4 py-3 focus:border-[#08CCBE] focus:ring-[#08CCBE] outline-none transition-all" placeholder="(555) 555-5555" required="" type="tel"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
<input className="w-full rounded-xl border-slate-200 px-4 py-3 focus:border-[#08CCBE] focus:ring-[#08CCBE] outline-none transition-all" placeholder="john@example.com" required="" type="email"/>
</div>
<div>
<label className="block text-sm font-bold text-slate-700 mb-2">Preferred Location</label>
<select className="w-full rounded-xl border-slate-200 px-4 py-3 focus:border-[#08CCBE] focus:ring-[#08CCBE] outline-none transition-all bg-white">
<option selected="" value="Plantation">Plantation (Main Office)</option>
</select>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-bold text-slate-700 mb-2">Preferred Date</label>
<input className="w-full rounded-xl border-slate-200 px-4 py-3 focus:border-[#08CCBE] focus:ring-[#08CCBE] outline-none transition-all text-slate-500" type="date"/>
</div>
<div>
<label className="block text-sm font-bold text-slate-700 mb-2">Preferred Time</label>
<select className="w-full rounded-xl border-slate-200 px-4 py-3 focus:border-[#08CCBE] focus:ring-[#08CCBE] outline-none transition-all bg-white">
<option>Morning</option>
<option>Afternoon</option>
</select>
</div>
</div>
<div>
<label className="block text-sm font-bold text-slate-700 mb-2">Reason for Visit</label>
<select className="w-full rounded-xl border-slate-200 px-4 py-3 focus:border-[#08CCBE] focus:ring-[#08CCBE] outline-none transition-all bg-white">
<option>New Patient Exam</option>
<option>Cleaning</option>
<option>Emergency / Pain</option>
<option>Cosmetic Consultation</option>
<option>Invisalign</option>
<option>Implants</option>
<option>Other</option>
</select>
</div>
<div>
<label className="block text-sm font-bold text-slate-700 mb-2">Message (Optional)</label>
<textarea className="w-full rounded-xl border-slate-200 px-4 py-3 focus:border-[#08CCBE] focus:ring-[#08CCBE] outline-none transition-all" placeholder="Any specific concerns or insurance questions?" rows="3"></textarea>
</div>
<div className="pt-2">
<button className="w-full bg-[#08CCBE] text-white font-bold text-lg py-4 rounded-xl transition-all shadow-lg shadow-[#08CCBE]/20 hover:shadow-[#08CCBE]/40 hover:bg-[#06b3a7]" type="submit">
                        Submit Request
                    </button>
<p className="text-center text-xs text-slate-400 mt-4">
                        *Note for setup: Connect form to email autoresponder + practice management notification.
                    </p>
</div>
</form>
</div>
</section>

<footer className="pt-20 pb-10 border-t bg-white border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="space-y-6">
<a className="flex items-center gap-2" href="#">
<img alt="Logo" className="h-10 w-auto" src="https://www.mydentistforlife.com/wp-content/uploads/2024/11/mydentistforlife_logo.png"/>
</a>
<p className="text-slate-500 font-medium leading-relaxed text-sm">
                        My Dentist For Life of Plantation.<br/>
                        Top rated dentist offering holistic, cosmetic, and implant dentistry.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center hover:bg-[#08CCBE] hover:text-white transition-all text-slate-400" href="https://www.facebook.com/mydentistforlife.online" target="_blank">
<iconify-icon icon="solar:facebook-bold" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center hover:bg-[#08CCBE] hover:text-white transition-all text-slate-400" href="https://www.instagram.com/mydentistforlife/" target="_blank">
<iconify-icon icon="solar:instagram-bold" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center hover:bg-[#08CCBE] hover:text-white transition-all text-slate-400" href="https://www.youtube.com/channel/UCjYp1i-ZDInXazXbLz-Ltmw" target="_blank">
<iconify-icon icon="solar:youtube-bold" width="20"></iconify-icon>
</a>
</div>
</div>

<div>
<h4 className="font-bold mb-6 text-slate-900">Contact Us</h4>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-slate-500 font-medium text-sm">
<iconify-icon className="text-[#08CCBE] text-lg shrink-0" icon="solar:map-point-bold"></iconify-icon>
<span>11941 West Sunrise Blvd.<br/>Plantation, FL 33323</span>
</li>
<li className="flex items-center gap-3 text-slate-500 font-medium text-sm">
<iconify-icon className="text-[#08CCBE] text-lg shrink-0" icon="solar:phone-calling-bold"></iconify-icon>
<a className="hover:text-[#08CCBE]" href="tel:9547871695">(954) 787-1695</a>
</li>
</ul>
</div>

<div>
<h4 className="font-bold mb-6 text-slate-900">Services</h4>
<ul className="space-y-3 text-slate-500 font-medium text-sm">
<li><a className="hover:text-[#08CCBE] transition-colors" href="#">Holistic Dentistry</a></li>
<li><a className="hover:text-[#08CCBE] transition-colors" href="#">Cosmetic Dentistry</a></li>
<li><a className="hover:text-[#08CCBE] transition-colors" href="#">Dental Implants</a></li>
<li><a className="hover:text-[#08CCBE] transition-colors" href="#">Invisalign®</a></li>
<li><a className="hover:text-[#08CCBE] transition-colors" href="#">Sedation Dentistry</a></li>
<li><a className="hover:text-[#08CCBE] transition-colors" href="#">Emergency Care</a></li>
</ul>
</div>

<div>
<h4 className="font-bold mb-6 text-slate-900">Areas We Serve</h4>
<p className="text-sm text-slate-500 leading-relaxed">
                        Plantation, Boca Raton, Coral Springs, Davie, Fort Lauderdale, Hollywood, Lauderhill, Miami, Parkland, Southwest Ranches, Sunrise, Tamarac, Weston.
                    </p>
</div>
</div>

<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-slate-100">
<p className="text-slate-400 font-medium text-sm">© 2026 My Dentist For Life of Plantation. All Rights Reserved.</p>
<div className="flex gap-6 text-sm font-medium text-slate-400">
<a className="hover:text-[#08CCBE]" href="/sitemap/">Sitemap</a>
<a className="hover:text-[#08CCBE]" href="#">Privacy Policy</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
