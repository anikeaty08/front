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



        // DOM Elements for Animation
        const laptop = document.getElementById('laptop');
        const lid = document.getElementById('lid');
        const heroText = document.getElementById('hero-text');
        const scrollPrompt = document.getElementById('scroll-prompt');
        const scrollContainer = document.getElementById('scroll-container');
        
        // Configuration
        let progress = 0;
        const totalHeight = scrollContainer.clientHeight - window.innerHeight;

        // Animation Loop
        function animate() {
            const scrollY = window.scrollY;
            
            // Calculate progress (0 to 1) based on scroll within the hero section
            let rawProgress = scrollY / (window.innerHeight * 1.5);
            progress = Math.min(Math.max(rawProgress, 0), 1);

            // Laptop Transforms
            const lidOpenProgress = Math.min(progress * 2, 1);
            const lidAngle = -90 + (lidOpenProgress * 90);
            
            const laptopRotateX = -10 + (progress * 25);
            const laptopRotateY = progress * -15; 
            const laptopScale = 1 + (progress * 0.2); 

            // Apply Transforms
            lid.style.transform = `rotateX(${lidAngle}deg)`;
            laptop.style.transform = `rotateX(${laptopRotateX}deg) rotateY(${laptopRotateY}deg) scale(${laptopScale})`;

            // Text Fade Out
            if (progress > 0.1) {
                heroText.style.opacity = Math.max(1 - (progress * 3), 0);
                scrollPrompt.style.opacity = Math.max(1 - (progress * 5), 0);
            } else {
                heroText.style.opacity = 1;
                scrollPrompt.style.opacity = 0.5;
            }

            requestAnimationFrame(animate);
        }

        window.addEventListener('scroll', () => {
            requestAnimationFrame(animate);
        });

        // Initial call
        animate();

        // --- PAYMENT MODAL LOGIC ---
        const modal = document.getElementById('payment-modal');
        const backdrop = document.getElementById('modal-backdrop');
        const buyButtons = document.querySelectorAll('.buy-trigger');
        const closeModalBtn = document.getElementById('close-modal');
        const payButton = document.getElementById('pay-button');
        const formContent = document.getElementById('payment-form-content');
        const successState = document.getElementById('success-state');
        const closeSuccessBtn = document.getElementById('close-success');

        // Open Modal
        buyButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                modal.classList.remove('hidden');
                // Small delay to allow display:block to apply before opacity transition
                setTimeout(() => {
                    backdrop.classList.remove('opacity-0');
                }, 10);
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            });
        });

        // Close Modal Function
        function closeModal() {
            backdrop.classList.add('opacity-0');
            setTimeout(() => {
                modal.classList.add('hidden');
                // Reset State
                formContent.classList.remove('hidden');
                successState.classList.add('hidden');
                payButton.innerHTML = `<span>Pay $1,999.00</span><span class="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>`;
                payButton.disabled = false;
                payButton.classList.remove('opacity-75', 'cursor-not-allowed');
            }, 300);
            document.body.style.overflow = '';
        }

        closeModalBtn.addEventListener('click', closeModal);
        backdrop.addEventListener('click', closeModal);
        closeSuccessBtn.addEventListener('click', closeModal);

        // Pay Logic
        payButton.addEventListener('click', () => {
            // Simulate Processing
            payButton.innerHTML = `<span class="iconify animate-spin" data-icon="lucide:loader-2" data-width="16"></span> Processing...`;
            payButton.classList.add('opacity-75', 'cursor-not-allowed');
            payButton.disabled = true;

            setTimeout(() => {
                // Success
                formContent.classList.add('hidden');
                successState.classList.remove('hidden');
            }, 2000);
        });

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-40 backdrop-blur-lg border-b border-white/5 bg-[#050505]/70">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="iconify text-white" data-icon="lucide:hexagon" data-strokeWidth="1.5" data-width="20"></span>
<span className="font-semibold text-white tracking-tight">ZENITH</span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#specs">Specs</a>
<a className="hover:text-white transition-colors" href="#shop">Shop</a>
</div>
<button className="buy-trigger bg-white text-black px-4 py-1.5 rounded-full text-xs font-semibold hover:bg-zinc-200 transition-colors">
                Pre-order
            </button>
</div>
</nav>

<div className="relative h-[300vh]" id="scroll-container">

<div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">

<div className="absolute inset-0 grid-bg opacity-20 pointer-events-none"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none"></div>

<div className="absolute top-24 md:top-32 text-center z-10 transition-opacity duration-500" id="hero-text">
<h1 className="text-4xl md:text-6xl font-semibold text-white tracking-tight mb-4">
                    The Ultimate Machine
                </h1>
<p className="text-zinc-400 text-sm md:text-base max-w-md mx-auto">
                    Power that defies physics. Design that defies convention.
                </p>
</div>

<div className="scene w-[300px] md:w-[600px] aspect-[16/10] relative z-20 mt-10 md:mt-0 scale-[0.6] md:scale-100 transition-transform">
<div className="laptop-wrapper w-full h-full relative" id="laptop">

<div className="laptop-lid w-full h-full absolute top-0 left-0 bg-[#1a1a1a] rounded-xl border border-zinc-700 shadow-2xl" id="lid">

<div className="absolute inset-0 bg-[#0a0a0a] m-1 md:m-2 rounded-lg overflow-hidden border border-zinc-800 flex items-center justify-center relative">

<div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-black to-black opacity-80 z-0"></div>
<div className="absolute inset-0 screen-glow z-10 opacity-50"></div>

<div className="relative z-20 flex flex-col items-center gap-4 opacity-90">
<span className="iconify text-indigo-400 drop-shadow-[0_0_15px_rgba(129,140,248,0.5)]" data-icon="lucide:aperture" data-strokeWidth="1.5" data-width="64"></span>
<div className="text-center">
<div className="text-4xl font-light tracking-widest text-white">12:45</div>
<div className="text-xs text-indigo-300 mt-1">Tuesday, October 24</div>
</div>
</div>
</div>

<div className="absolute inset-0 bg-[#151515] rounded-xl transform translate-z-[-2px] flex items-center justify-center backface-hidden" style={{transform: 'rotateY(180deg) translateZ(1px)'}}>
<span className="iconify text-zinc-600" data-icon="lucide:hexagon" data-strokeWidth="1.5" data-width="48"></span>
</div>
</div>

<div className="laptop-base w-full h-full absolute top-full left-0 bg-[#1a1a1a] rounded-xl border border-zinc-700 shadow-xl origin-top flex flex-col items-center justify-start pt-4 md:pt-8" style={{transformStyle: 'preserve-3d'}}>

<div className="w-[90%] h-[50%] grid grid-rows-4 gap-1 md:gap-2 mb-4">
<div className="row-span-1 bg-[#0f0f0f] rounded border border-zinc-800/50"></div>
<div className="row-span-3 bg-[#0f0f0f] rounded border border-zinc-800/50 grid grid-cols-10 gap-1 p-1">

<div className="col-span-10 bg-zinc-800/30 rounded h-full"></div>
</div>
</div>

<div className="w-[30%] h-[25%] bg-[#0f0f0f] rounded border border-zinc-800/50"></div>

<div className="absolute w-full h-[12px] bg-[#2a2a2a] bottom-0 translate-y-full rounded-b-xl border-t border-black/50"></div>
<div className="absolute w-[12px] h-full bg-[#222] right-0 translate-x-full rounded-r-xl border-l border-black/50 origin-left rotate-y-90"></div>
</div>
</div>
</div>
<div className="absolute bottom-10 flex flex-col items-center gap-2 opacity-50 animate-pulse" id="scroll-prompt">
<span className="text-xs tracking-widest uppercase">Scroll to Open</span>
<span className="iconify" data-icon="lucide:chevron-down" data-width="20"></span>
</div>
</div>
</div>

<section className="relative z-30 bg-[#050505] pt-24 pb-32" id="features">
<div className="max-w-6xl mx-auto px-6">
<div className="mb-24">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">
                    Workflow, <span className="text-zinc-500">perfected.</span>
</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[500px]">

<div className="col-span-1 md:col-span-2 row-span-2 relative group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/20">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="p-8 h-full flex flex-col justify-between relative z-10">
<div>
<span className="iconify text-indigo-400 mb-4" data-icon="lucide:cpu" data-strokeWidth="1.5" data-width="32"></span>
<h3 className="text-xl font-medium text-white mb-2">M-Series Neural Engine</h3>
<p className="text-sm text-zinc-400 leading-relaxed max-w-sm">Experience processing speeds that adapt to your workflow in real-time. The new architecture handles complex 3D rendering and compilation tasks effortlessly.</p>
</div>
<div className="w-full h-32 md:h-64 mt-8 rounded-lg border border-white/5 bg-black/40 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 grid-bg opacity-30"></div>
<div className="w-24 h-24 rounded bg-gradient-to-br from-zinc-700 to-zinc-900 border border-zinc-600 flex items-center justify-center shadow-[0_0_30px_rgba(99,102,241,0.2)]">
<span className="font-mono text-2xl font-bold text-white tracking-tighter">M4</span>
</div>
</div>
</div>
</div>

<div className="col-span-1 relative group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/20">
<div className="p-8 h-full flex flex-col justify-between">
<div>
<span className="iconify text-emerald-400 mb-4" data-icon="lucide:monitor" data-strokeWidth="1.5" data-width="32"></span>
<h3 className="text-xl font-medium text-white mb-2">Liquid Retina</h3>
<p className="text-sm text-zinc-400">120Hz ProMotion technology with 1600 nits peak brightness.</p>
</div>
<div className="mt-6 flex items-center gap-4">
<div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full w-[85%] bg-emerald-500 rounded-full"></div>
</div>
<span className="text-xs font-mono text-emerald-400">98% P3</span>
</div>
</div>
</div>

<div className="col-span-1 relative group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/20">
<div className="p-8 h-full flex flex-col justify-between">
<div>
<span className="iconify text-orange-400 mb-4" data-icon="lucide:zap" data-strokeWidth="1.5" data-width="32"></span>
<h3 className="text-xl font-medium text-white mb-2">All Day Power</h3>
<p className="text-sm text-zinc-400">Up to 22 hours of video playback. Fast charge capable.</p>
</div>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-4xl font-semibold tracking-tight text-white">22</span>
<span className="text-sm text-zinc-500">hours</span>
</div>
</div>
</div>
</div>
</div>

<div className="border-t border-white/10 pt-24 pb-24" id="specs">
<div className="flex flex-col md:flex-row justify-between items-start mb-12">
<h2 className="text-2xl font-semibold tracking-tight text-white">Technical Specifications</h2>
<a className="text-sm text-indigo-400 hover:text-indigo-300 flex items-center gap-1 mt-4 md:mt-0 group" href="#">
                        View full specs <span className="iconify group-hover:translate-x-0.5 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="space-y-2">
<span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Memory</span>
<div className="flex items-center gap-2 text-white">
<span className="iconify" data-icon="lucide:hard-drive" data-width="18"></span>
<span className="text-sm">Up to 64GB Unified</span>
</div>
</div>
<div className="space-y-2">
<span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Storage</span>
<div className="flex items-center gap-2 text-white">
<span className="iconify" data-icon="lucide:database" data-width="18"></span>
<span className="text-sm">8TB SSD Gen 5</span>
</div>
</div>
<div className="space-y-2">
<span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Connectivity</span>
<div className="flex items-center gap-2 text-white">
<span className="iconify" data-icon="lucide:wifi" data-width="18"></span>
<span className="text-sm">Wi-Fi 7E / BT 5.3</span>
</div>
</div>
<div className="space-y-2">
<span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Ports</span>
<div className="flex items-center gap-2 text-white">
<span className="iconify" data-icon="lucide:cable" data-width="18"></span>
<span className="text-sm">3x Thunderbolt 4</span>
</div>
</div>
</div>
</div>

<div className="border-t border-white/10 pt-24" id="shop">
<div className="mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-white">The Lineup</h2>
<p className="text-zinc-500 mt-2 text-sm">Choose the perfect machine for your workflow.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

<div className="group product-card relative bg-zinc-900/20 border border-white/10 rounded-xl overflow-hidden hover:border-zinc-500/30 transition-all duration-300">
<div className="product-glow absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent opacity-0 transition-opacity duration-500"></div>

<div className="relative h-48 bg-[#0a0a0a] flex items-center justify-center p-6 border-b border-white/5">
<div className="absolute inset-0 grid-bg opacity-20"></div>

<div className="w-32 h-20 bg-gradient-to-b from-zinc-800 to-zinc-900 rounded-lg border border-zinc-700 shadow-xl relative group-hover:-translate-y-1 transition-transform duration-500">
<div className="absolute bottom-0 w-40 h-1 bg-zinc-700 left-1/2 -translate-x-1/2 rounded-full shadow-lg"></div>
<div className="absolute inset-0 flex items-center justify-center">
<span className="iconify text-cyan-400/50" data-icon="lucide:wind" data-width="24"></span>
</div>
</div>
</div>

<div className="p-5">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-semibold text-white tracking-tight">Zenith Air</h3>
<span className="text-xs font-mono text-cyan-400 bg-cyan-400/10 px-2 py-0.5 rounded-full">New</span>
</div>
<p className="text-xs text-zinc-400 mb-4 h-8">Ultra-thin design for portability without compromise.</p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-xs text-zinc-500">
<span className="iconify" data-icon="lucide:monitor" data-width="14"></span> 13.6" Liquid Retina
                                </li>
<li className="flex items-center gap-2 text-xs text-zinc-500">
<span className="iconify" data-icon="lucide:cpu" data-width="14"></span> M4 Chip
                                </li>
<li className="flex items-center gap-2 text-xs text-zinc-500">
<span className="iconify" data-icon="lucide:battery" data-width="14"></span> 18h Battery
                                </li>
</ul>
<div className="flex items-center justify-between mt-auto">
<span className="text-sm font-medium text-white">$999</span>
<button className="buy-trigger px-3 py-1.5 rounded-full bg-white text-black text-xs font-semibold hover:bg-zinc-200 transition-colors">
                                    Buy
                                </button>
</div>
</div>
</div>

<div className="group product-card relative bg-zinc-900/40 border border-indigo-500/20 rounded-xl overflow-hidden hover:border-indigo-500/40 transition-all duration-300 ring-1 ring-indigo-500/10">
<div className="product-glow absolute inset-0 bg-gradient-to-b from-indigo-500/10 to-transparent opacity-0 transition-opacity duration-500"></div>

<div className="relative h-48 bg-[#080808] flex items-center justify-center p-6 border-b border-white/5">
<div className="absolute inset-0 grid-bg opacity-30"></div>
<div className="w-36 h-24 bg-gradient-to-b from-zinc-800 to-black rounded-lg border border-zinc-700 shadow-2xl relative group-hover:-translate-y-1 transition-transform duration-500">
<div className="absolute inset-0 bg-indigo-500/5 mix-blend-overlay"></div>
<div className="absolute bottom-0 w-44 h-1.5 bg-zinc-600 left-1/2 -translate-x-1/2 rounded-full shadow-lg"></div>
<div className="absolute inset-0 flex items-center justify-center">
<span className="iconify text-indigo-400/50" data-icon="lucide:aperture" data-width="28"></span>
</div>
</div>
</div>

<div className="p-5">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-semibold text-white tracking-tight">Zenith Pro</h3>
<span className="text-xs font-mono text-indigo-400 bg-indigo-400/10 px-2 py-0.5 rounded-full">Best Seller</span>
</div>
<p className="text-xs text-zinc-400 mb-4 h-8">Extreme performance for pros who push limits.</p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-xs text-zinc-500">
<span className="iconify" data-icon="lucide:monitor" data-width="14"></span> 14" or 16" XDR
                                </li>
<li className="flex items-center gap-2 text-xs text-zinc-500">
<span className="iconify" data-icon="lucide:cpu" data-width="14"></span> M4 Pro / Max
                                </li>
<li className="flex items-center gap-2 text-xs text-zinc-500">
<span className="iconify" data-icon="lucide:battery" data-width="14"></span> 22h Battery
                                </li>
</ul>
<div className="flex items-center justify-between mt-auto">
<span className="text-sm font-medium text-white">$1,999</span>
<button className="buy-trigger px-3 py-1.5 rounded-full bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-500 transition-colors shadow-[0_0_15px_rgba(79,70,229,0.3)]">
                                    Configure
                                </button>
</div>
</div>
</div>

<div className="group product-card relative bg-zinc-900/20 border border-white/10 rounded-xl overflow-hidden hover:border-zinc-500/30 transition-all duration-300">
<div className="product-glow absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent opacity-0 transition-opacity duration-500"></div>

<div className="relative h-48 bg-[#0a0a0a] flex items-center justify-center p-6 border-b border-white/5">
<div className="absolute inset-0 grid-bg opacity-20"></div>
<div className="w-40 h-28 bg-gradient-to-b from-zinc-800 to-zinc-900 rounded-lg border border-zinc-700 shadow-xl relative group-hover:-translate-y-1 transition-transform duration-500">
<div className="absolute bottom-0 w-48 h-1.5 bg-zinc-600 left-1/2 -translate-x-1/2 rounded-full shadow-lg"></div>
<div className="absolute inset-0 flex items-center justify-center">
<span className="iconify text-purple-400/50" data-icon="lucide:layers" data-width="32"></span>
</div>
</div>
</div>

<div className="p-5">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-semibold text-white tracking-tight">Zenith Ultra</h3>
</div>
<p className="text-xs text-zinc-400 mb-4 h-8">Desktop power in a portable form factor.</p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-xs text-zinc-500">
<span className="iconify" data-icon="lucide:monitor" data-width="14"></span> 16.2" Liquid XDR
                                </li>
<li className="flex items-center gap-2 text-xs text-zinc-500">
<span className="iconify" data-icon="lucide:cpu" data-width="14"></span> M4 Ultra
                                </li>
<li className="flex items-center gap-2 text-xs text-zinc-500">
<span className="iconify" data-icon="lucide:hard-drive" data-width="14"></span> 128GB RAM
                                </li>
</ul>
<div className="flex items-center justify-between mt-auto">
<span className="text-sm font-medium text-white">$3,499</span>
<button className="buy-trigger px-3 py-1.5 rounded-full bg-white text-black text-xs font-semibold hover:bg-zinc-200 transition-colors">
                                    Buy
                                </button>
</div>
</div>
</div>

<div className="group product-card relative bg-zinc-900/20 border border-white/10 rounded-xl overflow-hidden hover:border-zinc-500/30 transition-all duration-300 md:hidden lg:hidden xl:block">
<div className="product-glow absolute inset-0 bg-gradient-to-b from-orange-500/10 to-transparent opacity-0 transition-opacity duration-500"></div>

<div className="relative h-48 bg-[#0a0a0a] flex items-center justify-center p-6 border-b border-white/5">
<div className="absolute inset-0 grid-bg opacity-20"></div>

<div className="w-20 h-24 bg-gradient-to-b from-zinc-700 to-zinc-900 rounded border border-zinc-600 shadow-xl relative group-hover:-translate-y-1 transition-transform duration-500">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
<span className="iconify text-orange-400/50" data-icon="lucide:box" data-width="24"></span>
</div>
</div>
</div>

<div className="p-5">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-semibold text-white tracking-tight">Zenith Studio</h3>
</div>
<p className="text-xs text-zinc-400 mb-4 h-8">The station for ultimate creativity.</p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-xs text-zinc-500">
<span className="iconify" data-icon="lucide:cpu" data-width="14"></span> M4 Ultra Max
                                </li>
<li className="flex items-center gap-2 text-xs text-zinc-500">
<span className="iconify" data-icon="lucide:database" data-width="14"></span> 8TB SSD
                                </li>
<li className="flex items-center gap-2 text-xs text-zinc-500">
<span className="iconify" data-icon="lucide:cable" data-width="14"></span> 6x Thunderbolt
                                </li>
</ul>
<div className="flex items-center justify-between mt-auto">
<span className="text-sm font-medium text-white">$1,999</span>
<button className="buy-trigger px-3 py-1.5 rounded-full bg-white text-black text-xs font-semibold hover:bg-zinc-200 transition-colors">
                                    Buy
                                </button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-black py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="iconify text-zinc-500" data-icon="lucide:hexagon" data-width="20"></span>
<span className="text-sm text-zinc-500">© 2024 Zenith Inc.</span>
</div>
<div className="flex gap-6">
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="20"></span></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:github" data-width="20"></span></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:instagram" data-width="20"></span></a>
</div>
</div>
</footer>

<div className="fixed inset-0 z-50 hidden" id="payment-modal">

<div className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity opacity-0" id="modal-backdrop"></div>

<div className="absolute inset-0 flex items-center justify-center p-4">
<div className="modal-animate relative w-full max-w-4xl bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row" id="modal-card">

<div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col">
<div className="flex justify-between items-center mb-6">
<h3 className="text-xl font-semibold text-white tracking-tight flex items-center gap-2">
<span className="iconify text-indigo-500" data-icon="lucide:shield-check" data-width="20"></span>
                            Secure Checkout
                        </h3>
<button className="text-zinc-500 hover:text-white transition-colors" id="close-modal">
<span className="iconify" data-icon="lucide:x" data-width="20"></span>
</button>
</div>
<div id="payment-form-content">

<div className="mb-6 space-y-3">
<label className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Contact Information</label>
<input className="w-full bg-zinc-900/50 border border-zinc-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all" placeholder="Email address" type="email"/>
</div>

<div className="mb-6 space-y-3">
<label className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Payment Method</label>
<div className="grid grid-cols-2 gap-3">
<button className="flex items-center justify-center gap-2 bg-zinc-800/50 border border-indigo-500/50 rounded-lg py-2.5 text-sm text-white hover:bg-zinc-800 transition-all">
<span className="iconify" data-icon="lucide:credit-card" data-width="16"></span> Card
                                </button>
<button className="flex items-center justify-center gap-2 bg-transparent border border-zinc-700 rounded-lg py-2.5 text-sm text-zinc-400 hover:border-zinc-500 transition-all">
<span className="iconify" data-icon="lucide:wallet" data-width="16"></span> PayPal
                                </button>
</div>
</div>

<div className="mb-6 space-y-3">
<label className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Card Details</label>
<div className="space-y-3">
<div className="relative">
<input className="w-full bg-zinc-900/50 border border-zinc-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all pl-10" placeholder="Card number" type="text"/>
<span className="iconify absolute left-3 top-3 text-zinc-500" data-icon="lucide:credit-card" data-width="16"></span>
</div>
<div className="grid grid-cols-2 gap-3">
<input className="w-full bg-zinc-900/50 border border-zinc-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all" placeholder="MM / YY" type="text"/>
<input className="w-full bg-zinc-900/50 border border-zinc-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all" placeholder="CVC" type="text"/>
</div>
<input className="w-full bg-zinc-900/50 border border-zinc-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all" placeholder="Cardholder Name" type="text"/>
</div>
</div>

<div className="flex items-center justify-between mb-8">
<span className="text-sm text-zinc-400">Save information for next time</span>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 border-zinc-800 appearance-none cursor-pointer transition-all duration-300" id="toggle" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-zinc-800 cursor-pointer border border-zinc-700" htmlFor="toggle"></label>
</input></div>
</div>
<button className="w-full bg-white text-black py-3 rounded-lg font-semibold text-sm hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 group" id="pay-button">
<span>Pay $1,999.00</span>
<span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
<div className="mt-4 flex items-center justify-center gap-4 text-zinc-600">
<span className="iconify" data-icon="logos:stripe" data-width="30" style={{filter: 'grayscale(1) invert(1) opacity(0.5)'}}></span>
<span className="iconify" data-icon="logos:mastercard" data-width="24" style={{filter: 'grayscale(1) opacity(0.5)'}}></span>
<span className="iconify" data-icon="logos:visa" data-width="24" style={{filter: 'grayscale(1) invert(1) opacity(0.5)'}}></span>
</div>
</div>

<div className="hidden h-full flex flex-col items-center justify-center py-10 text-center animate-[fadeIn_0.5s_ease-out]" id="success-state">
<div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6 border border-green-500/20 shadow-[0_0_30px_rgba(34,197,94,0.2)]">
<span className="iconify text-green-400" data-icon="lucide:check" data-width="40"></span>
</div>
<h4 className="text-2xl font-semibold text-white mb-2">Payment Successful</h4>
<p className="text-zinc-400 text-sm max-w-xs mx-auto mb-8">Your order for Zenith Pro has been confirmed. You will receive an email shortly.</p>
<button className="bg-zinc-800 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-zinc-700 transition-colors border border-zinc-700" id="close-success">
                            Return to Shop
                        </button>
</div>
</div>

<div className="w-full md:w-2/5 bg-zinc-900/30 border-t md:border-t-0 md:border-l border-white/5 p-6 md:p-8 flex flex-col justify-between relative">
<div className="absolute inset-0 grid-bg opacity-10 pointer-events-none"></div>
<div>
<h4 className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-6">Order Summary</h4>

<div className="flex gap-4 mb-6">
<div className="w-20 h-20 bg-black rounded-lg border border-zinc-800 flex items-center justify-center shrink-0">
<span className="iconify text-indigo-400" data-icon="lucide:laptop" data-width="32"></span>
</div>
<div>
<h5 className="text-white font-medium text-sm">Zenith Pro</h5>
<p className="text-zinc-500 text-xs mt-1">14-inch, M4 Pro</p>
<p className="text-zinc-500 text-xs">Space Black, 1TB SSD</p>
<div className="mt-2 text-white font-medium text-sm">$1,999.00</div>
</div>
</div>
<div className="space-y-3 py-6 border-t border-dashed border-white/10">
<div className="flex justify-between text-sm">
<span className="text-zinc-400">Subtotal</span>
<span className="text-white">$1,999.00</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-zinc-400">Shipping</span>
<span className="text-white">Free</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-zinc-400">Tax</span>
<span className="text-white">$140.00</span>
</div>
</div>
</div>
<div className="pt-6 border-t border-white/10">
<div className="flex justify-between items-end">
<span className="text-sm font-medium text-white">Total</span>
<div className="text-right">
<span className="text-xs text-zinc-500 mr-1">USD</span>
<span className="text-2xl font-semibold text-white tracking-tight">$2,139.00</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
