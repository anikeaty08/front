import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        function showMasterclass(e) {
            if(e) e.preventDefault();
            document.getElementById('main-page').classList.add('hidden');
            document.getElementById('masterclass-page').classList.remove('hidden');
            document.getElementById('nav-links').classList.add('opacity-0', 'pointer-events-none');
            window.scrollTo({top: 0, behavior: 'instant'});
        }
        function hideMasterclass(e) {
            if(e && e.currentTarget.tagName === 'A' && e.currentTarget.getAttribute('href').startsWith('#')) {
                // Let normal anchor scrolling happen if clicking from nav
            } else if (e) {
                e.preventDefault();
            }
            document.getElementById('masterclass-page').classList.add('hidden');
            document.getElementById('main-page').classList.remove('hidden');
            document.getElementById('nav-links').classList.remove('opacity-0', 'pointer-events-none');
            
            if(e && e.currentTarget.tagName !== 'A') {
                window.scrollTo({top: 0, behavior: 'instant'});
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0a0a0c]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white font-normal tracking-tight text-lg flex items-center gap-2" href="#" onclick="hideMasterclass(event)">
<div className="w-8 h-8 bg-gradient-to-br from-sky-400 to-blue-600 rounded-lg flex items-center justify-center text-xs font-medium tracking-tighter shadow-lg shadow-sky-400/20">NP</div>
<span className="opacity-90">NeuroProductive</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-normal text-slate-400" id="nav-links">
<a className="hover:text-white transition-colors duration-300" href="#transformation" onclick="hideMasterclass(event)">Transformation</a>
<a className="hover:text-white transition-colors duration-300" href="#science" onclick="hideMasterclass(event)">The Science</a>
<a className="hover:text-white transition-colors duration-300" href="#program" onclick="hideMasterclass(event)">Program</a>
<a className="hover:text-white transition-colors duration-300" href="#resources" onclick="hideMasterclass(event)">Resources</a>
</div>
<a className="hidden md:flex items-center gap-2 bg-white text-[#0a0a0c] px-4 py-2 rounded-lg text-xs font-normal hover:bg-slate-200 transition-all duration-300" href="#apply" onclick="hideMasterclass(event)">
                Apply Now
                <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="14"></iconify-icon>
</a>

<button className="md:hidden text-white">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<div id="main-page">

<header className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden flex flex-col items-center justify-center min-h-screen">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-sky-600/20 rounded-full blur-[120px] -z-10 opacity-70 pointer-events-none"></div>

<div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center">

<div className="absolute w-[200vw] h-[200vh] opacity-20 mix-blend-screen" style={{backgroundImage: 'radial-gradient(circle at center, rgba(56, 189, 248, 0.1) 1px, transparent 1px)', backgroundSize: '50px 50px'}}></div>

<svg className="absolute w-[120%] h-[120%] opacity-40 max-w-none" viewbox="0 0 1000 600" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="rgba(56, 189, 248, 0.25)" strokeWidth="1.5">
<path className="animate-[pulse_4s_ease-in-out_infinite]" d="M 100,150 L 300,350 L 450,200 L 700,400 L 850,200"></path>
<path className="animate-[pulse_4s_ease-in-out_infinite]" d="M 200,500 L 350,300 L 600,450 L 750,250" style={{animationDelay: '1s'}}></path>
<path d="M 300,350 L 350,300"></path>
<path d="M 450,200 L 600,450"></path>
<path d="M 700,400 L 750,250"></path>
<path d="M 100,300 L 200,500"></path>
<path d="M 800,500 L 850,200"></path>
<path d="M 400,550 L 600,450"></path>
</g>
<g fill="#38bdf8">
<circle className="animate-[pulse_3s_ease-in-out_infinite]" cx="100" cy="150" r="3"></circle>
<circle className="animate-[pulse_3s_ease-in-out_infinite] drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]" cx="300" cy="350" r="4.5" style={{animationDelay: '0.5s'}}></circle>
<circle className="animate-[pulse_3s_ease-in-out_infinite] drop-shadow-[0_0_10px_rgba(56,189,248,0.8)]" cx="450" cy="200" r="5" style={{animationDelay: '1.2s'}}></circle>
<circle className="animate-[pulse_3s_ease-in-out_infinite] drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]" cx="700" cy="400" r="4" style={{animationDelay: '0.8s'}}></circle>
<circle className="animate-[pulse_3s_ease-in-out_infinite]" cx="850" cy="200" r="3" style={{animationDelay: '1.5s'}}></circle>
<circle className="animate-[pulse_3s_ease-in-out_infinite]" cx="200" cy="500" r="4" style={{animationDelay: '0.3s'}}></circle>
<circle className="animate-[pulse_3s_ease-in-out_infinite]" cx="350" cy="300" r="3" style={{animationDelay: '0.9s'}}></circle>
<circle className="animate-[pulse_3s_ease-in-out_infinite] drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]" cx="600" cy="450" r="4.5" style={{animationDelay: '1.1s'}}></circle>
<circle className="animate-[pulse_3s_ease-in-out_infinite]" cx="750" cy="250" r="3" style={{animationDelay: '0.4s'}}></circle>
<circle cx="100" cy="300" r="2"></circle>
<circle cx="800" cy="500" r="3"></circle>
<circle cx="400" cy="550" r="2"></circle>
</g>
</svg>

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#0a0a0c_70%)]"></div>
</div>
<div className="max-w-5xl mx-auto px-6 text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-300 text-xs font-normal mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
</span>
                    Accepting Applications for Fall Cohort
                </div>
<h1 className="text-5xl md:text-7xl font-normal text-white tracking-tight mb-6 leading-[1.1] drop-shadow-[0_0_35px_rgba(255,255,255,0.35)]">
                    Rewire your brain for <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-200 via-white to-sky-200">elite consistency.</span>
</h1>
<p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed mb-10">
                    Go from inconsistent procrastinator to productivity master. A science-based transformation protocol for ambitious students seeking psychological peace and high performance.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 bg-white text-[#0a0a0c] rounded-lg font-normal text-sm hover:bg-slate-200 transition-all shadow-lg shadow-white/10 flex items-center justify-center gap-2" href="#apply">
                        Apply Now
                    </a>
<a className="w-full sm:w-auto px-8 py-3.5 border border-white/10 bg-white/5 text-white rounded-lg font-normal text-sm hover:bg-white/10 transition-all flex items-center justify-center gap-2 backdrop-blur-sm group" href="#masterclass" onclick="showMasterclass(event)">
<iconify-icon className="text-sky-400 group-hover:text-sky-300 transition-colors" icon="lucide:play-circle" strokeWidth="1.5" width="18"></iconify-icon>
                        Watch Masterclass
                    </a>
</div>

<div className="mt-20 pt-8 border-t border-white/5 flex flex-col items-center gap-4">
<p className="text-xs text-slate-500 uppercase tracking-widest font-normal">Trusted by students from</p>
<div className="flex flex-wrap justify-center gap-8 opacity-40 grayscale">
<span className="text-lg font-serif tracking-tight">HARVARD</span>
<span className="text-lg font-serif tracking-tight">STANFORD</span>
<span className="text-lg font-serif tracking-tight">OXFORD</span>
<span className="text-lg font-serif tracking-tight">MIT</span>
<span className="text-lg font-serif tracking-tight">CAMBRIDGE</span>
</div>
</div>
</div>
</header>

<section className="py-24 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-900/10 via-[#131316] to-[#0a0a0c] border-y border-white/5 relative overflow-hidden">

<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'url(\'data:image/svg+xml'}}></div>
<div className="max-w-3xl mx-auto px-6 text-center relative z-10">

<div className="relative w-24 h-24 mx-auto mb-10 flex items-center justify-center">
<div className="absolute inset-0 bg-sky-500/20 rounded-full blur-2xl animate-[pulse_4s_ease-in-out_infinite]"></div>
<div className="absolute inset-0 border border-sky-400/20 rounded-full animate-[spin_12s_linear_infinite] border-dashed"></div>
<div className="absolute inset-3 bg-gradient-to-tr from-sky-400/20 to-blue-600/20 rounded-full blur-md"></div>
<div className="relative w-14 h-14 bg-[#0a0a0c] border border-sky-400/40 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(56,189,248,0.4)]">
<iconify-icon className="text-sky-300" icon="lucide:network" strokeWidth="1.5" width="28"></iconify-icon>
</div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white]"></div>
<div className="absolute bottom-2 right-1 w-1.5 h-1.5 bg-sky-400 rounded-full shadow-[0_0_8px_#38bdf8]"></div>
</div>
<h2 className="text-3xl md:text-4xl font-normal text-white tracking-tight mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                    Not a productivity course.<br/>A neurological transformation.
                </h2>
<p className="text-slate-400 font-light text-xl leading-relaxed">
                    Most advice fails because it ignores biology. NeuroProductive utilizes frameworks from <span className="text-sky-300">neuroscience, psychology, and habit engineering</span> to fundamentally restructure how you approach work. Built by Doji, a medical graduate and productivity academic.
                </p>
</div>
</section>

<section className="py-24 bg-[#0a0a0c]" id="transformation">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h3 className="text-2xl md:text-3xl font-normal text-white tracking-tight">Engineered for Transformation</h3>
<p className="text-slate-500 mt-2 font-light text-xl">The outcomes of the NeuroProductive protocol.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-sky-500/30 transition-all duration-500">
<div className="w-12 h-12 rounded-full bg-sky-500/10 flex items-center justify-center mb-6 text-sky-400 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_15px_rgba(56,189,248,0.1)] group-hover:shadow-[0_0_20px_rgba(56,189,248,0.3)]">
<iconify-icon icon="lucide:zap" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-normal text-white mb-3">Eliminate Procrastination</h4>
<p className="text-base text-slate-400 leading-relaxed font-light">
                            Dissolve the friction between intention and action using dopamine regulation frameworks.
                        </p>
</div>

<div className="group p-8 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-sky-500/30 transition-all duration-500">
<div className="w-12 h-12 rounded-full bg-sky-500/10 flex items-center justify-center mb-6 text-sky-400 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_15px_rgba(56,189,248,0.1)] group-hover:shadow-[0_0_20px_rgba(56,189,248,0.3)]">
<iconify-icon icon="lucide:activity" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-normal text-white mb-3">Deep Consistency</h4>
<p className="text-base text-slate-400 leading-relaxed font-light">
                            Build an identity-level discipline that operates on autopilot, regardless of motivation levels.
                        </p>
</div>

<div className="group p-8 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-sky-500/30 transition-all duration-500">
<div className="w-12 h-12 rounded-full bg-sky-500/10 flex items-center justify-center mb-6 text-sky-400 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_15px_rgba(56,189,248,0.1)] group-hover:shadow-[0_0_20px_rgba(56,189,248,0.3)]">
<iconify-icon icon="lucide:smile" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-normal text-white mb-3">Psychological Peace</h4>
<p className="text-base text-slate-400 leading-relaxed font-light">
                            Achieve your highest academic goals without burnout, anxiety, or guilt. Success with serenity.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#131316] border-t border-white/5 relative overflow-hidden" id="science">

<div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-sky-900/10 to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-300 text-xs font-normal mb-6">
<iconify-icon icon="lucide:flask-conical" strokeWidth="1.5" width="14"></iconify-icon>
                        The Methodology
                    </div>
<h2 className="text-3xl md:text-4xl font-normal text-white tracking-tight mb-6">
                        Why It Works: <br/>
<span className="text-sky-400">First Principles Thinking.</span>
</h2>
<p className="text-slate-400 font-light mb-8 leading-relaxed text-lg">
                        Traditional advice relies on willpower. We rely on system design and neuro-biology. By targeting the root causes of executive dysfunction, we create permanent change.
                    </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="mt-1">
<iconify-icon className="text-sky-400" icon="lucide:check-circle-2" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h5 className="text-white font-normal text-base">Neuro-Psychology Foundations</h5>
<p className="text-sm text-slate-500 mt-1 font-light">Understanding the limbic friction that causes procrastination.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1">
<iconify-icon className="text-sky-400" icon="lucide:check-circle-2" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h5 className="text-white font-normal text-base">Habit Engineering</h5>
<p className="text-sm text-slate-500 mt-1 font-light">Algorithmic approach to stacking behaviors for automaticity.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1">
<iconify-icon className="text-sky-400" icon="lucide:check-circle-2" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h5 className="text-white font-normal text-base">Identity-Level Shift</h5>
<p className="text-sm text-slate-500 mt-1 font-light">Moving from "trying to work" to "being a producer."</p>
</div>
</div>
</div>
</div>

<div className="relative h-[400px] w-full bg-gradient-to-br from-[#1c1c21] to-[#0a0a0c] rounded-2xl border border-white/10 overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48ZyBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzMzMiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTAgMzhoNDB2Mkgwdi0yek0wIDBoNDB2MkgwdjJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>

<div className="relative z-10 text-center">
<div className="w-24 h-24 mx-auto bg-[#131316] rounded-full border border-sky-500/30 flex items-center justify-center shadow-[0_0_40px_-10px_rgba(56,189,248,0.4)]">
<iconify-icon className="text-white" icon="lucide:cpu" strokeWidth="1.5" width="40"></iconify-icon>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-dashed border-white/10 rounded-full animate-[spin_10s_linear_infinite]"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] border border-white/5 rounded-full"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0a0a0c]">
<div className="max-w-4xl mx-auto px-6">
<div className="bg-[#131316] rounded-3xl border border-white/5 p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">
<div className="shrink-0">
<div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-slate-700 border-2 border-sky-500/20 flex items-center justify-center overflow-hidden grayscale contrast-125">
<iconify-icon className="text-slate-500" icon="lucide:user" strokeWidth="1.5" width="60"></iconify-icon>
</div>
</div>
<div className="flex-1 text-center md:text-left">
<h3 className="text-2xl font-normal text-white mb-2 tracking-tight">Meet Doji</h3>
<p className="text-sky-400 text-base font-normal mb-4">Medical Graduate • Aspiring Neuro-Psychiatrist</p>
<p className="text-slate-400 font-light leading-relaxed mb-6 text-lg">
                            "I built NeuroProductive because I saw brilliant students burning out. Combining my medical background with high-performance frameworks, I created a protocol that respects your biology while demanding excellence."
                        </p>
<div className="flex items-center justify-center md:justify-start gap-4">
<div className="flex items-center gap-2 text-sm text-slate-500 border border-white/10 px-3 py-1.5 rounded-md">
<iconify-icon icon="lucide:book-open" strokeWidth="1.5" width="16"></iconify-icon> Productivity Academic
                             </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0a0a0c] border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
<div>
<h3 className="text-2xl md:text-3xl font-normal text-white tracking-tight">Protocol Results</h3>
<p className="text-slate-500 mt-2 font-light text-xl">Real breakthroughs from the NeuroProductive community.</p>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-[#131316] p-6 rounded-xl border border-white/5">
<div className="flex gap-1 text-sky-400 mb-4">
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-slate-300 font-light text-base leading-relaxed mb-6">
                        "I was failing two classes and completely paralyzed by anxiety. The dopamine detox and scheduling protocols saved my semester. I finished with a 3.8 GPA."
                    </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs text-white">AS</div>
<div>
<p className="text-white text-sm font-normal">Alex S.</p>
<p className="text-slate-500 text-xs">Computer Science, Stanford</p>
</div>
</div>
</div>

<div className="bg-[#131316] p-6 rounded-xl border border-white/5">
<div className="flex gap-1 text-sky-400 mb-4">
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-slate-300 font-light text-base leading-relaxed mb-6">
                        "The concept of 'identity shifting' changed everything. I don't force myself to work anymore; it's just who I am. The peace of mind is priceless."
                    </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs text-white">JM</div>
<div>
<p className="text-white text-sm font-normal">Julia M.</p>
<p className="text-slate-500 text-xs">Pre-Med, Johns Hopkins</p>
</div>
</div>
</div>

<div className="bg-[#131316] p-6 rounded-xl border border-white/5">
<div className="flex gap-1 text-sky-400 mb-4">
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-slate-300 font-light text-base leading-relaxed mb-6">
                        "I used to procrastinate until the night before. Doji's systems helped me write my thesis weeks in advance while maintaining a social life."
                    </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs text-white">DK</div>
<div>
<p className="text-white text-sm font-normal">David K.</p>
<p className="text-slate-500 text-xs">Law Student, Yale</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#131316] relative" id="program">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16">
<h3 className="text-2xl md:text-3xl font-normal text-white tracking-tight">The Program</h3>
<p className="text-slate-500 mt-2 font-light text-xl">A comprehensive system for peak performance.</p>
</div>
<div className="space-y-4">

<div className="flex items-start gap-4 p-4 border-l border-white/10 hover:border-sky-400 transition-colors">
<div className="mt-1 text-sky-400">
<iconify-icon icon="lucide:layers" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<div>
<h4 className="text-white font-normal text-base">Weekly Modules &amp; Frameworks</h4>
<p className="text-slate-500 text-sm mt-1 font-light">Structured video lessons on neuro-productivity, discipline, and habit formation.</p>
</div>
</div>

<div className="flex items-start gap-4 p-4 border-l border-white/10 hover:border-sky-400 transition-colors">
<div className="mt-1 text-sky-400">
<iconify-icon icon="lucide:video" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<div>
<h4 className="text-white font-normal text-base">Live Coaching Calls</h4>
<p className="text-slate-500 text-sm mt-1 font-light">Direct access to Doji for Q&amp;A and personalized troubleshooting.</p>
</div>
</div>

<div className="flex items-start gap-4 p-4 border-l border-white/10 hover:border-sky-400 transition-colors">
<div className="mt-1 text-sky-400">
<iconify-icon icon="lucide:users" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<div>
<h4 className="text-white font-normal text-base">Accountability Systems</h4>
<p className="text-slate-500 text-sm mt-1 font-light">Community checks and partner systems to ensure follow-through.</p>
</div>
</div>

<div className="flex items-start gap-4 p-4 border-l border-white/10 hover:border-sky-400 transition-colors">
<div className="mt-1 text-sky-400">
<iconify-icon icon="lucide:infinity" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<div>
<h4 className="text-white font-normal text-base">Lifetime Access</h4>
<p className="text-slate-500 text-sm mt-1 font-light">Keep the materials, templates, and updates forever.</p>
</div>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center gap-2 text-white border-b border-white pb-0.5 hover:text-sky-400 hover:border-sky-400 transition-all text-base font-normal" href="#apply">
                        Apply to Work With Me <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-[#0a0a0c] border-t border-white/5" id="resources">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-12">
<h3 className="text-2xl font-normal text-white tracking-tight">Free Ecosystem</h3>
<a className="text-slate-500 text-base hover:text-white transition-colors" href="#">View all</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<a className="group block bg-[#131316] rounded-lg overflow-hidden border border-white/5 hover:border-sky-500/30 transition-all" href="#">
<div className="h-32 bg-slate-800 flex items-center justify-center group-hover:bg-slate-700 transition-colors">
<iconify-icon className="text-white/50 group-hover:text-white transition-colors" icon="lucide:play-circle" strokeWidth="1.5" width="36"></iconify-icon>
</div>
<div className="p-5">
<h5 className="text-white text-base font-normal mb-1">Procrastination Masterclass</h5>
<p className="text-slate-500 text-sm">Video Training</p>
</div>
</a>

<a className="group block bg-[#131316] rounded-lg overflow-hidden border border-white/5 hover:border-sky-500/30 transition-all" href="#">
<div className="h-32 bg-slate-800 flex items-center justify-center group-hover:bg-slate-700 transition-colors">
<iconify-icon className="text-white/50 group-hover:text-white transition-colors" icon="lucide:layout" strokeWidth="1.5" width="36"></iconify-icon>
</div>
<div className="p-5">
<h5 className="text-white text-base font-normal mb-1">Notion Templates</h5>
<p className="text-slate-500 text-sm">System Design</p>
</div>
</a>

<div className="group block bg-[#131316]/50 rounded-lg overflow-hidden border border-white/5 opacity-70">
<div className="h-32 bg-slate-800/50 flex items-center justify-center">
<iconify-icon className="text-white/20" icon="lucide:brain" strokeWidth="1.5" width="36"></iconify-icon>
</div>
<div className="p-5">
<h5 className="text-slate-400 text-base font-normal mb-1">Memory Palace</h5>
<p className="text-slate-600 text-sm">Coming Soon</p>
</div>
</div>

<a className="group block bg-[#131316] rounded-lg overflow-hidden border border-white/5 hover:border-sky-500/30 transition-all" href="#">
<div className="h-32 bg-slate-800 flex items-center justify-center group-hover:bg-slate-700 transition-colors">
<iconify-icon className="text-white/50 group-hover:text-white transition-colors" icon="lucide:clock" strokeWidth="1.5" width="36"></iconify-icon>
</div>
<div className="p-5">
<h5 className="text-white text-base font-normal mb-1">Time Management</h5>
<p className="text-slate-500 text-sm">Mini-Course</p>
</div>
</a>
</div>
</div>
</section>

<section className="py-32 bg-gradient-to-b from-[#0a0a0c] to-sky-950/20 relative border-t border-white/5" id="apply">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-500/10 via-transparent to-transparent"></div>
<div className="max-w-3xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-normal text-white tracking-tight mb-6">
                    Ready to transform your life?
                </h2>
<p className="text-xl text-slate-400 font-light mb-10 max-w-xl mx-auto">
                    Join the cohort of ambitious students mastering their psychology and performance with NeuroProductive.
                </p>
<button className="px-10 py-4 bg-white text-[#0a0a0c] rounded-lg font-normal hover:scale-105 hover:bg-slate-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                    Apply for the Program
                </button>
<p className="mt-6 text-sm text-slate-500 flex items-center justify-center gap-2">
<iconify-icon icon="lucide:shield-check" strokeWidth="1.5" width="16"></iconify-icon>
                    Limited spots available for high-quality coaching.
                </p>
</div>
</section>
</div>

<div className="hidden min-h-screen pt-32 pb-24 relative overflow-hidden bg-[#0a0a0c]" id="masterclass-page">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-sky-600/15 rounded-full blur-[120px] -z-10 opacity-70"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10">
<button className="text-slate-400 hover:text-white flex items-center gap-2 text-base font-normal mb-12 transition-colors" onclick="hideMasterclass(event)">
<iconify-icon icon="lucide:arrow-left" strokeWidth="1.5" width="18"></iconify-icon> Back to Home
            </button>
<div className="text-center mb-16">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-300 text-sm font-normal mb-6">
                    Exclusive Training
                </div>
<h1 className="text-4xl md:text-6xl font-normal text-white tracking-tight mb-6 drop-shadow-[0_0_25px_rgba(255,255,255,0.25)]">
                    How to Beat Procrastination <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-200 via-white to-sky-200">in 3 Days.</span>
</h1>
<p className="text-xl md:text-2xl text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
                    Discover the neuro-psychological framework to reset your dopamine baseline and unlock deep, consistent focus.
                </p>
</div>
<div className="aspect-video bg-[#131316] rounded-2xl border border-white/10 flex items-center justify-center relative overflow-hidden group cursor-pointer mb-16 shadow-[0_0_40px_rgba(56,189,248,0.1)]">
<div className="absolute inset-0 bg-gradient-to-tr from-sky-500/5 to-transparent"></div>

<div className="absolute inset-0 flex items-center justify-center opacity-30">
<svg className="w-full h-full" preserveaspectratio="none" viewbox="0 0 100 100">
<path className="animate-[pulse_4s_ease-in-out_infinite]" d="M0,50 Q25,30 50,50 T100,50" fill="none" stroke="#38bdf8" strokeWidth="0.5"></path>
<path className="animate-[pulse_4s_ease-in-out_infinite]" d="M0,50 Q25,70 50,50 T100,50" fill="none" stroke="#38bdf8" strokeWidth="0.5" style={{animationDelay: '1s'}}></path>
</svg>
</div>
<div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:bg-sky-500/20 group-hover:border-sky-500/40 transition-all duration-500 z-10 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
<iconify-icon className="text-white ml-1" icon="lucide:play" strokeWidth="1.5" width="32"></iconify-icon>
</div>
</div>
<div className="bg-gradient-to-b from-[#131316] to-[#0a0a0c] border border-white/5 rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 blur-[80px] rounded-full pointer-events-none"></div>
<h3 className="text-3xl font-normal text-white mb-6 tracking-tight relative z-10">Ready to implement the full protocol?</h3>
<p className="text-xl text-slate-400 font-light mb-10 max-w-xl mx-auto relative z-10">
                    The 3-day reset is just the beginning. Join the NeuroProductive program to permanently rewire your cognitive operating system and achieve unparalleled academic consistency.
                </p>
<button className="relative z-10 px-10 py-4 bg-white text-[#0a0a0c] rounded-lg font-normal hover:bg-slate-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)] flex items-center gap-2 mx-auto" onclick="hideMasterclass(event); document.getElementById('apply').scrollIntoView({behavior: 'smooth'})">
                    Apply for the Program
                    <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
</div>
</div>

<footer className="bg-[#0a0a0c] border-t border-white/5 py-12 relative z-20">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-gradient-to-br from-sky-400 to-blue-600 rounded flex items-center justify-center text-xs font-medium text-white tracking-tighter">NP</div>
<span className="text-slate-400 text-base font-normal tracking-tight">NeuroProductive</span>
</div>
<div className="flex gap-8 text-sm text-slate-500">
<a className="hover:text-white transition-colors" href="#">YouTube</a>
<a className="hover:text-white transition-colors" href="#">Twitter/X</a>
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
</div>
<p className="text-slate-600 text-sm">
                © 2023 NeuroProductive. All rights reserved.
            </p>
</div>
</footer>



    </>
  );
}
