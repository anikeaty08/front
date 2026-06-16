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
},
colors: {
brand: {
50: '#f0f9ff',
100: '#e0f2fe',
500: '#3d9cd2', // Original Blue
600: '#0284c7',
900: '#0c4a6e',
},
accent: {
500: '#E56D1B', // Original Orange
600: '#ea580c',
}
},
letterSpacing: {
tight: '-0.02em',
tighter: '-0.04em',
}
}
}
}



        // Navbar Scroll Effect
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 20) {
                nav.classList.add('shadow-sm', 'bg-white/95');
                nav.classList.remove('glass-nav');
            } else {
                nav.classList.remove('shadow-sm', 'bg-white/95');
                nav.classList.add('glass-nav');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 glass-nav border-b border-gray-100 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex-shrink-0 group" href="https://kamaraplumbing.com.au/">
<img alt="Kamara Plumbing" className="h-10 w-auto opacity-90 group-hover:opacity-100 transition-opacity" src="https://kamaraplumbing.com.au/wp-content/uploads/2021/11/kamara.png"/>
</a>

<div className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-gray-600 hover:text-brand-500 transition-colors" href="https://kamaraplumbing.com.au/about/">About Us</a>
<a className="text-sm font-medium text-gray-600 hover:text-brand-500 transition-colors" href="https://kamaraplumbing.com.au/our-services/">Services</a>
<a className="text-sm font-medium text-gray-600 hover:text-brand-500 transition-colors" href="https://kamaraplumbing.com.au/your-experts/">Trusted By</a>
<a className="text-sm font-medium text-gray-600 hover:text-brand-500 transition-colors" href="https://kamaraplumbing.com.au/quality-assurance/">Quality Assurance</a>
<a className="text-sm font-medium text-gray-600 hover:text-brand-500 transition-colors" href="https://kamaraplumbing.com.au/environmental-management/">Environment</a>
<a className="text-sm font-medium text-gray-600 hover:text-brand-500 transition-colors" href="https://kamaraplumbing.com.au/contact-us/">Contact Us</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden sm:flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white text-xs font-medium px-4 py-2.5 rounded-full transition-all shadow-sm hover:shadow-md" href="mailto:info@kamaraplumbing.com.au">
<span>Email Us</span>
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<button className="lg:hidden p-2 text-gray-600 hover:bg-gray-50 rounded-lg" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>

<div className="hidden lg:hidden border-t border-gray-100 bg-white/95 backdrop-blur-xl absolute w-full left-0 top-20 shadow-xl" id="mobile-menu">
<div className="p-6 flex flex-col gap-4">
<a className="text-sm font-medium text-gray-900" href="https://kamaraplumbing.com.au/about/">About Us</a>
<a className="text-sm font-medium text-gray-900" href="https://kamaraplumbing.com.au/our-services/">Services</a>
<a className="text-sm font-medium text-gray-900" href="https://kamaraplumbing.com.au/your-experts/">Trusted By</a>
<a className="text-sm font-medium text-gray-900" href="https://kamaraplumbing.com.au/quality-assurance/">Quality Assurance</a>
<a className="text-sm font-medium text-gray-900" href="https://kamaraplumbing.com.au/environmental-management/">Environment</a>
<a className="text-sm font-medium text-gray-900" href="https://kamaraplumbing.com.au/contact-us/">Contact Us</a>
<a className="text-sm font-medium text-accent-500 mt-2" href="mailto:info@kamaraplumbing.com.au">Email Us</a>
</div>
</div>
</nav>

<header className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Commercial Plumbing" className="w-full h-full object-cover" src="https://kamaraplumbing.com.au/wp-content/uploads/2025/04/front.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-medium mb-6 fade-in-up">
<span className="w-2 h-2 rounded-full bg-green-400"></span>
                    Over 20 Years Experience
                </div>
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tighter leading-[1.1] mb-6 fade-in-up delay-100">
                    Commercial Plumbers: <br/>
<span className="text-brand-500">Melbourne.</span>
</h1>
<p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl font-light leading-relaxed fade-in-up delay-200">
                    Proudly delivering trusted commercial and industrial plumbing maintenance across Melbourne.
                </p>
<div className="flex flex-wrap gap-3 fade-in-up delay-300">
<span className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 text-white text-sm">Commercial</span>
<span className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 text-white text-sm">Industrial</span>
<span className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 text-white text-sm">Aged Care</span>
<span className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 text-white text-sm">Health Care</span>
<span className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 text-white text-sm">Strata</span>
</div>
</div>
</div>
</header>

<section className="py-24 bg-white border-b border-gray-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="space-y-6">
<div className="inline-flex items-center gap-2 text-brand-500 font-medium text-sm tracking-wide uppercase">
<iconify-icon icon="solar:verified-check-linear" width="18"></iconify-icon>
                        Safety First
                    </div>
<h2 className="text-3xl md:text-4xl font-medium text-gray-900 tracking-tight">
                        Cm3 pre-qualified.
                    </h2>
<p className="text-lg text-gray-600 leading-relaxed font-light">
                        Our CM3 OHS pre-qualification ensures we meet strict safety standards, giving our clients peace of mind across every job we take on.
                    </p>
<div className="pt-4">
<a className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-accent-500 transition-colors group" href="#">
                            More about us
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
<div className="flex justify-center lg:justify-end">
<div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
<img alt="Cm3 Pre-qualified" className="h-16 md:h-20 w-auto opacity-90 hover:opacity-100 transition-opacity" src="https://kamaraplumbing.com.au/wp-content/uploads/2025/04/Logo_Cm3_Contractor-Management-Prequalification-2.svg"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50/50">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-3xl mx-auto text-center mb-16">
<h2 className="text-3xl md:text-5xl font-medium text-gray-900 tracking-tighter mb-4">
                    Built on Trust. <br className="hidden md:block"/>Backed by Experience.
                </h2>
<div className="h-1 w-20 bg-accent-500 mx-auto rounded-full"></div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">

<div className="md:col-span-1 row-span-2 bg-white rounded-2xl p-8 border border-gray-100 shadow-sm flex flex-col justify-center">
<div className="mb-6 text-brand-500">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1" width="48"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-gray-900 mb-4 tracking-tight">Why Kamara?</h3>
<p className="text-gray-600 leading-relaxed text-sm">
                        As trusted members of Master Plumbers and fully licensed by the Victorian Building Authority (VBA), Kamara Plumbing is committed to delivering high-quality, professional plumbing services.
                    </p>
<p className="text-gray-600 leading-relaxed text-sm mt-4">
                        We understand the critical importance of safety, compliance, and reliability.
                    </p>
</div>

<div className="md:col-span-1 row-span-1 relative group overflow-hidden rounded-2xl border border-gray-100">
<img alt="Basement Plumbing" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://kamaraplumbing.com.au/wp-content/uploads/2025/04/basement.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-6 left-6 text-white">
<p className="text-sm font-medium">Infrastructure</p>
</div>
</div>

<div className="md:col-span-1 row-span-2 relative group overflow-hidden rounded-2xl border border-gray-100">
<img alt="Kamara Plumber" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://kamaraplumbing.com.au/wp-content/uploads/2025/04/kamara-4.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-6 left-6 text-white">
<p className="text-sm font-medium">Expert Team</p>
</div>
</div>

<div className="md:col-span-1 row-span-1 relative group overflow-hidden rounded-2xl border border-gray-100">
<img alt="Service Van" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://kamaraplumbing.com.au/wp-content/uploads/2025/04/kamara-8.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-6 left-6 text-white">
<p className="text-sm font-medium">Rapid Response</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group p-8 rounded-2xl bg-gray-50 hover:bg-white border border-gray-100 hover:border-brand-100 hover:shadow-xl hover:shadow-brand-500/5 transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-500 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:buildings-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-gray-900 mb-3 tracking-tight">Commercial &amp; Industrial</h3>
<p className="text-sm text-gray-500 leading-relaxed">
                        Tailored plumbing solutions for warehouses, factories, office buildings, and industrial facilities.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-gray-50 hover:bg-white border border-gray-100 hover:border-brand-100 hover:shadow-xl hover:shadow-brand-500/5 transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-accent-500 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:heart-pulse-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-gray-900 mb-3 tracking-tight">Aged Care</h3>
<p className="text-sm text-gray-500 leading-relaxed">
                        Sensitive, compliant maintenance and upgrades in live-in aged care environments.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-gray-50 hover:bg-white border border-gray-100 hover:border-brand-100 hover:shadow-xl hover:shadow-brand-500/5 transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-500 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:medical-kit-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-gray-900 mb-3 tracking-tight">Health Care</h3>
<p className="text-sm text-gray-500 leading-relaxed">
                        Reliable, hygienic plumbing services for clinics, hospitals, and medical centres.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-gray-50 hover:bg-white border border-gray-100 hover:border-brand-100 hover:shadow-xl hover:shadow-brand-500/5 transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-accent-500 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:city-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-gray-900 mb-3 tracking-tight">Strata Maintenance</h3>
<p className="text-sm text-gray-500 leading-relaxed">
                        Responsive and scheduled plumbing support for residential and mixed-use strata properties.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-50 border-t border-brand-100">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end gap-12">
<div className="max-w-xl">
<h2 className="text-3xl md:text-4xl font-medium text-gray-900 tracking-tight mb-4">
                        Ready to work with Melbourne's trusted experts?
                    </h2>
<p className="text-gray-600">
                        Contact us today for a consultation or quote.
                    </p>
</div>
<div className="flex flex-wrap gap-4">
<a className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:border-brand-300 text-gray-900 text-sm font-medium px-6 py-3 rounded-full transition-all shadow-sm hover:shadow-md" href="https://kamaraplumbing.com.au/contact-us">
                        Get in Touch
                        <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<a className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white text-sm font-medium px-6 py-3 rounded-full transition-all shadow-sm hover:shadow-md" href="mailto:info@kamaraplumbing.com.au">
                        Email Us
                        <iconify-icon icon="solar:letter-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>
<div className="mt-16 pt-12 border-t border-brand-200/50">
<img alt="Accreditations" className="h-12 w-auto opacity-70 grayscale hover:grayscale-0 transition-all duration-500" src="https://kamaraplumbing.com.au/wp-content/uploads/2021/12/logos.png"/>
</div>
</div>
</section>

<footer className="bg-gray-900 text-gray-400 py-16">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

<div className="space-y-6">
<img alt="Kamara Plumbing" className="h-10 w-auto brightness-0 invert opacity-90" src="https://kamaraplumbing.com.au/wp-content/uploads/2021/11/kamara.png"/>
<p className="text-sm leading-relaxed max-w-xs text-gray-500">
                        Waterman Offices Hub<br/>
                        Level 2 Blackburn Square Shopping Centre<br/>
                        66-104 Springfield Road, Blackburn North,<br/>
                        VIC, 3130, Australia
                    </p>
<div className="flex gap-4">
<a className="text-gray-400 hover:text-white transition-colors" href="https://www.instagram.com/kamara.plumbing/">
<iconify-icon icon="solar:camera-linear" width="20"></iconify-icon>
</a>
<a className="text-gray-400 hover:text-white transition-colors" href="https://www.linkedin.com">
<iconify-icon icon="brandico:linkedin-rect" width="20"></iconify-icon>
</a>
</div>
</div>

<div>
<h4 className="text-white font-medium mb-6">Contact</h4>
<ul className="space-y-4 text-sm">
<li>
<p className="text-xs uppercase tracking-wider text-gray-600 mb-1">Phone</p>
<a className="text-gray-300 hover:text-white transition-colors" href="tel:0448773949">0448 773 949</a>
</li>
<li>
<p className="text-xs uppercase tracking-wider text-gray-600 mb-1">Email</p>
<a className="text-gray-300 hover:text-white transition-colors" href="mailto:info@kamaraplumbing.com.au">info@kamaraplumbing.com.au</a>
</li>
<li>
<p className="text-xs uppercase tracking-wider text-gray-600 mb-1">ABN</p>
<span className="text-gray-300">95 853 522 065</span>
</li>
</ul>
</div>

<div>
<h4 className="text-white font-medium mb-6">Company</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="https://kamaraplumbing.com.au/">Home</a></li>
<li><a className="hover:text-white transition-colors" href="https://kamaraplumbing.com.au/about">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="https://kamaraplumbing.com.au/our-services">Our Services</a></li>
<li><a className="hover:text-white transition-colors" href="https://kamaraplumbing.com.au/quality-assurance">Quality Assurance</a></li>
<li><a className="hover:text-white transition-colors" href="https://kamaraplumbing.com.au/environmental-management">Environmental Management</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-medium mb-6">Explore</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors flex items-center gap-2" href="#">Careers <span className="text-[10px] bg-gray-800 text-gray-300 px-2 py-0.5 rounded-full">Soon</span></a></li>
<li><a className="hover:text-white transition-colors" href="https://kamaraplumbing.com.au/your-experts">Trusted By</a></li>
<li><a className="hover:text-white transition-colors" href="https://kamaraplumbing.com.au/contact-us">Get in Touch</a></li>
</ul>
</div>
</div>
<div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
<p>© 2025 Kamara Plumbing. All rights reserved.</p>
<p>Designed with precision.</p>
</div>
</div>
</footer>


    </>
  );
}
