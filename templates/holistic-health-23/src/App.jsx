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
      

<nav className="w-full py-6 px-6 md:px-12 flex justify-start items-center border-b border-slate-50">
<img alt="Align for Life" className="h-10 md:h-12 w-auto" src="https://alignforlife.com/wp-content/uploads/2025/05/version-1-png.png"/>
</nav>

<section className="max-w-6xl mx-auto px-6 pt-16 md:pt-24 pb-12 text-center">
<h1 className="text-3xl md:text-6xl font-semibold tracking-tight leading-tight text-slate-900 max-w-4xl mx-auto">
            Your Doctor Said Everything Looks Fine.<br/>
<span className="text-[#397D49]">But You Still Don't Feel Like Yourself.</span>
</h1>
<h2 className="text-base md:text-xl text-slate-500 mt-6 max-w-2xl mx-auto font-normal">
            Dr. Anthony Evans helps people in Overland Park uncover the real reason they feel off, and get their health back without more medications.
        </h2>
<div className="mt-10">
<a className="inline-flex items-center justify-center bg-[#397D49] text-white px-8 py-4 rounded-full text-sm font-medium hover:opacity-90 transition-all shadow-md group" href="#">
                Click Here to Book Your Free Consultation
                <iconify-icon className="ml-2" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 py-12">
<div className="aspect-video bg-slate-950 rounded-2xl shadow-2xl flex flex-col items-center justify-center relative group cursor-pointer overflow-hidden">

<div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-black/60 to-transparent">
<div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mb-4 border border-white/20 group-hover:scale-110 transition-transform">
<iconify-icon className="text-white text-3xl" icon="solar:play-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-white text-lg md:text-xl font-medium tracking-tight">Watch This First</span>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 pt-16 pb-8 text-center">
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">Real People. Real Results.</h3>
<p className="text-slate-500 mt-3 text-sm md:text-base">These are patients who came in with the same problems you might be dealing with right now.</p>
</section>

<section className="max-w-5xl mx-auto px-6 py-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="aspect-video rounded-2xl overflow-hidden bg-slate-100 shadow-sm border border-slate-100">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" className="w-full h-full" frameborder="0" src="https://www.youtube.com/embed/3eTTxkX7y7U"></iframe>
</div>
<div className="aspect-video rounded-2xl overflow-hidden bg-slate-100 shadow-sm border border-slate-100">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" className="w-full h-full" frameborder="0" src="https://www.youtube.com/embed/IVVvQeLUtZc"></iframe>
</div>
</div>
</section>

<section className="max-w-3xl mx-auto px-6 py-16 space-y-8">

<div className="bg-[#f7f9f7] p-8 md:p-10 rounded-2xl border border-slate-50">
<iconify-icon className="text-[#397D49] text-3xl mb-4" icon="solar:quote-left-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-slate-700 italic text-base md:text-lg leading-relaxed">
                "Two weeks in, my stomach issues were non-existent. My last two blood pressure readings have been 100/65 and 107/65. Although this is NOT a weight loss program, I am currently 28 pounds lighter than I was 6 months ago."
            </p>
<div className="mt-6 flex items-center gap-2">
<div className="h-px w-8 bg-[#397D49]/30"></div>
<span className="text-xs font-semibold tracking-widest text-[#397D49] uppercase">Claudia C., Patient</span>
</div>
</div>

<div className="bg-[#f7f9f7] p-8 md:p-10 rounded-2xl border border-slate-50">
<iconify-icon className="text-[#397D49] text-3xl mb-4" icon="solar:quote-left-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-slate-700 italic text-base md:text-lg leading-relaxed">
                "I was burned out, struggling with depression, anxiety, and poor sleep. Dr. Evans's holistic approach has helped me alleviate symptoms, think clearly, and make better lifestyle choices."
            </p>
<div className="mt-6 flex items-center gap-2">
<div className="h-px w-8 bg-[#397D49]/30"></div>
<span className="text-xs font-semibold tracking-widest text-[#397D49] uppercase">Jay O., Patient</span>
</div>
</div>

<div className="bg-[#f7f9f7] p-8 md:p-10 rounded-2xl border border-slate-50">
<iconify-icon className="text-[#397D49] text-3xl mb-4" icon="solar:quote-left-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-slate-700 italic text-base md:text-lg leading-relaxed">
                "He's very genuine and does not feel pushy or like a salesman."
            </p>
<div className="mt-6 flex items-center gap-2">
<div className="h-px w-8 bg-[#397D49]/30"></div>
<span className="text-xs font-semibold tracking-widest text-[#397D49] uppercase">Haylan T., Patient</span>
</div>
</div>
</section>

<section className="bg-white py-24 px-6 border-y border-slate-50">
<div className="max-w-3xl mx-auto text-center">
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12">Sound Like You?</h3>
<div className="space-y-4 text-base md:text-lg text-slate-700">
<p>Constant fatigue that sleep doesn't fix.</p>
<p>Brain fog that makes it hard to focus.</p>
<p>Bloating, digestive issues, or stomach pain your doctor can't explain.</p>
<p>Hormonal imbalances, weight struggles, or mood swings.</p>
<p>Autoimmune symptoms or chronic inflammation.</p>
<p>Blood sugar issues, high blood pressure, or heart health concerns.</p>
</div>
<div className="mt-12 pt-8 border-t border-slate-50">
<p className="text-lg font-medium text-[#397D49]">These aren't random problems. They're signals. And Dr. Evans knows how to read them.</p>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-24">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="relative">
<img alt="Dr. Anthony Evans" className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]" src="https://alignforlife.com/wp-content/uploads/2025/05/AWOLsystems_Align_for_life_chiropractic-4-2048x1366.jpg"/>
<div className="absolute -bottom-6 -right-6 bg-[#397D49] p-6 rounded-2xl hidden md:block">
<iconify-icon className="text-white text-4xl" icon="solar:heart-pulse-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="space-y-6">
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight">Meet Dr. Anthony Evans</h3>
<div className="space-y-4 text-slate-600 text-sm md:text-base leading-relaxed">
<p>Dr. Evans has over 18 years of experience in functional medicine, chiropractic care, and nutritional coaching.</p>
<p>He trained at the Institute for Functional Medicine and the Kalish Institute.</p>
<p className="font-medium text-slate-900 italic">He doesn't guess. He tests.</p>
<p>He finds the actual cause of what's going on in your body and builds a plan around that.</p>
<p>His patients don't just feel better for a few weeks. They understand their health for the first time.</p>
</div>
</div>
</div>
</section>

<section className="bg-[#397D49] py-20 px-6 text-center text-white">
<div className="max-w-3xl mx-auto">
<h3 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">Ready to Find Out What's Really Going On?</h3>
<div className="space-y-2 text-base md:text-xl opacity-90 mb-10">
<p>Book a free consultation with Dr. Evans.</p>
<p>It takes 15 minutes.</p>
<p>And it could change everything.</p>
</div>
<a className="inline-flex items-center justify-center bg-white text-[#397D49] px-10 py-5 rounded-full text-base font-semibold hover:bg-slate-50 transition-all shadow-xl" href="#">
                Click Here to Book Your Free Consultation
            </a>
</div>
</section>

<footer className="py-12 px-6 text-center text-slate-400">
<div className="max-w-4xl mx-auto space-y-2 text-xs md:text-sm">
<p>Align for Life, 7199 W 98th Terrace, Suite 130, Overland Park, KS 66212</p>
<p>(913) 356-9088 • hello@alignforlife.com</p>
<p className="font-medium text-slate-500 pt-2">alignforlife.com</p>
</div>
</footer>

    </>
  );
}
