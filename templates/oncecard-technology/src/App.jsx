import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-slate-200 bg-white/70 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-10">
<a className="text-base font-medium tracking-tighter text-slate-900" href="#">ONCECARD</a>
<div className="hidden md:flex items-center gap-6 text-sm font-normal text-slate-500">
<a className="hover:text-slate-900 transition-colors duration-200" href="#">Products</a>
<a className="hover:text-slate-900 transition-colors duration-200" href="#">Features</a>
<a className="hover:text-slate-900 transition-colors duration-200" href="#">Enterprise</a>
<a className="hover:text-slate-900 transition-colors duration-200" href="#">Pricing</a>
</div>
</div>
<div className="flex items-center gap-6">
<button className="text-sm font-normal text-slate-500 hover:text-slate-900 transition-colors duration-200 hidden sm:block">Log in</button>
<button className="bg-blue-600 text-white text-xs font-medium px-4 py-2 rounded-full hover:bg-blue-700 transition-all duration-200 shadow-sm">Get Started</button>
</div>
</div>
</nav>
<main className="relative pt-32 pb-20 spotlight min-h-screen">
<div className="grid-bg"></div>

<section className="max-w-7xl mx-auto px-6 text-center pt-16 md:pt-24 relative z-10">
<div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-full text-xs font-medium text-blue-700 mb-8 backdrop-blur-sm shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-40"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
</span>
                Introducing Next-Gen Networking
                <iconify-icon className="text-blue-500" icon="solar:arrow-right-linear"></iconify-icon>
</div>
<h1 className="text-6xl md:text-8xl font-medium tracking-tighter leading-[1.05] mb-8">
<span className="text-gradient">Redefining the</span> <br/>
<span className="text-gradient-subtle">First Impression.</span>
</h1>
<p className="max-w-2xl mx-auto text-base md:text-lg font-normal text-slate-500 mb-12 leading-relaxed">
                Connect your physical presence with your digital world. Seamlessly share profiles, gather leads, and grow your network with advanced smart cards.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto bg-blue-600 text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-md shadow-blue-600/20">
                    Design Your Card
                </button>
<button className="w-full sm:w-auto bg-transparent border border-slate-200 text-slate-700 text-sm font-medium px-6 py-3 rounded-full hover:bg-slate-50 transition-all duration-300 flex items-center justify-center gap-2">
                    How it Works
                </button>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 mt-40">
<div className="relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 to-blue-800/10 rounded-3xl blur-2xl opacity-50 group-hover:opacity-70 transition duration-1000"></div>
<div className="relative glass-panel rounded-3xl p-6 md:p-12 grid grid-cols-1 md:grid-cols-12 gap-12 items-center bg-white border-slate-100 shadow-xl shadow-slate-200/50">
<div className="md:col-span-5 space-y-8">
<div className="space-y-3">
<h3 className="text-3xl font-medium tracking-tighter text-gradient">One Tap. <br/>Infinite Connections.</h3>
<p className="text-sm text-slate-500 leading-relaxed">Your card acts as a gateway to your entire professional ecosystem. No apps required for recipients.</p>
</div>
<div className="space-y-3">
<div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100 cursor-pointer">
<iconify-icon className="text-2xl text-blue-600 mt-0.5" icon="solar:share-circle-linear"></iconify-icon>
<div>
<p className="text-sm font-medium text-slate-900">Instant Sharing</p>
<p className="text-xs text-slate-500 mt-1">Share contact details, socials, and files instantly with any smartphone.</p>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100 cursor-pointer">
<iconify-icon className="text-2xl text-slate-400 mt-0.5" icon="solar:graph-up-linear"></iconify-icon>
<div>
<p className="text-sm font-medium text-slate-700">Real-time Analytics</p>
<p className="text-xs text-slate-500 mt-1">Track how many times your card is tapped and measure engagement.</p>
</div>
</div>
</div>
</div>
<div className="md:col-span-7 flex justify-center perspective-1000">

<div className="relative w-full max-w-[420px] aspect-[1.58/1] bg-gradient-to-br from-slate-50 to-slate-200 rounded-2xl border border-slate-300 p-8 overflow-hidden shadow-2xl transition-transform duration-700 hover:rotate-2 hover:scale-105">

<div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 transform -translate-x-full group-hover:translate-x-full"></div>
<div className="flex flex-col h-full justify-between relative z-10">
<div className="flex justify-between items-start">
<div className="text-base font-medium tracking-tighter text-slate-800">ONCECARD</div>
<iconify-icon className="text-2xl text-slate-400" icon="solar:card-2-linear"></iconify-icon>
</div>
<div>
<p className="text-lg font-medium tracking-tight text-slate-900 mb-1">Alex Sterling</p>
<p className="text-xs text-blue-600 uppercase tracking-widest font-medium">Product Architect</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mt-48">
<div className="text-center mb-20">
<h2 className="text-4xl font-medium tracking-tighter text-gradient mb-4">Choose Your Identity</h2>
<p className="text-sm text-slate-500">High-quality materials meet advanced technology.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-panel bg-white rounded-2xl p-6 group cursor-pointer transition-all duration-300 hover:border-blue-200 hover:shadow-md">
<div className="aspect-square bg-slate-50 rounded-xl mb-8 flex items-center justify-center border border-slate-100 transition-colors group-hover:border-blue-100">
<iconify-icon className="text-5xl text-slate-400 group-hover:text-blue-600 transition-colors duration-300" icon="solar:card-linear"></iconify-icon>
</div>
<h4 className="text-base font-medium text-slate-900 mb-2">Matte Obsidian</h4>
<p className="text-sm text-slate-500 mb-8 leading-relaxed">Premium PVC with a sleek matte finish. Perfect for daily professional use.</p>
<div className="flex items-center justify-between pt-4 border-t border-slate-100">
<span className="text-lg font-medium text-slate-900">$29</span>
<button className="text-xs font-medium bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-full transition-colors">
                            Add to bag
                        </button>
</div>
</div>

<div className="glass-panel bg-blue-50/50 rounded-2xl p-6 group cursor-pointer transition-all duration-300 border-blue-100 shadow-md hover:shadow-lg hover:bg-blue-50">
<div className="aspect-square bg-white rounded-xl mb-8 flex items-center justify-center border border-blue-100 overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-white opacity-50"></div>
<iconify-icon className="text-5xl text-blue-600 relative z-10 transition-transform duration-500 group-hover:scale-110" icon="solar:star-fall-minimalistic-2-linear"></iconify-icon>
</div>
<h4 className="text-base font-medium text-slate-900 mb-2">Stainless Steel</h4>
<p className="text-sm text-slate-500 mb-8 leading-relaxed">Laser-engraved aerospace-grade metal. The ultimate statement of quality.</p>
<div className="flex items-center justify-between pt-4 border-t border-blue-100/50">
<span className="text-lg font-medium text-slate-900">$79</span>
<button className="text-xs font-medium bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-full transition-colors shadow-sm">
                            Add to bag
                        </button>
</div>
</div>

<div className="glass-panel bg-white rounded-2xl p-6 group cursor-pointer transition-all duration-300 hover:border-blue-200 hover:shadow-md">
<div className="aspect-square bg-slate-50 rounded-xl mb-8 flex items-center justify-center border border-slate-100 transition-colors group-hover:border-blue-100">
<iconify-icon className="text-5xl text-slate-400 group-hover:text-blue-600 transition-colors duration-300" icon="solar:leaf-linear"></iconify-icon>
</div>
<h4 className="text-base font-medium text-slate-900 mb-2">Sustainable Bamboo</h4>
<p className="text-sm text-slate-500 mb-8 leading-relaxed">Eco-friendly handcrafted wood. Sustainably sourced for the conscious leader.</p>
<div className="flex items-center justify-between pt-4 border-t border-slate-100">
<span className="text-lg font-medium text-slate-900">$39</span>
<button className="text-xs font-medium bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-full transition-colors">
                            Add to bag
                        </button>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mt-48">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
<div className="space-y-10 order-2 lg:order-1">
<div className="space-y-4">
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter leading-tight text-gradient">Control your profile <br/> from any device.</h2>
<p className="text-base text-slate-500 leading-relaxed max-w-md">Our cloud dashboard allows you to update your information instantly without ever needing a new physical card.</p>
</div>
<div className="space-y-8">
<div className="flex items-start gap-5">
<div className="mt-0.5 w-10 h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-lg text-blue-600" icon="solar:pen-new-square-linear"></iconify-icon>
</div>
<div>
<h5 className="text-sm font-medium text-slate-900 mb-1">Instant Updates</h5>
<p className="text-sm text-slate-500">Changed your phone number? Update it in seconds on our app and it reflects globally.</p>
</div>
</div>
<div className="flex items-start gap-5">
<div className="mt-0.5 w-10 h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-lg text-blue-600" icon="solar:link-linear"></iconify-icon>
</div>
<div>
<h5 className="text-sm font-medium text-slate-900 mb-1">Unlimited Links</h5>
<p className="text-sm text-slate-500">Add custom buttons for booking, portfolios, or direct payment integrations.</p>
</div>
</div>
</div>
</div>
<div className="relative order-1 lg:order-2">
<div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-3xl blur-2xl opacity-50"></div>
<div className="relative glass-panel bg-white border border-slate-200 rounded-2xl p-2 rotate-1 lg:rotate-2 shadow-xl shadow-slate-200/50 transition-transform hover:rotate-0 duration-500">
<div className="bg-white rounded-xl h-[450px] w-full overflow-hidden flex flex-col border border-slate-100">

<div className="px-4 py-3 border-b border-slate-100 flex items-center bg-slate-50">
<div className="flex gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
</div>
<div className="mx-auto bg-white border border-slate-200 px-6 py-1 rounded-md text-[10px] text-slate-500 font-medium">dashboard.oncecard.com</div>
</div>

<div className="p-8 overflow-y-auto custom-scrollbar flex-grow bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-50 via-white to-white">
<div className="flex items-center gap-6 mb-10">
<div className="w-20 h-20 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center">
<iconify-icon className="text-2xl text-slate-400" icon="solar:user-linear"></iconify-icon>
</div>
<div className="space-y-3">
<div className="h-5 w-40 bg-slate-200 rounded-md"></div>
<div className="h-3 w-24 bg-slate-100 rounded-md"></div>
</div>
</div>
<div className="space-y-4">
<div className="h-12 w-full bg-slate-50 rounded-lg border border-slate-100 flex items-center px-4 gap-3">
<div className="w-4 h-4 rounded bg-slate-200"></div>
<div className="h-3 w-32 bg-slate-200 rounded"></div>
</div>
<div className="h-12 w-full bg-slate-50 rounded-lg border border-slate-100 flex items-center px-4 gap-3">
<div className="w-4 h-4 rounded bg-slate-200"></div>
<div className="h-3 w-48 bg-slate-200 rounded"></div>
</div>
<div className="h-12 w-full bg-blue-50 border border-blue-100 rounded-lg flex items-center justify-center mt-6">
<div className="h-3 w-20 bg-blue-200 rounded"></div>
</div>
<div className="grid grid-cols-2 gap-4 mt-4">
<div className="h-24 bg-slate-50 rounded-lg border border-slate-100"></div>
<div className="h-24 bg-slate-50 rounded-lg border border-slate-100"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mt-48 mb-24">
<div className="flex flex-col items-center mb-16 text-center">
<h2 className="text-4xl font-medium tracking-tighter text-gradient mb-6">Simple, transparent pricing</h2>
<div className="flex items-center p-1 rounded-full border border-slate-200 bg-slate-50 backdrop-blur-md">
<button className="px-6 py-2 rounded-full text-xs font-medium bg-white text-slate-900 shadow-sm transition-all border border-slate-200">Monthly</button>
<button className="px-6 py-2 rounded-full text-xs font-medium text-slate-500 hover:text-slate-900 transition-all">Yearly <span className="text-blue-600 hidden sm:inline ml-1">- Save 20%</span></button>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">

<div className="glass-panel bg-white rounded-3xl p-8 flex flex-col border border-slate-200 hover:border-slate-300 transition-colors shadow-sm hover:shadow-md">
<p className="text-sm font-medium text-slate-500 mb-4">Starter</p>
<div className="flex items-end gap-1 mb-8">
<span className="text-5xl font-medium tracking-tighter text-slate-900">$0</span>
</div>
<ul className="space-y-4 mb-10 flex-grow">
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-lg text-blue-600" icon="solar:check-circle-linear"></iconify-icon>
                            Standard Profile Page
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-lg text-blue-600" icon="solar:check-circle-linear"></iconify-icon>
                            Basic Social Links
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-lg text-blue-600" icon="solar:check-circle-linear"></iconify-icon>
                            OnceCard Digital QR
                        </li>
</ul>
<button className="w-full py-3 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 transition-colors text-sm font-medium">Get Started</button>
</div>

<div className="rounded-3xl p-8 flex flex-col border border-blue-500 bg-blue-600 relative shadow-xl shadow-blue-900/10">
<div className="absolute -top-3 right-8 bg-white text-blue-600 text-[10px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">Popular</div>
<p className="text-sm font-medium text-blue-100 mb-4">Professional</p>
<div className="flex items-end gap-1 mb-8">
<span className="text-5xl font-medium tracking-tighter text-white">$9</span>
<span className="text-sm text-blue-200 mb-2">/mo</span>
</div>
<ul className="space-y-4 mb-10 flex-grow">
<li className="flex items-center gap-3 text-sm text-blue-50">
<iconify-icon className="text-lg text-white" icon="solar:check-circle-linear"></iconify-icon>
                            Custom Domain Name
                        </li>
<li className="flex items-center gap-3 text-sm text-blue-50">
<iconify-icon className="text-lg text-white" icon="solar:check-circle-linear"></iconify-icon>
                            Detailed Analytics
                        </li>
<li className="flex items-center gap-3 text-sm text-blue-50">
<iconify-icon className="text-lg text-white" icon="solar:check-circle-linear"></iconify-icon>
                            CRM Integrations
                        </li>
<li className="flex items-center gap-3 text-sm text-blue-50">
<iconify-icon className="text-lg text-white" icon="solar:check-circle-linear"></iconify-icon>
                            Priority Support
                        </li>
</ul>
<button className="w-full py-3 rounded-xl bg-white text-blue-600 hover:bg-slate-50 transition-colors text-sm font-medium shadow-sm">Upgrade to Pro</button>
</div>

<div className="glass-panel bg-white rounded-3xl p-8 flex flex-col border border-slate-200 hover:border-slate-300 transition-colors shadow-sm hover:shadow-md">
<p className="text-sm font-medium text-slate-500 mb-4">Enterprise</p>
<div className="flex items-end gap-1 mb-8">
<span className="text-5xl font-medium tracking-tighter text-slate-900">Custom</span>
</div>
<ul className="space-y-4 mb-10 flex-grow">
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-lg text-blue-600" icon="solar:check-circle-linear"></iconify-icon>
                            Bulk Card Management
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-lg text-blue-600" icon="solar:check-circle-linear"></iconify-icon>
                            Company-wide Analytics
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-lg text-blue-600" icon="solar:check-circle-linear"></iconify-icon>
                            Dedicated Account Manager
                        </li>
</ul>
<button className="w-full py-3 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 transition-colors text-sm font-medium">Contact Sales</button>
</div>
</div>
</section>
</main>

<footer className="border-t border-slate-200 bg-slate-50 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-12">
<div className="col-span-2 space-y-6">
<a className="text-base font-medium tracking-tighter text-slate-900" href="#">ONCECARD</a>
<p className="text-sm text-slate-500 max-w-xs leading-relaxed">The future of professional identity. Bridging physical networking with digital intelligence seamlessly.</p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-blue-600 transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:camera-linear"></iconify-icon></a>
<a className="text-slate-400 hover:text-blue-600 transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:user-rounded-linear"></iconify-icon></a>
</div>
</div>
<div>
<h6 className="text-sm font-medium text-slate-900 mb-6">Product</h6>
<ul className="space-y-4 text-sm text-slate-500 font-normal">
<li><a className="hover:text-blue-600 transition-colors" href="#">Metal Cards</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Wood Series</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Classic PVC</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Accessories</a></li>
</ul>
</div>
<div>
<h6 className="text-sm font-medium text-slate-900 mb-6">Platform</h6>
<ul className="space-y-4 text-sm text-slate-500 font-normal">
<li><a className="hover:text-blue-600 transition-colors" href="#">Dashboard</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Analytics</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Team Pro</a></li>
</ul>
</div>
<div>
<h6 className="text-sm font-medium text-slate-900 mb-6">Company</h6>
<ul className="space-y-4 text-sm text-slate-500 font-normal">
<li><a className="hover:text-blue-600 transition-colors" href="#">Our Story</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Sustainability</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Support</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Privacy</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-24 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-500">© 2024 OnceCard Inc. All rights reserved.</p>
<div className="flex gap-6">
<p className="text-xs text-slate-500 cursor-pointer hover:text-blue-600 transition-colors">System Status</p>
<p className="text-xs text-slate-500 cursor-pointer hover:text-blue-600 transition-colors">API Reference</p>
</div>
</div>
</footer>

    </>
  );
}
