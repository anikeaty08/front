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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
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
      

<nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
<div className="lg:px-8 flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-2">
<div className="flex bg-center text-white bg-blue-600 w-10 h-10 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/21afbdb5-e6e5-4d02-a711-f7f14e877d16_320w.jpg)] bg-cover rounded-xl items-center justify-center">
<i className="w-6 h-6" data-lucide="sparkles"></i>
</div>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-lg font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#home">Home</a>
<a className="hover:text-slate-900 transition-colors text-lg font-medium text-slate-600" href="#services">Services</a>
<a className="text-lg font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#about">About</a>
<a className="text-lg font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#contact">Contact</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden lg:flex items-center gap-2 text-lg font-medium text-slate-600" href="tel:+1234567890">6504763052<i className="w-5 h-5" data-lucide="phone"></i></a>
<a className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-lg font-medium transition-all shadow-sm shadow-blue-200" href="#contact">
                    Get a Quote
                </a>
</div>
</div>
</nav>

<section className="lg:pt-48 lg:pb-32 lg:px-8 flex flex-col bg-center text-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bcae16ea-c651-4c7a-b4f3-d15282c315c1_1600w.jpg)] max-w-7xl bg-cover mr-auto ml-auto pt-40 pr-6 pb-24 pl-6 items-center" id="home">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-8">
<i className="w-4 h-4" data-lucide="shield-check"></i>
            Licensed, Insured &amp; Experienced Professional Cleaning Company
        </div>
<h1 className="lg:text-7xl leading-tight text-5xl font-semibold text-slate-900 tracking-tight bg-gradient-to-tl from-sky-400 to-sky-600 max-w-4xl mb-8">
            Reliable Commercial &amp; <br className="hidden lg:block"/>
<span className="text-blue-600">Apartment Cleaning Services</span>
</h1>
<p className="lg:text-2xl leading-relaxed text-xl text-slate-600 bg-[conic-gradient(from_90deg,var(--tw-gradient-stops))] from-cyan-400 via-cyan-600 to-cyan-400 max-w-2xl mb-12 -translate-x-2 -translate-y-2 -rotate-x-30">
            We specialize in rapid turnover for empty apartments and maintaining pristine office spaces. Fast turnaround, meticulous attention to detail.
        </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all shadow-sm flex items-center justify-center gap-2" href="#contact">
                Book a Cleaning
                <i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
<a className="bg-white hover:bg-gray-50 text-slate-900 border border-gray-200 px-8 py-4 rounded-full text-lg font-medium transition-all flex items-center justify-center" href="#services">
                Explore Services
            </a>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 bg-[#3a88fe] w-full border-gray-100 border-t mt-24 pt-12 gap-x-8 gap-y-8">
<div className="flex flex-col items-center gap-3">
<i className="w-8 h-8 text-blue-600" data-lucide="building-2"></i>
<span className="text-lg font-medium text-slate-900">Property Managers</span>
</div>
<div className="flex flex-col items-center gap-3">
<i className="w-8 h-8 text-blue-600" data-lucide="home"></i>
<span className="text-lg font-medium text-slate-900">Real Estate</span>
</div>
<div className="flex flex-col items-center gap-3">
<i className="w-8 h-8 text-blue-600" data-lucide="key"></i>
<span className="text-lg font-medium text-slate-900">Landlords</span>
</div>
<div className="flex flex-col items-center gap-3">
<i className="w-8 h-8 text-blue-600" data-lucide="briefcase"></i>
<span className="text-lg font-medium text-slate-900">Office Managers</span>
</div>
</div>
</section>

<section className="py-24 bg-gray-50 border-y border-gray-100" id="services">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-4xl font-semibold tracking-tight text-slate-900 mb-6">A Complete Range Of Services</h2>
<p className="text-xl text-slate-600 max-w-2xl mx-auto">
                    Tailored commercial cleaning solutions designed to meet the high standards of property management and corporate environments.
                </p>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
<div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-8">
<i className="w-7 h-7 text-blue-600" data-lucide="door-open"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">Move-in / Move-out Cleaning</h3>
<p className="text-lg text-slate-600 leading-relaxed mb-6">
                        Comprehensive deep cleaning for apartments between tenants. We ensure the space is pristine, sanitized, and ready for immediate occupancy.
                    </p>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-lg text-slate-700">
<i className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" data-lucide="check"></i>
                            Appliance deep cleaning
                        </li>
<li className="flex items-start gap-3 text-lg text-slate-700">
<i className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" data-lucide="check"></i>
                            Baseboard &amp; fixture detailing
                        </li>
</ul>
</div>

<div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
<div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-8">
<i className="w-7 h-7 text-blue-600" data-lucide="paint-roller"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">Empty Unit Turnover</h3>
<p className="text-lg text-slate-600 leading-relaxed mb-6">
                        Fast and efficient turnover cleaning services specifically designed for high-volume apartment complexes and property management companies.
                    </p>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-lg text-slate-700">
<i className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" data-lucide="check"></i>
                            Rapid 24-48 hour scheduling
                        </li>
<li className="flex items-start gap-3 text-lg text-slate-700">
<i className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" data-lucide="check"></i>
                            Standardized quality checklists
                        </li>
</ul>
</div>

<div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
<div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-8">
<i className="w-7 h-7 text-blue-600" data-lucide="monitor"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">Office Cleaning</h3>
<p className="text-lg text-slate-600 leading-relaxed mb-6">
                        Daily, weekly, or bi-weekly cleaning schedules tailored to your workspace. Promote a healthy and productive environment for your team.
                    </p>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-lg text-slate-700">
<i className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" data-lucide="check"></i>
                            Workstation sanitization
                        </li>
<li className="flex items-start gap-3 text-lg text-slate-700">
<i className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" data-lucide="check"></i>
                            Breakroom &amp; restroom maintenance
                        </li>
</ul>
</div>

<div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
<div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-8">
<i className="w-7 h-7 text-blue-600" data-lucide="factory"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">Commercial Cleaning</h3>
<p className="text-lg text-slate-600 leading-relaxed mb-6">
                        Scalable cleaning solutions for retail spaces, showrooms, and general commercial properties requiring consistent, high-quality upkeep.
                    </p>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-lg text-slate-700">
<i className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" data-lucide="check"></i>
                            Floor care &amp; surface cleaning
                        </li>
<li className="flex items-start gap-3 text-lg text-slate-700">
<i className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" data-lucide="check"></i>
                            High-traffic area focus
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="pt-24 pb-24" id="about">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="">
<h2 className="text-4xl font-semibold tracking-tight text-slate-900 mb-6">Excellence &amp; Professionalism in Every Space</h2>
<p className="text-xl text-slate-600 mb-8 leading-relaxed">
                        Our mission is to provide unparalleled commercial cleaning services that eliminate the stress of property maintenance. We understand that time is money, especially in real estate and property management.
                    </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
<i className="w-6 h-6 text-blue-600" data-lucide="clock"></i>
</div>
<div className="">
<h4 className="text-xl font-semibold tracking-tight text-slate-900 mb-2">Fast Turnaround</h4>
<p className="text-lg text-slate-600">We prioritize scheduling for apartment turnovers to minimize your vacancy periods.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
<i className="w-6 h-6 text-blue-600" data-lucide="search"></i>
</div>
<div className="">
<h4 className="text-xl font-semibold tracking-tight text-slate-900 mb-2">Attention to Detail</h4>
<p className="text-lg text-slate-600">Rigorous quality checks ensure every corner meets our high professional standards.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
<i className="w-6 h-6 text-blue-600" data-lucide="users"></i>
</div>
<div className="">
<h4 className="text-xl font-semibold tracking-tight text-slate-900 mb-2">Trusted Professionals</h4>
<p className="text-lg text-slate-600">Our staff is fully vetted, trained, licensed, and insured for your peace of mind.</p>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gray-100">
<img alt="Professional office cleaning" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&amp;fit=crop&amp;q=80"/>
</div>
<div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hidden md:block">
<div className="flex items-center gap-4">
<div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-semibold">
                                10+
                            </div>
<div>
<p className="text-xl font-semibold tracking-tight text-slate-900">Years Experience</p>
<p className="text-lg text-slate-500">In Commercial Spaces</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="text-white bg-[conic-gradient(from_210deg,var(--tw-gradient-stops))] from-cyan-400 via-cyan-600 to-cyan-400 pt-24 pb-24" id="contact">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16">
<div className="">
<h2 className="text-4xl font-semibold tracking-tight mb-6">Request a Free Quote</h2>
<p className="text-xl text-slate-400 bg-slate-300 max-w-lg mb-12">
                        Ready to elevate your property's cleanliness? Contact us today to discuss your specific needs and receive a customized service plan.
                    </p>
<div className="space-y-8">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
<i className="w-6 h-6 text-blue-400" data-lucide="phone"></i>
</div>
<div className="">
<p className="text-lg text-slate-400 mb-1">Call us directly</p>
<a className="hover:text-blue-400 transition-colors text-2xl font-medium" href="tel:+15551234567">6504763052</a>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
<i className="w-6 h-6 text-blue-400" data-lucide="mail"></i>
</div>
<div className="">
<p className="text-lg text-slate-400 mb-1">Email us</p>
<a className="text-2xl font-medium hover:text-blue-400 transition-colors" href="mailto:hello@cleanserv.com">hello@cleanserv.com</a>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
<i className="w-6 h-6 text-blue-400" data-lucide="map-pin"></i>
</div>
<div className="">
<p className="text-lg text-slate-400 mb-1">Service Area</p>
<p className="text-2xl font-medium">The whole Bay Area</p>
</div>
</div>
</div>
</div>
<div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl">
<form className="space-y-6">
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-lg font-medium text-slate-900 block">First Name</label>
<input className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="John" type="text"/>
</div>
<div className="space-y-2">
<label className="text-lg font-medium text-slate-900 block">Last Name</label>
<input className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-lg font-medium text-slate-900 block">Email</label>
<input className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="john@company.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-lg font-medium text-slate-900 block">Service Needed</label>
<div className="relative">
<select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-lg text-slate-900 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all">
<option>Move-in / Move-out Cleaning</option>
<option>Empty Unit Turnover</option>
<option>Office Cleaning</option>
<option>Commercial Cleaning</option>
</select>
<i className="w-5 h-5 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>
<div className="space-y-2">
<label className="text-lg font-medium text-slate-900 block">Details</label>
<textarea className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="Tell us about your space (sq ft, frequency)..." rows="4"></textarea>
</div>
<button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl text-lg font-medium transition-all shadow-sm" type="button">
                            Submit Request
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-slate-950 border-white/10 border-t pt-12 pb-12">
<div className="lg:px-8 flex flex-col md:flex-row gap-6 max-w-7xl mr-auto ml-auto pr-6 pl-6 gap-x-6 gap-y-6 items-center justify-between">
<div className="flex items-center gap-2">
<div className="flex text-white bg-blue-600 w-8 h-8 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/17c2b240-5202-441f-bf5c-41594f148190_320w.jpg?w=800&amp;q=80)] bg-cover bg-center rounded-lg items-center justify-center">
<i className="w-4 h-4" data-lucide="sparkles"></i>
</div>
<span className="text-lg font-semibold text-white tracking-tight">crystal bright</span>
</div>
<p className="text-slate-500 text-lg">© 2024 CleanServ Commercial Cleaning Services. All rights reserved.</p>
</div>
</footer>


    </>
  );
}
