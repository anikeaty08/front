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



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="HzcaAbRLaALMhHJp8gLY"></div>

</div></div>

<div className="mx-auto max-w-7xl border-l border-r border-dashed border-neutral-300 min-h-screen relative bg-neutral-50/50 flex flex-col">

<div className="absolute inset-0 pointer-events-none flex justify-between px-4 opacity-20 z-0">
<div className="w-px h-full bg-neutral-300"></div>
<div className="w-px h-full bg-neutral-300"></div>
<div className="w-px h-full bg-neutral-300"></div>
</div>

<nav className="relative z-20 pt-8 px-4 md:px-8 flex justify-center">
<div className="bg-white/80 backdrop-blur-md border border-neutral-200/80 rounded-full py-2 px-4 flex items-center gap-6 text-sm font-sans shadow-sm">
<a className="text-neutral-500 hover:text-neutral-900 transition-colors" href="#">The Harley Group</a>
<a className="text-neutral-900 font-semibold transition-colors" href="#">Executive Profile</a>
<a className="text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Domain Strategy</a>
<a className="text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Connect</a>
</div>
</nav>
<main className="relative z-10 p-4 md:p-6 lg:p-8 space-y-6 flex-grow">

<section className="relative w-full rounded-[2.5rem] overflow-hidden bg-[#0f1115] text-white min-h-[550px] flex flex-col justify-center p-8 lg:p-16 shadow-2xl">

<div className="absolute inset-0 z-0">
<div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
<div className="absolute -top-40 -right-40 w-96 h-96 bg-neutral-600/20 rounded-full blur-[100px]"></div>
<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#0f1115] to-transparent z-0"></div>
</div>

<div className="relative z-10 max-w-4xl mt-auto pb-12">
<span className="inline-flex items-center gap-2 text-neutral-400 text-xs font-sans uppercase tracking-widest mb-6 border border-neutral-700 bg-neutral-800/50 rounded-full px-3 py-1">
<span className="w-1.5 h-1.5 rounded-full bg-neutral-300"></span> [Full Name] · CEO, The Harley Group
                    </span>
<h1 className="text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-6 text-white font-manrope font-semibold tracking-tight">
                        Architecting strategic <br/>
<span className="text-neutral-500 font-manrope font-semibold tracking-tight">long-term value.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 font-sans max-w-2xl leading-relaxed">
                        As Chief Executive Officer of The Harley Group, I leverage over 20 years of senior leadership experience to guide the organization's strategic direction. My mandate centers on operational excellence, domain ecosystems, and building resilient frameworks for the future.
                    </p>
</div>
</section>

<section className="py-16 md:py-24 px-4 md:px-8 max-w-6xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

<div className="lg:col-span-4 flex flex-col space-y-4">
<h2 className="text-3xl lg:text-4xl text-neutral-900 font-manrope font-semibold tracking-tight leading-tight">
                            Executive Leadership <br/> &amp; Vision.
                        </h2>
<div className="h-px w-12 bg-neutral-300 my-4"></div>
<p className="text-sm text-neutral-500 font-sans tracking-widest uppercase">Two decades of impact</p>
</div>

<div className="lg:col-span-8 space-y-8 font-sans text-base md:text-lg text-neutral-600 leading-relaxed">
<p>
                            For over two decades, my career has been defined by a commitment to strategic oversight, organizational resilience, and operational excellence at the highest tiers of senior leadership. As Chief Executive Officer, I view my fundamental role as the primary architect of The Harley Group’s long-term trajectory. My background is deeply rooted in navigating complex corporate landscapes, ensuring that every initiative we undertake is tightly aligned with our core mandate of sustainable, disciplined growth.
                        </p>
<p>
                            The foundation of The Harley Group’s success lies in executing with unwavering precision. Throughout my tenure in executive leadership, I have dedicated myself to building robust organizational structures that empower high-level strategic thinking and foster decisive, well-reasoned action. By establishing strict lines of accountability, removing systemic operational friction, and prioritizing structural clarity, I ensure that our organization remains singularly focused on creating tangible value rather than chasing fleeting market trends.
                        </p>
<p>
                            A critical and differentiating component of our forward-looking strategy involves our extensive digital footprint. Recognizing the foundational importance of modern internet architecture, I actively direct our investments and strategic positioning within domain portfolios and digital initiatives. Within The Harley Group, these assets are not viewed merely as technical functions; they are vital, high-value levers for market positioning. By maintaining absolute control over our digital ecosystems, we ensure that the organization leverages the internet as a core institutional asset, driving strategic foresight and maintaining a distinct competitive advantage.
                        </p>
</div>
</div>
</section>

<section className="py-20 md:py-24 relative overflow-hidden border border-neutral-200/60 bg-white/50 rounded-3xl lg:rounded-[2.5rem]">

<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-soft-light pointer-events-none"></div>
<div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">

<div className="mb-16 md:mb-20 max-w-2xl">
<span className="text-sm text-neutral-500 font-sans uppercase tracking-widest block mb-3">Core Principles</span>
<h2 className="text-3xl md:text-4xl lg:text-5xl text-neutral-900 font-manrope font-semibold tracking-tight mb-6">
                            Strategic Philosophy.
                        </h2>
<p className="text-base md:text-lg text-neutral-500 font-sans leading-relaxed">
                            The intersection of traditional executive leadership and digital strategy, grounded in discipline and clarity.
                        </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">

<div className="bg-white p-8 md:p-10 rounded-2xl border border-neutral-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] transition-all duration-500 group flex flex-col h-full">
<div className="w-12 h-12 rounded-xl bg-neutral-50 flex items-center justify-center mb-6 border border-neutral-100 group-hover:bg-neutral-900 group-hover:border-neutral-800 transition-colors duration-300">
<iconify-icon className="text-2xl text-neutral-600 group-hover:text-white transition-colors duration-300" icon="solar:minimize-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl md:text-2xl text-neutral-900 mb-3 font-manrope font-semibold tracking-tight">Strategic Clarity</h3>
<p className="text-sm md:text-base text-neutral-500 leading-relaxed font-sans mt-auto">
                                Complex organizational challenges require decisive distillation. I prioritize clear, uncompromised directives to align the enterprise and drive focused execution across every tier of The Harley Group.
                            </p>
</div>

<div className="bg-white p-8 md:p-10 rounded-2xl border border-neutral-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] transition-all duration-500 group flex flex-col h-full">
<div className="w-12 h-12 rounded-xl bg-neutral-50 flex items-center justify-center mb-6 border border-neutral-100 group-hover:bg-neutral-900 group-hover:border-neutral-800 transition-colors duration-300">
<iconify-icon className="text-2xl text-neutral-600 group-hover:text-white transition-colors duration-300" icon="solar:network-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl md:text-2xl text-neutral-900 mb-3 font-manrope font-semibold tracking-tight">Digital Ecosystems</h3>
<p className="text-sm md:text-base text-neutral-500 leading-relaxed font-sans mt-auto">
                                Viewing internet and domain initiatives through an executive lens. We treat digital positioning as foundational real estate, actively leveraging it to expand institutional reach and authority.
                            </p>
</div>

<div className="bg-white p-8 md:p-10 rounded-2xl border border-neutral-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] transition-all duration-500 group flex flex-col h-full">
<div className="w-12 h-12 rounded-xl bg-neutral-50 flex items-center justify-center mb-6 border border-neutral-100 group-hover:bg-neutral-900 group-hover:border-neutral-800 transition-colors duration-300">
<iconify-icon className="text-2xl text-neutral-600 group-hover:text-white transition-colors duration-300" icon="solar:users-group-two-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl md:text-2xl text-neutral-900 mb-3 font-manrope font-semibold tracking-tight">Disciplined Control</h3>
<p className="text-sm md:text-base text-neutral-500 leading-relaxed font-sans mt-auto">
                                Effective leadership demands rigorous oversight. We maintain strict structural and operational discipline, ensuring our investments and core assets remain securely under strategic command.
                            </p>
</div>

<div className="bg-white p-8 md:p-10 rounded-2xl border border-neutral-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] transition-all duration-500 group flex flex-col h-full">
<div className="w-12 h-12 rounded-xl bg-neutral-50 flex items-center justify-center mb-6 border border-neutral-100 group-hover:bg-neutral-900 group-hover:border-neutral-800 transition-colors duration-300">
<iconify-icon className="text-2xl text-neutral-600 group-hover:text-white transition-colors duration-300" icon="solar:chart-line-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl md:text-2xl text-neutral-900 mb-3 font-manrope font-semibold tracking-tight">Long-Term Positioning</h3>
<p className="text-sm md:text-base text-neutral-500 leading-relaxed font-sans mt-auto">
                                Every decision is weighed against its compounding future value. We build infrastructure and corporate strategies designed to weather market shifts and support generational organizational growth.
                            </p>
</div>
</div>
</div>
</section>

<section className="overflow-hidden md:p-16 flex flex-col text-center bg-[#050505] w-full border-white/5 border rounded-[2.5rem] mt-12 pt-8 pr-8 pb-8 pl-8 relative shadow-2xl items-center">

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-neutral-600/10 rounded-full blur-[120px] pointer-events-none translate-y-1/2"></div>
<div className="relative z-10 max-w-2xl mx-auto space-y-8 py-12">

<div className="mx-auto w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 shadow-lg backdrop-blur-sm">
<iconify-icon className="text-2xl text-neutral-300" icon="solar:user-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="space-y-6">
<h2 className="text-3xl md:text-5xl text-white font-manrope font-semibold tracking-tight">The vision forward.</h2>
<p className="text-base md:text-lg text-neutral-400 font-sans leading-relaxed">
                            As CEO, my ultimate mandate is to ensure that The Harley Group remains a profoundly resilient, forward-thinking enterprise. We are continuously refining our operational methodologies and expanding our digital frameworks to secure our organizational prominence for the decades to come.
                        </p>
</div>

<div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-3 rounded-full bg-white text-black hover:bg-neutral-200 transition-all font-sans text-sm font-medium flex items-center justify-center gap-2">
                            Connect with The Harley Group <iconify-icon className="text-base" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="w-full sm:w-auto px-8 py-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all font-sans text-sm font-medium">
                            Explore Our Initiatives
                        </button>
</div>
</div>
</section>
</main>

<footer className="pb-8 pt-4 text-center mt-auto relative z-10">
<p className="text-xs text-neutral-400 font-sans uppercase tracking-widest">© The Harley Group. Structured for the future.</p>
</footer>
</div>

    </>
  );
}
