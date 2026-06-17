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



        // Simple Intersection Observer to trigger fade-up animations on scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-up');
                    entry.target.style.opacity = 1;
                }
            });
        }, { threshold: 0.1 });

        // Select elements to animate (cards, sections)
        document.querySelectorAll('.bento-card, #services .group, #testimonials .break-inside-avoid').forEach((el) => {
            el.style.opacity = 0; // hide initially
            observer.observe(el);
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
      

<div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
<nav className="glass-nav rounded-full px-6 py-3 flex items-center gap-8 shadow-sm ring-1 ring-black/5 max-w-2xl w-full justify-between animate-fade-up">
<a className="flex items-center gap-2 font-bold text-neutral-900 tracking-tight hover:opacity-70 transition-opacity" href="#">
<div className="w-5 h-5 bg-neutral-900 rounded-md flex items-center justify-center text-white text-[10px]">A</div>
                ANTLOV
            </a>
<div className="hidden md:flex items-center gap-6 text-xs font-medium text-neutral-500">
<a className="hover:text-neutral-900 transition-colors" href="#services">Services</a>
<a className="hover:text-neutral-900 transition-colors" href="#work">Method</a>
<a className="hover:text-neutral-900 transition-colors" href="#testimonials">Stories</a>
</div>
<a className="hidden md:flex items-center gap-2 bg-neutral-900 text-white text-xs font-medium px-4 py-1.5 rounded-full hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95" href="#contact">
                Start Growth
            </a>
<button className="md:hidden text-neutral-900"><iconify-icon icon="lucide:menu" width="20"></iconify-icon></button>
</nav>
</div>

<header className="relative pt-40 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">

<div className="absolute inset-0 grid-bg -z-10"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-blue-50/50 to-transparent rounded-[100%] blur-3xl -z-10 opacity-60"></div>
<div className="max-w-6xl mx-auto">
<div className="flex flex-col items-center text-center">

<div className="animate-fade-up opacity-0 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-neutral-200 shadow-sm mb-8 hover:border-neutral-300 transition-colors cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span className="text-[11px] font-semibold tracking-wide text-neutral-600 uppercase">Accepting New Clients</span>
</div>

<h1 className="animate-fade-up opacity-0 delay-100 text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-neutral-900 mb-8 leading-[0.95] max-w-4xl mx-auto">
                    Growth, <span className="text-neutral-400">simplified.</span><br/>
<span className="text-gradient-subtle">Results, amplified.</span>
</h1>
<p className="animate-fade-up opacity-0 delay-200 text-lg md:text-xl text-neutral-500 max-w-xl mx-auto mb-10 leading-relaxed font-light">
                    Stop guessing with your digital marketing. I help small businesses build predictable revenue engines through data-driven strategies.
                </p>

<div className="animate-fade-up opacity-0 delay-300 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="group w-full sm:w-auto px-8 py-3.5 bg-neutral-900 text-white text-sm font-medium rounded-full hover:bg-neutral-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-neutral-900/20 hover:shadow-neutral-900/40" href="#contact">
                        Get Business Results
                        <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-white border border-neutral-200 text-neutral-600 text-sm font-medium rounded-full hover:bg-neutral-50 hover:border-neutral-300 transition-all flex items-center justify-center" href="#why-me">
                        View Proven Method
                    </a>
</div>

<div className="mt-20 w-full max-w-5xl animate-fade-up opacity-0 delay-300 relative group perspective-1000">
<div className="relative z-10 bg-white/40 backdrop-blur-xl border border-white/60 rounded-xl p-2 shadow-2xl ring-1 ring-black/5 transform transition-transform duration-700 hover:scale-[1.01] hover:rotate-x-2">

<div className="bg-white rounded-lg border border-neutral-100 overflow-hidden shadow-sm aspect-[16/9] md:aspect-[21/9] flex">

<div className="hidden md:flex w-48 flex-col border-r border-neutral-100 bg-neutral-50/50 p-4 gap-3">
<div className="h-2 w-20 bg-neutral-200 rounded-full mb-4"></div>
<div className="h-8 w-full bg-white border border-neutral-200 rounded-md shadow-sm"></div>
<div className="h-8 w-full bg-transparent rounded-md"></div>
<div className="h-8 w-full bg-transparent rounded-md"></div>
<div className="mt-auto h-12 w-full bg-neutral-100 rounded-md"></div>
</div>

<div className="flex-1 p-6 md:p-8 flex flex-col relative">

<div className="flex justify-between items-end mb-6">
<div>
<div className="h-3 w-32 bg-neutral-200 rounded-full mb-2"></div>
<div className="h-8 w-48 bg-neutral-900 rounded-md"></div>
</div>
<div className="px-3 py-1 bg-green-50 text-green-600 text-xs font-medium rounded-full border border-green-100 flex items-center gap-1">
                                        +124% ROI <iconify-icon icon="lucide:trending-up"></iconify-icon>
</div>
</div>
<div className="flex-1 w-full bg-neutral-50 rounded-lg border border-neutral-100 relative overflow-hidden group-hover:bg-neutral-50/80 transition-colors">

<svg className="absolute bottom-0 left-0 w-full h-full text-neutral-900 opacity-10" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor"></path>
</svg>
<div className="absolute bottom-0 left-10 w-8 h-[40%] bg-neutral-200 rounded-t-sm"></div>
<div className="absolute bottom-0 left-24 w-8 h-[60%] bg-neutral-300 rounded-t-sm"></div>
<div className="absolute bottom-0 left-38 w-8 h-[50%] bg-neutral-200 rounded-t-sm"></div>
<div className="absolute bottom-0 left-52 w-8 h-[85%] bg-neutral-800 rounded-t-sm shadow-lg"></div>
<div className="absolute bottom-0 left-66 w-8 h-[70%] bg-neutral-300 rounded-t-sm"></div>
</div>
</div>
</div>
</div>

<div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl -z-10 rounded-full opacity-50"></div>
</div>
</div>
</div>
</header>

<section className="border-y border-neutral-100 bg-white py-10 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 mb-6 text-center">
<p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">Trusted by innovative companies</p>
</div>
<div className="flex justify-center gap-12 md:gap-24 opacity-40 grayscale items-center flex-wrap px-6">

<span className="text-lg font-bold font-sans tracking-tight">AcmeCorp</span>
<span className="text-xl font-serif italic">Velvet</span>
<span className="text-lg font-mono font-bold">CodeBase</span>
<span className="text-lg font-bold tracking-widest">LUMINA</span>
<span className="text-xl font-semibold">Pulse+</span>
</div>
</section>

<section className="py-32 px-6 bg-[#fafafa]" id="why-me">
<div className="max-w-6xl mx-auto">
<div className="mb-20 max-w-2xl">
<h2 className="text-3xl md:text-5xl font-semibold text-neutral-900 tracking-tighter mb-6">More than a consultant.<br/><span className="text-neutral-400">A dedicated partner.</span></h2>
<p className="text-neutral-500 text-lg leading-relaxed">
                    Most agencies hand you off to a junior account manager. With me, you get senior-level expertise, direct communication, and a holistic strategy.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">

<div className="bento-card md:col-span-2 md:row-span-2 rounded-3xl p-10 flex flex-col justify-between group">
<div>
<div className="w-12 h-12 rounded-xl bg-neutral-900 text-white flex items-center justify-center mb-6 shadow-lg shadow-neutral-900/10">
<iconify-icon icon="lucide:bar-chart-2" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-neutral-900 mb-3 tracking-tight">Data-Driven Decisions</h3>
<p className="text-neutral-500 leading-relaxed max-w-sm">
                            I don't rely on gut feelings. Every campaign is optimized based on rigorous analytics, conversion tracking, and attribution modeling.
                        </p>
</div>
<div className="mt-8 relative h-32 w-full bg-neutral-50 rounded-xl border border-neutral-100 overflow-hidden">

<div className="absolute inset-0 flex items-end justify-around px-4 pb-0">
<div className="w-8 bg-neutral-200 h-10 rounded-t-md group-hover:h-16 transition-all duration-500"></div>
<div className="w-8 bg-neutral-300 h-16 rounded-t-md group-hover:h-24 transition-all duration-500 delay-75"></div>
<div className="w-8 bg-neutral-800 h-24 rounded-t-md group-hover:h-32 transition-all duration-500 delay-100 shadow-xl"></div>
<div className="w-8 bg-neutral-200 h-14 rounded-t-md group-hover:h-20 transition-all duration-500 delay-150"></div>
</div>
</div>
</div>

<div className="bento-card md:row-span-2 rounded-3xl p-8 flex flex-col relative overflow-hidden group">
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-neutral-100 text-neutral-900 flex items-center justify-center mb-6">
<iconify-icon icon="lucide:graduation-cap" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-neutral-900 mb-3 tracking-tight">Mentorship</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                            I teach you the 'why' behind the 'what'. Empowering your internal team to take over eventually.
                        </p>
</div>
<div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-full blur-2xl opacity-50 group-hover:scale-150 transition-transform duration-700"></div>
</div>

<div className="bento-card rounded-3xl p-8 flex flex-col justify-center">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-lg bg-neutral-100 text-neutral-900 flex items-center justify-center">
<iconify-icon icon="lucide:zap" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-neutral-900 tracking-tight">Fast Execution</h3>
</div>
<p className="text-sm text-neutral-500">Agile implementation of strategies without agency bureaucracy.</p>
</div>

<div className="bento-card rounded-3xl p-8 flex flex-col justify-center">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-lg bg-neutral-100 text-neutral-900 flex items-center justify-center">
<iconify-icon icon="lucide:layers" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-neutral-900 tracking-tight">Full Stack</h3>
</div>
<p className="text-sm text-neutral-500">SEO, Ads, Web, and Analytics. A 360° approach.</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-white border-t border-neutral-100" id="services">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 tracking-tighter mb-4">Capabilities</h2>
<p className="text-neutral-500 max-w-md">Everything you need to grow, nothing you don't.</p>
</div>
<a className="text-sm font-medium text-neutral-900 hover:text-neutral-600 transition-colors flex items-center gap-1 group" href="#contact">
                    Book a consultation <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-100 border border-neutral-100 rounded-2xl overflow-hidden shadow-sm">

<div className="bg-white p-8 hover:bg-neutral-50 transition-colors group">
<iconify-icon className="text-neutral-400 group-hover:text-neutral-900 transition-colors mb-6" icon="lucide:search" width="24"></iconify-icon>
<h3 className="text-base font-semibold text-neutral-900 mb-2">SEO &amp; ASO</h3>
<p className="text-sm text-neutral-500">Organic growth for web and app store.</p>
</div>
<div className="bg-white p-8 hover:bg-neutral-50 transition-colors group">
<iconify-icon className="text-neutral-400 group-hover:text-neutral-900 transition-colors mb-6" icon="lucide:megaphone" width="24"></iconify-icon>
<h3 className="text-base font-semibold text-neutral-900 mb-2">Paid Media</h3>
<p className="text-sm text-neutral-500">Meta, Google, and LinkedIn Ads management.</p>
</div>
<div className="bg-white p-8 hover:bg-neutral-50 transition-colors group">
<iconify-icon className="text-neutral-400 group-hover:text-neutral-900 transition-colors mb-6" icon="lucide:code-2" width="24"></iconify-icon>
<h3 className="text-base font-semibold text-neutral-900 mb-2">Web Development</h3>
<p className="text-sm text-neutral-500">High-converting landing pages.</p>
</div>
<div className="bg-white p-8 hover:bg-neutral-50 transition-colors group">
<iconify-icon className="text-neutral-400 group-hover:text-neutral-900 transition-colors mb-6" icon="lucide:pie-chart" width="24"></iconify-icon>
<h3 className="text-base font-semibold text-neutral-900 mb-2">Analytics</h3>
<p className="text-sm text-neutral-500">GTM, GA4, and custom dashboarding.</p>
</div>
<div className="bg-white p-8 hover:bg-neutral-50 transition-colors group">
<iconify-icon className="text-neutral-400 group-hover:text-neutral-900 transition-colors mb-6" icon="lucide:mail" width="24"></iconify-icon>
<h3 className="text-base font-semibold text-neutral-900 mb-2">Email Marketing</h3>
<p className="text-sm text-neutral-500">Automated flows and retention strategies.</p>
</div>
<div className="bg-white p-8 hover:bg-neutral-50 transition-colors group">
<iconify-icon className="text-neutral-400 group-hover:text-neutral-900 transition-colors mb-6" icon="lucide:pen-tool" width="24"></iconify-icon>
<h3 className="text-base font-semibold text-neutral-900 mb-2">Content Strategy</h3>
<p className="text-sm text-neutral-500">Planning that drives engagement.</p>
</div>
<div className="bg-white p-8 hover:bg-neutral-50 transition-colors group">
<iconify-icon className="text-neutral-400 group-hover:text-neutral-900 transition-colors mb-6" icon="lucide:smartphone" width="24"></iconify-icon>
<h3 className="text-base font-semibold text-neutral-900 mb-2">Mobile Growth</h3>
<p className="text-sm text-neutral-500">User acquisition for iOS and Android.</p>
</div>
<div className="bg-white p-8 hover:bg-neutral-50 transition-colors group">
<iconify-icon className="text-neutral-400 group-hover:text-neutral-900 transition-colors mb-6" icon="lucide:user-check" width="24"></iconify-icon>
<h3 className="text-base font-semibold text-neutral-900 mb-2">Coaching</h3>
<p className="text-sm text-neutral-500">1-on-1 sessions to upskill you.</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-[#fafafa]" id="testimonials">
<div className="max-w-6xl mx-auto">
<h2 className="text-3xl md:text-5xl font-semibold text-center text-neutral-900 tracking-tighter mb-16">Client Stories</h2>
<div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">

<div className="break-inside-avoid bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm hover:shadow-md transition-shadow">
<div className="flex gap-1 text-neutral-900 mb-4">
<iconify-icon className="fill-current" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="14"></iconify-icon>
</div>
<p className="text-sm text-neutral-600 leading-relaxed mb-6">
                        "His actionable recommendations have been incredibly valuable. Linus provided brilliant guidance on SEO and ASO queries."
                    </p>
<div className="flex items-center gap-3 border-t border-neutral-100 pt-4">
<div className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center text-xs font-bold">J</div>
<div>
<div className="text-xs font-bold text-neutral-900">Jack N.</div>
<div className="text-[10px] text-neutral-500">BrioHR</div>
</div>
</div>
</div>

<div className="break-inside-avoid bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm hover:shadow-md transition-shadow">
<div className="flex gap-1 text-neutral-900 mb-4">
<iconify-icon className="fill-current" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="14"></iconify-icon>
</div>
<p className="text-sm text-neutral-600 leading-relaxed mb-6">
                        "Learned more from 30 mins that i would in a week. Walked me through setting up google tags expertly."
                    </p>
<div className="flex items-center gap-3 border-t border-neutral-100 pt-4">
<div className="w-8 h-8 rounded-full bg-neutral-200 text-neutral-700 flex items-center justify-center text-xs font-bold">S</div>
<div>
<div className="text-xs font-bold text-neutral-900">Slim G.</div>
<div className="text-[10px] text-neutral-500">REI Litics</div>
</div>
</div>
</div>

<div className="break-inside-avoid bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm hover:shadow-md transition-shadow">
<div className="flex gap-1 text-neutral-900 mb-4">
<iconify-icon className="fill-current" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="14"></iconify-icon>
</div>
<p className="text-sm text-neutral-600 leading-relaxed mb-6">
                        "We saw a clear uptick in leads and sales. He tied everything back to our business goals."
                    </p>
<div className="flex items-center gap-3 border-t border-neutral-100 pt-4">
<div className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center text-xs font-bold">R</div>
<div>
<div className="text-xs font-bold text-neutral-900">Rami E.</div>
<div className="text-[10px] text-neutral-500">Agency Owner</div>
</div>
</div>
</div>

<div className="break-inside-avoid bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm hover:shadow-md transition-shadow">
<div className="flex gap-1 text-neutral-900 mb-4">
<iconify-icon className="fill-current" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="14"></iconify-icon>
</div>
<p className="text-sm text-neutral-600 leading-relaxed mb-6">
                        "Worth its weight in gold. I walked away with clarity and realistic action points."
                    </p>
<div className="flex items-center gap-3 border-t border-neutral-100 pt-4">
<div className="w-8 h-8 rounded-full bg-neutral-200 text-neutral-700 flex items-center justify-center text-xs font-bold">D</div>
<div>
<div className="text-xs font-bold text-neutral-900">Dee</div>
<div className="text-[10px] text-neutral-500">Dentaly</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-[#0a0a0a] relative overflow-hidden text-center" id="contact">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neutral-800/30 blur-[120px] rounded-full pointer-events-none"></div>
<div className="relative z-10 max-w-3xl mx-auto">
<h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tighter mb-8 leading-[1.1]">
                Ready to scale your <br/> revenue engine?
            </h2>
<p className="text-neutral-400 text-lg mb-12 max-w-xl mx-auto">
                No long-term lock-ins. No hidden fees. Just results.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6">
<a className="min-w-[180px] px-8 py-4 bg-white text-black text-sm font-semibold rounded-full hover:bg-neutral-200 transition-colors" href="mailto:contact@antlovdigital.com">
                    Start Now
                </a>
<a className="min-w-[180px] px-8 py-4 bg-transparent border border-neutral-800 text-neutral-300 text-sm font-medium rounded-full hover:bg-neutral-900 transition-colors" href="#">
                    View Pricing
                </a>
</div>
</div>
</section>

<footer className="bg-white border-t border-neutral-100 pt-20 pb-10 px-6">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12 mb-20">
<div className="max-w-xs">
<div className="font-bold text-xl tracking-tighter text-neutral-900 mb-4">ANTLOV.</div>
<p className="text-sm text-neutral-500 leading-relaxed">
                    Premium digital marketing consultancy for ambitious small businesses and startups.
                </p>
</div>
<div className="flex gap-16 flex-wrap">
<div>
<h4 className="text-xs font-semibold text-neutral-900 uppercase tracking-wider mb-4">Sitemap</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-neutral-900 transition-colors" href="#">Services</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">Method</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">About</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-neutral-900 uppercase tracking-wider mb-4">Legal</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-neutral-900 transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">Terms</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-neutral-900 uppercase tracking-wider mb-4">Socials</h4>
<div className="flex gap-4">
<a className="text-neutral-400 hover:text-neutral-900" href="#"><iconify-icon icon="lucide:linkedin" width="20"></iconify-icon></a>
<a className="text-neutral-400 hover:text-neutral-900" href="#"><iconify-icon icon="lucide:twitter" width="20"></iconify-icon></a>
</div>
</div>
</div>
</div>
<div className="max-w-6xl mx-auto border-t border-neutral-100 pt-8 flex justify-between items-center text-xs text-neutral-400">
<p>© 2024 Antlov Digital.</p>
<p>Designed with precision.</p>
</div>
</footer>


    </>
  );
}
