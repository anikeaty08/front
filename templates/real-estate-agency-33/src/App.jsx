import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Mobile Menu Logic
    const toggleBtn = document.getElementById('mobile-menu-toggle');
    const closeBtn = document.getElementById('close-menu');
    const menu = document.getElementById('mobile-menu');
    const menuLinks = menu.querySelectorAll('a');

    function toggleMenu() {
        if (menu.classList.contains('opacity-0')) {
            menu.classList.remove('opacity-0', 'pointer-events-none');
        } else {
            menu.classList.add('opacity-0', 'pointer-events-none');
        }
    }

    toggleBtn.addEventListener('click', toggleMenu);
    closeBtn.addEventListener('click', toggleMenu);
    
    // Close menu when clicking a link
    menuLinks.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-[500] backdrop-blur-md bg-[#0a0a0a]/95 border-b border-white/10 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">

<div className="flex items-center gap-3">
<div className="w-10 h-10 border border-[#C5A059] rounded-none flex items-center justify-center text-[#C5A059]">
<iconify-icon icon="solar:home-smile-linear" width="20"></iconify-icon>
</div>
<div className="flex flex-col leading-none">
<span className="text-white font-serif text-lg tracking-tight">Universal Home</span>
<span className="text-[#C5A059] text-xs uppercase tracking-widest">Realty LLC</span>
</div>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-gray-300 hover:text-white transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-gray-300 hover:text-white transition-colors" href="#investors">Investors</a>
<a className="text-sm font-medium text-gray-300 hover:text-white transition-colors" href="#portfolio">Portfolio</a>
<a className="px-6 py-2 border border-[#C5A059] text-[#C5A059] text-sm hover:bg-[#C5A059] hover:text-black transition-all duration-300" href="#contact">
                Contact Cynthia
            </a>
</div>

<button className="md:hidden text-white text-2xl" id="mobile-menu-toggle">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</nav>

<div className="fixed inset-0 z-[400] bg-[#0a0a0a] flex flex-col justify-center items-center gap-8 opacity-0 pointer-events-none transition-opacity duration-300 md:hidden" id="mobile-menu">
<a className="text-3xl font-serif text-white hover:text-[#C5A059]" href="#services">Services</a>
<a className="text-3xl font-serif text-white hover:text-[#C5A059]" href="#portfolio">Portfolio</a>
<a className="text-3xl font-serif text-[#C5A059]" href="#contact">Contact Us</a>
<button className="absolute top-8 right-6 text-white text-3xl" id="close-menu">
<iconify-icon icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C5A059]/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="flex flex-col items-start z-10">
<div className="animate-enter inline-flex items-center gap-2 px-3 py-1 border border-[#C5A059]/30 rounded-full bg-[#C5A059]/10 mb-8">
<iconify-icon className="text-[#C5A059]" icon="solar:map-point-linear"></iconify-icon>
<span className="text-xs uppercase tracking-widest text-[#6b5a35] font-semibold">Serving Metro Atlanta</span>
</div>
<h1 className="animate-enter delay-100 text-5xl md:text-6xl lg:text-7xl text-gray-900 font-medium leading-[1.1] tracking-tight mb-6">
                Real estate expertise <br/> built on 
                <span className="font-serif italic text-[#C5A059]">trust.</span>
</h1>
<p className="animate-enter delay-200 text-lg text-gray-600 leading-relaxed max-w-lg mb-10">
                Hands-on guidance for buyers, sellers, investors, and landlords. We deliver strategic results with transparency and care.
            </p>
<div className="animate-enter delay-300 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="bg-[#C5A059] text-white px-8 py-4 text-sm font-semibold tracking-wide hover:bg-black transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#C5A059]/20" href="#contact">
                    Contact Us
                    <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="border border-gray-300 text-gray-900 px-8 py-4 text-sm font-semibold tracking-wide hover:border-black hover:bg-black hover:text-white transition-colors flex items-center justify-center" href="#services">
                    View Services
                </a>
</div>
<p className="animate-enter delay-400 text-xs text-gray-500 mt-6 tracking-wide">
                Residential Sales • Leasing • Property Management • Investor Support
            </p>
</div>

<div className="relative animate-enter delay-200 hidden lg:block">
<div className="relative z-10 w-full aspect-[4/5] overflow-hidden shadow-2xl">
<img alt="Luxury Interior" className="w-full h-full object-cover opacity-100 hover:scale-105 transition-transform duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute bottom-8 left-[-40px] bg-white p-6 border-l-4 border-[#C5A059] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] max-w-xs animate-[slideUpFade_1s_1s_both]">
<div className="flex items-center gap-3 mb-3">
<div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-[#C5A059]">
<iconify-icon icon="solar:key-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-gray-900 text-sm font-bold">Just Listed</p>
<p className="text-xs text-gray-500">Buckhead, Atlanta</p>
</div>
</div>
<div className="h-[1px] w-full bg-gray-100 my-3"></div>
<div className="flex justify-between items-center">
<span className="text-xs text-gray-500">Status</span>
<span className="text-[#C5A059] text-xs font-bold uppercase tracking-wider">Active</span>
</div>
</div>
</div>

<div className="absolute top-6 -right-6 w-full h-full border border-gray-200 -z-10"></div>
</div>
</div>
</header>

<section className="border-y border-gray-100 bg-gray-50/50">
<div className="max-w-7xl mx-auto px-6 md:px-12 py-10">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-center">
<div className="flex items-center gap-3 opacity-70 hover:opacity-100 transition-opacity">
<iconify-icon className="text-[#C5A059]" icon="solar:shield-check-linear" width="24"></iconify-icon>
<span className="text-xs md:text-sm text-gray-600 font-semibold">Transparent Guidance</span>
</div>
<div className="flex items-center gap-3 opacity-70 hover:opacity-100 transition-opacity">
<iconify-icon className="text-[#C5A059]" icon="solar:hand-shake-linear" width="24"></iconify-icon>
<span className="text-xs md:text-sm text-gray-600 font-semibold">Strong Negotiation</span>
</div>
<div className="flex items-center gap-3 opacity-70 hover:opacity-100 transition-opacity">
<iconify-icon className="text-[#C5A059]" icon="solar:document-add-linear" width="24"></iconify-icon>
<span className="text-xs md:text-sm text-gray-600 font-semibold">Smooth Closing</span>
</div>
<div className="flex items-center gap-3 opacity-70 hover:opacity-100 transition-opacity">
<iconify-icon className="text-[#C5A059]" icon="solar:graph-up-linear" width="24"></iconify-icon>
<span className="text-xs md:text-sm text-gray-600 font-semibold">Investor Strategy</span>
</div>
<div className="flex items-center gap-3 opacity-70 hover:opacity-100 transition-opacity hidden lg:flex">
<iconify-icon className="text-[#C5A059]" icon="solar:home-2-linear" width="24"></iconify-icon>
<span className="text-xs md:text-sm text-gray-600 font-semibold">Full Management</span>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6 md:px-12" id="services">
<div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
<div className="max-w-xl">
<span className="text-[#C5A059] text-xs font-bold uppercase tracking-widest mb-4 block">Our Expertise</span>
<h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 font-medium tracking-tight leading-[1.1]">
                Comprehensive solutions for <br/>
<span className="font-serif italic text-gray-500">every stage.</span>
</h2>
</div>
<a className="group flex items-center gap-2 text-sm font-bold text-gray-900 border-b border-gray-200 pb-1 hover:border-[#C5A059] transition-colors" href="#contact">
            Talk to an advisor
            <iconify-icon className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-white p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-200/50 hover:border-gray-200 transition-all duration-500 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent transform -translate-x-full group-hover:translate-x-100 transition-transform duration-1000"></div>
<div className="w-12 h-12 bg-gray-50 rounded-none flex items-center justify-center text-gray-900 mb-6 group-hover:bg-[#C5A059] group-hover:text-white transition-colors">
<iconify-icon icon="solar:home-smile-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-gray-900 font-serif mb-3">Residential Sales</h3>
<p className="text-sm text-gray-500 leading-relaxed mb-6">Expert pricing strategy, sharp negotiations, and closing coordination for buyers and sellers.</p>
<span className="text-xs text-[#C5A059] uppercase tracking-wider font-bold flex items-center gap-2">
                Learn More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>

<div className="group bg-white p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-200/50 hover:border-gray-200 transition-all duration-500 relative overflow-hidden">
<div className="w-12 h-12 bg-gray-50 rounded-none flex items-center justify-center text-gray-900 mb-6 group-hover:bg-[#C5A059] group-hover:text-white transition-colors">
<iconify-icon icon="solar:key-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-gray-900 font-serif mb-3">Leasing Services</h3>
<p className="text-sm text-gray-500 leading-relaxed mb-6">Comprehensive marketing, rigorous tenant screening, lease preparation, and execution.</p>
<span className="text-xs text-[#C5A059] uppercase tracking-wider font-bold flex items-center gap-2">
                Learn More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>

<div className="group bg-white p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-200/50 hover:border-gray-200 transition-all duration-500 relative overflow-hidden">
<div className="w-12 h-12 bg-gray-50 rounded-none flex items-center justify-center text-gray-900 mb-6 group-hover:bg-[#C5A059] group-hover:text-white transition-colors">
<iconify-icon icon="solar:clipboard-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-gray-900 font-serif mb-3">Property Management</h3>
<p className="text-sm text-gray-500 leading-relaxed mb-6">Rent collection, maintenance coordination, vendor management, and detailed owner reporting.</p>
<span className="text-xs text-[#C5A059] uppercase tracking-wider font-bold flex items-center gap-2">
                Learn More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>

<div className="group bg-white p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-200/50 hover:border-gray-200 transition-all duration-500 relative overflow-hidden">
<div className="w-12 h-12 bg-gray-50 rounded-none flex items-center justify-center text-gray-900 mb-6 group-hover:bg-[#C5A059] group-hover:text-white transition-colors">
<iconify-icon icon="solar:graph-new-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-gray-900 font-serif mb-3">Investor Services</h3>
<p className="text-sm text-gray-500 leading-relaxed mb-6">Strategic acquisitions, rental analysis, market value assessments, and portfolio strategy.</p>
<span className="text-xs text-[#C5A059] uppercase tracking-wider font-bold flex items-center gap-2">
                Learn More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>

<div className="group bg-white p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-200/50 hover:border-gray-200 transition-all duration-500 relative overflow-hidden">
<div className="w-12 h-12 bg-gray-50 rounded-none flex items-center justify-center text-gray-900 mb-6 group-hover:bg-[#C5A059] group-hover:text-white transition-colors">
<iconify-icon icon="solar:file-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-gray-900 font-serif mb-3">Transaction Coord.</h3>
<p className="text-sm text-gray-500 leading-relaxed mb-6">Seamless contract-to-close compliance and communication with lenders and attorneys.</p>
<span className="text-xs text-[#C5A059] uppercase tracking-wider font-bold flex items-center gap-2">
                Learn More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>

<div className="group bg-white p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-200/50 hover:border-gray-200 transition-all duration-500 relative overflow-hidden">
<div className="w-12 h-12 bg-gray-50 rounded-none flex items-center justify-center text-gray-900 mb-6 group-hover:bg-[#C5A059] group-hover:text-white transition-colors">
<iconify-icon icon="solar:chart-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-gray-900 font-serif mb-3">Market Analysis</h3>
<p className="text-sm text-gray-500 leading-relaxed mb-6">Detailed CMAs, rental evaluations, pricing recommendations, and strategic consults.</p>
<span className="text-xs text-[#C5A059] uppercase tracking-wider font-bold flex items-center gap-2">
                Learn More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</div>
</section>

<section className="py-24 bg-gray-50 border-y border-gray-200">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl text-gray-900 font-medium tracking-tight mb-4">A seamless path to success</h2>
<p className="text-gray-500">Whether buying, selling, or investing, our process is designed for clarity.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[1px] bg-gradient-to-r from-transparent via-[#C5A059]/30 to-transparent z-0"></div>

<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-24 h-24 bg-white border border-[#C5A059]/30 rounded-full flex items-center justify-center mb-8 group-hover:border-[#C5A059] transition-colors duration-500 shadow-lg shadow-gray-200">
<span className="text-2xl font-serif text-[#C5A059]">01</span>
</div>
<h3 className="text-lg text-gray-900 font-bold mb-3">Tell Us Your Goal</h3>
<p className="text-sm text-gray-500 max-w-xs">We sit down to understand your specific needs, timeline, and financial objectives.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-24 h-24 bg-white border border-[#C5A059]/30 rounded-full flex items-center justify-center mb-8 group-hover:border-[#C5A059] transition-colors duration-500 shadow-lg shadow-gray-200">
<span className="text-2xl font-serif text-[#C5A059]">02</span>
</div>
<h3 className="text-lg text-gray-900 font-bold mb-3">We Build the Plan</h3>
<p className="text-sm text-gray-500 max-w-xs">Using market data and strategic insight, we craft a tailored roadmap for your property.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-24 h-24 bg-white border border-[#C5A059]/30 rounded-full flex items-center justify-center mb-8 group-hover:border-[#C5A059] transition-colors duration-500 shadow-lg shadow-gray-200">
<span className="text-2xl font-serif text-[#C5A059]">03</span>
</div>
<h3 className="text-lg text-gray-900 font-bold mb-3">Execute &amp; Close</h3>
<p className="text-sm text-gray-500 max-w-xs">We handle negotiations, compliance, and coordination for a smooth, stress-free closing.</p>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6 md:px-12" id="portfolio">
<div className="flex justify-between items-end mb-12">
<h2 className="text-3xl md:text-4xl text-gray-900 font-medium tracking-tight">Recent Highlights</h2>
<a className="hidden md:flex items-center gap-2 text-[#C5A059] text-xs uppercase tracking-widest hover:text-black transition-colors font-bold" href="#">
            View All Listings <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group cursor-pointer">
<div className="relative aspect-[4/5] overflow-hidden mb-4 shadow-sm">
<img alt="Property 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 text-xs text-gray-900 uppercase tracking-wider font-semibold shadow-sm">Sold</div>
</div>
<h3 className="text-gray-900 text-lg font-serif">Midtown Modern Condo</h3>
<p className="text-gray-500 text-sm mt-1">Atlanta, GA • Residential Sale</p>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/5] overflow-hidden mb-4 shadow-sm">
<img alt="Property 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-[#C5A059] px-3 py-1 text-xs text-white uppercase tracking-wider font-semibold shadow-sm">Leased</div>
</div>
<h3 className="text-gray-900 text-lg font-serif">Buckhead Estate</h3>
<p className="text-gray-500 text-sm mt-1">Buckhead, GA • Luxury Lease</p>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/5] overflow-hidden mb-4 shadow-sm">
<img alt="Property 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-black/80 text-white px-3 py-1 text-xs uppercase tracking-wider font-semibold shadow-sm">Managed</div>
</div>
<h3 className="text-gray-900 text-lg font-serif">Vinings Portfolio</h3>
<p className="text-gray-500 text-sm mt-1">Vinings, GA • Property Management</p>
</div>
</div>
</section>

<section className="py-24 bg-gray-50 border-y border-gray-200">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<h2 className="text-3xl md:text-4xl text-gray-900 font-medium text-center mb-16 font-serif italic">Client Experiences</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all relative">
<iconify-icon className="text-[#C5A059]/20 absolute top-6 right-6" icon="solar:quote-up-bold" width="48"></iconify-icon>
<p className="text-gray-600 text-sm leading-relaxed mb-6 relative z-10">
                    "Cynthia's strategic guidance was invaluable. She managed our rental portfolio with such attention to detail that we finally have peace of mind."
                </p>
<div>
<p className="text-gray-900 font-bold text-sm">Sarah Jenkins</p>
<p className="text-xs text-[#C5A059] font-medium">Property Investor</p>
</div>
</div>

<div className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all relative">
<iconify-icon className="text-[#C5A059]/20 absolute top-6 right-6" icon="solar:quote-up-bold" width="48"></iconify-icon>
<p className="text-gray-600 text-sm leading-relaxed mb-6 relative z-10">
                    "We sold our home in record time. The transparency throughout the negotiation process made us feel confident in every decision."
                </p>
<div>
<p className="text-gray-900 font-bold text-sm">Michael &amp; Elena</p>
<p className="text-xs text-[#C5A059] font-medium">Home Sellers</p>
</div>
</div>

<div className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all relative">
<iconify-icon className="text-[#C5A059]/20 absolute top-6 right-6" icon="solar:quote-up-bold" width="48"></iconify-icon>
<p className="text-gray-600 text-sm leading-relaxed mb-6 relative z-10">
                    "As a first-time landlord, I didn't know where to start. Universal Home Realty handled everything from screening to lease execution."
                </p>
<div>
<p className="text-gray-900 font-bold text-sm">David Ross</p>
<p className="text-xs text-[#C5A059] font-medium">Landlord</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-4xl mx-auto px-6 md:px-12 relative" id="contact">

<div className="absolute inset-0 bg-gradient-to-b from-[#C5A059]/5 to-transparent pointer-events-none"></div>
<div className="bg-white border border-gray-200 p-8 md:p-12 shadow-2xl shadow-gray-200/50 relative z-10">
<div className="text-center mb-10">
<span className="text-[#C5A059] text-xs font-bold uppercase tracking-widest mb-3 block">Get in Touch</span>
<h2 className="text-3xl md:text-4xl text-gray-900 font-medium mb-4">Let's discuss your property goals.</h2>
<p className="text-gray-500 text-sm">No pressure. Your information stays private.</p>
</div>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="flex flex-col gap-2">
<label className="text-xs text-gray-500 uppercase tracking-wide font-semibold">Name</label>
<input className="custom-input w-full bg-gray-50 border border-gray-200 text-gray-900 px-4 py-3 text-sm focus:outline-none transition-colors" placeholder="Full Name" type="text"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs text-gray-500 uppercase tracking-wide font-semibold">Phone</label>
<input className="custom-input w-full bg-gray-50 border border-gray-200 text-gray-900 px-4 py-3 text-sm focus:outline-none transition-colors" placeholder="(555) 000-0000" type="tel"/>
</div>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs text-gray-500 uppercase tracking-wide font-semibold">Email</label>
<input className="custom-input w-full bg-gray-50 border border-gray-200 text-gray-900 px-4 py-3 text-sm focus:outline-none transition-colors" placeholder="email@address.com" type="email"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs text-gray-500 uppercase tracking-wide font-semibold">I am a...</label>
<select className="custom-input w-full bg-gray-50 border border-gray-200 text-gray-900 px-4 py-3 text-sm focus:outline-none transition-colors appearance-none">
<option>Buyer</option>
<option>Seller</option>
<option>Investor</option>
<option>Landlord</option>
<option>Tenant</option>
</select>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs text-gray-500 uppercase tracking-wide font-semibold">Message</label>
<textarea className="custom-input w-full bg-gray-50 border border-gray-200 text-gray-900 px-4 py-3 text-sm focus:outline-none transition-colors" placeholder="How can we help you?" rows="4"></textarea>
</div>
<button className="w-full bg-[#C5A059] text-white font-semibold py-4 text-sm tracking-wide hover:bg-black transition-all duration-300 shadow-md shadow-[#C5A059]/30" type="button">
                Get In Touch
            </button>
</form>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6 md:px-12 border-t border-gray-100">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<span className="text-[#C5A059] text-xs font-bold uppercase tracking-widest mb-3 block">Market Insights</span>
<h2 className="text-3xl text-gray-900 font-medium">Latest Real Estate News</h2>
</div>
<a className="px-6 py-3 border border-gray-300 text-gray-900 text-xs uppercase tracking-widest hover:bg-black hover:text-white hover:border-black transition-colors font-medium" href="#">
            Read the Blog
        </a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<article className="group cursor-pointer">
<div className="aspect-video bg-gray-100 mb-4 overflow-hidden shadow-sm">
<img alt="Blog 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<p className="text-[#C5A059] text-xs mb-2 font-bold">Market Trends</p>
<h3 className="text-gray-900 text-lg font-serif group-hover:text-[#C5A059] transition-colors">Atlanta Market Update: Q3 2024</h3>
</article>

<article className="group cursor-pointer">
<div className="aspect-video bg-gray-100 mb-4 overflow-hidden shadow-sm">
<img alt="Blog 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<p className="text-[#C5A059] text-xs mb-2 font-bold">Investing</p>
<h3 className="text-gray-900 text-lg font-serif group-hover:text-[#C5A059] transition-colors">Top Neighborhoods for Rental Yields</h3>
</article>

<article className="group cursor-pointer">
<div className="aspect-video bg-gray-100 mb-4 overflow-hidden shadow-sm">
<img alt="Blog 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<p className="text-[#C5A059] text-xs mb-2 font-bold">Sellers</p>
<h3 className="text-gray-900 text-lg font-serif group-hover:text-[#C5A059] transition-colors">Staging Tips for Luxury Homes</h3>
</article>
</div>
</section>

<section className="py-24 bg-[#C5A059]">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-5xl text-white font-medium mb-8 font-serif">Ready for a smoother real estate experience?</h2>
<a className="inline-block bg-white text-black px-10 py-5 text-sm font-semibold tracking-wide hover:scale-105 transition-transform shadow-xl" href="#contact">
            Contact Cynthia
        </a>
</div>
</section>

<footer className="bg-[#050505] pt-24 pb-12 px-6 md:px-12 border-t border-gray-900">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 border border-[#C5A059] flex items-center justify-center text-[#C5A059]">
<iconify-icon icon="solar:home-smile-linear"></iconify-icon>
</div>
<span className="text-white font-serif tracking-tight">Universal Home Realty</span>
</div>
<p className="text-gray-500 text-sm leading-relaxed">
                    Full-service brokerage specializing in residential sales, leasing, and property management across Metro Atlanta.
                </p>
</div>
<div>
<h4 className="text-white font-medium mb-6">Services</h4>
<ul className="space-y-4 text-sm text-gray-500">
<li><a className="hover:text-[#C5A059] transition-colors" href="#">Residential Sales</a></li>
<li><a className="hover:text-[#C5A059] transition-colors" href="#">Leasing Services</a></li>
<li><a className="hover:text-[#C5A059] transition-colors" href="#">Property Management</a></li>
<li><a className="hover:text-[#C5A059] transition-colors" href="#">Investor Support</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6">Company</h4>
<ul className="space-y-4 text-sm text-gray-500">
<li><a className="hover:text-[#C5A059] transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-[#C5A059] transition-colors" href="#">Contact</a></li>
<li><a className="hover:text-[#C5A059] transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-[#C5A059] transition-colors" href="#">Privacy Policy</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6">Contact</h4>
<ul className="space-y-4 text-sm text-gray-500">
<li className="flex items-center gap-3">
<iconify-icon className="text-[#C5A059]" icon="solar:map-point-linear"></iconify-icon>
                        Metro Atlanta, GA
                    </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#C5A059]" icon="solar:phone-linear"></iconify-icon>
                        (555) 123-4567
                    </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#C5A059]" icon="solar:letter-linear"></iconify-icon>
                        hello@universalhome.com
                    </li>
</ul>
<div className="flex gap-4 mt-6">
<a className="text-gray-500 hover:text-[#C5A059]" href="#"><iconify-icon icon="simple-icons:instagram" width="18"></iconify-icon></a>
<a className="text-gray-500 hover:text-[#C5A059]" href="#"><iconify-icon icon="simple-icons:linkedin" width="18"></iconify-icon></a>
<a className="text-gray-500 hover:text-[#C5A059]" href="#"><iconify-icon icon="simple-icons:facebook" width="18"></iconify-icon></a>
</div>
</div>
</div>
<div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
<p>© 2025 Universal Home Realty LLC. All rights reserved.</p>
<p>Real Estate Web Design by Social Grow</p>
</div>
</div>
</footer>


    </>
  );
}
