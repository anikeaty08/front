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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#2C3E50]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="bg-[#D35400] p-1.5 rounded-lg flex items-center justify-center">
<iconify-icon className="text-white" height="20" icon="solar:hammer-linear" width="20"></iconify-icon>
</div>
<span className="font-['Inter'] text-lg font-semibold tracking-tight">TradieWebCo</span>
</div>
<div className="hidden md:flex items-center gap-8 font-['Inter'] text-sm font-medium text-gray-300">
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#process">Process</a>
<a className="hover:text-white transition-colors" href="#testimonials">Reviews</a>
</div>
<a className="hidden md:flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-full font-['Inter'] text-sm font-medium transition-all duration-300 border border-white/10" href="#contact">
                Get Started <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2980B9] rounded-full mix-blend-screen filter blur-[128px] opacity-20 translate-x-1/2 -translate-y-1/2"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#D35400] rounded-full mix-blend-screen filter blur-[128px] opacity-10 -translate-x-1/3 translate-y-1/3"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-x-16 gap-y-16 items-center">

<div className="flex flex-col gap-8 max-w-2xl">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel w-fit border-l-2 border-l-[#D35400]">
<span className="w-2 h-2 rounded-full bg-[#D35400] animate-pulse"></span>
<span className="font-['Inter'] text-xs font-medium uppercase tracking-wide text-gray-300">Web Design for Trades</span>
</div>
<h1 className="font-['Inter'] text-5xl lg:text-7xl font-semibold tracking-tight leading-[1.1]">
                        Reliable Websites. <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Built for Business.</span>
</h1>
<p className="text-xl lg:text-2xl text-gray-300 font-light leading-relaxed max-w-lg">
                        We build professional, mobile-ready websites designed to help customers find your services and request quotes easily.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 mt-2">
<a className="flex items-center justify-center gap-2 bg-[#D35400] hover:bg-[#A04000] text-white px-8 py-4 rounded-full font-['Inter'] text-lg font-medium transition-all shadow-[0_0_20px_rgba(211,84,0,0.3)] hover:shadow-[0_0_30px_rgba(211,84,0,0.5)]" href="#contact">
                            Enquire Now
                            <iconify-icon height="20" icon="solar:letter-linear" width="20"></iconify-icon>
</a>
<a className="flex items-center justify-center gap-2 px-8 py-4 rounded-full font-['Inter'] text-lg font-medium border border-white/20 hover:bg-white/5 transition-all group" href="#process">
                            How It Works
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" height="20" icon="solar:alt-arrow-right-linear" width="20"></iconify-icon>
</a>
</div>
<div className="flex items-center gap-4 mt-4 text-sm text-gray-400 font-['Inter']">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-gray-600 border border-[#2C3E50] flex items-center justify-center text-[10px] text-white/50">1</div>
<div className="w-8 h-8 rounded-full bg-gray-500 border border-[#2C3E50] flex items-center justify-center text-[10px] text-white/50">2</div>
<div className="w-8 h-8 rounded-full bg-gray-400 border border-[#2C3E50] flex items-center justify-center text-[10px] text-white/50">3</div>
</div>
<p>Supporting local Aussie businesses</p>
</div>
</div>

<div className="lg:h-[600px] flex w-full relative perspective-1000 items-center justify-center">

<div className="glass-panel floating-ui flex flex-col gap-4 w-96 h-[600px] border-white/10 border rounded-[3rem] p-4 relative shadow-2xl gap-x-4 gap-y-4">

<div className="h-8 flex items-center justify-between px-2">
<div className="w-16 h-2 bg-white/20 rounded-full"></div>
<div className="flex gap-1">
<div className="w-2 h-2 bg-white/20 rounded-full"></div>
<div className="w-2 h-2 bg-white/20 rounded-full"></div>
</div>
</div>

<div className="h-40 bg-gradient-to-br from-[#2980B9]/20 to-transparent rounded-2xl border border-white/5 p-4 flex flex-col justify-end">
<div className="w-24 h-6 bg-[#D35400] rounded-lg mb-2"></div>
<div className="w-3/4 h-3 bg-white/30 rounded-full"></div>
</div>

<div className="flex-1 bg-white/5 rounded-2xl p-4 flex flex-col gap-3">
<div className="text-xs font-['Inter'] text-gray-400 uppercase tracking-wider">Contact Form</div>
<div className="h-8 w-full bg-black/20 rounded-lg border border-white/5"></div>
<div className="h-8 w-full bg-black/20 rounded-lg border border-white/5"></div>
<div className="h-8 w-24 bg-[#D35400] rounded-lg mt-auto ml-auto"></div>
</div>

<div className="absolute -right-12 top-24 bg-[#F8F9F9] text-[#2C3E50] p-4 rounded-xl shadow-xl floating-ui-delayed max-w-[200px]">
<div className="flex items-center gap-3 mb-2">
<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
<span className="font-['Inter'] text-xs font-bold uppercase">New Enquiry</span>
</div>
<p className="font-['Inter'] text-sm font-medium">"Hi, looking for a quote on..."</p>
</div>
<div className="absolute -left-12 bottom-32 bg-[#2980B9] text-white p-4 rounded-xl shadow-xl animate-bounce duration-[3000ms] max-w-[180px]">
<div className="flex items-center gap-2">
<iconify-icon height="20" icon="solar:graph-up-linear" width="20"></iconify-icon>
<span className="font-['Inter'] text-sm font-bold">SEO Optimised</span>
</div>
<p className="font-['Inter'] text-xs opacity-80 mt-1">Ready for search</p>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="w-full bg-[#1A252F] overflow-hidden py-6 border-y border-white/5">
<div className="flex w-[200%] animate-marquee whitespace-nowrap">
<div className="flex items-center gap-12 mx-6">
<span className="font-['Inter'] text-lg font-semibold text-gray-500 flex items-center gap-2"><iconify-icon className="text-[#D35400] w-5 h-5" icon="solar:check-circle-linear"></iconify-icon> PLUMBERS</span>
<span className="font-['Inter'] text-lg font-semibold text-gray-500 flex items-center gap-2"><iconify-icon className="text-[#D35400] w-5 h-5" icon="solar:check-circle-linear"></iconify-icon> ELECTRICIANS</span>
<span className="font-['Inter'] text-lg font-semibold text-gray-500 flex items-center gap-2"><iconify-icon className="text-[#D35400] w-5 h-5" icon="solar:check-circle-linear"></iconify-icon> BUILDERS</span>
<span className="font-['Inter'] text-lg font-semibold text-gray-500 flex items-center gap-2"><iconify-icon className="text-[#D35400] w-5 h-5" icon="solar:check-circle-linear"></iconify-icon> LANDSCAPERS</span>
<span className="font-['Inter'] text-lg font-semibold text-gray-500 flex items-center gap-2"><iconify-icon className="text-[#D35400] w-5 h-5" icon="solar:check-circle-linear"></iconify-icon> CARPENTERS</span>
<span className="font-['Inter'] text-lg font-semibold text-gray-500 flex items-center gap-2"><iconify-icon className="text-[#D35400] w-5 h-5" icon="solar:check-circle-linear"></iconify-icon> ROOFERS</span>
</div>

<div className="flex items-center gap-12 mx-6">
<span className="font-['Inter'] text-lg font-semibold text-gray-500 flex items-center gap-2"><iconify-icon className="text-[#D35400] w-5 h-5" icon="solar:check-circle-linear"></iconify-icon> PLUMBERS</span>
<span className="font-['Inter'] text-lg font-semibold text-gray-500 flex items-center gap-2"><iconify-icon className="text-[#D35400] w-5 h-5" icon="solar:check-circle-linear"></iconify-icon> ELECTRICIANS</span>
<span className="font-['Inter'] text-lg font-semibold text-gray-500 flex items-center gap-2"><iconify-icon className="text-[#D35400] w-5 h-5" icon="solar:check-circle-linear"></iconify-icon> BUILDERS</span>
<span className="font-['Inter'] text-lg font-semibold text-gray-500 flex items-center gap-2"><iconify-icon className="text-[#D35400] w-5 h-5" icon="solar:check-circle-linear"></iconify-icon> LANDSCAPERS</span>
<span className="font-['Inter'] text-lg font-semibold text-gray-500 flex items-center gap-2"><iconify-icon className="text-[#D35400] w-5 h-5" icon="solar:check-circle-linear"></iconify-icon> CARPENTERS</span>
<span className="font-['Inter'] text-lg font-semibold text-gray-500 flex items-center gap-2"><iconify-icon className="text-[#D35400] w-5 h-5" icon="solar:check-circle-linear"></iconify-icon> ROOFERS</span>
</div>
</div>
</div>

<section className="py-24 max-w-7xl mx-auto px-6" id="features">
<div className="text-center mb-16">
<h2 className="font-['Inter'] text-3xl lg:text-4xl font-semibold mb-4">Straightforward <span className="text-gray-400">Features.</span></h2>
<p className="text-xl text-gray-400 max-w-2xl mx-auto">Everything you need to look professional, without the technical jargon.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#D35400]/50 transition-all hover:-translate-y-1 duration-300">
<div className="w-12 h-12 rounded-lg bg-[#2980B9]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-[#2980B9]" height="24" icon="solar:smartphone-linear" width="24"></iconify-icon>
</div>
<h3 className="font-['Inter'] text-xl font-semibold mb-3">Mobile-First Design</h3>
<p className="text-gray-400 leading-relaxed">Your site will display correctly on phones, tablets, and desktops.</p>
</div>

<div className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#D35400]/50 transition-all hover:-translate-y-1 duration-300">
<div className="w-12 h-12 rounded-lg bg-[#D35400]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-[#D35400]" height="24" icon="solar:magnifer-linear" width="24"></iconify-icon>
</div>
<h3 className="font-['Inter'] text-xl font-semibold mb-3">SEO Friendly Structure</h3>
<p className="text-gray-400 leading-relaxed">Built with clean code that search engines can easily read and index.</p>
</div>

<div className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#D35400]/50 transition-all hover:-translate-y-1 duration-300">
<div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-green-500" height="24" icon="solar:chat-round-line-linear" width="24"></iconify-icon>
</div>
<h3 className="font-['Inter'] text-xl font-semibold mb-3">Enquiry Forms</h3>
<p className="text-gray-400 leading-relaxed">Simple forms that send customer details directly to your preferred email.</p>
</div>

<div className="group md:col-span-2 p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-[#D35400]/50 transition-all hover:-translate-y-1 duration-300 relative overflow-hidden">
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-6">
<iconify-icon className="text-purple-400" height="24" icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h3 className="font-['Inter'] text-xl font-semibold mb-3">Satisfaction Focused</h3>
<p className="text-gray-400 leading-relaxed max-w-md">We work with you to ensure the design meets your business needs before final handover.</p>
</div>
<div className="absolute right-0 top-0 w-64 h-64 bg-purple-500/10 rounded-full filter blur-[64px] translate-x-1/2 -translate-y-1/2"></div>
</div>

<div className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#D35400]/50 transition-all hover:-translate-y-1 duration-300">
<div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-white" height="24" icon="solar:help-linear" width="24"></iconify-icon>
</div>
<h3 className="font-['Inter'] text-xl font-semibold mb-3">Ongoing Support</h3>
<p className="text-gray-400 leading-relaxed">Assistance with updates and changes whenever you need them.</p>
</div>
</div>
</section>

<section className="py-24 bg-[#1A252F] border-y border-white/5" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="space-y-8">
<h2 className="font-['Inter'] text-3xl lg:text-4xl font-semibold">Quality vs. <span className="text-[#D35400]">Amateur</span></h2>
<div className="space-y-6">

<div className="flex gap-4 opacity-50">
<iconify-icon className="text-red-500 shrink-0" height="24" icon="solar:close-circle-linear" width="24"></iconify-icon>
<div>
<h4 className="font-['Inter'] font-semibold text-lg text-red-300">Basic DIY Sites</h4>
<p className="text-gray-400">Can be difficult to navigate on phones and may lack proper search engine setup.</p>
</div>
</div>

<div className="flex gap-4 p-6 bg-white/5 rounded-2xl border border-[#D35400]/30 shadow-lg">
<iconify-icon className="text-green-500 shrink-0" height="24" icon="solar:check-circle-linear" width="24"></iconify-icon>
<div>
<h4 className="font-['Inter'] font-semibold text-lg text-white">Professional Build</h4>
<p className="text-gray-300">Designed for performance, speed, and ease of use for your potential customers.</p>
</div>
</div>
</div>
</div>
<div className="relative">

<div className="absolute inset-0 bg-gradient-to-r from-[#D35400]/20 to-transparent rounded-3xl blur-2xl"></div>
<div className="relative bg-[#2C3E50] border border-white/10 rounded-3xl p-8 shadow-2xl">
<div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
<span className="font-['Inter'] text-sm text-gray-400">Example Monthly Report</span>
<span className="text-green-400 text-sm flex items-center gap-1"><iconify-icon height="12" icon="solar:graph-up-linear" width="12"></iconify-icon> Positive Trend</span>
</div>
<div className="space-y-4">
<div className="flex justify-between items-center">
<span className="text-gray-300">Page Visits</span>
<div className="w-48 h-2 bg-gray-700 rounded-full overflow-hidden">
<div className="w-[80%] h-full bg-[#2980B9]"></div>
</div>
<span className="font-['Inter'] font-mono opacity-50">####</span>
</div>
<div className="flex justify-between items-center">
<span className="text-gray-300">Form Submissions</span>
<div className="w-48 h-2 bg-gray-700 rounded-full overflow-hidden">
<div className="w-[65%] h-full bg-[#D35400]"></div>
</div>
<span className="font-['Inter'] font-mono opacity-50">####</span>
</div>
<div className="flex justify-between items-center">
<span className="text-gray-300">Click to Call</span>
<div className="w-48 h-2 bg-gray-700 rounded-full overflow-hidden">
<div className="w-[50%] h-full bg-green-500"></div>
</div>
<span className="font-['Inter'] font-mono opacity-50">####</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="testimonials">
<div className="max-w-5xl mx-auto">
<div className="bg-[#151f28] rounded-[2.5rem] p-12 lg:p-20 relative overflow-hidden border border-white/5">

<iconify-icon className="text-white/5 absolute top-10 left-10" height="96" icon="solar:quote-up-linear" width="96"></iconify-icon>
<div className="relative z-10 text-center space-y-10">
<h2 className="font-['Inter'] text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
                        "A website that finally represents the <span className="text-white">quality of work</span> we do on site."
                    </h2>
<div className="flex flex-col items-center gap-4">
<div className="w-16 h-16 rounded-full border-2 border-[#D35400] bg-gray-700 flex items-center justify-center">
<iconify-icon className="text-gray-400" height="32" icon="solar:user-linear" width="32"></iconify-icon>
</div>
<div className="text-center">
<div className="font-['Inter'] font-semibold text-lg text-white">Client Name</div>
<div className="text-[#D35400] text-sm font-medium tracking-wide uppercase">Business Owner</div>
</div>
</div>

<div className="pt-10 border-t border-white/10 flex flex-wrap justify-center gap-8 lg:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2 font-['Inter'] font-bold text-xl"><iconify-icon height="24" icon="solar:widget-linear" width="24"></iconify-icon> Client 1</div>
<div className="flex items-center gap-2 font-['Inter'] font-bold text-xl"><iconify-icon height="24" icon="solar:bolt-linear" width="24"></iconify-icon> Client 2</div>
<div className="flex items-center gap-2 font-['Inter'] font-bold text-xl"><iconify-icon height="24" icon="solar:drop-linear" width="24"></iconify-icon> Client 3</div>
<div className="flex items-center gap-2 font-['Inter'] font-bold text-xl"><iconify-icon height="24" icon="solar:hammer-linear" width="24"></iconify-icon> Client 4</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-4xl mx-auto px-6 text-center" id="contact">
<div className="space-y-8">
<h2 className="font-['Inter'] text-4xl lg:text-6xl font-semibold tracking-tight">
                Ready to improve your <span className="text-[#D35400]">online presence</span>?
            </h2>
<p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Contact us to discuss your requirements. We offer transparent pricing and clear timelines.
            </p>
<div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
<button className="bg-[#D35400] hover:bg-[#A04000] text-white px-10 py-5 rounded-full font-['Inter'] text-xl font-semibold transition-all hover:scale-105 shadow-[0_0_30px_rgba(211,84,0,0.4)] flex items-center justify-center gap-3">
                    Start Conversation <iconify-icon height="24" icon="solar:arrow-right-linear" width="24"></iconify-icon>
</button>
<button className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-10 py-5 rounded-full font-['Inter'] text-lg font-medium transition-all">
                    View Portfolio
                </button>
</div>
<p className="text-sm text-gray-500 pt-6 flex items-center justify-center gap-1">
<iconify-icon height="12" icon="solar:lock-linear" width="12"></iconify-icon> Your privacy is respected.
            </p>
</div>
</section>

<footer className="border-t border-white/5 bg-[#1A252F] py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="bg-[#D35400] p-1 rounded-md flex items-center justify-center">
<iconify-icon className="text-white" height="16" icon="solar:hammer-linear" width="16"></iconify-icon>
</div>
<span className="font-['Inter'] text-md font-semibold text-gray-300">TradieWebCo</span>
</div>
<div className="text-sm text-gray-500 font-['Inter']">
                © 2023 TradieWebCo.
            </div>
<div className="flex gap-6 text-sm text-gray-400 font-['Inter']">
<a className="hover:text-white" href="#">Privacy Policy</a>
<a className="hover:text-white" href="#">Terms of Service</a>
</div>
</div>
</footer>

    </>
  );
}
