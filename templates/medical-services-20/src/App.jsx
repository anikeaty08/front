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
      

<header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-zinc-100 py-3 md:py-4">
<div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
<img alt="RESTORE Logo" className="h-8 md:h-10 mix-blend-multiply" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_JiMza3B1227focsMy8RhBCx9L957_TZa9g&amp;s"/>
<a className="gold-gradient text-white text-xs md:text-sm font-semibold py-2.5 px-5 rounded-full hover:opacity-90 transition-all" href="#consultation">
                Free Consultation
            </a>
</div>
</header>

<section className="pt-16 pb-24 md:pt-24 md:pb-32 px-6 text-center">
<div className="max-w-4xl mx-auto">
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-tight mb-8">
                Get Your Hair Back. For Good.
            </h1>
<p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed">
                RESTORE Hair has performed over <span className="gold-text font-medium">20,000 no-shave FUE procedures</span>. Natural results. No scars. No shaving. One day.
            </p>
<div className="flex flex-col items-center gap-4">
<a className="gold-gradient text-white text-base md:text-lg font-semibold py-4 px-10 rounded-full hover:scale-105 transition-transform shadow-xl shadow-amber-200/20" href="#consultation">
                    Click Here to Book Your Free Consultation
                </a>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 pb-24">
<div className="relative aspect-video bg-zinc-900 rounded-2xl overflow-hidden group cursor-pointer flex items-center justify-center border border-zinc-200 shadow-2xl">
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
<div className="relative z-10 flex flex-col items-center">
<div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#B49157] flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
<iconify-icon height="40" icon="solar:play-bold" style={{strokeWidth: '1.5'}} width="40"></iconify-icon>
</div>
</div>
</div>
<p className="text-center mt-6 text-sm text-zinc-400 font-medium tracking-wide flex items-center justify-center gap-2">
<iconify-icon className="gold-text" icon="solar:videocamera-record-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
            WATCH: REAL RESTORE PATIENTS SHARE THEIR RESULTS
        </p>
</section>

<section className="border-y border-zinc-100 py-12 px-6">
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
<div className="flex flex-col items-center text-center">
<iconify-icon className="gold-text mb-3" icon="solar:medal-ribbon-bold-duotone" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
<span className="text-sm font-semibold tracking-wide uppercase">20,000+ Procedures Performed</span>
</div>
<div className="flex flex-col items-center text-center">
<div className="flex gap-0.5 mb-3">
<iconify-icon className="gold-text" icon="solar:star-bold" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<iconify-icon className="gold-text" icon="solar:star-bold" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<iconify-icon className="gold-text" icon="solar:star-bold" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<iconify-icon className="gold-text" icon="solar:star-bold" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<iconify-icon className="gold-text" icon="solar:star-bold" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<span className="text-sm font-semibold tracking-wide uppercase">4.9 Stars — Google, Facebook &amp; Yelp</span>
</div>
<div className="flex flex-col items-center text-center">
<iconify-icon className="gold-text mb-3" icon="solar:history-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
<span className="text-sm font-semibold tracking-wide uppercase">25 Years of Excellence</span>
</div>
</div>
</section>

<section className="py-24 px-6 bg-zinc-50/50">
<div className="max-w-5xl mx-auto text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12">The Pros Can Go Anywhere. They Come to RESTORE.</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
<div className="p-6 rounded-xl bg-white border border-zinc-100 shadow-sm">
<p className="font-semibold text-lg">Brian Urlacher</p>
<p className="text-xs text-zinc-500 uppercase tracking-widest mt-1">NFL Hall of Famer</p>
</div>
<div className="p-6 rounded-xl bg-white border border-zinc-100 shadow-sm">
<p className="font-semibold text-lg">Deion Sanders</p>
<p className="text-xs text-zinc-500 uppercase tracking-widest mt-1">NFL Hall of Famer</p>
</div>
<div className="p-6 rounded-xl bg-white border border-zinc-100 shadow-sm">
<p className="font-semibold text-lg">Ian Happ</p>
<p className="text-xs text-zinc-500 uppercase tracking-widest mt-1">MLB Professional</p>
</div>
</div>
<p className="text-sm italic text-zinc-400">Featured on ESPN, NBC Sports, Fox Sports, GQ, and Esquire.</p>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-16">Real Patients. Real Results.</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="aspect-video rounded-xl overflow-hidden shadow-lg">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" className="w-full h-full" frameborder="0" src="https://www.youtube.com/embed/Sx3Y8b51kqs" title="YouTube video"></iframe>
</div>
<div className="aspect-video rounded-xl overflow-hidden shadow-lg">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" className="w-full h-full" frameborder="0" src="https://www.youtube.com/embed/BJb3PjjG9ls" title="YouTube video"></iframe>
</div>
<div className="aspect-video rounded-xl overflow-hidden shadow-lg">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" className="w-full h-full" frameborder="0" src="https://www.youtube.com/embed/Mbtj4mpSpJU" title="YouTube video"></iframe>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-zinc-50">
<div className="max-w-6xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-16">What RESTORE Patients Are Saying</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100 flex flex-col justify-between">
<div>
<div className="flex gap-1 mb-6">
<iconify-icon className="gold-text" icon="solar:star-bold" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<iconify-icon className="gold-text" icon="solar:star-bold" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<iconify-icon className="gold-text" icon="solar:star-bold" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<iconify-icon className="gold-text" icon="solar:star-bold" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<iconify-icon className="gold-text" icon="solar:star-bold" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
<p className="text-zinc-600 leading-relaxed mb-8">"This was one of the best decisions I've ever made. The transformation after just 4 to 6 months was incredible."</p>
</div>
<p className="text-xs font-semibold tracking-widest uppercase text-zinc-400">— Lee G., RESTORE Client</p>
</div>
<div className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100 flex flex-col justify-between">
<div>
<div className="flex gap-1 mb-6">
<iconify-icon className="gold-text" icon="solar:star-bold" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<iconify-icon className="gold-text" icon="solar:star-bold" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<iconify-icon className="gold-text" icon="solar:star-bold" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<iconify-icon className="gold-text" icon="solar:star-bold" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<iconify-icon className="gold-text" icon="solar:star-bold" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
<p className="text-zinc-600 leading-relaxed mb-8">"My hairline looks natural, full, and I'm so happy with the results."</p>
</div>
<p className="text-xs font-semibold tracking-widest uppercase text-zinc-400">— Tyler H., RESTORE Client</p>
</div>
<div className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100 flex flex-col justify-between">
<div>
<div className="flex gap-1 mb-6">
<iconify-icon className="gold-text" icon="solar:star-bold" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<iconify-icon className="gold-text" icon="solar:star-bold" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<iconify-icon className="gold-text" icon="solar:star-bold" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<iconify-icon className="gold-text" icon="solar:star-bold" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<iconify-icon className="gold-text" icon="solar:star-bold" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
<p className="text-zinc-600 leading-relaxed mb-8">"Even though my procedure lasted almost 10 hours, it seemed like a couple hours at max."</p>
</div>
<p className="text-xs font-semibold tracking-widest uppercase text-zinc-400">— Tye A., RESTORE Client</p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
<div className="w-full md:w-5/12">
<div className="relative">
<div className="absolute -inset-4 border-2 gold-border rounded-2xl opacity-20 -z-10"></div>
<img alt="Dr. James Harris" className="rounded-2xl shadow-2xl w-full object-cover aspect-[3/4]" src="https://restorehair.com/wp-content/uploads/2024/10/dr_harris_scott-768x1282-1-613x1024.webp"/>
</div>
</div>
<div className="w-full md:w-7/12">
<span className="gold-text text-xs font-semibold tracking-widest uppercase mb-4 block">Medical Authority</span>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-8">Meet Dr. James Harris</h2>
<div className="space-y-6 text-zinc-600 leading-relaxed text-lg">
<p>Dr. Harris didn't just master hair restoration. <span className="text-zinc-900 font-medium">He invented the tools the entire industry uses.</span></p>
<p>He created the Harris S.A.F.E. System. It's now used by doctors worldwide. He received the ISHRS Golden Follicle Award, the highest honor in hair restoration.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-zinc-900 text-white rounded-t-[3rem]">
<div className="max-w-6xl mx-auto text-center mb-20">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight">Here's How It Works</h2>
</div>
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
<div className="text-center group">
<div className="w-16 h-16 rounded-full border border-zinc-700 flex items-center justify-center text-2xl font-semibold gold-text mx-auto mb-8 group-hover:bg-[#B49157] group-hover:text-white transition-all">1</div>
<h3 className="text-xl font-semibold mb-4">Book a Free Consultation</h3>
<p className="text-zinc-400 leading-relaxed">Tell us about your hair loss. We'll map out exactly what's possible for you.</p>
</div>
<div className="text-center group">
<div className="w-16 h-16 rounded-full border border-zinc-700 flex items-center justify-center text-2xl font-semibold gold-text mx-auto mb-8 group-hover:bg-[#B49157] group-hover:text-white transition-all">2</div>
<h3 className="text-xl font-semibold mb-4">Get Your Custom Plan</h3>
<p className="text-zinc-400 leading-relaxed">Dr. Harris and his team design your procedure. No shaving required.</p>
</div>
<div className="text-center group">
<div className="w-16 h-16 rounded-full border border-zinc-700 flex items-center justify-center text-2xl font-semibold gold-text mx-auto mb-8 group-hover:bg-[#B49157] group-hover:text-white transition-all">3</div>
<h3 className="text-xl font-semibold mb-4">Walk Out With Your Hair</h3>
<p className="text-zinc-400 leading-relaxed">Same day procedure. Natural results. No scars. No one will know but you.</p>
</div>
</div>
</section>

<section className="py-32 px-6 text-center bg-white" id="consultation">
<div className="max-w-4xl mx-auto">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">Ready to Get Your Hair Back?</h2>
<p className="text-lg md:text-xl text-zinc-500 mb-12">Book your free consultation today. No pressure. No obligation. Just answers.</p>
<a className="gold-gradient text-white text-lg md:text-xl font-semibold py-5 px-12 rounded-full inline-block hover:scale-105 transition-transform shadow-2xl shadow-amber-200/40 mb-8" href="#">
                Click Here to Book Your Free Consultation
            </a>
<p className="text-xs text-zinc-400 uppercase tracking-widest flex items-center justify-center gap-3">
<iconify-icon className="gold-text" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Chicago, Charlotte, Dallas, Denver, and NYC
            </p>
</div>
</section>

<footer className="py-16 px-6 border-t border-zinc-100 flex flex-col items-center">
<img alt="RESTORE Logo" className="h-8 opacity-60 mb-8 mix-blend-multiply" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_JiMza3B1227focsMy8RhBCx9L957_TZa9g&amp;s"/>
<p className="text-xs text-zinc-400 tracking-wide text-center uppercase">
            © 2026 RESTORE Hair. Restoration Holdings LLC.
        </p>
</footer>

    </>
  );
}
