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
      

<div className="grain"></div>

<nav className="fixed top-0 left-0 right-0 z-40 px-6 py-4 flex justify-between items-center mix-blend-difference text-[#F7F5F0]">
<a className="text-xl tracking-tighter font-medium z-50" href="#">K O D A</a>
<div className="hidden md:flex gap-8 text-sm font-light tracking-wide">
<a className="hover:opacity-60 transition-opacity" href="#about">ABOUT</a>
<a className="hover:opacity-60 transition-opacity" href="#works">WORK</a>
<a className="hover:opacity-60 transition-opacity" href="#services">
          SERVICES
        </a>
<a className="hover:opacity-60 transition-opacity" href="#contact">
          CONTACT
        </a>
</div>
<button className="flex items-center gap-2 border border-[#F7F5F0]/30 rounded-full px-4 py-2 text-xs hover:bg-[#F7F5F0] hover:text-[#2D2420] transition-colors duration-300">
<span>START PROJECT</span>
<iconify-icon icon="lucide:arrow-up-right" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</nav>

<header className="relative w-full min-h-screen flex flex-col justify-end pb-12 px-4 md:px-8 border-b border-[#2D2420]/10 overflow-hidden">

<div className="absolute top-0 right-0 w-2/3 h-full bg-[#E8E4DA] -z-10 clip-path-slant"></div>
<style>
        .clip-path-slant { clip-path: polygon(20% 0, 100% 0, 100% 100%, 0% 100%); }
      </style>
<div className="w-full max-w-7xl mx-auto z-10">
<div className="mb-8 flex items-center gap-4">
<span className="inline-block w-3 h-3 bg-[#2D2420] rounded-full animate-pulse"></span>
<p className="text-xs tracking-widest uppercase text-[#2D2420]/60">
            System Architects
          </p>
</div>
<h1 className="text-6xl md:text-8xl lg:text-9xl leading-[0.85] tracking-tighter text-[#2D2420] font-medium mix-blend-darken mb-12">
          DIGITAL
          <br/>
<span className="pl-[10vw] italic font-light">ECOLOGIES</span>
<br/>
          FOR HUMANS
        </h1>
<div className="flex flex-col md:flex-row justify-between items-end border-t border-[#2D2420] pt-6">
<p className="max-w-md text-sm md:text-base leading-relaxed font-light text-[#2D2420]/80">
            We decode complexity to build resilient information infrastructures.
            Merging raw data with fluid design to create future-proof digital
            environments.
          </p>
<div className="mt-8 md:mt-0 animate-spin-slow">
<iconify-icon height="64" icon="lucide:asterisk" strokeWidth="1.5" width="64"></iconify-icon>
</div>
</div>
</div>
</header>

<div className="w-full bg-[#2D2420] text-[#F7F5F0] py-4 border-y border-[#2D2420] z-20 relative">
<div className="marquee-container">
<div className="marquee-content text-4xl md:text-6xl font-medium tracking-tight">
<span className="mx-8">FULL STACK ENGINEERING</span>
<span className="mx-8 text-[#F7F5F0]/30">//</span>
<span className="mx-8">CLOUD ARCHITECTURE</span>
<span className="mx-8 text-[#F7F5F0]/30">//</span>
<span className="mx-8">AI INTEGRATION</span>
<span className="mx-8 text-[#F7F5F0]/30">//</span>
<span className="mx-8">BLOCKCHAIN PROTOCOLS</span>
<span className="mx-8 text-[#F7F5F0]/30">//</span>
<span className="mx-8">CYBERNETICS</span>
<span className="mx-8 text-[#F7F5F0]/30">//</span>
<span className="mx-8">FULL STACK ENGINEERING</span>
<span className="mx-8 text-[#F7F5F0]/30">//</span>
<span className="mx-8">CLOUD ARCHITECTURE</span>
<span className="mx-8 text-[#F7F5F0]/30">//</span>
</div>
</div>
</div>

<section className="py-24 px-4 md:px-8 bg-[#F7F5F0] border-b border-[#2D2420]/10" id="about">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
<div className="w-full md:w-1/2 relative">
<div className="aspect-[3/4] w-full bg-[#E6E1D6] rounded-sm overflow-hidden relative group">
<img alt="Studio Culture" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&amp;w=2064&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#2D2420]/10 mix-blend-multiply"></div>
</div>
<div className="absolute -bottom-8 -left-8 w-32 h-32 border border-[#2D2420] rounded-full flex items-center justify-center bg-[#F7F5F0] animate-[spin_12s_linear_infinite]">
<iconify-icon icon="lucide:globe" strokeWidth="1" width="32"></iconify-icon>
</div>
</div>
<div className="w-full md:w-1/2">
<div className="flex items-center gap-4 mb-6">
<span className="w-12 h-[1px] bg-[#2D2420]"></span>
<span className="text-xs uppercase tracking-widest text-[#2D2420]/60">
              Who We Are
            </span>
</div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter mb-8 leading-[1.1]">
            ARCHITECTING THE
            <span className="italic font-light opacity-70">INVISIBLE</span>
</h2>
<div className="space-y-6 text-[#2D2420]/80 font-light leading-relaxed text-lg">
<p>
              We are a multidisciplinary team of systems architects, designers,
              and creative technologists. We don't just write code; we cultivate
              digital ecosystems that adapt, learn, and grow.
            </p>
<p>
              Our approach strips away the non-essential to reveal the elegant
              logic underneath, ensuring your infrastructure is as resilient as
              it is beautiful.
            </p>
</div>
<div className="mt-10 pt-8 border-t border-[#2D2420]/10 flex gap-12">
<a className="flex items-center gap-2 border-b border-[#2D2420] pb-1 hover:opacity-60 transition-opacity text-sm tracking-wide" href="#contact">
<span>OUR PHILOSOPHY</span>
<iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>
</a>
</div>
</div>
</div>
</section>
<section className="py-24 px-4 md:px-8 bg-[#F7F5F0]" id="services">
<div className="max-w-7xl mx-auto">
<div className="flex justify-between items-end mb-16">
<h2 className="text-4xl md:text-6xl tracking-tighter font-medium">
            CAPABILITIES
          </h2>
<span className="hidden md:block text-xs uppercase tracking-widest border border-[#2D2420] rounded-full px-3 py-1">
            V. 2.0
          </span>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-[minmax(250px,auto)]">

<div className="group md:col-span-8 bg-[#E6E1D6] rounded-2xl p-8 relative overflow-hidden transition-colors hover:bg-[#DCD6C8]">
<div className="absolute top-6 right-6 p-2 bg-[#2D2420] text-[#F7F5F0] rounded-full">
<iconify-icon icon="lucide:cpu" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="h-full flex flex-col justify-between relative z-10">
<h3 className="text-3xl tracking-tight font-medium">
                Neural Networks &amp;
                <br/>
                AI Systems
              </h3>
<div className="flex justify-between items-end">
<p className="text-sm max-w-xs font-light text-[#2D2420]/70">
                  Custom LLM deployment and predictive analytics engines built
                  for scale.
                </p>
<button className="w-10 h-10 rounded-full border border-[#2D2420] flex items-center justify-center group-hover:bg-[#2D2420] group-hover:text-[#F7F5F0] transition-all">
<iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="md:col-span-4 bg-[#2D2420] text-[#F7F5F0] rounded-2xl p-8 flex flex-col justify-between">
<div>
<iconify-icon className="text-[#D4C5B0]" icon="lucide:zap" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<span className="text-6xl md:text-7xl font-medium tracking-tighter block mb-2">
                99.9%
              </span>
<span className="text-xs uppercase tracking-widest text-[#F7F5F0]/60">
                Uptime Guaranteed
              </span>
</div>
</div>

<div className="md:col-span-5 bg-[#F7F5F0] border border-[#2D2420]/10 rounded-2xl p-8 relative group overflow-hidden">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center grayscale opacity-20 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700"></div>
<div className="relative z-10 h-full flex flex-col justify-end">
<h3 className="text-2xl tracking-tight font-medium bg-[#F7F5F0]/80 backdrop-blur-sm p-2 w-fit rounded-lg">
                Cyber Security
              </h3>
</div>
</div>

<div className="md:col-span-7 bg-[#F7F5F0] border border-[#2D2420] rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-start md:items-center">
<div className="flex-1">
<h3 className="text-2xl tracking-tight font-medium mb-4">
                Cloud Infrastructure
              </h3>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm font-light border-b border-[#2D2420]/10 pb-2">
<iconify-icon icon="lucide:check" strokeWidth="1.5" width="14"></iconify-icon>
                  AWS / Azure Architecture
                </li>
<li className="flex items-center gap-3 text-sm font-light border-b border-[#2D2420]/10 pb-2">
<iconify-icon icon="lucide:check" strokeWidth="1.5" width="14"></iconify-icon>
                  Kubernetes Orchestration
                </li>
<li className="flex items-center gap-3 text-sm font-light border-b border-[#2D2420]/10 pb-2">
<iconify-icon icon="lucide:check" strokeWidth="1.5" width="14"></iconify-icon>
                  Serverless Computing
                </li>
</ul>
</div>
<div className="w-full md:w-40 aspect-square rounded-full border border-[#2D2420] flex items-center justify-center p-4 relative">
<div className="absolute inset-2 border border-[#2D2420] rounded-full border-dashed animate-[spin_10s_linear_infinite]"></div>
<iconify-icon icon="lucide:cloud" strokeWidth="1.5" width="32"></iconify-icon>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 px-4 md:px-8 bg-[#2D2420] text-[#F7F5F0]" id="works">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<h2 className="text-4xl md:text-6xl tracking-tighter font-medium">
            SELECTED WORKS
          </h2>
<a className="pb-1 border-b border-[#F7F5F0] text-sm tracking-wide hover:opacity-70 transition-opacity" href="#">
            VIEW ARCHIVE
          </a>
</div>
<div className="space-y-12">

<div className="group relative block">
<div className="absolute inset-0 bg-[#F7F5F0] transform scale-y-0 origin-bottom transition-transform duration-500 group-hover:scale-y-100 -z-10"></div>
<div className="border-t border-[#F7F5F0]/20 group-hover:border-transparent py-12 transition-colors">
<div className="flex flex-col md:flex-row justify-between gap-8 md:items-center px-4 group-hover:text-[#2D2420] transition-colors">
<span className="text-xs font-mono opacity-50">01</span>
<h3 className="text-3xl md:text-5xl font-medium tracking-tight">
                  VANTAGE FINANCE
                </h3>
<p className="text-sm max-w-xs opacity-70">
                  Re-engineering high-frequency trading infrastructure with Rust
                  and WebAssembly.
                </p>
<div className="flex gap-2 text-xs uppercase tracking-widest border border-[#F7F5F0]/20 group-hover:border-[#2D2420]/20 rounded-full px-3 py-1">
<span>FINTECH</span>
</div>
</div>
</div>
</div>

<div className="group relative block">
<div className="absolute inset-0 bg-[#F7F5F0] transform scale-y-0 origin-bottom transition-transform duration-500 group-hover:scale-y-100 -z-10"></div>
<div className="border-t border-[#F7F5F0]/20 group-hover:border-transparent py-12 transition-colors">
<div className="flex flex-col md:flex-row justify-between gap-8 md:items-center px-4 group-hover:text-[#2D2420] transition-colors">
<span className="text-xs font-mono opacity-50">02</span>
<h3 className="text-3xl md:text-5xl font-medium tracking-tight">
                  OASIS HEALTH
                </h3>
<p className="text-sm max-w-xs opacity-70">
                  HIPAA-compliant federated learning systems for diagnostic
                  imaging.
                </p>
<div className="flex gap-2 text-xs uppercase tracking-widest border border-[#F7F5F0]/20 group-hover:border-[#2D2420]/20 rounded-full px-3 py-1">
<span>MEDTECH</span>
</div>
</div>
</div>
</div>

<div className="group relative block">
<div className="absolute inset-0 bg-[#F7F5F0] transform scale-y-0 origin-bottom transition-transform duration-500 group-hover:scale-y-100 -z-10"></div>
<div className="border-t border-[#F7F5F0]/20 border-b group-hover:border-transparent py-12 transition-colors">
<div className="flex flex-col md:flex-row justify-between gap-8 md:items-center px-4 group-hover:text-[#2D2420] transition-colors">
<span className="text-xs font-mono opacity-50">03</span>
<h3 className="text-3xl md:text-5xl font-medium tracking-tight">
                  AETHER ENERGY
                </h3>
<p className="text-sm max-w-xs opacity-70">
                  Smart grid optimization using decentralized edge computing
                  nodes.
                </p>
<div className="flex gap-2 text-xs uppercase tracking-widest border border-[#F7F5F0]/20 group-hover:border-[#2D2420]/20 rounded-full px-3 py-1">
<span>IOT</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-4 border-t border-[#2D2420]/10 overflow-hidden relative">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
<div className="w-full md:w-1/2">
<h2 className="text-5xl md:text-7xl font-medium tracking-tighter mb-8 leading-[0.9]">
            WE SPEAK
            <br/>
<span className="text-[#8C7B70]">IN CODE.</span>
</h2>
<div className="space-y-6">

<div className="flex items-center justify-between p-4 border border-[#2D2420]/20 rounded-lg hover:border-[#2D2420] transition-colors cursor-pointer group">
<div className="flex items-center gap-4">
<div className="bg-[#E6E1D6] p-2 rounded text-[#2D2420]">
<iconify-icon icon="lucide:code-2" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-medium">Clean Architecture</h4>
<p className="text-xs text-[#2D2420]/60">Scalable Patterns</p>
</div>
</div>
<div className="w-10 h-5 bg-[#2D2420] rounded-full relative">
<div className="absolute right-1 top-1 w-3 h-3 bg-[#F7F5F0] rounded-full"></div>
</div>
</div>

<div className="p-6 border border-[#2D2420]/20 rounded-lg hover:border-[#2D2420] transition-colors">
<div className="flex justify-between mb-4">
<h4 className="font-medium text-sm">Optimization Level</h4>
<span className="font-mono text-sm">98%</span>
</div>
<div className="w-full h-1 bg-[#2D2420]/10 rounded-full overflow-hidden">
<div className="h-full bg-[#2D2420] w-[98%]"></div>
</div>
</div>
</div>
</div>

<div className="w-full md:w-1/2 relative h-[500px]">
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-64 h-96 bg-[#2D2420] rounded-full mix-blend-multiply opacity-80 absolute top-0 left-10"></div>
<div className="w-64 h-96 bg-[#8C7B70] rounded-full mix-blend-multiply opacity-80 absolute top-10 right-10"></div>
<div className="w-64 h-96 bg-[#C4B6A6] rounded-full mix-blend-multiply opacity-80 absolute bottom-0 left-20 backdrop-blur-md"></div>
<div className="absolute z-10 text-[#F7F5F0] text-center font-mono text-xs">
<p>
                DATA
                <br/>
                VISUALIZATION
              </p>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 px-4 md:px-8 bg-[#F7F5F0] border-t border-[#2D2420]/10">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row gap-16">
<div className="w-full md:w-1/3">
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter mb-6">
              THE PROTOCOL
            </h2>
<p className="text-[#2D2420]/70 font-light leading-relaxed mb-8">
              Our methodology is rigorous, iterative, and transparent. We move
              from abstract complexity to concrete utility through four distinct
              phases.
            </p>
<button className="bg-[#2D2420] text-[#F7F5F0] px-6 py-3 rounded-full text-xs tracking-widest uppercase hover:bg-[#8C7B70] transition-colors">
              Download Brief
            </button>
</div>
<div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">

<div className="relative pl-8 border-l border-[#2D2420]/20">
<span className="absolute -left-3 top-0 flex items-center justify-center w-6 h-6 bg-[#F7F5F0] border border-[#2D2420] rounded-full text-xs font-mono">
                1
              </span>
<h3 className="text-xl font-medium mb-3">Discovery &amp; Audit</h3>
<p className="text-sm text-[#2D2420]/60 font-light">
                We map your existing digital terrain, identifying bottlenecks
                and legacy debt before proposing a path forward.
              </p>
</div>

<div className="relative pl-8 border-l border-[#2D2420]/20">
<span className="absolute -left-3 top-0 flex items-center justify-center w-6 h-6 bg-[#F7F5F0] border border-[#2D2420] rounded-full text-xs font-mono">
                2
              </span>
<h3 className="text-xl font-medium mb-3">Architecture</h3>
<p className="text-sm text-[#2D2420]/60 font-light">
                Drafting the blueprints. We select the optimal stack and design
                patterns to ensure scalability and security.
              </p>
</div>

<div className="relative pl-8 border-l border-[#2D2420]/20">
<span className="absolute -left-3 top-0 flex items-center justify-center w-6 h-6 bg-[#F7F5F0] border border-[#2D2420] rounded-full text-xs font-mono">
                3
              </span>
<h3 className="text-xl font-medium mb-3">Synthesis</h3>
<p className="text-sm text-[#2D2420]/60 font-light">
                Agile development sprints. Code is written, tested, and refined
                in continuous integration loops.
              </p>
</div>

<div className="relative pl-8 border-l border-[#2D2420]/20">
<span className="absolute -left-3 top-0 flex items-center justify-center w-6 h-6 bg-[#F7F5F0] border border-[#2D2420] rounded-full text-xs font-mono">
                4
              </span>
<h3 className="text-xl font-medium mb-3">Evolution</h3>
<p className="text-sm text-[#2D2420]/60 font-light">
                Deployment is just the beginning. We monitor system health and
                adapt to new data inputs.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-[#2D2420]">
<div className="flex flex-col items-center justify-center gap-8 text-center px-4">
<iconify-icon className="text-[#2D2420]" icon="lucide:quote" width="32"></iconify-icon>
<h3 className="text-2xl md:text-4xl max-w-4xl font-medium leading-tight">
          "Koda transformed our legacy systems into a reactive, intelligent
          ecosystem. They don't just write code; they engineer business
          biology."
        </h3>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-[#2D2420] rounded-full"></div>
<div className="text-left">
<p className="text-sm font-semibold">Alex V. Stroud</p>
<p className="text-xs text-[#2D2420]/60">CTO, Vertex Dynamics</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 md:px-8 bg-[#E6E1D6]">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center mb-16">
          FREQUENTLY ASKED
        </h2>
<div className="space-y-4">

<details className="group border-b border-[#2D2420]/10 pb-4 cursor-pointer">
<summary className="flex justify-between items-center font-medium list-none">
<span>What is your typical project timeline?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="lucide:chevron-down"></iconify-icon>
</span>
</summary>
<p className="text-[#2D2420]/70 mt-4 text-sm leading-relaxed font-light">
              Most enterprise architectural overhauls take between 3-6 months.
              Specialized MVP builds can be expedited to 8-12 weeks depending on
              complexity.
            </p>
</details>

<details className="group border-b border-[#2D2420]/10 pb-4 cursor-pointer">
<summary className="flex justify-between items-center font-medium list-none">
<span>Do you work with legacy codebases?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="lucide:chevron-down"></iconify-icon>
</span>
</summary>
<p className="text-[#2D2420]/70 mt-4 text-sm leading-relaxed font-light">
              Yes. We specialize in refactoring and modernization. We can wrap
              legacy systems in modern APIs or progressively rewrite them
              (Strangler Fig pattern).
            </p>
</details>

<details className="group border-b border-[#2D2420]/10 pb-4 cursor-pointer">
<summary className="flex justify-between items-center font-medium list-none">
<span>How do you handle data privacy?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="lucide:chevron-down"></iconify-icon>
</span>
</summary>
<p className="text-[#2D2420]/70 mt-4 text-sm leading-relaxed font-light">
              Security by design. We adhere to GDPR, CCPA, and SOC2 standards,
              utilizing encrypted data storage and zero-trust architecture
              principles.
            </p>
</details>
</div>
</div>
</section>
<section className="relative bg-[#2D2420] text-[#F7F5F0] pt-32 pb-12 px-4 md:px-8 overflow-hidden" id="contact">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#F7F5F0]/50 to-transparent"></div>
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
<div>
<h2 className="text-7xl md:text-9xl tracking-tighter font-medium mb-6">
            Let's
            <br/>
            Build.
          </h2>
<div className="flex flex-col gap-2">
<a className="text-2xl font-light hover:underline underline-offset-4 decoration-1" href="mailto:hello@koda.tech">
              hello@koda.tech
            </a>
<p className="text-sm text-[#F7F5F0]/50 max-w-xs mt-4">
              Available for new ambitious projects starting Q4 2024.
            </p>
</div>
</div>
<div className="w-full md:w-auto">
<form className="flex flex-col gap-4 w-full md:w-96">
<div className="relative group">
<input className="peer w-full bg-transparent border-b border-[#F7F5F0]/30 py-3 text-[#F7F5F0] focus:outline-none focus:border-[#F7F5F0] transition-colors placeholder-transparent" placeholder=" " required="" type="email"/>
<label className="absolute left-0 top-3 text-[#F7F5F0]/50 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-valid:-top-4 peer-valid:text-xs cursor-text">
                Email Address
              </label>
</div>
<button className="mt-4 w-full bg-[#F7F5F0] text-[#2D2420] py-4 rounded font-medium hover:bg-[#C4B6A6] transition-colors flex justify-between px-6 items-center group" type="button">
<span>INITIATE</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" strokeWidth="1.5"></iconify-icon>
</button>
</form>
</div>
</div>
<div className="mt-32 pt-8 border-t border-[#F7F5F0]/10 flex flex-col md:flex-row justify-between items-end md:items-center gap-6 text-xs text-[#F7F5F0]/40 uppercase tracking-widest">
<div className="flex gap-6">
<a className="hover:text-[#F7F5F0]" href="#">Instagram</a>
<a className="hover:text-[#F7F5F0]" href="#">Twitter</a>
<a className="hover:text-[#F7F5F0]" href="#">LinkedIn</a>
</div>
<div className="flex items-center gap-2">
<span>© 2024 Koda Inc.</span>
<span className="w-1 h-1 bg-[#F7F5F0]/40 rounded-full"></span>
<span>Zurich, CH</span>
</div>
</div>
</section>

    </>
  );
}
