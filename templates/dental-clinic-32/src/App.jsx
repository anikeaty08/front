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
      

<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<a className="flex-shrink-0 flex items-center gap-3" href="#">
<img alt="R Dental Clinic" className="h-10 w-auto" src="https://www.rdentalclinic.co.uk/wp-content/themes/rdental/images/logo.png"/>
</a>

<div className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-slate-900 hover:text-brand transition-colors" href="#home">Home</a>
<a className="text-sm font-medium text-slate-600 hover:text-brand transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-slate-600 hover:text-brand transition-colors" href="#treatments">Treatments</a>
<a className="text-sm font-medium text-slate-600 hover:text-brand transition-colors" href="#fees">Fees</a>
<a className="text-sm font-medium text-slate-600 hover:text-brand transition-colors" href="#reviews">Reviews</a>
<a className="text-sm font-medium text-slate-600 hover:text-brand transition-colors" href="#contact">Contact</a>
</div>

<div className="hidden md:flex items-center gap-4">
<a className="flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-brand" href="tel:01274638061">
<i className="w-4 h-4" data-lucide="phone"></i> 01274 638061
                    </a>
<a className="bg-brand hover:bg-cyan-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all shadow-lg shadow-cyan-200 hover:shadow-cyan-300 flex items-center gap-2" href="https://uk.dentalhub.online/soe/new/R%20Dental%20Clinic?pid=UKLDS01&amp;cp=true" target="_blank">
                        Book Online <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>

<div className="lg:hidden flex items-center">
<button className="text-slate-900 p-2">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</div>
</div>
</nav>

<section className="lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50 pt-32 pb-20 relative" id="home">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-semibold text-brand tracking-wide uppercase">
<span className="w-2 h-2 rounded-full bg-brand animate-pulse"></span> Accepting New Patients
                    </div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-slate-900 leading-[1.1]">
                        Your New Smile <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-600">Starts Here.</span>
</h1>
<p className="text-lg text-slate-500 max-w-lg leading-relaxed">
                        We provide a wide range of general and cosmetic dentistry treatment in a modern dental practice in Bradford to help you look after your oral health.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 pt-2">
<a className="inline-flex justify-center items-center bg-slate-900 text-white text-base font-medium px-8 py-3.5 rounded-full hover:bg-slate-800 transition-all shadow-xl shadow-slate-200" href="https://uk.dentalhub.online/soe/new/R%20Dental%20Clinic?pid=UKLDS01&amp;cp=true" target="_blank">
                            Book Appointment
                        </a>
<a className="inline-flex justify-center items-center bg-white text-slate-700 border border-slate-200 text-base font-medium px-8 py-3.5 rounded-full hover:bg-slate-50 transition-all" href="#treatments">
                            View Treatments
                        </a>
</div>

<div className="pt-6 flex items-center gap-6 text-sm font-medium text-slate-500">
<div className="flex items-center gap-2">
<div className="flex text-yellow-400">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<span className="text-slate-900">4.9/5</span> on Google
                        </div>
<div className="w-px h-4 bg-slate-300"></div>
<div>
                           Voted Best Practice in Bradford
                        </div>
</div>
</div>
<div className="relative lg:h-[600px] w-full">
<div className="absolute inset-0 bg-gradient-to-tr from-cyan-100 to-transparent rounded-[3rem] transform rotate-3 scale-95 opacity-50"></div>
<img alt="R Dental Clinic Smile" className="relative w-full h-full object-cover rounded-[2.5rem] shadow-2xl border-4 border-white" src="https://www.rdentalclinic.co.uk/wp-content/uploads/2022/09/Home-Invisalign.jpg"/>

<div className="bg-white/90 max-w-xs border-white/50 border rounded-2xl pt-4 pr-4 pb-4 pl-4 absolute bottom-8 left-8 shadow-xl backdrop-blur-md">
<div className="flex items-center gap-3">
<div className="bg-brand/10 p-2 rounded-lg text-brand">
<i className="w-5 h-5" data-lucide="sparkles"></i>
</div>
<div>
<p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Special Offer</p>
<p className="text-sm font-semibold text-slate-900">Free Smile Makeover Consultation</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-24" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 gap-x-16 gap-y-16 items-center">
<div className="order-2 lg:order-1 relative">
<div className="grid grid-cols-2 gap-4">
<img alt="Reception" className="bg-center w-full h-64 object-cover rounded-2xl shadow-lg" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d45fc530-3992-4e90-aa49-255393828eea_800w.webp?w=800&amp;q=80"/>
<img alt="Award" className="bg-slate-100 w-full h-64 object-cover rounded-2xl shadow-lg" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1a7a2b9c-6e3e-4756-b006-56de3640359f_800w.webp"/>
</div>

<div className="transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full pt-4 pr-4 pb-4 pl-4 absolute top-1/2 left-1/2 shadow-xl">
<img alt="Google Rating" className="h-12 w-auto" src="https://www.rdentalclinic.co.uk/wp-content/themes/rdental/images/google-rating-new.svg"/>
</div>
</div>
<div className="order-1 lg:order-2">
<h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 mb-6 tracking-tight">
                        We put <span className="text-brand">families</span> at the heart of R Dental.
                    </h2>
<p className="text-lg text-slate-500 mb-6 leading-relaxed">
                        R Dental Clinic is a preferred, preventive, general and cosmetic dental practice led by a team of highly qualified and experienced dental professionals. We are based near the city centre of Bradford and close to the outskirts of Leeds.
                    </p>
<p className="text-lg text-slate-500 mb-8 leading-relaxed">
                        We pride ourselves on providing gentle, caring dentistry in a modern environment. Whether you need a simple check-up or a complex smile makeover, you are in safe hands.
                    </p>
<div className="grid grid-cols-2 gap-6 mb-8">
<div className="flex flex-col">
<span className="text-3xl font-bold text-slate-900">419+</span>
<span className="text-sm text-slate-500 font-medium">5-Star Reviews</span>
</div>
<div className="flex flex-col">
<span className="text-3xl font-bold text-slate-900">100%</span>
<span className="text-sm text-slate-500 font-medium">Commitment to Care</span>
</div>
</div>
<a className="text-brand font-semibold hover:text-cyan-700 inline-flex items-center gap-2" href="#team">
                        Meet the team <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 relative" id="treatments">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 mb-4 tracking-tight">Comprehensive Treatments</h2>
<p className="text-slate-500">From routine hygiene to advanced cosmetic procedures, we offer a full spectrum of dental care.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100">
<div className="w-14 h-14 bg-cyan-50 rounded-2xl flex items-center justify-center text-brand mb-6 group-hover:scale-110 transition-transform">
<i className="w-7 h-7" data-lucide="activity"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">General Dentistry</h3>
<p className="text-slate-500 mb-6 leading-relaxed">Routine check-ups, fillings, and preventive care to keep your smile healthy and bright year-round.</p>
<a className="text-sm font-semibold text-brand flex items-center gap-1 group-hover:gap-2 transition-all" href="#">Learn more <i className="w-4 h-4" data-lucide="chevron-right"></i></a>
</div>

<div className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100">
<div className="w-14 h-14 bg-cyan-50 rounded-2xl flex items-center justify-center text-brand mb-6 group-hover:scale-110 transition-transform">
<i className="w-7 h-7" data-lucide="sparkles"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Cosmetic Dentistry</h3>
<p className="text-slate-500 mb-6 leading-relaxed">Transform your smile with veneers, composite bonding, and professional teeth whitening treatments.</p>
<a className="text-sm font-semibold text-brand flex items-center gap-1 group-hover:gap-2 transition-all" href="#">Learn more <i className="w-4 h-4" data-lucide="chevron-right"></i></a>
</div>

<div className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100">
<div className="w-14 h-14 bg-cyan-50 rounded-2xl flex items-center justify-center text-brand mb-6 group-hover:scale-110 transition-transform">
<i className="w-7 h-7" data-lucide="smile"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Invisalign</h3>
<p className="text-slate-500 mb-6 leading-relaxed">The clear alternative to braces. Straighten your teeth discreetly with our expert Invisalign providers.</p>
<a className="text-sm font-semibold text-brand flex items-center gap-1 group-hover:gap-2 transition-all" href="#">Learn more <i className="w-4 h-4" data-lucide="chevron-right"></i></a>
</div>

<div className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100">
<div className="w-14 h-14 bg-cyan-50 rounded-2xl flex items-center justify-center text-brand mb-6 group-hover:scale-110 transition-transform">
<i className="w-7 h-7" data-lucide="hammer"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Implants</h3>
<p className="text-slate-500 mb-6 leading-relaxed">Permanent solutions for missing teeth. Restore function and aesthetics with high-quality dental implants.</p>
<a className="text-sm font-semibold text-brand flex items-center gap-1 group-hover:gap-2 transition-all" href="#">Learn more <i className="w-4 h-4" data-lucide="chevron-right"></i></a>
</div>

<div className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100">
<div className="w-14 h-14 bg-cyan-50 rounded-2xl flex items-center justify-center text-brand mb-6 group-hover:scale-110 transition-transform">
<i className="w-7 h-7" data-lucide="droplet"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Hygiene Services</h3>
<p className="text-slate-500 mb-6 leading-relaxed">Professional cleaning and gum care to prevent disease and maintain optimal oral health.</p>
<a className="text-sm font-semibold text-brand flex items-center gap-1 group-hover:gap-2 transition-all" href="#">Learn more <i className="w-4 h-4" data-lucide="chevron-right"></i></a>
</div>

<div className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100">
<div className="w-14 h-14 bg-cyan-50 rounded-2xl flex items-center justify-center text-brand mb-6 group-hover:scale-110 transition-transform">
<i className="w-7 h-7" data-lucide="heart-handshake"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Nervous Patients</h3>
<p className="text-slate-500 mb-6 leading-relaxed">We specialize in helping anxious patients feel calm and comfortable with gentle techniques and care.</p>
<a className="text-sm font-semibold text-brand flex items-center gap-1 group-hover:gap-2 transition-all" href="#">Learn more <i className="w-4 h-4" data-lucide="chevron-right"></i></a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden" id="reviews">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
<div className="flex flex-col md:flex-row justify-between items-end gap-6">
<div>
<h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 mb-4 tracking-tight">Patient Stories</h2>
<p className="text-slate-500 max-w-xl">See what our patients have to say about their experience at R Dental Clinic.</p>
</div>
<div className="flex gap-3">
<a className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-200 text-slate-700 hover:border-brand hover:text-brand transition-colors font-medium text-sm" href="https://www.google.co.uk/search?q=r+dental+clinic#lrd=0x487be3dd52237ef5:0x6606687636ee2944,1" target="_blank">
<i className="w-4 h-4 fill-current" data-lucide="star"></i> Leave a Google Review
                    </a>
</div>
</div>
</div>

<div className="relative w-full">
<div className="flex gap-6 overflow-x-auto pb-8 px-4 sm:px-6 lg:px-8 no-scrollbar snap-x">

<div className="min-w-[350px] bg-slate-50 p-6 rounded-2xl border border-slate-100 snap-center">
<div className="flex gap-1 text-yellow-400 mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-slate-600 mb-6 text-sm leading-relaxed">"Hygienist was wonderful in her treatment. The way she carried out the session engaging myself and explaining me thoroughly was very impressive. Surely they deserve 5 stars."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-600">MI</div>
<span className="text-sm font-semibold text-slate-900">MI</span>
</div>
</div>

<div className="min-w-[350px] bg-slate-50 p-6 rounded-2xl border border-slate-100 snap-center">
<div className="flex gap-1 text-yellow-400 mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-slate-600 mb-6 text-sm leading-relaxed">"Aneesah is a great dentist. She is very caring for me as a patient. Continuously reassuring and keeps me calm in what is a stressful situation. Explains in detail the treatments."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-600">DS</div>
<span className="text-sm font-semibold text-slate-900">David Shields</span>
</div>
</div>

<div className="min-w-[350px] bg-slate-50 p-6 rounded-2xl border border-slate-100 snap-center">
<div className="flex gap-1 text-yellow-400 mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-slate-600 mb-6 text-sm leading-relaxed">"Brilliant service, able to fit me in last minute for a hygienist appointment and gave me useful advice for brushing at home. Highly recommend!"</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-600">JL</div>
<span className="text-sm font-semibold text-slate-900">Jody L</span>
</div>
</div>

<div className="min-w-[350px] bg-slate-50 p-6 rounded-2xl border border-slate-100 snap-center">
<div className="flex gap-1 text-yellow-400 mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-slate-600 mb-6 text-sm leading-relaxed">"Needed emergency treatment due to tooth pain. Aneesah and staff very professional, checked whats wrong and informed cost. I am so pleased with the service."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-600">MI</div>
<span className="text-sm font-semibold text-slate-900">Mohammod Islam</span>
</div>
</div>
</div>
</div>

<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
<div className="bg-brand rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl shadow-cyan-500/20 relative overflow-hidden">
<div className="absolute top-0 right-0 opacity-10">
<i className="w-32 h-32 transform translate-x-8 -translate-y-8" data-lucide="quote"></i>
</div>
<h3 className="text-2xl font-semibold mb-6 relative z-10">Review of the Month</h3>
<p className="text-lg md:text-xl font-medium leading-relaxed mb-6 opacity-90 relative z-10">
                    "I had two appointments here and both were excellent. Omar Ali Khan was calm, reassuring, and very professional throughout. The extraction itself was done efficiently with minimal discomfort, and I felt well looked after from start to finish."
                </p>
<div className="font-bold text-lg relative z-10">- Zubher Hussain</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white relative overflow-hidden" id="contact">

<div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div>
<h2 className="text-4xl font-semibold mb-6 tracking-tight">Get in touch</h2>
<p className="text-slate-400 mb-10 text-lg">We are here to help you achieve the smile you deserve. Contact us today or book online.</p>
<div className="space-y-8">
<div className="flex items-start gap-4">
<div className="bg-slate-800 p-3 rounded-xl text-brand">
<i className="w-6 h-6" data-lucide="map-pin"></i>
</div>
<div>
<h4 className="font-semibold text-lg mb-1">Visit Us</h4>
<p className="text-slate-400">460 Idle Road<br/>Bradford, BD2 2AR</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="bg-slate-800 p-3 rounded-xl text-brand">
<i className="w-6 h-6" data-lucide="phone"></i>
</div>
<div>
<h4 className="font-semibold text-lg mb-1">Call Us</h4>
<p className="text-slate-400 hover:text-brand transition-colors"><a href="tel:01274638061">01274 638061</a></p>
<p className="text-xs text-slate-500 mt-1">Available Mon-Fri 9am - 5pm</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="bg-slate-800 p-3 rounded-xl text-brand">
<i className="w-6 h-6" data-lucide="message-circle"></i>
</div>
<div>
<h4 className="font-semibold text-lg mb-1">WhatsApp</h4>
<p className="text-slate-400 hover:text-brand transition-colors"><a href="whatsapp://send?phone=+4407501369578">Chat with us on WhatsApp</a></p>
</div>
</div>
</div>
<div className="mt-12 flex gap-4">
<a className="p-3 bg-slate-800 rounded-full hover:bg-brand transition-colors" href="https://www.facebook.com/rdentalclinic460/" target="_blank">
<i className="w-5 h-5" data-lucide="facebook"></i>
</a>
<a className="p-3 bg-slate-800 rounded-full hover:bg-brand transition-colors" href="https://www.instagram.com/rdentalclinic/" target="_blank">
<i className="w-5 h-5" data-lucide="instagram"></i>
</a>
</div>
</div>

<div className="bg-white rounded-3xl p-8 text-slate-900 shadow-2xl">
<h3 className="text-2xl font-semibold mb-6">Send an Enquiry</h3>
<form className="space-y-4">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
<input className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all bg-slate-50" placeholder="Your Name" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
<input className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all bg-slate-50" placeholder="Mobile Number" type="tel"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
<input className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all bg-slate-50" placeholder="email@address.com" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1">Interest</label>
<div className="relative">
<select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all bg-slate-50 appearance-none">
<option>General Checkup</option>
<option>Invisalign</option>
<option>Implants</option>
<option>Cosmetic Dentistry</option>
<option>Emergency</option>
</select>
<i className="absolute right-4 top-3.5 w-5 h-5 text-slate-400 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1">Are you a registered patient?</label>
<div className="flex gap-4 mt-2">
<label className="flex items-center gap-2 cursor-pointer">
<input className="text-brand focus:ring-brand" name="registered" type="radio"/> Yes
                                </label>
<label className="flex items-center gap-2 cursor-pointer">
<input className="text-brand focus:ring-brand" name="registered" type="radio"/> No
                                </label>
</div>
</div>
<button className="w-full bg-brand hover:bg-cyan-600 text-white font-semibold py-4 rounded-xl transition-all shadow-lg mt-4" type="button">
                            Send Enquiry
                        </button>
</form>
</div>
</div>
</div>
</section>

<div className="w-full h-96 bg-slate-200 grayscale hover:grayscale-0 transition-all duration-700">
<iframe allowfullscreen="" frameborder="0" height="100%" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2355.18398481123!2d-1.7380929847527116!3d53.82180264669278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487be3dd52237ef5%3A0x6606687636ee2944!2sR+Dental+Clinic!5e0!3m2!1sen!2sin!4v1489071050821" style={{border: '0'}} width="100%"></iframe>
</div>

<footer className="bg-white border-t border-slate-100 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<img alt="R Dental" className="h-12 w-auto mb-6" src="https://www.rdentalclinic.co.uk/wp-content/themes/rdental/images/footer-logo.png"/>
<p className="text-sm text-slate-500">R Dental Clinic is authorised and regulated by the Financial Conduct Authority. Ref: 744135.</p>
</div>
<div>
<h4 className="font-bold text-slate-900 mb-4">Quick Links</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-brand transition-colors" href="#">Home</a></li>
<li><a className="hover:text-brand transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-brand transition-colors" href="#">Treatments</a></li>
<li><a className="hover:text-brand transition-colors" href="#">Fees</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-slate-900 mb-4">Legal</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-brand transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-brand transition-colors" href="#">Cookie Policy</a></li>
<li><a className="hover:text-brand transition-colors" href="#">Complaints Procedure</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-slate-900 mb-4">Company Info</h4>
<p className="text-sm text-slate-500 mb-2">R Lad Consultancy Ltd trading as R Dental Clinic.</p>
<p className="text-sm text-slate-500">Registered address: Highdown House, 11 Highdown Road, Leamington Spa, CV31 1XT.</p>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
<p>© 2024 R Dental Clinic. All Rights Reserved.</p>
<p>Website concept based on original R Dental Clinic design.</p>
</div>
</div>
</footer>


    </>
  );
}
