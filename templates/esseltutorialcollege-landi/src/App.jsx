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
      

<nav className="fixed top-0 w-full z-50 bg-[#0A2A6C]/95 backdrop-blur-md border-b border-white/10 transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex-shrink-0 flex items-center gap-3 cursor-pointer">
<div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-[#0A2A6C]">
<iconify-icon className="text-2xl" icon="solar:hat-graduation-linear"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-white font-bold text-lg leading-none tracking-tight">ESSEL</span>
<span className="text-[#F2C94C] text-xs font-medium tracking-wide uppercase">Tutorial College</span>
</div>
</div>

<div className="hidden md:flex space-x-8 items-center">
<a className="text-slate-200 hover:text-white text-sm font-medium transition-colors" href="#home">Home</a>
<a className="text-slate-200 hover:text-white text-sm font-medium transition-colors" href="#about">About Us</a>
<a className="text-slate-200 hover:text-white text-sm font-medium transition-colors" href="#programs">Programs</a>
<a className="text-slate-200 hover:text-white text-sm font-medium transition-colors" href="#location">Location</a>
<a className="bg-[#F2C94C] text-[#0A2A6C] px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-white transition-all transform hover:scale-105 shadow-lg shadow-[#F2C94C]/20" href="#contact">
                        Enroll Now
                    </a>
</div>

<div className="md:hidden flex items-center">
<button className="text-white hover:text-[#F2C94C] focus:outline-none">
<iconify-icon className="text-3xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#0A2A6C]" id="home">

<div className="absolute inset-0 overflow-hidden">
<div className="absolute -top-40 -right-40 w-96 h-96 bg-[#F2C94C] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
<div className="absolute top-40 -left-40 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

<div className="text-center lg:text-left animate-fade-in">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[#F2C94C] text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur-sm">
<span className="w-2 h-2 rounded-full bg-[#F2C94C] animate-pulse"></span>
                        Admissions Open
                    </div>
<h1 className="text-4xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
                        Unlock Your Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F2C94C] to-yellow-200">Potential</span>
</h1>
<p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                        Expert guidance for <strong className="text-white font-medium">SHS 1, 2 &amp; 3</strong> and dedicated <strong className="text-white font-medium">WASSCE Remedial</strong> preparation. Join a community committed to excellence.
                    </p>
<div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
<a className="w-full sm:w-auto px-8 py-4 bg-[#F2C94C] text-[#0A2A6C] rounded-xl font-bold text-base hover:bg-white hover:scale-[1.02] transition-all shadow-xl shadow-[#F2C94C]/20 flex items-center justify-center gap-2" href="#contact">
                            Enroll Now
                            <iconify-icon className="text-lg stroke-2" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white border border-white/20 rounded-xl font-semibold text-base hover:bg-white/20 transition-all flex items-center justify-center gap-2 backdrop-blur-sm" href="tel:0547889750">
<iconify-icon className="text-xl" icon="solar:phone-calling-linear"></iconify-icon>
                            Call Us
                        </a>
</div>

<div className="mt-10 pt-8 border-t border-white/10 flex items-center justify-center lg:justify-start gap-8 text-slate-400">
<div className="flex items-center gap-2">
<iconify-icon className="text-2xl text-[#F2C94C]" icon="solar:users-group-rounded-linear"></iconify-icon>
<span className="text-sm font-medium">Expert Tutors</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-2xl text-[#F2C94C]" icon="solar:notebook-linear"></iconify-icon>
<span className="text-sm font-medium">Proven Results</span>
</div>
</div>
</div>

<div className="relative lg:h-[600px] flex items-center justify-center animate-fade-in delay-200">
<div className="relative w-full max-w-lg aspect-square">

<div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-white/20 rounded-full blur-2xl"></div>

<div className="absolute top-0 right-0 w-2/3 h-2/3 rounded-3xl overflow-hidden shadow-2xl border-4 border-[#0A2A6C] transform hover:scale-105 transition-transform duration-500 z-20">
<img alt="Students Studying" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A2A6C]/80 to-transparent"></div>
<div className="absolute bottom-4 left-4 text-white">
<p className="text-sm font-bold">Intensive Classes</p>
<p className="text-xs text-white/80">Focused Learning</p>
</div>
</div>

<div className="absolute bottom-0 left-0 w-3/5 h-3/5 rounded-3xl overflow-hidden shadow-2xl border-4 border-[#0A2A6C] transform hover:scale-105 transition-transform duration-500 z-30">
<img alt="Happy Student" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl p-4 shadow-xl z-40 animate-bounce">
<iconify-icon className="text-4xl text-[#0A2A6C]" icon="solar:diploma-verified-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<span className="text-[#0A2A6C] font-semibold tracking-wider text-sm uppercase">Who We Are</span>
<h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4 tracking-tight">Dedicated to Your Academic Success</h2>
<p className="text-slate-600 leading-relaxed">
                    At Essel Tutorial College, we believe every student has the potential to excel. We provide a supportive, disciplined, and rigorous academic environment designed to help students achieve their best results in WASSCE and beyond.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-[#0A2A6C]/20 hover:shadow-lg transition-all group">
<div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-[#0A2A6C] mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:target-linear"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Our Mission</h3>
<p className="text-slate-500 text-sm leading-relaxed">To empower students with the knowledge and confidence required to ace their examinations through personalized attention and expert teaching.</p>
</div>

<div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-[#0A2A6C]/20 hover:shadow-lg transition-all group">
<div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-[#0A2A6C] mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:eye-linear"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Our Vision</h3>
<p className="text-slate-500 text-sm leading-relaxed">To be the leading tutorial college recognized for academic excellence, discipline, and transforming student performance.</p>
</div>

<div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-[#0A2A6C]/20 hover:shadow-lg transition-all group">
<div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-[#0A2A6C] mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:check-circle-linear"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Why Choose Us</h3>
<ul className="text-slate-500 text-sm leading-relaxed space-y-2">
<li className="flex items-center gap-2"><iconify-icon className="text-[#F2C94C]" icon="solar:check-square-linear"></iconify-icon> Experienced Teachers</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#F2C94C]" icon="solar:check-square-linear"></iconify-icon> Conducive Learning Environment</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#F2C94C]" icon="solar:check-square-linear"></iconify-icon> Proven Track Record</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 bg-grid-slate border-y border-slate-200" id="programs">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div className="max-w-xl">
<span className="text-[#0A2A6C] font-semibold tracking-wider text-sm uppercase">Our Programs</span>
<h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 tracking-tight">Tailored Education for Every Stage</h2>
</div>
<a className="inline-flex items-center gap-2 text-[#0A2A6C] font-semibold hover:text-[#F2C94C] transition-colors" href="#contact">
                    View full schedule <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid md:grid-cols-2 gap-8 mb-16">

<div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
<iconify-icon className="text-9xl text-[#0A2A6C]" icon="solar:book-bookmark-linear"></iconify-icon>
</div>
<div className="relative z-10">
<div className="inline-block p-3 bg-blue-50 rounded-xl text-[#0A2A6C] mb-6">
<iconify-icon className="text-3xl" icon="solar:rocket-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-bold text-slate-900 mb-2">Intensive Classes</h3>
<p className="text-slate-500 font-medium mb-6">For SHS 1, 2 &amp; 3 Students</p>
<p className="text-slate-600 mb-8 leading-relaxed">
                            Comprehensive syllabus coverage designed to build a strong foundation. We ensure students stay ahead of their regular school curriculum with in-depth tutorials and regular assessments.
                        </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-[#0A2A6C]" icon="solar:check-circle-linear"></iconify-icon> Syllabus Coverage
                            </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-[#0A2A6C]" icon="solar:check-circle-linear"></iconify-icon> Termly Mock Exams
                            </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-[#0A2A6C]" icon="solar:check-circle-linear"></iconify-icon> Holiday Sessions
                            </li>
</ul>
<button className="w-full py-3 rounded-xl border-2 border-[#0A2A6C] text-[#0A2A6C] font-bold text-sm hover:bg-[#0A2A6C] hover:text-white transition-colors">Learn More</button>
</div>
</div>

<div className="bg-[#0A2A6C] rounded-3xl p-8 shadow-xl shadow-blue-900/20 border border-[#0A2A6C] relative overflow-hidden text-white group">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon className="text-9xl text-white" icon="solar:diploma-linear"></iconify-icon>
</div>
<div className="relative z-10">
<div className="inline-block p-3 bg-white/10 backdrop-blur-md rounded-xl text-[#F2C94C] mb-6 border border-white/20">
<iconify-icon className="text-3xl" icon="solar:restart-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-bold text-white mb-2">Remedial Classes</h3>
<p className="text-blue-200 font-medium mb-6">For WASSCE Candidates</p>
<p className="text-blue-100 mb-8 leading-relaxed">
                            Targeted revision strategies for Private Candidates and Resit students. We focus on past questions, answering techniques, and difficult topics to maximize your grade potential.
                        </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-blue-100">
<iconify-icon className="text-[#F2C94C]" icon="solar:check-circle-linear"></iconify-icon> Past Question Analysis
                            </li>
<li className="flex items-center gap-3 text-sm text-blue-100">
<iconify-icon className="text-[#F2C94C]" icon="solar:check-circle-linear"></iconify-icon> Exam Strategy
                            </li>
<li className="flex items-center gap-3 text-sm text-blue-100">
<iconify-icon className="text-[#F2C94C]" icon="solar:check-circle-linear"></iconify-icon> One-on-One Support
                            </li>
</ul>
<button className="w-full py-3 rounded-xl bg-[#F2C94C] text-[#0A2A6C] font-bold text-sm hover:bg-white transition-colors">Enroll Today</button>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-8 border border-slate-200 text-center">
<h3 className="text-lg font-bold text-slate-900 mb-6 uppercase tracking-wide">Subjects We Offer</h3>
<div className="flex flex-wrap justify-center gap-4">
<span className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:border-[#0A2A6C] hover:text-[#0A2A6C] transition-colors cursor-default">Mathematics (Core &amp; Elective)</span>
<span className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:border-[#0A2A6C] hover:text-[#0A2A6C] transition-colors cursor-default">English Language</span>
<span className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:border-[#0A2A6C] hover:text-[#0A2A6C] transition-colors cursor-default">Integrated Science</span>
<span className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:border-[#0A2A6C] hover:text-[#0A2A6C] transition-colors cursor-default">Physics</span>
<span className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:border-[#0A2A6C] hover:text-[#0A2A6C] transition-colors cursor-default">Chemistry</span>
<span className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:border-[#0A2A6C] hover:text-[#0A2A6C] transition-colors cursor-default">Biology</span>
<span className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:border-[#0A2A6C] hover:text-[#0A2A6C] transition-colors cursor-default">Economics</span>
<span className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:border-[#0A2A6C] hover:text-[#0A2A6C] transition-colors cursor-default">Government</span>
<span className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:border-[#0A2A6C] hover:text-[#0A2A6C] transition-colors cursor-default">Geography</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden" id="location">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="order-2 lg:order-1">
<div className="relative w-full h-[400px] bg-slate-100 rounded-3xl overflow-hidden border border-slate-200">

<div className="absolute inset-0 bg-[#e5e7eb] flex items-center justify-center">

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'repeating-linear-gradient(45deg, #ccc 0, #ccc 1px, transparent 0, transparent 50%)', backgroundSize: '10px 10px'}}></div>

<div className="relative z-10 flex flex-col items-center animate-bounce">
<iconify-icon className="text-6xl text-[#0A2A6C] drop-shadow-lg" icon="solar:map-point-bold"></iconify-icon>
<div className="mt-2 bg-white px-4 py-2 rounded-lg shadow-md text-xs font-bold text-slate-800 whitespace-nowrap">
                                    ESSEL Tutorial College
                                </div>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<span className="text-[#F2C94C] font-semibold tracking-wider text-sm uppercase">Locate Us</span>
<h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-6 tracking-tight">Conveniently Located for Learning</h2>
<p className="text-slate-600 text-lg mb-8 leading-relaxed">
                        We are situated in a serene environment perfect for academic activities, away from distractions but easily accessible.
                    </p>
<div className="flex items-start gap-4 mb-6">
<div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 text-[#0A2A6C]">
<iconify-icon className="text-2xl" icon="solar:map-point-wave-linear"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-bold text-slate-900">Adjen Kotoku</h4>
<p className="text-slate-500">Zoomlion Junction, Accra</p>
<p className="text-sm text-slate-400 mt-1">Easily accessible by public transport</p>
</div>
</div>
<a className="inline-flex items-center gap-2 text-[#0A2A6C] font-bold border-b-2 border-[#0A2A6C] pb-1 hover:text-[#F2C94C] hover:border-[#F2C94C] transition-colors" href="https://maps.google.com" target="_blank">
                        Get Directions on Google Maps
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0A2A6C] relative overflow-hidden" id="contact">

<div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-16">

<div className="text-white">
<span className="text-[#F2C94C] font-semibold tracking-wider text-sm uppercase">Contact Us</span>
<h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 tracking-tight">Join Essel Tutorial College Today!</h2>
<p className="text-blue-100 text-lg mb-10 leading-relaxed font-light">
                        Ready to take the next step in your education? Contact us for admission inquiries, fee details, or to schedule a visit.
                    </p>
<div className="space-y-6">
<div className="flex items-center gap-6 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
<div className="w-12 h-12 rounded-full bg-[#F2C94C] flex items-center justify-center text-[#0A2A6C]">
<iconify-icon className="text-2xl" icon="solar:phone-calling-bold"></iconify-icon>
</div>
<div>
<p className="text-xs text-blue-200 uppercase tracking-wide font-semibold">Call Us Now</p>
<div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-1">
<a className="text-xl font-bold hover:text-[#F2C94C] transition-colors" href="tel:0547889750">0547889750</a>
<span className="hidden sm:inline text-white/30">|</span>
<a className="text-xl font-bold hover:text-[#F2C94C] transition-colors" href="tel:0273427755">0273427755</a>
</div>
</div>
</div>
<div className="flex items-center gap-6 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#0A2A6C]">
<iconify-icon className="text-2xl" icon="solar:letter-linear"></iconify-icon>
</div>
<div>
<p className="text-xs text-blue-200 uppercase tracking-wide font-semibold">Email Us</p>
<a className="text-xl font-bold hover:text-[#F2C94C] transition-colors" href="mailto:info@esseltutorial.com">info@esseltutorial.com</a>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl">
<h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a message</h3>
<form className="space-y-5">
<div className="grid grid-cols-2 gap-5">
<div className="col-span-2 sm:col-span-1">
<label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
<input className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0A2A6C] focus:border-transparent transition-all placeholder-slate-400" placeholder="John" type="text"/>
</div>
<div className="col-span-2 sm:col-span-1">
<label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
<input className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0A2A6C] focus:border-transparent transition-all placeholder-slate-400" placeholder="Doe" type="text"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
<input className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0A2A6C] focus:border-transparent transition-all placeholder-slate-400" placeholder="054..." type="tel"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
<textarea className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0A2A6C] focus:border-transparent transition-all placeholder-slate-400" placeholder="I'm interested in the Intensive classes..." rows="4"></textarea>
</div>
<button className="w-full py-4 bg-[#0A2A6C] text-white rounded-xl font-bold text-base hover:bg-blue-900 transition-all shadow-lg shadow-blue-900/30 flex items-center justify-center gap-2 group" type="button">
                            Send Message 
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:plain-3-bold"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<iconify-icon className="text-2xl text-white" icon="solar:hat-graduation-linear"></iconify-icon>
<span className="text-white font-bold text-lg">ESSEL Tutorial College</span>
</div>
<div className="flex gap-6 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#home">Home</a>
<a className="hover:text-white transition-colors" href="#programs">Programs</a>
<a className="hover:text-white transition-colors" href="#location">Location</a>
<a className="hover:text-white transition-colors" href="#contact">Contact</a>
</div>
<div className="text-xs">
                    © 2023 Essel Tutorial College. All rights reserved.
                </div>
</div>
</div>
</footer>

<a className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform z-50 group" href="https://wa.me/233547889750" target="_blank">
<iconify-icon className="text-3xl" icon="solar:chat-round-dots-linear"></iconify-icon>
<span className="absolute right-full mr-3 bg-white text-slate-900 px-3 py-1 rounded-lg text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg pointer-events-none">
            Chat with us
        </span>
</a>

    </>
  );
}
