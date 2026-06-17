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



// Configure Tailwind extensions
tailwind.config = {
theme: {
extend: {
colors: {
brand: {
orange: '#F25F29',
blue: '#1E3A8A', // Deep Royal Blue
accent: '#3B82F6', // Brighter Blue
dark: '#0F172A',
light: '#F8FAFC'
}
},
boxShadow: {
'soft': '0 20px 40px -15px rgba(30, 58, 138, 0.1)',
'glow': '0 0 40px -10px rgba(59, 130, 246, 0.3)'
}
}
}
};



        // Initialize Icons
        lucide.createIcons();

        // Simple Intersection Observer for scroll animations
        document.addEventListener('DOMContentLoaded', () => {
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
      

<nav className="fixed w-full z-50 top-0 transition-all duration-300 pt-6 px-6">
<div className="max-w-7xl mx-auto flex items-center justify-between">

<div className="flex items-center gap-3 cursor-pointer group">
<div className="w-8 h-8 flex items-center justify-center text-blue-700 bg-blue-50 rounded-lg">
<i className="w-5 h-5 stroke-[2]" data-lucide="scale"></i>
</div>
<span className="font-semibold text-lg tracking-tight text-slate-900">TrueNorth</span>
</div>

<div className="hidden lg:flex items-center gap-1 bg-white/60 backdrop-blur-md px-2 py-2 rounded-full border border-white/60 shadow-sm ring-1 ring-slate-900/5">
<a className="px-5 py-2 rounded-full text-sm font-medium hover:bg-white transition-all text-slate-900 shadow-sm" href="#home">Home</a>
<a className="px-5 py-2 rounded-full text-sm font-medium hover:bg-white transition-all text-slate-500 hover:text-blue-700" href="#about">About</a>
<a className="px-5 py-2 rounded-full text-sm font-medium hover:bg-white transition-all flex items-center gap-1 text-slate-500 hover:text-blue-700" href="#services">
                    Services <i className="w-3 h-3 mt-0.5 opacity-50" data-lucide="chevron-down"></i>
</a>
<a className="px-5 py-2 rounded-full text-sm font-medium hover:bg-white transition-all text-slate-500 hover:text-blue-700" href="#solution">Solution</a>
</div>

<div className="flex items-center gap-6">
<div className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-500 cursor-pointer hover:text-slate-900">
<i className="w-4 h-4" data-lucide="globe"></i>
<span>EN</span>
</div>
<a className="px-6 py-2.5 rounded-full text-sm font-medium transition-all shadow-lg hover:shadow-blue-500/20 hover:-translate-y-0.5 bg-brand-blue text-white hover:bg-blue-800" href="#contact">
                    Client Access
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-20 min-h-screen flex items-center overflow-hidden" id="home">

<div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white z-0"></div>
<div className="absolute top-[-10%] right-[-5%] w-[900px] h-[900px] bg-blue-100/40 rounded-full blur-[120px] pointer-events-none"></div>
<div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-orange-50/60 rounded-full blur-[100px] pointer-events-none"></div>
<div className="absolute top-[20%] left-[20%] w-[400px] h-[400px] bg-blue-50/50 rounded-full blur-[80px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

<div className="flex-1 max-w-2xl reveal relative z-20">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold mb-6 tracking-wide uppercase">
<span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                        Top Tier Legal Defense
                    </div>
<h1 className="text-6xl lg:text-[5rem] font-medium leading-[0.95] tracking-tight mb-8 text-slate-900">
                        Solving Legal <br/>
<span className="gradient-text">Complexity</span> With <br/>
                        Confidence
                    </h1>
<p className="text-lg md:text-xl mb-10 leading-relaxed max-w-md reveal delay-100 text-slate-500 font-medium">
                        Balancing the scales of justice with precision. A dedicated team committed to securing your future.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 reveal delay-200">
<a className="px-8 py-4 rounded-full font-medium transition-all shadow-glow hover:shadow-blue-500/30 hover:-translate-y-0.5 flex items-center justify-center gap-2 group bg-[#1E3A8A] text-white" href="#contact">
                            Consult Now <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
<button className="bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-full font-medium hover:bg-slate-50 transition-all flex items-center justify-center gap-2 hover:border-blue-200">
<i className="w-5 h-5 text-brand-orange" data-lucide="play-circle"></i> Our Process
                        </button>
</div>

<div className="mt-16 lg:absolute lg:bottom-[-80px] lg:left-0 w-full max-w-xs reveal delay-300">
<div className="glass-card p-4 rounded-3xl flex items-center gap-4 hover:scale-[1.02] transition-transform duration-500 border-l-4 border-l-brand-blue">
<div className="relative">
<img alt="Lawyer" className="w-16 h-16 rounded-2xl object-cover" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&amp;fit=crop&amp;q=80&amp;w=200&amp;h=200"/>
<div className="absolute -bottom-2 -right-2 bg-blue-600 rounded-full p-1.5 shadow-md border-2 border-white">
<i className="w-3 h-3 text-white" data-lucide="check"></i>
</div>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900 leading-tight mb-1 uppercase tracking-wide">Protecting Your<br/>Legacy</h3>
<a className="text-xs font-bold text-blue-600 hover:text-blue-800" href="#">VIEW CASE STUDY</a>
</div>
</div>
</div>
</div>

<div className="flex-1 relative w-full h-[600px] lg:h-[800px] flex items-center justify-center reveal delay-200">

<div className="absolute inset-0 z-10 flex justify-center items-center pointer-events-none">

<div className="absolute w-[80%] h-[80%] bg-blue-200/20 rounded-full blur-3xl -z-10"></div>
<img alt="Justice Statue" className="h-full w-auto object-contain drop-shadow-2xl mix-blend-multiply opacity-90 contrast-125 grayscale-[10%]" src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>

<div className="absolute top-16 right-0 lg:right-4 z-20 animate-[float_6s_ease-in-out_infinite]">
<div className="glass-card p-5 rounded-2xl flex flex-col items-start gap-2 shadow-glow">
<div className="flex items-center gap-3">
<div className="bg-blue-100 p-2 rounded-lg text-blue-700">
<i className="w-5 h-5" data-lucide="users"></i>
</div>
<span className="text-sm font-semibold text-slate-500">Clients Served</span>
</div>
<span className="text-4xl font-semibold tracking-tight text-slate-900">28K+</span>
</div>
</div>

<div className="absolute bottom-20 right-0 lg:right-[-20px] z-20 animate-[float_5s_ease-in-out_infinite_1s]">
<div className="bg-white p-6 rounded-[2rem] w-72 shadow-xl border border-slate-100">
<div className="flex justify-between items-center mb-6">
<span className="text-sm font-semibold text-slate-800">Settlements</span>
<div className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded-md flex items-center gap-1 font-medium">
<i className="w-3 h-3" data-lucide="trending-up"></i> +12%
                                </div>
</div>
<div className="flex items-end justify-between gap-2 h-24 px-1">
<div className="w-full bg-slate-100 h-[40%] rounded-t-sm"></div>
<div className="w-full bg-slate-100 h-[60%] rounded-t-sm"></div>
<div className="w-full bg-slate-100 h-[35%] rounded-t-sm"></div>
<div className="w-full bg-blue-100 h-[55%] rounded-t-sm"></div>
<div className="w-full bg-blue-200 h-[70%] rounded-t-sm"></div>
<div className="w-full bg-brand-blue h-[100%] rounded-t-sm shadow-lg shadow-blue-900/20 relative group">
<div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] px-2 py-1 rounded transition-opacity">
                                        $2.4M
                                    </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-slate-200 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400 mb-8">Defending interests of</p>
<div className="flex flex-wrap justify-center gap-12 lg:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
<div className="flex items-center gap-2 font-semibold text-xl text-slate-800"><i className="fill-current text-blue-600" data-lucide="aperture"></i> SkyNet</div>
<div className="flex items-center gap-2 font-semibold text-xl text-slate-800"><i className="fill-current text-blue-600" data-lucide="codesandbox"></i> Nexus</div>
<div className="flex items-center gap-2 font-semibold text-xl text-slate-800"><i className="fill-current text-blue-600" data-lucide="framer"></i> Frame</div>
<div className="flex items-center gap-2 font-semibold text-xl text-slate-800"><i className="fill-current text-blue-600" data-lucide="command"></i> Cmd</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal">
<div className="max-w-2xl">
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight mb-6 text-slate-900">
                        Expertise beyond <br/> the courtroom.
                    </h2>
<p className="text-lg text-slate-500 max-w-lg">
                        We don't just win cases; we secure futures. Our multi-disciplinary approach ensures every angle is covered.
                    </p>
</div>
<a className="hidden md:flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-900 transition-colors bg-blue-50 px-4 py-2 rounded-full" href="#">
                    View Practice Areas <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:shadow-orange-100/50 hover:border-orange-200 transition-all duration-300 reveal delay-100 group">
<div className="w-12 h-12 rounded-xl bg-orange-100 border border-orange-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6 text-orange-600" data-lucide="scale"></i>
</div>
<h3 className="text-xl font-medium mb-3 text-slate-900">Corporate Litigation</h3>
<p className="text-base text-slate-500 leading-relaxed">
                        Navigating complex business disputes with precision. From IP theft to breach of contract, we protect your bottom line.
                    </p>
</div>

<div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:shadow-blue-100/50 hover:border-blue-200 transition-all duration-300 reveal delay-200 group">
<div className="w-12 h-12 rounded-xl bg-blue-100 border border-blue-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6 text-blue-600" data-lucide="shield-check"></i>
</div>
<h3 className="text-xl font-medium mb-3 text-slate-900">Asset Protection</h3>
<p className="text-base text-slate-500 leading-relaxed">
                        Safeguarding your wealth for future generations. Trusts, estates, and tax strategies tailored to your portfolio.
                    </p>
</div>

<div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-300 transition-all duration-300 reveal delay-300 group">
<div className="w-12 h-12 rounded-xl bg-slate-200 border border-slate-300 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6 text-slate-800" data-lucide="gavel"></i>
</div>
<h3 className="text-xl font-medium mb-3 text-slate-900">Criminal Defense</h3>
<p className="text-base text-slate-500 leading-relaxed">
                        Unrelenting defense for high-stakes situations. We dissect evidence and build ironclad strategies for dismissal.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200 overflow-hidden" id="solution">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row items-center gap-20">
<div className="flex-1 reveal">
<div className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-6 bg-blue-100 text-blue-800">
                        The TrueNorth Process
                    </div>
<h2 className="text-4xl lg:text-5xl font-medium mb-6 tracking-tight text-slate-900">Your case, simplified.</h2>
<p className="text-lg mb-8 text-slate-500">
                        Legal battles are chaotic. We bring order. Our client portal gives you real-time access to your case status, documents, and team.
                    </p>
<ul className="space-y-8">
<li className="flex items-start gap-4 group">
<div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-brand-blue text-white group-hover:bg-brand-orange transition-colors shadow-lg shadow-blue-900/10">1</div>
<div>
<h4 className="font-medium text-lg text-slate-900">Initial Discovery</h4>
<p className="text-sm text-slate-500 mt-1 leading-relaxed">We dig deeper than anyone else. Our investigators uncover facts that turn the tide.</p>
</div>
</li>
<li className="flex items-start gap-4 group">
<div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-brand-blue text-white group-hover:bg-brand-orange transition-colors shadow-lg shadow-blue-900/10">2</div>
<div>
<h4 className="font-medium text-lg text-slate-900">Strategic Roadmap</h4>
<p className="text-sm text-slate-500 mt-1 leading-relaxed">No guessing. You receive a clear timeline and probability assessment before we file.</p>
</div>
</li>
<li className="flex items-start gap-4 group">
<div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-brand-blue text-white group-hover:bg-brand-orange transition-colors shadow-lg shadow-blue-900/10">3</div>
<div>
<h4 className="font-medium text-lg text-slate-900">Execution &amp; Closure</h4>
<p className="text-sm text-slate-500 mt-1 leading-relaxed">We negotiate aggressively and litigate fearlessly to secure the optimal outcome.</p>
</div>
</li>
</ul>
</div>
<div className="flex-1 w-full reveal delay-200 perspective-[1000px]">

<div className="relative mx-auto w-full max-w-md rounded-3xl shadow-2xl shadow-blue-900/10 border border-slate-200 bg-white overflow-hidden transform rotate-y-[-5deg] rotate-x-[5deg] hover:rotate-0 transition-transform duration-700 ease-out">
<div className="p-5 border-b border-slate-100 bg-slate-50 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-red-400"></div>
<div className="w-3 h-3 rounded-full bg-amber-400"></div>
<div className="w-3 h-3 rounded-full bg-green-400"></div>
</div>
<div className="text-xs font-medium text-slate-400">CASE #8821-X</div>
</div>
<div className="p-8 bg-white">
<div className="flex items-center gap-4 mb-8">
<div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden ring-2 ring-white shadow-md">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
</div>
<div>
<div className="font-semibold text-slate-900">Alexander Wright</div>
<div className="text-xs text-blue-600 font-medium">Senior Partner • Intellectual Property</div>
</div>
<div className="ml-auto">
<span className="px-2 py-1 rounded text-xs font-bold bg-green-100 text-green-700">Active</span>
</div>
</div>
<div className="space-y-4">
<div className="p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-200 transition-colors cursor-pointer group">
<div className="flex justify-between mb-2">
<span className="text-xs font-bold text-slate-400 uppercase group-hover:text-blue-500">Document</span>
<i className="w-3 h-3 text-slate-400 group-hover:text-blue-500" data-lucide="download"></i>
</div>
<p className="text-sm font-medium text-slate-700">Settlement_Agreement_v3.pdf</p>
</div>
<div className="p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-200 transition-colors cursor-pointer group">
<div className="flex justify-between mb-2">
<span className="text-xs font-bold text-slate-400 uppercase group-hover:text-blue-500">Next Hearing</span>
<i className="w-3 h-3 text-slate-400 group-hover:text-blue-500" data-lucide="calendar"></i>
</div>
<p className="text-sm font-medium text-slate-700">Oct 24, 2024 • 09:00 AM</p>
</div>
</div>
<button className="w-full mt-8 bg-slate-900 text-white py-3 rounded-xl font-medium text-sm hover:bg-brand-blue transition-colors">Message Attorney</button>
</div>
</div>

<div className="absolute -z-10 top-10 -right-10 w-full h-full bg-gradient-to-br from-blue-100 to-slate-200 rounded-3xl transform rotate-[5deg] opacity-60"></div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#0F172A] text-white relative overflow-hidden">

<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-20 items-center">
<div className="reveal">
<h2 className="text-4xl lg:text-5xl font-medium mb-6 font-serif">Numbers that define us.</h2>
<p className="text-lg text-slate-400 mb-8 leading-relaxed">
                        We measure success in recovered assets, dismissed charges, and secured futures. Our track record speaks louder than any marketing campaign.
                    </p>
<div className="flex gap-4">
<button className="px-6 py-3 rounded-full bg-white text-slate-900 font-medium hover:bg-blue-50 transition-colors">View Case Studies</button>
</div>
</div>
<div className="grid grid-cols-2 gap-6 reveal delay-200">
<div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
<div className="text-4xl font-medium mb-2 text-blue-400">$450M+</div>
<div className="text-sm text-slate-400">Recovered for Clients</div>
</div>
<div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
<div className="text-4xl font-medium mb-2 text-brand-orange">98%</div>
<div className="text-sm text-slate-400">Success Rate</div>
</div>
<div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
<div className="text-4xl font-medium mb-2 text-white">25+</div>
<div className="text-sm text-slate-400">Years Experience</div>
</div>
<div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
<div className="text-4xl font-medium mb-2 text-blue-400">5k+</div>
<div className="text-sm text-slate-400">Cases Closed</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight mb-4 text-slate-900">Start your journey.</h2>
<p className="text-slate-500 text-lg">Select the engagement model that fits your needs.</p>
</div>
<div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-stretch">

<div className="rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-lg transition-all reveal delay-100 flex flex-col bg-white group">
<div className="mb-6">
<span className="text-sm font-semibold text-slate-400 uppercase tracking-wide">Initial Assessment</span>
<div className="flex items-baseline gap-1 mt-2">
<span className="text-3xl font-medium tracking-tight text-slate-900">Case Evaluation</span>
</div>
<p className="text-sm text-slate-500 mt-2">Comprehensive review of your legal standing.</p>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-slate-700">
<i className="w-4 h-4 mt-0.5 text-blue-600" data-lucide="check"></i> 60-minute partner consultation
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-700">
<i className="w-4 h-4 mt-0.5 text-blue-600" data-lucide="check"></i> Detailed document review
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-700">
<i className="w-4 h-4 mt-0.5 text-blue-600" data-lucide="check"></i> Strategic roadmap delivery
                        </li>
</ul>
<a className="w-full block text-center border border-slate-200 font-medium py-3 rounded-xl transition-colors hover:bg-slate-50 text-slate-900 group-hover:border-blue-200" href="#">
                        Request Evaluation
                    </a>
</div>

<div className="rounded-3xl p-8 border border-blue-900 shadow-2xl relative reveal delay-200 flex flex-col transform md:-translate-y-4 bg-[#1E3A8A] text-white">
<div className="absolute top-0 right-0 bg-brand-orange text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl text-white">
                        RECOMMENDED
                    </div>
<div className="mb-6">
<span className="text-sm font-semibold uppercase tracking-wide text-blue-200">Full Representation</span>
<div className="flex items-baseline gap-1 mt-2">
<span className="text-3xl font-medium tracking-tight">Retain Firm</span>
</div>
<p className="text-sm mt-2 text-blue-100">Complete legal coverage for complex matters.</p>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-blue-50">
<div className="p-0.5 rounded-full bg-blue-500/30"><i className="w-3 h-3 text-white" data-lucide="check"></i></div>
<span className="font-medium">Unlimited consultation access</span>
</li>
<li className="flex items-start gap-3 text-sm text-blue-50">
<div className="p-0.5 rounded-full bg-blue-500/30"><i className="w-3 h-3 text-white" data-lucide="check"></i></div>
<span className="font-medium">Priority court representation</span>
</li>
<li className="flex items-start gap-3 text-sm text-blue-50">
<div className="p-0.5 rounded-full bg-blue-500/30"><i className="w-3 h-3 text-white" data-lucide="check"></i></div>
<span className="font-medium">Direct partner assignment</span>
</li>
</ul>
<a className="w-full block text-center font-bold py-3 rounded-xl transition-colors bg-white text-blue-900 hover:bg-blue-50" href="#">
                        Secure Retainer
                    </a>
</div>
</div>
</div>
</section>

<footer className="pt-20 pb-10 border-t border-slate-200 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
<div>
<div className="flex items-center gap-2 mb-4">
<div className="w-8 h-8 flex items-center justify-center text-white bg-blue-800 rounded-lg">
<i className="w-5 h-5 stroke-[2]" data-lucide="scale"></i>
</div>
<span className="font-semibold text-xl tracking-tight text-slate-900">TrueNorth</span>
</div>
<p className="text-sm text-slate-500 max-w-xs">Unwavering commitment to justice. Protecting your interests in an ever-changing world.</p>
</div>
<div className="flex gap-4">
<a className="px-6 py-2.5 rounded-full text-sm font-medium transition-colors bg-slate-900 text-white hover:bg-slate-800" href="#">
                        Client Portal
                    </a>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-slate-200 pt-10">
<div>
<h4 className="font-semibold mb-4 text-xs uppercase tracking-wider text-slate-900">Practice</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-blue-700" href="#">Corporate</a></li>
<li><a className="hover:text-blue-700" href="#">Family Law</a></li>
<li><a className="hover:text-blue-700" href="#">Real Estate</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold mb-4 text-xs uppercase tracking-wider text-slate-900">Company</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-blue-700" href="#">About Us</a></li>
<li><a className="hover:text-blue-700" href="#">Careers</a></li>
<li><a className="hover:text-blue-700" href="#">Press</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold mb-4 text-xs uppercase tracking-wider text-slate-900">Contact</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-blue-700" href="#">contact@truenorth.law</a></li>
<li><a className="hover:text-blue-700" href="#">+1 (888) 555-0123</a></li>
</ul>
</div>
<div className="flex items-end justify-end col-span-2 md:col-span-1">
<p className="text-xs text-slate-400">© 2025 TrueNorth Law.</p>
</div>
</div>
</div>
</footer>


    </>
  );
}
