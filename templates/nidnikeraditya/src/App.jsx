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



        lucide.createIcons();
        
        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="spline-container absolute top-0 left-0 w-full h-full -z-10"><iframe frameborder="0" height="100%" src="https://my.spline.design/iphone14wallpaper4copy-79eead3c8221db4e6fd870a3d5061aa0" width="100%"></iframe></div></div>

<nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50 z-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">
<div className="flex items-center space-x-2">
<div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg flex items-center justify-center">
<span className="text-white font-semibold text-sm" style={{letterSpacing: '-0.05em'}}>AN</span>
</div>
<span className="text-2xl font-semibold text-slate-100 tracking-tight">Aditya Nidniker</span>
</div>
<div className="hidden md:flex items-center space-x-8">
<a className="hover:text-slate-100 transition-colors text-sm text-neutral-50" href="#about">About</a>
<a className="hover:text-slate-100 transition-colors text-sm text-neutral-50" href="#experience">Experience</a>
<a className="hover:text-slate-100 transition-colors text-sm text-neutral-50" href="#projects">Projects</a>
<a className="hover:text-slate-100 transition-colors text-sm text-neutral-50" href="#skills">Skills</a>
<a className="hover:text-slate-100 transition-colors text-sm text-neutral-50" href="#contact">Contact</a>
</div>
<button className="md:hidden text-slate-400 hover:text-slate-100">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</nav>

<section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 neural-bg">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="space-y-8">
<div className="space-y-4">
<div className="inline-flex items-center space-x-2 px-3 py-1 bg-violet-500/10 border border-violet-500/20 rounded-full">
<div className="w-2 h-2 bg-violet-400 rounded-full animate-pulse"></div>
<span className="text-xs font-medium text-violet-300">Available for opportunities</span>
</div>
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-none">
<span className="text-slate-100">AI Data Operations</span>
<br/>
<span className="gradient-text">Analyst</span>
</h1>
<p className="leading-relaxed text-lg text-neutral-50 max-w-xl">
                            Analytical and detail-driven Content Specialist with 1.5+ years in AI Data Operations, Trust &amp; Safety, and Policy Enforcement for Google projects.
                        </p>
</div>
<div className="flex flex-wrap gap-4">
<a className="inline-flex items-center space-x-2 px-6 py-3 bg-violet-600 hover:bg-violet-700 rounded-lg transition-all font-medium" href="#contact">
<span>Get in touch</span>
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center space-x-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-all font-medium" href="#projects">
<span>View projects</span>
</a>
</div>
<div className="flex items-center space-x-6 pt-4">
<a className="text-slate-400 hover:text-violet-400 transition-colors" href="mailto:nidnikeraditya@gmail.com">
<svg className="lucide lucide-mail w-5 h-5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</a>
<a className="text-slate-400 hover:text-violet-400 transition-colors" href="https://linkedin.com/in/adityanidniker" target="_blank">
<svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a className="text-slate-400 hover:text-violet-400 transition-colors" href="tel:+919177494923">
<svg className="lucide lucide-phone w-5 h-5" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</a>
</div>
</div>
<div className="relative perspective-card">
<div className="relative w-full aspect-square max-w-md mx-auto">
<div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-purple-600/20 rounded-3xl transform rotate-6"></div>
<div className="absolute inset-0 bg-gradient-to-br from-violet-600/30 to-purple-700/30 rounded-3xl transform -rotate-6"></div>
<div className="relative bg-slate-900 border border-slate-800 rounded-3xl p-8 card-3d">
<div className="space-y-6">
<div className="flex items-center space-x-3">
<div className="w-12 h-12 bg-violet-600/20 rounded-xl flex items-center justify-center">
<svg className="lucide lucide-brain w-6 h-6 text-violet-400" data-lucide="brain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 18V5"></path><path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"></path><path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"></path><path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"></path><path d="M18 18a4 4 0 0 0 2-7.464"></path><path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"></path><path d="M6 18a4 4 0 0 1-2-7.464"></path><path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"></path></svg>
</div>
<div>
<div className="text-sm text-slate-400">Accuracy Rate</div>
<div className="text-2xl font-semibold">99%</div>
</div>
</div>
<div className="flex items-center space-x-3">
<div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center">
<svg className="lucide lucide-shield-check w-6 h-6 text-purple-400" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div>
<div className="text-sm text-slate-400">Experience</div>
<div className="text-2xl font-semibold">1.5+ Years</div>
</div>
</div>
<div className="flex items-center space-x-3">
<div className="w-12 h-12 bg-indigo-600/20 rounded-xl flex items-center justify-center">
<svg className="lucide lucide-zap w-6 h-6 text-indigo-400" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<div>
<div className="text-sm text-slate-400">Efficiency Boost</div>
<div className="text-2xl font-semibold">12%</div>
</div>
</div>
<div className="pt-4 border-t border-slate-800">
<div className="text-xs text-slate-500 uppercase tracking-wider mb-3">Key Focus Areas</div>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 bg-violet-500/10 border border-violet-500/20 rounded-full text-xs text-violet-300">Trust &amp; Safety</span>
<span className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-xs text-purple-300">AI Moderation</span>
<span className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-xs text-indigo-300">Policy Enforcement</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50" id="about">
<div className="max-w-7xl mx-auto">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-12">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">Professional Summary</h2>
<div className="w-12 h-1 bg-gradient-to-r from-violet-600 to-purple-600 mx-auto rounded-full"></div>
</div>
<div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 card-3d">
<p className="text-slate-300 leading-relaxed text-center">
                        Skilled in user-generated content moderation, data analysis, and risk detection within fast-paced environments. Adept at handling controversial and sensitive content, managing global escalations, and improving moderation accuracy using Spreadsheets and Cloud Compute. Committed to maintaining online safety, policy compliance, and freedom of expression integrity.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-20 px-4 sm:px-6 lg:px-8" id="experience">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">Work Experience</h2>
<div className="w-12 h-1 bg-gradient-to-r from-violet-600 to-purple-600 mx-auto rounded-full"></div>
</div>
<div className="max-w-4xl mx-auto">
<div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 card-3d">
<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6 gap-4">
<div className="flex-1">
<h3 className="text-2xl font-semibold text-slate-100 mb-2">Senior Analyst - Data Operations</h3>
<div className="text-lg text-violet-400 mb-2">Teleperformance</div>
<div className="inline-flex items-center space-x-2 text-sm text-slate-400">
<svg className="lucide lucide-building-2 w-4 h-4" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 12h4"></path><path d="M10 8h4"></path><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></svg>
<span>Client: Google</span>
</div>
</div>
<div className="flex items-center space-x-2 text-sm text-slate-400 whitespace-nowrap">
<svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span>October 2023 - April 2025</span>
</div>
</div>
<div className="space-y-4 pl-0 sm:pl-6">
<div className="flex items-start space-x-3">
<div className="w-1.5 h-1.5 bg-violet-500 rounded-full mt-2 flex-shrink-0"></div>
<p className="text-slate-300 leading-relaxed">Reviewed and enforced YouTube-style content policies, moderating graphic and sensitive content under Trust &amp; Safety frameworks, achieving <span className="text-violet-400 font-medium">99% decision accuracy</span> and full SLA compliance</p>
</div>
<div className="flex items-start space-x-3">
<div className="w-1.5 h-1.5 bg-violet-500 rounded-full mt-2 flex-shrink-0"></div>
<p className="text-slate-300 leading-relaxed">Conducted policy enforcement and escalation analysis, collaborating with global policy teams to refine guidelines and reduce misclassification rates by <span className="text-violet-400 font-medium">15%</span></p>
</div>
<div className="flex items-start space-x-3">
<div className="w-1.5 h-1.5 bg-violet-500 rounded-full mt-2 flex-shrink-0"></div>
<p className="text-slate-300 leading-relaxed">Managed high-priority content escalations and coordinated with cross-functional stakeholders to ensure consistent policy application and issue resolution</p>
</div>
<div className="flex items-start space-x-3">
<div className="w-1.5 h-1.5 bg-violet-500 rounded-full mt-2 flex-shrink-0"></div>
<p className="text-slate-300 leading-relaxed">Utilized Spreadsheets and analytics to identify review trends, prepare content reports, and drive data-backed policy improvements</p>
</div>
<div className="flex items-start space-x-3">
<div className="w-1.5 h-1.5 bg-violet-500 rounded-full mt-2 flex-shrink-0"></div>
<p className="text-slate-300 leading-relaxed">Leveraged <span className="text-violet-400 font-medium">Vertex AI, Cloud Compute (CC), and AI Studio</span> to enhance moderation workflows and automation accuracy</p>
</div>
<div className="flex items-start space-x-3">
<div className="w-1.5 h-1.5 bg-violet-500 rounded-full mt-2 flex-shrink-0"></div>
<p className="text-slate-300 leading-relaxed">Ensured GDPR-aligned confidentiality and maintained <span className="text-violet-400 font-medium">99% QA scores</span> across moderation reviews</p>
</div>
<div className="flex items-start space-x-3">
<div className="w-1.5 h-1.5 bg-violet-500 rounded-full mt-2 flex-shrink-0"></div>
<p className="text-slate-300 leading-relaxed">Piloted new SOP testing and process efficiency systems, reducing average review time by <span className="text-violet-400 font-medium">12%</span></p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50" id="projects">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">Featured Projects</h2>
<div className="w-12 h-1 bg-gradient-to-r from-violet-600 to-purple-600 mx-auto rounded-full"></div>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 card-3d">
<div className="w-12 h-12 bg-violet-600/20 rounded-xl flex items-center justify-center mb-4">
<svg className="lucide lucide-cpu w-6 h-6 text-violet-400" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
</div>
<h3 className="text-xl font-semibold text-slate-100 mb-2">LLM Content Moderation</h3>
<p className="text-sm text-slate-400 mb-4">Vertex AI &amp; Cloud Compute</p>
<div className="space-y-3 mb-4">
<div className="flex items-start space-x-2">
<div className="w-1 h-1 bg-violet-500 rounded-full mt-2 flex-shrink-0"></div>
<p className="text-sm text-slate-300 leading-relaxed">Managed large-scale moderation queues, increasing throughput and improving traceability of content compliance</p>
</div>
<div className="flex items-start space-x-2">
<div className="w-1 h-1 bg-violet-500 rounded-full mt-2 flex-shrink-0"></div>
<p className="text-sm text-slate-300 leading-relaxed">Tested and tuned AI-generated classifications for harmful and violative content, enhancing model precision</p>
</div>
</div>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 bg-violet-500/10 border border-violet-500/20 rounded text-xs text-violet-300">Vertex AI</span>
<span className="px-2 py-1 bg-violet-500/10 border border-violet-500/20 rounded text-xs text-violet-300">Cloud Compute</span>
</div>
</div>

<div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 card-3d">
<div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center mb-4">
<svg className="lucide lucide-shield-check w-6 h-6 text-purple-400" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="text-xl font-semibold text-slate-100 mb-2">YouTube Ads Policy Compliance</h3>
<p className="text-sm text-slate-400 mb-4">Cloud Compute (CORE)</p>
<div className="space-y-3 mb-4">
<div className="flex items-start space-x-2">
<div className="w-1 h-1 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
<p className="text-sm text-slate-300 leading-relaxed">Reviewed large-scale YouTube Ads within Cloud Compute (CC) to ensure compliance with Trust &amp; Safety guidelines, maintaining 98-99% accuracy</p>
</div>
<div className="flex items-start space-x-2">
<div className="w-1 h-1 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
<p className="text-sm text-slate-300 leading-relaxed">Flagged and escalated non-compliant ads, improving ad review efficiency and policy alignment</p>
</div>
</div>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 bg-purple-500/10 border border-purple-500/20 rounded text-xs text-purple-300">Cloud Compute</span>
<span className="px-2 py-1 bg-purple-500/10 border border-purple-500/20 rounded text-xs text-purple-300">Policy Review</span>
</div>
</div>

<div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 card-3d">
<div className="w-12 h-12 bg-indigo-600/20 rounded-xl flex items-center justify-center mb-4">
<svg className="lucide lucide-sparkles w-6 h-6 text-indigo-400" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<h3 className="text-xl font-semibold text-slate-100 mb-2">Pixel AI Personalization</h3>
<p className="text-sm text-slate-400 mb-4">Prompt Testing &amp; Configuration</p>
<div className="space-y-3 mb-4">
<div className="flex items-start space-x-2">
<div className="w-1 h-1 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
<p className="text-sm text-slate-300 leading-relaxed">Designed and executed prompt alignment tests, ensuring content outputs adhered to moderation policy standards</p>
</div>
</div>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded text-xs text-indigo-300">Prompt Engineering</span>
<span className="px-2 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded text-xs text-indigo-300">AI Testing</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-4 sm:px-6 lg:px-8" id="skills">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">Skills &amp; Expertise</h2>
<div className="w-12 h-1 bg-gradient-to-r from-violet-600 to-purple-600 mx-auto rounded-full"></div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 card-3d">
<div className="flex items-center space-x-3 mb-4">
<div className="w-10 h-10 bg-violet-600/20 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-shield w-5 h-5 text-violet-400" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</div>
<h3 className="text-lg font-semibold text-slate-100">Content Moderation &amp; Trust &amp; Safety</h3>
</div>
<div className="space-y-2">
<div className="flex items-center space-x-2">
<div className="w-1 h-1 bg-violet-500 rounded-full"></div>
<span className="text-sm text-slate-300">Policy Enforcement</span>
</div>
<div className="flex items-center space-x-2">
<div className="w-1 h-1 bg-violet-500 rounded-full"></div>
<span className="text-sm text-slate-300">Risk Identification</span>
</div>
<div className="flex items-center space-x-2">
<div className="w-1 h-1 bg-violet-500 rounded-full"></div>
<span className="text-sm text-slate-300">Escalation Management</span>
</div>
<div className="flex items-center space-x-2">
<div className="w-1 h-1 bg-violet-500 rounded-full"></div>
<span className="text-sm text-slate-300">Community Guidelines</span>
</div>
</div>
</div>

<div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 card-3d">
<div className="flex items-center space-x-3 mb-4">
<div className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-bar-chart-3 w-5 h-5 text-purple-400" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
</div>
<h3 className="text-lg font-semibold text-slate-100">Data Analytics</h3>
</div>
<div className="space-y-2">
<div className="flex items-center space-x-2">
<div className="w-1 h-1 bg-purple-500 rounded-full"></div>
<span className="text-sm text-slate-300">Spreadsheets</span>
</div>
<div className="flex items-center space-x-2">
<div className="w-1 h-1 bg-purple-500 rounded-full"></div>
<span className="text-sm text-slate-300">Advanced Excel</span>
</div>
<div className="flex items-center space-x-2">
<div className="w-1 h-1 bg-purple-500 rounded-full"></div>
<span className="text-sm text-slate-300">Data Reporting</span>
</div>
<div className="flex items-center space-x-2">
<div className="w-1 h-1 bg-purple-500 rounded-full"></div>
<span className="text-sm text-slate-300">Trend Identification</span>
</div>
<div className="flex items-center space-x-2">
<div className="w-1 h-1 bg-purple-500 rounded-full"></div>
<span className="text-sm text-slate-300">Accuracy Metrics</span>
</div>
</div>
</div>

<div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 card-3d">
<div className="flex items-center space-x-3 mb-4">
<div className="w-10 h-10 bg-indigo-600/20 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-wrench w-5 h-5 text-indigo-400" data-lucide="wrench" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"></path></svg>
</div>
<h3 className="text-lg font-semibold text-slate-100">Tools &amp; Platforms</h3>
</div>
<div className="space-y-2">
<div className="flex items-center space-x-2">
<div className="w-1 h-1 bg-indigo-500 rounded-full"></div>
<span className="text-sm text-slate-300">Google Cloud Compute</span>
</div>
<div className="flex items-center space-x-2">
<div className="w-1 h-1 bg-indigo-500 rounded-full"></div>
<span className="text-sm text-slate-300">AI Studios</span>
</div>
<div className="flex items-center space-x-2">
<div className="w-1 h-1 bg-indigo-500 rounded-full"></div>
<span className="text-sm text-slate-300">Google Workspace</span>
</div>
<div className="flex items-center space-x-2">
<div className="w-1 h-1 bg-indigo-500 rounded-full"></div>
<span className="text-sm text-slate-300">Prompt Engineering</span>
</div>
</div>
</div>

<div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 card-3d">
<div className="flex items-center space-x-3 mb-4">
<div className="w-10 h-10 bg-cyan-600/20 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-file-check w-5 h-5 text-cyan-400" data-lucide="file-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="m9 15 2 2 4-4"></path></svg>
</div>
<h3 className="text-lg font-semibold text-slate-100">Compliance</h3>
</div>
<div className="space-y-2">
<div className="flex items-center space-x-2">
<div className="w-1 h-1 bg-cyan-500 rounded-full"></div>
<span className="text-sm text-slate-300">GDPR</span>
</div>
<div className="flex items-center space-x-2">
<div className="w-1 h-1 bg-cyan-500 rounded-full"></div>
<span className="text-sm text-slate-300">Data Privacy</span>
</div>
<div className="flex items-center space-x-2">
<div className="w-1 h-1 bg-cyan-500 rounded-full"></div>
<span className="text-sm text-slate-300">Quality Auditing</span>
</div>
<div className="flex items-center space-x-2">
<div className="w-1 h-1 bg-cyan-500 rounded-full"></div>
<span className="text-sm text-slate-300">SOP Adherence</span>
</div>
</div>
</div>

<div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 card-3d">
<div className="flex items-center space-x-3 mb-4">
<div className="w-10 h-10 bg-pink-600/20 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-users w-5 h-5 text-pink-400" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<h3 className="text-lg font-semibold text-slate-100">Collaboration</h3>
</div>
<div className="space-y-2">
<div className="flex items-center space-x-2">
<div className="w-1 h-1 bg-pink-500 rounded-full"></div>
<span className="text-sm text-slate-300">Stakeholder Communication</span>
</div>
<div className="flex items-center space-x-2">
<div className="w-1 h-1 bg-pink-500 rounded-full"></div>
<span className="text-sm text-slate-300">Cross-Functional Coordination</span>
</div>
<div className="flex items-center space-x-2">
<div className="w-1 h-1 bg-pink-500 rounded-full"></div>
<span className="text-sm text-slate-300">Process Improvement</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">Education</h2>
<div className="w-12 h-1 bg-gradient-to-r from-violet-600 to-purple-600 mx-auto rounded-full"></div>
</div>
<div className="max-w-4xl mx-auto space-y-6">

<div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 card-3d">
<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
<div className="flex-1">
<div className="flex items-start space-x-4">
<div className="w-12 h-12 bg-violet-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
<svg className="lucide lucide-graduation-cap w-6 h-6 text-violet-400" data-lucide="graduation-cap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
</div>
<div>
<h3 className="text-xl font-semibold text-slate-100 mb-1">MBA - Data Science &amp; Analytics</h3>
<div className="text-violet-400 mb-2">Manipal University Jaipur</div>
<div className="text-sm text-slate-400">Rajasthan, India</div>
</div>
</div>
</div>
<div className="flex items-center space-x-2 text-sm text-slate-400">
<svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span>August 2022 - Nov 2025</span>
</div>
</div>
</div>

<div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 card-3d">
<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
<div className="flex-1">
<div className="flex items-start space-x-4">
<div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
<svg className="lucide lucide-graduation-cap w-6 h-6 text-purple-400" data-lucide="graduation-cap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
</div>
<div className="">
<h3 className="text-xl font-semibold text-slate-100 mb-1">Bachelor of Commerce (B.COM)</h3>
<div className="text-purple-400 mb-2">Aurora's Degree &amp; PG College</div>
<div className="text-sm text-slate-400">Hyderabad, India</div>
</div>
</div>
</div>
<div className="flex items-center space-x-2 text-sm text-slate-400">
<svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span>June 2020 - July 2023</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-4 sm:px-6 lg:px-8">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">Certifications</h2>
<div className="w-12 h-1 bg-gradient-to-r from-violet-600 to-purple-600 mx-auto rounded-full"></div>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 card-3d">
<div className="w-12 h-12 bg-violet-600/20 rounded-lg flex items-center justify-center mb-4">
<svg className="lucide lucide-award w-6 h-6 text-violet-400" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
</div>
<h3 className="text-lg font-semibold text-slate-100 mb-2">Tata Virtual Experience Program</h3>
<p className="text-sm text-slate-400 mb-4">Gained expertise in translating complex datasets into actionable visual insights</p>
<div className="inline-flex items-center space-x-2 px-3 py-1 bg-violet-500/10 border border-violet-500/20 rounded-full text-xs text-violet-300">
<svg className="lucide lucide-check-circle w-3 h-3" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<span>Certified</span>
</div>
</div>

<div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 card-3d">
<div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mb-4">
<svg className="lucide lucide-award w-6 h-6 text-purple-400" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
</div>
<h3 className="text-lg font-semibold text-slate-100 mb-2">Office Automation</h3>
<p className="text-sm text-slate-400 mb-4">Acquired advanced proficiency in Microsoft Excel, Word, PowerPoint, Outlook and spreadsheet automation</p>
<div className="inline-flex items-center space-x-2 px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-xs text-purple-300">
<svg className="lucide lucide-check-circle w-3 h-3" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<span>Certified</span>
</div>
</div>

<div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 card-3d">
<div className="w-12 h-12 bg-indigo-600/20 rounded-lg flex items-center justify-center mb-4">
<svg className="lucide lucide-award w-6 h-6 text-indigo-400" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
</div>
<h3 className="text-lg font-semibold text-slate-100 mb-2">Customer Relationship Management</h3>
<p className="text-sm text-slate-400 mb-4">Learned CRM best practices for managing customer data and improving client relationships</p>
<div className="inline-flex items-center space-x-2 px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-xs text-indigo-300">
<svg className="lucide lucide-check-circle w-3 h-3" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<span>Certified</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50" id="contact">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">Get In Touch</h2>
<div className="w-12 h-1 bg-gradient-to-r from-violet-600 to-purple-600 mx-auto rounded-full"></div>
</div>
<div className="max-w-2xl mx-auto">
<div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 card-3d">
<p className="text-center text-slate-300 mb-8">
                        I'm always open to discussing new opportunities, collaborations, or just having a conversation about AI, data operations, and content moderation.
                    </p>
<div className="space-y-4">
<a className="flex items-center space-x-4 p-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-all group" href="mailto:nidnikeraditya@gmail.com">
<div className="w-12 h-12 bg-violet-600/20 rounded-lg flex items-center justify-center group-hover:bg-violet-600/30 transition-all">
<svg className="lucide lucide-mail w-5 h-5 text-violet-400" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</div>
<div className="flex-1">
<div className="text-sm text-slate-400">Email</div>
<div className="text-slate-100">nidnikeraditya@gmail.com</div>
</div>
<svg className="lucide lucide-arrow-right w-5 h-5 text-slate-500 group-hover:text-violet-400 transition-colors" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="flex items-center space-x-4 p-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-all group" href="https://linkedin.com/in/adityanidniker" target="_blank">
<div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center group-hover:bg-purple-600/30 transition-all">
<svg className="lucide lucide-linkedin w-5 h-5 text-purple-400" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</div>
<div className="flex-1">
<div className="text-sm text-slate-400">LinkedIn</div>
<div className="text-slate-100">linkedin.com/in/adityanidniker</div>
</div>
<svg className="lucide lucide-arrow-right w-5 h-5 text-slate-500 group-hover:text-purple-400 transition-colors" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="flex items-center space-x-4 p-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-all group" href="tel:+919177494923">
<div className="w-12 h-12 bg-indigo-600/20 rounded-lg flex items-center justify-center group-hover:bg-indigo-600/30 transition-all">
<svg className="lucide lucide-phone w-5 h-5 text-indigo-400" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</div>
<div className="flex-1">
<div className="text-sm text-slate-400">Phone</div>
<div className="text-slate-100">+91 9177494923</div>
</div>
<svg className="lucide lucide-arrow-right w-5 h-5 text-slate-500 group-hover:text-indigo-400 transition-colors" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</div>
</section>

<footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
<div className="flex items-center space-x-2">
<div className="w-6 h-6 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg flex items-center justify-center">
<span className="text-white font-semibold text-xs" style={{letterSpacing: '-0.05em'}}>AN</span>
</div>
<span className="text-slate-400 text-sm">© 2025 Aditya Nidniker. All rights reserved.</span>
</div>
<div className="flex items-center space-x-6">
<a className="text-slate-400 hover:text-violet-400 transition-colors" href="mailto:nidnikeraditya@gmail.com">
<svg className="lucide lucide-mail w-5 h-5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</a>
<a className="text-slate-400 hover:text-violet-400 transition-colors" href="https://linkedin.com/in/adityanidniker" target="_blank">
<svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a className="text-slate-400 hover:text-violet-400 transition-colors" href="tel:+919177494923">
<svg className="lucide lucide-phone w-5 h-5" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
