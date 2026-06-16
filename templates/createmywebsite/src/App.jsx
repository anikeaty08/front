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

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-4 inset-x-0 z-50 px-4 md:px-6 pointer-events-none">
<div className="max-w-6xl mx-auto h-16 bg-white/80 backdrop-blur-xl border border-stone-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl flex items-center justify-between px-6 pointer-events-auto">
<a className="flex items-center gap-2 group" href="#">
<div className="relative w-8 h-8 flex items-center justify-center bg-stone-900 rounded-lg overflow-hidden group-hover:rotate-3 transition-transform">
<div className="absolute inset-0 bg-gradient-to-tr from-orange-400 to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<span className="font-bold text-white relative z-10 text-lg">C</span>
</div>
<span className="text-sm font-bold text-stone-900 tracking-tight group-hover:text-orange-600 transition-colors">CreateMyWebsite</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
<a className="hover:text-stone-900 transition-colors" href="#work">Work</a>
<a className="hover:text-stone-900 transition-colors" href="#process">Experience</a>
<a className="hover:text-stone-900 transition-colors" href="#pricing">Plans</a>
<a className="hover:text-stone-900 transition-colors" href="#faq">FAQ</a>
</div>
<a className="hidden md:flex items-center gap-2 text-xs font-semibold bg-stone-900 text-white px-5 py-2.5 rounded-xl hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300" href="#start">
                Start Building
            </a>
<button className="md:hidden text-stone-600">
<iconify-icon icon="lucide:menu" width="24"></iconify-icon>
</button>
</div>
</nav>

<main className="relative pt-40 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">

<div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-orange-200/40 rounded-full blur-[100px] pointer-events-none mix-blend-multiply"></div>
<div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-rose-200/40 rounded-full blur-[100px] pointer-events-none mix-blend-multiply"></div>
<div className="absolute inset-0 bg-noise z-0 opacity-40"></div>
<div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
<div className="flex flex-col items-start gap-6 animate-fade-in-up">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-stone-200 shadow-sm text-xs font-medium text-stone-600">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    Get online in 7 days
                </div>
<h1 className="text-5xl md:text-7xl font-bold text-stone-900 tracking-tight leading-[1.05]">
                    Go online in a week <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-rose-500 to-purple-600">professionally.</span>
</h1>
<p className="text-lg md:text-xl text-stone-500 max-w-lg leading-relaxed mt-2">
                    5 years of tech experience distilled into your perfect website. We build high-converting digital ecosystems at affordable rates.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 mt-6 w-full sm:w-auto">
<a className="w-full sm:w-auto px-8 py-4 bg-stone-900 text-white font-semibold text-sm rounded-2xl hover:bg-orange-600 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-stone-900/10 flex items-center justify-center gap-2" href="#start">
                        Start Your Project
                        <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-4 bg-white border border-stone-200 text-stone-600 font-semibold text-sm rounded-2xl hover:bg-stone-50 hover:border-stone-300 transition-all flex items-center justify-center gap-2 shadow-sm" href="#work">
<iconify-icon icon="lucide:layers" width="18"></iconify-icon>
                        Our Process
                    </a>
</div>
</div>

<div className="relative h-[400px] w-full hidden lg:block perspective-1000">

<img alt="3D Abstract Art" className="absolute top-0 right-0 w-3/4 rounded-3xl shadow-2xl animate-float z-10 border border-white/20" src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
<div className="absolute bottom-10 left-10 glass-card p-6 rounded-2xl shadow-xl animate-float-slow z-20 max-w-xs">
<div className="flex items-center gap-3 mb-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center text-white">
<iconify-icon icon="lucide:check-circle" width="20"></iconify-icon>
</div>
<div>
<div className="font-bold text-sm">Deployment Ready</div>
<div className="text-xs text-stone-500">Just now</div>
</div>
</div>
<div className="w-full bg-stone-100 h-1.5 rounded-full overflow-hidden">
<div className="bg-green-500 w-full h-full rounded-full"></div>
</div>
</div>
</div>
</div>
</main>

<section className="border-y border-stone-200 bg-white py-16">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
<div className="text-center md:text-left">
<h3 className="text-4xl md:text-5xl font-bold text-stone-900 tracking-tight mb-2">5+</h3>
<p className="text-sm font-semibold text-stone-500 uppercase tracking-wider">Years Experience</p>
</div>
<div className="text-center md:text-left">
<h3 className="text-4xl md:text-5xl font-bold text-stone-900 tracking-tight mb-2">100%</h3>
<p className="text-sm font-semibold text-stone-500 uppercase tracking-wider">Satisfaction</p>
</div>
<div className="text-center md:text-left">
<h3 className="text-4xl md:text-5xl font-bold text-stone-900 tracking-tight mb-2">7 Days</h3>
<p className="text-sm font-semibold text-stone-500 uppercase tracking-wider">Fast Turnaround</p>
</div>
<div className="text-center md:text-left">
<h3 className="text-4xl md:text-5xl font-bold text-stone-900 tracking-tight mb-2">24/7</h3>
<p className="text-sm font-semibold text-stone-500 uppercase tracking-wider">Support</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto" id="work">
<div className="mb-16 md:text-center max-w-3xl mx-auto">
<h2 className="text-3xl md:text-5xl font-bold text-stone-900 tracking-tight mb-4">Professional grade <span className="text-orange-600">results.</span></h2>
<p className="text-stone-500 text-lg">We combine 5 years of technical expertise with modern design principles.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-5 h-auto">

<div className="md:col-span-2 md:row-span-2 group relative bg-stone-900 rounded-3xl p-0 hover:shadow-xl hover:shadow-stone-900/20 transition-all duration-300 overflow-hidden">
<img alt="Abstract 3D" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-transparent"></div>
<div className="relative z-10 h-full flex flex-col justify-end p-8">
<div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md text-white flex items-center justify-center mb-6">
<iconify-icon icon="lucide:code-2" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-bold text-white mb-3">Custom Development</h3>
<p className="text-stone-300 leading-relaxed">We don't just drag and drop. We write clean, semantic code that ensures your site is fast, secure, and ranks high on Google.</p>
</div>
</div>

<div className="md:col-span-1 group bg-white border border-stone-200 rounded-3xl p-6 hover:border-orange-200 transition-colors flex flex-col justify-between overflow-hidden relative">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-orange-50 rounded-full blur-2xl"></div>
<div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center mb-4 relative z-10">
<iconify-icon icon="lucide:smartphone" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-bold text-stone-900 mb-2">Mobile First</h3>
<p className="text-sm text-stone-500">Flawless experience on every screen size.</p>
</div>
</div>

<div className="md:col-span-1 group bg-white border border-stone-200 rounded-3xl p-6 hover:border-purple-200 transition-colors flex flex-col justify-between overflow-hidden relative">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-purple-50 rounded-full blur-2xl"></div>
<div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center mb-4 relative z-10">
<iconify-icon icon="lucide:zap" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-bold text-stone-900 mb-2">Blazing Fast</h3>
<p className="text-sm text-stone-500">Optimized for sub-second load times.</p>
</div>
</div>

<div className="md:col-span-2 group bg-white border border-stone-200 rounded-3xl p-8 relative overflow-hidden">
<div className="flex flex-col md:flex-row items-center justify-between gap-6 h-full">
<div className="flex-1">
<div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center mb-4">
<iconify-icon icon="lucide:cpu" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold mb-2">Modern Tech Stack</h3>
<p className="text-stone-500 text-sm">We use the latest technologies to ensure your website is future-proof and scalable.</p>
</div>
<div className="flex gap-3">

<div className="w-12 h-12 rounded-full bg-stone-50 border border-stone-100 flex items-center justify-center text-stone-400">
<iconify-icon icon="lucide:code" width="20"></iconify-icon>
</div>
<div className="w-12 h-12 rounded-full bg-stone-50 border border-stone-100 flex items-center justify-center text-stone-400">
<iconify-icon icon="lucide:database" width="20"></iconify-icon>
</div>
<div className="w-12 h-12 rounded-full bg-stone-50 border border-stone-100 flex items-center justify-center text-stone-400">
<iconify-icon icon="lucide:globe" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-stone-100/50 border-y border-stone-200" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6 tracking-tight">Our Blueprint for Success</h2>
<p className="text-stone-600 mb-8 leading-relaxed">We've refined our process over 5 years to ensure speed, transparency, and pixel-perfect results.</p>
<div className="space-y-6">
<div className="flex gap-4 group">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-white border border-stone-200 flex items-center justify-center text-sm font-bold text-stone-400 group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-colors">1</div>
<div>
<h4 className="font-bold text-stone-900 mb-1">Strategy &amp; Design</h4>
<p className="text-sm text-stone-500">We analyze your niche and create a design that converts.</p>
</div>
</div>
<div className="w-px h-8 bg-stone-200 ml-4"></div>
<div className="flex gap-4 group">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-white border border-stone-200 flex items-center justify-center text-sm font-bold text-stone-400 group-hover:bg-rose-500 group-hover:text-white group-hover:border-rose-500 transition-colors">2</div>
<div>
<h4 className="font-bold text-stone-900 mb-1">Development</h4>
<p className="text-sm text-stone-500">We code your site using clean, modern standards.</p>
</div>
</div>
<div className="w-px h-8 bg-stone-200 ml-4"></div>
<div className="flex gap-4 group">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-white border border-stone-200 flex items-center justify-center text-sm font-bold text-stone-400 group-hover:bg-purple-500 group-hover:text-white group-hover:border-purple-500 transition-colors">3</div>
<div>
<h4 className="font-bold text-stone-900 mb-1">Launch (In 1 Week)</h4>
<p className="text-sm text-stone-500">We handle the servers, domains, and go live.</p>
</div>
</div>
</div>
</div>
<div className="relative group">
<div className="absolute inset-0 bg-gradient-to-tr from-orange-200 to-rose-200 rounded-[2rem] transform rotate-3 blur-sm transition-transform duration-500 group-hover:rotate-6"></div>

<img alt="Digital Workflow" className="relative rounded-[1.8rem] border border-stone-200 shadow-2xl transition-all duration-700 object-cover h-[400px] w-full" src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto" id="pricing">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-bold text-stone-900 tracking-tight mb-4">Affordable Investment</h2>
<p className="text-stone-500">Professional quality without the agency markup.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-3xl border border-stone-200 hover:border-stone-300 transition-colors">
<div className="text-sm font-bold text-stone-500 uppercase tracking-wider mb-2">Starter</div>
<div className="text-4xl font-bold text-stone-900 mb-6">Affordable</div>
<p className="text-stone-500 text-sm mb-8 min-h-[40px]">Perfect for portfolios and small businesses.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-2 text-sm text-stone-700"><iconify-icon className="text-green-500" icon="lucide:check"></iconify-icon> 5 Page Custom Design</li>
<li className="flex items-center gap-2 text-sm text-stone-700"><iconify-icon className="text-green-500" icon="lucide:check"></iconify-icon> Mobile Responsive</li>
<li className="flex items-center gap-2 text-sm text-stone-700"><iconify-icon className="text-green-500" icon="lucide:check"></iconify-icon> Contact Form</li>
<li className="flex items-center gap-2 text-sm text-stone-700"><iconify-icon className="text-green-500" icon="lucide:check"></iconify-icon> 1 Week Delivery</li>
</ul>
<a className="block w-full py-3 text-center rounded-xl border border-stone-200 text-stone-900 font-semibold hover:bg-stone-50 transition-colors" href="#start">Get Quote</a>
</div>

<div className="bg-stone-900 p-8 rounded-3xl border border-stone-800 relative shadow-2xl shadow-orange-500/10 transform md:-translate-y-4">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-orange-500 to-rose-500 text-white text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded-full">Most Popular</div>
<div className="text-sm font-bold text-orange-400 uppercase tracking-wider mb-2">Business</div>
<div className="text-4xl font-bold text-white mb-6">Best Value</div>
<p className="text-stone-400 text-sm mb-8 min-h-[40px]">For brands ready to capture market share.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-2 text-sm text-stone-300"><iconify-icon className="text-orange-500" icon="lucide:check"></iconify-icon> 10+ Pages Custom Design</li>
<li className="flex items-center gap-2 text-sm text-stone-300"><iconify-icon className="text-orange-500" icon="lucide:check"></iconify-icon> Content Management System</li>
<li className="flex items-center gap-2 text-sm text-stone-300"><iconify-icon className="text-orange-500" icon="lucide:check"></iconify-icon> Advanced Animations</li>
<li className="flex items-center gap-2 text-sm text-stone-300"><iconify-icon className="text-orange-500" icon="lucide:check"></iconify-icon> Analytics Dashboard</li>
<li className="flex items-center gap-2 text-sm text-stone-300"><iconify-icon className="text-orange-500" icon="lucide:check"></iconify-icon> Priority Support</li>
</ul>
<a className="block w-full py-3 text-center rounded-xl bg-white text-stone-900 font-bold hover:bg-stone-100 transition-colors" href="#start">Get Quote</a>
</div>

<div className="bg-white p-8 rounded-3xl border border-stone-200 hover:border-stone-300 transition-colors">
<div className="text-sm font-bold text-stone-500 uppercase tracking-wider mb-2">Enterprise</div>
<div className="text-4xl font-bold text-stone-900 mb-6">Custom</div>
<p className="text-stone-500 text-sm mb-8 min-h-[40px]">Complex platforms and web applications.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-2 text-sm text-stone-700"><iconify-icon className="text-green-500" icon="lucide:check"></iconify-icon> Full-Stack Web App</li>
<li className="flex items-center gap-2 text-sm text-stone-700"><iconify-icon className="text-green-500" icon="lucide:check"></iconify-icon> Database Architecture</li>
<li className="flex items-center gap-2 text-sm text-stone-700"><iconify-icon className="text-green-500" icon="lucide:check"></iconify-icon> User Authentication</li>
<li className="flex items-center gap-2 text-sm text-stone-700"><iconify-icon className="text-green-500" icon="lucide:check"></iconify-icon> SLA &amp; Maintenance</li>
</ul>
<a className="block w-full py-3 text-center rounded-xl border border-stone-200 text-stone-900 font-semibold hover:bg-stone-50 transition-colors" href="#start">Contact Us</a>
</div>
</div>
</section>

<section className="py-20 px-6 max-w-4xl mx-auto" id="faq">
<h2 className="text-3xl font-bold text-stone-900 mb-10 text-center">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group bg-white rounded-2xl border border-stone-200 p-6 [&amp;_summary::-webkit-details-marker]:hidden cursor-pointer">
<summary className="flex justify-between items-center font-semibold text-stone-800 list-none">
                    Can you really finish in one week?
                    <span className="transition group-open:rotate-180">
<iconify-icon icon="lucide:chevron-down"></iconify-icon>
</span>
</summary>
<p className="text-stone-500 mt-4 text-sm leading-relaxed">
                    Yes! For our standard packages, our optimized workflow and 5 years of experience allow us to deliver a fully functional, beautiful website in just 7 days after we receive your content.
                </p>
</details>
<details className="group bg-white rounded-2xl border border-stone-200 p-6 [&amp;_summary::-webkit-details-marker]:hidden cursor-pointer">
<summary className="flex justify-between items-center font-semibold text-stone-800 list-none">
                    Do you offer hosting?
                    <span className="transition group-open:rotate-180">
<iconify-icon icon="lucide:chevron-down"></iconify-icon>
</span>
</summary>
<p className="text-stone-500 mt-4 text-sm leading-relaxed">
                    We help set up hosting on premium providers. You own the hosting account, so you always have full control over your digital assets.
                </p>
</details>
<details className="group bg-white rounded-2xl border border-stone-200 p-6 [&amp;_summary::-webkit-details-marker]:hidden cursor-pointer">
<summary className="flex justify-between items-center font-semibold text-stone-800 list-none">
                    Will I be able to edit the website myself?
                    <span className="transition group-open:rotate-180">
<iconify-icon icon="lucide:chevron-down"></iconify-icon>
</span>
</summary>
<p className="text-stone-500 mt-4 text-sm leading-relaxed">
                    Absolutely. We build most sites with a Content Management System (CMS) that allows you to edit text, images, and blog posts without touching a line of code.
                </p>
</details>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden" id="start">
<div className="absolute inset-0 bg-stone-900 skew-y-3 origin-bottom-right scale-110 translate-y-20 z-0"></div>
<div className="absolute inset-0 z-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 relative z-10 items-center">
<div className="text-white">
<h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Let's build something <br/>extraordinary.</h2>
<p className="text-stone-400 mb-8 text-lg">Ready to transform your digital presence? Fill out the form and our team will get back to you immediately.</p>
<div className="space-y-6">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
<iconify-icon className="text-orange-400" icon="lucide:mail"></iconify-icon>
</div>
<div>
<div className="text-xs text-stone-400">Email us</div>
<div className="font-medium select-all">devcreatemywebsite@gmail.com</div>
</div>
</div>
</div>
</div>
<div className="bg-white rounded-3xl p-8 shadow-2xl">
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-bold text-stone-700 uppercase">First Name</label>
<input className="w-full bg-stone-50 border border-stone-200 rounded-lg p-3 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-bold text-stone-700 uppercase">Last Name</label>
<input className="w-full bg-stone-50 border border-stone-200 rounded-lg p-3 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-bold text-stone-700 uppercase">Email Address</label>
<input className="w-full bg-stone-50 border border-stone-200 rounded-lg p-3 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs font-bold text-stone-700 uppercase">Project Budget</label>
<select className="w-full bg-stone-50 border border-stone-200 rounded-lg p-3 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all text-stone-600">
<option>Affordable / Starter</option>
<option>Business / Growth</option>
<option>Enterprise / Custom</option>
</select>
</div>
<div className="space-y-1">
<label className="text-xs font-bold text-stone-700 uppercase">Message</label>
<textarea className="w-full bg-stone-50 border border-stone-200 rounded-lg p-3 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all resize-none" rows="4"></textarea>
</div>
<button className="w-full py-4 bg-stone-900 text-white font-bold rounded-xl hover:bg-orange-600 transition-colors shadow-lg shadow-stone-900/20" type="button">Send Inquiry</button>
</form>
</div>
</div>
</section>

<footer className="bg-stone-900 py-12 px-6 border-t border-stone-800">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center border border-white/5 text-white font-bold">C</div>
<span className="text-stone-400 text-sm">© 2024 CreateMyWebsite Inc.</span>
</div>
<div className="flex gap-6 text-sm text-stone-500">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors flex items-center gap-1" href="https://www.instagram.com/createmywebsite_/" rel="noopener noreferrer" target="_blank">
<iconify-icon icon="lucide:instagram" width="16"></iconify-icon>
                    Instagram
                </a>
<a className="hover:text-white transition-colors" href="mailto:devcreatemywebsite@gmail.com">Contact</a>
</div>
</div>
</footer>

    </>
  );
}
