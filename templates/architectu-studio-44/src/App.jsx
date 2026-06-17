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

        // Reveal Animation
        const observerOptions = { threshold: 0.1, rootMargin: "0px" };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        // Spotlight Logic
        const cardsContainer = document.getElementById('cards-container');
        const cards = document.querySelectorAll('.spotlight-card');

        if(cardsContainer) {
            window.addEventListener('mousemove', e => {
                cards.forEach(card => {
                    const rect = card.getBoundingClientRect(),
                          x = e.clientX - rect.left,
                          y = e.clientY - rect.top;

                    card.style.setProperty("--cursor-x", `${x}px`);
                    card.style.setProperty("--cursor-y", `${y}px`);
                });
            });
        }

        // Navbar Frosting
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('bg-slate-950/60', 'backdrop-blur-md', 'border-white/10');
                navbar.classList.remove('border-white/0', 'py-4');
                navbar.classList.add('py-2');
            } else {
                navbar.classList.remove('bg-slate-950/60', 'backdrop-blur-md', 'border-white/10', 'py-2');
                navbar.classList.add('border-white/0', 'py-4');
            }
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
      

<div className="aurora-bg">
<div className="blob-1"></div>
<div className="blob-2"></div>
<div className="blob-3"></div>
<div className="perspective-grid">
<div className="grid-plane"></div>
</div>

<div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=\\'0 0 200 200\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cfilter id=\\'noiseFilter\\'%3E%3CfeTurbulence type=\\'fractalNoise\\' baseFrequency=\\'0.8\\' numOctaves=\\'3\\' stitchTiles=\\'stitch\\'/%3E%3C/filter%3E%3Crect width=\\'100%25\\' height=\\'100%25\\' filter=\\'url(%23noiseFilter)\\'/%3E%3C/svg%3E\')'}}></div>
</div>

<nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-white/0 py-4" id="navbar">
<div className="w-full px-6 md:px-12 flex justify-between items-center">
<a className="text-sm font-bold tracking-tight text-white uppercase flex items-center gap-3" href="#">
<div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                Springbrid
            </a>
<a className="hidden md:flex items-center gap-2 text-xs font-semibold bg-white text-black px-5 py-2.5 rounded-full hover:scale-105 transition-transform" href="#contact">
                Start Project
            </a>
</div>
</nav>

<section className="relative min-h-screen flex flex-col justify-end pb-24 px-4 md:px-12 overflow-hidden z-10">
<div className="w-full max-w-[1920px] mx-auto space-y-8 md:space-y-12">
<div className="reveal flex items-center gap-3">
<span className="px-3 py-1 rounded-full border border-white/20 bg-white/5 text-[10px] md:text-xs font-semibold tracking-widest uppercase text-indigo-200 backdrop-blur-sm">
                    Visual Intelligence Studio
                </span>
</div>
<h1 className="reveal delay-100 text-massive font-bold text-white tracking-tighter uppercase w-full break-words md:whitespace-nowrap">
                Architectural
                <span className="block md:inline text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">Storytelling.</span>
</h1>
<div className="reveal delay-200 grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-white/20 pt-8 mt-8">
<div className="md:col-span-5">
<p className="text-xl md:text-3xl text-slate-300 font-medium leading-tight">
                        We translate complex blueprints into emotional assets. Making the unseen, undeniable.
                    </p>
</div>
<div className="md:col-span-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
<div className="flex gap-12">
<div>
<span className="block text-3xl font-bold text-white">40%</span>
<span className="text-xs text-slate-400 uppercase tracking-widest font-medium">Faster Presales</span>
</div>
<div>
<span className="block text-3xl font-bold text-white">2.5x</span>
<span className="text-xs text-slate-400 uppercase tracking-widest font-medium">Engagement</span>
</div>
</div>
<button className="group flex items-center gap-3 text-sm font-semibold text-white border-b border-white pb-1 hover:text-indigo-300 hover:border-indigo-300 transition-colors">
                        Explore Case Studies
                        <i className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" data-lucide="arrow-down-right"></i>
</button>
</div>
</div>
</div>
</section>

<section className="relative py-32 z-10 border-t border-white/10 bg-slate-950/50 backdrop-blur-sm" id="vision">
<div className="w-full px-4 md:px-12">
<div className="reveal mb-20">
<h2 className="text-responsive-h2 font-bold tracking-tighter text-white max-w-7xl leading-[0.9]">
                    The gap between <br/>
<span className="text-slate-600">CAD &amp; Contract.</span>
</h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
<div className="space-y-8 reveal delay-100 sticky top-32">
<p className="text-2xl md:text-4xl font-medium text-slate-300 leading-snug">
                        Investors don't speak DWG. Buyers don't dream in elevations. 
                        When a project is just lines on paper, value is subjective.
                    </p>
<p className="text-lg text-slate-500 font-medium max-w-xl">
                        We bridge that gap. We turn technical data into a visceral reality that drives higher valuations and faster approvals.
                    </p>
</div>

<div className="relative w-full aspect-[4/5] rounded-none md:rounded-3xl overflow-hidden reveal delay-200 group border border-white/10 shadow-2xl shadow-indigo-500/10">
<div className="absolute inset-0 bg-slate-900">
<img className="w-full h-full object-cover transition-transform duration-[2s] scale-100 group-hover:scale-110" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2700&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700"></div>
<div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent">
<div className="flex items-center gap-4 text-white">
<i className="w-8 h-8 opacity-80" data-lucide="scan-eye"></i>
<span className="text-sm font-semibold tracking-widest uppercase">Visual Clarity</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative z-10 border-t border-white/10" id="services">
<div className="px-4 md:px-12 mb-16 reveal">
<h2 className="text-responsive-h2 font-bold tracking-tighter text-white mb-6">Designed to Persuade.</h2>
<p className="text-2xl text-slate-400 font-light max-w-3xl">A suite of visual tools engineered for the modern property landscape.</p>
</div>

<div className="w-full border-t border-white/10 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10" id="cards-container">

<div className="spotlight-card group relative h-[500px] p-8 md:p-12 flex flex-col justify-between hover:bg-white/[0.02] transition-colors">
<div className="relative z-10">
<i className="w-12 h-12 text-white mb-8 stroke-1" data-lucide="box"></i>
<h3 className="text-4xl font-semibold text-white mb-4 tracking-tight">3D Visualisation</h3>
</div>
<div className="relative z-10">
<p className="text-lg text-slate-400 font-medium group-hover:text-white transition-colors">Photorealistic exteriors and interiors that capture light, texture, and atmosphere.</p>
</div>
</div>

<div className="spotlight-card group relative h-[500px] p-8 md:p-12 flex flex-col justify-between hover:bg-white/[0.02] transition-colors">
<div className="relative z-10">
<i className="w-12 h-12 text-white mb-8 stroke-1" data-lucide="film"></i>
<h3 className="text-4xl font-semibold text-white mb-4 tracking-tight">Cinematic Film</h3>
</div>
<div className="relative z-10">
<p className="text-lg text-slate-400 font-medium group-hover:text-white transition-colors">Motion brings spaces to life. Directing architectural films that control the narrative.</p>
</div>
</div>

<div className="spotlight-card group relative h-[500px] p-8 md:p-12 flex flex-col justify-between hover:bg-white/[0.02] transition-colors">
<div className="relative z-10">
<i className="w-12 h-12 text-white mb-8 stroke-1" data-lucide="glasses"></i>
<h3 className="text-4xl font-semibold text-white mb-4 tracking-tight">Immersive VR</h3>
</div>
<div className="relative z-10">
<p className="text-lg text-slate-400 font-medium group-hover:text-white transition-colors">Allow stakeholders to walk the halls before the foundation is poured.</p>
</div>
</div>
</div>
<div className="w-full border-t border-b border-white/10 grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">

<div className="spotlight-card group relative h-[400px] p-8 md:p-12 flex flex-col justify-between hover:bg-white/[0.02] transition-colors">
<div className="relative z-10">
<h3 className="text-3xl font-semibold text-white mb-2 tracking-tight">Marketing Assets</h3>
</div>
<p className="text-lg text-slate-400 font-medium max-w-md">Brochures, landing pages, and social cuts derived from high-fidelity 3D masters.</p>
</div>

<div className="spotlight-card group relative h-[400px] p-8 md:p-12 flex flex-col justify-between hover:bg-white/[0.02] transition-colors">
<div className="relative z-10">
<h3 className="text-3xl font-semibold text-white mb-2 tracking-tight">Art Direction</h3>
</div>
<p className="text-lg text-slate-400 font-medium max-w-md">Styling that sells the lifestyle, not just the square footage.</p>
</div>
</div>
</section>

<section className="py-32 z-10 relative overflow-hidden" id="work">
<div className="px-4 md:px-12 mb-12 flex items-end justify-between reveal">
<h2 className="text-responsive-h2 font-bold tracking-tighter text-white leading-none">Selected Works</h2>
<div className="hidden md:flex gap-4">
<button className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all"><i className="w-6 h-6" data-lucide="arrow-left"></i></button>
<button className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all"><i className="w-6 h-6" data-lucide="arrow-right"></i></button>
</div>
</div>

<div className="flex overflow-x-auto gap-6 px-4 md:px-12 pb-12 snap-x snap-mandatory no-scrollbar">

<div className="min-w-[90vw] md:min-w-[60vw] snap-center group relative cursor-pointer reveal">
<div className="relative aspect-[16/9] bg-slate-800 overflow-hidden border border-white/10">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=2700&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-90"></div>
</div>
<div className="absolute bottom-0 left-0 w-full p-6 md:p-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-indigo-300 bg-indigo-500/20 rounded uppercase backdrop-blur-md">Residential</span>
<h3 className="text-4xl md:text-6xl font-bold text-white mb-2 tracking-tighter">Kensington Quarter</h3>
</div>
<div className="md:text-right">
<p className="text-slate-300 text-lg font-medium">Interior styling &amp; 3D Vis</p>
</div>
</div>
</div>

<div className="min-w-[90vw] md:min-w-[60vw] snap-center group relative cursor-pointer reveal delay-100">
<div className="relative aspect-[16/9] bg-slate-800 overflow-hidden border border-white/10">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=2700&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-90"></div>
</div>
<div className="absolute bottom-0 left-0 w-full p-6 md:p-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-indigo-300 bg-indigo-500/20 rounded uppercase backdrop-blur-md">Commercial</span>
<h3 className="text-4xl md:text-6xl font-bold text-white mb-2 tracking-tighter">Apex Towers</h3>
</div>
<div className="md:text-right">
<p className="text-slate-300 text-lg font-medium">Exterior Render &amp; Film</p>
</div>
</div>
</div>
</div>
</section>

<section className="min-h-[80vh] flex flex-col items-center justify-center px-4 relative z-10 border-t border-white/10 bg-slate-950/80 backdrop-blur-sm" id="contact">
<div className="w-full max-w-[1920px] text-center space-y-12 reveal">
<h2 className="text-responsive-h2 font-bold tracking-tighter text-white leading-[0.9]">
                Ready to build <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-white">the future?</span>
</h2>
<p className="text-xl md:text-3xl text-slate-400 font-light max-w-4xl mx-auto">
                Every great project starts with a conversation. Let's discuss how we can bring clarity and confidence to your vision.
            </p>
<div className="pt-12">
<a className="group relative inline-flex items-center gap-4 px-12 py-6 bg-white text-slate-950 text-xl font-bold rounded-full transition-all hover:scale-105 hover:shadow-[0_0_80px_-20px_rgba(255,255,255,0.5)]" href="mailto:hello@springbrid.com">
                    Start a Project
                    <i className="w-6 h-6 transition-transform group-hover:translate-x-2" data-lucide="arrow-right"></i>
</a>
</div>
</div>
<div className="absolute bottom-8 w-full px-12 flex justify-between text-xs text-slate-600 font-bold uppercase tracking-widest">
<span>Springbrid Studios © 2024</span>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Instagram</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
</div>
</div>
</section>


    </>
  );
}
