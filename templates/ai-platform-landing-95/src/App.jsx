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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[80%] h-[500px] bg-gradient-to-b from-indigo-500/10 to-transparent blur-[120px] rounded-[100%] pointer-events-none -z-10"></div>

<nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-black/50 border-b border-white/[0.05]">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-white text-lg font-semibold tracking-tighter flex items-center gap-2" href="#">
<iconify-icon className="text-xl" icon="solar:infinity-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    NEX
                </a>
<div className="hidden md:flex items-center gap-6 text-sm font-medium">
<a className="hover:text-white transition-colors duration-200" href="#">Product</a>
<a className="hover:text-white transition-colors duration-200" href="#">Solutions</a>
<a className="hover:text-white transition-colors duration-200" href="#">Pricing</a>
<a className="hover:text-white transition-colors duration-200" href="#">Docs</a>
</div>
</div>
<div className="flex items-center gap-4 text-sm font-medium">
<a className="hidden md:block hover:text-white transition-colors duration-200" href="#">Sign in</a>
<a className="bg-white text-black px-4 py-1.5 rounded-full hover:bg-zinc-200 transition-colors duration-200" href="#">Get Started</a>
</div>
</div>
</nav>

<main className="flex-grow flex flex-col items-center justify-center px-6 pt-24 pb-16 text-center relative z-10">
<a className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-zinc-300 hover:bg-white/10 transition-colors mb-8" href="#">
<span className="flex h-2 w-2 rounded-full bg-indigo-500 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
</span>
            Introducing Nex AI v2.0
            <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 max-w-4xl mx-auto leading-[1.1] mb-6">
            Intelligence that writes, <br className="hidden md:block"/> thinks, and scales with you.
        </h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
            Automate complex workflows, generate production-ready code, and analyze data in seconds with our advanced foundation models.
        </p>
<div className="flex flex-col sm:flex-row items-center gap-4 mb-20">
<button className="w-full sm:w-auto px-6 py-3 bg-white text-black rounded-lg text-sm font-medium hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
                Start building for free
            </button>
<button className="w-full sm:w-auto px-6 py-3 bg-transparent border border-zinc-800 text-white rounded-lg text-sm font-medium hover:bg-zinc-900 transition-colors flex items-center justify-center gap-2">
<iconify-icon className="text-lg" icon="solar:play-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Watch Demo
            </button>
</div>

<div className="w-full max-w-5xl mx-auto relative perspective-[2000px]">

<div className="absolute inset-0 bg-gradient-to-t from-indigo-500/20 to-transparent blur-3xl rounded-3xl -z-10 translate-y-10 scale-95"></div>
<div className="relative bg-[#0c0c0c] border border-white/10 rounded-xl overflow-hidden shadow-2xl transform rotate-x-[2deg] scale-[0.98] hover:scale-100 transition-transform duration-700 ease-out">

<div className="h-12 border-b border-white/5 flex items-center px-4 bg-white/[0.02]">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-zinc-800"></div>
<div className="w-3 h-3 rounded-full bg-zinc-800"></div>
<div className="w-3 h-3 rounded-full bg-zinc-800"></div>
</div>
<div className="mx-auto flex items-center gap-2 bg-black border border-white/10 rounded-md px-3 py-1 w-1/3 text-xs text-zinc-500">
<iconify-icon icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        nex.ai/workspace/project
                    </div>
</div>

<div className="flex h-[400px] text-left">

<div className="w-14 border-r border-white/5 flex flex-col items-center py-4 gap-6 bg-white/[0.01]">
<iconify-icon className="text-white text-xl" icon="solar:widget-2-linear"></iconify-icon>
<iconify-icon className="text-zinc-600 text-xl" icon="solar:chat-square-linear"></iconify-icon>
<iconify-icon className="text-zinc-600 text-xl" icon="solar:database-linear"></iconify-icon>
<iconify-icon className="text-zinc-600 text-xl mt-auto" icon="solar:settings-linear"></iconify-icon>
</div>

<div className="flex-1 p-6 flex flex-col bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900/40 via-[#0c0c0c] to-[#0c0c0c]">

<div className="flex-1 overflow-hidden flex flex-col gap-6">

<div className="flex gap-4 items-start max-w-2xl">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center shrink-0">
<iconify-icon className="text-zinc-400 text-sm" icon="solar:user-linear"></iconify-icon>
</div>
<div className="bg-white/5 border border-white/5 rounded-2xl rounded-tl-sm p-4 text-sm text-zinc-300">
                                    Generate a Python script to scrape the latest pricing data from competitor websites and output it as a formatted JSON array. Handle pagination automatically.
                                </div>
</div>

<div className="flex gap-4 items-start max-w-3xl">
<div className="w-8 h-8 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center shrink-0">
<iconify-icon className="text-indigo-400 text-sm" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<div className="w-full">
<p className="text-sm text-zinc-300 mb-3">Here is the Python script using BeautifulSoup and Requests to handle pagination and export to JSON.</p>

<div className="bg-black border border-white/10 rounded-lg overflow-hidden">
<div className="flex items-center justify-between px-4 py-2 bg-white/[0.02] border-b border-white/5 text-xs text-zinc-500 font-mono">
<span>scraper.py</span>
<div className="flex items-center gap-1 cursor-pointer hover:text-zinc-300">
<iconify-icon icon="solar:copy-linear"></iconify-icon> Copy
                                            </div>
</div>
<div className="p-4 text-xs font-mono text-zinc-400 leading-relaxed overflow-x-hidden relative">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black pointer-events-none"></div>
<span className="text-indigo-400">import</span> requests<br/>
<span className="text-indigo-400">from</span> bs4 <span className="text-indigo-400">import</span> BeautifulSoup<br/>
<span className="text-indigo-400">import</span> json<br/><br/>
<span className="text-indigo-400">def</span> <span className="text-blue-400">scrape_pricing</span>(base_url):<br/>
                                                results = []<br/>
                                                page = <span className="text-orange-400">1</span><br/>
                                                <span className="text-indigo-400">while True</span>:<br/>
                                                    response = requests.get(<span className="text-green-400">f"{base_url}?page={page}"</span>)<br/>
                                                    soup = BeautifulSoup(response.text, <span className="text-green-400">'html.parser'</span>)<br/>
                                                    items = soup.find_all(<span className="text-green-400">'div'</span>, class_=<span className="text-green-400">'product-card'</span>)
                                        </div>
</div>
</div>
</div>
</div>

<div className="mt-auto relative">
<div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-transparent blur-md -z-10 rounded-xl"></div>
<div className="bg-black border border-white/10 rounded-xl p-3 flex items-center gap-3">
<iconify-icon className="text-zinc-500 hover:text-white cursor-pointer" icon="solar:paperclip-linear"></iconify-icon>
<input className="bg-transparent border-none outline-none text-sm text-white w-full placeholder:text-zinc-600" placeholder="Ask Nex to generate, analyze, or build..." type="text"/>
<button className="bg-white text-black p-1.5 rounded-md flex items-center justify-center hover:bg-zinc-200">
<iconify-icon className="text-sm" icon="solar:arrow-up-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="max-w-7xl mx-auto px-6 py-24 relative">
<div className="mb-16 text-center md:text-left">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">Unleash cognitive capabilities.</h2>
<p className="text-zinc-400 text-base max-w-xl">Everything you need to integrate advanced AI into your product, without the complexity of managing infrastructure.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[280px]">

<div className="md:col-span-2 bg-zinc-900/30 border border-white/[0.05] rounded-2xl p-8 relative overflow-hidden group hover:bg-zinc-900/50 transition-colors">
<div className="absolute top-0 right-0 w-[300px] h-[300px] bg-indigo-500/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-indigo-500/20 transition-colors duration-700"></div>
<div className="relative z-10 h-full flex flex-col">
<iconify-icon className="text-3xl text-zinc-300 mb-4" icon="solar:code-square-linear"></iconify-icon>
<h3 className="text-xl font-medium tracking-tight text-white mb-2">Instant Code Generation</h3>
<p className="text-sm text-zinc-500 max-w-sm mb-6">Describe what you need in plain English, and our models write secure, optimized code across 40+ languages.</p>

<div className="mt-auto border border-white/5 bg-black/50 rounded-lg p-3 text-xs font-mono text-zinc-500 flex flex-col gap-2">
<div className="flex items-center gap-2">
<span className="text-indigo-400">const</span> fetchUserData = <span className="text-indigo-400">async</span> (id) =&gt; {
                        </div>
<div className="flex items-center gap-2 pl-4">
<div className="w-1 h-3 bg-zinc-700 animate-pulse"></div> <span className="text-zinc-600 italic">// AI generating response...</span>
</div>
</div>
</div>
</div>

<div className="bg-zinc-900/30 border border-white/[0.05] rounded-2xl p-8 relative overflow-hidden group hover:bg-zinc-900/50 transition-colors">
<div className="relative z-10 h-full flex flex-col">
<iconify-icon className="text-3xl text-zinc-300 mb-4" icon="solar:chart-square-linear"></iconify-icon>
<h3 className="text-xl font-medium tracking-tight text-white mb-2">Deep Analytics</h3>
<p className="text-sm text-zinc-500 mb-6">Turn raw data into actionable insights instantly.</p>

<div className="mt-auto h-20 w-full flex items-end gap-2 px-2">
<div className="w-full bg-zinc-800 rounded-t-sm h-[30%] group-hover:bg-indigo-500/50 transition-all duration-500"></div>
<div className="w-full bg-zinc-800 rounded-t-sm h-[50%] group-hover:bg-indigo-500/70 transition-all duration-500 delay-75"></div>
<div className="w-full bg-zinc-800 rounded-t-sm h-[80%] group-hover:bg-indigo-400 transition-all duration-500 delay-150"></div>
<div className="w-full bg-zinc-800 rounded-t-sm h-[40%] group-hover:bg-indigo-500/50 transition-all duration-500 delay-200"></div>
<div className="w-full bg-zinc-800 rounded-t-sm h-[90%] group-hover:bg-indigo-400 transition-all duration-500 delay-300"></div>
</div>
</div>
</div>

<div className="bg-zinc-900/30 border border-white/[0.05] rounded-2xl p-8 relative overflow-hidden group hover:bg-zinc-900/50 transition-colors">
<div className="relative z-10 h-full flex flex-col">
<iconify-icon className="text-3xl text-zinc-300 mb-4" icon="solar:shield-check-linear"></iconify-icon>
<h3 className="text-xl font-medium tracking-tight text-white mb-2">Enterprise Security</h3>
<p className="text-sm text-zinc-500">SOC2 Type II certified. Your data is never used to train our base models.</p>

<div className="mt-auto space-y-3">
<div className="flex items-center justify-between p-2 rounded-md bg-white/5 border border-white/5">
<span className="text-xs text-zinc-400">Data Encryption</span>
<div className="w-7 h-4 bg-indigo-500 rounded-full relative">
<div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full"></div>
</div>
</div>
<div className="flex items-center justify-between p-2 rounded-md bg-white/5 border border-white/5">
<span className="text-xs text-zinc-400">Zero Retention</span>
<div className="w-7 h-4 bg-indigo-500 rounded-full relative">
<div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full"></div>
</div>
</div>
</div>
</div>
</div>

<div className="md:col-span-2 bg-zinc-900/30 border border-white/[0.05] rounded-2xl p-8 relative overflow-hidden group hover:bg-zinc-900/50 transition-colors flex flex-col md:flex-row items-center gap-8">
<div className="relative z-10 flex-1">
<iconify-icon className="text-3xl text-zinc-300 mb-4" icon="solar:cpu-bolt-linear"></iconify-icon>
<h3 className="text-xl font-medium tracking-tight text-white mb-2">Custom Model Fine-tuning</h3>
<p className="text-sm text-zinc-500 max-w-sm mb-6">Train our base models on your proprietary data securely. Achieve 99% accuracy on domain-specific tasks in minutes, not days.</p>
<a className="text-sm text-white hover:text-indigo-400 flex items-center gap-1 transition-colors" href="#">
                        Learn about fine-tuning <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="flex-1 w-full h-full min-h-[120px] bg-black/50 border border-white/5 rounded-xl p-4 flex flex-col justify-center relative">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800/20 to-transparent"></div>
<div className="flex items-center gap-4 relative z-10">
<div className="w-10 h-10 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center shrink-0">
<iconify-icon className="text-zinc-400" icon="solar:database-linear"></iconify-icon>
</div>
<div className="flex-1 h-0.5 bg-gradient-to-r from-zinc-700 via-indigo-500 to-zinc-700 relative">
<div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-indigo-400 shadow-[0_0_10px_rgba(129,140,248,0.8)] animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
</div>
<div className="w-10 h-10 rounded-lg bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center shrink-0">
<iconify-icon className="text-indigo-400" icon="solar:brain-linear"></iconify-icon>
</div>
</div>
<div className="flex justify-between mt-2 text-[10px] text-zinc-600 uppercase tracking-widest px-2">
<span>Raw Data</span>
<span>Fine-tuned</span>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 py-24 text-center border-t border-white/[0.05] mt-12 w-full">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">Ready to scale your intellect?</h2>
<p className="text-zinc-400 text-base mb-10 max-w-xl mx-auto">Join thousands of forward-thinking teams building the next generation of software.</p>
<button className="px-8 py-3.5 bg-white text-black rounded-lg text-sm font-medium hover:bg-zinc-200 transition-colors shadow-[0_0_30px_-5px_rgba(255,255,255,0.2)]">
            Create free account
        </button>
</section>

<footer className="border-t border-white/[0.05] bg-black/50 backdrop-blur-md py-12 px-6 mt-auto w-full">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2 text-white font-semibold tracking-tighter text-lg">
<iconify-icon icon="solar:infinity-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                NEX
            </div>
<div className="flex flex-wrap justify-center gap-6 text-sm text-zinc-500">
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">GitHub</a>
<a className="hover:text-white transition-colors" href="#">Discord</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Privacy</a>
</div>
<div className="text-sm text-zinc-600">
                © 2024 Nex AI Inc.
            </div>
</div>
</footer>

    </>
  );
}
