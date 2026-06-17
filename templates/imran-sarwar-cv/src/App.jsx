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
      

<nav className="fixed top-0 w-full z-50 glass border-b border-white/5">
<div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white font-medium tracking-tight text-lg hover:opacity-80 transition-opacity" href="#">
                IS
            </a>
<div className="flex gap-6 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#experience">Experience</a>
<a className="hover:text-white transition-colors" href="#skills">Skills</a>
<a className="hover:text-white transition-colors" href="#contact">Contact</a>
</div>
</div>
</nav>
<main className="max-w-4xl mx-auto px-6 pt-32 pb-20">

<header className="mb-24 fade-in" id="about">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/50 text-xs font-medium text-neutral-300 mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
                Available for work
            </div>
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tighter mb-6 leading-tight">
                Imran Sarwar
            </h1>
<div className="flex flex-wrap gap-2 mb-8">
<span className="px-3 py-1 bg-neutral-900 border border-neutral-800 rounded text-xs text-neutral-300 tracking-wide uppercase">Medical Biller</span>
<span className="px-3 py-1 bg-neutral-900 border border-neutral-800 rounded text-xs text-neutral-300 tracking-wide uppercase">Web Developer</span>
<span className="px-3 py-1 bg-neutral-900 border border-neutral-800 rounded text-xs text-neutral-300 tracking-wide uppercase">UI/UX Designer</span>
<span className="px-3 py-1 bg-neutral-900 border border-neutral-800 rounded text-xs text-neutral-300 tracking-wide uppercase">Customer Services</span>
</div>
<p className="text-lg md:text-xl leading-relaxed text-neutral-400 max-w-2xl mb-8 font-light">
                Hello, I am an organized and dependable professional, successful at managing multiple priorities with a positive attitude. I am willing to take on added responsibilities to meet team goals and I am an expert in MS Excel.
            </p>
<div className="flex gap-4">
<a className="inline-flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded text-sm font-medium hover:bg-neutral-200 transition-colors" href="#contact">
                    Get in touch
                    <span className="iconify" data-icon="lucide:arrow-right" data-width="16" strokeWidth="1.5"></span>
</a>
<a className="inline-flex items-center gap-2 bg-neutral-900 border border-neutral-800 text-white px-5 py-2.5 rounded text-sm font-medium hover:bg-neutral-800 transition-colors" href="mailto:emraansarvar.company@gmail.com">
<span className="iconify" data-icon="lucide:copy" data-width="16" strokeWidth="1.5"></span>
                    Copy Email
                </a>
</div>
</header>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">

<div className="md:col-span-1 space-y-12">

<section id="skills">
<h2 className="text-sm font-medium text-white uppercase tracking-wider mb-6 flex items-center gap-2">
<span className="iconify" data-icon="lucide:zap" data-width="16" strokeWidth="1.5"></span>
                        Expertise
                    </h2>
<div className="space-y-5">
<div className="group">
<div className="flex justify-between text-xs mb-1.5">
<span className="text-neutral-300">MS Office</span>
<span className="text-neutral-500">95%</span>
</div>
<div className="w-full bg-neutral-900 rounded-full h-1.5 border border-neutral-800 overflow-hidden">
<div className="bg-white h-1.5 rounded-full" style={{width: '95%'}}></div>
</div>
</div>
<div className="group">
<div className="flex justify-between text-xs mb-1.5">
<span className="text-neutral-300">HTML &amp; CSS</span>
<span className="text-neutral-500">95%</span>
</div>
<div className="w-full bg-neutral-900 rounded-full h-1.5 border border-neutral-800 overflow-hidden">
<div className="bg-white h-1.5 rounded-full" style={{width: '95%'}}></div>
</div>
</div>
<div className="group">
<div className="flex justify-between text-xs mb-1.5">
<span className="text-neutral-300">Figma / UI/UX</span>
<span className="text-neutral-500">90%</span>
</div>
<div className="w-full bg-neutral-900 rounded-full h-1.5 border border-neutral-800 overflow-hidden">
<div className="bg-white h-1.5 rounded-full" style={{width: '90%'}}></div>
</div>
</div>
<div className="group">
<div className="flex justify-between text-xs mb-1.5">
<span className="text-neutral-300">Customer Service</span>
<span className="text-neutral-500">90%</span>
</div>
<div className="w-full bg-neutral-900 rounded-full h-1.5 border border-neutral-800 overflow-hidden">
<div className="bg-white h-1.5 rounded-full" style={{width: '90%'}}></div>
</div>
</div>
<div className="group">
<div className="flex justify-between text-xs mb-1.5">
<span className="text-neutral-300">Content Writing</span>
<span className="text-neutral-500">80%</span>
</div>
<div className="w-full bg-neutral-900 rounded-full h-1.5 border border-neutral-800 overflow-hidden">
<div className="bg-neutral-500 h-1.5 rounded-full" style={{width: '80%'}}></div>
</div>
</div>
</div>
</section>

<section>
<h2 className="text-sm font-medium text-white uppercase tracking-wider mb-6 flex items-center gap-2">
<span className="iconify" data-icon="lucide:graduation-cap" data-width="16" strokeWidth="1.5"></span>
                        Education
                    </h2>
<div className="space-y-6 border-l border-neutral-800 ml-2 pl-6 relative">

<div className="relative">
<span className="absolute -left-[29px] top-1.5 h-3 w-3 rounded-full border border-neutral-800 bg-neutral-950"></span>
<h3 className="text-neutral-200 text-sm font-medium">BS Computer Science</h3>
<p className="text-neutral-500 text-xs mt-0.5">Virtual University</p>
<p className="text-neutral-600 text-xs mt-1">2016 — 2020</p>
</div>

<div className="relative">
<span className="absolute -left-[29px] top-1.5 h-3 w-3 rounded-full border border-neutral-800 bg-neutral-950"></span>
<h3 className="text-neutral-200 text-sm font-medium">Intermediate</h3>
<p className="text-neutral-500 text-xs mt-0.5">Central Group of Colleges</p>
<p className="text-neutral-600 text-xs mt-1">2014 — 2016</p>
</div>

<div className="relative">
<span className="absolute -left-[29px] top-1.5 h-3 w-3 rounded-full border border-neutral-800 bg-neutral-950"></span>
<h3 className="text-neutral-200 text-sm font-medium">Matriculation</h3>
<p className="text-neutral-500 text-xs mt-0.5">Central Model High School</p>
<p className="text-neutral-600 text-xs mt-1">2011 — 2013</p>
</div>
</div>
</section>

<section>
<h2 className="text-sm font-medium text-white uppercase tracking-wider mb-6 flex items-center gap-2">
<span className="iconify" data-icon="lucide:award" data-width="16" strokeWidth="1.5"></span>
                        Courses
                    </h2>
<ul className="space-y-4">
<li className="bg-neutral-900/30 p-3 rounded border border-neutral-800/50">
<h3 className="text-neutral-300 text-xs font-medium">Professional MS Office Course</h3>
<p className="text-neutral-600 text-xs mt-1">Edge College &amp; Institute (2013)</p>
</li>
<li className="bg-neutral-900/30 p-3 rounded border border-neutral-800/50">
<h3 className="text-neutral-300 text-xs font-medium">Web Development</h3>
<p className="text-neutral-600 text-xs mt-1">Punjab Computer College (2017)</p>
</li>
<li className="bg-neutral-900/30 p-3 rounded border border-neutral-800/50">
<h3 className="text-neutral-300 text-xs font-medium">Short Hand Course</h3>
<p className="text-neutral-600 text-xs mt-1">Future Star (2018)</p>
</li>
</ul>
</section>
</div>

<div className="md:col-span-2">
<section id="experience">
<h2 className="text-sm font-medium text-white uppercase tracking-wider mb-6 flex items-center gap-2">
<span className="iconify" data-icon="lucide:briefcase" data-width="16" strokeWidth="1.5"></span>
                        Work Experience
                    </h2>
<div className="grid grid-cols-1 gap-4">

<div className="group p-5 rounded-xl border border-neutral-800 bg-neutral-900/20 hover:bg-neutral-900/50 transition-all duration-300 hover:border-neutral-700">
<div className="flex justify-between items-start mb-2">
<h3 className="text-neutral-200 font-medium tracking-tight">Care Associate</h3>
<span className="text-xs text-green-400 bg-green-400/10 px-2 py-0.5 rounded border border-green-400/20">Present</span>
</div>
<div className="flex justify-between items-end">
<p className="text-sm text-neutral-400">Tazah Technologies</p>
<span className="text-xs text-neutral-600 font-mono">2024</span>
</div>
</div>

<div className="group p-5 rounded-xl border border-neutral-800 bg-neutral-900/20 hover:bg-neutral-900/50 transition-all duration-300 hover:border-neutral-700">
<div className="flex justify-between items-start mb-2">
<h3 className="text-neutral-200 font-medium tracking-tight">Agent</h3>
</div>
<div className="flex justify-between items-end">
<p className="text-sm text-neutral-400">BIZ Outsource</p>
<span className="text-xs text-neutral-600 font-mono">2024</span>
</div>
</div>

<div className="group p-5 rounded-xl border border-neutral-800 bg-neutral-900/20 hover:bg-neutral-900/50 transition-all duration-300 hover:border-neutral-700">
<div className="flex justify-between items-start mb-2">
<h3 className="text-neutral-200 font-medium tracking-tight">Manager</h3>
</div>
<div className="flex justify-between items-end">
<p className="text-sm text-neutral-400">Global Publications</p>
<span className="text-xs text-neutral-600 font-mono">2023</span>
</div>
</div>

<div className="group p-5 rounded-xl border border-neutral-800 bg-neutral-900/20 hover:bg-neutral-900/50 transition-all duration-300 hover:border-neutral-700">
<div className="flex justify-between items-start mb-2">
<h3 className="text-neutral-200 font-medium tracking-tight">Agent</h3>
</div>
<div className="flex justify-between items-end">
<p className="text-sm text-neutral-400">Alphatech</p>
<span className="text-xs text-neutral-600 font-mono">2023</span>
</div>
</div>

<div className="group p-5 rounded-xl border border-neutral-800 bg-neutral-900/20 hover:bg-neutral-900/50 transition-all duration-300 hover:border-neutral-700">
<div className="flex justify-between items-start mb-2">
<h3 className="text-neutral-200 font-medium tracking-tight">Billing Executive</h3>
</div>
<div className="flex justify-between items-end">
<p className="text-sm text-neutral-400">PhysicianCure</p>
<span className="text-xs text-neutral-600 font-mono">2023</span>
</div>
</div>

<div className="group p-5 rounded-xl border border-neutral-800 bg-neutral-900/20 hover:bg-neutral-900/50 transition-all duration-300 hover:border-neutral-700">
<div className="flex justify-between items-start mb-2">
<h3 className="text-neutral-200 font-medium tracking-tight">Web Development &amp; Designing</h3>
</div>
<div className="flex justify-between items-end">
<p className="text-sm text-neutral-400">Tech-House</p>
<span className="text-xs text-neutral-600 font-mono">2019 - 2022</span>
</div>
</div>

<div className="group p-5 rounded-xl border border-neutral-800 bg-neutral-900/20 hover:bg-neutral-900/50 transition-all duration-300 hover:border-neutral-700">
<div className="flex justify-between items-start mb-2">
<h3 className="text-neutral-200 font-medium tracking-tight">Wholesale Department Incharge</h3>
</div>
<div className="flex justify-between items-end">
<p className="text-sm text-neutral-400">Allied Book Company</p>
<span className="text-xs text-neutral-600 font-mono">2018 - 2019</span>
</div>
</div>

<div className="group p-5 rounded-xl border border-neutral-800 bg-neutral-900/20 hover:bg-neutral-900/50 transition-all duration-300 hover:border-neutral-700">
<div className="flex justify-between items-start mb-2">
<h3 className="text-neutral-200 font-medium tracking-tight">Order Booker &amp; Supplier</h3>
</div>
<div className="flex justify-between items-end">
<p className="text-sm text-neutral-400">Master Trader Company</p>
<span className="text-xs text-neutral-600 font-mono">2017 - 2018</span>
</div>
</div>

<div className="group p-5 rounded-xl border border-neutral-800 bg-neutral-900/20 hover:bg-neutral-900/50 transition-all duration-300 hover:border-neutral-700">
<div className="flex justify-between items-start mb-2">
<h3 className="text-neutral-200 font-medium tracking-tight">Order Booker</h3>
</div>
<div className="flex justify-between items-end">
<p className="text-sm text-neutral-400">Mercury Company</p>
<span className="text-xs text-neutral-600 font-mono">2016 - 2017</span>
</div>
</div>
</div>
</section>
</div>
</div>
</main>

<footer className="border-t border-white/5 bg-neutral-950 footer-grad" id="contact">
<div className="max-w-4xl mx-auto px-6 pt-16 pb-8">

<div className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/50 p-8 md:p-12 mb-16 group hover:border-neutral-700 transition-colors duration-500">

<div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/5 blur-3xl pointer-events-none group-hover:bg-white/10 transition-colors duration-500"></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="relative z-10 flex flex-col md:flex-row gap-8 items-center justify-between">
<div className="text-center md:text-left">
<h2 className="text-3xl font-medium text-white tracking-tighter mb-3">Let's work together</h2>
<p className="text-neutral-400 leading-relaxed max-w-sm">
                            Ready to make something great? I'm available for freelance projects and full-time opportunities.
                        </p>
</div>
<div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
<a className="group/btn flex items-center justify-center gap-3 bg-white text-black px-6 py-3 rounded-lg text-sm font-medium hover:bg-neutral-200 transition-all w-full md:w-auto" href="mailto:emraansarvar.company@gmail.com">
<span className="iconify" data-icon="lucide:mail" data-width="18" strokeWidth="1.5"></span>
<span>Email Me</span>
<span className="iconify opacity-0 -ml-2 group-hover/btn:opacity-100 group-hover/btn:ml-0 transition-all" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
<a className="group/btn flex items-center justify-center gap-3 bg-neutral-800 border border-neutral-700 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-neutral-700 transition-all w-full md:w-auto" href="tel:+923114552227">
<span className="iconify text-neutral-400 group-hover/btn:text-white transition-colors" data-icon="lucide:phone" data-width="18" strokeWidth="1.5"></span>
<span>Call Now</span>
</a>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 border-b border-white/5 pb-12 mb-8">

<div className="md:col-span-1 space-y-4">
<a className="text-white font-medium tracking-tight text-xl hover:opacity-80 transition-opacity block" href="#">IS</a>
<p className="text-xs text-neutral-500 leading-relaxed">
                        Crafting digital experiences with precision and passion. Focused on functionality and user-centric design.
                    </p>
</div>

<div className="md:col-span-1">
<h4 className="text-xs font-medium text-white uppercase tracking-wider mb-4">Explore</h4>
<ul className="space-y-3 text-sm">
<li><a className="text-neutral-500 hover:text-white transition-colors block" href="#about">About Me</a></li>
<li><a className="text-neutral-500 hover:text-white transition-colors block" href="#experience">Experience</a></li>
<li><a className="text-neutral-500 hover:text-white transition-colors block" href="#skills">Expertise</a></li>
</ul>
</div>

<div className="md:col-span-1">
<h4 className="text-xs font-medium text-white uppercase tracking-wider mb-4">Connect</h4>
<ul className="space-y-3 text-sm">
<li>
<a className="text-neutral-500 hover:text-white transition-colors flex items-center gap-2 group" href="mailto:emraansarvar.company@gmail.com">
<span className="iconify" data-icon="lucide:mail" data-width="14"></span>
                                Email
                            </a>
</li>
<li>
<a className="text-neutral-500 hover:text-white transition-colors flex items-center gap-2 group" href="tel:+923114552227">
<span className="iconify" data-icon="lucide:phone" data-width="14"></span>
                                Phone
                            </a>
</li>
</ul>
</div>

<div className="md:col-span-1">
<h4 className="text-xs font-medium text-white uppercase tracking-wider mb-4">Status</h4>
<div className="space-y-3">
<div className="flex items-center gap-2 text-sm text-neutral-500">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
                            Available for projects
                        </div>
<div className="flex items-center gap-2 text-sm text-neutral-500">
<span className="iconify" data-icon="lucide:map-pin" data-width="14"></span>
                            Lahore, Pakistan
                        </div>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-600">
<p>© 2024 Imran Sarwar. All rights reserved.</p>
<div className="flex items-center gap-6">
<span className="hidden md:inline text-neutral-800">|</span>
<button className="flex items-center gap-2 hover:text-white transition-colors" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">
                        Back to top
                        <span className="iconify" data-icon="lucide:arrow-up" data-width="14"></span>
</button>
</div>
</div>
</div>
</footer>

    </>
  );
}
