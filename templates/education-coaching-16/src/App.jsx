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
      
tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
blue: '#1E3A8A',
orange: '#F97316',
light: '#F8FAFC'
}
}
}
}
}



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
      

<header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<iconify-icon className="text-brand-blue" height="28" icon="solar:book-bookmark-linear" strokeWidth="1.5" width="28"></iconify-icon>
<span className="font-semibold tracking-tighter text-brand-blue text-xl uppercase">IGCSE Made Easy</span>
</div>
<a className="hidden sm:inline-flex bg-brand-orange hover:bg-orange-600 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5" href="#booking">
                Book Free Consultation
            </a>
</div>
</header>

<section className="pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-brand-blue text-xs font-medium mb-6 border border-blue-100">
<iconify-icon height="16" icon="solar:star-fall-linear" width="16"></iconify-icon>
                        Premium Academic Coaching
                    </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.1]">
                        Help Your Child Excel in IGCSE Exams — <span className="text-brand-blue">Without Stress</span>
</h1>
<p className="mt-6 text-lg sm:text-xl text-slate-500 leading-relaxed">
                        Personalized coaching that improves grades, builds confidence, and prepares students for exam success without last-minute cramming.
                    </p>
<div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
<a className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-brand-orange text-white px-8 py-4 rounded-xl text-base font-medium hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300" href="#booking">
                            Book Free Consultation
                            <iconify-icon height="20" icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
<p className="mt-4 text-sm text-slate-500 flex items-center gap-1.5">
<iconify-icon height="16" icon="solar:clock-circle-linear" width="16"></iconify-icon>
                        Takes less than 2 minutes. No commitment required.
                    </p>
</div>
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/10 to-transparent rounded-3xl transform translate-x-4 translate-y-4"></div>
<img alt="Student studying focused" className="relative rounded-3xl shadow-xl w-full object-cover aspect-[4/3]" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-light">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
                    Is Your Child Struggling with IGCSE Preparation?
                </h2>
</div>
<div className="grid sm:grid-cols-2 gap-6">
<div className="bg-white p-6 rounded-2xl border border-slate-100 flex items-start gap-4 shadow-sm">
<div className="p-2.5 bg-red-50 text-red-500 rounded-xl shrink-0">
<iconify-icon height="24" icon="solar:chart-down-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight">Falling behind in subjects</h3>
<p className="mt-2 text-sm text-slate-500 leading-relaxed">Missing foundational concepts making it hard to grasp advanced topics.</p>
</div>
</div>
<div className="bg-white p-6 rounded-2xl border border-slate-100 flex items-start gap-4 shadow-sm">
<div className="p-2.5 bg-red-50 text-red-500 rounded-xl shrink-0">
<iconify-icon height="24" icon="solar:book-broken-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight">Studying hard, no results</h3>
<p className="mt-2 text-sm text-slate-500 leading-relaxed">Spending hours at the desk but failing to reflect that effort in mock exams.</p>
</div>
</div>
<div className="bg-white p-6 rounded-2xl border border-slate-100 flex items-start gap-4 shadow-sm">
<div className="p-2.5 bg-red-50 text-red-500 rounded-xl shrink-0">
<iconify-icon height="24" icon="solar:shield-warning-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight">Lack of confidence</h3>
<p className="mt-2 text-sm text-slate-500 leading-relaxed">Experiencing severe exam anxiety that causes them to freeze during tests.</p>
</div>
</div>
<div className="bg-white p-6 rounded-2xl border border-slate-100 flex items-start gap-4 shadow-sm">
<div className="p-2.5 bg-red-50 text-red-500 rounded-xl shrink-0">
<iconify-icon height="24" icon="solar:layers-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight">Overwhelmed by syllabus</h3>
<p className="mt-2 text-sm text-slate-500 leading-relaxed">Not knowing where to start or how to organize study time effectively.</p>
</div>
</div>
</div>
<div className="mt-16 text-center">
<p className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-50 text-brand-blue text-base font-medium">
<iconify-icon height="20" icon="solar:hand-heart-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    You’re not alone — and this can be fixed.
                </p>
</div>
</div>
</section>

<section className="py-24 bg-brand-blue relative overflow-hidden">
<div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
<svg className="absolute w-full h-full transform scale-150 origin-top-right text-white" fill="none" stroke="currentColor" strokeWidth="0.5" viewbox="0 0 100 100">
<pattern height="10" id="grid" patternunits="userSpaceOnUse" width="10">
<path d="M 10 0 L 0 0 0 10" fill="none"></path>
</pattern>
<rect fill="url(#grid)" height="100" width="100"></rect>
</svg>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="max-w-3xl mb-16">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-6">
                    Introducing the IGCSE Exam Success Blueprint
                </h2>
<p className="text-lg text-blue-100 leading-relaxed">
                    A highly structured, personalized coaching system designed to turn confusion into clarity. We don't just teach the syllabus; we teach students how to learn, how to study, and how to master the exam format.
                </p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl text-white">
<iconify-icon className="text-brand-orange mb-4" height="32" icon="solar:user-id-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h3 className="text-lg font-semibold tracking-tight mb-2">Personalized Plan</h3>
<p className="text-sm text-blue-100">Tailored study schedules based on your child's current level and goals.</p>
</div>
<div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl text-white">
<iconify-icon className="text-brand-orange mb-4" height="32" icon="solar:target-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h3 className="text-lg font-semibold tracking-tight mb-2">Exam Strategies</h3>
<p className="text-sm text-blue-100">Proven techniques to understand marking schemes and tackle tricky questions.</p>
</div>
<div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl text-white">
<iconify-icon className="text-brand-orange mb-4" height="32" icon="solar:videocamera-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h3 className="text-lg font-semibold tracking-tight mb-2">Focused Coaching</h3>
<p className="text-sm text-blue-100">1-on-1 sessions that target weak points and reinforce core concepts.</p>
</div>
<div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl text-white">
<iconify-icon className="text-brand-orange mb-4" height="32" icon="solar:graph-up-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h3 className="text-lg font-semibold tracking-tight mb-2">Progress Tracking</h3>
<p className="text-sm text-blue-100">Continuous feedback loops and regular reporting for parents.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Transformative Outcomes</h2>
<p className="mt-4 text-slate-500">What happens when your child follows our blueprint.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="p-8 rounded-2xl border border-slate-100 bg-brand-light hover:bg-white hover:shadow-lg transition-all duration-300 group">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-brand-blue" height="24" icon="solar:diploma-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Improved Grades</h3>
<p className="text-sm text-slate-500 leading-relaxed">Consistent jump in academic performance across core IGCSE subjects through targeted learning.</p>
</div>

<div className="p-8 rounded-2xl border border-slate-100 bg-brand-light hover:bg-white hover:shadow-lg transition-all duration-300 group">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-brand-blue" height="24" icon="solar:brain-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Stronger Understanding</h3>
<p className="text-sm text-slate-500 leading-relaxed">Moving away from rote memorization to true comprehension of underlying concepts.</p>
</div>

<div className="p-8 rounded-2xl border border-slate-100 bg-brand-light hover:bg-white hover:shadow-lg transition-all duration-300 group">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-brand-blue" height="24" icon="solar:magic-stick-3-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Increased Confidence</h3>
<p className="text-sm text-slate-500 leading-relaxed">Replacing doubt with the certainty that they are fully prepared to tackle any exam question.</p>
</div>

<div className="p-8 rounded-2xl border border-slate-100 bg-brand-light hover:bg-white hover:shadow-lg transition-all duration-300 group md:col-span-1 lg:col-start-2">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-brand-blue" height="24" icon="solar:check-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Better Exam Performance</h3>
<p className="text-sm text-slate-500 leading-relaxed">Mastering time management and question interpretation to maximize marks in the exam hall.</p>
</div>

<div className="p-8 rounded-2xl border border-slate-100 bg-brand-light hover:bg-white hover:shadow-lg transition-all duration-300 group">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-brand-blue" height="24" icon="solar:cup-star-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Reduced Stress</h3>
<p className="text-sm text-slate-500 leading-relaxed">Alleviating pressure for both students and parents through a clear, predictable roadmap to success.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-light border-y border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-20">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">How It Works</h2>
</div>
<div className="relative">

<div aria-hidden="true" className="hidden md:block absolute top-6 left-[10%] right-[10%] h-0.5 bg-slate-200"></div>
<div className="grid md:grid-cols-4 gap-12 relative">

<div className="relative text-center">
<div className="w-12 h-12 mx-auto bg-brand-blue text-white rounded-full flex items-center justify-center text-lg font-medium relative z-10 shadow-md ring-4 ring-brand-light">
                            1
                        </div>
<h3 className="mt-6 text-lg font-semibold tracking-tight text-slate-900">Assessment</h3>
<p className="mt-2 text-sm text-slate-500">Initial evaluation to identify strengths, weaknesses, and learning style.</p>
</div>

<div className="relative text-center">
<div className="w-12 h-12 mx-auto bg-brand-blue text-white rounded-full flex items-center justify-center text-lg font-medium relative z-10 shadow-md ring-4 ring-brand-light">
                            2
                        </div>
<h3 className="mt-6 text-lg font-semibold tracking-tight text-slate-900">Study Plan</h3>
<p className="mt-2 text-sm text-slate-500">Creating a customized roadmap tailored to specific exam targets.</p>
</div>

<div className="relative text-center">
<div className="w-12 h-12 mx-auto bg-brand-blue text-white rounded-full flex items-center justify-center text-lg font-medium relative z-10 shadow-md ring-4 ring-brand-light">
                            3
                        </div>
<h3 className="mt-6 text-lg font-semibold tracking-tight text-slate-900">Coaching</h3>
<p className="mt-2 text-sm text-slate-500">Intensive 1-on-1 sessions focused on concept mastery and exam technique.</p>
</div>

<div className="relative text-center">
<div className="w-12 h-12 mx-auto bg-brand-blue text-white rounded-full flex items-center justify-center text-lg font-medium relative z-10 shadow-md ring-4 ring-brand-light">
                            4
                        </div>
<h3 className="mt-6 text-lg font-semibold tracking-tight text-slate-900">Tracking</h3>
<p className="mt-2 text-sm text-slate-500">Continuous monitoring and strategy adjustments to ensure peak readiness.</p>
</div>
</div>
</div>
<div className="mt-16 text-center">
<a className="inline-flex justify-center items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-slate-800 transition-colors" href="#booking">
                    Start Step 1 Today
                </a>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="relative max-w-md mx-auto md:max-w-none">
<div className="absolute inset-0 bg-brand-orange/10 rounded-3xl transform -translate-x-4 translate-y-4"></div>
<img alt="Ms. Mansurah, Academic Coach" className="relative rounded-3xl shadow-lg w-full object-cover aspect-square sm:aspect-[4/5]" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div>
<span className="text-brand-orange font-medium text-sm tracking-widest uppercase mb-2 block">Meet Your Coach</span>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-6">
                        Expert Guidance by Ms. Mansurah
                    </h2>
<p className="text-lg text-slate-600 mb-6 leading-relaxed">
                        An experienced academic coach dedicated to helping students succeed in IGCSE exams. With years of experience demystifying complex subjects, Ms. Mansurah has developed a methodology that goes beyond textbooks.
                    </p>
<p className="text-slate-500 mb-8 leading-relaxed">
                        "My goal isn't just to help your child pass an exam. It's to equip them with the critical thinking skills, study habits, and self-belief they need to excel academically and beyond."
                    </p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-slate-700 font-medium">
<iconify-icon className="text-brand-blue" height="24" icon="solar:check-read-linear" width="24"></iconify-icon>
                            Specialized in IGCSE Curriculum
                        </li>
<li className="flex items-center gap-3 text-slate-700 font-medium">
<iconify-icon className="text-brand-blue" height="24" icon="solar:check-read-linear" width="24"></iconify-icon>
                            Proven track record of grade improvements
                        </li>
<li className="flex items-center gap-3 text-slate-700 font-medium">
<iconify-icon className="text-brand-blue" height="24" icon="solar:check-read-linear" width="24"></iconify-icon>
                            Focus on exam strategy and anxiety reduction
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-light">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Trusted by Parents</h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col">
<iconify-icon className="text-brand-orange/40 mb-4" height="32" icon="solar:quote-left-linear" width="32"></iconify-icon>
<p className="text-slate-600 flex-grow leading-relaxed italic">
                        "Ms. Mansurah helped my child move from a C to an A in just a few months. Her structured approach and patience completely changed how my son views studying. The anxiety is gone."
                    </p>
<div className="mt-6 pt-6 border-t border-slate-100 flex items-center gap-3">
<div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 font-medium">S</div>
<div>
<p className="text-sm font-semibold text-slate-900">Sarah T.</p>
<p className="text-xs text-slate-500">Mother of Year 11 Student</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col">
<iconify-icon className="text-brand-orange/40 mb-4" height="32" icon="solar:quote-left-linear" width="32"></iconify-icon>
<p className="text-slate-600 flex-grow leading-relaxed italic">
                        "The personalized plan was a game-changer. My daughter was overwhelmed by the syllabus, but the blueprint broke it down perfectly. Highly recommend for any parent whose child is stressed about IGCSEs."
                    </p>
<div className="mt-6 pt-6 border-t border-slate-100 flex items-center gap-3">
<div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 font-medium">M</div>
<div>
<p className="text-sm font-semibold text-slate-900">Michael R.</p>
<p className="text-xs text-slate-500">Father of Year 10 Student</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col md:col-span-2 lg:col-span-1">
<iconify-icon className="text-brand-orange/40 mb-4" height="32" icon="solar:quote-left-linear" width="32"></iconify-icon>
<p className="text-slate-600 flex-grow leading-relaxed italic">
                        "We noticed a difference in confidence after just 3 weeks. The focus on exam techniques, not just reading textbooks, made all the difference in the final mock exams."
                    </p>
<div className="mt-6 pt-6 border-t border-slate-100 flex items-center gap-3">
<div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 font-medium">A</div>
<div>
<p className="text-sm font-semibold text-slate-900">Aisha K.</p>
<p className="text-xs text-slate-500">Parent</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="bg-brand-blue rounded-3xl overflow-hidden shadow-xl">
<div className="px-8 py-12 md:p-16 text-white text-center border-b border-white/10">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">What Your Child Gets</h2>
<p className="text-blue-100 text-lg">The complete package for IGCSE exam mastery.</p>
</div>
<div className="bg-white px-8 py-10 md:p-12">
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="p-1 bg-green-100 text-green-600 rounded-full shrink-0 mt-1">
<iconify-icon height="20" icon="solar:check-linear" strokeWidth="2" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-semibold text-slate-900">1-on-1 Coaching Sessions</h4>
<p className="text-slate-500 text-sm mt-1">Dedicated focus time to tackle complex subjects and ensure deep understanding.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="p-1 bg-green-100 text-green-600 rounded-full shrink-0 mt-1">
<iconify-icon height="20" icon="solar:check-linear" strokeWidth="2" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-semibold text-slate-900">Personalized Study Plan</h4>
<p className="text-slate-500 text-sm mt-1">A custom timeline that organizes revision efficiently, eliminating guesswork.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="p-1 bg-green-100 text-green-600 rounded-full shrink-0 mt-1">
<iconify-icon height="20" icon="solar:check-linear" strokeWidth="2" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-semibold text-slate-900">Exam Strategy Training</h4>
<p className="text-slate-500 text-sm mt-1">Learning exactly how examiners grade papers and how to structure answers for maximum points.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="p-1 bg-green-100 text-green-600 rounded-full shrink-0 mt-1">
<iconify-icon height="20" icon="solar:check-linear" strokeWidth="2" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-semibold text-slate-900">Continuous Mentorship</h4>
<p className="text-slate-500 text-sm mt-1">Ongoing support, progress reports, and motivation to keep them on track.</p>
</div>
</li>
</ul>
<div className="mt-10 p-6 bg-orange-50 rounded-2xl border border-orange-100">
<div className="flex items-center gap-2 text-brand-orange font-semibold mb-4">
<iconify-icon height="24" icon="solar:gift-linear" width="24"></iconify-icon>
                            Included Bonuses
                        </div>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-slate-700 text-sm font-medium">
<iconify-icon className="text-brand-orange" height="20" icon="solar:document-add-linear" width="20"></iconify-icon>
                                Digital Study Planner Template
                            </li>
<li className="flex items-center gap-3 text-slate-700 text-sm font-medium">
<iconify-icon className="text-brand-orange" height="20" icon="solar:notes-linear" width="20"></iconify-icon>
                                Core Subject Exam Cheat Sheets
                            </li>
</ul>
</div>
</div>
</div>
</div>
</section>

<div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 mb-12 sm:mb-24">
<div className="bg-white p-8 sm:p-10 rounded-3xl border-2 border-brand-orange/20 shadow-xl text-center">
<div className="w-16 h-16 mx-auto bg-orange-50 text-brand-orange rounded-full flex items-center justify-center mb-4">
<iconify-icon height="32" icon="solar:shield-check-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-3">100% Risk-Free Guarantee</h3>
<p className="text-slate-600 text-lg">
                We are confident in our blueprint. If your child puts in the work and doesn’t show improvement, <span className="font-semibold text-slate-900">you get a full refund.</span>
</p>
</div>
</div>

<section className="py-24 sm:py-32 bg-brand-blue relative overflow-hidden" id="booking">

<div className="absolute inset-0 opacity-10">
<div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white blur-3xl"></div>
<div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-brand-orange blur-3xl"></div>
</div>
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
<h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white mb-6">
                Ready to Secure Your Child’s Academic Future?
            </h2>
<p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                Schedule a brief call to discuss your child's current challenges and see if the Blueprint is the right fit.
            </p>
<button className="bg-brand-orange text-white px-10 py-5 rounded-xl text-lg font-medium hover:bg-orange-600 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300 w-full sm:w-auto">
                Book Free Consultation
            </button>
<p className="mt-4 text-sm text-blue-200 flex items-center justify-center gap-2 font-medium">
<iconify-icon height="18" icon="solar:danger-circle-linear" width="18"></iconify-icon>
                Limited slots available for the upcoming term
            </p>
</div>
</section>

<footer className="bg-slate-950 py-16 border-t border-slate-900">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-400" height="24" icon="solar:book-bookmark-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="font-semibold tracking-tighter text-slate-300 text-lg uppercase">IGCSE Made Easy</span>
</div>
<div className="flex gap-6">
<a className="text-slate-400 hover:text-white transition-colors" href="#"><span className="sr-only">Facebook</span>
<iconify-icon height="24" icon="solar:tag-linear" width="24"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><span className="sr-only">Instagram</span>
<iconify-icon height="24" icon="solar:camera-linear" width="24"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><span className="sr-only">Email</span>
<iconify-icon height="24" icon="solar:letter-linear" width="24"></iconify-icon>
</a>
</div>
</div>
<div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
<p>© 2023 IGCSE Made Easy. All rights reserved.</p>
<div className="flex gap-4">
<a className="hover:text-slate-300" href="#">Privacy Policy</a>
<a className="hover:text-slate-300" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
