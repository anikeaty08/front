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

        // Intersection Observer for Animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Trigger Intro Animations
                    const targets = entry.target.querySelectorAll('.target-animate');
                    targets.forEach(t => t.classList.add('animate-enter'));

                    // Trigger BG Animations
                    const bgTargets = entry.target.querySelectorAll('.target-bg-animate');
                    bgTargets.forEach(t => t.classList.add('animate-clip-col'));

                    // Trigger Text Animations
                    const textTargets = entry.target.querySelectorAll('.text-char-animate');
                    textTargets.forEach(t => t.classList.add('char-slide'));
                } else {
                    // Reset animations for replay capability (optional)
                    const targets = entry.target.querySelectorAll('.target-animate');
                    targets.forEach(t => t.classList.remove('animate-enter'));
                    
                    const bgTargets = entry.target.querySelectorAll('.target-bg-animate');
                    bgTargets.forEach(t => t.classList.remove('animate-clip-col'));

                    const textTargets = entry.target.querySelectorAll('.text-char-animate');
                    textTargets.forEach(t => t.classList.remove('char-slide'));
                }
            });
        }, observerOptions);

        document.querySelectorAll('.view-trigger').forEach(section => {
            observer.observe(section);
        });

        // Flashlight / Spotlight Effect
        const cards = document.querySelectorAll('.spotlight-target');
        document.addEventListener('mousemove', (e) => {
            cards.forEach(card => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--x', `${x}px`);
                card.style.setProperty('--y', `${y}px`);
            });
        });

        // Card Stack Logic
        const cardElements = document.querySelectorAll('.card-item');
        let cardIndex = 0;

        function updateCards() {
            const positions = [
                { transform: 'scale(1) translateY(0)', zIndex: 3, opacity: 1 },
                { transform: 'scale(0.95) translateY(-12px)', zIndex: 2, opacity: 0.7 },
                { transform: 'scale(0.9) translateY(-24px)', zIndex: 1, opacity: 0.5 }
            ];

            cardElements.forEach((card, i) => {
                // Calculate position based on offset from current index
                let posIndex = (i - cardIndex + 3) % 3;
                
                Object.assign(card.style, positions[posIndex]);
            });
        }

        function rotateCards(direction) {
            // direction 1 = next, -1 = prev
            if(direction === 1) {
                cardIndex = (cardIndex + 1) % 3;
            } else {
                cardIndex = (cardIndex - 1 + 3) % 3;
            }
            updateCards();
        }
        
        // Auto rotate for demo
        setInterval(() => rotateCards(1), 3000);

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>


<section className="relative w-full h-screen flex items-center justify-center p-4 snap-center">

<div className="relative w-full max-w-sm aspect-[3/4] rounded-[32px] bg-neutral-900/40 backdrop-blur-xl border border-white/10 flex flex-col justify-between p-8 overflow-hidden group spotlight-target">

<div className="absolute inset-0 rounded-[32px] p-[1px] spotlight-border opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

<div className="absolute inset-[1px] rounded-[31px] spotlight-card opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

<div className="relative z-10 flex justify-between items-start w-full">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
<i className="w-4 h-4 text-white" data-lucide="sparkles"></i>
</div>
<span className="text-xs font-medium tracking-tight text-neutral-400">ANIMATION GUIDE</span>
</div>
<span className="text-xs font-medium text-neutral-600 tracking-tight">01 / 08</span>
</div>
<div className="relative z-10 space-y-6">
<div className="space-y-2">
<h1 className="text-4xl font-semibold tracking-tighter text-white leading-[1.1]">
                        Motion<br/>
<span className="text-neutral-500">Language</span>
</h1>
<p className="text-sm text-neutral-400 leading-relaxed font-light">
                        A collection of high-fidelity interaction patterns for modern interfaces.
                    </p>
</div>
<div className="flex items-center gap-3">
<div className="h-px w-8 bg-white/20"></div>
<span className="text-xs text-neutral-500 tracking-tight">@ALTOMPKINS</span>
</div>
</div>
<div className="relative z-10 w-full flex justify-end">
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5 animate-pulse">
<i className="w-4 h-4 text-white/50" data-lucide="arrow-down"></i>
</div>
</div>
</div>
</section>

<section className="relative w-full h-screen flex items-center justify-center p-4 snap-center view-trigger">
<div className="relative w-full max-w-sm aspect-[3/4] rounded-[32px] bg-neutral-900/40 backdrop-blur-xl border border-white/10 flex flex-col p-8 overflow-hidden group spotlight-target">
<div className="absolute inset-0 rounded-[32px] p-[1px] spotlight-border opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
<div className="absolute inset-[1px] rounded-[31px] spotlight-card opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

<div className="relative z-10 mb-8 flex justify-between items-center">
<span className="text-xs text-neutral-500 font-medium tracking-tight">SCROLL REVEAL</span>
<span className="text-xs font-medium text-neutral-600 tracking-tight">02 / 08</span>
</div>

<div className="relative z-10 flex-1 flex flex-col justify-center space-y-4">

<div className="target-animate opacity-0 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
<i className="w-5 h-5 text-blue-400" data-lucide="zap"></i>
</div>
<div>
<div className="h-2 w-24 bg-white/20 rounded-full mb-2"></div>
<div className="h-2 w-16 bg-white/10 rounded-full"></div>
</div>
</div>

<div className="target-animate opacity-0 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center gap-4 delay-100">
<div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center border border-purple-500/30">
<i className="w-5 h-5 text-purple-400" data-lucide="layers"></i>
</div>
<div>
<div className="h-2 w-20 bg-white/20 rounded-full mb-2"></div>
<div className="h-2 w-12 bg-white/10 rounded-full"></div>
</div>
</div>

<div className="target-animate opacity-0 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center gap-4 delay-200">
<div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
<i className="w-5 h-5 text-emerald-400" data-lucide="activity"></i>
</div>
<div>
<div className="h-2 w-28 bg-white/20 rounded-full mb-2"></div>
<div className="h-2 w-20 bg-white/10 rounded-full"></div>
</div>
</div>
</div>
<div className="relative z-10 mt-8">
<h3 className="text-lg font-medium tracking-tight text-white">Staggered Entry</h3>
<p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                    Elements fade, blur, and slide in sequentially using "both" fill-mode to maintain state.
                </p>
</div>
</div>
</section>

<section className="relative w-full h-screen flex items-center justify-center p-4 snap-center view-trigger">
<div className="relative w-full max-w-sm aspect-[3/4] rounded-[32px] bg-neutral-900/40 backdrop-blur-xl border border-white/10 flex flex-col overflow-hidden group spotlight-target">
<div className="absolute inset-0 rounded-[32px] p-[1px] spotlight-border opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

<div className="absolute inset-0 flex z-0 opacity-30">
<div className="flex-1 bg-gradient-to-b from-indigo-500/20 to-transparent target-bg-animate" style={{clipPath: 'inset(100% 0 0 0)'}}></div>
<div className="flex-1 bg-gradient-to-b from-purple-500/20 to-transparent target-bg-animate delay-100" style={{clipPath: 'inset(100% 0 0 0)'}}></div>
<div className="flex-1 bg-gradient-to-b from-pink-500/20 to-transparent target-bg-animate delay-200" style={{clipPath: 'inset(100% 0 0 0)'}}></div>
<div className="flex-1 bg-gradient-to-b from-rose-500/20 to-transparent target-bg-animate delay-300" style={{clipPath: 'inset(100% 0 0 0)'}}></div>
</div>
<div className="relative z-10 p-8 h-full flex flex-col justify-between">
<div className="flex justify-between items-center">
<span className="text-xs text-neutral-500 font-medium tracking-tight">CLIP PATH</span>
<span className="text-xs font-medium text-neutral-600 tracking-tight">03 / 08</span>
</div>
<div className="space-y-4">
<div className="w-12 h-12 rounded-xl bg-white text-black flex items-center justify-center">
<i className="w-6 h-6" data-lucide="columns"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-white">Column Reveal</h3>
<p className="text-sm text-neutral-400 leading-relaxed font-light">
                        Background animation using clip-path to reveal columns sequentially. Adds depth without distraction.
                    </p>
</div>
</div>
</div>
</section>

<section className="relative w-full h-screen flex items-center justify-center p-4 snap-center">
<div className="relative w-full max-w-sm aspect-[3/4] rounded-[32px] bg-neutral-900/40 backdrop-blur-xl border border-white/10 flex flex-col p-8 overflow-hidden group spotlight-target">
<div className="absolute inset-0 rounded-[32px] p-[1px] spotlight-border opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
<div className="relative z-10 flex justify-between items-center mb-12">
<span className="text-xs text-neutral-500 font-medium tracking-tight">MICRO INTERACTIONS</span>
<span className="text-xs font-medium text-neutral-600 tracking-tight">04 / 08</span>
</div>
<div className="relative z-10 flex-1 flex flex-col items-center justify-center gap-8">

<button className="relative group/btn overflow-hidden rounded-full bg-neutral-950 px-8 py-3 text-sm font-medium text-white transition-transform active:scale-95 border-beam border border-white/10">
<span className="relative z-10 flex items-center gap-2">
                        Get Started <i className="w-4 h-4" data-lucide="arrow-right"></i>
</span>
</button>

<button className="group/btn relative rounded-full bg-white text-black px-8 py-3 text-sm font-semibold tracking-tight hover:bg-neutral-200 transition-colors">
                    Explore Docs
                </button>
</div>
<div className="relative z-10 text-center">
<p className="text-xs text-neutral-500">Hover to trigger border beam animation.</p>
</div>
</div>
</section>

<section className="relative w-full h-screen flex items-center justify-center p-4 snap-center view-trigger">
<div className="relative w-full max-w-sm aspect-[3/4] rounded-[32px] bg-neutral-900/40 backdrop-blur-xl border border-white/10 flex flex-col p-8 overflow-hidden group spotlight-target">
<div className="absolute inset-0 rounded-[32px] p-[1px] spotlight-border opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
<div className="relative z-10 flex justify-between items-center">
<span className="text-xs text-neutral-500 font-medium tracking-tight">TYPOGRAPHY</span>
<span className="text-xs font-medium text-neutral-600 tracking-tight">05 / 08</span>
</div>
<div className="relative z-10 flex-1 flex items-center">
<h2 className="text-5xl font-semibold tracking-tighter leading-none overflow-hidden flex flex-col gap-1 text-white">

<div className="overflow-hidden h-[1.1em] flex">
<span className="text-char-animate" style={{animationDelay: '0ms'}}>C</span>
<span className="text-char-animate" style={{animationDelay: '50ms'}}>r</span>
<span className="text-char-animate" style={{animationDelay: '100ms'}}>a</span>
<span className="text-char-animate" style={{animationDelay: '150ms'}}>f</span>
<span className="text-char-animate" style={{animationDelay: '200ms'}}>t</span>
</div>

<div className="overflow-hidden h-[1.1em] flex text-neutral-500">
<span className="text-char-animate" style={{animationDelay: '250ms'}}>D</span>
<span className="text-char-animate" style={{animationDelay: '300ms'}}>e</span>
<span className="text-char-animate" style={{animationDelay: '350ms'}}>p</span>
<span className="text-char-animate" style={{animationDelay: '400ms'}}>t</span>
<span className="text-char-animate" style={{animationDelay: '450ms'}}>h</span>
</div>
</h2>
</div>
<div className="relative z-10">
<div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
<p className="text-xs text-neutral-300 font-mono">
                        .char { transform: translateY(-100%) }
                    </p>
</div>
</div>
</div>
</section>

<section className="relative w-full h-screen flex items-center justify-center p-4 snap-center">
<div className="relative w-full max-w-sm aspect-[3/4] rounded-[32px] bg-neutral-900/40 backdrop-blur-xl border border-white/10 flex flex-col justify-center overflow-hidden group spotlight-target">
<div className="absolute inset-0 rounded-[32px] p-[1px] spotlight-border opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
<div className="absolute top-8 left-8 right-8 z-10 flex justify-between items-center">
<span className="text-xs text-neutral-500 font-medium tracking-tight">INFINITE SCROLL</span>
<span className="text-xs font-medium text-neutral-600 tracking-tight">06 / 08</span>
</div>
<div className="relative w-full py-12 space-y-8">

<div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-r from-neutral-900 via-transparent to-neutral-900"></div>

<div className="flex w-full overflow-hidden">
<div className="flex items-center gap-8 animate-marquee whitespace-nowrap pl-8">
<span className="text-xl font-semibold tracking-tighter text-white">ACME</span>
<span className="text-xl font-semibold tracking-tighter text-neutral-600">APEX</span>
<span className="text-xl font-semibold tracking-tighter text-neutral-600">BOLT</span>
<span className="text-xl font-semibold tracking-tighter text-neutral-600">WAVE</span>
<span className="text-xl font-semibold tracking-tighter text-white">ACME</span>
<span className="text-xl font-semibold tracking-tighter text-neutral-600">APEX</span>
<span className="text-xl font-semibold tracking-tighter text-neutral-600">BOLT</span>
<span className="text-xl font-semibold tracking-tighter text-neutral-600">WAVE</span>
<span className="text-xl font-semibold tracking-tighter text-white">ACME</span>
</div>
</div>

<div className="flex w-full overflow-hidden">
<div className="flex items-center gap-8 animate-marquee whitespace-nowrap pl-8" style={{animationDirection: 'reverse', animationDuration: '25s'}}>
<i className="w-6 h-6 text-neutral-500" data-lucide="framer"></i>
<i className="w-6 h-6 text-white" data-lucide="figma"></i>
<i className="w-6 h-6 text-neutral-500" data-lucide="slack"></i>
<i className="w-6 h-6 text-neutral-500" data-lucide="chrome"></i>
<i className="w-6 h-6 text-white" data-lucide="github"></i>
<i className="w-6 h-6 text-neutral-500" data-lucide="framer"></i>
<i className="w-6 h-6 text-white" data-lucide="figma"></i>
<i className="w-6 h-6 text-neutral-500" data-lucide="slack"></i>
<i className="w-6 h-6 text-neutral-500" data-lucide="chrome"></i>
<i className="w-6 h-6 text-white" data-lucide="github"></i>
</div>
</div>
</div>
<div className="absolute bottom-8 left-8 right-8 z-10 text-center">
<p className="text-xs text-neutral-500">Alpha mask for smooth fade out.</p>
</div>
</div>
</section>

<section className="relative w-full h-screen flex items-center justify-center p-4 snap-center">
<div className="relative w-full max-w-sm aspect-[3/4] rounded-[32px] bg-neutral-900/40 backdrop-blur-xl border border-white/10 flex flex-col p-8 overflow-hidden group spotlight-target">
<div className="absolute inset-0 rounded-[32px] p-[1px] spotlight-border opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
<div className="relative z-10 flex justify-between items-center mb-8">
<span className="text-xs text-neutral-500 font-medium tracking-tight">CARD STACK</span>
<span className="text-xs font-medium text-neutral-600 tracking-tight">07 / 08</span>
</div>

<div className="relative z-10 flex-1 w-full flex items-center justify-center perspective-[1000px]" id="card-stack">

<div className="card-item absolute w-full max-w-[240px] aspect-[4/3] bg-neutral-800 rounded-2xl border border-white/5 flex items-center justify-center shadow-2xl transition-all duration-500 ease-in-out" style={{transform: 'scale(0.9) translateY(-24px)', zIndex: '1', opacity: '0.5'}}>
<div className="h-8 w-8 rounded-full bg-rose-500/20 flex items-center justify-center">
<i className="w-4 h-4 text-rose-400" data-lucide="user"></i>
</div>
</div>

<div className="card-item absolute w-full max-w-[240px] aspect-[4/3] bg-neutral-800 rounded-2xl border border-white/5 flex items-center justify-center shadow-2xl transition-all duration-500 ease-in-out" style={{transform: 'scale(0.95) translateY(-12px)', zIndex: '2', opacity: '0.7'}}>
<div className="h-8 w-8 rounded-full bg-indigo-500/20 flex items-center justify-center">
<i className="w-4 h-4 text-indigo-400" data-lucide="credit-card"></i>
</div>
</div>

<div className="card-item absolute w-full max-w-[240px] aspect-[4/3] bg-neutral-950 rounded-2xl border border-white/10 flex items-center justify-center shadow-2xl transition-all duration-500 ease-in-out" style={{transform: 'scale(1) translateY(0)', zIndex: '3', opacity: '1'}}>
<div className="text-center space-y-2">
<div className="h-10 w-10 mx-auto rounded-full bg-white/10 flex items-center justify-center">
<i className="w-5 h-5 text-white" data-lucide="check-circle"></i>
</div>
<p className="text-xs font-medium text-neutral-300">Payment Sent</p>
</div>
</div>
</div>

<div className="relative z-10 flex justify-center gap-4 mt-8">
<button className="w-10 h-10 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors" onclick="rotateCards(-1)">
<i className="w-4 h-4 text-white" data-lucide="arrow-left"></i>
</button>
<button className="w-10 h-10 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors" onclick="rotateCards(1)">
<i className="w-4 h-4 text-white" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</section>

<section className="relative w-full h-screen flex items-center justify-center p-4 snap-center">
<div className="relative w-full max-w-sm aspect-[3/4] rounded-[32px] bg-neutral-900/40 backdrop-blur-xl border border-white/10 flex flex-col justify-center items-center text-center p-8 overflow-hidden group spotlight-target">
<div className="absolute inset-0 rounded-[32px] p-[1px] spotlight-border opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
<div className="relative z-10 space-y-6 max-w-[240px]">
<div className="w-16 h-16 mx-auto rounded-2xl bg-white text-black flex items-center justify-center shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
<i className="w-8 h-8" data-lucide="code-2"></i>
</div>
<div>
<h2 className="text-2xl font-semibold tracking-tighter text-white mb-2">Build with Aura</h2>
<p className="text-xs text-neutral-400 font-light leading-relaxed">
                        Copy these patterns to enhance your user interface with subtle, high-quality motion.
                    </p>
</div>
<a className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white text-black font-semibold text-sm tracking-tight hover:scale-[1.02] active:scale-[0.98] transition-all" href="#">
                    Get the Source Code
                </a>
<p className="text-[10px] text-neutral-600 tracking-wide uppercase">
                    Designed by @ALTOMPKINS
                </p>
</div>
</div>
</section>


    </>
  );
}
