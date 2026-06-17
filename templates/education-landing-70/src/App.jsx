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
      

<nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-zinc-200/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="tracking-tight font-semibold text-lg text-zinc-900 flex items-center gap-2" href="#">
<div className="w-6 h-6 rounded-lg bg-zinc-900 text-white flex items-center justify-center">
<iconify-icon className="text-xs" icon="solar:star-bold"></iconify-icon>
</div>
                A+ ACADEMY
            </a>
<div className="hidden md:flex gap-8 text-sm text-zinc-500 font-medium">
<a className="hover:text-zinc-900 transition-colors" href="#">Home</a>
<a className="hover:text-zinc-900 transition-colors" href="#why-us">Why Us</a>
<a className="hover:text-zinc-900 transition-colors" href="#excellence">Teachers</a>
<a className="hover:text-zinc-900 transition-colors" href="#courses">Courses</a>
<a className="hover:text-zinc-900 transition-colors" href="#results">Results</a>
</div>
<a className="hover:bg-zinc-800 hover:ring-zinc-800 transition-all duration-200 text-sm font-medium text-white bg-zinc-900 ring-1 ring-inset ring-zinc-900/10 rounded-full px-5 py-2 shadow-sm shadow-zinc-900/10" href="#enroll">
                Contact Us
            </a>
</div>
</nav>

<header className="relative overflow-hidden text-center max-w-7xl mx-auto px-6 pt-32 pb-24">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] max-w-3xl opacity-60 pointer-events-none -z-10 bg-gradient-to-b from-indigo-50 via-white to-transparent blur-3xl"></div>
<div className="relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white text-zinc-600 text-xs font-medium mb-8 ring-1 ring-inset ring-zinc-200/80 shadow-sm hover:ring-zinc-300 transition-colors cursor-default">
<span className="flex items-center justify-center w-5 h-5 rounded-full bg-amber-50 text-amber-500">
<iconify-icon icon="solar:star-fall-linear" strokeWidth="1.5"></iconify-icon>
</span>
            First Band 9 Teacher in Khorezm
        </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6 relative leading-[1.1] bg-clip-text text-transparent bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-500 pb-2">
            Aim higher. <br className="hidden md:block"/> Score perfect.
        </h1>
<p className="relative text-base md:text-lg text-zinc-500 max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
            Premium English and SAT preparation led by the region's top educators. Experience proven methodologies designed for ambitious minds.
        </p>
<div className="relative flex flex-col sm:flex-row justify-center items-center gap-4">
<a className="w-full sm:w-auto bg-zinc-900 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-zinc-800 shadow-lg shadow-zinc-900/20 ring-1 ring-inset ring-white/10 transition-all flex items-center justify-center gap-2" href="#courses">
                Explore Programs
                <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="w-full sm:w-auto bg-white text-zinc-900 px-6 py-3 rounded-full text-sm font-medium ring-1 ring-inset ring-zinc-200 hover:ring-zinc-300 hover:bg-zinc-50 transition-all shadow-sm flex items-center justify-center gap-2" href="#excellence">
                Meet our Band 9 Expert
            </a>
</div>
</header>

<section className="bg-zinc-50/50 border-t border-zinc-200/50 py-24 relative" id="why-us">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold mb-4 text-zinc-900">Why choose A+ Academy</h2>
<p className="text-sm md:text-base text-zinc-500 font-normal leading-relaxed">We combine elite instruction with modern learning environments to help you achieve your highest potential.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

<div className="p-8 rounded-3xl bg-white ring-1 ring-inset ring-zinc-200/60 shadow-sm shadow-zinc-100 hover:shadow-md hover:shadow-zinc-200/50 hover:ring-zinc-200 transition-all duration-300 group">
<div className="w-12 h-12 bg-indigo-50 ring-1 ring-inset ring-indigo-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-indigo-100 transition-all duration-300">
<iconify-icon className="text-indigo-600 text-xl" icon="solar:star-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight font-semibold mb-2 text-zinc-900">Elite Instructors</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Learn directly from top-tier educators, including the region's only IELTS Band 9.0 scorer.</p>
</div>

<div className="p-8 rounded-3xl bg-white ring-1 ring-inset ring-zinc-200/60 shadow-sm shadow-zinc-100 hover:shadow-md hover:shadow-zinc-200/50 hover:ring-zinc-200 transition-all duration-300 group">
<div className="w-12 h-12 bg-emerald-50 ring-1 ring-inset ring-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-100 transition-all duration-300">
<iconify-icon className="text-emerald-600 text-xl" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight font-semibold mb-2 text-zinc-900">Proven Methodology</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Our curriculum is built on tested frameworks that consistently produce high-scoring students.</p>
</div>

<div className="p-8 rounded-3xl bg-white ring-1 ring-inset ring-zinc-200/60 shadow-sm shadow-zinc-100 hover:shadow-md hover:shadow-zinc-200/50 hover:ring-zinc-200 transition-all duration-300 group">
<div className="w-12 h-12 bg-sky-50 ring-1 ring-inset ring-sky-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-sky-100 transition-all duration-300">
<iconify-icon className="text-sky-600 text-xl" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight font-semibold mb-2 text-zinc-900">Small Cohorts</h3>
<p className="text-sm text-zinc-500 leading-relaxed">We keep our classes small to ensure personalized attention and targeted feedback for every student.</p>
</div>
</div>
</div>
</section>

<section className="bg-white py-28 relative overflow-hidden" id="excellence">
<div className="flex flex-col lg:flex-row gap-16 max-w-7xl mx-auto px-6 items-center relative z-10">
<div className="flex-1 w-full lg:max-w-md">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-50 text-zinc-600 text-xs font-medium mb-6 ring-1 ring-inset ring-zinc-200/80">
                    Expertise
                </div>
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold mb-6 text-zinc-900 leading-tight">Learn from the very best in Khorezm.</h2>
<p className="leading-relaxed text-sm md:text-base text-zinc-500 mb-8">We are proud to host the first and only instructor in the Khorezm region to achieve a flawless IELTS Band 9.0. Our students receive unparalleled guidance, rigorous strategies, and direct insights from a perfect scorer.</p>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="mt-1 w-7 h-7 rounded-full bg-indigo-50 ring-1 ring-inset ring-indigo-100 flex items-center justify-center shrink-0">
<iconify-icon className="text-indigo-600 text-sm" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="">
<span className="block text-sm font-semibold text-zinc-900 mb-1">Proven Methodologies</span>
<span className="block text-sm text-zinc-500 leading-relaxed">Frameworks developed through achieving a perfect score.</span>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 w-7 h-7 rounded-full bg-indigo-50 ring-1 ring-inset ring-indigo-100 flex items-center justify-center shrink-0">
<iconify-icon className="text-indigo-600 text-sm" icon="solar:target-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<span className="block text-sm font-semibold text-zinc-900 mb-1">Targeted Feedback</span>
<span className="block text-sm text-zinc-500 leading-relaxed">Continuous assessment loops to identify and eliminate weaknesses.</span>
</div>
</li>
</ul>
</div>
<div className="flex-1 w-full relative">

<div className="p-8 md:p-12 overflow-hidden bg-zinc-950 rounded-[2.5rem] relative shadow-2xl shadow-zinc-900/20 ring-1 ring-inset ring-white/10 group">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 blur-[80px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3 group-hover:bg-indigo-500/20 transition-colors duration-700"></div>
<div className="relative z-10">
<div className="flex items-center gap-3 mb-10">
<div className="h-px w-8 bg-zinc-700"></div>
<span className="uppercase text-xs font-semibold text-zinc-400 tracking-widest">Shohrux Mirzo</span>
</div>
<div className="flex items-end gap-4 mb-4">
<div className="text-7xl md:text-8xl tracking-tight font-semibold text-white bg-clip-text text-transparent bg-gradient-to-br from-white to-zinc-500">9.0</div>
</div>
<div className="text-sm text-zinc-400 mb-12 font-medium">Overall IELTS Band Score</div>
<div className="space-y-4">
<div className="flex justify-between items-center border-b border-white/10 pb-4 text-sm hover:border-white/20 transition-colors">
<span className="flex items-center gap-3 text-zinc-400"><iconify-icon className="text-lg text-indigo-400" icon="solar:headphones-linear" strokeWidth="1.5"></iconify-icon> Listening</span>
<span className="font-semibold text-white text-base">9.0</span>
</div>
<div className="flex justify-between items-center border-b border-white/10 pb-4 text-sm hover:border-white/20 transition-colors">
<span className="text-zinc-400 flex items-center gap-3"><iconify-icon className="text-lg text-emerald-400" icon="solar:book-bookmark-linear" strokeWidth="1.5"></iconify-icon> Reading</span>
<span className="font-semibold text-white text-base">9.0</span>
</div>
<div className="flex justify-between items-center border-b border-white/10 pb-4 text-sm hover:border-white/20 transition-colors">
<span className="text-zinc-400 flex items-center gap-3"><iconify-icon className="text-lg text-amber-400" icon="solar:pen-linear" strokeWidth="1.5"></iconify-icon> Writing</span>
<span className="font-semibold text-white text-base">8.0</span>
</div>
<div className="flex justify-between items-center pb-2 text-sm">
<span className="text-zinc-400 flex items-center gap-3"><iconify-icon className="text-lg text-sky-400" icon="solar:microphone-2-linear" strokeWidth="1.5"></iconify-icon> Speaking</span>
<span className="font-semibold text-white text-base">9.0</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-zinc-50/30 py-28 border-y border-zinc-200/50" id="courses">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold mb-4 text-zinc-900">World-class programs</h2>
<p className="text-sm md:text-base text-zinc-500 font-normal leading-relaxed">Choose from our specialized curriculum designed to take you from foundational understanding to elite test performance.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">

<div className="group p-8 bg-white ring-1 ring-inset ring-zinc-200/60 rounded-3xl hover:shadow-xl hover:shadow-zinc-200/40 hover:ring-zinc-300 transition-all duration-300 flex flex-col relative overflow-hidden">
<div className="flex bg-zinc-50 w-12 h-12 ring-1 ring-inset ring-zinc-200/80 rounded-2xl mb-8 items-center justify-center group-hover:-translate-y-1 transition-transform duration-300">
<iconify-icon className="text-xl text-zinc-700" icon="solar:book-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex items-center gap-3 mb-3">
<h3 className="text-xl font-semibold text-zinc-900 tracking-tight">General English</h3>
</div>
<p className="text-sm text-zinc-500 mb-10 flex-1 leading-relaxed">Master the core fundamentals of the English language. Immersive, interactive lessons designed to build a strong foundation for all proficiency levels.</p>
<div className="pt-6 border-t border-zinc-100">
<a className="flex items-center gap-2 text-sm font-semibold text-zinc-900 group-hover:text-indigo-600 transition-colors" href="#enroll">
                            View details <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>

<div className="group p-8 bg-white ring-1 ring-inset ring-zinc-200/60 rounded-3xl hover:shadow-xl hover:shadow-zinc-200/40 hover:ring-zinc-300 transition-all duration-300 flex flex-col relative overflow-hidden">
<div className="flex bg-zinc-50 w-12 h-12 ring-1 ring-inset ring-zinc-200/80 rounded-2xl mb-8 items-center justify-center group-hover:-translate-y-1 transition-transform duration-300">
<iconify-icon className="text-xl text-zinc-700" icon="solar:pen-new-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex items-center gap-3 mb-3">
<h3 className="text-xl font-semibold text-zinc-900 tracking-tight">PRE-IELTS</h3>
</div>
<p className="text-sm text-zinc-500 mb-10 flex-1 leading-relaxed">Bridge the gap between general fluency and test readiness. Focus on intermediate academic vocabulary, complex grammar, and early test strategies.</p>
<div className="pt-6 border-t border-zinc-100">
<a className="flex items-center gap-2 text-sm font-semibold text-zinc-900 group-hover:text-indigo-600 transition-colors" href="#enroll">
                            View details <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>

<div className="group p-8 bg-zinc-950 ring-1 ring-inset ring-white/10 rounded-3xl hover:shadow-2xl hover:shadow-zinc-900/20 transition-all duration-300 flex flex-col relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-3xl rounded-full pointer-events-none -z-10 translate-x-1/2 -translate-y-1/2"></div>
<div className="flex items-center justify-between mb-8">
<div className="flex bg-zinc-900 w-12 h-12 ring-1 ring-inset ring-white/10 rounded-2xl items-center justify-center group-hover:-translate-y-1 transition-transform duration-300">
<iconify-icon className="text-white text-xl" icon="solar:diploma-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xs font-semibold text-zinc-950 bg-white rounded-full px-3 py-1 shadow-sm">Most popular</span>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-3">IELTS</h3>
<p className="text-sm text-zinc-400 mb-10 flex-1 leading-relaxed">Our premium course. Taught directly by the region's only Band 9 instructor. Intensive practice, strict mock exams, and elite strategic breakdowns.</p>
<div className="pt-6 border-t border-white/10">
<a className="flex items-center gap-2 text-sm font-semibold text-white group-hover:text-indigo-400 transition-colors" href="#enroll">
                            View details <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>

<div className="group p-8 bg-white ring-1 ring-inset ring-zinc-200/60 rounded-3xl hover:shadow-xl hover:shadow-zinc-200/40 hover:ring-zinc-300 transition-all duration-300 flex flex-col relative overflow-hidden">
<div className="flex bg-zinc-50 w-12 h-12 ring-1 ring-inset ring-zinc-200/80 rounded-2xl mb-8 items-center justify-center group-hover:-translate-y-1 transition-transform duration-300">
<iconify-icon className="text-xl text-zinc-700" icon="solar:notebook-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex items-center gap-3 mb-3">
<h3 className="text-xl font-semibold text-zinc-900 tracking-tight">SAT</h3>
</div>
<p className="text-sm text-zinc-500 mb-10 flex-1 leading-relaxed">Comprehensive reasoning and math preparation for students aiming to secure admission and scholarships to top-tier international universities.</p>
<div className="pt-6 border-t border-zinc-100">
<a className="flex items-center gap-2 text-sm font-semibold text-zinc-900 group-hover:text-indigo-600 transition-colors" href="#enroll">
                            View details <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white py-28" id="results">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold mb-4 text-zinc-900">Proven track record</h2>
<p className="text-sm md:text-base text-zinc-500 font-normal leading-relaxed">Numbers that speak for themselves. We consistently deliver exceptional outcomes across all proficiency levels.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-10">
<div className="bg-zinc-50/50 ring-1 ring-inset ring-zinc-200/60 rounded-3xl p-10 text-center flex flex-col items-center justify-center">
<div className="text-5xl md:text-6xl tracking-tight font-semibold text-zinc-900 mb-3">200+</div>
<div className="text-sm text-zinc-500 font-medium">IELTS Band 7.0+ Achieved</div>
</div>
<div className="bg-zinc-50/50 ring-1 ring-inset ring-zinc-200/60 rounded-3xl p-10 text-center flex flex-col items-center justify-center">
<div className="text-5xl md:text-6xl tracking-tight font-semibold text-zinc-900 mb-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-indigo-400">3000+</div>
<div className="text-sm text-zinc-500 font-medium">Students reached CEFR B2</div>
</div>
<div className="bg-zinc-50/50 ring-1 ring-inset ring-zinc-200/60 rounded-3xl p-10 text-center flex flex-col items-center justify-center">
<div className="text-5xl md:text-6xl tracking-tight font-semibold text-zinc-900 mb-3">50%</div>
<div className="text-sm text-zinc-500 font-medium">C1 Advanced Success Rate</div>
</div>
</div>

<div className="bg-zinc-900 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-center gap-5 shadow-xl shadow-zinc-900/10 text-center sm:text-left relative overflow-hidden">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e510_1px,transparent_1px),linear-gradient(to_bottom,#4f46e510_1px,transparent_1px)] bg-[size:14px_24px]"></div>
<div className="w-12 h-12 rounded-full bg-zinc-800 ring-1 ring-inset ring-white/10 flex items-center justify-center shrink-0 relative z-10">
<iconify-icon className="text-white text-xl" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="relative z-10">
<span className="block text-sm font-semibold text-white mb-0.5">Guaranteed Foundation</span>
<span className="block text-sm text-zinc-400">To date, no student completing our full program has scored below Band 5.5.</span>
</div>
</div>
</div>
</section>

<section className="py-28 bg-zinc-50/50 border-t border-zinc-200/50 mt-auto relative" id="enroll">
<div className="max-w-xl mx-auto px-6 text-center relative z-10">
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold mb-4 text-zinc-900">Ready to start?</h2>
<p className="text-sm md:text-base text-zinc-500 mb-10 leading-relaxed">Join the top-performing academy in Khorezm and secure your spot in our upcoming cohort.</p>

<div className="flex items-center justify-center gap-4 mb-10">
<span className="text-sm text-zinc-500 font-medium transition-colors peer-has-[:checked]:text-zinc-900">Standard Track</span>
<label className="relative cursor-pointer flex items-center" htmlFor="track-toggle">
<input checked="" className="sr-only peer" id="track-toggle" type="checkbox"/>
<div className="w-11 h-6 bg-zinc-200 rounded-full peer peer-checked:bg-zinc-900 transition-colors duration-300 ease-in-out ring-1 ring-inset ring-black/5"></div>
<div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-300 ease-in-out peer-checked:translate-x-5 shadow-sm ring-1 ring-black/5"></div>
</label>
<span className="text-sm text-zinc-900 font-medium transition-colors peer-has-[:not(:checked)]:text-zinc-500">Intensive Track</span>
</div>
<form className="flex flex-col sm:flex-row gap-3">
<div className="relative flex-1">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<iconify-icon className="text-zinc-400 text-lg" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
</div>
<input className="w-full pl-11 pr-4 py-3.5 bg-white ring-1 ring-inset ring-zinc-200 rounded-xl text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-zinc-400 shadow-sm" placeholder="Email address" required="" type="email"/>
</div>
<button className="bg-zinc-900 text-white px-8 py-3.5 rounded-xl text-sm font-semibold hover:bg-zinc-800 transition-all shadow-md shadow-zinc-900/10 ring-1 ring-inset ring-white/10 whitespace-nowrap active:scale-[0.98]" type="button">
                    Reserve Spot
                </button>
</form>
<p className="mt-6 text-xs text-zinc-400 font-medium flex items-center justify-center gap-1.5">
<iconify-icon className="text-sm" icon="solar:info-circle-linear"></iconify-icon> Spaces are strictly limited for the Band 9 instructed courses.
            </p>
</div>
</section>

<footer className="bg-white py-10 border-t border-zinc-200/50">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="tracking-tight font-semibold text-sm text-zinc-900 flex items-center gap-2">
<div className="w-5 h-5 rounded-[0.4rem] bg-zinc-900 text-white flex items-center justify-center">
<iconify-icon className="text-[10px]" icon="solar:star-bold"></iconify-icon>
</div>
                A+ ACADEMY
            </div>
<div className="flex items-center gap-8 text-sm text-zinc-500 font-medium">
<a className="hover:text-zinc-900 transition-colors" href="#">Privacy</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Terms</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Contact</a>
</div>
<div className="text-sm text-zinc-400 font-medium">
                © 2023 A+ Academy. All rights reserved.
            </div>
</div>
</footer>

    </>
  );
}
