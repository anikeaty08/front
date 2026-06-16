import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');


document.write(new Date().getFullYear());


        // Reveal Animations on Scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        // Close dropdowns when clicking outside
        document.addEventListener('click', function(e) {
            const dropdowns = document.querySelectorAll('.select-wrapper');
            dropdowns.forEach(dropdown => {
                if (!dropdown.contains(e.target)) {
                    dropdown.classList.remove('open');
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200/80 transition-all duration-300" id="navbar">
<div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<img alt="Florida Dental Implant Logo" className="h-10 w-auto object-contain" src="https://fldentalimplant.com/wp-content/uploads/2021/02/Florida-Dental-Implant-Aesthetic-Center-header-logo.png"/>
</a>

<div className="hidden lg:flex items-center gap-8 text-sm font-normal text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#home">Welcome</a>

<div className="group relative">
<button className="flex items-center gap-1 hover:text-zinc-900 transition-colors outline-none">
                        Why Choose Us <iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="absolute left-0 top-full hidden pt-3 group-hover:block">
<div className="w-48 rounded-xl border border-zinc-200/80 bg-white p-2 shadow-lg shadow-zinc-200/20">
<a className="block rounded-lg px-3 py-2 text-sm text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 transition-colors" href="#about">Meet the Doctor</a>
<a className="block rounded-lg px-3 py-2 text-sm text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 transition-colors" href="#">Meet the Team</a>
<a className="block rounded-lg px-3 py-2 text-sm text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 transition-colors" href="#">Office Tour</a>
<a className="block rounded-lg px-3 py-2 text-sm text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 transition-colors" href="#">On-Site Lab</a>
</div>
</div>
</div>

<div className="group relative">
<button className="flex items-center gap-1 hover:text-zinc-900 transition-colors outline-none">
                        Our Practice <iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="absolute left-0 top-full hidden pt-3 group-hover:block">
<div className="w-48 rounded-xl border border-zinc-200/80 bg-white p-2 shadow-lg shadow-zinc-200/20">
<a className="block rounded-lg px-3 py-2 text-sm text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 transition-colors" href="#">Convenience</a>
<a className="block rounded-lg px-3 py-2 text-sm text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 transition-colors" href="#">Forms</a>
<a className="block rounded-lg px-3 py-2 text-sm text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 transition-colors" href="#">Financial Options</a>
</div>
</div>
</div>

<div className="group relative">
<button className="flex items-center gap-1 hover:text-zinc-900 transition-colors outline-none">
                        Services <iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="absolute left-0 top-full hidden pt-3 group-hover:block">
<div className="w-56 rounded-xl border border-zinc-200/80 bg-white p-2 shadow-lg shadow-zinc-200/20">
<a className="block rounded-lg px-3 py-2 text-sm text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 transition-colors" href="#services">Dental Implants</a>
<a className="block rounded-lg px-3 py-2 text-sm text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 transition-colors" href="#services">Teeth in a Day</a>
<a className="block rounded-lg px-3 py-2 text-sm text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 transition-colors" href="#services">Full-Mouth Rehabilitation</a>
<a className="block rounded-lg px-3 py-2 text-sm text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 transition-colors" href="#services">Custom Dentures</a>
<a className="block rounded-lg px-3 py-2 text-sm text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 transition-colors" href="#services">Sedation Dentistry</a>
<a className="block rounded-lg px-3 py-2 text-sm text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 transition-colors" href="#services">Technology</a>
</div>
</div>
</div>
<a className="hover:text-zinc-900 transition-colors" href="#testimonials">Results</a>
<a className="hover:text-zinc-900 transition-colors" href="#contact">Contact</a>
</div>

<div className="hidden lg:flex items-center gap-4">
<a className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors flex items-center gap-1.5" href="tel:407-878-2651">
<iconify-icon icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon>
                    (407) 878-2651
                </a>
<a className="bg-zinc-900 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-zinc-800 transition-all shadow-sm" href="#contact">
                    Book Appointment
                </a>
</div>

<button className="lg:hidden text-zinc-900 p-2" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>

<div className="hidden absolute top-20 left-0 w-full bg-white border-b border-zinc-200/80 p-6 flex flex-col gap-4 shadow-xl" id="mobile-menu">
<a className="text-base font-normal text-zinc-900" href="#home">Welcome</a>
<a className="text-base font-normal text-zinc-900" href="#about">Why Choose Us</a>
<a className="text-base font-normal text-zinc-900" href="#services">Services</a>
<a className="text-base font-normal text-zinc-900" href="#testimonials">Results</a>
<a className="text-base font-normal text-zinc-900" href="tel:407-878-2651">(407) 878-2651</a>
<a className="bg-zinc-900 text-white text-center py-3 rounded-lg font-medium text-sm mt-2" href="#contact">Book Appointment</a>
</div>
</nav>

<section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden" id="home">
<div className="absolute inset-0 bg-white -z-10"></div>
<div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-gradient-to-br from-sky-50 to-transparent rounded-full blur-3xl -z-10"></div>
<div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">

<div className="relative z-10 reveal">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-50 border border-zinc-200/80 text-zinc-600 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
</span>
                    Now accepting new patients
                </div>
<h1 className="font-medium text-4xl lg:text-6xl tracking-tight leading-[1.1] mb-6 text-zinc-900">
                    Reason to <br/>
<span className="text-sky-500">Smile Again</span>
</h1>
<p className="text-lg text-zinc-500 mb-8 max-w-lg leading-relaxed">
                    Dr. Zaman and his friendly team are dedicated to providing the best dental care, with a special focus on dental implants and full-mouth restoration. Earning Trust – One Patient at a Time.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="bg-zinc-900 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-zinc-800 transition-all text-center flex items-center justify-center gap-2 shadow-sm" href="#contact">
                        Request Appointment
                    </a>
<a className="bg-white border border-zinc-200 text-zinc-900 px-6 py-3 rounded-lg text-sm font-medium hover:bg-zinc-50 transition-all text-center shadow-sm" href="#services">
                        Explore Services
                    </a>
</div>
</div>

<div className="relative reveal delay-100">
<div className="relative rounded-2xl overflow-hidden shadow-xl shadow-zinc-200/50 border border-zinc-200/50 aspect-[4/5] lg:aspect-square bg-zinc-100">
<img alt="Dr. Zaman and patient" className="w-full h-full object-cover object-top" src="https://fldentalimplant.com/wp-content/uploads/2021/02/earning-trust.jpg"/>
</div>

<div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-5 shadow-lg shadow-zinc-200/40 border border-zinc-200/60 flex items-center gap-4">
<div className="h-10 w-10 rounded-lg bg-sky-50 flex items-center justify-center text-sky-500">
<iconify-icon className="text-xl" icon="solar:star-ring-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-zinc-900 tracking-tight">One-Stop Center</p>
<p className="text-xs text-zinc-500">All treatments under one roof</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-zinc-50 border-y border-zinc-200/60">
<div className="mx-auto max-w-7xl px-6">
<div className="text-center max-w-2xl mx-auto mb-16 reveal">
<h2 className="font-medium text-3xl text-zinc-900 tracking-tight mb-4">Why Choose Us?</h2>
<p className="text-zinc-500 text-base">We invest in high-tech and specialized care to give you faster treatment and even better results.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white p-6 rounded-2xl border border-zinc-200/60 shadow-sm hover:shadow-md transition-shadow reveal">
<div className="h-10 w-10 rounded-lg bg-zinc-50 border border-zinc-200/60 flex items-center justify-center text-zinc-900 mb-5">
<iconify-icon className="text-xl" icon="solar:hospital-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-medium text-zinc-900 mb-2 tracking-tight">One-Stop Center</h3>
<p className="text-sm text-zinc-500 leading-relaxed">All treatment is done under one roof by Dr. Zaman. No need to visit different offices.</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-zinc-200/60 shadow-sm hover:shadow-md transition-shadow reveal delay-75">
<div className="h-10 w-10 rounded-lg bg-zinc-50 border border-zinc-200/60 flex items-center justify-center text-zinc-900 mb-5">
<iconify-icon className="text-xl" icon="solar:sleeping-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-medium text-zinc-900 mb-2 tracking-tight">IV Sedation</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Relax through your care with a full range of sedation options for maximum comfort.</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-zinc-200/60 shadow-sm hover:shadow-md transition-shadow reveal delay-150">
<div className="h-10 w-10 rounded-lg bg-zinc-50 border border-zinc-200/60 flex items-center justify-center text-zinc-900 mb-5">
<iconify-icon className="text-xl" icon="solar:monitor-camera-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-medium text-zinc-900 mb-2 tracking-tight">On-Site Lab &amp; Tech</h3>
<p className="text-sm text-zinc-500 leading-relaxed">State-of-the-art 3-D milling machines produce perfect replacement teeth while you wait.</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-zinc-200/60 shadow-sm hover:shadow-md transition-shadow reveal delay-200">
<div className="h-10 w-10 rounded-lg bg-zinc-50 border border-zinc-200/60 flex items-center justify-center text-zinc-900 mb-5">
<iconify-icon className="text-xl" icon="solar:wallet-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-medium text-zinc-900 mb-2 tracking-tight">One Fee &amp; Financing</h3>
<p className="text-sm text-zinc-500 leading-relaxed">One comprehensive fee for all procedures, start to finish. Multiple ways to make care affordable.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="about">
<div className="mx-auto max-w-7xl px-6">
<div className="flex flex-col lg:flex-row gap-16 items-center">

<div className="w-full lg:w-1/2 relative reveal">
<div className="rounded-2xl overflow-hidden border border-zinc-200/60 shadow-lg shadow-zinc-200/40 bg-zinc-100 aspect-[4/3]">
<img alt="Dr. Mohammad K. Zaman" className="w-full h-full object-cover" src="https://fldentalimplant.com/wp-content/uploads/2021/02/Doctor-Zaman-1.jpg"/>
</div>
</div>

<div className="w-full lg:w-1/2 reveal delay-100">
<h2 className="font-medium text-3xl lg:text-4xl text-zinc-900 mb-6 tracking-tight">
                        A Respected Prosthodontist
                    </h2>
<div className="w-12 h-px bg-zinc-200 mb-6"></div>
<p className="text-zinc-500 mb-6 leading-relaxed text-base">
                        Mohammad K. Zaman, BDS, MS, has the exceptional privilege of being trained in three dental specialties: Oral Surgery, Prosthodontics, and Periodontics. 
                    </p>
<p className="text-zinc-500 mb-8 leading-relaxed text-base">
                        He has been published in the International Journal of Oral &amp; Maxillofacial Surgery, and lectures nationally and internationally. A team of highly trained certified dental assistants, lab technicians, and EMT personnel assist him with your treatment.
                    </p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-zinc-900 hover:text-sky-500 transition-colors group" href="#services">
                        View our specialized services 
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 border-t border-zinc-200/60" id="services">
<div className="mx-auto max-w-7xl px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 reveal">
<div className="max-w-2xl">
<h2 className="font-medium text-3xl lg:text-4xl text-zinc-900 mb-4 tracking-tight">Featured Services</h2>
<p className="text-zinc-500 text-base">Advanced treatments for healthy new smiles, tailored to fit your goals.</p>
</div>
<a className="hidden md:inline-flex items-center justify-center px-4 py-2 bg-white border border-zinc-200 text-sm font-medium text-zinc-900 rounded-lg hover:bg-zinc-50 transition-colors shadow-sm" href="#contact">
                    Request Consultation
                </a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<a className="group block bg-white rounded-2xl p-2 border border-zinc-200/60 shadow-sm hover:shadow-md transition-all reveal" href="#">
<div className="overflow-hidden rounded-xl aspect-[4/3] bg-zinc-100 relative mb-4">
<img alt="Dental Implants" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://fldentalimplant.com/wp-content/uploads/2021/02/dental-implants-1.jpg"/>
</div>
<div className="px-3 pb-3">
<h3 className="font-medium text-lg text-zinc-900 mb-1 tracking-tight">Dental Implants</h3>
<p className="text-sm text-zinc-500 mb-4 line-clamp-2">Permanently replace one or more teeth that will have you smiling again.</p>
<span className="text-xs font-medium text-zinc-900 group-hover:text-sky-500 transition-colors flex items-center gap-1">Learn More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>
</a>

<a className="group block bg-white rounded-2xl p-2 border border-zinc-200/60 shadow-sm hover:shadow-md transition-all reveal delay-75" href="#">
<div className="overflow-hidden rounded-xl aspect-[4/3] bg-zinc-100 relative mb-4">
<img alt="Teeth in a Day" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://fldentalimplant.com/wp-content/uploads/2021/02/teeth-in-a-day.jpg"/>
</div>
<div className="px-3 pb-3">
<h3 className="font-medium text-lg text-zinc-900 mb-1 tracking-tight">Teeth in a Day</h3>
<p className="text-sm text-zinc-500 mb-4 line-clamp-2">Anchor your dentures permanently so they never need to be taken out.</p>
<span className="text-xs font-medium text-zinc-900 group-hover:text-sky-500 transition-colors flex items-center gap-1">Learn More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>
</a>

<a className="group block bg-white rounded-2xl p-2 border border-zinc-200/60 shadow-sm hover:shadow-md transition-all reveal delay-150" href="#">
<div className="overflow-hidden rounded-xl aspect-[4/3] bg-zinc-100 relative mb-4">
<img alt="Full-Mouth Rehabilitation" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://fldentalimplant.com/wp-content/uploads/2021/02/Full-Mouth-Rehabilitation.jpg"/>
</div>
<div className="px-3 pb-3">
<h3 className="font-medium text-lg text-zinc-900 mb-1 tracking-tight">Full-Mouth Rehabilitation</h3>
<p className="text-sm text-zinc-500 mb-4 line-clamp-2">Custom treatment of complex cases for perfectly beautiful, natural-looking smiles.</p>
<span className="text-xs font-medium text-zinc-900 group-hover:text-sky-500 transition-colors flex items-center gap-1">Learn More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>
</a>

<a className="group block bg-white rounded-2xl p-2 border border-zinc-200/60 shadow-sm hover:shadow-md transition-all reveal" href="#">
<div className="overflow-hidden rounded-xl aspect-[4/3] bg-zinc-100 relative mb-4">
<img alt="Custom Dentures" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://fldentalimplant.com/wp-content/uploads/2021/02/custom-denture.jpg"/>
</div>
<div className="px-3 pb-3">
<h3 className="font-medium text-lg text-zinc-900 mb-1 tracking-tight">Custom Dentures</h3>
<p className="text-sm text-zinc-500 mb-4 line-clamp-2">We custom-design your dentures for maximum comfort and beauty.</p>
<span className="text-xs font-medium text-zinc-900 group-hover:text-sky-500 transition-colors flex items-center gap-1">Learn More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>
</a>

<a className="group block bg-white rounded-2xl p-2 border border-zinc-200/60 shadow-sm hover:shadow-md transition-all reveal delay-75" href="#">
<div className="overflow-hidden rounded-xl aspect-[4/3] bg-zinc-100 relative mb-4">
<img alt="Sedation Dentistry" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://fldentalimplant.com/wp-content/uploads/2021/02/sedation-dentistry-1.jpg"/>
</div>
<div className="px-3 pb-3">
<h3 className="font-medium text-lg text-zinc-900 mb-1 tracking-tight">Sedation Dentistry</h3>
<p className="text-sm text-zinc-500 mb-4 line-clamp-2">Say goodbye to dental anxiety and hello to easy, comfortable care.</p>
<span className="text-xs font-medium text-zinc-900 group-hover:text-sky-500 transition-colors flex items-center gap-1">Learn More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>
</a>

<a className="group block bg-white rounded-2xl p-2 border border-zinc-200/60 shadow-sm hover:shadow-md transition-all reveal delay-150" href="#">
<div className="overflow-hidden rounded-xl aspect-[4/3] bg-zinc-100 relative mb-4">
<img alt="Technology" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://fldentalimplant.com/wp-content/uploads/2021/02/technology.jpg"/>
</div>
<div className="px-3 pb-3">
<h3 className="font-medium text-lg text-zinc-900 mb-1 tracking-tight">Technology</h3>
<p className="text-sm text-zinc-500 mb-4 line-clamp-2">The latest dental technology and experience under one roof.</p>
<span className="text-xs font-medium text-zinc-900 group-hover:text-sky-500 transition-colors flex items-center gap-1">Learn More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>
</a>
</div>
<div className="mt-8 md:hidden flex justify-center">
<a className="inline-flex items-center justify-center px-4 py-2.5 bg-white border border-zinc-200 text-sm font-medium text-zinc-900 rounded-lg hover:bg-zinc-50 transition-colors shadow-sm w-full" href="#contact">
                    Request Consultation
                </a>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-zinc-200/60" id="testimonials">
<div className="mx-auto max-w-7xl px-6">
<div className="text-center mb-16 reveal">
<h2 className="font-medium text-3xl lg:text-4xl text-zinc-900 tracking-tight mb-4">Our Patients Say the Nicest Things!</h2>
<div className="flex items-center justify-center gap-1 text-zinc-900">
<iconify-icon className="text-zinc-900" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-zinc-900" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-zinc-900" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-zinc-900" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-zinc-900" icon="solar:star-bold"></iconify-icon>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">

<div className="bg-zinc-50 p-8 rounded-2xl border border-zinc-200/60 reveal">
<p className="text-zinc-600 mb-6 leading-relaxed">"A very diligent team of professionals!! Had a very pleasant and satisfactory experience. Dr. Zaman made sure he went thoroughly with my queries and concerns and responded to them very proficiently."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-white border border-zinc-200 rounded-full flex items-center justify-center text-zinc-900 font-medium text-sm shadow-sm">AA</div>
<div>
<p className="font-medium text-sm text-zinc-900 tracking-tight">— Ayesha Ansari</p>
</div>
</div>
</div>

<div className="bg-zinc-50 p-8 rounded-2xl border border-zinc-200/60 reveal delay-100">
<p className="text-zinc-600 mb-6 leading-relaxed">"Excellent service and very experienced staff and doctors. Nice and clean clinic. Dr. Zaman is a perfectionist, really happy to get all my pending dental work here. Highly recommend!"</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-white border border-zinc-200 rounded-full flex items-center justify-center text-zinc-900 font-medium text-sm shadow-sm">FA</div>
<div>
<p className="font-medium text-sm text-zinc-900 tracking-tight">— Fahad Ali</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 border-t border-zinc-200/60 relative" id="contact">
<div className="mx-auto max-w-3xl px-6 relative z-10">
<div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl shadow-zinc-200/40 border border-zinc-200/80 reveal">
<div className="text-center mb-10">
<h2 className="font-medium text-3xl text-zinc-900 mb-3 tracking-tight">Book an Appointment</h2>
<p className="text-zinc-500 text-sm">Our convenient request form saves you time. Submit your request any time, and we'll respond promptly.</p>
</div>
<form className="space-y-5">
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">

<div className="relative">
<input className="peer w-full rounded-lg border border-zinc-200 bg-white px-4 pb-2 pt-6 text-sm text-zinc-900 focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900 placeholder-transparent transition-shadow" id="name" placeholder="Full Name" required="" type="text"/>
<label className="absolute left-4 top-2 text-xs font-normal text-zinc-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-zinc-900 pointer-events-none" htmlFor="name">Full Name</label>
</div>

<div className="relative">
<input className="peer w-full rounded-lg border border-zinc-200 bg-white px-4 pb-2 pt-6 text-sm text-zinc-900 focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900 placeholder-transparent transition-shadow" id="phone" placeholder="Phone Number" required="" type="tel"/>
<label className="absolute left-4 top-2 text-xs font-normal text-zinc-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-zinc-900 pointer-events-none" htmlFor="phone">Phone Number</label>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">

<div className="relative">
<input className="peer w-full rounded-lg border border-zinc-200 bg-white px-4 pb-2 pt-6 text-sm text-zinc-900 focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900 placeholder-transparent transition-shadow" id="email" placeholder="Email Address" required="" type="email"/>
<label className="absolute left-4 top-2 text-xs font-normal text-zinc-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-zinc-900 pointer-events-none" htmlFor="email">Email Address</label>
</div>

<div className="relative select-wrapper" onclick="this.classList.toggle('open')">
<div className="select-trigger w-full rounded-lg border border-zinc-200 bg-white px-4 py-3.5 text-sm text-zinc-500 flex justify-between items-center transition-shadow hover:border-zinc-300">
<span id="selected-service">Select Service</span>
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="select-options absolute top-[calc(100%+4px)] left-0 w-full bg-white border border-zinc-200 rounded-lg shadow-lg shadow-zinc-200/40 z-20 py-1">
<div className="px-4 py-2.5 text-sm text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 cursor-pointer transition-colors" onclick="document.getElementById('selected-service').innerText = this.innerText; document.getElementById('selected-service').classList.add('text-zinc-900')">Dental Implants</div>
<div className="px-4 py-2.5 text-sm text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 cursor-pointer transition-colors" onclick="document.getElementById('selected-service').innerText = this.innerText; document.getElementById('selected-service').classList.add('text-zinc-900')">Full-Mouth Rehabilitation</div>
<div className="px-4 py-2.5 text-sm text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 cursor-pointer transition-colors" onclick="document.getElementById('selected-service').innerText = this.innerText; document.getElementById('selected-service').classList.add('text-zinc-900')">Custom Dentures</div>
<div className="px-4 py-2.5 text-sm text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 cursor-pointer transition-colors" onclick="document.getElementById('selected-service').innerText = this.innerText; document.getElementById('selected-service').classList.add('text-zinc-900')">General Consultation</div>
</div>
</div>
</div>

<div className="relative">
<textarea className="peer w-full rounded-lg border border-zinc-200 bg-white px-4 pb-2 pt-6 text-sm text-zinc-900 focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900 placeholder-transparent transition-shadow resize-none" id="message" placeholder="Message" rows="3"></textarea>
<label className="absolute left-4 top-2 text-xs font-normal text-zinc-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-zinc-900 pointer-events-none" htmlFor="message">Questions or Comments (Optional)</label>
</div>
<div className="pt-2 flex flex-col sm:flex-row gap-4 items-center">
<button className="w-full sm:w-auto bg-zinc-900 text-white font-medium text-sm px-8 py-3 rounded-lg shadow-sm hover:bg-zinc-800 transition-colors" type="button">
                            Request Online Now
                        </button>
<span className="text-zinc-400 text-sm">or</span>
<a className="text-sm font-medium text-zinc-900 hover:text-sky-500 transition-colors" href="tel:407-878-2651">
                            Call (407) 878-2651
                        </a>
</div>
</form>
</div>
</div>
</section>

<footer className="bg-white pt-16 pb-8 border-t border-zinc-200">
<div className="mx-auto max-w-7xl px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

<div className="lg:col-span-1">
<img alt="Logo" className="h-12 w-auto object-contain mb-6 filter grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all" src="https://fldentalimplant.com/wp-content/uploads/2021/02/Florida-Dental-Implant-Aesthetic-Center-footer-logo.png"/>
<p className="text-sm text-zinc-500 mb-6">Providing the best dental care to our patients, with a special focus on dental implants and full-mouth restoration.</p>
<div className="flex gap-3">
<a className="h-8 w-8 rounded-md bg-zinc-50 border border-zinc-200 text-zinc-500 flex items-center justify-center hover:bg-zinc-100 hover:text-zinc-900 transition-colors" href="#"><iconify-icon icon="solar:link-linear" strokeWidth="1.5"></iconify-icon></a>
<a className="h-8 w-8 rounded-md bg-zinc-50 border border-zinc-200 text-zinc-500 flex items-center justify-center hover:bg-zinc-100 hover:text-zinc-900 transition-colors" href="#"><iconify-icon icon="solar:hashtag-linear" strokeWidth="1.5"></iconify-icon></a>
<a className="h-8 w-8 rounded-md bg-zinc-50 border border-zinc-200 text-zinc-500 flex items-center justify-center hover:bg-zinc-100 hover:text-zinc-900 transition-colors" href="#"><iconify-icon icon="solar:chat-line-linear" strokeWidth="1.5"></iconify-icon></a>
</div>
</div>

<div className="lg:col-span-1">
<h4 className="font-medium text-zinc-900 mb-5 tracking-tight">Contact Info</h4>
<ul className="space-y-4 text-sm text-zinc-500">
<li>
<p className="font-medium text-zinc-900">Dr. Mohammad K. Zaman</p>
<p className="mt-1">746 Stirling Center Place, Suite 1100<br/>Lake Mary, FL 32746</p>
</li>
<li>
<a className="hover:text-zinc-900 transition-colors block" href="tel:407-878-2651">(407) 878-2651</a>
</li>
</ul>
</div>

<div className="lg:col-span-1">
<h4 className="font-medium text-zinc-900 mb-5 tracking-tight">Office Hours</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li className="flex justify-between">
<span>Mon - Fri</span>
<span className="text-zinc-900 font-medium">8:00 AM – 5:00 PM</span>
</li>
<li className="flex justify-between">
<span>Sat - Sun</span>
<span className="text-zinc-400">Closed</span>
</li>
</ul>
</div>

<div className="lg:col-span-1">
<h4 className="font-medium text-zinc-900 mb-5 tracking-tight">Quick Links</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="#">Patient Forms</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Financial Options</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Referring Doctor</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Privacy Policy</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-400">
<p>Copyright ©  Florida Dental Implant. All Rights Reserved.</p>
</div>
</div>
</footer>


    </>
  );
}
