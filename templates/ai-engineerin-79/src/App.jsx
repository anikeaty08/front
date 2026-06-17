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



        lucide.createIcons();

        // Simple Intersection Observer for Fade-in animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in-up').forEach((element) => {
            observer.observe(element);
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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/60 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
<i className="w-5 h-5" data-lucide="layers"></i>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-900">Qualwebs</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-blue-600 transition-colors" href="#">Capabilities</a>
<a className="hover:text-blue-600 transition-colors" href="#">About</a>
<a className="hover:text-blue-600 transition-colors" href="#">Our Work</a>
<a className="hover:text-blue-600 transition-colors" href="#">Career</a>
</div>
<a className="group relative px-5 py-2 text-xs font-semibold text-white bg-blue-600 rounded-full overflow-hidden transition-all hover:bg-blue-700 hover:shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:scale-105 active:scale-95" href="#">
<span className="relative z-10 flex items-center gap-2">
                    Let's Talk <i className="w-3 h-3 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</span>
</a>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
<div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
<div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
<div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
</div>
<div className="relative max-w-5xl mx-auto px-6 text-center z-10 fade-in-up">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 border border-slate-200/60 backdrop-blur-sm shadow-sm mb-8 hover:border-blue-200 transition-colors cursor-default">
<i className="w-3 h-3 text-blue-500" data-lucide="sparkles"></i>
<span className="text-xs font-medium text-slate-600 tracking-wide uppercase">Where Technology Meets Purpose</span>
</div>

<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                Build. Scale. <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Transform.</span><br/>
<span className="font-medium text-slate-400 text-4xl md:text-6xl">With AI-Powered Engineering</span>
</h1>

<p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
                A next-generation technology partner helping enterprises ship faster, automate smarter, and innovate with confidence.
            </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="group px-8 py-4 bg-slate-900 text-white rounded-full font-medium text-sm transition-all hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-900/20 hover:-translate-y-0.5 flex items-center gap-2">
                    Start Your Transformation
                    <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</section>

<section className="py-24 bg-white relative">
<div className="max-w-4xl mx-auto px-6 text-center fade-in-up">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight leading-tight text-slate-900">
                Digital transformation without the complexity.<br/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 animate-pulse">Outcomes without the uncertainty.</span>
</h2>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 fade-in-up">
<div>
<div className="flex items-center gap-2 mb-4 text-blue-600 font-medium text-sm">
<i className="w-4 h-4" data-lucide="zap"></i>
<span>Proven results through AI</span>
</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">What we build for your<br/>digital future</h2>
</div>
<div className="mt-6 md:mt-0 max-w-md text-slate-500 text-base leading-relaxed">
                    We design human-centered, scalable products—from strategy to launch—powered by modern engineering and AI-driven execution.
                    <div className="mt-4">
<a className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors group" href="#">
                            Explore capabilities <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[500px] fade-in-up">

<div className="col-span-1 md:col-span-5 bg-slate-900 rounded-3xl p-8 relative overflow-hidden group hover:shadow-2xl hover:shadow-blue-900/20 transition-all duration-500 cursor-pointer">

<div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-700">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full blur-[100px] animate-pulse"></div>
</div>

<div className="relative z-10 h-full flex flex-col justify-end">
<div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
<i className="w-5 h-5" data-lucide="brain-circuit"></i>
</div>
<h3 className="text-2xl font-semibold text-white mb-2">AI Applications</h3>
<p className="text-slate-300 text-sm leading-relaxed">We design human-centered, scalable products—from strategy to launch—powered by modern engineering.</p>
<div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
<div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white backdrop-blur-sm">
<i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-7 grid grid-cols-2 md:grid-cols-5 gap-3">

<div className="group relative bg-white rounded-2xl border border-slate-200 p-4 flex flex-col justify-end overflow-hidden hover:border-blue-300 hover:shadow-lg transition-all duration-300 h-64 md:h-full">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<h4 className="relative z-10 text-sm font-semibold text-slate-900 writing-vertical-lr rotate-180 md:rotate-0 md:writing-mode-vertical">Enterprise<br/>Software</h4>
<div className="absolute top-4 right-4 text-slate-300 group-hover:text-blue-600 transition-colors">
<i className="w-5 h-5" data-lucide="building-2"></i>
</div>
</div>

<div className="group relative bg-white rounded-2xl border border-slate-200 p-4 flex flex-col justify-end overflow-hidden hover:border-blue-300 hover:shadow-lg transition-all duration-300 h-64 md:h-full">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<h4 className="relative z-10 text-sm font-semibold text-slate-900">Web &amp; Mobile<br/>Platforms</h4>
<div className="absolute top-4 right-4 text-slate-300 group-hover:text-blue-600 transition-colors">
<i className="w-5 h-5" data-lucide="smartphone"></i>
</div>
</div>

<div className="group relative bg-white rounded-2xl border border-slate-200 p-4 flex flex-col justify-end overflow-hidden hover:border-blue-300 hover:shadow-lg transition-all duration-300 h-64 md:h-full">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<h4 className="relative z-10 text-sm font-semibold text-slate-900">Cloud<br/>Modernization</h4>
<div className="absolute top-4 right-4 text-slate-300 group-hover:text-blue-600 transition-colors">
<i className="w-5 h-5" data-lucide="cloud"></i>
</div>
</div>

<div className="group relative bg-white rounded-2xl border border-slate-200 p-4 flex flex-col justify-end overflow-hidden hover:border-blue-300 hover:shadow-lg transition-all duration-300 h-64 md:h-full">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<h4 className="relative z-10 text-sm font-semibold text-slate-900">Data<br/>Engineering</h4>
<div className="absolute top-4 right-4 text-slate-300 group-hover:text-blue-600 transition-colors">
<i className="w-5 h-5" data-lucide="database"></i>
</div>
</div>

<div className="group relative bg-white rounded-2xl border border-slate-200 p-4 flex flex-col justify-end overflow-hidden hover:border-blue-300 hover:shadow-lg transition-all duration-300 h-64 md:h-full">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<h4 className="relative z-10 text-sm font-semibold text-slate-900">Automation<br/>Systems</h4>
<div className="absolute top-4 right-4 text-slate-300 group-hover:text-blue-600 transition-colors">
<i className="w-5 h-5" data-lucide="cpu"></i>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-50/50 via-transparent to-transparent"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center fade-in-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 mb-6">
<i className="w-3 h-3 text-indigo-500" data-lucide="network"></i>
<span className="text-xs font-medium text-slate-600">Connected by AI Intelligence</span>
</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-16">Intelligence that accelerates what matters</h2>

<div className="relative w-full max-w-4xl mx-auto aspect-[16/9] md:aspect-[2/1] flex items-center justify-center">

<div className="absolute w-[600px] h-[600px] border border-slate-100 rounded-full animate-[spin_60s_linear_infinite]"></div>
<div className="absolute w-[400px] h-[400px] border border-slate-200 rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>
<div className="absolute w-[250px] h-[250px] border border-blue-100 rounded-full animate-[spin_20s_linear_infinite]"></div>

<div className="relative w-24 h-24 bg-white rounded-3xl shadow-[0_0_50px_rgba(59,130,246,0.3)] flex items-center justify-center z-20 border border-blue-100">
<div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl opacity-50"></div>
<i className="w-10 h-10 text-blue-600 relative z-10" data-lucide="brain"></i>

<div className="absolute inset-0 rounded-3xl bg-blue-400 opacity-20 animate-ping"></div>
</div>


<div className="absolute top-[20%] left-[25%] p-3 bg-white rounded-xl shadow-sm border border-slate-100 text-orange-500 hover:scale-110 transition-transform"><i className="w-5 h-5" data-lucide="flame"></i></div> 
<div className="absolute top-[20%] right-[25%] p-3 bg-white rounded-xl shadow-sm border border-slate-100 text-blue-500 hover:scale-110 transition-transform"><i className="w-5 h-5" data-lucide="code-2"></i></div> 
<div className="absolute bottom-[20%] left-[30%] p-3 bg-white rounded-xl shadow-sm border border-slate-100 text-green-500 hover:scale-110 transition-transform"><i className="w-5 h-5" data-lucide="server"></i></div> 
<div className="absolute bottom-[20%] right-[30%] p-3 bg-white rounded-xl shadow-sm border border-slate-100 text-cyan-500 hover:scale-110 transition-transform"><i className="w-5 h-5" data-lucide="container"></i></div> 
<div className="absolute top-[50%] left-[10%] p-3 bg-white rounded-xl shadow-sm border border-slate-100 text-indigo-500 hover:scale-110 transition-transform"><i className="w-5 h-5" data-lucide="database"></i></div> 
<div className="absolute top-[50%] right-[10%] p-3 bg-white rounded-xl shadow-sm border border-slate-100 text-pink-500 hover:scale-110 transition-transform"><i className="w-5 h-5" data-lucide="figma"></i></div> 

<svg className="absolute inset-0 w-full h-full pointer-events-none stroke-slate-200" style={{zIndex: '0'}}>
<line strokeWidth="1" x1="50%" x2="25%" y1="50%" y2="20%"></line>
<line strokeWidth="1" x1="50%" x2="75%" y1="50%" y2="20%"></line>
<line strokeWidth="1" x1="50%" x2="30%" y1="50%" y2="80%"></line>
<line strokeWidth="1" x1="50%" x2="70%" y1="50%" y2="80%"></line>
<line strokeWidth="1" x1="50%" x2="10%" y1="50%" y2="50%"></line>
<line strokeWidth="1" x1="50%" x2="90%" y1="50%" y2="50%"></line>
</svg>
</div>
</div>
</section>

<section className="py-20 bg-slate-50">
<div className="max-w-7xl mx-auto px-6 text-center fade-in-up">
<h3 className="text-lg font-medium text-slate-500 mb-12">Recognized &amp; Trusted by Global Companies</h3>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center opacity-70">

<div className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 cursor-default group">
<div className="flex items-center gap-2 text-slate-800 font-bold text-lg group-hover:text-blue-600">
<i className="w-6 h-6 fill-current" data-lucide="hexagon"></i> Acme Corp
                    </div>
</div>
<div className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 cursor-default group">
<div className="flex items-center gap-2 text-slate-800 font-bold text-lg group-hover:text-blue-600">
<i className="w-6 h-6 fill-current" data-lucide="triangle"></i> Vertex
                    </div>
</div>
<div className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 cursor-default group">
<div className="flex items-center gap-2 text-slate-800 font-bold text-lg group-hover:text-blue-600">
<i className="w-6 h-6 fill-current" data-lucide="circle"></i> Orbit
                    </div>
</div>
<div className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 cursor-default group">
<div className="flex items-center gap-2 text-slate-800 font-bold text-lg group-hover:text-blue-600">
<i className="w-6 h-6 fill-current" data-lucide="square"></i> BlockSys
                    </div>
</div>
<div className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 cursor-default group">
<div className="flex items-center gap-2 text-slate-800 font-bold text-lg group-hover:text-blue-600">
<i className="w-6 h-6 fill-current" data-lucide="diamond"></i> Prism
                    </div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">

<div className="flex flex-col md:flex-row gap-12 mb-12 fade-in-up">
<div className="md:w-1/3">
<div className="flex items-center gap-2 mb-4">
<span className="text-blue-600 bg-blue-50 px-2 py-0.5 rounded text-xs font-semibold uppercase tracking-wider">Since 2015</span>
</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
                        We are <span className="text-blue-600">Qualwebs</span>
</h2>
</div>
<div className="md:w-2/3">
<p className="text-lg text-slate-600 leading-relaxed border-l-2 border-blue-100 pl-6">
                        Our mission is to create reliable, scalable, and innovative digital solutions for our global partners. We focus on future-ready technologies that enable long-term value and competitive advantage.
                    </p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-4 fade-in-up">

<div className="md:col-span-1 bg-slate-50 rounded-2xl p-6 border border-slate-100 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
<div className="mb-4">
<i className="w-8 h-8 text-blue-200 fill-current" data-lucide="quote"></i>
</div>
<div>
<p className="text-sm font-medium text-slate-700 italic mb-4">"Qualwebs enabled us to accelerate our digital roadmap by 3x."</p>
<div className="text-xs text-slate-500">
<strong>CTO</strong>, Global Fintech
                        </div>
</div>
<div className="mt-6 flex justify-end">
<div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 cursor-pointer hover:bg-blue-600 hover:text-white transition-colors">
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</div>
</div>
</div>

<div className="bg-blue-600 rounded-2xl p-6 text-white flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300 shadow-xl shadow-blue-900/10">
<div className="flex justify-between items-start">
<span className="text-sm font-medium opacity-80">Team Strength</span>
<i className="w-5 h-5 opacity-60" data-lucide="users"></i>
</div>
<div className="mt-8">
<span className="text-4xl font-bold tracking-tight">120+</span>
</div>
</div>

<div className="bg-gradient-to-br from-blue-700 to-indigo-700 rounded-2xl p-6 text-white flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300 shadow-xl shadow-blue-900/10">
<div className="flex justify-between items-start">
<span className="text-sm font-medium opacity-80">Client Retention</span>
<i className="w-5 h-5 opacity-60" data-lucide="heart-handshake"></i>
</div>
<div className="mt-8">
<span className="text-4xl font-bold tracking-tight">97<span className="text-2xl font-medium opacity-70">%</span></span>
</div>
</div>


<div className="md:col-span-1 flex flex-col gap-4">
<div className="flex-1 bg-indigo-600 rounded-2xl p-6 text-white flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300">
<div className="flex justify-between items-start">
<span className="text-sm font-medium opacity-80">Projects Delivered</span>
<i className="w-5 h-5 opacity-60" data-lucide="globe"></i>
</div>
<span className="text-3xl font-bold tracking-tight mt-2">250+</span>
</div>
<div className="flex-1 bg-indigo-500 rounded-2xl p-6 text-white flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300">
<div className="flex justify-between items-start">
<span className="text-sm font-medium opacity-80">Years in Business</span>
<i className="w-5 h-5 opacity-60" data-lucide="hourglass"></i>
</div>
<span className="text-3xl font-bold tracking-tight mt-2">10+</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 fade-in-up">
<div className="inline-block px-3 py-1 rounded-full bg-white border border-slate-200 mb-4 shadow-sm">
<span className="text-xs font-medium text-slate-500">Powered by Intelligent Engineering</span>
</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Explore solutions that lead the next tech era</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 fade-in-up">

<div className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:border-slate-300 transition-all duration-300 cursor-pointer">
<div className="h-48 bg-slate-100 relative overflow-hidden flex items-center justify-center p-8">
<img alt="Tech Dashboard" className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-slate-900/5 group-hover:bg-slate-900/0 transition-colors"></div>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
<i className="w-4 h-4 text-slate-900" data-lucide="arrow-up-right"></i>
</div>
</div>
<div className="p-6">
<div className="flex items-center gap-2 mb-3">
<i className="w-4 h-4 text-slate-400" data-lucide="box"></i>
<span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Logistics</span>
</div>
<h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">Internal Workflow Automation</h3>
<p className="text-sm text-slate-500 leading-relaxed">AI-assisted automation reduced processing time and improved delivery metrics by 40%.</p>
</div>
</div>

<div className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:border-slate-300 transition-all duration-300 cursor-pointer">
<div className="h-48 bg-slate-100 relative overflow-hidden flex items-center justify-center p-8">
<img alt="Fintech App" className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-slate-900/5 group-hover:bg-slate-900/0 transition-colors"></div>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
<i className="w-4 h-4 text-slate-900" data-lucide="arrow-up-right"></i>
</div>
</div>
<div className="p-6">
<div className="flex items-center gap-2 mb-3">
<i className="w-4 h-4 text-slate-400" data-lucide="bar-chart-3"></i>
<span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Fintech</span>
</div>
<h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">Predictive Analytics Dashboard</h3>
<p className="text-sm text-slate-500 leading-relaxed">Custom analytics engine automating key financial processes and reducing manual effort.</p>
</div>
</div>

<div className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:border-slate-300 transition-all duration-300 cursor-pointer">
<div className="h-48 bg-slate-100 relative overflow-hidden flex items-center justify-center p-8">
<img alt="Cloud Infrastructure" className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-slate-900/5 group-hover:bg-slate-900/0 transition-colors"></div>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
<i className="w-4 h-4 text-slate-900" data-lucide="arrow-up-right"></i>
</div>
</div>
<div className="p-6">
<div className="flex items-center gap-2 mb-3">
<i className="w-4 h-4 text-slate-400" data-lucide="server-cog"></i>
<span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Infrastructure</span>
</div>
<h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">Legacy Modernization</h3>
<p className="text-sm text-slate-500 leading-relaxed">Modernized architecture improved reliability and shortened release cycles by 60%.</p>
</div>
</div>
</div>
<div className="mt-12 flex justify-between items-center border-t border-slate-200 pt-8 fade-in-up">
<span className="text-sm text-slate-500">Explore the work we are delivering with forward-thinking companies.</span>
<a className="px-5 py-2 rounded-lg bg-blue-50 text-blue-600 font-medium text-sm hover:bg-blue-100 transition-colors flex items-center gap-2" href="#">
                    Show more case studies <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</section>

<footer className="bg-slate-900 text-slate-400 py-16 text-sm">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
<div className="lg:col-span-2">
<div className="flex items-center gap-2 text-white font-bold text-xl mb-4">
<i className="w-6 h-6 text-blue-500" data-lucide="layers"></i> Qualwebs
                    </div>
<p className="max-w-xs leading-relaxed mb-6">
                        Engineering the future of digital business with intelligence, precision, and speed.
                    </p>
<button className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-md font-medium transition-colors">Contact Us</button>
</div>
<div>
<h4 className="text-white font-semibold mb-4">Services</h4>
<ul className="space-y-2">
<li><a className="hover:text-white transition-colors" href="#">Cloud Infrastructure</a></li>
<li><a className="hover:text-white transition-colors" href="#">Digital Security</a></li>
<li><a className="hover:text-white transition-colors" href="#">Generative AI</a></li>
<li><a className="hover:text-white transition-colors" href="#">Platform Management</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-4">About Us</h4>
<ul className="space-y-2">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Our Work</a></li>
<li><a className="hover:text-white transition-colors" href="#">Career</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact us</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-4">Offices</h4>
<ul className="space-y-2">
<li>USA</li>
<li>UAE</li>
<li>IND</li>
<li>AUS</li>
</ul>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-xs text-slate-500">
                    © 2024 Qualwebs. All rights reserved.
                </div>
<div className="flex gap-4 items-center">
<div className="flex gap-2 text-[10px] font-medium text-slate-500 uppercase tracking-wider">
<span className="flex items-center gap-1"><i className="w-3 h-3 text-green-500" data-lucide="check-circle"></i> CMMI Level 5</span>
<span className="flex items-center gap-1"><i className="w-3 h-3 text-green-500" data-lucide="check-circle"></i> ISO 27001:2013</span>
<span className="flex items-center gap-1"><i className="w-3 h-3 text-green-500" data-lucide="check-circle"></i> ISO 9001:2015</span>
</div>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="instagram"></i></a>
<a className="hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="facebook"></i></a>
<a className="hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="linkedin"></i></a>
</div>
</div>
</div>
</div>
</footer>



    </>
  );
}
