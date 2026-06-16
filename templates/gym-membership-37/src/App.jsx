import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
brand: {
blue: '#10aeec',
lime: '#ccff00',
charcoal: '#1e1e1e',
gray: '#f5f7fa',
}
}
}
}
}



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bg-brand-charcoal text-white text-xs py-2.5">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-2">
<div className="flex flex-wrap items-center gap-6 justify-center md:justify-start">
<span className="flex items-center gap-2 opacity-90 hover:opacity-100 cursor-pointer transition-opacity">
<i className="w-3.5 h-3.5 text-brand-blue" data-lucide="phone"></i> (410) 432-6140
                </span>
<span className="flex items-center gap-2 opacity-90 hover:opacity-100 cursor-pointer transition-opacity">
<i className="w-3.5 h-3.5 text-brand-blue" data-lucide="mail"></i> info@rwfitness.com
                </span>
<span className="flex items-center gap-2 opacity-90 hidden sm:flex">
<i className="w-3.5 h-3.5 text-brand-blue" data-lucide="clock"></i> M-F 5am-8pm | Sat 7am-7pm | Sun 8am-6pm
                </span>
</div>
<div className="flex items-center gap-4 opacity-80 font-medium">
<a className="hover:text-brand-lime transition-colors" href="#">Gym Memberships</a>
<a className="hover:text-brand-lime transition-colors" href="#">Classes</a>
<a className="hover:text-brand-lime transition-colors" href="#">Picture Gallery</a>
<i className="w-3.5 h-3.5 cursor-pointer hover:text-white" data-lucide="search"></i>
</div>
</div>
</div>

<nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
<div className="max-w-7xl mx-auto px-6 py-4">
<div className="flex justify-between items-center">

<a className="text-2xl font-bold tracking-tighter text-slate-900 font-['Josefin_Sans']" href="#">
                    RW<span className="text-brand-blue">FITNESS</span>
</a>

<div className="hidden lg:flex items-center gap-8 font-medium text-sm">
<a className="text-slate-900 hover:text-brand-blue transition-colors" href="#">HOME</a>
<a className="hover:text-brand-blue transition-colors flex items-center gap-1" href="#">
                        GYM MEMBERSHIPS <i className="w-3 h-3" data-lucide="chevron-down"></i>
</a>
<a className="hover:text-brand-blue transition-colors flex items-center gap-1" href="#">
                        CLASSES <i className="w-3 h-3" data-lucide="chevron-down"></i>
</a>
<a className="hover:text-brand-blue transition-colors flex items-center gap-1" href="#">
                        PERSONAL TRAINERS <i className="w-3 h-3" data-lucide="chevron-down"></i>
</a>
<a className="hover:text-brand-blue transition-colors" href="#">RED LIGHT THERAPY</a>
<a className="hover:text-brand-blue transition-colors" href="#">ABOUT OUR GYM</a>
</div>

<div className="hidden md:flex items-center gap-3">
<a className="px-5 py-2.5 bg-brand-lime text-slate-900 text-xs font-bold uppercase tracking-wider rounded shadow-sm hover:shadow-md hover:bg-[#bfff00] transition-all transform hover:-translate-y-0.5" href="#">
                        Free Class
                    </a>
<a className="px-5 py-2.5 bg-brand-blue text-white text-xs font-bold uppercase tracking-wider rounded shadow-sm hover:shadow-md hover:bg-[#0e9bd1] transition-all transform hover:-translate-y-0.5" href="#">
                        Free Trial
                    </a>
</div>

<button className="lg:hidden text-slate-800">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</div>
</nav>

<section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Gym Background" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-slate-900/30"></div>
</div>
<div className="relative z-10 text-center max-w-4xl mx-auto px-6 mt-10">
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight leading-[1.1] drop-shadow-lg mb-6">
                STARTING AT JUST<br/>
<span className="text-brand-blue">$39 PER MONTH.</span>
</h1>
<p className="text-lg text-slate-200 max-w-2xl mx-auto mb-10 font-light">
                Experience premium fitness without the premium price tag. Join the community that builds strength together.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="px-8 py-4 bg-brand-lime text-slate-900 text-sm font-bold uppercase tracking-widest rounded-md hover:scale-105 transition-transform shadow-[0_0_20px_rgba(204,255,0,0.4)]">
                    Join Now
                </button>
<button className="px-8 py-4 bg-transparent border border-white text-white text-sm font-bold uppercase tracking-widest rounded-md hover:bg-white hover:text-slate-900 transition-colors">
                    View Plans
                </button>
</div>
</div>
</section>


<section className="relative z-20 px-6 -mt-24 pb-24">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group border border-slate-100">
<div className="w-14 h-14 bg-brand-blue/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-blue/20 transition-colors">
<i className="w-7 h-7 text-brand-blue" data-lucide="person-standing"></i>
</div>
<h3 className="text-2xl font-semibold text-slate-900 mb-2 tracking-tight">1. Pick Your Base.</h3>
<p className="text-base text-slate-500 leading-relaxed">Choose the membership tier that fits your lifestyle and fitness goals.</p>
</div>

<div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group border border-slate-100">
<div className="w-14 h-14 bg-brand-lime/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-lime/40 transition-colors">
<i className="w-7 h-7 text-[#aacc00]" data-lucide="flame"></i>
</div>
<h3 className="text-2xl font-semibold text-slate-900 mb-2 tracking-tight">2. Select Add On's.</h3>
<p className="text-base text-slate-500 leading-relaxed">Enhance your recovery with Infrared Saunas and Red Light Therapy.</p>
</div>

<div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group border border-slate-100">
<div className="w-14 h-14 bg-brand-blue/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-blue/20 transition-colors">
<i className="w-7 h-7 text-brand-blue" data-lucide="dumbbell"></i>
</div>
<h3 className="text-2xl font-semibold text-slate-900 mb-2 tracking-tight">3. Add Trainer Sessions.</h3>
<p className="text-base text-slate-500 leading-relaxed">Fast track your results with expert guidance and personal training.</p>
</div>
</div>
</section>

<section className="py-20 bg-white border-t border-slate-100">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-4">
                    BUILD YOUR PERFECT GYM MEMBERSHIP TODAY.
                </h2>
<div className="h-1 w-20 bg-brand-blue mx-auto rounded-full"></div>
</div>
<form className="space-y-8">

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="block text-sm font-medium text-slate-700" htmlFor="first-name">First Name <span className="text-red-500">*</span></label>
<input className="w-full px-4 py-3 bg-brand-gray border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-all" id="first-name" placeholder="Jane" type="text"/>
</div>
<div className="space-y-2">
<label className="block text-sm font-medium text-slate-700" htmlFor="last-name">Last Name <span className="text-red-500">*</span></label>
<input className="w-full px-4 py-3 bg-brand-gray border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-all" id="last-name" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="block text-sm font-medium text-slate-700" htmlFor="email">Email <span className="text-red-500">*</span></label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<i className="w-5 h-5 text-slate-400" data-lucide="mail"></i>
</div>
<input className="w-full pl-11 pr-4 py-3 bg-brand-gray border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-all" id="email" placeholder="you@example.com" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="block text-sm font-medium text-slate-700" htmlFor="phone">Phone <span className="text-red-500">*</span></label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<i className="w-5 h-5 text-slate-400" data-lucide="phone"></i>
</div>
<input className="w-full pl-11 pr-4 py-3 bg-brand-gray border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-all" id="phone" placeholder="(555) 123-4567" type="tel"/>
</div>
</div>
<div className="space-y-2 pt-4">
<label className="block text-sm font-medium text-slate-700" htmlFor="base-membership">Select Your Base (Monthly Membership) <span className="text-red-500">*</span></label>
<div className="relative">
<select className="w-full px-4 py-3 bg-brand-gray border border-slate-200 rounded-lg text-slate-900 appearance-none focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-all cursor-pointer" id="base-membership">
<option>Individual</option>
<option>Couple</option>
<option>Family</option>
</select>
<div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-slate-500">
<i className="w-5 h-5" data-lucide="chevron-down"></i>
</div>
</div>
</div>

<div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-8">

<div>
<h4 className="text-lg font-semibold text-slate-900 mb-4 font-['Josefin_Sans']">Add On's <span className="text-red-500">*</span></h4>
<div className="space-y-3">
<label className="relative flex items-start group cursor-pointer">
<div className="flex items-center h-6">
<input className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 border-2 border-slate-300 rounded bg-white peer-checked:bg-brand-blue peer-checked:border-brand-blue transition-all flex items-center justify-center">
<i className="w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100" data-lucide="check"></i>
</div>
</div>
<div className="ml-3 text-base text-slate-600 group-hover:text-slate-900 transition-colors">
                                    2 Infrared Sauna Sessions Per Month
                                </div>
</label>
<label className="relative flex items-start group cursor-pointer">
<div className="flex items-center h-6">
<input className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 border-2 border-slate-300 rounded bg-white peer-checked:bg-brand-blue peer-checked:border-brand-blue transition-all flex items-center justify-center">
<i className="w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100" data-lucide="check"></i>
</div>
</div>
<div className="ml-3 text-base text-slate-600 group-hover:text-slate-900 transition-colors">
                                    Unlimited Infrared Sauna Sessions Per Month
                                </div>
</label>
</div>
</div>

<div>
<h4 className="text-lg font-semibold text-slate-900 mb-4 font-['Josefin_Sans']">Personal Training <span className="text-red-500">*</span></h4>
<div className="space-y-3">
<label className="relative flex items-start group cursor-pointer">
<div className="flex items-center h-6">
<input className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 border-2 border-slate-300 rounded bg-white peer-checked:bg-brand-blue peer-checked:border-brand-blue transition-all flex items-center justify-center">
<i className="w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100" data-lucide="check"></i>
</div>
</div>
<div className="ml-3 text-base text-slate-600 group-hover:text-slate-900 transition-colors">
                                    1 Personal Training Session Per Month
                                </div>
</label>
<label className="relative flex items-start group cursor-pointer">
<div className="flex items-center h-6">
<input className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 border-2 border-slate-300 rounded bg-white peer-checked:bg-brand-blue peer-checked:border-brand-blue transition-all flex items-center justify-center">
<i className="w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100" data-lucide="check"></i>
</div>
</div>
<div className="ml-3 text-base text-slate-600 group-hover:text-slate-900 transition-colors">
                                    2 Personal Training Sessions Per Month
                                </div>
</label>
</div>
</div>
</div>
<div className="pt-8">
<button className="w-full bg-brand-charcoal text-white text-base font-semibold py-4 rounded-lg shadow-lg hover:bg-brand-blue transition-colors duration-300 flex justify-center items-center gap-2 group" type="submit">
                        Submit Application
                        <i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
<p className="text-center text-xs text-slate-400 mt-4">
                        By submitting this form, you agree to our Terms of Service and Privacy Policy.
                    </p>
</div>
</form>
</div>
</section>

<footer className="bg-white border-t border-slate-200 py-12 text-center">
<div className="text-slate-400 text-sm">
            © 2024 RW Fitness. All rights reserved.
        </div>
</footer>


    </>
  );
}
