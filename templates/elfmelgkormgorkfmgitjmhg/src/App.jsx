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



        lucide.createIcons();
    
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
      

<nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center text-white transition-colors group-hover:bg-[#00A657]">

<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="14"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
</div>
<span className="font-poppins font-semibold text-xl tracking-tight text-slate-900">CoFee</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-[15px] font-medium text-slate-600 hover:text-[#00A657] transition-colors" href="#">About us</a>
<a className="text-[15px] font-medium text-slate-600 hover:text-[#00A657] transition-colors" href="#">Blog</a>
<a className="text-[15px] font-medium text-slate-600 hover:text-[#00A657] transition-colors" href="#">Contact us</a>
</div>

<div className="hidden md:flex items-center gap-4">
<button className="text-[15px] font-medium text-slate-600 hover:text-slate-900 transition-colors px-4 py-2">Log In</button>
<button className="bg-[#00A657] hover:bg-[#008f4b] text-white text-[15px] font-medium px-6 py-2.5 rounded-full transition-all shadow-lg shadow-emerald-600/10 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="plus"></i>
                    Try for Free
                </button>
</div>

<button className="md:hidden text-slate-600 p-2">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</nav>
<main className="flex-grow">

<header className="relative pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden bg-slate-900">

<div className="absolute inset-0 z-0">
<img alt="Students learning" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 flex justify-center">
<h1 className="font-epilogue font-bold text-6xl md:text-8xl text-white tracking-tighter-custom drop-shadow-lg">
                    About Us
                </h1>
</div>
</header>

<section className="py-24 bg-white relative z-10 -mt-10 rounded-t-[40px]">
<div className="max-w-5xl mx-auto px-6">

<h2 className="text-3xl md:text-[3.5rem] md:leading-[1.1] font-semibold text-center text-slate-900 tracking-tight-custom mb-24 max-w-4xl mx-auto">
                    CoFee was born with a simple mission — to make recurring payments effortless for businesses of every size.
                </h2>

<div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 text-center border-t border-b border-slate-100 py-16">
<div className="flex flex-col items-center gap-1 group">
<span className="text-5xl md:text-6xl font-bold text-[#00A657] tracking-tighter group-hover:scale-105 transition-transform duration-300">20Cr+</span>
<span className="text-base font-medium text-slate-500 mt-2">Fees Collected</span>
</div>
<div className="flex flex-col items-center gap-1 group">
<span className="text-5xl md:text-6xl font-bold text-[#00A657] tracking-tighter group-hover:scale-105 transition-transform duration-300">3L+</span>
<span className="text-base font-medium text-slate-500 mt-2">Transactions Processed</span>
</div>
<div className="flex flex-col items-center gap-1 group">
<span className="text-5xl md:text-6xl font-bold text-[#00A657] tracking-tighter group-hover:scale-105 transition-transform duration-300">100+</span>
<span className="text-base font-medium text-slate-500 mt-2">Happy Institutions</span>
</div>
<div className="flex flex-col items-center gap-1 group">
<span className="text-5xl md:text-6xl font-bold text-[#00A657] tracking-tighter group-hover:scale-105 transition-transform duration-300">0.5L+</span>
<span className="text-base font-medium text-slate-500 mt-2">Happy Parents</span>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-[880px] mx-auto px-6">
<p className="text-lg md:text-[1.25rem] text-slate-600 leading-[1.8] text-center font-normal">
                    CoFee was built from a simple purpose: fee collection shouldn’t be a burden. We saw how businesses and institutions struggled with recurring payments—endless reminders, manual records, late fees, and constant follow-ups. Shaped to solve this everyday user frustration, we built CoFee at KeyValue Software Systems, a product shaped by listening to these everyday frustrations.
                    <br/><br/>
                    Our goal has always been clear: remove the stress of fee collections so institutions can focus on what truly matters—teaching, growing, and serving their communities. With CoFee, payments are automated, transparent, and secure. No chaos, no chasing. Just a smooth system that works in the background, giving both businesses and parents peace of mind.
                </p>
</div>
</section>

<section className="py-20 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">

<div className="flex flex-col md:flex-row gap-6 h-[600px]">
<div className="flex-1 rounded-3xl overflow-hidden relative group">
<img alt="Campus Life" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&amp;q=80"/>
</div>
<div className="flex-1 flex flex-col gap-6">
<div className="flex-1 rounded-3xl overflow-hidden relative group">
<img alt="Students graduating" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&amp;q=80"/>
</div>
<div className="flex-1 rounded-3xl overflow-hidden relative group">
<img alt="Learning environment" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&amp;q=80"/>
</div>
</div>
<div className="flex-1 rounded-3xl overflow-hidden relative group mt-12 mb-12 md:mt-24 md:mb-0">
<img alt="Classroom discussion" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=800&amp;q=80"/>
</div>
</div>
</div>
</section>

<section className="py-32 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-4xl md:text-6xl font-semibold text-center text-[#14171D] mb-20 tracking-tighter-custom">Our Brand Essence</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-[32px] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100">
<div className="aspect-[4/3] mb-8 rounded-2xl overflow-hidden relative group">
<img alt="Simplicity concept" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/5"></div>
</div>
<h3 className="text-3xl font-semibold text-slate-900 mb-4">Name</h3>
<p className="text-slate-600 text-lg leading-relaxed">
                            The name CoFee stands for more than coffee—it represents collect ('Co') fee ('Fee'). Just like coffee fuels people, CoFee fuels businesses with seamless payment flows.
                        </p>
</div>

<div className="bg-white p-8 rounded-[32px] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100">
<div className="aspect-[4/3] mb-8 bg-slate-50 rounded-2xl flex flex-col items-center justify-center relative overflow-hidden group">

<div className="relative w-40 h-40 transition-transform duration-700 group-hover:rotate-180">
<div className="absolute inset-0 rounded-full border border-slate-900/10"></div>
<div className="absolute inset-8 rounded-full border-2 border-slate-900/80 flex items-center justify-center">
<div className="w-3 h-3 bg-[#00A657] rounded-full"></div>
</div>
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-slate-900 rounded-full"></div>
</div>
<div className="absolute bottom-6 flex gap-6 text-xs font-semibold text-slate-400 uppercase tracking-widest">
<span>Continuity</span>
<span>Trust</span>
</div>
</div>
<h3 className="text-3xl font-semibold text-slate-900 mb-4">Logo</h3>
<p className="text-slate-600 text-lg leading-relaxed">
                            Our logo is designed to reflect trust and simplicity. The circular form signifies continuity—recurring payments made effortless.
                        </p>
</div>

<div className="bg-white p-8 rounded-[32px] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100">
<div className="aspect-[4/3] mb-8 rounded-2xl overflow-hidden relative group">
<img alt="Ease of use" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/5"></div>
</div>
<h3 className="text-3xl font-semibold text-slate-900 mb-4">Tagline</h3>
<p className="text-slate-600 text-lg leading-relaxed">
                            "Fees with ease" is more than just a line — it’s our mission. Fee collection should never be stressful. With CoFee, it becomes simple, effortless, and never a burden.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-4xl md:text-6xl font-semibold text-slate-900 mb-8 tracking-tighter-custom">
                    Every fee, every detail — secured with care
                </h2>
<p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto mb-24 font-light">
                    From SOC 2 compliance to encrypted payments, CoFee protects every transaction with industry-best security standards.
                </p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">

<div className="flex flex-col items-center gap-6 p-10 bg-slate-50 rounded-[32px] hover:bg-slate-100 transition-colors duration-300">
<div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
<i className="w-10 h-10 stroke-[1.5]" data-lucide="shield-check"></i>
</div>
<span className="text-xl font-semibold text-slate-900">SOC 2 Compliant</span>
</div>

<div className="flex flex-col items-center gap-6 p-10 bg-slate-50 rounded-[32px] hover:bg-slate-100 transition-colors duration-300">
<div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center text-green-600">
<i className="w-10 h-10 stroke-[1.5]" data-lucide="lock"></i>
</div>
<span className="text-xl font-semibold text-slate-900">GDPR Compliant</span>
</div>

<div className="flex flex-col items-center gap-6 p-10 bg-slate-50 rounded-[32px] hover:bg-slate-100 transition-colors duration-300">
<div className="w-24 h-24 bg-purple-50 rounded-full flex items-center justify-center text-purple-600">
<i className="w-10 h-10 stroke-[1.5]" data-lucide="file-check"></i>
</div>
<span className="text-xl font-semibold text-slate-900">HIPAA Compliant</span>
</div>

<div className="flex flex-col items-center gap-6 p-10 bg-slate-50 rounded-[32px] hover:bg-slate-100 transition-colors duration-300">
<div className="w-24 h-24 bg-cyan-50 rounded-full flex items-center justify-center text-cyan-600">
<i className="w-10 h-10 stroke-[1.5]" data-lucide="server"></i>
</div>
<span className="text-xl font-semibold text-slate-900">End-to-End Encryption</span>
</div>
</div>
</div>
</section>

<section className="py-32 bg-slate-50 relative overflow-hidden">

<div className="absolute -right-40 top-40 w-[600px] h-[600px] bg-emerald-100/50 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-4xl md:text-6xl font-semibold text-center text-slate-900 mb-20 tracking-tighter-custom">Built by Revolutionaries</h2>
<div className="grid md:grid-cols-2 gap-20 items-center">
<div className="relative order-2 md:order-1">
<p className="text-xl text-slate-600 leading-relaxed mb-12 font-light">
                            CoFee is built and nurtured by <strong className="text-slate-900 font-semibold">KeyValue Software Systems</strong>, a global leader in AI-first product development. Since 2015, KeyValue has partnered with startups and enterprises to build intelligent, scalable products that power industries worldwide.
                        </p>
<div className="grid grid-cols-2 gap-y-12 gap-x-8">
<div>
<div className="text-5xl font-bold text-slate-900 mb-2 tracking-tight">450+</div>
<div className="text-[#00A657] font-medium text-lg">Engineers</div>
</div>
<div>
<div className="text-5xl font-bold text-slate-900 mb-2 tracking-tight">120+</div>
<div className="text-[#00A657] font-medium text-lg">Products</div>
</div>
<div>
<div className="text-5xl font-bold text-slate-900 mb-2 tracking-tight">9+</div>
<div className="text-[#00A657] font-medium text-lg">Years Experience</div>
</div>
<div>
<div className="text-5xl font-bold text-slate-900 mb-2 tracking-tight">4+</div>
<div className="text-[#00A657] font-medium text-lg">Locations</div>
</div>
</div>
<button className="mt-14 group flex items-center gap-3 text-lg text-[#00A657] font-semibold hover:text-[#008f4b] transition-colors">
                            Learn More <i className="w-5 h-5 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</button>
</div>
<div className="order-1 md:order-2 flex justify-center">
<div className="relative w-full aspect-square max-w-[500px]">

<div className="absolute inset-0 bg-[#00A657]/5 rounded-full animate-pulse"></div>
<div className="absolute inset-8 bg-[#00A657]/10 rounded-full"></div>

<div className="absolute inset-16 rounded-full overflow-hidden border-8 border-white shadow-2xl">
<img alt="KeyValue Team" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#00A657]/80 to-transparent flex items-end justify-center pb-12">
<span className="text-white text-3xl font-bold font-poppins tracking-wider">KeyValue</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-32 overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-br from-[#00A657] via-[#0E463B] to-[#14171D]"></div>

<div className="absolute top-0 right-0 w-2/3 h-full bg-white/5 skew-x-[20deg] origin-bottom-right backdrop-blur-3xl pointer-events-none"></div>
<div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-16">
<div className="max-w-2xl">
<h2 className="text-5xl md:text-[5.5rem] font-bold text-white leading-[1.1] mb-10 tracking-tighter-custom">
                        Say hello to<br/>effortless<br/><span className="text-emerald-300">fee collection</span>
</h2>
<div className="flex flex-wrap gap-6">
<button className="bg-white text-emerald-950 font-semibold text-lg px-8 py-4 rounded-full hover:bg-emerald-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center gap-3">
                            Try for Free <i className="w-5 h-5" data-lucide="plus"></i>
</button>
<button className="bg-transparent border border-white/30 text-white font-semibold text-lg px-8 py-4 rounded-full hover:bg-white/10 transition-all flex items-center gap-3">
                            Contact Us <i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
</div>
</div>

<div className="hidden lg:block relative w-96 h-80 perspective-1000">
<div className="absolute top-0 right-0 w-72 h-72 bg-white/10 backdrop-blur-md rounded-[3rem] border border-white/20 p-8 shadow-2xl transform rotate-6 hover:rotate-3 transition-transform duration-500">
<div className="w-14 h-14 bg-[#00A657] rounded-full mb-6 flex items-center justify-center text-white shadow-lg">
<i className="w-8 h-8" data-lucide="check"></i>
</div>
<div className="space-y-4">
<div className="h-4 w-32 bg-white/40 rounded-full"></div>
<div className="h-3 w-48 bg-white/20 rounded-full"></div>
<div className="h-3 w-40 bg-white/20 rounded-full"></div>
</div>
</div>

<div className="absolute bottom-4 -left-12 w-80 bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] transform -rotate-3 hover:rotate-0 transition-transform duration-500 p-6 flex flex-col justify-between border-4 border-white/50">
<div className="flex justify-between items-center mb-6">
<span className="font-bold text-slate-900 text-lg">Payment Received</span>
<span className="text-[#00A657] font-bold text-lg">+$450.00</span>
</div>
<div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
<div className="w-3/4 bg-[#00A657] h-full rounded-full"></div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-[#14171D] text-slate-300 py-20 border-t border-slate-800">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-20">

<div className="space-y-8 max-w-sm">
<div className="flex items-center gap-3 text-white">
<div className="w-10 h-10 bg-[#00A657] rounded-full flex items-center justify-center">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="20"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
</div>
<span className="font-poppins font-semibold text-3xl tracking-tight">CoFee</span>
</div>
<p className="text-slate-400 text-lg leading-relaxed">
                        Simplifying payments for the modern world. Secure, fast, and reliable fee collection designed for growth.
                    </p>
</div>

<div className="flex flex-wrap gap-16 lg:gap-24">
<div>
<h4 className="text-white font-semibold mb-6 text-lg">Company</h4>
<ul className="space-y-4">
<li><a className="hover:text-[#00A657] transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-[#00A657] transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-[#00A657] transition-colors" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-6 text-lg">Legal</h4>
<ul className="space-y-4">
<li><a className="hover:text-[#00A657] transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-[#00A657] transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-[#00A657] transition-colors" href="#">Cookies</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-6 text-lg">Get the app</h4>
<div className="flex flex-col gap-4">
<button className="bg-white/5 hover:bg-white/10 text-white px-5 py-3 rounded-xl flex items-center gap-4 transition-colors w-48 border border-white/10 group">
<i className="w-8 h-8 fill-current group-hover:scale-110 transition-transform" data-lucide="apple"></i>
<div className="text-left">
<div className="text-[10px] uppercase text-slate-400 tracking-wider">Download on the</div>
<div className="text-sm font-semibold leading-none mt-1">App Store</div>
</div>
</button>
<button className="bg-white/5 hover:bg-white/10 text-white px-5 py-3 rounded-xl flex items-center gap-4 transition-colors w-48 border border-white/10 group">
<i className="w-8 h-8 fill-current group-hover:scale-110 transition-transform" data-lucide="play"></i>
<div className="text-left">
<div className="text-[10px] uppercase text-slate-400 tracking-wider">Get it on</div>
<div className="text-sm font-semibold leading-none mt-1">Google Play</div>
</div>
</button>
</div>
</div>
</div>
</div>

<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500">
<p>© 2024 Keyvalue Software Systems. All rights reserved.</p>
<div className="flex gap-8">
<a className="hover:text-white transition-colors hover:scale-110 transform duration-200" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="hover:text-white transition-colors hover:scale-110 transform duration-200" href="#"><i className="w-5 h-5" data-lucide="facebook"></i></a>
<a className="hover:text-white transition-colors hover:scale-110 transform duration-200" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="hover:text-white transition-colors hover:scale-110 transform duration-200" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
