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
      

<div className="bg-[#00B5F1] text-white py-2 px-6">
<div className="max-w-7xl mx-auto flex justify-end items-center gap-6 text-sm font-medium">
<a className="hover:text-white/80 transition-colors" href="#">Testimonials</a>
<a className="hover:text-white/80 transition-colors" href="#">Blog</a>
<a className="hover:text-white/80 transition-colors" href="#">Contact</a>
<a className="bg-white text-[#00B5F1] px-4 py-1.5 rounded-full hover:bg-gray-50 transition-colors" href="#">Patient Portal</a>
</div>
</div>

<header className="bg-white border-b border-gray-100 sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-[#00B5F1] rounded-full flex items-center justify-center text-white">
<i data-lucide="activity" strokeWidth="1.5"></i>
</div>
<div>
<h1 className="text-xl font-semibold tracking-tight text-[#00B5F1] leading-none">CALIFORNIA VEIN INSTITUTE</h1>
<span className="text-xs text-[#58595B] tracking-widest uppercase">A Pedes Vascular Institute</span>
</div>
</div>

<nav className="hidden md:flex gap-8 text-lg font-medium text-[#58595B]">
<a className="hover:text-[#00B5F1] transition-colors" href="#">About Us</a>
<a className="hover:text-[#00B5F1] transition-colors" href="#">Diseases</a>
<a className="hover:text-[#00B5F1] transition-colors" href="#">Treatments</a>
<a className="hover:text-[#00B5F1] transition-colors" href="#">FAQs</a>
</nav>

<div className="hidden md:block">
<a className="bg-[#00B5F1] text-white px-6 py-3 rounded-md font-medium text-lg hover:bg-[#009bd1] transition-colors shadow-sm" href="#">
                    Schedule a Consultation
                </a>
</div>

<button className="md:hidden text-[#58595B]">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</header>

<section className="relative bg-slate-900 overflow-hidden">

<div className="absolute inset-0 bg-slate-800 opacity-60"></div>
<div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-transparent"></div>
<div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32 lg:py-40 flex flex-col justify-center min-h-[600px]">
<div className="max-w-3xl">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-tight mb-6">
                    Specialized Care for Venous Disease in Irvine, CA
                </h1>
<p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl font-light">
                    At California Vein Institute, we focus on diagnosing and treating venous disease and circulation disorders using modern, minimally invasive techniques.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="bg-[#00B5F1] text-white px-8 py-3.5 rounded-md font-medium text-lg hover:bg-[#009bd1] transition-colors text-center shadow-sm" href="#">
                        Schedule a Consultation
                    </a>
<a className="bg-white text-[#333333] px-8 py-3.5 rounded-md font-medium text-lg hover:bg-gray-50 transition-colors text-center shadow-sm" href="#">
                        Learn About Conditions
                    </a>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 px-6">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="space-y-6">
<p className="text-lg text-[#58595B] leading-relaxed">
                    Located in Irvine, California, our outpatient clinic serves patients throughout Orange County, including Newport Beach, Costa Mesa, Tustin, Santa Ana, and surrounding communities. We are committed to providing expert vein care in a supportive environment where patients feel informed, comfortable, and confident about their treatment decisions.
                </p>
<p className="text-lg text-[#58595B] leading-relaxed">
                    Using advanced imaging technology and image-guided procedures, our team can identify the source of venous problems and develop personalized treatment plans designed to improve circulation and relieve symptoms. Many treatments can be performed through minimally invasive procedures, which may allow patients to return to normal activities sooner compared to traditional surgical approaches.
                </p>
</div>

<div className="bg-gray-100 border border-gray-200 rounded-lg aspect-[4/3] flex items-center justify-center p-8 relative overflow-hidden group">
<div className="absolute inset-0 bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="text-center relative z-10 text-gray-400 flex flex-col items-center gap-3">
<i className="w-12 h-12" data-lucide="image" strokeWidth="1.5"></i>
<span className="text-lg font-medium">Clinic / Facility Photo Area</span>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 px-6 bg-[#F8FAFC] relative overflow-hidden">

<div className="absolute inset-0 opacity-5 pointer-events-none" style={{backgroundImage: 'repeating-radial-gradient(circle at 50% 50%, transparent 0, #00B5F1 1px, transparent 2px, transparent 40px)'}}></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#00B5F1] tracking-tight mb-6">
                    Understanding Venous Disease
                </h2>
<p className="text-lg text-[#58595B] leading-relaxed">
                    Venous disease occurs when veins have difficulty returning blood from the body back to the heart. Over time, this can lead to poor circulation, swelling, discomfort, and visible vein changes.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
<div className="w-16 h-16 rounded-full border border-gray-200 flex items-center justify-center mb-6 text-gray-400">
<i className="w-8 h-8" data-lucide="activity-square" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold text-[#333333] tracking-tight mb-4 min-h-[3.5rem] flex items-center justify-center">
                        Chronic Venous Insufficiency (CVI)
                    </h3>
<p className="text-lg text-[#58595B] leading-relaxed">
                        Chronic venous insufficiency occurs when the valves inside the veins become weakened or damaged. This can cause blood to pool in the legs, leading to symptoms such as swelling, heaviness, aching, and skin changes around the ankles.
                    </p>
</div>

<div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
<div className="w-16 h-16 rounded-full border border-gray-200 flex items-center justify-center mb-6 text-gray-400">
<i className="w-8 h-8" data-lucide="droplet" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold text-[#333333] tracking-tight mb-4 min-h-[3.5rem] flex items-center justify-center">
                        Deep Vein Thrombosis (DVT)
                    </h3>
<p className="text-lg text-[#58595B] leading-relaxed">
                        Deep vein thrombosis is a condition where a blood clot forms in a deep vein, most commonly in the leg. Early diagnosis and treatment are important to help reduce the risk of complications and support healthy circulation.
                    </p>
</div>

<div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
<div className="w-16 h-16 rounded-full border border-gray-200 flex items-center justify-center mb-6 text-gray-400">
<i className="w-8 h-8" data-lucide="git-merge" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold text-[#333333] tracking-tight mb-4 min-h-[3.5rem] flex items-center justify-center">
                        Varicose Veins &amp; Venous Reflux
                    </h3>
<p className="text-lg text-[#58595B] leading-relaxed">
                        When vein valves stop functioning properly, blood may flow backward within the veins, causing them to enlarge or become visible beneath the skin. This condition is often referred to as venous reflux and may lead to varicose veins and leg discomfort.
                    </p>
</div>
</div>
<div className="mt-16 text-center max-w-4xl mx-auto">
<p className="text-lg text-[#58595B] leading-relaxed italic">
                    At California Vein Institute, we use advanced vascular imaging to identify the source of venous disease and determine the most appropriate treatment options.
                </p>
</div>
</div>
</section>

<section className="py-20 md:py-32 px-6">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#00B5F1] tracking-tight mb-6">
                    Minimally Invasive Vein Treatments
                </h2>
<p className="text-lg text-[#58595B] leading-relaxed">
                    Modern treatment options allow many vein conditions to be treated using image-guided, minimally invasive procedures that target the underlying cause of circulation problems.
                </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
<div className="space-y-6">
<p className="text-lg text-[#58595B]">Depending on the condition being treated, treatment options may include:</p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-[#00B5F1] shrink-0 mt-1" data-lucide="check" strokeWidth="2"></i>
<span className="text-lg text-[#58595B]">Endovascular procedures designed to improve blood flow</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-[#00B5F1] shrink-0 mt-1" data-lucide="check" strokeWidth="2"></i>
<span className="text-lg text-[#58595B]">Image-guided vein treatments that target problematic veins</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-[#00B5F1] shrink-0 mt-1" data-lucide="check" strokeWidth="2"></i>
<span className="text-lg text-[#58595B]">Circulation-supporting procedures that reduce pressure in affected veins</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-[#00B5F1] shrink-0 mt-1" data-lucide="check" strokeWidth="2"></i>
<span className="text-lg text-[#58595B]">Diagnostic vascular imaging to evaluate vein function and blood flow</span>
</li>
</ul>
<p className="text-lg text-[#58595B] pt-4">
                        These procedures are typically performed in an outpatient setting, allowing many patients to return home the same day.
                    </p>
<p className="text-lg text-[#58595B]">
                        Our team takes time to carefully evaluate each patient's condition and recommend treatment options based on individual symptoms, imaging findings, and overall health.
                    </p>
</div>

<div className="bg-gray-100 border border-gray-200 rounded-lg aspect-[4/3] flex items-center justify-center p-8 relative overflow-hidden group h-full min-h-[400px]">
<div className="text-center relative z-10 text-gray-400 flex flex-col items-center gap-3">
<i className="w-12 h-12" data-lucide="image" strokeWidth="1.5"></i>
<span className="text-lg font-medium">Treatment / Procedure Illustration</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#00B5F1] text-white py-20 md:py-32 px-6">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-8">
                    Why Choose California Vein Institute
                </h2>
<p className="text-lg text-white/90 mb-10 leading-relaxed">
                    Patients throughout Orange County choose California Vein Institute because of our focus on specialized vein care and patient-centered treatment.
                </p>
<div className="space-y-8">
<div>
<h3 className="text-xl font-semibold mb-2">Advanced Imaging and Diagnosis</h3>
<p className="text-lg text-white/80 leading-relaxed">Our physicians use modern diagnostic imaging to accurately evaluate vein function and identify circulation problems.</p>
</div>
<div>
<h3 className="text-xl font-semibold mb-2">Minimally Invasive Treatment Options</h3>
<p className="text-lg text-white/80 leading-relaxed">Whenever appropriate, we focus on image-guided treatments that target the source of venous disease with minimal disruption to surrounding tissue.</p>
</div>
<div>
<h3 className="text-xl font-semibold mb-2">Personalized Treatment Plans</h3>
<p className="text-lg text-white/80 leading-relaxed">Each patient receives an individualized care plan based on their symptoms, medical history, and diagnostic results.</p>
</div>
<div>
<h3 className="text-xl font-semibold mb-2">Compassionate Patient Care</h3>
<p className="text-lg text-white/80 leading-relaxed">Our team works closely with patients to ensure they feel informed, supported, and comfortable throughout their care experience.</p>
</div>
</div>
</div>

<div className="bg-white/10 border border-white/20 rounded-lg aspect-square lg:aspect-[3/4] flex items-center justify-center p-8 backdrop-blur-sm">
<div className="text-center text-white/60 flex flex-col items-center gap-3">
<i className="w-12 h-12" data-lucide="image" strokeWidth="1.5"></i>
<span className="text-lg font-medium">Doctor / Facility Photo Area</span>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 px-6">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#00B5F1] tracking-tight mb-6">
                    Patient Testimonials
                </h2>
<p className="text-lg text-[#58595B] leading-relaxed">
                    Hearing about the experiences of other patients can help individuals feel more confident when exploring treatment for vein conditions. Many of our patients come to California Vein Institute seeking answers for long-standing symptoms such as leg swelling, circulation problems, or vein discomfort.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 relative">

<div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col h-full">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center font-medium">R</div>
<div>
<div className="flex items-center gap-1">
<span className="font-medium text-[#333333] text-sm">Rosa Ortega</span>
<i className="w-4 h-4 text-blue-500 fill-blue-50" data-lucide="check-circle-2" strokeWidth="2"></i>
</div>
<div className="flex items-center gap-1 text-xs text-gray-500">
<span>20 days ago on</span>
<span className="font-semibold text-gray-700">Google</span>
</div>
</div>
</div>
<div className="flex text-yellow-400 mb-3 gap-0.5">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-gray-700 text-sm flex-grow line-clamp-4">Excellent customer service and very friendly staff</p>
<a className="text-[#00B5F1] text-sm font-medium mt-2 hover:underline" href="#">Read more</a>
</div>

<div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col h-full">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden"><img alt="Avatar" className="w-full h-full object-cover opacity-50" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg'http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23cbd5e1' d='M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z'/%3E%3C/svg%3E"/></div>
<div>
<div className="flex items-center gap-1">
<span className="font-medium text-[#333333] text-sm">Alexandra Aitb...</span>
<i className="w-4 h-4 text-blue-500 fill-blue-50" data-lucide="check-circle-2" strokeWidth="2"></i>
</div>
<div className="flex items-center gap-1 text-xs text-gray-500">
<span>2 months ago on</span>
<span className="font-semibold text-gray-700">Google</span>
</div>
</div>
</div>
<div className="flex text-yellow-400 mb-3 gap-0.5">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-gray-700 text-sm flex-grow line-clamp-4">I had such a great experience with this vascular surgery office. The doctors and the...</p>
<a className="text-[#00B5F1] text-sm font-medium mt-2 hover:underline" href="#">Read more</a>
</div>

<div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col h-full hidden md:flex">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden"><img alt="Avatar" className="w-full h-full object-cover opacity-50" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg'http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23cbd5e1' d='M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z'/%3E%3C/svg%3E"/></div>
<div>
<div className="flex items-center gap-1">
<span className="font-medium text-[#333333] text-sm">Jojo</span>
<i className="w-4 h-4 text-blue-500 fill-blue-50" data-lucide="check-circle-2" strokeWidth="2"></i>
</div>
<div className="flex items-center gap-1 text-xs text-gray-500">
<span>2 months ago on</span>
<span className="font-semibold text-gray-700">Google</span>
</div>
</div>
</div>
<div className="flex text-yellow-400 mb-3 gap-0.5">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-gray-700 text-sm flex-grow line-clamp-4">Dr. Goldstein is very kind, helpful, and knowledgeable. Highly recommend for...</p>
<a className="text-[#00B5F1] text-sm font-medium mt-2 hover:underline" href="#">Read more</a>
</div>

<div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col h-full hidden lg:flex">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full bg-pink-600 text-white flex items-center justify-center font-medium">J</div>
<div>
<div className="flex items-center gap-1">
<span className="font-medium text-[#333333] text-sm">Jose Hernandez</span>
<i className="w-4 h-4 text-blue-500 fill-blue-50" data-lucide="check-circle-2" strokeWidth="2"></i>
</div>
<div className="flex items-center gap-1 text-xs text-gray-500">
<span>2 months ago on</span>
<span className="font-semibold text-gray-700">Google</span>
</div>
</div>
</div>
<div className="flex text-yellow-400 mb-3 gap-0.5">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-gray-700 text-sm flex-grow line-clamp-4">We are incredibly grateful to the dedicated team at (Pedes Orange County) and to Dr....</p>
<a className="text-[#00B5F1] text-sm font-medium mt-2 hover:underline" href="#">Read more</a>
</div>

<button className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white border border-gray-200 rounded-full shadow-sm flex items-center justify-center text-gray-600 hover:bg-gray-50 hidden lg:flex">
<i className="w-5 h-5" data-lucide="chevron-right" strokeWidth="2"></i>
</button>
</div>
<div className="flex justify-center mb-8 gap-2">
<div className="w-2 h-2 rounded-full bg-[#00B5F1]"></div>
<div className="w-2 h-2 rounded-full bg-gray-300"></div>
<div className="w-2 h-2 rounded-full bg-gray-300"></div>
</div>
<div className="text-center space-y-8">
<a className="inline-block bg-[#00B5F1] text-white px-8 py-3.5 rounded-md font-medium text-lg hover:bg-[#009bd1] transition-colors shadow-sm" href="#">
                    Read More Testimonials
                </a>
<p className="text-lg text-[#58595B] max-w-3xl mx-auto italic">
                    Patients often share that they appreciate the time our physicians take to explain their diagnosis, review imaging results, and discuss treatment options in clear and understandable terms.
                </p>
</div>
</div>
</section>

<section className="py-20 md:py-32 px-6 bg-[#F8FAFC]">
<div className="max-w-4xl mx-auto">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#00B5F1] tracking-tight mb-12 text-center">
                Frequently Asked Questions
            </h2>
<div className="space-y-3">

<div className="bg-white border border-gray-200 rounded-lg overflow-hidden transition-all hover:border-[#00B5F1]/30">
<button className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none">
<span className="text-lg font-medium text-[#00B5F1]">What is venous disease?</span>
<i className="w-5 h-5 text-gray-400 shrink-0" data-lucide="plus" strokeWidth="1.5"></i>
</button>
</div>

<div className="bg-white border border-gray-200 rounded-lg overflow-hidden transition-all hover:border-[#00B5F1]/30">
<button className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none">
<span className="text-lg font-medium text-[#00B5F1]">When should I see a vein specialist?</span>
<i className="w-5 h-5 text-gray-400 shrink-0" data-lucide="plus" strokeWidth="1.5"></i>
</button>
</div>

<div className="bg-white border border-gray-200 rounded-lg overflow-hidden transition-all hover:border-[#00B5F1]/30">
<button className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none">
<span className="text-lg font-medium text-[#00B5F1]">Are vein treatments painful?</span>
<i className="w-5 h-5 text-gray-400 shrink-0" data-lucide="plus" strokeWidth="1.5"></i>
</button>
</div>

<div className="bg-white border border-gray-200 rounded-lg overflow-hidden transition-all hover:border-[#00B5F1]/30">
<button className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none">
<span className="text-lg font-medium text-[#00B5F1]">Do vein treatments require hospitalization?</span>
<i className="w-5 h-5 text-gray-400 shrink-0" data-lucide="plus" strokeWidth="1.5"></i>
</button>
</div>

<div className="bg-white border border-gray-200 rounded-lg overflow-hidden transition-all hover:border-[#00B5F1]/30">
<button className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none">
<span className="text-lg font-medium text-[#00B5F1]">How long does recovery take?</span>
<i className="w-5 h-5 text-gray-400 shrink-0" data-lucide="plus" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-24 px-6">
<div className="max-w-5xl mx-auto bg-[#00B5F1] rounded-2xl p-10 md:p-16 text-center text-white shadow-lg relative overflow-hidden">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 100% 0%, #ffffff 0%, transparent 50%), radial-gradient(circle at 0% 100%, #ffffff 0%, transparent 50%)', pointerEvents: 'none'}}></div>
<div className="relative z-10">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
                    Schedule a Consultation
                </h2>
<p className="text-lg text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
                    If you are experiencing symptoms of venous disease or circulation problems, the team at California Vein Institute is here to help. Our physicians provide comprehensive evaluations and modern treatment options designed to improve circulation and relieve symptoms.
                </p>
<a className="inline-block bg-white text-[#00B5F1] px-8 py-3.5 rounded-md font-medium text-lg hover:bg-gray-50 transition-colors shadow-sm" href="#">
                    Contact Our Office Today
                </a>
</div>
</div>
</section>

<section className="py-16 md:py-24 px-6 bg-gray-50 border-t border-gray-100">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold text-[#00B5F1] tracking-tight mb-12 text-center">
                Our Network
            </h2>
<div className="flex flex-wrap justify-center gap-6">

<div className="bg-white border border-gray-200 w-48 h-24 rounded-lg flex items-center justify-center text-gray-300 shadow-sm">Logo</div>
<div className="bg-white border border-gray-200 w-48 h-24 rounded-lg flex items-center justify-center text-gray-300 shadow-sm">Logo</div>
<div className="bg-white border border-gray-200 w-48 h-24 rounded-lg flex items-center justify-center text-gray-300 shadow-sm">Logo</div>
<div className="bg-white border border-gray-200 w-48 h-24 rounded-lg flex items-center justify-center text-gray-300 shadow-sm">Logo</div>
</div>
</div>
</section>

<footer className="bg-[#00B5F1] text-white pt-20 pb-8 px-6 mt-auto">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="lg:col-span-1 space-y-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#00B5F1]">
<i data-lucide="activity" strokeWidth="1.5"></i>
</div>
<div>
<h2 className="text-xl font-semibold tracking-tight text-white leading-none">CALIFORNIA VEIN INSTITUTE</h2>
<span className="text-xs text-white/80 tracking-widest uppercase">A Pedes Vascular Institute</span>
</div>
</div>
<p className="text-white/80 text-lg">
                    Located in Irvine, California, serving patients throughout Orange County.
                </p>
<div className="flex flex-col gap-2 text-sm text-white/90">
<a className="hover:underline" href="#">Pedes Vascular Institute</a>
<a className="hover:underline" href="#">CA Pelvic Pain Institute</a>
</div>
</div>

<div>
<h3 className="text-lg font-semibold mb-6">Conditions</h3>
<ul className="space-y-4 text-white/80 text-lg">
<li><a className="hover:text-white transition-colors" href="#">Chronic Venous Insufficiency</a></li>
<li><a className="hover:text-white transition-colors" href="#">Deep Vein Thrombosis</a></li>
<li><a className="hover:text-white transition-colors" href="#">Varicose Veins</a></li>
</ul>
</div>

<div>
<h3 className="text-lg font-semibold mb-6">Quick Links</h3>
<ul className="space-y-4 text-white/80 text-lg">
<li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">PAE Treatment</a></li>
<li><a className="hover:text-white transition-colors" href="#">Testimonials</a></li>
<li><a className="hover:text-white transition-colors" href="#">FAQ</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>

<div>
<h3 className="text-lg font-semibold mb-6">Contact</h3>
<ul className="space-y-4 text-white/80 text-lg">
<li>Irvine, CA 92618</li>
<li>(XXX) XXX-XXXX</li>
<li><a className="hover:text-white transition-colors break-words" href="mailto:info@caprostateinstitute.com">info@caprostateinstitute.com</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto pt-8 border-t border-white/20 text-center text-sm text-white/70">
<p>© 2024 California Vein Institute. All rights reserved. | <a className="hover:text-white" href="#">Privacy Policy</a> | <a className="hover:text-white" href="#">Terms of Service</a></p>
</div>
</footer>



    </>
  );
}
