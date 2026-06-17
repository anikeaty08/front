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



AOS.init({
once: true,
duration: 800,
offset: 50
});



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



        document.addEventListener('DOMContentLoaded', () => {
          const steps = [1, 2, 3];

          const scrollRoot = document.getElementById('how-scroll'); // Right column scroll container

          const setStepActive = (activeStep) => {
            steps.forEach(step => {
              const img = document.getElementById(`img-step-${step}`);
              const ind = document.getElementById(`indicator-step-${step}`);

              if (step === activeStep) {
                img?.classList.remove('opacity-0', 'scale-95', 'z-10');
                img?.classList.add('opacity-100', 'scale-100', 'z-20');

                ind?.classList.remove('bg-white', 'text-neutral-500', 'border-neutral-200', 'scale-100');
                ind?.classList.add('bg-neutral-900', 'text-white', 'border-neutral-900', 'scale-110');
              } else {
                img?.classList.remove('opacity-100', 'scale-100', 'z-20');
                img?.classList.add('opacity-0', 'scale-95', 'z-10');

                ind?.classList.remove('bg-neutral-900', 'text-white', 'border-neutral-900', 'scale-110');
                ind?.classList.add('bg-white', 'text-neutral-500', 'border-neutral-200', 'scale-100');
              }
            });
          };

          // Default active step
          setStepActive(1);

          const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                const stepId = parseInt(entry.target.id.replace('trigger-step-', ''), 10);
                setStepActive(stepId);
              }
            });
          }, {
            // KEY: observe visibility inside the right-side scroll container on desktop
            root: scrollRoot || null,
            threshold: 0.55,
            rootMargin: "-10% 0px -10% 0px"
          });

          steps.forEach(step => {
            const trigger = document.getElementById(`trigger-step-${step}`);
            if (trigger) observer.observe(trigger);
          });
        });
      


      AOS.init({
          once: true,
          duration: 800,
      });
    


      window.addEventListener('load', () => { setTimeout(() => { const bg = document.getElementById('hero-bg'); if(bg) bg.classList.remove('opacity-0', 'blur-2xl', 'scale-105'); }, 100); });
    
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
      
<div className="absolute top-0 w-full h-screen -z-10 bg-cover bg-center transition-all duration-[1500ms] ease-out" data-alpha-mask="80" id="hero-bg" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1499678329028-101435549a4e?w=3840&amp', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>
<div className="fixed inset-0 z-40 pointer-events-none flex justify-center">
<div className="w-full max-w-7xl h-full border-x border-neutral-900/5"></div>
</div>


<header className="fixed w-full z-50 glass">
<nav className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
<div className="text-2xl font-semibold tracking-tighter text-neutral-900">
          NOMADIFY.
        </div>
<div className="hidden md:flex space-x-8 font-medium text-sm text-neutral-600">
<a className="hover:text-neutral-900 transition" href="#">Explore</a>
<a className="hover:text-neutral-900 transition" href="#">App Features</a>
<a className="hover:text-neutral-900 transition" href="#">Community</a>
</div>
<button className="bg-neutral-900 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-neutral-800 transition">
          Get the App
        </button>
</nav>
</header>
<section className="overflow-hidden pt-40 pr-6 pb-20 pl-6 relative">
<div className="grid md:grid-cols-2 max-w-7xl mr-auto ml-auto gap-x-16 gap-y-16 items-center">
<div className="relative z-10">
<div className="flex items-center gap-3 mb-6 aos-init aos-animate" data-aos="fade-down" data-aos-duration="1000">
<span className="w-8 h-[1px] bg-white/40 block"></span>
<span className="text-white/80 font-normal tracking-widest text-xs uppercase block">
              Your Personal Concierge
            </span>
</div>
<h1 className="md:text-8xl leading-[1.05] text-6xl font-medium text-white tracking-tight mt-2 drop-shadow-xl">
<span className="inline-block aos-init aos-animate" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
              Travel smarter,
            </span>
<br/>
<span className="inline-block text-white/40 aos-init aos-animate" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
              not harder.
            </span>
</h1>
<p className="mt-8 text-xl text-neutral-200/90 max-w-md leading-relaxed font-light drop-shadow-md aos-init aos-animate" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1200">
            The only AI-powered travel companion that plans, books, and
            navigates your journey in one seamless interface.
          </p>
<div className="mt-10 flex space-x-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="800" data-aos-duration="1000">
<img alt="App Store" className="h-10 cursor-pointer hover:scale-105 transition-transform duration-300 opacity-90 hover:opacity-100" src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"/>
<img alt="Play Store" className="h-10 cursor-pointer hover:scale-105 transition-transform duration-300 opacity-90 hover:opacity-100" src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"/>
</div>
</div>
</div>
</section>

<section className="border-y aos-init bg-white border-neutral-200 pt-12 pb-12" data-aos="fade-up">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-neutral-400 text-xs font-semibold tracking-widest mb-8 uppercase">
          Trusted by 2M+ travelers from
        </p>
<div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition duration-500">
<iconify-icon height="36" icon="simple-icons:airbnb" width="96"></iconify-icon>
<span className="text-xl font-semibold tracking-tight">Expedia</span>
<iconify-icon height="36" icon="simple-icons:expedia" width="96"></iconify-icon>
<span className="text-xl font-semibold tracking-tight">Booking.com</span>
</div>
</div>
</section>

<section className="py-32 px-6 max-w-7xl mx-auto">
<div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div className="max-w-2xl">
<h2 className="text-5xl md:text-6xl font-semibold tracking-tight text-neutral-900 mb-6 aos-init" data-aos="fade-down">
            Why Nomadify?
          </h2>
<p className="text-xl text-neutral-500 font-light max-w-lg leading-relaxed aos-init" data-aos="fade-up" data-aos-delay="100">
            Experience the next generation of travel tools designed for the
            modern explorer.
          </p>
</div>
<div className="hidden md:block w-full h-[1px] bg-neutral-200 mb-4 flex-grow ml-12 opacity-50"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">

<div className="md:col-span-7 group relative overflow-hidden rounded-[2rem] bg-neutral-900 p-10 md:p-14 text-white transition-all duration-500 hover:shadow-2xl aos-init" data-aos="fade-up" data-aos-delay="200">
<div className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:scale-105 transition-transform duration-700 bg-[url(https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=3840&amp;q=80)]" style={{}}></div>
<div className="bg-center bg-[url(https://images.unsplash.com/photo-1522878129833-838a904a0e9e?w=1600&amp;q=80)] bg-cover absolute top-0 right-0 bottom-0 left-0" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 25%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 25%, transparent)'}}></div>
<div className="relative z-10 flex h-full min-h-[340px] flex-col justify-between">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/10 transition-transform duration-300 group-hover:scale-110">
<iconify-icon className="w-4 h-4" icon="lucide:map"></iconify-icon>
</div>
<div className="">
<h3 className="mb-4 text-3xl font-semibold tracking-tight text-white">
                AI Itinerary
              </h3>
<p className="max-w-md text-neutral-300 leading-relaxed font-light">
                Custom travel plans generated in seconds based on your unique
                personality, interests, and budget constraints.
              </p>
<div className="mt-8 flex items-center gap-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
<span className="text-sm font-medium">Try it now</span>
<iconify-icon className="w-4 h-4" icon="lucide:arrow-right"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="md:col-span-5 group relative overflow-hidden rounded-[2rem] bg-white border border-neutral-100 p-10 md:p-12 transition-all duration-500 hover:border-neutral-200 hover:shadow-xl aos-init" data-aos="fade-up" data-aos-delay="300">
<div className="absolute top-0 right-0 -mr-12 -mt-12 h-40 w-40 rounded-full bg-neutral-50 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
<div className="relative z-10 flex h-full min-h-[340px] flex-col justify-between">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-neutral-50 text-neutral-900 border border-neutral-100 transition-transform duration-300 group-hover:rotate-6">
<iconify-icon className="w-4 h-4" icon="lucide:wallet"></iconify-icon>
</div>
<div className="space-y-6">
<div>
<h3 className="mb-4 text-3xl font-semibold tracking-tight text-neutral-900">
                  Smart Budgeting
                </h3>
<p className="text-neutral-500 leading-relaxed">
                  Real-time expense tracking with automatic currency conversion
                  for over 150 countries.
                </p>
</div>

<div className="flex items-end gap-2 h-16 w-32 pb-1">
<div className="w-1/4 bg-neutral-200 rounded-t-sm h-1/2 group-hover:h-3/4 transition-all duration-500 delay-75"></div>
<div className="w-1/4 bg-neutral-900 rounded-t-sm h-3/4 group-hover:h-full transition-all duration-500 delay-100"></div>
<div className="w-1/4 bg-neutral-300 rounded-t-sm h-1/3 group-hover:h-2/3 transition-all duration-500 delay-150"></div>
<div className="w-1/4 bg-neutral-200 rounded-t-sm h-1/2 group-hover:h-3/5 transition-all duration-500 delay-200"></div>
</div>
</div>
</div>
</div>

<div className="md:col-span-12 group relative overflow-hidden rounded-[2rem] bg-neutral-50 border border-neutral-100 p-10 md:p-14 transition-all duration-500 hover:bg-white hover:border-neutral-200 hover:shadow-xl aos-init" data-aos="fade-up" data-aos-delay="400">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-10">
<div className="max-w-xl relative z-10">
<div className="mb-8 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white border border-neutral-200 text-neutral-900 shadow-sm transition-transform duration-300 group-hover:-translate-y-1">
<iconify-icon className="w-4 h-4" icon="lucide:users"></iconify-icon>
</div>
<h3 className="mb-4 text-3xl font-semibold tracking-tight text-neutral-900">
                Local Community
              </h3>
<p className="text-neutral-500 leading-relaxed text-lg">
                Connect with fellow travelers and verified locals for authentic,
                off-the-beaten-path advice. Discover hidden gems that aren't in
                the guidebooks.
              </p>
</div>

<div className="flex items-center gap-6 relative z-10">
<div className="flex -space-x-5 transition-spacing duration-300 group-hover:-space-x-4">
<div className="h-14 w-14 rounded-full border-4 border-white bg-neutral-300 overflow-hidden shadow-sm">
<img alt="Member" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&amp;q=80"/>
</div>
<div className="h-14 w-14 rounded-full border-4 border-white bg-neutral-400 overflow-hidden shadow-sm">
<img alt="Member" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&amp;q=80"/>
</div>
<div className="h-14 w-14 rounded-full border-4 border-white bg-neutral-500 overflow-hidden shadow-sm">
<img alt="Member" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&amp;q=80" style={{}}/>
</div>
<div className="h-14 w-14 rounded-full border-4 border-white bg-neutral-900 text-white flex items-center justify-center font-semibold text-xs shadow-sm">
                  +2M
                </div>
</div>
<button className="hidden md:flex items-center justify-center w-12 h-12 rounded-full border border-neutral-200 text-neutral-400 hover:text-neutral-900 hover:border-neutral-900 transition-all duration-300">
<iconify-icon className="w-4 h-4" icon="lucide:arrow-up-right"></iconify-icon>
</button>
</div>

<div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100 pointer-events-none"></div>
</div>
</div>
</div>
</section>

<section className="bg-neutral-50 relative py-24 lg:py-0 lg:h-screen lg:overflow-hidden">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>


<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-24">

<div className="lg:w-1/2 lg:sticky lg:top-0 lg:h-screen lg:mb-0 lg:flex lg:items-center w-full h-[500px] mb-12 relative">
<div className="w-full lg:h-[600px] relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-400/20 rounded-full blur-[100px] -z-10"></div>

<div className="relative w-full h-full">

<div className="bg-neutral-200 -z-20 border-neutral-300/50 border rounded-3xl absolute top-0 right-0 bottom-0 left-0 translate-x-3 translate-y-3"></div>
<div className="absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-3xl bg-neutral-100 border border-neutral-200/50 -z-10"></div>

<div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border border-white/50 bg-white transition-all duration-700 ease-out opacity-100 scale-100 z-20" id="img-step-1">
<img alt="Swiss Alps" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1600&amp;q=80"/>
<div className="absolute top-6 right-6 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg border border-white/40 flex items-center gap-2">
<iconify-icon className="block text-neutral-900 w-4 h-4" icon="lucide:sliders"></iconify-icon>
<span className="text-xs font-semibold text-neutral-800">
                      Preferences Set
                    </span>
</div>
<div className="absolute bottom-6 left-6 right-6">
<div className="bg-white/90 backdrop-blur-xl p-4 rounded-2xl shadow-lg border border-neutral-100/50 flex items-center justify-between">
<div>
<p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                          Budget
                        </p>
<p className="text-sm font-bold text-neutral-900">
                          $2,500 - $4,000
                        </p>
</div>
<div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center">
<iconify-icon className="block text-neutral-900 w-5 h-5" icon="lucide:banknote"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border border-white/50 bg-white transition-all duration-700 ease-out opacity-0 scale-95 z-10" id="img-step-2">
<img alt="Tokyo Streets" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1600&amp;q=80"/>
<div className="absolute top-6 right-6 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg border border-white/40 flex items-center gap-2">
<iconify-icon className="block text-amber-500 w-4 h-4" icon="lucide:sparkles"></iconify-icon>
<span className="text-xs font-semibold text-neutral-800">
                      AI Curated
                    </span>
</div>
<div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-lg rounded-2xl p-4 shadow-xl border border-white/60 transform rotate-2">
<div className="flex items-center gap-4">
<div className="h-12 w-12 rounded-xl bg-neutral-200 overflow-hidden">
<img alt="" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1514565131-fce0801e5785?w=200&amp;q=80"/>
</div>
<div>
<p className="text-sm font-bold text-neutral-900">
                          Hidden Izakaya
                        </p>
<p className="text-xs text-neutral-500 font-medium">
                          98% Match for you
                        </p>
</div>
<div className="ml-auto flex gap-2">
<div className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400">
<iconify-icon className="block w-4 h-4" icon="lucide:x"></iconify-icon>
</div>
<div className="w-8 h-8 rounded-full bg-neutral-900 flex items-center justify-center text-white">
<iconify-icon className="block w-4 h-4" icon="lucide:heart"></iconify-icon>
</div>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border border-white/50 bg-white transition-all duration-700 ease-out opacity-0 scale-95 z-10" id="img-step-3">
<img alt="Tropical Beach" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1681459878397-14dc6d270fe4?w=3840&amp;q=80"/>
<div className="absolute top-6 right-6 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg border border-white/40 flex items-center gap-2">
<iconify-icon className="block text-emerald-500 w-4 h-4" icon="lucide:check-circle-2"></iconify-icon>
<span className="text-xs font-semibold text-neutral-800">
                      All Set
                    </span>
</div>
<div className="absolute bottom-6 left-6 right-6">
<div className="bg-white/90 backdrop-blur-xl p-4 rounded-2xl shadow-lg border border-neutral-100/50">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center shadow-md">
<iconify-icon className="block w-5 h-5" icon="lucide:plane"></iconify-icon>
</div>
<div>
<p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                              Upcoming
                            </p>
<p className="text-sm font-bold text-neutral-900">
                              Phuket, Thailand
                            </p>
</div>
</div>
<div className="px-2 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded uppercase tracking-wide">
                          Confirmed
                        </div>
</div>
<div className="w-full bg-neutral-100 h-1.5 rounded-full overflow-hidden">
<div className="bg-neutral-900 h-full w-full rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="w-full lg:w-1/2 lg:h-screen lg:overflow-y-auto lg:pr-4 lg:pt-24 lg:pb-24" id="how-scroll" style={{WebkitOverflowScrolling: 'touch'}}>
<div className="space-y-4 mb-20 lg:mb-32 pt-12 lg:pt-0">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 leading-[1.15] aos-init" data-aos="fade-up">
                Simplify your journey
                <span className="text-neutral-400">in three steps.</span>
</h2>
<p className="text-lg text-neutral-500 font-normal max-w-md leading-relaxed">
                Leave the spreadsheets behind. Our intelligent engine builds
                your perfect itinerary in seconds, not hours.
              </p>
</div>
<div className="relative pl-2 lg:ml-8 border-l border-neutral-200">
<div className="relative pl-12 pb-32 min-h-[50vh] flex flex-col justify-center group" id="trigger-step-1">
<div className="absolute left-[-21px] top-12 md:top-1/2 md:-translate-y-1/2 flex-shrink-0 w-10 h-10 rounded-full border-2 border-neutral-900 bg-neutral-900 text-white flex items-center justify-center text-sm font-semibold shadow-lg ring-4 ring-neutral-50 transition-all duration-500 scale-110 z-10" id="indicator-step-1">
                  1
                </div>
<div className="transition-all duration-300">
<h4 className="text-2xl font-semibold text-neutral-900 tracking-tight">
                    Set your preferences
                  </h4>
<p className="text-neutral-500 mt-4 leading-relaxed max-w-md text-lg">
                    Input your budget, dates, and interests. Whether it's
                    adventure in the mountains or leisure by the beach, we adapt
                    the plan to you.
                  </p>
</div>
</div>
<div className="relative pl-12 pb-32 min-h-[50vh] flex flex-col justify-center group" id="trigger-step-2">
<div className="absolute left-[-21px] top-12 md:top-1/2 md:-translate-y-1/2 flex-shrink-0 w-10 h-10 rounded-full border-2 border-neutral-200 bg-white text-neutral-500 flex items-center justify-center text-sm font-semibold shadow-sm ring-4 ring-neutral-50 transition-all duration-500 z-10 scale-100" id="indicator-step-2">
                  2
                </div>
<div className="transition-all duration-300">
<h4 className="text-2xl font-semibold text-neutral-900 tracking-tight">
                    Curate with swiping
                  </h4>
<p className="text-neutral-500 mt-4 leading-relaxed max-w-md text-lg">
                    Our AI presents curated spots based on your profile. Swipe
                    right to add them to your plan, left to skip. It learns what
                    you like instantly.
                  </p>
</div>
</div>
<div className="relative pl-12 pb-24 min-h-[50vh] flex flex-col justify-center group" id="trigger-step-3">
<div className="absolute left-[-21px] top-12 md:top-1/2 md:-translate-y-1/2 flex-shrink-0 w-10 h-10 rounded-full border-2 border-neutral-200 bg-white text-neutral-500 flex items-center justify-center text-sm font-semibold shadow-sm ring-4 ring-neutral-50 transition-all duration-500 z-10 scale-100" id="indicator-step-3">
                  3
                </div>
<div className="transition-all duration-300">
<h4 className="text-2xl font-semibold text-neutral-900 tracking-tight">
                    Experience effortless
                  </h4>
<p className="text-neutral-500 mt-4 leading-relaxed max-w-md text-lg">
                    We generate a dynamic itinerary with bookings, maps, and
                    tickets all in one place. No more switching between apps.
                  </p>
<div className="mt-8">
<button className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white transition-all duration-300 bg-neutral-900 rounded-full hover:bg-neutral-800 hover:shadow-lg hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900 group">
                      Start Planning Free
                      <iconify-icon className="block w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" icon="lucide:arrow-right"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 max-w-7xl mx-auto">
<div className="flex justify-between items-end mb-16">
<div>
<h2 className="text-4xl font-semibold tracking-tight text-neutral-900 aos-init" data-aos="fade-up">
            Popular Right Now
          </h2>
<p className="text-neutral-500 mt-3">
            Handpicked destinations based on current trends.
          </p>
</div>
<button className="text-neutral-900 font-semibold border-b border-neutral-900 hover:text-neutral-600 hover:border-neutral-600 transition pb-1">
          View All
        </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
<div className="relative overflow-hidden rounded-2xl group h-96 aos-init" data-aos="fade-up" data-aos-delay="100">
<img className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700 grayscale-[30%] group-hover:grayscale-0" src="https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?w=3840&amp;q=80" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
<div className="absolute bottom-8 left-8 text-white">
<p className="text-xs uppercase tracking-widest opacity-90 mb-2">
              Indonesia
            </p>
<h4 className="text-2xl font-semibold tracking-tight">Bali</h4>
</div>
</div>
<div className="relative overflow-hidden rounded-2xl group h-96 aos-init" data-aos="fade-up" data-aos-delay="200">
<img className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700 grayscale-[30%] group-hover:grayscale-0" src="https://images.unsplash.com/photo-1619547582883-a0d38be66a9e?w=3840&amp;q=80" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
<div className="absolute bottom-8 left-8 text-white">
<p className="text-xs uppercase tracking-widest opacity-90 mb-2">
              Italy
            </p>
<h4 className="text-2xl font-semibold tracking-tight">Venice</h4>
</div>
</div>
<div className="relative overflow-hidden rounded-2xl group h-96 md:col-span-2 aos-init" data-aos="fade-up" data-aos-delay="300">
<img className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700 grayscale-[30%] group-hover:grayscale-0" src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=3840&amp;q=80" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
<div className="absolute bottom-8 left-8 text-white">
<p className="text-xs uppercase tracking-widest opacity-90 mb-2">
              France
            </p>
<h4 className="text-2xl font-semibold tracking-tight">Paris</h4>
</div>
</div>
</div>
</section>
<section className="py-32 bg-neutral-900 text-white overflow-hidden relative">
<div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="aos-init" data-aos="fade-right" data-aos-duration="1000">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium tracking-wide mb-6 text-emerald-400">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              NEW FEATURE
            </div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 leading-tight">
              Preview your journey

              <span className="text-neutral-500">before you arrive.</span>
</h2>
<p className="text-neutral-400 text-lg mb-8 leading-relaxed max-w-lg">
              Immerse yourself in 360° destination previews. Scout
              neighborhoods, check hotel views, and find hidden spots with our
              new VR-ready exploration tool.
            </p>
<div className="space-y-4">
<div className="group flex items-center gap-5 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition duration-300 cursor-pointer">
<div className="w-12 h-12 rounded-xl bg-neutral-800 flex items-center justify-center text-white group-hover:scale-110 transition duration-300">
<iconify-icon className="w-4 h-4" icon="lucide:scan-eye"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-lg">Immersive Previews</h4>
<p className="text-sm text-neutral-500">
                    Walk the streets virtually before booking.
                  </p>
</div>
</div>
<div className="group flex items-center gap-5 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition duration-300 cursor-pointer">
<div className="w-12 h-12 rounded-xl bg-neutral-800 flex items-center justify-center text-white group-hover:scale-110 transition duration-300">
<iconify-icon className="w-4 h-4" icon="lucide:globe"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-lg">Live Atmosphere</h4>
<p className="text-sm text-neutral-500">
                    Real-time weather and crowd density data.
                  </p>
</div>
</div>
</div>
</div>
<div className="relative aos-init" data-aos="zoom-in-up" data-aos-duration="1100">
<div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group bg-neutral-800">
<img alt="Interface" className="w-full h-[600px] object-cover opacity-60 group-hover:opacity-40 transition duration-700" src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&amp;q=80" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-neutral-900/20"></div>
<div className="absolute top-8 right-8 bg-neutral-900/80 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-lg transform group-hover:-translate-y-2 transition duration-500 delay-100">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
<iconify-icon className="w-4 h-4" icon="lucide:wifi"></iconify-icon>
</div>
<div className="text-xs">
<p className="text-neutral-400">Connection</p>
<p className="font-semibold text-white">Excellent (5G)</p>
</div>
</div>
</div>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<div className="w-20 h-20 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20 cursor-pointer hover:scale-110 hover:bg-white/20 transition duration-300 group-hover:w-24 group-hover:h-24">
<iconify-icon className="w-4 h-4" icon="lucide:play"></iconify-icon>
</div>
<p className="mt-6 text-sm font-medium tracking-widest uppercase text-white/60">
                  Watch Preview
                </p>
</div>
<div className="absolute bottom-0 left-0 w-full p-8 border-t border-white/5 bg-black/20 backdrop-blur-sm">
<div className="flex justify-between items-end">
<div>
<h3 className="text-2xl font-semibold">Tokyo, Japan</h3>
<p className="text-neutral-400 text-sm mt-1">
                      Live Feed • 14:32 PM
                    </p>
</div>
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full bg-neutral-700 border-2 border-neutral-800"></div>
<div className="w-10 h-10 rounded-full bg-neutral-600 border-2 border-neutral-800"></div>
<div className="w-10 h-10 rounded-full bg-neutral-500 border-2 border-neutral-800 flex items-center justify-center text-xs font-bold">
                      +4k
                    </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white border-t border-neutral-100">
<div className="max-w-4xl mx-auto px-6 text-center aos-init" data-aos="zoom-in">
<div className="flex justify-center mb-10">
<iconify-icon className="w-10 h-10 text-neutral-300" icon="lucide:quote"></iconify-icon>
</div>
<h2 className="text-3xl md:text-4xl font-medium leading-relaxed text-neutral-900 tracking-tight">
          "Nomadify changed how I view travel. No more spreadsheets. I just
          packed my bags and the app took care of the rest."
        </h2>
<div className="mt-10">
<p className="font-semibold text-lg text-neutral-900">Sarah Jenkins</p>
<p className="text-neutral-500 text-sm">Full-time Digital Nomad</p>
</div>
</div>
</section>

<footer className="bg-neutral-950 text-white py-24">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
<div className="aos-init" data-aos="fade-right">
<h2 className="text-5xl font-semibold tracking-tight mb-6">
            Ready for your
            <br/>
            next story?
          </h2>
<p className="text-neutral-400 mb-10 text-lg max-w-md">
            Download Nomadify today and get $50 off your first booking.
          </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="bg-white text-neutral-950 px-8 py-4 rounded-full font-semibold hover:bg-neutral-200 transition">
              App Store
            </button>
<button className="bg-neutral-800 text-white px-8 py-4 rounded-full font-semibold hover:bg-neutral-700 transition">
              Google Play
            </button>
</div>
</div>
<div className="grid grid-cols-2 gap-12 text-sm aos-init" data-aos="fade-left">
<div>
<h4 className="font-semibold mb-6 text-white tracking-widest text-xs uppercase">
              Company
            </h4>
<ul className="space-y-4 text-neutral-400">
<li>
<a className="hover:text-white transition" href="#">About Us</a>
</li>
<li>
<a className="hover:text-white transition" href="#">Careers</a>
</li>
<li><a className="hover:text-white transition" href="#">Press</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold mb-6 text-white tracking-widest text-xs uppercase">
              Support
            </h4>
<ul className="space-y-4 text-neutral-400">
<li>
<a className="hover:text-white transition" href="#">Help Center</a>
</li>
<li>
<a className="hover:text-white transition" href="#">
                  Privacy Policy
                </a>
</li>
<li>
<a className="hover:text-white transition" href="#">
                  Terms of Service
                </a>
</li>
</ul>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-neutral-800 flex justify-between items-center text-neutral-500 text-sm">
<p>© 2024 Nomadify Inc.</p>
<div className="flex space-x-6">
<iconify-icon className="w-5 h-5 cursor-pointer hover:text-white transition" icon="lucide:instagram"></iconify-icon>
<iconify-icon className="w-5 h-5 cursor-pointer hover:text-white transition" icon="lucide:twitter"></iconify-icon>
</div>
</div>
</footer>




    </>
  );
}
