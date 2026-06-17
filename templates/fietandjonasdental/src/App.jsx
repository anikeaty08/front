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



        const menuBtn = document.getElementById('mobile-menu-btn');
        const overlay = document.getElementById('mobile-menu-overlay');
        const closeBtn = document.getElementById('close-mobile-menu');
        const links = document.querySelectorAll('.mobile-link');

        function toggleMenu() {
            if (overlay.classList.contains('hidden')) {
                overlay.classList.remove('hidden');
                overlay.classList.add('flex');
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            } else {
                overlay.classList.add('hidden');
                overlay.classList.remove('flex');
                document.body.style.overflow = 'auto';
            }
        }

        menuBtn.addEventListener('click', toggleMenu);
        closeBtn.addEventListener('click', toggleMenu);
        
        // Close menu when a link is clicked
        links.forEach(link => {
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
      

<header className="fixed top-0 left-0 right-0 z-50 w-full p-2 md:p-6 transition-all duration-300">

<div className="hidden lg:flex justify-end max-w-7xl mx-auto px-6 pb-2 gap-6 text-xs font-semibold text-slate-600 tracking-wide uppercase">
<a className="hover:text-brand flex items-center gap-1" href="tel:2015694535">
<iconify-icon icon="solar:phone-calling-linear" width="16"></iconify-icon> (201) 569-4535
            </a>
<span className="flex items-center gap-1">
<iconify-icon icon="solar:map-point-linear" width="16"></iconify-icon> 19 Franklin St, Tenafly, NJ
            </span>
</div>
<nav className="mx-auto max-w-7xl rounded-full backdrop-blur-xl border shadow-lg px-6 py-3 flex items-center justify-between transition-all duration-300 bg-white/90 border-white/20 shadow-slate-200/50">

<a className="flex items-center gap-3 group" href="#">

<img alt="Feit &amp; Jonas Logo" className="h-10 w-auto object-contain" src="https://cdcssl.ibsrv.net/ibimg/smb/577x137_80/webmgr/1m/a/s/Logo-feit.png.webp?91e65ac4f89f80ca4f3e57e4cb4bc3fe"/>
</a>

<div className="hidden lg:flex items-center gap-6 xl:gap-8">
<a className="text-sm font-semibold transition-colors text-slate-600 hover:text-brand" href="#">Home</a>
<a className="text-sm font-semibold transition-colors text-slate-600 hover:text-brand" href="#services">Services</a>
<a className="text-sm font-semibold transition-colors text-slate-600 hover:text-brand" href="#team">Meet the Doctors</a>
<a className="text-sm font-semibold transition-colors text-slate-600 hover:text-brand" href="#new-patients">New Patients</a>
<a className="text-sm font-semibold transition-colors text-slate-600 hover:text-brand" href="#contact">Contact</a>
</div>

<div className="hidden lg:flex items-center gap-3">
<a className="items-center gap-2 bg-slate-100 text-slate-700 hover:text-brand text-sm font-semibold px-4 py-2.5 rounded-full transition-all hidden xl:inline-flex" href="tel:2015694535">
<iconify-icon icon="solar:phone-linear" width="18"></iconify-icon>
                    Call Us
                </a>
<a className="inline-flex items-center gap-2 bg-brand text-sm font-medium px-5 py-2.5 rounded-full transition-all shadow-lg shadow-sky-500/20 hover:shadow-sky-500/40 hover:bg-[#146a9e] text-white" href="#book">
                    Request Appointment
                    <iconify-icon icon="solar:calendar-add-linear" width="18"></iconify-icon>
</a>
</div>

<button className="lg:hidden text-slate-900 p-1" id="mobile-menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</nav>
</header>

<div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl hidden flex-col pt-32 px-6" id="mobile-menu-overlay">
<button className="absolute top-8 right-8 text-slate-500 hover:text-slate-900" id="close-mobile-menu">
<iconify-icon icon="solar:close-circle-linear" width="36"></iconify-icon>
</button>
<div className="flex flex-col gap-6 text-center">
<a className="mobile-link text-2xl font-bold text-slate-900" href="#">Home</a>
<a className="mobile-link text-2xl font-bold text-slate-900" href="#services">Services</a>
<a className="mobile-link text-2xl font-bold text-slate-900" href="#team">Doctors</a>
<a className="mobile-link text-2xl font-bold text-slate-900" href="#new-patients">New Patients</a>
<a className="mobile-link text-2xl font-bold text-slate-900" href="#contact">Contact</a>
<hr className="border-slate-200 my-4"/>
<a className="flex items-center justify-center gap-2 text-xl font-bold text-brand" href="tel:2015694535">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon> (201) 569-4535
            </a>
<a className="mobile-link w-full bg-brand text-white font-bold py-4 rounded-xl shadow-xl" href="#book">
                Book Appointment
            </a>
</div>
</div>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="space-y-8 relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-100 text-brand text-xs font-bold uppercase tracking-wider">
<span className="w-2 h-2 rounded-full bg-brand animate-pulse"></span>
                        Serving Tenafly Since 1998
                    </div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tighter leading-[1.1] text-slate-900">
                        Treating Patients with <br/>
<span className="bg-clip-text text-transparent bg-gradient-to-t from-sky-600 to-brand">28 Years of Excellence</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 font-medium max-w-lg leading-relaxed">
                        Feit &amp; Jonas Dental offers general and cosmetic dentistry in a warm, inviting environment. We are here to help you achieve a beautiful, healthy smile.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center gap-2 bg-brand text-base font-medium px-8 py-3.5 rounded-full transition-all shadow-xl shadow-sky-500/20 hover:shadow-sky-500/40 hover:-translate-y-1 hover:bg-[#146a9e] text-white" href="#book">
                            Book Appointment
                            <iconify-icon icon="solar:calendar-linear" width="20"></iconify-icon>
</a>
<a className="inline-flex justify-center items-center gap-2 border text-base font-medium px-8 py-3.5 rounded-full transition-all bg-white hover:bg-slate-50 text-slate-700 border-slate-200 hover:border-sky-200 hover:text-brand" href="tel:2015694535">
                            Call (201) 569-4535
                            <iconify-icon icon="solar:phone-linear" width="20"></iconify-icon>
</a>
</div>

<div className="flex items-center gap-4 pt-6 border-t border-slate-100">

<img alt="Patients Choice" className="h-12 w-auto grayscale opacity-80 hover:grayscale-0 transition-all" src="https://cdcssl.ibsrv.net/ibimg/smb/382x361_80/webmgr/1m/a/s/61d5afe825945_patientschoicewinner2017lg.png.webp?0f0bbe401bcb490966528d14f329355b"/>
<div className="border-l pl-4 border-slate-200">
<p className="text-xs font-bold uppercase tracking-wider mb-1 text-slate-900">Top Rated By:</p>
<p className="text-sm font-medium text-slate-500 leading-tight">NJ Monthly Magazine • Bergen Magazine • Consumer Research Council</p>
</div>
</div>
</div>

<div className="relative">
<div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl group shadow-sky-900/10 border-4 border-white">

<img alt="Healthy Smile" className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105" src="https://cdcssl.ibsrv.net/ibimg/smb/1140x400_80/webmgr/1m/a/s/01-1.jpg.webp?f57e59e06be51fdb80b891a144bf864d"/>

<div className="bg-gradient-to-t via-transparent to-transparent from-[#0f4c75]/80 bg-[url(https://cdcssl.ibsrv.net/ibimg/smb/600x611_80/webmgr/1m/a/s/img-0990.jpg.webp?w=800&amp;q=80)] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0">
</div>

<div className="absolute top-8 left-8 flex flex-col gap-3">
<span className="inline-flex items-center gap-1.5 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg bg-white/90 text-brand">
<iconify-icon icon="solar:medal-star-linear"></iconify-icon> Gold Doc Award
                            </span>
</div>

<div className="absolute bottom-8 left-8 right-8 backdrop-blur-xl p-6 rounded-2xl shadow-xl flex items-center justify-between bg-white/95">
<div className="">
<p className="text-xs font-bold uppercase tracking-wider mb-1 text-brand">Our Promise</p>
<p className="font-medium text-slate-900">Individualized care for your family.</p>
</div>
<div className="p-3 rounded-full bg-sky-100 text-brand">
<iconify-icon icon="solar:heart-angle-linear" width="24"></iconify-icon>
</div>
</div>
</div>

<div className="absolute -z-10 top-1/2 right-0 translate-x-1/3 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl bg-sky-200/50"></div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-slate-50 relative" id="services">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-brand font-bold tracking-widest text-xs uppercase mb-2 block">Comprehensive Care</span>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6 text-slate-900">
                    Our Dental <span className="text-brand">Services</span>
</h2>
<p className="text-lg text-slate-500 font-medium">
                    We constantly replace materials and technology with the most sophisticated products to stay on the forefront of dental care.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-2 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border relative overflow-hidden bg-white hover:shadow-sky-900/5 border-slate-100">
<div className="relative h-56 rounded-2xl overflow-hidden bg-slate-100">
<img alt="General Dentistry" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://cdcssl.ibsrv.net/ibimg/smb/390x390_80/webmgr/1m/a/s/03.jpg.webp?3e000b1f2dd8dcc9b466e85180d7f4ec"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold shadow-sm text-slate-900">01</div>
</div>
<div className="p-6 relative">
<div className="absolute -top-10 right-6 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:bg-brand group-hover:text-white transition-colors bg-white text-brand">
<iconify-icon icon="solar:health-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold mb-3 tracking-tight text-slate-900 mt-2">General Dentistry</h3>
<p className="leading-relaxed text-base text-slate-500">Comprehensive exams, cleanings, and preventive care for the whole family.</p>
</div>
</div>

<div className="group p-2 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border relative overflow-hidden bg-white hover:shadow-sky-900/5 border-slate-100">
<div className="relative h-56 rounded-2xl overflow-hidden bg-slate-100">
<img alt="Teeth Whitening" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://cdcssl.ibsrv.net/ibimg/smb/390x390_80/webmgr/1m/a/s/02.jpg.webp?fd7c01ecf01a4117b8b3545be19a2a9e"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold shadow-sm text-slate-900">02</div>
</div>
<div className="p-6 relative">
<div className="absolute -top-10 right-6 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:bg-brand group-hover:text-white transition-colors bg-white text-brand">
<iconify-icon icon="solar:stars-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold mb-3 tracking-tight text-slate-900 mt-2">Teeth Whitening</h3>
<p className="leading-relaxed text-base text-slate-500">Brighten your smile with our professional cosmetic whitening solutions.</p>
</div>
</div>

<div className="group p-2 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border relative overflow-hidden bg-white hover:shadow-sky-900/5 border-slate-100">
<div className="relative h-56 rounded-2xl overflow-hidden bg-slate-100">
<img alt="Implants" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://cdcssl.ibsrv.net/ibimg/smb/390x390_80/webmgr/1m/a/s/01.jpg.webp?403c80dc301142d483285181fcddd596"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold shadow-sm text-slate-900">03</div>
</div>
<div className="p-6 relative">
<div className="absolute -top-10 right-6 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:bg-brand group-hover:text-white transition-colors bg-white text-brand">
<iconify-icon icon="solar:screw-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold mb-3 tracking-tight text-slate-900 mt-2">Dental Implants</h3>
<p className="text-slate-500 leading-relaxed text-base">Restoring your ability to eat and smile comfortably with precision implants.</p>
</div>
</div>

<div className="group p-2 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border relative overflow-hidden bg-white hover:shadow-sky-900/5 border-slate-100">
<div className="relative h-56 rounded-2xl overflow-hidden bg-slate-100">
<img alt="Fillings" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://cdcssl.ibsrv.net/ibimg/smb/390x390_80/webmgr/1m/a/s/04.jpg.webp?042d2a6e37b20de3d9f339e8b09d4777"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold shadow-sm text-slate-900">04</div>
</div>
<div className="p-6 relative">
<div className="absolute -top-10 right-6 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:bg-brand group-hover:text-white transition-colors bg-white text-brand">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold mb-3 tracking-tight text-slate-900 mt-2">Fillings &amp; Crowns</h3>
<p className="text-slate-500 leading-relaxed text-base">In-office dental lab for high precision crowns, bridges, and restorations.</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-24 relative" id="team">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="">
<span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 uppercase tracking-wider bg-slate-100 text-slate-600">The Doctors</span>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4 text-slate-900">
                        Meet <span className="text-brand">Dr. Feit &amp; Dr. Jonas</span>
</h2>
<p className="text-lg text-slate-500 font-medium max-w-xl">
                        Opened in 1998, our practice is led by highly trained, caring professionals dedicated to your health.
                    </p>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

<div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-50">
<img alt="Dr. Feit and Dr. Jonas" className="w-full object-cover" src="https://cdcssl.ibsrv.net/ibimg/smb/640x438_80/webmgr/1m/a/s/fullsizerender11.jpg.webp?df3a69a0d2c148f96b3e97b210bce776"/>
<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 to-transparent p-8 pt-24 text-white">
<h3 className="text-2xl font-bold">Dr. Daniel B. Feit &amp; Dr. Diane L. Jonas</h3>
<p className="text-sky-200">Dentists &amp; Prosthodontists</p>
</div>
</div>

<div className="lg:pl-10 space-y-6">
<div className="bg-sky-50 rounded-2xl p-6 border border-sky-100">
<h4 className="text-xl font-bold text-slate-900 mb-2">Our Mission</h4>
<p className="text-slate-600">Our goal is to help you achieve the confidence and positive attitude that comes with a beautiful smile. We listen first, then create an individualized plan for you.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="p-4 rounded-2xl border border-slate-100 hover:border-brand/30 transition-colors">
<iconify-icon className="text-brand w-8 h-8 mb-3" icon="solar:diploma-verified-linear"></iconify-icon>
<h5 className="font-bold text-slate-900">28 Years</h5>
<p className="text-sm text-slate-500">Providing excellence since 1998 in Tenafly.</p>
</div>
<div className="p-4 rounded-2xl border border-slate-100 hover:border-brand/30 transition-colors">
<iconify-icon className="text-brand w-8 h-8 mb-3" icon="solar:home-smile-linear"></iconify-icon>
<h5 className="font-bold text-slate-900">Local Care</h5>
<p className="text-sm text-slate-500">Practiced in Boston &amp; NYC before settling in Bergen County.</p>
</div>
</div>
<blockquote className="">
<p className="text-lg italic text-slate-600">"Everyone is great! I actually enjoy going to the dentist."</p>
<footer className="text-sm font-bold text-brand mt-2">– P.S. (Actual Patient)</footer>
</blockquote>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4 text-slate-900">
                    Visit Our <span className="text-brand">Office</span>
</h2>
<p className="text-lg text-slate-500">Conveniently located in Tenafly, NJ.</p>
</div>

<div className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-slate-100 max-w-4xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2">

<div className="p-8 md:p-12 flex flex-col justify-center">
<div className="inline-flex items-center gap-2 mb-6">
<div className="p-2 rounded-lg bg-brand text-white">
<iconify-icon icon="solar:map-point-bold" width="24"></iconify-icon>
</div>
<span className="text-xl font-bold text-slate-900">Tenafly, NJ</span>
</div>
<div className="space-y-6">
<div className="flex gap-4">
<iconify-icon className="text-brand shrink-0 mt-1" icon="solar:streets-map-point-linear" width="20"></iconify-icon>
<div>
<p className="font-semibold text-slate-900">Address</p>
<p className="text-slate-500">19 Franklin Street<br/>Tenafly, NJ 07670</p>
<a className="text-sm font-bold text-brand mt-1 inline-flex items-center gap-1 hover:underline" href="https://maps.google.com/?q=19+Franklin+Street+Tenafly+NJ+07670" target="_blank">
                                        Get Directions <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
<div className="flex gap-4">
<iconify-icon className="text-brand shrink-0 mt-1" icon="solar:phone-calling-linear" width="20"></iconify-icon>
<div>
<p className="font-semibold text-slate-900">Phone</p>
<p className="text-slate-500"><a className="hover:text-brand transition-colors" href="tel:2015694535">(201) 569-4535</a></p>
</div>
</div>
<div className="flex gap-4">
<iconify-icon className="text-brand shrink-0 mt-1" icon="solar:clock-circle-linear" width="20"></iconify-icon>
<div>
<p className="font-semibold text-slate-900">Hours</p>
<p className="text-slate-500 text-sm">Call for appointment availability.</p>
</div>
</div>
</div>
</div>

<div className="bg-slate-200 h-64 md:h-auto relative min-h-[300px]">
<iframe allowfullscreen="" className="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3016.155822557766!2d-73.96851968458925!3d40.92159307930986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f1e2f7f8f8f7%3A0x123456789abcdef!2s19%20Franklin%20St%2C%20Tenafly%2C%20NJ%2007670!5e0!3m2!1sen!2sus!4v1628801900000!5m2!1sen!2sus" style={{border: '0', position: 'absolute', inset: '0'}} width="100%"></iframe>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="new-patients">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4 text-slate-900">
                    New Patient <span className="text-brand">Information</span>
</h2>
<p className="text-lg text-slate-500 font-medium">
                    Common questions about your first visit to Feit &amp; Jonas Dental.
                </p>
</div>
<div className="space-y-4">

<details className="group rounded-2xl shadow-sm border border-slate-100 open:ring-1 open:ring-brand/20 bg-white">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900">
<h2 className="text-lg font-semibold">Do you accept insurance?</h2>
<div className="rounded-full p-1.5 text-brand transition duration-300 group-open:-rotate-180 bg-sky-50">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</summary>
<p className="px-6 pb-6 text-slate-500 leading-relaxed font-medium">
                        We accept many insurance plans. Please see our office policies or contact us directly at (201) 569-4535 with your insurance details, and we will verify your coverage.
                    </p>
</details>

<details className="group rounded-2xl shadow-sm border border-slate-100 open:ring-1 open:ring-brand/20 bg-white">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900">
<h2 className="text-lg font-semibold">How do I schedule an appointment?</h2>
<div className="rounded-full p-1.5 text-brand transition duration-300 group-open:-rotate-180 bg-sky-50">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</summary>
<p className="px-6 pb-6 text-slate-500 leading-relaxed font-medium">
                        You can request an appointment using the form below or call our office during business hours. We strive to accommodate your schedule.
                    </p>
</details>

<details className="group rounded-2xl shadow-sm border border-slate-100 open:ring-1 open:ring-brand/20 bg-white">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900">
<h2 className="text-lg font-semibold">What if I have a dental emergency?</h2>
<div className="rounded-full p-1.5 text-brand transition duration-300 group-open:-rotate-180 bg-sky-50">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</summary>
<p className="px-6 pb-6 text-slate-500 leading-relaxed font-medium">
                        If you are experiencing pain or have a dental emergency, please call us immediately at (201) 569-4535.
                    </p>
</details>
</div>
</div>
</section>

<section className="py-24 rounded-t-[3rem] lg:rounded-t-[4rem] overflow-hidden relative bg-[#0c4a6e] text-white" id="book">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="relative">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">
                        Request Your Appointment
                    </h2>
<p className="font-medium mb-10 text-lg text-sky-200/80">
                        Fill out the form below and our staff will contact you to confirm your appointment time.
                    </p>
<div className="p-6 rounded-2xl bg-[#0f5680] border border-sky-700/50">
<div className="flex items-start gap-4">
<div className="p-3 bg-brand rounded-full text-white">
<iconify-icon icon="solar:phone-calling-bold" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-lg">Prefer to call?</h4>
<p className="text-sky-200 text-sm mb-2">Speak directly with our front desk.</p>
<a className="text-xl font-bold hover:text-white hover:underline" href="tel:2015694535">(201) 569-4535</a>
</div>
</div>
</div>
</div>

<div className="">
<form className="space-y-4 bg-white/5 p-6 md:p-8 rounded-3xl border border-white/10 backdrop-blur-sm">

<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="sr-only">Name</label>
<input className="w-full border rounded-xl px-5 py-4 placeholder-sky-200/50 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all bg-sky-900/30 border-sky-800 text-white" placeholder="Full Name" required="" type="text"/>
</div>
<div>
<label className="sr-only">Phone</label>
<input className="w-full border rounded-xl px-5 py-4 placeholder-sky-200/50 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all bg-sky-900/30 border-sky-800 text-white" placeholder="Phone Number" required="" type="tel"/>
</div>
</div>
<div>
<label className="sr-only">Email</label>
<input className="w-full border rounded-xl px-5 py-4 placeholder-sky-200/50 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all bg-sky-900/30 border-sky-800 text-white" placeholder="Email Address" required="" type="email"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="relative">
<select className="w-full border rounded-xl px-5 py-4 placeholder-sky-200/50 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand appearance-none cursor-pointer bg-sky-900/30 border-sky-800 text-white">
<option className="text-slate-900">Reason for Visit</option>
<option className="text-slate-900">General Checkup</option>
<option className="text-slate-900">Cleaning</option>
<option className="text-slate-900">Emergency</option>
<option className="text-slate-900">Cosmetic Consult</option>
<option className="text-slate-900">Other</option>
</select>
<iconify-icon className="absolute right-5 top-1/2 -translate-y-1/2 text-sky-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="relative">
<input className="w-full border rounded-xl px-5 py-4 placeholder-sky-200/50 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all [color-scheme:dark] bg-sky-900/30 border-sky-800 text-white" onfocus="(this.type='datetime-local')" placeholder="Preferred Day/Time" type="text"/>
<iconify-icon className="absolute right-5 top-1/2 -translate-y-1/2 text-sky-400 pointer-events-none" icon="solar:calendar-minimalistic-linear"></iconify-icon>
</div>
</div>
<div>
<textarea className="w-full border rounded-xl px-5 py-4 placeholder-sky-200/50 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all bg-sky-900/30 border-sky-800 text-white" placeholder="Message (Optional)" rows="3"></textarea>
</div>
<button className="w-full bg-brand font-bold text-lg py-4 rounded-xl transition-all shadow-lg shadow-sky-900/50 hover:shadow-sky-500/40 flex items-center justify-center gap-2 mt-4 hover:bg-[#146a9e] text-white" type="submit">
                            Request Appointment
                            <iconify-icon icon="solar:arrow-right-linear" width="24"></iconify-icon>
</button>
<p className="text-center text-xs text-sky-300/60 mt-2">By submitting, you agree to receive contact from our office.</p>
</form>
</div>
</div>
</div>
</section>

<footer className="pt-20 pb-10 border-t bg-slate-50 border-slate-200 text-sm" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="space-y-6">
<a className="flex items-center gap-2" href="#">
<img alt="Feit &amp; Jonas Logo" className="h-12 w-auto object-contain" src="https://cdcssl.ibsrv.net/ibimg/smb/577x137_80/webmgr/1m/a/s/Logo-feit.png.webp?91e65ac4f89f80ca4f3e57e4cb4bc3fe"/>
</a>
<p className="text-slate-500 font-medium leading-relaxed">
                        Feit &amp; Jonas Dental has been recognized as one of the top Tenafly Dentistry practices. We provide quality dental care for you and your family.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-brand hover:border-brand transition-all bg-white border-slate-200 text-slate-500 hover:text-white" href="https://www.facebook.com/feitandjonasdental/" target="_blank">
<iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon>
</a>
</div>
</div>

<div>
<h4 className="font-bold mb-6 text-slate-900 text-base">Contact Us</h4>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-slate-500 font-medium">
<iconify-icon className="text-brand shrink-0 text-lg" icon="solar:map-point-linear"></iconify-icon>
<span>19 Franklin Street<br/>Tenafly, NJ 07670</span>
</li>
<li className="flex items-center gap-3 text-slate-500 font-medium">
<iconify-icon className="text-brand shrink-0 text-lg" icon="solar:phone-calling-linear"></iconify-icon>
<a className="hover:text-brand" href="tel:2015694535">(201) 569-4535</a>
</li>
<li className="flex items-center gap-3 text-slate-500 font-medium">
<iconify-icon className="text-brand shrink-0 text-lg" icon="solar:letter-linear"></iconify-icon>
<a className="hover:text-brand" href="mailto:mail@Feitandjonasdental.com">mail@Feitandjonasdental.com</a>
</li>
</ul>
</div>

<div>
<h4 className="font-bold mb-6 text-slate-900 text-base">Quick Links</h4>
<ul className="space-y-3 text-slate-500 font-medium">
<li><a className="hover:text-brand transition-colors" href="#">Home</a></li>
<li><a className="hover:text-brand transition-colors" href="#services">Services</a></li>
<li><a className="hover:text-brand transition-colors" href="#team">Meet the Doctors</a></li>
</ul>
</div>

<div>
<h4 className="font-bold mb-6 text-slate-900 text-base">Office Hours</h4>
<p className="text-slate-500 font-medium mb-4">
                        We offer flexible scheduling. Please contact us to book your appointment.
                    </p>
<a className="text-brand font-bold hover:underline inline-flex items-center gap-1" href="#book">
                        Book Appointment <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-slate-200">
<p className="text-slate-500 font-medium text-xs">© 2026 MH Sub I, LLC dba Officite. All Rights Reserved.</p>
<div className="flex gap-8 text-xs font-medium text-slate-500">
<a className="hover:text-brand" href="#">Privacy Policy</a>
<a className="hover:text-brand" href="#">Disclaimer</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
