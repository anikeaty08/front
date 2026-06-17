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
      

<header className="fixed top-0 w-full z-50 glass-nav border-b border-slate-200/60">
<nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-2xl font-semibold tracking-tighter text-slate-900">NM<span className="text-teal-500">.</span></span>
</div>
<div className="hidden md:flex items-center gap-10">
<a className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors" href="#about">The Clinic</a>
<a className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors" href="#results">Results</a>
<a className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors" href="#contact">Contact</a>
</div>
<div className="flex items-center gap-4">
<button className="bg-slate-900 text-white text-sm font-medium px-6 py-2.5 rounded-full hover:bg-teal-600 transition-all shadow-md shadow-slate-200">
                    Book Consultation
                </button>
</div>
</nav>
</header>
<main className="pt-20">

<section className="relative overflow-hidden py-16 lg:py-32">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 mb-6">
<span className="flex h-2 w-2 rounded-full bg-teal-500 animate-pulse"></span>
<span className="text-xs font-medium text-teal-700 uppercase tracking-widest">Now accepting new patients</span>
</div>
<h1 className="text-4xl lg:text-6xl font-semibold text-slate-900 tracking-tight leading-[1.15] mb-6">
                        Restore Your Rhythm. <br/>
<span className="text-teal-500 italic">Master Your Motion.</span>
</h1>
<p className="text-base lg:text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
                        Nova Motion combines high-performance sports science with holistic rehabilitation to help you move without limits. From elite athletes to desk-bound professionals, we build the path to your peak physical health.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="bg-teal-500 text-white text-sm font-medium px-8 py-4 rounded-full hover:bg-teal-600 transition-all flex items-center justify-center gap-2">
                            Start Your Recovery
                            <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
<button className="bg-white border border-slate-200 text-slate-700 text-sm font-medium px-8 py-4 rounded-full hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                            View Services
                        </button>
</div>
<div className="mt-12 flex items-center gap-6">
<div className="flex -space-x-3">
<img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
<img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
<img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
</div>
<p className="text-xs text-slate-500">Trusted by <span className="font-semibold text-slate-900">500+ athletes</span> and locals</p>
</div>
</div>
<div className="relative">
<div className="absolute -inset-4 bg-teal-500/10 rounded-[2.5rem] -rotate-3 blur-2xl"></div>
<div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
<img alt="Therapy Session" className="w-full aspect-[4/5] object-cover" src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&amp;fit=crop&amp;q=80&amp;w=2070"/>
<div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur p-6 rounded-2xl shadow-xl max-w-[200px]">
<div className="flex items-center gap-3 mb-2">
<div className="p-2 bg-teal-500 rounded-lg text-white">
<iconify-icon icon="solar:star-linear" width="20"></iconify-icon>
</div>
<span className="text-sm font-semibold">98% Success</span>
</div>
<p className="text-[10px] text-slate-500 leading-tight">Patient satisfaction rate in post-surgical rehabilitation programs.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-20">
<h2 className="text-sm font-semibold text-teal-600 uppercase tracking-widest mb-4">Our Expertise</h2>
<h3 className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight mb-6">Comprehensive Care for Every Body</h3>
<p className="text-slate-600 text-sm lg:text-base">We don't just treat symptoms; we identify the root cause of dysfunction to ensure long-term vitality and performance.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 card-hover">
<div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-teal-500 shadow-sm mb-6 group-hover:bg-teal-500 group-hover:text-white transition-all duration-300">
<iconify-icon icon="solar:running-linear" width="28"></iconify-icon>
</div>
<h4 className="text-lg font-semibold text-slate-900 mb-3">Sports Rehab</h4>
<p className="text-sm text-slate-500 leading-relaxed mb-6">Return to your peak performance with sport-specific movement analysis and conditioning.</p>
<a className="text-xs font-semibold text-teal-600 flex items-center gap-1 group-hover:gap-2 transition-all" href="#">
                            Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 card-hover">
<div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-teal-500 shadow-sm mb-6 group-hover:bg-teal-500 group-hover:text-white transition-all duration-300">
<iconify-icon icon="solar:hand-shake-linear" width="28"></iconify-icon>
</div>
<h4 className="text-lg font-semibold text-slate-900 mb-3">Manual Therapy</h4>
<p className="text-sm text-slate-500 leading-relaxed mb-6">Hands-on techniques including joint mobilization and soft tissue release to restore mobility.</p>
<a className="text-xs font-semibold text-teal-600 flex items-center gap-1 group-hover:gap-2 transition-all" href="#">
                            Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 card-hover">
<div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-teal-500 shadow-sm mb-6 group-hover:bg-teal-500 group-hover:text-white transition-all duration-300">
<iconify-icon icon="solar:health-linear" width="28"></iconify-icon>
</div>
<h4 className="text-lg font-semibold text-slate-900 mb-3">Post-Op Recovery</h4>
<p className="text-sm text-slate-500 leading-relaxed mb-6">Dedicated clinical protocols to ensure optimal healing and range of motion after surgery.</p>
<a className="text-xs font-semibold text-teal-600 flex items-center gap-1 group-hover:gap-2 transition-all" href="#">
                            Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 card-hover">
<div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-teal-500 shadow-sm mb-6 group-hover:bg-teal-500 group-hover:text-white transition-all duration-300">
<iconify-icon icon="solar:laptop-minimalistic-linear" width="28"></iconify-icon>
</div>
<h4 className="text-lg font-semibold text-slate-900 mb-3">Ergonomics</h4>
<p className="text-sm text-slate-500 leading-relaxed mb-6">Optimizing your workspace and posture to prevent chronic occupational injuries.</p>
<a className="text-xs font-semibold text-teal-600 flex items-center gap-1 group-hover:gap-2 transition-all" href="#">
                            Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-20 items-center">
<div className="grid grid-cols-2 gap-4">
<img alt="Clinic Interior" className="rounded-3xl mt-12 shadow-lg" src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<img alt="Therapist" className="rounded-3xl shadow-lg" src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div>
<h2 className="text-sm font-semibold text-teal-600 uppercase tracking-widest mb-4">The Nova Standard</h2>
<h3 className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight mb-8">Clinical Excellence Meets Human Connection</h3>
<div className="space-y-8">
<div className="flex gap-5">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-600">
<iconify-icon icon="solar:medal-star-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-base font-semibold text-slate-900 mb-1">Expert Therapists</h4>
<p className="text-sm text-slate-500">Our team consists of PhD and Master-level practitioners with specialized certifications in orthopedics.</p>
</div>
</div>
<div className="flex gap-5">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-600">
<iconify-icon icon="solar:scanner-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-base font-semibold text-slate-900 mb-1">Precision Diagnostics</h4>
<p className="text-sm text-slate-500">We utilize state-of-the-art motion capture and pressure plate technology for objective assessment.</p>
</div>
</div>
<div className="flex gap-5">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-600">
<iconify-icon icon="solar:heart-pulse-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-base font-semibold text-slate-900 mb-1">Holistic Outlook</h4>
<p className="text-sm text-slate-500">Integrating nutrition, sleep, and stress management into your physical recovery roadmap.</p>
</div>
</div>
</div>
<div className="mt-12 p-8 bg-white rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
<iconify-icon className="absolute -top-4 -right-4 text-slate-100" icon="solar:double-quotes-l-linear" width="120"></iconify-icon>
<p className="text-slate-600 italic text-sm leading-relaxed mb-4 relative z-10">"Nova Motion didn't just fix my knee; they changed the way I understand my body's mechanics. I'm running faster at 40 than I was at 25."</p>
<div className="flex items-center gap-3 relative z-10">
<div className="font-semibold text-sm text-slate-900">David Miller</div>
<div className="w-1 h-1 rounded-full bg-slate-300"></div>
<div className="text-xs text-slate-400">Marathon Runner</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20">
<div className="max-w-7xl mx-auto px-6">
<div className="bg-slate-900 rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
<div className="absolute top-10 left-10 w-64 h-64 bg-teal-500 rounded-full blur-[120px]"></div>
<div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-500 rounded-full blur-[120px]"></div>
</div>
<h2 className="text-3xl lg:text-5xl font-semibold text-white tracking-tight mb-8 relative z-10">Ready to move without pain?</h2>
<p className="text-slate-400 text-sm lg:text-lg max-w-xl mx-auto mb-10 relative z-10">Schedule your comprehensive movement assessment today and take the first step towards a stronger you.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
<button className="bg-teal-500 text-white text-sm font-medium px-10 py-4 rounded-full hover:bg-teal-400 transition-all">
                            Book Your Appointment
                        </button>
<button className="bg-transparent border border-slate-700 text-white text-sm font-medium px-10 py-4 rounded-full hover:bg-slate-800 transition-all">
                            Consultation Call
                        </button>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-slate-100 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
<div className="col-span-2">
<span className="text-2xl font-semibold tracking-tighter text-slate-900 mb-6 block">NM<span className="text-teal-500">.</span></span>
<p className="text-sm text-slate-500 max-w-xs leading-relaxed">
                        Redefining the standard of physical therapy through motion science and individualized care.
                    </p>
<div className="flex gap-4 mt-8">
<a className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-teal-500 transition-colors" href="#">
<iconify-icon icon="solar:share-circle-linear" width="20"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-teal-500 transition-colors" href="#">
<iconify-icon icon="solar:camera-linear" width="20"></iconify-icon>
</a>
</div>
</div>
<div>
<h5 className="text-xs font-semibold text-slate-900 uppercase tracking-widest mb-6">Clinic</h5>
<ul className="space-y-4 text-sm text-slate-500">
<li><a className="hover:text-teal-500 transition-colors" href="#">Services</a></li>
<li><a className="hover:text-teal-500 transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-teal-500 transition-colors" href="#">Team</a></li>
<li><a className="hover:text-teal-500 transition-colors" href="#">Careers</a></li>
</ul>
</div>
<div>
<h5 className="text-xs font-semibold text-slate-900 uppercase tracking-widest mb-6">Support</h5>
<ul className="space-y-4 text-sm text-slate-500">
<li><a className="hover:text-teal-500 transition-colors" href="#">FAQ</a></li>
<li><a className="hover:text-teal-500 transition-colors" href="#">Contact</a></li>
<li><a className="hover:text-teal-500 transition-colors" href="#">Patient Portal</a></li>
<li><a className="hover:text-teal-500 transition-colors" href="#">Privacy</a></li>
</ul>
</div>
<div>
<h5 className="text-xs font-semibold text-slate-900 uppercase tracking-widest mb-6">Hours</h5>
<ul className="space-y-4 text-sm text-slate-500">
<li className="flex justify-between"><span>Mon - Fri</span> <span className="text-slate-900">08:00 - 20:00</span></li>
<li className="flex justify-between"><span>Sat</span> <span className="text-slate-900">09:00 - 15:00</span></li>
<li className="flex justify-between"><span>Sun</span> <span className="text-slate-900 font-medium text-teal-600 uppercase text-[10px]">Closed</span></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2024 Nova Motion Therapy Clinic. All rights reserved.</p>
<div className="flex items-center gap-6">
<span className="text-xs text-slate-400 flex items-center gap-1">
<iconify-icon className="text-teal-500" icon="solar:map-point-linear"></iconify-icon>
                        1221 Healing Arts Way, Suite 400
                    </span>
</div>
</div>
</div>
</footer>

    </>
  );
}
