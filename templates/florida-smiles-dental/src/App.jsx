import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
brand: {
50: '#f0fdfa',
100: '#ccfbf1',
200: '#99f6e4',
300: '#5eead4',
400: '#2dd4bf',
500: '#14b8a6', // Teal base
600: '#0d9488',
700: '#0f766e',
800: '#115e59',
900: '#134e4a',
950: '#042f2e',
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
      

<header className="fixed top-0 left-0 right-0 z-50 w-full p-4 md:p-6 transition-all duration-300">
<nav className="mx-auto max-w-7xl rounded-full backdrop-blur-xl border shadow-lg px-6 py-3 flex items-center justify-between transition-all duration-300 bg-white/80 border-white/20 shadow-slate-200/50">

<a className="flex items-center gap-3 group" href="#">
<img alt="Florida Smiles Dental" className="h-10 w-auto object-contain" src="https://floridasmilesdental.com/wp-content/uploads/2024/07/sfd508x156.png"/>
</a>

<div className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-brand-600" href="#">Home</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-brand-600" href="#about">About Us</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-brand-600" href="#services">Services</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-brand-600" href="#team">Meet the Doctors</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-brand-600" href="#locations">Locations</a>
</div>

<div className="hidden md:flex items-center gap-3">
<a className="text-xs font-semibold text-slate-500 hover:text-brand-600 flex items-center gap-1" href="tel:9545236525">
<iconify-icon icon="solar:phone-calling-linear" width="16"></iconify-icon>
                    (954) 523-6525
                </a>
<a className="inline-flex items-center gap-2 bg-brand-600 text-sm font-medium px-5 py-2.5 rounded-full transition-all shadow-lg shadow-brand-500/20 hover:shadow-brand-500/40 hover:bg-brand-700 text-white" href="#book">
                    Request Appointment
                    <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>

<button className="lg:hidden text-slate-900">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</nav>
</header>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white rounded-b-[3rem]">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-brand-100/50 blur-3xl"></div>
<div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-50/50 blur-3xl"></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="space-y-8 animate-fade-in-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-xs font-semibold tracking-wide uppercase">
<span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
                        Accepting New Patients
                    </div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tighter leading-[1.1] text-slate-900">
                        Top-Rated Care in <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-blue-600">Fort Lauderdale</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 font-medium max-w-lg leading-relaxed">
                        Your dental health is key to living a full and vibrant life. Experience state-of-the-art care at Florida Smiles Dental with Dr. Scerbo and his team.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center gap-2 bg-slate-900 text-base font-medium px-8 py-3.5 rounded-full transition-all shadow-xl hover:-translate-y-1 hover:bg-slate-800 text-white" href="#book">
                            Book Visit
                            <iconify-icon icon="solar:calendar-add-linear" width="18"></iconify-icon>
</a>
<a className="inline-flex justify-center items-center gap-2 border text-base font-medium px-8 py-3.5 rounded-full transition-all bg-white hover:bg-slate-50 text-slate-700 border-slate-200 hover:border-brand-200 hover:text-brand-600" href="#services">
                            Our Services
                            <iconify-icon icon="solar:archive-down-minimlistic-linear" width="18"></iconify-icon>
</a>
</div>

<div className="flex items-center gap-6 pt-4 border-t border-slate-100">
<div>
<div className="flex gap-0.5 text-yellow-400 mb-1">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-xs font-medium text-slate-500">4.9/5 from 500+ Reviews</p>
</div>
<div className="h-8 w-px bg-slate-200"></div>
<div className="flex items-center gap-2">
<img alt="ADA" className="h-6 w-auto opacity-60 grayscale hover:grayscale-0 transition-all" src="https://floridasmilesdental.com/wp-content/uploads/2024/07/ada400x225.png"/>
<img alt="FDA" className="h-6 w-auto opacity-60 grayscale hover:grayscale-0 transition-all" src="https://floridasmilesdental.com/wp-content/uploads/2024/07/fda002400x225.png"/>
</div>
</div>
</div>

<div className="relative lg:h-[600px] w-full">
<div className="relative w-full h-full">

<div className="absolute top-0 right-0 w-[85%] h-[85%] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-brand-900/10 border-4 border-white z-10">
<img alt="Modern Dental Office" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>

<div className="absolute bottom-10 left-0 bg-white p-5 rounded-2xl shadow-xl shadow-slate-200 border border-slate-100 z-20 max-w-[240px] animate-bounce-slow">
<div className="flex items-start gap-3">
<div className="bg-brand-100 p-2 rounded-lg text-brand-600">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<div>
<p className="font-bold text-slate-900 text-sm">Advanced Tech</p>
<p className="text-xs text-slate-500 mt-1">Latest equipment for precise diagnostics.</p>
</div>
</div>
</div>

<div className="absolute top-10 left-10 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-white/50 z-20">
<span className="flex items-center gap-2 text-sm font-semibold text-slate-700">
<span className="w-2 h-2 rounded-full bg-green-500"></span> Open Today
                            </span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-20">
<span className="text-brand-600 font-semibold tracking-wider uppercase text-xs mb-2 block">Comprehensive Care</span>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6 text-slate-900">
                    World-Class <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-teal-500">Dental Services</span>
</h2>
<p className="text-lg text-slate-500 font-medium">
                    From routine checkups to complex oral surgeries, we offer a full range of treatments to keep your smile healthy and beautiful.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 rounded-3xl bg-white border border-slate-100 hover:border-brand-200 shadow-sm hover:shadow-xl hover:shadow-brand-900/5 transition-all duration-300">
<div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:medical-kit-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">General Dentistry</h3>
<p className="text-slate-500 leading-relaxed mb-4">Diagnosis, treatment, and prevention of oral health issues including cleanings and fillings.</p>
<a className="inline-flex items-center text-sm font-semibold text-brand-600 hover:text-brand-700 gap-1 group/link" href="#">
                        Learn more <iconify-icon className="transition-transform group-hover/link:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group p-8 rounded-3xl bg-white border border-slate-100 hover:border-brand-200 shadow-sm hover:shadow-xl hover:shadow-brand-900/5 transition-all duration-300">
<div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:magic-stick-3-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Cosmetic Dentistry</h3>
<p className="text-slate-500 leading-relaxed mb-4">Enhance your smile with teeth whitening, veneers, bonding, and aesthetic contouring.</p>
<a className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 gap-1 group/link" href="#">
                        Learn more <iconify-icon className="transition-transform group-hover/link:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group p-8 rounded-3xl bg-white border border-slate-100 hover:border-brand-200 shadow-sm hover:shadow-xl hover:shadow-brand-900/5 transition-all duration-300">
<div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:bolt-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Dental Implants</h3>
<p className="text-slate-500 leading-relaxed mb-4">Permanent artificial tooth roots providing a stable base for replacement teeth.</p>
<a className="inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-700 gap-1 group/link" href="#">
                        Learn more <iconify-icon className="transition-transform group-hover/link:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group p-8 rounded-3xl bg-white border border-slate-100 hover:border-brand-200 shadow-sm hover:shadow-xl hover:shadow-brand-900/5 transition-all duration-300">
<div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:smile-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Orthodontics</h3>
<p className="text-slate-500 leading-relaxed mb-4">Invisalign and braces to straighten teeth and correct bite issues effectively.</p>
<a className="inline-flex items-center text-sm font-semibold text-purple-600 hover:text-purple-700 gap-1 group/link" href="#">
                        Learn more <iconify-icon className="transition-transform group-hover/link:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group p-8 rounded-3xl bg-white border border-slate-100 hover:border-brand-200 shadow-sm hover:shadow-xl hover:shadow-brand-900/5 transition-all duration-300">
<div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:bone-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Oral Surgery</h3>
<p className="text-slate-500 leading-relaxed mb-4">Complex procedures such as extractions, jaw realignment, and surgical implants.</p>
<a className="inline-flex items-center text-sm font-semibold text-rose-600 hover:text-rose-700 gap-1 group/link" href="#">
                        Learn more <iconify-icon className="transition-transform group-hover/link:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group p-8 rounded-3xl bg-white border border-slate-100 hover:border-brand-200 shadow-sm hover:shadow-xl hover:shadow-brand-900/5 transition-all duration-300">
<div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:filters-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Periodontics</h3>
<p className="text-slate-500 leading-relaxed mb-4">Specialized treatment for gum diseases and supporting structures of your teeth.</p>
<a className="inline-flex items-center text-sm font-semibold text-amber-600 hover:text-amber-700 gap-1 group/link" href="#">
                        Learn more <iconify-icon className="transition-transform group-hover/link:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="team">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 uppercase tracking-wider bg-slate-100 text-slate-600">Our Experts</span>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4 text-slate-900">
                        Meet the <span className="text-brand-600">Doctors</span>
</h2>
<p className="text-lg text-slate-500 font-medium max-w-xl">
                        A dedicated team of specialists committed to your smile.
                    </p>
</div>
<a className="hidden md:inline-flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-700" href="#book">
                    Join our family <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

<div className="group relative rounded-2xl overflow-hidden cursor-pointer">
<div className="aspect-square w-full relative bg-slate-100">
<img alt="Peter Scerbo, DMD" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://floridasmilesdental.com/wp-content/uploads/2024/07/Dr-Scerbo400.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>
<div className="pt-4">
<h4 className="text-lg font-bold text-slate-900">Peter Scerbo, DMD</h4>
<p className="text-sm font-medium text-brand-600">Dentist</p>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden cursor-pointer">
<div className="aspect-square w-full relative bg-slate-100">
<img alt="Anas Selman, DDS" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://floridasmilesdental.com/wp-content/uploads/2024/07/DrSelman400.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>
<div className="pt-4">
<h4 className="text-lg font-bold text-slate-900">Anas Selman, DDS</h4>
<p className="text-sm font-medium text-brand-600">Endodontist</p>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden cursor-pointer">
<div className="aspect-square w-full relative bg-slate-100">
<img alt="Steven Berkowitz, DDS" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://floridasmilesdental.com/wp-content/uploads/2024/07/DrBerkowitz400.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>
<div className="pt-4">
<h4 className="text-lg font-bold text-slate-900">Steven Berkowitz, DDS</h4>
<p className="text-sm font-medium text-brand-600">Dentist</p>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden cursor-pointer">
<div className="aspect-square w-full relative bg-slate-100">
<img alt="Mark Behar, DDS" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://floridasmilesdental.com/wp-content/uploads/2024/07/Dr-Behar-Photo400.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>
<div className="pt-4">
<h4 className="text-lg font-bold text-slate-900">Mark Behar, DDS</h4>
<p className="text-sm font-medium text-brand-600">Dentist</p>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden cursor-pointer">
<div className="aspect-square w-full relative bg-slate-100">
<img alt="Nick De Villiers, DMD" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://floridasmilesdental.com/wp-content/uploads/2025/02/IMG_8078-1.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>
<div className="pt-4">
<h4 className="text-lg font-bold text-slate-900">Nick De Villiers, DMD</h4>
<p className="text-sm font-medium text-brand-600">Dentist</p>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden cursor-pointer">
<div className="aspect-square w-full relative bg-slate-100">
<img alt="Dr. Vivek Manda" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://floridasmilesdental.com/wp-content/uploads/2025/06/Untitled-design-7.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>
<div className="pt-4">
<h4 className="text-lg font-bold text-slate-900">Dr. Vivek Manda</h4>
<p className="text-sm font-medium text-brand-600">Dentist</p>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden cursor-pointer">
<div className="aspect-square w-full relative bg-slate-100">
<img alt="T. Cem Sayin" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://floridasmilesdental.com/wp-content/uploads/2025/02/Untitled-design.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>
<div className="pt-4">
<h4 className="text-lg font-bold text-slate-900">T. Cem Sayin, DDS, PhD</h4>
<p className="text-sm font-medium text-brand-600">Endodontist</p>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden cursor-pointer">
<div className="aspect-square w-full relative bg-slate-100">
<img alt="Dr. Miguelina Arocha" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://floridasmilesdental.com/wp-content/uploads/2025/02/IMG_8084-1.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>
<div className="pt-4">
<h4 className="text-lg font-bold text-slate-900">Dr. Miguelina Arocha</h4>
<p className="text-sm font-medium text-brand-600">Dentist</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white rounded-t-[3rem] overflow-hidden relative">
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center mb-16">
<span className="text-brand-400 font-semibold tracking-wider uppercase text-xs mb-2 block">Patient Stories</span>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight">What People Are Saying</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-700">
<div className="flex text-yellow-400 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-300 leading-relaxed mb-6">
                        "We have been coming to Florida Smiles Dental for over ten years &amp; couldn’t be happier. The office is immaculate &amp; the staff is always prompt &amp; professional."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-brand-500 flex items-center justify-center text-white font-bold">K</div>
<div>
<p className="font-semibold">Kelley H.</p>
<p className="text-xs text-slate-400">Google Review</p>
</div>
</div>
</div>

<div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-700">
<div className="flex text-yellow-400 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-300 leading-relaxed mb-6">
                        "My first time here and I love how Dr. Nus made me feel so comfortable. I brought my whole family in and they took care of us in a timely manner. Definitely will be here long term."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">M</div>
<div>
<p className="font-semibold">Michael E.</p>
<p className="text-xs text-slate-400">Google Review</p>
</div>
</div>
</div>

<div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-700">
<div className="flex text-yellow-400 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-300 leading-relaxed mb-6">
                        "Erin was a great hygienist who took great care and time in my cleaning. Thanks to Adrienn in administration front desk. She is friendly and accommodating."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold">J</div>
<div>
<p className="font-semibold">J. Furtado</p>
<p className="text-xs text-slate-400">Google Review</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="locations">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">

<div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
<div className="inline-block p-3 rounded-xl bg-brand-50 text-brand-600 mb-6">
<iconify-icon icon="solar:map-point-linear" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-bold text-slate-900 mb-4">Fort Lauderdale</h3>
<div className="space-y-3 mb-6">
<p className="flex items-start gap-3 text-slate-600">
<iconify-icon className="mt-1 shrink-0" icon="solar:map-linear"></iconify-icon>
                            255 SE 14th St #200, <br/>Fort Lauderdale, FL 33316
                        </p>
<p className="flex items-center gap-3 text-slate-600">
<iconify-icon className="shrink-0" icon="solar:phone-calling-linear"></iconify-icon>
<a className="hover:text-brand-600 transition-colors" href="tel:9545236525">(954) 523-6525</a>
</p>
<p className="flex items-center gap-3 text-slate-600">
<iconify-icon className="shrink-0" icon="solar:clock-circle-linear"></iconify-icon>
                            Mon - Fri: 8:00AM - 6:00PM
                        </p>
</div>
<a className="w-full inline-flex justify-center items-center gap-2 border border-slate-200 bg-slate-50 text-slate-900 font-semibold py-3 rounded-xl hover:bg-white hover:shadow-md transition-all" href="https://maps.app.goo.gl/tv7DnmSbBv9jEW9Y8" target="_blank">
                        Get Directions
                    </a>
</div>

<div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
<div className="inline-block p-3 rounded-xl bg-blue-50 text-blue-600 mb-6">
<iconify-icon icon="solar:lighthouse-linear" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-bold text-slate-900 mb-4">Lighthouse Point</h3>
<div className="space-y-3 mb-6">
<p className="flex items-start gap-3 text-slate-600">
<iconify-icon className="mt-1 shrink-0" icon="solar:map-linear"></iconify-icon>
                            2211 NE 36th St #201, <br/>Lighthouse Point, FL 33064
                        </p>
<p className="flex items-center gap-3 text-slate-600">
<iconify-icon className="shrink-0" icon="solar:phone-calling-linear"></iconify-icon>
<a className="hover:text-brand-600 transition-colors" href="tel:9549432466">(954) 943-2466</a>
</p>
<p className="flex items-center gap-3 text-slate-600">
<iconify-icon className="shrink-0" icon="solar:clock-circle-linear"></iconify-icon>
                            Mon - Fri: 8:00AM - 6:00PM
                        </p>
</div>
<a className="w-full inline-flex justify-center items-center gap-2 border border-slate-200 bg-slate-50 text-slate-900 font-semibold py-3 rounded-xl hover:bg-white hover:shadow-md transition-all" href="https://maps.app.goo.gl/modfcACSb9g4LTz7A" target="_blank">
                        Get Directions
                    </a>
</div>
</div>

<div className="bg-gradient-to-r from-brand-600 to-teal-600 rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl shadow-brand-900/20" id="book">
<h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Ready for a Brighter Smile?</h2>
<p className="text-brand-100 text-lg mb-8 max-w-2xl mx-auto">
                    Scheduling an appointment is easy. Contact us today to set up your first visit or consultation.
                </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="inline-flex justify-center items-center gap-2 bg-white text-brand-700 font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all" href="tel:9545236525">
<iconify-icon icon="solar:phone-calling-bold" width="20"></iconify-icon>
                        Call Fort Lauderdale
                    </a>
<a className="inline-flex justify-center items-center gap-2 bg-brand-800 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:bg-brand-900 hover:scale-105 transition-all" href="tel:9549432466">
<iconify-icon icon="solar:phone-calling-bold" width="20"></iconify-icon>
                        Call Lighthouse Point
                    </a>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

<div className="space-y-6">
<img alt="Florida Smiles Dental" className="h-12 w-auto object-contain" src="https://floridasmilesdental.com/wp-content/uploads/2024/07/sfd508x156.png"/>
<p className="text-slate-500 text-sm leading-relaxed">
                        State-of-the-art dental facility located in Fort Lauderdale and Lighthouse Point, FL.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-brand-50 hover:text-brand-600 transition-colors" href="https://www.facebook.com/floridasmilesdental/" target="_blank">
<iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-brand-50 hover:text-brand-600 transition-colors" href="https://www.instagram.com/FloridaSmilesDental/" target="_blank">
<iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon>
</a>
</div>
</div>

<div>
<h4 className="font-bold text-slate-900 mb-6">Patient Info</h4>
<ul className="space-y-4 text-sm text-slate-500 font-medium">
<li><a className="hover:text-brand-600 transition-colors" href="#">New Patients</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Pay Online</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Specials</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Careers</a></li>
</ul>
</div>

<div>
<h4 className="font-bold text-slate-900 mb-6">Services</h4>
<ul className="space-y-4 text-sm text-slate-500 font-medium">
<li><a className="hover:text-brand-600 transition-colors" href="#">General Dentistry</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Cosmetic Dentistry</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Dental Implants</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Orthodontics</a></li>
</ul>
</div>

<div>
<h4 className="font-bold text-slate-900 mb-6">Contact</h4>
<ul className="space-y-4 text-sm text-slate-500 font-medium">
<li className="flex items-center gap-2">
<iconify-icon className="text-brand-600" icon="solar:letter-linear"></iconify-icon>
                            marketing@floridasmilesdental.com
                        </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-brand-600" icon="solar:phone-linear"></iconify-icon>
                            (954) 523-6525 (Ft. Lauderdale)
                        </li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-slate-400 text-sm font-medium">© 2025 Florida Smiles Dental. All Rights Reserved.</p>
<div className="flex gap-6 text-sm text-slate-400 font-medium">
<a className="hover:text-slate-600" href="#">Privacy Policy</a>
<a className="hover:text-slate-600" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
