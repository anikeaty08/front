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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="text-xl font-semibold tracking-tighter text-slate-900 group flex items-center gap-2" href="#">
<span className="bg-blue-600 text-white w-8 h-8 flex items-center justify-center rounded-lg text-sm">NP</span>
<span>Naitik Patel</span>
</a>
<div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-500">
<a className="hover:text-blue-600 transition-colors" href="#about">About</a>
<a className="hover:text-blue-600 transition-colors" href="#experience">Experience</a>
<a className="hover:text-blue-600 transition-colors" href="#skills">Skills</a>
<a className="hover:text-blue-600 transition-colors" href="#services">Services</a>
<a className="hover:text-blue-600 transition-colors" href="#projects">Projects</a>
<a className="px-5 py-2.5 bg-slate-900 text-white rounded-full hover:bg-blue-600 transition-all duration-300" href="#contact">
                    Contact Me
                </a>
</div>

<button className="md:hidden text-slate-900">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:menu" data-icon-replaced="true" data-icon-set="lucide" data-lucide="menu" fill="none" height="24" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(15, 23, 42)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-bl from-blue-50 to-white opacity-60"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
<div className="animate-fade-in-up space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium tracking-wide uppercase border border-blue-100">
<span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                    Available for Consultation
                </div>
<h1 className="text-4xl lg:text-6xl font-semibold text-slate-900 tracking-tight leading-[1.1]">
                    Transforming Lives Through <span className="text-blue-600">Health</span>, Hydration &amp; Smart Choices.
                </h1>
<p className="text-lg text-slate-500 leading-relaxed max-w-lg">
                    Health Entrepreneur | Wellness Educator | Trainer | AI Automation Specialist. <br/>
                    Empowering individuals and businesses with holistic health solutions and digital efficiency.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="inline-flex justify-center items-center px-8 py-3.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 gap-2" href="#contact">
                        Book a Health Consultation
                        <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="inline-flex justify-center items-center px-8 py-3.5 bg-white text-slate-700 border border-slate-200 rounded-lg font-medium hover:bg-slate-50 transition-all gap-2" href="#services">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:users" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></g></svg>
                        Join Wellness Training
                    </a>
</div>
</div>
<div className="lg:h-[600px] flex relative items-center justify-center">
<div className="relative w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-slate-100">

<img alt="Naitik Patel" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="bg-gradient-to-t from-slate-900/40 to-transparent absolute top-0 right-0 bottom-0 left-0" style={{maskImage: 'linear-gradient(260deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(260deg, transparent, black 0%, black 100%, transparent)'}}></div>
<div className="absolute bottom-6 left-6 text-white">
<p className="font-medium text-lg">Naitik Patel</p>
<p className="text-sm text-slate-200">Health Entrepreneur</p>
</div>
</div>

<div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-100 rounded-full blur-3xl -z-10"></div>
<div className="absolute top-10 -left-6 w-24 h-24 bg-blue-50 rounded-full blur-2xl -z-10"></div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50/50 border-y border-slate-100" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-start">
<div className="space-y-6">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight">About Me</h2>
<div className="w-12 h-1 bg-blue-600 rounded-full"></div>
<p className="text-slate-600 leading-relaxed text-lg">
                        I am a passionate Health Entrepreneur and Wellness Educator dedicated to improving lives through better hydration and lifestyle choices. With a diverse background ranging from engineering to digital literacy management, I bring a unique analytical approach to health and wellness.
                    </p>
<p className="text-slate-600 leading-relaxed">
                        Beyond wellness, I am an AI-driven digital solutions provider, helping businesses leverage technology for growth. My mission is to bridge the gap between health education and modern digital efficiency.
                    </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
<div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
<div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
<svg aria-hidden="true" className="iconify text-xl iconify--lucide" data-icon="lucide:heart-handshake" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676a.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052a2.12 2.12 0 0 0-.004-3a2.124 2.124 0 1 0 3-3a2.124 2.124 0 0 0 3.004 0a2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0a2 2 0 0 1 0-2.828l2.823-2.762" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="font-medium text-slate-800">Health &amp; Wellness Expert</span>
</div>
<div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
<div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
<svg aria-hidden="true" className="iconify text-xl iconify--lucide" data-icon="lucide:presentation" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2 3h20m-1 0v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3m4 18l5-5l5 5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="font-medium text-slate-800">Trainer &amp; Mentor</span>
</div>
<div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
<div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
<svg aria-hidden="true" className="iconify text-xl iconify--lucide" data-icon="lucide:cpu" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 20v2m0-20v2m5 16v2m0-20v2M2 12h2m-2 5h2M2 7h2m16 5h2m-2 5h2M20 7h2M7 20v2M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></g></svg>
</div>
<span className="font-medium text-slate-800">AI &amp; Digital Pro</span>
</div>
</div>
</div>
<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
<h3 className="text-xl font-semibold text-slate-900 mb-6 flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-blue-600 iconify--lucide" data-icon="lucide:graduation-cap" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0zM22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></g></svg>
                        Education
                    </h3>
<div className="space-y-8">
<div className="relative pl-6 border-l border-slate-200">
<div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-white border-2 border-blue-600 rounded-full"></div>
<h4 className="text-base font-medium text-slate-900">B.E. Electronics &amp; Communication</h4>
<p className="text-sm text-slate-500 mt-1">Engineering College Tuwa</p>
<span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded mt-2 inline-block">2010 – 2014</span>
</div>
<div className="relative pl-6 border-l border-slate-200">
<div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-white border-2 border-slate-300 rounded-full"></div>
<h4 className="text-base font-medium text-slate-900">High School</h4>
<p className="text-sm text-slate-500 mt-1">Bright Junior Science College Modasa</p>
<span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded mt-2 inline-block">2008 – 2010</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="experience">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight">Professional Journey</h2>
<p className="text-slate-500 mt-3">A decade of diverse experience in technology, management, and wellness.</p>
</div>
<div className="relative space-y-12">

<div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 transform -translate-x-1/2 md:block hidden"></div>
<div className="absolute left-4 top-0 bottom-0 w-px bg-slate-200 md:hidden"></div>

<div className="relative flex flex-col md:flex-row items-start md:items-center justify-between group">
<div className="md:w-1/2 md:pr-12 md:text-right pl-12 md:pl-0">
<h3 className="text-lg font-semibold text-slate-900">Independent Distributor</h3>
<p className="text-blue-600 font-medium text-sm mb-1">Enagic India</p>
<p className="text-slate-500 text-sm leading-relaxed">
                            Leading health business mentorship, conducting awareness programs, and training individuals in direct selling and wellness.
                        </p>
</div>
<div className="absolute left-4 md:left-1/2 w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-sm flex items-center justify-center transform -translate-x-1/2 z-10">
<svg aria-hidden="true" className="iconify text-white text-xs iconify--lucide" data-icon="lucide:briefcase" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></g></svg>
</div>
<div className="md:w-1/2 md:pl-12 pl-12 md:mt-0 mt-2">
<span className="inline-block px-3 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full">Present</span>
</div>
</div>

<div className="relative flex flex-col md:flex-row-reverse items-start md:items-center justify-between group">
<div className="md:w-1/2 md:pl-12 pl-12">
<h3 className="text-lg font-semibold text-slate-900">CSC e-Governance District Coordinator</h3>
<p className="text-blue-600 font-medium text-sm mb-1">Government Project</p>
<p className="text-slate-500 text-sm leading-relaxed">
                            Managed PMGDISHA digital literacy program across Panchmahal district for 6 years. Coordinated rural digital empowerment projects.
                        </p>
</div>
<div className="absolute left-4 md:left-1/2 w-8 h-8 bg-white border border-slate-300 rounded-full shadow-sm flex items-center justify-center transform -translate-x-1/2 z-10">
<svg aria-hidden="true" className="iconify text-slate-500 text-xs iconify--lucide" data-icon="lucide:landmark" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10 18v-7m1.12-8.802a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949zM14 18v-7m4 7v-7M3 22h18M6 18v-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="md:w-1/2 md:pr-12 md:text-right pl-12 md:pl-0 md:mt-0 mt-2">
<span className="text-slate-400 text-xs font-medium">6 Years Tenure</span>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-start md:items-center justify-between group">
<div className="md:w-1/2 md:pr-12 md:text-right pl-12 md:pl-0">
<h3 className="text-lg font-semibold text-slate-900">Tech Mahindra</h3>
<p className="text-blue-600 font-medium text-sm mb-1">BMS Engineer</p>
<p className="text-slate-500 text-sm leading-relaxed">
                            Managed Building Management Systems for the Reliance Jio Call Center in Ahmedabad.
                        </p>
</div>
<div className="absolute left-4 md:left-1/2 w-8 h-8 bg-white border border-slate-300 rounded-full shadow-sm flex items-center justify-center transform -translate-x-1/2 z-10">
<svg aria-hidden="true" className="iconify text-slate-500 text-xs iconify--lucide" data-icon="lucide:building-2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M10 12h4m-4-4h4m0 13v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></g></svg>
</div>
<div className="md:w-1/2 md:pl-12 pl-12 md:mt-0 mt-2">
<span className="text-slate-400 text-xs font-medium">2015 – 2017</span>
</div>
</div>

<div className="relative flex flex-col md:flex-row-reverse items-start md:items-center justify-between group">
<div className="md:w-1/2 md:pl-12 pl-12">
<h3 className="text-lg font-semibold text-slate-900">Reliance Jio</h3>
<p className="text-blue-600 font-medium text-sm mb-1">Network Installation</p>
<p className="text-slate-500 text-sm leading-relaxed">
                            Executed 3G–4G tower installations across Mumbai region.
                        </p>
</div>
<div className="absolute left-4 md:left-1/2 w-8 h-8 bg-white border border-slate-300 rounded-full shadow-sm flex items-center justify-center transform -translate-x-1/2 z-10">
<svg aria-hidden="true" className="iconify text-slate-500 text-xs iconify--lucide" data-icon="lucide:signal" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2 20h.01M7 20v-4m5 4v-8m5 8V8m5-4v16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="md:w-1/2 md:pr-12 md:text-right pl-12 md:pl-0 md:mt-0 mt-2">
<span className="text-slate-400 text-xs font-medium">2014 – 2015</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="skills">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight">Core Competencies</h2>
<p className="text-slate-500 mt-2">A blend of soft skills, technical knowledge, and wellness expertise.</p>
</div>
<div className="hidden md:block h-px flex-1 bg-slate-200 ml-12 mb-2"></div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-300 transition-colors duration-300 shadow-sm group">
<div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify text-xl iconify--lucide" data-icon="lucide:mic" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 19v3m7-12v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></g></svg>
</div>
<h3 className="font-medium text-slate-900">Communication &amp; Public Speaking</h3>
<p className="text-sm text-slate-500 mt-2">Expertise in delivering impactful presentations and customer service.</p>
</div>
<div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-300 transition-colors duration-300 shadow-sm group">
<div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify text-xl iconify--lucide" data-icon="lucide:trending-up" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 7h6v6"></path><path d="m22 7l-8.5 8.5l-5-5L2 17"></path></g></svg>
</div>
<h3 className="font-medium text-slate-900">Sales &amp; Business Growth</h3>
<p className="text-sm text-slate-500 mt-2">Strategic marketing and leadership to drive business expansion.</p>
</div>
<div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-300 transition-colors duration-300 shadow-sm group">
<div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify text-xl iconify--lucide" data-icon="lucide:heart-pulse" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path><path d="M3.22 13H9.5l.5-1l2 4.5l2-7l1.5 3.5h5.27"></path></g></svg>
</div>
<h3 className="font-medium text-slate-900">Health &amp; Wellness</h3>
<p className="text-sm text-slate-500 mt-2">Deep knowledge of hydration, nutrition, and lifestyle optimization.</p>
</div>
<div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-300 transition-colors duration-300 shadow-sm group">
<div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify text-xl iconify--lucide" data-icon="lucide:bot" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2m16 0h2m-7-1v2m-6-2v2"></path></g></svg>
</div>
<h3 className="font-medium text-slate-900">AI Automation</h3>
<p className="text-sm text-slate-500 mt-2">Implementing smart digital solutions to automate workflows.</p>
</div>
<div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-300 transition-colors duration-300 shadow-sm group">
<div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify text-xl iconify--lucide" data-icon="lucide:monitor" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="14" rx="2" width="20" x="2" y="3"></rect><path d="M8 21h8m-4-4v4"></path></g></svg>
</div>
<h3 className="font-medium text-slate-900">Technical Skills</h3>
<p className="text-sm text-slate-500 mt-2">Electronics background with strong digital literacy.</p>
</div>
<div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-300 transition-colors duration-300 shadow-sm group">
<div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify text-xl iconify--lucide" data-icon="lucide:users-2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M18 21a8 8 0 0 0-16 0"></path><circle cx="10" cy="8" r="5"></circle><path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"></path></g></svg>
</div>
<h3 className="font-medium text-slate-900">Leadership</h3>
<p className="text-sm text-slate-500 mt-2">Proven track record of managing teams and large-scale projects.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-100" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 max-w-2xl mx-auto">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight">Services Offered</h2>
<p className="text-slate-500 mt-3">Tailored solutions for your health, business, and digital needs.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
<div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-[0.02] rounded-2xl transition-opacity"></div>
<svg aria-hidden="true" className="iconify text-3xl text-blue-600 mb-6 iconify--lucide" data-icon="lucide:stethoscope" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11 2v2M5 2v2m0-1H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"></path><path d="M8 15a6 6 0 0 0 12 0v-3"></path><circle cx="20" cy="10" r="2"></circle></g></svg>
<h3 className="text-lg font-medium text-slate-900 mb-2">Health Counseling</h3>
<p className="text-sm text-slate-500">Personalized guidance on hydration, diet, and wellness habits.</p>
</div>

<div className="group relative bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
<div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-[0.02] rounded-2xl transition-opacity"></div>
<svg aria-hidden="true" className="iconify text-3xl text-blue-600 mb-6 iconify--lucide" data-icon="lucide:graduation-cap" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0zM22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></g></svg>
<h3 className="text-lg font-medium text-slate-900 mb-2">Training &amp; Mentorship</h3>
<p className="text-sm text-slate-500">Structured coaching for business growth and direct selling success.</p>
</div>

<div className="group relative bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
<div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-[0.02] rounded-2xl transition-opacity"></div>
<svg aria-hidden="true" className="iconify text-3xl text-blue-600 mb-6 iconify--lucide" data-icon="lucide:pen-tool" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path><path d="m18 13l-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18M2.3 2.3l7.286 7.286"></path><circle cx="11" cy="11" r="2"></circle></g></svg>
<h3 className="text-lg font-medium text-slate-900 mb-2">Graphic Design</h3>
<p className="text-sm text-slate-500">Creative visuals and branding materials for your business.</p>
</div>

<div className="group relative bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
<div className="group-hover:opacity-[0.02] transition-opacity bg-blue-600 opacity-0 rounded-2xl absolute top-0 right-0 bottom-0 left-0"></div>
<svg aria-hidden="true" className="iconify text-3xl text-blue-600 mb-6 iconify--lucide" data-icon="lucide:sparkles" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg>
<h3 className="text-lg font-medium text-slate-900 mb-2">AI Solutions</h3>
<p className="text-sm text-slate-500">Integrating AI tools to automate and optimize daily operations.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="projects">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-12">Key Projects &amp; Initiatives</h2>
<div className="grid lg:grid-cols-3 gap-8">

<div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm flex flex-col">
<div className="h-48 bg-slate-100 relative overflow-hidden group">

<div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-slate-50"></div>
<div className="absolute bottom-4 left-4 p-2 bg-white/90 backdrop-blur rounded-lg shadow-sm">
<svg aria-hidden="true" className="iconify text-blue-600 text-xl iconify--lucide" data-icon="lucide:network" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="6" rx="1" width="6" x="16" y="16"></rect><rect height="6" rx="1" width="6" x="2" y="16"></rect><rect height="6" rx="1" width="6" x="9" y="2"></rect><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3m-7-4V8"></path></g></svg>
</div>
</div>
<div className="p-6 flex-1 flex flex-col">
<div className="mb-4">
<span className="text-xs font-semibold tracking-wider text-blue-600 uppercase">Government Initiative</span>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-2">PMGDISHA Digital Literacy</h3>
<p className="text-slate-500 text-sm flex-1 leading-relaxed">
                            Contributed to India’s digital movement by managing literacy programs across the Panchmahal district, empowering rural communities with essential digital skills.
                        </p>
</div>
</div>

<div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm flex flex-col">
<div className="h-48 bg-slate-100 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-slate-50"></div>
<div className="absolute bottom-4 left-4 p-2 bg-white/90 backdrop-blur rounded-lg shadow-sm">
<svg aria-hidden="true" className="iconify text-blue-600 text-xl iconify--lucide" data-icon="lucide:briefcase" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></g></svg>
</div>
</div>
<div className="p-6 flex-1 flex flex-col">
<div className="mb-4">
<span className="text-xs font-semibold tracking-wider text-blue-600 uppercase">Mentorship</span>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-2">Enagic Business Coaching</h3>
<p className="text-slate-500 text-sm flex-1 leading-relaxed">
                            Developed a structured coaching program to train individuals in building sustainable health and direct selling businesses, creating a network of successful entrepreneurs.
                        </p>
</div>
</div>

<div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm flex flex-col">
<div className="h-48 bg-slate-100 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-slate-50"></div>
<div className="absolute bottom-4 left-4 p-2 bg-white/90 backdrop-blur rounded-lg shadow-sm">
<svg aria-hidden="true" className="iconify text-blue-600 text-xl iconify--lucide" data-icon="lucide:users" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></g></svg>
</div>
</div>
<div className="p-6 flex-1 flex flex-col">
<div className="mb-4">
<span className="text-xs font-semibold tracking-wider text-blue-600 uppercase">Community</span>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-2">Health Awareness Workshops</h3>
<p className="text-slate-500 text-sm flex-1 leading-relaxed">
                            Organized and conducted seminars and family wellness sessions focusing on the importance of hydration and preventative health measures.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16">

<div className="space-y-8">
<div>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight">Let's Connect</h2>
<p className="text-slate-500 mt-3 text-lg">Ready to transform your health or business? Reach out for a consultation.</p>
</div>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center shrink-0">
<svg aria-hidden="true" className="iconify text-slate-700 iconify--lucide" data-icon="lucide:phone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Phone &amp; WhatsApp</p>
<a className="text-blue-600 hover:text-blue-700 font-medium" href="tel:+917984671664">+91 7984671664</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center shrink-0">
<svg aria-hidden="true" className="iconify text-slate-700 iconify--lucide" data-icon="lucide:map-pin" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Location</p>
<p className="text-slate-500">Godhra, Gujarat, India (Available for Remote Services)</p>
</div>
</div>
</div>

<div className="w-full h-48 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-center text-slate-400">
<span className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:map" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0zm.894.211v15M9 3.236v15" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Map View
                        </span>
</div>
</div>

<div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
<form action="#" className="space-y-6">
<div>
<label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="name">Full Name</label>
<input className="w-full px-4 py-3 bg-white rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm" id="name" placeholder="John Doe" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="email">Email Address</label>
<input className="w-full px-4 py-3 bg-white rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm" id="email" placeholder="john@example.com" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="message">Message</label>
<textarea className="w-full px-4 py-3 bg-white rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm resize-none" id="message" placeholder="Tell me about your goals..." rows="4"></textarea>
</div>
<button className="w-full py-3.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-2" type="button">
                            Book Consultation
                            <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:send" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11zm7.318-19.539l-10.94 10.939" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-100 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="bg-slate-900 text-white w-6 h-6 flex items-center justify-center rounded text-xs font-bold">NP</span>
<span className="text-sm font-medium text-slate-900">Naitik Patel</span>
</div>
<p className="text-sm text-slate-400">© 2024 Naitik Patel. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-slate-400 hover:text-blue-600 transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:linkedin" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></g></svg>
</a>
<a className="text-slate-400 hover:text-blue-600 transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:twitter" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="text-slate-400 hover:text-blue-600 transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:instagram" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg>
</a>
</div>
</div>
</footer>

    </>
  );
}
