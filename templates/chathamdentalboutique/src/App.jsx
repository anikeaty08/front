import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
primary: {
50: '#f0fdfd',
100: '#ccfbfb',
200: '#99f6f6',
300: '#56c2bf', // Brand Color from Source
400: '#2dd4bf',
500: '#14b8a6',
600: '#0d9488',
700: '#0f766e',
800: '#115e59',
900: '#134e4a',
950: '#042f2e',
},
secondary: '#280120', // Dark purple from source text/headers
},
fontFamily: {
sans: ['Plus Jakarta Sans', 'sans-serif'],
heading: ['Quicksand', 'sans-serif'], // Keeping Quicksand from source for headings
}
}
}
}



        const menuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuIconOpen = document.getElementById('menu-icon-open');
        const menuIconClose = document.getElementById('menu-icon-close');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        function toggleMenu() {
            const isClosed = mobileMenu.classList.contains('opacity-0');
            
            if (isClosed) {
                // Open Menu
                mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
                mobileMenu.classList.add('opacity-100', 'pointer-events-auto');
                document.body.style.overflow = 'hidden'; // Prevent scrolling
                menuIconOpen.classList.add('hidden');
                menuIconClose.classList.remove('hidden');
            } else {
                // Close Menu
                mobileMenu.classList.add('opacity-0', 'pointer-events-none');
                mobileMenu.classList.remove('opacity-100', 'pointer-events-auto');
                document.body.style.overflow = ''; // Enable scrolling
                menuIconOpen.classList.remove('hidden');
                menuIconClose.classList.add('hidden');
            }
        }

        menuBtn.addEventListener('click', toggleMenu);

        // Close menu when clicking any link
        mobileLinks.forEach(link => {
            link.addEventListener('click', toggleMenu);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 left-0 right-0 z-50 w-full p-2 md:p-4 transition-all duration-300">
<nav className="mx-auto max-w-7xl rounded-2xl backdrop-blur-xl border shadow-lg px-4 md:px-6 py-3 flex items-center justify-between bg-white/90 border-white/40 shadow-slate-200/50">

<a className="flex items-center gap-3 group" href="#">

<img alt="Chatham Dental Boutique" className="h-10 md:h-12 w-auto object-contain" src="https://lirp.cdn-website.com/c87a624c/dms3rep/multi/opt/chathamlogofullcolor-42341bf7-1920w.png"/>
</a>

<div className="hidden lg:flex items-center gap-6 xl:gap-8">
<a className="text-sm font-semibold transition-colors text-slate-600 hover:text-primary-600" href="#">Home</a>
<a className="text-sm font-semibold transition-colors text-slate-600 hover:text-primary-600" href="#services">Services</a>
<a className="text-sm font-semibold transition-colors text-slate-600 hover:text-primary-600" href="#doctor">Doctors</a>
<a className="text-sm font-semibold transition-colors text-slate-600 hover:text-primary-600" href="#locations">Locations</a>
<a className="text-sm font-semibold transition-colors text-slate-600 hover:text-primary-600" href="#new-patients">New Patients</a>
<a className="text-sm font-semibold transition-colors text-slate-600 hover:text-primary-600" href="#reviews">Reviews</a>
<a className="text-sm font-semibold transition-colors text-slate-600 hover:text-primary-600" href="#contact">Contact</a>
</div>

<div className="hidden md:flex items-center gap-3">
<a className="hidden xl:inline-flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-primary-600" href="tel:9733098888">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
                    (973) 309-8888
                </a>
<a className="inline-flex items-center gap-2 bg-primary-300 text-sm font-bold px-5 py-2.5 rounded-full transition-all shadow-lg shadow-primary-300/30 hover:shadow-primary-300/50 hover:bg-primary-400 text-white transform hover:-translate-y-0.5" href="#book">
                    Book Appointment
                </a>
</div>

<button aria-label="Toggle Menu" className="lg:hidden p-2 text-slate-800 z-50 relative" id="mobile-menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" id="menu-icon-open" width="28"></iconify-icon>
<iconify-icon className="hidden" icon="solar:close-circle-linear" id="menu-icon-close" width="28"></iconify-icon>
</button>
</nav>
</header>

<div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl opacity-0 pointer-events-none flex flex-col justify-center items-center gap-8 lg:hidden" id="mobile-menu">
<nav className="flex flex-col items-center gap-6 text-lg font-semibold text-slate-800">
<a className="mobile-link hover:text-primary-600" href="#">Home</a>
<a className="mobile-link hover:text-primary-600" href="#services">Services</a>
<a className="mobile-link hover:text-primary-600" href="#doctor">Doctors</a>
<a className="mobile-link hover:text-primary-600" href="#locations">Locations</a>
<a className="mobile-link hover:text-primary-600" href="#new-patients">New Patients</a>
<a className="mobile-link hover:text-primary-600" href="#contact">Contact</a>
</nav>
<div className="flex flex-col gap-4 w-full px-10 max-w-sm">
<a className="mobile-link w-full text-center bg-primary-300 text-white py-3 rounded-full font-bold shadow-lg" href="#book">Book Appointment</a>
<a className="w-full text-center border-2 border-slate-200 py-3 rounded-full font-bold text-slate-700 flex justify-center items-center gap-2" href="tel:9733098888">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon> Call Now
            </a>
</div>
</div>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">

<div className="absolute inset-0 z-0">
<img alt="Healthy Smile" className="w-full h-full object-cover object-center" src="https://lirp.cdn-website.com/c87a624c/dms3rep/multi/opt/AdobeStock_388627872-1920w.jpeg"/>
<div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent lg:to-white/10"></div>
<div className="absolute inset-0 bg-white/30 backdrop-blur-[2px] md:hidden"></div> 
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-xs font-bold uppercase tracking-wider mb-6">
<span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
                    Serving Chatham &amp; Surrounding Areas
                </div>
<h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-secondary mb-6">
                    Compassionate Dentistry Is Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">Specialty.</span>
</h1>
<p className="text-lg md:text-xl text-slate-700 font-medium max-w-lg leading-relaxed mb-8 drop-shadow-sm">
                    Experience comprehensive care for every stage of life. From pediatric visits to cosmetic enhancements, we provide gentle, modern dentistry.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center gap-2 bg-primary-300 text-base font-bold px-8 py-4 rounded-full transition-all shadow-xl shadow-primary-500/20 hover:shadow-primary-500/40 hover:-translate-y-1 hover:bg-primary-400 text-white" href="#book">
                        Book Appointment
                        <iconify-icon icon="solar:calendar-add-linear" width="20"></iconify-icon>
</a>
<a className="inline-flex justify-center items-center gap-2 bg-white/80 backdrop-blur-md border border-slate-200 text-base font-bold px-8 py-4 rounded-full transition-all hover:bg-white text-slate-800 hover:border-primary-300 hover:text-primary-600" href="tel:9733098888">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
                        (973) 309-8888
                    </a>
</div>

<div className="mt-12 pt-8 border-t border-slate-200/60 flex flex-wrap gap-x-8 gap-y-4 items-center">
<div className="flex items-center gap-2">
<div className="flex text-yellow-400">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<span className="text-sm font-bold text-slate-800">5-Star Care</span>
</div>
<div className="flex items-center gap-2 text-slate-600 text-sm font-medium">
<iconify-icon className="text-primary-600" icon="solar:shield-check-linear" width="20"></iconify-icon>
                        Insurance Accepted
                    </div>
<div className="flex items-center gap-2 text-slate-600 text-sm font-medium">
<iconify-icon className="text-primary-600" icon="solar:user-heart-linear" width="20"></iconify-icon>
                        Family Friendly
                    </div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-secondary">
                    Comprehensive <span className="text-primary-500">Dental Services</span>
</h2>
<p className="text-lg text-slate-500 font-medium">
                    Dr. Singh and her team provide a full range of treatments tailored to your unique needs.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 rounded-[2rem] bg-slate-50 hover:bg-white border border-slate-100 hover:border-primary-100 hover:shadow-xl hover:shadow-primary-900/5 transition-all duration-300">
<div className="w-14 h-14 rounded-2xl bg-primary-100 text-primary-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:users-group-rounded-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-secondary mb-3">Family Dentistry</h3>
<p className="text-slate-500 mb-6 leading-relaxed text-sm">Comprehensive care for adults and teens, including cleanings, sealants, and exams.</p>
<ul className="space-y-2 mb-6 text-sm text-slate-600 font-medium">
<li className="flex gap-2"><iconify-icon className="text-primary-500" icon="solar:check-circle-linear"></iconify-icon> Adult &amp; Teen Dentistry</li>
<li className="flex gap-2"><iconify-icon className="text-primary-500" icon="solar:check-circle-linear"></iconify-icon> Periodontal Therapy</li>
<li className="flex gap-2"><iconify-icon className="text-primary-500" icon="solar:check-circle-linear"></iconify-icon> Oral Cancer Screening</li>
</ul>
</div>

<div className="group p-8 rounded-[2rem] bg-slate-50 hover:bg-white border border-slate-100 hover:border-primary-100 hover:shadow-xl hover:shadow-primary-900/5 transition-all duration-300">
<div className="w-14 h-14 rounded-2xl bg-primary-100 text-primary-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:magic-stick-3-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-secondary mb-3">Cosmetic Dentistry</h3>
<p className="text-slate-500 mb-6 leading-relaxed text-sm">Enhance your smile's natural beauty with our aesthetic treatments.</p>
<ul className="space-y-2 mb-6 text-sm text-slate-600 font-medium">
<li className="flex gap-2"><iconify-icon className="text-primary-500" icon="solar:check-circle-linear"></iconify-icon> Porcelain Veneers</li>
<li className="flex gap-2"><iconify-icon className="text-primary-500" icon="solar:check-circle-linear"></iconify-icon> Teeth Whitening</li>
<li className="flex gap-2"><iconify-icon className="text-primary-500" icon="solar:check-circle-linear"></iconify-icon> Composite Fillings</li>
</ul>
</div>

<div className="group p-8 rounded-[2rem] bg-slate-50 hover:bg-white border border-slate-100 hover:border-primary-100 hover:shadow-xl hover:shadow-primary-900/5 transition-all duration-300">
<div className="w-14 h-14 rounded-2xl bg-primary-100 text-primary-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:emoji-funny-circle-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-secondary mb-3">Children's Dentistry</h3>
<p className="text-slate-500 mb-6 leading-relaxed text-sm">Gentle care designed to make your child's dental experience positive.</p>
<ul className="space-y-2 mb-6 text-sm text-slate-600 font-medium">
<li className="flex gap-2"><iconify-icon className="text-primary-500" icon="solar:check-circle-linear"></iconify-icon> Pediatric X-Rays</li>
<li className="flex gap-2"><iconify-icon className="text-primary-500" icon="solar:check-circle-linear"></iconify-icon> Fluoride Treatments</li>
<li className="flex gap-2"><iconify-icon className="text-primary-500" icon="solar:check-circle-linear"></iconify-icon> Sports Mouthguards</li>
</ul>
</div>

<div className="group p-8 rounded-[2rem] bg-slate-50 hover:bg-white border border-slate-100 hover:border-primary-100 hover:shadow-xl hover:shadow-primary-900/5 transition-all duration-300">
<div className="w-14 h-14 rounded-2xl bg-primary-100 text-primary-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:ufo-3-linear" width="32"></iconify-icon> 
</div>
<h3 className="text-xl font-bold text-secondary mb-3">Tooth Replacement</h3>
<p className="text-slate-500 mb-6 leading-relaxed text-sm">Restore function and confidence with our durable replacement options.</p>
<ul className="space-y-2 mb-6 text-sm text-slate-600 font-medium">
<li className="flex gap-2"><iconify-icon className="text-primary-500" icon="solar:check-circle-linear"></iconify-icon> Porcelain Bridges</li>
<li className="flex gap-2"><iconify-icon className="text-primary-500" icon="solar:check-circle-linear"></iconify-icon> Full &amp; Partial Dentures</li>
<li className="flex gap-2"><iconify-icon className="text-primary-500" icon="solar:check-circle-linear"></iconify-icon> Restorative Dentistry</li>
</ul>
</div>

<div className="group p-8 rounded-[2rem] bg-slate-50 hover:bg-white border border-slate-100 hover:border-primary-100 hover:shadow-xl hover:shadow-primary-900/5 transition-all duration-300">
<div className="w-14 h-14 rounded-2xl bg-primary-100 text-primary-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:smile-circle-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-secondary mb-3">Orthodontics</h3>
<p className="text-slate-500 mb-6 leading-relaxed text-sm">Straighten your teeth discreetly with modern alignment solutions.</p>
<ul className="space-y-2 mb-6 text-sm text-slate-600 font-medium">
<li className="flex gap-2"><iconify-icon className="text-primary-500" icon="solar:check-circle-linear"></iconify-icon> Clear Aligners</li>
<li className="flex gap-2"><iconify-icon className="text-primary-500" icon="solar:check-circle-linear"></iconify-icon> Ortho Screenings</li>
<li className="flex gap-2"><iconify-icon className="text-primary-500" icon="solar:check-circle-linear"></iconify-icon> Digital Scanning</li>
</ul>
</div>

<div className="group p-8 rounded-[2rem] bg-slate-50 hover:bg-white border border-slate-100 hover:border-primary-100 hover:shadow-xl hover:shadow-primary-900/5 transition-all duration-300">
<div className="w-14 h-14 rounded-2xl bg-primary-100 text-primary-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:heart-pulse-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-secondary mb-3">Specialty Care</h3>
<p className="text-slate-500 mb-6 leading-relaxed text-sm">Advanced procedures including sedation and oral surgery.</p>
<ul className="space-y-2 mb-6 text-sm text-slate-600 font-medium">
<li className="flex gap-2"><iconify-icon className="text-primary-500" icon="solar:check-circle-linear"></iconify-icon> Laughing Gas Sedation</li>
<li className="flex gap-2"><iconify-icon className="text-primary-500" icon="solar:check-circle-linear"></iconify-icon> Root Canals</li>
<li className="flex gap-2"><iconify-icon className="text-primary-500" icon="solar:check-circle-linear"></iconify-icon> Extractions</li>
</ul>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center gap-2 border border-slate-200 bg-white text-slate-700 text-sm font-bold px-6 py-3 rounded-full hover:border-primary-300 hover:text-primary-600 transition-all" href="#book">
                    View All Services
                    <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 relative overflow-hidden" id="doctor">
<div className="absolute top-0 right-0 w-1/3 h-full bg-primary-50/50 -skew-x-12 translate-x-1/4"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="relative">
<div className="aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary-900/10 border-4 border-white">
<img alt="Dr. Ramnik Singh" className="w-full h-full object-cover" src="https://lirp.cdn-website.com/c87a624c/dms3rep/multi/opt/dr-singh-800h.jpeg"/>
</div>

<div className="absolute bottom-8 right-8 bg-white/95 backdrop-blur px-6 py-4 rounded-2xl shadow-lg max-w-xs border border-white">
<p className="text-xs font-bold text-primary-500 uppercase tracking-wider mb-1">Lead Dentist</p>
<h3 className="text-xl font-bold text-secondary">Dr. Ramnik Singh</h3>
<p className="text-xs text-slate-500 mt-1 font-medium">DDS, UCSF School of Dentistry</p>
</div>
</div>

<div className="space-y-6">
<h2 className="text-3xl md:text-5xl font-bold text-secondary">Meet Dr. Singh</h2>
<p className="text-lg text-slate-600 leading-relaxed font-medium">
                        Dr. Ramnik Singh completed her Doctor of Dental Surgery degree at the University of California San Francisco School of Dentistry.
                    </p>
<p className="text-slate-500 leading-relaxed">
                        She is a proud member of the American Dental Association, Academy of General Dentistry, and American Academy of Cosmetic Dentistry. Dr. Singh understands that no two people have the exact same dental needs. She takes her time to understand the individual requirements of her patients and gives them the options best suited to their needs.
                    </p>
<p className="text-slate-500 leading-relaxed">
                        Outside of work, Dr. Singh loves to travel, hike, go camping, and cook. She lives in Chatham, NJ with her husband and two kids.
                    </p>
<div className="flex flex-wrap gap-4 pt-4">
<span className="px-4 py-2 bg-white rounded-full text-sm font-semibold text-slate-700 shadow-sm border border-slate-100">American Dental Association</span>
<span className="px-4 py-2 bg-white rounded-full text-sm font-semibold text-slate-700 shadow-sm border border-slate-100">Academy of General Dentistry</span>
</div>
<div className="pt-6">
<a className="inline-flex items-center gap-2 bg-secondary text-white text-sm font-bold px-8 py-3.5 rounded-full hover:bg-secondary/90 transition-all shadow-lg shadow-secondary/20" href="#book">
                            Book with Dr. Singh
                            <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="locations">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-secondary">
                    Visit Our <span className="text-primary-500">Practice</span>
</h2>
<p className="text-lg text-slate-500 font-medium">
                    Conveniently located to serve Chatham, Harding Township, Madison, Summit, and New Providence.
                </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

<div className="bg-slate-50 rounded-[2.5rem] p-8 border border-slate-100 shadow-lg shadow-slate-200/50 flex flex-col justify-between">
<div>
<div className="flex items-center gap-3 mb-6">
<div className="bg-primary-100 p-2.5 rounded-full text-primary-600">
<iconify-icon icon="solar:map-point-bold" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-bold text-secondary">Chatham Office</h3>
</div>
<div className="space-y-6">
<div className="flex items-start gap-4">
<iconify-icon className="text-primary-500 mt-1" icon="solar:map-arrow-right-linear" width="20"></iconify-icon>
<div>
<p className="font-bold text-slate-800">Address</p>
<p className="text-slate-600">466 Southern Blvd<br/>Chatham, NJ 07928</p>
<a className="text-sm font-bold text-primary-600 hover:underline mt-1 inline-block" href="https://goo.gl/maps/PVZZURPZKwRjJjDv7" target="_blank">Get Directions</a>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-primary-500 mt-1" icon="solar:phone-calling-linear" width="20"></iconify-icon>
<div>
<p className="font-bold text-slate-800">Phone</p>
<p className="text-slate-600 mb-1">(973) 309-8888</p>
<a className="text-sm font-bold text-primary-600 hover:underline" href="tel:9733098888">Call Now</a>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-primary-500 mt-1" icon="solar:clock-circle-linear" width="20"></iconify-icon>
<div className="w-full">
<p className="font-bold text-slate-800 mb-2">Office Hours</p>
<ul className="space-y-2 text-sm text-slate-600 font-medium">
<li className="flex justify-between border-b border-slate-200 pb-1"><span>Monday</span> <span>10:00 AM - 7:00 PM</span></li>
<li className="flex justify-between border-b border-slate-200 pb-1"><span>Friday</span> <span>7:30 AM - 4:30 PM</span></li>
<li className="flex justify-between border-b border-slate-200 pb-1"><span>Saturday</span> <span>9:00 AM - 5:00 PM</span></li>
<li className="flex justify-between pt-1 italic text-slate-400"><span>Tue/Wed/Thu</span> <span>By Appointment</span></li>
</ul>
</div>
</div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-slate-200">
<a className="w-full block text-center bg-primary-300 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary-500/20 hover:bg-primary-400 transition-all" href="#book">Request Appointment</a>
</div>
</div>

<div className="rounded-[2.5rem] overflow-hidden shadow-lg border border-slate-200 bg-slate-100 min-h-[400px] relative group">

<iframe allowfullscreen="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.23456789!2d-74.4335699!3d40.732421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQzJzU2LjciTiA3NMKwMjYnMDAuOSJX!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus" style={{border: '0', filter: 'grayscale(20%) contrast(90%)'}} width="100%"></iframe>
<div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur p-4 rounded-2xl border border-white/50 shadow-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
<p className="text-center font-bold text-slate-800">Located in the Adams Building</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-secondary text-white relative overflow-hidden" id="new-patients">

<div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-500/20 rounded-full blur-[100px]"></div>
<div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary-300/10 rounded-full blur-[100px]"></div>
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center mb-16">
<span className="text-primary-300 font-bold tracking-widest uppercase text-sm mb-2 block">New Patients Welcome</span>
<h2 className="text-3xl md:text-5xl font-bold mb-6">What to Expect</h2>
<p className="text-lg text-primary-100/80 font-medium">
                    We make your first visit smooth, comfortable, and informative.
                </p>
</div>
<div className="grid gap-4">

<details className="group bg-white/5 rounded-2xl border border-white/10 open:bg-white/10 transition-all">
<summary className="flex cursor-pointer items-center justify-between p-6 font-bold text-lg select-none">
                        How do I prepare for my first visit?
                        <iconify-icon className="text-primary-300 transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-primary-100/80 leading-relaxed">
                        Please bring your insurance card and ID. We recommend arriving 15 minutes early to complete new patient forms, or you can complete them online beforehand using the link below.
                    </div>
</details>

<details className="group bg-white/5 rounded-2xl border border-white/10 open:bg-white/10 transition-all">
<summary className="flex cursor-pointer items-center justify-between p-6 font-bold text-lg select-none">
                        Do you accept insurance?
                        <iconify-icon className="text-primary-300 transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-primary-100/80 leading-relaxed">
                        Yes, we work with many dental insurance providers. Please contact our office at (973) 309-8888 with your specific plan details so we can verify coverage for you.
                    </div>
</details>

<details className="group bg-white/5 rounded-2xl border border-white/10 open:bg-white/10 transition-all">
<summary className="flex cursor-pointer items-center justify-between p-6 font-bold text-lg select-none">
                        Do you treat children?
                        <iconify-icon className="text-primary-300 transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-primary-100/80 leading-relaxed">
                        Absolutely! We are a family practice and love seeing children. We offer pediatric services including exams, cleanings, fluoride, and sealants.
                    </div>
</details>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center gap-2 bg-primary-300 text-white font-bold px-8 py-4 rounded-full shadow-lg shadow-primary-500/30 hover:bg-primary-400 hover:-translate-y-1 transition-all" href="https://chatham-dental-boutique.lwcrm.com/patient-portal/patient-document" target="_blank">
<iconify-icon icon="solar:document-add-linear" width="20"></iconify-icon>
                    Fill New Patient Forms
                </a>
<p className="mt-4 text-xs text-primary-200/60">Secure Link • Takes ~5 Minutes</p>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="book">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100 grid grid-cols-1 lg:grid-cols-5">

<div className="p-10 lg:p-16 bg-primary-50 lg:col-span-2 flex flex-col justify-center">
<h2 className="text-3xl font-bold text-secondary mb-4">Request Your Appointment</h2>
<p className="text-slate-600 mb-8 font-medium">Fill out the form and our team will reach out to confirm your preferred time.</p>
<div className="space-y-6">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-white text-primary-600 shadow-sm flex items-center justify-center">
<iconify-icon icon="solar:phone-calling-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-xs font-bold text-slate-400 uppercase">Call Us Directly</p>
<p className="text-lg font-bold text-secondary">(973) 309-8888</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-white text-primary-600 shadow-sm flex items-center justify-center">
<iconify-icon icon="solar:clock-circle-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-xs font-bold text-slate-400 uppercase">Fast Response</p>
<p className="text-lg font-bold text-secondary">Within 24 Hours</p>
</div>
</div>
</div>
</div>

<div className="p-10 lg:p-16 lg:col-span-3">
<form className="space-y-5" onsubmit="event.preventDefault(); alert('Thank you! Your request has been sent. Our team will contact you shortly to confirm.');">
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div>
<label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
<input className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-primary-300 focus:ring-1 focus:ring-primary-300 transition-all font-medium" placeholder="John Doe" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
<input className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-primary-300 focus:ring-1 focus:ring-primary-300 transition-all font-medium" placeholder="(555) 000-0000" required="" type="tel"/>
</div>
</div>
<div>
<label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
<input className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-primary-300 focus:ring-1 focus:ring-primary-300 transition-all font-medium" placeholder="john@example.com" required="" type="email"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div>
<label className="block text-sm font-bold text-slate-700 mb-2">Preferred Day</label>
<div className="relative">
<select className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-primary-300 focus:ring-1 focus:ring-primary-300 transition-all font-medium appearance-none cursor-pointer">
<option>Monday</option>
<option>Tuesday (Appt Only)</option>
<option>Wednesday (Appt Only)</option>
<option>Thursday (Appt Only)</option>
<option>Friday</option>
<option>Saturday</option>
</select>
<iconify-icon className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div>
<label className="block text-sm font-bold text-slate-700 mb-2">Preferred Time</label>
<div className="relative">
<select className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-primary-300 focus:ring-1 focus:ring-primary-300 transition-all font-medium appearance-none cursor-pointer">
<option>Morning</option>
<option>Afternoon</option>
<option>Evening</option>
</select>
<iconify-icon className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div>
<label className="block text-sm font-bold text-slate-700 mb-2">Reason for Visit</label>
<textarea className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-primary-300 focus:ring-1 focus:ring-primary-300 transition-all font-medium" placeholder="e.g. Checkup, Tooth Pain, Whitening..." rows="3"></textarea>
</div>
<button className="w-full bg-primary-300 text-white font-bold text-lg py-4 rounded-xl shadow-lg shadow-primary-500/20 hover:bg-primary-400 transition-all hover:-translate-y-0.5" type="submit">
                            Submit Request
                        </button>
<p className="text-xs text-center text-slate-400 mt-4">*Setup Note: Connect form to instant email autoresponder + staff notification email</p>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-white pt-20 pb-10 border-t border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="space-y-6">
<img alt="Chatham Dental Boutique" className="h-10 w-auto" src="https://lirp.cdn-website.com/c87a624c/dms3rep/multi/opt/chathamlogofullcolor-42341bf7-1920w.png"/>
<p className="text-slate-500 text-sm font-medium leading-relaxed">
                        Compassionate dentistry for every stage of life. Dr. Ramnik Singh and her team are dedicated to your smile's health and beauty.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-primary-300 hover:text-white hover:border-primary-300 transition-all" href="https://facebook.com/Chatham-Dental-Boutique-104143295553233">
<iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-primary-300 hover:text-white hover:border-primary-300 transition-all" href="https://instagram.com/chathamdentistry/">
<iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon>
</a>
</div>
</div>

<div>
<h4 className="font-bold text-secondary mb-6">Quick Links</h4>
<ul className="space-y-3 text-sm text-slate-500 font-medium">
<li><a className="hover:text-primary-600 transition-colors" href="#">Home</a></li>
<li><a className="hover:text-primary-600 transition-colors" href="#services">All Services</a></li>
<li><a className="hover:text-primary-600 transition-colors" href="#doctor">Meet the Doctor</a></li>
<li><a className="hover:text-primary-600 transition-colors" href="#new-patients">New Patient Forms</a></li>
</ul>
</div>

<div>
<h4 className="font-bold text-secondary mb-6">Contact Us</h4>
<ul className="space-y-4 text-sm text-slate-500 font-medium">
<li className="flex items-start gap-3">
<iconify-icon className="text-primary-500 shrink-0 mt-0.5" icon="solar:map-point-linear" width="18"></iconify-icon>
<span>466 Southern Blvd<br/>Chatham, NJ 07928</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-primary-500 shrink-0" icon="solar:phone-calling-linear" width="18"></iconify-icon>
<span>(973) 309-8888</span>
</li>
</ul>
</div>

<div>
<h4 className="font-bold text-secondary mb-6">Office Hours</h4>
<ul className="space-y-2 text-sm text-slate-500 font-medium">
<li className="flex justify-between"><span>Monday</span> <span className="text-slate-800">10am - 7pm</span></li>
<li className="flex justify-between"><span>Friday</span> <span className="text-slate-800">7:30am - 4:30pm</span></li>
<li className="flex justify-between"><span>Saturday</span> <span className="text-slate-800">9am - 5pm</span></li>
<li className="pt-2 text-xs italic text-primary-600">Tue, Wed, Thu by appointment</li>
</ul>
</div>
</div>

<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-400">
<p>© 2026 Chatham Dental Boutique. All Rights Reserved.</p>
<div className="flex gap-6">
<a className="hover:text-primary-600" href="#">Privacy Policy</a>
<a className="hover:text-primary-600" href="#">Accessibility</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
