import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Animations
        AOS.init({
            once: true, // Animations happen only once while scrolling down
            offset: 100, // Offset (in px) from the original trigger point
        });

        // Toggle Mobile Menu
        function toggleMenu() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('open');
        }

        // Add event listener to button
        document.getElementById('mobile-menu-btn').addEventListener('click', toggleMenu);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-black/40 backdrop-blur-md border-b border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-center justify-between py-4">
<a className="flex items-center gap-3 group" href="#">
<img alt="Eiman Estates Logo" className="w-10 h-10 rounded-full object-cover shadow-md group-hover:scale-105 transition-transform duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/67b03df2-8e33-4350-adcb-992855c72ac6_320w.jpg"/>
<div className="">
<h1 className="leading-none text-xl text-white font-display tracking-wide">EIMAN</h1>
<span className="uppercase text-[10px] tracking-[0.2em] text-[#D6B876] font-medium">ESTATES</span>
</div>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-white/90 hover:text-[#D6B876] transition-colors duration-300" href="#home">Home</a>
<a className="text-sm font-medium text-white/90 hover:text-[#D6B876] transition-colors duration-300" href="#how-it-works">How It Works</a>
<a className="text-sm font-medium text-white/90 hover:text-[#D6B876] transition-colors duration-300" href="#trust">Legal &amp; Trust</a>
</div>
<a className="hidden md:flex group items-center gap-2 transition-all duration-300 pt-2.5 pr-6 pb-2.5 pl-6 text-sm font-medium rounded-[4px] text-[#D6B876] bg-white/5 backdrop-blur-[2px] border border-[#D6B876]/40 hover:bg-[#D6B876] hover:text-[#183729] hover:border-[#D6B876]" href="#contact">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
</svg>
                    Contact
                </a>
<button className="md:hidden text-white hover:text-[#D6B876] focus:outline-none" id="mobile-menu-btn">
<svg fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<line x1="3" x2="21" y1="12" y2="12"></line>
<line x1="3" x2="21" y1="6" y2="6"></line>
<line x1="3" x2="21" y1="18" y2="18"></line>
</svg>
</button>
</div>
<div className="md:hidden bg-black/90 backdrop-blur-xl border-t border-white/10 rounded-b-2xl" id="mobile-menu">
<div className="flex flex-col p-6 gap-6 text-center">
<a className="text-white hover:text-[#D6B876] text-lg font-medium" href="#home" onclick="toggleMenu()">Home</a>
<a className="text-white hover:text-[#D6B876] text-lg font-medium" href="#how-it-works" onclick="toggleMenu()">How It Works</a>
<a className="text-white hover:text-[#D6B876] text-lg font-medium" href="#trust" onclick="toggleMenu()">Legal &amp; Trust</a>
<a className="text-[#D6B876] border border-[#D6B876]/30 py-3 rounded-lg bg-[#D6B876]/10" href="#contact" onclick="toggleMenu()">Book a Call</a>
</div>
</div>
</div>
</nav>
<section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="home">
<div className="absolute inset-0">
<img alt="Luxury Resort" className="w-full h-full object-cover animate-pan" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a98ad28e-364e-41b6-809f-427e5a53b07c_3840w.jpg"/>
<div className="text-5xl tracking-normal bg-gradient-to-r from-black via-black/50 to-transparent absolute top-0 right-0 bottom-0 left-0">
</div>
</div>
<div className="absolute bottom-24 left-0 z-10 w-full max-w-4xl px-6 md:px-12 text-left">
<div className="inline-flex gap-2 backdrop-saturate-150 text-sm font-medium text-[#D6B876] bg-[#202525]/40 border-white/10 border rounded-full mb-8 pt-2 pr-4 pb-2 pl-4 backdrop-blur-[4px] items-center aos-init aos-animate" data-aos="fade-down" data-aos-duration="1000">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0">
</path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
    Cox's Bazar
  </div>
<h1 className="leading-snug aos-init aos-animate sm:text-6xl lg:text-6xl text-4xl font-semibold text-white tracking-tight font-display text-left mb-12" data-aos="fade-up" data-aos-duration="1000">
  Own Income-Generating <span className="text-[#D6B876]"> Resort Property</span> Through Fractional Investment
</h1>
<p className="sm:text-xl leading-relaxed text-lg text-stone-300 font-body text-left max-w-2xl mb-10 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
    Invest in premium real estate without buying the whole property. Start earning from a 5-star asset today.
  </p>
<a className="hover:bg-amber-100 transition-all inline-flex items-center justify-center gap-2 font-semibold text-[#183729] bg-white rounded-[8px] py-4 px-6 drop-shadow-sm group aos-init aos-animate" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000" href="#book-call">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">
</path>
</svg>
    Book an Investor Call
  </a>
</div>
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
<svg aria-hidden="true" className="iconify text-white/50 iconify--lucide" data-icon="lucide:chevron-down" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</section>
<section className="border-y bg-[#EFEFE3] border-amber-900/20">
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-7xl mx-auto py-12 px-6">
<div className="flex flex-col items-center aos-init" data-aos="fade-up" data-aos-delay="0">
<p className="text-xl font-bold text-[#183729] font-display mb-2">Fractional Ownership</p>
<p className="uppercase text-sm text-[#202525] tracking-wider font-body">Lower Entry Access</p>
</div>
<div className="flex flex-col items-center aos-init" data-aos="fade-up" data-aos-delay="100">
<p className="text-xl font-bold text-[#183729] font-display mb-2">Professional Management</p>
<p className="uppercase text-sm text-[#202525] tracking-wider font-body">Fully Managed Resort</p>
</div>
<div className="flex flex-col items-center aos-init" data-aos="fade-up" data-aos-delay="200">
<p className="text-xl font-bold text-[#183729] font-display mb-2">Structured Investment</p>
<p className="uppercase text-sm text-[#202525] tracking-wider font-body">SPV-Based Model</p>
</div>
<div className="flex flex-col items-center aos-init" data-aos="fade-up" data-aos-delay="300">
<p className="text-xl font-bold text-[#183729] font-display mb-2">Long-Term Asset</p>
<p className="uppercase text-sm text-[#202525] tracking-wider font-body">Designed for Growth</p>
</div>
</div>
</section>
<section className="bg-[#EFEFE3] py-24 px-6 overflow-hidden" id="about">
<div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto items-center">
<div className="relative group order-first lg:order-first aos-init" data-aos="fade-right">
<div className="absolute -bottom-6 -left-6 w-full h-full bg-[#D6B876] rounded-[2px] -z-10 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
<img alt="Luxury Resort Interior" className="relative rounded-[2px] w-full aspect-square object-cover shadow-2xl transition-transform duration-700 hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/403fde33-9415-43e3-a8f3-7af5a34da316_1600w.png"/>
</div>
<div className="aos-init" data-aos="fade-left">
<p className="text-sm uppercase tracking-widest font-semibold mb-4 text-[#D6B876]">The Concept</p>
<h2 className="font-display text-4xl sm:text-5xl text-[#183729] mb-6 tracking-tight">
                    Real Estate, <span className="italic text-[#183729]/70">Simplified.</span>
</h2>
<p className="leading-relaxed text-lg text-[#202525] font-body mb-8">
                    Eiman Estates helps you own a piece of a luxury hotel without the headache of managing it yourself. It works like this:
                </p>
<div className="flex flex-col gap-4">
<div className="flex items-start gap-4 p-4 rounded-lg bg-white shadow-sm border border-[#183729]/10 hover:border-[#D6B876] transition-colors duration-300 group">
<svg className="text-[#D6B876] shrink-0 mt-1 group-hover:scale-110 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path>
</svg>
<div className="">
<h3 className="text-lg font-medium text-[#183729] font-body">Co-own Premium Resorts</h3>
<p className="text-sm text-[#202525]/80 font-body">Buy a share of a 5-star property instead of the whole building.</p>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-lg bg-white shadow-sm border border-[#183729]/10 hover:border-[#D6B876] transition-colors duration-300 group">
<svg className="text-[#D6B876] shrink-0 mt-1 group-hover:scale-110 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path>
</svg>
<div className="">
<h3 className="text-lg font-medium text-[#183729] font-body">Earn Rental Income</h3>
<p className="text-sm text-[#202525]/80 font-body">We manage the guests and maintenance; you just collect the profit.</p>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-lg bg-white shadow-sm border border-[#183729]/10 hover:border-[#D6B876] transition-colors duration-300 group">
<svg className="text-[#D6B876] shrink-0 mt-1 group-hover:scale-110 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path>
</svg>
<div className="">
<h3 className="text-lg font-medium text-[#183729] font-body">Start Small</h3>
<p className="text-sm text-[#202525]/80 font-body">Invest with lower capital through fractional ownership.</p>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="bg-[#EFEFE3] py-24 px-6" id="comparison">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-16 aos-init" data-aos="fade-up">
<p className="text-sm uppercase tracking-widest font-semibold mb-4 text-[#D6B876]">The Comparison</p>
<h2 className="font-display text-4xl sm:text-5xl text-[#183729] mb-4 tracking-tight">Why Not Traditional?</h2>
<p className="text-lg text-[#202525] max-w-2xl mx-auto">
                    Owning a hotel used to be reserved for the ultra-wealthy. We have removed the barriers to entry.
                </p>
</div>
<div className="grid md:grid-cols-2 gap-8 mb-12 items-center">
<div className="relative bg-white rounded-2xl p-8 border border-[#183729]/10 shadow-sm h-full aos-init" data-aos="fade-up" data-aos-delay="100">
<h3 className="text-[#183729] text-2xl font-display mb-8 text-center opacity-80">Traditional Real Estate</h3>
<div className="space-y-6">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center shrink-0">
<svg className="text-red-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</div>
<p className="text-[#202525]/70 font-medium">High capital required</p>
</div>
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center shrink-0">
<svg className="text-red-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</div>
<p className="text-[#202525]/70 font-medium">Hard to manage</p>
</div>
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center shrink-0">
<svg className="text-red-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</div>
<p className="text-[#202525]/70 font-medium">Low transparency</p>
</div>
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center shrink-0">
<svg className="text-red-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</div>
<p className="text-[#202525]/70 font-medium">No liquidity</p>
</div>
</div>
</div>
<div className="relative bg-[#183729] rounded-2xl p-8 border border-[#D6B876]/30 shadow-2xl h-full md:scale-105 z-10 aos-init" data-aos="zoom-in" data-aos-delay="200">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#D6B876] text-[#183729] text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full shadow-lg">Smart Choice</div>
<h3 className="text-white text-2xl font-display mb-8 text-center">EIMAN ESTATES</h3>
<div className="space-y-6">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-full bg-[#D6B876]/20 flex items-center justify-center shrink-0">
<svg className="text-[#D6B876]" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<p className="text-white font-medium">Lower entry investment</p>
</div>
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-full bg-[#D6B876]/20 flex items-center justify-center shrink-0">
<svg className="text-[#D6B876]" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<p className="text-white font-medium">Fully managed</p>
</div>
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-full bg-[#D6B876]/20 flex items-center justify-center shrink-0">
<svg className="text-[#D6B876]" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<p className="text-white font-medium">Legal structure (SPV)</p>
</div>
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-full bg-[#D6B876]/20 flex items-center justify-center shrink-0">
<svg className="text-[#D6B876]" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<p className="text-white font-medium">Clear reporting</p>
</div>
</div>
</div>
</div>
<div className="text-center aos-init" data-aos="fade-up">
<a className="text-[#183729] hover:text-[#D6B876] font-medium inline-flex items-center gap-2 transition-colors" href="#how-it-works">
                    See Available Properties
                    <svg aria-hidden="true" fill="none" height="18" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7"></path>
</svg>
</a>
</div>
</div>
</section>
<section className="overflow-hidden bg-[#EFEFE3] py-24 px-6 relative" id="how-it-works">
<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D6B876]/5 rounded-full blur-[100px] pointer-events-none"></div>
<div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
<div className="order-2 lg:order-1 aos-init" data-aos="fade-right">
<div className="grid grid-cols-2 gap-4">
<img className="rounded-2xl w-full aspect-square object-cover shadow-lg hover:scale-[1.02] transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cf7bee75-25d0-4788-b4c2-aed33b1dbd0f_800w.png"/>
<img className="rounded-2xl w-full aspect-square object-cover mt-8 shadow-lg hover:scale-[1.02] transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/43e3158f-e180-48d4-8a5d-ba012c84443a_800w.png"/>
<img className="rounded-2xl w-full aspect-square object-cover shadow-lg hover:scale-[1.02] transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cae941c4-6a74-4d98-92db-c8e87001f0de_800w.png"/>
<img className="rounded-2xl w-full aspect-square object-cover mt-8 shadow-lg hover:scale-[1.02] transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2cc33520-74fc-46db-bead-1ed4745564a3_800w.png"/>
</div>
</div>
<div className="order-1 lg:order-2 aos-init" data-aos="fade-left">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D6B876]/10 border border-[#D6B876]/30 text-[#183729] text-sm font-bold tracking-wide mb-6">
<svg aria-hidden="true" fill="none" height="16" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path>
</svg>
                    Simple Process
                </div>
<h2 className="font-display text-4xl sm:text-5xl text-[#183729] mb-6 tracking-tight">How Investment Works</h2>
<p className="text-lg text-[#202525] mb-8 leading-relaxed">
                    We have removed the confusion and barriers. Investing in premium real estate is now as simple as shopping online.
                </p>
<div className="space-y-4 mb-10">
<div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-[#183729]/5 shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#D6B876]/50 group aos-init" data-aos="fade-up" data-aos-delay="100">
<div className="w-12 h-12 bg-[#D6B876]/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#D6B876] transition-colors duration-300">
<span className="text-[#183729] font-bold text-lg">01</span>
</div>
<div className="">
<h4 className="text-[#183729] font-bold text-lg">Choose Investment Amount</h4>
<p className="text-[#202525]/70 text-sm">Select a tier that fits your budget.</p>
</div>
</div>
<div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-[#183729]/5 shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#D6B876]/50 group aos-init" data-aos="fade-up" data-aos-delay="200">
<div className="w-12 h-12 bg-[#D6B876]/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#D6B876] transition-colors duration-300">
<span className="text-[#183729] font-bold text-lg">02</span>
</div>
<div className="">
<h4 className="text-[#183729] font-bold text-lg">Become Fractional Owner</h4>
<p className="text-[#202525]/70 text-sm">Sign securely and own legal shares.</p>
</div>
</div>
<div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-[#183729]/5 shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#D6B876]/50 group aos-init" data-aos="fade-up" data-aos-delay="300">
<div className="w-12 h-12 bg-[#D6B876]/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#D6B876] transition-colors duration-300">
<span className="text-[#183729] font-bold text-lg">03</span>
</div>
<div>
<h4 className="text-[#183729] font-bold text-lg">Property is Rented &amp; Managed</h4>
<p className="text-[#202525]/70 text-sm">We handle all operations and guests.</p>
</div>
</div>
<div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-[#183729]/5 shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#D6B876]/50 group aos-init" data-aos="fade-up" data-aos-delay="400">
<div className="w-12 h-12 bg-[#D6B876]/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#D6B876] transition-colors duration-300">
<span className="text-[#183729] font-bold text-lg">04</span>
</div>
<div>
<h4 className="text-[#183729] font-bold text-lg">Earn Income + Appreciation</h4>
<p className="text-[#202525]/70 text-sm">Receive dividends and watch value grow.</p>
</div>
</div>
</div>
<a className="bg-[#183729] hover:bg-[#183729]/90 text-white px-8 py-4 rounded-full text-base font-medium transition-all inline-flex items-center gap-2 shadow-xl hover:shadow-2xl hover:-translate-y-1" href="#invest">
                    Start Investing Now
                    <svg aria-hidden="true" fill="none" height="20" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7"></path></svg>
</a>
</div>
</div>
</section>
<section className="relative bg-[#EFEFE3] py-24 px-6" id="returns">
<div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-multiply" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg width=\\'40\\' height=\\'40\\' viewBox=\\'0 0 40 40\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M0 0h40v40H0V0zm1 1h38v38H1V1zm1 1v36h36V2H2z\\' fill=\\'%23183729\\' fillOpacity=\\'1\\' fill-rule=\\'evenodd\\'/%3E%3C/svg%3E\')', backgroundSize: '20px 20px'}}></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="text-center mb-16 aos-init" data-aos="fade-up">
<p className="text-sm uppercase tracking-widest font-bold mb-4 text-[#D6B876]">Financial Overview</p>
<h2 className="font-display text-4xl sm:text-5xl text-[#183729] tracking-tight">Returns &amp; Value</h2>
<p className="text-[#202525]/70 mt-4 text-lg max-w-2xl mx-auto">A secure asset class designed to work for you.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-white rounded-2xl p-8 border border-[#183729]/5 hover:border-[#D6B876] hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group aos-init" data-aos="fade-up" data-aos-delay="100">
<div className="w-14 h-14 bg-[#D6B876]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#D6B876] transition-colors duration-300">
<svg className="text-[#183729]" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path>
</svg>
</div>
<h3 className="text-[#183729] text-xl font-bold font-display mb-3">Designed for Passive Income</h3>
<p className="text-[#202525]/70 mb-4 leading-relaxed">Enjoy a hands-off investment model where rental yields are generated automatically through hotel operations.</p>
<div className="w-8 h-[2px] bg-[#D6B876]"></div>
</div>
<div className="bg-white rounded-2xl p-8 border border-[#183729]/5 hover:border-[#D6B876] hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group aos-init" data-aos="fade-up" data-aos-delay="200">
<div className="w-14 h-14 bg-[#D6B876]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#D6B876] transition-colors duration-300">
<svg className="text-[#183729]" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline>
</svg>
</div>
<h3 className="text-[#183729] text-xl font-bold font-display mb-3">Long-term Appreciation</h3>
<p className="text-[#202525]/70 mb-4 leading-relaxed">Benefit from the potential increase in property value over time in a high-demand tourist destination.</p>
<div className="w-8 h-[2px] bg-[#D6B876]"></div>
</div>
<div className="bg-white rounded-2xl p-8 border border-[#183729]/5 hover:border-[#D6B876] hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group aos-init" data-aos="fade-up" data-aos-delay="300">
<div className="w-14 h-14 bg-[#D6B876]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#D6B876] transition-colors duration-300">
<svg className="text-[#183729]" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
</svg>
</div>
<h3 className="text-[#183729] text-xl font-bold font-display mb-3">Professional Management</h3>
<p className="text-[#202525]/70 mb-4 leading-relaxed">Zero maintenance headaches. Our experienced team handles guests, repairs, and marketing for you.</p>
<div className="w-8 h-[2px] bg-[#D6B876]"></div>
</div>
</div>
</div>
</section>
<section className="bg-[#EFEFE3] py-24 px-6" id="trust">
<div className="max-w-6xl mx-auto">
<div className="text-center max-w-3xl mx-auto mb-16 aos-init" data-aos="fade-up">
<p className="text-sm uppercase tracking-widest font-bold mb-4 text-[#D6B876]">Safety &amp; Security</p>
<h2 className="font-display text-4xl sm:text-5xl text-[#183729] tracking-tight mb-6">Trust &amp; Legal Framework</h2>
<p className="text-[#202525]/70 text-lg leading-relaxed">We prioritize your security with a fully transparent, regulated, and professionally managed investment structure.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[350px]">
<div className="group relative md:col-span-2 overflow-hidden rounded-3xl shadow-lg cursor-pointer aos-init" data-aos="zoom-in" data-aos-delay="100">
<img className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/872ed0ae-4145-4995-9c5e-824688d46a85_1600w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90"></div>
<div className="absolute bottom-8 left-8 right-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
<h3 className="font-display text-2xl md:text-3xl text-white mb-2 leading-tight">SPV Ownership</h3>
<p className="text-sm md:text-base text-stone-300 font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 max-w-md">Your investment is secured through a Special Purpose Vehicle model, ensuring direct, legal equity ownership.</p>
</div>
</div>
<div className="group relative md:col-span-1 overflow-hidden rounded-3xl shadow-lg cursor-pointer aos-init" data-aos="zoom-in" data-aos-delay="200">
<img className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/752ebca6-2def-4c68-98d8-c3c3c1c39229_800w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90"></div>
<div className="absolute bottom-8 left-8 right-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
<h3 className="font-display text-2xl text-white mb-2 leading-tight">Fund Protection</h3>
<p className="text-sm text-stone-300 font-medium leading-snug opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Capital is held in regulated escrow accounts.</p>
</div>
</div>
<div className="group relative md:col-span-1 overflow-hidden rounded-3xl shadow-lg cursor-pointer aos-init" data-aos="zoom-in" data-aos-delay="300">
<img className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/95fa9fff-1d71-463f-8603-537288e1f06e_800w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90"></div>
<div className="absolute bottom-8 left-8 right-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
<h3 className="font-display text-2xl text-white mb-2 leading-tight">Pro Management</h3>
<p className="text-sm text-stone-300 font-medium leading-snug opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Experienced hospitality team handling 100% of operations.</p>
</div>
</div>
<div className="group relative md:col-span-2 overflow-hidden rounded-3xl shadow-lg cursor-pointer aos-init" data-aos="zoom-in" data-aos-delay="400">
<img className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/835ab5ce-ebfd-4e68-b75c-e046e090c961_1600w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90"></div>
<div className="absolute bottom-8 left-8 right-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
<h3 className="font-display text-2xl md:text-3xl text-white mb-2 leading-tight">Legal Approvals</h3>
<p className="text-sm md:text-base text-stone-300 font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Fully compliant with local regulations. <span className="text-[#D6B876]">Status: Approved.</span></p>
</div>
</div>
</div>
</div>
</section>
<footer className="overflow-hidden bg-[#183729] relative">
<div className="absolute top-0 left-0 w-[500px] h-[500px] pointer-events-none opacity-[0.07]" style={{backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '30px 30px', maskImage: 'radial-gradient(circle at top left, black 0%, transparent 70%)', WebkitMaskImage: 'radial-gradient(circle at top left, black 0%, transparent 70%)'}}>
</div>
<div className="absolute bottom-0 right-0 w-[500px] h-[500px] pointer-events-none opacity-[0.07]" style={{backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '30px 30px', maskImage: 'radial-gradient(circle at bottom right, black 0%, transparent 70%)', WebkitMaskImage: 'radial-gradient(circle at bottom right, black 0%, transparent 70%)'}}>
</div>
<div className="z-10 max-w-7xl mx-auto pt-24 pr-6 pb-12 pl-6 relative">
<div className="text-center mb-24 max-w-3xl mx-auto aos-init" data-aos="fade-up">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D6B876]/10 border border-[#D6B876]/30 text-[#D6B876] text-xs font-bold tracking-widest uppercase mb-8">
<span className="w-2 h-2 rounded-full bg-[#D6B876] animate-pulse"></span>
                    Opportunity Closing Soon
                </div>
<h2 className="font-display text-4xl sm:text-6xl text-white mb-8 tracking-tight leading-tight">
                    Limited early access for <span className="italic text-[#D6B876]">initial investors.</span>
</h2>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="group relative overflow-hidden w-full sm:w-auto px-10 py-4 bg-white text-[#183729] rounded-full font-bold text-lg transition-all transform hover:-translate-y-1 shadow-[0_0_20px_rgba(255,255,255,0.2)] text-center" href="#join-waitlist">
<div className="absolute top-0 left-0 w-6 h-6 opacity-30 group-hover:opacity-50 transition-opacity" style={{backgroundImage: 'radial-gradient(#183729 1.5px, transparent 1.5px)', backgroundSize: '4px 4px'}}></div>
<div className="absolute bottom-0 right-0 w-6 h-6 opacity-30 group-hover:opacity-50 transition-opacity" style={{backgroundImage: 'radial-gradient(#183729 1.5px, transparent 1.5px)', backgroundSize: '4px 4px'}}></div>
<span className="relative z-10">Join Waitlist</span>
</a>
<a className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 hover:border-[#D6B876] text-white hover:text-[#D6B876] rounded-full font-medium text-lg transition-all text-center" href="#book-call">
                        Book a Call
                    </a>
</div>
</div>
<div className="w-full h-px bg-white/10 mb-12"></div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
<div className="flex items-center gap-3 justify-center md:justify-start">
<img alt="Eiman Estates Logo" className="w-10 h-10 rounded-full object-cover border border-white/10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/67b03df2-8e33-4350-adcb-992855c72ac6_320w.jpg"/>
<div>
<h1 className="font-display text-xl text-white leading-none tracking-wide">EIMAN</h1>
<span className="text-[10px] uppercase tracking-[0.2em] text-[#D6B876]">Estates</span>
</div>
</div>
<div className="flex gap-6 items-center justify-center">
<a className="text-stone-400 hover:text-[#D6B876] transition-colors p-2 hover:bg-white/5 rounded-full" href="#"><svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
<a className="text-stone-400 hover:text-[#D6B876] transition-colors p-2 hover:bg-white/5 rounded-full" href="#"><svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></svg></a>
<a className="text-stone-400 hover:text-[#D6B876] transition-colors p-2 hover:bg-white/5 rounded-full" href="#"><svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
</div>
<p className="text-stone-500 text-sm text-center md:text-right">© 2025 Eiman Estates. All rights reserved.</p>
</div>
</div>
</footer>



    </>
  );
}
