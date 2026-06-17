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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons();
    
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
      

<nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-black/60 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-2xl font-medium tracking-tight text-white flex items-center gap-2" href="#">
                Apexifyr
            </a>
<div className="hidden md:flex items-center space-x-10">
<a className="text-lg font-normal text-zinc-400 hover:text-white transition-colors" href="#story">Our Story</a>
<a className="text-lg font-normal text-zinc-400 hover:text-white transition-colors" href="#services">Services</a>
<a className="text-lg font-normal text-zinc-400 hover:text-white transition-colors" href="#work">Results</a>
</div>
<div className="hidden md:flex">
<a className="bg-white text-black px-6 py-2.5 rounded-full text-lg font-medium hover:bg-zinc-200 transition-colors" href="#contact">
                    Get Started
                </a>
</div>

<button className="md:hidden text-white">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</nav>
<main className="">

<section className="relative pt-40 pb-24 md:pt-56 md:pb-32 overflow-hidden flex flex-col items-center justify-center min-h-[90vh]">

<div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[150px] pointer-events-none"></div>
<div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-10">
<span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
<span className="text-base font-medium tracking-wide text-zinc-300">Intelligent Operations</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight mb-8 leading-[1.1]">
                    AI automation to <br className="hidden md:block"/>revolutionize business.
                </h1>
<p className="text-xl md:text-2xl font-normal text-zinc-400 max-w-3xl mx-auto mb-12 leading-relaxed">
                    We architect bespoke AI agents and autonomous workflows that transform complex enterprise operations into seamless, high-velocity systems.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-5">
<a className="w-full sm:w-auto bg-white text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2" href="#contact">
                        Schedule a Consultation <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<a className="w-full sm:w-auto bg-transparent border border-zinc-800 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-zinc-900 transition-colors flex items-center justify-center" href="#services">
                        Explore Capabilities
                    </a>
</div>
</div>

<div className="w-full max-w-6xl mx-auto px-6 mt-24 relative z-10 hidden md:block opacity-60">
<div className="rounded-2xl border border-white/10 bg-black overflow-hidden shadow-2xl shadow-cyan-900/10">
<div className="h-12 border-b border-white/10 bg-zinc-900/50 flex items-center px-4 gap-2">
<div className="w-3 h-3 rounded-full bg-zinc-700"></div>
<div className="w-3 h-3 rounded-full bg-zinc-700"></div>
<div className="w-3 h-3 rounded-full bg-zinc-700"></div>
</div>
<div className="p-8 grid grid-cols-3 gap-6">
<div className="col-span-2 space-y-4">
<div className="h-8 w-1/3 bg-zinc-900 rounded"></div>
<div className="h-32 w-full bg-zinc-900/50 rounded-lg border border-white/5 flex items-end p-4 gap-2">
<div className="w-full bg-indigo-500/20 h-[30%] rounded-t"></div>
<div className="w-full bg-indigo-500/40 h-[50%] rounded-t"></div>
<div className="w-full bg-indigo-500/60 h-[80%] rounded-t"></div>
<div className="w-full bg-cyan-400/80 h-[100%] rounded-t"></div>
</div>
</div>
<div className="space-y-4">
<div className="h-8 w-1/2 bg-zinc-900 rounded"></div>
<div className="h-12 w-full bg-zinc-900/50 rounded-lg border border-white/5"></div>
<div className="h-12 w-full bg-zinc-900/50 rounded-lg border border-white/5"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 border-t border-white/5 bg-zinc-950/50" id="story">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
<div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-8">Engineering the future of enterprise execution.</h2>
<div className="space-y-6 text-lg font-normal text-zinc-400 leading-relaxed">
<p>Apexifyr was established on a fundamental insight: modern businesses are constrained not by a lack of data, but by the friction in processing it. Legacy systems and manual workflows create bottlenecks that stifle innovation and scale.</p>
<p>Our mission is to dismantle these inefficiencies. We deploy state-of-the-art artificial intelligence and robust automation architectures to ensure our clients operate at peak optimization, allowing human capital to focus on strategic growth rather than repetitive tasks.</p>
</div>
</div>
<div className="relative aspect-square md:aspect-[4/5] rounded-3xl bg-black border border-white/10 overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-bl from-indigo-900/20 via-black to-black"></div>

<div className="relative w-full h-full p-12 flex flex-col justify-between opacity-80">
<div className="flex justify-between items-start">
<i className="w-10 h-10 text-zinc-600" data-lucide="cpu" strokeWidth="1.5"></i>
<div className="w-24 h-px bg-gradient-to-r from-cyan-500 to-transparent mt-5"></div>
</div>
<div className="flex justify-center">
<i className="w-32 h-32 text-zinc-300" data-lucide="network" strokeWidth="1.5"></i>
</div>
<div className="flex justify-between items-end">
<div className="w-24 h-px bg-gradient-to-l from-indigo-500 to-transparent mb-5"></div>
<i className="w-10 h-10 text-zinc-600" data-lucide="database" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 border-t border-white/5" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-20">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">Architecting Intelligence</h2>
<p className="text-xl font-normal text-zinc-400">Comprehensive AI and automation suites designed to optimize every facet of your digital infrastructure.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="p-10 rounded-3xl bg-zinc-900/30 border border-white/5 hover:border-white/10 hover:bg-zinc-900/50 transition-all group">
<div className="w-14 h-14 rounded-2xl bg-black border border-white/10 flex items-center justify-center mb-8 group-hover:border-cyan-500/50 transition-colors">
<i className="w-7 h-7 text-white" data-lucide="git-merge" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-4 text-white">Workflow Automation</h3>
<p className="text-lg font-normal text-zinc-400 leading-relaxed">
                            Connect disparate software systems and automate complex operational sequences. We eliminate manual redundancies, ensuring seamless data flow across your entire tech stack.
                        </p>
</div>

<div className="p-10 rounded-3xl bg-zinc-900/30 border border-white/5 hover:border-white/10 hover:bg-zinc-900/50 transition-all group">
<div className="w-14 h-14 rounded-2xl bg-black border border-white/10 flex items-center justify-center mb-8 group-hover:border-cyan-500/50 transition-colors">
<i className="w-7 h-7 text-white" data-lucide="bar-chart-3" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-4 text-white">Data Insights</h3>
<p className="text-lg font-normal text-zinc-400 leading-relaxed">
                            Transform raw data into actionable intelligence. We build automated reporting dashboards and predictive models that provide real-time visibility into critical business metrics.
                        </p>
</div>

<div className="p-10 rounded-3xl bg-zinc-900/30 border border-white/5 hover:border-white/10 hover:bg-zinc-900/50 transition-all group">
<div className="w-14 h-14 rounded-2xl bg-black border border-white/10 flex items-center justify-center mb-8 group-hover:border-indigo-500/50 transition-colors">
<i className="w-7 h-7 text-white" data-lucide="bot" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-4 text-white">Custom AI Agents</h3>
<p className="text-lg font-normal text-zinc-400 leading-relaxed">
                            Deploy bespoke Large Language Models tailored to your internal knowledge base. Automate customer support, internal onboarding, and complex decision-making processes.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-32 border-t border-white/5 bg-zinc-950/50" id="work">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-center gap-4 mb-16">
<div className="h-px bg-white/10 flex-grow"></div>
<h2 className="text-xl font-medium tracking-tight text-zinc-500 uppercase">Proven Results</h2>
<div className="h-px bg-white/10 flex-grow"></div>
</div>
<div className="grid md:grid-cols-2 gap-12">

<div className="p-10 rounded-3xl bg-black border border-white/10 relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-10">
<i className="w-24 h-24" data-lucide="quote" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-normal text-zinc-300 mb-8 leading-snug relative z-10">
                            "Apexifyr completely rewired our customer support infrastructure. The custom AI agents they deployed handle 70% of inquiries autonomously, reducing response times from hours to seconds."
                        </h3>
<div className="flex items-center gap-4 relative z-10">
<div className="w-12 h-12 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center">
<span className="text-base font-medium">SJ</span>
</div>
<div>
<div className="text-lg font-medium text-white">Sarah Jenkins</div>
<div className="text-base font-normal text-zinc-500">COO, TechFlow Inc.</div>
</div>
</div>
</div>

<div className="p-10 rounded-3xl bg-black border border-white/10 relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-10">
<i className="w-24 h-24" data-lucide="quote" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-normal text-zinc-300 mb-8 leading-snug relative z-10">
                            "The data automation pipeline Apexifyr built eliminated two full days of manual reporting each week. We now have real-time financial insights that are critical for our executive team."
                        </h3>
<div className="flex items-center gap-4 relative z-10">
<div className="w-12 h-12 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center">
<span className="text-base font-medium">MR</span>
</div>
<div>
<div className="text-lg font-medium text-white">Marcus Reed</div>
<div className="text-base font-normal text-zinc-500">VP of Finance, Nexus Corp.</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden text-center border-white/5 border-t pt-40 pb-40 relative" id="contact">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-900/10 pointer-events-none"></div>
<div className="max-w-3xl mx-auto px-6 relative z-10">
<h2 className="text-5xl md:text-6xl font-semibold tracking-tight mb-8">Ready to scale intelligently?</h2>
<p className="text-xl font-normal text-zinc-400 mb-12 max-w-2xl mx-auto">
                    Schedule a technical consultation to discuss how advanced AI and automation can integrate into your existing infrastructure.
                </p>
<div className="bg-black/50 p-2 rounded-full border border-white/10 inline-flex items-center justify-between w-full max-w-md mx-auto backdrop-blur-xl">
<input className="bg-transparent text-white text-lg font-normal px-6 py-4 w-full focus:outline-none placeholder:text-zinc-600" placeholder="Enter your work email" type="email"/>
<button className="bg-white text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-zinc-200 transition-colors whitespace-nowrap">
                        Get Started
                    </button>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-black py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="text-xl font-medium tracking-tight text-white">
                Apexifyr
            </div>
<div className="flex items-center space-x-8 text-base font-normal text-zinc-500">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
</div>
<div className="text-xs font-normal text-zinc-600">© 2026 Apexifyr Agency. All rights reserved.</div>
</div>
</footer>


    </>
  );
}
