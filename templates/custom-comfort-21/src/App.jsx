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



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



        document.addEventListener('DOMContentLoaded', () => {
            // Intersection Observer for Reveal Animations
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -80px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal-on-scroll').forEach(el => {
                observer.observe(el);
            });

            // Testimonial Carousel Logic
            const cards = document.querySelectorAll('.testimonial-card');
            let currentIndex = 0;

            if(cards.length > 0) {
                setInterval(() => {
                    // Fade out current
                    cards[currentIndex].classList.remove('active');
                    
                    // Calculate next index
                    currentIndex = (currentIndex + 1) % cards.length;
                    
                    // Fade in next
                    cards[currentIndex].classList.add('active');
                }, 6000); // 6 seconds per slide
            }
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
      

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
<a className="flex items-center gap-2 group" href="#hero">
<div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-blue-600/20 group-hover:scale-105 transition-transform">
<iconify-icon icon="solar:feet-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="font-semibold text-slate-900 tracking-tight text-base">Custom Comfort</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-blue-600 transition-colors" href="#process">How It Works</a>
<a className="hover:text-blue-600 transition-colors" href="#reviews">Reviews</a>
<a className="hover:text-blue-600 transition-colors" href="#faq">FAQ</a>
</div>
<a className="hidden md:flex bg-slate-900 text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-slate-800 transition-all hover:shadow-lg transform hover:-translate-y-0.5" href="#assessment">
                Take Assessment
            </a>

<button className="md:hidden text-slate-900">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="relative pt-20 pb-32 px-6 overflow-hidden" id="hero">

<div className="absolute top-0 inset-x-0 h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/80 via-white to-white -z-10"></div>
<div className="max-w-5xl mx-auto text-center relative z-10">
<div className="reveal-on-scroll inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-wide mb-8 shadow-sm">
<iconify-icon icon="solar:star-linear" width="14"></iconify-icon>
<span>Top Podiatrist Recommended</span>
</div>
<h1 className="reveal-on-scroll text-5xl md:text-7xl font-semibold text-slate-900 tracking-tight leading-[1.05] mb-8">
                Stop Foot Pain. Start Living.<br/>
<span className="text-slate-400">Custom Orthotics Made Just For You.</span>
</h1>
<p className="reveal-on-scroll text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
                The fully at-home process designed by top podiatrists. Professional grade comfort without the clinic visit.
            </p>
<div className="reveal-on-scroll flex flex-col items-center gap-5">
<a className="group relative inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 rounded-full hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600" href="#assessment">
                    Take Our Free Foot Assessment
                    <iconify-icon className="ml-2 transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
<p className="text-xs font-medium text-slate-400 flex items-center gap-2">
<iconify-icon className="text-blue-600" icon="solar:verified-check-linear"></iconify-icon>
                    180-Day Money-Back Guarantee | FSA/HSA Eligible
                </p>
</div>
</div>

<div className="reveal-on-scroll mt-20 max-w-4xl mx-auto relative perspective-1000">
<div className="relative z-10 bg-white rounded-3xl shadow-2xl shadow-slate-200/50 border border-slate-100 p-3 md:p-4 transform rotate-x-6 hover:rotate-x-0 transition-transform duration-1000">
<div className="bg-slate-50 rounded-2xl overflow-hidden aspect-[2/1] md:aspect-[21/9] flex items-center justify-center relative">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-50/50 to-transparent"></div>

<div className="flex gap-8 md:gap-16 items-center justify-center relative z-20">

<div className="w-32 h-40 md:w-48 md:h-64 bg-white rounded-lg shadow-xl border border-slate-100 flex flex-col items-center justify-center relative tilt-card">
<div className="absolute inset-4 border border-dashed border-slate-200 rounded"></div>
<iconify-icon className="text-slate-300 text-6xl md:text-8xl" icon="solar:foot-linear"></iconify-icon>
<span className="absolute bottom-6 text-xs font-medium text-slate-400 uppercase tracking-wider">Left</span>
</div>

<div className="w-32 h-40 md:w-48 md:h-64 bg-white rounded-lg shadow-xl border border-slate-100 flex flex-col items-center justify-center relative tilt-card">
<div className="absolute inset-4 border border-dashed border-slate-200 rounded"></div>
<iconify-icon className="text-slate-300 text-6xl md:text-8xl scale-x-[-1]" icon="solar:foot-linear"></iconify-icon>
<span className="absolute bottom-6 text-xs font-medium text-slate-400 uppercase tracking-wider">Right</span>
</div>
</div>

<div className="absolute right-10 top-10 bg-white/90 backdrop-blur pl-3 pr-4 py-2 rounded-full shadow-lg border border-slate-100 animate-float flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
<iconify-icon icon="solar:box-linear"></iconify-icon>
</div>
<div className="text-left">
<div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Status</div>
<div className="text-xs font-semibold text-slate-900">Ready to Ship</div>
</div>
</div>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-400/10 blur-[120px] -z-10 rounded-full"></div>
</div>
</header>

<section className="border-y border-slate-100 bg-slate-50/50 py-10 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 text-center mb-8">
<span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">As Seen In</span>
</div>
<div className="relative flex overflow-x-hidden group">
<div className="animate-marquee whitespace-nowrap flex items-center space-x-20 px-4">
<span className="text-2xl font-bold text-slate-300 tracking-tight">FORBES</span>
<span className="text-2xl font-bold text-slate-300 tracking-tight">HEALTHLINE</span>
<span className="text-2xl font-bold text-slate-300 tracking-tight">RUNNER'S WORLD</span>
<span className="text-2xl font-bold text-slate-300 tracking-tight">MEN'S HEALTH</span>
<span className="text-2xl font-bold text-slate-300 tracking-tight">GQ</span>
<span className="text-2xl font-bold text-slate-300 tracking-tight">WIRED</span>

<span className="text-2xl font-bold text-slate-300 tracking-tight">FORBES</span>
<span className="text-2xl font-bold text-slate-300 tracking-tight">HEALTHLINE</span>
<span className="text-2xl font-bold text-slate-300 tracking-tight">RUNNER'S WORLD</span>
<span className="text-2xl font-bold text-slate-300 tracking-tight">MEN'S HEALTH</span>
<span className="text-2xl font-bold text-slate-300 tracking-tight">GQ</span>
<span className="text-2xl font-bold text-slate-300 tracking-tight">WIRED</span>
</div>

<div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-slate-50 to-transparent z-10"></div>
<div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-slate-50 to-transparent z-10"></div>
</div>
</section>

<section className="py-32 px-6 max-w-7xl mx-auto" id="process">
<div className="text-center mb-24 reveal-on-scroll">
<h2 className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-6">Your Pain-Free Life in 3 Simple Steps.</h2>
<p className="text-lg text-slate-500 font-normal">Professional orthotics without leaving your living room.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-slate-100 border-t border-dashed border-slate-300 -z-10"></div>

<div className="reveal-on-scroll tilt-card group p-10 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300">
<div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 text-blue-600 flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300 relative z-10">
<span className="font-mono text-xl font-bold">01</span>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-4 tracking-tight">Take a 60-Second Online Quiz</h3>
<p className="text-base text-slate-500 leading-relaxed mb-6">Tell us about your foot type, pain points, and daily activities to start your profile.</p>
<a className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700" href="#assessment">
                    Start Now <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="reveal-on-scroll tilt-card group p-10 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300" style={{transitionDelay: '100ms'}}>
<div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 text-blue-600 flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300 relative z-10">
<span className="font-mono text-xl font-bold">02</span>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-4 tracking-tight">Receive &amp; Complete Kit</h3>
<p className="text-base text-slate-500 leading-relaxed mb-6">Our foam impression kit arrives at your door. Step in, step out, and ship it back for free.</p>
<div className="flex items-center gap-2 text-xs font-medium text-slate-400 bg-slate-50 px-3 py-1 rounded-full w-fit">
<iconify-icon icon="solar:box-linear"></iconify-icon> Prepaid Label Included
                </div>
</div>

<div className="reveal-on-scroll tilt-card group p-10 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300" style={{transitionDelay: '200ms'}}>
<div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 text-blue-600 flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300 relative z-10">
<span className="font-mono text-xl font-bold">03</span>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-4 tracking-tight">Start Healing</h3>
<p className="text-base text-slate-500 leading-relaxed mb-6">Receive your custom-engineered orthotics in 2 weeks. Slip them in and feel the relief.</p>
<div className="flex items-center gap-2 text-xs font-medium text-slate-400 bg-slate-50 px-3 py-1 rounded-full w-fit">
<iconify-icon icon="solar:stopwatch-linear"></iconify-icon> Fast Turnaround
                </div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-slate-50/80 border-y border-slate-100" id="conditions">
<div className="max-w-7xl mx-auto">
<div className="mb-16 reveal-on-scroll flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-3">Custom Solutions for Every Step.</h2>
<p className="text-slate-500 max-w-lg">Targeted relief engineered for your specific pathology.</p>
</div>
<a className="hidden md:flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700" href="#assessment">
                    See All Conditions <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[340px]">

<div className="reveal-on-scroll md:col-span-1 bg-white rounded-3xl p-8 border border-slate-200 flex flex-col justify-between hover:border-blue-200 transition-all hover:shadow-lg group relative overflow-hidden">
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform text-blue-600">
<iconify-icon icon="solar:medical-kit-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-slate-900 mb-3 tracking-tight">Plantar Fasciitis</h3>
<p className="text-sm text-slate-500 leading-relaxed">Targeted arch support to alleviate sharp heel pain and morning inflammation. Regain your first step comfort.</p>
</div>
<div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-50 rounded-tl-full opacity-50 group-hover:scale-125 transition-transform duration-500 origin-bottom-right"></div>
</div>

<div className="reveal-on-scroll md:col-span-2 bg-slate-900 rounded-3xl p-10 flex flex-col justify-between relative overflow-hidden group text-white hover:shadow-xl transition-all">
<div className="relative z-10 max-w-md">
<div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6 backdrop-blur-md border border-white/10">
<iconify-icon className="text-white" icon="solar:layers-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold mb-3 tracking-tight">Flat Feet Support</h3>
<p className="text-slate-400 leading-relaxed">Structural realignment to prevent overpronation. We lift the arch to its natural position, reducing fatigue during long periods of standing or walking.</p>
</div>

<div className="absolute right-[-20px] bottom-[-40px] opacity-10 group-hover:opacity-20 transition-opacity duration-500">
<iconify-icon icon="solar:bone-broken-linear" width="300"></iconify-icon>
</div>
</div>

<div className="reveal-on-scroll md:col-span-3 bg-gradient-to-br from-blue-50 to-white rounded-3xl p-10 border border-blue-100 flex flex-col md:flex-row items-center justify-between hover:shadow-lg transition-all group">
<div className="max-w-2xl mb-8 md:mb-0">
<div className="flex items-center gap-3 mb-4">
<div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
<iconify-icon icon="solar:running-linear" width="24"></iconify-icon>
</div>
<span className="text-sm font-semibold text-blue-700 bg-blue-100 px-3 py-1 rounded-full">Most Popular</span>
</div>
<h3 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-3 tracking-tight">Everyday Activity Comfort</h3>
<p className="text-slate-500 text-lg">Whether you're running marathons or chasing grandkids, experience adaptive cushioning that moves with you.</p>
</div>
<div className="flex gap-4">

<div className="h-28 w-28 rounded-2xl bg-white border border-slate-100 flex items-center justify-center shadow-sm group-hover:-translate-y-2 transition-transform duration-300">
<iconify-icon className="text-4xl text-slate-300" icon="solar:shoe-linear"></iconify-icon>
</div>
<div className="h-28 w-28 rounded-2xl bg-blue-600 border border-blue-500 flex items-center justify-center shadow-lg group-hover:-translate-y-4 transition-transform duration-300 delay-75">
<iconify-icon className="text-4xl text-white" icon="solar:smile-circle-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 max-w-7xl mx-auto text-center overflow-hidden" id="reviews">
<div className="mb-16 reveal-on-scroll">
<h2 className="text-4xl font-semibold text-slate-900 tracking-tight mb-2">Thousands Are Walking Pain-Free.</h2>
<div className="flex justify-center items-center gap-2 text-sm font-medium text-slate-500">
<span className="flex text-yellow-400">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</span>
<span>4.9/5 Average Rating</span>
</div>
</div>
<div className="testimonial-slider reveal-on-scroll relative w-full max-w-3xl mx-auto">

<div className="testimonial-card active bg-white p-10 rounded-3xl border border-slate-200 shadow-xl text-left">
<iconify-icon className="text-blue-100 text-6xl absolute top-6 right-8" icon="solar:quote-up-linear"></iconify-icon>
<p className="text-xl text-slate-700 font-medium mb-8 leading-relaxed relative z-10">"I spent hundreds on store-bought inserts that did nothing. Custom Comfort fixed my plantar fasciitis in 3 weeks. The process was incredibly easy and the support team was fantastic."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-600 text-sm border border-slate-200">JD</div>
<div>
<div className="text-base font-bold text-slate-900">James D.</div>
<div className="text-xs text-blue-600 font-semibold uppercase tracking-wide">Verified Buyer</div>
</div>
</div>
</div>

<div className="testimonial-card bg-white p-10 rounded-3xl border border-slate-200 shadow-xl text-left">
<iconify-icon className="text-blue-100 text-6xl absolute top-6 right-8" icon="solar:quote-up-linear"></iconify-icon>
<p className="text-xl text-slate-700 font-medium mb-8 leading-relaxed relative z-10">"As a nurse on my feet for 12 hours, these were a lifesaver. My back pain is gone too. It feels like the shoes were made just for my feet. Worth every penny."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600 text-sm border border-blue-200">SR</div>
<div>
<div className="text-base font-bold text-slate-900">Sarah R.</div>
<div className="text-xs text-blue-600 font-semibold uppercase tracking-wide">Verified Buyer</div>
</div>
</div>
</div>

<div className="testimonial-card bg-white p-10 rounded-3xl border border-slate-200 shadow-xl text-left">
<iconify-icon className="text-blue-100 text-6xl absolute top-6 right-8" icon="solar:quote-up-linear"></iconify-icon>
<p className="text-xl text-slate-700 font-medium mb-8 leading-relaxed relative z-10">"The impression kit was fun to do with the kids watching, and the fit is perfect. It's like walking on clouds tailored just for me. I ordered a second pair immediately."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-600 text-sm border border-slate-200">MK</div>
<div>
<div className="text-base font-bold text-slate-900">Mike K.</div>
<div className="text-xs text-blue-600 font-semibold uppercase tracking-wide">Verified Buyer</div>
</div>
</div>
</div>
</div>

<div className="flex justify-center gap-2 mt-8">
<div className="w-2 h-2 rounded-full bg-blue-600"></div>
<div className="w-2 h-2 rounded-full bg-slate-200"></div>
<div className="w-2 h-2 rounded-full bg-slate-200"></div>
</div>
</section>

<section className="py-24 px-6 bg-slate-900 text-white overflow-hidden" id="guarantee">
<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
<div className="reveal-on-scroll order-2 md:order-1">
<div className="inline-flex items-center gap-2 p-3 pr-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-8 backdrop-blur-sm">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
<span className="text-sm font-semibold">Peace of Mind</span>
</div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">Risk-Free Comfort. Guaranteed.</h2>
<p className="text-slate-400 text-lg mb-10 leading-relaxed max-w-lg">
                    We are so confident in our podiatrist-designed orthotics that we offer a comprehensive 180-day money-back guarantee. If your pain doesn't improve, you don't pay.
                </p>
<ul className="space-y-5">
<li className="flex items-center gap-4 group">
<div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500 transition-colors">
<iconify-icon className="text-blue-400 group-hover:text-white" icon="solar:check-circle-linear"></iconify-icon>
</div>
<span className="text-base font-medium">Designed by licensed podiatrists</span>
</li>
<li className="flex items-center gap-4 group">
<div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500 transition-colors">
<iconify-icon className="text-blue-400 group-hover:text-white" icon="solar:check-circle-linear"></iconify-icon>
</div>
<span className="text-base font-medium">Free adjustments included</span>
</li>
<li className="flex items-center gap-4 group">
<div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500 transition-colors">
<iconify-icon className="text-blue-400 group-hover:text-white" icon="solar:check-circle-linear"></iconify-icon>
</div>
<span className="text-base font-medium">Full refund if not satisfied</span>
</li>
</ul>
</div>
<div className="reveal-on-scroll order-1 md:order-2 flex justify-center relative">

<div className="absolute inset-0 bg-blue-600 rounded-full blur-[100px] opacity-20"></div>
<div className="relative z-10 bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-12 shadow-2xl tilt-card w-full max-w-md aspect-square flex flex-col items-center justify-center">
<div className="text-[140px] font-bold text-white leading-none tracking-tighter drop-shadow-lg">180</div>
<div className="text-2xl text-blue-400 font-semibold uppercase tracking-[0.2em] mt-2">Days</div>
<div className="mt-8 px-5 py-2.5 bg-white/5 rounded-full text-xs font-semibold border border-white/10 uppercase tracking-wide">
                        Money-Back Guarantee
                    </div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 max-w-3xl mx-auto" id="faq">
<div className="text-center mb-16 reveal-on-scroll">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-2">Common Questions</h2>
<p className="text-slate-500">Everything you need to know about getting started.</p>
</div>
<div className="space-y-4 reveal-on-scroll">

<details className="group bg-white border border-slate-200 rounded-2xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden transition-all duration-300 hover:border-blue-300 open:border-blue-200 open:shadow-md">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900 font-semibold hover:bg-slate-50 transition-colors">
<span className="text-lg tracking-tight">How long does the process take?</span>
<span className="relative size-6 shrink-0 text-slate-400 group-hover:text-blue-600">
<iconify-icon className="absolute inset-0 size-6 opacity-100 group-open:opacity-0 transition-opacity" icon="solar:add-circle-linear" width="24"></iconify-icon>
<iconify-icon className="absolute inset-0 size-6 opacity-0 group-open:opacity-100 transition-opacity text-blue-600" icon="solar:minus-circle-linear" width="24"></iconify-icon>
</span>
</summary>
<div className="p-6 pt-0 text-base leading-relaxed text-slate-500">
                    Once you complete the quiz, your impression kit ships within 24 hours. After you return your impressions, it takes approximately 10-14 business days to engineer and ship your custom orthotics.
                </div>
</details>

<details className="group bg-white border border-slate-200 rounded-2xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden transition-all duration-300 hover:border-blue-300 open:border-blue-200 open:shadow-md">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900 font-semibold hover:bg-slate-50 transition-colors">
<span className="text-lg tracking-tight">Are these covered by insurance?</span>
<span className="relative size-6 shrink-0 text-slate-400 group-hover:text-blue-600">
<iconify-icon className="absolute inset-0 size-6 opacity-100 group-open:opacity-0 transition-opacity" icon="solar:add-circle-linear" width="24"></iconify-icon>
<iconify-icon className="absolute inset-0 size-6 opacity-0 group-open:opacity-100 transition-opacity text-blue-600" icon="solar:minus-circle-linear" width="24"></iconify-icon>
</span>
</summary>
<div className="p-6 pt-0 text-base leading-relaxed text-slate-500">
                    Custom Comfort Orthotics are eligible for FSA and HSA payments. While we don't bill insurance directly, we can provide a detailed invoice for you to submit for out-of-network reimbursement.
                </div>
</details>

<details className="group bg-white border border-slate-200 rounded-2xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden transition-all duration-300 hover:border-blue-300 open:border-blue-200 open:shadow-md">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900 font-semibold hover:bg-slate-50 transition-colors">
<span className="text-lg tracking-tight">How do I know if they will fit my shoes?</span>
<span className="relative size-6 shrink-0 text-slate-400 group-hover:text-blue-600">
<iconify-icon className="absolute inset-0 size-6 opacity-100 group-open:opacity-0 transition-opacity" icon="solar:add-circle-linear" width="24"></iconify-icon>
<iconify-icon className="absolute inset-0 size-6 opacity-0 group-open:opacity-100 transition-opacity text-blue-600" icon="solar:minus-circle-linear" width="24"></iconify-icon>
</span>
</summary>
<div className="p-6 pt-0 text-base leading-relaxed text-slate-500">
                    Our orthotics are designed to have a low profile that fits into most sneakers, casual shoes, and boots with removable insoles. We also offer specific cuts for dress shoes upon request during the assessment.
                </div>
</details>
</div>
</section>

<section className="py-32 px-6 text-center bg-slate-50 border-t border-slate-200 relative overflow-hidden" id="assessment">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-100/50 to-transparent pointer-events-none"></div>
<div className="max-w-3xl mx-auto reveal-on-scroll relative z-10">
<h2 className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-8">Ready to Finally End Your Foot Pain?</h2>
<p className="text-slate-500 mb-10 text-lg md:text-xl font-normal">Join thousands of happy feet. It takes less than a minute to start.</p>
<div className="flex flex-col items-center gap-4">
<button className="inline-flex items-center justify-center px-12 py-5 text-lg font-semibold text-white transition-all duration-200 bg-blue-600 rounded-full hover:bg-blue-700 shadow-xl hover:shadow-blue-600/30 transform hover:-translate-y-1">
                    Take Our Free Foot Assessment
                </button>
<span className="text-sm text-slate-400 mt-2">No commitment required.</span>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-20 pb-10 px-6" id="footer">
<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-2 md:col-span-1">
<a className="flex items-center gap-2 mb-6 group" href="#hero">
<div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="solar:feet-linear" width="18"></iconify-icon>
</div>
<span className="font-semibold text-slate-900 tracking-tight text-base">Custom Comfort</span>
</a>
<p className="text-sm text-slate-400 leading-relaxed mb-6">Expertly crafted custom orthotics delivered to your door. The smart way to walk pain-free.</p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-blue-600 transition-colors" href="#"><iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-blue-600 transition-colors" href="#"><iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-blue-600 transition-colors" href="#"><iconify-icon icon="solar:twitter-linear" width="20"></iconify-icon></a>
</div>
</div>
<div id="pricing">
<h4 className="font-semibold text-slate-900 text-sm mb-6 tracking-wide uppercase">Product</h4>
<ul className="space-y-3 text-sm text-slate-500 font-medium">
<li><a className="hover:text-blue-600 transition-colors" href="#assessment">Pricing</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#process">How It Works</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#reviews">Reviews</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#conditions">Conditions Treated</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 text-sm mb-6 tracking-wide uppercase">Support</h4>
<ul className="space-y-3 text-sm text-slate-500 font-medium">
<li><a className="hover:text-blue-600 transition-colors" href="#faq">Help / FAQ</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Contact Us</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#guarantee">Returns &amp; Guarantee</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Track Order</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 text-sm mb-6 tracking-wide uppercase">Legal</h4>
<ul className="space-y-3 text-sm text-slate-500 font-medium">
<li><a className="hover:text-blue-600 transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Cookie Policy</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
<p>Copyright © 2023 Custom Comfort Orthotics. All rights reserved.</p>
<div className="flex items-center gap-1">
<span>Designed with</span>
<iconify-icon className="text-red-400" icon="solar:heart-bold"></iconify-icon>
<span>for happy feet.</span>
</div>
</div>
</footer>



    </>
  );
}
