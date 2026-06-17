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
      

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0A0A0A]/80 backdrop-blur-md transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-xl font-semibold tracking-tight text-white flex items-center gap-2" href="#">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FF006E] to-[#6B2D8F] flex items-center justify-center text-white font-bold text-sm">VR</div>
<span>Varun<span className="text-gray-500">Rajurkar</span></span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
<a className="hover:text-white transition-colors" href="#work">Work</a>
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#faq">FAQ</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:flex items-center justify-center text-sm font-bold text-white px-6 py-2.5 rounded-full bg-[#FF006E] hover:bg-[#E60063] transition-all shadow-[0_0_20px_-5px_rgba(255,0,110,0.5)]" href="#contact">
                    Let's Talk
                </a>

<button className="md:hidden p-2 text-gray-400 hover:text-white">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center pt-20 overflow-hidden">

<div className="absolute inset-0 z-0 pointer-events-none">
<div className="absolute top-1/2 left-2/3 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FF006E] opacity-[0.06] blur-[120px] rounded-full"></div>
<div className="absolute inset-0 grid-lines opacity-20"></div>
<div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_49%,rgba(255,0,110,0.03)_50%,transparent_51%)] bg-[length:100px_100%] mask-image-b-fade"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="text-center lg:text-left">

<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8 animate-fade-in-up mx-auto lg:mx-0">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span className="text-xs font-medium tracking-wide text-gray-300 uppercase">Available for new projects</span>
</div>

<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 text-white">
                        Your Digital Success Needs <span className="text-gradient-accent">Direction</span>, <br/>
<span className="text-gray-500">Not Just Delivery.</span>
</h1>

<p className="text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8 font-light">
                        With 8+ years in digital marketing and web development, I help businesses cut through the noise — connecting you with the right solutions, the right strategies, and the right people to grow online.
                    </p>

<div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-black font-semibold hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2" href="#contact">
                            Let's Talk About Your Goals
                            <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-white/15 hover:bg-white/5 font-medium transition-colors flex items-center justify-center gap-2 text-white" href="#services">
                            See How I Can Help
                        </a>
</div>
</div>

<div className="relative hidden lg:block perspective-1000">
<div className="relative transform rotate-y-12 rotate-x-6 hover:rotate-0 transition-transform duration-700 ease-out">

<div className="absolute -inset-1 bg-gradient-to-r from-[#FF006E] to-purple-600 rounded-2xl blur-xl opacity-20 animate-pulse"></div>

<div className="relative bg-[#0F0F0F]/90 backdrop-blur-xl border border-white/10 rounded-xl p-6 shadow-2xl code-glow overflow-hidden group">

<div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
<div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
<div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
</div>
<div className="text-[10px] text-gray-600 font-mono uppercase tracking-wider">approach.js</div>
</div>

<div className="font-mono text-sm leading-8 text-gray-300">
<div className="flex gap-4">
<span className="text-gray-700 select-none text-right w-4">1</span>
<span><span className="text-gray-500 italic">// My Approach to Every Project</span></span>
</div>
<div className="flex gap-4">
<span className="text-gray-700 select-none text-right w-4">2</span>
<span><span className="text-purple-400">const</span> <span className="text-blue-400">values</span> <span className="text-gray-400">=</span> <span className="text-yellow-400">{</span></span>
</div>
<div className="flex gap-4 group/line hover:bg-white/5 -mx-6 px-6 transition-colors">
<span className="text-gray-700 select-none text-right w-4">3</span>
<span className="pl-4"><span className="text-[#FF006E]">clarity</span><span className="text-gray-400">:</span> <span className="text-green-400">'absolute'</span><span className="text-gray-500">,</span></span>
</div>
<div className="flex gap-4 group/line hover:bg-white/5 -mx-6 px-6 transition-colors">
<span className="text-gray-700 select-none text-right w-4">4</span>
<span className="pl-4"><span className="text-[#FF006E]">honesty</span><span className="text-gray-400">:</span> <span className="text-green-400">'unfiltered'</span><span className="text-gray-500">,</span></span>
</div>
<div className="flex gap-4 group/line hover:bg-white/5 -mx-6 px-6 transition-colors">
<span className="text-gray-700 select-none text-right w-4">5</span>
<span className="pl-4"><span className="text-[#FF006E]">quality</span><span className="text-gray-400">:</span> <span className="text-green-400">'enduring'</span><span className="text-gray-500">,</span></span>
</div>
<div className="flex gap-4 group/line hover:bg-white/5 -mx-6 px-6 transition-colors">
<span className="text-gray-700 select-none text-right w-4">6</span>
<span className="pl-4"><span className="text-[#FF006E]">partnership</span><span className="text-gray-400">:</span> <span className="text-green-400">'invested'</span></span>
</div>
<div className="flex gap-4">
<span className="text-gray-700 select-none text-right w-4">7</span>
<span><span className="text-yellow-400">}</span><span className="text-gray-400">;</span></span>
</div>
<div className="flex gap-4 mt-2">
<span className="text-gray-700 select-none text-right w-4">8</span>
<span><span className="text-purple-400">export default</span> <span className="text-blue-200">Varun</span><span className="text-gray-400">;</span></span>
</div>

<div className="absolute bottom-8 right-16 w-2 h-4 bg-[#FF006E] animate-pulse"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
<span className="text-[10px] uppercase tracking-widest text-gray-500">Scroll</span>
<div className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent"></div>
</div>
</section>

<div className="w-full border-y border-white/5 bg-[#0A0A0A] py-10 overflow-hidden relative z-20">
<div className="max-w-7xl mx-auto px-6 mb-6 text-center">
<p className="text-sm text-gray-500 font-mono uppercase tracking-widest">Platforms &amp; Technologies</p>
</div>
<div className="marquee-content relative flex overflow-hidden w-full">
<div className="marquee-container flex items-center gap-16 px-8 min-w-full">

<div className="flex items-center gap-16 whitespace-nowrap">
<span className="text-2xl font-bold text-gray-600 hover:text-white transition-colors duration-300">WordPress</span>
<span className="text-2xl font-bold text-gray-600 hover:text-[#96BF48] transition-colors duration-300">Shopify</span>
<span className="text-2xl font-bold text-gray-600 hover:text-white transition-colors duration-300">Wix</span>
<span className="text-2xl font-bold text-gray-600 hover:text-white transition-colors duration-300">BigCommerce</span>
<span className="text-2xl font-bold text-gray-600 hover:text-[#38BDF8] transition-colors duration-300">Custom Code</span>
<span className="text-2xl font-bold text-gray-600 hover:text-[#F75A02] transition-colors duration-300">Google Analytics</span>
<span className="text-2xl font-bold text-gray-600 hover:text-[#E23F2E] transition-colors duration-300">Figma</span>
<span className="text-2xl font-bold text-gray-600 hover:text-[#FF2D20] transition-colors duration-300">Laravel</span>
<span className="text-2xl font-bold text-gray-600 hover:text-[#4F5B93] transition-colors duration-300">WooCommerce</span>
</div>

<div className="flex items-center gap-16 whitespace-nowrap pl-16">
<span className="text-2xl font-bold text-gray-600 hover:text-white transition-colors duration-300">WordPress</span>
<span className="text-2xl font-bold text-gray-600 hover:text-[#96BF48] transition-colors duration-300">Shopify</span>
<span className="text-2xl font-bold text-gray-600 hover:text-white transition-colors duration-300">Wix</span>
<span className="text-2xl font-bold text-gray-600 hover:text-white transition-colors duration-300">BigCommerce</span>
<span className="text-2xl font-bold text-gray-600 hover:text-[#38BDF8] transition-colors duration-300">Custom Code</span>
<span className="text-2xl font-bold text-gray-600 hover:text-[#F75A02] transition-colors duration-300">Google Analytics</span>
<span className="text-2xl font-bold text-gray-600 hover:text-[#E23F2E] transition-colors duration-300">Figma</span>
<span className="text-2xl font-bold text-gray-600 hover:text-[#FF2D20] transition-colors duration-300">Laravel</span>
<span className="text-2xl font-bold text-gray-600 hover:text-[#4F5B93] transition-colors duration-300">WooCommerce</span>
</div>
</div>

<div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10"></div>
<div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10"></div>
</div>
</div>

<section className="py-24 md:py-32 relative" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-5 gap-16 items-start">

<div className="lg:col-span-3 space-y-8">
<span className="text-[#FF006E] font-mono text-sm uppercase tracking-widest font-semibold">Who Am I</span>
<h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                        The Person Behind <span className="text-gray-500">the Work</span>
</h2>
<div className="space-y-6 text-gray-400 text-lg leading-relaxed font-light">
<p>
                            I'm Varun Rajurkar — a Tech Head with 8+ years of experience in web development, SEO, and digital marketing.
                        </p>
<p>
                            I've built over 100 WordPress websites, launched Shopify stores, optimized 300+ sites for search engines, and overseen countless branding and marketing projects.
                        </p>
<p>
                            But here's what I really do: I help businesses figure out what they need online and connect them with the right solutions. No confusion. No unnecessary spending. Just results.
                        </p>
</div>
<div className="pt-4 flex gap-6">
<a className="text-white border-b border-[#FF006E] pb-1 hover:text-[#FF006E] transition-colors inline-flex items-center gap-2" href="#contact">
                            More about my journey <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>

<div className="lg:col-span-2 relative">
<div className="absolute -inset-4 bg-gradient-to-tr from-[#FF006E]/20 to-[#6B2D8F]/20 blur-2xl rounded-3xl opacity-50"></div>
<div className="relative glass-panel rounded-3xl p-8 space-y-8">
<div className="flex items-center gap-4 border-b border-white/5 pb-6">
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[#FF006E]">
<i className="w-6 h-6" data-lucide="code-2"></i>
</div>
<div>
<div className="text-3xl font-bold text-white tracking-tight">100+</div>
<div className="text-sm text-gray-500">WP Websites</div>
</div>
</div>
<div className="flex items-center gap-4 border-b border-white/5 pb-6">
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[#6B2D8F]">
<i className="w-6 h-6" data-lucide="shopping-bag"></i>
</div>
<div>
<div className="text-3xl font-bold text-white tracking-tight">10+</div>
<div className="text-sm text-gray-500">Shopify Stores</div>
</div>
</div>
<div className="flex items-center gap-4 border-b border-white/5 pb-6">
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-green-400">
<i className="w-6 h-6" data-lucide="trending-up"></i>
</div>
<div>
<div className="text-3xl font-bold text-white tracking-tight">300+</div>
<div className="text-sm text-gray-500">SEO Wins</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-blue-400">
<i className="w-6 h-6" data-lucide="calendar"></i>
</div>
<div>
<div className="text-3xl font-bold text-white tracking-tight">8+</div>
<div className="text-sm text-gray-500">Years Experience</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0A0A0A] relative" id="services">
<div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:text-center max-w-3xl mx-auto">
<span className="text-[#FF006E] font-mono text-sm uppercase tracking-widest font-semibold block mb-4">What I Do</span>
<h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">How I Can Help</h2>
<p className="text-gray-400 font-light">Comprehensive solutions designed to drive results.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group p-6 rounded-2xl glass-panel hover:bg-white/5 transition-all duration-300 border-transparent hover:border-white/10">
<div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-white group-hover:scale-110 group-hover:bg-[#FF006E] transition-all duration-300">
<i className="w-6 h-6" data-lucide="monitor"></i>
</div>
<h3 className="text-lg font-semibold text-white mb-2">WP Development</h3>
<p className="text-sm text-gray-400 leading-relaxed mb-4">Websites That Work as Hard as You Do. Fast, secure, and easy to manage.</p>
</div>

<div className="group p-6 rounded-2xl glass-panel hover:bg-white/5 transition-all duration-300 border-transparent hover:border-white/10">
<div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-white group-hover:scale-110 group-hover:bg-[#FF006E] transition-all duration-300">
<i className="w-6 h-6" data-lucide="shopping-bag"></i>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Shopify Development</h3>
<p className="text-sm text-gray-400 leading-relaxed mb-4">Online Stores Built to Sell. From setup to customization, optimized for conversion.</p>
</div>

<div className="group p-6 rounded-2xl glass-panel hover:bg-white/5 transition-all duration-300 border-transparent hover:border-white/10">
<div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-white group-hover:scale-110 group-hover:bg-[#FF006E] transition-all duration-300">
<i className="w-6 h-6" data-lucide="search"></i>
</div>
<h3 className="text-lg font-semibold text-white mb-2">SEO Optimization</h3>
<p className="text-sm text-gray-400 leading-relaxed mb-4">Get Found by the People Who Matter. Strategic ranking strategies that bring real traffic.</p>
</div>

<div className="group p-6 rounded-2xl glass-panel hover:bg-white/5 transition-all duration-300 border-transparent hover:border-white/10">
<div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-white group-hover:scale-110 group-hover:bg-[#FF006E] transition-all duration-300">
<i className="w-6 h-6" data-lucide="shield-check"></i>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Website Maintenance</h3>
<p className="text-sm text-gray-400 leading-relaxed mb-4">Keep Your Site Running Smoothly. Updates, security, backups, and performance checks.</p>
</div>

<div className="group p-6 rounded-2xl glass-panel hover:bg-white/5 transition-all duration-300 border-transparent hover:border-white/10">
<div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-white group-hover:scale-110 group-hover:bg-[#FF006E] transition-all duration-300">
<i className="w-6 h-6" data-lucide="pen-tool"></i>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Content Writing</h3>
<p className="text-sm text-gray-400 leading-relaxed mb-4">Words That Connect and Convert. SEO-friendly content written with your audience in mind.</p>
</div>

<div className="group p-6 rounded-2xl glass-panel hover:bg-white/5 transition-all duration-300 border-transparent hover:border-white/10">
<div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-white group-hover:scale-110 group-hover:bg-[#FF006E] transition-all duration-300">
<i className="w-6 h-6" data-lucide="palette"></i>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Graphics Designing</h3>
<p className="text-sm text-gray-400 leading-relaxed mb-4">Visuals That Make an Impression. Logos, social media graphics, and brand assets.</p>
</div>

<div className="group p-6 rounded-2xl glass-panel hover:bg-white/5 transition-all duration-300 border-transparent hover:border-white/10">
<div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-white group-hover:scale-110 group-hover:bg-[#FF006E] transition-all duration-300">
<i className="w-6 h-6" data-lucide="video"></i>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Video Editing</h3>
<p className="text-sm text-gray-400 leading-relaxed mb-4">Bring Your Story to Life. Professional editing for promotional videos and social content.</p>
</div>

<div className="group p-6 rounded-2xl glass-panel hover:bg-white/5 transition-all duration-300 border-transparent hover:border-white/10">
<div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-white group-hover:scale-110 group-hover:bg-[#FF006E] transition-all duration-300">
<i className="w-6 h-6" data-lucide="server"></i>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Server Setup</h3>
<p className="text-sm text-gray-400 leading-relaxed mb-4">The Foundation Your Site Needs. Hosting configuration, SSL, and solid deployment.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="work">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<span className="text-[#FF006E] font-mono text-sm uppercase tracking-widest font-semibold block mb-2">Portfolio</span>
<h2 className="text-4xl font-bold text-white tracking-tight">Selected Works</h2>
</div>
<a className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-white border-b border-white/20 pb-1 hover:border-white transition-colors" href="#">
                    View all projects <i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</a>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="group relative rounded-2xl overflow-hidden bg-[#111] border border-white/10">
<div className="aspect-[4/3] w-full overflow-hidden bg-gray-800 relative">

<img alt="Project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-40" src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent"></div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<div className="flex items-center gap-3 mb-3">
<span className="text-xs font-mono px-2 py-1 rounded bg-white/10 text-white border border-white/10">Shopify</span>
<span className="text-xs font-mono text-green-400">High Conversion</span>
</div>
<h3 className="text-2xl font-bold text-white mb-2">Luxe Fashion Store</h3>
<p className="text-gray-400 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                            Complete e-commerce overhaul focusing on mobile conversion optimization and speed.
                        </p>
<span className="text-[#FF006E] text-sm font-medium inline-flex items-center gap-2">View Case Study <i className="w-4 h-4" data-lucide="arrow-right"></i></span>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden bg-[#111] border border-white/10 md:mt-16">
<div className="aspect-[4/3] w-full overflow-hidden bg-gray-800 relative">
<img alt="Project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-40" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&amp;w=2426&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent"></div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<div className="flex items-center gap-3 mb-3">
<span className="text-xs font-mono px-2 py-1 rounded bg-white/10 text-white border border-white/10">SEO Campaign</span>
<span className="text-xs font-mono text-green-400">#1 Ranking</span>
</div>
<h3 className="text-2xl font-bold text-white mb-2">TechSaaS Organic Growth</h3>
<p className="text-gray-400 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                            Strategic SEO implementation resulting in 50k+ monthly organic visitors in 6 months.
                        </p>
<span className="text-[#FF006E] text-sm font-medium inline-flex items-center gap-2">View Case Study <i className="w-4 h-4" data-lucide="arrow-right"></i></span>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden bg-[#111] border border-white/10">
<div className="aspect-[4/3] w-full overflow-hidden bg-gray-800 relative">
<img alt="Project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-40" src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent"></div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<div className="flex items-center gap-3 mb-3">
<span className="text-xs font-mono px-2 py-1 rounded bg-white/10 text-white border border-white/10">WordPress</span>
<span className="text-xs font-mono text-green-400">10x Speed</span>
</div>
<h3 className="text-2xl font-bold text-white mb-2">Corporate Portal Revamp</h3>
<p className="text-gray-400 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                            Legacy migration to modern WordPress stack with headless architecture.
                        </p>
<span className="text-[#FF006E] text-sm font-medium inline-flex items-center gap-2">View Case Study <i className="w-4 h-4" data-lucide="arrow-right"></i></span>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden bg-[#111] border border-white/10 md:mt-16">
<div className="aspect-[4/3] w-full overflow-hidden bg-gray-800 relative">
<img alt="Project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-40" src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent"></div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<div className="flex items-center gap-3 mb-3">
<span className="text-xs font-mono px-2 py-1 rounded bg-white/10 text-white border border-white/10">Custom Dev</span>
<span className="text-xs font-mono text-green-400">Secure</span>
</div>
<h3 className="text-2xl font-bold text-white mb-2">FinTech Dashboard</h3>
<p className="text-gray-400 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                            Secure, real-time data visualization dashboard for financial advisors.
                        </p>
<span className="text-[#FF006E] text-sm font-medium inline-flex items-center gap-2">View Case Study <i className="w-4 h-4" data-lucide="arrow-right"></i></span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-b from-[#0A0A0A] to-[#111]" id="faq">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-bold text-white mb-12 text-center tracking-tight">Common Queries</h2>
<div className="space-y-4">

<details className="group glass-panel rounded-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer text-white font-medium hover:bg-white/5 transition-colors">
                        What platforms do you specialize in?
                        <span className="relative ml-4 h-5 w-5 shrink-0">
<i className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0 transition-opacity duration-300" data-lucide="plus"></i>
<i className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100 transition-opacity duration-300 text-[#FF006E]" data-lucide="minus"></i>
</span>
</summary>
<div className="px-6 pb-6 text-gray-400 leading-relaxed text-sm">
                        I specialize in WordPress, Shopify, Wix, and BigCommerce for most business needs. For custom applications, I utilize modern stacks like React/Next.js. My focus is always on selecting the right tool for your specific goals.
                    </div>
</details>

<details className="group glass-panel rounded-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer text-white font-medium hover:bg-white/5 transition-colors">
                        Do you handle SEO along with development?
                        <span className="relative ml-4 h-5 w-5 shrink-0">
<i className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0 transition-opacity duration-300" data-lucide="plus"></i>
<i className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100 transition-opacity duration-300 text-[#FF006E]" data-lucide="minus"></i>
</span>
</summary>
<div className="px-6 pb-6 text-gray-400 leading-relaxed text-sm">
                        Absolutely. I believe development and SEO are inseparable. I build every site with "Technical SEO" first principles—schema markup, speed optimization, and proper hierarchy—ensuring you rank well from day one.
                    </div>
</details>

<details className="group glass-panel rounded-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer text-white font-medium hover:bg-white/5 transition-colors">
                        What is your typical project timeline?
                        <span className="relative ml-4 h-5 w-5 shrink-0">
<i className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0 transition-opacity duration-300" data-lucide="plus"></i>
<i className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100 transition-opacity duration-300 text-[#FF006E]" data-lucide="minus"></i>
</span>
</summary>
<div className="px-6 pb-6 text-gray-400 leading-relaxed text-sm">
                        Timelines vary by complexity. A standard brochure website typically takes 2-3 weeks, while a complex e-commerce store or custom web app can take 4-8 weeks. I provide a detailed timeline during our initial consultation.
                    </div>
</details>

<details className="group glass-panel rounded-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer text-white font-medium hover:bg-white/5 transition-colors">
                        Do you offer ongoing maintenance?
                        <span className="relative ml-4 h-5 w-5 shrink-0">
<i className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0 transition-opacity duration-300" data-lucide="plus"></i>
<i className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100 transition-opacity duration-300 text-[#FF006E]" data-lucide="minus"></i>
</span>
</summary>
<div className="px-6 pb-6 text-gray-400 leading-relaxed text-sm">
                        Yes, I offer monthly retainer packages that include server management, security updates, content updates, and monthly SEO reporting to ensure your digital asset continues to grow.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="contact">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-[#0A0A0A] to-[#0A0A0A]"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-6">Let's Have a <br/><span className="text-gradient-accent">Conversation</span></h2>
<p className="text-xl text-gray-400 font-light mb-10 max-w-2xl mx-auto">
                No pitch. No pressure. Just a chat about your business and how I might be able to help.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-gray-100 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)]" href="mailto:hello@varunrajurkar.in">
                    Schedule a Free Consultation
                </a>
<a className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/10 hover:bg-white/5 text-white font-medium transition-colors" href="mailto:hello@varunrajurkar.in">
                    Send Me a Message
                </a>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-[#050505] pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div>
<a className="text-xl font-semibold tracking-tight text-white flex items-center gap-2 mb-6" href="#">
<div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white font-bold text-sm">VR</div>
<span>Varun<span className="text-gray-500">Rajurkar</span></span>
</a>
<p className="text-gray-500 text-sm leading-relaxed">
                        Tech Head with 8+ years helping businesses succeed online. Based in Bhopal, India, serving clients worldwide.
                    </p>
</div>

<div>
<h4 className="text-white font-semibold mb-6">Services</h4>
<ul className="space-y-3 text-sm text-gray-500">
<li><a className="hover:text-white transition-colors" href="#">WordPress Development</a></li>
<li><a className="hover:text-white transition-colors" href="#">Shopify Development</a></li>
<li><a className="hover:text-white transition-colors" href="#">SEO Optimization</a></li>
<li><a className="hover:text-white transition-colors" href="#">Website Maintenance</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-semibold mb-6">Quick Links</h4>
<ul className="space-y-3 text-sm text-gray-500">
<li><a className="hover:text-white transition-colors" href="#work">Work</a></li>
<li><a className="hover:text-white transition-colors" href="#about">About</a></li>
<li><a className="hover:text-white transition-colors" href="#contact">Contact</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-semibold mb-6">Connect</h4>
<ul className="space-y-3 text-sm text-gray-500">
<li className="flex items-center gap-2"><i className="w-4 h-4" data-lucide="mail"></i> hello@varunrajurkar.in</li>
<li className="flex gap-4 mt-4">
<a className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="linkedin"></i></a>
<a className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
<a className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="github"></i></a>
</li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
<p>© 2024 Varun Rajurkar. Helping businesses grow online since 2016.</p>
<div className="flex gap-6">
<a className="hover:text-gray-400" href="#">Privacy Policy</a>
<a className="hover:text-gray-400" href="#">Terms of Service</a>
</div>
<p>Made with ❤️ in India</p>
</div>
</div>
</footer>



    </>
  );
}
