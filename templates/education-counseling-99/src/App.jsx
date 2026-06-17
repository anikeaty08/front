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
      

<nav className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/80 border-b border-[#E5E7EB]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">
<div className="flex-shrink-0 flex items-center gap-2">
<iconify-icon className="text-[#2563EB] text-2xl" icon="solar:lightbulb-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-semibold text-slate-900 tracking-tighter text-xl">ASPIRE</span>
</div>
<div className="hidden md:flex space-x-8">
<a className="text-slate-500 hover:text-slate-900 px-3 py-2 text-sm font-medium transition-colors" href="#">Programs</a>
<a className="text-slate-500 hover:text-slate-900 px-3 py-2 text-sm font-medium transition-colors" href="#">Colleges</a>
<a className="text-slate-900 px-3 py-2 text-sm font-medium transition-colors" href="#">About Us</a>
</div>
<div className="hidden md:flex items-center">
<a className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white px-5 py-2 rounded-full text-sm font-medium transition-colors shadow-sm flex items-center gap-2" href="#">
                        Take AI Test
                        <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</div>
</nav>

<section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNFMUUxRTEiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)] z-0"></div>
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#2563EB] text-xs font-medium mb-6">
<iconify-icon icon="solar:star-fall-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
                Your Career Growth Partner
            </div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900 mb-6 leading-tight">
                About ASPIRE – Shaping <br className="hidden md:block"/>
<span className="gradient-text">Successful Careers</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 mb-10 max-w-2xl mx-auto">
                Right Guidance | Smart Decisions | Successful Careers. We blend human expertise with AI to help you find your true potential.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="gradient-bg text-white px-8 py-3.5 rounded-full text-sm font-medium transition-all shadow-sm hover:shadow-md hover:opacity-90 flex items-center justify-center gap-2" href="#">
<iconify-icon className="text-lg" icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon>
                    Take Free AI Career Test
                </a>
<a className="bg-white text-slate-700 border border-[#E5E7EB] px-8 py-3.5 rounded-full text-sm font-medium transition-all hover:bg-slate-50 flex items-center justify-center" href="#story">
                    Discover Our Story
                </a>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-white border-y border-[#E5E7EB]" id="story">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
<div className="relative">
<div className="aspect-square rounded-3xl bg-slate-100 border border-[#E5E7EB] overflow-hidden relative shadow-sm">
<div className="absolute inset-0 bg-gradient-to-tr from-slate-200 to-slate-50 opacity-50"></div>

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-64 h-64 border border-slate-300 rounded-full flex items-center justify-center relative">
<div className="w-48 h-48 border border-[#2563EB]/30 rounded-full flex items-center justify-center relative animate-spin-slow" style={{animationDuration: '20s'}}>
<div className="absolute top-0 w-3 h-3 bg-[#2563EB] rounded-full -mt-1.5"></div>
</div>
<div className="w-32 h-32 border border-[#22C55E]/30 rounded-full flex items-center justify-center relative animate-spin-slow" style={{animationDuration: '15s', animationDirection: 'reverse'}}>
<div className="absolute bottom-0 w-3 h-3 bg-[#22C55E] rounded-full -mb-1.5"></div>
</div>
<iconify-icon className="text-4xl text-slate-400 absolute" icon="solar:compass-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
</div>
<div>
<h2 className="text-sm font-semibold tracking-widest text-[#2563EB] uppercase mb-3">The Problem We Solve</h2>
<h3 className="text-3xl font-semibold tracking-tight text-slate-900 mb-6">Lost after 10th or 12th? You are not alone.</h3>
<div className="space-y-4 text-slate-600 text-base leading-relaxed">
<p>
                            Every year, millions of students stand at a crossroads, overwhelmed by choices, societal pressure, and conflicting advice. The fear of making the "wrong" choice can paralyze even the brightest minds.
                        </p>
<p>
                            We started ASPIRE because we saw a gap. Traditional counseling often relies on outdated assumptions, while online research leads to information overload. Students need clarity, not confusion.
                        </p>
<p>
                            By combining data-driven AI assessments with empathetic, expert counseling, we demystify the journey. We don't just tell you what to do; we help you discover who you are and map the exact steps to get where you belong.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-2 gap-8">

<div className="bg-[#FFFFFF] border border-[#E5E7EB] rounded-2xl p-8 lg:p-10 shadow-sm relative overflow-hidden group">
<div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
<iconify-icon className="text-8xl text-[#2563EB]" icon="solar:target-linear" strokeWidth="1"></iconify-icon>
</div>
<div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6 border border-blue-100">
<iconify-icon className="text-[#2563EB] text-2xl" icon="solar:target-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">Our Mission</h3>
<p className="text-slate-600 leading-relaxed text-base">
                        To empower students with personalized, data-backed insights and expert mentorship, ensuring every career decision is informed, confident, and aligned with their unique strengths.
                    </p>
</div>

<div className="bg-[#FFFFFF] border border-[#E5E7EB] rounded-2xl p-8 lg:p-10 shadow-sm relative overflow-hidden group">
<div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
<iconify-icon className="text-8xl text-[#4F46E5]" icon="solar:eye-linear" strokeWidth="1"></iconify-icon>
</div>
<div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center mb-6 border border-indigo-100">
<iconify-icon className="text-[#4F46E5] text-2xl" icon="solar:eye-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">Our Vision</h3>
<p className="text-slate-600 leading-relaxed text-base">
                        To build a world where no student compromises on their potential due to lack of guidance, creating a generation of fulfilled professionals driving global innovation.
                    </p>
</div>
</div>
</div>
</section>

<section className="border-y border-[#E5E7EB] bg-white py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-[#E5E7EB]">
<div className="text-center px-4">
<div className="text-3xl font-semibold tracking-tight text-slate-900 mb-1">50,000+</div>
<div className="text-sm text-slate-500">Students Guided</div>
</div>
<div className="text-center px-4">
<div className="text-3xl font-semibold tracking-tight text-slate-900 mb-1">500+</div>
<div className="text-sm text-slate-500">Colleges Listed</div>
</div>
<div className="text-center px-4">
<div className="text-3xl font-semibold tracking-tight text-slate-900 mb-1">98%</div>
<div className="text-sm text-slate-500">Placement Rate</div>
</div>
<div className="text-center px-4">
<div className="text-3xl font-semibold tracking-tight text-slate-900 mb-1">50+</div>
<div className="text-sm text-slate-500">Expert Counselors</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">End-to-End Career Ecosystem</h2>
<p className="text-slate-600 text-base">Everything you need to discover, plan, and execute your career journey under one roof.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white border border-[#E5E7EB] p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
<iconify-icon className="text-3xl text-[#2563EB] mb-4" icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="text-lg font-medium text-slate-900 mb-2">AI Career Test</h4>
<p className="text-sm text-slate-500 leading-relaxed">Discover your true strengths, personality traits, and ideal career paths with our scientifically backed assessment.</p>
</div>

<div className="bg-white border border-[#E5E7EB] p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
<iconify-icon className="text-3xl text-[#2563EB] mb-4" icon="solar:buildings-2-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="text-lg font-medium text-slate-900 mb-2">College Recommendation</h4>
<p className="text-sm text-slate-500 leading-relaxed">Get curated lists of institutions that match your profile, budget, and aspirations perfectly.</p>
</div>

<div className="bg-white border border-[#E5E7EB] p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
<iconify-icon className="text-3xl text-[#2563EB] mb-4" icon="solar:diploma-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="text-lg font-medium text-slate-900 mb-2">Admission Guidance</h4>
<p className="text-sm text-slate-500 leading-relaxed">Step-by-step support through application processes, essay reviews, and interview preparation.</p>
</div>

<div className="bg-white border border-[#E5E7EB] p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
<iconify-icon className="text-3xl text-[#2563EB] mb-4" icon="solar:case-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="text-lg font-medium text-slate-900 mb-2">Internship Opportunities</h4>
<p className="text-sm text-slate-500 leading-relaxed">Connect with top companies to gain real-world experience before you graduate.</p>
</div>

<div className="bg-white border border-[#E5E7EB] p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
<iconify-icon className="text-3xl text-[#2563EB] mb-4" icon="solar:star-fall-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="text-lg font-medium text-slate-900 mb-2">Skill Development</h4>
<p className="text-sm text-slate-500 leading-relaxed">Access workshops and courses designed to bridge the gap between academia and industry.</p>
</div>

<div className="bg-slate-50 border border-[#E5E7EB] p-6 rounded-2xl flex flex-col justify-center items-center text-center">
<h4 className="text-lg font-medium text-slate-900 mb-3">Ready to start?</h4>
<a className="text-[#2563EB] font-medium text-sm hover:text-[#1d4ed8] flex items-center gap-1" href="#">
                        Talk to an expert <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-white border-y border-[#E5E7EB]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Your Journey to Success</h2>
<p className="text-slate-600 text-base">A proven framework designed to eliminate guesswork and build confidence.</p>
</div>
<div className="relative">

<div className="hidden md:block absolute top-6 left-0 w-full h-[1px] bg-[#E5E7EB] z-0"></div>
<div className="grid md:grid-cols-4 gap-8 relative z-10">

<div className="relative pl-10 md:pl-0">

<div className="md:hidden absolute left-4 top-8 bottom-[-2rem] w-[1px] bg-[#E5E7EB] z-0"></div>
<div className="w-12 h-12 bg-white border border-[#E5E7EB] rounded-full flex items-center justify-center text-slate-900 font-semibold mb-4 shadow-sm absolute md:relative left-0 top-0 md:mx-auto ring-4 ring-white">
                            1
                        </div>
<div className="md:text-center">
<h4 className="text-base font-medium text-slate-900 mb-2">Discovery</h4>
<p className="text-sm text-slate-500">Take the AI Career Test to map your psychometric profile.</p>
</div>
</div>

<div className="relative pl-10 md:pl-0">
<div className="md:hidden absolute left-4 top-8 bottom-[-2rem] w-[1px] bg-[#E5E7EB] z-0"></div>
<div className="w-12 h-12 bg-[#2563EB] text-white rounded-full flex items-center justify-center font-semibold mb-4 shadow-sm shadow-blue-200 absolute md:relative left-0 top-0 md:mx-auto ring-4 ring-white">
                            2
                        </div>
<div className="md:text-center">
<h4 className="text-base font-medium text-[#2563EB] mb-2">Strategy</h4>
<p className="text-sm text-slate-500">1-on-1 counseling to interpret results and set goals.</p>
</div>
</div>

<div className="relative pl-10 md:pl-0">
<div className="md:hidden absolute left-4 top-8 bottom-[-2rem] w-[1px] bg-[#E5E7EB] z-0"></div>
<div className="w-12 h-12 bg-white border border-[#E5E7EB] rounded-full flex items-center justify-center text-slate-900 font-semibold mb-4 shadow-sm absolute md:relative left-0 top-0 md:mx-auto ring-4 ring-white">
                            3
                        </div>
<div className="md:text-center">
<h4 className="text-base font-medium text-slate-900 mb-2">Action Plan</h4>
<p className="text-sm text-slate-500">Shortlisting colleges and preparing application materials.</p>
</div>
</div>

<div className="relative pl-10 md:pl-0">
<div className="w-12 h-12 bg-white border border-[#E5E7EB] rounded-full flex items-center justify-center text-[#22C55E] font-semibold mb-4 shadow-sm absolute md:relative left-0 top-0 md:mx-auto ring-4 ring-white">
<iconify-icon className="text-xl" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="md:text-center">
<h4 className="text-base font-medium text-slate-900 mb-2">Execution</h4>
<p className="text-sm text-slate-500">Securing admission and planning skill development.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-12 gap-12 items-start">
<div className="lg:col-span-5 space-y-8">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Guided by Experts. <br/> Backed by Data.</h2>
<p className="text-slate-600 text-base mb-6">We don't leave your future to chance. Our platform and team are rigorously vetted to provide the highest standard of guidance.</p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#22C55E] text-xl mt-0.5 shrink-0" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm text-slate-700 font-medium">Certified Career Analysts (CCA) on board</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#22C55E] text-xl mt-0.5 shrink-0" icon="solar:database-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm text-slate-700 font-medium">Proprietary AI engine trained on millions of data points</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#22C55E] text-xl mt-0.5 shrink-0" icon="solar:hand-shake-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm text-slate-700 font-medium">Unbiased, commission-free college recommendations</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#22C55E] text-xl mt-0.5 shrink-0" icon="solar:user-speak-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm text-slate-700 font-medium">Continuous mentorship till you succeed</span>
</li>
</ul>
</div>
</div>

<div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">

<div className="bg-white border border-[#E5E7EB] rounded-2xl p-5 flex items-center gap-4 shadow-sm">
<div className="w-16 h-16 rounded-full bg-slate-200 border border-[#E5E7EB] shrink-0 overflow-hidden">

<div className="w-full h-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center text-indigo-400 font-medium text-xl">S</div>
</div>
<div>
<h4 className="text-base font-semibold text-slate-900">Dr. Sarah Jenkins</h4>
<p className="text-xs text-[#2563EB] font-medium mb-1">Founder &amp; Chief Strategist</p>
<p className="text-xs text-slate-500">15+ yrs in EdTech</p>
</div>
</div>

<div className="bg-white border border-[#E5E7EB] rounded-2xl p-5 flex items-center gap-4 shadow-sm">
<div className="w-16 h-16 rounded-full bg-slate-200 border border-[#E5E7EB] shrink-0 overflow-hidden">
<div className="w-full h-full bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center text-emerald-400 font-medium text-xl">R</div>
</div>
<div>
<h4 className="text-base font-semibold text-slate-900">Rahul Sharma</h4>
<p className="text-xs text-[#2563EB] font-medium mb-1">Head of Counseling</p>
<p className="text-xs text-slate-500">Ex-Admissions Director</p>
</div>
</div>

<div className="bg-white border border-[#E5E7EB] rounded-2xl p-5 flex items-center gap-4 shadow-sm">
<div className="w-16 h-16 rounded-full bg-slate-200 border border-[#E5E7EB] shrink-0 overflow-hidden">
<div className="w-full h-full bg-gradient-to-br from-purple-100 to-fuchsia-100 flex items-center justify-center text-fuchsia-400 font-medium text-xl">A</div>
</div>
<div>
<h4 className="text-base font-semibold text-slate-900">Aisha Patel</h4>
<p className="text-xs text-[#2563EB] font-medium mb-1">AI Product Lead</p>
<p className="text-xs text-slate-500">Data Scientist</p>
</div>
</div>

<div className="bg-slate-50 border border-[#E5E7EB] border-dashed rounded-2xl p-5 flex items-center justify-center gap-2 shadow-sm cursor-pointer hover:bg-slate-100 transition-colors text-slate-500 hover:text-slate-900">
<iconify-icon className="text-xl" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium">Meet the full team</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-white border-t border-[#E5E7EB]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Hear From Our Students</h2>
<p className="text-slate-600 text-base">Real stories of clarity and success.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-[#F8FAFC] border border-[#E5E7EB] p-6 rounded-2xl">
<div className="flex items-center gap-1 text-[#2563EB] mb-4">
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-sm text-slate-700 leading-relaxed mb-6">"I was completely lost between Engineering and Design. The AI test pinpointed my creative aptitude, and the counselor helped me find a dual-degree program I didn't even know existed. Changed my life."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-300 flex items-center justify-center text-xs text-white font-medium">K</div>
<div>
<div className="text-sm font-medium text-slate-900">Karan M.</div>
<div className="text-xs text-slate-500">Placed at NID</div>
</div>
</div>
</div>

<div className="bg-[#F8FAFC] border border-[#E5E7EB] p-6 rounded-2xl">
<div className="flex items-center gap-1 text-[#2563EB] mb-4">
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-sm text-slate-700 leading-relaxed mb-6">"The step-by-step guidance took away all my anxiety. They helped me build my profile, recommended the right universities, and mocked interviews until I was confident. Got into my top choice!"</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-300 flex items-center justify-center text-xs text-white font-medium">P</div>
<div>
<div className="text-sm font-medium text-slate-900">Priya S.</div>
<div className="text-xs text-slate-500">B.Tech CS</div>
</div>
</div>
</div>

<div className="bg-[#F8FAFC] border border-[#E5E7EB] p-6 rounded-2xl">
<div className="flex items-center gap-1 text-[#2563EB] mb-4">
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-half-bold" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-sm text-slate-700 leading-relaxed mb-6">"As a parent, I wanted the best for my son but didn't understand the new career landscape. ASPIRE brought data and clarity to our dinner table discussions. Highly recommend their counseling."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-300 flex items-center justify-center text-xs text-white font-medium">R</div>
<div>
<div className="text-sm font-medium text-slate-900">Rajesh V.</div>
<div className="text-xs text-slate-500">Parent</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 relative overflow-hidden">
<div className="absolute inset-0 gradient-bg z-0"></div>

<div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNGRkZGRkYiLz48L3N2Zz4=')]"></div>
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">Stop Guessing. Start Growing.</h2>
<p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">Take the first step towards a career you'll love. Our AI test takes just 15 minutes, and the initial consultation is completely free.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="bg-white text-[#2563EB] px-8 py-3.5 rounded-full text-sm font-medium transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2" href="#">
<iconify-icon className="text-lg" icon="solar:rocket-linear" strokeWidth="1.5"></iconify-icon>
                    Take Free AI Test
                </a>
<a className="bg-transparent text-white border border-white/30 px-8 py-3.5 rounded-full text-sm font-medium transition-all hover:bg-white/10 flex items-center justify-center" href="#">
                    Book Counseling
                </a>
</div>
<p className="text-xs text-blue-200 mt-6 font-medium tracking-wide uppercase">No Credit Card Required • Instant Results</p>
</div>
</section>

<footer className="bg-white py-8 border-t border-[#E5E7EB] text-center pb-24 md:pb-8">
<div className="max-w-7xl mx-auto px-4">
<p className="text-xs text-slate-500">© 2024 ASPIRE Education. All rights reserved.</p>
</div>
</footer>

<div className="fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-md border-t border-[#E5E7EB] p-3 md:hidden z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
<div className="flex gap-2 max-w-md mx-auto">
<a className="flex-1 bg-[#2563EB] text-white py-3 rounded-xl text-sm font-medium text-center flex items-center justify-center gap-1 shadow-sm" href="#">
                Take AI Test
            </a>
<a className="flex-1 bg-white text-slate-700 border border-[#E5E7EB] py-3 rounded-xl text-sm font-medium text-center flex items-center justify-center shadow-sm" href="#">
                Book Consult
            </a>
</div>
</div>

    </>
  );
}
