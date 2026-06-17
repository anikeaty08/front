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
      

<nav className="py-10 flex justify-center">
<img alt="LA FUE Hair NYC" className="h-12 w-auto object-contain" src="https://lafuehairnyc.com/wp-content/uploads/2024/08/LAFUENYC-Logo-website-3-1-new.png"/>
</nav>

<header className="max-w-4xl mx-auto px-6 pt-10 pb-20 text-center">
<h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-6">
            You Could Have a Full Head of Hair in Under a Year.
        </h1>
<p className="text-base md:text-lg text-gray-500 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            Dr. Anton Georgiev performs FUE hair transplants in Long Island and Manhattan. Minimally invasive. Natural-looking results. Watch the short video below and book your free consultation.
        </p>
<a className="inline-block bg-sky-400 text-white font-medium py-4 px-8 rounded-full text-base transition-all hover:bg-sky-500 btn-shadow" href="#consultation">
            Click Here to Book Your Consultation
        </a>
</header>

<section className="bg-gray-50 py-20 px-6">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-xl font-medium tracking-tight text-gray-800 mb-8">
                Watch This First — Dr. Anton Explains the FUE Process
            </h2>
<div className="aspect-video w-full rounded-2xl overflow-hidden shadow-2xl bg-black mb-6">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" className="w-full h-full" frameborder="0" src="https://www.youtube.com/embed/tbmUekP7nys?rel=0" title="Dr. Anton Explains FUE">
</iframe>
</div>
<p className="text-sm text-gray-400 font-light mb-10">
                Takes less than 5 minutes. Worth every second.
            </p>
<a className="inline-block bg-sky-400 text-white font-medium py-4 px-8 rounded-full text-base transition-all hover:bg-sky-500 btn-shadow" href="#consultation">
                Click Here to Book Your Consultation
            </a>
</div>
</section>

<section className="py-24 px-6 max-w-3xl mx-auto text-center">
<h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-12">
            Here's basically how it works.
        </h2>
<div className="space-y-6 text-base md:text-lg text-gray-600 font-light leading-relaxed">
<p>Individual hair follicles are harvested from your donor area.</p>
<p>Then carefully implanted where your hair is thin or gone.</p>
<p>No scalpels. No staples. No linear scars.</p>
<p>Most clients do it in a single day. Over 2,500 grafts in one session.</p>
<p>Recovery is fast. Results look completely natural.</p>
</div>
</section>

<section className="py-24 px-6 bg-white">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-12">
                Dr. Anton Has Been in Your Shoes.
            </h2>
<div className="mb-12">
<img alt="Dr. Anton Georgiev" className="w-64 h-64 md:w-80 md:h-80 object-cover mx-auto rounded-2xl shadow-sm grayscale hover:grayscale-0 transition-all duration-500" src="https://lafuehairnyc.com/wp-content/uploads/2022/06/LA-FUE-Dr-Anton-Georgiev.jpg"/>
</div>
<div className="space-y-6 text-base text-gray-600 font-light max-w-2xl mx-auto mb-12">
<p>He started losing his hair in his mid-20s.</p>
<p>He spent 4 years researching before making a decision.</p>
<p>He got the FUE procedure himself. It changed his life.</p>
<p>He was so impressed he left a 10-year career as a board-certified general surgeon to do this full time.</p>
<p>He trained at the acclaimed LA FUE Hair Clinic in Los Angeles before opening his New York clinics.</p>
<p>He's not just your surgeon. He's been exactly where you are.</p>
</div>
<a className="inline-block bg-sky-400 text-white font-medium py-4 px-8 rounded-full text-base transition-all hover:bg-sky-500 btn-shadow" href="#consultation">
                Click Here to Book Your Consultation
            </a>
</div>
</section>

<section className="py-24 px-6 bg-gray-50">
<div className="max-w-6xl mx-auto">
<h2 className="text-2xl font-semibold tracking-tight text-center text-gray-900 mb-16">
                What Patients Are Saying
            </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
<div className="flex text-sky-400 mb-4">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-gray-600 italic font-light mb-6 text-sm">"Thank you, Dr. Anton, for making me feel so comfortable and relaxed on my BIG DAY, and btw, my new hairline ROCKS."</p>
<p className="text-gray-900 font-medium text-sm">Kev A.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
<div className="flex text-sky-400 mb-4">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-gray-600 italic font-light mb-6 text-sm">"Dr. Anton is one of the most caring and knowledgeable surgeons I have met. The level of detail was amazing, from my consultation all the way through the procedure."</p>
<p className="text-gray-900 font-medium text-sm">John M.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
<div className="flex text-sky-400 mb-4">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-gray-600 italic font-light mb-6 text-sm">"Dr. Anton really connected with me and formulated a very thorough, personalized plan for my hair loss problem. His attention to detail and artistic skills are unmatched."</p>
<p className="text-gray-900 font-medium text-sm">Zoro H.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="aspect-[9/16] bg-gray-100 rounded-2xl flex flex-col items-center justify-center border border-gray-200 group cursor-not-allowed">
<iconify-icon className="text-4xl text-gray-300 group-hover:text-sky-400 transition-colors" icon="solar:play-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="mt-4 text-xs font-medium text-gray-400 tracking-wide uppercase">Patient Story — Coming Soon</span>
</div>
<div className="aspect-[9/16] bg-gray-100 rounded-2xl flex flex-col items-center justify-center border border-gray-200 group cursor-not-allowed">
<iconify-icon className="text-4xl text-gray-300 group-hover:text-sky-400 transition-colors" icon="solar:play-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="mt-4 text-xs font-medium text-gray-400 tracking-wide uppercase">Patient Story — Coming Soon</span>
</div>
<div className="aspect-[9/16] bg-gray-100 rounded-2xl flex flex-col items-center justify-center border border-gray-200 group cursor-not-allowed">
<iconify-icon className="text-4xl text-gray-300 group-hover:text-sky-400 transition-colors" icon="solar:play-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="mt-4 text-xs font-medium text-gray-400 tracking-wide uppercase">Patient Story — Coming Soon</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-t border-gray-100" id="consultation">
<div className="max-w-3xl mx-auto text-center">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-6">
                Ready to See If FUE Is Right for You?
            </h2>
<div className="text-base text-gray-600 font-light mb-12 space-y-2">
<p>The consultation is free. No pressure. Just answers.</p>
<p>Dr. Anton and his team will walk you through your options and help you figure out the best path forward.</p>
</div>
<a className="inline-block bg-sky-400 text-white font-medium py-5 px-12 rounded-full text-lg transition-all hover:bg-sky-500 btn-shadow" href="tel:5169285500">
                Click Here to Book Your Consultation
            </a>
</div>
</section>

<footer className="bg-white border-t border-gray-100 pt-20 pb-10 px-6">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
<div className="space-y-4">
<h3 className="text-xs font-semibold uppercase tracking-widest text-gray-400">Long Island</h3>
<p className="text-sm text-gray-600 leading-relaxed font-light">
                        400 Garden City Plaza, Suite 107<br/>
                        Garden City, NY 11530<br/>
<span className="font-medium text-gray-900">(516) 928-5500</span>
</p>
</div>
<div className="space-y-4">
<h3 className="text-xs font-semibold uppercase tracking-widest text-gray-400">Manhattan</h3>
<p className="text-sm text-gray-600 leading-relaxed font-light">
                        65 W 36th St, 10th Floor<br/>
                        New York, NY 10018<br/>
<span className="font-medium text-gray-900">(646) 543-3131</span>
</p>
</div>
</div>
<div className="flex flex-col items-center border-t border-gray-50 pt-10">
<p className="text-sm text-gray-500 font-light mb-4">info@lafuehairnyc.com</p>
<p className="text-xs text-gray-400 font-light">
                    Professional services provided by Anton Georgiev DO FACS P.C.
                </p>
</div>
</div>
</footer>

    </>
  );
}
