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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Interactive Eye Logic
        document.addEventListener('DOMContentLoaded', () => {
            const irisGroup = document.getElementById('iris-group');
            const eyeContainer = document.getElementById('eye-container');
            
            if(irisGroup && eyeContainer) {
                document.addEventListener('mousemove', (e) => {
                    // Only animate if on home view and container is visible
                    if(document.getElementById('view-home').classList.contains('hidden')) return;

                    const rect = eyeContainer.getBoundingClientRect();
                    const eyeCenterX = rect.left + rect.width / 2;
                    const eyeCenterY = rect.top + rect.height / 2;

                    // Calculate distance from eye center to mouse
                    const deltaX = e.clientX - eyeCenterX;
                    const deltaY = e.clientY - eyeCenterY;

                    // Dampen the movement significantly for a subtle look
                    const moveX = deltaX * 0.05;
                    const moveY = deltaY * 0.05;

                    // Clamp movement to keep iris inside sclera
                    const maxMove = 25;
                    const clampedX = Math.max(-maxMove, Math.min(maxMove, moveX));
                    const clampedY = Math.max(-maxMove, Math.min(maxMove, moveY));

                    irisGroup.style.transform = `translate(${clampedX}px, ${clampedY}px)`;
                });

                // Reset eye position on mouse leave window
                document.addEventListener('mouseleave', () => {
                    irisGroup.style.transform = `translate(0px, 0px)`;
                });
            }
        });

        // Simple Single Page App Routing Simulation
        function switchView(viewId) {
            // Hide all views
            const views = document.querySelectorAll('.page-view');
            views.forEach(view => {
                view.classList.add('hidden');
                view.classList.remove('block');
            });

            // Show target view
            const target = document.getElementById('view-' + viewId);
            if(target) {
                target.classList.remove('hidden');
                target.classList.add('block');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
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
      

<nav className="fixed w-full z-50 top-0 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<button className="flex items-center gap-2 group" onclick="switchView('home')">
<div className="text-2xl font-semibold tracking-tighter text-slate-900 group-hover:text-cyan-700 transition-colors">
                    ACM
                </div>
</button>
<div className="hidden md:flex gap-8 items-center">
<button className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" onclick="switchView('service')">Treatments</button>
<button className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" onclick="switchView('doctor')">Our Doctors</button>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#locations">Locations</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#contact">Contact</a>
</div>
<div className="flex items-center gap-4">
<button className="text-sm font-medium text-slate-900 hidden lg:block">DE | EN</button>
<button className="btn-eye btn-eye-primary px-6 py-2.5 text-sm font-medium flex items-center gap-2">
<iconify-icon icon="solar:calendar-linear" strokeWidth="1.5"></iconify-icon>
                    Book Now
                </button>
</div>
</div>
</nav>

<main className="pt-20" id="app-content">

<div className="page-view block" id="view-home">

<section className="relative overflow-hidden bg-white pt-16 pb-32 md:pt-24 md:pb-48">

<div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 opacity-30 pointer-events-none">
<svg fill="none" height="800" viewbox="0 0 800 800" width="800" xmlns="http://www.w3.org/2000/svg">
<circle cx="400" cy="400" fill="url(#paint0_radial)" r="400"></circle>
<defs>
<radialgradient cx="0" cy="0" gradienttransform="translate(400 400) rotate(90) scale(400)" gradientunits="userSpaceOnUse" id="paint0_radial" r="1">
<stop stop-color="#0891b2" stop-opacity="0.15"></stop>
<stop offset="1" stop-color="#ffffff" stop-opacity="0"></stop>
</radialgradient>
</defs>
</svg>
</div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 text-cyan-700 text-xs font-medium mb-6 border border-cyan-100">
<span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse"></span>
                            Premium Ophthalmology Center
                        </div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-slate-900 leading-[1.1] mb-6">
                            Your Vision in <br/>
<span className="text-cyan-700">Expert Hands</span>
</h1>
<p className="text-lg text-slate-500 mb-10 leading-relaxed max-w-xl">
                            Augencentrum Mülheim provides state-of-the-art diagnostics, advanced laser eye surgery, and comprehensive eye care in a serene, professional environment.
                        </p>
<div className="flex flex-wrap items-center gap-4">
<button className="btn-eye btn-eye-primary px-8 py-3.5 text-base font-medium flex items-center gap-2">
                                Book Appointment
                                <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="btn-eye btn-eye-secondary px-8 py-3.5 text-base font-medium flex items-center gap-2" onclick="switchView('service')">
                                Our Treatments
                            </button>
<button className="px-6 py-3.5 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors flex items-center gap-2" onclick="switchView('doctor')">
                                Meet Our Doctors
                            </button>
</div>
</div>

<div className="relative w-full aspect-square max-w-lg mx-auto lg:ml-auto perspective-1000" id="eye-container">
<svg className="w-full h-full drop-shadow-2xl overflow-visible" viewbox="0 0 400 400">

<ellipse cx="200" cy="200" fill="rgba(8, 145, 178, 0.05)" filter="blur(20px)" rx="170" ry="100"></ellipse>

<path d="M 20 200 Q 200 70 380 200 Q 200 330 20 200 Z" fill="#ffffff" stroke="#f1f5f9" strokeWidth="4"></path>

<path d="M 20 200 Q 50 180 60 200 Q 50 220 20 200 Z" fill="#f8fafc"></path>
<path d="M 380 200 Q 350 180 340 200 Q 350 220 380 200 Z" fill="#f8fafc"></path>

<g id="iris-group">

<circle cx="200" cy="200" fill="#0891b2" r="75"></circle>

<circle cx="200" cy="200" fill="#0e7490" r="65"></circle>
<circle cx="200" cy="200" fill="#164e63" r="45"></circle>

<circle cx="200" cy="200" fill="#020617" r="28"></circle>

<circle cx="185" cy="175" fill="#ffffff" opacity="0.9" r="10"></circle>
<circle cx="215" cy="210" fill="#ffffff" opacity="0.6" r="4"></circle>
</g>

<path d="M 20 200 Q 200 70 380 200 Q 200 150 20 200 Z" fill="rgba(0,0,0,0.03)" pointer-events="none"></path>
</svg>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 relative z-20 -mt-24 mb-32">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="glass-card rounded-2xl p-6 flex flex-col items-start gap-4">
<div className="w-12 h-12 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-700">
<iconify-icon className="text-2xl" icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-base font-semibold tracking-tight text-slate-900">Opening Hours</h3>
<p className="text-sm text-slate-500 mt-1">Mon - Fri: 08:00 - 18:00<br/>Sat: By appointment</p>
</div>
</div>
<div className="glass-card rounded-2xl p-6 flex flex-col items-start gap-4">
<div className="w-12 h-12 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-700">
<iconify-icon className="text-2xl" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-base font-semibold tracking-tight text-slate-900">Main Location</h3>
<p className="text-sm text-slate-500 mt-1">Schloßstraße 22<br/>45468 Mülheim</p>
</div>
</div>
<div className="glass-card rounded-2xl p-6 flex flex-col items-start gap-4">
<div className="w-12 h-12 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-700">
<iconify-icon className="text-2xl" icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-base font-semibold tracking-tight text-slate-900">Contact Us</h3>
<p className="text-sm text-slate-500 mt-1">+49 208 123 456<br/>info@augencentrum.de</p>
</div>
</div>
<div className="glass-card rounded-2xl p-6 flex flex-col items-start gap-4 border-cyan-100 bg-white/90">
<div className="w-12 h-12 rounded-full bg-cyan-600 flex items-center justify-center text-white shadow-lg shadow-cyan-600/30">
<iconify-icon className="text-2xl" icon="solar:calendar-add-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-base font-semibold tracking-tight text-slate-900">Quick Appointment</h3>
<p className="text-sm text-slate-500 mt-1 mb-3">Book your consultation online.</p>
<a className="text-sm font-medium text-cyan-700 hover:text-cyan-800 flex items-center gap-1" href="#">
                                Book online <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Advanced Vision Treatments</h2>
<p className="text-base text-slate-500">Comprehensive ophthalmology services utilizing the latest technology for precise diagnostics and minimally invasive procedures.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group cursor-pointer p-8 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-cyan-100 hover:shadow-2xl hover:shadow-cyan-900/5 transition-all duration-300" onclick="switchView('service')">
<div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 mb-6 group-hover:bg-cyan-600 group-hover:text-white group-hover:border-cyan-600 transition-colors">
<iconify-icon className="text-2xl" icon="solar:eye-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Laser Eye Surgery</h3>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">Freedom from glasses and contact lenses with state-of-the-art LASIK and PRK treatments.</p>
<div className="text-sm font-medium text-cyan-700 flex items-center gap-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                                Explore treatment <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>

<div className="group cursor-pointer p-8 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-cyan-100 hover:shadow-2xl hover:shadow-cyan-900/5 transition-all duration-300" onclick="switchView('service')">
<div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 mb-6 group-hover:bg-cyan-600 group-hover:text-white group-hover:border-cyan-600 transition-colors">
<iconify-icon className="text-2xl" icon="solar:dropper-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Cataract Surgery</h3>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">Premium lens implants restoring clear vision through safe, routine microsurgery.</p>
<div className="text-sm font-medium text-cyan-700 flex items-center gap-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                                Explore treatment <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>

<div className="group cursor-pointer p-8 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-cyan-100 hover:shadow-2xl hover:shadow-cyan-900/5 transition-all duration-300" onclick="switchView('service')">
<div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 mb-6 group-hover:bg-cyan-600 group-hover:text-white group-hover:border-cyan-600 transition-colors">
<iconify-icon className="text-2xl" icon="solar:test-tube-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Macular Degeneration</h3>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">Early detection and modern therapies to preserve central vision in age-related conditions.</p>
<div className="text-sm font-medium text-cyan-700 flex items-center gap-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                                Explore treatment <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>

<div className="group cursor-pointer p-8 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-cyan-100 hover:shadow-2xl hover:shadow-cyan-900/5 transition-all duration-300" onclick="switchView('service')">
<div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 mb-6 group-hover:bg-cyan-600 group-hover:text-white group-hover:border-cyan-600 transition-colors">
<iconify-icon className="text-2xl" icon="solar:pulse-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Glaucoma Diagnostics</h3>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">Comprehensive pressure monitoring and nerve analysis to prevent vision loss.</p>
<div className="text-sm font-medium text-cyan-700 flex items-center gap-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                                Explore treatment <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>

<div className="group cursor-pointer p-8 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-cyan-100 hover:shadow-2xl hover:shadow-cyan-900/5 transition-all duration-300" onclick="switchView('service')">
<div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 mb-6 group-hover:bg-cyan-600 group-hover:text-white group-hover:border-cyan-600 transition-colors">
<iconify-icon className="text-2xl" icon="solar:kid-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Pediatric Eye Care</h3>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">Specialized orthoptic departments ensuring healthy visual development in children.</p>
<div className="text-sm font-medium text-cyan-700 flex items-center gap-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                                Explore treatment <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>

<div className="group cursor-pointer p-8 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-cyan-100 hover:shadow-2xl hover:shadow-cyan-900/5 transition-all duration-300" onclick="switchView('service')">
<div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 mb-6 group-hover:bg-cyan-600 group-hover:text-white group-hover:border-cyan-600 transition-colors">
<iconify-icon className="text-2xl" icon="solar:document-medicine-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Vision Testing</h3>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">Routine check-ups, driver's license certifications, and occupational vision screenings.</p>
<div className="text-sm font-medium text-cyan-700 flex items-center gap-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                                Explore treatment <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
<div className="max-w-xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Meet Our Experts</h2>
<p className="text-base text-slate-500">A dedicated team of specialized ophthalmologists committed to providing the highest standard of medical care.</p>
</div>
<button className="text-sm font-medium text-cyan-700 hover:text-cyan-800 flex items-center gap-1 shrink-0">
                            View all doctors <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white rounded-[2rem] p-6 border border-slate-100 shadow-sm relative group">
<div className="absolute top-8 right-8 text-slate-300 font-semibold tracking-tighter text-sm z-10">ACM</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-1">Dr. med. Julia Schmidt</h3>
<p className="text-sm text-slate-400 mb-4">Refractive Surgery &amp; Cornea</p>
<div className="aspect-[4/5] w-full rounded-2xl overflow-hidden mb-6 bg-slate-100">
<img alt="Dr. Julia Schmidt" className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex gap-3">
<button className="flex-1 bg-slate-900 text-white text-sm font-medium py-3 rounded-xl hover:bg-cyan-700 transition-colors">Book</button>
<button className="flex-1 bg-slate-50 text-slate-700 border border-slate-200 text-sm font-medium py-3 rounded-xl hover:bg-slate-100 transition-colors" onclick="switchView('doctor')">Profile</button>
</div>
</div>

<div className="bg-white rounded-[2rem] p-6 border border-slate-100 shadow-sm relative group">
<div className="absolute top-8 right-8 text-slate-300 font-semibold tracking-tighter text-sm z-10">ACM</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-1">Dr. med. Thomas Weber</h3>
<p className="text-sm text-slate-400 mb-4">Cataract &amp; Glaucoma Specialist</p>
<div className="aspect-[4/5] w-full rounded-2xl overflow-hidden mb-6 bg-slate-100">
<img alt="Dr. Thomas Weber" className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex gap-3">
<button className="flex-1 bg-slate-900 text-white text-sm font-medium py-3 rounded-xl hover:bg-cyan-700 transition-colors">Book</button>
<button className="flex-1 bg-slate-50 text-slate-700 border border-slate-200 text-sm font-medium py-3 rounded-xl hover:bg-slate-100 transition-colors" onclick="switchView('doctor')">Profile</button>
</div>
</div>

<div className="bg-white rounded-[2rem] p-6 border border-slate-100 shadow-sm relative group">
<div className="absolute top-8 right-8 text-slate-300 font-semibold tracking-tighter text-sm z-10">ACM</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-1">Dr. med. Sarah Meyer</h3>
<p className="text-sm text-slate-400 mb-4">Medical Retina &amp; Pediatric</p>
<div className="aspect-[4/5] w-full rounded-2xl overflow-hidden mb-6 bg-slate-100">
<img alt="Dr. Sarah Meyer" className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="flex gap-3">
<button className="flex-1 bg-slate-900 text-white text-sm font-medium py-3 rounded-xl hover:bg-cyan-700 transition-colors">Book</button>
<button className="flex-1 bg-slate-50 text-slate-700 border border-slate-200 text-sm font-medium py-3 rounded-xl hover:bg-slate-100 transition-colors" onclick="switchView('doctor')">Profile</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div>
<div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-900 mb-6">
<iconify-icon className="text-2xl" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6">Excellence in Technology and Care</h2>
<p className="text-base text-slate-500 mb-6 leading-relaxed">
                            For over two decades, Augencentrum Mülheim has been at the forefront of ophthalmological care in the Ruhr region. We combine the compassion of a traditional private practice with the technological capabilities of a modern surgical center.
                        </p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-xl text-cyan-600 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Certified quality management systems</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-xl text-cyan-600 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Class-leading Zeiss and Alcon surgical equipment</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-xl text-cyan-600 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Continuous medical education for all staff</span>
</li>
</ul>
</div>
<div className="bg-slate-900 rounded-[2.5rem] p-10 md:p-14 relative overflow-hidden text-white">

<div className="absolute -right-20 -top-20 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none"></div>
<div className="relative z-10">
<h3 className="text-2xl font-semibold tracking-tight mb-4">Join Our Team</h3>
<p className="text-sm text-slate-400 mb-8 leading-relaxed max-w-sm">
                                We are always looking for passionate medical assistants, nurses, and doctors to join our growing clinic family. Experience a modern workplace with excellent benefits.
                            </p>
<button className="bg-white text-slate-900 px-6 py-3 rounded-full text-sm font-medium hover:bg-cyan-50 transition-colors flex items-center gap-2 w-max">
                                View Open Positions <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Patient Experiences</h2>
</div>
<div className="flex gap-6 overflow-x-auto no-scrollbar px-6 md:px-12 snap-x pb-8">

<div className="shrink-0 w-4 lg:w-[calc((100vw-80rem)/2)]"></div>
<div className="w-[300px] md:w-[400px] shrink-0 bg-white p-8 rounded-3xl border border-slate-100 snap-center shadow-sm">
<div className="flex gap-1 text-cyan-500 mb-6">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-base text-slate-700 mb-8 leading-relaxed">"Incredibly professional clinic. The LASIK consultation was thorough, and the procedure itself was quick and painless. I have 20/20 vision now. Highly recommended!"</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-sm font-medium text-slate-600">MK</div>
<div>
<div className="text-sm font-semibold text-slate-900">Michael K.</div>
<div className="text-xs text-slate-500">Laser Eye Patient</div>
</div>
</div>
</div>
<div className="w-[300px] md:w-[400px] shrink-0 bg-white p-8 rounded-3xl border border-slate-100 snap-center shadow-sm">
<div className="flex gap-1 text-cyan-500 mb-6">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-base text-slate-700 mb-8 leading-relaxed">"The doctors took great care of my mother during her cataract surgery. The entire staff is empathetic and the facility feels like a premium hotel, not a hospital."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-sm font-medium text-slate-600">SH</div>
<div>
<div className="text-sm font-semibold text-slate-900">Sarah H.</div>
<div className="text-xs text-slate-500">Relative of Patient</div>
</div>
</div>
</div>
<div className="w-[300px] md:w-[400px] shrink-0 bg-white p-8 rounded-3xl border border-slate-100 snap-center shadow-sm">
<div className="flex gap-1 text-cyan-500 mb-6">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-base text-slate-700 mb-8 leading-relaxed">"Very short waiting times and state-of-the-art equipment. I go here for my annual glaucoma checkups and feel I am in the absolute best hands."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-sm font-medium text-slate-600">TR</div>
<div>
<div className="text-sm font-semibold text-slate-900">Thomas R.</div>
<div className="text-xs text-slate-500">Regular Patient</div>
</div>
</div>
</div>

<div className="shrink-0 w-4 lg:w-[calc((100vw-80rem)/2)]"></div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100" id="locations">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-12 text-center">Our Locations</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="p-6 rounded-2xl border border-slate-100 hover:border-cyan-200 hover:bg-slate-50 transition-colors group">
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Mülheim Zentrum</h3>
<p className="text-sm text-slate-500 mb-6 h-10">Schloßstraße 22<br/>45468 Mülheim an der Ruhr</p>
<button className="w-full py-2.5 rounded-lg border border-slate-200 text-sm font-medium text-slate-700 group-hover:bg-white transition-colors flex justify-center items-center gap-2">
<iconify-icon icon="solar:routing-2-linear"></iconify-icon> Directions
                            </button>
</div>
<div className="p-6 rounded-2xl border border-slate-100 hover:border-cyan-200 hover:bg-slate-50 transition-colors group">
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Mülheim Saarn</h3>
<p className="text-sm text-slate-500 mb-6 h-10">Düsseldorfer Str. 75<br/>45481 Mülheim an der Ruhr</p>
<button className="w-full py-2.5 rounded-lg border border-slate-200 text-sm font-medium text-slate-700 group-hover:bg-white transition-colors flex justify-center items-center gap-2">
<iconify-icon icon="solar:routing-2-linear"></iconify-icon> Directions
                            </button>
</div>
<div className="p-6 rounded-2xl border border-slate-100 hover:border-cyan-200 hover:bg-slate-50 transition-colors group">
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">OP-Zentrum</h3>
<p className="text-sm text-slate-500 mb-6 h-10">Wertgasse 30<br/>45468 Mülheim an der Ruhr</p>
<button className="w-full py-2.5 rounded-lg border border-slate-200 text-sm font-medium text-slate-700 group-hover:bg-white transition-colors flex justify-center items-center gap-2">
<iconify-icon icon="solar:routing-2-linear"></iconify-icon> Directions
                            </button>
</div>
<div className="p-6 rounded-2xl border border-slate-100 hover:border-cyan-200 hover:bg-slate-50 transition-colors group">
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Laserzentrum</h3>
<p className="text-sm text-slate-500 mb-6 h-10">Schloßstraße 24<br/>45468 Mülheim an der Ruhr</p>
<button className="w-full py-2.5 rounded-lg border border-slate-200 text-sm font-medium text-slate-700 group-hover:bg-white transition-colors flex justify-center items-center gap-2">
<iconify-icon icon="solar:routing-2-linear"></iconify-icon> Directions
                            </button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="contact">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

<div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-8">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group bg-white rounded-2xl border border-slate-100 overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between gap-4 p-6 cursor-pointer font-medium text-slate-900">
<span>Do I need a referral from my general practitioner?</span>
<span className="transition group-open:rotate-180">
<iconify-icon className="text-xl text-slate-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-slate-500 leading-relaxed">
                                    No, a referral is not strictly necessary for most appointments. However, bringing previous medical records can be helpful for our doctors.
                                </div>
</details>
<details className="group bg-white rounded-2xl border border-slate-100 overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between gap-4 p-6 cursor-pointer font-medium text-slate-900">
<span>Does health insurance cover laser eye surgery?</span>
<span className="transition group-open:rotate-180">
<iconify-icon className="text-xl text-slate-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-slate-500 leading-relaxed">
                                    Laser eye surgery for purely refractive reasons (to avoid glasses) is usually considered a private elective procedure. However, private health insurances may cover parts of it. We offer financing options.
                                </div>
</details>
<details className="group bg-white rounded-2xl border border-slate-100 overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between gap-4 p-6 cursor-pointer font-medium text-slate-900">
<span>How long does a routine eye check take?</span>
<span className="transition group-open:rotate-180">
<iconify-icon className="text-xl text-slate-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-slate-500 leading-relaxed">
                                    A standard examination usually takes about 30 to 45 minutes. If drops are needed to dilate your pupils, please expect to stay up to 90 minutes.
                                </div>
</details>
</div>
</div>

<div className="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/20">
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-6">Send a Message</h3>
<form className="space-y-6">
<div className="grid grid-cols-2 gap-6">
<div>
<label className="block text-xs font-medium text-slate-500 mb-2">First Name</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-600/20 focus:border-cyan-600 transition-all" placeholder="John" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-500 mb-2">Last Name</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-600/20 focus:border-cyan-600 transition-all" placeholder="Doe" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-500 mb-2">Email Address</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-600/20 focus:border-cyan-600 transition-all" placeholder="john@example.com" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-500 mb-2">Message</label>
<textarea className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-600/20 focus:border-cyan-600 transition-all resize-none" placeholder="How can we help you?" rows="4"></textarea>
</div>
<button className="w-full btn-eye btn-eye-primary py-3.5 text-sm font-medium" type="button">
                                Send Message
                            </button>
</form>
</div>
</div>
</section>
</div>

<div className="page-view hidden" id="view-doctor">
<section className="py-24 bg-white min-h-screen">
<div className="max-w-5xl mx-auto px-6">
<button className="text-sm font-medium text-slate-500 hover:text-slate-900 mb-12 flex items-center gap-2" onclick="switchView('home')">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon> Back to Home
                    </button>
<div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
<div className="sticky top-32">
<div className="aspect-[4/5] w-full rounded-[2rem] overflow-hidden mb-6 bg-slate-100">
<img alt="Dr. Julia Schmidt" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<button className="w-full btn-eye btn-eye-primary py-3.5 text-sm font-medium flex justify-center items-center gap-2">
<iconify-icon icon="solar:calendar-linear" strokeWidth="1.5"></iconify-icon>
                                Book Appointment
                            </button>
</div>
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 text-cyan-700 text-xs font-medium mb-4">
                                Lead Surgeon
                            </div>
<h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-2">Dr. med. Julia Schmidt</h1>
<p className="text-lg text-slate-500 mb-8">Specialist in Refractive Surgery &amp; Cornea</p>
<div className="prose prose-slate prose-sm max-w-none mb-12 text-slate-600 leading-relaxed">
<p>Dr. Schmidt is a leading expert in the field of refractive and corneal surgery with over 15 years of clinical experience. She completed her residency at the University Eye Hospital and has since performed thousands of successful LASIK and PRK procedures.</p>
<p>Her patient-centric approach ensures that every treatment plan is tailored to the individual's specific visual needs and lifestyle. She is an active member of the German Ophthalmological Society (DOG).</p>
</div>
<div className="grid sm:grid-cols-2 gap-8">
<div>
<h3 className="text-sm font-semibold text-slate-900 mb-4 uppercase tracking-wider">Specialties</h3>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-slate-600">
<div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div> LASIK &amp; PRK
                                        </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div> Corneal Transplants
                                        </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div> Dry Eye Diagnostics
                                        </li>
</ul>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900 mb-4 uppercase tracking-wider">Languages</h3>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-slate-600">
<div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div> German (Native)
                                        </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div> English (Fluent)
                                        </li>
</ul>
</div>
</div>
</div>
</div>
</div>
</section>
</div>

<div className="page-view hidden" id="view-service">
<section className="py-24 bg-slate-50 min-h-screen">
<div className="max-w-4xl mx-auto px-6">
<button className="text-sm font-medium text-slate-500 hover:text-slate-900 mb-12 flex items-center gap-2" onclick="switchView('home')">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon> Back to Home
                    </button>
<div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-cyan-600 mb-8 shadow-sm">
<iconify-icon className="text-3xl" icon="solar:eye-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900 mb-6">Laser Eye Surgery</h1>
<p className="text-xl text-slate-500 mb-12 leading-relaxed">Experience life without the barrier of glasses or contacts. Our advanced laser treatments offer precision, safety, and rapid recovery.</p>
<div className="aspect-video w-full rounded-[2rem] bg-slate-200 mb-16 overflow-hidden relative flex items-center justify-center group cursor-pointer border border-slate-100 shadow-xl shadow-slate-200/50">
<img alt="Laser facility" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute w-20 h-20 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-cyan-700 shadow-lg group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl ml-1" icon="solar:play-bold"></iconify-icon>
</div>
</div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-8">The Procedure Process</h2>
<div className="space-y-6 mb-16">
<div className="flex gap-6 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
<div className="w-10 h-10 shrink-0 rounded-full bg-cyan-50 text-cyan-700 flex items-center justify-center font-semibold text-sm">1</div>
<div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Initial Consultation</h3>
<p className="text-sm text-slate-500 leading-relaxed">Comprehensive measurement of your eyes using 3D mapping to determine if you are a suitable candidate.</p>
</div>
</div>
<div className="flex gap-6 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
<div className="w-10 h-10 shrink-0 rounded-full bg-cyan-50 text-cyan-700 flex items-center justify-center font-semibold text-sm">2</div>
<div>
<h3 className="text-base font-semibold text-slate-900 mb-2">The Treatment</h3>
<p className="text-sm text-slate-500 leading-relaxed">A painless procedure taking less than 15 minutes for both eyes, using anesthetic eye drops.</p>
</div>
</div>
<div className="flex gap-6 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
<div className="w-10 h-10 shrink-0 rounded-full bg-cyan-50 text-cyan-700 flex items-center justify-center font-semibold text-sm">3</div>
<div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Recovery</h3>
<p className="text-sm text-slate-500 leading-relaxed">Most patients experience improved vision within 24 hours and can return to normal activities shortly after.</p>
</div>
</div>
</div>
<div className="bg-slate-900 rounded-[2rem] p-10 text-center">
<h3 className="text-2xl font-semibold tracking-tight text-white mb-4">Ready for clear vision?</h3>
<p className="text-slate-400 text-sm mb-8">Schedule a non-binding consultation to see if laser surgery is right for you.</p>
<button className="btn-eye bg-white text-slate-900 px-8 py-3.5 text-sm font-medium hover:bg-cyan-50">
                            Book Free Consultation
                        </button>
</div>
</div>
</section>
</div>
</main>

<section className="py-24 bg-white border-t border-slate-100">
<div className="max-w-4xl mx-auto px-6 text-center">
<iconify-icon className="text-4xl text-cyan-100 mb-6" icon="solar:quote-right-bold"></iconify-icon>
<h2 className="text-2xl md:text-4xl font-medium tracking-tight text-slate-900 leading-tight">
                "Your vision deserves the highest level of care."
            </h2>
</div>
</section>

<footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="md:col-span-1">
<div className="text-2xl font-semibold tracking-tighter text-white mb-6">ACM</div>
<p className="text-sm leading-relaxed mb-6">
                    Augencentrum Mülheim.<br/>Premium eye care, diagnostics, and laser treatments.
                </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-slate-800 hover:text-white transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:camera-linear"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-slate-800 hover:text-white transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:play-circle-linear"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-6">Treatments</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-cyan-400 transition-colors" href="#">Laser Eye Surgery</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Cataract Surgery</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Macular Therapy</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Glaucoma Check</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6">Clinic</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-cyan-400 transition-colors" href="#">Our Doctors</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Locations &amp; Directions</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6">Contact</h4>
<ul className="space-y-3 text-sm">
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5 shrink-0" icon="solar:map-point-linear"></iconify-icon>
                        Schloßstraße 22<br/>45468 Mülheim a.d. Ruhr
                    </li>
<li className="flex items-center gap-2">
<iconify-icon className="shrink-0" icon="solar:phone-calling-linear"></iconify-icon>
                        +49 208 123 456
                    </li>
<li className="flex items-center gap-2">
<iconify-icon className="shrink-0" icon="solar:letter-linear"></iconify-icon>
                        info@augencentrum.de
                    </li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
<p>© 2023 Augencentrum Mülheim. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Imprint</a>
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
</div>
</div>
</footer>


    </>
  );
}
