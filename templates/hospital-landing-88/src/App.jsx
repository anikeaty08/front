import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
medical: {
50: '#f0f9ff',
100: '#e0f2fe',
500: '#0ea5e9', // Sky blue
600: '#0284c7',
900: '#0c4a6e',
}
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="bg-zinc-900 text-white p-1 rounded-lg">
<iconify-icon icon="lucide:activity" width="20"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight text-zinc-900 group-hover:opacity-80 transition-opacity">SIDS<span className="font-normal text-zinc-400">HOSPITAL</span></span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="text-zinc-900 hover:text-medical-600 transition-colors" href="#home">Home</a>
<a className="text-zinc-500 hover:text-zinc-900 transition-colors" href="#about">About</a>
<a className="text-zinc-500 hover:text-zinc-900 transition-colors" href="#departments">Departments</a>
<a className="text-zinc-500 hover:text-zinc-900 transition-colors" href="#doctors">Doctors</a>
<a className="text-zinc-500 hover:text-zinc-900 transition-colors" href="#contact">Contact</a>
</div>

<div className="hidden md:flex items-center gap-4">
<div className="flex items-center gap-2 text-xs font-medium text-zinc-500">
<iconify-icon icon="lucide:phone" width="14"></iconify-icon>
<span>+1 (800) 123-4567</span>
</div>
<a className="bg-zinc-900 text-white text-xs font-medium px-4 py-2.5 rounded-full hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-200" href="#appointment">
                    Book Appointment
                </a>
</div>

<button className="md:hidden text-zinc-900">
<iconify-icon icon="lucide:menu" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden" id="home">
<div className="absolute inset-0 -z-10 bg-grid-pattern [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
<div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-medical-50/50 to-transparent blur-3xl opacity-60"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 mb-6">
<span className="w-2 h-2 rounded-full bg-medical-500 animate-pulse"></span>
<span className="text-xs font-medium text-zinc-600 uppercase tracking-wide">24/7 Emergency Service</span>
</div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tighter text-zinc-900 mb-6 leading-[1.1]">
                    Modern care for <br/>
<span className="text-zinc-400">better living.</span>
</h1>
<p className="text-lg text-zinc-500 leading-relaxed mb-8 max-w-md">
                    Advanced medical technology meets compassionate care. We redefine the hospital experience with precision medicine and patient-centric design.
                </p>
<div className="flex flex-wrap gap-4">
<a className="bg-zinc-900 text-white px-6 py-3 rounded-xl font-medium text-sm hover:translate-y-px transition-transform flex items-center gap-2" href="#appointment">
                        Get Started
                        <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
<a className="bg-white border border-zinc-200 text-zinc-700 px-6 py-3 rounded-xl font-medium text-sm hover:bg-zinc-50 transition-colors" href="#about">
                        Learn More
                    </a>
</div>

<div className="mt-12 pt-8 border-t border-zinc-100 flex items-center gap-8">
<div>
<p className="text-2xl font-semibold text-zinc-900 tracking-tight">15k+</p>
<p className="text-xs text-zinc-500">Patients Healed</p>
</div>
<div>
<p className="text-2xl font-semibold text-zinc-900 tracking-tight">98%</p>
<p className="text-xs text-zinc-500">Satisfaction Rate</p>
</div>
<div>
<p className="text-2xl font-semibold text-zinc-900 tracking-tight">120+</p>
<p className="text-xs text-zinc-500">Expert Doctors</p>
</div>
</div>
</div>

<div className="relative">
<div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-zinc-200 aspect-[4/3] group">

<img alt="Hospital Interior" className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105 opacity-90" src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

<div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-lg">
<div className="flex items-start gap-4">
<div className="bg-medical-50 p-3 rounded-xl text-medical-600">
<iconify-icon icon="lucide:heart-pulse" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-zinc-900 font-medium">Cardiology Center</h3>
<p className="text-xs text-zinc-500 mt-1">Leading heart care specialists available for immediate consultation.</p>
</div>
</div>
</div>
</div>

<div className="absolute -top-10 -right-10 w-24 h-24 bg-medical-50 rounded-full blur-2xl -z-10"></div>
<div className="absolute -bottom-10 -left-10 w-32 h-32 bg-zinc-100 rounded-full blur-2xl -z-10"></div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 border-t border-zinc-200">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-2xl border border-zinc-200/60 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-10 h-10 bg-zinc-50 rounded-lg flex items-center justify-center text-zinc-900 mb-6 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:calendar-clock" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2">Easy Scheduling</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Book appointments online instantly with our streamlined digital portal tailored for your convenience.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-zinc-200/60 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-10 h-10 bg-zinc-50 rounded-lg flex items-center justify-center text-zinc-900 mb-6 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:shield-check" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2">Best Quality Service</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Accredited facilities and top-tier medical professionals ensuring the highest standard of care.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-zinc-200/60 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-10 h-10 bg-zinc-50 rounded-lg flex items-center justify-center text-zinc-900 mb-6 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:stethoscope" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2">Emergency Care</h3>
<p className="text-sm text-zinc-500 leading-relaxed">24/7 emergency response team ready to handle critical situations with speed and precision.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative">
<div className="grid grid-cols-2 gap-4">
<img alt="Doctor talking" className="rounded-2xl object-cover h-64 w-full border border-zinc-100 shadow-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<img alt="Medical Equipment" className="rounded-2xl object-cover h-64 w-full border border-zinc-100 shadow-sm mt-8" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-900 text-white p-6 rounded-full w-32 h-32 flex flex-col items-center justify-center text-center shadow-xl border-4 border-white">
<span className="text-2xl font-bold tracking-tight">25+</span>
<span className="text-[10px] uppercase tracking-wider text-zinc-400 mt-1">Years Exp</span>
</div>
</div>
<div className="order-1 lg:order-2">
<h2 className="text-sm font-semibold text-medical-600 tracking-wide uppercase mb-3">About SIDS Hospital</h2>
<h3 className="text-3xl lg:text-4xl font-semibold text-zinc-900 tracking-tight mb-6">Pioneering the future of <br/>personal healthcare.</h3>
<p className="text-zinc-500 mb-6 leading-relaxed">
                        We are a leading multi-specialty hospital dedicated to providing world-class healthcare services. Our mission is to blend state-of-the-art medical technology with human compassion.
                    </p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3">
<iconify-icon className="text-medical-600 mt-0.5 flex-shrink-0" icon="lucide:check-circle" width="18"></iconify-icon>
<span className="text-sm text-zinc-600">Advanced Operation Theaters with robotic assistance.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-medical-600 mt-0.5 flex-shrink-0" icon="lucide:check-circle" width="18"></iconify-icon>
<span className="text-sm text-zinc-600">Internal Medicine &amp; Specialized Intensive Care Units.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-medical-600 mt-0.5 flex-shrink-0" icon="lucide:check-circle" width="18"></iconify-icon>
<span className="text-sm text-zinc-600">Comprehensive rehabilitation and post-op support.</span>
</li>
</ul>
<a className="text-zinc-900 font-medium text-sm inline-flex items-center gap-2 hover:gap-3 transition-all" href="#doctors">
                        Meet our specialists 
                        <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 text-white relative overflow-hidden" id="departments">
<div className="absolute top-0 right-0 w-96 h-96 bg-medical-900 rounded-full blur-[100px] opacity-20 -z-10"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-4">Centers of Excellence</h2>
<p className="text-zinc-400 max-w-lg">Specialized departments led by industry pioneers, ensuring precise diagnosis and effective treatment plans.</p>
</div>
<a className="px-5 py-2 rounded-lg border border-zinc-700 text-sm hover:bg-zinc-800 transition-colors" href="#">View All Departments</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">

<a className="group p-6 rounded-2xl bg-zinc-800/50 border border-zinc-700/50 hover:bg-zinc-800 transition-all hover:border-zinc-600" href="#">
<div className="w-10 h-10 rounded-lg bg-zinc-700 flex items-center justify-center mb-4 text-zinc-300 group-hover:text-white group-hover:bg-medical-600 transition-colors">
<iconify-icon icon="lucide:heart" width="20"></iconify-icon>
</div>
<h3 className="font-medium text-zinc-100">Cardiology</h3>
<p className="text-xs text-zinc-500 mt-2">Comprehensive heart care</p>
</a>
<a className="group p-6 rounded-2xl bg-zinc-800/50 border border-zinc-700/50 hover:bg-zinc-800 transition-all hover:border-zinc-600" href="#">
<div className="w-10 h-10 rounded-lg bg-zinc-700 flex items-center justify-center mb-4 text-zinc-300 group-hover:text-white group-hover:bg-medical-600 transition-colors">
<iconify-icon icon="lucide:brain" width="20"></iconify-icon>
</div>
<h3 className="font-medium text-zinc-100">Neurology</h3>
<p className="text-xs text-zinc-500 mt-2">Brain &amp; Spine surgery</p>
</a>
<a className="group p-6 rounded-2xl bg-zinc-800/50 border border-zinc-700/50 hover:bg-zinc-800 transition-all hover:border-zinc-600" href="#">
<div className="w-10 h-10 rounded-lg bg-zinc-700 flex items-center justify-center mb-4 text-zinc-300 group-hover:text-white group-hover:bg-medical-600 transition-colors">
<iconify-icon icon="lucide:bone" width="20"></iconify-icon>
</div>
<h3 className="font-medium text-zinc-100">Orthopedics</h3>
<p className="text-xs text-zinc-500 mt-2">Joint &amp; Bone specialist</p>
</a>
<a className="group p-6 rounded-2xl bg-zinc-800/50 border border-zinc-700/50 hover:bg-zinc-800 transition-all hover:border-zinc-600" href="#">
<div className="w-10 h-10 rounded-lg bg-zinc-700 flex items-center justify-center mb-4 text-zinc-300 group-hover:text-white group-hover:bg-medical-600 transition-colors">
<iconify-icon icon="lucide:baby" width="20"></iconify-icon>
</div>
<h3 className="font-medium text-zinc-100">Pediatrics</h3>
<p className="text-xs text-zinc-500 mt-2">Child &amp; Infant care</p>
</a>
<a className="group p-6 rounded-2xl bg-zinc-800/50 border border-zinc-700/50 hover:bg-zinc-800 transition-all hover:border-zinc-600" href="#">
<div className="w-10 h-10 rounded-lg bg-zinc-700 flex items-center justify-center mb-4 text-zinc-300 group-hover:text-white group-hover:bg-medical-600 transition-colors">
<iconify-icon icon="lucide:eye" width="20"></iconify-icon>
</div>
<h3 className="font-medium text-zinc-100">Ophthalmology</h3>
<p className="text-xs text-zinc-500 mt-2">Eye care services</p>
</a>
<a className="group p-6 rounded-2xl bg-zinc-800/50 border border-zinc-700/50 hover:bg-zinc-800 transition-all hover:border-zinc-600" href="#">
<div className="w-10 h-10 rounded-lg bg-zinc-700 flex items-center justify-center mb-4 text-zinc-300 group-hover:text-white group-hover:bg-medical-600 transition-colors">
<iconify-icon icon="lucide:microscope" width="20"></iconify-icon>
</div>
<h3 className="font-medium text-zinc-100">Laboratory</h3>
<p className="text-xs text-zinc-500 mt-2">Advanced diagnostics</p>
</a>
<a className="group p-6 rounded-2xl bg-zinc-800/50 border border-zinc-700/50 hover:bg-zinc-800 transition-all hover:border-zinc-600" href="#">
<div className="w-10 h-10 rounded-lg bg-zinc-700 flex items-center justify-center mb-4 text-zinc-300 group-hover:text-white group-hover:bg-medical-600 transition-colors">
<iconify-icon icon="lucide:pill" width="20"></iconify-icon>
</div>
<h3 className="font-medium text-zinc-100">Pharmacy</h3>
<p className="text-xs text-zinc-500 mt-2">24/7 Medical store</p>
</a>
<a className="group p-6 rounded-2xl bg-zinc-800/50 border border-zinc-700/50 hover:bg-zinc-800 transition-all hover:border-zinc-600" href="#">
<div className="w-10 h-10 rounded-lg bg-zinc-700 flex items-center justify-center mb-4 text-zinc-300 group-hover:text-white group-hover:bg-medical-600 transition-colors">
<iconify-icon icon="lucide:ambulance" width="20"></iconify-icon>
</div>
<h3 className="font-medium text-zinc-100">Ambulance</h3>
<p className="text-xs text-zinc-500 mt-2">Rapid transport</p>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white" id="doctors">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold text-zinc-900 tracking-tight mb-4">Our Specialists</h2>
<p className="text-zinc-500">Meet our team of board-certified physicians dedicated to providing exceptional care.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group bg-zinc-50 rounded-2xl overflow-hidden border border-zinc-100">
<div className="aspect-[4/5] overflow-hidden bg-zinc-200 relative">
<img alt="Dr. Sarah Johnson" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
<div className="flex gap-3 justify-center">
<a className="text-white hover:text-medical-400" href="#"><iconify-icon icon="lucide:linkedin" width="18"></iconify-icon></a>
<a className="text-white hover:text-medical-400" href="#"><iconify-icon icon="lucide:twitter" width="18"></iconify-icon></a>
</div>
</div>
</div>
<div className="p-5">
<p className="text-xs font-semibold text-medical-600 uppercase tracking-wider mb-1">Neurologist</p>
<h3 className="text-lg font-medium text-zinc-900">Dr. Sarah Johnson</h3>
</div>
</div>

<div className="group bg-zinc-50 rounded-2xl overflow-hidden border border-zinc-100">
<div className="aspect-[4/5] overflow-hidden bg-zinc-200 relative">
<img alt="Dr. Mark Spencer" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
<div className="flex gap-3 justify-center">
<a className="text-white hover:text-medical-400" href="#"><iconify-icon icon="lucide:linkedin" width="18"></iconify-icon></a>
<a className="text-white hover:text-medical-400" href="#"><iconify-icon icon="lucide:twitter" width="18"></iconify-icon></a>
</div>
</div>
</div>
<div className="p-5">
<p className="text-xs font-semibold text-medical-600 uppercase tracking-wider mb-1">Cardiologist</p>
<h3 className="text-lg font-medium text-zinc-900">Dr. Mark Spencer</h3>
</div>
</div>

<div className="group bg-zinc-50 rounded-2xl overflow-hidden border border-zinc-100">
<div className="aspect-[4/5] overflow-hidden bg-zinc-200 relative">
<img alt="Dr. Emily Chen" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
<div className="flex gap-3 justify-center">
<a className="text-white hover:text-medical-400" href="#"><iconify-icon icon="lucide:linkedin" width="18"></iconify-icon></a>
<a className="text-white hover:text-medical-400" href="#"><iconify-icon icon="lucide:twitter" width="18"></iconify-icon></a>
</div>
</div>
</div>
<div className="p-5">
<p className="text-xs font-semibold text-medical-600 uppercase tracking-wider mb-1">Pediatrician</p>
<h3 className="text-lg font-medium text-zinc-900">Dr. Emily Chen</h3>
</div>
</div>

<div className="group bg-zinc-50 rounded-2xl overflow-hidden border border-zinc-100">
<div className="aspect-[4/5] overflow-hidden bg-zinc-200 relative">
<img alt="Dr. James Wilson" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
<div className="flex gap-3 justify-center">
<a className="text-white hover:text-medical-400" href="#"><iconify-icon icon="lucide:linkedin" width="18"></iconify-icon></a>
<a className="text-white hover:text-medical-400" href="#"><iconify-icon icon="lucide:twitter" width="18"></iconify-icon></a>
</div>
</div>
</div>
<div className="p-5">
<p className="text-xs font-semibold text-medical-600 uppercase tracking-wider mb-1">Orthopedic</p>
<h3 className="text-lg font-medium text-zinc-900">Dr. James Wilson</h3>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 border-t border-zinc-200" id="appointment">
<div className="max-w-7xl mx-auto px-6">
<div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-zinc-200 grid lg:grid-cols-2 gap-12">

<div className="flex flex-col justify-center">
<h2 className="text-3xl font-semibold text-zinc-900 tracking-tight mb-4">Book your appointment.</h2>
<p className="text-zinc-500 mb-8">
                        Experience hassle-free scheduling. Fill out the form, and our representatives will contact you within 24 hours to confirm your slot.
                    </p>
<div className="space-y-6">
<div className="flex items-start gap-4 p-4 rounded-xl bg-zinc-50 border border-zinc-100">
<div className="bg-white p-2 rounded-lg shadow-sm border border-zinc-100">
<iconify-icon className="text-zinc-900" icon="lucide:map-pin" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-zinc-900">Main Location</h4>
<p className="text-sm text-zinc-500 mt-1">123 Health Boulevard, Medical District, NY 10001</p>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-xl bg-zinc-50 border border-zinc-100">
<div className="bg-white p-2 rounded-lg shadow-sm border border-zinc-100">
<iconify-icon className="text-zinc-900" icon="lucide:mail" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-zinc-900">Email Us</h4>
<p className="text-sm text-zinc-500 mt-1">appointments@sidshospital.com</p>
</div>
</div>
</div>
</div>

<form className="space-y-4">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-medium text-zinc-700 ml-1">First Name</label>
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-zinc-400 focus:ring-4 focus:ring-zinc-100 transition-all placeholder:text-zinc-400" placeholder="John" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-zinc-700 ml-1">Last Name</label>
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-zinc-400 focus:ring-4 focus:ring-zinc-100 transition-all placeholder:text-zinc-400" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-zinc-700 ml-1">Email Address</label>
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-zinc-400 focus:ring-4 focus:ring-zinc-100 transition-all placeholder:text-zinc-400" placeholder="john@example.com" type="email"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-medium text-zinc-700 ml-1">Department</label>
<div className="relative">
<select className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-zinc-400 focus:ring-4 focus:ring-zinc-100 transition-all appearance-none text-zinc-600">
<option>Select Department</option>
<option>Cardiology</option>
<option>Neurology</option>
<option>General Medicine</option>
</select>
<iconify-icon className="absolute right-4 top-3.5 text-zinc-400 pointer-events-none" icon="lucide:chevron-down" width="16"></iconify-icon>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-zinc-700 ml-1">Preferred Date</label>
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-zinc-400 focus:ring-4 focus:ring-zinc-100 transition-all text-zinc-600" type="date"/>
</div>
</div>
<div className="pt-4">
<button className="w-full bg-zinc-900 text-white font-medium py-3.5 rounded-xl hover:bg-zinc-800 transition-colors shadow-lg shadow-zinc-200/50" type="submit">
                            Confirm Booking
                        </button>
</div>
<p className="text-[10px] text-zinc-400 text-center mt-4">By booking, you agree to our Terms of Service and Privacy Policy.</p>
</form>
</div>
</div>
</section>

<footer className="bg-white border-t border-zinc-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="bg-zinc-900 text-white p-1 rounded-lg">
<iconify-icon icon="lucide:activity" width="20"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight text-zinc-900">SIDS<span className="font-normal text-zinc-400">HOSPITAL</span></span>
</a>
<p className="text-sm text-zinc-500 leading-relaxed max-w-xs mb-6">
                        Committed to delivering superior healthcare with compassion, integrity, and excellence.
                    </p>
<div className="flex gap-4">
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#"><iconify-icon icon="lucide:facebook" width="20"></iconify-icon></a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="20"></iconify-icon></a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#"><iconify-icon icon="lucide:instagram" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="font-medium text-zinc-900 mb-4 text-sm">Departments</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-medical-600 transition-colors" href="#">Cardiology</a></li>
<li><a className="hover:text-medical-600 transition-colors" href="#">Neurology</a></li>
<li><a className="hover:text-medical-600 transition-colors" href="#">Orthopedics</a></li>
<li><a className="hover:text-medical-600 transition-colors" href="#">Radiology</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-zinc-900 mb-4 text-sm">Patients</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-medical-600 transition-colors" href="#">Find a Doctor</a></li>
<li><a className="hover:text-medical-600 transition-colors" href="#">Book Appointment</a></li>
<li><a className="hover:text-medical-600 transition-colors" href="#">Emergency</a></li>
<li><a className="hover:text-medical-600 transition-colors" href="#">Insurance</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-zinc-900 mb-4 text-sm">Contact</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li>+1 (800) 123-4567</li>
<li>info@sidshospital.com</li>
<li>New York, NY 10001</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-zinc-400">© 2024 SIDS Hospital. All rights reserved.</p>
<div className="flex gap-6 text-xs text-zinc-400">
<a className="hover:text-zinc-900" href="#">Privacy Policy</a>
<a className="hover:text-zinc-900" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
