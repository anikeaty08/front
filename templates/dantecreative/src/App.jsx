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
cosmic: {
950: '#030610',
900: '#0B1021',
800: '#141B35',
},
amber: {
350: '#FCD34D',
450: '#F59E0B',
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
}
}
}
}



        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const plan = document.getElementById('interest').value;
            const message = document.getElementById('message').value;
            
            const subject = encodeURIComponent('New Project Inquiry from ' + name);
            const body = encodeURIComponent(
                'Name: ' + name + '\n' +
                'Email: ' + email + '\n' +
                'Interested Plan: ' + plan + '\n\n' +
                'Project Details:\n' + message
            );
            
            window.location.href = 'mailto:dantecreativecs@gmail.com?subject=' + subject + '&body=' + body;
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
      <div className="noise-overlay"></div>

<nav className="fixed top-0 left-0 w-full z-50 bg-[#030610]/80 backdrop-blur-xl border-b border-white/5 supports-[backdrop-filter]:bg-[#030610]/60">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-base font-semibold tracking-tight text-white flex items-center gap-2 group" href="#">
<div className="w-5 h-5 bg-amber-400 rounded-sm flex items-center justify-center group-hover:bg-white transition-colors duration-300 shadow-[0_0_10,191,36,0.5)]">
<span className="text-black text-[10px] font-bold font-serif">D</span>
</div>
<span className="font-sans tracking-wide text-slate-200">DANTE CREATIVE</span>
</a>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-slate-400 uppercase tracking-wide">
<a className="hover:text-amber-300 transition-colors" href="#about">Philosophy</a>
<a className="hover:text-amber-300 transition-colors" href="#services">Solutions</a>
<a className="hover:text-amber-300 transition-colors" href="#work">Portfolio</a>
<a className="px-4 py-2 bg-white text-black rounded-md hover:bg-amber-300 transition-all hover:shadow-[0_0_20px_rgba(251,191,36,0.4)] normal-case tracking-normal font-semibold font-sans" href="#contact">
                    Start Project
                </a>
</div>
<button className="md:hidden text-white p-2 hover:bg-white/10 rounded-md transition-colors">
<span className="iconify" data-height="20" data-icon="lucide:menu" data-width="20" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</nav>

<section className="relative pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden min-h-screen flex items-center">
<div className="absolute inset-0 bg-cosmos -z-20"></div>
<div className="absolute inset-0 stars opacity-40 -z-10 mix-blend-screen"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[120px] animate-pulse -z-10 mix-blend-screen"></div>
<div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-indigo-500/20 rounded-full blur-[80px] -z-10"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<div className="animate-fade-up">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-900/10 border border-amber-500/20 backdrop-blur-md text-xs font-medium text-amber-200 mb-10 hover:border-amber-400/50 transition-colors cursor-default shadow-[0_0_15px_rgba(245,158,11,0.1)]">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
</span>
                    Best web design
                </div>
</div>
<h1 className="animate-fade-up delay-100 text-5xl md:text-7xl lg:text-9xl font-normal tracking-tight text-white leading-[0.9] mb-8 text-chromatic font-serif">
                Chase your <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-white to-amber-200 italic pr-2">Curiosity.</span>
</h1>
<p className="animate-fade-up delay-200 text-lg md:text-xl text-slate-400 max-w-xl mx-auto leading-relaxed mb-12 font-light mix-blend-plus-lighter font-sans">
                We design high-performance digital experiences that pull your audience in. 
                Motion, depth, and precision for brands ready to lead.
            </p>
<div className="animate-fade-up delay-300 flex flex-col sm:flex-row items-center justify-center gap-5">
<a className="group w-full sm:w-auto px-8 py-4 bg-amber-400 text-black text-sm font-bold rounded-lg hover:bg-amber-300 transition-all hover:-translate-y-1 shadow-[0_0_30px_rgba(251,191,36,0.3)] flex items-center justify-center gap-2 font-sans" href="#services">
                    Start Journey
                    <span className="iconify group-hover:translate-y-1 transition-transform duration-300" data-height="16" data-icon="lucide:arrow-down" data-width="16" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="w-full sm:w-auto px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white text-sm font-medium rounded-lg hover:bg-white/10 hover:border-amber-500/30 transition-all flex items-center justify-center font-sans" href="#work">
                    Explore Work
                </a>
</div>
</div>
<div className="absolute bottom-32 left-10 animate-float delay-100 hidden lg:block opacity-60">
<span className="iconify text-amber-200" data-height="32" data-icon="lucide:sparkles" data-width="32" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="absolute top-40 right-20 animate-float delay-300 hidden lg:block opacity-50">
<span className="iconify text-indigo-300" data-height="48" data-icon="lucide:star" data-width="48" style={{strokeWidth: '1'}}></span>
</div>
<div className="absolute top-1/3 left-20 animate-float delay-200 hidden lg:block opacity-30">
<div className="w-1 h-1 bg-white rounded-full shadow-[0_0_10px_white]"></div>
</div>
</section>

<section className="py-32 relative bg-[#030610]" id="services">
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-900/40 to-transparent opacity-50"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="mb-24 md:text-center max-w-2xl mx-auto animate-fade-up">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6 font-serif">Tailored Solutions</h2>
<p className="text-slate-400 font-light text-lg">Choose the velocity that suits your trajectory.</p>
</div>
<div className="grid lg:grid-cols-3 gap-8 items-start">

<div className="glass-card animate-fade-up delay-100 p-8 rounded-2xl transition-all duration-300 group">
<div className="mb-6">
<div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-amber-200 group-hover:bg-amber-400 group-hover:text-black transition-all duration-500">
<span className="iconify" data-height="24" data-icon="lucide:box" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-xl font-medium text-white font-serif">Essential</h3>
<p className="mt-3 text-sm text-slate-400 leading-relaxed">For brands needing a spark. High impact landing pages.</p>
</div>
<div className="py-6 border-t border-white/10">
<div className="flex items-baseline gap-1">
<span className="text-4xl font-medium tracking-tight text-white">$850</span>
<span className="text-sm text-slate-500 font-normal">starting</span>
</div>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-sm text-slate-300">
<span className="iconify text-amber-500 mt-0.5" data-height="16" data-icon="lucide:check" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span>Single Page / Landing Page</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-300">
<span className="iconify text-amber-500 mt-0.5" data-height="16" data-icon="lucide:check" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span>Mobile Responsive Design</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-300">
<span className="iconify text-amber-500 mt-0.5" data-height="16" data-icon="lucide:check" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span>Contact Form Integration</span>
</li>
</ul>
<a className="block w-full py-3 rounded-lg border border-white/10 bg-white/5 text-center text-sm font-medium text-white hover:bg-white hover:text-black hover:shadow-lg transition-all font-sans" href="#contact">Select Essential</a>
</div>

<div className="glass-card animate-fade-up delay-200 p-8 rounded-2xl relative transform md:-translate-y-6 z-10 border-amber-500/30 shadow-[0_0_50px_rgba(245,158,11,0.05)]">
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r via-amber-500 to-transparent"></div>
<div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-amber-400 text-black text-[10px] font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(251,191,36,0.6)]">
                        Most Popular
                    </div>
<div className="mb-6">
<div className="w-12 h-12 rounded-lg bg-amber-950/40 border border-amber-500/20 flex items-center justify-center mb-6 text-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.1)]">
<span className="iconify" data-height="24" data-icon="lucide:layers" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-xl font-medium text-white font-serif">Professional</h3>
<p className="mt-3 text-sm text-slate-400 leading-relaxed">Complete corporate presence with dynamic CMS capabilities.</p>
</div>
<div className="py-6 border-t border-white/10">
<div className="flex items-baseline gap-1">
<span className="text-4xl font-medium tracking-tight text-white">$2,400</span>
<span className="text-sm text-slate-500 font-normal">starting</span>
</div>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-sm text-white font-medium">
<span className="iconify text-amber-400 mt-0.5" data-height="16" data-icon="lucide:check-circle-2" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span>Up to 7 Custom Pages</span>
</li>
<li className="flex items-start gap-3 text-sm text-white font-medium">
<span className="iconify text-amber-400 mt-0.5" data-height="16" data-icon="lucide:check-circle-2" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span>CMS &amp; Blog Integration</span>
</li>
<li className="flex items-start gap-3 text-sm text-white font-medium">
<span className="iconify text-amber-400 mt-0.5" data-height="16" data-icon="lucide:check-circle-2" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span>Advanced SEO &amp; Analytics</span>
</li>
</ul>
<a className="block w-full py-3 rounded-lg bg-amber-400 text-center text-sm font-bold text-black hover:bg-amber-300 hover:shadow-[0_0_30px_rgba(251,191,36,0.4)] transition-all font-sans" href="#contact">Select Professional</a>
</div>

<div className="glass-card animate-fade-up delay-300 p-8 rounded-2xl transition-all duration-300 group">-6"&gt;
                        <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-500">
<span className="iconify" data-height="24" data-icon="lucide:zap" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-xl font-medium text-white font-serif">Advanced</h3>
<p className="mt-3 text-sm text-slate-400 leading-relaxed">Custom functionality, 3D experiences, and web applications.</p>
</div>
<div className="py-6 border-t border-white/10">
<div className="flex items-baseline gap-1">
<span className="text-4xl font-medium tracking-tight text-white">$5,000+</span>
<span className="text-sm text-slate-500 font-normal">custom quote</span>
</div>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-sm text-slate-300">
<span className="iconify text-amber-500 mt-0.5" data-height="16" data-icon="lucide:check" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span>E-commerce (Shopify/Stripe)</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-300">
<span className="iconify text-amber-500 mt-0.5" data-height="16" data-icon="lucide:check" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span>Membership Portals</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-300">
<span className="iconify text-amber-500 mt-0.5" data-height="16" data-icon="lucide:check" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span>Interactive WebGL / 3D</span>
</li>
</ul>
<a className="block w-full py-3 rounded-lg border border-white/10 bg-white/5 text-center text-sm font-medium text-white hover:bg-white hover:text-black hover:shadow-lg transition-all font-sans" href="#contact">Contact for Custom</a>
</div>
</div>

</section>

<section className="py-24 bg-[#050914] relative overflow-hidden" id="about">
<div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-indigo-900/10 to-transparent pointer-events-none"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-xs font-semibold tracking-[0.2em] text-amber-400 uppercase mb-4">The Philosophy</h2>
<h3 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-8 leading-tight font-serif">
                        Agency.<br/>
<span className="text-slate-500">Zero friction.</span>
</h3>
<p className="text-slate-400 leading-relaxed mb-8 font-light text-lg">
                        We strip away the unnecessary meetings and focus on what moves the needle. 
                        Direct communication, rapid iteration, and a relentless focus on ROI. 
                        <span className="text-amber-200">Be curious, ask questions.</span>
</p>
<div className="flex items-center gap-4 pt-4">
<div className="flex -space-x-3">
<div className="w-12 h-12 rounded-full bg-slate-800 border-2 border-[#050914] overflow-hidden flex items-center justify-center">
<span className="iconify text-slate-400" data-height="20" data-icon="lucide:user" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="w-12 h-12 rounded-full bg-amber-950 050914] flex items-center justify-center text-xs font-bold text-amber-400">
                                DC
                             </div>
</div>
<div>
<p className="text-sm font-medium text-white">Dante Creative Team</p>
<p className="text-xs text-slate-500">Based in Brickell, Miami</p>
</div>
</div>
</div>
<div className="grid grid-cols-1 gap-4">
<div className="glass-card p-6 rounded-xl hover:border-amber-500/30 transition-all duration-300">
<div className="flex gap-4">
<div className="w-12 h-12 bg-white/5 rounded-lg flex-shrink-0 flex items-center justify-center text-amber-400">
<span className="iconify" data-height="24" data-icon="lucide:clock" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<h4 className="text-lg font-medium text-white mb-1">Rapid Delivery</h4>
<p className="text-sm text-slate-400 leading-relaxed">Turnaround times measured in days, not months. We match your speed.</p>
</div>
</div>
</div>
<div className="glass-card p-6 rounded-xl hover:border-amber-500/30 transition-all duration-300">
<div className="flex gap-4">
<div className="w-12 h-12 bg-white/5 rounded-lg flex-shrink-0 flex items-center justify-center text-amber-400">
<span className="iconify" data-height="24" data-icon="lucide:monitor-smartphone" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<h4 className="text-lg font-medium text-white mb-1">Pixel Perfect</h4>
<p className="text-sm text-slate-400 leading-relaxed">Responsive designs that look flawless on 4k monitors and mobile screens.</p>
</div>
</div>
</div>
<div className="glass-card p-6 rounded-xl hover:border-amber-500/30 transition-all duration-300">
<div className="flex gap-4">
<div className="w-12 h-12 bg-white/5 rounded-lg flex-shrink-0 flex items-center justify-center text-amber-400">
<span className="iconify" data-height="24" data-icon="lucide:settings-2" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<h4 className="text-lg font-medium text-white mb-1">Managed Growth</h4>
<p className="text-sm text-slate-400 leading-relaxed">Optional monthly maintenance plans so you never have to worry about updates.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#030610] border-t border-white/5" id="work">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-3 font-serif">Selected Work</h2>
<p className="text-slate-500 font-light text-lg">Crafted for excellence in the digital realm.</p>
</div>
<div className="flex gap-2">
<a className="text-sm font-medium text-white flex items-center gap-2 hover:text-amber-400 transition-colors font-sans" href="#">
                        View all projects <span className="iconify" data-height="16" data-icon="lucide:arrow-right" data-width="16" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
</div>
<div className="grid md:grid-cols-2 gap-10">

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-xl bg-slate-900 border border-white/10 aspect-[16/10] mb-6">
<div className="absolute inset-0 bg-gradient-to-tr from-amber-900/20 to-transparent"></div>
<div className="absolute inset-6 bg-[#0a0f1e] rounded-lg shadow-2xl border border-white/5 flex flex-col overflow-hidden transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03] group-hover:-translate-y-2">
<div className="h-6 border-b border-white/5 flex items-center px-3 gap-1.5 bg-white/5">
<div className="w-1.5 h-1.5 rounded-full bg-slate-600"></div>
<div className="w-1.5 h-1.5 rounded-full bg-slate-600"></div>
</div>
<div className="flex-1 flex items-center justify-center relative">
<div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<span className="text-slate-600 font-semibold tracking-[0.3em] text-xs uppercase group-hover:text-amber-400 transition-colors">Legal Firm</span>
</div>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl font-semibold text-white group-hover:text-amber-400 transition-colors">Brickell Law Partners</h3>
<p className="text-sm text-slate-500 mt-1">Website Redesign &amp; Brand Identity</p>
</div>
<div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-amber-400 group-hover:border-amber-400 transition-all">
<span className="iconify text-slate-400 group-hover:text-black transition-colors" data-height="18" data-icon="lucide:arrow-up-right" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-xl bg-slate-900 border border-white/10 aspect-[16/10] mb-6">
<div className="absolute inset-0 bg-gradient-to-bl from-indigo-900/20 to-transparent"></div>
<div className="absolute inset-6 bg-[#0a0f1e] rounded-lg shadow-2xl border border-white/5 flex flex-col overflow-hidden transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03] group-hover:-translate-y-2">
<div className="h-6 border-b border-white/5 flex items-center px-3 gap-1.5 bg-white/5">
<div className="w-1.5 h-1.5 rounded-full bg-slate-600"></div>
<div className="w-1.5 h-1.5 rounded-full bg-slate-600"></div>
</div>
<div className="flex-1 flex items-center justify-center relative">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<span className="text-slate-600 font-semibold tracking-[0.3em] text-xs uppercase group-hover:text-indigo-400 transition-colors">Aesthetic Medspa</span>
</div>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl font-semibold text-white group-hover:text-indigo-400 transition-colors">Aura Medspa</h3>
<p className="text-sm text-slate-500 mt-1">Booking System &amp; Marketing Site</p>
</div>
<div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-indigo-400 group-hover:border-indigo-400 transition-all">
<span className="iconify text-slate-400 group-hover:text-black transition-colors" data-height="18" data-icon="lucide:arrow-up-right" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
</div>
</div>

<div className="mt-32 relative rounded-3xl bg-slate-900/40 border border-white/10 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-950/40 to-slate-950/80"></div>
<div className="absolute top-0 right-0 p-12 opacity-5">
<span className="iconify text-white" data-height="120" data-icon="lucide:quote" data-width="120" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="relative p-12 md:p-20 text-center max-w-4xl mx-auto">
<div className="mb-8 flex justify-center text-amber-400 gap-1">
<span className="iconify" data-height="20" data-icon="lucide:star" data-width="20" style={{fill: 'currentColor', stroke: 'none'}}></span>
<span className="iconify" data-height="20" data-icon="lucide:star" data-width="20" style={{fill: 'currentColor', stroke: 'none'}}></span>
<span className="iconify" data-height="20" data-icon="lucide:star" data-width="20" style={{fill: 'currentColor', stroke: 'none'}}></span>
<span className="iconify" data-height="20" data-icon="lucide:star" data-width="20" style={{fill: 'currentColor', stroke: 'none'}}></span>
<span className="iconify" data-height="20" data-icon="lucide:star" data-width="20" style={{fill: 'currentColor', stroke: 'none'}}></span>
</div>
<blockquote className="text-3xl md:text-4xl font-medium text-white leading-snug tracking-tight mb-10 font-serif italic">
                        "Dante Creative transformed our digital presence. The new site isn't just beautiful—it's a portal that captures attention."
                    </blockquote>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#030610] border-t border-white/5 relative" id="contact">
<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-amber-900/10 to-transparent pointer-events-none"></div>
<div className="max-w-xl mx-auto px-6 relative z-10">
<div className="text-center mb-12">
<h2 className="text-4xl font-medium tracking-tight text-white mb-4 font-serif">Start Your Project</h2>
<p className="text-slate-400 font-light">Tell us about your goals. We chase curiosity with you.</p>
</div>
<form className="space-y-6 bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-xl hover:border-amber-500/20 transition-colors" id="contactForm">
<div className="grid grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="text-xs font-bold text-slate-500 uppercase tracking-wider" htmlFor="name">Name</label>
<input className="w-full bg-black/40-white/10 rounded-md px-4 py-3 text-sm text-white focus:ring-1 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all placeholder:text-slate-600 font-sans" id="name" name="name" placeholder="John Doe" required="" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-bold text-slate-500 uppercase tracking-wider" htmlFor="email">Email</label>
<input className="w-full bg-black/40 border border-white/10 rounded-md px-4 py-3 text-sm text-white focus:ring-1 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all placeholder:text-slate-600 font-sans" id="email" name="email" placeholder="john@company.com" required="" type="email"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-bold text-slate-500 uppercase tracking-wider" htmlFor="interest">Interested Plan</label>
<div className="relative">
<select className="w-full bg-black/40 border border-white/10 rounded-md px-4 py-3 text-sm text-white focus:ring-1 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all appearance-none cursor-pointer font-sans" id="interest" name="plan">
<option className="bg-slate-900">Essential (Landing Page)</option>
<option className="bg-slate-900" selected="">Professional (Multi-page CMS)</option>
<option className="bg-slate-900">Advanced (Custom/App)</option>
<option className="bg-slate-900">Other / Unsure</option>
</select>
<span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
<span className="iconify" data-height="16" data-icon="lucide:chevron-down" data-width="16" style={{strokeWidth: '1.5'}}></span>
</span>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-bold text-slate-500 uppercase tracking-wider" htmlFor="message">Project Details</label>
<textarea className="w-full bg-black/40 border border-white/10 rounded-md px-4 py-3 text-sm text-white focus:ring-1 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all placeholder:text-slate-600 resize-none font-sans" id="message" name="details" placeholder="Tell us about your business and what you need..." rows="4"></textarea>
</div>
<div className="pt-4">
<button className="group w-full bg-white text-black font-bold py-4 rounded-md hover:bg-amber-400 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(251,191,36,0.4)] font-sans" type="submit">
                        Send Request
                        <span "="" className="iconify group-hover:translate-x-1 transition-transform" data-height="18" data-icon="lucide:arrow-right" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</form>
<p className="text-center text-xs text-slate-500 mt-8">Prefer email? <a className="text-amber-400 hover:text-amber-300 underline" href="mailto:dantecreativecs@gmail.com">dantecreativecs@gmail.com</a></p>
</div>
</section>

<footer className="border-t border-white/5 py-12 bg-black">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left">
<p className="text-sm font-semibold tracking-tight text-white flex items-center gap-2 justify-center md:justify-start">
<span className="w-4 h-4 bg-amber-500 rounded-[2px]"></span>
                    DANTE CREATIVE
                </p>
<p className="text-xs text-slate-500 mt-2">© 2024 Dante Creative. Crafted in Miami.</p>
</div>
<div className="flex gap-6 text-slate-500">
<a className="hover:text-white hover:scale-110 transition-all duration-200" href="#">
<span className="iconify" data-height="20" data-icon="lucide:instagram" data-width="20" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="hover:text-white hover:scale-110 transition-all duration-200" href="#">
<span className="iconify" data-height="20" data-icon="lucide:twitter" data-width="20" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="hover:text-white hover:scale-110 transition-all duration-200" href="#">
<span className="iconify" data-height="20" data-icon="lucide:linkedin" data-width="20" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
<div className="flex gap-6 text-xs text-slate-500 font-medium">
<a hrefamber-400="" transition-colors"="">Privacy Policy</a>
<a className="hover:text-amber-400 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</footer>


    </>
  );
}
