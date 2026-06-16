import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        const menuBtn = document.getElementById('mobile-menu-btn');
        const menuOverlay = document.getElementById('mobile-menu-overlay');
        const closeBtn = document.getElementById('mobile-menu-close');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        function openMenu() {
            menuOverlay.classList.remove('menu-hidden');
            menuOverlay.classList.add('menu-visible');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        }

        function closeMenu() {
            menuOverlay.classList.remove('menu-visible');
            menuOverlay.classList.add('menu-hidden');
            document.body.style.overflow = ''; // Restore scrolling
        }

        menuBtn.addEventListener('click', openMenu);
        closeBtn.addEventListener('click', closeMenu);

        // Close menu when clicking a link
        mobileLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 left-0 right-0 z-50 w-full p-4 md:p-6">
<nav className="mx-auto max-w-7xl rounded-full backdrop-blur-xl border shadow-lg px-6 py-3 flex items-center justify-between transition-all duration-300 bg-white/90 border-white/20 shadow-slate-200/50">

<a className="flex items-center gap-2 group" href="#">
<div className="bg-[#292671] p-1.5 rounded-lg group-hover:bg-[#1a184f] transition-colors text-white">
<iconify-icon height="24" icon="solar:health-bold-duotone" width="24"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm md:text-lg font-bold tracking-tight text-[#292671] leading-none">Progressive Periodontics</span>
<span className="text-[10px] md:text-xs font-medium text-[#4982c6] uppercase tracking-wider">Dr. Marc Gordon</span>
</div>
</a>

<div className="hidden lg:flex items-center gap-6 xl:gap-8">
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-[#4982c6]" href="#">Home</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-[#4982c6]" href="#services">Services</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-[#4982c6]" href="#team">Meet Dr. Gordon</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-[#4982c6]" href="#new-patients">New Patients</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-[#4982c6]" href="#locations">Locations</a>
</div>

<div className="hidden md:flex items-center gap-3">

<div className="relative group">
<button className="flex items-center gap-2 text-sm font-semibold text-[#292671] hover:text-[#4982c6] transition-colors">
<iconify-icon icon="solar:phone-calling-linear" width="18"></iconify-icon>
<span>Call Us</span>
<iconify-icon icon="solar:alt-arrow-down-linear" width="14"></iconify-icon>
</button>

<div className="absolute right-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
<div className="bg-white rounded-xl shadow-xl border border-slate-100 p-3 w-48 flex flex-col gap-2">
<a className="text-xs font-bold text-slate-700 hover:text-[#4982c6] block p-2 rounded hover:bg-slate-50" href="tel:732-389-3400">
                                Eatontown <br/><span className="text-[#4982c6] font-normal text-sm">732-389-3400</span>
</a>
<a className="text-xs font-bold text-slate-700 hover:text-[#4982c6] block p-2 rounded hover:bg-slate-50" href="tel:732-364-2025">
                                Howell <br/><span className="text-[#4982c6] font-normal text-sm">732-364-2025</span>
</a>
</div>
</div>
</div>

<a className="inline-flex items-center gap-2 bg-[#292671] text-sm font-medium px-5 py-2.5 rounded-full transition-all shadow-lg shadow-blue-900/20 hover:shadow-blue-900/40 hover:bg-[#1a184f] text-white" href="#book">
                    Request Appointment
                    <iconify-icon icon="solar:calendar-add-linear" width="18"></iconify-icon>
</a>
</div>

<button className="lg:hidden text-[#292671] p-1" id="mobile-menu-btn">
<iconify-icon height="28" icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</nav>
</header>

<div className="menu-hidden fixed inset-0 z-40 bg-white/95 backdrop-blur-xl transition-all duration-300 lg:hidden flex flex-col pt-24 px-6" id="mobile-menu-overlay">
<button className="absolute top-6 right-6 text-[#292671] p-2 bg-slate-100 rounded-full" id="mobile-menu-close">
<iconify-icon height="32" icon="solar:close-circle-linear" width="32"></iconify-icon>
</button>
<div className="flex flex-col gap-6 text-center">
<a className="mobile-link text-xl font-bold text-[#292671]" href="#">Home</a>
<a className="mobile-link text-xl font-medium text-slate-600" href="#services">Services</a>
<a className="mobile-link text-xl font-medium text-slate-600" href="#team">Meet Dr. Gordon</a>
<a className="mobile-link text-xl font-medium text-slate-600" href="#locations">Locations</a>
<a className="mobile-link text-xl font-medium text-slate-600" href="#new-patients">New Patients</a>
<hr className="border-slate-200 my-2"/>
<a className="flex items-center justify-center gap-3 w-full bg-white border border-[#292671] text-[#292671] py-4 rounded-xl font-bold shadow-sm" href="tel:732-389-3400">
<iconify-icon icon="solar:phone-calling-bold" width="20"></iconify-icon>
                Call Eatontown
            </a>
<a className="flex items-center justify-center gap-3 w-full bg-white border border-[#292671] text-[#292671] py-4 rounded-xl font-bold shadow-sm" href="tel:732-364-2025">
<iconify-icon icon="solar:phone-calling-bold" width="20"></iconify-icon>
                Call Howell
            </a>
<a className="mobile-link flex items-center justify-center gap-3 w-full bg-[#292671] text-white py-4 rounded-xl font-bold shadow-lg shadow-blue-900/20" href="#book">
                Book Appointment
            </a>
</div>
</div>

<section className="relative pt-32 pb-16 lg:pt-44 lg:pb-32 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="space-y-8 relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4982c6]/10 text-[#292671] text-xs font-bold uppercase tracking-wider border border-[#4982c6]/20">
<iconify-icon icon="solar:cup-star-bold" width="16"></iconify-icon>
                        NJ Monthly Top Periodontist 12 Years
                    </div>
<h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-slate-900">
                        Restoring Confidence,<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#292671] to-[#4982c6]">One Smile at a Time.</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 font-medium max-w-lg leading-relaxed">
                        Expert care for dental implants, gum recession, and periodontal health. Serving Eatontown, Howell, and Monmouth County with a gentle touch.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center gap-2 bg-[#292671] text-base font-semibold px-8 py-4 rounded-full transition-all shadow-xl shadow-blue-900/20 hover:shadow-blue-900/40 hover:-translate-y-1 hover:bg-[#1a184f] text-white" href="#book">
                            Book Appointment
                            <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
<a className="inline-flex justify-center items-center gap-2 border text-base font-semibold px-8 py-4 rounded-full transition-all bg-white hover:bg-slate-50 text-slate-700 border-slate-200 hover:border-[#4982c6] hover:text-[#4982c6]" href="#locations">
                            View Locations
                            <iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</a>
</div>

<div className="pt-6 border-t border-slate-100 flex flex-wrap gap-6 items-center text-sm font-medium text-slate-500">
<div className="flex items-center gap-2">
<iconify-icon className="text-[#4982c6]" icon="solar:check-circle-bold"></iconify-icon>
                            25+ Years Experience
                        </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-[#4982c6]" icon="solar:shield-check-bold"></iconify-icon>
                            Most Insurance Accepted
                        </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-[#4982c6]" icon="solar:heart-bold"></iconify-icon>
                            Sedation Available
                        </div>
</div>
</div>

<div className="relative mt-8 lg:mt-0">
<div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl group shadow-[#292671]/10 border-4 border-white">

<div className="absolute inset-0 bg-gradient-to-t from-[#292671]/40 to-transparent z-10"></div>

<img alt="Happy couple smiling" className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105" src="https://www.drmgordon.com/wp-content/uploads/slider4.jpg"/>

<div className="absolute bottom-8 left-8 right-8 backdrop-blur-xl bg-white/90 p-5 rounded-2xl shadow-lg z-20 flex items-center gap-4">
<div className="bg-[#292671] text-white p-3 rounded-full">
<iconify-icon height="24" icon="solar:medal-star-bold" width="24"></iconify-icon>
</div>
<div>
<p className="text-xs font-bold uppercase text-[#4982c6] tracking-wider">Top Rated</p>
<p className="text-slate-900 font-bold leading-tight">NJ Monthly "Top Periodontist"</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-y border-slate-100" id="locations">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<span className="text-[#4982c6] font-bold tracking-wider uppercase text-sm">Conveniently Located</span>
<h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">Visit Us in Monmouth County</h2>
<p className="text-slate-500 text-lg">We have two state-of-the-art offices to serve you better.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-[#4982c6] transition-all hover:shadow-xl hover:shadow-[#4982c6]/10 group">
<div className="flex justify-between items-start mb-6">
<div className="p-3 bg-white rounded-2xl shadow-sm text-[#292671]">
<iconify-icon icon="solar:buildings-bold-duotone" width="32"></iconify-icon>
</div>
<span className="bg-[#292671] text-white text-xs font-bold px-3 py-1 rounded-full">Eatontown</span>
</div>
<h3 className="text-2xl font-bold text-slate-900 mb-2">Eatontown Office</h3>
<address className="not-italic text-slate-500 mb-6 leading-relaxed">
                        1 Industrial Way West, Building C<br/>
                        Eatontown, NJ 07724
                    </address>
<div className="space-y-3">
<a className="flex items-center gap-3 text-slate-700 font-semibold hover:text-[#4982c6] transition-colors" href="tel:732-389-3400">
<div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm text-[#4982c6]">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon>
</div>
                            (732) 389-3400
                        </a>
<a className="flex items-center gap-3 text-slate-700 font-semibold hover:text-[#4982c6] transition-colors" href="https://www.google.com/maps/search/?api=1&amp;query=1+Industrial+Way+West+Building+C+Eatontown+NJ+07724" target="_blank">
<div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm text-[#4982c6]">
<iconify-icon icon="solar:map-arrow-right-linear"></iconify-icon>
</div>
                            Get Directions
                        </a>
</div>
</div>

<div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-[#4982c6] transition-all hover:shadow-xl hover:shadow-[#4982c6]/10 group">
<div className="flex justify-between items-start mb-6">
<div className="p-3 bg-white rounded-2xl shadow-sm text-[#292671]">
<iconify-icon icon="solar:home-smile-bold-duotone" width="32"></iconify-icon>
</div>
<span className="bg-[#292671] text-white text-xs font-bold px-3 py-1 rounded-full">Howell</span>
</div>
<h3 className="text-2xl font-bold text-slate-900 mb-2">Howell Office</h3>
<address className="not-italic text-slate-500 mb-6 leading-relaxed">
                        3508 Route 9 South<br/>
                        Howell, NJ 07731
                    </address>
<div className="space-y-3">
<a className="flex items-center gap-3 text-slate-700 font-semibold hover:text-[#4982c6] transition-colors" href="tel:732-364-2025">
<div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm text-[#4982c6]">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon>
</div>
                            (732) 364-2025
                        </a>
<a className="flex items-center gap-3 text-slate-700 font-semibold hover:text-[#4982c6] transition-colors" href="https://www.google.com/maps/search/?api=1&amp;query=3508+Route+9+South+Howell+NJ+07731" target="_blank">
<div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm text-[#4982c6]">
<iconify-icon icon="solar:map-arrow-right-linear"></iconify-icon>
</div>
                            Get Directions
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-20">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-slate-900">
                    Comprehensive <span className="text-[#4982c6]">Periodontal Care</span>
</h2>
<p className="text-lg text-slate-500 font-medium">
                    State-of-the-art treatments tailored to restore your oral health and smile aesthetics.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-[#292671]/5 transition-all duration-300">
<div className="w-14 h-14 bg-[#e8f1f8] text-[#292671] rounded-2xl flex items-center justify-center mb-6">
<iconify-icon icon="mdi:tooth-outline" width="30"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Dental Implants</h3>
<p className="text-slate-500 leading-relaxed mb-4">Permanent solutions for missing teeth. We specialize in immediate replacement and implant-supported teeth.</p>
</div>

<div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-[#292671]/5 transition-all duration-300">
<div className="w-14 h-14 bg-[#e8f1f8] text-[#292671] rounded-2xl flex items-center justify-center mb-6">
<iconify-icon icon="mdi:bacteria-outline" width="30"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Gum Disease Treatment</h3>
<p className="text-slate-500 leading-relaxed mb-4">Expert diagnosis and prevention of periodontal disease to save your natural teeth and health.</p>
</div>

<div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-[#292671]/5 transition-all duration-300">
<div className="w-14 h-14 bg-[#e8f1f8] text-[#292671] rounded-2xl flex items-center justify-center mb-6">
<iconify-icon icon="solar:sleeping-linear" width="30"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Sedation Dentistry</h3>
<p className="text-slate-500 leading-relaxed mb-4">Anxiety-free visits using nitrous oxide or oral sedation to ensure your complete comfort.</p>
</div>

<div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-[#292671]/5 transition-all duration-300">
<div className="w-14 h-14 bg-[#e8f1f8] text-[#292671] rounded-2xl flex items-center justify-center mb-6">
<iconify-icon icon="solar:magic-stick-3-linear" width="30"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Chao Pinhole Technique</h3>
<p className="text-slate-500 leading-relaxed mb-4">A minimally invasive scalpel-free, suture-free procedure for treating gum recession.</p>
</div>

<div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-[#292671]/5 transition-all duration-300">
<div className="w-14 h-14 bg-[#e8f1f8] text-[#292671] rounded-2xl flex items-center justify-center mb-6">
<iconify-icon icon="solar:bone-broken-linear" width="30"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Bone Regeneration</h3>
<p className="text-slate-500 leading-relaxed mb-4">Advanced techniques to regrow lost bone support, often using stem-cell-like materials.</p>
</div>

<div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-[#292671]/5 transition-all duration-300">
<div className="w-14 h-14 bg-[#e8f1f8] text-[#292671] rounded-2xl flex items-center justify-center mb-6">
<iconify-icon icon="solar:smile-circle-linear" width="30"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Cosmetic Periodontics</h3>
<p className="text-slate-500 leading-relaxed mb-4">Procedures like crown lengthening to fix "gummy smiles" and enhance the aesthetics of your teeth.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden" id="team">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row gap-12 items-center">

<div className="w-full lg:w-1/2 relative">
<div className="absolute top-4 left-4 w-full h-full bg-[#e8f1f8] rounded-[3rem] -z-10 transform -rotate-2"></div>
<img alt="Dr. Marc Gordon" className="w-full rounded-[3rem] shadow-2xl border-8 border-white object-cover bg-slate-200" src="https://www.drmgordon.com/wp-content/uploads/dr-bio-btn.png"/>
<div className="absolute bottom-10 right-10 bg-white p-4 rounded-xl shadow-lg max-w-xs hidden md:block">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-[#292671]" icon="solar:stars-minimalistic-bold"></iconify-icon>
<span className="font-bold text-[#292671]">Expert Care</span>
</div>
<p className="text-xs text-slate-500 font-medium">Chief of Periodontal Services at Monmouth Medical Center.</p>
</div>
</div>

<div className="w-full lg:w-1/2 space-y-6">
<span className="text-[#4982c6] font-bold tracking-wider uppercase text-sm">Meet Your Specialist</span>
<h2 className="text-3xl md:text-5xl font-bold text-slate-900">Dr. Marc E. Gordon, <span className="text-[#292671]">DMD, PC</span></h2>
<div className="prose text-slate-500 text-lg leading-relaxed">
<p>
                            Dr. Gordon earned his dental degree from <strong>Tufts School of Dental Medicine</strong>, graduating Magna Cum Laude, and completed his two-year specialty in Periodontics at the <strong>University of Pennsylvania</strong>.
                        </p>
<p className="mt-4">
                            With over 25 years of experience in gum care and dental implants, Dr. Gordon is dedicated to providing superior care in a comfortable environment. He holds the title of Chief of Periodontal Services at Monmouth Medical Center.
                        </p>
</div>
<div className="grid grid-cols-2 gap-4 mt-4">
<div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
<h4 className="font-bold text-[#292671] text-lg">Tufts Univ.</h4>
<p className="text-sm text-slate-500">Magna Cum Laude</p>
</div>
<div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
<h4 className="font-bold text-[#292671] text-lg">UPenn</h4>
<p className="text-sm text-slate-500">Periodontics Specialty</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="new-patients">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-3xl font-bold text-slate-900">New Patient <span className="text-[#4982c6]">FAQ</span></h2>
<p className="text-slate-500 mt-3">Common questions from our patients in Eatontown &amp; Howell.</p>
</div>
<div className="space-y-4">
<details className="group bg-white rounded-2xl shadow-sm p-6 [&amp;_summary::-webkit-details-marker]:hidden open:ring-2 open:ring-[#4982c6]/20">
<summary className="flex cursor-pointer items-center justify-between font-bold text-slate-900">
                        Do you accept my insurance?
                        <iconify-icon className="text-[#4982c6] transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="mt-4 text-slate-500 leading-relaxed">
                        We accept most major insurance plans. Please contact our office with your provider details, and we will verify your specific coverage.
                    </p>
</details>
<details className="group bg-white rounded-2xl shadow-sm p-6 [&amp;_summary::-webkit-details-marker]:hidden open:ring-2 open:ring-[#4982c6]/20">
<summary className="flex cursor-pointer items-center justify-between font-bold text-slate-900">
                        Is sedation available for anxious patients?
                        <iconify-icon className="text-[#4982c6] transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="mt-4 text-slate-500 leading-relaxed">
                        Yes. We understand dental anxiety. We offer nitrous oxide ("laughing gas") and oral sedative agents. An anesthesiologist is also available for longer procedures if needed.
                    </p>
</details>
<details className="group bg-white rounded-2xl shadow-sm p-6 [&amp;_summary::-webkit-details-marker]:hidden open:ring-2 open:ring-[#4982c6]/20">
<summary className="flex cursor-pointer items-center justify-between font-bold text-slate-900">
                        Do you handle dental emergencies?
                        <iconify-icon className="text-[#4982c6] transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="mt-4 text-slate-500 leading-relaxed">
                        Yes, please call our office immediately if you are experiencing pain or a dental emergency.
                    </p>
</details>
</div>
</div>
</section>

<section className="py-24 rounded-t-[3rem] overflow-hidden relative bg-[#292671] text-white" id="book">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

<div>
<h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                        Ready to Schedule Your Visit?
                    </h2>
<p className="font-medium mb-10 text-lg text-blue-200">
                        Complete the form below to request an appointment at our Eatontown or Howell office. Our team will contact you to confirm your time.
                    </p>
<div className="space-y-6">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
<iconify-icon icon="solar:phone-calling-bold" width="24"></iconify-icon>
</div>
<div>
<p className="text-xs uppercase text-blue-300 tracking-wider font-bold">Eatontown</p>
<a className="text-xl font-bold hover:text-blue-300 transition" href="tel:732-389-3400">(732) 389-3400</a>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
<iconify-icon icon="solar:phone-calling-bold" width="24"></iconify-icon>
</div>
<div>
<p className="text-xs uppercase text-blue-300 tracking-wider font-bold">Howell</p>
<a className="text-xl font-bold hover:text-blue-300 transition" href="tel:732-364-2025">(732) 364-2025</a>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-3xl p-8 text-slate-900 shadow-2xl">
<form className="space-y-4">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="block text-sm font-semibold mb-1 text-slate-700">Full Name</label>
<input className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#4982c6] focus:ring-1 focus:ring-[#4982c6] bg-slate-50" type="text"/>
</div>
<div>
<label className="block text-sm font-semibold mb-1 text-slate-700">Phone</label>
<input className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#4982c6] focus:ring-1 focus:ring-[#4982c6] bg-slate-50" type="tel"/>
</div>
</div>
<div>
<label className="block text-sm font-semibold mb-1 text-slate-700">Email Address</label>
<input className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#4982c6] focus:ring-1 focus:ring-[#4982c6] bg-slate-50" type="email"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="block text-sm font-semibold mb-1 text-slate-700">Preferred Location</label>
<select className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#4982c6] focus:ring-1 focus:ring-[#4982c6] bg-slate-50">
<option>Eatontown</option>
<option>Howell</option>
</select>
</div>
<div>
<label className="block text-sm font-semibold mb-1 text-slate-700">Service Needed</label>
<select className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#4982c6] focus:ring-1 focus:ring-[#4982c6] bg-slate-50">
<option>General Checkup/Clean</option>
<option>Dental Implant</option>
<option>Gum Recession</option>
<option>Emergency</option>
<option>Other</option>
</select>
</div>
</div>
<div>
<label className="block text-sm font-semibold mb-1 text-slate-700">Message (Optional)</label>
<textarea className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#4982c6] focus:ring-1 focus:ring-[#4982c6] bg-slate-50" rows="3"></textarea>
</div>


<button className="w-full bg-[#292671] text-white font-bold text-lg py-4 rounded-xl transition-all shadow-lg hover:bg-[#1a184f] flex items-center justify-center gap-2 mt-4" type="button">
                            Submit Request
                            <iconify-icon icon="solar:plain-3-bold" width="20"></iconify-icon>
</button>
<p className="text-xs text-center text-slate-400 mt-2">By submitting, you agree to receive contact for scheduling.</p>
</form>
</div>
</div>
</div>
</section>

<footer className="pt-20 pb-10 bg-slate-50 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="space-y-6">
<a className="flex items-center gap-2" href="#">
<div className="bg-[#292671] p-1.5 rounded-lg text-white">
<iconify-icon height="24" icon="solar:health-bold-duotone" width="24"></iconify-icon>
</div>
<span className="text-lg font-bold tracking-tight text-[#292671]">Progressive Periodontics</span>
</a>
<p className="text-slate-500 font-medium text-sm leading-relaxed">
                        Top rated periodontal and implant dentistry in Monmouth County. Dedicated to your health and comfort.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-[#292671] hover:text-white transition-all text-[#292671] bg-white" href="#">
<iconify-icon icon="mdi:facebook"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-[#292671] hover:text-white transition-all text-[#292671] bg-white" href="#">
<iconify-icon icon="mdi:twitter"></iconify-icon>
</a>
</div>
</div>

<div>
<h4 className="font-bold mb-4 text-[#292671]">Eatontown</h4>
<ul className="space-y-4 text-sm font-medium text-slate-500">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#4982c6] shrink-0 mt-1" icon="solar:map-point-bold"></iconify-icon>
<span>1 Industrial Way West, Bldg C<br/>Eatontown, NJ 07724</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#4982c6] shrink-0" icon="solar:phone-bold"></iconify-icon>
<a className="hover:text-[#292671]" href="tel:732-389-3400">(732) 389-3400</a>
</li>
</ul>
</div>

<div>
<h4 className="font-bold mb-4 text-[#292671]">Howell</h4>
<ul className="space-y-4 text-sm font-medium text-slate-500">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#4982c6] shrink-0 mt-1" icon="solar:map-point-bold"></iconify-icon>
<span>3508 Route 9 South<br/>Howell, NJ 07731</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#4982c6] shrink-0" icon="solar:phone-bold"></iconify-icon>
<a className="hover:text-[#292671]" href="tel:732-364-2025">(732) 364-2025</a>
</li>
</ul>
</div>

<div>
<h4 className="font-bold mb-4 text-[#292671]">Patient Resources</h4>
<ul className="space-y-3 text-sm font-medium text-slate-500">
<li><a className="hover:text-[#4982c6] transition-colors" href="#">Patient Forms</a></li>
<li><a className="hover:text-[#4982c6] transition-colors" href="#">Insurance Info</a></li>
<li><a className="hover:text-[#4982c6] transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-[#4982c6] transition-colors" href="#">HIPAA Policy</a></li>
</ul>
</div>
</div>

<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-slate-200 text-xs text-slate-400">
<p>© 2026 Progressive Periodontics &amp; Implant Dentistry. All Rights Reserved.</p>
<p>Website Redesign Concept.</p>
</div>
</div>
</footer>



    </>
  );
}
