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
      

<nav className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-semibold text-xl tracking-tight">D</div>
<span className="text-xl font-semibold tracking-tight text-slate-900">Danny.</span>
</div>
<div className="hidden md:flex items-center gap-10">
<a className="text-base font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#about">About</a>
<a className="text-base font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#services">Services</a>
<a className="text-base font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#approach">Approach</a>
</div>
<div>
<a className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-slate-800 transition-all" href="#contact">
                Let's Talk
            </a>
</div>
</nav>

<section className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-16 lg:pt-32 lg:pb-24">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
<div className="max-w-2xl">
<div className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-base font-medium text-slate-700 mb-8">
<span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2"></span>
                    Performance &amp; Leadership Coach
                </div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-slate-900 leading-[1.1]">
                    Developing Coaches Who Create <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Lasting Impact</span>
</h1>
<p className="mt-8 text-xl text-slate-600 leading-relaxed max-w-xl">
                    Award-winning international performance coach with 18+ years of experience helping coaches, leaders, and athletes unlock their full potential.
                </p>
<div className="mt-10 flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-lg font-medium text-white shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 transition-all group" href="#contact">
                        Work With Me
                        <i className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<a className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-4 text-lg font-medium text-slate-900 hover:bg-slate-50 hover:border-slate-300 transition-all" href="#services">
                        View Programs
                    </a>
</div>
</div>
<div className="relative lg:ml-auto w-full max-w-lg xl:max-w-xl">
<div className="absolute inset-0 -translate-x-4 translate-y-4 rounded-[2.5rem] bg-slate-100"></div>
<img alt="Danny - Performance Coach" className="relative rounded-[2.5rem] object-cover w-full h-[500px] lg:h-[650px] shadow-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6dd03b52-d5e6-4f61-a308-3e77e65f450d_1600w.png"/>
</div>
</div>

<div className="mt-24 lg:mt-32 pt-10 border-t border-slate-100 flex flex-wrap justify-center lg:justify-between items-center gap-10">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
<i className="w-6 h-6" data-lucide="award" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900">18+ Years</h3>
<p className="text-base text-slate-600">Experience</p>
</div>
</div>
<div className="hidden lg:block w-px h-12 bg-slate-100"></div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
<i className="w-6 h-6" data-lucide="globe" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900">International</h3>
<p className="text-base text-slate-600">Certified Coach</p>
</div>
</div>
<div className="hidden lg:block w-px h-12 bg-slate-100"></div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
<i className="w-6 h-6" data-lucide="users" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Leadership</h3>
<p className="text-base text-slate-600">Expert Mentor</p>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-slate-50" id="about">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-12 gap-16 items-start">
<div className="lg:col-span-5">
<div className="inline-block rounded-full border border-slate-200 bg-white px-4 py-1.5 text-base font-medium text-slate-700 mb-6">
                        About Danny
                    </div>
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 leading-tight">
                        Guiding leaders to achieve clarity and results.
                    </h2>
</div>
<div className="lg:col-span-7 space-y-8 text-xl text-slate-600 leading-relaxed">
<p>
                        Education Manager and award-winning international performance coach with a strong background in sports, education, and business development.
                    </p>
<p>
                        Specialises in mentoring coaches at all stages — from emerging talent to experienced leaders — using evidence-based learning combined with real-world application.
                    </p>
<p>
                        Believes coaching success comes from curiosity, empathy, and asking the right questions at the right time.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32" id="services">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-20">
<div className="inline-block rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-base font-medium text-slate-700 mb-6">
                    Services
                </div>
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900">
                    How I Help Coaches Grow
                </h2>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group p-10 rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-200 transition-all duration-300 relative overflow-hidden">
<div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
<i className="w-7 h-7" data-lucide="graduation-cap" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">Coach Development Programs</h3>
<p className="text-lg text-slate-600">
                        Designing structured learning pathways that create measurable improvement and long-term capability.
                    </p>
</div>

<div className="group p-10 rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-200 transition-all duration-300 relative overflow-hidden">
<div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
<i className="w-7 h-7" data-lucide="target" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">Mentoring &amp; Leadership</h3>
<p className="text-lg text-slate-600">
                        Helping coaches build confidence, clarity, and leadership impact to guide their teams effectively.
                    </p>
</div>

<div className="group p-10 rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-200 transition-all duration-300 relative overflow-hidden">
<div className="w-14 h-14 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
<i className="w-7 h-7" data-lucide="trending-up" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">Performance Consulting</h3>
<p className="text-lg text-slate-600">
                        Providing personalised development plans and strategic guidance for teams and entire organisations.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-slate-900 text-white rounded-[3rem] mx-4 sm:mx-8 lg:mx-auto max-w-[96%] lg:max-w-7xl">
<div className="max-w-6xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
                    Career Highlights
                </h2>
<p className="text-xl text-slate-400 mb-10 max-w-md">
                    A track record of elevating performance across diverse environments and disciplines globally.
                </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0">
<i className="w-4 h-4 text-blue-400" data-lucide="check" strokeWidth="2"></i>
</div>
<p className="text-lg font-medium text-slate-200">Designed high-impact coach development programs</p>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0">
<i className="w-4 h-4 text-blue-400" data-lucide="check" strokeWidth="2"></i>
</div>
<p className="text-lg font-medium text-slate-200">Mentored individuals to breakthrough results</p>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0">
<i className="w-4 h-4 text-blue-400" data-lucide="check" strokeWidth="2"></i>
</div>
<p className="text-lg font-medium text-slate-200">Developed collaborative learning environments</p>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0">
<i className="w-4 h-4 text-blue-400" data-lucide="check" strokeWidth="2"></i>
</div>
<p className="text-lg font-medium text-slate-200">Supported elite and paralympic athletes</p>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0">
<i className="w-4 h-4 text-blue-400" data-lucide="check" strokeWidth="2"></i>
</div>
<p className="text-lg font-medium text-slate-200">Delivered leadership mentoring worldwide</p>
</div>
</div>
</div>
<div className="relative h-full min-h-[400px] rounded-3xl overflow-hidden hidden lg:block">
<div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-slate-900 mix-blend-multiply z-10"></div>
<img alt="Team meeting" className="absolute inset-0 w-full h-full object-cover grayscale opacity-60" src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
</div>
</div>
</section>

<section className="py-24 lg:py-32" id="approach">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-20">
<div className="inline-block rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-base font-medium text-slate-700 mb-6">
                    The Process
                </div>
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900">
                    My Coaching Approach
                </h2>
</div>
<div className="grid md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-px bg-slate-200 z-0"></div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-full bg-white border border-slate-100 shadow-md flex items-center justify-center mb-8 relative">
<div className="absolute inset-2 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
<i className="w-8 h-8" data-lucide="compass" strokeWidth="1.5"></i>
</div>
</div>
<div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 text-white text-base font-medium mb-4">1</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-3">Discover Purpose</h3>
<p className="text-lg text-slate-600 max-w-sm">
                        Understanding your core "why", uncovering values, and identifying the true barriers to your potential.
                    </p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-full bg-white border border-slate-100 shadow-md flex items-center justify-center mb-8 relative">
<div className="absolute inset-2 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
<i className="w-8 h-8" data-lucide="map" strokeWidth="1.5"></i>
</div>
</div>
<div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 text-white text-base font-medium mb-4">2</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-3">Build Strategy</h3>
<p className="text-lg text-slate-600 max-w-sm">
                        Creating clear, structured, and actionable development plans tailored to your specific environment.
                    </p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-full bg-white border border-slate-100 shadow-md flex items-center justify-center mb-8 relative">
<div className="absolute inset-2 rounded-full bg-sky-50 flex items-center justify-center text-sky-600">
<i className="w-8 h-8" data-lucide="rocket" strokeWidth="1.5"></i>
</div>
</div>
<div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 text-white text-base font-medium mb-4">3</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-3">Drive Growth</h3>
<p className="text-lg text-slate-600 max-w-sm">
                        Ongoing support and accountability to ensure long-term performance, adaptation, and sustained impact.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-slate-50">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 text-center mb-20">
                Trusted by Leaders
            </h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col justify-between">
<div>
<i className="w-8 h-8 text-blue-200 mb-6 fill-blue-50" data-lucide="quote" strokeWidth="1"></i>
<p className="text-xl text-slate-700 leading-relaxed mb-8">
                            "Working with Danny completely shifted my perspective on leadership. The clarity and strategic focus I gained helped me elevate my entire coaching team's performance within months."
                        </p>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-slate-200"></div>
<div>
<p className="text-base font-semibold text-slate-900 tracking-tight">Sarah Jenkins</p>
<p className="text-base text-slate-500">Head Coach, Elite Athletics</p>
</div>
</div>
</div>

<div className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col justify-between">
<div>
<i className="w-8 h-8 text-blue-200 mb-6 fill-blue-50" data-lucide="quote" strokeWidth="1"></i>
<p className="text-xl text-slate-700 leading-relaxed mb-8">
                            "His ability to ask the right questions at exactly the right time is unparalleled. The development program he designed for our organization created measurable, lasting change."
                        </p>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-slate-200"></div>
<div>
<p className="text-base font-semibold text-slate-900 tracking-tight">David Chen</p>
<p className="text-base text-slate-500">Performance Director</p>
</div>
</div>
</div>

<div className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col justify-between">
<div>
<i className="w-8 h-8 text-blue-200 mb-6 fill-blue-50" data-lucide="quote" strokeWidth="1"></i>
<p className="text-xl text-slate-700 leading-relaxed mb-8">
                            "A masterclass in mentoring. Danny doesn't just give answers; he builds your capacity to find them yourself. Invaluable support for anyone serious about growth."
                        </p>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-slate-200"></div>
<div>
<p className="text-base font-semibold text-slate-900 tracking-tight">Marcus Thorne</p>
<p className="text-base text-slate-500">Leadership Consultant</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32">
<div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
<h2 className="text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 mb-8">
                Ready to Unlock Your Coaching Potential?
            </h2>
<p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
                Take the next step in your professional development journey. Let's build a strategy that amplifies your impact.
            </p>
<a className="inline-flex items-center justify-center rounded-full bg-slate-900 px-10 py-5 text-xl font-medium text-white shadow-xl hover:bg-slate-800 transition-all hover:-translate-y-1" href="#contact">
                Start Your Journey
            </a>
</div>
</section>

<footer className="bg-white border-t border-slate-100 pt-20 pb-10" id="contact">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-white font-semibold text-xl tracking-tight">D</div>
<span className="text-xl font-semibold tracking-tight text-slate-900">Danny.</span>
</div>
<p className="text-lg text-slate-500 max-w-sm mb-8">
                        Developing coaches who create lasting impact through evidence-based mentoring and strategic performance consulting.
                    </p>
<div className="flex items-center gap-4">
<a className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-50 hover:text-blue-600 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="linkedin" strokeWidth="1.5"></i>
</a>
<a className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-50 hover:text-blue-600 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="twitter" strokeWidth="1.5"></i>
</a>
<a className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-50 hover:text-blue-600 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="mail" strokeWidth="1.5"></i>
</a>
</div>
</div>
<div>
<h4 className="text-base font-semibold tracking-tight text-slate-900 mb-6">Navigation</h4>
<ul className="space-y-4">
<li><a className="text-base text-slate-500 hover:text-slate-900 transition-colors" href="#about">About Danny</a></li>
<li><a className="text-base text-slate-500 hover:text-slate-900 transition-colors" href="#services">Services</a></li>
<li><a className="text-base text-slate-500 hover:text-slate-900 transition-colors" href="#approach">Approach</a></li>
<li><a className="text-base text-slate-500 hover:text-slate-900 transition-colors" href="#">Testimonials</a></li>
</ul>
</div>
<div>
<h4 className="text-base font-semibold tracking-tight text-slate-900 mb-6">Contact</h4>
<ul className="space-y-4 text-base text-slate-500">
<li className="flex items-center gap-3">
<i className="w-4 h-4" data-lucide="mail" strokeWidth="1.5"></i>
                            hello@dannycoach.com
                        </li>
<li className="flex items-center gap-3">
<i className="w-4 h-4" data-lucide="globe" strokeWidth="1.5"></i>
                            Available Worldwide
                        </li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-base text-slate-400">
                    © 2024 Danny Coaching. All rights reserved.
                </p>
<div className="flex gap-6">
<a className="text-base text-slate-400 hover:text-slate-900 transition-colors" href="#">Privacy Policy</a>
<a className="text-base text-slate-400 hover:text-slate-900 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>




    </>
  );
}
