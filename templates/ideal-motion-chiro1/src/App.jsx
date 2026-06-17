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
      

<header className="pt-12 pb-16 px-6 text-center">
<img alt="Ideal Motion Chiropractic Logo" className="h-16 mx-auto mb-12" src="https://idealmotionchiropractic.com/wp-content/uploads/2022/06/8af382f1-a77b-44ff-bbec-95a86df21486.png"/>
<h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight max-w-4xl mx-auto mb-6">
            This Is Not Your Typical Chiropractic Office.
        </h1>
<p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Ideal Motion Chiropractic helps people in Bonney Lake move better, feel better, and finally get answers. Not just adjustments. Real root-cause care.
        </p>
<div className="flex flex-col items-center gap-4">
<a className="bg-soft-pink text-black font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 active:scale-95 text-base md:text-lg" href="#">
                Click Here to Book Your Consultation
            </a>
<span className="text-xs text-gray-400">
                Takes less than 60 seconds. No obligation.
            </span>
</div>
</header>

<section className="px-6 mb-24">
<div className="max-w-5xl mx-auto">
<div className="aspect-video bg-gray-50 border border-pink-100 rounded-3xl flex flex-col items-center justify-center relative group cursor-pointer shadow-sm">
<div className="bg-soft-pink w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform mb-6">
<iconify-icon className="text-black text-2xl md:text-3xl" icon="solar:play-bold"></iconify-icon>
</div>
<p className="text-lg md:text-xl text-gray-700 italic font-medium px-6 text-center">
                    "Watch: Why Patients Drive Across Pierce County to See Us"
                </p>
<div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity rounded-3xl"></div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50/50 px-6">
<div className="max-w-3xl mx-auto text-center space-y-8">
<p className="text-lg md:text-xl leading-relaxed">
                Most chiropractic offices treat the symptom and send you home.
            </p>
<p className="text-lg md:text-xl leading-relaxed">
                We do something different.
            </p>
<p className="text-lg md:text-xl leading-relaxed">
                Dr. Ashley and the team at Ideal Motion Chiropractic take the time to actually figure out what is going on.
            </p>
<p className="text-lg md:text-xl leading-relaxed">
                That means a real exam. Real testing if needed. And a care plan built around you.
            </p>
<p className="text-lg md:text-xl leading-relaxed">
                Not a cookie-cutter protocol. Not a rushed appointment.
            </p>
<p className="text-lg md:text-xl leading-relaxed">
                Patients say it feels more like a spa than a clinic.
            </p>
<p className="text-lg md:text-xl font-medium">
                That is pretty much the point.
            </p>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-6xl mx-auto">
<h2 className="text-2xl md:text-3xl font-semibold text-soft-pink text-center tracking-tight mb-16">
                We Help With More Than You Think
            </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">

<div className="bg-white p-10 rounded-2xl border border-pink-50 shadow-sm hover:shadow-md transition-shadow text-center">
<iconify-icon className="text-4xl text-soft-pink mb-6" icon="solar:health-bold-duotone"></iconify-icon>
<h3 className="text-lg font-semibold mb-2">Chronic Pain, Back and Neck Issues</h3>
</div>

<div className="bg-white p-10 rounded-2xl border border-pink-50 shadow-sm hover:shadow-md transition-shadow text-center">
<iconify-icon className="text-4xl text-soft-pink mb-6" icon="solar:dna-bold-duotone"></iconify-icon>
<h3 className="text-lg font-semibold mb-2">Functional Medicine and Root Cause Health</h3>
</div>

<div className="bg-white p-10 rounded-2xl border border-pink-50 shadow-sm hover:shadow-md transition-shadow text-center">
<iconify-icon className="text-4xl text-soft-pink mb-6" icon="solar:heart-angle-bold-duotone"></iconify-icon>
<h3 className="text-lg font-semibold mb-2">Prenatal, Postpartum, and Pediatric Care</h3>
</div>
</div>
<p className="text-center text-gray-500 font-medium">
                All ages welcome. From newborns to active adults.
            </p>
</div>
</section>

<section className="py-24 px-6 bg-white overflow-hidden">
<div className="max-w-5xl mx-auto">
<div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
<div className="w-full md:w-1/2">
<img alt="Dr. Ashley Cowger" className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/5]" src="https://idealmotionchiropractic.com/wp-content/uploads/2023/10/B1.jpg"/>
</div>
<div className="w-full md:w-1/2 space-y-6">
<h2 className="text-3xl md:text-4xl font-semibold text-soft-pink tracking-tight">
                        Dr. Ashley Cowger
                    </h2>
<div className="space-y-4 text-lg leading-relaxed text-gray-800">
<p>Dr. Ashley is the owner of Ideal Motion Chiropractic in Bonney Lake, WA.</p>
<p>She graduated from Palmer West Chiropractic College and has spent her career helping patients get out of pain and stay that way.</p>
<p>Her technique is gentle and effective.</p>
<p>Her patients refer their friends, their partners, and their kids.</p>
<p className="font-medium">That says everything.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-stone-50/50">
<div className="max-w-6xl mx-auto">
<h2 className="text-2xl md:text-3xl font-semibold text-soft-pink text-center tracking-tight mb-16">
                What Patients Are Saying
            </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-soft-pink">
<p className="text-gray-800 italic mb-6 leading-relaxed">
                        "I went limping in to her office and within a few weeks could walk again. Her office looks more like a spa than a chiropractor office."
                    </p>
<p className="font-semibold">— Gina E.</p>
</div>

<div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-soft-pink">
<p className="text-gray-800 italic mb-6 leading-relaxed">
                        "She treats you like a human being vs just another patient to get in and out of the room."
                    </p>
<p className="font-semibold">— Patient</p>
</div>

<div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-soft-pink">
<p className="text-gray-800 italic mb-6 leading-relaxed">
                        "I walked out of my first adjustment instantly feeling better. I have found my forever chiropractor."
                    </p>
<p className="font-semibold">— Patient</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-5xl mx-auto">
<h2 className="text-2xl md:text-3xl font-semibold text-soft-pink text-center tracking-tight mb-16">
                Hear It From Our Patients
            </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="aspect-video bg-white border border-pink-100 rounded-2xl flex flex-col items-center justify-center relative group cursor-pointer shadow-sm">
<div className="bg-soft-pink w-12 h-12 rounded-full flex items-center justify-center mb-4">
<iconify-icon className="text-black text-xl" icon="solar:play-bold"></iconify-icon>
</div>
<p className="text-gray-700 font-medium italic">Patient Testimonial Video 1</p>
</div>

<div className="aspect-video bg-white border border-pink-100 rounded-2xl flex flex-col items-center justify-center relative group cursor-pointer shadow-sm">
<div className="bg-soft-pink w-12 h-12 rounded-full flex items-center justify-center mb-4">
<iconify-icon className="text-black text-xl" icon="solar:play-bold"></iconify-icon>
</div>
<p className="text-gray-700 font-medium italic">Patient Testimonial Video 2</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white">
<div className="max-w-3xl mx-auto text-center">
<h2 className="text-2xl md:text-3xl font-semibold text-soft-pink tracking-tight mb-12">
                A Full Team. All Under One Roof.
            </h2>
<div className="space-y-6 text-lg md:text-xl leading-relaxed">
<p>Four chiropractors. A certified functional medicine practitioner. A licensed massage therapist with over 34 years of experience.</p>
<p>And Buddy, the office therapy dog, who has been keeping patients calm and comfortable for 8 years.</p>
<p className="font-medium text-gray-500">This is not a one-doctor shop.</p>
<p className="font-semibold">You get a full team working together to get you better.</p>
</div>
</div>
</section>

<section className="bg-soft-pink py-24 px-6">
<div className="max-w-3xl mx-auto text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
                Ready to Feel Like Yourself Again?
            </h2>
<p className="text-lg md:text-xl mb-12 max-w-xl mx-auto leading-relaxed">
                Book a free consultation with our team. We will listen, we will look at what is really going on, and we will make a plan that fits your life.
            </p>
<div className="flex flex-col items-center gap-4">
<a className="bg-black text-white font-semibold py-4 px-10 rounded-full border-2 border-black hover:bg-transparent hover:text-black transition-all text-base md:text-lg shadow-lg" href="#">
                    Click Here to Book Your Consultation
                </a>
<p className="text-sm text-gray-800 font-medium mt-2">
                    Serving Bonney Lake, WA and surrounding Pierce County.<br/>
                    Mon through Thu, 9:30 AM to 6:00 PM.
                </p>
</div>
</div>
</section>

    </>
  );
}
