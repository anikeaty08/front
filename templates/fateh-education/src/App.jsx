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
      

<nav className="fixed w-full z-50 top-0 start-0 bg-white/90 backdrop-blur-md border-b border-zinc-100">
<div className="flex flex-wrap max-w-7xl mr-auto ml-auto pt-4 pr-4 pb-4 pl-4 items-center justify-between">
<a className="flex items-center space-x-3 rtl:space-x-reverse" href="#">
<img alt="Fateh Education Logo" className="bg-center md:h-12 h-10 object-cover absolute scale-150" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3dfa6b6c-3369-49cb-80f1-3c30bd4efd4f_800w.jpg"/>
</a>
<div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
<button className="hover:bg-[#005a96] focus:ring-4 focus:outline-none focus:ring-blue-300 transition-all hover:shadow-lg text-sm font-medium text-white font-poppins text-center bg-[#006fb8] rounded-full pt-2.5 pr-5 pb-2.5 pl-5 shadow-md" type="button">Apply Today</button>
</div>
</div>
</nav>

<section className="lg:pt-40 lg:pb-24 overflow-hidden pt-32 pb-16 relative">

<div className="absolute top-20 right-0 w-96 h-96 bg-[#FFD539]/20 rounded-full blur-3xl -z-10 translate-x-1/2"></div>
<div className="absolute bottom-0 left-0 w-72 h-72 bg-[#f72585]/10 rounded-full blur-3xl -z-10 -translate-x-1/2"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 gap-x-12 gap-y-12 items-center">

<div className="space-y-6">
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f72585]/10 text-[#f72585] text-xs font-semibold tracking-wide uppercase border border-[#f72585]/20 font-poppins" style={{}}>
<svg className="lucide lucide-sparkles w-3 h-3" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg> New Age Education
                    </span>
<h1 className="sm:text-5xl lg:text-6xl leading-[1.1] text-4xl font-semibold text-[#262626] tracking-tight font-poppins">Study Abroad the <span className="whitespace-nowrap text-[#006fb8] font-poppins relative">Smarter Way. <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#FFD539]" preserveaspectratio="none" viewbox="0 0 100 10">
<path className="" d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="8"></path>
</svg></span> </h1>
<p className="leading-relaxed sm:text-xl text-lg font-medium italic text-zinc-600 font-poppins max-w-lg">Shorter degrees. Faster careers. Closer to home.</p><p className="sm:text-xl leading-relaxed text-lg text-zinc-600 font-poppins max-w-lg" style={{margin: '0'}}>Discover opportunities in the UK, Ireland &amp; Dubai designed for today's market.</p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<button className="hover:bg-[#005a96] transition-all hover:shadow-[#006fb8]/30 flex font-medium text-[#ffffff] font-poppins bg-[#f72585] rounded-full pt-3.5 pr-8 pb-3.5 pl-8 shadow-lg gap-x-2 gap-y-2 items-center justify-center">
                            Explore Destinations <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>

<div className="sm:h-[500px] flex w-full h-[400px] relative perspective-1000 items-center justify-center">

<div className="absolute top-0 right-10 w-48 h-64 bg-white p-2 rounded-2xl shadow-xl transform rotate-6 hover:rotate-0 transition-all duration-500 z-10 border border-zinc-100">
<img alt="Big Ben UK" className="w-full h-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur px-3 py-1 rounded-full shadow-sm text-xs font-semibold text-[#006fb8] font-poppins" style={{}}>UK</div>
</div>

<div className="transform hover:rotate-0 transition-all duration-500 -translate-x-3 bg-white w-40 h-56 z-20 border-zinc-100 border rounded-2xl mx-0 my-0 pt-2 pr-2 pb-2 pl-2 absolute right-20 bottom-10 shadow-xl translate-y-16 -rotate-3 scale-105">
<img alt="Dubai" className="w-full h-full object-cover rounded-xl scale-105" src="https://images.unsplash.com/photo-1666526979045-3e786120d103?w=320&amp;q=80"/>
<div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur px-3 py-1 rounded-full shadow-sm text-xs font-semibold text-[#f72585] font-poppins" style={{}}>Dubai</div>
</div>

<div className="absolute top-10 left-10 w-44 h-60 bg-white p-2 rounded-2xl shadow-xl transform -rotate-6 hover:rotate-0 transition-all duration-500 z-10 border border-zinc-100">
<img alt="Ireland" className="w-full h-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1666023640022-fea1b8050b21?w=320&amp;q=80"/>
<div className="-translate-x-1/2 text-xs font-semibold text-[#FFD539] font-poppins bg-white/90 rounded-full pt-1 pr-3 pb-1 pl-3 absolute bottom-4 left-1/2 shadow-sm backdrop-blur">Ireland</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y bg-zinc-50 border-zinc-100 pt-20 pb-20">
<div className="text-center max-w-4xl mr-auto ml-auto pr-4 pl-4 space-y-8">
<h2 className="md:text-4xl text-3xl font-semibold text-[#006fb8] tracking-tight font-poppins" style={{}}>The World Has Evolved. <br className="hidden md:block"/> <span className="text-[#262626] font-poppins" style={{lineHeight: '1.5'}}>Your Study Abroad Destination Should Too.</span></h2>
<div className="grid gap-8 md:grid-cols-2 text-left bg-white border-zinc-100 border rounded-3xl pt-8 pr-8 pb-8 pl-8 shadow-sm">
<div className="md:border-b-0 md:border-r md:pb-0 md:pr-6 border-zinc-100 border-b pr-6 pb-0 space-y-4">
<p className="text-zinc-600 font-poppins" style={{}}>Most aspirants continue to choose the same familiar, big-name
        destinations.</p>
<p className="text-lg font-medium text-[#f72585] font-poppins" style={{}}>But the current job market does not reward
        the familiar – it rewards the first.</p>
</div>
<div className="md:pl-6 flex flex-col pl-6 space-y-4 justify-center" style={{}}>
<ul className="space-y-2" style={{}}>
<li className="flex gap-2 font-medium text-zinc-800 font-poppins gap-x-2 gap-y-2 items-center" style={{}}>
<svg className="lucide lucide-check-circle-2 w-5 h-5 text-[#006fb8]" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> The first to move.
        </li>
<li className="flex items-center gap-2 text-zinc-800 font-medium font-poppins" style={{}}>
<svg className="lucide lucide-check-circle-2 w-5 h-5 text-[#006fb8]" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> The first to upskill.
        </li>
<li className="flex gap-2 font-medium text-zinc-800 font-poppins gap-x-2 gap-y-2 items-center">
<svg className="lucide lucide-check-circle-2 w-5 h-5 text-[#006fb8]" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> The first to graduate.
        </li>
<li className="flex gap-2 font-medium text-zinc-800 font-poppins gap-x-2 gap-y-2 items-center" style={{}}>
<svg className="lucide lucide-check-circle-2 w-5 h-5 text-[#006fb8]" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> The first to stand out.

        </li>
</ul>
</div>
</div>
<p className="md:text-base text-sm text-zinc-600 font-poppins max-w-2xl mx-8 my-8 translate-x-16">
    So, if you want a global career without losing too much time, money, or momentum, it’s smart to choose destinations
    like the <span className="font-semibold text-[#006fb8] font-poppins">UK, Ireland, or Dubai</span> that get you ahead
    today
    and keep you ahead tomorrow.
  </p>
</div>
</section>

<section className="bg-white pt-24 pb-24 relative">
<div className="sm:px-6 lg:px-8 font-poppins max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="text-center mb-16">
<span className="uppercase text-sm font-semibold text-[#f72585] tracking-wide font-poppins">Data Driven</span>
<h2 className="text-3xl font-semibold text-[#006fb8] tracking-tight font-poppins mt-2">What Makes Them Smart Choices?</h2>
</div>
<div className="overflow-x-auto border border-zinc-200 rounded-2xl shadow-sm">
<table className="w-full text-left border-collapse min-w-[800px]">
<thead className="">
<tr className="bg-zinc-50 border-b border-zinc-200">
<th className="text-sm font-bold text-[#262626] font-poppins pt-4 pr-4 pb-4 pl-4">Comparison Factor</th>
<th className="p-4 font-semibold text-[#006fb8] text-lg bg-blue-50/50 font-poppins" style={{}}>UK</th>
<th className="text-lg font-semibold text-[#FFD539] font-poppins bg-blue-50/50 pt-4 pr-4 pb-4 pl-4">Ireland</th>
<th className="text-lg font-semibold text-[#f72585] font-poppins bg-blue-50/50 pt-4 pr-4 pb-4 pl-4">Dubai</th>
<th className="text-sm font-semibold text-zinc-400 font-poppins pt-4 pr-4 pb-4 pl-4">Other Popular Destinations</th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-100 text-sm md:text-base">

<tr className="group hover:bg-zinc-50/50 transition">
<td className="font-medium text-zinc-900 font-poppins pt-4 pr-4 pb-4 pl-4">Master’s Duration</td>
<td className="p-4 text-zinc-700 bg-blue-50/10 font-medium font-poppins" style={{}}>1 year</td>
<td className="p-4 text-zinc-700 bg-blue-50/10 font-medium font-poppins" style={{}}>1 year</td>
<td className="p-4 text-zinc-700 bg-blue-50/10 font-medium font-poppins" style={{}}>1 year</td>
<td className="p-4 text-zinc-400 font-poppins" style={{}}>Mostly 2 years</td>
</tr>

<tr className="group hover:bg-zinc-50/50 transition">
<td className="font-medium text-zinc-900 font-poppins pt-4 pr-4 pb-4 pl-4" style={{}}>Tuition &amp; Living Expenses</td>
<td className="p-4 text-zinc-700 bg-blue-50/10 font-poppins" style={{}}>Moderate</td>
<td className="p-4 text-zinc-700 bg-blue-50/10 font-poppins" style={{}}>Moderate</td>
<td className="p-4 text-zinc-700 bg-blue-50/10 font-poppins" style={{}}>Moderate</td>
<td className="p-4 text-zinc-400 font-poppins" style={{}}>Comparatively higher</td>
</tr>

<tr className="group hover:bg-zinc-50/50 transition">
<td className="font-medium text-zinc-900 font-poppins pt-4 pr-4 pb-4 pl-4">Stay Back Duration</td>
<td className="text-zinc-700 font-poppins bg-blue-50/10 pt-4 pr-4 pb-4 pl-4">1.5 years</td>
<td className="p-4 text-zinc-700 bg-blue-50/10 font-poppins" style={{}}>2 years + PR pathway</td>
<td className="text-zinc-700 font-poppins bg-blue-50/10 pt-4 pr-4 pb-4 pl-4">5-10 years (Golden Visa Routes)</td>
<td className="p-4 text-zinc-400 font-poppins" style={{}}>Variable</td>
</tr>

<tr className="group hover:bg-zinc-50/50 transition">
<td className="font-medium text-zinc-900 font-poppins pt-4 pr-4 pb-4 pl-4">Flight Time</td>
<td className="p-4 text-zinc-700 bg-blue-50/10 font-poppins" style={{}}>8–9 hours</td>
<td className="text-zinc-700 font-poppins bg-blue-50/10 pt-4 pr-4 pb-4 pl-4">10–11 hours</td>
<td className="text-zinc-700 font-poppins bg-blue-50/10 pt-4 pr-4 pb-4 pl-4">3–4 hours</td>
<td className="p-4 text-zinc-400 font-poppins" style={{}}>15+ hours</td>
</tr><tr className="group hover:bg-zinc-50/50 transition">
<td className="font-medium text-zinc-900 font-poppins pt-4 pr-4 pb-4 pl-4">Career Opportunities</td>
<td className="text-zinc-700 font-poppins bg-blue-50/10 pt-4 pr-4 pb-4 pl-4">Strong</td>
<td className="text-zinc-700 font-poppins bg-blue-50/10 pt-4 pr-4 pb-4 pl-4">Strong</td>
<td className="text-zinc-700 font-poppins bg-blue-50/10 pt-4 pr-4 pb-4 pl-4">Strong</td>
<td className="text-zinc-400 font-poppins pt-4 pr-4 pb-4 pl-4">Competitive</td>
</tr>

<tr className="group hover:bg-zinc-50/50 transition">
<td className="font-medium text-zinc-900 font-poppins pt-4 pr-4 pb-4 pl-4">Visa Approval</td>
<td className="p-4 text-[#006fb8] font-semibold bg-blue-50/10 font-poppins" style={{}}>High</td>
<td className="font-semibold text-[#FFD539] font-poppins bg-blue-50/10 pt-4 pr-4 pb-4 pl-4">High</td>
<td className="font-semibold text-[#f72585] font-poppins bg-blue-50/10 px-4 py-4">High</td>
<td className="p-4 text-zinc-400 font-poppins" style={{}}>Variable / Lottery</td>
</tr><tr className="group hover:bg-zinc-50/50 transition">
<td className="font-medium text-zinc-900 font-poppins pt-4 pr-4 pb-4 pl-4">Indian Community</td>
<td className="font-semibold text-[#006fb8] font-poppins bg-blue-50/10 pt-4 pr-4 pb-4 pl-4">Large</td>
<td className="font-semibold text-[#FFD539] font-poppins bg-blue-50/10 pt-4 pr-4 pb-4 pl-4">Large</td>
<td className="font-semibold text-[#f72585] font-poppins bg-blue-50/10 pt-4 pr-4 pb-4 pl-4">Very Large</td>
<td className="text-zinc-400 font-poppins pt-4 pr-4 pb-4 pl-4">Variable / Comparatively lower</td>
</tr>
</tbody>
</table>
</div>
<p className="text-xs text-zinc-400 mt-4 text-center font-poppins" style={{}}>*Conditions may vary by course. Policies subject to government regulations.</p>
</div>
</section>

<section className="py-20 bg-zinc-50">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<h2 className="text-3xl font-semibold text-[#006fb8] tracking-tight font-poppins text-center mb-12">Smart Benefits of Each Destination</h2>
<div className="grid md:grid-cols-3 gap-8 gap-x-8 gap-y-8">

<div className="bg-white rounded-2xl p-8 shadow-sm border border-zinc-200 relative overflow-hidden group hover:-translate-y-1 transition duration-300">
<div className="absolute top-0 left-0 w-full h-1 bg-[#006fb8]"></div>
<div className="flex bg-blue-50 w-12 h-12 rounded-full mb-6 items-center justify-center">
<span className="text-lg font-bold font-poppins">UK</span>
</div>
<h3 className="text-xl font-semibold text-zinc-900 mb-4 font-poppins" style={{}}>United Kingdom</h3>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-zinc-600 font-poppins" style={{}}>
<svg className="lucide lucide-check w-4 h-4 text-[#006fb8] mt-1 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                            Home to the top-ranked Russell Group universities
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-600 font-poppins" style={{}}>
<svg className="lucide lucide-check w-4 h-4 text-[#006fb8] mt-1 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                            Globally recognised degrees
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-600 font-poppins" style={{}}>
<svg className="lucide lucide-check w-4 h-4 text-[#006fb8] mt-1 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                            Industry-focused courses
                        </li>
</ul>
</div>

<div className="overflow-hidden group hover:-translate-y-1 transition duration-300 bg-white border-zinc-200 border rounded-2xl pt-8 pr-8 pb-8 pl-8 relative shadow-sm">
<div className="bg-[#FFD539] w-full h-1 absolute top-0 left-0"></div> 
<div className="flex bg-yellow-50 w-12 h-12 rounded-full mb-6 items-center justify-center">
<span className="text-2xl font-bold font-poppins">🇮🇪</span>
</div>
<h3 className="text-xl font-semibold text-zinc-900 mb-4 font-poppins" style={{}}>Ireland</h3>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-zinc-600 font-poppins" style={{}}>
<svg className="lucide lucide-check w-4 h-4 text-[#006fb8] mt-1 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                            Home to the European HQs of Google, Meta, Apple, etc
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-600 font-poppins" style={{}}>
<svg className="lucide lucide-check w-4 h-4 text-[#006fb8] mt-1 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                            Booming Tech &amp; Finance jobs
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-600 font-poppins" style={{}}>
<svg className="lucide lucide-check w-4 h-4 text-[#006fb8] mt-1 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                            Warm, student-friendly culture
                        </li>
</ul>
</div>

<div className="overflow-hidden group hover:-translate-y-1 transition duration-300 bg-white border-zinc-200 border rounded-2xl pt-8 pr-8 pb-8 pl-8 relative shadow-sm">
<div className="bg-[#f72585] w-full h-1 absolute top-0 left-0"></div>
<div className="flex bg-pink-50 w-12 h-12 rounded-full mb-6 items-center justify-center">
<span className="text-2xl font-bold font-poppins">🇦🇪</span>
</div>
<h3 className="text-xl font-semibold text-zinc-900 mb-4 font-poppins" style={{}}>Dubai</h3>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-zinc-600 font-poppins" style={{}}>
<svg className="lucide lucide-check w-4 h-4 text-[#006fb8] mt-1 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                            Home to international campuses of top universities
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-600 font-poppins" style={{}}>
<svg className="lucide lucide-check w-4 h-4 text-[#006fb8] mt-1 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                            Tax-free salaries
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-600 font-poppins" style={{}}>
<svg className="lucide lucide-check w-4 h-4 text-[#006fb8] mt-1 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                            Rapid growth in Hospitality &amp; Tech
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-24">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-3 gap-12">
<div className="lg:col-span-1 space-y-6">
<h2 className="text-3xl font-semibold text-[#006fb7] tracking-tight font-poppins">
                        Smart Way to  Start Your Journey
                    </h2>
<p className="text-zinc-600 font-poppins" style={{}}>
                        Fateh Education offers end-to-end admissions guidance, helping aspirants study in their dream university without the stress.
                    </p>
<div className="pt-4">
<a className="inline-flex items-center text-[#f72585] font-semibold hover:gap-2 transition-all font-poppins" href="#" style={{}}>
                            Start Application <svg className="lucide lucide-arrow-right ml-2 w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
<div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">

<div className="flex gap-4 p-4 rounded-xl hover:bg-zinc-50 transition-colors">
<div className="shrink-0 w-10 h-10 rounded-full bg-[#006fb8]/10 flex items-center justify-center text-[#006fb8]">
<svg className="lucide lucide-user-check w-5 h-5" data-lucide="user-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 11 2 2 4-4"></path><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<div className="">
<h4 className="font-semibold text-zinc-900 font-poppins" style={{}}>Expert Counselling</h4>
<p className="text-sm text-zinc-500 mt-1 font-poppins" style={{}}>Personalised guidance to choose the right course and university.</p>
</div>
</div>

<div className="flex gap-4 p-4 rounded-xl hover:bg-zinc-50 transition-colors">
<div className="shrink-0 w-10 h-10 rounded-full bg-[#FFD539]/20 flex items-center justify-center text-[#dcb000]">
<svg className="lucide lucide-file-text w-5 h-5" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
</div>
<div className="">
<h4 className="font-semibold text-zinc-900 font-poppins" style={{}}>Application Processing</h4>
<p className="text-sm text-zinc-500 mt-1 font-poppins" style={{}}>Hassle-free handling of applications and offer letters.</p>
</div>
</div>

<div className="flex gap-4 p-4 rounded-xl hover:bg-zinc-50 transition-colors">
<div className="shrink-0 w-10 h-10 rounded-full bg-[#f72585]/10 flex items-center justify-center text-[#f72585]">
<svg className="lucide lucide-badge-dollar-sign w-5 h-5" data-lucide="badge-dollar-sign" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 18V6"></path></svg>
</div>
<div className="">
<h4 className="font-semibold text-zinc-900 font-poppins" style={{}}>Financial Guidance</h4>
<p className="text-sm text-zinc-500 mt-1 font-poppins" style={{}}>Tailored advice on fees, education loans and scholarships.</p>
</div>
</div>

<div className="flex gap-4 p-4 rounded-xl hover:bg-zinc-50 transition-colors">
<div className="shrink-0 flex text-zinc-600 bg-[#fee9f3] w-10 h-10 rounded-full items-center justify-center">
<svg className="lucide lucide-plane w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="plane" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(247, 37, 133)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path></svg>
</div>
<div className="">
<h4 className="font-semibold text-zinc-900 font-poppins" style={{}}>Visa Assistance</h4>
<p className="text-sm text-zinc-500 mt-1 font-poppins" style={{}}>Expert support to guide you through the visa process.</p>
</div>
</div>

<div className="flex gap-4 p-4 rounded-xl hover:bg-zinc-50 transition-colors">
<div className="shrink-0 w-10 h-10 rounded-full bg-[#006fb8]/10 flex items-center justify-center text-[#006fb8]">
<svg className="lucide lucide-map-pin w-5 h-5" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<div className="">
<h4 className="font-semibold text-zinc-900 font-poppins" style={{}}>Pre-Departure</h4>
<p className="text-sm text-zinc-500 font-poppins mt-1">Comprehensive guidance on travel and life abroad.</p>
</div>
</div>

<div className="flex gap-4 p-4 rounded-xl hover:bg-zinc-50 transition-colors">
<div className="shrink-0 w-10 h-10 rounded-full bg-[#FFD539]/20 flex items-center justify-center text-[#dcb000]">
<svg className="lucide lucide-home w-5 h-5" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
</div>
<div className="">
<h4 className="font-semibold text-zinc-900 font-poppins" style={{}}>Post-Landing</h4>
<p className="text-sm text-zinc-500 mt-1 font-poppins" style={{}}>On-ground assistance with airport pickup and settling in.</p>
</div>
</div>
</div>
</div>
<div className="mt-16 text-center">
<button className="bg-[#f72585] text-white px-8 py-4 rounded-full font-semibold shadow-lg shadow-[#f72585]/30 hover:bg-[#d00060] transition-all transform hover:scale-105 font-poppins" style={{}}>
                    Get Your Free Admission Plan
                </button>
</div>
</div>
</section>

<section className="text-white bg-[#006fb8] pt-20 pb-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight font-poppins" style={{}}>Why Choose Fateh Education?</h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
<div className="space-y-2">
<div className="text-4xl md:text-5xl font-bold text-[#FFD539] font-poppins" style={{}}>45k+</div>
<div className="md:text-base text-sm font-medium text-blue-100 font-poppins">Study Abroad Success Stories</div>
</div>
<div className="space-y-2 pl-4">
<div className="text-4xl md:text-5xl font-bold text-[#FFD539] font-poppins" style={{}}>125+</div>
<div className="md:text-base text-sm font-medium text-blue-100 font-poppins">University Partnerships</div>
</div>
<div className="space-y-2 pl-4">
<div className="text-4xl md:text-5xl font-bold text-[#FFD539] font-poppins" style={{}}>250+</div>
<div className="text-sm md:text-base text-blue-100 font-medium font-poppins" style={{}}>Team Members Across India</div>
</div>
<div className="space-y-2 pl-4">
<div className="text-4xl md:text-5xl font-bold text-[#FFD539] font-poppins" style={{}}>99%</div>
<div className="text-sm md:text-base text-blue-100 font-medium font-poppins" style={{}}>Student Visa Success Rate</div>
</div>
</div>
<div className="flex mt-12 justify-center">
<div className="inline-flex gap-3 bg-[#ffd539]/95 border-white/20 border rounded-full pt-3 pr-6 pb-3 pl-6 backdrop-blur-sm gap-x-3 gap-y-3 items-center">
<svg className="lucide lucide-award text-zinc-900 w-[24px] h-[24px]" data-icon-replaced="true" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
<span className="font-medium text-zinc-900 font-poppins">IIM-C Alumnus-Led &amp; Award-Winning Guidance since 2004</span>
</div>
</div>
</div>
</section>

<section className="bg-zinc-50 pt-24 pb-24">
<div className="max-w-3xl mx-auto px-4 sm:px-6">
<h2 className="text-3xl font-semibold tracking-tight text-center mb-12 font-poppins" style={{}}>Frequently Asked Questions</h2>
<div className="space-y-4">

<details className="group bg-white rounded-xl shadow-sm border border-zinc-200">
<summary className="flex justify-between items-center cursor-pointer p-6 font-medium text-zinc-900 font-poppins" style={{}}>
                        Are 1-year Master’s degrees accepted globally?
                        <span className="transition group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-5 h-5 text-zinc-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-zinc-600 text-sm leading-relaxed font-poppins" style={{}}>
                        Yes, 1-year Master’s are globally recognised and widely accepted for employment and further study, offering a quicker return on investment.
                    </div>
</details>

<details className="group bg-white rounded-xl shadow-sm border border-zinc-200">
<summary className="flex justify-between items-center cursor-pointer p-6 font-medium text-zinc-900 font-poppins" style={{}}>
                        Are Dubai campuses the same as their home universities?
                        <span className="transition group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-5 h-5 text-zinc-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-zinc-600 text-sm leading-relaxed font-poppins" style={{}}>
                        Most are fully accredited international branch campuses, offering the same curricula and degree as their home campus in the UK or Australia.
                    </div>
</details>

<details className="group bg-white rounded-xl shadow-sm border border-zinc-200">
<summary className="flex justify-between items-center cursor-pointer p-6 font-medium text-zinc-900 font-poppins" style={{}}>
                        Is it easier to get a visa for the UK/Ireland/Dubai?
                        <span className="transition group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-5 h-5 text-zinc-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-zinc-600 text-sm leading-relaxed font-poppins" style={{}}>
                        These destinations have more predictable and transparent visa processes compared to countries with lottery-based or quota-driven systems.
                    </div>
</details>

<details className="group bg-white rounded-xl shadow-sm border border-zinc-200">
<summary className="flex justify-between items-center cursor-pointer p-6 font-medium text-zinc-900 font-poppins" style={{}}>
                        Do these countries offer part-time work?
                        <span className="transition group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-5 h-5 text-zinc-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-zinc-600 text-sm leading-relaxed font-poppins" style={{}}>
                        Yes. The UK, Ireland, and Dubai allow part-time work during studies, though restrictions may vary by visa type and specific campus regulations.
                    </div>
</details>

<details className="group bg-white rounded-xl shadow-sm border border-zinc-200">
<summary className="flex justify-between items-center cursor-pointer p-6 font-medium text-zinc-900 font-poppins" style={{}}>
                        Are these destinations more affordable?
                        <span className="transition group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-5 h-5 text-zinc-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-zinc-600 text-sm leading-relaxed font-poppins" style={{}}>
                        Generally, yes. Shorter course durations and lower overall living costs compared to the US or Canada often make them more cost-effective options.
                    </div>
</details>
</div>
</div>
</section>

<section className="bg-white border-zinc-100 border-t pt-24 pb-24">
<div className="text-center max-w-4xl mr-auto ml-auto pr-4 pl-4">
<h2 className="sm:text-5xl text-4xl font-semibold text-zinc-900 tracking-tight font-poppins mb-6" style={{lineHeight: '1.5'}}>
                Don’t just study abroad. <br/>
<span className="text-[#006fb8] font-poppins">Learn to build a future there.</span>
</h2>
<p className="text-xl text-zinc-500 font-poppins mb-10">Start by choosing the right destination with Fateh.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="hover:bg-[#f72585] shadow-blue-500/20 transition-all text-lg font-semibold text-white font-poppins bg-[#f72585] rounded-full pt-4 pr-8 pb-4 pl-8 shadow-md">
    Talk to an Admissions Expert
</button>
</div>
</div>
</section>

<footer className="bg-zinc-50 border-zinc-200 border-t pt-12 pb-12">
<div className="flex flex-col md:flex-row max-w-7xl mr-auto ml-auto pr-4 pl-4 items-center justify-between">
<div className="mb-4 md:mb-0">
<img alt="Fateh Education Logo" className="hover:grayscale-0 hover:opacity-100 transition opacity-70 h-8 object-cover bg-center grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7723a01a-eb13-45cd-aae2-1aee01f06da6_3840w.jpg"/>
</div>
<div className="text-sm text-zinc-500 font-poppins">© 2025 Fateh Education. Conquer Your Dreams.</div>
<div className="flex md:mt-0 mt-4 gap-x-4 gap-y-4">
<a className="hover:text-[#006fb8] transition text-zinc-400" href="https://www.instagram.com/fateh.educationofficial"><svg className="lucide lucide-instagram w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(113, 113, 122)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="hover:text-[#006fb8] transition text-zinc-400" href="https://www.linkedin.com/company/fateh-education/"><svg className="lucide lucide-linkedin w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(113, 113, 122)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
</div>
</div>
</footer>


    </>
  );
}
