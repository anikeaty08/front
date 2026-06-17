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
      

<header className="py-8 flex justify-center lg:justify-start lg:px-12 max-w-7xl mx-auto">
<img alt="Team Health Care Clinic" className="h-12 w-auto object-contain" src="https://teamhealthcareclinic.com/wp-content/uploads/slogan-invert.webp"/>
</header>

<section className="max-w-4xl mx-auto px-6 text-center py-12 lg:py-20">
<h1 className="text-4xl lg:text-6xl font-semibold tracking-tight leading-tight mb-6">
            Your Back Pain Has a Root Cause. <span className="text-[#90CDC8]">We Find It.</span>
</h1>
<p className="text-lg lg:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Team Health Care Clinic in Champlin has helped 30,000 families get real relief from sciatica, disc injuries, and chronic low back pain. Without surgery. Without guessing.
        </p>
<div className="flex flex-col items-center">
<button className="bg-[#90CDC8] text-white font-medium text-lg lg:text-xl px-10 py-5 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95">
                Click Here to Book Your Consultation
            </button>
<p className="mt-4 text-xs text-gray-400 flex items-center gap-1">
<iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5" style={{color: '#90CDC8'}}></iconify-icon>
                Takes less than 60 seconds. No obligation.
            </p>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 mb-24">
<div className="text-center mb-6">
<p className="text-sm font-medium text-[#90CDC8] uppercase tracking-widest mb-2">Patient Education</p>
<h2 className="text-lg lg:text-xl font-medium">Watch this first. It will change how you think about your back pain.</h2>
</div>
<div className="relative aspect-video w-full rounded-2xl bg-gray-50 border-4 border-[#90CDC8]/20 shadow-2xl flex items-center justify-center overflow-hidden">
<div className="text-center">
<iconify-icon className="text-6xl text-[#90CDC8] mb-4" icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-lg font-medium text-gray-400">[VSL Video Goes Here]</p>
</div>
</div>
</section>

<section className="border-y border-gray-100 bg-gray-50/50 py-12 px-6">
<div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
<div>
<p className="text-3xl lg:text-4xl font-semibold text-[#90CDC8] tracking-tight">35+</p>
<p className="text-xs lg:text-sm font-medium text-gray-500 uppercase mt-1">Years Serving Champlin</p>
</div>
<div>
<p className="text-3xl lg:text-4xl font-semibold text-[#90CDC8] tracking-tight">30,000+</p>
<p className="text-xs lg:text-sm font-medium text-gray-500 uppercase mt-1">Families Helped</p>
</div>
<div>
<p className="text-3xl lg:text-4xl font-semibold text-[#90CDC8] tracking-tight">300+</p>
<p className="text-xs lg:text-sm font-medium text-gray-500 uppercase mt-1">Five Star Reviews</p>
</div>
<div>
<p className="text-3xl lg:text-4xl font-semibold text-[#90CDC8] tracking-tight">51x</p>
<p className="text-xs lg:text-sm font-medium text-gray-500 uppercase mt-1">Best Of Winner</p>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight">What Patients Are Saying</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-[#B4DBAF] p-8 rounded-2xl flex flex-col justify-between">
<p className="text-base lg:text-lg mb-8 leading-relaxed italic">"Within a few weeks with VAX-D treatment, I was able to go on a trip and walk all around New York with my daughter."</p>
<p className="text-xs font-semibold tracking-widest uppercase opacity-70">— Team Health Care Patient</p>
</div>

<div className="bg-[#B4DBAF] p-8 rounded-2xl flex flex-col justify-between">
<p className="text-base lg:text-lg mb-8 leading-relaxed italic">"The drs at Team Health have adjusted me through pregnancies and post pregnancy issues, our four kids all these 12 years, and now my husband since his auto accident. They do more than attend to bodies, they attend to spirits!"</p>
<p className="text-xs font-semibold tracking-widest uppercase opacity-70">— Sheryl Lund</p>
</div>

<div className="bg-[#B4DBAF] p-8 rounded-2xl flex flex-col justify-between">
<p className="text-base lg:text-lg mb-8 leading-relaxed italic">"Every time I go to THCC, I feel so seen and cared for. Every doc I've ever seen there has always been equally kind AND incredible at what they do. Can't recommend this place enough."</p>
<p className="text-xs font-semibold tracking-widest uppercase opacity-70">— Madi Andre</p>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white">
<div className="max-w-5xl mx-auto">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-center mb-16">Meet Dr. Jay and Dr. Joe</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">

<div className="flex flex-col items-center text-center p-8 rounded-3xl border border-[#90CDC8]/30 hover:shadow-xl transition-shadow">
<img alt="Dr. Jay Bertsch" className="w-48 h-48 rounded-full object-cover mb-6 border-4 border-[#90CDC8]/10" src="https://teamhealthcareclinic.com/wp-content/uploads/jay-3.webp"/>
<h3 className="text-xl font-semibold mb-2">Dr. Jay Bertsch, D.C.</h3>
<p className="text-sm text-gray-600 leading-relaxed">Over 35 years helping patients in Champlin get to the root cause of their pain. Not just relief. Real answers.</p>
</div>

<div className="flex flex-col items-center text-center p-8 rounded-3xl border border-[#90CDC8]/30 hover:shadow-xl transition-shadow">
<img alt="Dr. Joseph Bertsch" className="w-48 h-48 rounded-full object-cover mb-6 border-4 border-[#90CDC8]/10" src="https://teamhealthcareclinic.com/wp-content/uploads/joseph-3.webp"/>
<h3 className="text-xl font-semibold mb-2">Dr. Joseph Bertsch, D.C.</h3>
<p className="text-sm text-gray-600 leading-relaxed">Specializing in a whole-body approach to sciatica and disc injuries. Chiropractic, physical therapy, and VAX-D decompression all under one roof.</p>
</div>
</div>
</div>
</section>

<section className="bg-[#90CDC8] text-white py-20 px-6">
<div className="max-w-3xl mx-auto text-center">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-8">The First Clinic in Minnesota to Offer VAX-D</h2>
<div className="space-y-4 text-base lg:text-lg leading-relaxed opacity-90">
<p>VAX-D is an FDA-cleared spinal decompression treatment.</p>
<p>It gently takes pressure off the discs.</p>
<p>It has an 80% success rate for back pain and disc injuries.</p>
<p>Team Health Care was the first clinic in Minnesota to bring it here.</p>
<p>Most clinics don't have it. We do.</p>
</div>
</div>
</section>

<section className="py-24 px-6 text-center bg-white">
<div className="max-w-4xl mx-auto">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-4">Ready to Find Out What's Really Going On?</h2>
<p className="text-lg text-gray-600 mb-10 max-w-xl mx-auto">
                Book a free consultation with Dr. Jay or Dr. Joe. We'll look at the root cause and tell you exactly what we can do for you.
            </p>
<div className="flex flex-col items-center">
<button className="bg-[#90CDC8] text-white font-medium text-lg lg:text-xl px-10 py-5 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95 mb-6">
                    Click Here to Book Your Consultation
                </button>
<div className="text-xs text-gray-500 space-y-1">
<p className="font-medium">Team Health Care Clinic</p>
<p>12217 Champlin Drive, Champlin, MN</p>
<p>(763) 323-1492</p>
</div>
</div>
</div>
</section>

<footer className="py-12 border-t border-gray-100 px-6 text-center">
<p className="text-xs text-gray-400">© 2026 Team Health Care Clinic, PC. All Rights Reserved.</p>
</footer>

    </>
  );
}
