import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
colors: {
brand: {
50: '#fdf2f8',
100: '#fce7f3',
200: '#fbcfe8',
300: '#f9a8d4',
400: '#f472b6',
500: '#ec4899', // Rose base
900: '#831843',
950: '#500724',
},
dark: {
900: '#0f172a', // Slate 900
800: '#1e293b',
500: '#64748b',
}
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.025em',
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
      

<header className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex-shrink-0 group relative z-50" href="/">
<img alt="Oncore Medi-Spa" className="h-10 w-auto opacity-90 group-hover:opacity-100 transition-opacity grayscale hover:grayscale-0 duration-500" src="https://images.squarespace-cdn.com/content/v1/548e6c23e4b0dc7d909565de/537ab770-a98f-4c2b-974d-717362b7840b/logo+ping.png?format=1500w"/>
</a>

<nav className="hidden md:flex items-center space-x-8">
<div className="flex items-center space-x-6 text-sm font-medium text-dark-500">
<a className="hover:text-dark-900 transition-colors" href="#about">About</a>
<a className="hover:text-dark-900 transition-colors" href="#services">Services</a>
<a className="hover:text-dark-900 transition-colors" href="#acne">Acne Clinic</a>
<a className="hover:text-dark-900 transition-colors" href="#testimonials">Testimonials</a>
</div>
<a className="inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-white transition-all duration-200 bg-dark-900 rounded-full hover:bg-dark-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dark-900 shadow-sm hover:shadow-md transform hover:-translate-y-0.5" href="https://instant-scheduling.com/sch.php?kn=177776" target="_blank">
                    Book Online
                </a>
</nav>

<button className="md:hidden relative z-50 p-2 text-dark-900" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>

<div className="hidden fixed inset-0 bg-white z-40 flex flex-col pt-24 px-6 space-y-6 md:hidden h-screen w-screen overflow-y-auto" id="mobile-menu">
<a className="text-2xl font-serif text-dark-900" href="#about">About</a>
<a className="text-2xl font-serif text-dark-900" href="#services">Services</a>
<a className="text-2xl font-serif text-dark-900" href="#acne">Acne Clinic</a>
<a className="text-2xl font-serif text-dark-900" href="#testimonials">Testimonials</a>
<a className="w-full py-4 bg-brand-50 text-brand-900 text-center rounded-xl font-medium mt-auto mb-10" href="https://instant-scheduling.com/sch.php?kn=177776">Book Online</a>
</div>
</header>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden subtle-gradient">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

<div className="max-w-2xl relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-100 shadow-sm mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
</span>
<span className="text-xs font-medium text-dark-500 uppercase tracking-wider">Accepting New Clients</span>
</div>
<h1 className="text-5xl lg:text-7xl font-medium tracking-tighter text-dark-900 mb-6 font-serif">
                    Beautiful Skin <br/> Begins With Oncore.
                </h1>
<p className="text-lg text-dark-500 mb-8 leading-relaxed max-w-md">
                    A full-service medical clinic in Edmonton offering a wide variety of aesthetic services to help you look and feel your absolute best.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-white transition-all duration-200 bg-dark-900 rounded-full hover:bg-dark-800 shadow-lg hover:shadow-xl hover:-translate-y-1" href="https://instant-scheduling.com/sch.php?kn=177776" target="_blank">
                        Book Appointment
                        <iconify-icon className="ml-2" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-dark-900 transition-all duration-200 bg-white border border-gray-200 rounded-full hover:bg-gray-50 hover:border-gray-300" href="#services">
                        View Services
                    </a>
</div>
</div>

<div className="relative">
<div className="absolute inset-0 bg-gradient-to-tr from-brand-100/30 to-transparent rounded-[2rem] transform translate-x-4 translate-y-4"></div>
<img alt="Relaxing Spa Aesthetic" className="relative w-full aspect-[4/3] object-cover rounded-[2rem] shadow-2xl grayscale-[20%] hover:grayscale-0 transition-all duration-700" src="https://images.squarespace-cdn.com/content/v1/548e6c23e4b0dc7d909565de/bb6d42cd-d315-457d-a3f2-5cc638924bb9/shutterstock_2500102381.jpg"/>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-3xl lg:text-4xl font-serif font-medium text-dark-900 tracking-tight mb-4">Curated Treatments</h2>
<p className="text-dark-500 max-w-md">Advanced medical aesthetics performed by certified nurse practitioners and specialists.</p>
</div>
<a className="text-sm font-medium text-brand-900 hover:text-brand-700 flex items-center group" href="/nurse-practitioner">
                    Full Service Menu 
                    <iconify-icon className="ml-1 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group p-8 rounded-2xl bg-white border border-gray-100 hover:border-brand-200 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center text-brand-900 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:stars-minimalistic-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-dark-900 mb-2">Botox &amp; Fillers</h3>
<p className="text-sm text-dark-500 leading-relaxed mb-4">Reduce fine lines and restore volume with precision injectables tailored to your facial structure.</p>
</div>

<div className="group p-8 rounded-2xl bg-white border border-gray-100 hover:border-brand-200 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:sun-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-dark-900 mb-2">Laser Treatments</h3>
<p className="text-sm text-dark-500 leading-relaxed mb-4">State-of-the-art laser technology for hair removal and treating sun-damaged skin.</p>
</div>

<div className="group p-8 rounded-2xl bg-white border border-gray-100 hover:border-brand-200 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:cosmetic-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-dark-900 mb-2">Skin Rejuvenation</h3>
<p className="text-sm text-dark-500 leading-relaxed mb-4">Medical grade chemical peels and microdermabrasion to reveal your natural glow.</p>
</div>

<div className="group p-8 rounded-2xl bg-white border border-gray-100 hover:border-brand-200 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:heart-pulse-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-dark-900 mb-2">Health Consults</h3>
<p className="text-sm text-dark-500 leading-relaxed mb-4">Comprehensive health consultations and specialist referrals by Nurse Practitioners.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-dark-900 text-white overflow-hidden" id="acne">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 backdrop-blur-sm mb-6">
<span className="text-xs font-medium text-white uppercase tracking-wider">Specialized Care</span>
</div>
<h2 className="text-3xl lg:text-4xl font-serif font-medium mb-6">Advanced Acne Solutions</h2>
<p className="text-gray-400 mb-8 leading-relaxed">
                    We specialize in treating acne at its source. From Blu-U Light Therapy to the Isolaz Acne Laser and prescription medication management, our multi-modal approach ensures clear, healthy skin.
                </p>
<ul className="space-y-4 mb-8">
<li className="flex items-start">
<iconify-icon className="text-brand-400 mt-0.5 mr-3" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-sm text-gray-300">Isolaz &amp; Blu-U Light Therapy</span>
</li>
<li className="flex items-start">
<iconify-icon className="text-brand-400 mt-0.5 mr-3" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-sm text-gray-300">Professional Grade Chemical Peels</span>
</li>
<li className="flex items-start">
<iconify-icon className="text-brand-400 mt-0.5 mr-3" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-sm text-gray-300">Prescription Medication Management</span>
</li>
</ul>
<a className="inline-flex items-center text-white font-medium hover:text-brand-300 transition-colors" href="/acne">
                    Explore Acne Treatments <iconify-icon className="ml-2" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="order-1 lg:order-2 relative">
<div className="absolute -inset-4 bg-brand-500/20 rounded-full blur-3xl opacity-30"></div>
<div className="grid grid-cols-2 gap-4">

<div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl h-48 flex flex-col justify-end">
<iconify-icon className="text-brand-300 mb-2" icon="solar:shield-check-linear" width="32"></iconify-icon>
<span className="text-sm font-medium">Safe &amp; Proven</span>
</div>
<div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl h-48 mt-8 flex flex-col justify-end">
<iconify-icon className="text-brand-300 mb-2" icon="solar:user-hand-up-linear" width="32"></iconify-icon>
<span className="text-sm font-medium">Expert Staff</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-50/50" id="testimonials">
<div className="max-w-7xl mx-auto px-6 text-center mb-16">
<h2 className="text-3xl font-serif font-medium text-dark-900 tracking-tight mb-4">Patient Stories</h2>
<p className="text-dark-500">Read what our community says about their experience at Oncore.</p>
</div>
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
<div className="flex text-brand-400 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-dark-800 font-medium mb-2">"Absolutely recommend Oncore Medi spa 1000 percent."</p>
<p className="text-sm text-dark-500 mb-6 flex-grow">The staff made me feel comfortable immediately. The results speak for themselves.</p>
<div className="flex items-center mt-auto">
<div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-500">A</div>
<span className="ml-3 text-xs font-semibold text-dark-900 uppercase tracking-wide">Verified Patient</span>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
<div className="flex text-brand-400 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-dark-800 font-medium mb-2">"Corinne is beyond knowledgeable"</p>
<p className="text-sm text-dark-500 mb-6 flex-grow">She took the time to explain every step of the procedure. I've never felt in safer hands.</p>
<div className="flex items-center mt-auto">
<div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-500">C</div>
<span className="ml-3 text-xs font-semibold text-dark-900 uppercase tracking-wide">Verified Patient</span>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
<div className="flex text-brand-400 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-dark-800 font-medium mb-2">"Highest standards of cleanliness."</p>
<p className="text-sm text-dark-500 mb-6 flex-grow">The clinic is pristine and beautiful. It helped me age gracefully with subtle, natural results.</p>
<div className="flex items-center mt-auto">
<div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-500">S</div>
<span className="ml-3 text-xs font-semibold text-dark-900 uppercase tracking-wide">Verified Patient</span>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-gray-100 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<img alt="Oncore Logo" className="h-8 grayscale opacity-80 mb-6" src="https://images.squarespace-cdn.com/content/v1/548e6c23e4b0dc7d909565de/537ab770-a98f-4c2b-974d-717362b7840b/logo+ping.png?format=1500w"/>
<p className="text-xs text-dark-500 leading-relaxed">
                        Enhancing natural beauty through medical science and aesthetic artistry in Edmonton, Alberta.
                    </p>
</div>
<div>
<h4 className="font-medium text-dark-900 mb-4 text-sm">Contact</h4>
<p className="text-sm text-dark-500 mb-2">206 Pembina Road<br/>Sherwood Park, AB T8H 0L8</p>
<a className="text-sm text-dark-500 hover:text-brand-500 block" href="tel:7804763700">780.476.3700</a>
<a className="text-sm text-dark-500 hover:text-brand-500 block" href="mailto:info@oncoremedical.com">info@oncoremedical.com</a>
</div>
<div>
<h4 className="font-medium text-dark-900 mb-4 text-sm">Services</h4>
<ul className="space-y-2 text-sm text-dark-500">
<li><a className="hover:text-dark-900" href="/botox-northside-castledowns">Botox</a></li>
<li><a className="hover:text-dark-900" href="/filler">Filler</a></li>
<li><a className="hover:text-dark-900" href="/laser-hair-removal">Laser Hair Removal</a></li>
<li><a className="hover:text-dark-900" href="/isolaz-acne-laser">Acne Treatment</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-dark-900 mb-4 text-sm">Social</h4>
<div className="flex space-x-4">
<a className="text-dark-400 hover:text-brand-600 transition-colors" href="https://www.facebook.com/Oncore-Medi-Spa-1630192333867218/">
<iconify-icon icon="solar:facebook-linear" strokeWidth="1.5" width="24"></iconify-icon>
</a>
<a className="text-dark-400 hover:text-brand-600 transition-colors" href="https://www.youtube.com/channel/UCbfheUSDCDLJB19JfwmGkCA">
<iconify-icon icon="solar:videocamera-linear" strokeWidth="1.5" width="24"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-gray-400">© 2026 Oncore Medi-Spa. All Rights Reserved.</p>
<div className="flex gap-6">
<a className="text-xs text-gray-400 hover:text-gray-600" href="#">Privacy Policy</a>
<a className="text-xs text-gray-400 hover:text-gray-600" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
