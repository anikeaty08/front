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



        document.addEventListener('mousemove', (e) => {
            const cursor = document.getElementById('cursor');
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });
    


(function() {
    // Locate the current element context
    var el = document.querySelector('[data-element-id="aura-emj7axncz2ok3ywaq"]');
    if (!el) return;
    
    // Traverse to the main card and the parent container to find controls
    var card = el.closest('.group\\/card');
    if (!card) return;
    var container = card.parentElement;
    var controls = container ? container.querySelector('.absolute.-bottom-24') : null;
    if (!controls) return;
    
    // Get target elements to update
    var img = card.querySelector('img');
    var title = card.querySelector('h3');
    var subtitle = card.querySelector('span.block.text-\\[10px\\]');
    var desc = card.querySelector('p');
    var label = card.querySelector('.absolute.top-8 .flex-col span');
    
    // Get buttons
    var btns = controls.querySelectorAll('button');
    var prev = btns[0], next = btns[1];
    
    // Project Data
    var slides = [
        {
            src: "https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&q=80",
            title: "Aether <span class='text-white/30'>&</span> Stone",
            sub: "Sculptural Identity",
            desc: "Redefining spatial luxury through raw materiality and silence. A brand system built on the absence of noise.",
            label: "Project 01"
        },
        {
            src: "https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&q=80",
            title: "Orbital <span class='text-white/30'>&</span> Void",
            sub: "Kinetic Typography",
            desc: "A gravitational approach to motion design. Capturing the tension between static form and fluid movement.",
            label: "Project 02"
        },
        {
            src: "https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=2160&q=80",
            title: "Silica <span class='text-white/30'>&</span> Form",
            sub: "Transparent Systems",
            desc: "Crystalline structures applied to digital interfaces. Finding clarity through complex refractions.",
            label: "Project 03"
        }
    ];
    
    var idx = 0;
    var isAnimating = false;
    
    function updateSlide(dir) {
        if (isAnimating) return;
        isAnimating = true;
        
        idx = (idx + dir + slides.length) % slides.length;
        var s = slides[idx];
        
        // Animate Out: Force opacity 0 to hide content
        if (img) img.style.opacity = '0';
        [title, subtitle, desc, label].forEach(function(item) {
            if (item) {
                item.style.transition = 'opacity 0.5s ease';
                item.style.opacity = '0';
            }
        });
        
        // Wait for fade out, then swap
        setTimeout(function() {
            if (img) img.src = s.src;
            if (title) title.innerHTML = s.title;
            if (subtitle) subtitle.innerText = s.sub;
            if (desc) desc.innerText = s.desc;
            if (label) label.innerText = s.label;
            
            // Wait for swap render, then fade in
            setTimeout(function() {
                if (img) img.style.opacity = '1';
                // Remove inline opacity to restore CSS hover effects
                [title, subtitle, desc, label].forEach(function(item) {
                    if (item) {
                        item.style.opacity = '';
                        item.style.transition = '';
                    }
                });
                isAnimating = false;
            }, 100);
        }, 500); // Sync with duration-500
    }
    
    // Attach Listeners
    if (prev) prev.onclick = function(e) { e.preventDefault(); updateSlide(-1); };
    if (next) next.onclick = function(e) { e.preventDefault(); updateSlide(1); };
})();



        window.switchArchive = function(id) {
            const tabs = ['obsidian', 'silk', 'stone'];
            tabs.forEach(tab => {
                // Elements
                const tabEl = document.getElementById('tab-' + tab);
                const lineEl = document.getElementById('line-' + tab);
                const contentEl = document.getElementById('content-' + tab);
                const descEl = document.getElementById('desc-' + tab);
                const visualEl = document.getElementById('visual-' + tab);
                
                if (tab === id) {
                    // Activate Tab
                    tabEl.classList.remove('bg-transparent', 'border-white/5');
                    tabEl.classList.add('bg-white/[0.02]', 'border-transparent');
                    
                    lineEl.classList.remove('w-0', 'group-hover:w-full');
                    lineEl.classList.add('w-full');
                    
                    contentEl.classList.remove('opacity-50', 'group-hover:opacity-100');
                    contentEl.classList.add('opacity-100');
                    
                    descEl.classList.remove('opacity-0', 'group-hover:opacity-100');
                    descEl.classList.add('opacity-100');
                    
                    // Show Visual
                    visualEl.classList.remove('opacity-0', 'pointer-events-none', 'scale-95', 'z-0');
                    visualEl.classList.add('opacity-100', 'z-10', 'scale-100');
                } else {
                    // Deactivate Tab
                    tabEl.classList.add('bg-transparent', 'border-white/5');
                    tabEl.classList.remove('bg-white/[0.02]', 'border-transparent');
                    
                    lineEl.classList.add('w-0', 'group-hover:w-full');
                    lineEl.classList.remove('w-full');
                    
                    contentEl.classList.add('opacity-50', 'group-hover:opacity-100');
                    contentEl.classList.remove('opacity-100');
                    
                    descEl.classList.add('opacity-0', 'group-hover:opacity-100');
                    descEl.classList.remove('opacity-100');
                    
                    // Hide Visual
                    visualEl.classList.remove('opacity-100', 'z-10', 'scale-100');
                    visualEl.classList.add('opacity-0', 'pointer-events-none', 'scale-95', 'z-0');
                }
            });
        }
    


        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="" id="cursor" style={{left: '2007px', top: '117px'}}></div>


<div className="grain"></div>

<nav className="fixed pointer-events-none z-50 md:p-12 flex flex-col w-full h-screen pt-6 pr-6 pb-6 pl-6 top-0 left-0 justify-between">

<div className="flex justify-between items-start pointer-events-auto blend-diff">
<div className="group cursor-pointer">
<h1 className="text-xs uppercase tracking-[0.4em] font-light group-hover:tracking-[0.6em] transition-all duration-700">void branding</h1>
<span className="text-[10px] opacity-50 font-mono mt-1 block">Est. 1924 — aura.build</span>
</div>
<div className="flex gap-12">
<button className="text-[10px] uppercase tracking-[0.3em] hover:line-through decoration-[0.5px]">Menu</button>
<button className="text-[10px] uppercase tracking-[0.3em] hover:line-through decoration-[0.5px]">Menu</button>
</div>
</div>

<div className="flex justify-between items-end pointer-events-auto blend-diff">
<div className="flex flex-col gap-2">
<span className="text-[10px] font-mono opacity-40">Coords: 48.8566° N, 2.3522° E</span>
<div className="w-24 h-px bg-white/20"></div>
</div>
<button className="group flex items-center gap-4">
<span className="text-[10px] uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-4 group-hover:translate-x-0">Inquire</span>
<div className="w-2 h-2 bg-white rounded-full group-hover:scale-[3] transition-transform duration-500 mix-blend-exclusion"></div>
</button>
</div>
</nav>

<section className="flex overflow-hidden w-full h-[120vh] relative items-center justify-center" style={{}}>

<div className="z-0 opacity-40 absolute top-0 right-0 bottom-0 left-0" style={{}}>

<img alt="Void" className="contrast-125 animate-drift w-full h-full object-cover grayscale brightness-50 scale-110" src="https://images.unsplash.com/photo-1759014361901-da620369d9d8?w=3840&amp;q=80"/>
</div>

<div className="z-10 flex flex-col text-white text-center mix-blend-difference relative items-center">
<p className="text-[10px] md:text-xs uppercase animate-pulse tracking-[.5em] font-mono mb-8" style={{}}>Branding beyond season, trend, and noise.</p>
<div className="group relative">
<h2 className="text-[18vw] leading-[0.8] hover:italic transition-all duration-1000 cursor-none select-none font-light italic tracking-tight font-cormorant">
                    Void
                </h2>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30vw] h-[40vh] bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-[-1] overflow-hidden mix-blend-overlay">
</div>
</div>
</div>

<div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/30 text-[10px] uppercase tracking-[0.2em] writing-vertical">
            Explore the unseen
        </div>
</section>

<section className="bg-[#050505] w-full z-10 pt-40 pb-40 relative">

<div className="absolute top-20 w-full overflow-hidden whitespace-nowrap opacity-[0.03] pointer-events-none">
<div className="animate-marquee inline-block">
<span className="text-[20vw] font-cormorant italic pr-24">Branding of Silence — Curating the Void — </span>
<span className="text-[20vw] font-cormorant italic pr-24">Branding of Silence — Curating the Void — </span>
</div>
</div>
<div className="max-w-screen-2xl mr-auto ml-auto pr-6 pl-6 relative">

<div className="w-full md:w-[40%] ml-auto mb-40 text-right mix-blend-difference">
<p className="md:text-4xl leading-tight text-2xl text-[#E6E6E6] font-cormorant" style={{}}>"We do not design identities. We excavate <span className="italic text-neutral-500">emotions</span>. In a world of noise, the ultimate rebellion is silence."</p>
</div>

<div className="relative w-full h-[90vh] mb-40 group cursor-pointer">
<div className="absolute left-0 top-0 w-[80%] md:w-[60%] h-full z-10 overflow-hidden bg-[#111]">
<img className="group-hover:opacity-100 group-hover:scale-105 transition-all duration-[1.5s] ease-out opacity-60 w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1516484411845-e74b77f26b83?w=2560&amp;q=80"/>
</div>

<div className="absolute right-[5%] top-[20%] z-20 text-right mix-blend-difference">
<span className="block text-[10px] tracking-widest font-mono opacity-50 mb-2" style={{}}>LATEST PROJECT</span>
<h3 className="text-6xl md:text-8xl font-cormorant italic mb-4 group-hover:translate-x-[-20px] transition-transform duration-700">Cartier rebrand</h3>
<p className="text-xs max-w-[200px] ml-auto font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        A fashion identity system excavated beneath the industry’s noise.
                    </p>
</div>
</div>

<div className="min-h-screen flex w-full mb-40 relative items-center justify-center">

<div className="relative w-[85vw] md:w-[60vw] lg:w-[32vw] aspect-[3/4] flex flex-col items-center justify-center group perspective-1000">

<div className="absolute inset-0 w-full h-full bg-[#111] rounded-sm border border-white/5 transform scale-[0.82] -translate-y-16 opacity-30 transition-all duration-1000 ease-out group-hover:-translate-y-20 group-hover:rotate-[-3deg] overflow-hidden pointer-events-none mix-blend-luminosity">
<img className="w-full h-full object-cover grayscale opacity-50" src="https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=2160&amp;q=80"/>
<div className="absolute inset-0 bg-black/60"></div>
</div>

<div className="absolute inset-0 w-full h-full bg-[#1a1a1a] rounded-sm border border-white/10 transform scale-[0.90] -translate-y-8 opacity-60 transition-all duration-700 ease-out group-hover:-translate-y-10 group-hover:rotate-[2deg] overflow-hidden shadow-2xl pointer-events-none">
<img className="w-full h-full object-cover grayscale opacity-80 mix-blend-luminosity" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

<div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-40 transition-opacity duration-500">
<span className="text-[10px] font-mono text-white tracking-widest uppercase">Next: Orbital</span>
</div>
</div>

<div className="relative w-full h-full bg-[#050505] rounded-sm border border-white/10 shadow-[0_30px_100px_-20px_rgba(0,0,0,0.9)] z-20 overflow-hidden transition-transform duration-500 ease-out group-hover:scale-[1.01] cursor-pointer group/card">

<img className="transition-all duration-1000 group-hover/card:grayscale-0 group-hover/card:scale-105 w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1570462322158-0d4b82b8475c?w=2560&amp;q=80"/>

<div className="transition-opacity duration-500 bg-gradient-to-b from-black/20 via-transparent to-black/90 opacity-90 absolute top-0 right-0 bottom-0 left-0">

</div>
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-20 pointer-events-none"></div>

<div className="absolute top-8 left-8 right-8 flex justify-between items-start opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 delay-100">
<div className="flex flex-col gap-1">
<span className="text-[9px] font-mono text-white/50 tracking-[0.2em] uppercase">Project 01</span>
<span className="w-8 h-px bg-white/30"></span>
</div>
<span className="text-[9px] font-mono text-white/50 tracking-[0.2em] uppercase border border-white/10 px-2 py-1 rounded-full backdrop-blur-sm">Featured</span>
</div>

<div className="absolute bottom-0 left-0 w-full p-8 md:p-12 transform translate-y-4 group-hover/card:translate-y-0 transition-transform duration-700 ease-out">
<div className="overflow-hidden mb-2">
<span className="block text-[10px] font-mono text-[#E6E6E6] tracking-[0.3em] uppercase opacity-70 mb-3 transform translate-y-full group-hover/card:translate-y-0 transition-transform duration-700 delay-100">Sculptural Identity</span>
</div>
<h3 className="md:text-6xl leading-[0.9] transform group-hover/card:translate-y-0 group-hover/card:opacity-100 transition-all duration-700 delay-150 text-5xl italic text-white tracking-tight font-cormorant opacity-0 mb-6 translate-y-8" style={{}}>PATEK PHILIPPE</h3>
<div className="h-px w-full bg-white/10 mb-6 scale-x-0 group-hover/card:scale-x-100 origin-left transition-transform duration-1000 delay-200"></div>
<div className="flex justify-between items-end opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 delay-300">
<p className="text-sm font-light text-neutral-400 max-w-[240px] leading-relaxed">
                        Redefining spatial luxury through raw materiality and silence. A brand system built on the absence of noise.
                    </p>
<button className="group/btn flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-white hover:text-neutral-300 transition-colors">
                        Explore
                        <svg className="lucide lucide-arrow-right transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>

<div className="absolute -bottom-24 w-full flex items-center justify-between gap-8 z-30 px-4">

<button className="flex items-center gap-3 group/nav text-white/30 hover:text-white transition-colors duration-300">
<div className="p-3 border border-white/10 rounded-full hover:bg-white/5 transition-colors">
<svg className="lucide lucide-arrow-left transition-transform duration-300 group-hover/nav:-translate-x-0.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</div>
<span className="text-[9px] font-mono tracking-widest uppercase opacity-0 group-hover/nav:opacity-100 transition-opacity duration-300 hidden md:block">Prev</span>
</button>

<div className="flex gap-2">
<div className="w-12 h-0.5 bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
<div className="w-2 h-0.5 bg-white/20 hover:bg-white/50 transition-colors cursor-pointer"></div>
<div className="w-2 h-0.5 bg-white/20 hover:bg-white/50 transition-colors cursor-pointer"></div>
<div className="w-2 h-0.5 bg-white/20 hover:bg-white/50 transition-colors cursor-pointer"></div>
</div>

<button className="flex items-center gap-3 group/nav text-white/30 hover:text-white transition-colors duration-300">
<span className="text-[9px] font-mono tracking-widest uppercase opacity-0 group-hover/nav:opacity-100 transition-opacity duration-300 hidden md:block">Next</span>
<div className="p-3 border border-white/10 rounded-full hover:bg-white/5 transition-colors">
<svg className="lucide lucide-arrow-right transition-transform duration-300 group-hover/nav:translate-x-0.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</button>
</div>
</div>
</div>

<div className="relative w-screen -ml-6 md:-ml-[calc((100vw-100%)/2)] h-[70vh] overflow-hidden group mb-40">
<img className="w-full h-full object-cover grayscale brightness-[0.4] group-hover:brightness-[0.6] group-hover:scale-105 transition-all duration-[2s] ease-linear" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<h3 className="text-white text-4xl md:text-7xl font-cormorant tracking-[0.1em] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-sm group-hover:blur-0">
                        THE VOID
                    </h3>
</div>
</div>
</div>
</section>

<section className="min-h-screen flex overflow-hidden select-none bg-[#050505] pt-32 pb-32 relative items-center justify-center">

<div className="absolute inset-0 pointer-events-none z-0">

<div className="absolute top-0 bottom-0 left-1/3 w-px bg-white/[0.03]"></div>
<div className="absolute top-0 bottom-0 right-12 w-px bg-white/[0.03]"></div>

<div className="absolute top-32 bottom-32 left-0 right-0 h-px bg-white/[0.03]"></div>

<span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vw] font-cormorant italic text-white/[0.02] tracking-tighter whitespace-nowrap pointer-events-none">
            Archive
        </span>
</div>

<div className="relative z-10 w-full max-w-screen-2xl mx-auto px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center h-full">

<div className="lg:col-span-5 flex flex-col justify-center h-full relative">

<div className="mb-12">
<div className="flex items-center gap-4 mb-6">
<span className="h-px w-12 bg-white/30"></span>
<span className="text-[10px] font-mono text-white/40 uppercase tracking-[0.3em]">Collection</span>
</div>
<h2 className="text-6xl md:text-8xl font-cormorant italic font-light text-white tracking-tighter leading-[0.9] mb-8">
                    The Suspended  <span className="text-white/40">Archive</span>
</h2>
<p className="text-sm font-light text-white/60 leading-relaxed max-w-md">
                    We preserve what cannot be owned. Each element in this archive is not an asset, but a vessel for identity held in suspension.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">

<div className="group relative p-5 cursor-pointer bg-white/[0.02] border border-transparent hover:bg-white/[0.05] transition-all duration-500 overflow-hidden" id="tab-obsidian" onclick="switchArchive('obsidian')">
<div className="absolute left-0 bottom-0 right-0 h-0.5 bg-white transition-all duration-500 w-full" id="line-obsidian"></div>
<div className="flex flex-col h-full justify-between relative z-10 gap-3 opacity-100" id="content-obsidian">
<div className="flex justify-between items-start gap-2">
<span className="text-lg font-cormorant italic text-white leading-tight group-hover:-translate-y-0.5 transition-transform duration-500">Core Identity</span>
</div>
<p className="text-[9px] text-white/50 font-mono uppercase tracking-wider opacity-100 transition-opacity" id="desc-obsidian">logo • naming • brand foundation</p>
</div>
</div>

<div className="group relative p-5 cursor-pointer bg-transparent border border-white/5 hover:bg-white/[0.05] hover:border-transparent transition-all duration-500 overflow-hidden" id="tab-silk" onclick="switchArchive('silk')">
<div className="absolute left-0 bottom-0 right-0 h-0.5 bg-white transition-all duration-500 w-0 group-hover:w-full" id="line-silk"></div>
<div className="flex flex-col group-hover:opacity-100 transition-opacity opacity-50 h-full z-10 relative gap-x-3 gap-y-3 justify-between" id="content-silk">
<div className="flex justify-between items-start gap-2">
<span className="leading-tight group-hover:-translate-y-0.5 transition-transform duration-500 text-lg italic text-white font-cormorant">Continuity System</span>
</div>
<p className="text-[9px] text-white/50 font-mono uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity" id="desc-silk">guidelines • systems • frameworks</p>
</div>
</div>

<div className="group relative p-5 cursor-pointer bg-transparent border border-white/5 hover:bg-white/[0.05] hover:border-transparent transition-all duration-500 overflow-hidden" id="tab-stone" onclick="switchArchive('stone')">
<div className="absolute left-0 bottom-0 right-0 h-0.5 bg-white transition-all duration-500 w-0 group-hover:w-full" id="line-stone"></div>
<div className="flex flex-col h-full justify-between relative z-10 gap-3 opacity-50 group-hover:opacity-100 transition-opacity" id="content-stone">
<div className="flex justify-between items-start gap-2">
<span className="text-lg font-cormorant italic text-white leading-tight group-hover:-translate-y-0.5 transition-transform duration-500">Cultural Presence</span>
<span className="text-[9px] font-mono text-white/30 whitespace-nowrap">1988</span>
</div>
<p className="text-[9px] text-white/50 font-mono uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity" id="desc-stone">campaigns • expression • impacts</p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-7 relative h-[80vh] w-full flex items-center justify-center lg:justify-end">

<div className="flex lg:justify-end transition-all duration-700 ease-out z-10 opacity-100 w-full h-full absolute top-0 right-0 bottom-0 left-0 items-center justify-center" id="visual-obsidian">

<div className="relative w-[85%] h-[80%] z-10 group perspective-1000">
<div className="overflow-hidden transition-transform duration-1000 ease-out group-hover:scale-[1.02] group-hover:rotate-1 shadow-black/50 absolute top-0 right-0 bottom-0 left-0 shadow-2xl">
<img alt="Obsidian Detail" className="group-hover:opacity-100 transition-opacity duration-700 group-hover:grayscale-0 opacity-80 w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1600897032789-c615ab1b384e?w=1600&amp;q=80"/>
<div className="w-full h-full border-white/10 border absolute top-4 right-4 bottom-4 left-4"></div>
<div className="bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="absolute -left-12 bottom-24 z-30 hidden md:block">
<div className="flex flex-col items-end gap-1">
<span className="block w-16 h-px bg-white/30 mb-2"></span>
<span className="text-[9px] font-mono text-white/60">FIG. 3.1</span>
<span className="text-[9px] font-mono text-white/40">Material: Volcanic Glass</span>
</div>
</div>
</div>

<div className="absolute -top-4 right-12 w-48 aspect-[3/4] z-20 animate-float" style={{animationDuration: '8s'}}>
<div className="w-full h-full overflow-hidden relative shadow-2xl border border-white/10 group cursor-pointer">
<img className="hover:opacity-100 transition-all duration-500 opacity-60 w-full h-full object-cover grayscale scale-110" src="https://images.unsplash.com/photo-1557167668-6eb71e76b603?w=800&amp;q=80"/>
<div className="hover:bg-transparent transition-colors bg-black/20 absolute top-0 right-0 bottom-0 left-0"></div>
<span className="absolute bottom-2 left-2 text-[8px] font-mono text-white bg-black/50 backdrop-blur px-1 py-0.5">REF_01</span>
</div>
</div>

<div className="absolute bottom-12 left-0 md:-left-8 w-64 aspect-square z-30 animate-float" style={{animationDuration: '12s', animationDelay: '1s'}}>
<div className="w-full h-full overflow-hidden relative shadow-2xl border border-white/10 group cursor-pointer">
<img className="contrast-125 hover:opacity-100 transition-all duration-500 opacity-70 w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1651853082753-21a79340fda1?w=800&amp;q=80"/>
<div className="absolute bottom-0 w-full bg-white/5 backdrop-blur-md border-t border-white/10 p-3">
<div className="flex justify-between items-center">
<span className="text-xs font-cormorant italic text-white">Surface Detail</span>
<svg className="text-white/50" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="5" y2="16.65"></circle></svg>
</div>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 w-full h-full flex items-center justify-center lg:justify-end transition-all duration-700 ease-out opacity-0 pointer-events-none z-0 transform scale-95" id="visual-silk">

<div className="relative w-[85%] h-[80%] z-10 group perspective-1000">
<div className="absolute inset-0 overflow-hidden bg-[#111] transition-transform duration-1000 ease-out group-hover:scale-[1.02] group-hover:rotate-1 shadow-2xl shadow-black/50">
<img alt="Silk Detail" className="group-hover:opacity-100 transition-opacity duration-700 group-hover:grayscale-0 opacity-80 w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1727883475078-a9d6749faffd?w=1600&amp;q=80"/>
<div className="pointer-events-none border-white/10 border absolute top-4 right-4 bottom-4 left-4"></div>
<div className="bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="absolute -left-12 bottom-24 z-30 hidden md:block">
<div className="flex flex-col items-end gap-1">
<span className="block w-16 h-px bg-white/30 mb-2"></span>
<span className="text-[9px] font-mono text-white/60">FIG. 3.2</span>
<span className="text-[9px] font-mono text-white/40">Material: Raw Silk</span>
</div>
</div>
</div>

<div className="absolute -top-4 right-12 w-48 aspect-[3/4] z-20 animate-float" style={{animationDuration: '9s'}}>
<div className="w-full h-full overflow-hidden relative shadow-2xl border border-white/10 group cursor-pointer">
<img className="hover:opacity-100 transition-all duration-500 opacity-60 w-full h-full object-cover grayscale scale-110" src="https://images.unsplash.com/photo-1698912208696-de2c9e1639a8?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/20 hover:bg-transparent transition-colors"></div>
<span className="absolute bottom-2 left-2 text-[8px] font-mono text-white bg-black/50 backdrop-blur px-1 py-0.5">REF_02</span>
</div>
</div>

<div className="absolute bottom-12 left-0 md:-left-8 w-64 aspect-square z-30 animate-float" style={{animationDuration: '13s', animationDelay: '0.5s'}}>
<div className="w-full h-full overflow-hidden relative shadow-2xl border border-white/10 group cursor-pointer">
<img className="contrast-125 hover:opacity-100 transition-all duration-500 opacity-70 w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1604208032420-8595afeb49b7?w=800&amp;q=80"/>
<div className="absolute bottom-0 w-full bg-white/5 backdrop-blur-md border-t border-white/10 p-3">
<div className="flex justify-between items-center">
<span className="text-xs font-cormorant italic text-white">Weave Pattern</span>
<svg className="text-white/50" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="5" y2="16.65"></circle></svg>
</div>
</div>
</div>
</div>
</div>

<div className="flex lg:justify-end transition-all duration-700 ease-out pointer-events-none z-0 transform opacity-0 w-full h-full absolute top-0 right-0 bottom-0 left-0 scale-95 items-center justify-center" id="visual-stone">

<div className="relative w-[85%] h-[80%] z-10 group perspective-1000">
<div className="overflow-hidden transition-transform duration-1000 ease-out group-hover:scale-[1.02] group-hover:rotate-1 shadow-black/50 absolute top-0 right-0 bottom-0 left-0 shadow-2xl">
<img alt="Stone Detail" className="group-hover:opacity-100 transition-opacity duration-700 group-hover:grayscale-0 opacity-80 w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1630696779947-7e349002cc38?w=1600&amp;q=80"/>
<div className="absolute inset-4 border border-white/10 pointer-events-none"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
</div>

<div className="absolute -left-12 bottom-24 z-30 hidden md:block">
<div className="flex flex-col items-end gap-1">
<span className="block w-16 h-px bg-white/30 mb-2"></span>
<span className="text-[9px] font-mono text-white/60">FIG. 3.3</span>
<span className="text-[9px] font-mono text-white/40">Material: Grey Granite</span>
</div>
</div>
</div>

<div className="absolute -top-4 right-12 w-48 aspect-[3/4] z-20 animate-float" style={{animationDuration: '10s'}}>
<div className="w-full h-full overflow-hidden relative shadow-2xl border border-white/10 group cursor-pointer">
<img className="hover:opacity-100 transition-all duration-500 opacity-60 w-full h-full object-cover grayscale scale-110" src="https://images.unsplash.com/photo-1651853082747-82749be4570a?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/20 hover:bg-transparent transition-colors"></div>
<span className="absolute bottom-2 left-2 text-[8px] font-mono text-white bg-black/50 backdrop-blur px-1 py-0.5">REF_03</span>
</div>
</div>

<div className="absolute bottom-12 left-0 md:-left-8 w-64 aspect-square z-30 animate-float" style={{animationDuration: '14s', animationDelay: '2s'}}>
<div className="w-full h-full overflow-hidden relative shadow-2xl border border-white/10 group cursor-pointer">
<img className="contrast-125 hover:opacity-100 transition-all duration-500 opacity-70 w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1607085941350-7d46c83aa9f5?w=800&amp;q=80"/>
<div className="absolute bottom-0 w-full bg-white/5 backdrop-blur-md border-t border-white/10 p-3">
<div className="flex justify-between items-center">
<span className="text-xs font-cormorant italic text-white">Erosion Trace</span>
<svg className="text-white/50" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="5" y2="16.65"></circle></svg>
</div>
</div>
</div>
</div>
</div>

<div className="absolute -right-20 -bottom-20 w-[40vw] h-[40vw] border-[0.5px] border-white/[0.03] rounded-full pointer-events-none animate-[spin_60s_linear_infinite]"></div>
</div>
</div>


</section>

<section className="bg-[#E6E6E6] text-[#050505] min-h-screen relative py-24 px-6 md:px-12 flex flex-col justify-between overflow-hidden">

<div className="relative z-10 border-b border-black/10 pb-12 mb-12">
<span className="text-[10px] uppercase tracking-[0.4em]">manifesto</span>
</div>
<div className="flex-grow flex flex-col z-10 relative space-y-8 justify-center">

<div className="group relative cursor-pointer">
<h2 className="md:text-8xl group-hover:text-black transition-colors duration-500 group-hover:translate-x-8 transform ease-out text-5xl italic text-black/20 font-cormorant tracking-tight">
            Curatorial<span className="hidden md:inline opacity-0 group-hover:opacity-100 transition-opacity duration-500"> in selection</span>
</h2>
<div className="h-px w-0 group-hover:w-full bg-black mt-4 transition-all duration-700 ease-out opacity-20"></div>
<div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-right pointer-events-none hidden md:block">
<p className="text-xs font-mono uppercase tracking-widest max-w-xs">Selection, reduction, and preservation of the elements
that define a brand’s cultural authority over time.</p>
</div>
</div>

<div className="group relative cursor-pointer">
<h2 className="text-5xl md:text-8xl font-cormorant italic text-black/20 group-hover:text-black transition-colors duration-500 group-hover:translate-x-8 transform ease-out tracking-tight">
            Architectural<span className="hidden md:inline opacity-0 group-hover:opacity-100 transition-opacity duration-500"> in structure</span>
</h2>
<div className="h-px w-0 group-hover:w-full bg-black mt-4 transition-all duration-700 ease-out opacity-20"></div>
<div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-right pointer-events-none hidden md:block">
<p className="text-xs font-mono uppercase tracking-widest max-w-xs">Names, symbols, language, and visual hierarchies
designed to remain coherent across seasons and scale.</p>
</div>
</div>

<div className="group relative cursor-pointer">
<h2 className="text-5xl md:text-8xl font-cormorant italic text-black/20 group-hover:text-black transition-colors duration-500 group-hover:translate-x-8 transform ease-out tracking-tight">
            Experiential<span className="hidden md:inline opacity-0 group-hover:opacity-100 transition-opacity duration-500"> in presence</span>
</h2>
<div className="h-px w-0 group-hover:w-full bg-black mt-4 transition-all duration-700 ease-out opacity-20"></div>
<div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-right pointer-events-none hidden md:block">
<p className="text-xs font-mono uppercase tracking-widest max-w-xs">Image, tone, and presence shaped to be felt,
remembered, and recognized in silence.</p>
</div>
</div>
</div>
<div className="z-10 text-right pt-24 relative">
<p className="text-[10px] font-mono opacity-50">SCROLL TO EXIT</p>
</div>
</section>

<section -emj78jtgf15ktgxbj"="" className="min-h-[80vh] flex flex-col md:flex-row group overflow-hidden bg-black w-full border-white/10 border-t relative">

<div className="absolute inset-0 z-0">
<img alt="Luxury Background" className="opacity-30 group-hover:opacity-60 transition-opacity duration-700 ease-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0a9f881a-4c7f-42c3-bac5-237299109373_3840w.webp"/>
<div className="bg-gradient-to-r from-black via-black/80 to-black/60 absolute inset-0"></div>
</div>

<div className="relative w-full md:w-3/5 h-[50vh] md:h-full overflow-hidden border-b md:border-b-0 md:border-r border-white/10 bg-[#0a0a0a]/80 backdrop-blur">

<div className="absolute inset-0 z-0">
<img alt="Abstract Form" className="w-full h-full object-cover grayscale brightness-50 contrast-125 transition-all duration-[3s] ease-out group-hover:scale-105 group-hover:brightness-75 group-hover:grayscale-0" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&amp;q=80"/>
</div>

<div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_4px,6px_100%] pointer-events-none opacity-20"></div>

<div className="absolute top-8 left-8 z-20 mix-blend-difference">
<div className="flex items-center gap-2 mb-1">
<div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
<span className="text-[10px] font-mono text-white/60 tracking-[0.2em] uppercase">Specimen_Log</span>
</div>
<span className="text-xs font-mono text-white tracking-widest pl-3.5">NO. 8492-B</span>
</div>
<div className="absolute bottom-8 right-8 z-20 flex items-center gap-4 mix-blend-difference">
<div className="h-px w-12 bg-white/40 transition-all duration-500 group-hover:w-24"></div>
<span className="text-[10px] font-mono text-white/60 uppercase tracking-widest">Depth: 400m</span>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30vw]] aspect-square border border-white/5 rounded-full pointer-events-none transition-all duration-1000 group-hover:scale-90 group-hover:border-white/20 z-20 flex items-center justify-center">
<div className="w-1 h-1 bg-white/50 rounded-full"></div>
</div>
</div>

<div className="relative w-full md:w-2/5 h-auto md:h-full bg-[#050505]/90 backdrop-blur-md p-8 md:p-16 flex flex-col justify-between z-10">

<div className="flex flex-col gap-6 pt-8 md:pt-0">
<span className="text-[10px] font-mono text-neutral-500 uppercase tracking-[0.3em]">The Philosophy</span>
<h2 className="text-4xl md:text-5xl font-cormorant font-light italic text-white leading-[1.1] tracking-tight">
                The Silent Observer
            </h2>
</div>

<div className="md:py-0 pt-12 pb-12 relative">
<div className="absolute -left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block"></div>
<p className="leading-relaxed text-sm font-light text-neutral-400 max-w-xs pt-4 pb-4">To observe is to understand before acting. We study what a brand reveals — and what it withholds. The pauses between expressions. The tension beneath the image. This work is not reactive. It is deliberate, patient, and grounded in silence.</p>
</div>

<div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8 mt-auto">
<div className="group/item cursor-default">
<span className="text-[9px] uppercase block group-hover/transition-colors text-neutral-600 tracking-widest font-mono mb-2" style={{}}>clients</span>
<span className="text-lg italic text-neutral-300 font-cormorant" style={{}}>320+</span>
</div>
<div className="group/item cursor-default">
<span className="text-[9px] uppercase block group-hover/transition-colors text-neutral-600 tracking-widest font-mono mb-2" style={{}}>experience</span>
<span className="text-lg italic text-neutral-300 font-cormorant" style={{}}>15 years</span>
</div><div className="group/item cursor-default">
<span className="text-[9px] uppercase block group-hover/transition-colors text-neutral-600 tracking-widest font-mono mb-2" style={{}}>devliery time</span>
<span className="text-lg italic text-neutral-300 font-cormorant" style={{}}>1-2 months</span>
</div>
<div className="group/item cursor-default">
<span className="text-[9px] uppercase block group-hover/item:text-neutral-400 transition-colors text-neutral-600 tracking-widest font-mono mb-2" style={{}}>average price</span>
<span className="text-lg font-cormorant text-neutral-300 italic">$10,500</span>
</div>
</div>
</div>
</section>

<section className="min-h-[60vh] flex flex-col overflow-hidden bg-[#050505] pt-20 pb-20 relative perspective-1000 items-center justify-center">

<div className="z-20 relative">
<h2 className="md:text-9xl cursor-default text-6xl text-white tracking-tighter font-cormorant">Void - the right branding</h2>
</div>

<div className="z-10 transform pointer-events-none select-none blur-[1px] reflection-fade opacity-30 mt-[-10px] relative scale-y-[-1] rotate-x-180">
<h2 className="text-6xl md:text-9xl font-cormorant text-white tracking-tighter">
                Void - the right branding
            </h2>
</div>

<div className="animate-float opacity-20 w-32 h-32 border-white/10 border rounded-full absolute top-[40%] left-[10%] blur-sm"></div>
<div className="animate-float opacity-20 w-48 h-48 border-white/5 border rounded-full absolute right-[15%] bottom-[30%] blur-sm" style={{animationDelay: '-3s'}}></div>
<div className="text-center mt-24">
<p className="text-[10px] font-mono text-neutral-500 uppercase tracking-[0.3em]">Where the floor becomes the sky</p>
</div>
</section>

<footer className="min-h-[80vh] flex flex-col overflow-hidden text-center bg-[#050505] relative items-center justify-center">

<div className="absolute w-[80vw] h-[80vw] border-[0.5px] border-white/5 rounded-full animate-[spin_40s_linear_infinite] pointer-events-none">
</div>
<div className="absolute w-[60vw] h-[60vw] border-[0.5px] border-white/5 rounded-full animate-[spin_30s_linear_infinite_reverse] pointer-events-none">
</div>
<div className="relative z-10 mix-blend-difference">
<a className="block group" href="mailto:hello@ardene.com">
<span className="block text-xs font-mono mb-6 tracking-widest opacity-50 group-hover:opacity-100 transition-opacity">let's talk</span>
<span className="text-6xl md:text-9xl font-cormorant italic text-white group-hover:text-neutral-400 transition-colors duration-700">
                    hello@void.com
                </span>
</a>
</div>
<div className="absolute bottom-8 w-full px-8 flex justify-between items-end text-[9px] text-white/20 font-mono uppercase tracking-widest">
<div className="flex gap-4">
<span className="hover:text-white transition-colors cursor-pointer">Ig.</span>
<span className="hover:text-white transition-colors cursor-pointer">Li.</span>
</div>
<div className="text-right">
<p>Maison Ardène © 2024</p>
<p>All Rights Reserved</p>
</div>
</div>
</footer>


/br
    </>
  );
}
