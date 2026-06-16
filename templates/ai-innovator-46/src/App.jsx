import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



document.addEventListener("DOMContentLoaded", () => {
// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
e.preventDefault();
const target = document.querySelector(this.getAttribute('href'));
if (target) {
target.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
});
});
// Animation on scroll
const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.style.animationPlayState = 'running';
observer.unobserve(entry.target);
}
});
}, { threshold: 0.1 });
document.querySelectorAll('.animate-on-scroll').forEach((el) => {
el.style.animationPlayState = 'paused';
observer.observe(el);
});
});

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="grid-overlay">
<div className="grid-inner">
<div className="grid-line-v"></div>
<div className="grid-line-v hidden md:block"></div>
<div className="grid-line-v hidden lg:block"></div>
<div className="grid-line-v"></div>
</div>
</div>

<div className="fixed inset-0 pointer-events-none z-0">
<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
</div>

<nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4" style={{animation: 'animationIn 0.8s ease-out 0.1s both'}}>
<div className="border-subtle flex bg-black/90 w-full max-w-5xl border p-2 shadow-2xl backdrop-blur-xl items-center justify-between">
<a className="bg-white/5 hover:bg-white/10 px-5 py-2 text-xs tracking-widest uppercase transition-all text-neutral-300 font-geist" href="#hero">
                Hiba AlJabr
            </a>
<div className="hidden md:flex items-center gap-1">
<a className="hover:text-white px-4 py-2 text-xs tracking-widest uppercase transition-colors text-neutral-500 font-geist" href="#about">
                    About
                </a>
<a className="hover:text-white px-4 py-2 text-xs tracking-widest uppercase transition-colors text-neutral-500 font-geist" href="#innovations">
                    Innovations
                </a>
<a className="hover:text-white px-4 py-2 text-xs tracking-widest uppercase transition-colors text-neutral-500 font-geist" href="#impact">
                    Impact
                </a>
<a className="hover:text-white px-4 py-2 text-xs tracking-widest uppercase transition-colors text-neutral-500 font-geist" href="#partnerships">
                    Partnerships
                </a>
</div>
<a className="group relative bg-brand-gradient hover:opacity-90 transition-all text-white px-6 py-2 text-xs font-semibold tracking-widest uppercase overflow-hidden rounded-sm hover:scale-105 hover:shadow-[0_0_20px_rgba(124,58,237,0.5)]" href="#contact">
<span className="relative z-10 font-geist">Contact</span>
</a>
</div>
</nav>

<section className="relative pt-40 pb-20 md:pt-52 md:pb-32 overflow-hidden z-10 min-h-screen flex items-center" id="hero">
<div className="container mx-auto px-4 relative max-w-7xl">
<div className="flex flex-col text-center items-center justify-center">

<div className="group relative mb-8" style={{animation: 'animationIn 0.8s ease-out 0.2s both'}}>
<div className="beam-border"></div>
<div className="border-subtle flex group-hover:bg-[#0f0716] group-hover:border-purple-500/30 transition-all h-12 md:h-14 bg-[#080808] z-10 border rounded-full px-6 relative gap-x-4 items-center">
<div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse shadow-[0_0_12px_rgba(168,85,247,0.8)]"></div>
<span className="text-xs md:text-sm text-neutral-300 font-geist uppercase tracking-widest">
                            AI Innovator &amp; Digital Product Builder
                        </span>
</div>
</div>

<h1 className="uppercase leading-[0.9] text-5xl md:text-7xl lg:text-8xl font-semibold text-white tracking-tighter font-space-grotesk mb-8" style={{animation: 'animationIn 0.8s ease-out 0.3s both'}}>
<span className="block font-light">AI Innovator &amp;</span>
<span className="text-gradient text-glow font-light">Digital Product Builder</span>
</h1>

<p className="text-lg md:text-2xl text-neutral-300 font-space-grotesk tracking-tight max-w-3xl mb-6" style={{animation: 'animationIn 0.8s ease-out 0.4s both'}}>
                    I build award-winning AI digital products that solve real-world problems and scale across industries.
                </p>

<p className="text-sm md:text-base text-neutral-500 font-geist max-w-2xl mb-12" style={{animation: 'animationIn 0.8s ease-out 0.5s both'}}>
                    From idea to execution, I focus on clarity, usability, and measurable impact.
                </p>

<div className="flex flex-col sm:flex-row gap-4" style={{animation: 'animationIn 0.8s ease-out 0.6s both'}}>
<a className="group bg-brand-gradient text-white px-8 py-4 text-sm font-semibold tracking-widest uppercase hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all duration-300 rounded-sm font-geist flex items-center gap-3" href="#innovations">
                        View Flagship Product
                        <iconify-icon height="18" icon="lucide:arrow-right" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
<a className="border border-white/10 bg-white/5 hover:bg-white/10 hover:border-purple-500/30 text-white px-8 py-4 text-sm font-semibold tracking-widest uppercase transition-all duration-300 rounded-sm font-geist hover-glow" href="#partnerships">
                        Partner With Me
                    </a>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block" style={{animation: 'animationIn 0.8s ease-out 1s both'}}>
<div className="flex flex-col items-center gap-2 text-neutral-600">
<span className="text-[10px] uppercase tracking-widest font-geist">Scroll</span>
<div className="w-px h-12 bg-gradient-to-b from-neutral-600 to-transparent"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative z-10 border-t border-subtle" id="about">
<div className="container mx-auto px-4 max-w-6xl">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="animate-on-scroll" style={{animation: 'animationIn 0.8s ease-out both'}}>
<div className="flex items-center gap-3 mb-6">
<div className="w-12 h-px bg-gradient-to-r from-purple-500 to-transparent"></div>
<span className="text-[10px] uppercase tracking-widest text-purple-400 font-geist">About</span>
</div>
<h2 className="text-4xl md:text-5xl uppercase text-white tracking-tighter font-space-grotesk font-light mb-8">
                        Founder-Led AI
                        <span className="text-neutral-600 block">Product Development</span>
</h2>
<div className="space-y-6 text-neutral-400 font-geist leading-relaxed">
<p>
                            I'm <span className="text-white font-medium">Hiba AlJabr</span> — an AI innovator and digital product builder focused on creating applied AI products with real users and real outcomes.
                        </p>
<p>
                            My work centers on execution. I translate complex challenges into clear, usable digital platforms powered by AI. Every product is designed with scalability, adoption, and long-term value in mind.
                        </p>
<p>
                            I focus on building production-ready solutions that can grow into platforms, partnerships, or standalone ventures.
                        </p>
</div>
</div>

<div className="animate-on-scroll" style={{animation: 'animationIn 0.8s ease-out 0.2s both'}}>
<div className="relative">

<div className="grid grid-cols-2 gap-4">
<div className="bg-[#050505] border border-subtle p-6 hover-glow transition-all duration-300">
<iconify-icon className="text-2xl text-purple-400 mb-4" height="28" icon="lucide:brain" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
<div className="text-3xl text-white font-space-grotesk font-light tracking-tight mb-2">AI-First</div>
<div className="text-xs uppercase tracking-widest text-neutral-500 font-geist">Product Approach</div>
</div>
<div className="bg-[#050505] border border-subtle p-6 hover-glow transition-all duration-300">
<iconify-icon className="text-2xl text-blue-400 mb-4" height="28" icon="lucide:rocket" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
<div className="text-3xl text-white font-space-grotesk font-light tracking-tight mb-2">Scale</div>
<div className="text-xs uppercase tracking-widest text-neutral-500 font-geist">Ready Solutions</div>
</div>
<div className="bg-[#050505] border border-subtle p-6 hover-glow transition-all duration-300">
<iconify-icon className="text-2xl text-green-400 mb-4" height="28" icon="lucide:users" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
<div className="text-3xl text-white font-space-grotesk font-light tracking-tight mb-2">Real</div>
<div className="text-xs uppercase tracking-widest text-neutral-500 font-geist">Users &amp; Outcomes</div>
</div>
<div className="bg-[#050505] border border-subtle p-6 hover-glow transition-all duration-300">
<iconify-icon className="text-2xl text-amber-400 mb-4" height="28" icon="lucide:trophy" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
<div className="text-3xl text-white font-space-grotesk font-light tracking-tight mb-2">Award</div>
<div className="text-xs uppercase tracking-widest text-neutral-500 font-geist">Winning Products</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative z-10 border-t border-subtle bg-black" id="innovations">
<div className="container mx-auto px-4 max-w-6xl">

<div className="text-center mb-16 animate-on-scroll" style={{animation: 'animationIn 0.8s ease-out both'}}>
<div className="flex items-center justify-center gap-3 mb-6">
<div className="w-12 h-px bg-gradient-to-r from-transparent to-purple-500"></div>
<span className="text-[10px] uppercase tracking-widest text-purple-400 font-geist">Innovations</span>
<div className="w-12 h-px bg-gradient-to-l from-transparent to-purple-500"></div>
</div>
<h2 className="text-4xl md:text-6xl uppercase text-white tracking-tighter font-space-grotesk font-light">
                    Flagship AI <span className="text-neutral-600">Product</span>
</h2>
</div>

<div className="animate-on-scroll" style={{animation: 'animationIn 0.8s ease-out 0.2s both'}}>
<div className="glassmorphic p-8 md:p-12 relative overflow-hidden hover-glow transition-all duration-500 float-animation">

<div className="absolute top-6 right-6 md:top-8 md:right-8">
<div className="bg-gradient-to-r from-amber-500/20 to-amber-600/20 border border-amber-500/30 px-4 py-2 rounded-full flex items-center gap-2">
<span className="text-lg">🏆</span>
<span className="text-xs text-amber-300 font-geist uppercase tracking-wider">Winner 2025</span>
</div>
</div>

<div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(124,58,237,0.3)]">
<iconify-icon className="text-white" height="32" icon="lucide:graduation-cap" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
</div>

<h3 className="text-3xl md:text-4xl text-white font-space-grotesk tracking-tight mb-2">
                        EduMentors AI
                    </h3>
<p className="text-purple-400 font-geist text-sm uppercase tracking-widest mb-8">
                        Award-Winning AI Platform for Education
                    </p>

<p className="text-neutral-300 font-geist leading-relaxed text-lg max-w-3xl mb-8">
                        EduMentors AI is an intelligent digital platform that supports teachers and schools by generating high-quality learning resources efficiently. It delivers lesson plans, assessments, differentiated materials, and SEN-aware content in both Arabic and English.
                    </p>

<div className="flex items-center gap-4 p-4 bg-amber-500/5 border border-amber-500/20 rounded-lg">
<iconify-icon className="text-amber-400" height="24" icon="lucide:award" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<span className="text-amber-300 font-geist">
                            Winner – Innovation Award (2025), Middle East Summit
                        </span>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-white/5">
<div className="text-center">
<iconify-icon className="text-neutral-500 mb-2" height="20" icon="lucide:file-text" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<div className="text-xs text-neutral-400 font-geist">Lesson Plans</div>
</div>
<div className="text-center">
<iconify-icon className="text-neutral-500 mb-2" height="20" icon="lucide:clipboard-check" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<div className="text-xs text-neutral-400 font-geist">Assessments</div>
</div>
<div className="text-center">
<iconify-icon className="text-neutral-500 mb-2" height="20" icon="lucide:languages" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<div className="text-xs text-neutral-400 font-geist">Arabic &amp; English</div>
</div>
<div className="text-center">
<iconify-icon className="text-neutral-500 mb-2" height="20" icon="lucide:heart" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<div className="text-xs text-neutral-400 font-geist">SEN-Aware</div>
</div>
</div>
</div>
</div>

<div className="text-center mt-12 animate-on-scroll" style={{animation: 'animationIn 0.8s ease-out 0.4s both'}}>
<p className="text-neutral-500 font-geist italic">
                    And this is only the beginning — more AI products are currently in development.
                </p>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative z-10 border-t border-subtle" id="impact">
<div className="container mx-auto px-4 max-w-6xl">

<div className="text-center mb-16 animate-on-scroll" style={{animation: 'animationIn 0.8s ease-out both'}}>
<div className="flex items-center justify-center gap-3 mb-6">
<div className="w-12 h-px bg-gradient-to-r from-transparent to-purple-500"></div>
<span className="text-[10px] uppercase tracking-widest text-purple-400 font-geist">Impact</span>
<div className="w-12 h-px bg-gradient-to-l from-transparent to-purple-500"></div>
</div>
<h2 className="text-4xl md:text-6xl uppercase text-white tracking-tighter font-space-grotesk font-light">
                    Validated Innovation
                    <span className="text-neutral-600 block">with Real-World Use</span>
</h2>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-1">
<div className="bg-[#050505] border border-subtle p-8 md:p-10 hover-glow transition-all duration-300 animate-on-scroll" style={{animation: 'animationIn 0.8s ease-out 0.1s both'}}>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
<iconify-icon className="text-amber-400" height="24" icon="lucide:trophy" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl text-white font-space-grotesk tracking-tight mb-2">Regional Innovation Award Winner</h3>
<p className="text-neutral-500 font-geist text-sm">(2025)</p>
</div>
</div>
</div>
<div className="bg-[#050505] border border-subtle p-8 md:p-10 hover-glow transition-all duration-300 animate-on-scroll" style={{animation: 'animationIn 0.8s ease-out 0.2s both'}}>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
<iconify-icon className="text-purple-400" height="24" icon="lucide:cpu" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl text-white font-space-grotesk tracking-tight mb-2">Creator of Applied AI Platforms</h3>
<p className="text-neutral-500 font-geist text-sm">Production-ready solutions</p>
</div>
</div>
</div>
<div className="bg-[#050505] border border-subtle p-8 md:p-10 hover-glow transition-all duration-300 animate-on-scroll" style={{animation: 'animationIn 0.8s ease-out 0.3s both'}}>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
<iconify-icon className="text-blue-400" height="24" icon="lucide:target" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl text-white font-space-grotesk tracking-tight mb-2">Focused on Usability &amp; Scale</h3>
<p className="text-neutral-500 font-geist text-sm">Adoption-first approach</p>
</div>
</div>
</div>
<div className="bg-[#050505] border border-subtle p-8 md:p-10 hover-glow transition-all duration-300 animate-on-scroll" style={{animation: 'animationIn 0.8s ease-out 0.4s both'}}>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center shrink-0">
<iconify-icon className="text-green-400" height="24" icon="lucide:trending-up" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl text-white font-space-grotesk tracking-tight mb-2">Digital Transformation Aligned</h3>
<p className="text-neutral-500 font-geist text-sm">Strategic initiatives</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative z-10 border-t border-subtle bg-black" id="partnerships">
<div className="container mx-auto px-4 max-w-6xl">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="animate-on-scroll" style={{animation: 'animationIn 0.8s ease-out both'}}>
<div className="flex items-center gap-3 mb-6">
<div className="w-12 h-px bg-gradient-to-r from-purple-500 to-transparent"></div>
<span className="text-[10px] uppercase tracking-widest text-purple-400 font-geist">Partnerships</span>
</div>
<h2 className="text-4xl md:text-5xl uppercase text-white tracking-tighter font-space-grotesk font-light mb-8">
                        Strategic Collaboration
                        <span className="text-neutral-600 block">Opportunities</span>
</h2>
<p className="text-neutral-400 font-geist leading-relaxed mb-8">
                        I'm open to collaboration with investors, education groups, AI startups, and organizations interested in scalable AI solutions.
                    </p>
<a className="inline-flex items-center gap-3 bg-brand-gradient text-white px-8 py-4 text-sm font-semibold tracking-widest uppercase hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all duration-300 rounded-sm font-geist" href="#contact">
                        Start a Conversation
                        <iconify-icon height="18" icon="lucide:arrow-right" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
</div>

<div className="animate-on-scroll" style={{animation: 'animationIn 0.8s ease-out 0.2s both'}}>
<div className="space-y-4">
<div className="group flex items-center gap-6 p-6 bg-[#050505] border border-subtle hover-glow transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
<iconify-icon className="text-purple-400" height="24" icon="lucide:flask-conical" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg text-white font-space-grotesk tracking-tight">Product Pilots</h3>
<p className="text-sm text-neutral-500 font-geist">Test and validate AI solutions</p>
</div>
</div>
<div className="group flex items-center gap-6 p-6 bg-[#050505] border border-subtle hover-glow transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
<iconify-icon className="text-blue-400" height="24" icon="lucide:handshake" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg text-white font-space-grotesk tracking-tight">Strategic Partnerships</h3>
<p className="text-sm text-neutral-500 font-geist">Long-term collaboration opportunities</p>
</div>
</div>
<div className="group flex items-center gap-6 p-6 bg-[#050505] border border-subtle hover-glow transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors">
<iconify-icon className="text-amber-400" height="24" icon="lucide:lightbulb" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg text-white font-space-grotesk tracking-tight">Advisory or Co-building</h3>
<p className="text-sm text-neutral-500 font-geist">Expert guidance and collaboration</p>
</div>
</div>
<div className="group flex items-center gap-6 p-6 bg-[#050505] border border-subtle hover-glow transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
<iconify-icon className="text-green-400" height="24" icon="lucide:scale" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg text-white font-space-grotesk tracking-tight">AI Platform Scaling</h3>
<p className="text-sm text-neutral-500 font-geist">Grow solutions to new markets</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative z-10 border-t border-subtle" id="contact">
<div className="container mx-auto px-4 max-w-4xl">

<div className="text-center mb-16 animate-on-scroll" style={{animation: 'animationIn 0.8s ease-out both'}}>
<div className="flex items-center justify-center gap-3 mb-6">
<div className="w-12 h-px bg-gradient-to-r from-transparent to-purple-500"></div>
<span className="text-[10px] uppercase tracking-widest text-purple-400 font-geist">Contact</span>
<div className="w-12 h-px bg-gradient-to-l from-transparent to-purple-500"></div>
</div>
<h2 className="text-4xl md:text-6xl uppercase text-white tracking-tighter font-space-grotesk font-light mb-4">
                    Let's Explore a
                    <span className="text-gradient text-glow">Strategic Fit</span>
</h2>
</div>

<div className="glassmorphic p-8 md:p-12 animate-on-scroll" style={{animation: 'animationIn 0.8s ease-out 0.2s both'}}>
<form className="space-y-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group relative">
<input className="w-full bg-transparent border-b border-neutral-800 py-4 text-white outline-none focus:border-purple-500 transition-colors font-geist peer" id="name" placeholder=" " required="" type="text"/>
<label className="absolute left-0 top-4 text-neutral-500 transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-purple-400 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs font-geist uppercase tracking-widest text-sm" htmlFor="name">
                                Name
                            </label>
</div>

<div className="group relative">
<input className="w-full bg-transparent border-b border-neutral-800 py-4 text-white outline-none focus:border-purple-500 transition-colors font-geist peer" id="email" placeholder=" " required="" type="email"/>
<label className="absolute left-0 top-4 text-neutral-500 transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-purple-400 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs font-geist uppercase tracking-widest text-sm" htmlFor="email">
                                Email
                            </label>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group relative">
<input className="w-full bg-transparent border-b border-neutral-800 py-4 text-white outline-none focus:border-purple-500 transition-colors font-geist peer" id="organization" placeholder=" " type="text"/>
<label className="absolute left-0 top-4 text-neutral-500 transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-purple-400 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs font-geist uppercase tracking-widest text-sm" htmlFor="organization">
                                Organization
                            </label>
</div>

<div className="group relative">
<select className="w-full bg-transparent border-b border-neutral-800 py-4 text-white outline-none focus:border-purple-500 transition-colors font-geist appearance-none cursor-pointer" id="interest">
<option className="bg-[#0a0a0a]" value="">Select Interest</option>
<option className="bg-[#0a0a0a]" value="investment">Investment</option>
<option className="bg-[#0a0a0a]" value="partnership">Partnership</option>
<option className="bg-[#0a0a0a]" value="pilot">Pilot</option>
<option className="bg-[#0a0a0a]" value="advisory">Advisory</option>
</select>
<iconify-icon className="absolute right-0 top-4 text-neutral-500 pointer-events-none" height="20" icon="lucide:chevron-down" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
</div>

<div className="group relative">
<textarea className="w-full bg-transparent border-b border-neutral-800 py-4 text-white outline-none focus:border-purple-500 transition-colors font-geist peer resize-none" id="message" placeholder=" " rows="4"></textarea>
<label className="absolute left-0 top-4 text-neutral-500 transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-purple-400 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs font-geist uppercase tracking-widest text-sm" htmlFor="message">
                            Message
                        </label>
</div>

<div className="pt-4">
<button className="w-full md:w-auto bg-brand-gradient text-white px-12 py-4 text-sm font-semibold tracking-widest uppercase hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all duration-300 rounded-sm font-geist flex items-center justify-center gap-3" type="submit">
                            Send Message
                            <iconify-icon height="18" icon="lucide:send" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
</div>
</form>
</div>
</div>
</section>

<footer className="border-t border-subtle bg-black py-12 relative z-10">
<div className="container mx-auto px-4 max-w-6xl">
<div className="flex flex-col items-center text-center">
<p className="text-neutral-400 font-geist mb-4 max-w-md">
                    Building AI products with purpose, clarity, and impact.
                </p>
<div className="flex items-center gap-2 mb-8">
<div className="w-2 h-2 rounded-full bg-purple-500"></div>
<span className="text-white font-space-grotesk tracking-tight">
                        AI Innovator &amp; Digital Product Builder
                    </span>
</div>
<div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent mb-8"></div>
<p className="text-xs text-neutral-600 font-geist uppercase tracking-widest">
                    © 2025 Hiba AlJabr. All rights reserved.
                </p>
</div>
</div>
</footer>

    </>
  );
}
