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
      

<header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50 transition-all duration-300">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

<div className="flex items-center gap-2 group cursor-pointer">
<iconify-icon className="text-blue-600 text-xl group-hover:scale-110 transition-transform duration-300" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="text-lg font-semibold tracking-tighter text-slate-900">
                    S A R
                </div>
</div>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-blue-600 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:bg-blue-600 after:rounded-full" href="#">Articles</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Guidelines</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">FAQ</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">About</a>
</nav>

<div className="flex items-center gap-4">
<button className="hidden md:block text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">
                    Sign In
                </button>
<button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/20 hover:-translate-y-0.5">
                    Subscribe
                </button>
</div>
</div>
</header>

<main className="flex-1 w-full max-w-6xl mx-auto px-6 py-12">

<div className="flex flex-col md:flex-row items-center gap-12 mb-20">
<div className="flex-1 w-full">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-medium mb-6 hover:bg-blue-100 transition-colors cursor-default">
<iconify-icon className="animate-pulse" icon="solar:info-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Updated ADA Guidelines for 2024
                </div>
<h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-6 leading-tight">
                    Clear guidance for you and your loyal partner.
                </h1>
<p className="text-lg text-slate-500 leading-relaxed mb-8">
                    Official resources, verified public access rights, and comprehensive articles to support handlers and their working dogs in everyday life. Because they take care of you, we help you take care of them.
                </p>
<div className="flex items-center gap-4">
<button className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                        Read Latest Guide
                    </button>
<button className="text-slate-600 hover:text-slate-900 px-4 py-2 text-sm font-medium transition-colors inline-flex items-center gap-2 group">
                        Browse Topics
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
<div className="flex-1 w-full relative group perspective-1000">

<div className="absolute inset-0 bg-gradient-to-tr from-blue-200 to-indigo-100 rounded-[2rem] transform rotate-3 group-hover:rotate-6 transition-transform duration-700 ease-out shadow-inner"></div>

<img alt="Loyal service dog looking at handler" className="relative rounded-[2rem] shadow-xl w-full h-80 md:h-96 object-cover transform group-hover:-translate-y-2 group-hover:shadow-2xl transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1554692908-18eb94c5e156?auto=format&amp;fit=crop&amp;q=80&amp;w=1000" style={{objectPosition: 'center 20%'}}/>
</div>
</div>
<div className="flex flex-col lg:flex-row gap-12">

<div className="lg:w-2/3 flex flex-col gap-10">

<article className="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
<div className="aspect-[21/9] w-full overflow-hidden relative bg-slate-100">
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<img alt="Guide dog in public space" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
<div className="p-6 sm:p-8 relative bg-white z-20">
<div className="flex items-center gap-3 mb-4">
<span className="text-xs font-medium text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">Public Access</span>
<span className="text-xs text-slate-400 font-medium">Oct 24, 2023</span>
</div>
<a className="block" href="#">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                                The Only Two Questions Businesses Can Legally Ask You
                            </h2>
<p className="text-slate-500 text-base leading-relaxed mb-6">
                                Navigating public spaces can be stressful. Under the ADA, staff at businesses and public facilities are only legally permitted to ask two specific questions regarding your service animal. Here is what you need to know.
                            </p>
</a>
<div className="flex items-center gap-3 pt-6 border-t border-slate-100">
<div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-xs font-semibold text-blue-700">
                                DR
                            </div>
<div className="flex flex-col">
<span className="text-sm font-medium text-slate-900">Dr. Sarah Jenkins</span>
<span className="text-xs text-slate-500">Legal Advocate</span>
</div>
</div>
</div>
</article>

<article className="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
<div className="aspect-[21/9] w-full overflow-hidden relative bg-slate-100">
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<img alt="Service dog focused on handler" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?auto=format&amp;fit=crop&amp;q=80&amp;w=1000" style={{objectPosition: 'center 30%'}}/>
</div>
<div className="p-6 sm:p-8 relative bg-white z-20">
<div className="flex items-center gap-3 mb-4">
<span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">Training Standards</span>
<span className="text-xs text-slate-400 font-medium">Oct 18, 2023</span>
</div>
<a className="block" href="#">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                                Task Training vs. Emotional Support: Understanding the Distinction
                            </h2>
<p className="text-slate-500 text-base leading-relaxed mb-6">
                                A clear breakdown of the functional differences between Service Animals, Emotional Support Animals (ESAs), and Therapy Dogs, and how federal law applies to each category.
                            </p>
</a>
<div className="flex items-center gap-3 pt-6 border-t border-slate-100">
<div className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-xs font-semibold text-emerald-700">
                                MT
                            </div>
<div className="flex flex-col">
<span className="text-sm font-medium text-slate-900">Marcus Thorne</span>
<span className="text-xs text-slate-500">Certified Trainer</span>
</div>
</div>
</div>
</article>

<article className="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
<div className="aspect-[21/9] w-full overflow-hidden relative bg-slate-100">
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<img alt="Dog resting comfortably indoors" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1599839619722-39751411ea63?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
<div className="p-6 sm:p-8 relative bg-white z-20">
<div className="flex items-center gap-3 mb-4">
<span className="text-xs font-medium text-purple-600 bg-purple-50 px-2.5 py-1 rounded-full">Housing Rights</span>
<span className="text-xs text-slate-400 font-medium">Oct 12, 2023</span>
</div>
<a className="block" href="#">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-3 group-hover:text-purple-600 transition-colors">
                                Navigating the Fair Housing Act with a Working Dog
                            </h2>
<p className="text-slate-500 text-base leading-relaxed mb-6">
                                Understanding reasonable accommodations in housing. Learn how to communicate effectively with landlords and what documentation is legally required under the FHA.
                            </p>
</a>
<div className="flex items-center gap-3 pt-6 border-t border-slate-100">
<div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-xs font-semibold text-blue-700">
                                DR
                            </div>
<div className="flex flex-col">
<span className="text-sm font-medium text-slate-900">Dr. Sarah Jenkins</span>
<span className="text-xs text-slate-500">Legal Advocate</span>
</div>
</div>
</div>
</article>
</div>

<aside className="lg:w-1/3 flex flex-col gap-6">

<div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
<h3 className="text-sm font-semibold text-slate-900 mb-4 tracking-tight">Search Resources</h3>
<div className="relative group">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg group-focus-within:text-blue-500 transition-colors" icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<input className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all placeholder:text-slate-400" placeholder="Search articles, ADA rules..." type="text"/>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
<h3 className="text-sm font-semibold text-slate-900 mb-4 tracking-tight">Official References</h3>
<ul className="space-y-4">
<li>
<a className="flex items-start gap-3 text-sm text-slate-600 hover:text-blue-600 transition-colors group" href="#">
<div className="p-1.5 rounded-md bg-slate-50 group-hover:bg-blue-50 transition-colors border border-slate-100 group-hover:border-blue-100">
<iconify-icon className="text-slate-400 group-hover:text-blue-500 text-lg block" icon="solar:document-text-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="leading-tight mt-1">ADA Requirements: Service Animals (ada.gov)</span>
</a>
</li>
<li>
<a className="flex items-start gap-3 text-sm text-slate-600 hover:text-blue-600 transition-colors group" href="#">
<div className="p-1.5 rounded-md bg-slate-50 group-hover:bg-blue-50 transition-colors border border-slate-100 group-hover:border-blue-100">
<iconify-icon className="text-slate-400 group-hover:text-blue-500 text-lg block" icon="solar:home-angle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="leading-tight mt-1">Fair Housing Act Guidelines (hud.gov)</span>
</a>
</li>
<li>
<a className="flex items-start gap-3 text-sm text-slate-600 hover:text-blue-600 transition-colors group" href="#">
<div className="p-1.5 rounded-md bg-slate-50 group-hover:bg-blue-50 transition-colors border border-slate-100 group-hover:border-blue-100">
<iconify-icon className="text-slate-400 group-hover:text-blue-500 text-lg block" icon="solar:plane-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="leading-tight mt-1">Air Carrier Access Act Forms (transportation.gov)</span>
</a>
</li>
</ul>
</div>

<div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
<h3 className="text-sm font-semibold text-slate-900 mb-4 tracking-tight">Topics</h3>
<div className="flex flex-wrap gap-2">
<a className="inline-flex items-center px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-medium text-slate-600 hover:bg-white hover:border-blue-200 hover:text-blue-600 hover:shadow-sm transition-all duration-300 transform hover:-translate-y-0.5" href="#">Public Access</a>
<a className="inline-flex items-center px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-medium text-slate-600 hover:bg-white hover:border-blue-200 hover:text-blue-600 hover:shadow-sm transition-all duration-300 transform hover:-translate-y-0.5" href="#">Training</a>
<a className="inline-flex items-center px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-medium text-slate-600 hover:bg-white hover:border-blue-200 hover:text-blue-600 hover:shadow-sm transition-all duration-300 transform hover:-translate-y-0.5" href="#">Legal Rights</a>
<a className="inline-flex items-center px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-medium text-slate-600 hover:bg-white hover:border-blue-200 hover:text-blue-600 hover:shadow-sm transition-all duration-300 transform hover:-translate-y-0.5" href="#">Travel</a>
<a className="inline-flex items-center px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-medium text-slate-600 hover:bg-white hover:border-blue-200 hover:text-blue-600 hover:shadow-sm transition-all duration-300 transform hover:-translate-y-0.5" href="#">Housing</a>
</div>
</div>
</aside>
</div>
</main>

<footer className="bg-white border-t border-slate-200 mt-auto">
<div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="text-sm font-semibold tracking-tighter text-slate-900 group-hover:text-blue-600 transition-colors">
                    S A R
                </div>
<span className="text-sm text-slate-500">© 2024 Service Animal Resources. All rights reserved.</span>
</div>
<div className="flex gap-6">
<a className="text-sm text-slate-500 hover:text-slate-900 hover:underline decoration-slate-300 underline-offset-4 transition-all" href="#">Privacy</a>
<a className="text-sm text-slate-500 hover:text-slate-900 hover:underline decoration-slate-300 underline-offset-4 transition-all" href="#">Terms</a>
<a className="text-sm text-slate-500 hover:text-slate-900 hover:underline decoration-slate-300 underline-offset-4 transition-all" href="#">Contact</a>
</div>
</div>
</footer>

    </>
  );
}
