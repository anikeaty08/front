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



        document.addEventListener('mousemove', (e) => {
            const cards = document.querySelectorAll('.card-3d');
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            
            cards.forEach(card => {
                const rect = card.getBoundingClientRect();
                // Only apply if card is visible
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    const cardX = (rect.left + rect.width / 2) / window.innerWidth;
                    const cardY = (rect.top + rect.height / 2) / window.innerHeight;
                    
                    const moveX = (x - cardX) * 20;
                    const moveY = (y - cardY) * 20;
                    
                    // Subtle tilt based on mouse position relative to card
                    card.style.transform = `perspective(1000px) rotateY(${moveX}deg) rotateX(${-moveY}deg)`;
                }
            });
        });

        // Reset on mouse leave
        document.addEventListener('mouseleave', () => {
            const cards = document.querySelectorAll('.card-3d');
            cards.forEach(card => {
                card.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
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
      

<nav className="fixed top-0 w-full z-50 border-b border-neutral-900/50 glass">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-3 group cursor-pointer">

<div className="relative w-10 h-10 flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-b from-yellow-200 via-yellow-600 to-yellow-800 opacity-20 blur-lg rounded-full group-hover:opacity-40 transition-opacity"></div>
<iconify-icon className="text-gold-gradient text-3xl transform group-hover:rotate-180 transition-transform duration-700" icon="lucide:triangle"></iconify-icon>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-0.5 bg-yellow-500/80"></div>
</div>
<span className="text-white font-medium tracking-tight text-lg">AAA AGENCY</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="text-neutral-400 hover:text-white transition-colors" href="#solutions">Solutions</a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#technology">AI Technology</a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#results">Results</a>
</div>
<button className="bg-white text-black text-xs font-semibold px-5 py-2.5 rounded-full hover:bg-neutral-200 transition-colors flex items-center gap-2">
                Start Partnership
                <iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>
</button>
</div>
</nav>

<main className="relative pt-32 pb-20 overflow-hidden min-h-screen flex flex-col justify-center">

<div className="absolute top-0 left-0 w-full h-full bg-grid pointer-events-none opacity-20"></div>
<div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-yellow-900/10 rounded-[100%] blur-[120px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-yellow-900/30 bg-yellow-900/10 text-yellow-500 text-xs font-medium tracking-wide">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
</span>
                    AI-POWERED GROWTH INFRASTRUCTURE
                </div>
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tighter leading-[1.1]">
                    We don't sell ads. <br/>
<span className="text-gold-gradient">We build empires.</span>
</h1>
<p className="text-lg text-neutral-400 max-w-lg leading-relaxed font-light">
                    The AAA solution for nail salons struggling to scale. We deploy viral content AI, 24/7 intelligent booking agents, and holistic operational strategies to fill your chairs effortlessly.
                </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
<button className="bg-gradient-to-b from-yellow-300 via-yellow-500 to-yellow-600 text-black text-sm font-semibold px-8 py-3.5 rounded-lg hover:brightness-110 transition-all shadow-[0_0_20px_rgba(234,179,8,0.3)]">
                        Apply for Partnership
                    </button>
<button className="px-8 py-3.5 rounded-lg border border-neutral-800 text-neutral-300 text-sm font-medium hover:bg-neutral-900 transition-colors flex items-center gap-2">
<iconify-icon icon="lucide:play-circle" width="16"></iconify-icon>
                        View System Demo
                    </button>
</div>
</div>

<div className="relative h-[600px] w-full hidden lg:block perspective-container">


<div className="absolute top-20 right-10 w-80 p-6 glass rounded-2xl animate-float-delayed opacity-60 scale-90 z-0 border-t border-white/10">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded bg-neutral-800 flex items-center justify-center text-neutral-400">
<iconify-icon icon="lucide:bar-chart-3" width="16"></iconify-icon>
</div>
<div className="text-xs font-medium text-neutral-300">Revenue Optimization</div>
</div>
<div className="space-y-2">
<div className="h-1.5 w-full bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-neutral-600 w-3/4"></div>
</div>
<div className="h-1.5 w-2/3 bg-neutral-800 rounded-full"></div>
</div>
</div>

<div className="absolute top-40 right-40 w-80 p-6 glass rounded-2xl animate-float shadow-2xl z-10 border-t border-white/10 bg-black/40">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-green-900/20 text-green-500 flex items-center justify-center border border-green-500/20">
<iconify-icon icon="lucide:phone-incoming" width="14"></iconify-icon>
</div>
<div>
<div className="text-sm text-white font-medium">AI Agent</div>
<div className="text-[10px] text-green-500">Call in progress • 0:24</div>
</div>
</div>
<div className="flex gap-1">
<span className="w-1 h-1 rounded-full bg-white animate-pulse"></span>
<span className="w-1 h-1 rounded-full bg-white animate-pulse delay-75"></span>
<span className="w-1 h-1 rounded-full bg-white animate-pulse delay-150"></span>
</div>
</div>
<div className="space-y-3">
<div className="bg-neutral-900/50 p-3 rounded-lg rounded-tl-none border border-neutral-800">
<p className="text-[10px] text-neutral-400">"I'd like to book a full set for tomorrow at 2 PM."</p>
</div>
<div className="bg-yellow-900/10 p-3 rounded-lg rounded-tr-none border border-yellow-500/10 ml-8">
<p className="text-[10px] text-yellow-100">"I have a slot available at 2:15 PM with Sarah. Shall I confirm that for you?"</p>
</div>
</div>
</div>

<div className="absolute top-64 right-10 w-96 p-1 rounded-2xl bg-gradient-to-br from-yellow-500/50 via-neutral-900 to-transparent animate-float z-20 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)]">
<div className="bg-[#050505] rounded-xl p-6 h-full relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 blur-3xl pointer-events-none"></div>
<div className="flex items-center justify-between mb-8">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-black shadow-lg shadow-yellow-500/20">
<iconify-icon icon="lucide:sparkles" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm text-white font-medium tracking-tight">Viral Engine</div>
<div className="text-[10px] text-neutral-500">Auto-generating content</div>
</div>
</div>
<div className="text-xs font-mono text-yellow-500 bg-yellow-500/10 px-2 py-1 rounded border border-yellow-500/20">
                                +428% Reach
                            </div>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="p-3 rounded-lg bg-neutral-900/50 border border-neutral-800">
<div className="text-[10px] text-neutral-500 mb-1">Views (24h)</div>
<div className="text-xl font-medium text-white tracking-tight">124.5k</div>
</div>
<div className="p-3 rounded-lg bg-neutral-900/50 border border-neutral-800">
<div className="text-[10px] text-neutral-500 mb-1">New Leads</div>
<div className="text-xl font-medium text-white tracking-tight">84</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="py-24 relative bg-neutral-950 border-t border-neutral-900" id="solutions">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:w-2/3">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Complete Business Transformation</h2>
<p className="text-neutral-400 font-light">We replace the need for multiple agencies. Our ecosystem handles everything from customer acquisition to lifetime value optimization.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group card-3d p-8 rounded-2xl bg-[#080808] border border-neutral-800 hover:border-yellow-900/50 transition-colors relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-yellow-900/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-12 h-12 rounded-xl bg-neutral-900 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 border border-neutral-800 shadow-lg">
<iconify-icon icon="lucide:video" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Viral Content AI</h3>
<p className="text-sm text-neutral-500 leading-relaxed mb-6">
                        Our system analyzes beauty trends in real-time and auto-manages your fan pages. We create high-converting reels and posts that dominate local feeds without you lifting a finger.
                    </p>
<ul className="space-y-2 text-xs text-neutral-400">
<li className="flex items-center gap-2">
<iconify-icon className="text-yellow-600" icon="lucide:check"></iconify-icon> Trend Analysis
                        </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-yellow-600" icon="lucide:check"></iconify-icon> Auto-Posting Schedule
                        </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-yellow-600" icon="lucide:check"></iconify-icon> Community Management
                        </li>
</ul>
</div>

<div className="group card-3d p-8 rounded-2xl bg-[#080808] border border-neutral-800 hover:border-yellow-900/50 transition-colors relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-yellow-900/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-12 h-12 rounded-xl bg-neutral-900 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 border border-neutral-800 shadow-lg">
<iconify-icon icon="lucide:bot" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">AI Voice &amp; Chat Agents</h3>
<p className="text-sm text-neutral-500 leading-relaxed mb-6">
                        Never miss a booking. Our human-like AI answers calls, replies to DMs, and manages your calendar 24/7. It handles rescheduling and inquiries instantly.
                    </p>
<ul className="space-y-2 text-xs text-neutral-400">
<li className="flex items-center gap-2">
<iconify-icon className="text-yellow-600" icon="lucide:check"></iconify-icon> Human-sounding Voice AI
                        </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-yellow-600" icon="lucide:check"></iconify-icon> Instagram/Facebook DM Automation
                        </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-yellow-600" icon="lucide:check"></iconify-icon> Calendar Sync
                        </li>
</ul>
</div>

<div className="group card-3d p-8 rounded-2xl bg-[#080808] border border-neutral-800 hover:border-yellow-900/50 transition-colors relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-yellow-900/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-12 h-12 rounded-xl bg-neutral-900 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 border border-neutral-800 shadow-lg">
<iconify-icon icon="lucide:briefcase" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Executive Partnership</h3>
<p className="text-sm text-neutral-500 leading-relaxed mb-6">
                        We don't just send leads; we optimize your business. From pricing strategy to staff management and upselling protocols, we act as your growth executives.
                    </p>
<ul className="space-y-2 text-xs text-neutral-400">
<li className="flex items-center gap-2">
<iconify-icon className="text-yellow-600" icon="lucide:check"></iconify-icon> Operations Audit
                        </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-yellow-600" icon="lucide:check"></iconify-icon> High-Ticket Product Strategy
                        </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-yellow-600" icon="lucide:check"></iconify-icon> Monthly Strategy Calls
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black relative overflow-hidden">

<div className="absolute right-0 top-1/4 w-1/3 h-1/2 bg-gradient-to-l from-yellow-900/10 to-transparent blur-3xl pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-16 items-center">
<div className="w-full md:w-1/2 relative">
<div className="aspect-square rounded-2xl overflow-hidden border border-neutral-800 relative group">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-800 via-black to-black"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="relative w-64 h-64">

<div className="absolute inset-0 border border-neutral-800 rounded-full animate-[spin_10s_linear_infinite]"></div>
<div className="absolute inset-4 border border-dashed border-neutral-800 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
<div className="absolute inset-12 border border-yellow-900/30 rounded-full animate-pulse"></div>

<div className="absolute inset-0 flex items-center justify-center">
<iconify-icon className="text-4xl text-yellow-500 drop-shadow-[0_0_15px_rgba(234,179,8,0.5)]" icon="lucide:gem"></iconify-icon>
</div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-neutral-900 border border-neutral-700 px-3 py-1.5 rounded-full text-[10px] text-white flex items-center gap-1 shadow-xl">
<iconify-icon className="text-green-500" icon="lucide:trending-up"></iconify-icon> +240% Revenue
                             </div>
<div className="absolute bottom-10 -right-4 bg-neutral-900 border border-neutral-700 px-3 py-1.5 rounded-full text-[10px] text-white flex items-center gap-1 shadow-xl">
<iconify-icon className="text-blue-500" icon="lucide:users"></iconify-icon> Full Books
                             </div>
</div>
</div>
</div>
</div>
<div className="w-full md:w-1/2 space-y-8">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tighter">
                    Stop chasing clients. <br/>
<span className="text-neutral-500">Let them chase you.</span>
</h2>
<div className="space-y-6 text-neutral-400 font-light text-lg">
<p>
                        Most agencies sell you clicks. We install a system. A system that works while you sleep, ensures your phone is always answered, and positions your salon as the high-end authority in your city.
                    </p>
<p>
                        We partner with ambitious owners who want to transition from "business operator" to "empire builder".
                    </p>
</div>
<div className="pt-4 grid grid-cols-2 gap-8">
<div>
<div className="text-3xl font-medium text-white mb-1">24/7</div>
<div className="text-xs text-neutral-500 uppercase tracking-wider">Availability</div>
</div>
<div>
<div className="text-3xl font-medium text-white mb-1">10x</div>
<div className="text-xs text-neutral-500 uppercase tracking-wider">Social Engagement</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative">
<div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-900/40 to-black"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<iconify-icon className="text-gold-gradient text-5xl mb-8 inline-block animate-float" icon="lucide:triangle"></iconify-icon>
<h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tighter mb-6">Ready for the AAA Treatment?</h2>
<p className="text-neutral-400 text-lg mb-10 max-w-xl mx-auto">
                We only accept 5 new partners per month to ensure dedicated executive support. Secure your area's exclusivity now.
            </p>
<div className="flex flex-col sm:flex-row justify-center items-center gap-4">
<button className="w-full sm:w-auto bg-white text-black text-sm font-semibold px-8 py-4 rounded-lg hover:bg-neutral-200 transition-colors shadow-[0_0_40px_rgba(255,255,255,0.1)]">
                    Schedule Your Strategy Call
                </button>
<button className="w-full sm:w-auto px-8 py-4 rounded-lg border border-neutral-800 text-neutral-400 text-sm font-medium hover:text-white hover:border-neutral-600 transition-colors">
                    View Case Studies
                </button>
</div>
</div>
</section>

<footer className="border-t border-neutral-900 bg-black pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-6">
<iconify-icon className="text-yellow-600 text-xl" icon="lucide:triangle"></iconify-icon>
<span className="text-white font-bold tracking-tight">AAA AGENCY</span>
</div>
<p className="text-neutral-500 text-sm max-w-xs">
                        The premium growth partner for the modern beauty industry. Leveraging AI to build lasting empires.
                    </p>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Platform</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-yellow-500 transition-colors" href="#">Viral Engine</a></li>
<li><a className="hover:text-yellow-500 transition-colors" href="#">AI Concierge</a></li>
<li><a className="hover:text-yellow-500 transition-colors" href="#">Business Intelligence</a></li>
<li><a className="hover:text-yellow-500 transition-colors" href="#">Consulting</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Company</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-yellow-500 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-yellow-500 transition-colors" href="#">Case Studies</a></li>
<li><a className="hover:text-yellow-500 transition-colors" href="#">Contact</a></li>
<li><a className="hover:text-yellow-500 transition-colors" href="#">Privacy Policy</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center border-t border-neutral-900 pt-8 text-xs text-neutral-600">
<p>© 2024 AAA Agency Inc. All rights reserved.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:instagram"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:twitter"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:linkedin"></iconify-icon></a>
</div>
</div>
</div>
</footer>



    </>
  );
}
