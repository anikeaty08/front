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
      

<nav className="sticky top-0 z-50 bg-[#073E29] border-b border-white/10">
<div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
<div className="flex-shrink-0">
<img alt="Kulp Logo" className="h-10 md:h-12 w-auto object-contain" src="https://cdcssl.ibsrv.net/ibimg/smb/1851x627_80/webmgr/0g/k/1/images/kulp-logo-dec25-white.png.webp"/>
</div>
<div className="hidden md:block">
<a className="bg-[#94C662] text-[#073E29] px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-white transition-all duration-300" href="#consultation">
                    Book a Consultation
                </a>
</div>
</div>
</nav>

<section className="bg-[#073E29] py-24 md:py-32 px-6 flex flex-col items-center text-center">
<div className="max-w-4xl mx-auto">
<h1 className="text-white text-4xl md:text-6xl font-semibold tracking-tight mb-8">
                Your Labs Say Normal. <br className="hidden md:block"/> But You Know Something Is Wrong.
            </h1>
<p className="text-white/80 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed">
                Dr. Donna Kulp has spent 33 years finding the root cause of what your doctor missed. Book a free consultation and find out what's really going on.
            </p>
<div id="consultation">
<a className="inline-block bg-[#94C662] text-[#073E29] px-10 py-5 rounded-full text-lg font-semibold hover:bg-white transition-all duration-300 transform hover:scale-105" href="#">
                    Click Here to Book Your Consultation
                </a>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white">
<div className="max-w-5xl mx-auto text-center">
<span className="text-[#073E29] small-caps text-xs font-semibold block mb-6">WATCH THIS FIRST</span>
<div className="aspect-video bg-zinc-100 rounded-3xl border border-zinc-200 shadow-2xl flex items-center justify-center mb-8 overflow-hidden group cursor-pointer relative">
<div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-all"></div>
<div className="flex flex-col items-center text-zinc-400">
<iconify-icon className="text-6xl mb-2 text-[#073E29]/20" icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium">[VSL Video Goes Here]</span>
</div>
</div>
<p className="text-zinc-500 text-base mb-10">
                Dr. Donna explains exactly why your symptoms keep coming back... and what to do about it.
            </p>
<a className="inline-block bg-[#94C662] text-[#073E29] px-10 py-5 rounded-full text-lg font-semibold hover:bg-[#073E29] hover:text-white transition-all duration-300 shadow-lg" href="#">
                Click Here to Book Your Consultation
            </a>
</div>
</section>

<section className="py-24 px-6 bg-zinc-50">
<div className="max-w-4xl mx-auto">
<span className="text-[#94C662] small-caps text-xs font-semibold block mb-8">DOES THIS SOUND LIKE YOU?</span>
<div className="space-y-6 text-zinc-800 text-lg md:text-xl font-light leading-relaxed">
<p>You wake up tired every single day.</p>
<p>Your energy crashes by mid-afternoon no matter what you eat.</p>
<p>Your digestion is unpredictable. Bloating. Reflux. Discomfort.</p>
<p>Your hormones feel completely off but no one can explain why.</p>
<p>You've had blood work done. The results come back "normal."</p>
<p>But you don't feel normal.</p>
<p>You've tried things. Supplements. Diets. Medications. Nothing really worked.</p>
<p className="font-medium text-zinc-900">If that sounds familiar, you are not imagining it.</p>
<p className="font-medium text-zinc-900">And you are not out of options.</p>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1">
<span className="text-[#073E29] small-caps text-xs font-semibold block mb-8">A DIFFERENT KIND OF DOCTOR</span>
<div className="space-y-6 text-zinc-700 text-base md:text-lg font-light leading-relaxed">
<p>Dr. Donna Kulp does not treat symptoms.</p>
<p>She finds the reason they exist in the first place.</p>
<p>She is a Licensed Chiropractor, a Board-Certified Clinical Nutritionist, and a certified Functional Medicine practitioner through the Institute of Functional Medicine.</p>
<p>She has been doing this for over <span className="font-semibold text-[#073E29]">33 years</span>.</p>
<p>She spent 13 of those years as the Team Chiropractor for the Reading Royals, an NHL affiliate of the LA Kings.</p>
<p>She is also the Vice President of the Chiropractic Board of Clinical Nutrition.</p>
<p>She uses advanced lab testing, a deep review of your health history, and a personalized plan built around your body specifically.</p>
<p>Not a general protocol. Not a guess.</p>
<p className="font-medium text-[#073E29]">A plan that actually addresses what is causing how you feel.</p>
</div>
</div>
<div className="order-1 lg:order-2">
<img alt="Dr. Donna Kulp" className="rounded-3xl shadow-2xl w-full h-auto object-cover grayscale-[20%]" src="https://cdcssl.ibsrv.net/ibimg/smb/1080x992_80/webmgr/0g/k/1/images/section-4-image-drdonna-kulp-img.jpg.webp"/>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#073E29] text-white">
<div className="max-w-7xl mx-auto">
<span className="text-[#94C662] small-caps text-xs font-semibold block mb-16 text-center">WHAT TO EXPECT</span>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
<div className="space-y-4">
<div className="text-[#94C662] mb-6">
<iconify-icon className="text-4xl" icon="solar:calendar-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight">Step 1: Book Your Consultation</h3>
<p className="text-white/70 font-light leading-relaxed">A 50 to 60 minute deep-dive into your health history, your symptoms, and your goals.</p>
</div>
<div className="space-y-4">
<div className="text-[#94C662] mb-6">
<iconify-icon className="text-4xl" icon="solar:test-tube-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight">Step 2: Advanced Testing</h3>
<p className="text-white/70 font-light leading-relaxed">We order targeted labs based on what your body actually needs. No guesswork.</p>
</div>
<div className="space-y-4">
<div className="text-[#94C662] mb-6">
<iconify-icon className="text-4xl" icon="solar:document-list-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight">Step 3: Your Personalized Plan</h3>
<p className="text-white/70 font-light leading-relaxed">You receive a written care plan covering nutrition, lifestyle, supplements, and next steps.</p>
</div>
</div>
<div className="text-center">
<a className="inline-block bg-[#94C662] text-[#073E29] px-10 py-5 rounded-full text-lg font-semibold hover:bg-white transition-all duration-300" href="#">
                    Click Here to Book Your Consultation
                </a>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white">
<div className="max-w-7xl mx-auto text-center">
<span className="text-[#073E29] small-caps text-xs font-semibold block mb-16">REAL PATIENTS. REAL RESULTS.</span>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">

<div className="bg-zinc-50 p-10 rounded-2xl border-l-4 border-[#94C662] text-left shadow-sm">
<p className="italic text-zinc-600 mb-6 leading-relaxed">"Where traditional medicine failed me, Dr. Kulp's functional medicine approach and getting to the root cause of my symptoms has been life changing."</p>
<span className="small-caps text-xs font-semibold text-[#073E29]">Missa T.</span>
</div>

<div className="bg-zinc-50 p-10 rounded-2xl border-l-4 border-[#94C662] text-left shadow-sm">
<p className="italic text-zinc-600 mb-6 leading-relaxed">"After 2 weeks I felt my energy come back and my brain fog diminished as well as my muscle aches. I feel 100% better."</p>
<span className="small-caps text-xs font-semibold text-[#073E29]">Kelli</span>
</div>

<div className="bg-zinc-50 p-10 rounded-2xl border-l-4 border-[#94C662] text-left shadow-sm">
<p className="italic text-zinc-600 mb-6 leading-relaxed">"From the moment I met her, I felt genuinely cared for. Not just as a patient, but as a whole person."</p>
<span className="small-caps text-xs font-semibold text-[#073E29]">Jennifer</span>
</div>

<div className="bg-zinc-50 p-10 rounded-2xl border-l-4 border-[#94C662] text-left shadow-sm">
<p className="italic text-zinc-600 mb-6 leading-relaxed">"Reduced joint pain, clearer mind, more energy and 8 lbs down."</p>
<span className="small-caps text-xs font-semibold text-[#073E29]">Pamela R.</span>
</div>

<div className="bg-zinc-50 p-10 rounded-2xl border-l-4 border-[#94C662] text-left shadow-sm">
<p className="italic text-zinc-600 mb-6 leading-relaxed">"My digestion improved, I have increased energy, and much clearer focus. In addition to losing 11 pounds."</p>
<span className="small-caps text-xs font-semibold text-[#073E29]">Beth A.</span>
</div>
</div>

<div className="max-w-4xl mx-auto">
<div className="aspect-video bg-zinc-100 rounded-3xl border border-dashed border-zinc-300 flex items-center justify-center text-zinc-400">
<div className="flex flex-col items-center">
<iconify-icon className="text-5xl mb-3" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium">[Video Testimonials Go Here — 2 to 3 short patient clips]</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#94C662]/10">
<div className="max-w-4xl mx-auto text-center">
<span className="text-[#073E29] small-caps text-xs font-semibold block mb-10">WE COMMONLY WORK WITH</span>
<div className="text-zinc-800 text-lg md:text-xl font-light leading-relaxed tracking-wide">
<p>
                    Chronic fatigue and low energy. Brain fog and poor focus. Hormonal imbalances and perimenopause. 
                    Thyroid issues including Hashimoto's. Gut problems like IBS, SIBO, and bloating. 
                    Blood sugar and metabolic issues. Anxiety and mood disturbances. 
                    Long hauler syndrome. Lyme disease. And a lot more.
                </p>
<p className="mt-8 font-medium text-[#073E29]">
                    If your condition is not listed, call the office. The answer is usually yes.
                </p>
</div>
</div>
</section>

<footer className="py-32 px-6 bg-[#073E29] text-white text-center">
<div className="max-w-4xl mx-auto">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">Ready to Find Out What's Really Going On?</h2>
<p className="text-lg md:text-xl text-white/80 font-light mb-12">Book a free consultation with Dr. Donna Kulp and get a real answer.</p>
<a className="inline-block bg-[#94C662] text-[#073E29] px-12 py-6 rounded-full text-xl font-semibold hover:bg-white transition-all duration-300 shadow-xl mb-16" href="#">
                Click Here to Book Your Consultation
            </a>
<div className="text-sm font-light text-white/60 space-y-2 pt-12 border-t border-white/10">
<p className="text-white font-medium uppercase tracking-widest text-xs">Kulp Chiropractic Clinic, Inc. Nutrition &amp; Wellness Center</p>
<p>52 Morgantown Rd, Reading, PA 19611</p>
<p className="text-lg text-[#94C662] font-semibold mt-4">(610) 208-0404</p>
</div>
</div>
</footer>

    </>
  );
}
