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
      

<header className="pt-12 pb-8">
<div className="container mx-auto px-6 flex justify-center">
<img alt="Lighthouse Logo" className="h-16 md:h-20" src="https://lighthousechiropracticandwellness.com/wp-content/uploads/2023/05/logo.svg"/>
</div>
</header>
<section className="py-20 md:py-32">
<div className="container mx-auto px-6 text-center max-w-4xl">
<h1 className="text-4xl md:text-6xl font-semibold text-[#003765] tracking-tight leading-tight">
                Your Family Deserves Care That Actually Gets to the Root Cause.
            </h1>
<p className="mt-8 text-lg md:text-xl text-gray-600 font-normal leading-relaxed max-w-3xl mx-auto">
                Lighthouse Chiropractic and Wellness combines chiropractic care and functional medicine to help kids, moms, and families in Wake Forest feel genuinely well. Not just better for a week. <span className="italic">Actually well.</span>
</p>
<div className="mt-12">
<a className="inline-block bg-[#97CEC5] text-[#003765] font-semibold text-lg py-5 px-10 rounded-full hover:shadow-lg transition-shadow duration-300" href="#">
                    Click Here to Book Your Free Consultation
                </a>
</div>
</div>
</section>

<section className="py-12 md:py-20">
<div className="container mx-auto px-6">
<div className="max-w-5xl mx-auto bg-[#003765] aspect-video rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden">
<div className="text-center">
<iconify-icon className="text-white/20 text-6xl mb-4" icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-[#97CEC5] italic text-lg opacity-80">Video goes here.</p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-40 bg-white">
<div className="container mx-auto px-6">
<div className="max-w-3xl">
<span className="text-[#97CEC5] text-sm font-semibold tracking-widest uppercase">Why Lighthouse</span>
<h2 className="text-3xl md:text-5xl font-semibold text-[#003765] tracking-tight mt-4 mb-10">
                    This Is Not Your Typical Chiropractic Office.
                </h2>
<div className="space-y-8 text-lg md:text-xl text-gray-700 leading-relaxed font-normal">
<p>Dr. Jessica and Dr. Gabe are a husband and wife team. They work together under one roof.</p>
<p>Dr. Jess is Webster certified. That means specialized prenatal care for expecting moms.</p>
<p>Both doctors are trained in pediatric chiropractic. They love seeing babies and kids.</p>
<p>And they combine it all with functional medicine. Real testing. Real answers. Not just symptom management.</p>
<p>They find the root cause. Then they help your body heal the way it was designed to.</p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-40 bg-[#fbfcfd]">
<div className="container mx-auto px-6 text-center">
<span className="text-[#97CEC5] text-sm font-semibold tracking-widest uppercase">Is This For You?</span>
<h2 className="text-3xl md:text-5xl font-semibold text-[#003765] tracking-tight mt-4 mb-16">
                Lighthouse Is a Great Fit If...
            </h2>
<div className="max-w-2xl mx-auto space-y-10 text-lg md:text-xl text-[#003765] font-normal leading-snug">
<p>You are a mom who is tired of being told everything looks fine when you know it doesn't.</p>
<p>You have kids who need gentle, natural care without drugs or scary procedures.</p>
<p>You are pregnant and want safe, specialized support for your body during pregnancy.</p>
<p>You want a practice that treats your whole family, not just one person at a time.</p>
<p>You are done with cookie cutter care and want something actually customized to you.</p>
</div>
</div>
</section>

<section className="py-24 md:py-40">
<div className="container mx-auto px-6">
<div className="text-center mb-20">
<span className="text-[#97CEC5] text-sm font-semibold tracking-widest uppercase">Real Patients, Real Results</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-8 border-l-4 border-[#97CEC5] shadow-sm rounded-r-xl flex flex-col justify-between hover:shadow-md transition-shadow">
<p className="text-gray-600 leading-relaxed italic text-base">
                        "I had almost convinced myself I had an auto-immune disorder...until my very first appointment at Lighthouse. They did a FULL intake both as a Functional Practitioner, and then as a Chiropractor. The blending of these two modalities make this practice number one. I am pretty much pain-free and have not felt this good in a long time."
                    </p>
<p className="mt-8 font-semibold text-[#003765] text-sm">— Michele</p>
</div>

<div className="bg-white p-8 border-l-4 border-[#97CEC5] shadow-sm rounded-r-xl flex flex-col justify-between hover:shadow-md transition-shadow">
<p className="text-gray-600 leading-relaxed italic text-base">
                        "Dr. Jess listened to all my aches and pains from hairstyling and having babies. She then went on to spend time helping me from head to toe. Every appointment has been this way, complete care and helping me to feel good. I am so glad to have found them."
                    </p>
<p className="mt-8 font-semibold text-[#003765] text-sm">— Megan</p>
</div>

<div className="bg-white p-8 border-l-4 border-[#97CEC5] shadow-sm rounded-r-xl flex flex-col justify-between hover:shadow-md transition-shadow">
<p className="text-gray-600 leading-relaxed italic text-base">
                        "The level of expertise between these two doctors is astonishing. I have seen many chiropractors and none have offered this level of care. Our family will be permanent patrons. We love their head to toe personal care, and how they listen."
                    </p>
<p className="mt-8 font-semibold text-[#003765] text-sm">— The Family Bee's-ness LLC</p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-40 bg-white">
<div className="container mx-auto px-6">
<div className="mb-16">
<span className="text-[#97CEC5] text-sm font-semibold tracking-widest uppercase">Your Doctors</span>
<h2 className="text-3xl md:text-5xl font-semibold text-[#003765] tracking-tight mt-4">
                    You Are in Good Hands.
                </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">

<div className="group">
<div className="aspect-[4/5] overflow-hidden rounded-2xl mb-6">
<img alt="Dr. Jessica Yackley" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lighthousechiropracticandwellness.com/wp-content/uploads/2023/08/Dr-Jessica-1.jpg"/>
</div>
<p className="text-gray-600 text-sm md:text-base leading-relaxed">
<span className="block font-semibold text-[#003765] text-lg mb-1">Dr. Jessica Yackley, DC.</span>
                        Webster Certified. Logan College of Chiropractic. Functional medicine trained.
                    </p>
</div>

<div className="group">
<div className="aspect-[4/5] overflow-hidden rounded-2xl mb-6">
<img alt="Dr. Gabe Dickens" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lighthousechiropracticandwellness.com/wp-content/uploads/2023/08/Dr-Gabe-1.jpg"/>
</div>
<p className="text-gray-600 text-sm md:text-base leading-relaxed">
<span className="block font-semibold text-[#003765] text-lg mb-1">Dr. Gabe Dickens, DC.</span>
                        Palmer College Valedictorian. Trained in Gonstead, Upper Cervical, Thompson, and more.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#003765] text-white">
<div className="container mx-auto px-6 text-center max-w-4xl">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
                Ready to Feel Like Yourself Again?
            </h2>
<p className="text-lg md:text-xl text-white/80 font-light mb-12">
                Book a free consultation with Dr. Jess and Dr. Gabe. No pressure. Just a real conversation about your health.
            </p>
<a className="inline-block bg-[#97CEC5] text-[#003765] font-semibold text-lg md:text-xl py-6 px-12 rounded-full hover:brightness-105 transition-all" href="#">
                Click Here to Book Your Free Consultation
            </a>
</div>
</section>

<footer className="py-20 bg-white border-t border-gray-100">
<div className="container mx-auto px-6 text-center">
<img alt="Lighthouse Logo" className="h-10 mx-auto mb-8 opacity-80" src="https://lighthousechiropracticandwellness.com/wp-content/uploads/2023/05/logo.svg"/>
<div className="text-gray-500 text-sm leading-relaxed space-y-1">
<p className="font-medium text-[#003765]">Lighthouse Chiropractic and Wellness</p>
<p>1772 Heritage Center Dr. Unit 101, Wake Forest, NC 27587</p>
<p>919-925-0767</p>
</div>
<div className="mt-12 flex justify-center space-x-6 text-gray-400">
<iconify-icon className="text-xl" icon="solar:heart-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:minimalistic-magnifer-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:calendar-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</footer>

    </>
  );
}
