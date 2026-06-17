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



        // Initialize Lucide Icons
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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-stone-200/50 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-10 h-10 bg-teal-900 rounded-xl flex items-center justify-center text-white group-hover:bg-teal-800 transition-colors">
<i className="w-6 h-6" data-lucide="shield-plus"></i>
</div>
<div>
<span className="block text-xl tracking-tight font-semibold text-teal-950 leading-none">Dento Care</span>
<span className="block text-xs text-stone-500 font-medium tracking-wide uppercase mt-1">Dental Clinic</span>
</div>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-base font-medium text-stone-600 hover:text-teal-900 transition-colors" href="#about">About</a>
<a className="text-base font-medium text-stone-600 hover:text-teal-900 transition-colors" href="#services">Services</a>
<a className="text-base font-medium text-stone-600 hover:text-teal-900 transition-colors" href="#testimonials">Reviews</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden lg:flex items-center gap-2 text-base font-medium text-teal-900 hover:text-teal-700 transition-colors" href="tel:+917048916711">
<i className="w-4 h-4" data-lucide="phone-call"></i>
                    +91 70489 16711
                </a>
<a className="px-5 py-2.5 bg-teal-900 text-white text-base font-medium rounded-full hover:bg-teal-800 hover:shadow-md transition-all" href="#contact">
                    Book Appointment
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 border border-teal-100 text-teal-800 text-sm font-medium mb-8">
<span className="flex h-2 w-2 rounded-full bg-teal-500"></span>
                        Accepting New Patients
                    </div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-teal-950 leading-[1.1]">
                        Confident Smiles Start With Healthy Teeth
                    </h1>
<p className="mt-8 text-xl text-stone-600 leading-relaxed max-w-xl">
                        Quality Dental Care for Families in Prem Nagar, New Delhi. We combine modern technology with a gentle approach to ensure your comfort.
                    </p>
<div className="mt-10 flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-teal-900 text-white text-lg font-medium rounded-full hover:bg-teal-800 hover:shadow-lg hover:-translate-y-0.5 transition-all" href="#contact">
                            Book Your Visit
                            <i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-white border border-stone-200 text-teal-950 text-lg font-medium rounded-full hover:border-teal-200 hover:bg-teal-50 transition-all" href="tel:+917048916711">
<i className="w-5 h-5" data-lucide="phone"></i>
                            Call Now
                        </a>
</div>
<div className="mt-12 flex items-center gap-6 text-base text-stone-500">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-amber-400 fill-amber-400" data-lucide="star"></i>
<span className="font-medium text-stone-800">4.9/5</span> on Google
                        </div>
<div className="w-1 h-1 rounded-full bg-stone-300"></div>
<div>Affordable dentist in New Delhi</div>
</div>
</div>
<div className="relative lg:ml-auto w-full max-w-lg aspect-[4/5] lg:aspect-square rounded-3xl overflow-hidden bg-stone-200 shadow-2xl">
<img alt="Modern Dental Clinic Room" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 border border-black/5 rounded-3xl"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="about">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="max-w-3xl mx-auto text-center mb-20">
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-teal-950 mb-6">
                    A Better Dental Experience
                </h2>
<p className="text-xl text-stone-600 leading-relaxed">
                    At Dento Care Dental Clinic, we provide trusted, comfortable, and professional dental treatments. Located near Naag Mandir, we are committed to providing the best dental clinic experience in Prem Nagar II.
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="p-8 rounded-3xl bg-stone-50 border border-stone-100 hover:shadow-xl transition-shadow duration-300">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-teal-700 mb-6">
<i className="w-6 h-6" data-lucide="microscope"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-teal-950 mb-3">Modern Technology</h3>
<p className="text-lg text-stone-600">Advanced diagnostic and treatment equipment for precise and painless care.</p>
</div>

<div className="p-8 rounded-3xl bg-stone-50 border border-stone-100 hover:shadow-xl transition-shadow duration-300">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-teal-700 mb-6">
<i className="w-6 h-6" data-lucide="award"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-teal-950 mb-3">Experienced Dentist</h3>
<p className="text-lg text-stone-600">Highly qualified professionals dedicated to your oral health and beautiful smile.</p>
</div>

<div className="p-8 rounded-3xl bg-stone-50 border border-stone-100 hover:shadow-xl transition-shadow duration-300">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-teal-700 mb-6">
<i className="w-6 h-6" data-lucide="indian-rupee"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-teal-950 mb-3">Affordable Care</h3>
<p className="text-lg text-stone-600">Transparent pricing and cost-effective treatments without compromising quality.</p>
</div>

<div className="p-8 rounded-3xl bg-stone-50 border border-stone-100 hover:shadow-xl transition-shadow duration-300">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-teal-700 mb-6">
<i className="w-6 h-6" data-lucide="sparkles"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-teal-950 mb-3">Hygienic Clinic</h3>
<p className="text-lg text-stone-600">Strict sterilization protocols to ensure a safe, clean, and healthy environment.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50" id="services">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-teal-950 mb-6">
                    Treatments at Dento Care
                </h2>
<p className="text-xl text-stone-600 max-w-2xl mx-auto">
                    Comprehensive dental services tailored to meet the needs of every family member.
                </p>
</div>

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
<div className="group bg-white rounded-[2rem] p-8 flex flex-col items-center justify-center text-center border border-stone-200/60 shadow-sm hover:shadow-xl hover:border-teal-100 transition-all duration-300 cursor-pointer aspect-square">
<div className="w-16 h-16 mb-6 text-stone-700 group-hover:text-teal-700 transition-colors">
<i className="w-full h-full" data-lucide="stethoscope" strokeWidth="1.25"></i>
</div>
<h3 className="text-xl font-medium tracking-tight text-stone-800">General Dental Checkup</h3>
</div>
<div className="group bg-white rounded-[2rem] p-8 flex flex-col items-center justify-center text-center border border-stone-200/60 shadow-sm hover:shadow-xl hover:border-teal-100 transition-all duration-300 cursor-pointer aspect-square">
<div className="w-16 h-16 mb-6 text-stone-700 group-hover:text-teal-700 transition-colors relative">
<i className="w-full h-full" data-lucide="sparkles" strokeWidth="1.25"></i>
</div>
<h3 className="text-xl font-medium tracking-tight text-stone-800">Cleaning &amp; Polishing</h3>
</div>
<div className="group bg-white rounded-[2rem] p-8 flex flex-col items-center justify-center text-center border border-stone-200/60 shadow-sm hover:shadow-xl hover:border-teal-100 transition-all duration-300 cursor-pointer aspect-square">
<div className="w-16 h-16 mb-6 text-stone-700 group-hover:text-teal-700 transition-colors">
<i className="w-full h-full" data-lucide="shield-alert" strokeWidth="1.25"></i>
</div>
<h3 className="text-xl font-medium tracking-tight text-stone-800">Tooth Extraction</h3>
</div>
<div className="group bg-white rounded-[2rem] p-8 flex flex-col items-center justify-center text-center border border-stone-200/60 shadow-sm hover:shadow-xl hover:border-teal-100 transition-all duration-300 cursor-pointer aspect-square">
<div className="w-16 h-16 mb-6 text-stone-700 group-hover:text-teal-700 transition-colors">
<i className="w-full h-full" data-lucide="layers" strokeWidth="1.25"></i>
</div>
<h3 className="text-xl font-medium tracking-tight text-stone-800">Dental Fillings</h3>
</div>
<div className="group bg-white rounded-[2rem] p-8 flex flex-col items-center justify-center text-center border border-stone-200/60 shadow-sm hover:shadow-xl hover:border-teal-100 transition-all duration-300 cursor-pointer aspect-square">
<div className="w-16 h-16 mb-6 text-stone-700 group-hover:text-teal-700 transition-colors">
<i className="w-full h-full" data-lucide="activity" strokeWidth="1.25"></i>
</div>
<h3 className="text-xl font-medium tracking-tight text-stone-800">Root Canal (RCT)</h3>
</div>
<div className="group bg-white rounded-[2rem] p-8 flex flex-col items-center justify-center text-center border border-stone-200/60 shadow-sm hover:shadow-xl hover:border-teal-100 transition-all duration-300 cursor-pointer aspect-square">
<div className="w-16 h-16 mb-6 text-stone-700 group-hover:text-teal-700 transition-colors">
<i className="w-full h-full" data-lucide="sun" strokeWidth="1.25"></i>
</div>
<h3 className="text-xl font-medium tracking-tight text-stone-800">Teeth Whitening</h3>
</div>
<div className="group bg-white rounded-[2rem] p-8 flex flex-col items-center justify-center text-center border border-stone-200/60 shadow-sm hover:shadow-xl hover:border-teal-100 transition-all duration-300 cursor-pointer aspect-square">
<div className="w-16 h-16 mb-6 text-stone-700 group-hover:text-teal-700 transition-colors">
<i className="w-full h-full" data-lucide="scan-line" strokeWidth="1.25"></i>
</div>
<h3 className="text-xl font-medium tracking-tight text-stone-800">Braces Consultation</h3>
</div>
<div className="group bg-white rounded-[2rem] p-8 flex flex-col items-center justify-center text-center border border-stone-200/60 shadow-sm hover:shadow-xl hover:border-teal-100 transition-all duration-300 cursor-pointer aspect-square">
<div className="w-16 h-16 mb-6 text-stone-700 group-hover:text-teal-700 transition-colors">
<i className="w-full h-full" data-lucide="heart-pulse" strokeWidth="1.25"></i>
</div>
<h3 className="text-xl font-medium tracking-tight text-stone-800">Gum Treatment</h3>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-stone-100">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="bg-teal-950 rounded-[3rem] p-10 lg:p-20 overflow-hidden relative">

<div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-96 h-96 bg-teal-800/30 rounded-full blur-3xl"></div>
<div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-96 h-96 bg-teal-900/40 rounded-full blur-3xl"></div>
<div className="relative z-10 grid lg:grid-cols-5 gap-16 items-center">
<div className="lg:col-span-3 text-white">
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight mb-8">
                            Our Mission for Your Smile
                        </h2>
<blockquote className="text-2xl lg:text-3xl font-medium tracking-tight text-teal-100 leading-snug mb-8 border-l-4 border-teal-500 pl-6">
                            "Our mission is to provide comfortable, reliable, and affordable dental care that helps every patient maintain a confident smile."
                        </blockquote>
<p className="text-xl text-teal-50/80 leading-relaxed">
                            We pride ourselves on patient-focused dental care in a comfortable and friendly environment. By utilizing modern dental equipment and maintaining strict commitments to hygiene and safety, we ensure a premium experience for everyone in Prem Nagar.
                        </p>
</div>
<div className="lg:col-span-2">
<div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10">
<ul className="space-y-6">
<li className="flex items-center gap-4 text-lg text-white">
<div className="w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-teal-300" data-lucide="check"></i>
</div>
                                    Patient-focused approach
                                </li>
<li className="flex items-center gap-4 text-lg text-white">
<div className="w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-teal-300" data-lucide="check"></i>
</div>
                                    Friendly, relaxing environment
                                </li>
<li className="flex items-center gap-4 text-lg text-white">
<div className="w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-teal-300" data-lucide="check"></i>
</div>
                                    Advanced dental equipment
                                </li>
<li className="flex items-center gap-4 text-lg text-white">
<div className="w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-teal-300" data-lucide="check"></i>
</div>
                                    Uncompromising safety standards
                                </li>
</ul>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50" id="testimonials">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-teal-950 mb-16 text-center">
                Patient Stories
            </h2>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 flex flex-col">
<div className="flex gap-1 mb-6 text-amber-400">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<p className="text-lg text-stone-600 mb-8 grow">"The best dental clinic near Naag Mandir. The doctor is very friendly and explained everything clearly. Completely painless treatment and very affordable service."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-800 font-semibold text-lg">A</div>
<div>
<div className="text-lg font-semibold text-stone-900">Amit S.</div>
<div className="text-base text-stone-500">Local Guide</div>
</div>
</div>
</div>
<div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 flex flex-col">
<div className="flex gap-1 mb-6 text-amber-400">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<p className="text-lg text-stone-600 mb-8 grow">"Extremely clean environment which is so important to me. Got my root canal done here, and I must say it's the top dentist in Prem Nagar Delhi. Highly recommended."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-800 font-semibold text-lg">P</div>
<div>
<div className="text-lg font-semibold text-stone-900">Priya M.</div>
<div className="text-base text-stone-500">Patient</div>
</div>
</div>
</div>
<div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 flex flex-col">
<div className="flex gap-1 mb-6 text-amber-400">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<p className="text-lg text-stone-600 mb-8 grow">"Took my kids here for a general checkup. The staff made them feel so comfortable. Great experience overall at this clinic in Prem Nagar II."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-800 font-semibold text-lg">R</div>
<div>
<div className="text-lg font-semibold text-stone-900">Rahul V.</div>
<div className="text-base text-stone-500">Patient</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="contact">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

<div>
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-teal-950 mb-6">
                        Visit Our Clinic
                    </h2>
<p className="text-xl text-stone-600 mb-10">
                        Conveniently located in Prem Nagar, New Delhi. Reach out to us for appointments or queries.
                    </p>
<div className="space-y-8 mb-12">
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-stone-50 rounded-full flex items-center justify-center text-teal-900 shrink-0">
<i className="w-6 h-6" data-lucide="map-pin"></i>
</div>
<div>
<h4 className="text-xl font-semibold text-stone-900 mb-1 tracking-tight">Clinic Address</h4>
<p className="text-lg text-stone-600 leading-relaxed">
                                    U-466, 40 Feet Rd, near Naag Mandir,<br/>
                                    Block V, Prem Nagar II, Prem Nagar,<br/>
                                    New Delhi, Delhi 110086, India
                                </p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-stone-50 rounded-full flex items-center justify-center text-teal-900 shrink-0">
<i className="w-6 h-6" data-lucide="clock"></i>
</div>
<div>
<h4 className="text-xl font-semibold text-stone-900 mb-1 tracking-tight">Business Hours</h4>
<p className="text-lg text-stone-600">Mon - Sun: 10:00 AM - 8:00 PM</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-stone-50 rounded-full flex items-center justify-center text-teal-900 shrink-0">
<i className="w-6 h-6" data-lucide="phone"></i>
</div>
<div>
<h4 className="text-xl font-semibold text-stone-900 mb-1 tracking-tight">Contact Us</h4>
<p className="text-lg text-stone-600 mb-4">+91 70489 16711</p>
<div className="flex gap-4">
<a className="inline-flex items-center gap-2 px-6 py-2.5 bg-teal-900 text-white text-base font-medium rounded-full hover:bg-teal-800 transition-colors" href="tel:+917048916711">
                                        Call Now
                                    </a>
<a className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#25D366] text-white text-base font-medium rounded-full hover:bg-[#20bd5a] transition-colors shadow-sm" href="https://wa.me/917048916711" target="_blank">
<i className="w-5 h-5" data-lucide="message-circle"></i>
                                        WhatsApp
                                    </a>
</div>
</div>
</div>
</div>

<div className="w-full h-64 rounded-3xl overflow-hidden border border-stone-200 shadow-sm bg-stone-100 relative">

<iframe allowfullscreen="" className="absolute inset-0 w-full h-full border-0" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.418702958348!2d77.0543!3d28.675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjh8NDAnMzAuMCJOIDc3fDAzJzE1LjUiRQ!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin">
</iframe>

<div className="absolute inset-0 flex items-center justify-center bg-stone-100/10 backdrop-blur-[1px] pointer-events-none">
<a className="px-4 py-2 bg-white/90 text-stone-800 text-sm font-medium rounded-full shadow-sm border border-stone-200 pointer-events-auto hover:bg-white transition-colors" href="https://maps.app.goo.gl/Rh2aU5kA1YY5vUgYA" target="_blank">
                                Open in Google Maps
                            </a>
</div>
</div>
</div>

<div className="bg-stone-50 rounded-[2.5rem] p-8 lg:p-12 border border-stone-100 h-fit">
<h3 className="text-3xl font-semibold tracking-tight text-teal-950 mb-2">Book an Appointment</h3>
<p className="text-lg text-stone-600 mb-8">Fill out the form below and we will get back to you to confirm your slot.</p>
<form className="space-y-6">
<div>
<label className="block text-base font-medium text-stone-900 mb-2" htmlFor="name">Full Name</label>
<input className="w-full px-5 py-4 bg-white border border-stone-200 rounded-2xl text-lg text-stone-900 focus:outline-none focus:ring-2 focus:ring-teal-900/20 focus:border-teal-900 transition-all placeholder:text-stone-400" id="name" placeholder="John Doe" type="text"/>
</div>
<div>
<label className="block text-base font-medium text-stone-900 mb-2" htmlFor="phone">Phone Number</label>
<input className="w-full px-5 py-4 bg-white border border-stone-200 rounded-2xl text-lg text-stone-900 focus:outline-none focus:ring-2 focus:ring-teal-900/20 focus:border-teal-900 transition-all placeholder:text-stone-400" id="phone" placeholder="+91 XXXX XXXXX" type="tel"/>
</div>
<div>
<label className="block text-base font-medium text-stone-900 mb-2" htmlFor="service">Service Required</label>
<div className="relative">
<select className="w-full px-5 py-4 bg-white border border-stone-200 rounded-2xl text-lg text-stone-900 appearance-none focus:outline-none focus:ring-2 focus:ring-teal-900/20 focus:border-teal-900 transition-all" id="service">
<option disabled="" selected="" value="">Select a treatment</option>
<option value="checkup">General Checkup</option>
<option value="cleaning">Teeth Cleaning</option>
<option value="pain">Tooth Pain / Extraction</option>
<option value="rct">Root Canal</option>
<option value="other">Other / Not Sure</option>
</select>
<div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-stone-500">
<i className="w-5 h-5" data-lucide="chevron-down"></i>
</div>
</div>
</div>
<div>
<label className="block text-base font-medium text-stone-900 mb-2" htmlFor="message">Additional Notes (Optional)</label>
<textarea className="w-full px-5 py-4 bg-white border border-stone-200 rounded-2xl text-lg text-stone-900 focus:outline-none focus:ring-2 focus:ring-teal-900/20 focus:border-teal-900 transition-all placeholder:text-stone-400 resize-none" id="message" placeholder="Describe any pain or specific needs..." rows="3"></textarea>
</div>
<button className="w-full py-4 bg-teal-900 text-white text-lg font-medium rounded-2xl hover:bg-teal-800 hover:shadow-lg transition-all flex items-center justify-center gap-2" type="button">
                            Request Appointment
                            <i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-teal-950 pt-20 pb-10 border-t border-teal-900">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
<div className="lg:col-span-2">
<a className="flex items-center gap-2 group mb-6" href="#">
<div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white border border-white/20">
<i className="w-6 h-6" data-lucide="shield-plus"></i>
</div>
<div>
<span className="block text-xl tracking-tight font-semibold text-white leading-none">Dento Care</span>
</div>
</a>
<p className="text-lg text-teal-100/70 max-w-md mb-8">
                        Delivering exceptional dental care with modern technology and a patient-first approach in Prem Nagar, New Delhi.
                    </p>
<div className="flex items-center gap-4">
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-teal-100 hover:bg-white/10 hover:text-white transition-colors border border-white/10" href="#">
<i className="w-5 h-5" data-lucide="facebook"></i>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-teal-100 hover:bg-white/10 hover:text-white transition-colors border border-white/10" href="#">
<i className="w-5 h-5" data-lucide="instagram"></i>
</a>
</div>
</div>
<div>
<h4 className="text-lg font-semibold text-white tracking-tight mb-6">Quick Links</h4>
<ul className="space-y-4">
<li><a className="text-base text-teal-100/70 hover:text-white transition-colors" href="#">Home</a></li>
<li><a className="text-base text-teal-100/70 hover:text-white transition-colors" href="#about">About Us</a></li>
<li><a className="text-base text-teal-100/70 hover:text-white transition-colors" href="#services">Services</a></li>
<li><a className="text-base text-teal-100/70 hover:text-white transition-colors" href="#testimonials">Patient Reviews</a></li>
</ul>
</div>
<div>
<h4 className="text-lg font-semibold text-white tracking-tight mb-6">Contact</h4>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-base text-teal-100/70">
<i className="w-5 h-5 shrink-0 mt-0.5" data-lucide="map-pin"></i>
<a className="hover:text-white transition-colors" href="https://maps.app.goo.gl/Rh2aU5kA1YY5vUgYA" target="_blank">U-466, 40 Feet Rd, near Naag Mandir, Prem Nagar II, New Delhi 110086</a>
</li>
<li className="flex items-center gap-3 text-base text-teal-100/70">
<i className="w-5 h-5 shrink-0" data-lucide="phone"></i>
<a className="hover:text-white transition-colors" href="tel:+917048916711">+91 70489 16711</a>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-teal-900/50 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-sm text-teal-100/50">
                    © 2024 Dento Care Dental Clinic. All rights reserved.
                </p>
<div className="text-sm text-teal-100/50">
                    Google Maps Code: M3R3+R3 New Delhi, Delhi
                </div>
</div>
</div>
</footer>


    </>
  );
}
