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
      

<nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="text-xl tracking-tighter font-semibold text-[#167FAA] flex items-center gap-2" href="#">
<span>SAMAA</span>
<span className="text-slate-400 font-normal">Verzekeringen</span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-[#167FAA] transition-colors" href="#principles">Principles</a>
<a className="hover:text-[#167FAA] transition-colors" href="#why-choose">Why Samaa</a>
<a className="hover:text-[#167FAA] transition-colors" href="#about">About</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-[#B32F56] rounded-full hover:bg-[#962646] transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#B32F56]" href="#stay-informed">
                    Sign Up
                </a>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#29A9E1] rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob"></div>
<div className="absolute top-0 left-0 -ml-20 -mt-20 w-96 h-96 bg-[#167FAA] rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-2000"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

<div className="max-w-2xl relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#167FAA]/5 text-[#167FAA] text-xs font-medium mb-6 border border-[#167FAA]/10">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#29A9E1] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#167FAA]"></span>
</span>
                    Launching Soon in the Netherlands
                </div>
<h1 className="text-4xl lg:text-6xl font-semibold text-[#167FAA] tracking-tight leading-[1.1] mb-6">
                    SAMAA Verzekeringen N.V. <br/>
<span className="text-slate-800">Your Halal Insurer.</span>
</h1>
<p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-lg">
                    Samaa Verzekeringen is launching soon. We provide Islamic in-kind funeral coverage that offers peace of mind for you and removes financial burden from your loved ones.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-[#B32F56] rounded-lg hover:bg-[#962646] transition-all shadow-sm" href="#stay-informed">
                        Sign up now
                    </a>
<a className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-[#167FAA] bg-white border border-[#167FAA]/20 rounded-lg hover:bg-[#167FAA]/5 transition-all" href="#about">
                        More information
                    </a>
</div>
</div>

<div className="relative lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl shadow-slate-200/50">
<img alt="Father and child walking together" className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#167FAA]/10 to-transparent mix-blend-multiply"></div>
</div>
</div>
</header>

<section className="py-24 bg-slate-50/50 relative" id="principles">
<div className="absolute inset-0 geo-pattern"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-[#167FAA] tracking-tight mb-4">Our Principles</h2>
<p className="text-slate-500 max-w-2xl mx-auto">
                    Built on the foundation of Takaful, ensuring ethical solidarity and complete transparency.
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-lg bg-[#167FAA]/10 flex items-center justify-center text-[#167FAA] mb-4">
<i data-lucide="users" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold text-slate-800 mb-2">Solidarity</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        We share risk together as a community, supporting one another in times of need.
                    </p>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-lg bg-[#29A9E1]/10 flex items-center justify-center text-[#29A9E1] mb-4">
<i data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold text-slate-800 mb-2">Transparency</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Clear terms with no hidden fees. We operate with complete integrity and openness.
                    </p>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-lg bg-[#008F7B]/10 flex items-center justify-center text-[#008F7B] mb-4">
<i data-lucide="scale" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold text-slate-800 mb-2">Ethical Finance</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Completely free from interest (Riba), uncertainty (Gharar), and speculation (Maysir).
                    </p>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-lg bg-[#EC8A83]/10 flex items-center justify-center text-[#EC8A83] mb-4">
<i data-lucide="heart-handshake" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold text-slate-800 mb-2">Inclusion</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Services designed for everyone, respecting dignity and cultural values.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="why-choose">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1">
<div className="relative rounded-2xl overflow-hidden shadow-lg">
<img alt="Calm nature landscape" className="w-full h-[500px] object-cover" src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#167FAA]/10 mix-blend-overlay"></div>
</div>
</div>
<div className="order-1 lg:order-2">
<h2 className="text-3xl font-semibold text-[#167FAA] tracking-tight mb-8">Why Choose Samaa?</h2>
<div className="space-y-8">
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<div className="w-6 h-6 rounded-full bg-[#167FAA]/10 flex items-center justify-center">
<i className="w-3 h-3 text-[#167FAA]" data-lucide="check" strokeWidth="2"></i>
</div>
</div>
<div>
<h4 className="text-lg font-medium text-slate-800">Complete In-Kind Care</h4>
<p className="text-slate-500 mt-1 leading-relaxed">We don't just pay out money; we arrange the entire funeral according to Islamic rites, relieving your family of logistical burdens.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<div className="w-6 h-6 rounded-full bg-[#167FAA]/10 flex items-center justify-center">
<i className="w-3 h-3 text-[#167FAA]" data-lucide="check" strokeWidth="2"></i>
</div>
</div>
<div>
<h4 className="text-lg font-medium text-slate-800">No Financial Burden on Relatives</h4>
<p className="text-slate-500 mt-1 leading-relaxed">Ensure your passing does not create debt or financial stress for those you leave behind.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<div className="w-6 h-6 rounded-full bg-[#167FAA]/10 flex items-center justify-center">
<i className="w-3 h-3 text-[#167FAA]" data-lucide="check" strokeWidth="2"></i>
</div>
</div>
<div>
<h4 className="text-lg font-medium text-slate-800">Professional Governance</h4>
<p className="text-slate-500 mt-1 leading-relaxed">Managed by experienced professionals in the Dutch insurance sector, ensuring stability and compliance.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#167FAA]/5 border-y border-[#167FAA]/10" id="about">
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="text-2xl font-semibold text-[#167FAA] tracking-tight mb-6">About Samaa</h2>
<p className="text-lg text-slate-600 leading-relaxed mb-6">
                Samaa Verzekeringen N.V. is established to serve the community with dignity, integrity, and compassion. We bridge the gap between modern financial security and ethical Islamic values.
            </p>
<p className="text-base text-slate-500 leading-relaxed">
                Our vision is to provide a transparent, Halal alternative for funeral insurance in the Netherlands. We are currently in formation and working diligently to bring this essential service to you and your family.
            </p>
</div>
</section>

<section className="py-24 bg-white relative" id="stay-informed">
<div className="max-w-lg mx-auto px-6">
<div className="text-center mb-10">
<span className="text-[#B32F56] text-sm font-semibold tracking-wide uppercase">Join the list</span>
<h2 className="text-3xl font-semibold text-slate-800 tracking-tight mt-2 mb-4">Stay Informed</h2>
<p className="text-slate-500">Sign up to receive updates on our launch. No spam, just essential information.</p>
</div>
<form className="space-y-5 bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100">

<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5 uppercase tracking-wide">Salutation</label>
<div className="relative">
<select className="w-full bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-lg focus:ring-[#167FAA] focus:border-[#167FAA] block p-3 appearance-none">
<option>Mr.</option>
<option>Ms.</option>
<option>Mrs.</option>
<option>Other</option>
</select>
<i className="absolute right-3 top-3.5 w-4 h-4 text-slate-400 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5 uppercase tracking-wide">First Name</label>
<input className="bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-lg focus:ring-[#167FAA] focus:border-[#167FAA] block w-full p-3 transition-colors" placeholder="Ali" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5 uppercase tracking-wide">Last Name</label>
<input className="bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-lg focus:ring-[#167FAA] focus:border-[#167FAA] block w-full p-3 transition-colors" placeholder="Bakker" required="" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5 uppercase tracking-wide">Email Address</label>
<input className="bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-lg focus:ring-[#167FAA] focus:border-[#167FAA] block w-full p-3 transition-colors" placeholder="name@example.com" required="" type="email"/>
</div>

<label className="flex items-start gap-3 cursor-pointer custom-checkbox group">
<div className="relative flex items-center">
<input className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 border border-slate-300 rounded bg-white transition-all peer-checked:bg-[#167FAA] peer-checked:border-[#167FAA]">
<svg className="w-3.5 h-3.5 text-white absolute top-0.5 left-0.5 hidden pointer-events-none" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
</div>
<span className="text-sm text-slate-500 group-hover:text-slate-600 transition-colors">
                        I agree to the privacy policy and consent to receive updates about Samaa.
                    </span>
</label>
<button className="w-full text-white bg-[#167FAA] hover:bg-[#12688b] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3.5 text-center transition-all shadow-sm mt-2" type="button">
                    Keep me updated
                </button>
<p className="text-xs text-center text-slate-400 mt-4 flex items-center justify-center gap-1">
<i className="w-3 h-3" data-lucide="lock"></i> Your data is secure and treated with respect.
                </p>
</form>
</div>
</section>

<section className="py-20 bg-slate-50 border-t border-slate-100">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-2xl font-medium text-slate-800 mb-6">Peace of mind for you and your loved ones.</h2>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-white bg-[#B32F56] rounded-full hover:bg-[#962646] transition-all shadow-sm w-full sm:w-auto" href="#stay-informed">
                    Register Interest
                </a>
<a className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-full hover:bg-slate-50 hover:text-slate-900 transition-all w-full sm:w-auto" href="#">
                    Contact Support
                </a>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-100 py-12 mt-auto">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex flex-col md:flex-row items-center gap-8">
<a className="text-lg tracking-tighter font-bold text-[#167FAA]" href="#">SAMAA</a>
<div className="flex gap-6 text-sm text-slate-500">
<a className="hover:text-[#167FAA] transition-colors" href="#">Privacy</a>
<a className="hover:text-[#167FAA] transition-colors" href="#">Terms</a>
<a className="hover:text-[#167FAA] transition-colors" href="#">Contact</a>
</div>
</div>
<div className="text-xs text-slate-400">
                © 2023 Samaa Verzekeringen N.V. (In formation). All rights reserved.
            </div>
</div>
</footer>



    </>
  );
}
