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



        // Reveal on Scroll
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-on-scroll').forEach(el => {
            observer.observe(el);
        });

        // Progress Bar
        window.onscroll = function() {
            let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            let scrolled = (winScroll / height) * 100;
            document.getElementById("progress-bar").style.width = scrolled + "%";
        };
    
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
      

<div className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-cyan-500 to-blue-600 z-[60]" id="progress-bar" style={{width: '0%'}}></div>

<header className="fixed w-full top-0 z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-xl transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<div className="w-9 h-9 rounded bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-all duration-300">
<iconify-icon icon="solar:code-scan-linear" width="20"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-white font-medium tracking-tight leading-none group-hover:text-white transition-colors">Excellence Code</span>
<span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 mt-1 group-hover:text-cyan-400 transition-colors">Enterprise Systems</span>
</div>
</a>

<nav className="hidden md:flex items-center gap-10 text-sm font-medium text-slate-400">
<a className="link-underline hover:text-white transition-colors py-1" href="#services">Capabilities</a>
<a className="link-underline hover:text-white transition-colors py-1" href="#projects">Case Studies</a>
<a className="link-underline hover:text-white transition-colors py-1" href="#company">Company</a>
<a className="px-6 py-2.5 rounded text-white bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300 btn-glow text-xs uppercase tracking-wider" href="#contact">
                    Partner With Us
                </a>
</nav>

<button className="md:hidden text-white p-2">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</header>

<section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden hero-environment">

<div className="absolute inset-0 tech-grid pointer-events-none opacity-60"></div>
<div className="absolute top-1/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>
<div className="absolute bottom-1/3 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/10 to-transparent"></div>

<div className="absolute top-20 right-20 w-64 h-64 border border-white/5 rounded-full opacity-20 blur-3xl bg-blue-900/20 animate-pulse"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-8 reveal-on-scroll">
<div className="inline-flex items-center gap-2 mb-8 px-3 py-1 rounded border border-cyan-500/20 bg-cyan-950/10 backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
<span className="text-xs font-medium text-cyan-400 tracking-wider uppercase">Systems Operational • 2026 Ready</span>
</div>
<h1 className="text-5xl lg:text-7xl font-semibold text-white tracking-tight leading-[1.1] mb-8">
                        Architecting <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-500">Intelligent Futures.</span>
</h1>
<p className="text-lg text-slate-400 font-light leading-relaxed max-w-2xl mb-10 border-l border-white/10 pl-6">
                        Excellence Code delivers tier-one digital infrastructure and strategic media solutions for government entities and forward-thinking enterprises. Quiet confidence in every line of code.
                    </p>
<div className="flex flex-col sm:flex-row gap-5">
<a className="px-8 py-4 bg-white text-slate-950 rounded font-medium hover:bg-cyan-50 transition-all btn-glow flex items-center justify-center gap-3" href="#contact">
                            Initiate Consultation
                            <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="px-8 py-4 bg-transparent border border-white/10 text-white rounded font-medium hover:bg-white/5 hover:border-white/20 transition-all flex items-center justify-center gap-3 group" href="#projects">
                            Explore Ecosystem
                            <iconify-icon className="group-hover:translate-y-1 transition-transform" icon="solar:round-alt-arrow-down-linear" width="18"></iconify-icon>
</a>
</div>
</div>

<div className="hidden lg:block lg:col-span-4 relative h-[400px] reveal-on-scroll" style={{transitionDelay: '200ms'}}>
<div className="absolute inset-0 flex items-center justify-center">
<div className="relative w-64 h-64">

<div className="absolute inset-0 border border-slate-700/30 rounded-full"></div>
<div className="absolute inset-4 border border-cyan-900/30 rounded-full" style={{transform: 'rotate(15deg)'}}></div>
<div className="absolute inset-12 border border-slate-600/20 rounded-full"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-slate-900 rounded-full border border-white/10 flex items-center justify-center shadow-[0_0_50px_rgba(6,182,212,0.1)]">
<iconify-icon className="text-cyan-500 opacity-80" icon="solar:server-square-linear" width="32"></iconify-icon>
</div>

<div className="absolute -right-12 top-0 bg-slate-900/90 backdrop-blur border border-white/10 p-4 rounded w-48 shadow-2xl animate-[float_6s_ease-in-out_infinite]">
<div className="flex justify-between mb-2">
<span className="text-[10px] uppercase text-slate-500">Uptime</span>
<span className="text-[10px] text-green-400">99.99%</span>
</div>
<div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-green-500 w-[99%]"></div>
</div>
</div>
<div className="absolute -left-12 bottom-0 bg-slate-900/90 backdrop-blur border border-white/10 p-4 rounded w-48 shadow-2xl animate-[float_8s_ease-in-out_infinite_reverse]">
<div className="flex gap-3 items-center">
<div className="w-8 h-8 rounded bg-cyan-900/20 flex items-center justify-center text-cyan-400">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon>
</div>
<div>
<div className="text-xs text-white">Security Level</div>
<div className="text-[10px] text-slate-500">Enterprise Grade</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-slate-950 relative z-20">
<div className="max-w-7xl mx-auto px-6 py-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/5">
<div className="text-center px-4 reveal-on-scroll">
<div className="text-3xl font-semibold text-white mb-1 tracking-tight">13+</div>
<div className="text-xs uppercase tracking-wider text-slate-500">Years Excellence</div>
</div>
<div className="text-center px-4 reveal-on-scroll" style={{transitionDelay: '100ms'}}>
<div className="text-3xl font-semibold text-white mb-1 tracking-tight">Gov</div>
<div className="text-xs uppercase tracking-wider text-slate-500">Certified Partner</div>
</div>
<div className="text-center px-4 reveal-on-scroll" style={{transitionDelay: '200ms'}}>
<div className="text-3xl font-semibold text-white mb-1 tracking-tight">500+</div>
<div className="text-xs uppercase tracking-wider text-slate-500">Enterprise Deployments</div>
</div>
<div className="text-center px-4 reveal-on-scroll" style={{transitionDelay: '300ms'}}>
<div className="text-3xl font-semibold text-white mb-1 tracking-tight">UAE</div>
<div className="text-xs uppercase tracking-wider text-slate-500">Strategic HQ</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative bg-[#020617]" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20 max-w-2xl reveal-on-scroll">
<span className="text-cyan-400 text-xs font-medium uppercase tracking-widest mb-3 block">Our Expertise</span>
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">Precision Engineering for <br/>Complex Ecosystems.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-1">

<div className="group relative p-10 border border-white/5 bg-slate-900/20 hover:bg-slate-900/60 transition-colors duration-500 reveal-on-scroll">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/0 to-transparent group-hover:via-cyan-500/50 transition-all duration-700"></div>
<div className="w-12 h-12 mb-8 text-slate-300 group-hover:text-cyan-400 transition-colors">
<iconify-icon icon="solar:layers-minimalistic-linear" width="48"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-4">Enterprise Software</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6">
                        Scalable ERP and CRM architectures designed for high-availability corporate environments.
                    </p>
<a className="inline-flex items-center text-xs font-medium text-white group-hover:text-cyan-400 transition-colors" href="#">
                        Technical Specs <iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group relative p-10 border border-white/5 bg-slate-900/20 hover:bg-slate-900/60 transition-colors duration-500 reveal-on-scroll" style={{transitionDelay: '100ms'}}>
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/0 to-transparent group-hover:via-cyan-500/50 transition-all duration-700"></div>
<div className="w-12 h-12 mb-8 text-slate-300 group-hover:text-cyan-400 transition-colors">
<iconify-icon icon="solar:smartphone-linear" width="48"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-4">Native Mobile Solutions</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6">
                        High-performance iOS and Android applications integrating biometric security and offline sync.
                    </p>
<a className="inline-flex items-center text-xs font-medium text-white group-hover:text-cyan-400 transition-colors" href="#">
                        View Frameworks <iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group relative p-10 border border-white/5 bg-slate-900/20 hover:bg-slate-900/60 transition-colors duration-500 reveal-on-scroll" style={{transitionDelay: '200ms'}}>
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/0 to-transparent group-hover:via-cyan-500/50 transition-all duration-700"></div>
<div className="w-12 h-12 mb-8 text-slate-300 group-hover:text-cyan-400 transition-colors">
<iconify-icon icon="solar:graph-new-linear" width="48"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-4">Strategic Digital Media</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6">
                        Data-driven marketing campaigns utilizing AI predictive modeling for maximum ROI.
                    </p>
<a className="inline-flex items-center text-xs font-medium text-white group-hover:text-cyan-400 transition-colors" href="#">
                        Strategy Details <iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-32 bg-slate-950 border-t border-white/5" id="projects">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal-on-scroll">
<div>
<span className="text-cyan-400 text-xs font-medium uppercase tracking-widest mb-3 block">Selected Works</span>
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">Benchmark Projects</h2>
</div>
<a className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-2 mt-6 md:mt-0" href="#">
                    View Archive <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
<div className="space-y-24">

<article className="group grid grid-cols-1 lg:grid-cols-2 gap-12 items-center reveal-on-scroll">
<div className="relative aspect-[4/3] bg-slate-900 overflow-hidden rounded border border-white/10">

<div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-950 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
<div className="w-3/4 h-3/4 border border-white/5 bg-white/5 backdrop-blur rounded flex flex-col p-6 shadow-2xl">
<div className="flex gap-2 mb-4">
<div className="w-2 h-2 rounded-full bg-red-500/50"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
<div className="w-2 h-2 rounded-full bg-green-500/50"></div>
</div>
<div className="grid grid-cols-3 gap-4 h-full">
<div className="col-span-1 bg-white/5 rounded"></div>
<div className="col-span-2 space-y-3">
<div className="h-8 bg-white/5 rounded w-1/2"></div>
<div className="h-32 bg-white/5 rounded w-full"></div>
</div>
</div>
</div>
</div>
</div>
<div>
<div className="flex items-center gap-4 mb-6">
<span className="px-2 py-1 rounded border border-white/10 text-[10px] uppercase text-slate-400">FinTech</span>
<span className="px-2 py-1 rounded border border-white/10 text-[10px] uppercase text-slate-400">2025</span>
</div>
<h3 className="text-3xl font-medium text-white mb-4 group-hover:text-cyan-400 transition-colors">Sovereign Wealth Dashboard</h3>
<p className="text-slate-400 mb-8 leading-relaxed">
                            A secure, real-time asset management interface built for a leading regional financial institution. Focus on data visualization, zero-latency updates, and biometric authentication.
                        </p>
<ul className="space-y-3 border-l border-white/10 pl-6 mb-8">
<li className="text-xs text-slate-400 flex items-center gap-2">
<iconify-icon className="text-cyan-500" icon="solar:check-read-linear"></iconify-icon>
                                99.999% Uptime Architecture
                            </li>
<li className="text-xs text-slate-400 flex items-center gap-2">
<iconify-icon className="text-cyan-500" icon="solar:check-read-linear"></iconify-icon>
                                React / Node.js / Python
                            </li>
</ul>
<button className="text-white border-b border-cyan-500 pb-1 text-sm hover:text-cyan-400 transition-colors">Read Case Study</button>
</div>
</article>

<article className="group grid grid-cols-1 lg:grid-cols-2 gap-12 items-center reveal-on-scroll">
<div className="order-2 lg:order-1">
<div className="flex items-center gap-4 mb-6">
<span className="px-2 py-1 rounded border border-white/10 text-[10px] uppercase text-slate-400">Government</span>
<span className="px-2 py-1 rounded border border-white/10 text-[10px] uppercase text-slate-400">2024</span>
</div>
<h3 className="text-3xl font-medium text-white mb-4 group-hover:text-cyan-400 transition-colors">Smart City Infrastructure</h3>
<p className="text-slate-400 mb-8 leading-relaxed">
                            Developing the central unified portal for municipal services. Streamlining citizen interactions through a robust, accessible, and high-load tolerant web ecosystem.
                        </p>
<ul className="space-y-3 border-l border-white/10 pl-6 mb-8">
<li className="text-xs text-slate-400 flex items-center gap-2">
<iconify-icon className="text-cyan-500" icon="solar:check-read-linear"></iconify-icon>
                                2M+ Daily Active Users
                            </li>
<li className="text-xs text-slate-400 flex items-center gap-2">
<iconify-icon className="text-cyan-500" icon="solar:check-read-linear"></iconify-icon>
                                Next.js / AWS / Microservices
                            </li>
</ul>
<button className="text-white border-b border-cyan-500 pb-1 text-sm hover:text-cyan-400 transition-colors">Read Case Study</button>
</div>
<div className="order-1 lg:order-2 relative aspect-[4/3] bg-slate-900 overflow-hidden rounded border border-white/10">

<div className="absolute inset-0 bg-gradient-to-bl from-slate-800 to-slate-950 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
<div className="w-3/4 h-3/4 relative">
<div className="absolute top-0 right-0 bg-cyan-500/20 w-32 h-32 blur-2xl rounded-full"></div>
<div className="border border-white/10 bg-black/40 backdrop-blur w-full h-full rounded flex items-center justify-center">
<div className="grid grid-cols-2 gap-4 w-3/4">
<div className="h-20 bg-white/5 rounded border border-white/5"></div>
<div className="h-20 bg-white/5 rounded border border-white/5"></div>
<div className="h-20 bg-white/5 rounded border border-white/5"></div>
<div className="h-20 bg-white/5 rounded border border-white/5"></div>
</div>
</div>
</div>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="py-32 bg-[#020617] relative">
<div className="absolute left-10 top-0 bottom-0 w-[1px] bg-white/5 hidden lg:block"></div>
<div className="max-w-4xl mx-auto px-6 pl-12 lg:pl-24">
<h2 className="text-2xl text-cyan-400 font-medium mb-12 reveal-on-scroll">The Methodology</h2>
<div className="space-y-20">
<div className="reveal-on-scroll">
<span className="text-6xl font-light text-white/10 block mb-4">01</span>
<h3 className="text-xl text-white font-medium mb-4">Discovery &amp; Architecture</h3>
<p className="text-slate-400 leading-relaxed max-w-lg">
                        We don't just code; we map the territory. Deep architectural planning ensures that your solution is not just solving today's problem, but is ready for 2030. Security by design, not as an afterthought.
                    </p>
</div>
<div className="reveal-on-scroll">
<span className="text-6xl font-light text-white/10 block mb-4">02</span>
<h3 className="text-xl text-white font-medium mb-4">Agile Engineering</h3>
<p className="text-slate-400 leading-relaxed max-w-lg">
                        Iterative sprints with transparent reporting. Our code quality standards exceed industry norms, utilizing automated testing and CI/CD pipelines to ensure every deployment is stable.
                    </p>
</div>
<div className="reveal-on-scroll">
<span className="text-6xl font-light text-white/10 block mb-4">03</span>
<h3 className="text-xl text-white font-medium mb-4">Growth Integration</h3>
<p className="text-slate-400 leading-relaxed max-w-lg">
                        Development merges with Digital Marketing. We implement tracking pixels, SEO structures, and conversion optimization logic directly into the core framework.
                    </p>
</div>
</div>
</div>
</section>

<footer className="footer-mesh pt-32 pb-12 text-slate-400 border-t border-white/5 overflow-hidden relative">

<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-20"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-20">
<div className="lg:col-span-2">
<a className="flex items-center gap-2 mb-8" href="#">
<div className="w-6 h-6 rounded bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center text-cyan-500">
<iconify-icon icon="solar:code-scan-linear" width="14"></iconify-icon>
</div>
<span className="text-white font-medium tracking-tight">Excellence Code</span>
</a>
<h2 className="text-3xl font-semibold text-white tracking-tight mb-8 max-w-md">
                        Ready to upgrade your digital infrastructure?
                    </h2>
<a className="inline-flex items-center text-white border-b border-white/20 pb-1 hover:text-cyan-400 hover:border-cyan-400 transition-colors" href="#contact">
                        Schedule Technical Briefing <iconify-icon className="ml-2" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-6">Sitemap</h4>
<ul className="space-y-4 text-sm">
<li><a className="hover:text-cyan-400 transition-colors" href="#">Solutions</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Case Studies</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Company</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Careers</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-6">Connect</h4>
<ul className="space-y-4 text-sm">
<li><a className="hover:text-cyan-400 transition-colors" href="#">Dubai, UAE</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">+971 55 244 0610</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">LinkedIn</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Twitter / X</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
<p>© 2026 Excellence Code Marketing Services LLC.</p>
<div className="flex gap-6">
<a className="hover:text-slate-400 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-slate-400 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
