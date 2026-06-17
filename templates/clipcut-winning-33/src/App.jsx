import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
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

        // FAQ Toggle Logic
        function toggleAccordion(btn) {
            const content = btn.nextElementSibling;
            const icon = btn.querySelector('.rotate-icon');
            
            // Close others
            document.querySelectorAll('.accordion-content').forEach(el => {
                if(el !== content) {
                    el.classList.remove('open');
                    el.previousElementSibling.querySelector('.rotate-icon').classList.remove('open');
                }
            });

            content.classList.toggle('open');
            icon.classList.toggle('open');
        }

        // Process Wheel Logic
        const wrapper = document.getElementById('process-wrapper');
        const wheel = document.getElementById('wheel');
        const nodes = document.querySelectorAll('.wheel-node');
        const title = document.getElementById('step-title');
        const desc = document.getElementById('step-desc');
        const tag1 = document.getElementById('step-tag-1');
        const tag2 = document.getElementById('step-tag-2');
        const contentContainer = document.getElementById('content-container');

        const stepData = [
            {
                title: "Strategy & Format",
                desc: "We analyze your niche and competitors to develop a unique 'Winning Format' tailored to your audience. No guesswork, just data-backed direction.",
                tags: ["MARKET ANALYSIS", "// POSITIONING"]
            },
            {
                title: "DFY Scripting",
                desc: "We handle any research and script it out fully (bullet listed) so all you need to do is show up and record. We've found this increases output by 4x.",
                tags: ["DEEP RESEARCH", "// VIRAL HOOKS"]
            },
            {
                title: "Editing & Handoff",
                desc: "Our editors transform your raw footage into high-retention assets using our proprietary pacing algorithms. Ready for upload within 24 hours.",
                tags: ["RETENTION EDITING", "// PUBLISHING"]
            }
        ];

        let currentStep = -1; // Initialize to force update
        let scrollTimeout;

        function updateWheel(progress) {
            let targetStep = 1;
            let rotation = 0;

            // Logic: 
            // 0 - 33%  : Step 1 active. Wheel rotated +25deg (to bring Left/Start to center)
            // 33% - 66%: Step 2 active. Wheel rotated 0deg (Center is center)
            // 66% - 100%: Step 3 active. Wheel rotated -25deg (to bring Right/End to center)

            if (progress < 0.33) {
                targetStep = 0; // Index 0 (Step 1 in UI)
                rotation = 25; 
            } else if (progress > 0.66) {
                targetStep = 2; // Index 2 (Step 3 in UI)
                rotation = -25;
            } else {
                targetStep = 1; // Index 1 (Step 2 in UI)
                rotation = 0;
            }

            // Note: wheel-node data-step="1" corresponds to stepData[0]
            // We need to map targetStep index to the correct UI element
            // UI Nodes order in DOM: [Center(2), Left(1), Right(3)] 
            // We will loop through nodes and check data-step against (targetStep + 1)

            wheel.style.transform = `translate(-50%, 0) rotate(${rotation}deg)`;

            nodes.forEach((node) => {
                const stepNum = parseInt(node.getAttribute('data-step'));
                if (stepNum === (targetStep + 1)) {
                    node.classList.add('active');
                    node.classList.remove('inactive');
                    // Force text correction if needed
                    node.style.transform = `rotate(${-rotation}deg) scale(1.1)`; // Keep text upright relative to screen
                } else {
                    node.classList.remove('active');
                    node.classList.add('inactive');
                    node.style.transform = `rotate(${-rotation}deg)`; // Keep text upright relative to screen
                }
            });

            if (currentStep !== targetStep) {
                contentContainer.style.opacity = '0';
                setTimeout(() => {
                    title.textContent = stepData[targetStep].title;
                    desc.textContent = stepData[targetStep].desc;
                    tag1.textContent = stepData[targetStep].tags[0];
                    tag2.textContent = stepData[targetStep].tags[1];
                    contentContainer.style.opacity = '1';
                }, 300);
                currentStep = targetStep;
            }
        }

        function magnetize() {
            // Optional snapping logic could go here
        }

        window.addEventListener('scroll', () => {
            const rect = wrapper.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            const scrollHeight = rect.height - viewportHeight;

            if (rect.top <= 0 && rect.bottom >= viewportHeight) {
                const progress = Math.abs(rect.top) / scrollHeight;
                updateWheel(progress);
            } else if (rect.top > 0) {
                updateWheel(0); // Start at 1
            } else if (rect.bottom < viewportHeight) {
                updateWheel(1); // End at 3
            }

            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(magnetize, 150);
        });

        // Initialize at start (Step 1)
        updateWheel(0);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<div className="bg-root"></div>
<div className="fixed inset-0 z-[-1] pointer-events-none">
<div className="absolute inset-0 bg-rays opacity-50"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] spotlight opacity-50"></div>
</div>

<header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-6 pointer-events-none">
<nav className="pointer-events-auto flex items-center gap-8 pl-5 pr-2 py-2 rounded-full glass shadow-2xl shadow-black/50 transition-all hover:bg-white/[0.04]">
<a className="flex items-center gap-1 group" href="#">
<div className="w-4 h-4 rounded-sm bg-white flex items-center justify-center text-black font-bold text-[10px]">C</div>
<span className="text-sm font-medium tracking-tight text-zinc-300 group-hover:text-white transition-colors">ClipCut</span>
</a>
<div className="hidden md:flex items-center gap-6 text-[13px] font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#">Method</a>
<a className="hover:text-white transition-colors" href="#">Results</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
</div>
<button className="bg-white text-black px-4 py-1.5 rounded-full text-[13px] font-medium hover:bg-zinc-200 transition-colors shadow-lg shadow-white/10">
                Book call
            </button>
</nav>
</header>
<main className="relative z-10">

<div className="relative pt-32 pb-20 px-4 md:px-6 mb-12">
<div className="max-w-5xl mx-auto text-center flex flex-col items-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-sm mb-8 hover:border-white/20 transition-colors cursor-pointer group">
<span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_2px_rgba(16,185,129,0.3)]"></span>
<span className="text-[11px] text-zinc-400 font-medium tracking-wide">Accepting <span className="text-zinc-200 group-hover:text-white transition-colors">5 New Clients</span> this month</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-[5rem] font-medium tracking-tight leading-[1.05] text-white mb-8">
                    Average <span className="font-serif-italic text-gradient-purple">50k Views</span> per video.<br/>
                    Book <span className="font-serif-italic text-gradient-emerald">10-30 Calls</span> monthly.
                </h1>
<p className="text-zinc-400 text-base md:text-lg max-w-2xl font-light leading-relaxed mb-10">
                    We identify your <span className="text-zinc-200 font-medium">Winning Format</span> in 120 days. A repeatable system to make organic growth predictable and scalable.
                </p>
<div className="flex flex-col md:flex-row items-center gap-4 mb-20">
<button className="group relative h-10 px-6 rounded-md bg-white text-black text-sm font-medium hover:bg-zinc-200 transition-all overflow-hidden flex items-center gap-2">
<span className="relative z-10">Start Process</span>
<i className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" data-lucide="chevron-right"></i>
</button>
<button className="h-10 px-6 rounded-md border border-white/10 text-zinc-400 text-sm font-medium hover:text-white hover:bg-white/[0.04] transition-all">
                        View Case Studies
                    </button>
</div>
</div>
</div>

<section className="relative py-20 border-t border-white/5">
<div className="max-w-6xl mx-auto px-4">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="group p-8 rounded-2xl border border-white/10 bg-zinc-900/20 hover:bg-zinc-900/40 transition-colors backdrop-blur-sm">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center mb-6 text-zinc-400 group-hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="bar-chart-2"></i>
</div>
<h3 className="text-lg font-medium text-white mb-3">Volatile Views</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                            Sales only happen when you go viral. We stabilize your view count so revenue becomes predictable.
                        </p>
</div>
<div className="group p-8 rounded-2xl border border-white/10 bg-zinc-900/20 hover:bg-zinc-900/40 transition-colors backdrop-blur-sm">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center mb-6 text-zinc-400 group-hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="users"></i>
</div>
<h3 className="text-lg font-medium text-white mb-3">Poor Conversion</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                            You know how to get views, but they don't buy. We fix your positioning to turn viewers into high-value leads.
                        </p>
</div>
<div className="group p-8 rounded-2xl border border-white/10 bg-zinc-900/20 hover:bg-zinc-900/40 transition-colors backdrop-blur-sm">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center mb-6 text-zinc-400 group-hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="clock"></i>
</div>
<h3 className="text-lg font-medium text-white mb-3">Time Constraints</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                            You're spending hours editing. We handle the heavy lifting so you can focus on running the business.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 overflow-hidden relative">
<div className="max-w-7xl mx-auto px-4 mb-16 text-center">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4">Our <span className="font-serif-italic text-zinc-500">Partners</span></h2>
</div>
<div className="flex flex-col gap-6 w-full mask-gradient-x">

<div className="flex gap-6 animate-scroll min-w-full px-3">

<div className="w-[280px] h-[360px] shrink-0 rounded-xl overflow-hidden relative group cursor-pointer border border-white/10 bg-zinc-900">
<img className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute bottom-5 left-5 text-white font-medium text-lg">Daniel Iles</div>
</div>
<div className="w-[280px] h-[360px] shrink-0 rounded-xl overflow-hidden relative group cursor-pointer border border-white/10 bg-zinc-900">
<img className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute bottom-5 left-5 text-white font-medium text-lg">Justin Ho</div>
</div>
<div className="w-[280px] h-[360px] shrink-0 rounded-xl overflow-hidden relative group cursor-pointer border border-white/10 bg-zinc-900">
<img className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute bottom-5 left-5 text-white font-medium text-lg">Steven Bartlett</div>
</div>

<div className="w-[280px] h-[360px] shrink-0 rounded-xl overflow-hidden relative group cursor-pointer border border-white/10 bg-zinc-900">
<img className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute bottom-5 left-5 text-white font-medium text-lg">Alex Hormozi</div>
</div>
<div className="w-[280px] h-[360px] shrink-0 rounded-xl overflow-hidden relative group cursor-pointer border border-white/10 bg-zinc-900">
<img className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute bottom-5 left-5 text-white font-medium text-lg">Iman Gadzhi</div>
</div>

<div className="w-[280px] h-[360px] shrink-0 rounded-xl overflow-hidden relative group cursor-pointer border border-white/10 bg-zinc-900">
<img className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute bottom-5 left-5 text-white font-medium text-lg">Daniel Iles</div>
</div>
<div className="w-[280px] h-[360px] shrink-0 rounded-xl overflow-hidden relative group cursor-pointer border border-white/10 bg-zinc-900">
<img className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute bottom-5 left-5 text-white font-medium text-lg">Justin Ho</div>
</div>
<div className="w-[280px] h-[360px] shrink-0 rounded-xl overflow-hidden relative group cursor-pointer border border-white/10 bg-zinc-900">
<img className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute bottom-5 left-5 text-white font-medium text-lg">Steven Bartlett</div>
</div>
</div>

<div className="flex gap-6 animate-scroll-reverse min-w-full px-3">

<div className="w-[280px] h-[360px] shrink-0 rounded-xl overflow-hidden relative group cursor-pointer border border-white/10 bg-zinc-900">
<img className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute bottom-5 left-5 text-white font-medium text-lg">Vanessa Lau</div>
</div>
<div className="w-[280px] h-[360px] shrink-0 rounded-xl overflow-hidden relative group cursor-pointer border border-white/10 bg-zinc-900">
<img className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute bottom-5 left-5 text-white font-medium text-lg">Ali Abdaal</div>
</div>
<div className="w-[280px] h-[360px] shrink-0 rounded-xl overflow-hidden relative group cursor-pointer border border-white/10 bg-zinc-900">
<img className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute bottom-5 left-5 text-white font-medium text-lg">Chloe Ting</div>
</div>

<div className="w-[280px] h-[360px] shrink-0 rounded-xl overflow-hidden relative group cursor-pointer border border-white/10 bg-zinc-900">
<img className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" src="https://images.unsplash.com/photo-1521119989659-a83eee488058?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute bottom-5 left-5 text-white font-medium text-lg">Jay Shetty</div>
</div>
<div className="w-[280px] h-[360px] shrink-0 rounded-xl overflow-hidden relative group cursor-pointer border border-white/10 bg-zinc-900">
<img className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute bottom-5 left-5 text-white font-medium text-lg">Codie Sanchez</div>
</div>

<div className="w-[280px] h-[360px] shrink-0 rounded-xl overflow-hidden relative group cursor-pointer border border-white/10 bg-zinc-900">
<img className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute bottom-5 left-5 text-white font-medium text-lg">Vanessa Lau</div>
</div>
<div className="w-[280px] h-[360px] shrink-0 rounded-xl overflow-hidden relative group cursor-pointer border border-white/10 bg-zinc-900">
<img className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute bottom-5 left-5 text-white font-medium text-lg">Ali Abdaal</div>
</div>
</div>
</div>
</section>

<div className="relative h-[400vh] z-20 border-t border-white/5" id="process-wrapper">

<div className="sticky top-0 h-screen overflow-hidden flex flex-col items-center justify-center bg-[#030303]/80 backdrop-blur-sm">

<div className="absolute top-20 text-center z-30 w-full px-4">
<div className="flex items-center justify-center gap-2 mb-4">
<i className="w-3 h-3 text-zinc-600" data-lucide="chevron-right"></i>
<span className="text-[10px] tracking-[0.2em] font-semibold text-zinc-500 uppercase">Process</span>
<i className="w-3 h-3 text-zinc-600" data-lucide="chevron-left"></i>
</div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white drop-shadow-2xl">
                        How do <span className="font-script text-3xl md:text-5xl text-gradient-purple px-1 transform -rotate-2 inline-block">we</span> <span className="font-serif-italic text-gradient-emerald">fix it?</span>
</h2>
</div>

<div className="relative w-full max-w-4xl h-[400px] md:h-[500px] flex items-end justify-center perspective-1000 mt-20">

<div className="absolute top-12 md:top-24 w-[120vw] h-[120vw] md:w-[90vw] md:h-[90vw] max-w-[1200px] max-h-[1200px] border border-white/10 rounded-full flex items-start justify-center transition-transform duration-700 ease-out origin-center will-change-transform bg-zinc-900/10" id="wheel">

<div className="wheel-node absolute -top-5 md:-top-7 left-1/2 -translate-x-1/2 w-12 h-12 md:w-16 md:h-16 rounded-xl border flex items-center justify-center text-lg md:text-xl font-bold z-10 inactive bg-zinc-900 text-zinc-600" data-step="2">
                            02
                        </div>

<div className="wheel-node absolute top-[4%] left-[30%] md:left-[32%] -translate-x-1/2 w-12 h-12 md:w-16 md:h-16 rounded-xl border flex items-center justify-center text-lg md:text-xl font-bold z-10 active bg-white text-black" data-step="1" style={{transform: 'rotate(-25deg)'}}>
                            01
                        </div>

<div className="wheel-node absolute top-[4%] right-[30%] md:right-[32%] translate-x-1/2 w-12 h-12 md:w-16 md:h-16 rounded-xl border flex items-center justify-center text-lg md:text-xl font-bold z-10 inactive bg-zinc-900 text-zinc-600" data-step="3" style={{transform: 'rotate(25deg)'}}>
                            03
                        </div>
</div>
</div>

<div className="absolute bottom-24 md:bottom-32 w-full max-w-2xl px-6 text-center z-30">
<div className="transition-opacity duration-300" id="content-container">
<h3 className="text-3xl md:text-4xl font-medium text-white mb-4 tracking-tight" id="step-title">Strategy &amp; Format</h3>
<p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-lg mx-auto mb-8" id="step-desc">
                            We analyze your niche and competitors to develop a unique 'Winning Format' tailored to your audience. No guesswork, just data-backed direction.
                        </p>
<div className="flex items-center justify-center gap-3 text-[10px] md:text-xs font-mono tracking-widest text-zinc-500 border-t border-white/5 pt-8 w-full">
<span id="step-tag-1">MARKET ANALYSIS</span>
<span className="text-zinc-700">•</span>
<span className="text-zinc-400" id="step-tag-2">// POSITIONING</span>
</div>
</div>
<button className="mt-12 bg-white text-black px-8 py-3 rounded-md text-xs font-bold tracking-wide hover:bg-zinc-200 transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                        BOOK A CALL
                    </button>
</div>

<div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent pointer-events-none z-20 h-40 bottom-0 top-auto w-full"></div>
<div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-transparent to-transparent pointer-events-none z-20 h-40 top-0 w-full"></div>
</div>
</div>

<section className="relative py-32 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">

<div className="text-center mb-24">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-4">
                        Why <span className="font-serif-italic text-gradient-purple">40+</span> Businesses <span className="font-serif-italic text-gradient-emerald">trust</span> Us
                    </h2>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

<div className="p-10 rounded-[2rem] border border-white/10 bg-zinc-900/10 hover:bg-zinc-900/30 transition-all duration-300 group text-center flex flex-col items-center backdrop-blur-sm">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 text-zinc-300 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="banknote"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-4">Revenue Focused</h3>
<p className="text-zinc-500 text-sm leading-7">
                            Our top priority is always to attract high quality leads to your business, not tire kickers who'll never buy. Views are vanity, revenue is sanity.
                        </p>
</div>

<div className="p-10 rounded-[2rem] border border-white/10 bg-zinc-900/10 hover:bg-zinc-900/30 transition-all duration-300 group text-center flex flex-col items-center backdrop-blur-sm">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 text-zinc-300 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="bar-chart"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-4">Constraint Based</h3>
<p className="text-zinc-500 text-sm leading-7">
                            We focus on the 80/20 of content. Rather than obsessing over lighting or editing tricks, we ruthlessly find and test new formats that actually move the needle.
                        </p>
</div>

<div className="p-10 rounded-[2rem] border border-white/10 bg-zinc-900/10 hover:bg-zinc-900/30 transition-all duration-300 group text-center flex flex-col items-center backdrop-blur-sm">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 text-zinc-300 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="user"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-4">Earn While You Learn</h3>
<p className="text-zinc-500 text-sm leading-7">
                            We do 80% of the work while coaching you on the last 20%. By the end, you'll have a winning creative you can put ad spend behind for amazing CPL.
                        </p>
</div>
</div>
</div>
</section>

<section className="relative py-20 pb-20">
<div className="max-w-2xl mx-auto px-6 flex flex-col items-center">

<div className="flex items-center gap-4 text-zinc-700 text-[10px] tracking-widest font-bold mb-8">
<i className="w-3 h-3" data-lucide="chevron-right"></i>
<span>GOT QUESTIONS</span>
<i className="w-3 h-3" data-lucide="chevron-left"></i>
</div>

<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-16 text-center">
<span className="font-serif-italic text-gradient-purple pr-2">Frequent</span>
<span className="font-serif-italic text-gradient-emerald">Questions</span>
</h2>

<div className="w-full space-y-4">

<div className="group rounded-xl bg-zinc-900/40 border border-white/5 overflow-hidden transition-all hover:bg-zinc-900/60 backdrop-blur-md">
<button className="w-full flex items-center justify-between p-6 text-left" onclick="toggleAccordion(this)">
<span className="text-white font-medium text-base">What's your pricing?</span>
<div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-zinc-400 rotate-icon">
<i className="w-3 h-3" data-lucide="plus"></i>
</div>
</button>
<div className="accordion-content px-6 text-sm text-zinc-400 leading-relaxed">
<div className="pb-6">
                                We offer custom packages based on your volume needs. Typically our partners invest between $3k-$8k/month depending on the number of shorts and level of strategic involvement required.
                            </div>
</div>
</div>

<div className="group rounded-xl bg-zinc-900/40 border border-white/5 overflow-hidden transition-all hover:bg-zinc-900/60 backdrop-blur-md">
<button className="w-full flex items-center justify-between p-6 text-left" onclick="toggleAccordion(this)">
<span className="text-white font-medium text-base">How can you promise 50k+ views?</span>
<div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-zinc-400 rotate-icon">
<i className="w-3 h-3" data-lucide="plus"></i>
</div>
</button>
<div className="accordion-content px-6 text-sm text-zinc-400 leading-relaxed">
<div className="pb-6">
                                We don't just chase viral trends. We build authority content that addresses your customers' specific pain points, ensuring that the views you get are from people actually interested in your solution.
                            </div>
</div>
</div>

<div className="group rounded-xl bg-zinc-900/40 border border-white/5 overflow-hidden transition-all hover:bg-zinc-900/60 backdrop-blur-md">
<button className="w-full flex items-center justify-between p-6 text-left" onclick="toggleAccordion(this)">
<span className="text-white font-medium text-base">How many hours do I need?</span>
<div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-zinc-400 rotate-icon">
<i className="w-3 h-3" data-lucide="plus"></i>
</div>
</button>
<div className="accordion-content px-6 text-sm text-zinc-400 leading-relaxed">
<div className="pb-6">
                                With our DFY Scripting and streamlined recording process, most clients spend less than 2 hours per month to produce 15-30 high-quality videos.
                            </div>
</div>
</div>

<div className="group rounded-xl bg-zinc-900/40 border border-white/5 overflow-hidden transition-all hover:bg-zinc-900/60 backdrop-blur-md">
<button className="w-full flex items-center justify-between p-6 text-left" onclick="toggleAccordion(this)">
<span className="text-white font-medium text-base">Do I need to be on camera?</span>
<div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-zinc-400 rotate-icon">
<i className="w-3 h-3" data-lucide="plus"></i>
</div>
</button>
<div className="accordion-content px-6 text-sm text-zinc-400 leading-relaxed">
<div className="pb-6">
                                While personal brand content performs exceptionally well, we can also create faceless assets or use AI avatars depending on your brand strategy and comfort level.
                            </div>
</div>
</div>

<div className="group rounded-xl bg-zinc-900/40 border border-white/5 overflow-hidden transition-all hover:bg-zinc-900/60 backdrop-blur-md">
<button className="w-full flex items-center justify-between p-6 text-left" onclick="toggleAccordion(this)">
<span className="text-white font-medium text-base">How long until I see results?</span>
<div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-zinc-400 rotate-icon">
<i className="w-3 h-3" data-lucide="plus"></i>
</div>
</button>
<div className="accordion-content px-6 text-sm text-zinc-400 leading-relaxed">
<div className="pb-6">
                                We work in 120-day sprints. Typically, we identify the 'Winning Format' within the first 30-45 days, after which we scale volume and viewership aggressively.
                            </div>
</div>
</div>
</div>
</div>
</section>

<section className="relative bg-white text-black z-30 pb-32">

<div className="absolute -top-48 left-0 right-0 h-48 bg-[#030303] flex flex-col items-center justify-start pt-8 z-0">
<p className="text-white font-medium text-lg mb-4">Still have questions?</p>
<button className="px-5 py-2 rounded-full border border-white/20 text-white text-sm hover:bg-white/10 transition-colors">Let's talk</button>
</div>

<div className="absolute -top-16 left-0 right-0 h-32 overflow-hidden pointer-events-none">

<div className="absolute top-[60%] left-1/2 -translate-x-1/2 w-[150%] h-[200%] rounded-[100%] shadow-[0_-20px_80px_20px_rgba(192,132,252,0.4)] aurora-glow opacity-90"></div>
<div className="absolute top-[62%] left-1/2 -translate-x-1/2 w-[110%] h-[200%] bg-white rounded-[100%]"></div>
</div>
<div className="relative max-w-7xl mx-auto px-6 pt-24 z-10">

<div className="text-center mb-20">
<h2 className="text-5xl md:text-6xl font-medium tracking-tight mb-4 text-black">
                        Short-form <span className="font-serif-italic text-gradient-purple" style={{textShadow: '0 0 30px rgba(168,85,247,0.3)'}}>content</span> built to <span className="font-serif-italic text-gradient-emerald" style={{textShadow: '0 0 30px rgba(16,185,129,0.3)'}}>perform</span>
</h2>
<p className="text-zinc-500 text-lg mb-8">High-volume content without sacrificing quality.</p>
<button className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-zinc-800 transition-all shadow-xl shadow-black/20">
                        Get started
                    </button>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-6xl mx-auto">

<div className="md:col-span-4 md:row-span-2 bg-[#0A0A0A] rounded-3xl p-8 relative overflow-hidden group flex items-center justify-center min-h-[400px]">
<div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-emerald-500/10 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
<div className="relative w-24 h-24 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center shadow-2xl">
<span className="text-white font-bold tracking-tighter">CLIP<span className="text-zinc-500">/</span>CUT</span>
</div>

<div className="absolute top-10 left-10 w-2 h-2 rounded-full bg-purple-500 blur-[2px]"></div>
<div className="absolute bottom-20 right-10 w-1 h-1 rounded-full bg-emerald-500 blur-[1px]"></div>
</div>

<div className="md:col-span-4 bg-[#0A0A0A] rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group">
<div className="absolute top-0 right-0 p-8 opacity-20">
<i className="w-24 h-24 text-white rotate-12 translate-x-8 -translate-y-8" data-lucide="star"></i>
</div>
<div>
<div className="flex items-baseline gap-2 mb-2">
<span className="text-5xl font-medium text-white tracking-tight">4.9</span>
<span className="text-xl text-zinc-500">/5</span>
</div>
<div className="flex gap-1 mb-6 text-orange-500">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<div className="flex items-center gap-3 mb-6">
<div className="flex -space-x-2">
<img className="w-8 h-8 rounded-full border-2 border-[#0A0A0A]" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64&amp;q=80"/>
<img className="w-8 h-8 rounded-full border-2 border-[#0A0A0A]" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64&amp;q=80"/>
<img className="w-8 h-8 rounded-full border-2 border-[#0A0A0A]" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=64&amp;h=64&amp;q=80"/>
<div className="w-8 h-8 rounded-full border-2 border-[#0A0A0A] bg-zinc-800 flex items-center justify-center text-[10px] text-white font-medium">+82</div>
</div>
<div className="text-xs text-zinc-400">Clients worldwide<br/>who love our service</div>
</div>
</div>
<button className="w-full py-3 rounded-lg bg-white/5 border border-white/10 text-sm font-medium text-white hover:bg-white/10 transition-colors">
                            Leave a review
                        </button>
</div>

<div className="md:col-span-4 bg-[#0A0A0A] rounded-3xl p-8 relative overflow-hidden">
<div className="flex justify-between items-start mb-6">
<h3 className="text-xl font-medium text-white">Analytics</h3>
<span className="px-2 py-0.5 rounded text-[10px] font-bold bg-zinc-800 text-zinc-400 border border-white/5">3+</span>
</div>
<p className="text-sm text-zinc-500 mb-8 leading-relaxed">
                            Connect your data tools to track performance and uncover insights.
                        </p>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-300">Google Analytics</span>
<span className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-300">Hotjar</span>
<span className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-300">Mixpanel</span>
<span className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-300">+ 3</span>
</div>
</div>

<div className="md:col-span-4 bg-[#0A0A0A] rounded-3xl p-8 min-h-[160px] flex items-center justify-center border border-white/5 relative overflow-hidden group">

<svg className="absolute bottom-0 left-0 right-0 w-full h-24 text-zinc-800 group-hover:text-zinc-700 transition-colors" preserveaspectratio="none" viewbox="0 0 100 40">
<path d="M0 40 L0 30 Q 10 20 20 30 T 40 25 T 60 15 T 80 20 T 100 5 L 100 40 Z" fill="currentColor" opacity="0.5"></path>
<path d="M0 30 Q 10 20 20 30 T 40 25 T 60 15 T 80 20 T 100 5" fill="none" stroke="#22c55e" strokeWidth="1"></path>
</svg>
</div>

<div className="md:col-span-4 bg-[#0A0A0A] rounded-3xl p-8 min-h-[160px] flex items-center border border-white/5">
<div className="flex items-center gap-3">
<span className="relative flex h-3 w-3">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
</span>
<span className="text-xs font-bold tracking-widest text-zinc-400 uppercase">Available for project</span>
</div>
</div>
</div>
</div>
</section>
</main>
<footer className="border-t border-zinc-200 bg-white py-12 text-black">
<div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-black rounded-sm flex items-center justify-center text-white text-xs font-bold">C</div>
<span className="text-sm font-medium text-zinc-900">ClipCut</span>
</div>
<div className="flex gap-6 text-sm text-zinc-500">
<a className="hover:text-black transition-colors" href="#">Twitter</a>
<a className="hover:text-black transition-colors" href="#">Email</a>
</div>
<div className="text-zinc-400 text-xs">© 2024 ClipCut Inc.</div>
</div>
</footer>


    </>
  );
}
