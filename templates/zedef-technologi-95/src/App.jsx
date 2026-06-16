import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Initialize Lucide Icons
      lucide.createIcons();

      // Scroll Animation Observer
      const observerOptions = {
          threshold: 0.1,
          rootMargin: "0px 0px -50px 0px"
      };

      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('is-visible');
              }
          });
      }, observerOptions);

      document.querySelectorAll('.reveal-on-scroll').forEach((element) => {
          observer.observe(element);
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bg-grain"></div>

<nav className="fixed top-0 w-full z-40 border-b border-white/5 bg-black/80 backdrop-blur-md transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center hover:opacity-80 transition-opacity" href="#">
<img alt="ZEDEF" className="h-8 w-auto" src="https://postimg.cc/HVxLYgcB"/>
</a>
<div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide text-zinc-400">
<a className="hover:text-white transition-colors" href="#work">Work</a>
<a className="hover:text-white transition-colors" href="#services">
            Services
          </a>
<a className="hover:text-white transition-colors" href="#process">
            Process
          </a>
<a className="bg-white text-black px-5 py-2 rounded-full transition-colors hover:bg-[#FFC700] hover:text-black" href="#contact">
            Contact
          </a>
</div>
</div>
</nav>

<section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-20 overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#82644D]/20 rounded-full blur-[120px] pointer-events-none"></div>
<div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#FFC700]/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-5xl mx-auto text-center z-10 reveal-on-scroll">
<h1 className="text-6xl md:text-8xl lg:text-9xl font-medium tracking-tighter text-white leading-[0.95] mb-8 transition-transform duration-700 ease-out hover:scale-[1.01] hover:tracking-tight cursor-default">
          We build the
          <br/>
<span className="text-zinc-500">digital engines</span>
<br/>
          behind modern
          <br/>
          businesses.
        </h1>
<p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-400 font-light leading-relaxed mb-10">
          ZEDEF Technologies Global designs, builds, and scales software, AI,
          and digital systems that drive growth, efficiency, and competitive
          advantage.
        </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
<a className="group relative px-8 py-4 bg-white text-black rounded-full font-medium tracking-wide overflow-hidden hover:scale-105 transition-transform duration-300" href="#contact">
<span className="relative z-10 flex items-center gap-2">
              Book a Strategy Call
              <i className="w-4 h-4" data-lucide="arrow-right"></i>
</span>
<div className="absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 bg-[#FFC700]"></div>
</a>
<a className="px-8 py-4 rounded-full border border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 transition-all duration-300 hover:bg-white/5" href="#work">
            View Our Work
          </a>
</div>
<p className="mt-8 text-xs text-zinc-600 uppercase tracking-widest font-medium">
          Trusted by fast-growing startups and enterprise teams across Africa
          and beyond.
        </p>
</div>
</section>

<section className="py-32 px-6 relative" id="services">
<div className="max-w-7xl mx-auto">
<div className="mb-24 reveal-on-scroll">
<span className="block text-sm font-medium tracking-widest uppercase mb-4 text-[#FFC700]">
            What We Do
          </span>
<h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white max-w-3xl">
            What we build,
            <span className="text-zinc-500">transforms</span>
            how you operate.
          </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">

<div className="group glass-panel p-10 md:p-14 rounded-3xl reveal-on-scroll">
<div className="w-12 h-12 mb-8 text-white bg-zinc-900 rounded-2xl flex items-center justify-center border border-zinc-800 group-hover:bg-[#82644D] group-hover:border-[#FFC700] transition-colors duration-500">
<i className="w-6 h-6" data-lucide="layers"></i>
</div>
<h3 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-4">
              Digital Transformation
            </h3>
<p className="text-zinc-400 text-lg font-light leading-relaxed">
              Turn fragmented, manual operations into seamless, high-performance
              digital platforms.
            </p>
</div>

<div className="group glass-panel p-10 md:p-14 rounded-3xl reveal-on-scroll md:translate-y-12">
<div className="w-12 h-12 mb-8 text-white bg-zinc-900 rounded-2xl flex items-center justify-center border border-zinc-800 group-hover:bg-[#82644D] group-hover:border-[#FFC700] transition-colors duration-500">
<i className="w-6 h-6" data-lucide="pen-tool"></i>
</div>
<h3 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-4">
              Product Design &amp; UX
            </h3>
<p className="text-zinc-400 text-lg font-light leading-relaxed">
              Design experiences that customers love and teams can scale with
              precision.
            </p>
</div>

<div className="group glass-panel p-10 md:p-14 rounded-3xl reveal-on-scroll">
<div className="w-12 h-12 mb-8 text-white bg-zinc-900 rounded-2xl flex items-center justify-center border border-zinc-800 group-hover:bg-[#82644D] group-hover:border-[#FFC700] transition-colors duration-500">
<i className="w-6 h-6" data-lucide="code-2"></i>
</div>
<h3 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-4">
              Software Development
            </h3>
<p className="text-zinc-400 text-lg font-light leading-relaxed">
              Build fast, secure, enterprise-grade platforms tailored
              specifically to your business logic.
            </p>
</div>

<div className="group glass-panel p-10 md:p-14 rounded-3xl reveal-on-scroll md:translate-y-12">
<div className="w-12 h-12 mb-8 text-white bg-zinc-900 rounded-2xl flex items-center justify-center border border-zinc-800 group-hover:bg-[#82644D] group-hover:border-[#FFC700] transition-colors duration-500">
<i className="w-6 h-6" data-lucide="cpu"></i>
</div>
<h3 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-4">
              AI &amp; Automation
            </h3>
<p className="text-zinc-400 text-lg font-light leading-relaxed">
              Automate decisions, workflows, and revenue generation with
              intelligent custom systems.
            </p>
</div>

<div className="group glass-panel p-10 md:p-14 rounded-3xl reveal-on-scroll">
<div className="w-12 h-12 mb-8 text-white bg-zinc-900 rounded-2xl flex items-center justify-center border border-zinc-800 group-hover:bg-[#82644D] group-hover:border-[#FFC700] transition-colors duration-500">
<i className="w-6 h-6" data-lucide="building-2"></i>
</div>
<h3 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-4">
              Enterprise Systems
            </h3>
<p className="text-zinc-400 text-lg font-light leading-relaxed">
              Connect finance, operations, and data into one powerful backbone.
            </p>
</div>

<div className="group glass-panel p-10 md:p-14 rounded-3xl reveal-on-scroll md:translate-y-12">
<div className="w-12 h-12 mb-8 text-white bg-zinc-900 rounded-2xl flex items-center justify-center border border-zinc-800 group-hover:bg-[#82644D] group-hover:border-[#FFC700] transition-colors duration-500">
<i className="w-6 h-6" data-lucide="cloud"></i>
</div>
<h3 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-4">
              Cloud &amp; Data
            </h3>
<p className="text-zinc-400 text-lg font-light leading-relaxed">
              Move faster, scale better, and make smarter decisions with modern
              infrastructure.
            </p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-zinc-950 border-y border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
<div className="lg:col-span-5 reveal-on-scroll">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
              Not just builders.
              <br/>
<span className="text-zinc-500">Strategic technology partners.</span>
</h2>
<p className="text-zinc-400 text-lg font-light mb-8">
              Powering ambitious teams across multiple industries and markets.
              We don't just write code; we architect outcomes.
            </p>
<div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
<div>
<span className="block text-4xl font-medium text-white mb-1">
                  10x
                </span>
<span className="text-sm text-zinc-500 uppercase tracking-wider">
                  Scalability
                </span>
</div>
<div>
<span className="block text-4xl font-medium text-white mb-1">
                  Local
                </span>
<span className="text-sm text-zinc-500 uppercase tracking-wider">
                  Insight
                </span>
</div>
</div>
</div>
<div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 reveal-on-scroll">
<div className="p-8 border border-white/10 rounded-2xl hover:bg-white/5 transition-colors">
<i className="text-white mb-4 w-6 h-6" data-lucide="maximize"></i>
<h4 className="text-xl font-medium text-white mb-2">
                Built for scale
              </h4>
<p className="text-zinc-500 font-light">
                Everything we create is designed to grow with your business from
                day one.
              </p>
</div>
<div className="p-8 border border-white/10 rounded-2xl hover:bg-white/5 transition-colors">
<i className="text-white mb-4 w-6 h-6" data-lucide="zap"></i>
<h4 className="text-xl font-medium text-white mb-2">
                Designed for performance
              </h4>
<p className="text-zinc-500 font-light">
                Speed, reliability, and security are not optional; they are our
                standard.
              </p>
</div>
<div className="p-8 border border-white/10 rounded-2xl hover:bg-white/5 transition-colors">
<i className="text-white mb-4 w-6 h-6" data-lucide="bot"></i>
<h4 className="text-xl font-medium text-white mb-2">
                AI-first engineering
              </h4>
<p className="text-zinc-500 font-light">
                We embed intelligence into every layer of your stack for
                automation.
              </p>
</div>
<div className="p-8 border border-white/10 rounded-2xl hover:bg-white/5 transition-colors">
<i className="text-white mb-4 w-6 h-6" data-lucide="globe"></i>
<h4 className="text-xl font-medium text-white mb-2">
                African insight, global standards
              </h4>
<p className="text-zinc-500 font-light">
                We understand local complexity and build with world-class
                execution.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6" id="process">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-20 reveal-on-scroll">
<h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white">
            A process built for
            <span className="italic font-serif text-zinc-500">momentum</span>
            .
          </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-6 reveal-on-scroll">

<div className="group relative pt-10 border-t border-white/20 hover:border-white transition-colors duration-500">
<span className="absolute top-0 left-0 -translate-y-1/2 w-3 h-3 bg-black border border-white rounded-full group-hover:bg-white transition-colors"></span>
<span className="block text-5xl font-medium text-zinc-800 mb-6 group-hover:text-zinc-600 transition-colors">
              01
            </span>
<h3 className="text-2xl font-medium text-white mb-3">Discover</h3>
<p className="text-zinc-400 font-light text-lg">
              We dive deep into your business, customers, and constraints to
              understand the true problem.
            </p>
</div>

<div className="group relative pt-10 border-t border-white/20 hover:border-white transition-colors duration-500 delay-100">
<span className="absolute top-0 left-0 -translate-y-1/2 w-3 h-3 bg-black border border-white rounded-full group-hover:bg-white transition-colors"></span>
<span className="block text-5xl font-medium text-zinc-800 mb-6 group-hover:text-zinc-600 transition-colors">
              02
            </span>
<h3 className="text-2xl font-medium text-white mb-3">Design</h3>
<p className="text-zinc-400 font-light text-lg">
              We craft systems, flows, and experiences that work beautifully and
              intuitively.
            </p>
</div>

<div className="group relative pt-10 border-t border-white/20 hover:border-white transition-colors duration-500 delay-200">
<span className="absolute top-0 left-0 -translate-y-1/2 w-3 h-3 bg-black border border-white rounded-full group-hover:bg-white transition-colors"></span>
<span className="block text-5xl font-medium text-zinc-800 mb-6 group-hover:text-zinc-600 transition-colors">
              03
            </span>
<h3 className="text-2xl font-medium text-white mb-3">Build</h3>
<p className="text-zinc-400 font-light text-lg">
              Our engineers bring it to life with precision, speed, and clean
              scalable code.
            </p>
</div>

<div className="group relative pt-10 border-t border-white/20 hover:border-white transition-colors duration-500 delay-300">
<span className="absolute top-0 left-0 -translate-y-1/2 w-3 h-3 bg-black border border-white rounded-full group-hover:bg-white transition-colors"></span>
<span className="block text-5xl font-medium text-zinc-800 mb-6 group-hover:text-zinc-600 transition-colors">
              04
            </span>
<h3 className="text-2xl font-medium text-white mb-3">Scale</h3>
<p className="text-zinc-400 font-light text-lg">
              We optimize, grow, and evolve your platform as your business
              expands.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 overflow-hidden bg-zinc-900/30">
<div className="max-w-7xl mx-auto text-center reveal-on-scroll">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-12">
          Built for every
          <span className="text-zinc-500">ambitious</span>
          sector.
        </h2>
<div className="flex flex-wrap justify-center gap-3 md:gap-4">
<div className="group cursor-default border border-white/10 bg-white/5 rounded-full px-8 py-4 hover:bg-white hover:text-black transition-all duration-300">
<span className="text-lg md:text-xl font-medium">Fintech</span>
</div>
<div className="group cursor-default border border-white/10 bg-white/5 rounded-full px-8 py-4 hover:bg-white hover:text-black transition-all duration-300">
<span className="text-lg md:text-xl font-medium">Real Estate</span>
</div>
<div className="group cursor-default border border-white/10 bg-white/5 rounded-full px-8 py-4 hover:bg-white hover:text-black transition-all duration-300">
<span className="text-lg md:text-xl font-medium">Healthcare</span>
</div>
<div className="group cursor-default border border-white/10 bg-white/5 rounded-full px-8 py-4 hover:bg-white hover:text-black transition-all duration-300">
<span className="text-lg md:text-xl font-medium">Education</span>
</div>
<div className="group cursor-default border border-white/10 bg-white/5 rounded-full px-8 py-4 hover:bg-white hover:text-black transition-all duration-300">
<span className="text-lg md:text-xl font-medium">Government</span>
</div>
<div className="group cursor-default border border-white/10 bg-white/5 rounded-full px-8 py-4 hover:bg-white hover:text-black transition-all duration-300">
<span className="text-lg md:text-xl font-medium">E-commerce</span>
</div>
<div className="group cursor-default border border-white/10 bg-white/5 rounded-full px-8 py-4 hover:bg-white hover:text-black transition-all duration-300">
<span className="text-lg md:text-xl font-medium">Energy</span>
</div>
<div className="group cursor-default border border-white/10 bg-white/5 rounded-full px-8 py-4 hover:bg-white hover:text-black transition-all duration-300">
<span className="text-lg md:text-xl font-medium">Logistics</span>
</div>
</div>
</div>
</section>

<section className="py-32 px-6">
<div className="max-w-7xl mx-auto reveal-on-scroll">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="order-2 lg:order-1">
<span className="block text-zinc-500 font-medium tracking-widest uppercase mb-6">
              Case Study
            </span>
<h2 className="text-5xl md:text-7xl font-medium tracking-tighter text-white mb-8">
              From idea to
              <br/>
              impact.
            </h2>
<div className="space-y-8">
<div>
<h4 className="text-white text-xl font-medium mb-2">
                  The Challenge
                </h4>
<p className="text-zinc-400 font-light leading-relaxed">
                  A fast-growing company needed to replace broken manual
                  workflows with a scalable digital system that could handle
                  complex data.
                </p>
</div>
<div>
<h4 className="text-white text-xl font-medium mb-2">
                  The ZEDEF Solution
                </h4>
<p className="text-zinc-400 font-light leading-relaxed">
                  We designed and built a unified platform combining operations,
                  payments, and analytics into a single dashboard.
                </p>
</div>
<div className="pt-6 border-t border-white/10">
<h4 className="text-white text-xl font-medium mb-2">The Outcome</h4>
<div className="flex gap-8 mt-4">
<div>
<span className="block text-3xl font-medium text-white">
                      40%
                    </span>
<span className="text-sm text-zinc-500">Cost Reduction</span>
</div>
<div>
<span className="block text-3xl font-medium text-white">
                      10x
                    </span>
<span className="text-sm text-zinc-500">Scale Ready</span>
</div>
</div>
</div>
</div>
</div>

<div className="order-1 lg:order-2 relative h-[500px] bg-gradient-to-br from-zinc-800 to-black rounded-3xl border border-white/10 overflow-hidden flex items-center justify-center group">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

<div className="relative w-64 h-80 bg-zinc-900 border border-zinc-700 rounded-xl shadow-2xl transform rotate-[-6deg] group-hover:rotate-0 transition-transform duration-500 z-10 flex flex-col p-4">
<div className="h-4 w-20 bg-zinc-700 rounded mb-4"></div>
<div className="h-32 bg-zinc-800 rounded mb-4 w-full"></div>
<div className="h-2 w-full bg-zinc-800 rounded mb-2"></div>
<div className="h-2 w-2/3 bg-zinc-800 rounded"></div>
</div>
<div className="absolute w-64 h-80 bg-zinc-800 border border-zinc-600 rounded-xl shadow-xl transform rotate-[6deg] group-hover:rotate-[3deg] transition-transform duration-500 opacity-60 flex flex-col p-4"></div>
</div>
</div>
</div>
</section>

<section className="py-40 px-6 relative overflow-hidden" id="contact">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-transparent via-[#82644D]/10 to-transparent pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center relative z-10 reveal-on-scroll">
<h2 className="text-6xl md:text-8xl font-medium tracking-tighter text-white mb-8">
          Let’s build something
          <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC700] to-[#82644D]">
            extraordinary.
          </span>
</h2>
<p className="text-xl md:text-2xl text-zinc-400 font-light mb-12 max-w-2xl mx-auto">
          Tell us what you’re trying to achieve. We’ll show you how technology
          can get you there.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6">
<a className="w-full sm:w-auto px-10 py-5 bg-white text-black text-lg font-medium rounded-full hover:scale-105 transition-transform duration-300 shadow-[0_0_40px_rgba(255,255,255,0.3)]" href="#">
            Start a Project
          </a>
<a className="w-full sm:w-auto px-10 py-5 border border-zinc-700 text-white text-lg font-medium rounded-full hover:bg-white hover:text-black transition-all duration-300" href="#">
            Talk to an Expert
          </a>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-black pt-20 pb-10 px-6">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
<div>
<div className="mb-6">
<img alt="ZEDEF" className="h-8 w-auto" src="https://postimg.cc/HVxLYgcB"/>
</div>
<p className="text-zinc-500 max-w-sm text-sm leading-relaxed">
              ZEDEF Technologies Global is a consulting and technology company
              helping organizations design, build, and scale digital platforms,
              enterprise systems, and AI-powered products across Africa and
              globally.
            </p>
</div>
<div className="flex flex-wrap gap-12 md:justify-end">
<div>
<h4 className="text-white font-medium mb-4">Explore</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li>
<a className="hover:text-white transition-colors" href="#">
                    Services
                  </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                    Process
                  </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                    Industries
                  </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                    Work
                  </a>
</li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Company</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li>
<a className="hover:text-white transition-colors" href="#">
                    About
                  </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                    Careers
                  </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                    Contact
                  </a>
</li>
</ul>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-zinc-600">
<p>© 2024 ZEDEF Technologies Global. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-zinc-400" href="#">Privacy Policy</a>
<a className="hover:text-zinc-400" href="#">Terms of Service</a>
</div>
</div>
<div className="w-full flex justify-center mt-20 select-none pointer-events-none">
<span className="text-[16vw] font-semibold leading-none tracking-tighter text-zinc-800 uppercase">
            ZEDEF
          </span>
</div>
</div>
</footer>



    </>
  );
}
