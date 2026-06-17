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



tailwind.config = {
theme: {
extend: {
colors: {
brand: {
blue: '#10aeec',
lime: '#ccff00',
dark: '#1a1a1a',
light: '#f4f4f5'
}
}
}
}
}



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
      

<div className="bg-gray-900 text-white py-3 text-sm">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
<div className="flex items-center space-x-6">
<span className="flex items-center gap-2 text-gray-300"><i className="w-4 h-4 text-[#10aeec]" data-lucide="phone"></i> (410) 432-6140</span>
<span className="flex items-center gap-2 text-gray-300"><i className="w-4 h-4 text-[#10aeec]" data-lucide="mail"></i> info@rwfitness.com</span>
</div>
<div className="flex items-center gap-2 text-gray-300">
<i className="w-4 h-4 text-[#ccff00]" data-lucide="clock"></i>
<span>M-F 5am-8pm | Sat 7am-7pm | Sun 8am-6pm</span>
</div>
</div>
</div>

<nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

<div className="text-2xl font-semibold tracking-tighter uppercase text-gray-900">
                Rockwell<span className="text-[#10aeec]">Fitness</span>
</div>

<div className="hidden lg:flex items-center space-x-8 text-sm font-medium text-gray-600">
<a className="hover:text-[#10aeec] transition-colors" href="#">HOME</a>
<a className="hover:text-[#10aeec] transition-colors flex items-center gap-1" href="#">GYM MEMBERSHIPS <i className="w-3 h-3" data-lucide="chevron-down"></i></a>
<a className="hover:text-[#10aeec] transition-colors flex items-center gap-1" href="#">CLASSES <i className="w-3 h-3" data-lucide="chevron-down"></i></a>
<a className="hover:text-[#10aeec] transition-colors flex items-center gap-1" href="#">PERSONAL TRAINERS <i className="w-3 h-3" data-lucide="chevron-down"></i></a>
<a className="hover:text-[#10aeec] transition-colors" href="#">RED LIGHT THERAPY</a>
</div>

<div className="hidden md:flex items-center space-x-4">
<button className="bg-[#ccff00] text-gray-900 px-6 py-2.5 rounded-lg text-sm font-semibold tracking-tight hover:shadow-lg hover:brightness-95 transition-all">
                    FREE CLASS
                </button>
<button className="bg-[#10aeec] text-white px-6 py-2.5 rounded-lg text-sm font-semibold tracking-tight hover:shadow-lg hover:bg-sky-500 transition-all shadow-[#10aeec]/20 shadow-lg">
                    FREE TRIAL
                </button>
</div>

<div className="lg:hidden text-gray-900">
<i className="w-8 h-8" data-lucide="menu"></i>
</div>
</div>
</nav>

<header className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">

<img alt="Gym Background" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gray-900/60 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
<div className="relative z-10 text-center px-6">
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight drop-shadow-lg mb-4">
                GYM MEMBERSHIPS
            </h1>
<div className="w-24 h-1.5 bg-[#ccff00] mx-auto rounded-full"></div>
</div>
</header>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
<div className="lg:col-span-5">
<h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-[1.1] tracking-tight mb-6">
                        ALL THE PERKS.<br/>
<span className="text-gray-400">WITHOUT EXTRA FEES.</span>
</h2>
<div className="h-1 w-20 bg-[#10aeec] rounded-full"></div>
</div>
<div className="lg:col-span-7 grid md:grid-cols-2 gap-8 text-gray-600 text-lg">
<p>
                        When you join Rockwell Fitness, you get everything you need all in one place. Each member has access to tools, resources, equipment and classes that complement their unique health and fitness journey. Members get: unlimited classes, state-of-the-art weight equipment, indoor and outdoor training zones, a variety of cardio and nautilus equipment and more.
                    </p>
<p>
                        Looking for more? Members get exclusive discounts of specialty services and products, including Specialty classes, Health Programs, Pickleball, Cornhole Tournaments, Red Light Therapy, Kids parties, Smoothie Bar, Merchandise, and more.
                    </p>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

<div className="group p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#10aeec]/30 hover:shadow-xl hover:shadow-[#10aeec]/10 transition-all duration-300 text-center">
<div className="w-12 h-12 mx-auto bg-white rounded-xl shadow-sm flex items-center justify-center text-[#10aeec] mb-4 group-hover:scale-110 transition-transform">
<i data-lucide="activity" strokeWidth="1.5"></i>
</div>
<h3 className="text-base font-semibold text-gray-900 leading-tight">Cardio Equipment</h3>
</div>

<div className="group p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#10aeec]/30 hover:shadow-xl hover:shadow-[#10aeec]/10 transition-all duration-300 text-center">
<div className="w-12 h-12 mx-auto bg-white rounded-xl shadow-sm flex items-center justify-center text-[#10aeec] mb-4 group-hover:scale-110 transition-transform">
<i data-lucide="dumbbell" strokeWidth="1.5"></i>
</div>
<h3 className="text-base font-semibold text-gray-900 leading-tight">Nautilus Equipment</h3>
</div>

<div className="group p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#10aeec]/30 hover:shadow-xl hover:shadow-[#10aeec]/10 transition-all duration-300 text-center">
<div className="w-12 h-12 mx-auto bg-white rounded-xl shadow-sm flex items-center justify-center text-[#10aeec] mb-4 group-hover:scale-110 transition-transform">
<i data-lucide="sun" strokeWidth="1.5"></i>
</div>
<h3 className="text-base font-semibold text-gray-900 leading-tight">Outdoor Turf Area</h3>
</div>

<div className="group p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#10aeec]/30 hover:shadow-xl hover:shadow-[#10aeec]/10 transition-all duration-300 text-center">
<div className="w-12 h-12 mx-auto bg-white rounded-xl shadow-sm flex items-center justify-center text-[#10aeec] mb-4 group-hover:scale-110 transition-transform">
<i data-lucide="users" strokeWidth="1.5"></i>
</div>
<h3 className="text-base font-semibold text-gray-900 leading-tight">Unlimited Classes</h3>
</div>

<div className="group p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#10aeec]/30 hover:shadow-xl hover:shadow-[#10aeec]/10 transition-all duration-300 text-center">
<div className="w-12 h-12 mx-auto bg-white rounded-xl shadow-sm flex items-center justify-center text-[#10aeec] mb-4 group-hover:scale-110 transition-transform">
<i data-lucide="bike" strokeWidth="1.5"></i>
</div>
<h3 className="text-base font-semibold text-gray-900 leading-tight">Spin Studio</h3>
</div>

<div className="group p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#10aeec]/30 hover:shadow-xl hover:shadow-[#10aeec]/10 transition-all duration-300 text-center">
<div className="w-12 h-12 mx-auto bg-white rounded-xl shadow-sm flex items-center justify-center text-[#10aeec] mb-4 group-hover:scale-110 transition-transform">
<i data-lucide="weight" strokeWidth="1.5"></i>
</div>
<h3 className="text-base font-semibold text-gray-900 leading-tight">Weight Room</h3>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 relative overflow-hidden">
<div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#10aeec]/5 to-transparent"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

<div>
<h2 className="text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight mb-6">
                    READY TO JOIN THE ROCK?
                </h2>
<p className="text-gray-600 mb-8 text-xl">
                    Get A Free Trial Membership With The Click Of A Button.
                </p>
<div className="flex items-center gap-4 text-sm font-semibold text-gray-500">
<span className="flex items-center gap-2"><i className="w-5 h-5 text-[#ccff00] fill-gray-900" data-lucide="check-circle"></i> NO COMMITMENT</span>
<span className="flex items-center gap-2"><i className="w-5 h-5 text-[#ccff00] fill-gray-900" data-lucide="check-circle"></i> FULL ACCESS</span>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 relative z-10">
<h3 className="text-2xl font-semibold text-gray-900 mb-6">FREE TRIAL</h3>
<form className="space-y-5">
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Name <span className="text-red-500">*</span></label>
<input className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-[#10aeec] focus:border-transparent outline-none transition-all" placeholder="John Doe" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Email <span className="text-red-500">*</span></label>
<input className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-[#10aeec] focus:border-transparent outline-none transition-all" placeholder="john@example.com" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Phone <span className="text-red-500">*</span></label>
<input className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-[#10aeec] focus:border-transparent outline-none transition-all" placeholder="(555) 123-4567" type="tel"/>
</div>
<label className="flex items-start gap-3 cursor-pointer group custom-checkbox">
<input className="hidden" type="checkbox"/>
<div className="w-5 h-5 mt-1 border-2 border-gray-300 rounded flex items-center justify-center transition-colors">
<i className="w-3 h-3 text-white hidden" data-lucide="check"></i>
</div>
<span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">Yes! I want 1 DAY FREE Trial Before I Buy *</span>
</label>
<button className="w-full bg-gray-900 text-white font-semibold py-4 rounded-lg hover:bg-[#10aeec] transition-all duration-300 shadow-lg hover:shadow-[#10aeec]/25 mt-4" type="button">
                        Submit Application
                    </button>
</form>
</div>
</div>
</section>

<section className="bg-gray-900 text-white py-20 text-center px-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
            NO HIDDEN FEES. GREAT VALUE. <span className="text-[#ccff00]">ALL IN ONE PLACE.</span>
</h2>
<p className="max-w-4xl mx-auto text-gray-400 text-lg leading-relaxed">
            Choose the membership that best fits your unique fitness and health goals. We proudly offer some of the most versatile and affordable gym membership options in Anne Arundel County. From family memberships to student memberships, we've got the perfect membership for you.
        </p>
</section>

<section className="py-24 max-w-7xl mx-auto px-6">
<div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-24 items-center">

<div className="flex-1 w-full">
<h2 className="text-4xl font-semibold text-gray-900 mb-6 tracking-tight">AMENITIES</h2>
<p className="text-gray-600 mb-8">Members enjoy exclusive discounts on specialty amenities:</p>
<div className="space-y-4 mb-10">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-[#10aeec]/10 flex items-center justify-center">
<i className="w-3.5 h-3.5 text-[#10aeec] stroke-[3px]" data-lucide="check"></i>
</div>
<span className="text-gray-700 font-medium">FX Physical Therapy</span>
</div>
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-[#10aeec]/10 flex items-center justify-center">
<i className="w-3.5 h-3.5 text-[#10aeec] stroke-[3px]" data-lucide="check"></i>
</div>
<span className="text-gray-700 font-medium">Smoothie Bar</span>
</div>
</div>

<div className="space-y-2">
<div className="p-4 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-between cursor-pointer group hover:bg-white hover:shadow-md transition-all">
<div className="flex items-center gap-4">
<div className="p-2 bg-white rounded-lg shadow-sm group-hover:text-[#10aeec]">
<i className="w-5 h-5" data-lucide="store"></i>
</div>
<span className="font-semibold text-gray-900">Amenities</span>
</div>
<i className="w-5 h-5 text-gray-400 group-hover:text-[#10aeec]" data-lucide="chevron-right"></i>
</div>
<div className="p-4 rounded-xl border border-transparent flex items-center justify-between cursor-pointer group hover:bg-gray-50 transition-all opacity-60 hover:opacity-100">
<div className="flex items-center gap-4">
<div className="p-2 bg-gray-100 rounded-lg">
<i className="w-5 h-5" data-lucide="zap"></i>
</div>
<span className="font-semibold text-gray-900">Performance</span>
</div>
</div>
<div className="p-4 rounded-xl border border-transparent flex items-center justify-between cursor-pointer group hover:bg-gray-50 transition-all opacity-60 hover:opacity-100">
<div className="flex items-center gap-4">
<div className="p-2 bg-gray-100 rounded-lg">
<i className="w-5 h-5" data-lucide="sparkles"></i>
</div>
<span className="font-semibold text-gray-900">Beauty</span>
</div>
</div>
</div>
</div>

<div className="flex-1 w-full">
<div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-gray-200 aspect-[4/3]">
<img alt="Woman drinking smoothie" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
</div>
</div>
</div>
</section>

<section className="bg-gray-50 border-t border-gray-200">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2">

<div className="py-24 pr-12 lg:border-r border-gray-200">
<h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight mb-8">
                    MEMBER ONLY PRICING ON SPECIALTY OFFERINGS
                </h2>
<p className="text-gray-600 font-medium mb-8">Members enjoy exclusive discounts on specialty products, services and amenities.</p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#10aeec]"></span>
<span className="text-gray-700">Specialty classes</span>
</li>
<li className="flex items-start gap-3">
<span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#10aeec]"></span>
<span className="text-gray-700">Programs</span>
</li>
<li className="flex items-start gap-3">
<span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#10aeec]"></span>
<span className="text-gray-700">Cornhole Tournaments</span>
</li>
<li className="flex items-start gap-3">
<span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#10aeec]"></span>
<span className="text-gray-700">Smoothie Bar</span>
</li>
<li className="flex items-start gap-3">
<span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#10aeec]"></span>
<span className="text-gray-700">Merchandise</span>
</li>
<li className="flex items-start gap-3">
<span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#10aeec]"></span>
<span className="text-gray-700">Red Light Therapy</span>
</li>
<li className="flex items-start gap-3">
<span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#10aeec]"></span>
<span className="text-gray-700">Kid Birthday parties</span>
</li>
</ul>
</div>

<div className="py-24 lg:pl-12">
<h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight mb-8">
                    START YOUR FITNESS JOURNEY TODAY!
                </h2>
<form className="space-y-6">
<div className="space-y-1">
<label className="block text-sm font-medium text-gray-700">Name <span className="text-red-500">*</span></label>
<input className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:ring-2 focus:ring-[#10aeec] focus:border-transparent outline-none shadow-sm" placeholder="Your Name" type="text"/>
</div>
<div className="space-y-1">
<label className="block text-sm font-medium text-gray-700">Email <span className="text-red-500">*</span></label>
<input className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:ring-2 focus:ring-[#10aeec] focus:border-transparent outline-none shadow-sm" placeholder="you@email.com" type="email"/>
</div>
<div className="space-y-1">
<label className="block text-sm font-medium text-gray-700">Phone <span className="text-red-500">*</span></label>
<input className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:ring-2 focus:ring-[#10aeec] focus:border-transparent outline-none shadow-sm" placeholder="(555) 555-5555" type="tel"/>
</div>
<div className="pt-4">
<p className="font-semibold text-gray-900 mb-2">What are you interested in?</p>
<p className="text-sm text-gray-500 mb-4">Please select all that apply (hold down control button when selecting multiple)</p>
<div className="space-y-3">
<label className="flex items-center gap-3 cursor-pointer group custom-checkbox">
<input className="hidden" type="checkbox"/>
<div className="w-5 h-5 border border-gray-300 rounded flex items-center justify-center transition-colors bg-white">
<i className="w-3 h-3 text-white hidden" data-lucide="check"></i>
</div>
<span className="text-gray-700 group-hover:text-gray-900">Gym Membership</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group custom-checkbox">
<input className="hidden" type="checkbox"/>
<div className="w-5 h-5 border border-gray-300 rounded flex items-center justify-center transition-colors bg-white">
<i className="w-3 h-3 text-white hidden" data-lucide="check"></i>
</div>
<span className="text-gray-700 group-hover:text-gray-900">Boxing</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group custom-checkbox">
<input className="hidden" type="checkbox"/>
<div className="w-5 h-5 border border-gray-300 rounded flex items-center justify-center transition-colors bg-white">
<i className="w-3 h-3 text-white hidden" data-lucide="check"></i>
</div>
<span className="text-gray-700 group-hover:text-gray-900">Personal Training (in-person)</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group custom-checkbox">
<input className="hidden" type="checkbox"/>
<div className="w-5 h-5 border border-gray-300 rounded flex items-center justify-center transition-colors bg-white">
<i className="w-3 h-3 text-white hidden" data-lucide="check"></i>
</div>
<span className="text-gray-700 group-hover:text-gray-900">Weight Loss</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group custom-checkbox">
<input className="hidden" type="checkbox"/>
<div className="w-5 h-5 border border-gray-300 rounded flex items-center justify-center transition-colors bg-white">
<i className="w-3 h-3 text-white hidden" data-lucide="check"></i>
</div>
<span className="text-gray-700 group-hover:text-gray-900">Infrared Red Light Therapy</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group custom-checkbox">
<input className="hidden" type="checkbox"/>
<div className="w-5 h-5 border border-gray-300 rounded flex items-center justify-center transition-colors bg-white">
<i className="w-3 h-3 text-white hidden" data-lucide="check"></i>
</div>
<span className="text-gray-700 group-hover:text-gray-900">Infrared Sauna</span>
</label>
</div>
</div>
<button className="bg-gray-900 text-white font-semibold py-4 px-8 rounded-lg hover:bg-[#10aeec] transition-all duration-300 shadow-lg mt-6 w-full md:w-auto" type="button">
                        Submit
                    </button>
</form>
</div>
</div>
</section>
<footer className="bg-gray-900 text-white py-8 text-center text-sm text-gray-400">
<div className="max-w-7xl mx-auto px-6">
<p>© 2023 Rockwell Fitness. All rights reserved.</p>
</div>
</footer>


    </>
  );
}
