import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener("DOMContentLoaded", () => {
            const avatar = document.getElementById('wireframe-man');
            const svgGroup = document.getElementById('body-group');
            
            // Articulated limbs
            const lArm = document.getElementById('l-arm');
            const rArm = document.getElementById('r-arm');
            const lLeg = document.getElementById('l-leg');
            const rLeg = document.getElementById('r-leg');
            
            // Intersection Observer for Fade-in elements
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll('.fade-in-section').forEach(el => observer.observe(el));

            // Clean, Head-to-Toe Highlight and Smooth Transform Scroll Logic
            window.addEventListener('scroll', () => {
                const scrollY = window.scrollY;
                const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
                const scrollFraction = Math.min(1, Math.max(0, scrollY / maxScroll));

                // 1. Smooth, continuous 3D transform and slight scale-up zoom
                const translateX = 12 - (scrollFraction * 20); 
                const rotateY = -15 + (scrollFraction * 30);
                const scale = 1 + (scrollFraction * 0.25); // Scales up 25% by the end
                
                avatar.style.transform = `translateX(${translateX}vw) rotateY(${rotateY}deg) scale(${scale})`;

                // 2. Vitruvian Ascension: limbs elegantly expand outward during scroll
                const armRotation = scrollFraction * 80; // Arms raise up to 80 degrees
                const legRotation = scrollFraction * 25; // Legs widen up to 25 degrees
                
                lArm.style.transform = `rotate(${armRotation}deg)`;
                rArm.style.transform = `rotate(-${armRotation}deg)`;
                lLeg.style.transform = `rotate(${legRotation}deg)`;
                rLeg.style.transform = `rotate(-${legRotation}deg)`;

                // 3. Linear Head-to-Toe Scanning
                svgGroup.classList.remove('highlight-brain', 'highlight-core', 'highlight-limbs');
                
                if (scrollFraction < 0.33) {
                    svgGroup.classList.add('highlight-brain');
                } else if (scrollFraction >= 0.33 && scrollFraction < 0.66) {
                    svgGroup.classList.add('highlight-core');
                } else {
                    svgGroup.classList.add('highlight-limbs');
                }
            });

            // Initialize position on load
            window.dispatchEvent(new Event('scroll'));
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900/90 to-black"></div>
<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px)', backgroundSize: '30px 30px', maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'}}></div>
</div>

<div id="avatar-stage">
<svg className="overflow-visible" id="wireframe-man" viewbox="0 0 200 450">
<g id="body-wrapper">
<g id="body-group">

<path className="wireframe-path path-head" d="M100,20 C85,20 75,30 75,45 C75,60 85,70 100,70 C115,70 125,60 125,45 C125,30 115,20 100,20"></path>

<line className="wireframe-path path-torso" stroke-dasharray="3 3" x1="100" x2="100" y1="70" y2="190"></line>
<path className="wireframe-path path-torso" d="M65,85 Q100,95 135,85"></path> 
<path className="wireframe-path path-torso" d="M75,190 Q100,210 125,190 L120,210 L80,210 Z"></path> 

<g className="limb-group" id="l-arm" style={{transformOrigin: '65px 85px'}}>
<line className="wireframe-path path-limbs" x1="65" x2="50" y1="85" y2="150"></line>
</g>
<g className="limb-group" id="r-arm" style={{transformOrigin: '135px 85px'}}>
<line className="wireframe-path path-limbs" x1="135" x2="150" y1="85" y2="150"></line>
</g>
<g className="limb-group" id="l-leg" style={{transformOrigin: '80px 210px'}}>
<line className="wireframe-path path-limbs" x1="80" x2="75" y1="210" y2="300"></line>
<line className="wireframe-path path-limbs" x1="75" x2="70" y1="300" y2="390"></line>
</g>
<g className="limb-group" id="r-leg" style={{transformOrigin: '120px 210px'}}>
<line className="wireframe-path path-limbs" x1="120" x2="125" y1="210" y2="300"></line>
<line className="wireframe-path path-limbs" x1="125" x2="130" y1="300" y2="390"></line>
</g>
</g>
</g>
</svg>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/60 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<a className="flex items-center gap-2 cursor-pointer" href="#landing">
<div className="w-4 h-4 rounded-full border border-white/30 flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
</div>
<span className="text-sm font-medium tracking-widest text-white uppercase">Aether</span>
</a>
<div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-wide">
<a className="text-zinc-400 hover:text-white transition-colors" href="#protocols">Protocols</a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#intake">Analysis</a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#dashboard">Client Portal</a>
</div>
<a className="text-xs font-medium bg-white text-black px-4 py-1.5 rounded-full hover:bg-zinc-200 transition-all" href="#intake">
                Initialize
            </a>
</div>
</nav>

<main className="relative z-10 w-full flex-grow">

<section className="min-h-screen flex items-center relative border-b border-white/5" id="landing">
<div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2">
<div className="pt-12 fade-in-section is-visible">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)]"></span>
<span className="text-[10px] uppercase tracking-widest font-medium text-emerald-200">System Online v4.2</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-white leading-[1.05] mb-6">
                        Biological <br/>
<span className="text-zinc-500">Architecture.</span>
</h1>
<p className="text-lg text-zinc-400 font-light leading-relaxed mb-10 max-w-md">
                        The definitive platform for physiological enhancement. We engineer custom protocols using clinical-grade diagnostics and biometrics.
                    </p>
<div className="flex items-center gap-4">
<a className="group relative px-6 py-3 bg-white text-black text-sm font-semibold rounded-lg hover:bg-zinc-200 transition-all overflow-hidden" href="#protocols">
<span className="relative z-10">Start Protocol</span>
</a>
<a className="px-6 py-3 border border-white/10 text-zinc-300 text-sm font-medium rounded-lg hover:bg-white/5 transition-all flex items-center gap-2" href="#dashboard">
                            Member Login <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="min-h-screen py-24 relative border-b border-white/5 flex items-center" id="protocols">
<div className="max-w-7xl mx-auto px-6 w-full fade-in-section">
<div className="text-left mb-16 max-w-lg">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-4">Select Optimization Tier</h2>
<p className="text-zinc-500">Choose the level of biological intervention required. Our algorithms adapt to your physiology.</p>
</div>
<div className="grid md:grid-cols-3 gap-6 relative w-full md:w-3/4">

<div className="glass-panel p-8 rounded-xl flex flex-col h-full glass-panel-hover transition-all">
<div className="mb-6">
<div className="text-xs font-mono text-emerald-500 mb-2">TIER I</div>
<h3 className="text-2xl font-medium text-white mb-2">Foundational</h3>
<div className="text-3xl font-semibold text-white tracking-tight">$249<span className="text-sm text-zinc-500 font-normal">/mo</span></div>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex gap-3 text-sm text-zinc-300"><iconify-icon className="text-emerald-500 mt-0.5" icon="lucide:check"></iconify-icon> Macro-Cycling</li>
<li className="flex gap-3 text-sm text-zinc-300"><iconify-icon className="text-emerald-500 mt-0.5" icon="lucide:check"></iconify-icon> Supp Stack Design</li>
</ul>
<a className="w-full py-3 border border-white/20 rounded-lg text-sm font-medium text-center text-white hover:bg-white hover:text-black transition-all" href="#intake">Select</a>
</div>

<div className="glass-panel p-8 rounded-xl flex flex-col h-full glass-panel-hover transition-all border-emerald-500/20">
<div className="mb-6">
<div className="text-xs font-mono text-purple-400 mb-2">TIER II</div>
<h3 className="text-2xl font-medium text-white mb-2">Performance</h3>
<div className="text-3xl font-semibold text-white tracking-tight">$499<span className="text-sm text-zinc-500 font-normal">/mo</span></div>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex gap-3 text-sm text-zinc-300"><iconify-icon className="text-purple-400 mt-0.5" icon="lucide:check"></iconify-icon> Peptide Protocol</li>
<li className="flex gap-3 text-sm text-zinc-300"><iconify-icon className="text-purple-400 mt-0.5" icon="lucide:check"></iconify-icon> Hypertrophy Design</li>
</ul>
<a className="w-full py-3 bg-white text-black rounded-lg text-sm font-medium text-center hover:bg-zinc-200 transition-all" href="#intake">Select</a>
</div>

<div className="glass-panel p-8 rounded-xl flex flex-col h-full glass-panel-hover transition-all opacity-80">
<div className="mb-6">
<div className="text-xs font-mono text-emerald-500 mb-2">TIER III</div>
<h3 className="text-2xl font-medium text-white mb-2">Elite</h3>
<div className="text-3xl font-semibold text-white tracking-tight">$1,200<span className="text-sm text-zinc-500 font-normal">/mo</span></div>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex gap-3 text-sm text-zinc-300"><iconify-icon className="text-emerald-500 mt-0.5" icon="lucide:check"></iconify-icon> Concierge Medical</li>
<li className="flex gap-3 text-sm text-zinc-300"><iconify-icon className="text-emerald-500 mt-0.5" icon="lucide:check"></iconify-icon> Hormone Optimization</li>
</ul>
<a className="w-full py-3 border border-white/20 rounded-lg text-sm font-medium text-center text-white hover:bg-white hover:text-black transition-all" href="#intake">Select</a>
</div>
</div>
</div>
</section>

<section className="min-h-screen py-24 relative border-b border-white/5 flex items-center justify-end" id="intake">
<div className="max-w-2xl w-full px-6 mx-auto md:mr-[10%] fade-in-section">
<div className="mb-10 text-right">
<h2 className="text-2xl font-semibold text-white mb-2">Bio-Assessment Initialization</h2>
<p className="text-sm text-zinc-400">Complete the intake form to determine eligibility.</p>
</div>
<form className="glass-panel p-8 rounded-xl space-y-6">
<div className="grid grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Age</label>
<input className="w-full p-3 rounded-lg input-field text-sm" placeholder="e.g., 34" type="number"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Gender</label>
<select className="w-full p-3 rounded-lg input-field text-sm appearance-none cursor-pointer">
<option className="bg-black">Male</option>
<option className="bg-black">Female</option>
</select>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Primary Objectives</label>
<div className="grid grid-cols-2 gap-3">
<label className="flex items-center gap-3 p-3 border border-white/10 rounded-lg cursor-pointer hover:bg-white/5 transition-all">
<input className="accent-emerald-500" type="checkbox"/>
<span className="text-sm text-zinc-300">Lean Tissue</span>
</label>
<label className="flex items-center gap-3 p-3 border border-white/10 rounded-lg cursor-pointer hover:bg-white/5 transition-all">
<input className="accent-emerald-500" type="checkbox"/>
<span className="text-sm text-zinc-300">Cognition</span>
</label>
<label className="flex items-center gap-3 p-3 border border-white/10 rounded-lg cursor-pointer hover:bg-white/5 transition-all">
<input className="accent-emerald-500" type="checkbox"/>
<span className="text-sm text-zinc-300">Longevity</span>
</label>
<label className="flex items-center gap-3 p-3 border border-white/10 rounded-lg cursor-pointer hover:bg-white/5 transition-all">
<input className="accent-emerald-500" type="checkbox"/>
<span className="text-sm text-zinc-300">Fat Loss</span>
</label>
<label className="flex items-center gap-3 p-3 border border-white/10 rounded-lg cursor-pointer hover:bg-white/5 transition-all">
<input className="accent-emerald-500" type="checkbox"/>
<span className="text-sm text-zinc-300">Sleep Quality</span>
</label>
<label className="flex items-center gap-3 p-3 border border-white/10 rounded-lg cursor-pointer hover:bg-white/5 transition-all">
<input className="accent-emerald-500" type="checkbox"/>
<span className="text-sm text-zinc-300">Stress Response</span>
</label>
</div>
</div>
<div className="pt-4">
<button className="w-full py-4 bg-white text-black font-semibold rounded-lg hover:bg-zinc-200 transition-all flex justify-center items-center gap-2" onclick="document.getElementById('dashboard').scrollIntoView()" type="button">
<iconify-icon icon="lucide:lock" width="16"></iconify-icon> Secure Submission
                        </button>
</div>
</form>
</div>
</section>

<section className="min-h-screen py-24 relative flex items-center" id="dashboard">
<div className="max-w-7xl mx-auto px-6 w-full fade-in-section">
<div className="mb-10">
<h2 className="text-2xl font-semibold text-white mb-2">Active Protocol Dashboard</h2>
<p className="text-sm text-zinc-400">Real-time monitoring of your biological markers.</p>
</div>
<div className="glass-panel rounded-xl overflow-hidden border border-white/10 min-h-[600px] flex flex-col md:flex-row">

<aside className="w-full md:w-64 border-r border-white/5 bg-black/40 p-6 flex-shrink-0">
<div className="flex items-center gap-3 mb-8">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-white font-medium border border-white/10">JD</div>
<div>
<div className="text-sm font-medium text-white">John Doe</div>
<div className="text-[10px] text-emerald-500 uppercase tracking-wide">Tier II Active</div>
</div>
</div>
<nav className="space-y-1">
<div className="w-full text-left px-4 py-2 text-sm text-white bg-white/5 rounded-md border border-white/5 cursor-pointer">Overview</div>
<div className="w-full text-left px-4 py-2 text-sm text-zinc-400 hover:text-white cursor-pointer">My Protocols</div>
<div className="w-full text-left px-4 py-2 text-sm text-zinc-400 hover:text-white cursor-pointer">Lab Analysis</div>
</nav>
<div className="mt-8 pt-8 border-t border-white/5">
<div className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-4">Integrations</div>
<div className="flex items-center justify-between mb-3 text-sm text-zinc-300">
<div className="flex items-center gap-2"><iconify-icon icon="lucide:activity"></iconify-icon> Oura</div>
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
</div>
</div>
</aside>

<div className="flex-1 p-8 bg-black/20">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
<div className="glass-panel p-5 rounded-xl border-white/5 bg-white/5">
<div className="text-xs text-zinc-500 mb-1">Next Dose</div>
<div className="text-lg font-medium text-white mb-2">BPC-157 / 250mcg</div>
<div className="text-xs text-emerald-400 bg-emerald-400/10 inline-block px-2 py-1 rounded">20:00 PM</div>
</div>
<div className="glass-panel p-5 rounded-xl border-white/5 bg-white/5">
<div className="text-xs text-zinc-500 mb-1">Weekly Load</div>
<div className="text-lg font-medium text-white mb-2">42,500 lbs</div>
<div className="text-xs text-emerald-400"><iconify-icon icon="lucide:trending-up"></iconify-icon> +5%</div>
</div>
<div className="glass-panel p-5 rounded-xl border-white/5 bg-white/5">
<div className="text-xs text-zinc-500 mb-1">Testosterone</div>
<div className="text-lg font-medium text-white mb-2">842 ng/dL</div>
<div className="w-full h-1 bg-zinc-700 rounded-full mt-2">
<div className="h-full bg-emerald-500 w-[80%] rounded-full"></div>
</div>
</div>
<div className="glass-panel p-5 rounded-xl border-white/5 bg-white/5">
<div className="text-xs text-zinc-500 mb-1">Sleep Score</div>
<div className="text-lg font-medium text-white mb-2">88 / 100</div>
<div className="text-xs text-emerald-400"><iconify-icon icon="lucide:moon"></iconify-icon> Optimal</div>
</div>
<div className="glass-panel p-5 rounded-xl border-white/5 bg-white/5">
<div className="text-xs text-zinc-500 mb-1">HRV (avg)</div>
<div className="text-lg font-medium text-white mb-2">142 ms</div>
<div className="text-xs text-zinc-400">Baseline: 135 ms</div>
</div>
<div className="glass-panel p-5 rounded-xl border-white/5 bg-white/5">
<div className="text-xs text-zinc-500 mb-1">VO2 Max</div>
<div className="text-lg font-medium text-white mb-2">54 mL/kg</div>
<div className="text-xs text-emerald-400"><iconify-icon icon="lucide:wind"></iconify-icon> Top 5%</div>
</div>
</div>
<div className="glass-panel p-6 rounded-xl border-white/5">
<h3 className="text-lg font-medium text-white mb-4">Hypertrophy Block A - Push</h3>
<div className="space-y-4">
<div className="flex justify-between items-center border-b border-white/5 pb-4">
<div>
<div className="text-sm font-medium text-white">Incline Dumbbell Press</div>
<div className="text-xs text-zinc-500">Target: Upper Chest</div>
</div>
<div className="text-right">
<div className="text-sm font-mono text-emerald-400">3 Sets</div>
<div className="text-xs text-zinc-400">8-10 Reps</div>
</div>
</div>
<div className="flex justify-between items-center border-b border-white/5 pb-4">
<div>
<div className="text-sm font-medium text-white">Lateral Raises</div>
<div className="text-xs text-zinc-500">Target: Medial Delt</div>
</div>
<div className="text-right">
<div className="text-sm font-mono text-emerald-400">4 Sets</div>
<div className="text-xs text-zinc-400">12-15 Reps</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-black py-8 relative z-10">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-[10px] text-zinc-600 uppercase tracking-widest">
                Aether Systems © 2024
            </div>
<div className="flex items-center gap-2 text-xs text-zinc-600">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
<span>Stripe Connected</span>
<span className="mx-2">|</span>
<span className="w-2 h-2 rounded-full bg-blue-500"></span>
<span>HIPAA Secure</span>
</div>
</div>
</footer>


    </>
  );
}
