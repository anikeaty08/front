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
      

<div className="bg-slate-900 text-slate-300 text-xs py-2.5">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-2">
<div className="flex items-center gap-4">
<a className="flex items-center gap-1.5 hover:text-white transition-colors" href="tel:+919776646876">
<iconify-icon icon="solar:phone-calling-linear" strokeWidth="1.5" width="14"></iconify-icon>
                    +(91) 97766 46876
                </a>
<a className="flex items-center gap-1.5 hover:text-white transition-colors" href="mailto:info@amstudies.co.in">
<iconify-icon icon="solar:letter-linear" strokeWidth="1.5" width="14"></iconify-icon>
                    info@amstudies.co.in
                </a>
</div>
<div className="flex items-center gap-3 opacity-80">
<iconify-icon className="cursor-pointer hover:text-white" icon="solar:facebook-linear" width="16"></iconify-icon>
<iconify-icon className="cursor-pointer hover:text-white" icon="solar:instagram-linear" width="16"></iconify-icon>
<iconify-icon className="cursor-pointer hover:text-white" icon="solar:globe-linear" width="16"></iconify-icon>
</div>
</div>
</div>

<header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 py-4">
<div className="flex justify-between items-center">

<div className="flex flex-col">
<h1 className="text-xl md:text-2xl font-semibold text-slate-900 tracking-tight leading-none">
                        AMS
                    </h1>
<span className="text-xs font-medium text-slate-500 tracking-wide mt-1 uppercase">Academy Of Management Studies</span>
</div>

<nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
<a className="text-slate-900 hover:text-indigo-600 transition-colors" href="#">Home</a>
<a className="text-slate-500 hover:text-slate-900 transition-colors" href="#about">About</a>
<a className="text-slate-500 hover:text-slate-900 transition-colors" href="#">Academic</a>
<a className="text-slate-500 hover:text-slate-900 transition-colors" href="#">Placement</a>
<a className="text-slate-500 hover:text-slate-900 transition-colors" href="#">Gallery</a>
<a className="text-slate-500 hover:text-slate-900 transition-colors" href="#">Scholarship</a>
<a className="px-4 py-2 bg-slate-900 text-white rounded-md hover:bg-slate-800 transition-colors text-xs font-medium tracking-wide" href="#contact">Contact</a>
</nav>

<label className="lg:hidden cursor-pointer p-2 text-slate-900" htmlFor="mobile-menu-toggle">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</label>
</div>
</div>

<input className="hidden" id="mobile-menu-toggle" type="checkbox"/>
<div className="hidden lg:hidden border-t border-slate-100 bg-white absolute w-full left-0 shadow-lg" id="mobile-menu">
<nav className="flex flex-col p-6 gap-4 text-sm font-medium">
<a className="text-slate-900" href="#">Home</a>
<a className="text-slate-500" href="#about">About</a>
<a className="text-slate-500" href="#">Academic</a>
<a className="text-slate-500" href="#">Placement</a>
<a className="text-slate-500" href="#">Gallery</a>
<a className="text-slate-500" href="#">Contact</a>
</nav>
</div>
</header>

<section className="relative pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden bg-white">

<div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-medium mb-6">
<iconify-icon icon="solar:verified-check-linear" width="14"></iconify-icon>
                Reg. By Govt. of Odisha
            </div>
<h2 className="text-4xl md:text-6xl font-medium text-slate-900 tracking-tight mb-4 max-w-4xl mx-auto">
                Shaping the Future of <br className="hidden md:block"/>
<span className="text-slate-400">Tourism &amp; Hospitality.</span>
</h2>
<p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-8 font-light leading-relaxed">
                Affiliated to Utkal University of Culture. Empowering students with outcome-based education in North Odisha.
            </p>
<div className="flex justify-center gap-4">
<a className="px-6 py-3 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition-all flex items-center gap-2" href="#about">
                    Discover AMS
                    <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<a className="px-6 py-3 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 transition-all" href="#">
                    Admission Inquiry
                </a>
</div>
</div>
</section>

<section className="py-16 bg-slate-50 border-y border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-center justify-between mb-10">
<h3 className="text-2xl font-medium text-slate-900 tracking-tight flex items-center gap-2">
<iconify-icon className="text-indigo-600" icon="solar:bell-bing-linear"></iconify-icon>
                    Notifications
                </h3>
<a className="text-xs font-medium text-indigo-600 hover:text-indigo-700 flex items-center gap-1" href="#">
                    View Archive <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-md transition-shadow group">
<div className="flex items-center gap-2 text-xs font-medium text-amber-600 mb-3 bg-amber-50 w-fit px-2 py-1 rounded">
<iconify-icon icon="solar:calendar-linear"></iconify-icon> Holiday
                    </div>
<h4 className="text-slate-900 font-medium mb-2 group-hover:text-indigo-600 transition-colors">Durga Puja Vacation</h4>
<p className="text-sm text-slate-500 mb-4">Holiday Notification from 28th.</p>
<div className="text-xs text-slate-400 pt-3 border-t border-slate-100 flex justify-between">
<span>Start: 20/09/2025</span>
<span>End: 08/10/2025</span>
</div>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-md transition-shadow group">
<div className="flex items-center gap-2 text-xs font-medium text-indigo-600 mb-3 bg-indigo-50 w-fit px-2 py-1 rounded">
<iconify-icon icon="solar:document-text-linear"></iconify-icon> Exam
                    </div>
<h4 className="text-slate-900 font-medium mb-2 group-hover:text-indigo-600 transition-colors">1st Mid Sem BHM Exam-2024</h4>
<p className="text-sm text-slate-500 mb-4">Exam schedule released.</p>
<div className="text-xs text-slate-400 pt-3 border-t border-slate-100 flex justify-between">
<span>Start: 06/08/2025</span>
<span>End: 31/12/2025</span>
</div>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-md transition-shadow group">
<div className="flex items-center gap-2 text-xs font-medium text-teal-600 mb-3 bg-teal-50 w-fit px-2 py-1 rounded">
<iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon> Committee
                    </div>
<h4 className="text-slate-900 font-medium mb-2 group-hover:text-indigo-600 transition-colors">Formation of ICC</h4>
<p className="text-sm text-slate-500 mb-4">Internal Complaint Committee setup.</p>
<div className="text-xs text-slate-400 pt-3 border-t border-slate-100 flex justify-between">
<span>Start: 19/07/2025</span>
<span>End: 31/12/2026</span>
</div>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-md transition-shadow group">
<div className="flex items-center gap-2 text-xs font-medium text-rose-600 mb-3 bg-rose-50 w-fit px-2 py-1 rounded">
<iconify-icon icon="solar:confetti-linear"></iconify-icon> Festival
                    </div>
<h4 className="text-slate-900 font-medium mb-2 group-hover:text-indigo-600 transition-colors">Holiday on Rajo Festival</h4>
<p className="text-sm text-slate-500 mb-4">Institute closed for Rajo.</p>
<div className="text-xs text-slate-400 pt-3 border-t border-slate-100 flex justify-between">
<span>Start: 12/06/2025</span>
<span>End: 31/08/2025</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-5 order-2 lg:order-1 relative">
<div className="aspect-[4/5] bg-slate-100 rounded-2xl overflow-hidden relative">

<div className="absolute inset-0 flex items-center justify-center bg-slate-200 text-slate-400">
<iconify-icon icon="solar:user-linear" width="64"></iconify-icon>
</div>
</div>
<div className="absolute -bottom-6 -right-6 bg-white p-4 shadow-xl border border-slate-100 rounded-lg max-w-xs hidden md:block">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
<iconify-icon icon="solar:quote-up-linear"></iconify-icon>
</div>
<div>
<p className="text-xs font-medium text-slate-900">Mr. Shubhajit Bera</p>
<p className="text-[10px] text-slate-500 uppercase tracking-wide">Principal, AMS</p>
</div>
</div>
</div>
</div>
<div className="lg:col-span-7 order-1 lg:order-2">
<span className="text-indigo-600 font-medium tracking-wide text-xs uppercase mb-2 block">Secretary Desk</span>
<h3 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight mb-6">Principal Message</h3>
<div className="prose prose-slate text-slate-500 leading-relaxed space-y-4">
<p>Welcome to AMS, the premier Tourism &amp; Hospitality college of North Odisha, recognized by the Government of Odisha and affiliated with Utkal University of Culture, Bhubaneswar.</p>
<p>At AMS, our mission is to provide outcome-based education that equips students with the skills and knowledge required for today’s and tomorrow’s Tourism &amp; Hospitality industry. Our experienced and industry-savvy faculty, combined with a friendly learning environment and a lush green campus, ensures that every student receives personalized attention and guidance.</p>
</div>
<div className="mt-8 pt-8 border-t border-slate-100 flex items-center gap-4">
<div className="text-sm">
<span className="block text-slate-900 font-medium">Shubhajit Bera</span>
<span className="text-slate-400 text-xs">Principal, Academy of Management Studies</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50/50">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h3 className="text-2xl md:text-3xl font-medium text-slate-900 tracking-tight">Administration</h3>
<p className="text-slate-500 mt-2 text-sm">The leadership team guiding AMS towards excellence.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl border border-slate-200 text-center hover:-translate-y-1 transition-transform duration-300">
<div className="w-20 h-20 mx-auto rounded-full bg-slate-100 mb-6 flex items-center justify-center text-slate-400">
<iconify-icon icon="solar:user-circle-linear" width="32"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-slate-900">Dr. Ganeswar Bhoi</h4>
<p className="text-xs text-indigo-600 uppercase tracking-wide mt-1 font-medium">Chairman Advisory Committee</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 text-center hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden">
<div className="w-20 h-20 mx-auto rounded-full bg-slate-100 mb-6 flex items-center justify-center text-slate-400">
<iconify-icon icon="solar:user-circle-linear" width="32"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-slate-900">Mrs. Priyanka Singh Deo</h4>
<p className="text-xs text-indigo-600 uppercase tracking-wide mt-1 font-medium">Director</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 text-center hover:-translate-y-1 transition-transform duration-300">
<div className="w-20 h-20 mx-auto rounded-full bg-slate-100 mb-6 flex items-center justify-center text-slate-400">
<iconify-icon icon="solar:user-circle-linear" width="32"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-slate-900">Mr. Shubhajit Bera</h4>
<p className="text-xs text-indigo-600 uppercase tracking-wide mt-1 font-medium">Principal</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-6">
<h3 className="text-2xl font-medium text-slate-900 tracking-tight mb-8">Success Stories</h3>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="aspect-square bg-slate-100 rounded-lg flex flex-col items-center justify-center text-slate-400 border border-slate-200 border-dashed">
<iconify-icon className="mb-2 opacity-50" icon="solar:gallery-linear" width="32"></iconify-icon>
<span className="text-xs">Student Success</span>
</div>
<div className="aspect-square bg-slate-100 rounded-lg flex flex-col items-center justify-center text-slate-400 border border-slate-200 border-dashed">
<iconify-icon className="mb-2 opacity-50" icon="solar:gallery-linear" width="32"></iconify-icon>
<span className="text-xs">Placement Record</span>
</div>
<div className="aspect-square bg-slate-100 rounded-lg flex flex-col items-center justify-center text-slate-400 border border-slate-200 border-dashed">
<iconify-icon className="mb-2 opacity-50" icon="solar:gallery-linear" width="32"></iconify-icon>
<span className="text-xs">Alumni</span>
</div>
<div className="aspect-square bg-slate-100 rounded-lg flex flex-col items-center justify-center text-slate-400 border border-slate-200 border-dashed">
<iconify-icon className="mb-2 opacity-50" icon="solar:gallery-linear" width="32"></iconify-icon>
<span className="text-xs">Achievements</span>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-900 text-white" id="about">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
<div>
<h3 className="text-2xl font-medium tracking-tight mb-6">About AMS</h3>
<p className="text-slate-400 leading-relaxed font-light mb-6">
                    AMS is the premiere hotel management institute of North Odisha (Eastern India). This institution is established under the Indian Trust ACT 1882, Recognised and Registered by the Govt. of Odisha (Department of Tourism &amp; Culture) vide letter No. UC–25/06/TC, DT–19/06/06.
                </p>
<a className="text-white hover:text-indigo-300 text-sm font-medium flex items-center gap-2" href="#">
                    Read more history <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-2 gap-8">
<div>
<h4 className="font-medium text-lg mb-4">More Links</h4>
<ul className="space-y-3 text-sm text-slate-400">
<li><a className="hover:text-white transition-colors" href="#">About AMS</a></li>
<li><a className="hover:text-white transition-colors" href="#">Staff</a></li>
<li><a className="hover:text-white transition-colors" href="#">Notification</a></li>
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-lg mb-4">Useful Links</h4>
<ul className="space-y-3 text-sm text-slate-400">
<li><a className="hover:text-white transition-colors" href="#">UUC</a></li>
<li><a className="hover:text-white transition-colors" href="#">UGC</a></li>
<li><a className="hover:text-white transition-colors" href="#">India Tourism</a></li>
<li><a className="hover:text-white transition-colors" href="#">Odisha Tourism</a></li>
</ul>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200" id="contact">
<div className="max-w-7xl mx-auto px-6 py-16">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">

<div>
<h2 className="text-xl font-semibold text-slate-900 tracking-tight">AMS</h2>
<p className="text-xs text-slate-500 mt-2">Academy Of Management Studies</p>
<div className="flex gap-4 mt-6">
<a className="text-slate-400 hover:text-slate-900" href="#"><iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-slate-900" href="#"><iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-slate-900" href="#"><iconify-icon icon="solar:twitter-linear" width="20"></iconify-icon></a>
</div>
</div>

<div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
<div>
<h4 className="text-sm font-medium text-slate-900 uppercase tracking-wide mb-4">Visit Us</h4>
<div className="flex items-start gap-3 text-sm text-slate-500">
<iconify-icon className="mt-1 shrink-0" icon="solar:map-point-linear"></iconify-icon>
<p>At/Po– Gangraj, Side by NH – 18,<br/>Odisha Pin - 757105</p>
</div>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900 uppercase tracking-wide mb-4">Get in touch</h4>
<div className="space-y-3 text-sm text-slate-500">
<div className="flex items-center gap-3">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon>
<span>97766 46876 / 97766 46876</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon icon="solar:letter-linear"></iconify-icon>
<span>info@amstudies.co.in</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="border-t border-slate-100 py-6">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 gap-2">
<p>© 2022 Academy Of Management Studies, Odisha. All rights reserved.</p>
<div className="flex gap-4">
<a className="hover:text-slate-600" href="#">Privacy</a>
<a className="hover:text-slate-600" href="#">Terms</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
