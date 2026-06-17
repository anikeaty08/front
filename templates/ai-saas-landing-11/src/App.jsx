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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            // Scroll Reveal Animation
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.remove('opacity-0', 'translate-y-8', 'translate-y-6', 'translate-x-[-20px]', 'scale-95');
                        entry.target.classList.add('opacity-100', 'translate-y-0', 'translate-x-0', 'scale-100');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal-on-scroll').forEach((elem) => {
                observer.observe(elem);
            });

            // Parallax Particles
            const particles = document.querySelectorAll('.parallax-particle');
            window.addEventListener('scroll', () => {
                const scrolled = window.scrollY;
                particles.forEach(particle => {
                    const speed = parseFloat(particle.getAttribute('data-speed'));
                    particle.style.transform = `translate3d(0, ${scrolled * speed}px, 0)`;
                });
            }, { passive: true });
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
      

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[50vh] bg-gradient-to-b from-purple-600/15 via-purple-900/5 to-transparent blur-[120px] rounded-full pointer-events-none -z-10"></div>
<div className="absolute top-[40%] right-0 w-[500px] h-[500px] bg-purple-600/5 blur-[150px] rounded-full pointer-events-none -z-10"></div>
<div className="absolute bottom-[20%] left-0 w-[600px] h-[600px] bg-purple-800/5 blur-[150px] rounded-full pointer-events-none -z-10"></div>

<div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" id="parallax-container">
<div className="parallax-particle absolute top-[5%] left-[10%] text-purple-500/20" data-speed="0.15"><iconify-icon icon="solar:star-fall-minimalistic-2-linear" width="24"></iconify-icon></div>
<div className="parallax-particle absolute top-[15%] right-[15%] text-white/5 text-xl font-mono" data-speed="-0.1">+</div>
<div className="parallax-particle absolute top-[12%] left-[50%] w-2 h-2 rounded-full bg-purple-500/20 blur-[1px]" data-speed="0.3"></div>
<div className="parallax-particle absolute top-[25%] left-[80%] text-white/5 text-sm font-mono tracking-widest" data-speed="0.2">{ }</div>
<div className="parallax-particle absolute top-[30%] right-[40%] text-white/5 text-lg font-mono" data-speed="-0.05">+</div>
<div className="parallax-particle absolute top-[35%] left-[5%] text-purple-400/10" data-speed="-0.15"><iconify-icon icon="solar:code-square-linear" width="28"></iconify-icon></div>
<div className="parallax-particle absolute top-[45%] right-[5%] w-3 h-3 rounded-full bg-white/10 blur-[2px]" data-speed="0.1"></div>
<div className="parallax-particle absolute top-[55%] left-[15%] text-white/10 text-sm font-mono" data-speed="-0.2">&lt;/&gt;</div>
<div className="parallax-particle absolute top-[65%] right-[85%] text-purple-500/15" data-speed="0.25"><iconify-icon icon="solar:magic-stick-3-linear" width="24"></iconify-icon></div>
<div className="parallax-particle absolute top-[75%] right-[20%] w-4 h-4 rounded-full border border-purple-500/10" data-speed="-0.1"></div>
<div className="parallax-particle absolute top-[80%] left-[50%] text-white/5" data-speed="0.15"><iconify-icon icon="solar:pen-new-square-linear" width="20"></iconify-icon></div>
<div className="parallax-particle absolute top-[85%] left-[25%] text-white/5 text-xl font-mono" data-speed="0.05">+</div>
<div className="parallax-particle absolute top-[90%] right-[10%] text-purple-400/10" data-speed="-0.2"><iconify-icon icon="solar:document-text-linear" width="32"></iconify-icon></div>
</div>

<nav className="fixed top-0 w-full border-b border-white/[0.08] bg-[#09090b]/80 backdrop-blur-md z-50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-white text-lg font-medium tracking-tighter flex items-center gap-2 group" href="#">
<iconify-icon className="group-hover:text-purple-400 transition-colors" icon="solar:box-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    NXT
                </a>
<div className="hidden md:flex items-center gap-6 text-sm text-zinc-400 font-medium">
<a className="hover:text-white transition-colors duration-200" href="#features">Features</a>
<a className="hover:text-white transition-colors duration-200" href="#capabilities">Capabilities</a>
<a className="hover:text-white transition-colors duration-200" href="#pricing">Pricing</a>
<a className="hover:text-white transition-colors duration-200" href="#customers">Customers</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm text-zinc-400 hover:text-white transition-colors font-medium" href="#">Log in</a>
<a className="bg-white text-black px-4 py-1.5 rounded-full text-sm font-medium hover:bg-zinc-200 transition-all duration-200 active:scale-95 shadow-[0_0_15px_rgba(168,85,247,0.15)]" href="#">
                    Start for free
                </a>
</div>
</div>
</nav>

<section className="pt-40 pb-20 px-6 relative max-w-7xl mx-auto text-center">
<div className="reveal-on-scroll opacity-0 translate-y-6 transition-all duration-[800ms] ease-out inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/5 text-xs text-purple-200 mb-8 cursor-pointer hover:bg-purple-500/10 transition-colors group">
<span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
            Introducing NXT 2.0
            <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" width="14"></iconify-icon>
</div>
<h1 className="reveal-on-scroll opacity-0 translate-y-6 transition-all duration-[800ms] delay-100 ease-out text-5xl md:text-7xl font-semibold tracking-tighter text-white mb-6 leading-[1.1] max-w-4xl mx-auto">
            Content creation, <br className="hidden md:block"/> engineered for scale.
        </h1>
<p className="reveal-on-scroll opacity-0 translate-y-6 transition-all duration-[800ms] delay-200 ease-out text-base md:text-lg text-zinc-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Harness the power of context-aware AI to generate technical documentation, marketing copy, and codebase annotations in seconds, not hours.
        </p>
<div className="reveal-on-scroll opacity-0 translate-y-6 transition-all duration-[800ms] delay-300 ease-out flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 relative z-10">
<a className="w-full sm:w-auto bg-white text-black px-6 py-2.5 rounded-full text-sm font-medium hover:bg-zinc-200 transition-all duration-200 shadow-[0_0_20px_rgba(168,85,247,0.2)] active:scale-95 flex items-center justify-center gap-2 group" href="#">
                Start generating
                <iconify-icon className="group-hover:rotate-12 group-hover:text-purple-600 transition-all" icon="solar:magic-stick-3-linear" width="16"></iconify-icon>
</a>
<a className="w-full sm:w-auto border border-white/[0.1] bg-transparent text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-white/[0.05] transition-all duration-200 flex items-center justify-center gap-2 group" href="#">
<iconify-icon icon="solar:play-circle-linear" width="18"></iconify-icon>
                View demo
            </a>
</div>

<div className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-[1000ms] delay-500 ease-out relative mx-auto max-w-5xl">

<div className="absolute -left-8 top-1/4 bg-zinc-800/90 backdrop-blur border border-purple-500/20 px-3 py-2 rounded-lg text-xs font-medium text-white shadow-[0_0_30px_rgba(168,85,247,0.15)] rotate-[-6deg] hidden lg:flex items-center gap-2 z-20 animate-[bounce_4s_infinite]">
<iconify-icon className="text-purple-400" icon="solar:bolt-circle-linear" width="16"></iconify-icon> 
                120ms latency
            </div>
<div className="absolute -right-6 bottom-1/4 bg-zinc-800/90 backdrop-blur border border-white/10 px-3 py-2 rounded-lg text-xs font-medium text-white shadow-2xl rotate-[4deg] hidden lg:flex items-center gap-2 z-20 animate-[bounce_5s_infinite_reverse]">
<iconify-icon className="text-green-400" icon="solar:shield-check-linear" width="16"></iconify-icon> 
                E2E Encrypted
            </div>
<div className="rounded-2xl border border-white/[0.1] bg-[#09090b] shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden group relative z-10">
<div className="absolute inset-0 bg-gradient-to-b from-purple-500/[0.03] to-transparent pointer-events-none"></div>

<div className="h-12 border-b border-white/[0.08] flex items-center px-4 gap-2 bg-white/[0.01]">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-zinc-800"></div>
<div className="w-3 h-3 rounded-full bg-zinc-800"></div>
<div className="w-3 h-3 rounded-full bg-zinc-800"></div>
</div>
<div className="mx-auto px-2 py-1 rounded-md bg-white/[0.05] border border-white/[0.05] text-xs text-zinc-500 font-medium tracking-tight flex items-center gap-2">
<iconify-icon icon="solar:lock-keyhole-minimalistic-linear" width="12"></iconify-icon>
                        project-alpha.md
                    </div>
</div>

<div className="flex h-[400px] text-left">

<div className="hidden sm:block w-48 border-r border-white/[0.08] bg-white/[0.01] p-4">
<div className="text-xs text-zinc-500 font-semibold tracking-tighter mb-4">FILES</div>
<div className="space-y-2 text-sm text-zinc-400">
<div className="flex items-center gap-2 text-purple-300 bg-purple-500/10 px-2 py-1.5 rounded-md cursor-pointer border border-purple-500/10">
<iconify-icon icon="solar:document-text-linear" width="16"></iconify-icon>
                                readme.md
                            </div>
<div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-white/[0.02] cursor-pointer transition-colors">
<iconify-icon icon="solar:folder-linear" width="16"></iconify-icon>
                                src/
                            </div>
<div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-white/[0.02] cursor-pointer transition-colors">
<iconify-icon icon="solar:folder-linear" width="16"></iconify-icon>
                                docs/
                            </div>
</div>
</div>

<div className="flex-1 p-6 relative">
<div className="text-sm font-['Consolas',monospace] text-zinc-300 leading-relaxed space-y-4">
<p className="text-zinc-500"># Initializing NXT Engine...</p>
<p className="text-white">import { generateContent } from '@nxt/ai';</p>
<p><br/></p>
<p className="text-zinc-500">// Generating product description</p>
<p className="text-white">const <span className="text-purple-400">result</span> = await generateContent({</p>
<p className="pl-4">context: <span className="text-green-400">'Modern SaaS landing page'</span>,</p>
<p className="pl-4">tone: <span className="text-green-400">'Professional &amp; concise'</span>,</p>
<p className="pl-4">length: <span className="text-orange-400">250</span></p>
<p className="text-white">});</p>
<p><br/></p>
<div className="relative inline-block group/cursor">
<span className="text-zinc-500">Generating output...</span>
<span className="absolute -right-2 top-0 w-2 h-4 bg-purple-400 animate-pulse"></span>
</div>
</div>

<div className="absolute bottom-6 right-6 flex gap-2">
<div className="bg-zinc-800 text-xs text-zinc-300 px-3 py-1.5 rounded-md border border-white/[0.1] shadow-lg flex items-center gap-2 cursor-pointer hover:bg-zinc-700 transition-colors">
<iconify-icon icon="solar:stop-circle-linear" width="14"></iconify-icon> Stop
                            </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 border-y border-white/[0.05] bg-white/[0.01] overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-purple-500/5 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 mb-8 relative z-10">
<p className="reveal-on-scroll opacity-0 translate-y-4 transition-all duration-700 text-center text-xs text-zinc-500 font-medium tracking-tight uppercase">Powering teams at forward-thinking companies</p>
</div>
<div className="relative flex overflow-hidden group-hover-pause reveal-on-scroll opacity-0 transition-opacity duration-1000 w-full max-w-7xl mx-auto">

<div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-[#09090b] to-transparent z-10 pointer-events-none"></div>
<div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-[#09090b] to-transparent z-10 pointer-events-none"></div>

<div className="flex animate-marquee min-w-full shrink-0 items-center justify-around gap-16 px-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-lg font-semibold tracking-tighter flex items-center gap-2"><iconify-icon icon="solar:global-linear"></iconify-icon> ACME</span>
<span className="text-lg font-semibold tracking-tighter flex items-center gap-2"><iconify-icon icon="solar:box-minimalistic-linear"></iconify-icon> QUANTUM</span>
<span className="text-lg font-semibold tracking-tighter flex items-center gap-2"><iconify-icon icon="solar:chart-square-linear"></iconify-icon> NEXUS</span>
<span className="text-lg font-semibold tracking-tighter flex items-center gap-2"><iconify-icon icon="solar:layers-minimalistic-linear"></iconify-icon> ZENITH</span>
<span className="text-lg font-semibold tracking-tighter flex items-center gap-2"><iconify-icon icon="solar:infinity-linear"></iconify-icon> ECHO</span>
<span className="text-lg font-semibold tracking-tighter flex items-center gap-2"><iconify-icon icon="solar:radar-linear"></iconify-icon> VORTEX</span>
</div>

<div aria-hidden="true" className="flex animate-marquee min-w-full shrink-0 items-center justify-around gap-16 px-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-lg font-semibold tracking-tighter flex items-center gap-2"><iconify-icon icon="solar:global-linear"></iconify-icon> ACME</span>
<span className="text-lg font-semibold tracking-tighter flex items-center gap-2"><iconify-icon icon="solar:box-minimalistic-linear"></iconify-icon> QUANTUM</span>
<span className="text-lg font-semibold tracking-tighter flex items-center gap-2"><iconify-icon icon="solar:chart-square-linear"></iconify-icon> NEXUS</span>
<span className="text-lg font-semibold tracking-tighter flex items-center gap-2"><iconify-icon icon="solar:layers-minimalistic-linear"></iconify-icon> ZENITH</span>
<span className="text-lg font-semibold tracking-tighter flex items-center gap-2"><iconify-icon icon="solar:infinity-linear"></iconify-icon> ECHO</span>
<span className="text-lg font-semibold tracking-tighter flex items-center gap-2"><iconify-icon icon="solar:radar-linear"></iconify-icon> VORTEX</span>
</div>
</div>
</section>

<section className="py-32 px-6 max-w-7xl mx-auto relative" id="features">
<div className="mb-16 reveal-on-scroll opacity-0 translate-y-6 transition-all duration-[800ms]">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white mb-4">Intelligence built-in.</h2>
<p className="text-zinc-400 text-sm md:text-base max-w-xl font-light">Everything you need to scale your content operations without sacrificing quality or brand voice.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-purple-500/5 blur-3xl rounded-full pointer-events-none"></div>

<div className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-[800ms] delay-100 p-6 rounded-2xl border border-white/[0.08] bg-[#09090b]/80 backdrop-blur hover:bg-white/[0.04] hover:border-purple-500/20 group relative z-10 hover:shadow-[0_0_30px_rgba(168,85,247,0.05)]">
<div className="w-10 h-10 rounded-lg bg-white/[0.05] border border-white/[0.1] group-hover:border-purple-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300">
<iconify-icon className="text-white group-hover:text-purple-400 transition-colors" icon="solar:text-field-focus-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-white mb-2">Contextual Understanding</h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed">Analyzes your existing documentation to match terminology and conceptual depth automatically.</p>
</div>

<div className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-[800ms] delay-200 p-6 rounded-2xl border border-white/[0.08] bg-[#09090b]/80 backdrop-blur hover:bg-white/[0.04] hover:border-purple-500/20 group relative z-10 hover:shadow-[0_0_30px_rgba(168,85,247,0.05)]">
<div className="w-10 h-10 rounded-lg bg-white/[0.05] border border-white/[0.1] group-hover:border-purple-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300">
<iconify-icon className="text-white group-hover:text-purple-400 transition-colors" icon="solar:branching-paths-up-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-white mb-2">Multi-format Export</h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed">Generate content in Markdown, HTML, plain text, or directly integrate via our REST API.</p>
</div>

<div className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-[800ms] delay-300 p-6 rounded-2xl border border-white/[0.08] bg-[#09090b]/80 backdrop-blur hover:bg-white/[0.04] hover:border-purple-500/20 group relative z-10 hover:shadow-[0_0_30px_rgba(168,85,247,0.05)]">
<div className="w-10 h-10 rounded-lg bg-white/[0.05] border border-white/[0.1] group-hover:border-purple-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300">
<iconify-icon className="text-white group-hover:text-purple-400 transition-colors" icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-white mb-2">Enterprise Security</h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed">Zero-retention data policy. Your inputs are never used to train generalized models.</p>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/[0.05]">
<div className="mb-16 reveal-on-scroll opacity-0 translate-y-6 transition-all duration-[800ms] text-center max-w-2xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white mb-4">Built for modern workflows.</h2>
<p className="text-zinc-400 text-sm md:text-base font-light">Whether you are pushing code or publishing campaigns, NXT adapts to the way your team naturally works.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-[800ms] delay-100 p-8 rounded-2xl border border-white/[0.08] bg-[#09090b] hover:bg-white/[0.02] hover:border-purple-500/10 transition-all group">
<iconify-icon className="text-zinc-500 mb-4 group-hover:text-purple-400 transition-colors" icon="solar:code-square-linear" width="28"></iconify-icon>
<h3 className="text-lg font-medium tracking-tight text-white mb-2">For Developers</h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed mb-6">Instantly generate READMEs, inline comments, and API documentation directly from your raw codebase.</p>
<a className="text-xs text-white font-medium flex items-center gap-1 group-hover:gap-2 group-hover:text-purple-300 transition-all" href="#">
                    Explore Dev Tools <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-[800ms] delay-200 p-8 rounded-2xl border border-white/[0.08] bg-[#09090b] hover:bg-white/[0.02] hover:border-purple-500/10 transition-all group">
<iconify-icon className="text-zinc-500 mb-4 group-hover:text-purple-400 transition-colors" icon="solar:pen-new-square-linear" width="28"></iconify-icon>
<h3 className="text-lg font-medium tracking-tight text-white mb-2">For Marketers</h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed mb-6">Scale your blog output, spin up landing page copy, and perfectly match your established brand tone.</p>
<a className="text-xs text-white font-medium flex items-center gap-1 group-hover:gap-2 group-hover:text-purple-300 transition-all" href="#">
                    Explore Marketing <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-[800ms] delay-300 p-8 rounded-2xl border border-white/[0.08] bg-[#09090b] hover:bg-white/[0.02] hover:border-purple-500/10 transition-all group">
<iconify-icon className="text-zinc-500 mb-4 group-hover:text-purple-400 transition-colors" icon="solar:clipboard-list-linear" width="28"></iconify-icon>
<h3 className="text-lg font-medium tracking-tight text-white mb-2">For Product Managers</h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed mb-6">Turn rough notes and technical specs into polished release notes and user-facing changelogs.</p>
<a className="text-xs text-white font-medium flex items-center gap-1 group-hover:gap-2 group-hover:text-purple-300 transition-all" href="#">
                    Explore Product <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-20 px-6 max-w-7xl mx-auto border-t border-white/[0.05]" id="capabilities">
<div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[240px]">

<div className="reveal-on-scroll opacity-0 scale-95 transition-all duration-[800ms] md:col-span-2 md:row-span-2 rounded-2xl border border-white/[0.08] bg-[#09090b] hover:border-purple-500/20 relative overflow-hidden group flex flex-col p-8 cursor-default">
<div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="flex-1 z-10">
<div className="flex justify-between items-start mb-2">
<h3 className="text-xl font-semibold tracking-tighter text-white">Real-time collaboration</h3>
<span className="flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-purple-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
</span>
</div>
<p className="text-sm text-zinc-400 font-light max-w-sm">Work alongside AI. Accept, reject, or modify suggestions inline as you type.</p>
</div>

<div className="mt-8 border border-white/[0.1] rounded-lg bg-white/[0.02] p-6 text-sm relative z-10 backdrop-blur-sm">
<p className="text-zinc-500 leading-relaxed">The platform utilizes <span className="bg-purple-500/20 text-purple-200 px-1.5 py-0.5 rounded border border-purple-500/30 relative group-hover/word:bg-purple-500/40 cursor-pointer transition-colors shadow-[0_0_15px_rgba(168,85,247,0.2)]">advanced heuristics<span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-800 border border-white/10 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl text-white">Accept suggestion (Tab)</span></span> to optimize rendering workflows and output quality.</p>
</div>

<div className="absolute right-12 bottom-16 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-[600ms] ease-out z-20 flex items-center gap-2 drop-shadow-2xl">
<iconify-icon className="text-purple-400 rotate-[-20deg]" icon="solar:cursor-default-bold" width="24"></iconify-icon>
<div className="bg-purple-500 text-white text-[10px] px-2 py-1 rounded-md font-medium shadow-lg animate-pulse">Sarah is typing...</div>
</div>
</div>

<div className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-[800ms] delay-100 md:col-span-2 rounded-2xl border border-white/[0.08] bg-[#09090b] hover:border-purple-500/20 p-6 flex flex-col justify-between group relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="z-10">
<h3 className="text-base font-medium tracking-tight text-white mb-1">Granular Tone Control</h3>
<p className="text-xs text-zinc-400 font-light">Dial in the exact voice for your audience.</p>
</div>
<div className="space-y-4 z-10">
<div className="flex justify-between text-xs text-zinc-500 font-medium">
<span>Casual</span>
<span className="group-hover:text-purple-300 transition-colors duration-500">Professional</span>
</div>

<div className="relative h-1.5 w-full bg-zinc-800 rounded-full mt-2">

<div className="absolute left-0 top-0 h-full w-[40%] group-hover:w-[75%] bg-gradient-to-r from-purple-600 to-purple-400 rounded-full transition-all duration-700 ease-out"></div>

<div className="absolute left-[40%] group-hover:left-[75%] top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_15px_rgba(168,85,247,0.6)] border-2 border-[#09090b] transition-all duration-700 ease-out hover:scale-125 cursor-pointer"></div>
</div>
</div>
</div>

<div className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-[800ms] delay-200 rounded-2xl border border-white/[0.08] bg-[#09090b] hover:border-purple-500/20 p-6 flex flex-col justify-between relative overflow-hidden group">
<div className="absolute -right-4 -top-4 w-28 h-28 bg-purple-500/10 blur-2xl rounded-full group-hover:bg-purple-500/20 transition-colors duration-500"></div>
<div className="z-10">
<h3 className="text-base font-medium tracking-tight text-white mb-1">SEO Optimized</h3>
<p className="text-xs text-zinc-400 font-light">Built-in keyword density tracking.</p>
</div>
<div className="flex items-end justify-between z-10 w-full">
<div className="flex items-end gap-2">

<div className="relative h-10 w-14 overflow-hidden">
<span className="absolute inset-0 text-4xl font-semibold tracking-tighter text-white group-hover:-translate-y-full transition-transform duration-500 ease-out flex items-end">86</span>
<span className="absolute inset-0 text-4xl font-semibold tracking-tighter text-purple-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out flex items-end drop-shadow-[0_0_10px_rgba(168,85,247,0.4)]">98</span>
</div>
<span className="text-xs text-purple-400 mb-1 flex items-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-100"><iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon> +12</span>
</div>

<div className="flex items-end gap-1 opacity-40 group-hover:opacity-100 transition-opacity duration-500">
<div className="w-1.5 bg-purple-400 rounded-t-sm h-3 group-hover:h-5 transition-all duration-300 delay-75"></div>
<div className="w-1.5 bg-purple-400 rounded-t-sm h-4 group-hover:h-8 transition-all duration-300 delay-150"></div>
<div className="w-1.5 bg-purple-400 rounded-t-sm h-2 group-hover:h-10 transition-all duration-300 delay-200"></div>
</div>
</div>
</div>

<div className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-[800ms] delay-300 rounded-2xl border border-white/[0.08] bg-[#09090b] hover:border-purple-500/20 p-6 flex flex-col justify-between group overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="z-10">
<h3 className="text-base font-medium tracking-tight text-white mb-1">Auto-Formatting</h3>
<p className="text-xs text-zinc-400 font-light">Structure content on the fly.</p>
</div>
<div className="space-y-4 mt-4 z-10">
<div className="flex items-center justify-between">
<span className="text-xs text-zinc-300 group-hover:text-zinc-500 transition-colors duration-300">Markdown</span>

<div className="w-8 h-4 bg-purple-500 group-hover:bg-zinc-800 rounded-full relative cursor-pointer transition-colors duration-300 border border-transparent group-hover:border-white/[0.05]">
<div className="absolute right-0.5 group-hover:right-[1.125rem] top-0.5 w-3 h-3 bg-white group-hover:bg-zinc-400 rounded-full shadow-sm transition-all duration-300"></div>
</div>
</div>
<div className="flex items-center justify-between">
<span className="text-xs text-zinc-500 group-hover:text-purple-300 transition-colors duration-300">HTML Tags</span>

<div className="w-8 h-4 bg-zinc-800 group-hover:bg-purple-500 rounded-full relative cursor-pointer border border-white/[0.05] group-hover:border-transparent transition-colors duration-300 shadow-[0_0_0_rgba(168,85,247,0)] group-hover:shadow-[0_0_10px_rgba(168,85,247,0.3)]">
<div className="absolute left-0.5 group-hover:left-[1.125rem] top-0.5 w-3 h-3 bg-zinc-400 group-hover:bg-white rounded-full shadow-sm transition-all duration-300"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/[0.05] bg-white/[0.01]">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row items-center justify-between gap-16">
<div className="md:w-1/2 reveal-on-scroll opacity-0 translate-x-[-20px] transition-all duration-[800ms]">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white mb-4">Connects to your stack.</h2>
<p className="text-zinc-400 text-sm md:text-base font-light mb-8 max-w-lg leading-relaxed">
                        NXT doesn't force you into a new ecosystem. Plug our engine directly into the tools your team already uses every day. Native apps, IDE extensions, and a robust GraphQL API.
                    </p>
<a className="inline-flex items-center gap-2 text-sm text-white hover:text-purple-300 transition-colors group font-medium" href="#">
                        View all 40+ integrations
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="md:w-1/2 w-full grid grid-cols-2 sm:grid-cols-3 gap-4 reveal-on-scroll opacity-0 translate-y-8 transition-all duration-[800ms] delay-200">
<div className="flex items-center gap-3 p-4 rounded-xl border border-white/[0.05] bg-[#09090b] hover:bg-white/[0.03] hover:border-purple-500/20 transition-all cursor-pointer group">
<iconify-icon className="text-white group-hover:text-purple-400 transition-colors" icon="solar:code-square-linear" width="20"></iconify-icon>
<span className="text-sm font-medium text-zinc-300">VS Code</span>
</div>
<div className="flex items-center gap-3 p-4 rounded-xl border border-white/[0.05] bg-[#09090b] hover:bg-white/[0.03] hover:border-purple-500/20 transition-all cursor-pointer group">
<iconify-icon className="text-white group-hover:text-purple-400 transition-colors" icon="solar:document-add-linear" width="20"></iconify-icon>
<span className="text-sm font-medium text-zinc-300">Notion</span>
</div>
<div className="flex items-center gap-3 p-4 rounded-xl border border-white/[0.05] bg-[#09090b] hover:bg-white/[0.03] hover:border-purple-500/20 transition-all cursor-pointer group">
<iconify-icon className="text-white group-hover:text-purple-400 transition-colors" icon="solar:chat-square-linear" width="20"></iconify-icon>
<span className="text-sm font-medium text-zinc-300">Slack</span>
</div>
<div className="flex items-center gap-3 p-4 rounded-xl border border-white/[0.05] bg-[#09090b] hover:bg-white/[0.03] hover:border-purple-500/20 transition-all cursor-pointer group">
<iconify-icon className="text-white group-hover:text-purple-400 transition-colors" icon="solar:programming-linear" width="20"></iconify-icon>
<span className="text-sm font-medium text-zinc-300">GitHub</span>
</div>
<div className="flex items-center gap-3 p-4 rounded-xl border border-white/[0.05] bg-[#09090b] hover:bg-white/[0.03] hover:border-purple-500/20 transition-all cursor-pointer group">
<iconify-icon className="text-white group-hover:text-purple-400 transition-colors" icon="solar:server-square-linear" width="20"></iconify-icon>
<span className="text-sm font-medium text-zinc-300">Vercel</span>
</div>
<div className="flex items-center gap-3 p-4 rounded-xl border border-white/[0.05] bg-[#09090b] hover:bg-white/[0.03] hover:border-purple-500/20 transition-all cursor-pointer group">
<iconify-icon className="text-white group-hover:text-purple-400 transition-colors" icon="solar:figma-linear" width="20"></iconify-icon>
<span className="text-sm font-medium text-zinc-300">Figma</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/[0.05] bg-gradient-to-b from-purple-500/[0.02] to-transparent" id="customers">
<div className="max-w-7xl mx-auto">
<h2 className="reveal-on-scroll opacity-0 translate-y-6 transition-all duration-700 text-2xl md:text-3xl font-semibold tracking-tighter text-white text-center mb-12">Don't just take our word for it.</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-[800ms] delay-100 p-6 rounded-xl border border-white/[0.05] bg-[#09090b] hover:border-purple-500/20 hover:shadow-[0_0_20px_rgba(168,85,247,0.05)] transition-all flex flex-col justify-between">
<p className="text-sm text-zinc-400 font-light leading-relaxed mb-6">"NXT has completely transformed how we write technical documentation. It understands our codebase contextually and generates initial drafts that are 90% there."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-medium text-white border border-white/10">S</div>
<div>
<p className="text-xs font-medium text-white">Sarah Chen</p>
<p className="text-[10px] text-zinc-500 tracking-tight">Lead Engineer @ TechFlow</p>
</div>
</div>
</div>

<div className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-[800ms] delay-200 p-6 rounded-xl border border-white/[0.05] bg-[#09090b] hover:border-purple-500/20 hover:shadow-[0_0_20px_rgba(168,85,247,0.05)] transition-all flex flex-col justify-between">
<p className="text-sm text-zinc-400 font-light leading-relaxed mb-6">"The tone control is unmatched. We use it to adapt single pieces of product marketing into distinct variations for different social channels instantly."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-medium text-white border border-white/10">M</div>
<div>
<p className="text-xs font-medium text-white">Marcus Dubois</p>
<p className="text-[10px] text-zinc-500 tracking-tight">VP Marketing @ Horizon</p>
</div>
</div>
</div>

<div className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-[800ms] delay-300 p-6 rounded-xl border border-white/[0.05] bg-[#09090b] hover:border-purple-500/20 hover:shadow-[0_0_20px_rgba(168,85,247,0.05)] transition-all flex flex-col justify-between">
<p className="text-sm text-zinc-400 font-light leading-relaxed mb-6">"Implementation was seamless. The API handles thousands of generation requests daily without a hiccup. It's a core part of our CMS stack now."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-medium text-white border border-white/10">E</div>
<div>
<p className="text-xs font-medium text-white">Elena Rostova</p>
<p className="text-[10px] text-zinc-500 tracking-tight">CTO @ ContentGrid</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 max-w-7xl mx-auto border-t border-white/[0.05]" id="pricing">
<div className="reveal-on-scroll opacity-0 translate-y-6 transition-all duration-700 text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white mb-4">Simple, transparent pricing.</h2>
<p className="text-zinc-400 text-sm md:text-base mb-8 font-light">Start for free, upgrade when you need more power.</p>
<div className="inline-flex items-center gap-3 bg-white/[0.02] border border-white/[0.08] rounded-full p-1">
<button className="px-4 py-1.5 rounded-full text-xs font-medium bg-zinc-800 text-white shadow-sm">Monthly</button>
<button className="px-4 py-1.5 rounded-full text-xs font-medium text-zinc-400 hover:text-white transition-colors">Annually <span className="text-[10px] text-purple-400 ml-1">-20%</span></button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">

<div className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-[800ms] delay-100 p-8 rounded-2xl border border-white/[0.08] bg-[#09090b]">
<h3 className="text-lg font-medium tracking-tight text-white mb-2">Hobby</h3>
<p className="text-sm text-zinc-400 font-light mb-6">For individuals exploring AI.</p>
<div className="mb-6">
<span className="text-4xl font-semibold tracking-tighter text-white">$0</span>
<span className="text-xs text-zinc-500">/mo</span>
</div>
<a className="block w-full text-center py-2 rounded-lg text-sm font-medium border border-white/[0.1] text-white hover:bg-white/[0.05] transition-colors mb-8" href="#">Get Started</a>
<ul className="space-y-3 text-sm text-zinc-400 font-light">
<li className="flex items-center gap-2"><iconify-icon className="text-zinc-600" icon="solar:check-circle-linear"></iconify-icon> 5,000 words/month</li>
<li className="flex items-center gap-2"><iconify-icon className="text-zinc-600" icon="solar:check-circle-linear"></iconify-icon> Standard generation model</li>
<li className="flex items-center gap-2"><iconify-icon className="text-zinc-600" icon="solar:check-circle-linear"></iconify-icon> Community support</li>
</ul>
</div>

<div className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-[800ms] delay-200 p-8 rounded-2xl border border-purple-500/30 bg-purple-500/[0.02] relative transform md:-translate-y-4 shadow-[0_0_50px_rgba(168,85,247,0.05)]">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple-500 text-white text-[10px] font-medium px-3 py-1 rounded-full tracking-wide uppercase shadow-[0_0_15px_rgba(168,85,247,0.4)]">Most Popular</div>
<h3 className="text-lg font-medium tracking-tight text-white mb-2">Pro</h3>
<p className="text-sm text-zinc-400 font-light mb-6">For professionals and small teams.</p>
<div className="mb-6">
<span className="text-4xl font-semibold tracking-tighter text-white">$29</span>
<span className="text-xs text-zinc-500">/mo</span>
</div>
<a className="block w-full text-center py-2 rounded-lg text-sm font-medium bg-white text-black hover:bg-zinc-200 transition-colors mb-8 shadow-[0_0_20px_rgba(255,255,255,0.1)]" href="#">Start Free Trial</a>
<ul className="space-y-3 text-sm text-zinc-300 font-light">
<li className="flex items-center gap-2"><iconify-icon className="text-purple-400 w-4" icon="solar:check-circle-bold"></iconify-icon> Unlimited words</li>
<li className="flex items-center gap-2"><iconify-icon className="text-purple-400 w-4" icon="solar:check-circle-bold"></iconify-icon> Advanced context models (GPT-4)</li>
<li className="flex items-center gap-2"><iconify-icon className="text-purple-400 w-4" icon="solar:check-circle-bold"></iconify-icon> Custom tone adjustments</li>
<li className="flex items-center gap-2"><iconify-icon className="text-purple-400 w-4" icon="solar:check-circle-bold"></iconify-icon> Priority email support</li>
</ul>
</div>

<div className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-[800ms] delay-300 p-8 rounded-2xl border border-white/[0.08] bg-[#09090b]">
<h3 className="text-lg font-medium tracking-tight text-white mb-2">Enterprise</h3>
<p className="text-sm text-zinc-400 font-light mb-6">Custom limits and dedicated support.</p>
<div className="mb-6">
<span className="text-4xl font-semibold tracking-tighter text-white">Custom</span>
</div>
<a className="block w-full text-center py-2 rounded-lg text-sm font-medium border border-white/[0.1] text-white hover:bg-white/[0.05] transition-colors mb-8" href="#">Contact Sales</a>
<ul className="space-y-3 text-sm text-zinc-400 font-light">
<li className="flex items-center gap-2"><iconify-icon className="text-zinc-600" icon="solar:check-circle-linear"></iconify-icon> Dedicated infrastructure</li>
<li className="flex items-center gap-2"><iconify-icon className="text-zinc-600" icon="solar:check-circle-linear"></iconify-icon> Custom model fine-tuning</li>
<li className="flex items-center gap-2"><iconify-icon className="text-zinc-600" icon="solar:check-circle-linear"></iconify-icon> SSO &amp; Advanced Security</li>
<li className="flex items-center gap-2"><iconify-icon className="text-zinc-600" icon="solar:check-circle-linear"></iconify-icon> 24/7 Phone support</li>
</ul>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-3xl mx-auto border-t border-white/[0.05]" id="faq">
<div className="reveal-on-scroll opacity-0 translate-y-6 transition-all duration-[800ms] text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tighter text-white mb-4">Frequently asked questions</h2>
<p className="text-zinc-400 text-sm font-light">Everything you need to know about the product and billing.</p>
</div>
<div className="space-y-8 reveal-on-scroll opacity-0 translate-y-8 transition-all duration-[800ms] delay-100">
<div className="border-b border-white/[0.05] pb-8 hover:border-purple-500/30 transition-colors">
<h3 className="text-base font-medium tracking-tight text-white mb-2">How does the context-aware engine work?</h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed">NXT securely indexes your provided repositories or documents. It creates a local vector map of your brand voice, technical terminology, and writing patterns to ensure all generated output feels uniquely yours.</p>
</div>
<div className="border-b border-white/[0.05] pb-8 hover:border-purple-500/30 transition-colors">
<h3 className="text-base font-medium tracking-tight text-white mb-2">Is my data used to train your models?</h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed">No. We maintain a strict zero-retention data policy. Your inputs and context files are processed in an isolated container and instantly wiped after generation. We never use your proprietary data to train our foundational models.</p>
</div>
<div className="border-b border-white/[0.05] pb-8 hover:border-purple-500/30 transition-colors">
<h3 className="text-base font-medium tracking-tight text-white mb-2">Can I cancel my subscription at any time?</h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed">Yes, you can cancel your subscription from your billing dashboard at any time. You will retain access to your plan until the end of your current billing cycle.</p>
</div>
<div className="pb-4">
<h3 className="text-base font-medium tracking-tight text-white mb-2">What languages are supported?</h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed">Currently, NXT supports generation in over 40 languages, including English, Spanish, French, German, Japanese, and Mandarin, with automated localized tone matching.</p>
</div>
</div>
</section>

<section className="border-t border-white/[0.05] relative overflow-hidden">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-purple-600/20 to-purple-900/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="reveal-on-scroll opacity-0 translate-y-6 transition-all duration-700 py-32 px-6 text-center max-w-4xl mx-auto relative z-10">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-6">Ready to scale your content?</h2>
<p className="text-zinc-400 text-sm md:text-base mb-10 font-light">Join thousands of developers and creators building faster with NXT.</p>
<a className="inline-block bg-white text-black px-8 py-3 rounded-full text-sm font-medium hover:bg-zinc-200 transition-all duration-200 shadow-[0_0_30px_rgba(168,85,247,0.2)] hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] active:scale-95" href="#">
                Start building for free
            </a>
</div>
<footer className="border-t border-white/[0.05] bg-[#09090b] py-12 px-6">
<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
<div className="col-span-2">
<a className="text-white text-lg font-medium tracking-tighter flex items-center gap-2 mb-4 group" href="#">
<iconify-icon className="group-hover:text-purple-400 transition-colors" icon="solar:box-linear" strokeWidth="1.5" width="20"></iconify-icon>
                        NXT
                    </a>
<p className="text-xs text-zinc-500 font-light max-w-xs">Engineered for the next generation of content creators and developers. Build faster, write smarter.</p>
</div>
<div>
<h4 className="text-xs font-semibold text-white tracking-tight mb-4 uppercase">Product</h4>
<ul className="space-y-2 text-sm text-zinc-400 font-light">
<li><a className="hover:text-white transition-colors" href="#features">Features</a></li>
<li><a className="hover:text-white transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-white transition-colors" href="#pricing">Pricing</a></li>
<li><a className="hover:text-white transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white tracking-tight mb-4 uppercase">Resources</h4>
<ul className="space-y-2 text-sm text-zinc-400 font-light">
<li><a className="hover:text-white transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-white transition-colors" href="#">API Reference</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Community</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white tracking-tight mb-4 uppercase">Legal</h4>
<ul className="space-y-2 text-sm text-zinc-400 font-light">
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-white transition-colors" href="#">Cookie Policy</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/[0.05] text-xs text-zinc-500 font-light">
<p>© 2024 NXT AI Inc. All rights reserved.</p>
<div className="flex items-center gap-4 mt-4 md:mt-0">
<a className="hover:text-purple-400 transition-colors" href="#"><iconify-icon icon="solar:programming-linear" width="18"></iconify-icon></a>
<a className="hover:text-purple-400 transition-colors" href="#"><iconify-icon icon="solar:letter-linear" width="18"></iconify-icon></a>
</div>
</div>
</footer>
</section>



    </>
  );
}
