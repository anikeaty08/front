import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Geist', 'Inter', 'sans-serif'],
display: ['Plus Jakarta Sans', 'sans-serif'],
},
colors: {
background: '#050505',
surface: '#0F0F11',
},
animation: {
'flow-h': 'flowHorizontal 3s linear infinite',
'flow-v': 'flowVertical 3s linear infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
flowHorizontal: {
'0%': { backgroundPosition: '-100% 0' },
'100%': { backgroundPosition: '200% 0' },
},
flowVertical: {
'0%': { backgroundPosition: '0 -100%' },
'100%': { backgroundPosition: '0 200%' },
}
}
}
}
}



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                threshold: 0.15,
                rootMargin: "0px 0px -50px 0px"
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        // Optional: Stop observing once revealed
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="yWZ2Tbe094Fsjgy9NRnD"></div>

</div></div>

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-lg font-semibold tracking-tighter text-white font-display">RISE</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm text-gray-400 font-medium">
<a className="hover:text-white transition-colors" href="#">Strategy</a>
<a className="hover:text-white transition-colors" href="#">Solutions</a>
<a className="hover:text-white transition-colors" href="#">Company</a>
</div>
<a className="hidden sm:inline-flex h-8 items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 text-xs font-medium text-white transition-colors hover:bg-white/10" href="#contact">
                Contact
            </a>
</div>
</nav>

<section className="md:pt-48 md:pb-32 pt-32 pr-6 pb-20 pl-6 relative">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none"></div>
<div className="absolute inset-0 bg-grid -z-10"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">

<div className="reveal inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 mb-8">
<iconify-icon className="text-blue-400 text-xs" icon="lucide:trophy" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium text-blue-300 tracking-wide uppercase">Winner of AI Excellence Award</span>
</div>
<h1 className="reveal delay-100 md:text-7xl leading-[1.1] text-5xl text-white tracking-tight mb-6 font-display font-medium">
                Empowering businesses with AI strategy &amp; cloud solutions
            </h1>
<p className="reveal delay-200 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                Leverage our expertise to harness AI for innovation, efficiency, and growth. Transform your data into actionable intelligence.
            </p>
<div className="reveal delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="h-10 px-6 rounded-full bg-white text-black text-sm font-medium hover:bg-gray-200 transition-all flex items-center gap-2">
                    Schedule a Call with Our Team
                    <iconify-icon className="text-black" icon="lucide:arrow-right" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>

<div className="reveal delay-400 mt-24 pt-8 border-t border-white/5 max-w-5xl mx-auto">
<p className="text-center text-xs text-gray-500 mb-8 uppercase tracking-widest font-medium">Trusted by industry leaders</p>
<div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-xl font-bold tracking-tighter text-white font-display">Bench</span>
<span className="text-xl font-serif italic text-white">armoire</span>
<span className="text-xl font-bold tracking-tight text-white uppercase font-display">PROVEN</span>
<span className="text-xl font-semibold tracking-wide text-white font-display">Glossier.</span>
</div>
</div>
</section>

<section className="py-24 px-6 border-b border-white/5 bg-surface/30">
<div className="max-w-3xl mx-auto text-center reveal">
<h2 className="text-3xl md:text-4xl tracking-tight text-white mb-6 font-display font-medium">Transform Your Business with Expert AI Consulting</h2>
<p className="text-gray-400 leading-relaxed">
                Our seasoned consultants guide you through every step of your AI journey, from initial strategy to implementation of cutting-edge solutions tailored to your unique needs. We don't just build models; we build business value.
            </p>
</div>
</section>

<section className="pt-24 pr-6 pb-24 pl-6 relative">
<div className="max-w-6xl mx-auto">
<div className="mb-16 reveal">
<h2 className="text-3xl text-white tracking-tight mb-4 font-display font-medium">Why RISE?</h2>
<div className="flex gap-6 text-sm text-gray-400">
<div className="flex items-center gap-2">
<iconify-icon className="text-blue-400" icon="lucide:users"></iconify-icon>
<span>100+ AI Experts</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-blue-400" icon="lucide:award"></iconify-icon>
<span>50+ AWS Certifications</span>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="reveal delay-100 glass-card p-6 rounded-xl hover:bg-white/5 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-gray-900 border border-white/10 flex items-center justify-center mb-4 text-blue-400 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:brain-circuit" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-white mb-2">Proven AI Expertise</h3>
<p className="text-xs text-gray-500 leading-relaxed">Decades of combined AI knowledge applied to real-world problems.</p>
</div>
<div className="reveal delay-200 glass-card p-6 rounded-xl hover:bg-white/5 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-gray-900 border border-white/10 flex items-center justify-center mb-4 text-pink-400 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:blocks" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-white mb-2">Tailored Solutions</h3>
<p className="text-xs text-gray-500 leading-relaxed">Custom AI architectures designed for your specific business challenges.</p>
</div>
<div className="reveal delay-300 glass-card p-6 rounded-xl hover:bg-white/5 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-gray-900 border border-white/10 flex items-center justify-center mb-4 text-purple-400 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:infinity" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-white mb-2">End-to-End Delivery</h3>
<p className="text-xs text-gray-500 leading-relaxed">Comprehensive support from strategy to implementation and maintenance.</p>
</div>
<div className="reveal delay-400 glass-card p-6 rounded-xl hover:bg-white/5 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-gray-900 border border-white/10 flex items-center justify-center mb-4 text-purple-400 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:shield-check" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-white mb-2">Secure Infrastructure</h3>
<p className="text-xs text-gray-500 leading-relaxed">Reliable, flexible, and enterprise-grade secure AI environments.</p>
</div>
</div>
</div>
</section>

<section className="border-y bg-gray-950 border-white/5 pt-24 pr-6 pb-24 pl-6 overflow-hidden">
<div className="max-w-6xl mx-auto">
<h2 className="reveal text-xs font-semibold tracking-widest text-gray-500 uppercase mb-16">How We Work</h2>
<div className="relative grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-0">

<div className="hidden md:block absolute top-6 left-0 w-full h-[1px] bg-white/10 -z-10"></div>
<div className="hidden md:block absolute top-6 left-0 w-full h-[1px] animated-line-h animate-flow-h -z-10"></div>

<div className="relative group reveal delay-100">
<div className="w-12 h-12 rounded-full bg-gray-900 border border-white/20 flex items-center justify-center mx-auto md:ml-0 mb-4 z-10 relative shadow-[0_0_15px_rgba(255,255,255,0.05)] group-hover:border-blue-500 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300">
<span className="text-xs font-mono text-gray-300">01</span>
</div>
<h3 className="text-sm font-medium text-white mb-1 md:pr-4">Discover</h3>
<p className="text-xs text-gray-500">Requirements &amp; Analysis</p>
</div>
<div className="relative group reveal delay-200">
<div className="w-12 h-12 rounded-full bg-gray-900 border border-white/20 flex items-center justify-center mx-auto md:ml-0 mb-4 z-10 relative group-hover:border-blue-500 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300">
<span className="text-xs font-mono text-gray-300">02</span>
</div>
<h3 className="text-sm font-medium text-white mb-1 md:pr-4">Prototype</h3>
<p className="text-xs text-gray-500">Design &amp; Feasibility</p>
</div>
<div className="relative group reveal delay-300">
<div className="w-12 h-12 rounded-full bg-gray-900 border border-white/20 flex items-center justify-center mx-auto md:ml-0 mb-4 z-10 relative group-hover:border-blue-500 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300">
<span className="text-xs font-mono text-gray-300">03</span>
</div>
<h3 className="text-sm font-medium text-white mb-1 md:pr-4">Build</h3>
<p className="text-xs text-gray-500">Model Training</p>
</div>
<div className="relative group reveal delay-400">
<div className="w-12 h-12 rounded-full bg-gray-900 border border-white/20 flex items-center justify-center mx-auto md:ml-0 mb-4 z-10 relative group-hover:border-blue-500 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300">
<span className="text-xs font-mono text-gray-300">04</span>
</div>
<h3 className="text-sm font-medium text-white mb-1 md:pr-4">Deploy</h3>
<p className="text-xs text-gray-500">Launch &amp; Optimize</p>
</div>
<div className="relative group reveal delay-500">
<div className="w-12 h-12 rounded-full bg-gray-900 border border-white/20 flex items-center justify-center mx-auto md:ml-0 mb-4 z-10 relative group-hover:border-blue-500 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300">
<span className="text-xs font-mono text-gray-300">05</span>
</div>
<h3 className="text-sm font-medium text-white mb-1 md:pr-4">Scale</h3>
<p className="text-xs text-gray-500">Growth Support</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 overflow-hidden">
<div className="max-w-4xl mx-auto">
<h2 className="reveal text-3xl tracking-tight text-center text-white mb-16 font-display font-medium">Behind the Scenes Workflow</h2>
<div className="relative flex flex-col items-center gap-12">

<div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2 -z-10"></div>
<div className="absolute left-1/2 top-0 bottom-0 w-[1px] animated-line-v animate-flow-v -translate-x-1/2 -z-10 opacity-70"></div>
<div className="reveal delay-100 relative glass-card px-8 py-4 rounded-lg border border-blue-500/20 shadow-[0_0_30px_-10px_rgba(99,102,241,0.2)] w-64 text-center">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gray-950 px-2 text-[10px] text-blue-400 uppercase tracking-wider">Step 1</div>
<iconify-icon className="text-gray-300 mb-2" icon="lucide:database" width="20"></iconify-icon>
<div className="text-sm font-medium text-white">Data Ingestion</div>
<div className="text-xs text-gray-500 mt-1">Collection &amp; Cleaning</div>
</div>
<div className="reveal delay-200 relative glass-card px-8 py-4 rounded-lg border border-pink-500/20 w-64 text-center">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gray-950 px-2 text-[10px] text-pink-400 uppercase tracking-wider">Step 2</div>
<iconify-icon className="text-gray-300 mb-2" icon="lucide:cpu" width="20"></iconify-icon>
<div className="text-sm font-medium text-white">Model Development</div>
<div className="text-xs text-gray-500 mt-1">NLP, CV &amp; Predictive</div>
</div>
<div className="reveal delay-300 flex gap-8 md:gap-16">
<div className="relative glass-card px-6 py-4 rounded-lg border border-white/10 w-48 text-center bg-gray-900/80">
<iconify-icon className="text-gray-300 mb-2" icon="lucide:bot" width="20"></iconify-icon>
<div className="text-sm font-medium text-white">AI Agents</div>
</div>
<div className="relative glass-card px-6 py-4 rounded-lg border border-white/10 w-48 text-center bg-gray-900/80">
<iconify-icon className="text-gray-300 mb-2" icon="lucide:cloud" width="20"></iconify-icon>
<div className="text-sm font-medium text-white">AWS Deployment</div>
</div>
</div>
<div className="reveal delay-400 relative glass-card px-8 py-4 rounded-lg border border-purple-500/20 w-64 text-center">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gray-950 px-2 text-[10px] text-purple-400 uppercase tracking-wider">Outcome</div>
<iconify-icon className="text-gray-300 mb-2" icon="lucide:activity" width="20"></iconify-icon>
<div className="text-sm font-medium text-white">Optimization</div>
<div className="text-xs text-gray-500 mt-1">Monitoring &amp; Scale</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-surface/20">
<div className="max-w-6xl mx-auto">
<h2 className="reveal text-3xl tracking-tight text-white mb-12 font-display font-medium">Our Capabilities</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-lg overflow-hidden">
<div className="reveal delay-100 bg-gray-950 p-8 hover:bg-gray-900 transition-colors">
<iconify-icon className="text-gray-400 mb-4" icon="lucide:file-bar-chart-2" strokeWidth="1.5" width="24"></iconify-icon>
<h3 className="text-sm font-medium text-white mb-2">Data Strategy</h3>
<p className="text-xs text-gray-500">Governance &amp; Architecture</p>
</div>
<div className="reveal delay-100 bg-gray-950 p-8 hover:bg-gray-900 transition-colors">
<iconify-icon className="text-gray-400 mb-4" icon="lucide:sparkles" strokeWidth="1.5" width="24"></iconify-icon>
<h3 className="text-sm font-medium text-white mb-2">Generative AI</h3>
<p className="text-xs text-gray-500">LLM Integration &amp; Fine-tuning</p>
</div>
<div className="reveal delay-200 bg-gray-950 p-8 hover:bg-gray-900 transition-colors">
<iconify-icon className="text-gray-400 mb-4" icon="lucide:trending-up" strokeWidth="1.5" width="24"></iconify-icon>
<h3 className="text-sm font-medium text-white mb-2">Predictive Modeling</h3>
<p className="text-xs text-gray-500">Forecasting &amp; Analytics</p>
</div>
<div className="reveal delay-200 bg-gray-950 p-8 hover:bg-gray-900 transition-colors">
<iconify-icon className="text-gray-400 mb-4" icon="lucide:lock" strokeWidth="1.5" width="24"></iconify-icon>
<h3 className="text-sm font-medium text-white mb-2">Secure Cloud</h3>
<p className="text-xs text-gray-500">Enterprise Deployment</p>
</div>
<div className="reveal delay-300 bg-gray-950 p-8 hover:bg-gray-900 transition-colors">
<iconify-icon className="text-gray-400 mb-4" icon="lucide:git-merge" strokeWidth="1.5" width="24"></iconify-icon>
<h3 className="text-sm font-medium text-white mb-2">MLOps Pipelines</h3>
<p className="text-xs text-gray-500">DevOps for AI</p>
</div>
<div className="reveal delay-300 bg-gray-950 p-8 hover:bg-gray-900 transition-colors">
<iconify-icon className="text-gray-400 mb-4" icon="lucide:glasses" strokeWidth="1.5" width="24"></iconify-icon>
<h3 className="text-sm font-medium text-white mb-2">Computer Vision</h3>
<p className="text-xs text-gray-500">Image Analysis</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative">
<div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 to-black pointer-events-none"></div>
<div className="reveal max-w-4xl mx-auto glass-card rounded-2xl p-10 md:p-16 text-center relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 blur-[80px] rounded-full pointer-events-none animate-pulse-slow"></div>
<div className="flex justify-center mb-8 gap-4 items-center">
<div className="flex flex-col items-start">
<span className="text-2xl tracking-tight text-white mb-1 font-display font-medium">aws</span>
<div className="h-0.5 w-8 bg-[#FF9900]"></div>
</div>
<div className="h-8 w-[1px] bg-white/20"></div>
<div className="text-left">
<div className="text-xs font-semibold text-white uppercase tracking-wider">Partner Network</div>
<div className="text-[10px] text-gray-400 uppercase tracking-widest">Advanced Tier Services</div>
</div>
</div>
<h2 className="text-2xl md:text-3xl tracking-tight text-white mb-6 font-display font-medium">AWS AI/ML Certified Team</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
<div className="bg-black/40 p-4 rounded border border-white/5">
<div className="flex items-center gap-2 mb-2">
<div className="w-1.5 h-1.5 rounded-full bg-[#FF9900]"></div>
<h4 className="text-sm font-medium text-white">Certified Experts</h4>
</div>
<p className="text-xs text-gray-500">AWS AI/ML Specialty Certified engineers managing your infrastructure.</p>
</div>
<div className="bg-black/40 p-4 rounded border border-white/5">
<div className="flex items-center gap-2 mb-2">
<div className="w-1.5 h-1.5 rounded-full bg-[#FF9900]"></div>
<h4 className="text-sm font-medium text-white">Advanced Tier</h4>
</div>
<p className="text-xs text-gray-500">Recognized for deep technical expertise and customer success.</p>
</div>
<div className="bg-black/40 p-4 rounded border border-white/5">
<div className="flex items-center gap-2 mb-2">
<div className="w-1.5 h-1.5 rounded-full bg-[#FF9900]"></div>
<h4 className="text-sm font-medium text-white">Secure Ops</h4>
</div>
<p className="text-xs text-gray-500">Enterprise-grade security architecture following Well-Architected Framework.</p>
</div>
</div>
<div className="mt-8 pt-8 border-t border-white/10 flex justify-center">
<span className="px-3 py-1 rounded bg-white/5 text-xs text-gray-300 font-mono">aws CERTIFIED</span>
</div>
</div>
</section>

<section className="py-24 px-6 border-b border-white/5">
<div className="max-w-6xl mx-auto">
<h2 className="reveal text-xs font-semibold tracking-widest text-gray-500 uppercase mb-12 text-center">How We Deliver ROI</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="reveal delay-100 text-center group">
<div className="w-16 h-16 mx-auto rounded-full bg-surface border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-purple-400" icon="lucide:arrow-down-right" width="24"></iconify-icon>
</div>
<h3 className="text-2xl text-white tracking-tight mb-1 font-display font-medium">40%</h3>
<p className="text-xs text-gray-500 font-medium">Cost Reduction</p>
</div>
<div className="reveal delay-200 text-center group">
<div className="w-16 h-16 mx-auto rounded-full bg-surface border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-blue-400" icon="lucide:bar-chart-3" width="24"></iconify-icon>
</div>
<h3 className="text-2xl text-white tracking-tight mb-1 font-display font-medium">2.5x</h3>
<p className="text-xs text-gray-500 font-medium">Increased Revenue</p>
</div>
<div className="reveal delay-300 text-center group">
<div className="w-16 h-16 mx-auto rounded-full bg-surface border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-purple-400" icon="lucide:check-circle-2" width="24"></iconify-icon>
</div>
<h3 className="text-2xl text-white tracking-tight mb-1 font-display font-medium">99%</h3>
<p className="text-xs text-gray-500 font-medium">Enhanced Quality</p>
</div>
<div className="reveal delay-400 text-center group">
<div className="w-16 h-16 mx-auto rounded-full bg-surface border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-purple-400" icon="lucide:zap" width="24"></iconify-icon>
</div>
<h3 className="text-2xl text-white tracking-tight mb-1 font-display font-medium">3x</h3>
<p className="text-xs text-gray-500 font-medium">Faster Deployment</p>
</div>
</div>
</div>
</section>

<footer className="pt-24 pb-12 px-6 bg-black">
<div className="max-w-6xl mx-auto">
<div className="reveal flex flex-col md:flex-row justify-between items-start md:items-center mb-20 gap-8">
<div>
<h2 className="text-3xl tracking-tight text-white mb-2 font-display font-medium">Join 10,000+ AI leaders</h2>
<p className="text-gray-500 text-sm">Get the latest strategies delivered to your inbox.</p>
</div>
<div className="flex w-full md:w-auto gap-2">
<input className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 w-full md:w-64" placeholder="Enter your email" type="email"/>
<button className="bg-white text-black text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">Subscribe</button>
</div>
</div>
<div className="reveal delay-100 grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-white/10 pt-16">
<div className="col-span-2 md:col-span-1">
<span className="text-lg font-semibold tracking-tighter text-white block mb-4 font-display">RISE</span>
<p className="text-xs text-gray-500 mb-4 leading-relaxed">
                        Empowering businesses with AI strategy &amp; solutions.
                    </p>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Company</h4>
<ul className="space-y-2 text-sm text-gray-500">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Resources</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Services</h4>
<ul className="space-y-2 text-sm text-gray-500">
<li><a className="hover:text-white transition-colors" href="#">Strategy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Agent Studio</a></li>
<li><a className="hover:text-white transition-colors" href="#">AWS Partnership</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Resources</h4>
<ul className="space-y-2 text-sm text-gray-500">
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Webinars</a></li>
<li><a className="hover:text-white transition-colors" href="#">Whitepapers</a></li>
</ul>
</div>
</div>
<div className="reveal delay-200 mt-16 pt-8 border-t border-white/5 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-700">
<p>© 2024 RISE AI Consulting. All rights reserved.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="hover:text-gray-500" href="#">Privacy</a>
<a className="hover:text-gray-500" href="#">Terms</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
