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
      

<header className="absolute top-0 left-0 w-full z-50 bg-transparent">
<div className="max-w-7xl mx-auto px-6 py-6">
<div className="flex items-center justify-between">

<a className="text-xl font-medium tracking-tighter text-[#222222] uppercase" href="#">
                    Wellness<span className="text-[#8e24aa]">.</span>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-[#222222] hover:text-[#8e24aa] transition-colors duration-300" href="#">About</a>
<a className="text-sm font-medium text-[#222222] hover:text-[#8e24aa] transition-colors duration-300" href="#">Services</a>
<a className="text-sm font-medium text-[#222222] hover:text-[#8e24aa] transition-colors duration-300" href="#">Locations</a>
<a className="text-sm font-medium text-[#222222] hover:text-[#8e24aa] transition-colors duration-300" href="#">Resources</a>
</nav>

<a className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-[#8e24aa] rounded-full hover:bg-opacity-90 transition-all shadow-md shadow-[#8e24aa]/20" href="#">
                    Book Consultation
                </a>

<button className="md:hidden text-[#222222]">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</div>
</header>

<section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#D2F2FF] to-[#F1F6F9]">

<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white opacity-40 rounded-full blur-3xl mix-blend-overlay"></div>
<div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#D2F2FF] opacity-60 rounded-full blur-3xl mix-blend-multiply"></div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
<span className="inline-block py-1.5 px-4 mb-6 text-xs font-medium tracking-wide uppercase bg-white/60 backdrop-blur-sm border border-white/40 rounded-full text-[#8e24aa] shadow-sm">
                Contact Our Team
            </span>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-slate-900 mb-6 leading-[1.1]">
                We are here to help <br/>
<span className="text-[#8e24aa] opacity-90">you heal and thrive.</span>
</h1>
<p className="text-lg md:text-xl text-slate-600 font-light max-w-2xl mx-auto leading-relaxed">
                Whether you have questions about our treatments, need assistance with booking, or just want to say hello, our team is ready to listen.
            </p>
</div>
</section>

<section className="relative py-24 bg-[#F1F6F9]">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-12">

<div className="md:w-1/2">
<div className="flex items-center gap-2 mb-4">
<span className="h-px w-8 bg-[#8e24aa]"></span>
<span className="text-xs font-semibold text-[#8e24aa] uppercase tracking-widest">Support</span>
</div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-6">
                        Have Questions? <br/> We’re Here to Help.
                    </h2>
<p className="text-slate-500 text-lg font-light leading-relaxed max-w-md">
                        Our patient support specialists are available around the clock to ensure you receive the care and information you need instantly.
                    </p>
</div>

<div className="md:w-1/2 flex justify-start md:justify-end">
<div className="flex items-center gap-4 bg-white p-2 pr-6 rounded-full shadow-sm border border-slate-100">
<div className="bg-[#D2F2FF] p-3 rounded-full text-[#8e24aa]">
<i className="w-6 h-6" data-lucide="message-circle-heart"></i>
</div>
<div>
<p className="text-sm font-semibold text-slate-900">Live Chat Available</p>
<p className="text-xs text-slate-500">Typical reply: &lt; 2 mins</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 bg-[#F1F6F9]">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group bg-white rounded-3xl p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 border border-slate-50">
<div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-[#D2F2FF]/50 text-[#8e24aa] mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6" data-lucide="mail"></i>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Email Us</h3>
<p className="text-slate-500 text-sm mb-4 font-light">For general inquiries and appointments.</p>
<a className="text-base text-[#222222] font-medium hover:text-[#8e24aa] transition-colors underline decoration-[#8e24aa]/30 decoration-1 underline-offset-4" href="mailto:hello@wellness.com">
                        hello@medicalwellness.com
                    </a>
</div>

<div className="group bg-white rounded-3xl p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 border border-slate-50 relative overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-[#D2F2FF] opacity-20 rounded-bl-full -mr-4 -mt-4"></div>
<div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-[#D2F2FF] text-[#8e24aa] mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6" data-lucide="phone"></i>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Call Us</h3>
<p className="text-slate-500 text-sm mb-4 font-light">Mon-Fri from 8am to 6pm.</p>
<a className="text-base text-[#222222] font-medium hover:text-[#8e24aa] transition-colors underline decoration-[#8e24aa]/30 decoration-1 underline-offset-4" href="tel:+15550000000">
                        +1 (555) 000-0000
                    </a>
</div>

<div className="group bg-white rounded-3xl p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 border border-slate-50">
<div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-[#D2F2FF]/50 text-[#8e24aa] mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6" data-lucide="messages-square"></i>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Patient Portal</h3>
<p className="text-slate-500 text-sm mb-4 font-light">Access your records securely.</p>
<a className="text-base text-[#222222] font-medium hover:text-[#8e24aa] transition-colors underline decoration-[#8e24aa]/30 decoration-1 underline-offset-4" href="#">
                        Login to Portal
                    </a>
</div>
</div>
</div>
</section>

<section className="py-20 px-6">
<div className="max-w-3xl mx-auto">
<div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100 relative">

<div className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-1 h-2 w-24 bg-[#8e24aa] rounded-b-lg opacity-20"></div>
<h3 className="text-2xl font-medium tracking-tight text-slate-900 mb-8 text-center">Send us a message</h3>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-medium text-slate-700 ml-1" htmlFor="fname">First Name</label>
<input className="w-full bg-[#F1F6F9] border-transparent focus:border-[#8e24aa] focus:bg-white focus:ring-0 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 transition-all outline-none" id="fname" placeholder="Jane" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-slate-700 ml-1" htmlFor="lname">Last Name</label>
<input className="w-full bg-[#F1F6F9] border-transparent focus:border-[#8e24aa] focus:bg-white focus:ring-0 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 transition-all outline-none" id="lname" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-slate-700 ml-1" htmlFor="email">Email Address</label>
<input className="w-full bg-[#F1F6F9] border-transparent focus:border-[#8e24aa] focus:bg-white focus:ring-0 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 transition-all outline-none" id="email" placeholder="jane@example.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-slate-700 ml-1" htmlFor="message">Message</label>
<textarea className="w-full bg-[#F1F6F9] border-transparent focus:border-[#8e24aa] focus:bg-white focus:ring-0 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 transition-all outline-none resize-none" id="message" placeholder="How can we help you?" rows="4"></textarea>
</div>
<div className="pt-4">
<button className="w-full bg-[#222222] hover:bg-[#8e24aa] text-white font-medium py-4 px-6 rounded-xl transition-all duration-300 shadow-lg shadow-slate-200 transform active:scale-[0.99]" type="button">
                            Send Message
                        </button>
</div>
</form>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium tracking-tight text-slate-900">Visit Our Clinics</h2>
<p className="text-slate-500 mt-3 font-light">Conveniently located in the heart of the city.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="bg-[#F1F6F9] rounded-3xl p-4 md:p-6 hover:bg-[#D2F2FF]/30 transition-colors duration-500">
<div className="h-64 w-full rounded-2xl overflow-hidden mb-6 shadow-sm border border-slate-200/50">
<iframe allowfullscreen="" className="w-full h-full border-0 map-filter" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093747!2d144.95373531531615!3d-37.81732767975192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b988081%3A0xf577d6a32f7f1f84!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1625064000000!5m2!1sen!2sus"></iframe>
</div>
<div className="px-2">
<h3 className="text-xl font-medium text-slate-900">Downtown Clinic</h3>
<p className="text-slate-500 text-sm mt-1 mb-4 font-light">123 Wellness Blvd, Suite 400</p>
<button className="flex items-center gap-2 text-sm font-medium text-[#8e24aa] hover:gap-3 transition-all">
                            Get Directions <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>

<div className="bg-[#F1F6F9] rounded-3xl p-4 md:p-6 hover:bg-[#D2F2FF]/30 transition-colors duration-500">
<div className="h-64 w-full rounded-2xl overflow-hidden mb-6 shadow-sm border border-slate-200/50">
<iframe allowfullscreen="" className="w-full h-full border-0 map-filter" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2152541459524!2d-73.98784408459415!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1625064000000!5m2!1sen!2sus"></iframe>
</div>
<div className="px-2">
<h3 className="text-xl font-medium text-slate-900">Westside Center</h3>
<p className="text-slate-500 text-sm mt-1 mb-4 font-light">880 Health Plaza, Floor 2</p>
<button className="flex items-center gap-2 text-sm font-medium text-[#8e24aa] hover:gap-3 transition-all">
                            Get Directions <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</div>
</section>


<section className="py-24 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-[#D2F2FF] via-[#F1F6F9] to-[#D2F2FF] opacity-50"></div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
<h2 className="text-4xl font-medium tracking-tight text-slate-900 mb-6">Ready to prioritize your health?</h2>
<p className="text-lg text-slate-600 font-light mb-10 max-w-xl mx-auto">
                Schedule your comprehensive wellness consultation today and take the first step towards a better you.
            </p>
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-[#222222] rounded-full hover:bg-[#8e24aa] transition-all shadow-xl shadow-slate-300/50 transform hover:-translate-y-1" href="#">
                Book an Appointment
            </a>
</div>
</section>

<footer className="bg-[#111111] text-white py-20 rounded-t-[3rem] mt-6">
<div className="max-w-7xl mx-auto px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

<div className="flex flex-col space-y-6">
<a className="text-2xl font-medium tracking-tighter uppercase" href="#">
                        Wellness<span className="text-[#8e24aa]">.</span>
</a>
<p className="text-slate-400 text-sm font-light leading-relaxed">
                        Redefining healthcare with a patient-first approach. Comprehensive care for modern living.
                    </p>
<div className="flex space-x-4">
<a className="text-slate-400 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
</div>
</div>

<div>
<h4 className="text-sm font-semibold tracking-wider uppercase mb-6 text-slate-200">Company</h4>
<ul className="space-y-4">
<li><a className="text-slate-400 hover:text-[#8e24aa] text-sm transition-colors" href="#">About Us</a></li>
<li><a className="text-slate-400 hover:text-[#8e24aa] text-sm transition-colors" href="#">Careers</a></li>
<li><a className="text-slate-400 hover:text-[#8e24aa] text-sm transition-colors" href="#">Doctors</a></li>
<li><a className="text-slate-400 hover:text-[#8e24aa] text-sm transition-colors" href="#">News</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold tracking-wider uppercase mb-6 text-slate-200">Patients</h4>
<ul className="space-y-4">
<li><a className="text-slate-400 hover:text-[#8e24aa] text-sm transition-colors" href="#">Portal Login</a></li>
<li><a className="text-slate-400 hover:text-[#8e24aa] text-sm transition-colors" href="#">Insurance</a></li>
<li><a className="text-slate-400 hover:text-[#8e24aa] text-sm transition-colors" href="#">FAQ</a></li>
<li><a className="text-slate-400 hover:text-[#8e24aa] text-sm transition-colors" href="#">Privacy Policy</a></li>
</ul>
</div>

<div className="bg-[#1a1a1a] rounded-2xl p-6 border border-white/10">
<h4 className="text-sm font-semibold text-white mb-2">Subscribe to our newsletter</h4>
<p className="text-xs text-slate-400 mb-4 font-light">Wellness tips delivered to your inbox weekly.</p>
<form className="flex flex-col space-y-2">
<input className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-[#8e24aa] transition-colors" placeholder="Email address" type="email"/>
<button className="bg-[#8e24aa] text-white text-sm font-medium py-2 rounded-lg hover:bg-opacity-90 transition-opacity" type="submit">Subscribe</button>
</form>
</div>
</div>
<div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
<p className="text-slate-500 text-xs">© 2024 Medical Wellness Inc. All rights reserved.</p>
<div className="flex space-x-6 mt-4 md:mt-0">
<a className="text-slate-500 text-xs hover:text-white transition-colors" href="#">Terms</a>
<a className="text-slate-500 text-xs hover:text-white transition-colors" href="#">Privacy</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
