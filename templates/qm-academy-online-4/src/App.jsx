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
      

<nav className="fixed top-0 w-full z-50 glass border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
<i className="text-white w-5 h-5" data-lucide="shield-check"></i>
</div>
<span className="text-xl font-semibold tracking-tight text-white">QM Academy</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium hover:text-white transition-colors" href="#">Solutions</a>
<a className="text-sm font-medium hover:text-white transition-colors" href="#">Courses</a>
<a className="text-sm font-medium hover:text-white transition-colors" href="#">Certification</a>
<a className="text-sm font-medium hover:text-white transition-colors" href="#">Pricing</a>
</div>
<div className="flex items-center gap-4">

<button aria-label="Change language to Spanish" className="flex items-center gap-1.5 text-sm font-medium text-slate-400 hover:text-white transition-colors mr-2 group">
<i className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors" data-lucide="globe"></i>
<span>ES</span>
</button>
<div className="h-4 w-px bg-white/10 hidden sm:block"></div>
<a className="hidden md:block text-sm font-medium text-slate-400 hover:text-white" href="#">Log in</a>
<a className="bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all border border-white/5 flex items-center gap-2" href="#">
                    Get Started <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none"></div>
<div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                        New ISO 9001:2024 Modules Available
                    </div>
<h1 className="text-5xl lg:text-7xl font-semibold text-white tracking-tight leading-[1.1]">
                        Build a <span className="gradient-text">Brighter Future</span> through Management.
                    </h1>
<p className="text-lg text-slate-400 max-w-lg leading-relaxed">
                        Master industry standards. Expert-led courses on ISO certification, quality management, and operational excellence for individuals and organizations.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 pt-2">
<button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 rounded-full text-base font-medium transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] flex items-center justify-center gap-2">
                            Start Learning Free
                        </button>
<button className="px-8 py-3.5 rounded-full text-base font-medium text-white border border-white/10 hover:bg-white/5 transition-all flex items-center justify-center gap-2 group">
<i className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" data-lucide="play-circle"></i>
                            How it works
                        </button>
</div>
<div className="flex items-center gap-4 pt-6">
<div className="flex -space-x-3">
<img alt="User" className="w-10 h-10 rounded-full border-2 border-slate-950" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-slate-950" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-slate-950" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
</div>
<div className="text-sm text-slate-400">
<span className="text-white font-medium">4.9/5</span> from 2,500+ students
                        </div>
</div>
</div>

<div className="relative">

<div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900 aspect-[4/5] lg:aspect-square group">
<img alt="Student" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

<div className="absolute bottom-8 left-8 right-8 p-6 bg-slate-950/80 backdrop-blur-md rounded-2xl border border-white/10">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
<i className="w-5 h-5" data-lucide="award"></i>
</div>
<div>
<p className="text-white font-medium text-sm">Course Completed</p>
<p className="text-xs text-slate-400">ISO 27001 Lead Auditor</p>
</div>
</div>
<span className="text-green-400 font-semibold text-sm">98%</span>
</div>
<div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
<div className="bg-gradient-to-r from-blue-500 to-purple-500 w-[98%] h-full rounded-full"></div>
</div>
</div>

<div className="absolute top-8 right-8 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/10 flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-xs font-medium text-white">Live Workshop</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-950 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="text-sm font-medium text-purple-400 uppercase tracking-widest mb-3">How about learn us</h2>
<h3 className="text-3xl lg:text-4xl font-semibold text-white tracking-tight">Opportunity For Online Learning</h3>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-8 rounded-3xl bg-slate-900/50 border border-white/5 hover:border-blue-500/30 transition-colors group">
<div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
<i className="w-6 h-6 text-blue-400" data-lucide="users"></i>
</div>
<h4 className="text-xl font-semibold text-white mb-3">Courses From Experts</h4>
<p className="text-slate-400 text-base leading-relaxed">
                        Learn directly from ISO certified auditors and management veterans with real-world experience.
                    </p>
</div>

<div className="p-8 rounded-3xl bg-gradient-to-br from-blue-900/80 to-purple-900/80 border border-white/10 relative overflow-hidden group">
<div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
<div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 text-white">
<i className="w-6 h-6" data-lucide="book-open"></i>
</div>
<h4 className="text-xl font-semibold text-white mb-3">Over 500+ Quality Topics</h4>
<p className="text-blue-100/80 text-base leading-relaxed mb-6">
                        From Risk Management to Environmental Safety, access our complete library.
                    </p>
<a className="inline-flex items-center gap-2 text-white font-medium text-sm hover:gap-3 transition-all" href="#">
                        Read More <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>

<div className="p-8 rounded-3xl bg-slate-900/50 border border-white/5 hover:border-purple-500/30 transition-colors group">
<div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors">
<i className="w-6 h-6 text-purple-400" data-lucide="video"></i>
</div>
<h4 className="text-xl font-semibold text-white mb-3">Program Video Update</h4>
<p className="text-slate-400 text-base leading-relaxed">
                        Content is updated quarterly to reflect the latest international standards revisions.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-slate-900/20">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="relative">
<div className="grid grid-cols-2 gap-4">
<img alt="Team" className="rounded-2xl border border-white/5 shadow-2xl translate-y-8" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<img alt="Learning" className="rounded-2xl border border-white/5 shadow-2xl" src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-xl p-4 rounded-2xl border border-white/20 flex items-center gap-4 shadow-xl">
<div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center text-white shadow-lg shadow-red-500/30 cursor-pointer hover:scale-105 transition-transform">
<i className="w-5 h-5 fill-current" data-lucide="play"></i>
</div>
<div className="pr-4">
<p className="text-white text-sm font-medium">Quality Video Tutorials</p>
<p className="text-xs text-slate-300">Watch Intro</p>
</div>
</div>
</div>

<div className="space-y-8">
<div className="space-y-4">
<h2 className="text-sm font-medium text-blue-400 uppercase tracking-widest">About Learn Us</h2>
<h3 className="text-3xl lg:text-4xl font-semibold text-white tracking-tight leading-tight">
                            Experience To Online <br/> Learning Center
                        </h3>
<p className="text-lg text-slate-400 leading-relaxed">
                            We bridge the gap between theoretical standards and practical application. Our academy is designed to empower professionals to implement ISO frameworks effectively.
                        </p>
</div>
<div className="flex gap-4">
<button className="bg-white text-slate-950 px-6 py-3 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors">
                            Learn More Us
                        </button>
<button className="px-6 py-3 rounded-lg text-sm font-medium text-white border border-white/10 hover:bg-white/5 transition-colors">
                            How It Work
                        </button>
</div>
<div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/5">
<div>
<p className="text-3xl font-semibold text-white mb-1">250+</p>
<p className="text-sm text-slate-500">Enrolled Learner</p>
</div>
<div>
<p className="text-3xl font-semibold text-white mb-1">236+</p>
<p className="text-sm text-slate-500">Finished Session</p>
</div>
<div>
<p className="text-3xl font-semibold text-white mb-1">99%</p>
<p className="text-sm text-slate-500">Satisfaction Rate</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-sm font-medium text-purple-400 uppercase tracking-widest mb-2">100% Free</h2>
<h3 className="text-3xl font-semibold text-white tracking-tight">Start Learning With Free Courses</h3>
</div>
<a className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center gap-2" href="#">
                    View all courses <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group bg-slate-900 rounded-2xl border border-white/5 overflow-hidden hover:border-blue-500/30 transition-all hover:-translate-y-1">
<div className="aspect-video bg-slate-800 relative overflow-hidden">
<img alt="Course" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&amp;fit=crop&amp;q=80&amp;w=500"/>
<div className="absolute top-3 left-3 bg-blue-600/90 text-white text-xs px-2 py-1 rounded font-medium">Basic Coach</div>
</div>
<div className="p-5">
<h4 className="text-lg font-medium text-white mb-2 group-hover:text-blue-400 transition-colors">ISO 9001 Fundamentals</h4>
<div className="flex items-center gap-1 mb-4">
<i className="w-3 h-3 text-yellow-500 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 text-yellow-500 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 text-yellow-500 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 text-yellow-500 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 text-slate-700 fill-current" data-lucide="star"></i>
<span className="text-xs text-slate-500 ml-1">(2k)</span>
</div>
<div className="flex items-center justify-between pt-4 border-t border-white/5">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-slate-500" data-lucide="book"></i>
<span className="text-xs text-slate-400">12 Lessons</span>
</div>
<span className="text-blue-400 font-semibold text-sm">Free</span>
</div>
</div>
</div>

<div className="group bg-slate-900 rounded-2xl border border-white/5 overflow-hidden hover:border-purple-500/30 transition-all hover:-translate-y-1">
<div className="aspect-video bg-slate-800 relative overflow-hidden">
<img alt="Course" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&amp;fit=crop&amp;q=80&amp;w=500"/>
<div className="absolute top-3 left-3 bg-purple-600/90 text-white text-xs px-2 py-1 rounded font-medium">Advanced</div>
</div>
<div className="p-5">
<h4 className="text-lg font-medium text-white mb-2 group-hover:text-purple-400 transition-colors">Internal Auditing Mastery</h4>
<div className="flex items-center gap-1 mb-4">
<i className="w-3 h-3 text-yellow-500 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 text-yellow-500 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 text-yellow-500 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 text-yellow-500 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 text-yellow-500 fill-current" data-lucide="star"></i>
<span className="text-xs text-slate-500 ml-1">(3.5k)</span>
</div>
<div className="flex items-center justify-between pt-4 border-t border-white/5">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-slate-500" data-lucide="book"></i>
<span className="text-xs text-slate-400">24 Lessons</span>
</div>
<span className="text-white font-semibold text-sm">$49</span>
</div>
</div>
</div>

<div className="group bg-slate-900 rounded-2xl border border-white/5 overflow-hidden hover:border-blue-500/30 transition-all hover:-translate-y-1">
<div className="aspect-video bg-slate-800 relative overflow-hidden">
<img alt="Course" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&amp;fit=crop&amp;q=80&amp;w=500"/>
<div className="absolute top-3 left-3 bg-blue-600/90 text-white text-xs px-2 py-1 rounded font-medium">Management</div>
</div>
<div className="p-5">
<h4 className="text-lg font-medium text-white mb-2 group-hover:text-blue-400 transition-colors">Risk Assessment 101</h4>
<div className="flex items-center gap-1 mb-4">
<i className="w-3 h-3 text-yellow-500 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 text-yellow-500 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 text-yellow-500 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 text-yellow-500 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 text-slate-700 fill-current" data-lucide="star"></i>
<span className="text-xs text-slate-500 ml-1">(850)</span>
</div>
<div className="flex items-center justify-between pt-4 border-t border-white/5">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-slate-500" data-lucide="book"></i>
<span className="text-xs text-slate-400">18 Lessons</span>
</div>
<span className="text-blue-400 font-semibold text-sm">Free</span>
</div>
</div>
</div>

<div className="group bg-slate-900 rounded-2xl border border-white/5 overflow-hidden hover:border-purple-500/30 transition-all hover:-translate-y-1">
<div className="aspect-video bg-slate-800 relative overflow-hidden">
<img alt="Course" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&amp;fit=crop&amp;q=80&amp;w=500"/>
<div className="absolute top-3 left-3 bg-emerald-600/90 text-white text-xs px-2 py-1 rounded font-medium">Safety</div>
</div>
<div className="p-5">
<h4 className="text-lg font-medium text-white mb-2 group-hover:text-purple-400 transition-colors">Health &amp; Safety (ISO 45001)</h4>
<div className="flex items-center gap-1 mb-4">
<i className="w-3 h-3 text-yellow-500 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 text-yellow-500 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 text-yellow-500 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 text-yellow-500 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 text-yellow-500 fill-current" data-lucide="star"></i>
<span className="text-xs text-slate-500 ml-1">(1.2k)</span>
</div>
<div className="flex items-center justify-between pt-4 border-t border-white/5">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-slate-500" data-lucide="book"></i>
<span className="text-xs text-slate-400">30 Lessons</span>
</div>
<span className="text-white font-semibold text-sm">$89</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900/30">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-sm font-medium text-blue-400 uppercase tracking-widest mb-3">Testimonial</h2>
<h3 className="text-3xl font-semibold text-white tracking-tight mb-12">People Talk About Us</h3>
<div className="relative">
<div className="text-yellow-500 flex justify-center gap-1 mb-6">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<blockquote className="text-2xl text-slate-300 font-light leading-relaxed mb-8">
                    "The ISO 9001 implementation course was a game changer for our organization. The structure was clear, concise, and incredibly practical for our auditing team."
                </blockquote>
<div className="flex flex-col items-center">
<img alt="User" className="w-16 h-16 rounded-full border-2 border-blue-500 p-1 mb-3" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<div className="text-white font-medium">Brooklyn Simmons</div>
<div className="text-slate-500 text-sm">Quality Manager, TechCorp</div>
</div>

<button className="absolute top-1/2 -left-12 -translate-y-1/2 p-2 rounded-full border border-white/10 hover:bg-white/10 text-white transition-colors hidden lg:block">
<i className="w-6 h-6" data-lucide="chevron-left"></i>
</button>
<button className="absolute top-1/2 -right-12 -translate-y-1/2 p-2 rounded-full border border-white/10 hover:bg-white/10 text-white transition-colors hidden lg:block">
<i className="w-6 h-6" data-lucide="chevron-right"></i>
</button>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-3xl p-8 lg:p-16 relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

<div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
<div className="grid lg:grid-cols-2 gap-12 relative z-10 items-center">
<div>
<h2 className="text-sm font-medium text-blue-200 uppercase tracking-widest mb-3">New Newsletter</h2>
<h3 className="text-3xl lg:text-4xl font-semibold text-white tracking-tight mb-4">Get Our Every Single Notifications</h3>
<p className="text-blue-100 text-lg leading-relaxed mb-8">
                            Subscribe to get the latest updates on ISO standards changes, new course releases, and exclusive management tips.
                        </p>
<div className="flex items-center gap-6 text-blue-200 text-sm mb-8">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                                Regular Updates
                            </div>
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                                Weekly Insights
                            </div>
</div>
</div>
<div className="bg-white/10 backdrop-blur-sm p-2 rounded-2xl border border-white/10">
<form className="flex flex-col sm:flex-row gap-2">
<input className="flex-1 bg-slate-950/50 border border-white/10 text-white placeholder-slate-400 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/50" placeholder="Enter your email address" type="email"/>
<button className="bg-blue-500 hover:bg-blue-400 text-white font-medium px-8 py-4 rounded-xl transition-colors whitespace-nowrap">
                                Subscribe Now
                            </button>
</form>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-slate-950 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
<div className="col-span-2 lg:col-span-2 pr-8">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
<i className="text-white w-5 h-5" data-lucide="shield-check"></i>
</div>
<span className="text-xl font-semibold text-white">QM Academy</span>
</div>
<p className="text-slate-400 text-base leading-relaxed mb-6">
                        Empowering professionals worldwide with accessible, high-quality management system education and certification pathways.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-slate-900 border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition-all" href="#">
<i className="w-4 h-4" data-lucide="facebook"></i>
</a>
<a className="w-10 h-10 rounded-full bg-slate-900 border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition-all" href="#">
<i className="w-4 h-4" data-lucide="twitter"></i>
</a>
<a className="w-10 h-10 rounded-full bg-slate-900 border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition-all" href="#">
<i className="w-4 h-4" data-lucide="linkedin"></i>
</a>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-6">About</h4>
<ul className="space-y-4 text-slate-400 text-sm">
<li><a className="hover:text-blue-400 transition-colors" href="#">How it works</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Instructors</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Success Stories</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6">Courses</h4>
<ul className="space-y-4 text-slate-400 text-sm">
<li><a className="hover:text-blue-400 transition-colors" href="#">ISO 9001</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">ISO 27001</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Internal Audit</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Risk Mgmt</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6">Support</h4>
<ul className="space-y-4 text-slate-400 text-sm">
<li><a className="hover:text-blue-400 transition-colors" href="#">Help Center</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Contact Us</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Privacy Policy</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
<p>© 2024 QM Academy. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Privacy</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
