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



        document.addEventListener("DOMContentLoaded", () => {
            // Split Text Animation Logic
            const targets = document.querySelectorAll("[data-split-text]");
            targets.forEach(target => {
                const text = target.innerText.trim();
                target.innerHTML = "";
                text.split("").forEach((char, i) => {
                    const span = document.createElement("span");
                    span.textContent = char === " " ? "\u00A0" : char;
                    span.className = "char-reveal";
                    span.style.transitionDelay = `${i * 0.03}s`;
                    target.appendChild(span);
                });
            });

            // Intersection Observer
            const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal-group, section').forEach(el => observer.observe(el));
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-[-1] pointer-events-none">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMDMwMzAzIi8+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMxMTEiLz4KPC9zdmc+')] opacity-20"></div>
<div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#00FF00] rounded-full blur-[180px] opacity-[0.03]"></div>
<div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#ffffff] rounded-full blur-[180px] opacity-[0.02]"></div>
</div>

<nav className="fixed z-50 top-0 inset-x-0 p-6 flex justify-between items-start pointer-events-none">

<div className="pointer-events-auto group flex items-center gap-3 pl-1.5 pr-5 py-1.5 rounded-full bg-[#0A0A0A]/80 border border-white/10 backdrop-blur-xl shadow-2xl hover:border-[#00FF00]/30 transition-all duration-300">
<div className="relative w-9 h-9 rounded-full overflow-hidden bg-gradient-to-br from-neutral-900 to-black border border-white/10 flex items-center justify-center">
<iconify-icon className="text-white relative z-10" icon="solar:satellite-linear" width="20"></iconify-icon>
<div className="absolute inset-0 bg-[#00FF00]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>
<div className="flex flex-col gap-0.5">
<span className="leading-none text-xs font-semibold text-white tracking-tight font-manrope">SIGNAL PR</span>
<span className="text-[10px] text-neutral-500 font-mono leading-none tracking-tight">EST. 2025</span>
</div>
</div>

<div className="hidden md:flex pointer-events-auto absolute left-1/2 -translate-x-1/2 top-6 items-center p-1 rounded-full bg-[#0A0A0A]/60 border border-white/10 backdrop-blur-2xl shadow-2xl ring-1 ring-white/5">
<a className="hover:text-white transition-colors text-xs font-medium text-neutral-400 px-5 py-2 relative group" href="#services">
                Services
                <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#00FF00] opacity-0 group-hover:opacity-100 transition-opacity"></span>
</a>
<a className="hover:text-white transition-colors text-xs font-medium text-neutral-400 px-5 py-2 relative group" href="#process">
                How We Work
                <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#00FF00] opacity-0 group-hover:opacity-100 transition-opacity"></span>
</a>
<a className="hover:text-white transition-colors text-xs font-medium text-neutral-400 px-5 py-2 relative group" href="#results">
                Results
                <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#00FF00] opacity-0 group-hover:opacity-100 transition-opacity"></span>
</a>
<a className="hover:text-white transition-colors text-xs font-medium text-neutral-400 px-5 py-2 relative group" href="#faq">
                FAQ
                <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#00FF00] opacity-0 group-hover:opacity-100 transition-opacity"></span>
</a>
</div>

<div className="pointer-events-auto flex items-center gap-3">
<div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0A0A0A]/40 border border-[#00FF00]/20 backdrop-blur-md">
<div className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FF00] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#00FF00]"></span>
</div>
<span className="text-[10px] font-mono text-[#00FF00] font-medium tracking-wider uppercase">OPEN TO PROJECTS</span>
</div>
<a className="group relative px-5 py-2 rounded-full bg-white text-black text-xs font-semibold tracking-tight overflow-hidden hover:bg-neutral-200 transition-all duration-300" href="https://calendly.com" target="_blank">
                Book a Call
            </a>
</div>
</nav>

<section className="reveal-group min-h-screen flex flex-col justify-center relative pt-32 pb-20 overflow-hidden" id="hero">
<div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{backgroundImage: 'radial-gradient(#222 1px, transparent 1px)', backgroundSize: '40px 40px', maskImage: 'radial-gradient(circle at 50% 50%, black, transparent 80%)'}}></div>
<div className="grid grid-cols-1 lg:grid-cols-12 w-full max-w-[1400px] mx-auto z-10 px-6 gap-12 items-center">

<div className="lg:col-span-7 flex flex-col reveal-group group gap-8">
<div className="inline-flex items-center gap-2 reveal-blur">
<span className="text-[#00FF00] text-xs">●</span>
<span className="text-xs font-mono text-neutral-400 tracking-widest uppercase">WEB3 PR + AI SEARCH</span>
</div>
<h1 className="text-[11vw] lg:text-[6rem] leading-[0.9] font-medium tracking-tighter font-manrope text-white">
<span className="block" data-split-text=""><span className="char-reveal" style={{transitionDelay: '0s'}}>B</span><span className="char-reveal" style={{transitionDelay: '0.03s'}}>E</span><span className="char-reveal" style={{transitionDelay: '0.06s'}}> </span><span className="char-reveal" style={{transitionDelay: '0.09s'}}>V</span><span className="char-reveal" style={{transitionDelay: '0.12s'}}>I</span><span className="char-reveal" style={{transitionDelay: '0.15s'}}>S</span><span className="char-reveal" style={{transitionDelay: '0.18s'}}>I</span><span className="char-reveal" style={{transitionDelay: '0.21s'}}>B</span><span className="char-reveal" style={{transitionDelay: '0.24s'}}>L</span><span className="char-reveal" style={{transitionDelay: '0.27s'}}>E</span><span className="char-reveal" style={{transitionDelay: '0.3s'}}> </span><span className="char-reveal" style={{transitionDelay: '0.33s'}}>I</span><span className="char-reveal" style={{transitionDelay: '0.36s'}}>N</span></span>
<span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-neutral-600" data-split-text=""><span className="char-reveal" style={{transitionDelay: '0s'}}>A</span><span className="char-reveal" style={{transitionDelay: '0.03s'}}>I</span><span className="char-reveal" style={{transitionDelay: '0.06s'}}> </span><span className="char-reveal" style={{transitionDelay: '0.09s'}}>S</span><span className="char-reveal" style={{transitionDelay: '0.12s'}}>E</span><span className="char-reveal" style={{transitionDelay: '0.15s'}}>A</span><span className="char-reveal" style={{transitionDelay: '0.18s'}}>R</span><span className="char-reveal" style={{transitionDelay: '0.21s'}}>C</span><span className="char-reveal" style={{transitionDelay: '0.24s'}}>H</span></span>
<span className="block" data-split-text=""><span className="char-reveal" style={{transitionDelay: '0s'}}>&amp;</span><span className="char-reveal" style={{transitionDelay: '0.03s'}}> </span><span className="char-reveal" style={{transitionDelay: '0.06s'}}>M</span><span className="char-reveal" style={{transitionDelay: '0.09s'}}>E</span><span className="char-reveal" style={{transitionDelay: '0.12s'}}>D</span><span className="char-reveal" style={{transitionDelay: '0.15s'}}>I</span><span className="char-reveal" style={{transitionDelay: '0.18s'}}>A</span></span>
</h1>
<p className="max-w-xl font-light text-lg leading-relaxed text-neutral-400 reveal-blur transition-delay-200">
                    First Web3 agency combining traditional PR with AI search optimization. Get mentioned by ChatGPT, Perplexity, and featured in top-tier media.
                </p>
<div className="flex flex-wrap gap-4 reveal-blur transition-delay-300">
<a className="px-6 py-3 rounded-lg border border-white/10 text-white text-sm font-medium hover:bg-white/5 transition-colors flex items-center gap-2" href="#services">
                        View Services <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="px-6 py-3 rounded-lg bg-[#00FF00] text-black text-sm font-semibold hover:bg-[#00FF00]/90 transition-colors shadow-[0_0_20px_rgba(0,255,0,0.3)]" href="https://calendly.com" target="_blank">
                        Book a Call
                    </a>
</div>

<div className="flex flex-wrap gap-8 pt-8 border-t border-white/5 reveal-blur transition-delay-500">
<div>
<div className="text-xl font-manrope font-semibold text-white">50+</div>
<div className="text-xs font-mono text-neutral-500 uppercase">Projects Launched</div>
</div>
<div className="">
<div className="text-xl font-manrope font-semibold text-white">$100M+</div>
<div className="text-xs font-mono text-neutral-500 uppercase">Client Valuation</div>
</div>
<div>
<div className="text-xl font-manrope font-semibold text-white">200+</div>
<div className="text-xs font-mono text-neutral-500 uppercase">Media Placements</div>
</div>
</div>
</div>

<div className="hidden lg:flex lg:col-span-5 h-[600px] items-center justify-center relative perspective-dramatic reveal-blur transition-delay-300">
<div className="relative w-full h-full transform rotate-y-[-10deg] rotate-x-[5deg] transition-transform duration-1000 hover:rotate-y-[-5deg] hover:rotate-x-[2deg]">

<div className="absolute inset-0 bg-[#050505]/80 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col">

<div className="h-12 border-b border-white/5 flex items-center px-4 gap-3 bg-white/[0.02]">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="flex-1 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/5 border border-white/5">
<iconify-icon className="text-[10px] text-neutral-500" icon="solar:lock-linear"></iconify-icon>
<span className="text-[10px] font-mono text-neutral-400">signal-pr.io/analysis</span>
</div>
</div>
</div>

<div className="flex-1 relative overflow-hidden bg-[#030303]">

<div className="absolute inset-0 w-full h-full pointer-events-none">
<div className="absolute -top-[30%] -left-[20%] w-[80%] h-[80%] rounded-full bg-[#00FF00]/10 blur-[100px] animate-pulse"></div>
<div 5="" animate-pulse"="" bg-white="" blur-[100px]="" className="absolute top-[20%] -right-[20%] w-[70%] h-[70%] rounded-full bg-emerald-500/5 blur-[120px] animate-pulse" h-[80%]="" rounded-full="" style={{animationDelay: '4s'}} style-[10%]="" w-[80%]=""></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] rounded-full bg-[#00FF00]/5 blur-[80px] animate-pulse" style={{animationDelay: '1s'}}></div>
</div>

<div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="lg:px-12 border-y reveal-group bg-neutral-950/50 w-full border-white/5 pt-24 pr-6 pb-24 pl-6 relative" id="services">
<div className="max-w-[1400px] mr-auto ml-auto">
<div className="flex flex-col md:flex-row mb-16 items-end justify-between">
<div className="">
<div className="flex items-center gap-2 mb-4">
<span className="text-[#00FF00] text-xs">●</span>
<span className="text-xs font-mono text-neutral-400 tracking-widest uppercase">CORE SERVICES</span>
</div>
<h2 className="font-manrope text-5xl lg:text-7xl font-semibold text-white tracking-tight leading-[0.9]">
<span className="block" data-split-text=""><span className="char-reveal" style={{transitionDelay: '0s'}}>W</span><span className="char-reveal" style={{transitionDelay: '0.03s'}}>H</span><span className="char-reveal" style={{transitionDelay: '0.06s'}}>A</span><span className="char-reveal" style={{transitionDelay: '0.09s'}}>T</span><span className="char-reveal" style={{transitionDelay: '0.12s'}}> </span><span className="char-reveal" style={{transitionDelay: '0.15s'}}>W</span><span className="char-reveal" style={{transitionDelay: '0.18s'}}>E</span></span>
<span className="block text-neutral-600" data-split-text=""><span className="char-reveal" style={{transitionDelay: '0s'}}>D</span><span className="char-reveal" style={{transitionDelay: '0.03s'}}>E</span><span className="char-reveal" style={{transitionDelay: '0.06s'}}>L</span><span className="char-reveal" style={{transitionDelay: '0.09s'}}>I</span><span className="char-reveal" style={{transitionDelay: '0.12s'}}>V</span><span className="char-reveal" style={{transitionDelay: '0.15s'}}>E</span><span className="char-reveal" style={{transitionDelay: '0.18s'}}>R</span></span>
</h2>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-6 stagger-grid gap-x-6 gap-y-6">

<div className="col-span-12 md:col-span-4 group relative h-[400px] glass-panel rounded-2xl p-8 flex flex-col justify-between overflow-hidden hover:border-[#00FF00]/30 transition-all duration-500">
<div className="relative z-10">
<div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-6 bg-white/5 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-2xl text-white group-hover:text-[#00FF00] transition-colors" icon="solar:megaphone-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-manrope font-medium text-white mb-2 uppercase tracking-tight">WEB3 PR &amp; MEDIA RELATIONS</h3>
<p className="text-neutral-400 font-light text-sm leading-relaxed">
                        Tier-1 media coverage, press releases, thought leadership articles in CoinDesk, Cointelegraph, Decrypt, and more.
                    </p>
</div>
<div className="relative z-10">
<span className="text-xs font-mono text-[#00FF00] flex items-center gap-2 group-hover:translate-x-2 transition-transform cursor-pointer">
                        Learn More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>

<div className="absolute bottom-[-20%] right-[-20%] w-[80%] h-[80%] opacity-5 border border-white/20 rounded-full group-hover:scale-110 transition-transform duration-1000"></div>
</div>

<div className="col-span-12 md:col-span-4 group glass-panel flex flex-col overflow-hidden hover:border-[#00FF00]/30 transition-all duration-500 h-[400px] rounded-2xl pt-8 pr-8 pb-8 pl-8 relative justify-between">
<div className="absolute top-0 right-0 p-px w-full h-full opacity-20 pointer-events-none overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#00FF00]/20 via-transparent to-transparent"></div>
</div>
<div className="z-10 relative">
<div className="w-12 h-12 rounded-full border border-[#00FF00]/30 flex items-center justify-center mb-6 bg-[#00FF00]/5 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-2xl text-[#00FF00]" icon="solar:brain-linear"></iconify-icon>
</div>
<h3 className="uppercase text-2xl font-medium text-white tracking-tight font-manrope mb-2">AI SEARCH OPTIMIZATION (GEO)</h3>
<p className="text-neutral-400 font-light text-sm leading-relaxed">
                        Get mentioned by ChatGPT, Perplexity, Claude, and Gemini. Optimize your content for AI citation patterns.
                    </p>
</div>
<div className="relative z-10">
<span 5="" absolute="" bg-gradient-to-t="" bottom-0="" className="text-xs font-mono text-[#00FF00] flex items-center gap-2 group-hover:translate-x-2 transition-transformify-icon&gt; &lt;/span&gt; &lt;/div&gt; &lt;div class=" duration-500"="" from-[#00ff00]="" group-hover:opacity-100="" h-32="" opacity-0="" right-0="" to-transparent="" transition-opacity="" w-full=""></span></div>
</div>

<div className="col-span-12 md:col-span-4 group relative h-[400px] glass-panel rounded-2xl p-8 flex flex-col justify-between overflow-hidden hover:border-[#00FF00]/30 transition-all duration-500">
<div className="relative z-10">
<div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-6 bg-white/5 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-2xl text-white group-hover:text-[#00FF00] transition-colors" icon="solar:microphone-2-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-manrope font-medium text-white mb-2 uppercase tracking-tight">PODCAST PLACEMENTS</h3>
<p className="text-neutral-400 font-light text-sm leading-relaxed">
                        Feature on top Web3 podcasts. Interview preparation and distribution strategy included.
                    </p>
</div>
<div className="relative z-10">
<span className="text-xs font-mono text-[#00FF00] flex items-center gap-2 group-hover:translate-x-2 transition-transform cursor-pointer">
                        Learn More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</div>
</div>
</div>
</section>

<section className="relative w-full py-32 bg-[#050505] border-t border-white/5 reveal-group overflow-hidden" id="process">
<div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
<div className="">
<div className="flex items-center gap-2 mb-4">
<span className="text-[#00FF00] text-xs">●</span>
<span className="text-xs font-mono text-neutral-400 tracking-widest uppercase">OUR PROVEN PROCESS</span>
</div>
<h2 className="text-4xl lg:text-6xl font-manrope font-semibold text-white tracking-tight reveal-text-line">
                        HOW WE WORK
                    </h2>
</div>
<p className="font-mono text-neutral-500 text-sm max-w-xs text-right reveal-blur transition-delay-200">
                    // DUAL TRACK STRATEGY
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 stagger-grid">

<div className="flex flex-col gap-6">
<h3 className="text-xl font-mono text-white pb-4 border-b border-white/10 flex justify-between">
<span>TRACK 01: PR MEDIA</span>
<iconify-icon className="text-neutral-500" icon="solar:pen-new-square-linear"></iconify-icon>
</h3>
<div className="space-y-2">
<div className="group flex gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
<span className="font-mono text-[#00FF00] text-xs pt-1">01</span>
<div>
<h4 className="text-white font-medium text-sm">Discovery</h4>
<p className="text-neutral-500 text-xs mt-1">Deep dive into project USPs and narrative.</p>
</div>
</div>
<div className="group flex gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
<span className="font-mono text-[#00FF00] text-xs pt-1">02</span>
<div>
<h4 className="text-white font-medium text-sm">Strategy</h4>
<p className="text-neutral-500 text-xs mt-1">Selecting target outlets and story angles.</p>
</div>
</div>
<div className="group flex gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
<span className="font-mono text-[#00FF00] text-xs pt-1">03</span>
<div>
<h4 className="text-white font-medium text-sm">Outreach</h4>
<p className="text-neutral-500 text-xs mt-1">Direct pitching to our journalist network.</p>
</div>
</div>
<div className="group flex gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
<span className="font-mono text-[#00FF00] text-xs pt-1">04</span>
<div>
<h4 className="text-white font-medium text-sm">Amplification</h4>
<p className="text-neutral-500 text-xs mt-1">Social syndication of secured coverage.</p>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-6">
<h3 className="text-xl font-mono text-white pb-4 border-b border-white/10 flex justify-between">
<span>TRACK 02: AI OPTIMIZATION</span>
<iconify-icon className="text-neutral-500" icon="solar:cpu-linear"></iconify-icon>
</h3>
<div className="space-y-2">
<div className="group flex gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
<span className="font-mono text-[#00FF00] text-xs pt-1">01</span>
<div>
<h4 className="text-white font-medium text-sm">Audit</h4>
<p className="text-neutral-500 text-xs mt-1">Analyzing current visibility in ChatGPT/Perplexity.</p>
</div>
</div>
<div className="group flex gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
<span className="font-mono text-[#00FF00] text-xs pt-1">02</span>
<div>
<h4 className="text-white font-medium text-sm">Optimize</h4>
<p className="text-neutral-500 text-xs mt-1">Structuring data for LLM ingestion.</p>
</div>
</div>
<div className="group flex gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
<span className="font-mono text-[#00FF00] text-xs pt-1">03</span>
<div>
<h4 className="text-white font-medium text-sm">Authority</h4>
<p className="text-neutral-500 text-xs mt-1">Building citations in trusted datasets.</p>
</div>
</div>
<div className="group flex gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
<span className="font-mono text-[#00FF00] text-xs pt-1">04</span>
<div>
<h4 className="text-white font-medium text-sm">Monitor</h4>
<p className="text-neutral-500 text-xs mt-1">Tracking sentiment and frequency in AI answers.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-[#030303] w-full border-white/5 border-t pt-32 pb-32 relative" id="results">
<div className="px-6 lg:px-12 mb-16 relative z-10 max-w-3xl">
<div className="flex items-center gap-2 mb-4">
<span className="text-[#00FF00] text-xs">●</span>
<span className="text-xs font-mono text-neutral-400 tracking-widest uppercase">CLIENT RESULTS</span>
</div>
<h2 className="text-4xl lg:text-5xl font-manrope font-semibold text-white tracking-tight reveal-text-line">
              PROVEN <span className="text-neutral-600">IMPACT</span>
</h2>
</div>
<div className="w-full relative flex flex-col gap-8 group">

<div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#030303] to-transparent z-20 pointer-events-none"></div>
<div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#030303] to-transparent z-20 pointer-events-none"></div>
<style>
                @keyframes scroll-left { 0% { transform: translateX(0); } 100% { transform: translateX(-100%); } }
                .animate-marquee { animation: scroll-left 40s linear infinite; }
            </style>
<div className="w-full overflow-hidden">
<div className="flex gap-6 animate-marquee w-max pl-6 py-4 hover:[animation-play-state:paused]">

<div className="w-[450px] glass-panel rounded-2xl p-8 flex flex-col justify-between shrink-0 hover:border-[#00FF00]/30 transition-colors">
<div className="mb-6">
<iconify-icon className="text-3xl text-neutral-600 mb-4" icon="solar:quote-up-square-linear"></iconify-icon>
<p className="text-neutral-300 text-lg font-light leading-relaxed">"Signal PR got us mentioned in every major AI search engine within 3 weeks. The organic traffic uplift was immediate."</p>
</div>
<div className="flex items-center gap-4 border-t border-white/5 pt-6">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-neutral-800 to-black border border-white/10 flex items-center justify-center text-xs font-mono text-white">MK</div>
<div>
<div className="text-white text-sm font-medium">Michael K.</div>
<div className="text-neutral-500 text-xs font-mono">CEO, DeFi Protocol</div>
</div>
</div>
</div>

<div className="w-[450px] glass-panel rounded-2xl p-8 flex flex-col justify-between shrink-0 hover:border-[#00FF00]/30 transition-colors">
<div className="mb-6">
<iconify-icon className="text-3xl text-neutral-600 mb-4" icon="solar:quote-up-square-linear"></iconify-icon>
<p className="text-neutral-300 text-lg font-light leading-relaxed">"Traditional PR wasn't enough. The AI optimization strategy helped us dominate the narrative during our token launch."</p>
</div>
<div className="flex items-center gap-4 border-t border-white/5 pt-6">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-neutral-800 to-black border border-white/10 flex items-center justify-center text-xs font-mono text-white">SA</div>
<div>
<div className="text-white text-sm font-medium">Sarah A.</div>
<div className="text-neutral-500 text-xs font-mono">CMO, Layer 2 Chain</div>
</div>
</div>
</div>

<div className="w-[450px] glass-panel rounded-2xl p-8 flex flex-col justify-between shrink-0 hover:border-[#00FF00]/30 transition-colors">
<div className="mb-6">
<iconify-icon className="text-3xl text-neutral-600 mb-4" icon="solar:quote-up-square-linear"></iconify-icon>
<p className="text-neutral-300 text-lg font-light leading-relaxed">"We secured coverage in Cointelegraph and Bloomberg thanks to their connections. Professional and effective."</p>
</div>
<div className="flex items-center gap-4 border-t border-white/5 pt-6">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-neutral-800 to-black border border-white/10 flex items-center justify-center text-xs font-mono text-white">JD</div>
<div>
<div className="text-white text-sm font-medium">James D.</div>
<div className="text-neutral-500 text-xs font-mono">Founder, NFT Marketplace</div>
</div>
</div>
</div>

<div className="w-[450px] glass-panel rounded-2xl p-8 flex flex-col justify-between shrink-0 hover:border-[#00FF00]/30 transition-colors">
<div className="mb-6">
<iconify-icon className="text-3xl text-neutral-600 mb-4" icon="solar:quote-up-square-linear"></iconify-icon>
<p className="text-neutral-300 text-lg font-light leading-relaxed">"Signal PR got us mentioned in every major AI search engine within 3 weeks. The organic traffic uplift was immediate."</p>
</div>
<div className="flex items-center gap-4 border-t border-white/5 pt-6">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-neutral-800 to-black border border-white/10 flex items-center justify-center text-xs font-mono text-white">MK</div>
<div>
<div className="text-white text-sm font-medium">Michael K.</div>
<div className="text-neutral-500 text-xs font-mono">CEO, DeFi Protocol</div>
</div>
</div>
</div>
</div>
</div>
<div className="px-6 lg:px-12 mt-8">
<a className="text-sm font-mono text-neutral-500 hover:text-white transition-colors flex items-center gap-2" href="#">
                    See All Case Studies <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="relative w-full py-24 bg-[#050505] border-t border-white/5 reveal-group">
<div className="max-w-[1200px] mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<div className="flex items-center gap-2 mb-4">
<span className="text-[#00FF00] text-xs">●</span>
<span className="text-xs font-mono text-neutral-400 tracking-widest uppercase">INVESTMENT</span>
</div>
<h2 className="text-4xl lg:text-5xl font-manrope font-semibold text-white tracking-tight mb-6">
                        YOUR VISIBILITY INVESTMENT
                    </h2>
<p className="text-neutral-400 font-light text-lg mb-8">
                        Every project is unique. We don't believe in cookie-cutter packages. Let's discuss your goals and create a custom strategy that maximizes your ROI.
                    </p>
<a className="inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-white text-black text-sm font-semibold hover:bg-neutral-200 transition-colors" href="https://calendly.com" target="_blank">
                        Get Custom Quote <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="glass-panel p-8 rounded-2xl border border-white/10 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#00FF00] blur-[100px] opacity-10"></div>
<div className="flex flex-col gap-6">
<div className="flex justify-between items-center pb-4 border-b border-white/5">
<span className="text-sm text-neutral-400 font-mono">ESTIMATED REACH</span>
<div className="text-3xl font-mono text-white counter-animate"></div>
</div>
<div className="space-y-4">
<div className="flex justify-between text-xs text-neutral-500 font-mono">
<span>MEDIA OUTLETS</span>
<span>TIER 1</span>
</div>
<div className="w-full h-1 bg-white/10 rounded-full">
<div className="h-full w-[80%] bg-[#00FF00] rounded-full relative">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_#00FF00]"></div>
</div>
</div>
</div>
<div className="space-y-4">
<div className="flex justify-between text-xs text-neutral-500 font-mono">
<span>AI SENTIMENT</span>
<span>POSITIVE</span>
</div>
<div className="w-full h-1 bg-white/10 rounded-full">
<div className="h-full w-[95%] bg-[#00FF00] rounded-full relative">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_#00FF00]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative w-full py-24 bg-[#030303] border-t border-white/5 reveal-group" id="faq">
<div className="max-w-[1000px] mx-auto px-6">
<div className="flex items-center gap-2 mb-8">
<span className="text-[#00FF00] text-xs">●</span>
<span className="text-xs font-mono text-neutral-400 tracking-widest uppercase">FREQUENTLY ASKED</span>
</div>
<h2 className="text-4xl lg:text-5xl font-manrope font-semibold text-white tracking-tight mb-12">QUESTIONS</h2>
<div className="divide-y divide-white/10">

<details className="group py-6 cursor-pointer">
<summary className="flex justify-between items-center text-lg font-medium text-neutral-200 group-hover:text-white transition-colors">
                        What makes Signal PR different?
                        <iconify-icon className="text-neutral-500 group-open:rotate-45 transition-transform" icon="solar:add-circle-linear"></iconify-icon>
</summary>
<p className="mt-4 text-neutral-400 font-light leading-relaxed max-w-2xl">
                        We are the first agency to combine traditional media relations with GEO (Generative Engine Optimization). We don't just get you in the news; we ensure you're the recommended answer in AI searches like ChatGPT.
                    </p>
</details>

<details className="group py-6 cursor-pointer">
<summary className="flex justify-between items-center text-lg font-medium text-neutral-200 group-hover:text-white transition-colors">
                        What is AI Search Optimization (GEO)?
                        <iconify-icon className="text-neutral-500 group-open:rotate-45 transition-transform" icon="solar:add-circle-linear"></iconify-icon>
</summary>
<p className="mt-4 text-neutral-400 font-light leading-relaxed max-w-2xl">
                        GEO involves optimizing your digital footprint so Large Language Models (LLMs) recognize your brand as an authority. This includes structuring data, securing citations in training datasets, and semantic context building.
                    </p>
</details>

<details className="group py-6 cursor-pointer">
<summary className="flex justify-between items-center text-lg font-medium text-neutral-200 group-hover:text-white transition-colors">
                        Which media outlets do you work with?
                        <iconify-icon className="text-neutral-500 group-open:rotate-45 transition-transform" icon="solar:add-circle-linear"></iconify-icon>
</summary>
<p className="mt-4 text-neutral-400 font-light leading-relaxed max-w-2xl">
                        We work with top-tier Web3 publications (CoinDesk, Cointelegraph, The Block) as well as mainstream business tech media (TechCrunch, Forbes, Bloomberg) depending on your news value.
                    </p>
</details>

<details className="group py-6 cursor-pointer">
<summary className="flex justify-between items-center text-lg font-medium text-neutral-200 group-hover:text-white transition-colors">
                        How long does it take to see results?
                        <iconify-icon className="text-neutral-500 group-open:rotate-45 transition-transform" icon="solar:add-circle-linear"></iconify-icon>
</summary>
<p className="mt-4 text-neutral-400 font-light leading-relaxed max-w-2xl">
                        Traditional PR results typically appear within 2-4 weeks of engagement. AI Search Optimization is a longer-term play, typically showing significant movement in 4-8 weeks.
                    </p>
</details>

<details className="group py-6 cursor-pointer">
<summary className="flex justify-between items-center text-lg font-medium text-neutral-200 group-hover:text-white transition-colors">
                        Do you offer podcast placements?
                        <iconify-icon className="text-neutral-500 group-open:rotate-45 transition-transform" icon="solar:add-circle-linear"></iconify-icon>
</summary>
<p className="mt-4 text-neutral-400 font-light leading-relaxed max-w-2xl">
                        Yes, we have a dedicated podcast booking division that secures interviews on leading crypto and tech podcasts to amplify your founder's voice.
                    </p>
</details>

<details className="group py-6 cursor-pointer">
<summary className="flex justify-between items-center text-lg font-medium text-neutral-200 group-hover:text-white transition-colors">
                        What are your pricing models?
                        <iconify-icon className="text-neutral-500 group-open:rotate-45 transition-transform" icon="solar:add-circle-linear"></iconify-icon>
</summary>
<p className="mt-4 text-neutral-400 font-light leading-relaxed max-w-2xl">
                        We work primarily on a retainer basis for long-term campaigns, but offer project-based pricing for specific launches or events. Book a call for a custom quote.
                    </p>
</details>
</div>
</div>
</section>

<footer className="lg:px-12 overflow-hidden reveal-group w-full border-white/10 border-t pt-24 pr-6 pb-12 pl-6 relative bg-[#030303]">
<div className="relative z-10 max-w-[1400px] mx-auto flex flex-col lg:flex-row justify-between items-start gap-20">
<div className="flex flex-col gap-6 max-w-md">
<div className="flex items-center gap-2">
<iconify-icon className="text-white" icon="solar:satellite-linear" width="24"></iconify-icon>
<span className="text-xl font-bold font-manrope text-white tracking-tight">SIGNAL PR</span>
</div>
<p className="text-neutral-500 font-light">
                    Web3 PR + AI Search Optimization.<br/>
                    The agency for the intelligence age.
                </p>
<a className="text-white border-b border-white/30 pb-1 inline-block hover:border-[#00FF00] hover:text-[#00FF00] transition-colors w-max" href="mailto:hello@signalpr.io">
                    hello@signalpr.io
                </a>
</div>
<div className="grid grid-cols-2 gap-16">
<div className="flex flex-col gap-4">
<span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">Navigation</span>
<a className="text-sm text-neutral-300 hover:text-[#00FF00] transition-colors" href="#services">Services</a>
<a className="text-sm text-neutral-300 hover:text-[#00FF00] transition-colors" href="#process">How We Work</a>
<a className="text-sm text-neutral-300 hover:text-[#00FF00] transition-colors" href="#faq">FAQ</a>
<a className="text-sm text-neutral-300 hover:text-[#00FF00] transition-colors" href="https://calendly.com">Contact</a>
</div>
<div className="flex flex-col gap-4">
<span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">Connect</span>
<a className="text-sm text-neutral-300 hover:text-[#00FF00] transition-colors" href="#">Twitter / X</a>
<a className="text-sm text-neutral-300 hover:text-[#00FF00] transition-colors" href="#">LinkedIn</a>
<a className="text-sm text-neutral-300 hover:text-[#00FF00] transition-colors" href="#">Telegram</a>
</div>
</div>
</div>
<div className="relative z-10 mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-neutral-600 font-mono uppercase tracking-wider gap-4">
<span>© 2025 Signal PR. All rights reserved.</span>
<div className="flex gap-6">
<a className="hover:text-neutral-400" href="#">Privacy Policy</a>
<a className="hover:text-neutral-400" href="#">Terms of Service</a>
</div>
</div>
</footer>



    </>
  );
}
