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



        let currentRotation = 0;
        
        function switchEra(degrees) {
            // 1. Rotate the Wheel
            // Calculate nearest rotation to prevent full spins when going from 270 back to 0
            // For simplicity in this demo, we just set the degrees.
            // A more complex version would calculate the delta.
            
            // Handle the UI rotation
            const wheel = document.getElementById('timeWheel');
            // We rotate negative to the input to make the selected item go to "top" (12 o'clock) or match the spoke logic
            // The design shows spokes at 0, 90, 180.
            // Let's rotate the container so the selected degree is at the "North" or "East".
            // Let's say we want the selected number to be at the East (Right) side.
            // If I click 90 (South), I want to rotate -90.
            
            wheel.style.transform = `rotate(-${degrees}deg)`;
            
            // 2. Switch Content with Fade
            const sections = {
                0: document.getElementById('era-0'),
                90: document.getElementById('era-90'),
                180: document.getElementById('era-180'),
                270: document.getElementById('era-270')
            };

            // Hide all currently visible
            document.querySelectorAll('.era-section').forEach(el => {
                if(!el.classList.contains('hidden')) {
                    el.classList.remove('fade-enter-active');
                    el.style.opacity = '0';
                    setTimeout(() => {
                        el.classList.add('hidden');
                    }, 400); // Wait for fade out
                }
            });

            // Show new one
            setTimeout(() => {
                const target = sections[degrees];
                if(target) {
                    target.classList.remove('hidden');
                    target.classList.add('fade-enter');
                    // Trigger reflow
                    void target.offsetWidth;
                    target.classList.add('fade-enter-active');
                    target.style.opacity = '1';
                }
            }, 400);
        }

        // Initialize animations on load
        document.addEventListener('DOMContentLoaded', () => {
            const firstSection = document.getElementById('era-0');
            firstSection.classList.add('fade-enter', 'fade-enter-active');
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="grain"></div>
<div className="vignette"></div>

<div className="fixed top-0 left-0 w-full h-1 bg-[#c4a47c] z-50"></div>

<aside className="z-30 md:w-[35%] lg:w-[30%] md:h-full md:border-b-0 md:border-r flex flex-col md:p-10 transition-all duration-700 bg-[#0d0d0d] w-full h-[20vh] border-[#c4a47c]/30 border-b pt-6 pr-6 pb-6 pl-6 relative justify-between">

<div className="flex flex-col gap-2 gap-x-2 gap-y-2">
<div className="flex items-center gap-3 text-[#c4a47c]/60 text-xs font-mono-custom tracking-widest uppercase">
<iconify-icon className="" icon="solar:record-circle-linear" width="16"></iconify-icon>
</div>
<h1 className="md:text-5xl leading-none text-3xl text-[#e5e0d8] tracking-tighter font-playfair mt-2">EVA CHEN</h1>
<p className="md:text-base leading-relaxed text-sm text-[#e5e0d8]/60 font-montserrat max-w-xs mt-2">Artist &amp; Designer</p>
</div>

<div className="hidden md:flex flex-1 mt-8 mb-8 relative perspective-1000 items-center justify-center">


<div className="-translate-x-1/2 flex flex-col gap-1 text-xs text-[#c4a47c] font-mono-custom absolute top-0 left-1/2 gap-x-1 gap-y-1 items-center">
<div className="w-[1px] h-4 bg-[#c4a47c]"></div>
<span className="">SELECT</span>
</div><div className="lg:w-80 lg:h-80 flex wheel-container aspect-square w-64 h-64 border-[#c4a47c] border-8 rounded-full relative items-center justify-center" id="timeWheel">
<div className="font-playfair border-[#c4a47c]/70 border rounded-full absolute top-0 right-0 bottom-0 left-0 scale-90"></div>
<div className="border-dashed border-[#c4a47c] border rounded-full absolute top-0 right-0 bottom-0 left-0 scale-50"></div>

<div className="bg-[#c4a47c] w-2 h-2 z-10 rounded-full shadow-[0_0_15px_#c4a47c]"></div>


<button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none" onclick="switchEra(0)">
<div className="-translate-x-1/2 -translate-y-4 pointer-events-auto cursor-pointer hover:text-white transition-colors duration-300 transform hover:scale-110 text-xl text-[#c4a47c] font-cinzel pt-2 pr-2 pb-2 pl-2 absolute top-0 left-1/2" style={{}}>I</div>
</button>
<button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rotate-90 pointer-events-none" onclick="switchEra(90)">
<div className="-translate-x-1/2 -translate-y-4 cursor-pointer hover:text-white transition-colors duration-300 transform hover:scale-110 pointer-events-auto text-xl text-[#c4a47c] font-cinzel pt-2 pr-2 pb-2 pl-2 absolute top-0 left-1/2" style={{}}>II</div>
</button>
<button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rotate-180 pointer-events-none" onclick="switchEra(180)">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 text-[#c4a47c] font-cinzel text-xl pointer-events-auto cursor-pointer hover:text-white transition-colors duration-300 transform hover:scale-110 p-2">III</div>
</button>
<button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -rotate-90 pointer-events-none" onclick="switchEra(270)">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 text-[#c4a47c] font-cinzel text-xl pointer-events-auto cursor-pointer hover:text-white transition-colors duration-300 transform hover:scale-110 p-2">IV</div>
</button>
</div>
</div>

<div className="hidden md:flex justify-between items-end border-t border-[#c4a47c]/20 pt-4">
<div className="text-[10px] font-mono-custom text-[#e5e0d8]/40 leading-tight">
                STATUS: ACTIVE
                LAT: 43.65 N
                LON: 79.38 W
            </div>
<div className="flex gap-4">
<a className="text-[#c4a47c] hover:text-white transition-colors" href="#"><iconify-icon icon="solar:letter-linear" width="20"></iconify-icon></a>
<a className="text-[#c4a47c] hover:text-white transition-colors" href="#"><iconify-icon icon="solar:link-circle-linear" width="20"></iconify-icon></a>
</div>
</div>
</aside>

<main className="relative z-20 w-full md:w-[65%] lg:w-[70%] h-[80vh] md:h-full bg-[#e5e0d8] text-[#0d0d0d] overflow-hidden flex flex-col">

<div className="bg-[#0d0d0d]/5 w-[1px] h-full z-30 absolute top-0 left-10"></div>
<div className="pointer-events-none bg-[#0d0d0d]/5 w-[1px] h-full absolute top-0 right-10"></div>
<div className="pointer-events-none bg-[#0d0d0d]/5 w-full h-[1px] absolute top-10 left-0"></div>

<div className="md:p-12 lg:p-16 overflow-y-auto scroll-smooth w-full h-full pt-6 pr-6 pb-6 pl-6 relative" id="contentArea">

<section className="era-section min-h-full flex flex-col fade-enter fade-enter-active justify-center" id="era-0">
<div className="flex items-center gap-4 mb-8 opacity-60">
<span className="w-12 h-[1px] bg-[#0d0d0d]"></span>
<span className="uppercase text-xs tracking-widest font-mono-custom">Case File: 01 // Introduction</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-12 items-center">
<div className="order-2 lg:order-1 space-y-6">
<h2 className="md:text-5xl lg:text-6xl text-4xl text-[#0d0d0d] tracking-tight font-cinzel">Hi!</h2>
<p className="md:text-xl leading-relaxed text-lg font-semibold text-[#0d0d0d]/80 font-montserrat">Finalist of the Red Dot Design Award.</p>
<p className="leading-7 md:text-sm text-sm text-[#0d0d0d]/70 font-poppins">Navigating the intersection of ancient aesthetics and future logic. I construct digital experiences that feel like rediscovered memories.</p>
<div className="pt-8">
<button className="group flex items-center gap-3 text-sm font-bold tracking-widest border border-[#0d0d0d] px-6 py-3 hover:bg-[#0d0d0d] hover:text-[#e5e0d8] transition-all duration-300" onclick="switchEra(90)">
<span className="">OPEN GALLERY</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="order-1 lg:order-2 relative">

<div className="relative w-full aspect-[3/4] overflow-hidden border border-[#0d0d0d]/10 bg-[#d6d1c7]">
<img alt="Abstract Art" className="art-filter w-full h-full object-cover" src="https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-0 left-0 w-full p-4 bg-[#e5e0d8]/90 backdrop-blur-sm border-t border-[#0d0d0d]/10 flex justify-between items-center">
<span className="font-mono-custom text-xs">FIG. 1.0</span>
<iconify-icon icon="solar:gallery-wide-linear"></iconify-icon>
</div>
</div>

<div className="absolute -top-4 -right-4 w-24 h-24 border-t border-r border-[#c4a47c] pointer-events-none"></div>
<div className="absolute -bottom-4 -left-4 w-24 h-24 border-b border-l border-[#c4a47c] pointer-events-none"></div>
</div>
</div>
</section>

<section className="era-section min-h-full hidden" id="era-90">
<div className="flex opacity-60 mb-12 items-center justify-between">
<div className="flex gap-4 items-center">
<span className="w-12 h-[1px] bg-[#0d0d0d]"></span>
<span className="font-mono-custom text-xs tracking-widest uppercase">Case File: 02 // Project Archive</span>
</div>
<span className="font-cinzel text-xl text-[#c4a47c]">II</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group relative bg-[#d6d1c7] border border-[#0d0d0d]/5 overflow-hidden transition-all hover:shadow-xl hover:shadow-[#c4a47c]/20 cursor-pointer">
<div className="aspect-video overflow-hidden">
<img alt="Work 1" className="w-full h-full object-cover art-filter group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6 relative">
<div className="absolute top-0 right-0 p-2 bg-[#0d0d0d] text-[#e5e0d8] font-mono-custom text-[10px]">REF: 23-A</div>
<h3 className="font-cinzel text-xl font-bold mb-1 glitch-hover">ST. JOSEPH COMMUNICATIONS</h3>
<p className="font-poiret text-xs font-bold text-[#c4a47c] mb-3">[cite: 06] UX DESIGN &amp; RETAIL</p>
<p className="text-sm text-[#0d0d0d]/70 leading-relaxed">
                                Designing high-fidelity interfaces for retail giants. Focusing on user retention and visual clarity.
                            </p>
<div className="mt-4 flex gap-2">
<span className="px-2 py-1 border border-[#0d0d0d]/20 text-[10px] uppercase tracking-wider">Figma</span>
<span className="px-2 py-1 border border-[#0d0d0d]/20 text-[10px] uppercase tracking-wider">React</span>
</div>
</div>
</div>

<div className="group relative bg-[#d6d1c7] border border-[#0d0d0d]/5 overflow-hidden transition-all hover:shadow-xl hover:shadow-[#c4a47c]/20 cursor-pointer">
<div className="aspect-video overflow-hidden">
<img alt="Work 2" className="w-full h-full object-cover art-filter group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1605106702734-205df224ecce?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6 relative">
<div className="absolute top-0 right-0 p-2 bg-[#0d0d0d] text-[#e5e0d8] font-mono-custom text-[10px]">REF: 88-B</div>
<h3 className="font-cinzel text-xl font-bold mb-1 glitch-hover">UofT ANTHROPOLOGY</h3>
<p className="font-poiret text-xs font-bold text-[#c4a47c] mb-3">[cite: 60] PUBLICATION &amp; ARCHAEOLOGY</p>
<p className="text-sm text-[#0d0d0d]/70 leading-relaxed">
                                Creating technical graphics for archaeological publications. Translating data into visual narratives.
                            </p>
<div className="mt-4 flex gap-2">
<span className="px-2 py-1 border border-[#0d0d0d]/20 text-[10px] uppercase tracking-wider">Illustrator</span>
<span className="px-2 py-1 border border-[#0d0d0d]/20 text-[10px] uppercase tracking-wider">Print</span>
</div>
</div>
</div>

<div className="group relative bg-[#d6d1c7] border border-[#0d0d0d]/5 overflow-hidden transition-all hover:shadow-xl hover:shadow-[#c4a47c]/20 cursor-pointer md:col-span-2 flex flex-col md:flex-row">
<div className="md:w-1/2 aspect-video md:aspect-auto overflow-hidden">
<img alt="Work 3" className="w-full h-full object-cover art-filter group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6 md:w-1/2 relative flex flex-col justify-center">
<div className="absolute top-0 right-0 p-2 bg-[#0d0d0d] text-[#e5e0d8] font-mono-custom text-[10px]">REF: AI-01</div>
<h3 className="font-cinzel text-2xl font-bold mb-2 glitch-hover">AI IMPLEMENTATION</h3>
<p className="font-poiret text-xs font-bold text-[#c4a47c] mb-4">[cite: 04] RESEARCH &amp; DEVELOPMENT</p>
<p className="text-sm text-[#0d0d0d]/70 leading-relaxed mb-4">
                                Experimental research into Generative Adversarial Networks (GANs) for art creation. bridging the gap between machine logic and human creativity.
                            </p>
<button className="self-start text-xs border-b border-[#0d0d0d] pb-1 hover:text-[#c4a47c] hover:border-[#c4a47c] transition-colors">READ FULL PAPER [PDF]</button>
</div>
</div>
</div>
</section>

<section className="era-section min-h-full hidden" id="era-180">
<div className="h-full flex flex-col items-center justify-center text-center max-w-2xl mx-auto">
<iconify-icon className="text-6xl text-[#c4a47c] mb-6 animate-pulse" icon="solar:user-circle-linear"></iconify-icon>
<h2 className="font-cinzel text-4xl mb-4">THE ARCHIVIST</h2>
<div className="w-24 h-[1px] bg-[#0d0d0d] mb-8"></div>
<p className="font-poiret text-xl leading-8">
                        "We are merely dust settling on the lens of history."
                    </p>
<div className="mt-12 text-left font-sans text-sm space-y-4">
<div className="flex gap-4 border-b border-[#0d0d0d]/10 pb-2">
<span className="w-24 font-bold text-[#c4a47c]">SKILLS</span>
<span>UI/UX, Front-end Dev, Motion Graphics, Python</span>
</div>
<div className="flex gap-4 border-b border-[#0d0d0d]/10 pb-2">
<span className="w-24 font-bold text-[#c4a47c]">EDUCATION</span>
<span>University of Toronto, Digital Humanities</span>
</div>
<div className="flex gap-4 border-b border-[#0d0d0d]/10 pb-2">
<span className="w-24 font-bold text-[#c4a47c]">CONTACT</span>
<span>eva.chen@record2025.com</span>
</div>
</div>
</div>
</section>

<section className="era-section min-h-full hidden" id="era-270">
<div className="h-full flex flex-col justify-center items-center">
<h2 className="font-cinzel text-4xl md:text-6xl mb-8 text-[#0d0d0d]">END OF RECORD</h2>
<a className="text-xl font-poiret tracking-widest border border-[#0d0d0d] px-8 py-4 hover:bg-[#0d0d0d] hover:text-[#e5e0d8] transition-colors duration-500" href="mailto:hello@example.com">
                        INITIATE CONTACT
                    </a>
</div>
</section>
</div>
</main>



    </>
  );
}
