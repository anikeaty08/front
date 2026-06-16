import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px 0px -50px 0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        // Optional: Unobserve to animate only once per page load
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
                observer.observe(el);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-[-20%] left-1/2 -translate-x-1/2 w-[80%] max-w-4xl aspect-square bg-white/[0.015] blur-[120px] rounded-full pointer-events-none z-0"></div>
<div className="fixed bottom-[-10%] left-[-10%] w-[50%] aspect-square bg-indigo-500/[0.02] blur-[150px] rounded-full pointer-events-none z-0"></div>

<nav className="fixed top-0 w-full z-50 glass-panel border-x-0 border-t-0 border-b-white/5">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white font-medium tracking-tighter uppercase text-sm" href="#">Snapreneur</a>
<div className="hidden md:flex items-center gap-8 text-xs font-light tracking-wide text-neutral-400">
<a className="hover:text-white transition-colors duration-300" href="#home">Home</a>
<a className="hover:text-white transition-colors duration-300" href="#products">Products</a>
<a className="hover:text-white transition-colors duration-300" href="#community">Community</a>
<a className="hover:text-white transition-colors duration-300" href="#about">About</a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-white bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all duration-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]" href="#start">
                Start Building
            </a>

<button className="md:hidden text-white">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</nav>
<main className="flex-grow z-10">

<section className="relative pt-40 pb-24 md:pt-52 md:pb-32 px-6 flex flex-col items-center text-center" id="home">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel text-xs text-neutral-300 mb-8 tracking-wide font-light animate-fade-in" style={{animationDelay: '0.1s'}}>
<span className="w-1.5 h-1.5 rounded-full bg-indigo-400/50 shadow-[0_0_8px_rgba(129,140,248,0.5)]"></span>
                The Launchpad for Digital Builders
            </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-6 max-w-4xl leading-[1.15]">
<span className="block text-neutral-300">
<span className="animate-word" style={{animationDelay: '0.2s'}}>Build</span>
<span className="animate-word" style={{animationDelay: '0.3s'}}>Digital</span>
<span className="animate-word" style={{animationDelay: '0.4s'}}>Income</span>
</span>
<span className="block text-white">
<span className="animate-word" style={{animationDelay: '0.5s'}}>in</span>
<span className="animate-word" style={{animationDelay: '0.6s'}}>the</span>
<span className="animate-word" style={{animationDelay: '0.7s'}}>Internet</span>
<span className="animate-word" style={{animationDelay: '0.8s'}}>Economy</span>
</span>
</h1>
<p className="text-base md:text-lg text-neutral-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed animate-fade-in" style={{animationDelay: '1s'}}>
                Snapreneur helps creators, students and beginners turn ideas, skills and AI into scalable digital income systems.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto animate-fade-in" style={{animationDelay: '1.1s'}}>
<a className="w-full sm:w-auto px-6 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-neutral-200 transition-colors duration-300 shadow-[0_0_20px_rgba(255,255,255,0.15)]" href="#explore">
                    Explore the System
                </a>
<a className="w-full sm:w-auto px-6 py-3 rounded-full glass-panel text-white text-sm font-light hover:bg-white/10 transition-all duration-300" href="#start">
                    Start Free
                </a>
</div>
</section>

<section className="py-16 px-6 border-y border-white/[0.02] bg-white/[0.005] reveal-on-scroll">
<div className="max-w-4xl mx-auto text-center">
<div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-xs font-light text-neutral-500 uppercase tracking-widest mb-6">
<span>Not a course</span>
<span className="text-neutral-800 hidden sm:inline">•</span>
<span>Not a guru brand</span>
<span className="text-neutral-800 hidden sm:inline">•</span>
<span>Not theory</span>
</div>
<h2 className="text-xl md:text-2xl font-normal tracking-tight text-neutral-200">
                    Snapreneur is a launchpad for digital builders.
                </h2>
</div>
</section>

<section className="py-24 px-6 max-w-6xl mx-auto" id="about">
<div className="text-center mb-16 reveal-on-scroll">
<h2 className="text-xs text-neutral-500 uppercase tracking-widest font-light mb-3">The Arsenal</h2>
<h3 className="text-2xl md:text-3xl font-medium tracking-tight text-white">What Snapreneur Offers</h3>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
<div className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center transition-all duration-500 group reveal-on-scroll" style={{transitionDelay: '0.1s'}}>
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 group-hover:bg-white/10">
<iconify-icon className="text-xl text-neutral-300" icon="solar:cpu-linear"></iconify-icon>
</div>
<h4 className="text-sm font-normal text-neutral-200 tracking-wide">AI Tools</h4>
</div>
<div className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center transition-all duration-500 group reveal-on-scroll" style={{transitionDelay: '0.2s'}}>
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 group-hover:bg-white/10">
<iconify-icon className="text-xl text-neutral-300" icon="solar:box-linear"></iconify-icon>
</div>
<h4 className="text-sm font-normal text-neutral-200 tracking-wide">Digital Products</h4>
</div>
<div className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center transition-all duration-500 group reveal-on-scroll" style={{transitionDelay: '0.3s'}}>
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 group-hover:bg-white/10">
<iconify-icon className="text-xl text-neutral-300" icon="solar:diagram-down-linear"></iconify-icon>
</div>
<h4 className="text-sm font-normal text-neutral-200 tracking-wide">Business Systems</h4>
</div>
<div className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center transition-all duration-500 group col-span-2 md:col-span-1 lg:col-span-1 reveal-on-scroll" style={{transitionDelay: '0.4s'}}>
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 group-hover:bg-white/10">
<iconify-icon className="text-xl text-neutral-300" icon="solar:wallet-money-linear"></iconify-icon>
</div>
<h4 className="text-sm font-normal text-neutral-200 tracking-wide">Content Monetization</h4>
</div>
<div className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center transition-all duration-500 group col-span-2 md:col-span-2 lg:col-span-1 reveal-on-scroll" style={{transitionDelay: '0.5s'}}>
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 group-hover:bg-white/10">
<iconify-icon className="text-xl text-neutral-300" icon="solar:graph-up-linear"></iconify-icon>
</div>
<h4 className="text-sm font-normal text-neutral-200 tracking-wide">Creator Growth Frameworks</h4>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-6xl mx-auto relative" id="products">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none -z-10"></div>
<div className="text-center mb-16 reveal-on-scroll">
<h2 className="text-xs text-neutral-500 uppercase tracking-widest font-light mb-3">Ecosystem</h2>
<h3 className="text-2xl md:text-4xl font-medium tracking-tight text-white">Build Your Digital Stack</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-3xl relative overflow-hidden group reveal-on-scroll" style={{transitionDelay: '0.1s'}}>
<div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl rounded-full group-hover:bg-white/10 transition-colors duration-500"></div>
<iconify-icon className="text-3xl text-white mb-6 opacity-70" icon="solar:magic-stick-3-linear"></iconify-icon>
<h4 className="text-lg font-normal text-white mb-2 tracking-tight">AI Tools Ebook</h4>
<p className="text-xs text-neutral-400 font-light leading-relaxed">Master the modern tools required to automate and scale your digital presence.</p>
</div>

<div className="glass-panel p-8 rounded-3xl relative overflow-hidden group reveal-on-scroll" style={{transitionDelay: '0.2s'}}>
<div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl rounded-full group-hover:bg-white/10 transition-colors duration-500"></div>
<iconify-icon className="text-3xl text-white mb-6 opacity-70" icon="solar:lightbulb-linear"></iconify-icon>
<h4 className="text-lg font-normal text-white mb-2 tracking-tight">89 Business Ideas</h4>
<p className="text-xs text-neutral-400 font-light leading-relaxed">Curated, actionable blueprints for starting your internet venture today.</p>
</div>

<div className="glass-panel p-8 rounded-3xl relative overflow-hidden group reveal-on-scroll" style={{transitionDelay: '0.3s'}}>
<div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl rounded-full group-hover:bg-white/10 transition-colors duration-500"></div>
<iconify-icon className="text-3xl text-white mb-6 opacity-70" icon="solar:document-text-linear"></iconify-icon>
<h4 className="text-lg font-normal text-white mb-2 tracking-tight">Free Starter Guides</h4>
<p className="text-xs text-neutral-400 font-light leading-relaxed">Zero-friction entry into digital building. Learn the fundamentals without cost.</p>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-5xl mx-auto">
<div className="text-center mb-16 reveal-on-scroll">
<h2 className="text-xs text-neutral-500 uppercase tracking-widest font-light mb-3">The Process</h2>
<h3 className="text-2xl md:text-3xl font-medium tracking-tight text-white">How It Works</h3>
</div>
<div className="flex flex-col md:flex-row items-center justify-between gap-8 relative">

<div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2 z-0 reveal-on-scroll"></div>
<div className="flex flex-col items-center text-center z-10 bg-[#030303] p-4 reveal-on-scroll" style={{transitionDelay: '0.1s'}}>
<div className="w-14 h-14 rounded-full glass-panel flex items-center justify-center mb-4 text-white">
<iconify-icon className="text-xl" icon="solar:book-bookmark-linear"></iconify-icon>
</div>
<span className="text-sm font-normal text-neutral-200 tracking-wide">Learn</span>
</div>
<div className="flex flex-col items-center text-center z-10 bg-[#030303] p-4 reveal-on-scroll" style={{transitionDelay: '0.2s'}}>
<div className="w-14 h-14 rounded-full glass-panel flex items-center justify-center mb-4 text-white">
<iconify-icon className="text-xl" icon="solar:hammer-linear"></iconify-icon>
</div>
<span className="text-sm font-normal text-neutral-200 tracking-wide">Build</span>
</div>
<div className="flex flex-col items-center text-center z-10 bg-[#030303] p-4 reveal-on-scroll" style={{transitionDelay: '0.3s'}}>
<div className="w-14 h-14 rounded-full glass-panel flex items-center justify-center mb-4 text-white">
<iconify-icon className="text-xl" icon="solar:rocket-linear"></iconify-icon>
</div>
<span className="text-sm font-normal text-neutral-200 tracking-wide">Launch</span>
</div>
<div className="flex flex-col items-center text-center z-10 bg-[#030303] p-4 reveal-on-scroll" style={{transitionDelay: '0.4s'}}>
<div className="w-14 h-14 rounded-full glass-panel flex items-center justify-center mb-4 text-white">
<iconify-icon className="text-xl" icon="solar:chart-square-linear"></iconify-icon>
</div>
<span className="text-sm font-normal text-neutral-200 tracking-wide">Scale</span>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden border-y border-white/[0.02]" id="community">
<div className="absolute inset-0 bg-white/[0.01]"></div>
<div className="max-w-3xl mx-auto text-center relative z-10 reveal-on-scroll">
<div className="w-16 h-16 rounded-2xl glass-panel mx-auto flex items-center justify-center mb-8">
<iconify-icon className="text-2xl text-white opacity-80" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<h3 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-6">Build With People Who Build</h3>
<p className="text-sm md:text-base text-neutral-400 font-light leading-relaxed mb-10 max-w-xl mx-auto">
                    Join a private ecosystem of creators and digital entrepreneurs focused on growth, execution and real results.
                </p>
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all duration-300" href="#join">
                    Join Community
                </a>
</div>
</section>

<section className="py-24 px-6 max-w-6xl mx-auto">
<div className="text-center mb-16 reveal-on-scroll">
<h2 className="text-xs text-neutral-500 uppercase tracking-widest font-light mb-3">The Advantage</h2>
<h3 className="text-2xl md:text-3xl font-medium tracking-tight text-white">Why Snapreneur</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
<div className="flex items-start gap-4 p-6 glass-panel rounded-2xl reveal-on-scroll" style={{transitionDelay: '0.1s'}}>
<iconify-icon className="text-2xl text-neutral-400 shrink-0" icon="solar:smile-circle-linear"></iconify-icon>
<div>
<h4 className="text-base font-normal text-white mb-1 tracking-tight">Beginner Friendly</h4>
<p className="text-xs text-neutral-500 font-light">Designed for zero starting knowledge. We clarify the complex.</p>
</div>
</div>
<div className="flex items-start gap-4 p-6 glass-panel rounded-2xl reveal-on-scroll" style={{transitionDelay: '0.2s'}}>
<iconify-icon className="text-2xl text-neutral-400 shrink-0" icon="solar:magic-stick-3-linear"></iconify-icon>
<div>
<h4 className="text-base font-normal text-white mb-1 tracking-tight">AI Powered</h4>
<p className="text-xs text-neutral-500 font-light">Leverage modern AI tools to do the heavy lifting for your business.</p>
</div>
</div>
<div className="flex items-start gap-4 p-6 glass-panel rounded-2xl reveal-on-scroll" style={{transitionDelay: '0.3s'}}>
<iconify-icon className="text-2xl text-neutral-400 shrink-0" icon="solar:settings-linear"></iconify-icon>
<div>
<h4 className="text-base font-normal text-white mb-1 tracking-tight">Practical Systems</h4>
<p className="text-xs text-neutral-500 font-light">No fluff. Only actionable frameworks that yield tangible outcomes.</p>
</div>
</div>
<div className="flex items-start gap-4 p-6 glass-panel rounded-2xl reveal-on-scroll" style={{transitionDelay: '0.4s'}}>
<iconify-icon className="text-2xl text-neutral-400 shrink-0" icon="solar:pen-new-square-linear"></iconify-icon>
<div>
<h4 className="text-base font-normal text-white mb-1 tracking-tight">Built for Creators</h4>
<p className="text-xs text-neutral-500 font-light">Tailored specifically for modern digital content creators and builders.</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 text-center reveal-on-scroll">
<h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-white mb-2">Stop Consuming.</h2>
<h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-neutral-500 mb-10">Start Building.</h2>
<a className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-black text-sm font-medium hover:bg-neutral-200 transition-colors duration-300 shadow-[0_0_30px_rgba(255,255,255,0.1)]" href="#enter">
                Enter Snapreneur
            </a>
</section>
</main>

<footer className="border-t border-white/5 bg-[#020202] pt-16 pb-8 px-6 relative z-10 reveal-on-scroll">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10 mb-16">
<div className="max-w-xs">
<span className="text-white font-medium tracking-tighter uppercase text-sm block mb-4">Snapreneur</span>
<p className="text-xs text-neutral-500 font-light leading-relaxed">
                    Helping creators build digital income using AI, content and smart business systems.
                </p>
</div>
<div className="flex flex-col sm:flex-row gap-8 sm:gap-16 text-sm">
<div className="flex flex-col gap-3">
<a className="text-neutral-400 hover:text-white text-xs font-light transition-colors" href="#home">Home</a>
<a className="text-neutral-400 hover:text-white text-xs font-light transition-colors" href="#products">Products</a>
</div>
<div className="flex flex-col gap-3">
<a className="text-neutral-400 hover:text-white text-xs font-light transition-colors" href="#community">Community</a>
<a className="text-neutral-400 hover:text-white text-xs font-light transition-colors" href="#about">About</a>
</div>
</div>
</div>
<div className="max-w-6xl mx-auto pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
<p className="text-[10px] text-neutral-600 font-light uppercase tracking-widest">© 2024 Snapreneur. All rights reserved.</p>
</div>
</footer>



    </>
  );
}
