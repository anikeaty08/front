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



        // Initialize Icons
        lucide.createIcons();

        // Data for the Carousel
        // IMPORTANT: Replace 'videoUrl' with actual video files/posters
        const projects = [
            { id: 1, title: "Nike Spec Ad", client: "Sportswear", color: "from-red-900 to-black" },
            { id: 2, title: "Travel Vlog", client: "Tourism Board", color: "from-blue-900 to-black" },
            { id: 3, title: "Tech Review", client: "Gadget Co", color: "from-emerald-900 to-black" },
            { id: 4, title: "Fashion Week", client: "Vogue", color: "from-purple-900 to-black" },
            { id: 5, title: "Food Series", client: "Chef Table", color: "from-orange-900 to-black" },
        ];

        // Carousel State
        const track = document.getElementById('track');
        let activeIndex = 2; // Start in the middle
        const cardWidth = 300; // Base width of card in px (approximate for calculation)
        const gap = 40; // Spacing
        let startX = 0;
        let isDragging = false;
        let currentTranslate = 0;
        let prevTranslate = 0;

        // Render Cards
        function renderCards() {
            track.innerHTML = '';
            projects.forEach((project, index) => {
                const card = document.createElement('div');
                card.className = 'carousel-card absolute top-0 w-[280px] md:w-[320px] aspect-9-16 rounded-2xl overflow-hidden shadow-2xl cursor-pointer bg-neutral-900 border border-white/5 group';
                // Using flex center calculation instead of left positioning in CSS for smoother GPU translation
                
                // Placeholder Video Content (Gradient + Text)
                card.innerHTML = `
                    <div class="w-full h-full bg-gradient-to-br ${project.color} relative">
                        <div class="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
                        
                        <!-- Play Button Overlay -->
                        <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div class="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
                                <i data-lucide="play" class="w-6 h-6 text-white fill-white ml-1"></i>
                            </div>
                        </div>

                        <!-- Card Info -->
                        <div class="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                            <p class="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-1">${project.client}</p>
                            <h3 class="text-xl font-medium text-white">${project.title}</h3>
                        </div>
                    </div>
                `;
                
                // Add click to focus
                card.onclick = () => {
                    if (activeIndex !== index) {
                        activeIndex = index;
                        updateCarousel();
                    }
                };

                track.appendChild(card);
            });
            
            // Re-init icons for new DOM elements
            lucide.createIcons();
            updateCarousel();
        }

        // Core Carousel Logic
        function updateCarousel() {
            const cards = document.querySelectorAll('.carousel-card');
            const centerOffset = window.innerWidth / 2;
            
            // Update Mobile Progress Bar
            const mobileProgress = document.getElementById('mobileProgress');
            const progress = ((activeIndex) / (projects.length - 1)) * 100;
            if(mobileProgress) mobileProgress.style.width = `${Math.max(10, progress)}%`;

            cards.forEach((card, index) => {
                // Determine distance from active index
                const offset = index - activeIndex;
                
                // Visual Properties
                let scale = 0.85;
                let opacity = 0.4;
                let blur = '4px';
                let zIndex = 1;
                let pointerEvents = 'none';
                let xTranslate = offset * 240; // Spacing between cards

                // Responsive spacing adjustment
                if (window.innerWidth < 768) {
                    xTranslate = offset * 260; 
                }

                if (index === activeIndex) {
                    // Active Card
                    scale = 1.1; // Slightly larger
                    opacity = 1;
                    blur = '0px';
                    zIndex = 10;
                    pointerEvents = 'auto';
                } else if (Math.abs(offset) === 1) {
                    // Immediate neighbors
                    opacity = 0.7;
                    blur = '2px';
                    zIndex = 5;
                }

                // Apply Styles
                card.style.transform = `translateX(${xTranslate}px) scale(${scale})`;
                card.style.opacity = opacity;
                card.style.filter = `blur(${blur})`;
                card.style.zIndex = zIndex;
                card.style.pointerEvents = pointerEvents;
            });
        }

        // Navigation Controls
        document.getElementById('nextBtn').addEventListener('click', () => {
            if (activeIndex < projects.length - 1) {
                activeIndex++;
            } else {
                activeIndex = 0; // Loop
            }
            updateCarousel();
        });

        document.getElementById('prevBtn').addEventListener('click', () => {
            if (activeIndex > 0) {
                activeIndex--;
            } else {
                activeIndex = projects.length - 1; // Loop
            }
            updateCarousel();
        });

        // Keyboard Navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight') {
                if (activeIndex < projects.length - 1) activeIndex++;
                else activeIndex = 0;
                updateCarousel();
            }
            if (e.key === 'ArrowLeft') {
                if (activeIndex > 0) activeIndex--;
                else activeIndex = projects.length - 1;
                updateCarousel();
            }
        });

        // Touch / Swipe Support
        const touchZone = document.getElementById('work');

        touchZone.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            isDragging = true;
        }, {passive: true});

        touchZone.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            // Optional: Add real-time drag effect here if desired
        }, {passive: true});

        touchZone.addEventListener('touchend', (e) => {
            if (!isDragging) return;
            const endX = e.changedTouches[0].clientX;
            const diff = startX - endX;

            if (Math.abs(diff) > 50) { // Threshold for swipe
                if (diff > 0) {
                    // Swipe Left -> Next
                    if (activeIndex < projects.length - 1) activeIndex++;
                    else activeIndex = 0;
                } else {
                    // Swipe Right -> Prev
                    if (activeIndex > 0) activeIndex--;
                    else activeIndex = projects.length - 1;
                }
                updateCarousel();
            }
            isDragging = false;
        });

        // Handle Resize
        window.addEventListener('resize', updateCarousel);

        // Initialize
        renderCards();

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-white/5 bg-black/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="hover:text-white transition-colors text-lg font-medium tracking-tight" href="#">MOZIIX FX</a>
<div className="hidden md:flex items-center gap-8 text-sm text-neutral-400 font-medium" style={{}}>
<a className="hover:text-white transition-colors font-sans" href="#work">Work</a>
<a className="hover:text-white transition-colors font-sans" href="#process">Process</a>
<a className="hover:text-white transition-colors font-sans" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="https://www.instagram.com/ee_ss_cc/">Contact</a>
</div>
<a className="hidden md:flex items-center justify-center px-4 py-2 text-xs font-medium text-black bg-white rounded-full hover:bg-neutral-200 transition-colors font-sans" href="#contact" style={{}}>
                Book Now
            </a>

<button aria-label="Menu" className="md:hidden text-white">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</nav>

<header className="min-h-screen flex flex-col overflow-hidden text-slate-950 text-center pt-20 pr-4 pl-4 relative items-center justify-center" style={{transition: 'outline 0.1s ease-in-out'}}>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" style={{}}></div>
<div className="relative z-10 max-w-4xl mx-auto space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" style={{}}></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" style={{}}></span>
</span>
<span className="text-xs font-medium text-neutral-300 uppercase tracking-widest font-sans" style={{}}>Available for projects</span>
</div>
<h1 className="md:text-7xl lg:text-8xl leading-[1.1] text-5xl font-normal text-white tracking-tighter font-instrument-serif">Where every frame 
tells a story</h1>
<p className="md:text-xl leading-relaxed text-lg font-light text-neutral-400 max-w-xl mr-auto ml-auto" style={{}}>With Moziix Crafting high-retention short-form content for brands and creators. Elevate your narrative with cinematic precision.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
<a className="group overflow-hidden transition-all hover:bg-neutral-200 text-sm font-medium text-black bg-white rounded-full pt-3 pr-8 pb-3 pl-8 relative" href="#work" style={{}}>
<span className="relative z-10 flex items-center gap-2 font-sans">
                        View Showreel 
                        <svg className="lucide lucide-play w-4 h-4 fill-current" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</span>
</a>
<a className="px-8 py-3 text-sm font-medium text-neutral-300 border border-white/10 rounded-full hover:bg-white/5 transition-all font-sans" href="#contact" style={{}}>
                    Get in touch
                </a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
<span className="text-xs font-medium tracking-widest uppercase font-sans">Scroll</span>
<svg className="lucide lucide-chevron-down w-4 h-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</header>

<section className="overflow-hidden bg-neutral-950 pt-32 pb-32 relative" id="work">
<div className="max-w-7xl mx-auto px-6 mb-16 flex items-end justify-between">
<div>
<h2 className="text-3xl md:text-4xl tracking-tighter text-white mb-2 font-instrument-serif font-normal">Featured Edits</h2>
<p className="text-neutral-500 text-sm font-sans" style={{}}>Swipe to explore vertical stories</p>
</div>

<div className="hidden md:flex gap-2">
<button aria-label="Previous" className="p-3 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all group" id="prevBtn">
<svg className="lucide lucide-arrow-left w-5 h-5" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<button aria-label="Next" className="p-3 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all group" id="nextBtn">
<svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>

<div className="flex w-full h-[600px] relative perspective-1000 items-center justify-center">

<div className="absolute top-0 right-4 md:right-0 z-50 translate-y-4">
<label className="group flex items-center gap-3 pl-2 pr-5 py-2 bg-neutral-900/90 hover:bg-neutral-800 border border-white/10 hover:border-white/20 rounded-full cursor-pointer transition-all duration-300 backdrop-blur-xl shadow-2xl hover:shadow-white/5 hover:-translate-y-0.5">
<div className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 group-hover:bg-white text-white group-hover:text-black transition-all duration-300 border border-white/5">
<svg className="lucide lucide-upload" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" x2="12" y1="3" y2="15"></line></svg>
</div>
<div className="flex flex-col text-left">
<span className="text-xs font-semibold text-white tracking-wide">Upload Reel</span>
<span className="text-[10px] font-medium text-neutral-500 group-hover:text-neutral-400 transition-colors">MP4, MOV (Max 2GB)</span>
</div>
<input accept="video/*" className="hidden" multiple="" type="file"/>
</label>
</div>

<div className="carousel-track flex items-center absolute left-1/2 top-1/2 -translate-y-1/2 h-[500px]" id="track"><div className="carousel-card absolute top-0 w-[280px] md:w-[320px] aspect-9-16 rounded-2xl overflow-hidden shadow-2xl cursor-pointer bg-neutral-900 border border-white/5 group" style={{transform: 'translateX(-480px) scale(0.85)', opacity: '0.4', filter: 'blur(4px)', zIndex: '1', pointerEvents: 'none'}}>
<div className="w-full h-full bg-gradient-to-br from-red-900 to-black relative">
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>

<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
<svg className="lucide lucide-play w-6 h-6 text-white fill-white ml-1" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
<p className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-1">Sportswear</p>
<h3 className="text-xl font-medium text-white">Nike Spec Ad</h3>
</div>
</div>
</div><div className="carousel-card absolute top-0 w-[280px] md:w-[320px] aspect-9-16 rounded-2xl overflow-hidden shadow-2xl cursor-pointer bg-neutral-900 border border-white/5 group" style={{transform: 'translateX(-240px) scale(0.85)', opacity: '0.7', filter: 'blur(2px)', zIndex: '5', pointerEvents: 'none'}}>
<div className="w-full h-full bg-gradient-to-br from-blue-900 to-black relative">
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>

<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
<svg className="lucide lucide-play w-6 h-6 text-white fill-white ml-1" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
<p className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-1">Tourism Board</p>
<h3 className="text-xl font-medium text-white">Travel Vlog</h3>
</div>
</div>
</div><div className="carousel-card absolute top-0 w-[280px] md:w-[320px] aspect-9-16 rounded-2xl overflow-hidden shadow-2xl cursor-pointer bg-neutral-900 border border-white/5 group" style={{transform: 'translateX(0px) scale(1.1)', opacity: '1', filter: 'blur(0px)', zIndex: '10', pointerEvents: 'auto'}}>
<div className="w-full h-full bg-gradient-to-br from-emerald-900 to-black relative">
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>

<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
<svg className="lucide lucide-play w-6 h-6 text-white fill-white ml-1" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
<p className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-1">Gadget Co</p>
<h3 className="text-xl font-medium text-white">Tech Review</h3>
</div>
</div>
</div><div className="carousel-card absolute top-0 w-[280px] md:w-[320px] aspect-9-16 rounded-2xl overflow-hidden shadow-2xl cursor-pointer bg-neutral-900 border border-white/5 group" style={{transform: 'translateX(240px) scale(0.85)', opacity: '0.7', filter: 'blur(2px)', zIndex: '5', pointerEvents: 'none'}}>
<div className="w-full h-full bg-gradient-to-br from-purple-900 to-black relative">
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>

<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
<svg className="lucide lucide-play w-6 h-6 text-white fill-white ml-1" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
<p className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-1">Vogue</p>
<h3 className="text-xl font-medium text-white">Fashion Week</h3>
</div>
</div>
</div><div className="carousel-card absolute top-0 w-[280px] md:w-[320px] aspect-9-16 rounded-2xl overflow-hidden shadow-2xl cursor-pointer bg-neutral-900 border border-white/5 group" style={{transform: 'translateX(480px) scale(0.85)', opacity: '0.4', filter: 'blur(4px)', zIndex: '1', pointerEvents: 'none'}}>
<div className="w-full h-full bg-gradient-to-br from-orange-900 to-black relative">
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>

<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
<svg className="lucide lucide-play w-6 h-6 text-white fill-white ml-1" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
<p className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-1">Chef Table</p>
<h3 className="text-xl font-medium text-white">Food Series</h3>
</div>
</div>
</div></div>
</div>

<div className="flex md:hidden justify-center mt-8 gap-2">
<div className="w-16 h-1 bg-white/20 rounded-full overflow-hidden">
<div className="h-full bg-white w-1/4 transition-all duration-300" id="mobileProgress" style={{width: '50%'}}></div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 relative" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group p-8 rounded-3xl bg-neutral-900/30 border border-white/5 hover:border-white/10 transition-all duration-300" style={{}}>
<div className="w-12 h-12 rounded-xl bg-neutral-900 flex items-center justify-center mb-6 text-white border border-white/10 group-hover:scale-110 transition-transform" style={{}}>
<svg className="lucide lucide-scissors w-6 h-6" data-lucide="scissors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="3"></circle><path d="M8.12 8.12 12 12"></path><path d="M20 4 8.12 15.88"></path><circle cx="6" cy="18" r="3"></circle><path d="M14.8 14.8 20 20"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight font-sans">Rapid Assembly</h3>
<p className="text-neutral-400 text-sm leading-relaxed font-sans" style={{}}>
                        Turning hours of raw footage into high-energy short-form content. 24-48h turnaround times optimized for TikTok, Reels, and Shorts algorithms.
                    </p>
</div>

<div className="group p-8 rounded-3xl bg-neutral-900/30 border border-white/5 hover:border-white/10 transition-all duration-300" style={{}}>
<div className="w-12 h-12 rounded-xl bg-neutral-900 flex items-center justify-center mb-6 text-white border border-white/10 group-hover:scale-110 transition-transform" style={{}}>
<svg className="lucide lucide-wand-2 w-6 h-6" data-lucide="wand-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"></path><path d="m14 7 3 3"></path><path d="M5 6v4"></path><path d="M19 14v4"></path><path d="M10 2v2"></path><path d="M7 8H3"></path><path d="M21 16h-4"></path><path d="M11 3H9"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight font-sans">Visual Polish</h3>
<p className="text-neutral-400 text-sm leading-relaxed font-sans" style={{}}>
                        Advanced color grading, motion graphics, and clean typography that matches your brand identity. No generic presets, only bespoke visuals.
                    </p>
</div>

<div className="group p-8 rounded-3xl bg-neutral-900/30 border border-white/5 hover:border-white/10 transition-all duration-300" style={{}}>
<div className="w-12 h-12 rounded-xl bg-neutral-900 flex items-center justify-center mb-6 text-white border border-white/10 group-hover:scale-110 transition-transform" style={{}}>
<svg className="lucide lucide-music w-6 h-6" data-lucide="music" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight font-sans">Sound Design</h3>
<p className="text-neutral-400 text-sm leading-relaxed font-sans" style={{}}>
                        Immersive SFX and professional audio mixing. I synchronize cuts to the beat to maximize viewer retention and emotional impact.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="process">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl tracking-tighter text-white mb-16 text-center font-instrument-serif font-normal">Workflow</h2>
<div className="grid grid-cols-1 md:grid-cols-4 gap-4">

<div className="relative p-6 border-l border-white/10 md:border-l-0 md:border-t hover:border-white/40 transition-colors pt-8">
<span className="absolute -left-[5px] md:-top-[5px] md:left-0 w-2.5 h-2.5 bg-neutral-800 rounded-full border border-neutral-600" style={{}}></span>
<span className="text-xs font-mono text-neutral-500 mb-2 block font-sans" style={{}}>01</span>
<h4 className="text-lg font-medium text-white mb-2 font-sans">Ingestion</h4>
<p className="text-neutral-400 text-xs font-sans" style={{}}>Upload raw files to my secure cloud portal. I review footage and select key moments.</p>
</div>

<div className="relative p-6 border-l border-white/10 md:border-l-0 md:border-t hover:border-white/40 transition-colors pt-8">
<span className="absolute -left-[5px] md:-top-[5px] md:left-0 w-2.5 h-2.5 bg-neutral-800 rounded-full border border-neutral-600" style={{}}></span>
<span className="text-xs font-mono text-neutral-500 mb-2 block font-sans" style={{}}>02</span>
<h4 className="text-lg font-medium text-white mb-2 font-sans">The Cut</h4>
<p className="text-neutral-400 text-xs font-sans" style={{}}>Storyboarding and assembly. Focus on pacing, hooks, and narrative flow.</p>
</div>

<div className="relative p-6 border-l border-white/10 md:border-l-0 md:border-t hover:border-white/40 transition-colors pt-8">
<span className="absolute -left-[5px] md:-top-[5px] md:left-0 w-2.5 h-2.5 bg-neutral-800 rounded-full border border-neutral-600" style={{}}></span>
<span className="text-xs font-mono text-neutral-500 mb-2 block font-sans" style={{}}>03</span>
<h4 className="text-lg font-medium text-white mb-2 font-sans">Refinement</h4>
<p className="text-neutral-400 text-xs font-sans" style={{}}>Adding captions, effects, and color. Two rounds of revisions included.</p>
</div>

<div className="relative p-6 border-l border-white/10 md:border-l-0 md:border-t hover:border-white/40 transition-colors pt-8">
<span className="absolute -left-[5px] md:-top-[5px] md:left-0 w-2.5 h-2.5 bg-neutral-800 rounded-full border border-neutral-600" style={{}}></span>
<span className="text-xs font-mono text-neutral-500 mb-2 block font-sans" style={{}}>04</span>
<h4 className="text-lg font-medium text-white mb-2 font-sans">Delivery</h4>
<p className="text-neutral-400 text-xs font-sans" style={{}}>Final export in 4K vertical format, ready for upload with optimized metadata.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900/20" style={{}}>
<div className="max-w-3xl mx-auto px-6 text-center">
<svg className="lucide lucide-quote w-8 h-8 text-neutral-600 mx-auto mb-8" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<p className="text-2xl md:text-3xl text-white leading-tight tracking-tight mb-8 font-instrument-serif font-normal">
                "The attention to detail is unmatched. Our engagement increased by 300% within the first month of working together. A true cinematic eye for social content."
            </p>
<div className="flex items-center justify-center gap-4">
<div className="w-10 h-10 bg-neutral-800 rounded-full overflow-hidden" style={{}}>

<div className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-500" style={{}}></div>
</div>
<div className="text-left">
<div className="text-sm font-medium text-white font-sans">Alex Rivera</div>
<div className="text-xs text-neutral-500 font-sans" style={{}}>Creative Director, Apex Media</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative" id="contact">
<div className="max-w-2xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-4xl tracking-tighter text-white mb-4 font-instrument-serif font-normal">Let's create together</h2>
<p className="text-neutral-400 font-sans" style={{}}>Accepting new clients for Q4 2023.</p>
</div>
<form className="space-y-4">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-medium text-neutral-500 uppercase tracking-wider ml-1 font-sans" style={{}}>Name</label>
<input className="w-full bg-neutral-900/50 border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-white/20 focus:border-white/20 transition-all placeholder:text-neutral-700" placeholder="John Doe" style={{}} type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-neutral-500 uppercase tracking-wider ml-1 font-sans" style={{}}>Email</label>
<input className="w-full bg-neutral-900/50 border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-white/20 focus:border-white/20 transition-all placeholder:text-neutral-700" placeholder="john@example.com" style={{}} type="email"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-neutral-500 uppercase tracking-wider ml-1 font-sans" style={{}}>Project Type</label>
<div className="grid grid-cols-2 gap-2">
<label className="cursor-pointer">
<input checked="" className="peer sr-only" name="type" type="radio"/>
<div className="text-sm text-neutral-400 bg-neutral-900/50 border border-neutral-800 rounded-xl px-4 py-3 peer-checked:bg-white peer-checked:text-black peer-checked:border-white transition-all text-center font-sans" style={{}}>
                                Ongoing Retainer
                            </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="type" type="radio"/>
<div className="text-sm text-neutral-400 bg-neutral-900/50 border border-neutral-800 rounded-xl px-4 py-3 peer-checked:bg-white peer-checked:text-black peer-checked:border-white transition-all text-center font-sans" style={{}}>
                                One-off Project
                            </div>
</label>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-neutral-500 uppercase tracking-wider ml-1 font-sans" style={{}}>Message</label>
<textarea className="w-full bg-neutral-900/50 border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-white/20 focus:border-white/20 transition-all placeholder:text-neutral-700" placeholder="Tell me about your vision..." rows="4" style={{}}></textarea>
</div>
<button className="w-full py-4 bg-white text-black font-medium rounded-xl hover:bg-neutral-200 transition-colors mt-4 font-sans" style={{}} type="button">
                    Send Inquiry
                </button>
</form>
</div>
</section>

<footer className="py-12 border-t border-white/5 bg-neutral-950 text-center" style={{}}>
<div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
<span className="text-lg font-medium tracking-tight text-white mb-6 font-sans">LUMINA.EDIT</span>
<div className="flex gap-6 mb-8 text-neutral-500" style={{}}>
<a className="hover:text-white transition-colors" href="#"><svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="hover:text-white transition-colors" href="#"><svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="hover:text-white transition-colors" href="#"><svg className="lucide lucide-youtube w-5 h-5" data-lucide="youtube" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg></a>
<a className="hover:text-white transition-colors" href="#"><svg className="lucide lucide-mail w-5 h-5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg></a>
</div>
<p className="text-xs text-neutral-600 font-sans" style={{}}>
                © 2023 Lumina Editing. All rights reserved. <br/> Designed with precision.
            </p>
</div>
</footer>



    </>
  );
}
