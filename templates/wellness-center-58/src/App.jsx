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
      

<nav className="w-full py-6 px-6 md:px-12">
<div className="max-w-7xl mx-auto flex items-center justify-start">
<img alt="Back In Health Wellness Center" className="h-12 md:h-16 w-auto object-contain" src="https://backinhealthwellness.com/df_media/W1siZiIsIjIwMjYvMDQvMTIvMTAvNDUvMjUvOGUxODUwNjMtNjI5Yi00N2I5LWExZDMtZTBhOTAxZjY4NGM4L2ZpbGUiXSxbInAiLCJ0aHVtYiIsIjYwMHg2MDBcdTAwM2UiXSxbInAiLCJ0cmltIl1d?sha=acc1f24e70b5fc22"/>
</div>
</nav>

<section className="relative pt-16 pb-20 md:pt-24 md:pb-32 px-6">
<div className="max-w-4xl mx-auto text-center">
<h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight mb-6">
                You've Been Dealing With This Pain Long Enough.
            </h1>
<p className="text-base md:text-xl text-zinc-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                Back In Health Wellness Center helps people in the Lutz and Tampa area finally get to the root of what's going on, and start feeling like themselves again.
            </p>
<div className="flex flex-col items-center gap-4">
<a className="bg-magenta text-white text-base md:text-lg font-semibold px-8 md:px-12 py-5 rounded-full shadow-lg shadow-pink-200 hover:scale-105 transition-transform inline-block" href="#">
                    Click Here to Book Your Consultation
                </a>
<p className="text-green text-sm flex items-center gap-2">
<iconify-icon icon="solar:check-circle-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
                    No obligation. Just a real conversation about what's going on with your health.
                </p>
</div>
</div>
</section>

<section className="py-12 md:py-20 px-6 bg-zinc-50">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-8">
<span className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-2 block">Watch This First — It'll Make Everything Click</span>
</div>

<div className="aspect-video w-full bg-zinc-900 rounded-2xl shadow-2xl flex items-center justify-center relative overflow-hidden group cursor-pointer">
<div className="absolute inset-0 bg-zinc-800 flex items-center justify-center">
<iconify-icon className="text-white opacity-40 group-hover:opacity-100 transition-opacity" icon="solar:play-circle-linear" style={{fontSize: '5rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div className="mt-8 text-center">
<p className="text-base italic text-zinc-500 mb-10">
                    Dr. Cindy explains exactly how Back In Health is different, and what getting your life back actually looks like.
                </p>
<a className="bg-magenta text-white text-base md:text-lg font-semibold px-8 md:px-12 py-5 rounded-full shadow-lg shadow-pink-200 hover:scale-105 transition-transform inline-block" href="#">
                    Click Here to Book Your Consultation
                </a>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-3xl mx-auto">
<h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-center mb-12">Sound familiar?</h2>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<iconify-icon className="text-green mt-1 flex-shrink-0" icon="solar:check-read-linear" style={{fontSize: '1.5rem'}}></iconify-icon>
<span className="text-base md:text-lg text-zinc-700">You've been in pain for months, maybe years.</span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-green mt-1 flex-shrink-0" icon="solar:check-read-linear" style={{fontSize: '1.5rem'}}></iconify-icon>
<span className="text-base md:text-lg text-zinc-700">Your doctor ran tests and said everything looks "normal."</span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-green mt-1 flex-shrink-0" icon="solar:check-read-linear" style={{fontSize: '1.5rem'}}></iconify-icon>
<span className="text-base md:text-lg text-zinc-700">You're tired of just managing symptoms.</span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-green mt-1 flex-shrink-0" icon="solar:check-read-linear" style={{fontSize: '1.5rem'}}></iconify-icon>
<span className="text-base md:text-lg text-zinc-700">You want someone to actually look at the whole picture.</span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-green mt-1 flex-shrink-0" icon="solar:check-read-linear" style={{fontSize: '1.5rem'}}></iconify-icon>
<span className="text-base md:text-lg text-zinc-700">You're ready to feel good again, not just okay.</span>
</li>
</ul>
<p className="mt-12 text-center text-lg md:text-xl font-medium text-zinc-800">
                That's exactly what Dr. Cindy and the team at Back In Health are here for.
            </p>
</div>
</section>

<section className="py-24 px-6 border-t border-zinc-100">
<div className="max-w-7xl mx-auto">
<h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-center mb-16">Three ways we help you feel like yourself again.</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-8 rounded-3xl bg-white border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
<iconify-icon className="text-green mb-6 block" icon="solar:health-linear" style={{fontSize: '2.5rem'}}></iconify-icon>
<h3 className="text-xl font-semibold mb-4 tracking-tight">Chiropractic Care</h3>
<p className="text-zinc-600 leading-relaxed text-sm">Restore how your body moves. Reduce discomfort. Help your body heal the way it's designed to.</p>
</div>

<div className="p-8 rounded-3xl bg-white border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
<iconify-icon className="text-green mb-6 block" icon="solar:tuning-square-2-linear" style={{fontSize: '2.5rem'}}></iconify-icon>
<h3 className="text-xl font-semibold mb-4 tracking-tight">Acupuncture</h3>
<p className="text-zinc-600 leading-relaxed text-sm">A natural way to ease pain, improve your sleep, and get your energy back.</p>
</div>

<div className="p-8 rounded-3xl bg-white border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
<iconify-icon className="text-green mb-6 block" icon="solar:leaf-linear" style={{fontSize: '2.5rem'}}></iconify-icon>
<h3 className="text-xl font-semibold mb-4 tracking-tight">Functional Medicine</h3>
<p className="text-zinc-600 leading-relaxed text-sm">We look at the root cause, not just the symptom. Personalized care based on what your body actually needs.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white overflow-hidden">
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="relative group">
<div className="absolute -inset-4 bg-zinc-50 rounded-3xl -z-10 group-hover:bg-zinc-100 transition-colors"></div>
<img alt="Dr. Cindy Perkins" className="w-full h-auto rounded-2xl shadow-xl hover:scale-[1.01] transition-all duration-500 object-cover aspect-[4/5]" src="https://assets-jane-usw2-6.janeapp.net/pub/W1siZiIsImRyYWdvbmZseS8xOTEzMS91c2VyL3Bob3RvLzIwMjAtMTEtMjIvMDQ0MDQ1Lzg0ZTQ5NGZkLTcxZDctNGI1OS04YmMzLWJlZDEzNmQxMWYwOC9DaW5keSBIZWFkc2hvdC5qcGciXSxbInAiLCJ0aHVtYiIsIjgwMHgxMDQwIyJdXQ?sha=42c7f3faec3d04ea&amp;for=backinhealthwellness.janeapp.com"/>
</div>
<div>
<span className="text-xs font-semibold text-green uppercase tracking-widest mb-4 block">Your Doctor</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8">Dr. Cindy Perkins, DC, MBA, CFMP</h2>
<div className="space-y-6 text-zinc-600 text-sm md:text-base leading-relaxed">
<p>Dr. Cindy has been helping people in Lutz and the Tampa Bay area since 2007.</p>
<p>She is a chiropractor, acupuncturist, and certified functional medicine practitioner.</p>
<p>She treats patients of all ages, from kids to seniors, because she genuinely loves what she does.</p>
<p>Her approach is simple. She listens. She looks at the whole picture. And she builds a plan around you, not a generic protocol.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-zinc-50">
<div className="max-w-7xl mx-auto">
<h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-center mb-16">Here's what patients are saying.</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl shadow-sm">
<div className="flex text-yellow-400 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-zinc-700 italic leading-relaxed mb-6">"From day one, Cindy and the entire team have been incredibly kind, professional, and welcoming. They truly take the time to listen, explain everything clearly, and make sure you feel comfortable at every visit."</p>
<p className="text-xs font-semibold text-zinc-500">— Verified Patient, Lutz FL</p>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm">
<div className="flex text-yellow-400 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-zinc-700 italic leading-relaxed mb-6">"I have been coming to this wonderful facility for 3 years now and have never walked away disappointed. Results are evident and I always leave feeling better and well taken care of."</p>
<p className="text-xs font-semibold text-zinc-500">— Amber W., Patient</p>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm">
<div className="flex text-yellow-400 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-zinc-700 italic leading-relaxed mb-6">"So happy with Dr. Cindy. She has seen me at my worst and as always helped me, even after surgery."</p>
<p className="text-xs font-semibold text-zinc-500">— Joyce S., Patient</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white">
<div className="max-w-5xl mx-auto">
<h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-center mb-16">Getting started is easy.</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-center relative">

<div className="hidden md:block absolute top-8 left-[20%] right-[20%] h-px bg-zinc-100 -z-10"></div>
<div className="flex flex-col items-center">
<div className="w-16 h-16 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center text-xl font-semibold text-magenta mb-6 bg-white z-10 shadow-sm">1</div>
<h3 className="text-lg font-semibold mb-3">Book Your Consultation</h3>
<p className="text-zinc-500 text-sm">Pick a time that works for you. Takes two minutes.</p>
</div>
<div className="flex flex-col items-center">
<div className="w-16 h-16 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center text-xl font-semibold text-magenta mb-6 bg-white z-10 shadow-sm">2</div>
<h3 className="text-lg font-semibold mb-3">Tell Us What's Going On</h3>
<p className="text-zinc-500 text-sm">We listen. No rushing. No judgment. Just your story.</p>
</div>
<div className="flex flex-col items-center">
<div className="w-16 h-16 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center text-xl font-semibold text-magenta mb-6 bg-white z-10 shadow-sm">3</div>
<h3 className="text-lg font-semibold mb-3">Get Your Personal Plan</h3>
<p className="text-zinc-500 text-sm">Dr. Cindy builds a care plan around your specific needs.</p>
</div>
</div>
</div>
</section>

<section className="bg-magenta py-20 px-6">
<div className="max-w-4xl mx-auto text-center text-white">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">Ready to finally feel better?</h2>
<p className="text-lg md:text-xl mb-10 opacity-90">Book a free consultation with Dr. Cindy and the Back In Health team today.</p>
<a className="bg-white text-magenta text-base md:text-lg font-semibold px-10 md:px-16 py-5 rounded-full hover:bg-zinc-50 transition-colors inline-block shadow-xl mb-6" href="#">
                Click Here to Book Your Consultation
            </a>
<p className="text-xs italic opacity-80 block mt-4">
                Back In Health Wellness Center, Lutz FL, serving the greater Tampa Bay area since 2007.
            </p>
</div>
</section>

<footer className="bg-zinc-900 py-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
<div className="text-white text-sm tracking-tight font-semibold flex items-center gap-2">
<span className="tracking-tighter text-xl">BACK IN HEALTH</span>
</div>
<div className="text-zinc-400 text-xs md:text-sm max-w-sm">
                18942 N Dale Mabry Hwy #102, Lutz, FL 33548 <br className="hidden md:block"/>
<span className="md:mx-2 hidden md:inline">|</span> 
                (813) 909-0961
            </div>
<div className="text-zinc-500 text-xs hover:text-white transition-colors">
<a href="#">Privacy Policy</a>
</div>
</div>
</footer>

    </>
  );
}
