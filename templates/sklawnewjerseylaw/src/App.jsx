import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Header Scroll Effect
        const header = document.getElementById('main-header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('py-2');
                header.classList.remove('bg-[#050615]/80');
                header.classList.add('bg-[#050615]/95', 'shadow-lg');
            } else {
                header.classList.remove('py-2', 'bg-[#050615]/95', 'shadow-lg');
                header.classList.add('bg-[#050615]/80');
            }
        });

        // Mobile Menu Logic (Hidden by Default)
        const mobileTrigger = document.getElementById('mobile-menu-trigger');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobilePanel = document.getElementById('mobile-menu-panel');
        const mobileClose = document.getElementById('mobile-menu-close');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        function toggleMenu() {
            const isOpen = !mobileMenu.classList.contains('invisible');
            
            if (isOpen) {
                // Close
                mobileMenu.classList.add('opacity-0', 'invisible', 'pointer-events-none');
                mobileMenu.classList.remove('opacity-100', 'visible', 'pointer-events-auto');
                mobilePanel.classList.add('translate-x-full');
                document.body.style.overflow = '';
            } else {
                // Open
                mobileMenu.classList.remove('opacity-0', 'invisible', 'pointer-events-none');
                mobileMenu.classList.add('opacity-100', 'visible', 'pointer-events-auto');
                mobilePanel.classList.remove('translate-x-full');
                document.body.style.overflow = 'hidden';
            }
        }

        mobileTrigger.addEventListener('click', toggleMenu);
        mobileClose.addEventListener('click', toggleMenu);
        
        // Close menu when clicking a link
        mobileLinks.forEach(link => {
            link.addEventListener('click', toggleMenu);
        });

        // Close on backdrop click
        document.getElementById('mobile-menu-backdrop').addEventListener('click', toggleMenu);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 w-full h-screen -z-10">

<div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp', opacity: '0.4'}}></div>
<div className="absolute inset-0 bg-gradient-to-r from-[#050615] via-[#050615]/90 to-[#050615]/60"></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050615]/50 to-[#050615]"></div>
</div>

<header className="fixed transition-all duration-300 backdrop-blur-md z-50 w-full border-white/5 border-b top-0 bg-[#050615]/80" id="main-header">
<div className="lg:px-12 flex h-24 max-w-[1400px] mx-auto px-6 items-center justify-between">

<a className="flex-shrink-0 flex items-center gap-3 z-50" href="#">

<div className="flex flex-col">
<h1 className="font-serif text-2xl tracking-tight leading-none text-white font-medium">Shah &amp; <span className="text-[#C4A470] italic">Kishore</span></h1>
<span className="text-[9px] tracking-[0.2em] uppercase text-gray-400 mt-1">US Immigration Attorneys</span>
</div>
</a>

<nav className="hidden xl:flex flex-1 space-x-8 items-center justify-center ml-10">
<a className="text-[11px] hover:text-[#C4A470] transition-colors uppercase font-medium text-gray-300 tracking-widest" href="#about">About Us</a>
<div className="relative group">
<a className="text-[11px] hover:text-[#C4A470] transition-colors uppercase flex items-center gap-1 font-medium text-gray-300 tracking-widest py-6" href="#services">
                        Visas &amp; Services
                        <iconify-icon icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
</a>
</div>
<a className="text-[11px] hover:text-[#C4A470] transition-colors uppercase font-medium text-gray-300 tracking-widest" href="#resources">Resources</a>
<a className="text-[11px] hover:text-[#C4A470] transition-colors uppercase font-medium text-gray-300 tracking-widest" href="https://secure.lawpay.com/pages/shah-and-kishore/operating" target="_blank">Pay Online</a>
<a className="text-[11px] hover:text-[#C4A470] transition-colors uppercase font-medium text-gray-300 tracking-widest" href="#contact">Contact</a>
</nav>

<div className="hidden xl:flex items-center gap-6 justify-end">
<a className="flex items-center gap-2 text-white hover:text-[#C4A470] transition-colors" href="tel:3013150001">
<div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
<iconify-icon icon="solar:phone-calling-linear" width="14"></iconify-icon>
</div>
<span className="text-sm font-medium">301-315-0001</span>
</a>
<a className="inline-flex items-center justify-center text-[11px] hover:bg-gray-200 transition-colors uppercase font-semibold text-black tracking-widest bg-white rounded-sm pt-3 pr-6 pb-3 pl-6" href="#book">
                    Book Consultation
                </a>
</div>

<div className="xl:hidden text-white cursor-pointer ml-auto z-50 p-2" id="mobile-menu-trigger">
<iconify-icon height="28" icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</div>
</div>
</header>

<div className="fixed inset-0 z-[99999] pointer-events-none opacity-0 invisible transition-all duration-300 xl:hidden" id="mobile-menu">

<div className="absolute inset-0 bg-black/90 backdrop-blur-md" id="mobile-menu-backdrop"></div>

<div className="absolute top-0 right-0 h-full w-[300px] bg-[#0a0a0a] border-l border-white/10 transform translate-x-full transition-transform duration-300 flex flex-col" id="mobile-menu-panel">
<div className="flex justify-end p-6">
<div className="text-white cursor-pointer p-2" id="mobile-menu-close">
<iconify-icon icon="solar:close-circle-linear" width="32"></iconify-icon>
</div>
</div>
<nav className="flex flex-col px-8 space-y-6 mt-4">
<a className="mobile-link text-sm uppercase tracking-widest font-medium text-white border-b border-white/10 pb-4" href="#about">About Us</a>
<a className="mobile-link text-sm uppercase tracking-widest font-medium text-white border-b border-white/10 pb-4" href="#services">Immigration Services</a>
<a className="mobile-link text-sm uppercase tracking-widest font-medium text-white border-b border-white/10 pb-4" href="#resources">Resources</a>
<a className="mobile-link text-sm uppercase tracking-widest font-medium text-white border-b border-white/10 pb-4" href="https://secure.lawpay.com/pages/shah-and-kishore/operating">Make a Payment</a>
<a className="mobile-link text-sm uppercase tracking-widest font-medium text-white border-b border-white/10 pb-4" href="#contact">Contact Us</a>
</nav>
<div className="mt-auto p-8 space-y-4">
<a className="flex items-center gap-3 text-white mb-4" href="tel:3013150001">
<iconify-icon className="text-[#C4A470]" icon="solar:phone-calling-linear" width="20"></iconify-icon>
<span className="text-lg">301-315-0001</span>
</a>
<a className="mobile-link block text-center text-xs uppercase font-bold text-[#050615] tracking-widest bg-white hover:bg-gray-200 transition-colors rounded-sm py-4 w-full" href="#book">
                    Request Appointment
                </a>
</div>
</div>
</div>

<div className="relative z-10 flex flex-col">

<section className="min-h-screen flex items-center justify-center lg:px-12 px-6 pt-32 pb-20">
<div className="max-w-[1400px] w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
<div className="lg:col-span-8 flex flex-col">
<div className="mb-8 pl-1 flex items-center gap-3">
<span className="w-12 h-[1px] bg-[#C4A470]"></span>
<span className="text-[11px] tracking-[0.25em] text-[#C4A470] uppercase font-medium">
                            Celebrating 30 Years of Service
                        </span>
</div>
<h1 className="leading-[1.1] text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] text-white tracking-tight font-serif mb-8">
                        Engineering <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50 italic">Immigration Solutions.</span>
</h1>
<p className="text-base lg:text-lg text-gray-400 font-light leading-relaxed max-w-xl mb-10">
                        We offer more than sound legal advice, we offer a partner to share your vision. Specialized in Investment Visas, Employment Visas, and complex immigration matters.
                    </p>
<div className="flex flex-col sm:flex-row gap-5">
<a className="inline-flex items-center justify-center px-8 py-4 bg-[#C4A470] hover:bg-[#a38656] text-white text-[11px] uppercase tracking-[0.2em] font-medium transition-all duration-300 rounded-sm" href="#book">
                            Request Appointment
                        </a>
<a className="inline-flex items-center justify-center px-8 py-4 border border-white/20 hover:bg-white hover:text-black text-white text-[11px] uppercase tracking-[0.2em] font-medium transition-all duration-300 rounded-sm" href="tel:3013150001">
                            Call 301-315-0001
                        </a>
</div>
</div>

<div className="hidden lg:flex lg:col-span-4 flex-col justify-end space-y-8 border-l border-white/10 pl-10 pb-4">
<div className="group cursor-pointer">
<h3 className="text-white font-serif text-2xl mb-1 group-hover:text-[#C4A470] transition-colors">30+ Years</h3>
<p className="text-gray-500 text-xs uppercase tracking-widest">Experience</p>
</div>
<div className="group cursor-pointer">
<h3 className="text-white font-serif text-2xl mb-1 group-hover:text-[#C4A470] transition-colors">Rockville, MD</h3>
<p className="text-gray-500 text-xs uppercase tracking-widest">Primary Location</p>
</div>
<div className="group cursor-pointer">
<h3 className="text-white font-serif text-2xl mb-1 group-hover:text-[#C4A470] transition-colors">Specialized</h3>
<p className="text-gray-500 text-xs uppercase tracking-widest">In Business Immigration</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white text-[#050615]" id="services">
<div className="max-w-[1200px] mx-auto px-6">
<div className="text-center mb-20">
<span className="text-[10px] tracking-[0.25em] text-[#C4A470] uppercase font-medium block mb-4">Our Expertise</span>
<h2 className="text-4xl md:text-5xl font-serif text-[#050615] mb-6">Legal Practice Areas</h2>
<div className="w-16 h-[1px] bg-[#C4A470] mx-auto mb-6"></div>
<p className="text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
                        Comprehensive immigration strategies for investors, businesses, and families.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200">

<div className="bg-white p-12 group hover:bg-[#050615] hover:text-white transition-all duration-500">
<div className="w-12 h-12 rounded-full border border-gray-200 group-hover:border-[#C4A470] flex items-center justify-center text-[#C4A470] mb-8 transition-colors">
<iconify-icon icon="solar:graph-up-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-serif mb-4">Investment Visas</h3>
<ul className="space-y-2 mb-8 text-sm text-gray-500 group-hover:text-gray-400 font-light">
<li>• E-1 (Treaty Trader)</li>
<li>• E-2 (Treaty Investor)</li>
<li>• EB-5 Immigrant Investor</li>
</ul>
<span className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#C4A470] group-hover:text-white transition-colors">Learn More →</span>
</div>

<div className="bg-white p-12 group hover:bg-[#050615] hover:text-white transition-all duration-500">
<div className="w-12 h-12 rounded-full border border-gray-200 group-hover:border-[#C4A470] flex items-center justify-center text-[#C4A470] mb-8 transition-colors">
<iconify-icon icon="solar:case-round-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-serif mb-4">Employment Visas</h3>
<ul className="space-y-2 mb-8 text-sm text-gray-500 group-hover:text-gray-400 font-light">
<li>• H-1B &amp; H-1B1</li>
<li>• L-1 Intracompany Transferee</li>
<li>• TN (NAFTA) &amp; E-3</li>
</ul>
<span className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#C4A470] group-hover:text-white transition-colors">Learn More →</span>
</div>

<div className="bg-white p-12 group hover:bg-[#050615] hover:text-white transition-all duration-500">
<div className="w-12 h-12 rounded-full border border-gray-200 group-hover:border-[#C4A470] flex items-center justify-center text-[#C4A470] mb-8 transition-colors">
<iconify-icon icon="solar:card-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-serif mb-4">Green Card</h3>
<ul className="space-y-2 mb-8 text-sm text-gray-500 group-hover:text-gray-400 font-light">
<li>• Employment Based</li>
<li>• Family Based (Spouse/Fiancé)</li>
<li>• Sponsoring Parents/Children</li>
</ul>
<span className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#C4A470] group-hover:text-white transition-colors">Learn More →</span>
</div>

<div className="bg-white p-12 group hover:bg-[#050615] hover:text-white transition-all duration-500">
<div className="w-12 h-12 rounded-full border border-gray-200 group-hover:border-[#C4A470] flex items-center justify-center text-[#C4A470] mb-8 transition-colors">
<iconify-icon icon="solar:flag-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-serif mb-4">Naturalization</h3>
<p className="text-sm text-gray-500 group-hover:text-gray-400 font-light mb-8 leading-relaxed">
                            Guiding permanent residents through the N-400 process to become US citizens.
                        </p>
<span className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#C4A470] group-hover:text-white transition-colors">Learn More →</span>
</div>

<div className="bg-white p-12 group hover:bg-[#050615] hover:text-white transition-all duration-500">
<div className="w-12 h-12 rounded-full border border-gray-200 group-hover:border-[#C4A470] flex items-center justify-center text-[#C4A470] mb-8 transition-colors">
<iconify-icon icon="solar:folder-open-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-serif mb-4">Resources</h3>
<p className="text-sm text-gray-500 group-hover:text-gray-400 font-light mb-8 leading-relaxed">
                            Access our AOS360 View, PW Finder, and other immigration tools.
                        </p>
<span className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#C4A470] group-hover:text-white transition-colors">View Tools →</span>
</div>

<div className="bg-white p-12 group hover:bg-[#050615] hover:text-white transition-all duration-500">
<div className="w-12 h-12 rounded-full border border-gray-200 group-hover:border-[#C4A470] flex items-center justify-center text-[#C4A470] mb-8 transition-colors">
<iconify-icon icon="solar:diploma-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-serif mb-4">Student Status</h3>
<p className="text-sm text-gray-500 group-hover:text-gray-400 font-light mb-8 leading-relaxed">
                            F-1 Student Visa assistance, change of status, and OPT/STEM guidance.
                        </p>
<span className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#C4A470] group-hover:text-white transition-colors">Learn More →</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050615] relative overflow-hidden" id="book">

<div className="absolute top-0 right-0 w-1/2 h-full bg-[#0a0c24] -skew-x-12 translate-x-32 hidden lg:block pointer-events-none"></div>
<div className="max-w-[1200px] mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

<div className="flex flex-col justify-center">
<span className="text-[10px] tracking-[0.25em] text-[#C4A470] uppercase font-medium mb-6">Start Your Journey</span>
<h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Request Appointment</h2>
<p className="text-gray-400 font-light leading-relaxed mb-10 max-w-md">
                            Connect with Shah &amp; Kishore today. Fill out the form below to request a consultation regarding your immigration matter.
                        </p>

<div className="space-y-6">
<div className="border-l border-[#C4A470] pl-6">
<h4 className="text-white text-sm font-medium mb-2 uppercase tracking-wide">Office Hours</h4>
<p className="text-gray-400 text-sm font-light">Mon - Fri: 9:00 AM - 5:00 PM EST</p>
</div>
<div className="border-l border-[#C4A470] pl-6">
<h4 className="text-white text-sm font-medium mb-2 uppercase tracking-wide">Location</h4>
<p className="text-gray-400 text-sm font-light">9201 Corporate Blvd. Suite 330<br/>Rockville, MD 20850</p>
</div>
</div>
</div>

<div className="bg-white p-8 md:p-12 rounded-sm shadow-2xl">
<form className="space-y-5">
<div className="grid grid-cols-2 gap-5">
<div className="col-span-2 md:col-span-1">
<label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">First Name *</label>
<input className="w-full bg-gray-50 border border-gray-200 p-3 text-black focus:outline-none focus:border-[#C4A470] focus:ring-1 focus:ring-[#C4A470] transition-all rounded-sm" type="text"/>
</div>
<div className="col-span-2 md:col-span-1">
<label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Last Name *</label>
<input className="w-full bg-gray-50 border border-gray-200 p-3 text-black focus:outline-none focus:border-[#C4A470] focus:ring-1 focus:ring-[#C4A470] transition-all rounded-sm" type="text"/>
</div>
</div>
<div className="grid grid-cols-2 gap-5">
<div className="col-span-2 md:col-span-1">
<label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Email *</label>
<input className="w-full bg-gray-50 border border-gray-200 p-3 text-black focus:outline-none focus:border-[#C4A470] focus:ring-1 focus:ring-[#C4A470] transition-all rounded-sm" type="email"/>
</div>
<div className="col-span-2 md:col-span-1">
<label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Phone *</label>
<input className="w-full bg-gray-50 border border-gray-200 p-3 text-black focus:outline-none focus:border-[#C4A470] focus:ring-1 focus:ring-[#C4A470] transition-all rounded-sm" type="tel"/>
</div>
</div>
<div>
<label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Visa Type / Service</label>
<div className="relative">
<select className="w-full bg-gray-50 border border-gray-200 p-3 text-black focus:outline-none focus:border-[#C4A470] focus:ring-1 focus:ring-[#C4A470] transition-all rounded-sm appearance-none">
<option>Select Service...</option>
<option>Investment Visa (E-1, E-2, EB-5)</option>
<option>Employment Visa (H-1B, L-1, TN)</option>
<option>Green Card (Family/Employment)</option>
<option>Naturalization</option>
<option>Other / Not Sure</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
<iconify-icon icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
</div>
</div>
</div>
<div>
<label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Message</label>
<textarea className="w-full bg-gray-50 border border-gray-200 p-3 text-black focus:outline-none focus:border-[#C4A470] focus:ring-1 focus:ring-[#C4A470] transition-all rounded-sm resize-none" rows="4"></textarea>
</div>
<button className="w-full bg-[#050615] text-white font-bold uppercase tracking-[0.15em] text-xs py-4 hover:bg-[#C4A470] hover:text-white transition-colors duration-300 mt-2" type="button">
                                Submit Request
                            </button>
<p className="text-[10px] text-gray-400 text-center pt-2 italic">
                                Note: Our team will contact you to confirm available times.
                            </p>
</form>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50 border-t border-gray-200 text-black" id="contact">
<div className="max-w-[1200px] mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-4xl font-serif text-[#050615] mb-4">Contact Us</h2>
<div className="w-12 h-[1px] bg-[#C4A470] mx-auto"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-10">

<div className="h-[400px] bg-gray-200 rounded-sm overflow-hidden relative">
<iframe allowfullscreen="" className="grayscale" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3096.356247754438!2d-77.19304902357388!3d39.09838967168231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7cd6bd9b0b6d1%3A0x6b6e4e8e8e8e8e8e!2s9201%20Corporate%20Blvd%20%23330%2C%20Rockville%2C%20MD%2020850!5e0!3m2!1sen!2sus!4v1709234567890!5m2!1sen!2sus" style={{border: '0'}} width="100%"></iframe>
</div>

<div className="flex flex-col justify-center space-y-8">
<div>
<h3 className="text-2xl font-serif text-[#050615] mb-2">Rockville Office</h3>
<p className="text-sm text-gray-500 font-light max-w-sm">Serving clients across Maryland and Nationwide for Federal Immigration matters.</p>
</div>
<div className="space-y-4">
<div className="flex items-start gap-4">
<div className="text-[#C4A470] mt-1">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div>
<span className="block text-xs uppercase tracking-widest text-gray-400 mb-1">Address</span>
<p className="text-[#050615] text-sm">9201 Corporate Blvd. Suite 330<br/>Rockville, MD, 20850</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="text-[#C4A470] mt-1">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
</div>
<div>
<span className="block text-xs uppercase tracking-widest text-gray-400 mb-1">Phone</span>
<a className="text-[#050615] text-sm hover:text-[#C4A470] transition-colors" href="tel:3013150001">301-315-0001</a>
</div>
</div>
</div>
<div className="pt-6">
<a className="inline-flex items-center text-xs uppercase tracking-widest font-bold text-[#C4A470] hover:text-[#050615] transition-colors border-b border-[#C4A470] pb-1" href="https://www.google.com/maps/dir//9201+Corporate+Blvd+%23330,+Rockville,+MD+20850" target="_blank">
                                Get Directions <iconify-icon className="ml-2" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-gray-100 py-16 text-[#050615]">
<div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
<div className="text-center md:text-left">
<p className="font-serif text-lg mb-1">Shah &amp; Kishore</p>
<p className="text-[10px] uppercase tracking-widest text-gray-400">Copyright © 2026. All rights reserved.</p>
</div>
<div className="flex gap-6">
<a className="text-gray-400 hover:text-[#C4A470] transition-colors" href="https://www.facebook.com/shahkishorelaw" target="_blank">
<iconify-icon icon="brandico:facebook-rect" width="20"></iconify-icon>
</a>
<a className="text-gray-400 hover:text-[#C4A470] transition-colors" href="https://www.tiktok.com/@devangshahattorney" target="_blank">
<iconify-icon icon="ic:baseline-tiktok" width="20"></iconify-icon>
</a>
</div>
<div className="flex gap-6 text-[10px] uppercase tracking-widest font-medium text-gray-400">
<a className="hover:text-[#050615] transition-colors" href="https://shahandkishore.com/disclaimer/" target="_blank">Disclaimer</a>
<a className="hover:text-[#050615] transition-colors" href="https://secure.lawpay.com/pages/shah-and-kishore/operating" target="_blank">LawPay</a>
</div>
</div>
</footer>
</div>



    </>
  );
}
