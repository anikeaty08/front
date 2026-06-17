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



        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.animation = 'fadeSlideIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards';
                        entry.target.classList.add('animate');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            const animatedElements = document.querySelectorAll('.animate-on-scroll');
            animatedElements.forEach(el => {
                // Initial state to hide before animation kicks in
                el.style.opacity = '0';
                observer.observe(el);
            });
            
            // Navbar blur effect on scroll
            const navbar = document.getElementById('navbar');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    navbar.classList.add('backdrop-blur-md', 'bg-slate-950/70');
                } else {
                    navbar.classList.remove('backdrop-blur-md', 'bg-slate-950/70');
                }
            });
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
      

<div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
<div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-900/20 blur-[120px]"></div>
<div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-800/10 blur-[120px]"></div>
</div>

<nav className="fixed w-full z-50 transition-all duration-300" id="navbar">
<div className="glass-panel border-x-0 border-t-0 border-b border-white/5">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="text-white font-semibold text-xl tracking-tight flex items-center gap-2">
<iconify-icon className="text-cyan-500 text-2xl" icon="lucide:trending-up"></iconify-icon>
                    The Sales Mastery Co.
                </div>
<a className="hidden md:inline-flex btn-shiny px-6 py-2.5 text-sm font-semibold text-white" href="#contact">
                    Book Strategy Call
                </a>
</div>
</div>
</nav>
<main className="">

<section className="relative pt-40 pb-24 md:pt-52 md:pb-32 px-6 flex items-center min-h-screen" id="hero">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center w-full">
<div className="col-anim delay-1 space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
</span>
                        Ambrose Blowfield
                    </div>
<h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight">
                        Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Sales Velocity</span>
</h1>
<p className="text-lg text-slate-400 max-w-xl leading-relaxed">
                        Equipping B2B organizations with the modern frameworks, behavioral psychology, and execution systems to dominate their markets and scale predictably.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="btn-shiny px-8 py-4 text-center font-semibold text-white text-lg" href="#contact">
                            Scale Your Revenue
                        </a>
<a className="glass-panel px-8 py-4 rounded-full text-center font-semibold text-white text-lg hover:bg-slate-800/50 transition-colors border border-white/10" href="#programs">
                            Explore Frameworks
                        </a>
</div>
</div>
<div className="col-anim delay-2 relative lg:h-[600px] flex justify-center items-center">

<div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/20 to-transparent rounded-[2rem] border border-white/5 transform rotate-3 scale-105"></div>
<div className="relative w-full h-full glass-panel rounded-[2rem] p-8 flex flex-col justify-center items-center text-center gap-6 overflow-hidden group">
<div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<iconify-icon className="text-6xl text-cyan-500 opacity-80 group-hover:scale-110 transition-transform duration-500" icon="lucide:play-circle"></iconify-icon>
<h3 className="text-2xl font-semibold text-white relative z-10">The Mastery Blueprint</h3>
<p className="text-slate-400 relative z-10">Watch the 3-minute executive overview</p>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-slate-900/30 backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-sm font-medium text-slate-500 uppercase tracking-widest mb-8">Trusted by industry leaders</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<iconify-icon className="text-3xl hover:text-cyan-500 transition-colors" icon="simple-icons:microsoft"></iconify-icon>
<iconify-icon className="text-4xl hover:text-cyan-500 transition-colors" icon="simple-icons:salesforce"></iconify-icon>
<iconify-icon className="text-4xl hover:text-cyan-500 transition-colors" icon="simple-icons:hubspot"></iconify-icon>
<iconify-icon className="text-4xl hover:text-cyan-500 transition-colors" icon="simple-icons:oracle"></iconify-icon>
<iconify-icon className="text-4xl hover:text-cyan-500 transition-colors" icon="simple-icons:cisco"></iconify-icon>
</div>
</div>
</section>

<section className="py-24 px-6 relative">
<div className="max-w-4xl mx-auto text-center space-y-8 animate-on-scroll">
<h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                    Traditional sales tactics are <span className="text-cyan-500">failing</span> modern buyers.
                </h2>
<p className="text-xl text-slate-400 leading-relaxed">
                    If your team is relying on outdated scripts, aggressive closing techniques, and volume-based outreach, you are burning your pipeline. Today's buyers demand insight, consultation, and undeniable value.
                </p>
</div>
</section>

<section className="py-24 px-6 bg-slate-900/20 border-y border-white/5" id="about">
<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1 relative aspect-square md:aspect-auto md:h-[600px] glass-panel rounded-[2rem] overflow-hidden flex items-center justify-center p-8 animate-on-scroll" style={{animation: '0.8s cubic-bezier(0.16, 1, 0.3, 1) 0s 1 normal forwards running fadeSlideIn'}}>

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/40 via-transparent to-transparent"></div>
<div className="relative text-center space-y-4">
<div className="w-32 h-32 mx-auto rounded-full bg-slate-800 border-2 border-cyan-500/30 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(6,182,212,0.2)]">
<iconify-icon className="text-5xl text-cyan-500/50" icon="lucide:user"></iconify-icon>
</div>
<h3 className="text-2xl font-bold text-white">Ambrose Blowfield</h3>
<p className="text-cyan-400">Founder &amp; Chief Strategist</p>
</div>
</div>
<div className="order-1 md:order-2 space-y-8 animate-on-scroll" style={{animation: '0.8s cubic-bezier(0.16, 1, 0.3, 1) 0s 1 normal forwards running fadeSlideIn'}}>
<h2 className="text-4xl font-bold text-white">The Architect of High-Performance Sales Teams</h2>
<p className="text-slate-400 text-lg leading-relaxed">
                        With over two decades of in-the-trenches experience, Ambrose doesn't just teach theory. He installs robust, scalable sales engines into growing companies to create unshakeable revenue confidence.
                    </p>
<ul className="space-y-6">
<li className="flex items-start gap-4 p-4 glass-panel rounded-2xl">
<div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center shrink-0 border border-cyan-500/20">
<iconify-icon className="text-cyan-500" icon="lucide:check"></iconify-icon>
</div>
<div>
<h4 className="text-white font-semibold mb-1">Decades of Practical Experience</h4>
<p className="text-sm text-slate-400">Built and scaled multiple 8-figure sales organizations from the ground up globally.</p>
</div>
</li>
<li className="flex items-start gap-4 p-4 glass-panel rounded-2xl">
<div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center shrink-0 border border-cyan-500/20">
<iconify-icon className="text-cyan-500" icon="lucide:brain-circuit"></iconify-icon>
</div>
<div>
<h4 className="text-white font-semibold mb-1">Behavioral Psychology Focus</h4>
<p className="text-sm text-slate-400">Utilizing advanced negotiation and persuasion frameworks mapped to modern buyer journeys.</p>
</div>
</li>
</ul>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="programs">
<div className="max-w-7xl mx-auto space-y-16">
<div className="text-center max-w-2xl mx-auto space-y-4 animate-on-scroll">
<h2 className="text-4xl font-bold text-white">Comprehensive Sales Mastery</h2>
<p className="text-slate-400">Tailored frameworks designed to address the exact bottlenecks in your revenue engine.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="glass-panel p-8 rounded-[2rem] hover:-translate-y-2 transition-transform duration-300 animate-on-scroll delay-1 group border-t border-white/10 hover:border-cyan-500/30">
<div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-6 border border-cyan-500/20 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl text-cyan-400" icon="lucide:target"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-white mb-3">Targeted Lead Generation</h3>
<p className="text-slate-400 text-sm leading-relaxed mb-6">Build a predictable pipeline without relying on spam. Quality over quantity frameworks.</p>
<a className="text-cyan-400 text-sm font-semibold flex items-center gap-2 hover:gap-3 transition-all" href="#contact">
                            Learn more <iconify-icon icon="lucide:arrow-right"></iconify-icon>
</a>
</div>

<div className="glass-panel p-8 rounded-[2rem] relative overflow-hidden hover:-translate-y-2 transition-transform duration-300 animate-on-scroll delay-2 border-t border-cyan-500/50 shadow-[0_0_30px_rgba(6,182,212,0.1)] group">
<div className="absolute top-0 right-0 p-4">
<span className="bg-cyan-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-full">POPULAR</span>
</div>
<div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-6 border border-cyan-500/20 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl text-cyan-400" icon="lucide:users"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-white mb-3">Team Transformation</h3>
<p className="text-slate-400 text-sm leading-relaxed mb-6">90-day intensive program to upskill your entire sales floor and align methodologies.</p>
<a className="text-cyan-400 text-sm font-semibold flex items-center gap-2 hover:gap-3 transition-all" href="#contact">
                            Learn more <iconify-icon icon="lucide:arrow-right"></iconify-icon>
</a>
</div>

<div className="glass-panel p-8 rounded-[2rem] hover:-translate-y-2 transition-transform duration-300 animate-on-scroll delay-3 group border-t border-white/10 hover:border-cyan-500/30">
<div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-6 border border-cyan-500/20 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl text-cyan-400" icon="lucide:line-chart"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-white mb-3">Executive Consulting</h3>
<p className="text-slate-400 text-sm leading-relaxed mb-6">Fractional CRO services to design compensation, tech stacks, and high-level strategy.</p>
<a className="text-cyan-400 text-sm font-semibold flex items-center gap-2 hover:gap-3 transition-all" href="#contact">
                            Learn more <iconify-icon icon="lucide:arrow-right"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-900/30 border-y border-white/5" id="framework">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
<div className="space-y-8 animate-on-scroll">
<h2 className="text-4xl font-bold text-white">The 4-Pillar Mastery Framework</h2>
<p className="text-slate-400 leading-relaxed">A systematic approach to predictable revenue growth, eliminating guesswork from your sales process completely.</p>
<div className="space-y-4">

<div className="glass-panel p-4 rounded-2xl flex gap-6 items-center group hover:bg-slate-800/50 transition-colors">
<div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-cyan-900 to-slate-700 group-hover:from-cyan-400 group-hover:to-blue-500 transition-all duration-300">01</div>
<div>
<h4 className="text-white font-semibold text-lg mb-1">Positioning</h4>
<p className="text-sm text-slate-400">Refining your value proposition to speak directly to economic buyers.</p>
</div>
</div>

<div className="glass-panel p-4 rounded-2xl flex gap-6 items-center group hover:bg-slate-800/50 transition-colors">
<div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-cyan-900 to-slate-700 group-hover:from-cyan-400 group-hover:to-blue-500 transition-all duration-300">02</div>
<div>
<h4 className="text-white font-semibold text-lg mb-1">Process</h4>
<p className="text-sm text-slate-400">Mapping the ideal sales velocity journey from touchpoint to close.</p>
</div>
</div>

<div className="glass-panel p-4 rounded-2xl flex gap-6 items-center group hover:bg-slate-800/50 transition-colors">
<div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-cyan-900 to-slate-700 group-hover:from-cyan-400 group-hover:to-blue-500 transition-all duration-300">03</div>
<div>
<h4 className="text-white font-semibold text-lg mb-1">Psychology</h4>
<p className="text-sm text-slate-400">Equipping reps with behavioral insights to navigate fierce objections.</p>
</div>
</div>

<div className="glass-panel p-4 rounded-2xl flex gap-6 items-center group hover:bg-slate-800/50 transition-colors">
<div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-cyan-900 to-slate-700 group-hover:from-cyan-400 group-hover:to-blue-500 transition-all duration-300">04</div>
<div>
<h4 className="text-white font-semibold text-lg mb-1">Performance</h4>
<p className="text-sm text-slate-400">Implementing strict KPIs and coaching rhythms for continuous improvement.</p>
</div>
</div>
</div>
</div>
<div className="relative h-[500px] glass-panel rounded-[2rem] flex items-center justify-center p-8 animate-on-scroll">

<div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent rounded-[2rem]"></div>
<div className="w-full h-full relative border-b-2 border-l-2 border-slate-700/50 flex items-end p-4 gap-4">
<div className="w-1/4 bg-cyan-900/40 rounded-t-lg h-[30%] hover:bg-cyan-900/60 transition-all duration-500 relative group">
<div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold text-cyan-500 transition-opacity">Q1</div>
</div>
<div className="w-1/4 bg-cyan-800/50 rounded-t-lg h-[50%] hover:bg-cyan-800/70 transition-all duration-500 relative group">
<div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold text-cyan-500 transition-opacity">Q2</div>
</div>
<div className="w-1/4 bg-cyan-600/60 rounded-t-lg h-[75%] hover:bg-cyan-600/80 transition-all duration-500 relative group">
<div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold text-cyan-500 transition-opacity">Q3</div>
</div>
<div className="w-1/4 bg-gradient-to-t from-cyan-600 to-cyan-400 rounded-t-lg h-[95%] shadow-[0_0_20px_rgba(6,182,212,0.4)] relative">
<div className="absolute -top-5 -right-5 bg-slate-900 border border-cyan-500/50 text-cyan-400 text-xs font-bold py-1 px-3 rounded-full flex items-center gap-1">
<iconify-icon icon="lucide:trending-up"></iconify-icon>
                                Mastery
                            </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="results">
<div className="max-w-7xl mx-auto space-y-16">
<div className="text-center max-w-2xl mx-auto animate-on-scroll">
<h2 className="text-4xl font-bold text-white mb-4">Proven Transformational Results</h2>
<p className="text-slate-400">Don't just take our word for it. Look at the numbers from teams we've optimized.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-3xl animate-on-scroll delay-1">
<div className="flex gap-1 text-cyan-500 mb-6">
<iconify-icon className="text-lg" icon="lucide:star"></iconify-icon>
<iconify-icon className="text-lg" icon="lucide:star"></iconify-icon>
<iconify-icon className="text-lg" icon="lucide:star"></iconify-icon>
<iconify-icon className="text-lg" icon="lucide:star"></iconify-icon>
<iconify-icon className="text-lg" icon="lucide:star"></iconify-icon>
</div>
<p className="text-slate-300 mb-8 italic leading-relaxed">"Ambrose completely re-engineered our go-to-market strategy. We saw a 40% reduction in sales cycle length within the first quarter alone."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center border border-white/10">
<iconify-icon className="text-slate-500" icon="lucide:user"></iconify-icon>
</div>
<div>
<h4 className="text-white text-sm font-semibold">Sarah Jenkins</h4>
<p className="text-cyan-500 text-xs font-medium">VP of Sales, TechCorp</p>
</div>
</div>
</div>

<div className="glass-panel p-8 rounded-3xl animate-on-scroll delay-2">
<div className="flex gap-1 text-cyan-500 mb-6">
<iconify-icon className="text-lg" icon="lucide:star"></iconify-icon>
<iconify-icon className="text-lg" icon="lucide:star"></iconify-icon>
<iconify-icon className="text-lg" icon="lucide:star"></iconify-icon>
<iconify-icon className="text-lg" icon="lucide:star"></iconify-icon>
<iconify-icon className="text-lg" icon="lucide:star"></iconify-icon>
</div>
<p className="text-slate-300 mb-8 italic leading-relaxed">"The ROI was immediate. The team finally has a unified language and process. Win rates are up 28% across the board."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center border border-white/10">
<iconify-icon className="text-slate-500" icon="lucide:user"></iconify-icon>
</div>
<div>
<h4 className="text-white text-sm font-semibold">Marcus Webb</h4>
<p className="text-cyan-500 text-xs font-medium">CEO, GrowthLogix</p>
</div>
</div>
</div>

<div className="glass-panel p-8 rounded-3xl flex flex-col justify-center items-center text-center bg-cyan-900/10 border-cyan-500/30 animate-on-scroll delay-3 relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 to-transparent"></div>
<div className="relative z-10">
<div className="text-6xl font-black text-white mb-2 tracking-tighter">+<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">312</span>%</div>
<h4 className="text-lg font-semibold text-white mb-2">Average Pipeline Growth</h4>
<p className="text-slate-400 text-sm">Across all enterprise clients in year one.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-900/20 border-t border-white/5">
<div className="max-w-3xl mx-auto space-y-12 animate-on-scroll">
<div className="text-center">
<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Common Questions</h2>
<p className="text-slate-400">Everything you need to know before booking your strategy call.</p>
</div>
<div className="space-y-4">

<details className="group glass-panel rounded-2xl p-6 open:bg-slate-800/50 transition-colors cursor-pointer border-t border-white/5">
<summary className="flex justify-between items-center font-semibold text-white list-none">
                            Do you work with startups or only enterprise?
                            <span className="transition-transform duration-300 group-open:rotate-180">
<iconify-icon className="text-cyan-500 text-xl" icon="lucide:chevron-down"></iconify-icon>
</span>
</summary>
<div className="text-slate-400 mt-4 leading-relaxed text-sm pr-8">
                            We work primarily with established B2B organizations looking to scale from 7 to 8 figures, or enterprise teams needing process optimization and alignment.
                        </div>
</details>

<details className="group glass-panel rounded-2xl p-6 open:bg-slate-800/50 transition-colors cursor-pointer border-t border-white/5">
<summary className="flex justify-between items-center font-semibold text-white list-none">
                            How long until we see tangible results?
                            <span className="transition-transform duration-300 group-open:rotate-180">
<iconify-icon className="text-cyan-500 text-xl" icon="lucide:chevron-down"></iconify-icon>
</span>
</summary>
<div className="text-slate-400 mt-4 leading-relaxed text-sm pr-8">
                            While full pipeline architecture takes 30-60 days to implement, teams typically see improved conversion rates on existing pipeline within the first 3 weeks of training.
                        </div>
</details>

<details className="group glass-panel rounded-2xl p-6 open:bg-slate-800/50 transition-colors cursor-pointer border-t border-white/5">
<summary className="flex justify-between items-center font-semibold text-white list-none">
                            Is this just motivation or an actual framework?
                            <span className="transition-transform duration-300 group-open:rotate-180">
<iconify-icon className="text-cyan-500 text-xl" icon="lucide:chevron-down"></iconify-icon>
</span>
</summary>
<div className="text-slate-400 mt-4 leading-relaxed text-sm pr-8">
                            This is strictly tactical, systemic, and behavioral. We build repeatable playbooks, scripts, and processes—not temporary motivational hype.
                        </div>
</details>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden border-t border-white/5" id="contact">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-slate-950 to-slate-950"></div>
<div className="max-w-4xl mx-auto glass-panel rounded-[3rem] p-8 md:p-16 text-center relative z-10 border border-cyan-500/20 animate-on-scroll shadow-[0_0_50px_rgba(6,182,212,0.1)]">
<div className="w-20 h-20 mx-auto bg-cyan-500/10 rounded-full flex items-center justify-center mb-8 border border-cyan-500/30">
<iconify-icon className="text-3xl text-cyan-400" icon="lucide:rocket"></iconify-icon>
</div>
<h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to dominate your market?</h2>
<p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
                    Stop leaving money on the table with inefficient sales processes. Book a complimentary 30-minute strategy diagnostic with Ambrose.
                </p>
<form className="max-w-md mx-auto space-y-4 mb-8 text-left">
<div>
<input className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-cyan-500 transition-colors placeholder:text-slate-500" placeholder="Full Name" type="text"/>
</div>
<div>
<input className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-cyan-500 transition-colors placeholder:text-slate-500" placeholder="Work Email" type="email"/>
</div>
<button className="w-full btn-shiny px-8 py-4 text-center font-semibold text-white text-lg rounded-xl mt-2" type="button">
                        Schedule Diagnostic Call
                    </button>
</form>
<div className="flex items-center justify-center gap-2 text-xs text-slate-500">
<iconify-icon className="text-cyan-500" icon="lucide:lock"></iconify-icon>
                    Strictly confidential. No high-pressure sales tactics.
                </div>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-slate-950 pt-16 pb-8 px-6">
<div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-16">
<div className="col-span-2">
<div className="text-white font-semibold text-xl tracking-tight flex items-center gap-2 mb-4">
<iconify-icon className="text-cyan-500 text-2xl" icon="lucide:trending-up"></iconify-icon>
                    The Sales Mastery Co.
                </div>
<p className="text-slate-400 text-sm max-w-sm mb-8 leading-relaxed">
                    Elevating B2B sales organizations globally through modern psychological frameworks and robust execution systems.
                </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:-translate-y-1 transition-all" href="#">
<iconify-icon className="text-lg" icon="lucide:linkedin"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:-translate-y-1 transition-all" href="#">
<iconify-icon className="text-lg" icon="lucide:twitter"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:-translate-y-1 transition-all" href="#">
<iconify-icon className="text-lg" icon="lucide:youtube"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="text-white font-semibold mb-6">Navigation</h4>
<ul className="space-y-3 text-sm text-slate-400">
<li><a className="hover:text-cyan-400 transition-colors" href="#about">About Ambrose</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#programs">Programs &amp; Services</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-6">Legal</h4>
<ul className="space-y-3 text-sm text-slate-400">
<li><a className="hover:text-cyan-400 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto pt-8 border-t border-white/5 text-center flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-slate-500 text-sm">© 2023 The Sales Mastery Company. All rights reserved.</p>
<p className="text-slate-500 text-sm flex items-center gap-1">
                Designed with <iconify-icon className="text-cyan-500" icon="lucide:heart"></iconify-icon> for Growth
            </p>
</div>
</footer>



    </>
  );
}
