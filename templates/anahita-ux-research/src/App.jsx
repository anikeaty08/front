import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = { transform: `perspective(1000px) rotateX(${value}deg)` };
if (value !== 0) rotateXUtilities[`.-rotate-x-${value}`] = { transform: `perspective(1000px) rotateX(-${value}deg)` };
});
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = { transform: `perspective(1000px) rotateY(${value}deg)` };
if (value !== 0) rotateYUtilities[`.-rotate-y-${value}`] = { transform: `perspective(1000px) rotateY(-${value}deg)` };
});
addUtilities({ ...rotateXUtilities, ...rotateYUtilities });
}
]
};



        function checkHash() {
            const hash = window.location.hash;
            const homeView = document.getElementById('home-view');
            const resumeView = document.getElementById('resume-view');
            
            // Nav items
            const navResume = document.getElementById('nav-resume');
            const navWork = document.getElementById('nav-work');
            const navAbout = document.getElementById('nav-about');
            
            // Reset nav state
            [navResume, navWork, navAbout].forEach(el => {
                if(el) {
                    el.classList.remove('text-slate-900');
                    el.classList.add('text-slate-500');
                }
            });

            if (hash === '#resume') {
                homeView.classList.add('hidden');
                resumeView.classList.remove('hidden');
                if(navResume) {
                    navResume.classList.remove('text-slate-500');
                    navResume.classList.add('text-slate-900');
                }
                window.scrollTo(0, 0);
            } else {
                resumeView.classList.add('hidden');
                homeView.classList.remove('hidden');
                
                // Optional: Highlight current section if needed, though scroll spy is more complex
                // For now, if hash is #work or #about, highlighting creates visual feedback
                if(hash === '#work' && navWork) {
                     navWork.classList.remove('text-slate-500');
                     navWork.classList.add('text-slate-900');
                } else if (hash === '#about' && navAbout) {
                     navAbout.classList.remove('text-slate-500');
                     navAbout.classList.add('text-slate-900');
                }
            }
        }

        window.addEventListener('hashchange', checkHash);
        window.addEventListener('load', checkHash);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-blue-50/60 rounded-full blur-3xl opacity-60 mix-blend-multiply animate-blob"></div>
<div className="absolute top-[20%] -left-[10%] w-[500px] h-[500px] bg-sky-50/60 rounded-full blur-3xl opacity-60 mix-blend-multiply animate-blob animation-delay-2000"></div>
</div>

<nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100/50">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="text-lg font-medium tracking-tight text-slate-900 hover:opacity-80 transition-opacity flex items-center gap-2" href="#home">
                Anahita Bagherpour
            </a>
<div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors nav-link text-slate-500" href="#about" id="nav-about">About</a>
<a className="hover:text-slate-900 transition-colors nav-link text-slate-500" href="#work" id="nav-work">Work</a>
<a className="hover:text-slate-900 transition-colors nav-link text-slate-500" href="/resume" id="nav-resume">Resume</a>
</div>
<a className="text-sm font-medium bg-slate-900 text-white px-4 py-2 rounded-full hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10 ring-1 ring-slate-900/5" href="mailto:bagherpour.anahita@gmail.com">
                Get in Touch
            </a>
</div>
</nav>

<main className="block transition-opacity duration-300" id="home-view">

<header className="md:pt-48 md:pb-28 max-w-6xl mr-auto ml-auto pt-32 pr-6 pb-16 pl-6 relative">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="fade-in-up z-10 order-2 lg:order-1 relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                        Open to new opportunities
                    </div>

<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-slate-900 leading-[1.1] mb-6">
                        Turning ambiguous problems into <span className="text-slate-400">clarity and confidence.</span>
</h1>

<p className="md:text-xl leading-relaxed text-lg font-normal text-slate-500 max-w-xl mt-8 mb-10">
                        I lead end-to-end research across discovery, strategy, and evaluation—especially in high-stakes domains like finance, enterprise platforms, education, and AI-powered systems.
                    </p>
<div className="flex items-center gap-4">
<a className="inline-flex items-center gap-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 px-5 py-2.5 rounded-full transition-colors shadow-sm" href="#work">
                            View Selected Work
                            <iconify-icon height="16" icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
<a className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 px-5 py-2.5 rounded-full transition-colors" href="#about">
                            More About Me
                        </a>
</div>
</div>

<div className="relative w-full max-w-lg mx-auto lg:max-w-none fade-in-up delay-200 order-1 lg:order-2 group perspective-1000">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-100/50 to-sky-100/50 rounded-full blur-3xl -z-10 opacity-60"></div>

<div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-100 bg-white group-hover:rotate-1 transition-transform duration-700 ease-out origin-center">
<img alt="Anahita Bagherpour" className="w-full h-auto object-cover aspect-[4/3] object-top transform scale-105 group-hover:scale-100 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8bae3462-678b-43be-b6f9-f770d4c3cb20_1600w.jpg"/>
<div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl"></div>
</div>
</div>
</div>
</header>

<section className="px-6 py-12 max-w-6xl mx-auto fade-in-up delay-100" id="work">
<div className="flex border-slate-100 border-b mb-10 pb-4 items-end justify-between">
<h2 className="text-2xl font-medium tracking-tight text-slate-900">Selected Work</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">

<a className="group block cursor-pointer" href="microsoft-azure">
<div className="w-full aspect-[4/3] bg-slate-900 relative rounded-xl overflow-hidden mb-5 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-blue-500/20 isolate border border-slate-800">

<div className="absolute inset-0 bg-grid-slate opacity-[0.15]"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-blue-900/10 via-slate-900/0 to-slate-900/0"></div>
<div className="absolute -top-[100px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/20 blur-[80px] rounded-full mix-blend-screen opacity-50"></div>

<div className="absolute inset-0 flex items-center justify-center perspective-normal">

<svg className="absolute w-full h-full pointer-events-none" viewbox="0 0 400 300">
<defs>
<lineargradient id="lineGrad" x1="0" x2="1" y1="0" y2="0">
<stop offset="0%" stop-color="rgba(14, 165, 233, 0)"></stop>
<stop offset="50%" stop-color="rgba(14, 165, 233, 0.4)"></stop>
<stop offset="100%" stop-color="rgba(14, 165, 233, 0)"></stop>
</lineargradient>
</defs>
<path className="opacity-70" d="M 60 150 C 120 150, 150 160, 200 160 S 280 150, 340 150" fill="none" stroke="url(#lineGrad)" stroke-dasharray="4 4" strokeWidth="1.5"></path>
</svg>

<div className="absolute left-10 lg:left-14 top-1/2 -translate-y-1/2 -translate-x-4 scale-90 opacity-60 bg-slate-800/40 backdrop-blur-md border border-slate-700/60 p-3 rounded-lg flex flex-col items-center gap-2 transform rotate-y-12 shadow-lg">
<div className="w-8 h-8 rounded bg-slate-700/50 border border-slate-600/50 flex items-center justify-center">
<iconify-icon className="text-cyan-400/70" icon="lucide:database" width="14"></iconify-icon>
</div>
<div className="h-1 w-8 bg-slate-700 rounded-full"></div>
</div>

<div className="relative z-10 bg-[#0F172A]/80 backdrop-blur-xl border border-slate-700/50 p-5 rounded-xl shadow-2xl shadow-black/40 ring-1 ring-white/5 transform group-hover:scale-105 transition-transform duration-500 flex flex-col gap-3 min-w-[200px] rotate-x-5 group-hover:rotate-x-0 transition-all">
<div className="flex items-center gap-1.5 border-b border-white/5 pb-3">
<div className="w-2 h-2 rounded-full bg-slate-600"></div>
<div className="w-2 h-2 rounded-full bg-slate-600"></div>
<div className="w-2 h-2 rounded-full bg-slate-600"></div>
<span className="ml-auto text-[9px] font-mono text-slate-500 flex items-center gap-1">
<iconify-icon icon="lucide:file-code" width="10"></iconify-icon> pipeline.py
                                    </span>
</div>
<div className="space-y-1.5 font-mono text-[10px] leading-relaxed">
<div className="flex gap-1.5">
<span className="text-purple-400">import</span>
<span className="text-slate-300">synapse.ml.core</span>
</div>
<div className="flex gap-1.5 pl-0">
<span className="text-sky-400">df</span>
<span className="text-slate-400">=</span>
<span className="text-yellow-200">spark</span><span className="text-slate-300">.read.load(source)</span>
</div>
<div className="flex gap-1.5">
<span className="text-sky-400">model</span>
<span className="text-slate-400">=</span>
<span className="text-green-400">TrainClassifier()</span>
</div>
<div className="pt-2">
<div className="bg-green-500/10 border border-green-500/20 rounded px-2 py-1 text-green-400 flex items-center justify-between gap-2 shadow-inner shadow-green-500/5">
<div className="flex items-center gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
<span>Training Complete</span>
</div>
<span className="opacity-70">98%</span>
</div>
</div>
</div>
<div className="absolute -right-10 -bottom-10 w-24 h-24 bg-cyan-500/10 blur-2xl rounded-full pointer-events-none"></div>
</div>

<div className="absolute right-10 lg:right-14 top-1/2 -translate-y-1/2 translate-x-2 scale-95 bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-md border border-slate-700/60 p-3 rounded-lg flex flex-col items-center gap-2 transform -rotate-y-12 shadow-lg">
<div className="w-10 h-10 rounded-full border border-green-500/20 bg-green-500/5 flex items-center justify-center relative">
<iconify-icon className="text-green-400" icon="lucide:brain-circuit" width="18"></iconify-icon>
<div className="absolute inset-0 bg-green-400/10 blur-md rounded-full"></div>
</div>
<div className="text-[9px] font-mono text-slate-400">v2.1.0</div>
</div>
</div>
<div className="absolute top-4 left-4 z-30">
<div className="flex items-center gap-2">
<iconify-icon icon="logos:azure-icon" width="16"></iconify-icon>
<h3 className="text-xs font-semibold text-white tracking-wide uppercase opacity-80">Synapse</h3>
</div>
</div>
</div>
<div className="flex justify-between items-start">
<div className="space-y-1">
<h3 className="group-hover:text-blue-700 transition-colors text-lg font-medium text-slate-900 tracking-tight">Microsoft Azure Synapse-ML Integration</h3>
<p className="text-sm text-slate-500">Optimizing analytics pipelines for data engineers.</p>
<div className="flex flex-wrap gap-2 pt-2">
<span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">B2B Enterprise</span>
<span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">DevTools</span>
</div>
</div>
<div className="p-2 rounded-full group-hover:bg-blue-50 transition-colors flex-shrink-0">
<iconify-icon className="text-slate-400 group-hover:text-blue-700 transition-colors text-xl" icon="lucide:arrow-up-right"></iconify-icon>
</div>
</div>
</a>

<a className="group block cursor-pointer" href="true-cost">
<div className="w-full aspect-[4/3] bg-[#F4F6F8] border border-slate-200 rounded-xl overflow-hidden relative mb-5 transition-all duration-300 group-hover:border-emerald-400 group-hover:shadow-lg group-hover:shadow-emerald-500/10 isolate">

<div className="absolute inset-0 overflow-hidden">
<div className="absolute top-6 left-6 z-0 transform -rotate-12 select-none pointer-events-none">
<span className="font-serif text-6xl text-emerald-500 opacity-10">$</span>
</div>
<div className="absolute -bottom-20 -right-20 w-64 h-64 bg-orange-400 blob-shape opacity-10 transform rotate-45 z-0"></div>
<img alt="University Campus" className="absolute -right-[15%] top-0 w-[85%] h-full object-cover shadow-2xl transform rotate-0 z-10 brightness-[1.05] contrast-[0.95] mask-image-gradient group-hover:scale-[1.02] transition-transform duration-700" src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>

<div className="absolute top-1/2 left-6 transform -translate-y-1/2 w-[180px] sm:w-[220px] bg-white rounded-lg shadow-xl shadow-slate-200/50 p-5 z-20 border border-slate-100/80 backdrop-blur-sm group-hover:-translate-y-[52%] transition-transform duration-500">
<h4 className="text-xs font-medium text-slate-900 mb-3 font-sans flex items-center gap-1.5">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                                    Central University
                                </h4>
<div className="h-px bg-slate-100 w-full mb-3"></div>
<div className="mb-3">
<p className="text-[10px] uppercase tracking-wider font-bold text-slate-400 mb-0.5">Sticker price</p>
<div className="relative inline-block">
<span className="font-serif text-slate-400 text-sm">$45,000/yr</span>
<div className="absolute top-1/2 left-0 w-full h-[1.5px] bg-orange-500 transform -rotate-3 origin-left rounded-full"></div>
</div>
</div>
<div className="flex justify-between items-center mb-3 bg-emerald-50/50 p-1.5 rounded border border-emerald-100/50">
<span className="text-[10px] text-emerald-700 font-medium">Federal aid</span>
<span className="text-[10px] text-emerald-700 font-bold">-$6,200</span>
</div>
<div>
<p className="text-[10px] font-bold text-slate-900 mb-0.5">You pay</p>
<p className="font-serif text-xl font-medium text-slate-900 tracking-tight">$38,800/yr</p>
</div>
</div>
</div>
</div>
<div className="flex justify-between items-start">
<div className="space-y-1">
<h3 className="text-lg font-medium text-slate-900 group-hover:text-emerald-600 transition-colors tracking-tight">Niche's True Cost</h3>
<p className="text-sm text-slate-500">Helping families understand the real cost of college with transparent data.</p>
<div className="flex flex-wrap gap-2 pt-2 items-center">
<span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">FinTech</span>
<span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">EdTech</span>
<div className="flex items-center gap-1 text-emerald-600 bg-emerald-50/80 inline-flex px-1.5 py-0.5 rounded border border-emerald-100/50">
<iconify-icon className="text-[10px]" icon="lucide:star"></iconify-icon>
<span className="text-[10px] font-medium tracking-tight">NY Times Featured</span>
</div>
</div>
</div>
<div className="p-2 rounded-full group-hover:bg-emerald-50 transition-colors flex-shrink-0">
<iconify-icon className="text-slate-400 group-hover:text-emerald-600 transition-colors text-xl" icon="lucide:arrow-up-right"></iconify-icon>
</div>
</div>
</a>
</div>
</section>

<section className="px-6 py-24 max-w-6xl mx-auto border-t border-slate-100 mt-12 bg-slate-50/50 -mx-6 md:mx-auto md:rounded-3xl my-12" id="about">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12">
<div className="md:col-span-6 lg:col-span-5">
<h2 className="uppercase flex items-center gap-2 text-sm font-medium text-blue-600 tracking-wider mb-6">
<iconify-icon icon="lucide:user" width="16"></iconify-icon> About Me
                    </h2>

<div className="space-y-6 text-lg text-slate-600 font-normal leading-relaxed">
<p className="text-xl font-medium text-slate-900">I’m a researcher who loves the messy beginning of the design process — where the right questions matter more than quick answers.</p>
<p>I specialize in early discovery and strategic research, helping teams make confident decisions when the path forward isn’t obvious. I believe research isn’t just about finding answers, it’s about asking the right questions that align product vision with real user needs.</p>
<p>Currently, I focus on building research practices that scale. Previously, I contributed to cloud experiences at Microsoft and enterprise software at Extron.</p>
</div>
</div>
<div className="md:col-span-1 hidden md:block"></div>
<div className="md:col-span-5 lg:col-span-6">
<h3 className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-8">Experience</h3>
<div className="space-y-0 border-l border-slate-200 ml-3 relative">

<div className="relative pl-8 pb-10 group">
<span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-white border-2 border-blue-600 shadow-[0_0_0_4px_white] group-hover:scale-110 transition-transform"></span>
<div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
<h4 className="text-base font-medium text-slate-900 group-hover:text-blue-700 transition-colors">Senior UX Researcher</h4>
<span className="text-xs text-slate-400 font-mono">Feb 2022 — Present</span>
</div>
<p className="text-sm text-slate-500 font-medium">Niche</p>
</div>

<div className="relative pl-8 pb-10 group">
<span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-white border-2 border-slate-300 shadow-[0_0_0_4px_white] group-hover:border-blue-400 transition-colors"></span>
<div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
<h4 className="text-base font-medium text-slate-900">UX Researcher</h4>
<span className="text-xs text-slate-400 font-mono">Feb 2021 — Feb 2022</span>
</div>
<p className="text-sm text-slate-500">Microsoft</p>
</div>

<div className="relative pl-8 pb-10 group">
<span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-white border-2 border-slate-300 shadow-[0_0_0_4px_white] group-hover:border-blue-400 transition-colors"></span>
<div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
<h4 className="text-base font-medium text-slate-900">UX Researcher</h4>
<span className="text-xs text-slate-400 font-mono">Sep 2018 — Feb 2021</span>
</div>
<p className="text-sm text-slate-500">Extron Electronics</p>
</div>

<div className="relative pl-8 group">
<span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-white border-2 border-slate-300 shadow-[0_0_0_4px_white] group-hover:border-blue-400 transition-colors"></span>
<div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
<h4 className="text-base font-medium text-slate-900">Research Associate</h4>
<span className="text-xs text-slate-400 font-mono">Jan 2016 — Sep 2018</span>
</div>
<p className="text-sm text-slate-500">UC Irvine (Calit2)</p>
</div>
</div>
</div>
</div>
</section>
</main>

<main className="hidden min-h-screen pt-32 pb-24 max-w-4xl mx-auto px-6 fade-in-up" id="resume-view">

<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 border-b border-slate-100 pb-10">
<div>
<h1 className="text-4xl font-medium tracking-tight text-slate-900 mb-2">Anahita Bagherpour</h1>
<p className="text-lg text-slate-500 mb-4">Senior User Experience Researcher</p>
<div className="flex flex-wrap gap-4 text-sm text-slate-600">
<a className="flex items-center gap-1.5 hover:text-blue-600 transition-colors" href="mailto:contact@anahita.ux">
<iconify-icon icon="solar:letter-linear"></iconify-icon> contact@anahita.ux
                    </a>
<a className="flex items-center gap-1.5 hover:text-blue-600 transition-colors" href="#">
<iconify-icon icon="solar:global-linear"></iconify-icon> www.anahita.ux
                    </a>
<div className="flex items-center gap-1.5 text-slate-400">
<iconify-icon icon="solar:map-point-linear"></iconify-icon> San Francisco, CA
                    </div>
</div>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium bg-slate-900 text-white px-5 py-2.5 rounded-lg hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10" href="resume.pdf">
<iconify-icon icon="solar:file-download-linear" width="18"></iconify-icon>
                Download Resume (PDF)
            </a>
</div>

<div className="mb-12">
<h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Professional Summary</h3>
<p className="text-slate-600 leading-relaxed max-w-3xl">
                Senior UX Researcher with over 6 years of experience in enterprise software, cloud platforms, and ed-tech. Expert in translating ambiguous business problems into actionable research strategies. Proven track record of influencing product direction for high-stakes tools used by millions. passionate about building scalable research operations and democratizing insights across cross-functional teams.
            </p>
</div>

<div className="mb-12">
<h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-6">Experience</h3>
<div className="space-y-10">

<div className="group">
<div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
<h4 className="text-lg font-medium text-slate-900 group-hover:text-blue-700 transition-colors">Senior UX Researcher</h4>
<span className="text-sm text-slate-500 font-mono">Feb 2022 — Present</span>
</div>
<div className="text-sm font-medium text-blue-600 mb-4">Niche</div>
<ul className="space-y-2.5 text-slate-600 text-sm leading-relaxed list-disc list-outside ml-4 marker:text-slate-300">
<li>Led discovery research for "True Cost", a financial transparency tool used by 2M+ students, resulting in a 15% increase in user engagement.</li>
<li>Established the company's first Research Repository, reducing insight retrieval time by 40% across product teams.</li>
<li>Mentored two junior researchers and developed standardized templates for usability testing and interview protocols.</li>
<li>Partnered with Product Managers to define the roadmap for Q4 2023, integrating qualitative insights into OKR planning.</li>
</ul>
</div>

<div className="group">
<div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
<h4 className="text-lg font-medium text-slate-900 group-hover:text-blue-700 transition-colors">UX Researcher II</h4>
<span className="text-sm text-slate-500 font-mono">Feb 2021 — Feb 2022</span>
</div>
<div className="text-sm font-medium text-blue-600 mb-4">Microsoft</div>
<ul className="space-y-2.5 text-slate-600 text-sm leading-relaxed list-disc list-outside ml-4 marker:text-slate-300">
<li>Conducted longitudinal diary studies for Azure Synapse Analytics to understand the friction points of data engineers.</li>
<li>Collaborated with data science teams to integrate telemetry data with qualitative findings, creating a holistic view of user health.</li>
<li>Facilitated cross-team workshops to align engineering, design, and PMs on user personas for the new Machine Learning integration.</li>
<li>Presented research findings to C-level executives, influencing a strategic pivot in the onboarding experience.</li>
</ul>
</div>

<div className="group">
<div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
<h4 className="text-lg font-medium text-slate-900 group-hover:text-blue-700 transition-colors">UX Researcher</h4>
<span className="text-sm text-slate-500 font-mono">Sep 2018 — Feb 2021</span>
</div>
<div className="text-sm font-medium text-blue-600 mb-4">Extron Electronics</div>
<ul className="space-y-2.5 text-slate-600 text-sm leading-relaxed list-disc list-outside ml-4 marker:text-slate-300">
<li>Managed end-to-end usability testing for hardware control interfaces, ensuring compliance with accessibility standards.</li>
<li>Conducted field studies and contextual inquiries at customer sites to observe real-world usage of AV control systems.</li>
<li>Reduced support ticket volume by 20% through targeted research on error messaging and help documentation.</li>
</ul>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-12">

<div>
<h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-6">Education</h3>
<div className="mb-4">
<h4 className="text-base font-medium text-slate-900">University of California, Irvine</h4>
<p className="text-sm text-slate-600 mt-1">B.A. in Psychology &amp; Social Behavior</p>
<p className="text-xs text-slate-400 mt-1">Minor in Digital Information Systems</p>
</div>
</div>

<div>
<h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-6">Skills &amp; Tools</h3>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 bg-slate-50 border border-slate-200 rounded-md text-xs font-medium text-slate-600">Contextual Inquiry</span>
<span className="px-3 py-1 bg-slate-50 border border-slate-200 rounded-md text-xs font-medium text-slate-600">Usability Testing</span>
<span className="px-3 py-1 bg-slate-50 border border-slate-200 rounded-md text-xs font-medium text-slate-600">Diary Studies</span>
<span className="px-3 py-1 bg-slate-50 border border-slate-200 rounded-md text-xs font-medium text-slate-600">Card Sorting</span>
<span className="px-3 py-1 bg-slate-50 border border-slate-200 rounded-md text-xs font-medium text-slate-600">SQL</span>
<span className="px-3 py-1 bg-slate-50 border border-slate-200 rounded-md text-xs font-medium text-slate-600">Figma</span>
<span className="px-3 py-1 bg-slate-50 border border-slate-200 rounded-md text-xs font-medium text-slate-600">UserTesting.com</span>
<span className="px-3 py-1 bg-slate-50 border border-slate-200 rounded-md text-xs font-medium text-slate-600">Dscout</span>
<span className="px-3 py-1 bg-slate-50 border border-slate-200 rounded-md text-xs font-medium text-slate-600">Python (Basics)</span>
</div>
</div>
</div>

<div className="mt-20 p-8 bg-slate-50 border border-slate-100 rounded-2xl flex flex-col items-center justify-center text-center">
<h3 className="text-slate-900 font-medium mb-2">Want to keep a copy?</h3>
<p className="text-slate-500 text-sm mb-6">Download the full PDF version of my resume for offline viewing.</p>
<a className="inline-flex items-center gap-2 text-sm font-medium bg-slate-900 text-white px-6 py-3 rounded-full hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10" href="resume.pdf">
<iconify-icon icon="solar:file-download-linear" width="18"></iconify-icon>
                Download Resume (PDF)
            </a>
</div>
</main>


    </>
  );
}
