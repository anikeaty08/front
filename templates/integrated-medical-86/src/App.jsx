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
      

<header className="py-8 md:py-12 flex justify-center">
<img alt="Apple Healthcare" className="h-12 md:h-16 w-auto object-contain" src="https://thespringknoxville.com/wp-content/uploads/2024/02/The-Spring-at-Apple-Healthcare-logo-2-e1712003026891.jpg"/>
</header>

<section className="max-w-screen-xl mx-auto px-6 py-12 md:py-20 text-center">
<h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight leading-tight max-w-4xl mx-auto">
            Stop Bouncing Between Specialists. Get Real Answers Under One Roof.
        </h1>
<p className="mt-6 text-base md:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Apple Healthcare combines chiropractic, physical therapy, podiatry, and functional medicine in one place. One team. One plan. Built around you.
        </p>
<div className="mt-10">
<a className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm md:text-base py-4 px-8 rounded-full transition-all duration-200 shadow-sm hover:shadow-md" href="#">
                Click Here to Book Your Free Consultation
            </a>
</div>
</section>

<section className="max-w-screen-lg mx-auto px-6 pb-24">
<div className="relative group cursor-pointer overflow-hidden rounded-2xl bg-slate-100 border border-slate-200 aspect-video flex items-center justify-center shadow-2xl transition-transform duration-500 hover:scale-[1.01]">
<div className="flex flex-col items-center space-y-4">
<div className="w-16 h-16 md:w-20 md:h-20 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg transition-transform group-hover:scale-110">
<iconify-icon height="32" icon="solar:play-bold" width="32"></iconify-icon>
</div>
<span className="text-xs md:text-sm font-medium tracking-widest text-slate-400 uppercase">Watch This First</span>
</div>

<div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent pointer-events-none"></div>
</div>
</section>

<section className="bg-slate-50 py-24">
<div className="max-w-screen-xl mx-auto px-6 text-center">
<h2 className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-12">
                WHAT KNOXVILLE PATIENTS ARE SAYING
            </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-xl border border-slate-200 text-left flex flex-col justify-between shadow-sm">
<p className="text-slate-600 leading-relaxed italic text-sm md:text-base">
                        "Today, I am a fully functional member of society running a successful small business relatively pain free. Hope exists in these buildings."
                    </p>
<div className="mt-6 font-medium text-slate-900 text-sm">
                        — John Wells
                    </div>
</div>

<div className="bg-white p-8 rounded-xl border border-slate-200 text-left flex flex-col justify-between shadow-sm">
<p className="text-slate-600 leading-relaxed italic text-sm md:text-base">
                        "Dr. Chris and Dr. Howell provided the best care for me during my back problems with tense muscle pain. I am able to continue my daily activities!"
                    </p>
<div className="mt-6 font-medium text-slate-900 text-sm">
                        — Stanley Lueders
                    </div>
</div>

<div className="bg-white p-8 rounded-xl border border-slate-200 text-left flex flex-col justify-between shadow-sm">
<p className="text-slate-600 leading-relaxed italic text-sm md:text-base">
                        "My improvement is amazing and I am now able to participate in the activities I like. The whole staff is welcoming and caring."
                    </p>
<div className="mt-6 font-medium text-slate-900 text-sm">
                        — Mark Mekita
                    </div>
</div>
</div>
</div>
</section>

<section className="max-w-screen-xl mx-auto px-6 py-32">
<h2 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight text-center mb-20">
            Why Patients Choose Apple Healthcare
        </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-16">

<div className="flex flex-col items-center text-center space-y-4">
<div className="w-12 h-12 flex items-center justify-center text-blue-600 bg-blue-50 rounded-lg">
<iconify-icon height="28" icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900">All Under One Roof</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                    Chiropractic, PT, podiatry, and functional medicine. One team working together on your plan.
                </p>
</div>

<div className="flex flex-col items-center text-center space-y-4">
<div className="w-12 h-12 flex items-center justify-center text-blue-600 bg-blue-50 rounded-lg">
<iconify-icon height="28" icon="solar:magnifer-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900">We Find the Root Cause</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                    We don't just treat symptoms. We dig deeper to find out why you're hurting.
                </p>
</div>

<div className="flex flex-col items-center text-center space-y-4">
<div className="w-12 h-12 flex items-center justify-center text-blue-600 bg-blue-50 rounded-lg">
<iconify-icon height="28" icon="solar:calendar-date-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900">38 Years in Knoxville</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                    Family-owned since 1986. Part of this community for a long time.
                </p>
</div>
</div>
</section>

<section className="max-w-screen-xl mx-auto px-6 py-24 border-t border-slate-100">
<div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
<div className="w-full md:w-5/12">
<div className="relative">
<img alt="Dr. Chris Hosenfeld" className="rounded-2xl shadow-xl w-full object-cover grayscale-[20%]" src="https://applehealthcaregroup.com/wp-content/uploads/2023/05/CH-B-scaled-e1690231980513.jpg"/>
<div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-slate-900/10"></div>
</div>
</div>
<div className="w-full md:w-7/12">
<span className="text-blue-600 font-medium text-sm tracking-wide">Meet the Founder</span>
<h2 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight mt-2 mb-6">
                    Dr. Chris Hosenfeld, DC, CCRD
                </h2>
<div className="space-y-4 text-slate-500 text-sm md:text-base leading-relaxed">
<p>
                        Dr. Chris has been taking care of Knoxville patients for over 30 years. He founded this practice in 1987 with a simple idea: Bring great providers together and treat the whole person.
                    </p>
<p>
                        He served as the team chiropractor for the University of Tennessee Athletic Department for 25 years. Today he leads a team of 11 providers across every specialty your body might need.
                    </p>
</div>
</div>
</div>
</section>

<section className="bg-blue-600 py-24 md:py-32">
<div className="max-w-screen-xl mx-auto px-6 text-center text-white">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
                Ready to Feel Like Yourself Again?
            </h2>
<p className="mt-4 text-blue-100 text-sm md:text-lg">
                Book a free consultation. Meet the team. Get a real plan.
            </p>
<div className="mt-12">
<a className="inline-flex items-center justify-center bg-white text-blue-600 font-medium text-sm md:text-base py-4 px-10 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105" href="#">
                    Click Here to Book Your Free Consultation
                </a>
</div>
</div>
</section>

<footer className="py-16 md:py-24 px-6 text-center">
<div className="flex justify-center mb-8">
<img alt="Apple Healthcare" className="h-10 w-auto opacity-80 grayscale" src="https://thespringknoxville.com/wp-content/uploads/2024/02/The-Spring-at-Apple-Healthcare-logo-2-e1712003026891.jpg"/>
</div>
<div className="text-xs md:text-sm text-slate-400 space-y-2">
<p>Apple Healthcare, 4307 Ball Camp Pike, Knoxville, TN 37921</p>
<p>Phone: (865) 524-1234</p>
<p className="pt-8 opacity-50">© 2024 Apple Healthcare. All rights reserved.</p>
</div>
</footer>

    </>
  );
}
