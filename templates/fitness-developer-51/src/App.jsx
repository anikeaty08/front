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



// Simple Intersection Observer for scroll animations
document.addEventListener('DOMContentLoaded', () => {
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add('active');
}
});
}, { threshold: 0.1 });
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
      

<nav className="fixed w-full z-50 top-0 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-xl font-semibold tracking-tighter uppercase text-white hover:opacity-80 transition-opacity" href="#">
                Uscu
            </a>
<div className="hidden md:flex items-center space-x-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#journey">Journey</a>
<a className="hover:text-white transition-colors" href="#work">Work</a>
<a className="hover:text-white transition-colors" href="#testimonials">Testimonials</a>
</div>
<a className="hidden md:flex items-center justify-center px-4 py-2 text-xs font-medium text-white bg-white/10 border border-white/10 rounded-full hover:bg-white/20 transition-all" href="#subscribe">
                Get Updates
            </a>

<button className="md:hidden text-white">
<span className="iconify" data-height="24" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">

<div className="absolute inset-0 hero-glow pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
<div className="order-2 lg:order-1 flex flex-col items-start space-y-8 reveal">
<div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-[#F97316]/30 bg-[#F97316]/10 text-[#F97316] text-xs font-medium tracking-wide">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F97316] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#F97316]"></span>
</span>
<span>Fitness Tech &amp; Content</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter leading-[1.1] text-white">
                    Build. <br/>
<span className="text-neutral-500">Create.</span> <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500">Inspire.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-lg font-light leading-relaxed">
                    Bridging the gap between high-performance code and human performance. I craft digital products and sculpt physiques.
                </p>
<div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
<a className="w-full sm:w-auto px-8 py-3 bg-[#F97316] text-black font-medium text-sm rounded-full hover:bg-[#ea580c] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 group" href="https://instagram.com/itsusc" target="_blank">
<span className="iconify" data-icon="lucide:instagram" data-inline="false"></span>
<span>Follow @itsusc</span>
<span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
<a className="w-full sm:w-auto px-8 py-3 bg-neutral-900 border border-neutral-800 text-white font-medium text-sm rounded-full hover:bg-neutral-800 transition-all flex items-center justify-center" href="#work">
                        View Portfolio
                    </a>
</div>
</div>
<div className="order-1 lg:order-2 relative reveal delay-100">
<div className="relative w-full aspect-[4/5] md:aspect-square lg:aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 group">
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-60"></div>

<img alt="Uscu Portrait" className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105" src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 z-20">
<p className="text-white text-lg font-medium tracking-tight">Uscu</p>
<p className="text-neutral-400 text-xs uppercase tracking-widest mt-1">Full Stack Dev &amp; Athlete</p>
</div>
</div>
</div>
</div>
</section>

<div className="border-y border-white/5 bg-black/50 backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center reveal">
<p className="text-3xl font-semibold tracking-tight text-white">5+</p>
<p className="text-xs text-neutral-500 uppercase tracking-widest mt-1">Years Coding</p>
</div>
<div className="text-center reveal delay-75">
<p className="text-3xl font-semibold tracking-tight text-white">10k+</p>
<p className="text-xs text-neutral-500 uppercase tracking-widest mt-1">Followers</p>
</div>
<div className="text-center reveal delay-100">
<p className="text-3xl font-semibold tracking-tight text-white">12</p>
<p className="text-xs text-neutral-500 uppercase tracking-widest mt-1">Products Launched</p>
</div>
<div className="text-center reveal delay-150">
<p className="text-3xl font-semibold tracking-tight text-white">100%</p>
<p className="text-xs text-neutral-500 uppercase tracking-widest mt-1">Commitment</p>
</div>
</div>
</div>

<section className="py-24 md:py-32 relative" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
<div className="lg:col-span-5 reveal">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter mb-6">Discipline in Code.<br/>Power in Motion.</h2>
<div className="h-1 w-20 bg-[#F97316] mb-8"></div>
</div>
<div className="lg:col-span-7 space-y-6 text-neutral-400 text-lg leading-relaxed font-light reveal delay-100">
<p>
                        I am <strong className="text-white font-medium">Uscu</strong>. My world revolves around two pillars: technology and fitness. I believe the discipline required to debug complex systems is the same discipline needed to push through the last rep.
                    </p>
<p>
                        As a developer, I specialize in building scalable web applications using modern stacks like React, Node, and Tailwind. As a fitness enthusiast, I share my journey, workouts, and nutrition tips to inspire others to take control of their health.
                    </p>
<p>
                        Whether I'm optimizing algorithms or optimizing hypertrophy, the goal remains the same: <span className="text-white underline decoration-[#F97316] decoration-2 underline-offset-4">Constant Progression.</span>
</p>
<div className="pt-6 flex flex-wrap gap-3">
<span className="px-3 py-1 bg-white/5 rounded-md text-xs border border-white/10">JavaScript</span>
<span className="px-3 py-1 bg-white/5 rounded-md text-xs border border-white/10">React</span>
<span className="px-3 py-1 bg-white/5 rounded-md text-xs border border-white/10">Node.js</span>
<span className="px-3 py-1 bg-white/5 rounded-md text-xs border border-white/10">Hypertrophy</span>
<span className="px-3 py-1 bg-white/5 rounded-md text-xs border border-white/10">Nutrition</span>
<span className="px-3 py-1 bg-white/5 rounded-md text-xs border border-white/10">Content Creation</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900/30 border-y border-white/5" id="journey">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="text-2xl font-semibold tracking-tighter">My Journey</h2>
<p className="text-neutral-500 mt-2 text-sm">The intersection of pixels and weights.</p>
</div>
<div className="relative border-l border-white/10 ml-4 md:ml-0 space-y-12">

<div className="relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-12 reveal">
<div className="md:text-right md:pr-12">
<span className="text-[#F97316] font-mono text-xs mb-1 block">2018</span>
<h3 className="text-lg font-medium text-white">Hello World</h3>
<p className="text-neutral-500 text-sm mt-2">Wrote my first line of JavaScript. Realized the power of creation.</p>
</div>
<div className="absolute left-[-5px] top-1 md:left-1/2 md:-ml-[5px] w-[10px] h-[10px] rounded-full bg-[#F97316] ring-4 ring-black"></div>
<div className="hidden md:block"></div>
</div>

<div className="relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-12 reveal delay-75">
<div className="hidden md:block"></div>
<div className="absolute left-[-5px] top-1 md:left-1/2 md:-ml-[5px] w-[10px] h-[10px] rounded-full bg-neutral-700 ring-4 ring-black"></div>
<div className="md:pl-12">
<span className="text-[#F97316] font-mono text-xs mb-1 block">2019</span>
<h3 className="text-lg font-medium text-white">The Iron Bug</h3>
<p className="text-neutral-500 text-sm mt-2">Started weightlifting seriously. Transformed 130lbs to 170lbs lean mass.</p>
</div>
</div>

<div className="relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-12 reveal delay-100">
<div className="md:text-right md:pr-12">
<span className="text-[#F97316] font-mono text-xs mb-1 block">2021</span>
<h3 className="text-lg font-medium text-white">First Product Launch</h3>
<p className="text-neutral-500 text-sm mt-2">Released a fitness tracking app. 1,000 users in first month.</p>
</div>
<div className="absolute left-[-5px] top-1 md:left-1/2 md:-ml-[5px] w-[10px] h-[10px] rounded-full bg-neutral-700 ring-4 ring-black"></div>
<div className="hidden md:block"></div>
</div>

<div className="relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-12 reveal delay-150">
<div className="hidden md:block"></div>
<div className="absolute left-[-5px] top-1 md:left-1/2 md:-ml-[5px] w-[10px] h-[10px] rounded-full bg-neutral-700 ring-4 ring-black"></div>
<div className="md:pl-12">
<span className="text-[#F97316] font-mono text-xs mb-1 block">Present</span>
<h3 className="text-lg font-medium text-white">Building the Brand</h3>
<p className="text-neutral-500 text-sm mt-2">Full-stack freelancing and growing the fitness community on Instagram.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24" id="work">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 reveal">
<div>
<h2 className="text-3xl font-semibold tracking-tighter text-white">Featured Work</h2>
<p className="text-neutral-500 mt-2">Projects that define my capabilities.</p>
</div>
<a className="text-sm text-white hover:text-[#F97316] transition-colors mt-4 md:mt-0 flex items-center gap-1 group" href="#">
                    View all projects <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right"></span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative bg-neutral-900 rounded-xl overflow-hidden border border-white/5 hover:border-white/20 transition-all reveal">
<div className="aspect-video overflow-hidden bg-neutral-800">
<img alt="FitTrack Pro" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-lg font-medium text-white">FitTrack Pro</h3>
<p className="text-xs text-neutral-500 mt-1">SaaS / React Native</p>
</div>
<div className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center text-white group-hover:bg-[#F97316] group-hover:text-black transition-colors">
<span className="iconify" data-icon="lucide:arrow-up-right" data-width="16"></span>
</div>
</div>
<p className="text-sm text-neutral-400 font-light">A comprehensive workout logging application used by over 5k athletes.</p>
</div>
</div>

<div className="group relative bg-neutral-900 rounded-xl overflow-hidden border border-white/5 hover:border-white/20 transition-all reveal delay-75">
<div className="aspect-video overflow-hidden bg-neutral-800">
<img alt="DevDash" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-lg font-medium text-white">DevDash</h3>
<p className="text-xs text-neutral-500 mt-1">Dashboard / Next.js</p>
</div>
<div className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center text-white group-hover:bg-[#F97316] group-hover:text-black transition-colors">
<span className="iconify" data-icon="lucide:arrow-up-right" data-width="16"></span>
</div>
</div>
<p className="text-sm text-neutral-400 font-light">Productivity dashboard for developers integrating GitHub and Linear APIs.</p>
</div>
</div>

<div className="group relative bg-neutral-900 rounded-xl overflow-hidden border border-white/5 hover:border-white/20 transition-all reveal delay-100">
<div className="aspect-video overflow-hidden bg-neutral-800">
<img alt="Creator Kit" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-lg font-medium text-white">Creator Kit</h3>
<p className="text-xs text-neutral-500 mt-1">E-commerce / Shopify</p>
</div>
<div className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center text-white group-hover:bg-[#F97316] group-hover:text-black transition-colors">
<span className="iconify" data-icon="lucide:arrow-up-right" data-width="16"></span>
</div>
</div>
<p className="text-sm text-neutral-400 font-light">Custom preset packs and digital assets for fitness influencers.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900/30 border-y border-white/5" id="testimonials">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tighter text-center mb-16 reveal">Community Voices</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-8 rounded-2xl bg-[#0A0A0A] border border-white/5 reveal hover:border-white/10 transition-colors">
<div className="text-[#F97316] mb-4">
<span className="iconify" data-icon="lucide:quote" data-width="24"></span>
</div>
<p className="text-neutral-300 font-light text-sm leading-relaxed mb-6">"Uscu's workout app completely changed how I track progress. The interface is cleaner than anything else on the market."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-800 overflow-hidden">
<img alt="User" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<p className="text-sm font-medium text-white">Alex M.</p>
<p className="text-xs text-neutral-500">Software Engineer</p>
</div>
</div>
</div>

<div className="p-8 rounded-2xl bg-[#0A0A0A] border border-white/5 reveal delay-75 hover:border-white/10 transition-colors">
<div className="text-[#F97316] mb-4">
<span className="iconify" data-icon="lucide:quote" data-width="24"></span>
</div>
<p className="text-neutral-300 font-light text-sm leading-relaxed mb-6">"The perfect blend of tech insight and fitness motivation. His Instagram content is top tier."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-800 overflow-hidden">
<img alt="User" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<p className="text-sm font-medium text-white">Sarah K.</p>
<p className="text-xs text-neutral-500">Fitness Coach</p>
</div>
</div>
</div>

<div className="p-8 rounded-2xl bg-[#0A0A0A] border border-white/5 reveal delay-100 hover:border-white/10 transition-colors">
<div className="text-[#F97316] mb-4">
<span className="iconify" data-icon="lucide:quote" data-width="24"></span>
</div>
<p className="text-neutral-300 font-light text-sm leading-relaxed mb-6">"Collaborating with Uscu on a web project was seamless. He understands design systems and performance deeply."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-800 overflow-hidden">
<img alt="User" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<p className="text-sm font-medium text-white">David R.</p>
<p className="text-xs text-neutral-500">Product Designer</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden" id="subscribe">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-800/20 via-black to-black pointer-events-none"></div>
<div className="max-w-2xl mx-auto px-6 text-center relative z-10 reveal">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-4 text-white">Join the Movement</h2>
<p className="text-neutral-400 mb-10 font-light">Get exclusive coding tips, workout routines, and behind-the-scenes content delivered to your inbox.</p>
<form className="flex flex-col sm:flex-row gap-4">
<input className="flex-1 bg-white/5 border border-white/10 rounded-full px-6 py-4 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#F97316] focus:border-transparent transition-all placeholder-neutral-600" placeholder="enter@email.com" type="email"/>
<button className="px-8 py-4 bg-[#F97316] text-black font-medium text-sm rounded-full hover:bg-[#ea580c] transition-colors shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.5)]" type="button">
                    Subscribe
                </button>
</form>
<p className="text-xs text-neutral-600 mt-4">No spam. Unsubscribe at any time.</p>
</div>
</section>

<footer className="border-t border-white/10 bg-black pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center mb-12">
<div className="mb-6 md:mb-0">
<a className="text-2xl font-semibold tracking-tighter uppercase text-white" href="#">Uscu</a>
<p className="text-neutral-500 text-xs mt-2">© 2023 Uscu. All rights reserved.</p>
</div>
<div className="flex gap-6">
<a className="text-neutral-400 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:instagram" data-width="20"></span>
</a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:twitter" data-width="20"></span>
</a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:github" data-width="20"></span>
</a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:linkedin" data-width="20"></span>
</a>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-xs text-neutral-500 border-t border-white/5 pt-8">
<div>
<h4 className="text-white font-medium mb-3">Sitemap</h4>
<ul className="space-y-2">
<li><a className="hover:text-[#F97316]" href="#about">About</a></li>
<li><a className="hover:text-[#F97316]" href="#work">Work</a></li>
<li><a className="hover:text-[#F97316]" href="#journey">Journey</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-3">Legal</h4>
<ul className="space-y-2">
<li><a className="hover:text-[#F97316]" href="#">Privacy</a></li>
<li><a className="hover:text-[#F97316]" href="#">Terms</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-3">Contact</h4>
<ul className="space-y-2">
<li><a className="hover:text-[#F97316]" href="mailto:hello@uscu.com">hello@uscu.com</a></li>
</ul>
</div>
<div className="flex items-end justify-end">
<p>Designed with <span className="text-[#F97316]">Code</span> &amp; <span className="text-[#F97316]">Iron</span></p>
</div>
</div>
</div>
</footer>

    </>
  );
}
