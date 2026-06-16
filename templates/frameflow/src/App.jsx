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



      // Icons
      lucide.createIcons();

      // Interactions
      document.addEventListener('DOMContentLoaded', () => {
          // Card Grid Interaction
          const container = document.getElementById('card-grid-container');
          if(container) {
            const cards = container.querySelectorAll('.card-item');
            let activeCard = null;

            cards.forEach((card) => {
                card.addEventListener('click', function(e) {
                    e.stopPropagation();

                    if (activeCard === card) {
                        resetCards();
                        return;
                    }

                    // Reset others
                    cards.forEach((c) => {
                        c.style.filter = 'blur(4px) grayscale(100%)';
                        c.style.opacity = '0.3';
                        c.style.transform = 'scale(0.9)';
                        c.style.zIndex = '1';
                    });

                    // Activate clicked
                    card.style.filter = 'blur(0px) grayscale(0%)';
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1.1) rotate(0deg) translateY(-10px)';
                    card.style.zIndex = '50';
                    activeCard = card;
                });
            });

            document.addEventListener('click', function(e) {
                if (activeCard && !container.contains(e.target)) {
                    resetCards();
                }
            });

            function resetCards() {
                cards.forEach((c) => {
                    c.style.filter = '';
                    c.style.opacity = '';
                    c.style.transform = '';
                    c.style.zIndex = '';
                });
                activeCard = null;
            }
          }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="border-b border-dashed border-white/10 sticky bg-[#050505]/80 w-full z-50 top-0 backdrop-blur-md">
<div className="grid grid-cols-12 h-16 sm:h-20">

<div className="col-span-4 hidden md:flex items-center">
<a className="flex items-center justify-center hover:text-white transition-colors border-dashed text-xs font-medium tracking-wide h-full border-white/10 border-r pr-8 pl-8" href="#features">
            FEATURES
          </a>
<a className="h-full px-8 flex items-center justify-center text-xs font-medium tracking-wide hover:text-white transition-colors border-r border-dashed border-white/10" href="#community">
            COMMUNITY
          </a>
</div>

<div className="col-span-2 md:hidden flex items-center pl-6 border-r border-dashed border-white/10">
<i className="w-6 h-6 text-white" data-lucide="menu"></i>
</div>

<div className="col-span-8 md:col-span-4 flex relative items-center justify-center">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-blue-600 rounded-sm flex items-center justify-center text-white font-bold text-xs">
<i className="w-3.5 h-3.5 text-white" data-lucide="scissors"></i>
</div>
<span className="font-semibold text-white tracking-tight">FRAMEFLOW</span>
</div>
</div>

<div className="col-span-2 md:col-span-4 flex items-center justify-end">
<a className="h-full px-8 hidden md:flex items-center justify-center text-xs font-medium tracking-wide hover:text-white transition-colors border-r border-dashed border-white/10 border-l" href="#">
            SIGN IN
          </a>
<a className="h-full w-full md:w-auto px-8 flex items-center justify-center text-xs font-medium tracking-wide text-white hover:text-blue-400 transition-colors gap-2 bg-white/5" href="#">
            START EDITING
            <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</header>

<main className="flex-grow flex flex-col">

<div className="grid grid-cols-1 lg:grid-cols-2 border-dashed border-white/10 border-b">

<div className="relative overflow-hidden flex flex-col lg:px-20 lg:py-24 pt-16 pr-6 pb-16 pl-6 justify-center border-dashed border-white/10 border-r bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-900/20 via-[#050505] to-[#050505]">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] animate-blob"></div>
</div>
<div className="relative z-10 max-w-2xl">
<div className="flex items-center gap-2 mb-6">
<span className="flex h-2 w-2 rounded-full bg-blue-500"></span>
<p className="text-blue-500 font-mono text-xs tracking-widest uppercase text-white/70">
                        Version 2.0 Live
                    </p>
</div>
<h1 className="text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.05] mb-8 font-light tracking-tighter">
                    Master the art of
                    <br/>
<span className="text-white/50">the perfect cut.</span>
</h1>
<p className="text-lg sm:text-xl leading-relaxed max-w-lg mb-12 font-light text-white/70">
                    Collaborative video editing for teams who move fast. Timestamp feedback, share drafts, and iterate in real-time.
                </p>
<div className="grid grid-cols-1 sm:grid-cols-2 border border-dashed border-white/10 max-w-lg rounded-sm overflow-hidden">
<button className="group flex items-center justify-center gap-3 px-8 py-5 hover:bg-blue-600/10 transition-all duration-300 border-b sm:border-b-0 sm:border-r border-dashed border-white/10">
<span className="text-blue-500 font-medium tracking-wide text-xs uppercase">
                            Start Project
                        </span>
</button>
<button className="group flex items-center justify-center gap-3 px-8 py-5 hover:bg-white/5 transition-all duration-300">
<span className="text-white font-medium tracking-wide text-xs uppercase">
                            Watch Demo
                        </span>
<i className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" data-lucide="play-circle"></i>
</button>
</div>
</div>
</div>

<div className="overflow-hidden relative bg-[#050505] min-h-[500px] lg:min-h-auto flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-[#050505] to-[#050505]"></div>

<div className="w-full h-full flex items-center justify-center p-8 lg:p-16 relative perspective-1000">
<div className="grid grid-cols-6 sm:gap-4 gap-x-3 gap-y-3 w-full max-w-lg" id="card-grid-container">

<div className="card-item col-span-2 sm:col-span-2 self-end transform -rotate-12 translate-y-6 transition-all duration-700 ease-out cursor-pointer hover:scale-105 group relative z-10" data-card-index="0">
<div className="aspect-[9/16] overflow-hidden rounded-xl ring-1 ring-white/10 shadow-lg bg-neutral-900 relative">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="card-item col-span-2 sm:col-span-2 self-center transform rotate-0 z-20 scale-110 transition-all duration-700 ease-out cursor-pointer hover:scale-115 group" data-card-index="1">
<div className="aspect-[9/16] overflow-hidden rounded-xl ring-1 ring-white/20 shadow-2xl bg-neutral-900 relative">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 shadow-xl">
<i className="w-5 h-5 text-white fill-white" data-lucide="play"></i>
</div>
</div>
</div>

<div className="card-item col-span-2 sm:col-span-2 self-start transform rotate-12 translate-y-6 transition-all duration-700 ease-out cursor-pointer hover:scale-105 group relative z-10" data-card-index="2">
<div className="aspect-[9/16] overflow-hidden rounded-xl ring-1 ring-white/10 shadow-lg bg-neutral-900 relative">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="border-dashed bg-[#050505] border-white/10 border-b group/marquee">
<div className="max-w-screen-2xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-12">

<div className="col-span-12 md:col-span-2 py-8 px-6 md:px-10 border-b md:border-b-0 md:border-r border-dashed border-white/10 flex items-center bg-[#050505] relative z-20">
<span className="text-xs font-medium tracking-widest text-neutral-500 uppercase">
                USED BY TEAMS AT
              </span>
</div>

<div className="col-span-12 md:col-span-10 relative overflow-hidden h-20 flex items-center" style={{maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'}}>
<div className="animate-marquee flex">

<div className="w-56 h-20 flex-shrink-0 flex items-center justify-center border-r border-dashed border-white/10 opacity-40 hover:opacity-100 transition-opacity">
<span className="text-lg font-semibold text-white tracking-tighter">LINEAR</span>
</div>
<div className="w-56 h-20 flex-shrink-0 flex items-center justify-center border-r border-dashed border-white/10 opacity-40 hover:opacity-100 transition-opacity">
<span className="text-lg font-semibold text-white tracking-tighter">VERCEL</span>
</div>
<div className="w-56 h-20 flex-shrink-0 flex items-center justify-center border-r border-dashed border-white/10 opacity-40 hover:opacity-100 transition-opacity">
<span className="text-lg font-semibold text-white tracking-tighter">STRIPE</span>
</div>
<div className="w-56 h-20 flex-shrink-0 flex items-center justify-center border-r border-dashed border-white/10 opacity-40 hover:opacity-100 transition-opacity">
<span className="text-lg font-semibold text-white tracking-tighter">RAYCAST</span>
</div>
<div className="w-56 h-20 flex-shrink-0 flex items-center justify-center border-r border-dashed border-white/10 opacity-40 hover:opacity-100 transition-opacity">
<span className="text-lg font-semibold text-white tracking-tighter">LOOM</span>
</div>

<div className="w-56 h-20 flex-shrink-0 flex items-center justify-center border-r border-dashed border-white/10 opacity-40 hover:opacity-100 transition-opacity">
<span className="text-lg font-semibold text-white tracking-tighter">LINEAR</span>
</div>
<div className="w-56 h-20 flex-shrink-0 flex items-center justify-center border-r border-dashed border-white/10 opacity-40 hover:opacity-100 transition-opacity">
<span className="text-lg font-semibold text-white tracking-tighter">VERCEL</span>
</div>
<div className="w-56 h-20 flex-shrink-0 flex items-center justify-center border-r border-dashed border-white/10 opacity-40 hover:opacity-100 transition-opacity">
<span className="text-lg font-semibold text-white tracking-tighter">STRIPE</span>
</div>
<div className="w-56 h-20 flex-shrink-0 flex items-center justify-center border-r border-dashed border-white/10 opacity-40 hover:opacity-100 transition-opacity">
<span className="text-lg font-semibold text-white tracking-tighter">RAYCAST</span>
</div>
<div className="w-56 h-20 flex-shrink-0 flex items-center justify-center border-r border-dashed border-white/10 opacity-40 hover:opacity-100 transition-opacity">
<span className="text-lg font-semibold text-white tracking-tighter">LOOM</span>
</div>
</div>
</div>
</div>
</div>
</div>

<section className="border-dashed bg-[#050505] border-white/10 border-b pt-24 pb-24" id="features">
<div className="max-w-6xl mx-auto px-6">
<div className="mb-16 relative">
<div aria-hidden="true" className="absolute -top-12 -left-12 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 z-10 relative">
<div className="max-w-2xl">
<div className="flex items-center gap-3 mb-4">
<span className="uppercase text-xs font-semibold text-blue-500 tracking-widest">
                                01. Workflow
                            </span>
</div>
<h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-light tracking-tighter mb-4 leading-[1.1] reveal-on-scroll">
                            Frame-accurate
                            <br/>
<span className="text-white/50">feedback loop.</span>
</h2>
<p className="text-lg font-light text-white/70 max-w-md reveal-on-scroll">
                            Stop sending timestamps in emails. Click directly on the video to leave notes that stick to the frame.
                        </p>
</div>
<div className="flex flex-col sm:flex-row items-center gap-4">
<button className="sm:w-auto hover:bg-neutral-200 transition-colors font-medium text-black text-center bg-white w-full rounded-none pt-3 pr-6 pb-3 pl-6">
                            Try Editor
                        </button>
</div>
</div>
<div className="mt-12 h-[1px] w-full bg-gradient-to-r from-neutral-800 via-neutral-700 to-transparent"></div>
</div>

<div className="border border-dashed border-white/10 bg-[#0A0A0A] relative reveal-on-scroll">

<div className="h-12 border-b border-dashed border-white/10 flex items-center justify-between px-4 bg-[#0A0A0A]">
<div className="flex items-center gap-4">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<span className="text-[10px] text-neutral-400 font-mono tracking-widest">PROJECT_NEON_V4.MP4</span>
</div>
<div className="flex items-center gap-3">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-neutral-800 border border-black flex items-center justify-center text-[10px] text-white">AS</div>
<div className="w-6 h-6 rounded-full bg-neutral-800 border border-black flex items-center justify-center text-[10px] text-white">JD</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 h-[600px]">

<div className="lg:col-span-2 border-r border-dashed border-white/10 flex flex-col relative bg-black">
<div className="flex-1 flex items-center justify-center relative group cursor-crosshair overflow-hidden">

<img className="w-full h-full object-cover opacity-50" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>

<div className="absolute top-[30%] left-[45%]">
<div className="w-8 h-8 rounded-full bg-blue-600 border-2 border-white shadow-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
<span className="text-xs font-bold text-white">1</span>
</div>
</div>

<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 pointer-events-none">
<div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
<i className="w-6 h-6 text-white fill-white ml-1" data-lucide="play"></i>
</div>
</div>
</div>

<div className="h-16 bg-[#0A0A0A] border-t border-dashed border-white/10 flex flex-col px-4 justify-center gap-2">
<div className="relative w-full h-1 bg-neutral-800 rounded-full">
<div className="absolute left-0 top-0 h-full w-[45%] bg-blue-600 rounded-full"></div>
<div className="absolute left-[45%] top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full"></div>
</div>
<div className="flex justify-between text-[10px] text-neutral-500 font-mono">
<span>00:14:22</span>
<span>00:32:05</span>
</div>
</div>
</div>

<div className="lg:col-span-1 bg-[#0A0A0A] flex flex-col">
<div className="flex border-b border-dashed border-white/10">
<button className="flex-1 py-3 text-xs font-medium text-white border-b-2 border-blue-600 bg-white/5">Comments (4)</button>
<button className="flex-1 py-3 text-xs font-medium text-neutral-500">Metadata</button>
</div>
<div className="flex-1 p-6 space-y-6 overflow-y-auto">

<div className="flex gap-3">
<div className="mt-1 w-6 h-6 rounded-full bg-blue-900/30 text-blue-400 flex items-center justify-center text-[10px] border border-blue-500/20">1</div>
<div>
<div className="flex items-center gap-2 mb-1">
<span className="text-xs font-medium text-white">Alex R.</span>
<span className="text-[10px] text-neutral-500">00:14</span>
</div>
<p className="text-xs text-neutral-400 leading-relaxed">The grading here feels a bit crushed. Lift shadows?</p>
</div>
</div>

<div className="flex gap-3">
<div className="mt-1 w-6 h-6 rounded-full bg-yellow-900/30 text-yellow-400 flex items-center justify-center text-[10px] border border-yellow-500/20">2</div>
<div>
<div className="flex items-center gap-2 mb-1">
<span className="text-xs font-medium text-white">Sarah K.</span>
<span className="text-[10px] text-neutral-500">00:42</span>
</div>
<p className="text-xs text-neutral-400 leading-relaxed">Cut is slightly late on the beat drop.</p>
<div className="mt-2 pl-3 border-l border-white/10">
<p className="text-[10px] text-neutral-500">You: Fixing it now.</p>
</div>
</div>
</div>
</div>
<div className="p-4 border-t border-dashed border-white/10">
<input className="w-full bg-white/5 border border-white/10 rounded-sm py-2 px-3 text-xs text-white focus:outline-none focus:border-blue-500/50" placeholder="Add a note..." type="text"/>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-dashed bg-[#050505] border-white/10 border-b pt-24 pb-24" id="community">
<div className="max-w-6xl mx-auto px-6">
<div className="mb-16 relative">
<div aria-hidden="true" className="absolute -top-12 -left-12 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 z-10 relative">
<div className="max-w-2xl">
<div className="flex items-center gap-3 mb-4">
<span className="uppercase text-xs font-semibold text-purple-500 tracking-widest">
                                02. Community
                            </span>
</div>
<h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-light tracking-tighter mb-4 leading-[1.1] reveal-on-scroll">
                            Be bold. Make mistakes.
                            <br/>
<span className="text-white/50">Learn together.</span>
</h2>
<p className="text-lg font-light text-white/70 max-w-md reveal-on-scroll">
                            A safe sandbox for your rough cuts. Get constructive feedback from a community that prioritizes growth over ego.
                        </p>
</div>
</div>
<div className="mt-12 h-[1px] w-full bg-gradient-to-r from-neutral-800 via-neutral-700 to-transparent"></div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 border-dashed border-white/10 border-b">

<div className="col-span-12 md:col-span-4 md:border-r border-dashed border-white/10 p-8 flex flex-col justify-center reveal-on-scroll">
<div className="flex items-center gap-2 mb-4">
<i className="w-4 h-4 text-purple-500" data-lucide="heart"></i>
<span className="text-purple-500 font-mono text-xs tracking-widest uppercase">Beginner Friendly</span>
</div>
<h2 className="text-3xl text-white font-light tracking-tighter mb-4">Safe Space</h2>
<p className="text-sm leading-relaxed text-white/70">
                        Private links by default. You choose when to go public. We have strict community guidelines to ensure all feedback is actionable and kind.
                    </p>
</div>

<div className="col-span-12 md:col-span-8 grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-dashed divide-white/10 reveal-on-scroll">

<div className="p-8 hover:bg-white/[0.02] transition-colors relative">
<div className="flex items-center gap-2 mb-4">
<img className="w-8 h-8 rounded-full border border-white/10" src="https://i.pravatar.cc/150?u=4"/>
<div>
<div className="text-xs font-medium text-white">Newbie_Ned</div>
<div className="text-[10px] text-neutral-500">Just posted</div>
</div>
</div>
<div className="aspect-video bg-neutral-900 rounded mb-4 overflow-hidden relative group">
<img className="w-full h-full object-cover opacity-60" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 flex items-center justify-center">
<i className="w-8 h-8 text-white/50" data-lucide="play"></i>
</div>
</div>
<p className="text-xs text-neutral-400">"My first attempt at masking. It's messy around the hair, any tips?"</p>
</div>

<div className="p-8 hover:bg-white/[0.02] transition-colors relative">
<div className="flex items-center gap-2 mb-4">
<div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-xs font-bold text-white">JP</div>
<div>
<div className="text-xs font-medium text-white">JumpingPanda</div>
<div className="text-[10px] text-neutral-500">2h ago</div>
</div>
</div>
<div className="p-4 bg-white/5 border border-white/5 rounded mb-4">
<p className="text-[11px] text-neutral-300 italic">"Don't worry about the hair yet! Try increasing the feather radius by 5px."</p>
</div>
<div className="flex items-center justify-between">
<span className="text-[10px] text-neutral-500">Replying to @Newbie_Ned</span>
<div className="flex gap-1">
<i className="w-3 h-3 text-red-500 fill-red-500" data-lucide="heart"></i>
<span className="text-[10px] text-neutral-400">12</span>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-dashed divide-white/10 border-dashed border-white/10 border-b">

<div className="p-6 flex flex-col gap-3 group hover:bg-white/[0.02] transition-colors reveal-on-scroll">
<i className="w-5 h-5 text-neutral-400 group-hover:text-blue-500 transition-colors" data-lucide="shield-check"></i>
<div>
<h4 className="text-white text-sm font-medium">Private Drafts</h4>
<p className="text-[10px] text-neutral-500 mt-1">Only you can see them.</p>
</div>
</div>

<div className="p-6 flex flex-col gap-3 group hover:bg-white/[0.02] transition-colors reveal-on-scroll">
<i className="w-5 h-5 text-neutral-400 group-hover:text-blue-500 transition-colors" data-lucide="users"></i>
<div>
<h4 className="text-white text-sm font-medium">Team Access</h4>
<p className="text-[10px] text-neutral-500 mt-1">Invite collaborators via email.</p>
</div>
</div>

<div className="p-6 flex flex-col gap-3 group hover:bg-white/[0.02] transition-colors reveal-on-scroll">
<i className="w-5 h-5 text-neutral-400 group-hover:text-blue-500 transition-colors" data-lucide="message-circle"></i>
<div>
<h4 className="text-white text-sm font-medium">Threaded Comments</h4>
<p className="text-[10px] text-neutral-500 mt-1">Keep feedback organized.</p>
</div>
</div>

<div className="p-6 flex flex-col gap-3 group hover:bg-white/[0.02] transition-colors reveal-on-scroll">
<i className="w-5 h-5 text-neutral-400 group-hover:text-blue-500 transition-colors" data-lucide="zap"></i>
<div>
<h4 className="text-white text-sm font-medium">Fast Export</h4>
<p className="text-[10px] text-neutral-500 mt-1">Render comments as CSV.</p>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-dashed bg-[#050505] border-white/10 border-t pt-20 pb-10">
<div className="max-w-6xl mx-auto w-full flex flex-col">

<div className="relative bg-blue-600 text-white w-full overflow-hidden border-x border-t border-dashed border-white/10">

<div className="absolute inset-0 grid grid-cols-4 w-full h-full pointer-events-none">
<div className="border-r border-dashed border-white/20 h-full"></div>
<div className="border-r border-dashed border-white/20 h-full"></div>
<div className="border-r border-dashed border-white/20 h-full"></div>
<div className="h-full"></div>
</div>
<div className="relative z-10 px-6 py-16 md:px-12 md:py-20 flex flex-col justify-between min-h-[400px]">

<a className="group flex items-start justify-between w-full mb-24 md:mb-32 reveal-on-scroll" href="#">
<span className="text-4xl sm:text-6xl md:text-7xl lg:text-[6rem] leading-none font-semibold tracking-tighter break-all">
                            HELLO@FRAME.FLOW
                        </span>
<div className="pt-2 md:pt-6">
<i className="w-10 h-10 md:w-20 md:h-20 transform group-hover:-translate-y-2 group-hover:translate-x-2 transition-transform duration-300" data-lucide="arrow-up-right"></i>
</div>
</a>

<div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 md:text-base leading-relaxed z-20 text-sm font-medium relative">

<div className="flex flex-col gap-4">
<p className="font-semibold text-white/90">San Francisco, CA</p>
<p className="max-w-[200px] text-white/70">101 Market St.<br/>Suite 400</p>
</div>

<div className="flex flex-col gap-4">
<span className="block text-white/50 font-semibold tracking-tight">Product</span>
<div className="flex flex-col gap-2">
<a className="hover:text-white/80 transition-colors" href="#">Features</a>
<a className="hover:text-white/80 transition-colors" href="#">Pricing</a>
<a className="hover:text-white/80 transition-colors" href="#">Changelog</a>
</div>
</div>

<div className="flex flex-col gap-4">
<span className="block text-white/50 font-semibold tracking-tight">Legal</span>
<div className="flex flex-col gap-2">
<a className="hover:text-white/80 transition-colors" href="#">Terms</a>
<a className="hover:text-white/80 transition-colors" href="#">Privacy</a>
</div>
</div>

<div className="flex flex-col gap-4">
<span className="block text-white/50 font-semibold tracking-tight">Social</span>
<div className="flex flex-col gap-2">
<a className="hover:text-white/80 transition-colors" href="#">Twitter</a>
<a className="hover:text-white/80 transition-colors" href="#">GitHub</a>
<a className="hover:text-white/80 transition-colors" href="#">Discord</a>
</div>
</div>
</div>
</div>
</div>

<div className="relative bg-[#050505] text-white w-full overflow-hidden border-x border-b border-dashed border-white/10">

<div className="absolute inset-0 grid grid-cols-4 w-full h-full pointer-events-none opacity-20">
<div className="border-r border-dashed border-white/20 h-full"></div>
<div className="border-r border-dashed border-white/20 h-full"></div>
<div className="border-r border-dashed border-white/20 h-full"></div>
<div className="h-full"></div>
</div>
<div className="relative z-10 w-full flex justify-center items-end leading-none select-none pt-12">
<h1 className="text-[18vw] md:text-[16rem] font-semibold tracking-tighter text-center leading-[0.75] mb-[-0.08em] mix-blend-screen text-white reveal-on-scroll">
                        FLOW
                    </h1>
</div>
</div>
</div>
</footer>


    </>
  );
}
