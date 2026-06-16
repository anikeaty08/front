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

        // 3D Slider Logic
        (function() {
            const cards = Array.from(document.querySelectorAll('.dental-card'));
            let current = 2; // Center card

            function applyPositions() {
                // Increased BaseX for wider card spread
                const baseX = window.innerWidth < 640 ? 40 : 180; 
                const baseY = window.innerWidth < 640 ? 15 : 0; 
                const baseR = 0; // Removing rotation for a cleaner wide look, or keep small

                cards.forEach((card, i) => {
                    const offset = i - current;
                    const depth = Math.abs(offset);

                    // Logic to handle visibility of distant cards
                    if (depth > 2) {
                        card.style.opacity = 0;
                        card.style.pointerEvents = 'none';
                        card.style.transform = 'translate3d(0,0,-200px) scale(0.8)';
                        card.style.zIndex = 0;
                        return;
                    }

                    const translateX = offset * baseX;
                    const translateZ = depth * -100; // Depth effect
                    const scale = offset === 0 ? 1 : 0.85; // Size difference
                    const opacity = offset === 0 ? 1 : 0.5;

                    card.style.opacity = opacity;
                    card.style.zIndex = 100 - depth;
                    card.style.pointerEvents = offset === 0 ? 'auto' : 'none';
                    
                    // Transform logic
                    card.style.transform = `translate3d(${translateX}px, 0, ${translateZ}px) scale(${scale})`;
                    
                    // Apply styles directly
                    if (offset === 0) {
                        card.style.filter = 'brightness(1) blur(0px)';
                        card.style.border = '1px solid rgba(255,255,255,0.2)';
                    } else {
                        card.style.filter = 'brightness(0.4) blur(1px)';
                        card.style.border = '1px solid rgba(255,255,255,0.05)';
                    }
                });
            }

            function next() {
                current = (current + 1) % cards.length;
                applyPositions();
            }
            
            function prev() {
                current = (current - 1 + cards.length) % cards.length;
                applyPositions();
            }

            document.getElementById('nextBtn').addEventListener('click', next);
            document.getElementById('prevBtn').addEventListener('click', prev);
            
            // Allow clicking on side cards to navigate
            cards.forEach((card, i) => {
                card.addEventListener('click', () => {
                    if (i !== current) {
                        current = i;
                        applyPositions();
                    }
                });
            });

            window.addEventListener('resize', applyPositions);
            applyPositions();
        })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 -z-10">
<div className="absolute inset-0 bg-black"></div>
<div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-blue-900/20 blur-[120px]"></div>
<div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-900/10 blur-[100px]"></div>
<div className="absolute top-[20%] left-[20%] w-[300px] h-[300px] rounded-full bg-teal-900/10 blur-[80px]"></div>
</div>

<header className="fixed z-50 top-0 inset-x-0 border-b border-white/5 bg-black/70 backdrop-blur-xl transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white">
<svg className="lucide lucide-smile w-5 h-5" data-lucide="smile" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line></svg>
</div>
<span className="font-manrope font-semibold text-lg tracking-tight text-white group-hover:text-blue-100 transition-colors">DentalStudio</span>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#services">Treatments</a>
<a className="hover:text-white transition-colors" href="#technology">Technology</a>
<a className="hover:text-white transition-colors" href="#results">Smile Gallery</a>
<a className="hover:text-white transition-colors" href="#pricing">Plans</a>
</nav>
<div className="flex items-center gap-4">
<button className="hidden sm:block text-sm font-medium text-slate-300 hover:text-white transition-colors">Patient Login</button>
<button className="bg-white text-black px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-200 transition-colors tracking-tight">
                    Book Visit
                </button>
</div>
</div>
</header>
<main className="">

<section className="overflow-hidden pt-32 pb-20 relative">
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-blue-300 mb-8 backdrop-blur-sm">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                    Accepting New Patients for 2025
                </div>
<h1 className="md:text-7xl leading-[1.1] text-5xl font-semibold text-white tracking-tight font-manrope mb-6">
                    Redefining the <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-300 to-white">dental experience.</span>
</h1>
<p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
                    Advanced cosmetic and restorative dentistry in a serene environment. 
                    We design smiles that transform lives with precision and care.
                </p>
</div>

<div className="mt-20 relative w-full overflow-visible">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-500/10 blur-[100px] rounded-full -z-10"></div>
<div className="h-[500px] sm:h-[600px] relative max-w-[1400px] mx-auto perspective-1000">
<div className="flex absolute top-0 right-0 bottom-0 left-0 items-center justify-center" id="cardStack">

<div className="dental-card absolute w-[85%] sm:w-[650px] aspect-[16/10] rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-2xl bg-zinc-900 cursor-pointer transition-all duration-500 ease-out will-change-transform" style={{opacity: '0.5', zIndex: '98', pointerEvents: 'none', transform: 'translate3d(-360px, 0px, -200px) scale(0.85)', filter: 'brightness(0.4) blur(1px)', border: '1px solid rgba(255, 255, 255, 0.05)'}}>
<img alt="Dental Care" className="absolute inset-0 w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5a032db7-a5df-4602-88f5-49c1d4ea84e7_1600w.jpg?w=800&amp;q=80" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 sm:p-10 w-full">
<div className="flex justify-between items-end">
<div>
<div className="text-blue-400 text-sm font-semibold mb-2 tracking-wide uppercase">Cosmetic</div>
<h3 className="text-3xl font-semibold text-white tracking-tight font-manrope">Veneer Aesthetics</h3>
</div>
<button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
<svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>

<div className="dental-card absolute w-[85%] sm:w-[650px] aspect-[16/10] rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-2xl bg-zinc-900 cursor-pointer transition-all duration-500 ease-out will-change-transform" style={{opacity: '0.5', zIndex: '99', pointerEvents: 'none', transform: 'translate3d(-180px, 0px, -100px) scale(0.85)', filter: 'brightness(0.4) blur(1px)', border: '1px solid rgba(255, 255, 255, 0.05)'}}>
<img alt="Modern Clinic" className="absolute inset-0 w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500" src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&amp;w=2000&amp;auto=format&amp;fit=crop" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 sm:p-10 w-full">
<div className="flex justify-between items-end">
<div>
<div className="text-blue-400 text-sm font-semibold mb-2 tracking-wide uppercase">Facility</div>
<h3 className="text-3xl font-semibold text-white tracking-tight font-manrope">State-of-the-Art Suite</h3>
</div>
<button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
<svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>

<div className="dental-card sm:w-[650px] aspect-[16/10] overflow-hidden cursor-pointer transition-all duration-500 ease-out will-change-transform bg-zinc-900 w-[85%] ring-white/10 ring-1 rounded-3xl absolute shadow-2xl" style={{opacity: '1', zIndex: '100', pointerEvents: 'auto', transform: 'translate3d(0px, 0px, 0px) scale(1)', filter: 'brightness(1) blur(0px)', border: '1px solid rgba(255, 255, 255, 0.2)'}}>
<img alt="Orthodontics" className="absolute inset-0 w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500" src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="bg-center bg-cover absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.2), transparent), url(\'https://images.unsplash.com/photo-1600170457229-43c2c8f00d3b?w=2160&amp'}}></div>
<div className="absolute bottom-0 left-0 p-8 sm:p-10 w-full">
<div className="flex justify-between items-end">
<div className="">
<div className="text-blue-400 text-sm font-semibold mb-2 tracking-wide uppercase">Orthodontics</div>
<h3 className="text-3xl font-semibold text-white tracking-tight font-manrope">Invisible Aligners</h3>
</div>
<button className="flex hover:bg-white hover:text-black transition-colors text-white bg-white/10 w-12 h-12 rounded-full backdrop-blur-md items-center justify-center">
<svg className="lucide lucide-arrow-right w-[24px] h-[20px]" data-icon-replaced="true" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '20px', color: 'rgb(0, 0, 0)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>

<div className="dental-card absolute w-[85%] sm:w-[650px] aspect-[16/10] rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-2xl bg-zinc-900 cursor-pointer transition-all duration-500 ease-out will-change-transform" style={{opacity: '0.5', zIndex: '99', pointerEvents: 'none', transform: 'translate3d(180px, 0px, -100px) scale(0.85)', filter: 'brightness(0.4) blur(1px)', border: '1px solid rgba(255, 255, 255, 0.05)'}}>
<img alt="Diagnostics" className="absolute inset-0 w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500" src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 sm:p-10 w-full">
<div className="flex justify-between items-end">
<div>
<div className="text-blue-400 text-sm font-semibold mb-2 tracking-wide uppercase">Diagnostics</div>
<h3 className="text-3xl font-semibold text-white tracking-tight font-manrope">3D Digital Scanning</h3>
</div>
<button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
<svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>

<div className="dental-card absolute w-[85%] sm:w-[650px] aspect-[16/10] rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-2xl bg-zinc-900 cursor-pointer transition-all duration-500 ease-out will-change-transform" style={{opacity: '0.5', zIndex: '98', pointerEvents: 'none', transform: 'translate3d(360px, 0px, -200px) scale(0.85)', filter: 'brightness(0.4) blur(1px)', border: '1px solid rgba(255, 255, 255, 0.05)'}}>
<img alt="Implants" className="absolute inset-0 w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500" src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 sm:p-10 w-full">
<div className="flex justify-between items-end">
<div>
<div className="text-blue-400 text-sm font-semibold mb-2 tracking-wide uppercase">Restorative</div>
<h3 className="text-3xl font-semibold text-white tracking-tight font-manrope">Dental Implants</h3>
</div>
<button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
<svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-4 translate-y-12">
<button className="group w-12 h-12 rounded-full border border-white/10 bg-black/50 backdrop-blur-md flex items-center justify-center hover:bg-white hover:text-black transition-all" id="prevBtn">
<svg className="lucide lucide-arrow-left w-5 h-5" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<button className="group w-12 h-12 rounded-full border border-white/10 bg-black/50 backdrop-blur-md flex items-center justify-center hover:bg-white hover:text-black transition-all" id="nextBtn">
<svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-white/[0.02]">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
<div className="text-center">
<div className="text-4xl font-semibold text-white tracking-tight mb-2">15k+</div>
<div className="text-sm text-slate-500 font-medium uppercase tracking-wider">Patients Treated</div>
</div>
<div className="text-center">
<div className="text-4xl font-semibold text-white tracking-tight mb-2">99%</div>
<div className="text-sm text-slate-500 font-medium uppercase tracking-wider">Satisfaction Rate</div>
</div>
<div className="text-center">
<div className="text-4xl font-semibold text-white tracking-tight mb-2">25+</div>
<div className="text-sm text-slate-500 font-medium uppercase tracking-wider">Years Experience</div>
</div>
<div className="text-center">
<div className="text-4xl font-semibold text-white tracking-tight mb-2">24/7</div>
<div className="text-sm text-slate-500 font-medium uppercase tracking-wider">Emergency Care</div>
</div>
</div>
</section>

<section className="py-32 relative" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20 max-w-2xl">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6 font-manrope">Comprehensive oral care.</h2>
<p className="text-lg text-slate-400">
                        Using the latest technology to provide precise diagnoses and effective treatments, tailored to your unique smile.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-8 rounded-3xl bg-zinc-900 border border-white/5 hover:border-white/10 transition-colors relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-8">
<svg className="lucide lucide-sparkles w-6 h-6" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Cosmetic Dentistry</h3>
<p className="text-slate-400 text-sm leading-relaxed mb-8">Teeth whitening, porcelain veneers, and complete smile makeovers designed to boost your confidence.</p>
<a className="inline-flex items-center text-sm font-medium text-white hover:text-blue-300 transition-colors" href="#">
                            Learn more <svg className="lucide lucide-chevron-right w-4 h-4 ml-1" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>

<div className="group p-8 rounded-3xl bg-zinc-900 border border-white/5 hover:border-white/10 transition-colors relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-indigo-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-8">
<svg className="lucide lucide-hammer w-6 h-6" data-lucide="hammer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9"></path><path d="m18 15 4-4"></path><path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"></path></svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Dental Implants</h3>
<p className="text-slate-400 text-sm leading-relaxed mb-8">Permanent solutions for missing teeth using biocompatible titanium materials and 3D guided surgery.</p>
<a className="inline-flex items-center text-sm font-medium text-white hover:text-blue-300 transition-colors" href="#">
                            Learn more <svg className="lucide lucide-chevron-right w-4 h-4 ml-1" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>

<div className="group p-8 rounded-3xl bg-zinc-900 border border-white/5 hover:border-white/10 transition-colors relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-teal-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400 mb-8">
<svg className="lucide lucide-scan-face w-6 h-6" data-lucide="scan-face" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><path d="M9 9h.01"></path><path d="M15 9h.01"></path></svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Orthodontics</h3>
<p className="text-slate-400 text-sm leading-relaxed mb-8">Straighten your teeth discreetly with Invisalign® clear aligners or modern ceramic brackets.</p>
<a className="inline-flex items-center text-sm font-medium text-white hover:text-blue-300 transition-colors" href="#">
                            Learn more <svg className="lucide lucide-chevron-right w-4 h-4 ml-1" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-4 font-manrope">Patient-first methodology</h2>
<p className="text-slate-400 max-w-2xl mx-auto">We combine hospitality with clinical excellence to ensure your visit is as comfortable as it is effective.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6 h-auto md:h-[600px]">

<div className="md:col-span-2 row-span-2 rounded-3xl border border-white/5 bg-zinc-900 overflow-hidden relative group">
<img alt="Consultation" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-10">
<h3 className="text-2xl font-semibold text-white mb-2">Personalized Treatment Plans</h3>
<p className="text-slate-300 text-sm max-w-md">Every smile is unique. We spend time understanding your goals before touching a single tooth, ensuring results that look and feel natural.</p>
</div>
</div>

<div className="rounded-3xl border border-white/5 bg-zinc-900 p-8 flex flex-col justify-between">
<svg className="lucide lucide-shield-check w-10 h-10 text-emerald-400" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<div>
<h3 className="text-xl font-semibold text-white mb-2">Pain-Free Dentistry</h3>
<p className="text-slate-400 text-sm">Advanced sedation options and gentle techniques for anxiety-free visits.</p>
</div>
</div>

<div className="rounded-3xl border border-white/5 bg-zinc-900 p-8 flex flex-col justify-between">
<svg className="lucide lucide-clock w-10 h-10 text-blue-400" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<div>
<h3 className="text-xl font-semibold text-white mb-2">Same-Day Results</h3>
<p className="text-slate-400 text-sm">On-site CEREC® milling allows us to create crowns and veneers in a single visit.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 text-center">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6 font-manrope">Transparent Pricing</h2>
<p className="text-slate-400 max-w-lg mx-auto">No hidden fees. Flexible payment plans and insurance compatibility.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

<div className="rounded-2xl bg-zinc-900 border border-white/5 p-8 flex flex-col">
<div className="mb-6">
<h3 className="text-lg font-medium text-white">Check-up</h3>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-4xl font-semibold text-white">$150</span>
<span className="text-slate-500">/visit</span>
</div>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex gap-3 text-sm text-slate-300"><svg className="lucide lucide-check w-5 h-5 text-blue-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Comprehensive Exam</li>
<li className="flex gap-3 text-sm text-slate-300"><svg className="lucide lucide-check w-5 h-5 text-blue-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Digital X-Rays</li>
<li className="flex gap-3 text-sm text-slate-300"><svg className="lucide lucide-check w-5 h-5 text-blue-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Professional Cleaning</li>
<li className="flex gap-3 text-sm text-slate-300"><svg className="lucide lucide-check w-5 h-5 text-blue-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Oral Cancer Screen</li>
</ul>
<button className="w-full py-3 rounded-lg border border-white/10 text-white hover:bg-white hover:text-black transition-colors font-medium">Book Exam</button>
</div>

<div className="rounded-2xl bg-zinc-900 border border-blue-500/50 p-8 flex flex-col relative shadow-[0_0_50px_-12px_rgba(59,130,246,0.2)]">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Most Popular</div>
<div className="mb-6">
<h3 className="text-lg font-medium text-white">Whitening</h3>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-4xl font-semibold text-white">$450</span>
<span className="text-slate-500">/session</span>
</div>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex gap-3 text-sm text-slate-300"><svg className="lucide lucide-check w-5 h-5 text-blue-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Zoom!® Technology</li>
<li className="flex gap-3 text-sm text-slate-300"><svg className="lucide lucide-check w-5 h-5 text-blue-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Up to 8 shades lighter</li>
<li className="flex gap-3 text-sm text-slate-300"><svg className="lucide lucide-check w-5 h-5 text-blue-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Desensitizing Treatment</li>
<li className="flex gap-3 text-sm text-slate-300"><svg className="lucide lucide-check w-5 h-5 text-blue-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Take-home touchup kit</li>
</ul>
<button className="w-full py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition-colors font-medium">Book Whitening</button>
</div>

<div className="rounded-2xl bg-zinc-900 border border-white/5 p-8 flex flex-col">
<div className="mb-6">
<h3 className="text-lg font-medium text-white">Invisalign®</h3>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-4xl font-semibold text-white">$3,500</span>
<span className="text-slate-500">/start</span>
</div>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex gap-3 text-sm text-slate-300"><svg className="lucide lucide-check w-5 h-5 text-blue-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> 3D Smile Simulation</li>
<li className="flex gap-3 text-sm text-slate-300"><svg className="lucide lucide-check w-5 h-5 text-blue-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> All Aligner Sets</li>
<li className="flex gap-3 text-sm text-slate-300"><svg className="lucide lucide-check w-5 h-5 text-blue-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Monthly Check-ins</li>
<li className="flex gap-3 text-sm text-slate-300"><svg className="lucide lucide-check w-5 h-5 text-blue-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Post-treatment Retainers</li>
</ul>
<button className="w-full py-3 rounded-lg border border-white/10 text-white hover:bg-white hover:text-black transition-colors font-medium">Consultation</button>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="absolute inset-0 bg-blue-900/10"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6 font-manrope">Ready to love your smile?</h2>
<p className="text-slate-400 mb-10 text-lg">Book your complimentary consultation today and discover what modern dentistry can do for you.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-slate-200 transition-colors">Book Appointment</button>
<button className="px-8 py-4 rounded-full border border-white/10 text-white font-medium hover:bg-white/5 transition-colors">Call (555) 123-4567</button>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/10 bg-black pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center text-white">
<svg className="lucide lucide-smile w-4 h-4" data-lucide="smile" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line></svg>
</div>
<span className="font-semibold text-white">DentalStudio</span>
</a>
<p className="text-sm text-slate-500 leading-relaxed">
                        Excellence in cosmetic and restorative dentistry. Your smile is our masterpiece.
                    </p>
</div>
<div>
<h4 className="text-white font-medium mb-4">Treatments</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-blue-400" href="#">Porcelain Veneers</a></li>
<li><a className="hover:text-blue-400" href="#">Invisalign</a></li>
<li><a className="hover:text-blue-400" href="#">Implants</a></li>
<li><a className="hover:text-blue-400" href="#">Whitening</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Clinic</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-blue-400" href="#">Our Team</a></li>
<li><a className="hover:text-blue-400" href="#">Technology</a></li>
<li><a className="hover:text-blue-400" href="#">Patient Safety</a></li>
<li><a className="hover:text-blue-400" href="#">Careers</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Contact</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li>123 Medical Plaza, Suite 400</li>
<li>New York, NY 10001</li>
<li>hello@dentalstudio.com</li>
<li>(555) 123-4567</li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
<p>© 2025 DentalStudio Inc. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-slate-400" href="#">Privacy Policy</a>
<a className="hover:text-slate-400" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
