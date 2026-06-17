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
sans: ['Inter', 'sans-serif'],
},
colors: {
haven: {
50: '#f4f7fa',
100: '#e3eaf0',
500: '#64748b',
800: '#0f172a',
900: '#0f172a', // Deep slate for text
teal: '#0d9488', // Medical teal
tealDark: '#0f766e',
darkGreen: '#1F4B43', // Custom from image
softTeal: '#489588', // Custom button color from image
lightTeal: '#5eead4', // For stars
}
},
boxShadow: {
'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
'hover': '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.01)',
'card': '0 20px 40px -5px rgba(0, 0, 0, 0.1), 0 10px 20px -5px rgba(0, 0, 0, 0.04)',
}
}
}
}



        // 1. Initialize Icons
        lucide.createIcons();

        // 2. Mobile Menu Logic
        const mobileBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileClose = document.getElementById('mobile-menu-close');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        function toggleMenu() {
            const isClosed = mobileMenu.classList.contains('translate-x-full');
            if (isClosed) {
                mobileMenu.classList.remove('translate-x-full');
            } else {
                mobileMenu.classList.add('translate-x-full');
            }
        }

        mobileBtn.addEventListener('click', toggleMenu);
        mobileClose.addEventListener('click', toggleMenu);
        mobileLinks.forEach(link => link.addEventListener('click', toggleMenu));

        // 3. Scroll Animation (Fade In Up)
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-enter-active');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-enter').forEach(el => {
            observer.observe(el);
        });

        // 4. Testimonial Carousel Logic
        const track = document.getElementById('testimonials-track');
        const prevBtn = document.getElementById('prev-slide');
        const nextBtn = document.getElementById('next-slide');

        if(track && prevBtn && nextBtn) {
            nextBtn.addEventListener('click', () => {
                const card = track.firstElementChild;
                const cardWidth = card.offsetWidth;
                const gap = 24; // tailwind gap-6 is 1.5rem = 24px
                track.scrollBy({ left: cardWidth + gap, behavior: 'smooth' });
            });
            
            prevBtn.addEventListener('click', () => {
                const card = track.firstElementChild;
                const cardWidth = card.offsetWidth;
                const gap = 24; 
                track.scrollBy({ left: -(cardWidth + gap), behavior: 'smooth' });
            });
        }
    
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
      

<header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 transition-all duration-300" id="header">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex-shrink-0 opacity-90 hover:opacity-100 transition-opacity" href="#top">
<img alt="Haven Pain Relief Centre" className="h-10 md:h-12 w-auto object-contain" src="https://i.postimg.cc/15BqbSjW/Haven-Pain-Relief.png"/>
</a>

<nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
<a className="hover:text-teal-700 transition-colors" href="#about">About</a>
<a className="hover:text-teal-700 transition-colors" href="#meet-the-doctor">Meet the Doctor</a>
<a className="hover:text-teal-700 transition-colors" href="#conditions">Conditions</a>
<a className="hover:text-teal-700 transition-colors" href="#treatments">Treatments</a>
<a className="hover:text-teal-700 transition-colors" href="#contact">Contact</a>
</nav>

<div className="hidden md:flex items-center space-x-6">
<a className="flex items-center space-x-2 text-slate-800 hover:text-teal-700 transition-colors group" href="tel:0214857669">
<i className="w-4 h-4 text-teal-600 group-hover:scale-110 transition-transform" data-lucide="phone" strokeWidth="1.5"></i>
<span className="text-sm font-medium">021 4857669</span>
</a>
<a className="bg-teal-700 text-white px-5 py-2.5 rounded-full text-sm font-medium shadow-sm hover:shadow-md hover:scale-[1.02] hover:bg-teal-800 transition-all duration-200" href="#contact">
                    Book Now
                </a>
</div>

<button className="md:hidden text-slate-800 p-2" id="mobile-menu-btn">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>

<div className="fixed inset-0 bg-white z-40 transform translate-x-full transition-transform duration-300 md:hidden flex flex-col pt-24 px-6 space-y-6 shadow-2xl" id="mobile-menu">
<button className="absolute top-6 right-6 p-2 text-slate-500" id="mobile-menu-close">
<i className="w-8 h-8" data-lucide="x" strokeWidth="1.5"></i>
</button>
<a className="mobile-link text-xl font-medium text-slate-800 border-b border-slate-100 pb-4" href="#about">About</a>
<a className="mobile-link text-xl font-medium text-slate-800 border-b border-slate-100 pb-4" href="#meet-the-doctor">Meet the Doctor</a>
<a className="mobile-link text-xl font-medium text-slate-800 border-b border-slate-100 pb-4" href="#conditions">Conditions</a>
<a className="mobile-link text-xl font-medium text-slate-800 border-b border-slate-100 pb-4" href="#treatments">Treatments</a>
<a className="mobile-link text-xl font-medium text-slate-800 pb-4" href="#contact">Contact</a>
<div className="pt-6">
<a className="block w-full text-center bg-teal-700 text-white py-4 rounded-xl text-lg font-medium mb-4" href="#contact">Book Appointment</a>
<a className="flex items-center justify-center space-x-2 text-slate-600" href="tel:0214857669">
<i className="w-5 h-5" data-lucide="phone"></i>
<span>021 4857669</span>
</a>
</div>
</div>
</header>

<section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden bg-haven-50" id="top">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="max-w-2xl fade-enter">
<span className="inline-block text-teal-700 font-medium tracking-wide text-xs uppercase mb-4 bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
                    Douglas, Cork · Drug-free pain relief
                </span>
<h1 className="text-5xl md:text-6xl lg:text-[4rem] leading-[1.1] font-medium text-slate-900 tracking-tight mb-6">
                    Live Life <br/> <span className="text-teal-700">Pain-Free.</span>
</h1>
<p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8 max-w-lg">
                    Regain an active, happy life with advanced, non-surgical pain treatments – tailored to you in the heart of Douglas, Cork.
                </p>

<ul className="space-y-3 mb-10">
<li className="flex items-center text-slate-700 font-medium">
<div className="bg-teal-100 rounded-full p-1 mr-3">
<i className="w-3.5 h-3.5 text-teal-700" data-lucide="check" strokeWidth="3"></i>
</div>
                        Back, neck &amp; nerve pain
                    </li>
<li className="flex items-center text-slate-700 font-medium">
<div className="bg-teal-100 rounded-full p-1 mr-3">
<i className="w-3.5 h-3.5 text-teal-700" data-lucide="check" strokeWidth="3"></i>
</div>
                        Disc &amp; sciatica issues
                    </li>
<li className="flex items-center text-slate-700 font-medium">
<div className="bg-teal-100 rounded-full p-1 mr-3">
<i className="w-3.5 h-3.5 text-teal-700" data-lucide="check" strokeWidth="3"></i>
</div>
                        Sports injuries &amp; chronic pain
                    </li>
</ul>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center bg-teal-700 text-white px-8 py-4 rounded-full font-medium text-lg shadow-lg shadow-teal-700/20 hover:bg-teal-800 hover:scale-[1.03] transition-all duration-200" href="#contact">
                        Book Appointment Now
                    </a>
<a className="inline-flex justify-center items-center px-8 py-4 rounded-full font-medium text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-white hover:text-teal-700 transition-all duration-200" href="#conditions">
                        View conditions we treat
                    </a>
</div>
<p className="mt-4 text-sm text-slate-400">
                    Not sure what you need? <a className="text-teal-600 hover:underline" href="#conditions">View conditions we treat</a>
</p>
</div>

<div className="relative fade-enter delay-200">
<div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative">
<img alt="Modern clinic consultation" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl flex items-center gap-4 max-w-xs animate-float">
<div className="bg-teal-50 p-3 rounded-full text-teal-600">
<i className="w-6 h-6" data-lucide="users" strokeWidth="1.5"></i>
</div>
<div>
<p className="text-2xl font-semibold text-slate-900 tracking-tight">1,000+</p>
<p className="text-sm text-slate-500 font-medium">Patients treated successfully</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-100 py-8 bg-white">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-sm font-medium text-slate-400 uppercase tracking-widest mb-6">Trusted by patients across Cork and beyond</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
<img alt="Chiropractic Association of Ireland" className="h-8 md:h-10 w-auto object-contain" src="https://i.postimg.cc/d1VXmwpp/CAI.png"/>
<img alt="American Chiropractic Association" className="h-8 md:h-10 w-auto object-contain" src="https://i.postimg.cc/wBvZD9C1/ACA.png"/>
<img alt="American Academy of Pain Management" className="h-8 md:h-10 w-auto object-contain" src="https://i.postimg.cc/k4SjyGwT/AAPM.jpg"/>
</div>
<p className="mt-6 text-xs text-slate-400 max-w-2xl mx-auto">
                Also associated with the U.S. Pain Foundation, American Pain Society and the California Chiropractic Association.
            </p>
</div>
</section>

<section className="py-24 bg-white scroll-mt-20" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-3xl mx-auto text-center mb-16 fade-enter scroll-trigger">
<h2 className="text-3xl md:text-4xl font-medium text-slate-900 mb-6 tracking-tight">Why Choose Haven Pain Relief Centre</h2>
<p className="text-lg text-slate-600 leading-relaxed">
                    Haven Pain Relief Centre is Ireland’s leading multidisciplinary pain clinic dedicated to one goal: getting you out of pain and back to living your life. We combine cutting-edge, non-surgical treatments with compassionate care to deliver fast, lasting relief.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group bg-slate-50 p-8 rounded-2xl hover:bg-white hover:shadow-hover transition-all duration-300 transform hover:-translate-y-1 fade-enter scroll-trigger">
<div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-teal-700 mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="stethoscope" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Comprehensive Care</h3>
<p className="text-slate-600 leading-relaxed text-sm">
                        Multidisciplinary approach tailored to find and fix the root cause of your pain.
                    </p>
</div>

<div className="group bg-slate-50 p-8 rounded-2xl hover:bg-white hover:shadow-hover transition-all duration-300 transform hover:-translate-y-1 fade-enter scroll-trigger delay-100">
<div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-teal-700 mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="zap" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Advanced Treatments</h3>
<p className="text-slate-600 leading-relaxed text-sm">
                        State-of-the-art, drug-free therapies that provide effective relief without surgery.
                    </p>
</div>

<div className="group bg-slate-50 p-8 rounded-2xl hover:bg-white hover:shadow-hover transition-all duration-300 transform hover:-translate-y-1 fade-enter scroll-trigger delay-200">
<div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-teal-700 mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="thumbs-up" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Proven Results</h3>
<p className="text-slate-600 leading-relaxed text-sm">
                        Thousands of patients helped; trusted by people who had lost hope elsewhere.
                    </p>
</div>

<div className="group bg-slate-50 p-8 rounded-2xl hover:bg-white hover:shadow-hover transition-all duration-300 transform hover:-translate-y-1 fade-enter scroll-trigger delay-300">
<div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-teal-700 mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="heart" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Patient-Centered</h3>
<p className="text-slate-600 leading-relaxed text-sm">
                        A caring team that listens and builds a personalised treatment plan around you.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 scroll-mt-20" id="conditions">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12 fade-enter scroll-trigger">
<h2 className="text-3xl md:text-4xl font-medium text-slate-900 mb-4 tracking-tight">Conditions We Treat</h2>
<p className="text-lg text-slate-600 max-w-2xl">
                    From chronic back pain and headaches to sports injuries, we treat a wide range of conditions.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300 transform hover:-translate-y-1 fade-enter scroll-trigger">
<div className="h-64 overflow-hidden">
<img alt="Back Pain" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://i.postimg.cc/3w1pQTNF/holding-back-lower-back-pain-relief-in-washington-dc.jpg"/>
</div>
<div className="p-8">
<h3 className="text-xl font-semibold text-slate-900 mb-2">Back &amp; Neck Pain</h3>
<p className="text-slate-600 mb-6 text-sm">Herniated discs, sciatica, neck pain and more.</p>
<a className="inline-flex items-center text-teal-700 font-medium hover:text-teal-900 group" href="#contact">
                            View all conditions 
                            <i className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
</div>

<div className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300 transform hover:-translate-y-1 fade-enter scroll-trigger delay-100">
<div className="h-64 overflow-hidden">
<img alt="Sports Injuries" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://i.postimg.cc/250qX79H/i-Stock-1478745519-1-1024x682-jpg.webp"/>
</div>
<div className="p-8">
<h3 className="text-xl font-semibold text-slate-900 mb-2">Sports Injuries</h3>
<p className="text-slate-600 mb-6 text-sm">Sprains, strains, overuse injuries and sports rehab.</p>
<a className="inline-flex items-center text-teal-700 font-medium hover:text-teal-900 group" href="#treatments">
                            Learn about sports injury care
                            <i className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
</div>

<div className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300 transform hover:-translate-y-1 fade-enter scroll-trigger delay-200">
<div className="h-64 overflow-hidden">
<img alt="Headaches" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://i.postimg.cc/KzVNkMTN/istockphoto-1126649089-612x612.jpg"/>
</div>
<div className="p-8">
<h3 className="text-xl font-semibold text-slate-900 mb-2">Headaches &amp; Nerve Pain</h3>
<p className="text-slate-600 mb-6 text-sm">Migraines, pinched nerves, neuropathy and more.</p>
<a className="inline-flex items-center text-teal-700 font-medium hover:text-teal-900 group" href="#contact">
                            Talk to our team
                            <i className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-medium text-slate-900 mb-16 text-center tracking-tight fade-enter scroll-trigger">How Your Care Works</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-6 left-0 w-full h-0.5 bg-slate-100 -z-10"></div>

<div className="relative fade-enter scroll-trigger">
<div className="bg-white w-12 h-12 rounded-full border-2 border-teal-600 text-teal-700 flex items-center justify-center font-bold text-lg mb-6 shadow-sm mx-auto md:mx-0">1</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 text-center md:text-left">Consultation &amp; Assessment</h3>
<p className="text-slate-600 text-sm leading-relaxed text-center md:text-left">
                        We listen to your story, examine your spine and joints, and perform any necessary tests to find the true source of your pain.
                    </p>
</div>

<div className="relative fade-enter scroll-trigger delay-100">
<div className="bg-white w-12 h-12 rounded-full border-2 border-teal-600 text-teal-700 flex items-center justify-center font-bold text-lg mb-6 shadow-sm mx-auto md:mx-0">2</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 text-center md:text-left">Personalised Treatment Plan</h3>
<p className="text-slate-600 text-sm leading-relaxed text-center md:text-left">
                        You’ll receive a clear, step-by-step plan using the right mix of therapies for your condition – from spinal decompression and laser to orthotics and hands-on care.
                    </p>
</div>

<div className="relative fade-enter scroll-trigger delay-200">
<div className="bg-white w-12 h-12 rounded-full border-2 border-teal-600 text-teal-700 flex items-center justify-center font-bold text-lg mb-6 shadow-sm mx-auto md:mx-0">3</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 text-center md:text-left">Ongoing Support &amp; Wellness</h3>
<p className="text-slate-600 text-sm leading-relaxed text-center md:text-left">
                        We monitor your progress, adjust as needed, and help you stay pain-free long term with wellness care and prevention.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-haven-50 scroll-mt-20" id="treatments">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-3xl mb-16 fade-enter scroll-trigger">
<h2 className="text-3xl md:text-4xl font-medium text-slate-900 mb-4 tracking-tight">Advanced, Non-Surgical Treatments</h2>
<p className="text-lg text-slate-600">
                    We combine multiple evidence-based therapies to treat pain at its source and help you heal faster.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-hover transition-all duration-300 border border-slate-100 flex flex-col fade-enter scroll-trigger">
<h3 className="text-lg font-semibold text-slate-900 mb-3">Laser Enhanced Spinal Decompression</h3>
<p className="text-sm text-slate-600 mb-6 flex-grow">
                        Gentle spinal decompression combined with advanced laser therapy to relieve disc, nerve and chronic back or neck pain.
                    </p>
<a className="text-teal-700 text-sm font-medium hover:text-teal-900 flex items-center group" href="#contact">
                        Learn more
                        <i className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-hover transition-all duration-300 border border-slate-100 flex flex-col fade-enter scroll-trigger delay-100">
<h3 className="text-lg font-semibold text-slate-900 mb-3">Prescription Orthotics</h3>
<p className="text-sm text-slate-600 mb-6 flex-grow">
                        Custom-made insoles that correct foot alignment, reduce strain and support knees, hips and lower back.
                    </p>
<a className="text-teal-700 text-sm font-medium hover:text-teal-900 flex items-center group" href="#contact">
                        Book gait analysis
                        <i className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-hover transition-all duration-300 border border-slate-100 flex flex-col fade-enter scroll-trigger delay-200">
<h3 className="text-lg font-semibold text-slate-900 mb-3">Orthopedic &amp; Trigger Point Massage</h3>
<p className="text-sm text-slate-600 mb-6 flex-grow">
                        Targeted deep-tissue techniques to release muscle knots, ease stiffness and speed recovery from injuries.
                    </p>
<a className="text-teal-700 text-sm font-medium hover:text-teal-900 flex items-center group" href="#contact">
                        Enquire about massage
                        <i className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-hover transition-all duration-300 border border-slate-100 flex flex-col fade-enter scroll-trigger delay-300">
<h3 className="text-lg font-semibold text-slate-900 mb-3">Far Infrared Therapy</h3>
<p className="text-sm text-slate-600 mb-6 flex-grow">
                        Deep, soothing heat therapy to reduce pain and inflammation and promote faster healing.
                    </p>
<a className="text-teal-700 text-sm font-medium hover:text-teal-900 flex items-center group" href="#contact">
                        Ask about infrared
                        <i className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white scroll-mt-20" id="meet-the-doctor">
<div className="max-w-7xl mx-auto px-6">
<div className="bg-white rounded-3xl overflow-hidden">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

<div className="relative order-2 md:order-1 fade-enter scroll-trigger">
<div className="aspect-[4/5] md:aspect-square rounded-2xl overflow-hidden shadow-xl">
<img alt="Dr. Michael Clifford" className="w-full h-full object-cover object-top" src="https://i.postimg.cc/yx3NZJZs/dr-clifford-1.png"/>
</div>
</div>

<div className="order-1 md:order-2 fade-enter scroll-trigger delay-100">
<h2 className="text-3xl md:text-4xl font-medium text-slate-900 mb-2 tracking-tight">Meet Dr. Michael Clifford</h2>
<h3 className="text-teal-700 font-medium text-lg mb-6">American Board-Certified Chiropractic Physician</h3>
<p className="text-slate-600 mb-6 leading-relaxed">
                            Dr. Michael Clifford is the founder and Clinic Director of Haven Pain Relief Centre. Educated in the USA, he is a U.S. Board-Certified Doctor of Chiropractic and Integrative Pain Management Specialist with over 30 years of experience, helping thousands of patients in California and Ireland find lasting relief from pain.
                        </p>
<blockquote className="border-l-4 border-teal-200 pl-4 mb-8 italic text-slate-500 text-lg">
                            “I love seeing patients leave feeling better than when they came in. It inspires me every day.” <br/>
<span className="text-sm font-medium not-italic mt-2 block text-slate-400">– Dr. Clifford</span>
</blockquote>
<a className="inline-block px-6 py-3 border border-slate-300 text-slate-700 font-medium rounded-full hover:bg-slate-50 hover:border-slate-400 transition-colors" href="#contact">
                            Learn more about Dr. Clifford
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100 scroll-mt-20" id="testimonials">
<div className="max-w-7xl mx-auto px-6">

<div className="text-center mb-16 fade-enter scroll-trigger">
<h2 className="text-3xl md:text-4xl font-medium text-slate-900 mb-3 tracking-tight">Patient Stories</h2>
<p className="text-lg text-slate-500">Real results from people just like you.</p>
</div>

<div className="relative group fade-enter scroll-trigger delay-100">

<button className="absolute -left-5 top-1/2 -translate-y-1/2 z-20 bg-white border border-slate-200 text-slate-600 rounded-full p-4 shadow-lg hover:bg-slate-50 hover:text-teal-700 hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed hidden md:flex items-center justify-center" id="prev-slide">
<i className="w-6 h-6" data-lucide="chevron-left" strokeWidth="1.5"></i>
</button>

<button className="absolute -right-5 top-1/2 -translate-y-1/2 z-20 bg-white border border-slate-200 text-slate-600 rounded-full p-4 shadow-lg hover:bg-slate-50 hover:text-teal-700 hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed hidden md:flex items-center justify-center" id="next-slide">
<i className="w-6 h-6" data-lucide="chevron-right" strokeWidth="1.5"></i>
</button>

<div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-12 pt-4 px-4 -mx-4 md:px-0 md:mx-0" id="testimonials-track">

<div className="min-w-[85vw] md:min-w-[400px] flex-none bg-white rounded-2xl p-10 border border-slate-200/60 shadow-[0_2px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-lg transition-shadow duration-300 snap-center flex flex-col h-auto">
<div className="flex gap-1 text-teal-500 mb-6">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<p className="text-slate-600 leading-relaxed text-lg mb-8 flex-grow">
                            "Dr Clifford worked wonders on my lower back. I’d had pain for years and nothing else worked. After an intensive course of care I’m pain-free for the first time in years. Highly recommend."
                        </p>
<div className="flex items-center gap-4 mt-auto">
<div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 font-semibold text-lg">AT</div>
<div>
<p className="font-bold text-slate-900">Alan Teahan</p>
<p className="text-sm text-slate-400 font-medium">Douglas, Cork</p>
</div>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[400px] flex-none bg-white rounded-2xl p-10 border border-slate-200/60 shadow-[0_2px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-lg transition-shadow duration-300 snap-center flex flex-col h-auto">
<div className="flex gap-1 text-teal-500 mb-6">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<p className="text-slate-600 leading-relaxed text-lg mb-8 flex-grow">
                            "I came to Haven with a bulging disc and severe sciatic pain. I was seen straight away and felt relief after my first visit. Dr Clifford and Deirdre on reception have gone above and beyond."
                        </p>
<div className="flex items-center gap-4 mt-auto">
<div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 font-semibold text-lg">RH</div>
<div>
<p className="font-bold text-slate-900">Rach H.</p>
<p className="text-sm text-slate-400 font-medium">Ballincollig, Cork</p>
</div>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[400px] flex-none bg-white rounded-2xl p-10 border border-slate-200/60 shadow-[0_2px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-lg transition-shadow duration-300 snap-center flex flex-col h-auto">
<div className="flex gap-1 text-teal-500 mb-6">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<p className="text-slate-600 leading-relaxed text-lg mb-8 flex-grow">
                            "The decompression, laser, adjustments and exercise plan have literally changed my life – I never thought I could walk and sleep this well again. He’s a godsend for anyone in pain."
                        </p>
<div className="flex items-center gap-4 mt-auto">
<div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 font-semibold text-lg">MA</div>
<div>
<p className="font-bold text-slate-900">Marie A.</p>
<p className="text-sm text-slate-400 font-medium">Cork City</p>
</div>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[400px] flex-none bg-white rounded-2xl p-10 border border-slate-200/60 shadow-[0_2px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-lg transition-shadow duration-300 snap-center flex flex-col h-auto">
<div className="flex gap-1 text-teal-500 mb-6">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<p className="text-slate-600 leading-relaxed text-lg mb-8 flex-grow">
                            "I’d been dealing with extremely painful sciatica for over half a year and nothing helped. After just a few sessions here I already feel significantly better. I finally feel confident I’ll make a full recovery."
                        </p>
<div className="flex items-center gap-4 mt-auto">
<div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 font-semibold text-lg">DA</div>
<div>
<p className="font-bold text-slate-900">Daniel A.</p>
<p className="text-sm text-slate-400 font-medium">Carrigaline, Cork</p>
</div>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[400px] flex-none bg-white rounded-2xl p-10 border border-slate-200/60 shadow-[0_2px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-lg transition-shadow duration-300 snap-center flex flex-col h-auto">
<div className="flex gap-1 text-teal-500 mb-6">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<p className="text-slate-600 leading-relaxed text-lg mb-8 flex-grow">
                            "After 6 months of sore lower back I started going to Dr Clifford and was pain-free in four weeks. A year later I’m still in perfect condition. The clinic is spotless and the team are so helpful."
                        </p>
<div className="flex items-center gap-4 mt-auto">
<div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 font-semibold text-lg">GR</div>
<div>
<p className="font-bold text-slate-900">Gapsa Radu</p>
<p className="text-sm text-slate-400 font-medium">Glanmire, Cork</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 scroll-mt-20" id="contact">
<div className="max-w-7xl mx-auto px-6">

<div className="flex flex-col lg:flex-row bg-white rounded-3xl shadow-card overflow-hidden fade-enter scroll-trigger">

<div className="lg:w-5/12 bg-haven-darkGreen p-10 lg:p-14 text-white flex flex-col justify-between relative">

<div className="mb-12">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-8 leading-tight">Start your journey to recovery today.</h2>
<p className="text-lg text-teal-100/90 leading-relaxed mb-12 font-normal">
                            Book your initial consultation online or give us a call. We look forward to welcoming you to Haven.
                        </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="mt-1 flex-shrink-0">
<i className="w-6 h-6 text-haven-softTeal" data-lucide="map-pin" strokeWidth="1.5"></i>
</div>
<span className="text-lg font-normal">West Douglas Street, Douglas, Cork</span>
</div>
<a className="flex items-center gap-4 hover:text-white transition-colors group" href="tel:+353211234567">
<div className="flex-shrink-0">
<i className="w-6 h-6 text-haven-softTeal group-hover:scale-110 transition-transform" data-lucide="phone" strokeWidth="1.5"></i>
</div>
<span className="text-lg font-normal">+353 21 123 4567</span>
</a>
<a className="flex items-center gap-4 hover:text-white transition-colors group" href="mailto:hello@havenpainrelief.ie">
<div className="flex-shrink-0">
<i className="w-6 h-6 text-haven-softTeal group-hover:scale-110 transition-transform" data-lucide="mail" strokeWidth="1.5"></i>
</div>
<span className="text-lg font-normal">hello@havenpainrelief.ie</span>
</a>
</div>
</div>

<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all text-white" href="#">
<i className="w-5 h-5" data-lucide="facebook" strokeWidth="1.5"></i>
</a>
<a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all text-white" href="#">
<i className="w-5 h-5" data-lucide="instagram" strokeWidth="1.5"></i>
</a>
<a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all text-white" href="#">
<i className="w-5 h-5" data-lucide="twitter" strokeWidth="1.5"></i>
</a>
</div>
</div>

<div className="lg:w-7/12 bg-white p-10 lg:p-14">
<form className="space-y-6" onsubmit="event.preventDefault(); alert('Thank you. We will contact you shortly.');">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div>
<label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-haven-softTeal/50 focus:border-haven-softTeal transition-all hover:bg-slate-100" required="" type="text"/>
</div>

<div>
<label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-haven-softTeal/50 focus:border-haven-softTeal transition-all hover:bg-slate-100" required="" type="text"/>
</div>
</div>

<div>
<label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-haven-softTeal/50 focus:border-haven-softTeal transition-all hover:bg-slate-100" required="" type="email"/>
</div>

<div>
<label className="block text-sm font-medium text-slate-700 mb-2">Primary Concern</label>
<div className="relative">
<select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-haven-softTeal/50 focus:border-haven-softTeal transition-all hover:bg-slate-100 cursor-pointer pr-10">
<option>Lower Back Pain</option>
<option>Neck Pain</option>
<option>Sciatica</option>
<option>Sports Injury</option>
<option>Headaches</option>
<option>Other</option>
</select>
</div>
</div>

<div className="pt-4">
<button className="w-full bg-haven-softTeal hover:bg-[#3a7c70] text-white font-medium py-4 rounded-full shadow-lg shadow-teal-900/10 transition-all transform hover:scale-[1.01] active:scale-[0.99] text-lg" type="submit">
                                Request Appointment
                            </button>
</div>
</form>
</div>
</div>

<div className="mt-20 flex flex-col md:flex-row justify-between items-center text-sm fade-enter scroll-trigger delay-100">

<div className="flex items-center gap-3 mb-4 md:mb-0">
<div className="w-8 h-8 rounded-full bg-haven-softTeal flex items-center justify-center text-white shadow-sm">
<i className="w-5 h-5" data-lucide="plus" strokeWidth="3"></i>
</div>
<span className="text-slate-900 font-semibold text-lg tracking-tight">Haven</span>
</div>

<p className="text-slate-400 font-normal">© 2024 Haven Pain Relief Centre. All rights reserved.</p>
</div>
</div>
</section>



    </>
  );
}
