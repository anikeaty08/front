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
      

<div className="blob-cont">
<div className="blob blob-1"></div>
<div className="blob blob-2"></div>
<div className="blob blob-3"></div>
</div>

<div className="fixed inset-0 pointer-events-none z-[-1] grid-overlay opacity-50"></div>

<nav className="fixed top-0 w-full z-50 glass-nav h-16 flex items-center justify-between px-6 md:px-12 transition-all">
<div className="text-xl tracking-tighter text-white cursor-pointer select-none font-geist font-medium" style={{}}>Hamdi Sudirman</div>
<div className="hidden md:flex gap-8 text-sm font-light text-neutral-400" style={{}}>
<a className="hover:text-white transition-colors duration-300 font-geist font-medium" href="#services" style={{}}>Services</a>
<a className="hover:text-white transition-colors duration-300 font-geist font-medium" href="#work" style={{}}>Work</a>
<a className="hover:text-white transition-colors duration-300 font-geist font-medium" href="#contact" style={{}}>Contact</a>
</div>
<button className="text-xs bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full transition-colors backdrop-blur-md border border-white/5 font-geist font-medium" style={{}}>
            Book Call
        </button>
</nav>

<section className="min-h-screen flex flex-col text-center pt-20 pr-6 pl-6 relative items-center justify-center">
<div className="z-10 max-w-4xl mr-auto ml-auto rotate-x-30 space-y-8">
<div className="inline-flex gap-2 animate-pulse text-xs font-medium text-[#38b6ff] tracking-wide font-geist bg-[#38b6ff]/10 border-[#38b6ff]/20 border rounded-full pt-1 pr-3 pb-1 pl-3 gap-x-2 gap-y-2 items-center">
<span className="w-1.5 h-1.5 rounded-full bg-[#38b6ff]"></span>
                AVAILABLE FOR NEW PROJECTS
            </div>
<h1 className="md:text-7xl lg:text-8xl leading-[1.1] text-5xl font-semibold tracking-tighter">
<span className="block font-semibold font-jakarta" style={{outline: 'rgb(22, 163, 74) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}>Hamdi Sudirman</span>
<span className="md:text-5xl lg:text-6xl block text-3xl font-semibold text-neutral-500 font-jakarta mt-2" style={{outline: 'rgb(22, 163, 74) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}>Architecting the Future</span>
</h1>
<p className="md:text-xl leading-relaxed text-lg text-neutral-400 font-geist max-w-2xl mr-auto ml-auto font-medium" style={{}}>
                Bridging Human Vision with Artificial Intelligence. Building autonomous systems and high-performance digital infrastructure.
            </p>
<div className="pt-6">
<a className="holo-btn inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm tracking-wide group font-geist font-medium" href="#work" style={{}}>
                    Explore Solutions
                    <svg aria-hidden="true" className="iconify group-hover:translate-x-1 transition-transform duration-300 iconify--lucide" data-icon="lucide:arrow-right" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>

<div className="absolute bottom-10 left-10 hidden lg:block opacity-30 text-xs text-[#38b6ff] font-geist font-medium" style={{}}>
            &lt;AI_Integration status="active" /&gt;
            &lt;System_Optimization value="100%" /&gt;
        </div>
</section>

<section className="md:px-12 z-10 pt-24 pr-6 pb-24 pl-6 relative" id="services">
<div className="max-w-6xl mx-auto">
<div className="mb-16">
<h2 className="md:text-4xl text-3xl tracking-tighter mb-4 font-semibold font-jakarta" style={{outline: 'rgb(22, 163, 74) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}>Core Capabilities</h2>
<div className="w-full h-[1px] bg-gradient-to-r from-white/20 to-transparent"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="glass-panel p-8 md:p-12 rounded-3xl group hover:bg-white/5 transition-colors duration-500">
<div className="w-12 h-12 rounded-xl bg-[#38b6ff]/10 border border-[#38b6ff]/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
<svg aria-hidden="true" className="iconify text-[#38b6ff] iconify--lucide" data-icon="lucide:cpu" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 20v2m0-20v2m5 16v2m0-20v2M2 12h2m-2 5h2M2 7h2m16 5h2m-2 5h2M20 7h2M7 20v2M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></g></svg>
</div>
<h3 className="text-2xl tracking-tight mb-4 group-hover:text-[#38b6ff] transition-colors font-semibold font-jakarta" style={{outline: 'rgb(22, 163, 74) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}>Enterprise AI Automation</h3>
<p className="text-neutral-400 leading-relaxed font-geist font-medium" style={{}}>
                        Seamless integration of AI workflows to automate complex business processes. Replacing manual inefficiency with intelligent, autonomous systems that learn and adapt.
                    </p>
</div>

<div className="glass-panel p-8 md:p-12 rounded-3xl group hover:bg-white/5 transition-colors duration-500">
<div className="w-12 h-12 rounded-xl bg-indigo-400/10 border border-indigo-400/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500" style={{}}>
<svg aria-hidden="true" className="iconify text-cyan-400 iconify--lucide" data-icon="lucide:zap" data-strokeWidth="1.5" data-width="24" height="24" role="img" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-2xl tracking-tight mb-4 group-hover:text-indigo-400 transition-colors font-semibold font-jakarta" style={{outline: 'rgb(22, 163, 74) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}>Next-Gen Web Development</h3>
<p className="text-neutral-400 leading-relaxed font-geist font-medium" style={{}}>
                        AI-accelerated web architecture. Delivering superior, high-performance landing pages faster and more aesthetically advanced than traditional full-stack development.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 relative z-10" id="work">
<div className="max-w-6xl mx-auto">
<div className="flex items-end justify-between mb-12">
<div>
<h2 className="text-3xl md:text-4xl tracking-tighter mb-2 font-semibold font-jakarta" style={{outline: 'rgb(22, 163, 74) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}>Selected Works</h2>
<p className="text-neutral-500 font-geist font-medium" style={{}}>Digital architecture for the modern web.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors font-geist font-medium" href="#" style={{}}>
                    View Archive <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-up-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-2xl border border-white/5 bg-neutral-900 aspect-[4/3] mb-4" style={{}}>
<div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-950 group-hover:scale-105 transition-transform duration-700 ease-out" style={{}}></div>

<div className="absolute inset-4 rounded-xl border border-white/5 bg-gradient-to-tr from-[#38b6ff]/20 to-cyan-500/5 group-hover:opacity-100 opacity-60 transition-opacity duration-500 flex items-center justify-center" style={{}}>
<div className="w-1/2 h-1/2 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl"></div>
</div>
</div>
<h4 className="text-lg tracking-tight group-hover:text-[#38b6ff] transition-colors font-geist font-medium" style={{}}>AI Automation for business</h4>
<p className="text-sm text-neutral-500 mt-1 font-geist font-medium" style={{}}>Scale Faster, Work Smarter. Seamless AI Automation for Every Repetitive Task."</p>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-2xl border border-white/5 bg-neutral-900 aspect-[4/3] mb-4" style={{}}>
<div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-950 group-hover:scale-105 transition-transform duration-700 ease-out" style={{}}></div>
<div className="absolute inset-4 rounded-xl border border-white/5 bg-gradient-to-bl from-indigo-400/20 to-blue-600/5 group-hover:opacity-100 opacity-60 transition-opacity duration-500 flex items-center justify-center">
<div className="w-3/4 h-1/3 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl translate-y-4"></div>
</div>
</div>
<h4 className="text-lg tracking-tight group-hover:text-indigo-400 transition-colors font-geist font-medium" style={{}}>Website Landing Page</h4>
<p className="text-sm text-neutral-500 mt-1 font-geist font-medium" style={{}}>Stop settling for slow code. Start building with smart AI.</p>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-2xl border border-white/5 bg-neutral-900 aspect-[4/3] mb-4" style={{}}>
<div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-950 group-hover:scale-105 transition-transform duration-700 ease-out" style={{}}></div>
<div className="absolute inset-4 rounded-xl border border-white/5 bg-gradient-to-br from-blue-500/20 to-pink-500/5 group-hover:opacity-100 opacity-60 transition-opacity duration-500 flex items-center justify-center" style={{}}>
<div className="grid grid-cols-2 gap-2 w-1/2">
<div className="h-12 bg-white/5 rounded border border-white/10"></div>
<div className="h-12 bg-white/5 rounded border border-white/10"></div>
<div className="h-12 col-span-2 bg-white/5 rounded border border-white/10"></div>
</div>
</div>
</div>
<h4 className="text-lg tracking-tight group-hover:text-blue-400 transition-colors font-geist font-medium" style={{}}>AI Chatbot for business</h4>
<p className="text-sm text-neutral-500 mt-1 font-geist font-medium" style={{}}>Instant Answers. Anywhere. Every Time. Deploy a Smart AI Agent on Your Website, WhatsApp, and Telegram.</p>
</div>
</div>
</div>
</section>

<footer className="py-20 px-6 md:px-12 border-t border-white/5 relative bg-[#050505]" id="contact">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-4xl md:text-5xl tracking-tighter mb-6 text-gradient font-semibold font-jakarta" style={{outline: 'rgb(22, 163, 74) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}>Ready to scale your business?</h2>
<p className="text-neutral-400 mb-10 max-w-lg mx-auto font-geist font-medium" style={{}}>
                Let's discuss how AI integration can transform your operational efficiency today.
            </p>
<button className="bg-white text-black hover:bg-neutral-200 px-8 py-4 rounded-full text-sm tracking-wide transition-all duration-300 transform hover:scale-105 mb-16 font-geist font-medium" style={{}}>
                Schedule a Consultation
            </button>
<div className="flex flex-col md:flex-row items-center justify-between pt-10 border-t border-white/5 text-sm text-neutral-500" style={{}}>
<div className="mb-4 md:mb-0 font-geist font-medium" style={{}}>
                    © 2025 Hamdi Sudirman. All rights reserved.
                </div>
<div className="flex gap-6">
<a className="hover:text-[#38b6ff] transition-colors flex items-center gap-2 font-geist font-medium" href="#" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:linkedin" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></g></svg> LinkedIn
                    </a>
<a className="hover:text-[#38b6ff] transition-colors flex items-center gap-2 font-geist font-medium" href="#" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:mail" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg> Email
                    </a>
<a className="hover:text-[#38b6ff] transition-colors flex items-center gap-2 font-geist font-medium" href="#" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:twitter" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> X.com
                    </a>
</div>
</div>
</div>
</footer>

    </>
  );
}
