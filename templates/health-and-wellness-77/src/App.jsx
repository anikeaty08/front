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
      

<header className="py-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col items-center">
<img alt="Care Chiropractic Logo" className="h-16 md:h-20 w-auto mb-16" src="https://www.foundationschiropracticandwellnesscenter.com/wp-content/uploads/2019/05/Chiropractic-Murray-UT-Care-Chiropractic-and-Functional-Medicine-SCR-logo.webp"/>
<div className="max-w-3xl text-center space-y-6">
<h1 className="text-4xl md:text-6xl font-semibold text-slate-900 tracking-tight leading-tight">
                    Chronic Pain Doesn't Have to Be Your Normal.
                </h1>
<p className="text-lg md:text-xl font-normal text-slate-500 max-w-2xl mx-auto leading-relaxed">
                    Dr. Lindsay Hall uses a gentle, whole-body approach to help people in Murray finally get answers, and actually feel better.
                </p>
<div className="pt-8">
<a className="inline-flex items-center justify-center bg-teal-600 hover:bg-teal-700 text-white font-medium text-lg px-10 py-5 rounded-full transition-all duration-300 shadow-lg shadow-teal-900/10 hover:scale-[1.02]" href="#">
                        Click Here to Book Your Consultation
                    </a>
</div>
</div>
</div>
</header>

<section className="py-20 px-6 bg-slate-50/50 border-y border-slate-100">
<div className="max-w-4xl mx-auto text-center space-y-8">
<h2 className="text-sm font-semibold uppercase tracking-widest text-teal-600">Watch This First</h2>
<div className="relative aspect-video w-full rounded-2xl bg-slate-200 border border-slate-200 shadow-2xl overflow-hidden group cursor-pointer flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-tr from-teal-500/10 to-transparent"></div>
<iconify-icon className="text-teal-600 text-7xl md:text-8xl opacity-80 group-hover:scale-110 transition-transform" icon="solar:play-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="absolute bottom-4 left-4 right-4 h-1 bg-slate-300 rounded-full overflow-hidden">
<div className="w-1/3 h-full bg-teal-500"></div>
</div>
</div>
<p className="text-sm text-slate-500 italic">
                This short video explains exactly how we help patients who've tried everything else.
            </p>
<div className="pt-4">
<a className="inline-flex items-center justify-center bg-teal-600 hover:bg-teal-700 text-white font-medium text-lg px-10 py-5 rounded-full transition-all duration-300 shadow-lg shadow-teal-900/10 hover:scale-[1.02]" href="#">
                    Click Here to Book Your Consultation
                </a>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-3xl mx-auto text-center">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-16">This Is For You If...</h2>
<div className="space-y-8 text-lg text-slate-600">
<div className="flex flex-col items-center gap-2">
<iconify-icon className="text-teal-500 text-2xl" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<p>You've been dealing with neck or back pain for months or years.</p>
</div>
<div className="flex flex-col items-center gap-2">
<iconify-icon className="text-teal-500 text-2xl" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<p>You've tried other chiropractors and didn't get lasting results.</p>
</div>
<div className="flex flex-col items-center gap-2">
<iconify-icon className="text-teal-500 text-2xl" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<p>You're tired of being told everything looks fine when you know it doesn't.</p>
</div>
<div className="flex flex-col items-center gap-2">
<iconify-icon className="text-teal-500 text-2xl" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<p>You want someone who actually listens and builds a plan around you.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-50/50">
<div className="max-w-6xl mx-auto">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="absolute -inset-4 bg-teal-100 rounded-2xl rotate-2"></div>
<img alt="Dr. Lindsay Hall" className="relative rounded-2xl shadow-xl w-full object-cover aspect-[4/5]" src="https://www.foundationschiropracticandwellnesscenter.com/wp-content/uploads/2025/12/Chiropractor-Murray-UT-Lindsay-Hall-meet-the-team.webp"/>
</div>
<div className="space-y-6">
<h2 className="text-sm font-semibold uppercase tracking-widest text-teal-600">Meet Your Doctor</h2>
<h3 className="text-3xl font-semibold text-slate-900 tracking-tight">About Dr. Lindsay Hall</h3>
<div className="space-y-4 text-slate-600 leading-relaxed text-base">
<p>Dr. Lindsay Hall uses Gentle Adjusting, not manual cracking, for a safer, more relaxing experience.</p>
<p>She graduated Magna Cum Laude from Life Chiropractic College West and completed over 150 extra hours of functional medicine and nutrition training.</p>
<p>She has worked with patients from one month old to 85 years old.</p>
<p>And she built this practice specifically for people dealing with chronic pain, fibromyalgia, and conditions that conventional medicine hasn't been able to fix.</p>
<p className="font-medium text-slate-900">She understands what it feels like to watch someone you love suffer and not have answers. That's why she does this work.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-5xl mx-auto">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight text-center mb-20">A Thorough, Personalized Approach</h2>
<div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
<div className="text-center space-y-3">
<iconify-icon className="text-teal-500 text-3xl" icon="solar:heart-angle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h4 className="text-xl font-semibold text-slate-900">Gentle Chiropractic Care</h4>
<p className="text-slate-500 text-sm">No harsh manual adjustments. Full-body care that's safe and relaxing.</p>
</div>
<div className="text-center space-y-3">
<iconify-icon className="text-teal-500 text-3xl" icon="solar:test-tube-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h4 className="text-xl font-semibold text-slate-900">Functional Medicine</h4>
<p className="text-slate-500 text-sm">Lab-based nutrition and lifestyle plans built for your specific body.</p>
</div>
<div className="text-center space-y-3">
<iconify-icon className="text-teal-500 text-3xl" icon="solar:health-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h4 className="text-xl font-semibold text-slate-900">Cold Laser Therapy</h4>
<p className="text-slate-500 text-sm">Reduces pain and inflammation while speeding up tissue healing.</p>
</div>
<div className="text-center space-y-3">
<iconify-icon className="text-teal-500 text-3xl" icon="solar:accessibility-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h4 className="text-xl font-semibold text-slate-900">Advanced Posture Correction</h4>
<p className="text-slate-500 text-sm">Not the generic exercises you find online. A custom program based on your actual spinal curvature.</p>
</div>
<div className="md:col-span-2 text-center space-y-3 max-w-sm mx-auto">
<iconify-icon className="text-teal-500 text-3xl" icon="solar:stretching-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h4 className="text-xl font-semibold text-slate-900">Soft Tissue Work</h4>
<p className="text-slate-500 text-sm">Reduces muscle tension, spasm, and scar tissue to help you move better.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-50/50">
<div className="max-w-6xl mx-auto">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight text-center mb-16">What Patients Are Saying</h2>
<div className="grid md:grid-cols-2 gap-8">

<div className="bg-white p-10 rounded-2xl border border-teal-100 shadow-sm relative">
<iconify-icon className="text-teal-100 text-6xl absolute top-6 right-6 opacity-50" icon="solar:chat-round-quote-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="relative z-10 space-y-6">
<p className="text-lg italic text-slate-600 leading-relaxed">
                            "Dr. Hall has made a huge difference in my life. She has worked with me to improve the movement of my neck, my overall posture and has helped me with my feet. I didn't know what a difference one doctor could make in my overall health!"
                        </p>
<p className="text-sm font-semibold text-teal-600">— Margarette A.</p>
</div>
</div>

<div className="bg-white p-10 rounded-2xl border border-teal-100 shadow-sm relative">
<iconify-icon className="text-teal-100 text-6xl absolute top-6 right-6 opacity-50" icon="solar:chat-round-quote-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="relative z-10 space-y-6">
<p className="text-lg italic text-slate-600 leading-relaxed">
                            "I've had chronic neck and back pain for years. Dr. Hall worked on me several months ago and my neck is still much looser and my back feels great! She was so knowledgeable, professional and gentle."
                        </p>
<p className="text-sm font-semibold text-teal-600">— Adrienne H.</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-teal-600 py-24 px-6 text-white overflow-hidden relative">
<div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
<iconify-icon className="absolute -top-12 -left-12 text-9xl" icon="solar:star-fall-linear"></iconify-icon>
<iconify-icon className="absolute -bottom-12 -right-12 text-9xl" icon="solar:star-fall-linear"></iconify-icon>
</div>
<div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight">Ready to Feel Like Yourself Again?</h2>
<p className="text-lg text-teal-50 font-normal max-w-2xl mx-auto">
                Book a free consultation with Dr. Hall. We'll look at what's going on and put together a plan that's built for you.
            </p>
<div className="pt-6">
<a className="inline-flex items-center justify-center bg-white text-teal-700 hover:bg-teal-50 font-semibold text-lg px-12 py-5 rounded-full transition-all duration-300 shadow-xl shadow-teal-950/20" href="#">
                    Click Here to Book Your Consultation
                </a>
</div>
<div className="pt-12 space-y-2 text-sm text-teal-50">
<p className="font-semibold text-base">Care Chiropractic and Functional Medicine</p>
<p>5814 S 900 E, Murray, UT 84121</p>
<p>(385) 487-2664</p>
</div>
</div>
</section>

<footer className="py-16 px-6 text-center bg-white">
<div className="max-w-7xl mx-auto space-y-8">
<img alt="Care Chiropractic Logo" className="h-12 w-auto mx-auto opacity-80 grayscale hover:grayscale-0 transition-all" src="https://www.foundationschiropracticandwellnesscenter.com/wp-content/uploads/2019/05/Chiropractic-Murray-UT-Care-Chiropractic-and-Functional-Medicine-SCR-logo.webp"/>
<p className="text-xs text-slate-400 tracking-wide uppercase">
                © 2026, Care Chiropractic and Functional Medicine. All rights reserved.
            </p>
</div>
</footer>

    </>
  );
}
