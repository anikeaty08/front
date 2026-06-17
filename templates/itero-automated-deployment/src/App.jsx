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


!function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.36/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();


        // Initialize Lucide Icons
        lucide.createIcons();

        // --- INTERACTIVE DEMO LOGIC ---
        function changeStep(step) {
            // Update Header State
            for(let i=1; i<=3; i++) {
                const btn = document.getElementById(`step-btn-${i}`);
                const content = document.getElementById(`step-content-${i}`);
                
                if (i === step) {
                    btn.classList.remove('text-gray-600');
                    btn.classList.add('text-[#00C4CC]');
                    content.classList.remove('opacity-0', 'pointer-events-none', 'translate-x-10');
                    content.classList.add('opacity-100', 'translate-x-0');
                } else {
                    btn.classList.add('text-gray-600');
                    btn.classList.remove('text-[#00C4CC]');
                    content.classList.add('opacity-0', 'pointer-events-none', 'translate-x-10');
                    content.classList.remove('opacity-100', 'translate-x-0');
                }
            }

            // Step 3 Special Animation (Chart)
            if (step === 3) {
                runChartAnimation();
            }
        }

        // Color Slider Logic (Step 2)
        function updateDemoButton(val) {
            const btn = document.getElementById('demo-btn-preview');
            // Shift hue from teal (approx 180) based on input
            // If val is 0, it's teal. If moved, it changes to contrasting colors (orange/red)
            const hue = 175 + (val * 0.5); // Simple color math for demo
            btn.style.filter = `hue-rotate(${val}deg)`;
        }

        // Chart Animation Logic (Step 3)
        function runChartAnimation() {
            // Reset
            const path = document.getElementById('winner-line');
            const area = document.getElementById('winner-area');
            const tooltip = document.getElementById('chart-tooltip');
            const counter = document.getElementById('lift-counter');

            // Animate Line
            const length = path.getTotalLength();
            path.style.strokeDasharray = length;
            path.style.strokeDashoffset = length;
            
            // GSAP for Line
            gsap.to(path, {
                strokeDashoffset: 0,
                duration: 2,
                ease: "power2.out"
            });

            // GSAP for Area Fade
            gsap.to(area, {
                opacity: 0.5,
                duration: 2,
                delay: 0.5
            });

            // GSAP for Tooltip
            gsap.to(tooltip, {
                opacity: 1,
                y: -10,
                duration: 0.5,
                delay: 1.8
            });

            // Count Up Animation
            let obj = { val: 0 };
            gsap.to(obj, {
                val: 22,
                duration: 2,
                ease: "power1.out",
                onUpdate: function() {
                    counter.innerHTML = "+" + Math.floor(obj.val) + "%";
                }
            });
        }

        // --- PRICING TOGGLE LOGIC ---
        function togglePricing(plan) {
            const pill = document.getElementById('toggle-pill');
            const btnMonthly = document.getElementById('btn-monthly');
            const btnYearly = document.getElementById('btn-yearly');
            const prices = document.querySelectorAll('.price-text');

            if (plan === 'yearly') {
                pill.style.transform = 'translateX(100%)';
                btnMonthly.classList.replace('text-black', 'text-gray-400');
                btnYearly.classList.replace('text-gray-400', 'text-black');
            } else {
                pill.style.transform = 'translateX(0)';
                btnYearly.classList.replace('text-black', 'text-gray-400');
                btnMonthly.classList.replace('text-gray-400', 'text-black');
            }

            // Animate Price Change
            prices.forEach(el => {
                gsap.to(el, {
                    opacity: 0,
                    y: -10,
                    duration: 0.2,
                    onComplete: () => {
                        el.innerHTML = '$' + el.getAttribute(`data-${plan}`);
                        gsap.to(el, {
                            opacity: 1,
                            y: 0,
                            duration: 0.2
                        });
                    }
                });
            });
        }

        // --- MODAL LOGIC ---
        function toggleModal(show) {
            const modal = document.getElementById('demo-modal');
            const content = document.getElementById('modal-content');
            
            if (show) {
                modal.classList.remove('hidden');
                // Small delay to allow display:block to apply before animating opacity
                setTimeout(() => {
                    content.classList.remove('scale-95', 'opacity-0');
                    content.classList.add('scale-100', 'opacity-100');
                }, 10);
            } else {
                content.classList.remove('scale-100', 'opacity-100');
                content.classList.add('scale-95', 'opacity-0');
                setTimeout(() => {
                    modal.classList.add('hidden');
                    // Reset form state on close
                    document.getElementById('modal-form-container').classList.remove('hidden');
                    document.getElementById('modal-success').classList.add('hidden');
                }, 300);
            }
        }

        function handleFormSubmit(e) {
            e.preventDefault();
            const formContainer = document.getElementById('modal-form-container');
            const successContainer = document.getElementById('modal-success');

            // Fade out form
            gsap.to(formContainer, {
                opacity: 0,
                duration: 0.3,
                onComplete: () => {
                    formContainer.classList.add('hidden');
                    successContainer.classList.remove('hidden');
                    
                    // Fade in success
                    gsap.fromTo(successContainer, 
                        { opacity: 0, scale: 0.9 },
                        { opacity: 1, scale: 1, duration: 0.4 }
                    );

                    // Auto close after 2 seconds
                    setTimeout(() => {
                        toggleModal(false);
                    }, 2000);
                }
            });
        }

        // --- GENERAL ANIMATIONS ---
        document.addEventListener("DOMContentLoaded", () => {
            gsap.registerPlugin(ScrollTrigger);

            // Loader Sequence (Original)
            const tl = gsap.timeline();
            tl.to("#progress-bar", { width: "100%", duration: 2.5, ease: "power2.inOut" })
              .to("#loader", { opacity: 0, duration: 0.8, ease: "power2.out", onComplete: () => { document.getElementById("loader").style.display = "none"; } })
              .to(".hero-content", { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out" }, "-=0.4");

            // Scroll Triggers
            gsap.utils.toArray('.reveal-text').forEach(element => {
                gsap.fromTo(element, { opacity: 0, y: 30 }, {
                    scrollTrigger: { trigger: element, start: "top 80%" },
                    opacity: 1, y: 0, duration: 1, ease: "power3.out"
                });
            });

            gsap.fromTo('.reveal-dashboard', { opacity: 0, y: 50, rotationX: 10 }, {
                scrollTrigger: { trigger: '#demo-section', start: "top 75%" },
                opacity: 1, y: 0, rotationX: 0, duration: 1.5, ease: "power3.out"
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
      

<div id="loader" style={{opacity: '0', display: 'none'}}>
<div className="tracking-widest text-2xl font-semibold text-white uppercase" style={{letterSpacing: '0.2em'}}>Itero</div>
<div className="progress-container">
<div className="progress-bar" id="progress-bar" style={{width: '100%'}}></div>
</div>
</div>

<div className="fixed inset-0 z-[100] hidden flex items-center justify-center px-4" id="demo-modal">

<div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onclick="toggleModal(false)"></div>

<div className="relative w-full max-w-md glass-panel rounded-xl p-8 border border-[#00C4CC]/30 shadow-[0_0_50px_rgba(0,196,204,0.15)] transform transition-all duration-300 scale-95 opacity-0" id="modal-content">
<button className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors" onclick="toggleModal(false)">
<svg className="lucide lucide-x w-5 h-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
<div id="modal-form-container">
<h3 className="text-xl font-semibold text-white mb-2">Request Access</h3>
<p className="text-sm text-gray-400 mb-6">Join the high-velocity growth teams using Itero.</p>
<form className="space-y-4" onsubmit="handleFormSubmit(event)">
<div>
<label className="block text-xs font-medium text-gray-400 mb-1">Full Name</label>
<input className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-[#00C4CC] focus:ring-1 focus:ring-[#00C4CC] transition-all" placeholder="Jane Doe" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-400 mb-1">Work Email</label>
<input className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-[#00C4CC] focus:ring-1 focus:ring-[#00C4CC] transition-all" placeholder="jane@company.com" required="" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-400 mb-1">Role</label>
<div className="relative">
<select className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-[#00C4CC] appearance-none cursor-pointer">
<option>Marketing</option>
<option>Product</option>
<option>Engineering</option>
<option>Founder</option>
</select>
<svg className="lucide lucide-chevron-down absolute right-3 top-2.5 w-4 h-4 text-gray-500 pointer-events-none" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
<div>
<label className="block text-xs font-medium text-gray-400 mb-1">Message (Optional)</label>
<textarea className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-[#00C4CC] focus:ring-1 focus:ring-[#00C4CC] transition-all h-20 resize-none"></textarea>
</div>
<button className="w-full py-2.5 bg-[#00C4CC] hover:bg-[#00e0e9] text-black font-semibold text-sm rounded transition-all duration-300 shadow-[0_0_20px_rgba(0,196,204,0.3)] mt-2" type="submit">
                        Get Started
                    </button>
</form>
</div>

<div className="hidden flex flex-col items-center justify-center py-8 text-center" id="modal-success">
<div className="w-12 h-12 rounded-full bg-[#00C4CC]/10 flex items-center justify-center text-[#00C4CC] mb-4">
<svg className="lucide lucide-check w-6 h-6" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<h3 className="text-lg font-semibold text-white">Request Received</h3>
<p className="text-sm text-gray-400 mt-2">We'll be in touch shortly.</p>
</div>
</div>
</div>

<div className="fixed inset-0 z-0 opacity-40 pointer-events-none mix-blend-screen">
<div data-us-project="2OQSrYIf0cItcyUtviyl" style={{width: '100vw', height: '100vh'}}><a href="https://unicorn.studio?utm_source=public-url" style={{position: 'absolute', display: 'flex', bottom: '30px', left: '0px', width: '190px', margin: '0px auto', right: '0rem', padding: '10px', borderRadius: '6px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 9px 0px', zIndex: '99999999', boxSizing: 'border-box'}} target="_blank"><img alt="Made with unicorn.studio" src="https://assets.unicorn.studio/media/made_in_us_small_web.svg" style={{width: '170px', height: 'auto'}}/></a></div>

<div className="absolute inset-0 bg-gradient-to-b from-[#070707] via-transparent to-[#070707]"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#070707]/70 backdrop-blur-md transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-xl font-semibold tracking-tight text-white flex items-center gap-2" href="#">
<div className="w-6 h-6 rounded-full border border-[#00C4CC] flex items-center justify-center shadow-[0_0_10px_rgba(0,196,204,0.4)]">
<div className="w-2 h-2 bg-[#00C4CC] rounded-full"></div>
</div>
                Itero
            </a>
<div className="hidden md:flex items-center gap-8 text-sm text-gray-400 font-medium">
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#demo-section">Demo</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm text-gray-400 hover:text-white hidden sm:block" href="#">Log in</a>
<button className="text-xs font-semibold bg-[#00C4CC] text-black px-4 py-2 rounded shadow-[0_0_15px_rgba(0,196,204,0.4)] hover:shadow-[0_0_25px_rgba(0,196,204,0.6)] transition-all duration-300 transform hover:-translate-y-0.5" onclick="toggleModal(true)">
                    Get Started
                </button>
</div>
</div>
</nav>

<section className="relative z-10 min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20">
<div className="max-w-4xl mx-auto space-y-8 hero-content opacity-0 translate-y-8" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px)', opacity: '1'}}>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#00C4CC]/30 bg-[#00C4CC]/10 text-[#00C4CC] text-xs font-medium tracking-wide">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00C4CC] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#00C4CC]"></span>
</span>
                ITERATION ENGINE V1.0 LIVE
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 pb-2">
                Launch Growth Experiments <br/>
<span className="text-white glow-text">Instantly.</span> No Code Required.
            </h1>
<p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Itero decentralizes A/B testing, empowering marketing and product teams to drive high-frequency growth without developer intervention.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
<button className="w-full sm:w-auto px-8 py-3 bg-[#00C4CC] text-black font-semibold text-sm rounded hover:bg-[#00e0e9] shadow-[0_0_20px_rgba(0,196,204,0.4)] transition-all duration-300" onclick="toggleModal(true)">
                    Request Demo
                </button>

<a className="w-full sm:w-auto px-8 py-3 border border-white/20 text-white font-medium text-sm rounded hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-2 group" href="#demo-section">
<svg className="lucide lucide-play-circle w-4 h-4 group-hover:text-[#00C4CC] transition-colors" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
                    See How It Works
                </a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hero-content opacity-0" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(-50%, 0%) translate(-0.1083px)', opacity: '1'}}>
<span className="text-[10px] tracking-widest uppercase">Scroll to explore</span>
<div className="w-[1px] h-12 bg-gradient-to-b from-[#00C4CC] to-transparent"></div>
</div>
</section>

<section className="relative z-10 py-24 bg-[#050505]" id="demo-section">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 space-y-4 reveal-text" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px)', opacity: '1'}}>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">
                    Built for Speed. <br/>
<span className="text-[#00C4CC] glow-text">Backed by Data.</span>
</h2>
<p className="text-gray-400 text-sm max-w-xl mx-auto">Experience the 3-step workflow that replaces your entire engineering ticket queue.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

<div className="lg:col-span-8 w-full perspective-1000 reveal-dashboard" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px)', opacity: '1'}}>
<div className="relative glass-panel rounded-lg border border-white/10 overflow-hidden shadow-2xl bg-[#090909] min-h-[500px] flex flex-col">

<div className="h-14 border-b border-white/5 flex items-center px-6 gap-6 bg-white/5">
<div className="flex items-center gap-2 text-xs font-medium cursor-pointer transition-colors duration-300 text-[#00C4CC]" id="step-btn-1">
<div className="w-6 h-6 rounded-full border border-current flex items-center justify-center">1</div>
<span>Define</span>
</div>
<div className="w-8 h-[1px] bg-white/10"></div>
<div className="flex items-center gap-2 text-xs font-medium cursor-pointer transition-colors duration-300 text-gray-600" id="step-btn-2">
<div className="w-6 h-6 rounded-full border border-current flex items-center justify-center">2</div>
<span>Variations</span>
</div>
<div className="w-8 h-[1px] bg-white/10"></div>
<div className="flex items-center gap-2 text-xs font-medium cursor-pointer transition-colors duration-300 text-gray-600" id="step-btn-3">
<div className="w-6 h-6 rounded-full border border-current flex items-center justify-center">3</div>
<span>Results</span>
</div>
</div>

<div className="p-8 flex-1 relative overflow-hidden">

<div className="step-content absolute inset-0 p-8 flex flex-col justify-center transition-all duration-500" id="step-content-1">
<h3 className="text-xl text-white font-medium mb-6">Initialize Experiment</h3>
<div className="space-y-6 max-w-md">
<div className="">
<label className="text-xs text-gray-500 uppercase tracking-wide mb-2 block">Experiment Name</label>
<input className="w-full bg-white/5 border border-white/10 rounded p-3 text-white text-sm focus:outline-none focus:border-[#00C4CC] transition-colors" readonly="" type="text" value="Homepage CTA Optimization"/>
</div>
<div className="">
<label className="text-xs text-gray-500 uppercase tracking-wide mb-2 block">Target CSS Selector</label>
<div className="flex gap-2">
<input className="w-full bg-white/5 border border-white/10 rounded p-3 text-[#00C4CC] font-mono text-sm focus:outline-none focus:border-[#00C4CC] transition-colors" readonly="" type="text" value="#main-cta-button"/>
<div className="p-3 rounded bg-white/5 border border-white/10 flex items-center justify-center text-[#00C4CC]">
<svg className="lucide lucide-crosshair w-4 h-4" data-lucide="crosshair" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="22" x2="18" y1="12" y2="12"></line><line x1="6" x2="2" y1="12" y2="12"></line><line x1="12" x2="12" y1="6" y2="2"></line><line x1="12" x2="12" y1="22" y2="18"></line></svg>
</div>
</div>
</div>
<button className="mt-4 px-6 py-2 bg-white text-black text-sm font-semibold rounded hover:bg-gray-200 transition-colors flex items-center gap-2" onclick="changeStep(2)">
                                        Next Step <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>

<div className="step-content absolute inset-0 p-6 flex flex-col md:flex-row gap-8 opacity-0 translate-x-10 pointer-events-none transition-all duration-500" id="step-content-2">

<div className="w-full md:w-1/2 flex flex-col justify-center space-y-6">
<h3 className="text-xl text-white font-medium">Configure Variations</h3>
<div className="p-4 rounded border border-white/10 bg-white/5">
<div className="flex justify-between mb-2">
<span className="text-xs text-gray-400">Control (A)</span>
<span className="text-xs text-[#00C4CC]">Active</span>
</div>
<div className="h-2 w-full bg-[#00C4CC] rounded"></div>
</div>
<div className="p-4 rounded border border-white/10 bg-white/5">
<div className="flex justify-between mb-4">
<span className="text-xs text-gray-400">Variation (B)</span>
<span className="text-xs text-orange-500">Editing</span>
</div>
<label className="text-xs text-gray-500 mb-2 block">Button Hue Shift</label>
<input className="w-full" id="color-slider" max="360" min="0" oninput="updateDemoButton(this.value)" type="range" value="0"/>
</div>
<button className="w-fit px-6 py-2 bg-[#00C4CC] text-black text-sm font-semibold rounded hover:bg-[#00e0e9] transition-colors shadow-[0_0_15px_rgba(0,196,204,0.3)]" onclick="changeStep(3)">
                                        Launch Test
                                    </button>
</div>

<div className="w-full md:w-1/2 bg-black rounded-lg border border-white/10 flex items-center justify-center relative overflow-hidden group">
<div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] animate-[shimmer_3s_infinite]"></div>
<div className="text-center space-y-4 relative z-10 p-4">
<h4 className="text-white text-lg font-semibold">Ready to grow?</h4>
<p className="text-gray-500 text-xs max-w-[200px] mx-auto">This is a live preview of your target element.</p>
<button className="px-6 py-2 bg-[#00C4CC] text-black font-semibold rounded shadow-lg transition-colors duration-200" id="demo-btn-preview">
                                            Sign Up Now
                                        </button>
</div>
</div>
</div>

<div className="step-content absolute inset-0 p-8 flex flex-col opacity-0 translate-x-10 pointer-events-none transition-all duration-500" id="step-content-3">
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="text-xl text-white font-medium">Real-Time Results</h3>
<div className="text-xs text-green-500 flex items-center gap-1 mt-1">
<div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                                            Live Data Stream
                                        </div>
</div>
<div className="text-right">
<div className="text-xs text-gray-500 uppercase tracking-wide">Lift</div>
<div className="text-3xl font-mono text-[#00C4CC] font-semibold tracking-tight" id="lift-counter">+0%</div>
</div>
</div>

<div className="flex-1 relative border-l border-b border-white/10 w-full">
<svg className="absolute inset-0 w-full h-full overflow-visible" preserveaspectratio="none">

<line stroke="rgba(255,255,255,0.05)" x1="0" x2="100%" y1="25%" y2="25%"></line>
<line stroke="rgba(255,255,255,0.05)" x1="0" x2="100%" y1="50%" y2="50%"></line>
<line stroke="rgba(255,255,255,0.05)" x1="0" x2="100%" y1="75%" y2="75%"></line>

<path d="M0,80 Q50,70 100,75 T200,80 T300,85 T400,90 T500,88" fill="none" opacity="0.5" stroke="#f97316" stroke-dasharray="4,4" strokeWidth="2"></path>

<defs>
<lineargradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#00C4CC" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="#00C4CC" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path d="M0,80 Q50,70 100,60 T200,50 T300,30 T400,20 T500,15" fill="none" id="winner-line" stroke="#00C4CC" strokeWidth="3"></path>
<path d="M0,80 Q50,70 100,60 T200,50 T300,30 T400,20 T500,15 L500,100 L0,100 Z" fill="url(#chartGradient)" id="winner-area" opacity="0"></path>
</svg>

<div className="absolute top-[15%] right-[5%] bg-[#00C4CC] text-black text-[10px] font-bold px-2 py-1 rounded shadow-[0_0_10px_#00C4CC] opacity-0" id="chart-tooltip">
                                        Var B: 22.4%
                                    </div>
</div>
<div className="flex justify-between text-[10px] text-gray-500 mt-2 uppercase">
<span>Launch</span>
<span>1h</span>
<span>2h</span>
<span>3h</span>
<span>Now</span>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-4 space-y-6 pt-4">
<div className="p-4 hover:bg-white/5 rounded-lg transition-colors group feature-item cursor-default border border-transparent hover:border-white/5">
<div className="flex items-center gap-3 mb-2">
<div className="p-2 rounded bg-white/5 text-[#00C4CC] group-hover:scale-110 transition-transform">
<svg className="lucide lucide-layout-template w-5 h-5" data-lucide="layout-template" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="18" x="3" y="3"></rect><rect height="7" rx="1" width="9" x="3" y="14"></rect><rect height="7" rx="1" width="5" x="16" y="14"></rect></svg>
</div>
<h3 className="text-white font-medium">No-Code Builder</h3>
</div>
<p className="text-sm text-gray-500 pl-12">Visually define test variations directly on your live site without touching codebase.</p>
</div>
<div className="p-4 hover:bg-white/5 rounded-lg transition-colors group feature-item cursor-default border border-transparent hover:border-white/5">
<div className="flex items-center gap-3 mb-2">
<div className="p-2 rounded bg-white/5 text-[#00C4CC] group-hover:scale-110 transition-transform">
<svg className="lucide lucide-bar-chart-2 w-5 h-5" data-lucide="bar-chart-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6"></path><path d="M12 21V3"></path><path d="M19 21V9"></path></svg>
</div>
<h3 className="text-white font-medium">API-Integrated Analytics</h3>
</div>
<p className="text-sm text-gray-500 pl-12">Syncs results in real-time with Google Analytics, Mixpanel, or custom endpoints.</p>
</div>

<div className="mt-8 p-6 glass-panel rounded-xl border-l-2 border-l-[#00C4CC] feature-item">
<div className="text-3xl font-semibold text-white mb-1">~12h</div>
<div className="text-xs text-gray-400 uppercase tracking-wide">Engineer Time Saved Per Test</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 px-6 border-t border-white/5 bg-[#050505]" id="pricing">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold text-white mb-6">Simple, Transparent Pricing</h2>

<div className="inline-flex items-center p-1 bg-white/5 rounded-full border border-white/10 relative">
<div className="absolute inset-y-1 left-1 w-[calc(50%-4px)] bg-[#00C4CC] rounded-full transition-transform duration-300 shadow-[0_0_15px_rgba(0,196,204,0.3)]" id="toggle-pill"></div>
<button className="relative z-10 px-6 py-2 text-sm font-medium rounded-full transition-colors duration-300 text-black" id="btn-monthly" onclick="togglePricing('monthly')">Monthly</button>
<button className="relative z-10 px-6 py-2 text-sm font-medium rounded-full transition-colors duration-300 text-gray-400" id="btn-yearly" onclick="togglePricing('yearly')">Yearly <span className="text-[10px] opacity-70 ml-1">-20%</span></button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="glass-panel p-8 rounded-2xl border border-white/10 hover:border-[#00C4CC]/30 transition-all">
<h3 className="text-lg font-medium text-white">Starter</h3>
<p className="text-sm text-gray-400 mt-2 h-10">For small teams just getting started with optimization.</p>
<div className="my-6 flex items-baseline gap-1">
<span className="text-4xl font-semibold text-white tracking-tight price-text" data-monthly="49" data-yearly="39">$49</span>
<span className="text-sm text-gray-500">/mo</span>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-gray-300"><svg className="lucide lucide-check w-4 h-4 text-[#00C4CC]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> 10,000 MAU</li>
<li className="flex items-center gap-3 text-sm text-gray-300"><svg className="lucide lucide-check w-4 h-4 text-[#00C4CC]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> 3 Active Experiments</li>
<li className="flex items-center gap-3 text-sm text-gray-300"><svg className="lucide lucide-check w-4 h-4 text-[#00C4CC]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Email Support</li>
</ul>
<button className="w-full py-3 border border-white/20 rounded hover:bg-white/5 text-white text-sm font-medium transition-colors" onclick="toggleModal(true)">Start Free Trial</button>
</div>

<div className="glass-panel p-8 rounded-2xl border border-[#00C4CC]/50 relative overflow-hidden group">
<div className="absolute top-0 right-0 bg-[#00C4CC] text-black text-[10px] font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>
<div className="absolute inset-0 bg-[#00C4CC]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<h3 className="text-lg font-medium text-white relative z-10">Scale</h3>
<p className="text-sm text-gray-400 mt-2 relative z-10 h-10">For growth teams running high-velocity experiments.</p>
<div className="my-6 flex items-baseline gap-1 relative z-10">
<span className="text-4xl font-semibold text-white tracking-tight price-text" data-monthly="199" data-yearly="159">$199</span>
<span className="text-sm text-gray-500">/mo</span>
</div>
<ul className="space-y-3 mb-8 relative z-10">
<li className="flex items-center gap-3 text-sm text-gray-300"><svg className="lucide lucide-check w-4 h-4 text-[#00C4CC]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> 100,000 MAU</li>
<li className="flex items-center gap-3 text-sm text-gray-300"><svg className="lucide lucide-check w-4 h-4 text-[#00C4CC]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Unlimited Experiments</li>
<li className="flex items-center gap-3 text-sm text-gray-300"><svg className="lucide lucide-check w-4 h-4 text-[#00C4CC]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Slack Connect Support</li>
</ul>
<button className="relative z-10 w-full py-3 bg-[#00C4CC] rounded hover:bg-[#00e0e9] text-black text-sm font-semibold transition-colors shadow-[0_0_20px_rgba(0,196,204,0.3)]" onclick="toggleModal(true)">Get Started</button>
</div>
</div>
</div>
</section>

<footer className="relative z-10 pt-20 pb-10 px-6 bg-gradient-to-b from-[#050505] to-black">
<div className="max-w-5xl mx-auto text-center mb-24">
<div className="glass-panel rounded-2xl p-12 md:p-20 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-r from-[#00C4CC]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="absolute -top-24 -left-24 w-48 h-48 bg-[#00C4CC] rounded-full blur-[100px] opacity-20"></div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-8 relative z-10">
                    Accelerate Your Growth Cycle Today.
                </h2>
<button className="hover:bg-[#00e0e9] hover:shadow-[0_0_50px_rgba(0,196,204,0.5)] transition-all duration-300 transform hover:scale-105 font-semibold text-black bg-[#00C4CC] z-10 rounded pt-4 pr-8 pb-4 pl-8 relative shadow-[0_0_30px_rgba(0,196,204,0.3)]" onclick="toggleModal(true)">
                    Get Started Free
                </button>
</div>
</div>
<div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-4 h-4 rounded-full border border-[#00C4CC]/50 bg-[#00C4CC]/20"></div>
<span className="text-sm font-semibold text-white tracking-wide">ITERO</span>
</div>
<div className="flex items-center gap-6">
<a className="text-gray-500 hover:text-[#00C4CC] transition-colors" href="#"><svg className="lucide lucide-github w-5 h-5" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg></a>
<a className="text-gray-500 hover:text-[#00C4CC] transition-colors" href="#"><svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
<a className="text-gray-500 hover:text-[#00C4CC] transition-colors" href="#"><svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
</div>
<p className="text-xs text-gray-600">
                2025 Copyright © Itero - Design &amp; develop by Abdul Rahman | 2025
            </p>
</div>
</footer>



    </>
  );
}
