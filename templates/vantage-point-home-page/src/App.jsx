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



        // Reveal Animation on Load
        document.addEventListener('DOMContentLoaded', () => {
            const reveals = document.querySelectorAll('.reveal-trigger');
            
            // Initial reveal
            setTimeout(() => {
                reveals.forEach((el) => {
                    el.classList.add('reveal-visible');
                });
            }, 300);

            // Intersection Observer for scroll elements
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('reveal-visible');
                    }
                });
            }, { threshold: 0.1 });

            // Apply to Logic Gate Items
            const logicItems = document.querySelectorAll('.grid > div');
            logicItems.forEach((item, index) => {
                item.style.opacity = '0';
                item.style.transform = 'translateY(20px)';
                item.style.transition = `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s`;
                
                // Simple inline observer logic for brevity
                const itemObserver = new IntersectionObserver((e) => {
                    if(e[0].isIntersecting) {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }
                });
                itemObserver.observe(item);
            });
        });

        // Parallax Tilt Effect for Gallery
        const cards = document.querySelectorAll('.tilt-card-wrapper');

        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = ((y - centerY) / centerY) * -5; // Max 5 deg rotation
                const rotateY = ((x - centerX) / centerX) * 5;

                const inner = card.querySelector('.tilt-card');
                inner.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            });

            card.addEventListener('mouseleave', () => {
                const inner = card.querySelector('.tilt-card');
                inner.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
            });
        });
    
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
      

<div className="noise"></div>

<nav className="fixed top-0 w-full z-40 border-b border-[#1A1A1A] bg-[#F4F4F1]/90 backdrop-blur-sm">
<div className="w-full flex justify-between items-center h-16 px-6 lg:px-12">
<div className="text-sm font-semibold tracking-tighter uppercase text-[#1A1A1A]">
                Vantage Point
            </div>
<div className="hidden md:flex space-x-8 text-xs font-mono uppercase tracking-widest text-[#1A1A1A]/70">
<a className="hover:text-[#FF4D00] transition-colors" href="#">Manifesto</a>
<a className="hover:text-[#FF4D00] transition-colors" href="#">Artifacts</a>
<a className="hover:text-[#FF4D00] transition-colors" href="#">Ledger</a>
</div>
<button className="text-xs font-mono uppercase border border-[#1A1A1A] px-4 py-2 hover:bg-[#1A1A1A] hover:text-[#F4F4F1] transition-all duration-300">
                Studio Access
            </button>
</div>
</nav>

<section className="min-h-screen pt-16 grid grid-cols-1 lg:grid-cols-12 border-b border-[#1A1A1A]">

<div className="hidden lg:block lg:col-span-3 border-r border-[#1A1A1A] bg-[#EAEAEA] relative overflow-hidden">
<div className="absolute inset-0 flex flex-col justify-center items-center h-[200%] marquee-content">

<div className="flex flex-col gap-12 text-xs font-mono text-[#1A1A1A]/60 w-full px-6">
<div className="border-b border-[#1A1A1A]/20 pb-2 flex justify-between"><span>ACTIVE_NODES</span><span>842</span></div>
<div className="border-b border-[#1A1A1A]/20 pb-2 flex justify-between"><span>UPTIME</span><span>99.99%</span></div>
<div className="border-b border-[#1A1A1A]/20 pb-2 flex justify-between"><span>REQ_SEC</span><span>12K</span></div>
<div className="border-b border-[#1A1A1A]/20 pb-2 flex justify-between"><span>LATENCY</span><span>14ms</span></div>
<div className="border-b border-[#1A1A1A]/20 pb-2 flex justify-between"><span>DEPLOY</span><span>V2.4.1</span></div>
<div className="border-b border-[#1A1A1A]/20 pb-2 flex justify-between"><span>STATUS</span><span className="text-[#FF4D00]">LIVE</span></div>

<div className="border-b border-[#1A1A1A]/20 pb-2 flex justify-between"><span>ACTIVE_NODES</span><span>842</span></div>
<div className="border-b border-[#1A1A1A]/20 pb-2 flex justify-between"><span>UPTIME</span><span>99.99%</span></div>
<div className="border-b border-[#1A1A1A]/20 pb-2 flex justify-between"><span>REQ_SEC</span><span>12K</span></div>
<div className="border-b border-[#1A1A1A]/20 pb-2 flex justify-between"><span>LATENCY</span><span>14ms</span></div>
<div className="border-b border-[#1A1A1A]/20 pb-2 flex justify-between"><span>DEPLOY</span><span>V2.4.1</span></div>
<div className="border-b border-[#1A1A1A]/20 pb-2 flex justify-between"><span>STATUS</span><span className="text-[#FF4D00]">LIVE</span></div>
</div>
</div>
<div className="absolute bottom-6 left-6 text-[10px] font-mono uppercase tracking-widest rotate-0">
                System Pulse
            </div>
</div>

<div className="col-span-1 lg:col-span-9 flex flex-col justify-center px-6 lg:px-24 py-20 lg:py-0 relative">
<div className="max-w-4xl z-10">
<div className="reveal-trigger">
<h1 className="text-5xl md:text-7xl lg:text-8xl font-normal tracking-tighter leading-[0.9] mb-8 text-[#1A1A1A]">
<span className="reveal-text-wrapper"><span className="reveal-text block">Architecture</span></span>
<span className="reveal-text-wrapper"><span className="reveal-text block text-[#1A1A1A]/40">for the</span></span>
<span className="reveal-text-wrapper"><span className="reveal-text block">Ambitious.</span></span>
</h1>
</div>
<div className="reveal-trigger delay-200 mt-12 pl-1 border-l-2 border-[#FF4D00]">
<p className="text-lg md:text-xl font-normal text-[#1A1A1A]/80 max-w-xl ml-6 reveal-text-wrapper">
<span className="reveal-text block">A Creative Engineering Studio building the digital infrastructure for the next generation of SaaS. Precision over Hype.</span>
</p>
</div>
</div>

<div className="absolute bottom-12 right-12 hidden lg:block">
<span className="iconify text-[#1A1A1A] w-12 h-12 animate-spin-slow" data-icon="lucide:loader-2"></span>
</div>
</div>
</section>

<section className="border-b border-[#1A1A1A]">
<div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#1A1A1A]">

<div className="p-8 lg:p-12 group hover:bg-[#1A1A1A] hover:text-[#F4F4F1] transition-colors duration-500 cursor-default">
<span className="block font-serif text-5xl lg:text-6xl mb-8 group-hover:text-[#FF4D00] transition-colors">01</span>
<h3 className="text-xl font-semibold tracking-tight mb-4">Engineered Scalability</h3>
<p className="text-sm font-normal leading-relaxed opacity-80">
                    We don't just build apps; we forge systems that breathe with your user base. Architecture designed for day one and day one thousand.
                </p>
</div>

<div className="p-8 lg:p-12 group hover:bg-[#1A1A1A] hover:text-[#F4F4F1] transition-colors duration-500 cursor-default">
<span className="block font-serif text-5xl lg:text-6xl mb-8 group-hover:text-[#FF4D00] transition-colors">02</span>
<h3 className="text-xl font-semibold tracking-tight mb-4">Radical Transparency</h3>
<p className="text-sm font-normal leading-relaxed opacity-80">
                    A direct line to the architects. No account managers, no layers, just code and craft. Pure signal, zero noise communication.
                </p>
</div>

<div className="p-8 lg:p-12 group hover:bg-[#1A1A1A] hover:text-[#F4F4F1] transition-colors duration-500 cursor-default">
<span className="block font-serif text-5xl lg:text-6xl mb-8 group-hover:text-[#FF4D00] transition-colors">03</span>
<h3 className="text-xl font-semibold tracking-tight mb-4">The 1% Aesthetic</h3>
<p className="text-sm font-normal leading-relaxed opacity-80">
                    Design that commands a premium. We move your brand out of the 'template-tier' and into the 'elite-tier' with Swiss precision.
                </p>
</div>
</div>
</section>

<section className="py-24 border-b border-[#1A1A1A] overflow-hidden">
<div className="px-6 lg:px-12 mb-16 flex justify-between items-end">
<h2 className="text-4xl md:text-5xl font-normal tracking-tight">Artifacts</h2>
<span className="hidden md:block text-xs font-mono uppercase tracking-widest text-[#FF4D00]">/ Selected Works 2023-2024</span>
</div>
<div className="px-6 lg:px-12 space-y-24">

<div className="tilt-card-wrapper perspective-1000 relative group w-full cursor-none">
<div className="tilt-card transform-style-3d transition-transform duration-100 ease-out w-full aspect-[16/9] lg:aspect-[21/9] bg-[#E5E5E5] overflow-hidden relative border border-[#1A1A1A]">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487887235947-a955ef187fcc?q=80&amp;w=2555&amp;auto=format&amp;fit=crop')] bg-cover bg-center grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"></div>
<div className="absolute inset-0 bg-[#1A1A1A]/20 group-hover:bg-[#1A1A1A]/0 transition-colors duration-500"></div>

<div className="absolute bottom-0 left-0 p-8 lg:p-12 w-full flex justify-between items-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<div>
<div className="text-xs font-mono text-white mb-2 uppercase tracking-widest">Fintech Core</div>
<h3 className="text-3xl lg:text-5xl text-white font-normal tracking-tighter">Onyx Ledger</h3>
</div>
<div className="hidden md:block">
<span className="inline-flex items-center gap-2 text-white border border-white/30 px-6 py-3 text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
                                Deconstruct Process <span className="iconify" data-icon="lucide:arrow-up-right"></span>
</span>
</div>
</div>
</div>
</div>

<div className="tilt-card-wrapper perspective-1000 relative group w-full cursor-none">
<div className="tilt-card transform-style-3d transition-transform duration-100 ease-out w-full aspect-[16/9] lg:aspect-[21/9] bg-[#E5E5E5] overflow-hidden relative border border-[#1A1A1A]">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&amp;w=2574&amp;auto=format&amp;fit=crop')] bg-cover bg-center grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"></div>
<div className="absolute inset-0 bg-[#1A1A1A]/20 group-hover:bg-[#1A1A1A]/0 transition-colors duration-500"></div>

<div className="absolute bottom-0 left-0 p-8 lg:p-12 w-full flex justify-between items-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<div>
<div className="text-xs font-mono text-white mb-2 uppercase tracking-widest">AI Infrastructure</div>
<h3 className="text-3xl lg:text-5xl text-white font-normal tracking-tighter">Kortex Array</h3>
</div>
<div className="hidden md:block">
<span className="inline-flex items-center gap-2 text-white border border-white/30 px-6 py-3 text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
                                Deconstruct Process <span className="iconify" data-icon="lucide:arrow-up-right"></span>
</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-[#1A1A1A]">
<div className="px-6 lg:px-12 mb-16">
<h2 className="text-4xl md:text-5xl font-normal tracking-tight max-w-xl">
                The Protocol.
                <span className="text-[#1A1A1A]/40">Precision built into every sprint.</span>
</h2>
</div>

<div className="w-full overflow-x-auto no-scrollbar pb-12 pl-6 lg:pl-12">
<div className="flex space-x-0 w-max border-t border-b border-[#1A1A1A]">

<div className="w-[85vw] md:w-[40vw] border-r border-[#1A1A1A] p-12 flex flex-col justify-between h-[400px] hover:bg-white transition-colors">
<div className="flex justify-between items-start">
<span className="text-xs font-mono uppercase tracking-widest border border-[#1A1A1A] px-2 py-1 rounded-full">Phase_01</span>
<span className="iconify w-6 h-6 text-[#FF4D00]" data-icon="lucide:ear"></span>
</div>
<div>
<h4 className="text-2xl font-semibold tracking-tight mb-4">Auditory Discovery</h4>
<p className="text-sm opacity-70 leading-relaxed max-w-sm">
                            We listen before we commit a single line of code. Understanding the 'why' ensures the 'how' is bulletproof.
                        </p>
</div>
</div>

<div className="w-[85vw] md:w-[40vw] border-r border-[#1A1A1A] p-12 flex flex-col justify-between h-[400px] hover:bg-white transition-colors">
<div className="flex justify-between items-start">
<span className="text-xs font-mono uppercase tracking-widest border border-[#1A1A1A] px-2 py-1 rounded-full">Phase_02</span>
<span className="iconify w-6 h-6 text-[#FF4D00]" data-icon="lucide:zap"></span>
</div>
<div>
<h4 className="text-2xl font-semibold tracking-tight mb-4">Rapid Prototyping</h4>
<p className="text-sm opacity-70 leading-relaxed max-w-sm">
                            High-fidelity wireframes delivered in 72 hours. We visualize the architecture immediately to align vision with reality.
                        </p>
</div>
</div>

<div className="w-[85vw] md:w-[40vw] border-r border-[#1A1A1A] p-12 flex flex-col justify-between h-[400px] hover:bg-white transition-colors">
<div className="flex justify-between items-start">
<span className="text-xs font-mono uppercase tracking-widest border border-[#1A1A1A] px-2 py-1 rounded-full">Phase_03</span>
<span className="iconify w-6 h-6 text-[#FF4D00]" data-icon="lucide:activity"></span>
</div>
<div>
<h4 className="text-2xl font-semibold tracking-tight mb-4">Stress Testing</h4>
<p className="text-sm opacity-70 leading-relaxed max-w-sm">
                            Edge-case analysis and performance optimization. We break it so your users can't.
                        </p>
</div>
</div>

<div className="w-[85vw] md:w-[40vw] border-r border-[#1A1A1A] p-12 flex flex-col justify-between h-[400px] hover:bg-white transition-colors bg-[#1A1A1A] text-[#F4F4F1]">
<div className="flex justify-between items-start">
<span className="text-xs font-mono uppercase tracking-widest border border-[#F4F4F1] px-2 py-1 rounded-full">Phase_04</span>
<span className="iconify w-6 h-6 text-[#FF4D00]" data-icon="lucide:rocket"></span>
</div>
<div>
<h4 className="text-2xl font-semibold tracking-tight mb-4">Deployment</h4>
<p className="text-sm opacity-70 leading-relaxed max-w-sm">
                            Seamless integration into your ecosystem. Handover is not the end, it's the initialization.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 border-b border-[#1A1A1A] bg-[#F4F4F1]">
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="mb-12">
<span className="iconify w-8 h-8 mx-auto text-[#FF4D00]" data-icon="lucide:quote"></span>
</div>
<blockquote className="text-3xl md:text-5xl font-serif italic leading-tight text-[#1A1A1A] mb-12">
                "Vantage Point didn't just redesign our platform; they redefined our market position. The precision is palpable."
            </blockquote>
<div className="flex flex-col items-center gap-2">
<span className="text-xs font-mono uppercase tracking-widest bg-[#1A1A1A] text-white px-3 py-1">CTO, NEXUS LABS</span>
<span className="text-[10px] font-mono uppercase text-[#1A1A1A]/60">Series B Fintech</span>
</div>

<div className="flex justify-center gap-4 mt-12">
<button className="w-12 h-12 border border-[#1A1A1A] flex items-center justify-center hover:bg-[#1A1A1A] hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:arrow-left"></span>
</button>
<button className="w-12 h-12 border border-[#1A1A1A] flex items-center justify-center hover:bg-[#1A1A1A] hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:arrow-right"></span>
</button>
</div>
</div>
</section>

<section className="bg-[#FF4D00] text-white py-32 px-6 lg:px-12 relative overflow-hidden">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
<div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-6xl md:text-8xl font-normal tracking-tighter leading-[0.85] mb-8">
                    READY TO<br/>LEAVE THE<br/>MIDDLE<br/>GROUND?
                </h2>
</div>
<div className="flex flex-col items-start gap-6">
<p className="text-lg md:text-xl font-normal opacity-90 max-w-md mb-4">
                    The gap between good and elite is engineering. Bridge it with us.
                </p>
<button className="group relative overflow-hidden bg-white text-[#FF4D00] px-10 py-5 text-sm font-semibold uppercase tracking-widest transition-all hover:pr-14">
<span className="relative z-10">Initialize Project</span>
<span className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
<span className="iconify" data-icon="lucide:arrow-right"></span>
</span>
</button>
<button className="flex items-center gap-2 text-sm font-mono uppercase tracking-widest border-b border-white/50 pb-1 hover:border-white hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:download"></span>
                    Download Studio Profile
                </button>
</div>
</div>
</section>

<footer className="bg-[#1A1A1A] text-[#F4F4F1] py-16 px-6 lg:px-12 border-t border-[#1A1A1A]">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">
<div className="md:col-span-1">
<span className="font-semibold tracking-tighter uppercase text-lg block mb-6">Vantage Point</span>
<span className="font-mono text-xs opacity-50 block">© 2024 VANTAGE POINT INC.</span>
</div>
<div>
<h5 className="font-mono text-xs uppercase tracking-widest opacity-50 mb-6">Sitemap</h5>
<ul className="space-y-3 opacity-80">
<li><a className="hover:text-[#FF4D00] transition-colors" href="#">Manifesto</a></li>
<li><a className="hover:text-[#FF4D00] transition-colors" href="#">Artifacts</a></li>
<li><a className="hover:text-[#FF4D00] transition-colors" href="#">Methodology</a></li>
<li><a className="hover:text-[#FF4D00] transition-colors" href="#">Ledger</a></li>
</ul>
</div>
<div>
<h5 className="font-mono text-xs uppercase tracking-widest opacity-50 mb-6">Social</h5>
<ul className="space-y-3 opacity-80">
<li><a className="hover:text-[#FF4D00] transition-colors" href="#">Twitter / X</a></li>
<li><a className="hover:text-[#FF4D00] transition-colors" href="#">LinkedIn</a></li>
<li><a className="hover:text-[#FF4D00] transition-colors" href="#">GitHub</a></li>
</ul>
</div>
<div className="md:col-span-1 flex flex-col justify-end items-end">
<span className="font-mono text-xs text-[#FF4D00] block mb-2">SYSTEM_STATUS: NOMINAL</span>
<div className="flex gap-1">
<div className="w-1 h-4 bg-[#FF4D00]"></div>
<div className="w-1 h-4 bg-[#FF4D00]/50"></div>
<div className="w-1 h-4 bg-[#FF4D00]/30"></div>
</div>
</div>
</div>
</footer>


    </>
  );
}
