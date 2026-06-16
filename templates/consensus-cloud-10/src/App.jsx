import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
colors: {
sap: {
blue: '#003366', // Dark SAP Blue
light: '#0faaff', // Bright SAP Blue
gold: '#f0ab00', // SAP Gold
gray: '#f5f7f9'
}
}
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
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b bg-white/90 border-slate-200">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<div className="flex gap-2 gap-x-2 gap-y-2 items-center">
<img alt="Cloud Apps by Consensus" className="w-auto h-10 object-contain" src="COUD APPS COLOUR PNG FILE with white colour (horizontal).png"/>
</div>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
<a className="transition-colors hover:text-blue-700" href="#">Products</a>
<a className="transition-colors hover:text-blue-700" href="#">Solutions</a>
<a className="transition-colors hover:text-blue-700" href="#pricing">Pricing</a>
<a className="transition-colors hover:text-blue-700" href="#">Resources</a>
</div>

<div className="hidden md:flex items-center gap-4">
<div className="flex items-center gap-1 text-xs font-medium text-slate-400">
<svg aria-hidden="true" className="lucide lucide-globe w-3 h-3" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg> EN
                </div>
<a className="text-sm font-medium text-slate-900 hover:text-blue-700" href="#">Log in</a>
<a className="text-sm font-medium px-5 py-2.5 rounded-full transition-colors bg-[#003366] text-white hover:bg-blue-900 shadow-md shadow-blue-900/10" href="#">Get Started</a>
</div>

<button className="md:hidden text-slate-900">
<svg aria-hidden="true" className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</nav>

<section className="lg:pt-40 lg:pb-32 overflow-hidden pt-32 pb-20 relative">

<div className="absolute inset-0 -z-10 overflow-hidden">
<div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full blur-3xl opacity-40 bg-blue-50"></div>
<div className="absolute top-[10%] -right-[10%] w-[40%] h-[40%] rounded-full blur-3xl opacity-30 bg-amber-50"></div>
</div>
<div className="text-center max-w-5xl mr-auto ml-auto pr-6 pl-6 relative isolate">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-full -z-10 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-slate-400/10 to-amber-500/10 blur-3xl rounded-full transform scale-110 opacity-60"></div>
</div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full backdrop-blur-sm border text-xs font-medium mb-8 shadow-sm ring-1 ring-blue-500/10 bg-blue-50/50 border-blue-100/50 text-blue-700">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-amber-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
</span>
        New: AI Assistant 2.0 is now live
    </div>
<h1 className="md:text-7xl leading-[1.1] bg-clip-text text-5xl font-semibold text-transparent tracking-tight bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mb-6">
        AI Cloud Apps for <span className="inline-block align-bottom">
<img alt="SAP Business One" className="h-[0.77em] w-auto object-contain" src="https://www.aura.build/editor/SAP_BusinessOne_R_grad_blue.png"/>
</span>
</h1>
<p className="md:text-2xl leading-relaxed text-xl font-light text-slate-500 max-w-3xl mr-auto mb-10 ml-auto">
        Powerful cloud-based modules for document automation, electronic signatures, AI-powered insights, and seamless reporting.
    </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 rounded-xl font-medium transition-all shadow-lg flex items-center justify-center gap-2 group bg-[#003366] text-white hover:bg-blue-900 shadow-blue-900/20" href="#">
            Start Free Trial
            <svg aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="w-full sm:w-auto px-8 py-4 backdrop-blur-md border rounded-xl font-medium transition-all shadow-sm bg-white/80 text-slate-700 border-slate-200 hover:bg-white hover:border-blue-200" href="#">
            Explore Modules
        </a>
</div>
</div>
</section>

<section className="py-12 border-y border-slate-100 bg-slate-50/50">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="flex flex-col items-center text-center">
<div className="p-3 rounded-xl mb-4 bg-blue-50 text-blue-700">
<svg aria-hidden="true" className="lucide lucide-cloud w-6 h-6" data-lucide="cloud" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>
</div>
<h3 className="text-base font-semibold mb-1 text-slate-900">Cloud-Based</h3>
<p className="text-sm text-slate-500">Access anywhere, anytime</p>
</div>
<div className="flex flex-col items-center text-center">
<div className="p-3 rounded-xl mb-4 bg-amber-50 text-amber-600">
<svg aria-hidden="true" className="lucide lucide-plug w-6 h-6" data-lucide="plug" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22v-5"></path><path d="M15 8V2"></path><path d="M17 8a1 1 0 0 1 1 1v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1z"></path><path d="M9 8V2"></path></svg>
</div>
<h3 className="text-base font-semibold mb-1 text-slate-900">SAP Integrated</h3>
<p className="text-sm text-slate-500">Seamless B1 connectivity</p>
</div>
<div className="flex flex-col items-center text-center">
<div className="p-3 rounded-xl mb-4 bg-slate-100 text-slate-600">
<svg aria-hidden="true" className="lucide lucide-zap w-6 h-6" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="text-base font-semibold mb-1 text-slate-900">Quick Setup</h3>
<p className="text-sm text-slate-500">Deploy in minutes</p>
</div>
<div className="flex flex-col items-center text-center">
<div className="p-3 rounded-xl mb-4 bg-blue-100 text-[#003366]">
<svg aria-hidden="true" className="lucide lucide-shield-check w-6 h-6" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="text-base font-semibold mb-1 text-slate-900">Enterprise Ready</h3>
<p className="text-sm text-slate-500">Secure &amp; scalable</p>
</div>
</div>
</div>
</section>

<section className="pt-24 pb-12 text-center">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4 text-[#003366]">
            Powerful Modules for Every Need
        </h2>
<p className="text-lg text-slate-500">Choose the tools that fit your business workflow, powered by Consensus International</p>
</section>

<section className="lg:pt-18 lg:pb-18 pt-20 pb-20">
<div className="overflow-hidden isolate bg-gradient-to-br max-w-7xl rounded-3xl mr-auto ml-auto pt-16 pr-6 pb-16 pl-6 relative shadow-2xl from-white via-blue-50/50 to-slate-50">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-200/20 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-amber-200/10 rounded-full blur-[120px]"></div>
</div>
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="relative group perspective-normal">

<div className="relative rounded-2xl overflow-hidden shadow-2xl border aspect-[4/3] bg-[#003366] border-blue-900">
<img alt="SAP Business One Background" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-40 transition duration-700 mix-blend-overlay" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>

<div className="flex pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<div className="relative w-[85%] h-[85%] rounded-xl overflow-hidden shadow-2xl ring-1 group-hover:scale-105 transition duration-500 ease-out transform bg-slate-950 ring-white/10">
<img alt="AI Interface" className="object-cover w-full h-full opacity-90" src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>

<div className="absolute inset-0 bg-slate-50 flex items-center justify-center overflow-hidden">
<img alt="Chat Interface Preview" className="w-full h-full object-contain" src="image (11).png"/>
</div>

<div className="absolute bottom-6 left-6 right-6">
</div>
</div>
</div>
</div>
</div>

<div className="relative">
<div className="flex shadow-blue-100/50 text-blue-700 bg-white w-12 h-12 border-blue-100 border rounded-xl mb-6 shadow-lg items-center justify-center">
<svg aria-hidden="true" className="lucide lucide-bot w-6 h-6" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2024"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</div>
<h3 className="text-3xl font-semibold tracking-tight mb-2 text-slate-900">AI Assistant</h3>
<p className="text-lg mb-6 font-medium text-blue-700">Your Intelligent Business Partner</p>
<p className="mb-8 leading-relaxed text-slate-600">
                Chat with an AI bot directly connected to your SAP Business One database. Retrieve information instantly, generate insights, and even create transactions through natural language conversations.
            </p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-slate-600">
<svg aria-hidden="true" className="lucide lucide-check-circle-2 w-5 h-5 text-amber-500 mt-0.5 shrink-0" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                    Natural language queries
                </li>
<li className="flex items-start gap-3 text-slate-600">
<svg aria-hidden="true" className="lucide lucide-check-circle-2 w-5 h-5 text-amber-500 mt-0.5 shrink-0" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                    Real-time B1 data access
                </li>
<li className="flex items-start gap-3 text-slate-600">
<svg aria-hidden="true" className="lucide lucide-check-circle-2 w-5 h-5 text-amber-500 mt-0.5 shrink-0" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                    Create transactions via chat
                </li>
</ul>
<a className="inline-flex items-center gap-2 font-medium transition-colors group text-blue-700 hover:text-blue-900" href="#">
                Get Started <svg aria-hidden="true" className="lucide lucide-chevron-right w-4 h-4 group-hover:translate-x-0.5 transition-transform" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-24 bg-slate-50">
<div className="max-w-7xl mx-auto rounded-3xl p-8 lg:p-16 shadow-2xl bg-gradient-to-br from-white via-slate-50 to-blue-50/30">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="order-2 lg:order-1">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-white text-amber-600 shadow-sm border border-amber-100">
<svg aria-hidden="true" className="lucide lucide-database w-6 h-6" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
</div>
<h3 className="text-3xl font-semibold text-slate-900 tracking-tight mb-2">Documents and Reports Hub</h3>
<p className="text-lg text-slate-600 mb-6 font-medium">Connect, Query, and Report with Ease</p>
<p className="mb-8 leading-relaxed text-slate-600">
                        Access your SAP Business One database directly through our secure cloud proxy. Generate custom reports, run complex queries, and extract critical business insights without the need for on-premise infrastructure.
                    </p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-slate-700 font-medium">
<svg aria-hidden="true" className="lucide lucide-check-circle-2 w-5 h-5 text-amber-500 mt-0.5 shrink-0" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                            Direct database connectivity
                        </li>
<li className="flex items-start gap-3 text-slate-700 font-medium">
<svg aria-hidden="true" className="lucide lucide-check-circle-2 w-5 h-5 text-amber-500 mt-0.5 shrink-0" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                            Custom report generation
                        </li>
<li className="flex items-start gap-3 text-slate-700 font-medium">
<svg aria-hidden="true" className="lucide lucide-check-circle-2 w-5 h-5 text-amber-500 mt-0.5 shrink-0" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                            Secure cloud-based queries
                        </li>
</ul>
<a className="inline-flex items-center gap-2 font-medium transition-colors text-amber-700 hover:text-amber-900" href="#">
                        Learn More <svg aria-hidden="true" className="lucide lucide-chevron-right w-4 h-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>

<div className="order-1 lg:order-2 relative group">
<div className="absolute -inset-2 bg-gradient-to-l rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-1000 from-amber-100 to-blue-100"></div>
<div className="relative rounded-2xl overflow-hidden shadow-2xl border aspect-[4/3] flex items-center justify-center p-6 bg-white border-white/40">

<div className="w-full h-full rounded-xl overflow-hidden flex flex-col p-5 bg-[#f3f6f9] text-slate-600 font-sans shadow-sm border border-slate-200">

<div className="flex items-center gap-2 mb-4 text-[10px] text-slate-400 font-medium select-none">
<svg className="lucide lucide-home" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
<span className="text-slate-300">/</span>
<span>Reports</span>
<span className="text-slate-300">/</span>
<span className="text-slate-500 font-semibold">Reports and Layouts</span>
</div>

<h2 className="text-xl font-bold text-slate-800 mb-5 tracking-tight">Reports and Layouts</h2>

<div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4 flex-1 w-full relative overflow-hidden flex flex-col">
<div className="grid grid-cols-2 gap-4 h-full">

<div className="flex flex-col gap-1.5">
<label className="text-[10px] font-semibold text-slate-500">SAP Connection</label>
<div className="bg-[#f8fafc] border border-slate-200 rounded-md px-3 py-2 flex items-center justify-between shadow-sm hover:border-slate-300 transition-colors cursor-pointer">
<span className="text-xs font-medium text-slate-700 truncate pr-2">SBODEMOUS (SBODEMOUS)</span>
<svg className="lucide lucide-chevron-down text-slate-400" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>

<div className="flex flex-col gap-1.5 z-10 h-full">
<label className="text-[10px] font-semibold text-slate-500">Reports and layouts</label>

<div className="bg-[#f8fafc] rounded-md shadow-lg border border-slate-200 overflow-hidden flex flex-col w-full h-full relative">

<div className="px-3 py-2 flex items-center justify-between border-b border-slate-200 bg-[#f1f5f9] shrink-0">
<span className="text-xs text-slate-500 truncate">Select a report or layout...</span>
<svg className="lucide lucide-chevron-up text-slate-400" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m18 15-6-6-6 6"></path></svg>
</div>

<div className="flex flex-col overflow-y-auto scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent bg-white h-full">

<div className="bg-blue-600 px-3 py-2 border-b border-blue-500 shrink-0">
<span className="text-xs font-medium text-white truncate block">Select a report or layout...</span>
</div>

<div className="bg-white hover:bg-slate-50 px-3 py-2 border-b border-slate-100 cursor-pointer group transition-colors">
<div className="text-[11px] font-bold text-slate-800 mb-0.5 group-hover:text-blue-600">A/P Credit Memo (Items)</div>
<div className="text-[9px] text-slate-400 truncate font-medium">A/P Credit Memo (Items) - CR (US) (System) (default)</div>
</div>
<div className="bg-white hover:bg-slate-50 px-3 py-2 border-b border-slate-100 cursor-pointer group transition-colors">
<div className="text-[11px] font-bold text-slate-800 mb-0.5 group-hover:text-blue-600">A/R Credit Memo</div>
<div className="text-[9px] text-slate-400 truncate font-medium">A/R Credit Memo (Service) - CR (US) (System) (default)</div>
</div>
<div className="bg-white hover:bg-slate-50 px-3 py-2 border-b border-slate-100 cursor-pointer group transition-colors">
<div className="text-[11px] font-bold text-slate-800 mb-0.5 group-hover:text-blue-600">A/R Invoice (Items)</div>
<div className="text-[9px] text-slate-400 truncate font-medium">A/R Invoice (Item) - CR (US) (System) (default)</div>
</div>
<div className="bg-white hover:bg-slate-50 px-3 py-2 cursor-pointer group transition-colors">
<div className="text-[11px] font-bold text-slate-800 mb-0.5 group-hover:text-blue-600">Bin Location List</div>
<div className="text-[9px] text-slate-400 truncate font-medium">Bin Location List - CR (System) (default)</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="lg:py-24 pt-20 pb-20">
<div className="max-w-7xl mx-auto rounded-3xl bg-gradient-to-br p-8 lg:p-16 shadow-2xl from-blue-50 via-white to-blue-50/20">
<div className="grid lg:grid-cols-2 gap-16 gap-x-16 gap-y-16 items-center">

<div className="relative group">
<div className="absolute -inset-2 bg-gradient-to-r rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-1000 from-blue-100 to-indigo-100"></div>
<div className="relative rounded-2xl overflow-hidden shadow-2xl border aspect-[4/3] flex items-center justify-center bg-white border-slate-200">
<img alt="Signing Documents" className="object-cover w-full h-full hover:scale-105 transition duration-700" src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
</div>

<div className="">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-[#003366] text-white">
<svg aria-hidden="true" className="lucide lucide-pen-tool w-6 h-6" data-lucide="pen-tool" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path><path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"></path><path d="m2.3 2.3 7.286 7.286"></path><circle cx="11" cy="11" r="2"></circle></svg>
</div>
<h3 className="text-3xl font-semibold tracking-tight mb-2 text-slate-900">DocuSign Integration</h3>
<p className="text-lg text-slate-500 mb-6 font-medium">Electronic Signatures Made Simple</p>
<p className="mb-8 leading-relaxed text-slate-600">
                        Send documents directly from SAP Business One transactions to DocuSign for electronic signatures. Automatically update your database when documents are signed.
                    </p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-slate-600">
<svg aria-hidden="true" className="lucide lucide-check-circle-2 w-5 h-5 mt-0.5 shrink-0 text-blue-700" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                            Send from B1 transactions
                        </li>
<li className="flex items-start gap-3 text-slate-600">
<svg aria-hidden="true" className="lucide lucide-check-circle-2 w-5 h-5 mt-0.5 shrink-0 text-blue-700" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                            Webhook signature updates
                        </li>
<li className="flex items-start gap-3 text-slate-600">
<svg aria-hidden="true" className="lucide lucide-check-circle-2 w-5 h-5 mt-0.5 shrink-0 text-blue-700" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                            Complete audit trail
                        </li>
</ul>
<a className="inline-flex items-center gap-2 font-medium transition-colors text-blue-700 hover:text-blue-900" href="#">
                        Get Started <svg aria-hidden="true" className="lucide lucide-chevron-right w-4 h-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-24 bg-white border-t border-slate-100">
<div className="max-w-7xl mx-auto rounded-3xl p-8 lg:p-16 shadow-2xl bg-[linear-gradient(110deg,#f1f5f9,#ffffff,#e2e8f0,#dbeafe)]">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="order-1">
<div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 bg-blue-600 text-white shadow-lg shadow-blue-200">
<svg aria-hidden="true" className="lucide lucide-file-text" data-lucide="file-text" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
</div>
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight mb-2 text-slate-900">Document Automation</h3>
<p className="text-lg text-slate-500 mb-6 font-medium">AI-Powered Document Processing</p>
<p className="mb-8 leading-relaxed text-slate-600 text-lg">
                        Automatically ingest PDF invoices and purchase orders to create documents in SAP Business One. Our AI extracts key information with precision, reducing manual data entry and accelerating your accounts payable workflow.
                    </p>
<ul className="space-y-4 mb-10">
<li className="flex gap-3 font-medium text-slate-700 gap-x-3 gap-y-3 items-center">
<svg className="lucide lucide-check-circle-2 w-6 h-6 text-blue-600 fill-blue-50" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                            Intelligent PDF extraction
                        </li><li className="flex gap-3 font-medium text-slate-700 gap-x-3 gap-y-3 items-center">
<svg className="lucide lucide-check-circle-2 w-6 h-6 text-blue-600 fill-blue-50" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle className="" cx="12" cy="12" r="10"></circle><path className="" d="m9 12 2 2 4-4"></path></svg>
    Auto-create B1 documents
</li>
<li className="flex gap-3 font-medium text-slate-700 gap-x-3 gap-y-3 items-center">
<svg className="lucide lucide-check-circle-2 w-6 h-6 text-blue-600 fill-blue-50" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                            Invoice &amp; PO processing
                        </li>
</ul>
<a className="inline-flex items-center justify-center px-8 py-3 rounded-lg font-semibold transition-all border-2 border-blue-600 text-blue-700 hover:bg-blue-50 bg-white/60 backdrop-blur-sm" href="#">
                        Get Started
                    </a>
</div>

<div className="order-2">
<div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group">
<div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
<img alt="Document Processing" className="transform group-hover:scale-105 transition duration-700 w-full h-full object-contain" src="image 2.png"/>
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 pt-24 pb-24" id="pricing">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4 text-[#003366]">
                    Simple, Transparent Pricing
                </h2>
<p className="text-lg text-slate-500">Choose the plan that fits your business needs</p>
</div>
<div className="grid lg:grid-cols-3 gap-8">

<div className="rounded-2xl p-8 border shadow-sm hover:shadow-lg transition-shadow bg-white border-slate-200">
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-6 bg-blue-50 text-blue-700">
<svg aria-hidden="true" className="lucide lucide-zap w-5 h-5" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Standard</h3>
<p className="text-sm text-slate-500 mb-6">Perfect for small teams</p>
<div className="flex gap-1 mb-8 gap-x-1 gap-y-1 items-baseline">
<span className="text-4xl font-semibold text-slate-900 tracking-tight">$499</span>
<span className="text-slate-500">/month (billed annually)</span>
</div>
<ul className="space-y-4 mb-8 text-sm">
<li className="flex text-slate-600 gap-x-3 gap-y-3 items-center">Documents and Reports Hub</li>
<li className="flex items-center gap-3 text-slate-600">
<svg aria-hidden="true" className="lucide lucide-check-circle w-4 h-4 text-amber-500" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg> Up to 100 queries/mo
                        </li>
<li className="flex items-center gap-3 text-slate-600">
<svg aria-hidden="true" className="lucide lucide-check-circle w-4 h-4 text-amber-500" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg> 5 custom reports
                        </li>
</ul>
<a className="block w-full py-3 text-center border rounded-lg font-medium transition-colors text-blue-700 border-blue-200 hover:bg-blue-50" href="#">Start Free Trial</a>
</div>

<div className="rounded-2xl p-8 border-2 shadow-xl relative scale-105 z-10 bg-white border-[#003366]">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-amber-400 text-slate-900 shadow-md">Most Popular</div>
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-6 bg-[#003366] text-white">
<svg aria-hidden="true" className="lucide lucide-star w-5 h-5" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Pro Plus</h3>
<p className="text-sm text-slate-500 mb-6">For growing businesses</p>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-5xl font-semibold text-slate-900 tracking-tight">$999</span>
<span className="text-slate-500">/month (billed annually)</span>
</div>
<ul className="space-y-4 mb-8 text-sm">
<li className="flex items-center gap-3 font-medium text-slate-900">
<svg aria-hidden="true" className="lucide lucide-check-circle w-4 h-4 text-blue-700" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg> Everything in Standard
                        </li>
<li className="flex items-center gap-3 text-slate-600">
<svg aria-hidden="true" className="lucide lucide-check-circle w-4 h-4 text-amber-500" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg> DocuSign Integration
                        </li>
<li className="flex items-center gap-3 text-slate-600">
<svg aria-hidden="true" className="lucide lucide-check-circle w-4 h-4 text-amber-500" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg> Document Automation
                        </li>
</ul>
<a className="block w-full py-3 text-center rounded-lg font-medium transition-colors shadow-lg bg-[#003366] text-white hover:bg-blue-900 shadow-blue-900/20" href="#">Start Free Trial</a>
</div>

<div className="rounded-2xl p-8 border shadow-sm hover:shadow-lg transition-shadow bg-white border-slate-200">
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-6 bg-slate-100 text-slate-600">
<svg aria-hidden="true" className="lucide lucide-building w-5 h-5" data-lucide="building" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M12 6h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M16 6h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path><path d="M8 6h.01"></path><path d="M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"></path><rect height="20" rx="2" width="16" x="4" y="2"></rect></svg>
</div>
<h3 className="text-xl font-semibold mb-2 text-slate-900">Enterprise</h3>
<p className="text-sm text-slate-500 mb-6">For large organizations</p>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-4xl font-semibold tracking-tight text-slate-900">Custom</span>
</div>
<ul className="space-y-4 mb-8 text-sm">
<li className="flex items-center gap-3 text-slate-600">
<svg aria-hidden="true" className="lucide lucide-check-circle w-4 h-4 text-amber-500" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg> Everything in Pro
                        </li>
<li className="flex items-center gap-3 text-slate-600">
<svg aria-hidden="true" className="lucide lucide-check-circle w-4 h-4 text-amber-500" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg> Custom integrations
                        </li>
<li className="flex items-center gap-3 text-slate-600">
<svg aria-hidden="true" className="lucide lucide-check-circle w-4 h-4 text-amber-500" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg> Dedicated support manager
                        </li>
</ul>
<a className="block w-full py-3 text-center border rounded-lg font-medium transition-colors text-slate-700 border-slate-200 hover:bg-slate-50" href="#">Contact Sales</a>
</div>
</div>
<p className="flex items-center justify-center gap-2 text-sm text-slate-400 text-center mt-8"><svg aria-hidden="true" className="lucide lucide-shield-check w-4 h-4" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg> Billed annually.</p>
</div>
</section>

<section className="pt-24 pb-24 text-slate-900 bg-gradient-to-br from-white via-slate-50 to-blue-50">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4 text-[#003366]">Why Choose Consensus?</h2>
<p className="text-lg text-slate-600">Built by SAP experts, trusted by businesses worldwide</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="p-8 border rounded-2xl transition-all bg-white border-slate-200 shadow-sm hover:shadow-md hover:border-blue-200">
<div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4 text-blue-700">
<svg aria-hidden="true" className="lucide lucide-settings w-5 h-5" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
<h3 className="text-lg font-semibold mb-2 text-slate-900">Deep SAP Integration</h3>
<p className="text-sm leading-relaxed text-slate-500">Built specifically for SAP Business One with native integration and expert understanding of B1 workflows.</p>
</div>

<div className="p-8 border rounded-2xl transition-all bg-white border-slate-200 shadow-sm hover:shadow-md hover:border-amber-200">
<div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center mb-4 text-amber-600">
<svg aria-hidden="true" className="lucide lucide-users w-5 h-5" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<h3 className="text-lg font-semibold mb-2 text-slate-900">Multi-Tenant SaaS</h3>
<p className="text-sm leading-relaxed text-slate-500">Secure, scalable architecture supporting multiple organizations with complete data isolation.</p>
</div>

<div className="p-8 border rounded-2xl transition-all bg-white border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300">
<div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center mb-4 text-slate-600">
<svg aria-hidden="true" className="lucide lucide-headphones w-5 h-5" data-lucide="headphones" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path></svg>
</div>
<h3 className="text-lg font-semibold mb-2 text-slate-900">Expert Support</h3>
<p className="text-sm leading-relaxed text-slate-500">Backed by Consensus International's decades of SAP implementation experience and expertise.</p>
</div>

<div className="p-8 border rounded-2xl transition-all bg-white border-slate-200 shadow-sm hover:shadow-md hover:border-blue-200">
<div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4 text-blue-700">
<svg aria-hidden="true" className="lucide lucide-refresh-cw w-5 h-5" data-lucide="refresh-cw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path></svg>
</div>
<h3 className="text-lg font-semibold mb-2 text-slate-900">Always Updated</h3>
<p className="text-sm leading-relaxed text-slate-500">Cloud-based deployment ensures you always have access to the latest features and security updates.</p>
</div>

<div className="p-8 border rounded-2xl transition-all bg-white border-slate-200 shadow-sm hover:shadow-md hover:border-amber-200">
<div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center mb-4 text-amber-600">
<svg aria-hidden="true" className="lucide lucide-trending-up w-5 h-5" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<h3 className="text-lg font-semibold mb-2 text-slate-900">Boost Productivity</h3>
<p className="text-sm leading-relaxed text-slate-500">Automate repetitive tasks and reduce manual data entry to focus on strategic business decisions.</p>
</div>

<div className="p-8 border rounded-2xl transition-all bg-white border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300">
<div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center mb-4 text-slate-600">
<svg aria-hidden="true" className="lucide lucide-lock w-5 h-5" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</div>
<h3 className="text-lg font-semibold mb-2 text-slate-900">Enterprise Security</h3>
<p className="text-sm leading-relaxed text-slate-500">Bank-grade encryption, role-based access control, and compliance with industry security standards.</p>
</div>
</div>
</div>
</section>

<section className="pt-24 pb-24">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-center tracking-tight mb-4 text-[#003366]">Frequently Asked Questions</h2>
<p className="text-center text-slate-500 mb-12">Everything you need to know about Consensus Cloud Apps</p>
<div className="space-y-4">

<details className="group border rounded-xl open:ring-2 open:ring-blue-100 open:border-blue-200 transition-all border-slate-200 bg-white">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none">
<div className="flex items-center gap-3 font-medium text-slate-900">
<svg aria-hidden="true" className="lucide lucide-help-circle w-5 h-5 text-blue-700" data-lucide="help-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
                            What is Consensus Cloud Apps?
                        </div>
<svg aria-hidden="true" className="lucide lucide-chevron-down w-5 h-5 group-open:rotate-180 transition-transform text-slate-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="px-6 pb-6 leading-relaxed pl-14 text-slate-600">
                        Consensus Cloud Apps is a suite of cloud-based modules designed specifically for SAP Business One users. Our platform provides document automation, electronic signatures, AI-powered insights, and advanced reporting capabilities to streamline your business operations.
                    </div>
</details>

<details className="group border rounded-xl transition-all border-slate-200 bg-white hover:border-slate-300">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none">
<div className="flex items-center gap-3 font-medium text-slate-900">
<svg aria-hidden="true" className="lucide lucide-help-circle w-[20px] h-[20px] text-blue-700" data-icon-replaced="true" data-lucide="help-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
                            How long does implementation take?
                        </div>
<svg aria-hidden="true" className="lucide lucide-chevron-down w-5 h-5 group-open:rotate-180 transition-transform text-slate-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="px-6 pb-6 leading-relaxed pl-14 text-slate-600">
                        Most modules can be deployed within minutes. Our B1 Proxy module connects securely to your database, and features like the AI Assistant are ready to use immediately after configuration.
                    </div>
</details>

<details className="group border rounded-xl transition-all border-slate-200 bg-white hover:border-slate-300">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none">
<div className="flex items-center gap-3 font-medium text-slate-900">
<svg aria-hidden="true" className="lucide lucide-help-circle w-[20px] h-[20px] text-blue-700" data-icon-replaced="true" data-lucide="help-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
                            Do I need to install anything on-premise?
                        </div>
<svg aria-hidden="true" className="lucide lucide-chevron-down w-5 h-5 group-open:rotate-180 transition-transform text-slate-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="px-6 pb-6 leading-relaxed pl-14 text-slate-600">
                        No heavy infrastructure is required. A lightweight connector agent may be needed depending on your SAP B1 hosting environment (SQL or HANA), but the core application logic runs entirely in our secure cloud.
                    </div>
</details>

<details className="group border rounded-xl transition-all border-slate-200 bg-white hover:border-slate-300">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none">
<div className="flex items-center gap-3 font-medium text-slate-900">
<svg aria-hidden="true" className="lucide lucide-help-circle w-[20px] h-[20px] text-blue-700" data-icon-replaced="true" data-lucide="help-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
                            Is my data secure?
                        </div>
<svg aria-hidden="true" className="lucide lucide-chevron-down group-open:rotate-180 transition-transform w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(148, 163, 184)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="px-6 pb-6 leading-relaxed pl-14 text-slate-600">
                        Absolutely. We use bank-grade TLS encryption for all data in transit and rest. We do not store your core business data; we only process it securely to provide the requested services.
                    </div>
</details>
</div>
</div>
</section>

<section className="bg-slate-50 border-slate-200 border-t pt-24 pb-24">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 text-[#003366]">
                Ready to Transform Your Business?
            </h2>
<p className="text-xl text-slate-500 mb-10 max-w-2xl mx-auto">
                Join businesses already leveraging the power of Consensus Cloud Apps for SAP Business One.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 rounded-xl font-medium transition-all shadow-lg bg-[#003366] text-white hover:bg-blue-900 shadow-blue-900/20" href="#">
                    Start Your Free Trial
                </a>
<a className="w-full sm:w-auto px-8 py-4 border rounded-xl font-medium transition-colors bg-white text-slate-700 border-slate-200 hover:bg-slate-50" href="#">
                    Contact Sales
                </a>
</div>
<p className="text-sm mt-6 text-slate-400">No credit card required • Full feature access • Cancel anytime</p>
</div>
</section>

<footer className="bg-white border-slate-200 border-t pt-16 pb-12">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
<div className="col-span-2 lg:col-span-2">
<div className="flex mb-6 items-center">
<a className="inline-flex items-center gap-3 group select-none h-10" href="#">
<img alt="Consensus Cloud Apps" className="w-auto h-full object-contain" src="COUD APPS COLOUR PNG FILE with dark Consensus (horizontal).png"/>
</a>
</div>
<p className="text-base text-slate-500 max-w-xs mb-6">Empowering SAP Business One users with next-generation cloud tools for automation, AI, and analytics. Cloud Apps is developed by Consensus International, an SAP Premier Partner with 35+ years of experience across the U.S., Europe, and Latin America.</p>
<div className="flex gap-x-4 gap-y-4">
<a className="transition-colors text-slate-400 hover:text-blue-700" href="#"><svg aria-hidden="true" className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="transition-colors text-slate-400 hover:text-blue-700" href="#"><svg aria-hidden="true" className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
<a className="transition-colors text-slate-400 hover:text-blue-700" href="#"><svg aria-hidden="true" className="lucide lucide-github w-5 h-5" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg></a>
</div>
</div>
<div className="">
<h4 className="font-semibold mb-4 text-[#003366] text-lg">Product</h4>
<ul className="space-y-3 text-base text-slate-500">
<li className=""><a className="hover:text-blue-700" href="#">AI Assistant</a></li>
<li className=""><a className="hover:text-blue-700" href="#">B1 Proxy</a></li>
<li className=""><a className="hover:text-blue-700" href="#">DocuSign</a></li>
</ul>
</div>
<div className="">
<h4 className="font-semibold mb-4 text-[#003366] text-lg">Company</h4>
<ul className="space-y-3 text-base text-slate-500">
<li className=""><a className="hover:text-blue-700" href="#">About</a></li>
<li className=""><a className="hover:text-blue-700" href="#">Blog</a></li>
<li className=""><a className="hover:text-blue-700" href="#">Careers</a></li>
</ul>
</div>
<div className="">
<h4 className="font-semibold mb-4 text-[#003366] text-lg">Legal</h4>
<ul className="space-y-3 text-base text-slate-500">
<li className=""><a className="hover:text-blue-700" href="#">Privacy Policy</a></li>
<li className=""><a className="hover:text-blue-700" href="#">Terms of Service</a></li>
<li className=""><a className="hover:text-blue-700" href="#">Cookie Policy</a></li>
</ul>
</div>
</div>
<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-base border-slate-100 text-slate-400">
<p className="">© 2026 Consensus International. All rights reserved.</p>
<div className="flex items-center gap-6">
<span className="flex items-center gap-2"><svg aria-hidden="true" className="lucide lucide-circle-dot w-3 h-3 text-green-500" data-lucide="circle-dot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="1"></circle></svg> Systems Operational</span>
</div>
</div>
<div className="mt-8 pt-8 border-t border-slate-100/50">
<p className="leading-relaxed text-xs text-slate-400 text-center">Cloud Apps is an independent solution developed by Consensus International. It is not affiliated with, endorsed by, or sponsored by SAP or SAP Business One.                                                   SAP and SAP Business One are trademarks or registered trademarks of SAP or its affiliates.</p>
</div>
</div>
</footer>


    </>
  );
}
