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



/*
Sequence animation on scroll when visible. Requires Animation Keyframe. Usage:
1) Insert this code in the <head> along with the Animation Keyframe code.
2) Add to Tailwind Classes: [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll
*/
(function () {
// Inject CSS for paused/running states
const style = document.createElement("style");
style.textContent = `
/* Default: paused */
.animate-on-scroll { animation-play-state: paused !important; }
/* Activated by JS */
.animate-on-scroll.animate { animation-play-state: running !important; }
`;
document.head.appendChild(style);
const once = true;
if (!window.__inViewIO) {
window.__inViewIO = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
if (once) window.__inViewIO.unobserve(entry.target);
}
});
}, { threshold: 0.2, rootMargin: "0px 0px -10% 0px" });
}
window.initInViewAnimations = function (selector = ".animate-on-scroll") {
document.querySelectorAll(selector).forEach((el) => {
window.__inViewIO.observe(el); // observing twice is a no-op
});
};
document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();


!function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.0/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();


    (function() {
      const el = document.getElementById('metric-counter-aura');
      if (!el) return;
      
      const loop = () => {
        const target = 2.8;
        const duration = 2000;
        const hold = 3000;
        const fadeOut = 500;
        const totalTime = duration + hold + fadeOut;
        let start = null;

        const animate = (timestamp) => {
          if (!start) start = timestamp;
          const elapsed = timestamp - start;
          
          if (elapsed < duration) {
            // Counting phase
            const progress = 1 - Math.pow(1 - elapsed / duration, 4); // easeOutQuart
            const current = (progress * target).toFixed(1);
            el.textContent = '$' + current + 'M';
            el.style.opacity = '1';
          } else if (elapsed < duration + hold) {
            // Hold phase
            el.textContent = '$2.8M';
            el.style.opacity = '1';
          } else if (elapsed < totalTime) {
            // Fade out phase
            el.textContent = '$2.8M';
            const fadeProgress = (elapsed - (duration + hold)) / fadeOut;
            el.style.opacity = Math.max(0, 1 - fadeProgress).toString();
          } else {
            // Reset and restart
            start = null;
            el.textContent = '$0.0M';
            requestAnimationFrame(animate);
            return;
          }
          
          requestAnimationFrame(animate);
        };
        
        requestAnimationFrame(animate);
      };

      // Sync start slightly after bars
      setTimeout(loop, 100);
    })();
  


    (function() {
      const container = document.getElementById('terminal-logs-aura');
      if (!container) return;

      const lines = [
        { text: "> initializing_ledger_api...", class: "text-slate-500" },
        { text: "> connecting_webhooks...", class: "text-slate-500" },
        { 
          segments: [
            { text: "> status: ", class: "text-slate-500" },
            { text: "active", class: "text-emerald-400" }
          ]
        },
        { 
          segments: [
            { text: "> latency: ", class: "text-slate-500" },
            { text: "12ms", class: "text-white" }
          ]
        },
        { 
          segments: [
            { text: "> region: ", class: "text-slate-500" },
            { text: "us-east-1", class: "text-white" }
          ]
        },
        { text: "> verifying_signature...", class: "text-slate-500" },
        { 
          segments: [
            { text: "> 200 OK: ", class: "text-slate-500" },
            { text: "event_processed", class: "text-emerald-400" }
          ]
        }
      ];

      const typeDelay = 30; // ms per char
      const lineDelay = 300; // ms between lines
      const resetDelay = 3500; // ms before restart

      async function typeLine(lineData) {
        const lineDiv = document.createElement('div');
        lineDiv.className = 'flex items-center flex-wrap min-h-[1.5em]';
        
        // Active cursor
        const cursor = document.createElement('span');
        cursor.className = 'w-1.5 h-3 bg-emerald-500 ml-1 opacity-100 inline-block align-middle shadow-[0_0_8px_rgba(16,185,129,0.5)]';
        lineDiv.appendChild(cursor);
        container.appendChild(lineDiv);

        const segments = lineData.segments || [{ text: lineData.text, class: lineData.class }];
        
        for (let segment of segments) {
            const span = document.createElement('span');
            span.className = segment.class;
            lineDiv.insertBefore(span, cursor);
            
            for (let char of segment.text) {
                span.textContent += char;
                await new Promise(r => setTimeout(r, Math.random() * 20 + typeDelay));
            }
        }
        
        // Remove solid cursor, we will add blinking one at the end if needed or next line handles it
        cursor.remove();
      }

      async function run() {
        while (true) { // Infinite loop
            container.innerHTML = '';
            container.style.opacity = '1';
            
            for (let i = 0; i < lines.length; i++) {
                await typeLine(lines[i]);
                await new Promise(r => setTimeout(r, lineDelay));
            }

            // Add blinking cursor at the end
            const finalLine = document.createElement('div');
            finalLine.className = 'flex items-center mt-0.5';
            finalLine.innerHTML = '<span class="text-slate-500 mr-1">></span><span class="w-1.5 h-3 bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>';
            container.appendChild(finalLine);

            await new Promise(r => setTimeout(r, resetDelay));
            
            // Soft fade out
            container.style.opacity = '0';
            await new Promise(r => setTimeout(r, 700)); // Match transition duration
        }
      }

      // Start animation
      run();
    })();
  


        // Use an IIFE or window attachment to ensure scope safety in different environments
        (function() {
            window.currentTestimonialIndex = 1; // Start with card 2 (index 1) in center

            window.handleTestimonialSwipe = function(direction) {
                const cards = [
                    document.getElementById('testimonial-card-1'),
                    document.getElementById('testimonial-card-2'),
                    document.getElementById('testimonial-card-3')
                ];

                if (!cards[0] || !cards[1] || !cards[2]) return;

                // Update index cyclically
                window.currentTestimonialIndex = (window.currentTestimonialIndex + direction + 3) % 3;

                cards.forEach((card, index) => {
                    // Calculate visual position relative to current index
                    // 0 = Left, 1 = Center, 2 = Right
                    // If direction is +1 (Next), index 1 moves to pos 0, index 2 moves to pos 1, index 0 moves to pos 2
                    const pos = (index - window.currentTestimonialIndex + 1 + 3) % 3;

                    // Base classes common to all cards
                    const baseCls = "transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] md:absolute md:top-1/2 md:left-1/2 w-full mb-6 md:mb-0 border";

                    let stateCls = "";

                    if (pos === 0) {
                        // Left State
                        stateCls = " p-8 md:p-8 md:w-[400px] bg-[#0A0B0E] border-white/10 shadow-2xl md:-translate-x-[125%] md:-translate-y-[60%] md:-rotate-[6deg] md:scale-[0.9] z-10 opacity-100 md:opacity-40 hover:md:opacity-100 hover:z-20 hover:border-white/20 rounded-[2rem]";
                    } else if (pos === 1) {
                        // Center State
                        stateCls = " p-10 md:p-10 md:w-[460px] bg-[#121317] border-emerald-500/20 shadow-[0_0_40px_-10px_rgba(16,185,129,0.1)] md:-translate-x-1/2 md:-translate-y-[65%] md:rotate-0 md:scale-100 z-30 opacity-100 hover:border-emerald-500/30 rounded-[2.5rem]";
                    } else {
                        // Right State
                        stateCls = " p-8 md:p-8 md:w-[400px] bg-[#0A0B0E] border-white/10 shadow-2xl md:translate-x-[25%] md:-translate-y-[60%] md:rotate-[6deg] md:scale-[0.9] z-10 opacity-100 md:opacity-40 hover:md:opacity-100 hover:z-20 hover:border-white/20 rounded-[2rem]";
                    }

                    card.className = baseCls + stateCls;
                });
            };
        })();
    


    // Flashlight cursor effect
    window.updateCursor = function(e) {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--x', `${x}px`);
      card.style.setProperty('--y', `${y}px`);
    }

    // Toggle logic
    window.togglePricing = function() {
      const knob = document.getElementById('billingKnob');
      const annualLabel = document.getElementById('labelAnnual');
      const monthlyLabel = document.getElementById('labelMonthly');
      const priceValue = document.getElementById('priceValue');
      const billingPeriod = document.getElementById('billingPeriod');
      
      const isAnnual = knob.classList.contains('translate-x-6');
      
      // Animate opacity of values for smoothness
      priceValue.style.opacity = '0.5';
      billingPeriod.style.opacity = '0.5';
      
      setTimeout(() => {
          if (!isAnnual) {
            // Switch to Annual
            knob.classList.add('translate-x-6');
            knob.style.transform = 'translateX(24px)';
            
            annualLabel.classList.add('text-white');
            annualLabel.classList.remove('text-neutral-400');
            monthlyLabel.classList.remove('text-white');
            monthlyLabel.classList.add('text-neutral-400');
            
            priceValue.textContent = priceValue.dataset.annual;
            billingPeriod.textContent = '/year';
          } else {
            // Switch to Monthly
            knob.classList.remove('translate-x-6');
            knob.style.transform = 'translateX(0px)';
            
            annualLabel.classList.remove('text-white');
            annualLabel.classList.add('text-neutral-400');
            monthlyLabel.classList.add('text-white');
            monthlyLabel.classList.remove('text-neutral-400');
            
            priceValue.textContent = priceValue.dataset.monthly;
            billingPeriod.textContent = '/month';
          }
          
          priceValue.style.opacity = '1';
          billingPeriod.style.opacity = '1';
      }, 150);
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
      

<div className="md:px-8 lg:px-12 max-w-[1400px] mr-auto ml-auto pr-6 pl-6">
<nav className="flex sticky [animation:animationIn_0.8s_ease-out_0.1s_both] bg-[#000000] z-50 border-[#ffffff]/10 border rounded-full mt-4 mb-0 pt-4 pr-4 pb-4 pl-4 top-4 backdrop-blur-md items-center justify-between">
<div className="flex items-center gap-2">
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[80px] h-[40px] bg-[url(https://cdn.midjourney.com/372600d1-0464-41c8-8632-fecb7f20ff47/0_3.png?w=800&amp;q=80)] bg-cover rounded-full invert" href="#"></a>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="text-white font-geist transition-colors hover:text-emerald-400" href="#">Platform</a>
<button className="flex items-center gap-1 hover:text-white transition-colors font-geist">
            Features
            <iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<button className="flex items-center gap-1 hover:text-white transition-colors font-geist">
            Resources
            <iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<a className="hover:text-white transition-colors font-geist" href="#">Pricing</a>
<a className="hover:text-white transition-colors font-geist" href="#">Docs</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:block px-5 py-2 rounded-full border text-slate-300 hover:bg-slate-900 transition-colors text-sm border-neutral-900 font-geist">
            Sign In
          </button>
<button className="px-5 py-2 rounded-full bg-white hover:bg-slate-200 transition-colors text-sm text-neutral-950 font-geist font-medium">
            Get Started
          </button>
</div>
</nav>

<main className="grid lg:grid-cols-2 pt-32 pb-32 relative gap-x-16 gap-y-16 items-center">

<div className="absolute inset-0 -z-10 w-full h-full overflow-hidden">
<div className="absolute w-full h-full left-0 top-0 -z-10 opacity-60" data-us-project="vLGJIxHINq2tCeLOR9Dt"></div>

</div>

<div className="flex flex-col gap-8 max-w-2xl gap-x-8 gap-y-8 items-start">
<div className="inline-flex [animation:animationIn_0.8s_ease-out_0.2s_both] bg-slate-900 border-neutral-900 border rounded-full pt-1.5 pr-5 pb-1.5 pl-1.5 gap-x-3 gap-y-3 items-center">
<span className="bg-emerald-500 text-white text-xs px-2.5 py-1 rounded-full font-geist font-medium">New</span>
<span className="text-slate-300 text-sm font-geist">Global tax compliance</span>
</div>
<h1 className="md:text-7xl leading-[1.1] [animation:animationIn_0.8s_ease-out_0.3s_both] text-5xl font-light text-white tracking-tight font-geist">
            The monetization infrastructure for developers
            </h1>
<p className="leading-relaxed [animation:animationIn_0.8s_ease-out_0.4s_both] text-lg text-slate-400 font-geist max-w-lg">
            Ledger handles tax, payments, and subscriptions so you can focus on
            building your product. The best alternative to Lemon Squeezy and
            Polar.
            </p>
<div className="flex [animation:animationIn_0.8s_ease-out_0.5s_both] pt-2 gap-x-4 gap-y-4 items-center">
<div className="inline-block bg-transparent">
<style>
                @property --gradient-angle { syntax: "<angle>"; initial-value: 0deg; inherits: false; }
                @property --gradient-angle-offset { syntax: "<angle>"; initial-value: 0deg; inherits: false; }
                @property --gradient-percent { syntax: "<percentage>"; initial-value: 20%; inherits: false; }
                @property --gradient-shine { syntax: "<color>"; initial-value: #34d399; inherits: false; }
                .shiny-cta {
                    --gradient-angle: 0deg; --gradient-angle-offset: 0deg; --gradient-percent: 20%; --gradient-shine: #34d399;
                    position: relative; overflow: hidden; border-radius: 9999px; padding: 1.25rem 2.5rem;
                    font-size: 1.125rem; line-height: 1.2; font-weight: 500; color: #ffffff;
                    background: linear-gradient(#000000, #000000) padding-box, conic-gradient(from calc(var(--gradient-angle) - var(--gradient-angle-offset)), transparent 0%, #059669 5%, var(--gradient-shine) 15%, #059669 30%, transparent 40%, transparent 100%) border-box;
                    border: 2px solid transparent; box-shadow: inset 0 0 0 1px #1a1818; outline: none;
                    transition: all 0.3s; cursor: pointer; isolation: isolate; font-family: 'Geist', sans-serif; z-index: 0;
                    animation: border-spin 2.5s linear infinite;
                }
                @keyframes border-spin { to { --gradient-angle: 360deg; } }
                .shiny-cta:active { transform: translateY(1px); }
                </style>
<button className="shiny-cta focus:outline-none"><span className="font-geist">Start Building</span></button>
</div>
<button className="group px-8 py-4 rounded-full border text-slate-300 text-lg hover:bg-slate-900 transition-all flex items-center gap-3 border-neutral-900 font-geist">
                Documentation
                <iconify-icon className="text-xl group-hover:text-white transition-colors" icon="solar:book-bookmark-linear"></iconify-icon>
</button>
</div>
</div>

<div className="card-top lg:justify-self-end flex flex-col overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group hover:border-emerald-500/20 [animation:animationIn_0.8s_ease-out_0.6s_both] bg-[#0A0B0E] w-[32rem] h-fit z-10 border-white/10 border rounded-[1.2em] ml-auto relative shadow-2xl justify-self-end">
<style>
    @keyframes barCycle {
      0% { transform: scaleY(0); opacity: 0; }
      20% { transform: scaleY(1); opacity: 1; }
      80% { transform: scaleY(1); opacity: 1; }
      95% { transform: scaleY(0); opacity: 0; }
      100% { transform: scaleY(0); opacity: 0; }
    }
    .animate-bar-loop {
      transform-origin: bottom;
      animation: barCycle 6s cubic-bezier(0.33, 1, 0.68, 1) infinite;
    }
  </style>

<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent pointer-events-none">
</div>
<div className="z-10 flex flex-col h-full pt-8 pr-8 pb-8 pl-8 relative">

<div className="flex items-start justify-between mb-8">
<div className="flex items-baseline gap-3">

<span className="text-6xl text-white tabular-nums font-geist tracking-tight font-light" id="metric-counter-aura">$2.8M</span>
<span className="text-base text-neutral-500 font-geist">processed volume</span>
</div>
<button className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors border border-white/5 shadow-lg">
<svg className="lucide lucide-activity" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
</button>
</div>

<div className="flex-1 flex flex-col gap-2 relative">

<div className="flex justify-between text-xs font-medium text-neutral-400 uppercase tracking-wide px-1">
<span className="text-emerald-500/80 font-geist">Daily Peak</span>
<span className="font-geist">$450k</span>
</div>

<div className="h-44 flex items-end justify-between gap-3 relative mt-1">

<div className="absolute top-0 left-0 right-0 h-px border-t border-dashed border-white/20 w-full z-0"></div>


<div className="flex flex-col items-center gap-3 w-full h-full group/bar cursor-pointer z-10">
<div className="relative w-full h-full rounded-lg overflow-hidden bg-white/[0.02] ring-1 ring-white/5">
<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 4px, #fff 4px, #fff 6px)'}}></div>

<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-emerald-600 to-emerald-400 h-[65%] rounded-lg transition-all duration-500 group-hover/bar:brightness-110 shadow-[0_0_15px_rgba(16,185,129,0.2)] animate-bar-loop" style={{animationDelay: '0ms'}}>
</div>
</div>
<span className="text-xs text-neutral-500 group-hover/bar:text-white transition-colors font-geist">Mon</span>
</div>

<div className="flex flex-col items-center gap-3 w-full h-full group/bar cursor-pointer z-10">
<div className="relative w-full h-full rounded-lg overflow-hidden bg-white/[0.02] ring-1 ring-white/5">
<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 4px, #fff 4px, #fff 6px)'}}></div>
<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-emerald-600 to-emerald-400 h-[85%] rounded-lg transition-all duration-500 group-hover/bar:brightness-110 shadow-[0_0_15px_rgba(16,185,129,0.2)] animate-bar-loop" style={{animationDelay: '100ms'}}>
</div>
</div>
<span className="text-xs text-neutral-500 group-hover/bar:text-white transition-colors font-geist">Tue</span>
</div>

<div className="flex flex-col items-center gap-3 w-full h-full group/bar cursor-pointer z-10">
<div className="relative w-full h-full rounded-lg overflow-hidden bg-white/[0.02] ring-1 ring-white/5">
<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 4px, #fff 4px, #fff 6px)'}}></div>
<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-emerald-500 to-emerald-300 h-[100%] rounded-lg shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all duration-500 group-hover/bar:brightness-110 animate-bar-loop" style={{animationDelay: '200ms'}}>
</div>
</div>
<span className="text-xs text-white font-geist">Wed</span>
</div>

<div className="flex flex-col items-center gap-3 w-full h-full group/bar cursor-pointer z-10">
<div className="relative w-full h-full rounded-lg overflow-hidden bg-white/[0.02] ring-1 ring-white/5">
<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 4px, #fff 4px, #fff 6px)'}}></div>
<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-emerald-600 to-emerald-400 h-[55%] rounded-lg transition-all duration-500 group-hover/bar:brightness-110 shadow-[0_0_15px_rgba(16,185,129,0.2)] animate-bar-loop" style={{animationDelay: '300ms'}}>
</div>
</div>
<span className="text-xs text-neutral-500 group-hover/bar:text-white transition-colors font-geist">Thu</span>
</div>

<div className="flex flex-col items-center gap-3 w-full h-full group/bar cursor-pointer z-10">
<div className="relative w-full h-full rounded-lg overflow-hidden bg-white/[0.02] ring-1 ring-white/5">
<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 4px, #fff 4px, #fff 6px)'}}></div>
<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-emerald-600 to-emerald-400 h-[90%] rounded-lg transition-all duration-500 group-hover/bar:brightness-110 shadow-[0_0_15px_rgba(16,185,129,0.2)] animate-bar-loop" style={{animationDelay: '400ms'}}>
</div>
</div>
<span className="text-xs text-neutral-500 group-hover/bar:text-white transition-colors font-geist">Fri</span>
</div>

<div className="flex flex-col items-center gap-3 w-full h-full group/bar cursor-pointer z-10">
<div className="relative w-full h-full rounded-lg overflow-hidden bg-white/[0.02] ring-1 ring-white/5">
<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 4px, #fff 4px, #fff 6px)'}}></div>
<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-emerald-600 to-emerald-400 h-[45%] rounded-lg transition-all duration-500 group-hover/bar:brightness-110 shadow-[0_0_15px_rgba(16,185,129,0.2)] animate-bar-loop" style={{animationDelay: '500ms'}}>
</div>
</div>
<span className="text-xs text-neutral-500 group-hover/bar:text-white transition-colors font-geist">Sat</span>
</div>

<div className="flex flex-col items-center gap-3 w-full h-full group/bar cursor-pointer z-10">
<div className="relative w-full h-full rounded-lg overflow-hidden bg-white/[0.02] ring-1 ring-white/5">
<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 4px, #fff 4px, #fff 6px)'}}></div>
<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-neutral-600 to-neutral-400 h-[30%] rounded-lg transition-all duration-500 group-hover/bar:brightness-110 animate-bar-loop" style={{animationDelay: '600ms'}}>
</div>
</div>
<span className="text-xs text-neutral-500 group-hover/bar:text-white transition-colors font-geist">Sun</span>
</div>
</div>
</div>

<div className="flex items-end justify-between mt-10 pt-6 border-t border-white/5">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2">
<span className="text-white text-xl font-geist">135<span className="text-emerald-500 font-geist">+</span></span>
<span className="text-neutral-500 text-sm font-geist">currencies</span>
</div>
</div>
<div className="flex flex-col gap-1 text-right">
<div className="flex items-center justify-end gap-2">
<span className="text-white text-xl font-geist">$42,805</span>
<span className="text-neutral-500 text-sm font-geist">tax automated</span>
</div>
</div>
</div>
</div>

</div>
</main>

<section className="fade-in-up -translate-y-6 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll font-geist w-full max-w-[1400px] z-30 mr-auto mb-24 ml-auto">
<div className="overflow-hidden flex min-h-[900px] group selection:bg-emerald-500 selection:text-white text-slate-300 bg-[#0A0B0E] border-white/10 border rounded-3xl relative shadow-2xl">

<aside className="w-72 bg-[#0c0d10] border-r border-white/5 flex-col hidden lg:flex relative z-20">
<div className="flex flex-col h-full pt-6 pr-6 pb-6 pl-6">

<div className="flex gap-3 mb-10 pl-2 gap-x-3 gap-y-3 items-center">
<div className="flex flex-col">
<span className="text-white font-semibold text-lg tracking-tight leading-none">Ledger</span>
<span className="text-[10px] uppercase font-medium text-neutral-500 tracking-wider mt-1">Production</span>
</div>
<button className="ml-auto text-neutral-600 hover:text-white transition-colors">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
</div>

<div className="flex-1 space-y-8">

<div className="space-y-1">
<div className="text-[11px] font-semibold text-neutral-600 uppercase tracking-wider mb-3 px-4">General</div>
<button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/5 text-white text-sm font-medium border border-white/5 transition-all">
<svg className="" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
              Overview
            </button>
<button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-neutral-400 hover:text-white hover:bg-white/5 transition-colors text-sm font-medium group">
<svg className="" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
              Analytics
            </button>
<button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-neutral-400 hover:text-white hover:bg-white/5 transition-colors text-sm font-medium group">
<svg className="" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path className="" d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              Customers
            </button>
</div>

<div className="space-y-1">
<div className="flex items-center justify-between px-4 mb-3">
<div className="text-[11px] font-semibold text-neutral-600 uppercase tracking-wider">Monetization</div>
</div>
<button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-neutral-400 hover:text-white hover:bg-white/5 transition-colors text-sm font-medium group">
<svg className="" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path className="" d="M12 2v20"></path><path className="" d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
              Payments
            </button>
<button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-neutral-400 hover:text-white hover:bg-white/5 transition-colors text-sm font-medium group">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path></svg>
              Invoices
            </button>
<button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-neutral-400 hover:text-white hover:bg-white/5 transition-colors text-sm font-medium group">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M2 12h20"></path><path d="M12 2v20"></path><path d="m4.93 4.93 14.14 14.14"></path><path d="m19.07 4.93-14.14 14.14"></path></svg>
              Tax
            </button>
</div>

<div className="space-y-1">
<div className="flex items-center justify-between px-4 mb-3">
<div className="text-[11px] font-semibold text-neutral-600 uppercase tracking-wider">Developers</div>
</div>
<button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-neutral-400 hover:text-white hover:bg-white/5 transition-colors text-sm font-medium group">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m7 11 2-2-2-2"></path><path d="m17 7 2 2-2 2"></path><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect></svg>
              API Keys
            </button>
<button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-neutral-400 hover:text-white hover:bg-white/5 transition-colors text-sm font-medium group">
<svg className="" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M18 8c0 4.5-6 9-6 9s-6-4.5-6-9a6 6 0 0 1 12 0"></path><circle cx="12" cy="8" r="2"></circle></svg>
              Webhooks
            </button>
</div>
</div>

<div className="mt-auto pt-6 border-t border-white/5">
<div className="flex items-center gap-3">
<div className="flex bg-center text-xs font-medium text-white w-8 h-8 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6e807631-f507-40d1-92e2-17f496e11b6b_320w.webp)] bg-cover border-white/10 border rounded-full items-center justify-center"></div>
<div className="flex flex-col">
<span className="text-xs font-medium text-white">Alicia Morin</span>
<span className="text-[10px] text-neutral-500">alicia@ledger.com</span>
</div>
</div>
</div>
</div>
</aside>

<main className="flex-1 overflow-hidden flex flex-col bg-[#0c0d10] relative">

<div className="absolute top-0 right-0 w-[800px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/4 z-0">
</div>
<div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/3 translate-y-1/4 z-0">
</div>

<header className="flex sticky z-30 bg-[#0c0d10]/80 h-20 border-white/5 border-b pr-8 pl-8 top-0 backdrop-blur-md items-center justify-between">
<div className="flex gap-3 text-sm gap-x-3 gap-y-3 items-center">
<span className="text-neutral-500">Ledger</span>
<span className="text-neutral-700">/</span>
<span className="text-white font-medium">Overview</span>
</div>
<div className="flex items-center gap-6">
<div className="relative hidden lg:block group">
<svg className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 group-hover:text-white transition-colors" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="8"></circle>
<path d="m21 21-4.3-4.3"></path>
</svg>
<input className="bg-[#121317] border border-white/5 rounded-lg pl-9 pr-4 py-1.5 text-xs text-white focus:outline-none focus:border-emerald-500/30 w-64 placeholder:text-neutral-600 transition-all hover:bg-[#16171b]" placeholder="Search or type a command" type="text"/>
</div>
<button className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:brightness-110 text-white text-xs font-medium px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 shadow-[0_0_15px_-3px_rgba(16,185,129,0.3)] border border-emerald-400/20">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
            Space
          </button>
<div className="flex items-center gap-4 border-l border-white/5 pl-6">
<button className="relative text-neutral-400 hover:text-white transition-colors">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path></svg>
<span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-yellow-400 rounded-full border border-[#0c0d10]"></span>
</button>
</div>
</div>
</header>

<div className="p-8 overflow-y-auto flex-1 relative z-10 custom-scrollbar">

<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
<h1 className="text-2xl text-white font-semibold tracking-tight">Overview</h1>
<div className="flex gap-2 bg-[#121317] border-white/5 border rounded-lg pt-1 pr-1 pb-1 pl-1 gap-x-2 gap-y-2 items-center">
<button className="px-3 py-1 text-xs font-medium text-white bg-white/10 rounded-md shadow-sm">7d</button>
<button className="px-3 py-1 text-xs font-medium text-neutral-500 hover:text-white transition-colors">30d</button>
<button className="px-3 py-1 text-xs font-medium text-neutral-500 hover:text-white transition-colors">90d</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-x-6 gap-y-6">

<div className="bg-[#121317] border border-white/5 rounded-2xl p-6 relative group hover:border-white/10 transition-colors">
<div className="flex justify-between items-start mb-6">
<span className="text-sm font-medium text-neutral-500">Gross Volume</span>
<button className="text-neutral-600 hover:text-white transition-colors"><svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg></button>
</div>
<div className="flex items-end justify-between">
<span className="text-3xl font-semibold text-white tracking-tight">$42,805</span>
<div className="flex text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border-emerald-500/20 border rounded-md pt-1 pr-2.5 pb-1 pl-2.5 shadow-[0_0_10px_rgba(16,185,129,0.1)] gap-x-1.5 gap-y-1.5 items-center">
                +12.5% </div>
</div>
</div>

<div className="bg-[#121317] border border-white/5 rounded-2xl p-6 relative group hover:border-white/10 transition-colors">
<div className="flex justify-between items-start mb-6">
<span className="text-sm font-medium text-neutral-500">Net Revenue</span>
<button className="text-neutral-600 hover:text-white transition-colors"><svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg></button>
</div>
<div className="flex items-end justify-between">
<span className="text-3xl font-semibold text-white tracking-tight">$36,210</span>
<div className="flex text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border-emerald-500/20 border rounded-md pt-1 pr-2.5 pb-1 pl-2.5 shadow-[0_0_10px_rgba(16,185,129,0.1)] gap-x-1.5 gap-y-1.5 items-center">
                +8.2% </div>
</div>
</div>

<div className="bg-[#121317] border border-white/5 rounded-2xl p-6 relative group hover:border-white/10 transition-colors">
<div className="flex justify-between items-start mb-6">
<span className="text-sm font-medium text-neutral-500">Active Subscribers</span>
<button className="text-neutral-600 hover:text-white transition-colors"><svg className="" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg></button>
</div>
<div className="flex items-end justify-between">
<span className="text-3xl font-semibold text-white tracking-tight">1,429</span>
<div className="flex text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border-emerald-500/20 border rounded-md pt-1 pr-2.5 pb-1 pl-2.5 shadow-[0_0_10px_rgba(16,185,129,0.1)] gap-x-1.5 gap-y-1.5 items-center">
                +4.1%</div>
</div>
</div>

<div className="lg:col-span-2 flex flex-col overflow-hidden bg-[#121317] border-white/5 border rounded-2xl pt-6 pr-6 pb-6 pl-6 relative justify-between">

<div className="flex justify-between items-start z-10 mb-2">
<div className="flex flex-col gap-1">
<span className="text-sm font-medium text-neutral-500">Revenue Over Time</span>
<span className="text-3xl text-white font-semibold tracking-tight">$164,230.00</span>
</div>
<div className="flex gap-1.5 bg-emerald-500/10 border-emerald-500/20 border rounded-md pt-1 pr-2.5 pb-1 pl-2.5 shadow-[0_0_10px_rgba(16,185,129,0.1)] gap-x-1.5 gap-y-1.5 items-center">
<svg className="text-emerald-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="m18 15-6-6-6 6"></path>
</svg>
<span className="text-emerald-400 font-medium text-sm">2.1%</span>
</div>
</div>

<div className="h-48 w-full relative mt-4">

<div className="absolute top-0 bottom-0 left-[60%] w-px border-l border-dashed border-emerald-500/30 z-10">
</div>

<div className="absolute top-[45%] left-[60%] w-3 h-3 bg-[#121317] border-2 border-emerald-400 rounded-full z-20 -translate-x-[5px] shadow-[0_0_10px_rgba(52,211,153,0.5)]">
</div>

<div className="absolute top-[10%] left-[60%] -translate-x-1/2 text-[10px] text-neutral-400 font-medium whitespace-nowrap bg-[#1a1b20] border border-white/5 px-2 py-1 rounded">
                Thu, 25 Jun 2025, 10:45</div>

<div className="flex flex-col justify-between h-full absolute left-0 right-0 pointer-events-none">
<div className="w-full h-px bg-white/[0.02]"></div>
<div className="w-full h-px bg-white/[0.02]"></div>
<div className="w-full h-px bg-white/[0.02]"></div>
<div className="w-full h-px bg-white/[0.02]"></div>
<div className="w-full h-px bg-white/[0.02]"></div>
</div>

<svg className="absolute inset-0 w-full h-full" preserveaspectratio="none">
<defs>
<lineargradient id="gradientGreen" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#10b981" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="#10b981" stop-opacity="0"></stop>
</lineargradient>
</defs>

<path className="" d="M0,130 C40,140 80,110 120,115 C160,120 200,90 240,60 C280,75 320,60 360,65 C400,60 440,75 480,90 C520,70 560,90 600,130 L600,200 L0,200 Z" fill="url(#gradientGreen)"></path>

<path d="M0,130 C40,140 80,110 120,115 C160,120 200,90 240,60 C280,75 320,60 360,65 C400,60 440,75 480,90 C520,70 560,90 600,130" fill="none" stroke="#34d399" strokeWidth="2"></path>

<path d="M0,140 C50,150 100,130 150,135 C200,140 250,110 300,100 C350,110 400,100 450,110 C500,100 550,120 600,110" fill="none" stroke="#facc15" stroke-dasharray="4 4" stroke-opacity="0.5" strokeWidth="1.5"></path>
</svg>

<div className="absolute bottom-0 left-0 right-0 flex justify-between text-[10px] text-neutral-600 font-medium px-2">
<span>Jan</span><span>Feb</span><span className="">Mar</span><span className="">Apr</span><span>May</span><span className="">Jun</span><span>Jul</span><span>Aug</span><span>Sep</span>
</div>
</div>

<div className="absolute left-4 top-20 bottom-8 flex flex-col justify-between text-[10px] text-neutral-600 font-medium pointer-events-none">
<span>50k</span><span>40k</span><span>30k</span><span>20k</span><span>10k</span>
</div>
</div>

<div className="bg-[#121317] border border-white/5 rounded-2xl flex flex-col relative overflow-hidden">

<div className="p-6 pb-4 border-b border-white/5 flex items-center justify-between">
<h3 className="text-sm font-medium text-white">Recent Activity</h3>
<button className="text-neutral-500 hover:text-white transition-colors">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
</button>
</div>

<div className="flex-1 overflow-y-auto">
<div className="flex flex-col">

<div className="flex items-center justify-between p-4 hover:bg-white/[0.02] transition-colors border-b border-white/5 last:border-0 group cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500/20 transition-colors">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z">
</path>
</svg>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-white">Stripe Payout</span>
<span className="text-[10px] text-neutral-500">Today, 9:41 AM</span>
</div>
</div>
<span className="text-xs font-medium text-emerald-400">+$1,420.00</span>
</div>

<div className="flex items-center justify-between p-4 hover:bg-white/[0.02] transition-colors border-b border-white/5 last:border-0 group cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-white/10 transition-colors">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" width="20" x="2" y="5"></rect>
<line x1="2" x2="22" y1="10" y2="10"></line>
</svg>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-white">AWS Invoice</span>
<span className="text-[10px] text-neutral-500">Yesterday</span>
</div>
</div>
<span className="text-xs font-medium text-white">-$64.00</span>
</div>

<div className="flex items-center justify-between p-4 hover:bg-white/[0.02] transition-colors border-b border-white/5 last:border-0 group cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-white/10 transition-colors">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
<rect height="14" rx="2" width="20" x="2" y="6"></rect>
</svg>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-white">Slack</span>
<span className="text-[10px] text-neutral-500">Oct 24, 2024</span>
</div>
</div>
<span className="text-xs font-medium text-white">-$12.00</span>
</div>

<div className="flex items-center justify-between p-4 hover:bg-white/[0.02] transition-colors border-b border-white/5 last:border-0 group cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-white/10 transition-colors">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 16v-4"></path>
<path d="M12 8h.01"></path>
</svg>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-white">Notion</span>
<span className="text-[10px] text-neutral-500">Oct 22, 2024</span>
</div>
</div>
<span className="text-xs font-medium text-white">-$18.00</span>
</div>
</div>
</div>
</div>

<div className="bg-[#121317] border border-white/5 rounded-2xl p-6 flex flex-col relative overflow-hidden group hover:border-white/10 transition-all">
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-2">
<span className="text-sm font-medium text-neutral-400">Expenses</span>
</div>
<button className="text-[10px] text-neutral-500 hover:text-white transition-colors">View all</button>
</div>
<div className="mt-auto">
<span className="text-2xl font-semibold text-white tracking-tight">$12,402</span>
<div className="flex items-center gap-2 mt-1 mb-4">
<span className="text-[11px] font-medium text-rose-500 bg-rose-500/10 px-1.5 py-0.5 rounded border border-rose-500/20">+4.2%</span>
<span className="text-[11px] text-neutral-600">vs last month</span>
</div>

<div className="flex h-1.5 w-full rounded-full overflow-hidden bg-white/5">
<div className="h-full bg-rose-500 w-[45%]"></div>
<div className="h-full bg-orange-400 w-[30%]"></div>
<div className="h-full bg-yellow-400 w-[15%]"></div>
</div>
<div className="flex justify-between mt-2 text-[10px] text-neutral-500">
<span className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-rose-500"></div> Servers</span>
<span className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-orange-400"></div> Ads</span>
<span className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div> Tools</span>
</div>
</div>
</div>

<div className="bg-[#121317] border border-white/5 rounded-2xl p-6 flex flex-col relative overflow-hidden group hover:border-white/10 transition-all">
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-2">
<span className="text-sm font-medium text-neutral-400">Income</span>
</div>
<button className="text-[10px] text-neutral-500 hover:text-white transition-colors">View all</button>
</div>
<div className="mt-auto">
<span className="text-2xl font-semibold text-white tracking-tight">$84,230</span>
<div className="flex items-center gap-2 mt-1 mb-4">
<span className="text-[11px] font-medium text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">+12.4%</span>
<span className="text-[11px] text-neutral-600">vs last month</span>
</div>

<div className="flex h-1.5 w-full rounded-full overflow-hidden bg-white/5">
<div className="h-full bg-emerald-500 w-[60%]"></div>
<div className="h-full bg-emerald-400 w-[25%]"></div>
<div className="h-full bg-teal-400 w-[15%]"></div>
</div>
<div className="flex justify-between mt-2 text-[10px] text-neutral-500">
<span className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Subs</span>
<span className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div> API</span>
<span className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-teal-400"></div> One-time</span>
</div>
</div>
</div>

<div className="bg-gradient-to-br from-[#1c1d24] to-[#121317] border border-white/5 rounded-2xl p-6 relative overflow-hidden group hover:border-white/10 transition-all shadow-lg">

<div className="absolute -right-12 -top-12 w-40 h-40 bg-emerald-500/5 rounded-full blur-[40px] pointer-events-none">
</div>
<div className="flex justify-between items-start mb-8 relative z-10">
<div className="">
<p className="text-sm font-medium text-neutral-400 mb-1">Total Balance</p>
<div className="flex items-center gap-2">
<img alt="US" className="rounded-[2px] opacity-80" src="https://flagcdn.com/w20/us.png" width="16"/>
<span className="text-xs font-medium text-neutral-500">USD</span>
</div>
</div>
<div className="p-2 rounded-lg bg-white/5 border border-white/5 text-white shadow-inner">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1">
</path>
<path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
</svg>
</div>
</div>
<div className="mb-8 relative z-10">
<h2 className="text-4xl font-semibold text-white tracking-tight">
                $385,430<span className="text-2xl text-neutral-600">.00</span></h2>
</div>
<div className="flex gap-3 relative z-10">
<button className="flex-1 bg-white text-neutral-900 hover:bg-neutral-200 text-xs font-semibold py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg> Transfer
      </button>
<button className="flex-1 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-medium py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="M5 12h14"></path></svg> Add Funds
      </button>
</div>
</div>
</div>
</div>
</main>
</div>
</section><div className="[animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll pt-8 pb-8">
<div className="py-6 w-full">
<div className="text-center"></div>
<div className="relative flex w-full flex-col items-center justify-center overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
<div className="flex w-max min-w-full shrink-0 animate-[marquee-rtl_40s_linear_infinite] items-center gap-12 group-hover:[animation-play-state:paused]">

<div className="flex items-center gap-12 shrink-0">
<a className="inline-flex items-center justify-center h-[40px] w-[150px] bg-center mix-blend-screen bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b9181a49-20ab-4552-b731-976469c0154b_320w.jpg)] bg-cover rounded transition-opacity hover:opacity-80" href="#"></a>
<a className="inline-flex items-center justify-center h-[40px] w-[150px] bg-center mix-blend-screen bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ca43984b-3298-41bb-871b-d113545c657c_320w.jpg)] bg-cover rounded transition-opacity hover:opacity-80" href="#"></a>
<a className="inline-flex items-center justify-center h-[40px] w-[150px] bg-center mix-blend-screen bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/07ee863a-59fe-4785-a806-5592f2439df2_320w.jpg)] bg-cover rounded transition-opacity hover:opacity-80" href="#"></a>
<a className="inline-flex items-center justify-center h-[40px] w-[100px] bg-center mix-blend-screen bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/be92aecb-6303-4bbe-9283-ba238ac8b0ee_320w.jpg)] bg-cover rounded transition-opacity hover:opacity-80" href="#"></a>
<a className="inline-flex items-center justify-center h-[40px] w-[100px] bg-center mix-blend-screen bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9f9002c0-4b36-4d16-b000-15655b25b879_320w.jpg)] bg-cover rounded transition-opacity hover:opacity-80" href="#"></a>
<a className="inline-flex items-center justify-center h-[40px] w-[150px] bg-center mix-blend-screen bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1040d3ec-8da2-47f6-b134-1341261ccfb9_320w.jpg)] bg-cover rounded transition-opacity hover:opacity-80" href="#"></a>
</div>

<div aria-hidden="true" className="flex items-center gap-12 shrink-0">
<a className="inline-flex items-center justify-center h-[40px] w-[150px] bg-center mix-blend-screen bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b9181a49-20ab-4552-b731-976469c0154b_320w.jpg)] bg-cover rounded transition-opacity hover:opacity-80" href="#"></a>
<a className="inline-flex items-center justify-center h-[40px] w-[150px] bg-center mix-blend-screen bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ca43984b-3298-41bb-871b-d113545c657c_320w.jpg)] bg-cover rounded transition-opacity hover:opacity-80" href="#"></a>
<a className="inline-flex items-center justify-center h-[40px] w-[150px] bg-center mix-blend-screen bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/07ee863a-59fe-4785-a806-5592f2439df2_320w.jpg)] bg-cover rounded transition-opacity hover:opacity-80" href="#"></a>
<a className="inline-flex items-center justify-center h-[40px] w-[100px] bg-center mix-blend-screen bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/be92aecb-6303-4bbe-9283-ba238ac8b0ee_320w.jpg)] bg-cover rounded transition-opacity hover:opacity-80" href="#"></a>
<a className="inline-flex items-center justify-center h-[40px] w-[100px] bg-center mix-blend-screen bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9f9002c0-4b36-4d16-b000-15655b25b879_320w.jpg)] bg-cover rounded transition-opacity hover:opacity-80" href="#"></a>
<a className="inline-flex items-center justify-center h-[40px] w-[150px] bg-center mix-blend-screen bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1040d3ec-8da2-47f6-b134-1341261ccfb9_320w.jpg)] bg-cover rounded transition-opacity hover:opacity-80" href="#"></a>
</div>
</div>
</div>
</div>
</div><section className="fade-in-up -translate-y-6 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll bg-gradient-to-br from-white/10 via-white/0 to-white/10 from-white/20 w-full max-w-[1400px] rounded-3xl mt-24 mr-auto mb-24 ml-auto pt-8 pr-8 pb-8 pl-8 relative" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1))', '--border-radius-before': '24px'}}>

<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-16 gap-x-4 gap-y-4">
<div className="">
<div className="flex items-center gap-2 mb-4">
<span className="w-6 h-[1px] bg-emerald-500"></span>
<p className="text-sm font-semibold text-emerald-400 tracking-wide uppercase font-geist">Market Intelligence</p>
</div>
<h2 className="sm:text-5xl text-3xl text-white tracking-tight font-light font-geist leading-[1.1]">
        Real-time financial data
      </h2>
<p className="sm:text-lg max-w-[60ch] text-base text-slate-400 mt-6 font-geist font-light">
        Advanced charting and analysis tools for crypto and traditional markets. Monitor price action with institutional-grade precision.
      </p>
</div>
</div>

<div className="overflow-hidden group bg-[#0A0B0E] w-full border-white/10 border rounded-3xl relative shadow-2xl">

<div className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none">
</div>
<div className="absolute -bottom-[20%] -right-[10%] w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none">
</div>
<div className="md:p-10 pt-6 pr-6 pb-6 pl-6 relative">
<style>
        @keyframes candleCycle {
          0% { transform: scaleY(0); opacity: 0; }
          20% { transform: scaleY(1); opacity: 1; }
          80% { transform: scaleY(1); opacity: 1; }
          95% { transform: scaleY(0); opacity: 0; }
          100% { transform: scaleY(0); opacity: 0; }
        }
        .candle-anim {
          animation: candleCycle 8s cubic-bezier(0.25, 1, 0.5, 1) infinite;
          transform-origin: bottom;
        }
      </style>

<div className="z-10 flex flex-col gap-8 relative gap-x-8 gap-y-8">

<div className="flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
<svg className="lucide lucide-trending-up" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
<polyline points="16 7 22 7 22 13"></polyline>
</svg>
</div>
<h2 className="text-xl text-emerald-400 font-geist" style={{}}>BTC/USD Spot</h2>
</div>

<div className="flex items-center gap-2">
<button className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 text-neutral-400 hover:text-white transition-colors">
<svg className="lucide lucide-download" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>
</button>
<button className="h-9 px-3 flex items-center gap-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 text-neutral-400 hover:text-white text-xs transition-colors font-geist" style={{}}>
          Options
          <svg className="" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
</div>
</div>

<div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
<div className="">
<div className="flex items-center gap-3 mb-1">
<span className="text-4xl md:text-5xl text-white font-geist tracking-tight font-light" style={{}}>$38,492.10</span>
<span className="px-2.5 py-1 rounded-md text-sm bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.2)] font-geist" style={{}}>+3.4%</span>
</div>
<p className="text-sm text-neutral-500 font-geist" style={{}}>+$1,265.40 past 24 hours</p>
</div>

<div className="flex p-1 bg-[#14181F] rounded-xl border border-white/5 shadow-inner">
<button className="px-4 py-1.5 rounded-lg text-xs text-neutral-500 hover:text-neutral-300 transition-colors font-geist" style={{}}>12M</button>
<button className="px-4 py-1.5 rounded-lg text-xs text-neutral-500 hover:text-neutral-300 transition-colors font-geist" style={{}}>30D</button>
<button className="px-4 py-1.5 rounded-lg text-xs text-neutral-500 hover:text-neutral-300 transition-colors font-geist" style={{}}>7D</button>
<button className="px-4 py-1.5 rounded-lg text-xs bg-emerald-500 text-white shadow-[0_0_15px_rgba(16,185,129,0.4)] font-geist" style={{}}>24H</button>
</div>
</div>
</div>

<div className="h-[400px] w-full relative">

<div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
<div className="w-full h-px bg-white/5"></div>
<div className="w-full h-px bg-white/5"></div>
<div className="w-full h-px bg-white/5"></div>
<div className="w-full h-px bg-white/5"></div>
<div className="w-full h-px bg-white/5"></div>
</div>

<div className="absolute inset-0 flex">

<div className="flex-1 flex items-end justify-between px-2 pb-8 relative z-10">

<div className="absolute top-[10%] bottom-8 left-[35%] right-[35%] bg-gradient-to-b from-emerald-500/10 to-transparent border-x border-t border-emerald-500/20 rounded-t-lg backdrop-blur-[2px] z-0">
<div className="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center backdrop-blur-md border border-emerald-500/30">
<svg className="text-emerald-300" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="m15 18-6-6 6-6"></path>
</svg>
</div>
<div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center backdrop-blur-md border border-emerald-500/30">
<svg className="text-emerald-300" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</div>
</div>

<div className="absolute top-[8%] left-[50%] -translate-x-1/2 z-20">
<div className="bg-slate-900/90 backdrop-blur-md border border-white/10 text-white text-sm py-1.5 px-3 rounded-lg shadow-xl flex items-center gap-1 font-geist" style={{}}>
                $38,154 <span className="text-neutral-400 font-geist" style={{}}>USD</span>
</div>
<div className="w-px h-16 bg-white/20 mx-auto mt-1 border-r border-dashed border-white/30"></div>
</div>



<div className="w-2 h-[40%] flex justify-center relative group candle-anim" style={{animationDelay: '0ms'}}>
<div className="w-[1px] h-full bg-emerald-500/50"></div>
<div className="absolute h-[60%] w-[6px] bg-emerald-400 rounded-[1px] top-[20%] shadow-[0_0_10px_rgba(52,211,153,0.3)]">
</div>
</div>
<div className="w-2 h-[45%] flex justify-center relative group candle-anim" style={{animationDelay: '100ms'}}>
<div className="w-[1px] h-full bg-emerald-500/50"></div>
<div className="absolute h-[30%] w-[6px] bg-emerald-400 rounded-[1px] top-[10%]"></div>
</div>
<div className="w-2 h-[35%] flex justify-center relative group candle-anim" style={{animationDelay: '200ms'}}>
<div className="w-[1px] h-full bg-purple-500/50"></div>
<div className="absolute h-[50%] w-[6px] bg-purple-500 rounded-[1px] top-[20%]"></div>
</div>
<div className="w-2 h-[42%] flex justify-center relative group candle-anim" style={{animationDelay: '300ms'}}>
<div className="w-[1px] h-full bg-purple-500/50"></div>
<div className="absolute h-[40%] w-[6px] bg-purple-500 rounded-[1px] top-[30%]"></div>
</div>
<div className="w-2 h-[30%] flex justify-center relative group candle-anim" style={{animationDelay: '400ms'}}>
<div className="w-[1px] h-full bg-emerald-500/50"></div>
<div className="absolute h-[70%] w-[6px] bg-emerald-400 rounded-[1px] top-[15%]"></div>
</div>
<div className="w-2 h-[25%] flex justify-center relative group candle-anim" style={{animationDelay: '500ms'}}>
<div className="w-[1px] h-full bg-emerald-500/50"></div>
<div className="absolute h-[40%] w-[6px] bg-emerald-400 rounded-[1px] top-[30%]"></div>
</div>
<div className="w-2 h-[38%] flex justify-center relative group candle-anim" style={{animationDelay: '600ms'}}>
<div className="w-[1px] h-full bg-emerald-500/50"></div>
<div className="absolute h-[50%] w-[6px] bg-emerald-400 rounded-[1px] top-[10%]"></div>
</div>
<div className="w-2 h-[45%] flex justify-center relative group candle-anim" style={{animationDelay: '700ms'}}>
<div className="w-[1px] h-full bg-purple-500/50"></div>
<div className="absolute h-[30%] w-[6px] bg-purple-500 rounded-[1px] top-[40%]"></div>
</div>

<div className="w-2 h-[55%] flex justify-center relative group candle-anim" style={{animationDelay: '800ms'}}>
<div className="w-[1px] h-full bg-purple-500/50"></div>
<div className="absolute h-[40%] w-[6px] bg-purple-500 rounded-[1px] top-[20%]"></div>
</div>
<div className="w-2 h-[65%] flex justify-center relative group candle-anim" style={{animationDelay: '900ms'}}>
<div className="w-[1px] h-full bg-emerald-500/50"></div>
<div className="absolute h-[50%] w-[6px] bg-emerald-400 rounded-[1px] top-[25%] shadow-[0_0_15px_rgba(52,211,153,0.5)]">
</div>
</div>
<div className="w-2 h-[60%] flex justify-center relative group candle-anim" style={{animationDelay: '1000ms'}}>
<div className="w-[1px] h-full bg-purple-500/50"></div>
<div className="absolute h-[20%] w-[6px] bg-purple-500 rounded-[1px] top-[10%]"></div>
</div>
<div className="w-2 h-[50%] flex justify-center relative group candle-anim" style={{animationDelay: '1100ms'}}>
<div className="w-[1px] h-full bg-purple-500/50"></div>
<div className="absolute h-[60%] w-[6px] bg-purple-500 rounded-[1px] top-[20%]"></div>
</div>
<div className="w-2 h-[40%] flex justify-center relative group candle-anim" style={{animationDelay: '1200ms'}}>
<div className="w-[1px] h-full bg-emerald-500/50"></div>
<div className="absolute h-[30%] w-[6px] bg-emerald-400 rounded-[1px] top-[40%]"></div>
</div>

<div className="w-2 h-[45%] flex justify-center relative group candle-anim" style={{animationDelay: '1300ms'}}>
<div className="w-[1px] h-full bg-purple-500/50"></div>
<div className="absolute h-[50%] w-[6px] bg-purple-500 rounded-[1px] top-[20%]"></div>
</div>
<div className="w-2 h-[52%] flex justify-center relative group candle-anim" style={{animationDelay: '1400ms'}}>
<div className="w-[1px] h-full bg-emerald-500/50"></div>
<div className="absolute h-[20%] w-[6px] bg-emerald-400 rounded-[1px] top-[40%]"></div>
</div>
<div className="w-2 h-[48%] flex justify-center relative group candle-anim" style={{animationDelay: '1500ms'}}>
<div className="w-[1px] h-full bg-purple-500/50"></div>
<div className="bg-purple-500 w-[6px] h-[60%] rounded-[1px] absolute top-[10%]"></div>
</div>
<div className="w-2 h-[35%] flex justify-center relative group candle-anim" style={{animationDelay: '1600ms'}}>
<div className="w-[1px] h-full bg-emerald-500/50"></div>
<div className="absolute h-[40%] w-[6px] bg-emerald-400 rounded-[1px] top-[30%]"></div>
</div>
<div className="w-2 h-[55%] flex justify-center relative group candle-anim" style={{animationDelay: '1700ms'}}>
<div className="w-[1px] h-full bg-emerald-500/50"></div>
<div className="absolute h-[50%] w-[6px] bg-emerald-400 rounded-[1px] top-[10%] shadow-[0_0_15px_rgba(52,211,153,0.4)]">
</div>
</div>
<div className="w-2 h-[65%] flex justify-center relative group candle-anim" style={{animationDelay: '1800ms'}}>
<div className="w-[1px] h-full bg-emerald-500/50"></div>
<div className="absolute h-[30%] w-[6px] bg-emerald-400 rounded-[1px] top-[10%]"></div>
</div>
<div className="w-2 h-[62%] flex justify-center relative group candle-anim" style={{animationDelay: '1900ms'}}>
<div className="w-[1px] h-full bg-purple-500/50"></div>
<div className="absolute h-[20%] w-[6px] bg-purple-500 rounded-[1px] top-[40%]"></div>
</div>
<div className="w-2 h-[68%] flex justify-center relative group candle-anim" style={{animationDelay: '2000ms'}}>
<div className="w-[1px] h-full bg-emerald-500/50"></div>
<div className="absolute h-[40%] w-[6px] bg-emerald-400 rounded-[1px] top-[20%] shadow-[0_0_15px_rgba(52,211,153,0.4)]">
</div>
</div>
</div>

<div className="flex flex-col justify-between items-end h-full pb-8 pl-4 text-xs font-normal text-neutral-500">
<span className="font-geist" style={{}}>40k</span>
<span className="font-geist" style={{}}>35k</span>
<span className="font-geist" style={{}}>30k</span>
<span className="font-geist" style={{}}>25k</span>
<span className="font-geist" style={{}}>20k</span>
</div>
</div>

<div className="absolute bottom-0 left-0 right-10 flex justify-between text-xs font-normal text-neutral-500 px-2">
<span className="font-geist" style={{}}>8:00AM</span>
<span className="font-geist" style={{}}>9:00AM</span>
<span className="font-geist" style={{}}>10:00AM</span>
<span className="font-geist" style={{}}>11:00AM</span>
<span className="font-geist" style={{}}>12:00AM</span>
<span className="font-geist" style={{}}>01:00PM</span>
<span className="font-geist" style={{}}>02:00PM</span>
</div>
</div>
</div>
</div>
</section>

<section className="fade-in-up -translate-y-6 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll bg-gradient-to-br from-white/10 via-white/0 to-white/10 w-full max-w-[1400px] rounded-3xl mt-24 mr-auto mb-24 ml-auto pt-8 pr-8 pb-8 pl-8 relative">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-16">
<div className="">
<div className="flex items-center gap-2 mb-4">
<span className="w-6 h-[1px] bg-emerald-500"></span>
<p className="text-sm font-semibold text-emerald-400 tracking-wide uppercase font-geist">Platform Features</p>
</div>
<h2 className="sm:text-5xl text-3xl text-white tracking-tight font-light font-geist leading-[1.1]">
              Built for modernsoftware businesses
            </h2>
<p className="sm:text-lg max-w-[60ch] text-base text-slate-400 mt-6 font-geist font-light">
              Ledger provides the building blocks for B2B and B2C SaaS. From checkout to tax remittance, we handle the heavy lifting.
            </p>
</div>
</div>
<div className="font-geist space-y-6">

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="relative lg:col-span-2 group border border-white/10 md:p-10 overflow-hidden bg-[#0A0B0E] rounded-3xl pt-8 pr-8 pb-8 pl-8 shadow-2xl hover:border-white/20 transition-all duration-500">
<div className="absolute -right-20 -top-20 h-96 w-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-emerald-500/20 transition-all duration-500"></div>
<div className="flex items-center gap-4 mb-8 relative z-10">
<div className="h-12 w-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
<iconify-icon className="text-emerald-400 text-2xl" icon="lucide:shield-check"></iconify-icon>
</div>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">Enterprise Compliance</h3>
</div>
<p className="text-slate-400 max-w-2xl text-lg font-light mb-10 relative z-10">
                Automatic tax handling for 135+ currencies. We act as the Merchant of Record, handling VAT, GST, and sales tax liability so you don't have to.
              </p>

<div className="grid grid-cols-2 sm:grid-cols-4 gap-6 relative z-10">
<div className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-colors">
<iconify-icon className="text-slate-400 text-2xl" icon="lucide:globe-2"></iconify-icon>
<span className="text-xs font-medium text-slate-300">Global Tax</span>
</div>
<div className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-colors">
<iconify-icon className="text-slate-400 text-2xl" icon="lucide:lock"></iconify-icon>
<span className="text-xs font-medium text-slate-300">SOC2 Type II</span>
</div>
<div className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-colors">
<iconify-icon className="text-slate-400 text-2xl" icon="lucide:file-check"></iconify-icon>
<span className="text-xs font-medium text-slate-300">Invoicing</span>
</div>
<div className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-colors">
<iconify-icon className="text-slate-400 text-2xl" icon="lucide:scale"></iconify-icon>
<span className="text-xs font-medium text-slate-300">Liability</span>
</div>
</div>
</div>

<div className="lg:col-span-1">
<div className="group relative overflow-hidden h-full bg-[#0A0B0E] border border-white/10 rounded-3xl shadow-lg hover:border-emerald-500/30 transition-all duration-500">
<div className="flex flex-col h-full pt-8 pr-8 pb-8 pl-8">

<div className="relative h-48 w-full mb-8 rounded-2xl bg-gradient-to-br from-[#0f1115] to-[#000000] border border-white/5 overflow-hidden shadow-2xl group">

<div className="absolute inset-5 font-mono text-[11px] leading-relaxed transition-opacity duration-700" id="terminal-logs-aura" style={{opacity: '1'}}><div className="flex items-center flex-wrap min-h-[1.5em]"><span className="text-slate-500">&gt;</span><span className="w-1.5 h-3 bg-emerald-500 ml-1 opacity-100 inline-block align-middle shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span></div></div>

<div className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-sm z-20">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs font-medium text-emerald-400">99.99% Uptime</span>
</div>

<div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-20 pointer-events-none"></div>
</div>
<div className="mt-auto">
<div className="flex items-center gap-3 mb-3">
<iconify-icon className="text-emerald-400 text-xl" icon="lucide:zap"></iconify-icon>
<h3 className="text-xl font-semibold text-white tracking-tight">Instant Webhooks</h3>
</div>
<p className="text-sm text-slate-400 font-light leading-relaxed">
        Real-time event delivery for subscriptions, payments, and disputes. Build distinct workflows with our strictly typed API.
    </p>
</div>

</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-1">
<article className="relative bg-[#0A0B0E] border border-white/10 rounded-3xl p-8 h-full hover:border-white/20 transition-all">
<div className="flex items-center justify-between mb-2">
<h3 className="text-white text-lg font-semibold tracking-tight">Checkout Experience</h3>
<span className="text-[10px] uppercase font-bold tracking-wider text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-md border border-emerald-500/20">Optimized</span>
</div>
<p className="text-sm text-slate-400 font-light mb-6">Drop-in checkout overlay or hosted pages with 20+ payment methods.</p>
<div className="space-y-3">
<div className="flex items-center justify-between rounded-xl bg-white/[0.03] border border-white/5 px-4 py-3 group hover:border-emerald-500/20 transition-colors">
<span className="text-sm text-slate-300">Apple Pay &amp; Google Pay</span>
<iconify-icon className="text-emerald-500 text-sm" icon="lucide:check"></iconify-icon>
</div>
<div className="flex items-center justify-between rounded-xl bg-white/[0.03] border border-white/5 px-4 py-3 group hover:border-emerald-500/20 transition-colors">
<span className="text-sm text-slate-300">Local Payment Methods</span>
<iconify-icon className="text-emerald-500 text-sm" icon="lucide:check"></iconify-icon>
</div>
<div className="flex items-center justify-between rounded-xl bg-white/[0.03] border border-white/5 px-4 py-3 group hover:border-emerald-500/20 transition-colors">
<span className="text-sm text-slate-300">Fraud Protection</span>
<iconify-icon className="text-emerald-500 text-sm" icon="lucide:check"></iconify-icon>
</div>
</div>
</article>
</div>

<div className="lg:col-span-2">
<aside className="overflow-hidden flex flex-col hover:border-white/20 transition-all bg-[#0A0B0E] h-full border-white/10 border rounded-3xl pt-8 pr-8 pb-8 pl-8 relative">
<style>
                  @keyframes barCycle {
                    0% { transform: scaleY(0); opacity: 0; }
                    20% { transform: scaleY(1); opacity: 1; }
                    80% { transform: scaleY(1); opacity: 1; }
                    95% { transform: scaleY(0); opacity: 0; }
                    100% { transform: scaleY(0); opacity: 0; }
                  }
                  .animate-bar-loop {
                    animation: barCycle 6s cubic-bezier(0.33, 1, 0.68, 1) infinite;
                    transform-origin: bottom;
                  }
                </style>
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
<h4 className="text-2xl font-semibold text-white tracking-tight">
                    Revenue Recovery &amp; Dunning
                    </h4>
<div className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5">
<iconify-icon className="text-emerald-400" icon="lucide:trending-up"></iconify-icon>
<span className="text-xs text-slate-300 font-medium">+15% Recovery Rate</span>
</div>
</div>
<p className="text-slate-400 max-w-lg font-light mb-8">
                  Smart retries, card updaters, and automated dunning emails help you recover failed payments and reduce involuntary churn without lifting a finger.
                </p>

<div className="mt-auto h-32 w-full flex items-end gap-2 opacity-80">
<div className="w-full bg-slate-800/50 rounded-t-sm h-[30%] animate-bar-loop" style={{animationDelay: '0ms'}}></div>
<div className="w-full bg-slate-800/50 rounded-t-sm h-[45%] animate-bar-loop" style={{animationDelay: '100ms'}}></div>
<div className="w-full bg-slate-800/50 rounded-t-sm h-[35%] animate-bar-loop" style={{animationDelay: '200ms'}}></div>
<div className="w-full bg-slate-800/50 rounded-t-sm h-[50%] animate-bar-loop" style={{animationDelay: '300ms'}}></div>

<div className="w-full h-[75%] relative group cursor-pointer">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-emerald-500 text-black text-[10px] font-bold px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">Recovered</div>
<div className="w-full h-full bg-gradient-to-t from-emerald-900/50 to-emerald-500 rounded-t-sm animate-bar-loop" style={{animationDelay: '400ms'}}></div>
</div>
<div className="w-full bg-emerald-500/20 rounded-t-sm h-[60%] animate-bar-loop" style={{animationDelay: '500ms'}}></div>
<div className="w-full bg-emerald-500/30 rounded-t-sm h-[80%] animate-bar-loop" style={{animationDelay: '600ms'}}></div>
</div>
</aside>
</div>
</div>
</div>
</section>

<section className="fade-in-up -translate-y-6 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll bg-gradient-to-br from-white/10 via-white/0 to-white/10 w-full max-w-[1400px] rounded-3xl mt-24 mr-auto mb-24 ml-auto pt-8 pr-8 pb-8 pl-8 relative">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-16 gap-x-4 gap-y-4">
<div className="">
<div className="flex items-center gap-2 mb-4">
<span className="w-6 h-[1px] bg-emerald-500"></span>
<p className="uppercase text-sm font-semibold text-emerald-400 tracking-wide font-geist">TESTIMONIALS</p>
</div>
<h2 className="sm:text-5xl leading-[1.1] text-3xl font-light text-white tracking-tight font-geist">Trusted by financial teams</h2>
<p className="sm:text-lg text-base font-light text-slate-400 font-geist max-w-[60ch] mt-6">Real feedback from analysts, traders, and teams using our platform to make faster, data-driven decisions</p>
</div>
</div>
<div className="overflow-hidden relative">


<div className="flex flex-col md:block md:h-[650px] group/container w-full max-w-[1200px] mr-auto ml-auto pt-12 pr-4 pb-12 pl-4 relative perspective-distant" id="testimonials-container">

<div className="hidden md:flex -translate-x-1/2 gap-6 z-40 absolute bottom-8 left-1/2">
<button className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300 bg-[#0A0B0E] hover:bg-white/5 hover:border-white/20 text-neutral-400 hover:text-white hover:scale-105 active:scale-95 shadow-lg group" onclick="handleTestimonialSwipe(-1)">
<svg className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m15 18-6-6 6-6"></path>
</svg>
</button>
<button className="w-14 h-14 rounded-full border border-emerald-500/30 flex items-center justify-center hover:bg-emerald-500/10 hover:border-emerald-500 transition-all duration-300 bg-[#0A0B0E] shadow-lg shadow-emerald-500/10 hover:scale-105 active:scale-95 text-emerald-400 group" onclick="handleTestimonialSwipe(1)">
<svg className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</button>
</div>

<div className="transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] md:absolute md:top-1/2 md:left-1/2 w-full p-8 md:w-[400px] mb-6 md:mb-0 border bg-[#0A0B0E] border-white/10 shadow-2xl md:-translate-x-[125%] md:-translate-y-[60%] md:-rotate-[6deg] md:scale-[0.9] z-10 opacity-100 md:opacity-40 hover:md:opacity-100 hover:z-20 hover:border-white/20 rounded-[2rem]" id="testimonial-card-1">
<div className="flex items-center gap-1 mb-6 text-emerald-500/40">
<svg className="w-4 h-4" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="w-4 h-4" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="w-4 h-4" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="w-4 h-4" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="w-4 h-4" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
</div>
<blockquote className="leading-relaxed text-lg text-slate-300 mb-8 font-geist font-light">
                "Prism has completely transformed how we ship code. The visibility
                into our pipeline is unmatched."
            </blockquote>
<div className="flex items-center gap-4 pt-4 border-t border-white/5">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-emerald-400 text-sm ring-1 ring-white/10 font-geist font-medium">
                    SJ
                </div>
<div>
<div className="text-sm text-white font-geist font-medium">
                        Sarah Jenkins
                    </div>
<div className="text-xs text-neutral-500 font-geist">
                        CTO at TechFlow
                    </div>
</div>
</div>
</div>

<div className="transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] md:absolute md:top-1/2 md:left-1/2 md:w-[460px] md:mb-0 md:-translate-x-1/2 md:-translate-y-[65%] md:rotate-0 md:scale-100 z-30 hover:border-emerald-500/30 bg-[#121317] opacity-100 w-full border-emerald-500/20 border rounded-[2.5rem] mb-6 pt-10 pr-10 pb-10 pl-10 shadow-[0_0_40px_-10px_rgba(16,185,129,0.1)]" id="testimonial-card-2">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-50"></div>
<div className="flex items-center justify-between mb-8">
<div className="flex items-center gap-1.5 text-emerald-400">
<svg className="w-5 h-5 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]" fill="currentColor" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="w-5 h-5 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]" fill="currentColor" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="w-5 h-5 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]" fill="currentColor" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="w-5 h-5 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]" fill="currentColor" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="w-5 h-5 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]" fill="currentColor" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
</div>
<span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs uppercase border border-emerald-500/20 font-geist font-bold tracking-wider">
                    Featured
                </span>
</div>
<blockquote className="text-[1.35rem] text-white mb-10 leading-snug font-geist font-light">
                "The feature flags integration is a game changer. We can test on
                production with zero anxiety."
            </blockquote>
<div className="flex items-center gap-5 pt-6 border-t border-white/5">
<div className="relative">
<div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-white text-base ring-2 ring-emerald-500/20 shadow-md font-geist font-medium">
                        MK
                    </div>
<div className="absolute -bottom-1 -right-1 bg-emerald-500 w-4 h-4 rounded-full border-[3px] border-[#121317]">
</div>
</div>
<div className="">
<div className="text-base text-white font-geist font-medium">
                        Michael Klein
                    </div>
<div className="text-sm text-neutral-500 font-geist">
                        Lead Engineer at Vercel
                    </div>
</div>
<div className="ml-auto md:opacity-100 opacity-0 transition-opacity">
<svg className="text-neutral-700" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
<path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
</svg>
</div>
</div>
</div>

<div className="transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] md:absolute md:top-1/2 md:left-1/2 w-full p-8 md:w-[400px] mb-6 md:mb-0 border bg-[#0A0B0E] border-white/10 shadow-2xl md:translate-x-[25%] md:-translate-y-[60%] md:rotate-[6deg] md:scale-[0.9] z-10 opacity-100 md:opacity-40 hover:md:opacity-100 hover:z-20 hover:border-white/20 rounded-[2rem]" id="testimonial-card-3">
<div className="flex items-center gap-1 mb-6 text-emerald-500/40">
<svg className="w-4 h-4" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="w-4 h-4" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="w-4 h-4" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="w-4 h-4" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="w-4 h-4" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
</div>
<blockquote className="leading-relaxed text-lg text-slate-300 mb-8 font-geist font-light">
                "Simply the best tool for tracking velocity. It helped us identify
                bottlenecks we didn't know existed."
            </blockquote>
<div className="flex items-center gap-4 pt-4 border-t border-white/5">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-emerald-400 text-sm ring-1 ring-white/10 font-geist font-medium">
                    EL
                </div>
<div>
<div className="text-sm text-white font-geist font-medium">
                        Emily Liu
                    </div>
<div className="text-xs text-neutral-500 font-geist">
                        VP Eng at Stripe
                    </div>
</div>
</div>
</div>
</div>


</div>
</section>

<section className="fade-in-up -translate-y-6 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll bg-gradient-to-br from-white/10 via-white/0 to-white/10 w-full max-w-[1400px] rounded-3xl mt-24 mr-auto mb-24 ml-auto pt-8 pr-8 pb-8 pl-8 relative">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between animate-[slideUp_0.6s_ease-out] mb-12">
<div className="">
<div className="flex mb-4 gap-x-2 gap-y-2 items-center">
<span className="w-6 h-[1px] bg-emerald-500"></span>
<p className="uppercase text-sm font-semibold text-emerald-400 tracking-wide font-geist">Pricing</p>
</div>
<h2 className="sm:text-5xl leading-[1.1] text-3xl font-light text-white tracking-tight font-geist">
        Start scaling today
      </h2>
<p className="sm:text-lg max-w-[60ch] text-base text-slate-400 mt-6 font-geist font-light">
        Simple, transparent pricing for growing software businesses. No hidden fees.
      </p>
</div>

<div className="flex items-center gap-3 select-none">
<span className="text-sm text-white font-geist transition-colors duration-300" id="labelMonthly">Monthly</span>
<button className="w-12 h-6 rounded-full bg-white/10 border border-white/10 relative transition-colors hover:border-emerald-500/50 focus:outline-none cursor-pointer" id="billingToggleBtn" onclick="togglePricing()">
<div className="absolute top-1 left-1 w-4 h-4 rounded-full bg-emerald-500 shadow-sm transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)]" id="billingKnob"></div>
</button>
<div className="flex items-center">
<span className="text-sm text-neutral-400 font-geist font-medium transition-colors duration-300" id="labelAnnual">Yearly</span>
<span className="text-emerald-500 text-xs font-semibold ml-1.5 bg-emerald-500/10 border border-emerald-500/20 px-1.5 py-0.5 rounded-md">-20%</span>
</div>
</div>
</div>
<div className="overflow-hidden animate-[slideUp_0.6s_ease-out_0.1s_both] bg-[#0A0B0E] border border-white/10 rounded-2xl shadow-2xl relative group" id="pricingCard" onmousemove="updateCursor(event)" style={{'--x': '724px', '--y': '330.90625px'}}>

<div className="pointer-events-none absolute -inset-px p-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100 z-10" style="background: radial-gradient(600px circle at var(--x, 0px) var(--y, 0px), rgba(16, 185, 129, 0.4), transparent 40%); 
                -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); 
                mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); 
                -webkit-mask-composite: xor; 
                mask-composite: exclude;">
</div>

<div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100 z-0" style={{background: 'radial-gradient(800px circle at var(--x, 0px) var(--y, 0px), rgba(255, 255, 255, 0.03), transparent 40%)'}}>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 relative z-10">

<div className="flex flex-col bg-[#121317]/80 h-full border-r border-white/5 pt-8 pr-8 pb-8 pl-8 relative backdrop-blur-sm">
<div className="absolute top-0 right-0 p-px rounded-bl-xl rounded-tr-xl bg-gradient-to-br from-white/10 to-white/0 overflow-hidden"></div>
<div className="mb-8">
<h3 className="text-xl font-medium text-white font-geist mb-2">Pro Infrastructure</h3>
<p className="text-sm text-neutral-400 font-geist leading-relaxed">Everything you need to monetize your SaaS globally without the headache.</p>
</div>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-5xl font-light text-white font-geist tracking-tight flex items-start">
              $<span className="price-value tabular-nums transition-all duration-300" data-annual="279" data-monthly="29" id="priceValue">29</span>
</span>
<span className="text-neutral-500 font-geist transition-opacity duration-300" id="billingPeriod">/month</span>
</div>
<div className="mt-auto pt-8 border-t border-white/5">
<div className="flex items-center gap-3 mb-2">
<div className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
<span className="text-xs text-emerald-400 font-medium uppercase tracking-wider font-geist">Includes</span>
</div>
<p className="text-sm text-neutral-300 font-geist">Full access to the Ledger API, Dashboard, and 24/7 priority support.</p>
</div>
</div>

<div className="lg:p-8 pt-6 pr-6 pb-6 pl-6 flex flex-col justify-between bg-gradient-to-br from-white/[0.02] to-transparent">
<div className="">
<div className="text-sm font-medium text-white mb-6 font-geist">What's included in Pro:</div>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm font-geist text-neutral-300">
<div className="mt-0.5 rounded-full bg-emerald-500/10 p-1">
<svg className="text-emerald-500" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
<span className="">Merchant of Record (MoR) status</span>
</li>
<li className="flex items-start gap-3 text-sm font-geist text-neutral-300">
<div className="mt-0.5 rounded-full bg-emerald-500/10 p-1">
<svg className="text-emerald-500" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
<span className="">Automatic tax handling in 135+ countries</span>
</li>
<li className="flex items-start gap-3 text-sm font-geist text-neutral-300">
<div className="mt-0.5 rounded-full bg-emerald-500/10 p-1">
<svg className="text-emerald-500" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
<span className="">Unlimited subscription tiers &amp; products</span>
</li>
<li className="flex items-start gap-3 text-sm font-geist text-neutral-300">
<div className="mt-0.5 rounded-full bg-emerald-500/10 p-1">
<svg fill="none" height="12" text-emerald-500"="" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
<span className="">Smart revenue recovery &amp; dunning</span>
</li>
<li className="flex items-start gap-3 text-sm font-geist text-neutral-300">
<div className="mt-0.5 rounded-full bg-emerald-500/10 p-1">
<svg className="text-emerald-500" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
<span className="">Instant webhooks &amp; API access</span>
</li>
<li className="flex items-start gap-3 text-sm font-geist text-neutral-300">
<div className="mt-0.5 rounded-full bg-emerald-500/10 p-1">
<svg className="text-emerald-500" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
<span className="">Global fraud protection</span>
</li>
</ul>
</div>
<div className="mt-10 flex items-center justify-between gap-6 border-t border-white/5 pt-8">
<div className="">
<div className="flex items-center -space-x-2">
<div className="h-8 w-8 rounded-full ring-2 ring-[#0A0B0E] bg-neutral-700 bg-[url(https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&amp;h=64&amp;fit=crop&amp;crop=faces)] bg-cover"></div>
<div className="h-8 w-8 rounded-full ring-2 ring-[#0A0B0E] bg-neutral-700 bg-[url(https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=64&amp;h=64&amp;fit=crop&amp;crop=faces)] bg-cover"></div>
<div className="h-8 w-8 rounded-full ring-2 ring-[#0A0B0E] bg-neutral-700 bg-[url(https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&amp;h=64&amp;fit=crop&amp;crop=faces)] bg-cover"></div>
</div>
<div className="text-[10px] text-neutral-500 mt-2 font-geist">Joined by 4,000+ developers</div>
</div>
<button className="flex gap-2 ring-1 ring-white/10 hover:bg-white/10 transition-all text-sm text-white font-geist bg-white/5 rounded-full py-3 px-6 items-center justify-center font-medium shadow-lg hover:shadow-emerald-500/10 hover:border-emerald-500/30">
            Get started
            <svg className="lucide lucide-arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>
</div>

</section>

<section className="[animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll max-w-[1400px] z-10 mt-24 mr-auto ml-auto pb-6">
<div className="overflow-hidden bg-[#0A0B0E] border-white/10 border rounded-3xl relative">

<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.1),transparent_40%)]"></div>
<div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-emerald-950/20 to-transparent"></div>
</div>
<div className="md:p-12 lg:p-16 flex flex-col z-10 font-geist pt-8 pr-8 pb-8 pl-8 relative">

<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16 md:mb-24">

<div className="lg:col-span-4 flex flex-col gap-6">
<div className="flex flex-col gap-2">
<span className="text-emerald-400 font-semibold text-xs tracking-widest uppercase">Contact</span>
<h3 className="text-slate-300 text-lg font-medium">Sales &amp; Enterprise</h3>
</div>
<a className="text-3xl text-white hover:text-emerald-400 transition-colors tracking-tight font-light" href="mailto:hello@ledger.com">hello@ledger.com</a>
<div className="flex items-center gap-3 mt-2">
<a className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors border border-white/5 group" href="#">
<svg className="lucide lucide-twitter transition-transform group-hover:scale-110" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors border border-white/5 group" href="#">
<svg className="lucide lucide-github transition-transform group-hover:scale-110" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
<a className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors border border-white/5 group" href="#">
<svg className="lucide lucide-linkedin transition-transform group-hover:scale-110" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
</div>
</div>

<div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">

<div className="flex flex-col gap-4">
<span className="text-white font-medium text-sm">Product</span>
<ul className="flex flex-col gap-3 text-sm text-slate-500">
<li><a className="hover:text-emerald-400 transition-colors" href="#">Payments</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Billing</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Tax &amp; Invoicing</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Checkout</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Pricing</a></li>
</ul>
</div>

<div className="flex flex-col gap-4">
<span className="text-white font-medium text-sm">Resources</span>
<ul className="flex flex-col gap-3 text-sm text-slate-500">
<li className=""><a className="hover:text-emerald-400 transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">API Reference</a></li>
<li className=""><a className="hover:text-emerald-400 transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Help Center</a></li>
<li className=""><a className="hover:text-emerald-400 transition-colors" href="#">Changelog</a></li>
</ul>
</div>

<div className="flex flex-col gap-4">
<span className="text-white font-medium text-sm">Company</span>
<ul className="flex flex-col gap-3 text-sm text-slate-500">
<li className=""><a className="hover:text-emerald-400 transition-colors" href="#">About</a></li>
<li className=""><a className="hover:text-emerald-400 transition-colors" href="#">Customers</a></li>
<li className=""><a className="hover:text-emerald-400 transition-colors" href="#">Blog</a></li>
<li className=""><a className="hover:text-emerald-400 transition-colors" href="#">Careers</a></li>
<li className=""><a className="hover:text-emerald-400 transition-colors" href="#">Contact</a></li>
</ul>
</div>

<div className="flex flex-col gap-4">
<span className="text-white font-medium text-sm">Legal</span>
<ul className="flex flex-col gap-3 text-sm text-slate-500">
<li className=""><a className="hover:text-emerald-400 transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Terms</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Cookie Policy</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Licenses</a></li>
</ul>
</div>
</div>
</div>

<div className="flex flex-col gap-8 pt-8 border-t border-white/5">

<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs text-slate-500">
<div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
<span>© 2025 Ledger Financial Infrastructure Inc.</span>
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-slate-400">All systems operational</span>
</div>
</div>
<div className="flex items-center gap-6 opacity-60">
<span>San Francisco</span>
<span>London</span>
<span>Singapore</span>
</div>
</div>

<div className="w-full pt-8">
<p className="text-[13vw] leading-[0.75] font-bold text-white/5 tracking-tighter w-full select-none text-center lg:text-left pointer-events-none">
              LEDGER
           </p>
</div>
</div>
</div>
</div>
</section>
</div>

    </>
  );
}
