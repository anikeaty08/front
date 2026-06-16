import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        function showProject(title, desc, colorClass) {
            document.getElementById('home-view').classList.add('hidden');
            document.getElementById('experience-section').classList.add('hidden');
            document.getElementById('project-view').classList.remove('hidden');
            
            document.getElementById('pj-title').innerText = title;
            document.getElementById('pj-desc').innerText = desc;
            
            const heroImg = document.getElementById('pj-hero-image');
            heroImg.className = `aspect-video rounded-3xl mb-16 relative overflow-hidden ${colorClass}`;
            
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function showHome() {
            document.getElementById('project-view').classList.add('hidden');
            document.getElementById('home-view').classList.remove('hidden');
            document.getElementById('experience-section').classList.remove('hidden');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-neutral-100 glass-nav bg-white/70">
<div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
<button className="text-lg font-semibold tracking-tighter hover:opacity-70 transition-opacity" onclick="showHome()">
                AR
            </button>
<div className="flex items-center gap-8 text-sm font-medium text-neutral-500">
<button className="hover:text-black transition-colors" onclick="showHome()">Work</button>
<a className="hover:text-black transition-colors" href="#about">About</a>
<a className="hover:text-black transition-colors" href="mailto:hello@example.com">Contact</a>
</div>
</div>
</nav>

<main className="max-w-5xl mx-auto px-6 pt-32 pb-24" id="content-area">

<div className="fade-in" id="home-view">

<header className="max-w-2xl mb-24">
<h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight mb-6">
                    Designing interfaces that feel like second nature.
                </h1>
<p className="text-lg text-neutral-500 font-light leading-relaxed">
                    I'm Alex, a UX Designer obsessed with clarity. Currently crafting digital experiences that bridge the gap between human intent and machine logic.
                </p>
<div className="mt-8 flex gap-4">
<button className="bg-neutral-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-neutral-800 transition-all flex items-center gap-2" onclick="document.getElementById('work').scrollIntoView({behavior: 'smooth'})">
                        View Projects
                        <iconify-icon icon="solar:arrow-right-linear" style={{fontSize: '1.1rem'}}></iconify-icon>
</button>
</div>
</header>

<section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32" id="work">

<div className="group cursor-pointer" onclick="showProject('Lumina Fintech', 'Simplifying global transactions for SMEs.', 'bg-gradient-to-br from-blue-50 to-indigo-100')">
<div className="aspect-[4/3] bg-neutral-100 rounded-2xl overflow-hidden mb-6 relative">
<div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 opacity-60"></div>
<div className="absolute inset-0 flex items-center justify-center p-12">
<div className="w-full h-full bg-white/40 border border-white/20 rounded-xl shadow-2xl backdrop-blur-sm transform group-hover:-translate-y-2 transition-transform duration-500 ease-out"></div>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl font-semibold tracking-tight mb-1">Lumina Fintech</h3>
<p className="text-sm text-neutral-500">Simplifying global transactions for SMEs.</p>
</div>
<span className="text-xs font-medium px-2 py-1 bg-neutral-100 rounded text-neutral-600 uppercase tracking-wider">Product Design</span>
</div>
</div>

<div className="group cursor-pointer" onclick="showProject('Habitat OS', 'A spatial operating system for smart homes.', 'bg-gradient-to-br from-orange-50 to-rose-100')">
<div className="aspect-[4/3] bg-neutral-100 rounded-2xl overflow-hidden mb-6 relative">
<div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-rose-100 opacity-60"></div>
<div className="absolute inset-0 flex items-center justify-center p-12">
<div className="w-full h-full bg-white/40 border border-white/20 rounded-xl shadow-2xl backdrop-blur-sm transform group-hover:-translate-y-2 transition-transform duration-500 ease-out"></div>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl font-semibold tracking-tight mb-1">Habitat OS</h3>
<p className="text-sm text-neutral-500">A spatial operating system for smart homes.</p>
</div>
<span className="text-xs font-medium px-2 py-1 bg-neutral-100 rounded text-neutral-600 uppercase tracking-wider">UX Architecture</span>
</div>
</div>

<div className="group cursor-pointer" onclick="showProject('Eco-Trace', 'Supply chain transparency for ethical brands.', 'bg-gradient-to-br from-emerald-50 to-teal-100')">
<div className="aspect-[4/3] bg-neutral-100 rounded-2xl overflow-hidden mb-6 relative">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-teal-100 opacity-60"></div>
<div className="absolute inset-0 flex items-center justify-center p-12">
<div className="w-full h-full bg-white/40 border border-white/20 rounded-xl shadow-2xl backdrop-blur-sm transform group-hover:-translate-y-2 transition-transform duration-500 ease-out"></div>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl font-semibold tracking-tight mb-1">Eco-Trace</h3>
<p className="text-sm text-neutral-500">Supply chain transparency for ethical brands.</p>
</div>
<span className="text-xs font-medium px-2 py-1 bg-neutral-100 rounded text-neutral-600 uppercase tracking-wider">System Design</span>
</div>
</div>

<div className="group cursor-pointer" onclick="showProject('Velocity', 'High-performance dashboard for data analysts.', 'bg-gradient-to-br from-purple-50 to-fuchsia-100')">
<div className="aspect-[4/3] bg-neutral-100 rounded-2xl overflow-hidden mb-6 relative">
<div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-fuchsia-100 opacity-60"></div>
<div className="absolute inset-0 flex items-center justify-center p-12">
<div className="w-full h-full bg-white/40 border border-white/20 rounded-xl shadow-2xl backdrop-blur-sm transform group-hover:-translate-y-2 transition-transform duration-500 ease-out"></div>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl font-semibold tracking-tight mb-1">Velocity</h3>
<p className="text-sm text-neutral-500">High-performance dashboard for data analysts.</p>
</div>
<span className="text-xs font-medium px-2 py-1 bg-neutral-100 rounded text-neutral-600 uppercase tracking-wider">UI Design</span>
</div>
</div>
</section>

<section className="mb-32" id="about">
<h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-12">Capabilities</h2>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
<div>
<iconify-icon className="text-neutral-900 mb-4" icon="solar:pen-new-square-linear" style={{fontSize: '1.5rem'}}></iconify-icon>
<h4 className="font-medium mb-2">Interface Design</h4>
<p className="text-sm text-neutral-500 leading-relaxed">Focusing on high-fidelity visual design, component systems, and responsive layouts.</p>
</div>
<div>
<iconify-icon className="text-neutral-900 mb-4" icon="solar:filters-linear" style={{fontSize: '1.5rem'}}></iconify-icon>
<h4 className="font-medium mb-2">User Research</h4>
<p className="text-sm text-neutral-500 leading-relaxed">Deriving insights through qualitative testing, interviews, and behavioral analysis.</p>
</div>
<div>
<iconify-icon className="text-neutral-900 mb-4" icon="solar:layers-linear" style={{fontSize: '1.5rem'}}></iconify-icon>
<h4 className="font-medium mb-2">Prototyping</h4>
<p className="text-sm text-neutral-500 leading-relaxed">Creating functional motion and interactive prototypes to validate workflows.</p>
</div>
</div>
</section>
</div>

<div className="hidden fade-in" id="project-view">
<button className="flex items-center gap-2 text-sm text-neutral-500 hover:text-black transition-colors mb-12 group" onclick="showHome()">
<iconify-icon className="group-hover:-translate-x-1 transition-transform" icon="solar:arrow-left-linear"></iconify-icon>
                Back to works
            </button>
<header className="mb-16">
<h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-6" id="pj-title">Project Title</h2>
<p className="text-lg text-neutral-500 font-light max-w-2xl leading-relaxed" id="pj-desc">Detailed project overview goes here. This explains the core challenge and the outcome of the design process.</p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 border-t border-neutral-100 pt-8">
<div>
<p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-1">Role</p>
<p className="text-sm">Lead UX Designer</p>
</div>
<div>
<p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-1">Timeline</p>
<p className="text-sm">4 Months, 2023</p>
</div>
<div>
<p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-1">Deliverables</p>
<p className="text-sm">App, Design System</p>
</div>
<div>
<p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-1">Platform</p>
<p className="text-sm">iOS, Web</p>
</div>
</div>
</header>
<div className="aspect-video rounded-3xl mb-16 relative overflow-hidden" id="pj-hero-image">

<div className="absolute inset-0 flex items-center justify-center p-12 sm:p-24">
<div className="w-full h-full bg-white/40 border border-white/20 rounded-2xl shadow-2xl backdrop-blur-md"></div>
</div>
</div>
<section className="max-w-2xl mx-auto space-y-12 mb-24">
<div>
<h3 className="text-xl font-semibold tracking-tight mb-4">The Challenge</h3>
<p className="text-neutral-500 font-light leading-relaxed">
                        Users were struggling with fragmented workflows and high cognitive load when managing complex datasets. The goal was to consolidate information without sacrificing depth or utility.
                    </p>
</div>
<div>
<h3 className="text-xl font-semibold tracking-tight mb-4">The Solution</h3>
<p className="text-neutral-500 font-light leading-relaxed">
                        We implemented a hierarchical navigation system and a "progressive disclosure" UI pattern. By hiding secondary information until needed, we reduced visual noise by 40% while maintaining accessibility to expert tools.
                    </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8">
<div className="aspect-square bg-neutral-50 rounded-2xl flex items-center justify-center p-8">
<div className="w-full h-2 bg-neutral-200 rounded-full relative overflow-hidden">
<div className="absolute inset-0 bg-neutral-900 w-3/4"></div>
</div>
</div>
<div className="aspect-square bg-neutral-50 rounded-2xl flex items-center justify-center p-8">
<div className="space-y-2 w-full">
<div className="h-4 bg-neutral-200 rounded w-full"></div>
<div className="h-4 bg-neutral-200 rounded w-5/6"></div>
<div className="h-4 bg-neutral-200 rounded w-4/6"></div>
</div>
</div>
</div>
</section>
</div>

<section className="border-t border-neutral-100 pt-16" id="experience-section">
<div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
<div className="md:w-1/3">
<h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-400">Experience</h2>
</div>
<div className="md:w-2/3 space-y-8">
<div className="flex justify-between items-baseline">
<div>
<p className="text-sm font-medium">Senior UX Designer — CloudScale</p>
<p className="text-sm text-neutral-400">Led the core dashboard redesign.</p>
</div>
<span className="text-xs text-neutral-400">2021—Present</span>
</div>
<div className="flex justify-between items-baseline">
<div>
<p className="text-sm font-medium">Product Designer — Studio Minimal</p>
<p className="text-sm text-neutral-400">Crafting brand identities and web apps.</p>
</div>
<span className="text-xs text-neutral-400">2019—2021</span>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-neutral-100 py-16">
<div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
<div className="text-sm text-neutral-400 font-light">
                © 2024 Alex Rossi. Built with focus.
            </div>
<div className="flex gap-8 text-sm font-medium">
<a className="text-neutral-400 hover:text-black transition-colors" href="#">Twitter / X</a>
<a className="text-neutral-400 hover:text-black transition-colors" href="#">LinkedIn</a>
<a className="text-neutral-400 hover:text-black transition-colors" href="#">Dribbble</a>
</div>
</div>
</footer>


    </>
  );
}
