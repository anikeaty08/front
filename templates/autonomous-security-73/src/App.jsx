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
      

<header className="fixed top-0 inset-x-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-lg font-semibold tracking-tight text-zinc-900 flex items-center gap-2" href="#">
<div className="w-6 h-6 rounded bg-[#185284] flex items-center justify-center">
<iconify-icon className="text-white text-sm" icon="solar:bolt-linear"></iconify-icon>
</div>
                    SPARKS.
                </a>
<nav className="hidden md:flex items-center gap-6 text-sm font-medium">
<a className="text-zinc-500 hover:text-[#185284] transition-colors" href="#solutions">Solutions</a>
<a className="text-zinc-500 hover:text-[#185284] transition-colors" href="#industries">Industries</a>
<a className="text-zinc-500 hover:text-[#185284] transition-colors" href="#hardware">Equipment</a>
</nav>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-zinc-500 hover:text-[#185284] transition-colors" href="#">Client Login</a>
<a className="h-9 px-4 inline-flex items-center justify-center rounded-md bg-[#185284] text-white text-sm font-medium hover:bg-[#185284]/90 transition-colors" href="#">
                    Request Quote
                </a>
</div>
</div>
</header>
<main>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-30 pointer-events-none" style={{background: 'radial-gradient(circle, rgba(129,210,46,0.2) 0%, rgba(255,255,255,0) 70%)'}}></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 bg-zinc-50 text-xs font-medium text-zinc-600 mb-8 backdrop-blur-sm shadow-sm">
<span className="flex h-2 w-2 rounded-full bg-[#81d22e]"></span>
                    Deployable Solar Security &amp; Power
                </div>
<h1 className="text-4xl md:text-7xl font-semibold tracking-tight text-zinc-900 max-w-4xl mx-auto leading-tight mb-6">
                    Mobile surveillance. <br className="hidden md:block"/>
<span className="text-[#185284]">Zero grid required.</span>
</h1>
<p className="text-base md:text-lg text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Solar-powered, autonomous security trailers equipped with AI analytics, stadium lighting, and satellite communication. Secure and illuminate remote sites instantly.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto h-11 px-6 inline-flex items-center justify-center rounded-md bg-[#185284] text-white text-sm font-medium hover:bg-[#185284]/90 transition-colors gap-2 shadow-lg shadow-[#185284]/20" href="#">
                        View Our Trailers
                        <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto h-11 px-6 inline-flex items-center justify-center rounded-md border border-zinc-200 bg-white text-zinc-700 text-sm font-medium hover:bg-zinc-50 transition-colors shadow-sm" href="#">
                        Speak to an Expert
                    </a>
</div>

<div className="mt-20 relative max-w-4xl mx-auto perspective-1000">
<div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent z-10 pointer-events-none"></div>
<div className="rounded-xl border border-zinc-200 bg-white shadow-2xl overflow-hidden ring-1 ring-zinc-900/5" style={{transform: 'rotateX(5deg) scale(0.95)'}}>

<div className="h-12 border-b border-zinc-200 flex items-center px-4 justify-between bg-zinc-50/80">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-zinc-300"></div>
<div className="w-3 h-3 rounded-full bg-zinc-300"></div>
<div className="w-3 h-3 rounded-full bg-zinc-300"></div>
</div>
<div className="text-xs font-medium text-zinc-500 tracking-wide">SPARKS COMMAND DASHBOARD</div>
<div className="w-12"></div>
</div>

<div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4 h-auto md:h-80 bg-zinc-50/50">
<div className="md:col-span-2 bg-zinc-100 rounded-lg border border-zinc-200 relative overflow-hidden flex items-center justify-center group shadow-inner">
<img alt="Construction Site Surveillance" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700 mix-blend-multiply" src="https://images.unsplash.com/photo-1541888087405-ebccaf5518b5?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
<div className="absolute top-3 left-3 flex items-center gap-2 px-2 py-1 rounded bg-white/90 backdrop-blur-md border border-zinc-200 shadow-sm">
<div className="w-2 h-2 rounded-full bg-[#81d22e] animate-pulse"></div>
<span className="text-xs text-zinc-700 font-medium tracking-wide">UNIT 42 - HOUSTON SITE</span>
</div>
<div className="absolute bottom-3 right-3">
<iconify-icon className="text-white drop-shadow-md text-xl" icon="solar:maximize-square-linear"></iconify-icon>
</div>

<div className="absolute top-1/4 left-1/3 w-32 h-48 border-2 border-[#81d22e] bg-[#81d22e]/10 hidden md:block">
<span className="absolute -top-5 left-0 text-[10px] bg-[#81d22e] text-[#185284] px-1 font-semibold">VEHICLE DETECTED</span>
</div>
</div>
<div className="flex flex-col gap-4">
<div className="bg-white rounded-lg border border-zinc-200 p-4 flex-1 flex flex-col justify-between shadow-sm">
<div className="flex items-center justify-between text-zinc-500">
<span className="text-xs font-medium">System Status</span>
<iconify-icon className="text-[#81d22e] text-lg" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div>
<div className="text-2xl font-semibold tracking-tight text-zinc-900">Online</div>
<div className="text-xs text-zinc-500 mt-1">Connectivity: LTE</div>
</div>
</div>
<div className="bg-white rounded-lg border border-zinc-200 p-4 flex-1 flex flex-col justify-between shadow-sm">
<div className="flex items-center justify-between text-zinc-500">
<span className="text-xs font-medium">Power Grid (Solar)</span>
<iconify-icon className="text-[#185284] text-lg" icon="solar:sun-linear"></iconify-icon>
</div>
<div>
<div className="text-2xl font-semibold tracking-tight text-zinc-900">100%</div>
<div className="w-full h-1.5 bg-zinc-100 rounded-full mt-2 overflow-hidden border border-zinc-200">
<div className="w-full h-full bg-[#81d22e] rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-zinc-200 bg-zinc-50 py-10">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium text-zinc-400 mb-6 uppercase tracking-widest">Powering &amp; Securing industry leaders</p>
<div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-60 grayscale mix-blend-multiply">
<span className="text-xl font-semibold tracking-tight text-zinc-800">BUILDCO</span>
<span className="text-xl font-semibold tracking-tight text-zinc-800">APEX RETAIL</span>
<span className="text-xl font-semibold tracking-tight text-zinc-800">TRANSIT.NET</span>
<span className="text-xl font-semibold tracking-tight text-zinc-800">OAKWOOD</span>
<span className="text-xl font-semibold tracking-tight text-zinc-800">CITY MUNICIPAL</span>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative" id="solutions">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-2xl mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-4">Complete site control. Anywhere.</h2>
<p className="text-base text-zinc-500">Our heavy-duty, self-contained trailers arrive ready for action. Bringing immediate surveillance, brilliant illumination, and robust network connectivity to locations without power or infrastructure.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="p-6 rounded-2xl border border-zinc-200 bg-white shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-lg bg-[#185284]/5 flex items-center justify-center mb-6 border border-[#185284]/10">
<iconify-icon className="text-[#185284] text-xl" icon="solar:camera-linear"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-zinc-900 mb-2 tracking-tight">AI Surveillance</h3>
<p className="text-sm text-zinc-500 leading-relaxed">High-definition PTZ and thermal cameras combined with edge-AI to actively detect and track unauthorized movement.</p>
</div>

<div className="p-6 rounded-2xl border border-zinc-200 bg-white shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-lg bg-[#185284]/5 flex items-center justify-center mb-6 border border-[#185284]/10">
<iconify-icon className="text-[#185284] text-xl" icon="solar:sun-linear"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-zinc-900 mb-2 tracking-tight">100% Autonomous</h3>
<p className="text-sm text-zinc-500 leading-relaxed">High-yield solar arrays paired with deep-cycle battery banks guarantee continuous operation 24/7/365 without refueling.</p>
</div>

<div className="p-6 rounded-2xl border border-zinc-200 bg-white shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-[#81d22e]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-[#81d22e]/10 flex items-center justify-center mb-6 border border-[#81d22e]/20">
<iconify-icon className="text-[#81d22e] text-xl" icon="solar:lightbulb-linear"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-zinc-900 mb-2 tracking-tight">LED Light Towers</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Illuminate expansive work zones or event areas with telescoping masts and ultra-bright, energy-efficient LED floodlights.</p>
</div>
</div>

<div className="p-6 rounded-2xl border border-zinc-200 bg-white shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-lg bg-[#185284]/5 flex items-center justify-center mb-6 border border-[#185284]/10">
<iconify-icon className="text-[#185284] text-xl" icon="solar:global-linear"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-zinc-900 mb-2 tracking-tight">Comm Trailers</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Establish instant site-wide Wi-Fi using integrated LTE, 5G, or satellite uplinks to keep your entire crew connected.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-zinc-200 bg-zinc-50" id="industries">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-4">Protect &amp; power any perimeter.</h2>
<p className="text-base text-zinc-500 max-w-2xl mx-auto">Designed for harsh environments and remote locations where traditional utility hookups fail.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group relative rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
<div className="h-48 bg-zinc-100 relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80')] bg-cover bg-center mix-blend-multiply opacity-80 group-hover:scale-105 transition-transform duration-700"></div>
</div>
<div className="p-6 relative z-10 bg-white border-t border-zinc-100">
<div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center mb-4 shadow-sm -mt-12">
<iconify-icon className="text-[#185284] text-2xl" icon="solar:city-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2 tracking-tight">Construction &amp; Industrial</h3>
<p className="text-sm text-zinc-500 mb-4">Protect raw materials, secure heavy machinery, and provide nighttime illumination to keep projects safe and on schedule.</p>
<a className="inline-flex items-center gap-1 text-sm font-medium text-[#185284] hover:text-[#185284]/80 transition-colors" href="#">
                                Explore Use Case <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="group relative rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
<div className="h-48 bg-zinc-100 relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80')] bg-cover bg-center mix-blend-multiply opacity-80 group-hover:scale-105 transition-transform duration-700"></div>
</div>
<div className="p-6 relative z-10 bg-white border-t border-zinc-100">
<div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center mb-4 shadow-sm -mt-12">
<iconify-icon className="text-[#185284] text-2xl" icon="solar:ticket-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2 tracking-tight">Events &amp; Parking Lots</h3>
<p className="text-sm text-zinc-500 mb-4">Provide a secure, well-lit environment for attendees and vehicles in sprawling, unpowered lots with towering visibility.</p>
<a className="inline-flex items-center gap-1 text-sm font-medium text-[#185284] hover:text-[#185284]/80 transition-colors" href="#">
                                Explore Use Case <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="group relative rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
<div className="h-48 bg-zinc-100 relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80')] bg-cover bg-center mix-blend-multiply opacity-80 group-hover:scale-105 transition-transform duration-700"></div>
</div>
<div className="p-6 relative z-10 bg-white border-t border-zinc-100">
<div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center mb-4 shadow-sm -mt-12">
<iconify-icon className="text-[#185284] text-2xl" icon="solar:shop-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2 tracking-tight">Retail &amp; Distribution</h3>
<p className="text-sm text-zinc-500 mb-4">Monitor loading docks, deter loitering, and reduce liability with high-visibility active deterrence and remote monitoring.</p>
<a className="inline-flex items-center gap-1 text-sm font-medium text-[#185284] hover:text-[#185284]/80 transition-colors" href="#">
                                Explore Use Case <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-zinc-200 relative overflow-hidden bg-white" id="hardware">

<div className="absolute right-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#185284] rounded-full blur-[120px] opacity-[0.03] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-6">Heavy-duty hardware. <br/> Intelligent software.</h2>
<p className="text-base text-zinc-500 mb-8 leading-relaxed">
                        Every Sparks unit is built on ruggedized, DOT-approved trailers designed to withstand extreme temperatures, high winds, and vandalism. Paired with our intuitive cloud-native dashboard, you have absolute control from any device.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<div className="mt-1 w-5 h-5 rounded bg-[#81d22e]/10 border border-[#81d22e]/20 flex items-center justify-center shrink-0">
<iconify-icon className="text-[#81d22e] text-xs font-bold" icon="solar:check-linear"></iconify-icon>
</div>
<div>
<span className="text-sm font-medium text-zinc-900 block">Proactive Deterrence Systems</span>
<span className="text-xs text-zinc-500">Stop incidents before they occur with automated strobes, sirens, and two-way audio.</span>
</div>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 w-5 h-5 rounded bg-[#81d22e]/10 border border-[#81d22e]/20 flex items-center justify-center shrink-0">
<iconify-icon className="text-[#81d22e] text-xs font-bold" icon="solar:check-linear"></iconify-icon>
</div>
<div>
<span className="text-sm font-medium text-zinc-900 block">Telescoping Masts (Up to 30ft)</span>
<span className="text-xs text-zinc-500">Commanding views for cameras and unmatched spread for LED lighting arrays.</span>
</div>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 w-5 h-5 rounded bg-[#81d22e]/10 border border-[#81d22e]/20 flex items-center justify-center shrink-0">
<iconify-icon className="text-[#81d22e] text-xs font-bold" icon="solar:check-linear"></iconify-icon>
</div>
<div>
<span className="text-sm font-medium text-zinc-900 block">Redundant Power Storage</span>
<span className="text-xs text-zinc-500">Industrial-grade battery banks ensure uptime even during extended cloudy periods.</span>
</div>
</li>
</ul>
</div>

<div className="relative h-[500px] bg-zinc-50 rounded-2xl border border-zinc-200 flex items-center justify-center shadow-sm overflow-hidden">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjQsIDgyLCAxMzIsIDAuMDgpIi8+PC9zdmc+')] opacity-50"></div>
<div className="relative flex flex-col items-center gap-4">

<div className="w-32 h-24 bg-white border border-zinc-200 rounded-xl relative shadow-lg flex items-center justify-center z-20">
<div className="w-12 h-12 rounded-full bg-zinc-100 border border-zinc-300 flex items-center justify-center relative shadow-inner">
<div className="w-6 h-6 rounded-full bg-zinc-800"></div>

<div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-white/40"></div>
</div>

<div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-8 bg-white border border-zinc-200 rounded-l flex flex-col justify-around py-1 shadow-sm">
<div className="w-full h-1 bg-red-500/80"></div>
<div className="w-full h-1 bg-[#185284]/80"></div>
</div>
<div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-8 bg-white border border-zinc-200 rounded-r flex flex-col justify-around py-1 shadow-sm">
<div className="w-full h-1 bg-red-500/80"></div>
<div className="w-full h-1 bg-[#185284]/80"></div>
</div>
</div>

<div className="w-8 h-48 bg-gradient-to-b from-zinc-200 to-zinc-300 border-x border-zinc-300 relative z-10 flex flex-col items-center">
<div className="w-10 h-2 bg-zinc-400 mt-4 rounded"></div>
<div className="w-10 h-2 bg-zinc-400 mt-12 rounded"></div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-32 border border-zinc-300 bg-zinc-100/90 backdrop-blur-sm -z-10 rounded shadow-md" style={{transform: 'rotateX(60deg) rotateZ(45deg)'}}>
<div className="w-full h-full grid grid-cols-4 grid-rows-2 gap-1 p-1">
<div className="bg-[#185284]/20 rounded-sm"></div><div className="bg-[#185284]/20 rounded-sm"></div><div className="bg-[#185284]/20 rounded-sm"></div><div className="bg-[#185284]/20 rounded-sm"></div>
<div className="bg-[#185284]/20 rounded-sm"></div><div className="bg-[#185284]/20 rounded-sm"></div><div className="bg-[#185284]/20 rounded-sm"></div><div className="bg-[#185284]/20 rounded-sm"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative overflow-hidden bg-zinc-50 border-t border-zinc-200">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjQsIDgyLCAxMzIsIDAuMDgpIi8+PC9zdmc+')] opacity-50"></div>
<div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-full max-w-lg bg-[#81d22e]/10 blur-[100px] pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-zinc-900 mb-6">Secure and illuminate your site.</h2>
<p className="text-base text-zinc-500 mb-10 max-w-xl mx-auto">
                    Stop reacting to incidents. Start deterring them. Contact our specialists for a customized deployment plan for your project.
                </p>
<a className="h-12 px-8 inline-flex items-center justify-center rounded-md bg-[#81d22e] text-[#185284] text-sm font-semibold hover:bg-[#81d22e]/90 transition-colors shadow-lg shadow-[#81d22e]/20" href="#">
                    Request Pricing &amp; Demo
                </a>
</div>
</section>
</main>

<footer className="border-t border-zinc-200 bg-white pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
<div className="col-span-2 lg:col-span-2">
<a className="text-lg font-semibold tracking-tight text-zinc-900 flex items-center gap-2 mb-4" href="#">
<div className="w-6 h-6 rounded bg-[#185284] flex items-center justify-center">
<iconify-icon className="text-white text-sm" icon="solar:bolt-linear"></iconify-icon>
</div>
                        SPARKS.
                    </a>
<p className="text-xs text-zinc-500 max-w-xs mb-6">
                        Providing autonomous, off-grid security, lighting, and communication trailers for the toughest environments.
                    </p>
</div>
<div>
<h4 className="text-xs font-semibold text-zinc-900 tracking-wider uppercase mb-4">Solutions</h4>
<ul className="space-y-3">
<li><a className="text-sm text-zinc-500 hover:text-[#185284] transition-colors" href="#">Surveillance Trailers</a></li>
<li><a className="text-sm text-zinc-500 hover:text-[#185284] transition-colors" href="#">Solar Light Towers</a></li>
<li><a className="text-sm text-zinc-500 hover:text-[#185284] transition-colors" href="#">Communication Trailers</a></li>
<li><a className="text-sm text-zinc-500 hover:text-[#185284] transition-colors" href="#">Cloud Dashboard</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-zinc-900 tracking-wider uppercase mb-4">Industries</h4>
<ul className="space-y-3">
<li><a className="text-sm text-zinc-500 hover:text-[#185284] transition-colors" href="#">Construction</a></li>
<li><a className="text-sm text-zinc-500 hover:text-[#185284] transition-colors" href="#">Retail &amp; Logistics</a></li>
<li><a className="text-sm text-zinc-500 hover:text-[#185284] transition-colors" href="#">Live Events</a></li>
<li><a className="text-sm text-zinc-500 hover:text-[#185284] transition-colors" href="#">Agriculture &amp; Energy</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-zinc-900 tracking-wider uppercase mb-4">Company</h4>
<ul className="space-y-3">
<li><a className="text-sm text-zinc-500 hover:text-[#185284] transition-colors" href="#">About Us</a></li>
<li><a className="text-sm text-zinc-500 hover:text-[#185284] transition-colors" href="#">Equipment Sales</a></li>
<li><a className="text-sm text-zinc-500 hover:text-[#185284] transition-colors" href="#">Contact</a></li>
<li><a className="text-sm text-zinc-500 hover:text-[#185284] transition-colors" href="#">Privacy Policy</a></li>
</ul>
</div>
</div>
<div className="border-t border-zinc-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-zinc-400">
                    © 2024 Sparks Power Security. All rights reserved.
                </p>
<div className="flex items-center gap-4 text-zinc-400">
<a className="hover:text-[#185284] transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:map-arrow-up-linear"></iconify-icon></a>
<a className="hover:text-[#185284] transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
