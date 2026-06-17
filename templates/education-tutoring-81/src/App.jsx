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
      

<nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
<iconify-icon className="text-xl" icon="solar:square-academic-cap-linear"></iconify-icon>
</div>
<span className="font-semibold tracking-tighter text-lg text-slate-900">EDUSPHERE</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#how-it-works">How it Works</a>
<a className="hover:text-slate-900 transition-colors" href="#subjects">Subjects</a>
<a className="hover:text-slate-900 transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-slate-600 hover:text-slate-900" href="#">Log in</a>
<a className="bg-[#FF7A00] hover:bg-[#E66E00] text-white text-sm font-medium px-4 py-2 rounded-xl transition-all shadow-sm" href="#book-trial">
                    Book Free Trial
                </a>
</div>
</div>
</nav>

<section className="pt-32 pb-20 md:pt-40 md:pb-32 px-6">
<div className="max-w-4xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-medium mb-8">
<iconify-icon icon="solar:stars-linear"></iconify-icon>
<span>Specialized 10th Grade Curriculum</span>
</div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900 leading-tight mb-6">
                Help Your 10th Grader Improve Grades &amp; Confidence in 90 Days
            </h1>
<p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
                Personalized 1:1 online tutoring for Math, Science &amp; English. We match your teen with top 1% tutors to build skills, ace exams, and reduce homework stress.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
<a className="w-full sm:w-auto bg-[#FF7A00] hover:bg-[#E66E00] text-white text-base font-medium px-8 py-4 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2" href="#book-trial">
                    Book Free Trial Class
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 text-base font-medium px-8 py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm" href="#how-it-works">
                    See How It Works
                </a>
</div>
<div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
<div className="flex items-center gap-1">
<div className="flex text-[#FF7A00]">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<span className="font-medium text-slate-700 ml-1">4.8/5</span> Rating
                </div>
<div className="w-1 h-1 rounded-full bg-slate-300 hidden sm:block"></div>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-lg text-blue-600" icon="solar:users-group-two-rounded-linear"></iconify-icon>
<span>50,000+ Students</span>
</div>
<div className="w-1 h-1 rounded-full bg-slate-300 hidden sm:block"></div>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-lg text-blue-600" icon="solar:cup-first-linear"></iconify-icon>
<span>Top 1% Tutors</span>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-y border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 mb-4">Is Your Child Facing These Challenges?</h2>
<p className="text-slate-500 text-base">High school is demanding. Don't let your teen fall behind.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="p-6 rounded-2xl bg-[#FAFAFA] border border-slate-100">
<div className="w-10 h-10 rounded-xl bg-orange-50 text-[#FF7A00] flex items-center justify-center mb-4">
<iconify-icon className="text-xl" icon="solar:book-bookmark-linear"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Struggling with Concepts</h3>
<p className="text-sm text-slate-500">Algebra, Chemistry, or complex essays causing frustration and endless homework nights.</p>
</div>
<div className="p-6 rounded-2xl bg-[#FAFAFA] border border-slate-100">
<div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
<iconify-icon className="text-xl" icon="solar:emoji-sad-linear"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Low Confidence</h3>
<p className="text-sm text-slate-500">Afraid to ask questions in a crowded classroom, leading to a negative attitude toward learning.</p>
</div>
<div className="p-6 rounded-2xl bg-[#FAFAFA] border border-slate-100">
<div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-4">
<iconify-icon className="text-xl" icon="solar:graph-down-linear"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Falling Behind</h3>
<p className="text-sm text-slate-500">Missing assignments or getting poor test scores that threaten their GPA and college prospects.</p>
</div>
<div className="p-6 rounded-2xl bg-[#FAFAFA] border border-slate-100">
<div className="w-10 h-10 rounded-xl bg-green-50 text-green-600 flex items-center justify-center mb-4">
<iconify-icon className="text-xl" icon="solar:pen-new-square-linear"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Preparing for Exams</h3>
<p className="text-sm text-slate-500">Anxiety about upcoming midterms, finals, or standardized tests without a clear study plan.</p>
</div>
</div>
</div>
</section>

<section className="py-24" id="how-it-works">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 mb-4">A Proven Path to Better Grades</h2>
<p className="text-slate-500 text-base">We make getting started simple and risk-free.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
<div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-px bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 z-0"></div>
<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-blue-600 text-white font-semibold flex items-center justify-center text-lg mb-6 ring-8 ring-[#FAFAFA]">1</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Free Assessment</h3>
<p className="text-sm text-slate-500">We pinpoint your 10th grader's exact learning gaps in a no-pressure diagnostic session.</p>
</div>
<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-blue-600 text-white font-semibold flex items-center justify-center text-lg mb-6 ring-8 ring-[#FAFAFA]">2</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Tutor Match</h3>
<p className="text-sm text-slate-500">Based on personality and needs, we pair them with the perfect subject-matter expert.</p>
</div>
<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-[#FF7A00] text-white font-semibold flex items-center justify-center text-lg mb-6 ring-8 ring-[#FAFAFA]">3</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Progress &amp; Results</h3>
<p className="text-sm text-slate-500">Watch confidence soar with weekly 1:1 sessions, personalized learning plans, and progress reports.</p>
</div>
</div>
<div className="mt-16 text-center">
<a className="inline-flex items-center gap-2 bg-[#FF7A00] hover:bg-[#E66E00] text-white text-base font-medium px-8 py-3.5 rounded-xl transition-all shadow-sm" href="#book-trial">
                    Start Free Trial
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-100" id="subjects">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
<div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 mb-4">10th Grade Subjects Covered</h2>
<p className="text-slate-500 text-base max-w-xl">Curriculum aligned with state and national standards, tailored entirely to your child's pace.</p>
</div>
<a className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1" href="#">
                    View Full Curriculum <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
<div className="h-2 bg-blue-500 w-full"></div>
<div className="p-8 flex-grow">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:calculator-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900">Mathematics</h3>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-600 mt-0.5 text-lg shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-sm text-slate-600">Algebra I &amp; II fundamentals</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-600 mt-0.5 text-lg shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-sm text-slate-600">Geometry proofs and theorems</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-600 mt-0.5 text-lg shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-sm text-slate-600">Pre-Calculus preparation</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-600 mt-0.5 text-lg shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-sm text-slate-600">Trigonometry basics</span>
</li>
</ul>
</div>
</div>

<div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
<div className="h-2 bg-emerald-500 w-full"></div>
<div className="p-8 flex-grow">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:test-tube-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900">Science</h3>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-600 mt-0.5 text-lg shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-sm text-slate-600">Biology concepts &amp; lab prep</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-600 mt-0.5 text-lg shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-sm text-slate-600">Chemistry equations &amp; reactions</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-600 mt-0.5 text-lg shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-sm text-slate-600">Physics principles</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-600 mt-0.5 text-lg shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-sm text-slate-600">Scientific method application</span>
</li>
</ul>
</div>
</div>

<div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
<div className="h-2 bg-purple-500 w-full"></div>
<div className="p-8 flex-grow">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:document-text-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900">English</h3>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3">
<iconify-icon className="text-purple-600 mt-0.5 text-lg shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-sm text-slate-600">Literary analysis &amp; comprehension</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-purple-600 mt-0.5 text-lg shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-sm text-slate-600">Essay structuring &amp; writing</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-purple-600 mt-0.5 text-lg shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-sm text-slate-600">Grammar and vocabulary building</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-purple-600 mt-0.5 text-lg shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-sm text-slate-600">Creative writing techniques</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-blue-600 text-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-blue-500/50">
<div className="pt-8 md:pt-0">
<div className="text-5xl font-semibold tracking-tight mb-2">92%</div>
<div className="text-blue-100 text-sm font-medium">Students improved grades within 3 months</div>
</div>
<div className="pt-8 md:pt-0">
<div className="text-5xl font-semibold tracking-tight mb-2 flex items-center justify-center gap-1">
                        4.8
                        <iconify-icon className="text-3xl text-[#FF7A00]" icon="solar:star-bold"></iconify-icon>
</div>
<div className="text-blue-100 text-sm font-medium">Average parent satisfaction rating</div>
</div>
<div className="pt-8 md:pt-0">
<div className="text-5xl font-semibold tracking-tight mb-2">8<span className="text-3xl">+</span></div>
<div className="text-blue-100 text-sm font-medium">Years average tutor experience</div>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 mb-4">Real Results from 10th Graders</h2>
<p className="text-slate-500 text-base">Don't just take our word for it.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
<div className="flex text-[#FF7A00] mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-700 italic text-sm leading-relaxed mb-6">
                        "My son was dreading 10th grade geometry. After just a few weeks with his tutor, he went from a C- to an A. More importantly, he actually enjoys math now. The transformation is incredible."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-medium text-sm">S</div>
<div>
<div className="font-medium text-sm text-slate-900">Sarah M.</div>
<div className="text-xs text-slate-500">Parent of 10th Grader</div>
</div>
</div>
</div>
<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
<div className="flex text-[#FF7A00] mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-700 italic text-sm leading-relaxed mb-6">
                        "The personalized attention is unmatched. Her tutor noticed she was struggling with essay structure, not the material itself. They fixed the core issue and her English grades skyrocketed."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-medium text-sm">J</div>
<div>
<div className="font-medium text-sm text-slate-900">James T.</div>
<div className="text-xs text-slate-500">Parent of 10th Grader</div>
</div>
</div>
</div>
<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
<div className="flex text-[#FF7A00] mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-700 italic text-sm leading-relaxed mb-6">
                        "We tried group classes before, but the 1:1 format is what finally worked. The flexible scheduling means he never misses a session, even during soccer season. Highly recommend!"
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-medium text-sm">E</div>
<div>
<div className="font-medium text-sm text-slate-900">Elena R.</div>
<div className="text-xs text-slate-500">Parent of 10th Grader</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 mb-6">Built for Modern Learning</h2>
<p className="text-slate-500 text-base mb-8 leading-relaxed">
                        We don't just help with homework; we build fundamental skills. Our platform combines elite educators with technology designed to keep parents informed and students engaged.
                    </p>
<a className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-6 py-3 rounded-xl transition-all shadow-sm" href="#book-trial">
                        Get My Free Trial
                        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
<div>
<div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
<iconify-icon className="text-xl" icon="solar:user-check-linear"></iconify-icon>
</div>
<h4 className="text-sm font-semibold text-slate-900 mb-2">Top 1% Tutors</h4>
<p className="text-xs text-slate-500">Rigorous vetting process. Only subject-matter experts with proven teaching experience.</p>
</div>
<div>
<div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
<iconify-icon className="text-xl" icon="solar:route-linear"></iconify-icon>
</div>
<h4 className="text-sm font-semibold text-slate-900 mb-2">Personalized Plans</h4>
<p className="text-xs text-slate-500">No cookie-cutter curriculums. We adapt to your child's exact learning style and pace.</p>
</div>
<div>
<div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
<iconify-icon className="text-xl" icon="solar:videocamera-record-linear"></iconify-icon>
</div>
<h4 className="text-sm font-semibold text-slate-900 mb-2">Session Recordings</h4>
<p className="text-xs text-slate-500">Every class is recorded securely so students can review difficult concepts before exams.</p>
</div>
<div>
<div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
<iconify-icon className="text-xl" icon="solar:chart-square-linear"></iconify-icon>
</div>
<h4 className="text-sm font-semibold text-slate-900 mb-2">Progress Tracking</h4>
<p className="text-xs text-slate-500">Weekly reports sent to your inbox detailing what was covered and areas of improvement.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 mb-4">Simple, Transparent Pricing</h2>
<p className="text-slate-500 text-base">Invest in your child's future. No hidden fees, cancel anytime.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">

<div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
<h3 className="text-lg font-semibold text-slate-900 mb-2">Starter</h3>
<p className="text-sm text-slate-500 mb-6">For targeted help before exams.</p>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-semibold tracking-tight text-slate-900">$23</span>
<span className="text-sm text-slate-500">/session</span>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-slate-400" icon="solar:check-circle-linear"></iconify-icon> 4 sessions / month
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-slate-400" icon="solar:check-circle-linear"></iconify-icon> 1 Subject
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-slate-400" icon="solar:check-circle-linear"></iconify-icon> Standard support
                        </li>
</ul>
<a className="block w-full text-center bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-sm font-medium px-4 py-2.5 rounded-xl transition-all" href="#book-trial">
                        Select Starter
                    </a>
</div>

<div className="bg-white rounded-2xl border-2 border-blue-600 p-8 shadow-md relative transform md:-translate-y-4">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full tracking-wide uppercase">
                        Most Popular
                    </div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Growth</h3>
<p className="text-sm text-slate-500 mb-6">Consistent support for steady improvement.</p>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-semibold tracking-tight text-slate-900">$18</span>
<span className="text-sm text-slate-500">/session</span>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-2 text-sm text-slate-900 font-medium">
<iconify-icon className="text-blue-600" icon="solar:check-circle-bold"></iconify-icon> 8 sessions / month
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-blue-600" icon="solar:check-circle-bold"></iconify-icon> Up to 2 Subjects
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-blue-600" icon="solar:check-circle-bold"></iconify-icon> Progress Reports
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-blue-600" icon="solar:check-circle-bold"></iconify-icon> Session Recordings
                        </li>
</ul>
<a className="block w-full text-center bg-[#FF7A00] hover:bg-[#E66E00] text-white text-sm font-medium px-4 py-2.5 rounded-xl transition-all shadow-sm" href="#book-trial">
                        Get My Free Trial
                    </a>
</div>

<div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
<h3 className="text-lg font-semibold text-slate-900 mb-2">Pro</h3>
<p className="text-sm text-slate-500 mb-6">Intensive curriculum overhaul.</p>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-semibold tracking-tight text-slate-900">Custom</span>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-slate-400" icon="solar:check-circle-linear"></iconify-icon> 12+ sessions / month
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-slate-400" icon="solar:check-circle-linear"></iconify-icon> All Subjects
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-slate-400" icon="solar:check-circle-linear"></iconify-icon> Priority Support
                        </li>
</ul>
<a className="block w-full text-center bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-sm font-medium px-4 py-2.5 rounded-xl transition-all" href="#contact">
                        Contact Sales
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-100">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 mb-4">Frequently Asked Questions</h2>
</div>
<div className="space-y-4">
<details className="group bg-[#FAFAFA] rounded-2xl border border-slate-100 [&amp;_summary::-webkit-details-marker]:hidden" open="">
<summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-slate-900">
<span>How does the 1:1 online tutoring work?</span>
<span className="transition duration-300 group-open:-rotate-180 text-slate-400">
<iconify-icon className="text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-slate-500 leading-relaxed">
                        Sessions take place in our interactive online classroom. It features two-way video, a shared digital whiteboard, and document sharing. Students and tutors work through problems together in real-time, just like being in the same room.
                    </div>
</details>
<details className="group bg-[#FAFAFA] rounded-2xl border border-slate-100 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-slate-900">
<span>What subjects do you cover for 10th grade?</span>
<span className="transition duration-300 group-open:-rotate-180 text-slate-400">
<iconify-icon className="text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-slate-500 leading-relaxed">
                        We cover all core 10th-grade subjects including Algebra II, Geometry, Biology, Chemistry, English Literature, and World History. We also offer test prep for early ACT/SAT studying.
                    </div>
</details>
<details className="group bg-[#FAFAFA] rounded-2xl border border-slate-100 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-slate-900">
<span>Can I change tutors if it's not a good fit?</span>
<span className="transition duration-300 group-open:-rotate-180 text-slate-400">
<iconify-icon className="text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-slate-500 leading-relaxed">
                        Absolutely. We boast a 98% perfect match rate on the first try, but if your child doesn't click with their tutor for any reason, we will gladly match you with another expert at no extra cost.
                    </div>
</details>
<details className="group bg-[#FAFAFA] rounded-2xl border border-slate-100 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-slate-900">
<span>Is there a free trial?</span>
<span className="transition duration-300 group-open:-rotate-180 text-slate-400">
<iconify-icon className="text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-slate-500 leading-relaxed">
                        Yes! We offer a completely free, zero-commitment trial class. This serves as an initial assessment to identify learning gaps and lets your child experience our platform and teaching style firsthand.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white" id="book-trial">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Start Your Child's Learning Transformation Today</h2>
<p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto">
                Risk-free trial. No commitment. Give your 10th grader the tools they need to succeed and regain their confidence.
            </p>
<form className="max-w-md mx-auto bg-white/5 p-2 rounded-2xl flex flex-col sm:flex-row gap-2 border border-white/10 mb-6">
<input className="flex-grow bg-transparent border-none text-white px-4 py-3 focus:outline-none focus:ring-0 placeholder-slate-500 text-sm" placeholder="Enter parent's email" required="" type="email"/>
<button className="bg-[#FF7A00] hover:bg-[#E66E00] text-white text-sm font-medium px-6 py-3 rounded-xl transition-all whitespace-nowrap" type="submit">
                    Book Free Trial Class
                </button>
</form>
<p className="text-xs text-slate-500">Takes 30 seconds to register. No credit card required.</p>
</div>
</section>

<footer className="py-12 border-t border-slate-200 bg-white">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center text-white">
<iconify-icon className="text-sm" icon="solar:square-academic-cap-linear"></iconify-icon>
</div>
<span className="font-semibold tracking-tighter text-base text-slate-900">EDUSPHERE</span>
</div>
<div className="text-sm text-slate-500">
                © 2023 Edusphere Tutoring. All rights reserved.
            </div>
<div className="flex gap-4 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#">Privacy</a>
<a className="hover:text-slate-900 transition-colors" href="#">Terms</a>
</div>
</div>
</footer>

<div className="fixed bottom-0 left-0 w-full p-4 bg-white border-t border-slate-200 md:hidden z-50 pb-safe">
<a className="block w-full text-center bg-[#FF7A00] hover:bg-[#E66E00] text-white text-sm font-medium px-4 py-3.5 rounded-xl transition-all shadow-sm" href="#book-trial">
            Book Free Trial Class
        </a>
</div>

    </>
  );
}
