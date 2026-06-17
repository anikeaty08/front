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



        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('nav');
            if (window.scrollY > 50) {
                nav.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
            } else {
                nav.style.boxShadow = 'none';
            }
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
      

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-100/50" style={{background: 'rgba(255, 255, 255, 0.85)', backdropFilter: 'blur(20px)'}}>
<div className="max-w-7xl mx-auto px-6 py-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{background: 'linear-gradient(135deg, #2563eb 0%, #0891b2 100%)'}}>
<span className="text-white font-bold text-sm tracking-tighter">F1</span>
</div>
<span className="font-semibold text-slate-900 tracking-tight">Facilitator One</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-slate-600 hover:text-slate-900 transition-colors" href="#services">Services</a>
<a className="text-sm text-slate-600 hover:text-slate-900 transition-colors" href="#design-phase">Design Phase</a>
<a className="text-sm text-slate-600 hover:text-slate-900 transition-colors" href="#construction-phase">Construction</a>
<a className="text-sm text-slate-600 hover:text-slate-900 transition-colors" href="#technology">Technology</a>
</div>
<div className="flex items-center gap-3">
<a className="hidden sm:flex text-white text-sm font-medium px-5 py-2.5 rounded-xl items-center gap-2 transition-all hover:shadow-lg" href="#contact" style={{background: 'linear-gradient(135deg, #2563eb 0%, #0891b2 100%)'}}>
                        Schedule a Meeting
                        <span className="iconify" data-icon="lucide:calendar" data-width="16" style={{strokeWidth: '1.5'}}></span>
</a>
<button className="lg:hidden p-2 text-slate-600 hover:text-slate-900">
<span className="iconify" data-icon="lucide:menu" data-width="24" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center pt-20 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Construction Site" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&amp;q=80"/>
<div className="absolute inset-0" style={{background: 'linear-gradient(135deg, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.92) 50%, rgba(240,249,255,0.95) 100%)'}}></div>
</div>

<div className="absolute top-20 right-10 w-72 h-72 rounded-full blur-3xl animate-pulse" style={{background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(6, 182, 212, 0.15))'}}></div>
<div className="absolute bottom-20 left-10 w-96 h-96 rounded-full blur-3xl" style={{background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.1))'}}></div>
<div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>

<div className="inline-flex items-center gap-3 bg-white/80 rounded-full px-5 py-2.5 mb-8 shadow-lg border border-slate-100" style={{backdropFilter: 'blur(10px)'}}>
<div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-xs text-slate-500 uppercase tracking-wider font-medium">Presented to</span>
<span className="text-sm font-semibold text-slate-800">McKIM &amp; CREED</span>
<span className="text-xs text-slate-400">|</span>
<span className="text-sm text-slate-600">Water Business Unit</span>
</div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight leading-tight mb-6">
                        Engineering &amp;<br/>Construction
                        <span className="block mt-2" style={{background: 'linear-gradient(135deg, #1e40af 0%, #0891b2 50%, #059669 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>Support Services</span>
</h1>
<p className="text-xl md:text-2xl text-blue-600 font-medium mb-6 flex items-center gap-3">
<span className="w-12 h-0.5" style={{background: 'linear-gradient(90deg, #2563eb, #06b6d4)'}}></span>
                        We operate as an extension of your team.
                    </p>
<p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
                        Facilitator One partners with engineering firms to support projects from early design through construction and closeout. We provide field presence, documentation structure, regulatory awareness, and system-level visibility.
                    </p>
<div className="flex flex-wrap gap-3 mb-10">
<span className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
<span className="iconify" data-icon="lucide:check" data-width="16" style={{strokeWidth: '1.5'}}></span>
                            Clarity
                        </span>
<span className="inline-flex items-center gap-2 bg-cyan-50 text-cyan-700 px-4 py-2 rounded-full text-sm font-medium">
<span className="iconify" data-icon="lucide:check" data-width="16" style={{strokeWidth: '1.5'}}></span>
                            Accountability
                        </span>
<span className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium">
<span className="iconify" data-icon="lucide:check" data-width="16" style={{strokeWidth: '1.5'}}></span>
                            Execution
                        </span>
</div>
<div className="flex flex-wrap gap-4">
<a className="text-white font-medium px-8 py-4 rounded-xl flex items-center gap-3 text-base transition-all hover:shadow-xl" href="#services" style={{background: 'linear-gradient(135deg, #2563eb 0%, #0891b2 100%)'}}>
                            Explore Services
                            <span className="iconify" data-icon="lucide:chevron-down" data-width="20" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="bg-white hover:bg-slate-50 text-slate-800 font-medium px-8 py-4 rounded-xl border border-slate-200 transition-all hover:shadow-lg flex items-center gap-3 text-base hover:border-slate-300" href="#contact">
<span className="iconify" data-icon="lucide:calendar" data-width="20" style={{strokeWidth: '1.5'}}></span>
                            Schedule a Meeting
                        </a>
</div>
</div>

<div className="relative hidden lg:block">
<div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'}}>
<img alt="Engineering Team" className="w-full h-96 object-cover" src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&amp;q=80"/>
<div className="absolute inset-0" style={{background: 'linear-gradient(to top, rgba(15, 23, 42, 0.8) 0%, transparent 60%)'}}></div>
<div className="absolute bottom-0 left-0 right-0 p-8">
<div className="flex items-center gap-4 mb-4">
<div className="flex -space-x-3">
<img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&amp;q=80"/>
<img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&amp;q=80"/>
<img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;q=80"/>
</div>
<span className="text-white/80 text-sm">Expert Team Members</span>
</div>
<p className="text-white text-lg font-medium">Trusted by 50+ agencies across the nation</p>
</div>
</div>

<div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-slate-100">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{background: 'linear-gradient(135deg, #10b981, #059669)'}}>
<span className="iconify text-white" data-icon="lucide:trending-up" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<p className="text-xs text-slate-500">Project Success Rate</p>
<p className="text-2xl font-bold text-slate-900">99.2%</p>
</div>
</div>
</div>

<div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 border border-slate-100">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full flex items-center justify-center" style={{background: 'linear-gradient(135deg, #3b82f6, #2563eb)'}}>
<span className="iconify text-white" data-icon="lucide:shield-check" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<p className="text-xs text-slate-500">Certified</p>
<p className="text-sm font-semibold text-slate-900">ISO 9001</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2">
<div className="w-6 h-10 rounded-full border-2 border-slate-300 flex items-start justify-center p-2">
<div className="w-1.5 h-3 bg-slate-400 rounded-full animate-pulse"></div>
</div>
</div>
</section>

<section className="py-16 bg-slate-900 relative overflow-hidden">
<div className="absolute inset-0" style={{background: 'linear-gradient(90deg, rgba(37, 99, 235, 0.1), transparent, rgba(6, 182, 212, 0.1))'}}></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center">
<div className="text-4xl md:text-5xl font-bold text-white mb-2">15+</div>
<p className="text-slate-400 text-sm">Years Experience</p>
</div>
<div className="text-center">
<div className="text-4xl md:text-5xl font-bold text-white mb-2">200+</div>
<p className="text-slate-400 text-sm">Projects Completed</p>
</div>
<div className="text-center">
<div className="text-4xl md:text-5xl font-bold text-white mb-2">50+</div>
<p className="text-slate-400 text-sm">Agency Partners</p>
</div>
<div className="text-center">
<div className="text-4xl md:text-5xl font-bold text-white mb-2">99%</div>
<p className="text-slate-400 text-sm">Client Satisfaction</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="services" style={{background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)'}}>
<div className="absolute top-0 left-0 right-0 h-px" style={{background: 'linear-gradient(90deg, transparent, #e2e8f0, transparent)'}}></div>
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
<div>
<div className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-4 py-2 mb-6">
<div className="w-2 h-2 rounded-full bg-blue-500"></div>
<span className="text-blue-700 font-medium text-sm">Strategic Alignment</span>
</div>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight mb-6">
                        How We Support<br/><span style={{background: 'linear-gradient(135deg, #1e40af 0%, #0891b2 50%, #059669 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>Engineering Firms</span>
</h2>
<p className="text-lg text-slate-600 leading-relaxed">
                        We integrate seamlessly with your existing workflows to enhance efficiency, reduce overhead, and deliver exceptional results across every project phase.
                    </p>
</div>
<div className="relative">
<img alt="Team Collaboration" className="rounded-2xl shadow-xl w-full h-80 object-cover" src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=800&amp;q=80"/>
<div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-slate-100">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)'}}>
<span className="iconify text-white" data-icon="lucide:users" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<p className="text-sm font-semibold text-slate-900">Seamless Integration</p>
<p className="text-xs text-slate-500">With your existing team</p>
</div>
</div>
</div>
</div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="bg-white rounded-2xl p-8 border border-slate-100 hover:shadow-xl hover:border-transparent transition-all duration-300 group">
<div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg transition-transform group-hover:scale-110" style={{background: 'linear-gradient(135deg, #3b82f6, #2563eb)', boxShadow: '0 10px 30px -10px rgba(59, 130, 246, 0.5)'}}>
<span className="iconify text-white" data-icon="lucide:users" data-width="28" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Reduce Burden</h3>
<p className="text-slate-600 text-sm leading-relaxed">
                        Reduce administrative and coordination burden on your engineering teams, letting them focus on what matters most.
                    </p>
</div>
<div className="bg-white rounded-2xl p-8 border border-slate-100 hover:shadow-xl hover:border-transparent transition-all duration-300 group">
<div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg transition-transform group-hover:scale-110" style={{background: 'linear-gradient(135deg, #06b6d4, #0891b2)', boxShadow: '0 10px 30px -10px rgba(6, 182, 212, 0.5)'}}>
<span className="iconify text-white" data-icon="lucide:shield-check" data-width="28" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Documentation Quality</h3>
<p className="text-slate-600 text-sm leading-relaxed">
                        Improve documentation quality, compliance, and transparency across all project phases with systematic processes.
                    </p>
</div>
<div className="bg-white rounded-2xl p-8 border border-slate-100 hover:shadow-xl hover:border-transparent transition-all duration-300 group">
<div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg transition-transform group-hover:scale-110" style={{background: 'linear-gradient(135deg, #6366f1, #4f46e5)', boxShadow: '0 10px 30px -10px rgba(99, 102, 241, 0.5)'}}>
<span className="iconify text-white" data-icon="lucide:globe" data-width="28" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Strengthen Alignment</h3>
<p className="text-slate-600 text-sm leading-relaxed">
                        Strengthen alignment between design, construction, and regulatory requirements for seamless project delivery.
                    </p>
</div>
<div className="bg-white rounded-2xl p-8 border border-slate-100 hover:shadow-xl hover:border-transparent transition-all duration-300 group">
<div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg transition-transform group-hover:scale-110" style={{background: 'linear-gradient(135deg, #10b981, #059669)', boxShadow: '0 10px 30px -10px rgba(16, 185, 129, 0.5)'}}>
<span className="iconify text-white" data-icon="lucide:box" data-width="28" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Scalable Systems</h3>
<p className="text-slate-600 text-sm leading-relaxed">
                        Provide scalable systems and field support without increasing internal overhead or complexity.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="design-phase">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
<div>
<div className="flex items-center gap-5 mb-6">
<div className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-xl" style={{background: 'linear-gradient(135deg, #3b82f6, #06b6d4)', boxShadow: '0 15px 30px -10px rgba(59, 130, 246, 0.5)'}}>
<span className="text-white font-bold text-3xl">01</span>
</div>
<div>
<span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Phase 1</span>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">
                                During Design Phase
                            </h2>
</div>
</div>
<p className="text-slate-600 text-lg leading-relaxed">
                        Comprehensive support from project inception through design completion, ensuring seamless documentation and coordination across all stakeholders.
                    </p>
</div>
<div className="relative">
<img alt="Design Planning" className="rounded-2xl shadow-lg w-full h-72 object-cover" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&amp;q=80"/>
</div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white rounded-2xl p-8 border border-slate-100 hover:shadow-xl hover:border-transparent transition-all duration-300 relative overflow-hidden group">
<div className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity" style={{background: 'linear-gradient(90deg, #1e40af, #0891b2, #059669)'}}></div>
<div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110" style={{background: 'linear-gradient(135deg, #eff6ff, #dbeafe)'}}>
<span className="iconify text-blue-600" data-icon="lucide:file-text" data-width="26" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-4">Project Documentation</h3>
<ul className="space-y-3 text-sm text-slate-600">
<li className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
<span className="iconify text-blue-600" data-icon="lucide:check" data-width="12" style={{strokeWidth: '3'}}></span>
</div>
                            Development and organization of project manuals
                        </li>
<li className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
<span className="iconify text-blue-600" data-icon="lucide:check" data-width="12" style={{strokeWidth: '3'}}></span>
</div>
                            Version control aligned with agency standards
                        </li>
<li className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
<span className="iconify text-blue-600" data-icon="lucide:check" data-width="12" style={{strokeWidth: '3'}}></span>
</div>
                            Clean transition preparation into construction
                        </li>
</ul>
</div>

<div className="bg-white rounded-2xl p-8 border border-slate-100 hover:shadow-xl hover:border-transparent transition-all duration-300 relative overflow-hidden group">
<div className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity" style={{background: 'linear-gradient(90deg, #1e40af, #0891b2, #059669)'}}></div>
<div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110" style={{background: 'linear-gradient(135deg, #ecfeff, #cffafe)'}}>
<span className="iconify text-cyan-600" data-icon="lucide:book-open" data-width="26" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-4">Meeting Minutes</h3>
<ul className="space-y-3 text-sm text-slate-600">
<li className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0 mt-0.5">
<span className="iconify text-cyan-600" data-icon="lucide:check" data-width="12" style={{strokeWidth: '3'}}></span>
</div>
                            Clear, decision-driven meeting minutes
                        </li>
<li className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0 mt-0.5">
<span className="iconify text-cyan-600" data-icon="lucide:check" data-width="12" style={{strokeWidth: '3'}}></span>
</div>
                            Accurate capture of technical discussions
                        </li>
<li className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0 mt-0.5">
<span className="iconify text-cyan-600" data-icon="lucide:check" data-width="12" style={{strokeWidth: '3'}}></span>
</div>
                            Archival for traceability and reference
                        </li>
</ul>
</div>

<div className="bg-white rounded-2xl p-8 border border-slate-100 hover:shadow-xl hover:border-transparent transition-all duration-300 relative overflow-hidden group">
<div className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity" style={{background: 'linear-gradient(90deg, #1e40af, #0891b2, #059669)'}}></div>
<div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110" style={{background: 'linear-gradient(135deg, #eef2ff, #e0e7ff)'}}>
<span className="iconify text-indigo-600" data-icon="lucide:check-circle" data-width="26" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-4">Action Item Tracking</h3>
<ul className="space-y-3 text-sm text-slate-600">
<li className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0 mt-0.5">
<span className="iconify text-indigo-600" data-icon="lucide:check" data-width="12" style={{strokeWidth: '3'}}></span>
</div>
                            Centralized tracking of open design items
                        </li>
<li className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0 mt-0.5">
<span className="iconify text-indigo-600" data-icon="lucide:check" data-width="12" style={{strokeWidth: '3'}}></span>
</div>
                            Responsible parties and deadlines
                        </li>
<li className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0 mt-0.5">
<span className="iconify text-indigo-600" data-icon="lucide:check" data-width="12" style={{strokeWidth: '3'}}></span>
</div>
                            Prevent unresolved issues from moving forward
                        </li>
</ul>
</div>

<div className="bg-white rounded-2xl p-8 border border-slate-100 hover:shadow-xl hover:border-transparent transition-all duration-300 relative overflow-hidden group">
<div className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity" style={{background: 'linear-gradient(90deg, #1e40af, #0891b2, #059669)'}}></div>
<div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110" style={{background: 'linear-gradient(135deg, #ecfdf5, #d1fae5)'}}>
<span className="iconify text-emerald-600" data-icon="lucide:users" data-width="26" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-4">Project Coordination</h3>
<ul className="space-y-3 text-sm text-slate-600">
<li className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
<span className="iconify text-emerald-600" data-icon="lucide:check" data-width="12" style={{strokeWidth: '3'}}></span>
</div>
                            Coordination between all stakeholders
                        </li>
<li className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
<span className="iconify text-emerald-600" data-icon="lucide:check" data-width="12" style={{strokeWidth: '3'}}></span>
</div>
                            Structured communication to reduce rework
                        </li>
<li className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
<span className="iconify text-emerald-600" data-icon="lucide:check" data-width="12" style={{strokeWidth: '3'}}></span>
</div>
                            Agency-facing coordination support
                        </li>
</ul>
</div>

<div className="bg-white rounded-2xl p-8 border border-slate-100 hover:shadow-xl hover:border-transparent transition-all duration-300 relative overflow-hidden group">
<div className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity" style={{background: 'linear-gradient(90deg, #1e40af, #0891b2, #059669)'}}></div>
<div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110" style={{background: 'linear-gradient(135deg, #fffbeb, #fef3c7)'}}>
<span className="iconify text-amber-600" data-icon="lucide:dollar-sign" data-width="26" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-4">Cost Estimates</h3>
<ul className="space-y-3 text-sm text-slate-600">
<li className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
<span className="iconify text-amber-600" data-icon="lucide:check" data-width="12" style={{strokeWidth: '3'}}></span>
</div>
                            Assistance with cost estimates
                        </li>
<li className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
<span className="iconify text-amber-600" data-icon="lucide:check" data-width="12" style={{strokeWidth: '3'}}></span>
</div>
                            Scope alignment support
                        </li>
<li className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
<span className="iconify text-amber-600" data-icon="lucide:check" data-width="12" style={{strokeWidth: '3'}}></span>
</div>
                            Documentation for approvals and funding
                        </li>
</ul>
</div>

<div className="bg-white rounded-2xl p-8 border border-slate-100 hover:shadow-xl hover:border-transparent transition-all duration-300 relative overflow-hidden group">
<div className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity" style={{background: 'linear-gradient(90deg, #1e40af, #0891b2, #059669)'}}></div>
<div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110" style={{background: 'linear-gradient(135deg, #fff1f2, #fecdd3)'}}>
<span className="iconify text-rose-600" data-icon="lucide:bell" data-width="26" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-4">Community Engagement</h3>
<ul className="space-y-3 text-sm text-slate-600">
<li className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0 mt-0.5">
<span className="iconify text-rose-600" data-icon="lucide:check" data-width="12" style={{strokeWidth: '3'}}></span>
</div>
                            Community outreach strategies
                        </li>
<li className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0 mt-0.5">
<span className="iconify text-rose-600" data-icon="lucide:check" data-width="12" style={{strokeWidth: '3'}}></span>
</div>
                            Public meetings and notifications
                        </li>
<li className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0 mt-0.5">
<span className="iconify text-rose-600" data-icon="lucide:check" data-width="12" style={{strokeWidth: '3'}}></span>
</div>
                            In-house designers for visual materials
                        </li>
</ul>
</div>
</div>

<div className="mt-8 rounded-2xl p-8 border border-slate-100 hover:shadow-xl transition-all overflow-hidden" style={{background: 'linear-gradient(135deg, #f5f3ff 0%, #ffffff 50%, #eff6ff 100%)'}}>
<div className="flex flex-col md:flex-row md:items-center gap-6">
<div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg" style={{background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)', boxShadow: '0 10px 30px -10px rgba(139, 92, 246, 0.5)'}}>
<span className="iconify text-white" data-icon="lucide:users" data-width="28" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="flex-1">
<h3 className="text-xl font-semibold text-slate-900 mb-2">Minority Outreach &amp; Strategic Planning</h3>
<p className="text-slate-600">
                            MWBE participation strategy development, outreach documentation, tracking, compliance reporting, and alignment with agency diversity goals and requirements.
                        </p>
</div>
<div className="flex items-center gap-2 bg-violet-100 text-violet-700 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap">
<span className="iconify" data-icon="lucide:shield" data-width="16" style={{strokeWidth: '1.5'}}></span>
                        Compliance Ready
                    </div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 relative" id="construction-phase">
<div className="absolute top-0 left-0 right-0 h-px" style={{background: 'linear-gradient(90deg, transparent, #e2e8f0, transparent)'}}></div>
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
<div className="relative order-2 lg:order-1">
<img alt="Construction Site" className="rounded-2xl shadow-lg w-full h-72 object-cover" src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&amp;q=80"/>
<div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 border border-slate-100">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{background: 'linear-gradient(135deg, #06b6d4, #0891b2)'}}>
<span className="iconify text-white" data-icon="lucide:hard-hat" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<p className="text-sm font-semibold text-slate-900">On-Site Support</p>
<p className="text-xs text-slate-500">Daily presence &amp; oversight</p>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<div className="flex items-center gap-5 mb-6">
<div className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-xl" style={{background: 'linear-gradient(135deg, #06b6d4, #10b981)', boxShadow: '0 15px 30px -10px rgba(6, 182, 212, 0.5)'}}>
<span className="text-white font-bold text-3xl">02</span>
</div>
<div>
<span className="text-cyan-600 font-semibold text-sm uppercase tracking-wider">Phase 2</span>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">
                                During Construction Phase
                            </h2>
</div>
</div>
<p className="text-slate-600 text-lg leading-relaxed">
                        On-the-ground support ensuring quality, compliance, and clear communication throughout the entire construction process.
                    </p>
</div>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="bg-white rounded-2xl p-8 border border-slate-100 hover:shadow-xl transition-all relative overflow-hidden group">
<div className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity" style={{background: 'linear-gradient(90deg, #06b6d4, #10b981)'}}></div>
<div className="flex items-start gap-4 mb-6">
<div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg" style={{background: 'linear-gradient(135deg, #06b6d4, #0891b2)', boxShadow: '0 10px 20px -10px rgba(6, 182, 212, 0.5)'}}>
<span className="iconify text-white" data-icon="lucide:eye" data-width="26" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<h3 className="text-xl font-semibold text-slate-900">Resident Project Representative (RPR)</h3>
<span className="inline-flex items-center gap-1.5 text-xs text-cyan-600 bg-cyan-50 px-3 py-1 rounded-full font-medium mt-2">
<span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                                Core Service
                            </span>
</div>
</div>
<ul className="space-y-3 text-sm text-slate-600">
<li className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0 mt-0.5">
<span className="iconify text-cyan-600" data-icon="lucide:check" data-width="12" style={{strokeWidth: '3'}}></span>
</div>
                            On-site representation as owner's/engineer's eyes and ears
                        </li>
<li className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0 mt-0.5">
<span className="iconify text-cyan-600" data-icon="lucide:check" data-width="12" style={{strokeWidth: '3'}}></span>
</div>
                            Daily observation for compliance with plans and specs
                        </li>
<li className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0 mt-0.5">
<span className="iconify text-cyan-600" data-icon="lucide:check" data-width="12" style={{strokeWidth: '3'}}></span>
</div>
                            Documentation of progress, field conditions, and issues
                        </li>
<li className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0 mt-0.5">
<span className="iconify text-cyan-600" data-icon="lucide:check" data-width="12" style={{strokeWidth: '3'}}></span>
</div>
                            Early risk identification and issue resolution support
                        </li>
</ul>
</div>

<div className="bg-white rounded-2xl p-8 border border-slate-100 hover:shadow-xl transition-all relative overflow-hidden group">
<div className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity" style={{background: 'linear-gradient(90deg, #06b6d4, #10b981)'}}></div>
<div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{background: 'linear-gradient(135deg, #eff6ff, #dbeafe)'}}>
<span className="iconify text-blue-600" data-icon="lucide:camera" data-width="26" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-4">Construction Inspection &amp; Site Observation</h3>
<ul className="space-y-3 text-sm text-slate-600">
<li className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
<span className="iconify text-blue-600" data-icon="lucide:check" data-width="12" style={{strokeWidth: '3'}}></span>
</div>
                            Routine site visits and construction inspections
                        </li>
<li className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
<span className="iconify text-blue-600" data-icon="lucide:check" data-width="12" style={{strokeWidth: '3'}}></span>
</div>
                            Pre-construction, progress, and post-construction photo documentation
                        </li>
<li className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
<span className="iconify text-blue-600" data-icon="lucide:check" data-width="12" style={{strokeWidth: '3'}}></span>
</div>
                            Organized photo logs tied to milestones and reports
                        </li>
</ul>
</div>

<div className="bg-white rounded-2xl p-8 border border-slate-100 hover:shadow-xl transition-all relative overflow-hidden group">
<div className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity" style={{background: 'linear-gradient(90deg, #06b6d4, #10b981)'}}></div>
<div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{background: 'linear-gradient(135deg, #ecfdf5, #d1fae5)'}}>
<span className="iconify text-emerald-600" data-icon="lucide:shield" data-width="26" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-4">Erosion Control &amp; Environmental Compliance</h3>
<ul className="space-y-3 text-sm text-slate-600">
<li className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
<span className="iconify text-emerald-600" data-icon="lucide:check" data-width="12" style={{strokeWidth: '3'}}></span>
</div>
                            Erosion and sediment control inspections per approved plans
                        </li>
<li className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
<span className="iconify text-emerald-600" data-icon="lucide:check" data-width="12" style={{strokeWidth: '3'}}></span>
</div>
                            Documentation of BMPs, deficiencies, and corrective actions
                        </li>
<li className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
<span className="iconify text-emerald-600" data-icon="lucide:check" data-width="12" style={{strokeWidth: '3'}}></span>
</div>
                            Photo-based compliance reporting and audit readiness
                        </li>
</ul>
</div>

<div className="bg-white rounded-2xl p-8 border border-slate-100 hover:shadow-xl transition-all relative overflow-hidden group">
<div className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity" style={{background: 'linear-gradient(90deg, #06b6d4, #10b981)'}}></div>
<div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{background: 'linear-gradient(135deg, #eef2ff, #e0e7ff)'}}>
<span className="iconify text-indigo-600" data-icon="lucide:folder" data-width="26" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-4">Construction Documentation</h3>
<ul className="space-y-3 text-sm text-slate-600">
<li className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0 mt-0.5">
<span className="iconify text-indigo-600" data-icon="lucide:check" data-width="12" style={{strokeWidth: '3'}}></span>
</div>
                            Centralized organization of construction records
                        </li>
<li className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0 mt-0.5">
<span className="iconify text-indigo-600" data-icon="lucide:check" data-width="12" style={{strokeWidth: '3'}}></span>
</div>
                            Daily reports, correspondence, inspection logs
                        </li>
<li className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0 mt-0.5">
<span className="iconify text-indigo-600" data-icon="lucide:check" data-width="12" style={{strokeWidth: '3'}}></span>
</div>
                            Audit-ready documentation aligned with agency standards
                        </li>
</ul>
</div>
</div>

<div className="mt-6 grid md:grid-cols-2 gap-6">
<div className="bg-white rounded-2xl p-8 border border-slate-100 hover:shadow-xl transition-all relative overflow-hidden group">
<div className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity" style={{background: 'linear-gradient(90deg, #06b6d4, #10b981)'}}></div>
<div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{background: 'linear-gradient(135deg, #fffbeb, #fef3c7)'}}>
<span className="iconify text-amber-600" data-icon="lucide:credit-card" data-width="26" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-4">Pay Application Review</h3>
<ul className="space-y-3 text-sm text-slate-600">
<li className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
<span className="iconify text-amber-600" data-icon="lucide:check" data-width="12" style={{strokeWidth: '3'}}></span>
</div>
                            Review for completeness and consistency
                        </li>
<li className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
<span className="iconify text-amber-600" data-icon="lucide:check" data-width="12" style={{strokeWidth: '3'}}></span>
</div>
                            Cross-checking against approved scopes and progress
                        </li>
</ul>
</div>
<div className="bg-white rounded-2xl p-8 border border-slate-100 hover:shadow-xl transition-all relative overflow-hidden group">
<div className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity" style={{background: 'linear-gradient(90deg, #06b6d4, #10b981)'}}></div>
<div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{background: 'linear-gradient(135deg, #f5f3ff, #ede9fe)'}}>
<span className="iconify text-violet-600" data-icon="lucide:bar-chart-3" data-width="26" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-4">Schedule of Values (SOV) Review</h3>
<ul className="space-y-3 text-sm text-slate-600">
<li className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0 mt-0.5">
<span className="iconify text-violet-600" data-icon="lucide:check" data-width="12" style={{strokeWidth: '3'}}></span>
</div>
                            Review and organization of schedules of values
                        </li>
<li className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0 mt-0.5">
<span className="iconify text-violet-600" data-icon="lucide:check" data-width="12" style={{strokeWidth: '3'}}></span>
</div>
                            Alignment between contracts, SOVs, pay apps, and progress
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 text-white relative overflow-hidden" id="technology" style={{background: 'linear-gradient(135deg, #1e3a5f 0%, #0f172a 50%, #134e4a 100%)'}}>
<div className="absolute inset-0 opacity-30">
<div className="absolute top-20 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
<div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center max-w-3xl mx-auto mb-16">
<div className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 border" style={{background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', borderColor: 'rgba(255, 255, 255, 0.2)'}}>
<div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
<span className="text-cyan-300 font-medium text-sm">Technology &amp; Dashboards</span>
</div>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
                    Project Dashboards &amp;<br/><span className="text-transparent bg-clip-text" style={{background: 'linear-gradient(90deg, #22d3ee, #34d399)', WebkitBackgroundClip: 'text'}}>KPI Systems</span>
</h2>
<p className="text-lg text-slate-300 leading-relaxed">
                    Facilitator One designs and implements custom project dashboards and KPI systems that provide real-time visibility across design, construction, and closeout.
                </p>
</div>

<div className="max-w-5xl mx-auto mb-16">
<div className="relative">
<div className="absolute -inset-4 rounded-3xl blur-2xl" style={{background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.3), rgba(59, 130, 246, 0.3), rgba(16, 185, 129, 0.3))'}}></div>
<div className="relative rounded-2xl p-6 border shadow-2xl" style={{background: 'rgba(15, 23, 42, 0.8)', backdropFilter: 'blur(20px)', borderColor: 'rgba(255, 255, 255, 0.1)'}}>
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-red-400"></div>
<div className="w-3 h-3 rounded-full bg-yellow-400"></div>
<div className="w-3 h-3 rounded-full bg-green-400"></div>
</div>
<span className="text-xs text-slate-400">Infrastructure Management Dashboard</span>
</div>
<img alt="Dashboard Interface" className="w-full h-auto rounded-lg" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&amp;q=80"/>
</div>
</div>
</div>

<div className="max-w-2xl mx-auto mb-16">
<div className="rounded-2xl p-6 border" style={{background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(10px)', borderColor: 'rgba(255, 255, 255, 0.1)'}}>
<div className="flex items-center gap-4">
<div className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 border" style={{background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.3), rgba(16, 185, 129, 0.3))', borderColor: 'rgba(6, 182, 212, 0.3)'}}>
<span className="iconify text-cyan-400" data-icon="lucide:shield-check" data-width="32" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<span className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">Proven Model</span>
<p className="text-white/90 mt-1">
                                Systems modeled after dashboards developed for <strong className="text-cyan-300">Charlotte Water</strong>. Adaptable for other municipalities, utilities, and engineering firms.
                            </p>
</div>
</div>
</div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="rounded-2xl p-6 border transition-all hover:bg-white/10 group" style={{background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(10px)', borderColor: 'rgba(255, 255, 255, 0.1)'}}>
<div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 border transition-transform group-hover:scale-110" style={{background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(37, 99, 235, 0.3))', borderColor: 'rgba(59, 130, 246, 0.3)'}}>
<span className="iconify text-blue-400" data-icon="lucide:layout-dashboard" data-width="26" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-semibold mb-3">System Design</h3>
<p className="text-sm text-slate-400">Custom dashboards tailored to each project. Scalable systems from design through construction.</p>
</div>
<div className="rounded-2xl p-6 border transition-all hover:bg-white/10 group" style={{background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(10px)', borderColor: 'rgba(255, 255, 255, 0.1)'}}>
<div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 border transition-transform group-hover:scale-110" style={{background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.3), rgba(8, 145, 178, 0.3))', borderColor: 'rgba(6, 182, 212, 0.3)'}}>
<span className="iconify text-cyan-400" data-icon="lucide:trending-up" data-width="26" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-semibold mb-3">Key Performance Indicators</h3>
<p className="text-sm text-slate-400">Design progress, construction tracking, inspection status, compliance metrics, and milestone tracking.</p>
</div>
<div className="rounded-2xl p-6 border transition-all hover:bg-white/10 group" style={{background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(10px)', borderColor: 'rgba(255, 255, 255, 0.1)'}}>
<div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 border transition-transform group-hover:scale-110" style={{background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.3), rgba(79, 70, 229, 0.3))', borderColor: 'rgba(99, 102, 241, 0.3)'}}>
<span className="iconify text-indigo-400" data-icon="lucide:image" data-width="26" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-semibold mb-3">Photo &amp; Field Data</h3>
<p className="text-sm text-slate-400">Centralized photo storage tied to locations, dates, and activities. Easy retrieval for audits.</p>
</div>
<div className="rounded-2xl p-6 border transition-all hover:bg-white/10 group" style={{background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(10px)', borderColor: 'rgba(255, 255, 255, 0.1)'}}>
<div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 border transition-transform group-hover:scale-110" style={{background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.3), rgba(5, 150, 105, 0.3))', borderColor: 'rgba(16, 185, 129, 0.3)'}}>
<span className="iconify text-emerald-400" data-icon="lucide:activity" data-width="26" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-semibold mb-3">Real-Time Visibility</h3>
<p className="text-sm text-slate-400">Real-time access for engineers, owners, and stakeholders. Clear visual reporting for agency reviews.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<div className="inline-flex items-center gap-2 bg-emerald-50 rounded-full px-4 py-2 mb-6">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
<span className="text-emerald-700 font-medium text-sm">Featured Projects</span>
</div>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight mb-6">
                    Trusted by Leading<br/><span style={{background: 'linear-gradient(135deg, #1e40af 0%, #0891b2 50%, #059669 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>Engineering Firms</span>
</h2>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="group">
<div className="relative rounded-2xl overflow-hidden mb-4">
<img alt="Water Treatment Facility" className="w-full h-64 object-cover transition-transform group-hover:scale-105" src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?w=600&amp;q=80"/>
<div className="absolute inset-0" style={{background: 'linear-gradient(to top, rgba(15, 23, 42, 0.7) 0%, transparent 50%)'}}></div>
<div className="absolute bottom-4 left-4 right-4">
<span className="inline-flex items-center gap-1.5 text-xs text-white bg-white/20 px-3 py-1 rounded-full font-medium" style={{backdropFilter: 'blur(10px)'}}>
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                                Completed
                            </span>
</div>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Water Treatment Facility</h3>
<p className="text-sm text-slate-600">Full design and construction support for a 50MGD water treatment expansion project.</p>
</div>
<div className="group">
<div className="relative rounded-2xl overflow-hidden mb-4">
<img alt="Pipeline Infrastructure" className="w-full h-64 object-cover transition-transform group-hover:scale-105" src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&amp;q=80"/>
<div className="absolute inset-0" style={{background: 'linear-gradient(to top, rgba(15, 23, 42, 0.7) 0%, transparent 50%)'}}></div>
<div className="absolute bottom-4 left-4 right-4">
<span className="inline-flex items-center gap-1.5 text-xs text-white bg-white/20 px-3 py-1 rounded-full font-medium" style={{backdropFilter: 'blur(10px)'}}>
<span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                                In Progress
                            </span>
</div>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Pipeline Infrastructure</h3>
<p className="text-sm text-slate-600">20-mile transmission main with RPR services and environmental compliance monitoring.</p>
</div>
<div className="group">
<div className="relative rounded-2xl overflow-hidden mb-4">
<img alt="Pump Station Upgrade" className="w-full h-64 object-cover transition-transform group-hover:scale-105" src="https://images.unsplash.com/photo-1584467541268-b040f83be3fd?w=600&amp;q=80"/>
<div className="absolute inset-0" style={{background: 'linear-gradient(to top, rgba(15, 23, 42, 0.7) 0%, transparent 50%)'}}></div>
<div className="absolute bottom-4 left-4 right-4">
<span className="inline-flex items-center gap-1.5 text-xs text-white bg-white/20 px-3 py-1 rounded-full font-medium" style={{backdropFilter: 'blur(10px)'}}>
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                                Completed
                            </span>
</div>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Pump Station Modernization</h3>
<p className="text-sm text-slate-600">Complete documentation and inspection services for regional pump station upgrades.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="contact" style={{background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)'}}>
<div className="absolute top-0 left-0 right-0 h-px" style={{background: 'linear-gradient(90deg, transparent, #e2e8f0, transparent)'}}></div>
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="rounded-3xl p-12 md:p-16 relative overflow-hidden" style={{background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #0f172a 100%)'}}>
<div className="absolute inset-0 opacity-30">
<div className="absolute top-10 right-10 w-64 h-64 bg-cyan-500/30 rounded-full blur-3xl"></div>
<div className="absolute bottom-10 left-10 w-48 h-48 bg-blue-500/30 rounded-full blur-3xl"></div>
</div>
<div className="relative z-10">
<div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-8 border" style={{background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', borderColor: 'rgba(255, 255, 255, 0.2)'}}>
<span className="iconify text-cyan-400" data-icon="lucide:message-square" data-width="32" style={{strokeWidth: '1.5'}}></span>
</div>
<blockquote className="text-2xl md:text-3xl font-medium text-white tracking-tight mb-4 leading-relaxed">
                        "We don't replace engineering teams.<br/>
<span className="text-transparent bg-clip-text" style={{background: 'linear-gradient(90deg, #22d3ee, #34d399)', WebkitBackgroundClip: 'text'}}>We structure the work around them so they can do their best work.</span>"
                    </blockquote>
<p className="text-slate-400 mb-10">Ready to streamline your next project?</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="bg-white hover:bg-slate-100 text-slate-900 font-medium px-8 py-4 rounded-xl transition-all hover:shadow-lg flex items-center justify-center gap-2" href="mailto:contact@facilitatorone.com">
<span className="iconify" data-icon="lucide:mail" data-width="20" style={{strokeWidth: '1.5'}}></span>
                            Contact Us
                        </a>
<a className="text-white font-medium px-8 py-4 rounded-xl border transition-all flex items-center justify-center gap-2" href="#" style={{background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', borderColor: 'rgba(255, 255, 255, 0.2)'}}>
<span className="iconify" data-icon="lucide:calendar" data-width="20" style={{strokeWidth: '1.5'}}></span>
                            Schedule a Meeting
                        </a>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-slate-900 text-white py-16">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-12">
<div className="md:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{background: 'linear-gradient(135deg, #2563eb 0%, #0891b2 100%)'}}>
<span className="text-white font-bold text-sm tracking-tighter">F1</span>
</div>
<span className="font-semibold text-white tracking-tight">Facilitator One</span>
</div>
<p className="text-slate-400 text-sm leading-relaxed max-w-md">
                        We partner with engineering firms to provide comprehensive project support from design through construction and closeout. Our focus is clarity, accountability, and execution.
                    </p>
</div>
<div>
<h4 className="font-semibold mb-4 text-white">Services</h4>
<ul className="space-y-3 text-sm text-slate-400">
<li><a className="hover:text-white transition-colors" href="#services">Design Phase Support</a></li>
<li><a className="hover:text-white transition-colors" href="#construction-phase">Construction Phase</a></li>
<li><a className="hover:text-white transition-colors" href="#technology">Project Dashboards</a></li>
<li><a className="hover:text-white transition-colors" href="#">RPR Services</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold mb-4 text-white">Contact</h4>
<ul className="space-y-3 text-sm text-slate-400">
<li className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:mail" data-width="16" style={{strokeWidth: '1.5'}}></span>
                            contact@facilitatorone.com
                        </li>
<li className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:phone" data-width="16" style={{strokeWidth: '1.5'}}></span>
                            (704) 555-0123
                        </li>
<li className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:map-pin" data-width="16" style={{strokeWidth: '1.5'}}></span>
                            Charlotte, NC
                        </li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-sm text-slate-500">
                    © 2024 Facilitator One. All rights reserved.
                </p>
<div className="flex items-center gap-6">
<a className="text-slate-400 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:linkedin" data-width="20" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="text-slate-400 hover:text-white transition-colors" href="mailto:contact@facilitatorone.com">
<span className="iconify" data-icon="lucide:mail" data-width="20" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
