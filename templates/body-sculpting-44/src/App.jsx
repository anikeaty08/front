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
      

<div className="bg-[#8e24aa] text-white text-xs font-medium py-2 px-4 text-center">
<div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-6">
<span className="flex items-center gap-1"><span className="bg-white/20 px-2 py-0.5 rounded-full text-[10px] tracking-wide uppercase">Grand Opening</span> New Location in Severna Park</span>
<span className="hidden sm:inline opacity-50">|</span>
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="sparkles"></i> Now Booking Appointments!</span>
</div>
</div>

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">

<div className="text-xl font-semibold tracking-tight text-gray-900 flex items-center gap-2">
<span className="text-[#8e24aa]">MD Body</span> Sculpting
                </div>
</div>
<div className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-600">
<a className="hover:text-[#8e24aa] transition-colors" href="#">Home</a>
<a className="text-[#8e24aa]" href="#">About Us</a>
<a className="hover:text-[#8e24aa] transition-colors" href="#">Treatments</a>
<a className="hover:text-[#8e24aa] transition-colors" href="#">Locations</a>
<a className="hover:text-[#8e24aa] transition-colors" href="#">Contact</a>
</div>
<div className="hidden sm:block">
<a className="bg-[#8e24aa] hover:bg-[#7b1fa2] text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-all shadow-md shadow-purple-900/10 flex items-center gap-2" href="#">
<i className="w-4 h-4" data-lucide="calendar"></i>
                    Book Appointment
                </a>
</div>
</div>
</nav>

<section className="relative pt-24 pb-32 overflow-hidden">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-100/40 via-white to-white -z-10"></div>
<div className="max-w-4xl mx-auto px-6 text-center">
<h1 className="text-6xl md:text-7xl font-semibold tracking-tight text-[#8e24aa] mb-6">
                About Us
            </h1>
<p className="text-2xl md:text-3xl font-medium text-gray-900 tracking-tight mb-6">
                Advanced non-invasive body sculpting designed to help you look and feel your best.
            </p>
<p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
                Maryland Body Sculpting is your destination for modern wellness solutions that enhance confidence, promote self-care, and support your body transformation goals—without surgery or downtime.
            </p>
<div className="mt-16 flex justify-center">
<div className="h-12 w-8 border-2 border-gray-300 rounded-full flex justify-center p-2">
<div className="w-1 h-2 bg-gray-400 rounded-full animate-bounce"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="order-2 lg:order-1">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#8e24aa]/10 text-[#8e24aa] mb-6 border border-[#8e24aa]/20">
<i className="w-3 h-3" data-lucide="flag"></i> Founded in 2021
                    </span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-8">
                        Welcome to <br className="hidden lg:block"/>
<span className="text-[#8e24aa]">Maryland Body Sculpting</span>
</h2>
<div className="space-y-6 text-lg text-gray-600 leading-relaxed">
<p>
                            Maryland Body Sculpting was created with a simple mission: to offer safe, effective, and non-invasive body contouring solutions in a welcoming, professional environment.
                        </p>
<p>
                            We specialize in advanced treatments designed to support fat reduction, skin tightening, and overall body confidence—without surgery, needles, or lengthy recovery times.
                        </p>
<p>
                            Our clinic focuses on personalized care, ensuring every client receives treatments tailored to their individual goals and comfort level.
                        </p>
</div>
</div>

<div className="order-1 lg:order-2 relative">

<div className="absolute inset-0 bg-purple-200 blur-3xl opacity-30 transform translate-x-4 translate-y-4 rounded-full"></div>
<img alt="Clinic Interior" className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover border border-gray-100/50" src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&amp;w=2068&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50/50">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="relative">
<div className="absolute -inset-4 bg-gradient-to-tr from-purple-100 to-transparent rounded-[2rem] -z-10"></div>
<img alt="Treatment in action" className="rounded-3xl shadow-xl w-full h-[450px] object-cover border border-white" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>

<div>
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#8e24aa] text-white mb-6 shadow-md shadow-purple-500/20">
<i className="w-3 h-3" data-lucide="target"></i> Our Mission &amp; Approach
                    </span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#8e24aa] mb-6">
                        Empowering Your <br/> Transformation
                    </h2>
<div className="space-y-6 text-lg text-gray-600 leading-relaxed">
<p>
                            At Maryland Body Sculpting, our mission is to support your transformation both physically and emotionally. We believe confidence starts with feeling comfortable in your own skin.
                        </p>
<p>
                            Our team uses modern, non-invasive technologies combined with a client-first approach to deliver results you can trust. Every treatment plan is designed to complement your lifestyle, wellness goals, and long-term confidence.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="order-2 lg:order-1">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-gray-200 text-gray-600 mb-6 bg-white">
<i className="w-3 h-3 text-[#8e24aa]" data-lucide="heart"></i> Transformation
                    </span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#8e24aa] mb-6">
                        Your Journey to <br/> Self-Confidence
                    </h2>
<div className="space-y-6 text-lg text-gray-600 leading-relaxed">
<p>
                            Your journey with Maryland Body Sculpting is about more than appearance—it’s about feeling confident, empowered, and comfortable in your body.
                        </p>
<p>
                            Our treatments are designed to enhance natural results while supporting overall wellness. We focus on helping you feel stronger, more confident, and proud of your progress at every stage.
                        </p>
</div>
</div>

<div className="order-1 lg:order-2 relative">
<img alt="Woman confident fitness" className="rounded-3xl shadow-xl w-full h-[500px] object-cover object-top" src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#f8f7fa]">
<div className="max-w-4xl mx-auto px-6 text-center">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#8e24aa] text-white mb-8 shadow-lg shadow-purple-900/20">
<i className="w-3 h-3" data-lucide="sparkles"></i> What We Offer
            </span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#6a1b9a] mb-12">
                Comprehensive Wellness Solutions
            </h2>
<div className="bg-white p-10 md:p-14 rounded-[2.5rem] shadow-xl shadow-purple-900/5 border border-purple-50">
<p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
                    Our services combine advanced technology with holistic wellness principles. We offer non-invasive treatments such as body sculpting, skin tightening, and wellness-focused solutions that support both physical appearance and overall well-being.
                </p>
<p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                    Maryland Body Sculpting is committed to helping you achieve visible results while maintaining a comfortable, relaxing experience.
                </p>
</div>
</div>
</section>

<section className="py-16 bg-white">
<div className="max-w-5xl mx-auto px-6">
<div className="bg-gradient-to-r from-[#8e24aa] to-[#ab47bc] rounded-3xl p-10 md:p-16 text-center shadow-2xl shadow-purple-900/30 relative overflow-hidden">

<div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
<div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full translate-x-1/3 translate-y-1/3"></div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6 relative z-10">
                    Ready to Start Your Transformation Journey?
                </h2>
<p className="text-purple-100 text-lg md:text-xl mb-10 relative z-10">
                    Book your consultation today and take the first step toward a more confident you.
                </p>
<a className="inline-flex items-center gap-2 bg-white text-[#8e24aa] hover:bg-gray-50 px-8 py-4 rounded-full text-base font-semibold transition-all shadow-lg relative z-10" href="#">
                    Book Appointment <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</section>

<section className="py-24 bg-gray-50">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-6">
                Visit <span className="text-[#8e24aa]">Us</span>
</h2>
<p className="text-lg text-gray-600 max-w-2xl mx-auto mb-16">
                We welcome you at our convenient Maryland locations, designed to provide a comfortable and private environment for your treatments.
            </p>
<div className="grid md:grid-cols-2 gap-8">

<div className="bg-white p-2 rounded-3xl shadow-sm border border-gray-200">
<div className="p-6 text-left flex justify-between items-center">
<h3 className="text-xl font-semibold text-gray-900">Ellicott City</h3>
<button className="text-[#8e24aa] text-sm font-medium hover:underline flex items-center gap-1">
                            Get Directions <i className="w-3 h-3" data-lucide="external-link"></i>
</button>
</div>
<div className="rounded-2xl overflow-hidden h-64 bg-gray-200 relative">
<iframe allowfullscreen="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3087.653457193652!2d-76.80287768463717!3d39.29579697951052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c81f9a0c0a0a0b%3A0x1c0c0c0c0c0c0c0c!2sEllicott%20City%2C%20MD!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" style={{border: '0'}} width="100%"></iframe>
<div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur p-3 rounded-xl shadow-lg border border-gray-100">
<div className="text-sm font-medium text-gray-900">3525 Ellicott Mills Dr</div>
<div className="text-xs text-gray-500">Ellicott City, MD 21043</div>
</div>
</div>
<div className="p-4">
<a className="block w-full bg-[#8e24aa] text-white py-3 rounded-xl text-center text-sm font-medium hover:bg-[#7b1fa2] transition-colors" href="#">
                            Launch Map
                         </a>
</div>
</div>

<div className="bg-white p-2 rounded-3xl shadow-sm border border-gray-200">
<div className="p-6 text-left flex justify-between items-center">
<h3 className="text-xl font-semibold text-gray-900">Severna Park</h3>
<button className="text-[#8e24aa] text-sm font-medium hover:underline flex items-center gap-1">
                            Get Directions <i className="w-3 h-3" data-lucide="external-link"></i>
</button>
</div>
<div className="rounded-2xl overflow-hidden h-64 bg-gray-200 relative">
<iframe allowfullscreen="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3096.567891234567!2d-76.567891234567!3d39.123456789012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sRockWell%20Fitness!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" style={{border: '0'}} width="100%"></iframe>
<div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur p-3 rounded-xl shadow-lg border border-gray-100">
<div className="text-sm font-medium text-gray-900">Inside RockWell Fitness</div>
<div className="text-xs text-gray-500">Severna Park / Annapolis</div>
</div>
</div>
<div className="p-4">
<a className="block w-full bg-[#8e24aa] text-white py-3 rounded-xl text-center text-sm font-medium hover:bg-[#7b1fa2] transition-colors" href="#">
                            Launch Map
                         </a>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-black text-white pt-20 pb-10 border-t border-gray-900">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

<div className="col-span-1 md:col-span-1">
<h3 className="text-lg font-semibold mb-6">MD Body Sculpting</h3>
<p className="text-gray-400 text-sm leading-relaxed mb-6">
                        Maryland's premier non-surgical body contouring clinic. Advanced treatments, expert care, real results.
                    </p>
<div className="space-y-3">
<div className="flex items-center gap-3 text-sm text-gray-400">
<i className="w-4 h-4 text-[#8e24aa]" data-lucide="phone"></i>
                            (410) 505-8595
                        </div>
<div className="flex items-center gap-3 text-sm text-gray-400">
<i className="w-4 h-4 text-[#8e24aa]" data-lucide="mail"></i>
                            hello@mdbodysculpting.com
                        </div>
</div>
<div className="flex gap-4 mt-6">
<a className="text-gray-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="facebook"></i></a>
<a className="text-gray-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
</div>
</div>

<div>
<h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-6">Our Services</h4>
<ul className="space-y-4 text-sm text-gray-400">
<li><a className="hover:text-[#8e24aa] transition-colors" href="#">Localized Cryotherapy</a></li>
<li><a className="hover:text-[#8e24aa] transition-colors" href="#">Skin Tightening</a></li>
<li><a className="hover:text-[#8e24aa] transition-colors" href="#">Fat Reduction</a></li>
<li><a className="hover:text-[#8e24aa] transition-colors" href="#">HIFU + Liposonix</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-6">Quick Links</h4>
<ul className="space-y-4 text-sm text-gray-400">
<li><a className="hover:text-[#8e24aa] transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-[#8e24aa] transition-colors" href="#">Testimonials</a></li>
<li><a className="hover:text-[#8e24aa] transition-colors" href="#">Contact Us</a></li>
<li><a className="hover:text-[#8e24aa] transition-colors" href="#">Locations</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-6">Stay Updated</h4>
<p className="text-gray-400 text-sm mb-4">Get exclusive offers, transformation tips, and the latest news.</p>
<div className="flex flex-col gap-3">
<input className="bg-gray-900 border border-gray-800 text-white text-sm rounded-lg p-3 focus:outline-none focus:border-[#8e24aa] placeholder-gray-600" placeholder="Enter your email" type="email"/>
<button className="bg-[#8e24aa] text-white text-sm font-medium py-3 rounded-lg hover:bg-[#7b1fa2] transition-colors">
                             Subscribe Now
                         </button>
</div>
</div>
</div>

<div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-xs text-gray-500">
                    © 2025 MD Body Sculpting. All rights reserved.
                </div>
<div className="flex gap-6 text-xs text-gray-500">
<a className="hover:text-white" href="#">Privacy Policy</a>
<a className="hover:text-white" href="#">Terms of Service</a>
</div>
</div>

<div className="mt-16 bg-gray-900 rounded-2xl p-8 md:p-12 text-center border border-gray-800 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-[#8e24aa]/10 to-transparent"></div>
<h3 className="text-2xl md:text-3xl font-semibold mb-4 relative z-10">Start Your Transformation Today</h3>
<p className="text-gray-400 mb-8 max-w-xl mx-auto relative z-10">
                    Discover how Maryland Body Sculpting can help you feel confident, comfortable, and empowered—without surgery.
                </p>
<a className="inline-block bg-[#8e24aa] text-white px-8 py-3 rounded-md text-sm font-medium hover:bg-[#7b1fa2] transition-colors relative z-10" href="#">
                    Book Appointment Now
                </a>
</div>
</div>
</footer>


    </>
  );
}
