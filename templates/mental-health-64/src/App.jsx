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
      

<nav className="fixed top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
<div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
<a className="flex items-center gap-2" href="#">
<img alt="Altitude Behavioral Care Logo" className="h-10 w-auto" src="https://altitudecare.net/wp-content/uploads/2026/01/Logo-PNG-scaled-1-1536x1195.webp"/>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-500 hover:text-teal-600 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-500 hover:text-teal-600 transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-slate-500 hover:text-teal-600 transition-colors" href="#contact">Contact</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-teal-600" href="tel:2403482444">
<iconify-icon icon="solar:phone-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span>(240) 348-2444</span>
</a>
<a className="rounded-full bg-slate-900 px-4 py-2 text-xs font-medium text-white transition hover:bg-slate-800 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2" href="#contact">
                    Book Appointment
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">

<div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-teal-50 blur-3xl opacity-60 translate-x-1/2 -translate-y-1/4"></div>
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 rounded-full border border-teal-100 bg-teal-50/50 px-3 py-1 text-xs font-medium text-teal-700 mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
</span>
                    Accepting New Patients in Maryland
                </div>
<h1 className="text-4xl font-medium tracking-tight text-slate-900 sm:text-6xl mb-6">
                    Compassionate mental health care for <span className="text-teal-600">every journey.</span>
</h1>
<p className="text-lg leading-relaxed text-slate-500 mb-10 max-w-2xl">
                    Dedicated to delivering top-notch, multimodal psychiatric and behavioral care. We support individuals of all ages with personalized treatment plans tailored to your unique needs.
                </p>
<div className="flex flex-wrap gap-4">
<a className="flex items-center gap-2 rounded-md bg-teal-600 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-teal-700 transition-all" href="#contact">
                        Request Consultation
                        <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>

<a className="flex items-center gap-2 rounded-md border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 hover:text-teal-600 transition-all" href="https://altitudecare.net/" target="_blank">
<iconify-icon icon="solar:global-linear" strokeWidth="1.5" width="18"></iconify-icon>
                        Visit Website
                    </a>
<a className="flex items-center gap-2 rounded-md border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 transition-all" href="#services">
                        View Services
                    </a>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-y border-slate-100" id="services">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mb-16 max-w-2xl">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 sm:text-4xl mb-4">Comprehensive Care</h2>
<p className="text-slate-500">
                    Our team employs multimodal approaches to treat a wide spectrum of mental and behavioral health concerns.
                </p>
</div>
<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

<div className="group relative rounded-xl border border-slate-200 bg-white p-6 transition-all hover:border-teal-200 hover:shadow-md">
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50 text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:pill-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2 tracking-tight">Medication Management</h3>
<p className="text-sm text-slate-500 leading-relaxed">Expert psychiatric evaluation and ongoing monitoring of medications to ensure safety and effectiveness.</p>
</div>

<div className="group relative rounded-xl border border-slate-200 bg-white p-6 transition-all hover:border-teal-200 hover:shadow-md">
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50 text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:chat-round-line-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2 tracking-tight">Psychotherapy</h3>
<p className="text-sm text-slate-500 leading-relaxed">Evidence-based therapeutic interventions to help navigate life's challenges and emotional difficulties.</p>
</div>

<div className="group relative rounded-xl border border-slate-200 bg-white p-6 transition-all hover:border-teal-200 hover:shadow-md">
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50 text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:bolt-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2 tracking-tight">ADHD Treatment</h3>
<p className="text-sm text-slate-500 leading-relaxed">Specialized care for Attention-Deficit Hyperactivity Disorder in children and adults.</p>
</div>

<div className="group relative rounded-xl border border-slate-200 bg-white p-6 transition-all hover:border-teal-200 hover:shadow-md">
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50 text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:cloud-sun-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2 tracking-tight">Depression &amp; Anxiety</h3>
<p className="text-sm text-slate-500 leading-relaxed">Compassionate support for mood disorders, generalized anxiety, and panic disorders.</p>
</div>

<div className="group relative rounded-xl border border-slate-200 bg-white p-6 transition-all hover:border-teal-200 hover:shadow-md">
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50 text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2 tracking-tight">Addiction Recovery</h3>
<p className="text-sm text-slate-500 leading-relaxed">Suboxone treatment and therapy for substance abuse, alcoholism, and other addictions.</p>
</div>

<div className="group relative rounded-xl border border-slate-200 bg-white p-6 transition-all hover:border-teal-200 hover:shadow-md">
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50 text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:users-group-two-rounded-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2 tracking-tight">Complex Disorders</h3>
<p className="text-sm text-slate-500 leading-relaxed">Treatment for Bipolar Disorder, Schizophrenia, PTSD, ODD, and Eating Disorders.</p>
</div>
</div>
</div>
</section>

<section className="py-20" id="about">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="overflow-hidden rounded-2xl bg-slate-900 text-white">
<div className="grid grid-cols-1 lg:grid-cols-2">
<div className="p-10 lg:p-16 flex flex-col justify-center">
<h2 className="text-3xl font-medium tracking-tight mb-6">A Safe Space for All</h2>
<div className="space-y-6 text-slate-300">
<p className="leading-relaxed">
                                Altitude Behavioral Care creates a welcoming environment for everyone. We gladly welcome new patients of all cultural backgrounds, genders, sexual orientations, and religious affiliations.
                            </p>
<p className="leading-relaxed">
                                Whether you are an adolescent, young adult, elder, or child, our flexible treatment plans are designed to meet your specific life stage and circumstances.
                            </p>
<ul className="space-y-3 mt-4">
<li className="flex items-center gap-3 text-sm">
<iconify-icon className="text-teal-400" icon="solar:check-circle-linear" width="20"></iconify-icon>
                                    Adolescents &amp; Children
                                </li>
<li className="flex items-center gap-3 text-sm">
<iconify-icon className="text-teal-400" icon="solar:check-circle-linear" width="20"></iconify-icon>
                                    Adults &amp; Elders
                                </li>
<li className="flex items-center gap-3 text-sm">
<iconify-icon className="text-teal-400" icon="solar:check-circle-linear" width="20"></iconify-icon>
                                    LGBTQ+ Friendly
                                </li>
<li className="flex items-center gap-3 text-sm">
<iconify-icon className="text-teal-400" icon="solar:check-circle-linear" width="20"></iconify-icon>
                                    Most Major Insurances Accepted
                                </li>
</ul>
</div>
</div>
<div className="relative h-64 lg:h-auto bg-slate-800">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&amp;fit=crop&amp;q=80')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
<div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-transparent"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-t border-slate-100" id="contact">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

<div>
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-8">Visit Us</h2>
<div className="space-y-8">
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 border border-slate-200 text-slate-600">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900">Address</h3>
<p className="text-sm text-slate-500 mt-1">
                                    7700 Old Branch Ave, Suite C104<br/>
                                    Clinton, MD 20735
                                </p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 border border-slate-200 text-slate-600">
<iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900">Hours</h3>
<p className="text-sm text-slate-500 mt-1">
                                    Monday - Saturday<br/>
                                    9:00 AM - 5:00 PM
                                </p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 border border-slate-200 text-slate-600">
<iconify-icon icon="solar:phone-calling-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900">Contact</h3>
<p className="text-sm text-slate-500 mt-1 hover:text-teal-600 transition-colors">
<a href="tel:2403482444">Ph: 240-348-2444</a>
</p>
<p className="text-sm text-slate-500 hover:text-teal-600 transition-colors">
<a href="mailto:info@altitudecare.net">Email: info@altitudecare.net</a>
</p>
</div>
</div>
</div>
<div className="mt-12 p-6 rounded-lg bg-slate-50 border border-slate-100">
<h4 className="text-sm font-semibold text-slate-900 mb-2">Emergency Disclaimer</h4>
<p className="text-xs text-slate-500 leading-relaxed">
                            If you are experiencing a medical emergency or suicidal ideations, please call 911 or visit the nearest emergency room immediately.
                        </p>
</div>
</div>

<div className="h-full min-h-[400px] w-full rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
<iframe allowfullscreen="" className="w-full h-full" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6220.20314382142!2d-76.8970034!3d38.7843058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7bd6441e14751%3A0xa96c7a954fe2a18f!2sAltitude%20Behavioral%20Care%20and%20Integrative%20Health!5e0!3m2!1sen!2sus!4v1770627062821!5m2!1sen!2sus" style={{border: '0'}}>
</iframe>
</div>
</div>
</div>
</section>

<footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-1 md:col-span-2">
<img alt="Logo" className="h-8 w-auto mb-6 opacity-80 grayscale hover:grayscale-0 transition-all" src="https://altitudecare.net/wp-content/uploads/2026/01/Logo-PNG-scaled-1-1536x1195.webp"/>
<p className="text-sm text-slate-500 max-w-sm leading-relaxed">
                        Providing comprehensive, compassionate, and effective mental health care services to support the well-being of the Maryland community.
                    </p>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900 mb-4">Quick Links</h3>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Home</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#about">About Us</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#services">Services</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#contact">Contact</a></li>
</ul>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900 mb-4">Connect</h3>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-[#1877F2] transition-colors" href="https://www.facebook.com/profile.php?id=61560237734861" target="_blank">
<iconify-icon icon="bi:facebook" width="20"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-[#E4405F] transition-colors" href="https://www.instagram.com/altitudebehavioralcare/" target="_blank">
<iconify-icon icon="bi:instagram" width="20"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-[#0A66C2] transition-colors" href="https://www.linkedin.com/company/altitude-behavioral-care-and-integrative-health/" target="_blank">
<iconify-icon icon="bi:linkedin" width="20"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-black transition-colors" href="https://x.com/altitudecare1" target="_blank">
<iconify-icon icon="bi:twitter-x" width="20"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-[#BD081C] transition-colors" href="https://www.pinterest.com/altitudebehavioralcare1/" target="_blank">
<iconify-icon icon="bi:pinterest" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">
                    © 2024 Altitude Behavioral Care. All rights reserved.
                </p>
<div className="flex gap-6">
<a className="text-xs text-slate-400 hover:text-slate-600" href="#">Privacy Policy</a>
<a className="text-xs text-slate-400 hover:text-slate-600" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
