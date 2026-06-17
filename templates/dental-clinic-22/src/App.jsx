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
      

<nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-indigo-200">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2.5 group" href="#">

<svg className="w-8 h-8 text-slate-900 transition-transform group-hover:scale-95 duration-300" fill="none" viewbox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
<rect fill="currentColor" height="32" rx="8" width="32"></rect>
<path d="M16 6C16 6 18.5 12.5 24 16C18.5 19.5 16 26 16 26C16 26 13.5 19.5 8 16C13.5 12.5 16 6 16 6Z" fill="white"></path>
</svg>
<span className="text-lg font-semibold tracking-tight text-indigo-900">LUMINA.</span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-indigo-500">
<a className="hover:text-indigo-900 transition-colors" href="#implants">Implants</a>
<a className="hover:text-indigo-900 transition-colors" href="#cosmetic">Cosmetic</a>
<a className="hover:text-indigo-900 transition-colors" href="#about">About</a>
<a className="hover:text-blue-600 transition-colors" href="#assessment">Assessment</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-indigo-900 font-medium text-sm hover:text-blue-600 transition-colors" href="tel:+15551234567">
<iconify-icon icon="lucide:phone" strokeWidth="1.5" width="16"></iconify-icon>
                    (555) 123-4567
                </a>
<a className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-indigo-900 rounded-lg hover:bg-indigo-800 transition-all focus:ring-4 focus:ring-indigo-200" href="tel:+15551234567">
                    Book Now
                </a>
</div>
</div>
</nav>

<section className="md:pt-48 md:pb-32 bg-indigo-50 border-indigo-200 border-b pt-32 pb-20">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                    Accepting New Patients in [Local Area]
                </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-indigo-900 mb-8 leading-[1.1]">
                    Reclaim the confidence of a permanent smile.
                </h1>
<p className="text-lg md:text-xl text-indigo-500 leading-relaxed max-w-2xl mb-10">
                    Specialized restorative and cosmetic dentistry for adults who refuse to compromise on quality. Experience precision care designed to last a lifetime.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center h-12 px-8 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-200" href="tel:+15551234567">
<iconify-icon className="mr-2" icon="lucide:phone-call" width="18"></iconify-icon>
                        Call to Schedule
                    </a>
<a className="inline-flex items-center justify-center h-12 px-8 text-base font-medium text-indigo-700 bg-white border border-indigo-200 rounded-lg hover:bg-indigo-50 transition-all" href="#services">
                        View Services
                    </a>
</div>
<div className="mt-12 flex items-center gap-6 text-sm text-indigo-500">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-indigo-200 border-2 border-white"></div>
<div className="w-8 h-8 rounded-full bg-indigo-300 border-2 border-white"></div>
<div className="w-8 h-8 rounded-full bg-indigo-400 border-2 border-white"></div>
</div>
<p>Trusted by 500+ local families</p>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 bg-white">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-indigo-900 mb-6">
                    Dental care without the anxiety.
                </h2>
<div className="space-y-8">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center text-pink-600 shrink-0">
<iconify-icon icon="lucide:x" width="20"></iconify-icon>
</div>
<div>
<h3 className="font-medium text-indigo-900 mb-1">Stop hiding your teeth</h3>
<p className="text-indigo-500 text-sm leading-relaxed">Missing teeth or discoloration shouldn't dictate how you express yourself socially or professionally.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center text-pink-600 shrink-0">
<iconify-icon icon="lucide:x" width="20"></iconify-icon>
</div>
<div>
<h3 className="font-medium text-indigo-900 mb-1">Avoid "patchwork" dentistry</h3>
<p className="text-indigo-500 text-sm leading-relaxed">We fix the root cause with comprehensive plans, preventing the cycle of recurring dental issues.</p>
</div>
</div>
</div>
</div>
<div className="bg-indigo-50 rounded-2xl p-8 border border-indigo-100">
<h3 className="text-lg font-semibold text-indigo-900 mb-6">The Lumina Standard</h3>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-indigo-600">
<iconify-icon className="text-blue-600" icon="lucide:check-circle-2" width="20"></iconify-icon>
<span>Comprehensive diagnostics &amp; imaging</span>
</li>
<li className="flex items-center gap-3 text-indigo-600">
<iconify-icon className="text-blue-600" icon="lucide:check-circle-2" width="20"></iconify-icon>
<span>Sedation options for total comfort</span>
</li>
<li className="flex items-center gap-3 text-indigo-600">
<iconify-icon className="text-blue-600" icon="lucide:check-circle-2" width="20"></iconify-icon>
<span>Transparent, upfront pricing</span>
</li>
<li className="flex items-center gap-3 text-indigo-600">
<iconify-icon className="text-blue-600" icon="lucide:check-circle-2" width="20"></iconify-icon>
<span>Focus on longevity and aesthetics</span>
</li>
</ul>
<div className="mt-8 pt-8 border-t border-indigo-200">
<p className="text-sm text-indigo-500 mb-4">Ready for a different experience?</p>
<a className="text-blue-600 font-medium hover:text-blue-700 flex items-center gap-1" href="tel:+15551234567">
                        Speak with our coordinator <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 bg-indigo-50 border-y border-indigo-200" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:mb-24 max-w-2xl">
<h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">Clinical Excellence</h2>
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-indigo-900">Precision treatments tailored to your goals.</h3>
</div>

<div className="bg-white rounded-2xl border border-indigo-200 overflow-hidden shadow-sm mb-8 grid md:grid-cols-2" id="implants">
<div className="p-8 md:p-12 flex flex-col justify-center">
<div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6">
<iconify-icon icon="lucide:anchor" width="24"></iconify-icon>
</div>
<h4 className="text-2xl font-semibold text-indigo-900 mb-4">Dental Implants &amp; Restoration</h4>
<p className="text-indigo-600 mb-8 leading-relaxed">
                        The gold standard for replacing missing teeth. Unlike dentures, our implants provide a permanent, stable foundation that looks, feels, and functions like natural teeth. Eat what you want and speak with absolute clarity.
                    </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-2 text-sm text-indigo-500">
<iconify-icon className="text-cyan-500" icon="lucide:check" width="16"></iconify-icon> Single tooth replacement
                        </li>
<li className="flex items-center gap-2 text-sm text-indigo-500">
<iconify-icon className="text-cyan-500" icon="lucide:check" width="16"></iconify-icon> Full arch restoration (All-on-4)
                        </li>
<li className="flex items-center gap-2 text-sm text-indigo-500">
<iconify-icon className="text-cyan-500" icon="lucide:check" width="16"></iconify-icon> Bone grafting &amp; sinus lifts
                        </li>
</ul>
<div>
<a className="inline-flex items-center justify-center h-10 px-6 text-sm font-medium text-white bg-indigo-900 rounded-lg hover:bg-indigo-800 transition-all" href="tel:+15551234567">
                            Request Implant Consult
                        </a>
</div>
</div>
<div className="bg-indigo-100 border-l border-indigo-200 flex items-center justify-center min-h-[300px]">

<div className="text-indigo-300 flex flex-col items-center">
<iconify-icon icon="lucide:activity" strokeWidth="1" width="64"></iconify-icon>
<span className="mt-4 text-sm font-medium text-indigo-400">Precision Guided Surgery</span>
</div>
</div>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="bg-white rounded-2xl border border-indigo-200 p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow" id="cosmetic">
<div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-6">
<iconify-icon icon="lucide:sparkles" width="20"></iconify-icon>
</div>
<h4 className="text-xl font-semibold text-indigo-900 mb-3">Cosmetic Dentistry</h4>
<p className="text-indigo-600 text-sm mb-6 leading-relaxed">
                        Subtle enhancements or dramatic transformations. We design smiles that complement your facial features using high-grade porcelain veneers, professional whitening, and bonding.
                    </p>
<a className="text-blue-600 text-sm font-medium hover:text-blue-700 flex items-center gap-1" href="tel:+15551234567">
                        Book Cosmetic Consult <iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>
</a>
</div>

<div className="bg-white rounded-2xl border border-indigo-200 p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center mb-6">
<iconify-icon icon="lucide:shield-check" width="20"></iconify-icon>
</div>
<h4 className="text-xl font-semibold text-indigo-900 mb-3">General &amp; Preventive Care</h4>
<p className="text-indigo-600 text-sm mb-6 leading-relaxed">
                        Maintaining oral health is the foundation of a great smile. We offer rigorous hygiene exams, fillings, crowns, and root canal therapy using minimally invasive techniques.
                    </p>
<a className="text-indigo-900 text-sm font-medium hover:text-blue-600 flex items-center gap-1" href="tel:+15551234567">
                        Schedule Check-up <iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-20 bg-indigo-900 text-white overflow-hidden relative" id="assessment">

<div className="absolute top-0 right-0 w-1/2 h-full bg-blue-900/20 blur-3xl rounded-full translate-x-1/2"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Unsure which treatment you need?</h2>
<p className="text-indigo-300 text-lg mb-10 max-w-2xl mx-auto">
                Schedule a 15-minute complimentary Smile Assessment. We'll discuss your concerns, review your options, and provide a clear roadmap—no commitment required.
            </p>
<div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10 max-w-xl mx-auto">
<div className="flex flex-col gap-4">
<div className="flex items-center gap-3 text-sm text-indigo-300 justify-center mb-4">
<iconify-icon icon="lucide:clock" width="16"></iconify-icon> 15 Minute Phone or Video Call
                    </div>
<a className="w-full inline-flex items-center justify-center h-12 px-6 text-base font-medium text-indigo-900 bg-white rounded-lg hover:bg-indigo-50 transition-all" href="tel:+15551234567">
                        Call (555) 123-4567 to Book
                    </a>
<p className="text-xs text-indigo-500 mt-2">Limited slots available per week.</p>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 bg-white" id="about">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12">
<div className="md:col-span-5">
<div className="bg-indigo-100 rounded-2xl aspect-square flex items-center justify-center text-indigo-300">

<iconify-icon icon="lucide:image" strokeWidth="1" width="48"></iconify-icon>
</div>
</div>
<div className="md:col-span-7 flex flex-col justify-center">
<h2 className="text-3xl font-semibold tracking-tight text-indigo-900 mb-6">
                    Dentistry founded on precision, not volume.
                </h2>
<div className="prose prose-indigo prose-lg text-indigo-500 mb-8">
<p>
                        At Lumina, we believe that exceptional dental work should be unnoticeable. Our philosophy is rooted in —mimicking the properties of natural teeth to preserve structure and ensure longevity.
                    </p>
<p>
                        We are not a high-volume clinic. We book fewer patients per day to ensure you receive undivided attention, thorough diagnostics, and the highest standard of care available in the industry.
                    </p>
</div>
<div className="grid grid-cols-2 gap-6 border-t border-indigo-100 pt-8">
<div>
<div className="text-3xl font-semibold text-blue-600 mb-1">15+</div>
<div className="text-sm text-indigo-500">Years Experience</div>
</div>
<div>
<div className="text-3xl font-semibold text-blue-600 mb-1">100%</div>
<div className="text-sm text-indigo-500">Satisfaction Guarantee</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-indigo-50 border-t border-indigo-200 pt-20 pb-12">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-12 mb-16">

<div>
<a className="flex items-center gap-2.5 mb-6" href="#">

<svg className="w-6 h-6 text-slate-900" fill="none" viewbox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
<rect fill="currentColor" height="32" rx="8" width="32"></rect>
<path d="M16 6C16 6 18.5 12.5 24 16C18.5 19.5 16 26 16 26C16 26 13.5 19.5 8 16C13.5 12.5 16 6 16 6Z" fill="white"></path>
</svg>
<span className="text-base font-semibold tracking-tight text-indigo-900">LUMINA.</span>
</a>
<p className="text-sm text-indigo-500 mb-6 max-w-xs">
                        Restoring smiles and confidence through expert implant and cosmetic dentistry.
                    </p>
<a className="text-blue-600 font-medium hover:text-blue-800 flex items-center gap-2" href="tel:+15551234567">
<iconify-icon icon="lucide:phone" width="16"></iconify-icon> (555) 123-4567
                    </a>
</div>

<div>
<h3 className="font-semibold text-indigo-900 mb-4 text-sm">Services</h3>
<ul className="space-y-3 text-sm text-indigo-500">
<li><a className="hover:text-indigo-900" href="#implants">Dental Implants</a></li>
<li><a className="hover:text-indigo-900" href="#cosmetic">Veneers &amp; Whitening</a></li>
<li><a className="hover:text-indigo-900" href="#cosmetic">General Dentistry</a></li>
<li><a className="hover:text-indigo-900" href="#assessment">Smile Assessment</a></li>
</ul>
</div>

<div>
<h3 className="font-semibold text-indigo-900 mb-4 text-sm">Visit Us</h3>
<div className="text-sm text-indigo-500">
<p><span className="font-medium text-indigo-700">Mon-Thu:</span> 8am - 5pm</p>
<p><span className="font-medium text-indigo-700">Fri:</span> 8am - 12pm</p>
</div>
</div>
</div>
<div className="border-t border-indigo-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-indigo-400">
<p>© 2024 Lumina Dental Specialists. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-indigo-600" href="#">Privacy Policy</a>
<a className="hover:text-indigo-600" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
