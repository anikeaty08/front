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
      

<nav className="fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-xl border-gray-200 bg-white/80">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<span className="text-lg font-normal tracking-tighter">SHAHSHI.AI</span>
<a className="px-5 py-2 text-xs font-normal bg-[#DF0D85] rounded-full hover:bg-[#c20b74] transition-colors shadow-[0_0_15px_rgba(223,13,133,0.3)] text-white" href="mailto:dgupta@shashigroup.com">
          Request Demo
        </a>
</div>
</nav>

<section className="flex flex-col overflow-hidden lg:pt-48 lg:pb-24 text-center pt-32 pr-6 pb-20 pl-6 relative shadow-[0_20px_40px_rgba(0,0,0,0.05)] blur-none items-center">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#DF0D85]/15 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-8 backdrop-blur-sm bg-gray-100 border-gray-300">
<div className="w-2 h-2 rounded-full bg-[#DF0D85] animate-pulse"></div>
<span className="text-xs font-normal text-gray-600">
          Platform v2.0 Live
        </span>
</div>
<h1 className="md:text-6xl lg:text-7xl leading-tight text-4xl font-medium tracking-tight max-w-4xl mr-auto ml-auto text-gray-900">
        Hospitality Reimagined:
        <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r to-gray-400 from-gray-900">
          The Agentic AI Era
        </span>
</h1>
<p className="mt-6 text-base md:text-lg max-w-2xl mx-auto leading-relaxed text-gray-500">
        Orchestrate, personalize, and elevate every guest interaction with an
        AI-native intelligent layer that sits above your operational stack.
      </p>
<div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
<a className="px-7 py-3.5 text-sm font-normal bg-[#DF0D85] rounded-full hover:shadow-[0_0_25px_rgba(223,13,133,0.5)] transition-all w-full sm:w-auto text-white" href="mailto:dgupta@shashigroup.com">
          Request a Demo
        </a>
<a className="px-7 py-3.5 text-sm font-normal border rounded-full transition-all w-full sm:w-auto bg-gray-100 border-gray-300 text-gray-900 hover:bg-gray-200" href="#architecture">
          View Architecture
        </a>
</div>

<div className="mt-20 w-full max-w-5xl mx-auto relative group perspective-1000">
<div className="absolute inset-0 bg-gradient-to-b from-[#DF0D85]/20 to-transparent blur-3xl rounded-[2.5rem] -z-10"></div>
</div>
</section>

<section className="z-10 border-t py-12 relative bg-gray-50 border-gray-200">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-8">
<p className="uppercase text-xs font-medium text-gray-400 tracking-widest">
            Trusted by teams at
          </p>
</div>

<div className="overflow-hidden relative" style={{maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'}}>

<div className="ticker-track flex w-max items-center">

<div className="flex gap-16 shrink-0 items-center pr-16">
<div className="flex items-center gap-3 transition-colors duration-300 text-gray-500 hover:text-gray-900">
<span className="text-lg font-normal tracking-tighter">
                  TechFlow
                </span>
</div>
<div className="flex items-center gap-3 transition-colors duration-300 text-gray-500 hover:text-gray-900">
<span className="text-lg font-medium tracking-tighter">
                  Nexus Labs
                </span>
</div>
<div className="flex items-center gap-3 transition-colors duration-300 text-gray-500 hover:text-gray-900">
<span className="text-lg font-normal tracking-tighter">
                  DataSync
                </span>
</div>
<div className="flex items-center gap-3 transition-colors duration-300 text-gray-500 hover:text-gray-900">
<span className="text-lg font-medium tracking-tighter">
                  VisionCorp
                </span>
</div>
<div className="flex items-center gap-3 transition-colors duration-300 text-gray-500 hover:text-gray-900">
<span className="text-lg font-normal tracking-tighter">
                  CloudBase
                </span>
</div>
<div className="flex items-center gap-3 transition-colors duration-300 text-gray-500 hover:text-gray-900">
<span className="text-lg font-medium tracking-tighter">
                  InnovateTech
                </span>
</div>
<div className="flex items-center gap-3 transition-colors duration-300 text-gray-500 hover:text-gray-900">
<span className="text-lg font-normal tracking-tighter">
                  FlowState
                </span>
</div>
</div>

<div className="flex gap-16 shrink-0 items-center pr-16">
<div className="flex items-center gap-3 transition-colors duration-300 text-gray-500 hover:text-gray-900">
<span className="text-lg font-normal tracking-tighter">
                  TechFlow
                </span>
</div>
<div className="flex items-center gap-3 transition-colors duration-300 text-gray-500 hover:text-gray-900">
<span className="text-lg font-medium tracking-tighter">
                  Nexus Labs
                </span>
</div>
<div className="flex items-center gap-3 transition-colors duration-300 text-gray-500 hover:text-gray-900">
<span className="text-lg font-normal tracking-tighter">
                  DataSync
                </span>
</div>
<div className="flex items-center gap-3 transition-colors duration-300 text-gray-500 hover:text-gray-900">
<span className="text-lg font-medium tracking-tighter">
                  VisionCorp
                </span>
</div>
<div className="flex items-center gap-3 transition-colors duration-300 text-gray-500 hover:text-gray-900">
<span className="text-lg font-normal tracking-tighter">
                  CloudBase
                </span>
</div>
<div className="flex items-center gap-3 transition-colors duration-300 text-gray-500 hover:text-gray-900">
<span className="text-lg font-medium tracking-tighter">
                  InnovateTech
                </span>
</div>
<div className="flex items-center gap-3 transition-colors duration-300 text-gray-500 hover:text-gray-900">
<span className="text-lg font-normal tracking-tighter">
                  FlowState
                </span>
</div>
</div>
</div>
</div>
</div>
</section><section className="border-t py-24 px-6 relative bg-white border-gray-200">
<div className="max-w-4xl mx-auto text-center">
<div className="text-xs font-medium text-[#DF0D85] uppercase tracking-widest mb-8">
      Who We Are
    </div>
<h2 className="md:text-5xl lg:text-6xl leading-tight text-4xl font-semibold text-gray-900 tracking-tight mb-10">
      Leading the Next Generation of Hospitality Technology
    </h2>
<div className="space-y-6">
<p className="text-2xl md:text-3xl font-medium tracking-tight text-gray-900 leading-snug">
        Shashi AI is redefining how guest experiences are delivered in modern hospitality.
      </p>
<p className="md:text-xl leading-relaxed text-lg font-normal text-gray-500 max-w-3xl mr-auto ml-auto">
        While traditional hospitality technology has focused on managing operations, we focus on managing experiences — empowering guests to personalize, manage, and control every aspect of their journey from any device, anywhere, anytime.
      </p>
</div>
</div>
</section>

<section className="border-t pt-24 pr-6 pb-24 pl-6 relative bg-gray-50 border-gray-200">
<div className="max-w-7xl mr-auto ml-auto">
<h2 className="md:text-4xl text-3xl font-medium tracking-tight text-center mb-16 text-gray-900 bg-gray-100 rounded-lg inline-block px-6 py-2 mx-auto block w-fit">
          Transforming the Tenets of Hospitality
        </h2>
<div className="grid lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-12 gap-x-8 gap-y-8 items-center">

<div className="lg:p-10 overflow-hidden group border rounded-2xl pt-8 pr-8 pb-8 pl-8 relative bg-white border-gray-300">
<div className="text-xs font-medium text-gray-400 mb-8 uppercase tracking-widest">
              Traditional State
            </div>
<ul className="space-y-8">
<li className="flex gap-5 group-hover:opacity-60 transition-opacity opacity-40 gap-x-5 gap-y-5 items-start">
<iconify-icon className="text-2xl mt-1 text-gray-500" icon="solar:users-group-two-rounded-linear"></iconify-icon>
<div className="">
<div className="font-normal text-base mb-1 text-gray-900">
                    Service
                  </div>
<div className="text-sm text-gray-400">
                    High Touch, Manual Effort
                  </div>
</div>
</li>
<li className="flex items-start gap-5 opacity-40 group-hover:opacity-60 transition-opacity">
<iconify-icon className="text-2xl mt-1 text-gray-500" icon="solar:star-linear"></iconify-icon>
<div className="">
<div className="font-normal text-base mb-1 text-gray-900">
                    Loyalty
                  </div>
<div className="text-sm text-gray-400">
                    Point-Based, Delayed Value
                  </div>
</div>
</li>
<li className="flex items-start gap-5 opacity-40 group-hover:opacity-60 transition-opacity">
<iconify-icon className="text-2xl mt-1 text-gray-500" icon="solar:buildings-linear"></iconify-icon>
<div className="">
<div className="font-normal text-base mb-1 text-gray-900">
                    Product
                  </div>
<div className="text-sm text-gray-400">
                    Physical Real Estate Only
                  </div>
</div>
</li>
</ul>
</div>

<div className="hidden lg:flex flex-col items-center justify-center text-gray-900/20">
<iconify-icon className="text-3xl text-[#DF0D85]/50" icon="solar:arrow-right-linear"></iconify-icon>
<div className="mt-6 flex flex-col items-center">
<div className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-2">
                Powered By
              </div>
<div className="relative px-4 py-2 rounded-full border border-[#DF0D85]/30 bg-[#DF0D85]/10 text-xs font-normal shadow-[0_0_20px_rgba(223,13,133,0.15)] backdrop-blur-sm whitespace-nowrap flex items-center gap-2 transition-transform hover:scale-105 text-gray-900">
<span className="w-1.5 h-1.5 rounded-full bg-[#DF0D85] animate-pulse shadow-[0_0_5px_rgba(223,13,133,0.8)]"></span>
                AI Hyper-Personalization
              </div>
</div>
</div>

<div className="bg-gradient-to-br from-[#DF0D85]/10 border border-[#DF0D85]/30 rounded-2xl p-8 lg:p-10 relative overflow-hidden shadow-[0_0_40px_rgba(223,13,133,0.05)] via-white to-white">
<div className="absolute top-0 right-0 w-48 h-48 bg-[#DF0D85]/20 blur-[80px] rounded-full pointer-events-none"></div>
<div className="text-xs font-medium text-[#DF0D85] mb-8 uppercase tracking-widest">
              Future State (shashi.ai)
            </div>
<ul className="space-y-8 relative z-10">
<li className="flex items-start gap-5">
<div className="w-8 h-8 rounded-lg bg-[#DF0D85]/10 border border-[#DF0D85]/20 flex items-center justify-center shrink-0">
<iconify-icon className="text-lg text-[#DF0D85]" icon="solar:cpu-bolt-linear"></iconify-icon>
</div>
<div className="">
<div className="font-normal text-base mb-1 text-gray-900">
                    Digital Services
                  </div>
<div className="text-sm text-gray-600">
                    Autonomous, AI-Driven Operations
                  </div>
</div>
</li>
<li className="flex items-start gap-5">
<div className="w-8 h-8 rounded-lg bg-[#DF0D85]/10 border border-[#DF0D85]/20 flex items-center justify-center shrink-0">
<iconify-icon className="text-lg text-[#DF0D85]" icon="solar:wallet-money-linear"></iconify-icon>
</div>
<div className="">
<div className="font-normal text-base mb-1 text-gray-900">
                    Digital Currency
                  </div>
<div className="text-sm text-gray-600">
                    Instant Real-Time Cash-Back
                  </div>
</div>
</li>
<li className="flex items-start gap-5">
<div className="w-8 h-8 rounded-lg bg-[#DF0D85]/10 border border-[#DF0D85]/20 flex items-center justify-center shrink-0">
<iconify-icon className="text-lg text-[#DF0D85]" icon="solar:devices-linear"></iconify-icon>
</div>
<div>
<div className="font-normal text-base mb-1 text-gray-900">
                    Digital Product
                  </div>
<div className="text-sm text-gray-600">
                    Hyper-Personalized Ecosystem
                  </div>
</div>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-white border-gray-200 border-t pt-24 pr-6 pb-24 pl-6 relative" id="architecture">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
<div className="lg:w-[45%]">
<div className="inline-block px-3 py-1 rounded-full border text-xs font-normal mb-6 bg-gray-100 border-gray-300 text-gray-500">
            Enterprise Architecture
          </div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6 leading-tight text-gray-900">
            AI-Native.
            <br/>
<span className="text-gray-400">Integration-First.</span>
</h2>
<p className="md:text-base leading-relaxed text-sm mb-8 text-gray-500">
            Deploying deep intelligence shouldn't mean ripping and replacing
            your core operational systems. SHASHI.AI acts as a non-destructive
            "Level 1" connective layer, seamlessly unifying fragmented data
            streams from your existing PMS, CRS, and CRM to power
            next-generation interfaces.
          </p>
<div className="space-y-4">
<div className="flex items-start gap-4 p-4 rounded-xl border bg-gray-100 border-gray-200">
<iconify-icon className="text-xl text-[#DF0D85] mt-0.5 shrink-0" icon="solar:database-linear"></iconify-icon>
<div className="">
<div className="text-sm font-normal mb-1 text-gray-900">
                  Unified Data Schemas
                </div>
<div className="text-xs text-gray-500">
                  Normalize legacy protocols into modern, queryable JSON
                  objects.
                </div>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-xl border bg-gray-100 border-gray-200">
<iconify-icon className="text-xl text-[#DF0D85] mt-0.5 shrink-0" icon="solar:bolt-linear"></iconify-icon>
<div className="">
<div className="text-sm font-normal mb-1 text-gray-900">
                  Real-Time Synchronization
                </div>
<div className="text-xs text-gray-500">
                  Bi-directional event streaming ensures state consistency
                  across all touchpoints.
                </div>
</div>
</div>
</div>
</div>

<div className="lg:w-[55%] w-full relative">

<div className="absolute inset-0 bg-gradient-to-tr from-[#DF0D85]/10 to-transparent blur-3xl -z-10 rounded-full"></div>
<div className="p-8 md:p-12 border rounded-[2rem] shadow-sm backdrop-blur-xl bg-gray-50 border-gray-300">

<div className="flex justify-between gap-3 mb-6">
<div className="flex-1 border rounded-xl py-5 text-center flex flex-col items-center justify-center gap-2 relative group bg-white border-gray-300">
<iconify-icon className="text-lg text-gray-400" icon="solar:server-linear"></iconify-icon>
<span className="text-xs font-normal uppercase tracking-wider text-gray-500">
                  PMS
                </span>
</div>
<div className="flex-1 border rounded-xl py-5 text-center flex flex-col items-center justify-center gap-2 relative group bg-white border-gray-300">
<iconify-icon className="text-lg text-gray-400" icon="solar:cloud-check-linear"></iconify-icon>
<span className="text-xs font-normal uppercase tracking-wider text-gray-500">
                  CRS
                </span>
</div>
<div className="flex-1 border rounded-xl py-5 text-center flex flex-col items-center justify-center gap-2 relative group bg-white border-gray-300">
<iconify-icon className="text-lg text-gray-400" icon="solar:users-group-rounded-linear"></iconify-icon>
<span className="text-xs font-normal uppercase tracking-wider text-gray-500">
                  CRM
                </span>
</div>
</div>

<div className="flex justify-around items-center h-10 mb-6 relative">

<div className="absolute inset-0 flex justify-around">
<div className="w-px bg-gradient-to-b to-[#DF0D85]/50 h-full from-gray-300"></div>
<div className="w-px bg-gradient-to-b to-[#DF0D85]/50 h-full from-gray-300"></div>
<div className="w-px bg-gradient-to-b to-[#DF0D85]/50 h-full from-gray-300"></div>
</div>
</div>

<div className="w-full bg-gradient-to-r from-[#DF0D85]/10 via-[#DF0D85]/5 to-[#DF0D85]/10 border border-[#DF0D85]/40 rounded-2xl p-8 text-center relative shadow-[0_0_40px_rgba(223,13,133,0.15)] overflow-hidden">

<div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent opacity-60 animate-[shimmer_3s_infinite] to-white/60"></div>
<div className="relative z-10 flex flex-col items-center">
<span className="text-lg font-medium tracking-tighter mb-1 text-gray-900">
                  shashi.ai
                </span>
<div className="text-xs text-[#DF0D85] font-normal tracking-wide uppercase">
                  Intelligent Agentic Layer
                </div>
<div className="mt-4 flex gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-[#DF0D85] animate-ping"></span>
<span className="w-1.5 h-1.5 rounded-full bg-[#DF0D85] opacity-50"></span>
<span className="w-1.5 h-1.5 rounded-full bg-[#DF0D85] opacity-20"></span>
</div>
</div>
</div>

<div className="flex justify-around items-center h-10 mt-6 relative">
<div className="absolute inset-0 flex justify-around">
<div className="w-px bg-gradient-to-b from-[#DF0D85]/50 h-full relative to-gray-300">
<div className="absolute bottom-0 w-2 h-2 rounded-full -translate-x-[3px] bg-gray-400"></div>
</div>
<div className="w-px bg-gradient-to-b from-[#DF0D85]/50 h-full relative to-gray-300">
<div className="absolute bottom-0 w-2 h-2 rounded-full -translate-x-[3px] bg-gray-400"></div>
</div>
<div className="w-px bg-gradient-to-b from-[#DF0D85]/50 h-full relative to-gray-300">
<div className="absolute bottom-0 w-2 h-2 rounded-full -translate-x-[3px] bg-gray-400"></div>
</div>
</div>
</div>

<div className="flex justify-between gap-3 mt-6">
<div className="flex-1 border rounded-xl py-5 flex flex-col items-center gap-3 transition-colors bg-gray-100 border-gray-300 hover:bg-gray-200">
<iconify-icon className="text-xl text-gray-900" icon="solar:smartphone-linear"></iconify-icon>
<span className="text-xs font-normal text-gray-600">
                  Mobile App
                </span>
</div>
<div className="flex-1 border rounded-xl py-5 flex flex-col items-center gap-3 transition-colors bg-gray-100 border-gray-300 hover:bg-gray-200">
<iconify-icon className="text-xl text-gray-900" icon="solar:tv-linear"></iconify-icon>
<span className="text-xs font-normal text-gray-600">
                  In-Room TV
                </span>
</div>
<div className="flex-1 border rounded-xl py-5 flex flex-col items-center gap-3 transition-colors bg-gray-100 border-gray-300 hover:bg-gray-200">
<iconify-icon className="text-xl text-gray-900" icon="solar:monitor-linear"></iconify-icon>
<span className="text-xs font-normal text-gray-600">
                  Web Portal
                </span>
</div>
</div>
</div>
</div>
</div>
</section><section className="border-t pt-24 pr-6 pb-24 pl-6 relative text-gray-800 bg-gray-100 border-gray-200">
<div className="max-w-7xl mr-auto ml-auto">
<div className="text-center mb-16 lg:mb-24">
<h2 className="md:text-4xl text-3xl font-medium text-gray-900 tracking-tight">The Agentic AI Experience Platform</h2>
<p className="md:text-base text-sm text-gray-500 max-w-2xl mt-4 mr-auto ml-auto">One Platform. Five Connected Products.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">

<div className="group border rounded-2xl p-6 md:p-8 hover:border-[#DF0D85]/30 transition-all duration-500 bg-gray-50 border-gray-200 hover:bg-gray-100">
<div className="w-10 h-10 rounded-xl border flex items-center justify-center mb-6 group-hover:border-[#DF0D85]/50 group-hover:bg-[#DF0D85]/5 transition-all bg-white border-gray-300">
<iconify-icon className="text-xl group-hover:text-[#DF0D85] transition-colors text-gray-600" icon="solar:calendar-date-linear"></iconify-icon>
</div>
<h3 className="text-base font-normal mb-3 tracking-tight text-gray-900">
              Frictionless Booking
            </h3>
<p className="text-sm leading-relaxed text-gray-500">
              3-click reservations natively integrated with Apple and Google
              Pay. Enhanced with AR/VR room previews and AI-driven availability
              recommendations.
            </p>
</div>

<div className="group border rounded-2xl p-6 md:p-8 hover:border-[#DF0D85]/30 transition-all duration-500 bg-gray-50 border-gray-200 hover:bg-gray-100">
<div className="w-10 h-10 rounded-xl border flex items-center justify-center mb-6 group-hover:border-[#DF0D85]/50 group-hover:bg-[#DF0D85]/5 transition-all bg-white border-gray-300">
<iconify-icon className="text-xl group-hover:text-[#DF0D85] transition-colors text-gray-600" icon="solar:key-minimalistic-linear"></iconify-icon>
</div>
<h3 className="text-base font-normal mb-3 tracking-tight text-gray-900">
              Autonomous Check-in
            </h3>
<p className="leading-relaxed text-sm text-gray-500">
              Bypass the front desk entirely. Secure mobile keys, dynamic
              passcode access, and intelligent self-service kiosks.
            </p>
</div>

<div className="group border rounded-2xl p-6 md:p-8 hover:border-[#DF0D85]/30 transition-all duration-500 bg-gray-50 border-gray-200 hover:bg-gray-100">
<div className="w-10 h-10 rounded-xl border flex items-center justify-center mb-6 group-hover:border-[#DF0D85]/50 group-hover:bg-[#DF0D85]/5 transition-all bg-white border-gray-300">
<iconify-icon className="text-xl group-hover:text-[#DF0D85] transition-colors text-gray-600" icon="solar:bed-linear"></iconify-icon>
</div>
<h3 className="text-base font-normal mb-3 tracking-tight text-gray-900">
              In-Room Digital Product
            </h3>
<p className="text-sm leading-relaxed text-gray-500">
              Deep IoT orchestration for HVAC and circadian lighting. shashi TV
              with a bespoke Netflix-style UX, complemented by an AI "Sleep
              Concierge".
            </p>
</div>

<div className="group rounded-2xl overflow-hidden relative border min-h-[300px] lg:min-h-full border-gray-200">
<img alt="Smart Device Integration" className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="bg-gradient-to-t to-transparent absolute top-0 right-0 bottom-0 left-0 from-black via-black/40"></div>
<div className="absolute bottom-6 left-6 right-6">
<div className="w-10 h-10 rounded-xl backdrop-blur-md border flex items-center justify-center mb-4 bg-black/60 border-white/20">
<iconify-icon className="text-xl text-white" icon="solar:augmented-reality-linear"></iconify-icon>
</div>
<h3 className="text-base font-normal mb-2 tracking-tight text-white">
                Immersive Environments
              </h3>
<p className="text-xs text-gray-300">
                Bridging the physical and digital gap natively within the space.
              </p>
</div>
</div>

<div className="group border rounded-2xl p-6 md:p-8 hover:border-[#DF0D85]/30 transition-all duration-500 bg-gray-50 border-gray-200 hover:bg-gray-100">
<div className="w-10 h-10 rounded-xl border flex items-center justify-center mb-6 group-hover:border-[#DF0D85]/50 group-hover:bg-[#DF0D85]/5 transition-all bg-white border-gray-300">
<iconify-icon className="text-xl group-hover:text-[#DF0D85] transition-colors text-gray-600" icon="solar:smart-speaker-minimalistic-linear"></iconify-icon>
</div>
<h3 className="text-base font-normal mb-3 tracking-tight text-gray-900">
              One-Click Service
            </h3>
<p className="text-sm leading-relaxed text-gray-500">
              Unified request routing for dynamic housekeeping and maintenance.
              Seamless DoorDash and Uber integration with autonomous delivery.
            </p>
</div>

<div className="group border rounded-2xl p-6 md:p-8 hover:border-[#DF0D85]/30 transition-all duration-500 bg-gray-50 border-gray-200 hover:bg-gray-100">
<div className="w-10 h-10 rounded-xl border flex items-center justify-center mb-6 group-hover:border-[#DF0D85]/50 group-hover:bg-[#DF0D85]/5 transition-all bg-white border-gray-300">
<iconify-icon className="text-xl group-hover:text-[#DF0D85] transition-colors text-gray-600" icon="solar:graph-up-linear"></iconify-icon>
</div>
<h3 className="text-base font-normal mb-3 tracking-tight text-gray-900">
              Hyper-Personalized
            </h3>
<p className="text-sm leading-relaxed text-gray-500">
              Deliver hyper-personalized itineraries, dynamically tailored
              amenity offers, and issue real-time cash-back loyalty rewards
              governed by data.
            </p>
</div>
</div>
</div>
</section><section className="overflow-hidden bg-white border-gray-200 border-t pt-24 pr-6 pb-24 pl-6 relative">

<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gray-100/50 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
<div className="max-w-7xl mr-auto ml-auto">

<div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-6 bg-gray-50 border-gray-200 text-gray-600 text-xs font-medium uppercase tracking-widest">
<iconify-icon icon="solar:danger-triangle-linear"></iconify-icon>
        Industry Challenges
      </div>
<h2 className="md:text-5xl text-4xl font-medium text-gray-900 tracking-tight mb-6">
        The Challenges Hotels Face Today
      </h2>
<p className="md:text-xl text-lg text-gray-500 font-normal leading-relaxed">
        Fragmented Systems. Rising Costs. Inconsistent Experiences.
      </p>
</div>

<div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">

<div className="group border rounded-3xl p-8 bg-gray-50 border-gray-200 hover:bg-white hover:border-gray-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] transition-all duration-500 flex flex-col">
<div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center mb-8 group-hover:scale-105 transition-transform duration-500 shadow-sm">
<iconify-icon className="text-2xl text-gray-500 group-hover:text-gray-900 transition-colors" icon="solar:user-cross-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-gray-900 tracking-tight mb-3">User Experience</h3>
<p className="text-sm text-gray-500 leading-relaxed mb-8 flex-grow">
          Guests repeat preferences across touchpoints, leading to inconsistent stays and missed opportunities for personalization.
        </p>

<div className="pt-6 border-t border-gray-200/80 flex flex-col gap-2.5 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-gray-200 flex-shrink-0"></div>
<div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden flex">
<div className="h-full w-1/3 bg-gray-400"></div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full border border-dashed border-gray-300 flex-shrink-0"></div>
<div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden flex">
<div className="h-full w-2/3 bg-gray-300"></div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-gray-200 flex-shrink-0"></div>
<div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden flex">
<div className="h-full w-1/2 bg-gray-400"></div>
</div>
</div>
</div>
</div>

<div className="group border rounded-3xl p-8 bg-gray-50 border-gray-200 hover:bg-white hover:border-gray-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] transition-all duration-500 flex flex-col">
<div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center mb-8 group-hover:scale-105 transition-transform duration-500 shadow-sm">
<iconify-icon className="text-2xl text-gray-500 group-hover:text-gray-900 transition-colors" icon="solar:graph-up-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-gray-900 tracking-tight mb-3">Operational Cost</h3>
<p className="text-sm text-gray-500 leading-relaxed mb-8 flex-grow">
          Manual coordination increases workload for staff, driving up operational overhead and reducing overall efficiency.
        </p>

<div className="pt-6 border-t border-gray-200/80 flex items-end justify-between h-[88px] gap-2 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
<div className="w-full bg-gray-200 rounded-t-sm h-[30%] group-hover:bg-gray-300 transition-colors"></div>
<div className="w-full bg-gray-200 rounded-t-sm h-[45%] group-hover:bg-gray-300 transition-colors"></div>
<div className="w-full bg-gray-300 rounded-t-sm h-[65%] group-hover:bg-gray-400 transition-colors"></div>
<div className="w-full bg-gray-400 rounded-t-sm h-[90%] group-hover:bg-gray-600 transition-colors relative">
<div className="absolute -top-1.5 -right-1.5 w-3 h-3 rounded-full bg-gray-800 border-2 border-white"></div>
</div>
</div>
</div>

<div className="group border rounded-3xl p-8 bg-gray-50 border-gray-200 hover:bg-white hover:border-gray-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] transition-all duration-500 flex flex-col">
<div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center mb-8 group-hover:scale-105 transition-transform duration-500 shadow-sm">
<iconify-icon className="text-2xl text-gray-500 group-hover:text-gray-900 transition-colors" icon="solar:server-square-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-gray-900 tracking-tight mb-3">Fragmented Technology</h3>
<p className="text-sm text-gray-500 leading-relaxed mb-8 flex-grow">
          Disconnected PMS, CRM, and IoT systems fail to deliver unified experiences and trap valuable data in silos.
        </p>

<div className="pt-6 border-t border-gray-200/80 grid grid-cols-2 gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-500 relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-300 z-10 bg-white/80 rounded-full mt-3">
<iconify-icon className="text-xl" icon="solar:close-circle-line-duotone"></iconify-icon>
</div>
<div className="h-[38px] rounded-lg border border-dashed border-gray-300 flex items-center justify-center text-[10px] font-medium text-gray-500 uppercase tracking-widest bg-white">PMS</div>
<div className="h-[38px] rounded-lg border border-dashed border-gray-300 flex items-center justify-center text-[10px] font-medium text-gray-500 uppercase tracking-widest bg-white">IoT</div>
<div className="h-[38px] rounded-lg border border-dashed border-gray-300 flex items-center justify-center text-[10px] font-medium text-gray-500 uppercase tracking-widest bg-white">CRM</div>
<div className="h-[38px] rounded-lg border border-dashed border-gray-300 flex items-center justify-center text-[10px] font-medium text-gray-500 uppercase tracking-widest bg-white">POS</div>
</div>
</div>
</div>

<div className="relative rounded-3xl overflow-hidden border border-[#DF0D85]/20 bg-gradient-to-r from-[#DF0D85]/5 via-[#DF0D85]/10 to-[#DF0D85]/5 p-8 md:p-12 text-center isolate shadow-[0_0_40px_rgba(223,13,133,0.05)]">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&amp;q=80')] opacity-5 mix-blend-overlay bg-cover bg-center"></div>

<div className="w-16 h-16 mx-auto rounded-2xl bg-white border border-[#DF0D85]/20 flex items-center justify-center mb-6 shadow-[0_0_25px_rgba(223,13,133,0.15)] relative z-10">
<iconify-icon className="text-3xl text-[#DF0D85]" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>

<h3 className="md:text-3xl lg:text-4xl leading-snug z-10 text-2xl font-medium text-gray-900 tracking-tight max-w-3xl mr-auto ml-auto relative">SHASHI AI bridges the gap between operational systems and guest expectations.</h3>

<div className="mt-8 flex justify-center relative z-10">
<div className="h-px w-48 bg-gradient-to-r from-transparent via-[#DF0D85]/40 to-transparent"></div>
</div>
</div>
</div>
</section>


<section className="bg-gray-100 border-gray-200 border-t pt-24 pr-6 pb-24 pl-6 relative">
<div className="max-w-7xl mr-auto ml-auto">
<div className="flex gap-2 uppercase text-sm font-medium text-[#DF0D85] tracking-widest mb-4 gap-x-2 gap-y-2 items-center">
<iconify-icon className="text-lg" icon="lucide:star"></iconify-icon>
<span className="">Customer Success</span>
</div>
<div className="mb-12">
<h2 className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight mb-4 leading-none text-gray-900">
        Results.
      </h2>
<p className="sm:text-base text-sm text-gray-500">
        Real impact from real workflows
      </p>
</div>
<div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
<article className="sm:p-10 flex flex-col hover:border-[#DF0D85]/30 transition-colors border rounded-2xl p-8 backdrop-blur-lg justify-center items-center bg-gray-200/60 border-gray-200 min-h-[420px] text-center">
<div className="mb-8 w-16 h-16 rounded-full bg-white border border-gray-300 flex items-center justify-center shadow-sm">
<iconify-icon className="text-2xl text-gray-600" icon="lucide:newspaper"></iconify-icon>
</div>
<h3 className="sm:text-4xl leading-tight text-3xl font-medium text-gray-900 tracking-tight mb-6">
          As Featured In<br/>The Wall Street Journal
        </h3>
<p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-md">
          Recognized for redefining the future of guest experience through AI-driven personalization.
        </p>
</article>
<article className="sm:p-10 flex flex-col hover:border-[#DF0D85]/30 transition-colors border rounded-2xl p-8 backdrop-blur-lg justify-between bg-gray-200/60 border-gray-200 min-h-[420px]">
<div className="mb-8">
<h3 className="sm:text-3xl text-2xl font-medium text-gray-900 tracking-tight mb-4">
            Hear from our clients
          </h3>
<p className="text-base text-gray-600 leading-relaxed max-w-lg">
            See how hospitality brands are using Shashi AI to deliver intentional, connected experiences across every guest journey.
          </p>
</div>
<div className="relative w-full rounded-xl overflow-hidden flex-grow bg-gray-900 group cursor-pointer border border-gray-300 min-h-[240px]">
<img alt="Video placeholder" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=2160&amp;q=80"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 rounded-full bg-white text-gray-900 flex items-center justify-center shadow-[0_0_25px_rgba(0,0,0,0.2)] group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-2xl ml-1" icon="lucide:play"></iconify-icon>
</div>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="py-24 px-6 border-t relative overflow-hidden text-center z-10 border-gray-200 bg-gray-50">
<div className="absolute inset-0 bg-gradient-to-t to-transparent pointer-events-none -z-10 from-gray-50"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#DF0D85]/15 blur-[120px] rounded-full pointer-events-none -z-10"></div>
<div className="max-w-3xl mx-auto">
<h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6 text-gray-900">
          Ready to transform Guest Experience?
        </h2>
<p className="text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed text-gray-500">
          Orchestrate fully autonomous journeys, enhance operational efficiency,
          and drive loyalty with a single intelligent layer.
        </p>
<a className="inline-flex items-center justify-center px-8 py-4 text-sm font-normal bg-[#DF0D85] rounded-full hover:bg-[#c20b74] shadow-[0_0_25px_rgba(223,13,133,0.4)] transition-all text-white" href="mailto:dgupta@shashigroup.com">
          Book a Call
        </a>
</div>
</section>

<footer className="overflow-hidden border-t pt-32 pr-6 pb-12 pl-6 relative bg-white border-gray-300">

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-[#DF0D85]/10 rounded-t-full blur-[120px] -z-10 pointer-events-none"></div>
<div className="max-w-7xl mx-auto">
<div className="sm:p-10 border rounded-3xl p-6 backdrop-blur-md relative z-10 shadow-sm bg-gray-50 border-gray-200">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 text-left">

<div className="md:col-span-2">
<h4 className="sm:text-2xl text-xl font-medium tracking-tight text-gray-900">
                Stay Updated with SHASHI.AI
              </h4>
<div className="mt-6 relative max-w-md">
<label className="sr-only" htmlFor="footer-email">Email</label>
<input className="w-full rounded-full border px-5 pr-14 py-3.5 text-sm placeholder-gray-400 outline-none focus:border-[#DF0D85]/50 focus:ring-1 focus:ring-[#DF0D85]/50 transition-all bg-white border-gray-300 text-gray-900" id="footer-email" placeholder="Enter your email" type="email"/>
<button aria-label="Subscribe" className="absolute right-1.5 top-1.5 bottom-1.5 inline-flex items-center justify-center rounded-full px-4 bg-[#DF0D85] hover:bg-[#c20b74] hover:shadow-[0_0_15px_rgba(223,13,133,0.3)] transition-all text-white">
<svg className="lucide lucide-arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
<p className="text-xs mt-4 leading-relaxed text-gray-500">
                Get the latest insights on autonomous hospitality and platform
                updates. No spam, ever.
              </p>
</div>

<div className="">
<h5 className="uppercase text-sm font-medium tracking-wide mb-5 text-gray-900">
                Products
              </h5>
<ul className="space-y-3.5 text-sm text-gray-500">
<li className="">
<a className="transition-colors inline-block hover:text-gray-900" href="#">
                    Frictionless Booking
                  </a>
</li>
<li className="">
<a className="transition-colors inline-block hover:text-gray-900" href="#">
                    Autonomous Check-in
                  </a>
</li>
<li className="">
<a className="transition-colors inline-block hover:text-gray-900" href="#">
                    In-Room Experience
                  </a>
</li>
</ul>
</div>

<div className="">
<h5 className="text-sm font-medium tracking-wide uppercase mb-5 text-gray-900">
                Company
              </h5>
<ul className="space-y-3.5 text-sm text-gray-500">
<li className="">
<a className="group inline-flex items-center gap-1.5 transition-colors hover:text-gray-900" href="#architecture">
                    About Us
                  </a>
</li>
<li className="">
<a className="group inline-flex items-center gap-1.5 transition-colors hover:text-gray-900" href="mailto:dgupta@shashigroup.com">
                    Customer Stories
                  </a>
</li>
<li className="">
<a className="group inline-flex items-center gap-1.5 transition-colors hover:text-gray-900" href="https://shashi.ai" target="_blank">
                    shashi.ai
                    <svg className="lucide lucide-arrow-up-right opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</a>
</li>
</ul>
</div>
</div>

<div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 items-center text-left">
<div className="flex flex-wrap items-center gap-3 text-sm">
<a aria-label="LinkedIn" className="inline-flex items-center gap-2 rounded-full border px-4 py-2.5 hover:border-[#DF0D85]/30 transition-all duration-300 border-gray-300 bg-white text-gray-500 hover:text-gray-900 hover:bg-gray-50" href="#">
<svg className="lucide lucide-linkedin" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
<span className="font-normal">LinkedIn</span>
</a>
<a aria-label="Twitter" className="inline-flex items-center gap-2 rounded-full border px-4 py-2.5 hover:border-[#DF0D85]/30 transition-all duration-300 border-gray-300 bg-white text-gray-500 hover:text-gray-900 hover:bg-gray-50" href="#">
<svg className="lucide lucide-twitter" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
</svg>
<span className="font-normal">Twitter</span>
</a>
</div>
<div className="flex items-center justify-start md:justify-end gap-6 text-xs text-gray-400 font-normal">
<a className="transition-colors hover:text-gray-600" href="#">
                Privacy Policy
              </a>
<a className="transition-colors hover:text-gray-600" href="#">
                Terms of Service
              </a>
<a className="transition-colors hover:text-gray-600" href="#">
                Status
              </a>
</div>
</div>
<div className="h-px my-8 bg-gray-300"></div>

<div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-gray-300"></span>
<span className="font-medium tracking-tighter text-gray-600">
                SHASHI.AI
              </span>
<span className="ml-1 text-gray-400">
                © 2026 Shashi Group. All rights reserved.
              </span>
</div>
<p className="text-gray-400">
              Platform architecture subject to patent pending status.
            </p>
</div>
</div>
</div>
</footer>

    </>
  );
}
