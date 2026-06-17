import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Init Lucide Icons
        // Note: Iconify icons work automatically, Lucide used for specific stroke style matches
        
        // Mobile Menu Logic
        const menuBtn = document.getElementById('mobile-menu-btn');
        const closeBtn = document.getElementById('close-menu-btn');
        const menu = document.getElementById('mobile-menu');
        const menuLinks = document.querySelectorAll('.mobile-link');

        function toggleMenu() {
            const isHidden = menu.classList.contains('hidden');
            
            if (isHidden) {
                // Open
                menu.classList.remove('hidden');
                // Small delay to allow display:flex to apply before opacity transition
                setTimeout(() => {
                    menu.classList.remove('opacity-0', 'pointer-events-none');
                }, 10);
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            } else {
                // Close
                menu.classList.add('opacity-0', 'pointer-events-none');
                setTimeout(() => {
                    menu.classList.add('hidden');
                }, 300); // Wait for transition
                document.body.style.overflow = '';
            }
        }

        menuBtn.addEventListener('click', toggleMenu);
        closeBtn.addEventListener('click', toggleMenu);
        
        // Close menu when clicking a link
        menuLinks.forEach(link => {
            link.addEventListener('click', toggleMenu);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<header className="fixed top-0 left-0 right-0 z-50 w-full p-2 md:p-4">

<div className="hidden lg:flex justify-between items-center max-w-7xl mx-auto px-6 py-2 text-xs font-medium text-slate-500 mb-2">
<div className="flex items-center gap-4">
<span className="flex items-center gap-1.5"><iconify-icon icon="solar:map-point-linear"></iconify-icon> 156 Ramapo Valley Road, Mahwah, NJ 07430</span>
<span className="flex items-center gap-1.5"><iconify-icon icon="solar:clock-circle-linear"></iconify-icon> Next Open: Tue 3:00 PM</span>
</div>
<div className="flex items-center gap-4">
<a className="hover:text-[#2195b7] transition-colors flex items-center gap-1.5" href="tel:2015292922">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon> (201) 529-2922
                 </a>
</div>
</div>
<nav className="mx-auto max-w-7xl rounded-full backdrop-blur-xl border shadow-lg px-4 md:px-6 py-3 flex items-center justify-between transition-all duration-300 bg-white/90 border-white/20 shadow-slate-200/50">

<a className="flex items-center gap-2 group" href="#">
<div className="bg-white p-1 rounded-lg">

<img alt="Mahwah Prime Dental" className="h-8 md:h-10 w-auto object-contain" src="https://mahwahprimedental.com/wp-content/uploads/2023/07/250-MPD_Logo-2A-DENTAL-IMPLANT-CENTER.png"/>
</div>
</a>

<div className="hidden lg:flex items-center gap-6">
<a className="text-sm font-semibold transition-colors text-slate-600 hover:text-[#2195b7]" href="#">Home</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-[#2195b7]" href="#about">Our Team</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-[#2195b7]" href="#services">Services</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-[#2195b7]" href="#offers">Offers</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-[#2195b7]" href="#faq">FAQ</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-[#2195b7]" href="#contact">Contact</a>
</div>

<div className="hidden md:flex items-center gap-3">
<a className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-[#2195b7] px-3" href="tel:2015292922">
<iconify-icon icon="solar:phone-linear" width="18"></iconify-icon> Call Us
                </a>
<a className="inline-flex items-center gap-2 bg-[#2195b7] text-sm font-medium px-5 py-2.5 rounded-full transition-all shadow-lg shadow-[#2195b7]/20 hover:shadow-[#2195b7]/40 hover:bg-[#187a96] text-white" href="#book">
                    Request Appointment
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<button className="lg:hidden p-2 text-slate-900 z-50 relative" id="mobile-menu-btn">
<iconify-icon height="28" icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</nav>

<div className="fixed inset-0 bg-white/95 backdrop-blur-xl z-40 hidden flex-col justify-center items-center gap-8 opacity-0 pointer-events-none transition-opacity duration-300" id="mobile-menu">
<button className="absolute top-6 right-6 p-2 text-slate-500 hover:text-slate-900" id="close-menu-btn">
<iconify-icon icon="solar:close-circle-linear" width="40"></iconify-icon>
</button>
<a className="mobile-link text-2xl font-semibold text-slate-900" href="#">Home</a>
<a className="mobile-link text-2xl font-medium text-slate-600" href="#services">Services</a>
<a className="mobile-link text-2xl font-medium text-slate-600" href="#about">Our Team</a>
<a className="mobile-link text-2xl font-medium text-slate-600" href="#offers">New Patients</a>
<a className="mobile-link text-2xl font-medium text-slate-600" href="#contact">Contact</a>
<a className="mobile-link mt-4 inline-flex items-center gap-2 bg-[#2195b7] text-lg font-medium px-8 py-4 rounded-full shadow-xl text-white" href="#book">
                Book Appointment
            </a>
</div>
</header>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="space-y-8 relative z-10">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-[#2195b7]/10 text-[#2195b7]">
                        Welcome to Mahwah Prime Dental
                    </span>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tighter leading-[1.1] text-slate-900">
                        Quality of Care <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2195b7] to-[#1aafba]">Start With A Smile</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 font-medium max-w-lg leading-relaxed">
                        We take great pride in providing our community with high-quality, patient centered care and health education. Experience a compassionate and friendly atmosphere.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center gap-2 bg-[#2195b7] text-base font-medium px-8 py-3.5 rounded-full transition-all shadow-xl shadow-[#2195b7]/20 hover:shadow-[#2195b7]/40 hover:-translate-y-1 hover:bg-[#187a96] text-white" href="#book">
                            Book Appointment
                            <iconify-icon icon="solar:calendar-linear"></iconify-icon>
</a>
<a className="inline-flex justify-center items-center gap-2 border text-base font-medium px-8 py-3.5 rounded-full transition-all bg-white hover:bg-slate-50 text-slate-700 border-slate-200 hover:border-[#2195b7] hover:text-[#2195b7]" href="tel:2015292922">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon>
                            (201) 529-2922
                        </a>
</div>
<div className="pt-6 flex items-center gap-2 text-sm font-medium text-slate-500">
<iconify-icon className="text-[#2195b7]" icon="solar:shield-check-linear" width="20"></iconify-icon> Most Insurance Accepted
                        <span className="mx-2">•</span>
<iconify-icon className="text-[#2195b7]" icon="solar:clock-circle-linear" width="20"></iconify-icon> Evening Hours Available
                    </div>
</div>

<div className="relative">
<div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl group shadow-[#2195b7]/10">

<img alt="Mahwah Prime Dental Care" className="w-full h-[500px] lg:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105" src="https://mahwahprimedental.com/wp-content/uploads/2022/03/main_banner4.jpg"/>

<div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent from-[#0f4c5e]/80"></div>

<div className="absolute bottom-8 left-8 right-8 backdrop-blur-xl p-6 rounded-2xl shadow-xl flex items-center justify-between bg-white/95">
<div>
<p className="text-xs font-bold uppercase tracking-wider mb-1 text-[#2195b7]">Emergency Care</p>
<p className="font-medium text-slate-900">24 Hour Emergency Service Available</p>
</div>
<div className="p-3 rounded-full bg-blue-50 text-[#2195b7]">
<iconify-icon icon="solar:medical-kit-linear" width="24"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-20">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6 text-slate-900">
                    Comprehensive <span className="text-[#2195b7]">Dental Services</span>
</h2>
<p className="text-lg text-slate-500 font-medium">
                    From routine fillings to advanced 3D guided implant surgery, our qualified doctors are here for you.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group p-2 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border bg-slate-50 border-slate-100 hover:border-[#2195b7]/30">
<div className="relative h-56 rounded-2xl overflow-hidden">
<img alt="Dental Implants" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://mahwahprimedental.com/wp-content/uploads/2022/02/implant1.jpg"/>
</div>
<div className="p-6">
<h3 className="text-2xl font-semibold mb-3 tracking-tight text-slate-900">Dental Implants</h3>
<p className="leading-relaxed text-base text-slate-500 mb-4">Effective replacement for missing teeth designed to blend with your natural smile. 3D CT scan qualified.</p>
<a className="text-[#2195b7] font-semibold flex items-center gap-1 group-hover:gap-2 transition-all" href="#">Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
</div>

<div className="group p-2 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border bg-slate-50 border-slate-100 hover:border-[#2195b7]/30">
<div className="relative h-56 rounded-2xl overflow-hidden">
<img alt="All-on-4" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://mahwahprimedental.com/wp-content/uploads/2022/02/main_banner3.jpg"/>
</div>
<div className="p-6">
<h3 className="text-2xl font-semibold mb-3 tracking-tight text-slate-900">All-on-4 Implants</h3>
<p className="leading-relaxed text-base text-slate-500 mb-4">A full arch restoration solution for complete smile rehabilitation using just four implants.</p>
<a className="text-[#2195b7] font-semibold flex items-center gap-1 group-hover:gap-2 transition-all" href="#">Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
</div>

<div className="group p-2 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border bg-slate-50 border-slate-100 hover:border-[#2195b7]/30">
<div className="relative h-56 rounded-2xl overflow-hidden">
<img alt="Dental Crown" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://mahwahprimedental.com/wp-content/uploads/2022/03/crown.jpg"/>
</div>
<div className="p-6">
<h3 className="text-2xl font-semibold mb-3 tracking-tight text-slate-900">Dental Crowns</h3>
<p className="leading-relaxed text-base text-slate-500 mb-4">Restoring size, shape, and strength using durable Zirconia material that acts like natural teeth.</p>
<a className="text-[#2195b7] font-semibold flex items-center gap-1 group-hover:gap-2 transition-all" href="#">Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
</div>

<div className="group p-2 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border bg-slate-50 border-slate-100 hover:border-[#2195b7]/30">
<div className="relative h-56 rounded-2xl overflow-hidden">
<img alt="3D Guided Surgery" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://mahwahprimedental.com/wp-content/uploads/2022/04/3D_implant_guided_surgery.jpg"/>
</div>
<div className="p-6">
<h3 className="text-2xl font-semibold mb-3 tracking-tight text-slate-900">3D Guided Surgery</h3>
<p className="leading-relaxed text-base text-slate-500 mb-4">Minimally invasive technology for quick recovery, little bleeding, and precise design.</p>
<a className="text-[#2195b7] font-semibold flex items-center gap-1 group-hover:gap-2 transition-all" href="#">Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
</div>

<div className="group p-2 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border bg-slate-50 border-slate-100 hover:border-[#2195b7]/30">
<div className="relative h-56 rounded-2xl overflow-hidden">
<img alt="Veneers" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://mahwahprimedental.com/wp-content/uploads/2022/02/veneers1.jpg"/>
</div>
<div className="p-6">
<h3 className="text-2xl font-semibold mb-3 tracking-tight text-slate-900">Dental Veneers</h3>
<p className="leading-relaxed text-base text-slate-500 mb-4">Improve color and shape or close gaps. Cosmetic specialists provide the best treatment options.</p>
<a className="text-[#2195b7] font-semibold flex items-center gap-1 group-hover:gap-2 transition-all" href="#">Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
</div>

<div className="group p-2 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border bg-slate-50 border-slate-100 hover:border-[#2195b7]/30">
<div className="relative h-56 rounded-2xl overflow-hidden">
<img alt="Root Canal" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://mahwahprimedental.com/wp-content/uploads/2022/03/root_canal2.jpg"/>
</div>
<div className="p-6">
<h3 className="text-2xl font-semibold mb-3 tracking-tight text-slate-900">Root Canal Therapy</h3>
<p className="leading-relaxed text-base text-slate-500 mb-4">Repair and save infected teeth. We use 3D imaging to determine the best course of action.</p>
<a className="text-[#2195b7] font-semibold flex items-center gap-1 group-hover:gap-2 transition-all" href="#">Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-[#2195b7] text-white rounded-[3rem] mx-4 lg:mx-8" id="offers">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="space-y-6">
<span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase bg-white/20 tracking-wider">New Patients</span>
<h2 className="text-4xl lg:text-6xl font-bold tracking-tight">Free Dental Implant Consultation</h2>
<p className="text-lg text-white/90 font-medium">Includes: Clinical Exam, CBCT Scan to Evaluate Bone Structure, and X-Rays as needed.</p>
<div className="pt-4">
<h3 className="text-xl font-bold mb-2">Refer a Friend Bonus</h3>
<p className="text-white/80">Mahwah Prime Dental will offer you a $25.00 gift card for referring new patients to us.</p>
</div>
<div className="pt-6">
<a className="inline-flex items-center gap-2 bg-white text-[#2195b7] text-base font-bold px-8 py-3.5 rounded-full transition-all hover:bg-slate-100 shadow-xl" href="#book">
                            Claim Offer
                            <iconify-icon icon="solar:gift-linear"></iconify-icon>
</a>
</div>
</div>
<div className="relative hidden lg:block">
<img alt="Free Consultation" className="w-full h-auto object-contain drop-shadow-2xl" src="https://mahwahprimedental.com/wp-content/uploads/2022/03/promo_vector.png"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4 text-slate-900">
                    Meet Our <span className="text-[#2195b7]">Professional Team</span>
</h2>
<p className="text-lg text-slate-500 font-medium">
                    Our practice invites you to become a part of our growing and supportive community.
                </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">

<div className="group relative rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-all">
<div className="aspect-[4/5] w-full relative">
<img alt="Dr. Insik David Chung" className="absolute inset-0 w-full h-full object-cover object-top" src="https://mahwahprimedental.com/wp-content/uploads/2022/02/David.jpg"/>
</div>
<div className="p-4 text-center">
<h4 className="text-lg font-bold text-slate-900">Dr. Insik David Chung</h4>
<p className="text-sm font-medium text-[#2195b7]">Doctor</p>
</div>
</div>

<div className="group relative rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-all">
<div className="aspect-[4/5] w-full relative">
<img alt="Dr. Jennifer Mijin Park" className="absolute inset-0 w-full h-full object-cover object-top" src="https://mahwahprimedental.com/wp-content/uploads/2022/02/Jennifer.jpg"/>
</div>
<div className="p-4 text-center">
<h4 className="text-lg font-bold text-slate-900">Dr. Jennifer Mijin Park</h4>
<p className="text-sm font-medium text-[#2195b7]">Doctor</p>
</div>
</div>

<div className="group relative rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-all">
<div className="aspect-[4/5] w-full relative">
<img alt="Dr. Sungmin Peter Jeoun" className="absolute inset-0 w-full h-full object-cover object-top" src="https://mahwahprimedental.com/wp-content/uploads/2024/10/Dr.Jeoun_-scaled.jpg"/>
</div>
<div className="p-4 text-center">
<h4 className="text-lg font-bold text-slate-900">Dr. Sungmin P. Jeoun</h4>
<p className="text-sm font-medium text-[#2195b7]">Doctor</p>
</div>
</div>

<div className="group relative rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-all">
<div className="aspect-[4/5] w-full relative">
<img alt="Debbie Romer Gonzales" className="absolute inset-0 w-full h-full object-cover object-top" src="https://mahwahprimedental.com/wp-content/uploads/2022/02/Debbie.jpg"/>
</div>
<div className="p-4 text-center">
<h4 className="text-lg font-bold text-slate-900">Debbie R. Gonzales</h4>
<p className="text-sm font-medium text-slate-500">Dental Hygienist</p>
</div>
</div>

<div className="group relative rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-all">
<div className="aspect-[4/5] w-full relative">
<img alt="Laura Cuppi" className="absolute inset-0 w-full h-full object-cover object-top" src="https://mahwahprimedental.com/wp-content/uploads/2022/02/Laura.jpg"/>
</div>
<div className="p-4 text-center">
<h4 className="text-lg font-bold text-slate-900">Laura Cuppi</h4>
<p className="text-sm font-medium text-slate-500">Office Manager</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="faq">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4 text-slate-900">
                    Frequently Asked <span className="text-[#2195b7]">Questions</span>
</h2>
<p className="text-lg text-slate-500 font-medium">
                    Find fast answers on scheduling, comfort options, payments, and treatments.
                </p>
</div>
<div className="space-y-4">

<details className="group rounded-2xl shadow-sm border border-slate-100 [&amp;_summary::-webkit-details-marker]:hidden open:ring-1 open:ring-[#2195b7]/20 bg-slate-50">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900">
<h2 className="text-lg font-semibold">What is a dental bridge?</h2>
<div className="rounded-full p-1.5 text-[#2195b7] transition duration-300 group-open:-rotate-180 bg-white shadow-sm">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</summary>
<p className="px-6 pb-6 text-slate-500 leading-relaxed font-medium">
                        A dental bridge is a custom-made dental restoration designed to replace one or more missing teeth by "bridging" the gap they leave behind. The structure consists of artificial teeth (pontics) anchored by dental crowns on the healthy teeth on either side of the gap.
                    </p>
</details>

<details className="group rounded-2xl shadow-sm border border-slate-100 [&amp;_summary::-webkit-details-marker]:hidden open:ring-1 open:ring-[#2195b7]/20 bg-slate-50">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900">
<h2 className="text-lg font-semibold">Why would I need a dental crown?</h2>
<div className="rounded-full p-1.5 text-[#2195b7] transition duration-300 group-open:-rotate-180 bg-white shadow-sm">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</summary>
<p className="px-6 pb-6 text-slate-500 leading-relaxed font-medium">
                        You might need a dental crown to restore a tooth that is severely decayed, cracked, or weak. Crowns are also used after root canal therapy to protect the tooth structure, or for cosmetic purposes to improve the appearance of a discolored tooth.
                    </p>
</details>

<details className="group rounded-2xl shadow-sm border border-slate-100 [&amp;_summary::-webkit-details-marker]:hidden open:ring-1 open:ring-[#2195b7]/20 bg-slate-50">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900">
<h2 className="text-lg font-semibold">Can anyone get All-on-4 dental implants?</h2>
<div className="rounded-full p-1.5 text-[#2195b7] transition duration-300 group-open:-rotate-180 bg-white shadow-sm">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</summary>
<p className="px-6 pb-6 text-slate-500 leading-relaxed font-medium">
                        Not everyone is an immediate candidate. Success depends on sufficient jawbone density and overall health. We perform a thorough evaluation, including CT scans, to determine if you are a candidate for All-on-4 implants.
                    </p>
</details>

<details className="group rounded-2xl shadow-sm border border-slate-100 [&amp;_summary::-webkit-details-marker]:hidden open:ring-1 open:ring-[#2195b7]/20 bg-slate-50">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900">
<h2 className="text-lg font-semibold">What causes tooth sensitivity?</h2>
<div className="rounded-full p-1.5 text-[#2195b7] transition duration-300 group-open:-rotate-180 bg-white shadow-sm">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</summary>
<p className="px-6 pb-6 text-slate-500 leading-relaxed font-medium">
                        Sensitivity is often caused by enamel wearing down or gums receding, exposing the dentin layer. Aggressive brushing, acidic foods, gum disease, or cracked teeth can contribute to this issue.
                    </p>
</details>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white relative overflow-hidden" id="book">

<div className="absolute top-0 right-0 w-2/3 h-full bg-[#2195b7]/10 blur-[120px] rounded-full"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="space-y-8">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
                        Let's Start Your Smile Journey With Us.
                    </h2>
<p className="text-lg text-slate-400 font-medium">
                        Booking your next visit is simple. Fill out the form or call us directly.
                    </p>
<div className="space-y-4">
<div className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700">
<div className="p-2 bg-[#2195b7] rounded-lg text-white">
<iconify-icon icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-lg">Visit Us</h4>
<p className="text-slate-400">156 Ramapo Valley Road,<br/>Mahwah, NJ 07430</p>
</div>
</div>
<div className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700">
<div className="p-2 bg-[#2195b7] rounded-lg text-white">
<iconify-icon icon="solar:phone-calling-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-lg">Call Us</h4>
<a className="text-slate-400 hover:text-white transition-colors" href="tel:2015292922">(201) 529-2922</a>
</div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-3xl shadow-2xl">
<form className="space-y-4 text-slate-900">
<h3 className="text-xl font-bold mb-6">Request Appointment</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-bold uppercase text-slate-500 mb-1">Full Name</label>
<input className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#2195b7] focus:ring-1 focus:ring-[#2195b7] transition-all bg-slate-50" placeholder="John Doe" type="text"/>
</div>
<div>
<label className="block text-xs font-bold uppercase text-slate-500 mb-1">Phone</label>
<input className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#2195b7] focus:ring-1 focus:ring-[#2195b7] transition-all bg-slate-50" placeholder="(201) 555-0123" type="tel"/>
</div>
</div>
<div>
<label className="block text-xs font-bold uppercase text-slate-500 mb-1">Email</label>
<input className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#2195b7] focus:ring-1 focus:ring-[#2195b7] transition-all bg-slate-50" placeholder="john@example.com" type="email"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-bold uppercase text-slate-500 mb-1">Service</label>
<select className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#2195b7] bg-slate-50">
<option>General Checkup</option>
<option>Implants / All-on-4</option>
<option>Cosmetic / Veneers</option>
<option>Emergency</option>
</select>
</div>
<div>
<label className="block text-xs font-bold uppercase text-slate-500 mb-1">Preferred Time</label>
<select className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#2195b7] bg-slate-50">
<option>Morning</option>
<option>Afternoon</option>
<option>Evening</option>
</select>
</div>
</div>
<div>
<label className="block text-xs font-bold uppercase text-slate-500 mb-1">Message</label>
<textarea className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#2195b7] focus:ring-1 focus:ring-[#2195b7] transition-all bg-slate-50" placeholder="Reason for visit..." rows="3"></textarea>
</div>
<button className="w-full bg-[#2195b7] font-bold text-lg py-4 rounded-xl transition-all shadow-lg shadow-[#2195b7]/20 hover:shadow-[#2195b7]/40 flex items-center justify-center gap-2 mt-4 hover:bg-[#187a96] text-white" type="button">
                            Submit Request
                        </button>
<p className="text-xs text-center text-slate-400 mt-2">*Our team will contact you to confirm.</p>
</form>
</div>
</div>
</div>
</section>

<footer className="pt-20 pb-10 border-t bg-slate-50 border-slate-200 text-slate-600">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="space-y-6">
<a className="block" href="#">
<img alt="Mahwah Prime Dental" className="h-10 w-auto" src="https://mahwahprimedental.com/wp-content/uploads/2023/07/250-MPD_Logo-2A-DENTAL-IMPLANT-CENTER.png"/>
</a>
<p className="text-slate-500 font-medium text-sm leading-relaxed">
                        With state of the art dental equipment, excellent dental services, and the best attentive staff—you are in good hands at Mahwah Prime Dental.
                    </p>

<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-[#2195b7] hover:border-[#2195b7] transition-all bg-white border-slate-200 text-[#2195b7] hover:text-white" href="https://www.facebook.com/Mahwah-Prime-Dental-102661359024052" target="_blank">
<iconify-icon icon="ic:baseline-facebook"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-[#2195b7] hover:border-[#2195b7] transition-all bg-white border-slate-200 text-[#2195b7] hover:text-white" href="https://www.instagram.com/mahwahprimedental" target="_blank">
<iconify-icon icon="ri:instagram-fill"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-[#2195b7] hover:border-[#2195b7] transition-all bg-white border-slate-200 text-[#2195b7] hover:text-white" href="https://goo.gl/maps/jecodaDoJK6nNydn9" target="_blank">
<iconify-icon icon="mdi:google"></iconify-icon>
</a>
</div>
</div>

<div>
<h4 className="font-bold mb-6 text-slate-900">Contact</h4>
<ul className="space-y-4 text-sm">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#2195b7] text-lg shrink-0" icon="solar:map-point-linear"></iconify-icon>
<span>156 Ramapo Valley Road,<br/>Mahwah, NJ 07430</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#2195b7] text-lg shrink-0" icon="solar:phone-calling-linear"></iconify-icon>
<a className="hover:text-[#2195b7]" href="tel:2015292922">(201) 529-2922</a>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#2195b7] text-lg shrink-0" icon="solar:letter-linear"></iconify-icon>
<a className="hover:text-[#2195b7]" href="mailto:mahwahprimedental@gmail.com">mahwahprimedental@gmail.com</a>
</li>
</ul>
</div>

<div>
<h4 className="font-bold mb-6 text-slate-900">Working Hours</h4>
<ul className="space-y-2 text-sm font-medium text-slate-500">
<li className="flex justify-between"><span>Mon</span> <span className="text-slate-900">Closed</span></li>
<li className="flex justify-between"><span>Tue</span> <span className="text-slate-900">3 pm – 8 pm</span></li>
<li className="flex justify-between"><span>Wed</span> <span className="text-slate-900">9 am – 6 pm</span></li>
<li className="flex justify-between"><span>Thu</span> <span className="text-slate-900">9 am – 6 pm</span></li>
<li className="flex justify-between"><span>Fri</span> <span className="text-slate-900">9 am – 5 pm</span></li>
<li className="flex justify-between"><span>Sat</span> <span className="text-slate-900">9 am – 1 pm</span></li>
<li className="flex justify-between"><span>Sun</span> <span className="text-slate-900">Closed</span></li>
</ul>
</div>

<div className="rounded-xl overflow-hidden h-48 bg-slate-200">
<iframe aria-label="156 Ramapo Valley Road, Mahwah, NJ, 07430" className="w-full h-full border-0" loading="lazy" src="https://maps.google.com/maps?q=156%20Ramapo%20Valley%20Road%2C%20%20Mahwah%2C%20NJ%2C%2007430&amp;t=m&amp;z=14&amp;output=embed&amp;iwloc=near" title="156 Ramapo Valley Road, Mahwah, NJ, 07430"></iframe>
</div>
</div>

<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-slate-200 text-sm">
<p>© 2026 Mahwah Prime Dental. All Rights Reserved.</p>
<div className="flex gap-6">
<a className="hover:text-[#2195b7]" href="#">Privacy Policy</a>
<a className="hover:text-[#2195b7]" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
