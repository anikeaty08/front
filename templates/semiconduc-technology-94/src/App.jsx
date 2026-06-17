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



        lucide.createIcons();
    
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
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
<span className="text-white font-semibold text-sm">SV</span>
</div>
<span className="font-semibold text-lg tracking-tight">Si-Vision</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-gray-600 hover:text-gray-900 transition" href="#">About</a>
<a className="text-sm text-gray-600 hover:text-gray-900 transition" href="#">Industries</a>
<a className="text-sm text-gray-600 hover:text-gray-900 transition" href="#">Knowledge</a>
<a className="text-sm text-gray-600 hover:text-gray-900 transition" href="#">Careers</a>
<a className="text-sm text-gray-600 hover:text-gray-900 transition" href="#">Academy</a>
<a className="text-sm text-gray-600 hover:text-gray-900 transition" href="#">Culture</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:inline-flex text-sm font-medium text-gray-900 hover:text-gray-600 transition" href="#">Contact Us</a>
<button className="md:hidden">
<i className="w-5 h-5" data-lucide="menu" style={{strokeWidth: '1.5'}}></i>
</button>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"></div>
<div className="absolute inset-0 opacity-30">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920')] bg-cover bg-center"></div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
<div className="relative max-w-7xl mx-auto px-6 lg:px-8">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-6">
<span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
<span className="text-sm text-white/80">Now partnering with leading tech companies</span>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-tight mb-6">
                    Your AI-Augmented Innovation Design Partner
                </h1>
<p className="text-lg text-white/70 mb-8 max-w-xl">
                    Delivering world-class semiconductor solutions with cutting-edge technology and proven expertise across multiple domains.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition" href="#">
                        Explore More
                        <i className="w-4 h-4" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</a>
<a className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition" href="#">
<i className="w-4 h-4" data-lucide="play" style={{strokeWidth: '1.5'}}></i>
                        Watch Demo
                    </a>
</div>
</div>
</div>
</section>

<section className="py-12 border-b border-gray-100">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<p className="text-center text-sm text-gray-500 mb-8">Trusted by industry leaders worldwide</p>
<div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16 opacity-50">
<div className="h-8 w-24 bg-gray-300 rounded"></div>
<div className="h-8 w-28 bg-gray-300 rounded"></div>
<div className="h-8 w-20 bg-gray-300 rounded"></div>
<div className="h-8 w-24 bg-gray-300 rounded"></div>
<div className="h-8 w-28 bg-gray-300 rounded"></div>
</div>
</div>
</section>

<section className="py-20 lg:py-32">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-16">
<p className="text-sm font-medium text-blue-600 mb-3">CAPABILITIES</p>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-4">Core Capabilities</h2>
<p className="text-base text-gray-600 max-w-2xl mx-auto">
                    Delivering world-class semiconductor solutions across multiple domains with unmatched precision and reliability.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="group p-8 rounded-2xl border border-gray-200 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-100 transition">
<i className="w-6 h-6 text-blue-600" data-lucide="cpu" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3">End-to-End IP Development</h3>
<p className="text-base text-gray-600 leading-relaxed">
                        From initial specification and system modeling to fully verified, silicon-proven designs, ensuring seamless integration and exceptional performance.
                    </p>
</div>
<div className="group p-8 rounded-2xl border border-gray-200 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center mb-6 group-hover:bg-purple-100 transition">
<i className="w-6 h-6 text-purple-600" data-lucide="shield-check" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3">High-Quality Verification</h3>
<p className="text-base text-gray-600 leading-relaxed">
                        Applying best-in-class verification methodologies and silicon characterization procedures that guarantee functional correctness and reliability.
                    </p>
</div>
<div className="group p-8 rounded-2xl border border-gray-200 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center mb-6 group-hover:bg-green-100 transition">
<i className="w-6 h-6 text-green-600" data-lucide="badge-check" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3">Certified Industry Compliance</h3>
<p className="text-base text-gray-600 leading-relaxed">
                        From consumer electronics protocols to automotive grade, full qualification process guaranteed to ensure completely industry adherence.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32 bg-gray-50">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-16">
<p className="text-sm font-medium text-blue-600 mb-3">INDUSTRIES</p>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-4">Industries We Serve</h2>
<p className="text-base text-gray-600 max-w-2xl mx-auto">
                    Powering innovation across multiple sectors with cutting-edge semiconductor solutions.
                </p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
<a className="group relative aspect-[4/5] rounded-2xl overflow-hidden" href="#">
<img alt="AI &amp; HPC" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500" src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-6">
<h3 className="text-lg font-medium text-white tracking-tight">AI &amp; HPC</h3>
<p className="text-sm text-white/60 mt-1">High performance computing</p>
</div>
</a>
<a className="group relative aspect-[4/5] rounded-2xl overflow-hidden" href="#">
<img alt="Data Centers" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-6">
<h3 className="text-lg font-medium text-white tracking-tight">DC &amp; Cloud</h3>
<p className="text-sm text-white/60 mt-1">Cloud computing</p>
</div>
</a>
<a className="group relative aspect-[4/5] rounded-2xl overflow-hidden" href="#">
<img alt="Automotive" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500" src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=600"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-6">
<h3 className="text-lg font-medium text-white tracking-tight">Automotive</h3>
<p className="text-sm text-white/60 mt-1">Next-gen vehicles</p>
</div>
</a>
<a className="group relative aspect-[4/5] rounded-2xl overflow-hidden" href="#">
<img alt="Consumer Electronics" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500" src="https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=600"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-6">
<h3 className="text-lg font-medium text-white tracking-tight">Consumer</h3>
<p className="text-sm text-white/60 mt-1">Electronics</p>
</div>
</a>
<a className="group relative aspect-[4/5] rounded-2xl overflow-hidden" href="#">
<img alt="Healthcare" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500" src="https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-6">
<h3 className="text-lg font-medium text-white tracking-tight">Healthcare</h3>
<p className="text-sm text-white/60 mt-1">Medical devices</p>
</div>
</a>
</div>
</div>
</section>

<section className="py-20 lg:py-32">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12">
<div>
<p className="text-sm font-medium text-blue-600 mb-3">INSIGHTS</p>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-4">Knowledge Center</h2>
<p className="text-base text-gray-600 max-w-xl">
                        Stay informed with the latest insights and research in semiconductor technology.
                    </p>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 mt-4 sm:mt-0" href="#">
                    View all articles
                    <i className="w-4 h-4" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</a>
</div>
<div className="grid md:grid-cols-3 gap-8">
<article className="group">
<a className="block aspect-[16/10] rounded-xl overflow-hidden mb-5" href="#">
<img alt="AI Evolution" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600"/>
</a>
<div className="flex items-center gap-3 mb-3">
<span className="px-2.5 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full">AI Evolution</span>
<span className="text-sm text-gray-500">10 min read</span>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2 group-hover:text-blue-600 transition">
<a href="#">From Past to Present: The Evolution of AI and the Rise of Meta-Learning</a>
</h3>
<p className="text-base text-gray-600 mb-4 line-clamp-2">
                        Exploring the transformative journey of artificial intelligence and its impact on semiconductor design.
                    </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-200"></div>
<span className="text-sm text-gray-600">Ahmed Ehab</span>
</div>
</article>
<article className="group">
<a className="block aspect-[16/10] rounded-xl overflow-hidden mb-5" href="#">
<img alt="Chip Verification" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=600"/>
</a>
<div className="flex items-center gap-3 mb-3">
<span className="px-2.5 py-1 bg-purple-50 text-purple-600 text-xs font-medium rounded-full">Verification</span>
<span className="text-sm text-gray-500">15 min read</span>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2 group-hover:text-blue-600 transition">
<a href="#">Bridging Design Verification Gaps with Formal Verification</a>
</h3>
<p className="text-base text-gray-600 mb-4 line-clamp-2">
                        Understanding the critical role of formal verification in modern chip design workflows.
                    </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-200"></div>
<span className="text-sm text-gray-600">Yasmin Maysaeen</span>
</div>
</article>
<article className="group">
<a className="block aspect-[16/10] rounded-xl overflow-hidden mb-5" href="#">
<img alt="RF Technology" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600"/>
</a>
<div className="flex items-center gap-3 mb-3">
<span className="px-2.5 py-1 bg-green-50 text-green-600 text-xs font-medium rounded-full">RF Technology</span>
<span className="text-sm text-gray-500">12 min read</span>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2 group-hover:text-blue-600 transition">
<a href="#">Addressing RF Coupling in Wireless SoC System Design</a>
</h3>
<p className="text-base text-gray-600 mb-4 line-clamp-2">
                        Best practices for managing RF interference in complex system-on-chip architectures.
                    </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-200"></div>
<span className="text-sm text-gray-600">Karim Salah</span>
</div>
</article>
</div>
</div>
</section>

<section className="py-20 lg:py-32 bg-gradient-to-br from-slate-900 to-slate-800">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
<div>
<p className="text-sm font-medium text-blue-400 mb-3">ACADEMY</p>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-white mb-6">Si-Vision Academy</h2>
<p className="text-lg text-gray-400 mb-8">
                        Launch your career in semiconductor technology through our comprehensive training programs, internships, and graduation projects.
                    </p>
<div className="space-y-4 mb-10">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5 text-blue-400" data-lucide="briefcase" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<h4 className="font-medium text-white mb-1">Internship Programs</h4>
<p className="text-base text-gray-400">Hands-on experience working alongside industry experts</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5 text-purple-400" data-lucide="graduation-cap" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<h4 className="font-medium text-white mb-1">Graduation Projects</h4>
<p className="text-base text-gray-400">Collaborate on cutting-edge research and development initiatives</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5 text-green-400" data-lucide="layers" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<h4 className="font-medium text-white mb-1">Specialized Tracks</h4>
<p className="text-base text-gray-400">Chip Design, Verification, Manufacturing, and AI Hardware paths</p>
</div>
</div>
</div>
<div className="grid grid-cols-3 gap-8">
<div>
<div className="text-3xl lg:text-4xl font-semibold text-white tracking-tight">1100+</div>
<p className="text-sm text-gray-400 mt-1">Students Trained</p>
</div>
<div>
<div className="text-3xl lg:text-4xl font-semibold text-white tracking-tight">80%</div>
<p className="text-sm text-gray-400 mt-1">Hire Rate</p>
</div>
<div>
<div className="text-3xl lg:text-4xl font-semibold text-white tracking-tight">6</div>
<p className="text-sm text-gray-400 mt-1">Training Programs</p>
</div>
</div>
</div>
<div className="relative">
<div className="aspect-[4/3] rounded-2xl overflow-hidden">
<img alt="Academy" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800"/>
</div>
<div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
<i className="w-5 h-5 text-green-600" data-lucide="check" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<p className="font-medium text-gray-900">Applications Open</p>
<p className="text-sm text-gray-500">Spring 2025 Cohort</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-16">
<p className="text-sm font-medium text-blue-600 mb-3">CAREERS</p>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-4">Build Your Future With Us</h2>
<p className="text-base text-gray-600 max-w-2xl mx-auto">
                    Join our team of innovators and help shape the next generation of semiconductor technology.
                </p>
</div>
<div className="grid md:grid-cols-2 gap-6 mb-8">
<div className="p-6 rounded-xl border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-3">
<span className="px-2.5 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full">Cairo</span>
<span className="px-2.5 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">Full-time</span>
</div>
<span className="text-sm text-gray-500">Posted 2 days ago</span>
</div>
<h3 className="text-xl font-medium tracking-tight mb-2">Staff Emulation Engineer</h3>
<p className="text-base text-gray-600 mb-4">
                        This role is crucial for building a robust C-based emulation environment, and will be responsible for defining C-based emulation flows.
                    </p>
<div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
<span className="flex items-center gap-1">
<i className="w-4 h-4" data-lucide="clock" style={{strokeWidth: '1.5'}}></i>
                            7+ years
                        </span>
<span>Verilog</span>
<span>ASIC</span>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700" href="#">
                        Apply now
                        <i className="w-4 h-4" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</a>
</div>
<div className="p-6 rounded-xl border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-3">
<span className="px-2.5 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full">Cairo</span>
<span className="px-2.5 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">Full-time</span>
</div>
<span className="text-sm text-gray-500">Posted 5 days ago</span>
</div>
<h3 className="text-xl font-medium tracking-tight mb-2">ASIC Physical Design Team Leader</h3>
<p className="text-base text-gray-600 mb-4">
                        This role is responsible for leading a group of engineers to deliver challenging projects on schedule successfully.
                    </p>
<div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
<span className="flex items-center gap-1">
<i className="w-4 h-4" data-lucide="clock" style={{strokeWidth: '1.5'}}></i>
                            7+ years
                        </span>
<span>RTL</span>
<span>TCL</span>
<span>Perl</span>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700" href="#">
                        Apply now
                        <i className="w-4 h-4" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</a>
</div>
</div>
<div className="text-center">
<a className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition" href="#">
                    View All Open Positions
                    <i className="w-4 h-4" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</a>
</div>
</div>
</section>

<section className="py-20 lg:py-32 bg-gray-50">
<div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-4">Ready to innovate together?</h2>
<p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
                Let's discuss how Si-Vision can help you achieve your semiconductor design goals.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition" href="#">
                    Get in Touch
                    <i className="w-4 h-4" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</a>
<a className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-white transition" href="#">
                    Schedule a Demo
                </a>
</div>
</div>
</section>

<footer className="bg-slate-900 text-white py-16">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
<div className="lg:col-span-2">
<div className="flex items-center gap-2 mb-4">
<div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
<span className="text-white font-semibold text-sm">SV</span>
</div>
<span className="font-semibold text-lg tracking-tight">Si-Vision</span>
</div>
<p className="text-base text-gray-400 mb-6 max-w-xs">
                        Your AI-Augmented Innovation Design Partner for world-class semiconductor solutions.
                    </p>
<div className="flex items-center gap-4">
<a className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition" href="#">
<i className="w-5 h-5" data-lucide="facebook" style={{strokeWidth: '1.5'}}></i>
</a>
<a className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition" href="#">
<i className="w-5 h-5" data-lucide="linkedin" style={{strokeWidth: '1.5'}}></i>
</a>
<a className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition" href="#">
<i className="w-5 h-5" data-lucide="mail" style={{strokeWidth: '1.5'}}></i>
</a>
</div>
</div>
<div>
<h4 className="font-medium mb-4">Company</h4>
<ul className="space-y-3">
<li><a className="text-base text-gray-400 hover:text-white transition" href="#">About Us</a></li>
<li><a className="text-base text-gray-400 hover:text-white transition" href="#">Industries</a></li>
<li><a className="text-base text-gray-400 hover:text-white transition" href="#">Careers</a></li>
<li><a className="text-base text-gray-400 hover:text-white transition" href="#">Culture</a></li>
</ul>
</div>
<div>
<h4 className="font-medium mb-4">Resources</h4>
<ul className="space-y-3">
<li><a className="text-base text-gray-400 hover:text-white transition" href="#">Knowledge Center</a></li>
<li><a className="text-base text-gray-400 hover:text-white transition" href="#">Events</a></li>
<li><a className="text-base text-gray-400 hover:text-white transition" href="#">Academy</a></li>
<li><a className="text-base text-gray-400 hover:text-white transition" href="#">Documentation</a></li>
</ul>
</div>
<div>
<h4 className="font-medium mb-4">Contact Us</h4>
<ul className="space-y-3">
<li className="flex items-start gap-2 text-base text-gray-400">
<i className="w-5 h-5 mt-0.5 flex-shrink-0" data-lucide="map-pin" style={{strokeWidth: '1.5'}}></i>
<span>Square 942, Al Esse Salah Zaki St, Sheraton Heliopolis, Cairo</span>
</li>
</ul>
</div>
</div>
<div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-sm text-gray-500">© 2025 Si-Vision. All rights reserved.</p>
<div className="flex items-center gap-6">
<a className="text-sm text-gray-500 hover:text-white transition" href="#">Privacy Policy</a>
<a className="text-sm text-gray-500 hover:text-white transition" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
