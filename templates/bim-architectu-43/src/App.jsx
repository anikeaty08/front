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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-xl font-medium tracking-tighter text-white flex items-center gap-2" href="#">
<span className="iconify text-cyan-400" data-height="20" data-icon="lucide:box" data-width="20"></span>
                BIMVISION
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#projects">Projects</a>
<a className="hover:text-white transition-colors" href="#faq">FAQ</a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-neutral-950 bg-white rounded-full hover:bg-neutral-200 transition-colors" href="#contact">
                Get Started
            </a>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute inset-0 bg-grid z-0 pointer-events-none"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-cyan-400 font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                        Next-Gen Architecture
                    </div>
<h1 className="text-5xl lg:text-7xl font-medium tracking-tight text-white leading-[1.1]">
                        Transforming <br/>
                        Blueprints into <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-cyan-500">Digital Reality.</span>
</h1>
<p className="text-lg text-neutral-400 max-w-lg leading-relaxed font-light">
                        Expert BIM services providing end-to-end digital modeling solutions for complex architectural and engineering projects.
                    </p>
<div className="flex flex-wrap items-center gap-4">
<button className="px-6 py-3 bg-white text-neutral-950 text-sm font-medium rounded-lg hover:bg-neutral-200 transition-colors flex items-center gap-2 group">
                            View Our Work
                            <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
<button className="px-6 py-3 border border-neutral-700 text-neutral-300 text-sm font-medium rounded-lg hover:border-neutral-500 hover:text-white transition-colors">
                            Get a Free Consultation
                        </button>
</div>
</div>

<div className="relative lg:h-[600px] flex items-center justify-center perspective-container">

<div className="relative w-full aspect-square max-w-md animate-float">
<div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-transparent rounded-2xl blur-2xl"></div>
<img alt="3D Building Model" className="relative z-10 w-full h-full object-cover rounded-2xl border border-white/10 shadow-2xl shadow-cyan-900/20 opacity-90 grayscale-[20%] hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" style={{boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'}}/>

<div className="absolute -right-6 top-12 bg-neutral-900/90 backdrop-blur border border-white/10 p-4 rounded-xl shadow-xl z-20 flex gap-3 items-center">
<div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
<span className="iconify" data-icon="lucide:layers" data-width="20"></span>
</div>
<div>
<p className="text-xs text-neutral-400">LOD 400</p>
<p className="text-sm font-medium text-white">Structural Integrity</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950 border-t border-white/5" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Our Core Services</h2>
<p className="text-neutral-400 max-w-xl">Comprehensive digital solutions tailored for the modern built environment.</p>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="glass-card group rounded-2xl p-8 relative overflow-hidden transition-all duration-300">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&amp;fit=crop&amp;q=80')] bg-cover opacity-0 group-hover:opacity-10 transition-opacity duration-500 mix-blend-luminosity"></div>
<div className="relative z-10">
<div className="w-12 h-12 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center mb-6 text-cyan-400">
<span className="iconify" data-icon="lucide:pencil-ruler" data-width="24" strokeWidth="1.5"></span>
</div>
<h3 className="text-xl font-medium text-white mb-2">Architectural BIM</h3>
<p className="text-sm text-neutral-400 leading-relaxed">High-precision 3D modeling from conceptual sketches to construction documentation, ensuring geometric accuracy.</p>
</div>
</div>

<div className="glass-card group rounded-2xl p-8 relative overflow-hidden transition-all duration-300">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&amp;fit=crop&amp;q=80')] bg-cover opacity-0 group-hover:opacity-10 transition-opacity duration-500 mix-blend-luminosity"></div>
<div className="relative z-10">
<div className="w-12 h-12 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center mb-6 text-cyan-400">
<span className="iconify" data-icon="lucide:box-select" data-width="24" strokeWidth="1.5"></span>
</div>
<h3 className="text-xl font-medium text-white mb-2">Structural Engineering</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Detailed analysis and modeling of load-bearing elements, reinforcing data-driven structural integrity.</p>
</div>
</div>

<div className="glass-card group rounded-2xl p-8 relative overflow-hidden transition-all duration-300">
<div className="relative z-10">
<div className="w-12 h-12 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center mb-6 text-cyan-400">
<span className="iconify" data-icon="lucide:zap" data-width="24" strokeWidth="1.5"></span>
</div>
<h3 className="text-xl font-medium text-white mb-2">MEP Coordination</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Clash-detection and routing for Mechanical, Electrical, and Plumbing systems to prevent onsite conflicts.</p>
</div>
</div>

<div className="glass-card group rounded-2xl p-8 relative overflow-hidden transition-all duration-300">
<div className="relative z-10">
<div className="w-12 h-12 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center mb-6 text-cyan-400">
<span className="iconify" data-icon="lucide:folder-kanban" data-width="24" strokeWidth="1.5"></span>
</div>
<h3 className="text-xl font-medium text-white mb-2">BIM Management</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Project coordination, execution planning (BEP), and standards implementation for large-scale teams.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950 relative" id="projects">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-2">Our Masterpieces</h2>
<p className="text-neutral-400 text-sm">Featured Projects across the globe.</p>
</div>

<div className="flex flex-wrap gap-2">
<button className="px-4 py-1.5 rounded-full bg-white text-neutral-950 text-xs font-medium border border-white">All</button>
<button className="px-4 py-1.5 rounded-full bg-transparent text-neutral-400 hover:text-white border border-white/10 hover:bg-white/5 text-xs font-medium transition-all">Residential</button>
<button className="px-4 py-1.5 rounded-full bg-transparent text-neutral-400 hover:text-white border border-white/10 hover:bg-white/5 text-xs font-medium transition-all">Industrial</button>
<button className="px-4 py-1.5 rounded-full bg-transparent text-neutral-400 hover:text-white border border-white/10 hover:bg-white/5 text-xs font-medium transition-all">Commercial</button>
<button className="px-4 py-1.5 rounded-full bg-transparent text-neutral-400 hover:text-white border border-white/10 hover:bg-white/5 text-xs font-medium transition-all">MEP</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">

<div className="md:col-span-2 group relative rounded-xl overflow-hidden cursor-pointer border border-white/5">
<img alt="Office Tower" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-neutral-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
<span className="text-cyan-400 text-xs font-medium mb-1">Commercial • 2023</span>
<h3 className="text-2xl font-medium text-white tracking-tight mb-1">Skyline Tower Alpha</h3>
<p className="text-neutral-300 text-sm mb-4">Berlin, Germany</p>
<span className="inline-flex items-center text-xs text-white border-b border-white/30 pb-0.5 w-max">View Case Study</span>
</div>
</div>

<div className="group relative rounded-xl overflow-hidden cursor-pointer border border-white/5">
<img alt="Industrial" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-neutral-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
<span className="text-cyan-400 text-xs font-medium mb-1">Industrial • 2022</span>
<h3 className="text-lg font-medium text-white tracking-tight">Apex Logistics Hub</h3>
<p className="text-neutral-300 text-xs">Nevada, USA</p>
</div>
</div>

<div className="group relative rounded-xl overflow-hidden cursor-pointer border border-white/5">
<img alt="Residential" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-neutral-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
<span className="text-cyan-400 text-xs font-medium mb-1">Residential • 2023</span>
<h3 className="text-lg font-medium text-white tracking-tight">The Glass House</h3>
<p className="text-neutral-300 text-xs">Kyoto, Japan</p>
</div>
</div>

<div className="md:col-span-2 group relative rounded-xl overflow-hidden cursor-pointer border border-white/5">
<img alt="MEP" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-neutral-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
<span className="text-cyan-400 text-xs font-medium mb-1">MEP • 2024</span>
<h3 className="text-2xl font-medium text-white tracking-tight mb-1">Metro Station Central</h3>
<p className="text-neutral-300 text-sm mb-4">London, UK</p>
<span className="inline-flex items-center text-xs text-white border-b border-white/30 pb-0.5 w-max">View Case Study</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900/30" id="faq">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-medium text-white tracking-tight text-center mb-12">Frequently Asked Questions</h2>
<div className="space-y-4">

<details className="group bg-neutral-950 border border-white/5 rounded-lg open:border-cyan-500/30 transition-colors">
<summary className="flex items-center justify-between p-6 cursor-pointer">
<span className="text-sm font-medium text-white">What BIM software do you use?</span>
<span className="iconify text-cyan-400 transform group-open:rotate-45 transition-transform" data-icon="lucide:plus" data-width="20"></span>
</summary>
<div className="px-6 pb-6 text-sm text-neutral-400 leading-relaxed border-t border-white/5 pt-4">
                        We primarily utilize the Autodesk Construction Cloud suite, including Revit for modeling, Navisworks for clash detection, and BIM 360 for cloud collaboration. We are also proficient in ArchiCAD and Rhino depending on client needs.
                    </div>
</details>

<details className="group bg-neutral-950 border border-white/5 rounded-lg open:border-cyan-500/30 transition-colors">
<summary className="flex items-center justify-between p-6 cursor-pointer">
<span className="text-sm font-medium text-white">How do you handle project coordination?</span>
<span className="iconify text-cyan-400 transform group-open:rotate-45 transition-transform" data-icon="lucide:plus" data-width="20"></span>
</summary>
<div className="px-6 pb-6 text-sm text-neutral-400 leading-relaxed border-t border-white/5 pt-4">
                        We establish a comprehensive BIM Execution Plan (BEP) at the start. We conduct weekly coordination meetings using Navisworks to resolve clashes and maintain a Common Data Environment (CDE) for real-time updates.
                    </div>
</details>

<details className="group bg-neutral-950 border border-white/5 rounded-lg open:border-cyan-500/30 transition-colors">
<summary className="flex items-center justify-between p-6 cursor-pointer">
<span className="text-sm font-medium text-white">Can you handle international architectural standards?</span>
<span className="iconify text-cyan-400 transform group-open:rotate-45 transition-transform" data-icon="lucide:plus" data-width="20"></span>
</summary>
<div className="px-6 pb-6 text-sm text-neutral-400 leading-relaxed border-t border-white/5 pt-4">
                        Absolutely. Our team is well-versed in ISO 19650 standards, as well as specific regional codes including US (AIA), UK (RIBA), and Eurocodes.
                    </div>
</details>
</div>
</div>
</section>

<footer className="bg-neutral-950 border-t border-white/10 pt-20 pb-10" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

<div className="md:col-span-5">
<a className="text-xl font-medium tracking-tighter text-white flex items-center gap-2 mb-4" href="#">
<span className="iconify text-cyan-400" data-icon="lucide:box" data-width="20"></span>
                        BIMVISION
                    </a>
<p className="text-sm text-neutral-500 mb-6 max-w-sm">
                        Bridging the gap between conceptual design and physical construction through advanced digital modeling.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/10 transition-all" href="#">
<span className="iconify" data-icon="lucide:linkedin" data-width="18" strokeWidth="1.5"></span>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/10 transition-all" href="#">
<span className="iconify" data-icon="lucide:instagram" data-width="18" strokeWidth="1.5"></span>
</a>
</div>
</div>

<div className="md:col-span-3">
<h4 className="text-white font-medium mb-6 text-sm">Company</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-cyan-400 transition-colors" href="#services">Services</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#projects">Featured Projects</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Privacy Policy</a></li>
</ul>
</div>

<div className="md:col-span-4">
<h4 className="text-white font-medium mb-6 text-sm">Contact Us</h4>
<ul className="space-y-3 text-sm text-neutral-500 mb-8">
<li className="flex items-start gap-3">
<span className="iconify text-cyan-500 mt-0.5" data-icon="lucide:map-pin" data-width="16"></span>
                            123 Innovation Drive, Tech City, TC 90210
                        </li>
<li className="flex items-center gap-3">
<span className="iconify text-cyan-500" data-icon="lucide:phone" data-width="16"></span>
                            +1 (555) 000-1234
                        </li>
<li className="flex items-center gap-3">
<span className="iconify text-cyan-500" data-icon="lucide:mail" data-width="16"></span>
                            hello@bimvision.com
                        </li>
</ul>
<div>
<p className="text-xs text-neutral-400 mb-2">Subscribe for updates</p>
<div className="flex gap-2">
<input className="bg-white/5 border border-white/10 rounded-md px-3 py-2 text-sm text-white w-full focus:outline-none focus:border-cyan-500/50" placeholder="Email address" type="email"/>
<button className="bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 px-4 py-2 rounded-md text-sm font-medium hover:bg-cyan-500/20 transition-colors">
<span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
</div>
</div>
</div>
</div>

<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-neutral-600">© 2024 BIMVISION Inc. All rights reserved.</p>
<a className="text-xs text-neutral-500 hover:text-white flex items-center gap-1 transition-colors" href="#">
                    Back to Top
                    <span className="iconify" data-icon="lucide:arrow-up" data-width="14"></span>
</a>
</div>
</div>
</footer>

    </>
  );
}
