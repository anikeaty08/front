import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        // Optional: Unobserve after revealing for a one-time animation
                        // observer.unobserve(entry.target); 
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });

            document.querySelectorAll('.reveal-up').forEach((el) => {
                observer.observe(el);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 inset-x-0 z-50 bg-white/70 backdrop-blur-xl border-b border-slate-200/50 transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<div className="flex-shrink-0">
<a className="text-xl font-medium tracking-tighter text-slate-900" href="#" style={{fontFamily: '\'Poppins\', sans-serif'}}>
                        FESTIGO
                    </a>
</div>
<nav className="hidden md:flex space-x-8">
<a className="text-sm font-normal text-slate-500 hover:text-slate-900 transition-colors duration-300" href="#features">Features</a>
<a className="text-sm font-normal text-slate-500 hover:text-slate-900 transition-colors duration-300" href="#how-it-works">How it Works</a>
<a className="text-sm font-normal text-slate-500 hover:text-slate-900 transition-colors duration-300" href="#pricing">Pricing</a>
</nav>
<div className="flex items-center space-x-4">
<a className="hidden sm:block text-sm font-normal text-slate-500 hover:text-slate-900 transition-colors duration-300" href="#">Log in</a>
<a className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-slate-900 rounded-full hover:bg-slate-800 hover:scale-105 hover:shadow-lg hover:shadow-slate-900/20 transition-all duration-300" href="#">
                        Get Started
                    </a>
</div>
</div>
</div>
</header>
<main>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl opacity-40 pointer-events-none" style={{filter: 'blur(120px)', zIndex: '0'}}>
<div className="flex justify-center gap-8">
<div className="w-[400px] h-[400px] bg-[#6B46C1] rounded-full mix-blend-multiply animate-pulse" style={{animationDuration: '4s'}}></div>
<div className="w-[400px] h-[400px] bg-[#ED8936] rounded-full mix-blend-multiply hidden md:block animate-pulse" style={{transform: 'translateX(-20%)', animationDuration: '5s'}}></div>
</div>
</div>
<div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal-up is-visible">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 backdrop-blur-md border border-slate-200/60 shadow-sm mb-8 hover:bg-white transition-colors duration-300 cursor-default">
<span className="flex h-2 w-2 rounded-full bg-[#ED8936] animate-ping" style={{animationDuration: '2s'}}></span>
<span className="text-xs font-medium text-slate-600 tracking-wide uppercase">Now live in Chennai &amp; Bangalore</span>
</div>
<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-slate-900 mb-6 leading-[1.1]" style={{fontFamily: '\'Poppins\', sans-serif'}}>
                    Your One-Stop Event Marketplace.<br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6B46C1] to-[#ED8936]">Vendors Meet Organizers.</span>
</h1>
<p className="mt-4 text-base sm:text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
                    Book food stalls, DJs, lighting, decor &amp; more. No more cold calls, endless negotiations, or ghosting – just perfect matches for your next big fest.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
<a className="group w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-[#6B46C1] rounded-full hover:bg-[#5a3aa6] transition-all duration-300 shadow-[0_0_20px_rgba(107,70,193,0.3)] hover:shadow-[0_0_30px_rgba(107,70,193,0.5)] hover:-translate-y-0.5" href="#">
                        For Organizers: Plan Now
                        <iconify-icon className="ml-2 text-base group-hover:translate-x-1 transition-transform duration-300" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-slate-700 bg-white/80 backdrop-blur-sm border border-slate-200/80 rounded-full hover:border-[#ED8936]/50 hover:text-[#ED8936] hover:bg-white transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5" href="#">
                        For Vendors: List Free
                    </a>
</div>
<div className="pt-8 border-t border-slate-200/40 max-w-3xl mx-auto">
<p className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-6">Trusted by the best in the business</p>
<div className="flex flex-wrap justify-center gap-8 sm:gap-12 opacity-60 hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0">
<div className="flex items-center gap-2 group cursor-default">
<iconify-icon className="text-xl group-hover:text-[#6B46C1] transition-colors duration-300" icon="solar:users-group-rounded-linear"></iconify-icon>
<span className="text-sm font-medium tracking-tight group-hover:text-slate-900 transition-colors duration-300">10K+ Vendors</span>
</div>
<div className="flex items-center gap-2 group cursor-default">
<iconify-icon className="text-xl group-hover:text-[#ED8936] transition-colors duration-300" icon="solar:calendar-star-linear"></iconify-icon>
<span className="text-sm font-medium tracking-tight group-hover:text-slate-900 transition-colors duration-300">5K+ Events</span>
</div>
<div className="flex items-center gap-2 group cursor-default">
<iconify-icon className="text-xl group-hover:text-[#6B46C1] transition-colors duration-300" icon="solar:shield-check-linear"></iconify-icon>
<span className="text-sm font-medium tracking-tight group-hover:text-slate-900 transition-colors duration-300">Secure Payments</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative mesh-bg border-y border-white/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16 reveal-up">
<h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-slate-900" style={{fontFamily: '\'Poppins\', sans-serif'}}>The old way is broken. We fixed it.</h2>
</div>
<div className="grid md:grid-cols-2 gap-8 lg:gap-12">

<div className="reveal-up group relative bg-white/40 backdrop-blur-2xl rounded-3xl p-8 lg:p-10 border border-white shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_-15px_rgba(107,70,193,0.15)] hover:-translate-y-2 transition-all duration-500 ease-out overflow-hidden" style={{transitionDelay: '100ms'}}>
<div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#6B46C1]/10 to-transparent rounded-bl-full -z-10 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"></div>
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-6 flex items-center gap-3" style={{fontFamily: '\'Poppins\', sans-serif'}}>
<span className="flex items-center justify-center w-10 h-10 rounded-2xl bg-[#6B46C1]/10 text-[#6B46C1] group-hover:bg-[#6B46C1] group-hover:text-white transition-colors duration-500">
<iconify-icon className="text-lg group-hover:scale-110 transition-transform duration-500" icon="solar:user-rounded-linear"></iconify-icon>
</span>
                            For Organizers
                        </h3>
<div className="mb-8 space-y-4">
<p className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-3">The Struggle</p>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-slate-500 group-hover:text-slate-700 transition-colors duration-300">
<iconify-icon className="text-red-300 text-lg flex-shrink-0 mt-0.5 group-hover:text-red-400 transition-colors" icon="solar:close-circle-linear"></iconify-icon>
                                    Endless cold calls and ignored DMs.
                                </li>
<li className="flex items-start gap-3 text-sm text-slate-500 group-hover:text-slate-700 transition-colors duration-300">
<iconify-icon className="text-red-300 text-lg flex-shrink-0 mt-0.5 group-hover:text-red-400 transition-colors" icon="solar:close-circle-linear"></iconify-icon>
                                    Mismatched services and zero transparency.
                                </li>
<li className="flex items-start gap-3 text-sm text-slate-500 group-hover:text-slate-700 transition-colors duration-300">
<iconify-icon className="text-red-300 text-lg flex-shrink-0 mt-0.5 group-hover:text-red-400 transition-colors" icon="solar:close-circle-linear"></iconify-icon>
                                    Budget overruns with hidden costs.
                                </li>
</ul>
</div>
<div className="pt-6 border-t border-slate-200/50">
<p className="text-xs font-medium text-[#6B46C1] uppercase tracking-widest mb-3">The Festigo Solution</p>
<p className="text-base text-slate-800 font-normal leading-relaxed">Search, compare, and instantly book top-rated vendors by event type, budget, and location. All verified.</p>
</div>
</div>

<div className="reveal-up group relative bg-white/40 backdrop-blur-2xl rounded-3xl p-8 lg:p-10 border border-white shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_-15px_rgba(237,137,54,0.15)] hover:-translate-y-2 transition-all duration-500 ease-out overflow-hidden" style={{transitionDelay: '200ms'}}>
<div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#ED8936]/10 to-transparent rounded-bl-full -z-10 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"></div>
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-6 flex items-center gap-3" style={{fontFamily: '\'Poppins\', sans-serif'}}>
<span className="flex items-center justify-center w-10 h-10 rounded-2xl bg-[#ED8936]/10 text-[#ED8936] group-hover:bg-[#ED8936] group-hover:text-white transition-colors duration-500">
<iconify-icon className="text-lg group-hover:scale-110 transition-transform duration-500" icon="solar:shop-linear"></iconify-icon>
</span>
                            For Vendors
                        </h3>
<div className="mb-8 space-y-4">
<p className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-3">The Struggle</p>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-slate-500 group-hover:text-slate-700 transition-colors duration-300">
<iconify-icon className="text-red-300 text-lg flex-shrink-0 mt-0.5 group-hover:text-red-400 transition-colors" icon="solar:close-circle-linear"></iconify-icon>
                                    Wasting time on leads that ghost.
                                </li>
<li className="flex items-start gap-3 text-sm text-slate-500 group-hover:text-slate-700 transition-colors duration-300">
<iconify-icon className="text-red-300 text-lg flex-shrink-0 mt-0.5 group-hover:text-red-400 transition-colors" icon="solar:close-circle-linear"></iconify-icon>
                                    Last-minute cancellations and no-shows.
                                </li>
<li className="flex items-start gap-3 text-sm text-slate-500 group-hover:text-slate-700 transition-colors duration-300">
<iconify-icon className="text-red-300 text-lg flex-shrink-0 mt-0.5 group-hover:text-red-400 transition-colors" icon="solar:close-circle-linear"></iconify-icon>
                                    Chasing organizers for delayed payments.
                                </li>
</ul>
</div>
<div className="pt-6 border-t border-slate-200/50">
<p className="text-xs font-medium text-[#ED8936] uppercase tracking-widest mb-3">The Festigo Solution</p>
<p className="text-base text-slate-800 font-normal leading-relaxed">Showcase your portfolio to thousands, get verified high-intent leads, and secure earnings via escrow.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative" id="features">
<div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px] opacity-30 -z-10"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl mb-20 reveal-up">
<h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-slate-900 mb-6" style={{fontFamily: '\'Poppins\', sans-serif'}}>Everything you need to host or hustle.</h2>
<p className="text-base text-slate-500 leading-relaxed">Powerful tools designed to simplify the entire event lifecycle, whether you're planning a massive college fest or providing the services.</p>
</div>
<div className="grid sm:grid-cols-2 gap-6 lg:gap-8">

<div className="reveal-up group relative bg-white/60 backdrop-blur-xl p-8 lg:p-10 rounded-3xl border border-slate-200/50 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgb(107,70,193,0.08)] hover:-translate-y-1 transition-all duration-500" style={{transitionDelay: '100ms'}}>
<div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-14 h-14 rounded-2xl bg-slate-50/80 border border-slate-100 flex items-center justify-center mb-8 text-slate-600 group-hover:bg-[#6B46C1] group-hover:text-white group-hover:border-[#6B46C1] transition-all duration-500 group-hover:rotate-3 group-hover:scale-110 shadow-sm">
<iconify-icon className="text-2xl" icon="solar:gallery-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-3">Rich Vendor Profiles</h3>
<p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-600 transition-colors duration-300">Vendors can display high-res portfolios, transparent pricing tiers, real-time availability calendars, and verified client reviews.</p>
</div>
</div>

<div className="reveal-up group relative bg-white/60 backdrop-blur-xl p-8 lg:p-10 rounded-3xl border border-slate-200/50 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgb(237,137,54,0.08)] hover:-translate-y-1 transition-all duration-500" style={{transitionDelay: '200ms'}}>
<div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-14 h-14 rounded-2xl bg-slate-50/80 border border-slate-100 flex items-center justify-center mb-8 text-slate-600 group-hover:bg-[#ED8936] group-hover:text-white group-hover:border-[#ED8936] transition-all duration-500 group-hover:-rotate-3 group-hover:scale-110 shadow-sm">
<iconify-icon className="text-2xl" icon="solar:filters-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-3">Smart Search &amp; Filters</h3>
<p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-600 transition-colors duration-300">Filter exactly what you need by event type (college fest, corporate, wedding), budget range, location, and specialized categories.</p>
</div>
</div>

<div className="reveal-up group relative bg-white/60 backdrop-blur-xl p-8 lg:p-10 rounded-3xl border border-slate-200/50 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgb(107,70,193,0.08)] hover:-translate-y-1 transition-all duration-500" style={{transitionDelay: '300ms'}}>
<div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-14 h-14 rounded-2xl bg-slate-50/80 border border-slate-100 flex items-center justify-center mb-8 text-slate-600 group-hover:bg-[#6B46C1] group-hover:text-white group-hover:border-[#6B46C1] transition-all duration-500 group-hover:rotate-3 group-hover:scale-110 shadow-sm">
<iconify-icon className="text-2xl" icon="solar:wallet-money-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-3">Secure Booking &amp; Escrow</h3>
<p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-600 transition-colors duration-300">No more payment anxiety. Funds are held safely in escrow and released upon milestone completion. Integrated seamlessly with Stripe.</p>
</div>
</div>

<div className="reveal-up group relative bg-white/60 backdrop-blur-xl p-8 lg:p-10 rounded-3xl border border-slate-200/50 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgb(237,137,54,0.08)] hover:-translate-y-1 transition-all duration-500" style={{transitionDelay: '400ms'}}>
<div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-14 h-14 rounded-2xl bg-slate-50/80 border border-slate-100 flex items-center justify-center mb-8 text-slate-600 group-hover:bg-[#ED8936] group-hover:text-white group-hover:border-[#ED8936] transition-all duration-500 group-hover:-rotate-3 group-hover:scale-110 shadow-sm">
<iconify-icon className="text-2xl" icon="solar:clipboard-list-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-3">Event Planner Dashboard</h3>
<p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-600 transition-colors duration-300">Organizers get a dedicated workspace with budget trackers, automated checklists, and a multi-vendor management hub.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white relative overflow-hidden" id="how-it-works">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
<div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center mb-24 reveal-up">
<h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-slate-900 mb-4" style={{fontFamily: '\'Poppins\', sans-serif'}}>From plan to party in 6 steps.</h2>
<p className="text-base text-slate-500">A streamlined workflow designed for transparency and speed.</p>
</div>
<div className="relative">

<div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-slate-200 to-transparent -translate-x-1/2"></div>
<div className="space-y-16">

<div className="reveal-up relative flex flex-col md:flex-row items-start md:items-center w-full group cursor-default" style={{transitionDelay: '100ms'}}>
<div className="md:w-1/2 md:pr-16 text-left md:text-right mb-4 md:mb-0 pl-12 md:pl-0 group-hover:-translate-x-2 transition-transform duration-500">
<h4 className="text-base font-medium tracking-tight text-slate-900">Create Event Profile</h4>
<p className="text-sm text-slate-500 mt-2 leading-relaxed">Organizers detail their event needs, date, and overall budget.</p>
</div>
<div className="absolute left-4 md:left-1/2 w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-400 font-medium text-sm flex items-center justify-center -translate-x-1/2 group-hover:border-[#6B46C1]/50 group-hover:text-[#6B46C1] group-hover:bg-[#6B46C1]/5 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(107,70,193,0.2)] transition-all duration-500 z-10 shadow-sm">1</div>
<div className="md:w-1/2 md:pl-16 hidden md:block text-xs text-slate-300 font-medium tracking-[0.2em] uppercase group-hover:text-[#6B46C1]/60 group-hover:translate-x-2 transition-all duration-500">Organizer Action</div>
</div>

<div className="reveal-up relative flex flex-col md:flex-row-reverse items-start md:items-center w-full group cursor-default" style={{transitionDelay: '150ms'}}>
<div className="md:w-1/2 md:pl-16 text-left mb-4 md:mb-0 pl-12 group-hover:translate-x-2 transition-transform duration-500">
<h4 className="text-base font-medium tracking-tight text-slate-900">Search &amp; Shortlist</h4>
<p className="text-sm text-slate-500 mt-2 leading-relaxed">Browse vendor profiles, view past work, and add favorites to your board.</p>
</div>
<div className="absolute left-4 md:left-1/2 w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-400 font-medium text-sm flex items-center justify-center -translate-x-1/2 group-hover:border-[#ED8936]/50 group-hover:text-[#ED8936] group-hover:bg-[#ED8936]/5 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(237,137,54,0.2)] transition-all duration-500 z-10 shadow-sm">2</div>
<div className="md:w-1/2 md:pr-16 hidden md:block text-right text-xs text-slate-300 font-medium tracking-[0.2em] uppercase group-hover:text-[#ED8936]/60 group-hover:-translate-x-2 transition-all duration-500">Discovery</div>
</div>

<div className="reveal-up relative flex flex-col md:flex-row items-start md:items-center w-full group cursor-default" style={{transitionDelay: '200ms'}}>
<div className="md:w-1/2 md:pr-16 text-left md:text-right mb-4 md:mb-0 pl-12 md:pl-0 group-hover:-translate-x-2 transition-transform duration-500">
<h4 className="text-base font-medium tracking-tight text-slate-900">Chat &amp; Quote Requests</h4>
<p className="text-sm text-slate-500 mt-2 leading-relaxed">Message vendors instantly to discuss specifics and receive tailored quotes.</p>
</div>
<div className="absolute left-4 md:left-1/2 w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-400 font-medium text-sm flex items-center justify-center -translate-x-1/2 group-hover:border-[#6B46C1]/50 group-hover:text-[#6B46C1] group-hover:bg-[#6B46C1]/5 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(107,70,193,0.2)] transition-all duration-500 z-10 shadow-sm">3</div>
<div className="md:w-1/2 md:pl-16 hidden md:block text-xs text-slate-300 font-medium tracking-[0.2em] uppercase group-hover:text-[#6B46C1]/60 group-hover:translate-x-2 transition-all duration-500">Communication</div>
</div>

<div className="reveal-up relative flex flex-col md:flex-row-reverse items-start md:items-center w-full group cursor-default" style={{transitionDelay: '250ms'}}>
<div className="md:w-1/2 md:pl-16 text-left mb-4 md:mb-0 pl-12 group-hover:translate-x-2 transition-transform duration-500">
<h4 className="text-base font-medium tracking-tight text-slate-900">Book with Secure Payment</h4>
<p className="text-sm text-slate-500 mt-2 leading-relaxed">Accept a quote and pay the deposit securely. Funds are held in escrow.</p>
</div>
<div className="absolute left-4 md:left-1/2 w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-400 font-medium text-sm flex items-center justify-center -translate-x-1/2 group-hover:border-[#ED8936]/50 group-hover:text-[#ED8936] group-hover:bg-[#ED8936]/5 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(237,137,54,0.2)] transition-all duration-500 z-10 shadow-sm">4</div>
<div className="md:w-1/2 md:pr-16 hidden md:block text-right text-xs text-slate-300 font-medium tracking-[0.2em] uppercase group-hover:text-[#ED8936]/60 group-hover:-translate-x-2 transition-all duration-500">Commitment</div>
</div>

<div className="reveal-up relative flex flex-col md:flex-row items-start md:items-center w-full group cursor-default" style={{transitionDelay: '300ms'}}>
<div className="md:w-1/2 md:pr-16 text-left md:text-right mb-4 md:mb-0 pl-12 md:pl-0 group-hover:-translate-x-2 transition-transform duration-500">
<h4 className="text-base font-medium tracking-tight text-slate-900">Track Progress &amp; Updates</h4>
<p className="text-sm text-slate-500 mt-2 leading-relaxed">Use the dashboard to track milestones, finalize details, and ensure readiness.</p>
</div>
<div className="absolute left-4 md:left-1/2 w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-400 font-medium text-sm flex items-center justify-center -translate-x-1/2 group-hover:border-[#6B46C1]/50 group-hover:text-[#6B46C1] group-hover:bg-[#6B46C1]/5 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(107,70,193,0.2)] transition-all duration-500 z-10 shadow-sm">5</div>
<div className="md:w-1/2 md:pl-16 hidden md:block text-xs text-slate-300 font-medium tracking-[0.2em] uppercase group-hover:text-[#6B46C1]/60 group-hover:translate-x-2 transition-all duration-500">Management</div>
</div>

<div className="reveal-up relative flex flex-col md:flex-row-reverse items-start md:items-center w-full group cursor-default" style={{transitionDelay: '350ms'}}>
<div className="md:w-1/2 md:pl-16 text-left mb-4 md:mb-0 pl-12 group-hover:translate-x-2 transition-transform duration-500">
<h4 className="text-base font-medium tracking-tight text-slate-900">Post-event Reviews</h4>
<p className="text-sm text-slate-500 mt-2 leading-relaxed">Final payments are released. Leave reviews to build trust within the community.</p>
</div>
<div className="absolute left-4 md:left-1/2 w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-400 font-medium text-sm flex items-center justify-center -translate-x-1/2 group-hover:border-[#ED8936]/50 group-hover:text-[#ED8936] group-hover:bg-[#ED8936]/5 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(237,137,54,0.2)] transition-all duration-500 z-10 shadow-sm">6</div>
<div className="md:w-1/2 md:pr-16 hidden md:block text-right text-xs text-slate-300 font-medium tracking-[0.2em] uppercase group-hover:text-[#ED8936]/60 group-hover:-translate-x-2 transition-all duration-500">Completion</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative mesh-bg">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16 reveal-up">
<h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-slate-900 mb-4" style={{fontFamily: '\'Poppins\', sans-serif'}}>A win-win for everyone.</h2>
</div>
<div className="reveal-up relative p-[1px] rounded-[2rem] bg-gradient-to-b from-slate-200/80 via-white/20 to-transparent shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]">
<div className="bg-white/70 backdrop-blur-2xl rounded-[31px] overflow-hidden">
<table className="w-full text-left border-collapse">
<thead>
<tr>
<th className="w-1/2 py-6 px-8 border-b border-slate-200/50 bg-slate-50/30">
<div className="flex items-center gap-3 text-xs font-medium text-slate-900 uppercase tracking-widest">
<div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#6B46C1]/10">
<iconify-icon className="text-[#6B46C1] text-lg" icon="solar:user-rounded-linear"></iconify-icon>
</div>
                                            For Organizers
                                        </div>
</th>
<th className="w-1/2 py-6 px-8 border-b border-slate-200/50 bg-slate-50/30 border-l border-slate-100/50">
<div className="flex items-center gap-3 text-xs font-medium text-slate-900 uppercase tracking-widest">
<div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#ED8936]/10">
<iconify-icon className="text-[#ED8936] text-lg" icon="solar:shop-linear"></iconify-icon>
</div>
                                            For Vendors
                                        </div>
</th>
</tr>
</thead>
<tbody className="text-sm text-slate-500 divide-y divide-slate-100/50">
<tr className="group hover:bg-white transition-colors duration-300">
<td className="py-5 px-8 group-hover:text-slate-800 transition-colors duration-300">Easy &amp; rapid vendor discovery</td>
<td className="py-5 px-8 border-l border-slate-100/50 group-hover:text-slate-800 transition-colors duration-300">Free professional profiles &amp; organic leads</td>
</tr>
<tr className="group hover:bg-white transition-colors duration-300 bg-slate-50/20">
<td className="py-5 px-8 group-hover:text-slate-800 transition-colors duration-300">Integrated budget tools &amp; checklists</td>
<td className="py-5 px-8 border-l border-slate-100/50 group-hover:text-slate-800 transition-colors duration-300">Business analytics &amp; earnings tracking</td>
</tr>
<tr className="group hover:bg-white transition-colors duration-300">
<td className="py-5 px-8 group-hover:text-slate-800 transition-colors duration-300">Instant, frictionless bookings</td>
<td className="py-5 px-8 border-l border-slate-100/50 group-hover:text-slate-800 transition-colors duration-300">Secure escrow payments (no chasing dues)</td>
</tr>
<tr className="group hover:bg-white transition-colors duration-300 bg-slate-50/20">
<td className="py-5 px-8 group-hover:text-slate-800 transition-colors duration-300">Loyalty rewards on repeat bookings</td>
<td className="py-5 px-8 border-l border-slate-100/50 group-hover:text-slate-800 transition-colors duration-300">Verified badges to stand out</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden bg-white border-y border-slate-100">

<div className="absolute top-1/2 left-0 w-96 h-96 bg-[#ED8936]/5 rounded-full mix-blend-multiply filter blur-[80px] -translate-y-1/2 pointer-events-none"></div>
<div className="absolute top-1/2 right-0 w-96 h-96 bg-[#6B46C1]/5 rounded-full mix-blend-multiply filter blur-[80px] -translate-y-1/2 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<h2 className="reveal-up text-2xl sm:text-3xl font-medium tracking-tight text-slate-900 mb-20 text-center" style={{fontFamily: '\'Poppins\', sans-serif'}}>Loved by the community.</h2>
<div className="flex flex-wrap lg:flex-nowrap gap-6 lg:gap-8 justify-center items-start">

<div className="reveal-up w-full sm:w-[calc(50%-12px)] lg:w-1/3 bg-white/60 backdrop-blur-xl p-8 lg:p-10 rounded-3xl border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_-15px_rgba(107,70,193,0.1)] hover:-translate-y-2 hover:-rotate-1 transition-all duration-500 ease-out" style={{transitionDelay: '100ms'}}>
<div className="flex gap-1 text-[#ED8936] mb-6 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-600 font-normal mb-8 leading-loose">"Booked 5 vendors for our college cultural fest in just 1 day! The transparency in pricing saved us hours of negotiation."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6B46C1]/20 to-[#6B46C1]/5 flex items-center justify-center text-[#6B46C1] font-medium text-base shadow-inner">P</div>
<div>
<p className="text-sm font-medium text-slate-900 tracking-tight">Priya R.</p>
<p className="text-xs text-slate-400 mt-0.5 uppercase tracking-wide">Student Coordinator</p>
</div>
</div>
</div>

<div className="reveal-up w-full sm:w-[calc(50%-12px)] lg:w-1/3 bg-white/60 backdrop-blur-xl p-8 lg:p-10 rounded-3xl border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_-15px_rgba(237,137,54,0.1)] hover:-translate-y-2 lg:translate-y-8 transition-all duration-500 ease-out" style={{transitionDelay: '200ms'}}>
<div className="flex gap-1 text-[#ED8936] mb-6 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-600 font-normal mb-8 leading-loose">"Since listing my lighting setup on Festigo, I've had a steady stream of verified leads. The escrow feature is a lifesaver."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#ED8936]/20 to-[#ED8936]/5 flex items-center justify-center text-[#ED8936] font-medium text-base shadow-inner">K</div>
<div>
<p className="text-sm font-medium text-slate-900 tracking-tight">Karthik Sound &amp; Lights</p>
<p className="text-xs text-slate-400 mt-0.5 uppercase tracking-wide">Vendor</p>
</div>
</div>
</div>

<div className="reveal-up w-full sm:w-[calc(50%-12px)] lg:w-1/3 bg-white/60 backdrop-blur-xl p-8 lg:p-10 rounded-3xl border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_-15px_rgba(107,70,193,0.1)] hover:-translate-y-2 hover:rotate-1 transition-all duration-500 ease-out" style={{transitionDelay: '300ms'}}>
<div className="flex gap-1 text-[#ED8936] mb-6 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-600 font-normal mb-8 leading-loose">"Managing multiple caterers used to be a nightmare. The dashboard keeps everything organized in one place."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-200 to-slate-100 flex items-center justify-center text-slate-600 font-medium text-base shadow-inner">A</div>
<div>
<p className="text-sm font-medium text-slate-900 tracking-tight">Arun M.</p>
<p className="text-xs text-slate-400 mt-0.5 uppercase tracking-wide">Event Manager</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative mesh-bg" id="pricing">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<div className="reveal-up mb-20">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-4" style={{fontFamily: '\'Poppins\', sans-serif'}}>Simple, transparent pricing.</h2>
<p className="text-base text-slate-500">Start for free, upgrade when you need superpowers.</p>
</div>
<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="reveal-up bg-white/60 backdrop-blur-xl p-10 rounded-[2.5rem] border border-slate-200/60 shadow-sm text-left flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-500" style={{transitionDelay: '100ms'}}>
<h3 className="text-lg font-medium tracking-tight text-slate-900">Basic</h3>
<div className="my-6 flex items-baseline text-4xl font-medium tracking-tighter text-slate-900" style={{fontFamily: '\'Poppins\', sans-serif'}}>
                            Free
                        </div>
<p className="text-sm text-slate-500 mb-8 leading-relaxed">Perfect for discovering vendors or setting up your first portfolio.</p>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-[#6B46C1] text-lg" icon="solar:check-circle-linear"></iconify-icon> Search &amp; Shortlist
                            </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-[#6B46C1] text-lg" icon="solar:check-circle-linear"></iconify-icon> Basic Vendor Profile
                            </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-[#6B46C1] text-lg" icon="solar:check-circle-linear"></iconify-icon> Secure Payments
                            </li>
</ul>
<button className="w-full py-3.5 px-4 rounded-2xl border border-slate-200/80 bg-white/50 text-sm font-medium text-slate-700 hover:bg-white hover:border-slate-300 hover:shadow-sm transition-all duration-300">Get Started Free</button>
</div>

<div className="reveal-up group relative p-10 rounded-[2.5rem] text-left flex flex-col overflow-hidden shadow-2xl shadow-[#6B46C1]/10 hover:shadow-[0_20px_60px_-15px_rgba(237,137,54,0.2)] hover:-translate-y-1 transition-all duration-500" style={{transitionDelay: '200ms'}}>

<div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-[#1a103c] -z-20"></div>

<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(237,137,54,0.15),transparent_50%)] -z-10"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(107,70,193,0.15),transparent_50%)] -z-10 group-hover:scale-110 transition-transform duration-700"></div>

<div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#6B46C1] to-[#ED8936] opacity-80"></div>
<div className="flex justify-between items-center mb-6 relative z-10">
<h3 className="text-lg font-medium tracking-tight text-white">Pro Vendor</h3>
<span className="px-3 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-[#ED8936] bg-[#ED8936]/10 rounded-full border border-[#ED8936]/20 backdrop-blur-sm">Popular</span>
</div>
<div className="my-6 flex items-baseline text-4xl font-medium tracking-tighter text-white relative z-10" style={{fontFamily: '\'Poppins\', sans-serif'}}>
                            ₹499<span className="text-sm font-normal text-slate-400 ml-2 tracking-normal">/mo</span>
</div>
<p className="text-sm text-slate-400 mb-8 leading-relaxed relative z-10">Maximize visibility and get deep insights into your business.</p>
<ul className="space-y-4 mb-10 flex-1 relative z-10">
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-[#ED8936] text-lg group-hover:scale-110 transition-transform" icon="solar:check-circle-linear"></iconify-icon> Priority Search Listing
                            </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-[#ED8936] text-lg group-hover:scale-110 transition-transform delay-75" icon="solar:check-circle-linear"></iconify-icon> Advanced Analytics
                            </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-[#ED8936] text-lg group-hover:scale-110 transition-transform delay-100" icon="solar:check-circle-linear"></iconify-icon> Verified Pro Badge
                            </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-[#ED8936] text-lg group-hover:scale-110 transition-transform delay-150" icon="solar:check-circle-linear"></iconify-icon> 0% Commission on first 5 bookings
                            </li>
</ul>
<button className="relative z-10 w-full py-3.5 px-4 rounded-2xl bg-white text-sm font-medium text-slate-900 hover:bg-slate-50 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300">Upgrade to Pro</button>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden bg-slate-900 text-center">

<div className="absolute inset-0 opacity-40 pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at center, #6B46C1 0%, transparent 60%)', zIndex: '0'}}></div>
<div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#ED8936]/20 rounded-full mix-blend-screen filter blur-[100px] pointer-events-none animate-pulse" style={{animationDuration: '6s'}}></div>
<div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#6B46C1]/30 rounded-full mix-blend-screen filter blur-[100px] pointer-events-none animate-pulse" style={{animationDuration: '7s', animationDelay: '1s'}}></div>
<div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 reveal-up">
<h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tighter text-white mb-6" style={{fontFamily: '\'Poppins\', sans-serif'}}>Ready to Host or Hustle?</h2>
<p className="text-base sm:text-lg text-slate-300 mb-12 font-normal">Join thousands of organizers and vendors making events spectacular across India.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-white bg-[#6B46C1] rounded-full hover:bg-[#5a3aa6] transition-all duration-300 shadow-[0_0_20px_rgba(107,70,193,0.4)] hover:shadow-[0_0_30px_rgba(107,70,193,0.6)] hover:-translate-y-0.5" href="#">
                        Join as Organizer
                    </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-slate-900 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-0.5" href="#">
                        Sign Up as Vendor
                    </a>
</div>
<div className="max-w-md mx-auto group">
<div className="bg-white/5 p-1.5 rounded-full border border-white/10 flex items-center backdrop-blur-md focus-within:bg-white/10 focus-within:border-white/20 focus-within:shadow-[0_0_30px_rgba(237,137,54,0.15)] transition-all duration-300">
<input className="bg-transparent border-none text-sm text-white placeholder-slate-400 px-5 py-3 w-full focus:outline-none focus:ring-0" placeholder="Enter email for early access &amp; ₹500 credit" type="email"/>
<button className="shrink-0 bg-gradient-to-r from-[#ED8936] to-[#da7826] text-white text-sm font-medium px-6 py-3 rounded-full hover:shadow-[0_0_15px_rgba(237,137,54,0.5)] transition-all duration-300">
                            Get Credit
                        </button>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-[#FAFAFA] py-16 border-t border-slate-200/60 relative z-10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 reveal-up">
<div className="col-span-2 md:col-span-1">
<a className="text-xl font-medium tracking-tighter text-slate-900 mb-6 inline-block" href="#" style={{fontFamily: '\'Poppins\', sans-serif'}}>
                        FESTIGO
                    </a>
<p className="text-sm text-slate-500 mb-6 pr-4 leading-relaxed">India's premier marketplace connecting event organizers with top-tier vendors seamlessly.</p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#6B46C1] hover:border-[#6B46C1]/30 hover:bg-[#6B46C1]/5 transition-all duration-300" href="#"><iconify-icon className="text-lg" icon="solar:twitter-linear"></iconify-icon></a>
<a className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#ED8936] hover:border-[#ED8936]/30 hover:bg-[#ED8936]/5 transition-all duration-300" href="#"><iconify-icon className="text-lg" icon="solar:instagram-linear"></iconify-icon></a>
<a className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#6B46C1] hover:border-[#6B46C1]/30 hover:bg-[#6B46C1]/5 transition-all duration-300" href="#"><iconify-icon className="text-lg" icon="solar:linkedin-linear"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900 mb-6">Platform</h4>
<ul className="space-y-3 text-sm">
<li><a className="text-slate-500 hover:text-[#6B46C1] transition-colors duration-300" href="#">For Organizers</a></li>
<li><a className="text-slate-500 hover:text-[#ED8936] transition-colors duration-300" href="#">For Vendors</a></li>
<li><a className="text-slate-500 hover:text-slate-900 transition-colors duration-300" href="#">Pricing</a></li>
<li><a className="text-slate-500 hover:text-slate-900 transition-colors duration-300" href="#">Browse Cities</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900 mb-6">Company</h4>
<ul className="space-y-3 text-sm">
<li><a className="text-slate-500 hover:text-slate-900 transition-colors duration-300" href="#">About Us</a></li>
<li><a className="text-slate-500 hover:text-slate-900 transition-colors duration-300" href="#">Careers</a></li>
<li><a className="text-slate-500 hover:text-slate-900 transition-colors duration-300" href="#">Contact</a></li>
<li><a className="text-slate-500 hover:text-slate-900 transition-colors duration-300" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900 mb-6">Legal</h4>
<ul className="space-y-3 text-sm">
<li><a className="text-slate-500 hover:text-slate-900 transition-colors duration-300" href="#">Privacy Policy</a></li>
<li><a className="text-slate-500 hover:text-slate-900 transition-colors duration-300" href="#">Terms of Service</a></li>
<li><a className="text-slate-500 hover:text-slate-900 transition-colors duration-300" href="#">Escrow Terms</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-200/60 flex flex-col md:flex-row items-center justify-between gap-4 reveal-up" style={{transitionDelay: '100ms'}}>
<p className="text-xs text-slate-400 font-normal">© 2024 Festigo Technologies. Made for India Events.</p>
<div className="flex gap-3">
<div className="h-9 w-28 bg-white rounded-lg border border-slate-200 flex items-center justify-center text-xs font-medium text-slate-500 hover:border-slate-300 hover:text-slate-700 cursor-pointer transition-colors duration-300 shadow-sm">App Store</div>
<div className="h-9 w-28 bg-white rounded-lg border border-slate-200 flex items-center justify-center text-xs font-medium text-slate-500 hover:border-slate-300 hover:text-slate-700 cursor-pointer transition-colors duration-300 shadow-sm">Google Play</div>
</div>
</div>
</div>
</footer>



    </>
  );
}
