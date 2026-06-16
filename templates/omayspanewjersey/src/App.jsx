import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuIcon = document.getElementById('menu-icon');
        let isMenuOpen = false;

        function toggleMenu() {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                mobileMenu.classList.remove('menu-hidden');
                mobileMenu.classList.add('menu-visible');
                menuIcon.setAttribute('icon', 'solar:close-circle-linear');
                document.body.style.overflow = 'hidden';
            } else {
                mobileMenu.classList.remove('menu-visible');
                mobileMenu.classList.add('menu-hidden');
                menuIcon.setAttribute('icon', 'solar:hamburger-menu-linear');
                document.body.style.overflow = 'auto';
            }
        }

        mobileMenuBtn.addEventListener('click', toggleMenu);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 transition-all duration-300 glass-panel border-b border-[#a0936c]/20">

<div className="bg-[#a0936c] text-white text-xs py-2 px-6 hidden md:block">
<div className="max-w-7xl mx-auto flex justify-between items-center">
<div className="flex gap-6">
<span className="flex items-center gap-2"><iconify-icon icon="solar:map-point-linear"></iconify-icon> 32 Washington St 1A, Tenafly, NJ 07670</span>
<span className="flex items-center gap-2"><iconify-icon icon="solar:phone-calling-linear"></iconify-icon> (201) 926-8888</span>
</div>
<div className="flex gap-4">
<span>Mon - Sat: By Appointment</span>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex h-20 items-center justify-between">

<a className="flex items-center gap-2 group" href="/">
<div className="w-10 h-10 bg-[#a0936c] rounded-full flex items-center justify-center text-white">
<iconify-icon icon="solar:lotus-linear" width="24"></iconify-icon>
</div>
<span className="font-serif text-2xl text-slate-900 tracking-tight group-hover:text-[#a0936c] transition-colors">Omay Spa</span>
</a>

<div className="hidden md:flex items-center space-x-10">
<a className="text-sm font-medium text-slate-600 hover:text-[#a0936c] transition-colors" href="#">Home</a>
<a className="text-sm font-medium text-slate-600 hover:text-[#a0936c] transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-600 hover:text-[#a0936c] transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-slate-600 hover:text-[#a0936c] transition-colors" href="#location">Location</a>
<a className="text-sm font-medium text-slate-600 hover:text-[#a0936c] transition-colors" href="#new-patients">Info</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden lg:flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-[#a0936c]" href="tel:2019268888">
<iconify-icon icon="solar:phone-linear" width="18"></iconify-icon>
                        Call Us
                    </a>
<a className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white transition-all duration-200 bg-[#a0936c] border border-transparent rounded-full shadow-lg hover:bg-[#8c7f5a] hover:shadow-[#a0936c]/30 hover:-translate-y-0.5" href="https://omayspa.as.me/" target="_blank">
                        Book Appointment
                    </a>

<button className="md:hidden p-2 text-slate-600 hover:text-[#a0936c] transition-colors z-50 relative" id="mobile-menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" id="menu-icon" width="28"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<div className="fixed inset-0 bg-white/95 backdrop-blur-xl z-40 menu-hidden flex flex-col justify-center items-center" id="mobile-menu">
<div className="flex flex-col space-y-8 text-center">
<a className="mobile-link text-2xl font-serif text-slate-900" href="#" onclick="toggleMenu()">Home</a>
<a className="mobile-link text-2xl font-serif text-slate-900" href="#services" onclick="toggleMenu()">Services</a>
<a className="mobile-link text-2xl font-serif text-slate-900" href="#about" onclick="toggleMenu()">About</a>
<a className="mobile-link text-2xl font-serif text-slate-900" href="#location" onclick="toggleMenu()">Location</a>
<a className="mobile-link text-2xl font-serif text-slate-900" href="#new-patients" onclick="toggleMenu()">Info</a>
<a className="px-8 py-4 text-lg font-medium text-white bg-[#a0936c] rounded-full shadow-xl" href="https://omayspa.as.me/" target="_blank">
                Book Appointment
            </a>
</div>
</div>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#F5F3EF]">

<div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-[#a0936c]/10 rounded-full blur-3xl"></div>
<div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] bg-[#767f6e]/10 rounded-full blur-3xl"></div>
<div className="relative max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 items-center">

<div className="fade-in-up space-y-8 text-center lg:text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#a0936c]/10 border border-[#a0936c]/20 text-[#a0936c] text-xs font-medium tracking-wide uppercase mx-auto lg:mx-0">
<span className="w-2 h-2 rounded-full bg-[#a0936c] animate-pulse"></span>
                        Premium Scalp Care in Tenafly
                    </div>
<h1 className="text-5xl lg:text-7xl text-slate-900 tracking-tight leading-[1.1]">
                        Revitalize Your <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a0936c] to-[#767f6e]">Hair &amp; Scalp</span>
</h1>
<p className="text-lg lg:text-xl text-slate-500 max-w-lg leading-relaxed font-light mx-auto lg:mx-0">
                        Experience ultimate relaxation and revitalization with expert scalp treatments, acupressure massage, and essential oil therapies.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white transition-all duration-200 bg-[#a0936c] rounded-full shadow-xl hover:shadow-[#a0936c]/30 hover:bg-[#8c7f5a] hover:-translate-y-1" href="https://omayspa.as.me/" target="_blank">
                            Book Your Visit
                        </a>
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-slate-700 transition-all duration-200 bg-white border border-slate-200 rounded-full hover:bg-slate-50 hover:border-[#a0936c]/30 hover:text-[#a0936c]" href="tel:2019268888">
                            Call (201) 926-8888
                        </a>
</div>

<div className="pt-8 border-t border-slate-200 flex justify-center lg:justify-start gap-8 lg:gap-12">
<div>
<p className="text-3xl font-serif text-slate-900">100%</p>
<p className="text-sm text-slate-500 mt-1">Natural Oils</p>
</div>
<div>
<p className="text-3xl font-serif text-slate-900">5.0</p>
<p className="text-sm text-slate-500 mt-1">Star Service</p>
</div>
<div>
<p className="text-3xl font-serif text-slate-900">NJ</p>
<p className="text-sm text-slate-500 mt-1">Tenafly Location</p>
</div>
</div>
</div>

<div className="relative lg:h-[700px] w-full flex items-center justify-center fade-in-up delay-200">
<div className="relative w-full max-w-md lg:max-w-lg aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-[#a0936c]/20">
<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10 pointer-events-none"></div>
<img alt="Omay Spa Scalp Treatment" className="object-cover w-full h-full hover:scale-105 transition-transform duration-700" src="https://images.squarespace-cdn.com/content/v1/673a15ed4ffac66455778edd/6050edea-c306-4718-90ab-98b09984e12a/IMG_4719.JPG"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="services">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-[#a0936c] font-medium tracking-widest text-xs uppercase mb-2 block">Our Menu</span>
<h2 className="text-4xl font-serif text-slate-900 mb-4 tracking-tight">Curated Treatments</h2>
<p className="text-slate-500 text-lg font-light">Comprehensive head spa therapies tailored to enhance your well-being.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative bg-slate-50 rounded-3xl border border-slate-100 overflow-hidden hover:border-[#a0936c]/30 transition-all duration-300 hover:shadow-lg">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Scalp Treatment" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.squarespace-cdn.com/content/v1/673a15ed4ffac66455778edd/5de32ef7-69f5-4422-a8a6-5a5552017635/IMG_4718.jpg"/>
</div>
<div className="p-6">
<h3 className="text-xl font-medium text-slate-900 mb-2 font-serif">A. Scalp Treatment</h3>
<a className="inline-flex items-center text-sm font-medium text-[#a0936c] hover:text-[#8c7f5a] mt-2" href="https://omayspa.as.me/" target="_blank">
                            Book Now <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="group relative bg-slate-50 rounded-3xl border border-slate-100 overflow-hidden hover:border-[#a0936c]/30 transition-all duration-300 hover:shadow-lg">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Steam Scalp Treatment" className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500" src="https://images.squarespace-cdn.com/content/v1/673a15ed4ffac66455778edd/d7fcee4c-8223-413e-abce-87dfa1f055ad/IMG_5459.PNG"/>
</div>
<div className="p-6">
<h3 className="text-xl font-medium text-slate-900 mb-2 font-serif">B. Steam Scalp Treatment</h3>
<a className="inline-flex items-center text-sm font-medium text-[#a0936c] hover:text-[#8c7f5a] mt-2" href="https://omayspa.as.me/" target="_blank">
                            Book Now <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="group relative bg-slate-50 rounded-3xl border border-slate-100 overflow-hidden hover:border-[#a0936c]/30 transition-all duration-300 hover:shadow-lg">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Signature Scalp Treatment" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.squarespace-cdn.com/content/v1/673a15ed4ffac66455778edd/389fbe9f-decd-4c08-87d0-65d3d80ac210/IMG_4710.png"/>
</div>
<div className="p-6">
<h3 className="text-xl font-medium text-slate-900 mb-2 font-serif">C. Signature Scalp Treatment</h3>
<a className="inline-flex items-center text-sm font-medium text-[#a0936c] hover:text-[#8c7f5a] mt-2" href="https://omayspa.as.me/" target="_blank">
                            Book Now <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="group relative bg-slate-50 rounded-3xl border border-slate-100 overflow-hidden hover:border-[#a0936c]/30 transition-all duration-300 hover:shadow-lg">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Essential Oil Floral" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.squarespace-cdn.com/content/v1/673a15ed4ffac66455778edd/51a3349f-f9c3-4127-bdfd-52c6708ca332/IMG_3908.PNG"/>
</div>
<div className="p-6">
<h3 className="text-xl font-medium text-slate-900 mb-2 font-serif">D. Essential Oil Floral Treatment</h3>
<a className="inline-flex items-center text-sm font-medium text-[#a0936c] hover:text-[#8c7f5a] mt-2" href="https://omayspa.as.me/" target="_blank">
                            Book Now <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="group relative bg-slate-50 rounded-3xl border border-slate-100 overflow-hidden hover:border-[#a0936c]/30 transition-all duration-300 hover:shadow-lg">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Scalp &amp; Facial" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.squarespace-cdn.com/content/v1/673a15ed4ffac66455778edd/b58fb0c2-4640-4dd9-80c3-3611d9d593da/IMG_5742.JPG"/>
</div>
<div className="p-6">
<h3 className="text-xl font-medium text-slate-900 mb-2 font-serif">E. Scalp &amp; Facial Combo</h3>
<a className="inline-flex items-center text-sm font-medium text-[#a0936c] hover:text-[#8c7f5a] mt-2" href="https://omayspa.as.me/" target="_blank">
                            Book Now <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="group relative bg-slate-50 rounded-3xl border border-slate-100 overflow-hidden hover:border-[#a0936c]/30 transition-all duration-300 hover:shadow-lg">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Scalp &amp; Reflexology" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.squarespace-cdn.com/content/v1/673a15ed4ffac66455778edd/98feb0db-4ce4-4565-b0d7-e6f87a4eee18/WechatIMG26.jpg"/>
</div>
<div className="p-6">
<h3 className="text-xl font-medium text-slate-900 mb-2 font-serif">F. Scalp &amp; Reflexology Combo</h3>
<a className="inline-flex items-center text-sm font-medium text-[#a0936c] hover:text-[#8c7f5a] mt-2" href="https://omayspa.as.me/" target="_blank">
                            Book Now <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="group relative bg-slate-50 rounded-3xl border border-slate-100 overflow-hidden hover:border-[#a0936c]/30 transition-all duration-300 hover:shadow-lg">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Scalp &amp; Back Relief" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.squarespace-cdn.com/content/v1/673a15ed4ffac66455778edd/bd94ad4a-3008-4a0a-965f-6c3b90300ae0/IMG_5429.jpg"/>
</div>
<div className="p-6">
<h3 className="text-xl font-medium text-slate-900 mb-2 font-serif">G. Scalp &amp; Back Relief Combo</h3>
<a className="inline-flex items-center text-sm font-medium text-[#a0936c] hover:text-[#8c7f5a] mt-2" href="https://omayspa.as.me/" target="_blank">
                            Book Now <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="group relative bg-slate-50 rounded-3xl border border-slate-100 overflow-hidden hover:border-[#a0936c]/30 transition-all duration-300 hover:shadow-lg">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Scalp &amp; Ear Cleaning" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.squarespace-cdn.com/content/v1/673a15ed4ffac66455778edd/531468cb-eddd-4532-911b-cbef4f5608b2/WechatIMG28.jpg"/>
</div>
<div className="p-6">
<h3 className="text-xl font-medium text-slate-900 mb-2 font-serif">H. Scalp &amp; Ear Cleaning Combo</h3>
<a className="inline-flex items-center text-sm font-medium text-[#a0936c] hover:text-[#8c7f5a] mt-2" href="https://omayspa.as.me/" target="_blank">
                            Book Now <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#F5F3EF] overflow-hidden" id="about">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col lg:flex-row items-center gap-16">
<div className="lg:w-1/2 relative">
<img alt="Omay Spa Interior" className="rounded-3xl shadow-2xl w-full h-[500px] object-cover" src="https://images.squarespace-cdn.com/content/v1/673a15ed4ffac66455778edd/795374f0-f8f6-4205-b786-c75610cb58c5/IMG_4713.jpg"/>
<div className="absolute bottom-8 right-8 glass-panel p-6 rounded-2xl border border-white/40 shadow-xl backdrop-blur-md max-w-xs">
<p className="text-slate-900 font-serif italic text-lg">"The most relaxing experience I've had in NJ."</p>
<div className="flex text-[#a0936c] mt-2 gap-1">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
</div>
</div>
<div className="lg:w-1/2">
<h2 className="text-4xl font-serif text-slate-900 mb-6 tracking-tight">Elegance in Every Detail</h2>
<div className="space-y-6 text-lg text-slate-600 font-light">
<p>
                            Omay Spa in Tenafly, NJ, is your destination for ultimate relaxation and revitalization. Specializing in expert scalp treatments, acupressure massage, and essential oil therapies, we provide a rejuvenating escape for body and mind.
                        </p>
<p>
                            Our team is dedicated to providing personalized care in a serene, welcoming environment. Whether you are looking for deep scalp cleansing or stress relief, Omay Spa is your sanctuary.
                        </p>
</div>
<div className="mt-10 grid grid-cols-2 gap-8">
<div className="flex items-start gap-4">
<div className="p-2 bg-[#a0936c]/10 rounded-lg text-[#a0936c]"><iconify-icon icon="solar:leaf-linear" width="24"></iconify-icon></div>
<div>
<h4 className="font-medium text-slate-900">Natural Therapies</h4>
<p className="text-sm text-slate-500 mt-1">Essential oil based</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-2 bg-[#a0936c]/10 rounded-lg text-[#a0936c]"><iconify-icon icon="solar:heart-linear" width="24"></iconify-icon></div>
<div>
<h4 className="font-medium text-slate-900">Client Focused</h4>
<p className="text-sm text-slate-500 mt-1">Personalized wellness</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="location">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

<div className="bg-gradient-to-br from-slate-50 to-[#F5F3EF] rounded-3xl overflow-hidden border border-slate-100 shadow-xl p-10 lg:p-14">
<h3 className="text-3xl font-serif text-slate-900 mb-8">Visit Our Sanctuary</h3>
<div className="space-y-8">
<div className="flex items-start gap-4">
<div className="mt-1 p-2 bg-white rounded-full text-[#a0936c] shadow-sm"><iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon></div>
<div>
<p className="font-medium text-slate-900">Address</p>
<p className="text-slate-500">32 Washington St 1A, Tenafly, NJ 07670</p>
<a className="text-sm text-[#a0936c] hover:underline mt-1 block" href="https://maps.google.com/?q=32+Washington+St+1A,+Tenafly,+NJ+07670" target="_blank">Get Directions</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 p-2 bg-white rounded-full text-[#a0936c] shadow-sm"><iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon></div>
<div>
<p className="font-medium text-slate-900">Contact</p>
<p className="text-slate-500 mb-1">(201) 926-8888</p>
<p className="text-slate-500">Omayspa@gmail.com</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 p-2 bg-white rounded-full text-[#a0936c] shadow-sm"><iconify-icon icon="solar:clock-circle-linear" width="20"></iconify-icon></div>
<div>
<p className="font-medium text-slate-900">Hours</p>
<p className="text-slate-500">By Appointment</p>
</div>
</div>
</div>
<div className="mt-10">
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-[#a0936c] rounded-full hover:bg-[#8c7f5a] transition-colors shadow-lg" href="https://omayspa.as.me/" target="_blank">
                            Book at Tenafly
                        </a>
</div>
</div>

<div className="rounded-3xl overflow-hidden shadow-lg h-[400px] lg:h-auto bg-slate-200 relative group">
<a className="block w-full h-full" href="https://maps.google.com/?q=32+Washington+St+1A,+Tenafly,+NJ+07670" target="_blank">
<div className="absolute inset-0 flex items-center justify-center bg-slate-100 group-hover:bg-slate-50 transition-colors">

<div className="text-center">
<iconify-icon className="text-[#a0936c] text-5xl mb-2" icon="solar:map-point-bold"></iconify-icon>
<p className="text-slate-500 font-medium">View on Google Maps</p>
</div>
</div>
</a>
</div>
</div>
</div>
</section>

<section className="py-20 bg-[#a0936c]/5" id="new-patients">
<div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
<h2 className="text-3xl font-serif text-slate-900 mb-10">Important Information</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="bg-white p-6 rounded-2xl shadow-sm border border-[#a0936c]/10">
<iconify-icon className="text-[#a0936c] text-4xl mb-4" icon="solar:alarm-linear"></iconify-icon>
<h4 className="font-semibold text-slate-900 mb-2">Arrival</h4>
<p className="text-slate-500 text-sm">Please arrive 10 minutes early to your appointment to ensure a full experience.</p>
</div>
<div className="bg-white p-6 rounded-2xl shadow-sm border border-[#a0936c]/10">
<iconify-icon className="text-[#a0936c] text-4xl mb-4" icon="solar:wallet-money-linear"></iconify-icon>
<h4 className="font-semibold text-slate-900 mb-2">Payment</h4>
<p className="text-slate-500 text-sm">Cash is accepted. Gift certificates are available for purchase in our store.</p>
</div>
<div className="bg-white p-6 rounded-2xl shadow-sm border border-[#a0936c]/10">
<iconify-icon className="text-[#a0936c] text-4xl mb-4" icon="solar:gift-linear"></iconify-icon>
<h4 className="font-semibold text-slate-900 mb-2">Gift Certificates</h4>
<p className="text-slate-500 text-sm">Give the gift of relaxation. Ask our front desk about gift options.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden" id="book">
<div className="max-w-3xl mx-auto px-6 lg:px-8 relative z-10">
<div className="text-center mb-12">
<h2 className="text-4xl font-serif text-slate-900 mb-4">Request Appointment</h2>
<p className="text-slate-500">Fill out the form below and we will contact you to confirm your slot.</p>
</div>
<form className="space-y-6 bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100 shadow-xl" onsubmit="event.preventDefault(); alert('Thank you! Your request has been sent. We will contact you shortly.');">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
<input className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-[#a0936c] focus:border-transparent outline-none bg-white" placeholder="Jane Doe" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
<input className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-[#a0936c] focus:border-transparent outline-none bg-white" placeholder="(201) 555-0123" required="" type="tel"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
<input className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-[#a0936c] focus:border-transparent outline-none bg-white" placeholder="jane@example.com" required="" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">Preferred Location</label>
<select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-[#a0936c] focus:border-transparent outline-none bg-white text-slate-600">
<option value="tenafly">Tenafly, NJ</option>
</select>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">Preferred Day/Time</label>
<input className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-[#a0936c] focus:border-transparent outline-none bg-white" placeholder="e.g. Monday mornings, Friday afternoon" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">Reason for Visit / Message</label>
<textarea className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-[#a0936c] focus:border-transparent outline-none bg-white" placeholder="I'm interested in the Signature Scalp Treatment..." rows="4"></textarea>
</div>
<div className="pt-4">
<button className="w-full py-4 text-base font-medium text-white bg-[#a0936c] rounded-full hover:bg-[#8c7f5a] transition-all shadow-lg hover:-translate-y-1" type="submit">
                        Send Request
                    </button>
<p className="text-xs text-center text-slate-400 mt-4">Note: This form connects to our notification system. Our staff will confirm via email/phone.</p>
</div>
</form>
</div>
</section>

<footer className="bg-[#1C1C1C] text-slate-400 py-16 border-t border-slate-800" id="contact">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

<div>
<div className="flex items-center gap-2 mb-6">
<iconify-icon className="text-[#a0936c] text-2xl" icon="solar:lotus-linear"></iconify-icon>
<span className="font-serif text-2xl text-white">Omay Spa</span>
</div>
<p className="text-sm leading-relaxed mb-6">Expert scalp treatments and wellness therapies in New Jersey.</p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#a0936c] hover:text-white transition-colors" href="https://www.instagram.com/reel/DKI7HE_opWd/" target="_blank">
<iconify-icon icon="mdi:instagram" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#a0936c] hover:text-white transition-colors" href="https://www.tiktok.com/@karensuarez1798" target="_blank">
<iconify-icon icon="ic:baseline-tiktok" width="20"></iconify-icon>
</a>
</div>
</div>

<div>
<h4 className="text-white font-medium mb-6">Quick Links</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-[#a0936c] transition-colors" href="#">Home</a></li>
<li><a className="hover:text-[#a0936c] transition-colors" href="#services">Services</a></li>
<li><a className="hover:text-[#a0936c] transition-colors" href="#about">About Us</a></li>
<li><a className="hover:text-[#a0936c] transition-colors" href="#location">Location</a></li>
<li><a className="hover:text-[#a0936c] transition-colors" href="#new-patients">Info</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-medium mb-6">Our Location</h4>
<ul className="space-y-3 text-sm">
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#a0936c]"></span> Tenafly, NJ</li>
</ul>
</div>

<div>
<h4 className="text-white font-medium mb-6">Get in Touch</h4>
<ul className="space-y-4 text-sm">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#a0936c] shrink-0 mt-0.5" icon="solar:map-point-linear"></iconify-icon>
<span>32 Washington St 1A,<br/>Tenafly, NJ 07670</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#a0936c] shrink-0 mt-0.5" icon="solar:phone-calling-linear"></iconify-icon>
<span>(201) 926-8888</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#a0936c] shrink-0 mt-0.5" icon="solar:letter-linear"></iconify-icon>
<span>Omayspa@gmail.com</span>
</li>
</ul>
</div>
</div>
<div className="border-t border-slate-800 mt-16 pt-8 text-center text-xs">
<p>© 2026 Omay Spa. All rights reserved.</p>
</div>
</div>
</footer>



    </>
  );
}
