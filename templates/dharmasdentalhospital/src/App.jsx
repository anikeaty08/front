import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/60">
<div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<div className="bg-blue-50 text-blue-600 p-2.5 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
<i className="w-5 h-5" data-lucide="tooth"></i>
</div>
<div className="flex flex-col">
<span className="font-medium text-slate-900 tracking-tight leading-none text-xl">Dharma's</span>
<span className="text-sm text-slate-500 font-normal tracking-wide uppercase mt-1">Dental Hospital</span>
</div>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-base font-normal text-slate-600 hover:text-blue-600 transition-colors" href="#home">Home</a>
<a className="text-base font-normal text-slate-600 hover:text-blue-600 transition-colors" href="#about">About Us</a>
<a className="text-base font-normal text-slate-600 hover:text-blue-600 transition-colors" href="#services">Services</a>
<a className="text-base font-normal text-slate-600 hover:text-blue-600 transition-colors" href="#contact">Contact</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-full text-base font-medium hover:bg-slate-800 transition-all hover:shadow-lg active:scale-95" href="tel:+918919457887">
<i className="w-4 h-4" data-lucide="phone"></i>
<span>+91 89194 57887</span>
</a>
<label className="md:hidden cursor-pointer p-2 text-slate-600 hover:text-blue-600" htmlFor="mobile-menu-toggle">
<i className="w-6 h-6" data-lucide="menu"></i>
</label>
</div>
</div>

<input className="hidden" id="mobile-menu-toggle" type="checkbox"/>
<div className="hidden md:hidden bg-white border-b border-slate-100 absolute w-full left-0 top-full px-6 py-4 shadow-xl" id="mobile-menu">
<div className="flex flex-col gap-4">
<a className="text-base font-medium text-slate-900 py-2 border-b border-slate-50" href="#home">Home</a>
<a className="text-base font-medium text-slate-900 py-2 border-b border-slate-50" href="#about">About</a>
<a className="text-base font-medium text-slate-900 py-2 border-b border-slate-50" href="#services">Services</a>
<a className="text-base font-medium text-slate-900 py-2 border-b border-slate-50" href="#contact">Contact</a>
<a className="text-center w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-lg font-medium text-base mt-2" href="tel:+918919457887">
<i className="w-4 h-4" data-lucide="phone"></i> Call Now
                </a>
</div>
</div>
</nav>

<section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-b from-blue-50/50 to-white overflow-hidden" id="home">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
<div className="space-y-8 max-w-2xl">
<div className="inline-flex items-center gap-2 bg-blue-100/50 border border-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-medium uppercase tracking-wider">
<span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span> Open 24 Hours
                </div>
<h1 className="text-5xl md:text-7xl font-medium text-slate-900 tracking-tight leading-[1.05]">
                    Dharma's <br/>
<span className="text-blue-600">Dental Hospital</span>
</h1>
<p className="text-2xl text-slate-500 font-normal leading-relaxed">
                    Tirupathi's premier dental care facility, where excellence meets compassionate care. Top rated with 540+ positive reviews.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full text-base font-medium hover:bg-blue-700 transition-all hover:shadow-blue-200 hover:shadow-xl active:scale-95" href="tel:+918919457887">
<i className="w-5 h-5" data-lucide="phone"></i>
                        Call Now – +91 89194 57887
                    </a>
<a className="flex items-center justify-center gap-2 bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-full text-base font-medium hover:bg-slate-50 hover:border-slate-300 transition-all active:scale-95" href="#contact">
                        Get Directions
                        <i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
</div>
</div>
<div className="relative">
<div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full blur-3xl opacity-40"></div>
<div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-blue-900/10 bg-white aspect-[4/3] flex items-center justify-center border border-slate-100 group">
<img alt="Modern Dental Clinic" className="object-cover w-full h-full opacity-90 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
</div>
</div>
</section>

<section className="mt-[-60px] relative z-10 px-6">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-5 gap-4">
<a className="bg-white p-6 rounded-2xl shadow-lg shadow-slate-200/40 border border-slate-100 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group flex flex-col items-center text-center gap-3" href="#services">
<div className="w-14 h-14 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="shield-check"></i>
</div>
<span className="text-base font-medium text-slate-700">General</span>
</a>
<a className="bg-white p-6 rounded-2xl shadow-lg shadow-slate-200/40 border border-slate-100 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group flex flex-col items-center text-center gap-3" href="#services">
<div className="w-14 h-14 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center group-hover:bg-rose-500 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="sparkles"></i>
</div>
<span className="text-base font-medium text-slate-700">Cosmetic</span>
</a>
<a className="bg-white p-6 rounded-2xl shadow-lg shadow-slate-200/40 border border-slate-100 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group flex flex-col items-center text-center gap-3" href="#services">
<div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="smile"></i>
</div>
<span className="text-base font-medium text-slate-700">Orthodontics</span>
</a>
<a className="bg-white p-6 rounded-2xl shadow-lg shadow-slate-200/40 border border-slate-100 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group flex flex-col items-center text-center gap-3" href="#services">
<div className="w-14 h-14 rounded-full bg-purple-50 text-purple-500 flex items-center justify-center group-hover:bg-purple-500 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="stethoscope"></i>
</div>
<span className="text-base font-medium text-slate-700">Oral Surgery</span>
</a>
<a className="bg-slate-900 p-6 rounded-2xl shadow-lg shadow-slate-900/20 border border-slate-800 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group flex flex-col items-center text-center gap-3 col-span-2 md:col-span-1" href="#contact">
<div className="w-14 h-14 rounded-full bg-white/10 text-white flex items-center justify-center group-hover:bg-white group-hover:text-slate-900 transition-colors">
<i className="w-6 h-6" data-lucide="calendar-plus"></i>
</div>
<span className="text-base font-medium text-white">Book Visit</span>
</a>
</div>
</div>
</section>

<section className="bg-slate-50 pt-32 pb-24" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1 relative">
<div className="-top-6 -left-6 bg-blue-100/80 w-32 h-32 rounded-full absolute blur-3xl"></div>
<img alt="Doctor at Dharma's Dental Hospital" className="w-full h-auto object-cover border-white border rounded-[2rem] relative shadow-xl" src="https://lh3.googleusercontent.com/gps-cs-s/AHVAweq24NocAQSeRMTqkis-TkmpfUyp5OzImr20sJ5DeJZYDl6Oo3Qw25SfSbXth9HS2YFqT0rSx_jINQ_u66ZRji3hJrcQlD7aVOFvQFqP7q-XtgszEslXRau9JaO6BZSMWfYudS1kk_df7iZk=s1360-w1360-h1020-rw?w=800&amp;q=80"/>
<div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl max-w-xs border border-slate-100 hidden md:block">
<div className="flex items-center gap-3 mb-2">
<div className="flex text-yellow-400">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<span className="font-medium text-slate-900 text-lg tracking-tight">4.9</span>
</div>
<p className="text-sm text-slate-500 font-normal">Based on 541+ patient reviews in Tirupati.</p>
</div>
</div>
<div className="order-1 md:order-2 space-y-8">
<div className="flex items-center gap-3">
<span className="h-px w-8 bg-blue-600"></span>
<span className="text-sm font-medium text-blue-600 uppercase tracking-wider">About Us</span>
</div>
<h2 className="text-4xl font-medium text-slate-900 tracking-tight leading-tight md:text-5xl">Meet Dr   K S Dharma Reddy</h2>
<div className="leading-relaxed text-lg font-normal text-slate-600 space-y-6">
<p className="">
                            Tirupathi's Best Dental Hospital with In-house CAD-CAM. Welcome to Dharmas Dental, Tirupathi's premier dental care facility, where excellence meets compassionate care.
                        </p>
<p className="">
                            Our advanced dental services, equipped with cutting-edge technology and a team of experienced professionals, offer a comprehensive range of treatments, from general and cosmetic dentistry to orthodontics and oral surgery.
                        </p>
<p className="text-slate-800">
                            Our personalized approach ensures tailored care to meet your unique needs, and our convenient location in the heart of Tirupathi makes access easy. Visit us today to experience the difference, and let us help you achieve a healthier, more beautiful smile.
                        </p>
</div>
<div className="flex flex-wrap gap-2 text-sm font-medium text-blue-600 pt-2 gap-x-2 gap-y-2">
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white border-y border-slate-100" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
<span className="text-sm font-medium text-blue-600 uppercase tracking-wider">Comprehensive Care</span>
<h2 className="text-4xl md:text-5xl font-medium text-slate-900 tracking-tight">Advanced Dental Services</h2>
<p className="text-xl text-slate-500 font-normal">Equipped with cutting-edge technology to offer a comprehensive range of treatments under one roof.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-slate-50 rounded-[2rem] p-10 border border-slate-100 hover:border-blue-200 transition-colors">
<div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-8">
<i className="w-7 h-7" data-lucide="shield-check"></i>
</div>
<h3 className="text-2xl font-medium text-slate-900 mb-4 tracking-tight">General Dentistry</h3>
<p className="text-lg text-slate-500 mb-8 font-normal leading-relaxed">Diagnosis, prevention, and treatment of oral health conditions including routine checkups and scaling.</p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-base text-slate-700 font-normal">
<i className="text-blue-500 w-5 h-5" data-lucide="check-circle-2"></i> CAD-CAM Technology
                        </li>
<li className="flex items-center gap-3 text-base text-slate-700 font-normal">
<i className="text-blue-500 w-5 h-5" data-lucide="check-circle-2"></i> Checkup &amp; Clean
                        </li>
<li className="flex items-center gap-3 text-base text-slate-700 font-normal">
<i className="text-blue-500 w-5 h-5" data-lucide="check-circle-2"></i> Toothache Relief
                        </li>
</ul>
</div>

<div className="bg-slate-50 rounded-[2rem] p-10 border border-slate-100 hover:border-rose-200 transition-colors">
<div className="w-14 h-14 bg-rose-100 text-rose-500 rounded-2xl flex items-center justify-center mb-8">
<i className="w-7 h-7" data-lucide="wand-2"></i>
</div>
<h3 className="text-2xl font-medium text-slate-900 mb-4 tracking-tight">Cosmetic Dentistry</h3>
<p className="text-lg text-slate-500 mb-8 font-normal leading-relaxed">Enhancing your smile through aesthetic procedures to achieve a healthier, more beautiful appearance.</p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-base text-slate-700 font-normal">
<i className="text-rose-500 w-5 h-5" data-lucide="check-circle-2"></i> Smile Makeovers
                        </li>
<li className="flex items-center gap-3 text-base text-slate-700 font-normal">
<i className="text-rose-500 w-5 h-5" data-lucide="check-circle-2"></i> Teeth Whitening
                        </li>
<li className="flex items-center gap-3 text-base text-slate-700 font-normal">
<i className="text-rose-500 w-5 h-5" data-lucide="check-circle-2"></i> Porcelain Veneers
                        </li>
</ul>
</div>

<div className="bg-slate-50 rounded-[2rem] p-10 border border-slate-100 hover:border-emerald-200 transition-colors">
<div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-8">
<i className="w-7 h-7" data-lucide="activity"></i>
</div>
<h3 className="text-2xl font-medium text-slate-900 mb-4 tracking-tight">Orthodontics &amp; Surgery</h3>
<p className="text-lg text-slate-500 mb-8 font-normal leading-relaxed">Advanced personalized care for complex dental needs by experienced professionals.</p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-base text-slate-700 font-normal">
<i className="text-emerald-500 w-5 h-5" data-lucide="check-circle-2"></i> Orthodontic Treatments
                        </li>
<li className="flex items-center gap-3 text-base text-slate-700 font-normal">
<i className="text-emerald-500 w-5 h-5" data-lucide="check-circle-2"></i> Oral Surgery
                        </li>
<li className="flex items-center gap-3 text-base text-slate-700 font-normal">
<i className="text-emerald-500 w-5 h-5" data-lucide="check-circle-2"></i> Dental Implants
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20 space-y-6">
<span className="text-sm font-medium text-blue-600 uppercase tracking-wider">Get in touch</span>
<h2 className="text-4xl md:text-5xl font-medium text-slate-900 tracking-tight">Visit Our Hospital</h2>
<p className="text-xl text-slate-500 font-normal max-w-2xl mx-auto">Conveniently located in the heart of Tirupati. We look forward to welcoming you.</p>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="bg-slate-50 p-10 rounded-[2rem] border border-slate-100 space-y-10">
<div className="">
<div className="flex items-center gap-4 mb-4 text-slate-900">
<div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100">
<i className="w-6 h-6 text-blue-600" data-lucide="map-pin"></i>
</div>
<h3 className="font-medium text-xl tracking-tight">Address</h3>
</div>
<address className="not-italic text-slate-600 text-lg leading-relaxed pl-16 font-normal">
                            Door no 19, besides sapthagirigramina bank,<br/>
                            2-1/2, opp. to babu jagajivanram park,<br/>
                            Bairagi patteda, Tirupati,<br/>
                            Andhra Pradesh 517501, India
                        </address>
<p className="pl-16 mt-3 text-base text-blue-600 font-medium">Areas served: Tirupati</p>
</div>
<div>
<div className="flex items-center gap-4 mb-4 text-slate-900">
<div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100">
<i className="w-6 h-6 text-blue-600" data-lucide="phone"></i>
</div>
<h3 className="font-medium text-xl tracking-tight">Contact</h3>
</div>
<div className="flex flex-col gap-2 pl-16">
<a className="text-slate-600 hover:text-blue-600 text-lg font-normal" href="tel:+918919457887">+91 89194 57887</a>
</div>
</div>
<div className="pt-6 border-t border-slate-200/60">
<a className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white py-4 rounded-xl text-lg font-medium hover:bg-slate-800 transition-colors" href="tel:+918919457887">
                            Call to Book Appointment
                        </a>
</div>
</div>

<div className="space-y-8">
<div className="bg-blue-600 p-10 rounded-[2rem] text-white shadow-xl shadow-blue-900/10 relative overflow-hidden">
<div className="absolute -right-10 -top-10 opacity-10">
<i className="w-64 h-64" data-lucide="clock"></i>
</div>
<div className="relative z-10">
<div className="flex items-center gap-4 mb-6">
<div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
<i className="w-6 h-6" data-lucide="clock"></i>
</div>
<h3 className="font-medium text-2xl tracking-tight">Operating Hours</h3>
</div>
<div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20">
<div className="flex items-center justify-between">
<span className="text-xl font-medium">Monday - Sunday</span>
<span className="text-xl font-medium bg-white text-blue-600 px-4 py-1.5 rounded-full">Open 24 hours</span>
</div>
<p className="mt-4 text-blue-100 text-lg font-normal">
                                    We provide round-the-clock dental care and emergency services to ensure you get the help you need, exactly when you need it.
                                </p>
</div>
</div>
</div>
<div className="bg-slate-100 rounded-[2rem] w-full h-48 md:h-auto md:flex-1 border border-slate-200 overflow-hidden relative flex items-center justify-center">
<div className="text-slate-400 flex flex-col items-center gap-2">
<i className="w-8 h-8" data-lucide="map"></i>
<span className="text-base font-medium">Interactive Map View</span>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-slate-50 border-t border-slate-200 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1 space-y-6">
<div className="flex items-center gap-3 text-blue-600">
<i className="w-6 h-6" data-lucide="tooth"></i>
<span className="font-medium text-slate-900 tracking-tight text-xl">Dharma's Dental</span>
</div>
<p className="text-base text-slate-500 leading-relaxed font-normal">
                        Tirupathi's premier dental care facility, where excellence meets compassionate care.
                    </p>
</div>
<div className="space-y-6">
<h4 className="font-medium text-slate-900 text-base tracking-tight">Navigation</h4>
<ul className="space-y-3 text-base font-normal text-slate-500">
<li><a className="hover:text-blue-600 transition-colors" href="#home">Home</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#about">About Us</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#services">Services</a></li>
</ul>
</div>
<div className="space-y-6 md:col-span-2">
<h4 className="font-medium text-slate-900 text-base tracking-tight">Contact Information</h4>
<ul className="space-y-3 text-base font-normal text-slate-500">
<li className="flex items-start gap-3">
<i className="w-5 h-5 shrink-0 mt-0.5 text-slate-400" data-lucide="map-pin"></i>
<span>Door no 19, besides sapthagirigramina bank, Bairagi patteda, Tirupati, AP 517501</span>
</li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 shrink-0 text-slate-400" data-lucide="phone"></i>
<a className="hover:text-blue-600 transition-colors" href="tel:+918919457887">+91 89194 57887</a>
</li>
</ul>
</div>
</div>
<div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-sm text-slate-400 font-normal">© 2024 Dharma's Dental Hospital. All rights reserved.</p>
<div className="flex gap-6 text-slate-400">
<a className="hover:text-blue-600 transition-colors" href="#"><i className="w-5 h-5" data-lucide="facebook"></i></a>
<a className="hover:text-blue-600 transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="hover:text-blue-600 transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
