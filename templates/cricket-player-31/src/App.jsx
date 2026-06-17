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



        // Register GSAP ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);

        // Hero Animation
        gsap.from(".hero-content > *", {
            y: 50,
            opacity: 0,
            duration: 1.2,
            stagger: 0.2,
            ease: "power3.out"
        });

        gsap.from(".hero-visual", {
            x: 50,
            opacity: 0,
            duration: 1.5,
            delay: 0.5,
            ease: "power3.out"
        });

        // Stats Counter Animation
        const counters = document.querySelectorAll('.counter');
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            
            ScrollTrigger.create({
                trigger: counter,
                start: "top 85%",
                once: true,
                onEnter: () => {
                    gsap.to(counter, {
                        innerHTML: target,
                        duration: 2,
                        snap: { innerHTML: 1 },
                        ease: "power2.out"
                    });
                }
            });
        });

        // Wagon Wheel Lines Animation
        gsap.from(".score-line", {
            scrollTrigger: {
                trigger: "#wagonWheel",
                start: "top 70%",
            },
            strokeDasharray: 200,
            strokeDashoffset: 200,
            duration: 2,
            stagger: 0.2,
            ease: "power2.inOut"
        });

        // Skill Bars Animation
        gsap.utils.toArray('.skill-bar').forEach(bar => {
            gsap.to(bar, {
                scrollTrigger: {
                    trigger: bar,
                    start: "top 85%"
                },
                width: bar.getAttribute('data-width'),
                duration: 1.5,
                ease: "power2.out"
            });
        });

        // Parallax Effect for Stat Cards in Hero
        gsap.to(".stat-card", {
            scrollTrigger: {
                trigger: "header",
                start: "top top",
                end: "bottom top",
                scrub: 1
            },
            y: -100,
            stagger: 0.1
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
      

<nav className="fixed top-0 w-full z-50 glass">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
<a className="text-xl font-display font-semibold tracking-tighter text-white hover:text-emerald-400 transition-colors" href="#">
                AV<span className="text-emerald-500">.</span>
</a>
<div className="hidden md:flex items-center space-x-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#stats">Statistics</a>
<a className="hover:text-white transition-colors" href="#analysis">Analysis</a>
<a className="hover:text-white transition-colors" href="#gallery">Moments</a>
<a className="flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-800 hover:border-emerald-500/50 hover:bg-emerald-950/20 hover:text-emerald-400 transition-all group" href="#contact">
<span>Contact</span>
<span className="iconify group-hover:translate-x-0.5 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
<button className="md:hidden text-white">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</nav>

<header className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">

<div className="absolute inset-0 bg-grid z-0"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
<div className="hero-content space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-medium text-emerald-400 uppercase tracking-widest">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    ICCI Player of the Year '24
                </div>
<h1 className="text-6xl md:text-8xl font-display font-medium tracking-tighter text-white leading-[0.9]">
                    Mastering <br/>
<span className="text-neutral-500">The 22 Yards.</span>
</h1>
<p className="text-lg text-neutral-400 max-w-md font-light leading-relaxed">
                    Precision, timing, and an unyielding will to dominate the game. Aryan Verma redefines the art of modern batting.
                </p>
<div className="flex items-center gap-6 pt-4">
<button className="bg-white text-black px-8 py-3 rounded text-sm font-medium hover:bg-neutral-200 transition-colors flex items-center gap-2">
                        View Career
                        <span className="iconify" data-icon="lucide:chevron-down" data-width="16"></span>
</button>
<div className="flex items-center gap-3 text-neutral-500 text-sm">
<span className="iconify" data-icon="lucide:play-circle" data-width="20"></span>
                        Watch Highlights
                    </div>
</div>
</div>

<div className="hero-visual relative flex justify-center items-center h-[500px]">

<div className="absolute w-64 h-[400px] border border-neutral-800 rounded bg-neutral-900/50 backdrop-blur-sm rotate-12 transform origin-bottom-left border-dashed">

<div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-16 flex justify-between items-end h-16">
<div className="w-1 h-full bg-neutral-700"></div>
<div className="w-1 h-full bg-neutral-700"></div>
<div className="w-1 h-full bg-neutral-700"></div>
</div>

<div className="absolute bottom-4 left-4 right-4 h-px bg-white/20"></div>
</div>

<div className="stat-card absolute top-20 right-10 bg-neutral-900 border border-neutral-800 p-4 rounded shadow-2xl backdrop-blur-md">
<div className="flex items-center gap-3 mb-2">
<span className="iconify text-emerald-500" data-icon="lucide:trending-up"></span>
<span className="text-xs text-neutral-400 uppercase tracking-wider">Strike Rate</span>
</div>
<div className="text-2xl font-display font-semibold text-white">148.5</div>
</div>
<div className="stat-card absolute bottom-32 -left-4 bg-neutral-900 border border-neutral-800 p-4 rounded shadow-2xl backdrop-blur-md">
<div className="flex items-center gap-3 mb-2">
<span className="iconify text-emerald-500" data-icon="lucide:target"></span>
<span className="text-xs text-neutral-400 uppercase tracking-wider">Average</span>
</div>
<div className="text-2xl font-display font-semibold text-white">54.2</div>
</div>
</div>
</div>
</header>

<section className="py-24 bg-neutral-950 relative border-t border-neutral-900" id="stats">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-display font-medium text-white tracking-tight mb-4">Career Statistics</h2>
<p className="text-neutral-500 max-w-lg">A decade of dominance across all formats. Consistent performance driven by technical excellence.</p>
</div>
<div className="flex gap-2">
<button className="px-4 py-2 text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded hover:bg-emerald-500/20 transition-colors">Test</button>
<button className="px-4 py-2 text-xs font-medium text-neutral-500 border border-transparent hover:text-white transition-colors">ODI</button>
<button className="px-4 py-2 text-xs font-medium text-neutral-500 border border-transparent hover:text-white transition-colors">T20</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group p-6 rounded-lg bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 transition-all duration-300">
<div className="flex justify-between items-start mb-4">
<span className="p-2 rounded bg-neutral-950 text-neutral-400 group-hover:text-emerald-400 transition-colors">
<span className="iconify" data-icon="lucide:hash" data-width="20"></span>
</span>
<span className="text-xs text-neutral-600 font-mono">ALL FORMATS</span>
</div>
<div className="text-4xl font-display font-semibold text-white mb-1 counter" data-target="12450">0</div>
<div className="text-sm text-neutral-500">Total Runs Scored</div>
</div>

<div className="group p-6 rounded-lg bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 transition-all duration-300">
<div className="flex justify-between items-start mb-4">
<span className="p-2 rounded bg-neutral-950 text-neutral-400 group-hover:text-emerald-400 transition-colors">
<span className="iconify" data-icon="lucide:award" data-width="20"></span>
</span>
<span className="text-xs text-neutral-600 font-mono">MILESTONE</span>
</div>
<div className="text-4xl font-display font-semibold text-white mb-1 counter" data-target="42">0</div>
<div className="text-sm text-neutral-500">International Centuries</div>
</div>

<div className="group p-6 rounded-lg bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 transition-all duration-300">
<div className="flex justify-between items-start mb-4">
<span className="p-2 rounded bg-neutral-950 text-neutral-400 group-hover:text-emerald-400 transition-colors">
<span className="iconify" data-icon="lucide:zap" data-width="20"></span>
</span>
<span className="text-xs text-neutral-600 font-mono">IMPACT</span>
</div>
<div className="text-4xl font-display font-semibold text-white mb-1 counter" data-target="215">0</div>
<div className="text-sm text-neutral-500">Sixes Hit</div>
</div>

<div className="group p-6 rounded-lg bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 transition-all duration-300">
<div className="flex justify-between items-start mb-4">
<span className="p-2 rounded bg-neutral-950 text-neutral-400 group-hover:text-emerald-400 transition-colors">
<span className="iconify" data-icon="lucide:trophy" data-width="20"></span>
</span>
<span className="text-xs text-neutral-600 font-mono">LEADERSHIP</span>
</div>
<div className="text-4xl font-display font-semibold text-white mb-1 counter" data-target="68">0</div>
<div className="text-sm text-neutral-500">Wins as Captain</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950 relative overflow-hidden" id="analysis">

<div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-emerald-900/10 to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

<div className="relative order-2 lg:order-1">
<div className="relative w-full aspect-square max-w-[500px] mx-auto bg-neutral-900 rounded-full border border-neutral-800 p-8 flex items-center justify-center">

<svg className="w-full h-full opacity-80" id="wagonWheel" viewbox="0 0 200 200">

<circle cx="100" cy="100" fill="none" r="98" stroke="#333" stroke-dasharray="4 4" strokeWidth="1"></circle>
<circle cx="100" cy="100" fill="#111" r="30" stroke="#333" strokeWidth="1"></circle>

<rect fill="#222" height="40" width="10" x="95" y="80"></rect>


<path className="score-line" d="M100 100 L180 60" stroke="#10b981" strokeLinecap="round" strokeWidth="2"></path>
<path className="score-line" d="M100 100 L170 120" stroke="#10b981" strokeLinecap="round" strokeWidth="3"></path>
<path className="score-line" d="M100 100 L150 160" stroke="#34d399" strokeLinecap="round" strokeWidth="1.5"></path>

<path className="score-line" d="M100 100 L40 140" stroke="#10b981" strokeLinecap="round" strokeWidth="2"></path>
<path className="score-line" d="M100 100 L20 80" stroke="#34d399" strokeLinecap="round" strokeWidth="1.5"></path>

<path className="score-line" d="M100 100 L95 180" stroke="#059669" strokeLinecap="round" strokeWidth="4"></path>
<path className="score-line" d="M100 100 L105 180" stroke="#059669" strokeLinecap="round" strokeWidth="4"></path>
</svg>

<div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center bg-black/80 backdrop-blur px-4 py-2 rounded border border-neutral-800">
<div className="text-[10px] text-neutral-500 uppercase tracking-widest">Favored Zone</div>
<div className="text-sm font-medium text-emerald-400">Long On / Mid Wicket</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2 space-y-8">
<div>
<h2 className="text-3xl md:text-4xl font-display font-medium text-white tracking-tight mb-4">
                        The Cover Drive Specialist
                    </h2>
<p className="text-neutral-400 leading-relaxed font-light">
                        Visualizing the scoring areas reveals a master of the "V". With 34% of runs coming down the ground and a prolific cover drive, Aryan's technique is built on a foundation of balance and high elbow positioning.
                    </p>
</div>
<div className="space-y-6">

<div>
<div className="flex justify-between mb-2 text-sm">
<span className="text-neutral-300">Off-side Dominance</span>
<span className="text-emerald-400 font-mono">62%</span>
</div>
<div className="h-1 w-full bg-neutral-900 rounded-full overflow-hidden">
<div className="h-full bg-emerald-600 rounded-full skill-bar w-0" data-width="62%"></div>
</div>
</div>

<div>
<div className="flex justify-between mb-2 text-sm">
<span className="text-neutral-300">Spin Proficiency</span>
<span className="text-emerald-400 font-mono">88%</span>
</div>
<div className="h-1 w-full bg-neutral-900 rounded-full overflow-hidden">
<div className="h-full bg-emerald-600 rounded-full skill-bar w-0" data-width="88%"></div>
</div>
</div>

<div>
<div className="flex justify-between mb-2 text-sm">
<span className="text-neutral-300">Running Between Wickets</span>
<span className="text-emerald-400 font-mono">Elite</span>
</div>
<div className="h-1 w-full bg-neutral-900 rounded-full overflow-hidden">
<div className="h-full bg-emerald-600 rounded-full skill-bar w-0" data-width="95%"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black overflow-hidden" id="gallery">
<div className="px-6 mb-12 flex justify-between items-end max-w-7xl mx-auto">
<h2 className="text-3xl md:text-4xl font-display font-medium text-white tracking-tight">Iconic Moments</h2>
<div className="flex gap-2">
<button className="p-2 border border-neutral-800 rounded-full hover:bg-neutral-900 text-white transition-colors">
<span className="iconify" data-icon="lucide:arrow-left" data-width="20"></span>
</button>
<button className="p-2 border border-neutral-800 rounded-full hover:bg-neutral-900 text-white transition-colors">
<span className="iconify" data-icon="lucide:arrow-right" data-width="20"></span>
</button>
</div>
</div>

<div className="flex gap-6 overflow-x-auto px-6 pb-12 snap-x snap-mandatory scrollbar-hide no-scrollbar w-full" id="gallery-track">

<div className="min-w-[300px] md:min-w-[400px] snap-center group relative aspect-[3/4] overflow-hidden rounded-lg bg-neutral-900 border border-neutral-800">
<img alt="Cricket Match" className="object-cover w-full h-full opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6">
<div className="text-emerald-400 text-xs font-mono mb-2">MCG, AUSTRALIA</div>
<h3 className="text-xl font-medium text-white">The Match Winning Knock</h3>
<p className="text-neutral-400 text-sm mt-2 line-clamp-2">Chasing 320 under lights, scoring an unbeaten 133 to seal the series victory.</p>
</div>
</div>

<div className="min-w-[300px] md:min-w-[400px] snap-center group relative aspect-[3/4] overflow-hidden rounded-lg bg-neutral-900 border border-neutral-800">
<img alt="Training" className="object-cover w-full h-full opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6">
<div className="text-emerald-400 text-xs font-mono mb-2">LORDS, UK</div>
<h3 className="text-xl font-medium text-white">Test Debut Century</h3>
<p className="text-neutral-400 text-sm mt-2 line-clamp-2">Entering the arena of legends and etching his name on the honors board.</p>
</div>
</div>

<div className="min-w-[300px] md:min-w-[400px] snap-center group relative aspect-[3/4] overflow-hidden rounded-lg bg-neutral-900 border border-neutral-800">
<img alt="Crowd" className="object-cover w-full h-full opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6">
<div className="text-emerald-400 text-xs font-mono mb-2">MUMBAI, INDIA</div>
<h3 className="text-xl font-medium text-white">World Cup Final</h3>
<p className="text-neutral-400 text-sm mt-2 line-clamp-2">The roar of 40,000 fans as the final wicket fell to secure the championship.</p>
</div>
</div>

<div className="min-w-[300px] md:min-w-[400px] snap-center group relative aspect-[3/4] overflow-hidden rounded-lg bg-neutral-900 border border-neutral-800">
<div className="absolute inset-0 flex items-center justify-center bg-neutral-900">
<span className="iconify text-neutral-800" data-icon="lucide:image" data-width="48"></span>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6">
<div className="text-emerald-400 text-xs font-mono mb-2">CAPE TOWN</div>
<h3 className="text-xl font-medium text-white">Fielding Brilliance</h3>
<p className="text-neutral-400 text-sm mt-2 line-clamp-2">A diving catch at backward point that changed the momentum of the game.</p>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-neutral-900 bg-neutral-950">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-sm font-medium text-neutral-500 mb-8 uppercase tracking-widest">Powered By</p>
<div className="flex flex-wrap justify-center gap-12 md:gap-20 grayscale opacity-60">

<h3 className="text-2xl font-display font-bold tracking-tight text-white hover:opacity-100 transition-opacity cursor-pointer">NIKE</h3>
<h3 className="text-2xl font-display font-bold tracking-tight text-white hover:opacity-100 transition-opacity cursor-pointer">MRF</h3>
<h3 className="text-2xl font-display font-bold tracking-tight text-white hover:opacity-100 transition-opacity cursor-pointer">AUDI</h3>
<h3 className="text-2xl font-display font-bold tracking-tight text-white hover:opacity-100 transition-opacity cursor-pointer">TISSOT</h3>
</div>
</div>
</section>

<footer className="bg-black border-t border-neutral-900 py-20" id="contact">
<div className="max-w-3xl mx-auto px-6 text-center space-y-8">
<h2 className="text-4xl md:text-5xl font-display font-medium text-white tracking-tight">Ready to collaborate?</h2>
<p className="text-neutral-400 font-light text-lg">For brand partnerships, press inquiries, or speaking engagements.</p>
<a className="inline-block text-3xl md:text-5xl font-display font-medium text-neutral-700 hover:text-emerald-500 transition-colors border-b-2 border-transparent hover:border-emerald-500" href="mailto:contact@aryanverma.com">
                hello@aryanverma.com
            </a>
<div className="flex justify-center gap-6 pt-12">
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:instagram" data-width="24"></span></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="24"></span></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:linkedin" data-width="24"></span></a>
</div>
<div className="pt-20 text-xs text-neutral-600 flex flex-col md:flex-row justify-between items-center gap-4">
<p>© 2024 Aryan Verma. All rights reserved.</p>
<div className="flex gap-4">
<a className="hover:text-neutral-400" href="#">Privacy</a>
<a className="hover:text-neutral-400" href="#">Terms</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
