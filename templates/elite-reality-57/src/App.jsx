import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



lucide.createIcons({attrs:{'stroke-width':'1.5'}});



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
        


          lucide.createIcons();
        


      lucide.createIcons();
    


      document.addEventListener('DOMContentLoaded', () => {
        // Loader Dismissal
        setTimeout(() => {
          const loader = document.getElementById('initial-loader');
          if (loader) {
            loader.style.opacity = '0';
            loader.style.visibility = 'hidden';
          }
        }, 1800);

        // Cinematic Scroll Observer
        const observerOptions = {
          root: null,
          rootMargin: '0px',
          threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        }, observerOptions);

        // Target elements for reveal
        const targets = document.querySelectorAll('h1, h2, h3, p, .glass-card, .btn-glow, .btn-secondary-glow, img');
        targets.forEach((el) => {
          // Skip elements already animated by CSS keyframes if needed
          if(!el.closest('.fade-in-up')) {
             el.classList.add('reveal-item');
             observer.observe(el);
          }
        });

        // Hero 3D Tilt Effect
        const heroSection = document.querySelector('.perspective-container');
        const heroContent = document.getElementById('hero-3d-content');

        if (heroSection && heroContent) {
          heroSection.addEventListener('mousemove', (e) => {
            const rect = heroSection.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Calculate rotation (limit to +/- 8 degrees)
            const xRotation = ((y / rect.height) - 0.5) * -8;
            const yRotation = ((x / rect.width) - 0.5) * 8;

            heroContent.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
          });

          heroSection.addEventListener('mouseleave', () => {
            heroContent.style.transform = 'rotateX(0deg) rotateY(0deg)';
          });
        }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="fixed inset-0 z-0 pointer-events-none opacity-[0.4] mix-blend-overlay" style={{backgroundImage: 'url(\'https://grainy-gradients.vercel.app/noise.svg\')'}}></div>
<div id="initial-loader">
<div className="loader-content">
<div className="loader-icon">
<svg fill="none" height="40" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg">
<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
</svg>
</div>
<div className="h-1 w-32 bg-slate-200/50 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 w-full animate-[progress_1.5s_ease-in-out_infinite] origin-left"></div>
</div>
</div>
</div>
<style>
      @keyframes progress { 0% { transform: scaleX(0); } 50% { transform: scaleX(0.7); } 100% { transform: scaleX(1); transform-origin: right; } }
    </style>

<nav className="fixed top-6 left-4 right-4 md:left-0 md:right-0 md:mx-auto md:max-w-6xl z-50 glass-nav rounded-full border border-white/40 shadow-xl shadow-purple-500/5 transition-all duration-300">
<div className="flex items-center justify-between h-16 px-6 w-full">

<a className="flex items-center gap-2.5 group" href="#">
<div className="relative flex items-center justify-center w-9 h-9 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl group-hover:scale-105 transition-transform duration-300 shadow-lg shadow-purple-500/20">
<i className="relative w-4 h-4 text-white stroke-[2.5]" data-lucide="zap"></i>
</div>
<span className="text-[17px] tracking-tight text-slate-900 font-bold">
            Elite Reality
          </span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-[14px] font-medium text-slate-600 hover:text-[#8b5cf6] transition-colors tracking-tight" href="#testimonials">
            Testimonials
          </a>
<a className="text-[14px] font-medium text-slate-600 hover:text-[#8b5cf6] transition-colors tracking-tight" href="#how-it-works">
            How It Works
          </a>
<a className="text-[14px] font-medium text-slate-600 hover:text-[#8b5cf6] transition-colors tracking-tight" href="#about">
            About
          </a>
<a className="text-[14px] font-medium text-slate-600 hover:text-[#8b5cf6] transition-colors tracking-tight" href="#faqs">
            FAQs
          </a>
</div>

<div className="flex items-center gap-5">
<a className="text-[14px] font-semibold text-slate-700 hover:text-[#8b5cf6] hidden md:block transition-colors tracking-tight" href="#">
            Sign In
          </a>
<a className="btn-glow inline-flex items-center justify-center rounded-full text-white text-[13px] px-7 py-3 shadow-lg font-medium" href="#">
            Get Started
          </a>
</div>
</div>
</nav>

<main className="relative flex-grow pt-32">

<section className="px-6 relative overflow-hidden pb-40">
<div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10 perspective-container">

<div className="fade-in-up" style={{animationDelay: '0.1s'}}>
<div className="inline-flex items-center gap-3 bg-white/60 backdrop-blur-md border border-purple-100 pl-1 pr-4 py-1 rounded-full mb-10 shadow-sm hover:shadow-md transition-all cursor-pointer hover:border-purple-300 group duration-300">
<span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-[11px] uppercase font-bold px-3 py-1 rounded-full tracking-wide shadow-md shadow-purple-500/30">
                New
              </span>
<span className="text-[13px] font-medium text-slate-600 tracking-wide group-hover:text-[#8b5cf6] transition-colors">
                Upgrade your financial reality
                <i className="inline w-3 h-3 ml-1" data-lucide="arrow-right"></i>
</span>
</div>
</div>

<h1 className="fade-in-up tracking-tighter text-slate-900 max-w-5xl leading-[0.95] text-balance font-semibold text-6xl md:text-8xl lg:text-9xl mb-10 drop-shadow-sm" style={{animationDelay: '0.2s'}}>
            Beat the Market.
            <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">
              Zero Experience.
            </span>
</h1>

<p className="fade-in-up text-xl md:text-2xl max-w-2xl leading-relaxed mb-12 text-balance font-medium tracking-tight text-slate-600" style={{animationDelay: '0.3s'}}>
            Copy the exact trades of top-tier professionals. Achieve consistent
            daily profits without the guesswork.
          </p>

<div className="fade-in-up flex flex-col sm:flex-row items-center gap-4 mb-24" style={{animationDelay: '0.4s'}}>
<a className="btn-glow rounded-full text-white font-semibold text-lg flex items-center gap-2 px-10 py-5 shadow-2xl" href="#">
              Join for Free
              <i className="w-5 h-5" data-lucide="chevron-right"></i>
</a>
<a className="btn-secondary-glow rounded-full font-semibold text-lg px-10 py-5" href="#">
              See Results
            </a>
</div>

<div className="fade-in-up w-full max-w-6xl mx-auto relative z-10 group" id="hero-3d-content" style={{animationDelay: '0.5s'}}>

<div className="absolute -inset-10 bg-gradient-to-r from-purple-500/20 via-indigo-500/20 to-pink-500/20 blur-3xl rounded-[3rem] opacity-50 group-hover:opacity-70 transition-opacity duration-700"></div>

<div className="relative rounded-t-[2.5rem] bg-white/60 backdrop-blur-xl border border-white/60 p-3 shadow-2xl ring-1 ring-black/5 transition-transform duration-700 group-hover:-translate-y-2">

<div className="h-12 flex items-center px-6 gap-4 border-b border-slate-200/50 mb-3">
<div className="flex gap-2 opacity-30 group-hover:opacity-100 transition-opacity">
<div className="w-2.5 h-2.5 rounded-full bg-slate-900"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-900"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-900"></div>
</div>
<div className="flex-1 flex justify-center opacity-80">
<div className="bg-slate-100/80 backdrop-blur-sm h-7 px-4 rounded-lg flex items-center justify-center text-[11px] text-slate-500 font-medium tracking-wide border border-slate-200/50 shadow-sm">
<i className="w-2.5 h-2.5 mr-1.5 opacity-50" data-lucide="lock"></i>
                    elite-reality.com
                  </div>
</div>
<div className="w-10"></div>
</div>
<div className="relative rounded-[2rem] overflow-hidden bg-slate-900 aspect-[16/9] md:aspect-[21/9] group cursor-pointer shadow-inner">
<img alt="Platform Interface" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&amp;w=2560&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 flex items-center justify-center z-20">
<div className="relative w-24 h-24 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">

<div className="absolute w-full h-full rounded-full pulse-ring border-purple-500"></div>
<div className="relative w-20 h-20 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 shadow-[0_0_50px_rgba(255,255,255,0.2)] hover:bg-white/20 transition-colors">
<i className="w-8 h-8 text-white fill-white ml-1" data-lucide="play"></i>
</div>
</div>
</div>

<div className="absolute top-10 right-10 hidden md:flex items-center gap-3 bg-black/40 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 animate-float-delayed">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-xs font-mono text-green-400">
                    +12.4% Today
                  </span>
</div>
<div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
<div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/40 backdrop-blur-md rounded-full px-3 py-1 mb-4">
<div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse shadow-[0_0_10px_#a855f7]"></div>
<span className="text-[10px] font-bold text-purple-100 uppercase tracking-widest">
                      Live Analysis
                    </span>
</div>
<h3 className="text-white font-semibold text-2xl md:text-3xl tracking-tight leading-tight">
                    Watch: How to generate $500/day
                  </h3>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full px-6">
<div className="max-w-7xl mx-auto">
<div className="glass-card hover:bg-white/70">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 items-center justify-center text-center divide-x-0 md:divide-x divide-slate-200/50">
<div className="flex flex-col items-center group cursor-default">
<span className="text-4xl md:text-5xl font-bold tracking-tighter text-slate-900 group-hover:text-purple-600 transition-colors duration-300">
                  $500M+
                </span>
<span className="text-sm font-semibold mt-2 text-slate-500">
                  Traded Volume
                </span>
</div>
<div className="flex flex-col items-center group cursor-default">
<span className="text-4xl md:text-5xl font-bold tracking-tighter text-slate-900 group-hover:text-purple-600 transition-colors duration-300">
                  92%
                </span>
<span className="text-sm font-semibold mt-2 text-slate-500">
                  Accuracy Rate
                </span>
</div>
<div className="flex flex-col items-center group cursor-default">
<span className="text-4xl md:text-5xl font-bold tracking-tighter text-slate-900 group-hover:text-purple-600 transition-colors duration-300">
                  24/7
                </span>
<span className="text-sm font-semibold mt-2 text-slate-500">
                  Live Support
                </span>
</div>
<div className="flex flex-col items-center group cursor-default">
<span className="text-4xl md:text-5xl font-bold tracking-tighter text-slate-900 group-hover:text-purple-600 transition-colors duration-300">
                  100%
                </span>
<span className="text-sm font-semibold mt-2 text-slate-500">
                  Free Access
                </span>
</div>
</div>
</div>
</div>
</section>

<section className="w-full py-32 bg-[#020617] relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
<div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] mix-blend-screen"></div>
<div className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] mix-blend-screen"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col lg:flex-row items-center gap-20">

<div className="flex-1 text-center lg:text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/50 border border-indigo-500/30 text-indigo-300 text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(99,102,241,0.3)]">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                Global Network Live
              </div>
<h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-8 leading-[0.9]">
                Institutional
                <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                  Market Intelligence.
                </span>
</h2>
<p className="text-slate-400 text-lg font-medium leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0 text-balance">
                We analyze institutional order flow across 12 global hubs in
                real-time. Get the data hedge funds use, delivered straight to
                your phone.
              </p>
<div className="grid grid-cols-2 md:grid-cols-3 gap-8 border-t border-white/5 pt-8">
<div>
<div className="text-3xl font-bold text-white mb-1 tracking-tight">
                    40+
                  </div>
<div className="text-sm text-slate-500 font-semibold uppercase tracking-wide">
                    Countries
                  </div>
</div>
<div>
<div className="text-3xl font-bold text-white mb-1 tracking-tight">
                    12ms
                  </div>
<div className="text-sm text-slate-500 font-semibold uppercase tracking-wide">
                    Latency
                  </div>
</div>
<div className="col-span-2 md:col-span-1">
<div className="text-3xl font-bold text-white mb-1 tracking-tight">
                    24/7
                  </div>
<div className="text-sm text-slate-500 font-semibold uppercase tracking-wide">
                    Uptime
                  </div>
</div>
</div>
</div>

<div className="flex-1 w-full flex items-center justify-center" style={{perspective: '1000px'}}>
<div className="relative w-[340px] h-[340px] md:w-[500px] md:h-[500px] flex items-center justify-center">

<div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 via-purple-500/10 to-transparent rounded-full blur-[80px] animate-pulse"></div>

<div className="absolute inset-0 border border-indigo-500/30 rounded-full animate-[spin_10s_linear_infinite] shadow-[0_0_30px_rgba(99,102,241,0.1)]" style={{transformStyle: 'preserve-3d', transform: 'rotateX(70deg)'}}></div>
<div className="absolute inset-12 border border-purple-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" style={{transformStyle: 'preserve-3d', transform: 'rotateY(60deg) rotateX(10deg)'}}></div>
<div className="absolute inset-24 border border-white/10 rounded-full animate-[spin_7s_linear_infinite]" style={{transformStyle: 'preserve-3d', transform: 'rotateX(45deg) rotateY(45deg)'}}></div>

<div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full bg-slate-950/80 backdrop-blur-md shadow-[0_0_100px_rgba(139,92,246,0.3)] flex items-center justify-center overflow-hidden border border-indigo-500/30 group">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(99,102,241,0.4),transparent)]"></div>
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:16px_16px] opacity-50"></div>
<div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-indigo-500 blur-xl opacity-50 animate-pulse"></div>
<i className="relative z-10 w-10 h-10 md:w-14 md:h-14 text-indigo-200 animate-float" data-lucide="network"></i>
</div>

<div className="absolute top-[20%] -right-[10%] bg-slate-900/90 backdrop-blur-xl border border-indigo-500/30 px-4 py-3 rounded-2xl shadow-2xl animate-[float_6s_ease-in-out_infinite] z-20 hover:scale-105 transition-transform cursor-default">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_#22c55e]"></div>
<div className="text-xs font-bold text-white">
<span className="opacity-50 font-medium block text-[9px] tracking-wider mb-0.5">
                        SIGNAL DETECTED
                      </span>
                      XAUUSD BUY
                    </div>
</div>
</div>
<div className="absolute bottom-[20%] -left-[5%] bg-slate-900/90 backdrop-blur-xl border border-purple-500/30 px-4 py-3 rounded-2xl shadow-2xl animate-[float_5s_ease-in-out_infinite] animation-delay-2000 z-20 hover:scale-105 transition-transform cursor-default">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse shadow-[0_0_10px_#a855f7]"></div>
<div className="text-xs font-bold text-white">
<span className="opacity-50 font-medium block text-[9px] tracking-wider mb-0.5">
                        ACTIVE SESSION
                      </span>
                      London + New York
                    </div>
</div>
</div>
</div>
</div>
</div>
</div>

</section>
<section className="w-full py-32 px-6" id="how-it-works">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-3xl mx-auto mb-24">
<h2 className="text-4xl md:text-6xl tracking-[-0.03em] text-slate-900 mb-6 font-semibold">
              Your Complete
              <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                Profit Toolkit
              </span>
</h2>
<p className="text-xl font-medium text-slate-600 text-balance tracking-tight">
              Everything you need to copy, learn, and profit - all in a single,
              easy-to-use community.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">

<div className="glass-card group rounded-[2.5rem] p-3 h-full flex flex-col">
<div className="h-72 rounded-[2rem] bg-gradient-to-b from-[#F3F0FF] to-white/40 relative overflow-hidden flex items-center justify-center mb-2 border border-white/60 group-hover:bg-[#ECE9FF] transition-colors duration-500">

<div className="relative bg-white/90 backdrop-blur-xl p-6 rounded-3xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] w-52 flex flex-col items-center gap-4 group-hover:scale-110 group-hover:shadow-[0_20px_50px_-10px_rgba(139,92,246,0.3)] transition-all duration-500 z-10 animate-float">
<div className="absolute -top-3 -right-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg ring-2 ring-white">
                    +99 New
                  </div>
<div className="w-16 h-16 bg-[#F3F0FF] rounded-2xl flex items-center justify-center group-hover:bg-purple-600 transition-colors duration-300">
<i className="w-8 h-8 text-purple-600 fill-purple-600/20 group-hover:text-white group-hover:fill-white/20 transition-colors duration-300" data-lucide="message-circle"></i>
</div>
<div className="space-y-2 w-full opacity-60 group-hover:opacity-100 transition-opacity">
<div className="h-2 bg-slate-200 rounded-full w-2/3 mx-auto"></div>
<div className="h-2 bg-slate-200 rounded-full w-full"></div>
</div>
</div>
</div>
<div className="px-6 pb-8 pt-4 mt-auto">
<h3 className="text-2xl text-slate-900 mb-2 tracking-tight font-bold group-hover:text-purple-600 transition-colors">
                  Instant Access
                </h3>
<p className="leading-relaxed font-medium text-sm text-slate-500">
                  Get immediate access to our VIP Telegram channel. Setup takes
                  less than 60 seconds.
                </p>
</div>
</div>

<div className="glass-card group rounded-[2.5rem] p-3 h-full flex flex-col">
<div className="h-72 rounded-[2rem] bg-gradient-to-b from-purple-50/50 to-white/40 relative overflow-hidden flex items-center justify-center mb-2 border border-white/60 group-hover:bg-purple-50/80 transition-colors duration-500">
<div className="relative z-10 w-64 animate-float-delayed">
<div className="bg-slate-900 rounded-3xl p-4 shadow-2xl rotate-[-4deg] group-hover:rotate-0 group-hover:scale-105 transition-all duration-500 translate-y-6">
<div className="bg-white/10 backdrop-blur rounded-2xl p-3 mt-4 space-y-3 border border-white/5">
<div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-4 shadow-lg shadow-purple-500/20 relative overflow-hidden">
<div className="flex justify-between items-start mb-3 relative z-10">
<div className="flex items-center gap-2">
<span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
<span className="text-[9px] font-bold text-purple-950/80 uppercase tracking-wider bg-white/30 px-2 py-0.5 rounded">
                              Signal
                            </span>
</div>
</div>
<div className="text-white font-bold text-lg tracking-tight mb-1">
                          BUY XAUUSD
                        </div>
</div>
</div>
</div>
</div>
</div>
<div className="px-6 pb-8 pt-4 mt-auto">
<h3 className="text-2xl text-slate-900 mb-2 tracking-tight font-bold group-hover:text-purple-600 transition-colors">
                  Copy. Paste. Profit.
                </h3>
<p className="leading-relaxed font-medium text-sm text-slate-500">
                  Get 3-5 high-probability signals daily. We give you exact
                  entry, stop loss, and take profit targets.
                </p>
</div>
</div>

<div className="glass-card group rounded-[2.5rem] p-3 h-full flex flex-col">
<div className="h-72 rounded-[2rem] bg-gradient-to-b from-indigo-50/50 to-white/40 relative overflow-hidden flex items-center justify-center mb-2 border border-white/60 group-hover:bg-indigo-50/80 transition-colors duration-500">
<div className="relative w-full h-full flex items-end justify-center px-8 pb-10">

<div className="absolute top-8 right-8 bg-white/90 backdrop-blur-md p-3 pr-5 pl-4 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] border border-white z-20 flex items-center gap-3 animate-float">
<div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600">
<i className="w-5 h-5" data-lucide="wallet"></i>
</div>
<div>
<div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                        Total Profit
                      </div>
<div className="text-lg font-bold text-slate-900 tracking-tight">
                        +$1,240.50
                      </div>
</div>
</div>

<div className="flex items-end gap-3 w-full h-40 relative z-10 px-4">
<div className="graph-bar bar-1 w-1/4 bg-purple-200/80 rounded-t-xl h-[30%]"></div>
<div className="graph-bar bar-2 w-1/4 bg-purple-300/80 rounded-t-xl h-[50%]"></div>
<div className="graph-bar bar-3 w-1/4 bg-purple-400/80 rounded-t-xl h-[40%]"></div>
<div className="graph-bar bar-4 w-1/4 bg-gradient-to-t from-purple-600 to-indigo-500 rounded-t-xl h-[75%] shadow-[0_0_20px_rgba(93,95,239,0.4)] relative">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        +124%
                      </div>
</div>
</div>
</div>
</div>
<div className="px-6 pb-8 pt-4 mt-auto">
<h3 className="text-2xl text-slate-900 mb-2 tracking-tight font-bold group-hover:text-indigo-600 transition-colors">
                  Consistent Growth
                </h3>
<p className="leading-relaxed font-medium text-sm text-slate-500">
                  Stop gambling. Start compounding. Join a community focused on
                  sustainable, long-term wealth.
                </p>
</div>
</div>
</div>
</div>
</section>
<section className="w-full py-32 bg-[#050912] relative overflow-hidden">

<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent"></div>
<div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24">

<div className="flex-1 text-center md:text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/20 border border-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
</span>
                Live Inside The Group
              </div>
<h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tighter mb-6 leading-[1]">
                Inside the
                <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                  Trading Floor.
                </span>
</h2>
<p className="text-slate-400 text-lg font-medium leading-relaxed mb-10 text-balance">
                Experience the rush of real-time wins. Instant notifications,
                live analysis, and a community winning together.
              </p>
<div className="flex flex-wrap gap-4 justify-center md:justify-start">
<div className="px-5 py-3 rounded-xl bg-slate-800/50 border border-white/10 flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center">
<i className="w-5 h-5 text-indigo-400" data-lucide="bell"></i>
</div>
<div className="text-left">
<div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                      Speed
                    </div>
<div className="text-sm font-bold text-white">
                      Instant Alerts
                    </div>
</div>
</div>
<div className="px-5 py-3 rounded-xl bg-slate-800/50 border border-white/10 flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
<i className="w-5 h-5 text-purple-400" data-lucide="message-square"></i>
</div>
<div className="text-left">
<div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                      Community
                    </div>
<div className="text-sm font-bold text-white">Active Chat</div>
</div>
</div>
</div>
</div>

<div className="flex-1 w-full relative perspective-[2000px] group">

<div className="absolute inset-0 bg-gradient-to-tr from-indigo-600 to-purple-600 blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>

<div className="relative mx-auto w-[300px] h-[600px] md:w-[340px] md:h-[680px] bg-[#020408] rounded-[3rem] border-[6px] border-[#1a1f2e] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] ring-1 ring-white/10 transform rotate-y-[-12deg] rotate-x-[5deg] group-hover:rotate-y-0 group-hover:rotate-x-0 transition-all duration-1000 ease-out z-10">

<div className="absolute inset-1 bg-slate-900 rounded-[2.5rem] overflow-hidden relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-b-xl z-30"></div>

<div className="w-full h-full relative">
<img alt="Telegram Interface" className="w-full h-full object-cover opacity-60 mix-blend-overlay" src="https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 via-slate-900/80 to-slate-900"></div>

<div className="absolute inset-0 flex items-center justify-center z-20">
<div className="w-20 h-20 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.1)] group-hover:scale-110 transition-transform duration-300 cursor-pointer">
<i className="w-8 h-8 text-white fill-white ml-1" data-lucide="play"></i>
</div>
</div>

<div className="absolute bottom-8 left-4 right-4 space-y-3 z-20">
<div className="bg-slate-800/80 backdrop-blur-md p-3 rounded-2xl rounded-tl-sm border border-white/10 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 shadow-lg">
<div className="flex justify-between items-start mb-1">
<span className="text-[10px] font-bold text-purple-400">
                            VIP Signal
                          </span>
<span className="text-[9px] text-slate-500">Now</span>
</div>
<div className="text-xs font-semibold text-white">
                          🚀 Gold (XAUUSD) hitting TP2! +80 pips secured. Move
                          SL to breakeven.
                        </div>
</div>
<div className="bg-indigo-600/90 backdrop-blur-md p-3 rounded-2xl rounded-tr-sm border border-indigo-400/30 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-300 shadow-lg ml-8">
<div className="text-xs font-semibold text-white">
                          Thanks Basil! Just made $450 on that move.
                        </div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute top-20 -right-8 md:-right-12 bg-slate-900/80 backdrop-blur-xl border border-green-500/20 p-4 rounded-2xl shadow-2xl animate-float hidden md:block z-20">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
<i className="w-5 h-5 text-green-400" data-lucide="trending-up"></i>
</div>
<div>
<div className="text-[10px] text-slate-400 font-bold uppercase">
                      Results
                    </div>
<div className="text-lg font-bold text-white">
                      +$1,240 Today
                    </div>
</div>
</div>
</div>
<div className="absolute bottom-32 -left-8 md:-left-12 bg-slate-900/80 backdrop-blur-xl border border-blue-500/20 p-4 rounded-2xl shadow-2xl animate-float animation-delay-2000 hidden md:block z-20">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
<i className="w-5 h-5 text-blue-400" data-lucide="users"></i>
</div>
<div>
<div className="text-[10px] text-slate-400 font-bold uppercase">
                      Live Members
                    </div>
<div className="text-lg font-bold text-white">4,200+</div>
</div>
</div>
</div>
</div>
</div>
</div>

</section>

<section className="py-32 px-6 relative overflow-hidden">
<div className="glass-card max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center p-16 rounded-[3rem]">
<div>
<h2 className="text-5xl md:text-6xl font-semibold tracking-tighter mb-8 leading-[0.95] text-slate-900">
              Why is Elite Reality
              <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                100% Free?
              </span>
</h2>
<div className="space-y-8 text-slate-600 font-medium text-lg leading-relaxed">
<p>
                We operate on a shared success model. We only win when you do.
              </p>
<p>
                Our broker partnerships cover all costs, meaning you get
                institutional-grade signals without paying a cent in
                subscription fees.
              </p>
</div>
<div className="mt-12 flex gap-4">
<a className="btn-glow px-8 py-3.5 rounded-full text-white font-semibold inline-flex items-center gap-2" href="#">
                Claim Free Access
                <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
<div className="relative">
<div className="bg-white/60 backdrop-blur-xl border border-white/60 rounded-[2.5rem] p-10 lg:p-14 shadow-lg relative overflow-hidden">
<h3 className="text-2xl font-bold mb-10 text-slate-900 tracking-tight flex items-center gap-3">
<div className="p-2 bg-purple-100/50 rounded-lg">
<i className="text-purple-600" data-lucide="bar-chart-2"></i>
</div>
                Compare the Benefits
              </h3>
<div className="space-y-10">
<div className="flex gap-6 items-start group/item hover:translate-x-2 transition-transform duration-300">
<div className="w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center shrink-0 group-hover/item:bg-purple-500 transition-colors duration-300">
<i className="w-7 h-7 text-purple-600 group-hover/item:text-white transition-colors" data-lucide="globe"></i>
</div>
<div>
<h4 className="font-bold text-slate-900 text-xl mb-2">
                      Global Network
                    </h4>
<p className="text-base leading-relaxed text-slate-600">
                      Join traders from 40+ countries sharing live strategies.
                    </p>
</div>
</div>
<div className="flex gap-6 items-start group/item hover:translate-x-2 transition-transform duration-300">
<div className="w-14 h-14 rounded-2xl bg-pink-50 flex items-center justify-center shrink-0 group-hover/item:bg-pink-500 transition-colors duration-300">
<i className="w-7 h-7 text-pink-600 group-hover/item:text-white transition-colors" data-lucide="eye"></i>
</div>
<div>
<h4 className="font-bold text-slate-900 text-xl mb-2">
                      Full Transparency
                    </h4>
<p className="text-base leading-relaxed text-slate-600">
                      Live P&amp;L tracking and verified monthly reports.
                    </p>
</div>
</div>
<div className="flex gap-6 items-start group/item hover:translate-x-2 transition-transform duration-300">
<div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0 group-hover/item:bg-blue-500 transition-colors duration-300">
<i className="w-7 h-7 text-blue-600 group-hover/item:text-white transition-colors" data-lucide="clock"></i>
</div>
<div>
<h4 className="font-bold text-slate-900 text-xl mb-2">
                      Time Efficient
                    </h4>
<p className="text-base leading-relaxed text-slate-600">
                      Spend less than 30 minutes a day managing positions.
                    </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="px-6 relative z-10">
<div className="max-w-5xl mx-auto">
<h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight text-slate-900">
            Stop paying for signals.
          </h2>

<div className="w-full">

<div className="grid grid-cols-12 mb-6 px-6">
<div className="col-span-6"></div>

<div className="col-span-3 flex justify-center items-center gap-2">
<div className="flex items-center justify-center w-6 h-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-md shadow-lg shadow-purple-500/20">
<i className="w-3 h-3 text-white" data-lucide="zap"></i>
</div>
<span className="text-lg font-bold text-slate-900">
                  Elite Reality
                </span>
</div>
<div className="col-span-3 flex justify-center items-center">
<span className="text-lg font-medium text-slate-500">Others</span>
</div>
</div>

<div className="grid grid-cols-12 items-center rounded-full mb-3">
<div className="col-span-6 font-semibold text-slate-800">
                All-in-one trading hub
              </div>
<div className="col-span-3 flex justify-center">
<div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-purple-500/30">
<i className="w-4 h-4 stroke-[3]" data-lucide="check"></i>
</div>
</div>
<div className="col-span-3 flex justify-center">
<div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-slate-400">
<i className="w-4 h-4 stroke-[3]" data-lucide="minus"></i>
</div>
</div>
</div>

<div className="grid grid-cols-12 items-center py-4 px-6 mb-3 py-6 px-8">
<div className="col-span-6 font-semibold text-slate-800">
                Real-time signals
              </div>
<div className="col-span-3 flex justify-center">
<div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-purple-500/30">
<i className="w-4 h-4 stroke-[3]" data-lucide="check"></i>
</div>
</div>
<div className="col-span-3 flex justify-center">
<div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-slate-400">
<i className="w-4 h-4 stroke-[3]" data-lucide="minus"></i>
</div>
</div>
</div>

<div className="grid grid-cols-12 items-center py-4 px-6 bg-[#EBE7FF]/60 rounded-full mb-3">
<div className="col-span-6 font-semibold text-slate-800">
                Built-in risk management
              </div>
<div className="col-span-3 flex justify-center">
<div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-purple-500/30">
<i className="w-4 h-4 stroke-[3]" data-lucide="check"></i>
</div>
</div>
<div className="col-span-3 flex justify-center">
<div className="w-6 h-6 rounded-full bg-slate-900 flex items-center justify-center text-white">
<i className="w-4 h-4 stroke-[3]" data-lucide="check"></i>
</div>
</div>
</div>

<div className="grid grid-cols-12 items-center py-4 px-6 mb-3">
<div className="col-span-6 font-semibold text-slate-800">
                Easy setup
              </div>
<div className="col-span-3 flex justify-center">
<div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-purple-500/30">
<i className="w-4 h-4 stroke-[3]" data-lucide="check"></i>
</div>
</div>
<div className="col-span-3 flex justify-center">
<div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-slate-400">
<i className="w-4 h-4 stroke-[3]" data-lucide="x"></i>
</div>
</div>
</div>

<div className="grid grid-cols-12 items-center py-4 px-6 bg-[#EBE7FF]/60 rounded-full mb-3">
<div className="col-span-6 font-semibold text-slate-800">
                Clean execution
              </div>
<div className="col-span-3 flex justify-center">
<div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-purple-500/30">
<i className="w-4 h-4 stroke-[3]" data-lucide="check"></i>
</div>
</div>
<div className="col-span-3 flex justify-center">
<div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-slate-400">
<i className="w-4 h-4 stroke-[3]" data-lucide="x"></i>
</div>
</div>
</div>

<div className="grid grid-cols-12 items-center py-4 px-6 mb-3">
<div className="col-span-6 font-semibold text-slate-800">
                No experience needed
              </div>
<div className="col-span-3 flex justify-center">
<div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-purple-500/30">
<i className="w-4 h-4 stroke-[3]" data-lucide="check"></i>
</div>
</div>
<div className="col-span-3 flex justify-center">
<div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-slate-400">
<i className="w-4 h-4 stroke-[3]" data-lucide="x"></i>
</div>
</div>
</div>

<div className="grid grid-cols-12 items-center py-4 px-6 bg-[#EBE7FF]/60 rounded-full mb-3">
<div className="col-span-6 font-semibold text-slate-800">
                Simple, focused interface
              </div>
<div className="col-span-3 flex justify-center">
<div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-purple-500/30">
<i className="w-4 h-4 stroke-[3]" data-lucide="check"></i>
</div>
</div>
<div className="col-span-3 flex justify-center">
<div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-slate-400">
<i className="w-4 h-4 stroke-[3]" data-lucide="x"></i>
</div>
</div>
</div>
</div>

<div className="mt-20 text-center max-w-2xl mx-auto">
<p className="text-xl font-medium text-slate-900 mb-6 tracking-tight">
              "We built Elite Reality to remove friction. Fewer tools, clearer
              workflows, faster decisions."
            </p>
<div className="flex items-center justify-center gap-3">
<img alt="Founder" className="w-10 h-10 rounded-full object-cover shadow-md border-2 border-white" src="https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
<span className="font-bold text-sm text-slate-800">
                Basil Atwani, CEO &amp; Founder
              </span>
</div>
</div>
</div>
</section>

<section className="w-full py-32 px-6" id="about">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
<div className="flex-1 order-2 md:order-1">
<div className="relative group">
<div className="absolute -inset-4 bg-gradient-to-tr from-purple-600 to-indigo-500 rounded-[3rem] rotate-3 group-hover:rotate-6 transition-transform duration-500 opacity-30 blur-2xl"></div>
<img alt="Basil Atwani" className="relative rounded-[2.5rem] shadow-2xl w-full object-cover h-[600px] transition-transform duration-500 border border-white/50 grayscale hover:grayscale-0" src="https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>

<div className="absolute -bottom-10 -right-10 bg-white/90 backdrop-blur-xl p-8 rounded-[2rem] shadow-[0_20px_60px_-10px_rgba(0,0,0,0.1)] border border-white hidden md:block animate-float">
<div className="flex items-center gap-4 mb-3">
<div className="flex -space-x-3">
<img alt="member" className="w-10 h-10 rounded-full border-[3px] border-white shadow-sm" src="https://i.pravatar.cc/100?img=11"/>
<img alt="member" className="w-10 h-10 rounded-full border-[3px] border-white shadow-sm" src="https://i.pravatar.cc/100?img=12"/>
<img alt="member" className="w-10 h-10 rounded-full border-[3px] border-white shadow-sm" src="https://i.pravatar.cc/100?img=13"/>
</div>
<div>
<span className="block text-sm font-bold text-slate-900">
                      +4,231 Members
                    </span>
<span className="text-[10px] text-green-600 font-bold bg-green-100 px-2 py-0.5 rounded-full">
                      Active Now
                    </span>
</div>
</div>
</div>
</div>
</div>
<div className="flex-1 order-1 md:order-2">
<h2 className="text-5xl md:text-6xl font-semibold tracking-tighter text-slate-900 mb-10 leading-[0.95]">
              Meet Basil.
              <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-500">
                Your expert trading partner.
              </span>
</h2>
<div className="space-y-8 text-xl text-slate-600 font-medium leading-relaxed">
<p>
                Basil Atwani, founder of EliteReality, brings over six years of
                rigorous financial market experience. He has traveled the globe
                not just to trade, but to understand the economic pulse of
                different markets.
              </p>
<p>
                "Trading shouldn't be a solitary struggle. I created
                EliteReality to democratize access to institutional-grade
                strategies."
              </p>
</div>
<div className="mt-8">
<button className="text-purple-600 font-bold text-lg flex items-center gap-2 group">
                Read his full story
                <i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-white border-y border-slate-100" id="video-testimonials">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="max-w-2xl">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-slate-900 mb-6">
                Real stories from
                <br/>
<span className="text-purple-600">verified traders.</span>
</h2>
<p className="text-lg text-slate-600 font-medium tracking-tight">
                Watch how everyday people are transforming their financial
                reality with our signals.
              </p>
</div>
<div className="hidden md:block">
<a className="text-sm font-semibold text-purple-600 flex items-center gap-2 hover:translate-x-1 transition-transform" href="#">
                View all stories
                <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group relative rounded-3xl overflow-hidden aspect-[3/4] cursor-pointer shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 bg-slate-100">
<img alt="Testimonial" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 group-hover:scale-110 group-hover:bg-white/40 transition-all duration-300 shadow-xl">
<i className="w-6 h-6 text-white fill-white ml-1" data-lucide="play"></i>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent pt-32">
<div className="flex items-center gap-2 mb-2">
<span className="px-2 py-0.5 rounded-full bg-green-500/20 text-green-300 text-[10px] font-bold uppercase tracking-wider border border-green-500/30">
                    +$12.4k Profit
                  </span>
</div>
<h3 className="text-white font-bold text-xl tracking-tight leading-tight">
                  "I quit my 9-5 after 3 months."
                </h3>
<p className="text-white/80 text-sm mt-2 font-medium">
                  Sarah J. • London, UK
                </p>
</div>
</div>

<div className="group relative rounded-3xl overflow-hidden aspect-[3/4] cursor-pointer shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 bg-slate-100">
<img alt="Testimonial" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 group-hover:scale-110 group-hover:bg-white/40 transition-all duration-300 shadow-xl">
<i className="w-6 h-6 text-white fill-white ml-1" data-lucide="play"></i>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent pt-32">
<div className="flex items-center gap-2 mb-2">
<span className="px-2 py-0.5 rounded-full bg-green-500/20 text-green-300 text-[10px] font-bold uppercase tracking-wider border border-green-500/30">
                    +$4.2k This Week
                  </span>
</div>
<h3 className="text-white font-bold text-xl tracking-tight leading-tight">
                  "The signals are incredibly accurate."
                </h3>
<p className="text-white/80 text-sm mt-2 font-medium">
                  Michael R. • Toronto, CA
                </p>
</div>
</div>

<div className="group relative rounded-3xl overflow-hidden aspect-[3/4] cursor-pointer shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 bg-slate-100">
<img alt="Testimonial" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 group-hover:scale-110 group-hover:bg-white/40 transition-all duration-300 shadow-xl">
<i className="w-6 h-6 text-white fill-white ml-1" data-lucide="play"></i>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent pt-32">
<div className="flex items-center gap-2 mb-2">
<span className="px-2 py-0.5 rounded-full bg-green-500/20 text-green-300 text-[10px] font-bold uppercase tracking-wider border border-green-500/30">
                    Beginner Friendly
                  </span>
</div>
<h3 className="text-white font-bold text-xl tracking-tight leading-tight">
                  "Zero experience to pro in weeks."
                </h3>
<p className="text-white/80 text-sm mt-2 font-medium">
                  Elena G. • Dubai, UAE
                </p>
</div>
</div>

<div className="group relative rounded-3xl overflow-hidden aspect-[3/4] cursor-pointer shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 bg-slate-100">
<img alt="Testimonial" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 group-hover:scale-110 group-hover:bg-white/40 transition-all duration-300 shadow-xl">
<i className="w-6 h-6 text-white fill-white ml-1" data-lucide="play"></i>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent pt-32">
<div className="flex items-center gap-2 mb-2">
<span className="px-2 py-0.5 rounded-full bg-green-500/20 text-green-300 text-[10px] font-bold uppercase tracking-wider border border-green-500/30">
                    Full Time Trader
                  </span>
</div>
<h3 className="text-white font-bold text-xl tracking-tight leading-tight">
                  "Finally a community that delivers."
                </h3>
<p className="text-white/80 text-sm mt-2 font-medium">
                  David K. • Sydney, AU
                </p>
</div>
</div>

<div className="group relative rounded-3xl overflow-hidden aspect-[3/4] cursor-pointer shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 bg-slate-100">
<img alt="Testimonial" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 group-hover:scale-110 group-hover:bg-white/40 transition-all duration-300 shadow-xl">
<i className="w-6 h-6 text-white fill-white ml-1" data-lucide="play"></i>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent pt-32">
<div className="flex items-center gap-2 mb-2">
<span className="px-2 py-0.5 rounded-full bg-green-500/20 text-green-300 text-[10px] font-bold uppercase tracking-wider border border-green-500/30">
                    Crypto &amp; Forex
                  </span>
</div>
<h3 className="text-white font-bold text-xl tracking-tight leading-tight">
                  "The transparency is unmatched."
                </h3>
<p className="text-white/80 text-sm mt-2 font-medium">
                  Priya P. • Mumbai, IN
                </p>
</div>
</div>

<div className="group relative rounded-3xl overflow-hidden aspect-[3/4] cursor-pointer shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 bg-slate-100">
<img alt="Testimonial" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 group-hover:scale-110 group-hover:bg-white/40 transition-all duration-300 shadow-xl">
<i className="w-6 h-6 text-white fill-white ml-1" data-lucide="play"></i>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent pt-32">
<div className="flex items-center gap-2 mb-2">
<span className="px-2 py-0.5 rounded-full bg-green-500/20 text-green-300 text-[10px] font-bold uppercase tracking-wider border border-green-500/30">
                    Retired Early
                  </span>
</div>
<h3 className="text-white font-bold text-xl tracking-tight leading-tight">
                  "Best financial decision I've made."
                </h3>
<p className="text-white/80 text-sm mt-2 font-medium">
                  James W. • Austin, USA
                </p>
</div>
</div>
</div>
</div>
</section>
<section className="py-32 relative overflow-hidden" id="testimonials">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-24">
<h2 className="text-4xl font-semibold tracking-tighter text-slate-900 mb-6">
              Claim your free access
              <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-500">
                before spots fill.
              </span>
</h2>
<p className="text-xl font-medium text-slate-600 max-w-2xl mx-auto tracking-tight">
              Don't miss the next big move. Join 4,000+ members capitalizing on
              the market right now.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="glass-card p-10 rounded-[2.5rem] hover:-translate-y-2 transition-transform">
<div className="flex text-amber-400 gap-1 mb-6">
<i className="fill-current w-5 h-5" data-lucide="star"></i>
<i className="fill-current w-5 h-5" data-lucide="star"></i>
<i className="fill-current w-5 h-5" data-lucide="star"></i>
<i className="fill-current w-5 h-5" data-lucide="star"></i>
<i className="fill-current w-5 h-5" data-lucide="star"></i>
</div>
<p className="text-slate-800 font-medium mb-10 leading-relaxed text-base">
                "Honestly, so stoked! Made more in the last 7 days than I do in
                2 months at my job. I'm knocking on Dubai's door soon!"
              </p>
<div className="flex items-center gap-4 border-t border-slate-200/50 pt-6">
<div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center font-bold text-purple-700 text-sm">
                  AT
                </div>
<div>
<div className="font-bold text-slate-900 text-base">
                    Alexandre Trochut
                  </div>
<div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Verified Member
                  </div>
</div>
</div>
</div>

<div className="glass-card p-10 rounded-[2.5rem] hover:-translate-y-2 transition-transform">
<div className="flex text-amber-400 gap-1 mb-6">
<i className="fill-current w-5 h-5" data-lucide="star"></i>
<i className="fill-current w-5 h-5" data-lucide="star"></i>
<i className="fill-current w-5 h-5" data-lucide="star"></i>
<i className="fill-current w-5 h-5" data-lucide="star"></i>
<i className="fill-current w-5 h-5" data-lucide="star"></i>
</div>
<p className="text-slate-800 font-medium mb-10 leading-relaxed text-base">
                "I’ve made $2,500 in profit this week—partly from my own trades
                and partly from copying yours. The analysis is spot on."
              </p>
<div className="flex items-center gap-4 border-t border-slate-200/50 pt-6">
<div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-700 text-sm">
                  JC
                </div>
<div>
<div className="font-bold text-slate-900 text-base">
                    John Carpenter
                  </div>
<div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Verified Member
                  </div>
</div>
</div>
</div>

<div className="glass-card p-10 rounded-[2.5rem] hover:-translate-y-2 transition-transform">
<div className="flex text-amber-400 gap-1 mb-6">
<i className="fill-current w-5 h-5" data-lucide="star"></i>
<i className="fill-current w-5 h-5" data-lucide="star"></i>
<i className="fill-current w-5 h-5" data-lucide="star"></i>
<i className="fill-current w-5 h-5" data-lucide="star"></i>
<i className="fill-current w-5 h-5" data-lucide="star"></i>
</div>
<p className="text-slate-800 font-medium mb-10 leading-relaxed text-base">
                "Opened my account in July and turned it into 100K AUD in just 2
                months! Absolutely insane results."
              </p>
<div className="flex items-center gap-4 border-t border-slate-200/50 pt-6">
<div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center font-bold text-emerald-700 text-sm">
                  L
                </div>
<div>
<div className="font-bold text-slate-900 text-base">Lindsey</div>
<div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Verified Member
                  </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full py-24 px-6 relative py-32">
<div className="max-w-6xl mx-auto rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl bg-white group hover:shadow-[0_20px_60px_-15px_rgba(139,92,246,0.3)] transition-all duration-500">

<div className="absolute inset-0 bg-gradient-to-b from-[#F3F0FF] to-white"></div>
<div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[80px]"></div>
<div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[80px]"></div>
<div className="relative z-10">
<h2 className="text-4xl md:text-6xl font-semibold text-slate-900 tracking-tighter mb-8 leading-[0.95]">
              Start your trading journey
              <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-500">
                completely free.
              </span>
</h2>
<p className="text-lg mb-12 max-w-xl mx-auto font-medium text-slate-600">
              Join our Telegram group now. Get expert guidance, daily signals,
              and a supportive community.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-6">
<a className="btn-glow px-10 py-4 rounded-full text-white font-semibold text-lg flex items-center gap-3" href="#">
<span>Get Started Now</span>
<i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</a>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-[#0B0F19] text-slate-400 pt-24 pb-12 w-full border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-16">
<div className="max-w-sm">
<a className="flex items-center gap-3 mb-8 group" href="#">
<div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg shadow-purple-900/40 group-hover:scale-110 transition-transform">
<i className="w-5 h-5 text-white fill-white" data-lucide="zap"></i>
</div>
<span className="text-xl font-bold tracking-tight text-white">
              Elite Reality
            </span>
</a>
<p className="text-sm leading-relaxed font-medium">
            The world's leading community for serious traders. Providing the
            tools, signals, and education you need to succeed in the financial
            markets.
          </p>
</div>
<div className="flex gap-24 flex-wrap">
<div>
<h4 className="mb-6 text-xs font-bold text-white uppercase tracking-widest">
              Platform
            </h4>
<ul className="space-y-4 text-sm font-medium">
<li>
<a className="hover:text-purple-400 transition-colors" href="#">
                  How It Works
                </a>
</li>
<li>
<a className="hover:text-purple-400 transition-colors" href="#">
                  Testimonials
                </a>
</li>
<li>
<a className="hover:text-purple-400 transition-colors" href="#">
                  Pricing (Free)
                </a>
</li>
</ul>
</div>
<div>
<h4 className="mb-6 text-xs font-bold text-white uppercase tracking-widest">
              Company
            </h4>
<ul className="space-y-4 text-sm font-medium">
<li>
<a className="hover:text-purple-400 transition-colors" href="#">
                  About Us
                </a>
</li>
<li>
<a className="hover:text-purple-400 transition-colors" href="#">
                  Blog
                </a>
</li>
<li>
<a className="hover:text-purple-400 transition-colors" href="#">
                  Privacy Policy
                </a>
</li>
</ul>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
<p className="text-xs font-semibold text-slate-500">
          © 2025 Elite Reality Trading. All rights reserved.
        </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300" href="#">
<i className="w-4 h-4" data-lucide="twitter"></i>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300" href="#">
<i className="w-4 h-4" data-lucide="instagram"></i>
</a>
</div>
</div>
</footer>



    </>
  );
}
