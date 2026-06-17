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
      

<header className="fixed top-0 left-0 right-0 z-50 bg-zinc-50/80 backdrop-blur-md border-b border-zinc-200/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-xl font-semibold tracking-tighter text-zinc-900 flex items-center gap-2" href="#">
<div className="w-8 h-8 bg-zinc-900 text-white flex items-center justify-center rounded-md text-sm font-medium">
                    DSK
                </div>
<span>Dr. Shikha Khare</span>
</a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#testimonials">Patient Stories</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#contact">Contact</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center h-9 px-4 rounded-md bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-800 transition-colors" href="#contact">
                    Book Consultation
                </a>
<button className="md:hidden text-zinc-500 flex items-center">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</header>
<main className="pt-24 pb-16">

<section className="max-w-7xl mx-auto px-6 py-12 md:py-20 lg:py-24">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 mb-6 text-xs font-medium text-zinc-600">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                        Accepting new patients
                    </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-zinc-900 leading-tight mb-6">
                        Compassionate care <br className="hidden lg:block"/> for your well-being.
                    </h1>
<p className="text-lg text-zinc-500 mb-8 font-normal leading-relaxed max-w-lg">
                        Dedicated to providing evidence-based medicine with a personal touch. Dr. Khare focuses on comprehensive healthcare tailored to your unique needs.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center h-11 px-6 rounded-md bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-800 transition-colors gap-2" href="#contact">
                            Schedule an Appointment
                            <iconify-icon height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center h-11 px-6 rounded-md bg-white border border-zinc-200 text-zinc-900 text-sm font-medium hover:bg-zinc-50 transition-colors" href="#about">
                            Meet Dr. Khare
                        </a>
</div>
<div className="mt-12 flex items-center gap-6 pt-8 border-t border-zinc-200/60">
<div className="flex flex-col">
<span className="text-2xl font-semibold tracking-tight text-zinc-900">15+</span>
<span className="text-sm text-zinc-500 font-medium">Years Experience</span>
</div>
<div className="w-px h-10 bg-zinc-200"></div>
<div className="flex flex-col">
<span className="text-2xl font-semibold tracking-tight text-zinc-900">5k+</span>
<span className="text-sm text-zinc-500 font-medium">Patients Treated</span>
</div>
</div>
</div>
<div className="relative w-full aspect-[4/5] lg:aspect-square rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-200">
<img alt="Medical Clinic" className="object-cover w-full h-full grayscale-[20%] opacity-90" src="https://lh3.googleusercontent.com/p/AF1QipNgt8tg013tBG77Y0_Yf2avehD1aYCNCaAly7wM=s680-w680-h510"/>
<div className="absolute inset-0 bg-gradient-to-tr from-zinc-900/10 to-transparent"></div>
</div>
</div>
</section>

<section className="py-20 bg-white border-y border-zinc-100" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-4">Comprehensive Healthcare</h2>
<p className="text-base text-zinc-500 font-normal">Providing a wide range of medical services to ensure you and your family maintain optimal health at every stage of life.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl bg-zinc-50 border border-zinc-200 hover:border-zinc-300 transition-colors">
<div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center mb-6 text-zinc-900 shadow-sm">
<iconify-icon height="24" icon="solar:stethoscope-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-zinc-900 mb-2">General Checkups</h3>
<p className="text-sm text-zinc-500 font-normal leading-relaxed mb-6">Routine examinations and preventive care to identify health issues before they become major concerns.</p>
<a className="inline-flex items-center text-sm font-medium text-zinc-900 group-hover:text-zinc-600 transition-colors gap-1" href="#">
                            Learn more <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>

<div className="group p-8 rounded-2xl bg-zinc-50 border border-zinc-200 hover:border-zinc-300 transition-colors">
<div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center mb-6 text-zinc-900 shadow-sm">
<iconify-icon height="24" icon="solar:heart-pulse-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-zinc-900 mb-2">Chronic Disease Management</h3>
<p className="text-sm text-zinc-500 font-normal leading-relaxed mb-6">Expert care and ongoing monitoring for conditions like diabetes, hypertension, and asthma.</p>
<a className="inline-flex items-center text-sm font-medium text-zinc-900 group-hover:text-zinc-600 transition-colors gap-1" href="#">
                            Learn more <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>

<div className="group p-8 rounded-2xl bg-zinc-50 border border-zinc-200 hover:border-zinc-300 transition-colors">
<div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center mb-6 text-zinc-900 shadow-sm">
<iconify-icon height="24" icon="solar:shield-check-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-zinc-900 mb-2">Preventive Care</h3>
<p className="text-sm text-zinc-500 font-normal leading-relaxed mb-6">Vaccinations, screenings, and lifestyle counseling to protect your health and boost immunity.</p>
<a className="inline-flex items-center text-sm font-medium text-zinc-900 group-hover:text-zinc-600 transition-colors gap-1" href="#">
                            Learn more <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 flex flex-col gap-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">Expertise built on empathy and experience.</h2>
<div className="prose prose-zinc prose-sm text-zinc-500 font-normal leading-relaxed">
<p>Dr. Shikha Khare is a dedicated physician with over 15 years of experience in providing comprehensive internal medicine. She earned her medical degree from top-tier institutions and completed her residency with honors.</p>
<p>Her approach to medicine goes beyond treating symptoms; she believes in understanding the patient as a whole. By building strong, trusting relationships, Dr. Khare ensures that every patient feels heard, respected, and involved in their healthcare decisions.</p>
</div>
<div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="flex items-start gap-3">
<iconify-icon className="text-zinc-900 mt-0.5" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-sm font-medium text-zinc-700">Board Certified Physician</span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-zinc-900 mt-0.5" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-sm font-medium text-zinc-700">Member of Medical Assoc.</span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-zinc-900 mt-0.5" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-sm font-medium text-zinc-700">Awarded for Patient Care</span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-zinc-900 mt-0.5" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-sm font-medium text-zinc-700">Continuous Education</span>
</div>
</div>
</div>
<div className="order-1 lg:order-2 relative">
<div className="absolute inset-0 bg-zinc-200 rounded-2xl transform translate-x-4 translate-y-4"></div>
<div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-200 z-10">
<img alt="Dr. Khare Consultation" className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&amp;w=2080&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-zinc-900 text-white rounded-[2.5rem] mx-4 md:mx-6 my-10" id="testimonials">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-4">Patient Stories</h2>
<p className="text-base text-zinc-400 font-normal">Hear from those who have entrusted their health to our clinic.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="p-8 rounded-2xl bg-zinc-800/50 border border-zinc-700">
<div className="flex gap-1 mb-6 text-zinc-300">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-base font-normal text-zinc-300 leading-relaxed mb-6">"Dr. Khare is incredibly thorough and takes the time to listen. I never feel rushed during my appointments. She caught a minor issue before it became a major problem. Truly grateful for her care."</p>
<div className="text-sm font-medium text-white">— Sarah M.</div>
</div>
<div className="p-8 rounded-2xl bg-zinc-800/50 border border-zinc-700">
<div className="flex gap-1 mb-6 text-zinc-300">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-base font-normal text-zinc-300 leading-relaxed mb-6">"Finding a doctor who combines high medical expertise with genuine empathy is rare. The clinic staff is also extremely professional and welcoming. Highly recommend to anyone seeking a primary care physician."</p>
<div className="text-sm font-medium text-white">— James T.</div>
</div>
</div>
</div>
</section>

<section className="py-24" id="contact">
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-6">Ready to prioritize your health?</h2>
<p className="text-lg text-zinc-500 font-normal mb-10">Schedule a consultation today and take the first step towards a healthier tomorrow.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
<button className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-8 rounded-md bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-800 transition-colors gap-2">
<iconify-icon height="18" icon="solar:calendar-linear" width="18"></iconify-icon>
                        Book Appointment
                    </button>
<button className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-8 rounded-md bg-white border border-zinc-200 text-zinc-900 text-sm font-medium hover:bg-zinc-50 transition-colors gap-2">
<iconify-icon height="18" icon="solar:phone-linear" width="18"></iconify-icon>
                        Call Clinic
                    </button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 border-t border-zinc-200 text-left">
<div>
<div className="flex items-center gap-2 text-zinc-900 mb-2 font-medium text-sm">
<iconify-icon icon="solar:map-point-linear" width="18"></iconify-icon> Location
                        </div>
<p className="text-sm text-zinc-500 font-normal">123 Healthway Drive<br/>Suite 400<br/>Medical District, NY 10001</p>
</div>
<div>
<div className="flex items-center gap-2 text-zinc-900 mb-2 font-medium text-sm">
<iconify-icon icon="solar:clock-circle-linear" width="18"></iconify-icon> Hours
                        </div>
<p className="text-sm text-zinc-500 font-normal">Mon - Fri: 8:00 AM - 5:00 PM<br/>Sat: 9:00 AM - 1:00 PM<br/>Sun: Closed</p>
</div>
<div>
<div className="flex items-center gap-2 text-zinc-900 mb-2 font-medium text-sm">
<iconify-icon icon="solar:letter-linear" width="18"></iconify-icon> Contact
                        </div>
<p className="text-sm text-zinc-500 font-normal">+1 (555) 123-4567<br/>contact@drshikhakhare.com</p>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-zinc-200 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-zinc-200 text-zinc-600 flex items-center justify-center rounded text-xs font-medium tracking-tighter">
                    DSK
                </div>
<span className="text-sm font-medium text-zinc-900 tracking-tight">Dr. Shikha Khare</span>
</div>
<div className="flex gap-6">
<a className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Privacy Policy</a>
<a className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Terms of Service</a>
<a className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Patient Portal</a>
</div>
<p className="text-xs text-zinc-400 font-normal">
                © 2024 Dr. Shikha Khare. All rights reserved.
            </p>
</div>
</footer>

    </>
  );
}
