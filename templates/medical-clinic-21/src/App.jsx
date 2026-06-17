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
fontFamily: {
sans: ['"Plus Jakarta Sans"', 'sans-serif'],
},
colors: {
medical: {
teal: '#2A9D8F',
blue: '#264653',
yellow: '#E9C46A',
surface: '#F8FAFC',
}
},
animation: {
'float': 'float 6s ease-in-out infinite',
'float-delayed': 'float 6s ease-in-out 3s infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-12px)' },
}
}
}
}
}



        // Reveal on scroll
        function reveal() {
            var reveals = document.querySelectorAll(".reveal");
            for (var i = 0; i < reveals.length; i++) {
                var windowHeight = window.innerHeight;
                var elementTop = reveals[i].getBoundingClientRect().top;
                var elementVisible = 150;
                if (elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add("active");
                }
            }
        }
        window.addEventListener("scroll", reveal);
        // Trigger once on load
        reveal();
    
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
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md bg-white/70 border-b border-gray-100" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-lg bg-[#2A9D8F] flex items-center justify-center text-white">
<iconify-icon icon="solar:health-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-xl font-semibold tracking-tight text-[#264653]">Lumina<span className="font-light opacity-70">Care</span></span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#264653]/80">
<a className="hover:text-[#2A9D8F] transition-colors" href="#about">About</a>
<a className="hover:text-[#2A9D8F] transition-colors" href="#services">Services</a>
<a className="hover:text-[#2A9D8F] transition-colors" href="#testimonials">Stories</a>
<a className="px-5 py-2.5 rounded-full bg-[#264653] text-white hover:bg-[#2A9D8F] transition-all shadow-lg shadow-[#264653]/20 hover:shadow-[#2A9D8F]/30" href="#contact">
                    Book Appointment
                </a>
</div>
<button className="md:hidden text-[#264653]" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>

<div className="hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 p-6 flex flex-col gap-4 shadow-xl" id="mobile-menu">
<a className="text-[#264653] font-medium" href="#about">About</a>
<a className="text-[#264653] font-medium" href="#services">Services</a>
<a className="text-[#264653] font-medium" href="#testimonials">Stories</a>
<a className="text-[#2A9D8F] font-semibold" href="#contact">Book Now</a>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden min-h-[90vh] flex items-center">

<div className="absolute inset-0 z-0">

<img alt="Medical Team" className="w-full h-full object-cover object-center md:object-right-top opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/95 to-slate-50/10 md:to-transparent"></div>

<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-50"></div>
</div>
<div className="max-w-7xl mx-auto w-full relative z-10 grid md:grid-cols-2 gap-12 items-center">
<div className="reveal active pr-4">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm border border-[#2A9D8F]/20 text-[#264653] text-xs font-semibold tracking-wide uppercase mb-6 shadow-sm">
<span className="w-2 h-2 rounded-full bg-[#2A9D8F] animate-pulse"></span>
                    Accepting New Patients
                </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] mb-6 text-[#264653]">
                    Quality care <br/>
<span className="text-[#2A9D8F]">you can trust.</span>
</h1>
<p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed font-light">
                    Modern medicine with a personal touch. Experience healthcare designed around your life, comfort, and long-term well-being.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#2A9D8F] text-white font-medium hover:bg-[#238b7e] transition-all shadow-lg shadow-[#2A9D8F]/25 hover:translate-y-[-2px]" href="#contact">
                        Book a Visit
                        <iconify-icon icon="solar:calendar-add-linear" width="20"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 text-[#264653] font-medium hover:bg-white transition-all hover:border-[#2A9D8F]/50" href="#services">
                        Explore Services
                        <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
</div>
<div className="mt-12 flex items-center gap-8 opacity-90 hover:opacity-100 transition-all duration-500">
<div className="flex items-center gap-2">
<iconify-icon className="text-[#2A9D8F]" icon="solar:verified-check-linear" width="24"></iconify-icon>
<span className="text-sm font-medium text-[#264653]">Certified Experts</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-[#2A9D8F]" icon="solar:clock-circle-linear" width="24"></iconify-icon>
<span className="text-sm font-medium text-[#264653]">Same-day Appts</span>
</div>
</div>
</div>

<div className="relative h-[400px] md:h-[500px] hidden md:block pointer-events-none">

<div className="absolute top-[10%] right-[15%] bg-white/90 backdrop-blur-md border border-white/40 p-5 rounded-2xl w-52 shadow-xl animate-float">
<div className="flex items-center gap-3 mb-3">
<div className="w-10 h-10 rounded-full bg-[#E9C46A] flex items-center justify-center text-[#264653]">
<iconify-icon icon="solar:heart-pulse-linear" width="22"></iconify-icon>
</div>
<div>
<div className="text-xs font-semibold text-gray-400 uppercase">Heart Rate</div>
<div className="text-lg font-bold text-[#264653]">72 BPM</div>
</div>
</div>

<div className="h-12 w-full flex items-end justify-between gap-1 opacity-50">
<div className="w-1 bg-[#2A9D8F] h-[40%] rounded-full"></div>
<div className="w-1 bg-[#2A9D8F] h-[60%] rounded-full"></div>
<div className="w-1 bg-[#2A9D8F] h-[30%] rounded-full"></div>
<div className="w-1 bg-[#2A9D8F] h-[80%] rounded-full"></div>
<div className="w-1 bg-[#2A9D8F] h-[50%] rounded-full"></div>
<div className="w-1 bg-[#2A9D8F] h-[70%] rounded-full"></div>
<div className="w-1 bg-[#2A9D8F] h-[40%] rounded-full"></div>
</div>
</div>

<div className="absolute bottom-[20%] left-[10%] bg-white/95 backdrop-blur-md border border-white/40 p-6 rounded-2xl shadow-2xl w-60 text-[#264653] animate-float-delayed">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-semibold uppercase text-gray-400">Patient Feedback</span>
<div className="flex text-[#E9C46A] text-[10px]">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
</div>
<div className="text-3xl font-bold tracking-tight mb-1">4.9/5</div>
<div className="text-xs text-gray-500">Average rating from 2k+ reviews</div>
<div className="mt-4 flex -space-x-2">
<div className="w-8 h-8 rounded-full border-2 border-white bg-gray-200"></div>
<div className="w-8 h-8 rounded-full border-2 border-white bg-gray-300"></div>
<div className="w-8 h-8 rounded-full border-2 border-white bg-gray-400 flex items-center justify-center text-[10px] font-bold text-white">+</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden border-t border-slate-100" id="about">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
<div className="reveal">
<h2 className="text-sm font-bold tracking-widest text-[#2A9D8F] uppercase mb-3">Our Mission</h2>
<h3 className="text-3xl md:text-4xl font-semibold text-[#264653] mb-6 tracking-tight">Redefining the standard of community healthcare.</h3>
<p className="text-slate-500 leading-relaxed mb-6 font-light">
                    At Lumina Care, we believe that visiting the doctor should be a seamless, reassuring experience. We combine top-tier medical expertise with a compassionate approach, ensuring you feel heard and understood from the moment you walk through our doors.
                </p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-[#264653]">
<div className="w-6 h-6 rounded-full bg-[#E9C46A]/20 flex items-center justify-center text-[#264653]">
<iconify-icon icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<span className="text-sm font-medium">Holistic patient approach</span>
</li>
<li className="flex items-center gap-3 text-[#264653]">
<div className="w-6 h-6 rounded-full bg-[#E9C46A]/20 flex items-center justify-center text-[#264653]">
<iconify-icon icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<span className="text-sm font-medium">State-of-the-art diagnostics</span>
</li>
<li className="flex items-center gap-3 text-[#264653]">
<div className="w-6 h-6 rounded-full bg-[#E9C46A]/20 flex items-center justify-center text-[#264653]">
<iconify-icon icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<span className="text-sm font-medium">Dedicated specialist network</span>
</li>
</ul>
</div>
<div className="grid grid-cols-2 gap-4 reveal delay-100">
<div className="space-y-4 mt-8">
<div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 h-48 flex flex-col justify-end group hover:border-[#2A9D8F]/30 transition-colors">
<iconify-icon className="text-[#2A9D8F] mb-auto" icon="solar:users-group-rounded-linear" width="32"></iconify-icon>
<div className="text-3xl font-bold text-[#264653] tracking-tight">5k+</div>
<div className="text-xs text-slate-500 font-medium uppercase tracking-wide">Patients Served</div>
</div>
<div className="bg-[#264653] p-6 rounded-2xl h-40 flex flex-col justify-end">
<iconify-icon className="text-[#E9C46A] mb-auto" icon="solar:diploma-verified-linear" width="32"></iconify-icon>
<div className="text-3xl font-bold text-white tracking-tight">15+</div>
<div className="text-xs text-white/60 font-medium uppercase tracking-wide">Years Experience</div>
</div>
</div>
<div className="space-y-4">
<div className="bg-[#2A9D8F] p-6 rounded-2xl h-40 flex flex-col justify-end">
<iconify-icon className="text-white mb-auto" icon="solar:hospital-linear" width="32"></iconify-icon>
<div className="text-3xl font-bold text-white tracking-tight">3</div>
<div className="text-xs text-white/80 font-medium uppercase tracking-wide">Clinic Locations</div>
</div>
<div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 h-48 flex flex-col justify-end group hover:border-[#2A9D8F]/30 transition-colors">
<iconify-icon className="text-[#E9C46A] mb-auto" icon="solar:star-linear" width="32"></iconify-icon>
<div className="text-3xl font-bold text-[#264653] tracking-tight">4.9</div>
<div className="text-xs text-slate-500 font-medium uppercase tracking-wide">Average Rating</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16 reveal">
<h2 className="text-sm font-bold tracking-widest text-[#2A9D8F] uppercase mb-3">Our Expertise</h2>
<h3 className="text-3xl md:text-4xl font-semibold text-[#264653] tracking-tight">Comprehensive care for every stage of life.</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-white p-8 rounded-2xl border border-gray-100 hover:border-[#2A9D8F]/30 hover:shadow-xl hover:shadow-[#2A9D8F]/5 transition-all duration-300 reveal cursor-default">
<div className="w-12 h-12 rounded-xl bg-blue-50 text-[#264653] flex items-center justify-center mb-6 group-hover:bg-[#264653] group-hover:text-white transition-colors">
<iconify-icon icon="solar:stethoscope-linear" width="28"></iconify-icon>
</div>
<h4 className="text-lg font-semibold text-[#264653] mb-3">General Medicine</h4>
<p className="text-sm text-slate-500 leading-relaxed">Routine check-ups, illness management, and preventative care to keep you healthy year-round.</p>
</div>

<div className="group bg-white p-8 rounded-2xl border border-gray-100 hover:border-[#2A9D8F]/30 hover:shadow-xl hover:shadow-[#2A9D8F]/5 transition-all duration-300 reveal delay-75 cursor-default">
<div className="w-12 h-12 rounded-xl bg-teal-50 text-[#2A9D8F] flex items-center justify-center mb-6 group-hover:bg-[#2A9D8F] group-hover:text-white transition-colors">
<iconify-icon icon="solar:heart-pulse-linear" width="28"></iconify-icon>
</div>
<h4 className="text-lg font-semibold text-[#264653] mb-3">Cardiology</h4>
<p className="text-sm text-slate-500 leading-relaxed">Advanced heart health screenings, ECG diagnostics, and management of cardiovascular conditions.</p>
</div>

<div className="group bg-white p-8 rounded-2xl border border-gray-100 hover:border-[#2A9D8F]/30 hover:shadow-xl hover:shadow-[#2A9D8F]/5 transition-all duration-300 reveal delay-100 cursor-default">
<div className="w-12 h-12 rounded-xl bg-yellow-50 text-[#E9C46A] flex items-center justify-center mb-6 group-hover:bg-[#E9C46A] group-hover:text-white transition-colors">
<iconify-icon icon="solar:test-tube-linear" width="28"></iconify-icon>
</div>
<h4 className="text-lg font-semibold text-[#264653] mb-3">Diagnostics &amp; Labs</h4>
<p className="text-sm text-slate-500 leading-relaxed">On-site blood work, imaging, and rapid testing to provide you with quick and accurate answers.</p>
</div>

<div className="group bg-white p-8 rounded-2xl border border-gray-100 hover:border-[#2A9D8F]/30 hover:shadow-xl hover:shadow-[#2A9D8F]/5 transition-all duration-300 reveal cursor-default">
<div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:shield-warning-linear" width="28"></iconify-icon>
</div>
<h4 className="text-lg font-semibold text-[#264653] mb-3">Vaccinations</h4>
<p className="text-sm text-slate-500 leading-relaxed">Immunizations for children and adults, including seasonal flu shots and travel vaccines.</p>
</div>

<div className="group bg-white p-8 rounded-2xl border border-gray-100 hover:border-[#2A9D8F]/30 hover:shadow-xl hover:shadow-[#2A9D8F]/5 transition-all duration-300 reveal delay-75 cursor-default">
<div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-500 flex items-center justify-center mb-6 group-hover:bg-rose-500 group-hover:text-white transition-colors">
<iconify-icon icon="solar:user-hand-up-linear" width="28"></iconify-icon>
</div>
<h4 className="text-lg font-semibold text-[#264653] mb-3">Pediatrics</h4>
<p className="text-sm text-slate-500 leading-relaxed">Gentle, specialized care for infants, children, and adolescents in a friendly environment.</p>
</div>

<div className="group bg-white p-8 rounded-2xl border border-gray-100 hover:border-[#2A9D8F]/30 hover:shadow-xl hover:shadow-[#2A9D8F]/5 transition-all duration-300 reveal delay-100 cursor-default">
<div className="w-12 h-12 rounded-xl bg-slate-100 text-[#264653] flex items-center justify-center mb-6 group-hover:bg-[#264653] group-hover:text-white transition-colors">
<iconify-icon icon="solar:add-circle-linear" width="28"></iconify-icon>
</div>
<h4 className="text-lg font-semibold text-[#264653] mb-3">Specialist Referrals</h4>
<p className="text-sm text-slate-500 leading-relaxed">Seamless coordination with top specialists to ensure continuity of care for complex conditions.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="testimonials">

<div className="absolute top-0 right-0 w-64 h-64 bg-[#E9C46A]/5 rounded-bl-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 reveal">
<div className="max-w-xl">
<h2 className="text-sm font-bold tracking-widest text-[#2A9D8F] uppercase mb-3">Patient Stories</h2>
<h3 className="text-3xl md:text-4xl font-semibold text-[#264653] tracking-tight">Trusted by families in our community.</h3>
</div>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-slate-50 text-[#264653] transition-colors">
<iconify-icon icon="solar:arrow-left-linear" width="20"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-slate-50 text-[#264653] transition-colors">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-[#F8FAFC] p-8 rounded-2xl reveal">
<div className="text-[#E9C46A] mb-4">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-[#264653] font-medium leading-relaxed mb-6">"The most professional clinic I've ever visited. The staff was incredibly welcoming, and the doctor took the time to explain everything clearly. I felt truly cared for."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#264653] text-white flex items-center justify-center text-sm font-semibold">JD</div>
<div>
<div className="text-sm font-semibold text-[#264653]">James Davidson</div>
<div className="text-xs text-slate-500">Patient since 2021</div>
</div>
</div>
</div>

<div className="bg-[#F8FAFC] p-8 rounded-2xl reveal delay-100">
<div className="text-[#E9C46A] mb-4">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-[#264653] font-medium leading-relaxed mb-6">"Booking was easy, and there was barely any wait time. The facility is spotless and modern. Highly recommend for anyone looking for reliable healthcare."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#2A9D8F] text-white flex items-center justify-center text-sm font-semibold">SM</div>
<div>
<div className="text-sm font-semibold text-[#264653]">Sarah Mitchell</div>
<div className="text-xs text-slate-500">General Checkup</div>
</div>
</div>
</div>

<div className="bg-[#F8FAFC] p-8 rounded-2xl reveal delay-200">
<div className="text-[#E9C46A] mb-4">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="18"></iconify-icon>
</div>
<p className="text-[#264653] font-medium leading-relaxed mb-6">"Finally found a pediatrician who my kids actually like! The team is so patient with children. It makes medical visits stress-free for our family."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#E9C46A] text-[#264653] flex items-center justify-center text-sm font-semibold">EL</div>
<div>
<div className="text-sm font-semibold text-[#264653]">Emily Larson</div>
<div className="text-xs text-slate-500">Family Care</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#264653] text-white relative overflow-hidden" id="contact">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
<div className="absolute -right-20 top-20 w-96 h-96 bg-[#2A9D8F] rounded-full blur-[100px]"></div>
<div className="absolute -left-20 bottom-20 w-96 h-96 bg-[#E9C46A] rounded-full blur-[100px]"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16">

<div className="reveal">
<h2 className="text-sm font-bold tracking-widest text-[#2A9D8F] uppercase mb-3">Contact Us</h2>
<h3 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight">Ready to prioritize your health?</h3>
<p className="text-gray-300 leading-relaxed mb-10 text-lg font-light max-w-md">
                        Book an appointment online or give us a call. We are here to answer any questions you may have.
                    </p>
<div className="space-y-8">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-[#2A9D8F] border border-white/5">
<iconify-icon icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-semibold mb-1">Our Location</h4>
<p className="text-gray-400 font-light">123 Wellness Blvd, Suite 100<br/>Medical District, NY 10012</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-[#2A9D8F] border border-white/5">
<iconify-icon icon="solar:phone-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-semibold mb-1">Phone &amp; Email</h4>
<p className="text-gray-400 font-light">+1 (555) 123-4567</p>
<p className="text-gray-400 font-light">care@luminaclinic.com</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-[#2A9D8F] border border-white/5">
<iconify-icon icon="solar:clock-circle-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-semibold mb-1">Opening Hours</h4>
<p className="text-gray-400 font-light">Mon - Fri: 8:00 AM - 6:00 PM</p>
<p className="text-gray-400 font-light">Sat: 9:00 AM - 2:00 PM</p>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-3xl p-8 md:p-10 text-[#264653] shadow-2xl reveal delay-100">
<h4 className="text-2xl font-semibold mb-6">Request Appointment</h4>
<form className="space-y-5">
<div className="grid grid-cols-2 gap-5">
<div className="relative input-group border border-gray-200 rounded-xl px-4 py-3 transition-all bg-slate-50">
<label className="absolute left-4 top-3 text-xs text-gray-500 font-semibold uppercase tracking-wider transition-all pointer-events-none">First Name</label>
<input className="w-full h-full pt-4 bg-transparent outline-none text-sm font-medium" placeholder=" " type="text"/>
</div>
<div className="relative input-group border border-gray-200 rounded-xl px-4 py-3 transition-all bg-slate-50">
<label className="absolute left-4 top-3 text-xs text-gray-500 font-semibold uppercase tracking-wider transition-all pointer-events-none">Last Name</label>
<input className="w-full h-full pt-4 bg-transparent outline-none text-sm font-medium" placeholder=" " type="text"/>
</div>
</div>
<div className="relative input-group border border-gray-200 rounded-xl px-4 py-3 transition-all bg-slate-50">
<label className="absolute left-4 top-3 text-xs text-gray-500 font-semibold uppercase tracking-wider transition-all pointer-events-none">Email Address</label>
<input className="w-full h-full pt-4 bg-transparent outline-none text-sm font-medium" placeholder=" " type="email"/>
</div>
<div className="relative input-group border border-gray-200 rounded-xl px-4 py-3 transition-all bg-slate-50">
<label className="absolute left-4 top-3 text-xs text-gray-500 font-semibold uppercase tracking-wider transition-all pointer-events-none">Service Type</label>
<select className="w-full h-full pt-4 bg-transparent outline-none text-sm font-medium appearance-none">
<option>General Checkup</option>
<option>Cardiology</option>
<option>Pediatrics</option>
<option>Vaccination</option>
</select>
<div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="relative input-group border border-gray-200 rounded-xl px-4 py-3 transition-all bg-slate-50">
<label className="absolute left-4 top-3 text-xs text-gray-500 font-semibold uppercase tracking-wider transition-all pointer-events-none">Message (Optional)</label>
<textarea className="w-full h-full pt-5 bg-transparent outline-none text-sm font-medium resize-none" placeholder=" " rows="3"></textarea>
</div>
<button className="w-full py-4 rounded-xl bg-[#2A9D8F] text-white font-semibold hover:bg-[#238b7e] transition-all shadow-lg hover:shadow-[#2A9D8F]/25 flex items-center justify-center gap-2 mt-4" type="button">
                            Confirm Booking
                            <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-white py-12 border-t border-gray-100">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-[#264653] flex items-center justify-center text-white">
<iconify-icon icon="solar:health-linear" width="14"></iconify-icon>
</div>
<span className="text-lg font-bold tracking-tight text-[#264653]">Lumina<span className="font-light">Care</span></span>
</div>
<div className="flex gap-8 text-sm text-gray-500 font-medium">
<a className="hover:text-[#2A9D8F] transition-colors" href="#">Privacy</a>
<a className="hover:text-[#2A9D8F] transition-colors" href="#">Terms</a>
<a className="hover:text-[#2A9D8F] transition-colors" href="#">Patients</a>
</div>
<div className="text-sm text-gray-400 font-light">
                    © 2023 Lumina Medical. All rights reserved.
                </div>
</div>
</div>
</footer>

<div className="fixed bottom-6 right-6 z-40">
<button className="w-14 h-14 rounded-full bg-[#2A9D8F] text-white shadow-2xl shadow-[#2A9D8F]/40 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group">
<iconify-icon className="group-hover:hidden" icon="solar:chat-round-dots-linear" width="28"></iconify-icon>
<iconify-icon className="hidden group-hover:block" icon="solar:close-circle-linear" width="28"></iconify-icon>
</button>
</div>



    </>
  );
}
