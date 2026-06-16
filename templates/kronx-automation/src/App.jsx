import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px"
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            const revealElements = document.querySelectorAll('.reveal-text');
            revealElements.forEach(el => observer.observe(el));
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 bg-grid pointer-events-none"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/[0.08] bg-black/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group text-white" href="#">
<span className="text-lg font-semibold tracking-tighter">KRONX</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-white" href="#">About</a>
<a className="text-xs font-medium text-zinc-500 hover:text-white transition-colors" href="#">Services</a>
<a className="text-xs font-medium text-zinc-500 hover:text-white transition-colors" href="#">Case Studies</a>
</div>
<a className="hidden sm:block px-5 py-2 text-xs font-semibold bg-white text-black rounded-full hover:bg-zinc-200 transition-colors" href="#contact">
                Start Audit
            </a>
</div>
</nav>

<section className="relative z-10 pt-48 pb-32 px-6 overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] ambient-glow pointer-events-none -z-10 opacity-60"></div>
<div className="max-w-5xl mx-auto text-center">
<div className="reveal-text inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
<span className="text-[10px] md:text-xs text-zinc-400 tracking-widest uppercase font-medium">Next-Gen Automation</span>
</div>
<h1 className="reveal-text stagger-1 text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white mb-8 leading-[1.05]">
                We Build Intelligent Systems That <span className="text-zinc-500">Scale Businesses.</span>
</h1>
<p className="reveal-text stagger-2 text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                KRONX is the agency for the autonomous enterprise. We engineer AI-driven workflows that eliminate redundancy, reduce operational costs, and accelerate growth.
            </p>
</div>
</section>

<section className="relative z-10 py-24 px-6 border-t border-white/[0.06]">
<div className="max-w-3xl mx-auto">
<div className="reveal-text border-l border-white/20 pl-8 md:pl-12 py-2">
<h2 className="text-sm font-mono text-zinc-500 mb-4 uppercase tracking-wider">Who We Are</h2>
<p className="text-2xl md:text-3xl font-medium leading-tight text-white mb-6">
                    We are a collective of automation architects and AI engineers obsessed with efficiency.
                </p>
<p className="text-base text-zinc-400 leading-relaxed">
                    The modern business landscape is drowning in manual tasks. We exist to build the infrastructure that sets you free. By combining cutting-edge Large Language Models with robust API integrations, we transform static organizations into dynamic, self-driving systems.
                </p>
</div>
</div>
</section>

<section className="relative z-10 py-32 px-6 bg-zinc-900/[0.2]">
<div className="max-w-7xl mx-auto">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="reveal-text">
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter mb-6">Our Mission</h2>
<p className="text-lg text-zinc-400 leading-relaxed max-w-md">
                        To replace human latency with machine precision. We envision a world where talented people are liberated from robotic work to focus on creative strategy.
                    </p>
<div className="mt-10 space-y-6">
<div className="group flex items-start gap-4">
<div className="w-10 h-10 rounded bg-white/[0.05] border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white group-hover:text-black transition-colors duration-300">
<iconify-icon icon="lucide:zap" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-1">Velocity First</h4>
<p className="text-xs text-zinc-500">Speed is the ultimate currency. We deploy systems that execute in milliseconds.</p>
</div>
</div>
<div className="group flex items-start gap-4">
<div className="w-10 h-10 rounded bg-white/[0.05] border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white group-hover:text-black transition-colors duration-300">
<iconify-icon icon="lucide:shield-check" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-1">Reliability Engineered</h4>
<p className="text-xs text-zinc-500">Systems that don't sleep, don't err, and scale infinitely without friction.</p>
</div>
</div>
</div>
</div>
<div className="reveal-text stagger-2 relative">
<div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent blur-3xl opacity-20"></div>
<div className="relative w-full aspect-square md:aspect-video rounded-2xl border border-white/10 bg-black/50 overflow-hidden flex items-center justify-center">

<div className="relative w-full h-full">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
<iconify-icon className="text-white/80" icon="lucide:cpu" width="48"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-32 px-6 border-t border-white/[0.06]">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-20 reveal-text">
<h2 className="text-3xl font-medium tracking-tighter mb-4">The KRONX Standard</h2>
<p className="text-zinc-500 text-sm">Why leading companies trust us with their infrastructure.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="reveal-text feature-card p-8 rounded-xl border border-white/10">
<div className="mb-6 text-white">
<iconify-icon icon="lucide:brain-circuit" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3">AI-Native Mindset</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                        We don't just add AI as a feature. We rebuild processes from the ground up with artificial intelligence as the core engine.
                    </p>
</div>

<div className="reveal-text stagger-1 feature-card p-8 rounded-xl border border-white/10">
<div className="mb-6 text-white">
<iconify-icon icon="lucide:layers" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3">Custom Architecture</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                        No cookie-cutter templates. Every solution is bespoke, architected specifically for your data topology and business logic.
                    </p>
</div>

<div className="reveal-text stagger-2 feature-card p-8 rounded-xl border border-white/10">
<div className="mb-6 text-white">
<iconify-icon icon="lucide:rocket" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3">Rapid Deployment</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                        Our modular code libraries allow us to ship enterprise-grade systems in weeks, not months. Speed to value is our priority.
                    </p>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-40 px-6 overflow-hidden bg-black">

<div className="absolute inset-0 opacity-30">
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-zinc-800/20 blur-[100px] rounded-full translate-x-1/3 -translate-y-1/3"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-zinc-800/20 blur-[100px] rounded-full -translate-x-1/3 translate-y-1/3"></div>
</div>
<div className="max-w-4xl mx-auto relative z-10 text-center">
<h2 className="reveal-text text-4xl md:text-6xl font-medium tracking-tighter text-white mb-8 leading-tight">
                "The future belongs to the automated."
            </h2>
<p className="reveal-text stagger-1 text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto">
                We are building the bridge to that future. KRONX is not just an agency; we are your strategic partner in navigating the intelligence revolution. We aim to define the standard for how the next generation of companies operate.
            </p>
</div>
</section>

<section className="relative z-10 py-32 px-6 border-t border-white/[0.06]" id="contact">
<div className="max-w-5xl mx-auto">
<div className="bg-zinc-900/[0.3] border border-white/10 rounded-2xl p-12 md:p-20 text-center relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
<h2 className="reveal-text text-4xl md:text-5xl font-medium tracking-tighter text-white mb-6">
                    Let’s Automate Your Business
                </h2>
<p className="reveal-text stagger-1 text-zinc-400 mb-10 max-w-lg mx-auto">
                    Stop trading time for money. Start building assets that work while you sleep.
                </p>
<div className="reveal-text stagger-2 flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="glow-button w-full sm:w-auto px-8 py-4 bg-white text-black text-sm font-semibold rounded-full hover:bg-zinc-100 transition-colors">
                        Book Strategy Call
                    </button>
<button className="w-full sm:w-auto px-8 py-4 text-white border border-white/10 bg-transparent text-sm font-semibold rounded-full hover:bg-white/[0.05] transition-colors">
                        View Methodologies
                    </button>
</div>
</div>
</div>
</section>

<footer className="relative z-10 bg-black border-t border-white/[0.06] py-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex flex-col items-center md:items-start">
<span className="text-xl font-semibold tracking-tighter text-white">KRONX</span>
<span className="text-[10px] text-zinc-600 uppercase tracking-widest mt-1">Intelligence Systems</span>
</div>
<div className="flex gap-8 text-xs font-medium text-zinc-500">
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="hover:text-white transition-colors" href="#">Email</a>
</div>
<p className="text-[10px] text-zinc-700">© 2024 KRONX Inc. All rights reserved.</p>
</div>
</footer>


    </>
  );
}
