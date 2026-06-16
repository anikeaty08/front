import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Mobile Menu Logic
        const mobileBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu-overlay');
        const menuIconOpen = document.getElementById('menu-icon-open');
        const menuIconClose = document.getElementById('menu-icon-close');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        function toggleMenu() {
            const isClosed = mobileMenu.classList.contains('translate-x-full');
            
            if (isClosed) {
                // Open
                mobileMenu.classList.remove('translate-x-full');
                menuIconOpen.classList.add('hidden');
                menuIconClose.classList.remove('hidden');
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            } else {
                // Close
                mobileMenu.classList.add('translate-x-full');
                menuIconOpen.classList.remove('hidden');
                menuIconClose.classList.add('hidden');
                document.body.style.overflow = ''; // Allow scrolling
            }
        }

        mobileBtn.addEventListener('click', toggleMenu);

        // Close menu when a link is clicked
        mobileLinks.forEach(link => {
            link.addEventListener('click', toggleMenu);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 left-0 right-0 z-50 w-full glass-nav transition-all duration-300">

<div className="hidden md:block bg-[#5f6c57] text-white py-2 px-6 text-xs font-medium">
<div className="max-w-7xl mx-auto flex justify-between items-center">
<div className="flex items-center gap-4">
<span className="flex items-center gap-1.5 opacity-90 hover:opacity-100 transition-opacity">
<iconify-icon icon="solar:map-point-linear" width="14"></iconify-icon>
                        301 Bridge Plz N 2nd Floor, Fort Lee, NJ
                    </span>
<span className="flex items-center gap-1.5 opacity-90 hover:opacity-100 transition-opacity">
<iconify-icon icon="solar:clock-circle-linear" width="14"></iconify-icon>
                        Early &amp; Late Appointments Available
                    </span>
</div>
<div className="flex items-center gap-4">
<a className="hover:text-[#acbc71] transition-colors" href="tel:2016209772">201-620-9772</a>
</div>
</div>
</div>

<nav className="mx-auto max-w-7xl px-4 sm:px-6 py-3 flex items-center justify-between">

<a className="flex items-center gap-2 group relative z-50" href="#">
<img alt="Fort Lee Family Dental" className="h-10 w-auto object-contain" src="https://fortleefamilydental.com/wp-content/uploads/logo-with-slogan-FORT-LEE-DENTAL.png"/>
</a>

<div className="hidden lg:flex items-center gap-8">
<a className="text-sm font-semibold text-slate-600 hover:text-[#5f6c57] transition-colors" href="#">Home</a>
<a className="text-sm font-semibold text-slate-600 hover:text-[#5f6c57] transition-colors" href="#services">Services</a>
<a className="text-sm font-semibold text-slate-600 hover:text-[#5f6c57] transition-colors" href="#team">Doctors</a>
<a className="text-sm font-semibold text-slate-600 hover:text-[#5f6c57] transition-colors" href="#locations">Locations</a>
<a className="text-sm font-semibold text-slate-600 hover:text-[#5f6c57] transition-colors" href="#new-patients">New Patients</a>
<a className="text-sm font-semibold text-slate-600 hover:text-[#5f6c57] transition-colors" href="#reviews">Reviews</a>
</div>

<div className="hidden lg:flex items-center gap-3">
<a className="text-sm font-bold text-[#5f6c57] hover:text-[#acbc71] transition-colors flex items-center gap-2" href="tel:2016209772">
<iconify-icon icon="solar:phone-calling-linear" width="18"></iconify-icon>
                    (201) 620-9772
                </a>
<a className="inline-flex items-center gap-2 bg-[#5f6c57] text-sm font-medium px-5 py-2.5 rounded-full transition-all shadow-lg hover:shadow-xl hover:bg-[#4a5444] text-white" href="#book">
                    Book Online
                </a>
</div>

<button className="lg:hidden relative z-50 p-2 text-slate-900 focus:outline-none" id="mobile-menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" id="menu-icon-open" width="28"></iconify-icon>
<iconify-icon className="hidden" icon="solar:close-circle-linear" id="menu-icon-close" width="28"></iconify-icon>
</button>
</nav>

<div className="fixed inset-0 bg-white/95 backdrop-blur-xl z-40 transform translate-x-full transition-transform duration-300 flex flex-col justify-center items-center lg:hidden" id="mobile-menu-overlay">
<div className="flex flex-col gap-6 text-center">
<a className="mobile-link text-2xl font-semibold text-slate-800" href="#services">Services</a>
<a className="mobile-link text-2xl font-semibold text-slate-800" href="#team">Doctors</a>
<a className="mobile-link text-2xl font-semibold text-slate-800" href="#locations">Locations</a>
<a className="mobile-link text-2xl font-semibold text-slate-800" href="#new-patients">New Patients</a>
<a className="mobile-link text-2xl font-semibold text-slate-800" href="#contact">Contact</a>
<div className="h-px w-24 bg-slate-200 mx-auto my-4"></div>
<a className="text-xl font-medium text-[#5f6c57] flex items-center justify-center gap-2" href="tel:2016209772">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon> Call (201) 620-9772
                </a>
<a className="mobile-link inline-block bg-[#5f6c57] text-white px-8 py-3 rounded-full text-lg font-medium shadow-xl" href="#book">
                    Book Appointment
                </a>
</div>
</div>
</header>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

<div className="space-y-8 relative z-10">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#f4f7ed] text-[#5f6c57] border border-[#e2e8d5]">
                        Accepting New Patients
                    </span>
<h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-slate-900">
                        Get the Healthy, <br/>
<span className="text-[#acbc71]">Gorgeous Smile</span> You Deserve.
                    </h1>
<p className="text-lg text-slate-500 font-medium max-w-lg leading-relaxed">
                        Trusted source with great results. Modern dentistry with a warm, caring touch in Fort Lee, NJ. Personalized care for you and your family.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center gap-2 bg-[#5f6c57] text-base font-medium px-8 py-3.5 rounded-full transition-all shadow-xl shadow-[#5f6c57]/20 hover:shadow-[#5f6c57]/40 hover:-translate-y-1 hover:bg-[#4a5444] text-white" href="#book">
                            Book Appointment
                        </a>
<a className="inline-flex justify-center items-center gap-2 border text-base font-medium px-8 py-3.5 rounded-full transition-all bg-white hover:bg-slate-50 text-slate-700 border-slate-200 hover:border-[#acbc71] hover:text-[#5f6c57]" href="tel:2016209772">
<iconify-icon icon="solar:phone-linear" width="20"></iconify-icon>
                            (201) 620-9772
                        </a>
</div>

<div className="pt-6 border-t border-slate-100 flex flex-wrap gap-6 items-center text-sm font-medium text-slate-500">
<div className="flex items-center gap-2">
<iconify-icon className="text-yellow-400" icon="solar:star-bold"></iconify-icon>
                            Top Rated on Google &amp; Yelp
                        </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-[#acbc71]" icon="solar:shield-check-linear"></iconify-icon>
                            Most Insurance Accepted
                        </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-[#acbc71]" icon="solar:clock-circle-linear"></iconify-icon>
                            Early/Late Hours
                        </div>
</div>
</div>

<div className="relative lg:h-[600px]">
<div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl group">

<img alt="Gentle Dentistry Fort Lee" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://fortleefamilydental.com/wp-content/uploads/slider-2.jpg"/>

<div className="absolute inset-0 bg-gradient-to-t from-[#5f6c57]/80 via-transparent to-transparent"></div>

<div className="absolute bottom-8 left-8 right-8 p-6 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-white/20">
<div className="flex items-center gap-4">
<div className="p-3 bg-[#f4f7ed] rounded-full text-[#5f6c57]">
<iconify-icon icon="solar:heart-pulse-bold" width="24"></iconify-icon>
</div>
<div>
<p className="font-bold text-slate-900">Dr. Larisa Ilyutovich</p>
<p className="text-xs text-[#5f6c57] uppercase tracking-wider font-semibold">Leading Dentist</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-[#5f6c57]">
                    Comprehensive Dental Care
                </h2>
<p className="text-lg text-slate-500">
                    We combine advanced technology with a gentle touch. From routine checkups to full mouth reconstruction.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-[#acbc71]/30 transition-all group">
<div className="w-12 h-12 bg-[#f4f7ed] rounded-xl flex items-center justify-center text-[#5f6c57] mb-6 group-hover:bg-[#5f6c57] group-hover:text-white transition-colors">
<iconify-icon icon="solar:tooth-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-2">General Dentistry</h3>
<p className="text-slate-500 mb-4 text-sm leading-relaxed">Checkups, cleanings, and oral cancer screenings to maintain your oral health.</p>
<ul className="text-sm text-slate-500 space-y-2 mb-6">
<li className="flex items-center gap-2"><iconify-icon className="text-[#acbc71]" icon="solar:check-circle-linear"></iconify-icon> Dental Checkup</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#acbc71]" icon="solar:check-circle-linear"></iconify-icon> Root Canal Treatment</li>
</ul>
</div>

<div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-[#acbc71]/30 transition-all group">
<div className="w-12 h-12 bg-[#f4f7ed] rounded-xl flex items-center justify-center text-[#5f6c57] mb-6 group-hover:bg-[#5f6c57] group-hover:text-white transition-colors">
<iconify-icon icon="solar:stars-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-2">Cosmetic Dentistry</h3>
<p className="text-slate-500 mb-4 text-sm leading-relaxed">Enhance your smile with our aesthetic treatments.</p>
<ul className="text-sm text-slate-500 space-y-2 mb-6">
<li className="flex items-center gap-2"><iconify-icon className="text-[#acbc71]" icon="solar:check-circle-linear"></iconify-icon> Teeth Whitening</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#acbc71]" icon="solar:check-circle-linear"></iconify-icon> Dental Veneers</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#acbc71]" icon="solar:check-circle-linear"></iconify-icon> Smile Makeover</li>
</ul>
</div>

<div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-[#acbc71]/30 transition-all group">
<div className="w-12 h-12 bg-[#f4f7ed] rounded-xl flex items-center justify-center text-[#5f6c57] mb-6 group-hover:bg-[#5f6c57] group-hover:text-white transition-colors">
<iconify-icon icon="solar:bolt-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-2">Implants &amp; Surgery</h3>
<p className="text-slate-500 mb-4 text-sm leading-relaxed">Permanent solutions for missing teeth and oral structures.</p>
<ul className="text-sm text-slate-500 space-y-2 mb-6">
<li className="flex items-center gap-2"><iconify-icon className="text-[#acbc71]" icon="solar:check-circle-linear"></iconify-icon> Dental Implants</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#acbc71]" icon="solar:check-circle-linear"></iconify-icon> All-on-4</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#acbc71]" icon="solar:check-circle-linear"></iconify-icon> Full Mouth Reconstruction</li>
</ul>
</div>

<div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-[#acbc71]/30 transition-all group">
<div className="w-12 h-12 bg-[#f4f7ed] rounded-xl flex items-center justify-center text-[#5f6c57] mb-6 group-hover:bg-[#5f6c57] group-hover:text-white transition-colors">
<iconify-icon icon="solar:smile-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-2">Orthodontics</h3>
<p className="text-slate-500 mb-4 text-sm leading-relaxed">Straighten your teeth discreetly and effectively.</p>
<ul className="text-sm text-slate-500 space-y-2 mb-6">
<li className="flex items-center gap-2"><iconify-icon className="text-[#acbc71]" icon="solar:check-circle-linear"></iconify-icon> Invisalign</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#acbc71]" icon="solar:check-circle-linear"></iconify-icon> EZ-Align</li>
</ul>
</div>

<div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-[#acbc71]/30 transition-all group">
<div className="w-12 h-12 bg-[#f4f7ed] rounded-xl flex items-center justify-center text-[#5f6c57] mb-6 group-hover:bg-[#5f6c57] group-hover:text-white transition-colors">
<iconify-icon icon="solar:face-scan-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-2">Facial Aesthetics</h3>
<p className="text-slate-500 mb-4 text-sm leading-relaxed">Enhance your natural beauty beyond just your smile.</p>
<ul className="text-sm text-slate-500 space-y-2 mb-6">
<li className="flex items-center gap-2"><iconify-icon className="text-[#acbc71]" icon="solar:check-circle-linear"></iconify-icon> Botox</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#acbc71]" icon="solar:check-circle-linear"></iconify-icon> Juvéderm</li>
</ul>
</div>

<div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-[#acbc71]/30 transition-all group">
<div className="w-12 h-12 bg-[#f4f7ed] rounded-xl flex items-center justify-center text-[#5f6c57] mb-6 group-hover:bg-[#5f6c57] group-hover:text-white transition-colors">
<iconify-icon icon="solar:medical-kit-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-2">Urgent Care</h3>
<p className="text-slate-500 mb-4 text-sm leading-relaxed">Immediate attention for dental emergencies.</p>
<ul className="text-sm text-slate-500 space-y-2 mb-6">
<li className="flex items-center gap-2"><iconify-icon className="text-[#acbc71]" icon="solar:check-circle-linear"></iconify-icon> Emergency Dentist</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#acbc71]" icon="solar:check-circle-linear"></iconify-icon> Pain Relief</li>
</ul>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center gap-2 text-[#5f6c57] font-semibold hover:text-[#acbc71] transition-colors" href="#services-all">
                    View All Services <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden" id="team">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row items-center gap-16">

<div className="w-full lg:w-1/2 relative">
<div className="absolute inset-0 bg-[#f4f7ed] rounded-[2.5rem] transform -rotate-3 scale-95 z-0"></div>

<img alt="Dr. Larisa Ilyutovich and Team" className="relative z-10 w-full rounded-[2rem] shadow-2xl object-cover" src="https://fortleefamilydental.com/wp-content/uploads/our-team-update.jpg"/>
</div>

<div className="w-full lg:w-1/2 space-y-6">
<h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-[#5f6c57]">
                        Meet Dr. Larisa Ilyutovich &amp; The Team
                    </h2>
<p className="text-lg text-slate-500 leading-relaxed">
                        Dr. Ilyutovich and the staff at Fort Lee Family Dental provide quality dental care focusing on a comprehensive approach to oral health. We believe in the importance of listening to our patients to help them feel comfortable and relaxed.
                    </p>
<p className="text-lg text-slate-500 leading-relaxed">
                        From making an appointment to providing treatments, our team connects with patients to give them the thoughtful attention they deserve.
                    </p>
<div className="pt-4">
<a className="inline-flex justify-center items-center gap-2 bg-[#5f6c57] text-white px-8 py-3.5 rounded-full transition-all shadow-lg hover:bg-[#4a5444]" href="#book">
                            Meet the Team
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#f4f7ed]" id="locations">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-[#5f6c57]">
                    Visit Our Office
                </h2>
<p className="text-lg text-slate-500">Conveniently located in Fort Lee, serving Leonia, Palisades Park, and Englewood.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

<div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
<div className="flex items-start justify-between mb-6">
<div>
<h3 className="text-2xl font-bold text-slate-900">Fort Lee</h3>
<span className="inline-block mt-2 px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wide">Main Office</span>
</div>
<div className="p-3 bg-slate-50 rounded-full text-[#5f6c57]">
<iconify-icon icon="solar:map-point-bold" width="32"></iconify-icon>
</div>
</div>
<div className="space-y-4 mb-8">
<div className="flex items-start gap-3">
<iconify-icon className="text-[#acbc71] mt-1 shrink-0" icon="solar:map-point-linear" width="20"></iconify-icon>
<p className="text-slate-600 font-medium">301 Bridge Plz N 2nd Floor<br/>Fort Lee, NJ 07024</p>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-[#acbc71] shrink-0" icon="solar:phone-calling-linear" width="20"></iconify-icon>
<a className="text-slate-600 font-medium hover:text-[#5f6c57]" href="tel:2016209772">(201) 620-9772</a>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-[#acbc71] mt-1 shrink-0" icon="solar:clock-circle-linear" width="20"></iconify-icon>
<div className="text-slate-600 font-medium">
<p>Mon - Fri: Call for hours</p>
<p className="text-sm text-[#acbc71]">Early &amp; Late Appointments Available</p>
</div>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-3">
<a className="flex-1 inline-flex justify-center items-center gap-2 border border-slate-200 text-slate-700 px-6 py-3 rounded-xl hover:bg-slate-50 hover:border-[#acbc71] transition-all font-medium" href="https://www.google.com/maps/place/Fort+Lee+Family+Dental/@40.8563596,-73.969773,15z/data=!4m5!3m4!1s0x0:0xdf115e7140c78788!8m2!3d40.8563596!4d-73.969773!5m1!1e1" target="_blank">
                            Get Directions
                        </a>
<a className="flex-1 inline-flex justify-center items-center gap-2 bg-[#5f6c57] text-white px-6 py-3 rounded-xl hover:bg-[#4a5444] transition-all font-medium shadow-md" href="#book">
                            Book Here
                        </a>
</div>
</div>

<div className="h-full min-h-[400px] bg-slate-200 rounded-3xl overflow-hidden shadow-lg">
<iframe allowfullscreen="" frameborder="0" height="100%" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d114858.12030564199!2d-74.00241965184578!3d40.844584521290535!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdf115e7140c78788!2sFort+Lee+Family+Dental!5e0!3m2!1sen!2sus!4v1549991379439" style={{border: '0'}} title="Map for Fort Lee Family Dental" width="100%"></iframe>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="new-patients">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<span className="text-[#acbc71] font-semibold tracking-wide uppercase text-sm">Patient Resources</span>
<h2 className="text-3xl lg:text-4xl font-bold tracking-tight mt-2 mb-4 text-[#5f6c57]">
                    New Patient Information
                </h2>
</div>
<div className="space-y-4">

<div className="border border-slate-200 rounded-2xl p-6 hover:border-[#acbc71] transition-colors bg-slate-50">
<h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
<iconify-icon className="text-[#5f6c57]" icon="solar:card-linear"></iconify-icon> Insurance &amp; Payment
                    </h3>
<p className="text-slate-600">
                        We accept a variety of insurance plans and payment options like cash and credit cards. We also offer an <a className="text-[#5f6c57] font-semibold underline" href="#">In-House Plan</a> for those without insurance.
                    </p>
</div>

<details className="group border border-slate-200 rounded-2xl bg-white open:ring-1 open:ring-[#acbc71]">
<summary className="flex cursor-pointer items-center justify-between p-6 text-slate-900 font-semibold marker:content-none">
                        Do you see children?
                        <iconify-icon className="text-[#acbc71] transition group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-slate-600">
                        Yes! We are a family practice and offer kid-friendly dentistry to treat patients of all ages.
                    </div>
</details>

<details className="group border border-slate-200 rounded-2xl bg-white open:ring-1 open:ring-[#acbc71]">
<summary className="flex cursor-pointer items-center justify-between p-6 text-slate-900 font-semibold marker:content-none">
                        Do you offer emergency appointments?
                        <iconify-icon className="text-[#acbc71] transition group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-slate-600">
                        Yes, we provide urgent care for dental emergencies. Please call us at (201) 620-9772 immediately.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 bg-[#5f6c57] text-white rounded-t-[3rem] overflow-hidden relative" id="book">
<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center mb-12">
<h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-4">Request An Appointment</h2>
<p className="text-emerald-100/80 text-lg">Fill out the form below and we'll confirm your visit shortly.</p>
</div>
<form className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/10 space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-medium text-emerald-100 ml-1">Full Name</label>
<input className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#acbc71]" placeholder="First &amp; Last Name" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-emerald-100 ml-1">Phone Number</label>
<input className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#acbc71]" placeholder="(201) 555-0123" type="tel"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-medium text-emerald-100 ml-1">Email Address</label>
<input className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#acbc71]" placeholder="you@example.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-emerald-100 ml-1">Reason for Visit</label>
<select className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#acbc71] appearance-none cursor-pointer">
<option className="text-slate-900">New Patient Visit</option>
<option className="text-slate-900">Cleaning</option>
<option className="text-slate-900">Emergency</option>
<option className="text-slate-900">Botox/Cosmetic</option>
<option className="text-slate-900">Other</option>
</select>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-emerald-100 ml-1">Preferred Location</label>
<select className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#acbc71] appearance-none cursor-pointer">
<option className="text-slate-900" selected="">Fort Lee (Main Office)</option>
</select>
</div>
<button className="w-full bg-[#acbc71] hover:bg-[#9aac61] text-white font-bold text-lg py-4 rounded-xl shadow-lg transition-all mt-4" type="submit">
                    Submit Request
                </button>
<p className="text-xs text-center text-white/40 mt-4">* Note for setup: Connect form to instant email autoresponder + staff notification email</p>
</form>
</div>
</section>

<footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="space-y-6">
<img alt="Fort Lee Family Dental" className="h-12 brightness-0 invert opacity-80" src="https://fortleefamilydental.com/wp-content/uploads/logo-with-slogan-FORT-LEE-DENTAL.png"/>
<p className="text-sm leading-relaxed text-slate-400">
                        We create a comfortable and calming environment for patients in our office so that they can relax while receiving professional care.
                    </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:facebook-linear" width="24"></iconify-icon></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:map-point-linear" width="24"></iconify-icon></a>
</div>
</div>

<div>
<h4 className="font-bold text-white mb-6">Contact</h4>
<ul className="space-y-4 text-sm">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#acbc71] mt-0.5" icon="solar:map-point-bold"></iconify-icon>
<span>301 Bridge Plz N 2nd Floor<br/>Fort Lee, NJ 07024</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#acbc71]" icon="solar:phone-calling-bold"></iconify-icon>
<a className="hover:text-white" href="tel:2016209772">(201) 620-9772</a>
</li>
</ul>
</div>

<div>
<h4 className="font-bold text-white mb-6">Office Hours</h4>
<ul className="space-y-2 text-sm">
<li className="flex justify-between">
<span>Mon - Fri</span>
<span className="text-white">Call for hours</span>
</li>
<li className="text-[#acbc71] text-xs mt-2 italic">* Early &amp; Late Appointments Available</li>
</ul>
</div>

<div>
<h4 className="font-bold text-white mb-6">Quick Links</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-[#acbc71] transition-colors" href="#services">Services</a></li>
<li><a className="hover:text-[#acbc71] transition-colors" href="#team">Our Team</a></li>
<li><a className="hover:text-[#acbc71] transition-colors" href="#new-patients">New Patients</a></li>
<li><a className="hover:text-[#acbc71] transition-colors" href="https://fortleefamilydental.com/privacy-policy/">Privacy Policy</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
<p>© 2026 Fort Lee Family Dental. All Rights Reserved.</p>
</div>
</div>
</footer>



    </>
  );
}
