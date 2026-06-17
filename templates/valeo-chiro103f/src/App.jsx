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
      

<header className="py-12 flex justify-center">
<img alt="Valeo Logo" className="h-16 w-auto" src="https://valeowc.com/wp-content/uploads/2025/10/cropped-logo.webp"/>
</header>

<section className="max-w-4xl mx-auto px-6 text-center py-16 md:py-24">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#172E42] tracking-tight mb-8 leading-tight">
            Your Labs Say You're Fine.<br className="hidden md:block"/> But You Don't Feel Fine.
        </h1>
<p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Valeo Health and Wellness Center helps people in Eden Prairie find the real reason they feel stuck, drained, and dismissed. We find the root cause. And we fix it.
        </p>
<a className="inline-block bg-[#02A3A6] text-white font-medium text-lg px-8 py-5 rounded-full hover:brightness-110 transition-all shadow-sm" href="#">
            Click Here to Book Your Consultation
        </a>
</section>

<section className="max-w-5xl mx-auto px-6 mb-20">
<div className="relative w-full aspect-video bg-[#172E42] rounded-2xl flex items-center justify-center shadow-2xl group cursor-pointer overflow-hidden">
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all"></div>
<div className="flex flex-col items-center gap-4 z-10">
<iconify-icon className="text-white text-7xl md:text-8xl" icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-white font-medium tracking-wide uppercase text-sm">Watch This First</span>
</div>
</div>
<p className="text-center mt-6 text-[#02A3A6] text-sm md:text-base max-w-xl mx-auto">
            Dr. Aaron walks you through exactly how Valeo finds the root cause of your health issues, and what that means for you.
        </p>
</section>

<section className="max-w-4xl mx-auto px-6 text-center py-12">
<a className="inline-block bg-[#02A3A6] text-white font-medium text-lg px-8 py-5 rounded-full hover:brightness-110 transition-all shadow-sm" href="#">
            Click Here to Book Your Consultation
        </a>
<p className="mt-4 text-gray-500 text-sm italic">
            No pressure. No commitment. Just a real conversation about what's going on.
        </p>
</section>

<section className="max-w-3xl mx-auto px-6 py-24">
<h2 className="text-3xl font-semibold mb-12 tracking-tight">This is for you if...</h2>
<div className="space-y-8">
<div className="flex items-start gap-4">
<iconify-icon className="text-[#02A3A6] text-2xl mt-1" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-lg text-gray-700">You've seen doctor after doctor with no real answers.</p>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-[#02A3A6] text-2xl mt-1" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-lg text-gray-700">You've been told your labs are normal but you still feel terrible.</p>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-[#02A3A6] text-2xl mt-1" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-lg text-gray-700">You're dealing with fatigue, brain fog, gut issues, or chronic pain that won't quit.</p>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-[#02A3A6] text-2xl mt-1" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-lg text-gray-700">You're tired of being handed a prescription and sent home.</p>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-[#02A3A6] text-2xl mt-1" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-lg text-gray-700">You want someone to actually figure out why your body feels this way.</p>
</div>
</div>
</section>

<section className="bg-gray-50 py-24">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-3xl font-semibold mb-16 tracking-tight text-center">How Valeo Works</h2>
<div className="grid gap-12">
<div className="flex flex-col md:flex-row gap-6">
<div className="w-10 h-10 bg-[#172E42] text-white rounded-full flex items-center justify-center shrink-0 font-semibold">1</div>
<div>
<h3 className="text-xl font-semibold mb-2">We Listen</h3>
<p className="text-gray-600 leading-relaxed">We start with a full health history. We want to understand everything, not just your symptoms.</p>
</div>
</div>
<div className="flex flex-col md:flex-row gap-6">
<div className="w-10 h-10 bg-[#172E42] text-white rounded-full flex items-center justify-center shrink-0 font-semibold">2</div>
<div>
<h3 className="text-xl font-semibold mb-2">We Dig Deeper</h3>
<p className="text-gray-600 leading-relaxed">We use functional medicine, chiropractic neurology, and advanced testing to find what others missed.</p>
</div>
</div>
<div className="flex flex-col md:flex-row gap-6">
<div className="w-10 h-10 bg-[#172E42] text-white rounded-full flex items-center justify-center shrink-0 font-semibold">3</div>
<div>
<h3 className="text-xl font-semibold mb-2">We Build Your Plan</h3>
<p className="text-gray-600 leading-relaxed">Your care team builds a plan specific to you. Then we walk with you every step of the way.</p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 py-32">
<div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
<div className="w-full md:w-1/3">
<img alt="Dr. Aaron Morland" className="rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 shadow-xl w-full object-cover aspect-[4/5]" src="https://valeowc.com/wp-content/uploads/2020/11/Dr-Aaron.jpg"/>
</div>
<div className="w-full md:w-2/3">
<h2 className="text-3xl font-semibold mb-6 tracking-tight">Meet Dr. Aaron Morland</h2>
<div className="space-y-4 text-gray-600 leading-relaxed text-lg">
<p>Dr. Aaron has been helping people in Eden Prairie reclaim their health since 2004.</p>
<p>He graduated top of his class from Northwestern Health Sciences University.</p>
<p>He is trained in functional medicine, chiropractic neurology, and a range of advanced techniques most clinics don't offer.</p>
<p>He has helped thousands of patients who were told there was nothing more that could be done.</p>
<p className="italic text-[#172E42] font-medium">"He believes your body has the ability to heal. His job is to help it get there."</p>
</div>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 py-24 border-t border-gray-100">
<h2 className="text-3xl font-semibold mb-16 tracking-tight text-center">What Patients Are Saying</h2>
<div className="grid md:grid-cols-3 gap-8 mb-20">

<div className="bg-white p-8 border-l-4 border-[#02A3A6] shadow-sm flex flex-col justify-between h-full">
<p className="text-gray-700 italic mb-6">"I've been seeing Dr. Rob since January for issues I've had for years that haven't gone away after countless doctors and thousands of dollars. But 5 months under Dr. Rob's care all of it is gone and I'm feeling the best I've felt in years."</p>
<p className="font-semibold text-sm tracking-wide">— CAROLINA C.</p>
</div>

<div className="bg-white p-8 border-l-4 border-[#02A3A6] shadow-sm flex flex-col justify-between h-full">
<p className="text-gray-700 italic mb-6">"I came to Valeo looking for help as I was not getting better after trying other medical avenues. I needed to find out root causes and tend to the source of my gut issues."</p>
<p className="font-semibold text-sm tracking-wide">— JANELL W.</p>
</div>

<div className="bg-white p-8 border-l-4 border-[#02A3A6] shadow-sm flex flex-col justify-between h-full">
<p className="text-gray-700 italic mb-6">"I went to Dr. Morland because I was suffering with numbness in the left side of my face. It took 2 to 3 treatments and my problem was gone. I am very happy that I chose to see Dr. Morland."</p>
<p className="font-semibold text-sm tracking-wide">— ROBERTA N.</p>
</div>
</div>

<div className="w-full h-48 bg-[#172E42] rounded-xl flex items-center justify-center border-2 border-dashed border-[#02A3A6]/30">
<div className="text-center">
<iconify-icon className="text-white/40 text-4xl mb-2" icon="solar:videocamera-record-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-white/60 font-medium tracking-tight">Patient Video Testimonials — Coming Soon</p>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 py-32 text-center">
<h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight">Ready to Find Out What's Really Going On?</h2>
<p className="text-gray-500 mb-10 text-lg">Your first step is a simple consultation. No pressure. No hard sell.</p>
<a className="inline-block bg-[#02A3A6] text-white font-medium text-xl px-10 py-6 rounded-full hover:brightness-110 transition-all shadow-lg transform hover:-translate-y-1" href="#">
            Click Here to Book Your Consultation
        </a>
<div className="mt-12 flex flex-col items-center gap-2 text-gray-500 text-sm">
<p className="font-medium text-[#172E42]">Valeo Health and Wellness Center, Eden Prairie, MN</p>
<div className="flex items-center gap-2">
<iconify-icon icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
<a className="hover:underline" href="tel:9529490676">(952) 949-0676</a>
</div>
</div>
</section>

<footer className="bg-[#172E42] py-12">
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="mb-6 opacity-80 brightness-0 invert flex justify-center">
<img alt="Valeo Logo" className="h-10 w-auto" src="https://valeowc.com/wp-content/uploads/2025/10/cropped-logo.webp"/>
</div>
<p className="text-white/50 text-xs tracking-widest uppercase">
                © 2024 Valeo Health and Wellness Center. All Rights Reserved.
            </p>
</div>
</footer>

    </>
  );
}
