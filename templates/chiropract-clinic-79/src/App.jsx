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
      

<header className="py-10 px-6 flex justify-center">
<img alt="Bloomington Wellness &amp; Rehab" className="h-16 md:h-20 w-auto" src="https://www.wellbloomington.com/wp-content/uploads/al_opt_content/IMAGE/www.wellbloomington.com//wp-content/uploads/2024/07/BWC-linear-logo-outline-2022-1.webp.bv.webp?bv_host=www.wellbloomington.com"/>
</header>

<section className="max-w-5xl mx-auto px-6 pt-8 pb-16 text-center">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight mb-8">
            Your Back Has Been Hurting Long Enough.
        </h1>
<p className="text-lg md:text-xl text-gray-600 font-normal max-w-3xl mx-auto mb-10">
            Bloomington's top-rated clinic has helped thousands of patients get out of pain without surgery or painkillers. See if you qualify for a free consultation.
        </p>
<div className="flex justify-center">
<a className="bg-[#FFB703] text-[#1a1a1a] font-semibold text-lg md:text-xl py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5" href="#">
                Click Here to Book Your Consultation
            </a>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 mb-12">
<div className="relative w-full aspect-video bg-neutral-900 rounded-2xl flex items-center justify-center overflow-hidden group cursor-pointer shadow-2xl">

<div className="absolute inset-0 bg-gradient-to-tr from-black/80 to-transparent flex flex-col justify-end p-8">
<p className="text-white text-lg md:text-xl font-medium mb-2">Watch: How Bloomington Wellness Patients Are Getting Their Life Back</p>
</div>

<div className="z-10 bg-white/10 backdrop-blur-md p-6 rounded-full border border-white/20 transition-transform group-hover:scale-110">
<iconify-icon icon="solar:play-bold" style={{color: 'white', fontSize: '3rem'}}></iconify-icon>
</div>
</div>
<p className="text-center text-sm md:text-base text-gray-500 mt-8">
            25 years. Thousands of patients. Minnesota's #1 rated chiropractic clinic on Google.
        </p>
</section>

<section className="bg-[#7BA9D4] py-4">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center gap-4 text-white text-sm md:text-base font-medium">
<p>25+ Years Serving Bloomington</p>
<p>#1 Rated Chiropractic Clinic in Minnesota on Google</p>
<p>Voted Best in Bloomington 10+ Years in a Row</p>
</div>
</section>

<section className="max-w-3xl mx-auto px-6 py-24">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-12">This Is for You If...</h2>
<div className="space-y-6">
<div className="flex items-center gap-4 py-2 border-b border-gray-50">
<iconify-icon icon="solar:check-circle-linear" style={{color: '#FFB703', fontSize: '1.5rem'}}></iconify-icon>
<p className="text-lg text-gray-700">You've had back or neck pain for months (or years)</p>
</div>
<div className="flex items-center gap-4 py-2 border-b border-gray-50">
<iconify-icon icon="solar:check-circle-linear" style={{color: '#FFB703', fontSize: '1.5rem'}}></iconify-icon>
<p className="text-lg text-gray-700">You've tried everything and nothing has stuck</p>
</div>
<div className="flex items-center gap-4 py-2 border-b border-gray-50">
<iconify-icon icon="solar:check-circle-linear" style={{color: '#FFB703', fontSize: '1.5rem'}}></iconify-icon>
<p className="text-lg text-gray-700">You want real answers, not just another prescription</p>
</div>
<div className="flex items-center gap-4 py-2 border-b border-gray-50">
<iconify-icon icon="solar:check-circle-linear" style={{color: '#FFB703', fontSize: '1.5rem'}}></iconify-icon>
<p className="text-lg text-gray-700">You'd rather fix it than mask it</p>
</div>
<div className="flex items-center gap-4 py-2 border-b border-gray-50">
<iconify-icon icon="solar:check-circle-linear" style={{color: '#FFB703', fontSize: '1.5rem'}}></iconify-icon>
<p className="text-lg text-gray-700">You live in or near Bloomington, MN</p>
</div>
</div>
</section>

<section className="bg-gray-50 py-24 px-6">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12">This Is Not Your Average Chiropractic Clinic.</h2>
<div className="space-y-8 text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
<p>Dr. Cory Emberland has been doing this since 1999.</p>
<p>He built Bloomington Wellness from the ground up.</p>
<p>Today it is Minnesota's highest-rated chiropractic clinic on Google.</p>
<p>The clinic uses MedX spinal rehab technology. It is the gold standard for non-surgical back and neck strengthening. Only a handful of clinics in Minnesota have it.</p>
<p>For patients dealing with neuropathy, BWC is the first clinic in Minnesota to use the Nurogenx treatment device. Clinical studies show an 87% success rate.</p>
<p>This is not a quick-fix pop-and-go office. This is a full care system built around getting you better and keeping you that way.</p>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 py-24">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/5] bg-gray-100">
<img alt="Dr. Cory Emberland" className="w-full h-full object-cover" src="https://www.wellbloomington.com/wp-content/uploads/elementor/thumbs/Dr.-Cory-Emberland-Black-fotor-2025011919188-r09gvq761xwf4pnpug5uddqolshpjcb7tuxvrfdlta.jpg"/>
</div>
<div className="space-y-6">
<h2 className="text-3xl font-semibold tracking-tight">Dr. Cory Emberland</h2>
<p className="text-[#7BA9D4] font-medium text-lg">Founder, Bloomington Wellness &amp; Rehab</p>
<div className="space-y-4 text-gray-600 text-lg leading-relaxed">
<p>Dr. Cory has been helping patients in Bloomington since 1999.</p>
<p>He is one of the most credentialed chiropractors in Minnesota.</p>
<p>His specialties include spinal rehabilitation, neuropathy treatment, scoliosis care, and auto injury recovery.</p>
<p>He is not just a chiropractor. He is a full-system clinician who treats the cause, not just the symptom.</p>
</div>
</div>
</div>
</section>

<section className="bg-white py-24 px-6">
<div className="max-w-6xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-16">Here's What Patients Are Saying.</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-[#FFB703] relative">
<p className="italic text-gray-700 text-lg mb-6 leading-relaxed">"The first time Dr. Cory adjusted me I walked out feeling like a new person and my headaches have resolved."</p>
<p className="text-xs uppercase tracking-widest font-semibold text-gray-500">— Yelhsa Eiram, Bloomington Wellness Patient</p>
</div>

<div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-[#FFB703] relative">
<p className="italic text-gray-700 text-lg mb-6 leading-relaxed">"Dr. Brittany listens to your concerns and helped me get back to running. Super nice. Super professional. Super knowledgeable."</p>
<p className="text-xs uppercase tracking-widest font-semibold text-gray-500">— Mary Gerval Johnson, Bloomington Wellness Patient</p>
</div>

<div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-[#FFB703] relative">
<p className="italic text-gray-700 text-lg mb-6 leading-relaxed">"One adjustment has already helped and I always feel comfortable and cared for."</p>
<p className="text-xs uppercase tracking-widest font-semibold text-gray-500">— Shelley Smith Swartzel, Bloomington Wellness Patient</p>
</div>
</div>
</div>
</section>

<section className="bg-[#7BA9D4] text-white py-24 px-6 text-center">
<div className="max-w-4xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8">Dealing With Nerve Pain or Neuropathy?</h2>
<div className="space-y-4 text-lg md:text-xl mb-12 text-blue-50">
<p>We have a solution most clinics do not offer.</p>
<p>Bloomington Wellness is the first clinic in Minnesota to use the Nurogenx neuropathy treatment device.</p>
<p>It has an 87% success rate in clinical studies.</p>
<p>Drug-free. Non-surgical. And it has helped patients who said they had already tried everything.</p>
</div>
<a className="inline-block bg-[#FFB703] text-[#1a1a1a] font-semibold text-lg py-4 px-10 rounded-full shadow-lg hover:bg-[#e6a502] transition-all" href="#">
                Click Here to Book Your Consultation
            </a>
</div>
</section>

<section className="bg-white py-24 px-6 text-center">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Ready to Stop Living With the Pain?</h2>
<div className="text-lg text-gray-600 mb-10 space-y-2">
<p>The consultation is free. The conversation is simple. Dr. Cory and his team will look at what is going on and tell you honestly if they can help.</p>
<p>No pressure. No sales pitch. Just answers.</p>
</div>
<a className="inline-block bg-[#FFB703] text-[#1a1a1a] font-semibold text-xl py-5 px-12 rounded-full shadow-xl hover:scale-105 transition-transform mb-12" href="#">
                Click Here to Book Your Consultation
            </a>
<div className="text-gray-500 text-sm md:text-base leading-relaxed">
<p className="font-medium">Bloomington Wellness &amp; Rehab</p>
<p>5143 W. 98th Street, Bloomington, MN 55437</p>
<p>(952) 881-2800</p>
</div>
</div>
</section>

<footer className="bg-neutral-900 text-white py-12 px-6">
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
<div>
<span className="text-xl font-medium tracking-tighter uppercase">BWC</span>
</div>
<div className="text-xs md:text-sm text-neutral-400 text-center leading-relaxed">
                5143 W. 98th Street, Bloomington, MN 55437 <br className="hidden md:block"/> 
                (952) 881-2800 | info@wellbloomington.com
            </div>
<div className="text-xs md:text-sm text-neutral-400 md:text-right">
                Minnesota's #1 Rated Chiropractic Clinic on Google
            </div>
</div>
</footer>

    </>
  );
}
