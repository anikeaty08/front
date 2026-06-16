import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
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
      

<header className="fixed top-0 w-full z-50 glass-card border-b border-slate-200/50 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-xl font-medium tracking-tighter text-slate-900 flex items-center gap-1" href="#">
<div className="w-6 h-6 rounded bg-gradient-to-br from-purple-600 to-violet-900 flex items-center justify-center">
<span className="text-white text-xs font-medium">K</span>
</div>
                KEVIOT
            </a>
<nav className="hidden lg:flex items-center gap-8 text-sm font-normal">
<a className="text-slate-800 hover:text-purple-600 transition-colors" href="#home">Home</a>
<div className="relative group cursor-pointer">
<span className="text-slate-500 hover:text-slate-800 transition-colors flex items-center gap-1">Solutions <iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></span>
<div className="absolute top-full left-0 mt-2 w-56 glass-card rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col p-2">
<a className="px-3 py-2 text-xs text-slate-600 hover:bg-slate-50 hover:text-purple-600 rounded-md transition-colors" href="#solutions">SaaS Launch</a>
<a className="px-3 py-2 text-xs text-slate-600 hover:bg-slate-50 hover:text-purple-600 rounded-md transition-colors" href="#solutions">Business Automation</a>
<a className="px-3 py-2 text-xs text-slate-600 hover:bg-slate-50 hover:text-purple-600 rounded-md transition-colors" href="#solutions">Cloud Migration</a>
</div>
</div>
<div className="relative group cursor-pointer">
<span className="text-slate-500 hover:text-slate-800 transition-colors flex items-center gap-1">Services <iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></span>
<div className="absolute top-full left-0 mt-2 w-56 glass-card rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col p-2">
<a className="px-3 py-2 text-xs text-slate-600 hover:bg-slate-50 hover:text-purple-600 rounded-md transition-colors" href="#services">Custom Software</a>
<a className="px-3 py-2 text-xs text-slate-600 hover:bg-slate-50 hover:text-purple-600 rounded-md transition-colors" href="#services">Mobile &amp; Web Apps</a>
<a className="px-3 py-2 text-xs text-slate-600 hover:bg-slate-50 hover:text-purple-600 rounded-md transition-colors" href="#services">Cloud &amp; DevOps</a>
<a className="px-3 py-2 text-xs text-slate-600 hover:bg-slate-50 hover:text-purple-600 rounded-md transition-colors" href="#services">AI Integrations</a>
</div>
</div>
<a className="text-slate-500 hover:text-slate-800 transition-colors" href="#work">Work</a>
<a className="text-slate-500 hover:text-slate-800 transition-colors" href="#industries">Industries</a>
<a className="text-slate-500 hover:text-slate-800 transition-colors" href="#about">About</a>
<a className="text-slate-500 hover:text-slate-800 transition-colors" href="#insights">Insights</a>
</nav>
<div className="hidden md:flex items-center gap-4">
<a className="text-sm font-normal text-slate-600 hover:text-slate-900 transition-colors" href="#work">View Our Work</a>
<a className="text-xs font-medium bg-slate-900 text-white px-4 py-2 rounded-full hover:bg-purple-600 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300" href="#contact">
                    Book a Discovery Call
                </a>
</div>
<button className="lg:hidden text-slate-800 text-2xl">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</header>
<main>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden" id="home">

<div className="absolute inset-0 bg-grid-pattern pointer-events-none"></div>
<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-200/30 rounded-full blur-[100px] opacity-60 -translate-y-1/2 translate-x-1/3"></div>
<div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-violet-200/30 rounded-full blur-[80px] opacity-40 translate-y-1/3 -translate-x-1/3"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-50 border border-purple-100 text-purple-700 text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
</span>
                            Enterprise-Grade Engineering
                        </div>
<h1 className="text-4xl lg:text-6xl font-medium text-slate-900 tracking-tight leading-[1.1] mb-6">
                            Engineering Digital Products, Cloud Systems, and Business Software for <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-violet-900">Modern Growth</span>
</h1>
<p className="text-base lg:text-lg text-slate-500 font-light leading-relaxed mb-8 max-w-xl">
                            Keviot Tech partners with startups, growing businesses, and enterprises to build high-performance websites, mobile apps, SaaS platforms, cloud-ready systems, AI integrations, and custom software that support real business outcomes.
                        </p>
<div className="flex flex-wrap items-center gap-4 mb-10">
<a className="text-sm font-medium bg-gradient-to-r from-purple-600 to-violet-800 text-white px-6 py-3 rounded-full hover:shadow-[0_8px_30px_-4px_rgba(109,40,217,0.4)] hover:-translate-y-0.5 transition-all duration-300" href="#contact">
                                Start Your Project
                            </a>
<a className="text-sm font-medium bg-white border border-slate-200 text-slate-700 px-6 py-3 rounded-full hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 flex items-center gap-2" href="#work">
                                Explore Our Work <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="pt-6 border-t border-slate-200/60">
<p className="text-xs text-slate-400 font-medium tracking-wide uppercase mb-3">Core Capabilities</p>
<div className="flex flex-wrap gap-x-3 gap-y-2 text-xs font-medium text-slate-600">
<span className="flex items-center gap-1"><iconify-icon className="text-purple-500 text-sm" icon="solar:monitor-smartphone-linear"></iconify-icon> Web</span>•
                                <span className="flex items-center gap-1"><iconify-icon className="text-purple-500 text-sm" icon="solar:smartphone-linear"></iconify-icon> Mobile</span>•
                                <span className="flex items-center gap-1"><iconify-icon className="text-purple-500 text-sm" icon="solar:cloud-linear"></iconify-icon> Cloud</span>•
                                <span className="flex items-center gap-1"><iconify-icon className="text-purple-500 text-sm" icon="solar:magic-stick-3-linear"></iconify-icon> AI</span>•
                                <span className="flex items-center gap-1"><iconify-icon className="text-purple-500 text-sm" icon="solar:server-square-linear"></iconify-icon> DevOps</span>•
                                <span className="flex items-center gap-1"><iconify-icon className="text-purple-500 text-sm" icon="solar:cart-large-linear"></iconify-icon> Commerce</span>•
                                <span className="flex items-center gap-1"><iconify-icon className="text-purple-500 text-sm" icon="solar:settings-linear"></iconify-icon> Automation</span>
</div>
</div>
</div>

<div className="hidden lg:block relative h-[500px] perspective-1000">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[280px] bg-white/80 backdrop-blur-xl border border-white/60 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] rounded-2xl p-4 animate-float-slow z-20">
<div className="flex items-center gap-2 mb-4 border-b border-slate-100 pb-3">
<div className="w-3 h-3 rounded-full bg-slate-200"></div>
<div className="w-3 h-3 rounded-full bg-slate-200"></div>
<div className="w-3 h-3 rounded-full bg-slate-200"></div>
<div className="ml-4 h-2 w-24 bg-slate-100 rounded-full"></div>
</div>
<div className="grid grid-cols-3 gap-3 mb-4">
<div className="h-16 bg-slate-50 rounded-lg border border-slate-100/50"></div>
<div className="h-16 bg-purple-50 rounded-lg border border-purple-100/50 relative overflow-hidden">
<div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-violet-500"></div>
</div>
<div className="h-16 bg-slate-50 rounded-lg border border-slate-100/50"></div>
</div>
<div className="flex gap-4">
<div className="w-2/3 h-24 bg-slate-50 rounded-lg border border-slate-100/50"></div>
<div className="w-1/3 h-24 bg-slate-900 rounded-lg shadow-inner relative overflow-hidden">
<div className="absolute inset-0 opacity-20 bg-[linear-gradient(transparent_50%,rgba(0,0,0,1)_50%)] bg-[length:100%_4px]"></div>
<div className="absolute top-2 left-2 text-[8px] text-green-400 font-mono">&gt; deploy init<br/>&gt; status: online</div>
</div>
</div>
</div>

<div className="absolute top-10 right-4 w-[140px] h-[280px] bg-slate-900 border-[4px] border-slate-800 rounded-2xl shadow-2xl animate-float-medium z-30 overflow-hidden">
<div className="w-16 h-4 bg-slate-800 mx-auto rounded-b-xl absolute left-1/2 -translate-x-1/2"></div>
<div className="mt-8 px-3">
<div className="h-10 bg-slate-800/50 rounded-lg mb-2"></div>
<div className="h-20 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg mb-2 animate-pulse-glow"></div>
<div className="grid grid-cols-2 gap-2">
<div className="h-12 bg-slate-800/50 rounded-lg"></div>
<div className="h-12 bg-slate-800/50 rounded-lg"></div>
</div>
</div>
</div>

<div className="absolute bottom-10 left-0 w-20 h-20 bg-white/90 backdrop-blur-md rounded-xl border border-white shadow-xl animate-float-fast z-30 flex items-center justify-center">
<iconify-icon className="text-4xl text-purple-600" icon="solar:cpu-bold-duotone"></iconify-icon>

<div className="absolute top-1/2 left-full w-24 h-[1px] bg-gradient-to-r from-purple-400 to-transparent -translate-y-1/2"></div>
</div>

<div className="absolute bottom-16 right-10 bg-white p-3 rounded-xl shadow-lg border border-slate-100 animate-float-medium z-10 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
<iconify-icon className="text-green-600" icon="solar:graph-up-linear"></iconify-icon>
</div>
<div>
<div className="text-xs text-slate-400">System Uptime</div>
<div className="text-sm font-medium text-slate-800">99.99%</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 pt-10 border-t border-slate-200/50">
<div className="flex items-center gap-3">
<div className="p-2 rounded-lg bg-slate-100"><iconify-icon className="text-slate-600" icon="solar:code-square-linear"></iconify-icon></div>
<span className="text-xs font-medium text-slate-700">Custom Solutions</span>
</div>
<div className="flex items-center gap-3">
<div className="p-2 rounded-lg bg-slate-100"><iconify-icon className="text-slate-600" icon="solar:layers-linear"></iconify-icon></div>
<span className="text-xs font-medium text-slate-700">Modern Tech Stack</span>
</div>
<div className="flex items-center gap-3">
<div className="p-2 rounded-lg bg-slate-100"><iconify-icon className="text-slate-600" icon="solar:routing-2-linear"></iconify-icon></div>
<span className="text-xs font-medium text-slate-700">End-to-End Delivery</span>
</div>
<div className="flex items-center gap-3">
<div className="p-2 rounded-lg bg-slate-100"><iconify-icon className="text-slate-600" icon="solar:headphones-round-sound-linear"></iconify-icon></div>
<span className="text-xs font-medium text-slate-700">Ongoing Support</span>
</div>
</div>
</div>
</section>

<section className="py-12 bg-white border-y border-slate-100 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 mb-6">
<p className="text-center text-xs font-medium text-slate-400 tracking-wide uppercase">Trusted by startups, local businesses, and growing brands</p>
</div>

<div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
<ul className="flex items-center justify-center md:justify-start [&amp;_li]:mx-8 [&amp;_img]:max-w-none animate-marquee">
<li className="text-slate-300 font-medium text-xl flex items-center gap-2"><iconify-icon icon="solar:box-minimalistic-bold"></iconify-icon> ACME Corp</li>
<li className="text-slate-300 font-medium text-xl flex items-center gap-2"><iconify-icon icon="solar:planet-bold"></iconify-icon> GlobalTech</li>
<li className="text-slate-300 font-medium text-xl flex items-center gap-2"><iconify-icon icon="solar:leaf-bold"></iconify-icon> EcoSys</li>
<li className="text-slate-300 font-medium text-xl flex items-center gap-2"><iconify-icon icon="solar:bolt-bold"></iconify-icon> FastForward</li>
<li className="text-slate-300 font-medium text-xl flex items-center gap-2"><iconify-icon icon="solar:atom-bold"></iconify-icon> NexusAI</li>
<li className="text-slate-300 font-medium text-xl flex items-center gap-2"><iconify-icon icon="solar:shield-check-bold"></iconify-icon> SecureNet</li>

<li className="text-slate-300 font-medium text-xl flex items-center gap-2"><iconify-icon icon="solar:box-minimalistic-bold"></iconify-icon> ACME Corp</li>
<li className="text-slate-300 font-medium text-xl flex items-center gap-2"><iconify-icon icon="solar:planet-bold"></iconify-icon> GlobalTech</li>
</ul>
</div>
</section>

<section className="py-24 bg-[#fafafa]" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl lg:text-4xl font-medium text-slate-900 tracking-tight mb-4">One Agency. Multiple Digital Capabilities.</h2>
<p className="text-sm text-slate-500 font-light">From customer-facing websites to internal business systems and cloud infrastructure, we bring strategy, design, development, integrations, deployment, and optimization together under one roof.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md hover:border-purple-200 transition-all duration-300 group">
<div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center mb-4 group-hover:bg-purple-50 transition-colors">
<iconify-icon className="text-xl text-slate-700 group-hover:text-purple-600" icon="solar:window-frame-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900 mb-2">Custom Web Development</h3>
<p className="text-xs text-slate-500 leading-relaxed">High-performance corporate websites, complex web portals, and tailored web applications built for speed, SEO, and scalability.</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md hover:border-purple-200 transition-all duration-300 group">
<div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center mb-4 group-hover:bg-purple-50 transition-colors">
<iconify-icon className="text-xl text-slate-700 group-hover:text-purple-600" icon="solar:smartphone-2-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900 mb-2">Mobile App Development</h3>
<p className="text-xs text-slate-500 leading-relaxed">Native-feeling iOS and Android experiences using React Native and Flutter, designed for user engagement and smooth performance.</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md hover:border-purple-200 transition-all duration-300 group">
<div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center mb-4 group-hover:bg-purple-50 transition-colors">
<iconify-icon className="text-xl text-slate-700 group-hover:text-purple-600" icon="solar:database-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900 mb-2">CRM / ERP / CMS Solutions</h3>
<p className="text-xs text-slate-500 leading-relaxed">Custom internal tools and management systems tailored to your workflows to centralize data and streamline operations.</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md hover:border-purple-200 transition-all duration-300 group">
<div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center mb-4 group-hover:bg-purple-50 transition-colors">
<iconify-icon className="text-xl text-slate-700 group-hover:text-purple-600" icon="solar:cart-3-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900 mb-2">eCommerce &amp; Payments</h3>
<p className="text-xs text-slate-500 leading-relaxed">Scalable storefronts and complex marketplace setups with seamless integrations for Stripe, PayPal, Razorpay, and Shopify.</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md hover:border-purple-200 transition-all duration-300 group">
<div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center mb-4 group-hover:bg-purple-50 transition-colors">
<iconify-icon className="text-xl text-slate-700 group-hover:text-purple-600" icon="solar:server-square-update-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900 mb-2">Backend &amp; API Development</h3>
<p className="text-xs text-slate-500 leading-relaxed">Robust server-side architectures, microservices, and secure REST/GraphQL APIs connecting your entire digital ecosystem.</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md hover:border-purple-200 transition-all duration-300 group">
<div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center mb-4 group-hover:bg-purple-50 transition-colors">
<iconify-icon className="text-xl text-slate-700 group-hover:text-purple-600" icon="solar:cloud-check-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900 mb-2">Cloud, DevOps &amp; Infra</h3>
<p className="text-xs text-slate-500 leading-relaxed">AWS and Azure provisioning, containerization (Docker/K8s), CI/CD pipelines, and scalable cloud architecture management.</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md hover:border-purple-200 transition-all duration-300 group">
<div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center mb-4 group-hover:bg-purple-50 transition-colors">
<iconify-icon className="text-xl text-slate-700 group-hover:text-purple-600" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900 mb-2">AI Integrations &amp; Automation</h3>
<p className="text-xs text-slate-500 leading-relaxed">Embedding OpenAI, Gemini, and intelligent workflows into your products to automate tasks and create smart user experiences.</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md hover:border-purple-200 transition-all duration-300 group">
<div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center mb-4 group-hover:bg-purple-50 transition-colors">
<iconify-icon className="text-xl text-slate-700 group-hover:text-purple-600" icon="solar:shield-keyhole-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900 mb-2">QA, Security &amp; Performance</h3>
<p className="text-xs text-slate-500 leading-relaxed">Rigorous testing methodologies (Jest, Mocha), SAST/DAST security practices, and OWASP-focused engineering for reliable software.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-100" id="solutions">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div className="max-w-2xl">
<h2 className="text-3xl lg:text-4xl font-medium text-slate-900 tracking-tight mb-4">Built Around Business Goals — Not Just Code</h2>
<p className="text-sm text-slate-500 font-light">We align our technical expertise with your strategic objectives to deliver solutions that drive measurable impact.</p>
</div>
<a className="text-sm font-medium text-purple-600 hover:text-purple-700 flex items-center gap-1" href="#contact">Discuss your goals <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
<div className="grid md:grid-cols-3 gap-6">
<div className="group cursor-pointer">
<div className="h-48 bg-slate-50 rounded-t-2xl border-x border-t border-slate-200/60 relative overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon className="text-4xl text-slate-300 group-hover:text-purple-400 transition-colors group-hover:scale-110 duration-300" icon="solar:rocket-linear"></iconify-icon>
</div>
<div className="p-6 bg-white border border-slate-200/60 rounded-b-2xl group-hover:border-purple-200 transition-colors">
<h3 className="text-base font-medium text-slate-900 mb-2">Launch a SaaS Product</h3>
<p className="text-xs text-slate-500 mb-4">From MVP validation to scalable multi-tenant architectures, subscription billing, and user management.</p>
</div>
</div>
<div className="group cursor-pointer">
<div className="h-48 bg-slate-50 rounded-t-2xl border-x border-t border-slate-200/60 relative overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon className="text-4xl text-slate-300 group-hover:text-blue-400 transition-colors group-hover:-rotate-90 duration-500" icon="solar:refresh-square-linear"></iconify-icon>
</div>
<div className="p-6 bg-white border border-slate-200/60 rounded-b-2xl group-hover:border-blue-200 transition-colors">
<h3 className="text-base font-medium text-slate-900 mb-2">Modernize Outdated Software</h3>
<p className="text-xs text-slate-500 mb-4">Refactoring legacy codebases, migrating to modern frameworks, and improving UI/UX for internal tools.</p>
</div>
</div>
<div className="group cursor-pointer">
<div className="h-48 bg-slate-50 rounded-t-2xl border-x border-t border-slate-200/60 relative overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon className="text-4xl text-slate-300 group-hover:text-green-400 transition-colors group-hover:rotate-90 duration-500" icon="solar:settings-minimalistic-linear"></iconify-icon>
</div>
<div className="p-6 bg-white border border-slate-200/60 rounded-b-2xl group-hover:border-green-200 transition-colors">
<h3 className="text-base font-medium text-slate-900 mb-2">Automate Operations</h3>
<p className="text-xs text-slate-500 mb-4">Connecting disparate systems via APIs, integrating AI assistants, and streamlining manual workflows.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white relative overflow-hidden" id="work">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-purple-900/40 via-slate-900 to-slate-900"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="mb-16">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight mb-4">Selected Work That Solves Real Problems</h2>
<div className="flex flex-wrap gap-2 text-xs font-medium">
<button className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors border border-white/5 text-white">All</button>
<button className="px-4 py-2 rounded-full bg-transparent hover:bg-white/10 transition-colors border border-white/5 text-slate-400">SaaS</button>
<button className="px-4 py-2 rounded-full bg-transparent hover:bg-white/10 transition-colors border border-white/5 text-slate-400">CRM/ERP</button>
<button className="px-4 py-2 rounded-full bg-transparent hover:bg-white/10 transition-colors border border-white/5 text-slate-400">Mobile</button>
<button className="px-4 py-2 rounded-full bg-transparent hover:bg-white/10 transition-colors border border-white/5 text-slate-400">Cloud/AI</button>
</div>
</div>
<div className="grid lg:grid-cols-2 gap-8">

<div className="group cursor-pointer">
<div className="h-64 sm:h-80 bg-slate-800 rounded-2xl mb-6 relative overflow-hidden border border-slate-700">

<div className="absolute inset-4 bg-slate-900 rounded-xl border border-slate-700/50 p-4 shadow-2xl transform group-hover:scale-[1.02] group-hover:-translate-y-2 transition-transform duration-500">
<div className="w-full h-8 bg-slate-800 rounded-md mb-4 flex items-center px-3 gap-2">
<div className="w-2 h-2 rounded-full bg-slate-600"></div><div className="w-2 h-2 rounded-full bg-slate-600"></div>
</div>
<div className="flex gap-4 h-[calc(100%-3rem)]">
<div className="w-1/4 bg-slate-800 rounded-md"></div>
<div className="w-3/4 flex flex-col gap-4">
<div className="h-1/3 bg-slate-800 rounded-md"></div>
<div className="h-2/3 bg-gradient-to-br from-purple-900/50 to-slate-800 rounded-md border border-purple-500/20"></div>
</div>
</div>
</div>
</div>
<div>
<div className="flex items-center gap-3 mb-3 text-xs text-slate-400">
<span>Custom CRM Platform</span> • <span>Logistics</span>
</div>
<h3 className="text-xl font-medium mb-2 group-hover:text-purple-400 transition-colors">Global Freight Operations Dashboard</h3>
<p className="text-sm text-slate-400 mb-4 line-clamp-2">Unified internal platform streamlining shipment tracking, automated invoicing, and real-time fleet analytics across 3 continents.</p>
<div className="flex flex-wrap gap-2 mb-4">
<span className="px-2 py-1 rounded bg-slate-800 text-[10px] text-slate-300">React</span>
<span className="px-2 py-1 rounded bg-slate-800 text-[10px] text-slate-300">Node.js</span>
<span className="px-2 py-1 rounded bg-slate-800 text-[10px] text-slate-300">AWS</span>
<span className="px-2 py-1 rounded bg-slate-800 text-[10px] text-slate-300">Mapbox</span>
</div>
<span className="text-xs font-medium flex items-center gap-1 group-hover:translate-x-1 transition-transform">View Case Study <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>
</div>

<div className="group cursor-pointer lg:mt-16">
<div className="h-64 sm:h-80 bg-slate-800 rounded-2xl mb-6 relative overflow-hidden border border-slate-700">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-full pt-8 transform group-hover:scale-[1.02] group-hover:-translate-y-2 transition-transform duration-500">
<div className="w-full h-[120%] bg-slate-900 rounded-t-3xl border-x-4 border-t-4 border-slate-700 p-3">
<div className="w-12 h-1.5 bg-slate-700 mx-auto rounded-full mb-6"></div>
<div className="w-full h-24 bg-gradient-to-br from-blue-900/50 to-slate-800 rounded-xl mb-3 border border-blue-500/20"></div>
<div className="w-full h-12 bg-slate-800 rounded-xl mb-3"></div>
<div className="w-full h-12 bg-slate-800 rounded-xl"></div>
</div>
</div>
</div>
<div>
<div className="flex items-center gap-3 mb-3 text-xs text-slate-400">
<span>Fintech Mobile App</span> • <span>Finance</span>
</div>
<h3 className="text-xl font-medium mb-2 group-hover:text-purple-400 transition-colors">Next-Gen Investment Wallet</h3>
<p className="text-sm text-slate-400 mb-4 line-clamp-2">A secure, high-performance mobile application allowing users to manage portfolios, execute trades, and access AI-driven insights.</p>
<div className="flex flex-wrap gap-2 mb-4">
<span className="px-2 py-1 rounded bg-slate-800 text-[10px] text-slate-300">React Native</span>
<span className="px-2 py-1 rounded bg-slate-800 text-[10px] text-slate-300">Python</span>
<span className="px-2 py-1 rounded bg-slate-800 text-[10px] text-slate-300">PostgreSQL</span>
<span className="px-2 py-1 rounded bg-slate-800 text-[10px] text-slate-300">Stripe</span>
</div>
<span className="text-xs font-medium flex items-center gap-1 group-hover:translate-x-1 transition-transform">View Case Study <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#fafafa]">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl lg:text-4xl font-medium text-slate-900 tracking-tight mb-4">Why Businesses Choose Keviot Tech</h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="p-6 bg-white rounded-2xl border border-slate-200/50 shadow-sm">
<iconify-icon className="text-2xl text-purple-600 mb-4" icon="solar:target-linear"></iconify-icon>
<h4 className="text-sm font-medium text-slate-900 mb-2">Business-Focused Development</h4>
<p className="text-xs text-slate-500 leading-relaxed">We don't just write code; we engineer solutions that solve specific operational bottlenecks and drive revenue.</p>
</div>
<div className="p-6 bg-white rounded-2xl border border-slate-200/50 shadow-sm">
<iconify-icon className="text-2xl text-purple-600 mb-4" icon="solar:layers-minimalistic-linear"></iconify-icon>
<h4 className="text-sm font-medium text-slate-900 mb-2">Full-Stack Delivery</h4>
<p className="text-xs text-slate-500 leading-relaxed">From UI/UX design to backend logic and cloud deployment, our multi-disciplinary team handles the entire lifecycle.</p>
</div>
<div className="p-6 bg-white rounded-2xl border border-slate-200/50 shadow-sm">
<iconify-icon className="text-2xl text-purple-600 mb-4" icon="solar:cpu-linear"></iconify-icon>
<h4 className="text-sm font-medium text-slate-900 mb-2">Modern Tech Ecosystem</h4>
<p className="text-xs text-slate-500 leading-relaxed">We utilize future-proof technologies ensuring your product is fast, secure, and ready for upcoming market demands.</p>
</div>
<div className="p-6 bg-white rounded-2xl border border-slate-200/50 shadow-sm">
<iconify-icon className="text-2xl text-purple-600 mb-4" icon="solar:diagram-up-linear"></iconify-icon>
<h4 className="text-sm font-medium text-slate-900 mb-2">Scalable Architecture</h4>
<p className="text-xs text-slate-500 leading-relaxed">Systems designed to grow with you. We build foundations capable of handling increased traffic and complex data.</p>
</div>
<div className="p-6 bg-white rounded-2xl border border-slate-200/50 shadow-sm">
<iconify-icon className="text-2xl text-purple-600 mb-4" icon="solar:users-group-two-rounded-linear"></iconify-icon>
<h4 className="text-sm font-medium text-slate-900 mb-2">Transparent Collaboration</h4>
<p className="text-xs text-slate-500 leading-relaxed">Clear communication, regular sprint updates, and direct access to engineers without layers of account management.</p>
</div>
<div className="p-6 bg-white rounded-2xl border border-slate-200/50 shadow-sm">
<iconify-icon className="text-2xl text-purple-600 mb-4" icon="solar:shield-check-linear"></iconify-icon>
<h4 className="text-sm font-medium text-slate-900 mb-2">Support Beyond Launch</h4>
<p className="text-xs text-slate-500 leading-relaxed">Long-term partnership through SLA-backed maintenance, security patches, performance monitoring, and feature scaling.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl lg:text-4xl font-medium text-slate-900 tracking-tight mb-4">Technology Stack We Use to Deliver with Confidence</h2>
<p className="text-sm text-slate-500 font-light">An enterprise-grade selection of frameworks, platforms, and infrastructure tools.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="space-y-8">
<div>
<h4 className="text-xs font-medium text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2"><iconify-icon className="text-purple-500" icon="solar:window-frame-linear"></iconify-icon> Frontend</h4>
<div className="flex flex-wrap gap-2">
<span className="px-2.5 py-1 rounded bg-slate-50 border border-slate-200 text-xs text-slate-600">React.js</span>
<span className="px-2.5 py-1 rounded bg-slate-50 border border-slate-200 text-xs text-slate-600">Next.js</span>
<span className="px-2.5 py-1 rounded bg-slate-50 border border-slate-200 text-xs text-slate-600">TypeScript</span>
<span className="px-2.5 py-1 rounded bg-slate-50 border border-slate-200 text-xs text-slate-600">JavaScript</span>
<span className="px-2.5 py-1 rounded bg-slate-50 border border-slate-200 text-xs text-slate-600">HTML/CSS</span>
</div>
</div>
<div>
<h4 className="text-xs font-medium text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2"><iconify-icon className="text-purple-500" icon="solar:smartphone-linear"></iconify-icon> Mobile</h4>
<div className="flex flex-wrap gap-2">
<span className="px-2.5 py-1 rounded bg-slate-50 border border-slate-200 text-xs text-slate-600">React Native</span>
<span className="px-2.5 py-1 rounded bg-slate-50 border border-slate-200 text-xs text-slate-600">Flutter</span>
</div>
</div>
</div>

<div className="space-y-8">
<div>
<h4 className="text-xs font-medium text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2"><iconify-icon className="text-purple-500" icon="solar:server-square-linear"></iconify-icon> Backend</h4>
<div className="flex flex-wrap gap-2">
<span className="px-2.5 py-1 rounded bg-slate-50 border border-slate-200 text-xs text-slate-600">Node.js</span>
<span className="px-2.5 py-1 rounded bg-slate-50 border border-slate-200 text-xs text-slate-600">Python</span>
<span className="px-2.5 py-1 rounded bg-slate-50 border border-slate-200 text-xs text-slate-600">Java</span>
<span className="px-2.5 py-1 rounded bg-slate-50 border border-slate-200 text-xs text-slate-600">PHP</span>
</div>
</div>
<div>
<h4 className="text-xs font-medium text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2"><iconify-icon className="text-purple-500" icon="solar:database-linear"></iconify-icon> Databases</h4>
<div className="flex flex-wrap gap-2">
<span className="px-2.5 py-1 rounded bg-slate-50 border border-slate-200 text-xs text-slate-600">PostgreSQL</span>
<span className="px-2.5 py-1 rounded bg-slate-50 border border-slate-200 text-xs text-slate-600">MongoDB</span>
<span className="px-2.5 py-1 rounded bg-slate-50 border border-slate-200 text-xs text-slate-600">SQL</span>
<span className="px-2.5 py-1 rounded bg-slate-50 border border-slate-200 text-xs text-slate-600">DynamoDB</span>
<span className="px-2.5 py-1 rounded bg-slate-50 border border-slate-200 text-xs text-slate-600">Firebase</span>
<span className="px-2.5 py-1 rounded bg-slate-50 border border-slate-200 text-xs text-slate-600">GraphQL</span>
</div>
</div>
</div>

<div className="space-y-8">
<div>
<h4 className="text-xs font-medium text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2"><iconify-icon className="text-purple-500" icon="solar:cloud-linear"></iconify-icon> Cloud &amp; DevOps</h4>
<div className="flex flex-wrap gap-2">
<span className="px-2.5 py-1 rounded bg-purple-50 border border-purple-100 text-xs text-purple-700 font-medium">AWS (EC2, S3, Lambda, API Gateway)</span>
<span className="px-2.5 py-1 rounded bg-blue-50 border border-blue-100 text-xs text-blue-700 font-medium">Azure (App Service, Key Vault, VNet)</span>
<span className="px-2.5 py-1 rounded bg-slate-50 border border-slate-200 text-xs text-slate-600">Docker &amp; K8s</span>
<span className="px-2.5 py-1 rounded bg-slate-50 border border-slate-200 text-xs text-slate-600">Terraform</span>
<span className="px-2.5 py-1 rounded bg-slate-50 border border-slate-200 text-xs text-slate-600">CI/CD</span>
</div>
</div>
<div>
<h4 className="text-xs font-medium text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2"><iconify-icon className="text-purple-500" icon="solar:shield-check-linear"></iconify-icon> Security &amp; QA</h4>
<div className="flex flex-wrap gap-2">
<span className="px-2.5 py-1 rounded bg-slate-50 border border-slate-200 text-xs text-slate-600">Jest &amp; Mocha</span>
<span className="px-2.5 py-1 rounded bg-slate-50 border border-slate-200 text-xs text-slate-600">SAST / DAST</span>
<span className="px-2.5 py-1 rounded bg-slate-50 border border-slate-200 text-xs text-slate-600">OWASP Practices</span>
</div>
</div>
</div>

<div className="space-y-8">
<div>
<h4 className="text-xs font-medium text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2"><iconify-icon className="text-purple-500" icon="solar:link-circle-linear"></iconify-icon> Integrations</h4>
<div className="flex flex-wrap gap-2">
<span className="px-2.5 py-1 rounded bg-slate-50 border border-slate-200 text-xs text-slate-600">Stripe / PayPal / Razorpay</span>
<span className="px-2.5 py-1 rounded bg-slate-50 border border-slate-200 text-xs text-slate-600">Twilio / SendGrid</span>
<span className="px-2.5 py-1 rounded bg-slate-50 border border-slate-200 text-xs text-slate-600">Mapbox / Google Maps</span>
<span className="px-2.5 py-1 rounded bg-slate-50 border border-slate-200 text-xs text-slate-600">Shopify / WP</span>
<span className="px-2.5 py-1 rounded bg-slate-50 border border-slate-200 text-xs text-slate-600">Cloudflare</span>
</div>
</div>
<div>
<h4 className="text-xs font-medium text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2"><iconify-icon className="text-purple-500" icon="solar:magic-stick-3-linear"></iconify-icon> AI Technologies</h4>
<div className="flex flex-wrap gap-2">
<span className="px-2.5 py-1 rounded bg-green-50 border border-green-100 text-xs text-green-700 font-medium">OpenAI</span>
<span className="px-2.5 py-1 rounded bg-blue-50 border border-blue-100 text-xs text-blue-700 font-medium">Google Gemini</span>
<span className="px-2.5 py-1 rounded bg-slate-50 border border-slate-200 text-xs text-slate-600">AI Workflow Automation</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#fafafa]">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl lg:text-4xl font-medium text-slate-900 tracking-tight mb-16 text-center">How We Turn Ideas into Working Products</h2>
<div className="relative border-l border-purple-200 ml-3 md:ml-0 md:border-none">

<div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-200 via-purple-300 to-transparent -translate-x-1/2"></div>
<div className="space-y-12">

<div className="relative flex flex-col md:flex-row items-start md:items-center justify-between group pl-8 md:pl-0">
<div className="absolute left-[-5px] md:left-1/2 top-1 md:top-auto w-3 h-3 rounded-full bg-purple-500 md:-translate-x-1/2 shadow-[0_0_0_4px_#fafafa] group-hover:scale-125 transition-transform"></div>
<div className="md:w-[45%] md:text-right md:pr-8 mb-2 md:mb-0">
<h4 className="text-base font-medium text-slate-900">Discovery &amp; Architecture</h4>
</div>
<div className="md:w-[45%] md:pl-8">
<p className="text-xs text-slate-500">Requirement mapping, feasibility analysis, choosing the right stack, and defining cloud architecture.</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-start md:items-center justify-between group pl-8 md:pl-0">
<div className="absolute left-[-5px] md:left-1/2 top-1 md:top-auto w-3 h-3 rounded-full bg-purple-500 md:-translate-x-1/2 shadow-[0_0_0_4px_#fafafa] group-hover:scale-125 transition-transform"></div>
<div className="md:w-[45%] md:text-right md:pr-8 md:order-2 mb-2 md:mb-0">
<h4 className="text-base font-medium text-slate-900">UI/UX &amp; Product Flow</h4>
</div>
<div className="md:w-[45%] md:pl-8 md:order-1 md:text-right">
<p className="text-xs text-slate-500">Wireframing, prototyping, and designing intuitive interfaces focused on user conversion and operational efficiency.</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-start md:items-center justify-between group pl-8 md:pl-0">
<div className="absolute left-[-5px] md:left-1/2 top-1 md:top-auto w-3 h-3 rounded-full bg-purple-500 md:-translate-x-1/2 shadow-[0_0_0_4px_#fafafa] group-hover:scale-125 transition-transform"></div>
<div className="md:w-[45%] md:text-right md:pr-8 mb-2 md:mb-0">
<h4 className="text-base font-medium text-slate-900">Development &amp; Integration</h4>
</div>
<div className="md:w-[45%] md:pl-8">
<p className="text-xs text-slate-500">Agile coding sprints, building APIs, setting up databases, and integrating third-party services and AI tools.</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-start md:items-center justify-between group pl-8 md:pl-0">
<div className="absolute left-[-5px] md:left-1/2 top-1 md:top-auto w-3 h-3 rounded-full bg-purple-500 md:-translate-x-1/2 shadow-[0_0_0_4px_#fafafa] group-hover:scale-125 transition-transform"></div>
<div className="md:w-[45%] md:text-right md:pr-8 md:order-2 mb-2 md:mb-0">
<h4 className="text-base font-medium text-slate-900">QA, Security &amp; Optimize</h4>
</div>
<div className="md:w-[45%] md:pl-8 md:order-1 md:text-right">
<p className="text-xs text-slate-500">Rigorous automated and manual testing, performance tuning, and vulnerability assessments before deployment.</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-start md:items-center justify-between group pl-8 md:pl-0">
<div className="absolute left-[-5px] md:left-1/2 top-1 md:top-auto w-3 h-3 rounded-full bg-purple-500 md:-translate-x-1/2 shadow-[0_0_0_4px_#fafafa] group-hover:scale-125 transition-transform"></div>
<div className="md:w-[45%] md:text-right md:pr-8 mb-2 md:mb-0">
<h4 className="text-base font-medium text-slate-900">Launch, Support &amp; Scale</h4>
</div>
<div className="md:w-[45%] md:pl-8">
<p className="text-xs text-slate-500">Smooth deployment via CI/CD pipelines, DevOps monitoring, and ongoing support to scale features as you grow.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-100" id="industries">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl lg:text-4xl font-medium text-slate-900 tracking-tight mb-12">Industries We Support</h2>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
<div className="p-4 border border-slate-100 rounded-xl flex flex-col items-center justify-center text-center hover:bg-slate-50 hover:border-slate-200 transition-colors cursor-default">
<iconify-icon className="text-2xl text-slate-400 mb-2" icon="solar:rocket-linear"></iconify-icon>
<span className="text-xs font-medium text-slate-700">Startups &amp; SaaS</span>
</div>
<div className="p-4 border border-slate-100 rounded-xl flex flex-col items-center justify-center text-center hover:bg-slate-50 hover:border-slate-200 transition-colors cursor-default">
<iconify-icon className="text-2xl text-slate-400 mb-2" icon="solar:cart-large-linear"></iconify-icon>
<span className="text-xs font-medium text-slate-700">eCommerce &amp; Retail</span>
</div>
<div className="p-4 border border-slate-100 rounded-xl flex flex-col items-center justify-center text-center hover:bg-slate-50 hover:border-slate-200 transition-colors cursor-default">
<iconify-icon className="text-2xl text-slate-400 mb-2" icon="solar:heart-pulse-linear"></iconify-icon>
<span className="text-xs font-medium text-slate-700">Healthcare</span>
</div>
<div className="p-4 border border-slate-100 rounded-xl flex flex-col items-center justify-center text-center hover:bg-slate-50 hover:border-slate-200 transition-colors cursor-default">
<iconify-icon className="text-2xl text-slate-400 mb-2" icon="solar:wallet-money-linear"></iconify-icon>
<span className="text-xs font-medium text-slate-700">Finance &amp; Fintech</span>
</div>
<div className="p-4 border border-slate-100 rounded-xl flex flex-col items-center justify-center text-center hover:bg-slate-50 hover:border-slate-200 transition-colors cursor-default">
<iconify-icon className="text-2xl text-slate-400 mb-2" icon="solar:buildings-linear"></iconify-icon>
<span className="text-xs font-medium text-slate-700">Real Estate</span>
</div>
<div className="p-4 border border-slate-100 rounded-xl flex flex-col items-center justify-center text-center hover:bg-slate-50 hover:border-slate-200 transition-colors cursor-default">
<iconify-icon className="text-2xl text-slate-400 mb-2" icon="solar:truck-linear"></iconify-icon>
<span className="text-xs font-medium text-slate-700">Logistics</span>
</div>
<div className="p-4 border border-slate-100 rounded-xl flex flex-col items-center justify-center text-center hover:bg-slate-50 hover:border-slate-200 transition-colors cursor-default">
<iconify-icon className="text-2xl text-slate-400 mb-2" icon="solar:diploma-linear"></iconify-icon>
<span className="text-xs font-medium text-slate-700">Education</span>
</div>
<div className="p-4 border border-slate-100 rounded-xl flex flex-col items-center justify-center text-center hover:bg-slate-50 hover:border-slate-200 transition-colors cursor-default">
<iconify-icon className="text-2xl text-slate-400 mb-2" icon="solar:bed-linear"></iconify-icon>
<span className="text-xs font-medium text-slate-700">Hospitality</span>
</div>
<div className="p-4 border border-slate-100 rounded-xl flex flex-col items-center justify-center text-center hover:bg-slate-50 hover:border-slate-200 transition-colors cursor-default">
<iconify-icon className="text-2xl text-slate-400 mb-2" icon="solar:video-library-linear"></iconify-icon>
<span className="text-xs font-medium text-slate-700">Media &amp; Content</span>
</div>
<div className="p-4 border border-slate-100 rounded-xl flex flex-col items-center justify-center text-center hover:bg-slate-50 hover:border-slate-200 transition-colors cursor-default">
<iconify-icon className="text-2xl text-slate-400 mb-2" icon="solar:users-group-rounded-linear"></iconify-icon>
<span className="text-xs font-medium text-slate-700">Social Platforms</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white relative overflow-hidden" id="about">
<div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight mb-6">Built to Deliver More Than Just Websites</h2>
<div className="space-y-4 text-sm text-slate-400 font-light leading-relaxed">
<p>Keviot Tech began with a simple mission: building robust business portals. As our clients' needs evolved, so did we. We expanded from websites to complex CRM and ERP systems, realizing that true business transformation requires deeper engineering.</p>
<p>Today, we are a full-service technology partner. Our multi-disciplinary team covers frontend UI, complex backend architecture, mobile app ecosystems, robust cloud infrastructure (AWS/Azure), and cutting-edge AI integrations.</p>
<p>We believe in clarity, uncompromised quality, and scalable architecture. Whether working on a fixed-scope product launch or providing a dedicated engineering team for ongoing scaling, we structure our engagements around your success.</p>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="p-6 bg-slate-800 rounded-2xl border border-slate-700">
<div className="text-3xl text-purple-400 font-medium mb-1">50+</div>
<div className="text-xs text-slate-400">Products Launched</div>
</div>
<div className="p-6 bg-slate-800 rounded-2xl border border-slate-700 mt-8">
<div className="text-3xl text-blue-400 font-medium mb-1">99%</div>
<div className="text-xs text-slate-400">Client Retention</div>
</div>
<div className="p-6 bg-slate-800 rounded-2xl border border-slate-700 -mt-8">
<div className="text-3xl text-green-400 font-medium mb-1">24/7</div>
<div className="text-xs text-slate-400">DevOps Support</div>
</div>
<div className="p-6 bg-slate-800 rounded-2xl border border-slate-700">
<div className="text-3xl text-yellow-400 font-medium mb-1">100%</div>
<div className="text-xs text-slate-400">In-House Engineering</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#fafafa]">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl lg:text-4xl font-medium text-slate-900 tracking-tight mb-12 text-center">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group bg-white rounded-xl border border-slate-200/60 open:shadow-sm transition-all">
<summary className="cursor-pointer p-5 flex items-center justify-between font-medium text-sm text-slate-800 select-none">
                            What kinds of projects do you take on?
                            <iconify-icon className="text-slate-400 transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-5 pb-5 text-xs text-slate-500 leading-relaxed border-t border-slate-100 pt-3 mt-1">
                            We specialize in complex web and mobile applications, custom CRM/ERP systems, scalable eCommerce platforms, cloud migrations, and integrating AI into existing workflows. We handle everything from startup MVPs to enterprise-scale refactoring.
                        </div>
</details>
<details className="group bg-white rounded-xl border border-slate-200/60 open:shadow-sm transition-all">
<summary className="cursor-pointer p-5 flex items-center justify-between font-medium text-sm text-slate-800 select-none">
                            Do you work with startups and SMEs?
                            <iconify-icon className="text-slate-400 transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-5 pb-5 text-xs text-slate-500 leading-relaxed border-t border-slate-100 pt-3 mt-1">
                            Yes. We offer flexible engagement models. For startups, we focus on rapid MVP development and market validation. For growing SMEs, we focus on operational automation and scalable architecture to support growth without technical debt.
                        </div>
</details>
<details className="group bg-white rounded-xl border border-slate-200/60 open:shadow-sm transition-all">
<summary className="cursor-pointer p-5 flex items-center justify-between font-medium text-sm text-slate-800 select-none">
                            Can you rebuild or modernize existing systems?
                            <iconify-icon className="text-slate-400 transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-5 pb-5 text-xs text-slate-500 leading-relaxed border-t border-slate-100 pt-3 mt-1">
                            Absolutely. Legacy platform modernization is a core service. We audit your existing codebase, plan a seamless migration strategy to modern frameworks (like React or Node.js), and move your infrastructure to scalable cloud environments like AWS or Azure with zero to minimal downtime.
                        </div>
</details>
<details className="group bg-white rounded-xl border border-slate-200/60 open:shadow-sm transition-all">
<summary className="cursor-pointer p-5 flex items-center justify-between font-medium text-sm text-slate-800 select-none">
                            Do you provide support after launch?
                            <iconify-icon className="text-slate-400 transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-5 pb-5 text-xs text-slate-500 leading-relaxed border-t border-slate-100 pt-3 mt-1">
                            Yes, we consider launch day just the beginning. We offer SLA-backed maintenance, server monitoring, security patching, and dedicated retainers for continuous feature development and scaling.
                        </div>
</details>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-5 gap-12">
<div className="lg:col-span-2">
<h2 className="text-3xl lg:text-4xl font-medium text-slate-900 tracking-tight mb-4">Let’s Discuss Your Project</h2>
<p className="text-sm text-slate-500 font-light mb-8">Whether you need a custom website, mobile app, internal platform, cloud setup, payment integration, or AI-powered feature, our engineering team is ready to help you move from idea to execution.</p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center flex-shrink-0"><iconify-icon className="text-lg text-slate-600" icon="solar:letter-linear"></iconify-icon></div>
<div>
<div className="text-xs text-slate-400 mb-1">Email Us</div>
<a className="text-sm font-medium text-slate-800 hover:text-purple-600" href="mailto:hello@keviottech.com">hello@keviottech.com</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center flex-shrink-0"><iconify-icon className="text-lg text-slate-600" icon="solar:phone-calling-linear"></iconify-icon></div>
<div>
<div className="text-xs text-slate-400 mb-1">Call / WhatsApp</div>
<span className="text-sm font-medium text-slate-800">+1 (555) 123-4567</span>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center flex-shrink-0"><iconify-icon className="text-lg text-slate-600" icon="solar:map-point-linear"></iconify-icon></div>
<div>
<div className="text-xs text-slate-400 mb-1">Headquarters</div>
<span className="text-sm font-medium text-slate-800">Global Tech Park, Suite 400<br/>Innovation District</span>
</div>
</div>
</div>
</div>
<div className="lg:col-span-3">
<form className="bg-white p-8 rounded-2xl border border-slate-200/60 shadow-sm">
<div className="grid md:grid-cols-2 gap-5 mb-5">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Full Name</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:bg-white focus:border-purple-400 focus:ring-1 focus:ring-purple-400 outline-none transition-all placeholder:text-slate-400" placeholder="John Doe" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Company</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:bg-white focus:border-purple-400 focus:ring-1 focus:ring-purple-400 outline-none transition-all placeholder:text-slate-400" placeholder="Acme Corp" type="text"/>
</div>
</div>
<div className="grid md:grid-cols-2 gap-5 mb-6">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Work Email</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:bg-white focus:border-purple-400 focus:ring-1 focus:ring-purple-400 outline-none transition-all placeholder:text-slate-400" placeholder="john@company.com" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Phone (Optional)</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:bg-white focus:border-purple-400 focus:ring-1 focus:ring-purple-400 outline-none transition-all placeholder:text-slate-400" placeholder="+1 ..." type="tel"/>
</div>
</div>
<div className="mb-6">
<label className="block text-xs font-medium text-slate-700 mb-2">What services are you looking for?</label>
<div className="flex flex-wrap gap-2">
<label className="cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<span className="px-3 py-1.5 rounded-full border border-slate-200 text-xs text-slate-600 peer-checked:bg-purple-50 peer-checked:border-purple-300 peer-checked:text-purple-700 transition-colors">Website</span>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<span className="px-3 py-1.5 rounded-full border border-slate-200 text-xs text-slate-600 peer-checked:bg-purple-50 peer-checked:border-purple-300 peer-checked:text-purple-700 transition-colors">Mobile App</span>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<span className="px-3 py-1.5 rounded-full border border-slate-200 text-xs text-slate-600 peer-checked:bg-purple-50 peer-checked:border-purple-300 peer-checked:text-purple-700 transition-colors">CRM/ERP</span>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<span className="px-3 py-1.5 rounded-full border border-slate-200 text-xs text-slate-600 peer-checked:bg-purple-50 peer-checked:border-purple-300 peer-checked:text-purple-700 transition-colors">Cloud/DevOps</span>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<span className="px-3 py-1.5 rounded-full border border-slate-200 text-xs text-slate-600 peer-checked:bg-purple-50 peer-checked:border-purple-300 peer-checked:text-purple-700 transition-colors">AI Integration</span>
</label>
</div>
</div>
<div className="mb-6">
<label className="block text-xs font-medium text-slate-700 mb-1.5">Project Details</label>
<textarea className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:bg-white focus:border-purple-400 focus:ring-1 focus:ring-purple-400 outline-none transition-all placeholder:text-slate-400 resize-none" placeholder="Tell us about your goals, current challenges, and desired timeline..." rows="4"></textarea>
</div>
<button className="w-full bg-slate-900 text-white font-medium text-sm py-3 rounded-lg hover:bg-purple-600 transition-colors shadow-sm" type="button">
                                Send Requirements
                            </button>
</form>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
<div className="col-span-2 lg:col-span-2">
<a className="text-lg font-medium tracking-tighter text-slate-900 flex items-center gap-1 mb-4" href="#">
<div className="w-5 h-5 rounded bg-slate-900 flex items-center justify-center">
<span className="text-white text-[10px] font-medium">K</span>
</div>
                        KEVIOT
                    </a>
<p className="text-xs text-slate-500 leading-relaxed max-w-sm">
                        Keviot Tech builds digital products, cloud systems, and custom business software for modern companies looking to scale with confidence.
                    </p>
</div>
<div>
<h4 className="text-xs font-medium text-slate-900 mb-4 uppercase tracking-wider">Solutions</h4>
<ul className="space-y-3 text-xs text-slate-500">
<li><a className="hover:text-purple-600 transition-colors" href="#">SaaS MVP Launch</a></li>
<li><a className="hover:text-purple-600 transition-colors" href="#">Custom CRM / ERP</a></li>
<li><a className="hover:text-purple-600 transition-colors" href="#">Cloud Migration</a></li>
<li><a className="hover:text-purple-600 transition-colors" href="#">Business Automation</a></li>
<li><a className="hover:text-purple-600 transition-colors" href="#">Legacy Modernization</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium text-slate-900 mb-4 uppercase tracking-wider">Services</h4>
<ul className="space-y-3 text-xs text-slate-500">
<li><a className="hover:text-purple-600 transition-colors" href="#">Web Development</a></li>
<li><a className="hover:text-purple-600 transition-colors" href="#">Mobile Apps</a></li>
<li><a className="hover:text-purple-600 transition-colors" href="#">Backend &amp; API</a></li>
<li><a className="hover:text-purple-600 transition-colors" href="#">AWS &amp; Azure DevOps</a></li>
<li><a className="hover:text-purple-600 transition-colors" href="#">AI Integrations</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium text-slate-900 mb-4 uppercase tracking-wider">Company</h4>
<ul className="space-y-3 text-xs text-slate-500">
<li><a className="hover:text-purple-600 transition-colors" href="#about">About Us</a></li>
<li><a className="hover:text-purple-600 transition-colors" href="#work">Portfolio</a></li>
<li><a className="hover:text-purple-600 transition-colors" href="#insights">Blog &amp; Insights</a></li>
<li><a className="hover:text-purple-600 transition-colors" href="#contact">Contact</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-[11px] text-slate-400">© 2024 Keviot Tech Pvt Ltd. All rights reserved.</p>
<div className="flex gap-4 text-[11px] text-slate-400">
<a className="hover:text-slate-600" href="#">Privacy Policy</a>
<a className="hover:text-slate-600" href="#">Terms of Service</a>
<a className="hover:text-slate-600" href="#">Sitemap</a>
</div>
<div className="flex gap-3 text-slate-400">
<a className="hover:text-slate-800 transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:link-circle-linear"></iconify-icon></a>
<a className="hover:text-slate-800 transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:hashtag-square-linear"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
