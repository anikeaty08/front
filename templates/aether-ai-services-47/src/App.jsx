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
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
neutral: {
850: '#1a1a1a',
900: '#171717',
950: '#0a0a0a',
}
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
}
}
}
}

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
      

<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<span className="group-hover:text-indigo-400 transition-colors text-xl font-medium text-white tracking-tighter">Ezibell Tech</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-normal text-neutral-400">
<a className="hover:text-white transition-colors" href="#services">Solutions</a>
<a className="hover:text-white transition-colors" href="#expertise">Expertise</a>
<a className="hover:text-white transition-colors" href="#process">Methodology</a>
</div>
<a className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-white hover:bg-white/10 hover:border-white/20 transition-all focus:ring-2 focus:ring-indigo-500/50 outline-none" href="#contact">
                Start Project
                <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>

<button className="md:hidden text-neutral-400 hover:text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:menu" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</nav>

<section className="md:pt-48 md:pb-32 overflow-hidden pt-32 pr-6 pb-20 pl-6 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-600/20 opacity-30 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                Next-Gen Engineering &amp; AI
            </div>
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight mb-6 leading-[1.1]">
                Architecting the <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-white">Intelligent Future.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                We build scalable digital ecosystems. From Generative AI Agents to robust Cloud Infrastructure, we transform complex challenges into elegant software.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-3 bg-white text-neutral-950 rounded-lg text-sm font-medium hover:bg-neutral-200 transition-colors">
                    Explore Services
                </button>
<button className="w-full sm:w-auto px-8 py-3 bg-neutral-900 border border-neutral-800 text-white rounded-lg text-sm font-medium hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:message-square" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                    Book Consultation
                </button>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="services">
<div className="max-w-7xl mr-auto ml-auto">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Our Expertise</h2>
<p className="text-neutral-400 max-w-xl text-lg font-light">Comprehensive technical solutions designed for scalability, security, and innovation.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative p-8 rounded-2xl bg-neutral-900/40 border border-white/5 hover:border-indigo-500/30 transition-all duration-500 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform duration-500">
<svg aria-hidden="true" className="iconify text-indigo-400 iconify--lucide" data-icon="lucide:bot" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2m16 0h2m-7-1v2m-6-2v2"></path></g></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">AI Agents</h3>
<p className="text-sm text-neutral-400 leading-relaxed font-light">Autonomous intelligent agents designed to automate complex workflows, customer service, and decision-making processes.</p>
</div>
</div>

<div className="group relative p-8 rounded-2xl bg-neutral-900/40 border border-white/5 hover:border-indigo-500/30 transition-all duration-500 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform duration-500">
<svg aria-hidden="true" className="iconify text-purple-400 iconify--lucide" data-icon="lucide:database-zap" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5v14a9 3 0 0 0 12 2.84M21 5v3m0 4l-3 5h4l-3 5"></path><path d="M3 12a9 3 0 0 0 11.59 2.87"></path></g></svg>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-3">RAG Systems</h3>
<p className="text-sm text-neutral-400 leading-relaxed font-light">Retrieval-Augmented Generation architectures that connect LLMs to your private data for accurate, context-aware insights.</p>
</div>
</div>

<div className="group relative p-8 rounded-2xl bg-neutral-900/40 border border-white/5 hover:border-indigo-500/30 transition-all duration-500 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform duration-500">
<svg aria-hidden="true" className="iconify text-pink-400 iconify--lucide" data-icon="lucide:rocket" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0m1 7v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></g></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">MicroSaaS Development</h3>
<p className="text-sm text-neutral-400 leading-relaxed font-light">Rapid MVP development and scalable architecture for niche software-as-a-service products.</p>
</div>
</div>

<div className="group relative p-8 rounded-2xl bg-neutral-900/40 border border-white/5 hover:border-indigo-500/30 transition-all duration-500 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform duration-500">
<svg aria-hidden="true" className="iconify text-blue-400 iconify--lucide" data-icon="lucide:layout-template" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="7" rx="1" width="18" x="3" y="3"></rect><rect height="7" rx="1" width="9" x="3" y="14"></rect><rect height="7" rx="1" width="5" x="16" y="14"></rect></g></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Web Development</h3>
<p className="text-sm text-neutral-400 leading-relaxed font-light">High-performance React &amp; Next.js applications with modern architecture and seamless interactivity.</p>
</div>
</div>

<div className="group relative p-8 rounded-2xl bg-neutral-900/40 border border-white/5 hover:border-indigo-500/30 transition-all duration-500 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform duration-500">
<svg aria-hidden="true" className="iconify text-teal-400 iconify--lucide" data-icon="lucide:smartphone" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></g></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Mobile App</h3>
<p className="text-sm text-neutral-400 leading-relaxed font-light">Native and Cross-platform mobile solutions (React Native) designed for intuitive user experiences on iOS and Android.</p>
</div>
</div>

<div className="group relative p-8 rounded-2xl bg-neutral-900/40 border border-white/5 hover:border-indigo-500/30 transition-all duration-500 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform duration-500">
<svg aria-hidden="true" className="iconify text-cyan-400 iconify--lucide" data-icon="lucide:cloud" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Cloud &amp; DevOps</h3>
<p className="text-sm text-neutral-400 leading-relaxed font-light">Scalable infrastructure, CI/CD pipelines, and serverless architectures on AWS, Azure, and Google Cloud.</p>
</div>
</div>

<div className="group relative p-8 rounded-2xl bg-neutral-900/40 border border-white/5 hover:border-indigo-500/30 transition-all duration-500 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform duration-500">
<svg aria-hidden="true" className="iconify text-red-400 iconify--lucide" data-icon="lucide:shield-check" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Security &amp; Compliance</h3>
<p className="text-sm text-neutral-400 leading-relaxed font-light">End-to-end security auditing, penetration testing, and compliance implementation (SOC2, HIPAA).</p>
</div>
</div>

<div className="group relative p-8 rounded-2xl bg-neutral-900/40 border border-white/5 hover:border-indigo-500/30 transition-all duration-500 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform duration-500">
<svg aria-hidden="true" className="iconify text-amber-400 iconify--lucide" data-icon="lucide:bar-chart-3" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18m-3-4V9m-5 8V5M8 17v-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Data &amp; Analytics</h3>
<p className="text-sm text-neutral-400 leading-relaxed font-light">Data warehousing, ETL pipelines, and advanced analytics dashboards to drive business intelligence.</p>
</div>
</div>

<div className="group relative p-8 rounded-2xl bg-neutral-900/40 border border-white/5 hover:border-indigo-500/30 transition-all duration-500 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform duration-500">
<svg aria-hidden="true" className="iconify text-emerald-400 iconify--lucide" data-icon="lucide:palette" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 22a1 1 0 0 1 0-20a10 9 0 0 1 10 9a5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></g></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">UI/UX Design</h3>
<p className="text-sm text-neutral-400 leading-relaxed font-light">User-centric design systems, wireframing, and high-fidelity prototyping focused on conversion and usability.</p>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-neutral-900/20 backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center md:text-left">
<div className="text-3xl font-medium text-white tracking-tight mb-1">98%</div>
<div className="text-xs text-neutral-500 uppercase tracking-widest font-medium">CSAT Score</div>
</div>
<div className="text-center md:text-left">
<div className="text-3xl font-medium text-white tracking-tight mb-1">50+</div>
<div className="text-xs text-neutral-500 uppercase tracking-widest font-medium">AI Models Deployed</div>
</div>
<div className="text-center md:text-left">
<div className="text-3xl font-medium text-white tracking-tight mb-1">24/7</div>
<div className="text-xs text-neutral-500 uppercase tracking-widest font-medium">DevOps Support</div>
</div>
<div className="text-center md:text-left">
<div className="text-3xl font-medium text-white tracking-tight mb-1">ISO</div>
<div className="text-xs text-neutral-500 uppercase tracking-widest font-medium">Certified Security</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative" id="contact">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-6">Ready to scale your vision?</h2>
<p className="text-lg text-neutral-400 mb-10 max-w-xl mx-auto font-light">Join forward-thinking companies building the next generation of software with AETHER.</p>
<form className="max-w-md mx-auto space-y-4 text-left">
<div>
<label className="sr-only" htmlFor="email">Email</label>
<input className="w-full bg-neutral-900/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-transparent transition-all" id="email" placeholder="Enter your work email" type="email"/>
</div>
<button className="w-full bg-white text-neutral-950 font-medium py-3 rounded-lg hover:bg-neutral-200 transition-colors flex justify-center items-center gap-2 group" type="button">
                    Start Conversation
                    <svg aria-hidden="true" className="iconify group-hover:translate-x-1 transition-transform iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<p className="text-xs text-center text-neutral-500 mt-4">No spam. Unsubscribe anytime.</p>
</form>
</div>
</section>

<footer className="border-t border-white/5 py-12 px-6 bg-neutral-950">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="text-lg font-medium tracking-tighter text-white">AETHER</span>
<span className="text-xs text-neutral-600 ml-2">© 2024</span>
</div>
<div className="flex gap-6">
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:twitter" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:github" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5c.08-1.25-.27-2.48-1-3.5c.28-1.15.28-2.35 0-3.5c0 0-1 0-3 1.5c-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5c-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></g></svg>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:linkedin" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></g></svg>
</a>
</div>
</div>
</footer>

    </>
  );
}
