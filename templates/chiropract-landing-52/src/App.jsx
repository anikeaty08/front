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


document.write(new Date().getFullYear())
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
      

<header className="bg-[#1a1a1a] py-8 flex justify-center border-b border-white/5">
<img alt="Elite Family Chiropractic" className="h-12 w-auto object-contain" src="https://cdcssl.ibsrv.net/ibimg/smb/209x120_80/webmgr/1s/n/6/_img/elite-family-chiro-logo_white.png.webp"/>
</header>

<section className="bg-[#1a1a1a] pt-16 pb-24 px-6 text-center">
<div className="max-w-3xl mx-auto">
<h1 className="text-4xl md:text-6xl font-semibold text-white tracking-tight leading-tight mb-6">
                Your Back Shouldn't Run Your Life.
            </h1>
<p className="text-lg md:text-xl text-slate-400 font-normal mb-10 max-w-2xl mx-auto leading-relaxed">
                Elite Family Chiropractic has helped hundreds of Pearland patients get out of pain and stay out. Watch the video below and book your consultation.
            </p>
<div className="flex flex-col items-center">
<a className="bg-[#39CD84] hover:bg-[#2fb875] text-white font-semibold text-lg py-5 px-10 rounded-full transition-all duration-300 shadow-lg shadow-[#39CD84]/20 transform hover:-translate-y-0.5 active:scale-95" href="#book">
                    Click Here to Book Your Consultation
                </a>
<p className="text-slate-500 text-xs mt-4">
                    No obligation. Takes less than 60 seconds to schedule.
                </p>
</div>
</div>
</section>

<section className="bg-white py-20 px-6">
<div className="max-w-4xl mx-auto">
<div className="aspect-video bg-slate-100 rounded-2xl border border-slate-200 flex items-center justify-center group overflow-hidden relative shadow-sm">
<div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors"></div>
<div className="flex flex-col items-center gap-4 relative z-10">
<iconify-icon className="text-slate-400" icon="solar:play-circle-linear" stroke="1.5" style={{fontSize: '4rem'}}></iconify-icon>
<span className="text-slate-500 font-medium tracking-wide">[Add VSL Video Here]</span>
</div>
</div>
<p className="mt-8 text-center text-slate-600 font-medium text-base">
                Watch this short video to see how patients at Elite Family Chiropractic got their lives back.
            </p>
</div>
</section>

<section className="bg-[#39CD84] py-6 px-6">
<div className="max-w-6xl mx-auto">
<p className="text-white text-center font-semibold text-sm md:text-base uppercase tracking-widest">
                800+ Five-Star Google Reviews. 3 Locations. Thousands of Patients Helped.
            </p>
</div>
</section>

<section className="bg-white py-24 px-6">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 text-center tracking-tight mb-16">
                Real People. Real Results.
            </h2>
<div className="space-y-8">

<div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm">
<div className="flex gap-1 mb-4">
<iconify-icon className="text-[#39CD84]" icon="solar:star-bold" style={{fontSize: '1.25rem'}}></iconify-icon>
<iconify-icon className="text-[#39CD84]" icon="solar:star-bold" style={{fontSize: '1.25rem'}}></iconify-icon>
<iconify-icon className="text-[#39CD84]" icon="solar:star-bold" style={{fontSize: '1.25rem'}}></iconify-icon>
<iconify-icon className="text-[#39CD84]" icon="solar:star-bold" style={{fontSize: '1.25rem'}}></iconify-icon>
<iconify-icon className="text-[#39CD84]" icon="solar:star-bold" style={{fontSize: '1.25rem'}}></iconify-icon>
</div>
<p className="text-slate-700 text-lg italic leading-relaxed mb-6">
                        "Dr. Khalil has helped me where several other chiropractors have failed. Chronic pain is no longer a part of my daily life."
                    </p>
<p className="text-slate-900 font-semibold text-sm">— Courtney M.</p>
</div>

<div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm">
<div className="flex gap-1 mb-4">
<iconify-icon className="text-[#39CD84]" icon="solar:star-bold" style={{fontSize: '1.25rem'}}></iconify-icon>
<iconify-icon className="text-[#39CD84]" icon="solar:star-bold" style={{fontSize: '1.25rem'}}></iconify-icon>
<iconify-icon className="text-[#39CD84]" icon="solar:star-bold" style={{fontSize: '1.25rem'}}></iconify-icon>
<iconify-icon className="text-[#39CD84]" icon="solar:star-bold" style={{fontSize: '1.25rem'}}></iconify-icon>
<iconify-icon className="text-[#39CD84]" icon="solar:star-bold" style={{fontSize: '1.25rem'}}></iconify-icon>
</div>
<p className="text-slate-700 text-lg italic leading-relaxed mb-6">
                        "All of the doctors at Elite are miracle workers. My back has never been better. It has been LIFE CHANGING!"
                    </p>
<p className="text-slate-900 font-semibold text-sm">— Kalyn P.</p>
</div>

<div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm">
<div className="flex gap-1 mb-4">
<iconify-icon className="text-[#39CD84]" icon="solar:star-bold" style={{fontSize: '1.25rem'}}></iconify-icon>
<iconify-icon className="text-[#39CD84]" icon="solar:star-bold" style={{fontSize: '1.25rem'}}></iconify-icon>
<iconify-icon className="text-[#39CD84]" icon="solar:star-bold" style={{fontSize: '1.25rem'}}></iconify-icon>
<iconify-icon className="text-[#39CD84]" icon="solar:star-bold" style={{fontSize: '1.25rem'}}></iconify-icon>
<iconify-icon className="text-[#39CD84]" icon="solar:star-bold" style={{fontSize: '1.25rem'}}></iconify-icon>
</div>
<p className="text-slate-700 text-lg italic leading-relaxed mb-6">
                        "After trying pain management with an MD and finding no long-term success, I tried chiropractic care with Dr. Khalil. It was a tremendous success. I now make regular visits."
                    </p>
<p className="text-slate-900 font-semibold text-sm">— Cecile C.</p>
</div>
</div>
</div>
</section>

<section className="bg-[#f5f5f5] py-24 px-6">
<div className="max-w-5xl mx-auto text-center">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-16">Hear It From Patients Directly</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div>
<div className="aspect-video bg-white rounded-2xl border border-slate-200 flex items-center justify-center shadow-sm mb-4">
<iconify-icon className="text-slate-300" icon="solar:videocamera-record-linear" stroke="1.5" style={{fontSize: '3rem'}}></iconify-icon>
</div>
<p className="text-xs text-slate-500 font-medium">[Add Patient Testimonial Video Here]</p>
<p className="text-sm text-slate-600 mt-2">A patient shares how chiropractic care changed their daily routine.</p>
</div>
<div>
<div className="aspect-video bg-white rounded-2xl border border-slate-200 flex items-center justify-center shadow-sm mb-4">
<iconify-icon className="text-slate-300" icon="solar:videocamera-record-linear" stroke="1.5" style={{fontSize: '3rem'}}></iconify-icon>
</div>
<p className="text-xs text-slate-500 font-medium">[Add Patient Testimonial Video Here]</p>
<p className="text-sm text-slate-600 mt-2">From chronic pain to feeling like themselves again.</p>
</div>
</div>
</div>
</section>

<section className="bg-white py-24 px-6">
<div className="max-w-5xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16">
<div className="order-1 md:order-1">
<img alt="Dr. Michael Khalil" className="rounded-3xl shadow-xl w-full object-cover" src="https://cdcssl.ibsrv.net/ibimg/smb/342x546_80/webmgr/1s/n/6/_img/Mike-Khalil-Slide.png.webp"/>
</div>
<div className="order-2 md:order-2">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-8">Dr. Michael Khalil</h2>
<div className="space-y-4 text-slate-700 text-base leading-relaxed">
<p>Dr. Mike has been serving the Houston area since 2011.</p>
<p>He trained at Life University in Atlanta and studied Biology and Kinesiology at Central Michigan University.</p>
<p>He's certified in Spinal Correction and Nutrition.</p>
<p>In practice he's adjusted thousands of patients.</p>
<p>He cares about his community. He gives back locally. And he listens.</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#f5f5f5] py-24 px-6 text-center">
<div className="max-w-4xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-16">Here's What Happens When You Book</h2>
<div className="flex flex-col gap-12 mb-12">
<div className="flex flex-col items-center">
<div className="h-10 w-10 bg-[#39CD84] text-white flex items-center justify-center rounded-full font-semibold mb-4">1</div>
<p className="text-lg text-slate-800 font-medium">You pick a time that works for you.</p>
</div>
<div className="flex flex-col items-center">
<div className="h-10 w-10 bg-[#39CD84] text-white flex items-center justify-center rounded-full font-semibold mb-4">2</div>
<p className="text-lg text-slate-800 font-medium">We do a full consultation and spinal exam.</p>
</div>
<div className="flex flex-col items-center">
<div className="h-10 w-10 bg-[#39CD84] text-white flex items-center justify-center rounded-full font-semibold mb-4">3</div>
<p className="text-lg text-slate-800 font-medium">Dr. Mike walks you through exactly what's going on and what can help.</p>
</div>
</div>
<p className="text-slate-500 font-medium text-base italic">No pressure. No commitment. Just answers.</p>
</div>
</section>

<section className="bg-[#1a1a1a] py-24 px-6 text-center" id="book">
<div className="max-w-3xl mx-auto">
<h2 className="text-4xl font-semibold text-white tracking-tight mb-6 leading-tight">Ready to Stop Living With the Pain?</h2>
<p className="text-lg text-slate-400 font-normal mb-10 max-w-xl mx-auto">
                Spots fill up fast. Book your consultation with Elite Family Chiropractic today.
            </p>
<div className="flex flex-col items-center">
<a className="bg-[#39CD84] hover:bg-[#2fb875] text-white font-semibold text-lg py-5 px-10 rounded-full transition-all duration-300 shadow-lg shadow-[#39CD84]/20 transform hover:-translate-y-0.5" href="#">
                    Click Here to Book Your Consultation
                </a>
<p className="text-slate-500 text-xs mt-4">
                    Serving Pearland and the greater Houston area. 3 convenient locations.
                </p>
</div>
</div>
</section>

<footer className="bg-[#1a1a1a] border-t border-white/5 py-16 px-6 text-center">
<div className="max-w-lg mx-auto">
<img alt="Elite Family Chiropractic" className="h-10 w-auto object-contain mx-auto mb-8 opacity-90" src="https://cdcssl.ibsrv.net/ibimg/smb/209x120_80/webmgr/1s/n/6/_img/elite-family-chiro-logo_white.png.webp"/>
<div className="text-slate-400 text-sm space-y-2">
<p className="font-semibold text-slate-300">Elite Family Chiropractic</p>
<div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 mt-4">
<p><span className="text-slate-500">East Pearland:</span> (281) 412-9642</p>
<p><span className="text-slate-500">West Pearland:</span> (281) 272-6899</p>
<p><span className="text-slate-500">Katy:</span> (832) 437-3414</p>
</div>
</div>
<div className="mt-12 text-slate-600 text-xs">
                ©  Elite Family Chiropractic. All Rights Reserved.
            </div>
</div>
</footer>

    </>
  );
}
