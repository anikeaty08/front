import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
background: '#0a0a0a', // Extremely dark grey, not pure black
surface: '#171717',
border: '#262626',
primary: '#ededed',
secondary: '#a1a1aa',
},
animation: {
'fade-in': 'fadeIn 0.5s ease-out forwards',
'slide-up': 'slideUp 0.7s ease-out forwards',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
slideUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



        // Simple Intersection Observer to trigger fade-ins
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-slide-up');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('section > div').forEach(section => {
            section.classList.add('opacity-0'); // Initial state
            observer.observe(section);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass-nav">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-primary font-semibold tracking-tight text-lg flex items-center gap-2 group" href="#">
<span className="bg-white text-black text-xs font-bold px-1.5 py-0.5 rounded-md group-hover:scale-110 transition-transform">BT</span>
<span>Bereket Tadesse</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#skills">Skills</a>
<a className="hover:text-white transition-colors" href="#projects">Projects</a>
<a className="hover:text-white transition-colors" href="#experience">Experience</a>
<a className="px-4 py-2 bg-white text-black rounded-full hover:bg-neutral-200 transition-colors" href="#contact">Contact Me</a>
</div>

<button className="md:hidden text-white" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>

<div className="hidden absolute top-16 left-0 w-full bg-surface border-b border-border p-6 flex flex-col gap-4 md:hidden" id="mobile-menu">
<a className="block hover:text-white" href="#about">About</a>
<a className="block hover:text-white" href="#skills">Skills</a>
<a className="block hover:text-white" href="#projects">Projects</a>
<a className="block hover:text-white" href="#experience">Experience</a>
<a className="block text-white font-semibold" href="#contact">Contact Me</a>
</div>
</nav>

<section className="relative min-h-screen flex flex-col justify-center items-center text-center pt-20 px-6 bg-grid">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] glow-bg opacity-60 pointer-events-none"></div>
<div className="animate-slide-up space-y-8 max-w-4xl relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-white backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
                Available for new opportunities
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-white leading-[1.1]">
                I build intelligent products <br className="hidden md:block"/>
<span className="text-neutral-500">end-to-end.</span>
</h1>
<p className="text-lg md:text-xl text-secondary max-w-2xl mx-auto leading-relaxed">
                From clean UI to scalable APIs to ML-powered insights. I bridge the gap between complex data science and user-centric applications.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
<a className="px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-neutral-200 transition-all flex items-center gap-2" href="#projects">
                    View Projects
                    <span className="iconify" data-icon="lucide:arrow-right" data-width="18"></span>
</a>
<a className="px-8 py-3 border border-border text-white font-medium rounded-full hover:bg-white/5 transition-all flex items-center gap-2" href="#contact">
<span className="iconify" data-icon="lucide:download" data-width="18"></span>
                    Download CV
                </a>
<div className="flex gap-4 sm:ml-4">
<a aria-label="GitHub" className="p-3 text-secondary hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:github" data-width="22"></span>
</a>
<a aria-label="LinkedIn" className="p-3 text-secondary hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:linkedin" data-width="22"></span>
</a>
</div>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
<span className="iconify text-white" data-icon="lucide:chevron-down" data-width="24"></span>
</div>
</section>

<section className="py-24 px-6 relative border-t border-white/5" id="skills">
<div className="max-w-6xl mx-auto space-y-12">
<div className="space-y-2">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Technical Arsenal</h2>
<p className="text-secondary">The tools I use to turn problems into products.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl bg-surface/50 border border-border card-hover relative overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="iconify" data-icon="lucide:brain-circuit" data-width="80"></span>
</div>
<div className="flex items-center gap-3 mb-6">
<span className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
<span className="iconify" data-icon="lucide:brain" data-width="20"></span>
</span>
<h3 className="text-xl font-medium text-white">AI &amp; ML</h3>
</div>
<ul className="space-y-3">
<li className="flex items-center gap-2 text-sm">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span> Scikit-learn, XGBoost
                        </li>
<li className="flex items-center gap-2 text-sm">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span> TensorFlow, PyTorch
                        </li>
<li className="flex items-center gap-2 text-sm">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span> NLP &amp; Computer Vision
                        </li>
</ul>
</div>

<div className="group p-8 rounded-2xl bg-surface/50 border border-border card-hover relative overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="iconify" data-icon="lucide:sparkles" data-width="80"></span>
</div>
<div className="flex items-center gap-3 mb-6">
<span className="p-2 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20">
<span className="iconify" data-icon="lucide:bot" data-width="20"></span>
</span>
<h3 className="text-xl font-medium text-white">GenAI &amp; LLMs</h3>
</div>
<ul className="space-y-3">
<li className="flex items-center gap-2 text-sm">
<span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span> OpenAI API, Gemini
                        </li>
<li className="flex items-center gap-2 text-sm">
<span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span> LangChain, LlamaIndex
                        </li>
<li className="flex items-center gap-2 text-sm">
<span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span> RAG Architectures
                        </li>
</ul>
</div>

<div className="group p-8 rounded-2xl bg-surface/50 border border-border card-hover relative overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="iconify" data-icon="lucide:layout-template" data-width="80"></span>
</div>
<div className="flex items-center gap-3 mb-6">
<span className="p-2 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
<span className="iconify" data-icon="lucide:code-2" data-width="20"></span>
</span>
<h3 className="text-xl font-medium text-white">Full-Stack</h3>
</div>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 text-xs rounded bg-neutral-800 text-neutral-300 border border-neutral-700">Next.js 14</span>
<span className="px-2 py-1 text-xs rounded bg-neutral-800 text-neutral-300 border border-neutral-700">React</span>
<span className="px-2 py-1 text-xs rounded bg-neutral-800 text-neutral-300 border border-neutral-700">TypeScript</span>
<span className="px-2 py-1 text-xs rounded bg-neutral-800 text-neutral-300 border border-neutral-700">Tailwind</span>
<span className="px-2 py-1 text-xs rounded bg-neutral-800 text-neutral-300 border border-neutral-700">FastAPI</span>
<span className="px-2 py-1 text-xs rounded bg-neutral-800 text-neutral-300 border border-neutral-700">Node.js</span>
</div>
</div>

<div className="group p-8 rounded-2xl bg-surface/50 border border-border card-hover relative overflow-hidden lg:col-span-2">
<div className="flex flex-col md:flex-row gap-8">
<div className="flex-1">
<div className="flex items-center gap-3 mb-6">
<span className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
<span className="iconify" data-icon="lucide:database" data-width="20"></span>
</span>
<h3 className="text-xl font-medium text-white">Data &amp; Databases</h3>
</div>
<p className="text-sm leading-relaxed mb-4">Capable of handling complex data pipelines and storage solutions. From raw data processing with Pandas/NumPy to storing efficiently in PostgreSQL, MongoDB, or Oracle XE.</p>
<div className="flex gap-2">
<span className="iconify text-secondary" data-icon="lucide:bar-chart-3" data-width="20"></span>
<span className="iconify text-secondary" data-icon="lucide:table-2" data-width="20"></span>
<span className="iconify text-secondary" data-icon="lucide:pie-chart" data-width="20"></span>
</div>
</div>
<div className="flex-1 border-l border-white/5 pl-0 md:pl-8">
<div className="flex items-center gap-3 mb-6">
<span className="p-2 rounded-lg bg-orange-500/10 text-orange-400 border border-orange-500/20">
<span className="iconify" data-icon="lucide:cloud" data-width="20"></span>
</span>
<h3 className="text-xl font-medium text-white">Deployment</h3>
</div>
<div className="grid grid-cols-2 gap-3 text-sm">
<div className="flex items-center gap-2"><span className="iconify" data-icon="lucide:container"></span> Docker</div>
<div className="flex items-center gap-2"><span className="iconify" data-icon="lucide:server"></span> AWS</div>
<div className="flex items-center gap-2"><span className="iconify" data-icon="lucide:globe"></span> Streamlit</div>
<div className="flex items-center gap-2"><span className="iconify" data-icon="lucide:git-branch"></span> CI/CD</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-surface/30" id="experience">
<div className="max-w-4xl mx-auto space-y-12">
<h2 className="text-3xl font-semibold text-white tracking-tight">Experience</h2>
<div className="relative border-l border-white/10 ml-3 space-y-12">

<div className="relative pl-10 group">
<div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-white ring-4 ring-background group-hover:bg-indigo-400 transition-colors"></div>
<div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
<h3 className="text-xl font-medium text-white">Machine Learning Engineer</h3>
<span className="text-sm font-mono text-secondary">Jul 2025 – Present</span>
</div>
<div className="text-lg text-white mb-2">Green Investment Groups</div>
<p className="text-sm text-secondary leading-relaxed max-w-2xl">
                        Spearheading the development of predictive models for sustainable investment portfolios. Integrating ML pipelines with backend services to provide real-time analytics dashboards for stakeholders.
                    </p>
</div>

<div className="relative pl-10 group">
<div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-neutral-600 ring-4 ring-background group-hover:bg-indigo-400 transition-colors"></div>
<div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
<h3 className="text-xl font-medium text-white">Front-End Developer Intern</h3>
<span className="text-sm font-mono text-secondary">2024</span>
</div>
<div className="text-lg text-white mb-2">Madda Walabu University</div>
<p className="text-sm text-secondary leading-relaxed max-w-2xl">
                        Developed responsive user interfaces for university management systems using React. Optimized page load speeds and ensured accessibility compliance (WCAG) across the platform.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="projects">
<div className="max-w-6xl mx-auto space-y-12">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
<div className="space-y-2">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Featured Projects</h2>
<p className="text-secondary">Selected works blending AI with intuitive interfaces.</p>
</div>

<div className="flex flex-wrap gap-2">
<button className="px-3 py-1.5 text-xs font-medium rounded-full bg-white text-black">All</button>
<button className="px-3 py-1.5 text-xs font-medium rounded-full border border-border hover:bg-white/5 transition-colors">AI/ML</button>
<button className="px-3 py-1.5 text-xs font-medium rounded-full border border-border hover:bg-white/5 transition-colors">GenAI</button>
<button className="px-3 py-1.5 text-xs font-medium rounded-full border border-border hover:bg-white/5 transition-colors">Full-Stack</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<article className="group relative rounded-xl bg-surface border border-border overflow-hidden hover:border-neutral-600 transition-colors">
<div className="aspect-video bg-neutral-900 relative overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/20 to-neutral-900 group-hover:scale-105 transition-transform duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center">
<span className="iconify text-indigo-500/30" data-icon="lucide:line-chart" data-width="64"></span>
</div>
</div>
<div className="p-6 space-y-4">
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-semibold text-white mb-1 group-hover:text-indigo-300 transition-colors">Customer Experience Analytics</h3>
<p className="text-xs text-secondary">Fintech Apps</p>
</div>
<a className="p-2 rounded-full hover:bg-white/10 text-white" href="#"><span className="iconify" data-icon="lucide:arrow-up-right"></span></a>
</div>
<p className="text-sm text-secondary line-clamp-2">
                            A comprehensive dashboard analyzing user behavior patterns using ML clustering to improve retention rates for fintech applications.
                        </p>
<div className="flex gap-2 pt-2">
<span className="px-2 py-1 text-[10px] uppercase tracking-wider rounded border border-white/10 text-neutral-400">Python</span>
<span className="px-2 py-1 text-[10px] uppercase tracking-wider rounded border border-white/10 text-neutral-400">Sklearn</span>
<span className="px-2 py-1 text-[10px] uppercase tracking-wider rounded border border-white/10 text-neutral-400">React</span>
</div>
</div>
</article>

<article className="group relative rounded-xl bg-surface border border-border overflow-hidden hover:border-neutral-600 transition-colors">
<div className="aspect-video bg-neutral-900 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-red-900/20 to-neutral-900 group-hover:scale-105 transition-transform duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center">
<span className="iconify text-red-500/30" data-icon="lucide:shield-alert" data-width="64"></span>
</div>
</div>
<div className="p-6 space-y-4">
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-semibold text-white mb-1 group-hover:text-red-300 transition-colors">Fraud Detection System</h3>
<p className="text-xs text-secondary">E-commerce &amp; Banking</p>
</div>
<a className="p-2 rounded-full hover:bg-white/10 text-white" href="#"><span className="iconify" data-icon="lucide:arrow-up-right"></span></a>
</div>
<p className="text-sm text-secondary line-clamp-2">
                            Real-time transaction monitoring system utilizing anomaly detection algorithms to flag fraudulent activities with 98% accuracy.
                        </p>
<div className="flex gap-2 pt-2">
<span className="px-2 py-1 text-[10px] uppercase tracking-wider rounded border border-white/10 text-neutral-400">TensorFlow</span>
<span className="px-2 py-1 text-[10px] uppercase tracking-wider rounded border border-white/10 text-neutral-400">FastAPI</span>
</div>
</div>
</article>

<article className="group relative rounded-xl bg-surface border border-border overflow-hidden hover:border-neutral-600 transition-colors">
<div className="aspect-video bg-neutral-900 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 to-neutral-900 group-hover:scale-105 transition-transform duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center">
<span className="iconify text-purple-500/30" data-icon="lucide:message-square-code" data-width="64"></span>
</div>
</div>
<div className="p-6 space-y-4">
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-semibold text-white mb-1 group-hover:text-purple-300 transition-colors">RAG Support System</h3>
<p className="text-xs text-secondary">GenAI Solution</p>
</div>
<a className="p-2 rounded-full hover:bg-white/10 text-white" href="#"><span className="iconify" data-icon="lucide:arrow-up-right"></span></a>
</div>
<p className="text-sm text-secondary line-clamp-2">
                            Intelligent customer support bot powered by RAG (Retrieval Augmented Generation) to answer queries based on internal documentation.
                        </p>
<div className="flex gap-2 pt-2">
<span className="px-2 py-1 text-[10px] uppercase tracking-wider rounded border border-white/10 text-neutral-400">LangChain</span>
<span className="px-2 py-1 text-[10px] uppercase tracking-wider rounded border border-white/10 text-neutral-400">OpenAI</span>
<span className="px-2 py-1 text-[10px] uppercase tracking-wider rounded border border-white/10 text-neutral-400">Next.js</span>
</div>
</div>
</article>

<article className="group relative rounded-xl bg-surface border border-border overflow-hidden hover:border-neutral-600 transition-colors">
<div className="aspect-video bg-neutral-900 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/20 to-neutral-900 group-hover:scale-105 transition-transform duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center">
<span className="iconify text-emerald-500/30" data-icon="lucide:activity" data-width="64"></span>
</div>
</div>
<div className="p-6 space-y-4">
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-semibold text-white mb-1 group-hover:text-emerald-300 transition-colors">Disaster Response Platform</h3>
<p className="text-xs text-secondary">Crowdsourced Data</p>
</div>
<a className="p-2 rounded-full hover:bg-white/10 text-white" href="#"><span className="iconify" data-icon="lucide:arrow-up-right"></span></a>
</div>
<p className="text-sm text-secondary line-clamp-2">
                            A platform aggregating crowdsourced data during emergencies, visualizing critical needs and resource allocation on interactive maps.
                        </p>
<div className="flex gap-2 pt-2">
<span className="px-2 py-1 text-[10px] uppercase tracking-wider rounded border border-white/10 text-neutral-400">Maps API</span>
<span className="px-2 py-1 text-[10px] uppercase tracking-wider rounded border border-white/10 text-neutral-400">Node</span>
<span className="px-2 py-1 text-[10px] uppercase tracking-wider rounded border border-white/10 text-neutral-400">MongoDB</span>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-gradient-to-b from-background to-surface/20" id="contact">
<div className="max-w-3xl mx-auto text-center space-y-8">
<h2 className="text-3xl font-semibold text-white tracking-tight">Ready to build something intelligent?</h2>
<p className="text-secondary text-lg leading-relaxed">
                I'm currently looking for new opportunities to apply my skills in Machine Learning and Full-Stack development. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
<div className="flex justify-center gap-6 pt-6">
<a className="group flex items-center gap-3 px-6 py-3 bg-white text-black rounded-lg font-medium hover:scale-105 transition-transform" href="mailto:email@example.com">
<span className="iconify" data-icon="lucide:mail"></span>
<span>Send Email</span>
</a>
<a className="group flex items-center gap-3 px-6 py-3 border border-border rounded-lg font-medium hover:bg-white/5 transition-colors" href="#">
<span className="iconify" data-icon="lucide:calendar"></span>
<span>Book a Call</span>
</a>
</div>
<div className="flex justify-center items-center gap-8 pt-12 opacity-60">
<a className="hover:text-white hover:opacity-100 transition-all flex flex-col items-center gap-2" href="#">
<span className="iconify" data-icon="lucide:github" data-width="24"></span>
<span className="text-xs">GitHub</span>
</a>
<a className="hover:text-white hover:opacity-100 transition-all flex flex-col items-center gap-2" href="#">
<span className="iconify" data-icon="lucide:linkedin" data-width="24"></span>
<span className="text-xs">LinkedIn</span>
</a>
<a className="hover:text-white hover:opacity-100 transition-all flex flex-col items-center gap-2" href="#">
<span className="iconify" data-icon="lucide:twitter" data-width="24"></span>
<span className="text-xs">Twitter</span>
</a>
</div>
</div>
</section>
<footer className="py-8 text-center text-xs text-neutral-600 border-t border-white/5">
<p>© 2025 Bereket Tadesse. Built with AI &amp; Passion.</p>
</footer>


    </>
  );
}
