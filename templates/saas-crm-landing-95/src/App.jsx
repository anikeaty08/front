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
      

<div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full gradient-blob-1 pointer-events-none -z-10 blur-3xl"></div>
<div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] rounded-full gradient-blob-2 pointer-events-none -z-10 blur-3xl"></div>

<nav className="fixed w-full top-0 z-50 transition-all duration-300 glass-panel border-t-0 border-l-0 border-r-0 border-b-white/50">
<div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<a className="font-semibold tracking-tighter text-2xl text-[#0e2841]" href="#">SOCRATIX</a>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-[#0e2841]/80 hover:text-[#0e2841] transition-colors" href="#">Home</a>
<a className="text-sm font-medium text-[#0e2841]/80 hover:text-[#0e2841] transition-colors" href="#solutions">Solutions</a>
<a className="text-sm font-medium text-[#0e2841]/80 hover:text-[#0e2841] transition-colors" href="#pricing">Pricing</a>
<a className="text-sm font-medium text-[#0e2841]/80 hover:text-[#0e2841] transition-colors" href="#contact">Contact</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-[#0e2841] rounded-full hover:bg-[#0e2841]/90 transition-all shadow-md shadow-[#0e2841]/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0e2841]" href="#contact">
                    Get Started
                </a>
<button className="md:hidden text-[#0e2841] p-2">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
<div className="max-w-5xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/60 border border-white shadow-sm mb-8">
<span className="flex h-2 w-2 rounded-full bg-[#f3bb51]"></span>
<span className="text-xs font-medium text-[#0e2841]/70 tracking-wide uppercase">Introducing next-gen CRM</span>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-tighter text-[#0e2841] leading-[1.1] mb-6">
                Build everlasting <br className="hidden sm:block"/> customer relationships.
            </h1>
<p className="text-base sm:text-lg lg:text-xl text-[#0e2841]/60 font-normal max-w-2xl mx-auto mb-10 leading-relaxed">
                Streamline your operations with clean, intelligent workflows. Connect your teams, delight your clients, and scale without friction.
            </p>

<div className="max-w-md mx-auto bg-white rounded-full p-1.5 shadow-xl shadow-[#0e2841]/5 border border-black/5 flex items-center relative z-20">
<div className="pl-4 pr-2 text-[#0e2841]/40 flex items-center">
<iconify-icon className="text-xl" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
</div>
<input className="flex-1 bg-transparent border-none focus:ring-0 text-sm py-3 outline-none text-[#0e2841] placeholder:text-[#0e2841]/40" placeholder="Enter your work email" type="email"/>
<button className="bg-[#f3bb51] hover:bg-[#e5a839] text-[#0e2841] text-sm font-semibold py-3 px-6 rounded-full transition-all duration-200 flex items-center gap-2">
                    Subscribe
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<p className="text-xs text-[#0e2841]/40 mt-4">Join 10,000+ forward-thinking teams. No credit card required.</p>
</div>

<div className="max-w-6xl mx-auto mt-20 relative z-10 hidden md:block">
<div className="glass-panel rounded-3xl p-4 md:p-6 mx-4 relative transform perspective-1000 rotate-x-2 shadow-2xl shadow-[#a7b6f1]/20">
<div className="flex gap-2 mb-6 ml-2">
<div className="w-2.5 h-2.5 rounded-full bg-[#0e2841]/20"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#0e2841]/20"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#0e2841]/20"></div>
</div>
<div className="grid grid-cols-12 gap-6 h-[400px]">
<div className="col-span-3 bg-white/40 rounded-2xl p-4 flex flex-col gap-3 border border-white/50">
<div className="h-8 w-full bg-[#a7b6f1]/20 rounded-lg mb-4"></div>
<div className="h-6 w-3/4 bg-white/60 rounded-md"></div>
<div className="h-6 w-5/6 bg-white/60 rounded-md"></div>
<div className="h-6 w-2/3 bg-white/60 rounded-md"></div>
<div className="mt-auto h-12 w-full bg-[#0e2841]/5 rounded-xl"></div>
</div>
<div className="col-span-9 flex flex-col gap-6">
<div className="flex justify-between items-center bg-white/40 rounded-2xl p-4 border border-white/50">
<div className="h-6 w-48 bg-[#0e2841]/10 rounded-md"></div>
<div className="flex gap-2">
<div className="h-8 w-8 bg-white/60 rounded-full"></div>
<div className="h-8 w-24 bg-[#f3bb51]/20 rounded-full"></div>
</div>
</div>
<div className="flex-1 grid grid-cols-3 gap-6">
<div className="col-span-2 bg-white/40 rounded-2xl p-6 border border-white/50 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#a686dc]/10 rounded-full blur-2xl"></div>
<div className="h-5 w-32 bg-[#0e2841]/20 rounded-md mb-6"></div>
<div className="flex items-end gap-3 h-32 mt-auto">
<div className="w-full bg-[#a7b6f1]/30 rounded-t-lg h-1/3"></div>
<div className="w-full bg-[#a7b6f1]/40 rounded-t-lg h-2/3"></div>
<div className="w-full bg-[#a7b6f1]/60 rounded-t-lg h-full"></div>
<div className="w-full bg-[#0e2841]/80 rounded-t-lg h-4/5"></div>
<div className="w-full bg-[#a7b6f1]/30 rounded-t-lg h-1/2"></div>
</div>
</div>
<div className="col-span-1 flex flex-col gap-6">
<div className="flex-1 bg-white/40 rounded-2xl p-5 border border-white/50 flex flex-col justify-center items-center">
<div className="w-16 h-16 rounded-full border-4 border-[#f3bb51] border-t-transparent animate-spin-slow mb-3"></div>
<div className="h-4 w-20 bg-[#0e2841]/10 rounded-md"></div>
</div>
<div className="flex-1 bg-[#0e2841] rounded-2xl p-5 border border-[#0e2841] flex flex-col justify-between relative overflow-hidden">
<div className="absolute bottom-[-10px] right-[-10px] w-20 h-20 bg-[#a7b6f1]/20 rounded-full blur-xl"></div>
<div className="h-4 w-16 bg-white/20 rounded-md"></div>
<div className="h-8 w-24 bg-white/90 rounded-md"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-[#0e2841]/5 bg-white/40 backdrop-blur-md relative z-10">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<p className="text-center text-xs font-semibold uppercase tracking-widest text-[#0e2841]/40 mb-8">Trusted by industry leaders worldwide</p>
<div className="flex flex-wrap justify-center items-center gap-10 sm:gap-16 lg:gap-24 opacity-40 grayscale">
<span className="text-xl sm:text-2xl font-semibold tracking-tighter text-[#0e2841]">ACME</span>
<span className="text-xl sm:text-2xl font-semibold tracking-tighter text-[#0e2841]">GLOBEX</span>
<span className="text-xl sm:text-2xl font-semibold tracking-tighter text-[#0e2841]">SOYUZ</span>
<span className="text-xl sm:text-2xl font-semibold tracking-tighter text-[#0e2841]">INITECH</span>
<span className="text-xl sm:text-2xl font-semibold tracking-tighter text-[#0e2841]">UMBRELLA</span>
</div>
</div>
</section>

<section className="py-24 relative" id="solutions">
<div className="absolute inset-0 bg-[#F6F6F6] -z-20"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[60vh] rounded-full gradient-blob-3 pointer-events-none -z-10 blur-3xl opacity-50"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-[#0e2841] mb-4">Everything you need to scale</h2>
<p className="text-base text-[#0e2841]/60 font-normal">Our suite of tools is designed to minimize friction and maximize productivity across your entire organization.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
<div className="glass-panel p-8 rounded-[2rem] hover:-translate-y-1 transition-transform duration-300 group">
<div className="w-12 h-12 rounded-2xl bg-[#a7b6f1]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-2xl text-[#0e2841]" icon="solar:layers-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-[#0e2841] mb-3 tracking-tight">Seamless Integration</h3>
<p className="text-sm text-[#0e2841]/60 leading-relaxed mb-6">Connect your favorite tools in seconds. Socratix acts as the central hub for all your data, ensuring nothing slips through the cracks.</p>
<a className="inline-flex items-center gap-1 text-sm font-medium text-[#0e2841] hover:text-[#a686dc] transition-colors" href="#">
                        Learn more <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<div className="glass-panel p-8 rounded-[2rem] hover:-translate-y-1 transition-transform duration-300 group">
<div className="w-12 h-12 rounded-2xl bg-[#f3bb51]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-2xl text-[#f3bb51]" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-[#0e2841] mb-3 tracking-tight">Real-time Analytics</h3>
<p className="text-sm text-[#0e2841]/60 leading-relaxed mb-6">Make data-driven decisions with beautiful, customizable dashboards that update in real-time. Know exactly where your business stands.</p>
<a className="inline-flex items-center gap-1 text-sm font-medium text-[#0e2841] hover:text-[#f3bb51] transition-colors" href="#">
                        Learn more <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<div className="glass-panel p-8 rounded-[2rem] hover:-translate-y-1 transition-transform duration-300 group">
<div className="w-12 h-12 rounded-2xl bg-[#a686dc]/15 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-2xl text-[#a686dc]" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-[#0e2841] mb-3 tracking-tight">Enterprise Security</h3>
<p className="text-sm text-[#0e2841]/60 leading-relaxed mb-6">Your data is protected by industry-leading security protocols. Rest easy knowing your customer information is safe and compliant.</p>
<a className="inline-flex items-center gap-1 text-sm font-medium text-[#0e2841] hover:text-[#a686dc] transition-colors" href="#">
                        Learn more <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
<div className="flex-1 order-2 lg:order-1 relative">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#a7b6f1]/20 rounded-full blur-3xl -z-10"></div>
<div className="bg-white rounded-[2rem] shadow-2xl shadow-[#0e2841]/5 border border-black/5 p-6 relative">
<div className="flex items-center justify-between mb-8 pb-4 border-b border-[#F6F6F6]">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#F6F6F6] flex items-center justify-center text-[#0e2841]/40">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="h-3 w-24 bg-[#0e2841]/80 rounded-full mb-1"></div>
<div className="h-2 w-16 bg-[#0e2841]/20 rounded-full"></div>
</div>
</div>
<div className="h-8 w-24 bg-[#a7b6f1]/20 rounded-full"></div>
</div>
<div className="space-y-4">
<div className="flex items-center gap-4 p-3 rounded-xl hover:bg-[#F6F6F6] transition-colors border border-transparent hover:border-black/5">
<div className="w-2 h-2 rounded-full bg-[#a686dc]"></div>
<div className="flex-1">
<div className="h-2.5 w-32 bg-[#0e2841]/60 rounded-full mb-2"></div>
<div className="h-2 w-48 bg-[#0e2841]/20 rounded-full"></div>
</div>
<div className="h-6 w-16 bg-white border border-[#0e2841]/10 rounded-md shadow-sm"></div>
</div>
<div className="flex items-center gap-4 p-3 rounded-xl bg-[#F6F6F6] border border-black/5">
<div className="w-2 h-2 rounded-full bg-[#f3bb51]"></div>
<div className="flex-1">
<div className="h-2.5 w-40 bg-[#0e2841]/80 rounded-full mb-2"></div>
<div className="h-2 w-32 bg-[#0e2841]/20 rounded-full"></div>
</div>
<div className="h-6 w-16 bg-white border border-[#0e2841]/10 rounded-md shadow-sm flex items-center justify-center">
<div className="h-1.5 w-8 bg-[#f3bb51] rounded-full"></div>
</div>
</div>
<div className="flex items-center gap-4 p-3 rounded-xl hover:bg-[#F6F6F6] transition-colors border border-transparent hover:border-black/5">
<div className="w-2 h-2 rounded-full bg-[#a7b6f1]"></div>
<div className="flex-1">
<div className="h-2.5 w-28 bg-[#0e2841]/60 rounded-full mb-2"></div>
<div className="h-2 w-40 bg-[#0e2841]/20 rounded-full"></div>
</div>
<div className="h-6 w-16 bg-white border border-[#0e2841]/10 rounded-md shadow-sm"></div>
</div>
</div>
</div>
</div>
<div className="flex-1 order-1 lg:order-2">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#a686dc]/10 text-[#a686dc] text-xs font-semibold uppercase tracking-wider mb-6">
<iconify-icon icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon> Workflow Automation
                    </div>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-[#0e2841] mb-6 leading-tight">
                        Put your routine tasks on autopilot.
                    </h2>
<p className="text-base text-[#0e2841]/60 font-normal mb-8 leading-relaxed">
                        Design custom workflows visually. Trigger actions based on customer behavior, time, or custom events. Free your team to focus on high-impact strategic work while Socratix handles the repetitive details softly in the background.
                    </p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3">
<div className="mt-1 w-5 h-5 rounded-full bg-[#f3bb51]/20 flex items-center justify-center shrink-0">
<iconify-icon className="text-[#f3bb51] text-xs" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-sm text-[#0e2841]/80">Drag-and-drop workflow builder</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 w-5 h-5 rounded-full bg-[#a7b6f1]/20 flex items-center justify-center shrink-0">
<iconify-icon className="text-[#a7b6f1] text-xs" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-sm text-[#0e2841]/80">Pre-built templates for sales and support</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 w-5 h-5 rounded-full bg-[#a686dc]/20 flex items-center justify-center shrink-0">
<iconify-icon className="text-[#a686dc] text-xs" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-sm text-[#0e2841]/80">Advanced logic with conditional routing</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-[#0e2841]/[0.02] border-y border-[#0e2841]/5">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-[#0e2841] mb-4">Built for scale</h2>
<p className="text-base text-[#0e2841]/60 font-normal">Everything you need to manage thousands of relationships without breaking a sweat or slowing down.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 glass-panel p-8 lg:p-10 rounded-[2rem] relative overflow-hidden group">
<div className="absolute -right-20 -top-20 w-64 h-64 bg-[#a7b6f1]/20 rounded-full blur-3xl transition-transform duration-700 group-hover:scale-125"></div>
<iconify-icon className="text-3xl text-[#a7b6f1] mb-5" icon="solar:global-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-xl font-medium text-[#0e2841] mb-2 tracking-tight">Global Edge Network</h3>
<p className="text-sm text-[#0e2841]/60 max-w-sm leading-relaxed">Deliver lightning-fast experiences to your customers, no matter where they are in the world. Our infrastructure automatically routes requests to the nearest data center.</p>
</div>

<div className="md:col-span-1 glass-panel p-8 lg:p-10 rounded-[2rem] relative overflow-hidden group">
<div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#f3bb51]/15 rounded-full blur-2xl transition-transform duration-700 group-hover:scale-125"></div>
<iconify-icon className="text-3xl text-[#f3bb51] mb-5" icon="solar:lock-keyhole-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-xl font-medium text-[#0e2841] mb-2 tracking-tight">Bank-grade Security</h3>
<p className="text-sm text-[#0e2841]/60 leading-relaxed">SOC2 Type II compliant and end-to-end encrypted at rest and in transit.</p>
</div>

<div className="md:col-span-1 glass-panel p-8 lg:p-10 rounded-[2rem] relative overflow-hidden group">
<div className="absolute -left-10 -top-10 w-40 h-40 bg-[#a686dc]/15 rounded-full blur-2xl transition-transform duration-700 group-hover:scale-125"></div>
<iconify-icon className="text-3xl text-[#a686dc] mb-5" icon="solar:database-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-xl font-medium text-[#0e2841] mb-2 tracking-tight">Infinite Storage</h3>
<p className="text-sm text-[#0e2841]/60 leading-relaxed">Never worry about arbitrary limits. Store unlimited contacts and historical events securely.</p>
</div>

<div className="md:col-span-2 glass-panel p-8 lg:p-10 rounded-[2rem] flex flex-col justify-center relative overflow-hidden group">
<div className="flex items-center gap-4 mb-4">
<iconify-icon className="text-3xl text-[#0e2841]" icon="solar:bolt-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-xl font-medium text-[#0e2841] tracking-tight">Real-time Sync Across Devices</h3>
</div>
<p className="text-sm text-[#0e2841]/60 max-w-lg leading-relaxed">Updates push instantly across all your team members' active sessions. Collaborate on documents, view deal stages, and respond to tickets with zero refreshing required.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative">
<div className="absolute top-0 right-0 w-[40vw] h-[40vw] rounded-full bg-[#f3bb51]/5 pointer-events-none -z-10 blur-3xl"></div>
<div className="max-w-4xl mx-auto px-6 text-center">
<iconify-icon className="text-4xl text-[#0e2841]/20 mb-8 block mx-auto" icon="solar:quote-left-linear" strokeWidth="1.5"></iconify-icon>
<h2 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-[#0e2841] leading-relaxed mb-10">
                "Socratix completely changed how we handle customer relationships. The clean interface and powerful automations saved us hundreds of hours in the first month alone."
            </h2>
<div className="flex items-center justify-center gap-4">
<div className="w-12 h-12 rounded-full bg-[#F6F6F6] flex items-center justify-center border border-black/5 shadow-sm">
<span className="text-sm font-semibold tracking-tight text-[#0e2841]">SJ</span>
</div>
<div className="text-left">
<p className="text-sm font-semibold text-[#0e2841]">Sarah Jenkins</p>
<p className="text-xs text-[#0e2841]/60">VP of Operations, INITECH</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="pricing">
<div className="absolute left-0 bottom-0 w-[50vw] h-[50vw] rounded-full bg-[#a7b6f1]/10 pointer-events-none -z-10 blur-3xl"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-[#0e2841] mb-4">Simple, transparent pricing</h2>
<p className="text-base text-[#0e2841]/60 font-normal mb-8">Start for free, then scale alongside your growing business.</p>

<div className="inline-flex items-center gap-2 p-1 bg-white border border-black/5 rounded-full shadow-sm">
<button className="px-5 py-2 text-sm font-semibold rounded-full bg-[#0e2841] text-white transition-all shadow-md">Monthly</button>
<button className="px-5 py-2 text-sm font-medium rounded-full text-[#0e2841]/60 hover:text-[#0e2841] hover:bg-black/5 transition-all">Yearly <span className="text-xs font-semibold text-[#f3bb51] ml-1">-20%</span></button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">

<div className="glass-panel p-10 rounded-[2rem] flex flex-col border border-white/80 shadow-lg shadow-[#0e2841]/5">
<h3 className="text-xl font-medium text-[#0e2841] mb-2 tracking-tight">Starter</h3>
<p className="text-sm text-[#0e2841]/60 mb-6">Perfect for small teams and fast-moving startups.</p>
<div className="mb-8 flex items-baseline gap-1">
<span className="text-4xl font-semibold tracking-tighter text-[#0e2841]">$0</span>
<span className="text-sm font-medium text-[#0e2841]/60">/mo</span>
</div>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex items-center gap-3 text-sm text-[#0e2841]/80">
<iconify-icon className="text-lg text-[#a7b6f1]" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Up to 1,000 contacts
                        </li>
<li className="flex items-center gap-3 text-sm text-[#0e2841]/80">
<iconify-icon className="text-lg text-[#a7b6f1]" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Basic analytics dashboard
                        </li>
<li className="flex items-center gap-3 text-sm text-[#0e2841]/80">
<iconify-icon className="text-lg text-[#a7b6f1]" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Up to 2 team members
                        </li>
</ul>
<button className="w-full py-3.5 rounded-full bg-white border border-black/10 text-[#0e2841] text-sm font-semibold hover:bg-[#F6F6F6] hover:border-black/20 transition-all shadow-sm">
                        Get Started
                    </button>
</div>

<div className="bg-[#0e2841] p-10 rounded-[2rem] flex flex-col relative overflow-hidden shadow-2xl shadow-[#0e2841]/20">
<div className="absolute -top-20 -right-20 w-64 h-64 bg-[#f3bb51]/20 rounded-full blur-3xl pointer-events-none"></div>
<div className="absolute inline-flex items-center top-8 right-8 px-3 py-1 rounded-full bg-[#f3bb51]/10 text-[#f3bb51] text-xs font-semibold uppercase tracking-wider">
                        Popular
                    </div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">Professional</h3>
<p className="text-sm text-white/60 mb-6 max-w-[80%]">For scaling companies that need more power and control.</p>
<div className="mb-8 flex items-baseline gap-1">
<span className="text-4xl font-semibold tracking-tighter text-white">$49</span>
<span className="text-sm font-medium text-white/60">/mo</span>
</div>
<ul className="space-y-4 mb-10 flex-1 relative z-10">
<li className="flex items-center gap-3 text-sm text-white/80">
<iconify-icon className="text-lg text-[#f3bb51]" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Unlimited contacts
                        </li>
<li className="flex items-center gap-3 text-sm text-white/80">
<iconify-icon className="text-lg text-[#f3bb51]" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Advanced workflow automations
                        </li>
<li className="flex items-center gap-3 text-sm text-white/80">
<iconify-icon className="text-lg text-[#f3bb51]" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Unlimited team members
                        </li>
<li className="flex items-center gap-3 text-sm text-white/80">
<iconify-icon className="text-lg text-[#f3bb51]" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Priority 24/7 support
                        </li>
</ul>
<button className="w-full py-3.5 rounded-full bg-[#f3bb51] text-[#0e2841] text-sm font-semibold hover:bg-[#e5a839] transition-all shadow-md shadow-[#f3bb51]/20 relative z-10">
                        Upgrade to Professional
                    </button>
</div>
</div>
</div>
</section>

<section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
<div className="bg-[#0e2841] rounded-[3rem] p-10 md:p-20 relative overflow-hidden text-center shadow-2xl shadow-[#0e2841]/20">

<div className="absolute top-[-20%] left-[-10%] w-[50%] h-[150%] bg-[#a7b6f1]/20 rounded-full blur-[100px] pointer-events-none"></div>
<div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[100%] bg-[#a686dc]/20 rounded-full blur-[80px] pointer-events-none"></div>
<div className="relative z-10 max-w-3xl mx-auto">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6 leading-tight">
                    Ready to transform your <br className="hidden sm:block"/> customer experience?
                </h2>
<p className="text-base md:text-lg text-[#F6F6F6]/70 mb-10 max-w-2xl mx-auto font-light">
                    Join industry leaders who rely on Socratix to manage their relationships, drive sales, and operate with unprecedented clarity.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 bg-[#f3bb51] hover:bg-[#e5a839] text-[#0e2841] text-sm font-semibold rounded-full transition-all duration-200 shadow-lg shadow-[#f3bb51]/20" href="#contact">
                        Start your free trial
                    </a>
<a className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white text-sm font-medium rounded-full transition-all duration-200 backdrop-blur-sm border border-white/10" href="#contact">
                        Contact Sales
                    </a>
</div>
</div>
</div>
</section>

<footer className="bg-[#F6F6F6] pt-20 pb-10 border-t border-[#0e2841]/5 relative z-10" id="contact">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-1 block">
<a className="font-semibold tracking-tighter text-2xl text-[#0e2841] mb-4 inline-block" href="#">SOCRATIX</a>
<p className="text-sm text-[#0e2841]/60 leading-relaxed max-w-xs">
                        Designing the future of customer relationship management with intelligent, clean, and fast software.
                    </p>
</div>
<div>
<h4 className="text-sm font-semibold text-[#0e2841] tracking-wide uppercase mb-6">Product</h4>
<ul className="space-y-3">
<li><a className="text-sm text-[#0e2841]/60 hover:text-[#0e2841] transition-colors" href="#">Features</a></li>
<li><a className="text-sm text-[#0e2841]/60 hover:text-[#0e2841] transition-colors" href="#">Integrations</a></li>
<li><a className="text-sm text-[#0e2841]/60 hover:text-[#0e2841] transition-colors" href="#">Pricing</a></li>
<li><a className="text-sm text-[#0e2841]/60 hover:text-[#0e2841] transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-[#0e2841] tracking-wide uppercase mb-6">Company</h4>
<ul className="space-y-3">
<li><a className="text-sm text-[#0e2841]/60 hover:text-[#0e2841] transition-colors" href="#">About Us</a></li>
<li><a className="text-sm text-[#0e2841]/60 hover:text-[#0e2841] transition-colors" href="#">Careers</a></li>
<li><a className="text-sm text-[#0e2841]/60 hover:text-[#0e2841] transition-colors" href="#">Blog</a></li>
<li><a className="text-sm text-[#0e2841]/60 hover:text-[#0e2841] transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-[#0e2841] tracking-wide uppercase mb-6">Connect</h4>
<ul className="space-y-3">
<li>
<a className="text-sm text-[#0e2841]/60 hover:text-[#0e2841] transition-colors flex items-center gap-2" href="mailto:ceo@socratix.com">
<iconify-icon icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
                                ceo@socratix.com
                            </a>
</li>
<li>
<a className="text-sm text-[#0e2841]/60 hover:text-[#0e2841] transition-colors flex items-center gap-2" href="https://www.linkedin.com/company/socratixus/" rel="noopener noreferrer" target="_blank">
<iconify-icon icon="solar:linkedin-linear" strokeWidth="1.5"></iconify-icon>
                                LinkedIn
                            </a>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-[#0e2841]/10 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-[#0e2841]/40">
                    © 2024 Socratix. All rights reserved.
                </p>
<div className="flex items-center gap-6">
<a className="text-xs text-[#0e2841]/40 hover:text-[#0e2841] transition-colors" href="#">Privacy Policy</a>
<a className="text-xs text-[#0e2841]/40 hover:text-[#0e2841] transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
