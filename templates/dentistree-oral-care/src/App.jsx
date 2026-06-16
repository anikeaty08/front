import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Simple scroll reveal
        document.addEventListener('DOMContentLoaded', () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-enter-active');
                        entry.target.classList.remove('fade-enter');
                    }
                });
            });

            document.querySelectorAll('section > div').forEach(el => {
                el.classList.add('fade-enter');
                observer.observe(el);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">

<div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="solar:leaf-bold" width="18"></iconify-icon>
</div>
<span className="font-bold text-xl tracking-tight text-emerald-950">Dentistree</span>
</div>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
<a className="hover:text-emerald-700 transition-colors" href="#about">About</a>
<a className="hover:text-emerald-700 transition-colors" href="#services">Services</a>
<a className="hover:text-emerald-700 transition-colors" href="#doctors">Specialists</a>
<a className="hover:text-emerald-700 transition-colors" href="#locations">Locations</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-700 hover:text-emerald-800" href="tel:+919940040033">
<iconify-icon icon="solar:phone-calling-linear" width="16"></iconify-icon>
                    +91 99 400 400 33
                </a>
<a className="bg-emerald-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/20 active:scale-95" href="#book">
                    Book Appointment
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
<div className="relative z-10 fade-enter-active">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wide mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    Best Dental Clinic in Chennai
                </div>
<h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-emerald-950 mb-6 leading-[1.1]">
                    Orchestrating <br/>
<span className="text-emerald-600">Perfect Smiles.</span>
</h1>
<p className="text-lg text-zinc-500 mb-10 max-w-lg leading-relaxed font-light">
                    Over 25 years of excellence in advanced dentistry. From implants to invisalign, we provide comprehensive oral care with a gentle touch across 9 locations.
                </p>
<div className="flex flex-wrap gap-4">
<a className="bg-emerald-950 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-black transition-all flex items-center gap-2 group" href="#book">
                        Start Your Journey
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<div className="flex items-center gap-4 px-6 py-4 rounded-full border border-zinc-200 bg-white/50 backdrop-blur-sm">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-zinc-200 border-2 border-white flex items-center justify-center text-[10px] font-bold">4.8</div>
<div className="w-8 h-8 rounded-full bg-yellow-400 border-2 border-white flex items-center justify-center text-white">
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
</div>
<div className="text-xs font-medium text-zinc-600">
<span className="block text-emerald-950 font-bold">185+ Reviews</span>
                            On Google
                        </div>
</div>
</div>
</div>

<div className="relative fade-enter-active">
<div className="absolute inset-0 bg-emerald-100 rounded-[3rem] rotate-3 scale-95 opacity-50 -z-10"></div>
<div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-emerald-900/10 border border-white/20">
<img alt="Advanced Dentistry" className="w-full h-[600px] object-cover object-center" src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur p-6 rounded-2xl border border-zinc-100 shadow-xl flex justify-between items-center">
<div>
<div className="text-3xl font-bold text-emerald-950">25+</div>
<div className="text-xs text-zinc-500 uppercase tracking-wide font-medium">Years Experience</div>
</div>
<div className="h-8 w-px bg-zinc-200"></div>
<div>
<div className="text-3xl font-bold text-emerald-950">3L+</div>
<div className="text-xs text-zinc-500 uppercase tracking-wide font-medium">Happy Patients</div>
</div>
<div className="h-8 w-px bg-zinc-200"></div>
<div>
<div className="text-3xl font-bold text-emerald-950">10k+</div>
<div className="text-xs text-zinc-500 uppercase tracking-wide font-medium">Implants Done</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white" id="services">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="max-w-xl">
<h2 className="text-4xl font-bold text-emerald-950 mb-4 tracking-tight">Comprehensive Care</h2>
<p className="text-zinc-500 font-light">Using state-of-the-art technology to provide painless, precision treatments tailored to your unique smile.</p>
</div>
<a className="text-sm font-semibold text-emerald-600 hover:text-emerald-700 flex items-center gap-1" href="#">
                    View All Services <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group p-8 rounded-3xl bg-zinc-50 border border-zinc-100 hover:bg-emerald-50 hover:border-emerald-100 transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:screencast-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-zinc-900 mb-2">Dental Implants</h3>
<p className="text-sm text-zinc-500 mb-4 leading-relaxed">Restore your smile with permanent, natural-looking replacements for missing teeth.</p>
</div>

<div className="group p-8 rounded-3xl bg-zinc-50 border border-zinc-100 hover:bg-emerald-50 hover:border-emerald-100 transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:smile-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-zinc-900 mb-2">Invisalign</h3>
<p className="text-sm text-zinc-500 mb-4 leading-relaxed">Clear, comfortable aligners to straighten your teeth without traditional metal braces.</p>
</div>

<div className="group p-8 rounded-3xl bg-zinc-50 border border-zinc-100 hover:bg-emerald-50 hover:border-emerald-100 transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:bolt-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-zinc-900 mb-2">Root Canal</h3>
<p className="text-sm text-zinc-500 mb-4 leading-relaxed">Advanced microscopic therapy to save infected teeth with minimal discomfort.</p>
</div>

<div className="group p-8 rounded-3xl bg-zinc-50 border border-zinc-100 hover:bg-emerald-50 hover:border-emerald-100 transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:stars-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-zinc-900 mb-2">Cosmetic Dentistry</h3>
<p className="text-sm text-zinc-500 mb-4 leading-relaxed">Veneers, whitening, and smile makeovers designed to boost your confidence.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-emerald-950 text-white relative overflow-hidden" id="doctors">

<div className="absolute top-0 right-0 p-20 opacity-5">
<iconify-icon icon="solar:medical-kit-linear" width="400"></iconify-icon>
</div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="mb-16">
<span className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2 block">Our Team</span>
<h2 className="text-4xl lg:text-5xl font-bold tracking-tight">Meet The Specialists</h2>
<p className="text-emerald-200/60 mt-4 max-w-xl font-light">A collective of highly qualified MDS professionals dedicated to specific fields of dentistry.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group">
<div className="aspect-[3/4] bg-emerald-900 rounded-2xl overflow-hidden mb-6 relative">
<img alt="Dr. Deepalakshmi" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 opacity-80 group-hover:opacity-100 group-hover:scale-105" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur border border-white/10 px-3 py-1 rounded-full text-xs font-medium text-white">
                            20+ Years Exp.
                        </div>
</div>
<h3 className="text-xl font-semibold mb-1">Dr. Deepalakshmi MDS</h3>
<p className="text-emerald-400 text-sm mb-3">Implantologist &amp; Periodontist</p>
<div className="h-px w-full bg-white/10 mb-4"></div>
<p className="text-xs text-emerald-200/60 leading-relaxed">Specializing in complex gum therapies and full mouth rehabilitation with implants.</p>
</div>

<div className="group">
<div className="aspect-[3/4] bg-emerald-900 rounded-2xl overflow-hidden mb-6 relative">
<img alt="Dr. Roshan Shaji" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 opacity-80 group-hover:opacity-100 group-hover:scale-105" src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-xl font-semibold mb-1">Dr. Roshan Shaji MDS</h3>
<p className="text-emerald-400 text-sm mb-3">Orthodontist</p>
<div className="h-px w-full bg-white/10 mb-4"></div>
<p className="text-xs text-emerald-200/60 leading-relaxed">Certified Invisalign provider focusing on smile correction and teeth alignment.</p>
</div>

<div className="group">
<div className="aspect-[3/4] bg-emerald-900 rounded-2xl overflow-hidden mb-6 relative">
<img alt="Dr. Sivasubramaniam" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 opacity-80 group-hover:opacity-100 group-hover:scale-105" src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-xl font-semibold mb-1">Dr. Sivasubramaniam MDS</h3>
<p className="text-emerald-400 text-sm mb-3">Endodontist</p>
<div className="h-px w-full bg-white/10 mb-4"></div>
<p className="text-xs text-emerald-200/60 leading-relaxed">Expert in painless root canal treatments and microscopic dentistry.</p>
</div>

<div className="group">
<div className="aspect-[3/4] bg-emerald-900 rounded-2xl overflow-hidden mb-6 relative">
<img alt="Dr. Vivek" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 opacity-80 group-hover:opacity-100 group-hover:scale-105" src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-xl font-semibold mb-1">Dr. Vivek MDS</h3>
<p className="text-emerald-400 text-sm mb-3">Oral Surgeon</p>
<div className="h-px w-full bg-white/10 mb-4"></div>
<p className="text-xs text-emerald-200/60 leading-relaxed">Specialist in wisdom tooth extractions and maxillofacial surgical procedures.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-zinc-50" id="locations">
<div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">

<div className="lg:col-span-7">
<h2 className="text-3xl font-bold text-emerald-950 mb-8">Our Presence</h2>
<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
<div className="bg-white p-4 rounded-xl border border-zinc-100 flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
<span className="text-sm font-medium text-zinc-700">Adyar</span>
</div>
<div className="bg-white p-4 rounded-xl border border-zinc-100 flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
<span className="text-sm font-medium text-zinc-700">Anna Nagar</span>
</div>
<div className="bg-white p-4 rounded-xl border border-zinc-100 flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
<span className="text-sm font-medium text-zinc-700">Ashok Nagar</span>
</div>
<div className="bg-white p-4 rounded-xl border border-zinc-100 flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
<span className="text-sm font-medium text-zinc-700">Teynampet</span>
</div>
<div className="bg-white p-4 rounded-xl border border-zinc-100 flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
<span className="text-sm font-medium text-zinc-700">Velachery</span>
</div>
<div className="bg-white p-4 rounded-xl border border-zinc-100 flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
<span className="text-sm font-medium text-zinc-700">Tambaram</span>
</div>
<div className="bg-white p-4 rounded-xl border border-zinc-100 flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
<span className="text-sm font-medium text-zinc-700">Kanchipuram</span>
</div>
<div className="bg-white p-4 rounded-xl border border-zinc-100 flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
<span className="text-sm font-medium text-zinc-700">Semmencheri</span>
</div>
<div className="bg-white p-4 rounded-xl border border-zinc-100 flex items-center gap-3 border-l-4 border-l-emerald-500">
<div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></div>
<span className="text-sm font-medium text-zinc-700">Dubai, UAE</span>
</div>
</div>
</div>

<div className="lg:col-span-5" id="book">
<div className="bg-white p-8 rounded-3xl shadow-xl shadow-zinc-200/50 border border-zinc-100">
<h3 className="text-xl font-bold text-emerald-950 mb-6">Book an Appointment</h3>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="col-span-2">
<label className="block text-xs font-medium text-zinc-500 mb-1 uppercase tracking-wide">Full Name</label>
<input className="w-full bg-zinc-50 border-none rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 outline-none transition-all" placeholder="John Doe" type="text"/>
</div>
<div className="col-span-1">
<label className="block text-xs font-medium text-zinc-500 mb-1 uppercase tracking-wide">Phone</label>
<input className="w-full bg-zinc-50 border-none rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 outline-none transition-all" placeholder="+91" type="tel"/>
</div>
<div className="col-span-1">
<label className="block text-xs font-medium text-zinc-500 mb-1 uppercase tracking-wide">Location</label>
<select className="w-full bg-zinc-50 border-none rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 outline-none transition-all text-zinc-600">
<option>Select Branch</option>
<option>Adyar</option>
<option>Anna Nagar</option>
<option>Velachery</option>
<option>Teynampet</option>
</select>
</div>
<div className="col-span-2">
<label className="block text-xs font-medium text-zinc-500 mb-1 uppercase tracking-wide">Reason</label>
<select className="w-full bg-zinc-50 border-none rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 outline-none transition-all text-zinc-600">
<option>General Consultation</option>
<option>Tooth Pain / RCT</option>
<option>Implants</option>
<option>Braces / Invisalign</option>
<option>Cleaning</option>
</select>
</div>
</div>
<button className="w-full bg-emerald-600 text-white font-medium py-3.5 rounded-lg hover:bg-emerald-700 transition-colors mt-2" type="button">
                            Confirm Booking
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-zinc-100 pt-16 pb-8 px-6">
<div className="max-w-7xl mx-auto">
<div className="grid md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 bg-emerald-600 rounded flex items-center justify-center text-white">
<iconify-icon icon="solar:leaf-bold" width="14"></iconify-icon>
</div>
<span className="font-bold text-lg text-emerald-950">Dentistree</span>
</div>
<p className="text-zinc-500 text-sm max-w-sm mb-6 leading-relaxed">
                        To provide exceptional dental care with a patient-centric approach, utilizing advanced technology and a skilled team to deliver personalized solutions.
                    </p>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 hover:bg-emerald-50 hover:text-emerald-600 transition-colors" href="#"><iconify-icon icon="solar:facebook-linear"></iconify-icon></a>
<a className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 hover:bg-emerald-50 hover:text-emerald-600 transition-colors" href="#"><iconify-icon icon="solar:instagram-linear"></iconify-icon></a>
<a className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 hover:bg-emerald-50 hover:text-emerald-600 transition-colors" href="#"><iconify-icon icon="solar:youtube-linear"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="font-bold text-zinc-900 mb-4">Quick Links</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-emerald-600 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Our Doctors</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Franchise</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Feedback</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-zinc-900 mb-4">Contact</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 shrink-0" icon="solar:map-point-linear"></iconify-icon>
<span>No.3, Taramani Link Road,<br/>Velachery, Chennai - 600042</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="shrink-0" icon="solar:phone-linear"></iconify-icon>
<span>044 4321 3113</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="shrink-0" icon="solar:letter-linear"></iconify-icon>
<span>crm@dentistree.in</span>
</li>
</ul>
</div>
</div>
<div className="border-t border-zinc-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-400">
<p>© 2024 Dentistree. All rights reserved.</p>
<p>Designed with care.</p>
</div>
</div>
</footer>


    </>
  );
}
