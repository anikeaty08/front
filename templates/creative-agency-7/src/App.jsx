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



        // Initialize Lucide icons
        lucide.createIcons();

        // Animation Logic
        const card1 = document.getElementById('card-1');
        const card2 = document.getElementById('card-2');
        const card3 = document.getElementById('card-3');

        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            
            // Speed factor
            const speed = 1.3; 

            // Calculate movement based on scroll position
            const y1 = Math.max(0, scrollY * speed);
            const y2 = Math.max(0, (scrollY - 400) * speed);
            
            // Card 1 Logic
            if (y1 > 0) {
                card1.style.transform = `translateY(-${y1}px) rotate(${-y1 * 0.02}deg)`;
            } else {
                card1.style.transform = 'translateY(0) rotate(0deg)';
            }

            // Card 2 Logic
            if (y2 > 0) {
                card2.style.transform = `translateY(-${y2}px) rotate(${-3 + (y2 * 0.02)}deg)`;
            } else {
                card2.style.transform = 'translateY(0) rotate(-3deg)';
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-10 mix-blend-exclusion text-white">
<div className="flex items-center gap-3">
<div className="bg-white/10 backdrop-blur-md p-2 rounded-lg border border-white/10 shadow-sm">
<i className="w-6 h-6 text-white stroke-[1.5]" data-lucide="layers"></i>
</div>
<span className="text-xl font-semibold tracking-tight text-white">Sensory--Lab</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-200">
<a className="hover:text-white transition-colors" href="#">Home</a>
<div className="flex items-center gap-1 cursor-pointer hover:text-white transition-colors">
<span>Work</span>
</div>
<a className="hover:text-white transition-colors" href="#">Blog</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
<button className="hidden md:block bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:scale-105 transition-transform">
            Book a Call
        </button>
<button className="md:hidden text-white">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="menu"></i>
</button>
</nav>

<div className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
<div className="flex whitespace-nowrap animate-marquee opacity-[0.03]">
<span className="text-[30vh] leading-none font-bold tracking-tighter text-black mx-4 uppercase">Capabilities</span>
<span className="text-[30vh] leading-none font-bold tracking-tighter text-black mx-4 uppercase">Capabilities</span>
</div>
</div>

<main className="relative z-10 h-[350vh]">

<div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center perspective-[1000px] overflow-hidden">

<div className="relative w-full max-w-[90vw] md:max-w-3xl aspect-[3/4] md:aspect-[4/3] flex items-center justify-center">

<div className="card absolute inset-0 w-full h-full rounded-2xl md:rounded-3xl origin-bottom transform rotate-6" id="card-3">

<div className="absolute top-10 left-6 right-6 bottom-[-20px] bg-gradient-to-b from-gray-900/20 to-black/80 blur-2xl rounded-[inherit] -z-10"></div>

<div className="relative w-full h-full rounded-[inherit] overflow-hidden bg-gray-800 shadow-inner">
<img alt="Fashion Design" className="w-full h-full object-cover brightness-75" src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="card absolute inset-0 w-full h-full rounded-2xl md:rounded-3xl origin-bottom transform -rotate-3" id="card-2">

<div className="absolute top-8 left-6 right-6 bottom-[-25px] bg-gradient-to-b from-gray-800/30 to-black/90 blur-2xl rounded-[inherit] -z-10"></div>

<div className="relative w-full h-full rounded-[inherit] overflow-hidden bg-gray-700 shadow-inner">
<img alt="Editorial" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&amp;w=2020&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="card absolute inset-0 w-full h-full rounded-2xl md:rounded-3xl origin-center transform rotate-0" id="card-1">

<div className="absolute top-12 left-8 right-8 bottom-[-40px] bg-gradient-to-br from-black/40 via-black/60 to-black blur-[40px] rounded-[inherit] -z-10 opacity-90"></div>

<div className="relative w-full h-full rounded-[inherit] overflow-hidden bg-gray-100 ring-1 ring-white/10">
<img alt="Portrait" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=2864&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div className="max-w-md">
<div className="flex items-center gap-2 mb-4">
<span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-white uppercase tracking-wider border border-white/20">Photography</span>
<span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-white uppercase tracking-wider border border-white/20">2024</span>
</div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white leading-[1.1] mb-2">
                                    Capturing <br/> human essence.
                                </h2>
<p className="text-gray-300 text-base md:text-lg leading-relaxed line-clamp-2 hidden md:block">
                                    An exploration of light, shadow, and the raw emotion found in portraiture across urban environments.
                                </p>
</div>
<button className="group relative inline-flex items-center gap-2 bg-white text-black pl-6 pr-4 py-4 rounded-full text-sm font-semibold hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 whitespace-nowrap shadow-lg">
<span>View Project</span>
<div className="bg-black text-white rounded-full p-1 group-hover:rotate-45 transition-transform duration-300">
<i className="w-4 h-4 stroke-[2]" data-lucide="arrow-up-right"></i>
</div>
</button>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="relative z-20 bg-[#f2f2f2] pt-32 pb-32 overflow-hidden">

<div className="flex flex-col items-center justify-center text-center mb-24 px-6">
<h3 className="text-xl md:text-2xl font-medium tracking-tight text-gray-900 mb-6">Legion Design Creative Agency</h3>
<button className="group bg-black text-white pl-4 pr-5 py-2.5 rounded-lg text-sm font-semibold hover:scale-105 transition-transform flex items-center gap-2.5 shadow-xl shadow-black/10">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
</span>
                Learn More
            </button>
</div>

<div className="w-full max-w-[95vw] md:max-w-7xl mx-auto px-6 md:px-10 mb-20">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
<h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-gray-900 leading-[1.05] max-w-4xl">
                    We team up with visionary <br className="hidden md:block"/>
                    brands to create work that <br className="hidden md:block"/>
                    leaves a <span className="text-gray-300">lasting mark.</span>
</h2>
<p className="text-lg md:text-xl font-medium text-gray-600 mb-1 md:mb-3 whitespace-nowrap">
                    (they love us btw)
                </p>
</div>
</div>

<div className="w-full flex overflow-hidden">
<div className="flex gap-6 animate-marquee whitespace-nowrap min-w-full px-3">

<div className="bg-white rounded-2xl w-64 h-32 flex items-center justify-center gap-3 shrink-0 shadow-sm hover:shadow-md transition-shadow">
<div className="p-1"><i className="w-7 h-7 fill-black text-black stroke-[0]" data-lucide="trophy"></i></div>
<span className="text-2xl font-semibold tracking-tight text-gray-900">Rise</span>
</div>

<div className="bg-white rounded-2xl w-64 h-32 flex items-center justify-center gap-3 shrink-0 shadow-sm hover:shadow-md transition-shadow">
<div className="p-1"><i className="w-7 h-7 fill-black text-black stroke-[0]" data-lucide="music"></i></div>
<span className="text-2xl font-semibold tracking-tight text-gray-900">Volume</span>
</div>

<div className="bg-white rounded-2xl w-64 h-32 flex items-center justify-center gap-3 shrink-0 shadow-sm hover:shadow-md transition-shadow">
<div className="p-1"><i className="w-7 h-7 text-black stroke-[2]" data-lucide="compass"></i></div>
<span className="text-2xl font-semibold tracking-tight text-gray-900">Trace</span>
</div>

<div className="bg-white rounded-2xl w-64 h-32 flex items-center justify-center gap-3 shrink-0 shadow-sm hover:shadow-md transition-shadow">
<div className="p-1"><i className="w-7 h-7 fill-black text-black stroke-[0]" data-lucide="gavel"></i></div>
<span className="text-2xl font-semibold tracking-tight text-gray-900">Rise</span>
</div>

<div className="bg-white rounded-2xl w-64 h-32 flex items-center justify-center gap-3 shrink-0 shadow-sm hover:shadow-md transition-shadow">
<div className="p-1"><i className="w-7 h-7 fill-black text-black stroke-[0]" data-lucide="paw-print"></i></div>
<span className="text-2xl font-semibold tracking-tight text-gray-900">Clues</span>
</div>

<div className="bg-white rounded-2xl w-64 h-32 flex items-center justify-center gap-3 shrink-0 shadow-sm hover:shadow-md transition-shadow">
<div className="p-1"><i className="w-7 h-7 fill-black text-black stroke-[0]" data-lucide="music"></i></div>
<span className="text-2xl font-semibold tracking-tight text-gray-900">Volume</span>
</div>

<div className="bg-white rounded-2xl w-64 h-32 flex items-center justify-center gap-3 shrink-0 shadow-sm hover:shadow-md transition-shadow">
<div className="p-1"><i className="w-7 h-7 fill-black text-black stroke-[0]" data-lucide="trophy"></i></div>
<span className="text-2xl font-semibold tracking-tight text-gray-900">Rise</span>
</div>
<div className="bg-white rounded-2xl w-64 h-32 flex items-center justify-center gap-3 shrink-0 shadow-sm hover:shadow-md transition-shadow">
<div className="p-1"><i className="w-7 h-7 fill-black text-black stroke-[0]" data-lucide="music"></i></div>
<span className="text-2xl font-semibold tracking-tight text-gray-900">Volume</span>
</div>
<div className="bg-white rounded-2xl w-64 h-32 flex items-center justify-center gap-3 shrink-0 shadow-sm hover:shadow-md transition-shadow">
<div className="p-1"><i className="w-7 h-7 text-black stroke-[2]" data-lucide="compass"></i></div>
<span className="text-2xl font-semibold tracking-tight text-gray-900">Trace</span>
</div>
<div className="bg-white rounded-2xl w-64 h-32 flex items-center justify-center gap-3 shrink-0 shadow-sm hover:shadow-md transition-shadow">
<div className="p-1"><i className="w-7 h-7 fill-black text-black stroke-[0]" data-lucide="gavel"></i></div>
<span className="text-2xl font-semibold tracking-tight text-gray-900">Rise</span>
</div>
<div className="bg-white rounded-2xl w-64 h-32 flex items-center justify-center gap-3 shrink-0 shadow-sm hover:shadow-md transition-shadow">
<div className="p-1"><i className="w-7 h-7 fill-black text-black stroke-[0]" data-lucide="paw-print"></i></div>
<span className="text-2xl font-semibold tracking-tight text-gray-900">Clues</span>
</div>
<div className="bg-white rounded-2xl w-64 h-32 flex items-center justify-center gap-3 shrink-0 shadow-sm hover:shadow-md transition-shadow">
<div className="p-1"><i className="w-7 h-7 fill-black text-black stroke-[0]" data-lucide="music"></i></div>
<span className="text-2xl font-semibold tracking-tight text-gray-900">Volume</span>
</div>
</div>
</div>
</section>

<footer className="relative z-20 bg-[#f2f2f2] pb-12 pt-12 flex flex-col items-center justify-center text-center">
<h2 className="text-3xl md:text-6xl font-semibold tracking-tighter text-gray-900 mb-12 max-w-4xl px-6 leading-tight">
            We build digital experiences <br/> that people love.
        </h2>
<div className="w-full max-w-6xl px-6 border-t border-gray-300 pt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
<div className="text-left">
<p className="text-sm font-semibold text-gray-900 mb-1">Get in touch</p>
<a className="text-xl md:text-2xl text-gray-500 hover:text-black transition-colors" href="mailto:hello@sensorylab.com">hello@sensorylab.com</a>
</div>
<div className="flex gap-6">
<a className="text-gray-500 hover:text-black transition-colors" href="#"><i className="w-6 h-6 stroke-[1.5]" data-lucide="instagram"></i></a>
<a className="text-gray-500 hover:text-black transition-colors" href="#"><i className="w-6 h-6 stroke-[1.5]" data-lucide="twitter"></i></a>
<a className="text-gray-500 hover:text-black transition-colors" href="#"><i className="w-6 h-6 stroke-[1.5]" data-lucide="linkedin"></i></a>
</div>
<p className="text-sm text-gray-400">© 2024 Sensory Lab Agency.</p>
</div>
</footer>


    </>
  );
}
