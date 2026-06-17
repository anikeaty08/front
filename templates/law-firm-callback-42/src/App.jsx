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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      lucide.createIcons();
      
      // Basic sticky header styling logic (adds border shadow on scroll)
      window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 10) {
            header.classList.add('shadow-sm');
        } else {
            header.classList.remove('shadow-sm');
        }
      });
    
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
      

<div className="fixed inset-0 z-[100] hidden target:flex items-center justify-center bg-black/40 backdrop-blur-sm p-4" id="appointment">
<div className="bg-white p-8 md:p-12 max-w-lg w-full relative shadow-2xl">
<a className="absolute top-6 right-6 text-zinc-400 hover:text-zinc-900 transition-colors" href="#">
<i className="w-6 h-6" data-lucide="x" strokeWidth="1.5"></i>
</a>
<h3 className="text-3xl font-normal tracking-tight mb-2 font-serif">Book a Consultation</h3>
<p className="text-lg text-zinc-500 mb-8 leading-relaxed">Leave your details and we will contact you shortly to discuss your case.</p>
<form className="space-y-6">
<div>
<input className="w-full border-b border-zinc-200 py-3 text-lg bg-transparent focus:border-zinc-900 focus:outline-none transition-colors placeholder:text-zinc-400" placeholder="Your Name" type="text"/>
</div>
<div>
<input className="w-full border-b border-zinc-200 py-3 text-lg bg-transparent focus:border-zinc-900 focus:outline-none transition-colors placeholder:text-zinc-400" placeholder="Phone Number" type="tel"/>
</div>
<div>
<input className="w-full border-b border-zinc-200 py-3 text-lg bg-transparent focus:border-zinc-900 focus:outline-none transition-colors placeholder:text-zinc-400" placeholder="Email Address" type="email"/>
</div>
<div className="relative group cursor-pointer">
<select className="w-full border-b border-zinc-200 py-3 text-lg bg-transparent focus:border-zinc-900 focus:outline-none transition-colors appearance-none text-zinc-500 cursor-pointer">
<option disabled="" selected="" value="">Select Practice Area</option>
<option value="real-estate">Real Estate Law</option>
<option value="commercial">Commercial Law</option>
<option value="immigration">Immigration to Israel</option>
</select>
<i className="w-5 h-5 absolute right-2 top-4 text-zinc-400 pointer-events-none" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
<button className="w-full bg-zinc-900 text-white py-4 text-lg font-medium hover:bg-zinc-800 transition-colors mt-4" type="button">
                    Submit Request
                </button>
<p className="text-sm text-zinc-400 text-center mt-4">By submitting, you agree to our Privacy Policy.</p>
</form>
</div>
</div>

<header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100 transition-all duration-300">
<div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">

<a className="text-2xl font-serif font-medium tracking-tight flex items-center gap-2" href="#">
                Tsaitel Law
            </a>

<nav className="hidden lg:flex items-center gap-8">
<a className="text-lg text-zinc-600 hover:text-zinc-900 transition-colors" href="#appointment">Appointment</a>

<div className="relative group">
<button className="flex items-center gap-1 text-lg text-zinc-600 hover:text-zinc-900 transition-colors pb-8 -mb-8">
                        Legal Practice Areas <i className="w-4 h-4" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>

<div className="absolute top-full left-0 mt-4 w-64 bg-white border border-zinc-100 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0">
<div className="p-2 flex flex-col">
<a className="px-4 py-3 text-lg text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 transition-colors" href="#">Real Estate</a>
<a className="px-4 py-3 text-lg text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 transition-colors" href="#">Commercial Law</a>
<a className="px-4 py-3 text-lg text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 transition-colors" href="#">Litigation</a>
</div>
</div>
</div>
<a className="text-lg text-zinc-600 hover:text-zinc-900 transition-colors" href="#attorneys">Our Attorneys</a>
<div className="relative group">
<button className="flex items-center gap-1 text-lg text-zinc-600 hover:text-zinc-900 transition-colors pb-8 -mb-8">
                        Blog &amp; Cases <i className="w-4 h-4" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
<div className="absolute top-full left-0 mt-4 w-48 bg-white border border-zinc-100 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0">
<div className="p-2 flex flex-col">
<a className="px-4 py-3 text-lg text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 transition-colors" href="#">Latest Articles</a>
<a className="px-4 py-3 text-lg text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 transition-colors" href="#">Case Studies</a>
</div>
</div>
</div>
</nav>

<div className="hidden lg:flex items-center gap-8">
<a className="text-lg font-medium tracking-tight hover:opacity-70 transition-opacity" href="tel:+972544575343">
                    +972 54-457-5343
                </a>
<div className="flex items-center gap-2 text-base text-zinc-400">
<a className="text-zinc-900 font-medium" href="#">EN</a> / 
                    <a className="hover:text-zinc-900 transition-colors" href="#">HE</a> / 
                    <a className="hover:text-zinc-900 transition-colors" href="#">RU</a>
</div>
<a className="bg-zinc-900 text-white px-6 py-2.5 text-lg font-medium hover:bg-zinc-800 transition-colors flex items-center gap-2" href="#appointment">
                    Book an Appointment <i className="w-4 h-4" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</a>
</div>

<button className="lg:hidden text-zinc-900">
<i className="w-8 h-8" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</header>
<main className="pt-20">

<section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-6 overflow-hidden bg-white">

<div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at center, #000 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-zinc-50 z-0"></div>
<div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center mt-[-10vh]">
<h1 className="text-5xl md:text-7xl lg:text-8xl font-normal font-serif tracking-tight text-zinc-900 leading-[1.1] mb-8">
                    Professional legal <br/> assistance <span className="italic text-zinc-400">in Israel</span>
</h1>
<p className="text-xl md:text-2xl text-zinc-500 font-normal tracking-tight max-w-2xl mb-12 leading-relaxed">
                    Real estate transactions, commercial law, and uncompromising protection of your interests.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto bg-zinc-900 text-white px-8 py-4 text-lg font-medium hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2" href="#appointment">
                        Discuss Your Case <i className="w-5 h-5" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</a>
<a className="w-full sm:w-auto bg-transparent border border-zinc-200 text-zinc-900 px-8 py-4 text-lg font-medium hover:bg-zinc-50 transition-colors text-center" href="#practices">
                        Our Services
                    </a>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 border-t border-zinc-100 bg-white/80 backdrop-blur-sm z-10 hidden md:block">
<div className="max-w-[1400px] mx-auto px-6 py-6 grid grid-cols-3 gap-8 text-center text-sm tracking-widest uppercase text-zinc-500 font-medium">
<div><span className="text-amber-500 mr-2">01</span> Absolute Confidentiality</div>
<div><span className="text-amber-500 mr-2">02</span> Years of Expertise</div>
<div><span className="text-amber-500 mr-2">03</span> Impeccable Reputation</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 border-b border-zinc-100">
<div className="max-w-[1400px] mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-zinc-200">
<div className="md:pr-12 py-6 md:py-0">
<div className="text-5xl md:text-6xl font-normal tracking-tight text-zinc-900 mb-2">11+</div>
<div className="text-lg text-zinc-500 uppercase tracking-widest font-medium text-sm">Years of experience</div>
</div>
<div className="md:px-12 py-6 md:py-0">
<div className="text-5xl md:text-6xl font-normal tracking-tight text-zinc-900 mb-2">167</div>
<div className="text-lg text-zinc-500 uppercase tracking-widest font-medium text-sm">Successful cases</div>
</div>
<div className="md:pl-12 py-6 md:py-0">
<div className="text-5xl md:text-6xl font-normal tracking-tight text-zinc-900 mb-2">237</div>
<div className="text-lg text-zinc-500 uppercase tracking-widest font-medium text-sm">Satisfied clients</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white">
<div className="max-w-[1400px] mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
<div className="max-w-2xl">
<h2 className="text-4xl md:text-5xl font-serif font-normal tracking-tight text-zinc-900 mb-6">Our Core Values</h2>
<p className="text-xl text-zinc-500 leading-relaxed">We build our practice on principles that ensure transparency, effectiveness, and trust in every client relationship.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-8 border border-zinc-100 bg-zinc-50 hover:border-zinc-300 transition-colors group">
<div className="text-amber-500 font-serif text-3xl mb-6">01</div>
<h3 className="text-2xl font-normal tracking-tight text-zinc-900 mb-4">Professionalism</h3>
<p className="text-lg text-zinc-500 leading-relaxed">Deep understanding of Israeli law and meticulous attention to detail in every document and negotiation.</p>
</div>

<div className="p-8 border border-zinc-100 bg-zinc-50 hover:border-zinc-300 transition-colors group">
<div className="text-amber-500 font-serif text-3xl mb-6">02</div>
<h3 className="text-2xl font-normal tracking-tight text-zinc-900 mb-4">Practice / Expertise</h3>
<p className="text-lg text-zinc-500 leading-relaxed">Years of focused experience in real estate and commercial sectors, delivering proven strategies.</p>
</div>

<div className="p-8 border border-zinc-100 bg-zinc-50 hover:border-zinc-300 transition-colors group">
<div className="text-amber-500 font-serif text-3xl mb-6">03</div>
<h3 className="text-2xl font-normal tracking-tight text-zinc-900 mb-4">Responsibility / Guarantee</h3>
<p className="text-lg text-zinc-500 leading-relaxed">We take full ownership of the legal process, providing clear communication and dedicated support.</p>
</div>
</div>
<div className="mt-16 text-center">
<a className="inline-flex bg-zinc-900 text-white px-8 py-4 text-lg font-medium hover:bg-zinc-800 transition-colors items-center justify-center gap-2" href="#appointment">
                        Book an Appointment <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 text-white">
<div className="max-w-[1400px] mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-4xl md:text-5xl font-serif font-normal tracking-tight mb-6">Need immediate counsel?</h2>
<p className="text-xl text-zinc-400 mb-10 leading-relaxed max-w-lg">Leave your contact details, and one of our senior attorneys will connect with you within 15 minutes for a preliminary evaluation.</p>
<form className="space-y-6 max-w-md">
<div className="grid grid-cols-2 gap-6">
<input className="w-full border-b border-zinc-700 py-3 text-lg bg-transparent text-white focus:border-white focus:outline-none transition-colors placeholder:text-zinc-500" placeholder="First Name" type="text"/>
<input className="w-full border-b border-zinc-700 py-3 text-lg bg-transparent text-white focus:border-white focus:outline-none transition-colors placeholder:text-zinc-500" placeholder="Phone" type="tel"/>
</div>
<div className="relative group cursor-pointer">
<select className="w-full border-b border-zinc-700 py-3 text-lg bg-transparent text-white focus:border-white focus:outline-none transition-colors appearance-none cursor-pointer">
<option className="text-zinc-900" disabled="" selected="" value="">Area of Interest</option>
<option className="text-zinc-900" value="real-estate">Real Estate</option>
<option className="text-zinc-900" value="corporate">Corporate Law</option>
<option className="text-zinc-900" value="other">Other</option>
</select>
<i className="w-5 h-5 absolute right-2 top-4 text-zinc-500 pointer-events-none" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
<button className="w-full bg-white text-zinc-900 py-4 text-lg font-medium hover:bg-zinc-100 transition-colors mt-4" type="button">
                                Connect in 15 mins
                            </button>
</form>
</div>
<div className="hidden lg:block aspect-square bg-zinc-800 relative overflow-hidden">

<div className="absolute inset-0 flex items-center justify-center text-zinc-700">
<i className="w-24 h-24" data-lucide="image" strokeWidth="1"></i>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-zinc-50" id="practices">
<div className="max-w-[1400px] mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
<div>
<h2 className="text-4xl md:text-5xl font-serif font-normal tracking-tight text-zinc-900 mb-4">Legal Practice Areas</h2>
<p className="text-xl text-zinc-500 max-w-2xl">Comprehensive legal solutions tailored to protect your personal and commercial interests in Israel.</p>
</div>
<a className="text-lg font-medium hover:text-zinc-600 transition-colors flex items-center gap-2 whitespace-nowrap" href="#">
                        View all practices <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<a className="group block p-8 bg-white border border-zinc-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300" href="#">
<div className="w-12 h-12 bg-zinc-50 flex items-center justify-center mb-6 text-zinc-900 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="building-2" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-normal tracking-tight text-zinc-900 mb-4">Real Estate Law</h3>
<p className="text-lg text-zinc-500 leading-relaxed mb-6">Full support for purchasing, selling, and leasing properties. Due diligence and contract drafting.</p>
<span className="text-base font-medium text-zinc-900 group-hover:text-amber-600 transition-colors flex items-center gap-1">Learn more <i className="w-4 h-4" data-lucide="chevron-right" strokeWidth="1.5"></i></span>
</a>

<a className="group block p-8 bg-white border border-zinc-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300" href="#">
<div className="w-12 h-12 bg-zinc-50 flex items-center justify-center mb-6 text-zinc-900 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="briefcase" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-normal tracking-tight text-zinc-900 mb-4">Commercial Law</h3>
<p className="text-lg text-zinc-500 leading-relaxed mb-6">Company registration, corporate governance, mergers, acquisitions, and commercial dispute resolution.</p>
<span className="text-base font-medium text-zinc-900 group-hover:text-amber-600 transition-colors flex items-center gap-1">Learn more <i className="w-4 h-4" data-lucide="chevron-right" strokeWidth="1.5"></i></span>
</a>

<a className="group block p-8 bg-white border border-zinc-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300" href="#">
<div className="w-12 h-12 bg-zinc-50 flex items-center justify-center mb-6 text-zinc-900 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="scale" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-normal tracking-tight text-zinc-900 mb-4">Litigation &amp; Disputes</h3>
<p className="text-lg text-zinc-500 leading-relaxed mb-6">Representation in Israeli courts across all jurisdictions. Arbitration and effective mediation services.</p>
<span className="text-base font-medium text-zinc-900 group-hover:text-amber-600 transition-colors flex items-center gap-1">Learn more <i className="w-4 h-4" data-lucide="chevron-right" strokeWidth="1.5"></i></span>
</a>

<a className="group block p-8 bg-white border border-zinc-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300" href="#">
<div className="w-12 h-12 bg-zinc-50 flex items-center justify-center mb-6 text-zinc-900 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="passport" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-normal tracking-tight text-zinc-900 mb-4">Immigration &amp; Status</h3>
<p className="text-lg text-zinc-500 leading-relaxed mb-6">Assistance with Aliyah, obtaining visas, citizenship, and resolving status issues with the Ministry of Interior.</p>
<span className="text-base font-medium text-zinc-900 group-hover:text-amber-600 transition-colors flex items-center gap-1">Learn more <i className="w-4 h-4" data-lucide="chevron-right" strokeWidth="1.5"></i></span>
</a>

<a className="group block p-8 bg-white border border-zinc-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300" href="#">
<div className="w-12 h-12 bg-zinc-50 flex items-center justify-center mb-6 text-zinc-900 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="file-text" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-normal tracking-tight text-zinc-900 mb-4">Wills &amp; Inheritance</h3>
<p className="text-lg text-zinc-500 leading-relaxed mb-6">Drafting clear wills, managing inheritance orders, and handling cross-border estate planning.</p>
<span className="text-base font-medium text-zinc-900 group-hover:text-amber-600 transition-colors flex items-center gap-1">Learn more <i className="w-4 h-4" data-lucide="chevron-right" strokeWidth="1.5"></i></span>
</a>

<a className="group block p-8 bg-white border border-zinc-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300" href="#">
<div className="w-12 h-12 bg-zinc-50 flex items-center justify-center mb-6 text-zinc-900 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="landmark" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-normal tracking-tight text-zinc-900 mb-4">Banking &amp; Finance</h3>
<p className="text-lg text-zinc-500 leading-relaxed mb-6">Navigating Israeli banking regulations, account opening compliance, and financial transaction structuring.</p>
<span className="text-base font-medium text-zinc-900 group-hover:text-amber-600 transition-colors flex items-center gap-1">Learn more <i className="w-4 h-4" data-lucide="chevron-right" strokeWidth="1.5"></i></span>
</a>
</div>
</div>
</section>

<section className="py-32 bg-white border-y border-zinc-100">
<div className="max-w-[1400px] mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-20">
<h2 className="text-4xl md:text-5xl font-serif font-normal tracking-tight text-zinc-900 mb-6">How We Work</h2>
<p className="text-xl text-zinc-500">A structured, transparent approach to ensure the best possible outcome for your legal matters.</p>
</div>
<div className="relative">

<div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-zinc-200 -translate-y-1/2 z-0"></div>
<div className="grid grid-cols-1 md:grid-cols-5 gap-12 relative z-10">

<div className="text-center">
<div className="w-16 h-16 mx-auto bg-zinc-900 text-white flex items-center justify-center rounded-full mb-6 font-serif text-2xl shadow-lg shadow-zinc-200">1</div>
<h4 className="text-xl font-medium tracking-tight text-zinc-900 mb-3">Request</h4>
<p className="text-base text-zinc-500">Submit your inquiry via form, email, or phone.</p>
</div>

<div className="text-center">
<div className="w-16 h-16 mx-auto bg-white border-2 border-zinc-900 text-zinc-900 flex items-center justify-center rounded-full mb-6 font-serif text-2xl">2</div>
<h4 className="text-xl font-medium tracking-tight text-zinc-900 mb-3">Consultation</h4>
<p className="text-base text-zinc-500">Initial meeting to understand goals and gather details.</p>
</div>

<div className="text-center">
<div className="w-16 h-16 mx-auto bg-white border-2 border-zinc-900 text-zinc-900 flex items-center justify-center rounded-full mb-6 font-serif text-2xl">3</div>
<h4 className="text-xl font-medium tracking-tight text-zinc-900 mb-3">Analysis</h4>
<p className="text-base text-zinc-500">Deep review of documents and strategy formation.</p>
</div>

<div className="text-center">
<div className="w-16 h-16 mx-auto bg-white border-2 border-zinc-900 text-zinc-900 flex items-center justify-center rounded-full mb-6 font-serif text-2xl">4</div>
<h4 className="text-xl font-medium tracking-tight text-zinc-900 mb-3">Action</h4>
<p className="text-base text-zinc-500">Active legal work, negotiations, or litigation.</p>
</div>

<div className="text-center">
<div className="w-16 h-16 mx-auto bg-zinc-100 text-zinc-400 flex items-center justify-center rounded-full mb-6 font-serif text-2xl border border-zinc-200">5</div>
<h4 className="text-xl font-medium tracking-tight text-zinc-900 mb-3">Result</h4>
<p className="text-base text-zinc-500">Achieving the goal and providing ongoing support.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-zinc-50" id="attorneys">
<div className="max-w-[1400px] mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
<div>
<h2 className="text-4xl md:text-5xl font-serif font-normal tracking-tight text-zinc-900 mb-4">Meet Our Attorneys</h2>
<p className="text-xl text-zinc-500 max-w-2xl">Founding partners with decades of combined experience in complex legal matters.</p>
</div>
<a className="text-lg font-medium hover:text-zinc-600 transition-colors flex items-center gap-2 whitespace-nowrap" href="#">
                        View all team <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">

<div className="group cursor-pointer">
<div className="aspect-[3/4] bg-zinc-200 mb-6 overflow-hidden relative">

<div className="absolute inset-0 flex flex-col items-center justify-center text-zinc-400 bg-zinc-100">
<i className="w-16 h-16 mb-2" data-lucide="user" strokeWidth="1"></i>
<span className="text-base uppercase tracking-widest">Photo Placeholder</span>
</div>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
</div>
<h3 className="text-3xl font-serif font-normal tracking-tight text-zinc-900 mb-2">Tomer Tsaitel</h3>
<p className="text-lg text-amber-600 font-medium tracking-wide uppercase text-sm mb-4">Managing Partner / Real Estate &amp; Commercial</p>
<p className="text-lg text-zinc-500 leading-relaxed mb-4">Specializes in large-scale real estate developments, complex commercial transactions, and corporate structuring for international clients operating in Israel.</p>
<span className="text-base font-medium text-zinc-900 border-b border-zinc-900 pb-1 group-hover:text-zinc-500 group-hover:border-zinc-500 transition-colors">Read full bio</span>
</div>

<div className="group cursor-pointer mt-0 md:mt-24">
<div className="aspect-[3/4] bg-zinc-200 mb-6 overflow-hidden relative">

<div className="absolute inset-0 flex flex-col items-center justify-center text-zinc-400 bg-zinc-100">
<i className="w-16 h-16 mb-2" data-lucide="user" strokeWidth="1"></i>
<span className="text-base uppercase tracking-widest">Photo Placeholder</span>
</div>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
</div>
<h3 className="text-3xl font-serif font-normal tracking-tight text-zinc-900 mb-2">Mickey Hovelle</h3>
<p className="text-lg text-amber-600 font-medium tracking-wide uppercase text-sm mb-4">Partner / Litigation &amp; Dispute Resolution</p>
<p className="text-lg text-zinc-500 leading-relaxed mb-4">A seasoned litigator with a track record of success in high-stakes commercial disputes, administrative law, and representing clients before the Supreme Court.</p>
<span className="text-base font-medium text-zinc-900 border-b border-zinc-900 pb-1 group-hover:text-zinc-500 group-hover:border-zinc-500 transition-colors">Read full bio</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-zinc-100 text-center px-6">
<h2 className="text-3xl md:text-4xl font-serif font-normal tracking-tight text-zinc-900 mb-8">Ready to discuss your legal needs?</h2>
<a className="inline-flex bg-zinc-900 text-white px-10 py-5 text-lg font-medium hover:bg-zinc-800 transition-colors items-center justify-center gap-2" href="#appointment">
                Book an Appointment <i className="w-5 h-5" data-lucide="calendar" strokeWidth="1.5"></i>
</a>
</section>

<section className="py-32 bg-zinc-50 overflow-hidden">
<div className="max-w-[1400px] mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
<div>
<h2 className="text-4xl md:text-5xl font-serif font-normal tracking-tight text-zinc-900 mb-4">Client Testimonials</h2>
<p className="text-xl text-zinc-500 max-w-2xl">What our clients say about their experience working with our firm.</p>
</div>
<div className="flex gap-2">
<button className="w-12 h-12 border border-zinc-200 flex items-center justify-center hover:bg-white transition-colors text-zinc-400 hover:text-zinc-900"><i className="w-6 h-6" data-lucide="chevron-left" strokeWidth="1.5"></i></button>
<button className="w-12 h-12 border border-zinc-200 flex items-center justify-center hover:bg-white transition-colors text-zinc-400 hover:text-zinc-900"><i className="w-6 h-6" data-lucide="chevron-right" strokeWidth="1.5"></i></button>
</div>
</div>
<div className="flex gap-6 overflow-x-auto no-scrollbar pb-8 -mx-6 px-6">

<div className="min-w-[350px] md:min-w-[450px] bg-white p-10 border border-zinc-100 shrink-0">
<i className="w-10 h-10 text-zinc-200 mb-6" data-lucide="quote" strokeWidth="1"></i>
<p className="text-xl text-zinc-700 leading-relaxed mb-8">"Tomer handled our commercial real estate acquisition with exceptional precision. His ability to foresee potential issues and navigate the local bureaucracy saved us both time and money."</p>
<div>
<p className="text-lg font-medium tracking-tight text-zinc-900">David M.</p>
<p className="text-base text-zinc-500">CEO, Tech Ventures Ltd.</p>
</div>
</div>

<div className="min-w-[350px] md:min-w-[450px] bg-white p-10 border border-zinc-100 shrink-0">
<i className="w-10 h-10 text-zinc-200 mb-6" data-lucide="quote" strokeWidth="1"></i>
<p className="text-xl text-zinc-700 leading-relaxed mb-8">"When dealing with an inheritance dispute involving multiple jurisdictions, Mickey Hovelle provided clarity and aggressive representation when needed. Highly recommend their litigation team."</p>
<div>
<p className="text-lg font-medium tracking-tight text-zinc-900">Sarah K.</p>
<p className="text-base text-zinc-500">Private Client</p>
</div>
</div>

<div className="min-w-[350px] md:min-w-[450px] bg-white p-10 border border-zinc-100 shrink-0">
<i className="w-10 h-10 text-zinc-200 mb-6" data-lucide="quote" strokeWidth="1"></i>
<p className="text-xl text-zinc-700 leading-relaxed mb-8">"Professionalism at its finest. From the initial consultation to the final contract signing, the entire team was responsive, knowledgeable, and genuinely cared about our business goals."</p>
<div>
<p className="text-lg font-medium tracking-tight text-zinc-900">Alex R.</p>
<p className="text-base text-zinc-500">Founder, E-commerce Startup</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-[1400px] mx-auto px-6">
<div className="aspect-video w-full bg-zinc-900 relative group cursor-pointer flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 opacity-40 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDBMOCA4Wk04IDBMMCA4WiIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD4KPC9zdmc+')] mix-blend-overlay"></div>
<div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-500 z-10">
<i className="w-10 h-10 text-white ml-2" data-lucide="play" strokeWidth="1.5"></i>
</div>
<div className="absolute bottom-8 left-8 text-white z-10">
<p className="text-lg font-medium uppercase tracking-widest text-zinc-400 mb-1">Firm Overview</p>
<h3 className="text-3xl font-serif font-normal">Why choose Tsaitel Law</h3>
</div>
</div>
</div>
</section>

<section className="py-32 bg-zinc-50 border-t border-zinc-100">
<div className="max-w-[1400px] mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

<div>
<h2 className="text-4xl md:text-5xl font-serif font-normal tracking-tight text-zinc-900 mb-4">Contact Us</h2>
<p className="text-xl text-zinc-500 mb-12">Fill out the form below and our team will get back to you to schedule an initial consultation.</p>
<form className="space-y-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div>
<label className="block text-sm font-medium text-zinc-500 mb-2">First Name *</label>
<input className="w-full border-b border-zinc-300 py-2 text-lg bg-transparent focus:border-zinc-900 focus:outline-none transition-colors" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-zinc-500 mb-2">Last Name</label>
<input className="w-full border-b border-zinc-300 py-2 text-lg bg-transparent focus:border-zinc-900 focus:outline-none transition-colors" type="text"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div>
<label className="block text-sm font-medium text-zinc-500 mb-2">Phone Number *</label>
<input className="w-full border-b border-zinc-300 py-2 text-lg bg-transparent focus:border-zinc-900 focus:outline-none transition-colors" type="tel"/>
</div>
<div>
<label className="block text-sm font-medium text-zinc-500 mb-2">Email Address</label>
<input className="w-full border-b border-zinc-300 py-2 text-lg bg-transparent focus:border-zinc-900 focus:outline-none transition-colors" type="email"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-zinc-500 mb-2">Message briefly describing your case</label>
<textarea className="w-full border-b border-zinc-300 py-2 text-lg bg-transparent focus:border-zinc-900 focus:outline-none transition-colors resize-none" rows="4"></textarea>
</div>
<button className="bg-zinc-900 text-white px-10 py-5 text-lg font-medium hover:bg-zinc-800 transition-colors flex items-center gap-2" type="button">
                                Book an Appointment <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</form>
</div>

<div className="flex flex-col h-full">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
<div>
<h4 className="text-sm font-medium uppercase tracking-widest text-zinc-400 mb-4">Our Office</h4>
<p className="text-xl text-zinc-900 leading-relaxed">
                                    Rothschild Blvd 22,<br/>
                                    Tel Aviv-Yafo, Israel<br/>
                                    Floor 14, Suite 1402
                                </p>
</div>
<div>
<h4 className="text-sm font-medium uppercase tracking-widest text-zinc-400 mb-4">Contact Info</h4>
<a className="block text-2xl font-normal tracking-tight text-zinc-900 hover:text-zinc-600 mb-2 transition-colors" href="tel:+972544575343">+972 54-457-5343</a>
<a className="block text-xl text-zinc-500 hover:text-zinc-900 transition-colors" href="mailto:office@tsaitel-law.co.il">office@tsaitel-law.co.il</a>
<p className="text-base text-zinc-400 mt-4">Sun - Thu: 09:00 - 18:00<br/>Fri - Sat: Closed</p>
</div>
</div>

<div className="grow min-h-[300px] bg-zinc-200 relative w-full overflow-hidden border border-zinc-200">
<div className="absolute inset-0 flex flex-col items-center justify-center text-zinc-500 bg-zinc-100">
<i className="w-10 h-10 mb-2" data-lucide="map-pin" strokeWidth="1.5"></i>
<span className="text-base uppercase tracking-widest font-medium">Google Maps Integration</span>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-zinc-900 text-white pt-24 pb-8">
<div className="max-w-[1400px] mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">

<div className="lg:col-span-4">
<a className="text-3xl font-serif font-medium tracking-tight mb-8 block" href="#">
                        Tsaitel Law
                    </a>
<p className="text-lg text-zinc-400 mb-8 max-w-sm leading-relaxed">Professional legal assistance in Israel. Real estate, commercial law, and uncompromising protection of your interests.</p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:bg-white hover:text-zinc-900 transition-all" href="#">
<i className="w-4 h-4" data-lucide="facebook" strokeWidth="1.5"></i>
</a>
<a className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:bg-white hover:text-zinc-900 transition-all" href="#">
<i className="w-4 h-4" data-lucide="instagram" strokeWidth="1.5"></i>
</a>
<a className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:bg-white hover:text-zinc-900 transition-all" href="#">
<i className="w-4 h-4" data-lucide="linkedin" strokeWidth="1.5"></i>
</a>
</div>
</div>

<div className="lg:col-span-2 lg:col-start-6">
<h4 className="text-base font-medium tracking-wide uppercase text-zinc-500 mb-6">Firm</h4>
<ul className="space-y-4">
<li><a className="text-lg text-zinc-300 hover:text-white transition-colors" href="#">Home</a></li>
<li><a className="text-lg text-zinc-300 hover:text-white transition-colors" href="#attorneys">Our Attorneys</a></li>
<li><a className="text-lg text-zinc-300 hover:text-white transition-colors" href="#practices">Practice Areas</a></li>
<li><a className="text-lg text-zinc-300 hover:text-white transition-colors" href="#">Testimonials</a></li>
</ul>
</div>

<div className="lg:col-span-2">
<h4 className="text-base font-medium tracking-wide uppercase text-zinc-500 mb-6">Resources</h4>
<ul className="space-y-4">
<li><a className="text-lg text-zinc-300 hover:text-white transition-colors" href="#">Legal Blog</a></li>
<li><a className="text-lg text-zinc-300 hover:text-white transition-colors" href="#">Case Studies</a></li>
<li><a className="text-lg text-zinc-300 hover:text-white transition-colors" href="#">FAQ</a></li>
<li><a className="text-lg text-zinc-300 hover:text-white transition-colors" href="#">Sitemap</a></li>
</ul>
</div>

<div className="lg:col-span-3">
<h4 className="text-base font-medium tracking-wide uppercase text-zinc-500 mb-6">Contact</h4>
<ul className="space-y-4">
<li><a className="text-2xl font-normal tracking-tight text-white hover:text-zinc-300 transition-colors" href="tel:+972544575343">+972 54-457-5343</a></li>
<li><a className="text-lg text-zinc-300 hover:text-white transition-colors" href="mailto:office@tsaitel-law.co.il">office@tsaitel-law.co.il</a></li>
<li className="pt-4">
<a className="inline-flex bg-white text-zinc-900 px-6 py-3 text-base font-medium hover:bg-zinc-200 transition-colors items-center gap-2" href="#appointment">
                                Book an Appointment
                            </a>
</li>
</ul>
</div>
</div>

<div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-base text-zinc-500">© 2026 Hovelle, Tsaitel &amp; Co. All Rights Reserved.</p>
<div className="flex items-center gap-6 text-base text-zinc-500">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Use</a>
</div>
<p className="text-base text-zinc-600">
                    Designed by <a className="text-zinc-400 hover:text-white transition-colors" href="#">Sprava</a>
</p>
</div>

<div className="mt-8 flex justify-center gap-4 text-sm font-medium text-zinc-500 md:hidden border-t border-zinc-800 pt-8">
<a className="text-white" href="#">EN</a> / 
                 <a className="hover:text-white transition-colors" href="#">HE</a> / 
                 <a className="hover:text-white transition-colors" href="#">RU</a>
</div>
</div>
</footer>




    </>
  );
}
