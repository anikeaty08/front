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
      

<header className="py-8 flex justify-center">
<img alt="WAWChiro Logo" className="h-12 w-auto object-contain brightness-0 invert opacity-90" src="https://wawchiro.com/wp-content/uploads/2023/05/logo.png"/>
</header>

<section className="max-w-4xl mx-auto px-6 pt-12 pb-24 text-center">
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight mb-6">
            Your Back Pain Has a Source. <br className="hidden md:block"/> We Find It.
        </h1>
<p className="text-lg md:text-xl custom-teal font-medium mb-4 max-w-2xl mx-auto">
            Wellness Around The World Chiropractic uses precise spinal decompression therapy to target the real problem. Not just the pain.
        </p>
<p className="text-sm opacity-80 mb-10 tracking-wide uppercase">
            Serving Chamblee, Marietta, Stockbridge, and Riverdale
        </p>
<a className="inline-flex items-center justify-center px-8 py-4 bg-custom-teal text-white text-base font-medium rounded-lg transition-all hover:opacity-90 active:scale-95 shadow-lg shadow-[#507282]/20" href="#book">
            Click Here to Book Your Consultation
        </a>
</section>

<section className="max-w-5xl mx-auto px-6 pb-24">
<div className="text-center mb-6">
<span className="text-xs font-medium uppercase tracking-widest opacity-60 flex items-center justify-center gap-2">
<iconify-icon icon="solar:play-circle-linear" strokeWidth="1.5" width="1.5rem"></iconify-icon>
                Watch This First
            </span>
</div>
<div className="aspect-video w-full bg-zinc-900 rounded-2xl border border-zinc-800 flex items-center justify-center group cursor-pointer relative overflow-hidden">

<div className="z-10 bg-white/10 backdrop-blur-md p-6 rounded-full border border-white/20 transition-transform group-hover:scale-110">
<iconify-icon className="text-white" icon="solar:play-linear" strokeWidth="1.5" width="2rem"></iconify-icon>
</div>

<div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent"></div>
</div>
<p className="text-center mt-6 text-sm opacity-60 italic">
            Dr. Roger Holloway explains how spinal decompression works and who it helps most.
        </p>
</section>

<div className="bg-custom-teal py-4 px-6 text-center">
<p className="text-sm md:text-base font-medium tracking-wide">
            98% of patients recommend Wellness Around The World Chiropractic. Across 4 Atlanta-area locations.
        </p>
</div>

<section className="max-w-4xl mx-auto px-6 py-32">
<div className="grid md:grid-cols-2 gap-16 items-start">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8">
                    This Isn't a <br/> Quick Crack.
                </h2>
<div className="space-y-6 text-base opacity-80 leading-relaxed font-light">
<p>Spinal decompression is different.</p>
<p>It gently relieves pressure on irritated discs and nerves, creating space for healing to occur naturally.</p>
<p>It targets the source of your pain. Not just the symptoms you feel daily.</p>
<p>It's precise. It's controlled. And it's built specifically for disc-related conditions.</p>
<p>If your pain keeps coming back, this may be why.</p>
</div>
</div>
<div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl">
<iconify-icon className="custom-teal mb-4" icon="solar:health-linear" strokeWidth="1.5" width="3rem"></iconify-icon>
<h3 className="text-xl font-medium mb-4">Science-First Recovery</h3>
<p className="text-sm opacity-60 leading-relaxed">Our clinical approach utilizes decompression technology to create negative intradiscal pressure, promoting the retraction of bulging or herniated disc material.</p>
</div>
</div>
</section>

<section className="bg-zinc-950 py-32 px-6 border-y border-zinc-900">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight custom-teal mb-12">
                This Works Best If You Have...
            </h2>
<div className="grid md:grid-cols-2 gap-y-4 gap-x-12 text-left max-w-2xl mx-auto">
<div className="flex items-center gap-3 py-3 border-b border-zinc-900">
<iconify-icon className="custom-teal" icon="solar:check-circle-linear" strokeWidth="1.5" width="1.25rem"></iconify-icon>
<span className="text-base">Herniated or bulging discs</span>
</div>
<div className="flex items-center gap-3 py-3 border-b border-zinc-900">
<iconify-icon className="custom-teal" icon="solar:check-circle-linear" strokeWidth="1.5" width="1.25rem"></iconify-icon>
<span className="text-base">Degenerative disc disease</span>
</div>
<div className="flex items-center gap-3 py-3 border-b border-zinc-900">
<iconify-icon className="custom-teal" icon="solar:check-circle-linear" strokeWidth="1.5" width="1.25rem"></iconify-icon>
<span className="text-base">Lower back pain (recurrent)</span>
</div>
<div className="flex items-center gap-3 py-3 border-b border-zinc-900">
<iconify-icon className="custom-teal" icon="solar:check-circle-linear" strokeWidth="1.5" width="1.25rem"></iconify-icon>
<span className="text-base">Sciatica or nerve pain</span>
</div>
<div className="flex items-center gap-3 py-3 border-b border-zinc-900">
<iconify-icon className="custom-teal" icon="solar:check-circle-linear" strokeWidth="1.5" width="1.25rem"></iconify-icon>
<span className="text-base">Neck pain from disc pressure</span>
</div>
<div className="flex items-center gap-3 py-3 border-b border-zinc-900">
<iconify-icon className="custom-teal" icon="solar:check-circle-linear" strokeWidth="1.5" width="1.25rem"></iconify-icon>
<span className="text-base">Chronic unresponsive pain</span>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-32">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-16">What Patients Are Saying</h2>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-zinc-900 p-8 rounded-2xl flex flex-col justify-between border border-zinc-800">
<div>
<div className="flex gap-1 mb-6">
<iconify-icon className="custom-teal" icon="solar:star-bold" width="1rem"></iconify-icon>
<iconify-icon className="custom-teal" icon="solar:star-bold" width="1rem"></iconify-icon>
<iconify-icon className="custom-teal" icon="solar:star-bold" width="1rem"></iconify-icon>
<iconify-icon className="custom-teal" icon="solar:star-bold" width="1rem"></iconify-icon>
<iconify-icon className="custom-teal" icon="solar:star-bold" width="1rem"></iconify-icon>
</div>
<p className="text-sm leading-relaxed mb-6 opacity-80">"Professional staff who care about your health and well-being. The treatment you receive is top notch and above all else they strive to make you feel better leaving than when you came in."</p>
</div>
<span className="text-xs custom-teal font-medium uppercase tracking-widest">— Michael McGhee</span>
</div>

<div className="bg-zinc-900 p-8 rounded-2xl flex flex-col justify-between border border-zinc-800">
<div>
<div className="flex gap-1 mb-6">
<iconify-icon className="custom-teal" icon="solar:star-bold" width="1rem"></iconify-icon>
<iconify-icon className="custom-teal" icon="solar:star-bold" width="1rem"></iconify-icon>
<iconify-icon className="custom-teal" icon="solar:star-bold" width="1rem"></iconify-icon>
<iconify-icon className="custom-teal" icon="solar:star-bold" width="1rem"></iconify-icon>
<iconify-icon className="custom-teal" icon="solar:star-bold" width="1rem"></iconify-icon>
</div>
<p className="text-sm leading-relaxed mb-6 opacity-80">"The staff is very professional and helpful. The treatment section is very effective and efficient and you are seen before or at your appointment time."</p>
</div>
<span className="text-xs custom-teal font-medium uppercase tracking-widest">— Jazzmon Edmundson-Alleyne</span>
</div>

<div className="bg-zinc-900 p-8 rounded-2xl flex flex-col justify-between border border-zinc-800">
<div>
<div className="flex gap-1 mb-6">
<iconify-icon className="custom-teal" icon="solar:star-bold" width="1rem"></iconify-icon>
<iconify-icon className="custom-teal" icon="solar:star-bold" width="1rem"></iconify-icon>
<iconify-icon className="custom-teal" icon="solar:star-bold" width="1rem"></iconify-icon>
<iconify-icon className="custom-teal" icon="solar:star-bold" width="1rem"></iconify-icon>
<iconify-icon className="custom-teal" icon="solar:star-bold" width="1rem"></iconify-icon>
</div>
<p className="text-sm leading-relaxed mb-6 opacity-80">"Awesome customer service! And he knows what he's doing! Very knowledgeable and easy to talk to about my concerns."</p>
</div>
<span className="text-xs custom-teal font-medium uppercase tracking-widest">— Mara Anca</span>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-32 border-t border-zinc-900">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="relative">
<img alt="Dr. Roger Holloway" className="rounded-2xl w-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://wawchiro.com/wp-content/uploads/2019/11/roger.jpg"/>
<div className="absolute -bottom-4 -right-4 bg-custom-teal p-6 rounded-xl hidden md:block">
<iconify-icon className="text-white" icon="solar:verified-check-linear" strokeWidth="1.5" width="2rem"></iconify-icon>
</div>
</div>
<div>
<h2 className="text-3xl font-semibold tracking-tight mb-6">Dr. Roger Holloway, DC</h2>
<div className="space-y-4 text-base opacity-80 font-light leading-relaxed">
<p>Dr. Holloway has been treating patients in the Atlanta area since 2013, focusing on neurological and structural integrity.</p>
<p>He graduated from Life University School of Chiropractic in Marietta, Georgia, and is Activator Methods certified and trained in Functional Neurology.</p>
<p>His practice is built on three pillars: <span className="custom-teal font-medium">Loving. Giving. Serving.</span></p>
<p>He treats patients of all ages across four locations in metro Atlanta, bringing high-tech spinal solutions to the local community.</p>
</div>
</div>
</div>
</section>

<section className="bg-custom-teal py-24 px-6 text-center" id="book">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">
                Ready to Stop Masking the Pain?
            </h2>
<p className="text-lg text-white/90 mb-10 max-w-xl mx-auto">
                Book a free consultation with our team. We will review your situation and tell you if spinal decompression is right for you. No pressure. No obligation.
            </p>
<button className="bg-black text-white px-10 py-5 rounded-lg text-lg font-medium hover:bg-zinc-900 transition-all active:scale-95 shadow-2xl">
                Click Here to Book Your Consultation
            </button>
</div>
</section>

<footer className="bg-black py-16 px-6 text-center border-t border-zinc-900">
<div className="mb-6">
<p className="text-xs tracking-widest font-semibold uppercase mb-2">WAWCHIRO</p>
<p className="text-xs opacity-50">Wellness Around The World Chiropractic</p>
</div>
<div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs opacity-60 mb-6">
<span>Chamblee</span>
<span className="text-zinc-700">|</span>
<span>Marietta</span>
<span className="text-zinc-700">|</span>
<span>Stockbridge</span>
<span className="text-zinc-700">|</span>
<span>Riverdale</span>
</div>
<p className="text-sm font-medium mb-4">(678) 395-7646</p>
<a className="text-xs opacity-40 hover:opacity-100 transition-opacity" href="https://wawchiro.com">wawchiro.com</a>
</footer>

    </>
  );
}
