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



      lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-[-1] pointer-events-none">

<div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#00B4D8] opacity-10 blur-[150px]"></div>
<div className="absolute top-[40%] right-[-20%] w-[50vw] h-[50vw] rounded-full bg-[#8B5CF6] opacity-10 blur-[150px]"></div>

<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent_80%)]"></div>
</div>

<nav className="fixed top-6 w-full z-50 px-4 md:px-8 flex justify-center">
<div className="flex items-center justify-between w-full max-w-6xl bg-[#080E1C]/70 backdrop-blur-md border border-[#151F32] rounded-full px-6 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#00B4D8] to-[#8B5CF6] flex items-center justify-center">
<div className="w-3 h-3 bg-[#050A12] rounded-full"></div>
</div>
<span className="font-medium text-xl tracking-tight text-white">
            Pimento
          </span>
</div>
<div className="hidden md:flex items-center gap-8 text-[#7A8BA3] font-light text-sm">
<a className="hover:text-white transition-colors" href="#services">
            Services
          </a>
<a className="hover:text-white transition-colors" href="#why-us">
            Why Us
          </a>
<a className="hover:text-white transition-colors" href="#process">
            Process
          </a>
</div>
<a className="hidden md:inline-flex items-center justify-center bg-white text-black px-5 py-2 rounded-full font-medium text-sm hover:bg-gray-200 transition-colors gap-2 group" href="#contact">
          Book a Consultation
          <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>

<button className="md:hidden text-[#7A8BA3]">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</nav>
<main className="pt-32 pb-24 flex flex-col items-center">

<section className="w-full max-w-7xl px-4 md:px-8 pt-20 pb-32 flex flex-col lg:flex-row items-center justify-between gap-16 relative">
<div className="w-full lg:w-1/2 flex flex-col items-start relative z-10">
<div className="flex items-center gap-3 mb-8 px-4 py-2 rounded-full bg-[#0C1322] border border-[#151F32]">
<span className="w-2 h-2 rounded-full bg-[#00B4D8] animate-pulse"></span>
<span className="text-xs uppercase tracking-widest text-[#7A8BA3] font-medium">
              System Operational
            </span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-[5rem] font-['Playfair_Display'] italic tracking-tight leading-[1.1] text-white mb-8">
            Architect your
            <br/>
            growth with
            <br/>
            intelligent automation.
          </h1>
<p className="text-xl md:text-2xl font-light text-[#7A8BA3] max-w-xl leading-relaxed mb-10">
            RPA/BPA solutions and AI strategy that eliminate manual work, reduce
            errors, and unlock scalable growth.
          </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#00B4D8] to-[#8B5CF6] text-white font-medium text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,180,216,0.3)]" href="#contact">
              Initialize Protocol
            </a>
<a className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent border border-[#151F32] text-white font-medium text-lg hover:bg-[#0C1322] transition-colors flex items-center justify-center gap-2 group" href="#work">
              See Our Work
              <i className="w-5 h-5 group-hover:translate-x-1 transition-transform text-[#7A8BA3]" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>

<div className="w-full lg:w-1/2 h-[500px] relative perspective-1000 hidden lg:block">
<div className="absolute inset-0 bg-gradient-to-tr from-[#00B4D8]/10 to-[#8B5CF6]/10 rounded-3xl blur-3xl mix-blend-screen"></div>
<div className="relative w-full h-full border border-[#151F32] bg-[#0C1322]/40 backdrop-blur-xl rounded-3xl overflow-hidden flex items-center justify-center p-8 shadow-2xl">

<div className="w-full h-full relative">

<div className="absolute top-1/2 left-10 right-10 h-px bg-gradient-to-r from-transparent via-[#00B4D8]/50 to-transparent"></div>
<div className="absolute left-1/2 top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-[#8B5CF6]/50 to-transparent"></div>

<div className="absolute top-1/4 left-1/4 w-32 p-4 bg-[#080E1C] border border-[#151F32] rounded-2xl shadow-lg animate-[bounce_4s_infinite]">
<div className="w-6 h-6 rounded-full bg-[#00B4D8]/20 flex items-center justify-center mb-2">
<div className="w-2 h-2 bg-[#00B4D8] rounded-full"></div>
</div>
<div className="h-2 w-16 bg-[#151F32] rounded-full mb-2"></div>
<div className="h-2 w-10 bg-[#151F32] rounded-full"></div>
</div>
<div className="absolute bottom-1/4 right-1/4 w-40 p-4 bg-[#080E1C] border border-[#151F32] rounded-2xl shadow-lg animate-[bounce_5s_infinite_reverse]">
<div className="w-6 h-6 rounded-full bg-[#8B5CF6]/20 flex items-center justify-center mb-2">
<i className="w-3 h-3 text-[#8B5CF6]" data-lucide="cpu" strokeWidth="1.5"></i>
</div>
<div className="flex justify-between items-center mb-2">
<div className="text-xs text-[#7A8BA3] font-light">
                    Processing
                  </div>
<div className="text-xs text-[#00B4D8] font-medium">+94%</div>
</div>
<div className="w-full h-1 bg-[#151F32] rounded-full overflow-hidden">
<div className="w-[94%] h-full bg-[#8B5CF6]"></div>
</div>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-[#080E1C] border border-[#151F32] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(0,180,216,0.2)] z-10">
<i className="w-8 h-8 text-white" data-lucide="zap" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>
</section>

<section className="w-full border-y border-[#151F32] bg-[#080E1C]/20 backdrop-blur-sm py-10 overflow-hidden">
<div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between gap-8 opacity-40 grayscale pointer-events-none">
<i className="w-12 h-12" data-lucide="hexagon" strokeWidth="1.5"></i>
<i className="w-12 h-12" data-lucide="triangle" strokeWidth="1.5"></i>
<i className="w-12 h-12" data-lucide="circle" strokeWidth="1.5"></i>
<i className="w-12 h-12" data-lucide="square" strokeWidth="1.5"></i>
<i className="w-12 h-12 hidden md:block" data-lucide="octagon" strokeWidth="1.5"></i>
<i className="w-12 h-12 hidden md:block" data-lucide="diamond" strokeWidth="1.5"></i>
</div>
</section>

<section className="w-full max-w-7xl px-4 md:px-8 py-32 relative" id="services">
<div className="flex flex-col items-center text-center mb-16">
<div className="text-xs uppercase tracking-widest text-[#8B5CF6] font-medium mb-4 border border-[#8B5CF6]/30 px-3 py-1 rounded-full bg-[#8B5CF6]/10">
            System Capabilities
          </div>
<h2 className="text-4xl md:text-6xl font-['Playfair_Display'] italic tracking-tight text-white mb-6">
            What We Deliver
          </h2>
<p className="text-xl font-light text-[#7A8BA3] max-w-2xl">
            Streamline your operations with intelligent protocols designed to
            simplify, automate, and enhance your business architecture.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative bg-[#0C1322]/60 backdrop-blur-md border border-[#151F32] rounded-3xl p-8 hover:border-[#00B4D8]/50 transition-all duration-500 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-[#00B4D8]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-[#080E1C] border border-[#151F32] flex items-center justify-center mb-8 group-hover:border-[#00B4D8]/30 transition-colors">
<i className="w-6 h-6 text-[#00B4D8]" data-lucide="bot" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight text-white mb-4">
                RPA &amp; BPA Architecture
              </h3>
<p className="text-lg font-light text-[#7A8BA3] leading-relaxed">
                Designing and building robotic process automation and business
                process automation solutions that run autonomously.
              </p>
</div>
</div>

<div className="group relative bg-[#0C1322]/60 backdrop-blur-md border border-[#151F32] rounded-3xl p-8 hover:border-[#8B5CF6]/50 transition-all duration-500 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-[#8B5CF6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-[#080E1C] border border-[#151F32] flex items-center justify-center mb-8 group-hover:border-[#8B5CF6]/30 transition-colors">
<i className="w-6 h-6 text-[#8B5CF6]" data-lucide="sparkles" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight text-white mb-4">
                AI Transformation
              </h3>
<p className="text-lg font-light text-[#7A8BA3] leading-relaxed">
                Integrating artificial intelligence into business workflows for
                smarter decisions, predictive analytics, and massive efficiency
                gains.
              </p>
</div>
</div>

<div className="group relative bg-[#0C1322]/60 backdrop-blur-md border border-[#151F32] rounded-3xl p-8 hover:border-[#00B4D8]/50 transition-all duration-500 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-[#00B4D8]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-[#080E1C] border border-[#151F32] flex items-center justify-center mb-8 group-hover:border-[#00B4D8]/30 transition-colors">
<i className="w-6 h-6 text-white" data-lucide="git-merge" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight text-white mb-4">
                Process Optimization
              </h3>
<p className="text-lg font-light text-[#7A8BA3] leading-relaxed">
                Auditing and streamlining operations to cut costs, reduce manual
                effort, and eliminate bottlenecks before automation.
              </p>
</div>
</div>
</div>
</section>

<section className="w-full bg-[#050A12] py-32 border-y border-[#151F32]/50 relative" id="why-us">
<div className="max-w-7xl mx-auto px-4 md:px-8">
<div className="mb-16">
<h2 className="text-4xl md:text-5xl font-['Playfair_Display'] italic tracking-tight text-white mb-4">
              Built on Expertise. Driven by Results.
            </h2>
<p className="text-xl font-light text-[#7A8BA3] max-w-2xl">
              The infrastructure to accelerate your economic legacy.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 relative">

<div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-[#151F32]"></div>
<div className="hidden md:block absolute left-0 right-0 top-1/2 h-px bg-[#151F32]"></div>

<div className="flex gap-6 md:pr-8 md:pb-8">
<div className="text-5xl font-['Playfair_Display'] italic text-[#151F32]">
                01
              </div>
<div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">
                  10+ Years in IT &amp; Automation
                </h3>
<p className="text-lg font-light text-[#7A8BA3] leading-relaxed">
                  Deep architectural knowledge ensures solutions are robust,
                  secure, and built to enterprise standards.
                </p>
</div>
</div>

<div className="flex gap-6 md:pl-8 md:pb-8">
<div className="text-5xl font-['Playfair_Display'] italic text-[#151F32]">
                02
              </div>
<div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">
                  End-to-End Delivery
                </h3>
<p className="text-lg font-light text-[#7A8BA3] leading-relaxed">
                  From initial process mining and audit to final deployment and
                  ongoing maintenance.
                </p>
</div>
</div>

<div className="flex gap-6 md:pr-8 md:pt-8">
<div className="text-5xl font-['Playfair_Display'] italic text-[#151F32]">
                03
              </div>
<div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">
                  Measurable ROI Focus
                </h3>
<p className="text-lg font-light text-[#7A8BA3] leading-relaxed">
                  We don't automate for the sake of it. Every deployment is tied
                  to hard metrics and cost reduction.
                </p>
</div>
</div>

<div className="flex gap-6 md:pl-8 md:pt-8">
<div className="text-5xl font-['Playfair_Display'] italic text-[#151F32]">
                04
              </div>
<div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">
                  Scalable Solutions
                </h3>
<p className="text-lg font-light text-[#7A8BA3] leading-relaxed">
                  Architectures designed to grow with your business, easily
                  integrating with future technologies.
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="w-full max-w-7xl px-4 md:px-8 py-32" id="process">
<div className="text-center mb-24">
<div className="text-xs uppercase tracking-widest text-[#00B4D8] font-medium mb-4 border border-[#00B4D8]/30 px-3 py-1 rounded-full bg-[#00B4D8]/10 inline-block">
            Execution Framework
          </div>
<h2 className="text-4xl md:text-5xl font-['Playfair_Display'] italic tracking-tight text-white">
            How We Work
          </h2>
</div>
<div className="relative">

<div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-px bg-[#151F32] z-0"></div>
<div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative z-10">

<div className="flex flex-col items-center text-center group">
<div className="w-14 h-14 rounded-full bg-[#080E1C] border border-[#151F32] flex items-center justify-center text-xl font-medium text-[#00B4D8] mb-6 group-hover:border-[#00B4D8] group-hover:bg-[#0C1322] transition-all">
                1
              </div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">
                Audit
              </h3>
<p className="text-lg font-light text-[#7A8BA3]">
                Deep dive into your current workflows to identify bottlenecks
                and automation opportunities.
              </p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-14 h-14 rounded-full bg-[#080E1C] border border-[#151F32] flex items-center justify-center text-xl font-medium text-[#8B5CF6] mb-6 group-hover:border-[#8B5CF6] group-hover:bg-[#0C1322] transition-all">
                2
              </div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">
                Strategy
              </h3>
<p className="text-lg font-light text-[#7A8BA3]">
                Architecting a precise, scalable blueprint tailored to your
                specific technical ecosystem.
              </p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-14 h-14 rounded-full bg-[#080E1C] border border-[#151F32] flex items-center justify-center text-xl font-medium text-white mb-6 group-hover:border-white group-hover:bg-[#0C1322] transition-all">
                3
              </div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">
                Implementation
              </h3>
<p className="text-lg font-light text-[#7A8BA3]">
                Building, testing, and deploying the automation protocols with
                zero operational latency.
              </p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-14 h-14 rounded-full bg-[#080E1C] border border-[#151F32] flex items-center justify-center text-xl font-medium text-[#00B4D8] mb-6 group-hover:border-[#00B4D8] group-hover:bg-[#0C1322] transition-all">
                4
              </div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">
                Optimization
              </h3>
<p className="text-lg font-light text-[#7A8BA3]">
                Continuous monitoring, performance tuning, and scaling of the
                implemented solutions.
              </p>
</div>
</div>
</div>
</section>

<section className="w-full max-w-7xl px-4 md:px-8 py-32">
<h2 className="text-4xl md:text-5xl font-['Playfair_Display'] italic tracking-tight text-white mb-16 md:text-center">
          Real Impact. Proven Results.
        </h2>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="bg-gradient-to-b from-[#0C1322] to-[#050A12] border border-[#151F32] rounded-3xl p-8 hover:-translate-y-1 transition-transform duration-300">
<div className="text-xs tracking-widest uppercase text-[#7A8BA3] font-medium mb-8">
              Financial Services
            </div>
<div className="text-5xl md:text-6xl font-medium tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#00B4D8] to-white mb-6">
              60%
            </div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">
              Less manual work
            </h3>
<p className="text-lg font-light text-[#7A8BA3]">
              Automated data entry and reconciliation across legacy banking
              systems.
            </p>
</div>

<div className="bg-gradient-to-b from-[#0C1322] to-[#050A12] border border-[#151F32] rounded-3xl p-8 hover:-translate-y-1 transition-transform duration-300">
<div className="text-xs tracking-widest uppercase text-[#7A8BA3] font-medium mb-8">
              Logistics &amp; Supply
            </div>
<div className="text-5xl md:text-6xl font-medium tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-white mb-6">
              340+
            </div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">
              Hours saved monthly
            </h3>
<p className="text-lg font-light text-[#7A8BA3]">
              Intelligent routing and automated invoice processing
              implementation.
            </p>
</div>

<div className="bg-gradient-to-b from-[#0C1322] to-[#050A12] border border-[#151F32] rounded-3xl p-8 hover:-translate-y-1 transition-transform duration-300">
<div className="text-xs tracking-widest uppercase text-[#7A8BA3] font-medium mb-8">
              Healthcare Admin
            </div>
<div className="text-5xl md:text-6xl font-medium tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#00B4D8] to-[#8B5CF6] mb-6">
              3x
            </div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">
              Faster processing
            </h3>
<p className="text-lg font-light text-[#7A8BA3]">
              Patient onboarding and claims verification automated via
              intelligent bots.
            </p>
</div>
</div>
</section>

<section className="w-full max-w-5xl px-4 md:px-8 py-32 text-center relative mt-16" id="contact">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[600px] max-h-[600px] bg-gradient-to-tr from-[#00B4D8]/10 to-[#8B5CF6]/10 rounded-full blur-[100px] -z-10"></div>
<h2 className="text-5xl md:text-7xl font-['Playfair_Display'] italic tracking-tight text-white mb-6 leading-tight">
          Ready to automate
          <br/>
          your growth?
        </h2>
<p className="text-xl font-light text-[#7A8BA3] mb-12 max-w-xl mx-auto">
          Stop losing hours to manual execution. Upgrade your infrastructure
          with intelligent protocols today.
        </p>
<a className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-black font-medium text-lg hover:bg-gray-200 transition-colors gap-3 shadow-[0_0_30px_rgba(255,255,255,0.2)]" href="mailto:hello@pimento.com">
          Book a Free Consultation
          <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</section>
</main>

<footer className="w-full border-t border-[#151F32] bg-[#050A12] pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 md:px-8">
<div className="flex gap-8 text-[#7A8BA3] font-light">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#00B4D8] to-[#8B5CF6] flex items-center justify-center">
<div className="w-2 h-2 bg-[#050A12] rounded-full"></div>
</div>
<span className="font-medium text-xl tracking-tight text-white">
              Pimento
            </span>
</div>
<div className="flex gap-8 text-[#94A3B8] font-light">
<a className="hover:text-white transition-colors" href="#">Services</a>
<a className="hover:text-white transition-colors" href="#">
              Case Studies
            </a>
<a className="hover:text-white transition-colors" href="#">About</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-[#151F32]/50 text-sm font-light text-[#7A8BA3]">
<p>© 2024 Pimento Solutions. All rights reserved.</p>
<div className="flex items-center gap-4">
<a className="hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="linkedin" strokeWidth="1.5"></i>
</a>
<a className="hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="github" strokeWidth="1.5"></i>
</a>
<a className="hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="twitter" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
