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



      // Icons
      lucide.createIcons();

      // Reveal Animation Observer
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
            }
          });
        },
        {threshold: 0.1}
      );

      document.querySelectorAll(".reveal-item").forEach((el) => observer.observe(el));

      // Spotlight Effect Logic
      document.querySelectorAll(".spotlight-group").forEach((group) => {
        group.addEventListener("mousemove", (e) => {
          const rect = group.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          group.style.setProperty("--mouse-x", `${x}px`);
          group.style.setProperty("--mouse-y", `${y}px`);
        });
      });
    
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10 hue-rotate-90" data-alpha-mask="80" style="
        mask-image: linear-gradient(to bottom, transparent, black 0%, black 80%, transparent);
        -webkit-mask-image: linear-gradient(to bottom, transparent, black 0%, black 80%, transparent);
      ">
<div className="spline-container absolute top-0 left-0 w-full h-full -z-10">
<iframe frameborder="0" height="100%" src="https://my.spline.design/twistcopy-CPActtgUfoQoOToZfH4Pt18Q" width="100%"></iframe>
</div>
</div>

<nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
<div className="backdrop-blur-xl bg-white/80 border border-gray-200 rounded-full px-6 py-3 flex items-center gap-8 shadow-lg shadow-gray-200/50">
<a className="flex items-center gap-2" href="index.html">
<div className="bg-rose-600 p-1.5 rounded-lg">
<svg className="lucide lucide-activity w-4 h-4 text-white" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<span className="font-semibold tracking-tight text-lg text-gray-900"> LOUDCare </span>
</a>
<div className="hidden md:flex items-center gap-6 text-sm text-gray-500 font-medium">
<a className="hover:text-rose-600 transition-colors" href="about-us.html">About Us</a>
<a className="hover:text-rose-600 transition-colors" href="service.html">Services</a>
<a className="hover:text-rose-600 transition-colors" href="index.html#doctors">Doctors</a>
<a className="hover:text-rose-600 transition-colors" href="index.html#blog">Blog</a>
</div>
<div className="flex items-center gap-4">
<button className="text-gray-400 hover:text-rose-600 transition-colors">
<svg className="lucide lucide-search w-4 h-4" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</button>
<button className="bg-rose-600 text-white text-xs font-semibold px-5 py-2.5 rounded-full hover:bg-rose-700 transition-all shadow-lg shadow-rose-200">
            Book Appointment
          </button>
</div>
</div>
</nav>

<section className="spotlight-group min-h-[700px] overflow-hidden reveal-item bg-slate-50 w-full h-[85vh] max-w-[1500px] border-gray-100 border rounded-[32px] mt-20 relative is-visible" style={{'--mouse-x': '565px', '--mouse-y': '688px'}}>

<div className="z-0 absolute top-0 right-0 bottom-0 left-0">
<img alt="Skin Care Model" className="filter grayscale-[10%] opacity-100 w-full h-full object-cover" src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-white via-white/60 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-t from-slate-50/80 via-transparent to-white/20"></div>
</div>
<div className="spotlight-content h-full flex flex-col justify-center px-8 md:px-20 relative z-10 max-w-4xl">
<div className="flex items-center gap-2 mb-6">
<div className="flex text-rose-500">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star-half w-4 h-4 fill-current" data-lucide="star-half" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 18.338a2.1 2.1 0 0 0-.987.244L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679A.53.53 0 0 1 12 2"></path></svg>
</div>
<span className="text-sm font-medium text-gray-600"> 4.5 (201 Reviews) </span>
</div>
<h1 className="md:text-8xl leading-[0.95] text-6xl font-medium text-gray-900 tracking-tight mb-8">
          The Quest to <br/>
<span className="font-serif-italic text-rose-500 opacity-90">The Best Skin</span> <br/>
          Is Here.
        </h1>
<p className="text-gray-500 text-lg max-w-lg mb-10 leading-relaxed font-light">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        </p>
<div className="flex gap-4">
<button className="group relative px-8 py-4 bg-rose-600 rounded-full text-white font-medium overflow-hidden transition-all hover:scale-105 shadow-xl shadow-rose-200">
<div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-rose-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<span className="relative z-10 flex items-center gap-2">
              Start Treatment
              <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</button>
<button className="px-8 py-4 border border-gray-200 bg-white/50 backdrop-blur-sm rounded-full text-gray-900 hover:bg-white hover:border-gray-300 transition-all shadow-sm">
            View Services
          </button>
</div>
</div>
</section>

<section className="w-full max-w-[1500px] grid grid-cols-1 md:grid-cols-3 gap-6 reveal-item is-visible">

<div className="spotlight-group bg-white border border-gray-100 p-10 rounded-[24px] hover:border-rose-100 hover:shadow-xl hover:shadow-gray-100/50 transition-all shadow-sm" style={{'--mouse-x': '66px', '--mouse-y': '261.1015625px'}}>
<div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-50 to-rose-100 flex items-center justify-center mb-6 border border-rose-100">
<svg className="lucide lucide-heart-pulse w-6 h-6 text-rose-500" data-lucide="heart-pulse" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path><path d="M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"></path></svg>
</div>
<h3 className="text-2xl font-medium mb-3 text-gray-900">Patient Care Standards</h3>
<p className="text-gray-500 text-sm leading-relaxed mb-6">
          Advanced advisory team managing pain with high standards. We prioritize your comfort above all else.
        </p>
<a className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-rose-500 transition-colors flex items-center gap-2" href="#">
          Read More
          <svg className="lucide lucide-arrow-up-right w-3 h-3" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>

<div className="spotlight-group bg-white border border-gray-100 p-10 rounded-[24px] hover:border-rose-100 hover:shadow-xl hover:shadow-gray-100/50 transition-all shadow-sm delay-100">
<div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-50 to-rose-100 flex items-center justify-center mb-6 border border-rose-100">
<svg className="lucide lucide-stethoscope w-6 h-6 text-rose-500" data-lucide="stethoscope" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 2v2"></path><path d="M5 2v2"></path><path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"></path><path d="M8 15a6 6 0 0 0 12 0v-3"></path><circle cx="20" cy="10" r="2"></circle></svg>
</div>
<h3 className="text-2xl font-medium mb-3 text-gray-900">Expert Medical Staff</h3>
<p className="text-gray-500 text-sm leading-relaxed mb-6">
          Our support staff and experienced doctors are dedicated to providing the best skin analysis.
        </p>
<a className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-rose-500 transition-colors flex items-center gap-2" href="#">
          Meet Team
          <svg className="lucide lucide-arrow-up-right w-3 h-3" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>

<div className="spotlight-group bg-white border border-gray-100 p-10 rounded-[24px] hover:border-rose-100 hover:shadow-xl hover:shadow-gray-100/50 transition-all shadow-sm delay-200">
<div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-50 to-rose-100 flex items-center justify-center mb-6 border border-rose-100">
<svg className="lucide lucide-zap w-6 h-6 text-rose-500" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="text-2xl font-medium mb-3 text-gray-900">Modern Equipment</h3>
<p className="text-gray-500 text-sm leading-relaxed mb-6">
          Using the latest laser and diagnostic technology to ensure precise and effective treatments.
        </p>
<a className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-rose-500 transition-colors flex items-center gap-2" href="#">
          Technology
          <svg className="lucide lucide-arrow-up-right w-3 h-3" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</section>

<section className="w-full max-w-[1500px] bg-slate-50 border border-gray-100 rounded-[32px] p-8 md:p-16 relative overflow-hidden reveal-item" id="about">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

<div className="">
<span className="text-rose-500 text-sm font-bold tracking-widest uppercase mb-4 block"> About LOUDCare </span>
<h2 className="text-5xl md:text-6xl font-medium leading-tight mb-8 text-gray-900">
            The World's Best
            <span className="font-serif-italic text-gray-400">Skin Care</span>
            Treatment
          </h2>
<p className="text-lg font-light text-gray-500 mb-8">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. We
            treat minor illnesses and conduct thorough health checkups.
          </p>
<div className="grid grid-cols-2 gap-4 mb-8 gap-x-3 gap-y-3">
<div className="flex gap-3 text-sm text-gray-600 gap-x-3 gap-y-3 items-center">
<svg className="lucide lucide-check-circle-2 text-rose-500 w-5 h-5" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
              Treats minor illnesses
            </div>
<div className="flex text-sm text-gray-600 gap-x-3 gap-y-3 items-center">
<svg className="lucide lucide-check-circle-2 text-rose-500 w-5 h-5" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
              Specialty physicians
            </div>
<div className="flex items-center gap-3 text-sm text-gray-600">
<svg className="lucide lucide-check-circle-2 text-rose-500 w-5 h-5" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
              Complete health checkups
            </div>
</div>
<div className="flex items-center gap-8">
<button className="hover:bg-gray-800 transition-colors shadow-gray-200 font-medium text-white bg-gray-900 rounded-full pt-3 pr-8 pb-3 pl-8 shadow-lg" onclick="window.location.href='about-us.html'" role="button">
              Learn More
            </button>
<div>
<span className="block text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-purple-500"> 23+ </span>
<span className="text-xs uppercase tracking-wider text-gray-500"> Years Experience </span>
</div>
</div>
</div>

<div className="relative h-[600px] w-full rounded-[24px] overflow-hidden group shadow-2xl shadow-gray-200">
<img alt="Treatment" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

<div className="absolute bottom-8 left-8 right-8 bg-white/80 backdrop-blur-md border border-white/40 p-6 rounded-2xl shadow-lg">
<div className="flex justify-between items-end">
<div>
<p className="text-xs text-rose-600 uppercase tracking-widest mb-1 font-bold">Proven Results</p>
<p className="text-gray-900 font-medium">Good Experience in skin treatment</p>
</div>
<div className="w-10 h-10 bg-rose-600 rounded-full flex items-center justify-center shadow-lg shadow-rose-200">
<svg className="lucide lucide-play w-4 h-4 fill-white text-white ml-1" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="reveal-item w-full max-w-[1500px] pt-12 pb-12" id="services">
<div className="flex flex-col md:flex-row mb-12 pr-4 pl-4 items-end justify-between">
<div className="">
<span className="text-rose-500 text-sm font-bold tracking-widest uppercase mb-2 block"> Our Services </span>
<h2 className="text-4xl md:text-5xl font-medium text-gray-900">
            Welcome To
            <span className="font-serif-italic text-gray-400">LOUDCare</span>
</h2>
</div>
<button className="hidden md:flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-rose-600 transition-colors">
          View All Services
          <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="spotlight-group group flex flex-col hover:border-rose-200 hover:shadow-xl hover:shadow-gray-100 transition-all md:col-span-2 md:flex-row md:items-center bg-white h-[320px] border-gray-100 border rounded-2xl pt-8 pr-8 pb-8 pl-8 shadow-sm justify-between" style={{'--mouse-x': '7px', '--mouse-y': '98.1015625px'}}>
<div className="absolute -top-24 -right-24 w-96 h-96 bg-rose-50/80 rounded-full blur-3xl pointer-events-none -z-10 transition-opacity opacity-0 group-hover:opacity-100"></div>
<div className="absolute inset-0 bg-gradient-to-br from-white via-white/50 to-rose-50/20 opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
<div className="relative z-10 w-full h-full flex flex-col md:flex-row md:items-center justify-between gap-8">
<div className="flex-1 flex flex-col items-start">
<div className="w-14 h-14 bg-white border border-gray-100 shadow-sm rounded-2xl flex items-center justify-center mb-6 text-rose-500 group-hover:scale-110 transition-transform duration-500">
<svg className="lucide lucide-hourglass w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 22h14"></path>
<path d="M5 2h14"></path>
<path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"></path>
<path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"></path>
</svg>
</div>
<h3 className="text-2xl font-semibold text-gray-900 mb-3 tracking-tight">Ageing Treatment</h3>
<p className="text-gray-500 leading-relaxed max-w-md">Specific treatments designed to slow down the aging process effectively.</p>
</div>
<div className="w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center group-hover:border-rose-500 group-hover:bg-rose-600 group-hover:text-white transition-all text-gray-400 shrink-0 self-end md:self-auto">
<svg className="lucide lucide-arrow-up-right w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</div>
</div>
</div>

<div className="spotlight-group group h-[320px] bg-white border border-gray-100 rounded-2xl p-8 flex flex-col justify-between hover:border-rose-200 hover:shadow-xl hover:shadow-gray-100 transition-all shadow-sm delay-100" style={{'--mouse-x': '121.3359375px', '--mouse-y': '294.1015625px'}}>
<div className="absolute -top-24 -right-24 w-80 h-80 bg-rose-50/80 rounded-full blur-3xl pointer-events-none -z-10 transition-opacity opacity-0 group-hover:opacity-100"></div>
<div className="absolute inset-0 bg-gradient-to-br from-white via-white/50 to-rose-50/20 opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="flex flex-col items-start">
<div className="w-14 h-14 bg-white border border-gray-100 shadow-sm rounded-2xl flex items-center justify-center mb-6 text-rose-500 group-hover:scale-110 transition-transform duration-500">
<svg className="lucide lucide-droplets w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path>
<path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path>
</svg>
</div>
<h3 className="text-2xl font-semibold text-gray-900 mb-3 tracking-tight">Skin Treatment</h3>
<p className="text-gray-500 leading-relaxed">Comprehensive care for hydration, acne, and texture improvement.</p>
</div>
<div className="flex justify-end mt-4">
<div className="w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center group-hover:border-rose-500 group-hover:bg-rose-600 group-hover:text-white transition-all text-gray-400">
<svg className="lucide lucide-arrow-up-right w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</div>
</div>
</div>
</div>

<div className="spotlight-group group flex flex-col hover:border-rose-200 hover:shadow-xl hover:shadow-gray-100 transition-all delay-200 bg-white h-[320px] border-gray-100 border rounded-2xl pt-8 pr-8 pb-8 pl-8 shadow-sm justify-between" style={{'--mouse-x': '93px', '--mouse-y': '50.1015625px'}}>
<div className="absolute -top-24 -right-24 w-80 h-80 bg-rose-50/80 rounded-full blur-3xl pointer-events-none -z-10 transition-opacity opacity-0 group-hover:opacity-100"></div>
<div className="absolute inset-0 bg-gradient-to-br from-white via-white/50 to-rose-50/20 opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="flex flex-col items-start">
<div className="w-14 h-14 bg-white border border-gray-100 shadow-sm rounded-2xl flex items-center justify-center mb-6 text-rose-500 group-hover:scale-110 transition-transform duration-500">
<svg className="lucide lucide-scan-line w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 7V5a2 2 0 0 1 2-2h2"></path>
<path d="M17 3h2a2 2 0 0 1 2 2v2"></path>
<path d="M21 17v2a2 2 0 0 1-2 2h-2"></path>
<path d="M7 21H5a2 2 0 0 1-2-2v-2"></path>
<path d="M7 12h10"></path>
</svg>
</div>
<h3 className="text-2xl font-semibold text-gray-900 mb-3 tracking-tight">Laser Treatment</h3>
<p className="text-gray-500 leading-relaxed">High-precision laser technology for hair removal and skin resurfacing.</p>
</div>
<div className="flex justify-end mt-4">
<div className="w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center group-hover:border-rose-500 group-hover:bg-rose-600 group-hover:text-white transition-all text-gray-400">
<svg className="lucide lucide-arrow-up-right w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</div>
</div>
</div>
</div>

<div className="spotlight-group group flex flex-col hover:border-rose-200 hover:shadow-xl hover:shadow-gray-100 transition-all delay-300 md:col-span-2 md:flex-row md:items-center bg-white h-[320px] border-gray-100 border rounded-2xl pt-8 pr-8 pb-8 pl-8 shadow-sm justify-between" style={{'--mouse-x': '118.671875px', '--mouse-y': '304.1015625px'}}>
<div className="absolute -top-24 -right-24 w-96 h-96 bg-rose-50/80 rounded-full blur-3xl pointer-events-none -z-10 transition-opacity opacity-0 group-hover:opacity-100"></div>
<div className="absolute inset-0 bg-gradient-to-br from-white via-white/50 to-rose-50/20 opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
<div className="relative z-10 w-full h-full flex flex-col md:flex-row md:items-center justify-between gap-8">
<div className="flex-1 flex flex-col items-start">
<div className="w-14 h-14 bg-white border border-gray-100 shadow-sm rounded-2xl flex items-center justify-center mb-6 text-rose-500 group-hover:scale-110 transition-transform duration-500">
<svg className="lucide lucide-scissors w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="6" cy="6" r="3"></circle>
<path d="M8.12 8.12 12 12"></path>
<path d="M20 4 8.12 15.88"></path>
<circle cx="6" cy="18" r="3"></circle>
<path d="M14.8 14.8 20 20"></path>
</svg>
</div>
<h3 className="text-2xl font-semibold text-gray-900 mb-3 tracking-tight">Plastic Surgery</h3>
<p className="text-gray-500 leading-relaxed max-w-md">Reconstructive and aesthetic surgical procedures by top surgeons.</p>
</div>
<div className="w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center group-hover:border-rose-500 group-hover:bg-rose-600 group-hover:text-white transition-all text-gray-400 shrink-0 self-end md:self-auto">
<svg className="lucide lucide-arrow-up-right w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</div>
</div>
</div>
</div>
</section>

<section className="reveal-item w-full max-w-[1500px] pt-12 pb-12" id="doctors">
<div className="text-center mb-16">
<span className="text-rose-500 text-sm font-bold tracking-widest uppercase mb-2 block"> Our Doctors </span>
<h2 className="text-5xl font-medium text-gray-900">
          Experts Here To
          <span className="font-serif-italic text-gray-400">Help You</span>
</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group relative overflow-hidden rounded-[24px] shadow-lg">
<img alt="Doctor" className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale-[30%] group-hover:grayscale-0" src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<h3 className="text-2xl font-medium text-white mb-1">Dr. Moric Horgon</h3>
<p className="text-rose-300 text-sm uppercase tracking-widest mb-4">Dermatologist</p>
<div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
<a className="bg-white/20 p-2 rounded-full hover:bg-white hover:text-black transition-colors text-white" href="#">
<svg className="lucide lucide-facebook w-4 h-4" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
<a className="bg-white/20 p-2 rounded-full hover:bg-white hover:text-black transition-colors text-white" href="#">
<svg className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="bg-white/20 p-2 rounded-full hover:bg-white hover:text-black transition-colors text-white" href="#">
<svg className="lucide lucide-instagram w-4 h-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-[24px] shadow-lg">
<img alt="Doctor" className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale-[30%] group-hover:grayscale-0" src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&amp;w=1964&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<h3 className="text-2xl font-medium text-white mb-1">Dr. Sarah James</h3>
<p className="text-rose-300 text-sm uppercase tracking-widest mb-4">Surgeon</p>
<div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
<a className="bg-white/20 p-2 rounded-full hover:bg-white hover:text-black transition-colors text-white" href="#">
<svg className="lucide lucide-facebook w-4 h-4" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
<a className="bg-white/20 p-2 rounded-full hover:bg-white hover:text-black transition-colors text-white" href="#">
<svg className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-[24px] shadow-lg">
<img alt="Doctor" className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale-[30%] group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<h3 className="text-2xl font-medium text-white mb-1">Dr. Michael Chen</h3>
<p className="text-rose-300 text-sm uppercase tracking-widest mb-4">Laser Specialist</p>
<div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
<a className="bg-white/20 p-2 rounded-full hover:bg-white hover:text-black transition-colors text-white" href="#">
<svg className="lucide lucide-facebook w-4 h-4" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
<a className="bg-white/20 p-2 rounded-full hover:bg-white hover:text-black transition-colors text-white" href="#">
<svg className="lucide lucide-linkedin w-4 h-4" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="reveal-item w-full max-w-[1500px] pt-20 pb-20">
<div className="flex flex-col md:flex-row gap-12 items-center">
<div className="md:w-1/3 bg-white/90 backdrop-blur-sm rounded-[24px] p-8 border border-gray-100">
<span className="text-rose-500 text-sm font-bold tracking-widest uppercase mb-4 block"> About Our Clinic </span>
<h2 className="text-5xl font-medium text-gray-900 mb-4">
            What Our 
            <span className="font-serif-italic text-rose-500">Patients Say</span>
</h2>
</div>
<div className="md:w-2/3 border-gray-200 border-l pl-8 relative">
<svg className="lucide lucide-quote w-12 h-12 text-rose-500/10 absolute top-0 left-8 -translate-x-full -translate-y-1/2 fill-rose-500/10" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<p className="text-2xl md:text-3xl font-light leading-relaxed italic text-gray-700 mb-8">
            "You can't go wrong here. I receive the best care and attention. The nursing staff and doctors are amazing and take their time
            with you. I felt better walking out here every time."
          </p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
<img alt="User" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;h=100&amp;fit=crop"/>
</div>
<div>
<h4 className="font-medium text-gray-900">Moric Horgon</h4>
<span className="text-sm text-gray-500">Regular Patient</span>
</div>
<div className="ml-auto flex gap-2">
<button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-900 hover:text-white transition-colors text-gray-500">
<svg className="lucide lucide-arrow-left w-4 h-4" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<button className="w-10 h-10 rounded-full bg-rose-600 text-white flex items-center justify-center hover:bg-rose-700 transition-colors shadow-lg shadow-rose-200">
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>
</div>
</section>


<section className="reveal-item w-full max-w-[1500px] pt-20 pr-4 pb-20 pl-4">
<div className="text-center mb-16">
<span className="text-rose-500 text-sm font-bold tracking-widest uppercase mb-2 block"> Our Pricing </span>
<h2 className="text-5xl font-medium text-gray-900">
          Choose Your
          <span className="font-serif-italic text-gray-400">Perfect Plan</span>
</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

<div className="hover:shadow-xl transition-shadow bg-white border-gray-100 border rounded-3xl pt-8 pr-8 pb-8 pl-8 shadow-sm">
<span className="uppercase text-xs font-bold text-gray-400 tracking-widest"> Basic Package </span>
<div className="mt-6 mb-6">
<span className="text-5xl font-medium text-gray-900">$25</span>
<span className="text-gray-400">/Year</span>
</div>
<p className="text-gray-500 text-sm mb-8">It is a long established fact that a reader will be distracted.</p>
<ul className="space-y-4 mb-8 text-sm text-gray-600">
<li className="flex gap-3">
<svg className="lucide lucide-check w-4 h-4 text-rose-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Professional Calendar
            </li>
<li className="flex gap-3">
<svg className="lucide lucide-check w-4 h-4 text-rose-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Free Google Analytics
            </li>
<li className="flex gap-3 text-gray-300">
<svg className="lucide lucide-x w-4 h-4" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
              Limited Medicines
            </li>
</ul>
<button className="w-full py-3 rounded-xl border border-gray-200 hover:bg-gray-900 hover:text-white transition-colors text-sm font-medium text-gray-700">
            Read More
          </button>
</div>

<div className="bg-white border border-rose-100 p-10 rounded-3xl relative transform md:-translate-y-4 shadow-[0_20px_50px_-12px_rgba(225,29,72,0.15)]">
<div className="absolute top-0 right-0 bg-rose-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl uppercase shadow-md">
            Popular
          </div>
<span className="text-xs font-bold tracking-widest text-rose-500 uppercase"> Intermediate </span>
<div className="my-6">
<span className="text-6xl font-medium text-gray-900">$75</span>
<span className="text-gray-400">/Year</span>
</div>
<p className="text-gray-500 text-sm mb-8">Best value for established treatments and regular checkups.</p>
<ul className="space-y-4 mb-8 text-sm text-gray-700">
<li className="flex gap-3">
<svg className="lucide lucide-check w-4 h-4 text-rose-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Professional Calendar
            </li>
<li className="flex gap-3">
<svg className="lucide lucide-check w-4 h-4 text-rose-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Free Google Analytics
            </li>
<li className="flex gap-3">
<svg className="lucide lucide-check w-4 h-4 text-rose-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Unlimited Tasks
            </li>
</ul>
<button className="w-full py-4 rounded-xl bg-rose-600 text-white hover:bg-rose-700 transition-colors text-sm font-medium shadow-lg shadow-rose-200">
            Choose Plan
          </button>
</div>

<div className="bg-white border border-gray-100 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow">
<span className="text-xs font-bold tracking-widest text-gray-400 uppercase"> Advanced </span>
<div className="my-6">
<span className="text-5xl font-medium text-gray-900">$99</span>
<span className="text-gray-400">/Year</span>
</div>
<p className="text-gray-500 text-sm mb-8">For complete peace of mind and full medical coverage.</p>
<ul className="space-y-4 mb-8 text-sm text-gray-600">
<li className="flex gap-3">
<svg className="lucide lucide-check w-4 h-4 text-rose-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Professional Calendar
            </li>
<li className="flex gap-3">
<svg className="lucide lucide-check w-4 h-4 text-rose-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Free Google Analytics
            </li>
<li className="flex gap-3">
<svg className="lucide lucide-check w-4 h-4 text-rose-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Unlimited Medicines
            </li>
</ul>
<button className="w-full py-3 rounded-xl border border-gray-200 hover:bg-gray-900 hover:text-white transition-colors text-sm font-medium text-gray-700">
            Read More
          </button>
</div>
</div>
</section>

<section className="reveal-item w-full max-w-[1500px] pt-12 pb-12" id="blog">
<div className="text-center mb-12">
<span className="text-rose-500 text-sm font-bold tracking-widest uppercase mb-2 block"> Blog </span>
<h2 className="md:text-5xl text-4xl font-medium text-gray-900">
          Latest News &amp;
          <span className="font-serif-italic text-gray-400">Advices</span>
</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group cursor-pointer">
<div className="h-[300px] overflow-hidden rounded-2xl mb-6 relative shadow-lg">
<img alt="Blog 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-rose-600 text-white text-[10px] font-bold px-3 py-1 rounded uppercase tracking-wider shadow-md">
              Eye Care
            </div>
</div>
<div className="flex items-center gap-4 text-xs text-gray-400 mb-2">
<span>Sept 23, 2022</span>
<span className="w-1 h-1 bg-gray-300 rounded-full"></span>
<span>By GoldenMace</span>
</div>
<h3 className="text-2xl font-medium mb-3 text-gray-900 group-hover:text-rose-600 transition-colors">
            Why Is Dry Eye So Difficult To Treat?
          </h3>
<a className="text-sm font-medium text-gray-500 border-b border-gray-200 hover:border-gray-900 hover:text-gray-900 inline-block pb-0.5 transition-colors" href="#">
            Read Article
          </a>
</div>

<div className="group cursor-pointer">
<div className="h-[300px] overflow-hidden rounded-2xl mb-6 relative shadow-lg">
<img alt="Blog 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-rose-600 text-white text-[10px] font-bold px-3 py-1 rounded uppercase tracking-wider shadow-md">
              Health Care
            </div>
</div>
<div className="flex items-center gap-4 text-xs text-gray-400 mb-2">
<span>Oct 6, 2022</span>
<span className="w-1 h-1 bg-gray-300 rounded-full"></span>
<span>By GoldenMace</span>
</div>
<h3 className="text-2xl font-medium mb-3 text-gray-900 group-hover:text-rose-600 transition-colors">The Most Common Problems?</h3>
<a className="text-sm font-medium text-gray-500 border-b border-gray-200 hover:border-gray-900 hover:text-gray-900 inline-block pb-0.5 transition-colors" href="#">
            Read Article
          </a>
</div>
</div>
<div className="text-center mt-12">
<button className="bg-rose-600 text-white px-8 py-4 rounded-full font-semibold text-sm hover:bg-rose-700 transition-all shadow-lg shadow-rose-200">
          Load More
        </button>
</div>
</section>

<footer className="w-full max-w-[1500px] mt-12 bg-slate-50 rounded-t-[32px] pt-16 pb-8 px-8 md:px-16 border-t border-gray-100 reveal-item">

<div className="w-full h-[300px] bg-gray-200 rounded-2xl overflow-hidden mb-16 grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500 relative group shadow-inner">
<iframe allowfullscreen="" className="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.182370726!2d-0.10159865000000001!3d51.52864165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2s!4v1695222222222!5m2!1sen!2s" style={{border: '0'}} width="100%"></iframe>
<div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded text-xs text-gray-900 pointer-events-none shadow-lg">
          Visualize map on larger scale
        </div>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-200 pb-12">
<div className="col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="bg-rose-600 p-1.5 rounded-lg">
<svg className="lucide lucide-activity w-5 h-5 text-white" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<span className="font-semibold tracking-tight text-xl text-gray-900"> LOUDCare </span>
</div>
<p className="text-gray-500 text-sm mb-6">It is a long established fact that a reader will be distracted by the readable.</p>
<div className="text-rose-500 font-medium">(316) 555-0116</div>
<div className="text-gray-500 text-sm">Customersupport@LOUDcare.com</div>
</div>
<div className="">
<h4 className="font-bold text-gray-900 mb-6">Important Links</h4>
<ul className="space-y-3 text-sm text-gray-500">
<li>
<a className="hover:text-rose-600 transition-colors" href="#"> About Us </a>
</li>
<li>
<a className="hover:text-rose-600 transition-colors" href="#"> Appointment </a>
</li>
<li>
<a className="hover:text-rose-600 transition-colors" href="#"> Service </a>
</li>
</ul>
</div>
<div>
<h4 className="font-bold text-gray-900 mb-6">Contact Us</h4>
<p className="text-sm text-gray-500 mb-4">4517 Washington Ave. Manchester, Kentucky. England 524163.</p>
<div className="flex gap-4">
<a className="text-gray-400 hover:text-rose-600" href="#">
<svg className="lucide lucide-facebook w-4 h-4" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
<a className="text-gray-400 hover:text-rose-600" href="#">
<svg className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="text-gray-400 hover:text-rose-600" href="#">
<svg className="lucide lucide-instagram w-4 h-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
</div>
</div>
<div className="">
<h4 className="font-bold text-gray-900 mb-6">Working Hours</h4>
<ul className="space-y-2 text-sm text-gray-500">
<li className="flex justify-between">
<span>Workdays</span>
<span className="text-rose-600">9:00 - 20:00</span>
</li>
<li className="flex justify-between">
<span>Saturday</span>
<span className="text-rose-600">9:00 - 20:00</span>
</li>
<li className="flex justify-between">
<span>Sunday</span>
<span className="text-rose-600">Closed</span>
</li>
</ul>
</div>
</div>
<div className="text-xs text-gray-400 text-center pt-8">© 2026 LOUDCare, All Rights Reserved</div>
</footer>


    </>
  );
}
