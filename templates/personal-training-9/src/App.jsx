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



        lucide.createIcons();
    
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
      

<header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex-shrink-0 flex items-center gap-2">
<span className="font-heading font-semibold text-2xl tracking-tight text-slate-900">ROCKWELL<span className="text-[#10aeec]">FITNESS</span></span>
</div>

<nav className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
<a className="hover:text-[#10aeec] transition-colors" href="#">HOME</a>
<a className="hover:text-[#10aeec] transition-colors" href="#">GYM MEMBERSHIPS</a>
<a className="hover:text-[#10aeec] transition-colors" href="#">CLASSES</a>
<a className="text-[#10aeec]" href="#">PERSONAL TRAINERS</a>
<a className="hover:text-[#10aeec] transition-colors" href="#">RED LIGHT THERAPY</a>
</nav>

<div className="hidden md:flex items-center space-x-4">
<a className="bg-[#ccff00] text-slate-900 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide hover:brightness-95 transition-all" href="#">FREE CLASS</a>
<a className="bg-[#10aeec] text-white px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide hover:bg-[#0d9bd4] transition-all" href="#">FREE TRIAL</a>
</div>

<button className="md:hidden text-slate-600">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</div>
</header>

<section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Personal Training High Five" className="w-full h-full object-cover object-center brightness-[0.65]" src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/30"></div>
</div>
<div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
<div className="max-w-4xl mx-auto space-y-6">
<span className="inline-block py-1 px-3 rounded-full bg-[#ccff00]/90 text-slate-900 text-xs font-semibold uppercase tracking-wider mb-2 backdrop-blur-sm">
                    Premium Coaching
                </span>
<h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-white font-semibold tracking-tight leading-[1.1]">
                    You're Busy. <br className="hidden md:block"/>But You Want Results.
                </h1>
<p className="text-xl md:text-2xl text-slate-200 font-light max-w-2xl mx-auto">
                    We're Here To Help.
                </p>
<div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto bg-[#10aeec] text-white px-8 py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-[#0d9bd4] hover:shadow-lg hover:shadow-[#10aeec]/30 transition-all transform hover:-translate-y-0.5 duration-200 flex items-center justify-center gap-2" href="#form-section">
                        GET STARTED WITH PERSONAL TRAINING TODAY
                        <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-3xl mx-auto px-6">
<div className="prose prose-lg prose-slate max-w-none">

<p className="text-xl text-slate-800 leading-relaxed font-medium mb-12 border-l-4 border-[#10aeec] pl-6">
                    We understand that investing in your health can be a big decision, but the benefits are truly priceless.
                </p>
<div className="space-y-8 text-slate-600 leading-relaxed text-base md:text-lg">
<p>
                        At Rockwell, our personal training rates are competitive with other gyms in the area and we offer various membership options to fit different budgets. Additionally, we offer promotions and discounts for first-time members, and student or military personal.
                    </p>
<div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
<h3 className="text-2xl font-heading font-semibold text-slate-900 tracking-tight mb-4">
                            Furthermore, think about the long term savings by choosing to invest in your health by working out with a dedicated personal trainer.
                        </h3>
<p className="mb-4">
                            You'll be saving money on medical bills and other health-related expenses in the long run, not to mention the increase in productivity and overall well-being.
                        </p>
<p>
                            Also consider the cost of other activities that might not be as beneficial for your health like going out to eat frequently or subscribing to streaming services. Personal training sessions offer a great value when you compare it to these types of recurring expenses. Our certified fitness trainers work with all ages and levels of fitness.
                        </p>
</div>
<p className="font-medium text-slate-900">
                        No matter what your health and fitness goals, our incredible training staff can help you accomplish your goals with a custom plan.
                    </p>
<p>
                        Suffering from a previous injury? No problem. Our trainers are certified and understand how to not only prevent injuries but accommodate those recovering from injuries as well. From athletes to those recovering from previous medical procedures, our team of personal fitness trainers will develop custom nutrition and workout plans to help you reach your goals.
                    </p>
<p>
                        We truly believe that everyone should have access to a healthy and active lifestyle and we are dedicated to helping you reach your fitness goals. That's why we invite you to take advantage of our free trial offer so you can experience everything our gym has to offer before committing to a membership.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="font-heading text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">
                    More Information On Personal Training
                </h2>
<div className="h-1 w-20 bg-[#10aeec] mx-auto rounded-full"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<article className="group bg-white rounded-2xl shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 overflow-hidden border border-slate-100 flex flex-col h-full">
<div className="relative h-64 overflow-hidden">
<img alt="Considerations When Hiring" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="p-8 flex-1 flex flex-col">
<h3 className="font-heading text-xl font-semibold text-slate-900 mb-3 leading-tight group-hover:text-[#10aeec] transition-colors">
                            Considerations When Hiring A Personal Trainer For Weight Loss
                        </h3>
<p className="text-xs font-medium text-slate-400 mb-4 uppercase tracking-wide">January 11, 2023</p>
<p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                            When it comes to hiring a personal trainer for weight loss, there are a few important considerations [...]
                        </p>
<div className="mt-auto">
<span className="text-[#10aeec] text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                                Read Article <i className="w-4 h-4" data-lucide="arrow-right"></i>
</span>
</div>
</div>
</article>

<article className="group bg-white rounded-2xl shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 overflow-hidden border border-slate-100 flex flex-col h-full">
<div className="relative h-64 overflow-hidden">
<img alt="Gym Membership" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="p-8 flex-1 flex flex-col">
<h3 className="font-heading text-xl font-semibold text-slate-900 mb-3 leading-tight group-hover:text-[#10aeec] transition-colors">
                            Anne Arundel County Gym Launches Build Your Own Gym Membership in January 2023
                        </h3>
<p className="text-xs font-medium text-slate-400 mb-4 uppercase tracking-wide">January 10, 2023</p>
<p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                            Rockwell Fitness, a popular gym and fitness venue located in Severna Park, MD launches a new gym membership [...]
                        </p>
<div className="mt-auto">
<span className="text-[#10aeec] text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                                Read Article <i className="w-4 h-4" data-lucide="arrow-right"></i>
</span>
</div>
</div>
</article>

<article className="group bg-white rounded-2xl shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 overflow-hidden border border-slate-100 flex flex-col h-full">
<div className="relative h-64 overflow-hidden">
<img alt="4 Sessions" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="p-8 flex-1 flex flex-col">
<h3 className="font-heading text-xl font-semibold text-slate-900 mb-3 leading-tight group-hover:text-[#10aeec] transition-colors">
                            Why Booking 4 Sessions With A Personal Trainer Can Help You Achieve Your Fitness Goals
                        </h3>
<p className="text-xs font-medium text-slate-400 mb-4 uppercase tracking-wide">Severna Park, Maryland July 11, 2022</p>
<p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                            If you've ever tried to start or re-start a gym routine, you know it's [...]
                        </p>
<div className="mt-auto">
<span className="text-[#10aeec] text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                                Read Article <i className="w-4 h-4" data-lucide="arrow-right"></i>
</span>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="form-section">
<div className="max-w-2xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="font-heading text-3xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-4">
                    Request More Info On <br/> <span className="text-[#10aeec]">Personal Training Services</span>
</h2>
<p className="text-slate-500 text-lg">
                    Complete the short form below and we will be in touch within a couple business days.
                </p>
</div>
<form className="space-y-6 bg-white p-2">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="space-y-2">
<label className="block text-sm font-semibold text-slate-700" htmlFor="firstName">First Name <span className="text-red-500">*</span></label>
<input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#10aeec] focus:border-[#10aeec] outline-none transition-all placeholder:text-slate-400" id="firstName" required="" type="text"/>
</div>

<div className="space-y-2">
<label className="block text-sm font-semibold text-slate-700" htmlFor="lastName">Last Name <span className="text-red-500">*</span></label>
<input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#10aeec] focus:border-[#10aeec] outline-none transition-all placeholder:text-slate-400" id="lastName" required="" type="text"/>
</div>
</div>

<div className="space-y-2">
<label className="block text-sm font-semibold text-slate-700" htmlFor="email">Email <span className="text-red-500">*</span></label>
<input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#10aeec] focus:border-[#10aeec] outline-none transition-all placeholder:text-slate-400" id="email" required="" type="email"/>
</div>

<div className="space-y-2">
<label className="block text-sm font-semibold text-slate-700" htmlFor="phone">Phone <span className="text-red-500">*</span></label>
<input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#10aeec] focus:border-[#10aeec] outline-none transition-all placeholder:text-slate-400" id="phone" required="" type="tel"/>
</div>

<div className="space-y-2">
<label className="block text-sm font-semibold text-slate-700" htmlFor="zip">Zip <span className="text-red-500">*</span></label>
<input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#10aeec] focus:border-[#10aeec] outline-none transition-all placeholder:text-slate-400" id="zip" required="" type="text"/>
</div>

<div className="space-y-2">
<label className="block text-sm font-semibold text-slate-700" htmlFor="goals">Tell us about your personal training goals (ie. weight loss, cardio fitness, etc.) <span className="text-red-500">*</span></label>
<textarea className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#10aeec] focus:border-[#10aeec] outline-none transition-all placeholder:text-slate-400 resize-none" id="goals" required="" rows="4"></textarea>
</div>

<div className="space-y-2">
<label className="block text-sm font-semibold text-slate-700" htmlFor="memberStatus">Are you currently a member of Rockwell Fitness? <span className="text-red-500">*</span></label>
<div className="relative">
<select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#10aeec] focus:border-[#10aeec] outline-none transition-all appearance-none" id="memberStatus" required="">
<option disabled="" selected="" value="">Select an option</option>
<option value="yes">Yes</option>
<option value="no">No</option>
</select>
<i className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>

<div className="pt-6">
<button className="w-full bg-slate-800 text-white font-semibold text-lg py-4 rounded-lg shadow-lg shadow-slate-300 hover:bg-[#10aeec] hover:shadow-[#10aeec]/30 transform active:scale-[0.99] transition-all duration-200" type="submit">
                        Submit Request
                    </button>
</div>
</form>
</div>
</section>

<footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
<div className="mb-4 md:mb-0">
<span className="font-heading font-semibold text-2xl tracking-tight">ROCKWELL<span className="text-[#10aeec]">FITNESS</span></span>
<p className="text-slate-500 text-sm mt-2">© 2023 Rockwell Fitness. All rights reserved.</p>
</div>
<div className="flex space-x-6">
<a className="text-slate-400 hover:text-white transition-colors" href="#"><i className="w-6 h-6" data-lucide="instagram"></i></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><i className="w-6 h-6" data-lucide="facebook"></i></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><i className="w-6 h-6" data-lucide="twitter"></i></a>
</div>
</div>
</footer>


    </>
  );
}
