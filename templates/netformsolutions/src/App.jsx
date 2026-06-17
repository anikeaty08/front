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



  (function () {
    function ensureInit() {
      if (window.UnicornStudio && window.UnicornStudio.init) {
        if (!window.UnicornStudio.isInitialized) {
          window.UnicornStudio.init();
          window.UnicornStudio.isInitialized = true;
        }
        return true;
      }
      return false;
    }

    if (ensureInit()) return;

    if (!window.UnicornStudio) window.UnicornStudio = { isInitialized: false };

    var existing = document.querySelector('script[data-us-loader="1"]');
    if (existing) {
      // loader is coming, retry a few times
      var tries = 0;
      var t = setInterval(function () {
        tries++;
        if (ensureInit() || tries > 40) clearInterval(t);
      }, 100);
      return;
    }

    var s = document.createElement("script");
    s.setAttribute("data-us-loader", "1");
    s.src =
      "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.0-1/dist/unicornStudio.umd.js";
    s.onload = function () {
      ensureInit();
    };
    (document.head || document.body).appendChild(s);
  })();



        // Simple intersection observer for reveal animations on scroll
        document.addEventListener("DOMContentLoaded", () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-reveal');
                        entry.target.style.opacity = '1';
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px"
            });

            // Target elements that should reveal on scroll (excluding hero which animates on load)
            document.querySelectorAll('section:not(:first-of-type) h2, section:not(:first-of-type) p, section:not(:first-of-type) .grid > div, section:not(:first-of-type) form').forEach((el) => {
                el.style.opacity = '0';
                // Reset animation property so it triggers via class addition
                el.style.animation = 'none';
                
                // Add tiny delay classes randomly for staggered feel
                const delays = ['', 'delay-100', 'delay-200'];
                const randomDelay = delays[Math.floor(Math.random() * delays.length)];
                if(randomDelay) el.classList.add(randomDelay);

                // Override class to trigger via observer
                const originalClasses = el.className;
                el.className = originalClasses.replace('animate-reveal', '');
                
                observer.observe(el);
            });
            
            // Re-enable animation for observer
            const style = document.createElement('style');
            style.innerHTML = `
                .animate-reveal {
                    animation: fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards !important;
                }
            `;
            document.head.appendChild(style);
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
<div className="absolute inset-0 opacity-60 mix-blend-screen">
<div className="absolute inset-0 w-full h-full" data-us-dpi="1.5" data-us-fps="60" data-us-lazyload="true" data-us-production="true" data-us-project="0bj47BRhqOMrgLlpMNC0"></div>
</div>
</div>
</div>

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>

<nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-t-0 border-l-0 border-r-0">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-medium tracking-tighter text-text-primary hover:text-white transition-colors" href="#">
                NETFORM
            </a>
<div className="flex items-center gap-6">
<a className="hidden md:block text-sm font-light text-text-muted hover:text-text-primary transition-colors" href="#pricing">Pricing</a>
<a className="text-bg-base hover:bg-white transition-colors text-sm font-medium text-slate-50 rounded-full px-4 py-2" href="#contact">
                    Start Project
                </a>
</div>
</div>
</nav>
<main className="">

<section className="md:pt-56 md:pb-32 flex flex-col min-h-screen text-center pt-40 pr-6 pb-24 pl-6 relative items-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-xs font-medium text-accent mb-8 animate-reveal">
<span className="relative flex size-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
<span className="relative inline-flex rounded-full size-2 bg-accent"></span>
</span>
                Available for new projects
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tightest text-balance text-text-primary animate-reveal delay-100 max-w-5xl">
                No website? <br className="hidden md:block"/>
                Fixed in 48 hours.
            </h1>
<p className="mt-6 text-lg md:text-xl font-light text-text-muted text-balance max-w-2xl animate-reveal delay-200">
                Fast, affordable, zero hassle. We build premium, high-converting websites so you can focus on running your business.
            </p>
<div className="mt-10 flex flex-col sm:flex-row items-center gap-4 animate-reveal delay-300 w-full sm:w-auto">
<a className="w-full sm:w-auto px-6 py-3 rounded-lg bg-accent text-bg-base font-medium text-sm hover:bg-accent-hover transition-colors flex items-center justify-center gap-2" href="#contact">
                    Get your website
                    <iconify-icon className="text-lg" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-6 py-3 rounded-lg glass-panel text-text-primary font-medium text-sm hover:bg-bg-surface-hover transition-colors flex items-center justify-center" href="#process">
                    See how it works
                </a>
</div>

<div className="relative w-full max-w-4xl mt-24 animate-reveal delay-500 perspective-1000">
<div className="absolute inset-0 bg-gradient-to-b from-accent/10 to-transparent blur-3xl -z-10 rounded-full scale-90"></div>
</div>
</section>

<section className="md:py-32 border-border-subtle overflow-hidden border-t pt-24 pr-6 pb-24 pl-6 relative">
<div className="max-w-4xl mx-auto flex flex-col gap-8 md:gap-12">
<h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-text-primary delay-100 delay-200" style={{animation: 'auto ease 0s 1 normal none running none'}}>
                    No website.
                </h2>
<h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-text-muted delay-100 delay-200" style={{animation: 'auto ease 0s 1 normal none running none'}}>
                    Outdated website.
                </h2>
<h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-text-dim delay-100 delay-200" style={{animation: 'auto ease 0s 1 normal none running none'}}>
                    Losing customers.
                </h2>
<div className="w-12 h-px bg-border-strong my-4 md:my-8"></div>
<p className="text-xl md:text-2xl font-light text-text-primary text-balance max-w-2xl leading-relaxed delay-200 delay-100" style={{animation: 'auto ease 0s 1 normal none running none'}}>
                    Most agencies take months to build a site and overcomplicate the process. <br/>
                    We think that's broken.
                </p>
</div>
</section>

<section className="md:py-32 border-border-subtle text-center opacity-100 mix-blend-normal border-t pt-24 pr-6 pb-24 pl-6">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-balance delay-100 delay-200" style={{animation: 'auto ease 0s 1 normal none running none'}}>
                    We handle everything.<br/>
<span className="text-accent">You go live in 1–2 days.</span>
</h2>
<p className="mt-6 text-lg font-light text-text-muted text-balance mx-auto max-w-xl delay-100 delay-200" style={{animation: 'auto ease 0s 1 normal none running none'}}>
                    Skip the endless meetings and technical jargon. We design, build, and deploy your premium presence while you sleep.
                </p>
</div>
</section>

<section className="md:py-32 border-border-subtle border-t pt-24 pr-6 pb-24 pl-6" id="process">
<div className="max-w-6xl mx-auto">
<div className="mb-16">
<h3 className="text-sm font-medium tracking-tight text-accent uppercase mb-3">The Process</h3>
<h2 className="text-3xl md:text-4xl font-medium tracking-tighter delay-200 delay-100" style={{animation: 'auto ease 0s 1 normal none running none'}}>Effortless execution.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 relative">

<div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-px bg-border-strong -z-10 delay-100 delay-200" style={{animation: 'auto ease 0s 1 normal none running none'}}></div>

<div className="bg-bg-base border border-border-subtle rounded-xl p-8 hover:border-border-strong transition-colors relative group delay-100 delay-200" style={{animation: 'auto ease 0s 1 normal none running none'}}>
<div className="size-12 rounded-full bg-bg-surface border border-border-subtle flex items-center justify-center mb-6 text-text-primary group-hover:text-accent group-hover:border-accent/30 transition-colors">
<iconify-icon className="text-2xl" icon="solar:pen-new-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-xl font-medium tracking-tight mb-3">1. Tell us what you need</h4>
<p className="text-sm font-light text-text-muted leading-relaxed delay-100 delay-200" style={{animation: 'auto ease 0s 1 normal none running none'}}>
                            Fill out a brief 5-minute form. Give us your copy, logo, and a rough idea of what you want.
                        </p>
</div>

<div className="bg-bg-base border border-border-subtle rounded-xl p-8 hover:border-border-strong transition-colors relative group delay-100 delay-200" style={{animation: 'auto ease 0s 1 normal none running none'}}>
<div className="size-12 rounded-full bg-bg-surface border border-border-subtle flex items-center justify-center mb-6 text-text-primary group-hover:text-accent group-hover:border-accent/30 transition-colors">
<iconify-icon className="text-2xl" icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-xl font-medium tracking-tight mb-3">2. We design &amp; build</h4>
<p className="text-sm font-light text-text-muted leading-relaxed delay-200 delay-100" style={{animation: 'auto ease 0s 1 normal none running none'}}>
                            Our designers craft a bespoke, high-converting layout tailored entirely to your brand.
                        </p>
</div>

<div className="bg-bg-base border border-border-subtle rounded-xl p-8 hover:border-border-strong transition-colors relative group delay-200 delay-100" style={{animation: 'auto ease 0s 1 normal none running none'}}>
<div className="size-12 rounded-full bg-bg-surface border border-border-subtle flex items-center justify-center mb-6 text-text-primary group-hover:text-accent group-hover:border-accent/30 transition-colors">
<iconify-icon className="text-2xl" icon="solar:rocket-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-xl font-medium tracking-tight mb-3">3. You launch</h4>
<p className="text-sm font-light text-text-muted leading-relaxed delay-100 delay-200" style={{animation: 'auto ease 0s 1 normal none running none'}}>
                            Within 48 hours, we hand over the keys to a live, lightning-fast website ready for traffic.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 border-t border-border-subtle bg-bg-surface overflow-hidden">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16 md:mb-24">
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-balance delay-100 delay-200" style={{animation: 'auto ease 0s 1 normal none running none'}}>The difference is intentional.</h2>
<p className="mt-4 text-lg font-light text-text-muted delay-100 delay-200" style={{animation: 'auto ease 0s 1 normal none running none'}}>Stop settling for templates that ignore hierarchy.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">

<div className="flex flex-col gap-4 delay-200 delay-100" style={{animation: 'auto ease 0s 1 normal none running none'}}>
<span className="text-xs font-medium tracking-tight text-text-dim uppercase ml-2">Before (Generic)</span>
<div className="rounded-xl border border-border-strong bg-bg-base p-6 aspect-video flex flex-col justify-center opacity-60 grayscale filter">
<div className="flex flex-col gap-4 items-center text-center">
<div className="w-full max-w-[200px] h-6 bg-border-strong rounded-sm"></div>
<div className="w-full max-w-[300px] h-3 bg-border-subtle rounded-sm"></div>
<div className="w-full max-w-[250px] h-3 bg-border-subtle rounded-sm"></div>
<div className="w-24 h-8 bg-border-strong mt-4 rounded-sm"></div>
</div>
</div>
</div>

<div className="flex flex-col gap-4 delay-200 delay-100" style={{animation: 'auto ease 0s 1 normal none running none'}}>
<span className="text-xs font-medium tracking-tight text-accent uppercase ml-2">After (Netform)</span>
<div className="rounded-xl border border-border-subtle bg-bg-base p-6 aspect-video flex flex-col justify-center relative shadow-[0_0_40px_-10px_rgba(67,120,255,0.15)] ring-1 ring-accent/20">

<div className="flex flex-col gap-5 items-start text-left max-w-[80%] mx-auto w-full">
<div className="inline-flex h-5 w-20 bg-accent/10 rounded-full border border-accent/20"></div>
<div className="w-full h-8 bg-text-primary rounded-sm shadow-sm"></div>
<div className="w-3/4 h-8 bg-text-primary rounded-sm shadow-sm -mt-2"></div>
<div className="w-full h-2 bg-text-dim rounded-sm mt-2"></div>
<div className="w-5/6 h-2 bg-text-dim rounded-sm"></div>
<div className="w-28 h-10 bg-accent mt-4 rounded-md shadow-lg shadow-accent/20"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 border-t border-border-subtle">
<div className="max-w-4xl mx-auto flex flex-col gap-6 md:gap-8">
<h2 className="text-4xl md:text-7xl font-medium tracking-tightest text-text-primary delay-100 delay-200" style={{animation: 'auto ease 0s 1 normal none running none'}}>
                    Live in 48 hours.
                </h2>
<h2 className="text-4xl md:text-7xl font-medium tracking-tightest text-text-muted delay-200 delay-100" style={{animation: 'auto ease 0s 1 normal none running none'}}>
                    Fixed price. No surprises.
                </h2>
<h2 className="text-4xl md:text-7xl font-medium tracking-tightest text-text-dim delay-200 delay-100" style={{animation: 'auto ease 0s 1 normal none running none'}}>
                    Built for your business.
                </h2>
</div>
</section>

<section className="py-24 md:py-32 px-6 border-t border-border-subtle bg-bg-surface" id="pricing">
<div className="max-w-xl mx-auto w-full">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-medium tracking-tighter delay-100 delay-200" style={{animation: 'auto ease 0s 1 normal none running none'}}>Simple pricing.</h2>
<p className="mt-4 text-sm font-light text-text-muted delay-200 delay-100" style={{animation: 'auto ease 0s 1 normal none running none'}}>No hidden fees. No complex tiers.</p>
</div>
<div className="rounded-2xl border border-border-strong bg-bg-base p-8 md:p-10 relative overflow-hidden">

<div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[60px] pointer-events-none"></div>
<div className="border-b border-border-subtle pb-8 mb-8">
<div className="text-sm font-medium text-text-dim mb-4">Complete Build</div>
<div className="flex items-baseline gap-2">
<span className="text-5xl font-medium tracking-tighter">5000</span>
<span className="text-lg font-light text-text-muted">SEK</span>
</div>
<p className="text-sm text-text-muted mt-2 font-light delay-100 delay-200" style={{animation: 'auto ease 0s 1 normal none running none'}}>One-time payment. Yours forever.</p>
</div>
<ul className="flex flex-col gap-4 mb-10">
<li className="flex items-start gap-3 text-sm font-light">
<iconify-icon className="text-lg text-accent shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Premium, responsive design</span>
</li>
<li className="flex items-start gap-3 text-sm font-light">
<iconify-icon className="text-lg text-accent shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Delivered in 48 hours</span>
</li>
<li className="flex items-start gap-3 text-sm font-light">
<iconify-icon className="text-lg text-accent shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>SEO &amp; performance optimized</span>
</li>
<li className="flex items-start gap-3 text-sm font-light">
<iconify-icon className="text-lg text-accent shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Copywriting adjustments included</span>
</li>
</ul>
<div className="bg-bg-surface rounded-lg p-4 border border-border-subtle mb-8 flex items-center justify-between">
<div className="">
<div className="text-sm font-medium">Optional Maintenance</div>
<div className="text-xs font-light text-text-muted mt-1">Hosting, edits, and support</div>
</div>
<div className="text-right">
<div className="text-base font-medium">400 SEK</div>
<div className="text-xs font-light text-text-muted">/ month</div>
</div>
</div>
<a className="block text-bg-base hover:bg-transparent hover:text-white border border-transparent hover:border-white transition-colors text-sm font-medium text-center w-full roundedmit" href="#contact">
                        Get started today
                    </a>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 border-t border-border-subtle">
<div className="max-w-4xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
<div className="flex flex-col delay-200 delay-100" style={{animation: 'auto ease 0s 1 normal none running none'}}>
<iconify-icon className="text-3xl text-border-strong mb-6" icon="solar:quote-left-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-lg md:text-xl font-light text-text-primary leading-relaxed text-balance mb-6 flex-1 delay-200 delay-100" style={{animation: 'auto ease 0s 1 normal none running none'}}>
                            "We needed a landing page for our new product launch immediately. Netform delivered something that looked better than agencies charging 10x the price, in just two days."
                        </p>
<div className="text-xs tracking-wide text-text-dim font-mono uppercase">
                            — Marcus E., Tech Founder
                        </div>
</div>
<div className="flex flex-col delay-200 delay-100" style={{animation: 'auto ease 0s 1 normal none running none'}}>
<iconify-icon className="text-3xl text-border-strong mb-6" icon="solar:quote-left-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-lg md:text-xl font-light text-text-primary leading-relaxed text-balance mb-6 flex-1 delay-200 delay-100" style={{animation: 'auto ease 0s 1 normal none running none'}}>
                            "Finally, a web service that doesn't waste time with endless meetings. I filled out the form on Friday and had a perfect website by Monday morning."
                        </p>
<div className="text-xs tracking-wide text-text-dim font-mono uppercase">
                            — Sarah L., Consultant
                        </div>
</div>
</div>
</div>
</section>

<section className="py-32 md:py-48 px-6 border-t border-border-subtle bg-gradient-to-b from-bg-base to-bg-surface relative overflow-hidden" id="contact">
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[300px] bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-3xl mx-auto text-center relative z-10">
<h2 className="text-4xl md:text-6xl font-medium tracking-tightest text-balance mb-8 delay-100 delay-200" style={{animation: 'auto ease 0s 1 normal none running none'}}>
                    Your website is <br className="hidden sm:block"/> 48 hours away.
                </h2>
<div className="max-w-md mx-auto mt-12 text-left bg-bg-base border border-border-strong p-6 md:p-8 rounded-2xl shadow-2xl">
<form className="flex flex-col gap-5 delay-200 delay-100" style={{animation: 'auto ease 0s 1 normal none running none'}}>
<div className="flex flex-col gap-2">
<label className="text-xs font-medium tracking-wide text-text-muted uppercase" htmlFor="name">Name</label>
<input className="w-full bg-bg-surface border border-border-subtle rounded-md px-4 py-3 text-sm font-light focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all placeholder:text-text-dim" id="name" placeholder="John Doe" required="" type="text"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs font-medium tracking-wide text-text-muted uppercase" htmlFor="email">Email</label>
<input className="w-full bg-bg-surface border border-border-subtle rounded-md px-4 py-3 text-sm font-light focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all placeholder:text-text-dim" id="email" placeholder="john@example.com" required="" type="email"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs font-medium tracking-wide text-text-muted uppercase" htmlFor="message">Brief Description</label>
<textarea className="w-full bg-bg-surface border border-border-subtle rounded-md px-4 py-3 text-sm font-light focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all resize-none placeholder:text-text-dim" id="message" placeholder="I need a site for my consulting business..." required="" rows="3"></textarea>
</div>
<button className="w-full mt-2 py-3.5 rounded-md bg-accent text-bg-base font-medium text-sm hover:bg-accent-hover transition-colors flex items-center justify-center gap-2" type="button">
                            Start now
                            <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="text-center mt-2">
<span className="text-xs font-light text-text-dim">Or email us directly at <a className="text-text-muted hover:text-white transition-colors underline decoration-border-strong underline-offset-4" href="#">hello@netform.studio</a></span>
</div>
</form>
</div>
</div>
</section>
</main>

<footer className="py-12 px-6 border-t border-border-subtle bg-bg-base text-center md:text-left">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
<span className="text-sm font-medium tracking-tighter text-text-primary">NETFORM</span>
<span className="text-xs font-light text-text-dim">© 2024 Netform Studio. All rights reserved.</span>
</div>
<div className="flex items-center gap-6 text-xs font-light text-text-muted">
<a className="hover:text-text-primary transition-colors" href="#">Terms</a>
<a className="hover:text-text-primary transition-colors" href="#">Privacy</a>
<a className="hover:text-text-primary transition-colors" href="#">Twitter</a>
</div>
</div>
</footer>


    </>
  );
}
