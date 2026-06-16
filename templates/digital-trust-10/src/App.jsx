import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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
`.replace(/\s+/g, ' ').trim(),
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
`.replace(/\s+/g, ' ').trim(),
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
`.replace(/\s+/g, ' ').trim(),
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
`.replace(/\s+/g, ' ').trim(),
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
`.replace(/\s+/g, ' ').trim(),
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
`.replace(/\s+/g, ' ').trim(),
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



    document.addEventListener("DOMContentLoaded", () => {
      // Intersection Observer for Scroll Reveals
      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
      };

      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      }, observerOptions);

      document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
      });

      // Scroll Progress Bar
      const progressBar = document.getElementById('scroll-progress');
      window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height);
        if(progressBar) progressBar.style.transform = `scaleX(${scrolled})`;
      });
      
      // Custom Toggle Logic (Visual only for mockup)
      const toggles = document.querySelectorAll('.group.cursor-pointer');
      toggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
          const dot = this.querySelector('.absolute.left-1');
          const bg = this.querySelector('.w-12.bg-\\[\\#4ba3e3\\]') || this.querySelector('.w-12.bg-white\\/10');
          if(dot && bg) {
            if(dot.classList.contains('translate-x-6')) {
              dot.classList.remove('translate-x-6');
              bg.classList.remove('bg-[#4ba3e3]');
              bg.classList.add('bg-white/10');
            } else {
              dot.classList.add('translate-x-6');
              bg.classList.remove('bg-white/10');
              bg.classList.add('bg-[#4ba3e3]');
            }
          }
        });
      });
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] mix-blend-multiply" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E\')'}}></div>

<div className="fixed top-0 left-0 h-1 bg-[#4ba3e3] z-[110] origin-left transition-transform duration-150 ease-out" id="scroll-progress" style={{transform: 'scaleX(0)'}}></div>

<div className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none px-6 reveal in-view">
<header className="bg-[#ebedea]/80 backdrop-blur-xl border border-[#2d322f]/10 rounded-full h-16 flex items-center px-6 md:px-8 justify-between shadow-[0_8px_32px_rgba(45,50,47,0.05)] pointer-events-auto w-full max-w-[1000px] transition-all duration-300 hover:border-[#2d322f]/20">

<a className="flex items-center text-xl font-medium tracking-widest uppercase text-[#2d322f]" href="/">
        TRST.
      </a>

<nav className="hidden md:flex items-center gap-8">
<a className="group text-sm font-normal text-[#2d322f]/70 hover:text-[#4ba3e3] transition-colors uppercase tracking-widest relative" href="#">
          Topics
        </a>
<a className="group text-sm font-normal text-[#2d322f]/70 hover:text-[#4ba3e3] transition-colors uppercase tracking-widest relative" href="#">
          Frameworks
        </a>
<a className="group text-sm font-normal text-[#2d322f]/70 hover:text-[#4ba3e3] transition-colors uppercase tracking-widest relative" href="#">
          Journal
        </a>
<a className="group text-sm font-normal text-[#2d322f]/70 hover:text-[#4ba3e3] transition-colors uppercase tracking-widest relative" href="#">
          Reports
        </a>
<a className="group text-sm font-normal text-[#2d322f]/70 hover:text-[#4ba3e3] transition-colors uppercase tracking-widest relative" href="#">
          Tool
        </a>
</nav>

<div className="flex items-center gap-4">
<button aria-label="Search" className="text-[#2d322f] hover:text-[#4ba3e3] transition-colors hidden sm:flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:magnifer-linear"></iconify-icon>
</button>
<button className="uppercase hover:bg-[#4ba3e3] hover:shadow-lg transition-all duration-300 flex text-xs md:text-sm font-normal text-white tracking-widest bg-[#2d322f] rounded-full px-5 py-2.5 gap-2 items-center">
          Book Audit
          <iconify-icon className="text-lg" icon="solar:clipboard-check-linear"></iconify-icon>
</button>
</div>
</header>
</div>
<main>

<section className="relative w-full min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
<div className="absolute inset-0 z-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]"></div>
<div className="flex flex-col text-center max-w-[1200px] z-10 mr-auto ml-auto pr-6 pl-6 relative items-center">

<div className="reveal delay-100 mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#4ba3e3]/20 bg-white/50 backdrop-blur-md text-sm tracking-widest uppercase text-[#2d322f]/80 shadow-sm">
<span className="flex h-1.5 w-1.5 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ba3e3] opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#4ba3e3]"></span>
</span>
          Digital Trust Signals Journal
        </div>

<h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tight uppercase text-[#2d322f] font-playfair font-normal leading-[0.9] max-w-5xl">
<span className="block reveal delay-200">How Trust is Built,</span>
<span className="block reveal delay-300 bg-clip-text text-transparent bg-gradient-to-r from-[#2d322f] to-[#4ba3e3]">Measured &amp; Lost Online</span>
</h1>

<p className="reveal delay-400 mt-8 text-xl md:text-2xl text-[#2d322f]/60 font-playfair font-normal max-w-2xl leading-relaxed">
          Navigate authenticity, disclosure, and reputation in an era of polished content and AI-generated media. Clear frameworks for modern credibility.
        </p>

<div className="reveal delay-500 mt-12 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<button className="w-full sm:w-auto bg-[#2d322f] text-white rounded-full px-8 py-4 text-sm font-normal uppercase tracking-widest hover:bg-[#4ba3e3] hover:shadow-[0_8px_32px_rgba(75,163,227,0.3)] transition-all duration-300 flex items-center justify-center gap-2">
            Read the Journal
          </button>
<button className="w-full sm:w-auto bg-transparent border border-[#2d322f]/20 text-[#2d322f] rounded-full px-8 py-4 text-sm font-normal uppercase tracking-widest hover:border-[#4ba3e3]/50 hover:text-[#4ba3e3] transition-all duration-300 flex items-center justify-center gap-2">
<iconify-icon className="text-lg" icon="solar:calculator-linear"></iconify-icon>
            Use Trust Calculator
          </button>
</div>

<div className="reveal reveal-scale delay-500 mt-24 w-full max-w-4xl relative group cursor-pointer perspective-1000">
<div className="absolute -inset-1 bg-gradient-to-b from-[#4ba3e3]/20 to-transparent rounded-3xl blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-[#2d322f]/10 bg-[#1e2420] shadow-[0_20px_60px_-15px_rgba(45,50,47,0.3)] transform transition-transform duration-700 group-hover:-translate-y-2 group-hover:rotate-x-2">
<img alt="Data Analysis" className="w-full h-full object-cover opacity-80 mix-blend-luminosity group-hover:mix-blend-normal group-hover:scale-105 transition-all duration-1000" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&amp;fit=crop&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1e2420]/90 via-[#1e2420]/30 to-transparent pointer-events-none"></div>
<div className="flex absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 text-white group-hover:bg-[#4ba3e3] group-hover:border-[#4ba3e3] group-hover:scale-110 transition-all duration-500 shadow-2xl">
<iconify-icon className="text-2xl ml-0.5" icon="solar:document-text-linear"></iconify-icon>
</div>
</div>
<div className="absolute bottom-8 left-8 text-left">
<span className="text-white/70 text-sm tracking-widest uppercase mb-2 block">Latest Premium Report</span>
<span className="text-white tracking-tight text-2xl md:text-3xl font-playfair font-normal">The 2024 State of AI Transparency</span>
</div>
</div>
</div>
</div>
</section>

<section className="relative w-full bg-[#1e2420] py-32 overflow-hidden rounded-t-[3rem] -mt-10 z-20">
<div className="absolute inset-0 z-0 bg-grid-dark [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)] opacity-30"></div>
<div className="relative z-10 max-w-[1000px] mx-auto px-6 text-center">
<div className="reveal flex items-center justify-center gap-4 mb-10">
<span className="h-px w-12 bg-[#4ba3e3]"></span>
<span className="text-sm uppercase tracking-[0.3em] text-[#4ba3e3]">Editorial Standards</span>
<span className="h-px w-12 bg-[#4ba3e3]"></span>
</div>
<h2 className="reveal delay-100 text-5xl md:text-6xl lg:text-7xl tracking-tight uppercase text-white font-playfair font-normal leading-[0.9]">
          Built on
          <span className="text-[#4ba3e3]">Verifiable</span>
<br/>Signals
        </h2>
<p className="reveal delay-200 mt-8 text-xl md:text-2xl text-white/60 max-w-2xl mx-auto leading-relaxed font-playfair font-normal">
          We provide practical frameworks, rigorous teardowns, and actionable analyses to help brand marketers, creators, and consumers evaluate digital authenticity.
        </p>
</div>
</section>

<section className="w-full bg-[#1e2420] px-6 pb-32">
<div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="reveal delay-100 relative group overflow-hidden h-[400px] rounded-2xl bg-[#2d322f] border border-white/5 hover:border-[#4ba3e3]/30 transition-colors duration-500">
<img alt="Influencer Disclosure" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 mix-blend-luminosity transition-all duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&amp;fit=crop&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1e2420] via-[#1e2420]/50 to-transparent"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
<div className="w-10 h-10 rounded-full bg-[#4ba3e3]/20 backdrop-blur-md flex items-center justify-center mb-6 border border-[#4ba3e3]/50 text-[#4ba3e3] group-hover:bg-[#4ba3e3] group-hover:text-white transition-all duration-500">
<iconify-icon className="text-xl" icon="solar:user-speak-rounded-linear"></iconify-icon>
</div>
<h3 className="text-3xl text-white uppercase tracking-tight font-playfair font-normal mb-3">Disclosure</h3>
<p className="text-white/60 text-base leading-relaxed transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              Evaluating how clearly creators and brands signal sponsored content and material connections.
            </p>
</div>
</div>

<div className="reveal delay-200 relative group overflow-hidden h-[400px] rounded-2xl bg-[#2d322f] border border-white/5 hover:border-[#4ba3e3]/30 transition-colors duration-500">
<img alt="AI Transparency" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 mix-blend-luminosity transition-all duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&amp;fit=crop&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1e2420] via-[#1e2420]/50 to-transparent"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
<div className="w-10 h-10 rounded-full bg-[#4ba3e3]/20 backdrop-blur-md flex items-center justify-center mb-6 border border-[#4ba3e3]/50 text-[#4ba3e3] group-hover:bg-[#4ba3e3] group-hover:text-white transition-all duration-500">
<iconify-icon className="text-xl" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<h3 className="text-3xl text-white uppercase tracking-tight font-playfair font-normal mb-3">AI Media</h3>
<p className="text-white/60 text-base leading-relaxed transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              Frameworks for navigating the ethical use and clear labeling of generated text, audio, and imagery.
            </p>
</div>
</div>

<div className="reveal delay-300 relative group overflow-hidden h-[400px] rounded-2xl bg-[#2d322f] border border-white/5 hover:border-[#4ba3e3]/30 transition-colors duration-500">
<img alt="Review Integrity" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 mix-blend-luminosity transition-all duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&amp;fit=crop&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1e2420] via-[#1e2420]/50 to-transparent"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
<div className="w-10 h-10 rounded-full bg-[#4ba3e3]/20 backdrop-blur-md flex items-center justify-center mb-6 border border-[#4ba3e3]/50 text-[#4ba3e3] group-hover:bg-[#4ba3e3] group-hover:text-white transition-all duration-500">
<iconify-icon className="text-xl" icon="solar:star-fall-minimalistic-linear"></iconify-icon>
</div>
<h3 className="text-3xl text-white uppercase tracking-tight font-playfair font-normal mb-3">Integrity</h3>
<p className="text-white/60 text-base leading-relaxed transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              Distinguishing genuine customer sentiment from coordinated manipulation and fake reviews.
            </p>
</div>
</div>

<div className="reveal delay-400 relative group overflow-hidden h-[400px] rounded-2xl bg-[#2d322f] border border-white/5 hover:border-[#4ba3e3]/30 transition-colors duration-500">
<img alt="Brand Honesty" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 mix-blend-luminosity transition-all duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&amp;fit=crop&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1e2420] via-[#1e2420]/50 to-transparent"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
<div className="w-10 h-10 rounded-full bg-[#4ba3e3]/20 backdrop-blur-md flex items-center justify-center mb-6 border border-[#4ba3e3]/50 text-[#4ba3e3] group-hover:bg-[#4ba3e3] group-hover:text-white transition-all duration-500">
<iconify-icon className="text-xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h3 className="text-3xl text-white uppercase tracking-tight font-playfair font-normal mb-3">Reputation</h3>
<p className="text-white/60 text-base leading-relaxed transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              Strategies for measuring brand honesty, communicating crises, and rebuilding lost digital trust.
            </p>
</div>
</div>
</div>
</section>

<section className="bg-[#1e2420] border-y border-white/5 relative z-20">
<div className="max-w-[1400px] mx-auto px-6 py-20 lg:py-32 flex flex-col lg:flex-row gap-16 items-center">

<div className="lg:w-1/2 reveal">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs tracking-widest uppercase text-white/70 mb-6 font-medium">
            Interactive Tool
          </div>
<h2 className="text-5xl md:text-6xl text-white tracking-tight uppercase font-playfair font-normal mb-6 leading-[0.9]">
            Trust Signal <span className="text-[#4ba3e3] block">Scorecard</span>
</h2>
<p className="text-xl text-white/60 mb-10 leading-relaxed font-playfair">
            Evaluate digital campaigns, creator profiles, or brand assets against our baseline transparency index. Use this lightweight tool to check essential credibility signals before publishing.
          </p>
<a className="inline-flex items-center gap-2 text-[#4ba3e3] uppercase tracking-widest text-sm hover:text-white transition-colors group" href="#">
            View Full Methodology 
            <iconify-icon className="transform group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="lg:w-1/2 w-full reveal delay-200 perspective-normal">
<div className="bg-[#2d322f]/80 backdrop-blur-md rounded-3xl p-8 lg:p-10 border border-white/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] transform transition-transform duration-700 hover:-translate-y-2 hover:rotate-y-2">
<div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10">
<span className="text-white uppercase tracking-widest text-sm font-medium">Signal Assessment</span>
<span className="text-xs text-white/40 uppercase tracking-widest">v1.2</span>
</div>
<div className="space-y-8">

<div className="flex items-center justify-between group cursor-pointer">
<div>
<span className="text-white text-sm uppercase tracking-widest block mb-1">AI Media Disclosed</span>
<span className="text-xs text-white/40">Is synthetic content clearly labeled?</span>
</div>

<div className="w-12 h-6 rounded-full bg-[#4ba3e3] relative transition-colors shadow-inner flex items-center">
<span className="absolute left-1 w-4 h-4 rounded-full bg-white transition-transform translate-x-6 shadow-sm"></span>
</div>
</div>

<div>
<div className="flex justify-between mb-3">
<div>
<span className="text-white text-sm uppercase tracking-widest block mb-1">Sourcing Clarity</span>
<span className="text-xs text-white/40">Are claims backed by accessible evidence?</span>
</div>
<span className="text-[#4ba3e3] text-sm font-medium uppercase tracking-widest">High</span>
</div>
<input className="w-full appearance-none bg-transparent focus:outline-none" max="100" min="1" type="range" value="80"/>
</div>

<div>
<span className="text-white text-sm uppercase tracking-widest block mb-3">Asset Classification</span>
<div className="flex flex-wrap gap-3">
<button className="px-5 py-2.5 rounded-full border border-white/10 text-white/60 text-xs uppercase tracking-widest hover:border-white/30 transition-colors">Editorial</button>
<button className="px-5 py-2.5 rounded-full border border-[#4ba3e3] bg-[#4ba3e3]/10 text-[#4ba3e3] text-xs uppercase tracking-widest transition-colors">Sponsored</button>
<button className="px-5 py-2.5 rounded-full border border-white/10 text-white/60 text-xs uppercase tracking-widest hover:border-white/30 transition-colors">UGC</button>
</div>
</div>

<button className="w-full bg-[#4ba3e3] text-white rounded-full py-4 text-sm font-medium uppercase tracking-widest hover:bg-white hover:text-[#1e2420] transition-colors mt-4 flex justify-center items-center gap-2">
                Calculate Credibility Score
                <iconify-icon className="text-lg" icon="solar:refresh-circle-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#ebedea] py-32 px-6 lg:px-12 rounded-t-[3rem] -mt-10 relative z-30">
<div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-16 relative">

<div className="lg:w-1/3">
<div className="sticky top-32 reveal">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#4ba3e3]/30 bg-[#4ba3e3]/10 text-xs tracking-widest uppercase text-[#4ba3e3] mb-6 font-medium">
              Editorial Content
            </div>
<h2 className="text-5xl md:text-6xl tracking-tight uppercase text-[#2d322f] mb-6 font-playfair font-normal leading-[0.9]">
              Featured
              <span className="text-[#4ba3e3] block">Insights</span>
</h2>
<p className="text-[#2d322f]/70 text-xl leading-relaxed mb-10">
              In-depth analyses, clear frameworks, and structured teardowns separating genuine transparency from mere performance.
            </p>
<a className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-[#2d322f]/20 bg-transparent text-sm uppercase tracking-widest text-[#2d322f] hover:bg-[#4ba3e3] hover:text-white hover:border-[#4ba3e3] transition-all duration-300" href="#">
              Read the Journal
              <iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="lg:w-2/3 flex flex-col gap-8">

<div className="reveal reveal-up flex flex-col sm:flex-row bg-white rounded-2xl p-4 gap-6 border border-[#2d322f]/5 shadow-[0_8px_30px_rgba(45,50,47,0.04)] hover:shadow-[0_20px_40px_rgba(75,163,227,0.08)] hover:border-[#4ba3e3]/20 transition-all duration-500 group cursor-pointer">
<div className="w-full sm:w-48 aspect-square rounded-xl overflow-hidden relative shrink-0">
<img alt="Cyber Grid" className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&amp;fit=crop&amp;q=80"/>
<div className="absolute inset-0 bg-[#4ba3e3]/10 mix-blend-multiply"></div>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur text-[#2d322f] text-xs uppercase tracking-widest px-2 py-1 rounded">Framework</div>
</div>
<div className="flex flex-col justify-center flex-1 py-2 pr-4">
<div className="flex justify-between items-start mb-2">
<h3 className="text-2xl tracking-tight uppercase text-[#2d322f] font-playfair font-normal group-hover:text-[#4ba3e3] transition-colors">The AI Disclosure Dilemma</h3>
<span className="text-sm text-[#2d322f]/50 mt-1 uppercase tracking-widest">7 min</span>
</div>
<p className="text-base text-[#2d322f]/60 mb-6 line-clamp-2">A practical checklist for labeling generated content without breaking audience immersion or violating platform rules.</p>
<div className="flex items-center gap-6 mt-auto">
<div className="flex items-center gap-2 text-[#2d322f]/60 text-xs uppercase tracking-widest">
<iconify-icon className="text-sm" icon="solar:pen-new-square-linear"></iconify-icon>
                  Editorial Team
                </div>
<button className="ml-auto w-10 h-10 rounded-full border border-[#2d322f]/10 flex items-center justify-center text-[#2d322f] group-hover:bg-[#4ba3e3] group-hover:text-white group-hover:border-[#4ba3e3] transition-all">
<iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="reveal reveal-up flex flex-col sm:flex-row bg-white rounded-2xl p-4 gap-6 border border-[#2d322f]/5 shadow-[0_8px_30px_rgba(45,50,47,0.04)] hover:shadow-[0_20px_40px_rgba(75,163,227,0.08)] hover:border-[#4ba3e3]/20 transition-all duration-500 group cursor-pointer">
<div className="w-full sm:w-48 aspect-square rounded-xl overflow-hidden relative shrink-0">
<img alt="Analysis" className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&amp;fit=crop&amp;q=80"/>
<div className="absolute inset-0 bg-[#4ba3e3]/10 mix-blend-multiply"></div>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur text-[#2d322f] text-xs uppercase tracking-widest px-2 py-1 rounded">Teardown</div>
</div>
<div className="flex flex-col justify-center flex-1 py-2 pr-4">
<div className="flex justify-between items-start mb-2">
<h3 className="text-2xl tracking-tight uppercase text-[#2d322f] font-playfair font-normal group-hover:text-[#4ba3e3] transition-colors">When Disclosure Fails</h3>
<span className="text-sm text-[#2d322f]/50 mt-1 uppercase tracking-widest">12 min</span>
</div>
<p className="text-base text-[#2d322f]/60 mb-6 line-clamp-2">Analyzing a recent influencer campaign that lost credibility due to buried sponsorship signals and how to avoid it.</p>
<div className="flex items-center gap-6 mt-auto">
<div className="flex items-center gap-2 text-[#2d322f]/60 text-xs uppercase tracking-widest">
<iconify-icon className="text-sm" icon="solar:pen-new-square-linear"></iconify-icon>
                  Analysis Desk
                </div>
<button className="ml-auto w-10 h-10 rounded-full border border-[#2d322f]/10 flex items-center justify-center text-[#2d322f] group-hover:bg-[#4ba3e3] group-hover:text-white group-hover:border-[#4ba3e3] transition-all">
<iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="reveal reveal-up flex flex-col sm:flex-row bg-white rounded-2xl p-4 gap-6 border border-[#2d322f]/5 shadow-[0_8px_30px_rgba(45,50,47,0.04)] hover:shadow-[0_20px_40px_rgba(75,163,227,0.08)] hover:border-[#4ba3e3]/20 transition-all duration-500 group cursor-pointer">
<div className="w-full sm:w-48 aspect-square rounded-xl overflow-hidden relative shrink-0">
<img alt="Team Discussion" className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&amp;fit=crop&amp;q=80"/>
<div className="absolute inset-0 bg-[#4ba3e3]/10 mix-blend-multiply"></div>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur text-[#2d322f] text-xs uppercase tracking-widest px-2 py-1 rounded">Playbook</div>
</div>
<div className="flex flex-col justify-center flex-1 py-2 pr-4">
<div className="flex justify-between items-start mb-2">
<h3 className="text-2xl tracking-tight uppercase text-[#2d322f] font-playfair font-normal group-hover:text-[#4ba3e3] transition-colors">Reputation Recovery</h3>
<span className="text-sm text-[#2d322f]/50 mt-1 uppercase tracking-widest">9 min</span>
</div>
<p className="text-base text-[#2d322f]/60 mb-6 line-clamp-2">Step-by-step guidance for PR teams on acknowledging missteps and restoring brand honesty in the public eye.</p>
<div className="flex items-center gap-6 mt-auto">
<div className="flex items-center gap-2 text-[#2d322f]/60 text-xs uppercase tracking-widest">
<iconify-icon className="text-sm" icon="solar:pen-new-square-linear"></iconify-icon>
                  Editorial Team
                </div>
<button className="ml-auto w-10 h-10 rounded-full border border-[#2d322f]/10 flex items-center justify-center text-[#2d322f] group-hover:bg-[#4ba3e3] group-hover:text-white group-hover:border-[#4ba3e3] transition-all">
<iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-[#1e2420] clip-path-slant my-20">
<div className="absolute inset-0 z-0 scale-110 transform-gpu bg-fixed" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&amp', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed'}}></div>
<div className="absolute inset-0 bg-[#1e2420]/80 z-10 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#1e2420] via-[#4ba3e3]/10 to-[#1e2420] z-10 opacity-90"></div>
<div className="relative z-20 text-center px-6 reveal">
<h2 className="text-6xl md:text-8xl lg:text-9xl tracking-tight uppercase text-white font-playfair font-normal drop-shadow-2xl leading-[0.8]">
          Trust is Now A
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#4ba3e3] to-white/40 mt-4">Competitive Signal</span>
</h2>
</div>
</section>

<section className="max-w-[1000px] mx-auto px-6 py-32 relative">
<div className="reveal text-center mb-20">
<h2 className="text-4xl md:text-6xl tracking-tight uppercase text-[#2d322f] font-playfair font-normal leading-tight">
          Advisory &amp; Support
        </h2>
<p className="mt-6 text-xl text-[#2d322f]/60 max-w-xl mx-auto">
          We help forward-thinking teams identify credibility gaps, ensure transparent messaging, and navigate digital reputation risks.
        </p>
</div>
<div className="space-y-8 md:space-y-12">

<div className="sticky top-24 reveal bg-[#f4f6f3] rounded-3xl p-8 md:p-12 border border-[#2d322f]/10 shadow-xl flex flex-col md:flex-row gap-10 items-center transform transition-transform duration-500 hover:scale-[1.01] hover:border-[#4ba3e3]/20 group">
<div className="w-full md:w-1/3 aspect-[3/4] rounded-2xl overflow-hidden shrink-0 bg-[#2d322f]">
<img alt="Audit" className="w-full h-full object-cover grayscale mix-blend-luminosity group-hover:mix-blend-normal group-hover:grayscale-[20%] transition-all duration-700" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&amp;fit=crop&amp;q=80"/>
</div>
<div className="flex-1">
<div className="text-xs tracking-[0.2em] uppercase text-[#4ba3e3] font-medium mb-4">Discovery • Analysis • Report</div>
<p className="text-2xl md:text-3xl tracking-tight text-[#2d322f] leading-relaxed mb-8 font-playfair font-normal">
              A comprehensive analysis of your brand's digital footprint, identifying risk areas in disclosure, claims, and public evidence.
            </p>
<h3 className="text-xl tracking-tight uppercase text-[#2d322f] font-playfair">Brand Trust Audit</h3>
<p className="text-base text-[#2d322f]/50 mt-1">Starting at $5k</p>
</div>
</div>

<div className="sticky top-32 reveal delay-100 bg-white rounded-3xl p-8 md:p-12 border border-[#2d322f]/10 shadow-2xl flex flex-col md:flex-row gap-10 items-center transform transition-transform duration-500 hover:scale-[1.01] hover:border-[#4ba3e3]/20 group">
<div className="w-full md:w-1/3 aspect-[3/4] rounded-2xl overflow-hidden shrink-0 bg-[#2d322f] md:order-2">
<img alt="Review" className="w-full h-full object-cover grayscale mix-blend-luminosity group-hover:mix-blend-normal group-hover:grayscale-[20%] transition-all duration-700" src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&amp;fit=crop&amp;q=80"/>
</div>
<div className="flex-1 md:order-1">
<div className="text-xs tracking-[0.2em] uppercase text-[#4ba3e3] font-medium mb-4">Briefs • Campaigns • AI Assets</div>
<p className="text-2xl md:text-3xl tracking-tight text-[#2d322f] leading-relaxed mb-8 font-playfair font-normal">
              Pre-campaign messaging review to ensure influencer briefs, generated assets, and marketing claims meet modern transparency standards.
            </p>
<h3 className="text-xl tracking-tight uppercase text-[#2d322f] font-playfair">Messaging Review</h3>
<p className="text-base text-[#2d322f]/50 mt-1">Project-based engagement</p>
</div>
</div>

<div className="sticky top-40 reveal delay-200 bg-[#ebedea] rounded-3xl p-8 md:p-12 border border-[#2d322f]/10 shadow-[0_30px_60px_-15px_rgba(45,50,47,0.3)] flex flex-col md:flex-row gap-10 items-center transform transition-transform duration-500 hover:scale-[1.01] hover:border-[#4ba3e3]/20 group">
<div className="w-full md:w-1/3 aspect-[3/4] rounded-2xl overflow-hidden shrink-0 bg-[#2d322f]">
<img alt="Workshop" className="w-full h-full object-cover grayscale mix-blend-luminosity group-hover:mix-blend-normal group-hover:grayscale-[20%] transition-all duration-700" src="https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&amp;fit=crop&amp;q=80"/>
</div>
<div className="flex-1">
<div className="text-xs tracking-[0.2em] uppercase text-[#4ba3e3] font-medium mb-4">Training • Frameworks • Q&amp;A</div>
<p className="text-2xl md:text-3xl tracking-tight text-[#2d322f] leading-relaxed mb-8 font-playfair font-normal">
              Equip your marketing and PR teams with the frameworks needed to navigate the evolving credibility landscape and platform shifts.
            </p>
<h3 className="text-xl tracking-tight uppercase text-[#2d322f] font-playfair">Team Workshops</h3>
<p className="text-base text-[#2d322f]/50 mt-1">Half-day or full-day sessions</p>
</div>
</div>
</div>
<div className="mt-24 flex justify-center reveal">
<a className="group relative inline-flex items-center gap-3 bg-transparent text-[#2d322f] text-sm font-medium uppercase tracking-widest pb-2 overflow-hidden hover:text-[#4ba3e3] transition-colors" href="#">
<span className="relative z-10">Explore All Services</span>
<iconify-icon className="text-base relative z-10 transform group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
<span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#4ba3e3] transform origin-left transition-transform group-hover:scale-x-100 scale-x-30"></span>
</a>
</div>
</section>

<section className="relative bg-[#1e2420] py-32 overflow-hidden text-center rounded-t-[3rem] mt-20">
<div className="absolute inset-0 z-0 bg-grid-dark [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)] opacity-20"></div>
<div className="relative z-10 max-w-3xl mx-auto px-6 reveal">
<div className="w-12 h-px bg-[#4ba3e3] mx-auto mb-8"></div>
<p className="text-xs font-medium uppercase tracking-[0.4em] text-[#4ba3e3]/80 mb-6">
          The Weekly Brief
        </p>
<h2 className="text-5xl md:text-7xl leading-[0.9] mb-8 uppercase tracking-tight text-white font-playfair font-normal">
          Stay Ahead of
          <br/>
<span className="text-[#4ba3e3]">Trust Trends.</span>
</h2>
<p className="text-xl text-white/60 leading-relaxed mb-12 max-w-xl mx-auto">
          Join professionals receiving our latest analyses on digital trust signals, platform shifts, and credibility frameworks.
        </p>
<form className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
<input className="w-full bg-white/5 border border-white/10 text-white rounded-full px-8 py-4 text-sm focus:outline-none focus:border-[#4ba3e3] focus:bg-white/10 transition-all placeholder:text-white/40" placeholder="Enter your email" required="" type="email"/>
<button className="w-full sm:w-auto bg-white text-[#1e2420] rounded-full px-10 py-4 text-sm font-medium uppercase tracking-widest hover:bg-[#4ba3e3] hover:text-white hover:shadow-[0_0_40px_rgba(75,163,227,0.4)] transition-all duration-300" type="submit">
            Subscribe
          </button>
</form>
</div>
</section>
</main>

<footer className="bg-[#1e2420] text-white pt-20 pb-10 border-t border-white/5">
<div className="max-w-[1400px] mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">

<div className="lg:col-span-2">
<h3 className="text-3xl tracking-tight uppercase text-white mb-4 font-playfair font-normal">
            TRST.
          </h3>
<p className="text-base text-white/50 mb-8 max-w-sm leading-relaxed">
            The hybrid content publication and advisory firm dedicated to evaluating authenticity, disclosure, and reputation online.
          </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-[#4ba3e3] hover:border-[#4ba3e3]/50 transition-all" href="#">
<iconify-icon className="text-lg" icon="solar:brand-twitter-linear"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-[#4ba3e3] hover:border-[#4ba3e3]/50 transition-all" href="#">
<iconify-icon className="text-lg" icon="solar:brand-linkedin-linear"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-[#4ba3e3] hover:border-[#4ba3e3]/50 transition-all" href="#">
<iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon>
</a>
</div>
</div>

<div>
<h4 className="text-xs font-medium uppercase tracking-[0.2em] text-[#4ba3e3] mb-6">Editorial</h4>
<ul className="space-y-3">
<li><a className="text-base text-white/50 hover:text-[#4ba3e3] transition-colors" href="#">Journal</a></li>
<li><a className="text-base text-white/50 hover:text-[#4ba3e3] transition-colors" href="#">Topics</a></li>
<li><a className="text-base text-white/50 hover:text-[#4ba3e3] transition-colors" href="#">Frameworks</a></li>
<li><a className="text-base text-white/50 hover:text-[#4ba3e3] transition-colors" href="#">Methodology</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium uppercase tracking-[0.2em] text-[#4ba3e3] mb-6">Resources</h4>
<ul className="space-y-3">
<li><a className="text-base text-white/50 hover:text-[#4ba3e3] transition-colors" href="#">Trust Calculator</a></li>
<li><a className="text-base text-white/50 hover:text-[#4ba3e3] transition-colors" href="#">Premium Reports</a></li>
<li><a className="text-base text-white/50 hover:text-[#4ba3e3] transition-colors" href="#">Checklists</a></li>
<li><a className="text-base text-white/50 hover:text-[#4ba3e3] transition-colors" href="#">Newsletter</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium uppercase tracking-[0.2em] text-[#4ba3e3] mb-6">Advisory</h4>
<ul className="space-y-3">
<li><a className="text-base text-white/50 hover:text-[#4ba3e3] transition-colors" href="#">Trust Audits</a></li>
<li><a className="text-base text-white/50 hover:text-[#4ba3e3] transition-colors" href="#">Messaging Review</a></li>
<li><a className="text-base text-white/50 hover:text-[#4ba3e3] transition-colors" href="#">Team Workshops</a></li>
<li><a className="text-base text-white/50 hover:text-[#4ba3e3] transition-colors" href="#">Contact Us</a></li>
</ul>
</div>
</div>

<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-4">
<p className="text-xs text-white/30 uppercase tracking-[0.2em]">
            © 2024 TRST Digital Trust Signals Journal. All rights reserved.
          </p>
</div>
<div className="flex gap-6">
<a className="text-xs text-white/30 uppercase tracking-widest hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="text-xs text-white/30 uppercase tracking-widest hover:text-white transition-colors" href="#">Terms of Service</a>
<a className="text-xs text-white/30 uppercase tracking-widest hover:text-white transition-colors" href="#">Editorial Ethics</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
