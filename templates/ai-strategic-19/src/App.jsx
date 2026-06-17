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



tailwind.config = {
theme: {
extend: {
colors: {
navy: {
DEFAULT: '#1a2744',
light: '#2a3b5e'
},
paper: '#f8f7f4',
gold: '#c9a227',
subtle: '#e5e5e5'
},
fontFamily: {
sans: ['DM Sans', 'sans-serif'],
serif: ['Source Serif 4', 'serif'],
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
}
}
}
}

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
      

<nav className="fixed w-full top-0 z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-20">

<div className="flex-shrink-0">
<a className="font-sans font-semibold text-lg tracking-tight uppercase text-navy" href="#">
                        Peter Theodoropoulos
                    </a>
</div>

<div className="hidden md:block">
<div className="ml-10 flex items-baseline space-x-8">
<a className="font-sans text-sm font-medium text-slate-600 hover:text-navy transition-colors" href="#methodology">Methodology</a>
<a className="font-sans text-sm font-medium text-slate-600 hover:text-navy transition-colors" href="#expertise">Expertise</a>
<a className="font-sans text-sm font-medium text-slate-600 hover:text-navy transition-colors" href="#about">About</a>
<a className="font-sans text-sm font-medium text-slate-600 hover:text-navy transition-colors" href="#insights">Insights</a>
<a className="font-sans text-sm font-medium text-navy hover:text-gold transition-colors" href="#contact">Contact</a>
</div>
</div>

<div className="md:hidden">
<button className="text-navy p-2" type="button">
<span className="iconify" data-height="24" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center px-6 pt-20 pb-12 lg:px-8 fade-enter">
<div className="max-w-4xl mx-auto text-center">
<h1 className="font-sans text-5xl md:text-7xl font-semibold text-navy tracking-tighter mb-8 leading-[1.1]">
                Most AI implementations fail.
            </h1>
<p className="mt-6 text-xl md:text-2xl text-slate-600 font-light max-w-2xl mx-auto leading-relaxed">
                Not because the technology doesn't work — but because no one asked the right business questions first.
            </p>
<div className="mt-10 text-lg text-slate-500 italic mb-12">
                I'm Peter Theodoropoulos. I help companies turn AI hype into competitive advantage — by starting with your business, not the buzzwords.
            </div>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
<a className="w-full sm:w-auto px-8 py-4 bg-navy text-paper font-sans text-sm font-medium tracking-wide hover:bg-gold hover:text-white transition-colors duration-300 rounded-sm" href="#contact">
                    Book an AI Strategy Call
                </a>
<a className="w-full sm:w-auto px-8 py-4 border border-slate-300 text-navy font-sans text-sm font-medium tracking-wide hover:border-navy transition-colors duration-300 rounded-sm" href="#methodology">
                    See How I Work
                </a>
</div>
<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce opacity-50">
<span className="iconify text-navy" data-icon="lucide:arrow-down" data-width="20"></span>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-8 bg-white border-y border-slate-100">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<h2 className="font-sans text-3xl font-semibold text-navy tracking-tight">The AI Gap</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">

<div className="group">
<div className="mb-4 text-gold">
<span className="iconify" data-icon="lucide:sparkles" data-width="32" strokeWidth="1.5"></span>
</div>
<h3 className="font-sans text-lg font-semibold text-navy mb-3">The Promise</h3>
<p className="text-slate-600 leading-relaxed">
                        "AI will transform your business, automate everything, and 10x your productivity overnight."
                    </p>
</div>

<div className="group">
<div className="mb-4 text-slate-400">
<span className="iconify" data-icon="lucide:alert-circle" data-width="32" strokeWidth="1.5"></span>
</div>
<h3 className="font-sans text-lg font-semibold text-navy mb-3">The Reality</h3>
<p className="text-slate-600 leading-relaxed">
                        Most AI projects stall, overpromise, or solve problems you don't actually have, creating debt instead of value.
                    </p>
</div>

<div className="group">
<div className="mb-4 text-navy">
<span className="iconify" data-icon="lucide:check-circle-2" data-width="32" strokeWidth="1.5"></span>
</div>
<h3 className="font-sans text-lg font-semibold text-navy mb-3">The Missing Piece</h3>
<p className="text-slate-600 leading-relaxed">
                        Someone who understands your business outcomes first — and matches the right AI solutions to real problems.
                    </p>
</div>
</div>
<div className="mt-16 pt-16 border-t border-slate-100 text-center">
<p className="text-xl md:text-2xl font-serif italic text-navy">That's where I come in.</p>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-8 bg-navy text-paper" id="expertise">
<div className="max-w-7xl mx-auto">
<div className="max-w-3xl mb-20">
<h2 className="font-sans text-3xl md:text-4xl font-semibold tracking-tight mb-4">AI Automation That Actually Works</h2>
<p className="text-slate-300 text-lg font-light">I specialize in solutions where speed and responsiveness directly impact revenue.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">

<div className="bg-navy-light/10 border border-white/10 p-8 rounded-sm hover:border-gold/50 transition-colors duration-300">
<div className="mb-6 text-gold">
<span className="iconify" data-icon="lucide:mic" data-width="32" strokeWidth="1.5"></span>
</div>
<h3 className="font-sans text-xl font-medium mb-4 tracking-tight">Voice AI &amp; Conversational Systems</h3>
<p className="text-slate-300 leading-relaxed text-sm">
                        Replace clunky IVR trees and missed calls with intelligent AI that talks to your customers, qualifies leads, and takes orders — 24/7.
                    </p>
</div>

<div className="bg-navy-light/10 border border-white/10 p-8 rounded-sm hover:border-gold/50 transition-colors duration-300">
<div className="mb-6 text-gold">
<span className="iconify" data-icon="lucide:zap" data-width="32" strokeWidth="1.5"></span>
</div>
<h3 className="font-sans text-xl font-medium mb-4 tracking-tight">Speed-to-Lead Automation</h3>
<p className="text-slate-300 leading-relaxed text-sm">
                        In markets where the first response wins, I build systems that engage prospects in seconds, not hours. Because speed wins.
                    </p>
</div>

<div className="bg-navy-light/10 border border-white/10 p-8 rounded-sm hover:border-gold/50 transition-colors duration-300">
<div className="mb-6 text-gold">
<span className="iconify" data-icon="lucide:bar-chart-3" data-width="32" strokeWidth="1.5"></span>
</div>
<h3 className="font-sans text-xl font-medium mb-4 tracking-tight">AI Strategy &amp; Audits</h3>
<p className="text-slate-300 leading-relaxed text-sm">
                        Cut through the hype. I help executive teams identify where AI actually makes sense — and where it doesn't — with clear ROI frameworks.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-8" id="methodology">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<h2 className="font-sans text-sm font-semibold tracking-widest text-slate-500 uppercase mb-2">How I Work</h2>
<h3 className="font-sans text-3xl font-semibold text-navy tracking-tight">The SpeedWins Framework</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">

<div className="hidden md:block absolute top-6 left-0 w-full h-px bg-slate-200 -z-10"></div>

<div className="bg-paper">
<div className="w-12 h-12 bg-white border border-slate-200 flex items-center justify-center font-sans font-semibold text-navy mb-6 text-lg shadow-sm">01</div>
<h4 className="font-sans text-lg font-semibold text-navy mb-3">AUDIT</h4>
<p className="text-slate-600 text-sm leading-relaxed">Where are you losing time, leads, and money? We find the gaps.</p>
</div>

<div className="bg-paper">
<div className="w-12 h-12 bg-white border border-slate-200 flex items-center justify-center font-sans font-semibold text-navy mb-6 text-lg shadow-sm">02</div>
<h4 className="font-sans text-lg font-semibold text-navy mb-3">ARCHITECT</h4>
<p className="text-slate-600 text-sm leading-relaxed">What AI solutions actually fit your business? We design for outcomes, not features.</p>
</div>

<div className="bg-paper">
<div className="w-12 h-12 bg-white border border-slate-200 flex items-center justify-center font-sans font-semibold text-navy mb-6 text-lg shadow-sm">03</div>
<h4 className="font-sans text-lg font-semibold text-navy mb-3">AUTOMATE</h4>
<p className="text-slate-600 text-sm leading-relaxed">Build systems that work without babysitting. Reliable, scalable, integrated.</p>
</div>

<div className="bg-paper">
<div className="w-12 h-12 bg-white border border-slate-200 flex items-center justify-center font-sans font-semibold text-navy mb-6 text-lg shadow-sm">04</div>
<h4 className="font-sans text-lg font-semibold text-navy mb-3">ACCELERATE</h4>
<p className="text-slate-600 text-sm leading-relaxed">Measure, optimize, scale. AI that gets smarter as your business grows.</p>
</div>
</div>
<p className="mt-16 text-center text-slate-500 font-serif italic border-t border-slate-200 pt-8 max-w-2xl mx-auto">
                "Every engagement starts with understanding your business — not selling you technology."
            </p>
</div>
</section>

<section className="py-24 px-6 lg:px-8 bg-white">
<div className="max-w-7xl mx-auto">
<h2 className="font-sans text-3xl font-semibold text-navy tracking-tight mb-12">Proven Results</h2>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
<div className="bg-slate-50 p-10 md:p-12 border border-slate-100 rounded-sm">
<div className="font-sans font-semibold text-gold mb-4 tracking-tight uppercase text-sm">Case Study</div>
<h3 className="font-sans text-2xl md:text-3xl font-semibold text-navy mb-6 tracking-tight">PizzaTalk.ai</h3>
<p className="text-slate-600 text-lg leading-relaxed mb-8 font-serif">
                        Built an AI voice ordering system for pizzerias that handles orders, upsells intelligently, and integrates with existing POS systems — replacing outdated phone systems with 24/7 intelligent conversation.
                    </p>
<div className="flex items-center gap-2 text-navy font-medium font-sans text-sm cursor-pointer group">
<span>Read full case study</span>
<span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</div>
</div>
<div className="space-y-8">
<div className="flex items-start gap-4">
<div className="mt-1 text-gold">
<span className="iconify" data-icon="lucide:check" data-width="24"></span>
</div>
<div>
<h4 className="font-sans text-lg font-medium text-navy">20+ years</h4>
<p className="text-slate-500 text-sm mt-1">in business process optimization</p>
</div>
</div>
<div className="w-full h-px bg-slate-100"></div>
<div className="flex items-start gap-4">
<div className="mt-1 text-gold">
<span className="iconify" data-icon="lucide:check" data-width="24"></span>
</div>
<div>
<h4 className="font-sans text-lg font-medium text-navy">Thousands</h4>
<p className="text-slate-500 text-sm mt-1">of customer interactions handled by Voice AI systems</p>
</div>
</div>
<div className="w-full h-px bg-slate-100"></div>
<div className="flex items-start gap-4">
<div className="mt-1 text-gold">
<span className="iconify" data-icon="lucide:check" data-width="24"></span>
</div>
<div>
<h4 className="font-sans text-lg font-medium text-navy">Diverse Industries</h4>
<p className="text-slate-500 text-sm mt-1">From restaurants to mortgage brokers to home services</p>
</div>
</div>
</div>
</div>
<p className="text-xs text-slate-400 text-center">Case studies and references available upon request.</p>
</div>
</section>

<section className="py-24 px-6 lg:px-8 bg-navy text-paper">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="font-sans text-3xl font-semibold tracking-tight">Is This Right for You?</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="p-8 border-l border-white/20 hover:border-gold transition-colors duration-300">
<h3 className="font-sans text-lg font-semibold text-white mb-4">Executive Teams</h3>
<p className="text-slate-300 text-sm leading-relaxed">
                        You want a strategic partner who sits at the table, not a vendor who disappears after implementation.
                    </p>
</div>
<div className="p-8 border-l border-white/20 hover:border-gold transition-colors duration-300">
<h3 className="font-sans text-lg font-semibold text-white mb-4">Growth-Focused Companies</h3>
<p className="text-slate-300 text-sm leading-relaxed">
                        You compete in markets where response speed directly impacts revenue and customer experience.
                    </p>
</div>
<div className="p-8 border-l border-white/20 hover:border-gold transition-colors duration-300">
<h3 className="font-sans text-lg font-semibold text-white mb-4">AI-Curious Leaders</h3>
<p className="text-slate-300 text-sm leading-relaxed">
                        You've heard the hype but want honest guidance on what AI can — and can't — do for your business.
                    </p>
</div>
</div>
<div className="mt-16 text-center">
<a className="inline-flex items-center justify-center px-8 py-3 border border-white/30 hover:border-white text-white font-sans text-sm font-medium tracking-wide transition-all duration-300" href="#contact">
                    Let's Talk
                </a>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-8" id="about">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
<div className="md:col-span-4">
<div className="aspect-[4/5] bg-slate-200 flex items-center justify-center text-slate-400 font-sans text-sm tracking-widest uppercase rounded-sm">
                        Photo
                    </div>
<div className="mt-6 text-center md:text-left">
<p className="font-sans text-xs text-slate-400 uppercase tracking-widest mb-1">Based in New Jersey</p>
<p className="font-sans text-xs text-slate-400 uppercase tracking-widest">Working Nationwide</p>
</div>
</div>
<div className="md:col-span-8 md:pl-8">
<h2 className="font-sans text-3xl font-semibold text-navy tracking-tight mb-8">About Peter</h2>
<div className="prose prose-lg text-slate-600 font-serif leading-relaxed">
<p className="mb-6">
                            I've spent over two decades helping companies fix broken processes — long before "AI" became the answer to every question.
                        </p>
<p className="mb-6">
                            Today, I bring that same business-first discipline to AI automation. I don't start with what's technically possible. I start with what actually moves the needle for your business.
                        </p>
<p className="mb-6">
                            My specialty is Voice AI and speed-to-lead systems — the invisible infrastructure that makes sure you never miss an opportunity because you were too slow to respond.
                        </p>
<p className="mb-8">
                            I work with executive teams as a strategic partner, not a technical contractor. Because the companies that win aren't the ones with the most AI — they're the ones using it in the right places.
                        </p>
</div>
<div className="mt-8 p-6 bg-white border border-slate-200 inline-block rounded-sm">
<p className="text-xs text-slate-500 font-sans leading-relaxed max-w-sm">
<span className="font-semibold text-navy">Theodoropoulos:</span> Greek for "gift of God." I prefer to think of it as bringing clarity to the chaos of AI hype.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-8 bg-white border-t border-slate-100" id="insights">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div>
<h2 className="font-sans text-3xl font-semibold text-navy tracking-tight mb-2">Perspectives</h2>
<p className="text-slate-500">Thoughts on AI, automation, and what actually works.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">

<article className="group cursor-pointer">
<div className="h-48 bg-slate-100 mb-6 group-hover:bg-slate-200 transition-colors duration-300"></div>
<h3 className="font-sans text-lg font-semibold text-navy mb-2 group-hover:text-gold transition-colors tracking-tight">Why Most AI Projects Fail (And How to Avoid It)</h3>
<p className="text-slate-500 text-sm mb-4 line-clamp-2">The technology is ready, but your data isn't. Here is why the infrastructure matters more than the model.</p>
<span className="text-xs font-semibold text-navy uppercase tracking-widest border-b border-transparent group-hover:border-navy transition-all">Read More</span>
</article>

<article className="group cursor-pointer">
<div className="h-48 bg-slate-100 mb-6 group-hover:bg-slate-200 transition-colors duration-300"></div>
<h3 className="font-sans text-lg font-semibold text-navy mb-2 group-hover:text-gold transition-colors tracking-tight">Speed-to-Lead: The Metric That Matters Most</h3>
<p className="text-slate-500 text-sm mb-4 line-clamp-2">In a digital world, 5 minutes is too late. How instant AI response drives conversion rates.</p>
<span className="text-xs font-semibold text-navy uppercase tracking-widest border-b border-transparent group-hover:border-navy transition-all">Read More</span>
</article>

<article className="group cursor-pointer">
<div className="h-48 bg-slate-100 mb-6 group-hover:bg-slate-200 transition-colors duration-300"></div>
<h3 className="font-sans text-lg font-semibold text-navy mb-2 group-hover:text-gold transition-colors tracking-tight">Voice AI vs. Chatbots: When to Use What</h3>
<p className="text-slate-500 text-sm mb-4 line-clamp-2">Text isn't always best. Understanding the context of customer interaction.</p>
<span className="text-xs font-semibold text-navy uppercase tracking-widest border-b border-transparent group-hover:border-navy transition-all">Read More</span>
</article>
</div>
<div className="max-w-xl mx-auto bg-navy p-8 text-center rounded-sm">
<h4 className="font-sans text-white font-medium mb-4">Subscribe for insights</h4>
<div className="flex gap-2">
<input className="flex-1 bg-white/10 border border-white/20 text-white placeholder-slate-400 px-4 py-2 text-sm focus:outline-none focus:border-gold" placeholder="Email address" type="email"/>
<button className="bg-gold text-white px-6 py-2 font-sans text-sm font-medium hover:bg-white hover:text-navy transition-colors">Submit</button>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-8" id="contact">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-16">
<h2 className="font-sans text-3xl md:text-4xl font-semibold text-navy tracking-tight mb-4">Let's See If AI Automation Makes Sense for Your Business</h2>
<p className="text-slate-600 text-lg font-light max-w-2xl mx-auto">
                    No pitch. No pressure. Just an honest conversation about where you are and where AI might help.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">

<div className="bg-white p-8 border border-slate-200 hover:border-gold/50 hover:shadow-sm transition-all duration-300 rounded-sm">
<div className="mb-4 text-navy">
<span className="iconify" data-icon="lucide:calendar" data-width="28" strokeWidth="1.5"></span>
</div>
<h3 className="font-sans text-xl font-semibold text-navy mb-2 tracking-tight">Book a Strategy Call</h3>
<p className="text-slate-600 text-sm mb-8 h-10">30 minutes to discuss your business challenges and whether AI automation is the right fit.</p>
<a className="block w-full text-center bg-navy text-white py-3 font-sans text-sm font-medium hover:bg-gold transition-colors rounded-sm" href="#">Schedule a Call</a>
</div>

<div className="bg-white p-8 border border-slate-200 hover:border-gold/50 hover:shadow-sm transition-all duration-300 rounded-sm">
<div className="mb-4 text-navy">
<span className="iconify" data-icon="lucide:mic-2" data-width="28" strokeWidth="1.5"></span>
</div>
<h3 className="font-sans text-xl font-semibold text-navy mb-2 tracking-tight">Speaking &amp; Partnerships</h3>
<p className="text-slate-600 text-sm mb-8 h-10">Interested in having me speak at your event or exploring a strategic partnership?</p>
<button className="block w-full text-center border border-navy text-navy py-3 font-sans text-sm font-medium hover:bg-navy hover:text-white transition-colors rounded-sm" onclick="document.getElementById('contact-form').scrollIntoView({behavior: 'smooth'})">Get in Touch</button>
</div>
</div>

<div className="max-w-2xl mx-auto bg-white p-8 md:p-12 border border-slate-100 rounded-sm shadow-sm" id="contact-form">
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Name</label>
<input className="w-full bg-slate-50 border border-slate-200 p-3 text-navy focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy transition-all" type="text"/>
</div>
<div>
<label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Email</label>
<input className="w-full bg-slate-50 border border-slate-200 p-3 text-navy focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy transition-all" type="email"/>
</div>
</div>
<div>
<label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Company</label>
<input className="w-full bg-slate-50 border border-slate-200 p-3 text-navy focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy transition-all" type="text"/>
</div>
<div>
<label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Message</label>
<textarea className="w-full bg-slate-50 border border-slate-200 p-3 text-navy focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy transition-all" rows="4"></textarea>
</div>
<button className="w-full bg-gold text-white py-4 font-sans text-sm font-medium tracking-wide hover:bg-navy transition-colors rounded-sm" type="submit">Send Message</button>
</form>
</div>
</div>
</section>

<footer className="bg-navy text-white pt-16 pb-8 px-6 lg:px-8">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 pb-12 border-b border-white/10">
<div className="mb-8 md:mb-0">
<h3 className="font-sans font-semibold text-xl tracking-tight mb-2">Peter Theodoropoulos</h3>
<p className="text-slate-400 font-serif text-sm">AI Automation | Business Strategy | Voice AI</p>
</div>
<div className="flex gap-6">
<a className="text-slate-400 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:linkedin" data-width="20"></span>
</a>
<a className="text-slate-400 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:twitter" data-width="20"></span>
</a>
<a className="text-slate-400 hover:text-white transition-colors" href="mailto:contact@petertheodoropoulos.com">
<span className="iconify" data-icon="lucide:mail" data-width="20"></span>
</a>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 font-sans tracking-wide">
<div className="flex gap-6 mb-4 md:mb-0">
<a className="hover:text-slate-300" href="#">Home</a>
<a className="hover:text-slate-300" href="#about">About</a>
<a className="hover:text-slate-300" href="#expertise">Services</a>
<a className="hover:text-slate-300" href="#insights">Insights</a>
<a className="hover:text-slate-300" href="#contact">Contact</a>
</div>
<div>
                    © 2025 Peter Theodoropoulos. All rights reserved.
                </div>
</div>
</div>
</footer>

    </>
  );
}
