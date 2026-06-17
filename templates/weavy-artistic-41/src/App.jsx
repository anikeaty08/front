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

        // Register ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);

        // Control The Outcome Animation
        gsap.timeline({
          scrollTrigger: {
            trigger: '.control-section',
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          }
        })
        .from('.ui-mockup', { y: 100, opacity: 0, duration: 1, ease: "power3.out" });

        // App Mode Animations
        gsap.from(".app-card", {
            scrollTrigger: {
                trigger: ".app-cards-container",
                start: "top 75%",
                toggleActions: "play none none reverse"
            },
            scale: 0.8,
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out"
        });

        document.querySelectorAll('.app-card').forEach((card) => {
            gsap.to(card, {
                y: -15,
                duration: 2 + Math.random() * 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: Math.random() * 2
            });
        });

        // WORKFLOW CAROUSEL LOGIC (Custom Drag Momentum)
        const slider = document.querySelector('#workflows-container');
        const track = document.querySelector('#workflows-track');
        let isDown = false;
        let startX;
        let scrollLeft;
        let velX = 0;
        let momentumID;

        // Desktop Events
        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.classList.add('cursor-grabbing');
            slider.classList.remove('cursor-grab');
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
            cancelAnimationFrame(momentumID);
        });

        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.classList.remove('cursor-grabbing');
            slider.classList.add('cursor-grab');
        });

        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.classList.remove('cursor-grabbing');
            slider.classList.add('cursor-grab');
            beginMomentumTracking();
        });

        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 2; // Scroll speed multiplier
            const prevScrollLeft = slider.scrollLeft;
            slider.scrollLeft = scrollLeft - walk;
            velX = slider.scrollLeft - prevScrollLeft;
        });

        // Touch Events
        slider.addEventListener('touchstart', (e) => {
            isDown = true;
            startX = e.touches[0].pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
            cancelAnimationFrame(momentumID);
        });

        slider.addEventListener('touchend', () => {
            isDown = false;
            beginMomentumTracking();
        });

        slider.addEventListener('touchmove', (e) => {
            if(!isDown) return;
            const x = e.touches[0].pageX - slider.offsetLeft;
            const walk = (x - startX) * 2;
            const prevScrollLeft = slider.scrollLeft;
            slider.scrollLeft = scrollLeft - walk;
            velX = slider.scrollLeft - prevScrollLeft;
        });

        function beginMomentumTracking(){
            cancelAnimationFrame(momentumID);
            function momentumLoop(){
                slider.scrollLeft += velX;
                velX *= 0.95; // Friction
                if(Math.abs(velX) > 0.5){
                    momentumID = requestAnimationFrame(momentumLoop);
                }
            }
            momentumLoop();
        }

        // Navigation Buttons
        const prevBtn = document.getElementById('prev-workflow');
        const nextBtn = document.getElementById('next-workflow');

        if(prevBtn && nextBtn) {
            prevBtn.addEventListener('click', () => {
                slider.scrollBy({ left: -500, behavior: 'smooth' });
            });

            nextBtn.addEventListener('click', () => {
                 slider.scrollBy({ left: 500, behavior: 'smooth' });
            });
        }
    
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
      

<div className="bg-black text-white text-xs py-2.5 flex justify-center items-center gap-2 tracking-wide w-full relative z-50">
<div className="flex items-center gap-1.5 opacity-90">
<svg className="w-3 h-3 text-green-400 fill-current" fill="none" viewbox="0 0 24 24">
<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
</svg>
<span className="text-gray-400 mx-1">×</span>
<span className="font-semibold tracking-wider">W</span>
<span className="font-normal text-gray-300 ml-1">Weavy is now a part of Figma</span>
</div>
</div>

<nav className="w-full flex justify-between items-center py-5 px-6 md:px-10 border-b border-gray-200 bg-gray-50/80 backdrop-blur-sm sticky top-0 z-40">
<div className="flex items-center h-10">
<div className="flex flex-col gap-0.5 mr-4">
<div className="flex gap-0.5">
<div className="w-1.5 h-4 bg-black"></div>
<div className="w-1.5 h-4 bg-black"></div>
<div className="w-1.5 h-3 bg-black mt-1"></div>
</div>
</div>
<div className="flex items-center h-full gap-4">
<span className="font-medium text-sm tracking-tight text-gray-800">WEAVY</span>
<div className="w-[1px] h-full bg-gray-300"></div>
<span className="text-xs text-gray-500 leading-tight w-20">ARTISTIC INTELLIGENCE</span>
</div>
</div>
<div className="hidden lg:flex items-center gap-8 text-xs font-medium tracking-wide text-gray-600">
<a className="hover:text-black transition-colors" href="#">COLLECTIVE</a>
<a className="hover:text-black transition-colors" href="#">ENTERPRISE</a>
<a className="hover:text-black transition-colors" href="#">PRICING</a>
<a className="hover:text-black transition-colors" href="#">REQUEST A DEMO</a>
<a className="hover:text-black transition-colors" href="#">SIGN IN</a>
<a className="bg-[#F2FF9F] text-black px-6 py-3 rounded-sm hover:bg-[#e6f585] transition-colors text-sm font-medium tracking-tight" href="#">
                Start Now
            </a>
</div>
<button className="lg:hidden text-gray-800">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</nav>

<main className="relative w-full min-h-screen pt-12 md:pt-24 grid-bg">
<div className="max-w-[1600px] mx-auto px-6 md:px-10 mb-20">
<div className="flex flex-col lg:flex-row items-start">
<h1 className="text-7xl md:text-9xl lg:text-[10rem] font-medium tracking-tighter text-black leading-[0.85] z-10">
                    Weavy
                </h1>
<div className="flex flex-col mt-2 lg:mt-0 lg:-ml-7 z-20">
<h1 className="text-7xl md:text-9xl lg:text-[10rem] font-medium tracking-tighter text-black leading-[0.85]">
                        Artistic
                    </h1>
<h1 className="text-7xl md:text-9xl lg:text-[10rem] font-medium tracking-tighter text-black leading-[0.85]">
                        Intelligence
                    </h1>
<p className="text-lg md:text-xl text-gray-500 max-w-[500px] mt-10 leading-relaxed font-normal">
                        Turn your creative vision into scalable workflows. Access all AI models and professional editing tools in one node based platform.
                    </p>
</div>
</div>
</div>
<div className="relative w-full h-[800px] lg:h-[900px] overflow-hidden mt-10 border-t border-gray-200 bg-gradient-to-b from-gray-50 to-gray-100">
<svg className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible">
<path d="M 280 250 C 350 250, 350 280, 420 300" fill="none" stroke="#d1d5db" strokeWidth="2"></path>
<path d="M 300 750 C 380 750, 380 600, 420 500" fill="none" stroke="#d1d5db" strokeWidth="2"></path>
<path d="M 720 300 C 750 300, 750 300, 780 300" fill="none" stroke="#d1d5db" strokeWidth="2"></path>
<path d="M 1000 300 C 1050 300, 1020 250, 1080 250" fill="none" stroke="#d1d5db" strokeWidth="2"></path>
<path d="M 1000 320 C 1030 320, 1030 400, 1080 500" fill="none" stroke="#d1d5db" strokeWidth="2"></path>
</svg>
<div className="relative w-full max-w-[1600px] mx-auto h-full px-10">
<div className="absolute top-16 left-10 w-48 z-20">
<div className="flex justify-between text-[10px] font-bold tracking-widest text-gray-500 mb-2 uppercase">
<span>3D</span><span>Rodin 2.0</span>
</div>
<div className="bg-gray-200 rounded-2xl p-0 overflow-hidden shadow-sm border border-gray-300/50 relative group">
<div className="absolute top-1/2 -right-1.5 w-3 h-3 bg-white border-2 border-gray-300 rounded-full z-30 translate-x-1/2"></div>
<img alt="3D Model" className="w-full h-40 object-cover opacity-90 mix-blend-multiply filter contrast-125 grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="absolute top-48 left-[22%] w-80 z-20">
<div className="flex justify-between text-[10px] font-bold tracking-widest text-gray-500 mb-2 uppercase"><span>Image</span><span>Stable Diffusion</span></div>
<div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg border border-gray-200 relative group">
<div className="absolute top-16 -left-1.5 w-3 h-3 bg-white border-2 border-gray-300 rounded-full z-30 -translate-x-1/2"></div>
<div className="absolute top-16 -right-1.5 w-3 h-3 bg-white border-2 border-gray-300 rounded-full z-30 translate-x-1/2"></div>
<img alt="Portrait" className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="absolute top-36 right-4 lg:right-10 w-96 z-20">
<div className="flex justify-between items-center text-[10px] font-bold tracking-widest text-gray-500 mb-2 uppercase w-full"><span>Video</span><span>Minimax Video</span></div>
<div className="bg-gray-100 rounded-2xl overflow-hidden shadow-xl border border-gray-200 relative group h-[600px]">
<div className="absolute top-24 -left-1.5 w-3 h-3 bg-white border-2 border-gray-300 rounded-full z-30 -translate-x-1/2"></div>
<div className="absolute top-4 left-4 bg-black/30 backdrop-blur-md text-white text-xs px-2 py-1 rounded-md font-mono z-30">1.00</div>
<img alt="Video Output" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1531123414780-f74242c2b052?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/10">
<div className="bg-white/20 backdrop-blur-lg p-4 rounded-full border border-white/30">
<i className="w-8 h-8 text-white fill-white" data-lucide="play"></i>
</div>
</div>
</div>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-50 via-gray-50/80 to-transparent z-40"></div>
</div>
</main>

<section className="relative w-full h-[300vh] bg-[#050505]" id="models-section">
<div className="sticky top-0 w-full h-screen overflow-hidden flex items-center">
<div className="absolute inset-0 z-0 w-full h-full" id="bg-container">

<div className="bg-slide absolute inset-0 opacity-100 bg-transition"><img className="w-full h-full object-cover opacity-40" src="https://images.unsplash.com/photo-1444464666168-49d633b86797?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/></div>
<div className="bg-slide absolute inset-0 opacity-0 bg-transition"><img className="w-full h-full object-cover opacity-40" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/></div>
<div className="bg-slide absolute inset-0 opacity-0 bg-transition"><img className="w-full h-full object-cover opacity-40" src="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/></div>
<div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/20"></div>
</div>
<div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center h-full">
<div className="lg:col-span-5 flex flex-col justify-center">
<h2 className="text-6xl md:text-7xl lg:text-8xl text-white tracking-tighter leading-[0.95] mb-8 font-medium">
                        Use all AI<br/>
                        models,<br/>
                        together at<br/>
                        last
                    </h2>
<p className="text-sm md:text-base text-gray-300 max-w-md leading-relaxed opacity-90 font-medium">
                        AI models and professional editing tools in one node-based platform. Turn creative vision into scalable workflows without compromising quality.
                    </p>
</div>
<div className="lg:col-span-7 flex flex-col items-start lg:pl-10 h-[70vh] justify-center relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black to-transparent z-20 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none"></div>
<div className="flex flex-col gap-4 w-full will-change-transform transform transition-transform duration-75 ease-linear" id="models-list">
<div className="models_item model-item text-white/30 text-6xl md:text-7xl lg:text-[6rem] leading-tight tracking-tight font-normal select-none"><h3 className="pointer-events-none">GPT img 1</h3></div>
<div className="models_item model-item text-white/30 text-6xl md:text-7xl lg:text-[6rem] leading-tight tracking-tight font-normal select-none"><h3 className="pointer-events-none">Wan</h3></div>
<div className="models_item model-item text-white/30 text-6xl md:text-7xl lg:text-[6rem] leading-tight tracking-tight font-normal select-none"><h3 className="pointer-events-none">SD 3.5</h3></div>
<div className="models_item model-item text-white/30 text-6xl md:text-7xl lg:text-[6rem] leading-tight tracking-tight font-normal select-none"><h3 className="pointer-events-none">Runway Gen-4</h3></div>
<div className="models_item model-item text-white/30 text-6xl md:text-7xl lg:text-[6rem] leading-tight tracking-tight font-normal select-none"><h3 className="pointer-events-none">Flux Pro 1.1 Ultra</h3></div>
</div>
</div>
</div>
</div>
</section>

<section className="control-section relative w-full bg-[#080808] py-32 overflow-hidden border-t border-white/5">
<div className="absolute inset-0 z-0">
<div className="absolute top-[-20%] left-[20%] w-[1000px] h-[1000px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="absolute bottom-[-10%] right-[10%] w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none"></div>
</div>
<div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-10">
<div className="text-center mb-20 md:mb-32">
<h2 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white mb-6 leading-tight">
                    Control the<br/>Outcome
                </h2>
<p className="text-lg text-gray-400 font-normal max-w-2xl mx-auto leading-relaxed">
                    Layers, type, and blends—all the tools to bring your wildest ideas to life. Your creativity, our compositing power.
                </p>
</div>
<div className="relative w-full flex justify-center perspective-[2000px]">
<div className="ui-mockup relative w-full max-w-6xl aspect-[16/10] bg-[#111] rounded-xl border border-white/10 shadow-2xl overflow-hidden z-10 group ring-1 ring-white/5">
<div className="h-10 border-b border-white/5 bg-[#161616] flex items-center px-4 justify-between">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/30"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/30"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/30"></div>
</div>
<div className="text-[10px] text-gray-500 font-mono tracking-widest uppercase">Composite Project 01</div>
</div>
<div className="relative w-full h-full bg-[#0a0a0a] flex">
<div className="flex-1 relative overflow-hidden flex items-center justify-center p-8">
<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<img className="relative z-10 w-3/4 rounded-lg shadow-2xl border border-white/10 opacity-50 grayscale contrast-125" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative w-full bg-[#0a0a0a] py-32 overflow-hidden border-t border-white/5 select-none">
<div className="max-w-[1600px] mx-auto px-6 md:px-10">

<div className="mb-16 relative z-10">
<h2 className="text-6xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white mb-8 leading-[0.9]">
                    Explore Our<br/>Workflows
                </h2>
<p className="text-gray-400 font-medium text-sm md:text-base max-w-xl leading-relaxed">
                    From multi-layer compositing to matte manipulation, Weavy keeps up with your creativity
                    with all the editing tools you recognize and rely on.
                </p>
</div>

<div className="relative w-full cursor-grab active:cursor-grabbing overflow-x-hidden" id="workflows-container">
<div className="flex gap-6 w-max px-1 pb-10" id="workflows-track">

<div className="group relative w-[320px] md:w-[480px] flex-shrink-0 transition-transform duration-300">
<div className="flex justify-between items-end mb-4 px-1">
<h3 className="text-white text-base font-medium tracking-wide">Wan LoRa – Rotate</h3>
</div>
<div className="relative aspect-[16/9] bg-[#111] rounded-lg overflow-hidden border border-white/10 shadow-lg">
<img className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>

<div className="absolute inset-0 flex items-center justify-center opacity-80 pointer-events-none">
<svg className="w-3/4 h-3/4 drop-shadow-lg" fill="none" height="150" viewbox="0 0 300 150" width="300">
<rect fill="rgba(0,0,0,0.5)" height="24" rx="12" stroke="white" strokeWidth="1" width="60" x="20" y="60"></rect>
<text fill="white" fontFamily="sans-serif" fontSize="8" text-anchor="middle" x="50" y="76">PROMPT</text>
<rect fill="rgba(0,0,0,0.5)" height="24" rx="12" stroke="white" strokeWidth="1" width="60" x="220" y="60"></rect>
<text fill="white" fontFamily="sans-serif" fontSize="8" text-anchor="middle" x="250" y="76">WAN 2.1</text>
<path d="M80 72 H220" stroke="white" stroke-dasharray="4 4" strokeWidth="1"></path>
<circle cx="150" cy="72" fill="white" r="4"></circle>
</svg>
</div>

<div className="absolute bottom-4 left-4 bg-[#F2FF9F] text-black text-[10px] font-bold px-3 py-1.5 rounded-[2px] hover:bg-[#e6f585] cursor-pointer transition-colors z-20">
                                Try
                            </div>
</div>
</div>

<div className="group relative w-[320px] md:w-[480px] flex-shrink-0 transition-transform duration-300">
<div className="flex justify-between items-end mb-4 px-1">
<h3 className="text-white text-base font-medium tracking-wide">Multiple Models</h3>
</div>
<div className="relative aspect-[16/9] bg-[#111] rounded-lg overflow-hidden border border-white/10 shadow-lg">
<img className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-90 pointer-events-none">
<svg className="w-3/4 h-3/4 drop-shadow-lg" fill="none" height="150" viewbox="0 0 300 150" width="300">
<rect fill="rgba(0,0,0,0.5)" height="20" rx="10" stroke="white" strokeWidth="1" width="50" x="10" y="65"></rect>
<text fill="white" fontFamily="sans-serif" fontSize="7" text-anchor="middle" x="35" y="78">PROMPT</text>
<rect fill="rgba(0,0,0,0.5)" height="20" rx="10" stroke="white" strokeWidth="1" width="60" x="100" y="20"></rect>
<text fill="white" fontFamily="sans-serif" fontSize="7" text-anchor="middle" x="130" y="33">DALLE 3</text>
<rect fill="rgba(0,0,0,0.5)" height="20" rx="10" stroke="white" strokeWidth="1" width="60" x="100" y="65"></rect>
<text fill="white" fontFamily="sans-serif" fontSize="7" text-anchor="middle" x="130" y="78">FLUX FAST</text>
<rect fill="rgba(0,0,0,0.5)" height="20" rx="10" stroke="white" strokeWidth="1" width="60" x="100" y="110"></rect>
<text fill="white" fontFamily="sans-serif" fontSize="7" text-anchor="middle" x="130" y="123">RECRAFT V3</text>
<path d="M60 75 C 80 75, 80 30, 100 30" stroke="white" strokeWidth="1"></path>
<path d="M60 75 L 100 75" stroke="white" strokeWidth="1"></path>
<path d="M60 75 C 80 75, 80 120, 100 120" stroke="white" strokeWidth="1"></path>
</svg>
</div>
<div className="absolute bottom-4 left-4 bg-[#F2FF9F] text-black text-[10px] font-bold px-3 py-1.5 rounded-[2px] hover:bg-[#e6f585] cursor-pointer transition-colors z-20">
                                Try
                            </div>
</div>
</div>

<div className="group relative w-[320px] md:w-[480px] flex-shrink-0 transition-transform duration-300">
<div className="flex justify-between items-end mb-4 px-1">
<h3 className="text-white text-base font-medium tracking-wide">Wan LoRa Inflate</h3>
</div>
<div className="relative aspect-[16/9] bg-[#111] rounded-lg overflow-hidden border border-white/10 shadow-lg">
<img className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-80 pointer-events-none">
<svg className="w-3/4 h-3/4 drop-shadow-lg" fill="none" height="150" viewbox="0 0 300 150" width="300">
<rect fill="rgba(0,0,0,0.5)" height="20" rx="10" stroke="white" strokeWidth="1" width="60" x="20" y="65"></rect>
<text fill="white" fontFamily="sans-serif" fontSize="7" text-anchor="middle" x="50" y="78">PROMPT</text>
<rect fill="rgba(0,0,0,0.5)" height="20" rx="10" stroke="white" strokeWidth="1" width="70" x="110" y="65"></rect>
<text fill="white" fontFamily="sans-serif" fontSize="7" text-anchor="middle" x="145" y="78">GENERATE</text>
<rect fill="rgba(0,0,0,0.5)" height="20" rx="10" stroke="white" strokeWidth="1" width="70" x="210" y="65"></rect>
<text fill="white" fontFamily="sans-serif" fontSize="7" text-anchor="middle" x="245" y="78">UPSCALE</text>
<path d="M80 75 L110 75 M180 75 L210 75" stroke="white" strokeWidth="1"></path>
</svg>
</div>
<div className="absolute bottom-4 left-4 bg-[#F2FF9F] text-black text-[10px] font-bold px-3 py-1.5 rounded-[2px] hover:bg-[#e6f585] cursor-pointer transition-colors z-20">
                                Try
                            </div>
</div>
</div>

<div className="group relative w-[320px] md:w-[480px] flex-shrink-0 transition-transform duration-300">
<div className="flex justify-between items-end mb-4 px-1">
<h3 className="text-white text-base font-medium tracking-wide">Contrast Control</h3>
</div>
<div className="relative aspect-[16/9] bg-[#111] rounded-lg overflow-hidden border border-white/10 shadow-lg">
<img className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-80 pointer-events-none">
<svg className="w-3/4 h-3/4 drop-shadow-lg" fill="none" height="150" viewbox="0 0 300 150" width="300">
<circle cx="150" cy="75" fill="rgba(0,0,0,0.2)" r="30" stroke="white" strokeWidth="1"></circle>
<path d="M150 45 L150 105 M120 75 L180 75" stroke="white" strokeWidth="0.5"></path>
</svg>
</div>
<div className="absolute bottom-4 left-4 bg-[#F2FF9F] text-black text-[10px] font-bold px-3 py-1.5 rounded-[2px] hover:bg-[#e6f585] cursor-pointer transition-colors z-20">
                                Try
                            </div>
</div>
</div>

<div className="group relative w-[320px] md:w-[480px] flex-shrink-0 transition-transform duration-300">
<div className="flex justify-between items-end mb-4 px-1">
<h3 className="text-white text-base font-medium tracking-wide">Film Grain FX</h3>
</div>
<div className="relative aspect-[16/9] bg-[#111] rounded-lg overflow-hidden border border-white/10 shadow-lg">
<img className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
<div className="absolute bottom-4 left-4 bg-[#F2FF9F] text-black text-[10px] font-bold px-3 py-1.5 rounded-[2px] hover:bg-[#e6f585] cursor-pointer transition-colors z-20">
                                Try
                            </div>
</div>
</div>
</div>
</div>

<div className="flex gap-3 mt-8">
<button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all duration-300 group" id="prev-workflow">
<i className="w-5 h-5 text-gray-400 group-hover:text-black" data-lucide="arrow-left"></i>
</button>
<button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all duration-300 group" id="next-workflow">
<i className="w-5 h-5 text-gray-400 group-hover:text-black" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</section>

<section className="app-section relative w-full bg-white text-black py-32 overflow-hidden grid-bg border-t border-gray-100">
<div className="max-w-[1600px] mx-auto px-6 md:px-10">
<div className="text-center mb-10 relative z-10">
<p className="text-[10px] md:text-xs text-gray-500 font-medium tracking-widest uppercase mb-8 max-w-xs mx-auto leading-relaxed">
                    Maximize your team ability, by automatically generating a simplified UI
                </p>
<div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-5xl md:text-7xl lg:text-8xl tracking-tighter font-medium text-gray-900">
<span className="workflow-text">From Workflow</span>
<div className="app-toggle relative inline-block w-24 h-12 align-middle select-none transition duration-200 ease-in scale-75 md:scale-100 my-4 md:my-0">
<input className="toggle-checkbox absolute block w-10 h-10 rounded-full bg-black border-4 border-black appearance-none cursor-pointer top-1 left-1 z-10 transition-all duration-300" id="toggle" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-12 rounded-full bg-[#e5e5e5] cursor-pointer transition-colors duration-300" htmlFor="toggle"></label>
</div>
<span className="appmode-text text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-200">to App Mode</span>
</div>
</div>
<div className="app-cards-container relative w-full h-[600px] md:h-[800px] max-w-6xl mx-auto mt-10 md:mt-20">
<div className="app-card absolute top-0 left-4 md:left-10 w-64 md:w-80 bg-[#f4f4f5] rounded-xl shadow-xl border border-white/50 overflow-hidden z-10">
<div className="bg-[#F2FF9F] px-4 py-2 text-[10px] font-bold tracking-widest uppercase text-black">Prompt</div>
<div className="p-5">
<p className="text-[11px] md:text-xs leading-relaxed text-gray-600 font-medium">
                            A transparent, green-tinted mechanical weave machine. It has a cylindrical component on the left, which seems to be rotating, producing thin, white strands that flow downwards.
                        </p>
</div>
</div>
<div className="app-card absolute top-10 left-1/2 -translate-x-1/2 w-40 md:w-48 aspect-[3/4] rounded-lg shadow-lg overflow-hidden border border-gray-100 z-0">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="app-card absolute top-32 right-4 md:right-10 w-64 md:w-96 aspect-square bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden z-20">
<div className="bg-[#F2FF9F] px-4 py-2 text-[10px] font-bold tracking-widest uppercase text-black absolute top-0 left-0 z-30">Output</div>
<img className="w-full h-full object-cover transform scale-105 hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1617791160505-6f00504e3519?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>

</div>
</div>
</section>
<footer className="bg-black text-gray-500 py-20 px-10 border-t border-gray-900 relative z-30">
<div className="max-w-[1600px] mx-auto flex justify-between items-center">
<span className="text-xs tracking-widest uppercase">Weavy © 2024</span>
<div className="flex gap-6">
<i className="w-5 h-5 hover:text-white cursor-pointer transition-colors" data-lucide="twitter"></i>
<i className="w-5 h-5 hover:text-white cursor-pointer transition-colors" data-lucide="instagram"></i>
<i className="w-5 h-5 hover:text-white cursor-pointer transition-colors" data-lucide="github"></i>
</div>
</div>
</footer>


    </>
  );
}
