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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<nav className="glass-nav sticky top-0 z-50 border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center">
<a className="text-xl font-semibold tracking-tighter text-slate-900" href="#home">
                    NINETY-ONE<span className="text-[#92400e]">SERVICES</span>
</a>
</div>
<div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
<a className="hover:text-[#92400e] transition-colors" href="#home">Home</a>
<a className="hover:text-[#92400e] transition-colors" href="#services">Services</a>
<a className="hover:text-[#92400e] transition-colors" href="#process">Our Process</a>
<a className="hover:text-[#92400e] transition-colors" href="#testimonials">Testimonials</a>
<a className="hover:text-[#92400e] transition-colors" href="#contact">Contact</a>
</div>
<div className="flex items-center space-x-6">
<a className="hidden sm:flex items-center font-semibold text-slate-900 text-sm" href="tel:9189600775">
<iconify-icon className="mr-2 text-[#92400e]" icon="solar:phone-linear" width="20"></iconify-icon>
                    (918) 960-0775
                </a>
<a className="bg-slate-900 text-white px-5 py-2.5 rounded-sm text-sm font-medium hover:bg-slate-800 transition-all" href="#contact">
                    Consultation
                </a>
</div>
</div>
</nav>

<section className="relative h-[85vh] flex items-center overflow-hidden" id="home">
<div className="absolute inset-0 z-0">
<img alt="Professional HOA Perimeter Fence" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-slate-900/60"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
<div className="max-w-3xl">
<h1 className="text-4xl md:text-6xl font-semibold text-white tracking-tight leading-tight mb-6">
                    Oklahoma's HOA Fence Specialists
                </h1>
<p className="text-lg md:text-xl text-slate-100 mb-10 leading-relaxed font-light">
                    Turnkey fence replacement, maintenance, and installation for HOAs, property managers, and developers across Central and Northeast Oklahoma.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="bg-[#92400e] text-white px-8 py-4 rounded-sm font-medium text-center hover:bg-[#78350f] transition-all" href="#contact">
                        Request a Free Consultation
                    </a>
<a className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-sm font-medium text-center hover:bg-white/20 transition-all" href="#services">
                        View Our Services
                    </a>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 py-16 border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="flex items-center space-x-4">
<div className="text-[#92400e] bg-white p-3 rounded-lg shadow-sm">
<iconify-icon icon="solar:shield-check-linear" width="28"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-700 tracking-tight leading-tight">Licensed &amp; <br/>Insured</span>
</div>
<div className="flex items-center space-x-4">
<div className="text-[#92400e] bg-white p-3 rounded-lg shadow-sm">
<iconify-icon icon="solar:star-linear" width="28"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-700 tracking-tight leading-tight">5-Star <br/>Rated</span>
</div>
<div className="flex items-center space-x-4">
<div className="text-[#92400e] bg-white p-3 rounded-lg shadow-sm">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="28"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-700 tracking-tight leading-tight">HOA <br/>Specialists</span>
</div>
<div className="flex items-center space-x-4">
<div className="text-[#92400e] bg-white p-3 rounded-lg shadow-sm">
<iconify-icon icon="solar:map-point-linear" width="28"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-700 tracking-tight leading-tight">Serving Oklahoma <br/>Since 2015</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Who We Serve</h2>
<div className="w-16 h-1 bg-[#92400e] mx-auto"></div>
</div>
<div className="grid md:grid-cols-3 gap-12">
<div className="group">
<div className="mb-6 overflow-hidden aspect-video bg-slate-100">
<img alt="HOA Board Meeting" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-2">HOA Boards</h3>
<p className="text-slate-600 text-sm leading-relaxed">Dedicated support for community boards seeking long-term value and aesthetic consistency for their residents.</p>
</div>
<div className="group">
<div className="mb-6 overflow-hidden aspect-video bg-slate-100">
<img alt="Property Management" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-2">Property Management</h3>
<p className="text-slate-600 text-sm leading-relaxed">Efficient, predictable maintenance and replacement cycles that keep your portfolio looking pristine.</p>
</div>
<div className="group">
<div className="mb-6 overflow-hidden aspect-video bg-slate-100">
<img alt="Development Site" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-2">Residential Developers</h3>
<p className="text-slate-600 text-sm leading-relaxed">Scalable turnkey installation for new developments, ensuring perimeter security and visual appeal from day one.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-3xl mb-16">
<h2 className="text-4xl font-semibold tracking-tight mb-6">HOA Fence Services Built Around Your Community</h2>
<p className="text-slate-400 text-lg">Specialized solutions for the unique scale and requirements of community-wide fence infrastructure.</p>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="bg-slate-800/50 p-8 border border-slate-700 hover:border-[#92400e] transition-colors">
<iconify-icon className="text-[#92400e] mb-6" icon="solar:refresh-linear" width="40"></iconify-icon>
<h3 className="text-xl font-semibold tracking-tight mb-3">HOA Fence Replacement</h3>
<p className="text-slate-400 text-sm leading-relaxed mb-6">Full phased replacement programs for aging subdivisions. We manage the entire project flow with minimal disruption to residents, coordinating block by block.</p>
</div>

<div className="bg-slate-800/50 p-8 border border-slate-700 hover:border-[#92400e] transition-colors">
<iconify-icon className="text-[#92400e] mb-6" icon="solar:settings-linear" width="40"></iconify-icon>
<h3 className="text-xl font-semibold tracking-tight mb-3">HOA Fence Maintenance</h3>
<p className="text-slate-400 text-sm leading-relaxed mb-6">Ongoing repair and upkeep programs designed to extend the lifespan of your community’s assets and maintain property appearance year-round.</p>
</div>

<div className="bg-slate-800/50 p-8 border border-slate-700 hover:border-[#92400e] transition-colors">
<iconify-icon className="text-[#92400e] mb-6" icon="solar:structure-linear" width="40"></iconify-icon>
<h3 className="text-xl font-semibold tracking-tight mb-3">New Neighborhood Installation</h3>
<p className="text-slate-400 text-sm leading-relaxed mb-6">Turnkey perimeter fencing for developers building new residential communities. Expert logistics for high-volume, precision installations.</p>
</div>

<div className="bg-slate-800/50 p-8 border border-slate-700 hover:border-[#92400e] transition-colors">
<iconify-icon className="text-[#92400e] mb-6" icon="solar:paint-roller-linear" width="40"></iconify-icon>
<h3 className="text-xl font-semibold tracking-tight mb-3">Professional Fence Staining</h3>
<p className="text-slate-400 text-sm leading-relaxed mb-6">Utilizing Wood Defender oil-based staining for long-lasting color and Oklahoma weather protection. Prevents rot and maintains a "like-new" aesthetic.</p>
</div>
</div>
<div className="mt-16 bg-[#92400e] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
<p className="text-xl font-semibold tracking-tight mb-6 md:mb-0">Not sure which service fits your community? We'll walk you through it — free.</p>
<a className="bg-white text-slate-900 px-8 py-3 font-medium hover:bg-slate-100 transition-colors" href="#contact">Consult an Expert</a>
</div>
</div>
</section>

<section className="py-24 bg-white" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-20">
<h2 className="text-4xl font-semibold tracking-tight text-slate-900 mb-6">How We Manage Your HOA Fence Project</h2>
<p className="text-slate-600">A clear, predictable process that keeps boards informed and residents comfortable from start to finish.</p>
</div>
<div className="relative">

<div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200"></div>
<div className="space-y-16">

<div className="relative flex flex-col md:flex-row items-center">
<div className="md:w-1/2 md:pr-12 text-center md:text-right mb-8 md:mb-0">
<h4 className="text-xs font-semibold uppercase tracking-widest text-[#92400e] mb-2">Step 1</h4>
<h3 className="text-xl font-semibold tracking-tight mb-3">Free Site Consultation</h3>
<p className="text-slate-600 text-sm">We walk the property, review scope, and deliver clear recommendations based on current condition and longevity goals.</p>
</div>
<div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#92400e] border-4 border-white shadow hidden md:block"></div>
<div className="md:w-1/2 md:pl-12"></div>
</div>

<div className="relative flex flex-col md:flex-row items-center">
<div className="md:w-1/2 md:pr-12"></div>
<div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#92400e] border-4 border-white shadow hidden md:block"></div>
<div className="md:w-1/2 md:pl-12 text-center md:text-left">
<h4 className="text-xs font-semibold uppercase tracking-widest text-[#92400e] mb-2">Step 2</h4>
<h3 className="text-xl font-semibold tracking-tight mb-3">Custom Proposal</h3>
<p className="text-slate-600 text-sm">Detailed written quote with phasing options and timeline, ensuring your board has clear data for decision making.</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-center">
<div className="md:w-1/2 md:pr-12 text-center md:text-right mb-8 md:mb-0">
<h4 className="text-xs font-semibold uppercase tracking-widest text-[#92400e] mb-2">Step 3</h4>
<h3 className="text-xl font-semibold tracking-tight mb-3">Board Presentation</h3>
<p className="text-slate-600 text-sm">We attend your HOA meeting to answer questions and build confidence through our expertise and professional portfolio.</p>
</div>
<div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#92400e] border-4 border-white shadow hidden md:block"></div>
<div className="md:w-1/2 md:pl-12"></div>
</div>

<div className="relative flex flex-col md:flex-row items-center">
<div className="md:w-1/2 md:pr-12"></div>
<div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#92400e] border-4 border-white shadow hidden md:block"></div>
<div className="md:w-1/2 md:pl-12 text-center md:text-left">
<h4 className="text-xs font-semibold uppercase tracking-widest text-[#92400e] mb-2">Step 4</h4>
<h3 className="text-xl font-semibold tracking-tight mb-3">Resident Communication</h3>
<p className="text-slate-600 text-sm">We handle all notices so residents know exactly what to expect. No more board phone calls about "when is the crew arriving?"</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-center">
<div className="md:w-1/2 md:pr-12 text-center md:text-right mb-8 md:mb-0">
<h4 className="text-xs font-semibold uppercase tracking-widest text-[#92400e] mb-2">Step 5</h4>
<h3 className="text-xl font-semibold tracking-tight mb-3">Professional Installation</h3>
<p className="text-slate-600 text-sm">Organized crews, daily cleanups, and consistent quality standards. We treat the property as our own.</p>
</div>
<div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#92400e] border-4 border-white shadow hidden md:block"></div>
<div className="md:w-1/2 md:pl-12"></div>
</div>

<div className="relative flex flex-col md:flex-row items-center">
<div className="md:w-1/2 md:pr-12"></div>
<div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#92400e] border-4 border-white shadow hidden md:block"></div>
<div className="md:w-1/2 md:pl-12 text-center md:text-left">
<h4 className="text-xs font-semibold uppercase tracking-widest text-[#92400e] mb-2">Step 6</h4>
<h3 className="text-xl font-semibold tracking-tight mb-3">Final Walkthrough</h3>
<p className="text-slate-600 text-sm">We inspect every section with your board or manager before calling the job complete. 100% satisfaction guaranteed.</p>
</div>
</div>
</div>
</div>
<div className="mt-20 text-center">
<a className="inline-block border border-slate-900 text-slate-900 px-10 py-4 font-medium hover:bg-slate-900 hover:text-white transition-all" href="#contact">
                    Request a Consultation Today
                </a>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="testimonials">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-4xl font-semibold tracking-tight text-slate-900 mb-4">What HOA Boards and Managers Say</h2>
<div className="flex items-center justify-center space-x-1 text-amber-500 mb-8">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<span className="text-slate-900 font-semibold ml-2">5.0 Rating / 27 Reviews</span>
</div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">

<div className="bg-white p-8 border border-slate-100 shadow-sm flex flex-col">
<div className="text-amber-500 mb-4 flex">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-slate-600 text-sm italic mb-6 flex-grow leading-relaxed">"This company was very professional and concerned about doing an excellent job for us. Our fence is beautiful, well built, and the gate is exceptional."</p>
<p className="font-semibold text-sm">— HOA Client</p>
</div>

<div className="bg-white p-8 border border-slate-100 shadow-sm flex flex-col">
<div className="text-amber-500 mb-4 flex">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-slate-600 text-sm italic mb-6 flex-grow leading-relaxed">"91 Services was reasonably priced and built the most beautiful fence! They are family owned and perfectionists so you won't have bowed or uneven pickets like a lot of companies."</p>
<p className="font-semibold text-sm">— Satisfied Client</p>
</div>

<div className="bg-white p-8 border border-slate-100 shadow-sm flex flex-col">
<div className="text-amber-500 mb-4 flex">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-slate-600 text-sm italic mb-6 flex-grow leading-relaxed">"We got a few estimates and were incredibly pleased with their competitive pricing. Everything was completed on time as promised."</p>
<p className="font-semibold text-sm">— Property Manager</p>
</div>

<div className="bg-white p-8 border border-slate-100 shadow-sm flex flex-col">
<div className="text-amber-500 mb-4 flex">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-slate-600 text-sm italic mb-6 flex-grow leading-relaxed">"They did a great job! So friendly, fast and detail oriented. Love that they are very personable and easy to work with."</p>
<p className="font-semibold text-sm">— Community Board Member</p>
</div>

<div className="bg-white p-8 border border-slate-100 shadow-sm flex flex-col">
<div className="text-amber-500 mb-4 flex">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-slate-600 text-sm italic mb-6 flex-grow leading-relaxed">"I was very pleased with the fence repairs. They gave an accurate quote, provided good communication, were courteous and professional, and did good work."</p>
<p className="font-semibold text-sm">— HOA Manager</p>
</div>

<div className="bg-white p-8 border border-slate-100 shadow-sm flex flex-col">
<div className="text-amber-500 mb-4 flex">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-slate-600 text-sm italic mb-6 flex-grow leading-relaxed">"Ninety-One Services has done an outstanding job replacing and staining the fence at our community. The process was smooth from beginning to end."</p>
<p className="font-semibold text-sm">— HOA Board Member</p>
</div>
</div>
<div className="text-center">
<a className="bg-[#92400e] text-white px-10 py-4 font-medium hover:bg-[#78350f] transition-all" href="#contact">
                    Join Our Satisfied Communities
                </a>
</div>
</div>
</section>

<section className="py-24 bg-white" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16">
<div>
<h2 className="text-4xl font-semibold tracking-tight text-slate-900 mb-6">Let's Talk About Your Community's Fence</h2>
<p className="text-slate-600 text-lg mb-10 leading-relaxed">Whether you're planning a replacement, need maintenance, or starting a new development — we're ready to help. Fill out the form and we'll respond within one business day.</p>
<div className="space-y-8">
<div className="flex items-start space-x-4">
<iconify-icon className="text-[#92400e] mt-1" icon="solar:phone-calling-linear" width="24"></iconify-icon>
<div>
<h4 className="font-semibold text-slate-900">Phone</h4>
<a className="text-slate-600 text-sm hover:text-[#92400e]" href="tel:9189600775">(918) 960-0775</a>
</div>
</div>
<div className="flex items-start space-x-4">
<iconify-icon className="text-[#92400e] mt-1" icon="solar:letter-linear" width="24"></iconify-icon>
<div>
<h4 className="font-semibold text-slate-900">Email</h4>
<a className="text-slate-600 text-sm hover:text-[#92400e]" href="mailto:office@ninety-oneservices.com">office@ninety-oneservices.com</a>
</div>
</div>
<div className="flex items-start space-x-4">
<iconify-icon className="text-[#92400e] mt-1" icon="solar:map-point-linear" width="24"></iconify-icon>
<div>
<h4 className="font-semibold text-slate-900">Service Area</h4>
<p className="text-slate-600 text-sm">Central and Northeast Oklahoma</p>
</div>
</div>
<div className="flex items-start space-x-4">
<iconify-icon className="text-[#92400e] mt-1" icon="solar:clock-circle-linear" width="24"></iconify-icon>
<div>
<h4 className="font-semibold text-slate-900">Hours</h4>
<p className="text-slate-600 text-sm">Monday–Friday, 9am–5pm</p>
</div>
</div>
</div>
</div>
<div className="bg-slate-50 p-8 md:p-10 border border-slate-100 rounded-sm">
<form className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="md:col-span-2">
<label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">Your Name</label>
<input className="w-full bg-white border border-slate-200 px-4 py-3 text-sm" placeholder="John Doe" type="text"/>
</div>
<div>
<label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">Your Role</label>
<select className="w-full bg-white border border-slate-200 px-4 py-3 text-sm appearance-none">
<option>HOA Board Member</option>
<option>Property Manager</option>
<option>Developer</option>
</select>
</div>
<div>
<label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">Community Name</label>
<input className="w-full bg-white border border-slate-200 px-4 py-3 text-sm" placeholder="Oak Creek Estates" type="text"/>
</div>
<div>
<label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">City</label>
<input className="w-full bg-white border border-slate-200 px-4 py-3 text-sm" placeholder="Broken Arrow" type="text"/>
</div>
<div>
<label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">Linear Feet (Approx)</label>
<input className="w-full bg-white border border-slate-200 px-4 py-3 text-sm" placeholder="e.g. 5,000 ft" type="text"/>
</div>
<div className="md:col-span-2">
<label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">Project Timeline</label>
<select className="w-full bg-white border border-slate-200 px-4 py-3 text-sm appearance-none">
<option>ASAP</option>
<option>3 months</option>
<option>6 months</option>
<option>Just planning</option>
</select>
</div>
<div className="md:col-span-2">
<label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">Message</label>
<textarea className="w-full bg-white border border-slate-200 px-4 py-3 text-sm placeholder:text-slate-300" placeholder="Tell us about your project needs..." rows="4"></textarea>
</div>
<div className="md:col-span-2">
<button className="w-full bg-slate-900 text-white font-medium py-4 hover:bg-slate-800 transition-colors">
                                Request My Free Consultation
                            </button>
</div>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-slate-900 text-white py-20 border-t border-slate-800">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-2">
<a className="text-2xl font-semibold tracking-tighter mb-6 block" href="#home">
                        NINETY-ONE<span className="text-[#92400e]">SERVICES</span>
</a>
<p className="text-slate-400 text-sm max-w-sm leading-relaxed">The premier choice for large-scale fencing solutions in Oklahoma. We bridge the gap between heavy civil contracting and detailed craftsmanship for community boards and property managers.</p>
</div>
<div>
<h4 className="text-xs font-semibold uppercase tracking-widest text-[#92400e] mb-6">Quick Links</h4>
<ul className="space-y-4 text-sm text-slate-400">
<li><a className="hover:text-white transition-colors" href="#home">Home</a></li>
<li><a className="hover:text-white transition-colors" href="#services">Services</a></li>
<li><a className="hover:text-white transition-colors" href="#process">Our Process</a></li>
<li><a className="hover:text-white transition-colors" href="#testimonials">Testimonials</a></li>
<li><a className="hover:text-white transition-colors" href="#contact">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold uppercase tracking-widest text-[#92400e] mb-6">Contact</h4>
<ul className="space-y-4 text-sm text-slate-400">
<li>(918) 960-0775</li>
<li>office@ninety-oneservices.com</li>
<li>Broken Arrow, Oklahoma</li>
<li>Servicing Central &amp; NE Oklahoma</li>
</ul>
</div>
</div>
<div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center">
<p className="text-xs text-slate-500 mb-4 md:mb-0">© 2024 Ninety-One Services. All Rights Reserved.</p>
<div className="flex space-x-6 text-slate-500">
<iconify-icon className="hover:text-white cursor-pointer" icon="solar:facebook-linear" width="20"></iconify-icon>
<iconify-icon className="hover:text-white cursor-pointer" icon="solar:instagram-linear" width="20"></iconify-icon>
<iconify-icon className="hover:text-white cursor-pointer" icon="solar:check-read-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</footer>

    </>
  );
}
