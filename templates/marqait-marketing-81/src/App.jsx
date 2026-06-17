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
primary: '#3B82F6',
dark: '#02040a',
},
animation: {
'spin-slow': 'spin 12s linear infinite',
}
}
}
}



        // Initialize Lucide Icons
        lucide.createIcons();

        // Initialize AOS with "Starcloud" like settings (slower, smoother)
        AOS.init({
            duration: 1000,       // Slower animation duration
            once: true,           // Only animate once
            offset: 50,           // Trigger sooner
            easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)', // Bouncy/Smooth effect
            anchorPlacement: 'top-bottom',
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
      

<nav className="fixed top-0 w-full z-50 pt-6 px-4" data-aos="fade-down" data-aos-duration="1000">
<div className="max-w-6xl mx-auto glass-nav rounded-full px-6 py-3 flex items-center justify-between shadow-2xl shadow-black/20 transition-all duration-300">

<div className="flex items-center gap-2">
<span className="text-white text-xl font-semibold tracking-tight uppercase">Marqait</span>
</div>

<div className="hidden md:flex items-center gap-1 bg-white/5 rounded-full p-1 border border-white/10">
<a className="px-5 py-1.5 rounded-full bg-blue-600 text-white text-sm font-medium shadow-lg shadow-blue-500/20 hover:scale-105 transition-transform duration-300" href="#">Home</a>
<a className="px-5 py-1.5 rounded-full text-slate-300 text-sm font-medium hover:text-white transition-colors" href="#">Services</a>
<a className="px-5 py-1.5 rounded-full text-slate-300 text-sm font-medium hover:text-white transition-colors" href="#">Institution</a>
<a className="px-5 py-1.5 rounded-full text-slate-300 text-sm font-medium hover:text-white transition-colors" href="#">Course</a>
<a className="px-5 py-1.5 rounded-full text-slate-300 text-sm font-medium hover:text-white transition-colors" href="#">Why Marq?</a>
<a className="px-5 py-1.5 rounded-full text-slate-300 text-sm font-medium hover:text-white transition-colors" href="#">Blogs</a>
</div>

<button className="bg-white text-slate-900 px-5 py-2 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-slate-200 transition-colors group">
<i className="w-4 h-4 group-hover:rotate-12 transition-transform" data-lucide="mail" strokeWidth="1.5"></i>
                Get In Touch
            </button>
</div>
</nav>

<section className="relative bg-[#02040a] text-white pt-40 pb-20 overflow-hidden min-h-screen flex flex-col justify-center">

<div className="absolute inset-0 bg-grid-animate opacity-20 pointer-events-none"></div>

<div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] -z-10 animate-glow"></div>
<div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] -z-10"></div>
<div className="max-w-7xl mx-auto px-6 text-center z-10 relative">
<div data-aos="fade-up" data-aos-duration="1000">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-medium mb-8 backdrop-blur-md">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                    Now with AI Auto-Posting v2.0
                </div>
</div>
<h1 className="text-5xl md:text-8xl font-medium tracking-tight mb-8 leading-[1.1]" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1200">
                Marketing Automation<br/>
<span className="font-serif-italic text-shimmer">Built to Save Your Time.</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1200">
                Marqait elevates your marketing with AI — aligning your strategy, streamlining your workflows, and automating every step from creation to posting.
            </p>
<div className="flex flex-col sm:flex-row justify-center gap-4 mb-20" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200">
<button className="group relative px-8 py-3.5 bg-white text-slate-900 rounded-full font-semibold overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
<span className="relative flex items-center gap-2">
                        Start for free
                        <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</span>
</button>
<button className="px-8 py-3.5 rounded-full text-white border border-white/10 hover:bg-white/5 transition-colors font-medium backdrop-blur-sm">
                    View Demo
                </button>
</div>

<div className="relative max-w-6xl mx-auto perspective-1000" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1500">
<div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
<div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0a0a0a] animate-float">
<img alt="Dashboard Preview" className="w-full object-cover h-[500px] md:h-[700px] opacity-90 hover:scale-105 transition-transform duration-[2s]" src="https://images.unsplash.com/photo-1590650046871-92c887180603?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-t from-[#02040a] via-transparent to-transparent pointer-events-none"></div>

<div className="absolute bottom-10 left-10 hidden md:block p-4 glass-card rounded-xl animate-float" style={{animationDelay: '1s'}}>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
<i className="w-5 h-5" data-lucide="check"></i>
</div>
<div>
<p className="text-xs text-slate-400 uppercase tracking-wide">Status</p>
<p className="text-sm font-semibold text-white">Posts Scheduled</p>
</div>
</div>
</div>
<div className="absolute top-20 right-10 hidden md:block p-4 glass-card rounded-xl animate-float" style={{animationDelay: '2s'}}>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
<i className="w-5 h-5" data-lucide="bar-chart"></i>
</div>
<div>
<p className="text-xs text-slate-400 uppercase tracking-wide">Growth</p>
<p className="text-sm font-semibold text-white">+124% Engagement</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
<div data-aos="fade-right" data-aos-duration="1000">
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-blue-200 bg-blue-50 text-blue-600 text-xs font-semibold uppercase tracking-wide mb-6">
                    Services <i className="w-3 h-3" data-lucide="chevron-right" strokeWidth="1.5"></i>
</div>
<h2 className="text-4xl md:text-6xl font-medium tracking-tight text-slate-900 mb-8 leading-[1.1]">
                    Best <span className="text-blue-600 font-serif-italic">Marketing Automation</span> that automates the way you do.
                </h2>
<p className="text-lg text-slate-500 mb-6 leading-relaxed">
                    Marqait is the best platform for marketing automation — redefining how businesses plan, create, and scale their marketing.
                </p>
<p className="text-lg text-slate-500 leading-relaxed">
                    Powered by intelligent AI marketing automation workflows, tools &amp; software for strategy, content creation, and posting, Marqait automates every step.
                </p>
</div>
<div className="relative group" data-aos="fade-left" data-aos-duration="1000">
<div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-[2rem] blur-xl opacity-50 group-hover:opacity-75 transition duration-500"></div>
<div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/10 transform transition-transform duration-700 group-hover:scale-[1.02]">
<img alt="AI Robot Arm" className="w-full h-auto object-cover rounded-2xl" src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&amp;w=2006&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50/50">
<div className="max-w-6xl mx-auto px-6 space-y-40">

<div className="flex flex-col md:flex-row items-center gap-20 group">
<div className="w-full md:w-1/2 flex justify-center perspective-1000" data-aos="fade-up" data-aos-delay="100">
<div className="relative transform transition-transform duration-700 group-hover:rotate-y-6 group-hover:scale-105">
<img alt="Laptop" className="relative z-10 w-full max-w-md drop-shadow-2xl rounded-xl" src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&amp;w=2071&amp;auto=format&amp;fit=crop"/>
<div className="absolute -z-10 -bottom-10 -right-10 w-32 h-32 bg-blue-200 rounded-full blur-3xl opacity-60"></div>
</div>
</div>
<div className="w-full md:w-1/2 relative" data-aos="fade-up" data-aos-delay="200">
<span className="absolute -top-24 -right-10 text-[10rem] md:text-[14rem] font-bold text-slate-100 -z-10 leading-none select-none transition-transform duration-700 group-hover:translate-x-10">1</span>
<h3 className="text-3xl md:text-5xl font-medium tracking-tight text-slate-900 mb-6">
                        Automate <span className="text-blue-600 font-serif-italic">Content Calendar</span> with AI.
                    </h3>
<p className="text-lg text-slate-500 leading-relaxed mb-6">
                        Marqait auto-generates a complete content calendar tailored to your business, audience, and industry trends. No brainstorming. No blank screens.
                    </p>
</div>
</div>

<div className="flex flex-col md:flex-row-reverse items-center gap-20 group">
<div className="w-full md:w-1/2 flex justify-center perspective-1000" data-aos="fade-up" data-aos-delay="100">
<div className="relative transform transition-transform duration-700 group-hover:-rotate-y-6 group-hover:scale-105">
<img alt="iPad" className="relative z-10 w-full max-w-md drop-shadow-2xl rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute -z-10 -bottom-10 -left-10 w-32 h-32 bg-purple-200 rounded-full blur-3xl opacity-60"></div>
</div>
</div>
<div className="w-full md:w-1/2 relative" data-aos="fade-up" data-aos-delay="200">
<span className="absolute -top-24 -left-10 text-[10rem] md:text-[14rem] font-bold text-slate-100 -z-10 leading-none select-none transition-transform duration-700 group-hover:-translate-x-10">2</span>
<h3 className="text-3xl md:text-5xl font-medium tracking-tight text-slate-900 mb-6">
                        Design <span className="text-blue-600 font-serif-italic">High-Impact Creatives</span> in Seconds.
                    </h3>
<p className="text-lg text-slate-500 leading-relaxed">
                        Marqait generates studio-quality images, carousels, and short-form social creatives instantly. Every asset is tailored to your brand style.
                    </p>
</div>
</div>

<div className="flex flex-col md:flex-row items-center gap-20 group">
<div className="w-full md:w-1/2 flex justify-center perspective-1000" data-aos="fade-up" data-aos-delay="100">
<div className="relative transform transition-transform duration-700 group-hover:rotate-y-6 group-hover:scale-105">
<img alt="Laptop Code" className="relative z-10 w-full max-w-md drop-shadow-2xl rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute -z-10 -bottom-10 -right-10 w-32 h-32 bg-cyan-200 rounded-full blur-3xl opacity-60"></div>
</div>
</div>
<div className="w-full md:w-1/2 relative" data-aos="fade-up" data-aos-delay="200">
<span className="absolute -top-24 -right-10 text-[10rem] md:text-[14rem] font-bold text-slate-100 -z-10 leading-none select-none transition-transform duration-700 group-hover:translate-x-10">3</span>
<h3 className="text-3xl md:text-5xl font-medium tracking-tight text-slate-900 mb-6">
                        Stay Consistent with <br/><span className="text-blue-600 font-serif-italic">AI Auto Posting</span>.
                    </h3>
<p className="text-lg text-slate-500 leading-relaxed">
                        Marqait automatically schedules and posts your content across Instagram, Facebook, Twitter (X), and LinkedIn in real-time.
                    </p>
</div>
</div>

<div className="flex flex-col md:flex-row-reverse items-center gap-20 group">
<div className="w-full md:w-1/2 flex justify-center perspective-1000" data-aos="fade-up" data-aos-delay="100">
<div className="relative transform transition-transform duration-700 group-hover:-rotate-y-6 group-hover:scale-105">
<img alt="Mobile Dashboard" className="relative z-10 w-full max-w-md drop-shadow-2xl rounded-xl" src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute -z-10 -bottom-10 -left-10 w-32 h-32 bg-blue-200 rounded-full blur-3xl opacity-60"></div>
</div>
</div>
<div className="w-full md:w-1/2 relative" data-aos="fade-up" data-aos-delay="200">
<span className="absolute -top-24 -left-10 text-[10rem] md:text-[14rem] font-bold text-slate-100 -z-10 leading-none select-none transition-transform duration-700 group-hover:-translate-x-10">4</span>
<h3 className="text-3xl md:text-5xl font-medium tracking-tight text-slate-900 mb-6">
                        Run Your <span className="text-blue-600 font-serif-italic">Entire Marketing</span> on Autopilot.
                    </h3>
<p className="text-lg text-slate-500 leading-relaxed mb-6">
                        Approve your strategy and content for the month, and let AI take over the rest. Marqait keeps your marketing flowing.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20" data-aos="fade-up">
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-blue-200 bg-white text-blue-600 text-xs font-semibold uppercase tracking-wide mb-4 hover:bg-blue-50 transition-colors cursor-pointer">
                    Our Solutions <i className="w-3 h-3" data-lucide="chevron-right" strokeWidth="1.5"></i>
</div>
<h2 className="text-4xl md:text-6xl font-medium tracking-tight text-slate-900">
                    Marketing Automation <span className="text-blue-600 font-serif-italic">Solutions</span>
</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-slate-50 rounded-2xl p-8 hover:bg-white hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 border border-transparent hover:border-slate-100 group transform hover:-translate-y-2" data-aos="fade-up" data-aos-delay="0">
<div className="bg-blue-100/50 rounded-xl w-14 h-14 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
<i className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" data-lucide="bar-chart-2" strokeWidth="1.5"></i>
</div>
<h4 className="text-xl font-semibold text-slate-900 mb-3">Strategy Automation</h4>
<p className="text-slate-500 text-sm leading-relaxed">Marqait generates a complete monthly marketing strategy tailored to your industry, audience, and goals.</p>
</div>

<div className="bg-slate-50 rounded-2xl p-8 hover:bg-white hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 border border-transparent hover:border-slate-100 group transform hover:-translate-y-2" data-aos="fade-up" data-aos-delay="100">
<div className="bg-blue-100/50 rounded-xl w-14 h-14 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
<i className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" data-lucide="image" strokeWidth="1.5"></i>
</div>
<h4 className="text-xl font-semibold text-slate-900 mb-3">Content Creation</h4>
<p className="text-slate-500 text-sm leading-relaxed">Captions, images, carousels, and short videos are automatically created to match your brand voice.</p>
</div>

<div className="bg-slate-50 rounded-2xl p-8 hover:bg-white hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 border border-transparent hover:border-slate-100 group transform hover:-translate-y-2" data-aos="fade-up" data-aos-delay="200">
<div className="bg-blue-100/50 rounded-xl w-14 h-14 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
<i className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" data-lucide="send" strokeWidth="1.5"></i>
</div>
<h4 className="text-xl font-semibold text-slate-900 mb-3">Auto Posting</h4>
<p className="text-slate-500 text-sm leading-relaxed">Instagram, Facebook, LinkedIn, and Twitter (X) — all scheduled and posted automatically.</p>
</div>

<div className="bg-slate-50 rounded-2xl p-8 hover:bg-white hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 border border-transparent hover:border-slate-100 group transform hover:-translate-y-2" data-aos="fade-up" data-aos-delay="300">
<div className="bg-blue-100/50 rounded-xl w-14 h-14 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
<i className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" data-lucide="git-merge" strokeWidth="1.5"></i>
</div>
<h4 className="text-xl font-semibold text-slate-900 mb-3">Workflow Automation</h4>
<p className="text-slate-500 text-sm leading-relaxed">Every step from planning, creation, approvals, scheduling. Marqait AI does all for you.</p>
</div>

<div className="bg-slate-50 rounded-2xl p-8 hover:bg-white hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 border border-transparent hover:border-slate-100 group transform hover:-translate-y-2" data-aos="fade-up" data-aos-delay="400">
<div className="bg-blue-100/50 rounded-xl w-14 h-14 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
<i className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" data-lucide="layout-template" strokeWidth="1.5"></i>
</div>
<h4 className="text-xl font-semibold text-slate-900 mb-3">Brand Control</h4>
<p className="text-slate-500 text-sm leading-relaxed">Marqait applies your brand colors, fonts, and style across all creatives — ensuring consistency.</p>
</div>

<div className="bg-slate-50 rounded-2xl p-8 hover:bg-white hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 border border-transparent hover:border-slate-100 group transform hover:-translate-y-2" data-aos="fade-up" data-aos-delay="500">
<div className="bg-blue-100/50 rounded-xl w-14 h-14 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
<i className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" data-lucide="pie-chart" strokeWidth="1.5"></i>
</div>
<h4 className="text-xl font-semibold text-slate-900 mb-3">Analytics</h4>
<p className="text-slate-500 text-sm leading-relaxed">Our AI-powered marketing automation track performance metrics from all platforms come together.</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#02040a] text-white relative overflow-hidden">

<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
<div className="absolute right-0 top-0 w-2/3 h-full bg-gradient-to-l from-blue-900/20 to-transparent pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-blue-900/20 to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col lg:flex-row items-end gap-16">
<div className="lg:w-1/2 mb-10 lg:mb-0" data-aos="fade-right" data-aos-duration="1000">
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-slate-700 bg-slate-800/50 text-white text-xs font-semibold uppercase tracking-wide mb-6 backdrop-blur-md">
                        Business Owner <i className="w-3 h-3" data-lucide="chevron-right" strokeWidth="1.5"></i>
</div>
<h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-8">
                        Perfect for Busy<br/>
                        Business <span className="text-blue-500 font-serif-italic">Owners</span>
</h2>
<p className="text-lg text-slate-400 mb-10 max-w-lg leading-relaxed">
                        Sarah runs a small bakery with two locations. She manages a team, handles customers, and spends less than 15 minutes a week on marketing. With Marqait AI, she just reviews her upcoming posts once — and the rest happens on autopilot.
                    </p>

<div className="grid grid-cols-3 gap-8 mb-10 border-t border-slate-800/50 pt-8">
<div className="group">
<div className="text-4xl font-light text-white mb-1 group-hover:text-blue-400 transition-colors">10</div>
<div className="text-xs text-slate-500 uppercase tracking-wide">Minutes weekly<br/>approval</div>
</div>
<div className="group">
<div className="text-4xl font-light text-white mb-1 group-hover:text-blue-400 transition-colors">4<span className="text-2xl">x</span></div>
<div className="text-xs text-slate-500 uppercase tracking-wide">More consistent<br/>posting</div>
</div>
<div className="group">
<div className="text-4xl font-light text-white mb-1 group-hover:text-blue-400 transition-colors">0</div>
<div className="text-xs text-slate-500 uppercase tracking-wide">Manual<br/>scheduling</div>
</div>
</div>
<button className="bg-white text-slate-950 px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-blue-50 transition-colors group">
                        Get It Started <i className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" data-lucide="arrow-up-right" strokeWidth="2"></i>
</button>
</div>
<div className="lg:w-1/2 relative" data-aos="fade-up" data-aos-duration="1200">

<div className="relative w-full h-[500px] group">
<div className="absolute inset-0 bg-blue-600 rounded-2xl blur-2xl opacity-10 group-hover:opacity-20 transition duration-500"></div>
<img alt="Team Meeting" className="relative z-10 w-full h-full object-cover rounded-2xl opacity-60 mask-image-gradient transition-transform duration-700 group-hover:scale-[1.02]" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&amp;w=2664&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#02040a] via-transparent to-transparent z-20"></div>
<div className="absolute -bottom-10 -right-10 bg-blue-600 w-40 h-40 rounded-full blur-[100px] opacity-40 animate-pulse"></div>
</div>
</div>
</div>

<div className="mt-40 relative">
<div className="text-center mb-16" data-aos="fade-up">
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-slate-700 bg-slate-800/50 text-white text-xs font-semibold uppercase tracking-wide mb-4">
                        Our Steps <i className="w-3 h-3" data-lucide="chevron-right" strokeWidth="1.5"></i>
</div>
<h3 className="text-4xl font-medium tracking-tight">Setup your personalized marketing<br/><span className="font-serif-italic text-slate-400">Automation in 3 Steps.</span></h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-card rounded-2xl p-8 relative overflow-hidden group hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.15)]" data-aos="fade-up" data-aos-delay="0">
<div className="absolute top-0 right-0 p-6 opacity-30 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-110">
<i className="w-20 h-20 text-blue-500" data-lucide="fingerprint" strokeWidth="0.5"></i>
</div>
<div className="mt-24 relative z-10">
<div className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-2">Step 1</div>
<h4 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-200 transition-colors">Set up your Brand</h4>
<p className="text-slate-400 text-sm leading-relaxed">Create your brand foundation in minutes. Add your logo, colors, tone of voice, and business details.</p>
</div>
</div>

<div className="glass-card rounded-2xl p-8 relative overflow-hidden group hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.15)]" data-aos="fade-up" data-aos-delay="100">
<div className="absolute top-0 right-0 p-6 opacity-30 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-110">
<i className="w-20 h-20 text-purple-500" data-lucide="check-circle" strokeWidth="0.5"></i>
</div>
<div className="mt-24 relative z-10">
<div className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-2">Step 2</div>
<h4 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-200 transition-colors">Approve Strategy</h4>
<p className="text-slate-400 text-sm leading-relaxed">Review your AI-generated marketing plan for the month. Edit, refine, or approve with one click.</p>
</div>
</div>

<div className="glass-card rounded-2xl p-8 relative overflow-hidden group hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.15)]" data-aos="fade-up" data-aos-delay="200">
<div className="absolute top-0 right-0 p-6 opacity-30 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-110">
<i className="w-20 h-20 text-cyan-500" data-lucide="zap" strokeWidth="0.5"></i>
</div>
<div className="mt-24 relative z-10">
<div className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-2">Step 3</div>
<h4 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-200 transition-colors">Full Automation</h4>
<p className="text-slate-400 text-sm leading-relaxed">Once approved, Marqait handles everything: content creation, design, scheduling, and posting 24/7.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white">
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-blue-200 bg-white text-blue-600 text-xs font-semibold uppercase tracking-wide mb-4">
                Our Features <i className="w-3 h-3" data-lucide="chevron-right" strokeWidth="1.5"></i>
</div>
<h2 className="text-4xl font-medium tracking-tight text-slate-900 mb-20">
                Why Choose Marqait for<br/>
<span className="text-blue-600 font-serif-italic">Marketing Automation?</span>
</h2>
<div className="grid grid-cols-2 md:grid-cols-5 gap-10">
<div className="flex flex-col items-center group cursor-default" data-aos="fade-up" data-aos-delay="0">
<div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-blue-100">
<i className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" data-lucide="mouse-pointer-click"></i>
</div>
<p className="text-sm font-semibold text-slate-700 group-hover:text-blue-600 transition-colors">No marketing<br/>experience required</p>
</div>
<div className="flex flex-col items-center group cursor-default" data-aos="fade-up" data-aos-delay="100">
<div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-blue-100">
<i className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" data-lucide="layout-dashboard"></i>
</div>
<p className="text-sm font-semibold text-slate-700 group-hover:text-blue-600 transition-colors">One simple dashboard<br/>for all your content</p>
</div>
<div className="flex flex-col items-center group cursor-default" data-aos="fade-up" data-aos-delay="200">
<div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-blue-100">
<i className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" data-lucide="settings"></i>
</div>
<p className="text-sm font-semibold text-slate-700 group-hover:text-blue-600 transition-colors">Automated<br/>marketing workflow</p>
</div>
<div className="flex flex-col items-center group cursor-default" data-aos="fade-up" data-aos-delay="300">
<div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-blue-100">
<i className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" data-lucide="clock"></i>
</div>
<p className="text-sm font-semibold text-slate-700 group-hover:text-blue-600 transition-colors">Designed for small<br/>businesses with limited time</p>
</div>
<div className="flex flex-col items-center group cursor-default" data-aos="fade-up" data-aos-delay="400">
<div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-blue-100">
<i className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" data-lucide="wallet"></i>
</div>
<p className="text-sm font-semibold text-slate-700 group-hover:text-blue-600 transition-colors">Affordable than hiring<br/>an agency</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16">
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-blue-200 bg-white text-blue-600 text-xs font-semibold uppercase tracking-wide mb-4">
                    FAQ's <i className="w-3 h-3" data-lucide="chevron-right" strokeWidth="1.5"></i>
</div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-slate-900">
                    Frequently Asked <span className="text-blue-600 font-serif-italic">Questions</span>
</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-4">
<details className="group bg-white rounded-xl p-6 shadow-sm border border-slate-100 cursor-pointer open:ring-2 open:ring-blue-100 transition-all duration-300 hover:shadow-md">
<summary className="flex justify-between items-center font-medium text-slate-900">
                            Who can use Marqait AI?
                            <i className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform duration-300" data-lucide="chevron-down"></i>
</summary>
<div className="grid grid-rows-[0fr] group-open:grid-rows-[1fr] transition-all duration-300">
<div className="overflow-hidden">
<p className="text-slate-500 mt-4 text-sm leading-relaxed">Marqait is designed for small business owners, freelancers, and marketing teams who want to automate their social media presence.</p>
</div>
</div>
</details>
<details className="group bg-white rounded-xl p-6 shadow-sm border border-slate-100 cursor-pointer open:ring-2 open:ring-blue-100 transition-all duration-300 hover:shadow-md" open="">
<summary className="flex justify-between items-center font-medium text-slate-900">
                            What marketing tasks does Marqait automate?
                            <i className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform duration-300" data-lucide="chevron-down"></i>
</summary>
<div className="grid grid-rows-[0fr] group-open:grid-rows-[1fr] transition-all duration-300">
<div className="overflow-hidden">
<p className="text-slate-500 mt-4 text-sm leading-relaxed">Marqait handles strategy generation, content creation (copy &amp; visuals), scheduling, and auto-posting.</p>
</div>
</div>
</details>
<details className="group bg-white rounded-xl p-6 shadow-sm border border-slate-100 cursor-pointer open:ring-2 open:ring-blue-100 transition-all duration-300 hover:shadow-md">
<summary className="flex justify-between items-center font-medium text-slate-900">
                            Which platforms does Marqait support?
                            <i className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform duration-300" data-lucide="chevron-down"></i>
</summary>
<div className="grid grid-rows-[0fr] group-open:grid-rows-[1fr] transition-all duration-300">
<div className="overflow-hidden">
<p className="text-slate-500 mt-4 text-sm leading-relaxed">Currently we support Instagram, Facebook, LinkedIn, and Twitter (X).</p>
</div>
</div>
</details>
<details className="group bg-white rounded-xl p-6 shadow-sm border border-slate-100 cursor-pointer open:ring-2 open:ring-blue-100 transition-all duration-300 hover:shadow-md">
<summary className="flex justify-between items-center font-medium text-slate-900">
                            Can I customize my brand voice and style?
                            <i className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform duration-300" data-lucide="chevron-down"></i>
</summary>
<div className="grid grid-rows-[0fr] group-open:grid-rows-[1fr] transition-all duration-300">
<div className="overflow-hidden">
<p className="text-slate-500 mt-4 text-sm leading-relaxed">Yes, the onboarding process allows you to define strict brand guidelines.</p>
</div>
</div>
</details>
</div>
<div className="space-y-4">
<details className="group bg-white rounded-xl p-6 shadow-sm border border-slate-100 cursor-pointer open:ring-2 open:ring-blue-100 transition-all duration-300 hover:shadow-md">
<summary className="flex justify-between items-center font-medium text-slate-900">
                            How does the auto-posting feature work?
                            <i className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform duration-300" data-lucide="chevron-down"></i>
</summary>
<div className="grid grid-rows-[0fr] group-open:grid-rows-[1fr] transition-all duration-300">
<div className="overflow-hidden">
<p className="text-slate-500 mt-4 text-sm leading-relaxed">Once you approve the content calendar, our system connects via API to publish your posts at scheduled times.</p>
</div>
</div>
</details>
<details className="group bg-white rounded-xl p-6 shadow-sm border border-slate-100 cursor-pointer open:ring-2 open:ring-blue-100 transition-all duration-300 hover:shadow-md">
<summary className="flex justify-between items-center font-medium text-slate-900">
                            Do I need a marketing automation agency after this?
                            <i className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform duration-300" data-lucide="chevron-down"></i>
</summary>
<div className="grid grid-rows-[0fr] group-open:grid-rows-[1fr] transition-all duration-300">
<div className="overflow-hidden">
<p className="text-slate-500 mt-4 text-sm leading-relaxed">Most likely not. Marqait replaces the need for basic agency retainers for content creation and posting.</p>
</div>
</div>
</details>
<details className="group bg-white rounded-xl p-6 shadow-sm border border-slate-100 cursor-pointer open:ring-2 open:ring-blue-100 transition-all duration-300 hover:shadow-md">
<summary className="flex justify-between items-center font-medium text-slate-900">
                            Can Marqait do b2b marketing automation?
                            <i className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform duration-300" data-lucide="chevron-down"></i>
</summary>
<div className="grid grid-rows-[0fr] group-open:grid-rows-[1fr] transition-all duration-300">
<div className="overflow-hidden">
<p className="text-slate-500 mt-4 text-sm leading-relaxed">Absolutely, especially effective for LinkedIn content strategies.</p>
</div>
</div>
</details>
<details className="group bg-white rounded-xl p-6 shadow-sm border border-slate-100 cursor-pointer open:ring-2 open:ring-blue-100 transition-all duration-300 hover:shadow-md">
<summary className="flex justify-between items-center font-medium text-slate-900">
                            What can the Marqait AI do for my small business?
                            <i className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform duration-300" data-lucide="chevron-down"></i>
</summary>
<div className="grid grid-rows-[0fr] group-open:grid-rows-[1fr] transition-all duration-300">
<div className="overflow-hidden">
<p className="text-slate-500 mt-4 text-sm leading-relaxed">It saves time, ensures consistency, and provides professional-grade content.</p>
</div>
</div>
</details>
</div>
</div>
</div>
</section>

<div className="bg-slate-50 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="bg-[#02040a] rounded-[2.5rem] p-10 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between border border-slate-800 shadow-2xl" data-aos="zoom-in" data-aos-duration="1200">

<div className="absolute inset-0 bg-grid-animate opacity-30"></div>
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>

<div className="relative z-10 max-w-xl">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
                        The best platform for AI<br/>
<span className="text-blue-500 font-serif-italic">Marketing Automation.</span>
</h2>
<p className="text-slate-400 text-lg mb-10">Start your AI marketing automation today.</p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-blue-500 transition-all hover:scale-105 shadow-[0_0_30px_-10px_rgba(37,99,235,0.5)]">
<i className="w-5 h-5" data-lucide="rocket"></i> Get Started Free
                        </button>
<button className="bg-transparent text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 border border-white/20 hover:bg-white/10 transition-colors backdrop-blur-sm">
<i className="w-5 h-5" data-lucide="play-circle"></i> Book a Demo
                        </button>
</div>
</div>

<div className="absolute right-0 top-0 h-full w-1/2 opacity-20 md:opacity-100 pointer-events-none">
<div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1620641788421-7f1c338e4200?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center rounded-l-[5rem] mix-blend-screen opacity-50"></div>
</div>
</div>
</div>
</div>

<footer className="bg-[#02040a] text-white pt-24 pb-12 border-t border-slate-800">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

<div className="col-span-1 md:col-span-1">
<h3 className="text-2xl font-bold tracking-widest uppercase mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-500">Marqait</h3>
<h4 className="text-lg font-medium text-white mb-2">About Marqait</h4>
<p className="text-slate-400 text-sm leading-relaxed mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                    </p>
<button className="bg-white/10 border border-white/10 text-white px-4 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2 hover:bg-white/20 transition-colors">
<i className="w-4 h-4" data-lucide="mail"></i> Get in Touch
                    </button>
</div>

<div>
<h4 className="font-medium text-white mb-6 flex items-center gap-2 text-sm uppercase tracking-wider text-slate-500">Quick Links</h4>
<ul className="space-y-3 text-sm text-slate-400">
<li><a className="hover:text-blue-400 transition-colors block hover:translate-x-1 duration-300" href="#">About Us</a></li>
<li><a className="hover:text-blue-400 transition-colors block hover:translate-x-1 duration-300" href="#">Contact Us</a></li>
<li><a className="hover:text-blue-400 transition-colors block hover:translate-x-1 duration-300" href="#">Our Team</a></li>
<li><a className="hover:text-blue-400 transition-colors block hover:translate-x-1 duration-300" href="#">Our Services</a></li>
<li><a className="hover:text-blue-400 transition-colors block hover:translate-x-1 duration-300" href="#">Privacy Policy</a></li>
</ul>
</div>

<div className="grid grid-cols-2 gap-4">
<div>
<h4 className="font-medium text-white mb-6 flex items-center gap-2 text-sm uppercase tracking-wider text-slate-500">AI Tools</h4>
<ul className="space-y-3 text-sm text-slate-400">
<li><a className="hover:text-blue-400 transition-colors block hover:translate-x-1 duration-300" href="#">Generator</a></li>
<li><a className="hover:text-blue-400 transition-colors block hover:translate-x-1 duration-300" href="#">Scheduler</a></li>
<li><a className="hover:text-blue-400 transition-colors block hover:translate-x-1 duration-300" href="#">Analytics</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-white mb-6 flex items-center gap-2 text-sm uppercase tracking-wider text-slate-500">Solutions</h4>
<ul className="space-y-3 text-sm text-slate-400">
<li><a className="hover:text-blue-400 transition-colors block hover:translate-x-1 duration-300" href="#">Small Biz</a></li>
<li><a className="hover:text-blue-400 transition-colors block hover:translate-x-1 duration-300" href="#">Agency</a></li>
<li><a className="hover:text-blue-400 transition-colors block hover:translate-x-1 duration-300" href="#">Enterprise</a></li>
</ul>
</div>
</div>

<div>
<h4 className="font-medium text-white mb-6 flex items-center gap-2 text-sm uppercase tracking-wider text-slate-500">Contact</h4>
<p className="text-sm text-slate-400 mb-6 flex gap-3">
<i className="w-4 h-4 mt-0.5 text-blue-500 shrink-0" data-lucide="map-pin"></i>
                        Level 5, 580 George Street,<br/>Sydney NSW Australia 2000
                    </p>
<ul className="space-y-3 text-sm text-slate-400 mb-8">
<li className="flex items-center gap-3 hover:text-white transition-colors"><i className="w-4 h-4 text-blue-500" data-lucide="phone"></i> +91 9898989812</li>
<li className="flex items-center gap-3 hover:text-white transition-colors"><i className="w-4 h-4 text-blue-500" data-lucide="mail"></i> info@marqait.com</li>
</ul>
<div className="flex gap-3">
<a className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 hover:-translate-y-1 transition-all" href="#"><i className="w-4 h-4" data-lucide="linkedin"></i></a>
<a className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 hover:-translate-y-1 transition-all" href="#"><i className="w-4 h-4" data-lucide="facebook"></i></a>
<a className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 hover:-translate-y-1 transition-all" href="#"><i className="w-4 h-4" data-lucide="instagram"></i></a>
<a className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 hover:-translate-y-1 transition-all" href="#"><i className="w-4 h-4" data-lucide="x"></i></a>
</div>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-500">© Copyright 2025 Marqait. All Rights Reserved.</p>
<div className="flex gap-6 text-xs text-slate-500">
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Cookies</a>
</div>
</div>
</div>
</footer>




    </>
  );
}
