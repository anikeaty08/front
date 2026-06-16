import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Icons
        lucide.createIcons();

        // Intersection Observer for Scroll Animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    
                    // Handle Counter Animation specifically
                    const counters = entry.target.querySelectorAll('.count-up');
                    counters.forEach(counter => {
                        const target = +counter.getAttribute('data-target');
                        const duration = 2000; // ms
                        const increment = target / (duration / 16); // 60fps
                        
                        let current = 0;
                        const updateCounter = () => {
                            current += increment;
                            if (current < target) {
                                counter.innerText = Math.ceil(current);
                                requestAnimationFrame(updateCounter);
                            } else {
                                counter.innerText = target;
                            }
                        };
                        updateCounter();
                        // Remove class to prevent re-animating repeatedly (optional)
                        counter.classList.remove('count-up');
                    });
                    
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe elements
        document.querySelectorAll('.reveal-up, .reveal-left, .reveal-in').forEach(el => {
            observer.observe(el);
        });

        // Parallax Effect on Scroll
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            const heroImage = document.querySelector('section img');
            if(heroImage) {
                heroImage.style.transform = `scale(${1 + scrolled * 0.0002}) translateY(${scrolled * 0.1}px)`;
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-black/50 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
<i className="text-white w-5 h-5" data-lucide="zap" strokeWidth="1.5"></i>
</div>
<span className="text-white font-semibold tracking-tight text-lg group-hover:text-red-500 transition-colors">MOVEMENT</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium hover:text-white transition-colors" href="#features">Features</a>
<a className="text-sm font-medium hover:text-white transition-colors" href="#stats">Impact</a>
<a className="text-sm font-medium hover:text-white transition-colors" href="#testimonials">Stories</a>
</div>
<button className="hidden md:inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-white transition-all bg-white/5 border border-white/10 rounded-full hover:bg-red-600 hover:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black">
                Get Started
            </button>
</div>
</nav>

<section className="relative h-screen flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0 overflow-hidden">
<img alt="Action Crowd" className="w-full h-full object-cover opacity-40 animate-slow-zoom origin-center" src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.1),transparent_70%)]"></div>
</div>
<div className="relative z-10 text-center max-w-4xl px-6">
<div className="reveal-up delay-100">
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-xs font-medium tracking-wide uppercase backdrop-blur-md mb-6">
<span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                    Live Revolution
                </span>
</div>
<h1 className="text-6xl md:text-8xl font-semibold text-white tracking-tighter mb-8 reveal-up delay-200 leading-[0.9]">
                Join the <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-red-500">Movement.</span>
</h1>
<p className="text-xl md:text-2xl text-neutral-400 max-w-2xl mx-auto mb-10 reveal-up delay-300 font-light leading-relaxed">
                Empower your vision with the tools designed for the next generation of creators. Speed, precision, and chaos controlled.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal-up delay-500">
<button className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-red-600 px-8 font-medium text-white transition-all duration-300 hover:bg-red-500 hover:shadow-[0_0_40px_-10px_rgba(220,38,38,0.6)] hover:scale-105">
<span className="mr-2">Start Now</span>
<i className="w-5 h-5 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" strokeWidth="2"></i>
</button>
<button className="group inline-flex h-14 items-center justify-center rounded-full bg-white/5 border border-white/10 px-8 font-medium text-white transition-all hover:bg-white hover:text-black backdrop-blur-sm">
<i className="w-5 h-5 mr-2 group-hover:fill-black" data-lucide="play-circle" strokeWidth="1.5"></i>
                    Watch Video
                </button>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
<i className="w-6 h-6 text-white" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</section>

<section className="py-32 px-6 relative z-10" id="features">
<div className="max-w-7xl mx-auto">
<div className="mb-20 text-center reveal-up">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-4">Engineered for <span className="text-red-500">Speed</span></h2>
<p className="text-neutral-500">Everything you need to build faster, deployed globally.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group relative p-8 rounded-3xl bg-neutral-900/50 border border-white/5 hover:border-red-500/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden reveal-up">
<div className="absolute inset-0 bg-gradient-to-b from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-14 h-14 rounded-2xl bg-black border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:border-red-500/50 shadow-lg">
<i className="text-white w-7 h-7 group-hover:text-red-500 transition-colors" data-lucide="cpu" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Real-time Processing</h3>
<p className="text-neutral-400 text-sm leading-relaxed translate-x-[-10px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                        Lightning fast data processing that adapts to your workflow instantly. No latency, just pure performance.
                    </p>
</div>

<div className="group relative p-8 rounded-3xl bg-neutral-900/50 border border-white/5 hover:border-red-500/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden reveal-up delay-100">
<div className="absolute inset-0 bg-gradient-to-b from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-14 h-14 rounded-2xl bg-black border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:border-red-500/50 shadow-lg">
<i className="text-white w-7 h-7 group-hover:text-red-500 transition-colors" data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Global Security</h3>
<p className="text-neutral-400 text-sm leading-relaxed translate-x-[-10px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                        Enterprise-grade encryption protecting your assets across 50+ regions worldwide.
                    </p>
</div>

<div className="group relative p-8 rounded-3xl bg-neutral-900/50 border border-white/5 hover:border-red-500/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden reveal-up delay-200">
<div className="absolute inset-0 bg-gradient-to-b from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-14 h-14 rounded-2xl bg-black border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:border-red-500/50 shadow-lg">
<i className="text-white w-7 h-7 group-hover:text-red-500 transition-colors" data-lucide="bar-chart-3" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Predictive Analytics</h3>
<p className="text-neutral-400 text-sm leading-relaxed translate-x-[-10px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                        Forecasting models that help you make decisions before the market even moves.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden bg-neutral-950" id="stats">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-red-600/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">

<div className="space-y-4 reveal-up">
<div className="text-5xl md:text-7xl font-semibold text-white tracking-tighter tabular-nums drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]">
<span className="count-up" data-target="250">0</span>%
                    </div>
<p className="text-sm font-medium text-neutral-500 uppercase tracking-widest">Growth Rate</p>
</div>

<div className="space-y-4 reveal-up delay-100">
<div className="text-5xl md:text-7xl font-semibold text-white tracking-tighter tabular-nums drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]">
<span className="count-up" data-target="50">0</span>k+
                    </div>
<p className="text-sm font-medium text-neutral-500 uppercase tracking-widest">Active Users</p>
</div>

<div className="space-y-4 reveal-up delay-200">
<div className="text-5xl md:text-7xl font-semibold text-white tracking-tighter tabular-nums drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]">
                        $<span className="count-up" data-target="12">0</span>M
                    </div>
<p className="text-sm font-medium text-neutral-500 uppercase tracking-widest">Processed Daily</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 border-y border-white/5 bg-[#080808]" id="testimonials">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-16 text-center reveal-in">Voices from the field</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="reveal-left bg-white/5 border border-white/5 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center overflow-hidden border border-white/10 group-hover:border-red-500 transition-colors">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&amp;h=100&amp;fit=crop"/>
</div>
<div>
<h4 className="text-white font-medium">Sarah Jenkins</h4>
<p className="text-xs text-neutral-500">CTO at TechFlow</p>
</div>
<i className="ml-auto text-red-900/50 w-8 h-8 group-hover:text-red-600 transition-colors" data-lucide="quote"></i>
</div>
<p className="text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">
                        "The most intuitive platform we've used. The dark mode implementation is flawless, and the performance gains were immediate."
                    </p>
</div>

<div className="reveal-left bg-white/5 border border-white/5 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group delay-100">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center overflow-hidden border border-white/10 group-hover:border-red-500 transition-colors">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;h=100&amp;fit=crop"/>
</div>
<div>
<h4 className="text-white font-medium">Marcus Ray</h4>
<p className="text-xs text-neutral-500">Founder of Nexus</p>
</div>
<i className="ml-auto text-red-900/50 w-8 h-8 group-hover:text-red-600 transition-colors" data-lucide="quote"></i>
</div>
<p className="text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">
                        "Redefines what a modern interface should feel like. The animations are subtle yet powerful. Absolutely stunning work."
                    </p>
</div>
</div>
</div>
</section>

<footer className="pt-32 pb-12 bg-black relative">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 mb-24">

<div className="reveal-up">
<h2 className="text-4xl font-semibold text-white tracking-tight mb-2">Get in touch</h2>
<p className="text-neutral-500 mb-8">We usually respond within 2 hours.</p>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-2">
<label className="text-xs text-neutral-500 font-medium ml-1">Name</label>
<input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all placeholder:text-neutral-700" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs text-neutral-500 font-medium ml-1">Email</label>
<input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all placeholder:text-neutral-700" placeholder="john@example.com" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs text-neutral-500 font-medium ml-1">Message</label>
<textarea className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all placeholder:text-neutral-700" placeholder="Tell us about your project..." rows="4"></textarea>
</div>
<button className="w-full bg-white text-black font-semibold rounded-xl py-4 hover:bg-red-600 hover:text-white transition-all duration-300 transform hover:scale-[1.02]" type="button">
                            Send Message
                        </button>
</form>
</div>

<div className="h-full min-h-[400px] rounded-3xl overflow-hidden relative group reveal-in delay-200 border border-white/10">
<iframe allowfullscreen="" className="absolute inset-0 w-full h-full border-0 map-filter transition-transform duration-700 group-hover:scale-110" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1650000000000!5m2!1sen!2s">
</iframe>
<div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-md px-6 py-4 rounded-xl border border-white/10">
<div className="flex items-center gap-2 text-white font-medium mb-1">
<i className="w-4 h-4 text-red-500" data-lucide="map-pin"></i> Headquarters
                        </div>
<p className="text-xs text-neutral-400">123 Innovation Dr, NY</p>
</div>
</div>
</div>

<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 reveal-in">
<div className="flex gap-6 text-sm text-neutral-500">
<a className="hover:text-red-500 transition-colors" href="#">Privacy</a>
<a className="hover:text-red-500 transition-colors" href="#">Terms</a>
<a className="hover:text-red-500 transition-colors" href="#">Cookies</a>
</div>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-red-600 hover:scale-110 transition-all" href="#">
<i className="w-4 h-4" data-lucide="twitter" strokeWidth="1.5"></i>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-red-600 hover:scale-110 transition-all" href="#">
<i className="w-4 h-4" data-lucide="github" strokeWidth="1.5"></i>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-red-600 hover:scale-110 transition-all" href="#">
<i className="w-4 h-4" data-lucide="linkedin" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
