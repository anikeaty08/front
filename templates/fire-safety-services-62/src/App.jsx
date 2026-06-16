import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
navy: '#0F172A',
orange: {
500: '#F97316',
600: '#EA580C',
},
slate: {
850: '#152035', // Slightly lighter than navy for cards
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
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
      

<nav className="fixed w-full z-50 top-0 start-0 border-b border-white/5 bg-[#0F172A]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-6 py-4">
<a className="flex items-center space-x-2 rtl:space-x-reverse" href="#">
<div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center text-white">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="self-center text-xl font-medium whitespace-nowrap text-white tracking-tight">SAFE<span className="text-orange-500">CORP</span></span>
</a>
<div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
<button className="text-white bg-white/10 hover:bg-white/20 focus:ring-4 focus:outline-none focus:ring-orange-500/30 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-all duration-200" type="button">
                    Get Quote
                </button>
<button className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600" data-collapse-toggle="navbar-sticky" type="button">
<span className="sr-only">Open main menu</span>
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
<div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
<li><a aria-current="page" className="block py-2 px-3 text-white rounded md:bg-transparent md:text-orange-500 md:p-0" href="#">Home</a></li>
<li><a className="block py-2 px-3 text-slate-300 rounded hover:bg-gray-800 md:hover:bg-transparent md:hover:text-white md:p-0 transition-colors" href="#about">About</a></li>
<li><a className="block py-2 px-3 text-slate-300 rounded hover:bg-gray-800 md:hover:bg-transparent md:hover:text-white md:p-0 transition-colors" href="#services">Services</a></li>
<li><a className="block py-2 px-3 text-slate-300 rounded hover:bg-gray-800 md:hover:bg-transparent md:hover:text-white md:p-0 transition-colors" href="#projects">Projects</a></li>
</ul>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-xs font-medium uppercase tracking-wide">
<span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
                        ISO 9001:2015 Certified
                    </div>
<h1 className="text-5xl lg:text-7xl font-semibold text-white tracking-tight leading-[1.1]">
                        Best Fire &amp; Safety <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Company in India</span>
</h1>
<p className="text-lg text-slate-400 max-w-lg leading-relaxed">
                        With over 25 years experience in fire safety, ELV and security solutions. We engineer safety for the industries of tomorrow.
                    </p>
<div className="flex flex-wrap gap-4 pt-4">
<a className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-orange-500 rounded-lg hover:bg-orange-600 transition-all duration-300 focus:ring-4 focus:ring-orange-500/30" href="#contact">
                            Contact Us
                        </a>
<a className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white border border-white/20 rounded-lg hover:bg-white/5 transition-all duration-300 group" href="#projects">
                            Our Projects
                            <iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
</div>

<div className="relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
<div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-white/10">
<img alt="Fire Safety Engineer" className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-80"></div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-slate-850/50 backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="flex flex-col items-center md:items-start space-y-1">
<span className="text-3xl lg:text-4xl font-semibold text-white tracking-tight">25+</span>
<span className="text-sm text-slate-400 font-medium">Years of Excellence</span>
</div>
<div className="flex flex-col items-center md:items-start space-y-1">
<span className="text-3xl lg:text-4xl font-semibold text-white tracking-tight">500+</span>
<span className="text-sm text-slate-400 font-medium">Projects Done</span>
</div>
<div className="flex flex-col items-center md:items-start space-y-1">
<span className="text-3xl lg:text-4xl font-semibold text-white tracking-tight">300+</span>
<span className="text-sm text-slate-400 font-medium">Happy Clients</span>
</div>
<div className="flex flex-col items-center md:items-start space-y-1">
<span className="text-3xl lg:text-4xl font-semibold text-orange-500 tracking-tight">24/7</span>
<span className="text-sm text-slate-400 font-medium">Emergency Support</span>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="relative order-2 lg:order-1">
<div className="relative rounded-2xl overflow-hidden border border-white/10">
<img alt="Engineering Team" className="w-full h-full object-cover opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>

<div className="absolute -bottom-6 -right-6 bg-[#0F172A] border border-white/10 p-6 rounded-xl shadow-2xl hidden md:block">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500">
<iconify-icon icon="solar:medal-ribbon-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<div>
<p className="text-white font-medium">Market Leader</p>
<p className="text-xs text-slate-400">Since 1999</p>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2 space-y-6">
<h2 className="text-3xl lg:text-4xl font-semibold text-white tracking-tight">25 Years of Excellence in Fire Safety &amp; ELV</h2>
<p className="text-slate-400 leading-relaxed">
                        We are committed to delivering world-class safety solutions. From initial consultation to final installation and maintenance, our expertise ensures your assets and people are protected with the highest standards of reliability.
                    </p>
<ul className="space-y-3 pt-2">
<li className="flex items-center gap-3 text-slate-300">
<iconify-icon className="text-orange-500 flex-shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5" width="22"></iconify-icon>
                            Dedicated to saving lives with precision engineering
                        </li>
<li className="flex items-center gap-3 text-slate-300">
<iconify-icon className="text-orange-500 flex-shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5" width="22"></iconify-icon>
                            24/7 available to serve and support operations
                        </li>
</ul>
<div className="flex gap-4 pt-6">
<button className="text-white bg-slate-800 hover:bg-slate-700 font-medium rounded-lg text-sm px-6 py-3 transition-colors border border-white/10">
                            Our Products
                        </button>
<button className="flex items-center gap-2 text-orange-500 hover:text-orange-400 font-medium text-sm px-4 py-3 transition-colors">
<iconify-icon icon="solar:file-download-linear" strokeWidth="1.5" width="20"></iconify-icon>
                            Download Brochure
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-850/30" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Core Services</h2>
<p className="text-slate-400 max-w-xl">Comprehensive protection and technology solutions tailored for modern infrastructure.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="glass-card p-8 rounded-2xl hover:border-orange-500/30 transition-all duration-300 group">
<div className="w-14 h-14 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-500 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:fire-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Fire Safety Systems</h3>
<p className="text-sm text-slate-400 leading-relaxed">Advanced detection, alarm, and suppression systems designed to respond instantly.</p>
</div>

<div className="glass-card p-8 rounded-2xl hover:border-orange-500/30 transition-all duration-300 group">
<div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Security &amp; Surveillance</h3>
<p className="text-sm text-slate-400 leading-relaxed">State-of-the-art CCTV, access control, and perimeter security for total peace of mind.</p>
</div>

<div className="glass-card p-8 rounded-2xl hover:border-orange-500/30 transition-all duration-300 group">
<div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:videocamera-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Audio Visual (AV)</h3>
<p className="text-sm text-slate-400 leading-relaxed">Integrated AV solutions for boardrooms, auditoriums, and public address systems.</p>
</div>

<div className="glass-card p-8 rounded-2xl hover:border-orange-500/30 transition-all duration-300 group">
<div className="w-14 h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:server-square-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">ICT &amp; Cabling</h3>
<p className="text-sm text-slate-400 leading-relaxed">Structured cabling and networking infrastructure to keep your business connected.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="flex items-start gap-4">
<div className="flex-shrink-0 mt-1">
<iconify-icon className="text-orange-500" icon="solar:verified-check-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1">Reliable Brand</h4>
<p className="text-sm text-slate-500">Trusted by over 300+ major corporate clients.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="flex-shrink-0 mt-1">
<iconify-icon className="text-orange-500" icon="solar:user-hand-up-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1">Experienced Engineers</h4>
<p className="text-sm text-slate-500">Highly qualified team with decades of field experience.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="flex-shrink-0 mt-1">
<iconify-icon className="text-orange-500" icon="solar:settings-minimalistic-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1">End-to-End Control</h4>
<p className="text-sm text-slate-500">From design to maintenance, we handle it all.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="flex-shrink-0 mt-1">
<iconify-icon className="text-orange-500" icon="solar:phone-calling-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1">24/7 Support</h4>
<p className="text-sm text-slate-500">Emergency call support whenever you need us.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0B1120]" id="projects">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-2">Major Projects</h2>
<p className="text-slate-400">Showcasing our technical expertise across industries.</p>
</div>

<div className="flex flex-wrap gap-2">
<button className="px-4 py-1.5 rounded-full bg-orange-500 text-white text-sm font-medium">All</button>
<button className="px-4 py-1.5 rounded-full border border-white/10 text-slate-400 hover:text-white hover:bg-white/5 text-sm font-medium transition-colors">Safety</button>
<button className="px-4 py-1.5 rounded-full border border-white/10 text-slate-400 hover:text-white hover:bg-white/5 text-sm font-medium transition-colors">Security</button>
<button className="px-4 py-1.5 rounded-full border border-white/10 text-slate-400 hover:text-white hover:bg-white/5 text-sm font-medium transition-colors">AV</button>
<button className="px-4 py-1.5 rounded-full border border-white/10 text-slate-400 hover:text-white hover:bg-white/5 text-sm font-medium transition-colors">ICT</button>
</div>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="group relative overflow-hidden rounded-2xl aspect-video cursor-pointer">
<img alt="Mall Project" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8">
<span className="text-orange-500 text-xs font-semibold uppercase tracking-wider mb-2 block">Shopping Mall</span>
<h3 className="text-2xl font-semibold text-white tracking-tight">Lulu International Expansion</h3>
<p className="text-slate-400 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">Complete Fire Alarm &amp; PA System Integration</p>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl aspect-video cursor-pointer">
<img alt="Factory Project" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8">
<span className="text-orange-500 text-xs font-semibold uppercase tracking-wider mb-2 block">Industrial</span>
<h3 className="text-2xl font-semibold text-white tracking-tight">TechPark Data Center</h3>
<p className="text-slate-400 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">Access Control &amp; Biometric Security Grid</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-white tracking-tight">Industries We Serve</h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
<div className="flex flex-col items-center justify-center p-6 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
<iconify-icon className="text-slate-300 mb-3" icon="solar:shop-linear" strokeWidth="1.5" width="32"></iconify-icon>
<span className="text-sm font-medium text-slate-300">Malls</span>
</div>
<div className="flex flex-col items-center justify-center p-6 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
<iconify-icon className="text-slate-300 mb-3" icon="solar:hospital-linear" strokeWidth="1.5" width="32"></iconify-icon>
<span className="text-sm font-medium text-slate-300">Hospitals</span>
</div>
<div className="flex flex-col items-center justify-center p-6 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
<iconify-icon className="text-slate-300 mb-3" icon="solar:factory-linear" strokeWidth="1.5" width="32"></iconify-icon>
<span className="text-sm font-medium text-slate-300">Factories</span>
</div>
<div className="flex flex-col items-center justify-center p-6 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
<iconify-icon className="text-slate-300 mb-3" icon="solar:buildings-2-linear" strokeWidth="1.5" width="32"></iconify-icon>
<span className="text-sm font-medium text-slate-300">Residential</span>
</div>
<div className="flex flex-col items-center justify-center p-6 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
<iconify-icon className="text-slate-300 mb-3" icon="solar:box-linear" strokeWidth="1.5" width="32"></iconify-icon>
<span className="text-sm font-medium text-slate-300">Warehouses</span>
</div>
<div className="flex flex-col items-center justify-center p-6 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
<iconify-icon className="text-slate-300 mb-3" icon="solar:square-academic-cap-linear" strokeWidth="1.5" width="32"></iconify-icon>
<span className="text-sm font-medium text-slate-300">Schools</span>
</div>
</div>
</div>
</section>

<section className="py-12 border-t border-white/5 bg-slate-900">
<div className="max-w-7xl mx-auto px-6 overflow-hidden">
<p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-500 mb-8">Trusted By Industry Leaders</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">

<h3 className="text-xl font-bold text-white tracking-tight">ADANI</h3>
<h3 className="text-xl font-bold text-white tracking-tight">TATA</h3>
<h3 className="text-xl font-bold text-white tracking-tight">RELIANCE</h3>
<h3 className="text-xl font-bold text-white tracking-tight">L&amp;T</h3>
<h3 className="text-xl font-bold text-white tracking-tight">INFOSYS</h3>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="absolute inset-0 bg-orange-600/5"></div>
<div className="max-w-3xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">Let’s Talk About Your Project</h2>
<p className="text-lg text-slate-400 mb-10">Ensure safety and compliance for your infrastructure. Our experts are ready to assist you.</p>
<a className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-4 rounded-xl text-lg transition-all shadow-lg shadow-orange-500/20" href="#">
<iconify-icon icon="solar:chat-round-dots-linear" strokeWidth="1.5" width="24"></iconify-icon>
                Chat on WhatsApp
            </a>
</div>
</section>

<footer className="bg-[#0B1120] border-t border-white/5 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<a className="flex items-center space-x-2 mb-6" href="#">
<div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center text-white">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-xl font-medium text-white tracking-tight">SAFE<span className="text-orange-500">CORP</span></span>
</a>
<p className="text-sm text-slate-500 leading-relaxed">
                        Leading provider of fire safety, security, and ELV solutions committed to protecting lives and assets.
                    </p>
</div>
<div>
<h4 className="text-white font-medium mb-4">Services</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-orange-500 transition-colors" href="#">Fire Systems</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Surveillance</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Access Control</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Maintenance</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Company</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-orange-500 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Projects</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Contact</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li className="flex items-center gap-2">
<iconify-icon icon="solar:letter-linear" width="16"></iconify-icon>
                            info@safecorp.in
                        </li>
<li className="flex items-center gap-2">
<iconify-icon icon="solar:phone-calling-linear" width="16"></iconify-icon>
                            +91 98765 43210
                        </li>
<li className="flex items-center gap-2">
<iconify-icon icon="solar:map-point-linear" width="16"></iconify-icon>
                            Kochi, Kerala, India
                        </li>
</ul>
<div className="flex gap-4 mt-6">
<a className="text-slate-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:linkedin-linear" width="20"></iconify-icon></a>
</div>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-600">© 2023 SafeCorp Solutions. All rights reserved.</p>
<div className="flex gap-6 text-xs text-slate-600">
<a className="hover:text-slate-400" href="#">Privacy Policy</a>
<a className="hover:text-slate-400" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
