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
colors: {
cream: '#FFFBF2',
brand: {
dark: '#1A1A2E',
DEFAULT: '#16213E',
accent: '#E94560',
light: '#F1F1F8',
peach: '#FDE8E8',
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
animation: {
'float': 'float 6s ease-in-out infinite',
'float-delayed': 'float 6s ease-in-out 3s infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
}
}
}
}
}



        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    
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
      

<nav className="fixed w-full top-0 z-50 bg-cream/90 backdrop-blur-md border-b border-gray-100/50 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-brand-accent rounded-lg flex items-center justify-center">
<i className="w-5 h-5 text-white" data-lucide="zap"></i>
</div>
<span className="text-xl font-semibold tracking-tight text-brand-dark">Pronghorn</span>
</div>
<div className="flex items-center gap-4">
<button className="bg-brand-dark text-white px-5 py-2.5 rounded-lg font-medium text-sm hover:bg-brand-dark/90 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-brand-dark/20">
                    Get Started
                </button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 px-6 overflow-hidden">
<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
<svg className="absolute top-20 left-10 w-[800px] h-[800px] opacity-20 text-gray-300" viewbox="0 0 100 100">
<path d="M0,50 Q25,25 50,50 T100,50" fill="none" stroke="currentColor" strokeWidth="0.5"></path>
<path d="M0,60 Q25,35 50,60 T100,60" fill="none" stroke="currentColor" strokeWidth="0.5"></path>
</svg>
<div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-rose-100/30 to-transparent blur-3xl"></div>
</div>
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
<div className="space-y-8 reveal active">
<h1 className="text-5xl lg:text-6xl font-medium tracking-tight text-brand-dark leading-[1.1]">
                    Standards Driven <br/>
<span className="text-brand-accent relative inline-block">
                        AI Development
                        <svg className="absolute w-full h-3 -bottom-1 left-0 text-rose-200 -z-10" preserveaspectratio="none" viewbox="0 0 100 10"><path d="M0,5 Q50,10 100,5" fill="none" stroke="currentColor" strokeWidth="8"></path></svg>
</span>
</h1>
<p className="text-xl text-gray-600 max-w-lg leading-relaxed">
                    The alternative to unclear "vibe" coding. Build enterprise applications that are provably compliant with standards and fully traceable to requirements—from clear architectural foundations to production-ready code.
                </p>
<div className="flex flex-wrap gap-4">
<button className="group bg-brand-dark text-white px-8 py-4 rounded-xl font-medium text-lg hover:bg-brand-dark/90 hover:shadow-xl hover:shadow-brand-dark/20 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
                        Start Building
                        <i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
<button className="bg-white border-2 border-gray-200 text-brand-dark px-8 py-4 rounded-xl font-medium text-lg hover:border-brand-dark transition-all duration-300">
                        View Standards
                    </button>
</div>
</div>
<div className="relative h-[500px] w-full flex items-center justify-center reveal delay-200">
<div className="relative w-full max-w-md aspect-square">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-rose-100/50 rounded-full blur-3xl"></div>
<div className="absolute top-0 right-10 animate-float z-20">
<div className="bg-brand-accent p-4 rounded-2xl shadow-xl transform rotate-12">
<i className="w-12 h-12 text-white" data-lucide="shield-check"></i>
</div>
</div>
<div className="absolute bottom-20 left-0 animate-float-delayed z-20">
<div className="bg-emerald-500 p-4 rounded-2xl shadow-xl transform -rotate-12">
<i className="w-12 h-12 text-white" data-lucide="git-branch"></i>
</div>
</div>
<div className="absolute top-1/2 right-0 animate-float z-20" style={{animationDelay: '1.5s'}}>
<div className="bg-amber-500 p-3 rounded-full shadow-xl">
<i className="w-8 h-8 text-white" data-lucide="check-circle"></i>
</div>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-64 bg-white rounded-2xl shadow-2xl border border-rose-100 overflow-hidden transform hover:scale-105 transition-transform duration-500">
<div className="h-full w-full bg-gradient-to-br from-rose-50 to-white p-6 flex flex-col gap-4">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-red-400"></div>
<div className="w-3 h-3 rounded-full bg-yellow-400"></div>
<div className="w-3 h-3 rounded-full bg-green-400"></div>
</div>
<div className="flex-1 bg-brand-dark/5 rounded-lg p-4 flex items-center justify-center gap-3">
<i className="w-8 h-8 text-brand-accent" data-lucide="file-check"></i>
<span className="text-brand-dark font-semibold text-lg tracking-tight">Compliant</span>
</div>
<div className="flex gap-2">
<div className="h-2 flex-1 bg-emerald-200 rounded-full"></div>
<div className="h-2 flex-1 bg-emerald-300 rounded-full"></div>
<div className="h-2 flex-1 bg-emerald-400 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white/50">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 reveal">
<h2 className="text-4xl font-medium tracking-tight text-brand-dark mb-4">Built for Speed, Quality, Compliance, Traceability &amp; Trust</h2>
<p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Purpose-built for one mission: generating enterprise applications that are provably compliant with standards and fully traceable to requirements
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 reveal">
<div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center mb-6">
<i className="w-6 h-6 text-brand-accent" data-lucide="link"></i>
</div>
<h3 className="text-xl font-medium text-brand-dark mb-3">Standards-First Traceability</h3>
<p className="text-gray-600">Standards embedded by design—every requirement traces back to organizational standards, ensuring compliance from day one.</p>
</div>
<div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 reveal delay-100">
<div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
<i className="w-6 h-6 text-emerald-600" data-lucide="check-square"></i>
</div>
<h3 className="text-xl font-medium text-brand-dark mb-3">Validate While Building</h3>
<p className="text-gray-600">Continuous validation catches compliance gaps instantly, eliminating costly late-stage rework and technical debt.</p>
</div>
<div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 reveal delay-200">
<div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center mb-6">
<i className="w-6 h-6 text-violet-600" data-lucide="layout"></i>
</div>
<h3 className="text-xl font-medium text-brand-dark mb-3">Visual Architecture</h3>
<p className="text-gray-600">Design robust architectures with an interactive canvas that links standards, requirements, and components in real-time.</p>
</div>
<div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 reveal">
<div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
<i className="w-6 h-6 text-amber-600" data-lucide="file-badge"></i>
</div>
<h3 className="text-xl font-medium text-brand-dark mb-3">Proof of Compliance</h3>
<p className="text-gray-600">Automated auditing provides traceable evidence that your application meets every standard and requirement.</p>
</div>
<div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 reveal delay-100">
<div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-6">
<i className="w-6 h-6 text-cyan-600" data-lucide="bot"></i>
</div>
<h3 className="text-xl font-medium text-brand-dark mb-3">Autonomous Build-Audit-Fix</h3>
<p className="text-gray-600">AI agents work together to build, audit, and automatically remediate gaps—all changes remain fully traceable.</p>
</div>
<div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 reveal delay-200">
<div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
<i className="w-6 h-6 text-blue-600" data-lucide="users"></i>
</div>
<h3 className="text-xl font-medium text-brand-dark mb-3">Developer Support System</h3>
<p className="text-gray-600">Guides your team like an architect, accelerates work like a contractor, ensures quality like an inspector.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 reveal">
<h2 className="text-4xl font-medium tracking-tight text-brand-dark mb-4">How Pronghorn Works</h2>
<p className="text-xl text-gray-600">Three operational modes: Design, Audit, and Build</p>
</div>
<div className="grid lg:grid-cols-3 gap-8">
<div className="relative bg-gradient-to-br from-rose-50 to-white p-10 rounded-3xl border border-rose-100 reveal">
<div className="absolute -top-4 -left-4 w-12 h-12 bg-brand-accent rounded-full flex items-center justify-center text-white font-semibold text-xl shadow-lg">1</div>
<div className="pt-4">
<h3 className="text-2xl font-medium tracking-tight text-brand-dark mb-4">Design Mode</h3>
<p className="text-gray-600 leading-relaxed">Lay down clear architectural, cyber security, and tech stack standards. Build robust architectures as the foundation for compliant enterprise applications</p>
</div>
</div>
<div className="relative bg-gradient-to-br from-emerald-50 to-white p-10 rounded-3xl border border-emerald-100 reveal delay-100">
<div className="absolute -top-4 -left-4 w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white font-semibold text-xl shadow-lg">2</div>
<div className="pt-4">
<h3 className="text-2xl font-medium tracking-tight text-brand-dark mb-4">Audit Mode</h3>
<p className="text-gray-600 leading-relaxed">Continuously validate while building. Automated compliance auditing identifies gaps instantly, providing proof of compliance with traceable evidence</p>
</div>
</div>
<div className="relative bg-gradient-to-br from-violet-50 to-white p-10 rounded-3xl border border-violet-100 reveal delay-200">
<div className="absolute -top-4 -left-4 w-12 h-12 bg-violet-500 rounded-full flex items-center justify-center text-white font-semibold text-xl shadow-lg">3</div>
<div className="pt-4">
<h3 className="text-2xl font-medium tracking-tight text-brand-dark mb-4">Build Mode</h3>
<p className="text-gray-600 leading-relaxed">AI agents build, audit, and automatically fix compliance gaps—all remediation remains fully traceable. Real-time monitoring ensures system-wide consistency</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
<div className="reveal">
<h2 className="text-4xl font-medium tracking-tight text-brand-dark mb-6">Why Choose Pronghorn</h2>
<p className="text-xl text-gray-600 leading-relaxed mb-10">
                    Support your development teams with standards-first, AI-powered, continuously validated development
                </p>
<ul className="space-y-4">
<li className="flex items-center gap-4">
<div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
<i className="w-4 h-4 text-emerald-600" data-lucide="check"></i>
</div>
<span className="text-gray-700">Eliminate compliance debt before it starts</span>
</li>
<li className="flex items-center gap-4">
<div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
<i className="w-4 h-4 text-emerald-600" data-lucide="check"></i>
</div>
<span className="text-gray-700">Reduce 12-month projects to weeks</span>
</li>
<li className="flex items-center gap-4">
<div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
<i className="w-4 h-4 text-emerald-600" data-lucide="check"></i>
</div>
<span className="text-gray-700">Proof of compliance built into every line of code</span>
</li>
<li className="flex items-center gap-4">
<div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
<i className="w-4 h-4 text-emerald-600" data-lucide="check"></i>
</div>
<span className="text-gray-700">Complete traceability from standards to code</span>
</li>
<li className="flex items-center gap-4">
<div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
<i className="w-4 h-4 text-emerald-600" data-lucide="check"></i>
</div>
<span className="text-gray-700">Build trust and confidence with stakeholders</span>
</li>
<li className="flex items-center gap-4">
<div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
<i className="w-4 h-4 text-emerald-600" data-lucide="check"></i>
</div>
<span className="text-gray-700">Accelerate delivery without sacrificing quality</span>
</li>
</ul>
</div>
<div className="relative reveal delay-200">
<div className="relative h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-brand-dark to-brand-dark/90 p-10 flex flex-col justify-center">
<div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/20 rounded-full blur-3xl"></div>
<div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-500/20 rounded-full blur-3xl"></div>
<div className="relative z-10 space-y-6">
<div className="flex items-center gap-4">
<div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
<i className="w-8 h-8 text-white" data-lucide="rocket"></i>
</div>
<div>
<div className="text-3xl font-semibold text-white tracking-tight">12x</div>
<div className="text-white/70">Faster Delivery</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
<i className="w-8 h-8 text-white" data-lucide="shield"></i>
</div>
<div>
<div className="text-3xl font-semibold text-white tracking-tight">100%</div>
<div className="text-white/70">Traceable</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
<i className="w-8 h-8 text-white" data-lucide="award"></i>
</div>
<div>
<div className="text-3xl font-semibold text-white tracking-tight">Zero</div>
<div className="text-white/70">Compliance Debt</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-4xl mx-auto text-center reveal">
<div className="bg-gradient-to-br from-brand-peach to-rose-50 rounded-3xl p-12 lg:p-16 relative overflow-hidden">
<div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-accent/10 rounded-full blur-3xl"></div>
<div className="absolute -bottom-20 -left-20 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl"></div>
<div className="relative z-10">
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-brand-dark mb-6">Ready to Build with Confidence?</h2>
<p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                        Join the new category of Autonomous Compliance-Driven Development. Deliver enterprise applications that are provably compliant, fully traceable, and built in a fraction of the time
                    </p>
<button className="group bg-brand-dark text-white px-10 py-4 rounded-xl font-medium text-lg hover:bg-brand-dark/90 hover:shadow-xl hover:shadow-brand-dark/20 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 mx-auto">
                        Create Your First Project
                        <i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</section>

<footer className="py-12 px-6 border-t border-gray-100">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-brand-accent rounded-lg flex items-center justify-center">
<i className="w-5 h-5 text-white" data-lucide="zap"></i>
</div>
<span className="text-lg font-semibold tracking-tight text-brand-dark">Pronghorn</span>
</div>
<div className="text-sm text-gray-500 text-center md:text-right">
<p>© 2025 Pronghorn. MIT License Open Source by the Government of Alberta.</p>
<a className="text-brand-accent hover:underline" href="https://pronghorn.red">pronghorn.red</a>
</div>
</div>
</footer>


    </>
  );
}
