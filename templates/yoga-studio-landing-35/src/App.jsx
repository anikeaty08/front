import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
<a className="flex items-center justify-center w-full bg-[#2F2F2F] text-[#F5F5F0] py-3.5 rounded-[8px] font-medium shadow-lg" href="#schedule">
            Book Now
        </a>
</div>

<nav className="fixed top-0 w-full z-40 bg-[#FAFAF9]/90 backdrop-blur-md border-b border-[#2F2F2F]/5">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="text-2xl tracking-tighter font-serif text-[#2F2F2F]" href="#">
                YUJ
            </a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-[#2F2F2F]/80 hover:text-[#2F2F2F] transition-colors" href="#">The Studio</a>
<a className="text-sm text-[#2F2F2F]/80 hover:text-[#2F2F2F] transition-colors" href="#classes">Classes</a>
<a className="text-sm text-[#2F2F2F]/80 hover:text-[#2F2F2F] transition-colors" href="#schedule">Schedule</a>
<a className="text-sm text-[#2F2F2F]/80 hover:text-[#2F2F2F] transition-colors" href="#pricing">Pricing</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:flex items-center text-sm font-medium hover:opacity-70 transition-opacity" href="#">
                    Log in
                </a>
<a className="hidden md:flex bg-[#2F2F2F] text-[#F5F5F0] px-6 py-2.5 rounded-[8px] text-sm font-medium hover:bg-[#ACB7AE] transition-colors duration-300" href="#schedule">
                    Book Class
                </a>
<button className="md:hidden text-[#2F2F2F]">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="lg:pt-48 lg:pb-32 overflow-hidden pt-32 pb-20 relative">
<div className="z-10 grid lg:grid-cols-2 gap-12 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative gap-x-12 gap-y-12 items-center">

<div className="space-y-8">
<div className="inline-flex gap-2 bg-white/50 border-[#2F2F2F]/10 border rounded-full pt-1 pr-3 pb-1 pl-3 backdrop-blur-sm gap-x-2 gap-y-2 items-center">
<span className="w-1.5 h-1.5 rounded-full bg-[#ACB7AE]"></span>
<span className="text-xs tracking-wide uppercase text-[#2F2F2F]/70">Athens' Premier Boutique Studio</span>
</div>
<h1 className="lg:text-7xl leading-[1.1] text-5xl font-medium text-[#2F2F2F] tracking-tight">
                    Reconnect with <br/> <i className="font-normal text-[#ACB7AE]">your</i> Inner Essence.
                </h1>
<p className="text-lg text-[#2F2F2F]/70 max-w-md font-light leading-relaxed">
                    A sanctuary of stillness in the heart of the city. Experience mindful movement, expert mentorship, and a community dedicated to holistic well-being.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="inline-flex items-center justify-center px-8 py-3.5 bg-[#2F2F2F] text-[#F5F5F0] rounded-[8px] font-medium hover:bg-[#ACB7AE] transition-all duration-300 group" href="#schedule">
                        Book Your First Class
                        <iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center px-8 py-3.5 border border-[#2F2F2F]/20 text-[#2F2F2F] rounded-[8px] font-medium hover:bg-[#F5F5F0] transition-colors" href="#classes">
                        View Schedule
                    </a>
</div>
</div>

<div className="relative h-[500px] lg:h-[600px] w-full rounded-[8px] overflow-hidden group">
<img alt="Yoga Practice" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#FAFAF9] via-transparent to-transparent opacity-20"></div>
</div>
</div>

<div className="absolute top-0 right-0 w-1/3 h-full bg-[#F5F5F0] -z-10 rounded-l-3xl hidden lg:block"></div>
</header>

<section className="border-y border-[#2F2F2F]/5 bg-white">
<div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<div className="flex text-[#ACB7AE]">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
</div>
<span className="text-sm font-medium text-[#2F2F2F]">4.9/5 from 200+ Students</span>
</div>
<div className="flex items-center gap-8 opacity-40 grayscale">
<iconify-icon icon="solar:verified-check-linear" width="32"></iconify-icon>
<iconify-icon icon="solar:cup-first-linear" width="32"></iconify-icon>
<iconify-icon icon="solar:heart-angle-linear" width="32"></iconify-icon>
<iconify-icon icon="solar:medal-ribbon-linear" width="32"></iconify-icon>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFAF9]" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 space-y-3">
<h2 className="text-3xl md:text-4xl text-[#2F2F2F] tracking-tight">The Yuj Experience</h2>
<p className="text-[#2F2F2F]/60 max-w-lg mx-auto font-light">More than just a studio. We cultivate a space where breath aligns with movement and spirit meets structure.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-[8px] border border-[#2F2F2F]/5 hover:border-[#ACB7AE]/50 transition-colors group japandi-shadow">
<div className="w-12 h-12 bg-[#F5F5F0] rounded-full flex items-center justify-center mb-6 text-[#2F2F2F] group-hover:bg-[#ACB7AE] group-hover:text-white transition-colors">
<iconify-icon icon="solar:leaf-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-serif text-[#2F2F2F] mb-3">Mindful Movement</h3>
<p className="text-[#2F2F2F]/60 text-sm leading-relaxed font-light">
                        Classes designed to bridge the gap between physical exertion and mental clarity. Flow with intention.
                    </p>
</div>

<div className="bg-white p-8 rounded-[8px] border border-[#2F2F2F]/5 hover:border-[#ACB7AE]/50 transition-colors group japandi-shadow">
<div className="w-12 h-12 bg-[#F5F5F0] rounded-full flex items-center justify-center mb-6 text-[#2F2F2F] group-hover:bg-[#ACB7AE] group-hover:text-white transition-colors">
<iconify-icon icon="solar:user-hands-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-serif text-[#2F2F2F] mb-3">Expert Mentorship</h3>
<p className="text-[#2F2F2F]/60 text-sm leading-relaxed font-light">
                        Guided by certified instructors who honor the roots of yoga while adapting to modern anatomy.
                    </p>
</div>

<div className="bg-white p-8 rounded-[8px] border border-[#2F2F2F]/5 hover:border-[#ACB7AE]/50 transition-colors group japandi-shadow">
<div className="w-12 h-12 bg-[#F5F5F0] rounded-full flex items-center justify-center mb-6 text-[#2F2F2F] group-hover:bg-[#ACB7AE] group-hover:text-white transition-colors">
<iconify-icon icon="solar:sun-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-serif text-[#2F2F2F] mb-3">Urban Sanctuary</h3>
<p className="text-[#2F2F2F]/60 text-sm leading-relaxed font-light">
                        A minimalist, light-filled space designed with natural materials to soothe the nervous system immediately.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#F5F5F0]" id="schedule">
<div className="max-w-5xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<h2 className="text-3xl md:text-4xl text-[#2F2F2F] tracking-tight mb-2">Today's Schedule</h2>
<p className="text-[#2F2F2F]/60 font-light">Join us on the mat today.</p>
</div>
<div className="flex gap-2 overflow-x-auto hide-scrollbar w-full md:w-auto pb-2">
<button className="px-5 py-2 bg-[#2F2F2F] text-white text-sm rounded-full whitespace-nowrap">Today</button>
<button className="px-5 py-2 bg-white text-[#2F2F2F]/70 text-sm rounded-full whitespace-nowrap border border-transparent hover:border-[#2F2F2F]/10">Tomorrow</button>
<button className="px-5 py-2 bg-white text-[#2F2F2F]/70 text-sm rounded-full whitespace-nowrap border border-transparent hover:border-[#2F2F2F]/10">Wed 24</button>
<button className="px-5 py-2 bg-white text-[#2F2F2F]/70 text-sm rounded-full whitespace-nowrap border border-transparent hover:border-[#2F2F2F]/10">Thu 25</button>
</div>
</div>
<div className="bg-white rounded-[8px] overflow-hidden shadow-sm border border-[#2F2F2F]/5">

<div className="group flex flex-col md:flex-row md:items-center justify-between p-6 border-b border-[#F5F5F0] hover:bg-[#FAFAF9] transition-colors">
<div className="flex gap-6 items-center">
<div className="text-center w-16">
<span className="block text-lg font-medium text-[#2F2F2F]">07:00</span>
<span className="text-xs text-[#2F2F2F]/50 uppercase tracking-wide">AM</span>
</div>
<div>
<h4 className="text-lg font-serif text-[#2F2F2F] mb-1">Morning Vinyasa Flow</h4>
<div className="flex items-center gap-3 text-sm text-[#2F2F2F]/60">
<span className="flex items-center gap-1"><iconify-icon icon="solar:user-circle-linear"></iconify-icon> Eleni K.</span>
<span className="w-1 h-1 bg-[#ACB7AE] rounded-full"></span>
<span>60 min</span>
</div>
</div>
</div>
<div className="mt-4 md:mt-0 flex justify-end">
<button className="px-6 py-2 border border-[#2F2F2F] text-[#2F2F2F] rounded-[8px] text-sm hover:bg-[#2F2F2F] hover:text-white transition-all">Join Class</button>
</div>
</div>

<div className="group flex flex-col md:flex-row md:items-center justify-between p-6 border-b border-[#F5F5F0] hover:bg-[#FAFAF9] transition-colors">
<div className="flex gap-6 items-center">
<div className="text-center w-16">
<span className="block text-lg font-medium text-[#2F2F2F]">12:30</span>
<span className="text-xs text-[#2F2F2F]/50 uppercase tracking-wide">PM</span>
</div>
<div>
<h4 className="text-lg font-serif text-[#2F2F2F] mb-1">Power Lunch Yoga</h4>
<div className="flex items-center gap-3 text-sm text-[#2F2F2F]/60">
<span className="flex items-center gap-1"><iconify-icon icon="solar:user-circle-linear"></iconify-icon> Andreas M.</span>
<span className="w-1 h-1 bg-[#ACB7AE] rounded-full"></span>
<span>45 min</span>
</div>
</div>
</div>
<div className="mt-4 md:mt-0 flex justify-end">
<button className="px-6 py-2 border border-[#2F2F2F] text-[#2F2F2F] rounded-[8px] text-sm hover:bg-[#2F2F2F] hover:text-white transition-all">Join Class</button>
</div>
</div>

<div className="group flex flex-col md:flex-row md:items-center justify-between p-6 border-b border-[#F5F5F0] hover:bg-[#FAFAF9] transition-colors">
<div className="flex gap-6 items-center">
<div className="text-center w-16">
<span className="block text-lg font-medium text-[#2F2F2F]">18:00</span>
<span className="text-xs text-[#2F2F2F]/50 uppercase tracking-wide">PM</span>
</div>
<div>
<h4 className="text-lg font-serif text-[#2F2F2F] mb-1">Hatha Alignment</h4>
<div className="flex items-center gap-3 text-sm text-[#2F2F2F]/60">
<span className="flex items-center gap-1"><iconify-icon icon="solar:user-circle-linear"></iconify-icon> Sofia P.</span>
<span className="w-1 h-1 bg-[#ACB7AE] rounded-full"></span>
<span>75 min</span>
</div>
</div>
</div>
<div className="mt-4 md:mt-0 flex justify-end">
<button className="px-6 py-2 border border-[#2F2F2F] text-[#2F2F2F] rounded-[8px] text-sm hover:bg-[#2F2F2F] hover:text-white transition-all">Join Class</button>
</div>
</div>

<div className="group flex flex-col md:flex-row md:items-center justify-between p-6 hover:bg-[#FAFAF9] transition-colors">
<div className="flex gap-6 items-center">
<div className="text-center w-16">
<span className="block text-lg font-medium text-[#2F2F2F]">20:00</span>
<span className="text-xs text-[#2F2F2F]/50 uppercase tracking-wide">PM</span>
</div>
<div>
<h4 className="text-lg font-serif text-[#2F2F2F] mb-1">Candlelit Yin &amp; Sound</h4>
<div className="flex items-center gap-3 text-sm text-[#2F2F2F]/60">
<span className="flex items-center gap-1"><iconify-icon icon="solar:user-circle-linear"></iconify-icon> Maria K.</span>
<span className="w-1 h-1 bg-[#ACB7AE] rounded-full"></span>
<span>60 min</span>
</div>
</div>
</div>
<div className="mt-4 md:mt-0 flex justify-end">
<button className="px-6 py-2 bg-[#2F2F2F] text-white rounded-[8px] text-sm hover:bg-[#ACB7AE] transition-all">Full (Waitlist)</button>
</div>
</div>
</div>
<div className="text-center mt-8">
<a className="inline-flex items-center text-sm text-[#2F2F2F]/70 hover:text-[#2F2F2F] border-b border-[#2F2F2F]/20 pb-0.5 transition-colors" href="#">
                    View Full Weekly Schedule
                </a>
</div>
</div>
</section>

<section className="py-24 bg-white" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl text-[#2F2F2F] tracking-tight mb-3">Invest in Yourself</h2>
<p className="text-[#2F2F2F]/60 font-light">Flexible plans for every journey.</p>
</div>
<div className="grid lg:grid-cols-3 gap-8 items-start">

<div className="p-8 rounded-[8px] border border-[#2F2F2F]/10 bg-[#FAFAF9]">
<h3 className="font-serif text-xl text-[#2F2F2F] mb-2">Introductory Offer</h3>
<p className="text-sm text-[#2F2F2F]/60 mb-6 font-light">Perfect for first-time visitors.</p>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-medium">€25</span>
<span className="text-sm text-[#2F2F2F]/50">/ 2 weeks</span>
</div>
<ul className="space-y-3 mb-8 text-sm text-[#2F2F2F]/80">
<li className="flex items-start gap-3"><iconify-icon className="text-[#ACB7AE] shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Unlimited classes</li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#ACB7AE] shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Mat rental included</li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#ACB7AE] shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> New students only</li>
</ul>
<a className="block w-full py-3 border border-[#2F2F2F] text-[#2F2F2F] text-center rounded-[8px] text-sm font-medium hover:bg-[#F5F5F0] transition-colors" href="#">Claim Offer</a>
</div>

<div className="p-8 rounded-[8px] border border-[#ACB7AE] bg-[#2F2F2F] text-white relative shadow-xl transform scale-105 z-10">
<div className="absolute top-0 right-0 bg-[#ACB7AE] text-white text-[10px] uppercase font-bold px-3 py-1 rounded-bl-[8px] rounded-tr-[7px] tracking-wide">Most Popular</div>
<h3 className="font-serif text-xl mb-2">Monthly Unlimited</h3>
<p className="text-sm text-white/60 mb-6 font-light">Commit to your daily practice.</p>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-medium">€85</span>
<span className="text-sm text-white/50">/ month</span>
</div>
<ul className="space-y-3 mb-8 text-sm text-white/80">
<li className="flex items-start gap-3"><iconify-icon className="text-[#ACB7AE] shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Unlimited access to all classes</li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#ACB7AE] shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> 10% off workshops</li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#ACB7AE] shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Priority booking</li>
</ul>
<a className="block w-full py-3 bg-[#ACB7AE] text-white text-center rounded-[8px] text-sm font-medium hover:bg-white hover:text-[#2F2F2F] transition-colors" href="#">Join Membership</a>
</div>

<div className="p-8 rounded-[8px] border border-[#2F2F2F]/10 bg-[#FAFAF9]">
<h3 className="font-serif text-xl text-[#2F2F2F] mb-2">10 Class Pass</h3>
<p className="text-sm text-[#2F2F2F]/60 mb-6 font-light">Flexible usage over 3 months.</p>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-medium">€120</span>
<span className="text-sm text-[#2F2F2F]/50">/ one time</span>
</div>
<ul className="space-y-3 mb-8 text-sm text-[#2F2F2F]/80">
<li className="flex items-start gap-3"><iconify-icon className="text-[#ACB7AE] shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Valid for 90 days</li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#ACB7AE] shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Shareable with a friend</li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#ACB7AE] shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> No commitment</li>
</ul>
<a className="block w-full py-3 border border-[#2F2F2F] text-[#2F2F2F] text-center rounded-[8px] text-sm font-medium hover:bg-[#F5F5F0] transition-colors" href="#">Purchase Pass</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFAF9] overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl text-[#2F2F2F] tracking-tight mb-12 text-center">Voices of our Sangha</h2>
<div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">

<div className="break-inside-avoid bg-white p-6 rounded-[8px] border border-[#2F2F2F]/5 japandi-shadow">
<div className="flex items-center gap-1 text-[#ACB7AE] mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-[#2F2F2F]/70 text-sm leading-relaxed mb-6 font-light italic">"Yuj is a breath of fresh air. The studio design calms you down instantly, and the teachers are incredibly knowledgeable."</p>
<div className="flex items-center gap-3">
<img alt="User" className="w-10 h-10 rounded-full object-cover grayscale opacity-80" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-medium text-[#2F2F2F]">Elena D.</p>
<p className="text-xs text-[#2F2F2F]/50">Member since 2021</p>
</div>
</div>
</div>

<div className="break-inside-avoid bg-white p-6 rounded-[8px] border border-[#2F2F2F]/5 japandi-shadow">
<div className="flex items-center gap-1 text-[#ACB7AE] mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-[#2F2F2F]/70 text-sm leading-relaxed mb-6 font-light italic">"The intro offer was the perfect way to start. I've never felt more welcome in a fitness space. It feels personal."</p>
<div className="flex items-center gap-3">
<img alt="User" className="w-10 h-10 rounded-full object-cover grayscale opacity-80" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-medium text-[#2F2F2F]">Thomas A.</p>
<p className="text-xs text-[#2F2F2F]/50">Student</p>
</div>
</div>
</div>

<div className="break-inside-avoid bg-white p-6 rounded-[8px] border border-[#2F2F2F]/5 japandi-shadow">
<div className="flex items-center gap-1 text-[#ACB7AE] mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-[#2F2F2F]/70 text-sm leading-relaxed mb-6 font-light italic">"The Sound Healing classes on Sunday are a spiritual experience. Highly recommend."</p>
<div className="flex items-center gap-3">
<img alt="User" className="w-10 h-10 rounded-full object-cover grayscale opacity-80" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-medium text-[#2F2F2F]">Sophie M.</p>
<p className="text-xs text-[#2F2F2F]/50">Member</p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#2F2F2F] text-[#F5F5F0] pt-20 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 mb-20">
<div>
<h3 className="font-serif text-3xl mb-6 tracking-tight">Join the Sangha</h3>
<p className="text-[#F5F5F0]/60 max-w-sm font-light mb-8">Receive mindfulness tips, retreat announcements, and studio updates directly to your inbox.</p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md">
<input className="flex-1 bg-white/5 border border-white/10 rounded-[8px] px-4 py-3 text-sm focus:outline-none focus:border-[#ACB7AE] transition-colors placeholder:text-[#F5F5F0]/30" placeholder="Email address" type="email"/>
<button className="bg-[#ACB7AE] text-white px-6 py-3 rounded-[8px] text-sm font-medium hover:bg-white hover:text-[#2F2F2F] transition-colors" type="button">Subscribe</button>
</form>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-8">
<div>
<h4 className="text-sm font-medium mb-4 text-[#ACB7AE]">Studio</h4>
<ul className="space-y-3 text-sm text-[#F5F5F0]/60 font-light">
<li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Teachers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Our Ethos</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium mb-4 text-[#ACB7AE]">Classes</h4>
<ul className="space-y-3 text-sm text-[#F5F5F0]/60 font-light">
<li><a className="hover:text-white transition-colors" href="#">Schedule</a></li>
<li><a className="hover:text-white transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-white transition-colors" href="#">Private Sessions</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium mb-4 text-[#ACB7AE]">Contact</h4>
<ul className="space-y-3 text-sm text-[#F5F5F0]/60 font-light">
<li>Athens, Greece</li>
<li>hello@yuj.gr</li>
<li>+30 210 1234567</li>
</ul>
</div>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-[#F5F5F0]/40 font-light">© 2024 Yuj Yoga Center. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-xs text-[#F5F5F0]/40 hover:text-white transition-colors" href="#">Privacy</a>
<a className="text-xs text-[#F5F5F0]/40 hover:text-white transition-colors" href="#">Terms</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
